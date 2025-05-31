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
    (e._sentryDebugIds[t] = 'bb3c2c15-c014-484c-848c-88713892b679'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-bb3c2c15-c014-484c-848c-88713892b679'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1744],
  {
    3517: function () {},
    6248: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 36258, 23)),
        Promise.resolve().then(a.t.bind(a, 34050, 23)),
        Promise.resolve().then(a.t.bind(a, 2479, 23)),
        Promise.resolve().then(a.t.bind(a, 21830, 23)),
        Promise.resolve().then(a.t.bind(a, 85654, 23)),
        Promise.resolve().then(a.t.bind(a, 14899, 23));
    },
    49149: function (e, t, a) {
      'use strict';
      a.d(t, {
        QP: function () {
          return f;
        },
      });
      var n = a(16035),
        i = a(22139),
        l = a(40252),
        o = a(32608);
      let r = n.z.string(),
        c = r.optional(),
        s = r.url(),
        d = s.nullish().or(n.z.literal('')),
        u = n.z
          .string()
          .refine((e) => 'true' === e || 'false' === e)
          .transform((e) => 'true' === e)
          .optional()
          .default('false'),
        f = (0, i.D)({
          client: {
            NEXT_PUBLIC_DEPLOYMENT_URL: s,
            NEXT_PUBLIC_SENTRY_DSN: d,
            NEXT_PUBLIC_MATOMO_CONTAINER_URL: d,
            NEXT_PUBLIC_DISABLE_RPC_FALLBACK: u,
            NEXT_PUBLIC_USE_VIRTUAL_CHAIN: u,
            NEXT_PUBLIC_RPC_HTTP_URL_MAINNET: s,
            NEXT_PUBLIC_RPC_HTTP_URL_BASE_MAINNET: s,
            NEXT_PUBLIC_RPC_HTTP_URL_VIRTUAL_MAINNET: s,
            NEXT_PUBLIC_RPC_HTTP_URL_POLYGON_MAINNET: s,
            NEXT_PUBLIC_RPC_HTTP_URL_UNICHAIN_MAINNET: s,
            NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: r,
            NEXT_PUBLIC_BLUE_API_URL: s,
            NEXT_PUBLIC_REWARDS_API_URL: s,
            NEXT_PUBLIC_STATUS_URL: s,
            NEXT_PUBLIC_SPINDL_SDK_KEY: c,
            NEXT_PUBLIC_POSITION_HISTORY_FEATURE_FLAG: u,
            NEXT_PUBLIC_SIMULATION_STATE_VIEWER_FEATURE_FLAG: u,
            NEXT_PUBLIC_MIGRATION_PAGE_FEATURE_FLAG: u,
            NEXT_PUBLIC_UI_KIT_FEATURE_FLAG: u,
            NEXT_PUBLIC_MOBILE_VAULT_TABS_FEATURE_FLAG: u,
            NEXT_PUBLIC_MOBILE_MARKET_TABS_FEATURE_FLAG: u,
            NEXT_PUBLIC_CALLDATA_ORIGIN: r.default('1111'),
            NEXT_PUBLIC_FUUL_API_KEY: c,
            NEXT_PUBLIC_LIGHT_MODE_FEATURE_FLAG: u,
            NEXT_PUBLIC_AUTO_DELEVERAGE_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_MARKET_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_VAULT_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_SUPPLY_COLLATERAL_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_COLLATERAL_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_BORROW_MORE_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_REPAY_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_DEPOSIT_INTO_VAULT_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_REFINANCE_FEATURE_FLAG: u,
            NEXT_PUBLIC_POSITION_MANAGER_FEATURE_CALL_OUT_FEATURE_FLAG: u,
            NEXT_PUBLIC_MERKL_REWARD_FEATURE_FLAG: u,
            NEXT_PUBLIC_MIGRATION_BORROW_FEATURE_FLAG: u,
            NEXT_PUBLIC_DEBUG_SHARED_LIQUIDITY: u,
            NEXT_PUBLIC_AVAILABLE_CHAINS: n.z
              .string()
              .transform((e) => e.split(',').map((e) => Number(e.trim())))
              .pipe(n.z.array(n.z.nativeEnum(l.ChainId))),
          },
          runtimeEnv: {
            NEXT_PUBLIC_DEPLOYMENT_URL: 'https://app.morpho.org',
            NEXT_PUBLIC_SENTRY_DSN:
              'https://8870cd145545e84aecbc701f9952d2ef@o1173271.ingest.us.sentry.io/4507844072177664',
            NEXT_PUBLIC_MATOMO_CONTAINER_URL: 'https://matomo.morpho.org/js/container_ccsuwySz.js',
            NEXT_PUBLIC_DISABLE_RPC_FALLBACK: o.env.NEXT_PUBLIC_DISABLE_RPC_FALLBACK,
            NEXT_PUBLIC_USE_VIRTUAL_CHAIN: 'false',
            NEXT_PUBLIC_RPC_HTTP_URL_MAINNET:
              'https://eth-mainnet.g.alchemy.com/v2/-UWmSYdKA6BGV8CCRD8fc37FrMAaC0XK',
            NEXT_PUBLIC_RPC_HTTP_URL_BASE_MAINNET:
              'https://base-mainnet.g.alchemy.com/v2/-UWmSYdKA6BGV8CCRD8fc37FrMAaC0XK',
            NEXT_PUBLIC_RPC_HTTP_URL_POLYGON_MAINNET:
              'https://polygon-mainnet.g.alchemy.com/v2/-UWmSYdKA6BGV8CCRD8fc37FrMAaC0XK',
            NEXT_PUBLIC_RPC_HTTP_URL_UNICHAIN_MAINNET:
              'https://unichain-mainnet.g.alchemy.com/v2/-UWmSYdKA6BGV8CCRD8fc37FrMAaC0XK',
            NEXT_PUBLIC_RPC_HTTP_URL_VIRTUAL_MAINNET:
              'https://eth-mainnet.g.alchemy.com/v2/EumbfETl9EAiiYg-mBd7iSwM5PmLwV3a',
            NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: 'f5baa843162ddab5f4c6b8e08d5b7782',
            NEXT_PUBLIC_BLUE_API_URL: 'https://blue-api.morpho.org/graphql',
            NEXT_PUBLIC_REWARDS_API_URL: 'https://rewards.morpho.org',
            NEXT_PUBLIC_SPINDL_SDK_KEY: 'bc354f36-6121-4c5f-9f56-98fff53eb959',
            NEXT_PUBLIC_STATUS_URL: 'https://status.morpho.org',
            NEXT_PUBLIC_POSITION_HISTORY_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_SIMULATION_STATE_VIEWER_FEATURE_FLAG:
              o.env.NEXT_PUBLIC_SIMULATION_STATE_VIEWER_FEATURE_FLAG,
            NEXT_PUBLIC_UI_KIT_FEATURE_FLAG: 'false',
            NEXT_PUBLIC_MIGRATION_PAGE_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_MOBILE_VAULT_TABS_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_MOBILE_MARKET_TABS_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_CALLDATA_ORIGIN: 'DA44',
            NEXT_PUBLIC_FUUL_API_KEY:
              '0cf67e491e159fd9b5daac5f2056ef0765d05dcb8e579a54db9a00c318058da3',
            NEXT_PUBLIC_LIGHT_MODE_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_AUTO_DELEVERAGE_FEATURE_FLAG: 'false',
            NEXT_PUBLIC_POSITION_MANAGER_MARKET_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_VAULT_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_SUPPLY_COLLATERAL_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_COLLATERAL_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_BORROW_MORE_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_REPAY_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_DEPOSIT_INTO_VAULT_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_REFINANCE_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_POSITION_MANAGER_FEATURE_CALL_OUT_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_MERKL_REWARD_FEATURE_FLAG: 'true',
            NEXT_PUBLIC_DEBUG_SHARED_LIQUIDITY: 'true',
            NEXT_PUBLIC_AVAILABLE_CHAINS: '1,8453,137',
            NEXT_PUBLIC_MIGRATION_BORROW_FEATURE_FLAG: 'false',
          },
        });
    },
    29009: function (e, t, a) {
      'use strict';
      a.d(t, {
        $2: function () {
          return c;
        },
        Ih: function () {
          return l;
        },
        PX: function () {
          return p;
        },
        Ql: function () {
          return o;
        },
        Sn: function () {
          return i;
        },
        UB: function () {
          return C;
        },
        Vs: function () {
          return b;
        },
        WU: function () {
          return s;
        },
        bF: function () {
          return d;
        },
        jW: function () {
          return f;
        },
        lH: function () {
          return r;
        },
        lT: function () {
          return v;
        },
        lp: function () {
          return h;
        },
        qy: function () {
          return u;
        },
        uH: function () {
          return _;
        },
        xQ: function () {
          return E;
        },
        z7: function () {
          return A;
        },
      });
      var n = a(35047);
      let i = 'https://morpho.org',
        l = 'https://morpho.org/jobs',
        o = 'https://blog.morpho.org',
        r = 'https://vote.morpho.org/',
        c = 'https://delegate.morpho.org/',
        s = 'https://docs.morpho.org',
        d = 'https://lite.morpho.org',
        u = 'https://cdn.morpho.org/documents/Morpho_Terms_of_Use.pdf',
        f = 'https://x.com/MorphoLabs',
        b = 'https://discord.morpho.org/',
        p = 'https://warpcast.com/morpho',
        _ = 'https://morpho.mirror.xyz/',
        E = 'https://forum.morpho.org/',
        h = 'https://rewards.morpho.org/',
        C = 'https://legacy.morpho.org',
        A = n.DOCS_BASE_URL + '/interface/interface-rates/',
        v = n.DOCS_BASE_URL + '/overview/concepts/liquidation/#pre-liquidation';
    },
    18313: function (e, t, a) {
      'use strict';
      a.d(t, {
        lT: function () {
          return n.lT;
        },
        Cq: function () {
          return b;
        },
        $2: function () {
          return n.$2;
        },
        Vs: function () {
          return n.Vs;
        },
        WU: function () {
          return n.WU;
        },
        xQ: function () {
          return n.xQ;
        },
        bF: function () {
          return n.bF;
        },
        z7: function () {
          return n.z7;
        },
        lp: function () {
          return n.lp;
        },
        lH: function () {
          return n.lH;
        },
        clientEnvs: function () {
          return c.QP;
        },
        B: function () {
          return i.B;
        },
        SC: function () {
          return i.S;
        },
      });
      var n = a(29009),
        i = a(10433),
        l = a(79008),
        o = a(40252),
        r = a(12556),
        c = a(49149);
      let s = l.R,
        d = {
          [o.ChainId.EthMainnet]: c.QP.NEXT_PUBLIC_RPC_HTTP_URL_MAINNET,
          [o.ChainId.BaseMainnet]: c.QP.NEXT_PUBLIC_RPC_HTTP_URL_BASE_MAINNET,
          [o.ChainId.PolygonMainnet]: c.QP.NEXT_PUBLIC_RPC_HTTP_URL_POLYGON_MAINNET,
          [o.ChainId.Unichain]: c.QP.NEXT_PUBLIC_RPC_HTTP_URL_UNICHAIN_MAINNET,
          [o.ChainId.ArbitrumMainnet]: void 0,
          [o.ChainId.OptimismMainnet]: void 0,
          [o.ChainId.WorldChainMainnet]: void 0,
          [o.ChainId.FraxtalMainnet]: void 0,
          [o.ChainId.ScrollMainnet]: void 0,
          [o.ChainId.InkMainnet]: void 0,
          [o.ChainId.SonicMainnet]: void 0,
          [o.ChainId.HemiMainnet]: void 0,
          [o.ChainId.ModeMainnet]: void 0,
          [o.ChainId.CornMainnet]: void 0,
          [o.ChainId.PlumeMainnet]: void 0,
          [o.ChainId.CampMainnet]: void 0,
        },
        u = c.QP.NEXT_PUBLIC_AVAILABLE_CHAINS,
        f = u.map((e) => {
          let t = r.FW.getMetadata(e).chain;
          if (!t) throw new r.yZ(e);
          return t;
        }),
        b = {
          DEFAULT_CHAIN: s,
          DEFAULT_RPC_URLS: d,
          AVAILABLE_CHAIN_IDS: u,
          AVAILABLE_CHAINS: f,
          INTERFACE_CHAINS: f.map((e) => r.FW.getMetadata(e.id)),
          isAvailable: (e) => c.QP.NEXT_PUBLIC_AVAILABLE_CHAINS.includes(e),
          getDefaultRpcUrl: (e) => d[e],
        };
    },
    10433: function (e, t, a) {
      'use strict';
      a.d(t, {
        B: function () {
          return n;
        },
        S: function () {
          return i;
        },
      });
      let n = { unit: 'mo', duration: 3 },
        i = [
          { label: 'All time', value: null },
          { label: '3 months', value: { unit: 'mo', duration: 3 } },
          { label: '1 month', value: 'mo' },
          { label: '1 week', value: 'w' },
        ];
    },
    82803: function (e, t, a) {
      'use strict';
      var n, i, l;
      a.d(t, {
        H: function () {
          return n;
        },
      }),
        ((l =
          (i = n || (n = {})).InterfaceOperationType ||
          (i.InterfaceOperationType = {})).supplyCollateral = 'Supply_Collateral'),
        (l.withdrawCollateral = 'Withdraw_Collateral'),
        (l.borrow = 'Borrow'),
        (l.repay = 'Repay'),
        (l.supplyCollateralBorrow = 'Supply_Collateral_Borrow'),
        (l.withdrawCollateralRepay = 'Withdraw_Collateral_Repay'),
        (l.metaMorphoDeposit = 'MetaMorpho_Deposit'),
        (l.metaMorphoWithdraw = 'MetaMorpho_Withdraw'),
        (l.zap = 'Zap'),
        (l.claimMerkl = 'Claim_Merkl'),
        (l.claimMorpho = 'Claim_Morpho'),
        (l.wrap = 'Wrap'),
        (l.migrateSupply = 'Migrate_Supply'),
        (l.migrateBorrow = 'Migrate_Borrow'),
        (l.toggleAutoDeleverage = 'Toggle_Auto_Deleverage'),
        (i.isBlueOperation = (e) =>
          [
            i.InterfaceOperationType.borrow,
            i.InterfaceOperationType.supplyCollateral,
            i.InterfaceOperationType.supplyCollateralBorrow,
            i.InterfaceOperationType.withdrawCollateral,
            i.InterfaceOperationType.repay,
            i.InterfaceOperationType.withdrawCollateralRepay,
            i.InterfaceOperationType.zap,
          ].includes(e.type)),
        (i.isMetaMorphoOperation = (e) =>
          [
            i.InterfaceOperationType.metaMorphoDeposit,
            i.InterfaceOperationType.metaMorphoWithdraw,
          ].includes(e.type));
    },
    59855: function (e, t, a) {
      'use strict';
      a.d(t, {
        Q: function () {
          return d;
        },
      });
      var n,
        i = a(77187),
        l = a(18313),
        o = a(82803);
      function r(e, t, a) {
        var n, i;
        if (a <= 0) return {};
        let l = [];
        for (
          let t = 0;
          t < (null !== (n = null == e ? void 0 : e.length) && void 0 !== n ? n : 0);
          t += a
        )
          l.push(null !== (i = null == e ? void 0 : e.slice(t, t + a)) && void 0 !== i ? i : []);
        let o = {};
        return (
          l.forEach((e, a) => {
            o[''.concat(t, '_').concat(a + 1)] = e;
          }),
          o
        );
      }
      function c(e, t, a) {
        if (a <= 0) return {};
        let n = Object.keys(null != e ? e : {}),
          i = [];
        for (let t = 0; t < n.length; t += a) {
          let l = {};
          n.slice(t, t + a).forEach((t) => {
            var a;
            l[t] = null !== (a = null == e ? void 0 : e[t]) && void 0 !== a ? a : null;
          }),
            i.push(l);
        }
        let l = {};
        return (
          i.forEach((e, a) => {
            l[''.concat(t, '_').concat(a + 1)] = e;
          }),
          l
        );
      }
      let s = [
        o.H.InterfaceOperationType.supplyCollateralBorrow,
        o.H.InterfaceOperationType.borrow,
        o.H.InterfaceOperationType.withdrawCollateral,
        o.H.InterfaceOperationType.withdrawCollateralRepay,
      ];
      (n || (n = {})).SharedLiquidity = '[Shared Liquidity]';
      let d = {
        createExtra: (e) => {
          let t = {};
          for (let a in e)
            'object' == typeof e[a] && null !== e[a]
              ? (t[a] = JSON.stringify(e[a], null, 2))
              : (t[a] = e[a]);
          return t;
        },
        shouldCapture: (e) =>
          'fatal' === e.level ||
          Object.values(n).some((t) => {
            var a;
            return null === (a = e.message) || void 0 === a ? void 0 : a.includes(t);
          }),
        debugSharedLiquidity: (e) => {
          var t, a, n, o, u, f, b;
          let { bundlingOptions: p, userAddress: _, txHash: E, operations: h, steps: C } = e;
          h.some((e) => s.includes(e.type)) &&
            l.clientEnvs.NEXT_PUBLIC_DEBUG_SHARED_LIQUIDITY &&
            i.eN({
              message: '[Shared Liquidity] user "'.concat(_, '" with tx hash "').concat(E, '"'),
              level: 'debug',
              tags: { sharedLiquidity: 'true' },
              extra: d.createExtra({
                defaultMaxWithdrawalUtilization:
                  null === (t = p.publicAllocatorOptions) || void 0 === t
                    ? void 0
                    : t.defaultMaxWithdrawalUtilization,
                defaultSupplyTargetUtilization:
                  null === (a = p.publicAllocatorOptions) || void 0 === a
                    ? void 0
                    : a.defaultSupplyTargetUtilization,
                publicAllocatorEnabled:
                  null === (n = p.publicAllocatorOptions) || void 0 === n ? void 0 : n.enabled,
                ...r(
                  null === (o = p.publicAllocatorOptions) || void 0 === o
                    ? void 0
                    : o.reallocatableVaults,
                  'reallocatableVaults',
                  30
                ),
                delay: null === (u = p.publicAllocatorOptions) || void 0 === u ? void 0 : u.delay,
                ...c(
                  null === (f = p.publicAllocatorOptions) || void 0 === f
                    ? void 0
                    : f.maxWithdrawalUtilization,
                  'maxWithdrawalUtilization',
                  50
                ),
                ...c(
                  null === (b = p.publicAllocatorOptions) || void 0 === b
                    ? void 0
                    : b.supplyTargetUtilization,
                  'supplyTargetUtilization',
                  50
                ),
                userAddress: _,
                txHash: E,
                operations: h,
                ...r(C, 'steps', 1),
              }),
            });
        },
      };
    },
    43872: function (e, t, a) {
      'use strict';
      var n = a(42343),
        i = a(18313),
        l = a(59855);
      (globalThis._sentryRewritesTunnelPath = void 0),
        (globalThis.SENTRY_RELEASE = { id: 'da8806113c8db7f4796e6a2a14e03245d9ec6a92' }),
        (globalThis._sentryBasePath = void 0),
        (globalThis._sentryRewriteFramesAssetPrefixPath = ''),
        (globalThis._sentryAssetPrefix = void 0),
        (globalThis._sentryExperimentalThirdPartyOriginStackFrames = void 0),
        i.clientEnvs.NEXT_PUBLIC_SENTRY_DSN &&
          n.S1({
            dsn: i.clientEnvs.NEXT_PUBLIC_SENTRY_DSN,
            sampleRate: 1,
            tracesSampleRate: 0,
            environment: 'production',
            beforeSend: (e) =>
              l.Q.shouldCapture(e) ? ((e.tags = { ...e.tags, execution: 'client' }), e) : null,
          });
    },
    43394: function (e, t, a) {
      'use strict';
      a.d(t, {
        hU: function () {
          return c;
        },
        FW: function () {
          return D;
        },
        e8: function () {
          return u;
        },
        IA: function () {
          return r;
        },
        Ag: function () {
          return d;
        },
        CL: function () {
          return l;
        },
        yZ: function () {
          return F;
        },
        I2: function () {
          return o;
        },
        $B: function () {
          return i;
        },
        Ym: function () {
          return f;
        },
      });
      var n = a(35047);
      let i = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/';
          return new URL(e, n.CDN_BASE_URL).toString();
        },
        l = i('/documents/Morpho_Terms_of_Use.pdf'),
        o = n.DOCS_BASE_URL + '/interface/warnings/#what-are-the-warnings-on-the-morpho-interface',
        r = 'https://docs.morpho.org/governance/morpho-token/morpho-token-faq',
        c = 'https://fallback.morpho.org';
      var s = a(40252);
      let d = {
          [s.ChainId.EthMainnet]: {
            '0x73e65DBD630f90604062f6E02fAb9138e713edD9':
              'It is not possible to deposit funds as this vault is dedicated solely to Maker’s D3M',
            '0x4Ff4186188f8406917293A9e01A1ca16d3cf9E59':
              'Deposits in this vault are only available via the SwissBorg app.',
            '0x059Fc6723b9bF77DbF4283C8d7C90eA8Af44EF10':
              'Deposits in this vault are only available via the SwissBorg app.',
          },
          [s.ChainId.BaseMainnet]: {},
          [s.ChainId.ArbitrumMainnet]: {},
          [s.ChainId.OptimismMainnet]: {},
          [s.ChainId.PolygonMainnet]: {},
          [s.ChainId.WorldChainMainnet]: {},
          [s.ChainId.FraxtalMainnet]: {},
          [s.ChainId.ScrollMainnet]: {},
          [s.ChainId.InkMainnet]: {},
          [s.ChainId.Unichain]: {},
          [s.ChainId.SonicMainnet]: {},
          [s.ChainId.HemiMainnet]: {},
          [s.ChainId.ModeMainnet]: {},
          [s.ChainId.CornMainnet]: {},
          [s.ChainId.PlumeMainnet]: {},
          [s.ChainId.CampMainnet]: {},
        },
        u = {
          [s.ChainId.BaseMainnet]: [
            '0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca',
            '0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1',
          ],
          [s.ChainId.EthMainnet]: [],
          [s.ChainId.ArbitrumMainnet]: [],
          [s.ChainId.OptimismMainnet]: [],
          [s.ChainId.PolygonMainnet]: [],
          [s.ChainId.WorldChainMainnet]: [],
          [s.ChainId.FraxtalMainnet]: [],
          [s.ChainId.ScrollMainnet]: [],
          [s.ChainId.InkMainnet]: [],
          [s.ChainId.Unichain]: [],
          [s.ChainId.SonicMainnet]: [],
          [s.ChainId.HemiMainnet]: [],
          [s.ChainId.ModeMainnet]: [],
          [s.ChainId.CornMainnet]: [],
          [s.ChainId.PlumeMainnet]: [],
          [s.ChainId.CampMainnet]: [],
        },
        f = {
          vaultsWithPoints: {
            1: {
              '0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0': [
                { title: 'Points', label: 'Ether.Fi', value: 'x1' },
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0x443df5eEE3196e9b2Dd77CaBd3eA76C3dee8f9b2': [
                { title: 'LUX', label: 'Lombard', value: 'x2' },
              ],
              '0xE0C98605f279e4D7946d25B75869c69802823763': [
                { title: 'LUX', label: 'Lombard', value: 'x2' },
              ],
              '0x1c530D6de70c05A81bF1670157b9d928e9699089': [
                { title: 'LUX', label: 'Lombard', value: 'x2' },
              ],
              '0x98cF0B67Da0F16E1F8f1a1D23ad8Dc64c0c70E0b': [
                { title: 'LUX', label: 'Lombard', value: 'x2' },
              ],
              '0xF587f2e8AfF7D76618d3B6B4626621860FbD54e3': [
                { title: 'LUX', label: 'Lombard', value: 'x2' },
              ],
              '0xA02F5E93f783baF150Aa1F8b341Ae90fe0a772f7': [
                { title: 'LUX', label: 'Lombard', value: 'x2' },
              ],
              '0xdC94785959B73F7A168452b3654E44fEc6A750e4': [
                { title: 'LUX', label: 'Lombard', value: 'x3' },
              ],
              '0x1265a81d42d513Df40d0031f8f2e1346954d665a': [
                { title: 'Potions', label: 'Elixir', value: 'x1.7' },
              ],
              '0x0404fD1a77756EB029F06b5CDea88B2B2ddC2fEE': [
                { title: 'Potions', label: 'Elixir', value: 'x3' },
              ],
              '0x0F359FD18BDa75e9c49bC027E7da59a4b01BF32a': [
                { title: 'Units', label: 'Relend', value: 'x10' },
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x1',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x2C25f6C25770fFEC5959D34B94Bf898865e5D6b1': [
                { title: 'Units', label: 'Relend', value: 'x1' },
              ],
              '0x38989BBA00BDF8181F4082995b3DEAe96163aC5D': [
                { title: 'Units', label: 'Relend', value: 'x1' },
              ],
              '0x186514400e52270cef3D80e1c6F8d10A75d47344': [
                { title: 'Units', label: 'Relend', value: 'x1' },
              ],
              '0xB9C9158aB81f90996cAD891fFbAdfBaad733c8C6': [
                { title: 'Units', label: 'Relend', value: 'x10' },
              ],
              '0x45c1875F1C48622b3D9740Af2D7dc62Bc9a72422': [
                { title: 'Units', label: 'Relend', value: 'x1' },
              ],
              '0xbEeFc011e94f43b8B7b455eBaB290C7Ab4E216f1': [
                {
                  title: 'Shift Points',
                  label: 'Coinshift',
                  value: 'x5',
                  link: 'https://coinshift.global/points',
                },
              ],
              '0x7204B7Dbf9412567835633B6F00C3Edc3a8D6330': [
                {
                  title: 'Shift Points',
                  label: 'Coinshift',
                  value: 'x1',
                  link: 'https://coinshift.global/points',
                },
              ],
              '0xd63070114470f685b75B74D60EEc7c1113d33a3D': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x1',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x8eB67A509616cd6A7c1B3c8C21D48FF57df3d458': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x1',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xBEeFFF209270748ddd194831b3fa287a5386f5bC': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x1',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xA0804346780b4c2e3bE118ac957D1DB82F9d7484': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x1',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x214B47C50057eFaa7adc1B1C2608C3751Cd77D78': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x5',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x132E6C9C33A62D7727cd359b1f51e5B566E485Eb': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x5',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xD50DA5F859811A91fD1876C9461fD39c23C747Ad': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x5085Dd6FAd07c12e38fae01bc2a4938d2C08B1Bc': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x00B6f2C15E4439749f192D10c70f65354848Cf4b': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x4EDfaB296F8Eb15aC0907CF9eCb7079b1679Da57': [
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x20',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
              '0x2F21c6499fa53a680120e654a27640Fc8Aa40BeD': [
                {
                  title: 'Bills',
                  label: 'OpenEden',
                  value: 'x3',
                  link: 'https://portal.openeden.com/bills-campaign?chain=mainnet',
                },
              ],
              '0x2C3Cc1C02856894345797Cf6ee76aE76AC0f4031': [
                { title: 'XP', label: 'Level', value: 'x40', link: 'https://app.level.money/farm' },
              ],
              '0xbEEf11C63d7173BdCC2037e7220eE9Bd0cCDA862': [
                { title: 'XP', label: 'Level', value: 'x5', link: 'https://app.level.money/farm' },
              ],
              '0xc582F04d8a82795aa2Ff9c8bb4c1c889fe7b754e': [
                {
                  title: 'Points',
                  label: 'Superform',
                  value: 'x5',
                  link: 'https://rewards.superform.xyz/',
                },
              ],
              '0xb5e4576C2FAA16b0cC59D1A2f3366164844Ef9E0': [
                {
                  title: 'TAC Boost',
                  label: 'Turtle Club',
                  value: 'x1.5',
                  link: 'https://app.turtle.club/campaigns',
                },
              ],
              '0x0bB2751a90fFF62e844b1521637DeD28F3f5046A': [
                {
                  title: 'TAC Boost',
                  label: 'Turtle Club',
                  value: 'x1.75',
                  link: 'https://app.turtle.club/campaigns',
                },
              ],
            },
            8453: {
              '0xA2Cac0023a4797b4729Db94783405189a4203AFc': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0x6b13c060F13Af1fdB319F52315BbbF3fb1D88844': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0x80D9964fEb4A507dD697b4437Fc5b25b618CE446': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0x70F796946eD919E4Bc6cD506F8dACC45E4539771': [
                { title: 'Units', label: 'Relend', value: 'x10' },
              ],
              '0x6770216aC60F634483Ec073cBABC4011c94307Cb': [
                { title: 'Lux', label: 'Lombard', value: 'x2' },
              ],
              '0x0D05e6ec0A10f9fFE9229EAA785c11606a1d13Fb': [
                { title: 'Lux', label: 'Lombard', value: 'x3' },
              ],
              '0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026': [
                { title: 'WELL', label: 'Coinbase One', noHoverCard: !0 },
              ],
              '0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca': [
                { title: 'WELL', label: 'Coinbase One', noHoverCard: !0 },
              ],
              '0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1': [
                { title: 'WELL', label: 'Coinbase One', noHoverCard: !0 },
              ],
              '0x543257eF2161176D7C8cD90BA65C2d4CaEF5a796': [
                { title: 'WELL', label: 'Coinbase One', noHoverCard: !0 },
              ],
              '0xcdDCDd18A16ED441F6CB10c3909e5e7ec2B9e8f3': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x5',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xC484D83F667b779cc9907248101214235642258B': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x00dfDb8C7295a03DCf1ADfF4D21eB5D9D19FB330': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657': [
                {
                  title: 'Bills',
                  label: 'OpenEden',
                  value: 'x3',
                  link: 'https://portal.openeden.com/bills-campaign?chain=mainnet',
                },
              ],
              '0x1E2aAaDcF528b9cC08F43d4fd7db488cE89F5741': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x1',
                  link: 'https://app.resolv.xyz/points',
                },
                {
                  title: 'TAC Boost',
                  label: 'Turtle Club',
                  value: 'x2.5',
                  link: 'https://app.turtle.club/campaigns',
                },
              ],
            },
          },
          vaultsWithPointsOnMarketCollateralToken: { 1: {}, 8453: {} },
          marketsWithPoints: {
            1: {
              '0xa72f4af2570dca1b356aa6c1e6a804d0d3df5b23bb092189776d0dc652feabb4': [
                { title: 'Points', label: 'Kernel', value: 'x1' },
                { title: 'Eigen', value: 'x1' },
              ],
              '0xba761af4134efb0855adfba638945f454f0a704af11fc93439e20c7c5ebab942': [
                { title: 'Points', label: 'Kernel', value: 'x2' },
                { title: 'Eigen', value: 'x1' },
              ],
              '0x093d5b432aace8bf6c4d67494f4ac2542a499571ff7a1bcc9f8778f3200d457d': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0xa0534c78620867b7c8706e3b6df9e69a2bc67c783281b7a77e034ed75cee012e': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0x49bb2d114be9041a787432952927f6f144f05ad3e83196a7d062f374ee11d0ee': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0x459687783a68f4cf4e230618f88ce135d1cd459a850f6496751c2a9c1c6e852e': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0xbd1ad3b968f5f0552dbd8cf1989a62881407c5cccf9e49fb3657c8731caf0c1f': [
                { title: 'Potions', label: 'Elixir', value: 'x5' },
              ],
              '0x1c6f0822b996c86b2cace788cc265beb4f84585456aba8f424c710e67116b93d': [
                { title: 'Potions', label: 'Elixir', value: 'x10' },
              ],
              '0x0f9563442d64ab3bd3bcb27058db0b0d4046a4c46f0acd811dacae9551d2b129': [
                { title: 'Potions', label: 'Elixir', value: 'x3' },
              ],
              '0x444327b909aa41043cc4f20209eefb2fbb37f1c38ff9ca312374a4ecc3f0a871': [
                { title: 'XP', label: 'Solv', value: 'x10' },
              ],
              '0x3170feb9e3c0172beb9901f6035e4e005f42177c5c14e8c0538c27078864654e': [
                { title: 'LUX', label: 'Lombard', value: 'x3' },
              ],
              '0xcfd9f683c6ab4b3c95e450e3faaf582c2b5fe938ef7405c4d60f2e9fd77415cc': [
                { title: 'XP for collateral', label: 'Solv', value: 'x10' },
                { title: 'XP for borrowing', label: 'Solv', value: 'x8' },
              ],
              '0x7bf57130cf88dcfe052a4cfd6c7cce28ec7d0be7264f2a6b8a3b3f1b2fb02494': [
                { title: 'XP for collateral', label: 'Solv', value: 'x10' },
                { title: 'XP for borrowing', label: 'Solv', value: 'x8' },
              ],
              '0x9507d68c9c8663bd134680005cc0b3d8a891fa95db1905268933ac6bbc1d1feb': [
                { title: 'Points', label: 'Hinkal', value: 'x2' },
              ],
              '0x5f5bfaa51137098abc90b249c93b6051987877ada76135bb3dd7502b10d184a3': [
                { title: 'XP', label: 'Level', value: 'x10', link: 'https://app.level.money/farm' },
              ],
              '0x8b1bc4d682b04a16309a8adf77b35de0c42063a7944016cfc37a79ccac0007b6': [
                { title: 'XP', label: 'Level', value: 'x3', link: 'https://app.level.money/farm' },
              ],
              '0x185df29d35001b5657c9c964284ddbeee83a40c83e6c6e89432463e2157e075c': [
                { title: 'XP', label: 'Level', value: 'x5', link: 'https://app.level.money/farm' },
              ],
              '0xf78b7d3a62437f78097745a5e3117a50c56a02ec5f072cba8d988a129c6d4fb6': [
                { title: 'Bera-Wave', label: 'Stakestone', value: 'x2' },
              ],
              '0xcfe8238ad5567886652ced15ee29a431c161a5904e5a6f380baaa1b4fdc8e302': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x5',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x308cb8d01d8fe656ceaf4841abc62cee6587f9e46533622e30a0053337953432': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x1def309fa6c5b6ee7044b67154f15872af6c7e240f1e103f6a46cd82fb351688': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x8e7cc042d739a365c43d0a52d5f24160fa7ae9b7e7c9a479bd02a56041d4cf77': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xd9e34b1eed46d123ac1b69b224de1881dbc88798bc7b70f504920f62f58f28cc': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x5',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x0ec590b250f171c22d39958a55a0589091431fe90599d55409c39aeb01363cb0': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xe1b65304edd8ceaea9b629df4c3c926a37d1216e27900505c04f14b2ed279f33': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x3c16c2d107caade490b1d513ccc54cbd06a30f20ad6a9aaad8c744413872514a': [
                { title: 'SEEDS', label: 'Yieldnest', value: 'x1' },
              ],
              '0xc1f8ab27abbe4defca7ba1cbc02f695df1f637760b490ff1466887dc3af6f398': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xfaa104a391485a79cd2eb3a0ac33b20e4230a269c22fb8462c6301cb80fee407': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x5',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x140fe48783fe88d2a52b31705577d917628caaf74ff79865b39d4c2aa6c2fd3c': [
                { title: 'Points', label: 'Ethereal', value: 'x1' },
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x30',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
              '0x729badf297ee9f2f6b3f717b96fd355fc6ec00422284ce1968e76647b258cf44': [
                {
                  title: 'Drips',
                  label: 'Syrup',
                  value: 'x1',
                  link: 'https://app.maple.finance/earn/drips',
                },
              ],
              '0xcc39b6c92fd03ac608b9239618db8b80a4a2034b0450bdf47b404229571312da': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x30',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x3889dee51674c6e728f7d05f11a3407c6853e433a0e63f8febbc45887a26a475': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x30',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xc0a2d21761551c5edb963147392f4b6b1136b749f320ea34ae7d06b364f8495e': [
                {
                  title: 'Bills',
                  label: 'OpenEden',
                  value: 'x5',
                  link: 'https://portal.openeden.com/bills-campaign?chain=mainnet',
                },
              ],
              '0x15f30b939b8590be30aa22cd8d6367cf90a0ae460ce7f644ddbf58b8442e619a': [
                {
                  title: 'Bills',
                  label: 'OpenEden',
                  value: 'x5',
                  link: 'https://portal.openeden.com/bills-campaign?chain=mainnet',
                },
              ],
              '0x60154d71ec96b7aee2864326662cb731172f1ebd6ca0e64af9bc8659831ed0ff': [
                { title: 'Points', label: 'YC', value: 'x1' },
              ],
              '0x0f8ff4fa22195841e7fd1e0520f650a4d71247f75b9a1eb4ecabe111776a118c': [
                { title: 'Extra Rewards', label: 'mEDGE', value: 'x1' },
              ],
              '0xbf6687cb042a09451e66ebc11d7716c49fb8ccc75f484f7fab0eed6624bd5838': [
                { title: 'Extra Rewards', label: 'mMEV', value: 'x1' },
              ],
              '0xa9abd614ac94eee663b472bac0f704ece4469c3ce12df1d84565c7781541793e': [
                { title: 'Extra Rewards', label: 'mMEV', value: 'x1' },
              ],
              '0x4987abb1971947da9be3a47a58cb846a57b8a33bb3db1b0b2c6a3599c8b3a576': [
                { title: 'Extra Rewards', label: 'mMEV', value: 'x1' },
              ],
              '0xa9d6a0caea685bb0099ba2d52a58fb7ed33a6447616c25df93bdb8330337a9c3': [
                {
                  title: 'Shift Points',
                  label: 'Coinshift',
                  value: 'x1',
                  link: 'https://coinshift.global/points',
                },
              ],
              '0xb81eaed0df42ff6646c8daf4fe38afab93b13b6a89c9750d08e705223a45e2ef': [
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x1',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
              '0xbc552f0b14dd6f8e60b760a534ac1d8613d3539153b4d9675d697e048f2edc7e': [
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x1',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
              '0x83e10b446f0f2013bb5417fbab8de0371808da605d9d88bdd3ad9de4e7303048': [
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x1',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
              '0x896111ed91a5ae232f98193b453fae1eb6670ce504e228636b7d0baae23fd52d': [
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x1',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
            },
            8453: {
              '0x58bf7ed35b5d213336a68a5a42dff58f03ceaf417edaad0fc53e046f1742e20e': [
                { title: 'z-points', value: 'x20' },
              ],
              '0x214c2bf3c899c913efda9c4a49adff23f77bbc2dc525af7c05be7ec93f32d561': [
                { title: 'Points', label: 'Kernel', value: 'x2' },
                { title: 'Eigen', value: 'x1' },
              ],
              '0x12c37bd01e0050e15e85e37b6bfd9a9bc357e7881a4589b6873f94512af1ce66': [
                { title: 'LUX', label: 'Lombard', value: 'x3' },
              ],
              '0x30767836635facec1282e6ef4a5981406ed4e72727b3a63a3a72c74e8279a8d7': [
                { title: 'LUX', label: 'Lombard', value: 'x3' },
              ],
              '0x4944a1169bc07b441473b830308ffe5bb535c10a9f824e33988b60738120c48e': [
                { title: 'LUX', label: 'Lombard', value: 'x3' },
              ],
              '0xff0f2bd52ca786a4f8149f96622885e880222d8bed12bbbf5950296be8d03f89': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0xf4d219ed36d38634f89c992a1bc50e73324f9c5c663d29d089d3f8aa74c700f3': [
                {
                  title: 'Points',
                  label: 'Resolv',
                  value: 'x20',
                  link: 'https://app.resolv.xyz/points',
                },
              ],
              '0x5b347b3dcfed096f09040cd30a174ae354ecc0a35c996493b8fa490d6d3e79d7': [
                {
                  title: 'Bills',
                  label: 'OpenEden',
                  value: 'x5',
                  link: 'https://portal.openeden.com/bills-campaign?chain=mainnet',
                },
              ],
              '0x99f294c452edc091c988688d501dca78a06ba559065c242b19653452e6affc7a': [
                {
                  title: 'Bills',
                  label: 'OpenEden',
                  value: 'x2',
                  link: 'https://portal.openeden.com/bills-campaign?chain=mainnet',
                },
              ],
            },
          },
          marketsWithPointsOnCollateralToken: {
            1: {
              '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee': [
                { title: 'Points', label: 'Ether.FI', value: 'x1' },
              ],
              '0x9D39A5DE30e57443BfF2A8307A4256c8797A3497': [
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x5',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
              '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3': [
                {
                  title: 'Sats',
                  label: 'Ethena',
                  value: 'x25',
                  link: 'https://app.ethena.fi/opportunities?search=morpho',
                },
              ],
              '0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0': [
                { title: 'Points', label: 'Renzo', value: 'x1' },
              ],
              '0x7122985656e38BDC0302Db86685bb972b145bD3C': [
                { title: 'STONE', label: 'Stakestone', value: 'x2' },
                { title: 'Points', label: 'Symbiotic', value: 'x1' },
                { title: 'Points', label: 'Mellow', value: 'x1' },
              ],
              '0x8236a87084f8B84306f72007F36F2618A5634494': [
                { title: 'LUX', label: 'Lombard', value: 'x3' },
              ],
            },
            8453: {
              '0x2416092f143378750bb29b79eD961ab195CcEea5': [
                { title: 'Points', label: 'Renzo', value: 'x2' },
              ],
            },
          },
          vaultsWithPointsOnMarket: { 1: {}, 8453: {} },
        };
      var b = a(79008),
        p = a(93726),
        _ = a(98445),
        E = a(92167);
      let h = i('/assets/logos/aave.svg'),
        C = i('/assets/logos/comp.svg'),
        A = i('/assets/logos/well.svg'),
        v = { name: 'Morpho Aave V3', imageSrc: h, supportSignature: !0 },
        I = { name: 'Aave V2', imageSrc: h, supportSignature: !0 },
        T = { name: 'Aave V3', imageSrc: h, supportSignature: !0 },
        L = { name: 'Compound v2', imageSrc: C, supportSignature: !1 },
        x = { name: 'Compound III', imageSrc: C, supportSignature: !0 },
        P = s.addressesRegistry[s.ChainId.EthMainnet],
        m = s.addressesRegistry[s.ChainId.BaseMainnet],
        U = s.addressesRegistry[s.ChainId.PolygonMainnet],
        R = s.addressesRegistry[s.ChainId.Unichain],
        B = {
          [s.ChainId.EthMainnet]: {
            chain: b.R,
            safeIdentifier: 'eth',
            img: i('assets/chains/eth.svg'),
            name: 'ethereum',
            isPreLiquidationSupported: !0,
            protocols: { aaveV3Optimizer: v, aaveV2: I, aaveV3: T, compoundV2: L, compoundV3: x },
            vaultVersion: {
              'v1.0': '0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101',
              'v1.1': '0x1897A8997241C1cD4bD0698647e4EB7213535c24',
            },
            rpcUrls: [
              'https://rpc.mevblocker.io',
              'https://ethereum-rpc.publicnode.com',
              'https://gateway.tenderly.co/public/mainnet',
            ],
            withSimplePermit: new Set([P.wstEth, P.sDai, P.osEth, P.usdc, P.dai]),
            merklAddress: '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae',
            color: { light: '#555E64', dark: '#d6d6d6' },
            wrappedTokensToPeripheralSymbols: {
              [P.wNative]: ['ETH'],
              [P.wstEth]: ['stETH', 'WETH', 'ETH'],
              [P.bIB01]: ['bib01'],
              [P.wbC3M]: ['bC3M'],
            },
          },
          [s.ChainId.BaseMainnet]: {
            chain: p.u,
            safeIdentifier: 'base',
            img: i('assets/chains/base.png'),
            name: 'base',
            isPreLiquidationSupported: !0,
            rpcUrls: [
              'https://base-rpc.publicnode.com',
              'https://mainnet.base.org',
              'https://gateway.tenderly.co/public/base',
            ],
            protocols: {
              aaveV3Optimizer: v,
              aaveV2: I,
              aaveV3: T,
              compoundV2: { name: 'Moonwell', imageSrc: A, supportSignature: !1 },
              compoundV3: x,
            },
            withSimplePermit: new Set([m.usdc, m.verUsdc]),
            vaultVersion: {
              'v1.0': '0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101',
              'v1.1': '0xFf62A7c278C62eD665133147129245053Bbf5918',
            },
            merklAddress: '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae',
            color: { light: '#2973FF', dark: '#2973FF' },
            wrappedTokensToPeripheralSymbols: {
              [m.wNative]: ['ETH'],
              [m.verUsdc]: ['USDC'],
              [m.testUsdc]: ['USDC'],
            },
          },
          [s.ChainId.PolygonMainnet]: {
            chain: _.y,
            safeIdentifier: 'matic',
            img: i('assets/chains/polygon.svg'),
            name: 'polygon',
            isPreLiquidationSupported: !1,
            rpcUrls: [
              'https://polygon-bor-rpc.publicnode.com',
              'https://polygon.drpc.org',
              'https://polygon-pokt.nodies.app',
            ],
            protocols: { aaveV3Optimizer: v, aaveV2: I, aaveV3: T, compoundV2: L, compoundV3: x },
            withSimplePermit: new Set([]),
            vaultVersion: { 'v1.0': null, 'v1.1': '0xa9c87daB340631C34BB738625C70499e29ddDC98' },
            merklAddress: '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae',
            color: { light: '#6C00F6', dark: '#6C00F6' },
            wrappedTokensToPeripheralSymbols: { [U.wNative]: ['POL'] },
          },
          [s.ChainId.Unichain]: {
            chain: E.R,
            safeIdentifier: 'unichain',
            img: i('assets/chains/unichain.svg'),
            name: 'unichain',
            isPreLiquidationSupported: !1,
            rpcUrls: ['https://unichain-rpc.publicnode.com', 'https://unichain.drpc.org'],
            protocols: { aaveV3Optimizer: v, aaveV2: I, aaveV3: T, compoundV2: L, compoundV3: x },
            withSimplePermit: new Set([]),
            vaultVersion: { 'v1.0': null, 'v1.1': '0xe9EdE3929F43a7062a007C3e8652e4ACa610Bdc0' },
            merklAddress: '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae',
            color: { light: '#f72ac9', dark: '#f72ac9' },
            wrappedTokensToPeripheralSymbols: { [R.wNative]: ['ETH'] },
          },
          [s.ChainId.ArbitrumMainnet]: void 0,
          [s.ChainId.OptimismMainnet]: void 0,
          [s.ChainId.WorldChainMainnet]: void 0,
          [s.ChainId.FraxtalMainnet]: void 0,
          [s.ChainId.ScrollMainnet]: void 0,
          [s.ChainId.InkMainnet]: void 0,
          [s.ChainId.SonicMainnet]: void 0,
          [s.ChainId.HemiMainnet]: void 0,
          [s.ChainId.ModeMainnet]: void 0,
          [s.ChainId.CornMainnet]: void 0,
          [s.ChainId.PlumeMainnet]: void 0,
          [s.ChainId.CampMainnet]: void 0,
        },
        N = Object.values(B).filter((e) => void 0 !== e);
      class F extends Error {
        constructor(e) {
          super('Chain "'.concat(e, '" not found'));
        }
      }
      let D = {
        DEPLOYED_CHAINS: N,
        getMetadata: (e) => {
          let t = B[e];
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t;
        },
        getSafeIdentifier: (e) => {
          let t = B[e];
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t.safeIdentifier;
        },
        getIdByName: (e) => {
          let t = N.find((t) => t.name === e);
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t.chain.id;
        },
        getNameById: (e) => {
          let t = N.find((t) => t.chain.id === e);
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t.name;
        },
        tryGetChain: (e) => {
          if (void 0 === e) return;
          let t = e;
          'string' == typeof e && (t = e.trim().toLowerCase());
          let a = N.find((e) => e.chain.id === t || e.name === t);
          return a ? a.chain : null;
        },
        getProtocol: (e) => {
          let { chainId: t, name: a } = e,
            i = B[t];
          if (!(0, n.isDefined)(i)) throw new F(t);
          return i.protocols[a];
        },
        isPreLiquidationSupported: (e) => {
          let t = B[e];
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t.isPreLiquidationSupported;
        },
        getAssetsWithSimplePermit: (e) => {
          let t = B[e];
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t.withSimplePermit;
        },
        getWrappedTokensToPeripheralSymbols: (e) => {
          let { chainId: t, tokenAddress: a } = e,
            i = B[t];
          if (!(0, n.isDefined)(i)) throw new F(t);
          let l = i.wrappedTokensToPeripheralSymbols;
          return ((0, n.isDefined)(l) && l[a]) || [];
        },
        getVaultVersionByAddress: (e, t) => {
          var a;
          let i = B[e];
          if (!(0, n.isDefined)(i)) throw new F(e);
          return null ===
            (a = Object.entries(i.vaultVersion).find((e) => {
              let [, a] = e;
              return null == a ? void 0 : a.toLowerCase().endsWith(t.toLowerCase());
            })) || void 0 === a
            ? void 0
            : a[0];
        },
        getMerklAddress: (e) => {
          let t = B[e];
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t.merklAddress;
        },
        getColor: (e) => {
          let t = B[e];
          if (!(0, n.isDefined)(t)) throw new F(e);
          return t.color;
        },
        isDeployedOnChain: {
          id: (e) =>
            void 0 !==
            N.map((e) => {
              let { chain: t } = e;
              return t.id;
            }).find((t) => t === e),
          name: (e) => N.some((t) => t.name === e),
        },
      };
    },
    33877: function (e, t, a) {
      'use strict';
      a.d(t, {
        J: function () {
          return n;
        },
      });
      let n = (0, a(35514).f)('0.95');
    },
    92196: function (e, t, a) {
      'use strict';
      a.d(t, {
        M4: function () {
          return r;
        },
        DZ: function () {
          return c;
        },
        zF: function () {
          return u;
        },
        UW: function () {
          return n;
        },
      });
      let n = (e) => e.stopPropagation();
      var i = a(35514),
        l = a(40252),
        o = a(33877);
      let r = (e, t) => 0n !== t && (e * (0, i.f)('1')) / t >= o.J,
        c = (e) => {
          let { collateralPrice: t, priceVariationToLiquidationPrice: a } = e;
          return 0n === t || 0n === a ? 0n : t + l.MathLib.wMulDown(t, a);
        };
      var s = a(35047),
        d = a(43394);
      let u = (e) => {
        var t;
        let { chainId: a, address: n } = e,
          i = null === (t = d.Ag[a]) || void 0 === t ? void 0 : t[n];
        return { message: i, isReadOnly: (0, s.isDefined)(i) };
      };
    },
    9009: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          useCachedValue: function () {
            return o;
          },
        });
      var n = a(58258),
        i = a(35047);
      let l = (e, t) => (0, i.isDefined)(t) && e !== t;
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          a = (0, n.useRef)(e);
        return (null == t ? void 0 : t(a.current, e)) && (a.current = e), a.current;
      }
    },
    30726: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          useFetch: function () {
            return i;
          },
        });
      var n = a(58258);
      function i(e, t, a) {
        let [i, l] = (0, n.useState)(a),
          [o, r] = (0, n.useState)(!0),
          [c, s] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            r(!0);
            let t = new AbortController();
            return (
              (async () => {
                l(await e(t));
              })().finally(() => {
                r(!1);
              }),
              () => {
                t.abort();
              }
            );
          }, [...t, c]),
          {
            value: i,
            loading: o,
            refresh: (0, n.useCallback)(
              function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && l(a), s((e) => e + 1);
              },
              [a]
            ),
          }
        );
      }
    },
    95955: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          useIsMounted: function () {
            return i;
          },
        });
      var n = a(58258);
      function i() {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
    },
    59586: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          useMemoWithHistory: function () {
            return i;
          },
        });
      var n = a(58258);
      function i(e, t) {
        let [a, i] = (0, n.useState)(e(void 0));
        return (
          (0, n.useEffect)(() => {
            i(e);
          }, t),
          a
        );
      }
    },
    68843: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          useSet: function () {
            return i;
          },
        });
      var n = a(58258);
      let i = (e) => {
        let [t, a] = (0, n.useState)(() => new Set(e)),
          i = (0, n.useCallback)(function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a((e) => {
              let a = new Set(e),
                n = !1;
              return (
                t.forEach((e) => {
                  a.has(e) || (a.add(e), (n = !0));
                }),
                n ? a : e
              );
            });
          }, []);
        return [
          t,
          i,
          (0, n.useCallback)(function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a((e) => {
              let a = new Set(e),
                n = !1;
              return (
                t.forEach((e) => {
                  a.delete(e) && (n = !0);
                }),
                n ? a : e
              );
            });
          }, []),
          (0, n.useCallback)((e, t) => {
            a((a) => {
              let n = null != t ? t : !a.has(e);
              if (n === a.has(e)) return a;
              let i = new Set(a);
              return n ? i.add(e) : i.delete(e), i;
            });
          }, []),
          (0, n.useCallback)((e) => {
            a((t) => {
              let a = new Set(e);
              return t.size === a.size && Array.from(t).every((e) => a.has(e)) ? t : a;
            });
          }, []),
        ];
      };
    },
    1017: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          useReadOnlyVault: function () {
            return l;
          },
        });
      var n = a(58258),
        i = a(92196);
      let l = (e) => {
        let { chainId: t, address: a } = e;
        return (0, n.useMemo)(
          () =>
            t && a ? (0, i.zF)({ chainId: t, address: a }) : { message: void 0, isReadOnly: !1 },
          [t, a]
        );
      };
    },
    12556: function (e, t, a) {
      'use strict';
      a.d(t, {
        hU: function () {
          return n.hU;
        },
        FW: function () {
          return n.FW;
        },
        cS: function () {
          return h;
        },
        JC: function () {
          return p.J;
        },
        e8: function () {
          return n.e8;
        },
        IA: function () {
          return n.IA;
        },
        CL: function () {
          return n.CL;
        },
        yZ: function () {
          return n.yZ;
        },
        I2: function () {
          return n.I2;
        },
        YK: function () {
          return C;
        },
        $B: function () {
          return n.$B;
        },
        M4: function () {
          return b.M4;
        },
        DZ: function () {
          return b.DZ;
        },
        zF: function () {
          return b.zF;
        },
        wk: function () {
          return A;
        },
        Ym: function () {
          return n.Ym;
        },
        UW: function () {
          return b.UW;
        },
        DI: function () {
          return c.useCachedValue;
        },
        ib: function () {
          return l.useFetch;
        },
        nR: function () {
          return u;
        },
        tm: function () {
          return r.useIsMounted;
        },
        HN: function () {
          return i.useMemoWithHistory;
        },
        WW: function () {
          return f.useReadOnlyVault;
        },
        $X: function () {
          return o.useSet;
        },
      });
      var n = a(43394),
        i = a(59586),
        l = a(30726),
        o = a(68843),
        r = a(95955),
        c = a(9009),
        s = a(58258),
        d = a(35047);
      function u(e) {
        let { isFetching: t, dependencies: a = [], requiredData: n = [] } = e;
        return (0, s.useMemo)(() => !(a.some((e) => !e) || n.every(d.isDefined)) && t, [t, a, n]);
      }
      var f = a(1017),
        b = a(92196),
        p = a(33877),
        _ = a(35514),
        E = a(40252);
      class h extends E.Token {
        constructor(e, t = e.logoURI) {
          super(e), (this.logoURI = t), (this.chain = e.chain);
        }
      }
      class C extends h {
        static tryGetApr(e) {
          return e instanceof C ? e.yield : null;
        }
        constructor(e, t) {
          super(e), (this.yield = t);
        }
      }
      function A(e) {
        if (!e) return null;
        let t = null == e.priceUsd ? void 0 : (0, _.f)(e.priceUsd.toFixed(18));
        return 'yield' in e && e.yield
          ? new C({ ...e, price: t }, e.yield.apr)
          : new h({ ...e, price: t }, e.logoURI);
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [6269, 8804], function () {
      return t(43872), t(52866), t(6248);
    }),
      (_N_E = e.O());
  },
]);
