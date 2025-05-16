'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2961, 4327],
  {
    4327: (e, r, l) => {
      l.d(r, { Y: () => u, getSupportedWallets: () => h });
      var t = l(94937),
        a = l(18087),
        n = l(75312),
        o = l(19403),
        i = l(85415),
        c = l(74511);
      let d = () => {
          var e, r;
          return null === (r = window) || void 0 === r
            ? void 0
            : null === (e = r.matchMedia('(prefers-color-scheme: dark)')) || void 0 === e
              ? void 0
              : e.matches;
        },
        s = (e) =>
          t.l9
            ? (0, o.A)({
                version: 2,
                projectId: t.l9,
                qrModalOptions: {
                  themeVariables: { '--wcm-z-index': '1302' },
                  themeMode: d() ? 'dark' : 'light',
                },
                requiredChains: [parseInt(e.chainId)],
                dappUrl: location.origin,
              })
            : () => null,
        p = {
          [c.N.INJECTED]: () => (0, n.Ay)(),
          [c.N.WALLETCONNECT_V2]: (e) => s(e),
          [c.N.COINBASE]: () => (0, a.A)({ darkMode: d() }),
          [c.N.PK]: (e) => (0, i.A)(e.chainId, e.rpcUri),
        },
        u = (e) => Object.values(p).map((r) => r(e)),
        m = (e, r) => {
          let l = null === c.t || void 0 === c.t ? void 0 : c.t[r.toUpperCase()];
          return !e.includes(l || r);
        },
        h = (e) => {
          let r = Object.entries(p).filter((r) => {
            let [l] = r;
            return m(e.disabledWallets, l);
          });
          return 0 === r.length
            ? [(0, n.Ay)()]
            : r.map((r) => {
                let [, l] = r;
                return l(e);
              });
        };
    },
    52961: (e, r, l) => {
      l.d(r, { createOnboard: () => d });
      var t = l(9457),
        a = l(4327),
        n = l(32294),
        o = l(31356),
        i = l(94937);
      let c = null,
        d = (e, r, l) => {
          if (c) return c;
          let d = (0, a.Y)(r),
            s = e.map((e) => ({
              id: (0, o.c)(parseInt(e.chainId)),
              label: e.chainName,
              rpcUrl: (null == l ? void 0 : l[e.chainId]) || (0, n.C$)(e.rpcUri),
              token: e.nativeCurrency.symbol,
              color: e.theme.backgroundColor,
              publicRpcUrl: e.publicRpcUri.value,
              blockExplorerUrl: new URL(e.blockExplorerUriTemplate.address).origin,
            }));
          return (c = (0, t.A)({
            wallets: d,
            chains: s,
            accountCenter: { mobile: { enabled: !1 }, desktop: { enabled: !1 } },
            notify: { enabled: !1 },
            appMetadata: {
              name: i.Az,
              icon: location.origin + '/images/logo-round.svg',
              description: ''.concat(
                i.Az,
                ' – smart contract wallet for Ethereum (ex-Gnosis Safe multisig)'
              ),
            },
            connect: { removeWhereIsMyWalletWarning: !0, autoConnectLastWallet: !1 },
          }));
        };
    },
  },
]);
//# sourceMappingURL=2961.e0f15521af8c01c6.js.map
