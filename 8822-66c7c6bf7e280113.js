(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8822],
  {
    2657: (e, t, a) => {
      'use strict';
      a.d(t, { $7: () => c, Bj: () => d, fU: () => n, m8: () => p });
      var r = a(48341),
        s = a(64387),
        o = a(56457),
        i = a(84561);
      let n = r.Ay.p.withConfig({ componentId: 'sc-768ed290-0' })([
          'font-size:var(--font-size-2);font-weight:500;',
        ]),
        l = (0, r.AH)([
          'align-items:center;display:inline-flex;color:inherit;background-color:transparent;border:1px solid transparent;opacity:0.5;&:hover{color:var(--button_icon--hover--color);background-color:var(--button_icon--hover--background-color);}',
        ]),
        d = (0, r.Ay)(i.A).withConfig({ componentId: 'sc-768ed290-1' })(['', ''], l),
        c = (0, r.Ay)(s.A).withConfig({ componentId: 'sc-768ed290-2' })(
          ['align-items:center;display:flex;padding:var(--spacing-1);font-weight:500;', ' ', ''],
          ({ padding: e }) => {
            if (e) return 'padding: 0.25rem 0;';
          },
          ({ isBorderBottom: e }) => {
            if (e) return 'border-bottom: 1px solid var(--border-600);';
          }
        ),
        p = (0, r.Ay)(o.A).withConfig({ componentId: 'sc-768ed290-3' })([
          'opacity:0.4;&:hover{opacity:1;}',
        ]);
    },
    4671: (e, t, a) => {
      'use strict';
      a.d(t, { Bu: () => n, Oi: () => p, SF: () => i, TM: () => l, hw: () => c, lI: () => d });
      var r = a(37653),
        s = a(75689),
        o = a(36074);
      function i(e, t, a) {
        if (Array.isArray(a) && a.some((e) => '' === e.routeUrlId)) return !0;
        let r = '0x83f20f44975d03b1b09e64809b757c47f942beea';
        if (t === r || e === r) return !0;
        let s = `${e}-${t}`,
          o = `${t}-${e}`,
          i = {
            '0xae78736cd615f374d3085123a210448e74fc6393-0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0':
              !0,
            '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee-0x5979d7b546e38e414f7e9822514be443a4800529':
              !0,
            '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee-0xe95a203b1a91a908f9b9ce46459d101078c2c3cb':
              !0,
            '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb-0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee':
              !0,
          };
        return i[s] || i[o];
      }
      function n(e, t) {
        return !e && !!t && 0.98 > +t;
      }
      function l(e, t) {
        let a = { type: '', title: '' };
        return (
          (e || t) &&
            (e && t
              ? ((a.type = 'priceImpactLowExchangeRate'),
                (a.title = (0, o.t)`High price impact and low exchange rate!`))
              : e
                ? ((a.type = 'priceImpact'), (a.title = (0, o.t)`High price impact!`))
                : ((a.type = 'lowExchangeRate'), (a.title = (0, o.t)`Low Exchange Rate!`))),
          a
        );
      }
      function d(e, t) {
        if (0 === Number(e) || 0 === Number(t)) return ['0', '0'];
        let a = new r.A(e).dividedBy(t).toString(),
          s = '';
        return 0 !== Number(a) && (s = new r.A(1).dividedBy(a).toString()), [a, s];
      }
      function c(e, t, a, r, o, n, l, c, p, u) {
        let { routes: m, haveCryptoRoutes: h } = (0, s.vA)(t, o, e.getPool),
          f = d(n, c);
        return {
          exchangeRates: f,
          isExchangeRateLow: !i(p, l, m) && !h && 0 !== Number(n) && Number(n) / Number(c) < 0.98,
          isHighSlippage: !h && Number(f[0]) > 0.98,
          isStableswapRoute: !h,
          priceImpact: a,
          routes: m,
          toAmount: n,
          toAmountOutput: r,
          fromAmount: c,
          fetchedToAmount: u || '',
        };
      }
      function p({ maxSlippage: e, toAmount: t, priceImpact: a, fetchedToAmount: r }) {
        return {
          isHighImpact: null !== a && a > +e,
          ...(r ? { isExpectedToAmount: +t - +(r ?? 0) > +e } : {}),
        };
      }
    },
    6153: (e, t, a) => {
      'use strict';
      a.d(t, { T: () => A });
      var r = a(54568),
        s = a(42822),
        o = a(40918),
        i = a(1117),
        n = a(1566),
        l = a(61963),
        d = a(31184),
        c = a(87401),
        p = a(3717);
      let { Spacing: u, ButtonSize: m, MinWidth: h } = a(84032).B,
        f = ({ token: e, disabled: t }) =>
          (0, r.jsxs)(d.A, {
            direction: 'row',
            gap: u.xxs,
            alignItems: 'center',
            children: [
              (0, r.jsx)(p.x, {
                blockchainId: e.chain,
                address: e.address,
                size: 'mui-md',
                sx: { opacity: t ? 0.5 : 1, filter: t ? 'saturate(0)' : 'none' },
              }),
              (0, r.jsx)(c.A, { variant: 'bodyMBold', children: e.symbol }),
            ],
          }),
        y = () =>
          (0, r.jsx)(n.A, {
            size: 20,
            sx: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              color: (e) => e.palette.text.secondary,
            },
          }),
        g = ({ token: e, disabled: t, onClick: a, sx: s }) =>
          (0, r.jsx)(l.A, {
            value: '',
            onClick: t ? void 0 : a,
            open: !1,
            disabled: t,
            displayEmpty: !0,
            renderValue: () => (e ? (0, r.jsx)(f, { token: e, disabled: t }) : (0, r.jsx)(y, {})),
            IconComponent: i.A,
            sx: {
              minHeight: m.sm,
              minWidth: h.select,
              backgroundColor: (e) => e.design.Layer[1].Fill,
              border: 'none',
              borderBottom: (e) => `2px solid ${e.design.Layer[1].Outline}`,
              ...(!t && {
                '&:hover': {
                  border: 'none',
                  borderBottom: (e) => `2px solid ${e.design.Layer[2].Outline}`,
                },
                '&:active': {
                  border: 'none',
                  borderBottom: (e) => `2px solid ${e.design.Layer[3].Outline}`,
                },
              }),
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '& .MuiSelect-select': {
                padding: 0,
                paddingInlineStart: u.sm,
                paddingInlineEnd: u.xs,
              },
              ...s,
            },
          }),
        A = ({
          selectedToken: e,
          tokens: t = [],
          favorites: a = [],
          balances: i = {},
          tokenPrices: n = {},
          disabled: l = !1,
          showSearch: d = !0,
          showManageList: c = !0,
          error: p = '',
          disabledTokens: u = [],
          disableSorting: m = !1,
          disableMyTokens: h = !1,
          customOptions: f,
          compact: y = !1,
          onToken: A,
          onSearch: w,
          sx: x,
        }) => {
          let [b, , v, S] = (0, s.K)();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(g, { token: e, disabled: l, onClick: S, sx: x }),
              (0, r.jsx)(o.S, {
                tokens: t,
                balances: i,
                tokenPrices: n,
                favorites: a,
                showSearch: d,
                showManageList: c,
                isOpen: !!b,
                error: p,
                disabledTokens: u,
                disableSorting: m,
                disableMyTokens: h,
                customOptions: f,
                compact: y,
                onClose: v,
                onToken: (t) => {
                  S(),
                    !(function (e, t) {
                      return e?.address == t?.address && e?.chain == t?.chain;
                    })(t, e) && A?.(t);
                },
                onSearch: (e) => w?.(e),
              }),
            ],
          });
        };
    },
    11905: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => o });
      var r = a(48341),
        s = a(23173);
      let o = (0, r.Ay)(s.A).withConfig({ componentId: 'sc-38d81a47-0' })([
        'opacity:0.7;border:1px solid var(--border-400);padding:0 2px;margin-left:auto;',
      ]);
    },
    11988: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => s });
      var r = a(28822);
      let s = () => (0, r.A)((e) => e.campaigns.campaignRewardsMapper);
    },
    13069: (e, t, a) => {
      'use strict';
      a.d(t, { AC: () => o, G: () => i, Rp: () => n, wj: () => s });
      var r = a(84017);
      function s(e) {
        return e.map((e) => (Number(e.value) > 0 ? e.value : '0'));
      }
      function o(e, t) {
        return [...e]
          .filter((e) => {
            let a = t?.[e.tokenAddress];
            return +(e.value || '0') > +(a || '0');
          })
          .map((e) => (0, r.G_)(e.token))
          .join(', ');
      }
      function i(e) {
        return e
          .filter((e) => !!Number(e.value))
          .map((e) => `${e.value} ${e.token}`)
          .join(', ');
      }
      function n(e) {
        return e
          .filter((e) => !!Number(e.value))
          .map((e) => `${e.token}`)
          .join(', ');
      }
    },
    19245: (e, t, a) => {
      'use strict';
      a.d(t, { L: () => s });
      var r = a(54568);
      let s = (0, a(69879).A)(
        (0, r.jsxs)('svg', {
          viewBox: '0 0 21 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M13.7333 10.0001C13.7333 11.7858 12.2857 13.2333 10.5001 13.2333C8.71441 13.2333 7.26685 11.7858 7.26685 10.0001C7.26685 8.21447 8.71441 6.76691 10.5001 6.76691C12.2857 6.76691 13.7333 8.21447 13.7333 10.0001ZM12.5333 10.0001C12.5333 11.123 11.623 12.0333 10.5001 12.0333C9.37715 12.0333 8.46685 11.123 8.46685 10.0001C8.46685 8.87721 9.37715 7.96691 10.5001 7.96691C11.623 7.96691 12.5333 8.87721 12.5333 10.0001Z',
              fill: 'currentColor',
            }),
            (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M9.92793 0.867004C9.39855 0.867004 8.93969 1.23348 8.82264 1.74976L8.5052 3.14999C7.99986 3.29694 7.5178 3.49819 7.06581 3.74686L5.85114 2.98115C5.40331 2.69885 4.81971 2.76418 4.44538 3.13851L3.63726 3.94663C3.26293 4.32096 3.1976 4.90456 3.47991 5.35239L4.24589 6.5675C3.99743 7.01936 3.79636 7.50127 3.64955 8.00643L2.24946 8.32384C1.73318 8.44089 1.3667 8.89975 1.3667 9.42913V10.572C1.3667 11.1014 1.73318 11.5602 2.24946 11.6773L3.64971 11.9947C3.79661 12.5 3.99779 12.9821 4.24639 13.434L3.48053 14.6489C3.19823 15.0967 3.26356 15.6803 3.63789 16.0547L4.44601 16.8628C4.82033 17.2371 5.40394 17.3025 5.85176 17.0201L7.06675 16.2542C7.51846 16.5027 8.00021 16.7038 8.5052 16.8506L8.82264 18.2509C8.93969 18.7671 9.39855 19.1336 9.92793 19.1336H11.0708C11.6002 19.1336 12.059 18.7671 12.1761 18.2509L12.4934 16.8511C12.9988 16.7043 13.481 16.5031 13.933 16.2546L15.1479 17.0204C15.5958 17.3027 16.1794 17.2374 16.5537 16.8631L17.3618 16.0549C17.7361 15.6806 17.8015 15.097 17.5192 14.6492L16.7536 13.4347C17.0024 12.9825 17.2037 12.5002 17.3507 11.9946L18.7505 11.6773C19.2668 11.5602 19.6333 11.1014 19.6333 10.572V9.42913C19.6333 8.89975 19.2668 8.44089 18.7505 8.32384L17.3509 8.00652C17.204 7.50106 17.0027 7.01888 16.7541 6.56678L17.5198 5.35212C17.8021 4.90429 17.7368 4.32069 17.3624 3.94636L16.5543 3.13824C16.18 2.76391 15.5964 2.69858 15.1486 2.98088L13.934 3.74654C13.4816 3.49773 12.9992 3.29641 12.4934 3.14947L12.1761 1.74976C12.059 1.23348 11.6002 0.867004 11.0708 0.867004H9.92793ZM7.06071 5.08337C7.76298 4.59121 8.57553 4.24567 9.45391 4.09121L9.92793 2.00034H11.0708L11.5447 4.0909C12.4236 4.24518 13.2365 4.59071 13.9391 5.083L15.7529 3.93962L16.5611 4.74775L15.4177 6.56158C15.9097 7.26399 16.2552 8.07668 16.4095 8.9552L18.5 9.42913V10.572L16.4094 11.0459C16.255 11.9246 15.9094 12.7374 15.4171 13.4398L16.5604 15.2536L15.7523 16.0617L13.9383 14.9182C13.2359 15.4102 12.4232 15.7555 11.5447 15.9097L11.0708 18.0003H9.92793L9.45391 15.9094C8.57587 15.755 7.76362 15.4097 7.06154 14.9178L5.24739 16.0614L4.43927 15.2533L5.58285 13.4392C5.0908 12.7369 4.74537 11.9244 4.591 11.046L2.50003 10.572V9.42913L4.5909 8.95511C4.74517 8.07689 5.09044 7.26446 5.58228 6.56222L4.43865 4.74802L5.24677 3.93989L7.06071 5.08337Z',
              fill: 'currentColor',
            }),
          ],
        }),
        'GearIcon'
      );
    },
    21104: (e, t, a) => {
      'use strict';
      a.d(t, { Fd: () => i, _x: () => n, kR: () => o, yC: () => s });
      var r = a(36074);
      let s = {
          amounts: [],
          claimableRewards: [],
          claimableCrv: '',
          isWrapped: !1,
          lpToken: '',
          stakedLpToken: '',
          selected: '',
          selectedToken: '',
          selectedTokenAddress: '',
        },
        o = {
          isApproved: !1,
          isClaimCrv: !1,
          isClaimRewards: !1,
          formProcessing: !1,
          formTypeCompleted: '',
          step: '',
          error: '',
        };
      function i(e) {
        return e.amounts.map((e) => ({ ...e, value: '' }));
      }
      function n(e, t, a, s) {
        let o = (function (
            { claimableCrv: e, claimableRewards: t },
            { isClaimCrv: a, isClaimRewards: r }
          ) {
            let s = [];
            return (
              a
                ? s.push(`CRV ${e}`)
                : r &&
                  t.map(({ symbol: e, amount: t }) => {
                    s.push(`${e} ${t}`);
                  }),
              s.join(', ')
            );
          })(e, t),
          i = +e.claimableCrv > 0,
          n = e.claimableRewards.length > 0,
          l = '';
        i || n ? (l = s ? 'isNudgeAndClaim' : 'isClaimOnly') : s && (l = 'isNudgeOnly');
        let d = {
          notify: {
            isClaimOnly: (0, r.t)`Please confirm claim of ${o}`,
            isNudgeAndClaim: (0, r.t)`Please confirm nudge and claim of ${o}`,
            isNudgeOnly: (0, r.t)`Please confirm nudge rewards`,
          },
          inProgress: {
            isClaimOnly: (0, r.t)`Claiming`,
            isNudgeAndClaim: (0, r.t)`Nudging and Claiming`,
            isNudgeOnly: (0, r.t)`Nudging`,
          },
          success: {
            isClaimOnly: (0, r.t)`Claim CRV Complete`,
            isNudgeAndClaim: (0, r.t)`Nudge and Claim CRV Complete`,
            isNudgeOnly: (0, r.t)`Nudge Complete`,
          },
          successTxInfo: {
            isClaimOnly: (0, r.t)`Claimed ${o}`,
            isNudgeAndClaim: (0, r.t)`Nudged and Claimed ${o}`,
            isNudgeOnly: (0, r.t)`Nudged Rewards Tx`,
          },
          claimCrvButton: {
            isClaimOnly: (0, r.t)`Claim CRV`,
            isNudgeAndClaim: (0, r.t)`Nudge and Claim CRV`,
            isNudgeOnly: (0, r.t)`Nudge CRV`,
          },
        };
        return l ? d[a][l] : '';
      }
    },
    21522: (e, t, a) => {
      'use strict';
      a.d(t, { c: () => o, o: () => i });
      var r = a(92431),
        s = a.n(r);
      let o = (e) => s()(e).then((e) => e.json());
      function i(e, t) {
        if (e) {
          let { chainId: a, signerAddress: r } = e;
          return { chainId: a, haveSigner: !!r, signerAddress: r, network: t[a] };
        }
        return { chainId: null, haveSigner: !1, signerAddress: '', network: null };
      }
    },
    23557: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => l });
      var r = a(54568),
        s = a(7620),
        o = a(77540),
        i = a(77241),
        n = a(36074);
      let l = ({ maxSlippage: e, usdAmount: t }) => {
        let a = (0, s.useMemo)(() => {
          if (e && t && 'NaN' !== t) {
            let a = Number(t) * (Number(e) / 100);
            return a > 1e3 ? a : 0;
          }
          return 0;
        }, [e, t]);
        return a
          ? (0, r.jsx)(o.A, {
              alertType: 'warning',
              children: (0, r.jsx)('div', {
                children: (0, r.jsxs)(n.x, {
                  children: [
                    'With your current slippage tolerance setting (',
                    (0, i.ZV)(e, i.hd.PERCENT),
                    '), the expected output displayed above might incur up to',
                    ' ',
                    (0, r.jsxs)('strong', {
                      children: [
                        (0, i.ZV)(a, {
                          maximumFractionDigits: 0,
                          currency: 'USD',
                          style: 'currency',
                        }),
                        ' worth of slippage',
                      ],
                    }),
                    ' ',
                    '(in addition to the price impact). We recommend that you reduce your slippage tolerance setting just above.',
                  ],
                }),
              }),
            })
          : null;
      };
    },
    26404: (e, t, a) => {
      'use strict';
      a.d(t, { hE: () => o, kR: () => s, yC: () => r });
      let r = { amounts: [], isWrapped: !1, isBalancedAmounts: !1, lpToken: '' },
        s = {
          isApproved: !1,
          formProcessing: !1,
          formTypeCompleted: '',
          step: '',
          error: '',
          warning: '',
        },
        o = { expected: '', virtualPrice: '', loading: !1, error: '' };
    },
    27572: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => w });
      var r = a(54568),
        s = a(10541),
        o = a.n(s),
        i = a(23780),
        n = a.n(i),
        l = a(7620),
        d = a(48341),
        c = a(81981),
        p = a(28822),
        u = a(60171),
        m = a(19115),
        h = a(77241),
        f = a(88411),
        y = a(36074),
        g = a(38071);
      let A = d.Ay.span.withConfig({ componentId: 'sc-898ef1e4-0' })([
          'font-size:var(--font-size-0);text-transform:uppercase;',
        ]),
        w = ({ chainId: e, isDivider: t = !1, loading: a, estimatedGas: s, stepProgress: i }) => {
          let { lib: d } = (0, f.w5)(),
            w = (0, p.A)((e) => e.networks.networks),
            { gasPricesDefault: x } = w[e],
            b = (0, p.A)((e) => e.usdRates.usdRatesMapper[c.m8]),
            v = (0, p.A)((e) => e.gas.gasInfo),
            S = (0, p.A)((e) => e.gas.gasInfo?.basePlusPriority?.[x]),
            { estGasCostUsd: k, tooltip: C } = (0, l.useMemo)(() => {
              let t = { estGasCost: 0, estGasCostUsd: 0, tooltip: '' };
              if (s && S) {
                let { symbol: a, gasPricesUnit: r } = w[e],
                  o = 0;
                if (
                  (e === g.sW.Arbitrum || e === g.sW.XLayer || e === g.sW.Mantle) &&
                  v?.l2GasPriceWei &&
                  'number' == typeof s
                )
                  o = v.l2GasPriceWei * s;
                else if (w[e].gasL2 && Array.isArray(s) && d) {
                  if (v?.l2GasPriceWei && v?.l1GasPriceWei) {
                    let [e, t] = s;
                    o = e * v.l2GasPriceWei + t * v.l1GasPriceWei;
                  }
                } else 'number' == typeof s && (o = S * s);
                let i = (0, g.pS)(o),
                  l = (0, g.UF)(i),
                  c = (0, h.ZV)(l),
                  p = (0, h.ZV)((0, g.pS)(S), { maximumFractionDigits: 2 });
                (t.estGasCost = o),
                  (t.estGasCostUsd = n()(b) ? 0 : +l * b),
                  (t.tooltip = `${c} ${a} at ${p} ${r}`);
              }
              return t;
            }, [s, S, e, d, b, v?.l2GasPriceWei, v?.l1GasPriceWei, w]),
            P = (0, y.t)`Estimated TX cost:`,
            j = i
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)('span', { children: P }),
                    ' ',
                    (0, r.jsxs)(A, {
                      children: ['(', (0, y.t)`Step ${i.active} of ${i.total}`, '):'],
                    }),
                  ],
                })
              : P,
            T = C && (0, r.jsx)(m.A, { placement: 'top end', noWrap: !0, children: C }),
            I = !n()(b) && !o()(b);
          return (0, r.jsx)(u.A, {
            isDivider: t,
            loading: a,
            loadingSkeleton: [50, 20],
            label: j,
            tooltip: T,
            children:
              k &&
              (I
                ? (0, r.jsx)('span', { children: (0, h.ZV)(k, h.hd.USD) })
                : (0, y.t)`Unable to get USD rate`),
          });
        };
    },
    28822: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => e1 });
      var r = a(20591),
        s = a.n(r),
        o = a(94668),
        i = a.n(o),
        n = a(29906),
        l = a(35313),
        d = a(84017),
        c = a(36419),
        p = a(1030);
      let u = 'storeCache',
        m = {
          hasDepositAndStake: {},
          hasRouter: {},
          poolsMapper: {},
          routerFormValues: {},
          tvlMapper: {},
          volumeMapper: {},
        },
        h = (e, t) => ({
          storeCache: {
            ...m,
            setTvlVolumeMapper: (e, a, r) => {
              let s = t()[u],
                o = {},
                i = Object.keys(r).length < 30;
              Object.entries(r).forEach(([e, { value: t }]) => {
                ((i && +t > 0) || +t >= c.W) && (o[e] = { value: t });
              }),
                s.setStateByActiveKey(e, a.toString(), o);
            },
            setServerPreloadData: (e, { tvl: a, volume: r, pools: s }) => {
              let o = t().setAppStateByActiveKey;
              s && o(u, 'poolsMapper', e.toString(), s),
                a && o(u, 'tvlMapper', e.toString(), a),
                r && o(u, 'volumeMapper', e.toString(), r),
                (0, p.SW)('setServerPreloadData', {
                  pools: s && Object.keys(s).length,
                  tvl: a && Object.keys(a).length,
                  volume: r && Object.keys(r).length,
                });
            },
            setStateByActiveKey: async (e, a, r) => {
              await (0, d.yy)(4e3), t().setAppStateByActiveKey(u, e, a, r);
            },
            setStateByKey: async (e, a) => {
              await (0, d.yy)(4e3), t().setAppStateByKey(u, e, a);
            },
            setStateByKeys: async (e) => {
              await (0, d.yy)(4e3), t().setAppStateByKeys(u, e);
            },
            resetState: () => {
              t().resetAppState(u, m);
            },
          },
        });
      var f = a(96844),
        y = a(77241),
        g = a(30787);
      let A = 'campaigns',
        w = { initiated: !1, campaignRewardsMapper: {} },
        x = (e, t) => ({
          [A]: {
            ...w,
            initCampaignRewards: (a) => {
              let r = {},
                {
                  networks: { networks: s },
                } = t(),
                o = s[a].id;
              g.A.forEach((e) => {
                e.pools.forEach((t) => {
                  t.network.toLowerCase() === o.toLowerCase() &&
                    (r[t.address.toLowerCase()] || (r[t.address.toLowerCase()] = []),
                    r[t.address.toLowerCase()].push({
                      campaignName: e.campaignName,
                      platform: e.platform,
                      platformImageSrc: `${y.o8}/platforms/${e.platformImageId}`,
                      dashboardLink: e.dashboardLink,
                      ...t,
                      description: 'null' !== t.description ? t.description : e.description,
                      address: t.address.toLowerCase(),
                      lock: 'true' === t.lock,
                    }));
                });
              }),
                Object.keys(r).forEach((e) => {
                  r[e].sort((e, t) => +e.multiplier - +t.multiplier);
                }),
                e(
                  (0, f.Ay)((e) => {
                    (e[A].initiated = !0), (e[A].campaignRewardsMapper = r);
                  })
                );
            },
            setStateByActiveKey: (e, a, r) => {
              t().setAppStateByActiveKey(A, e, a, r);
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey(A, e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys(A, e);
            },
            resetState: () => {
              t().resetAppState(A, w);
            },
          },
        });
      var b = a(66485),
        v = a(67209),
        S = a(88411),
        k = a(36074),
        C = a(38071);
      let P = {
          curveNetworks: {},
          sidechainGauge: !0,
          currentPoolType: null,
          currentSidechain: null,
          poolAddress: '',
          lpTokenAddress: '',
          linkPoolAddress: '',
          sidechainNav: 0,
          deploymentStatus: {
            mainnet: { status: '', transaction: null, errorMessage: '' },
            sidechain: { status: '', transaction: null, errorMessage: '' },
            mirror: { status: '', transaction: null, errorMessage: '' },
          },
        },
        j = (e, t) => ({
          deployGauge: {
            ...P,
            setCurveNetworks: () => {
              let a = {},
                {
                  networks: { networks: r },
                } = t();
              Object.entries(r).forEach(([e, t]) => {
                t.hasFactory &&
                  (a[e] = {
                    chainId: +e,
                    name: t.name,
                    poolTypes: {
                      stableswap: t.stableswapFactory,
                      stableswapOld: t.stableswapFactoryOld,
                      twoCrypto: t.twocryptoFactoryOld,
                      twoCryptoNg: t.twocryptoFactory,
                      threeCrypto: t.tricryptoFactory,
                    },
                    isTestnet: t.isTestnet,
                    isCrvRewardsEnabled: t.isCrvRewardsEnabled,
                  });
              }),
                e(
                  (0, f.Ay)((e) => {
                    e.deployGauge.curveNetworks = a;
                  })
                );
            },
            setCurrentPoolType: (t) => {
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge.currentPoolType = t;
                })
              );
            },
            setSidechainGauge: (t) => {
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge.sidechainGauge = t;
                })
              );
            },
            setCurrentSidechain: (a) => {
              let r = t().deployGauge.curveNetworks,
                s = a.toLowerCase(),
                o = Object.entries(r).find(([e, t]) => t.name.toLowerCase() === s),
                i = o ? Number(o[0]) : null;
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge.currentSidechain = i;
                })
              );
            },
            setPoolAddress: (t) => {
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge.poolAddress = t;
                })
              );
            },
            setLpTokenAddress: (t) => {
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge.lpTokenAddress = t;
                })
              );
            },
            setSidechainNav: (t) => {
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge.sidechainNav = t;
                })
              );
            },
            setLinkPoolAddress: (t) => {
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge.linkPoolAddress = t;
                })
              );
            },
            deployGauge: async (a, r, s, o = !1) => {
              let i;
              let {
                  poolAddress: n,
                  lpTokenAddress: l,
                  sidechainGauge: d,
                  currentSidechain: c,
                } = t().deployGauge,
                p = a.chainId,
                u = t().gas.fetchGasInfo,
                m = d ? l.toLowerCase() : n.toLowerCase(),
                h = (0, C.l1)(m),
                y = (0, k.t)`Please confirm to deploy gauge for ${h}.`,
                { dismiss: g } = (0, S.me)(y, 'pending');
              if (((i = g), await u(a), 'MAINNETGAUGE' === s)) {
                if (
                  (e(
                    (0, f.Ay)((e) => {
                      e.deployGauge.deploymentStatus.mainnet.status = 'CONFIRMING';
                    })
                  ),
                  'STABLENG' === r)
                )
                  try {
                    let t = await a.stableNgFactory.deployGauge(m);
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mainnet.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mainnet.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.stableNgFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mainnet.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mainnet gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mainnet.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mainnet.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('TWOCRYPTO' === r)
                  try {
                    let t = await a.cryptoFactory.deployGauge(m);
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mainnet.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mainnet.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.cryptoFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mainnet.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mainnet gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mainnet.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mainnet.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('TWOCRYPTONG' === r)
                  try {
                    let t = await a.twocryptoFactory.deployGauge(m);
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mainnet.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mainnet.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.twocryptoFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mainnet.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mainnet gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mainnet.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mainnet.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('THREECRYPTO' === r)
                  try {
                    let t = await a.tricryptoFactory.deployGauge(m);
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mainnet.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mainnet.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.tricryptoFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mainnet.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mainnet gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mainnet.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mainnet.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('STABLEOLD' === r)
                  try {
                    let t = await a.factory.deployGauge(m);
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mainnet.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mainnet.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.factory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mainnet.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mainnet gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mainnet.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mainnet.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
              }
              if ('SIDECHAINGAUGE' === s) {
                if (
                  (e(
                    (0, f.Ay)((e) => {
                      e.deployGauge.deploymentStatus.sidechain.status = 'CONFIRMING';
                    })
                  ),
                  'STABLENG' === r)
                )
                  try {
                    let t = await a.stableNgFactory.deployGaugeSidechain(m, T(m));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.sidechain.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.sidechain.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying sidechain gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.stableNgFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'SUCCESS'),
                            (e.deployGauge.sidechainNav = +!o),
                            (e.deployGauge.currentSidechain = p);
                        })
                      ),
                      s();
                    let n = (0, k.t)`Sidechain gauge deployment successful.`;
                    (0, S.me)(n, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.sidechain.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('TWOCRYPTO' === r)
                  try {
                    let t = await a.cryptoFactory.deployGaugeSidechain(m, T(m));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.sidechain.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.sidechain.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying sidechain gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.cryptoFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'SUCCESS'),
                            (e.deployGauge.sidechainNav = +!o),
                            (e.deployGauge.currentSidechain = p);
                        })
                      ),
                      s();
                    let n = (0, k.t)`Sidechain gauge deployment successful.`;
                    (0, S.me)(n, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.sidechain.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('TWOCRYPTONG' === r)
                  try {
                    let t = await a.twocryptoFactory.deployGaugeSidechain(m, T(m));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.sidechain.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.sidechain.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying sidechain gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.twocryptoFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'SUCCESS'),
                            (e.deployGauge.sidechainNav = +!o),
                            (e.deployGauge.currentSidechain = p);
                        })
                      ),
                      s();
                    let n = (0, k.t)`Sidechain gauge deployment successful.`;
                    (0, S.me)(n, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.sidechain.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('THREECRYPTO' === r)
                  try {
                    let t = await a.tricryptoFactory.deployGaugeSidechain(m, T(m));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.sidechain.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.sidechain.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying sidechain gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.tricryptoFactory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'SUCCESS'),
                            (e.deployGauge.sidechainNav = +!o),
                            (e.deployGauge.currentSidechain = p);
                        })
                      ),
                      s();
                    let n = (0, k.t)`Sidechain gauge deployment successful.`;
                    (0, S.me)(n, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.sidechain.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('STABLEOLD' === r)
                  try {
                    let t = await a.factory.deployGaugeSidechain(m, T(m));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.sidechain.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.sidechain.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying sidechain gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.factory.getDeployedGaugeAddress(t),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'SUCCESS'),
                            (e.deployGauge.sidechainNav = +!o),
                            (e.deployGauge.currentSidechain = p);
                        })
                      ),
                      s();
                    let n = (0, k.t)`Sidechain gauge deployment successful.`;
                    (0, S.me)(n, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.sidechain.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.sidechain.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
              }
              if ('MIRRORGAUGE' === s) {
                if (
                  (e(
                    (0, f.Ay)((e) => {
                      e.deployGauge.deploymentStatus.mirror.status = 'CONFIRMING';
                    })
                  ),
                  'STABLENG' === r)
                )
                  try {
                    let t = await a.stableNgFactory.deployGaugeMirror(c, T(l));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mirror.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mirror.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying mirror gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.stableNgFactory.getDeployedGaugeMirrorAddressByTx(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mirror.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mirror gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mirror.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mirror.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('TWOCRYPTO' === r)
                  try {
                    let t = await a.cryptoFactory.deployGaugeMirror(c, T(l));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mirror.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mirror.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying mirror gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.cryptoFactory.getDeployedGaugeMirrorAddressByTx(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mirror.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mirror gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mirror.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mirror.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('TWOCRYPTONG' === r)
                  try {
                    let t = await a.twocryptoFactory.deployGaugeMirror(c, T(l));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mirror.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mirror.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying mirror gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.twocryptoFactory.getDeployedGaugeMirrorAddressByTx(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mirror.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mirror gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mirror.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mirror.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('THREECRYPTO' === r)
                  try {
                    let t = await a.tricryptoFactory.deployGaugeMirror(c, T(l));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mirror.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mirror.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying mirror gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.tricryptoFactory.getDeployedGaugeMirrorAddressByTx(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mirror.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mirror gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mirror.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mirror.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                if ('STABLEOLD' === r)
                  try {
                    let t = await a.factory.deployGaugeMirror(c, T(l));
                    e(
                      (0, f.Ay)((e) => {
                        (e.deployGauge.deploymentStatus.mirror.status = 'LOADING'),
                          (e.deployGauge.deploymentStatus.mirror.transaction = t);
                      })
                    ),
                      g();
                    let r = (0, k.t)`Deploying mirror gauge for ${h}...`,
                      { dismiss: s } = (0, S.me)(r, 'pending');
                    (i = s),
                      await a.factory.getDeployedGaugeMirrorAddressByTx(t),
                      e(
                        (0, f.Ay)((e) => {
                          e.deployGauge.deploymentStatus.mirror.status = 'SUCCESS';
                        })
                      ),
                      s();
                    let o = (0, k.t)`Mirror gauge deployment successful.`;
                    (0, S.me)(o, 'success', 15e3);
                  } catch (t) {
                    i(),
                      e(
                        (0, f.Ay)((e) => {
                          (e.deployGauge.deploymentStatus.mirror.status = 'ERROR'),
                            (e.deployGauge.deploymentStatus.mirror.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
              }
            },
            resetState: () => {
              e(
                (0, f.Ay)((e) => {
                  e.deployGauge = { ...t().deployGauge, DEFAULT_STATE: P };
                })
              );
            },
          },
        });
      function T(e) {
        return e.substring(0, 16);
      }
      var I = a(90819),
        R = a.n(I),
        B = a(74143),
        E = a(21522),
        G = a(46759),
        D = a(76635);
      let F = { gasInfo: null, label: [], gasValue: { type: 'fast' } },
        L = (e, t) => ({
          gas: {
            ...F,
            fetchGasInfo: async (e) => {
              if (!e) return;
              let { chainId: a } = e,
                {
                  networks: { networks: r },
                } = t(),
                { provider: s } = S.vT.getState();
              (0, D.Rm)('fetchGasInfo', a);
              try {
                let o;
                let i = r[a].gasPricesUrl;
                if (1 === a) {
                  let t = await (0, E.c)(i),
                    { eip1559Gas: a, gas: r } = t?.data ?? {};
                  if (a) {
                    o = (function (e, t) {
                      if (e.base && e.prio && e.max) {
                        let a = Math.trunc(e.base),
                          r = e.prio.map(Math.trunc),
                          s = e.max.map(Math.trunc);
                        return {
                          gasInfo: {
                            gasPrice: t?.rapid || null,
                            base: a,
                            priority: r,
                            max: s,
                            basePlusPriority: r.map((e) => a + e),
                          },
                          label: ['fastest', 'fast', 'medium', 'slow'],
                        };
                      }
                    })(a, r);
                    let t = (0, G.v)(a);
                    t && e.setCustomFeeData(t);
                  }
                } else if (137 === a) {
                  let t = await (0, E.c)(i);
                  t?.fast &&
                    (o = (function (e) {
                      let { estimatedBaseFee: t, safeLow: a, standard: r, fast: s } = e;
                      if (t && a && r && s) {
                        let e = (0, C.$K)(t),
                          o = [s.maxFee, r.maxFee, a.maxFee].map(C.$K),
                          i = [s.maxPriorityFee, r.maxPriorityFee, a.maxPriorityFee].map(C.$K);
                        return {
                          gasInfo: {
                            gasPrice: null,
                            base: e,
                            max: o,
                            priority: i,
                            basePlusPriority: i.map((t) => e + t),
                          },
                          label: ['fast', 'medium', 'slow'],
                        };
                      }
                    })(t)),
                    t &&
                      e.setCustomFeeData({
                        maxFeePerGas: t.fast.maxFee,
                        maxPriorityFeePerGas: t.fast.maxPriorityFee,
                      });
                } else if (a === C.sW.XLayer) {
                  if (!s) return;
                  let { l2GasPrice: t } = await B.A.helpers.fetchL2GasPrice(e);
                  (o = await K(e, s, r)) && (o.gasInfo.l2GasPriceWei = (0, C.$K)(t)),
                    t &&
                      e.setCustomFeeData({
                        gasPrice: t,
                        maxFeePerGas: null,
                        maxPriorityFeePerGas: null,
                      });
                } else if (a === C.sW.Arbitrum || a === C.sW.Mantle) {
                  if (!s) return;
                  let { customFeeData: t } = await B.A.helpers.fetchCustomGasFees(e);
                  if (!(o = await K(e, s, r)) || !t?.maxFeePerGas || !t?.maxPriorityFeePerGas)
                    return;
                  (o.gasInfo.max = [(0, C.$K)(t.maxFeePerGas)]),
                    (o.gasInfo.priority = [(0, C.$K)(t.maxPriorityFeePerGas)]),
                    e.setCustomFeeData(t);
                } else if (252 === a || 8453 === a) {
                  let { provider: t } = S.vT.getState();
                  t &&
                    (o = await K(e, t, r)) &&
                    e.setCustomFeeData({ maxFeePerGas: 0.1, maxPriorityFeePerGas: 0.001 });
                } else if (10 === a) {
                  let { provider: t } = S.vT.getState();
                  t &&
                    (o = await K(e, t, r)) &&
                    e.setCustomFeeData({ maxFeePerGas: 0.2, maxPriorityFeePerGas: 0.001 });
                }
                if (o) t().gas.setStateByKeys(o);
                else {
                  let { provider: s } = S.vT.getState();
                  if (s && a) {
                    let a = await K(e, s, r);
                    a && t().gas.setStateByKeys(a);
                  }
                }
              } catch (e) {
                console.error(e);
              }
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey('gas', e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys('gas', e);
            },
            resetState: () => {
              t().resetAppState('gas', R()(F));
            },
          },
        });
      async function K(e, t, a) {
        if (t) {
          let { gasPrice: r, maxFeePerGas: s, maxPriorityFeePerGas: o } = await t.getFeeData(),
            i = {
              gasPrice: r ? +BigInt(r).toString() : null,
              max: s ? [+BigInt(s).toString()] : [],
              priority: o ? [+BigInt(o).toString()] : [],
            };
          return { gasInfo: { ...i, ...(await O(e, i, a)) }, label: ['fast'] };
        }
      }
      async function O(e, t, a) {
        let r = { basePlusPriority: [] },
          s = a[e.chainId];
        if (s.gasL2) {
          let o = a['1'].gasPricesUrl,
            i = await (0, E.c)(o),
            { eip1559Gas: n } = i?.data ?? {};
          (r.basePlusPriority = t.gasPrice ? [t.gasPrice] : []),
            (r.basePlusPriorityL1 = [6e3 * n.base]);
          let { l2GasPriceWei: l, l1GasPriceWei: d } = await B.A.helpers.fetchL1AndL2GasPrice(e, s);
          (r.l1GasPriceWei = d), (r.l2GasPriceWei = l);
        } else t.gasPrice && (r.basePlusPriority = [+t.gasPrice]);
        return r;
      }
      var N = a(92012),
        M = a.n(N);
      let V = { hasDepositAndStake: {}, hasRouter: {}, loaded: !1 },
        $ = (e, t) => ({
          ...V,
          getNetworkConfigFromApi: (e) => {
            let a = { hasDepositAndStake: void 0, hasRouter: void 0 };
            return (
              e &&
                ((a.hasDepositAndStake =
                  t().hasDepositAndStake[e] ?? t().storeCache.hasDepositAndStake[e]),
                (a.hasRouter = t().hasRouter[e] ?? t().storeCache.hasRouter[e])),
              a
            );
          },
          setNetworkConfigFromApi: (t) => {
            let { chainId: a } = t,
              { hasDepositAndStake: r, hasRouter: s } = B.A.network.fetchNetworkConfig(t);
            e(
              (0, f.Ay)((e) => {
                (e.hasDepositAndStake[a] = r),
                  (e.storeCache.hasDepositAndStake[a] = r),
                  (e.hasRouter[a] = s),
                  (e.storeCache.hasRouter[a] = s);
              })
            );
          },
          hydrate: async (e, a, r) => {
            if (!e) return;
            let s = t(),
              o = a?.chainId !== e.chainId,
              i = a?.signerAddress !== e.signerAddress,
              { chainId: n } = e;
            (0, D.Rm)('Hydrating DEX', e?.chainId, {
              wallet: r?.chainId ?? '',
              isNetworkSwitched: o,
              isUserSwitched: i,
              hasRPC: !e.isNoRPC,
            }),
              o &&
                (s.gas.resetState(),
                s.pools.resetState(),
                s.quickSwap.resetState(),
                s.tokens.resetState(),
                s.usdRates.resetState(),
                s.userBalances.resetState(),
                s.user.resetState(),
                s.userBalances.resetState(),
                s.lockedCrv.resetState(),
                s.createPool.resetState(),
                s.campaigns.resetState(),
                s.dashboard.resetState()),
              i && (s.user.resetState(), s.userBalances.resetState()),
              s.setNetworkConfigFromApi(e),
              s.networks.setNetworkConfigs(e);
            let l = s.networks.networks[n],
              { excludePoolsMapper: d } = l,
              c = (await B.A.network.fetchAllPoolsList(e, l)).filter((e) => !d[e]);
            if (!c.length) {
              s.pools.setEmptyPoolListDefault(n), s.tokens.setEmptyPoolListDefault(n);
              return;
            }
            let p = 2222 === n ? await B.A.network.getFailedFetching24hOldVprice() : {};
            await s.pools.fetchPools(e, c, p),
              (i || o) &&
                (s.gas.fetchGasInfo(e),
                s.pools.fetchPricesApiPools(n),
                s.pools.fetchBasePools(e),
                s.usdRates.fetchAllStoredUsdRates(e)),
              e.signerAddress && s.user.fetchUserPoolList(e),
              (0, D.Rm)('Hydrating DEX - Complete');
          },
          updateGlobalStoreByKey: (t, a) => {
            e(
              (0, f.Ay)((e) => {
                e[t] = a;
              })
            );
          },
          setAppStateByActiveKey: (t, a, r, s, o) => {
            e(
              (0, f.Ay)((e) => {
                let i = e[t][a],
                  n = i[r];
                if (void 0 === i) {
                  let i = { [r]: s };
                  M()(n, i) ||
                    (o && (0, D.Rm)(`%c state: ${a}`, 'background: #222; color: #bada55', i),
                    (e[t][a] = i));
                } else if ('object' == typeof i) {
                  let l = { ...i, [r]: s };
                  M()(n, l) ||
                    (o && (0, D.Rm)(`%c state: ${a}`, 'background: #222; color: #bada55', l),
                    (e[t][a] = l));
                }
              })
            );
          },
          setAppStateByKey: (t, a, r, s) => {
            e(
              (0, f.Ay)((e) => {
                let o = e[t][a];
                M()(o, r) ||
                  (s && (0, D.Rm)(`%c state: ${a}`, 'background: #222; color: #bada55', r),
                  (e[t][a] = r));
              })
            );
          },
          setAppStateByKeys: (t, a, r) => {
            for (let s in a) {
              let o = a[s];
              e(
                (0, f.Ay)((e) => {
                  let a = e[t][s];
                  M()(a, o) ||
                    (r && (0, D.Rm)(`%c state: ${s}`, 'background: #222; color: #bada55', o),
                    (e[t][s] = o));
                })
              );
            }
          },
          resetAppState: (t, a) => {
            e(
              (0, f.Ay)((e) => {
                e[t] = { ...e[t], ...a };
              })
            );
          },
        });
      var W = a(16430),
        U = a(37457),
        _ = a.n(U);
      let z = { isLoading: !1, noResult: !1 },
        H = 'integrations',
        Z = {
          formStatus: z,
          formValues: { filterKey: 'all', filterNetworkId: '', searchText: '' },
          integrationsList: null,
          integrationsTags: null,
          results: null,
        },
        q = (e, t) => ({
          [H]: {
            ...Z,
            init: async (e) => {
              let a = t(),
                {
                  networks: { networks: r },
                } = a,
                { integrationsList: s, integrationsTags: o, setStateByKey: i } = a[H],
                n = e || 1;
              if (null === s)
                try {
                  let e = await (0, E.c)(r[n]?.integrations.listUrl),
                    t = (function (e) {
                      let t = [];
                      if (Array.isArray(e))
                        for (let { networks: a, tags: r, ...s } of e) {
                          let e = {};
                          for (let t of a) e[t] = !0;
                          let o = {};
                          for (let e of r) 'crvusd' !== e && (o[e] = !0);
                          t.push({ ...s, networks: e, tags: o });
                        }
                      return _()(t, (e) => e.name);
                    })(e);
                  i('integrationsList', t);
                } catch (e) {
                  console.error(e), i('integrationsList', []);
                }
              if (null === o)
                try {
                  let e = await (0, E.c)(r[n]?.integrations.tagsUrl);
                  i(
                    'integrationsTags',
                    (function (e) {
                      let t = {},
                        a = [
                          '#F60000',
                          '#FF8C00',
                          '#FFEE00',
                          '#4DE94C',
                          '#3783FF',
                          '#4815AA',
                          '#ee82ee',
                        ];
                      if (Array.isArray(e)) {
                        let r = e.filter((e) => 'crvusd' !== e.id);
                        for (let e in r) {
                          let s = r[e],
                            o = 'all' === s.id ? '' : a[+e - 1];
                          (t[s.id] = { ...s, color: o }),
                            'all' !== s.id &&
                              '' === o &&
                              console.warn(`missing integrations tag color for ${s.id}`);
                        }
                      }
                      return t;
                    })(e)
                  );
                } catch (e) {
                  console.error(e), i('integrationsTags', []);
                }
            },
            filterByKey: (e, t) => ('all' !== e ? t.filter(({ tags: t }) => t[e]) : t),
            filterByNetwork: (e, a) => {
              let {
                  networks: { networks: r },
                } = t(),
                s = r[+e]?.id;
              return s ? a.filter(({ networks: e }) => e[s]) : a;
            },
            filterBySearchText: (e, t) =>
              new W.A(t, {
                ignoreLocation: !0,
                threshold: 0.01,
                keys: [{ name: 'name', getFn: (e) => e.name }],
              })
                .search(e)
                .map((e) => e.item),
            setFormValues: (e) => {
              t()[H].setStateByKeys({
                formStatus: { ...z, isLoading: !0 },
                formValues: e,
                results: [],
              });
              let { searchText: a, filterKey: r, filterNetworkId: s } = e,
                o = t()[H].integrationsList;
              if (o) {
                let e = R()(o);
                s && (e = t()[H].filterByNetwork(s, e)),
                  a && (e = t()[H].filterBySearchText(a, e)),
                  r && (e = t()[H].filterByKey(r, e)),
                  t()[H].setStateByKeys({
                    formStatus: { ...z, noResult: 0 === e.length },
                    results: _()(e, (e) => e.name),
                  });
              }
            },
            setStateByActiveKey: (e, a, r) => {
              t().setAppStateByActiveKey(H, e, a, r);
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey(H, e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys(H, e);
            },
            resetState: () => {
              e(
                (0, f.Ay)((e) => {
                  e[H] = { ...e[H], ...Z };
                })
              );
            },
          },
        }),
        Y = {
          crv: '0',
          lockedAmountAndUnlockTime: { lockedAmount: '0', unlockTime: 0 },
          veCrv: '0',
          veCrvPct: '0',
        },
        X = { estimatedGas: 0, error: '', loading: !1 },
        Q = { isApproved: !1, formProcessing: !1, formTypeCompleted: '', step: '', error: '' },
        J = {
          calcdUtcDate: '',
          days: 0,
          utcDate: null,
          utcDateError: '',
          lockedAmt: '',
          lockedAmtError: '',
        };
      var ee = a(63175);
      let et = 'lockedCrv',
        ea = {
          activeKey: '',
          activeKeyVecrvInfo: '',
          formEstGas: {},
          formValues: J,
          formStatus: Q,
          vecrvInfo: {},
        },
        er = (e, t) => ({
          [et]: {
            ...ea,
            fetchVecrvInfo: async (e) => {
              var a, r;
              let s = R()(Y),
                o = ((a = e), (r = e.signerAddress), `${a.chainId}-${(0, y.z5)(r)}`);
              if (e.signerAddress) {
                t()[et].setStateByKey('activeKeyVecrvInfo', o);
                let a = await B.A.lockCrv.vecrvInfo(o, e, e.signerAddress);
                if (a.error) {
                  let e = R()(t()[et].formStatus);
                  (e.error = a.error), t()[et].setStateByKey('formStatus', R()(e));
                }
                t()[et].setStateByKeys({
                  activeKeyVecrvInfo: a.activeKey,
                  vecrvInfo: { [a.activeKey]: a.resp },
                }),
                  (s = a.resp);
              } else t()[et].setStateByKeys({ activeKeyVecrvInfo: o, vecrvInfo: { [o]: s } });
              return s;
            },
            setFormValues: async (e, a, r, s, o, i) => {
              let n = t()[et].formValues,
                l = R()({ ...n, ...s });
              (l.lockedAmtError = ''), (l.lockedAmtError = '');
              let d = R()(Q);
              (d.error = ''), i && (l = R()(J));
              let c = (function (e, t, a) {
                return `${e}-${t ?? ''}-${a ? (0, y.z5)(a) : ''}`;
              })(r, e?.chainId, e?.signerAddress);
              if (
                (t()[et].setStateByKeys({ activeKey: c, formValues: R()(l), formStatus: R()(d) }),
                !e || a || !e?.signerAddress || !o)
              )
                return;
              (l.lockedAmtError = +l.lockedAmt > +o.crv ? 'too-much' : ''),
                t()[et].setStateByKey('formValues', R()(l));
              let p = +l.lockedAmt > 0 && !l.lockedAmtError,
                u = l.days > 0 && !l.utcDateError,
                m = 'create' !== r || (p && u),
                h = 'adjust_crv' !== r || p,
                f = 'adjust_date' !== r || u;
              m && h && f
                ? t()[et].fetchEstGasApproval(c, e, r, l)
                : t()[et].setStateByKey('formEstGas', { [c]: X });
            },
            fetchEstGasApproval: async (e, a, r, s) => {
              let o = R()(t()[et].formStatus),
                i = R()({ ...X, loading: !0 });
              t()[et].setStateByActiveKey('formEstGas', e, R()(i));
              let n = await B.A.lockCrv.estGasApproval(e, a, r, s.lockedAmt, s.days);
              return (
                (i.loading = !1),
                n.error
                  ? (o.error = n.error)
                  : ((i.estimatedGas = n.estimatedGas), (o.isApproved = n.isApproved)),
                t()[et].setStateByKeys({ formStatus: R()(o), formEstGas: { [e]: i } }),
                n
              );
            },
            fetchStepApprove: async (e, a, r, s) => {
              let { provider: o } = S.vT.getState();
              if (!o) return (0, S.GS)(t()[et]);
              let i = R()(Q);
              (i.formProcessing = !0),
                (i.step = 'APPROVAL'),
                t()[et].setStateByKey('formStatus', R()(i)),
                await t().gas.fetchGasInfo(a);
              let n = await B.A.lockCrv.lockCrvApprove(e, o, a, s.lockedAmt);
              if (n.activeKey === t()[et].activeKey)
                return (
                  (i.formProcessing = !1),
                  (i.step = ''),
                  n.error
                    ? ((i.error = n.error), t()[et].setStateByKey('formStatus', i))
                    : ((i.isApproved = !0),
                      (i.formTypeCompleted = 'APPROVE'),
                      t()[et].setStateByKey('formStatus', i),
                      await t()[et].fetchEstGasApproval(e, a, r, s)),
                  n
                );
            },
            fetchStepCreate: async (e, a, r) => {
              let { provider: s } = S.vT.getState();
              if (!s) return (0, S.GS)(t()[et]);
              if (r.lockedAmt && r.utcDate && r.days) {
                let o = R()(t()[et].formStatus);
                (o.formProcessing = !0),
                  (o.step = 'CREATE_LOCK'),
                  t()[et].setStateByKey('formStatus', R()(o)),
                  await t().gas.fetchGasInfo(a);
                let i = await B.A.lockCrv.createLock(e, a, s, r.lockedAmt, r.utcDate, r.days);
                if (i.activeKey === t()[et].activeKey) {
                  ((o = R()(t()[et].formStatus)).formProcessing = !1),
                    (o.step = ''),
                    (o.error = ''),
                    i.error
                      ? ((o.error = i.error), t()[et].setStateByKey('formStatus', o))
                      : ((o.formTypeCompleted = 'CREATE_LOCK'),
                        t()[et].setStateByKeys({ formValues: R()(J), formStatus: R()(o) }));
                  let e = await t()[et].fetchVecrvInfo(a);
                  if (e) {
                    let t = (0, y.ZV)(e.lockedAmountAndUnlockTime.lockedAmount),
                      a = ee.A.utc(e.lockedAmountAndUnlockTime.unlockTime).format('l');
                    return { ...i, lockedAmt: t, lockedDate: a };
                  }
                }
              }
            },
            fetchStepIncreaseCrv: async (e, a, r) => {
              let { provider: s } = S.vT.getState();
              if (!s) return (0, S.GS)(t()[et]);
              let o = R()(t()[et].formStatus);
              (o.formProcessing = !0),
                (o.step = 'INCREASE_CRV'),
                t()[et].setStateByKey('formStatus', R()(o)),
                await t().gas.fetchGasInfo(a);
              let i = await B.A.lockCrv.increaseAmount(e, a, s, r.lockedAmt);
              if (i.activeKey === t()[et].activeKey)
                return (
                  ((o = R()(t()[et].formStatus)).formProcessing = !1),
                  (o.step = ''),
                  (o.error = ''),
                  i.error
                    ? ((o.error = i.error), t()[et].setStateByKey('formStatus', o))
                    : ((o.formTypeCompleted = 'INCREASE_CRV'),
                      t()[et].setStateByKeys({ formValues: R()(J), formStatus: R()(o) }),
                      t()[et].fetchVecrvInfo(a)),
                  i
                );
            },
            fetchStepIncreaseTime: async (e, a, r) => {
              let { provider: s } = S.vT.getState();
              if (!s) return (0, S.GS)(t()[et]);
              let o = R()(t()[et].formStatus);
              (o.formProcessing = !0),
                (o.step = 'INCREASE_TIME'),
                t()[et].setStateByKey('formStatus', R()(o)),
                await t().gas.fetchGasInfo(a);
              let i = await B.A.lockCrv.increaseUnlockTime(e, s, a, r.days);
              if (i.activeKey === t()[et].activeKey)
                return (
                  ((o = R()(t()[et].formStatus)).formProcessing = !1),
                  (o.step = ''),
                  (o.error = ''),
                  i.error
                    ? ((o.error = i.error), t()[et].setStateByKey('formStatus', o))
                    : ((o.formTypeCompleted = 'INCREASE_TIME'),
                      t()[et].setStateByKeys({ formValues: R()(J), formStatus: R()(o) }),
                      t()[et].fetchVecrvInfo(a)),
                  i
                );
            },
            setStateByActiveKey: (e, a, r) => {
              Object.keys(t()[et][e]).length > 30
                ? t().setAppStateByKey(et, e, { [a]: r })
                : t().setAppStateByActiveKey(et, e, a, r);
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey(et, e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys(et, e);
            },
            resetState: () => {
              t().resetAppState(et, R()(ea));
            },
          },
        });
      var es = a(55906),
        eo = a(91176),
        ei = a(82994),
        en = a(21802),
        el = a(79214);
      let ed = Object.entries({
        [el.s.Ethereum]: {
          excludeTokensBalancesMapper: {
            '0x6b8734ad31d42f5c05a86594314837c416ada984': !0,
            '0x29b41fe7d754b8b43d4060bb43734e436b0b9a33': !0,
          },
          poolCustomTVL: { pax: '0', busd: '0', y: '0' },
          poolIsWrappedOnly: { pax: !0, busd: !0, y: !0 },
          missingPools: [
            { name: 'linkusd', url: 'https://classic.curve.finance/linkusd/withdraw' },
            { name: 'tricrypto', url: 'https://classic.curve.finance/tricrypto/withdraw' },
          ],
          swap: {
            fromAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            toAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
          },
          excludePoolsMapper: {
            'weth-llamma': !0,
            'sfrxeth-llamma': !0,
            pax: !0,
            busd: !0,
            y: !0,
            'factory-v2-267': !0,
            'factory-v2-332': !0,
            'factory-v2-348': !0,
            'factory-v2-349': !0,
            'factory-v2-350': !0,
            'factory-v2-233': !0,
            'factory-stable-ng-13': !0,
            'factory-stable-ng-21': !0,
            'factory-v2-370': !0,
          },
          swapCustomRouteRedirect: {
            'sfrxeth-llamma': (0, en.PE)('crvusd', 'ethereum', en.PD.PAGE_MARKETS),
          },
          createDisabledTokens: [
            '0x075b1bb99792c9e1041ba13afef80c91a1e70fb3',
            '0x051d7e5609917bd9b73f04bac0ded8dd46a74301',
            '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
          ],
          createQuickList: [
            {
              address: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactoryOld: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
          pricesApi: !0,
        },
        [el.s.Optimism]: {
          swap: {
            fromAddress: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
            toAddress: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
          },
          symbol: 'ETH',
          createQuickList: [
            {
              address: '0xc52d7f23a2e460248db6ee192cb23dd12bddcbf6',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
          pricesApi: !0,
        },
        [el.s.Gnosis]: {
          poolFilters: ['all', 'usd', 'crypto', 'tricrypto', 'stableng', 'others', 'user'],
          swap: {
            fromAddress: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
            toAddress: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
          },
          symbol: 'XDAI',
          createQuickList: [
            {
              address: '0xabef652195f98a91e490f047a5006b71c85f058d',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
          pricesApi: !0,
        },
        [el.s.Moonbeam]: {
          poolFilters: ['all', 'usd', 'btc', 'crypto', 'stableng', 'others', 'user'],
          swap: {
            fromAddress: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
            toAddress: '0xfa36fe1da08c89ec72ea1f0143a35bfd5daea108',
          },
          stableswapFactoryOld: !0,
          hasFactory: !0,
        },
        [el.s.Polygon]: {
          poolFilters: ['all', 'usd', 'btc', 'crypto', 'tricrypto', 'stableng', 'others', 'user'],
          missingPools: [
            { name: 'atricrypto', url: 'https://polygon.curve.finance/atricrypto/withdraw' },
            { name: 'atricrypto2', url: 'https://polygon.curve.finance/atricrypto2/withdraw' },
          ],
          swap: {
            fromAddress: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
            toAddress: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          },
          createDisabledTokens: ['0x0000000000000000000000000000000000001010'],
          createQuickList: [
            {
              address: '0xc4ce1d6f5d98d65ee25cf85e9f2e9dcfee6cb5d6',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactoryOld: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
          pricesApi: !0,
        },
        [el.s.Kava]: {
          poolFilters: [
            'all',
            'usd',
            'btc',
            'kava',
            'crypto',
            'tricrypto',
            'stableng',
            'others',
            'user',
          ],
          swap: {
            fromAddress: '0x765277eebeca2e31912c9946eae1021199b39c61',
            toAddress: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
          },
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
        },
        [el.s.Fantom]: {
          excludePoolsMapper: {
            'factory-v2-137': !0,
            'factory-v2-140': !0,
            'factory-stable-ng-12': !0,
            'factory-stable-ng-13': !0,
            'factory-stable-ng-14': !0,
            'factory-stable-ng-15': !0,
          },
          excludeTokensBalancesMapper: { '0x618b22e6fddd6870cdfb4146ef2d4bc62efc660a': !0 },
          poolFilters: [
            'all',
            'usd',
            'btc',
            'crypto',
            'tricrypto',
            'stableng',
            'cross-chain',
            'others',
            'user',
          ],
          swap: {
            fromAddress: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
            toAddress: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
          },
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactoryOld: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
          pricesApi: !0,
        },
        [el.s.Arbitrum]: {
          excludeTokensBalancesMapper: { '0x3aef260cb6a5b469f970fae7a1e233dbd5939378': !0 },
          swap: {
            fromAddress: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
            toAddress: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
          },
          createQuickList: [
            {
              address: '0x498bf2b1e120fed3ad3d42ea2165e9b73f99c1e5',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
          pricesApi: !0,
        },
        [el.s.Avalanche]: {
          poolFilters: ['all', 'usd', 'btc', 'crypto', 'tricrypto', 'stableng', 'others', 'user'],
          swap: {
            fromAddress: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
            toAddress: '0xc7198437980c041c805a1edcba50c1ce5db95118',
          },
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
        },
        [el.s.Celo]: {
          poolFilters: ['all', 'usd', 'btc', 'crypto', 'tricrypto', 'stableng', 'others', 'user'],
          swap: {
            fromAddress: '0x37f750b7cc259a2f741af45294f6a16572cf5cad',
            toAddress: '0x617f3112bf5397d0467d315cc709ef968d9ba546',
          },
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
        },
        [el.s.Aurora]: {
          poolFilters: ['all', 'usd', 'btc', 'crypto', 'stableng', 'others', 'user'],
          swap: {
            fromAddress: '0xb12bfca5a55806aaf64e99521918a4bf0fc40802',
            toAddress: '0x4988a896b1227218e4a686fde5eabdcabd91571f',
          },
          twocryptoFactory: !0,
        },
        [el.s.ZkSync]: {
          poolFilters: ['all', 'usd', 'btc', 'eth', 'crypto', 'stableng', 'others', 'user'],
          showInSelectNetwork: !1,
          stableswapFactory: !0,
        },
        [el.s.Base]: {
          poolFilters: [
            'all',
            'usd',
            'btc',
            'eth',
            'crypto',
            'tricrypto',
            'stableng',
            'others',
            'user',
          ],
          excludePoolsMapper: { 'factory-v2-4': !0, 'factory-v2-5': !0 },
          hideSmallPoolsTvl: 5e3,
          swap: {
            fromAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            toAddress: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
          },
          createQuickList: [
            {
              address: '0x417Ac0e078398C154EdFadD9Ef675d30Be60Af93',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactoryOld: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
          pricesApi: !0,
        },
        [el.s.Bsc]: {
          poolFilters: [
            'all',
            'usd',
            'btc',
            'eth',
            'crypto',
            'tricrypto',
            'stableng',
            'others',
            'user',
          ],
          swap: {
            fromAddress: '0xe9c803f48dffe50180bd5b01dc04da939e3445fc',
            toAddress: '0xcba2aeec821b0b119857a9ab39e09b034249681a',
          },
          createQuickList: [
            {
              address: '0xe2fb3f127f5450dee44afe054385d74c392bdef4',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          stableswapFactoryOld: !0,
          stableswapFactory: !0,
          twocryptoFactoryOld: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
        },
        [el.s.Fraxtal]: {
          poolFilters: [
            'all',
            'usd',
            'btc',
            'eth',
            'crypto',
            'crvusd',
            'tricrypto',
            'others',
            'stableng',
            'user',
          ],
          swap: {
            fromAddress: '0xb102f7efa0d5de071a8d37b3548e1c7cb148caf3',
            toAddress: '0xfc00000000000000000000000000000000000001',
          },
          createQuickList: [
            {
              address: '0xb102f7efa0d5de071a8d37b3548e1c7cb148caf3',
              haveSameTokenName: !1,
              symbol: 'crvUSD',
            },
          ],
          pricesApi: !0,
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
        },
        [el.s.XLayer]: {
          swap: {
            fromAddress: '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
            toAddress: '0x74b7f16337b8972027f6196a17a631ac6de26d22',
          },
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
        },
        [el.s.Mantle]: {
          swap: {
            fromAddress: '0x201eba5cc46d216ce6dc03f6a759e8e766e956ae',
            toAddress: '0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9',
          },
          stableswapFactory: !0,
          twocryptoFactory: !0,
          tricryptoFactory: !0,
          hasFactory: !0,
        },
      }).reduce((e, [t, a]) => {
        let r = Number(t);
        return (e[r] = { ...(0, ei.l)(r, ei.A[r]), ...es.mR, ...a, isCrvRewardsEnabled: !0 }), e;
      }, {});
      async function ec() {
        let e = Object.values(await eo.A.getCurveLiteNetworks()).reduce(
          (e, { chainId: t, ...a }) => {
            let r = [el.s.Sonic, el.s.Hyperliquid].includes(t);
            return (
              (e[t] = {
                ...(0, ei.l)(Number(t), a),
                ...es.mR,
                ...(r && {
                  poolFilters: [
                    'all',
                    'usd',
                    'btc',
                    'eth',
                    'crypto',
                    'crvusd',
                    'tricrypto',
                    'stableng',
                    'cross-chain',
                    'others',
                    'user',
                  ],
                }),
                chainId: t,
                hasFactory: !0,
                stableswapFactory: !0,
                twocryptoFactory: !0,
                tricryptoFactory: !0,
                pricesApi: r,
                isLite: !r,
                isCrvRewardsEnabled: r,
                isTestnet: a.isTestnet,
              }),
              e
            );
          },
          {}
        );
        return { ...ed, ...e };
      }
      let ep = {
          aliases: {},
          networks: ed,
          nativeToken: {},
          networksIdMapper: {},
          visibleNetworksList: [],
        },
        eu = 'networks',
        em = (e, t) => {
          let a = (e, a, r) => t().setAppStateByActiveKey(eu, e, a, r),
            r = (e, a) => t().setAppStateByKey(eu, e, a),
            s = (e) =>
              r(
                'networksIdMapper',
                Object.entries(e).reduce((e, [t, { networkId: a }]) => ((e[a] = Number(t)), e), {})
              ),
            o = (e) => {
              let t = Object.values(e)
                .filter((e) => e.showInSelectNetwork)
                .map((e) => ({
                  label: e.name,
                  chainId: e.chainId,
                  networkId: e.networkId,
                  src: e.logoSrc,
                  srcDark: e.logoSrcDark,
                  isTestnet: e.isTestnet,
                }));
              r(
                'visibleNetworksList',
                _()(t, (e) => e.label)
              );
            };
          return {
            [eu]: {
              ...ep,
              fetchNetworks: async () => {
                try {
                  let e = await ec();
                  return r('networks', e), s(e), o(e), e;
                } catch (e) {
                  return console.error(e), ed;
                }
              },
              setNetworkConfigs: (e) => {
                let { ALIASES: t, NATIVE_TOKEN: r } = e.getNetworkConstants();
                a('nativeToken', e.chainId.toString(), { ...r }),
                  a('aliases', e.chainId.toString(), { ...t });
              },
            },
          };
        };
      var eh = a(81981),
        ef = a(45949),
        ey = a(26404),
        eg = a(13069),
        eA = a(78866);
      function ew(e, t, a) {
        let r = Array.isArray(e) ? e[0] + e[1] : e;
        if (!r) return a;
        {
          let e = (0, C.p1)(1.8 * r * t),
            s = Number(a) - e;
          return s > 0 ? s.toString() : '0';
        }
      }
      let ex = 'poolDeposit',
        eb = {
          activeKey: '',
          poolAddress: '',
          formEstGas: {},
          formLpTokenExpected: {},
          formType: 'DEPOSIT',
          formStatus: ey.kR,
          formValues: ey.yC,
          maxLoading: null,
          slippage: {},
        };
      function ev(e, t, { amounts: a, isBalancedAmounts: r, isWrapped: s, lpToken: o }, i) {
        let n = `${t}-${e}-`;
        if ('DEPOSIT' === t || 'DEPOSIT_STAKE' === t) {
          let e = a.map((e) => e.value).join('-');
          n += `${e}-${r}-${s}-${i}-${o}`;
        } else n += `${o}`;
        return n;
      }
      function eS(e) {
        return {
          ...R()(e),
          isBalancedAmounts: !1,
          lpToken: '',
          amounts: e.amounts.map((e) => ({ ...e, value: '' })),
        };
      }
      let ek = (e, t) => ({
        [ex]: {
          ...eb,
          fetchUserPoolWalletBalances: async (e, a) => {
            let r = (0, eA.df)(e, a);
            return t().user.walletBalances[r] ?? (await t().user.fetchUserPoolInfo(e, a, !0));
          },
          fetchExpected: async (e, a, r, s, o) => {
            let { amounts: i, isWrapped: n } = o,
              l =
                'DEPOSIT' === r
                  ? B.A.poolDeposit.depositExpected
                  : B.A.poolDeposit.depositAndStakeExpected,
              [d, c] = await Promise.all([l(e, s, n, (0, eg.wj)(i)), B.A.pool.poolParameters(s)]);
            t()[ex].setStateByKey('formLpTokenExpected', {
              [e]: { ...d, loading: !1, virtualPrice: c.parameters?.virtualPrice },
            });
          },
          fetchMaxAmount: async (e, a, r, { tokenAddress: s, idx: o }) => {
            let i = R()(t()[ex].formValues),
              n = t().userBalances.userBalancesMapper[s] ?? '';
            if (s.toLowerCase() === eh.m8) {
              (i.amounts[o].value = ''),
                t()[ex].setStateByKeys({ formValues: R()(i), maxLoading: o }),
                (i.amounts[o].value = n);
              let s = await B.A.poolDeposit.depositEstGasApproval(
                  e,
                  a,
                  r,
                  i.isWrapped,
                  (0, eg.wj)(i.amounts)
                ),
                l = t().gas.gasInfo?.basePlusPriority;
              if (!s.error && s.estimatedGas && l?.[0])
                return (i.amounts[o].value = ew(s.estimatedGas, l[0], n)), i.amounts;
              console.error('unable to get est gas value');
            }
            return (i.amounts[o].value = n), i.amounts;
          },
          fetchSeedAmount: async (e, t) => {
            let { hasWrapped: a, pool: r } = e,
              {
                underlyingCoins: s,
                underlyingCoinAddresses: o,
                wrappedCoins: i,
                wrappedCoinAddresses: n,
              } = r,
              l = t.amounts[0].value,
              d = Number(l) > 0,
              c = a ? i : s,
              p = a ? n : o;
            try {
              let e = d ? await r.getSeedAmounts(l, !a) : null;
              return {
                amounts: c.map((t, a) => ({ token: t, tokenAddress: p[a], value: e?.[a] || '' })),
                isWrapped: a,
              };
            } catch (e) {
              return (
                console.error('Api error getSeedAmounts', e),
                {
                  amounts: c.map((e, a) => {
                    let r = 0 === a ? t.amounts[a].value : '';
                    return { token: e, tokenAddress: p[a], value: r };
                  }),
                  isWrapped: a,
                }
              );
            }
          },
          fetchSlippage: async (e, a, r, s, o, i) => {
            let { amounts: n, isWrapped: l } = o,
              c = (0, eg.wj)(n),
              p =
                'DEPOSIT' === r
                  ? await B.A.poolDeposit.depositBonus(e, s, l, c)
                  : await B.A.poolDeposit.depositAndStakeBonus(e, s, l, c);
            p.error
              ? t()[ex].setStateByKeys({
                  formStatus: {
                    ...R()(ey.kR),
                    isApproved: t()[ex].formStatus.isApproved,
                    error: p.error,
                  },
                  slippage: { [e]: R()(ef.QC) },
                })
              : t()[ex].setStateByKey('slippage', {
                  [p.activeKey]: {
                    ...ef.QC,
                    loading: !1,
                    slippage: Math.abs(+p.bonus),
                    isHighSlippage: (0, d.DT)(+p.bonus, i),
                    isBonus: (0, d.cV)(+p.bonus),
                  },
                });
          },
          setFormValues: async (e, a, r, s, o, i, n, l) => {
            let d = t()[ex].activeKey,
              c = t()[ex].formValues,
              p = t()[ex].formStatus,
              u = R()({ ...c, ...o }),
              m = ev(r, e, u, l);
            if (
              (t()[ex].setStateByKeys({
                activeKey: m,
                formStatus: { ...ey.kR, isApproved: p.isApproved },
                formValues: R()(u),
              }),
              !a || !s || null === n || null === u.isWrapped)
            )
              return;
            let { chainId: h, signerAddress: f } = a,
              { pool: y } = s;
            if ('DEPOSIT' === e || 'DEPOSIT_STAKE' === e) {
              if (i)
                (u.amounts = await t()[ex].fetchMaxAmount(m, h, y, i)),
                  (m = ev(y.id, e, u, l)),
                  t()[ex].setStateByKeys({ activeKey: m, formValues: R()(u), maxLoading: null });
              else if ('by-wallet' === u.isBalancedAmounts) {
                let a = await B.A.poolDeposit.depositBalancedAmounts(m, y, u.isWrapped);
                a.error
                  ? t()[ex].setStateByKey('formStatus', { ...t()[ex].formStatus, error: a.error })
                  : ((u.amounts = t().pools.poolsMapper[h][r].tokenAddresses.map((e, t) => ({
                      value: a.amounts[t],
                      token: s.tokens[t],
                      tokenAddress: e,
                    }))),
                    (m = ev(y.id, e, u, l)),
                    t()[ex].setStateByKeys({ activeKey: m, formValues: R()(u) }));
              }
              if (n) {
                let { amounts: a, isWrapped: r } = await t()[ex].fetchSeedAmount(s, u);
                (u.amounts = a),
                  (u.isWrapped = r),
                  (m = ev(y.id, e, u, l)),
                  t()[ex].setStateByKeys({ activeKey: m, formValues: R()(u) });
              }
              if (
                u.amounts.some((e) => +e.value > 0) &&
                (t()[ex].setStateByActiveKey('formLpTokenExpected', m, {
                  ...(t()[ex].formLpTokenExpected[d] ?? ey.hE),
                  loading: !0,
                }),
                t()[ex].fetchExpected(m, h, e, y, u),
                n ||
                  (t()[ex].setStateByActiveKey('slippage', m, {
                    ...(t()[ex].slippage[d] ?? ef.QC),
                    loading: !0,
                  }),
                  t()[ex].fetchSlippage(m, h, e, y, u, l)),
                f)
              ) {
                let r = await t()[ex].fetchUserPoolWalletBalances(a, y.id),
                  s = (0, eg.AC)(u.amounts, r);
                s
                  ? t()[ex].setStateByKey('formStatus', {
                      ...t()[ex].formStatus,
                      error: (0, k.t)`Not enough balance for ${s}.`,
                    })
                  : (t()[ex].setStateByActiveKey('formEstGas', m, {
                      ...(t()[ex].formEstGas[d] ?? ef.Hb),
                      loading: !0,
                    }),
                    t()[ex].fetchEstGasApproval(m, h, e, y));
              }
            } else if ('STAKE' === e && f && +u.lpToken > 0) {
              let r = await t()[ex].fetchUserPoolWalletBalances(a, y.id),
                s = +u.lpToken > +(r.lpToken ?? '0') ? 'lpToken-too-much' : '';
              s
                ? t()[ex].setStateByKey('formStatus', { ...R()(t()[ex].formStatus), error: s })
                : (t()[ex].setStateByActiveKey('formEstGas', m, {
                    ...(t()[ex].formEstGas[d] ?? ef.Hb),
                    loading: !0,
                  }),
                  t()[ex].fetchEstGasApproval(m, h, e, y));
            }
          },
          fetchEstGasApproval: async (e, a, r, s) => {
            let { amounts: o, isWrapped: i, lpToken: n } = R()(t()[ex].formValues),
              l =
                'DEPOSIT' === r
                  ? await B.A.poolDeposit.depositEstGasApproval(e, a, s, i, (0, eg.wj)(o))
                  : 'DEPOSIT_STAKE' === r
                    ? await B.A.poolDeposit.depositAndStakeEstGasApproval(e, a, s, i, (0, eg.wj)(o))
                    : await B.A.poolDeposit.stakeEstGasApproval(e, a, s, n);
            t()[ex].setStateByActiveKey('formEstGas', e, {
              estimatedGas: l.estimatedGas,
              loading: !1,
            });
            let d = t()[ex].formStatus;
            return (
              d.formProcessing ||
                t()[ex].setStateByKey('formStatus', {
                  ...d,
                  isApproved: l.isApproved,
                  error: d.error || l.error,
                }),
              l
            );
          },
          fetchStepApprove: async (e, a, r, s, o) => {
            let { provider: i } = S.vT.getState();
            if (!i) return (0, S.GS)(t()[ex]);
            t()[ex].setStateByKey('formStatus', {
              ...t()[ex].formStatus,
              formProcessing: !0,
              step: 'APPROVAL',
            }),
              await t().gas.fetchGasInfo(a);
            let { chainId: n } = a,
              { amounts: l, isWrapped: d } = o,
              c =
                'DEPOSIT' === r
                  ? B.A.poolDeposit.depositApprove
                  : B.A.poolDeposit.depositAndStakeApprove,
              p = await c(e, i, s, d, (0, eg.wj)(l));
            if (p.activeKey === t()[ex].activeKey) {
              let a = R()(t()[ex].formStatus);
              return (
                (a.formProcessing = !1),
                (a.step = ''),
                (a.error = ''),
                p.error
                  ? ((a.error = p.error), t()[ex].setStateByKey('formStatus', a))
                  : ((a.formTypeCompleted = 'APPROVE'),
                    (a.isApproved = !0),
                    t()[ex].setStateByKey('formStatus', a),
                    await t()[ex].fetchEstGasApproval(e, n, r, s)),
                p
              );
            }
          },
          fetchStepDeposit: async (e, a, r, s, o) => {
            let { provider: i } = S.vT.getState();
            if (!i) return (0, S.GS)(t()[ex]);
            t()[ex].setStateByKey('formStatus', {
              ...t()[ex].formStatus,
              formProcessing: !0,
              step: 'DEPOSIT',
            }),
              await t().gas.fetchGasInfo(a);
            let { pool: n } = r,
              { amounts: l, isWrapped: d } = s,
              c = await B.A.poolDeposit.deposit(e, i, n, d, (0, eg.wj)(l), o);
            if (c.activeKey === t()[ex].activeKey) {
              let e = R()(t()[ex].formStatus);
              return (
                (e.formProcessing = !1),
                (e.step = ''),
                (e.error = ''),
                c.error
                  ? ((e.error = c.error), t()[ex].setStateByKey('formStatus', e))
                  : ((e.formTypeCompleted = 'DEPOSIT'),
                    t()[ex].setStateByKeys({ formStatus: e, formValues: eS(s) }),
                    await Promise.all([
                      t().user.fetchUserPoolInfo(a, n.id),
                      t().pools.fetchPoolStats(a, r),
                    ])),
                c
              );
            }
          },
          fetchStepDepositStake: async (e, a, r, s, o) => {
            let { provider: i } = S.vT.getState();
            if (!i) return (0, S.GS)(t()[ex]);
            t()[ex].setStateByKey('formStatus', {
              ...t()[ex].formStatus,
              formProcessing: !0,
              step: 'DEPOSIT_STAKE',
            }),
              await t().gas.fetchGasInfo(a);
            let { pool: n } = r,
              { amounts: l, isWrapped: d } = s,
              c = await B.A.poolDeposit.depositAndStake(e, i, n, d, (0, eg.wj)(l), o);
            if (c.activeKey === t()[ex].activeKey) {
              let e = R()(t()[ex].formStatus);
              return (
                (e.formProcessing = !1),
                (e.step = ''),
                (e.error = ''),
                c.error
                  ? ((e.error = c.error), t()[ex].setStateByKey('formStatus', e))
                  : ((e.formTypeCompleted = 'DEPOSIT_STAKE'),
                    t()[ex].setStateByKeys({ formStatus: e, formValues: eS(s) }),
                    await Promise.all([
                      t().user.fetchUserPoolInfo(a, n.id),
                      t().pools.fetchPoolStats(a, r),
                    ])),
                c
              );
            }
          },
          fetchStepStakeApprove: async (e, a, r, s, o) => {
            let { provider: i } = S.vT.getState();
            if (!i) return (0, S.GS)(t()[ex]);
            t()[ex].setStateByKey('formStatus', {
              ...t()[ex].formStatus,
              formProcessing: !0,
              step: 'APPROVAL',
            }),
              await t().gas.fetchGasInfo(a);
            let { chainId: n } = a,
              { lpToken: l } = o,
              d = await B.A.poolDeposit.stakeApprove(e, i, s, l);
            if (d.activeKey === t()[ex].activeKey) {
              let a = R()(t()[ex].formStatus);
              return (
                (a.formProcessing = !1),
                (a.step = ''),
                (a.error = ''),
                d.error
                  ? ((a.error = d.error), t()[ex].setStateByKey('formStatus', a))
                  : ((a.formTypeCompleted = 'APPROVE'),
                    (a.isApproved = !0),
                    t()[ex].setStateByKey('formStatus', a),
                    await t()[ex].fetchEstGasApproval(e, n, r, s)),
                d
              );
            }
          },
          fetchStepStake: async (e, a, r, s) => {
            let { provider: o } = S.vT.getState();
            if (!o) return (0, S.GS)(t()[ex]);
            t()[ex].setStateByKey('formStatus', {
              ...t()[ex].formStatus,
              formProcessing: !0,
              step: 'STAKE',
            }),
              await t().gas.fetchGasInfo(a);
            let { pool: i } = r,
              { lpToken: n } = s,
              l = await B.A.poolDeposit.stake(e, o, i, n);
            if (l.activeKey === t()[ex].activeKey) {
              let e = R()(t()[ex].formStatus);
              return (
                (e.formProcessing = !1),
                (e.step = ''),
                (e.error = ''),
                l.error
                  ? ((e.error = l.error), t()[ex].setStateByKey('formStatus', e))
                  : ((e.formTypeCompleted = 'STAKE'),
                    t()[ex].setStateByKeys({ formStatus: e, formValues: eS(s) }),
                    await Promise.all([
                      t().user.fetchUserPoolInfo(a, i.id),
                      t().pools.fetchPoolStats(a, r),
                    ])),
                l
              );
            }
          },
          setStateByActiveKey: (e, a, r) => {
            Object.keys(t()[ex][e]).length > 30
              ? t().setAppStateByKey(ex, e, { [a]: r })
              : t().setAppStateByActiveKey(ex, e, a, r);
          },
          setStateByKey: (e, a) => {
            t().setAppStateByKey(ex, e, a);
          },
          setStateByKeys: (e) => {
            t().setAppStateByKeys(ex, e);
          },
          resetState: ({ tokens: e, tokenAddresses: a, isWrapped: r }, s) => {
            t().resetAppState(ex, {
              ...eb,
              formType: s,
              formValues: {
                ...ey.yC,
                isWrapped: r,
                amounts: e.map((e, t) => ({ token: e, tokenAddress: a[t], value: '' })),
              },
            });
          },
        },
      });
      var eC = a(51569),
        eP = a(51426),
        ej = a(45356),
        eT = a(74009),
        eI = a(62011),
        eR = a(87081),
        eB = a(4671);
      let eE = 'poolSwap',
        eG = {
          activeKey: '',
          exchangeOutput: {},
          routerSwapOutput: {},
          isMaxLoading: !1,
          ignoreExchangeRateCheck: {},
          formEstGas: {},
          formStatus: eR.kR,
          formValues: eR.yC,
        };
      function eD({ fromAddress: e, fromAmount: t, toAmount: a, toAddress: r }, s) {
        let o = e ? e.slice(e.length - 4) : '',
          i = r ? r.slice(r.length - 4) : '';
        return `${o}-${t}-${i}-${s}`;
      }
      let eF = (e, t) => ({
        [eE]: {
          ...eG,
          fetchIgnoreExchangeRateCheck: async (e, r) => {
            let s = t(),
              o = s[eE],
              {
                networks: { networks: i },
              } = s,
              { chainId: n } = e,
              l = o.ignoreExchangeRateCheck[r.id];
            if (void 0 !== l) return l;
            {
              let e = S.vT.getState().provider || new ej.FR(i[n].rpcUrl);
              try {
                let t = await a
                    .e(7696)
                    .then(a.t.bind(a, 97696, 19))
                    .then((e) => e.default),
                  s = new eT.KA(t),
                  i = new eI.NZ(r.address, s.format(), e),
                  n = await i.stored_rates(),
                  l = Object.values(n).some((e) => {
                    let t = BigInt(e).toString().replace(/0+$/, '');
                    return Number(t) > 1;
                  });
                return o.setStateByActiveKey('ignoreExchangeRateCheck', r.id, l), l;
              } catch (e) {
                return o.setStateByActiveKey('ignoreExchangeRateCheck', r.id, !1), !1;
              }
            }
          },
          fetchExchangeOutput: async (e, a, r, s, o, i) => {
            let n = t()[eE],
              l = await n.fetchIgnoreExchangeRateCheck(r, s),
              d = await B.A.poolSwap.exchangeOutput(e, s, o, i, l),
              c = R()(n.formStatus);
            if (((c.error = ''), (c.warning = ''), d.error))
              t()[eE].setStateByKey('formStatus', { ...c, error: d.error });
            else {
              let e = R()(o);
              (e.toAmount = d.toAmount), (e.fromAmount = d.fromAmount);
              let l = eD(e, i);
              if (
                (n.setStateByKeys({
                  activeKey: l,
                  formValues: R()(e),
                  formStatus: {
                    ...c,
                    warning: d.isExchangeRateLow ? 'warning-exchange-rate-low' : '',
                  },
                  exchangeOutput: {
                    [l]: {
                      ...d,
                      loading: !1,
                      modal: (function (
                        {
                          isExchangeRateLow: e,
                          priceImpact: t,
                          toAmount: a,
                          fromAmount: r,
                          fetchedToAmount: s,
                        },
                        o,
                        { toToken: i }
                      ) {
                        let { isHighImpact: n } = (0, eB.Oi)({
                            maxSlippage: o,
                            toAmount: a,
                            priceImpact: t,
                            fetchedToAmount: s,
                          }),
                          l = (0, eB.TM)(n, e),
                          d = (+a / +r).toString(),
                          c = { toAmount: a, toToken: i },
                          p = {
                            lowExchangeRate: {
                              lowExchangeRate: !0,
                              title: l.title,
                              exchangeRate: d,
                              ...c,
                            },
                            priceImpact: { priceImpact: !0, title: l.title, value: t, ...c },
                            priceImpactLowExchangeRate: {
                              priceImpactLowExchangeRate: !0,
                              title: l.title,
                              value: t,
                              exchangeRate: d,
                              ...c,
                            },
                          };
                        return l.type && l.type in p ? p[l.type] : null;
                      })(d, i, e),
                    },
                  },
                }),
                r.signerAddress)
              ) {
                let o = (await t().poolDeposit.fetchUserPoolWalletBalances(r, s.id))[e.fromAddress];
                (e.fromError = +o >= +e.fromAmount ? '' : 'too-much'),
                  t()[eE].setStateByKey('formValues', R()(e)),
                  e.fromError ||
                    (t()[eE].setStateByActiveKey('formEstGas', l, {
                      ...(t()[eE].formEstGas[a] ?? eR.hL),
                      loading: !0,
                    }),
                    t()[eE].fetchEstGasApproval(l, r.chainId, s, e, i));
              }
            }
          },
          fetchTokenWalletBalance: async (e, a, r) =>
            t().user.walletBalances[r] ?? (await t().user.fetchUserPoolInfo(e, a, !0)),
          fetchMaxAmount: async (e, a, r, s, o) => {
            let i = (await t()[eE].fetchTokenWalletBalance(a, r.id, s.fromAddress))[s.fromAddress],
              { basePlusPriority: n } = t().gas.gasInfo ?? {},
              l = i ?? '0';
            if (s.fromAddress.toLowerCase() === eh.m8 && void 0 !== n?.[0] && +l > 0) {
              t()[eE].setStateByKey('isMaxLoading', !0);
              let d = await B.A.poolSwap.estGasApproval(
                e,
                a.chainId,
                r,
                s.isWrapped,
                s.toAddress,
                s.fromAddress,
                l,
                o
              );
              d.estimatedGas && (l = ew(d.estimatedGas, n[0], i)),
                t()[eE].setStateByKey('isMaxLoading', !1);
            }
            return l;
          },
          setFormValues: async (e, a, r, s, o, i, n) => {
            let l = t()[eE].activeKey,
              d = t()[eE].formStatus,
              c = t()[eE].formValues,
              p = R()({ ...c, ...s });
            (p.toError = ''), (p.fromError = '');
            let u = eD(p, n);
            if (
              (t()[eE].setStateByKeys({
                activeKey: u,
                formStatus: { ...eR.kR, isApproved: d.isApproved },
                formValues: R()(p),
              }),
              !e ||
                !r ||
                null === i ||
                !p.fromToken ||
                !p.fromAddress ||
                !p.toToken ||
                !p.toAddress ||
                null === p.isWrapped)
            )
              return;
            let m = r.pool;
            if (
              (o &&
                ((p.fromAmount = await t()[eE].fetchMaxAmount(u, e, m, p, n)),
                (u = eD(p, n)),
                t()[eE].setStateByKeys({ activeKey: u, formValues: R()(p) })),
              +p.toAmount > 0 || +p.fromAmount > 0)
            ) {
              if (+p.toAmount > 0 && !p.isFrom) {
                let { currencyReserves: s, fetchPoolCurrenciesReserves: o } = t().pools,
                  i = s[a] ?? (await o(e, r));
                Array.isArray(i?.tokens) &&
                  ((p.toError = (function (e, t, a) {
                    if (+a > 0) {
                      let r = e.tokens.find((e) => e.tokenAddress === t);
                      return r && +a > 0 && +a > +r.balance ? 'too-much-reserves' : '';
                    }
                    return '';
                  })(i, p.toAddress, p.toAmount)),
                  t()[eE].setStateByKey('formValues', R()(p)));
              }
              p.toError ||
                (t()[eE].setStateByActiveKey('exchangeOutput', u, R()({ ...eR.mN, loading: !0 })),
                t()[eE].fetchExchangeOutput(u, l, e, m, p, n));
            }
          },
          fetchEstGasApproval: async (e, a, r, s, o) => {
            let { fromAddress: i, toAddress: n, fromAmount: l, isWrapped: d } = s,
              c = await B.A.poolSwap.estGasApproval(e, a, r, d, i, n, l, o);
            t()[eE].setStateByActiveKey('formEstGas', e, {
              estimatedGas: c.estimatedGas,
              loading: !1,
            });
            let p = t()[eE].formStatus;
            return (
              p.formProcessing ||
                t()[eE].setStateByKey('formStatus', {
                  ...t()[eE].formStatus,
                  isApproved: c.isApproved,
                  error: p.error || c.error,
                }),
              c
            );
          },
          fetchStepApprove: async (e, a, r, s, o) => {
            let { provider: i } = S.vT.getState();
            if (!i) return (0, S.GS)(t()[eE]);
            let n = t()[eE].activeKey;
            t()[eE].setStateByKey('formStatus', {
              ...t()[eE].formStatus,
              formProcessing: !0,
              step: 'APPROVAL',
            }),
              await t().gas.fetchGasInfo(a);
            let { fromAddress: l, fromAmount: d, isWrapped: c } = s,
              p = await B.A.poolSwap.swapApprove(e, i, r, c, l, d);
            if (p.activeKey === t()[eE].activeKey) {
              let i = R()(t()[eE].formStatus);
              return (
                (i.formProcessing = !1),
                (i.step = ''),
                (i.error = ''),
                p.error
                  ? ((i.error = p.error), t()[eE].setStateByKey('formStatus', i))
                  : ((i.formTypeCompleted = 'APPROVE'),
                    (i.isApproved = !0),
                    t()[eE].setStateByKey('formStatus', i),
                    t()[eE].fetchEstGasApproval(e, a.chainId, r, s, o),
                    await t()[eE].fetchExchangeOutput(e, n, a, r, s, o)),
                p
              );
            }
          },
          fetchStepSwap: async (e, a, r, s, o) => {
            let { provider: i } = S.vT.getState();
            if (!i) return (0, S.GS)(t()[eE]);
            t()[eE].setStateByKey('formStatus', {
              ...t()[eE].formStatus,
              formProcessing: !0,
              step: 'SWAP',
            }),
              await t().gas.fetchGasInfo(a);
            let {
                fromAddress: n,
                fromToken: l,
                fromAmount: d,
                toAddress: c,
                toToken: p,
                isWrapped: u,
              } = s,
              m = await B.A.poolSwap.swap(e, i, r.pool, u, n, c, d, o);
            if (m.activeKey === t()[eE].activeKey) {
              let e = R()(t()[eE].formStatus);
              if (((e.formProcessing = !1), (e.step = ''), (e.error = ''), m.error))
                (e.error = m.error), t()[eE].setStateByKey('formStatus', e);
              else {
                let i = R()(s);
                (i.fromAmount = ''),
                  (i.toAmount = ''),
                  (e.formTypeCompleted = 'SWAP'),
                  t()[eE].setStateByKeys({
                    formStatus: e,
                    activeKey: eD(i, o),
                    exchangeOutput: {},
                    formEstGas: {},
                    formValues: i,
                  }),
                  t().storeCache.setStateByActiveKey('routerFormValues', a.chainId.toString(), {
                    fromAddress: n,
                    fromToken: l,
                    toAddress: c,
                    toToken: p,
                  }),
                  await Promise.all([
                    t().user.fetchUserPoolInfo(a, r.pool.id, !0),
                    t().pools.fetchPoolStats(a, r),
                  ]);
              }
              return m;
            }
          },
          setStateByActiveKey: (e, a, r) => {
            Object.keys(t()[eE][e]).length > 30
              ? t().setAppStateByKey(eE, e, { [a]: r })
              : t().setAppStateByActiveKey(eE, e, a, r);
          },
          setStateByKey: (e, a) => {
            t().setAppStateByKey(eE, e, a);
          },
          setStateByKeys: (e) => {
            t().setAppStateByKeys(eE, e);
          },
          resetState: ({ tokens: e, tokenAddresses: a, isWrapped: r }) => {
            t().resetAppState(eE, {
              ...eG,
              formValues: {
                ...eR.yC,
                isWrapped: r,
                fromToken: e[0],
                fromAddress: a[0],
                toToken: e[1],
                toAddress: a[1],
              },
            });
          },
        },
      });
      var eL = a(21104);
      let eK = 'poolWithdraw',
        eO = {
          activeKey: '',
          formEstGas: {},
          formType: 'WITHDRAW',
          formStatus: eL.kR,
          formValues: eL.yC,
          maxLoading: null,
          slippage: {},
        };
      function eN(
        e,
        t,
        {
          amounts: a,
          claimableCrv: r,
          claimableRewards: s,
          isWrapped: o,
          lpToken: i,
          stakedLpToken: n,
          selected: l,
          selectedToken: d,
          selectedTokenAddress: c,
        },
        p
      ) {
        let u = `${t}-${e}-`;
        if ('WITHDRAW' === t) {
          if ('token' === l) {
            let e = `${l}-${d}-${c ? (0, C.Wr)(c) : ''}`;
            u += `${e}-${o}-${p}-${i}`;
          } else if ('lpToken' === l) u += `${l}-${o}-${p}-${i}`;
          else {
            let e = a.map((e) => e.value).join('-');
            u += `${l}-${e}`;
          }
        } else 'UNSTAKE' === t ? (u += `${n}`) : 'CLAIM' === t && (u += `${r}-${s}`);
        return u;
      }
      function eM(e) {
        return {
          ...R()(e),
          amounts: e.amounts.map((e) => ({ ...e, value: '' })),
          claimableRewards: [],
          claimableCrv: '',
          lpToken: '',
          stakedLpToken: '',
        };
      }
      let eV = (e, t) => ({
        [eK]: {
          ...eO,
          fetchWithdrawToken: async (e) => {
            let {
                storedActiveKey: a,
                curve: r,
                formType: s,
                poolData: o,
                formValues: i,
                maxSlippage: n,
              } = e,
              l = e.activeKey,
              c = R()(i),
              { pool: p } = o,
              { signerAddress: u } = r;
            if (+c.lpToken > 0) {
              (c.amounts = c.amounts.map((e) => ({ ...e, value: '' }))),
                t()[eK].setStateByKeys({ formValues: R()(c) }),
                t()[eK].setStateByKey('slippage', {
                  [l]: { ...(t()[eK].slippage[a] ?? ef.QC), loading: !0 },
                });
              let e = await B.A.poolWithdraw.withdrawOneCoinBonusAndExpected(
                l,
                p,
                c.isWrapped,
                c.lpToken,
                c.selectedTokenAddress
              );
              e.activeKey === l &&
                (e.error
                  ? t()[eK].setStateByKeys({
                      slippage: { [l]: { ...ef.QC, loading: !1 } },
                      formStatus: { ...t()[eK].formStatus, error: e.error },
                    })
                  : ((c.amounts = c.amounts.map((t) => ({
                      ...t,
                      value: t.tokenAddress === c.selectedTokenAddress ? e.expected : '',
                    }))),
                    (l = eN(p.id, s, c, n)),
                    t()[eK].setStateByKeys({ activeKey: l, formValues: R()(c) }),
                    t()[eK].setStateByKey('slippage', {
                      [l]: {
                        ...ef.QC,
                        slippage: Math.abs(+e.bonus),
                        isHighSlippage: (0, d.DT)(+e.bonus, n),
                        isBonus: (0, d.cV)(+e.bonus),
                      },
                    })));
            }
            u && t()[eK].fetchEstGasApproval(l, r, s, p, c);
          },
          fetchWithdrawLpToken: async (e) => {
            let {
                storedActiveKey: a,
                curve: r,
                formType: s,
                poolData: o,
                formValues: i,
                maxSlippage: n,
              } = e,
              l = e.activeKey,
              d = R()(i),
              { signerAddress: c } = r,
              { pool: p } = o;
            if (+d.lpToken > 0) {
              t()[eK].setStateByKey('slippage', {
                [l]: { ...(t()[eK].slippage[a] ?? ef.QC), loading: !0 },
              });
              let e = await B.A.poolWithdraw.withdrawExpected(l, p, d.isWrapped, d.lpToken);
              e.error
                ? t()[eK].setStateByKeys({ formStatus: { ...t()[eK].formStatus, error: e.error } })
                : ((d.amounts = d.amounts.map((t, a) => ({ ...t, value: e.expected[a] ?? '0' }))),
                  (l = eN(p.id, s, d, n)),
                  t()[eK].setStateByKeys({
                    activeKey: l,
                    formValues: R()(d),
                    slippage: { [l]: { ...R()(ef.QC), slippage: 0 } },
                  })),
                c && t()[eK].fetchEstGasApproval(l, r, s, p, d);
            }
          },
          fetchWithdrawCustom: async (e) => {
            let {
                storedActiveKey: a,
                curve: r,
                formType: s,
                poolData: o,
                formValues: i,
                maxSlippage: n,
              } = e,
              l = e.activeKey,
              c = R()(i),
              { pool: p } = o,
              { signerAddress: u } = r;
            if (c.amounts.some((e) => +e.value > 0)) {
              t()[eK].setStateByKey('slippage', {
                [l]: { ...(t()[eK].slippage[a] ?? ef.QC), loading: !0 },
              });
              let e = await B.A.poolWithdraw.withdrawImbalanceBonusAndExpected(
                l,
                p,
                c.isWrapped,
                (0, eg.wj)(c.amounts)
              );
              e.activeKey === l &&
                (e.error
                  ? t()[eK].setStateByKeys({
                      slippage: { [l]: { ...ef.QC, loading: !1 } },
                      formStatus: { ...t()[eK].formStatus, error: e.error },
                    })
                  : ((c.lpToken = e.expected),
                    (l = eN(p.id, s, c, n)),
                    t()[eK].setStateByKeys({ activeKey: l, formValues: R()(c) }),
                    t()[eK].setStateByKey('slippage', {
                      [l]: {
                        ...ef.QC,
                        slippage: Math.abs(+e.bonus),
                        isHighSlippage: (0, d.DT)(+e.bonus, n),
                        isBonus: (0, d.cV)(+e.bonus),
                      },
                    })));
            } else if (+c.lpToken > 0) {
              t()[eK].setStateByKey('slippage', {
                [l]: { ...(t()[eK].slippage[a] ?? ef.QC), loading: !0 },
              });
              let e = await B.A.poolWithdraw.withdrawExpected(l, p, c.isWrapped, c.lpToken);
              e.activeKey === l &&
                (e.error
                  ? t()[eK].setStateByKeys({
                      slippage: { [l]: { ...ef.QC, loading: !1 } },
                      formStatus: { ...t()[eK].formStatus, error: e.error },
                    })
                  : ((c.amounts = c.amounts.map((t, a) => ({ ...t, value: e.expected[a] }))),
                    (l = eN(p.id, s, c, n)),
                    t()[eK].setStateByKeys({ activeKey: l, formValues: R()(c) }),
                    t()[eK].setStateByKey('slippage', { [l]: { ...R()(ef.QC), slippage: 0 } })));
            }
            u && t()[eK].fetchEstGasApproval(l, r, s, p, c);
          },
          fetchClaimable: async (e, a, r) => {
            let s = await B.A.poolWithdraw.claimableTokens(e, r, a),
              o = t()[eK].formStatus;
            t()[eK].activeKey === s.activeKey &&
              (s.error
                ? t()[eK].setStateByKey('formStatus', { ...o, error: s.error })
                : (t()[eK].setStateByKey('formStatus', o),
                  t()[eK].setStateByKey('formValues', {
                    ...t()[eK].formValues,
                    claimableCrv: s.claimableCrv,
                    claimableRewards: s.claimableRewards,
                  })));
          },
          setFormValues: async (e, a, r, s, o, i, n, l) => {
            if (t()[eK].formType !== e) return;
            let d = t()[eK].activeKey,
              c = t()[eK].formValues,
              p = t()[eK].formStatus,
              u = R()({ ...c, ...o }),
              m = eN(r, e, u, l);
            if (
              (t()[eK].setStateByKeys({
                activeKey: m,
                formStatus: {
                  ...eL.kR,
                  isApproved: p.isApproved,
                  isClaimCrv: p.isClaimCrv,
                  isClaimRewards: p.isClaimRewards,
                },
                formValues: R()(u),
              }),
              !a || !s || n || null === u.isWrapped)
            )
              return;
            let { pool: h } = s,
              { chainId: f, signerAddress: y } = a;
            if ('WITHDRAW' === e) {
              !u.selected &&
                +u.lpToken > 0 &&
                ((u.selected = 'token'),
                (u.selectedToken = s.tokens[0]),
                (u.selectedTokenAddress = s.tokenAddresses[0]),
                (m = eN(r, e, u, l)),
                t()[eK].setStateByKeys({ activeKey: m, formValues: R()(u) }));
              let o = {
                activeKey: m,
                storedActiveKey: d,
                curve: a,
                formType: e,
                poolData: s,
                formValues: u,
                maxSlippage: l,
              };
              'token' === u.selected
                ? t()[eK].fetchWithdrawToken(o)
                : 'lpToken' === u.selected
                  ? t()[eK].fetchWithdrawLpToken(o)
                  : 'imbalance' === u.selected && t()[eK].fetchWithdrawCustom(o);
            } else
              'UNSTAKE' === e && y && +u.stakedLpToken > 0
                ? t()[eK].fetchEstGasApproval(m, a, e, h, u)
                : 'CLAIM' === e && t()[eK].fetchClaimable(m, f, h);
          },
          fetchEstGasApproval: async (e, a, r, s, o) => {
            let i;
            let { chainId: n } = a;
            if ('WITHDRAW' === r) {
              let r = await t().poolDeposit.fetchUserPoolWalletBalances(a, s.id);
              +o.lpToken > 0 &&
                +r.lpToken > 0 &&
                +r.lpToken >= +o.lpToken &&
                (i =
                  'lpToken' === o.selected
                    ? await B.A.poolWithdraw.withdrawEstGasApproval(e, n, s, o.isWrapped, o.lpToken)
                    : 'imbalance' === o.selected
                      ? await B.A.poolWithdraw.withdrawImbalanceEstGasApproval(
                          e,
                          n,
                          s,
                          o.isWrapped,
                          (0, eg.wj)(o.amounts)
                        )
                      : await B.A.poolWithdraw.withdrawOneCoinEstGasApproval(
                          e,
                          n,
                          s,
                          o.isWrapped,
                          o.lpToken,
                          o.selectedTokenAddress
                        ));
            } else if ('UNSTAKE' === r) {
              let t = B.A.poolWithdraw.unstakeEstGas;
              i = await t(e, n, s, o.stakedLpToken);
            }
            if (i) {
              t()[eK].setStateByKey('formEstGas', {
                [e]: { estimatedGas: i.estimatedGas, loading: !1 },
              });
              let a = t()[eK].formStatus;
              a.formProcessing ||
                t()[eK].setStateByKey('formStatus', {
                  ...a,
                  isApproved: i.isApproved,
                  error: i.error || a.error,
                });
            }
            return i;
          },
          fetchStepApprove: async (e, a, r, s, o) => {
            let i;
            let { provider: n } = S.vT.getState();
            if (!n) return (0, S.GS)(t()[eK]);
            t()[eK].setStateByKey('formStatus', {
              ...t()[eK].formStatus,
              formProcessing: !0,
              step: 'APPROVAL',
            }),
              await t().gas.fetchGasInfo(a);
            let { amounts: l, lpToken: d, selected: c } = o;
            if ('token' === c || 'lpToken' === c) {
              let t =
                'token' === c
                  ? B.A.poolWithdraw.withdrawOneCoinApprove
                  : B.A.poolWithdraw.withdrawApprove;
              i = await t(e, n, s, d);
            } else if ('imbalance' === o.selected) {
              let t = B.A.poolWithdraw.withdrawImbalanceApprove;
              i = await t(e, n, s, (0, eg.wj)(l));
            }
            if (i && i.activeKey === t()[eK].activeKey) {
              let n = R()(t()[eK].formStatus);
              return (
                (n.step = ''),
                (n.error = ''),
                i.error
                  ? ((n.error = i.error), t()[eK].setStateByKey('formStatus', n))
                  : ((n.formTypeCompleted = 'APPROVE'),
                    (n.isApproved = !0),
                    t()[eK].setStateByKey('formStatus', n),
                    await t()[eK].fetchEstGasApproval(e, a, r, s, o)),
                i
              );
            }
          },
          fetchStepWithdraw: async (e, a, r, s, o) => {
            let i;
            let { provider: n } = S.vT.getState();
            if (!n) return (0, S.GS)(t()[eK]);
            t()[eK].setStateByKey('formStatus', {
              ...t()[eK].formStatus,
              formProcessing: !0,
              step: 'WITHDRAW',
            }),
              await t().gas.fetchGasInfo(a);
            let { pool: l } = r;
            if ('token' === s.selected) {
              let t = B.A.poolWithdraw.withdrawOneCoin;
              i = await t(e, n, r.pool, s.isWrapped, s.lpToken, s.selectedTokenAddress, o);
            } else if ('lpToken' === s.selected) {
              let t = B.A.poolWithdraw.withdraw;
              i = await t(e, n, l, s.isWrapped, s.lpToken, o);
            } else if ('imbalance' === s.selected) {
              let t = (0, eg.wj)(s.amounts),
                a = B.A.poolWithdraw.withdrawImbalance;
              i = await a(e, n, l, s.isWrapped, t, o);
            }
            if (i && i.activeKey === t()[eK].activeKey) {
              let e = R()(t()[eK].formStatus);
              return (
                (e.formProcessing = !1),
                (e.step = ''),
                (e.error = ''),
                i.error
                  ? ((e.error = i.error), t()[eK].setStateByKey('formStatus', e))
                  : ((e.formTypeCompleted = 'WITHDRAW'),
                    t()[eK].setStateByKeys({ formStatus: e, formValues: eM(s) }),
                    await Promise.all([
                      t().user.fetchUserPoolInfo(a, l.id),
                      t().pools.fetchPoolStats(a, r),
                    ])),
                i
              );
            }
          },
          fetchStepUnstake: async (e, a, r, s) => {
            let { provider: o } = S.vT.getState();
            if (!o) return (0, S.GS)(t()[eK]);
            t()[eK].setStateByKey('formStatus', {
              ...t()[eK].formStatus,
              formProcessing: !0,
              step: 'UNSTAKE',
            }),
              await t().gas.fetchGasInfo(a);
            let { pool: i } = r,
              n = await B.A.poolWithdraw.unstake(e, o, i, s.stakedLpToken);
            if (n.activeKey === t()[eK].activeKey) {
              let e = R()(t()[eK].formStatus);
              return (
                (e.formProcessing = !1),
                (e.step = ''),
                (e.error = ''),
                n.error
                  ? ((e.error = n.error), t()[eK].setStateByKey('formStatus', e))
                  : ((e.formTypeCompleted = 'UNSTAKE'),
                    t()[eK].setStateByKeys({ formStatus: e, formValues: eM(s) }),
                    await Promise.all([
                      t().user.fetchUserPoolInfo(a, i.id),
                      t().pools.fetchPoolStats(a, r),
                    ])),
                n
              );
            }
          },
          fetchStepClaim: async (e, a, r) => {
            let { provider: s } = S.vT.getState();
            if (!s) return (0, S.GS)(t()[eK]);
            t()[eK].setStateByKey('formStatus', {
              ...t()[eK].formStatus,
              formProcessing: !0,
              step: 'CLAIM',
            }),
              await t().gas.fetchGasInfo(a);
            let { pool: o } = r,
              { isClaimCrv: i } = t()[eK].formStatus,
              n = i
                ? await B.A.poolWithdraw.claimCrv(e, s, o)
                : await B.A.poolWithdraw.claimRewards(e, s, o);
            if (n.activeKey === t()[eK].activeKey) {
              let e = R()(t()[eK].formStatus);
              if (
                ((e.formProcessing = !1),
                (e.step = ''),
                (e.isClaimCrv = !1),
                (e.isClaimRewards = !1),
                (e.error = ''),
                n.error)
              )
                (e.error = n.error), t()[eK].setStateByKey('formStatus', e);
              else {
                e.formTypeCompleted = i ? 'CLAIM_CRV' : 'CLAIM_REWARDS';
                let s = t()[eK].formValues;
                t()[eK].setStateByKeys({ formStatus: e, formValues: eM(s) }),
                  await Promise.all([
                    t().user.fetchUserPoolInfo(a, o.id),
                    t().pools.fetchPoolStats(a, r),
                  ]);
              }
              return n;
            }
          },
          setStateByActiveKey: (e, a, r) => {
            Object.keys(t()[eK][e]).length > 30
              ? t().setAppStateByKey(eK, e, { [a]: r })
              : t().setAppStateByActiveKey(eK, e, a, r);
          },
          setStateByKey: (e, a) => {
            t().setAppStateByKey(eK, e, a);
          },
          setStateByKeys: (e) => {
            t().setAppStateByKeys(eK, e);
          },
          resetState: ({ tokens: e, tokenAddresses: a, isWrapped: r }, s) => {
            t().resetAppState(eK, {
              ...eO,
              formType: s || 'WITHDRAW',
              formValues: {
                ...eL.yC,
                isWrapped: r,
                amounts: e.map((e, t) => ({ token: e, tokenAddress: a[t], value: '' })),
              },
            });
          },
        },
      });
      var e$ = a(75689);
      let eW = 'quickSwap',
        eU = {
          activeKey: '',
          formEstGas: {},
          formStatus: e$.kR,
          formValues: e$.yC,
          isMaxLoading: !1,
          routesAndOutput: {},
          tokenList: {},
        };
      function e_(e, { fromAmount: t }, a, r) {
        let { chainId: s = '', signerAddress: o = '' } = e ?? {},
          { fromAddress: i, toAddress: n } = a,
          l = o.slice(0, 10),
          d = i ? i.slice(i.length - 4) : '',
          c = n ? n.slice(n.length - 4) : '';
        return `${s}-${l}-${d}-${c}-${t}-${r}`;
      }
      let ez = (e, t) => ({
        [eW]: {
          ...eU,
          fetchUserBalances: async (e, a, r) => {
            let { userBalancesMapper: s, fetchUserBalancesByTokens: o } = t().userBalances,
              i = [];
            return (
              a && void 0 === s[a] && i.push(a),
              r && void 0 === s[r] && i.push(r),
              i.length > 0 && (await o(e, i)),
              {
                fromAmount: t().userBalances.userBalancesMapper[a] ?? '0',
                toAmount: t().userBalances.userBalancesMapper[r] ?? '0',
              }
            );
          },
          fetchUsdRates: async (e, { fromAddress: a, toAddress: r }) => {
            let s = t().usdRates.usdRatesMapper;
            (void 0 === s[r] || void 0 === s[a]) &&
              (await t().usdRates.fetchUsdRateByTokens(e, [a, r]));
          },
          fetchMaxAmount: async (e, a, r) => {
            let s = t(),
              o = s[eW],
              i = o.activeKey,
              { chainId: n, signerAddress: l } = e,
              { fromAddress: d, toAddress: c } = a,
              p = R()(o.formValues);
            if (l) {
              let l = s.userBalances.userBalancesMapper[d] ?? '0';
              if (((p.fromAmount = l), (i = e_(e, p, a, r)), d.toLowerCase() === eh.m8)) {
                await s.gas.fetchGasInfo(e);
                let { basePlusPriority: r } = t().gas.gasInfo ?? {},
                  u = r?.[0];
                if (void 0 !== u && +l > 0) {
                  o.setStateByKey('isMaxLoading', !0);
                  let t = s.pools.poolsMapper[n];
                  await B.A.router.routesAndOutput(i, e, t, p, a);
                  let r = await B.A.router.estGasApproval(i, e, d, c, l);
                  r.estimatedGas && (p.fromAmount = ew(r.estimatedGas, u, l));
                }
              }
            } else p.fromAmount = '';
            o.setStateByKeys({ activeKey: e_(e, p, a, r), formValues: p, isMaxLoading: !1 });
          },
          fetchRoutesAndOutput: async (e, a, r) => {
            let s = t(),
              o = s[eW],
              i = o.activeKey,
              { chainId: n, signerAddress: l } = e,
              c = R()(o.formValues),
              p = R()(o.formStatus),
              u = s.tokens.tokensNameMapper[n];
            if ((c.isFrom && 0 >= +c.fromAmount) || (!c.isFrom && 0 >= +c.toAmount)) return;
            c.isFrom ? (c.toAmount = '') : (c.fromAmount = ''),
              o.setStateByKey('formValues', R()(c));
            let m = s.pools.poolsMapper[n];
            await (0, d.yy)(100);
            let { exchangeRates: h, ...f } = await B.A.router.routesAndOutput(i, e, m, c, a);
            if (f.activeKey === t()[eW].activeKey) {
              if (f.error) (p.error = f.error), t()[eW].setStateByKey('formStatus', p);
              else {
                c.isFrom ? (c.toAmount = f.toAmount) : (c.fromAmount = f.fromAmount);
                let s = e_(e, c, a, r);
                if (
                  ((p.error = 0 === f.routes.length ? 'error-swap-not-available' : ''),
                  o.setStateByKeys({
                    activeKey: s,
                    formValues: R()(c),
                    formStatus: p,
                    routesAndOutput: {
                      [s]: {
                        ...f,
                        loading: !1,
                        exchangeRates: (function (e, t, a, r) {
                          let s = r[a.fromAddress],
                            o = r[a.toAddress];
                          return [
                            {
                              from: s,
                              to: o,
                              fromAddress: a.fromAddress,
                              value: e[0],
                              label: `${s}/${o}`,
                            },
                            {
                              from: o,
                              to: s,
                              fromAddress: a.toAddress,
                              value: e[1],
                              label: `${o}/${s}`,
                            },
                          ];
                        })(h, 0, a, u),
                        fetchedToAmount: '',
                        modal: (function (
                          {
                            isExchangeRateLow: e,
                            priceImpact: t,
                            toAmount: a,
                            toAmountOutput: r,
                            fromAmount: s,
                            fetchedToAmount: o,
                          },
                          { toAddress: i },
                          n,
                          l
                        ) {
                          let { isHighImpact: d, isExpectedToAmount: c } = (0, eB.Oi)({
                              maxSlippage: n,
                              toAmount: a,
                              priceImpact: t,
                              fetchedToAmount: o,
                            }),
                            p = c ? r : a,
                            u = (0, eB.TM)(d, e),
                            m = l[i] ?? '',
                            h = (+p / +s).toString(),
                            f = { toAmount: p, toToken: m, title: u.title },
                            y = {
                              lowExchangeRate: { ...f, lowExchangeRate: !0, exchangeRate: h },
                              priceImpact: { ...f, priceImpact: !0, value: t },
                              priceImpactLowExchangeRate: {
                                ...f,
                                priceImpactLowExchangeRate: !0,
                                value: t,
                                exchangeRate: h,
                              },
                            };
                          return u.type && u.type in y ? y[u.type] : null;
                        })(f, a, r, u),
                      },
                    },
                  }),
                  !l)
                )
                  return;
                let { fromAmount: i } = await o.fetchUserBalances(e, a.fromAddress, '');
                (c.fromError = +c.fromAmount > +i ? 'too-much' : ''),
                  t()[eW].setStateByKey('formValues', c);
              }
            }
          },
          fetchEstGasApproval: async (e, a) => {
            let r = t()[eW],
              s = r.activeKey,
              { signerAddress: o } = e,
              { fromAmount: i } = r.formValues,
              { fromAddress: n, toAddress: l } = a;
            if (0 >= +i || !o) return;
            let d = await B.A.router.estGasApproval(s, e, n, l, i);
            r.setStateByKey('formEstGas', { [s]: { estimatedGas: d.estimatedGas, loading: !1 } });
            let c = t()[eW].formStatus;
            c.formProcessing ||
              r.setStateByKey('formStatus', {
                ...c,
                isApproved: d.isApproved,
                error: c.error || d.error,
              });
          },
          resetFormErrors: () => {
            let e = t()[eW];
            e.setStateByKeys({
              formStatus: { ...e.formStatus, error: '', swapError: '' },
              formValues: { ...e.formValues, fromError: '' },
            });
          },
          setFormValues: async (e, a, r, s, o, i, n) => {
            let l = t(),
              d = l[eW],
              c = d.formStatus,
              p = d.formValues,
              u = l.userBalances.userBalancesMapper,
              m = R()(
                n
                  ? p
                  : i
                    ? { ...p, isFrom: !0, fromAmount: '', fromError: '', toAmount: '' }
                    : { ...p, ...a, fromError: '' }
              ),
              h = e_(e, m, r, s),
              f = R()(n ? { ...c, swapError: '' } : e$.kR);
            if (
              (t()[eW].setStateByKeys({ activeKey: h, formValues: R()(m), formStatus: R()(f) }),
              !e || !u || !r.fromAddress || !r.toAddress)
            )
              return;
            let { signerAddress: y } = e,
              g = d.routesAndOutput[h];
            g && d.setStateByKey('routesAndOutput', { [h]: { ...g, loading: !0 } }),
              y && (await d.fetchUserBalances(e, r.fromAddress, r.toAddress)),
              o && (await d.fetchMaxAmount(e, r, s)),
              await d.fetchUsdRates(e, r),
              await d.fetchRoutesAndOutput(e, r, s),
              d.fetchEstGasApproval(e, r);
          },
          setPoolListFormValues: (e) => {
            let a = R()(t().poolList.formValues);
            (a.hideSmallPools = e), t().poolList.setStateByKey('formValues', a);
          },
          updateTokenList: async (e, a) => {
            let r = t(),
              s = r[eW];
            if (!e || 0 === Object.keys(a).length) return;
            let { chainId: o } = e,
              i = Object.entries(a)
                .map(([e, t]) => t)
                .filter((e) => !!e)
                .map(({ address: e }) => e);
            s.setStateByActiveKey('tokenList', o.toString(), i),
              await r.userBalances.fetchUserBalancesByTokens(e, i);
            let n = t().userBalances.userBalancesMapper,
              l = Object.keys(n).filter((e) => +(n[e] ?? '0') > 0);
            await r.usdRates.fetchUsdRateByTokens(e, [...l, eh.m8]);
          },
          fetchStepApprove: async (e, a, r, s, o) => {
            let i = t(),
              n = i[eW],
              { provider: l } = S.vT.getState();
            if (!l) return (0, S.GS)(t()[eW]);
            n.setStateByKey('formStatus', {
              ...n.formStatus,
              formProcessing: !0,
              swapError: '',
              step: 'APPROVAL',
            });
            let { fromAmount: d } = r,
              { fromAddress: c } = s;
            await i.gas.fetchGasInfo(a);
            let p = await B.A.router.swapApprove(e, a, l, c, d);
            if (p.activeKey === t()[eW].activeKey) {
              let e = R()(n.formStatus);
              return (
                (e.formProcessing = !1),
                (e.step = ''),
                (e.swapError = ''),
                p.error
                  ? ((e.swapError = p.error), n.setStateByKey('formStatus', e))
                  : ((e.formTypeCompleted = 'APPROVE'),
                    (e.isApproved = !0),
                    n.setStateByKey('formStatus', e),
                    await n.fetchRoutesAndOutput(a, s, o),
                    n.fetchEstGasApproval(a, s)),
                p
              );
            }
          },
          fetchStepSwap: async (e, a, r, s, o) => {
            let i = t(),
              n = i[eW],
              { provider: l } = S.vT.getState();
            if (!l) return (0, S.GS)(t()[eW]);
            t()[eW].setStateByKey('formStatus', {
              ...t()[eW].formStatus,
              formProcessing: !0,
              swapError: '',
              step: 'SWAP',
            });
            let { chainId: d } = a,
              { fromAmount: c } = r,
              { fromAddress: p, toAddress: u } = s;
            await i.gas.fetchGasInfo(a);
            let m = await B.A.router.swap(e, a, l, p, c, u, o);
            if (m.activeKey === t()[eW].activeKey) {
              let e = R()(n.formStatus);
              if (((e.formProcessing = !1), (e.step = ''), (e.swapError = ''), m.error))
                (e.swapError = m.error), n.setStateByKey('formStatus', e);
              else {
                e.formTypeCompleted = 'SWAP';
                let n = R()(r);
                (n.fromAmount = ''),
                  (n.toAmount = ''),
                  t()[eW].setStateByKeys({
                    activeKey: e_(a, n, s, o),
                    formEstGas: {},
                    formValues: R()(n),
                    formStatus: e,
                    routesAndOutput: {},
                  }),
                  i.storeCache.setStateByActiveKey('routerFormValues', d.toString(), {
                    fromAddress: p,
                    toAddress: u,
                  }),
                  i.userBalances.fetchUserBalancesByTokens(a, [p, u]);
              }
              return m;
            }
          },
          setStateByActiveKey: (e, a, r) => {
            Object.keys(t()[eW][e]).length > 30
              ? t().setAppStateByKey(eW, e, { [a]: r })
              : t().setAppStateByActiveKey(eW, e, a, r);
          },
          setStateByKey: (e, a) => {
            t().setAppStateByKey(eW, e, a);
          },
          setStateByKeys: (e) => {
            t().setAppStateByKeys(eW, e);
          },
          resetState: () => {
            t().resetAppState(eW, { ...eU, formValues: { ...t()[eW].formValues, fromError: '' } });
          },
        },
      });
      var eH = a(57837);
      let eZ = 'usdRates',
        eq = { usdRatesMapper: {}, loading: !0 },
        eY = (e, t) => ({
          [eZ]: {
            ...eq,
            fetchUsdRateByToken: async (e, a) => {
              if (e) return (await t()[eZ].fetchUsdRateByTokens(e, [a], !0))[a];
            },
            fetchUsdRateByTokens: async (e, a, r) => {
              let s = t()[eZ],
                o = s.usdRatesMapper;
              if (!e) return o;
              let i = r ? a : a.filter((e) => void 0 === o[e]);
              if (i.length > 0) {
                s.setStateByKey('loading', !0);
                let t = await B.A.helpers.fetchUsdRates(e, i);
                s.setStateByKeys({ usdRatesMapper: { ...o, ...t }, loading: !1 });
              }
              return t()[eZ].usdRatesMapper;
            },
            fetchAllStoredUsdRates: async (e) => {
              let a = Object.keys(t().usdRates.usdRatesMapper);
              await t().usdRates.fetchUsdRateByTokens(e, a, !0);
            },
            setStateByActiveKey: (e, a, r) => {
              t().setAppStateByActiveKey(eZ, e, a, r);
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey(eZ, e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys(eZ, e);
            },
            resetState: () => {
              t().resetAppState(eZ, R()(eq));
            },
          },
        }),
        eX = 'userBalances',
        eQ = { userBalancesMapper: {}, loading: !1 },
        eJ = (e, t) => ({
          [eX]: {
            ...eQ,
            fetchUserBalancesByTokens: async (e, a) => {
              let r = t(),
                s = r[eX],
                {
                  networks: { networks: o },
                } = r,
                i = s.userBalancesMapper,
                { chainId: n } = e,
                { excludeTokensBalancesMapper: l } = o[n],
                d = a.filter((e) => !l[e]);
              s.setStateByKey('loading', !0);
              let c = await B.A.wallet.fetchUserBalances(e, d);
              return (
                s.setStateByKeys({ userBalancesMapper: { ...i, ...c }, loading: !1 }),
                t()[eX].userBalancesMapper
              );
            },
            fetchAllStoredBalances: async (e) => {
              let a = Object.keys(t().userBalances.userBalancesMapper);
              await t().userBalances.fetchUserBalancesByTokens(e, a);
            },
            updateUserBalancesFromPool: ({ gauge: e, lpToken: a, ...r }) => {
              t().userBalances.setStateByKey('loading', !0);
              let s = {};
              for (let e in r) s[e] = r[e];
              t().userBalances.setStateByKeys({
                userBalancesMapper: R()(
                  (function (e, t) {
                    let a = R()(t);
                    for (let t in e) a[t] = e[t];
                    return a;
                  })(s, t().userBalances.userBalancesMapper)
                ),
                loading: !1,
              });
            },
            setStateByActiveKey: (e, a, r) => {
              t().setAppStateByActiveKey(eX, e, a, r);
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey(eX, e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys(eX, e);
            },
            resetState: () => {
              t().resetAppState(eX, eQ);
            },
          },
        }),
        e0 = {
          name: 'curve-app-store-cache',
          partialize: ({ storeCache: e }) => ({ storeCache: e }),
          merge: i(),
          storage: {
            getItem: (e) => JSON.parse(localStorage.getItem(e)),
            setItem: s()((e, t) => {
              let a = JSON.stringify(t);
              return a.length > 2621440
                ? (console.warn(`Cache item ${e} is too big (${a.length} bytes), removing it.`),
                  localStorage.removeItem(e))
                : localStorage.setItem(e, a);
            }, 1e3),
            removeItem: (e) => localStorage.removeItem(e),
          },
          version: 19,
        },
        e1 = (0, n.vt)(
          (0, l.Zr)(
            (e, t) => ({
              ...$(e, t),
              ...em(e, t),
              ...L(e, t),
              ...h(e, t),
              ...(0, eC.Ay)(e, t),
              ...(0, eP.Ay)(e, t),
              ...ek(e, t),
              ...eV(e, t),
              ...eF(e, t),
              ...(0, eA.Ay)(e, t),
              ...(0, v.Ay)(e, t),
              ...ez(e, t),
              ...eJ(e, t),
              ...(0, eH.Ay)(e, t),
              ...eY(e, t),
              ...er(e, t),
              ...(0, b.A)(e, t),
              ...q(e, t),
              ...j(e, t),
              ...x(e, t),
            }),
            e0
          )
        );
    },
    30163: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => p });
      var r = a(54568),
        s = a(48341),
        o = a(64387),
        i = a(60171),
        n = a(23173),
        l = a(77241),
        d = a(36074);
      let c = (0, s.Ay)(i.A).withConfig({ componentId: 'sc-139ef9fa-0' })([
          'align-items:flex-start;',
        ]),
        p = ({ exchangeRates: e, loading: t, ...a }) =>
          (0, r.jsx)(c, {
            ...a,
            label: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, d.t)`Exchange rate`,
                ' ',
                (0, r.jsx)(n.A, { size: 'xs', children: (0, d.t)`(incl. fees):` }),
              ],
            }),
            loading: t,
            loadingSkeleton: [150, 38],
            children:
              Array.isArray(e) && e.length > 0
                ? (0, r.jsx)(o.A, {
                    grid: !0,
                    children: e.map(({ from: e, to: t, value: a, label: s }) =>
                      (0, r.jsxs)(
                        o.A,
                        {
                          children: [
                            (0, r.jsx)(n.A, {
                              size: 'xs',
                              fontVariantNumeric: 'tabular-nums',
                              opacity: 0.7,
                              children: s,
                            }),
                            '\xa0\xa0',
                            (0, r.jsx)(n.A, {
                              isBold: !0,
                              noWrap: !0,
                              size: 'md',
                              tooltip: `${(0, l.ZV)(1)} ${e} = ${(0, l.ZV)(a, { showAllFractionDigits: !0 })} ${t}`,
                              tooltipProps: { placement: 'bottom end', noWrap: !0 },
                              children: (0, l.ZV)(a, { ...(0, l.Ho)(a, 5) }),
                            }),
                          ],
                        },
                        s
                      )
                    ),
                  })
                : '-',
          });
    },
    31305: (e, t, a) => {
      'use strict';
      a.d(t, { Yn: () => i, iW: () => n, ro: () => l });
      var r = a(62942),
        s = a(28822),
        o = a(21802);
      let i = ({ network: e }, t) => (0, o.PE)('dex', e, t),
        n = (e) => (0, s.A)((t) => t.networks.networksIdMapper[e]),
        l = () => r.usePathname()?.substring(1).split('/').slice(2).join('/');
    },
    39418: (e, t, a) => {
      'use strict';
      a.d(t, {
        CM: () => m,
        Cx: () => n,
        PA: () => w,
        _k: () => g,
        dH: () => o,
        hq: () => h,
        hz: () => l,
        kU: () => A,
        ob: () => d,
        ow: () => p,
        uw: () => y,
        vD: () => i,
        vP: () => c,
        v_: () => u,
      });
      var r = a(37653),
        s = a(36074);
      let o = 'Cryptoswap',
        i = 'Stableswap',
        n = 'tokenA',
        l = 'tokenB',
        d = 'tokenC',
        c = 'tokenD',
        p = 'tokenE',
        u = 'tokenF',
        m = 'tokenG',
        h = 'tokenH',
        f = {
          stableSwapFee: '',
          stableA: '',
          maExpTime: '',
          offpegFeeMultiplier: '',
          midFee: '',
          outFee: '',
          cryptoA: '',
          gamma: '',
          allowedExtraProfit: '',
          feeGamma: '',
          adjustmentStep: '',
          maHalfTime: '',
        },
        y = {
          0: {
            name: 'Fiat Redeemable Stablecoins',
            descriptionName: (0, s.t)`Fiat Redeemable Stablecoins`,
            description: (0, s.t)`Suitable for stablecoins that are fiat-redeemable`,
            defaultParams: {
              ...f,
              stableSwapFee: '0.01',
              stableA: '1000',
              maExpTime: '600',
              offpegFeeMultiplier: '10',
            },
          },
          1: {
            name: 'Crypto Collateralized Stablecoins',
            descriptionName: (0, s.t)`Crypto Collateralized Stablecoins`,
            description: (0, s.t)`Suitable for stablecoins that are crypto-backed`,
            defaultParams: {
              ...f,
              stableSwapFee: '0.04',
              stableA: '100',
              maExpTime: '600',
              offpegFeeMultiplier: '20',
            },
          },
          2: {
            name: 'Liquid Restaking Tokens',
            descriptionName: (0, s.t)`Liquid Restaking Tokens`,
            description: (0, s.t)`Suitable for LRTs`,
            defaultParams: {
              ...f,
              stableSwapFee: '0.01',
              stableA: '500',
              maExpTime: '600',
              offpegFeeMultiplier: '10',
            },
          },
          3: {
            name: 'Crypto',
            descriptionName: (0, s.t)`Crypto`,
            description: (0, s.t)`Suitable for most volatile pairs such as LDO <> ETH`,
            defaultParams: {
              ...f,
              midFee: '0.26',
              outFee: '0.45',
              cryptoA: '400000',
              gamma: '0.000145',
              allowedExtraProfit: '0.000002',
              feeGamma: '0.00023',
              adjustmentStep: '0.000146',
              maHalfTime: '600',
            },
          },
          4: {
            name: 'Forex',
            descriptionName: (0, s.t)`Forex`,
            description: (0, s.t)`Suitable for forex pairs with low relative volatility`,
            defaultParams: {
              ...f,
              midFee: '0.05',
              outFee: '0.45',
              cryptoA: '20000000',
              gamma: '0.001',
              allowedExtraProfit: '0.00000001',
              feeGamma: '0.005',
              adjustmentStep: '0.0000055',
              maHalfTime: '600',
            },
          },
          5: {
            name: 'Liquid Staking Derivatives',
            descriptionName: (0, s.t)`Liquid Staking Derivatives`,
            description: (0,
            s.t)`Suitable for liquid staking derivatives soft-pegged to its underlying asset.`,
            defaultParams: {
              ...f,
              midFee: '0.03',
              outFee: '0.45',
              cryptoA: '40000000',
              gamma: '0.002',
              allowedExtraProfit: '0.00000001',
              feeGamma: '0.3',
              adjustmentStep: '0.0000055',
              maHalfTime: '600',
            },
          },
          6: {
            name: 'Liquid Restaking Tokens',
            descriptionName: (0, s.t)`Liquid Restaking Tokens`,
            description: (0, s.t)`Suitable for LRTs`,
            defaultParams: {
              ...f,
              midFee: '0.005',
              outFee: '0.08',
              cryptoA: '20000000',
              gamma: '0.02',
              allowedExtraProfit: '0.00000001',
              feeGamma: '0.03',
              adjustmentStep: '0.0000055',
              maHalfTime: '600',
            },
          },
          7: {
            name: 'Tricrypto',
            descriptionName: (0, s.t)`Tricrypto`,
            description: (0, s.t)`Suitable for USD stablecoin <> BTC stablecoin <> ETH.`,
            defaultParams: {
              ...f,
              midFee: '0.01',
              outFee: '1.4',
              cryptoA: '540000',
              gamma: '0.0000805',
              allowedExtraProfit: '0.0000000001',
              feeGamma: '0.0004',
              adjustmentStep: '0.0000001',
              maHalfTime: '600',
            },
          },
          8: {
            name: 'Three Coin Volatile',
            descriptionName: (0, s.t)`Three Coin Volatile`,
            description: (0,
            s.t)`Suitable for volatile tokens paired against ETH and USD stablecoins`,
            defaultParams: {
              ...f,
              midFee: '0.02999999',
              outFee: '0.8',
              cryptoA: '2700000',
              gamma: '0.0000013',
              allowedExtraProfit: '0.0000001',
              feeGamma: '0.00035',
              adjustmentStep: '0.0000001',
              maHalfTime: '600',
            },
          },
        },
        g = (e) => ({
          swapFee: { min: 0, max: 1 },
          a: { min: 1, max: 2e4 },
          maExpTime: { min: 60, max: 3600 },
          offpegFeeMultiplier: {
            min: 0,
            max:
              0 === e
                ? 0
                : new r.A(5)
                    .multipliedBy(new r.A(10).pow(19))
                    .dividedBy(new r.A(e).multipliedBy(new r.A(10).pow(10)))
                    .dividedBy(new r.A(10).pow(10))
                    .toNumber(),
          },
          initialPrice: { min: 1e-12, max: 1e12 },
        }),
        A = {
          midFee: { min: 0.005, max: 3 },
          outFee: { max: 3 },
          a: { min: 4e3, max: 4e8 },
          gamma: { min: 1e-8, max: (5 * 1e16) / 1e18 },
          allowedExtraProfit: { min: 0, max: 0.01 },
          feeGamma: { min: 0, max: 1 },
          adjustmentStep: { min: 0, max: 1 },
          maHalfTime: { min: 60, max: 604800 },
        },
        w = {
          midFee: { min: 0.005, max: 3 },
          outFee: { max: 3 },
          a: { min: 4e3, max: 4e7 },
          gamma: { min: 1e-8, max: (199 * 1e15) / 1e18 },
          allowedExtraProfit: { min: 0, max: 0.01 },
          feeGamma: { min: 0, max: 1 },
          adjustmentStep: { min: 0, max: 1 },
          maHalfTime: { min: 60, max: 604800 },
        };
    },
    39904: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => c });
      var r = a(54568),
        s = a(48341),
        o = a(56457),
        i = a(23173),
        n = a(77241),
        l = a(36074);
      let d = (0, s.Ay)(i.A).withConfig({ componentId: 'sc-429da63d-0' })([
          'color:var(--danger-400);',
        ]),
        c = ({ isBold: e, showIcon: t }) =>
          (0, r.jsxs)(d, {
            size: 'md',
            isBold: e,
            tooltip: (0, l.t)`This is a volatile number that will very likely not persist.`,
            tooltipProps: { textAlign: 'left', minWidth: '250px' },
            children: [
              (0, n.ZV)(5e3),
              '+% ',
              t &&
                (0, r.jsx)(o.A, { className: 'svg-tooltip', size: 16, name: 'InformationSquare' }),
            ],
          });
    },
    40734: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => m });
      var r = a(54568),
        s = a(48341),
        o = a(60171),
        i = a(56457),
        n = a(49698),
        l = a(77241),
        d = a(85806),
        c = a(75911),
        p = a(36074);
      let u = (0, s.Ay)(o.A).withConfig({ componentId: 'sc-c1d5becb-0' })([
          'button{align-items:center;display:inline-flex;min-height:1rem;padding:0;font-family:var(--font);font-weight:400;font-size:var(--font-size-2);}',
        ]),
        m = ({ maxSlippage: e, stateKey: t, customLabel: a }) => {
          let s = (0, c.nv)((e) => e.setMaxSlippage);
          return (0, r.jsx)(u, {
            label: a || (0, p.t)`Slippage tolerance:`,
            children: (0, r.jsx)(d.n, {
              maxSlippage: e,
              button: ({ onClick: t }) =>
                (0, r.jsxs)(n.A, {
                  onClick: t,
                  children: [
                    (0, l.ZV)(e, {
                      style: 'percent',
                      showAllFractionDigits: !0,
                      defaultValue: '-',
                    }),
                    ' ',
                    (0, r.jsx)(i.A, { name: 'Settings', size: 16 }),
                  ],
                }),
              onSave: (e) => s(e, t),
            }),
          });
        };
    },
    40918: (e, t, a) => {
      'use strict';
      a.d(t, { S: () => _ });
      var r = a(54568),
        s = a(63797),
        o = a(33431),
        i = a(42822),
        n = a(36074),
        l = a(34202);
      a(65209);
      var d = a(84032),
        c = a(31184);
      let { Spacing: p } = d.B,
        u = () => (0, r.jsx)(c.A, { gap: p.md, children: 'Token list management will go here' });
      var m = a(45376),
        h = a.n(m),
        f = a(7620),
        y = a(6572),
        g = a(24388),
        A = a(2926),
        w = a(44876),
        x = a(56120),
        b = a(12312),
        v = a(99825),
        S = a(76653),
        k = a(97912),
        C = a(23779),
        P = a(38071);
      let { Spacing: j } = d.B,
        T = ({ error: e }) =>
          (0, r.jsxs)(g.A, {
            variant: 'filled',
            severity: 'error',
            action: (0, r.jsx)(x.A, {
              color: 'ghost',
              size: 'extraSmall',
              onClick: () => (0, P.lW)(e),
              children: 'Copy',
            }),
            sx: {
              position: 'relative',
              '& .MuiAlert-action': { position: 'absolute', right: j.xs, padding: 0, margin: 0 },
            },
            children: [
              (0, r.jsx)(A.A, { children: (0, n.t)`Could not create token list` }),
              (0, r.jsx)(w.A, { sx: { wordWrap: 'break-word' }, children: (0, n.t)`${e}` }),
            ],
          });
      var I = a(59934),
        R = a(87401),
        B = a(3717);
      let { Spacing: E } = d.B,
        G = ({ tokens: e, onToken: t }) =>
          (0, r.jsxs)(c.A, {
            gap: E.xs,
            sx: { paddingBlock: E.xs },
            children: [
              (0, r.jsx)(R.A, { variant: 'headingXsBold', children: (0, n.t)`Favorite tokens` }),
              (0, r.jsx)(c.A, {
                direction: 'row',
                gap: E.xs,
                flexWrap: 'wrap',
                children: e.map((e) =>
                  (0, r.jsx)(
                    I.A,
                    {
                      size: 'small',
                      icon: (0, r.jsx)(B.x, {
                        blockchainId: e.chain,
                        tooltip: e.symbol,
                        address: e.address,
                        size: 'mui-md',
                      }),
                      clickable: !0,
                      label: e.symbol,
                      onClick: () => t(e),
                    },
                    e.address
                  )
                ),
              }),
            ],
          });
      var D = a(62082),
        F = a(77241),
        L = a(17902),
        K = a(72415);
      let { IconSize: O } = d.B,
        N = ({
          chain: e,
          symbol: t,
          label: a,
          address: s,
          balance: o,
          tokenPrice: i,
          disabled: n,
          onToken: l,
        }) => {
          let d = +(o ?? '0') > 0,
            p = d && (i ?? 0) > 0,
            u = (0, f.useRef)(null);
          return (0, r.jsx)(L.O, {
            hoverEl: u.current,
            children: (0, r.jsxs)(D.A, {
              ref: u,
              onClick: n ? void 0 : l,
              tabIndex: 0,
              sx: {
                minHeight: O.xxl,
                '&': { transition: `background-color ${K.Uw}` },
                ...(n && { cursor: 'not-allowed' }),
              },
              children: [
                (0, r.jsx)(B.x, {
                  blockchainId: e,
                  address: s,
                  size: 'xl',
                  sx: { ...(n && { filter: 'saturate(0)' }) },
                }),
                (0, r.jsxs)(c.A, {
                  flexGrow: 1,
                  children: [
                    (0, r.jsx)(R.A, {
                      variant: 'bodyMBold',
                      color: n ? 'textDisabled' : 'textPrimary',
                      children: t,
                    }),
                    (0, r.jsx)(R.A, {
                      variant: 'bodyXsRegular',
                      color: n ? 'textDisabled' : 'textSecondary',
                      children: a,
                    }),
                  ],
                }),
                (0, r.jsxs)(c.A, {
                  direction: 'column',
                  alignItems: 'end',
                  children: [
                    d &&
                      (0, r.jsx)(R.A, {
                        variant: 'bodyMBold',
                        color: n ? 'textDisabled' : 'textPrimary',
                        children: (0, F.ZV)(o),
                      }),
                    p &&
                      (0, r.jsx)(R.A, {
                        variant: 'bodyXsRegular',
                        color: n ? 'textDisabled' : 'textSecondary',
                        children: (0, F.ZV)(i * +o, F.hd.USD),
                      }),
                    !p &&
                      (0, r.jsx)(R.A, {
                        variant: 'bodyXsRegular',
                        color: n ? 'textDisabled' : 'textTertiary',
                        children: (0, P.Wr)(s),
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        { Spacing: M, ButtonSize: V } = d.B,
        $ = ({
          title: e,
          showAllLabel: t,
          preview: a,
          tokens: s,
          balances: o,
          tokenPrices: i,
          disabledTokens: l,
          onToken: d,
          onShowAll: c,
        }) => {
          if (!s.length) return null;
          let p = 0 === a.length ? s : a,
            u = a.length > 0 && a.length < s.length;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              e &&
                (0, r.jsxs)(w.A, {
                  sx: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: (e) => e.palette.background.paper,
                  },
                  children: [(0, r.jsx)(b.A, { title: e, size: 'small' }), (0, r.jsx)(v.A, {})],
                }),
              (0, r.jsxs)(S.A, {
                variant: 'menu',
                sx: { paddingBlock: 0 },
                children: [
                  p.map((e) =>
                    (0, r.jsx)(
                      N,
                      {
                        ...e,
                        balance: o[e.address],
                        tokenPrice: i[e.address],
                        disabled: l.includes(e.address),
                        onToken: () => d(e),
                      },
                      e.address
                    )
                  ),
                  u &&
                    (0, r.jsx)(x.A, {
                      fullWidth: !0,
                      variant: 'link',
                      color: 'ghost',
                      size: 'medium',
                      endIcon: (0, r.jsx)(y.A, {}),
                      onClick: c,
                      sx: { height: `${V.md} !important` },
                      children: t || (0, n.t)`Show more`,
                    }),
                ],
              }),
            ],
          });
        },
        W = ({
          tokens: e,
          favorites: t,
          balances: a,
          tokenPrices: s,
          showSearch: o,
          error: i,
          disabledTokens: l,
          disableSorting: d,
          disableMyTokens: p,
          customOptions: u,
          onToken: m,
          onSearch: y,
        }) => {
          let [w, x] = (0, f.useState)(''),
            [b, S] = (0, f.useState)(!0),
            [P, j] = (0, f.useState)(!0),
            I = t.length > 0 && !w,
            R = (0, f.useMemo)(() => {
              if (!w) return e;
              let { addressesResult: t, tokensResult: a } = (0, C.Xs)(w, e, ['symbol'], {
                tokens: ['address'],
                other: [],
              });
              return h()([...a, ...t], (e) => e.item.address).map((e) => e.item);
            }, [e, w]),
            B = (0, f.useMemo)(() => {
              if (p) return [];
              let e = R.filter((e) => +(a[e.address] ?? 0) > 0);
              return (
                d ||
                  e.sort((e, t) => {
                    let r = +(a[e.address] ?? 0),
                      o = +(a[t.address] ?? 0),
                      i = (s[e.address] ?? 0) * r;
                    return (s[t.address] ?? 0) * o - i || o - r;
                  }),
                e
              );
            }, [p, R, d, a, s]),
            E = (0, f.useMemo)(() => {
              if (!b) return [];
              let e = 0.01 * B.reduce((e, t) => e + +(a[t.address] ?? 0) * (s[t.address] ?? 0), 0);
              return B.filter((t) => +(a[t.address] ?? 0) * (s[t.address] ?? 0) > e);
            }, [B, a, s, b]),
            D = (0, f.useMemo)(() => {
              let e = p ? R : R.filter((e) => 0 == +(a[e.address] ?? 0)),
                t = b ? B.filter((e) => !E.some((t) => t.address === e.address)) : [];
              return (
                e.push(...t),
                d ||
                  e.sort(
                    (e, t) => (t.volume ?? 0) - (e.volume ?? 0) || e.symbol.localeCompare(t.symbol)
                  ),
                e
              );
            }, [p, R, b, B, d, a, E]),
            F = (0, f.useMemo)(() => (P ? D.slice(0, 300) : []), [D, P]);
          return (0, r.jsxs)(c.A, {
            gap: M.sm,
            sx: { overflowY: 'auto' },
            children: [
              o &&
                (0, r.jsx)(k.L, {
                  name: 'tokenName',
                  onSearch: (e) => {
                    x(e), y(e);
                  },
                }),
              I && (0, r.jsx)(G, { tokens: t, onToken: m }),
              I && u && (0, r.jsx)(v.A, {}),
              u,
              i
                ? (0, r.jsx)(T, { error: i })
                : B.length + D.length === 0
                  ? (0, r.jsx)(g.A, {
                      variant: 'filled',
                      severity: 'info',
                      children: (0, r.jsx)(A.A, { children: (0, n.t)`No tokens found` }),
                    })
                  : (0, r.jsxs)(c.A, {
                      sx: { overflowY: 'auto' },
                      children: [
                        (0, r.jsx)($, {
                          title: (0, n.t)`My tokens`,
                          tokens: B,
                          balances: a,
                          tokenPrices: s,
                          disabledTokens: l,
                          preview: E,
                          showAllLabel: (0, n.t)`Show dust`,
                          onShowAll: () => S(!1),
                          onToken: m,
                        }),
                        (0, r.jsx)($, {
                          title: B.length > 0 ? (0, n.t)`Tokens by 24h volume` : void 0,
                          tokens: D,
                          balances: a,
                          tokenPrices: s,
                          disabledTokens: l,
                          preview: F,
                          onShowAll: () => j(!1),
                          onToken: m,
                        }),
                      ],
                    }),
            ],
          });
        },
        { MaxHeight: U } = d.B,
        _ = ({ isOpen: e, showManageList: t, compact: a, onClose: d, ...c }) => {
          let [p, m, h] = (0, i.K)();
          return (0, r.jsx)(l.y, {
            open: e,
            onClose: d,
            title: p ? (0, n.t)`Manage Token List` : (0, n.t)`Select Token`,
            titleAction:
              p &&
              (0, r.jsx)(o.A, { onClick: h, size: 'extraSmall', children: (0, r.jsx)(s.A, {}) }),
            footer: !1,
            sx: {
              '& .MuiPaper-root:not(.MuiAlert-root)': {
                overflowY: 'hidden',
                maxHeight: U.tokenSelector,
                height: 'auto',
                minHeight: a ? 'auto' : U.tokenSelector,
              },
            },
            children: p ? (0, r.jsx)(u, {}) : (0, r.jsx)(W, { ...c }),
          });
        };
    },
    45899: (e, t, a) => {
      'use strict';
      a.d(t, { C$: () => r, D9: () => s, KZ: () => n, vD: () => i, wb: () => o });
      let r = 'Two Coin Cryptoswap (Old)',
        s = 'Two Coin Cryptoswap',
        o = 'Three Coin Cryptoswap',
        i = 'Stableswap',
        n = 'Stableswap (Old)';
    },
    45949: (e, t, a) => {
      'use strict';
      a.d(t, { Hb: () => rA, QC: () => rw, Ay: () => rR });
      var r = a(54568),
        s = a(62942),
        o = a(7620),
        i = a(48341),
        n = a(72131),
        l = a(11988),
        d = a(36074);
      let c = i.Ay.div.withConfig({ componentId: 'sc-8bd18a34-0' })([
          'margin:0 0 var(--spacing-2) 0;',
        ]),
        p = ({ address: e }) => {
          let t = (0, l.A)()[e];
          if (!t) return null;
          let a = t && t.some((e) => e.tags.includes('points'));
          return (0, r.jsx)(c, {
            children: (0, r.jsx)(n.A, {
              campaignRewardsPool: t,
              message: a
                ? (0, d.t)`Liquidity providers in this pool also earn points!`
                : (0, d.t)`Liquidity providers in this pool also earn additional tokens!`,
            }),
          });
        };
      var u = a(50722),
        m = a(23557),
        h = a(27572),
        f = a(60171),
        y = a(19115),
        g = a(77241);
      let A = ({ formLpTokenExpected: e, maxSlippage: t, poolDataCacheOrApi: a }) => {
        let { referenceAsset: s } = a.pool,
          i = 'CRYPTO' !== s,
          n = `${(0, g.ZV)(e.virtualPrice)} ${s}`,
          l = (0, o.useMemo)(() => {
            let a = Number(e.expected),
              r = Number(t);
            if (a && r) return (a * (100 - r)) / 100;
          }, [e.expected, t]);
        return (0, r.jsx)(f.A, {
          isBold: !0,
          loading: e.loading,
          loadingSkeleton: [85, 23],
          className: e.expected.length > 20 ? 'isRow' : '',
          label: (0, d.t)`Minimum LP Tokens:`,
          tooltip: i
            ? (0, r.jsxs)(y.A, {
                placement: 'top end',
                noWrap: !0,
                children: [(0, g.ZV)(1), ' LP token = ', n],
              })
            : '',
          children: (0, g.ZV)(l),
        });
      };
      var w = a(46205);
      let x = ({ loading: e, isHighSlippage: t, isBonus: a, slippage: s }) => {
        let {
          isBold: i,
          label: n,
          tip: l,
          variant: c,
        } = (0, o.useMemo)(() => {
          let e = { isBold: !1, label: (0, d.t)`Slippage`, tip: '', variant: '' };
          return (
            t
              ? ((e.variant = 'warning'),
                (e.isBold = !0),
                (e.label = (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(d.x, { children: 'Slippage Loss' }),
                    ' ',
                    (0, r.jsx)(w.v, { isNotBold: !0, size: 'xs', children: '(incl. pricing):' }),
                  ],
                })),
                (e.tip = (0,
                d.t)`Slippage comes from depositing too many coins not in balance, and current coin prices are additionally accounted for`))
              : a &&
                ((e.variant = 'success'),
                (e.isBold = !0),
                (e.label = (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(d.x, { children: 'Slippage Bonus' }),
                    ' ',
                    (0, r.jsx)(w.v, { isNotBold: !0, size: 'xs', children: '(incl. pricing):' }),
                  ],
                })),
                (e.tip = (0,
                d.t)`Bonus comes as an advantage from current coin prices which usually appears for coins which are low in balance`)),
            e
          );
        }, [a, t]);
        return (0, r.jsx)(f.A, {
          isBold: i,
          loading: e,
          loadingSkeleton: [50, 23],
          variant: c,
          label: n,
          tooltip: l ? (0, r.jsx)(y.A, { placement: 'top end', children: l }) : null,
          children: (0, g.ZV)(s, {
            style: 'percent',
            maximumFractionDigits: 4,
            trailingZeroDisplay: 'stripIfInteger',
            defaultValue: '-',
          }),
        });
      };
      var b = a(40734),
        v = a(61615),
        S = a(77540);
      let k = i.Ay.ul.withConfig({ componentId: 'sc-16f699f1-0' })([
          'margin-top:var(--spacing-2);',
        ]),
        C = i.Ay.li.withConfig({ componentId: 'sc-16f699f1-1' })([
          'list-style:disc;margin-left:var(--spacing-normal);margin-bottom:var(--spacing-1);',
        ]),
        P = ({ seed: e, poolData: t }) => {
          let [a, s] = (0, o.useState)([]),
            { isSeed: i, loaded: n } = e,
            l = (0, o.useCallback)(async (e) => {
              try {
                let { pool: t, hasWrapped: a } = e,
                  r = a ? t.wrappedCoins : t.underlyingCoins,
                  o = await t.getSeedAmounts('1', !a);
                s(r.map((e, t) => `${(0, g.ZV)(o[t], { showAllFractionDigits: !0 })} ${e}`));
              } catch (e) {
                console.error(e);
              }
            }, []);
          (0, o.useEffect)(() => {
            t && n && i && l(t);
          }, [t?.pool?.id, n, i]);
          let c = a.length;
          return (0, r.jsx)(r.Fragment, {
            children:
              i &&
              c > 0 &&
              (0, r.jsx)(S.A, {
                alertType: 'error',
                children: (0, r.jsxs)('div', {
                  children: [
                    (0, r.jsxs)('p', {
                      children: [
                        2 === c &&
                          (0,
                          d.t)`This pool is empty. Assuming you are adding ${a[0]}, the equivalent amount of the other token should be ${a[1]}.`,
                        2 !== c &&
                          (0,
                          d.t)`This pool is empty. Assuming you are adding ${a[0]}, the equivalent amounts of the other tokens should be:`,
                      ],
                    }),
                    2 !== c &&
                      (0, r.jsx)(k, {
                        children: a.map((e, t) =>
                          0 === t ? null : (0, r.jsx)(C, { children: e }, e)
                        ),
                      }),
                  ],
                }),
              }),
          });
        };
      var j = a(28822),
        T = a(88411);
      let I = () => {
        let { wallet: e } = T.vT.getState();
        return { data: e?.account?.address };
      };
      var R = a(70184),
        B = a(84017);
      let E = ({
        children: e,
        seed: t,
        loading: a,
        poolData: s,
        routerParams: o,
        userPoolBalances: i,
      }) => {
        let { data: n } = I(),
          { rChainId: l, rPoolId: c } = o,
          p = (0, R.A)(s?.tokenAddressesAll ?? []),
          { connectState: u } = (0, T.w5)(),
          m = (0, j.A)((e) => e.pools.currencyReserves[(0, B.We)(l, c)]),
          h = (0, j.A)((e) => e.user.walletBalancesLoading),
          f = a || void 0 === s || void 0 === m || (0, T.VP)(u) || !t.loaded;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p && !p.isInformationOnly
              ? (0, r.jsx)(S.A, { alertType: p.alertType, children: p.message })
              : null,
            (0, r.jsx)(P, { seed: t, poolData: s }),
            n &&
              !f &&
              !h &&
              void 0 === i &&
              (0, r.jsx)(S.A, {
                alertType: 'error',
                children: (0, d.t)`Unable to get wallet balances`,
              }),
            (0, r.jsx)(v.A, { loading: f, children: e }),
          ],
        });
      };
      var G = a(72782),
        D = a(37653),
        F = a(99123),
        L = a.n(F),
        K = a(90819),
        O = a.n(K),
        N = a(81981),
        M = a(64387),
        V = a(58387),
        $ = a(3717),
        W = a(38071);
      let U = ({
        idx: e,
        amount: t,
        disableMaxButton: a,
        balance: s,
        balanceLoading: o,
        disableInput: i,
        haveSameTokenName: n,
        hideMaxButton: l = !1,
        hasError: c,
        haveSigner: p,
        blockchainId: u,
        isWithdraw: m = !1,
        isMaxLoading: h,
        token: f,
        tokenAddress: y,
        handleAmountChange: g,
        handleMaxClick: A,
      }) => {
        let w = !m && y.toLowerCase() === N.m8,
          x = p && !m;
        return (0, r.jsxs)(V.Ay, {
          grid: !0,
          gridTemplateColumns: l ? '1fr auto' : '1fr auto auto',
          padding: 'var(--spacing-1) var(--spacing-2)',
          id: f,
          disabled: i,
          inputVariant: c ? 'error' : void 0,
          children: [
            (0, r.jsx)(V.E5, {
              id: `input-${f}-amount`,
              autoComplete: 'off',
              type: 'number',
              value: void 0 === t ? '' : t,
              labelProps: {
                label: `${(0, B.G_)(f)} ${n ? (0, W.Wr)(y) : ''} ${x ? `${(0, d.t)`Avail.`} ` : ''}`,
                descriptionLoading: x && o,
                description: x ? s : '',
              },
              onChange: (t) => g(t, e),
            }),
            !l && (0, r.jsx)(V.xI, { isNetworkToken: w, loading: h, disabled: a, onClick: A }),
            (0, r.jsx)(M.A, {
              flex: !0,
              flexAlignItems: 'center',
              children: (0, r.jsx)($.x, { blockchainId: u, tooltip: f, address: y }),
            }),
          ],
        });
      };
      var _ = a(43200),
        z = a(84611);
      (0, i.Ay)(_.A).withConfig({ componentId: 'sc-ad2e3ae9-0' })([
        'justify-content:flex-start;margin-top:var(--spacing-4);margin-bottom:calc(var(--spacing-3) + var(--footer-mobile-height));width:100%;color:var(--box--primary--color);background:var(--box--primary--background);',
      ]);
      let H = (0, i.Ay)(z.Ay).withConfig({ componentId: 'sc-ad2e3ae9-1' })([
          'margin-bottom:var(--spacing-2);',
        ]),
        Z = i.Ay.div.withConfig({ componentId: 'sc-ad2e3ae9-2' })([
          'display:grid;width:100%;row-gap:0.5rem;',
        ]);
      var q = a(38526);
      let Y = ({
        formProcessing: e,
        formValues: t,
        haveSigner: a,
        isSeed: s,
        blockchainId: i,
        poolData: n,
        poolDataCacheOrApi: l,
        routerParams: { rChainId: c, rPoolId: p },
        tokensMapper: u,
        userPoolBalances: m,
        updateFormValues: h,
      }) => {
        let f = (0, j.A)((e) => e.networks.networks[c]),
          y = (0, j.A)((e) => e.user.walletBalancesLoading),
          A = (0, j.A)((e) => e.poolDeposit.maxLoading),
          w = (0, j.A)((e) => e.pools.setPoolIsWrapped),
          x = (0, j.A)((e) => e.pools.currencyReserves[(0, B.We)(c, p)]),
          b = t.isBalancedAmounts,
          v = (e, a) => {
            h(
              b && x
                ? {
                    amounts: (function ([e, t], a, r, { tokens: s, totalUsd: o }) {
                      let i = Object.fromEntries(
                          s.map((e) => [
                            e.tokenAddress,
                            { usdPrice: e.usdRate, reserveRatio: e.balanceUsd / Number(o) },
                          ])
                        ),
                        { reserveRatio: n, usdPrice: l } = i[r[t]] ?? {};
                      return L()(a, r).map((a, r) => {
                        let [s, o] = a;
                        if (t === r) return { ...s, value: e };
                        let { usdPrice: d, reserveRatio: c } = i[o] ?? {};
                        if (d && c && n) {
                          let t = (0, D.g)(e).times(l),
                            a = (0, D.g)(t).times(c).div(n).div(d);
                          return {
                            ...s,
                            value: (function (e, t) {
                              let a = Math.ceil(Math.log10(t));
                              return e.toFormat(a, D.g.ROUND_HALF_DOWN, {
                                groupSeparator: '',
                                decimalSeparator: '.',
                              });
                            })(a, d),
                          };
                        }
                        return s;
                      });
                    })([e, a], t.amounts, l.tokenAddresses, x),
                    isBalancedAmounts: 'by-form',
                  }
                : { amounts: t.amounts.map((t, r) => (r === a ? { ...t, value: e } : t)) },
              null,
              null
            );
          },
          S = (0, o.useMemo)(
            () =>
              t.amounts.length > 0
                ? t.amounts
                : l.tokens.map((e, t) => ({
                    token: e,
                    tokenAddress: l.tokenAddresses[t],
                    value: '',
                  })),
            [l, t.amounts]
          ),
          k = null === s || s || e;
        return (0, r.jsxs)(Z, {
          children: [
            l.tokens.length === S.length &&
              l.tokens.map((t, o) => {
                let n = l.tokenAddresses[o],
                  d = m?.[n] ?? '0',
                  { ethAddress: c = n } = u[n] ?? {},
                  p = l.tokensCountBy[t] > 1,
                  { value: f } = S[o],
                  w = null === s || e || (s && 0 !== o);
                return (0, r.jsx)(
                  U,
                  {
                    idx: o,
                    amount: f,
                    balance: (0, g.ZV)(d),
                    balanceLoading: y,
                    disableInput: w,
                    disableMaxButton: w,
                    hasError: !!a && !e && +(f || '0') > +d,
                    haveSameTokenName: p,
                    haveSigner: a,
                    blockchainId: i,
                    isMaxLoading: A === o,
                    token: t,
                    tokenAddress: c,
                    handleAmountChange: v,
                    handleMaxClick: () =>
                      h({ isBalancedAmounts: !1 }, { tokenAddress: n, idx: o }, null),
                  },
                  `${n}-${o}`
                );
              }),
            a &&
              (0, r.jsx)(Z, {
                children: (0, r.jsx)(q.A, {
                  isDisabled: k,
                  isSelected: !!t.isBalancedAmounts,
                  onChange: (e) => h({ isBalancedAmounts: !!e && 'by-wallet' }, null, null),
                  children: (0, d.t)`Add all coins in a balanced proportion`,
                }),
              }),
            l.hasWrapped &&
              null !== t.isWrapped &&
              (0, r.jsx)(Z, {
                children: (0, r.jsx)(q.A, {
                  isDisabled: !n || k || f?.poolIsWrappedOnly?.[l.pool.id],
                  isSelected: t.isWrapped,
                  onChange: (e) => {
                    if (n) {
                      let a = w(n, e),
                        r = O()(t);
                      (r.isWrapped = e),
                        (r.amounts = a.tokens.map((e, t) => ({
                          token: e,
                          tokenAddress: a.tokenAddresses[t],
                          value: '',
                        }))),
                        h(r, null, null);
                    }
                  },
                  children: (0, d.t)`Deposit Wrapped`,
                }),
              }),
          ],
        });
      };
      var X = a(26404),
        Q = a(13069),
        J = a(24451),
        ee = a(32270),
        et = a(6990);
      let ea = ({
        chainIdPoolId: e,
        curve: t,
        maxSlippage: a,
        poolAlert: s,
        poolData: i,
        poolDataCacheOrApi: n,
        routerParams: l,
        seed: c,
        tokensMapper: p,
        userPoolBalances: f,
      }) => {
        let y = (0, o.useRef)(!1),
          { chainId: g, signerAddress: w } = t || {},
          { rChainId: v } = l,
          k = (0, j.A)((e) => e.poolDeposit.activeKey),
          C = (0, j.A)((e) => e.poolDeposit.formEstGas[k] ?? rA),
          P = (0, j.A)((e) => e.poolDeposit.formLpTokenExpected[k] ?? X.hE),
          I = (0, j.A)((e) => e.poolDeposit.formStatus),
          R = (0, j.A)((e) => e.poolDeposit.formValues),
          B = (0, j.A)((e) => e.poolDeposit.slippage[k] ?? rw),
          D = (0, j.A)((e) => e.poolDeposit.fetchStepApprove),
          F = (0, j.A)((e) => e.poolDeposit.fetchStepDeposit),
          L = (0, j.A)((e) => e.poolDeposit.setFormValues),
          K = (0, j.A)((e) => e.poolDeposit.resetState),
          O = (0, j.A)((e) => (g ? e.networks.networks[g] : null)),
          [N, M] = (0, o.useState)(!1),
          [V, $] = (0, o.useState)([]),
          [W, U] = (0, o.useState)(null),
          _ = i?.pool?.id,
          z = !!w,
          H = (0, o.useCallback)(
            (e, r, s) => {
              U(null), M(!1), L('DEPOSIT', t, n.pool.id, i, e, r, c.isSeed, s || a);
            },
            [t, a, i, n.pool.id, c.isSeed, L]
          ),
          Z = (0, o.useCallback)(
            async (e, t, a, r) => {
              let s = (0, d.t)`Please approve spending your ${(0, Q.Rp)(r.amounts)}.`,
                { dismiss: o } = (0, T.me)(s, 'pending');
              await D(e, t, 'DEPOSIT', a.pool, r), 'function' == typeof o && o();
            },
            [D]
          ),
          q = (0, o.useCallback)(
            async (e, t, a, s, o) => {
              let i = (0, Q.G)(s.amounts),
                n = (0, d.t)`Please confirm deposit of ${i} at max ${o}% slippage.`,
                { dismiss: l } = (0, T.me)(n, 'pending'),
                c = await F(e, t, a, s, o);
              if (y.current && c && c.hash && c.activeKey === e && O) {
                let e = (0, d.t)`Deposited ${i}.`;
                U((0, r.jsx)(et.A, { description: e, txHash: O.scanTxPath(c.hash) }));
              }
              'function' == typeof l && l();
            },
            [F, O]
          ),
          ea = (0, o.useCallback)(
            (e, t, a, s, o, i, n, l, c) => {
              let p;
              let u = s.amounts.some((e) => Number(e.value) > 0) && !o.error,
                m = o.isApproved || 'APPROVE' === o.formTypeCompleted,
                h = 'DEPOSIT' === o.formTypeCompleted,
                f = {
                  APPROVAL: {
                    key: 'APPROVAL',
                    status: (0, ee.XA)(m, 'APPROVAL' === o.step, u),
                    type: 'action',
                    content: m ? (0, d.t)`Spending Approved` : (0, d.t)`Approve Spending`,
                    onClick: async () => Z(e, t, a, s),
                  },
                  DEPOSIT: {
                    key: 'DEPOSIT',
                    status: (0, ee.XA)(h, 'DEPOSIT' === o.step, u && o.isApproved),
                    type: 'action',
                    content: h ? (0, d.t)`Deposit Complete` : (0, d.t)`Deposit`,
                    ...(n.isHighSlippage
                      ? {
                          modal: {
                            title: (0, d.t)`Warning!`,
                            content: (0, r.jsx)(G.A, {
                              slippage: !0,
                              confirmed: i,
                              value: n.slippage || 0,
                              transferType: 'Deposit',
                              setConfirmed: M,
                            }),
                            isDismissable: !1,
                            cancelBtnProps: { label: (0, d.t)`Cancel`, onClick: () => M(!1) },
                            primaryBtnProps: { onClick: () => q(e, t, a, s, c), disabled: !i },
                            primaryBtnLabel: 'Deposit anyway',
                          },
                        }
                      : { onClick: () => q(e, t, a, s, c) }),
                  },
                };
              return (
                o.formProcessing || o.formTypeCompleted
                  ? l.map((e) => e.key)
                  : o.isApproved
                    ? ['DEPOSIT']
                    : ['APPROVAL', 'DEPOSIT']
              ).map((e) => f[e]);
            },
            [Z, q]
          );
        (0, o.useEffect)(
          () => (
            (y.current = !0),
            () => {
              y.current = !1;
            }
          ),
          []
        ),
          (0, o.useEffect)(() => {
            _ && K(i, 'DEPOSIT');
          }, [_]),
          (0, o.useEffect)(() => {
            g && _ && H({}, null, null);
          }, [g, _, w, c.isSeed]),
          (0, o.useEffect)(() => {
            a && H({}, null, a);
          }, [a]),
          (0, o.useEffect)(() => {
            t && i && $(ea(k, t, i, R, I, N, B, V, a));
          }, [t?.chainId, i?.pool.id, w, R, I, B.isHighSlippage, N, a]);
        let er = z ? (0, ee.$g)(V) : null,
          es = !c.loaded || I.formProcessing,
          eo = (0, o.useMemo)(
            () =>
              P.expected && P.virtualPrice
                ? (Number(P.expected) * Number(P.virtualPrice)).toString()
                : '',
            [P.expected, P.virtualPrice]
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(Y, {
              formProcessing: es,
              formValues: R,
              haveSigner: z,
              blockchainId: O?.networkId ?? '',
              isSeed: c.isSeed,
              poolData: i,
              poolDataCacheOrApi: n,
              routerParams: l,
              tokensMapper: p,
              userPoolBalances: f,
              updateFormValues: H,
            }),
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsx)(A, { formLpTokenExpected: P, maxSlippage: a, poolDataCacheOrApi: n }),
                (0, r.jsx)(x, { ...B }),
                z &&
                  (0, r.jsx)(h.A, {
                    isDivider: !0,
                    chainId: v,
                    ...C,
                    stepProgress: er && V.length > 1 ? { active: er, total: V.length } : null,
                  }),
                (0, r.jsx)(b.A, {
                  customLabel: (0, d.t)`Additional slippage tolerance:`,
                  maxSlippage: a,
                  stateKey: e,
                }),
              ],
            }),
            s &&
              s?.isInformationOnlyAndShowInForm &&
              (0, r.jsx)(S.A, { ...s, children: s.message }),
            (0, r.jsxs)(E, {
              poolData: i,
              poolDataCacheOrApi: n,
              loading: !g || !V.length || !c.loaded,
              routerParams: l,
              seed: c,
              userPoolBalances: f,
              children: [
                (0, r.jsx)(m.A, { maxSlippage: a, usdAmount: eo }),
                I.error &&
                  (0, r.jsx)(u.A, { errorKey: I.error, handleBtnClose: () => H({}, null, null) }),
                W,
                (0, r.jsx)(J.A, { steps: V }),
              ],
            }),
          ],
        });
      };
      var er = a(74009),
        es = a(62011),
        eo = a(45356),
        ei = a(63175);
      let en = (e) => {
        let { address: t, lpToken: r, gauge: s } = e?.pool ?? {},
          { lib: i = null } = (0, T.w5)(),
          { provider: n } = (0, T.vT)(),
          l = (0, j.A)((e) => e.pools.stakedMapper[t]),
          d = (0, j.A)((e) => e.pools.setStateByActiveKey),
          { rpcUrl: c } = (0, j.A)((e) => i && e.networks.networks[i.chainId]) ?? {},
          p = (0, o.useCallback)(
            (e) => {
              d('stakedMapper', t, { ...e, timestamp: Date.now() });
            },
            [t, d]
          ),
          u = (0, o.useCallback)(
            async (e, t, r) => {
              try {
                let s = await a(79683)(`./${e}.json`).then((e) => e.default.abi),
                  o = new er.KA(s);
                return new es.NZ(t, o.format(), r);
              } catch (e) {
                p({ totalStakedPercent: 'N/A', gaugeTotalSupply: 'N/A' }), console.error(e);
              }
            },
            [p]
          ),
          m = (0, o.useCallback)(
            async (e, t) => {
              try {
                let [a, r] = await Promise.all([e.totalSupply(), t.totalSupply()]),
                  s = 0 === Number(a) && 0 === Number(r) ? 0 : (Number(r) / Number(a)) * 100;
                p({ totalStakedPercent: s, gaugeTotalSupply: Number(r) });
              } catch (e) {
                p({ totalStakedPercent: 'N/A', gaugeTotalSupply: 'N/A' }), console.error(e);
              }
            },
            [p]
          );
        return (
          (0, o.useEffect)(() => {
            let e = !l?.timestamp || (0, ei.A)().diff(l.timestamp, 'seconds') > 30;
            t &&
              c &&
              e &&
              (async () => {
                let e = n || new eo.FR(c),
                  a = (0, B.$m)(s.address) ? await u('gaugeTotalSupply', s.address, e) : null;
                if (a) {
                  let s =
                    t === r
                      ? await u('poolTotalSupply', t, e)
                      : await u('lpTokenTotalSupply', r, e);
                  s && m(s, a);
                } else p({ totalStakedPercent: 'N/A', gaugeTotalSupply: 'N/A' });
              })();
          }, [i?.signerAddress, i?.chainId, t, c, n]),
          l
        );
      };
      var el = a(56457);
      let ed = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-34349356-0' })([
          'position:relative;top:-1px;svg{margin:0 0.25rem;}',
        ]),
        ec = ({ crvApr: e, lpTokenAmount: t, poolDataCacheOrApi: a }) => {
          let { gaugeTotalSupply: s } = en(a) ?? {},
            [i, n] = (0, o.useState)(null);
          return (
            (0, o.useEffect)(() => {
              if (e && s && Number(s) > 0 && Number(t) > 0) {
                let a = (0, W.p1)(Number(s)),
                  r = Number(t) + a,
                  o = (a / r) * e;
                n({ ratio: e / o, apr: o });
              } else n(null);
            }, [e, s, t]),
            (0, r.jsx)(r.Fragment, {
              children:
                e && i && i.ratio > 1.25
                  ? (0, r.jsx)(f.A, {
                      isBold: !0,
                      loading: !1,
                      loadingSkeleton: [140, 23],
                      label: (0, d.t)`Expected CRV tAPR:`,
                      tooltip: (0, r.jsx)(y.A, {
                        minWidth: '200px',
                        children: (0,
                        d.t)`As the number of staked LP Tokens increases, the CRV tAPR will decrease.`,
                      }),
                      children: (0, r.jsxs)(ed, {
                        children: [
                          (0, g.ZV)(e, { style: 'percent', defaultValue: '-' }),
                          (0, r.jsx)(el.A, {
                            name: 'ArrowRight',
                            size: 16,
                            className: 'svg-arrow',
                          }),
                          (0, g.ZV)(i.apr, { style: 'percent', defaultValue: '-' }),
                        ],
                      }),
                    })
                  : null,
            })
          );
        },
        ep = ({
          chainIdPoolId: e,
          curve: t,
          blockchainId: a,
          poolAlert: s,
          poolData: i,
          poolDataCacheOrApi: n,
          maxSlippage: l,
          routerParams: c,
          seed: p,
          tokensMapper: f,
          userPoolBalances: y,
        }) => {
          let g = (0, o.useRef)(!1),
            { chainId: w, signerAddress: v } = t || {},
            { rChainId: k } = c,
            C = (0, j.A)((e) => e.poolDeposit.activeKey),
            P = (0, j.A)((e) => e.poolDeposit.formEstGas[C] ?? rA),
            I = (0, j.A)((e) => e.poolDeposit.formLpTokenExpected[C] ?? X.hE),
            R = (0, j.A)((e) => e.poolDeposit.formStatus),
            B = (0, j.A)((e) => e.poolDeposit.formValues),
            D = (0, j.A)((e) => e.pools.rewardsApyMapper[k]?.[n.pool.id]),
            F = (0, j.A)((e) => e.poolDeposit.slippage[C] ?? rw),
            L = (0, j.A)((e) => e.poolDeposit.fetchStepApprove),
            K = (0, j.A)((e) => e.poolDeposit.fetchStepDepositStake),
            O = (0, j.A)((e) => e.poolDeposit.setFormValues),
            N = (0, j.A)((e) => e.poolDeposit.resetState),
            M = (0, j.A)((e) => e.networks.networks[k]),
            [V, $] = (0, o.useState)(!1),
            [W, U] = (0, o.useState)([]),
            [_, z] = (0, o.useState)(null),
            H = i?.pool?.id,
            Z = !!v,
            q = (0, o.useCallback)(
              (e, a, r) => {
                z(null), $(!1), O('DEPOSIT_STAKE', t, n.pool.id, i, e, a, p.isSeed, r || l);
              },
              [t, l, i, n.pool.id, p.isSeed, O]
            ),
            ea = (0, o.useCallback)(
              async (e, t, a, r) => {
                let s = (0, d.t)`Please approve spending your ${(0, Q.Rp)(r.amounts)}.`,
                  { dismiss: o } = (0, T.me)(s, 'pending');
                await L(e, t, 'DEPOSIT_STAKE', a, r), 'function' == typeof o && o();
              },
              [L]
            ),
            er = (0, o.useCallback)(
              async (e, t, a, s, o) => {
                let i = (0, Q.G)(s.amounts),
                  n = (0,
                  d.t)`Please confirm deposit and staking of ${i} LP Tokens at max ${o}% slippage.`,
                  { dismiss: l } = (0, T.me)(n, 'pending'),
                  c = await K(e, t, a, s, o);
                if (g.current && c && c.hash && c.activeKey === e) {
                  let e = (0, d.t)`Deposit and staked ${i}`;
                  z((0, r.jsx)(et.A, { description: e, txHash: M?.scanTxPath(c.hash) }));
                }
                'function' == typeof l && l();
              },
              [K, M]
            ),
            es = (0, o.useCallback)(
              (e, t, a, s, o, i, n, l, c) => {
                let p;
                let u = s.amounts.some((e) => Number(e.value) > 0) && !o.error,
                  m = o.isApproved || 'APPROVE' === o.formTypeCompleted,
                  h = 'DEPOSIT_STAKE' === o.formTypeCompleted,
                  f = {
                    APPROVAL: {
                      key: 'APPROVAL',
                      status: (0, ee.XA)(m, 'APPROVAL' === o.step, u),
                      type: 'action',
                      content: m ? (0, d.t)`Spending Approved` : (0, d.t)`Approve Spending`,
                      onClick: () => ea(e, t, a.pool, s),
                    },
                    DEPOSIT_STAKE: {
                      key: 'DEPOSIT_STAKE',
                      status: (0, ee.XA)(h, 'DEPOSIT_STAKE' === o.step, o.isApproved && u),
                      type: 'action',
                      content: h ? (0, d.t)`Deposit & Stake Complete` : (0, d.t)`Deposit & Stake`,
                      ...(n.isHighSlippage
                        ? {
                            modal: {
                              title: (0, d.t)`Warning!`,
                              content: (0, r.jsx)(G.A, {
                                slippage: !0,
                                confirmed: i,
                                value: n.slippage || 0,
                                transferType: 'Deposit',
                                setConfirmed: $,
                              }),
                              isDismissable: !1,
                              cancelBtnProps: { label: (0, d.t)`Cancel`, onClick: () => $(!1) },
                              primaryBtnProps: { onClick: () => er(e, t, a, s, c), disabled: !i },
                              primaryBtnLabel: 'Deposit anyway',
                            },
                          }
                        : { onClick: () => er(e, t, a, s, c) }),
                    },
                  };
                return (
                  o.formProcessing || o.formTypeCompleted
                    ? l.map((e) => e.key)
                    : o.isApproved
                      ? ['DEPOSIT_STAKE']
                      : ['APPROVAL', 'DEPOSIT_STAKE']
                ).map((e) => f[e]);
              },
              [ea, er]
            );
          (0, o.useEffect)(
            () => (
              (g.current = !0),
              () => {
                g.current = !1;
              }
            ),
            []
          ),
            (0, o.useEffect)(() => {
              H && N(i, 'DEPOSIT_STAKE');
            }, [H]),
            (0, o.useEffect)(() => {
              w && H && q({}, null, null);
            }, [w, H, v, p.isSeed]),
            (0, o.useEffect)(() => {
              l && q({}, null, l);
            }, [l]),
            (0, o.useEffect)(() => {
              t && i && U(es(C, t, i, B, R, V, F, W, l));
            }, [w, H, v, B, R, F.isHighSlippage, V, l]);
          let eo = Z ? (0, ee.$g)(W) : null,
            ei = !p.loaded || R.formProcessing,
            en = (0, o.useMemo)(
              () =>
                I.expected && I.virtualPrice
                  ? (Number(I.expected) * Number(I.virtualPrice)).toString()
                  : '',
              [I.expected, I.virtualPrice]
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(Y, {
                formProcessing: ei,
                formValues: B,
                haveSigner: Z,
                blockchainId: a,
                isSeed: p.isSeed,
                poolData: i,
                poolDataCacheOrApi: n,
                routerParams: c,
                tokensMapper: f,
                userPoolBalances: y,
                updateFormValues: q,
              }),
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)(A, { formLpTokenExpected: I, maxSlippage: l, poolDataCacheOrApi: n }),
                  (0, r.jsx)(ec, {
                    lpTokenAmount: I.expected,
                    poolDataCacheOrApi: n,
                    crvApr: D?.crv?.[0],
                  }),
                  (0, r.jsx)(x, { ...F }),
                  Z &&
                    (0, r.jsx)(h.A, {
                      isDivider: !0,
                      chainId: k,
                      ...P,
                      stepProgress: eo && W.length > 1 ? { active: eo, total: W.length } : null,
                    }),
                  (0, r.jsx)(b.A, {
                    customLabel: (0, d.t)`Additional slippage tolerance`,
                    maxSlippage: l,
                    stateKey: e,
                  }),
                ],
              }),
              s &&
                s?.isInformationOnlyAndShowInForm &&
                (0, r.jsx)(S.A, { ...s, children: s.message }),
              (0, r.jsxs)(E, {
                poolData: i,
                poolDataCacheOrApi: n,
                loading: !w || !W.length || !p.loaded,
                routerParams: c,
                seed: p,
                userPoolBalances: y,
                children: [
                  (0, r.jsx)(m.A, { maxSlippage: l, usdAmount: en }),
                  R.error &&
                    (0, r.jsx)(u.A, { errorKey: R.error, handleBtnClose: () => q({}, null, null) }),
                  _,
                  (0, r.jsx)(J.A, { steps: W }),
                ],
              }),
            ],
          });
        },
        eu = ({
          amount: e,
          balance: t,
          balanceLoading: a,
          disabledMaxButton: s,
          disableInput: o,
          hasError: i,
          haveSigner: n,
          handleAmountChange: l,
          handleMaxClick: c,
        }) =>
          (0, r.jsxs)(V.Ay, {
            id: 'lpTokens',
            grid: !0,
            gridTemplateColumns: '1fr auto',
            disabled: o,
            inputVariant: i ? 'error' : void 0,
            padding: 'var(--spacing-1) var(--spacing-2)',
            children: [
              (0, r.jsx)(V.E5, {
                id: 'inp-lp-tokens',
                autoComplete: 'off',
                type: 'number',
                labelProps: {
                  label: n ? (0, d.t)`LP Tokens Avail.` : (0, d.t)`LP Tokens`,
                  descriptionLoading: !!n && a,
                  description: n ? t : '',
                },
                value: void 0 === e ? '' : e,
                onChange: l,
              }),
              c && (0, r.jsx)(V.xI, { disabled: s, onClick: c }),
            ],
          }),
        em = ({
          curve: e,
          poolData: t,
          poolDataCacheOrApi: a,
          routerParams: s,
          seed: i,
          userPoolBalances: n,
        }) => {
          let l = (0, o.useRef)(!1),
            { chainId: c, signerAddress: p } = e || {},
            { rChainId: m } = s,
            f = (0, j.A)((e) => e.poolDeposit.activeKey),
            y = (0, j.A)((e) => e.user.walletBalancesLoading),
            A = (0, j.A)((e) => e.poolDeposit.formEstGas[f] ?? rA),
            w = (0, j.A)((e) => e.poolDeposit.formStatus),
            x = (0, j.A)((e) => e.poolDeposit.formValues),
            b = (0, j.A)((e) => e.pools.rewardsApyMapper[m]?.[a.pool.id]),
            v = (0, j.A)((e) => e.poolDeposit.fetchStepStakeApprove),
            k = (0, j.A)((e) => e.poolDeposit.fetchStepStake),
            C = (0, j.A)((e) => e.poolDeposit.setFormValues),
            P = (0, j.A)((e) => e.poolDeposit.resetState),
            I = (0, j.A)((e) => (c ? e.networks.networks[c] : null)),
            [R, B] = (0, o.useState)([]),
            [G, F] = (0, o.useState)(null),
            L = t?.pool?.id,
            K = !!p,
            O = (0, o.useCallback)(
              (r) => {
                F(null), C('STAKE', e, a.pool.id, t, r, null, i.isSeed, '');
              },
              [e, t, a.pool.id, i.isSeed, C]
            ),
            N = (0, o.useCallback)(
              async (e, t, a, r) => {
                let s = (0, d.t)`Please approve spending your LP Tokens.`,
                  { dismiss: o } = (0, T.me)(s, 'pending');
                await v(e, t, 'STAKE', a, r), 'function' == typeof o && o();
              },
              [v]
            ),
            M = (0, o.useCallback)(
              async (e, t, a, s) => {
                let o = (0, d.t)`Please confirm staking of ${s.lpToken} LP Tokens`,
                  { dismiss: i } = (0, T.me)(o, 'pending'),
                  n = await k(e, t, a, s);
                if (l.current && n && n.hash && n.activeKey === e && I) {
                  let e = `Staked ${s.lpToken} LP Tokens`;
                  F((0, r.jsx)(et.A, { description: e, txHash: I.scanTxPath(n.hash) }));
                }
                'function' == typeof i && i();
              },
              [k, I]
            ),
            V = (0, o.useCallback)(
              (e, t, a, r, s, o) => {
                let i;
                let n = !s.error && +r.lpToken > 0,
                  l = s.isApproved || 'APPROVE' === s.formTypeCompleted,
                  c = 'STAKE' === s.formTypeCompleted,
                  p = {
                    APPROVAL: {
                      key: 'APPROVAL',
                      status: (0, ee.XA)(l, 'APPROVAL' === s.step, n && !s.formProcessing),
                      type: 'action',
                      content: l ? (0, d.t)`Spending Approved` : (0, d.t)`Approve Spending`,
                      onClick: () => N(e, t, a.pool, r),
                    },
                    STAKE: {
                      key: 'STAKE',
                      status: (0, ee.XA)(c, 'STAKE' === s.step, n && s.isApproved),
                      type: 'action',
                      content: c ? (0, d.t)`Stake Complete` : (0, d.t)`Stake`,
                      onClick: () => M(e, t, a, r),
                    },
                  };
                return (
                  s.formProcessing || s.formTypeCompleted
                    ? o.map((e) => e.key)
                    : s.isApproved
                      ? ['STAKE']
                      : ['APPROVAL', 'STAKE']
                ).map((e) => p[e]);
              },
              [N, M]
            );
          (0, o.useEffect)(
            () => (
              (l.current = !0),
              () => {
                l.current = !1;
              }
            ),
            []
          ),
            (0, o.useEffect)(() => {
              L && P(t, 'STAKE');
            }, [L]),
            (0, o.useEffect)(() => {
              c && L && O({});
            }, [c, L, p, i.isSeed]),
            (0, o.useEffect)(() => {
              e && L && B(V(f, e, t, x, w, R));
            }, [c, L, p, x, w]);
          let $ = p ? (0, ee.$g)(R) : null,
            W = null === i.isSeed || w.formProcessing,
            U = n?.lpToken ?? '0';
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(Z, {
                children: (0, r.jsx)(eu, {
                  amount: x.lpToken,
                  balance: (0, g.ZV)(U),
                  balanceLoading: y,
                  hasError: !!K && new D.A(x.lpToken).isGreaterThan(U),
                  haveSigner: K,
                  handleAmountChange: (e) => O({ lpToken: e }),
                  disabledMaxButton: W || !K,
                  disableInput: W,
                  handleMaxClick: () => {
                    O({ lpToken: n?.lpToken ?? '0' });
                  },
                }),
              }),
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)(ec, {
                    lpTokenAmount: x.lpToken,
                    poolDataCacheOrApi: a,
                    crvApr: b?.crv?.[0],
                  }),
                  K &&
                    (0, r.jsx)(h.A, {
                      chainId: m,
                      ...A,
                      stepProgress: $ && R.length > 1 ? { active: $, total: R.length } : null,
                    }),
                ],
              }),
              (0, r.jsxs)(E, {
                poolData: t,
                poolDataCacheOrApi: a,
                loading: !c || !R.length || !i.loaded,
                routerParams: s,
                seed: i,
                userPoolBalances: n,
                children: [
                  'lpToken-too-much' === w.error
                    ? (0, r.jsx)(S.A, {
                        alertType: 'error',
                        children: (0, d.t)`Not enough LP Tokens balances.`,
                      })
                    : w.error
                      ? (0, r.jsx)(u.A, { errorKey: w.error, handleBtnClose: () => O({}) })
                      : null,
                  G,
                  (0, r.jsx)(J.A, { steps: R }),
                ],
              }),
            ],
          });
        },
        eh = ({ hasDepositAndStake: e, ...t }) => {
          let a = (0, o.useRef)(null),
            { poolAlert: s, poolData: i, poolDataCacheOrApi: n } = t,
            { rChainId: l } = t.routerParams,
            c = (0, j.A)((e) => e.poolDeposit.formType),
            p = (0, j.A)((e) => e.poolDeposit.resetState),
            u = (0, j.A)((e) => e.poolDeposit.setStateByKeys),
            [m, h] = (0, o.useState)([]),
            [f, y] = (0, o.useState)(0),
            g = (0, o.useMemo)(
              () => [
                { label: (0, d.t)`Deposit`, formType: 'DEPOSIT' },
                { label: (0, d.t)`Stake`, formType: 'STAKE' },
                { label: (0, d.t)`Deposit & Stake`, formType: 'DEPOSIT_STAKE' },
              ],
              []
            );
          (0, o.useEffect)(() => {
            if (!a.current) return;
            let e = a.current,
              t = e.getBoundingClientRect();
            h(
              Array.from(e.childNodes)
                .filter((e) => e.classList.contains('tab'))
                .map((e, a) => {
                  let r = e.getBoundingClientRect(),
                    s = -0 == a ? 0 : r.left - t.left,
                    o = r.bottom - t.top;
                  return { left: s, width: r.width, top: o };
                })
            );
          }, [f]);
          let A = (0, o.useCallback)(
            (e) => {
              u({ formStatus: X.kR, formType: g[e].formType }), y(e);
            },
            [u]
          );
          return (
            (0, o.useEffect)(() => {
              i && (A(0), p(i, 'DEPOSIT'));
            }, [i?.pool?.id]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, B.$m)(n.pool.gauge.address) &&
                  l &&
                  (0, r.jsx)(H, {
                    activeIdx: f,
                    children: (0, r.jsx)(z.Gj, {
                      ref: a,
                      children: g.map(({ formType: t, label: a }, s) =>
                        'DEPOSIT_STAKE' !== t || e
                          ? (0, r.jsx)(
                              z.NK,
                              {
                                tabLeft: m[s]?.left,
                                tabWidth: m[s]?.width,
                                tabTop: m[s]?.top,
                                onChange: () => A(s),
                                tabIdx: s,
                                label: a,
                              },
                              a
                            )
                          : (0, r.jsx)(o.Fragment, {}, a)
                      ),
                    }),
                  }),
                s && s.isDisableDeposit
                  ? (0, r.jsx)(S.A, { ...s, children: s.message })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        'DEPOSIT' === c && (0, r.jsx)(ea, { hasDepositAndStake: e, ...t }),
                        'DEPOSIT_STAKE' === c &&
                          (0, r.jsx)(r.Fragment, {
                            children: n.gauge.isKilled
                              ? (0, r.jsx)(S.A, {
                                  alertType: 'warning',
                                  children: (0, d.t)`Staking is disabled due to inactive Gauge.`,
                                })
                              : (0, r.jsx)(ep, { hasDepositAndStake: e, ...t }),
                          }),
                        'STAKE' === c &&
                          (0, r.jsx)(r.Fragment, {
                            children: n.gauge.isKilled
                              ? (0, r.jsx)(S.A, {
                                  alertType: 'warning',
                                  children: (0, d.t)`Staking is disabled due to inactive Gauge.`,
                                })
                              : (0, r.jsx)(em, { hasDepositAndStake: e, ...t }),
                          }),
                      ],
                    }),
              ],
            })
          );
        };
      var ef = a(50567);
      let ey = i.Ay.div.withConfig({ componentId: 'sc-d9c666e2-0' })([
          'display:flex;flex-direction:row;width:100%;border-bottom:0.5px solid var(--border-600);&:hover{background:var(--dialog--background-color);}',
        ]),
        eg = (0, i.Ay)($.x).withConfig({ componentId: 'sc-d9c666e2-1' })([
          'margin:auto var(--spacing-1) auto 0;&.bought{margin:auto 0 auto var(--spacing-1);}',
        ]),
        eA = i.Ay.a.withConfig({ componentId: 'sc-d9c666e2-2' })([
          'box-sizing:border-box;font-variant-numeric:tabular-nums;display:grid;grid-template-columns:0.4fr 1fr;text-decoration:none;width:100%;color:var(--page--text-color);padding:var(--spacing-1) var(--spacing-1);&:hover{background:var(--dialog--background-color);}',
        ]),
        ew = i.Ay.span.withConfig({ componentId: 'sc-d9c666e2-3' })([
          'text-align:left;margin:auto 0;font-weight:var(--bold);font-size:var(--font-size-1);color:var(--chart-green);&.remove{color:var(--chart-red);}',
        ]),
        ex = i.Ay.div.withConfig({ componentId: 'sc-d9c666e2-4' })([
          'display:flex;flex-direction:column;',
        ]),
        eb = i.Ay.div.withConfig({ componentId: 'sc-d9c666e2-5' })([
          'display:flex;margin:var(--spacing-1) 0 var(--spacing-1) auto;align-items:center;',
        ]),
        ev = i.Ay.span.withConfig({ componentId: 'sc-d9c666e2-6' })([
          'font-weight:var(--bold);font-size:var(--font-size-1);opacity:0.7;margin:0 var(--spacing-1);',
        ]),
        eS = i.Ay.span.withConfig({ componentId: 'sc-d9c666e2-7' })([
          'min-width:36px;text-align:right;opacity:0.7;font-size:var(--font-size-2);margin:auto var(--spacing-1) auto 0;padding-left:var(--spacing-1);box-sizing:border-box;font-variant-numeric:tabular-nums;display:flex;justify-content:end;',
        ]),
        ek = ({ lpEventsData: e, chainId: t, coins: a }) => {
          let s = (0, j.A)((e) => e.tokens.tokensMapper),
            o = (0, j.A)((e) => e.networks.networks[t]);
          return (0, r.jsx)(r.Fragment, {
            children: e
              .filter((e) => {
                if (0 !== e.token_amounts.reduce((e, t) => e + t, 0)) return e;
              })
              .map((e, i) =>
                (0, r.jsxs)(
                  ey,
                  {
                    children: [
                      (0, r.jsx)(eA, {
                        href: o.scanTxPath(e.transaction_hash),
                        rel: 'noopener',
                        target: '_blank',
                        children:
                          'AddLiquidity' === e.liquidity_event_type
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(ew, { children: (0, d.t)`Add` }),
                                  (0, r.jsx)(M.A, {
                                    flex: !0,
                                    flexColumn: !0,
                                    children: e.token_amounts.map(
                                      (i, n) =>
                                        0 !== i &&
                                        (0, r.jsxs)(
                                          eb,
                                          {
                                            children: [
                                              (0, r.jsx)(w.v, {
                                                isBold: !0,
                                                isNumber: !0,
                                                children: (0, g.ZV)(e.token_amounts[n], {
                                                  ...(0, g.Ho)(e.token_amounts[n], 2),
                                                }),
                                              }),
                                              (0, r.jsx)(ev, { children: a[n].symbol }),
                                              (0, r.jsx)(eg, {
                                                size: 'sm',
                                                blockchainId: o?.networkId,
                                                tooltip: a[n].symbol,
                                                address:
                                                  s[t]?.[a[n].address]?.ethAddress || a[n].address,
                                              }),
                                            ],
                                          },
                                          `${e.transaction_hash}-${i}-${n}`
                                        )
                                    ),
                                  }),
                                ],
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(ew, {
                                    className: 'remove',
                                    children: (0, d.t)`Remove`,
                                  }),
                                  (0, r.jsx)(ex, {
                                    children: e.token_amounts.map(
                                      (i, n) =>
                                        0 !== i &&
                                        (0, r.jsxs)(
                                          eb,
                                          {
                                            children: [
                                              (0, r.jsx)(w.v, {
                                                isBold: !0,
                                                isNumber: !0,
                                                children: (0, g.ZV)(e.token_amounts[n], {
                                                  ...(0, g.Ho)(e.token_amounts[n], 2),
                                                }),
                                              }),
                                              (0, r.jsx)(ev, { children: a[n].symbol }),
                                              (0, r.jsx)(eg, {
                                                size: 'sm',
                                                blockchainId: o?.networkId,
                                                tooltip: a[n].symbol,
                                                address:
                                                  s[t]?.[a[n].address]?.ethAddress || a[n].address,
                                              }),
                                            ],
                                          },
                                          `${e.transaction_hash}-${i}-${n}`
                                        )
                                    ),
                                  }),
                                ],
                              }),
                      }),
                      (0, r.jsx)(eS, {
                        children: (0, r.jsx)(ef.Ay, {
                          tooltip: (0, g.Yq)((0, g.ic)(e.time), 'long'),
                          children: (0, g.mf)(e.time),
                        }),
                      }),
                    ],
                  },
                  `${e.transaction_hash}-lp-${i}`
                )
              ),
          });
        },
        eC = i.Ay.div.withConfig({ componentId: 'sc-9153ca9b-0' })([
          'display:flex;flex-direction:row;width:100%;border-bottom:0.5px solid var(--border-600);&:hover{background:var(--dialog--background-color);}',
        ]),
        eP = i.Ay.span.withConfig({ componentId: 'sc-9153ca9b-1' })([
          'min-width:36px;text-align:right;opacity:0.7;font-size:var(--font-size-2);margin:auto var(--spacing-1) auto 0;padding-left:var(--spacing-1);box-sizing:border-box;font-variant-numeric:tabular-nums;display:flex;justify-content:end;',
        ]),
        ej = (0, i.Ay)($.x).withConfig({ componentId: 'sc-9153ca9b-2' })([
          'margin:auto var(--spacing-1) auto 0;&.bought{margin:auto 0 auto var(--spacing-1);}',
        ]),
        eT = i.Ay.a.withConfig({ componentId: 'sc-9153ca9b-3' })([
          'box-sizing:border-box;font-variant-numeric:tabular-nums;display:grid;grid-template-columns:1fr 0.1fr 1fr;text-decoration:none;width:100%;color:var(--page--text-color);padding:var(--spacing-1) var(--spacing-1);',
        ]),
        eI = i.Ay.div.withConfig({ componentId: 'sc-9153ca9b-4' })([
          'margin-right:auto;display:flex;flex-direction:row;',
        ]),
        eR = i.Ay.span.withConfig({ componentId: 'sc-9153ca9b-5' })([
          'text-align:left;font-weight:var(--bold);font-size:var(--font-size-1);color:#ef5350;',
        ]),
        eB = i.Ay.span.withConfig({ componentId: 'sc-9153ca9b-6' })([
          'text-align:left;font-weight:var(--bold);font-size:var(--font-size-2);',
        ]),
        eE = i.Ay.span.withConfig({ componentId: 'sc-9153ca9b-7' })([
          'margin:auto 0;font-size:var(--font-size-3);font-weight:var(--bold);text-align:center;',
        ]),
        eG = i.Ay.div.withConfig({ componentId: 'sc-9153ca9b-8' })([
          'margin-left:auto;display:flex;flex-direction:row;',
        ]),
        eD = i.Ay.span.withConfig({ componentId: 'sc-9153ca9b-9' })([
          'text-align:right;font-weight:var(--bold);font-size:var(--font-size-1);color:#26a69a;',
        ]),
        eF = i.Ay.span.withConfig({ componentId: 'sc-9153ca9b-10' })([
          'text-align:right;font-weight:var(--bold);font-size:var(--font-size-2);',
        ]),
        eL = ({ lpTradesData: e, chainId: t, tradesTokens: a }) => {
          let s = (0, j.A)((e) => e.networks.networks[t]);
          return e.map((e, t) => {
            let o = a.find((t) => t.event_index === e.bought_id),
              i = a.find((t) => t.event_index === e.sold_id);
            return (0, r.jsxs)(
              eC,
              {
                children: [
                  (0, r.jsxs)(eT, {
                    href: s.scanTxPath(e.transaction_hash),
                    rel: 'noopener',
                    target: '_blank',
                    children: [
                      (0, r.jsxs)(eI, {
                        children: [
                          (0, r.jsx)(ej, {
                            size: 'sm',
                            blockchainId: s?.networkId ?? '',
                            tooltip: i?.symbol ?? e.token_sold_symbol,
                            address: i?.address ?? e.token_sold,
                          }),
                          (0, r.jsxs)(M.A, {
                            flex: !0,
                            flexColumn: !0,
                            children: [
                              (0, r.jsx)(eR, { children: i?.symbol ?? e.token_sold_symbol }),
                              (0, r.jsx)(eB, {
                                children: (0, r.jsx)(w.v, {
                                  isBold: !0,
                                  isNumber: !0,
                                  children: (0, g.ZV)(e.tokens_sold, {
                                    ...(0, g.Ho)(e.tokens_sold, 2),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(eE, { children: '→' }),
                      (0, r.jsxs)(eG, {
                        children: [
                          (0, r.jsxs)(M.A, {
                            flex: !0,
                            flexColumn: !0,
                            children: [
                              (0, r.jsx)(eD, { children: o?.symbol ?? e.token_bought_symbol }),
                              (0, r.jsx)(eF, {
                                children: (0, r.jsx)(w.v, {
                                  isBold: !0,
                                  isNumber: !0,
                                  children: (0, g.ZV)(e.tokens_bought, {
                                    ...(0, g.Ho)(e.tokens_bought, 2),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsx)(ej, {
                            className: 'bought',
                            size: 'sm',
                            blockchainId: s?.networkId ?? '',
                            tooltip: o?.symbol ?? e.token_bought_symbol,
                            address: o?.address ?? e.token_bought,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(eP, {
                    children: (0, r.jsx)(ef.Ay, {
                      tooltip: (0, g.Yq)((0, g.ic)(e.time), 'long'),
                      children: (0, g.mf)(e.time),
                    }),
                  }),
                ],
              },
              `${e.transaction_hash}-${e.sold_id}-trade-${t}`
            );
          });
        };
      var eK = a(16726),
        eO = a(99599);
      let eN = i.Ay.div.withConfig({ componentId: 'sc-356162ed-0' })(
          ['display:flex;flex-direction:column;max-height:', ';margin:1px;'],
          (e) => (e.chartExpanded ? '548px' : '350px')
        ),
        eM = (0, i.Ay)(eK.A).withConfig({ componentId: 'sc-356162ed-1' })([
          'display:flex;justify-content:center;align-items:center;margin-left:calc(-1 * var(--spacing-3) * 2.5);margin-right:var(--spacing-2);box-shadow:none;&:hover:not(:disabled){box-shadow:none;}',
        ]),
        eV = i.Ay.div.withConfig({ componentId: 'sc-356162ed-2' })([
          'display:flex;flex-direction:row;padding-left:var(--spacing-2);padding-right:var(--spacing-2);min-height:2.125rem;margin-bottom:var(--spacing-3);',
        ]),
        e$ = i.Ay.h3.withConfig({ componentId: 'sc-356162ed-3' })(['margin:auto auto auto 0;']),
        eW = i.Ay.p.withConfig({ componentId: 'sc-356162ed-4' })(['font-size:var(--font-size-2);']),
        eU = i.Ay.div.withConfig({ componentId: 'sc-356162ed-5' })([
          'display:flex;font-size:var(--font-size-2);button{margin:auto 0 auto var(--spacing-2);}',
        ]),
        e_ = i.Ay.div.withConfig({ componentId: 'sc-356162ed-6' })([
          'display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none;',
        ]),
        ez = i.Ay.div.withConfig({ componentId: 'sc-356162ed-7' })(
          [
            'display:flex;flex-direction:column;width:100%;overflow-y:auto;border-bottom:0.5px solid var(--border-600);padding:var(--spacing-1);min-height:',
            'px;',
          ],
          (e) => e.minHeight
        ),
        eH = i.Ay.div.withConfig({ componentId: 'sc-356162ed-8' })([
          'display:grid;grid-template-columns:2.5fr 1fr;padding:var(--spacing-1) var(--spacing-1);text-decoration:none;color:var(--page--text-color);font-weight:var(--bold);font-size:var(--font-size-1);',
        ]),
        eZ = i.Ay.span.withConfig({ componentId: 'sc-356162ed-9' })([
          'opacity:0.7;box-sizing:border-box;grid-column:1 / 2;padding:var(--spacing-1) var(--spacing-1);',
        ]),
        eq = i.Ay.span.withConfig({ componentId: 'sc-356162ed-10' })([
          'opacity:0.7;box-sizing:border-box;grid-column:2 / 2;text-align:right;padding:var(--spacing-1) var(--spacing-1);',
        ]),
        eY = ({
          chainId: e,
          poolAddress: t,
          chartExpanded: a,
          coins: s,
          tradesTokens: i,
          chartCombinations: n,
        }) => {
          let l = (0, j.A)((e) => e.pools.pricesApiState.activityHidden),
            c = (0, j.A)((e) => e.pools.pricesApiState.activityStatus),
            p = (0, j.A)((e) => e.pools.pricesApiState.tradeEventsData),
            u = (0, j.A)((e) => e.pools.pricesApiState.liquidityEventsData),
            m = (0, j.A)((e) => e.pools.setActivityHidden),
            h = (0, j.A)((e) => e.pools.fetchPricesApiActivity),
            [f, y] = (0, o.useState)('TRADE');
          return (
            (0, o.useEffect)(() => {
              h(e, t, n);
            }, [e, n, h, t]),
            (0, r.jsxs)(eN, {
              chartExpanded: a,
              children: [
                (0, r.jsxs)(eV, {
                  children: [
                    a &&
                      (0, r.jsx)(eM, {
                        variant: 'select',
                        onClick: () => m(!l),
                        children: (0, r.jsx)(el.A, {
                          name: l ? 'SidePanelClose' : 'SidePanelOpen',
                          size: 16,
                        }),
                      }),
                    !l &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(e$, {
                            children: 'TRADE' === f ? (0, d.t)`Swaps` : (0, d.t)`Liquidity`,
                          }),
                          (0, r.jsxs)(eU, {
                            children: [
                              (0, r.jsx)(eK.A, {
                                className: 'TRADE' === f ? 'active' : '',
                                variant: 'select',
                                onClick: () => y('TRADE'),
                                children: (0, d.t)`Swaps`,
                              }),
                              (0, r.jsx)(eK.A, {
                                className: 'LP' === f ? 'active' : '',
                                variant: 'select',
                                onClick: () => y('LP'),
                                children: (0, d.t)`Liquidity`,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                !l &&
                  'READY' === c &&
                  (0, r.jsxs)(e_, {
                    children: [
                      (0, r.jsxs)(
                        eH,
                        {
                          children: [
                            (0, r.jsx)(eZ, {
                              children: 'TRADE' === f ? (0, d.t)`Swap` : (0, d.t)`Action`,
                            }),
                            (0, r.jsx)(eq, { children: (0, d.t)`Time` }),
                          ],
                        },
                        'titles'
                      ),
                      (0, r.jsx)(ez, {
                        minHeight: a ? 548 : 330,
                        children:
                          'TRADE' === f
                            ? 0 === p.length
                              ? (0, r.jsx)(eO.V, {
                                  children: (0, r.jsx)(eW, {
                                    children: (0, d.t)`No trades data found.`,
                                  }),
                                })
                              : (0, r.jsx)(eL, { lpTradesData: p, chainId: e, tradesTokens: i })
                            : 0 === u.length
                              ? (0, r.jsx)(eO.V, {
                                  children: (0, r.jsx)(eW, {
                                    children: (0, d.t)`No controller data found.`,
                                  }),
                                })
                              : (0, r.jsx)(ek, { lpEventsData: u, chainId: e, coins: s }),
                      }),
                    ],
                  }),
                !l &&
                  'LOADING' === c &&
                  (0, r.jsx)(eO.V, {
                    minHeight: a ? '548px' : '330px',
                    children: (0, r.jsx)(eO.A, { size: 18 }),
                  }),
                !l &&
                  'ERROR' === c &&
                  (0, r.jsx)(eO.V, {
                    minHeight: a ? '548px' : '330px',
                    children: (0, r.jsx)(eW, {
                      children: (0, d.t)`There was an error fetching the pool activity data.`,
                    }),
                  }),
              ],
            })
          );
        };
      var eX = a(47990),
        eQ = a(50654),
        eJ = a(14815),
        e0 = a(17416),
        e1 = a(75911);
      let e3 = i.Ay.div.withConfig({ componentId: 'sc-ae32a773-0' })(['display:grid;', ''], (e) =>
          e.activityHidden
            ? 'grid-template-columns: auto calc(var(--spacing-3) + var(--spacing-3))'
            : 'grid-template-columns: 2fr 26.4375rem'
        ),
        e2 = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-ae32a773-1' })([
          'padding:var(--spacing-3);background:var(--box--secondary--content--background-color);',
        ]),
        e5 = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-ae32a773-2' })(
          ['display:flex;flex-direction:column;padding:', ';'],
          (e) => (e.chartExpanded ? 'var(--spacing-3)' : '0')
        ),
        e6 = i.Ay.div.withConfig({ componentId: 'sc-ae32a773-3' })([
          'display:flex;flex-direction:row;margin-bottom:var(--spacing-2);',
        ]),
        e4 = (0, i.Ay)(eX.A).withConfig({ componentId: 'sc-ae32a773-4' })([
          'color:inherit;font:var(--font);font-size:var(--font-size-2);font-weight:bold;text-transform:none;opacity:0.7;&.active{opacity:1;border-bottom:2px solid var(--page--text-color);}',
        ]),
        e7 = (0, i.Ay)(e4).withConfig({ componentId: 'sc-ae32a773-5' })([
          'margin-left:auto;display:flex;align-content:center;',
        ]),
        e8 = (0, i.Ay)(el.A).withConfig({ componentId: 'sc-ae32a773-6' })([
          'margin-left:var(--spacing-1);',
        ]),
        e9 = ({ rChainId: e, pricesApiPoolData: t }) => {
          let a = (0, e1.nv)((e) => e.theme),
            s = (0, j.A)((e) => e.pools.pricesApiState.chartOhlcData),
            i = (0, j.A)((e) => e.pools.pricesApiState.chartStatus),
            n = (0, j.A)((e) => e.pools.pricesApiState.timeOption),
            l = (0, j.A)((e) => e.pools.pricesApiState.chartExpanded),
            c = (0, j.A)((e) => e.pools.pricesApiState.activityHidden),
            p = (0, j.A)((e) => e.pools.pricesApiState.tradesTokens),
            u = (0, j.A)((e) => e.pools.pricesApiState.refetchingCapped),
            m = (0, j.A)((e) => e.pools.pricesApiState.lastFetchEndTime),
            h = (0, j.A)((e) => e.pools.setChartTimeOption),
            f = (0, j.A)((e) => e.pools.setChartExpanded),
            y = (0, j.A)((e) => e.pools.fetchPricesApiCharts),
            g = (0, j.A)((e) => e.pools.fetchPricesApiActivity),
            A = (0, j.A)((e) => e.pools.fetchMorePricesApiCharts),
            w = (0, e0.l5)((e) => e.isMdUp),
            [x, b] = (0, o.useState)('chart'),
            [v, S] = (0, o.useState)([]),
            [k, C] = (0, o.useState)(0),
            [P, T] = (0, o.useState)([]),
            I = { expanded: 500, standard: 300 },
            R = (0, o.useMemo)(() => {
              let e = t.coins.slice(0, t.n_coins),
                a = (function (e, t) {
                  let a = [];
                  return (
                    !(function t(r, s) {
                      if (2 === s.length) {
                        a.push([...s]);
                        return;
                      }
                      for (let a = r; a < e.length; a++) s.push(e[a]), t(a + 1, s), s.pop();
                    })(0, []),
                    a
                  );
                })(e, 0),
                r = t.coins.slice(t.n_coins).map((t) => [t, e[0]]),
                s = [...a];
              return s.splice(0, 0, ...r), s;
            }, [t.coins, t.n_coins]),
            B = (0, o.useMemo)(
              () => ({
                start: +(0, eJ.Gw)(n, Date.now() / 1e3),
                end: Math.floor(Date.now() / 1e3),
              }),
              [n]
            ),
            E = (0, o.useMemo)(
              () =>
                '15m' === n
                  ? 15
                  : '30m' === n
                    ? 30
                    : '1h' === n
                      ? 1
                      : '4h' === n
                        ? 4
                        : '6h' === n
                          ? 6
                          : '12h' === n
                            ? 12
                            : '1d' === n
                              ? 1
                              : '7d' === n
                                ? 7
                                : 14,
              [n]
            ),
            G = (0, o.useMemo)(
              () =>
                '15m' === n || '30m' === n
                  ? 'minute'
                  : '1h' === n || '4h' === n || '6h' === n || '12h' === n
                    ? 'hour'
                    : 'day',
              [n]
            ),
            D = () => {
              y(e, k, t.address, E, G, B.end, B.start, R, P), g(e, t.address, R);
            };
          (0, o.useEffect)(() => {
            y(e, k, t.address, E, G, B.end, B.start, R, P);
          }, [e, R, t.address, E, B.end, B.start, y, P, k, G]);
          let F = (0, o.useCallback)(
            (a) => {
              let r = (0, eJ.yp)(n, a),
                s = (0, eJ.Gw)(n, r);
              A(e, k, t.address, E, G, +s, r, R, P);
            },
            [e, R, E, A, P, t.address, k, n, G]
          );
          (0, o.useEffect)(() => {
            S(
              0 !== s.length
                ? [
                    { label: (0, d.t)`LP Token (USD)` },
                    { label: (0, d.t)`LP Token (${t.coins[0].symbol})` },
                  ].concat(
                    R.map((e, t) => {
                      let a = P[t] ? e[1].symbol : e[0].symbol,
                        r = P[t] ? e[0].symbol : e[1].symbol;
                      return { label: `${r} / ${a}` };
                    })
                  )
                : []
            );
          }, [t.coins, R, P, s.length]),
            (0, o.useEffect)(() => {
              T(Array(R.length).fill(!1));
            }, [R.length]);
          let L = () => {
            T(P.map((e, t) => (t === k - 2 ? !P[k - 2] : P[k - 2])));
          };
          return l
            ? (0, r.jsxs)(e3, {
                activityHidden: c,
                children: [
                  (0, r.jsx)(e5, {
                    variant: 'secondary',
                    chartExpanded: l,
                    children: (0, r.jsx)(eQ.A, {
                      chartType: 'poolPage',
                      chartStatus: i,
                      chartHeight: I,
                      chartExpanded: l,
                      themeType: a,
                      ohlcData: s,
                      selectChartList: v,
                      selectedChartIndex: k,
                      setChartSelectedIndex: C,
                      timeOption: n,
                      setChartTimeOption: h,
                      refetchPricesData: D,
                      flipChart: L,
                      refetchingCapped: u,
                      fetchMoreChartData: F,
                      lastFetchEndTime: m,
                    }),
                  }),
                  (0, r.jsx)(e2, {
                    children: (0, r.jsx)(eY, {
                      chartExpanded: l,
                      coins: t.coins,
                      tradesTokens: p,
                      poolAddress: t.address,
                      chainId: e,
                      chartCombinations: R,
                    }),
                  }),
                ],
              })
            : (0, r.jsxs)(e5, {
                chartExpanded: l,
                children: [
                  (0, r.jsxs)(e6, {
                    children: [
                      (0, r.jsx)(e4, {
                        variant: 'text',
                        className: 'chart' === x ? 'active' : '',
                        onClick: () => b('chart'),
                        children: (0, d.t)`Chart`,
                      }),
                      (0, r.jsx)(e4, {
                        variant: 'text',
                        className: 'poolActivity' === x ? 'active' : '',
                        onClick: () => b('poolActivity'),
                        children: (0, d.t)`Pool Activity`,
                      }),
                      w &&
                        (0, r.jsxs)(e7, {
                          variant: 'text',
                          onClick: () => f(!l),
                          children: [
                            l ? 'Minimize' : 'Expand',
                            (0, r.jsx)(e8, {
                              name: l ? 'Minimize' : 'Maximize',
                              size: 16,
                              'aria-label': (0, d.t)`Expand chart`,
                            }),
                          ],
                        }),
                    ],
                  }),
                  t &&
                    'poolActivity' === x &&
                    (0, r.jsx)(eY, {
                      chartExpanded: l,
                      coins: t.coins,
                      tradesTokens: p,
                      poolAddress: t.address,
                      chainId: e,
                      chartCombinations: R,
                    }),
                  'chart' === x &&
                    (0, r.jsx)(eQ.A, {
                      chartType: 'poolPage',
                      chartStatus: i,
                      chartHeight: I,
                      chartExpanded: l,
                      themeType: a,
                      ohlcData: s,
                      selectChartList: v,
                      selectedChartIndex: k,
                      setChartSelectedIndex: C,
                      timeOption: n,
                      setChartTimeOption: h,
                      flipChart: L,
                      refetchPricesData: D,
                      refetchingCapped: u,
                      fetchMoreChartData: F,
                      lastFetchEndTime: m,
                    }),
                ],
              });
        };
      var te = a(2657),
        tt = a(35736),
        ta = a(25025),
        tr = a(39651);
      let ts = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-c4a8f763-0' })([
          'width:100%;display:grid;transition:200ms;grid-template-columns:1fr;min-height:14.6875rem;@media (min-width:75rem){grid-template-columns:1fr 0.7fr;}',
        ]),
        to = i.Ay.div.withConfig({ componentId: 'sc-c4a8f763-1' })([
          'display:flex;flex-direction:column;margin-bottom:var(--spacing-4);',
        ]),
        ti = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-c4a8f763-2' })(
          ['padding:1.5rem 1rem;@media (min-width:', 'rem){padding:1.5rem;}'],
          tr.fi.lg
        ),
        tn = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-c4a8f763-3' })([
          'display:flex;flex-direction:column;&:first-of-type{margin-top:var(--spacing-3);}',
        ]),
        tl = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-4' })([
          'margin:auto 0 auto auto;font-size:var(--font-size-2);font-weight:var(--bold);',
        ]),
        td = (0, i.Ay)(tt.G).withConfig({ componentId: 'sc-c4a8f763-5' })([
          'color:inherit;font-weight:500;text-decoration:none;display:flex;flex-direction:row;align-items:center;',
        ]),
        tc = i.Ay.div.withConfig({ componentId: 'sc-c4a8f763-6' })([
          'white-space:nowrap;display:flex;flex-direction:row;align-items:center;',
        ]),
        tp = (0, i.Ay)($.x).withConfig({ componentId: 'sc-c4a8f763-7' })([
          'margin-right:var(--spacing-1);',
        ]),
        tu = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-c4a8f763-8' })([
          'display:flex;flex-direction:column;margin:0 0 var(--spacing-2) var(--spacing-2);',
        ]),
        tm = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-9' })(['font-family:var(--font-mono);']),
        th = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-10' })([
          'margin-left:var(--spacing-2);font-size:var(--font-size-2);',
        ]),
        tf = (0, i.Ay)(tt.G).withConfig({ componentId: 'sc-c4a8f763-11' })([
          'margin:var(--spacing-1) 0 0 auto;font-size:var(--font-size-2);color:inherit;font-weight:var(--bold);',
        ]),
        ty = (0, i.Ay)(tt.G).withConfig({ componentId: 'sc-c4a8f763-12' })([
          'margin:var(--spacing-1) 0 0 auto;font-size:var(--font-size-2);color:inherit;font-weight:var(--semi-bold);',
        ]),
        tg = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-13' })([
          'margin:var(--spacing-1) 0 0 auto;font-size:var(--font-size-2);font-weight:var(--semi-bold);',
        ]),
        tA = i.Ay.div.withConfig({ componentId: 'sc-c4a8f763-14' })(
          [
            'display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-2) 0;border-bottom:',
            ';&:last-child{border:none;}&:first-of-type{margin-top:var(--spacing-3);padding-top:0;}',
          ],
          (e) => (e.noBorder ? '' : '1px solid var(--border-600)')
        ),
        tw = i.Ay.div.withConfig({ componentId: 'sc-c4a8f763-15' })(
          [
            'background-color:var(--box--secondary--content--background-color);row-gap:var(--spacing-3);display:flex;flex-direction:column;padding:1.5rem 1rem;@media (min-width:',
            'rem){padding:1.5rem;}',
          ],
          tr.fi.lg
        ),
        tx = (0, i.Ay)(w.v).withConfig({ componentId: 'sc-c4a8f763-16' })([
          'font-size:var(--font-size-2);',
        ]),
        tb = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-17' })([
          'font-weight:var(--semi-bold);font-size:var(--font-size-2);',
        ]),
        tv = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-18' })([
          'font-weight:var(--bold);font-size:var(--font-size-2);',
        ]),
        tS = (0, i.Ay)(tt.G).withConfig({ componentId: 'sc-c4a8f763-19' })([
          'margin:auto 0 0 auto;font-size:var(--font-size-2);font-weight:var(--bold);color:inherit;',
        ]),
        tk = i.Ay.div.withConfig({ componentId: 'sc-c4a8f763-20' })([
          'display:flex;flex-direction:column;',
        ]),
        tC = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-c4a8f763-21' })([
          'display:flex;flex-direction:column;',
        ]),
        tP = i.Ay.h3.withConfig({ componentId: 'sc-c4a8f763-22' })([
          'font-size:var(--font-size-1);text-transform:uppercase;font-weight:var(--bold);',
        ]),
        tj = i.Ay.h3.withConfig({ componentId: 'sc-c4a8f763-23' })([
          'font-size:var(--font-size-1);text-transform:uppercase;font-weight:var(--bold);margin-bottom:var(--spacing-2);',
        ]),
        tT = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-c4a8f763-24' })([
          'display:flex;margin-top:var(--spacing-1);',
        ]),
        tI = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-25' })([
          'padding-right:var(--spacing-2);font-weight:var(--semi-bold);font-size:var(--font-size-2);',
        ]),
        tR = i.Ay.p.withConfig({ componentId: 'sc-c4a8f763-26' })([
          'margin-left:auto;font-weight:var(--bold);font-size:var(--font-size-2);',
        ]),
        tB = (0, i.Ay)(ta.A).withConfig({ componentId: 'sc-c4a8f763-27' })([
          'font-weight:bold;text-transform:initial;',
        ]),
        tE = ({ pricesApi: e, poolData: t, rChainId: a }) => {
          let s;
          let i = t.pool.address,
            n = (0, j.A)((e) => e.pools.snapshotsMapper),
            l = (0, j.A)((e) => e.pools.basePoolsLoading),
            c = (0, j.A)((e) => e.pools.basePools),
            p = (0, j.A)((e) => e.pools.pricesApiPoolDataMapper),
            u = (0, j.A)((e) => e.networks.networks[a]),
            m = n[i],
            h = p[i],
            f = l ? [] : c[a],
            y = (e) => (0, g.ZV)(e / 1e8, { showAllFractionDigits: !0 }),
            A = (e) => (0, g.ZV)(e / 1e18, { showAllFractionDigits: !0 }),
            {
              gamma: x,
              A: b,
              future_A: v,
              future_A_time: S,
              initial_A: k,
              initial_A_time: C,
            } = t.parameters ?? {},
            P = (0, o.useMemo)(
              () => !!t?.pool?.wrappedCoins && Array.isArray(t.pool.wrappedCoins),
              [t?.pool?.wrappedCoins]
            ),
            T = (0, o.useMemo)(() => (S ? (0, g.Yq)(new Date(S), 'long') : null), [S]),
            I = (0, o.useMemo)(() => {
              if (C && k && S && v)
                return {
                  isFutureATimePassedToday: (0, ei.A)().isAfter(S, 'day'),
                  isFutureATimeToday: (0, ei.A)().isSame(S, 'day'),
                  isRampUp: Number(v) > Number(k),
                };
            }, [v, S, k, C]),
            R = (e) =>
              0 === e
                ? (0, d.t)`Standard`
                : 1 === e
                  ? (0, d.t)`Oracle`
                  : 2 === e
                    ? (0, d.t)`Rebasing`
                    : (0, d.t)`ERC4626`;
          return (0, r.jsxs)(ts, {
            variant: 'secondary',
            children: [
              (0, r.jsxs)(ti, {
                children: [
                  (0, r.jsxs)(to, {
                    children: [
                      (0, r.jsx)(tP, { children: (0, d.t)`Pool Info:` }),
                      (0, r.jsxs)(tA, {
                        children: [
                          (0, r.jsx)(tb, { children: (0, d.t)`Pool Type:` }),
                          (0, r.jsxs)(tv, {
                            children: [
                              ((e, a) => {
                                let r = t.pool.isCrypto,
                                  s = t.pool.isNg;
                                return t.pool.isLlamma
                                  ? 'Llamma'
                                  : r || s
                                    ? !r && s
                                      ? (0, d.t)`Stableswap-NG`
                                      : r && !s && 2 === a
                                        ? (0, d.t)`Two Coin Cryptoswap`
                                        : r && !s && 3 === a
                                          ? (0, d.t)`Tricrypto`
                                          : r && s && 2 === a
                                            ? (0, d.t)`Two Coin Cryptoswap-NG`
                                            : r && s && 3 === a
                                              ? (0, d.t)`Three Coin Cryptoswap-NG`
                                              : void 0
                                    : (0, d.t)`Stableswap`;
                              })(h.pool_type, h.coins.length),
                              h.metapool && `, ${(0, d.t)`Metapool`}`,
                              f.some((e) => e.pool === i) && `, ${(0, d.t)`Basepool`}`,
                            ],
                          }),
                        ],
                      }),
                      h.base_pool &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Basepool:` }),
                            (0, r.jsx)(tf, {
                              href: u.scanTokenPath(h.base_pool),
                              children: (0, W.Wr)(h.base_pool),
                            }),
                          ],
                        }),
                      (0, r.jsxs)(tA, {
                        children: [
                          (0, r.jsx)(tb, { children: (0, d.t)`Vyper Version:` }),
                          (0, r.jsx)(tv, { children: h.vyper_version }),
                        ],
                      }),
                      (0, r.jsxs)(tA, {
                        children: [
                          (0, r.jsx)(tb, { children: (0, d.t)`Registry:` }),
                          (0, r.jsx)(tS, {
                            href: u.scanTokenPath(h.registry),
                            children: (0, W.Wr)(h.registry),
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.pool.isNg &&
                    h.asset_types &&
                    (0, r.jsxs)(to, {
                      children: [
                        (0, r.jsx)(tP, { children: (0, d.t)`Coins:` }),
                        t.tokens.map((e, a) =>
                          (0, r.jsxs)(
                            tn,
                            {
                              children: [
                                (0, r.jsxs)(M.A, {
                                  flex: !0,
                                  children: [
                                    (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsx)(td, {
                                          href: u.scanTokenPath(t.tokenAddresses[a]),
                                          children: (0, r.jsxs)(tc, {
                                            children: [
                                              (0, r.jsx)(tp, {
                                                size: 'sm',
                                                blockchainId: u?.networkId ?? '',
                                                tooltip: e,
                                                address: t.tokenAddresses[a],
                                              }),
                                              (0, r.jsx)(tB, { children: e }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)(te.Bj, {
                                          size: 'medium',
                                          onClick: () => (0, W.lW)(t.tokenAddresses[a]),
                                          children: (0, r.jsx)(el.A, { name: 'Copy', size: 16 }),
                                        }),
                                      ],
                                    }),
                                    t.pool.isNg &&
                                      h.asset_types &&
                                      (0, r.jsx)(tl, { children: R(h.asset_types[a]) }),
                                  ],
                                }),
                                h &&
                                  1 === h.asset_types[a] &&
                                  (0, r.jsxs)(tu, {
                                    children: [
                                      (0, r.jsxs)(M.A, {
                                        flex: !0,
                                        children: [
                                          (0, r.jsx)(tm, { children: '├─' }),
                                          (0, r.jsx)(th, { children: (0, d.t)`Oracle Address:` }),
                                          (0, r.jsx)(ty, {
                                            href: u.scanTokenPath(h.oracles[a].oracle_address),
                                            children: (0, W.Wr)(h.oracles[a].oracle_address),
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)(M.A, {
                                        flex: !0,
                                        children: [
                                          (0, r.jsx)(tm, { children: '├─' }),
                                          (0, r.jsx)(th, { children: (0, d.t)`Function:` }),
                                          (0, r.jsx)(tg, { children: h.oracles[a].method }),
                                        ],
                                      }),
                                      (0, r.jsxs)(M.A, {
                                        flex: !0,
                                        children: [
                                          (0, r.jsx)(tm, { children: '└─' }),
                                          (0, r.jsx)(th, { children: (0, d.t)`Function ID:` }),
                                          (0, r.jsx)(tg, { children: h.oracles[a].method_id }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            },
                            `${e}-${a}`
                          )
                        ),
                      ],
                    }),
                  (0, r.jsxs)(to, {
                    children: [
                      (0, r.jsx)(tP, { children: (0, d.t)`Pool Parameters:` }),
                      e &&
                        null !== m.mid_fee &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Mid Fee:` }),
                            (0, r.jsx)(tv, { children: y(m.mid_fee) }),
                          ],
                        }),
                      e &&
                        null !== m.out_fee &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Out Fee:` }),
                            (0, r.jsx)(tv, { children: y(m.out_fee) }),
                          ],
                        }),
                      null !== m.a &&
                        (0, r.jsxs)(tA, {
                          noBorder: I && null !== I.isRampUp,
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`A:` }),
                            (0, r.jsx)(tv, {
                              children: (0, r.jsxs)(w.v, {
                                isBold: !0,
                                size: 'sm',
                                tooltip: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0,
                                    d.t)`Amplification coefficient chosen from fluctuation of prices around 1.`,
                                    I &&
                                      I?.isFutureATimePassedToday &&
                                      (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)('br', {}),
                                          ' ',
                                          (0,
                                          d.t)`Last change occurred between ${(0, ei.A)(C).format('ll')} and ${(0, ei.A)(S).format('ll')}, when A ramped from ${k} to ${v}.`,
                                        ],
                                      }),
                                  ],
                                }),
                                tooltipProps: { minWidth: '200px' },
                                children: [
                                  (0, g.ZV)(e ? m.a : b, { useGrouping: !1 }),
                                  (0, r.jsx)(te.m8, {
                                    name: 'InformationSquare',
                                    size: 16,
                                    className: 'svg-tooltip',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      I &&
                        !I.isFutureATimePassedToday &&
                        (0, r.jsxs)(tk, {
                          children: [
                            (0, r.jsxs)(M.A, {
                              flex: !0,
                              children: [
                                (0, r.jsx)(tm, { children: '├─' }),
                                (0, r.jsxs)(M.A, {
                                  margin: '0 0 0 var(--spacing-2)',
                                  flex: !0,
                                  flexJustifyContent: 'space-between',
                                  fillWidth: !0,
                                  children: [
                                    (0, r.jsx)(tb, {
                                      children: (0, d.t)`Ramping ${I.isRampUp ? 'up' : 'down'} A:`,
                                    }),
                                    (0, r.jsx)(tv, {
                                      children: (0, r.jsxs)(tx, {
                                        isBold: !0,
                                        size: 'md',
                                        tooltip: (0,
                                        d.t)`Slowly changing ${I.isRampUp ? 'up' : 'down'} A so that it doesn't negatively change virtual price growth of shares`,
                                        tooltipProps: { placement: 'bottom end' },
                                        children: [
                                          (0, g.ZV)(k, { useGrouping: !1 }),
                                          ' →',
                                          ' ',
                                          (0, g.ZV)(v, { useGrouping: !1 }),
                                          ' ',
                                          (0, r.jsx)(te.m8, {
                                            name: 'InformationSquare',
                                            size: 16,
                                            className: 'svg-tooltip',
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)(M.A, {
                              flex: !0,
                              children: [
                                (0, r.jsx)(tm, { children: '└─' }),
                                (0, r.jsxs)(M.A, {
                                  margin: '0 0 0 var(--spacing-2)',
                                  flex: !0,
                                  flexJustifyContent: 'space-between',
                                  fillWidth: !0,
                                  children: [
                                    (0, r.jsx)(tb, {
                                      children: (0,
                                      d.t)`Ramp ${I.isRampUp ? 'up' : 'down'} A ends on: `,
                                    }),
                                    (0, r.jsx)(tv, { children: T }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      e &&
                        null !== m.offpeg_fee_multiplier &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Off Peg Multiplier:` }),
                            (0, r.jsx)(tv, {
                              children:
                                ((s = m.offpeg_fee_multiplier),
                                (0, g.ZV)(s / 1e10, { showAllFractionDigits: !0 })),
                            }),
                          ],
                        }),
                      e &&
                        null !== m.gamma &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: 'Gamma:' }),
                            (0, r.jsx)(tv, { children: e ? A(m.gamma) : x }),
                          ],
                        }),
                      e &&
                        null !== m.allowed_extra_profit &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Allowed Extra Profit:` }),
                            (0, r.jsx)(tv, { children: A(m.allowed_extra_profit) }),
                          ],
                        }),
                      e &&
                        null !== m.fee_gamma &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Fee Gamma:` }),
                            (0, r.jsx)(tv, { children: A(m.fee_gamma) }),
                          ],
                        }),
                      e &&
                        null !== m.adjustment_step &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Adjustment Step:` }),
                            (0, r.jsx)(tv, { children: A(m.adjustment_step) }),
                          ],
                        }),
                      e &&
                        null !== m.ma_half_time &&
                        (0, r.jsxs)(tA, {
                          children: [
                            (0, r.jsx)(tb, { children: (0, d.t)`Moving Average Time:` }),
                            (0, r.jsx)(tv, {
                              children: (0, g.ZV)(m.ma_half_time, { useGrouping: !1 }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(tw, {
                children: [
                  !!t &&
                    P &&
                    Array.isArray(t.parameters.priceOracle) &&
                    (0, r.jsx)(tC, {
                      children: (0, r.jsx)(M.A, {
                        grid: !0,
                        children:
                          Array.isArray(t.parameters.priceOracle) &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(tj, { children: (0, d.t)`Price Oracle:` }),
                              t.parameters.priceOracle.map((e, a) => {
                                let s = t.pool.wrappedCoins[a + 1];
                                return (0, r.jsxs)(
                                  tT,
                                  {
                                    children: [
                                      (0, r.jsxs)(tI, { children: [s, ':'] }),
                                      (0, r.jsx)(tR, {
                                        children: (0, g.ZV)(e, { ...(0, g.Ho)(e, 10) }),
                                      }),
                                    ],
                                  },
                                  e
                                );
                              }),
                            ],
                          }),
                      }),
                    }),
                  !!t &&
                    P &&
                    Array.isArray(t.parameters.priceScale) &&
                    (0, r.jsxs)(tC, {
                      children: [
                        (0, r.jsx)(tj, { children: (0, d.t)`Price Scale:` }),
                        t.parameters.priceScale.map((e, a) => {
                          let s = t.pool.wrappedCoins[a + 1];
                          return (0, r.jsxs)(
                            tT,
                            {
                              children: [
                                (0, r.jsxs)(tI, { children: [s, ':'] }),
                                (0, r.jsx)(tR, { children: (0, g.ZV)(e, { ...(0, g.Ho)(e, 10) }) }),
                              ],
                            },
                            e
                          );
                        }),
                      ],
                    }),
                  (m.xcp_profit || m.xcp_profit_a) &&
                    e &&
                    (0, r.jsxs)(tC, {
                      children: [
                        null !== m.xcp_profit &&
                          (0, r.jsxs)(tT, {
                            children: [
                              (0, r.jsx)(tI, { children: (0, d.t)`Xcp Profit:` }),
                              (0, r.jsx)(tR, { children: A(m.xcp_profit) }),
                            ],
                          }),
                        null !== m.xcp_profit_a &&
                          (0, r.jsxs)(tT, {
                            children: [
                              (0, r.jsx)(tI, { children: (0, d.t)`Xcp Profit A:` }),
                              (0, r.jsx)(tR, { children: A(m.xcp_profit_a) }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
            ],
          });
        };
      var tG = a(59339),
        tD = a(23173);
      let tF = (0, i.Ay)(te.$7).withConfig({ componentId: 'sc-8602e3dd-0' })([
          'padding-top:var(--spacing-2);',
        ]),
        tL = (0, i.Ay)(tG.A).withConfig({ componentId: 'sc-8602e3dd-1' })([
          'align-items:baseline;color:inherit;display:inline-flex;grid-gap:var(--spacing-1);text-decoration:none;',
        ]),
        tK = (0, i.Ay)(tD.A).withConfig({ componentId: 'sc-8602e3dd-2' })(
          [
            'align-items:center;display:inline-flex;justify-content:right;min-height:var(--height-small);min-width:3.75rem;@media (min-width:',
            'rem){min-height:24px;}',
          ],
          g.fi.sm
        ),
        tO = (0, i.Ay)(ta.A).withConfig({ componentId: 'sc-8602e3dd-3' })([
          'font-weight:bold;text-transform:initial;',
        ]),
        tN = (0, i.Ay)(tG.A).withConfig({ componentId: 'sc-8602e3dd-4' })(['color:inherit;']),
        tM = ({
          cr: e,
          haveSameTokenName: t,
          network: a,
          token: s,
          tokenAddress: o,
          tokenLink: i,
          tokensMapper: n,
          handleCopyClick: l,
        }) =>
          (0, r.jsxs)(tF, {
            flex: !0,
            flexJustifyContent: 'space-between',
            isBorderBottom: !0,
            children: [
              (0, r.jsxs)(M.A, {
                flex: !0,
                flexAlignItems: 'center',
                gridGap: 1,
                children: [
                  (0, r.jsx)($.x, {
                    size: 'sm',
                    blockchainId: a?.networkId ?? '',
                    tooltip: s,
                    address: n[o]?.ethAddress || o,
                  }),
                  (0, r.jsxs)(M.A, {
                    grid: !0,
                    gridGap: 1,
                    children: [
                      (0, r.jsxs)(tL, {
                        $noStyles: !0,
                        href: a.scanTokenPath(o),
                        children: [
                          (0, r.jsx)(tO, { children: s }),
                          ' ',
                          t
                            ? (0, r.jsx)(tD.A, { opacity: 0.7, size: 'xs', children: (0, W.Wr)(o) })
                            : null,
                        ],
                      }),
                      (0, r.jsxs)(M.A, {
                        flex: !0,
                        flexAlignItems: 'center',
                        gridGap: 2,
                        children: [
                          (0, r.jsx)(tD.A, { opacity: 0.7, children: (0, g.vk)(e?.usdRate) }),
                          (0, r.jsx)(ef.Ay, {
                            onClick: () => l(o),
                            noWrap: !0,
                            tooltip: (0, d.t)`Copy address`,
                            children: (0, r.jsx)(el.A, { name: 'Copy', size: 16 }),
                          }),
                          i &&
                            (0, r.jsx)(tN, {
                              $noStyles: !0,
                              href: i,
                              children: (0, r.jsx)(y.A, {
                                noWrap: !0,
                                customIcon: (0, r.jsx)(el.A, { name: 'StoragePool', size: 16 }),
                                children: (0, d.t)`Visit pool`,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(M.A, {
                className: 'right',
                flex: !0,
                flexDirection: 'column',
                children: [
                  (0, r.jsxs)(tD.A, {
                    size: 'md',
                    isBold: !0,
                    children: [(0, g.ZV)(e?.balance, { defaultValue: '-' }), ' '],
                  }),
                  (0, r.jsx)(tK, {
                    opacity: 0.7,
                    children:
                      void 0 === e?.percentShareInPool || 'NaN' === e.percentShareInPool
                        ? '?%'
                        : (0, g.ZV)(e.percentShareInPool, {
                            style: 'percent',
                            ...(Number(e.percentShareInPool) > 0
                              ? { minimumIntegerDigits: 2 }
                              : {}),
                          }),
                  }),
                ],
              }),
            ],
          });
      var tV = a(21802),
        t$ = (function (e) {
          return (
            (e.fantomFactoryStableNg24 = '250-factory-stable-ng-24'),
            (e.fantomFactoryStableNg39 = '250-factory-stable-ng-39'),
            e
          );
        })(t$ || {});
      let tW = (e, { pool: t }) => {
          let a = t?.id,
            [r, s] = (0, o.useState)(null);
          return (
            (0, o.useEffect)(() => {
              if (!e && !a) return;
              let t = `${e}-${a}`;
              '250-factory-stable-ng-24' === t &&
                s({
                  '0x14f8e5851879a18e0fea77b5a17f15523262a99e': (0, tV.PE)(
                    'dex',
                    'ethereum',
                    `${tV.rN.PAGE_POOLS}/3pool/deposit`
                  ),
                  '0x2902257ba817e1436b93f9f959ed50b95560b7d5': (0, tV.PE)(
                    'dex',
                    'arbitrum',
                    `${tV.rN.PAGE_POOLS}/2pool/deposit`
                  ),
                  '0x740568006c07888216649632aace6620288c7078': (0, tV.PE)(
                    'dex',
                    'optimism',
                    `${tV.rN.PAGE_POOLS}/3pool/deposit`
                  ),
                  '0x9be1ae6175b106f26439cebaf2217d7815f684af': (0, tV.PE)(
                    'dex',
                    'avalanche',
                    `${tV.rN.PAGE_POOLS}/aave/deposit`
                  ),
                  '0x4636a4efba1c02917d0584505e47bb2d22afe359': (0, tV.PE)(
                    'dex',
                    'polygon',
                    `${tV.rN.PAGE_POOLS}/aave/deposit`
                  ),
                  '0xab72e7f7bcfe09a9105f24ffe45038f50f45ca5c': (0, tV.PE)(
                    'dex',
                    'bsc',
                    `${tV.rN.PAGE_POOLS}/factory-stable-ng-21/deposit`
                  ),
                  '0x904603366bc8acf881a35cd4c7e0d514f0477ffc': (0, tV.PE)(
                    'dex',
                    'base',
                    `${tV.rN.PAGE_POOLS}/factory-v2-1/deposit`
                  ),
                  '0x795b38c85d6f1524b434f14aa37c1c808c2bbd6b': (0, tV.PE)(
                    'dex',
                    'xdai',
                    `${tV.rN.PAGE_POOLS}/3pool/deposit`
                  ),
                }),
                '250-factory-stable-ng-39' === t &&
                  s({
                    '0x2dadf589f616876e21c8ba63f59af764479a422d': (0, tV.PE)(
                      'dex',
                      'ethereum',
                      `${tV.rN.PAGE_POOLS}/factory-crvusd-16/deposit`
                    ),
                    '0x636cc0ab717be347ff3acf9763afbaf7d2cf47a9': (0, tV.PE)(
                      'dex',
                      'arbitrum',
                      `${tV.rN.PAGE_POOLS}/factory-stable-ng-69/deposit`
                    ),
                    '0x513a766f7b4269590850d566b64916d691a96927': (0, tV.PE)(
                      'dex',
                      'optimism',
                      `${tV.rN.PAGE_POOLS}/factory-v2-63/deposit`
                    ),
                  });
            }, [e, a]),
            r
          );
        },
        tU = i.Ay.h3.withConfig({ componentId: 'sc-dad769b6-0' })([
          'margin-bottom:var(--spacing-2);',
        ]),
        t_ = (0, i.Ay)(w.v).withConfig({ componentId: 'sc-dad769b6-1' })([
          'padding:var(--spacing-2) 0;',
        ]),
        tz = ({ rChainId: e, rPoolId: t, tokensMapper: a, tvl: s }) => {
          let o = (0, j.A)((t) => t.networks.networks[e]),
            i = (0, j.A)((a) => a.storeCache.poolsMapper[e]?.[t]),
            n = (0, j.A)((a) => a.pools.poolsMapper[e]?.[t]),
            l = (0, j.A)((a) => a.pools.currencyReserves[(0, B.We)(e, t)]),
            c = n ?? i,
            p = tW(e, c);
          return (0, r.jsxs)('article', {
            children: [
              (0, r.jsx)(tU, { children: (0, d.t)`Currency reserves` }),
              c?.tokens.map((t, s) => {
                let i = c.tokenAddresses[s];
                return r.jsx(
                  tM,
                  {
                    cr: l?.tokens.find((e) => e.tokenAddress === i),
                    haveSameTokenName: c.tokensCountBy[t] > 1,
                    network: o,
                    rChainId: e,
                    tokensMapper: a,
                    token: t,
                    tokenAddress: i,
                    tokenLink: p?.[i],
                    handleCopyClick: W.lW,
                  },
                  `${t}-${s}`
                );
              }),
              (0, r.jsxs)(te.$7, {
                flex: !0,
                flexJustifyContent: 'space-between',
                children: [
                  (0, d.t)`USD total`,
                  (0, r.jsxs)(t_, {
                    size: 'md',
                    children: [
                      (0, g.ZV)(s?.value, g.hd.USD),
                      ' ',
                      (0, r.jsx)(y.A, {
                        placement: 'bottom end',
                        children: (0, d.t)`USD total balance updates every ~5 minute`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var tH = a(11905),
        tZ = a(45899),
        tq = a(31305),
        tY = a(84224);
      let tX = i.Ay.div.withConfig({ componentId: 'sc-6e2c7b5c-0' })([
          'display:flex;flex-direction:column;margin-top:1.5rem;',
        ]),
        tQ = ({ chainId: e, address: t, lpToken: a, poolDataCacheOrApi: o }) => {
          let {
              setCurrentPoolType: i,
              setSidechainGauge: n,
              setPoolAddress: l,
              setLpTokenAddress: c,
            } = (0, j.A)((e) => e.deployGauge),
            p = (0, s.useParams)(),
            { push: u } = (0, s.useRouter)();
          return (0, r.jsx)(tX, {
            children: (0, r.jsx)(tY.A, {
              title: (0, d.t)`Add Gauge`,
              onClick: () => {
                1 === e ? (n(!1), l(t)) : (n(!0), c(a)),
                  o.pool.isCrypto && o.pool.isNg && 2 === o.tokens.length
                    ? i(tZ.D9)
                    : o.pool.isCrypto && 2 === o.tokens.length
                      ? i(tZ.C$)
                      : o.pool.isCrypto && 3 === o.tokens.length
                        ? i(tZ.wb)
                        : o.pool.isNg && !o.pool.isCrypto
                          ? i(tZ.vD)
                          : o.pool.isNg || o.pool.isCrypto || i(tZ.KZ),
                  u((0, tq.Yn)(p, '/deploy-gauge'));
              },
            }),
          });
        },
        tJ = i.Ay.div.withConfig({ componentId: 'sc-8581ddea-0' })(
          ['', ''],
          ({ haveAction: e }) => {
            if (e)
              return `
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        width: 100%;
      `;
          }
        ),
        t0 = i.Ay.div.withConfig({ componentId: 'sc-8581ddea-1' })(
          ['', ' ', ''],
          ({ haveAction: e }) => {
            if (!e)
              return `
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      `;
          },
          ({ isBorderBottom: e }) => {
            if (e) return 'border-bottom: 1px solid var(--border-600);';
          }
        ),
        t1 = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-8581ddea-2' })(['width:100%;']),
        t3 = i.Ay.span.withConfig({ componentId: 'sc-8581ddea-3' })(['margin-right:0.5rem;']),
        t2 = (0, i.Ay)(tG.A).withConfig({ componentId: 'sc-8581ddea-4' })([
          'font-size:var(--font-size-2);font-weight:var(--font-weight--bold);color:inherit;svg{padding-top:0.3125rem;}',
        ]),
        t5 = ({
          address: e,
          rChainId: t,
          isLargeNumber: a,
          label: s,
          showBottomBorder: o,
          action: i,
        }) => {
          let n = (0, j.A)((e) => e.networks.networks[t]);
          return (0, r.jsxs)(tJ, {
            haveAction: !!i,
            children: [
              (0, r.jsx)(t0, {
                isBorderBottom: o,
                haveAction: !!i,
                children: a
                  ? (0, r.jsxs)(t1, {
                      flex: !0,
                      flexDirection: 'row',
                      children: [
                        (0, r.jsxs)(M.A, {
                          flex: !0,
                          flexDirection: 'column',
                          children: [
                            s,
                            (0, r.jsxs)(t2, {
                              href: n.scanAddressPath(e),
                              children: [
                                (0, W.Wr)(e),
                                (0, r.jsx)(el.A, { name: 'Launch', size: 16 }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)(te.Bj, {
                          size: 'medium',
                          onClick: () => (0, W.lW)(e),
                          children: (0, r.jsx)(el.A, { name: 'Copy', size: 16 }),
                        }),
                      ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(t3, { children: s }),
                        (0, r.jsxs)('span', {
                          children: [
                            (0, r.jsxs)(t2, {
                              href: n.scanAddressPath(e),
                              children: [
                                (0, W.Wr)(e),
                                (0, r.jsx)(el.A, { name: 'Launch', size: 16 }),
                              ],
                            }),
                            (0, r.jsx)(te.Bj, {
                              size: 'medium',
                              onClick: () => (0, W.lW)(e),
                              children: (0, r.jsx)(el.A, { name: 'Copy', size: 16 }),
                            }),
                          ],
                        }),
                      ],
                    }),
              }),
              i,
            ],
          });
        },
        t6 = i.Ay.article.withConfig({ componentId: 'sc-4134b53f-0' })([
          '.stats:last-of-type{border-bottom:none;}',
        ]),
        t4 = ({ rChainId: e, poolDataCacheOrApi: t }) => {
          let { address: a = '', lpToken: s = '', gauge: o } = t.pool,
            i = a === s,
            n = (0, B.$m)(o.address) ? o.address : '';
          return (0, r.jsxs)(t6, {
            children: [
              (0, r.jsx)('h3', { children: (0, d.t)`Contracts` }),
              a &&
                (0, r.jsx)(t5, {
                  address: a,
                  rChainId: e,
                  label: i ? (0, d.t)`Pool / Token` : (0, d.t)`Pool`,
                  showBottomBorder: !i || !!n,
                }),
              !i &&
                s &&
                (0, r.jsx)(t5, {
                  address: s,
                  rChainId: e,
                  label: (0, d.t)`Token`,
                  showBottomBorder: !!n,
                }),
              n &&
                (0, r.jsx)(t5, {
                  address: n,
                  rChainId: e,
                  label: (0, r.jsxs)('span', {
                    children: [
                      (0, d.t)`Gauge`,
                      ' ',
                      t.gauge.isKilled ? (0, r.jsx)(tH.A, { children: 'Inactive' }) : null,
                    ],
                  }),
                  showBottomBorder: !1,
                }),
              !n && (0, r.jsx)(tQ, { poolDataCacheOrApi: t, chainId: e, address: a, lpToken: s }),
            ],
          });
        };
      var t7 = a(59017);
      let t8 = ({ parameters: e }) => {
        let {
            A: t,
            initial_A: a,
            initial_A_time: s,
            future_A: i,
            future_A_time: n,
            virtualPrice: l,
          } = e ?? {},
          c = (0, o.useMemo)(() => {
            if (s && a && n && i)
              return {
                isFutureATimePassedToday: (0, ei.A)().isAfter(n, 'day'),
                isFutureATimeToday: (0, ei.A)().isSame(n, 'day'),
                isRampUp: Number(i) > Number(a),
              };
          }, [i, n, a, s]);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            l &&
              (0, r.jsxs)(t7.A, {
                children: [
                  (0, d.t)`A:`,
                  ' ',
                  (0, r.jsxs)(tD.A, {
                    isBold: !0,
                    size: 'md',
                    tooltip: (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0,
                        d.t)`Amplification coefficient chosen from fluctuation of prices around 1.`,
                        c &&
                          c?.isFutureATimePassedToday &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)('br', {}),
                              ' ',
                              (0,
                              d.t)`Last change occurred between ${(0, ei.A)(s).format('ll')} and ${(0, ei.A)(n).format('ll')}, when A ramped from ${a} to ${i}.`,
                            ],
                          }),
                      ],
                    }),
                    tooltipProps: { minWidth: '200px' },
                    children: [
                      (0, g.ZV)(t, { useGrouping: !1 }),
                      (0, r.jsx)(te.m8, {
                        name: 'InformationSquare',
                        size: 16,
                        className: 'svg-tooltip',
                      }),
                    ],
                  }),
                ],
              }),
            c &&
              !c.isFutureATimePassedToday &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(t7.A, {
                    children: [
                      (0, d.t)`Ramping A:`,
                      ' ',
                      (0, r.jsxs)(tD.A, {
                        isBold: !0,
                        size: 'md',
                        tooltip: (0,
                        d.t)`Slowly changing up A so that it doesn't negatively change virtual price growth of shares`,
                        children: [
                          (0, g.ZV)(a, { useGrouping: !1 }),
                          ' → ',
                          (0, g.ZV)(i, { useGrouping: !1 }),
                          ' ',
                          (0, r.jsx)(te.m8, {
                            name: 'InformationSquare',
                            size: 16,
                            className: 'svg-tooltip',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(t7.A, {
                    children: (0, r.jsxs)('strong', {
                      children: [(0, ei.A)(s).format('ll'), ' to ', (0, ei.A)(n).format('ll')],
                    }),
                  }),
                ],
              }),
          ],
        });
      };
      var t9 = a(62014);
      let ae = ({ adminFee: e }) =>
          (0, r.jsxs)(t9.q, {
            children: [
              (0, d.t)`DAO fee:`,
              ' ',
              e &&
                (0, r.jsxs)(w.v, {
                  isBold: !0,
                  size: 'md',
                  tooltip: (0,
                  d.t)`The total fee on each trade is split in two parts: one part goes to the pool’s Liquidity Providers, another part goes to the DAO (i.e. Curve veCRV holders)`,
                  tooltipProps: { placement: 'bottom end' },
                  children: [
                    (0, g.ZV)(e, { style: 'percent', maximumFractionDigits: 4 }),
                    (0, r.jsx)(te.m8, {
                      name: 'InformationSquare',
                      size: 16,
                      className: 'svg-tooltip',
                    }),
                  ],
                }),
            ],
          }),
        at = ({ adminFee: e, isEymaPools: t }) => {
          if (void 0 === e) return (0, r.jsx)(r.Fragment, {});
          if (t) {
            let t = +e / 2;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(ae, { adminFee: t }),
                (0, r.jsxs)(t9.q, {
                  children: [
                    (0, d.t)`EYWA fee:`,
                    ' ',
                    t &&
                      (0, r.jsx)(w.v, {
                        isBold: !0,
                        size: 'md',
                        children: (0, g.ZV)(t, { style: 'percent', ...(0, g.Ho)(t, 4) }),
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, r.jsx)(ae, { adminFee: e });
        };
      var aa = a(43428);
      let ar = ({ poolDataCacheOrApi: e }) => {
        let t = en(e);
        return (0, r.jsx)('article', {
          children: (0, r.jsxs)(aa.A, {
            listItemMargin: 'var(--spacing-1)',
            children: [
              (0, r.jsxs)(t7.A, {
                children: [
                  (0, d.t)`Total LP Tokens staked:`,
                  ' ',
                  (0, r.jsx)('strong', {
                    children:
                      'string' == typeof t?.gaugeTotalSupply
                        ? t.gaugeTotalSupply
                        : (0, g.ZV)(
                            t?.gaugeTotalSupply ? (0, W.p1)(Number(t.gaugeTotalSupply)) : void 0,
                            { notation: 'compact', defaultValue: '-' }
                          ),
                  }),
                ],
              }),
              (0, r.jsxs)(t7.A, {
                children: [
                  (0, d.t)`Staked percent`,
                  ':',
                  ' ',
                  (0, r.jsx)('strong', {
                    children:
                      'string' == typeof t?.totalStakedPercent
                        ? t.totalStakedPercent
                        : (0, g.ZV)(t?.totalStakedPercent, { style: 'percent', defaultValue: '-' }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var as = a(43852);
      let ao = i.Ay.h3.withConfig({ componentId: 'sc-41696e02-0' })([
          'margin-bottom:var(--spacing-1);',
        ]),
        ai = ({ parameters: e, poolData: t, poolDataCacheOrApi: a, routerParams: s }) => {
          let { rChainId: i, rPoolId: n } = s,
            { pricesApi: l } = (0, j.A)((e) => e.networks.networks[i]),
            c = (0, j.A)((e) => e.networks.networks[i]?.isLite),
            p = (0, j.A)((e) => e.pools.tvlMapper[i]?.[n]),
            u = (0, j.A)((e) => e.pools.volumeMapper[i]?.[n]),
            m = (0, o.useMemo)(
              () => !!t?.pool?.wrappedCoins && Array.isArray(t.pool.wrappedCoins),
              [t?.pool?.wrappedCoins]
            ),
            h = (0, o.useMemo)(
              () =>
                p?.value && u?.value
                  ? 0 == +p.value || 0 == +u.value
                    ? (0, g.ZV)(0, { style: 'percent', maximumFractionDigits: 0 })
                    : (0, g.ZV)((Number(u.value) / Number(p.value)) * 100, g.hd.PERCENT)
                  : '-',
              [p, u]
            ),
            { gamma: f, adminFee: y, fee: A } = e ?? {};
          return (0, r.jsxs)(r.Fragment, {
            children: [
              !c &&
                (0, r.jsx)('article', {
                  children: (0, r.jsxs)(t9.t, {
                    listItemMargin: 'var(--spacing-1)',
                    children: [
                      (0, r.jsxs)(t9.q, {
                        children: [
                          (0, d.t)`Daily USD volume:`,
                          ' ',
                          (0, r.jsx)('strong', {
                            title: u?.value ?? '-',
                            children: (0, g.ZV)(u?.value, {
                              notation: 'compact',
                              defaultValue: '-',
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)(t9.q, {
                        children: [
                          (0, d.t)`Liquidity utilization:`,
                          ' ',
                          (0, r.jsxs)(w.v, {
                            isBold: '-' !== h,
                            size: 'md',
                            tooltip: (0, d.t)`24h Volume/Liquidity ratio`,
                            tooltipProps: { placement: 'bottom end' },
                            children: [
                              h,
                              (0, r.jsx)(te.m8, {
                                name: 'InformationSquare',
                                size: 16,
                                className: 'svg-tooltip',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              (0, r.jsx)(ar, { poolDataCacheOrApi: a }),
              (0, r.jsx)('article', {
                children: (0, r.jsxs)(t9.t, {
                  listItemMargin: 'var(--spacing-1)',
                  children: [
                    (0, r.jsxs)(t9.q, {
                      children: [
                        (0, d.t)`Fee:`,
                        ' ',
                        (0, r.jsx)('strong', {
                          children: (0, g.ZV)(A, { style: 'percent', maximumFractionDigits: 4 }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(at, {
                      adminFee: y,
                      isEymaPools: 250 === i && a.pool.id.startsWith('factory-eywa'),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)('article', {
                children: (0, r.jsx)(t9.t, {
                  listItemMargin: 'var(--spacing-1)',
                  children: (0, r.jsxs)(t9.q, {
                    children: [
                      (0, d.t)`Virtual price:`,
                      ' ',
                      (0, r.jsxs)(w.v, {
                        isBold: e?.virtualPrice !== '',
                        size: 'md',
                        tooltip: (0, d.t)`Measures pool growth; this is not a dollar value`,
                        tooltipProps: { placement: 'bottom end' },
                        children: [
                          (0, g.ZV)(e?.virtualPrice, {
                            maximumFractionDigits: 8,
                            defaultValue: '-',
                          }),
                          (0, r.jsx)(te.m8, {
                            name: 'InformationSquare',
                            size: 16,
                            className: 'svg-tooltip',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              !!t &&
                m &&
                Array.isArray(e.priceOracle) &&
                !l &&
                (0, r.jsxs)('article', {
                  children: [
                    (0, r.jsx)(ao, { children: 'Price Data' }),
                    (0, r.jsx)(M.A, {
                      grid: !0,
                      children:
                        Array.isArray(e.priceOracle) &&
                        (0, r.jsx)(as.A, {
                          label: (0, d.t)`Price Oracle:`,
                          children: e.priceOracle.map((e, a) => {
                            let s = t.pool.wrappedCoins[a + 1];
                            return (0, r.jsxs)(
                              'strong',
                              { children: [s, ': ', (0, g.ZV)(e, { maximumFractionDigits: 10 })] },
                              e
                            );
                          }),
                        }),
                    }),
                  ],
                }),
              !!t &&
                m &&
                Array.isArray(e.priceScale) &&
                !l &&
                (0, r.jsx)('article', {
                  children: (0, r.jsx)(as.A, {
                    label: (0, d.t)`Price Scale:`,
                    children: e.priceScale.map((e, a) => {
                      let s = t.pool.wrappedCoins[a + 1];
                      return (0, r.jsxs)(
                        'strong',
                        { children: [s, ': ', (0, g.ZV)(e, { maximumFractionDigits: 10 })] },
                        e
                      );
                    }),
                  }),
                }),
              !l &&
                (0, r.jsxs)('article', {
                  children: [
                    (0, r.jsx)(ao, { children: (0, d.t)`Pool Parameters` }),
                    (0, r.jsxs)(t9.t, {
                      listItemMargin: 'var(--spacing-1)',
                      children: [
                        f &&
                          (0, r.jsxs)(t9.q, {
                            children: [
                              'Gamma: ',
                              (0, r.jsx)('strong', { children: (0, g.ZV)(f, { useGrouping: !1 }) }),
                            ],
                          }),
                        (0, r.jsx)(t8, { parameters: e }),
                      ],
                    }),
                  ],
                }),
              (0, r.jsx)('article', {
                children: (0, r.jsx)(t4, { rChainId: i, poolDataCacheOrApi: a }),
              }),
            ],
          });
        };
      var an = a(98330),
        al = a(39904),
        ad = a(70657),
        ac = a(55906),
        ap = a(90263),
        au = a(66748);
      let am = i.Ay.div.withConfig({ componentId: 'sc-cfdac952-0' })([
          'border:1px solid var(--border-600);padding:1rem;display:flex;flex-direction:column;grid-row-gap:var(--spacing-3);',
        ]),
        ah = i.Ay.h4.withConfig({ componentId: 'sc-cfdac952-1' })([
          'margin-bottom:var(--spacing-1);',
        ]),
        af = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-cfdac952-2' })([
          'display:flex;flex-direction:column;width:100%;align-content:center;',
        ]),
        ay = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-cfdac952-3' })([
          'text-transform:initial;svg{padding-top:0.3125rem;}',
        ]),
        ag = (0, i.Ay)(ef.Ay).withConfig({ componentId: 'sc-cfdac952-4' })(['']),
        aA = (0, i.Ay)(te.$7).withConfig({ componentId: 'sc-cfdac952-5' })([
          'padding:var(--spacing-1);',
        ]),
        aw = (0, i.Ay)(el.A).withConfig({ componentId: 'sc-cfdac952-6' })([
          'margin:auto auto auto var(--spacing-1);',
        ]),
        ax = (0, i.Ay)(te.fU).withConfig({ componentId: 'sc-cfdac952-7' })(['margin-left:auto;']),
        ab = (0, i.Ay)(tt.G).withConfig({ componentId: 'sc-cfdac952-8' })([
          'color:inherit;font-weight:500;text-decoration:underline;',
        ]),
        av = (0, i.Ay)(te.fU).withConfig({ componentId: 'sc-cfdac952-9' })([
          'margin:var(--spacing-3) var(--spacing-1) var(--spacing-2);font-weight:500;',
        ]),
        aS = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-cfdac952-10' })([
          'display:flex;flex-direction:row;justify-content:space-between;',
        ]),
        ak = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-cfdac952-11' })([
          'margin-top:var(--spacing-2);display:flex;flex-direction:column;',
        ]),
        aC = i.Ay.div.withConfig({ componentId: 'sc-cfdac952-12' })([
          'display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-start;gap:var(--spacing-2);@media (min-width:37.5rem){flex-direction:row;justify-content:space-between;align-items:center;}',
        ]),
        aP = ({ chainId: e, poolData: t, rewardsApy: a }) => {
          let { base: s, other: o } = a ?? {},
            { haveBase: i, haveOther: n, haveCrv: c } = (0, ap.ZF)(a ?? {}),
            p = (0, l.A)()[t.pool.address],
            { isLite: u, scanTokenPath: m } = (0, j.A)((t) => t.networks.networks[e]),
            h = [
              { label: (0, d.t)`Daily`, value: s?.day ?? '' },
              { label: (0, d.t)`Weekly`, value: s?.week ?? '' },
            ];
          return (!u && i) || t?.failedFetching24hOldVprice || c || n
            ? (0, r.jsxs)(am, {
                children: [
                  !u &&
                    (i || t?.failedFetching24hOldVprice) &&
                    (0, r.jsxs)(af, {
                      children: [
                        (0, r.jsxs)(M.A, {
                          flex: !0,
                          fillWidth: !0,
                          children: [
                            (0, r.jsx)(ah, { children: (0, d.t)`Base vAPY` }),
                            (0, r.jsx)(ag, {
                              placement: 'bottom',
                              tooltip: (0, d.t)`Variable APY based on today's trading activity.`,
                              children: (0, r.jsx)(aw, { name: 'InformationSquare', size: 16 }),
                            }),
                            (0, r.jsx)(ax, {
                              children: (0, r.jsx)(tt.G, {
                                $noStyles: !0,
                                href: 'https://resources.curve.finance/pools/calculating-yield/#base-vapy',
                                children: (0, d.t)`Learn more`,
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(ak, {
                          as: 'ul',
                          children: h.map(({ label: e, value: a }) =>
                            (0, r.jsxs)(
                              aS,
                              {
                                as: 'li',
                                grid: !0,
                                gridRowGap: 2,
                                padding: 'var(--spacing-1) var(--spacing-1) var(--spacing-2)',
                                children: [
                                  (0, r.jsx)(w.v, { size: 'md', children: e }),
                                  t?.failedFetching24hOldVprice
                                    ? (0, r.jsxs)('span', {
                                        children: [
                                          '-',
                                          (0, r.jsx)(y.A, { children: 'Not available currently' }),
                                        ],
                                      })
                                    : '' === a
                                      ? ''
                                      : +a > ac.l5
                                        ? (0, r.jsx)(al.A, { isBold: !0, showIcon: !0 })
                                        : (0, r.jsx)('strong', {
                                            title: a,
                                            children: (0, g.ZV)(a, g.hd.PERCENT),
                                          }),
                                ],
                              },
                              e
                            )
                          ),
                        }),
                      ],
                    }),
                  (c || n) &&
                    (0, r.jsxs)(af, {
                      children: [
                        (0, r.jsxs)(M.A, {
                          flex: !0,
                          fillWidth: !0,
                          children: [
                            (0, r.jsx)(ah, { children: (0, d.t)`Rewards tAPR` }),
                            (0, r.jsx)(ag, {
                              placement: 'bottom',
                              tooltip: (0,
                              d.t)`Token APR based on current prices of tokens and reward rates.`,
                              children: (0, r.jsx)(aw, { name: 'InformationSquare', size: 16 }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(M.A, {
                          margin: 'var(--spacing-2) 0 0 0',
                          children: [
                            c &&
                              (0, r.jsxs)(aA, {
                                children: [
                                  'CRV',
                                  (0, r.jsx)(au.A, {}),
                                  t &&
                                    (0, r.jsx)(ad.A, {
                                      isHighlight: !0,
                                      poolData: t,
                                      rewardsApy: a,
                                    }),
                                ],
                              }),
                            n &&
                              o?.map(({ apy: t, symbol: a, tokenAddress: s }) =>
                                r.jsxs(
                                  aA,
                                  {
                                    flex: !0,
                                    flexJustifyContent: 'space-between',
                                    padding: !0,
                                    children: [
                                      r.jsxs(M.A, {
                                        flex: !0,
                                        flexAlignItems: 'center',
                                        children: [
                                          r.jsx(ab, {
                                            href: e ? m(s) : '',
                                            children: r.jsxs(ay, {
                                              flex: !0,
                                              flexAlignItems: 'center',
                                              padding: 'var(--spacing-1) 0',
                                              children: [
                                                B.G_(a),
                                                ' ',
                                                r.jsx(el.A, { name: 'Launch', size: 16 }),
                                              ],
                                            }),
                                          }),
                                          r.jsx(te.Bj, {
                                            size: 'small',
                                            onClick: () => W.lW(s),
                                            children: r.jsx(el.A, { name: 'Copy', size: 16 }),
                                          }),
                                        ],
                                      }),
                                      r.jsxs(w.v, {
                                        isBold: !0,
                                        isNumber: !0,
                                        size: 'md',
                                        children: [g.ZV(t, g.hd.PERCENT), ' '],
                                      }),
                                    ],
                                  },
                                  a
                                )
                              ),
                          ],
                        }),
                        !u &&
                          (0, r.jsx)(av, {
                            children: (0, r.jsx)(tt.G, {
                              $noStyles: !0,
                              href: 'https://resources.curve.finance/reward-gauges/boosting-your-crv-rewards/',
                              children: (0, d.t)`Learn more about Boosting your CRV rewards`,
                            }),
                          }),
                      ],
                    }),
                  p &&
                    (0, r.jsxs)(aC, {
                      children: [
                        (0, r.jsx)('h4', { children: (0, d.t)`Additional external rewards` }),
                        (0, r.jsx)(an.A, { rewardItems: p }),
                      ],
                    }),
                ],
              })
            : null;
        },
        aj = i.Ay.div.withConfig({ componentId: 'sc-ca8cfb01-0' })([
          'display:grid;transition:200ms;grid-template-columns:1fr;grid-template-rows:25.6875rem 10rem auto auto;@media (min-width:75rem){grid-template-columns:1fr 18.75rem;grid-template-rows:25.6875rem 10rem 1fr;}',
        ]),
        aT = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-ca8cfb01-1' })([
          'grid-row:1 / 4;grid-column:1 / 2;',
        ]),
        aI = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-ca8cfb01-2' })(
          [
            'align-items:flex-start;display:grid;padding:1.5rem var(--spacing-narrow);@media (min-width:',
            'rem){padding:1.5rem var(--spacing-normal);}@media (min-width:',
            'rem){padding:1.5rem;}',
          ],
          tr.fi.sm,
          tr.fi.lg
        ),
        aR = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-ca8cfb01-3' })(
          [
            'padding:1.5rem 1rem;background-color:var(--box--secondary--content--background-color);grid-row:4 / 4;grid-column:1 / 1;> article:not(.last-of-type){margin-bottom:1.5rem;}@media (min-width:75rem){grid-row:1 / 4;grid-column:2 / 3;}@media (min-width:',
            'rem){height:100%;}',
          ],
          tr.fi.lg
        ),
        aB = ({
          curve: e,
          routerParams: t,
          poolAlert: a,
          poolData: i,
          poolDataCacheOrApi: n,
          tokensMapper: l,
        }) => {
          let c = (0, R.A)(i?.tokenAddressesAll ?? []),
            { rChainId: p, rPoolId: u } = t,
            m = (0, j.A)((e) => e.pools.rewardsApyMapper[p]?.[u]),
            h = (0, j.A)((e) => e.pools.tvlMapper[p]?.[u]),
            f = (0, j.A)((e) => e.pools.fetchPoolStats),
            y = (0, tq.Yn)((0, s.useParams)(), '/disclaimer');
          return (
            (0, o.useEffect)(() => {
              e && i && !i?.parameters.virtualPrice && f(e, i);
            }, [e, f, i]),
            (0, r.jsxs)(aj, {
              children: [
                (0, r.jsx)(aT, {
                  flex: !0,
                  flexColumn: !0,
                  children: (0, r.jsx)(aI, {
                    grid: !0,
                    children: (0, r.jsxs)(M.A, {
                      grid: !0,
                      gridRowGap: 3,
                      children: [
                        (0, r.jsx)(tz, { rChainId: p, rPoolId: u, tvl: h, tokensMapper: l }),
                        i && (0, r.jsx)(aP, { chainId: p, poolData: i, rewardsApy: m }),
                        (0, r.jsxs)(M.A, {
                          grid: !0,
                          gridRowGap: 2,
                          children: [
                            a &&
                              !a.isDisableDeposit &&
                              !a.isInformationOnlyAndShowInForm &&
                              (0, r.jsx)(S.A, { ...a, children: a.message }),
                            c &&
                              c.isInformationOnly &&
                              (0, r.jsx)(S.A, { ...c, children: c.message }),
                            'CRYPTO' === n.pool.referenceAsset &&
                              (0, r.jsxs)(S.A, {
                                alertType: 'info',
                                title: (0, d.t)`${n.pool.name} is a Cryptoswap pool`,
                                children: [
                                  (0,
                                  d.t)`Cryptoswap pools contain non pegged assets. Liquidity providers are exposed to all assets in the pools.`,
                                  ' ',
                                  (0, r.jsx)(tG.A, {
                                    $noStyles: !0,
                                    href: 'https://resources.curve.finance/pools/overview/',
                                    children: (0,
                                    d.t)`Click here to learn more about Cryptoswap pools`,
                                  }),
                                ],
                              }),
                            (0, r.jsx)(S.A, {
                              alertType: 'info',
                              flexAlignItems: 'center',
                              children: (0, r.jsx)(tt.E, {
                                $noStyles: !0,
                                href: y,
                                target: '_blank',
                                children: (0, d.t)`Risks of using ${n.pool.name}`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)(aR, {
                  children:
                    i?.parameters &&
                    (0, r.jsx)(ai, {
                      parameters: i.parameters,
                      poolData: i,
                      poolDataCacheOrApi: n,
                      routerParams: t,
                    }),
                }),
              ],
            })
          );
        };
      var aE = a(10541),
        aG = a.n(aE),
        aD = a(23780),
        aF = a.n(aD);
      let aL = { 'warning-exchange-rate-low': 'warning-exchange-rate-low' },
        aK = ({ errorKey: e, ...t }) => {
          let a = (0, o.useMemo)(() => {
            let t = {
              [aL['warning-exchange-rate-low']]: {
                message: (0, d.t)`Warning! Exchange rate is too low!`,
                alertType: 'error',
              },
            };
            return e ? (t[e] ?? { message: e }) : null;
          }, [e]);
          return a
            ? (0, r.jsx)(S.A, { ...t, alertType: a.alertType ?? 'warning', children: a.message })
            : null;
        };
      var aO = a(92741),
        aN = a(52362),
        aM = a(87081),
        aV = a(30163),
        a$ = a(83635),
        aW = a(4671),
        aU = a(84561),
        a_ = a(6153),
        az = a(95292),
        aH = a(95262);
      let aZ = (0, i.Ay)(V.Ay).withConfig({ componentId: 'sc-c15f7060-0' })([
          'padding-right:var(--spacing-1);',
        ]),
        aq = ({
          chainIdPoolId: e,
          curve: t,
          maxSlippage: a,
          poolAlert: s,
          poolData: i,
          poolDataCacheOrApi: n,
          routerParams: l,
          seed: c,
          tokensMapper: p,
          userPoolBalances: f,
          userPoolBalancesLoading: y,
        }) => {
          let A = (0, o.useRef)(!1),
            { chainId: w, signerAddress: x } = t || {},
            { rChainId: v } = l,
            k = (0, j.A)((e) => e.poolSwap.activeKey),
            C = (0, j.A)((e) => e.poolSwap.exchangeOutput[k] ?? aM.mN),
            P = (0, j.A)((e) => e.poolSwap.formEstGas[k] ?? aM.hL),
            I = (0, j.A)((e) => e.poolSwap.formStatus),
            R = (0, j.A)((e) => e.poolSwap.formValues),
            D = (0, j.A)((e) => e.hasRouter),
            F = (0, j.A)((e) => e.poolSwap.isMaxLoading),
            L = (0, e0.l5)((e) => e.isPageVisible),
            K = (0, j.A)((e) => e.usdRates.usdRatesMapper),
            $ = (0, j.A)((e) => e.user.fetchUserPoolInfo),
            W = (0, j.A)((e) => e.usdRates.fetchUsdRateByTokens),
            U = (0, j.A)((e) => e.poolSwap.fetchStepApprove),
            _ = (0, j.A)((e) => e.poolSwap.fetchStepSwap),
            z = (0, j.A)((e) => e.poolSwap.resetState),
            H = (0, j.A)((e) => e.poolSwap.setFormValues),
            Y = (0, j.A)((e) => e.pools.setPoolIsWrapped),
            X = (0, j.A)((e) => (w ? e.networks.networks[w] : null)),
            Q = C ? (0, aW.Oi)({ maxSlippage: a, ...C }) : null,
            [ea, er] = (0, o.useState)([]),
            [es, eo] = (0, o.useState)(!1),
            [ei, en] = (0, o.useState)(null),
            ed = i?.pool?.id,
            ec = !!x,
            ep = f?.[R.fromAddress],
            eu = f?.[R.toAddress],
            em = K[R.fromAddress],
            eh = K[R.toAddress],
            { selectList: ef, swapTokensMapper: ey } = (0, o.useMemo)(() => {
              let { selectList: e, swapTokensMapper: t } = (0, aM.co)(p, n);
              return { selectList: e.map((0, B.Ed)(X?.networkId)), swapTokensMapper: t };
            }, [n, p, X?.networkId]),
            eg = ef.find((e) => e.address.toLocaleLowerCase() == R.fromAddress),
            eA = ef.find((e) => e.address.toLocaleLowerCase() == R.toAddress),
            ew = (0, o.useCallback)(
              (e, r, s) => {
                eo(!1), en(null), H(t, n.pool.id, i, e, r, c.isSeed, s || a);
              },
              [H, t, n.pool.id, i, c.isSeed, a]
            ),
            ex = (0, o.useCallback)(
              async (e, t, a, s, o) => {
                let { fromAmount: i, fromToken: n, toToken: l } = s,
                  c = (0, d.t)`Please confirm swap ${i} ${n} for ${l} at max slippage ${o}%.`,
                  { dismiss: p } = (0, T.me)(c, 'pending'),
                  u = await _(e, t, a, s, o);
                A.current &&
                  u &&
                  u.hash &&
                  u.activeKey === k &&
                  X &&
                  en(
                    (0, r.jsx)(et.A, {
                      description: `Swapped ${i} ${n}.`,
                      txHash: X.scanTxPath(u.hash),
                      onClose: () => {
                        ew({}, null, null);
                      },
                    })
                  ),
                  'function' == typeof p && p();
              },
              [k, _, ew, X]
            ),
            eb = (0, o.useCallback)(
              (e, t, a, s, o, i, n, l, c, p, u, m) => {
                let h;
                let { formProcessing: f, formTypeCompleted: y, step: g } = i,
                  A = !m && !p && !i.error && !o.fromError && !o.toError && +o.fromAmount > 0,
                  w = i.isApproved || 'APPROVE' === i.formTypeCompleted,
                  x = 'SWAP' === y,
                  b = {
                    APPROVAL: {
                      key: 'APPROVAL',
                      status: (0, ee.XA)(w, 'APPROVAL' === g, A && !f),
                      type: 'action',
                      content: w ? (0, d.t)`Spending Approved` : (0, d.t)`Approve Spending`,
                      onClick: async () => {
                        let r = (0, d.t)`Please approve spending your ${o.fromToken}.`,
                          { dismiss: s } = (0, T.me)(r, 'pending');
                        await U(e, t, a.pool, o, u), 'function' == typeof s && s();
                      },
                    },
                    SWAP: {
                      key: 'SWAP',
                      status: (0, ee.XA)(x, 'SWAP' === g, i.isApproved && A),
                      type: 'action',
                      content: x ? (0, d.t)`Swap Complete` : (0, d.t)`Swap`,
                      ...(n.modal
                        ? {
                            modal: {
                              title: (0, d.t)`Warning!`,
                              content: (0, r.jsx)(G.A, {
                                ...n.modal,
                                confirmed: l,
                                setConfirmed: eo,
                              }),
                              cancelBtnProps: {
                                label: (0, d.t)`Cancel`,
                                onClick: () => {
                                  eo(!1);
                                },
                              },
                              isDismissable: !1,
                              primaryBtnProps: { onClick: () => ex(e, t, a, o, u), disabled: !l },
                              primaryBtnLabel: 'Swap anyway',
                            },
                          }
                        : { onClick: () => ex(e, t, a, o, u) }),
                    },
                  };
                return (
                  i.formProcessing || i.formTypeCompleted
                    ? c.map((e) => e.key)
                    : i.isApproved
                      ? ['SWAP']
                      : ['APPROVAL', 'SWAP']
                ).map((e) => b[e]);
              },
              [U, ex]
            ),
            ev = (0, o.useCallback)(() => {
              t && i && L && !I.formProcessing && !I.formTypeCompleted && ew({}, null, '');
            }, [t, I.formProcessing, I.formTypeCompleted, L, i, ew]);
          (0, o.useEffect)(
            () => (
              (A.current = !0),
              () => {
                A.current = !1;
              }
            ),
            []
          ),
            (0, o.useEffect)(() => {
              ed && z(i);
            }, [ed]),
            (0, o.useEffect)(() => {
              t && ed && ec && (aF()(ep) || aF()(eu)) && $(t, ed, !0);
            }, [w, ed, ec, ep, eu]),
            (0, o.useEffect)(() => {
              (R.fromAddress || R.toAddress) &&
                (R.fromAddress && aF()(em) && W(t, [R.fromAddress]),
                R.toAddress && aF()(eh) && W(t, [R.toAddress]));
            }, [t, R, em, eh]),
            (0, o.useEffect)(() => {
              w && ed && ew({}, null, null);
            }, [w, ed, x, c.isSeed]),
            (0, o.useEffect)(() => {
              ew({}, null, a);
            }, [a]),
            (0, o.useEffect)(() => {
              t && i && null !== c.isSeed && er(eb(k, t, i, P, R, I, C, es, ea, c.isSeed, a, y));
            }, [w, ed, es, C?.modal, P, I, R, a, c.isSeed, y]),
            (0, o.useEffect)(() => ev(), [L]),
            (0, az.A)(() => ev(), aH.oX['1m'], L);
          let eS = ec ? (0, ee.$g)(ea) : null,
            ek = null === c.isSeed || c.isSeed || I.formProcessing;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(Z, {
                children: [
                  (0, r.jsxs)('div', {
                    children: [
                      (0, r.jsxs)(M.A, {
                        grid: !0,
                        gridGap: 1,
                        children: [
                          (0, r.jsxs)(aZ, {
                            id: 'fromAmount',
                            grid: !0,
                            gridTemplateColumns: '1fr auto 38%',
                            inputVariant: R.fromError ? 'error' : void 0,
                            disabled: ek,
                            children: [
                              (0, r.jsx)(V.E5, {
                                id: 'inpFromAmount',
                                type: 'number',
                                labelProps: ec && {
                                  label: (0, d.t)`Avail.`,
                                  descriptionLoading: y,
                                  description: (0, g.ZV)(ep),
                                },
                                value: R.fromAmount,
                                onChange: (e) => {
                                  ew({ isFrom: !0, fromAmount: e, toAmount: '' }, null, null);
                                },
                              }),
                              (0, r.jsx)(V.xI, {
                                disabled: ek || F,
                                loading: F,
                                isNetworkToken: R.fromAddress.toLowerCase() === N.m8,
                                onClick: () => {
                                  ew({ isFrom: !0, fromAmount: '', toAmount: '' }, !0, null);
                                },
                              }),
                              (0, r.jsx)(a_.T, {
                                selectedToken: eg,
                                tokens: ef,
                                disabled: ek || 0 === ef.length,
                                showSearch: !1,
                                showManageList: !1,
                                compact: !0,
                                onToken: (e) => {
                                  let t = e.address,
                                    a = O()(R);
                                  t === R.toAddress &&
                                    ((a.toAddress = R.fromAddress),
                                    (a.toToken = ey[R.fromAddress].symbol)),
                                    (a.fromAddress = t),
                                    (a.fromToken = ey[t].symbol),
                                    R.isFrom || null === R.isFrom
                                      ? (a.toAmount = '')
                                      : (a.fromAmount = ''),
                                    ew(a, null, '');
                                },
                              }),
                            ],
                          }),
                          (0, r.jsx)(aN.A, { amount: R.fromAmount, usdRate: em }),
                          R.fromError &&
                            (0, r.jsx)(aO.A, {
                              size: 'xs',
                              isDarkBg: !0,
                              isError: !0,
                              children: (0, d.t)`Amount > wallet balance ${(0, g.ZV)(ep)}`,
                            }),
                        ],
                      }),
                      (0, r.jsx)(M.A, {
                        flex: !0,
                        flexJustifyContent: 'center',
                        children: (0, r.jsx)(aU.A, {
                          disabled: ek,
                          onClick: () => {
                            let e = O()(R);
                            (e.isFrom = !0),
                              (e.fromAmount = R.toAmount),
                              (e.fromToken = R.toToken),
                              (e.fromAddress = R.toAddress),
                              (e.toToken = R.fromToken),
                              (e.toAddress = R.fromAddress),
                              (e.toAmount = ''),
                              ew(e, null, '');
                          },
                          size: 'medium',
                          children: (0, r.jsx)(el.A, {
                            name: 'ArrowsVertical',
                            size: 24,
                            'aria-label': 'icon arrow vertical',
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    children: [
                      (0, r.jsxs)(aZ, {
                        id: 'toAmount',
                        inputVariant: R.toError ? 'error' : void 0,
                        disabled: aF()(D) || (!aF()(D) && !D) || ek,
                        grid: !0,
                        gridTemplateColumns: '1fr 38%',
                        children: [
                          (0, r.jsx)(V.E5, {
                            id: 'inpToAmount',
                            type: 'number',
                            labelProps: ec && {
                              label: (0, d.t)`Avail.`,
                              descriptionLoading: y,
                              description: (0, g.ZV)(eu),
                            },
                            value: R.toAmount,
                            onChange: (e) => {
                              ew({ isFrom: !1, toAmount: e, fromAmount: '' }, null, '');
                            },
                          }),
                          (0, r.jsx)(a_.T, {
                            selectedToken: eA,
                            tokens: ef,
                            disabled: ek || 0 === ef.length,
                            showSearch: !1,
                            showManageList: !1,
                            compact: !0,
                            onToken: (e) => {
                              let t = e.address,
                                a = O()(R);
                              t === R.fromAddress &&
                                ((a.fromAddress = R.toAddress),
                                (a.fromToken = ey[R.toAddress].symbol)),
                                (a.toAddress = t),
                                (a.toToken = ey[t].symbol),
                                R.isFrom || null === R.isFrom
                                  ? (a.toAmount = '')
                                  : (a.fromAmount = ''),
                                ew(a, null, '');
                            },
                          }),
                        ],
                      }),
                      (0, r.jsx)(aN.A, { amount: R.toAmount, usdRate: eh }),
                    ],
                  }),
                  n.hasWrapped &&
                    null !== R.isWrapped &&
                    (0, r.jsx)('div', {
                      children: (0, r.jsx)(q.A, {
                        isDisabled: ek || !i || X?.poolIsWrappedOnly[n.pool.id],
                        isSelected: R.isWrapped,
                        onChange: (e) => {
                          if (i) {
                            let t = i.tokenAddresses.findIndex((e) => e === R.fromAddress),
                              a = i.tokenAddresses.findIndex((e) => e === R.toAddress),
                              r = Y(i, e),
                              s = O()(R);
                            (s.isWrapped = e),
                              (s.fromToken = r.tokens[t]),
                              (s.fromAddress = r.tokenAddresses[t]),
                              (s.toToken = r.tokens[a]),
                              (s.toAddress = r.tokenAddresses[a]),
                              s.isFrom ? (s.toAmount = '') : (s.fromAmount = ''),
                              ew(s, null, '');
                          }
                        },
                        children: (0, d.t)`Swap Wrapped`,
                      }),
                    }),
                ],
              }),
              (0, r.jsxs)(M.A, {
                children: [
                  (0, r.jsx)(aV.A, { exchangeRates: C.exchangeRates, loading: C.loading }),
                  (0, r.jsx)(a$.A, {
                    loading: C.loading,
                    priceImpact: C.priceImpact,
                    isHighImpact: Q?.isHighImpact ?? null,
                  }),
                  ec &&
                    (0, r.jsx)(h.A, {
                      isDivider: !0,
                      chainId: v,
                      ...P,
                      stepProgress: eS && ea.length > 1 ? { active: eS, total: ea.length } : null,
                    }),
                  (0, r.jsx)(b.A, { maxSlippage: a, stateKey: e }),
                ],
              }),
              s &&
                s?.isInformationOnlyAndShowInForm &&
                (0, r.jsx)(S.A, { ...s, children: s.message }),
              (0, r.jsx)(m.A, {
                maxSlippage: a,
                usdAmount: aF()(eh) || aG()(eh) ? '' : (Number(R.toAmount) * Number(eh)).toString(),
              }),
              (0, r.jsx)(aK, { errorKey: I.warning }),
              (0, r.jsx)(u.A, {
                errorKey: I.error,
                handleBtnClose: () => {
                  ew({}, null, null);
                },
              }),
              R.toError
                ? (0, r.jsx)(S.A, {
                    alertType: 'error',
                    children: (0, d.t)`The entered amount exceeds the available currency reserves.`,
                  })
                : null,
              (0, r.jsxs)(E, {
                poolData: i,
                poolDataCacheOrApi: n,
                loading: !w || !ea.length || !c.loaded,
                routerParams: l,
                seed: c,
                userPoolBalances: f,
                children: [ei, (0, r.jsx)(J.A, { steps: ea })],
              }),
            ],
          });
        };
      var aY = a(78866),
        aX = a(49339);
      let aQ = (0, i.Ay)(as.A).withConfig({ componentId: 'sc-59544345-0' })(['margin:0;']),
        aJ = i.Ay.div.withConfig({ componentId: 'sc-59544345-1' })([
          'align-items:flex-start;display:grid;grid-template-columns:repeat(2,1fr);margin:1rem;margin-bottom:0.5rem;',
        ]),
        a0 = i.Ay.div.withConfig({ componentId: 'sc-59544345-2' })(['margin:1rem;']),
        a1 = i.Ay.div.withConfig({ componentId: 'sc-59544345-3' })([
          'padding-top:0;display:grid;grid-column-gap:var(--spacing-3);',
        ]),
        a3 = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-59544345-4' })([
          'padding:1rem;grid-template-columns:1fr auto;.stats{margin:0;}',
        ]),
        a2 = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-59544345-5' })([
          'position:relative;width:100%;background-color:var(--box--secondary--background-color);',
        ]),
        a5 = (0, i.Ay)(aX.Ay).withConfig({ componentId: 'sc-59544345-6' })([
          'tr:last-of-type{border-top:1px solid var(--tooltip--border-color);}td{padding:0.25rem 0;}',
        ]),
        a6 = ({
          className: e,
          curve: t,
          poolData: a,
          poolDataCacheOrApi: s,
          routerParams: i,
          tokensMapper: n,
          userPoolBalances: l,
        }) => {
          let { rChainId: c, rPoolId: p } = i,
            u = t && p ? (0, aY.df)(t, p) : '',
            m = (0, j.A)((e) => e.pools.rewardsApyMapper[c]?.[p]),
            h = (0, j.A)((e) => e.user.userCrvApy[u]),
            f = (0, j.A)((e) => e.user.userLiquidityUsd[u]),
            y = (0, j.A)((e) => e.user.userShare[u]),
            A = (0, j.A)((e) => e.user.userWithdrawAmounts[u] ?? []),
            x = 1 === c,
            b = m?.crv?.[0] !== 0,
            { rewardsNeedNudging: v, areCrvRewardsStuckInBridge: S } = a?.gauge.status || {},
            k = (0, o.useMemo)(
              () =>
                y?.lpShare && 0 !== Number(y.lpShare)
                  ? Number(y.lpShare) > 0.01
                    ? (0, g.ZV)(y.lpShare, g.hd.PERCENT)
                    : `< ${(0, g.ZV)(0.01, g.hd.PERCENT)}`
                  : (0, g.ZV)(0, g.hd.PERCENT),
              [y]
            ),
            C = (0, o.useMemo)(
              () => (s && !s.pool.isCrypto ? A.reduce((e, t) => (e += Number(t)), 0) : ''),
              [s, A]
            ),
            P = (0, o.useMemo)(
              () =>
                x && void 0 !== m?.crv?.[0] && h?.boostApy && h?.crvApy
                  ? (0, r.jsx)(a5, {
                      children: (0, r.jsxs)('tbody', {
                        children: [
                          (0, r.jsxs)('tr', {
                            children: [
                              (0, r.jsx)('td', {
                                className: 'right',
                                children: (0, g.ZV)(m.crv[0], g.hd.PERCENT),
                              }),
                              (0, r.jsxs)('td', {
                                children: ['\xa0(', (0, d.t)`min. CRV tAPR %`, ')'],
                              }),
                            ],
                          }),
                          (0, r.jsxs)('tr', {
                            children: [
                              (0, r.jsxs)('td', {
                                className: 'right',
                                children: ['x ', (0, g.ZV)(h.boostApy, g.hd.PERCENT)],
                              }),
                              (0, r.jsxs)('td', { children: ['\xa0(', (0, d.t)`your boost`, ')'] }),
                            ],
                          }),
                          (0, r.jsxs)('tr', {
                            children: [
                              (0, r.jsxs)('td', {
                                className: 'right',
                                children: ['= ', (0, g.ZV)(h.crvApy, g.hd.PERCENT)],
                              }),
                              (0, r.jsx)('td', { children: '%' }),
                            ],
                          }),
                        ],
                      }),
                    })
                  : '',
              [x, m?.crv, h?.boostApy, h?.crvApy]
            );
          return (0, r.jsxs)(a2, {
            className: e,
            children: [
              (0, r.jsxs)(a3, {
                children: [
                  (0, r.jsx)('h3', { children: (0, d.t)`Your position` }),
                  (0, r.jsxs)('span', {
                    children: [
                      (0, d.t)`Staked share:`,
                      ' ',
                      (0, r.jsx)('strong', { children: k }),
                      ' ',
                      (0, r.jsx)(w.v, { size: 'xs', children: (0, d.t)`of pool` }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(aJ, {
                children: [
                  (0, r.jsxs)(aQ, {
                    label: (0, d.t)`LP Tokens`,
                    children: [
                      (0, r.jsxs)('div', {
                        children: [
                          (0, d.t)`Staked:`,
                          ' ',
                          (0, r.jsx)('strong', {
                            children: (0, g.ZV)(l?.gauge, { defaultValue: '-' }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)('div', {
                        children: [
                          (0, d.t)`Unstaked:`,
                          ' ',
                          (0, r.jsx)('strong', {
                            children: (0, g.ZV)(l?.lpToken, { defaultValue: '-' }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (b || x) &&
                    (0, r.jsxs)('div', {
                      children: [
                        b && (v || S)
                          ? (0, r.jsxs)(w.v, {
                              size: 'md',
                              children: [
                                (0, d.t)`Your CRV Rewards tAPR:`,
                                ' ',
                                (0, r.jsx)(ad.A, { isHighlight: !1, poolData: a, rewardsApy: m }),
                              ],
                            })
                          : (0, r.jsxs)(w.v, {
                              size: 'md',
                              tooltip: P,
                              tooltipProps: { minWidth: '350px' },
                              children: [
                                (0, d.t)`Your CRV Rewards tAPR:`,
                                ' ',
                                h?.crvApy
                                  ? (0, r.jsx)('strong', {
                                      children: (0, g.ZV)(h.crvApy, g.hd.PERCENT),
                                    })
                                  : '-',
                              ],
                            }),
                        x &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)('br', {}),
                              (0, r.jsxs)(w.v, {
                                size: 'md',
                                children: [
                                  (0, d.t)`Current Boost:`,
                                  ' ',
                                  h?.boostApy
                                    ? (0, r.jsxs)('strong', {
                                        children: [
                                          (0, g.ZV)(h.boostApy, { maximumFractionDigits: 3 }),
                                          'x',
                                        ],
                                      })
                                    : '-',
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
              (0, r.jsx)(a1, {
                children: (0, r.jsxs)(a0, {
                  children: [
                    (0, r.jsx)(w.v, { size: 'md', children: (0, d.t)`Balanced withdraw amounts` }),
                    Array.isArray(s.tokenAddresses) &&
                      a?.tokenAddresses.map((e, t) => {
                        let s = a.tokens[t],
                          o = n[e];
                        return r.jsx(
                          as.A,
                          {
                            isOneLine: !0,
                            isBorderBottom: !0,
                            label:
                              o && a.tokensCountBy[s] > 1
                                ? r.jsxs('span', {
                                    children: [s, ' ', r.jsx(w.v, { children: W.Wr(o.address) })],
                                  })
                                : s,
                            children: r.jsx(w.v, {
                              as: 'strong',
                              size: 'md',
                              fontVariantNumeric: 'tabular-nums',
                              children: g.ZV(A[t], { defaultValue: '-' }),
                            }),
                          },
                          e
                        );
                      }),
                    !s.pool.isCrypto &&
                      (0, r.jsx)(as.A, {
                        isOneLine: !0,
                        isBorderBottom: !0,
                        label: `${s.tokens.join('+')}`,
                        children: (0, r.jsx)(w.v, {
                          as: 'strong',
                          size: 'md',
                          fontVariantNumeric: 'tabular-nums',
                          children: (0, g.ZV)(C),
                        }),
                      }),
                    (0, r.jsx)(as.A, {
                      isOneLine: !0,
                      label: (0, d.t)`USD balance`,
                      children: (0, r.jsx)(w.v, {
                        as: 'strong',
                        size: 'md',
                        fontVariantNumeric: 'tabular-nums',
                        children: (0, g.ZV)(f, { ...g.hd.USD, defaultValue: '-' }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      var a4 = a(21104);
      let a7 = i.Ay.div.withConfig({ componentId: 'sc-8607f4c1-0' })([
          'padding:0.5rem 0.7rem;box-shadow:inset 0.5px 0.5px 0 0.5px var(--box--primary--content--shadow-color);background-color:var(--box--primary--content--background-color);',
        ]),
        a8 = ({
          curve: e,
          poolData: t,
          poolDataCacheOrApi: a,
          routerParams: s,
          seed: i,
          userPoolBalances: n,
        }) => {
          let l = (0, o.useRef)(!1),
            { chainId: c, signerAddress: p } = e || {},
            m = (0, j.A)((e) => e.poolWithdraw.activeKey),
            h = (0, j.A)((e) => e.poolWithdraw.formStatus),
            f = (0, j.A)((e) => e.poolWithdraw.formValues),
            y = (0, j.A)((e) => e.poolWithdraw.fetchClaimable),
            A = (0, j.A)((e) => e.poolWithdraw.fetchStepClaim),
            w = (0, j.A)((e) => e.poolWithdraw.setStateByKey),
            x = (0, j.A)((e) => e.poolWithdraw.setFormValues),
            b = (0, j.A)((e) => e.poolWithdraw.resetState),
            v = (0, j.A)((e) => (c ? e.networks.networks[c] : null)),
            [k, C] = (0, o.useState)(!1),
            [P, I] = (0, o.useState)([]),
            [R, B] = (0, o.useState)(null),
            G = t?.pool?.id,
            D = !!p,
            { rewardsNeedNudging: F } = t?.gauge.status || {},
            L = +f.claimableCrv > 0,
            K = +f.claimableRewards.length > 0,
            N = (0, o.useCallback)(() => {
              B(null), C(!1), x('CLAIM', e, a.pool.id, t, {}, null, i.isSeed, '');
            }, [e, t, a.pool.id, i.isSeed, x]),
            V = (0, o.useCallback)(
              async (e, t, a, s, o, i) => {
                let n = (0, a4._x)(s, o, 'notify', i),
                  { dismiss: d } = (0, T.me)(n, 'pending'),
                  c = await A(e, t, a);
                if (l.current && c && c.hash && c.activeKey === e && v) {
                  let e = o.isClaimCrv
                      ? 'CRV'
                      : `${s.claimableRewards.map((e) => e.symbol).join(', ')} rewards`,
                    t = `Claimed ${e}`;
                  B((0, r.jsx)(et.A, { description: t, txHash: v.scanTxPath(c.hash) }));
                }
                'function' == typeof d && d();
              },
              [A, v]
            ),
            $ = (0, o.useCallback)(
              (e, t, a, r, s, o, i) => {
                let { isClaimCrv: n, step: l } = s,
                  c =
                    !i &&
                    !s.error &&
                    (+r.claimableCrv > 0 || r.claimableRewards.some((e) => +e.amount > 0)),
                  p = 'CLAIM_CRV' === s.formTypeCompleted,
                  u = 'CLAIM_REWARDS' === s.formTypeCompleted,
                  m = p || u,
                  h = {
                    CLAIM: {
                      key: 'CLAIM',
                      status: (0, ee.XA)(m, 'CLAIM' === l, c),
                      type: 'action',
                      content: m
                        ? p
                          ? (0, a4._x)({ ...r, claimableCrv: '1' }, s, 'success', o)
                          : (0, d.t)`Claim Rewards Complete`
                        : n
                          ? (0, a4._x)(r, s, 'claimCrvButton', o)
                          : (0, d.t)`Claim Rewards`,
                      onClick: () => {
                        V(e, t, a, r, s, o);
                      },
                    },
                  };
                return ['CLAIM'].map((e) => h[e]);
              },
              [V]
            );
          (0, o.useEffect)(
            () => (
              (l.current = !0),
              () => {
                l.current = !1;
              }
            ),
            []
          ),
            (0, o.useEffect)(() => {
              G && b(t, 'CLAIM');
            }, [G]),
            (0, o.useEffect)(() => {
              c && G && N();
            }, [c, G, p, i.isSeed]),
            (0, o.useEffect)(() => {
              c && t && D && y(m, c, t.pool);
            }, [c, G, p]),
            (0, o.useEffect)(() => {
              e && t && null !== i.isSeed && I($(m, e, t, f, h, F, i.isSeed));
            }, [c, t, k, p, f, h, F, i.isSeed]);
          let W = (a, r) => {
              if ((B(null), C(!1), e && t)) {
                let s = O()(a4.kR);
                (s.isApproved = h.isApproved),
                  (s.isClaimCrv = a),
                  (s.isClaimRewards = r),
                  w('formStatus', s),
                  V(m, e, t, f, s, F);
              }
            },
            U = F && !t?.gauge.isKilled;
          return (0, r.jsxs)(E, {
            poolData: t,
            poolDataCacheOrApi: a,
            loading: !c || !P.length || null === i.isSeed,
            routerParams: s,
            seed: i,
            userPoolBalances: n,
            children: [
              (0, r.jsx)(a7, {
                children:
                  L || K
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          L &&
                            (0, r.jsx)(as.A, {
                              isOneLine: !0,
                              isBorderBottom: f.claimableRewards.length > 0,
                              label: 'CRV',
                              children: (0, g.ZV)(f.claimableCrv),
                            }),
                          f.claimableRewards.map(({ token: e, symbol: t, amount: a }, s) =>
                            (0, r.jsx)(
                              as.A,
                              {
                                isOneLine: !0,
                                isBorderBottom: s !== f.claimableRewards.length - 1,
                                label: t,
                                children: (0, g.ZV)(a),
                              },
                              e
                            )
                          ),
                        ],
                      })
                    : (0, r.jsx)('p', { children: (0, d.t)`No claimable rewards` }),
              }),
              U &&
                (0, r.jsx)(S.A, {
                  alertType: 'info',
                  children: (0, r.jsx)(d.x, {
                    children:
                      'This pool has CRV rewards that aren’t streaming yet. Click ‘Claim CRV’ to resume reward streaming for you and everyone else!',
                  }),
                }),
              h.error && (0, r.jsx)(u.A, { errorKey: h.error, handleBtnClose: N }),
              R,
              h.isClaimRewards || h.isClaimCrv || '' !== h.formTypeCompleted
                ? (0, r.jsx)(J.A, { steps: P })
                : (0, r.jsxs)(M.A, {
                    grid: !0,
                    gridAutoFlow: 'column',
                    gridColumnGap: '3',
                    children: [
                      e &&
                        t &&
                        (L || U) &&
                        (0, r.jsx)(eX.A, {
                          disabled: !!h.error,
                          variant: 'filled',
                          size: 'large',
                          onClick: () => W(!0, !1),
                          children: (0, a4._x)(f, h, 'claimCrvButton', U),
                        }),
                      e &&
                        t &&
                        K &&
                        (0, r.jsx)(eX.A, {
                          disabled: !!h.error,
                          variant: 'filled',
                          size: 'large',
                          onClick: () => W(!1, !0),
                          children: (0, d.t)`Claim Rewards`,
                        }),
                    ],
                  }),
            ],
          });
        },
        a9 = ({
          curve: e,
          poolData: t,
          poolDataCacheOrApi: a,
          routerParams: s,
          seed: i,
          userPoolBalances: n,
        }) => {
          let l = (0, o.useRef)(!1),
            { chainId: c, signerAddress: p } = e || {},
            { rChainId: m } = s,
            f = (0, j.A)((e) => e.poolWithdraw.activeKey),
            y = (0, j.A)((e) => e.poolWithdraw.formEstGas[f] ?? rA),
            A = (0, j.A)((e) => e.poolWithdraw.formStatus),
            w = (0, j.A)((e) => e.poolWithdraw.formValues),
            x = (0, j.A)((e) => e.poolWithdraw.fetchStepUnstake),
            b = (0, j.A)((e) => e.poolWithdraw.setFormValues),
            v = (0, j.A)((e) => e.poolWithdraw.resetState),
            S = (0, j.A)((e) => (c ? e.networks.networks[c] : null)),
            [k, C] = (0, o.useState)([]),
            [P, I] = (0, o.useState)(null),
            R = t?.pool?.id,
            B = !!p,
            G = (0, o.useCallback)(
              (r) => {
                I(null), b('UNSTAKE', e, a.pool.id, t, r, null, i.isSeed, '');
              },
              [e, t, a.pool.id, i.isSeed, b]
            ),
            D = (0, o.useCallback)(
              async (e, t, a, s) => {
                let o = (0, d.t)`Please confirm unstaking of ${s.stakedLpToken} LP Tokens`,
                  { dismiss: i } = (0, T.me)(o, 'pending'),
                  n = await x(e, t, a, s);
                if (l.current && n && n.hash && n.activeKey === e && S) {
                  let e = (0, d.t)`Unstaked ${s.stakedLpToken} LP Tokens`;
                  I((0, r.jsx)(et.A, { description: e, txHash: S.scanTxPath(n.hash) }));
                }
                'function' == typeof i && i();
              },
              [x, S]
            ),
            F = (0, o.useCallback)(
              (e, t, a, r, s, o) => {
                let { step: i } = s,
                  n = !o && !s.error && +r.stakedLpToken > 0,
                  l = 'UNSTAKE' === s.formTypeCompleted,
                  c = {
                    UNSTAKE: {
                      key: 'UNSTAKE',
                      status: (0, ee.XA)(l, 'UNSTAKE' === i, n),
                      type: 'action',
                      content: l ? (0, d.t)`Unstake Complete` : (0, d.t)`Unstake`,
                      onClick: () => D(e, t, a, r),
                    },
                  };
                return ['UNSTAKE'].map((e) => c[e]);
              },
              [D]
            );
          (0, o.useEffect)(
            () => (
              (l.current = !0),
              () => {
                l.current = !1;
              }
            ),
            []
          ),
            (0, o.useEffect)(() => {
              R && v(t, 'UNSTAKE');
            }, [R]),
            (0, o.useEffect)(() => {
              c && R && G({});
            }, [c, R, i.isSeed, p]),
            (0, o.useEffect)(() => {
              e && t && null !== i.isSeed && C(F(f, e, t, w, A, i.isSeed));
            }, [c, R, p, w, A]);
          let L = null === i.isSeed || i.isSeed || A.formProcessing,
            K = n?.gauge;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(eu, {
                amount: w.stakedLpToken,
                balanceLoading: B && void 0 === n,
                balance: B ? (0, g.ZV)(K) : '',
                hasError: +w.stakedLpToken > +K,
                haveSigner: B,
                handleAmountChange: (e) => {
                  G({ stakedLpToken: e });
                },
                disabledMaxButton: L,
                disableInput: L,
                handleMaxClick: () => {
                  G({ stakedLpToken: n?.gauge ?? '0' });
                },
              }),
              B && (0, r.jsx)('div', { children: (0, r.jsx)(h.A, { chainId: m, ...y }) }),
              (0, r.jsxs)(E, {
                poolData: t,
                poolDataCacheOrApi: a,
                loading: !c || !k.length || !i.loaded,
                routerParams: s,
                seed: i,
                userPoolBalances: n,
                children: [
                  A.error && (0, r.jsx)(u.A, { errorKey: A.error, handleBtnClose: () => G({}) }),
                  P,
                  (0, r.jsx)(J.A, { steps: k }),
                ],
              }),
            ],
          });
        };
      var re = a(21035);
      let rt = (0, i.Ay)($.x).withConfig({ componentId: 'sc-248c467f-0' })([
          'margin-right:var(--spacing-1);',
        ]),
        ra = ({
          amounts: e,
          blockchainId: t,
          loading: a,
          poolDataCacheOrApi: s,
          tokens: o,
          tokensMapper: i,
          tokenAddresses: n,
        }) =>
          (0, r.jsx)(M.A, {
            as: 'ul',
            grid: !0,
            gridRowGap: 2,
            children: n.map((n, l) => {
              let d = o[l],
                c = s.tokensCountBy[d] > 1;
              return (0, r.jsxs)(
                M.A,
                {
                  as: 'li',
                  flex: !0,
                  flexAlignItems: 'center',
                  children: [
                    (0, r.jsx)(rt, { blockchainId: t, tooltip: d, address: i[n]?.ethAddress || n }),
                    ' ',
                    d,
                    c && (0, r.jsx)(w.v, { children: (0, W.Wr)(n) }),
                    (0, r.jsx)(au.A, {}),
                    a
                      ? (0, r.jsx)(re.A, { skeleton: [90, 20] })
                      : (0, r.jsx)(ta.A, {
                          smMaxWidth: '15rem',
                          children: (0, g.ZV)(e[l]?.value || '0'),
                        }),
                  ],
                },
                n
              );
            }),
          });
      var rr = a(56343);
      let rs = (0, i.Ay)(w.v).withConfig({ componentId: 'sc-140fca7a-0' })([
          'margin-left:var(--spacing-2);',
        ]),
        ro = (0, i.Ay)($.x).withConfig({ componentId: 'sc-140fca7a-1' })([
          'margin-right:var(--spacing-2);',
        ]),
        ri = (0, i.Ay)(rr.z6).withConfig({ componentId: 'sc-140fca7a-2' })([
          'grid-gap:var(--spacing-2);',
        ]),
        rn = ({
          amounts: e,
          haveSigner: t,
          blockchainId: a,
          loading: s,
          poolDataCacheOrApi: o,
          selectedTokenAddress: i,
          tokens: n,
          tokensMapper: l,
          tokenAddresses: d,
          handleChanged: c,
        }) =>
          (0, r.jsx)(ri, {
            'aria-label': 'Withdraw from one coin',
            value: i,
            onChange: (e) => {
              c({ token: n[d.findIndex((t) => t === e)], tokenAddress: e });
            },
            children: i
              ? d.map((t, i) => {
                  let d = n[i],
                    c = o?.tokensCountBy[d] > 1;
                  return (0, r.jsxs)(
                    rr.sx,
                    {
                      'aria-label': `Withdraw from ${d} for ${e[i]?.value ?? '0'}`,
                      value: t,
                      children: [
                        (0, r.jsx)(ro, {
                          size: 'sm',
                          blockchainId: a,
                          tooltip: d,
                          address: l[t]?.ethAddress || t,
                        }),
                        ' ',
                        d,
                        ' ',
                        c && (0, r.jsx)(rs, { children: (0, W.Wr)(t) }),
                        (0, r.jsx)(au.A, {}),
                        s
                          ? (0, r.jsx)(re.A, { skeleton: [90, 20] })
                          : (0, r.jsx)(ta.A, {
                              smMaxWidth: '15rem',
                              children: (0, g.ZV)(e[i]?.value || '0'),
                            }),
                      ],
                    },
                    t
                  );
                })
              : (0, r.jsx)(eO.V, { vSpacing: 4, children: !t && (0, r.jsx)(eO.A, {}) }),
          }),
        rl = i.Ay.div.withConfig({ componentId: 'sc-44d10d3e-0' })([
          'margin-top:var(--spacing-normal);',
        ]),
        rd = (0, i.Ay)(rr.z6).withConfig({ componentId: 'sc-44d10d3e-1' })(
          [
            'display:grid;font-size:var(--font-size-2);grid-auto-flow:row;justify-content:flex-start;',
            ' svg{margin-right:-5px;}label{margin-right:0.75rem;}',
          ],
          (0, tr.HP)('sm')((0, i.AH)(['grid-auto-flow:column;column-gap:0;']))
        ),
        rc = i.Ay.div.withConfig({ componentId: 'sc-44d10d3e-2' })([
          'padding:var(--spacing-narrow);background-color:var(--box--primary--content--background-color);box-shadow:inset 0.5px 0.5px 0 0.5px var(--box--primary--content--shadow-color);',
        ]),
        rp = ({
          chainIdPoolId: e,
          curve: t,
          blockchainId: a,
          maxSlippage: s,
          poolData: i,
          poolDataCacheOrApi: n,
          routerParams: l,
          seed: c,
          tokensMapper: p,
          userPoolBalances: f,
        }) => {
          let y = (0, o.useRef)(!1),
            { chainId: A, signerAddress: w } = t || {},
            { rChainId: v } = l,
            S = (0, j.A)((e) => e.poolWithdraw.activeKey),
            k = (0, j.A)((e) => e.poolWithdraw.formEstGas[S] ?? rA),
            C = (0, j.A)((e) => e.poolWithdraw.formStatus),
            P = (0, j.A)((e) => e.poolWithdraw.formValues),
            I = (0, j.A)((e) => e.poolWithdraw.slippage[S] ?? rw),
            R = (0, j.A)((e) => e.usdRates.usdRatesMapper),
            B = (0, j.A)((e) => e.poolWithdraw.fetchStepApprove),
            D = (0, j.A)((e) => e.poolWithdraw.fetchStepWithdraw),
            F = (0, j.A)((e) => e.poolWithdraw.setFormValues),
            L = (0, j.A)((e) => e.pools.setPoolIsWrapped),
            K = (0, j.A)((e) => e.poolWithdraw.resetState),
            N = (0, j.A)((e) => (A ? e.networks.networks[A] : null)),
            [V, $] = (0, o.useState)(!1),
            [W, _] = (0, o.useState)([]),
            [z, H] = (0, o.useState)(null),
            Y = i?.pool?.id,
            X = !!w,
            ea = (0, o.useCallback)(
              (e, a) => {
                H(null), $(!1), F('WITHDRAW', t, n.pool.id, i, e, null, c.isSeed, a || s);
              },
              [F, t, n.pool.id, i, c.isSeed, s]
            ),
            er = (0, o.useCallback)(
              async (e, t, a, r) => {
                let s = (0, d.t)`Please approve spending your LP Tokens.`,
                  { dismiss: o } = (0, T.me)(s, 'pending');
                await B(e, t, 'WITHDRAW', a, r), 'function' == typeof o && o();
              },
              [B]
            ),
            es = (0, o.useCallback)(
              async (e, t, a, s, o) => {
                let i = (0, Q.G)(s.amounts),
                  n = (0,
                  d.t)`Please confirm withdrawal of ${s.lpToken} LP Tokens at max ${o}% slippage.`,
                  { dismiss: l } = (0, T.me)(n, 'pending'),
                  c = await D(e, t, a, s, o);
                if (y.current && c && c.hash && c.activeKey === e && N) {
                  let e = (0, d.t)`Withdrew ${s.lpToken} LP Tokens for ${i}`;
                  H((0, r.jsx)(et.A, { description: e, txHash: N.scanTxPath(c.hash) }));
                }
                'function' == typeof l && l();
              },
              [D, N]
            ),
            eo = (0, o.useCallback)(
              (e, t, a, s, o, i, n, l, c, p) => {
                let u;
                let m = +s.lpToken > 0,
                  h = void 0 !== f && +f.lpToken > 0 && m && +f.lpToken >= +s.lpToken,
                  y = X && !p && h && !!s.selected && !o.error;
                y &&
                  ('token' === s.selected || 'imbalance' === s.selected) &&
                  (y = s.amounts.some((e) => +e.value > 0));
                let g = o.isApproved || 'APPROVE' === o.formTypeCompleted,
                  A = 'WITHDRAW' === o.formTypeCompleted,
                  w = {
                    APPROVAL: {
                      key: 'APPROVAL',
                      status: (0, ee.XA)(g, 'APPROVAL' === o.step, y),
                      type: 'action',
                      content: g ? (0, d.t)`Spending Approved` : (0, d.t)`Approve Spending`,
                      onClick: () => er(e, t, a.pool, s),
                    },
                    WITHDRAW: {
                      key: 'WITHDRAW',
                      status: (0, ee.XA)(A, 'WITHDRAW' === o.step, y && o.isApproved),
                      type: 'action',
                      content: A ? (0, d.t)`Withdraw Complete` : (0, d.t)`Withdraw`,
                      ...(n.isHighSlippage
                        ? {
                            modal: {
                              title: (0, d.t)`Warning!`,
                              content: (0, r.jsx)(G.A, {
                                slippage: !0,
                                value: n.slippage || 0,
                                confirmed: i,
                                transferType: 'Withdrawal',
                                setConfirmed: $,
                              }),
                              isDismissable: !1,
                              cancelBtnProps: { label: (0, d.t)`Cancel`, onClick: () => $(!1) },
                              primaryBtnProps: { onClick: () => es(e, t, a, s, c), disabled: !i },
                              primaryBtnLabel: 'Withdraw anyway',
                            },
                          }
                        : { onClick: () => es(e, t, a, s, c) }),
                    },
                  };
                return (
                  o.formProcessing || o.formTypeCompleted
                    ? l.map((e) => e.key)
                    : o.isApproved
                      ? ['WITHDRAW']
                      : ['APPROVAL', 'WITHDRAW']
                ).map((e) => w[e]);
              },
              [er, es, X, f]
            );
          (0, o.useEffect)(
            () => (
              (y.current = !0),
              () => {
                y.current = !1;
              }
            ),
            []
          ),
            (0, o.useEffect)(() => {
              Y && K(i, 'WITHDRAW');
            }, [Y]),
            (0, o.useEffect)(() => {
              A && Y && ea({}, null);
            }, [A, Y, w, c.isSeed]),
            (0, o.useEffect)(() => {
              s && ea({}, s);
            }, [s]),
            (0, o.useEffect)(() => {
              t && i && null !== c.isSeed && _(eo(S, t, i, P, C, V, I, W, s, c.isSeed));
            }, [A, Y, w, P, C, I.isHighSlippage, V, s, c.isSeed]);
          let ei = (0, o.useMemo)(() => {
              if ('token' === P.selected) {
                let e = P.amounts.find((e) => Number(e.value) > 0);
                if (e && !aF()(R[e.tokenAddress])) {
                  let { value: t, tokenAddress: a } = e,
                    r = R[a];
                  if (r && !aG()(r)) return (Number(r) * Number(t)).toString();
                }
              } else if ('lpToken' === P.selected || 'imbalance' === P.selected) {
                let e = P.amounts.filter((e) => Number(e.value) > 0),
                  t = 0;
                return (
                  e.forEach((e) => {
                    let a = R[e.tokenAddress];
                    a && !aG()(a) && (t += Number(e.value) * Number(a));
                  }),
                  t.toString()
                );
              }
              return '';
            }, [P, R]),
            en = 'lpToken' !== P.selected,
            el = X ? (0, ee.$g)(W) : null,
            ed = null === c.isSeed || c.isSeed || C.formProcessing,
            ec = f?.lpToken ?? '0';
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(eu, {
                amount: P.lpToken,
                balance: X ? (0, g.ZV)(ec) : '',
                balanceLoading: !!X && void 0 === f,
                hasError: X && +P.lpToken > +ec,
                haveSigner: X,
                handleAmountChange: (e) => {
                  ea({ amounts: (0, a4.Fd)(P), lpToken: e }, null);
                },
                disableInput: ed,
                disabledMaxButton: ed,
                handleMaxClick: () => {
                  ea({ amounts: (0, a4.Fd)(P), lpToken: f?.lpToken ?? '0' }, null);
                },
              }),
              (0, r.jsxs)(Z, {
                children: [
                  (0, r.jsxs)(rc, {
                    children: [
                      (0, r.jsxs)(rd, {
                        'aria-label': 'Customized amounts received',
                        isDisabled: ed,
                        value: P.selected,
                        onChange: (e) => {
                          'token' === e
                            ? ea(
                                {
                                  selected: e,
                                  selectedToken: P.selectedToken || n.tokens[0],
                                  selectedTokenAddress:
                                    P.selectedTokenAddress || n.tokenAddresses[0],
                                },
                                null
                              )
                            : 'lpToken' === e
                              ? ea({ amounts: (0, a4.Fd)(P), selected: e }, null)
                              : 'imbalance' === e && ea({ lpToken: '', selected: e }, null);
                        },
                        children: [
                          (0, r.jsx)(rr.sx, {
                            'aria-label': 'Withdraw from one coin',
                            value: 'token',
                            children: (0, d.t)`One coin`,
                          }),
                          (0, r.jsx)(rr.sx, {
                            'aria-label': 'Withdraw as balanced amounts',
                            value: 'lpToken',
                            children: (0, d.t)`Balanced`,
                          }),
                          !n.pool.isCrypto &&
                            (0, r.jsx)(rr.sx, {
                              'aria-label': 'Custom withdraw',
                              value: 'imbalance',
                              children: (0, d.t)`Custom`,
                            }),
                        ],
                      }),
                      P.selected &&
                        (0, r.jsxs)(rl, {
                          children: [
                            'token' === P.selected &&
                              (0, r.jsx)(rn, {
                                amounts: P.amounts,
                                haveSigner: X,
                                blockchainId: a,
                                loading: I.loading,
                                poolDataCacheOrApi: n,
                                selectedTokenAddress: P.selectedTokenAddress,
                                tokens: n.tokens,
                                tokensMapper: p,
                                tokenAddresses: n.tokenAddresses,
                                handleChanged: ({ token: e, tokenAddress: t }) => {
                                  ea({ selectedToken: e, selectedTokenAddress: t }, null);
                                },
                              }),
                            'lpToken' === P.selected &&
                              (0, r.jsx)(ra, {
                                amounts: P.amounts,
                                blockchainId: a,
                                loading: I.loading,
                                poolDataCacheOrApi: n,
                                tokens: n.tokens,
                                tokensMapper: p,
                                tokenAddresses: n.tokenAddresses,
                              }),
                            (0, r.jsx)(M.A, {
                              grid: !0,
                              gridRowGap: 'narrow',
                              children:
                                'imbalance' === P.selected &&
                                n.tokens.map((e, t) => {
                                  let s = n.tokenAddresses[t],
                                    o = P.amounts[t];
                                  return (0, r.jsx)(
                                    U,
                                    {
                                      idx: t,
                                      amount: o?.value || '',
                                      balance: '',
                                      balanceLoading: !1,
                                      disableInput: ed,
                                      disableMaxButton: ed,
                                      hasError: !1,
                                      haveSigner: X,
                                      haveSameTokenName: n?.tokensCountBy[e] > 1,
                                      isWithdraw: !0,
                                      blockchainId: a,
                                      token: e,
                                      tokenAddress: p[s]?.ethAddress || s,
                                      handleAmountChange: (e) => {
                                        let a = O()(P.amounts);
                                        (a[t].value = e), ea({ lpToken: '', amounts: a }, null);
                                      },
                                      hideMaxButton: !0,
                                      handleMaxClick: () => {},
                                    },
                                    s
                                  );
                                }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  n.hasWrapped &&
                    null !== P.isWrapped &&
                    (0, r.jsx)(q.A, {
                      isDisabled: !i || ed || N?.poolIsWrappedOnly[n.pool.id],
                      isSelected: P.isWrapped,
                      onChange: (e) => {
                        if (i) {
                          let t = L(i, e),
                            a = O()(P);
                          (a.isWrapped = e),
                            (a.amounts = t.tokens.map((e, a) => ({
                              token: e,
                              tokenAddress: t.tokenAddresses[a],
                              value: '',
                            }))),
                            ea(a, null);
                        }
                      },
                      children: (0, d.t)`Withdraw Wrapped`,
                    }),
                ],
              }),
              (0, r.jsxs)('div', {
                children: [
                  'lpToken' !== P.selected && (0, r.jsx)(x, { ...I }),
                  X &&
                    (0, r.jsx)(h.A, {
                      chainId: v,
                      isDivider: en,
                      ...k,
                      stepProgress: el && W.length > 1 ? { active: el, total: W.length } : null,
                    }),
                  (0, r.jsx)(b.A, {
                    customLabel: (0, d.t)`Additional slippage tolerance:`,
                    maxSlippage: s,
                    stateKey: e,
                  }),
                ],
              }),
              C.error && (0, r.jsx)(u.A, { errorKey: C.error, handleBtnClose: () => ea({}, null) }),
              (0, r.jsxs)(E, {
                poolData: i,
                poolDataCacheOrApi: n,
                loading: !A || !W.length || !c.loaded,
                routerParams: l,
                seed: c,
                userPoolBalances: f,
                children: [
                  (0, r.jsx)(m.A, { maxSlippage: s, usdAmount: ei }),
                  z,
                  (0, r.jsx)(J.A, { steps: W }),
                ],
              }),
            ],
          });
        },
        ru = (e) => {
          let t = (0, o.useRef)(null),
            { curve: a, poolData: s, poolDataCacheOrApi: i } = e,
            { signerAddress: n } = a ?? {},
            l = (0, j.A)((e) => e.poolWithdraw.formType),
            c = (0, j.A)((e) => e.poolWithdraw.resetState),
            p = (0, j.A)((e) => e.poolWithdraw.setStateByKey),
            [u, m] = (0, o.useState)([]),
            [h, f] = (0, o.useState)(0),
            y = (0, o.useMemo)(
              () => [
                { label: (0, d.t)`Withdraw`, formType: 'WITHDRAW' },
                { label: (0, d.t)`Unstake`, formType: 'UNSTAKE' },
                { label: (0, d.t)`Claim Rewards`, formType: 'CLAIM' },
              ],
              []
            );
          (0, o.useEffect)(() => {
            if (!t.current) return;
            let e = t.current,
              a = e.getBoundingClientRect();
            m(
              Array.from(e.childNodes)
                .filter((e) => e.classList.contains('tab'))
                .map((e, t) => {
                  let r = e.getBoundingClientRect(),
                    s = 0 == t ? 0 : r.left - a.left,
                    o = r.bottom - a.top;
                  return { left: s, width: r.width, top: o };
                })
            );
          }, [h]);
          let g = (0, o.useCallback)(
            (e) => {
              p('formType', y[e].formType), f(e);
            },
            [y, p]
          );
          return (
            (0, o.useEffect)(() => {
              s && (g(0), c(s, 'WITHDRAW'));
            }, [s?.pool?.id]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                ((0, B.$m)(i.pool.gauge.address) || i.gauge.isKilled) &&
                  (0, r.jsx)(H, {
                    activeIdx: h,
                    children: (0, r.jsx)(z.Gj, {
                      ref: t,
                      children: y.map(({ label: e, formType: t }, a) =>
                        'CLAIM' !== t || n
                          ? (0, r.jsx)(
                              z.NK,
                              {
                                tabLeft: u[a]?.left,
                                tabWidth: u[a]?.width,
                                tabTop: u[a]?.top,
                                onChange: () => g(a),
                                tabIdx: a,
                                label: e,
                              },
                              e
                            )
                          : null
                      ),
                    }),
                  }),
                'WITHDRAW' === l
                  ? (0, r.jsx)(rp, { ...e })
                  : 'UNSTAKE' === l
                    ? (0, r.jsx)(a9, { ...e })
                    : 'CLAIM' === l
                      ? (0, r.jsx)(a8, { ...e })
                      : null,
              ],
            })
          );
        };
      var rm = a(79614),
        rh = a(51458),
        rf = a(47386),
        ry = a(57854),
        rg = a(71895);
      let rA = { loading: !1, estimatedGas: null, error: null },
        rw = { loading: !1, slippage: null, isHighSlippage: !1, isBonus: !1, error: '' },
        rx = { isSeed: null, loaded: !1 },
        rb = (0, i.Ay)(ry.iK).withConfig({ componentId: 'sc-8e55c715-0' })(
          ['@media (min-width:', 'rem){', ';}'],
          tr.fi.md,
          ({ chartExpanded: e }) => e && 'margin-top: 1.5rem;'
        ),
        rv = (0, i.Ay)(tt.G).withConfig({ componentId: 'sc-8e55c715-1' })([
          'color:var(--nav--page--color);',
        ]),
        rS = (0, i.Ay)(ta.A).withConfig({ componentId: 'sc-8e55c715-2' })(
          [
            'color:var(--page--text-color);font-size:var(--font-size-5);@media (max-width:',
            'rem){max-width:7.125rem;}',
          ],
          tr.fi.xxs
        ),
        rk = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-8e55c715-3' })([
          'align-items:flex-start;display:grid;',
        ]),
        rC = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-8e55c715-4' })(
          [
            'padding:1.5rem 1rem;margin-bottom:var(--spacing-1);@media (min-width:',
            'rem){margin-top:0;margin-bottom:var(--spacing-3);}@media (min-width:',
            'rem){padding:1.5rem 1.5rem;}',
          ],
          tr.fi.sm,
          tr.fi.lg
        ),
        rP = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-8e55c715-5' })(
          ['margin:1.5rem 0 0;display:flex;@media (min-width:', 'rem){flex-direction:column;}'],
          tr.fi.md
        ),
        rj = (0, i.Ay)(M.A).withConfig({ componentId: 'sc-8e55c715-6' })(['']),
        rT = (0, i.Ay)(eX.A).withConfig({ componentId: 'sc-8e55c715-7' })([
          'margin:auto var(--spacing-3) auto auto;display:flex;align-content:center;color:inherit;font-size:var(--font-size-2);',
        ]),
        rI = (0, i.Ay)(el.A).withConfig({ componentId: 'sc-8e55c715-8' })([
          'margin-left:var(--spacing-1);',
        ]),
        rR = (e) => {
          let {
              params: t,
              curve: a,
              hasDepositAndStake: i,
              poolData: n,
              poolDataCacheOrApi: l,
              routerParams: c,
            } = e,
            { rChainId: u, rFormType: m, rPoolId: h } = c,
            { signerAddress: f } = a ?? {},
            { push: y } = (0, s.useRouter)(),
            g = (0, rm.A)(n?.pool.address, n?.hasVyperVulnerability),
            { tokensMapper: A } = (0, rh.A)(u),
            w = a && h ? (0, aY.df)(a, h) : '',
            x = (0, B.We)(u, h),
            b = (0, j.A)((e) => e.user.walletBalances[w]),
            v = (0, j.A)((e) => e.user.walletBalancesLoading),
            k = (0, j.A)((e) => e.pools.currencyReserves[x]),
            C = (0, e0.l5)((e) => e.isPageVisible),
            P = (0, e0.l5)((e) => e.isMdUp),
            T = (0, e0.l5)((e) => e.height),
            I = (0, j.A)((e) => e.user.fetchUserPoolInfo),
            R = (0, j.A)((e) => e.pools.fetchPoolStats),
            E = (0, j.A)((e) => e.pools.setPoolIsWrapped),
            G = (0, j.A)((e) => e.pools.pricesApiState.chartExpanded),
            D = (0, j.A)((e) => e.pools.setChartExpanded),
            F = (0, j.A)((e) => e.pools.pricesApiPoolsMapper),
            L = (0, j.A)((e) => e.pools.fetchPricesPoolSnapshots),
            K = (0, j.A)((e) => e.pools.snapshotsMapper),
            { initCampaignRewards: O, initiated: N } = (0, j.A)((e) => e.campaigns),
            V = (0, e1.nv)((e) => e.maxSlippage[x]),
            [$, W] = (0, o.useState)('pool'),
            [U, _] = (0, o.useState)(rx),
            { pool: z } = l,
            H = n?.pool?.id,
            {
              networkId: Z,
              isLite: q,
              pricesApi: Y,
              scanAddressPath: X,
            } = (0, j.A)((e) => e.networks.networks[u]),
            Q = n?.pool.address,
            J = n && F[n.pool.address],
            ee = (0, o.useMemo)(() => {
              let e = [{ label: (0, d.t)`Pool Details`, key: 'pool' }];
              return (
                f && e.push({ label: (0, d.t)`Your Details`, key: 'user' }),
                Y &&
                  J &&
                  K[n?.pool.address] &&
                  e.push({ label: (0, d.t)`Advanced`, key: 'advanced' }),
                e
              );
            }, [f, Y, J, K, n?.pool.address]),
            et = (0, o.useMemo)(() => V || (z ? (z.isCrypto ? '0.1' : '0.03') : ''), [V, z]),
            ea = (0, o.useMemo)(() => T.mainNav + T.globalAlert, [T]),
            er = (0, o.useCallback)(() => {
              C && a && n && R(a, n);
            }, [a, R, C, n]);
          (0, az.A)(() => er, aH.oX['5m'], C),
            (0, o.useEffect)(() => {
              a && Q && Y && void 0 !== F[Q] && !K[Q] && L(u, Q);
            }, [a, L, Q, Y, F, u, K]),
            (0, o.useEffect)(() => {
              if (!n || !k) return;
              let e = 0 === Number(k.total);
              e && n.hasWrapped && E(n, !0), _({ isSeed: e, loaded: !0 });
            }, [n?.pool?.id, k?.total]),
            (0, o.useEffect)(() => {
              a && H && f && I(a, H);
            }, [u, H, f, a, I]);
          let es = [
              { key: 'deposit', label: (0, d.t)`Deposit` },
              { key: 'withdraw', label: (0, d.t)`Withdraw/Claim` },
              { key: 'swap', label: (0, d.t)`Swap` },
            ],
            eo = (0, o.useCallback)(
              (e) => {
                y((0, tq.Yn)(t, `${ac.a$.PAGE_POOLS}/${t.pool}/${e}`));
              },
              [y, t]
            ),
            ei = () =>
              (0, r.jsx)(ry.kv, {
                children: (0, r.jsx)(rv, {
                  href: X(z.address),
                  children: (0, r.jsx)(rS, { as: 'h1', children: z?.name || '' }),
                }),
              });
          return (
            (0, o.useEffect)(() => {
              N || O(u);
            }, [O, u, N]),
            (0, o.useEffect)(() => {
              !P && G && D(!1);
            }, [G, P, D]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                !q &&
                  J &&
                  Y &&
                  G &&
                  (0, r.jsxs)(rP, {
                    children: [
                      (0, r.jsxs)(M.A, {
                        flex: !0,
                        padding: '0 0 0 var(--spacing-3)',
                        children: [
                          (0, r.jsx)(ei, {}),
                          (0, r.jsxs)(rT, {
                            variant: 'select',
                            onClick: () => D(!G),
                            children: [
                              G ? 'Minimize' : 'Expand',
                              (0, r.jsx)(rI, {
                                name: G ? 'Minimize' : 'Maximize',
                                size: 16,
                                'aria-label': (0, d.t)`Expand chart`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(rj, {
                        variant: 'secondary',
                        children: (0, r.jsx)(e9, { rChainId: u, pricesApiPoolData: J }),
                      }),
                    ],
                  }),
                (0, r.jsxs)(rb, {
                  isAdvanceMode: !0,
                  chartExpanded: G,
                  children: [
                    (0, r.jsxs)(ry.Pf, {
                      navHeight: ea,
                      className: 'grid-transfer',
                      children: [
                        !P && (0, r.jsx)(ei, {}),
                        (0, r.jsxs)(rf.jW, {
                          variant: 'primary',
                          shadowed: !0,
                          children: [
                            (0, r.jsx)(rf.Vp, {
                              formTypes: es,
                              activeFormKey: m || 'deposit',
                              handleClick: (e) => eo(e),
                            }),
                            (0, r.jsx)(rf.eZ, {
                              children:
                                'swap' === m
                                  ? (0, r.jsx)(r.Fragment, {
                                      children: g?.isDisableSwap
                                        ? (0, r.jsx)(S.A, { ...g, children: g.message })
                                        : (0, r.jsx)(aq, {
                                            ...e,
                                            chainIdPoolId: x,
                                            poolAlert: g,
                                            maxSlippage: et,
                                            seed: U,
                                            tokensMapper: A,
                                            userPoolBalances: b,
                                            userPoolBalancesLoading: v,
                                          }),
                                    })
                                  : 'deposit' === m
                                    ? (0, r.jsx)(eh, {
                                        ...e,
                                        chainIdPoolId: x,
                                        blockchainId: Z,
                                        hasDepositAndStake: i,
                                        poolAlert: g,
                                        maxSlippage: et,
                                        seed: U,
                                        tokensMapper: A,
                                        userPoolBalances: b,
                                        userPoolBalancesLoading: v,
                                      })
                                    : 'withdraw' === m
                                      ? (0, r.jsx)(ru, {
                                          ...e,
                                          chainIdPoolId: x,
                                          blockchainId: Z,
                                          poolAlert: g,
                                          maxSlippage: et,
                                          seed: U,
                                          tokensMapper: A,
                                          userPoolBalances: b,
                                          userPoolBalancesLoading: v,
                                        })
                                      : null,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(ry.As, {
                      children: [
                        P && !G && (0, r.jsx)(ei, {}),
                        Q && (0, r.jsx)(M.A, { children: (0, r.jsx)(p, { address: Q }) }),
                        !q &&
                          J &&
                          Y &&
                          !G &&
                          (0, r.jsx)(rC, {
                            variant: 'secondary',
                            children: (0, r.jsx)(e9, { rChainId: u, pricesApiPoolData: J }),
                          }),
                        (0, r.jsx)(ry.M8, {
                          children: (0, r.jsx)(rg.Ay, {
                            children: ee.map(({ key: e, label: t }) =>
                              (0, r.jsx)(
                                rg.oz,
                                {
                                  className: $ === e ? 'active' : '',
                                  variant: 'secondary',
                                  disabled: !a || !n,
                                  onClick: () => W(e),
                                  children: t,
                                },
                                e
                              )
                            ),
                          }),
                        }),
                        (0, r.jsxs)(ry.FP, {
                          variant: 'secondary',
                          children: [
                            'user' === $ &&
                              (0, r.jsx)(a6, {
                                curve: a,
                                poolData: n,
                                poolDataCacheOrApi: l,
                                routerParams: c,
                                tokensMapper: A,
                                userPoolBalances: b,
                              }),
                            'pool' === $ &&
                              (0, r.jsx)(rk, {
                                as: 'section',
                                className: a && n ? '' : 'loading',
                                grid: !0,
                                gridRowGap: '1rem',
                                variant: 'secondary',
                                children: (0, r.jsx)(aB, {
                                  curve: a,
                                  routerParams: c,
                                  poolData: n,
                                  poolDataCacheOrApi: l,
                                  poolAlert: g,
                                  tokensMapper: A,
                                }),
                              }),
                            'advanced' === $ &&
                              n &&
                              void 0 !== K[n.pool.address] &&
                              (0, r.jsx)(tE, { pricesApi: Y, poolData: n, rChainId: u }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    50722: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => c });
      var r = a(54568),
        s = a(7620),
        o = a(48341),
        i = a(77540),
        n = a(36074);
      let l = {
          'error-user-rejected-action': 'error-user-rejected-action',
          'error-est-gas-approval': 'error-est-gas-approval',
          'error-invalid-provider': 'error-invalid-provider',
          'error-pool-list': 'error-pool-list',
          'error-step-approve': 'error-step-approve',
          'error-step-deposit': 'error-step-deposit',
          'error-step-swap': 'error-step-swap',
          'error-step-stake': 'error-step-stake',
          'error-step-withdraw': 'error-step-withdraw',
          'error-step-unstake': 'error-step-unstake',
          'error-swap-exchange-and-output': 'error-swap-exchange-and-output',
          'error-swap-not-available': 'error-swap-not-available',
          'error-deposit-bonus': 'error-deposit-bonus',
          'error-deposit-balance': 'error-deposit-balance',
          'error-deposit-withdraw-expected': 'error-deposit-withdraw-expected',
          'error-deposit-withdraw-expected-bonus': 'error-deposit-withdraw-expected-bonus',
          'error-step-claim': 'error-step-claim',
          'error-get-claimable': 'error-get-claimable',
          'error-get-dashboard-data': 'error-get-dashboard-data',
          'error-get-gas': 'error-get-gas',
          'error-get-locked-crv-info': 'error-get-locked-crv-info',
          'error-step-claim-fees': 'error-step-claim-fees',
          'error-step-create-locked-crv': 'error-step-create-locked-crv',
          'error-step-locked-time': 'error-step-locked-time',
          'error-step-locked-crv': 'error-step-locked-crv',
          'error-withdraw-locked-crv': 'error-withdraw-locked-crv',
        },
        d = (0, o.Ay)(i.A).withConfig({ componentId: 'sc-64e970dc-0' })([
          "max-height:300px;overflow-y:auto;[data-tag='content']{align-items:flex-start;}",
        ]),
        c = ({ errorKey: e, ...t }) => {
          let a = (0, s.useMemo)(() => {
            let t = {
              [l['error-swap-not-available']]: (0, n.t)`Swap is not available.`,
              [l['error-swap-exchange-and-output']]: (0,
              n.t)`Unable to get exchange rates and swap amount`,
              [l['error-step-swap']]: (0, n.t)`Unable to swap`,
              [l['error-user-rejected-action']]: (0, n.t)`User rejected action`,
              [l['error-est-gas-approval']]: (0, n.t)`Unable to get approval or estimated gas`,
              [l['error-invalid-provider']]: (0, n.t)`Unable to find provider`,
              [l['error-step-approve']]: (0, n.t)`Unable to approve spending`,
              [l['error-deposit-withdraw-expected']]: (0, n.t)`Unable to get expected`,
              [l['error-deposit-withdraw-expected-bonus']]: (0,
              n.t)`Unable to get bonus or expected`,
              [l['error-pool-list']]: (0, n.t)`Unable to get pool list`,
              [l['error-get-dashboard-data']]: (0, n.t)`Unable to get dashboard data`,
              [l['error-get-gas']]: (0, n.t)`Unable to get gas price`,
              [l['error-step-deposit']]: (0, n.t)`Unable to deposit`,
              [l['error-deposit-bonus']]: (0, n.t)`Unable to get bonus`,
              [l['error-step-stake']]: (0, n.t)`Unable to stake`,
              [l['error-deposit-balance']]: (0, n.t)`Unable to get balanced amounts`,
              [l['error-get-claimable']]: (0, n.t)`Unable to get claimable amounts`,
              [l['error-step-withdraw']]: (0, n.t)`Unable to withdraw`,
              [l['error-step-unstake']]: (0, n.t)`Unable to unstake`,
              [l['error-step-claim']]: (0, n.t)`Unable to claim`,
              [l['error-step-claim-fees']]: (0, n.t)`Unable to claim veCRV 3pool LP`,
              [l['error-get-locked-crv-info']]: (0, n.t)`Unable to get locked CRV info`,
              [l['error-step-create-locked-crv']]: (0, n.t)`Unable to create locked CRV`,
              [l['error-step-locked-crv']]: (0, n.t)`Unable to lock crv`,
              [l['error-step-locked-time']]: (0, n.t)`Unable to lock date`,
              [l['error-withdraw-locked-crv']]: (0, n.t)`Unable to withdraw locked CRV`,
            };
            return e ? (t[e] ?? e) : '';
          }, [e]);
          return a ? (0, r.jsx)(d, { ...t, alertType: 'error', children: a }) : null;
        };
    },
    51426: (e, t, a) => {
      'use strict';
      a.d(t, { Ay: () => T, tv: () => I });
      var r = a(96844),
        s = a(80101),
        o = a.n(s),
        i = a(96230),
        n = a.n(i),
        l = a(7834),
        d = a.n(l),
        c = a(10541),
        p = a.n(c),
        u = a(81981),
        m = a(74143),
        h = a(84017),
        f = a(40038),
        y = a(14815),
        g = a(88411),
        A = a(76635),
        w = a(59369),
        x = a.n(w),
        b = a(1030),
        v = a(38071);
      let S = (e) => e?.isPlain || e?.isFake,
        k = (e, t, a) => {
          let r = t.poolIsWrappedOnly[e.id],
            s = e.wrappedCoins.map((t, a) => t || (0, v.Wr)(e.wrappedCoinAddresses[a])),
            o = r
              ? s
              : e.underlyingCoins.map((t, a) => t || (0, v.Wr)(e.underlyingCoinAddresses[a])),
            i = o.map((e) => e.toLowerCase()),
            l = r ? s : [...o, ...s],
            d = r ? e.wrappedCoinAddresses : e.underlyingCoinAddresses,
            c = r
              ? e.wrappedCoinAddresses
              : [...e.underlyingCoinAddresses, ...e.wrappedCoinAddresses],
            p = r ? e.wrappedDecimals : [...e.underlyingDecimals, ...e.wrappedDecimals],
            u = n()(o);
          return {
            pool: e,
            chainId: t.chainId,
            curvefiUrl: '',
            currenciesReserves: null,
            parameters: a?.parameters
              ? a.parameters
              : {
                  A: '',
                  adminFee: '',
                  fee: '',
                  future_A: void 0,
                  future_A_time: void 0,
                  gamma: void 0,
                  initial_A: void 0,
                  initial_A_time: void 0,
                  lpTokenSupply: '',
                  virtualPrice: '',
                },
            hasVyperVulnerability: e.hasVyperVulnerability(),
            hasWrapped: r ?? !S(e),
            isWrapped: r ?? !1,
            tokenAddressesAll: c,
            tokenDecimalsAll: p,
            tokenAddresses: d,
            tokens: o,
            tokensCountBy: u,
            tokensAll: l,
            tokensLowercase: i,
            failedFetching24hOldVprice: !1,
            gauge: { status: null, isKilled: null },
          };
        };
      async function C(e, t, a, r = {}, s) {
        let { getPool: o } = e,
          { orgUIPath: i } = a,
          n = t.reduce(
            (e, t) => {
              let n = o(t),
                l = k(n, a, r[t]);
              return (
                (l.failedFetching24hOldVprice = s?.[n.address] ?? !1),
                (l.curvefiUrl = (0, h.gv)(t, i)),
                (e.poolsMapper[t] = l),
                (e.poolsMapperCache[t] = x()(l, [
                  'hasWrapped',
                  'gauge',
                  'tokens',
                  'tokensCountBy',
                  'tokensAll',
                  'tokensLowercase',
                  'tokenAddresses',
                  'tokenAddressesAll',
                  'pool.id',
                  'pool.name',
                  'pool.address',
                  'pool.gauge.address',
                  'pool.lpToken',
                  'pool.implementation',
                  'pool.isCrypto',
                  'pool.isFactory',
                  'pool.isLending',
                  'pool.referenceAsset',
                  'pool.isNg',
                ])),
                e
              );
            },
            { poolsMapper: {}, poolsMapperCache: {} }
          );
        return (
          await f.PromisePool.for(Object.values(n.poolsMapper)).process(async ({ pool: e }) => {
            let [t, a] = await Promise.allSettled([e.gaugeStatus(), e.isGaugeKilled()]),
              r = (0, h.Rm)(t) || null,
              s = (0, h.Rm)(a) || null;
            (n.poolsMapper[e.id].gauge = { status: r, isKilled: s }),
              (n.poolsMapperCache[e.id].gauge = { status: r, isKilled: s }),
              (r?.rewardsNeedNudging || r?.areCrvRewardsStuckInBridge) &&
                (0, b.Rm)(
                  'rewardsNeedNudging, areCrvRewardsStuckInBridge',
                  e.id,
                  r.rewardsNeedNudging,
                  r.areCrvRewardsStuckInBridge
                );
          }),
          n
        );
      }
      let P = 'pools',
        j = {
          poolsMapper: {},
          poolsLoading: {},
          basePools: {},
          basePoolsLoading: !0,
          haveAllPools: {},
          currencyReserves: {},
          rewardsApyMapper: {},
          stakedMapper: {},
          tvlMapper: {},
          volumeMapper: {},
          pricesApiPoolsMapper: {},
          pricesApiPoolDataMapper: {},
          snapshotsMapper: {},
          pricesApiState: {
            chartOhlcData: [],
            tradesTokens: [],
            tradeEventsData: [],
            liquidityEventsData: [],
            timeOption: '1d',
            chartExpanded: !1,
            activityHidden: !1,
            chartStatus: 'LOADING',
            refetchingCapped: !1,
            lastFetchEndTime: 0,
            activityStatus: 'LOADING',
          },
          error: '',
        },
        T = (e, t) => ({
          [P]: {
            ...j,
            fetchPoolsTvl: async (e, a) => {
              let {
                  storeCache: r,
                  networks: { networks: s },
                } = t(),
                { tvlMapper: o } = t()[P];
              (0, A.Rm)('fetchPoolsTvl', e.chainId, a.length);
              let i = e.chainId,
                { results: n } = await f.PromisePool.for(a)
                  .withConcurrency(10)
                  .process(async (e) => {
                    let t = await m.A.pool.getTvl(e.pool, s[i]);
                    return [t.poolId, t];
                  }),
                l = { ...o[i], ...Object.fromEntries(n) };
              t()[P].setStateByActiveKey('tvlMapper', i.toString(), l),
                r.setTvlVolumeMapper('tvlMapper', i, l);
            },
            fetchPoolsVolume: async (e, a) => {
              let {
                  storeCache: r,
                  [P]: { volumeMapper: s, ...o },
                  networks: { networks: i },
                } = t(),
                { getVolume: n } = m.A.pool;
              if (i[e].isLite) {
                o.setStateByActiveKey('volumeMapper', e.toString(), {});
                return;
              }
              (0, A.Rm)('fetchPoolsVolume', e, a.length);
              let { results: l } = await f.PromisePool.for(a)
                  .withConcurrency(10)
                  .process(async ({ pool: t }) => {
                    let a = await n(t, i[e]);
                    return [a.poolId, a];
                  }),
                d = { ...s[e], ...Object.fromEntries(l) };
              o.setStateByActiveKey('volumeMapper', e.toString(), d),
                r.setTvlVolumeMapper('volumeMapper', e, d);
            },
            fetchPools: async (a, s, o) => {
              let {
                  pools: i,
                  storeCache: n,
                  userBalances: l,
                  tokens: d,
                  [P]: { poolsMapper: c },
                  networks: p,
                } = t(),
                { chainId: m } = a,
                { isLite: h } = p.networks[m],
                f = p.nativeToken[m];
              try {
                e(
                  (0, r.Ay)((e) => {
                    (e.pools.error = ''), (e.pools.poolsLoading[m] = !0);
                  })
                );
                let { poolsMapper: t, poolsMapperCache: y } = await C(
                    a,
                    s,
                    p.networks[m],
                    c[m] ?? {},
                    o
                  ),
                  g = Object.entries(t).map(([e, t]) => t);
                e(
                  (0, r.Ay)((e) => {
                    (e.pools.poolsMapper[m] = t),
                      (e.tokens.tokensNameMapper[m] = {
                        ...(f && { [f.address]: f.symbol, [f.wrappedAddress]: f.wrappedSymbol }),
                        ...(function (e) {
                          let t = {};
                          for (let a in e) {
                            let {
                                underlyingCoinAddresses: r,
                                underlyingCoins: s,
                                wrappedCoinAddresses: o,
                                wrappedCoins: i,
                                id: n,
                                lpToken: l,
                              } = e[a].pool,
                              d = [...s, ...i];
                            [...r, ...o].map((e, a) => {
                              t[e] = d[a];
                            }),
                              l !== u.Xd && (t[l] = `${n} LP`);
                          }
                          return t;
                        })(g),
                      }),
                      (e.pools.haveAllPools[m] = !0),
                      (e.pools.poolsLoading[m] = !1);
                  })
                ),
                  n.setStateByActiveKey('poolsMapper', m.toString(), y);
                let A = s.map((e) => t[e]);
                if (!A.length) return { poolsMapper: t, poolDatas: A };
                await (h
                  ? i.fetchPoolsTvl(a, A)
                  : Promise.all([i.fetchPoolsTvl(a, A), i.fetchPoolsVolume(m, A)]));
                let w = await d.setTokensMapper(m, A);
                return (
                  a.signerAddress && l.fetchUserBalancesByTokens(a, w),
                  { poolsMapper: t, poolDatas: A }
                );
              } catch (t) {
                console.error(t),
                  e(
                    (0, r.Ay)((e) => {
                      (e.pools.error =
                        'Unable to load pool list, please refresh or try again later.'),
                        (e.pools.poolsLoading[m] = !1);
                    })
                  );
              }
            },
            fetchNewPool: async (e, a) => {
              await Promise.allSettled([
                e.factory.fetchNewPools(),
                e.cryptoFactory.fetchNewPools(),
                e.twocryptoFactory.fetchNewPools(),
                e.tricryptoFactory.fetchNewPools(),
                e.stableNgFactory.fetchNewPools(),
              ]);
              let r = await t()[P].fetchPools(e, [a], null);
              return r?.poolsMapper?.[a];
            },
            fetchBasePools: async (t) => {
              let a = t.chainId;
              if (!t.isNoRPC) {
                e(
                  (0, r.Ay)((e) => {
                    e.pools.basePoolsLoading = !0;
                  })
                );
                try {
                  let s = await t.getBasePools();
                  e(
                    (0, r.Ay)((e) => {
                      (e.pools.basePools[a] = s), (e.pools.basePoolsLoading = !1);
                    })
                  );
                } catch (t) {
                  e(
                    (0, r.Ay)((e) => {
                      e.pools.basePoolsLoading = !1;
                    })
                  ),
                    console.error(t);
                }
              }
            },
            fetchPoolCurrenciesReserves: async (e, a) => {
              let { usdRates: r } = t(),
                { ...s } = t()[P],
                { chainId: o } = e,
                { pool: i, isWrapped: n, tokens: l, tokenAddresses: d } = a,
                [c, u] = await Promise.all([
                  m.A.pool.poolBalances(i, n),
                  r.fetchUsdRateByTokens(e, d, !0),
                ]),
                { balances: f } = c,
                y = !f?.length || f.every((e) => 0 == +e),
                g = [],
                A = 0,
                w = 0;
              for (let e in d) {
                let t = d[e],
                  a = u[t] ?? 0,
                  r = p()(a),
                  s = Number(f?.[e]),
                  o = y || !(+a > 0) || r ? 0 : s * a;
                (A += s), (w += o);
                let i = {
                  token: l[e],
                  tokenAddress: t,
                  balance: s,
                  balanceUsd: o,
                  usdRate: a,
                  percentShareInPool: '',
                };
                g.push(i);
              }
              g.map(
                (e) => (
                  y
                    ? (e.percentShareInPool = '0')
                    : a.pool.isCrypto && p()(e.usdRate)
                      ? (e.percentShareInPool = 'NaN')
                      : a.pool.isCrypto
                        ? (e.percentShareInPool = ((e.balanceUsd / w) * 100).toFixed(2))
                        : (e.percentShareInPool = ((e.balance / A) * 100).toFixed(2)),
                  e
                )
              );
              let x = { poolId: i.id, tokens: g, total: A.toString(), totalUsd: w.toString() };
              s.setStateByActiveKey('currencyReserves', (0, h.We)(o, i.id), x);
            },
            fetchPoolsRewardsApy: async (e, a) => {
              let r = t(),
                { rewardsApyMapper: s, setStateByActiveKey: i } = r[P],
                n = r.networks.networks[e],
                { poolAllRewardsApy: l } = m.A.pool;
              (0, A.Rm)('fetchPoolsRewardsApy', e, a.length);
              let d = { ...s[e] };
              for (let e of o()(a, 200)) {
                let { results: t } = await f.PromisePool.for(e).process((e) => l(n, e.pool));
                d = { ...d, ...Object.fromEntries(t.map((e) => [e.poolId, e])) };
              }
              i('rewardsApyMapper', e.toString(), d);
            },
            fetchMissingPoolsRewardsApy: async (e, a) => {
              let { rewardsApyMapper: r, fetchPoolsRewardsApy: s } = t()[P],
                o = r[e] ?? {},
                i = a.filter(({ pool: e }) => void 0 === o[e.id]);
              i.length > 0 && ((0, A.Rm)('fetchMissingPoolsRewardsApy', e, i.length), s(e, i));
            },
            fetchPoolStats: async (a, s) => {
              let {
                  pools: o,
                  networks: { networks: i },
                } = t(),
                { chainId: n } = a,
                { pool: l } = s,
                d = i[n],
                { isLite: c } = d,
                { getVolume: p, poolParameters: u } = m.A.pool;
              (0, A.Rm)('fetchPoolStats', n, l.id);
              try {
                let [, , t, { parameters: i }] = await Promise.all([
                  o.fetchPoolCurrenciesReserves(a, s),
                  o.fetchPoolsRewardsApy(n, [s]),
                  c ? null : p(l, d),
                  u(l),
                ]);
                e(
                  (0, r.Ay)((e) => {
                    i && (e.pools.poolsMapper[n][l.id].parameters = i),
                      t && e.pools.volumeMapper[n] && (e.pools.volumeMapper[n][l.id] = t);
                  })
                );
              } catch (e) {
                console.error(e);
              }
            },
            setPoolIsWrapped: (a, s) => {
              let o = (0, g.NB)(),
                i = o.chainId,
                l = m.A.pool.poolTokens(a.pool, s),
                d = m.A.pool.poolTokenAddresses(a.pool, s),
                c = { ...a, isWrapped: s, tokens: l, tokensCountBy: n()(l), tokenAddresses: d };
              return (
                e(
                  (0, r.Ay)((e) => {
                    e.pools.poolsMapper[i][a.pool.id] = c;
                  })
                ),
                t().pools.fetchPoolCurrenciesReserves(o, c),
                { tokens: l, tokenAddresses: d }
              );
            },
            updatePool: (t, a, s) => {
              e(
                (0, r.Ay)((e) => {
                  e.pools.poolsMapper[t][a] = s;
                })
              );
            },
            fetchPricesApiPools: async (a) => {
              let {
                networks: { networks: s },
              } = t();
              if (s[a].pricesApi) {
                let t = s[a].id;
                try {
                  let a = await fetch(`https://prices.curve.finance/v1/chains/${t}`),
                    s = await a.json(),
                    o = {};
                  s.data.forEach((e) => (o[e.address.toLowerCase()] = e)),
                    e(
                      (0, r.Ay)((e) => {
                        e.pools.pricesApiPoolsMapper = o;
                      })
                    );
                } catch (e) {
                  console.warn(e);
                }
              }
            },
            fetchPricesPoolSnapshots: async (a, s) => {
              let {
                networks: { networks: o },
              } = t();
              if (o[a].pricesApi) {
                let t = Math.floor((Date.now() - 864e5) / 1e3),
                  i = Math.floor(Date.now() / 1e3),
                  n = o[a].id.toLowerCase();
                try {
                  let a = fetch(`https://prices.curve.finance/v1/pools/${n}/${s}/metadata`),
                    o = fetch(
                      `https://prices.curve.finance/v1/snapshots/${n}/${s}?start=${t}&end=${i}`
                    ),
                    l = await Promise.all([a, o]),
                    d = await l[0].json(),
                    c = await l[1].json();
                  e(
                    (0, r.Ay)((e) => {
                      (e.pools.snapshotsMapper[s] = c.data[0]),
                        (e.pools.pricesApiPoolDataMapper[s] = d);
                    })
                  );
                } catch (e) {
                  console.warn(e);
                }
              }
            },
            fetchPricesApiCharts: async (a, s, o, i, n, l, d, c, p) => {
              e(
                (0, r.Ay)((e) => {
                  (e.pools.pricesApiState.chartStatus = 'LOADING'),
                    (e.pools.pricesApiState.refetchingCapped = j.pricesApiState.refetchingCapped);
                })
              );
              let {
                  networks: { networks: u },
                } = t(),
                m = u[a].id.toLowerCase();
              if (0 === s || 1 === s)
                try {
                  let t = await fetch(
                      `https://prices.curve.finance/v1/lp_ohlc/${m}/${o}?agg_number=${i}&agg_units=${n}&start=${d}&end=${l}&price_units=${0 === s ? 'usd' : 'token0'}`
                    ),
                    a = await t.json(),
                    c = {
                      ...a,
                      data: a.data
                        .filter((e) => {
                          if (
                            null !== e.open &&
                            null !== e.close &&
                            null !== e.high &&
                            null !== e.low
                          )
                            return e;
                        })
                        .map((e) => ({ ...e, time: (0, y.l8)(e.time) })),
                    };
                  c &&
                    e(
                      (0, r.Ay)((e) => {
                        (e.pools.pricesApiState.chartOhlcData = c.data),
                          (e.pools.pricesApiState.refetchingCapped = c.data.length < 298),
                          (e.pools.pricesApiState.lastFetchEndTime = a.data[0].time);
                      })
                    ),
                    e(
                      (0, r.Ay)((e) => {
                        e.pools.pricesApiState.chartStatus = 'READY';
                      })
                    );
                } catch (t) {
                  e(
                    (0, r.Ay)((e) => {
                      e.pools.pricesApiState.chartStatus = 'ERROR';
                    })
                  ),
                    console.warn(t);
                }
              else
                try {
                  let t = c[s - 2],
                    a = p[s - 2],
                    u = a ? t[1].address : t[0].address,
                    h = a ? t[0].address : t[1].address,
                    f = await fetch(
                      `https://prices.curve.finance/v1/ohlc/${m}/${o}?main_token=${u}&reference_token=${h}&agg_number=${i}&agg_units=${n}&start=${d}&end=${l}`
                    ),
                    g = await f.json(),
                    A = {
                      ...g,
                      data: g.data
                        .filter((e) => {
                          if (
                            null !== e.open &&
                            null !== e.close &&
                            null !== e.high &&
                            null !== e.low
                          )
                            return e;
                        })
                        .map((e) => ({ ...e, time: (0, y.l8)(e.time) })),
                    };
                  A &&
                    e(
                      (0, r.Ay)((e) => {
                        (e.pools.pricesApiState.chartOhlcData = A.data),
                          (e.pools.pricesApiState.refetchingCapped = A.data.length < 299),
                          (e.pools.pricesApiState.lastFetchEndTime = g.data[0].time);
                      })
                    ),
                    e(
                      (0, r.Ay)((e) => {
                        e.pools.pricesApiState.chartStatus = 'READY';
                      })
                    );
                } catch (t) {
                  e(
                    (0, r.Ay)((e) => {
                      e.pools.pricesApiState.chartStatus = 'ERROR';
                    })
                  ),
                    console.warn(t);
                }
            },
            fetchMorePricesApiCharts: async (a, s, o, i, n, l, d, c, p) => {
              let {
                  networks: { networks: u },
                } = t(),
                m = u[a].id.toLowerCase();
              if (0 === s || 1 === s)
                try {
                  let a = await fetch(
                      `https://prices.curve.finance/v1/lp_ohlc/${m}/${o}?agg_number=${i}&agg_units=${n}&start=${l}&end=${d}&price_units=${0 === s ? 'usd' : 'token0'}`
                    ),
                    c = await a.json(),
                    p = {
                      ...c,
                      data: c.data
                        .filter((e) => {
                          if (
                            null !== e.open &&
                            null !== e.close &&
                            null !== e.high &&
                            null !== e.low
                          )
                            return e;
                        })
                        .map((e) => ({ ...e, time: (0, y.l8)(e.time) })),
                    };
                  if (p) {
                    let a = [...p.data, ...t().pools.pricesApiState.chartOhlcData];
                    e(
                      (0, r.Ay)((e) => {
                        (e.pools.pricesApiState.chartOhlcData = a),
                          (e.pools.pricesApiState.refetchingCapped = p.data.length < 299),
                          (e.pools.pricesApiState.lastFetchEndTime = c.data[0].time);
                      })
                    );
                  }
                } catch (e) {
                  console.warn(e);
                }
              else
                try {
                  let a = c[s - 2],
                    u = p[s - 2],
                    h = u ? a[1].address : a[0].address,
                    f = u ? a[0].address : a[1].address,
                    g = await fetch(
                      `https://prices.curve.finance/v1/ohlc/${m}/${o}?main_token=${h}&reference_token=${f}&agg_number=${i}&agg_units=${n}&start=${l}&end=${d}`
                    ),
                    A = await g.json(),
                    w = {
                      ...A,
                      data: A.data
                        .filter((e) => {
                          if (
                            null !== e.open &&
                            null !== e.close &&
                            null !== e.high &&
                            null !== e.low
                          )
                            return e;
                        })
                        .map((e) => ({ ...e, time: (0, y.l8)(e.time) })),
                    };
                  if (w) {
                    let a = [...w.data, ...t().pools.pricesApiState.chartOhlcData];
                    e(
                      (0, r.Ay)((e) => {
                        (e.pools.pricesApiState.chartOhlcData = a),
                          (e.pools.pricesApiState.refetchingCapped = w.data.length < 299),
                          (e.pools.pricesApiState.lastFetchEndTime = A.data[0].time);
                      })
                    );
                  }
                } catch (t) {
                  e(
                    (0, r.Ay)((e) => {
                      e.pools.pricesApiState.chartStatus = 'ERROR';
                    })
                  ),
                    console.warn(t);
                }
            },
            fetchPricesApiActivity: async (a, s, o) => {
              e(
                (0, r.Ay)((e) => {
                  e.pools.pricesApiState.activityStatus = 'LOADING';
                })
              );
              let {
                  networks: { networks: i },
                } = t(),
                n = i[a].id.toLowerCase();
              try {
                let t = o.map((e) =>
                    fetch(
                      `https://prices.curve.finance/v1/trades/${n}/${s}?main_token=${e[0].address}&reference_token=${e[1].address}&page=1&per_page=100`
                    )
                  ),
                  a = await Promise.all(t),
                  i = await Promise.all(a.map((e) => e.json())),
                  l = i
                    .reduce((e, t) => e.concat(t.data), [])
                    .sort((e, t) => {
                      let a = new Date(e.time).getTime();
                      return new Date(t.time).getTime() - a;
                    }),
                  d = [],
                  c = new Set();
                i.forEach((e) => {
                  c.has(e.main_token.event_index) ||
                    (c.add(e.main_token.event_index), d.push(e.main_token)),
                    c.has(e.reference_token.event_index) ||
                      (c.add(e.reference_token.event_index), d.push(e.reference_token));
                }),
                  i &&
                    e(
                      (0, r.Ay)((e) => {
                        (e.pools.pricesApiState.tradesTokens = d),
                          (e.pools.pricesApiState.tradeEventsData = l);
                      })
                    );
                let p = await fetch(
                    `https://prices.curve.finance/v1/liquidity/${n}/${s}?page=1&per_page=100`
                  ),
                  u = await p.json();
                u &&
                  e(
                    (0, r.Ay)((e) => {
                      e.pools.pricesApiState.liquidityEventsData = u.data;
                    })
                  ),
                  e(
                    (0, r.Ay)((e) => {
                      e.pools.pricesApiState.activityStatus = 'READY';
                    })
                  );
              } catch (t) {
                e(
                  (0, r.Ay)((e) => {
                    e.pools.pricesApiState.activityStatus = 'ERROR';
                  })
                ),
                  console.warn(t);
              }
            },
            setChartTimeOption: (t) => {
              e(
                (0, r.Ay)((e) => {
                  e.pools.pricesApiState.timeOption = t;
                })
              );
            },
            setChartExpanded: (t) => {
              e(
                (0, r.Ay)((e) => {
                  e.pools.pricesApiState.chartExpanded = t;
                })
              );
            },
            setActivityHidden: (t) => {
              e(
                (0, r.Ay)((e) => {
                  e.pools.pricesApiState.activityHidden = t;
                })
              );
            },
            setEmptyPoolListDefault: (e) => {
              let a = t().pools,
                r = e.toString();
              a.setStateByActiveKey('tvlMapper', r, {}),
                a.setStateByActiveKey('volumeMapper', r, {}),
                a.setStateByActiveKey('poolsMapper', r, {});
            },
            setStateByActiveKey: (e, a, r) => {
              t().setAppStateByActiveKey(P, e, a, r);
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey(P, e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys(P, e);
            },
            resetState: () => {
              t().resetAppState(P, {
                ...j,
                poolsMapper: t()[P].poolsMapper,
                currencyReserves: t()[P].currencyReserves,
                rewardsApyMapper: t()[P].rewardsApyMapper,
                tvlMapper: t()[P].tvlMapper,
                volumeMapper: t()[P].volumeMapper,
              });
            },
          },
        });
      function I(e) {
        let t = Object.entries(d()(e, (e) => e.symbol))
          .filter(([e, t]) => t.length > 1)
          .map((e) => e[0]);
        return 0 === t.length
          ? e
          : Object.keys(e).reduce((a, r) => {
              let s = e[r];
              return s && (a[r] = { ...s, haveSameTokenName: -1 !== t.indexOf(s.symbol) }), a;
            }, {});
      }
    },
    51458: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => n });
      var r = a(7620),
        s = a(57837),
        o = a(28822),
        i = a(88411);
      let n = (e) => {
        let t = i.w5().lib?.chainId ?? 0,
          a = (0, o.A)((a) => a.tokens.tokensMapper[e ?? t] ?? {}),
          n = (0, r.useMemo)(() => (0, s.N1)(a), [a]);
        return { tokensMapper: a, tokensMapperStr: n };
      };
    },
    51569: (e, t, a) => {
      'use strict';
      a.d(t, { Ay: () => y, kR: () => u, uZ: () => f });
      var r = a(80101),
        s = a.n(r),
        o = a(39929),
        i = a.n(o),
        n = a(45376),
        l = a.n(n),
        d = a(51701),
        c = a(54210),
        p = a(38071);
      let u = { error: '', isLoading: !0, noResult: !1 },
        m = {
          activeKey: '',
          formValues: {
            searchTextByTokensAndAddresses: {},
            searchTextByOther: {},
            hideSmallPools: !0,
            hideZero: !0,
          },
          formStatus: {},
          result: {},
          searchedByTokens: {},
          searchedTerms: [],
          searchedByAddresses: {},
          showHideSmallPools: !1,
        },
        h = 'poolList';
      function f(e, t) {
        let { filterKey: a, searchText: r, sortBy: o, sortByOrder: i } = t,
          n = r;
        return (
          r &&
            r.length > 20 &&
            (n = s()(r, 5)
              .map((e) => e[0])
              .join('')),
          `${e}-${a}-${o}-${i}-${n}`
        );
      }
      let y = (e, t) => ({
        [h]: {
          ...m,
          filterByKey: (e, t, a) => {
            if ('user' === e) return t.filter(({ pool: e }) => (a ?? {})[e.id]);
            if ('btc' === e || 'crypto' === e || 'eth' === e || 'usd' === e || 'kava' === e)
              return t.filter(({ pool: t }) => t.referenceAsset.toLowerCase() === e);
            if ('crvusd' === e) return t.filter(({ pool: e }) => e.id.startsWith('factory-crvusd'));
            if ('tricrypto' === e)
              return t.filter(
                ({ pool: e }) =>
                  e.id.startsWith('factory-tricrypto') || e.id.startsWith('tricrypto')
              );
            if ('stableng' === e)
              return t.filter(({ pool: e }) => e.id.startsWith('factory-stable-ng'));
            else if ('cross-chain' === e)
              return t.filter(
                ({ pool: e }) =>
                  '0x939721ce04332ca04b100154e0c8fcbb4ebaf695' === e.address ||
                  '0x228f20f430fd7a6f5b1abea69a5ab8eb2973853c' === e.address ||
                  '0x6bb9a6b7066445da6bef268b91810ae750431587' === e.address ||
                  '0x4df0b8323f7b6d45abf39ecbd3f18bd5fcbcb1b2' === e.address ||
                  '0x6e0dc5a4ef555277db3435703f0e287040013763' === e.address ||
                  e.name.startsWith('CrossCurve')
              );
            else if ('others' === e)
              return t.filter(({ pool: e }) => {
                let t = e.referenceAsset.toLowerCase();
                return 'link' === t || 'eur' === t || 'xdai' === t || 'other' === t;
              });
            return t;
          },
          filterBySearchText: (e, a, r = !0) => {
            let { ...s } = t()[h],
              { addressesResult: o, tokensResult: i } = (0, p.Xs)(
                e,
                a,
                [c.E$['pool.name'], c.E$['pool.underlyingCoins']],
                {
                  tokens: [c.E$['pool.underlyingCoinAddresses']],
                  other: [c.E$['pool.address'], c.E$['pool.gauge.address'], c.E$['pool.lpToken']],
                }
              ),
              { tokens: n, addresses: u } = (0, p.hJ)(e);
            return (
              s.setStateByKeys({
                searchedByTokens: r ? (0, d.w)(i) : {},
                searchedTerms: r ? [...n, ...u] : [],
                searchedByAddresses: r ? (0, d.w)(o) : {},
              }),
              l()([...i, ...o], (e) => e.item.pool.id).map((e) => e.item)
            );
          },
          filterSmallTvl: (e, a, r) => {
            let {
                networks: { networks: s },
              } = t(),
              { hideSmallPoolsTvl: o } = s[r];
            return e.length < 10 ? e : e.filter(({ pool: e }) => +(a?.[e.id]?.value || '0') > o);
          },
          sortFn: (e, t, a, r, s, o, n, l) => {
            if (0 === a.length);
            else if ('name' === e) return i()(a, ({ pool: e }) => e.name.toLowerCase(), [t]);
            else if ('factory' === e) return i()(a, ({ pool: e }) => e.isFactory, [t]);
            else if ('referenceAsset' === e)
              return i()(a, ({ pool: e }) => e.referenceAsset.toLowerCase(), [t]);
            else if (e.startsWith('rewards'))
              return i()(
                a,
                (t) => {
                  let { pool: a, gauge: s } = t,
                    { base: o, crv: i = [], other: n = [] } = r[a.id] ?? {};
                  return 'rewardsBase' === e
                    ? Number(o?.day ?? 0)
                    : 'rewardsCrv' === e || ('rewardsLite' === e && l)
                      ? s.status?.areCrvRewardsStuckInBridge || s.status?.rewardsNeedNudging
                        ? 0
                        : Number(i?.[0] ?? 0)
                      : 'rewardsOther' === e || 'rewardsLite' === e
                        ? n.length > 0
                          ? n.reduce((e, { apy: t }) => e + t, 0)
                          : 0
                        : void 0;
                },
                [t]
              );
            else if ('tvl' === e) return i()(a, ({ pool: e }) => Number(s[e.id]?.value ?? 0), [t]);
            else if ('volume' === e)
              return i()(a, ({ pool: e }) => Number(o[e.id]?.value ?? 0), [t]);
            else if ('points' === e)
              return i()(
                a,
                ({ pool: e }) => {
                  let t = n[e.address.toLowerCase()];
                  return t && t.length > 0 ? Number(t[0].multiplier) : 0;
                },
                [t]
              );
            return a;
          },
          setSortAndFilterData: async (e, a, r, s, o, i, n, l, d) => {
            let {
                pools: c,
                networks: { networks: p },
                [h]: { activeKey: m, formStatus: f, result: y, ...g },
              } = t(),
              { isCrvRewardsEnabled: A } = p?.[e] ?? {},
              { searchText: w, filterKey: x, sortBy: b, sortByOrder: v } = a,
              S = [...s];
            'user' !== x && r && s.length > 10 && (S = g.filterSmallTvl(S, n, e)),
              x &&
                (S =
                  'all' === x ||
                  'crypto' === x ||
                  'tricrypto' === x ||
                  'others' === x ||
                  'stableng' === x ||
                  'user' === x ||
                  'cross-chain' === x
                    ? g.filterByKey(x, S, l)
                    : g.filterBySearchText(x, S, !1)),
              w && (S = g.filterBySearchText(w, S)),
              b &&
                (b.startsWith('rewards') && (await c.fetchMissingPoolsRewardsApy(e, S)),
                (S = g.sortFn(b, v, S, o, n, i, d, A)));
            let k = S.map(({ pool: e }) => e.id);
            g.setStateByActiveKey('result', m, k),
              g.setStateByActiveKey('formStatus', m, {
                ...(f[m] ?? u),
                noResult: 0 === k.length,
                isLoading: !1,
              }),
              Promise.all([c.fetchMissingPoolsRewardsApy(e, S)]);
          },
          setSortAndFilterCachedData: (e, a, r, s, o) => {
            let { filterSmallTvl: n, activeKey: l, formStatus: d, ...c } = t()[h],
              { sortBy: p, sortByOrder: m } = a,
              f = 'volume' === p && Object.keys(s ?? {}).length > 0,
              y = 'tvl' === p && Object.keys(o ?? {}).length > 0,
              g = [];
            (f || y) &&
              ((g = n(r, o, e)),
              y
                ? (g = i()(g, ({ pool: e }) => Number(o[e.id]?.value ?? 0), [m]))
                : f && (g = i()(g, ({ pool: e }) => Number(s[e.id]?.value ?? 0), [m])));
            let A = g.map(({ pool: e }) => e.id);
            c.setStateByActiveKey('result', l, A),
              c.setStateByActiveKey('formStatus', l, {
                ...(d[l] ?? u),
                noResult: 0 === A.length,
                isLoading: !0,
              });
          },
          setFormValues: async (
            e,
            a,
            r,
            s,
            o,
            i = [],
            n = {},
            l = {},
            d = {},
            c = {},
            p = {},
            m = {},
            y
          ) => {
            let { formValues: g, result: A, ...w } = t()[h],
              x = f(e, r);
            w.setStateByActiveKey('formStatus', x, { ...u, isLoading: void 0 === A[x] });
            let { searchText: b, filterKey: v, sortBy: S, sortByOrder: k } = r;
            (g = { ...g, searchTextByTokensAndAddresses: {}, searchTextByOther: {} }),
              w.setStateByKeys({
                activeKey: x,
                formValues: g,
                searchedByAddresses: {},
                searchedTerms: [],
                searchedByTokens: {},
              });
            let C = void 0 !== o && Object.keys(o).length >= 0;
            if (C) {
              if (0 === o.length) {
                w.setStateByKey('result', { [x]: [] }),
                  w.setStateByActiveKey('formStatus', x, { ...u, isLoading: !1, noResult: !0 });
                return;
              }
              w.setSortAndFilterData(
                e,
                r,
                s,
                o,
                n,
                Object.keys(l).length ? l : d,
                Object.keys(c).length ? c : p,
                m,
                y
              );
              return;
            }
            if (
              !C &&
              '' === b &&
              'all' === v &&
              S === (a ? 'tvl' : 'volume') &&
              'desc' === k &&
              i.length > 0
            ) {
              w.setSortAndFilterCachedData(e, r, i, d, p);
              return;
            }
            w.setStateByActiveKey('formStatus', x, { ...u });
          },
          setStateByActiveKey: (e, a, r) => {
            Object.keys(t()[h][e]).length > 30
              ? t().setAppStateByKey(h, e, { [a]: r })
              : t().setAppStateByActiveKey(h, e, a, r);
          },
          setStateByKey: (e, a) => {
            t().setAppStateByKey(h, e, a);
          },
          setStateByKeys: (e) => {
            t().setAppStateByKeys(h, e);
          },
          resetState: () => {
            t().resetAppState(h, { ...m });
          },
        },
      });
    },
    51701: (e, t, a) => {
      'use strict';
      a.d(t, { m: () => r, w: () => s });
      var r = (function (e) {
        return (
          (e.inPool = 'inPool'),
          (e.poolName = 'poolName'),
          (e.rewardsLite = 'rewardsLite'),
          (e.rewardsDesktop = 'rewardsDesktop'),
          (e.rewardsMobile = 'rewardsMobile'),
          (e.volume = 'volume'),
          (e.tvl = 'tvl'),
          e
        );
      })({});
      function s(e) {
        return e.reduce(
          (e, t) => (
            t.matches &&
              (e[t.item.pool.id] = t.matches.reduce(
                (e, { key: t, value: a = '' }) => (t && a && (e[t] = { value: a }), e),
                {}
              )),
            e
          ),
          {}
        );
      }
    },
    52362: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => m });
      var r = a(54568),
        s = a(10541),
        o = a.n(s),
        i = a(23780),
        n = a.n(i),
        l = a(7620),
        d = a(48341),
        c = a(23173),
        p = a(77241);
      let u = (0, d.Ay)(c.A).withConfig({ componentId: 'sc-f5230f74-0' })([
          'margin-left:0.125rem;',
        ]),
        m = ({ amount: e, usdRate: t }) => {
          let a = (0, l.useMemo)(() => {
            let a = '';
            return (
              !n()(t) &&
                !o()(t) &&
                +t > 0 &&
                +e > 0 &&
                (a = (0, p.BN)(t).multipliedBy(e).toString()),
              a
            );
          }, [t, e]);
          return (0, r.jsxs)(u, {
            size: 'xs',
            children: [
              'x ',
              t && (0, p.vk)(t, !0),
              ' ≈',
              (0, p.ZV)(a, { currency: 'USD', defaultValue: '-' }),
            ],
          });
        };
    },
    54210: (e, t, a) => {
      'use strict';
      a.d(t, { Ay: () => i, E$: () => s, ln: () => o });
      var r = a(36074),
        s = (function (e) {
          return (
            (e['pool.wrappedCoins'] = 'pool.wrappedCoins'),
            (e['pool.wrappedCoinAddresses'] = 'pool.wrappedCoinAddresses'),
            (e['pool.underlyingCoins'] = 'pool.underlyingCoins'),
            (e['pool.underlyingCoinAddresses'] = 'pool.underlyingCoinAddresses'),
            (e['pool.name'] = 'pool.name'),
            (e['pool.address'] = 'pool.address'),
            (e['pool.gauge.address'] = 'pool.gauge.address'),
            (e['pool.lpToken'] = 'pool.lpToken'),
            e
          );
        })({});
      function o(e, t, a) {
        if (!e || !t || !a) return;
        let r = { ...t },
          { tokenAddressesAll: s, tokensAll: o } = a;
        return (
          Object.keys(e).forEach((a) => {
            if (!(a in t)) return;
            let { value: i } = e[a],
              { isTokenAddress: n } = t[a];
            if (n) {
              let e = s.indexOf(i.toLowerCase());
              r[a].label = o[e];
            }
          }),
          r
        );
      }
      let i = () => ({
        'pool.name': {},
        'pool.wrappedCoins': {},
        'pool.underlyingCoins': {},
        'pool.wrappedCoinAddresses': { isTokenAddress: !0 },
        'pool.underlyingCoinAddresses': { isTokenAddress: !0 },
        'pool.address': { label: (0, r.t)`Pool` },
        'pool.gauge.address': { label: (0, r.t)`Gauge` },
        'pool.lpToken': { label: (0, r.t)`LP Token` },
      });
    },
    55906: (e, t, a) => {
      'use strict';
      a.d(t, { a$: () => i, l5: () => o, mR: () => n });
      var r = a(36419),
        s = a(21802);
      let o = 5e3,
        i = {
          ...{
            ...s.rN,
            PAGE_DEPLOY_GAUGE: '/deploy-gauge',
            PAGE_LOCKER: '/locker',
            PAGE_INTEGRATIONS: '/integrations',
            PAGE_COMPENSATION: '/compensation',
            PAGE_DISCLAIMER: '/disclaimer',
            PAGE_404: '/404',
          },
          PAGE_LOCKER_CREATE: '/create',
          PAGE_LOCKER_ADJUST_CRV: '/adjust_crv',
          PAGE_LOCKER_ADJUST_DATE: '/adjust_date',
          PAGE_POOL_DEPOSIT: '/deposit',
          PAGE_POOL_WITHDRAW: '/withdraw',
          PAGE_POOL_MANAGE: '/manage-gauge',
        },
        n = {
          useApi: !0,
          excludeTokensBalancesMapper: {},
          excludePoolsMapper: {},
          hideSmallPoolsTvl: r.W,
          isLite: !1,
          isActiveNetwork: !0,
          missingPools: [],
          poolCustomTVL: {},
          poolFilters: [
            'all',
            'usd',
            'btc',
            'eth',
            'crypto',
            'crvusd',
            'tricrypto',
            'stableng',
            'others',
            'user',
          ],
          poolIsWrappedOnly: {},
          poolListFormValuesDefault: {},
          swap: { fromAddress: '', toAddress: '' },
          swapCustomRouteRedirect: {},
          showInSelectNetwork: !0,
          showRouterSwap: !0,
          createQuickList: [],
          createDisabledTokens: [],
          stableswapFactory: !1,
          stableswapFactoryOld: !1,
          twocryptoFactoryOld: !1,
          twocryptoFactory: !1,
          tricryptoFactory: !1,
          hasFactory: !1,
          pricesApi: !1,
        };
    },
    57837: (e, t, a) => {
      'use strict';
      a.d(t, { Ay: () => p, N1: () => c });
      var r = a(96230),
        s = a.n(r),
        o = a(51426),
        i = a(76635);
      let n = 'tokens',
        l = { address: '', symbol: '', decimals: 0, haveSameTokenName: !1, volume: 0 },
        d = { tokensNameMapper: {}, tokensMapper: {}, tokensMapperNonSmallTvl: {}, loading: !0 };
      function c(e) {
        return Object.keys(e ?? {}).reduce((e, t) => (e += t.charAt(5)), '');
      }
      let p = (e, t) => ({
        [n]: {
          ...d,
          setTokensMapper: async (e, a) => {
            let { pools: r, networks: d } = t(),
              { tokensMapper: c, tokensMapperNonSmallTvl: p, ...u } = t()[n];
            u.setStateByKey('loading', !0);
            let { hideSmallPoolsTvl: m } = d.networks[e],
              h = r.tvlMapper[e] ?? {},
              f = r.volumeMapper[e] ?? {},
              y = (function (e) {
                if (!e) return {};
                let { address: t, symbol: a, wrappedAddress: r, wrappedSymbol: s } = e;
                return {
                  [t]: { ...l, symbol: a, address: t },
                  [r]: { ...l, symbol: s, address: r },
                };
              })(d.nativeToken[e]),
              g = { ...(c[e] ?? y) },
              A = { ...(p[e] ?? y) },
              w = {};
            for (let { pool: e, tokenAddressesAll: t, tokensAll: r, tokenDecimalsAll: o } of a) {
              let n = +(h[e.id]?.value ?? '0'),
                d = +(f[e.id]?.value ?? '0'),
                c = s()(r);
              for (let s in t) {
                let p = t[s],
                  u = g[p]?.volume ?? 0,
                  h = r[s];
                if (h) {
                  c[h] = c[h] - 1;
                  let e = 0 === c[h] ? u + d : u,
                    t = {
                      ...(g[p] ?? l),
                      address: p,
                      symbol: h,
                      decimals: o[s],
                      haveSameTokenName: !1,
                      volume: e,
                    };
                  (g[p] = t), (w[p] = t), (a.length <= 10 || n >= m) && (A[p] = t);
                } else (0, i.Rm)(`Missing token name in pool ${e.id}`);
              }
            }
            g = (0, o.tv)(g);
            let x = {};
            for (let e in A) x[e] = g[e];
            let b = {};
            for (let e in w) b[e] = g[e];
            let v = e.toString();
            return (
              u.setStateByActiveKey('tokensMapper', v, g),
              u.setStateByActiveKey('tokensMapperNonSmallTvl', v, x),
              u.setStateByKey('loading', !1),
              Object.keys(b)
            );
          },
          setEmptyPoolListDefault: async (e) => {
            let { networks: a, [n]: r } = t(),
              s = a.nativeToken[e];
            if (!s) return;
            let o = e.toString(),
              i = { [s.address]: s.symbol, [s.wrappedAddress]: s.wrappedSymbol };
            r.setStateByActiveKey('tokensNameMapper', o, i);
            let d = {
              [s.address]: { ...l, address: s.address, symbol: s.symbol },
              [s.wrappedAddress]: { ...l, address: s.wrappedAddress, symbol: s.wrappedSymbol },
            };
            r.setStateByActiveKey('tokensMapper', o, d);
          },
          setStateByActiveKey: (e, a, r) => {
            t().setAppStateByActiveKey(n, e, a, r);
          },
          setStateByKey: (e, a) => {
            t().setAppStateByKey(n, e, a);
          },
          setStateByKeys: (e) => {
            t().setAppStateByKeys(n, e);
          },
          resetState: () => {
            t().resetAppState(n, d);
          },
        },
      });
    },
    61615: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => l });
      var r = a(54568),
        s = a(47990),
        o = a(99599),
        i = a(88411),
        n = a(36074);
      let l = ({ loading: e, children: t }) => {
        let { connectState: a, lib: l } = (0, i.w5)(),
          { connect: d } = (0, i.vT)();
        return (0, r.jsx)(r.Fragment, {
          children:
            (0, i.VP)(a) || e || l?.signerAddress
              ? (0, i.VP)(a) || e
                ? (0, r.jsxs)(s.A, {
                    fillWidth: !0,
                    size: 'large',
                    disabled: !0,
                    variant: 'icon-filled',
                    children: [
                      (0, n.t)`Loading`,
                      ' ',
                      (0, r.jsx)(o.A, { isDisabled: !0, size: 15 }),
                    ],
                  })
                : t
              : (0, r.jsx)(s.A, {
                  fillWidth: !0,
                  size: 'large',
                  variant: 'filled',
                  onClick: () => d(),
                  children: (0, n.t)`Connect Wallet`,
                }),
        });
      };
    },
    63175: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => m });
      var r = a(223),
        s = a.n(r),
        o = a(39669),
        i = a.n(o),
        n = a(32263),
        l = a.n(n),
        d = a(56354),
        c = a.n(d),
        p = a(5074),
        u = a.n(p);
      s().extend(l()), s().extend(u()), s().extend(i()), s().extend(c());
      let m = s();
    },
    63711: (e, t, a) => {
      'use strict';
      a.d(t, { VL: () => o, Vd: () => i });
      var r = a(7620);
      let s = (0, r.createContext)(null),
        o = s.Provider,
        i = () => {
          let e = (0, r.useContext)(s);
          if (!e)
            throw Error('useDashboardContext has to be used within <DashboardContextProvider>');
          return e;
        };
    },
    65209: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => n });
      var r = a(54568),
        s = a(56120),
        o = a(36074),
        i = a(19245);
      let n = (e) =>
        (0, r.jsx)(s.A, {
          color: 'ghost',
          size: 'small',
          onClick: e.onClick,
          startIcon: (0, r.jsx)(i.L, {
            sx: { fontSize: 22, fill: 'transparent', stroke: 'currentColor' },
          }),
          children: (0, o.t)`Settings`,
        });
    },
    66485: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => p, m: () => d });
      var r = a(37653),
        s = a(96844),
        o = a(39418),
        i = a(81653),
        n = a(88411),
        l = a(36074);
      let d = {
          navigationIndex: 0,
          advanced: !1,
          swapType: '',
          poolPresetIndex: null,
          tokensInPool: {
            tokenAmount: 2,
            metaPoolToken: !1,
            [o.Cx]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
            [o.hz]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
            [o.ob]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
            [o.vP]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
            [o.ow]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
            [o.v_]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
            [o.CM]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
            [o.hq]: {
              address: '',
              symbol: '',
              ngAssetType: 0,
              basePool: !1,
              oracleAddress: '',
              oracleFunction: '',
            },
          },
          initialPrice: {
            [o.Cx]: 0,
            [o.hz]: 0,
            [o.ob]: 0,
            [o.vP]: 0,
            [o.ow]: 0,
            [o.v_]: 0,
            [o.CM]: 0,
            [o.hq]: 0,
            initialPrice: ['0', '0'],
          },
          parameters: {
            stableSwapFee: '',
            midFee: '',
            outFee: '',
            stableA: '',
            cryptoA: '',
            gamma: '',
            allowedExtraProfit: '',
            feeGamma: '',
            adjustmentStep: '',
            maHalfTime: '',
            maExpTime: '',
            offpegFeeMultiplier: '',
          },
          poolName: '',
          poolSymbol: '',
          userAddedTokens: [],
          validation: { poolType: !1, tokensInPool: !1, parameters: !1, poolInfo: !1 },
          transactionState: {
            txStatus: '',
            txSuccess: !1,
            transaction: null,
            txLink: '',
            fetchPoolStatus: '',
            poolAddress: '',
            poolId: '',
            lpTokenAddress: '',
            errorMessage: null,
          },
        },
        c = (e, t) => {
          let a = new r.g(t).div(new r.g(e)).toNumber();
          return a >= 1e3
            ? a.toFixed(0).toString()
            : a >= 100
              ? a.toFixed(1).toString()
              : a >= 10
                ? a.toFixed(2).toString()
                : a >= 1
                  ? a.toFixed(3).toString()
                  : a.toPrecision(4).toString();
        },
        p = (e, t) => ({
          createPool: {
            ...d,
            setNavigationIndex: (t) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.navigationIndex = t;
                })
              );
            },
            updateAdvanced: (t) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.advanced = t;
                })
              );
            },
            updateSwapType: (a, r) => {
              let {
                networks: { networks: i },
              } = t();
              if (a === o.dH) {
                let t = i[r].twocryptoFactory || i[r].twocryptoFactory ? 2 : 3;
                e(
                  (0, s.Ay)((e) => {
                    e.createPool.tokensInPool.tokenAmount = t;
                  })
                );
              }
              if (a === o.vD) {
                let {
                  tokenA: a,
                  tokenB: r,
                  tokenC: i,
                  tokenD: n,
                  tokenE: l,
                  tokenF: c,
                  tokenG: p,
                  tokenH: u,
                } = t().createPool.tokensInPool;
                a.basePool &&
                  e(
                    (0, s.Ay)((e) => {
                      (e.createPool.tokensInPool.tokenAmount = 2),
                        (e.createPool.tokensInPool[o.hz] = d.tokensInPool[o.hz]);
                    })
                  ),
                  r.basePool &&
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.tokensInPool[o.hz] = d.tokensInPool[o.hz]),
                          (e.createPool.tokensInPool.metaPoolToken = !1);
                      })
                    ),
                  i.basePool &&
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.tokensInPool[o.ob] = d.tokensInPool[o.ob];
                      })
                    ),
                  n.basePool &&
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.tokensInPool[o.vP] = d.tokensInPool[o.vP];
                      })
                    ),
                  l.basePool &&
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.tokensInPool[o.ow] = d.tokensInPool[o.ow];
                      })
                    ),
                  c.basePool &&
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.tokensInPool[o.v_] = d.tokensInPool[o.v_];
                      })
                    ),
                  p.basePool &&
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.tokensInPool[o.CM] = d.tokensInPool[o.CM];
                      })
                    ),
                  u.basePool &&
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.tokensInPool[o.hq] = d.tokensInPool[o.hq];
                      })
                    );
              }
              e(
                (0, s.Ay)((e) => {
                  (e.createPool.parameters = d.parameters),
                    (e.createPool.poolPresetIndex = null),
                    (e.createPool.swapType = a);
                })
              );
            },
            updatePoolPresetIndex: (t) => {
              e(
                (0, s.Ay)((e) => {
                  (e.createPool.poolPresetIndex = t),
                    (e.createPool.parameters = o.uw[t].defaultParams);
                })
              );
            },
            resetPoolPresetIndex: () => {
              e(
                (0, s.Ay)((e) => {
                  (e.createPool.parameters = d.parameters), (e.createPool.poolPresetIndex = null);
                })
              );
            },
            updateTokensInPool: async (a, r, i, n, l, d, p, u, m) => {
              let h = {
                ...t().createPool.tokensInPool,
                tokenA: r,
                tokenB: i,
                tokenC: n,
                tokenD: l,
                tokenE: d,
                tokenF: p,
                tokenG: u,
                tokenH: m,
              };
              (h.tokenAmount =
                (r.basePool || i.basePool) && t().createPool.swapType === o.vD
                  ? 2
                  : t().createPool.tokensInPool.tokenAmount),
                (h.metaPoolToken = r.basePool || i.basePool),
                (h.tokenA = {
                  ...r,
                  basePool: r.basePool,
                  ngAssetType: r.basePool ? 0 : t().createPool.tokensInPool[o.Cx].ngAssetType,
                }),
                (h.tokenB = {
                  ...i,
                  basePool: i.basePool,
                  ngAssetType: i.basePool ? 0 : t().createPool.tokensInPool[o.hz].ngAssetType,
                });
              let f = { ...t().createPool.initialPrice };
              '' !== r.address &&
                (f.tokenA = Number(await t().usdRates.fetchUsdRateByToken(a, r.address))),
                '' !== i.address &&
                  (f.tokenB = Number(await t().usdRates.fetchUsdRateByToken(a, i.address))),
                '' !== n.address &&
                  (f.tokenC = Number(await t().usdRates.fetchUsdRateByToken(a, n.address))),
                '' !== l.address &&
                  (f.tokenD = Number(await t().usdRates.fetchUsdRateByToken(a, l.address))),
                '' !== d.address &&
                  (f.tokenE = Number(await t().usdRates.fetchUsdRateByToken(a, d.address))),
                '' !== p.address &&
                  (f.tokenF = Number(await t().usdRates.fetchUsdRateByToken(a, p.address))),
                '' !== u.address &&
                  (f.tokenG = Number(await t().usdRates.fetchUsdRateByToken(a, u.address))),
                '' !== m.address &&
                  (f.tokenH = Number(await t().usdRates.fetchUsdRateByToken(a, m.address))),
                (f.initialPrice = [c(f.tokenA, f.tokenB), c(f.tokenA, f.tokenC)]),
                e(
                  (0, s.Ay)((e) => {
                    (e.createPool.tokensInPool = h), (e.createPool.initialPrice = f);
                  })
                );
            },
            clearToken: (a) => {
              e(
                (0, s.Ay)((e) => {
                  (e.createPool.tokensInPool[a] = d.tokensInPool[a]),
                    (e.createPool.tokensInPool.metaPoolToken =
                      !t().createPool.tokensInPool[a].basePool &&
                      t().createPool.tokensInPool.metaPoolToken);
                })
              );
            },
            updateNgAssetType: (t, a) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.tokensInPool[t].ngAssetType = a;
                })
              );
            },
            updateOracleAddress: (t, a) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.tokensInPool[t].oracleAddress = a;
                })
              );
            },
            updateOracleFunction: (t, a) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.tokensInPool[t].oracleFunction = a;
                })
              );
            },
            updateTokenAmount: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.tokensInPool.tokenAmount = t;
                })
              ),
            updateUserAddedTokens: (t, a, r, o) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.userAddedTokens.push({
                    address: t.toLowerCase(),
                    symbol: a,
                    haveSameTokenName: r,
                    userAddedToken: !0,
                    basePool: o,
                  });
                })
              ),
            updateInitialPrice: (t, a, r) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.initialPrice.initialPrice = [c(t, a), c(t, r)];
                })
              ),
            updateTokenPrice: (a, r) => {
              a === o.Cx &&
                (t().createPool.updateInitialPrice(
                  r,
                  t().createPool.initialPrice[o.hz],
                  t().createPool.initialPrice[o.ob]
                ),
                e(
                  (0, s.Ay)((e) => {
                    e.createPool.initialPrice[o.Cx] = r;
                  })
                )),
                a === o.hz &&
                  (t().createPool.updateInitialPrice(
                    t().createPool.initialPrice[o.Cx],
                    r,
                    t().createPool.initialPrice[o.ob]
                  ),
                  e(
                    (0, s.Ay)((e) => {
                      e.createPool.initialPrice[o.hz] = r;
                    })
                  )),
                a === o.ob &&
                  (t().createPool.updateInitialPrice(
                    t().createPool.initialPrice[o.Cx],
                    t().createPool.initialPrice[o.hz],
                    r
                  ),
                  e(
                    (0, s.Ay)((e) => {
                      e.createPool.initialPrice[o.ob] = r;
                    })
                  ));
            },
            refreshInitialPrice: async (a) => {
              let r = await t().usdRates.fetchUsdRateByToken(
                  a,
                  t().createPool.tokensInPool[o.Cx].address
                ),
                i = await t().usdRates.fetchUsdRateByToken(
                  a,
                  t().createPool.tokensInPool[o.hz].address
                ),
                n = await t().usdRates.fetchUsdRateByToken(
                  a,
                  t().createPool.tokensInPool[o.ob].address
                ),
                l = Number(r),
                d = Number(i),
                c = Number(n);
              t().createPool.updateInitialPrice(l, d, c),
                e(
                  (0, s.Ay)((e) => {
                    e.createPool.initialPrice = {
                      ...t().createPool.initialPrice,
                      tokenAPrice: l,
                      tokenBPrice: d,
                      tokenCPrice: c,
                    };
                  })
                );
            },
            updateStableSwapFee: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.parameters.stableSwapFee = t;
                })
              ),
            updateMidFee: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.parameters.midFee = t;
                })
              ),
            updateOutFee: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.parameters.outFee = t;
                })
              ),
            updateStableA: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.parameters.stableA = new r.g(t).toString();
                })
              ),
            updateCryptoA: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.parameters.cryptoA = new r.g(t).toString();
                })
              ),
            updateGamma: (t) =>
              e(
                (0, s.Ay)((e) => {
                  'string' === t
                    ? (e.createPool.parameters.gamma = t)
                    : (e.createPool.parameters.gamma = new r.g(t).toString());
                })
              ),
            updateAllowedExtraProfit: (t) =>
              e(
                (0, s.Ay)((e) => {
                  'string' === t
                    ? (e.createPool.parameters.allowedExtraProfit = t)
                    : (e.createPool.parameters.allowedExtraProfit = new r.g(t).toString());
                })
              ),
            updateFeeGamma: (t) =>
              e(
                (0, s.Ay)((e) => {
                  'string' === t
                    ? (e.createPool.parameters.feeGamma = t)
                    : (e.createPool.parameters.feeGamma = new r.g(t).toString());
                })
              ),
            updateAdjustmentStep: (t) =>
              e(
                (0, s.Ay)((e) => {
                  'string' === t
                    ? (e.createPool.parameters.adjustmentStep = t)
                    : (e.createPool.parameters.adjustmentStep = new r.g(t).toString());
                })
              ),
            updateMaHalfTime: (t) =>
              e(
                (0, s.Ay)((e) => {
                  'string' === t
                    ? (e.createPool.parameters.maHalfTime = t)
                    : (e.createPool.parameters.maHalfTime = new r.g(t).toString());
                })
              ),
            updateMaExpTime: (t) =>
              e(
                (0, s.Ay)((e) => {
                  'string' === t
                    ? (e.createPool.parameters.maExpTime = t)
                    : (e.createPool.parameters.maExpTime = new r.g(t).toString());
                })
              ),
            updateOffpegFeeMultiplier: (t) =>
              e(
                (0, s.Ay)((e) => {
                  'string' === t
                    ? (e.createPool.parameters.offpegFeeMultiplier = t)
                    : (e.createPool.parameters.offpegFeeMultiplier = new r.g(t).toString());
                })
              ),
            updatePoolName: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.poolName = t;
                })
              ),
            updatePoolSymbol: (t) =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool.poolSymbol = t;
                })
              ),
            updatePoolTypeValidation: (t) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.validation.poolType = t;
                })
              );
            },
            updateTokensInPoolValidation: (t) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.validation.tokensInPool = t;
                })
              );
            },
            updateParametersValidation: (t) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.validation.parameters = t;
                })
              );
            },
            updatePoolInfoValidation: (t) => {
              e(
                (0, s.Ay)((e) => {
                  e.createPool.validation.poolInfo = t;
                })
              );
            },
            deployPool: async (a) => {
              let r;
              let d = a.chainId,
                {
                  pools: { fetchNewPool: c, basePools: p },
                  gas: { fetchGasInfo: u },
                  createPool: {
                    poolSymbol: m,
                    swapType: h,
                    tokensInPool: {
                      tokenAmount: f,
                      metaPoolToken: y,
                      tokenA: g,
                      tokenB: A,
                      tokenC: w,
                      tokenD: x,
                      tokenE: b,
                      tokenF: v,
                      tokenG: S,
                      tokenH: k,
                    },
                    parameters: {
                      stableSwapFee: C,
                      stableA: P,
                      cryptoA: j,
                      midFee: T,
                      outFee: I,
                      gamma: R,
                      feeGamma: B,
                      allowedExtraProfit: E,
                      adjustmentStep: G,
                      maExpTime: D,
                      maHalfTime: F,
                      offpegFeeMultiplier: L,
                    },
                    poolName: K,
                    initialPrice: O,
                  },
                  networks: { networks: N },
                } = t(),
                M = (0, l.t)`Please confirm to create pool ${K}.`,
                { dismiss: V } = (0, n.me)(M, 'pending');
              r = V;
              try {
                await u(a);
              } catch (e) {
                console.warn(e);
              }
              if (
                (e(
                  (0, s.Ay)((e) => {
                    e.createPool.transactionState.txStatus = 'CONFIRMING';
                  })
                ),
                h === o.dH)
              ) {
                if ((0, i.XG)(N[d].tricryptoFactory, f, g, A, w)) {
                  let t = [g.address, A.address, w.address];
                  try {
                    let o = await a.tricryptoFactory.deployPool(
                      K,
                      m,
                      t,
                      j,
                      R,
                      T,
                      I,
                      E,
                      B,
                      G,
                      +F,
                      O.initialPrice
                    );
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.txStatus = 'LOADING'),
                          (e.createPool.transactionState.transaction = o),
                          (e.createPool.transactionState.txLink = N[d].scanTxPath(o.hash));
                      })
                    ),
                      V();
                    let i = (0, l.t)`Deploying pool ${K}...`,
                      { dismiss: p } = (0, n.me)(i, 'pending');
                    r = p;
                    let u = await a.tricryptoFactory.getDeployedPoolAddress(o);
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.txStatus = 'SUCCESS'),
                          (e.createPool.transactionState.txSuccess = !0),
                          (e.createPool.transactionState.fetchPoolStatus = 'LOADING'),
                          (e.createPool.transactionState.poolAddress = u);
                      })
                    ),
                      p();
                    let h = (0, l.t)`Pool ${K} deployment successful.`;
                    (0, n.me)(h, 'success', 15e3);
                    let f = await a.tricryptoFactory.fetchRecentlyDeployedPool(u);
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.transactionState.poolId = f;
                      })
                    );
                    let y = await c(a, f);
                    y &&
                      e(
                        (0, s.Ay)((e) => {
                          (e.createPool.transactionState.fetchPoolStatus = 'SUCCESS'),
                            (e.createPool.transactionState.lpTokenAddress = y.pool.lpToken);
                        })
                      );
                  } catch (t) {
                    'function' == typeof r && r(),
                      e(
                        (0, s.Ay)((e) => {
                          (e.createPool.transactionState.txStatus = 'ERROR'),
                            (e.createPool.transactionState.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
                } else {
                  let t = [g.address, A.address];
                  try {
                    let o = Math.round(+F / 0.693),
                      i = await a.twocryptoFactory.deployPool(
                        K,
                        m,
                        t,
                        j,
                        R,
                        T,
                        I,
                        E,
                        B,
                        G,
                        o,
                        O.initialPrice[0]
                      );
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.txStatus = 'LOADING'),
                          (e.createPool.transactionState.transaction = i),
                          (e.createPool.transactionState.txLink = N[d].scanTxPath(i.hash));
                      })
                    ),
                      V();
                    let p = (0, l.t)`Deploying pool ${K}...`,
                      { dismiss: u } = (0, n.me)(p, 'pending');
                    r = u;
                    let h = await a.twocryptoFactory.getDeployedPoolAddress(i);
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.txStatus = 'SUCCESS'),
                          (e.createPool.transactionState.txSuccess = !0),
                          (e.createPool.transactionState.fetchPoolStatus = 'LOADING'),
                          (e.createPool.transactionState.poolAddress = h);
                      })
                    ),
                      u();
                    let f = (0, l.t)`Pool ${K} deployment successful.`;
                    (0, n.me)(f, 'success', 15e3);
                    let y = await a.twocryptoFactory.fetchRecentlyDeployedPool(h);
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.transactionState.poolId = y;
                      })
                    );
                    let g = await c(a, y);
                    g &&
                      e(
                        (0, s.Ay)((e) => {
                          (e.createPool.transactionState.fetchPoolStatus = 'SUCCESS'),
                            (e.createPool.transactionState.lpTokenAddress = g.pool.lpToken);
                        })
                      );
                  } catch (t) {
                    'function' == typeof r && r(),
                      e(
                        (0, s.Ay)((e) => {
                          (e.createPool.transactionState.txStatus = 'ERROR'),
                            (e.createPool.transactionState.errorMessage = t.message);
                        })
                      );
                  }
                }
              } else if (h === o.vD && y) {
                let t = ((e) => {
                    let t = '';
                    return (
                      p[d].find((a) => {
                        a.token.toLowerCase() === e.toLowerCase() && (t = a.pool);
                      }),
                      '' === t ? e : t
                    );
                  })(g.basePool ? g.address : A.address),
                  o = g.basePool ? A : g;
                if (N[d].stableswapFactory)
                  try {
                    let i =
                        1 === o.ngAssetType
                          ? o.oracleAddress
                          : '0x0000000000000000000000000000000000000000',
                      p = 1 === o.ngAssetType ? o.oracleFunction : '0x00000000',
                      u = Math.round(+D / 0.693),
                      h = await a.stableNgFactory.deployMetaPool(
                        t,
                        K,
                        m,
                        o.address,
                        P,
                        C,
                        L,
                        u,
                        0,
                        o.ngAssetType,
                        p,
                        i
                      );
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.txStatus = 'LOADING'),
                          (e.createPool.transactionState.transaction = h),
                          (e.createPool.transactionState.txLink = N[d].scanTxPath(h.hash));
                      })
                    ),
                      V();
                    let f = (0, l.t)`Deploying pool ${K}...`,
                      { dismiss: y } = (0, n.me)(f, 'pending');
                    r = y;
                    let g = await a.stableNgFactory.getDeployedMetaPoolAddress(h);
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.txStatus = 'SUCCESS'),
                          (e.createPool.transactionState.txSuccess = !0),
                          (e.createPool.transactionState.fetchPoolStatus = 'LOADING'),
                          (e.createPool.transactionState.poolAddress = g);
                      })
                    ),
                      y();
                    let A = (0, l.t)`Pool ${K} deployment successful.`;
                    (0, n.me)(A, 'success', 15e3);
                    let w = await a.stableNgFactory.fetchRecentlyDeployedPool(g);
                    e(
                      (0, s.Ay)((e) => {
                        e.createPool.transactionState.poolId = w;
                      })
                    );
                    let x = await c(a, w);
                    x &&
                      e(
                        (0, s.Ay)((e) => {
                          (e.createPool.transactionState.fetchPoolStatus = 'SUCCESS'),
                            (e.createPool.transactionState.lpTokenAddress = x.pool.lpToken);
                        })
                      );
                  } catch (t) {
                    'function' == typeof r && r(),
                      e(
                        (0, s.Ay)((e) => {
                          (e.createPool.transactionState.txStatus = 'ERROR'),
                            (e.createPool.transactionState.errorMessage = t.message);
                        })
                      ),
                      console.warn(t);
                  }
              } else if (N[d].stableswapFactory) {
                let t = [g, A, w, x, b, v, S, k].filter((e) => '' !== e.address);
                try {
                  let o = t.map((e) => e.address),
                    i = t.map((e) => e.ngAssetType),
                    p = t.map((e) =>
                      1 === e.ngAssetType
                        ? e.oracleAddress
                        : '0x0000000000000000000000000000000000000000'
                    ),
                    u = t.map((e) => (1 === e.ngAssetType ? e.oracleFunction : '0x00000000')),
                    h = Math.round(+D / 0.693),
                    f = await a.stableNgFactory.deployPlainPool(K, m, o, P, C, L, i, 0, h, p, u);
                  e(
                    (0, s.Ay)((e) => {
                      (e.createPool.transactionState.txStatus = 'LOADING'),
                        (e.createPool.transactionState.transaction = f),
                        (e.createPool.transactionState.txLink = N[d].scanTxPath(f.hash));
                    })
                  ),
                    V();
                  let y = (0, l.t)`Deploying pool ${K}...`,
                    { dismiss: g } = (0, n.me)(y, 'pending');
                  r = g;
                  let A = await a.stableNgFactory.getDeployedPlainPoolAddress(f);
                  e(
                    (0, s.Ay)((e) => {
                      (e.createPool.transactionState.txStatus = 'SUCCESS'),
                        (e.createPool.transactionState.txSuccess = !0),
                        (e.createPool.transactionState.fetchPoolStatus = 'LOADING'),
                        (e.createPool.transactionState.poolAddress = A);
                    })
                  ),
                    g();
                  let w = (0, l.t)`Pool ${K} deployment successful.`;
                  (0, n.me)(w, 'success', 15e3);
                  let x = await a.stableNgFactory.fetchRecentlyDeployedPool(A);
                  e(
                    (0, s.Ay)((e) => {
                      e.createPool.transactionState.poolId = x;
                    })
                  );
                  let b = await c(a, x);
                  b &&
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.fetchPoolStatus = 'SUCCESS'),
                          (e.createPool.transactionState.lpTokenAddress = b.pool.lpToken);
                      })
                    );
                } catch (t) {
                  'function' == typeof r && r(),
                    e(
                      (0, s.Ay)((e) => {
                        (e.createPool.transactionState.txStatus = 'ERROR'),
                          (e.createPool.transactionState.errorMessage = t.message);
                      })
                    ),
                    console.warn(t);
                }
              }
            },
            resetState: () =>
              e(
                (0, s.Ay)((e) => {
                  e.createPool = { ...e.createPool, ...d };
                })
              ),
          },
        });
    },
    67209: (e, t, a) => {
      'use strict';
      a.d(t, { Ay: () => f, ij: () => y });
      var r = a(39929),
        s = a.n(r),
        o = a(81734),
        i = a(84799),
        n = a(70255),
        l = a(74143),
        d = a(84017),
        c = a(40038),
        p = a(77241),
        u = a(88411);
      let m = 'dashboard',
        h = {
          activeKey: '',
          loading: !1,
          error: '',
          noResult: !1,
          dashboardDataPoolIds: {},
          dashboardDatasMapper: {},
          claimableFees: {},
          formValues: n.yC,
          formStatus: n.kR,
          searchedWalletAddresses: [],
          vecrvInfo: {},
        },
        f = (e, t) => ({
          dashboard: {
            ...h,
            fetchClaimablesAndLockedDetails: async (e) => {
              let {
                lockedCrv: a,
                [m]: {
                  activeKey: r,
                  claimableFees: s,
                  formValues: { walletAddress: o },
                  vecrvInfo: i,
                  ...n
                },
              } = t();
              if (Object.keys(s).length || Object.keys(i).length) return;
              n.fetchVeCrvAndClaimables(r, e, o);
              let { signerAddress: l } = e;
              l && l.toLowerCase() !== o && a.fetchVecrvInfo(e);
            },
            fetchVeCrvAndClaimables: async (e, a, r) => {
              let {
                  [m]: { ...s },
                } = t(),
                o = { ...n.kR, loading: !0 };
              s.setStateByKey('formStatus', o);
              let [i, d] = await Promise.all([
                l.A.lockCrv.vecrvInfo(e, a, r),
                l.A.wallet.userClaimableFees(a, e, r),
              ]);
              if (i.activeKey !== t()[m].activeKey) return;
              let c = i.error ? 'VECRV' : d.error ? 'CLAIMABLE_FEES' : '',
                p = i.error || d.error || '';
              s.setStateByKeys({
                vecrvInfo: { [i.activeKey]: i.error ? null : i.resp },
                claimableFees: { [d.activeKey]: d.error ? null : d },
                formStatus: { ...o, loading: !1, formType: c, error: p },
              });
            },
            fetchDashboardData: async (e, a, r) => {
              let {
                  pools: s,
                  [m]: { activeKey: o, ...i },
                } = t(),
                { chainId: n } = e,
                { wallet: p } = l.A;
              try {
                let { poolList: t, error: o } = await p.getUserPoolList(e, a);
                if ((o && i.setStateByKey('error', o), 0 === t.length))
                  return { dashboardDataMapper: {}, error: o };
                let [l, u] = await Promise.allSettled([
                    p.getUserLiquidityUSD(e, t, a),
                    p.getUserClaimable(e, t, a),
                  ]),
                  m = (0, d.Rm)(l),
                  h = (0, d.Rm)(u),
                  f = t.map((e) => r[e]);
                await s.fetchMissingPoolsRewardsApy(n, f);
                let y = {};
                return (
                  await c.PromisePool.for(f)
                    .withConcurrency(10)
                    .process(async ({ pool: e }, t) => {
                      let [r, s, o] = await Promise.allSettled([
                          p.userPoolRewardCrvApy(e, a),
                          p.userPoolRewardProfit(e, a, n),
                          p.userPoolLpTokenBalances(e, a),
                        ]),
                        i = (0, d.Rm)(r) ?? 0,
                        {
                          baseProfit: l,
                          crvProfit: c,
                          tokensProfit: u,
                        } = (0, d.Rm)(s) ?? {
                          baseProfit: void 0,
                          crvProfit: void 0,
                          tokensProfit: [],
                        },
                        f = (0, d.Rm)(o) ?? {},
                        g = h?.[t] ?? [];
                      y[e.id] = {
                        poolId: e.id,
                        poolName: e.name,
                        poolAddress: e.address,
                        userCrvApy: i,
                        liquidityUsd: m?.[t] || '0',
                        profitBase: l,
                        profitCrv: c,
                        profitOthers: u ?? [],
                        profitsTotalUsd:
                          +(l?.day ?? 0) +
                          +(c?.day ?? 0) * (c?.price ?? 0) +
                          (u ?? []).reduce((e, { day: t, price: a }) => e + +t + a, 0),
                        claimableCrv: g.filter(({ symbol: e, amount: t }) => 'CRV' === e && +t > 0),
                        claimableOthers: g.filter(
                          ({ symbol: e, amount: t }) => 'CRV' !== e && +t > 0
                        ),
                        claimablesTotalUsd: g.reduce((e, { amount: t, price: a }) => e + +t * a, 0),
                        percentStaked: (function ({ gauge: e, lpToken: t }) {
                          if (+t > 0) {
                            let a = ((+e / (+e + +t)) * 100).toFixed(2);
                            return 0 == +a ? '0' : a;
                          }
                          return '';
                        })(f),
                      };
                    }),
                  { dashboardDataMapper: y, error: '' }
                );
              } catch (t) {
                console.error(t);
                let e = 'error-get-dashboard-data';
                return (
                  i.setStateByKey('error', (0, d.u1)(t, e)), { dashboardDataMapper: {}, error: e }
                );
              }
            },
            sortFn: (e, a, r, o) => {
              if (a === n.nS.poolName) return s()(o, ({ poolName: e }) => e.toLowerCase(), [r]);
              if (a === n.nS.liquidityUsd)
                return s()(o, ({ liquidityUsd: e }) => Number(e || 0), [r]);
              if (a === n.nS.profits) return s()(o, ({ profitsTotalUsd: e }) => e, [r]);
              if (a === n.nS.claimables) return s()(o, ({ claimablesTotalUsd: e }) => e, [r]);
              if (a === n.nS.userCrvApy) return s()(o, ({ userCrvApy: e }) => e || 0, [r]);
              else if (a.startsWith('reward')) {
                let i = t().pools.rewardsApyMapper[e];
                if (a === n.nS.rewardBase)
                  return s()(o, ({ poolId: e }) => Number(i[e]?.base || '0'), [r]);
                if (a === n.nS.rewardOthers)
                  return s()(o, ({ poolId: e }) => Number(i[e]?.other?.[0]?.apy || '0'), [r]);
              }
              return [];
            },
            setFormValues: async (e, a, r, s) => {
              let {
                  [m]: {
                    activeKey: i,
                    formValues: l,
                    dashboardDatasMapper: c,
                    searchedWalletAddresses: u,
                    ...h
                  },
                } = t(),
                f = { ...l, ...s };
              f.walletAddress = (f.walletAddress ?? '').toLowerCase();
              let g = (function (e, { walletAddress: t, sortBy: a, sortByOrder: r }) {
                  return `${e ?? ''}-${t ? (0, p.z5)(t) : ''}${a}${r}`;
                })(e, f),
                A = (0, o.P)(f.walletAddress),
                w = c[f.walletAddress];
              if (
                (h.setStateByKeys({
                  activeKey: g,
                  formValues: f,
                  loading: A,
                  noResult: void 0 === w,
                  formStatus: { ...n.kR },
                  error: '',
                }),
                !a || !r)
              )
                return;
              let { chainId: x, signerAddress: b } = a;
              if ('' == f.walletAddress && b) {
                0 !== Object.keys(c).length && (await (0, d.yy)(3e3)),
                  h.setFormValues(e, a, r, { walletAddress: b });
                return;
              }
              let { sortBy: v, sortByOrder: S, walletAddress: k } = f;
              if (!(0, o.P)(k)) return;
              let C = d.vx('APP_DASHBOARD')?.addresses ?? [];
              if (-1 === C.indexOf(k)) {
                let e = [k].concat(C).slice(0, 10);
                h.setStateByKey('searchedWalletAddresses', e),
                  (0, d.Fg)('APP_DASHBOARD', { addresses: e });
              } else
                0 === u.length && C.length > 0 && h.setStateByKey('searchedWalletAddresses', C);
              1 === x && h.fetchClaimablesAndLockedDetails(a);
              let P = y(x, k),
                j = c[P];
              if (0 === Object.keys(j ?? {}).length) {
                let e = await h.fetchDashboardData(a, k, r);
                if (e.error) {
                  h.setStateByKeys({ loading: !1, noResult: !0 });
                  return;
                }
                e.error ||
                  ((j = e.dashboardDataMapper),
                  h.setStateByActiveKey('dashboardDatasMapper', P, j));
              }
              let T = Object.values(j),
                I = (T = h.sortFn(x, v, S, T)).map(({ poolId: e }) => e);
              h.setStateByKey('dashboardDataPoolIds', { [g]: I }),
                h.setStateByKeys({ loading: !1, noResult: 0 === I.length });
            },
            setFormStatusClaimFees: (e) => {
              let { formStatus: a, ...r } = t()[m];
              r.setStateByKey('formStatus', { ...a, ...e });
            },
            setFormStatusVecrv: (e) => {
              let { formStatus: a, ...r } = t()[m];
              r.setStateByKey('formStatus', { ...a, ...e });
            },
            fetchStepClaimFees: async (e, a, r, s) => {
              let { pools: o, gas: d } = t(),
                { claimableFees: c, ...p } = t()[m],
                { provider: h } = u.vT.getState();
              if (!h) return (0, u.GS)(t()[m]);
              let { chainId: f } = a,
                y = { ...n.kR, formType: 'CLAIMABLE_FEES', formProcessing: !0, step: 'CLAIM' };
              p.setStateByKey('formStatus', y), await d.fetchGasInfo(a);
              let g = await l.A.lockCrv.claimFees(e, a, h, s);
              if (g.activeKey !== t()[m].activeKey) return;
              if (g.error)
                return (
                  p.setStateByKey('formStatus', {
                    ...y,
                    formProcessing: !1,
                    step: '',
                    error: g.error,
                  }),
                  g
                );
              let A = await l.A.wallet.userClaimableFees(a, e, r);
              if (
                (p.setStateByKeys({
                  claimableFees: { [A.activeKey]: A },
                  formStatus: {
                    ...y,
                    formType: '',
                    formProcessing: !1,
                    step: '',
                    formTypeCompleted: 'CLAIM',
                  },
                }),
                s === i.T['3CRV'])
              ) {
                let e = o.poolsMapper[f];
                p.fetchDashboardData(a, r, e);
              }
              return g;
            },
            fetchStepWithdrawVecrv: async (e, a, r) => {
              let {
                  gas: s,
                  [m]: { formValues: o, ...i },
                } = t(),
                { provider: d } = u.vT.getState();
              if (!d) return (0, u.GS)(t()[m]);
              let c = { ...n.kR, formType: 'VECRV', formProcessing: !0, step: 'WITHDRAW' };
              i.setStateByKey('formStatus', c), await s.fetchGasInfo(a);
              let p = await l.A.lockCrv.withdrawLockedCrv(a, d, r);
              return (
                (c.formProcessing = !1),
                (c.step = ''),
                p.error && (c.error = p.error),
                p.error ||
                  p.walletAddress !== o.walletAddress ||
                  (c.formTypeCompleted = 'WITHDRAW'),
                i.setStateByKey('formStatus', c),
                p
              );
            },
            setStateByActiveKey: (e, a, r) => {
              Object.keys(t()[m][e]).length > 30
                ? t().setAppStateByKey(m, e, { [a]: r })
                : t().setAppStateByActiveKey(m, e, a, r);
            },
            setStateByKey: (e, a) => {
              t().setAppStateByKey(m, e, a);
            },
            setStateByKeys: (e) => {
              t().setAppStateByKeys(m, e);
            },
            resetState: () => {
              let { walletAddress: e } = t()[m].formValues;
              t().resetAppState(m, { ...h, formValues: { ...h.formValues, walletAddress: e } });
            },
          },
        });
      function y(e, t) {
        return `${e ?? ''}${t ? (0, p.z5)(t) : ''}`;
      }
    },
    70184: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => d });
      var r = a(54568),
        s = a(7620),
        o = a(48341),
        i = a(59339),
        n = a(36074);
      let l = (0, o.Ay)(i.A).withConfig({ componentId: 'sc-a9e6ea7a-0' })([
          'color:inherit;word-break:break-word;',
        ]),
        d = (e) =>
          (0, s.useMemo)(() => {
            let t = {
                alertType: 'info',
                isInformationOnly: !0,
                address: '0x36f8d0d0573ae92326827c4a82fe4ce4c244cab6',
                message: (0, r.jsx)('div', {
                  children: (0, r.jsxs)(n.x, {
                    children: [
                      'Note: maDAI, maUSDC and maUSDT are LP tokens from the Morpho protocol, a third-party service not affiliated with Curve. ',
                      (0, r.jsx)(l, {
                        href: 'https://vaults.morpho.xyz/',
                        children: 'Learn more here',
                      }),
                      '.',
                    ],
                  }),
                }),
              },
              a = {
                '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d': {
                  alertType: 'warning',
                  address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
                  message: (0,
                  n.t)`The Ren network is currently operational but is expected to go offline in the near future. The exact date is currently unknown.`,
                },
                '0x36f8d0d0573ae92326827c4a82fe4ce4c244cab6': t,
                '0xa5269a8e31b93ff27b887b56720a25f844db0529': t,
                '0xafe7131a57e44f832cb2de78ade38cad644aac2f': t,
                '0x8daebade922df735c38c80c7ebd708af50815faa': {
                  alertType: 'info',
                  address: '0x8daebade922df735c38c80c7ebd708af50815faa',
                  isInformationOnly: !0,
                  isCloseOnTooltipOnly: !0,
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'tBTC v1 is in sunset mode: Threshold Network is offering bonds to bring those deprecated v1 out of circulation. Lps in this pool can use those LP tokens to acquire our bonds in',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://app.bondprotocol.finance/#/market/1/115',
                          children: 'https://app.bondprotocol.finance/#/market/1/115',
                        }),
                      ],
                    }),
                  }),
                },
                '0xb01dd87b29d187f3e3a4bf6cdaebfb97f3d9ab98': {
                  alertType: 'warning',
                  address: '0xb01dd87b29d187f3e3a4bf6cdaebfb97f3d9ab98',
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'The Liquity BOLD token has been redeployed. This pool contain the legacy BOLD token.',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://www.liquity.org/blog/liquity-v2-redeployment',
                          children: 'Learn more here',
                        }),
                        '.',
                      ],
                    }),
                  }),
                },
                '0x8c0d76c9b18779665475f3e212d9ca1ed6a1a0e6': {
                  alertType: 'danger',
                  address: '0x8c0d76c9b18779665475f3e212d9ca1ed6a1a0e6',
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'The Zunami protocol has been hacked — the collateral for zunUSD and zunETH has been stolen.',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://x.com/ZunamiProtocol/status/1922993510925435267',
                          children: 'Learn more here',
                        }),
                        '.',
                      ],
                    }),
                  }),
                },
                '0xc2e660c62f72c2ad35ace6db78a616215e2f2222': {
                  alertType: 'danger',
                  address: '0xc2e660c62f72c2ad35ace6db78a616215e2f2222',
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'The Zunami protocol has been hacked — the collateral for zunUSD and zunETH has been stolen.',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://x.com/ZunamiProtocol/status/1922993510925435267',
                          children: 'Learn more here',
                        }),
                        '.',
                      ],
                    }),
                  }),
                },
                '0x06d65ec13465ac5a4376dc101e1141252c4addf8': {
                  alertType: 'danger',
                  address: '0x06d65ec13465ac5a4376dc101e1141252c4addf8',
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'The Zunami protocol has been hacked — the collateral for zunUSD and zunETH has been stolen.',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://x.com/ZunamiProtocol/status/1922993510925435267',
                          children: 'Learn more here',
                        }),
                        '.',
                      ],
                    }),
                  }),
                },
                '0x870908873b6f940e025a7c6879678cb82ec6c9b6': {
                  alertType: 'danger',
                  address: '0x870908873b6f940e025a7c6879678cb82ec6c9b6',
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'The Zunami protocol has been hacked — the collateral for zunUSD and zunETH has been stolen.',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://x.com/ZunamiProtocol/status/1922993510925435267',
                          children: 'Learn more here',
                        }),
                        '.',
                      ],
                    }),
                  }),
                },
                '0x59d9356e565ab3a36dd77763fc0d87feaf85508c': {
                  alertType: 'warning',
                  isInformationOnly: !0,
                  address: '0x59d9356e565ab3a36dd77763fc0d87feaf85508c',
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'Mountain Protocol is winding down USDM. Minting is disabled since May 12, 2025. Primary customers can redeem USDM via Mountain Protocol. Other holders can swap on supported exchanges.',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://x.com/MountainUSDM/status/1921960086362108270',
                          children: 'Learn more here',
                        }),
                      ],
                    }),
                  }),
                },
                '0x97effb790f2fbb701d88f89db4521348a2b77be8': {
                  alertType: 'danger',
                  address: '0x97effb790f2fbb701d88f89db4521348a2b77be8',
                  message: (0, r.jsx)('div', {
                    children: (0, r.jsxs)(n.x, {
                      children: [
                        'A vulnerability in the CVXRewardDistributor contract was exploited allowing the hacker to mint 58m CVG intended for future emissions. CVG has been deprecated.',
                        ' ',
                        (0, r.jsx)(l, {
                          href: 'https://medium.com/@cvg_wireshark/post-mortem-08-01-2024-e80a49d108a0',
                          children: 'Learn more here',
                        }),
                      ],
                    }),
                  }),
                },
              },
              s = (e ?? []).find((e) => !!a[e]);
            return s ? a[s] : null;
          }, [e]);
    },
    70255: (e, t, a) => {
      'use strict';
      a.d(t, { kR: () => n, yC: () => i, nS: () => o, Rg: () => s });
      var r = a(63175);
      function s(e, t) {
        return (
          t &&
          t <
            (function () {
              let e = (0, r.A)().format('YYYY-MM-DD');
              return (0, r.A)(e).valueOf();
            })() &&
          +e > 0
        );
      }
      var o = (function (e) {
        return (
          (e.poolName = 'poolName'),
          (e.userCrvApy = 'userCrvApy'),
          (e.rewardBase = 'rewardBase'),
          (e.rewardOthers = 'rewardOthers'),
          (e.liquidityUsd = 'liquidityUsd'),
          (e.profits = 'profits'),
          (e.claimables = 'claimables'),
          e
        );
      })({});
      let i = { sortBy: 'liquidityUsd', sortByOrder: 'desc', walletAddress: '' },
        n = {
          loading: !1,
          formType: '',
          formProcessing: !1,
          formTypeCompleted: '',
          step: '',
          error: '',
        };
    },
    70657: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => f });
      var r = a(54568),
        s = a(7620),
        o = a(48341),
        i = a(11905),
        n = a(56457),
        l = a(19115),
        d = a(46205),
        c = a(77241),
        p = a(36074);
      let u = (0, o.Ay)(n.A).withConfig({ componentId: 'sc-bf98d7b-0' })([
          'position:relative;top:0.25em;',
        ]),
        m = (0, o.Ay)(n.A).withConfig({ componentId: 'sc-bf98d7b-1' })([
          'position:relative;top:0.2em;',
        ]),
        h = (0, o.Ay)(d.v).withConfig({ componentId: 'sc-bf98d7b-2' })([
          'vertical-align:text-bottom;',
        ]),
        f = ({ isHighlight: e, isLoading: t, poolData: a, rewardsApy: o }) => {
          let { rewardsNeedNudging: n, areCrvRewardsStuckInBridge: f } = a?.gauge.status || {},
            y = ({ crv: e }) => {
              let [t, a] = e;
              if (!t && !a) return null;
              let s = (0, c.ZV)(t, c.hd.PERCENT);
              return a
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      s,
                      ' →',
                      ' ',
                      (0, r.jsxs)('span', {
                        style: { whiteSpace: 'nowrap' },
                        children: [(0, c.ZV)(a, c.hd.PERCENT), ' CRV'],
                      }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, { children: [s, ' CRV'] });
            },
            g = (0, s.useMemo)(() => {
              if (t || void 0 === a);
              else if (n || f)
                return `${(0, c.ZV)(0, { style: 'percent', maximumFractionDigits: 0 })} CRV`;
              else if (o?.crv && (o?.crv[0] !== 0 || o?.crv[1] !== 0))
                return (0, r.jsx)(y, { crv: o?.crv ?? [] });
              return '';
            }, [f, t, a, o?.crv, n]);
          return a?.gauge.isKilled
            ? (0, r.jsx)(i.A, { children: 'Inactive gauge' })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  g
                    ? (0, r.jsx)(d.v, {
                        isBold: e,
                        size: 'md',
                        tooltip: o
                          ? (0,
                            p.t)`CRV LP reward annualized (max tAPR can be reached with max boost of 2.50)`
                          : '',
                        tooltipProps: { placement: 'bottom end' },
                        children: g,
                      })
                    : null,
                  !!o &&
                    f &&
                    (0, r.jsx)(
                      () =>
                        f
                          ? (0, r.jsx)(l.A, {
                              minWidth: '330px',
                              customIcon: (0, r.jsx)(u, { name: 'Close', size: 16 }),
                              children: (0, r.jsxs)(p.x, {
                                children: [
                                  'This pool has CRV rewards that aren’t currently being distributed.',
                                  (0, r.jsx)('br', {}),
                                  'This pool has a very small amount of rewards waiting to be distributed to it; but since the amount of rewards is very small, the bridge used to send these CRV tokens over is holding onto those tokens until they grow to an amount big enough to be bridged. If this pool continues receiving votes, the amount of tokens to be distributed will grow every Thursday, and eventually unlock and be distributed then.',
                                ],
                              }),
                            })
                          : null,
                      {}
                    ),
                  !!o &&
                    n &&
                    (0, r.jsx)(
                      () =>
                        n
                          ? (0, r.jsx)(h, {
                              tooltip: (0, r.jsxs)(p.x, {
                                children: [
                                  'This pool has CRV rewards that aren’t streaming yet.',
                                  (0, r.jsx)('br', {}),
                                  'Head to this pool’s “Withdraw/Claim” page and click on the “Nudge CRV rewards” button to resume reward streaming for you and everyone else!',
                                ],
                              }),
                              tooltipProps: { minWidth: '330px' },
                              children: (0, r.jsx)(m, { name: 'Hourglass', size: 20 }),
                            })
                          : null,
                      {}
                    ),
                ],
              });
        };
    },
    72131: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => u });
      var r = a(54568),
        s = a(48341),
        o = a(5254),
        i = a(35736),
        n = a(86854);
      let l = s.Ay.div.withConfig({ componentId: 'sc-feb07678-0' })([
          'background-color:var(--primary-400);padding:var(--spacing-3);display:flex;align-items:center;',
        ]),
        d = s.Ay.p.withConfig({ componentId: 'sc-feb07678-1' })([
          'color:var(--white);font-size:var(--font-size-2);margin:auto auto auto var(--spacing-2);font-weight:var(--semi-bold);padding-right:var(--spacing-2);display:flex;gap:var(--spacing-2);flex-wrap:wrap;',
        ]),
        c = (0, s.Ay)(o.qO).withConfig({ componentId: 'sc-feb07678-2' })([
          'min-width:24px;min-height:24px;max-width:24px;min-width:24px;color:var(--white);',
        ]),
        p = s.Ay.div.withConfig({ componentId: 'sc-feb07678-3' })([
          'display:flex;gap:var(--spacing-1);flex-wrap:wrap;justify-content:flex-end;flex-shrink:1;',
        ]),
        u = ({ campaignRewardsPool: e, message: t }) =>
          (0, r.jsxs)(l, {
            children: [
              (0, r.jsx)(c, {}),
              (0, r.jsxs)(d, {
                children: [
                  t,
                  (0, r.jsx)(i.G, {
                    $noStyles: !0,
                    href: e[0].dashboardLink,
                    children: 'Learn more',
                  }),
                ],
              }),
              (0, r.jsx)(p, {
                children: e.map((e, t) =>
                  (0, r.jsx)(
                    n.A,
                    { rewardsPool: e, highContrast: !0, banner: !0 },
                    `${e.address}-${t}`
                  )
                ),
              }),
            ],
          });
    },
    72782: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => u });
      var r = a(54568),
        s = a(48341),
        o = a(77540),
        i = a(38526),
        n = a(77241),
        l = a(36074);
      let d = (0, s.Ay)(o.A).withConfig({ componentId: 'sc-3a1bc6f8-0' })([
          'line-height:1.25;svg{position:relative;top:5px;}',
        ]),
        c = (0, s.Ay)(i.A).withConfig({ componentId: 'sc-3a1bc6f8-1' })(['margin-top:1rem;']),
        p = s.Ay.div.withConfig({ componentId: 'sc-3a1bc6f8-2' })([
          'font-size:var(--font-size-6);font-weight:bold;padding-bottom:0.25rem;',
        ]),
        u = function ({ confirmed: e, setConfirmed: t, ...a }) {
          let s = (0, n.ZV)(a?.toAmount),
            o = (0, n.ZV)(a?.exchangeRate, { style: 'percent', maximumFractionDigits: 4 }),
            i = (0, n.ZV)(a?.value, { style: 'percent', maximumFractionDigits: 4 });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(d, {
                alertType: 'error',
                children:
                  'slippage' in a
                    ? (0, r.jsxs)(l.x, {
                        children: [
                          'High slippage!',
                          (0, r.jsx)('br', {}),
                          a.transferType,
                          ' will have ',
                          a.value,
                          '% loss.',
                        ],
                      })
                    : (0, r.jsxs)('span', {
                        children: [
                          (0, r.jsxs)(p, { children: ['Receiving ', s, ' ', a.toToken, '.'] }),
                          'lowExchangeRate' in a
                            ? (0, r.jsxs)(l.x, {
                                children: ['This swap has a low exchange rate (', o, ').'],
                              })
                            : 'priceImpact' in a
                              ? (0, r.jsxs)(l.x, {
                                  children: ['This swap has a high price impact (', i, ').'],
                                })
                              : 'priceImpactLowExchangeRate' in a
                                ? (0, r.jsxs)(l.x, {
                                    children: [
                                      'This swap has a high price impact (',
                                      i,
                                      ') and low exchange rate (',
                                      o,
                                      ').',
                                    ],
                                  })
                                : null,
                        ],
                      }),
              }),
              (0, r.jsx)(c, {
                isSelected: e,
                onChange: (e) => {
                  t(e);
                },
                children: (0, r.jsx)(l.x, { children: 'Confirm warning to proceed.' }),
              }),
            ],
          });
        };
    },
    74143: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => T });
      var r = a(80101),
        s = a.n(r),
        o = a(78218),
        i = a.n(o),
        n = a(23780),
        l = a.n(n),
        d = a(7806),
        c = a.n(d),
        p = a(84799),
        u = a(21522),
        m = a(28822),
        h = a(84017),
        f = a(90263),
        y = a(4671),
        g = a(40038),
        A = a.n(g),
        w = a(77241),
        x = a(63175),
        b = a(23795),
        v = a(36074),
        S = a(76635);
      let k = {
          fetchCustomGasFees: async (e) => {
            let t = { customFeeData: null, error: '' };
            try {
              return (t.customFeeData = await e.getGasInfoForL2()), t;
            } catch (e) {
              return console.error(e), (t.error = (0, h.u1)(e, 'error-get-gas')), t;
            }
          },
          fetchL2GasPrice: async (e) => {
            let t = { l2GasPrice: 0, error: '' };
            try {
              return (t.l2GasPrice = await e.getGasPriceFromL2()), t;
            } catch (e) {
              return console.error(e), (t.error = (0, h.u1)(e, 'error-get-gas')), t;
            }
          },
          fetchL1AndL2GasPrice: async (e, t) => {
            let a = { l1GasPriceWei: 0, l2GasPriceWei: 0, error: '' };
            try {
              if (t.gasL2) {
                let [t, r] = await Promise.all([e.getGasPriceFromL2(), e.getGasPriceFromL1()]);
                (a.l2GasPriceWei = t), (a.l1GasPriceWei = r);
              }
              return a;
            } catch (e) {
              return console.error(e), (a.error = (0, h.u1)(e, 'error-get-gas')), a;
            }
          },
          fetchUsdRates: async (e, t) => {
            (0, S.Rm)('fetchUsdRates', t.length);
            let a = {};
            return (
              await A()
                .for(t)
                .withConcurrency(5)
                .process(async (t) => {
                  try {
                    a[t] = await e.getUsdRate(t);
                  } catch (r) {
                    e.getIsLiteChain() || console.error(`Unable to get usd rate for ${t}`, r),
                      (a[t] = NaN);
                  }
                }),
              a
            );
          },
          waitForTransaction: b.t,
          waitForTransactions: b.c,
        },
        C = {
          withdrawExpected: async (e, t, a, r) => {
            (0, S.Rm)('withdrawExpected', t.name, a, r);
            let s = { activeKey: e, expected: [], error: '' };
            try {
              return (
                (s.expected = a ? await t.withdrawWrappedExpected(r) : await t.withdrawExpected(r)),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-expected')), s;
            }
          },
          withdrawEstGasApproval: async (e, t, a, r, s) => {
            (0, S.Rm)('withdrawEstGasApproval', a.name, s);
            let o = { activeKey: e, estimatedGas: null, isApproved: !1, error: '' };
            try {
              return (
                (o.isApproved = await a.withdrawIsApproved(s)),
                o.isApproved
                  ? (o.estimatedGas = r
                      ? await a.estimateGas.withdrawWrapped(s)
                      : await a.estimateGas.withdraw(s))
                  : (o.estimatedGas = await a.estimateGas.withdrawApprove(s)),
                j(t, o.estimatedGas),
                o
              );
            } catch (e) {
              return console.error(e), (o.error = (0, h.u1)(e, 'error-est-gas-approval')), o;
            }
          },
          withdrawApprove: async (e, t, a, r) => {
            (0, S.Rm)('withdrawApprove', a.name, r);
            let s = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (s.hashes = await a.withdrawApprove(r)), await k.waitForTransactions(s.hashes, t), s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-approve')), s;
            }
          },
          withdraw: async (e, t, a, r, s, o) => {
            (0, S.Rm)('withdraw', a.name, r, s, o);
            let i = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (i.hash = r
                  ? await a.withdrawWrapped(s, Number(o))
                  : await a.withdraw(s, Number(o))),
                await k.waitForTransaction(i.hash, t),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-step-withdraw')), i;
            }
          },
          withdrawImbalanceBonusAndExpected: async (e, t, a, r) => {
            (0, S.Rm)('withdrawImbalanceBonusAndExpected', t.name, a, r);
            let s = { activeKey: e, expected: '', bonus: '', error: '' };
            try {
              let [e, o] = await Promise.allSettled([
                a
                  ? await t.withdrawImbalanceWrappedExpected(r)
                  : await t.withdrawImbalanceExpected(r),
                a ? await t.withdrawImbalanceWrappedBonus(r) : await t.withdrawImbalanceBonus(r),
              ]);
              return (s.expected = (0, h.Rm)(e) ?? ''), (s.bonus = (0, h.Rm)(o) ?? ''), s;
            } catch (e) {
              return (
                console.error(e),
                (s.error = (0, h.u1)(e, 'error-deposit-withdraw-expected-bonus')),
                s
              );
            }
          },
          withdrawImbalanceEstGasApproval: async (e, t, a, r, s) => {
            (0, S.Rm)('withdrawImbalanceEstGasApproval', a.name, r, s);
            let o = { activeKey: e, estimatedGas: null, isApproved: !1, error: '' };
            try {
              return (
                (o.isApproved = await a.withdrawImbalanceIsApproved(s)),
                o.isApproved
                  ? (o.estimatedGas = r
                      ? await a.estimateGas.withdrawImbalanceWrapped(s)
                      : await a.estimateGas.withdrawImbalance(s))
                  : (o.estimatedGas = await a.estimateGas.withdrawImbalanceApprove(s)),
                j(t, o.estimatedGas),
                o
              );
            } catch (e) {
              return console.error(e), (o.error = (0, h.u1)(e, 'error-est-gas-approval')), o;
            }
          },
          withdrawImbalanceApprove: async (e, t, a, r) => {
            (0, S.Rm)('withdrawImbalanceApprove', a.name, r);
            let s = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (s.hashes = await a.withdrawImbalanceApprove(r)),
                await k.waitForTransactions(s.hashes, t),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-approve')), s;
            }
          },
          withdrawImbalance: async (e, t, a, r, s, o) => {
            (0, S.Rm)('withdrawImbalance', a.name, r, s, o);
            let i = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (i.hash = r
                  ? await a.withdrawImbalanceWrapped(s, +o)
                  : await a.withdrawImbalance(s, +o)),
                await k.waitForTransaction(i.hash, t),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-step-withdraw')), i;
            }
          },
          withdrawOneCoinBonusAndExpected: async (e, t, a, r, s) => {
            (0, S.Rm)('withdrawOneCoinBonusAndExpected', t.name, a, r, s);
            let o = { activeKey: e, expected: '', bonus: '', error: '' };
            try {
              let [e, i] = await Promise.allSettled([
                a
                  ? await t.withdrawOneCoinWrappedExpected(r, s)
                  : await t.withdrawOneCoinExpected(r, s),
                a ? await t.withdrawOneCoinWrappedBonus(r, s) : await t.withdrawOneCoinBonus(r, s),
              ]);
              return (o.expected = (0, h.Rm)(e) ?? ''), (o.bonus = (0, h.Rm)(i) ?? ''), o;
            } catch (e) {
              return (
                console.error(e),
                (o.error = (0, h.u1)(e, 'error-deposit-withdraw-expected-bonus')),
                o
              );
            }
          },
          withdrawOneCoinEstGasApproval: async (e, t, a, r, s, o) => {
            (0, S.Rm)('withdrawOneCoinEstGasApproval', a.name, r, s, o);
            let i = { activeKey: e, estimatedGas: null, isApproved: !1, error: '' };
            try {
              return (
                (i.isApproved = await a.withdrawOneCoinIsApproved(s)),
                i.isApproved
                  ? (i.estimatedGas = r
                      ? await a.estimateGas.withdrawOneCoinWrapped(s, o)
                      : await a.estimateGas.withdrawOneCoin(s, o))
                  : (i.estimatedGas = await a.estimateGas.withdrawOneCoinApprove(s)),
                j(t, i.estimatedGas),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-est-gas-approval')), i;
            }
          },
          withdrawOneCoinApprove: async (e, t, a, r) => {
            (0, S.Rm)('withdrawOneCoinApprove', a.name, r);
            let s = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (s.hashes = await a.withdrawOneCoinApprove(r)),
                await k.waitForTransactions(s.hashes, t),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-approve')), s;
            }
          },
          withdrawOneCoin: async (e, t, a, r, s, o, i) => {
            (0, S.Rm)('withdrawOneCoin', a.name, r, s, o, i);
            let n = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (n.hash = r
                  ? await a.withdrawOneCoinWrapped(s, o, +i)
                  : await a.withdrawOneCoin(s, o, +i)),
                await k.waitForTransaction(n.hash, t),
                n
              );
            } catch (e) {
              return console.error(e), (n.error = (0, h.u1)(e, 'error-step-withdraw')), n;
            }
          },
          unstakeEstGas: async (e, t, a, r) => {
            (0, S.Rm)('unstakeEstGas', a.name, r);
            let s = { activeKey: e, estimatedGas: null, isApproved: !0, error: '' };
            try {
              return (s.estimatedGas = await a.estimateGas.unstake(r)), j(t, s.estimatedGas), s;
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-est-gas-approval')), s;
            }
          },
          unstake: async (e, t, a, r) => {
            (0, S.Rm)('unstake', a.name, r);
            let s = { activeKey: e, hash: '', error: '' };
            try {
              return (s.hash = await a.unstake(r)), await k.waitForTransaction(s.hash, t), s;
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-unstake')), s;
            }
          },
          claimableCrv: async (e) => {
            (0, S.Rm)('claimableCrv', e.name);
            let t = await e.claimableCrv();
            return t && Number(t) > 0 ? t : '';
          },
          claimableRewards: async (e, t) => (
            (0, S.Rm)('claimableRewards', e.name),
            (await e.claimableRewards()).filter((e) =>
              1 !== t ? 'CRV' !== e.symbol && +e.amount > 0 : Number(e.amount) > 0
            )
          ),
          claimableTokens: async (e, t, a) => {
            let r = { activeKey: e, claimableRewards: [], claimableCrv: '', error: '' };
            if (!(0, h.$m)(t.gauge.address)) return r;
            try {
              if (t.rewardsOnly()) r.claimableRewards = await C.claimableRewards(t, a);
              else {
                let [e, s] = await Promise.all([C.claimableRewards(t, a), C.claimableCrv(t)]);
                (r.claimableRewards = e), (r.claimableCrv = s);
              }
              return r;
            } catch (e) {
              return console.error(e), (r.error = (0, h.u1)(e, 'error-get-claimable')), r;
            }
          },
          claimCrv: async (e, t, a) => {
            (0, S.Rm)('claimCrv', a.name);
            let r = { activeKey: e, hash: '', error: '' };
            try {
              return (r.hash = await a.claimCrv()), await k.waitForTransaction(r.hash, t), r;
            } catch (e) {
              return console.error(e), (r.error = (0, h.u1)(e, 'error-step-claim')), r;
            }
          },
          claimRewards: async (e, t, a) => {
            (0, S.Rm)('claimRewards', a.name);
            let r = { activeKey: e, hash: '', error: '' };
            try {
              return (r.hash = await a.claimRewards()), await k.waitForTransaction(r.hash, t), r;
            } catch (e) {
              return console.error(e), (r.error = (0, h.u1)(e, 'error-step-claim')), r;
            }
          },
        },
        P = c()((e, t) => e.getUserPoolList(t), { maxAge: 3e5, length: 1, promise: !0 });
      function j(e, t) {
        let a = m.A.getState().networks.networks[e];
        a?.gasL2 &&
          !Array.isArray(t) &&
          null !== t &&
          console.warn('Incorrect estimated gas returned for L2', t);
      }
      let T = {
        helpers: k,
        network: {
          fetchAllPoolsList: async (e, t) => {
            (0, S.Rm)('fetchAllPoolsList', e.chainId);
            let a = t.useApi;
            return (
              await Promise.allSettled([
                e.factory.fetchPools(a),
                e.cryptoFactory.fetchPools(a),
                e.twocryptoFactory.fetchPools(a),
                e.crvUSDFactory.fetchPools(a),
                e.tricryptoFactory.fetchPools(a),
                e.stableNgFactory.fetchPools(a),
              ]),
              await Promise.allSettled([
                e.factory.fetchNewPools(),
                e.cryptoFactory.fetchNewPools(),
                e.twocryptoFactory.fetchNewPools(),
                e.tricryptoFactory.fetchNewPools(),
                e.stableNgFactory.fetchNewPools(),
              ]),
              e.getPoolList()
            );
          },
          fetchNetworkConfig: (e) => ({
            hasDepositAndStake: e.hasDepositAndStake(),
            hasRouter: e.hasRouter(),
          }),
          getTVL: (e) => ((0, S.Rm)('getChainTVL', e.chainId), e.getTVL()),
          getVolume: (e) => ((0, S.Rm)('getChainVolume', e.chainId), e.getVolume()),
          getFailedFetching24hOldVprice: async () => {
            let e = {},
              t = 'https://api.curve.finance/api/getFactoryAPYs-kava';
            try {
              let a = await (0, u.c)(t);
              if (a.success && Object.keys(a.data.poolDetails).length)
                for (let t of a.data.poolDetails)
                  e[t.poolAddress.toLowerCase()] = t.failedFetching24hOldVprice;
              return e;
            } catch (a) {
              return console.warn(`Unable to fetch failedFetching24hOldVprice from ${t}`), e;
            }
          },
        },
        router: {
          routesAndOutput: async (e, t, a, r, s) => {
            let { isFrom: o, fromAmount: i, toAmount: n } = r,
              { fromAddress: l, toAddress: d } = s;
            (0, S.Rm)('routesAndOutput', o, l, i, d, n);
            let c = {
              activeKey: e,
              exchangeRates: [],
              isExchangeRateLow: !1,
              isHighSlippage: !1,
              isStableswapRoute: !1,
              priceImpact: 0,
              routes: [],
              toAmount: '',
              toAmountOutput: '',
              fromAmount: '',
              error: '',
              fetchedToAmount: '',
            };
            try {
              if (o) {
                let { route: e, output: r } = await t.router.getBestRouteAndOutput(l, d, i);
                if (Array.isArray(e) && 0 === e.length && 0 == +r) return c;
                let [s, o] = await Promise.all([
                  t.router.expected(l, d, i),
                  t.router.priceImpact(l, d, i),
                ]);
                c = { ...c, ...(0, y.hw)(t, e, o, r, a, s, d, i, l) };
              } else {
                let e = await t.router.required(l, d, n),
                  { route: r, output: s } = await t.router.getBestRouteAndOutput(l, d, e);
                if (Array.isArray(r) && 0 === r.length && 0 == +s) return c;
                let [o, i] = await Promise.all([
                  t.router.expected(l, d, e),
                  t.router.priceImpact(l, d, e),
                ]);
                c = { ...c, ...(0, y.hw)(t, r, i, s, a, n, d, e, l, o) };
              }
              return c;
            } catch (e) {
              return (
                console.error(e), (c.error = (0, h.u1)(e, 'error-swap-exchange-and-output')), c
              );
            }
          },
          estGasApproval: async (e, t, a, r, s, o) => {
            (0, S.Rm)('routerEstGasApproval', a, r, s);
            let i = { activeKey: e, isApproved: !1, estimatedGas: null, error: '' };
            try {
              return (
                (i.isApproved = await t.router.isApproved(a, s)),
                o ||
                  (i.estimatedGas = i.isApproved
                    ? await t.router.estimateGas.swap(a, r, s)
                    : await t.router.estimateGas.approve(a, s)),
                j(t.chainId, i.estimatedGas),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-est-gas-approval')), i;
            }
          },
          swapApprove: async (e, t, a, r, s) => {
            (0, S.Rm)('swapApprove', r, s);
            let o = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (o.hashes = await t.router.approve(r, s)),
                await k.waitForTransactions(o.hashes, a),
                o
              );
            } catch (e) {
              return console.error(e), (o.error = (0, h.u1)(e, 'error-step-approve')), o;
            }
          },
          swap: async (e, t, a, r, s, o, i) => {
            (0, S.Rm)('swap', r, s, o, i);
            let n = { activeKey: e, hash: '', swappedAmount: '', error: '' };
            try {
              let e = await t.router.swap(r, o, s, +i);
              return (
                e &&
                  (await k.waitForTransaction(e.hash, a),
                  (n.swappedAmount = await t.router.getSwappedAmount(e, o)),
                  (n.hash = e.hash)),
                n
              );
            } catch (e) {
              return console.error(e), (n.error = (0, h.u1)(e, 'error-step-swap')), n;
            }
          },
        },
        pool: {
          getTvl: async (e, t) => {
            let a = { poolId: e.id, value: '0', errorMessage: '' };
            try {
              return (a.value = t.poolCustomTVL[e.id] || (await e.stats.totalLiquidity())), a;
            } catch (t) {
              return console.error(t), e.inApi && (a.errorMessage = 'Unable to get tvl'), a;
            }
          },
          getVolume: async (e, t) => {
            let a = { poolId: e.id, value: '0', errorMessage: '' };
            if (t.isLite) return a;
            try {
              return (a.value = await e.stats.volume()), a;
            } catch (t) {
              return e.inApi && (console.error(t), (a.errorMessage = 'Unable to get volume')), a;
            }
          },
          poolBalances: async (e, t) => {
            if (e.curve.isNoRPC)
              return { error: (0, v.t)`Connect your wallet to see pool balances` };
            try {
              return {
                balances: t ? await e.stats.wrappedBalances() : await e.stats.underlyingBalances(),
              };
            } catch (e) {
              return console.error(e), { error: (0, h.u1)(e, 'error-stats-balances') };
            }
          },
          poolParameters: async (e) => {
            if (e.curve.isNoRPC)
              return { error: (0, v.t)`Connect your wallet to see pool parameters` };
            try {
              return { parameters: await e.stats.parameters() };
            } catch (e) {
              return console.error(e), { error: (0, h.u1)(e, 'error-get-parameters') };
            }
          },
          poolAllRewardsApy: async (e, t) => {
            let a = {
                poolId: t.id,
                base: { day: '0', week: '0' },
                other: [],
                crv: [0, 0],
                error: {},
              },
              { isLite: r, chainId: s, isCrvRewardsEnabled: o } = e;
            if (!r) {
              let [e] = await Promise.allSettled([t.stats.baseApy()]);
              (a.base = (0, h.Rm)(e) ?? { day: '0', week: '0' }),
                'rejected' === e.status
                  ? t.inApi && (a.error.base = !0)
                  : ((a.base.day = new w.BN(a.base.day).toFixed(8)),
                    (a.base.week = new w.BN(a.base.week).toFixed(8)));
            }
            if (!(0, h.$m)(t.gauge.address)) return a;
            if (t.rewardsOnly()) {
              let [e] = await Promise.allSettled([t.stats.rewardsApy()]),
                r = (0, h.Rm)(e);
              if (
                ('rejected' === e.status && ((a.error.others = !0), (a.error.crv = !0)),
                'fulfilled' === e.status && r)
              ) {
                let [e, [t, s]] = (0, f.YM)((0, f.F$)(r));
                (a.other = e.filter((e) => +e.apy > 0)),
                  (a.crv = +t > 0 || +s > 0 ? [t, s] : [0, 0]);
              }
              return a;
            }
            let [i, n] = await Promise.allSettled([t.stats.rewardsApy(), t.stats.tokenApy()]),
              l = (0, h.Rm)(i) ?? [];
            if ('rejected' === i.status) a.error.others = !0;
            else
              for (let e in l) {
                let t = l[e];
                8453 === s
                  ? 'CRV' !== t.symbol && +t.apy > 0 && a.other.push(t)
                  : +t.apy > 0 && a.other.push(t);
              }
            if (
              ('rejected' === n.status && o && (a.error.crv = !0),
              'fulfilled' === n.status && n.value)
            ) {
              let [e] = n.value,
                t = (0, h.Rm)(n);
              t && e && !Number.isNaN(e) && (a.crv = t);
            }
            return a;
          },
          poolTokens: (e, t) => (t ? e.wrappedCoins : e.underlyingCoins),
          poolTokenAddresses: (e, t) => (t ? e.wrappedCoinAddresses : e.underlyingCoinAddresses),
        },
        poolDeposit: {
          depositBalancedAmounts: async (e, t, a) => {
            (0, S.Rm)('depositBalancedAmounts', t.name, { isWrapped: a });
            let r = { activeKey: e, amounts: [], error: '' };
            try {
              return (
                (r.amounts = a
                  ? await t.depositWrappedBalancedAmounts()
                  : await t.depositBalancedAmounts()),
                r
              );
            } catch (e) {
              return console.error(e), (r.error = (0, h.u1)(e, 'error-deposit-balance')), r;
            }
          },
          depositBonus: async (e, t, a, r) => {
            (0, S.Rm)('depositBonus', t.name, a, r);
            let s = { activeKey: e, bonus: '', error: '' };
            try {
              return (s.bonus = a ? await t.depositWrappedBonus(r) : await t.depositBonus(r)), s;
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-deposit-bonus')), s;
            }
          },
          depositExpected: async (e, t, a, r) => {
            (0, S.Rm)('depositExpected', t.name, a, r);
            let s = { activeKey: e, expected: '', error: '' };
            try {
              return (
                (s.expected = a ? await t.depositWrappedExpected(r) : await t.depositExpected(r)), s
              );
            } catch (e) {
              return (
                console.error(e), (s.error = (0, h.u1)(e, 'error-deposit-withdraw-expected')), s
              );
            }
          },
          depositEstGasApproval: async (e, t, a, r, s) => {
            (0, S.Rm)('depositEstGasApproval', a.name, r, s);
            let o = { activeKey: e, isApproved: !1, estimatedGas: null, error: '' };
            try {
              return (
                (o.isApproved = r
                  ? await a.depositWrappedIsApproved(s)
                  : await a.depositIsApproved(s)),
                o.isApproved
                  ? (o.estimatedGas = r
                      ? await a.estimateGas.depositWrapped(s)
                      : await a.estimateGas.deposit(s))
                  : (o.estimatedGas = r
                      ? await a.estimateGas.depositWrappedApprove(s)
                      : await a.estimateGas.depositApprove(s)),
                j(t, o.estimatedGas),
                o
              );
            } catch (e) {
              return (o.error = (0, h.u1)(e, 'error-est-gas-approval')), o;
            }
          },
          depositApprove: async (e, t, a, r, s) => {
            (0, S.Rm)('depositApprove', a.name, r, s);
            let o = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (o.hashes = r ? await a.depositWrappedApprove(s) : await a.depositApprove(s)),
                await k.waitForTransactions(o.hashes, t),
                o
              );
            } catch (e) {
              return console.error(e), (o.error = (0, h.u1)(e, 'error-step-approve')), o;
            }
          },
          deposit: async (e, t, a, r, s, o) => {
            (0, S.Rm)('deposit', a.name, r, s, o);
            let i = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (i.hash = r ? await a.depositWrapped(s, Number(o)) : await a.deposit(s, Number(o))),
                await k.waitForTransaction(i.hash, t),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-step-deposit')), i;
            }
          },
          depositAndStakeBonus: async (e, t, a, r) => {
            (0, S.Rm)('depositAndStakeBonus', t.name, a, r);
            let s = { activeKey: e, bonus: '0', error: '' };
            try {
              return (
                (s.bonus = a
                  ? await t.depositAndStakeWrappedBonus(r)
                  : await t.depositAndStakeBonus(r)),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-deposit-bonus')), s;
            }
          },
          depositAndStakeExpected: async (e, t, a, r) => {
            (0, S.Rm)('depositAndStakeExpected', t.name, a, r);
            let s = { activeKey: e, expected: '', error: '' };
            try {
              return (
                (s.expected = a
                  ? await t.depositAndStakeWrappedExpected(r)
                  : await t.depositAndStakeExpected(r)),
                s
              );
            } catch (e) {
              return (
                console.error(e), (s.error = (0, h.u1)(e, 'error-deposit-withdraw-expected')), s
              );
            }
          },
          depositAndStakeEstGasApproval: async (e, t, a, r, s) => {
            (0, S.Rm)('depositAndStakeEstGasApproval', a.name, r, s);
            let o = { activeKey: e, isApproved: !1, estimatedGas: null, error: '' };
            try {
              return (
                (o.isApproved = r
                  ? await a.depositAndStakeWrappedIsApproved(s)
                  : await a.depositAndStakeIsApproved(s)),
                o.isApproved
                  ? (o.estimatedGas = r
                      ? await a.estimateGas.depositAndStakeWrapped(s)
                      : await a.estimateGas.depositAndStake(s))
                  : (o.estimatedGas = r
                      ? await a.estimateGas.depositAndStakeWrappedApprove(s)
                      : await a.estimateGas.depositAndStakeApprove(s)),
                j(t, o.estimatedGas),
                o
              );
            } catch (e) {
              return console.error(e), (o.error = (0, h.u1)(e, 'error-est-gas-approval')), o;
            }
          },
          depositAndStakeApprove: async (e, t, a, r, s) => {
            (0, S.Rm)('depositAndStakeApprove', a.name, r, s);
            let o = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (o.hashes = r
                  ? await a.depositAndStakeWrappedApprove(s)
                  : await a.depositAndStakeApprove(s)),
                await k.waitForTransactions(o.hashes, t),
                o
              );
            } catch (e) {
              return console.error(e), (o.error = (0, h.u1)(e, 'error-step-approve')), o;
            }
          },
          depositAndStake: async (e, t, a, r, s, o) => {
            (0, S.Rm)('depositAndStake', a.name, r, s, o);
            let i = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (i.hash = r
                  ? await a.depositAndStakeWrapped(s, Number(o))
                  : await a.depositAndStake(s, Number(o))),
                await k.waitForTransaction(i.hash, t),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-step-deposit')), i;
            }
          },
          stakeEstGasApproval: async (e, t, a, r) => {
            (0, S.Rm)('stakeEstGasApproval', a.name, r);
            let s = { activeKey: e, isApproved: !1, estimatedGas: null, error: '' };
            try {
              return (
                (s.isApproved = await a.stakeIsApproved(r)),
                (s.estimatedGas = s.isApproved
                  ? await a.estimateGas.stake(r)
                  : await a.estimateGas.stakeApprove(r)),
                j(t, s.estimatedGas),
                s
              );
            } catch (e) {
              return (s.error = (0, h.u1)(e, 'error-est-gas-approval')), s;
            }
          },
          stakeApprove: async (e, t, a, r) => {
            (0, S.Rm)('stakeApprove', a.name, r);
            let s = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (s.hashes = await a.stakeApprove(r)), await k.waitForTransactions(s.hashes, t), s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-approve')), s;
            }
          },
          stake: async (e, t, a, r) => {
            (0, S.Rm)('stake', a.name, r);
            let s = { activeKey: e, hash: '', error: '' };
            try {
              return (s.hash = await a.stake(r)), await k.waitForTransaction(s.hash, t), s;
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-stake')), s;
            }
          },
        },
        poolWithdraw: C,
        poolSwap: {
          exchangeOutput: async (e, t, a, r, s) => {
            (0, S.Rm)('exchangeOutput', e, t.name, a, r);
            let o = {
                activeKey: e,
                exchangeRates: [],
                isExchangeRateLow: !1,
                priceImpact: 0,
                fromAmount: '',
                toAmount: '',
                error: '',
                fetchedToAmount: '',
              },
              {
                isFrom: i,
                isWrapped: n,
                fromToken: l,
                fromAddress: d,
                fromAmount: c,
                toAddress: p,
                toToken: u,
                toAmount: m,
              } = a;
            try {
              let [e, a] = await Promise.allSettled([
                  i ? (n ? t.swapWrappedExpected(d, p, c) : t.swapExpected(d, p, c)) : '',
                  i ? '' : n ? t.swapWrappedRequired(d, p, m) : t.swapRequired(d, p, m),
                ]),
                r = (0, h.Rm)(e) ?? '',
                f = (0, h.Rm)(a) ?? '';
              'rejected' === e.status &&
                (o.error = e.reason?.reason || 'error-swap-exchange-and-output'),
                'rejected' === a.status &&
                  (o.error = a.reason?.reason || 'error-swap-exchange-and-output');
              let g = i ? c : f,
                [A] = await Promise.allSettled([
                  n ? t.swapWrappedPriceImpact(d, p, g) : t.swapPriceImpact(d, p, g),
                ]),
                w = (0, h.Rm)(A) ?? 0,
                x = i ? (0, y.lI)(r, c) : (0, y.lI)(m, f);
              return (
                (o.exchangeRates = [
                  { from: l, to: u, fromAddress: d, value: x[0] || '', label: `${l}/${u}` },
                  { from: u, to: l, fromAddress: p, value: x[1] || '', label: `${u}/${l}` },
                ]),
                (o.isExchangeRateLow = !(s || (0, y.SF)(d, p, [])) && (0, y.Bu)(t.isCrypto, x[0])),
                (o.priceImpact = w || 0),
                (o.fromAmount = i ? c : f),
                (o.toAmount = i ? r : m),
                o
              );
            } catch (e) {
              return (
                console.error(e), (o.error = (0, h.u1)(e, 'error-swap-exchange-and-output')), o
              );
            }
          },
          estGasApproval: async (e, t, a, r, s, o, i, n) => {
            (0, S.Rm)('poolSwapEstGasApproval', a.name, r, s, o, i, n);
            let l = { activeKey: e, estimatedGas: null, isApproved: !1, error: '' };
            try {
              return (
                (l.isApproved = r
                  ? await a.swapWrappedIsApproved(s, i)
                  : await a.swapIsApproved(s, i)),
                l.isApproved
                  ? (l.estimatedGas = r
                      ? await a.estimateGas.swapWrapped(s, o, i, +n)
                      : await a.estimateGas.swap(s, o, i, +n))
                  : (l.estimatedGas = r
                      ? await a.estimateGas.swapWrappedApprove(s, i)
                      : await a.estimateGas.swapApprove(s, i)),
                j(t, l.estimatedGas),
                l
              );
            } catch (e) {
              return console.error(e), (l.error = (0, h.u1)(e, 'error-est-gas-approval')), l;
            }
          },
          swapApprove: async (e, t, a, r, s, o) => {
            (0, S.Rm)('swapApprove', a.name, r, s, o);
            let i = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (i.hashes = r ? await a.swapWrappedApprove(s, o) : await a.swapApprove(s, o)),
                await k.waitForTransactions(i.hashes, t),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-step-approve')), i;
            }
          },
          swap: async (e, t, a, r, s, o, i, n) => {
            (0, S.Rm)('swap', a.name, r, s, o, i, n);
            let l = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (l.hash = r ? await a.swapWrapped(s, o, i, +n) : await a.swap(s, o, i, +n)),
                await k.waitForTransaction(l.hash, t),
                l
              );
            } catch (e) {
              return console.error(e), (l.error = (0, h.u1)(e, 'error-step-swap')), l;
            }
          },
        },
        wallet: {
          getUserPoolList: async (e, t) => {
            (0, S.Rm)('getUserPoolList', e.chainId, t);
            let a = { poolList: [], error: '' };
            try {
              return (a.poolList = await P(e, t)), a;
            } catch (e) {
              return (a.error = (0, h.u1)(e, 'error-pool-list')), a;
            }
          },
          getUserLiquidityUSD: async (e, t, a) => (
            (0, S.Rm)('getUserLiquidityUSD', t, a), await e.getUserLiquidityUSD(t, a)
          ),
          getUserClaimable: async (e, t, a) => {
            (0, S.Rm)('getUserClaimable', t, a);
            let r = await e.getUserClaimable(t, a);
            return 8453 === e.chainId
              ? r.map((e) => {
                  if (Array.isArray(e)) {
                    let t = e.filter((e) => 'CRV' === e.symbol);
                    if (2 === t.length) return [t[0]];
                  }
                  return e;
                })
              : r;
          },
          poolWalletBalances: async (e, t) => {
            (0, S.Rm)('poolUserPoolBalances', e?.signerAddress, t);
            let a = e.getPool(t),
              [r, s, o] = await Promise.all([
                a.wallet.wrappedCoinBalances(),
                a.wallet.underlyingCoinBalances(),
                a.wallet.lpTokenBalances(),
              ]),
              i = {};
            return (
              Object.entries({ ...r, ...s, ...o }).forEach(([e, t]) => {
                i[e] = new w.BN(t).toString();
              }),
              i
            );
          },
          userClaimableFees: async (e, t, a) => {
            (0, S.Rm)('userClaimableFees', t, a);
            let r = { activeKey: t, '3CRV': '', crvUSD: '', error: '' };
            try {
              return (
                ([r['3CRV'], r.crvUSD] = await Promise.all([
                  e.boosting.claimableFees(a),
                  e.boosting.claimableFeesCrvUSD(a),
                ])),
                r
              );
            } catch (e) {
              return console.error(e), (r.error = (0, h.u1)(e, 'error-get-claimable')), r;
            }
          },
          userPoolLpTokenBalances: async (e, t) => {
            let a = { lpToken: '0', gauge: '0' };
            try {
              let r = await e.wallet.lpTokenBalances(t);
              return (
                l()(r.lpToken) || (a.lpToken = r.lpToken), l()(r.gauge) || (a.gauge = r.gauge), a
              );
            } catch (e) {
              return console.error(e), a;
            }
          },
          userPoolBoost: async (e, t) => {
            let a = await e.userBoost(t);
            return a && 'NaN' === a ? '0' : a;
          },
          userPoolBalances: async (e) => ((0, S.Rm)('userPoolBalances', e.name), e.userBalances()),
          userPoolLiquidityUsd: async (e, t) => {
            let a = '';
            try {
              (0, S.Rm)('userPoolLiquidityUsd', e.name, t);
              let r = await e.userLiquidityUSD(t);
              return 'NaN' !== r && (a = r), a;
            } catch (t) {
              (0, S.Rm)('userPoolLiquidityUsd', t, e.name);
            }
          },
          userPoolRewardCrvApy: async (e, t) => {
            let a = 0;
            if ((0, h.$m)(e.gauge.address) && !e.rewardsOnly()) {
              let r = await e.userCrvApy(t);
              'NaN' !== r && (a = r);
            }
            return a;
          },
          userPoolRewardProfit: async (e, t, a) => {
            let r = {
              baseProfit: { day: '0', week: '0', month: '0', year: '0' },
              crvProfit: {
                day: '0',
                price: 0,
                token: '',
                symbol: '',
                week: '0',
                month: '0',
                year: '0',
              },
              tokensProfit: [],
            };
            if (((r.baseProfit = (0, f.n6)(await e.baseProfit(t))), (0, h.$m)(e.gauge.address))) {
              if (e.rewardsOnly()) {
                let a = await e.rewardsProfit(t),
                  { crvProfit: s, tokensProfit: o } = (0, f.hj)(a);
                s && (r.crvProfit = s), (r.tokensProfit = o);
              } else {
                let s = await Promise.all([e.crvProfit(t), e.rewardsProfit(t)]),
                  o = (0, f.WJ)(s[0]);
                o && (r.crvProfit = o),
                  (8453 === a && s[1].find((e) => 'CRV' === e.symbol)) || (r.tokensProfit = s[1]);
              }
            }
            return r;
          },
          userPoolShare: async (e) => ((0, S.Rm)('userPoolShare', e.name), e.userShare()),
          fetchUserBalances: async (e, t) => {
            let { chainId: a } = e;
            (0, S.Rm)('fetchWalletTokensBalances', a, t.length);
            let r = {},
              o = [],
              n = s()(t, 20);
            await A()
              .for(n)
              .withConcurrency(10)
              .handleError((e, t) => {
                o.push(t);
              })
              .process(async (t) => {
                let a = await e.getBalances(t);
                for (let e in a) {
                  let s = a[e];
                  r[t[e]] = s;
                }
              });
            let l = i()(o);
            return (
              l.length &&
                (await A()
                  .for(l)
                  .handleError((e, t) => {
                    console.error(`Unable to get user balance for ${t}`, e), (r[t] = 'NaN');
                  })
                  .process(async (t) => {
                    let [a] = await e.getBalances([t]);
                    r[t] = a;
                  })),
              r
            );
          },
        },
        lockCrv: {
          vecrvInfo: async (e, t, a) => {
            (0, S.Rm)('vecrvInfo', t.chainId, a);
            let r = {
              activeKey: e,
              resp: {
                crv: '',
                lockedAmountAndUnlockTime: { lockedAmount: '', unlockTime: 0 },
                veCrv: '',
                veCrvPct: '',
              },
              error: '',
            };
            try {
              let [e, s, o, i] = await Promise.all([
                t.boosting.getCrv([a]),
                t.boosting.getLockedAmountAndUnlockTime([a]),
                t.boosting.getVeCrv([a]),
                t.boosting.getVeCrvPct([a]),
              ]);
              return (
                (r.resp.crv = e),
                (r.resp.lockedAmountAndUnlockTime = s),
                (r.resp.veCrv = o),
                (r.resp.veCrvPct = i),
                r
              );
            } catch (e) {
              return console.error(e), (r.error = (0, h.u1)(e, 'error-get-locked-crv-info')), r;
            }
          },
          calcUnlockTime: (e, t, a, r) => {
            (0, S.Rm)('calcUnlockTime', t, a, r);
            let s = 0;
            return (
              'adjust_date' === t && a && r
                ? (s = e.boosting.calcUnlockTime(r, a))
                : 'create' === t && r && (s = e.boosting.calcUnlockTime(r)),
              x.A.utc(s)
            );
          },
          createLock: async (e, t, a, r, s, o) => {
            (0, S.Rm)('createLock', r, s.toString(), o);
            let i = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (i.hash = await t.boosting.createLock(r, o)),
                await k.waitForTransaction(i.hash, a),
                i
              );
            } catch (e) {
              return console.error(e), (i.error = (0, h.u1)(e, 'error-step-create-locked-crv')), i;
            }
          },
          estGasApproval: async (e, t, a, r, s) => {
            (0, S.Rm)('lockCrvEstGasApproval', a, r, s);
            let o = { activeKey: e, isApproved: !1, estimatedGas: null, error: '' };
            try {
              return (
                (o.isApproved =
                  ('adjust_crv' !== a && 'create' !== a) || (await t.boosting.isApproved(r))),
                o.isApproved
                  ? 'create' === a && s
                    ? (o.estimatedGas = await t.boosting.estimateGas.createLock(r, s))
                    : 'adjust_crv' === a
                      ? (o.estimatedGas = await t.boosting.estimateGas.increaseAmount(r))
                      : 'adjust_date' === a &&
                        s &&
                        (o.estimatedGas = await t.boosting.estimateGas.increaseUnlockTime(s))
                  : (o.estimatedGas =
                      'create' === a || 'adjust_crv' === a
                        ? await t.boosting.estimateGas.approve(r)
                        : 0),
                o
              );
            } catch (e) {
              return console.error(e), (o.error = (0, h.u1)(e, 'error-est-gas-approval')), o;
            }
          },
          lockCrvApprove: async (e, t, a, r) => {
            (0, S.Rm)('userLockCrvApprove', r);
            let s = { activeKey: e, hashes: [], error: '' };
            try {
              return (
                (s.hashes = await a.boosting.approve(r)),
                await k.waitForTransactions(s.hashes, t),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-approve')), s;
            }
          },
          increaseAmount: async (e, t, a, r) => {
            (0, S.Rm)('increaseAmount', r);
            let s = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (s.hash = await t.boosting.increaseAmount(r)),
                await k.waitForTransaction(s.hash, a),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-locked-crv')), s;
            }
          },
          increaseUnlockTime: async (e, t, a, r) => {
            (0, S.Rm)('increaseUnlockTime', r);
            let s = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (s.hash = await a.boosting.increaseUnlockTime(r)),
                await k.waitForTransaction(s.hash, t),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-locked-time')), s;
            }
          },
          withdrawLockedCrv: async (e, t, a) => {
            (0, S.Rm)('withdrawLockedCrv', e.chainId);
            let r = { walletAddress: a, hash: '', error: '' };
            try {
              return (
                (r.hash = await e.boosting.withdrawLockedCrv()),
                await k.waitForTransaction(r.hash, t),
                r
              );
            } catch (e) {
              return console.error(e), (r.error = (0, h.u1)(e, 'error-withdraw-locked-crv')), r;
            }
          },
          claimFees: async (e, t, a, r) => {
            (0, S.Rm)('claimFees', t.chainId, r);
            let s = { activeKey: e, hash: '', error: '' };
            try {
              return (
                (s.hash =
                  r === p.T['3CRV']
                    ? await t.boosting.claimFees()
                    : await t.boosting.claimFeesCrvUSD()),
                await k.waitForTransaction(s.hash, a),
                s
              );
            } catch (e) {
              return console.error(e), (s.error = (0, h.u1)(e, 'error-step-claim-fees')), s;
            }
          },
        },
      };
    },
    75689: (e, t, a) => {
      'use strict';
      a.d(t, { kR: () => i, vA: () => l, yC: () => n });
      var r = a(23780),
        s = a.n(r),
        o = a(1030);
      let i = {
          isApproved: !1,
          formProcessing: !1,
          formTypeCompleted: '',
          step: '',
          error: '',
          swapError: '',
        },
        n = { isFrom: null, fromAmount: '', fromError: '', toAmount: '' };
      function l(e, t, a) {
        let r = !1,
          i = [];
        return (
          Array.isArray(e) &&
            e.length > 0 &&
            (i = e.map((e) => {
              let i = t[e.poolId]?.pool;
              if (s()(i))
                try {
                  i = a(e.poolId);
                } catch (t) {
                  (0, o.Rm)('routerBestRouteAndOutput missing poolName', o.b0.ERROR, e.poolId);
                }
              let n = i ? i.name : e.poolId;
              return i && i.isCrypto && (r = !0), { ...e, name: n, routeUrlId: i ? e.poolId : '' };
            })),
          { haveCryptoRoutes: r, routes: i }
        );
      }
    },
    78866: (e, t, a) => {
      'use strict';
      a.d(t, { Ay: () => m, df: () => u, jv: () => p });
      var r = a(90819),
        s = a.n(r),
        o = a(74143),
        i = a(84017),
        n = a(77241),
        l = a(36074);
      let d = 'user',
        c = {
          poolList: {},
          poolListLoaded: !1,
          poolListError: '',
          userCrvApy: {},
          userLiquidityUsd: {},
          userShare: {},
          userWithdrawAmounts: {},
          walletBalances: {},
          walletBalancesLoading: !1,
          loaded: !1,
          loading: !1,
          error: '',
        };
      function p(e) {
        return e ? `${e.chainId}-${(0, n.z5)(e.signerAddress).toLowerCase()}` : '';
      }
      function u(e, t) {
        return `${e.chainId}-${(0, n.z5)(e.signerAddress).toLowerCase()}-${t}`;
      }
      let m = (e, t) => ({
        [d]: {
          ...c,
          fetchUserPoolList: async (e) => {
            let a = p(e),
              r = {};
            try {
              t()[d].setStateByKeys({ poolListLoaded: !1, poolListError: '' });
              let { poolList: s, error: i } = await o.A.wallet.getUserPoolList(e, e.signerAddress);
              for (let e of s) r[e] = !0;
              return (
                t()[d].setStateByActiveKey('poolList', a, r),
                t()[d].setStateByKeys({ poolListLoaded: !0, poolListError: i }),
                r
              );
            } catch (e) {
              return (
                console.error(e),
                t()[d].setStateByActiveKey('poolList', a, {}),
                t()[d].setStateByKeys({
                  poolListLoaded: !0,
                  poolListError: (0, l.t)`Unable to get pools`,
                }),
                r
              );
            }
          },
          fetchUserPoolInfo: async (e, a, r) => {
            let s = {};
            try {
              let n = e.chainId,
                l = u(e, a),
                c = t().pools.poolsMapper[n][a];
              if (
                (t()[d].setStateByKey('walletBalancesLoading', !0),
                (s = await o.A.wallet.poolWalletBalances(e, a)),
                t()[d].setStateByActiveKey('walletBalances', l, s),
                t()[d].setStateByKey('walletBalancesLoading', !1),
                t().userBalances.updateUserBalancesFromPool(s),
                r)
              )
                return s;
              let p = '',
                m = 0,
                h = '',
                f = null,
                y = [];
              if (+s.gauge > 0 || +s.lpToken > 0) {
                let t = c.pool,
                  [a, r, s, l, d] = await Promise.allSettled([
                    o.A.wallet.userPoolBalances(t),
                    o.A.wallet.userPoolLiquidityUsd(t, e.signerAddress),
                    o.A.wallet.userPoolShare(t),
                    o.A.wallet.userPoolRewardCrvApy(t, e.signerAddress),
                    1 === n && (0, i.$m)(t.gauge.address)
                      ? o.A.wallet.userPoolBoost(t, e.signerAddress)
                      : Promise.resolve(''),
                  ]);
                (p = (0, i.Rm)(r) ?? ''),
                  (m = (0, i.Rm)(l) ?? 0),
                  (h = (0, i.Rm)(d) ?? ''),
                  (f = (0, i.Rm)(s) ?? null),
                  (y = (0, i.Rm)(a) ?? []);
              }
              return (
                t()[d].setStateByActiveKey('userCrvApy', l, { crvApy: m, boostApy: h }),
                t()[d].setStateByActiveKey('userWithdrawAmounts', l, y),
                t()[d].setStateByActiveKey('userShare', l, f),
                t()[d].setStateByActiveKey('userLiquidityUsd', l, p),
                s
              );
            } catch (e) {
              return t()[d].setStateByKey('error', 'error-get-pool-wallet-balances'), s;
            }
          },
          setStateByActiveKey: (e, a, r) => {
            Object.keys(t()[d][e]).length > 30
              ? t().setAppStateByKey(d, e, { [a]: r })
              : t().setAppStateByActiveKey(d, e, a, r);
          },
          setStateByKey: (e, a) => {
            t().setAppStateByKey(d, e, a);
          },
          setStateByKeys: (e) => {
            t().setAppStateByKeys(d, e);
          },
          resetState: () => {
            t().resetAppState(d, s()(c));
          },
        },
      });
    },
    79614: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => C });
      var r = a(54568),
        s = a(62942),
        o = a(7620),
        i = a(48341),
        n = a(56457),
        l = a(59339),
        d = a(23173),
        c = a(77241);
      let p = i.Ay.div.withConfig({ componentId: 'sc-fba15a49-0' })(
          ['display:flex;', ''],
          ({ $isManyLinks: e }) => {
            if (e)
              return `
        align-items: flex-start;
        flex-direction: column;
        grid-gap: var(--spacing-1);
      `;
          }
        ),
        u = i.Ay.div.withConfig({ componentId: 'sc-fba15a49-1' })(
          ['@media (min-width:', 'rem){white-space:nowrap;}'],
          c.fi.sm
        ),
        m = i.Ay.div.withConfig({ componentId: 'sc-fba15a49-2' })([
          'display:inline-block;width:24px;height:24px;margin-right:0.2rem;',
        ]),
        h = i.Ay.div.withConfig({ componentId: 'sc-fba15a49-3' })([
          'align-items:center;display:grid;grid-auto-flow:column;justify-content:flex-start;font-size:var(--font-size-3);font-weight:bold;',
        ]),
        f = (0, i.Ay)(l.A).withConfig({ componentId: 'sc-fba15a49-4' })(['color:inherit;']),
        y = (0, i.Ay)(d.A).withConfig({ componentId: 'sc-fba15a49-5' })(
          [
            'display:inline-block;opacity:0.75;background-color:hsl(0deg 0% 50% / 10%);padding:0.2rem 0.5rem 0.4rem;margin:0.25rem 0.25rem 0 0;&:hover{opacity:1;}',
            '{font-size:var(--font-size-1);text-decoration:none;text-transform:uppercase;&:hover{color:inherit;text-transform:uppercase;}}@media (min-width:',
            'rem){margin:0 0.2rem;}',
          ],
          f,
          c.fi.sm
        ),
        g = ({ className: e = '', title: t, titleIcon: a, externalLinks: s }) =>
          (0, r.jsxs)(p, {
            className: e,
            $isManyLinks: s.length > 2,
            children: [
              (0, r.jsxs)(h, { children: [(0, r.jsx)(m, { children: a }), t] }),
              ' ',
              (0, r.jsx)(u, {
                children: s.map(({ label: e, url: t }) =>
                  (0, r.jsxs)(
                    o.Fragment,
                    {
                      children: [
                        (0, r.jsx)(y, {
                          isBold: !0,
                          children: (0, r.jsxs)(f, {
                            href: t,
                            children: [
                              e,
                              ' ',
                              (0, r.jsx)(n.A, {
                                className: 'svg-tooltip',
                                name: 'Launch',
                                size: 16,
                              }),
                            ],
                          }),
                        }),
                        ' ',
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          });
      var A = a(55906),
        w = a(31305),
        x = a(64387),
        b = a(5254),
        v = a(35736),
        S = a(38071);
      let k = i.Ay.div.withConfig({ componentId: 'sc-3c1b9d42-0' })(
          [
            'align-items:flex-start;display:flex;flex-direction:column;a{word-break:break-word;}@media (min-width:',
            'rem){align-items:center;flex-direction:row;}',
          ],
          c.fi.sm
        ),
        C = (e, t) => {
          let a = (0, s.useParams)();
          return (0, o.useMemo)(() => {
            let s = () => ({
                alertType: 'danger',
                isDisableDeposit: !0,
                isInformationOnly: !0,
                isCloseOnTooltipOnly: !0,
                message: (0, r.jsx)(k, {
                  children: (0, r.jsxs)('div', {
                    children: [
                      'zStables (zETH, UZD) have encountered an attack. The collateral remain secure, we delve into the ongoing investigation. ',
                      (0, r.jsx)('span', {
                        style: { whiteSpace: 'nowrap' },
                        children: '—Zunami Protocol',
                      }),
                      ' ',
                      (0, r.jsx)(v.G, {
                        $noStyles: !0,
                        href: 'https://twitter.com/ZunamiProtocol/status/1690863406079696896?s=20',
                        children:
                          'https://twitter.com/ZunamiProtocol/status/1690863406079696896?s=20',
                      }),
                    ],
                  }),
                }),
              }),
              o = () => ({
                alertType: 'warning',
                isInformationOnly: !0,
                isCloseOnTooltipOnly: !0,
                minWidth: '350px',
                message: (0, r.jsx)(k, {
                  children: (0, r.jsxs)(x.A, {
                    grid: !0,
                    gridGap: 2,
                    children: [
                      (0, r.jsxs)('p', {
                        children: [
                          'Please note that exchanges on synthetix synths are expected to be disabled and users can either withdraw liquidity from the underlying token, or redeem their synths to sUSD on',
                          ' ',
                          (0, r.jsx)(v.G, {
                            $noStyles: !0,
                            href: 'https://staking.synthetix.io/wallet/balances/',
                            children: 'https://staking.synthetix.io/wallet/balances/',
                          }),
                        ],
                      }),
                      (0, r.jsxs)('p', {
                        children: [
                          'Users are encouraged to exit the pools in order to avoid getting their holdings‘ value diluted with the discountRate For more information please refer to',
                          ' ',
                          (0, r.jsx)(v.G, {
                            $noStyles: !0,
                            href: 'https://gov.curve.finance/t/kill-gauges-on-all-non-susd-curve-pools-on-ethereum/10033/2',
                            children:
                              'https://gov.curve.finance/t/kill-gauges-on-all-non-susd-curve-pools-on-ethereum/10033/2',
                          }),
                        ],
                      }),
                      (0, r.jsx)('p', {
                        children:
                          'Please note that sUSD is not involved, so these would be on the other pools sETH, sBTC, sForex ...',
                      }),
                    ],
                  }),
                }),
              }),
              i = (e) => ({
                alertType: '',
                isPoolPageOnly: !0,
                message: (0, r.jsx)(g, {
                  title: 'CrossCurve links',
                  titleIcon: (0, r.jsx)(b.$x, {}),
                  externalLinks: e,
                }),
              }),
              n = {
                '0x939721ce04332ca04b100154e0c8fcbb4ebaf695': i([
                  {
                    label: 'Redeem e-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x939721ce04332ca04b100154e0c8fcbb4ebaf695&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.eywa.fi/swap?inputChainId=3&inputToken=0xc2132d05d31c914a87c6611c10748aeb04b58e8f&outputChainId=1&outputToken=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
                  },
                ]),
                '0x228f20f430fd7a6f5b1abea69a5ab8eb2973853c': i([
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x228f20f430fd7a6f5b1abea69a5ab8eb2973853c&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.eywa.fi/swap?inputChainId=3&inputToken=0xc2132d05d31c914a87c6611c10748aeb04b58e8f&outputChainId=1&outputToken=0x55d398326f99059ff775485246999027b3197955',
                  },
                ]),
                '0x6bb9a6b7066445da6bef268b91810ae750431587': i([
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x6bb9a6b7066445da6bef268b91810ae750431587&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.eywa.fi/swap?inputChainId=3&inputToken=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputChainId=1&outputToken=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
                  },
                ]),
                '0x4df0b8323f7b6d45abf39ecbd3f18bd5fcbcb1b2': i([
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x4df0b8323f7b6d45abf39ecbd3f18bd5fcbcb1b2&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.eywa.fi/swap?inputChainId=3&inputToken=0x8f3cf7ad23cd3cadbd9735aff958023239c6a063&outputChainId=1&outputToken=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
                  },
                ]),
                '0x6e0dc5a4ef555277db3435703f0e287040013763': i([
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x6e0dc5a4ef555277db3435703f0e287040013763&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.eywa.fi/swap?inputChainId=3&inputToken=0x2e1ad108ff1d8c782fcbbb89aad783ac49586756&outputChainId=1&outputToken=0x40af3827f39d0eacbf4a168f8d4ee67c121d11c9',
                  },
                ]),
                '0x353bb1dfbc52bc3b0e7d264216b1455df00f50be': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x353bb1dfbc52bc3b0e7d264216b1455df00f50be&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x353bb1dfbc52bc3b0e7d264216b1455df00f50be&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=137&inputToken=0x3c499c542cef5e3811e1192ce70d8cc03d5c3359&outputChainId=10&outputToken=0xc52d7f23a2e460248db6ee192cb23dd12bddcbf6',
                  },
                ]),
                '0x5ecac5fb1d9634f9e1c2dab2381b9adaada5f80b': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x5ecac5fb1d9634f9e1c2dab2381b9adaada5f80b&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x5ecac5fb1d9634f9e1c2dab2381b9adaada5f80b&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=137&inputToken=0xc2132d05d31c914a87c6611c10748aeb04b58e8f&outputChainId=42161&outputToken=0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
                  },
                ]),
                '0x7d04f016749c215e52138b06bb35ee8491e739fd': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x7d04f016749c215e52138b06bb35ee8491e739fd&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x7d04f016749c215e52138b06bb35ee8491e739fd&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=7&inputToken=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9&outputChainId=3&outputToken=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
                  },
                ]),
                '0x3f833ed02629545dd78afc3d585f7f3918a3de62': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x3f833ed02629545dd78afc3d585f7f3918a3de62&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x3f833ed02629545dd78afc3d585f7f3918a3de62&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=7&inputToken=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9&outputChainId=3&outputToken=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
                  },
                ]),
                '0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=13&inputToken=0x0000000000000000000000000000000000000000&outputChainId=21&outputToken=0x4200000000000000000000000000000000000006',
                  },
                ]),
                '0x37f5dae6039c8ec4c32ad7d3e2a07acaa55c08f9': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x37F5dae6039C8eC4c32ad7D3e2a07aCaa55C08f9&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x37F5dae6039C8eC4c32ad7D3e2a07aCaa55C08f9&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=13&inputToken=0xb7ecb2aa52aa64a717180e030241bc75cd946726&outputChainId=21&outputToken=0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf',
                  },
                ]),
                '0xa3a63276b8668583e1b47b979d1093d9aaf431ee': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0xa3a63276b8668583e1b47b979d1093d9aaf431ee&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0xa3a63276b8668583e1b47b979d1093d9aaf431ee&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=37&inputToken=0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e&outputChainId=3&outputToken=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
                  },
                ]),
                '0x15ee0d5f92fd869c2fbf26ea785e9d150353568d': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x15ee0d5f92fd869c2fbf26ea785e9d150353568d&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x15ee0d5f92fd869c2fbf26ea785e9d150353568d&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=53&inputToken=0x29219dd400f2bf60e5a23d13be72b486d4038894&outputChainId=51&outputToken=0xd988097fb8612cc24eec14542bc03424c656005f',
                  },
                ]),
                '0xabba40f628f055149f1c7415c4388363392279c3': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0xabba40f628f055149f1c7415c4388363392279c3&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0xabba40f628f055149f1c7415c4388363392279c3&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=51&inputToken=0x4200000000000000000000000000000000000006&outputChainId=49&outputToken=0x420000000000000000000000000000000000000a',
                  },
                ]),
                '0xfc89b519658967fcbe1f525f1b8f4bf62d9b9018': s(),
                '0xfc636d819d1a98433402ec9dec633d864014f28c': s(),
                '0x68934f60758243eafaf4d2cfed27bf8010bede3a': s(),
                '0x0fa949783947bf6c1b171db13aeacbb488845b3f': {
                  alertType: 'warning',
                  isDisableDeposit: !0,
                  isDisableSwap: !0,
                  isInformationOnly: !0,
                  isCloseOnTooltipOnly: !0,
                  message: (0, r.jsx)(k, {
                    children: (0, r.jsxs)('div', {
                      children: [
                        'Deposit and swap are disabled, see',
                        ' ',
                        (0, r.jsx)(v.G, {
                          $noStyles: !0,
                          href: 'https://twitter.com/geistfinance',
                          children: 'https://twitter.com/geistfinance',
                        }),
                        ' ',
                        'for additional information.',
                      ],
                    }),
                  }),
                },
                '0xc2d54ffb8a61e146110d2fbdd03b12467fe155ac': (() => {
                  let e =
                      a &&
                      (0, w.Yn)(a, `${A.a$.PAGE_POOLS}/factory-v2-372${A.a$.PAGE_POOL_DEPOSIT}`),
                    t = `PRISMA/yPRISMA pool (${(0, S.Wr)('0x69833361991ed76f9e8dbbcdf9ea1520febfb4a7')})`;
                  return {
                    isDisableDeposit: !0,
                    isInformationOnly: !0,
                    isCloseOnTooltipOnly: !0,
                    alertType: 'warning',
                    message: (0, r.jsx)(k, {
                      children: (0, r.jsxs)('div', {
                        children: [
                          'This pool has been deprecated. Please use the',
                          ' ',
                          e
                            ? (0, r.jsx)(v.E, { $noStyles: !0, href: e, children: t })
                            : (0, r.jsx)('span', { children: t }),
                          ' ',
                          'instead.',
                        ],
                      }),
                    }),
                  };
                })(),
                '0xf253f83aca21aabd2a20553ae0bf7f65c755a07f': o(),
                '0x7fc77b5c7614e1533320ea6ddc2eb61fa00a9714': o(),
                '0xc5424b857f758e906013f3555dad202e4bdb4567': o(),
                '0x0ce6a5ff5217e38315f87032cf90686c96627caa': o(),
                '0x9c2c8910f113181783c249d8f6aa41b51cde0f0c': o(),
                '0x8461a004b50d321cb22b7d034969ce6803911899': o(),
                '0x19b080fe1ffa0553469d20ca36219f17fcf03859': o(),
                '0x8818a9bb44fbf33502be7c15c500d0c783b73067': o(),
                '0x3f1b0278a9ee595635b61817630cc19de792f506': o(),
                '0x2dded6da1bf5dbdf597c45fcfaa3194e53ecfeaf': {
                  alertType: 'warning',
                  isInformationOnlyAndShowInForm: !0,
                  message: (0, r.jsx)(k, {
                    children: (0, r.jsx)('div', {
                      children:
                        'Ironbank protocol is deprecated. Please do not supply liquidity to this pool.',
                    }),
                  }),
                },
                '0x960ea3e3c7fb317332d990873d354e18d7645590': {
                  alertType: 'danger',
                  isDisableDeposit: !0,
                  isInformationOnly: !0,
                  isCloseOnTooltipOnly: !0,
                  message: (0, r.jsx)(k, {
                    children: (0, r.jsxs)('div', {
                      children: [
                        'This pool might be at risk of being exploited. While security researchers have not identified a profitable exploit, we recommend exiting this pool.',
                        ' ',
                        (0, r.jsx)(v.G, {
                          $noStyles: !0,
                          href: 'https://twitter.com/CurveFinance/status/1685925429041917952',
                          children: 'https://twitter.com/CurveFinance/status/1685925429041917952',
                        }),
                      ],
                    }),
                  }),
                },
                '0xb755b949c126c04e0348dd881a5cf55d424742b2': {
                  alertType: 'info',
                  isCloseOnTooltipOnly: !0,
                  isInformationOnlyAndShowInForm: !0,
                  message: (0, r.jsx)(k, {
                    children: (0, r.jsxs)('div', {
                      children: [
                        'Deposit and Swap with wBTC.e will return an error due to an Aave community decision to freeze this asset.',
                        ' ',
                        (0, r.jsx)(v.G, {
                          $noStyles: !0,
                          href: 'https://app.aave.com/governance/v3/proposal/?proposalId=2',
                          children: 'More details',
                        }),
                      ],
                    }),
                  }),
                },
                '0x38dd6b3c096c8cbe649fa0039cc144f333be8e61': i([
                  {
                    label: 'Mint s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x38dd6b3c096c8cbe649fa0039cc144f333be8e61&action=deposit&type=curve',
                  },
                  {
                    label: 'Redeem s-tokens',
                    url: 'https://app.crosscurve.fi/liquidity?pool=0x38dd6b3c096c8cbe649fa0039cc144f333be8e61&action=withdraw&type=curve',
                  },
                  {
                    label: 'Cross-chain swap',
                    url: 'https://app.crosscurve.fi/swap?inputChainId=7&inputToken=0x11cdb42b0eb46d95f990bedd4695a6e3fa034978&outputChainId=13&outputToken=0xd533a949740bb3306d119cc777fa900ba034cd52',
                  },
                ]),
              };
            if (e) {
              if (n[e]) return n[e];
              if (t)
                return {
                  alertType: 'danger',
                  isDisableDeposit: !0,
                  isInformationOnly: !0,
                  isCloseOnTooltipOnly: !0,
                  message: (0, r.jsx)(k, {
                    children: (0, r.jsxs)('div', {
                      children: [
                        'This pool has been exploited due to a vulnerability found in Vyper versions v0.2.15, v0.2.16, or v0.3.0. For additional information, please click on the post-mortem link:',
                        ' ',
                        (0, r.jsx)(v.G, {
                          $noStyles: !0,
                          href: 'https://hackmd.io/@LlamaRisk/BJzSKHNjn',
                          children: 'https://hackmd.io/@LlamaRisk/BJzSKHNjn',
                        }),
                      ],
                    }),
                  }),
                };
            }
            return null;
          }, [e, a, t]);
        };
    },
    79683: (e, t, a) => {
      var r = {
        './gaugeTotalSupply.json': [43495, 3495],
        './lpTokenTotalSupply.json': [32969, 2969],
        './poolTotalSupply.json': [25420, 5420],
        './stored_rates.json': [97696, 7696],
      };
      function s(e) {
        if (!a.o(r, e))
          return Promise.resolve().then(() => {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        var t = r[e],
          s = t[0];
        return a.e(t[1]).then(() => a.t(s, 19));
      }
      (s.keys = () => Object.keys(r)), (s.id = 79683), (e.exports = s);
    },
    81653: (e, t, a) => {
      'use strict';
      a.d(t, {
        AI: () => m,
        Dy: () => l,
        LV: () => p,
        UN: () => y,
        Wb: () => g,
        XG: () => f,
        _i: () => n,
        hS: () => i,
        k3: () => h,
        oh: () => o,
        zD: () => d,
        zK: () => u,
      });
      var r = a(81734),
        s = a(39418);
      let o = (e) => '' !== e,
        i = (e, t, a, r, s, o, i, n) =>
          '' !== e.address ||
          '' !== t.address ||
          '' !== a.address ||
          '' !== r.address ||
          '' !== s.address ||
          '' !== o.address ||
          '' !== i.address ||
          '' !== n.address,
        n = (e, t, a, r, o, i, n, l, d, c, p) =>
          e === s.dH && c && !p
            ? '' !== t.address && '' !== a.address && '' !== r.address
            : m([t, a, r, o, i, n, l, d]) && e === s.vD
              ? u([t, a, r, o, i, n, l, d]) && '' !== t.address && '' !== a.address
              : '' !== t.address && '' !== a.address,
        l = (e, t, a, r, o, i, n, l, d, c) =>
          null !== c &&
          (e === s.vD
            ? null !== t
            : e === s.dH &&
              (f(d, o, i, n, l)
                ? null !== a && '0' !== r[0] && '0' !== r[1]
                : null !== a && '0' !== r[0])),
        d = (e, t, a, r) => '' !== a && '' !== r && (t == s.vD || e),
        c = r.P,
        p = (e) => e.endsWith('()'),
        u = (e) => {
          let t = e.filter((e) => 1 === e.ngAssetType),
            a = t.every((e) => c(e.oracleAddress)),
            r = t.every((e) => p(e.oracleFunction));
          return a && r;
        },
        m = (e) => e.some((e) => 1 === e.ngAssetType && '' !== e.address),
        h = (e, t, a, r) => e && t && a && r,
        f = (e, t, a, r, s) =>
          e && 3 === t && '' !== a.address && '' !== r.address && '' !== s.address,
        y = (e, t) => '' !== e && t.some((t) => t.token === e),
        g = (e, t, a, r) => {
          let s = [];
          return (
            (y(e, t) || a.basePool || r.basePool) &&
              (y(e, t)
                ? (s = t.find((t) => t.token.toLowerCase() === e.toLowerCase())?.coins || [])
                : a.basePool
                  ? (s =
                      t.find((e) => e.token.toLowerCase() === a.address.toLowerCase())?.coins || [])
                  : r.basePool &&
                    (s =
                      t.find((e) => e.token.toLowerCase() === r.address.toLowerCase())?.coins ||
                      [])),
            s
          );
        };
    },
    83635: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => l });
      var r = a(54568),
        s = a(60171),
        o = a(19115),
        i = a(77241),
        n = a(36074);
      let l = ({ loading: e, priceImpact: t, isHighImpact: a }) =>
        (0, r.jsx)(s.A, {
          isBold: a,
          variant: a ? 'error' : void 0,
          loading: e,
          loadingSkeleton: [80, 23],
          label: a ? (0, n.t)`High price impact:` : (0, n.t)`Price impact:`,
          tooltip: (0, r.jsx)(o.A, {
            placement: 'top end',
            minWidth: '250px',
            children: (0,
            n.t)`Price change in the market that happens when a trader buys or sells an asset.`,
          }),
          children: (0, i.ZV)(t, { style: 'percent', ...(0, i.Ho)(t, 5) }),
        });
    },
    84017: (e, t, a) => {
      'use strict';
      a.d(t, {
        q5: () => y,
        Rm: () => m,
        We: () => g,
        gv: () => f,
        u1: () => u,
        vx: () => i,
        cV: () => p,
        DT: () => c,
        $m: () => d,
        Fg: () => n,
        G_: () => l,
        yy: () => h,
        Ed: () => A,
      });
      var r = a(94668),
        s = a.n(r);
      let o = { APP_DASHBOARD: 'curve-app-dashboard' };
      function i(e) {
        let t = window.localStorage.getItem(o[e]),
          a = {};
        if (t)
          try {
            a = JSON.parse(t) ?? {};
          } catch (e) {
            console.error(e);
          }
        if ('APP_DASHBOARD' === e)
          return { addresses: Array.isArray(a.addresses) ? a.addresses : [] };
      }
      function n(e, t) {
        let a = i(e),
          r = s()(a, t);
        window.localStorage.setItem(o[e], JSON.stringify(r));
      }
      function l(e) {
        return e.length > 30 ? `${e.slice(0, 10)}...` : e;
      }
      let d = (e) => e?.length === 42 && '0x0000000000000000000000000000000000000000' !== e;
      function c(e, t) {
        return e < 0 && Math.abs(e) > Number(t);
      }
      function p(e) {
        return Number(e) > 0;
      }
      function u(e, t) {
        if (!e?.message) return t;
        {
          let t = e.message.toString();
          return t.includes('Bad swap type')
            ? 'error-swap-not-available'
            : t.includes('user rejected action')
              ? 'error-user-rejected-action'
              : e.message;
        }
      }
      function m(e) {
        if ('fulfilled' === e.status) return e.value;
        console.error(e.reason);
      }
      let h = (e = Math.floor(9001 * Math.random() + 1e3)) => new Promise((t) => setTimeout(t, e));
      function f(e, t) {
        let a = 'factory-v2-',
          r = 'factory-crypto-';
        return e.match(a)
          ? `${t}/factory/${e.split(a)[1]}`
          : e.match(r)
            ? `${t}/factory-crypto/${e.split(r)[1]}`
            : `${t}/${e}`;
      }
      let y = (e) => setTimeout(() => e(), 50),
        g = (e, t) => (e && t ? `${e}-${t}` : ''),
        A = (e) => (t) => ({ chain: e, address: t.address, symbol: t.symbol, volume: t.volume });
    },
    84224: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => d });
      var r = a(54568),
        s = a(48341),
        o = a(47990),
        i = a(56457);
      let n = (0, s.Ay)(o.A).withConfig({ componentId: 'sc-4ded5818-0' })([
          'background:var(--nav_link--active--hover--background-color);color:var(--box--primary--color);text-decoration:none;align-items:center;display:flex;font-size:var(--font-size-2);font-weight:var(--bold);padding:var(--spacing-narrow) var(--spacing-normal);justify-content:center;transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:hover{background:var(--primary-400);color:var(--white);cursor:pointer;}&:focus-visible{outline:var(--button_text--hover--color) auto 2px;}',
        ]),
        l = (0, s.Ay)(i.A).withConfig({ componentId: 'sc-4ded5818-1' })([
          'margin:auto 0;margin-left:var(--spacing-2);',
        ]),
        d = ({ title: e, onClick: t }) =>
          (0, r.jsxs)(n, {
            onClick: t,
            children: [e, (0, r.jsx)(l, { name: 'ArrowRight', size: 16 })],
          });
    },
    84799: (e, t, a) => {
      'use strict';
      a.d(t, { T: () => w, A: () => v });
      var r = a(54568),
        s = a(7620),
        o = a(48341),
        i = a(50722),
        n = a(63711),
        l = a(70255),
        d = a(28822),
        c = a(47990),
        p = a(24451),
        u = a(6990),
        m = a(88411),
        h = a(36074);
      let f = ({
        activeKey: e,
        loading: t,
        walletAddress: a,
        steps: o,
        setSteps: i,
        setTxInfoBar: f,
      }) => {
        let { curve: y, isValidAddress: g } = (0, n.Vd)(),
          A = (0, d.A)((t) => t.dashboard.claimableFees[e]),
          x = (0, d.A)((e) => e.dashboard.formStatus.formProcessing),
          b = (0, d.A)((e) => e.dashboard.fetchStepClaimFees),
          v = (0, d.A)((e) => e.dashboard.setFormStatusClaimFees),
          { chainId: S, signerAddress: k } = y || {},
          C = (0, d.A)((e) => (S ? e.networks.networks[S] : null)),
          [P, j] = (0, s.useState)(''),
          T = (0, s.useMemo)(() => {
            let e = t && !!a && void 0 === A,
              r = +(A?.[w['3CRV']] ?? '0'),
              s = +(A?.crvUSD ?? '0'),
              o = {
                disabled: e || !k || r + s === 0 || !g,
                loading: e || x,
                variant: 'filled',
                size: 'medium',
              };
            return [
              { buttonProps: o, label: (0, h.t)`Claim 3CRV`, key: w['3CRV'], show: r > 0 },
              { buttonProps: o, label: (0, h.t)`Claim crvUSD`, key: w.crvUSD, show: s > 0 },
            ];
          }, [A, x, g, t, k, a]),
          I = (0, s.useCallback)(
            async (t) => {
              if (!C || !y) return;
              let { scanTxPath: s } = C,
                o = (0, h.t)`Please approve claim veCRV rewards.`,
                { dismiss: n } = (0, m.me)(o, 'pending');
              j(t), i([]), f(null);
              let d = await b(e, y, a, t);
              if (!d || d?.activeKey !== e || ('function' == typeof n && n(), d?.error)) return;
              i([
                {
                  key: 'CLAIM',
                  status: 'succeeded',
                  type: 'action',
                  content: (0, h.t)`Claimed ${t}`,
                  onClick: () => {},
                },
              ]);
              let c =
                t === w['3CRV']
                  ? (0, h.t)`3CRV have been claimed and sent to 3pool.`
                  : (0, h.t)`crvUSD has been claimed and sent to your wallet.`;
              f(
                (0, r.jsx)(u.A, {
                  description: c,
                  txHash: s(d.hash),
                  onClose: () => {
                    v(l.kR), i([]), f(null);
                  },
                })
              );
            },
            [e, y, b, v, i, f, a, C]
          );
        return (0, r.jsx)(r.Fragment, {
          children: T.map(({ label: e, key: t, show: a, buttonProps: i }) => {
            let n = t === P && o?.[0]?.status === 'succeeded';
            return (
              (a || n) &&
              (0, r.jsx)(
                s.Fragment,
                {
                  children: n
                    ? (0, r.jsx)(p.A, { steps: o })
                    : (0, r.jsx)(c.A, {
                        ...i,
                        loading: i.loading && P === t,
                        onClick: () => I(t),
                        children: e,
                      }),
                },
                t
              )
            );
          }),
        });
      };
      var y = a(19115),
        g = a(77241),
        A = a(39651),
        w = (function (e) {
          return (e['3CRV'] = '3CRV'), (e.crvUSD = 'crvUSD'), e;
        })({});
      let x = o.Ay.div.withConfig({ componentId: 'sc-90a990ec-0' })(
          [
            'display:grid;grid-row-gap:0.5rem;margin-top:1rem;@media (min-width:',
            'rem){max-width:18.75rem;}',
          ],
          A.fi.sm
        ),
        b = (0, o.Ay)(y.A).withConfig({ componentId: 'sc-90a990ec-1' })([
          'position:relative;top:2px;',
        ]),
        v = () => {
          let {
              activeKey: e,
              isLoading: t,
              formValues: { walletAddress: a },
            } = (0, n.Vd)(),
            o = (0, d.A)((t) => t.dashboard.claimableFees[e]),
            c = (0, d.A)((e) => e.dashboard.formStatus),
            [p, u] = (0, s.useState)([]),
            [m, y] = (0, s.useState)(null),
            A = 'CLAIMABLE_FEES' === c.formType ? c : l.kR;
          return (0, r.jsxs)(x, {
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsxs)('div', {
                    children: [
                      (0, h.t)`veCRV rewards`,
                      (0, r.jsx)(b, {
                        children: (0, h.t)`Trading fees distributed to CRV lockers`,
                      }),
                      ':',
                      ' ',
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    children: [
                      (0, r.jsx)('strong', {
                        children: (0, g.ZV)(o?.['3CRV'], { defaultValue: '-' }),
                      }),
                      ' 3CRV,',
                      ' ',
                      (0, r.jsx)('strong', {
                        children: (0, g.ZV)(o?.crvUSD, { defaultValue: '-' }),
                      }),
                      ' crvUSD',
                    ],
                  }),
                ],
              }),
              A.error && (0, r.jsx)(i.A, { errorKey: A.error }),
              m,
              (0, r.jsx)(f, {
                activeKey: e,
                loading: t,
                walletAddress: a,
                steps: p,
                setSteps: u,
                setTxInfoBar: y,
              }),
            ],
          });
        };
    },
    85806: (e, t, a) => {
      'use strict';
      a.d(t, { n: () => D });
      var r = a(54568),
        s = a(87923),
        o = a(33431),
        i = a(42822),
        n = a(7620),
        l = a(64779),
        d = a(24388),
        c = a(2926),
        p = a(44876),
        u = a(56120),
        m = a(93796),
        h = a(14283),
        f = a(47983),
        y = a(97669),
        g = a(50520),
        A = a(4609),
        w = a(31184),
        x = a(41032),
        b = a(77241),
        v = a(36074),
        S = a(34202),
        k = a(69228);
      let { Spacing: C, IconSize: P } = a(84032).B,
        j = { STABLE: 0.1, CRYPTO: 0.5 },
        T = (0, b.ZV)(j.STABLE, { style: 'percent', maximumFractionDigits: 1 }),
        I = (0, b.ZV)(j.CRYPTO, { style: 'percent', maximumFractionDigits: 1 }),
        R = {
          'too-high': {
            message: (0, v.t)`High slippage selected`,
            helperText: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, v.t)`This may lead to fewer tokens received and potential loss of funds.`,
                (0, r.jsx)('br', {}),
                (0, v.t)`Proceed with caution.`,
              ],
            }),
          },
          'too-low': {
            message: (0, v.t)`Low slippage selected`,
            helperText: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, v.t)`Your transaction may fail if price moves slightly.`,
                (0, r.jsx)('br', {}),
                (0, v.t)`Consider increasing slippage if it doesn't go through.`,
                (0, r.jsx)('br', {}),
                (0, r.jsx)('br', {}),
                (0, v.t)`Min. slippage is ${0.01}%`,
              ],
            }),
          },
        };
      function B(e) {
        let t = Number(e);
        if (0 !== t) {
          if (t > 5) return 'too-high';
          if (t < 0.01) return 'too-low';
        }
      }
      function E(e) {
        let t = !Object.values(j).includes(Number(e));
        return { selected: t ? 'custom' : e, customValue: t ? e : '', error: t ? B(e) : void 0 };
      }
      let G = ({ isOpen: e, maxSlippage: t, onSave: a, onClose: s }) => {
          let [o, i] = (0, n.useState)(E(t)),
            { error: b, selected: G, customValue: D } = o,
            [F, L] = (0, n.useState)(void 0);
          (0, n.useEffect)(() => {
            i(E(t));
          }, [t]),
            (0, n.useEffect)(() => {
              b && L(b);
            }, [b]);
          let K = G && ('custom' !== G || (D && (!b || 'too-high' === b))),
            O = (0, r.jsx)(u.A, {
              fullWidth: !0,
              disabled: !K,
              onClick: () => a('custom' === G ? D : G),
              children: (0, v.t)`Save`,
            }),
            N = (0, r.jsx)(x.A, {
              variant: 'standard',
              type: 'number',
              value: D,
              placeholder: (0, v.t)`Custom slippage`,
              slotProps: {
                input: {
                  endAdornment: '%',
                  sx: {
                    color: (e) => ('custom' === G ? 'inherit' : e.design.Text.TextColors.Disabled),
                    paddingLeft: '1ch',
                  },
                },
              },
              error: !!b,
              onChange: (e) =>
                i({ selected: 'custom', customValue: e.target.value, error: B(e.target.value) }),
              onClick: () => i({ ...o, selected: 'custom' }),
              sx: {
                flexGrow: 1,
                '& .MuiInputBase-adornedEnd': {
                  color: (e) => ('custom' === G ? 'inherit' : e.design.Text.TextColors.Disabled),
                  paddingRight: '1ch',
                },
              },
            }),
            M = (0,
            v.t)`Maximum difference between expected price of the trade, versus the price when the trade is executed.`,
            V = (0, r.jsx)(k.m, {
              arrow: !0,
              placement: 'top',
              title: M,
              children: (0, r.jsx)(l.A, { sx: { width: P.xs, height: P.xs } }),
            });
          return (0, r.jsx)(S.y, {
            open: e,
            onClose: s,
            onTransitionExited: () => i(E(t)),
            title: (0, v.t)`Slippage Settings`,
            footer: O,
            compact: !0,
            children: (0, r.jsxs)(w.A, {
              gap: C.md,
              children: [
                (0, r.jsxs)(h.A, {
                  fullWidth: !0,
                  children: [
                    (0, r.jsxs)(y.A, {
                      sx: { color: 'text.secondary', '&.Mui-focused': { color: 'text.secondary' } },
                      children: [(0, v.t)`Max slippage`, ' ', V],
                    }),
                    (0, r.jsxs)(w.A, {
                      direction: { mobile: 'column', tablet: 'row' },
                      justifyContent: 'space-between',
                      gap: C.sm,
                      children: [
                        (0, r.jsxs)(A.A, {
                          row: !0,
                          value: o.selected,
                          onChange: (e) => i({ ...o, selected: e.target.value }),
                          sx: {
                            flexGrow: 1,
                            justifyContent: { mobile: 'space-between', tablet: 'start' },
                            gap: C.xs,
                          },
                          children: [
                            (0, r.jsx)(f.A, {
                              value: j.STABLE.toString(),
                              label: T,
                              control: (0, r.jsx)(g.A, {}),
                            }),
                            (0, r.jsx)(f.A, {
                              value: j.CRYPTO.toString(),
                              label: I,
                              control: (0, r.jsx)(g.A, {}),
                            }),
                          ],
                        }),
                        (0, r.jsx)(p.A, {
                          display: 'flex',
                          flexGrow: 1,
                          justifyContent: { mobile: 'start', tablet: 'end' },
                          children: N,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(m.A, {
                  in: b && 'custom' === G,
                  children: (0, r.jsxs)(d.A, {
                    variant: 'outlined',
                    severity: 'too-low' === F ? 'error' : 'warning',
                    sx: { boxShadow: 'none' },
                    children: [
                      (0, r.jsx)(c.A, { children: F ? R[F].message : '' }),
                      F ? R[F].helperText : '',
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        D = ({ disabled: e = !1, button: t, buttonIcon: a, maxSlippage: n, onSave: l }) => {
          let [d, , c, p] = (0, i.K)();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              t
                ? t({ maxSlippage: n, onClick: p })
                : (0, r.jsx)(o.A, {
                    onClick: p,
                    disabled: e,
                    children: a || (0, r.jsx)(s.A, { color: e ? 'disabled' : 'action' }),
                  }),
              (0, r.jsx)(G, {
                isOpen: !!d,
                maxSlippage: n,
                onSave: (e) => {
                  p(), l(e);
                },
                onClose: c,
              }),
            ],
          });
        };
    },
    87081: (e, t, a) => {
      'use strict';
      a.d(t, { co: () => p, hL: () => n, kR: () => l, mN: () => d, yC: () => c });
      var r = a(90819),
        s = a.n(r),
        o = a(37457),
        i = a.n(o);
      let n = { estimatedGas: 0, loading: !1 },
        l = {
          isApproved: !1,
          formProcessing: !1,
          formTypeCompleted: '',
          step: '',
          error: '',
          warning: '',
        },
        d = {
          loading: !1,
          exchangeRates: [],
          isExchangeRateLow: !1,
          priceImpact: 0,
          toAmount: '',
          modal: null,
        },
        c = {
          isFrom: null,
          isWrapped: !1,
          fromAddress: '',
          fromToken: '',
          fromAmount: '',
          fromError: '',
          toAddress: '',
          toAmount: '',
          toError: '',
          toToken: '',
        };
      function p(e, t) {
        let { tokenAddresses: a, tokensCountBy: r } = t,
          o = {};
        for (let t in a) {
          let i = a[t],
            n = s()(e[i]);
          n && (o[i] = { ...n, haveSameTokenName: r[n.symbol] > 1 });
        }
        return { selectList: i()(o, (e) => e.symbol), swapTokensMapper: o };
      }
    },
    90263: (e, t, a) => {
      'use strict';
      a.d(t, {
        F$: () => i,
        R8: () => o,
        Vq: () => d,
        WJ: () => c,
        YM: () => n,
        ZF: () => l,
        hj: () => p,
        n6: () => u,
      });
      var r = a(91176),
        s = a(77241);
      async function o(e, t) {
        let a = (0, r.s)();
        return (
          t
            ? await a.init('Web3', { network: { chainId: e }, externalProvider: t }, { chainId: e })
            : await a.init('NoRPC', 'NoRPC', { chainId: e }),
          a
        );
      }
      function i(e) {
        return Array.isArray(e) ? e.filter((e) => 0 !== Number(e.apy)) : [];
      }
      function n(e) {
        if (Array.isArray(e)) {
          let t = e.findIndex((e) => 'CRV' === e.symbol);
          if (-1 !== t) {
            let a = e.splice(t, 1);
            return [e, [a[0].apy]];
          }
        }
        return [e, []];
      }
      function l({ base: e, other: t, crv: a }) {
        let [r, s] = a || ['', ''];
        return {
          haveBase: void 0 !== e,
          haveCrv: Number(r) > 0 || Number(s) > 0,
          haveOther: Array.isArray(t) && t.length > 0,
        };
      }
      function d([e, t]) {
        if (!e && !t) return '';
        let a = (0, s.ZV)(e, s.hd.PERCENT);
        return t ? `${a} → ${(0, s.ZV)(t, s.hd.PERCENT)} CRV` : `${a} CRV`;
      }
      function c(e) {
        return ['day', 'week', 'month', 'year'].some((t) => Number(e[t]) > 0) ? e : null;
      }
      function p(e) {
        if (Array.isArray(e)) {
          let t = e.findIndex((e) => 'CRV' === e.symbol);
          if (-1 !== t) return { crvProfit: e.splice(t, 1)[0], tokensProfit: e };
        }
        return { crvProfit: null, tokensProfit: e };
      }
      function u(e) {
        let { day: t, week: a, month: r, year: s } = e ?? {};
        return {
          day: t && +t > 0 ? t : '',
          week: a && +a > 0 ? a : '',
          month: r && +r > 0 ? r : '',
          year: s && +s > 0 ? s : '',
        };
      }
    },
    92741: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => o });
      var r = a(48341),
        s = a(23173);
      let o = (0, r.Ay)(s.A).withConfig({ componentId: 'sc-106ca828-0' })(
        ['padding:', ';min-height:0.875rem;opacity:0.9;'],
        ({ noPadding: e }) => (e ? '0' : '0 0.3125rem')
      );
    },
    97912: (e, t, a) => {
      'use strict';
      a.d(t, { L: () => p });
      var r = a(54568),
        s = a(7620),
        o = a(17703),
        i = a(33431),
        n = a(41032),
        l = a(85273),
        d = a(36074);
      let c = (0, a(69879).A)(
          (0, r.jsx)('svg', {
            viewBox: '0 0 28 28',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M17.3765 18.6964C15.9395 19.846 14.1167 20.5333 12.1333 20.5333C7.49415 20.5333 3.73334 16.7725 3.73334 12.1333C3.73334 7.49415 7.49415 3.73334 12.1333 3.73334C16.7725 3.73334 20.5333 7.49415 20.5333 12.1333C20.5333 14.1167 19.846 15.9395 18.6964 17.3765L23.9933 22.6734C24.3578 23.0379 24.3578 23.6288 23.9933 23.9933C23.6288 24.3578 23.0379 24.3578 22.6734 23.9933L17.3765 18.6964ZM18.6667 12.1333C18.6667 15.7416 15.7416 18.6667 12.1333 18.6667C8.52508 18.6667 5.6 15.7416 5.6 12.1333C5.6 8.52508 8.52508 5.6 12.1333 5.6C15.7416 5.6 18.6667 8.52508 18.6667 12.1333Z',
              fill: 'currentColor',
            }),
          }),
          'Search'
        ),
        p = ({
          onSearch: e,
          placeholder: t = (0, d.t)`Search name or paste address`,
          name: a = 'search',
          inputRef: p,
          ...u
        }) => {
          let [m, h] = (0, l.S)('', e),
            f = (0, s.useRef)(null),
            y = p || f,
            g = (0, s.useCallback)(() => {
              h(''), y.current?.focus();
            }, [h, y]);
          return (0, r.jsx)(n.A, {
            fullWidth: !0,
            onChange: (e) => h(e.target.value),
            slotProps: {
              htmlInput: { ref: y },
              input: {
                startAdornment: (0, r.jsx)(c, {}),
                endAdornment:
                  m &&
                  (0, r.jsx)(i.A, {
                    size: 'extraSmall',
                    onClick: g,
                    children: (0, r.jsx)(o.A, {}),
                  }),
              },
            },
            variant: 'outlined',
            autoFocus: !0,
            ...u,
            value: m,
            name: a,
            placeholder: t,
          });
        };
    },
    98330: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => n });
      var r = a(54568),
        s = a(48341),
        o = a(86854);
      let i = s.Ay.div.withConfig({ componentId: 'sc-fbc17be4-0' })(
          [
            'display:flex;flex-wrap:wrap;max-width:12rem;gap:var(--spacing-1);@media (min-width:37.5rem){margin:',
            ';justify-content:',
            ';}',
          ],
          ({ mobile: e }) => (e ? '0' : '0 0 0 auto'),
          ({ mobile: e }) => (e ? 'start' : 'end')
        ),
        n = ({ rewardItems: e, mobile: t = !1 }) =>
          (0, r.jsx)(i, {
            mobile: t,
            children: e.map((e, a) =>
              (0, r.jsx)(o.A, { rewardsPool: e, mobile: t }, `${e.platform}-${e.description}-${a}`)
            ),
          });
    },
  },
]);
