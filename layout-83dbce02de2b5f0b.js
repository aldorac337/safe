(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9215],
  {
    17281: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 41789));
    },
    41789: (e, t, a) => {
      'use strict';
      a.d(t, { App: () => q });
      var l = a(54568);
      a(41257);
      var i = a(49879),
        s = a.n(i),
        r = a(62942),
        n = a(7620),
        o = a(61213),
        c = a(48341),
        d = a(55906),
        u = a(74143),
        h = a(88411),
        w = a(53001),
        m = a(93739),
        p = a(29514);
      let A = ({ chainId: e }) =>
          (0, m.Os)('chainValidation', () => {
            (0, m.t6)('chainId', () => {
              (0, m.FE)(e)
                .message('Chain ID is required')
                .isNotEmpty()
                .message('Invalid chain ID')
                .isValidChainId();
            });
          }),
        f = ({ chainId: e }) =>
          (0, m.Os)('apiValidation', () => {
            (0, m.t6)('api', () => {
              (0, m.FE)(h.AW()?.chainId)
                .message('Chain ID should be loaded')
                .equals(e)
                .message('Incorrect chain ID');
            });
          }),
        g = (0, p.Qi)((e) => {
          A(e), f(e);
        }),
        { useQuery: b } = (0, w.X6)({
          queryKey: (e) => ['appStatsTvl', { chainId: e.chainId }],
          queryFn: (e) => u.A.network.getTVL((0, h.NB)()),
          staleTime: '5m',
          validationSuite: g,
        });
      var v = a(28822);
      async function k({ chainId: e }) {
        let { isLite: t } = v.A.getState().networks.networks[e];
        return t ? null : u.A.network.getVolume((0, h.NB)());
      }
      let { useQuery: y } = (0, w.X6)({
        queryKey: (e) => ['appStatsVolume', { chainId: e.chainId }],
        queryFn: k,
        staleTime: '5m',
        validationSuite: g,
      });
      var I = a(31305),
        S = a(77241),
        E = a(17416),
        C = a(3452),
        L = a(36074),
        N = a(21802),
        R = a(48631);
      let x = () => (0, L.t)`Quickswap`,
        P = ({ sections: e, globalAlertRef: t, networkId: a }) => {
          let i = (0, n.useRef)(null),
            { lib: s = {} } = (0, h.w5)(),
            r = (0, I.iW)(a),
            o = (0, E.l5)((e) => e.setLayoutHeight);
          (0, C.j)(i, 'mainNav', o);
          let c = (0, v.A)((e) => e.getNetworkConfigFromApi(r).hasRouter),
            u = (0, v.A)((e) => e.networks.networks),
            w = (0, v.A)((e) => e.networks.visibleNetworksList),
            m = (0, E.l5)((e) => e.height.globalAlert),
            p = (0, v.A)((e) => e.storeCache.routerFormValues[r]),
            { data: A } = b(s),
            { data: f } = y(s),
            g = u[r];
          return (0, l.jsx)(R.Y, {
            networkId: a,
            chainId: r,
            mainNavRef: i,
            currentMenu: 'dex',
            isLite: g?.isLite,
            routes: (0, n.useMemo)(
              () => [
                ...(c && (!g || g.showRouterSwap)
                  ? [
                      {
                        app: 'dex',
                        route: (function (e, t) {
                          let a = t?.fromAddress ?? e?.fromAddress,
                            l = t?.toAddress ?? e?.toAddress;
                          return `${d.a$.PAGE_SWAP}/${a || l ? `?${new URLSearchParams({ ...(a && { from: a }), ...(l && { to: l }) })}` : ''}`;
                        })(g.swap, p),
                        label: x,
                      },
                    ]
                  : []),
                ...N.VS.dex.routes.filter((e) => e.route !== d.a$.PAGE_SWAP),
              ],
              [c, g, p]
            ),
            chains: w,
            appStats: [
              {
                label: (0, L.t)`Total Deposits`,
                value: (0, S.ZV)(A, { currency: 'USD', notation: 'compact' }),
              },
              ...(g?.isLite
                ? []
                : [
                    {
                      label: (0, L.t)`Daily Volume`,
                      value: (0, S.ZV)(f?.totalVolume, { currency: 'USD', notation: 'compact' }),
                    },
                    {
                      label: (0, L.t)`Crypto Volume Share`,
                      value: (0, S.ZV)(f?.cryptoShare, S.hd.PERCENT),
                    },
                  ]),
            ],
            sections: e,
            height: (0, R.g)(m),
            globalAlertRef: t,
          });
        };
      var V = a(95292),
        $ = a(95262),
        D = a(1334);
      let j = (e) => {
          let { lib: t } = (0, h.w5)(),
            a = (0, E.l5)((e) => e.isPageVisible),
            l = (0, v.A)((e) => e.pools.fetchPools),
            i = (0, v.A)((t) => t.pools.poolsMapper[e.chainId]),
            s = (0, v.A)((e) => e.pools.fetchPoolsVolume),
            r = (0, v.A)((e) => e.pools.fetchPoolsTvl),
            o = (0, v.A)((e) => e.tokens.setTokensMapper),
            c = (0, v.A)((e) => e.gas.fetchGasInfo),
            d = (0, v.A)((e) => e.usdRates.fetchAllStoredUsdRates),
            w = (0, v.A)((e) => e.userBalances.fetchAllStoredBalances),
            m = (0, n.useCallback)(
              async (e) => {
                let { chainId: t } = e,
                  a = Object.values(i);
                await Promise.all([s(t, a), r(e, a)]), o(t, a);
              },
              [r, s, i, o]
            ),
            p = (0, n.useCallback)(
              async (t) => {
                let a = await u.A.network.fetchAllPoolsList(t, e);
                l(t, a, null);
              },
              [l, e]
            );
          (0, V.A)(
            () => {
              t && (c(t), d(t), m(t), t.signerAddress && w(t));
            },
            $.oX['5m'],
            a
          ),
            (0, V.A)(
              () => {
                t && p(t);
              },
              $.oX['11m'],
              a
            );
        },
        _ = (e) => [
          {
            title: (0, L.t)`Documentation`,
            links: [
              { href: 'https://news.curve.finance/', label: (0, L.t)`News` },
              {
                href: 'https://resources.curve.finance/lending/understanding-lending/',
                label: (0, L.t)`User Resources`,
              },
              { href: 'https://docs.curve.finance', label: (0, L.t)`Developer Resources` },
              {
                href: (0, I.Yn)({ network: e }, d.a$.PAGE_DISCLAIMER),
                label: (0, L.t)`Risk Disclaimers`,
              },
              {
                href: (0, I.Yn)({ network: e }, d.a$.PAGE_INTEGRATIONS),
                label: (0, L.t)`Integrations`,
              },
              {
                href: 'https://resources.curve.finance/glossary-branding/branding/',
                label: (0, L.t)`Branding`,
              },
              ...((0, L.Y)() ? [{ href: 'https://www.curve.wiki/', label: (0, L.t)`Wiki` }] : []),
            ],
          },
          {
            title: (0, L.t)`Security`,
            links: [
              { href: 'https://docs.curve.finance/references/audits/', label: (0, L.t)`Audits` },
              {
                href: 'https://docs.curve.finance/security/security/',
                label: (0, L.t)`Bug Bounty`,
              },
              { href: 'https://dune.com/mrblock_buidl/Curve.fi', label: (0, L.t)`Dune Analytics` },
              { href: 'https://curvemonitor.com', label: (0, L.t)`Curve Monitor` },
              { href: 'https://crvhub.com/', label: (0, L.t)`Crvhub` },
            ],
          },
        ],
        T = c.Ay.main.withConfig({ componentId: 'sc-e7d4acfa-0' })(
          ['margin:0 auto;max-width:var(--width);min-height:', ';width:100%;'],
          ({ minHeight: e }) => `calc(100vh - ${e}px)`
        ),
        B = c.Ay.div.withConfig({ componentId: 'sc-e7d4acfa-1' })(
          ['display:flex;flex-direction:column;position:relative;width:100%;min-height:', ';'],
          ({ globalAlertHeight: e }) => `calc(100vh - ${e}px)`
        ),
        M = ({ children: e, network: t }) => {
          let a = (0, n.useRef)(null),
            i = (0, E.l5)((e) => e.setLayoutHeight);
          (0, C.j)(a, 'globalAlert', i), j(t);
          let s = (0, E.l5)((e) => e.height),
            r = (0, E.l5)((e) => e.height.globalAlert),
            o = (0, n.useMemo)(() => _(t.id), [t.id]),
            c = (0, n.useMemo)(() => E.o1.reduce((e, t) => e + s[t], 0), [s]);
          return (0, l.jsxs)(B, {
            globalAlertHeight: s?.globalAlert,
            children: [
              (0, l.jsx)(P, { sections: o, globalAlertRef: a, networkId: t.id }),
              (0, l.jsx)(T, { minHeight: c, children: e }),
              (0, l.jsx)(D.w, { appName: 'dex', networkId: t.id, headerHeight: (0, R.g)(r) }),
            ],
          });
        };
      var W = a(90263),
        G = a(75911);
      let q = ({ children: e }) => {
        let { network: t = 'ethereum' } = (0, r.useParams)(),
          { push: a } = (0, r.useRouter)(),
          i = (0, I.ro)(),
          [c, d] = (0, n.useState)(!1),
          u = (0, E.l5)((e) => e.pageWidth),
          w = (0, E.l5)((e) => e.setLayoutWidth),
          m = (0, E.l5)((e) => e.setPageVisible),
          p = (0, E.l5)((e) => e.updateShowScrollButton),
          A = (0, v.A)((e) => e.networks.fetchNetworks),
          f = (0, v.A)((e) => e.updateGlobalStoreByKey),
          g = (0, v.A)((e) => e.networks.networks),
          b = (0, v.A)((e) => e.networks.networksIdMapper),
          k = (0, G.nv)((e) => e.theme),
          y = (0, v.A)((e) => e.hydrate),
          S = b[t],
          C = g[S],
          L = (0, n.useCallback)(() => {
            window.innerWidth && w((0, E.tr)(window.innerWidth));
          }, [w]);
        (0, n.useEffect)(() => {
          u &&
            ((document.body.className = `theme-${k} ${u}`.replace(/ +(?= )/g, '').trim()),
            document.body.setAttribute('data-theme', k));
        }, [u, k]),
          (0, n.useEffect)(() => {
            v.A.setState(v.A.getInitialState()),
              (async () => {
                await A(), d(!0), f('loaded', !0);
              })();
            let e = () => m(!document.hidden),
              t = () => s()(() => p(window.scrollY), 200);
            return (
              L(),
              e(),
              document.addEventListener('visibilitychange', e),
              window.addEventListener('resize', L),
              window.addEventListener('scroll', t),
              () => {
                d(!1),
                  document.removeEventListener('visibilitychange', e),
                  window.removeEventListener('resize', L),
                  window.removeEventListener('scroll', t),
                  f('loaded', !1);
              }
            );
          }, [A, L, m, f, p]);
        let N = (0, n.useCallback)(
          ([e]) => {
            let t = g[e]?.id;
            t &&
              (console.warn(`Network switched to ${t}, redirecting...`, location.href),
              a((0, I.Yn)({ network: t }, `/${i}`)));
          },
          [g, a, i]
        );
        return (0, l.jsx)(o.$, {
          loading: !c,
          networks: g,
          children: (0, l.jsx)(h.Sg, {
            hydrate: y,
            initLib: W.R8,
            chainId: S,
            onChainUnavailable: N,
            children: (0, l.jsx)(M, { network: C, children: e }),
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        4599, 921, 9335, 909, 7261, 5077, 8341, 9902, 7806, 4439, 7388, 7208, 2519, 1356, 7999,
        8867, 7496, 7044, 4925, 9720, 9556, 168, 4148, 9630, 2059, 4612, 4034, 2038, 3627, 7257,
        9248, 3842, 2193, 6467, 6116, 7399, 5911, 8173, 8822, 4330, 2306, 587, 8315, 7358,
      ],
      () => t(17281)
    ),
      (_N_E = e.O());
  },
]);
