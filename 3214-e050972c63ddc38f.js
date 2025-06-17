try {
  let t =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    e = new t.Error().stack;
  e &&
    ((t._sentryDebugIds = t._sentryDebugIds || {}),
    (t._sentryDebugIds[e] = '9d91cf80-407f-47ae-93f2-1da851043108'),
    (t._sentryDebugIdIdentifier = 'sentry-dbid-9d91cf80-407f-47ae-93f2-1da851043108'));
} catch (t) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3214, 242, 9286],
  {
    95284: function (t, e, i) {
      var r = i(78286),
        n = i(58258),
        o = i(40252),
        a = i(54655),
        d = i(50825),
        l = i(89991);
      e.Z = (0, n.memo)((t) => {
        let { loading: e } = t,
          { targetChainId: i } = (0, l.Z_)(),
          s = o.ChainUtils.CHAIN_METADATA[i],
          c = (0, n.useMemo)(() => '/'.concat(s.name.toLowerCase(), '/earn'), [s.name]);
        return (0, r.BX)(a.Zbd, {
          gap: 'm',
          padding: 'm',
          height: { base: '100%', s: 'auto' },
          fullWidth: !0,
          direction: 'column',
          flex: 1,
          justify: 'center',
          children: [
            e
              ? (0, r.tZ)(a.OdW, { width: 200, height: 20, borderRadius: '12px', margin: '0 auto' })
              : (0, r.tZ)(a.xvT.Body.S.Regular, {
                  textAlign: 'center',
                  children: 'Start earning yield on your assets.',
                }),
            e
              ? (0, r.tZ)(a.OdW, { width: '100%', height: 48, borderRadius: '200px' })
              : (0, r.tZ)(d.Z, {
                  mode: 'internal',
                  href: c,
                  buttonProps: {
                    variant: 'primary',
                    size: 'big',
                    label: 'Go to Earn',
                    style: { width: '100%' },
                  },
                }),
          ],
        });
      });
    },
    88: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return m;
        },
      });
      var r = i(78286),
        n = i(58258),
        o = i(12556),
        a = i(54655),
        d = i(62239),
        l = i(99598),
        s = i(4899),
        c = (0, n.memo)((t) => {
          let { imgSrc: e, title: i, description: n, items: o, loading: d, onClickExpand: l } = t;
          return (0, r.BX)(a.Kqy, {
            direction: 'column',
            flex: 1,
            width: '100%',
            gap: 'xs',
            children: [
              (0, r.tZ)(a.Kqy, {
                height: 122,
                width: '100%',
                align: 'center',
                justify: 'center',
                paddingBottom: d ? 12 : void 0,
                children: d
                  ? (0, r.tZ)(a.OdW, { width: 139, height: 121, borderRadius: '12px' })
                  : (0, r.tZ)(s.default, {
                      src: e,
                      alt: i,
                      width: 139,
                      height: 121,
                      style: { margin: '0 auto' },
                    }),
              }),
              (0, r.BX)(a.Kqy, {
                direction: 'column',
                gap: 's',
                children: [
                  (0, r.tZ)(a.Kqy, {
                    direction: 'column',
                    gap: 3,
                    align: 'center',
                    justify: 'center',
                    children: d
                      ? (0, r.tZ)(a.OdW, { width: '100%', height: 47, borderRadius: '12px' })
                      : (0, r.BX)(r.HY, {
                          children: [
                            (0, r.tZ)(a.xvT.Body.M.Regular, { children: i }),
                            (0, r.tZ)(a.xvT.Body.XXS.Regular, {
                              color: 'text.secondary',
                              children: n,
                            }),
                          ],
                        }),
                  }),
                  d
                    ? (0, r.tZ)(a.OdW, { width: '100%', height: 198, borderRadius: '12px' })
                    : (0, r.tZ)(a.Zbd, {
                        background: 'background.tertiary',
                        direction: 'column',
                        width: '100%',
                        paddingTop: 8,
                        paddingBottom: 16,
                        children: (0, r.tZ)(a.Kqy, {
                          direction: 'column',
                          gap: 's',
                          children: o.map((t) =>
                            (0, r.BX)(
                              a.Kqy,
                              {
                                direction: 'column',
                                gap: 'xs',
                                align: 'center',
                                justify: 'center',
                                children: [
                                  (0, r.tZ)(a.Kqy, {
                                    padding: 4,
                                    children: (0, r.tZ)(a.JO$, {
                                      icon: t.icon,
                                      size: 15,
                                      color: 'constant.color.active',
                                    }),
                                  }),
                                  (0, r.tZ)(a.xvT.Body.XXS.Regular, {
                                    color: 'text.secondary',
                                    children: t.title,
                                  }),
                                ],
                              },
                              t.title
                            )
                          ),
                        }),
                      }),
                  d
                    ? (0, r.tZ)(a.OdW, { width: '100%', height: 32, borderRadius: '200px' })
                    : (0, r.tZ)(a.zxk, {
                        variant: 'secondary',
                        onClick: l,
                        disabled: d,
                        children: 'Learn More',
                      }),
                ],
              }),
            ],
          });
        });
      let u = (0, o.$B)('v2/assets/images/borrow-migration-v2-lightweight.png'),
        p = (0, o.$B)('v2/assets/images/earn-migration-v2-lightweight.png'),
        h = [
          { icon: 'SearchPlain20', title: 'Curated Risks' },
          { icon: 'InterestGeneratedPlain20', title: 'Better Yields' },
          { icon: 'ShowPlain20', title: 'Non-custodial' },
        ],
        g = [
          { icon: 'FeePlain20', title: 'Lower Costs' },
          { icon: 'LLTVPlain20', title: 'Higher LLTV' },
          { icon: 'TokenPlain20', title: 'Any Asset' },
        ];
      var m = (0, n.memo)((t) => {
        let { loading: e } = t,
          { toggleDialog: i } = (0, a.DAv)(),
          o = (0, n.useCallback)(() => {
            i((0, r.tZ)(l.M, {}), { closable: !0, fullSize: !0 });
          }, [i]),
          s = (0, n.useCallback)(() => {
            i((0, r.tZ)(d.Uj, {}), { closable: !0, fullSize: !0 });
          }, [i]);
        return (0, r.tZ)(a.Kqy, {
          direction: 'column',
          gap: 'm',
          width: '100%',
          children: (0, r.BX)(a.Zbd, {
            padding: { base: 'm', s: 's' },
            gap: { base: 's', s: 'm' },
            width: '100%',
            direction: { base: 'row', s: 'column' },
            children: [
              (0, r.tZ)(c, {
                imgSrc: p,
                title: 'Earn',
                description: 'with Morpho Vaults',
                items: h,
                onClickExpand: s,
                loading: e,
              }),
              (0, r.tZ)(c, {
                imgSrc: u,
                title: 'Borrow',
                description: 'on Morpho',
                items: g,
                onClickExpand: o,
                loading: e,
              }),
            ],
          }),
        });
      });
    },
    31040: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return g;
        },
      });
      var r = i(78286),
        n = i(58258),
        o = i(54655),
        a = i(23567),
        d = i(38819);
      let l = (0, a.F4)(
          '0%{background-position-x:0%;}50%{background-position-x:100%;}100%{background-position-x:0%;}'
        ),
        s = (0, a.F4)(
          '0%{background-position-y:0%;}30%{background-position-y:100%;}70%{background-position-y:50%;}100%{background-position-y:0%;}'
        ),
        c = (0, a.F4)(
          '0%{background-size:200% 200%;}40%{background-size:250% 250%;}70%{background-size:220% 220%;}100%{background-size:200% 200%;}'
        ),
        u = (0, d.Z)('div', { target: 'ecp55u90' })(
          'position:relative;display:inline-block;span{-webkit-background-clip:text !important;background-clip:text !important;color:transparent !important;background-image:radial-gradient(\n      circle at 50% 50%,',
          o.y0l.colors.color.active,
          ' 0%,#99ceff 25%,',
          o.y0l.colors.chart.startGradient,
          ' 50%,',
          o.y0l.colors.color.brand,
          ' 65%,#c0d6ff 85%,',
          o.y0l.colors.color.active,
          ' 100%\n    ) !important;background-size:200% 200% !important;animation:',
          l,
          ' 13s ease-in-out infinite,',
          s,
          ' 17s ease-in-out infinite,',
          c,
          ' 19s ease infinite !important;transition:background-position 0.2s ease;}'
        );
      var p = (0, n.memo)((t) => {
          let { children: e, ...i } = t;
          return (0, r.tZ)(u, { children: (0, r.tZ)(o.ZT$, { ...i, children: e }) });
        }),
        h = i(4078),
        g = (0, n.memo)((t) => {
          let { children: e, loading: i, spacing: n = 'l' } = t,
            a = (0, o.dD4)();
          return (0, r.tZ)(o.Kqy, {
            basis: '100%',
            children: (0, r.tZ)(h.default, {
              noBackground: !0,
              withoutAside: !0,
              children: (0, r.BX)(o.Kqy, {
                align: 'center',
                justify: 'center',
                direction: 'column',
                gap: n,
                width: '100%',
                marginBlock: { base: void 0, 'content-m': 80 },
                children: [
                  i
                    ? (0, r.BX)(o.Kqy, {
                        gap: 's',
                        direction: 'column',
                        justify: 'center',
                        align: 'center',
                        flex: 1,
                        children: [
                          (0, r.tZ)(o.OdW, { width: 224, height: 53, borderRadius: '200px' }),
                          (0, r.tZ)(o.OdW, { width: 146, height: 23, borderRadius: '200px' }),
                        ],
                      })
                    : (0, r.tZ)(o.Kqy, {
                        maxWidth: { base: '100%', xs: '198px' },
                        style: { textAlign: 'center' },
                        children: (0, r.tZ)(p, {
                          TextVariant: a ? o.xvT.Title.S : o.xvT.Title.XL,
                          color: 'constant.pearl',
                          children: 'Migrate to Morpho',
                        }),
                      }),
                  e,
                ],
              }),
            }),
          });
        });
    },
    13328: function (t, e, i) {
      i.d(e, {
        a: function () {
          return l;
        },
      });
      var r = i(78286),
        n = i(58258),
        o = i(54655),
        a = i(55694),
        d = i(89991),
        l = (0, n.memo)((t) => {
          let { loading: e } = t,
            { modal: i } = (0, d.Z_)(),
            { error: l } = (0, a.w)(),
            s = (0, n.useCallback)(async () => {
              await i.disconnect(), await i.open();
            }, [i]);
          return (0, r.BX)(o.Zbd, {
            gap: 'm',
            padding: 'm',
            height: { base: '100%', s: 'auto' },
            fullWidth: !0,
            direction: 'column',
            flex: 1,
            justify: 'center',
            children: [
              e
                ? (0, r.tZ)(o.OdW, {
                    width: 200,
                    height: 20,
                    borderRadius: '12px',
                    margin: '0 auto',
                  })
                : (0, r.tZ)(o.xvT.Body.S.Regular, {
                    textAlign: 'center',
                    children: l ? 'Something went wrong.' : 'You have no position to import.',
                  }),
              e
                ? (0, r.tZ)(o.OdW, { width: '100%', height: 48, borderRadius: '200px' })
                : (0, r.tZ)(o.zxk, {
                    variant: 'primary',
                    size: 'big',
                    onClick: s,
                    label: 'Switch to another wallet',
                    style: { width: '100%' },
                  }),
            ],
          });
        });
    },
    33214: function (t, e, i) {
      i.d(e, {
        i: function () {
          return c;
        },
      });
      var r = i(78286),
        n = i(58258),
        o = i(54655),
        a = i(95284),
        d = i(88),
        l = i(31040),
        s = i(13328),
        c = (0, n.memo)(() =>
          (0, r.tZ)(l.Z, {
            loading: !0,
            spacing: 'l',
            children: (0, r.BX)(o.Kqy, {
              direction: { base: 'row', 'content-m': 'column' },
              width: '100%',
              maxWidth: '1086px',
              gap: 'm',
              children: [
                (0, r.tZ)(d.Z, { loading: !0 }),
                (0, r.BX)(o.Kqy, {
                  direction: 'column',
                  width: '100%',
                  gap: 'm',
                  children: [(0, r.tZ)(s.a, { loading: !0 }), (0, r.tZ)(a.Z, { loading: !0 })],
                }),
              ],
            }),
          })
        );
    },
    29286: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return a;
          },
        });
      var r = i(78286),
        n = i(47567),
        o = i(34097);
      function a() {
        return (0, r.tZ)(n.Z, {
          type: o.RX.Borrow,
          title: 'How Borrowing Works',
          steps: [
            {
              title: 'Provide Collateral',
              description:
                "Deposit the asset you want to borrow against. Keep in mind that you can only borrow from the market where you've supplied collateral. If you intend to borrow from multiple markets, you'll need to supply collateral to each market.",
            },
            {
              title: 'Borrow Liquidity',
              description:
                "Borrow liquidity up to an amount based on the value of provided collateral and available liquidity. Borrowers are charged a variable interest rate on the borrowed amount, determined by the market's interest rate model.",
            },
            {
              title: 'Monitor Position',
              description:
                'Monitor the LTV of your positions to avoid being eligible for liquidation. If the loan-to-value-ratio of a position exceeds the liquidation loan-to-value-ratio of a given market, external liquidators can seize your collateral to repay your outstanding debt.',
            },
            {
              title: 'Repay Debt',
              description:
                'Repay your outstanding loans by returning the initial borrowed amount plus the accrued interest.',
            },
          ],
          terms:
            'Morpho is committed to industry-leading security practices, but there are still risks associated with <a href="https://docs.morpho.org/morpho/concepts/risk-documentation" target="_blank">Morpho</a> including liquidation risk.',
        });
      }
    },
    99598: function (t, e, i) {
      i.d(e, {
        M: function () {
          return r.default;
        },
      });
      var r = i(29286);
    },
    90242: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return a;
          },
        });
      var r = i(78286),
        n = i(47567),
        o = i(34097);
      function a() {
        return (0, r.tZ)(n.Z, {
          type: o.RX.Earn,
          title: 'How Earn Works',
          steps: [
            {
              title: 'Deposit in a Morpho Vault',
              description:
                'Earn yield by depositing an asset into a vault curated by third-party risk curators. Each vault has a unique risk profile and strategy determined by the curator. Creating a vault is permissionless, so users should assess a vault’s curator and risk exposure before depositing.',
            },
            {
              title: 'Assets are supplied to Morpho Markets',
              description:
                'A Morpho Vault can only allocate deposits to Morpho Markets whitelisted by the curator. Depositors in the vault are exposed to risks related to each market, including the collateral asset, liquidation LTV, and oracles.',
            },
            {
              title: 'Earn yield from borrowers',
              description:
                'Vaults generate a yield from over-collateralized lending. Borrowers deposit collateral and borrow assets supplied to Morpho Markets, paying interest to the vault.',
            },
          ],
          terms:
            'Morpho is committed to industry-leading security practices,  but there are still risks associated with <a href="https://docs.morpho.org/morpho/concepts/risk-documentation" target="_blank">Morpho</a>&nbsp;and&nbsp;<a href="https://docs.morpho.org/morpho-vaults/concepts/risk-documentation" target="_blank">Morpho&nbsp;Vaults</a>.',
        });
      }
    },
    62239: function (t, e, i) {
      i.d(e, {
        Uj: function () {
          return r.default;
        },
        Do: function () {
          return s;
        },
        dm: function () {
          return y;
        },
      }),
        i(99598);
      var r = i(90242),
        n = i(78286),
        o = i(58258),
        a = i(54655),
        d = i(35047);
      let l = { small: '257px', medium: '312px' };
      var s = (0, o.memo)((t) => {
          let {
              loading: e,
              title: i,
              headerActionSlot: r,
              inputSlots: o,
              topSlot: s,
              initialPositionSlot: c,
              finalPositionSlot: u,
              actionSlot: p,
              error: h,
              children: g,
              size: m = 'medium',
              onClose: y,
            } = t,
            b = (0, a.CPt)(),
            f = Array.isArray(o) ? o : [o];
          return (0, n.BX)(a.Kqy, {
            direction: 'column',
            gap: 20,
            'data-testid': 'operation-summary-dialog',
            children: [
              (0, n.BX)(a.Kqy, {
                gap: 'm',
                direction: 'column',
                children: [
                  (0, n.BX)(a.Kqy, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 16,
                    children: [
                      e
                        ? (0, n.tZ)(a.OdW, { width: '280px', height: '45px', borderRadius: '20px' })
                        : (0, n.tZ)(a.ZT$, {
                            TextVariant: b ? a.xvT.Title.XS : a.xvT.Title.S,
                            children: i,
                          }),
                      (0, n.BX)(a.Kqy, {
                        direction: 'row',
                        align: 'center',
                        gap: 's',
                        children: [
                          !(0, d.isDefined)(h) && !e && !b && r,
                          (0, n.tZ)(a.zxk, {
                            iconAlone: 'ClosePlain20',
                            onClick: y,
                            variant: 'secondary',
                          }),
                        ],
                      }),
                    ],
                  }),
                  b && !(0, d.isDefined)(h) && !e && r,
                  (0, d.isDefined)(h) && p,
                ],
              }),
              (0, d.isDefined)(h)
                ? (0, n.tZ)(a.SKT, { height: '500px', text: h })
                : (0, n.BX)(a.Kqy, {
                    direction: 'column',
                    gap: 'm',
                    children: [
                      (0, n.BX)(a.Kqy, {
                        direction: 'column',
                        gap: 's',
                        children: [
                          s,
                          (0, n.tZ)(a.Z0O, { style: { marginBlock: '3px' } }),
                          (0, n.tZ)(a.Kqy, {
                            fullWidth: !0,
                            gap: 'm',
                            direction: b ? 'column' : 'row',
                            children: e
                              ? f.map((t, e) =>
                                  (0, n.tZ)(
                                    a.OdW,
                                    { width: '100%', height: '115px', borderRadius: '20px' },
                                    'input-skeleton-'.concat(e)
                                  )
                                )
                              : f,
                          }),
                          (0, n.tZ)(a.Z0O, { style: { marginBlock: '3px' } }),
                          (0, n.BX)(a.Kqy, {
                            direction: b ? 'column' : 'row',
                            align: 'center',
                            justify: 'space-between',
                            gap: 'xs',
                            width: '100%',
                            children: [
                              e &&
                                (0, n.tZ)(a.OdW, {
                                  width: '100%',
                                  height: l[m],
                                  borderRadius: '20px',
                                }),
                              !e && c,
                              e
                                ? (0, n.tZ)(a.Kqy, {
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '100px',
                                    children: (0, n.tZ)(a.OdW, {
                                      width: '32px',
                                      height: '32px',
                                      borderRadius: '100px',
                                    }),
                                  })
                                : (0, n.tZ)(a.zxk, {
                                    variant: 'secondary',
                                    size: 'default',
                                    iconAlone: 'ArrowRightPlain20',
                                    style: {
                                      pointerEvents: 'none',
                                      transform: b ? 'rotate(90deg)' : 'none',
                                    },
                                  }),
                              e &&
                                (0, n.tZ)(a.OdW, {
                                  width: '100%',
                                  height: l[m],
                                  borderRadius: '20px',
                                }),
                              !e && u,
                            ],
                          }),
                        ],
                      }),
                      e &&
                        (0, n.tZ)(a.Kqy, {
                          direction: 'column',
                          gap: 8,
                          align: 'stretch',
                          justify: 'start',
                          style: { paddingBottom: 12 },
                          children: (0, n.tZ)(a.OdW, {
                            width: '100%',
                            height: '48px',
                            borderRadius: '50px',
                          }),
                        }),
                      !e && p,
                    ],
                  }),
              g,
            ],
          });
        }),
        c = i(12556),
        u = i(49149),
        p = i(62788),
        h = i(38819),
        g = i(50825);
      let m = (0, h.Z)(g.Z, { target: 'e1o8iek70' })((t) => {
        let { theme: e } = t;
        return e.breakpoints.down('s');
      }, '{width:100%;}');
      var y = (0, o.memo)((t) => {
        let {} = t,
          { toggleDialog: e } = (0, a.DAv)(),
          { closeServiceUnavailableDialog: i } = (0, p.J1)(),
          r = (0, o.useCallback)(() => {
            e(!1), i();
          }, [e, i]);
        return (0, n.BX)(a.Kqy, {
          gap: 32,
          direction: 'column',
          align: 'center',
          children: [
            (0, n.tZ)(a.zxk, {
              size: 'default',
              iconAlone: 'ClosePlain20',
              onClick: r,
              variant: 'secondary',
              style: { position: 'absolute', top: 20, right: 20 },
            }),
            (0, n.BX)(a.Kqy, {
              direction: 'column',
              align: 'center',
              gap: 's',
              children: [
                (0, n.tZ)(a.xvT.Title.XS, {
                  textAlign: 'center',
                  children: 'Something went wrong.',
                }),
                (0, n.tZ)(a.xvT.Body.XS.Regular, {
                  color: 'text.secondary',
                  textAlign: 'center',
                  children:
                    'This could be due to connectivity or other local issues. Try refreshing the app or manage your positions through the Morpho Fallback App.',
                }),
              ],
            }),
            (0, n.BX)(a.Kqy, {
              align: 'center',
              gap: 's',
              wrap: 'wrap',
              justify: 'center',
              children: [
                (0, n.tZ)(m, {
                  mode: 'external',
                  href: c.hU,
                  buttonProps: {
                    size: 'default',
                    variant: 'primary',
                    label: 'Use Fallback App',
                    style: { width: '100%' },
                  },
                }),
                (0, n.tZ)(m, {
                  mode: 'external',
                  href: u.QP.NEXT_PUBLIC_STATUS_URL,
                  buttonProps: {
                    size: 'default',
                    variant: 'secondary',
                    label: 'Check App Status',
                    style: { width: '100%' },
                  },
                }),
              ],
            }),
          ],
        });
      });
    },
    28393: function (t, e, i) {
      i.d(e, {
        Rh: function () {
          return d;
        },
        cW: function () {
          return l;
        },
        ef: function () {
          return s;
        },
        wP: function () {
          return a;
        },
      });
      var r = i(23567),
        n = i(38819),
        o = i(54655);
      let a = (0, n.Z)('div', {
          shouldForwardProp: (0, o.uhK)(['noBackground']),
          target: 'e1i1nrgp0',
        })(
          'background:',
          (t) => {
            let { theme: e, noBackground: i } = t;
            return !i && e.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        d = (0, n.Z)(o.Kqy, {
          shouldForwardProp: (0, o.uhK)(['hasLargerVerticalPadding', 'withoutAside', 'unshiftTop']),
          target: 'e1i1nrgp1',
        })(
          'max-width:1600px;margin-left:auto;margin-right:auto;flex-direction:column;border-radius:',
          (t) => {
            let { theme: e } = t;
            return e.borderRadius;
          },
          ';padding-left:200px;padding-right:200px;',
          (t) => {
            let { hasLargerVerticalPadding: e } = t;
            return e
              ? (0, r.iv)('padding-top:100px;padding-bottom:100px;')
              : (0, r.iv)('padding-top:80px;padding-bottom:80px;');
          },
          ' ',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-xxl', 'content-root');
          },
          '{',
          (t) => {
            let { withoutAside: e } = t;
            return e
              ? (0, r.iv)('padding-left:120px;padding-right:120px;')
              : (0, r.iv)('padding-left:80px;padding-right:80px;');
          },
          '}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-xl', 'content-root');
          },
          '{',
          (t) => {
            let { withoutAside: e } = t;
            return e
              ? (0, r.iv)('padding-left:60px;padding-right:60px;')
              : (0, r.iv)('padding-left:12px;padding-right:12px;');
          },
          '}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-l', 'content-root');
          },
          '{padding-left:12px;padding-right:12px;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('m');
          },
          '{padding:12px;}',
          (t) => {
            let { unshiftTop: e } = t;
            return e && 'margin-top: -20px;';
          }
        ),
        l = (0, n.Z)('div', { target: 'e1i1nrgp2' })(
          'width:100%;height:',
          (t) => {
            let { theme: e } = t;
            return e.padding.s;
          },
          ';',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('xs');
          },
          '{height:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.l;
          },
          ';}background-color:',
          (t) => {
            let { theme: e } = t;
            return e.colors.background.base;
          },
          ';border-radius:',
          (t) => {
            let { theme: e } = t;
            return ''.concat(e.borderRadius, ' ').concat(e.borderRadius, ' 0 0');
          },
          ';'
        ),
        s = (0, n.Z)('div', { target: 'e1i1nrgp3' })(
          'position:sticky;top:',
          (t) => {
            let { top: e } = t;
            return e;
          },
          'px;display:flex;flex-shrink:0;width:430px;margin-top:64px;padding-top:76px;padding-left:1px;padding-right:80px;overflow-y:auto;max-height:calc(100vh - 10px - ',
          (t) => {
            let { top: e } = t;
            return e;
          },
          'px);z-index:',
          (t) => {
            let { theme: e } = t;
            return e.zIndex.base.default;
          },
          ';',
          (0, o.xJ_)('border-width'),
          ' ',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-xl', 'content-root');
          },
          '{padding-right:12px;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('l');
          },
          '{width:360px;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('s');
          },
          '{display:none;}'
        );
    },
    4078: function (t, e, i) {
      var r = i(78286),
        n = i(58258),
        o = i(28393);
      e.default = (0, n.memo)((t) => {
        let {
          children: e,
          hasLargerVerticalPadding: i = !1,
          withoutAside: n = !1,
          withOverflowingBottomBorder: a = !1,
          unshiftTop: d = !1,
          noBackground: l = !1,
          className: s,
          style: c,
        } = t;
        return (0, r.BX)(o.wP, {
          noBackground: l,
          className: s,
          style: c,
          id: 'section-layout-background',
          children: [
            (0, r.tZ)(o.Rh, {
              hasLargerVerticalPadding: i,
              withoutAside: n,
              unshiftTop: d,
              id: 'section-layout',
              children: e,
            }),
            a && (0, r.tZ)(o.cW, {}),
          ],
        });
      });
    },
  },
]);
