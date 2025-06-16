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
    (e._sentryDebugIds[t] = 'e723d912-c5bc-4a81-8248-57406c6adbc1'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-e723d912-c5bc-4a81-8248-57406c6adbc1'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6971],
  {
    83661: function (e, t, r) {
      r.d(t, {
        b: function () {
          return g;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(78830),
        o = r(79070),
        l = r(54655),
        d = r(28920),
        s = r(38819);
      let c = (0, s.Z)(l.Kqy, { target: 'ei056x80' })(
          'position:relative;height:32px;align-items:center;'
        ),
        u = (0, s.Z)(l.Kqy, { target: 'ei056x81' })(
          'position:absolute;top:1px;right:1px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';width:8px;height:8px;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center;',
          (0, l.ClW)(l.c15, '300ms'),
          ';'
        ),
        h = (0, s.Z)('span', { target: 'ei056x82' })(
          'white-space:nowrap;',
          (e) => {
            let { theme: t } = e;
            return l.IED.body.xxs.regular(t, { color: 'text.secondary' });
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{',
          (e) => {
            let { theme: t } = e;
            return l.IED.body.xs.regular(t, { color: 'text.secondary' });
          },
          '}'
        ),
        p = {
          vault: {
            apy: {
              title: 'Net APY',
              tooltip: "The net APY you're earning across all Morpho Vaults.",
              tooltipButton: 'View your Net APY.',
            },
            reward: {
              title: 'Claimable Rewards',
              tooltip: 'Rewards that you can claim from Morpho.',
            },
          },
          market: {
            apy: {
              title: 'Net Rate',
              tooltip: "The net rate you're borrowing across all Morpho Markets.",
              tooltipButton: 'View your Net Rate.',
            },
            reward: {
              title: 'Claimable Rewards',
              tooltip: 'Rewards that you can claim from Morpho.',
            },
          },
        };
      var g = (0, i.memo)((e) => {
        let {
            value: t,
            isExpanded: r,
            isSimulated: i,
            variant: s,
            mode: g,
            onModeChange: m,
            hasRewardClaimable: y,
            loading: v,
          } = e,
          Z = p[s][g].tooltip,
          x = p[s][g].title,
          b = p[s].apy.tooltipButton;
        return (0, n.BX)(d.xN, {
          isExpanded: r,
          children: [
            (0, n.BX)(l.Kqy, {
              gap: 'xs',
              direction: 'column',
              align: 'start',
              children: [
                (0, n.BX)(l.Kqy, {
                  direction: 'row',
                  gap: 'xs',
                  children: [
                    (0, n.tZ)(l.ua7, {
                      content: Z,
                      disabled: !Z,
                      children: (0, n.tZ)(h, { children: x }),
                    }),
                    'reward' === g &&
                      (0, n.tZ)(l.bEE, {
                        tooltipContent: 'Some rewards may be claimable from Merkl.',
                      }),
                  ],
                }),
                v && 'reward' === g
                  ? (0, n.tZ)(l.OdW, { width: '72px', height: '24px' })
                  : (0, n.BX)(l.Kqy, {
                      gap: 1,
                      children: [
                        'reward' === g &&
                          (0, n.tZ)(l.xvT.Title.XS, { color: 'text.tertiary', children: '$' }),
                        (0, n.tZ)(l.ZT$, {
                          TextVariant: l.xvT.Title.XS,
                          color: 'text.body',
                          isSimulated: i && 'apy' === g,
                          children: t,
                        }),
                        'apy' === g &&
                          (0, n.tZ)(l.ZT$, {
                            TextVariant: l.xvT.Title.XS,
                            isSimulated: i,
                            color: 'text.tertiary',
                            children: '%',
                          }),
                      ],
                    }),
              ],
            }),
            (0, n.BX)(l.Kqy, {
              gap: 'xs',
              align: 'center',
              children: [
                (0, n.tZ)(a.M, {
                  mode: 'wait',
                  initial: !1,
                  children: (0, n.tZ)(l.ua7, {
                    content: b,
                    children: r
                      ? (0, n.tZ)(
                          o.E.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.1 },
                            children: (0, n.tZ)(l.zxk, {
                              variant: 'apy' === g ? 'secondary' : 'ghost',
                              size: 'small',
                              iconLeft: 'InterestGeneratedPlain20',
                              label: 'APY',
                              onClick: () => m('apy'),
                            }),
                          },
                          'apy-button-expanded'
                        )
                      : (0, n.tZ)(
                          o.E.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.1 },
                            children: (0, n.tZ)(l.zxk, {
                              variant: 'apy' === g ? 'secondary' : 'ghost',
                              iconAlone: 'InterestGeneratedPlain20',
                              onClick: () => m('apy'),
                            }),
                          },
                          'apy-button-collapsed'
                        ),
                  }),
                }),
                (0, n.BX)(c, {
                  children: [
                    y && (0, n.tZ)(u, {}),
                    (0, n.tZ)(a.M, {
                      mode: 'wait',
                      initial: !1,
                      children: (0, n.tZ)(l.ua7, {
                        content: 'View and claim your rewards.',
                        children: r
                          ? (0, n.tZ)(
                              o.E.div,
                              {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: 0.1 },
                                children: (0, n.tZ)(l.zxk, {
                                  'data-testid': 'reward-button',
                                  size: 'small',
                                  variant: 'reward' === g ? 'secondary' : 'ghost',
                                  iconLeft: 'RewardsPlain20',
                                  label: 'Rewards',
                                  onClick: () => m('reward'),
                                }),
                              },
                              'reward-button-expanded'
                            )
                          : (0, n.tZ)(
                              o.E.div,
                              {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: 0.1 },
                                children: (0, n.tZ)(l.zxk, {
                                  'data-testid': 'reward-button',
                                  variant: 'reward' === g ? 'secondary' : 'ghost',
                                  iconAlone: 'RewardsPlain20',
                                  onClick: () => m('reward'),
                                }),
                              },
                              'reward-button-collapsed'
                            ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
    },
    10126: function (e, t, r) {
      r.d(t, {
        O: function () {
          return A;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(27878),
        o = r(55385),
        l = r(60626),
        d = r(12556),
        s = r(54655),
        c = r(99971),
        u = r(43779),
        h = r(89991),
        p = r(81066),
        g = r(71618),
        m = r(38819);
      let y = (0, m.Z)('div', { target: 'e13isi4a0' })(
          'min-height:345px;display:flex;flex-direction:column;justify-content:space-between;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{height:auto;}'
        ),
        v = (0, m.Z)(a.l_, {
          shouldForwardProp: (e) => 'hasOneRewardProvider' !== e,
          target: 'e13isi4a1',
        })(
          'max-height:',
          (e) => {
            let { hasOneRewardProvider: t } = e;
            return t ? '218px' : '192px';
          },
          ';'
        ),
        Z = (0, m.Z)('div', { target: 'e13isi4a2' })(
          'position:sticky;width:100%;border-top:1px solid ',
          (e) => {
            let { theme: t } = e;
            return t.colors.border.primary;
          },
          ';z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.base.higher;
          },
          ';'
        ),
        x = (0, m.Z)('div', { target: 'e13isi4a3' })(
          'padding:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';display:flex;flex-direction:column;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{padding-bottom:',
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          ';}'
        );
      var b = r(42418),
        w = r(35047);
      let f = (0, m.Z)('div', { target: 'eavghp0' })(
          'position:relative;display:inline-block;margin-right:4px;'
        ),
        k = (0, m.Z)('div', { target: 'eavghp1' })(
          'position:absolute;bottom:0;right:-4px;z-index:1;height:14px;width:14px;'
        );
      var B = (0, i.memo)((e) => {
          let { asset: t } = e;
          return (0, n.BX)(f, {
            children: [
              (0, n.tZ)(s.qEK, { src: t.logoURI, size: 'medium' }),
              (0, n.tZ)(k, {
                children: (0, n.tZ)(s.ZcK, {
                  chainId: t.chain.id,
                  srcAvatarProps: { size: 'xsmall' },
                }),
              }),
            ],
          });
        }),
        X = r(40252),
        M = r(50825),
        T = r(5469);
      let C = (0, m.Z)('div', { target: 'e2j7l80' })(
        'display:flex;align-items:center;padding:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.s;
        },
        ';justify-content:space-between;height:',
        (e) => {
          let { theme: t } = e;
          return t.padding.m;
        },
        ';box-sizing:content-box;'
      );
      var R = (0, i.memo)((e) => {
          let { asset: t, type: r } = e,
            a = (0, i.useMemo)(
              () => X.ChainUtils.getExplorerAddressUrl(t.chain.id, t.address),
              [t.address, t.chain.id]
            ),
            o = (0, i.useMemo)(() => (0, s.GQT)(t.address), [t.address]),
            l = (0, i.useMemo)(() => !(0, s.Czs)(t.address), [t.address]);
          return (0, n.BX)(C, {
            children: [
              (0, n.BX)(s.Kqy, {
                gap: 4,
                align: 'center',
                children: [
                  (0, n.tZ)(s.qEK, { src: t.logoURI }),
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, { children: t.symbol }),
                  l &&
                    (0, n.tZ)(s.mUV, {
                      toCopy: t.address,
                      toastMessage: 'Address copied to clipboard.',
                      tooltipMessage: 'Copy address.',
                      size: 'small',
                    }),
                ],
              }),
              'safe' === r
                ? (0, n.tZ)(M.Z, {
                    href: T.z,
                    buttonProps: { variant: 'secondary', size: 'small', label: 'Learn more' },
                  })
                : (0, n.tZ)(M.Z, {
                    href: a,
                    buttonProps: { variant: 'secondary', size: 'small', label: o },
                  }),
            ],
          });
        }),
        E = (0, i.memo)((e) => {
          var t;
          let { reward: r, maxWidth: i } = e,
            a = r.rewardToken.token;
          return (0, n.tZ)(s.KNv, {
            hoverCardContent: (0, n.tZ)(R, { asset: a, type: r.type }),
            padding: '4px 6px',
            children: (0, n.BX)(s.Kqy, {
              align: 'center',
              gap: 4,
              maxWidth: i,
              children: [
                (0, n.tZ)(B, { asset: a }),
                (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                  lineHeight: 'normal',
                  shorten: 1,
                  children: (0, w.formatLongString)(
                    null !== (t = a.symbol) && void 0 !== t ? t : '',
                    8
                  ),
                }),
              ],
            }),
          });
        });
      let P = [
          {
            accessorKey: 'rewardToken.token.symbol',
            header: () =>
              (0, n.tZ)(s.ua7, {
                content: "The token you're earning rewards in.",
                children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  marginLeft: '7px',
                  children: 'Token',
                }),
              }),
            cell: (e) => {
              let { row: t } = e;
              return (0, n.tZ)(E, { reward: t.original, maxWidth: '100px' });
            },
            skeletonCell: (0, n.BX)(s.Kqy, {
              padding: '4px 6px',
              align: 'center',
              gap: 4,
              children: [
                (0, n.tZ)('div', {
                  style: { height: 24, width: 26, marginRight: 4 },
                  children: (0, n.tZ)(s.OdW, {
                    width: '20px',
                    height: '20px',
                    borderRadius: '10px',
                  }),
                }),
                (0, n.tZ)(s.OdW, { width: '35px', height: '16px' }),
              ],
            }),
          },
          {
            accessorKey: 'claimable',
            sortingFn: (e, t) => {
              var r, n, i, a;
              return (0, b.JJ)(
                null !==
                  (i =
                    null === (r = e.original.claimable) || void 0 === r ? void 0 : r.amountUsd) &&
                  void 0 !== i
                  ? i
                  : 0n,
                null !==
                  (a =
                    null === (n = t.original.claimable) || void 0 === n ? void 0 : n.amountUsd) &&
                  void 0 !== a
                  ? a
                  : 0n
              );
            },
            header: () =>
              (0, n.tZ)(s.ua7, {
                content: 'Rewards that are currently claimable.',
                children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  children: 'Claimable',
                }),
              }),
            cell: (e) => {
              var t, r, i;
              let { row: a } = e;
              return 'safe' === a.original.type
                ? null
                : (0, n.tZ)(s.F4u, {
                    token: null === (t = a.original.rewardToken) || void 0 === t ? void 0 : t.token,
                    amount: null === (r = a.original.claimable) || void 0 === r ? void 0 : r.amount,
                    amountUsd:
                      null === (i = a.original.claimable) || void 0 === i ? void 0 : i.amountUsd,
                  });
            },
            skeletonCell: (0, n.BX)(s.Kqy, {
              direction: 'column',
              gap: 2,
              children: [
                (0, n.tZ)(s.OdW, { width: '30px', height: '17px' }),
                (0, n.tZ)(s.OdW, { width: '36px', height: '17px' }),
              ],
            }),
          },
          {
            accessorKey: 'accruing',
            sortingFn: (e, t) => {
              var r, n, i, a;
              return (0, b.JJ)(
                null !==
                  (i = null === (r = e.original.accruing) || void 0 === r ? void 0 : r.amountUsd) &&
                  void 0 !== i
                  ? i
                  : 0n,
                null !==
                  (a = null === (n = t.original.accruing) || void 0 === n ? void 0 : n.amountUsd) &&
                  void 0 !== a
                  ? a
                  : 0n
              );
            },
            header: () =>
              (0, n.tZ)(s.ua7, {
                content: 'Accruing rewards that will be claimable at the end of this epoch.',
                children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  children: 'Accruing',
                }),
              }),
            cell: (e) => {
              var t, r, i;
              let { row: a } = e;
              return 'safe' === a.original.type
                ? null
                : (0, n.tZ)(s.F4u, {
                    token: null === (t = a.original.rewardToken) || void 0 === t ? void 0 : t.token,
                    amount: null === (r = a.original.accruing) || void 0 === r ? void 0 : r.amount,
                    amountUsd:
                      null === (i = a.original.accruing) || void 0 === i ? void 0 : i.amountUsd,
                  });
            },
            skeletonCell: (0, n.BX)(s.Kqy, {
              direction: 'column',
              gap: 2,
              children: [
                (0, n.tZ)(s.OdW, { width: '30px', height: '17px' }),
                (0, n.tZ)(s.OdW, { width: '36px', height: '17px' }),
              ],
            }),
          },
        ],
        S = { claimable: 'Claimable amount', accruing: 'Accruing amount' };
      var A = (0, i.memo)((e) => {
        let { rewardData: t } = e,
          { targetChain: r, account: m } = (0, h.Z_)(),
          { toggleDialog: b } = (0, s.DAv)(),
          [w, f] = (0, i.useState)([{ id: 'claimable', desc: !0 }]),
          k = (0, i.useMemo)(
            () => P.map((e) => ({ ...e, enableSorting: t.display.rewardsMerged.length > 1 })),
            [t.display.rewardsMerged.length]
          ),
          B = (0, o.b7)({
            data: t.display.rewardsMerged,
            getCoreRowModel: (0, l.sC)(),
            onSortingChange: f,
            getSortedRowModel: (0, l.tj)(),
            manualSorting: !1,
            state: { sorting: w },
            columns: k,
            enableSortingRemoval: !1,
            sortDescFirst: !0,
            manualPagination: !0,
          }),
          X = (0, i.useCallback)(() => {
            b((0, n.tZ)(c.ar, {}));
          }, [b]),
          M = Array.from({ length: 2 }, () => P.map((e) => e.skeletonCell)),
          T = (0, i.useMemo)(
            () =>
              t.display.rewardsMorpho
                .filter((e) => e.type !== p.Ii.Merkl)
                .some((e) => {
                  var t;
                  return null === (t = e.claimable) || void 0 === t ? void 0 : t.amount;
                }),
            [t.display.rewardsMorpho]
          ),
          C = (0, i.useMemo)(
            () =>
              t.display.rewardsMerkl
                .filter((e) => e.type === p.Ii.Merkl)
                .some((e) => {
                  var t;
                  return null === (t = e.claimable) || void 0 === t ? void 0 : t.amount;
                }),
            [t.display.rewardsMerkl]
          );
        return t.error
          ? (0, n.tZ)(g.bX, { message: 'Something went wrong.' })
          : 0 !== t.display.rewardsMerged.length || t.loading
            ? (0, n.BX)(y, {
                'data-testid': 'reward-card',
                children: [
                  (0, n.BX)('div', {
                    children: [
                      (0, n.tZ)(u.Ei.Root, {
                        children: (0, n.tZ)(u.Ei.Thead, {
                          children: B.getHeaderGroups().map((e) =>
                            (0, n.tZ)(u._5, { headerGroup: e, columnLabels: S }, e.id)
                          ),
                        }),
                      }),
                      (0, n.BX)(a.fC, {
                        children: [
                          (0, n.tZ)(v, {
                            hasOneRewardProvider: C !== T || (!C && !T),
                            children: (0, n.tZ)(u.Ei.Root, {
                              children: (0, n.BX)(u.Ei.Tbody, {
                                children: [
                                  !t.loading &&
                                    B.getRowModel().rows.map((e) =>
                                      (0, n.tZ)(u.KL, { row: e }, e.id)
                                    ),
                                  t.loading &&
                                    M.map((e, t) =>
                                      (0, n.tZ)(
                                        u.KL,
                                        { skeletonRow: e },
                                        t + 'skeleton-table-reward'
                                      )
                                    ),
                                ],
                              }),
                            }),
                          }),
                          (0, n.tZ)(a.LW, {
                            orientation: 'vertical',
                            children: (0, n.tZ)(a.bU, {}),
                          }),
                          (0, n.tZ)(a.Ns, {}),
                        ],
                      }),
                    ],
                  }),
                  !t.loading &&
                    (0, n.tZ)(Z, {
                      children: (0, n.BX)(x, {
                        children: [
                          C &&
                            (null == m ? void 0 : m.address) &&
                            (0, n.tZ)(s.dLw, {
                              'data-testid': 'claim-merkl-button',
                              href: ''.concat(d.mH, '/').concat(m.address),
                              children: (0, n.tZ)(s.zxk, {
                                style: { width: '100%' },
                                size: T ? 'default' : 'big',
                                children: (0, n.BX)(s.Kqy, {
                                  align: 'center',
                                  gap: 4,
                                  children: [
                                    T
                                      ? (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                                          lineHeight: 'normal',
                                          color: 'text.button.primary',
                                          children: 'Claim on',
                                        })
                                      : (0, n.tZ)(s.xvT.Body.S.Regular, {
                                          lineHeight: 'normal',
                                          color: 'text.button.primary',
                                          children: 'Claim on',
                                        }),
                                    (0, n.tZ)(s.JO$, {
                                      icon: 'MerklPlain32',
                                      size: T ? 32 : 40,
                                      color: 'icon.button.primary',
                                    }),
                                    (0, n.tZ)(s.JO$, { icon: 'ArrowDiagonalUpPlain20' }),
                                  ],
                                }),
                              }),
                            }),
                          (T || (!T && !C)) &&
                            (0, n.tZ)(s.zxk, {
                              onClick: X,
                              style: { width: '100%' },
                              size: C ? 'default' : 'big',
                              disabled: !T,
                              'data-testid': 'claim-morpho-button',
                              children: (0, n.tZ)(s.Kqy, {
                                align: 'center',
                                gap: 4,
                                children: C
                                  ? (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                                      lineHeight: 'normal',
                                      color: 'text.button.primary',
                                      children: 'Claim on Morpho',
                                    })
                                  : (0, n.tZ)(s.xvT.Body.S.Regular, {
                                      lineHeight: 'normal',
                                      color: T ? 'text.button.primary' : 'icon.button.disabled',
                                      children: 'Claim on Morpho',
                                    }),
                              }),
                            }),
                        ],
                      }),
                    }),
                ],
              })
            : (0, n.tZ)(g.bX, {
                message: 'You currently have no claimable or accruing rewards on '.concat(
                  r.name,
                  '.'
                ),
              });
      });
    },
    85462: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(40388),
        l = r(89991),
        d = r(70064),
        s = r(73694);
      function c(e, t) {
        setTimeout(() => {
          (e.style.opacity = '1'), (e.style.transform = 'translate(0, 0)');
        }, t);
      }
      t.Z = (0, i.memo)((e) => {
        let {
            title: t,
            animationMovURL: r,
            animationWebmURL: u,
            metricSlot: h,
            animationSpeed: p,
          } = e,
          { modal: g } = (0, l.Z_)(),
          { theme: m } = (0, a.TCT)(),
          y = (0, a.ach)(m.breakpoints.down('s')),
          v = (0, a.ach)(m.breakpoints.down('xs')),
          Z = (0, a.ach)(m.breakpoints.down('m')),
          x = (0, i.useRef)([]),
          b = (e) => (t) => {
            x.current && (x.current[e] = t);
          };
        (0, i.useLayoutEffect)(() => {
          x.current.forEach((e, t) => {
            e && c(e, 500 + 150 * t);
          });
        }, [v, y, Z]);
        let w = (0, i.useMemo)(
            () =>
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(s.w6, { ref: b(1), children: t[0] }, '0'),
                  (0, n.tZ)(s.w6, { ref: b(2), children: t[1] }, '1'),
                ],
              }),
            [t]
          ),
          f = (0, n.tZ)(s.K9, { children: w });
        v
          ? (f = (0, n.tZ)(s.$F, { children: w }))
          : y
            ? (f = (0, n.tZ)(s.ML, { children: w }))
            : Z && (f = (0, n.tZ)(s.Im, { children: w }));
        let k = (0, i.useRef)(null);
        return (
          (0, i.useLayoutEffect)(() => {
            let e = k.current;
            if (!e) return;
            (e.volume = 0),
              (e.muted = !0),
              'number' != typeof p || isNaN(p) || (e.playbackRate = p);
            let t = async () => {
              try {
                await e.play(), c(e, 100);
              } catch (e) {}
            };
            if (e.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
              t();
              return;
            }
            return (
              e.addEventListener('canplay', t),
              () => {
                e.removeEventListener('canplay', t);
              }
            );
          }, [p]),
          (0, i.useEffect)(() => {
            let e = k.current;
            e && e.load();
          }, [r, u]),
          (0, n.BX)(s.PQ, {
            children: [
              (0, n.BX)(s.OO, {
                children: [
                  (0, n.tZ)(s.w6, {
                    ref: b(0),
                    children: (0, n.tZ)(d.Z, {
                      fallback: (0, n.tZ)(n.HY, {}),
                      children: (0, n.tZ)(i.Suspense, {
                        fallback: (0, n.tZ)(a.OdW, {
                          borderRadius: '50px',
                          width: 220,
                          height: 31,
                        }),
                        children: h,
                      }),
                    }),
                  }),
                  f,
                  (0, n.tZ)(s.w6, {
                    ref: b(3),
                    children: (0, n.tZ)(o.default, {
                      onClick: () => g.open(),
                      children: 'Connect Wallet',
                    }),
                  }),
                ],
              }),
              (0, n.BX)(s.UZ, {
                loop: !0,
                autoPlay: !0,
                preload: 'metadata',
                playsInline: !0,
                muted: !0,
                ref: k,
                children: [
                  (0, n.tZ)('source', { src: r, type: 'video/mp4; codecs="hvc1"' }),
                  (0, n.tZ)('source', { src: u, type: 'video/webm; codecs=vp09.00.41.08' }),
                ],
              }),
            ],
          })
        );
      });
    },
    30328: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(70064),
        l = r(4078),
        d = r(89991),
        s = r(68690);
      t.default = (0, i.memo)((e) => {
        let { dashboardSlot: t, dashboardSkeleton: r, disconnectedSlot: c } = e,
          {
            account: { isConnected: u },
          } = (0, d.Z_)(),
          h = (0, i.useMemo)(() => (u ? r : (0, n.tZ)(s.Z, {})), [u, r]),
          p = (0, i.useMemo)(() => (u ? t : c), [u, t, c]);
        return (0, n.tZ)(l.default, {
          withOverflowingBottomBorder: !0,
          hasLargerVerticalPadding: !0,
          withoutAside: !0,
          children: (0, n.tZ)(o.Z, {
            fallback: (0, n.BX)(a.Kqy, {
              direction: 'column',
              align: 'center',
              justify: 'center',
              gap: 'm',
              style: { padding: '60px 0 40px 0' },
              children: [
                (0, n.BX)(a.xvT.Title.L, {
                  color: 'text.primary',
                  textAlign: 'center',
                  children: ['Error processing ', u ? 'Dashboard' : 'Hero'],
                }),
                (0, n.tZ)(a.xvT.Body.L.Regular, {
                  color: 'text.primary',
                  textAlign: 'center',
                  children: 'Something went wrong while loading Earn or Borrow data',
                }),
              ],
            }),
            children: (0, n.tZ)(i.Suspense, { fallback: h, children: p }),
          }),
        });
      });
    },
    98718: function (e, t, r) {
      r.d(t, {
        default: function () {
          return m;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(55412),
        l = r(23567),
        d = r(38819);
      function s() {
        let e = (0, o._)(['\n      transform: rotateX(180deg);\n    ']);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, o._)(['\n      transform: rotateX(180deg);\n    ']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      let u = (0, d.Z)('div', { target: 'ej7nhho0' })('perspective:1000px;'),
        h = (0, d.Z)('div', { target: 'ej7nhho1' })(
          'position:relative;width:100%;height:100%;transition:transform 0.4s;transform-style:preserve-3d;',
          (e) => {
            let { isFlipped: t } = e;
            return t && (0, l.iv)(s());
          }
        ),
        p = (0, d.Z)('div', { target: 'ej7nhho2' })(
          'position:',
          (e) => {
            let { isBack: t } = e;
            return t ? 'absolute' : 'relative';
          },
          ';top:0;left:0;width:100%;height:100%;backface-visibility:hidden;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';display:flex;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';padding:5px 20px;white-space:nowrap;',
          (e) => {
            let { isBack: t } = e;
            return t && (0, l.iv)(c());
          }
        ),
        g = 'https://x.com/intent/tweet?text='.concat(
          encodeURIComponent('Easter egg found on @MorphoLabs app! My custom colors \uD83D\uDC47')
        );
      var m = (0, i.memo)(function (e) {
        let { label: t, value: r } = e,
          { toggleLeva: o } = (0, a.TCT)(),
          [l, d] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          o(l);
        }, [l, o]);
        let s = (0, i.useMemo)(() => a.$0l.commas.digits(0).unit('$').trailingZero(!1).of(r), [r]);
        return s
          ? (0, n.tZ)(u, {
              onClick: () => {
                d((e) => !e);
              },
              children: (0, n.BX)(h, {
                isFlipped: l,
                children: [
                  (0, n.BX)(p, {
                    children: [
                      (0, n.tZ)(a.xvT.Body.XS.Regular, { color: 'text.secondary', children: t }),
                      (0, n.tZ)(a.xvT.Body.XS.Regular, { color: 'text.primary', children: s }),
                    ],
                  }),
                  (0, n.tZ)(p, {
                    isBack: !0,
                    children: (0, n.BX)(a.Kqy, {
                      justify: 'space-between',
                      align: 'center',
                      gap: 6,
                      grow: 1,
                      children: [
                        (0, n.BX)(a.Kqy, {
                          align: 'center',
                          gap: 6,
                          children: [
                            (0, n.tZ)(a.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              children: 'You found a',
                            }),
                            (0, n.tZ)(a.JO$, { icon: 'MorphoGradient20', size: 16 }),
                          ],
                        }),
                        (0, n.tZ)(a.dLw, {
                          href: g,
                          children: (0, n.BX)(a.zxk, {
                            size: 'small',
                            variant: 'ghost',
                            style: { padding: '0 4px' },
                            onClick: (e) => {
                              e.stopPropagation();
                            },
                            children: [
                              (0, n.tZ)(a.JO$, {
                                icon: 'XPlain20',
                                size: 14,
                                color: 'text.secondary',
                              }),
                              (0, n.tZ)(a.JO$, {
                                icon: 'ArrowDiagonalUpPlain20',
                                size: 16,
                                color: 'text.secondary',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null;
      });
    },
    34204: function (e, t, r) {
      r.d(t, {
        M: function () {
          return s;
        },
      });
      var n = r(58258),
        i = r(54655),
        a = r(18313),
        o = r(34937),
        l = r(243),
        d = r(83669);
      function s(e) {
        let {
            queryDocument: t,
            queryVariables: r,
            serverQueryVariables: s,
            serverQueryResult: c,
            now: u,
            skipClientQuery: h,
            initialTimeFrame: p = a.B,
            dataExtractor: g,
          } = e,
          [m, y] = (0, n.useState)(p),
          v = (0, n.useMemo)(
            () => ({ ...r, options: (0, o.Ai)({ timeFrame: m, now: u }) }),
            [r, u, m]
          ),
          Z = (0, d.s)({
            queryDocument: t,
            queryVariables: v,
            serverQueryVariables: s,
            serverQueryResult: c,
            skipClientQuery: h,
          }),
          { data: x, loading: b, error: w, isNotFound: f } = (0, n.useMemo)(() => (0, l.I)(Z), [Z]);
        return {
          timeFrame: m,
          setTimeFrame: y,
          data: (0, n.useMemo)(() => {
            if (!x) return [];
            let e = g(x);
            switch (e.type) {
              case 'BigInt':
                return (0, i.EES)(e.value, e.decimals);
              case 'Float':
              case 'Int':
                return (0, i.EES)(e.value);
            }
          }, [x, g]),
          loading: b,
          error: (0, n.useMemo)(() => (f ? void 0 : w), [f, w]),
        };
      }
    },
    93022: function (e, t, r) {
      r.d(t, {
        V: function () {
          return p;
        },
      });
      var n = r(58258),
        i = r(35047),
        a = r(18313),
        o = r(89991),
        l = r(55412);
      function d() {
        let e = (0, l._)([
          '\n  query GetUserPositionCount(\n    $marketPositionFilters: MarketPositionFilters\n    $vaultPositionFilters: VaultPositionFilters\n  ) {\n    marketPositions(where: $marketPositionFilters) {\n      items {\n        id\n        market {\n          id\n          loanAsset {\n            id\n            chain {\n              id\n            }\n          }\n        }\n      }\n      pageInfo {\n        countTotal\n      }\n    }\n    vaultPositions(where: $vaultPositionFilters) {\n      items {\n        id\n        vault {\n          id\n          asset {\n            id\n            chain {\n              id\n            }\n          }\n        }\n      }\n      pageInfo {\n        countTotal\n      }\n    }\n  }\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      let s = (0, r(3245).Ps)(d());
      var c = r(243),
        u = r(83669);
      let h = (e) => {
          let { queryResult: t } = e;
          return (0, n.useMemo)(
            () =>
              a.Cq.AVAILABLE_CHAINS.reduce((e, r) => {
                var n, i;
                return {
                  ...e,
                  [r.id]: {
                    earn:
                      null == t
                        ? void 0
                        : null === (n = t.vaultPositions.items) || void 0 === n
                          ? void 0
                          : n.filter((e) => e.vault.asset.chain.id === r.id).length,
                    borrow:
                      null == t
                        ? void 0
                        : null === (i = t.marketPositions.items) || void 0 === i
                          ? void 0
                          : i.filter((e) => e.market.loanAsset.chain.id === r.id).length,
                  },
                };
              }, {}),
            [t]
          );
        },
        p = (e) => {
          let { queryVariables: t, queryResult: r, type: l } = e,
            { account: d, targetChainId: p } = (0, o.Z_)(),
            g = (0, n.useMemo)(
              () => ({
                ...t,
                marketPositionFilters: {
                  ...(null == t ? void 0 : t.marketPositionFilters),
                  userAddress_in: [d.address],
                },
                vaultPositionFilters: {
                  ...(null == t ? void 0 : t.vaultPositionFilters),
                  userAddress_in: [d.address],
                },
              }),
              [d.address, t]
            ),
            m = (0, n.useMemo)(() => {
              if (!(0, i.isDefined)(d.address) || !(0, i.isDefined)(p)) return !0;
            }, [d.address, p]),
            y = (0, u.s)({
              queryDocument: s,
              queryVariables: g,
              serverQueryResult: r,
              serverQueryVariables: t,
              skipClientQuery: m,
            }),
            {
              data: v,
              loading: Z,
              isNotFound: x,
              error: b,
            } = (0, n.useMemo)(() => (0, c.I)(y), [y]);
          if (b && !x) throw b;
          let w = h({ queryResult: v });
          return {
            positionButtons: (0, n.useMemo)(
              () =>
                a.Cq.AVAILABLE_CHAIN_IDS.map((e) =>
                  (0, i.entries)(w[e]).map((t) => {
                    let [r, n] = t;
                    return { chainId: e, count: n, variant: r };
                  })
                )
                  .flat()
                  .filter((e) => !(e.chainId === p && e.variant === l)),
              [w, l, p]
            ),
            loading: Z,
            isNotFound: x,
            error: b,
          };
        };
    },
    34334: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return i;
        },
      });
      var n = r(58258);
      function i(e) {
        let { existingAddresses: t, newAddresses: r } = e;
        return (0, n.useMemo)(() => {
          let e = new Set(),
            n = new Set(t);
          return (
            r.forEach((t) => {
              n.has(t) || e.add(t);
            }),
            Array.from(e)
          );
        }, [t, r]);
      }
    },
  },
]);
