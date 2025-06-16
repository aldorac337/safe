'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2961, 3648],
  {
    43648: (e, a, t) => {
      t.d(a, { Y: () => b, getSupportedWallets: () => P });
      var n = t(94937),
        i = t(18087),
        r = t(75312),
        s = t(19403),
        o = t(54349),
        l = t(9479);
      let c = "44'/60'",
        d = "44'/60'/0'",
        u = [
          { label: 'Ledger Live', value: c },
          { label: 'Ledger Legacy', value: d },
        ],
        h = [{ label: 'ETH' }];
      async function g() {
        let { DeviceManagementKitBuilder: e } = await Promise.all([
            t.e(4024),
            t.e(1252),
            t.e(2220),
          ]).then(t.bind(t, 72220)),
          { webHidTransportFactory: a, webHidIdentifier: n } = await Promise.all([
            t.e(4024),
            t.e(1252),
            t.e(2220),
            t.e(854),
          ]).then(t.bind(t, 80854)),
          { SignerEthBuilder: i } = await Promise.all([
            t.e(4024),
            t.e(1252),
            t.e(2220),
            t.e(9331),
            t.e(5156),
          ]).then(t.bind(t, 9331)),
          { lastValueFrom: r } = await Promise.all([t.e(4024), t.e(1252), t.e(5996)]).then(
            t.bind(t, 75996)
          ),
          s = new e().addTransport(a).build(),
          o = await r(s.startDiscovering({ transport: n })),
          l = await s.connect({ device: o }),
          c = new i({ dmk: s, sessionId: l }).build();
        return {
          disconnect: async () => s.disconnect({ sessionId: l }),
          getAddress: async (e) => m(c.getAddress(e, { checkOnDevice: !1 })),
          signMessage: async (e, a) => m(c.signMessage(e, a)),
          signTransaction: async (e, a) => m(c.signTransaction(e, a)),
          signTypedData: async (e, a) => m(c.signTypedData(e, a)),
        };
      }
      async function m(e) {
        let a,
          { observable: n } = e,
          { DeviceActionStatus: i } = await Promise.all([t.e(4024), t.e(1252), t.e(2220)]).then(
            t.bind(t, 72220)
          );
        try {
          return await new Promise((e, t) => {
            a = n.subscribe({
              next: (a) => {
                a.status === i.Completed
                  ? e(a.output)
                  : a.status === i.Error &&
                    t(
                      (function (e) {
                        if (!('errorCode' in e && '6985' === e.errorCode)) {
                          var a;
                          return (0, l.xz)(
                            null !== (a = e.message) && void 0 !== a ? a : 'unknown',
                            'UNKNOWN_ERROR',
                            { info: e }
                          );
                        }
                        return (0, l.xz)('user rejected action', 'ACTION_REJECTED', {
                          action: 'unknown',
                          reason: 'rejected',
                          info: e,
                        });
                      })(a.error)
                    );
              },
            });
          });
        } finally {
          null == a || a.unsubscribe();
        }
      }
      var p = t(74511);
      let w = () => {
          var e, a;
          return null === (a = window) || void 0 === a
            ? void 0
            : null === (e = a.matchMedia('(prefers-color-scheme: dark)')) || void 0 === e
              ? void 0
              : e.matches;
        },
        v = (e) =>
          n.l9
            ? (0, s.A)({
                version: 2,
                projectId: n.l9,
                qrModalOptions: {
                  themeVariables: { '--wcm-z-index': '1302' },
                  themeMode: w() ? 'dark' : 'light',
                },
                requiredChains: [parseInt(e.chainId)],
                dappUrl: location.origin,
              })
            : () => null,
        y = {
          [p.N.INJECTED]: () => (0, r.Ay)(),
          [p.N.WALLETCONNECT_V2]: (e) => v(e),
          [p.N.COINBASE]: () => (0, i.A)({ darkMode: w() }),
          [p.N.LEDGER]: () => () => ({
            label: 'Ledger',
            getIcon: async () =>
              '\n<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="160" height="160" rx="16" fill="#00000D"/>\n<path d="M93.1482 119.207V125H135V98.8769H128.902V119.207H93.1482ZM93.1482 33V38.792H128.902V59.1231H135V33H93.1482ZM74.0104 59.1231H67.9125V98.8769H95.4153V93.6539H74.0104V59.1231ZM26 98.8769V125H67.8518V119.207H32.0979V98.8769H26ZM26 33V59.1231H32.0979V38.792H67.8518V33H26Z" fill="white"/>\n</svg>',
            getInterface: async (e) => {
              let { chains: a, EventEmitter: n } = e,
                i = a[0],
                { BigNumber: r } = await Promise.all([t.e(2289), t.e(9094)]).then(t.bind(t, 44100)),
                { hexaStringToBuffer: s } = await Promise.all([
                  t.e(4024),
                  t.e(1252),
                  t.e(2220),
                ]).then(t.bind(t, 72220)),
                {
                  createEIP1193Provider: o,
                  ProviderRpcError: l,
                  ProviderRpcErrorCode: m,
                } = await Promise.resolve().then(t.bind(t, 64838)),
                { accountSelect: p, getHardwareWalletProvider: w } = await Promise.all([
                  t.e(8421),
                  t.e(4024),
                  t.e(6139),
                ]).then(t.bind(t, 37326)),
                {
                  Signature: v,
                  Transaction: y,
                  JsonRpcProvider: b,
                } = await t.e(8338).then(t.bind(t, 65957)),
                f = new n(),
                P = await g(),
                I = i,
                _ = null;
              function C(e) {
                let t = a.find((a) => a.id === e);
                if (!t)
                  throw new l({
                    code: m.UNRECOGNIZED_CHAIN_ID,
                    message: 'Unrecognized chain ID: '.concat(e),
                  });
                (I = t), f.emit('chainChanged', I.id);
              }
              function N() {
                if (!(null == _ ? void 0 : _.derivationPath))
                  throw new l({ code: -32e3, message: 'No derivation path found' });
                return _.derivationPath;
              }
              let T = o(
                w(() => {
                  let e = I.rpcUrl;
                  if (!e)
                    throw new l({
                      code: m.UNRECOGNIZED_CHAIN_ID,
                      message: 'No RPC found for chain ID: '.concat(I.id),
                    });
                  return e;
                }),
                {
                  eth_requestAccounts: async () => [(await E())[0].address],
                  eth_selectAccounts: async () => (await E()).map((e) => e.address),
                  eth_accounts: async () => (_ ? [_.address] : []),
                  eth_chainId: async () => I.id,
                  eth_signTransaction: async (e) => {
                    var a, t;
                    let n = e.params[0],
                      i = null !== (a = n.gas) && void 0 !== a ? a : n.gasLimit,
                      r =
                        null !== (t = n.nonce) && void 0 !== t
                          ? t
                          : await T.request({
                              method: 'eth_getTransactionCount',
                              params: [_.address, 'pending'],
                            }),
                      o = y.from({
                        chainId: BigInt(I.id),
                        data: n.data,
                        gasLimit: i ? BigInt(i) : null,
                        gasPrice: n.gasPrice ? BigInt(n.gasPrice) : null,
                        maxFeePerGas: n.maxFeePerGas ? BigInt(n.maxFeePerGas) : null,
                        maxPriorityFeePerGas: n.maxPriorityFeePerGas
                          ? BigInt(n.maxPriorityFeePerGas)
                          : null,
                        nonce: parseInt(r, 16),
                        to: n.to,
                        value: n.value ? BigInt(n.value) : null,
                      });
                    return (
                      (o.signature = await P.signTransaction(N(), s(o.unsignedSerialized))),
                      o.serialized
                    );
                  },
                  eth_sendTransaction: async (e) => {
                    let a = await T.request({ method: 'eth_signTransaction', params: e.params });
                    return await T.request({ method: 'eth_sendRawTransaction', params: [a] });
                  },
                  eth_sign: async (e) => {
                    let a = e.params[1],
                      t = await P.signMessage(N(), a);
                    return v.from(t).serialized;
                  },
                  personal_sign: async (e) => {
                    let [a, t] = e.params;
                    return await T.request({ method: 'eth_sign', params: [t, a] });
                  },
                  eth_signTypedData: async (e) => {
                    let a = JSON.parse(e.params[1]),
                      t = await P.signTypedData(N(), a);
                    return v.from(t).serialized;
                  },
                  eth_signTypedData_v3: async (e) =>
                    await T.request({ method: 'eth_signTypedData', params: e.params }),
                  eth_signTypedData_v4: async (e) =>
                    await T.request({ method: 'eth_signTypedData', params: e.params }),
                  wallet_switchEthereumChain: async (e) => (C(e.params[0].chainId), null),
                }
              );
              async function E() {
                let e = await p({ basePaths: u, assets: h, chains: a, scanAccounts: D });
                return e.length > 0 && ((_ = e[0]), f.emit('accountsChanged', [_.address])), e;
              }
              async function D(e) {
                C(e.chainId);
                let a = new b(I.rpcUrl);
                if (e.derivationPath !== c && e.derivationPath !== d)
                  return [await A({ ...e, provider: a })];
                let t = [],
                  n = 0,
                  i = 0;
                for (; n < 5; ) {
                  let r = await A({
                    derivationPath:
                      e.derivationPath === c
                        ? ''.concat(e.derivationPath, '/').concat(i, "'/0/0")
                        : ''.concat(e.derivationPath, '/').concat(i),
                    provider: a,
                    asset: e.asset,
                  });
                  t.push(r), r.balance.value.isZero() ? n++ : (n = 0), i++;
                }
                return t;
              }
              async function A(e) {
                let { address: a } = await P.getAddress(e.derivationPath),
                  t = await e.provider.getBalance(a);
                return {
                  derivationPath: e.derivationPath,
                  address: a,
                  balance: { asset: e.asset.label, value: r.from(t) },
                };
              }
              return (
                (T.disconnect = async () => {
                  await P.disconnect(),
                    (_ = null),
                    f.emit('accountsChanged', []),
                    (I = i),
                    f.emit('chainChanged', I.id);
                }),
                (T.on = f.on.bind(f)),
                (T.removeListener = f.removeListener.bind(f)),
                { provider: T }
              );
            },
          }),
          [p.N.PK]: (e) => (0, o.A)(e.chainId, e.rpcUri),
        },
        b = (e) => Object.values(y).map((a) => a(e)),
        f = (e, a) => {
          let t = null === p.t || void 0 === p.t ? void 0 : p.t[a.toUpperCase()];
          return !e.includes(t || a);
        },
        P = (e) => {
          let a = Object.entries(y).filter((a) => {
            let [t] = a;
            return f(e.disabledWallets, t);
          });
          return 0 === a.length
            ? [(0, r.Ay)()]
            : a.map((a) => {
                let [, t] = a;
                return t(e);
              });
        };
    },
    52961: (e, a, t) => {
      t.d(a, { createOnboard: () => c });
      var n = t(9457),
        i = t(43648),
        r = t(32294),
        s = t(31356),
        o = t(94937);
      let l = null,
        c = (e, a, t) => {
          if (l) return l;
          let c = (0, i.Y)(a),
            d = e.map((e) => ({
              id: (0, s.c)(parseInt(e.chainId)),
              label: e.chainName,
              rpcUrl: (null == t ? void 0 : t[e.chainId]) || (0, r.C$)(e.rpcUri),
              token: e.nativeCurrency.symbol,
              color: e.theme.backgroundColor,
              publicRpcUrl: e.publicRpcUri.value,
              blockExplorerUrl: new URL(e.blockExplorerUriTemplate.address).origin,
            }));
          return (l = (0, n.A)({
            wallets: c,
            chains: d,
            accountCenter: { mobile: { enabled: !1 }, desktop: { enabled: !1 } },
            notify: { enabled: !1 },
            appMetadata: {
              name: o.Az,
              icon: location.origin + '/images/logo-round.svg',
              description: ''.concat(
                o.Az,
                ' – smart contract wallet for Ethereum (ex-Gnosis Safe multisig)'
              ),
            },
            connect: { removeWhereIsMyWalletWarning: !0, autoConnectLastWallet: !1 },
          }));
        };
    },
  },
]);
//# sourceMappingURL=2961.0ba5080468d66ed8.js.map
