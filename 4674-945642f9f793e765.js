'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4674],
  {
    51374: function (e) {
      var t = Object.prototype.hasOwnProperty,
        n = '~';
      function r() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, r, o, a) {
        if ('function' != typeof r) throw TypeError('The listener must be a function');
        var s = new i(r, o || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (e = this._events)) t.call(e, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = Array(o); i < o; i++) a[i] = r[i].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, i, o, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            l,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, i), !0;
              case 5:
                return u.fn.call(u.context, t, r, i, o), !0;
              case 6:
                return u.fn.call(u.context, t, r, i, o, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var f,
              h = u.length;
            for (l = 0; l < h; l++)
              switch ((u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t, r);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t, r, i);
                  break;
                default:
                  if (!c) for (f = 1, c = Array(d - 1); f < d; f++) c[f - 1] = arguments[f];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, i) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn) s.fn !== t || (i && !s.once) || (r && s.context !== r) || a(this, o);
          else {
            for (var c = 0, l = [], u = s.length; c < u; c++)
              (s[c].fn !== t || (i && !s[c].once) || (r && s[c].context !== r)) && l.push(s[c]);
            l.length ? (this._events[o] = 1 === l.length ? l[0] : l) : a(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    43999: function (e, t, n) {
      let r;
      n.d(t, {
        _: function () {
          return M;
        },
      });
      var i = n(79951);
      let o = (e) => (t, n, r) => {
          let i = r.subscribe;
          return (
            (r.subscribe = (e, t, n) => {
              let o = e;
              if (t) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = e(r.getState());
                (o = (n) => {
                  let r = e(n);
                  if (!i(a, r)) {
                    let e = a;
                    t((a = r), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(a, a);
              }
              return i(o);
            }),
            e(t, n, r)
          );
        },
        a = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => a(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => a(t)(e),
            };
          }
        },
        s = (e, t) => (n, r, i) => {
          let o,
            s = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var r;
                    let i = (e) =>
                        null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                      o = null != (r = n.getItem(e)) ? r : null;
                    return o instanceof Promise ? o.then(i) : i(o);
                  },
                  setItem: (e, r) =>
                    n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            l = new Set(),
            u = new Set(),
            d = s.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              i
            );
          let f = () => {
              let e = s.partialize({ ...r() });
              return d.setItem(s.name, { state: e, version: s.version });
            },
            h = i.setState;
          i.setState = (e, t) => {
            h(e, t), f();
          };
          let p = e(
            (...e) => {
              n(...e), f();
            },
            r,
            i
          );
          i.getInitialState = () => p;
          let m = () => {
            var e, t;
            if (!d) return;
            (c = !1),
              l.forEach((e) => {
                var t;
                return e(null != (t = r()) ? t : p);
              });
            let i =
              (null == (t = s.onRehydrateStorage)
                ? void 0
                : t.call(s, null != (e = r()) ? e : p)) || void 0;
            return a(d.getItem.bind(d))(s.name)
              .then((e) => {
                if (e) {
                  if ('number' != typeof e.version || e.version === s.version) return [!1, e.state];
                  if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [i, a] = e;
                if ((n((o = s.merge(a, null != (t = r()) ? t : p)), !0), i)) return f();
              })
              .then(() => {
                null == i || i(o, void 0), (o = r()), (c = !0), u.forEach((e) => e(o));
              })
              .catch((e) => {
                null == i || i(void 0, e);
              });
          };
          return (
            (i.persist = {
              setOptions: (e) => {
                (s = { ...s, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(s.name);
              },
              getOptions: () => s,
              rehydrate: () => m(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
            }),
            s.skipHydration || m(),
            o || p
          );
        },
        c = (e) => {
          let t;
          let n = new Set(),
            r = (e, r) => {
              let i = 'function' == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != r ? r : 'object' != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach((n) => n(t, e));
              }
            },
            i = () => t,
            o = {
              setState: r,
              getState: i,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, i, o));
          return o;
        },
        l = (e) => (e ? c(e) : c);
      var u = n(11238),
        d = n(38350),
        f = n(58905),
        h = n(79150),
        p = n(43129),
        m = n(46669);
      class g extends m.G {
        constructor() {
          super('Provider not found.'),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ProviderNotFoundError',
            });
        }
      }
      function v(e = {}) {
        let t, n, r, i;
        let { shimDisconnect: o = !0, unstable_shimAsyncInject: a } = e;
        function s() {
          let t = e.target;
          if ('function' == typeof t) {
            let e = t();
            if (e) return e;
          }
          return 'object' == typeof t
            ? t
            : 'string' == typeof t
              ? {
                  ...(y[t] ?? {
                    id: t,
                    name: `${t[0].toUpperCase()}${t.slice(1)}`,
                    provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                  }),
                }
              : { id: 'injected', name: 'Injected', provider: (e) => e?.ethereum };
        }
        return (c) => ({
          get icon() {
            return s().icon;
          },
          get id() {
            return s().id;
          },
          get name() {
            return s().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: v.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (r || ((r = this.onConnect.bind(this)), n.on('connect', r)),
              t || ((t = this.onAccountsChanged.bind(this)), n.on('accountsChanged', t)));
          },
          async connect({ chainId: a, isReconnecting: s } = {}) {
            let l = await this.getProvider();
            if (!l) throw new g();
            let f = [];
            if (s) f = await this.getAccounts().catch(() => []);
            else if (o)
              try {
                let e = await l.request({
                  method: 'wallet_requestPermissions',
                  params: [{ eth_accounts: {} }],
                });
                (f = e[0]?.caveats?.[0]?.value?.map((e) => u.K(e))).length > 0 &&
                  (f = await this.getAccounts());
              } catch (e) {
                if (e.code === d.ab.code) throw new d.ab(e);
                if (e.code === d.pT.code) throw e;
              }
            try {
              f?.length ||
                s ||
                (f = (await l.request({ method: 'eth_requestAccounts' })).map((e) => (0, u.K)(e))),
                r && (l.removeListener('connect', r), (r = void 0)),
                t || ((t = this.onAccountsChanged.bind(this)), l.on('accountsChanged', t)),
                n || ((n = this.onChainChanged.bind(this)), l.on('chainChanged', n)),
                i || ((i = this.onDisconnect.bind(this)), l.on('disconnect', i));
              let h = await this.getChainId();
              if (a && h !== a) {
                let e = await this.switchChain({ chainId: a }).catch((e) => {
                  if (e.code === d.ab.code) throw e;
                  return { id: h };
                });
                h = e?.id ?? h;
              }
              return (
                o && (await c.storage?.removeItem(`${this.id}.disconnected`)),
                e.target || (await c.storage?.setItem('injected.connected', !0)),
                { accounts: f, chainId: h }
              );
            } catch (e) {
              if (e.code === d.ab.code) throw new d.ab(e);
              if (e.code === d.pT.code) throw new d.pT(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new g();
            n && (t.removeListener('chainChanged', n), (n = void 0)),
              i && (t.removeListener('disconnect', i), (i = void 0)),
              r || ((r = this.onConnect.bind(this)), t.on('connect', r));
            try {
              await (function (
                e,
                { errorInstance: t = Error('timed out'), timeout: n, signal: r }
              ) {
                return new Promise((i, o) => {
                  (async () => {
                    let a;
                    try {
                      let s = new AbortController();
                      n > 0 &&
                        (a = setTimeout(() => {
                          r ? s.abort() : o(t);
                        }, n)),
                        i(await e({ signal: s?.signal || null }));
                    } catch (e) {
                      e?.name === 'AbortError' && o(t), o(e);
                    } finally {
                      clearTimeout(a);
                    }
                  })();
                });
              })(
                () =>
                  t.request({ method: 'wallet_revokePermissions', params: [{ eth_accounts: {} }] }),
                { timeout: 100 }
              );
            } catch {}
            o && (await c.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await c.storage?.removeItem('injected.connected'));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new g();
            return (await e.request({ method: 'eth_accounts' })).map((e) => (0, u.K)(e));
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new g();
            return Number(await e.request({ method: 'eth_chainId' }));
          },
          async getProvider() {
            let e;
            if ('undefined' == typeof window) return;
            let t = s();
            return (
              (e =
                'function' == typeof t.provider
                  ? t.provider(window)
                  : 'string' == typeof t.provider
                    ? w(window, t.provider)
                    : t.provider) &&
                !e.removeListener &&
                ('off' in e && 'function' == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (o && (await c.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await c.storage?.getItem('injected.connected')))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== a && !1 !== a) {
                  let e = async () => (
                      'undefined' != typeof window &&
                        window.removeEventListener('ethereum#initialized', e),
                      !!(await this.getProvider())
                    ),
                    t = 'number' == typeof a ? a : 1e3;
                  if (
                    await Promise.race([
                      ...('undefined' != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener('ethereum#initialized', () => t(e()), {
                                once: !0,
                              })
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new g();
              }
              return !!(await (0, f.J)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new g();
            let r = c.chains.find((e) => e.id === t);
            if (!r) throw new d.x3(new p.X4());
            let i = new Promise((e) => {
              let n = (r) => {
                'chainId' in r && r.chainId === t && (c.emitter.off('change', n), e());
              };
              c.emitter.on('change', n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: 'wallet_switchEthereumChain',
                      params: [{ chainId: (0, h.eC)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t && c.emitter.emit('change', { chainId: t });
                    }),
                  i,
                ]),
                r
              );
            } catch (o) {
              if (4902 === o.code || o?.data?.originalError?.code === 4902)
                try {
                  let o, a;
                  let { default: s, ...l } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (o = e.blockExplorerUrls)
                    : s && (o = [s.url, ...Object.values(l).map((e) => e.url)]),
                    (a = e?.rpcUrls?.length ? e.rpcUrls : [r.rpcUrls.default?.http[0] ?? '']);
                  let u = {
                    blockExplorerUrls: o,
                    chainId: (0, h.eC)(t),
                    chainName: e?.chainName ?? r.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                    rpcUrls: a,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({ method: 'wallet_addEthereumChain', params: [u] })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            c.emitter.emit('change', { chainId: t });
                          else throw new d.ab(Error('User rejected switch after adding network.'));
                        }),
                      i,
                    ]),
                    r
                  );
                } catch (e) {
                  throw new d.ab(e);
                }
              if (o.code === d.ab.code) throw new d.ab(o);
              throw new d.x3(o);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (c.emitter.listenerCount('connect')) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                o && (await c.storage?.removeItem(`${this.id}.disconnected`));
            } else c.emitter.emit('change', { accounts: e.map((e) => (0, u.K)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            c.emitter.emit('change', { chainId: t });
          },
          async onConnect(e) {
            let o = await this.getAccounts();
            if (0 === o.length) return;
            let a = Number(e.chainId);
            c.emitter.emit('connect', { accounts: o, chainId: a });
            let s = await this.getProvider();
            s &&
              (r && (s.removeListener('connect', r), (r = void 0)),
              t || ((t = this.onAccountsChanged.bind(this)), s.on('accountsChanged', t)),
              n || ((n = this.onChainChanged.bind(this)), s.on('chainChanged', n)),
              i || ((i = this.onDisconnect.bind(this)), s.on('disconnect', i)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (c.emitter.emit('disconnect'),
              t &&
                (n && (t.removeListener('chainChanged', n), (n = void 0)),
                i && (t.removeListener('disconnect', i), (i = void 0)),
                r || ((r = this.onConnect.bind(this)), t.on('connect', r))));
          },
        });
      }
      v.type = 'injected';
      let y = {
        coinbaseWallet: {
          id: 'coinbaseWallet',
          name: 'Coinbase Wallet',
          provider: (e) =>
            e?.coinbaseWalletExtension ? e.coinbaseWalletExtension : w(e, 'isCoinbaseWallet'),
        },
        metaMask: {
          id: 'metaMask',
          name: 'MetaMask',
          provider: (e) =>
            w(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state)) return !1;
              for (let t of [
                'isApexWallet',
                'isAvalanche',
                'isBitKeep',
                'isBlockWallet',
                'isKuCoinWallet',
                'isMathWallet',
                'isOkxWallet',
                'isOKExWallet',
                'isOneInchIOSWallet',
                'isOneInchAndroidWallet',
                'isOpera',
                'isPhantom',
                'isPortal',
                'isRabby',
                'isTokenPocket',
                'isTokenary',
                'isUniswapWallet',
                'isZerion',
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: 'phantom',
          name: 'Phantom',
          provider: (e) => (e?.phantom?.ethereum ? e.phantom?.ethereum : w(e, 'isPhantom')),
        },
      };
      function w(e, t) {
        function n(e) {
          return 'function' == typeof t ? t(e) : 'string' != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers ? r.providers.find((e) => n(e)) : r && n(r) ? r : void 0;
      }
      var b = n(51374);
      class C {
        constructor(e) {
          Object.defineProperty(this, 'uid', {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, '_emitter', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new b(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function S(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === 'bigint' && (r = BigInt(r.value)),
            r?.__type === 'Map' && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function I(e, t) {
        return e.slice(0, t).join('.') || '.';
      }
      function E(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function P(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = 'function' == typeof e,
              r = 'function' == typeof t,
              i = [],
              o = [];
            return function (a, s) {
              if ('object' == typeof s) {
                if (i.length) {
                  let e = E(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), o.splice(e)), (o[o.length] = a);
                  let n = E(i, s);
                  if (0 !== n) return r ? t.call(this, a, s, I(o, n)) : `[ref=${I(o, n)}]`;
                } else (i[0] = s), (o[0] = a);
              }
              return n ? e.call(this, a, s) : s;
            };
          })((e, n) => {
            let r = n;
            return (
              'bigint' == typeof r && (r = { __type: 'bigint', value: n.toString() }),
              r instanceof Map && (r = { __type: 'Map', value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      let x = { getItem: () => null, setItem: () => {}, removeItem: () => {} },
        _ = 256;
      var j = n(12880);
      function M(e) {
        let t;
        let {
            multiInjectedProviderDiscovery: n = !0,
            storage: a = (function (e) {
              let { deserialize: t = S, key: n = 'wagmi', serialize: r = P, storage: i = x } = e;
              function o(e) {
                return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
              }
              return {
                ...i,
                key: n,
                async getItem(e, r) {
                  let a = i.getItem(`${n}.${e}`),
                    s = await o(a);
                  return s ? (t(s) ?? null) : (r ?? null);
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t ? await o(i.removeItem(a)) : await o(i.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await o(i.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  'undefined' != typeof window && window.localStorage ? window.localStorage : x;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, n) {
                    try {
                      e.setItem(t, n);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: c = !0,
            ssr: u = !1,
            ...d
          } = e,
          f =
            'undefined' != typeof window && n
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        if ('undefined' == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener('eip6963:announceProvider', t),
                          window.dispatchEvent(new CustomEvent('eip6963:requestProvider')),
                          () => window.removeEventListener('eip6963:announceProvider', t)
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]), e.forEach((e) => e(t, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), r?.();
                    },
                    findProvider: ({ rdns: e }) => t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), r?.(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      e.add(n), r && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          h = l(() => d.chains),
          m = l(() => {
            let e = [],
              t = new Set();
            for (let n of d.connectors ?? []) {
              let r = g(n);
              if ((e.push(r), !u && r.rdns))
                for (let e of 'string' == typeof r.rdns ? [r.rdns] : r.rdns) t.add(e);
            }
            if (!u && f) for (let n of f.getProviders()) t.has(n.info.rdns) || e.push(g(y(n)));
            return e;
          });
        function g(e) {
          let t = new C(
              (function (e = 11) {
                if (!r || _ + e > 512) {
                  (r = ''), (_ = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
                }
                return r.substring(_, _++ + e);
              })()
            ),
            n = {
              ...e({ emitter: t, chains: h.getState(), storage: a, transports: d.transports }),
              emitter: t,
              uid: t.uid,
            };
          return t.on('connect', O), n.setup?.(), n;
        }
        function y(e) {
          let { info: t } = e,
            n = e.provider;
          return v({ target: { ...t, id: t.rdns, provider: n } });
        }
        let w = new Map();
        function b() {
          return {
            chainId: h.getState()[0].id,
            connections: new Map(),
            current: null,
            status: 'disconnected',
          };
        }
        let I = '0.0.0-canary-';
        t = j.i.startsWith(I)
          ? Number.parseInt(j.i.replace(I, ''))
          : Number.parseInt(j.i.split('.')[0] ?? '0');
        let E = l(
          o(
            a
              ? s(b, {
                  migrate(e, n) {
                    if (n === t) return e;
                    let r = b(),
                      i = M(e, r.chainId);
                    return { ...r, chainId: i };
                  },
                  name: 'store',
                  partialize: (e) => ({
                    connections: {
                      __type: 'Map',
                      value: Array.from(e.connections.entries()).map(([e, t]) => {
                        let { id: n, name: r, type: i, uid: o } = t.connector;
                        return [e, { ...t, connector: { id: n, name: r, type: i, uid: o } }];
                      }),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  merge(e, t) {
                    'object' == typeof e && e && 'status' in e && delete e.status;
                    let n = M(e, t.chainId);
                    return { ...t, ...e, chainId: n };
                  },
                  skipHydration: u,
                  storage: a,
                  version: t,
                })
              : b
          )
        );
        function M(e, t) {
          return e &&
            'object' == typeof e &&
            'chainId' in e &&
            'number' == typeof e.chainId &&
            h.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function k(e) {
          E.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function O(e) {
          'connecting' !== E.getState().status &&
            'reconnecting' !== E.getState().status &&
            E.setState((t) => {
              let n = m.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount('connect') && n.emitter.off('connect', k),
                  n.emitter.listenerCount('change') || n.emitter.on('change', k),
                  n.emitter.listenerCount('disconnect') || n.emitter.on('disconnect', $),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: 'connected',
                  })
                : t;
            });
        }
        function $(e) {
          E.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount('change') && n.connector.emitter.off('change', k),
                e.emitter.listenerCount('disconnect') && n.connector.emitter.off('disconnect', $),
                e.emitter.listenerCount('connect') || n.connector.emitter.on('connect', O);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return { ...t, connections: new Map(), current: null, status: 'disconnected' };
            let r = t.connections.values().next().value;
            return { ...t, connections: new Map(t.connections), current: r.connector.uid };
          });
        }
        return (
          E.setState(b()),
          c &&
            E.subscribe(
              ({ connections: e, current: t }) => (t ? e.get(t)?.chainId : void 0),
              (e) => {
                if (h.getState().some((t) => t.id === e))
                  return E.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          f?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of m.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of 'string' == typeof e.rdns ? [e.rdns] : e.rdns) n.add(t);
            let r = [];
            for (let i of e) {
              if (n.has(i.info.rdns)) continue;
              let e = g(y(i));
              t.has(e.id) || r.push(e);
            }
            (!a || E.persist.hasHydrated()) && m.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return h.getState();
            },
            get connectors() {
              return m.getState();
            },
            storage: a,
            getClient: function (e = {}) {
              let t;
              let n = e.chainId ?? E.getState().chainId,
                r = h.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new p.X4();
              {
                let e = w.get(E.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new p.X4();
              }
              {
                let e = w.get(n);
                if (e) return e;
              }
              if (d.client) t = d.client({ chain: r });
              else {
                let e = r.id,
                  n = h.getState().map((e) => e.id),
                  o = {};
                for (let [t, r] of Object.entries(d))
                  if (
                    'chains' !== t &&
                    'client' !== t &&
                    'connectors' !== t &&
                    'transports' !== t
                  ) {
                    if ('object' == typeof r) {
                      if (e in r) o[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        o[t] = r;
                      }
                    } else o[t] = r;
                  }
                t = (0, i.e)({
                  ...o,
                  chain: r,
                  batch: o.batch ?? { multicall: !0 },
                  transport: (t) => d.transports[e]({ ...t, connectors: m }),
                });
              }
              return w.set(n, t), t;
            },
            get state() {
              return E.getState();
            },
            setState(e) {
              let t;
              t = 'function' == typeof e ? e(E.getState()) : e;
              let n = b();
              'object' != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                E.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              E.subscribe(e, t, n ? { ...n, fireImmediately: n.emitImmediately } : void 0),
            _internal: {
              mipd: f,
              store: E,
              ssr: !!u,
              syncConnectedChain: c,
              transports: d.transports,
              chains: {
                setState(e) {
                  let t = 'function' == typeof e ? e(h.getState()) : e;
                  if (0 !== t.length) return h.setState(t, !0);
                },
                subscribe: (e) => h.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: y,
                setup: g,
                setState: (e) => m.setState('function' == typeof e ? e(m.getState()) : e, !0),
                subscribe: (e) => m.subscribe(e),
              },
              events: { change: k, connect: O, disconnect: $ },
            },
          }
        );
      }
    },
    43129: function (e, t, n) {
      n.d(t, {
        $S: function () {
          return c;
        },
        JK: function () {
          return a;
        },
        X4: function () {
          return i;
        },
        XZ: function () {
          return s;
        },
        aH: function () {
          return o;
        },
      });
      var r = n(46669);
      class i extends r.G {
        constructor() {
          super('Chain not configured.'),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ChainNotConfiguredError',
            });
        }
      }
      class o extends r.G {
        constructor() {
          super('Connector not connected.'),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ConnectorNotConnectedError',
            });
        }
      }
      class a extends r.G {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ConnectorAccountNotFoundError',
            });
        }
      }
      class s extends r.G {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            { metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e}`] }
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ConnectorChainMismatchError',
            });
        }
      }
      class c extends r.G {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              'During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.',
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ConnectorUnavailableReconnectingError',
            });
        }
      }
    },
    83181: function (e, t, n) {
      n.d(t, {
        uZ: function () {
          return m;
        },
      });
      var r = n(58854),
        i = Object.defineProperty,
        o = Object.defineProperties,
        a = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        u = (e, t, n) =>
          t in e
            ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
            : (e[t] = n),
        d = (e, t) => {
          for (var n in t || (t = {})) c.call(t, n) && u(e, n, t[n]);
          if (s) for (var n of s(t)) l.call(t, n) && u(e, n, t[n]);
          return e;
        },
        f = (e, t) => o(e, a(t)),
        h = (e, t) => {
          var n = {};
          for (var r in e) c.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && s) for (var r of s(e)) 0 > t.indexOf(r) && l.call(e, r) && (n[r] = e[r]);
          return n;
        },
        p = r.createContext({}),
        m = r.forwardRef((e, t) => {
          let n;
          var i,
            o,
            a,
            s,
            c,
            {
              value: l,
              onChange: u,
              maxLength: m,
              textAlign: y = 'left',
              pattern: w = '^\\d+$',
              inputMode: b = 'numeric',
              onComplete: C,
              pushPasswordManagerStrategy: S = 'increase-width',
              containerClassName: I,
              noScriptCSSFallback: E = v,
              render: P,
              children: x,
            } = e,
            _ = h(e, [
              'value',
              'onChange',
              'maxLength',
              'textAlign',
              'pattern',
              'inputMode',
              'onComplete',
              'pushPasswordManagerStrategy',
              'containerClassName',
              'noScriptCSSFallback',
              'render',
              'children',
            ]);
          let [j, M] = r.useState('string' == typeof _.defaultValue ? _.defaultValue : ''),
            k = null != l ? l : j,
            O =
              ((n = r.useRef()),
              r.useEffect(() => {
                n.current = k;
              }),
              n.current),
            $ = r.useCallback(
              (e) => {
                null == u || u(e), M(e);
              },
              [u]
            ),
            A = r.useMemo(() => (w ? ('string' == typeof w ? new RegExp(w) : w) : null), [w]),
            T = r.useRef(null),
            D = r.useRef(null),
            W = r.useRef({
              value: k,
              onChange: $,
              isIOS:
                'undefined' != typeof window &&
                (null ==
                (o = null == (i = null == window ? void 0 : window.CSS) ? void 0 : i.supports)
                  ? void 0
                  : o.call(i, '-webkit-touch-callout', 'none')),
            }),
            L = r.useRef({
              prev: [
                null == (a = T.current) ? void 0 : a.selectionStart,
                null == (s = T.current) ? void 0 : s.selectionEnd,
                null == (c = T.current) ? void 0 : c.selectionDirection,
              ],
            });
          r.useImperativeHandle(t, () => T.current, []),
            r.useEffect(() => {
              let e = T.current,
                t = D.current;
              if (!e || !t) return;
              function n() {
                if (document.activeElement !== e) {
                  U(null), G(null);
                  return;
                }
                let t = e.selectionStart,
                  n = e.selectionEnd,
                  r = e.selectionDirection,
                  i = e.maxLength,
                  o = e.value,
                  a = L.current.prev,
                  s = -1,
                  c = -1,
                  l;
                if (0 !== o.length && null !== t && null !== n) {
                  let e = t === n,
                    r = t === o.length && o.length < i;
                  if (e && !r) {
                    if (0 === t) (s = 0), (c = 1), (l = 'forward');
                    else if (t === i) (s = t - 1), (c = t), (l = 'backward');
                    else if (i > 1 && o.length > 1) {
                      let e = 0;
                      if (null !== a[0] && null !== a[1]) {
                        l = t < a[1] ? 'backward' : 'forward';
                        let n = a[0] === a[1] && a[0] < i;
                        'backward' !== l || n || (e = -1);
                      }
                      (s = e + t), (c = e + t + 1);
                    }
                  }
                  -1 !== s && -1 !== c && s !== c && T.current.setSelectionRange(s, c, l);
                }
                let u = -1 !== s ? s : t,
                  d = -1 !== c ? c : n,
                  f = null != l ? l : r;
                U(u), G(d), (L.current.prev = [u, d, f]);
              }
              if (
                (W.current.value !== e.value && W.current.onChange(e.value),
                (L.current.prev = [e.selectionStart, e.selectionEnd, e.selectionDirection]),
                document.addEventListener('selectionchange', n, { capture: !0 }),
                n(),
                document.activeElement === e && B(!0),
                !document.getElementById('input-otp-style'))
              ) {
                let e = document.createElement('style');
                if (((e.id = 'input-otp-style'), document.head.appendChild(e), e.sheet)) {
                  let t =
                    'background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;';
                  g(
                    e.sheet,
                    '[data-input-otp]::selection { background: transparent !important; color: transparent !important; }'
                  ),
                    g(e.sheet, `[data-input-otp]:autofill { ${t} }`),
                    g(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`),
                    g(
                      e.sheet,
                      '@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }'
                    ),
                    g(e.sheet, '[data-input-otp] + * { pointer-events: all !important; }');
                }
              }
              let r = () => {
                t && t.style.setProperty('--root-height', `${e.clientHeight}px`);
              };
              r();
              let i = new ResizeObserver(r);
              return (
                i.observe(e),
                () => {
                  document.removeEventListener('selectionchange', n, { capture: !0 }),
                    i.disconnect();
                }
              );
            }, []);
          let [N, R] = r.useState(!1),
            [z, B] = r.useState(!1),
            [H, U] = r.useState(null),
            [F, G] = r.useState(null);
          r.useEffect(() => {
            var e;
            setTimeout(
              (e = () => {
                var e, t, n, r;
                null == (e = T.current) || e.dispatchEvent(new Event('input'));
                let i = null == (t = T.current) ? void 0 : t.selectionStart,
                  o = null == (n = T.current) ? void 0 : n.selectionEnd,
                  a = null == (r = T.current) ? void 0 : r.selectionDirection;
                null !== i && null !== o && (U(i), G(o), (L.current.prev = [i, o, a]));
              }),
              0
            ),
              setTimeout(e, 10),
              setTimeout(e, 50);
          }, [k, z]),
            r.useEffect(() => {
              void 0 !== O && k !== O && O.length < m && k.length === m && (null == C || C(k));
            }, [m, C, O, k]);
          let q = (function ({
              containerRef: e,
              inputRef: t,
              pushPasswordManagerStrategy: n,
              isFocused: i,
            }) {
              let o = r.useRef({ done: !1, refocused: !1 }),
                [a, s] = r.useState(!1),
                [c, l] = r.useState(!1),
                [u, d] = r.useState(!1),
                f = r.useMemo(
                  () =>
                    'none' !== n &&
                    ('increase-width' === n || 'experimental-no-flickering' === n) &&
                    a &&
                    c,
                  [a, c, n]
                ),
                h = r.useCallback(() => {
                  let r = e.current,
                    i = t.current;
                  if (!r || !i || u || 'none' === n) return;
                  let a = r.getBoundingClientRect().left + r.offsetWidth,
                    c = r.getBoundingClientRect().top + r.offsetHeight / 2;
                  if (
                    !(
                      0 ===
                        document.querySelectorAll(
                          '[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]'
                        ).length && document.elementFromPoint(a - 18, c) === r
                    ) &&
                    (s(!0), d(!0), !o.current.refocused && document.activeElement === i)
                  ) {
                    let e = [i.selectionStart, i.selectionEnd];
                    i.blur(),
                      i.focus(),
                      i.setSelectionRange(e[0], e[1]),
                      (o.current.refocused = !0);
                  }
                }, [e, t, u, n]);
              return (
                r.useEffect(() => {
                  let t = e.current;
                  if (!t || 'none' === n) return;
                  function r() {
                    l(window.innerWidth - t.getBoundingClientRect().right >= 40);
                  }
                  r();
                  let i = setInterval(r, 1e3);
                  return () => {
                    clearInterval(i);
                  };
                }, [e, n]),
                r.useEffect(() => {
                  let e = i || document.activeElement === t.current;
                  if ('none' === n || !e) return;
                  let r = setTimeout(h, 0),
                    o = setTimeout(h, 2e3),
                    a = setTimeout(h, 5e3),
                    s = setTimeout(() => {
                      d(!0);
                    }, 6e3);
                  return () => {
                    clearTimeout(r), clearTimeout(o), clearTimeout(a), clearTimeout(s);
                  };
                }, [t, i, n, h]),
                { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: '40px' }
              );
            })({ containerRef: D, inputRef: T, pushPasswordManagerStrategy: S, isFocused: z }),
            K = r.useCallback(
              (e) => {
                let t = e.currentTarget.value.slice(0, m);
                if (t.length > 0 && A && !A.test(t)) {
                  e.preventDefault();
                  return;
                }
                'string' == typeof O &&
                  t.length < O.length &&
                  document.dispatchEvent(new Event('selectionchange')),
                  $(t);
              },
              [m, $, O, A]
            ),
            J = r.useCallback(() => {
              var e;
              if (T.current) {
                let t = Math.min(T.current.value.length, m - 1),
                  n = T.current.value.length;
                null == (e = T.current) || e.setSelectionRange(t, n), U(t), G(n);
              }
              B(!0);
            }, [m]),
            V = r.useCallback(
              (e) => {
                var t, n;
                let r = T.current;
                if (!W.current.isIOS || !e.clipboardData || !r) return;
                let i = e.clipboardData.getData('text/plain');
                e.preventDefault();
                let o = null == (t = T.current) ? void 0 : t.selectionStart,
                  a = null == (n = T.current) ? void 0 : n.selectionEnd,
                  s = (
                    o !== a ? k.slice(0, o) + i + k.slice(a) : k.slice(0, o) + i + k.slice(o)
                  ).slice(0, m);
                if (s.length > 0 && A && !A.test(s)) return;
                (r.value = s), $(s);
                let c = Math.min(s.length, m - 1),
                  l = s.length;
                r.setSelectionRange(c, l), U(c), G(l);
              },
              [m, $, A, k]
            ),
            X = r.useMemo(
              () => ({
                position: 'relative',
                cursor: _.disabled ? 'default' : 'text',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                pointerEvents: 'none',
              }),
              [_.disabled]
            ),
            Z = r.useMemo(
              () => ({
                position: 'absolute',
                inset: 0,
                width: q.willPushPWMBadge ? `calc(100% + ${q.PWM_BADGE_SPACE_WIDTH})` : '100%',
                clipPath: q.willPushPWMBadge ? `inset(0 ${q.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
                height: '100%',
                display: 'flex',
                textAlign: y,
                opacity: '1',
                color: 'transparent',
                pointerEvents: 'all',
                background: 'transparent',
                caretColor: 'transparent',
                border: '0 solid transparent',
                outline: '0 solid transparent',
                boxShadow: 'none',
                lineHeight: '1',
                letterSpacing: '-.5em',
                fontSize: 'var(--root-height)',
                fontFamily: 'monospace',
                fontVariantNumeric: 'tabular-nums',
              }),
              [q.PWM_BADGE_SPACE_WIDTH, q.willPushPWMBadge, y]
            ),
            Y = r.useMemo(
              () =>
                r.createElement(
                  'input',
                  f(d({ autoComplete: _.autoComplete || 'one-time-code' }, _), {
                    'data-input-otp': !0,
                    'data-input-otp-mss': H,
                    'data-input-otp-mse': F,
                    inputMode: b,
                    pattern: null == A ? void 0 : A.source,
                    style: Z,
                    maxLength: m,
                    value: k,
                    ref: T,
                    onPaste: (e) => {
                      var t;
                      V(e), null == (t = _.onPaste) || t.call(_, e);
                    },
                    onChange: K,
                    onMouseOver: (e) => {
                      var t;
                      R(!0), null == (t = _.onMouseOver) || t.call(_, e);
                    },
                    onMouseLeave: (e) => {
                      var t;
                      R(!1), null == (t = _.onMouseLeave) || t.call(_, e);
                    },
                    onFocus: (e) => {
                      var t;
                      J(), null == (t = _.onFocus) || t.call(_, e);
                    },
                    onBlur: (e) => {
                      var t;
                      B(!1), null == (t = _.onBlur) || t.call(_, e);
                    },
                  })
                ),
              [K, J, V, b, Z, m, F, H, _, null == A ? void 0 : A.source, k]
            ),
            Q = r.useMemo(
              () => ({
                slots: Array.from({ length: m }).map((e, t) => {
                  let n =
                      z && null !== H && null !== F && ((H === F && t === H) || (t >= H && t < F)),
                    r = void 0 !== k[t] ? k[t] : null;
                  return { char: r, isActive: n, hasFakeCaret: n && null === r };
                }),
                isFocused: z,
                isHovering: !_.disabled && N,
              }),
              [z, N, m, F, H, _.disabled, k]
            ),
            ee = r.useMemo(
              () => (P ? P(Q) : r.createElement(p.Provider, { value: Q }, x)),
              [x, Q, P]
            );
          return r.createElement(
            r.Fragment,
            null,
            null !== E && r.createElement('noscript', null, r.createElement('style', null, E)),
            r.createElement(
              'div',
              { ref: D, 'data-input-otp-container': !0, style: X, className: I },
              ee,
              r.createElement(
                'div',
                { style: { position: 'absolute', inset: 0, pointerEvents: 'none' } },
                Y
              )
            )
          );
        });
      function g(e, t) {
        try {
          e.insertRule(t);
        } catch (e) {
          console.error('input-otp could not insert CSS rule:', t);
        }
      }
      m.displayName = 'Input';
      var v = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
    },
    2125: function (e, t, n) {
      n.d(t, {
        L: function () {
          return w;
        },
      });
      var r = n(84711),
        i = n(79150),
        o = n(48141),
        a = n(84545),
        s = n(70935),
        c = n(88028);
      async function l({ hash: e, privateKey: t, to: n = 'object' }) {
        let {
            r: o,
            s: a,
            recovery: s,
          } = r.secp256k1.sign(e.slice(2), t.slice(2), { lowS: !0, extraEntropy: !1 }),
          l = {
            r: (0, i.eC)(o, { size: 32 }),
            s: (0, i.eC)(a, { size: 32 }),
            v: s ? 28n : 27n,
            yParity: s,
          };
        return 'bytes' === n || 'hex' === n ? (0, c.V)({ ...l, to: n }) : l;
      }
      var u = n(90461);
      async function d(e) {
        let { contractAddress: t, chainId: n, nonce: r, privateKey: i, to: o = 'object' } = e,
          a = await l({
            hash: (0, u.t)({ contractAddress: t, chainId: n, nonce: r }),
            privateKey: i,
            to: o,
          });
        return 'object' === o ? { contractAddress: t, chainId: n, nonce: r, ...a } : a;
      }
      var f = n(54886);
      async function h({ message: e, privateKey: t }) {
        return await l({ hash: (0, f.r)(e), privateKey: t, to: 'hex' });
      }
      var p = n(60977),
        m = n(97730);
      async function g(e) {
        let { privateKey: t, transaction: n, serializer: r = m.D } = e,
          i = 'eip4844' === n.type ? { ...n, sidecars: !1 } : n,
          o = await l({ hash: (0, p.w)(r(i)), privateKey: t });
        return r(n, o);
      }
      var v = n(3127);
      async function y(e) {
        let { privateKey: t, ...n } = e;
        return await l({ hash: (0, v.Jv)(n), privateKey: t, to: 'hex' });
      }
      function w(e, t = {}) {
        let { nonceManager: n } = t,
          c = (0, i.NC)(r.secp256k1.getPublicKey(e.slice(2), !1));
        return {
          ...(function (e) {
            if ('string' == typeof e) {
              if (!(0, a.U)(e, { strict: !1 })) throw new o.b({ address: e });
              return { address: e, type: 'json-rpc' };
            }
            if (!(0, a.U)(e.address, { strict: !1 })) throw new o.b({ address: e.address });
            return {
              address: e.address,
              nonceManager: e.nonceManager,
              sign: e.sign,
              experimental_signAuthorization: e.experimental_signAuthorization,
              signMessage: e.signMessage,
              signTransaction: e.signTransaction,
              signTypedData: e.signTypedData,
              source: 'custom',
              type: 'local',
            };
          })({
            address: (0, s.y)(c),
            nonceManager: n,
            sign: async ({ hash: t }) => l({ hash: t, privateKey: e, to: 'hex' }),
            experimental_signAuthorization: async (t) => d({ ...t, privateKey: e }),
            signMessage: async ({ message: t }) => h({ message: t, privateKey: e }),
            signTransaction: async (t, { serializer: n } = {}) =>
              g({ privateKey: e, transaction: t, serializer: n }),
            signTypedData: async (t) => y({ ...t, privateKey: e }),
          }),
          publicKey: c,
          source: 'privateKey',
        };
      }
    },
    79951: function (e, t, n) {
      n.d(t, {
        e: function () {
          return o;
        },
      });
      var r = n(39858),
        i = n(5929);
      function o(e) {
        let {
            batch: t,
            cacheTime: n = e.pollingInterval ?? 4e3,
            ccipRead: o,
            key: a = 'base',
            name: s = 'Base Client',
            pollingInterval: c = 4e3,
            type: l = 'base',
          } = e,
          u = e.chain,
          d = e.account ? (0, r.T)(e.account) : void 0,
          { config: f, request: h, value: p } = e.transport({ chain: u, pollingInterval: c }),
          m = {
            account: d,
            batch: t,
            cacheTime: n,
            ccipRead: o,
            chain: u,
            key: a,
            name: s,
            pollingInterval: c,
            request: h,
            transport: { ...f, ...p },
            type: l,
            uid: (0, i.h)(),
          };
        return Object.assign(m, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in m) delete r[e];
              let i = { ...t, ...r };
              return Object.assign(i, { extend: e(i) });
            };
          })(m),
        });
      }
    },
    54886: function (e, t, n) {
      n.d(t, {
        r: function () {
          return s;
        },
      });
      var r = n(60977),
        i = n(1155),
        o = n(99543),
        a = n(79150);
      function s(e, t) {
        return (0, r.w)(
          (function (e) {
            let t =
                'string' == typeof e
                  ? (0, a.$G)(e)
                  : 'string' == typeof e.raw
                    ? e.raw
                    : (0, a.ci)(e.raw),
              n = (0, a.$G)(`Ethereum Signed Message:
${(0, o.d)(t)}`);
            return (0, i.zo)([n, t]);
          })(e),
          t
        );
      }
    },
    3127: function (e, t, n) {
      n.d(t, {
        Jv: function () {
          return c;
        },
      });
      var r = n(26836),
        i = n(1155),
        o = n(79150),
        a = n(60977),
        s = n(52044);
      function c(e) {
        let { domain: t = {}, message: n, primaryType: r } = e,
          o = { EIP712Domain: (0, s.cj)({ domain: t }), ...e.types };
        (0, s.iC)({ domain: t, message: n, primaryType: r, types: o });
        let c = ['0x1901'];
        return (
          t &&
            c.push(
              (function ({ domain: e, types: t }) {
                return l({ data: e, primaryType: 'EIP712Domain', types: t });
              })({ domain: t, types: o })
            ),
          'EIP712Domain' !== r && c.push(l({ data: n, primaryType: r, types: o })),
          (0, a.w)((0, i.zo)(c))
        );
      }
      function l({ data: e, primaryType: t, types: n }) {
        let i = (function e({ data: t, primaryType: n, types: i }) {
          let s = [{ type: 'bytes32' }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, o.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let n = '',
                      r = (function e({ primaryType: t, types: n }, r = new Set()) {
                        let i = t.match(/^\w*/u),
                          o = i?.[0];
                        if (r.has(o) || void 0 === n[o]) return r;
                        for (let t of (r.add(o), n[o])) e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let i of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${i}(${t[i].map(({ name: e, type: t }) => `${t} ${e}`).join(',')})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, a.w)(n);
              })({ primaryType: n, types: i }),
            ];
          for (let l of i[n]) {
            let [n, u] = (function t({ types: n, name: i, type: s, value: c }) {
              if (void 0 !== n[s])
                return [{ type: 'bytes32' }, (0, a.w)(e({ data: c, primaryType: s, types: n }))];
              if ('bytes' === s) {
                let e = c.length % 2 ? '0' : '';
                return (c = `0x${e + c.slice(2)}`), [{ type: 'bytes32' }, (0, a.w)(c)];
              }
              if ('string' === s) return [{ type: 'bytes32' }, (0, a.w)((0, o.NC)(c))];
              if (s.lastIndexOf(']') === s.length - 1) {
                let e = s.slice(0, s.lastIndexOf('[')),
                  o = c.map((r) => t({ name: i, type: e, types: n, value: r }));
                return [
                  { type: 'bytes32' },
                  (0, a.w)(
                    (0, r.E)(
                      o.map(([e]) => e),
                      o.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: s }, c];
            })({ types: i, name: l.name, type: l.type, value: t[l.name] });
            s.push(n), c.push(u);
          }
          return (0, r.E)(s, c);
        })({ data: e, primaryType: t, types: n });
        return (0, a.w)(i);
      }
    },
    88028: function (e, t, n) {
      n.d(t, {
        V: function () {
          return a;
        },
      });
      var r = n(84711),
        i = n(37968),
        o = n(13990);
      function a({ r: e, s: t, to: n = 'hex', v: a, yParity: s }) {
        let c = (() => {
            if (0 === s || 1 === s) return s;
            if (a && (27n === a || 28n === a || a >= 35n)) return a % 2n === 0n ? 1 : 0;
            throw Error('Invalid `v` or `yParity` value');
          })(),
          l = `0x${new r.secp256k1.Signature((0, i.y_)(e), (0, i.y_)(t)).toCompactHex()}${0 === c ? '1b' : '1c'}`;
        return 'hex' === n ? l : (0, o.nr)(l);
      }
    },
    52044: function (e, t, n) {
      n.d(t, {
        cj: function () {
          return g;
        },
        H6: function () {
          return p;
        },
        iC: function () {
          return m;
        },
      });
      var r = n(6153),
        i = n(48141),
        o = n(45679),
        a = n(77854);
      class s extends a.G {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, o.P)(e)}".`, {
            metaMessages: ['Must be a valid EIP-712 domain.'],
          });
        }
      }
      class c extends a.G {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,
            {
              docsPath: '/api/glossary/Errors#typeddatainvalidprimarytypeerror',
              metaMessages: ['Check that the primary type is a key in `types`.'],
            }
          );
        }
      }
      class l extends a.G {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ['Struct type must not be a Solidity type.'],
            name: 'InvalidStructTypeError',
          });
        }
      }
      var u = n(84545),
        d = n(99543),
        f = n(79150),
        h = n(31517);
      function p(e) {
        let { domain: t, message: n, primaryType: r, types: i } = e,
          a = (e, t) => {
            let n = { ...t };
            for (let t of e) {
              let { name: e, type: r } = t;
              'address' === r && (n[e] = n[e].toLowerCase());
            }
            return n;
          },
          s = i.EIP712Domain && t ? a(i.EIP712Domain, t) : {},
          c = (() => {
            if ('EIP712Domain' !== r) return a(i[r], n);
          })();
        return (0, o.P)({ domain: s, message: c, primaryType: r, types: i });
      }
      function m(e) {
        let { domain: t, message: n, primaryType: o, types: a } = e,
          p = (e, t) => {
            for (let n of e) {
              let { name: e, type: o } = n,
                s = t[e],
                c = o.match(h.lh);
              if (c && ('number' == typeof s || 'bigint' == typeof s)) {
                let [e, t, n] = c;
                (0, f.eC)(s, { signed: 'int' === t, size: Number.parseInt(n) / 8 });
              }
              if ('address' === o && 'string' == typeof s && !(0, u.U)(s))
                throw new i.b({ address: s });
              let m = o.match(h.eL);
              if (m) {
                let [e, t] = m;
                if (t && (0, d.d)(s) !== Number.parseInt(t))
                  throw new r.KY({ expectedSize: Number.parseInt(t), givenSize: (0, d.d)(s) });
              }
              let g = a[o];
              g &&
                ((function (e) {
                  if (
                    'address' === e ||
                    'bool' === e ||
                    'string' === e ||
                    e.startsWith('bytes') ||
                    e.startsWith('uint') ||
                    e.startsWith('int')
                  )
                    throw new l({ type: e });
                })(o),
                p(g, s));
            }
          };
        if (a.EIP712Domain && t) {
          if ('object' != typeof t) throw new s({ domain: t });
          p(a.EIP712Domain, t);
        }
        if ('EIP712Domain' !== o) {
          if (a[o]) p(a[o], n);
          else throw new c({ primaryType: o, types: a });
        }
      }
      function g({ domain: e }) {
        return [
          'string' == typeof e?.name && { name: 'name', type: 'string' },
          e?.version && { name: 'version', type: 'string' },
          ('number' == typeof e?.chainId || 'bigint' == typeof e?.chainId) && {
            name: 'chainId',
            type: 'uint256',
          },
          e?.verifyingContract && { name: 'verifyingContract', type: 'address' },
          e?.salt && { name: 'salt', type: 'bytes32' },
        ].filter(Boolean);
      }
    },
  },
]);
