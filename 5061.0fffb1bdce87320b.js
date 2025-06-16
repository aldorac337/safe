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
    (e._sentryDebugIds[t] = 'f85bf7cf-0daa-4614-a640-672e9d33e79a'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-f85bf7cf-0daa-4614-a640-672e9d33e79a'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5061],
  {
    85061: function (e, t, n) {
      n.d(t, {
        coinbaseWallet: function () {
          return o;
        },
      });
      var i = n(43485),
        a = n(88396),
        r = n(28346),
        c = n(18292),
        s = n(84196);
      function o(e = {}) {
        let t, d, h, l, u, w, m, g, p;
        return '3' === e.version || e.headlessMode
          ? (0, i.K)((i) => ({
              id: 'coinbaseWalletSDK',
              name: 'Coinbase Wallet',
              rdns: 'com.coinbase.wallet',
              type: o.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (await t.request({ method: 'eth_requestAccounts' })).map((e) =>
                      (0, r.K)(e)
                    );
                  h || ((h = this.onAccountsChanged.bind(this)), t.on('accountsChanged', h)),
                    l || ((l = this.onChainChanged.bind(this)), t.on('chainChanged', l)),
                    u || ((u = this.onDisconnect.bind(this)), t.on('disconnect', u));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch((e) => {
                      if (e.code === c.ab.code) throw e;
                      return { id: i };
                    });
                    i = t?.id ?? i;
                  }
                  return { accounts: n, chainId: i };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new c.ab(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                h && (e.removeListener('accountsChanged', h), (h = void 0)),
                  l && (e.removeListener('chainChanged', l), (l = void 0)),
                  u && (e.removeListener('disconnect', u), (u = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: 'eth_accounts' })).map((e) => (0, r.K)(e));
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: 'eth_chainId' }));
              },
              async getProvider() {
                if (!d) {
                  t = new (await (async () => {
                    let { default: e } = await Promise.all([n.e(9141), n.e(6565)]).then(
                      n.t.bind(n, 49141, 19)
                    );
                    return 'function' != typeof e && 'function' == typeof e.default ? e.default : e;
                  })())({ ...e, reloadOnDisconnect: !1 });
                  let a = t.walletExtension?.getChainId(),
                    r =
                      i.chains.find((t) => (e.chainId ? t.id === e.chainId : t.id === a)) ||
                      i.chains[0],
                    c = e.chainId || r?.id,
                    s = e.jsonRpcUrl || r?.rpcUrls.default.http[0];
                  d = t.makeWeb3Provider(s, c);
                }
                return d;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: t }) {
                let n = i.chains.find((e) => e.id === t);
                if (!n) throw new c.x3(new a.X4());
                let r = await this.getProvider();
                try {
                  return (
                    await r.request({
                      method: 'wallet_switchEthereumChain',
                      params: [{ chainId: (0, s.eC)(n.id) }],
                    }),
                    n
                  );
                } catch (i) {
                  if (4902 === i.code)
                    try {
                      let i, a;
                      (i = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : n.blockExplorers?.default.url
                          ? [n.blockExplorers?.default.url]
                          : []),
                        (a = e?.rpcUrls?.length ? e.rpcUrls : [n.rpcUrls.default?.http[0] ?? '']);
                      let c = {
                        blockExplorerUrls: i,
                        chainId: (0, s.eC)(t),
                        chainName: e?.chainName ?? n.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                        rpcUrls: a,
                      };
                      return await r.request({ method: 'wallet_addEthereumChain', params: [c] }), n;
                    } catch (e) {
                      throw new c.ab(e);
                    }
                  throw new c.x3(i);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : i.emitter.emit('change', { accounts: e.map((e) => (0, r.K)(e)) });
              },
              onChainChanged(e) {
                let t = Number(e);
                i.emitter.emit('change', { chainId: t });
              },
              async onDisconnect(e) {
                i.emitter.emit('disconnect');
                let t = await this.getProvider();
                h && (t.removeListener('accountsChanged', h), (h = void 0)),
                  l && (t.removeListener('chainChanged', l), (l = void 0)),
                  u && (t.removeListener('disconnect', u), (u = void 0));
              },
            }))
          : (0, i.K)((t) => ({
              id: 'coinbaseWalletSDK',
              name: 'Coinbase Wallet',
              rdns: 'com.coinbase.wallet',
              type: o.type,
              async connect({ chainId: e, ...t } = {}) {
                try {
                  let n = await this.getProvider(),
                    i = (
                      await n.request({
                        method: 'eth_requestAccounts',
                        params:
                          'instantOnboarding' in t && t.instantOnboarding
                            ? [{ onboarding: 'instant' }]
                            : [],
                      })
                    ).map((e) => (0, r.K)(e));
                  m || ((m = this.onAccountsChanged.bind(this)), n.on('accountsChanged', m)),
                    g || ((g = this.onChainChanged.bind(this)), n.on('chainChanged', g)),
                    p || ((p = this.onDisconnect.bind(this)), n.on('disconnect', p));
                  let a = await this.getChainId();
                  if (e && a !== e) {
                    let t = await this.switchChain({ chainId: e }).catch((e) => {
                      if (e.code === c.ab.code) throw e;
                      return { id: a };
                    });
                    a = t?.id ?? a;
                  }
                  return { accounts: i, chainId: a };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new c.ab(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener('accountsChanged', m), (m = void 0)),
                  g && (e.removeListener('chainChanged', g), (g = void 0)),
                  p && (e.removeListener('disconnect', p), (p = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: 'eth_accounts' })).map((e) => (0, r.K)(e));
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: 'eth_chainId' }));
              },
              async getProvider() {
                if (!w) {
                  let i =
                      'string' == typeof e.preference
                        ? { options: e.preference }
                        : { ...e.preference, options: e.preference?.options ?? 'all' },
                    { createCoinbaseWalletSDK: a } = await n.e(8037).then(n.bind(n, 18037));
                  w = a({
                    ...e,
                    appChainIds: t.chains.map((e) => e.id),
                    preference: i,
                  }).getProvider();
                }
                return w;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: n }) {
                let i = t.chains.find((e) => e.id === n);
                if (!i) throw new c.x3(new a.X4());
                let r = await this.getProvider();
                try {
                  return (
                    await r.request({
                      method: 'wallet_switchEthereumChain',
                      params: [{ chainId: (0, s.eC)(i.id) }],
                    }),
                    i
                  );
                } catch (t) {
                  if (4902 === t.code)
                    try {
                      let t, a;
                      (t = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : i.blockExplorers?.default.url
                          ? [i.blockExplorers?.default.url]
                          : []),
                        (a = e?.rpcUrls?.length ? e.rpcUrls : [i.rpcUrls.default?.http[0] ?? '']);
                      let c = {
                        blockExplorerUrls: t,
                        chainId: (0, s.eC)(n),
                        chainName: e?.chainName ?? i.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                        rpcUrls: a,
                      };
                      return await r.request({ method: 'wallet_addEthereumChain', params: [c] }), i;
                    } catch (e) {
                      throw new c.ab(e);
                    }
                  throw new c.x3(t);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : t.emitter.emit('change', { accounts: e.map((e) => (0, r.K)(e)) });
              },
              onChainChanged(e) {
                let n = Number(e);
                t.emitter.emit('change', { chainId: n });
              },
              async onDisconnect(e) {
                t.emitter.emit('disconnect');
                let n = await this.getProvider();
                m && (n.removeListener('accountsChanged', m), (m = void 0)),
                  g && (n.removeListener('chainChanged', g), (g = void 0)),
                  p && (n.removeListener('disconnect', p), (p = void 0));
              },
            }));
      }
      o.type = 'coinbaseWallet';
    },
  },
]);
