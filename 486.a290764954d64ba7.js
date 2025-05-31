(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [486],
  {
    18087: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      let a = function ({
        supportedWalletType: e = 'all',
        darkMode: t = !1,
        enableMobileWalletLink: a = !1,
        reloadOnDisconnect: r = !0,
      } = {}) {
        return () => ({
          label: 'Coinbase Wallet',
          getIcon: async () => (await n.e(6208).then(n.bind(n, 66208))).default,
          getInterface: async ({ chains: i, appMetadata: o }) => {
            (a || r || t) &&
              console.warn(
                'darkMode, enableMobileWalletLink and reloadOnDisconnect init props are deprecated after version 2.2.7 of @web3-onboard/coinbase'
              );
            let { name: l, icon: c } = o || {},
              { default: s } = await n.e(7851).then(n.bind(n, 37851)),
              d = s.default ? s.default : s,
              {
                isHex: u,
                toHex: h,
                createEIP1193Provider: f,
                fromHex: p,
              } = await Promise.resolve().then(n.bind(n, 64838)),
              y = window.btoa(c || ''),
              m = new d({
                appName: l || '',
                appLogoUrl: `data:image/svg+xml;base64,${y}`,
                appChainIds: i.map(({ id: e }) => p(e, 'number')),
              }),
              w = m.makeWeb3Provider({ options: e }),
              b = w.on.bind(w);
            w.on = (e, t) => (
              b(e, (n) => {
                if ('chainChanged' === e) {
                  let e;
                  t(u(n) ? n : h(n));
                  return;
                }
                t(n);
              }),
              w
            );
            let v = f(w);
            return (v.removeListener = (e, t) => {}), { provider: v, instance: m };
          },
        });
      };
    },
    19403: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => d, L: () => s });
      var a = n(22318);
      let r = a.object({
          handleUri: a.func().optional(),
          version: a
            .number()
            .optional()
            .custom((e, t) => {
              if (1 === e)
                console.warn(
                  'Version 1 of WalletConnect has been fully deprecated. This version of @web3-onboard/walletconnect only supports version 2'
                );
              else if (2 !== e && void 0 !== e)
                return t.error('any.invalid', {
                  message:
                    'Invalid version number. This version of @web3-onboard/walletconnect only supports version 2',
                });
              return e;
            }, 'Custom version validation'),
          projectId: a
            .string()
            .messages({
              'any.required':
                'WalletConnect version 2 requires a projectId. Please visit https://cloud.walletconnect.com to get one.',
            }),
          dappUrl: a
            .string()
            .optional()
            .custom(
              (e, t) =>
                e ||
                t.message({
                  message:
                    'It is strongly recommended to supply a dappUrl as it is required by some wallets (i.e. MetaMask) to allow connection.',
                  type: 'any.custom',
                }),
              'Custom dappUrl validation'
            ),
          requiredChains: a.array().items(a.number()).optional(),
          optionalChains: a.array().items(a.number()).optional(),
          qrModalOptions: a.object().optional(),
          additionalRequiredMethods: a.array().items(a.string()).optional(),
          additionalOptionalMethods: a.array().items(a.string()).optional(),
        }),
        i = (e, t) => {
          let n = e.validate(t);
          return n.error ? n : null;
        },
        o = (e) => i(r, e),
        l = [
          'eth_sendTransaction',
          'eth_signTransaction',
          'personal_sign',
          'eth_sign',
          'eth_signTypedData',
          'eth_signTypedData_v4',
          'wallet_addEthereumChain',
          'wallet_switchEthereumChain',
        ],
        c = function (e) {
          let t;
          if (!e.projectId)
            throw Error(
              'WalletConnect requires a projectId. Please visit https://cloud.walletconnect.com to get one.'
            );
          e.dappUrl ||
            console.warn(
              'It is strongly recommended to supply a dappUrl to the WalletConnect init object as it is required by some wallets (i.e. MetaMask) to allow connection.'
            );
          let {
            projectId: a,
            handleUri: r,
            requiredChains: i,
            optionalChains: o,
            qrModalOptions: c,
            additionalRequiredMethods: d,
            additionalOptionalMethods: u,
            dappUrl: h,
          } = e;
          return () => ({
            label: 'WalletConnect',
            getIcon: async () => (await n.e(4063).then(n.bind(n, 4063))).default,
            getInterface: async ({ chains: f, EventEmitter: p, appMetadata: y }) => {
              let { ProviderRpcError: m, ProviderRpcErrorCode: w } = await Promise.resolve().then(
                  n.bind(n, 64838)
                ),
                { default: b, REQUIRED_METHODS: v } = await Promise.all([
                  n.e(2970),
                  n.e(8542),
                ]).then(n.bind(n, 18542)),
                { Subject: g, fromEvent: I } = await Promise.all([
                  n.e(4024),
                  n.e(1252),
                  n.e(5996),
                ]).then(n.bind(n, 75996)),
                { takeUntil: P, take: k } = await Promise.all([n.e(4024), n.e(3544)]).then(
                  n.bind(n, 83544)
                ),
                _ =
                  Array.isArray(i) && i.length && i.every((e) => !isNaN(e))
                    ? i.map((e) => parseInt(e))
                    : [],
                E =
                  Array.isArray(o) && o.length && o.every((e) => !isNaN(e))
                    ? o.map((e) => parseInt(e))
                    : f.map(({ id: e }) => parseInt(e, 16)),
                W = Array.from(new Set(d && Array.isArray(d) ? [...d, ...v] : v)),
                j = u && Array.isArray(u) ? [...u, ...l] : l,
                A = await b.init({
                  projectId: a,
                  chains: _,
                  methods: W,
                  optionalChains: E,
                  optionalMethods: j,
                  showQrModal: !0,
                  rpcMap: f
                    .map(({ id: e, rpcUrl: t }) => ({ id: e, rpcUrl: t }))
                    .reduce((e, { id: t, rpcUrl: n }) => ((e[parseInt(t, 16)] = n || ''), e), {}),
                  metadata: (() => {
                    if (!y) return;
                    let e = h || y.explore || '';
                    e ||
                      e.length ||
                      console.warn(
                        'It is strongly recommended to supply a dappUrl as it is required by some wallets (i.e. MetaMask) to allow connection.'
                      );
                    let t = { name: y.name, description: y.description || '', url: e, icons: [] };
                    return (
                      void 0 !== y.icon && y.icon.length && (t.icons = [y.icon]),
                      void 0 !== y.logo &&
                        y.logo.length &&
                        (t.icons = t.icons.length ? [...t.icons, y.logo] : [y.logo]),
                      t
                    );
                  })(),
                  qrModalOptions: c,
                }),
                C = new p();
              class x {
                constructor({ connector: n, chains: a }) {
                  (this.emit = C.emit.bind(C)),
                    (this.on = C.on.bind(C)),
                    (this.removeListener = C.removeListener.bind(C)),
                    (this.connector = n),
                    (this.chains = a),
                    (this.disconnected$ = new g()),
                    I(this.connector, 'accountsChanged', (e) => e)
                      .pipe(P(this.disconnected$))
                      .subscribe({
                        next: (e) => {
                          let t = Array.isArray(e) ? e : [e];
                          this.emit('accountsChanged', t);
                        },
                        error: console.warn,
                      }),
                    I(this.connector, 'chainChanged', (e) => e)
                      .pipe(P(this.disconnected$))
                      .subscribe({
                        next: (e) => {
                          let t = s(e) ? e : `0x${e.toString(16)}`;
                          this.emit('chainChanged', t);
                        },
                        error: console.warn,
                      }),
                    I(this.connector, 'session_delete', (e) => e)
                      .pipe(P(this.disconnected$))
                      .subscribe({
                        next: () => {
                          this.emit('accountsChanged', []),
                            this.disconnected$.next(!0),
                            'undefined' != typeof localStorage &&
                              localStorage.removeItem('walletconnect');
                        },
                        error: console.warn,
                      }),
                    (this.disconnect = () => {
                      this.connector.session && (this.connector.disconnect(), (t = null));
                    }),
                    e &&
                      r &&
                      I(this.connector, 'display_uri', (e) => e)
                        .pipe(P(this.disconnected$))
                        .subscribe(async (e) => {
                          try {
                            r && (await r(e));
                          } catch (e) {
                            throw `An error occurred when handling the URI. Error: ${e}`;
                          }
                        }),
                    (() => {
                      let e = this.connector.session;
                      (t = e),
                        e &&
                          (this.emit('accountsChanged', this.connector.accounts),
                          this.emit('chainChanged', this.connector.chainId));
                    })(),
                    (this.request = async ({ method: e, params: n }) => {
                      if ('eth_chainId' === e)
                        return s(this.connector.chainId)
                          ? this.connector.chainId
                          : `0x${this.connector.chainId.toString(16)}`;
                      if ('eth_requestAccounts' === e)
                        return new Promise(async (e, n) => {
                          if (
                            (I(this.connector, 'connect', (e) => e)
                              .pipe(k(1))
                              .subscribe({
                                next: ({ chainId: t }) => {
                                  this.emit('accountsChanged', this.connector.accounts);
                                  let n = s(t) ? t : `0x${t.toString(16)}`;
                                  this.emit('chainChanged', n), e(this.connector.accounts);
                                },
                                error: n,
                              }),
                            this.connector.session)
                          ) {
                            let n = this.connector.accounts,
                              a = this.connector.chainId;
                            t = this.connector.session;
                            let r = `0x${a.toString(16)}`;
                            return this.emit('chainChanged', r), e(n);
                          }
                          await this.connector.connect().catch((e) => {
                            console.error('err creating new session: ', e),
                              n(new m({ code: 4001, message: 'User rejected the request.' }));
                          });
                        });
                      if ('eth_selectAccounts' === e)
                        throw new m({
                          code: w.UNSUPPORTED_METHOD,
                          message: `The Provider does not support the requested method: ${e}`,
                        });
                      if ('wallet_switchEthereumChain' == e) {
                        if (!n)
                          throw new m({
                            code: w.INVALID_PARAMS,
                            message:
                              'The Provider requires a chainId to be passed in as an argument',
                          });
                        let e = n[0];
                        if (!e.hasOwnProperty('chainId') || void 0 === e.chainId)
                          throw new m({
                            code: w.INVALID_PARAMS,
                            message:
                              'The Provider requires a chainId to be passed in as an argument',
                          });
                        return this.connector.request({
                          method: 'wallet_switchEthereumChain',
                          params: [{ chainId: e.chainId }],
                        });
                      }
                      return this.connector.request({ method: e, params: n });
                    });
                }
              }
              return { provider: new x({ chains: f, connector: A }), instance: t };
            },
          });
        },
        s = (e) => !!('string' == typeof e && e.match(/^0x[0-9A-Fa-f]*$/)),
        d = function (e) {
          if (!e)
            throw Error(
              'WalletConnect requires an initialization object to be passed - see the official docs for an example: https://onboard.blocknative.com/docs/wallets/walletconnect'
            );
          if (e) {
            let t = o(e);
            if (t) throw t;
          }
          return c(e);
        };
    },
    75312: (e, t, n) => {
      'use strict';
      n.d(t, { Ay: () => eA });
      var a,
        r,
        i,
        o,
        l = n(83688);
      !(function (e) {
        (e.AlphaWallet = 'isAlphaWallet'),
          (e.ApexWallet = 'isApexWallet'),
          (e.AToken = 'isAToken'),
          (e.BifrostWallet = 'isBifrost'),
          (e.Binance = 'bbcSignTx'),
          (e.Bitpie = 'isBitpie'),
          (e.BlockWallet = 'isBlockWallet'),
          (e.Coinbase = 'isToshi'),
          (e.CoinbaseExtension = 'isCoinbaseWallet'),
          (e.Detected = 'request'),
          (e.Dcent = 'isDcentWallet'),
          (e.Exodus = 'isExodus'),
          (e.Frontier = 'isFrontier'),
          (e.Frame = 'isFrame'),
          (e.HuobiWallet = 'isHbWallet'),
          (e.HyperPay = 'isHyperPay'),
          (e.ImToken = 'isImToken'),
          (e.InfinityWallet = 'isInfinityWallet'),
          (e.Liquality = 'isLiquality'),
          (e.MeetOne = 'wallet'),
          (e.MetaMask = 'isMetaMask'),
          (e.MyKey = 'isMYKEY'),
          (e.OwnBit = 'isOwnbit'),
          (e.Status = 'isStatus'),
          (e.Trust = 'isTrust'),
          (e.TokenPocket = 'isTokenPocket'),
          (e.TP = 'isTp'),
          (e.WalletIo = 'isWalletIO'),
          (e.XDEFI = 'isXDEFI'),
          (e.OneInch = 'isOneInchIOSWallet'),
          (e.Tokenary = 'isTokenary'),
          (e.Tally = 'isTally'),
          (e.BraveWallet = 'isBraveWallet'),
          (e.Rabby = 'isRabby'),
          (e.MathWallet = 'isMathWallet'),
          (e.Bitget = 'isBitKeep'),
          (e.Sequence = 'isSequence'),
          (e.Core = 'isAvalanche'),
          (e.Opera = 'isOpera'),
          (e.Bitski = 'isBitski'),
          (e.Enkrypt = 'isEnkrypt'),
          (e.Phantom = 'isPhantom'),
          (e.OKXWallet = 'isOkxWallet'),
          (e.Zeal = 'isZeal'),
          (e.Zerion = 'isZerion'),
          (e.Rainbow = 'isRainbow'),
          (e.SafePal = 'isSafePal'),
          (e.DeFiWallet = 'isDeficonnectProvider'),
          (e.Safeheron = 'isSafeheron'),
          (e.Talisman = 'isTalisman'),
          (e.OneKey = 'isOneKey'),
          (e.Fordefi = 'isFordefi'),
          (e.Coin98Wallet = 'isCoin98'),
          (e.SubWallet = 'isSubWallet'),
          (e.Kayros = 'isKayros'),
          (e.FoxWallet = 'isFoxWallet'),
          (e.Lif3Wallet = 'isLif3Wallet'),
          (e.ZodiacPilot = 'isZodiacPilot'),
          (e.StableWallet = 'isStableWallet'),
          (e.Echooo = 'isEchooo'),
          (e.Keplr = 'keplr');
      })(a || (a = {})),
        (function (e) {
          (e.Binance = 'https://www.bnbchain.org/ru/blog/binance-extension-wallet/'),
            (e.Bitget = 'https://web3.bitget.com/en/wallet-download'),
            (e.Coinbase = 'https://www.coinbase.com/wallet/downloads'),
            (e.MetaMask = 'https://metamask.io/download/'),
            (e.OKXWallet = 'https://okx.com/download'),
            (e.Phantom = 'https://phantom.app/ul/v1/connect'),
            (e.Talisman = 'https://www.talisman.xyz/'),
            (e.Trust = 'https://link.trustwallet.com'),
            (e.OneKey = 'https://onekey.so/download/'),
            (e.RoninWallet = 'https://wallet.skymavis.com/'),
            (e.Coin98Wallet = 'https://coin98.com/wallet/'),
            (e.SubWallet = 'https://www.subwallet.app/'),
            (e.Kayros = 'https://www.kayros.games/wallet/'),
            (e.XDEFI = 'https://xdefi.io/'),
            (e.FoxWallet = 'https://foxwallet.com/download'),
            (e.Lif3Wallet = 'https://lif3.com'),
            (e.Rabby = 'https://rabby.io'),
            (e.ZodiacPilot = 'https://pilot.gnosisguild.org/'),
            (e.Echooo = 'https://www.echooo.xyz'),
            (e.Keplr = 'https://www.keplr.app/download');
        })(r || (r = {})),
        (function (e) {
          (e.AlphaWallet = 'AlphaWallet'),
            (e.ApexWallet = 'Apex Wallet'),
            (e.AToken = 'AToken'),
            (e.BifrostWallet = 'Bifrost Wallet'),
            (e.Binance = 'Binance Smart Wallet'),
            (e.Bitpie = 'Bitpie'),
            (e.Bitski = 'Bitski'),
            (e.BlockWallet = 'BlockWallet'),
            (e.Brave = 'Brave Wallet'),
            (e.Coinbase = 'Coinbase Wallet'),
            (e.Dcent = "D'CENT"),
            (e.Detected = 'Detected Wallet'),
            (e.Exodus = 'Exodus'),
            (e.Frame = 'Frame'),
            (e.Frontier = 'Frontier'),
            (e.HuobiWallet = 'Huobi Wallet'),
            (e.HyperPay = 'HyperPay'),
            (e.ImToken = 'imToken'),
            (e.InfinityWallet = 'Infinity Wallet'),
            (e.Liquality = 'Liquality'),
            (e.MeetOne = 'MeetOne'),
            (e.MetaMask = 'MetaMask'),
            (e.MyKey = 'MyKey'),
            (e.Opera = 'Opera Wallet'),
            (e.OwnBit = 'OwnBit'),
            (e.Status = 'Status Wallet'),
            (e.Trust = 'Trust Wallet'),
            (e.TokenPocket = 'TokenPocket'),
            (e.TP = 'TP Wallet'),
            (e.WalletIo = 'Wallet.io'),
            (e.XDEFI = 'XDEFI Wallet'),
            (e.OneInch = '1inch Wallet'),
            (e.Tokenary = 'Tokenary Wallet'),
            (e.Tally = 'Taho'),
            (e.Rabby = 'Rabby Wallet'),
            (e.MathWallet = 'MathWallet'),
            (e.Bitget = 'Bitget Wallet'),
            (e.Sequence = 'Sequence'),
            (e.Core = 'Core'),
            (e.Enkrypt = 'Enkrypt'),
            (e.Zeal = 'Zeal'),
            (e.Phantom = 'Phantom'),
            (e.OKXWallet = 'OKX Wallet'),
            (e.Zerion = 'Zerion'),
            (e.Rainbow = 'Rainbow'),
            (e.SafePal = 'SafePal'),
            (e.DeFiWallet = 'DeFi Wallet'),
            (e.Safeheron = 'Safeheron'),
            (e.Talisman = 'Talisman'),
            (e.OneKey = 'OneKey'),
            (e.Fordefi = 'Fordefi'),
            (e.RoninWallet = 'Ronin Wallet'),
            (e.Coin98Wallet = 'Coin98 Wallet'),
            (e.SubWallet = 'SubWallet'),
            (e.Kayros = 'Kayros'),
            (e.FoxWallet = 'FoxWallet'),
            (e.Lif3Wallet = 'Lif3 Wallet'),
            (e.ZodiacPilot = 'Zodiac Pilot'),
            (e.StableWallet = 'StableWallet'),
            (e.Echooo = 'Echooo'),
            (e.Keplr = 'Keplr');
        })(i || (i = {})),
        (function (e) {
          (e.Ethereum = 'ethereum'),
            (e.Binance = 'BinanceChain'),
            (e.Tally = 'tally'),
            (e.Web3 = 'web3'),
            (e.Arbitrum = 'arbitrum'),
            (e.XFI = 'xfi'),
            (e.Bitget = 'bitkeep'),
            (e.Avalanche = 'avalanche'),
            (e.Bitski = 'Bitski'),
            (e.Enkrypt = 'enkrypt'),
            (e.Zeal = 'zeal'),
            (e.Phantom = 'phantom'),
            (e.OKXWallet = 'okxwallet'),
            (e.Trust = 'trustwallet'),
            (e.Frontier = 'frontier'),
            (e.DeFiConnectProvider = 'deficonnectProvider'),
            (e.Safeheron = 'safeheron'),
            (e.Talisman = 'talismanEth'),
            (e.OneKey = '$onekey'),
            (e.RoninWallet = 'ronin'),
            (e.Coin98Wallet = 'coin98'),
            (e.SubWallet = 'SubWallet'),
            (e.Kayros = 'kayros'),
            (e.FoxWallet = 'foxwallet'),
            (e.Echooo = 'echooo');
        })(o || (o = {})),
        Event;
      var c = n(64838);
      function s(e, t) {
        return async () => {
          var n, a;
          return {
            provider:
              window.ethereum.providers && Array.isArray(window.ethereum.providers)
                ? ((n = e),
                  (a = t),
                  window.ethereum.providers.find((e) => (a ? !!e[n] && !d(n, e) : !!e[n])))
                : window.ethereum,
          };
        };
      }
      function d(e, t) {
        return Object.values(a)
          .filter((t) => t !== e && t !== a.Detected)
          .some((e) => !!t[e]);
      }
      let u = {
          label: i.MetaMask,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.MetaMask] && !d(a.MetaMask, e),
          getIcon: async () => (await n.e(6428).then(n.bind(n, 86428))).default,
          getInterface: s(a.MetaMask, !0),
          platforms: ['all'],
          externalUrl: r.MetaMask,
        },
        h = {
          label: i.InfinityWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.InfinityWallet],
          getIcon: async () => (await n.e(7796).then(n.bind(n, 77796))).default,
          getInterface: s(a.InfinityWallet),
          platforms: ['desktop'],
        },
        f = {
          label: i.Exodus,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Exodus],
          getIcon: async () => (await n.e(2311).then(n.bind(n, 32311))).default,
          getInterface: s(a.Exodus),
          platforms: ['all'],
        },
        p = {
          label: i.Frontier,
          injectedNamespace: o.Frontier,
          checkProviderIdentity: ({ provider: e }) =>
            !!e && !!e.ethereum && !!e.ethereum[a.Frontier],
          getIcon: async () => (await n.e(520).then(n.bind(n, 50520))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.frontier.ethereum),
          }),
          platforms: ['all'],
        },
        y = {
          label: i.Brave,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.BraveWallet],
          getIcon: async () => (await n.e(5917).then(n.bind(n, 15917))).default,
          getInterface: s(a.BraveWallet),
          platforms: ['all'],
        },
        m = {
          label: i.Binance,
          injectedNamespace: o.Binance,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Binance],
          getIcon: async () => (await n.e(2681).then(n.bind(n, 82681))).default,
          getInterface: async () => {
            let e = { ...window.BinanceChain };
            window.BinanceChain = e;
            let t = window.BinanceChain.on.bind(window.BinanceChain);
            window.BinanceChain.on = (e, n) => {
              'chainChanged' === e
                ? t(e, (e) => {
                    n(`0x${parseInt(e).toString(16)}`);
                  })
                : t(e, n);
            };
            let n = (0, c.createEIP1193Provider)(window.BinanceChain, {
              eth_chainId: ({ baseRequest: e }) =>
                e({ method: 'eth_chainId' }).then((e) => `0x${parseInt(e).toString(16)}`),
              eth_selectAccounts: null,
              wallet_switchEthereumChain: null,
            });
            return (n.removeListener = (e, t) => {}), { provider: n };
          },
          platforms: ['desktop'],
          externalUrl: r.Binance,
        },
        w = {
          label: i.Coinbase,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) =>
            (!!e && !!e[a.Coinbase]) || (!!e && !!e[a.CoinbaseExtension]),
          getIcon: async () => (await n.e(5385).then(n.bind(n, 55385))).default,
          getInterface: async () => {
            let { provider: e } = await s(a.CoinbaseExtension)(),
              t = e.on.bind(e);
            return (
              (e.on = (e, n) => {
                'chainChanged' === e
                  ? t(e, (e) => {
                      n(`0x${parseInt(e).toString(16)}`);
                    })
                  : t(e, n);
              }),
              { provider: e }
            );
          },
          platforms: ['all'],
          externalUrl: r.Coinbase,
        },
        b = {
          label: i.Detected,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Detected],
          getIcon: async () => (await n.e(3491).then(n.bind(n, 23491))).default,
          getInterface: async () => ({ provider: window.ethereum }),
          platforms: ['all'],
        },
        v = {
          label: i.Trust,
          injectedNamespace: o.Trust,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Trust],
          getIcon: async () => (await n.e(4133).then(n.bind(n, 96514))).default,
          getInterface: async () => {
            let e;
            return {
              provider:
                window.hasOwnProperty(o.Ethereum) && window[o.Ethereum].isTrust
                  ? window[o.Ethereum]
                  : window[o.Trust],
            };
          },
          platforms: ['all'],
          externalUrl: r.Trust,
        },
        g = {
          label: i.Opera,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Opera],
          getIcon: async () => (await n.e(6268).then(n.bind(n, 66268))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, {
              eth_requestAccounts: async ({ baseRequest: e }) => e({ method: 'eth_accounts' }),
              eth_selectAccounts: null,
            }),
          }),
          platforms: ['all'],
        },
        I = {
          label: i.Status,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Status],
          getIcon: async () => (await n.e(371).then(n.bind(n, 60371))).default,
          getInterface: async () => ({ provider: window.ethereum }),
          platforms: ['mobile'],
        },
        P = {
          label: i.AlphaWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.AlphaWallet],
          getIcon: async () => (await n.e(8610).then(n.bind(n, 68610))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, {
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            }),
          }),
          platforms: ['mobile'],
        },
        k = {
          label: i.ApexWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.ApexWallet],
          getIcon: async () => (await n.e(6896).then(n.bind(n, 96896))).default,
          getInterface: async () => ({ provider: window.ethereum }),
          platforms: ['desktop', 'Chrome', 'Chromium', 'Microsoft Edge'],
        },
        _ = {
          label: i.AToken,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.AToken],
          getIcon: async () => (await n.e(4065).then(n.bind(n, 24065))).default,
          getInterface: async () => ({ provider: window.ethereum }),
          platforms: ['mobile'],
        },
        E = {
          label: i.BifrostWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.BifrostWallet],
          getIcon: async () => (await n.e(5783).then(n.bind(n, 25783))).default,
          getInterface: s(a.BifrostWallet),
          platforms: ['all'],
        },
        W = {
          label: i.Bitpie,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: () => !!window.Bitpie,
          getIcon: async () => (await n.e(3258).then(n.bind(n, 43258))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, {
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            }),
          }),
          platforms: ['mobile'],
        },
        j = {
          label: i.BlockWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.BlockWallet],
          getIcon: async () => (await n.e(2471).then(n.bind(n, 52471))).default,
          getInterface: s(a.BlockWallet),
          platforms: ['desktop'],
        },
        A = {
          label: i.Frame,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Frame],
          getIcon: async () => (await n.e(4046).then(n.bind(n, 44046))).default,
          getInterface: async () => {
            let e = window.ethereum;
            if (!e || !e.connected)
              throw Error(
                'Frame App must be open with a hot wallet connected. If not installed first download the Frame App.'
              );
            return { provider: e };
          },
          platforms: ['desktop'],
        },
        C = {
          label: i.HuobiWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.HuobiWallet],
          getIcon: async () => (await n.e(4283).then(n.bind(n, 24283))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, {
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            }),
          }),
          platforms: ['mobile'],
        },
        x = {
          label: i.HyperPay,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: () => !!window.hiWallet,
          getIcon: async () => (await n.e(2101).then(n.bind(n, 12101))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, {
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            }),
          }),
          platforms: ['mobile'],
        },
        T = {
          label: i.ImToken,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.ImToken],
          getIcon: async () => (await n.e(9116).then(n.bind(n, 9116))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, { eth_selectAccounts: null }),
          }),
          platforms: ['mobile'],
        },
        S = {
          label: i.Liquality,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Liquality],
          getIcon: async () => (await n.e(2155).then(n.bind(n, 84536))).default,
          getInterface: async () => {
            let e = (0, c.createEIP1193Provider)(window.ethereum, {
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            });
            return (e.removeListener = (e, t) => {}), { provider: e };
          },
          platforms: ['desktop'],
        },
        O = {
          label: i.MeetOne,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && 'MEETONE' === e[a.MeetOne],
          getIcon: async () => (await n.e(286).then(n.bind(n, 70286))).default,
          getInterface: async () => ({ provider: window.ethereum }),
          platforms: ['mobile'],
        },
        B = {
          label: i.MyKey,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.MyKey],
          getIcon: async () => (await n.e(9622).then(n.bind(n, 59622))).default,
          getInterface: async () => ({ provider: window.ethereum }),
          platforms: ['mobile'],
        },
        N = {
          label: i.OwnBit,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.OwnBit],
          getIcon: async () => (await n.e(7398).then(n.bind(n, 77398))).default,
          getInterface: async () => {
            let e = (0, c.createEIP1193Provider)(window.ethereum, {
              eth_chainId: ({ baseRequest: e }) =>
                e({ method: 'eth_chainId' }).then((e) => `0x${parseInt(e).toString(16)}`),
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            });
            return (e.removeListener = (e, t) => {}), (e.on = (e, t) => {}), { provider: e };
          },
          platforms: ['mobile'],
        },
        M = {
          label: i.TokenPocket,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.TokenPocket] && !e[a.TP],
          getIcon: async () => (await n.e(9728).then(n.bind(n, 89728))).default,
          getInterface: s(a.TokenPocket),
          platforms: ['all'],
        },
        F = {
          label: i.TP,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.TP],
          getIcon: async () => (await n.e(2173).then(n.bind(n, 82173))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, {
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            }),
          }),
          platforms: ['mobile'],
        },
        q = {
          label: i.XDEFI,
          injectedNamespace: o.XFI,
          checkProviderIdentity: ({ provider: e }) => e && e.ethereum && e.ethereum[a.XDEFI],
          getIcon: async () => (await n.e(9281).then(n.bind(n, 19281))).default,
          getInterface: async () => ({ provider: window.xfi && window.xfi.ethereum }),
          platforms: ['all'],
          externalUrl: r.XDEFI,
        },
        K = {
          label: i.OneInch,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.OneInch],
          getIcon: async () => (await n.e(8591).then(n.bind(n, 8591))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.ethereum) }),
          platforms: ['mobile'],
        },
        D = {
          label: i.Tokenary,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Tokenary],
          getIcon: async () => (await n.e(5548).then(n.bind(n, 35548))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.ethereum) }),
          platforms: ['all'],
        },
        U = {
          label: i.Tally,
          injectedNamespace: o.Tally,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Tally],
          getIcon: async () => (await n.e(3200).then(n.bind(n, 83200))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.tally) }),
          platforms: ['desktop'],
        },
        $ = {
          label: i.Zeal,
          injectedNamespace: o.Zeal,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Zeal],
          getIcon: async () => (await n.e(6197).then(n.bind(n, 16197))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.zeal) }),
          platforms: ['desktop'],
        },
        L = {
          label: i.Rabby,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Rabby],
          getIcon: async () => (await n.e(5767).then(n.bind(n, 25767))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.ethereum) }),
          platforms: ['desktop', 'mobile'],
        },
        R = {
          label: i.MathWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.MathWallet],
          getIcon: async () => (await n.e(3298).then(n.bind(n, 43298))).default,
          getInterface: s(a.MathWallet),
          platforms: ['all'],
        },
        Z = {
          label: i.Bitget,
          injectedNamespace: o.Bitget,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e.ethereum && !!e.ethereum[a.Bitget],
          getIcon: async () => (await n.e(8392).then(n.bind(n, 38392))).default,
          getInterface: async () => ({ provider: window.bitkeep && window.bitkeep.ethereum }),
          platforms: ['all'],
          externalUrl: r.Bitget,
        },
        X = {
          label: i.Sequence,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Sequence],
          getIcon: async () => (await n.e(2016).then(n.bind(n, 42016))).default,
          getInterface: async () => ({ provider: window.ethereum }),
          platforms: ['all'],
        },
        H = {
          label: i.Core,
          injectedNamespace: o.Avalanche,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Core],
          getIcon: async () => (await n.e(6030).then(n.bind(n, 76030))).default,
          getInterface: s(a.Core),
          platforms: ['desktop', 'Chrome', 'Chromium', 'Microsoft Edge'],
        },
        z = {
          label: i.Bitski,
          injectedNamespace: o.Bitski,
          checkProviderIdentity: ({ provider: e }) =>
            !!e && !!e.getProvider && !!e.getProvider().isBitski,
          getIcon: async () => (await n.e(7957).then(n.bind(n, 87957))).default,
          getInterface: async () => ({
            provider: window.Bitski && window.Bitski.getProvider && window.Bitski.getProvider(),
          }),
          platforms: ['all'],
        },
        V = {
          label: i.Zerion,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Zerion],
          getIcon: async () => (await n.e(4668).then(n.bind(n, 4668))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.ethereum) }),
          platforms: ['all'],
        },
        Y = {
          label: i.Enkrypt,
          injectedNamespace: o.Enkrypt,
          checkProviderIdentity: ({ provider: e }) =>
            !!e && !!e.providers && !!e.providers.ethereum,
          getIcon: async () => (await n.e(1878).then(n.bind(n, 71878))).default,
          getInterface: async () => {
            let e = window.enkrypt.providers.ethereum.on.bind(window.enkrypt.providers.ethereum);
            window.enkrypt.providers.ethereum.on = (t, n) => {
              'chainChanged' === t
                ? e(t, (e) => {
                    n(`0x${parseInt(e).toString(16)}`);
                  })
                : e(t, n);
            };
            let t = (0, c.createEIP1193Provider)(window.enkrypt.providers.ethereum, {
              eth_chainId: ({ baseRequest: e }) =>
                e({ method: 'eth_chainId' }).then((e) => `0x${parseInt(e).toString(16)}`),
            });
            return (t.removeListener = (e, t) => {}), { provider: t };
          },
          platforms: ['all'],
        },
        G = {
          label: i.Phantom,
          injectedNamespace: o.Phantom,
          checkProviderIdentity: ({ provider: e }) =>
            !!e && !!e.ethereum && !!e.ethereum[a.Phantom],
          getIcon: async () => (await n.e(1786).then(n.bind(n, 51786))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.phantom.ethereum),
          }),
          platforms: ['all'],
          externalUrl: r.Phantom,
        },
        J = {
          label: i.SafePal,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.SafePal],
          getIcon: async () => (await n.e(7333).then(n.bind(n, 67333))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.ethereum) }),
          platforms: ['all'],
        },
        Q = {
          label: i.Rainbow,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Rainbow],
          getIcon: async () => (await n.e(8597).then(n.bind(n, 78597))).default,
          getInterface: s(a.Rainbow),
          platforms: ['all'],
        },
        ee = {
          label: i.OKXWallet,
          injectedNamespace: o.OKXWallet,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.OKXWallet],
          getIcon: async () => (await n.e(1320).then(n.bind(n, 31320))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.okxwallet) }),
          platforms: ['all'],
          externalUrl: r.OKXWallet,
        },
        et = {
          label: i.DeFiWallet,
          injectedNamespace: o.DeFiConnectProvider,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.DeFiWallet],
          getIcon: async () => (await n.e(694).then(n.bind(n, 30694))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.deficonnectProvider),
          }),
          platforms: ['all'],
        },
        en = {
          label: i.Safeheron,
          injectedNamespace: o.Safeheron,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Safeheron],
          getIcon: async () => (await n.e(7446).then(n.bind(n, 37446))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.safeheron) }),
          platforms: ['desktop', 'Chrome', 'Chromium', 'Microsoft Edge'],
        },
        ea = {
          label: i.Talisman,
          injectedNamespace: o.Talisman,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Talisman],
          getIcon: async () => (await n.e(4450).then(n.bind(n, 72069))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.talismanEth),
          }),
          platforms: ['desktop'],
          externalUrl: r.Talisman,
        },
        er = {
          label: i.RoninWallet,
          injectedNamespace: o.RoninWallet,
          checkProviderIdentity: ({ provider: e }) => !!e,
          getIcon: async () => (await n.e(8790).then(n.bind(n, 78790))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ronin.provider),
          }),
          platforms: ['all'],
          externalUrl: r.RoninWallet,
        },
        ei = {
          label: i.OneKey,
          injectedNamespace: o.OneKey,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e.ethereum && !!e.ethereum[a.OneKey],
          getIcon: async () => (await n.e(5294).then(n.bind(n, 5294))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.$onekey.ethereum),
          }),
          platforms: ['all'],
          externalUrl: r.OneKey,
        },
        eo = {
          label: i.Fordefi,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Fordefi],
          getIcon: async () => (await n.e(2434).then(n.bind(n, 2434))).default,
          getInterface: s(a.Fordefi, !0),
          platforms: ['desktop'],
        },
        el = {
          label: i.Coin98Wallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Coin98Wallet],
          getIcon: async () => (await n.e(8568).then(n.bind(n, 18568))).default,
          getInterface: async () => {
            let e;
            return {
              provider:
                window.hasOwnProperty(o.Ethereum) && window[o.Ethereum].isCoin98
                  ? window[o.Ethereum]
                  : window[o.Coin98Wallet].provider,
            };
          },
          platforms: ['all'],
          externalUrl: r.Coin98Wallet,
        },
        ec = {
          label: i.SubWallet,
          injectedNamespace: o.SubWallet,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.SubWallet],
          getIcon: async () => (await n.e(6064).then(n.bind(n, 16064))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.SubWallet) }),
          platforms: ['all'],
          externalUrl: r.SubWallet,
        },
        es = {
          label: i.Kayros,
          injectedNamespace: o.Kayros,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Kayros],
          getIcon: async () => (await n.e(2076).then(n.bind(n, 42076))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.kayros) }),
          platforms: ['desktop'],
        },
        ed = {
          label: i.FoxWallet,
          injectedNamespace: o.FoxWallet,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.FoxWallet],
          getIcon: async () => (await n.e(9771).then(n.bind(n, 69771))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.foxwallet) }),
          platforms: ['mobile'],
        },
        eu = {
          label: i.Lif3Wallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Lif3Wallet],
          getIcon: async () => (await n.e(3808).then(n.bind(n, 53808))).default,
          getInterface: async () => ({
            provider: (0, c.createEIP1193Provider)(window.ethereum, {
              wallet_switchEthereumChain: null,
              eth_selectAccounts: null,
            }),
          }),
          platforms: ['mobile'],
        },
        eh = {
          label: i.ZodiacPilot,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.ZodiacPilot],
          getIcon: async () => (await n.e(1321).then(n.bind(n, 21321))).default,
          getInterface: async () => ({ provider: (0, c.createEIP1193Provider)(window.ethereum) }),
          platforms: ['desktop'],
          externalUrl: r.ZodiacPilot,
        },
        ef = {
          label: i.StableWallet,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.StableWallet],
          getIcon: async () => (await n.e(4895).then(n.bind(n, 54895))).default,
          getInterface: s(a.StableWallet),
          platforms: ['mobile'],
        },
        ep = {
          label: i.Echooo,
          injectedNamespace: o.Ethereum,
          checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Echooo],
          getIcon: async () => (await n.e(4742).then(n.bind(n, 14742))).default,
          getInterface: s(a.Echooo),
          platforms: ['all'],
          externalUrl: r.Echooo,
        },
        ey = [
          $,
          f,
          p,
          u,
          E,
          m,
          w,
          b,
          v,
          g,
          I,
          P,
          k,
          _,
          Z,
          W,
          j,
          y,
          A,
          C,
          x,
          T,
          S,
          O,
          B,
          N,
          M,
          F,
          q,
          K,
          D,
          U,
          L,
          R,
          X,
          H,
          z,
          Y,
          G,
          ee,
          V,
          Q,
          J,
          et,
          h,
          en,
          ea,
          ei,
          eo,
          er,
          el,
          ec,
          es,
          ed,
          eu,
          eh,
          ef,
          ep,
          {
            label: i.Keplr,
            injectedNamespace: o.Ethereum,
            checkProviderIdentity: ({ provider: e }) => !!e && !!e[a.Keplr],
            getIcon: async () => (await n.e(5209).then(n.bind(n, 35209))).default,
            getInterface: s(a.Keplr),
            platforms: ['all'],
            externalUrl: r.Keplr,
          },
        ];
      var em = n(22318);
      let ew = em.object({
          label: em.string().required(),
          getIcon: em.function().arity(0).required(),
          getInterface: em.function().maxArity(1).required(),
          injectedNamespace: em.string().required(),
          checkProviderIdentity: em.function().arity(1).required(),
          platforms: em.array().items(em.string()),
          externalUrl: em.string(),
        }),
        eb = em.array().items(ew),
        ev = em
          .object()
          .pattern(/\w+/, em.any().allow(em.boolean(), em.array().items(em.string()))),
        eg = em.object({
          custom: eb,
          filter: ev,
          displayUnavailable: [em.boolean(), em.array().items(em.string())],
          walletUnavailableMessage: em.function(),
          sort: em.function(),
          externalUrl: em.string(),
          disable6963Support: em.boolean(),
        }),
        eI = (e) => (0, c.tf)(eg, e),
        eP = em.object({
          uuid: em.string().required(),
          name: em.string().required(),
          icon: em.string().required(),
          rdns: em.string().required(),
        }),
        ek = em.object({ info: eP.required(), provider: em.object().required() }),
        e_ = (e) => (0, c.tf)(ek, e),
        eE = ({ label: e, externalUrl: t }) =>
          t
            ? `Please <a href="${t}" target="_blank">install or switch to</a> ${e} to continue`
            : `Please install or enable ${e} to continue`,
        eW = (e, t, n) =>
          !!e &&
          (!!t({ provider: e, device: n }) ||
            (Array.isArray(e.providers) &&
              !!e.providers?.some((e) => t({ provider: e, device: n })))),
        ej = [],
        eA = function (e) {
          if ('undefined' == typeof window) return () => null;
          if (e) {
            let t = eI(e);
            if (t && t.error) throw t.error;
          }
          return (
            e?.disable6963Support ||
              (window.addEventListener('eip6963:announceProvider', (e) => {
                let { detail: t } = e;
                if (!t) return;
                if (e) {
                  let e = e_(t);
                  if (e && e.error) throw e.error;
                }
                let { info: n, provider: a } = t,
                  { name: r, icon: i } = n;
                if (
                  i &&
                  (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(i) ||
                    /\bon[a-z]+\s*=\s*["']?(?:javascript:)?/gi.test(i) ||
                    /\b(href|xlink:href)\s*=\s*["']?javascript:/gi.test(i))
                ) {
                  console.error(
                    `The icon for injected wallet: ${r} contains executable JavaScript and has been blocked.`
                  );
                  return;
                }
                ej.push({
                  label: r,
                  getIcon: async () => i,
                  getInterface: async () => ({ provider: a }),
                  platforms: ['all'],
                  eip6963Provider: a,
                  checkProviderIdentity: ({ provider: e }) => !!e,
                });
              }),
              window.dispatchEvent(new CustomEvent('eip6963:requestProvider'))),
            (t) => {
              let { device: n } = t,
                {
                  custom: a = [],
                  filter: r = {},
                  displayUnavailable: o,
                  sort: c,
                  walletUnavailableMessage: s,
                } = e || {},
                d = l([...a, ...ej, ...ey], ({ label: e }) => e).reduce((e, t) => {
                  let {
                      label: a,
                      platforms: i,
                      injectedNamespace: l,
                      checkProviderIdentity: c,
                      eip6963Provider: d,
                    } = t,
                    u = r[a],
                    h = !1 === u,
                    f = eW(d || window[l], c, n),
                    p = !1;
                  Array.isArray(u) &&
                    (u.includes(n.type) || (n.os && u.includes(n.os.name))) &&
                    (p = !0),
                    'unavailable' !== u || f || (p = !0);
                  let y =
                    !i.includes('all') &&
                    null !== n.type &&
                    !i.includes(n.type) &&
                    !i.includes(n.os.name);
                  return (
                    !h &&
                      !p &&
                      !y &&
                      (f || !0 === o || (Array.isArray(o) && o.length && o.includes(t.label))) &&
                      e.push(
                        (!0 === o || (Array.isArray(o) && o.length && o.includes(t.label))) && !f
                          ? {
                              ...t,
                              getInterface: async () => {
                                throw Error(s ? s(t) : eE(t));
                              },
                            }
                          : t
                      ),
                    e
                  );
                }, []);
              if (d.length) {
                let e = d.length > 1,
                  t = d
                    .filter((t) => {
                      let { label: n } = t;
                      return !(n === i.Detected && e);
                    })
                    .map(({ label: e, getIcon: t, getInterface: n }) => ({
                      label: e,
                      getIcon: t,
                      getInterface: n,
                    }))
                    .sort((e, t) => (e.label < t.label ? -1 : +(e.label > t.label)));
                return c ? c(t) : t;
              }
              return [];
            }
          );
        };
    },
    83688: (e, t, n) => {
      e = n.nmd(e);
      var a,
        r,
        i = '__lodash_hash_undefined__',
        o = 1 / 0,
        l = '[object Arguments]',
        c = '[object Array]',
        s = '[object Boolean]',
        d = '[object Date]',
        u = '[object Error]',
        h = '[object Function]',
        f = '[object Map]',
        p = '[object Number]',
        y = '[object Object]',
        m = '[object Promise]',
        w = '[object RegExp]',
        b = '[object Set]',
        v = '[object String]',
        g = '[object Symbol]',
        I = '[object WeakMap]',
        P = '[object ArrayBuffer]',
        k = '[object DataView]',
        _ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        E = /^\w*$/,
        W = /^\./,
        j =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        A = /\\(\\)?/g,
        C = /^\[object .+?Constructor\]$/,
        x = /^(?:0|[1-9]\d*)$/,
        T = {};
      (T['[object Float32Array]'] =
        T['[object Float64Array]'] =
        T['[object Int8Array]'] =
        T['[object Int16Array]'] =
        T['[object Int32Array]'] =
        T['[object Uint8Array]'] =
        T['[object Uint8ClampedArray]'] =
        T['[object Uint16Array]'] =
        T['[object Uint32Array]'] =
          !0),
        (T[l] =
          T[c] =
          T[P] =
          T[s] =
          T[k] =
          T[d] =
          T[u] =
          T[h] =
          T[f] =
          T[p] =
          T[y] =
          T[w] =
          T[b] =
          T[v] =
          T[I] =
            !1);
      var S = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
        O = 'object' == typeof self && self && self.Object === Object && self,
        B = S || O || Function('return this')(),
        N = t && !t.nodeType && t,
        M = N && e && !e.nodeType && e,
        F = M && M.exports === N && S.process,
        q = (function () {
          try {
            return F && F.binding('util');
          } catch (e) {}
        })(),
        K = q && q.isTypedArray;
      function D(e, t) {
        return (
          !!(e ? e.length : 0) &&
          (function (e, t, n) {
            if (t != t)
              return (function (e, t, n, a) {
                for (var r = e.length, i = n + -1; ++i < r; ) if (t(e[i], i, e)) return i;
                return -1;
              })(e, U, 0);
            for (var a = n - 1, r = e.length; ++a < r; ) if (e[a] === t) return a;
            return -1;
          })(e, t, 0) > -1
        );
      }
      function U(e) {
        return e != e;
      }
      function $(e, t) {
        return e.has(t);
      }
      function L(e) {
        var t = !1;
        if (null != e && 'function' != typeof e.toString)
          try {
            t = !!(e + '');
          } catch (e) {}
        return t;
      }
      function R(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, a) {
            n[++t] = [a, e];
          }),
          n
        );
      }
      function Z(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      }
      var X = Array.prototype,
        H = Function.prototype,
        z = Object.prototype,
        V = B['__core-js_shared__'],
        Y = (function () {
          var e = /[^.]+$/.exec((V && V.keys && V.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })(),
        G = H.toString,
        J = z.hasOwnProperty,
        Q = z.toString,
        ee = RegExp(
          '^' +
            G.call(J)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
        ),
        et = B.Symbol,
        en = B.Uint8Array,
        ea = z.propertyIsEnumerable,
        er = X.splice,
        ei =
          ((a = Object.keys),
          (r = Object),
          function (e) {
            return a(r(e));
          }),
        eo = eS(B, 'DataView'),
        el = eS(B, 'Map'),
        ec = eS(B, 'Promise'),
        es = eS(B, 'Set'),
        ed = eS(B, 'WeakMap'),
        eu = eS(Object, 'create'),
        eh = eK(eo),
        ef = eK(el),
        ep = eK(ec),
        ey = eK(es),
        em = eK(ed),
        ew = et ? et.prototype : void 0,
        eb = ew ? ew.valueOf : void 0,
        ev = ew ? ew.toString : void 0;
      function eg(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function eI(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function eP(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function ek(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.__data__ = new eP(); ++t < n; ) this.add(e[t]);
      }
      function e_(e) {
        this.__data__ = new eI(e);
      }
      function eE(e, t) {
        for (var n = e.length; n--; ) if (eU(e[n][0], t)) return n;
        return -1;
      }
      function eW(e, t) {
        var n;
        t = eN(t, e) ? [t] : eL((n = t)) ? n : eF(n);
        for (var a = 0, r = t.length; null != e && a < r; ) e = e[eq(t[a++])];
        return a && a == r ? e : void 0;
      }
      function ej(e, t) {
        return null != e && t in Object(e);
      }
      function eA(e, t, n, a, r) {
        return (
          e === t ||
          (null != e && null != t && (eH(e) || ez(t))
            ? (function (e, t, n, a, r, i) {
                var o = eL(e),
                  h = eL(t),
                  m = c,
                  I = c;
                o || (m = (m = eO(e)) == l ? y : m), h || (I = (I = eO(t)) == l ? y : I);
                var _ = m == y && !L(e),
                  E = I == y && !L(t),
                  W = m == I;
                if (W && !_)
                  return (
                    i || (i = new e_()),
                    o || eY(e)
                      ? ex(e, t, n, a, r, i)
                      : (function (e, t, n, a, r, i, o) {
                          switch (n) {
                            case k:
                              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                break;
                              (e = e.buffer), (t = t.buffer);
                            case P:
                              if (e.byteLength != t.byteLength || !a(new en(e), new en(t))) break;
                              return !0;
                            case s:
                            case d:
                            case p:
                              return eU(+e, +t);
                            case u:
                              return e.name == t.name && e.message == t.message;
                            case w:
                            case v:
                              return e == t + '';
                            case f:
                              var l = R;
                            case b:
                              var c = 2 & i;
                              if ((l || (l = Z), e.size != t.size && !c)) break;
                              var h = o.get(e);
                              if (h) return h == t;
                              (i |= 1), o.set(e, t);
                              var y = ex(l(e), l(t), a, r, i, o);
                              return o.delete(e), y;
                            case g:
                              if (eb) return eb.call(e) == eb.call(t);
                          }
                          return !1;
                        })(e, t, m, n, a, r, i)
                  );
                if (!(2 & r)) {
                  var j = _ && J.call(e, '__wrapped__'),
                    A = E && J.call(t, '__wrapped__');
                  if (j || A) {
                    var C = j ? e.value() : e,
                      x = A ? t.value() : t;
                    return i || (i = new e_()), n(C, x, a, r, i);
                  }
                }
                return (
                  !!W &&
                  (i || (i = new e_()),
                  (function (e, t, n, a, r, i) {
                    var o = 2 & r,
                      l = eG(e),
                      c = l.length;
                    if (c != eG(t).length && !o) return !1;
                    for (var s = c; s--; ) {
                      var d = l[s];
                      if (!(o ? d in t : J.call(t, d))) return !1;
                    }
                    var u = i.get(e);
                    if (u && i.get(t)) return u == t;
                    var h = !0;
                    i.set(e, t), i.set(t, e);
                    for (var f = o; ++s < c; ) {
                      var p = e[(d = l[s])],
                        y = t[d];
                      if (a) var m = o ? a(y, p, d, t, e, i) : a(p, y, d, e, t, i);
                      if (!(void 0 === m ? p === y || n(p, y, a, r, i) : m)) {
                        h = !1;
                        break;
                      }
                      f || (f = 'constructor' == d);
                    }
                    if (h && !f) {
                      var w = e.constructor,
                        b = t.constructor;
                      w != b &&
                        'constructor' in e &&
                        'constructor' in t &&
                        !(
                          'function' == typeof w &&
                          w instanceof w &&
                          'function' == typeof b &&
                          b instanceof b
                        ) &&
                        (h = !1);
                    }
                    return i.delete(e), i.delete(t), h;
                  })(e, t, n, a, r, i))
                );
              })(e, t, eA, n, a, r)
            : e != e && t != t)
        );
      }
      (eg.prototype.clear = function () {
        this.__data__ = eu ? eu(null) : {};
      }),
        (eg.prototype.delete = function (e) {
          return this.has(e) && delete this.__data__[e];
        }),
        (eg.prototype.get = function (e) {
          var t = this.__data__;
          if (eu) {
            var n = t[e];
            return n === i ? void 0 : n;
          }
          return J.call(t, e) ? t[e] : void 0;
        }),
        (eg.prototype.has = function (e) {
          var t = this.__data__;
          return eu ? void 0 !== t[e] : J.call(t, e);
        }),
        (eg.prototype.set = function (e, t) {
          return (this.__data__[e] = eu && void 0 === t ? i : t), this;
        }),
        (eI.prototype.clear = function () {
          this.__data__ = [];
        }),
        (eI.prototype.delete = function (e) {
          var t = this.__data__,
            n = eE(t, e);
          return !(n < 0) && (n == t.length - 1 ? t.pop() : er.call(t, n, 1), !0);
        }),
        (eI.prototype.get = function (e) {
          var t = this.__data__,
            n = eE(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (eI.prototype.has = function (e) {
          return eE(this.__data__, e) > -1;
        }),
        (eI.prototype.set = function (e, t) {
          var n = this.__data__,
            a = eE(n, e);
          return a < 0 ? n.push([e, t]) : (n[a][1] = t), this;
        }),
        (eP.prototype.clear = function () {
          this.__data__ = { hash: new eg(), map: new (el || eI)(), string: new eg() };
        }),
        (eP.prototype.delete = function (e) {
          return eT(this, e).delete(e);
        }),
        (eP.prototype.get = function (e) {
          return eT(this, e).get(e);
        }),
        (eP.prototype.has = function (e) {
          return eT(this, e).has(e);
        }),
        (eP.prototype.set = function (e, t) {
          return eT(this, e).set(e, t), this;
        }),
        (ek.prototype.add = ek.prototype.push =
          function (e) {
            return this.__data__.set(e, i), this;
          }),
        (ek.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (e_.prototype.clear = function () {
          this.__data__ = new eI();
        }),
        (e_.prototype.delete = function (e) {
          return this.__data__.delete(e);
        }),
        (e_.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (e_.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (e_.prototype.set = function (e, t) {
          var n = this.__data__;
          if (n instanceof eI) {
            var a = n.__data__;
            if (!el || a.length < 199) return a.push([e, t]), this;
            n = this.__data__ = new eP(a);
          }
          return n.set(e, t), this;
        });
      var eC =
        es && 1 / Z(new es([, -0]))[1] == o
          ? function (e) {
              return new es(e);
            }
          : function () {};
      function ex(e, t, n, a, r, i) {
        var o = 2 & r,
          l = e.length,
          c = t.length;
        if (l != c && !(o && c > l)) return !1;
        var s = i.get(e);
        if (s && i.get(t)) return s == t;
        var d = -1,
          u = !0,
          h = 1 & r ? new ek() : void 0;
        for (i.set(e, t), i.set(t, e); ++d < l; ) {
          var f = e[d],
            p = t[d];
          if (a) var y = o ? a(p, f, d, t, e, i) : a(f, p, d, e, t, i);
          if (void 0 !== y) {
            if (y) continue;
            u = !1;
            break;
          }
          if (h) {
            if (
              !(function (e, t) {
                for (var n = -1, a = e ? e.length : 0; ++n < a; ) if (t(e[n], n, e)) return !0;
                return !1;
              })(t, function (e, t) {
                if (!h.has(t) && (f === e || n(f, e, a, r, i))) return h.add(t);
              })
            ) {
              u = !1;
              break;
            }
          } else if (!(f === p || n(f, p, a, r, i))) {
            u = !1;
            break;
          }
        }
        return i.delete(e), i.delete(t), u;
      }
      function eT(e, t) {
        var n,
          a,
          r = e.__data__;
        return (
          'string' == (a = typeof (n = t)) || 'number' == a || 'symbol' == a || 'boolean' == a
            ? '__proto__' !== n
            : null === n
        )
          ? r['string' == typeof t ? 'string' : 'hash']
          : r.map;
      }
      function eS(e, t) {
        var n,
          a = null == e ? void 0 : e[t];
        return !(!eH(a) || ((n = a), Y && Y in n)) && (eZ(a) || L(a) ? ee : C).test(eK(a))
          ? a
          : void 0;
      }
      var eO = function (e) {
        return Q.call(e);
      };
      function eB(e, t) {
        return (
          !!(t = null == t ? 0x1fffffffffffff : t) &&
          ('number' == typeof e || x.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function eN(e, t) {
        if (eL(e)) return !1;
        var n = typeof e;
        return (
          !!('number' == n || 'symbol' == n || 'boolean' == n || null == e || eV(e)) ||
          E.test(e) ||
          !_.test(e) ||
          (null != t && e in Object(t))
        );
      }
      ((eo && eO(new eo(new ArrayBuffer(1))) != k) ||
        (el && eO(new el()) != f) ||
        (ec && eO(ec.resolve()) != m) ||
        (es && eO(new es()) != b) ||
        (ed && eO(new ed()) != I)) &&
        (eO = function (e) {
          var t = Q.call(e),
            n = t == y ? e.constructor : void 0,
            a = n ? eK(n) : void 0;
          if (a)
            switch (a) {
              case eh:
                return k;
              case ef:
                return f;
              case ep:
                return m;
              case ey:
                return b;
              case em:
                return I;
            }
          return t;
        });
      function eM(e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      }
      var eF = eD(function (e) {
        e =
          null == (t = e)
            ? ''
            : (function (e) {
                if ('string' == typeof e) return e;
                if (eV(e)) return ev ? ev.call(e) : '';
                var t = e + '';
                return '0' == t && 1 / e == -o ? '-0' : t;
              })(t);
        var t,
          n = [];
        return (
          W.test(e) && n.push(''),
          e.replace(j, function (e, t, a, r) {
            n.push(a ? r.replace(A, '$1') : t || e);
          }),
          n
        );
      });
      function eq(e) {
        if ('string' == typeof e || eV(e)) return e;
        var t = e + '';
        return '0' == t && 1 / e == -o ? '-0' : t;
      }
      function eK(e) {
        if (null != e) {
          try {
            return G.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      }
      function eD(e, t) {
        if ('function' != typeof e || (t && 'function' != typeof t))
          throw TypeError('Expected a function');
        var n = function () {
          var a = arguments,
            r = t ? t.apply(this, a) : a[0],
            i = n.cache;
          if (i.has(r)) return i.get(r);
          var o = e.apply(this, a);
          return (n.cache = i.set(r, o)), o;
        };
        return (n.cache = new (eD.Cache || eP)()), n;
      }
      function eU(e, t) {
        return e === t || (e != e && t != t);
      }
      function e$(e) {
        var t;
        return (
          ez((t = e)) && eR(t) && J.call(e, 'callee') && (!ea.call(e, 'callee') || Q.call(e) == l)
        );
      }
      eD.Cache = eP;
      var eL = Array.isArray;
      function eR(e) {
        return null != e && eX(e.length) && !eZ(e);
      }
      function eZ(e) {
        var t = eH(e) ? Q.call(e) : '';
        return t == h || '[object GeneratorFunction]' == t;
      }
      function eX(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff;
      }
      function eH(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function ez(e) {
        return !!e && 'object' == typeof e;
      }
      function eV(e) {
        return 'symbol' == typeof e || (ez(e) && Q.call(e) == g);
      }
      var eY = K
        ? function (e) {
            return K(e);
          }
        : function (e) {
            return ez(e) && eX(e.length) && !!T[Q.call(e)];
          };
      function eG(e) {
        return eR(e)
          ? (function (e, t) {
              var n =
                  eL(e) || e$(e)
                    ? (function (e, t) {
                        for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
                        return a;
                      })(e.length, String)
                    : [],
                a = n.length,
                r = !!a;
              for (var i in e) J.call(e, i) && !(r && ('length' == i || eB(i, a))) && n.push(i);
              return n;
            })(e)
          : (function (e) {
              if (
                ((n = (t = e) && t.constructor),
                t !== (('function' == typeof n && n.prototype) || z))
              )
                return ei(e);
              var t,
                n,
                a = [];
              for (var r in Object(e)) J.call(e, r) && 'constructor' != r && a.push(r);
              return a;
            })(e);
      }
      function eJ(e) {
        return e;
      }
      e.exports = function (e, t) {
        var n, a, r, i, o;
        return e && e.length
          ? (function (e, t, n) {
              var a = -1,
                r = D,
                i = e.length,
                o = !0,
                l = [],
                c = l;
              if (i >= 200) {
                var s = t ? null : eC(e);
                if (s) return Z(s);
                (o = !1), (r = $), (c = new ek());
              } else c = t ? [] : l;
              e: for (; ++a < i; ) {
                var d = e[a],
                  u = t ? t(d) : d;
                if (((d = 0 !== d ? d : 0), o && u == u)) {
                  for (var h = c.length; h--; ) if (c[h] === u) continue e;
                  t && c.push(u), l.push(d);
                } else r(c, u, n) || (c !== l && c.push(u), l.push(d));
              }
              return l;
            })(
              e,
              'function' == typeof t
                ? t
                : null == t
                  ? eJ
                  : 'object' == typeof t
                    ? eL(t)
                      ? ((n = t[0]),
                        (a = t[1]),
                        eN(n) && (r = a) == r && !eH(r)
                          ? eM(eq(n), a)
                          : function (e) {
                              var t,
                                r,
                                i,
                                o,
                                l,
                                c,
                                s =
                                  ((t = e),
                                  (r = n),
                                  void 0 === (o = null == t ? void 0 : eW(t, r)) ? void 0 : o);
                              return void 0 === s && s === a
                                ? ((l = e),
                                  (c = n),
                                  null != l &&
                                    (function (e, t, n) {
                                      t = eN(t, e) ? [t] : eL((a = t)) ? a : eF(a);
                                      for (var a, r, i = -1, o = t.length; ++i < o; ) {
                                        var l = eq(t[i]);
                                        if (!(r = null != e && n(e, l))) break;
                                        e = e[l];
                                      }
                                      if (r) return r;
                                      var o = e ? e.length : 0;
                                      return !!o && eX(o) && eB(l, o) && (eL(e) || e$(e));
                                    })(l, c, ej))
                                : eA(a, s, void 0, 3);
                            })
                      : 1 ==
                            (o = (function (e) {
                              for (var t = eG(e), n = t.length; n--; ) {
                                var a,
                                  r = t[n],
                                  i = e[r];
                                t[n] = [r, i, (a = i) == a && !eH(a)];
                              }
                              return t;
                            })((i = t))).length && o[0][2]
                        ? eM(o[0][0], o[0][1])
                        : function (e) {
                            return (
                              e === i ||
                              (function (e, t, n, a) {
                                var r = n.length,
                                  i = r;
                                if (null == e) return !i;
                                for (e = Object(e); r--; ) {
                                  var o = n[r];
                                  if ((0, o[2]) ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
                                }
                                for (; ++r < i; ) {
                                  var l = (o = n[r])[0],
                                    c = e[l],
                                    s = o[1];
                                  if ((0, o[2])) {
                                    if (void 0 === c && !(l in e)) return !1;
                                  } else {
                                    var d,
                                      u = new e_();
                                    if (!(void 0 === d ? eA(s, c, a, 3, u) : d)) return !1;
                                  }
                                }
                                return !0;
                              })(e, i, o)
                            );
                          }
                    : (function (e) {
                        var t;
                        return eN(e)
                          ? ((t = eq(e)),
                            function (e) {
                              return null == e ? void 0 : e[t];
                            })
                          : function (t) {
                              return eW(t, e);
                            };
                      })(t)
            )
          : [];
      };
    },
  },
]);
//# sourceMappingURL=486.a290764954d64ba7.js.map
