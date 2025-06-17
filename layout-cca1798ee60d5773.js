(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9215],
  {
    17281: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 41789));
    },
    41789: (e, t, a) => {
      'use strict';
      a.d(t, { App: () => G });
      var i = a(54568);
      a(41257);
      var l = a(49879),
        s = a.n(l),
        r = a(62942),
        n = a(7620),
        o = a(61213),
        c = a(48341),
        d = a(55906),
        u = a(74143),
        h = a(88411),
        A = a(53001),
        p = a(93739),
        w = a(29514);
      let m = ({ chainId: e }) =>
          (0, p.Os)('chainValidation', () => {
            (0, p.t6)('chainId', () => {
              (0, p.FE)(e)
                .message('Chain ID is required')
                .isNotEmpty()
                .message('Invalid chain ID')
                .isValidChainId();
            });
          }),
        g = ({ chainId: e }) =>
          (0, p.Os)('apiValidation', () => {
            (0, p.t6)('api', () => {
              (0, p.FE)(h.AW()?.chainId)
                .message('Chain ID should be loaded')
                .equals(e)
                .message('Incorrect chain ID');
            });
          }),
        f = (0, w.Qi)((e) => {
          m(e), g(e);
        }),
        { useQuery: b } = (0, A.X6)({
          queryKey: (e) => ['appStatsTvl', { chainId: e.chainId }],
          queryFn: (e) => u.A.network.getTVL((0, h.NB)()),
          staleTime: '5m',
          validationSuite: f,
        });
      var v = a(83255);
      async function k({ chainId: e }) {
        let { isLite: t } = v.A.getState().networks.networks[e];
        return t ? null : u.A.network.getVolume((0, h.NB)());
      }
      let { useQuery: y } = (0, A.X6)({
        queryKey: (e) => ['appStatsVolume', { chainId: e.chainId }],
        queryFn: k,
        staleTime: '5m',
        validationSuite: f,
      });
      var I = a(31305),
        S = a(77241),
        C = a(3452),
        E = a(36074),
        N = a(21802),
        P = a(48631);
      let R = () => (0, E.t)`Quickswap`,
        x = ({ sections: e, globalAlertRef: t, networkId: a }) => {
          let l = (0, n.useRef)(null),
            { lib: s = {} } = (0, h.w5)(),
            r = (0, I.iW)(a),
            o = (0, v.A)((e) => e.updateLayoutHeight);
          (0, C.j)(l, 'mainNav', o);
          let c = (0, v.A)((e) => e.getNetworkConfigFromApi(r).hasRouter),
            u = (0, v.A)((e) => e.networks.networks),
            A = (0, v.A)((e) => e.networks.visibleNetworksList),
            p = (0, v.A)((e) => e.layoutHeight.globalAlert),
            w = (0, v.A)((e) => e.storeCache.routerFormValues[r]),
            { data: m } = b(s),
            { data: g } = y(s),
            f = u[r];
          return (0, i.jsx)(P.Y, {
            networkId: a,
            chainId: r,
            mainNavRef: l,
            currentMenu: 'dex',
            isLite: f?.isLite,
            routes: (0, n.useMemo)(
              () => [
                ...(c && (!f || f.showRouterSwap)
                  ? [
                      {
                        app: 'dex',
                        route: (function (e, t) {
                          let a = t?.fromAddress ?? e?.fromAddress,
                            i = t?.toAddress ?? e?.toAddress;
                          return `${d.a$.PAGE_SWAP}/${a || i ? `?${new URLSearchParams({ ...(a && { from: a }), ...(i && { to: i }) })}` : ''}`;
                        })(f.swap, w),
                        label: R,
                      },
                    ]
                  : []),
                ...N.VS.dex.routes.filter((e) => e.route !== d.a$.PAGE_SWAP),
              ],
              [c, f, w]
            ),
            chains: A,
            appStats: [
              {
                label: (0, E.t)`Total Deposits`,
                value: (0, S.ZV)(m, { currency: 'USD', notation: 'compact' }),
              },
              ...(f?.isLite
                ? []
                : [
                    {
                      label: (0, E.t)`Daily Volume`,
                      value: (0, S.ZV)(g?.totalVolume, { currency: 'USD', notation: 'compact' }),
                    },
                    {
                      label: (0, E.t)`Crypto Volume Share`,
                      value: (0, S.ZV)(g?.cryptoShare, S.hd.PERCENT),
                    },
                  ]),
            ],
            sections: e,
            height: (0, P.g)(p),
            globalAlertRef: t,
          });
        };
      var V = a(46250),
        L = a(95292),
        $ = a(95262),
        D = a(1334);
      let j = (e) => {
          let { lib: t } = (0, h.w5)(),
            a = (0, v.A)((e) => e.isPageVisible),
            i = (0, v.A)((e) => e.pools.fetchPools),
            l = (0, v.A)((t) => t.pools.poolsMapper[e.chainId]),
            s = (0, v.A)((e) => e.pools.fetchPoolsVolume),
            r = (0, v.A)((e) => e.pools.fetchPoolsTvl),
            o = (0, v.A)((e) => e.tokens.setTokensMapper),
            c = (0, v.A)((e) => e.gas.fetchGasInfo),
            d = (0, v.A)((e) => e.usdRates.fetchAllStoredUsdRates),
            A = (0, v.A)((e) => e.userBalances.fetchAllStoredBalances),
            p = (0, n.useCallback)(
              async (e) => {
                let { chainId: t } = e,
                  a = Object.values(l);
                await Promise.all([s(t, a), r(e, a)]), o(t, a);
              },
              [r, s, l, o]
            ),
            w = (0, n.useCallback)(
              async (t) => {
                let a = await u.A.network.fetchAllPoolsList(t, e);
                i(t, a, null);
              },
              [i, e]
            );
          (0, L.A)(
            () => {
              t && (c(t), d(t), p(t), t.signerAddress && A(t));
            },
            $.oX['5m'],
            a
          ),
            (0, L.A)(
              () => {
                t && w(t);
              },
              $.oX['11m'],
              a
            );
        },
        _ = (e) => [
          {
            title: (0, E.t)`Documentation`,
            links: [
              { href: 'https://news.curve.finance/', label: (0, E.t)`News` },
              {
                href: 'https://resources.curve.finance/lending/understanding-lending/',
                label: (0, E.t)`User Resources`,
              },
              { href: 'https://docs.curve.finance', label: (0, E.t)`Developer Resources` },
              {
                href: (0, I.Yn)({ network: e }, d.a$.PAGE_DISCLAIMER),
                label: (0, E.t)`Risk Disclaimers`,
              },
              {
                href: (0, I.Yn)({ network: e }, d.a$.PAGE_INTEGRATIONS),
                label: (0, E.t)`Integrations`,
              },
              {
                href: 'https://resources.curve.finance/glossary-branding/branding/',
                label: (0, E.t)`Branding`,
              },
              ...((0, E.Y)() ? [{ href: 'https://www.curve.wiki/', label: (0, E.t)`Wiki` }] : []),
            ],
          },
          {
            title: (0, E.t)`Security`,
            links: [
              { href: 'https://docs.curve.finance/references/audits/', label: (0, E.t)`Audits` },
              {
                href: 'https://docs.curve.finance/security/security/',
                label: (0, E.t)`Bug Bounty`,
              },
              { href: 'https://dune.com/mrblock_buidl/Curve.fi', label: (0, E.t)`Dune Analytics` },
              { href: 'https://curvemonitor.com', label: (0, E.t)`Curve Monitor` },
              { href: 'https://crvhub.com/', label: (0, E.t)`Crvhub` },
            ],
          },
        ],
        T = c.Ay.main.withConfig({ componentId: 'sc-ede2172c-0' })(
          ['margin:0 auto;max-width:var(--width);min-height:', ';width:100%;'],
          ({ minHeight: e }) => `calc(100vh - ${e}px)`
        ),
        B = c.Ay.div.withConfig({ componentId: 'sc-ede2172c-1' })(
          ['display:flex;flex-direction:column;position:relative;width:100%;min-height:', ';'],
          ({ globalAlertHeight: e }) => `calc(100vh - ${e}px)`
        ),
        M = ({ children: e, network: t }) => {
          let a = (0, n.useRef)(null),
            l = (0, v.A)((e) => e.updateLayoutHeight);
          (0, C.j)(a, 'globalAlert', l), j(t);
          let s = (0, v.A)((e) => e.layoutHeight),
            r = (0, v.A)((e) => e.layoutHeight.globalAlert),
            o = (0, n.useMemo)(() => _(t.id), [t.id]),
            c = (0, n.useMemo)(() => V.o.reduce((e, t) => e + s[t], 0), [s]);
          return (0, i.jsxs)(B, {
            globalAlertHeight: s?.globalAlert,
            children: [
              (0, i.jsx)(x, { sections: o, globalAlertRef: a, networkId: t.id }),
              (0, i.jsx)(T, { minHeight: c, children: e }),
              (0, i.jsx)(D.w, { appName: 'dex', networkId: t.id, headerHeight: (0, P.g)(r) }),
            ],
          });
        };
      var W = a(90263),
        H = a(75911);
      let G = ({ children: e }) => {
        let { network: t = 'ethereum' } = (0, r.useParams)(),
          { push: a } = (0, r.useRouter)(),
          l = (0, I.ro)(),
          [c, d] = (0, n.useState)(!1),
          u = (0, v.A)((e) => e.pageWidth),
          A = (0, v.A)((e) => e.setPageWidth),
          p = (0, v.A)((e) => e.networks.fetchNetworks),
          w = (0, v.A)((e) => e.updateShowScrollButton),
          m = (0, v.A)((e) => e.updateGlobalStoreByKey),
          g = (0, v.A)((e) => e.networks.networks),
          f = (0, v.A)((e) => e.networks.networksIdMapper),
          b = (0, H.nv)((e) => e.theme),
          k = (0, v.A)((e) => e.hydrate),
          y = f[t],
          S = g[y],
          C = (0, n.useCallback)(() => {
            window.innerWidth && A(window.innerWidth);
          }, [A]);
        (0, n.useEffect)(() => {
          u &&
            ((document.body.className = `theme-${b} ${u}`.replace(/ +(?= )/g, '').trim()),
            document.body.setAttribute('data-theme', b));
        }, [u, b]),
          (0, n.useEffect)(
            () => (
              v.A.setState(v.A.getInitialState()),
              (async () => {
                await p();
                let e = () => {
                  m('isPageVisible', !document.hidden);
                };
                d(!0),
                  m('loaded', !0),
                  C(),
                  e(),
                  document.addEventListener('visibilitychange', e),
                  window.addEventListener('resize', () => C()),
                  window.addEventListener('scroll', () => s()(() => w(window.scrollY), 200));
              })(),
              () => {
                d(!1), m('loaded', !1);
              }
            ),
            [p, C, m, w]
          );
        let E = (0, n.useCallback)(
          ([e]) => {
            let t = g[e]?.id;
            t &&
              (console.warn(`Network switched to ${t}, redirecting...`, location.href),
              a((0, I.Yn)({ network: t }, `/${l}`)));
          },
          [g, a, l]
        );
        return (0, i.jsx)(o.$, {
          loading: !c,
          networks: g,
          children: (0, i.jsx)(h.Sg, {
            hydrate: k,
            initLib: W.R8,
            chainId: y,
            onChainUnavailable: E,
            children: (0, i.jsx)(M, { network: S, children: e }),
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
        4599, 921, 9335, 909, 7261, 5077, 8341, 484, 7806, 4439, 7208, 2519, 1356, 7999, 8867, 4843,
        7044, 4925, 9720, 9556, 168, 4148, 9630, 2059, 4612, 4034, 2038, 3627, 7257, 9248, 3842,
        5751, 6467, 4480, 7399, 5911, 253, 3255, 4330, 2306, 587, 8315, 7358,
      ],
      () => t(17281)
    ),
      (_N_E = e.O());
  },
]);
