'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4235],
  {
    29662: function (e, t, r) {
      r.r(t),
        r.d(t, {
          EthereumProvider: function () {
            return A;
          },
          OPTIONAL_EVENTS: function () {
            return d;
          },
          OPTIONAL_METHODS: function () {
            return c;
          },
          REQUIRED_EVENTS: function () {
            return l;
          },
          REQUIRED_METHODS: function () {
            return a;
          },
          default: function () {
            return k;
          },
        });
      var n = r(17187),
        o = r(39639),
        i = r(46728),
        s = r(34155);
      const a = ['eth_sendTransaction', 'personal_sign'],
        c = [
          'eth_accounts',
          'eth_requestAccounts',
          'eth_sendRawTransaction',
          'eth_sign',
          'eth_signTransaction',
          'eth_signTypedData',
          'eth_signTypedData_v3',
          'eth_signTypedData_v4',
          'eth_sendTransaction',
          'personal_sign',
          'wallet_switchEthereumChain',
          'wallet_addEthereumChain',
          'wallet_getPermissions',
          'wallet_requestPermissions',
          'wallet_registerOnboarding',
          'wallet_watchAsset',
          'wallet_scanQRCode',
          'wallet_sendCalls',
          'wallet_getCapabilities',
          'wallet_getCallsStatus',
          'wallet_showCallsStatus',
        ],
        l = ['chainChanged', 'accountsChanged'],
        d = ['chainChanged', 'accountsChanged', 'message', 'disconnect', 'connect'];
      var u = Object.defineProperty,
        h = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        g = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        m = (e, t, r) =>
          t in e
            ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        v = (e, t) => {
          for (var r in t || (t = {})) f.call(t, r) && m(e, r, t[r]);
          if (g) for (var r of g(t)) w.call(t, r) && m(e, r, t[r]);
          return e;
        },
        b = (e, t) => h(e, p(t)),
        y = (e, t, r) => m(e, 'symbol' != typeof t ? t + '' : t, r);
      function C(e) {
        return Number(e[0].split(':')[1]);
      }
      function x(e) {
        return `0x${e.toString(16)}`;
      }
      class k {
        constructor() {
          y(this, 'events', new n.EventEmitter()),
            y(this, 'namespace', 'eip155'),
            y(this, 'accounts', []),
            y(this, 'signer'),
            y(this, 'chainId', 1),
            y(this, 'modal'),
            y(this, 'rpc'),
            y(this, 'STORAGE_KEY', 'wc@2:ethereum_provider:'),
            y(this, 'on', (e, t) => (this.events.on(e, t), this)),
            y(this, 'once', (e, t) => (this.events.once(e, t), this)),
            y(this, 'removeListener', (e, t) => (this.events.removeListener(e, t), this)),
            y(this, 'off', (e, t) => (this.events.off(e, t), this)),
            y(this, 'parseAccount', (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e
            ),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          const t = new k();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(e, this.formatChainId(this.chainId), t);
        }
        sendAsync(e, t, r) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r);
        }
        get connected() {
          return !!this.signer.client && this.signer.client.core.relayer.connected;
        }
        get connecting() {
          return !!this.signer.client && this.signer.client.core.relayer.connecting;
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: 'eth_requestAccounts' })
          );
        }
        async connect(e) {
          var t;
          if (!this.signer.client) throw new Error('Provider not initialized. Call init() first');
          this.loadConnectOpts(e);
          const { required: r, optional: n } = (function (e) {
            const {
              chains: t,
              optionalChains: r,
              methods: n,
              optionalMethods: i,
              events: s,
              optionalEvents: u,
              rpcMap: h,
            } = e;
            if (!(0, o.qt8)(t)) throw new Error('Invalid chains');
            const p = {
                chains: t,
                methods: n || a,
                events: s || l,
                rpcMap: v({}, t.length ? { [C(t)]: h[C(t)] } : {}),
              },
              g = s?.filter((e) => !l.includes(e)),
              f = n?.filter((e) => !a.includes(e));
            if (!r && !u && !i && (null == g || !g.length) && (null == f || !f.length))
              return { required: t.length ? p : void 0 };
            const w = {
              chains: [...new Set((g?.length && f?.length) || !r ? p.chains.concat(r || []) : r)],
              methods: [...new Set(p.methods.concat(null != i && i.length ? i : c))],
              events: [...new Set(p.events.concat(null != u && u.length ? u : d))],
              rpcMap: h,
            };
            return { required: t.length ? p : void 0, optional: r.length ? w : void 0 };
          })(this.rpc);
          try {
            const i = await new Promise(async (t, o) => {
              var i, s;
              this.rpc.showQrModal &&
                (null == (i = this.modal) || i.open(),
                null == (s = this.modal) ||
                  s.subscribeState((e) => {
                    !e.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      o(new Error('Connection request reset. Please try again.')));
                  }));
              const a =
                null != e && e.scopedProperties ? { [this.namespace]: e.scopedProperties } : void 0;
              await this.signer
                .connect(
                  b(
                    v(
                      { namespaces: v({}, r && { [this.namespace]: r }) },
                      n && { optionalNamespaces: { [this.namespace]: n } }
                    ),
                    { pairingTopic: e?.pairingTopic, scopedProperties: a }
                  )
                )
                .then((e) => {
                  t(e);
                })
                .catch((e) => {
                  var t;
                  null == (t = this.modal) || t.showErrorMessage('Unable to connect'),
                    o(new Error(e.message));
                });
            });
            if (!i) return;
            const s = (0, o.guN)(i.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
              this.setAccounts(s),
              this.events.emit('connect', { chainId: x(this.chainId) });
          } catch (i) {
            throw (this.signer.logger.error(i), i);
          } finally {
            null == (t = this.modal) || t.close();
          }
        }
        async authenticate(e, t) {
          var r;
          if (!this.signer.client) throw new Error('Provider not initialized. Call init() first');
          this.loadConnectOpts({ chains: e?.chains });
          try {
            const n = await new Promise(async (r, n) => {
                var o, i;
                this.rpc.showQrModal &&
                  (null == (o = this.modal) || o.open(),
                  null == (i = this.modal) ||
                    i.subscribeState((e) => {
                      !e.open &&
                        !this.signer.session &&
                        (this.signer.abortPairingAttempt(),
                        n(new Error('Connection request reset. Please try again.')));
                    })),
                  await this.signer
                    .authenticate(b(v({}, e), { chains: this.rpc.chains }), t)
                    .then((e) => {
                      r(e);
                    })
                    .catch((e) => {
                      var t;
                      null == (t = this.modal) || t.showErrorMessage('Unable to connect'),
                        n(new Error(e.message));
                    });
              }),
              i = n.session;
            if (i) {
              const e = (0, o.guN)(i.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit('connect', { chainId: x(this.chainId) });
            }
            return n;
          } catch (n) {
            throw (this.signer.logger.error(n), n);
          } finally {
            null == (r = this.modal) || r.close();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on('session_event', (e) => {
            const { params: t } = e,
              { event: r } = t;
            'accountsChanged' === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit('accountsChanged', this.accounts))
              : 'chainChanged' === r.name
                ? this.setChainId(this.formatChainId(r.data))
                : this.events.emit(r.name, r.data),
              this.events.emit('session_event', e);
          }),
            this.signer.on('accountsChanged', (e) => {
              (this.accounts = this.parseAccounts(e)),
                this.events.emit('accountsChanged', this.accounts);
            }),
            this.signer.on('chainChanged', (e) => {
              const t = parseInt(e);
              (this.chainId = t), this.events.emit('chainChanged', x(this.chainId)), this.persist();
            }),
            this.signer.on('session_update', (e) => {
              this.events.emit('session_update', e);
            }),
            this.signer.on('session_delete', (e) => {
              this.reset(),
                this.events.emit('session_delete', e),
                this.events.emit(
                  'disconnect',
                  b(v({}, (0, o.D6H)('USER_DISCONNECTED')), {
                    data: e.topic,
                    name: 'USER_DISCONNECTED',
                  })
                );
            }),
            this.signer.on('display_uri', (e) => {
              this.events.emit('display_uri', e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return 'string' == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(':')[1]);
        }
        setChainIds(e) {
          const t = e.filter((e) => this.isCompatibleChainId(e)).map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit('chainChanged', x(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          const [t, r, n] = e.split(':');
          return { chainId: `${t}:${r}`, address: n };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter((e) => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit('accountsChanged', this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          const n = null != (t = e?.chains) ? t : [],
            o = null != (r = e?.optionalChains) ? r : [],
            i = n.concat(o);
          if (!i.length)
            throw new Error('No chains specified in either `chains` or `optionalChains`');
          const s = n.length ? e?.methods || a : [],
            c = n.length ? e?.events || l : [],
            d = e?.optionalMethods || [],
            u = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(i, e.projectId),
            p = e?.qrModalOptions || void 0;
          return {
            chains: n?.map((e) => this.formatChainId(e)),
            optionalChains: o.map((e) => this.formatChainId(e)),
            methods: s,
            events: c,
            optionalMethods: d,
            optionalEvents: u,
            rpcMap: h,
            showQrModal: !(null == e || !e.showQrModal),
            qrModalOptions: p,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          const r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? C(this.rpc.chains)
              : C(this.rpc.optionalChains)),
            (this.signer = await i.k.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storage: e.storage,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
              logger: e.logger,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              const { createAppKit: t } = await Promise.resolve().then(function () {
                  return Sd;
                }),
                { convertWCMToAppKitOptions: r } = await Promise.resolve().then(function () {
                  return jd;
                }),
                n = r(
                  b(v({}, this.rpc.qrModalOptions), {
                    chains: [...new Set([...this.rpc.chains, ...this.rpc.optionalChains])],
                    metadata: this.rpc.metadata,
                    projectId: this.rpc.projectId,
                  })
                );
              if (!n.networks.length) throw new Error('No networks found for WalletConnect\xb7');
              e = t(b(v({}, n), { universalProvider: this.signer, manualWCControl: !0 }));
            } catch {
              throw new Error('To use QR modal, please install @reown/appkit package');
            }
            if (e)
              try {
                this.modal = e;
              } catch (t) {
                throw (
                  (this.signer.logger.error(t),
                  new Error('Could not generate WalletConnectModal Instance'))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          const { chains: t, optionalChains: r, rpcMap: n } = e;
          t &&
            (0, o.qt8)(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
            })),
            r &&
              (0, o.qt8)(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.org/v1/?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              const e = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                t = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts);
            } catch (e) {
              this.signer.logger.error('Failed to load persisted session, clearing state...'),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) => this.signer.logger.warn(e));
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
        }
        parseAccounts(e) {
          return 'string' == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      const A = k;
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
          ? window
          : typeof r.g < 'u'
            ? r.g
            : typeof self < 'u' && self;
      var E = { exports: {} };
      E.exports = (function () {
        var e = 1e3,
          t = 6e4,
          r = 36e5,
          n = 'millisecond',
          o = 'second',
          i = 'minute',
          s = 'hour',
          a = 'day',
          c = 'week',
          l = 'month',
          d = 'quarter',
          u = 'year',
          h = 'date',
          p = 'Invalid Date',
          g =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          w = {
            name: 'en',
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            months:
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
            ordinal: function (e) {
              var t = ['th', 'st', 'nd', 'rd'],
                r = e % 100;
              return '[' + e + (t[(r - 20) % 10] || t[r] || t[0]) + ']';
            },
          },
          m = function (e, t, r) {
            var n = String(e);
            return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(r) + e;
          },
          v = {
            s: m,
            z: function (e) {
              var t = -e.utcOffset(),
                r = Math.abs(t),
                n = Math.floor(r / 60),
                o = r % 60;
              return (t <= 0 ? '+' : '-') + m(n, 2, '0') + ':' + m(o, 2, '0');
            },
            m: function e(t, r) {
              if (t.date() < r.date()) return -e(r, t);
              var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                o = t.clone().add(n, l),
                i = r - o < 0,
                s = t.clone().add(n + (i ? -1 : 1), l);
              return +(-(n + (r - o) / (i ? o - s : s - o)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (e) {
              return (
                { M: l, y: u, w: c, d: a, D: h, h: s, m: i, s: o, ms: n, Q: d }[e] ||
                String(e || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          },
          b = 'en',
          y = {};
        y[b] = w;
        var C = '$isDayjsObject',
          x = function (e) {
            return e instanceof I || !(!e || !e[C]);
          },
          k = function e(t, r, n) {
            var o;
            if (!t) return b;
            if ('string' == typeof t) {
              var i = t.toLowerCase();
              y[i] && (o = i), r && ((y[i] = r), (o = i));
              var s = t.split('-');
              if (!o && s.length > 1) return e(s[0]);
            } else {
              var a = t.name;
              (y[a] = t), (o = a);
            }
            return !n && o && (b = o), o || (!n && b);
          },
          A = function (e, t) {
            if (x(e)) return e.clone();
            var r = 'object' == typeof t ? t : {};
            return (r.date = e), (r.args = arguments), new I(r);
          },
          E = v;
        (E.l = k),
          (E.i = x),
          (E.w = function (e, t) {
            return A(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          });
        var I = (function () {
            function w(e) {
              (this.$L = k(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[C] = !0);
            }
            var m = w.prototype;
            return (
              (m.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    r = e.utc;
                  if (null === t) return new Date(NaN);
                  if (E.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ('string' == typeof t && !/Z$/i.test(t)) {
                    var n = t.match(g);
                    if (n) {
                      var o = n[2] - 1 || 0,
                        i = (n[7] || '0').substring(0, 3);
                      return r
                        ? new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i))
                        : new Date(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i);
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init();
              }),
              (m.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (m.$utils = function () {
                return E;
              }),
              (m.isValid = function () {
                return this.$d.toString() !== p;
              }),
              (m.isSame = function (e, t) {
                var r = A(e);
                return this.startOf(t) <= r && r <= this.endOf(t);
              }),
              (m.isAfter = function (e, t) {
                return A(e) < this.startOf(t);
              }),
              (m.isBefore = function (e, t) {
                return this.endOf(t) < A(e);
              }),
              (m.$g = function (e, t, r) {
                return E.u(e) ? this[t] : this.set(r, e);
              }),
              (m.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (m.valueOf = function () {
                return this.$d.getTime();
              }),
              (m.startOf = function (e, t) {
                var r = this,
                  n = !!E.u(t) || t,
                  d = E.p(e),
                  p = function (e, t) {
                    var o = E.w(r.$u ? Date.UTC(r.$y, t, e) : new Date(r.$y, t, e), r);
                    return n ? o : o.endOf(a);
                  },
                  g = function (e, t) {
                    return E.w(
                      r
                        .toDate()
                        [e].apply(r.toDate('s'), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                      r
                    );
                  },
                  f = this.$W,
                  w = this.$M,
                  m = this.$D,
                  v = 'set' + (this.$u ? 'UTC' : '');
                switch (d) {
                  case u:
                    return n ? p(1, 0) : p(31, 11);
                  case l:
                    return n ? p(1, w) : p(0, w + 1);
                  case c:
                    var b = this.$locale().weekStart || 0,
                      y = (f < b ? f + 7 : f) - b;
                    return p(n ? m - y : m + (6 - y), w);
                  case a:
                  case h:
                    return g(v + 'Hours', 0);
                  case s:
                    return g(v + 'Minutes', 1);
                  case i:
                    return g(v + 'Seconds', 2);
                  case o:
                    return g(v + 'Milliseconds', 3);
                  default:
                    return this.clone();
                }
              }),
              (m.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (m.$set = function (e, t) {
                var r,
                  c = E.p(e),
                  d = 'set' + (this.$u ? 'UTC' : ''),
                  p = ((r = {}),
                  (r[a] = d + 'Date'),
                  (r[h] = d + 'Date'),
                  (r[l] = d + 'Month'),
                  (r[u] = d + 'FullYear'),
                  (r[s] = d + 'Hours'),
                  (r[i] = d + 'Minutes'),
                  (r[o] = d + 'Seconds'),
                  (r[n] = d + 'Milliseconds'),
                  r)[c],
                  g = c === a ? this.$D + (t - this.$W) : t;
                if (c === l || c === u) {
                  var f = this.clone().set(h, 1);
                  f.$d[p](g), f.init(), (this.$d = f.set(h, Math.min(this.$D, f.daysInMonth())).$d);
                } else p && this.$d[p](g);
                return this.init(), this;
              }),
              (m.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (m.get = function (e) {
                return this[E.p(e)]();
              }),
              (m.add = function (n, d) {
                var h,
                  p = this;
                n = Number(n);
                var g = E.p(d),
                  f = function (e) {
                    var t = A(p);
                    return E.w(t.date(t.date() + Math.round(e * n)), p);
                  };
                if (g === l) return this.set(l, this.$M + n);
                if (g === u) return this.set(u, this.$y + n);
                if (g === a) return f(1);
                if (g === c) return f(7);
                var w = ((h = {}), (h[i] = t), (h[s] = r), (h[o] = e), h)[g] || 1,
                  m = this.$d.getTime() + n * w;
                return E.w(m, this);
              }),
              (m.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (m.format = function (e) {
                var t = this,
                  r = this.$locale();
                if (!this.isValid()) return r.invalidDate || p;
                var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  o = E.z(this),
                  i = this.$H,
                  s = this.$m,
                  a = this.$M,
                  c = r.weekdays,
                  l = r.months,
                  d = r.meridiem,
                  u = function (e, r, o, i) {
                    return (e && (e[r] || e(t, n))) || o[r].slice(0, i);
                  },
                  h = function (e) {
                    return E.s(i % 12 || 12, e, '0');
                  },
                  g =
                    d ||
                    function (e, t, r) {
                      var n = e < 12 ? 'AM' : 'PM';
                      return r ? n.toLowerCase() : n;
                    };
                return n.replace(f, function (e, n) {
                  return (
                    n ||
                    (function (e) {
                      switch (e) {
                        case 'YY':
                          return String(t.$y).slice(-2);
                        case 'YYYY':
                          return E.s(t.$y, 4, '0');
                        case 'M':
                          return a + 1;
                        case 'MM':
                          return E.s(a + 1, 2, '0');
                        case 'MMM':
                          return u(r.monthsShort, a, l, 3);
                        case 'MMMM':
                          return u(l, a);
                        case 'D':
                          return t.$D;
                        case 'DD':
                          return E.s(t.$D, 2, '0');
                        case 'd':
                          return String(t.$W);
                        case 'dd':
                          return u(r.weekdaysMin, t.$W, c, 2);
                        case 'ddd':
                          return u(r.weekdaysShort, t.$W, c, 3);
                        case 'dddd':
                          return c[t.$W];
                        case 'H':
                          return String(i);
                        case 'HH':
                          return E.s(i, 2, '0');
                        case 'h':
                          return h(1);
                        case 'hh':
                          return h(2);
                        case 'a':
                          return g(i, s, !0);
                        case 'A':
                          return g(i, s, !1);
                        case 'm':
                          return String(s);
                        case 'mm':
                          return E.s(s, 2, '0');
                        case 's':
                          return String(t.$s);
                        case 'ss':
                          return E.s(t.$s, 2, '0');
                        case 'SSS':
                          return E.s(t.$ms, 3, '0');
                        case 'Z':
                          return o;
                      }
                      return null;
                    })(e) ||
                    o.replace(':', '')
                  );
                });
              }),
              (m.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (m.diff = function (n, h, p) {
                var g,
                  f = this,
                  w = E.p(h),
                  m = A(n),
                  v = (m.utcOffset() - this.utcOffset()) * t,
                  b = this - m,
                  y = function () {
                    return E.m(f, m);
                  };
                switch (w) {
                  case u:
                    g = y() / 12;
                    break;
                  case l:
                    g = y();
                    break;
                  case d:
                    g = y() / 3;
                    break;
                  case c:
                    g = (b - v) / 6048e5;
                    break;
                  case a:
                    g = (b - v) / 864e5;
                    break;
                  case s:
                    g = b / r;
                    break;
                  case i:
                    g = b / t;
                    break;
                  case o:
                    g = b / e;
                    break;
                  default:
                    g = b;
                }
                return p ? g : E.a(g);
              }),
              (m.daysInMonth = function () {
                return this.endOf(l).$D;
              }),
              (m.$locale = function () {
                return y[this.$L];
              }),
              (m.locale = function (e, t) {
                if (!e) return this.$L;
                var r = this.clone(),
                  n = k(e, t, !0);
                return n && (r.$L = n), r;
              }),
              (m.clone = function () {
                return E.w(this.$d, this);
              }),
              (m.toDate = function () {
                return new Date(this.valueOf());
              }),
              (m.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (m.toISOString = function () {
                return this.$d.toISOString();
              }),
              (m.toString = function () {
                return this.$d.toUTCString();
              }),
              w
            );
          })(),
          N = I.prototype;
        return (
          (A.prototype = N),
          [
            ['$ms', n],
            ['$s', o],
            ['$m', i],
            ['$H', s],
            ['$W', a],
            ['$M', l],
            ['$y', u],
            ['$D', h],
          ].forEach(function (e) {
            N[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (A.extend = function (e, t) {
            return e.$i || (e(t, I, A), (e.$i = !0)), A;
          }),
          (A.locale = k),
          (A.isDayjs = x),
          (A.unix = function (e) {
            return A(1e3 * e);
          }),
          (A.en = y[b]),
          (A.Ls = y),
          (A.p = {}),
          A
        );
      })();
      var I = E.exports,
        N = { exports: {} };
      !(function (e, t) {
        e.exports = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months:
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_'
            ),
          ordinal: function (e) {
            var t = ['th', 'st', 'nd', 'rd'],
              r = e % 100;
            return '[' + e + (t[(r - 20) % 10] || t[r] || t[0]) + ']';
          },
        };
      })(N);
      var S = N.exports,
        _ = { exports: {} };
      !(function (e, t) {
        e.exports = function (e, t, r) {
          e = e || {};
          var n = t.prototype,
            o = {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years',
            };
          function i(e, t, r, o) {
            return n.fromToBase(e, t, r, o);
          }
          (r.en.relativeTime = o),
            (n.fromToBase = function (t, n, i, s, a) {
              for (
                var c,
                  l,
                  d,
                  u = i.$locale().relativeTime || o,
                  h = e.thresholds || [
                    { l: 's', r: 44, d: 'second' },
                    { l: 'm', r: 89 },
                    { l: 'mm', r: 44, d: 'minute' },
                    { l: 'h', r: 89 },
                    { l: 'hh', r: 21, d: 'hour' },
                    { l: 'd', r: 35 },
                    { l: 'dd', r: 25, d: 'day' },
                    { l: 'M', r: 45 },
                    { l: 'MM', r: 10, d: 'month' },
                    { l: 'y', r: 17 },
                    { l: 'yy', d: 'year' },
                  ],
                  p = h.length,
                  g = 0;
                g < p;
                g += 1
              ) {
                var f = h[g];
                f.d && (c = s ? r(t).diff(i, f.d, !0) : i.diff(t, f.d, !0));
                var w = (e.rounding || Math.round)(Math.abs(c));
                if (((d = c > 0), w <= f.r || !f.r)) {
                  w <= 1 && g > 0 && (f = h[g - 1]);
                  var m = u[f.l];
                  a && (w = a('' + w)),
                    (l = 'string' == typeof m ? m.replace('%d', w) : m(w, n, f.l, d));
                  break;
                }
              }
              if (n) return l;
              var v = d ? u.future : u.past;
              return 'function' == typeof v ? v(l) : v.replace('%s', l);
            }),
            (n.to = function (e, t) {
              return i(e, t, this, !0);
            }),
            (n.from = function (e, t) {
              return i(e, t, this);
            });
          var s = function (e) {
            return e.$u ? r.utc() : r();
          };
          (n.toNow = function (e) {
            return this.to(s(this), e);
          }),
            (n.fromNow = function (e) {
              return this.from(s(this), e);
            });
        };
      })(_);
      var P = _.exports,
        T = { exports: {} };
      !(function (e, t) {
        e.exports = function (e, t, r) {
          r.updateLocale = function (e, t) {
            var n = r.Ls[e];
            if (n)
              return (
                (t ? Object.keys(t) : []).forEach(function (e) {
                  n[e] = t[e];
                }),
                n
              );
          };
        };
      })(T);
      var O = T.exports;
      I.extend(P), I.extend(O);
      const $ = {
        ...S,
        name: 'en-web3-modal',
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: '%d sec',
          m: '1 min',
          mm: '%d min',
          h: '1 hr',
          hh: '%d hrs',
          d: '1 d',
          dd: '%d d',
          M: '1 mo',
          MM: '%d mo',
          y: '1 yr',
          yy: '%d yr',
        },
      };
      I.locale('en-web3-modal', $);
      const R = {
        caipNetworkIdToNumber: (e) => (e ? Number(e.split(':')[1]) : void 0),
        parseEvmChainId(e) {
          return 'string' == typeof e ? this.caipNetworkIdToNumber(e) : e;
        },
        getNetworksByNamespace: (e, t) => e?.filter((e) => e.chainNamespace === t) || [],
        getFirstNetworkByNamespace(e, t) {
          return this.getNetworksByNamespace(e, t)[0];
        },
      };
      var B = 1e6,
        L = 1e6,
        U = '[big.js] ',
        M = U + 'Invalid ',
        z = M + 'decimal places',
        j = U + 'Division by zero',
        D = {},
        W = void 0,
        H = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function F(e, t, r, n) {
        var o = e.c;
        if ((r === W && (r = e.constructor.RM), 0 !== r && 1 !== r && 2 !== r && 3 !== r))
          throw Error('[big.js] Invalid rounding mode');
        if (t < 1)
          (n =
            (3 === r && (n || !!o[0])) ||
            (0 === t &&
              ((1 === r && o[0] >= 5) ||
                (2 === r && (o[0] > 5 || (5 === o[0] && (n || o[1] !== W))))))),
            (o.length = 1),
            n ? ((e.e = e.e - t + 1), (o[0] = 1)) : (o[0] = e.e = 0);
        else if (t < o.length) {
          if (
            ((n =
              (1 === r && o[t] >= 5) ||
              (2 === r && (o[t] > 5 || (5 === o[t] && (n || o[t + 1] !== W || 1 & o[t - 1])))) ||
              (3 === r && (n || !!o[0]))),
            (o.length = t),
            n)
          )
            for (; ++o[--t] > 9; )
              if (((o[t] = 0), 0 === t)) {
                ++e.e, o.unshift(1);
                break;
              }
          for (t = o.length; !o[--t]; ) o.pop();
        }
        return e;
      }
      function V(e, t, r) {
        var n = e.e,
          o = e.c.join(''),
          i = o.length;
        if (t) o = o.charAt(0) + (i > 1 ? '.' + o.slice(1) : '') + (n < 0 ? 'e' : 'e+') + n;
        else if (n < 0) {
          for (; ++n; ) o = '0' + o;
          o = '0.' + o;
        } else if (n > 0)
          if (++n > i) for (n -= i; n--; ) o += '0';
          else n < i && (o = o.slice(0, n) + '.' + o.slice(n));
        else i > 1 && (o = o.charAt(0) + '.' + o.slice(1));
        return e.s < 0 && r ? '-' + o : o;
      }
      (D.abs = function () {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (D.cmp = function (e) {
          var t,
            r = this,
            n = r.c,
            o = (e = new r.constructor(e)).c,
            i = r.s,
            s = e.s,
            a = r.e,
            c = e.e;
          if (!n[0] || !o[0]) return n[0] ? i : o[0] ? -s : 0;
          if (i != s) return i;
          if (((t = i < 0), a != c)) return (a > c) ^ t ? 1 : -1;
          for (s = (a = n.length) < (c = o.length) ? a : c, i = -1; ++i < s; )
            if (n[i] != o[i]) return (n[i] > o[i]) ^ t ? 1 : -1;
          return a == c ? 0 : (a > c) ^ t ? 1 : -1;
        }),
        (D.div = function (e) {
          var t = this,
            r = t.constructor,
            n = t.c,
            o = (e = new r(e)).c,
            i = t.s == e.s ? 1 : -1,
            s = r.DP;
          if (s !== ~~s || s < 0 || s > B) throw Error(z);
          if (!o[0]) throw Error(j);
          if (!n[0]) return (e.s = i), (e.c = [(e.e = 0)]), e;
          var a,
            c,
            l,
            d,
            u,
            h = o.slice(),
            p = (a = o.length),
            g = n.length,
            f = n.slice(0, a),
            w = f.length,
            m = e,
            v = (m.c = []),
            b = 0,
            y = s + (m.e = t.e - e.e) + 1;
          for (m.s = i, i = y < 0 ? 0 : y, h.unshift(0); w++ < a; ) f.push(0);
          do {
            for (l = 0; l < 10; l++) {
              if (a != (w = f.length)) d = a > w ? 1 : -1;
              else
                for (u = -1, d = 0; ++u < a; )
                  if (o[u] != f[u]) {
                    d = o[u] > f[u] ? 1 : -1;
                    break;
                  }
              if (!(d < 0)) break;
              for (c = w == a ? o : h; w; ) {
                if (f[--w] < c[w]) {
                  for (u = w; u && !f[--u]; ) f[u] = 9;
                  --f[u], (f[w] += 10);
                }
                f[w] -= c[w];
              }
              for (; !f[0]; ) f.shift();
            }
            (v[b++] = d ? l : ++l), f[0] && d ? (f[w] = n[p] || 0) : (f = [n[p]]);
          } while ((p++ < g || f[0] !== W) && i--);
          return !v[0] && 1 != b && (v.shift(), m.e--, y--), b > y && F(m, y, r.RM, f[0] !== W), m;
        }),
        (D.eq = function (e) {
          return 0 === this.cmp(e);
        }),
        (D.gt = function (e) {
          return this.cmp(e) > 0;
        }),
        (D.gte = function (e) {
          return this.cmp(e) > -1;
        }),
        (D.lt = function (e) {
          return this.cmp(e) < 0;
        }),
        (D.lte = function (e) {
          return this.cmp(e) < 1;
        }),
        (D.minus = D.sub =
          function (e) {
            var t,
              r,
              n,
              o,
              i = this,
              s = i.constructor,
              a = i.s,
              c = (e = new s(e)).s;
            if (a != c) return (e.s = -c), i.plus(e);
            var l = i.c.slice(),
              d = i.e,
              u = e.c,
              h = e.e;
            if (!l[0] || !u[0]) return u[0] ? (e.s = -c) : l[0] ? (e = new s(i)) : (e.s = 1), e;
            if ((a = d - h)) {
              for (
                (o = a < 0) ? ((a = -a), (n = l)) : ((h = d), (n = u)), n.reverse(), c = a;
                c--;

              )
                n.push(0);
              n.reverse();
            } else
              for (r = ((o = l.length < u.length) ? l : u).length, a = c = 0; c < r; c++)
                if (l[c] != u[c]) {
                  o = l[c] < u[c];
                  break;
                }
            if (
              (o && ((n = l), (l = u), (u = n), (e.s = -e.s)),
              (c = (r = u.length) - (t = l.length)) > 0)
            )
              for (; c--; ) l[t++] = 0;
            for (c = t; r > a; ) {
              if (l[--r] < u[r]) {
                for (t = r; t && !l[--t]; ) l[t] = 9;
                --l[t], (l[r] += 10);
              }
              l[r] -= u[r];
            }
            for (; 0 === l[--c]; ) l.pop();
            for (; 0 === l[0]; ) l.shift(), --h;
            return l[0] || ((e.s = 1), (l = [(h = 0)])), (e.c = l), (e.e = h), e;
          }),
        (D.mod = function (e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.s,
            i = (e = new n(e)).s;
          if (!e.c[0]) throw Error(j);
          return (
            (r.s = e.s = 1),
            (t = 1 == e.cmp(r)),
            (r.s = o),
            (e.s = i),
            t
              ? new n(r)
              : ((o = n.DP),
                (i = n.RM),
                (n.DP = n.RM = 0),
                (r = r.div(e)),
                (n.DP = o),
                (n.RM = i),
                this.minus(r.times(e)))
          );
        }),
        (D.neg = function () {
          var e = new this.constructor(this);
          return (e.s = -e.s), e;
        }),
        (D.plus = D.add =
          function (e) {
            var t,
              r,
              n,
              o = this,
              i = o.constructor;
            if (((e = new i(e)), o.s != e.s)) return (e.s = -e.s), o.minus(e);
            var s = o.e,
              a = o.c,
              c = e.e,
              l = e.c;
            if (!a[0] || !l[0]) return l[0] || (a[0] ? (e = new i(o)) : (e.s = o.s)), e;
            if (((a = a.slice()), (t = s - c))) {
              for (t > 0 ? ((c = s), (n = l)) : ((t = -t), (n = a)), n.reverse(); t--; ) n.push(0);
              n.reverse();
            }
            for (
              a.length - l.length < 0 && ((n = l), (l = a), (a = n)), t = l.length, r = 0;
              t;
              a[t] %= 10
            )
              r = ((a[--t] = a[t] + l[t] + r) / 10) | 0;
            for (r && (a.unshift(r), ++c), t = a.length; 0 === a[--t]; ) a.pop();
            return (e.c = a), (e.e = c), e;
          }),
        (D.pow = function (e) {
          var t = this,
            r = new t.constructor('1'),
            n = r,
            o = e < 0;
          if (e !== ~~e || e < -L || e > L) throw Error(M + 'exponent');
          for (o && (e = -e); 1 & e && (n = n.times(t)), (e >>= 1); ) t = t.times(t);
          return o ? r.div(n) : n;
        }),
        (D.prec = function (e, t) {
          if (e !== ~~e || e < 1 || e > B) throw Error(M + 'precision');
          return F(new this.constructor(this), e, t);
        }),
        (D.round = function (e, t) {
          if (e === W) e = 0;
          else if (e !== ~~e || e < -B || e > B) throw Error(z);
          return F(new this.constructor(this), e + this.e + 1, t);
        }),
        (D.sqrt = function () {
          var e,
            t,
            r,
            n = this,
            o = n.constructor,
            i = n.s,
            s = n.e,
            a = new o('0.5');
          if (!n.c[0]) return new o(n);
          if (i < 0) throw Error(U + 'No square root');
          0 === (i = Math.sqrt(+V(n, !0, !0))) || i === 1 / 0
            ? (((t = n.c.join('')).length + s) & 1 || (t += '0'),
              (s = (((s + 1) / 2) | 0) - (s < 0 || 1 & s)),
              (e = new o(
                ((i = Math.sqrt(t)) == 1 / 0
                  ? '5e'
                  : (i = i.toExponential()).slice(0, i.indexOf('e') + 1)) + s
              )))
            : (e = new o(i + '')),
            (s = e.e + (o.DP += 4));
          do {
            (r = e), (e = a.times(r.plus(n.div(r))));
          } while (r.c.slice(0, s).join('') !== e.c.slice(0, s).join(''));
          return F(e, (o.DP -= 4) + e.e + 1, o.RM);
        }),
        (D.times = D.mul =
          function (e) {
            var t,
              r = this,
              n = r.constructor,
              o = r.c,
              i = (e = new n(e)).c,
              s = o.length,
              a = i.length,
              c = r.e,
              l = e.e;
            if (((e.s = r.s == e.s ? 1 : -1), !o[0] || !i[0])) return (e.c = [(e.e = 0)]), e;
            for (
              e.e = c + l,
                s < a && ((t = o), (o = i), (i = t), (l = s), (s = a), (a = l)),
                t = new Array((l = s + a));
              l--;

            )
              t[l] = 0;
            for (c = a; c--; ) {
              for (a = 0, l = s + c; l > c; )
                (a = t[l] + i[c] * o[l - c - 1] + a), (t[l--] = a % 10), (a = (a / 10) | 0);
              t[l] = a;
            }
            for (a ? ++e.e : t.shift(), c = t.length; !t[--c]; ) t.pop();
            return (e.c = t), e;
          }),
        (D.toExponential = function (e, t) {
          var r = this,
            n = r.c[0];
          if (e !== W) {
            if (e !== ~~e || e < 0 || e > B) throw Error(z);
            for (r = F(new r.constructor(r), ++e, t); r.c.length < e; ) r.c.push(0);
          }
          return V(r, !0, !!n);
        }),
        (D.toFixed = function (e, t) {
          var r = this,
            n = r.c[0];
          if (e !== W) {
            if (e !== ~~e || e < 0 || e > B) throw Error(z);
            for (e = e + (r = F(new r.constructor(r), e + r.e + 1, t)).e + 1; r.c.length < e; )
              r.c.push(0);
          }
          return V(r, !1, !!n);
        }),
        (D[Symbol.for('nodejs.util.inspect.custom')] =
          D.toJSON =
          D.toString =
            function () {
              var e = this,
                t = e.constructor;
              return V(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
            }),
        (D.toNumber = function () {
          var e = +V(this, !0, !0);
          if (!0 === this.constructor.strict && !this.eq(e.toString()))
            throw Error(U + 'Imprecise conversion');
          return e;
        }),
        (D.toPrecision = function (e, t) {
          var r = this,
            n = r.constructor,
            o = r.c[0];
          if (e !== W) {
            if (e !== ~~e || e < 1 || e > B) throw Error(M + 'precision');
            for (r = F(new n(r), e, t); r.c.length < e; ) r.c.push(0);
          }
          return V(r, e <= r.e || r.e <= n.NE || r.e >= n.PE, !!o);
        }),
        (D.valueOf = function () {
          var e = this,
            t = e.constructor;
          if (!0 === t.strict) throw Error(U + 'valueOf disallowed');
          return V(e, e.e <= t.NE || e.e >= t.PE, !0);
        });
      var q = (function e() {
        function t(r) {
          var n = this;
          if (!(n instanceof t)) return r === W ? e() : new t(r);
          if (r instanceof t) (n.s = r.s), (n.e = r.e), (n.c = r.c.slice());
          else {
            if ('string' != typeof r) {
              if (!0 === t.strict && 'bigint' != typeof r) throw TypeError(M + 'value');
              r = 0 === r && 1 / r < 0 ? '-0' : String(r);
            }
            !(function (e, t) {
              var r, n, o;
              if (!H.test(t)) throw Error(M + 'number');
              for (
                e.s = '-' == t.charAt(0) ? ((t = t.slice(1)), -1) : 1,
                  (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
                  (n = t.search(/e/i)) > 0
                    ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
                    : r < 0 && (r = t.length),
                  o = t.length,
                  n = 0;
                n < o && '0' == t.charAt(n);

              )
                ++n;
              if (n == o) e.c = [(e.e = 0)];
              else {
                for (; o > 0 && '0' == t.charAt(--o); );
                for (e.e = r - n - 1, e.c = [], r = 0; n <= o; ) e.c[r++] = +t.charAt(n++);
              }
            })(n, r);
          }
          n.constructor = t;
        }
        return (
          (t.prototype = D),
          (t.DP = 20),
          (t.RM = 1),
          (t.NE = -7),
          (t.PE = 21),
          (t.strict = false),
          (t.roundDown = 0),
          (t.roundHalfUp = 1),
          (t.roundHalfEven = 2),
          (t.roundUp = 3),
          t
        );
      })();
      const Z = {
          bigNumber: (e) => new q(e || 0),
          multiply(e, t) {
            if (void 0 === e || void 0 === t) return new q(0);
            const r = new q(e),
              n = new q(t);
            return r.times(n);
          },
          formatNumberToLocalString: (e, t = 2) =>
            void 0 === e
              ? '0.00'
              : 'number' == typeof e
                ? e.toLocaleString('en-US', { maximumFractionDigits: t, minimumFractionDigits: t })
                : parseFloat(e).toLocaleString('en-US', {
                    maximumFractionDigits: t,
                    minimumFractionDigits: t,
                  }),
          parseLocalStringToNumber: (e) => (void 0 === e ? 0 : parseFloat(e.replace(/,/gu, ''))),
        },
        G = [
          {
            type: 'function',
            name: 'transfer',
            stateMutability: 'nonpayable',
            inputs: [
              { name: '_to', type: 'address' },
              { name: '_value', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
          {
            type: 'function',
            name: 'transferFrom',
            stateMutability: 'nonpayable',
            inputs: [
              { name: '_from', type: 'address' },
              { name: '_to', type: 'address' },
              { name: '_value', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
        ],
        K = [
          {
            type: 'function',
            name: 'transfer',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [],
          },
          {
            type: 'function',
            name: 'transferFrom',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'sender', type: 'address' },
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bool' }],
          },
        ],
        Y = {
          WC_NAME_SUFFIX: '.reown.id',
          WC_NAME_SUFFIX_LEGACY: '.wcn.id',
          BLOCKCHAIN_API_RPC_URL: 'https://rpc.walletconnect.org',
          PULSE_API_URL: 'https://pulse.walletconnect.org',
          W3M_API_URL: 'https://api.web3modal.org',
          CONNECTOR_ID: {
            WALLET_CONNECT: 'walletConnect',
            INJECTED: 'injected',
            WALLET_STANDARD: 'announced',
            COINBASE: 'coinbaseWallet',
            COINBASE_SDK: 'coinbaseWalletSDK',
            SAFE: 'safe',
            LEDGER: 'ledger',
            OKX: 'okx',
            EIP6963: 'eip6963',
            AUTH: 'ID_AUTH',
          },
          CONNECTOR_NAMES: { AUTH: 'Auth' },
          AUTH_CONNECTOR_SUPPORTED_CHAINS: ['eip155', 'solana'],
          LIMITS: { PENDING_TRANSACTIONS: 99 },
          CHAIN: { EVM: 'eip155', SOLANA: 'solana', POLKADOT: 'polkadot', BITCOIN: 'bip122' },
          CHAIN_NAME_MAP: {
            eip155: 'EVM Networks',
            solana: 'Solana',
            polkadot: 'Polkadot',
            bip122: 'Bitcoin',
          },
          ADAPTER_TYPES: {
            BITCOIN: 'bitcoin',
            SOLANA: 'solana',
            WAGMI: 'wagmi',
            ETHERS: 'ethers',
            ETHERS5: 'ethers5',
          },
          USDT_CONTRACT_ADDRESSES: [
            '0xdac17f958d2ee523a2206206994597c13d831ec7',
            '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
            '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
            '0x919C1c267BC06a7039e03fcc2eF738525769109c',
            '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
            '0x55d398326f99059fF775485246999027B3197955',
            '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
          ],
          HTTP_STATUS_CODES: { SERVICE_UNAVAILABLE: 503, FORBIDDEN: 403 },
          UNSUPPORTED_NETWORK_NAME: 'Unknown Network',
        },
        X = (e) => (Y.USDT_CONTRACT_ADDRESSES.includes(e) ? K : G),
        J = {
          validateCaipAddress(e) {
            if (3 !== e.split(':')?.length) throw new Error('Invalid CAIP Address');
            return e;
          },
          parseCaipAddress(e) {
            const t = e.split(':');
            if (3 !== t.length) throw new Error(`Invalid CAIP-10 address: ${e}`);
            const [r, n, o] = t;
            if (!r || !n || !o) throw new Error(`Invalid CAIP-10 address: ${e}`);
            return { chainNamespace: r, chainId: n, address: o };
          },
          parseCaipNetworkId(e) {
            const t = e.split(':');
            if (2 !== t.length) throw new Error(`Invalid CAIP-2 network id: ${e}`);
            const [r, n] = t;
            if (!r || !n) throw new Error(`Invalid CAIP-2 network id: ${e}`);
            return { chainNamespace: r, chainId: n };
          },
        },
        Q = '@appkit/active_caip_network_id',
        ee = '@appkit/connected_social',
        te = '@appkit-wallet/SOCIAL_USERNAME',
        re = '@appkit/recent_wallets',
        ne = 'WALLETCONNECT_DEEPLINK_CHOICE',
        oe = '@appkit/active_namespace',
        ie = '@appkit/connected_namespaces',
        se = '@appkit/connection_status',
        ae = '@appkit/social_provider',
        ce = '@appkit/native_balance_cache',
        le = '@appkit/portfolio_cache',
        de = '@appkit/ens_cache',
        ue = '@appkit/identity_cache',
        he = '@appkit/preferred_account_types';
      function pe(e) {
        if (!e) throw new Error('Namespace is required for CONNECTED_CONNECTOR_ID');
        return `@appkit/${e}:connected_connector_id`;
      }
      const ge = {
        setItem(e, t) {
          fe() && void 0 !== t && localStorage.setItem(e, t);
        },
        getItem(e) {
          if (fe()) return localStorage.getItem(e) || void 0;
        },
        removeItem(e) {
          fe() && localStorage.removeItem(e);
        },
        clear() {
          fe() && localStorage.clear();
        },
      };
      function fe() {
        return typeof window < 'u' && typeof localStorage < 'u';
      }
      function we(e, t) {
        return 'light' === t
          ? {
              '--w3m-accent': e?.['--w3m-accent'] || 'hsla(231, 100%, 70%, 1)',
              '--w3m-background': '#fff',
            }
          : {
              '--w3m-accent': e?.['--w3m-accent'] || 'hsla(230, 100%, 67%, 1)',
              '--w3m-background': '#121313',
            };
      }
      const me = Symbol(),
        ve = Object.getPrototypeOf,
        be = new WeakMap(),
        ye = (e) =>
          (((e) =>
            e && (be.has(e) ? be.get(e) : ve(e) === Object.prototype || ve(e) === Array.prototype))(
            e
          ) &&
            e[me]) ||
          null,
        Ce = (e, t = !0) => {
          be.set(e, t);
        },
        xe = (e) => 'object' == typeof e && null !== e,
        ke = new WeakMap(),
        Ae = new WeakSet(),
        [Ee] = ((
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          r = (e) =>
            xe(e) &&
            !Ae.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          n = (e) => {
            switch (e.status) {
              case 'fulfilled':
                return e.value;
              case 'rejected':
                throw e.reason;
              default:
                throw e;
            }
          },
          o = new WeakMap(),
          i = (e, t, r = n) => {
            const s = o.get(e);
            if (s?.[0] === t) return s[1];
            const a = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
            return (
              Ce(a, !0),
              o.set(e, [t, a]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(a, t)) return;
                const n = Reflect.get(e, t),
                  { enumerable: o } = Reflect.getOwnPropertyDescriptor(e, t),
                  s = { value: n, enumerable: o, configurable: !0 };
                if (Ae.has(n)) Ce(n, !1);
                else if (n instanceof Promise) delete s.value, (s.get = () => r(n));
                else if (ke.has(n)) {
                  const [e, t] = ke.get(n);
                  s.value = i(e, t(), r);
                }
                Object.defineProperty(a, t, s);
              }),
              Object.preventExtensions(a)
            );
          },
          s = new WeakMap(),
          a = [1, 1],
          c = (n) => {
            if (!xe(n)) throw new Error('object required');
            const o = s.get(n);
            if (o) return o;
            let l = a[0];
            const d = new Set(),
              u = (e, t = ++a[0]) => {
                l !== t && ((l = t), d.forEach((r) => r(e, t)));
              };
            let h = a[1];
            const p = (e) => (t, r) => {
                const n = [...t];
                (n[1] = [e, ...n[1]]), u(n, r);
              },
              g = new Map(),
              f = (e) => {
                var t;
                const r = g.get(e);
                r && (g.delete(e), null == (t = r[1]) || t.call(r));
              },
              w = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n)),
              m = t(w, {
                deleteProperty(e, t) {
                  const r = Reflect.get(e, t);
                  f(t);
                  const n = Reflect.deleteProperty(e, t);
                  return n && u(['delete', [t], r]), n;
                },
                set(t, n, o, i) {
                  const a = Reflect.has(t, n),
                    l = Reflect.get(t, n, i);
                  if (a && (e(l, o) || (s.has(o) && e(l, s.get(o))))) return !0;
                  f(n), xe(o) && (o = ye(o) || o);
                  let h = o;
                  if (o instanceof Promise)
                    o.then((e) => {
                      (o.status = 'fulfilled'), (o.value = e), u(['resolve', [n], e]);
                    }).catch((e) => {
                      (o.status = 'rejected'), (o.reason = e), u(['reject', [n], e]);
                    });
                  else {
                    !ke.has(o) && r(o) && (h = c(o));
                    const e = !Ae.has(h) && ke.get(h);
                    e &&
                      ((e, t) => {
                        if (g.has(e)) throw new Error('prop listener already exists');
                        if (d.size) {
                          const r = t[3](p(e));
                          g.set(e, [t, r]);
                        } else g.set(e, [t]);
                      })(n, e);
                  }
                  return Reflect.set(t, n, h, i), u(['set', [n], o, l]), !0;
                },
              });
            s.set(n, m);
            const v = [
              w,
              (e = ++a[1]) => (
                h !== e &&
                  !d.size &&
                  ((h = e),
                  g.forEach(([t]) => {
                    const r = t[1](e);
                    r > l && (l = r);
                  })),
                l
              ),
              i,
              (e) => (
                d.add(e),
                1 === d.size &&
                  g.forEach(([e, t], r) => {
                    if (t) throw new Error('remove already exists');
                    const n = e[3](p(r));
                    g.set(r, [e, n]);
                  }),
                () => {
                  d.delete(e),
                    0 === d.size &&
                      g.forEach(([e, t], r) => {
                        t && (t(), g.set(r, [e]));
                      });
                }
              ),
            ];
            return (
              ke.set(m, v),
              Reflect.ownKeys(n).forEach((e) => {
                const t = Object.getOwnPropertyDescriptor(n, e);
                'value' in t && ((m[e] = n[e]), delete t.value, delete t.writable),
                  Object.defineProperty(w, e, t);
              }),
              m
            );
          }
        ) => [c, ke, Ae, e, t, r, n, o, i, s, a])();
      function Ie(e = {}) {
        return Ee(e);
      }
      function Ne(e, t, r) {
        const n = ke.get(e);
        let o;
        !n && console.warn('Please use proxy object');
        const i = [],
          s = n[3];
        let a = !1;
        const c = s((e) => {
          i.push(e),
            r
              ? t(i.splice(0))
              : o ||
                (o = Promise.resolve().then(() => {
                  (o = void 0), a && t(i.splice(0));
                }));
        });
        return (
          (a = !0),
          () => {
            (a = !1), c();
          }
        );
      }
      function Se(e, t) {
        const r = ke.get(e);
        !r && console.warn('Please use proxy object');
        const [n, o, i] = r;
        return i(n, o(), t);
      }
      function _e(e) {
        return Ae.add(e), e;
      }
      function Pe(e, t, r, n) {
        let o = e[t];
        return Ne(
          e,
          () => {
            const n = e[t];
            Object.is(o, n) || r((o = n));
          },
          n
        );
      }
      const Te =
          (typeof s < 'u' && typeof s.env < 'u' ? s.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) ||
          'https://secure.walletconnect.org',
        Oe = {
          FOUR_MINUTES_MS: 24e4,
          TEN_SEC_MS: 1e4,
          FIVE_SEC_MS: 5e3,
          THREE_SEC_MS: 3e3,
          ONE_SEC_MS: 1e3,
          SECURE_SITE: Te,
          SECURE_SITE_DASHBOARD: `${Te}/dashboard`,
          SECURE_SITE_FAVICON: `${Te}/images/favicon.png`,
          RESTRICTED_TIMEZONES: [
            'ASIA/SHANGHAI',
            'ASIA/URUMQI',
            'ASIA/CHONGQING',
            'ASIA/HARBIN',
            'ASIA/KASHGAR',
            'ASIA/MACAU',
            'ASIA/HONG_KONG',
            'ASIA/MACAO',
            'ASIA/BEIJING',
            'ASIA/HARBIN',
          ],
          WC_COINBASE_PAY_SDK_CHAINS: [
            'ethereum',
            'arbitrum',
            'polygon',
            'berachain',
            'avalanche-c-chain',
            'optimism',
            'celo',
            'base',
          ],
          WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: 'ethereum',
          WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
            Ethereum: 'ethereum',
            'Arbitrum One': 'arbitrum',
            Polygon: 'polygon',
            Berachain: 'berachain',
            Avalanche: 'avalanche-c-chain',
            'OP Mainnet': 'optimism',
            Celo: 'celo',
            Base: 'base',
          },
          WC_COINBASE_ONRAMP_APP_ID: 'bf18c88d-495a-463b-b249-0b9d3656cf5e',
          SWAP_SUGGESTED_TOKENS: [
            'ETH',
            'UNI',
            '1INCH',
            'AAVE',
            'SOL',
            'ADA',
            'AVAX',
            'DOT',
            'LINK',
            'NITRO',
            'GAIA',
            'MILK',
            'TRX',
            'NEAR',
            'GNO',
            'WBTC',
            'DAI',
            'WETH',
            'USDC',
            'USDT',
            'ARB',
            'BAL',
            'BICO',
            'CRV',
            'ENS',
            'MATIC',
            'OP',
          ],
          SWAP_POPULAR_TOKENS: [
            'ETH',
            'UNI',
            '1INCH',
            'AAVE',
            'SOL',
            'ADA',
            'AVAX',
            'DOT',
            'LINK',
            'NITRO',
            'GAIA',
            'MILK',
            'TRX',
            'NEAR',
            'GNO',
            'WBTC',
            'DAI',
            'WETH',
            'USDC',
            'USDT',
            'ARB',
            'BAL',
            'BICO',
            'CRV',
            'ENS',
            'MATIC',
            'OP',
            'METAL',
            'DAI',
            'CHAMP',
            'WOLF',
            'SALE',
            'BAL',
            'BUSD',
            'MUST',
            'BTCpx',
            'ROUTE',
            'HEX',
            'WELT',
            'amDAI',
            'VSQ',
            'VISION',
            'AURUM',
            'pSP',
            'SNX',
            'VC',
            'LINK',
            'CHP',
            'amUSDT',
            'SPHERE',
            'FOX',
            'GIDDY',
            'GFC',
            'OMEN',
            'OX_OLD',
            'DE',
            'WNT',
          ],
          BALANCE_SUPPORTED_CHAINS: ['eip155', 'solana'],
          SWAP_SUPPORTED_NETWORKS: [
            'eip155:1',
            'eip155:42161',
            'eip155:10',
            'eip155:324',
            'eip155:8453',
            'eip155:56',
            'eip155:137',
            'eip155:100',
            'eip155:43114',
            'eip155:250',
            'eip155:8217',
            'eip155:1313161554',
          ],
          NAMES_SUPPORTED_CHAIN_NAMESPACES: ['eip155'],
          ONRAMP_SUPPORTED_CHAIN_NAMESPACES: ['eip155', 'solana'],
          ACTIVITY_ENABLED_CHAIN_NAMESPACES: ['eip155'],
          NATIVE_TOKEN_ADDRESS: {
            eip155: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            solana: 'So11111111111111111111111111111111111111111',
            polkadot: '0x',
            bip122: '0x',
          },
          CONVERT_SLIPPAGE_TOLERANCE: 1,
          CONNECT_LABELS: { MOBILE: 'Open and continue in a new browser tab' },
          DEFAULT_FEATURES: {
            swaps: !0,
            onramp: !0,
            receive: !0,
            send: !0,
            email: !0,
            emailShowWallets: !0,
            socials: ['google', 'x', 'discord', 'farcaster', 'github', 'apple', 'facebook'],
            connectorTypeOrder: [
              'walletConnect',
              'recent',
              'injected',
              'featured',
              'custom',
              'external',
              'recommended',
            ],
            history: !0,
            analytics: !0,
            allWallets: !0,
            legalCheckbox: !1,
            smartSessions: !1,
            collapseWallets: !1,
            walletFeaturesOrder: ['onramp', 'swaps', 'receive', 'send'],
            connectMethodsOrder: void 0,
          },
          DEFAULT_ACCOUNT_TYPES: {
            bip122: 'payment',
            eip155: 'smartAccount',
            polkadot: 'eoa',
            solana: 'eoa',
          },
          ADAPTER_TYPES: {
            UNIVERSAL: 'universal',
            SOLANA: 'solana',
            WAGMI: 'wagmi',
            ETHERS: 'ethers',
            ETHERS5: 'ethers5',
            BITCOIN: 'bitcoin',
          },
        },
        $e = {
          cacheExpiry: { portfolio: 3e4, nativeBalance: 3e4, ens: 3e5, identity: 3e5 },
          isCacheExpired: (e, t) => Date.now() - e > t,
          getActiveNetworkProps() {
            const e = $e.getActiveNamespace(),
              t = $e.getActiveCaipNetworkId(),
              r = t ? t.split(':')[1] : void 0;
            return {
              namespace: e,
              caipNetworkId: t,
              chainId: r ? (isNaN(Number(r)) ? r : Number(r)) : void 0,
            };
          },
          setWalletConnectDeepLink({ name: e, href: t }) {
            try {
              ge.setItem(ne, JSON.stringify({ href: t, name: e }));
            } catch {
              console.info('Unable to set WalletConnect deep link');
            }
          },
          getWalletConnectDeepLink() {
            try {
              const e = ge.getItem(ne);
              if (e) return JSON.parse(e);
            } catch {
              console.info('Unable to get WalletConnect deep link');
            }
          },
          deleteWalletConnectDeepLink() {
            try {
              ge.removeItem(ne);
            } catch {
              console.info('Unable to delete WalletConnect deep link');
            }
          },
          setActiveNamespace(e) {
            try {
              ge.setItem(oe, e);
            } catch {
              console.info('Unable to set active namespace');
            }
          },
          setActiveCaipNetworkId(e) {
            try {
              ge.setItem(Q, e), $e.setActiveNamespace(e.split(':')[0]);
            } catch {
              console.info('Unable to set active caip network id');
            }
          },
          getActiveCaipNetworkId() {
            try {
              return ge.getItem(Q);
            } catch {
              return void console.info('Unable to get active caip network id');
            }
          },
          deleteActiveCaipNetworkId() {
            try {
              ge.removeItem(Q);
            } catch {
              console.info('Unable to delete active caip network id');
            }
          },
          deleteConnectedConnectorId(e) {
            try {
              const t = pe(e);
              ge.removeItem(t);
            } catch {
              console.info('Unable to delete connected connector id');
            }
          },
          setAppKitRecent(e) {
            try {
              const t = $e.getRecentWallets();
              t.find((t) => t.id === e.id) ||
                (t.unshift(e), t.length > 2 && t.pop(), ge.setItem(re, JSON.stringify(t)));
            } catch {
              console.info('Unable to set AppKit recent');
            }
          },
          getRecentWallets() {
            try {
              const e = ge.getItem(re);
              return e ? JSON.parse(e) : [];
            } catch {
              console.info('Unable to get AppKit recent');
            }
            return [];
          },
          setConnectedConnectorId(e, t) {
            try {
              const r = pe(e);
              ge.setItem(r, t);
            } catch {
              console.info('Unable to set Connected Connector Id');
            }
          },
          getActiveNamespace() {
            try {
              return ge.getItem(oe);
            } catch {
              console.info('Unable to get active namespace');
            }
          },
          getConnectedConnectorId(e) {
            if (e)
              try {
                const t = pe(e);
                return ge.getItem(t);
              } catch {
                console.info('Unable to get connected connector id in namespace ', e);
              }
          },
          setConnectedSocialProvider(e) {
            try {
              ge.setItem(ee, e);
            } catch {
              console.info('Unable to set connected social provider');
            }
          },
          getConnectedSocialProvider() {
            try {
              return ge.getItem(ee);
            } catch {
              console.info('Unable to get connected social provider');
            }
          },
          deleteConnectedSocialProvider() {
            try {
              ge.removeItem(ee);
            } catch {
              console.info('Unable to delete connected social provider');
            }
          },
          getConnectedSocialUsername() {
            try {
              return ge.getItem(te);
            } catch {
              console.info('Unable to get connected social username');
            }
          },
          getStoredActiveCaipNetworkId: () => ge.getItem(Q)?.split(':')?.[1],
          setConnectionStatus(e) {
            try {
              ge.setItem(se, e);
            } catch {
              console.info('Unable to set connection status');
            }
          },
          getConnectionStatus() {
            try {
              return ge.getItem(se);
            } catch {
              return;
            }
          },
          getConnectedNamespaces() {
            try {
              const e = ge.getItem(ie);
              return e?.length ? e.split(',') : [];
            } catch {
              return [];
            }
          },
          setConnectedNamespaces(e) {
            try {
              const t = Array.from(new Set(e));
              ge.setItem(ie, t.join(','));
            } catch {
              console.info('Unable to set namespaces in storage');
            }
          },
          addConnectedNamespace(e) {
            try {
              const t = $e.getConnectedNamespaces();
              t.includes(e) || (t.push(e), $e.setConnectedNamespaces(t));
            } catch {
              console.info('Unable to add connected namespace');
            }
          },
          removeConnectedNamespace(e) {
            try {
              const t = $e.getConnectedNamespaces(),
                r = t.indexOf(e);
              r > -1 && (t.splice(r, 1), $e.setConnectedNamespaces(t));
            } catch {
              console.info('Unable to remove connected namespace');
            }
          },
          getTelegramSocialProvider() {
            try {
              return ge.getItem(ae);
            } catch {
              return console.info('Unable to get telegram social provider'), null;
            }
          },
          setTelegramSocialProvider(e) {
            try {
              ge.setItem(ae, e);
            } catch {
              console.info('Unable to set telegram social provider');
            }
          },
          removeTelegramSocialProvider() {
            try {
              ge.removeItem(ae);
            } catch {
              console.info('Unable to remove telegram social provider');
            }
          },
          getBalanceCache() {
            let e = {};
            try {
              const t = ge.getItem(le);
              e = t ? JSON.parse(t) : {};
            } catch {
              console.info('Unable to get balance cache');
            }
            return e;
          },
          removeAddressFromBalanceCache(e) {
            try {
              const t = $e.getBalanceCache();
              ge.setItem(le, JSON.stringify({ ...t, [e]: void 0 }));
            } catch {
              console.info('Unable to remove address from balance cache', e);
            }
          },
          getBalanceCacheForCaipAddress(e) {
            try {
              const t = $e.getBalanceCache()[e];
              if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.portfolio))
                return t.balance;
              $e.removeAddressFromBalanceCache(e);
            } catch {
              console.info('Unable to get balance cache for address', e);
            }
          },
          updateBalanceCache(e) {
            try {
              const t = $e.getBalanceCache();
              (t[e.caipAddress] = e), ge.setItem(le, JSON.stringify(t));
            } catch {
              console.info('Unable to update balance cache', e);
            }
          },
          getNativeBalanceCache() {
            let e = {};
            try {
              const t = ge.getItem(ce);
              e = t ? JSON.parse(t) : {};
            } catch {
              console.info('Unable to get balance cache');
            }
            return e;
          },
          removeAddressFromNativeBalanceCache(e) {
            try {
              const t = $e.getBalanceCache();
              ge.setItem(ce, JSON.stringify({ ...t, [e]: void 0 }));
            } catch {
              console.info('Unable to remove address from balance cache', e);
            }
          },
          getNativeBalanceCacheForCaipAddress(e) {
            try {
              const t = $e.getNativeBalanceCache()[e];
              if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.nativeBalance)) return t;
              console.info('Discarding cache for address', e), $e.removeAddressFromBalanceCache(e);
            } catch {
              console.info('Unable to get balance cache for address', e);
            }
          },
          updateNativeBalanceCache(e) {
            try {
              const t = $e.getNativeBalanceCache();
              (t[e.caipAddress] = e), ge.setItem(ce, JSON.stringify(t));
            } catch {
              console.info('Unable to update balance cache', e);
            }
          },
          getEnsCache() {
            let e = {};
            try {
              const t = ge.getItem(de);
              e = t ? JSON.parse(t) : {};
            } catch {
              console.info('Unable to get ens name cache');
            }
            return e;
          },
          getEnsFromCacheForAddress(e) {
            try {
              const t = $e.getEnsCache()[e];
              if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.ens)) return t.ens;
              $e.removeEnsFromCache(e);
            } catch {
              console.info('Unable to get ens name from cache', e);
            }
          },
          updateEnsCache(e) {
            try {
              const t = $e.getEnsCache();
              (t[e.address] = e), ge.setItem(de, JSON.stringify(t));
            } catch {
              console.info('Unable to update ens name cache', e);
            }
          },
          removeEnsFromCache(e) {
            try {
              const t = $e.getEnsCache();
              ge.setItem(de, JSON.stringify({ ...t, [e]: void 0 }));
            } catch {
              console.info('Unable to remove ens name from cache', e);
            }
          },
          getIdentityCache() {
            let e = {};
            try {
              const t = ge.getItem(ue);
              e = t ? JSON.parse(t) : {};
            } catch {
              console.info('Unable to get identity cache');
            }
            return e;
          },
          getIdentityFromCacheForAddress(e) {
            try {
              const t = $e.getIdentityCache()[e];
              if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.identity))
                return t.identity;
              $e.removeIdentityFromCache(e);
            } catch {
              console.info('Unable to get identity from cache', e);
            }
          },
          updateIdentityCache(e) {
            try {
              const t = $e.getIdentityCache();
              (t[e.address] = { identity: e.identity, timestamp: e.timestamp }),
                ge.setItem(ue, JSON.stringify(t));
            } catch {
              console.info('Unable to update identity cache', e);
            }
          },
          removeIdentityFromCache(e) {
            try {
              const t = $e.getIdentityCache();
              ge.setItem(ue, JSON.stringify({ ...t, [e]: void 0 }));
            } catch {
              console.info('Unable to remove identity from cache', e);
            }
          },
          clearAddressCache() {
            try {
              ge.removeItem(le), ge.removeItem(ce), ge.removeItem(de), ge.removeItem(ue);
            } catch {
              console.info('Unable to clear address cache');
            }
          },
          setPreferredAccountTypes(e) {
            try {
              ge.setItem(he, JSON.stringify(e));
            } catch {
              console.info('Unable to set preferred account types', e);
            }
          },
          getPreferredAccountTypes() {
            try {
              const e = ge.getItem(he);
              return JSON.parse(e);
            } catch {
              console.info('Unable to get preferred account types');
            }
          },
        },
        Re = {
          isMobile() {
            return (
              !!this.isClient() &&
              !(
                !window?.matchMedia('(pointer:coarse)')?.matches &&
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
              )
            );
          },
          checkCaipNetwork: (e, t = '') =>
            e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase()),
          isAndroid() {
            if (!this.isMobile()) return !1;
            const e = window?.navigator.userAgent.toLowerCase();
            return Re.isMobile() && e.includes('android');
          },
          isIos() {
            if (!this.isMobile()) return !1;
            const e = window?.navigator.userAgent.toLowerCase();
            return e.includes('iphone') || e.includes('ipad');
          },
          isSafari() {
            return (
              !!this.isClient() && window?.navigator.userAgent.toLowerCase().includes('safari')
            );
          },
          isClient: () => typeof window < 'u',
          isPairingExpired: (e) => !e || e - Date.now() <= Oe.TEN_SEC_MS,
          isAllowedRetry: (e, t = Oe.ONE_SEC_MS) => Date.now() - e >= t,
          copyToClopboard(e) {
            navigator.clipboard.writeText(e);
          },
          isIframe() {
            try {
              return window?.self !== window?.top;
            } catch {
              return !1;
            }
          },
          getPairingExpiry: () => Date.now() + Oe.FOUR_MINUTES_MS,
          getNetworkId: (e) => e?.split(':')[1],
          getPlainAddress: (e) => e?.split(':')[2],
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          debounce(e, t = 500) {
            let r;
            return (...n) => {
              r && clearTimeout(r),
                (r = setTimeout(function () {
                  e(...n);
                }, t));
            };
          },
          isHttpUrl: (e) => e.startsWith('http://') || e.startsWith('https://'),
          formatNativeUrl(e, t) {
            if (Re.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
            let r = e;
            r.includes('://') || ((r = e.replaceAll('/', '').replaceAll(':', '')), (r = `${r}://`)),
              r.endsWith('/') || (r = `${r}/`),
              this.isTelegram() && this.isAndroid() && (t = encodeURIComponent(t));
            return { redirect: `${r}wc?uri=${encodeURIComponent(t)}`, href: r };
          },
          formatUniversalUrl(e, t) {
            if (!Re.isHttpUrl(e)) return this.formatNativeUrl(e, t);
            let r = e;
            r.endsWith('/') || (r = `${r}/`);
            return { redirect: `${r}wc?uri=${encodeURIComponent(t)}`, href: r };
          },
          getOpenTargetForPlatform(e) {
            return 'popupWindow' === e
              ? e
              : this.isTelegram()
                ? $e.getTelegramSocialProvider()
                  ? '_top'
                  : '_blank'
                : e;
          },
          openHref(e, t, r) {
            window?.open(e, this.getOpenTargetForPlatform(t), r || 'noreferrer noopener');
          },
          returnOpenHref(e, t, r) {
            return window?.open(e, this.getOpenTargetForPlatform(t), r || 'noreferrer noopener');
          },
          isTelegram: () =>
            typeof window < 'u' &&
            (!!window.TelegramWebviewProxy ||
              !!window.Telegram ||
              !!window.TelegramWebviewProxyProto),
          async preloadImage(e) {
            const t = new Promise((t, r) => {
              const n = new Image();
              (n.onload = t), (n.onerror = r), (n.crossOrigin = 'anonymous'), (n.src = e);
            });
            return Promise.race([t, Re.wait(2e3)]);
          },
          formatBalance(e, t) {
            let r = '0.000';
            if ('string' == typeof e) {
              const t = Number(e);
              if (t) {
                const e = Math.floor(1e3 * t) / 1e3;
                e && (r = e.toString());
              }
            }
            return `${r}${t ? ` ${t}` : ''}`;
          },
          formatBalance2(e, t) {
            let r;
            if ('0' === e) r = '0';
            else if ('string' == typeof e) {
              const t = Number(e);
              t && (r = t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0]);
            }
            return { value: r ?? '0', rest: '0' === r ? '000' : '', symbol: t };
          },
          getApiUrl: () => Y.W3M_API_URL,
          getBlockchainApiUrl: () => Y.BLOCKCHAIN_API_RPC_URL,
          getAnalyticsUrl: () => Y.PULSE_API_URL,
          getUUID: () =>
            crypto?.randomUUID
              ? crypto.randomUUID()
              : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
                  const t = (16 * Math.random()) | 0;
                  return ('x' === e ? t : (3 & t) | 8).toString(16);
                }),
          parseError: (e) =>
            'string' == typeof e
              ? e
              : 'string' == typeof e?.issues?.[0]?.message
                ? e.issues[0].message
                : e instanceof Error
                  ? e.message
                  : 'Unknown error',
          sortRequestedNetworks(e, t = []) {
            const r = {};
            return (
              t &&
                e &&
                (e.forEach((e, t) => {
                  r[e] = t;
                }),
                t.sort((e, t) => {
                  const n = r[e.id],
                    o = r[t.id];
                  return void 0 !== n && void 0 !== o
                    ? n - o
                    : void 0 !== n
                      ? -1
                      : void 0 !== o
                        ? 1
                        : 0;
                })),
              t
            );
          },
          calculateBalance(e) {
            let t = 0;
            for (const r of e) t += r.value ?? 0;
            return t;
          },
          formatTokenBalance(e) {
            const t = e.toFixed(2),
              [r, n] = t.split('.');
            return { dollars: r, pennies: n };
          },
          isAddress(e, t = 'eip155') {
            switch (t) {
              case 'eip155':
                return (
                  !!/^(?:0x)?[0-9a-f]{40}$/iu.test(e) &&
                  !(!/^(?:0x)?[0-9a-f]{40}$/iu.test(e) && !/^(?:0x)?[0-9A-F]{40}$/iu.test(e))
                );
              case 'solana':
                return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
              default:
                return !1;
            }
          },
          uniqueBy(e, t) {
            const r = new Set();
            return e.filter((e) => {
              const n = e[t];
              return !r.has(n) && (r.add(n), !0);
            });
          },
          generateSdkVersion: (e, t, r) =>
            `${t}-${0 === e.length ? Oe.ADAPTER_TYPES.UNIVERSAL : e.map((e) => e.adapterType).join(',')}-${r}`,
          createAccount: (e, t, r, n, o) => ({
            namespace: e,
            address: t,
            type: r,
            publicKey: n,
            path: o,
          }),
          isCaipAddress(e) {
            if ('string' != typeof e) return !1;
            const t = e.split(':'),
              r = t[0];
            return 3 === t.filter(Boolean).length && r in Y.CHAIN_NAME_MAP;
          },
          isMac() {
            const e = window?.navigator.userAgent.toLowerCase();
            return e.includes('macintosh') && !e.includes('safari');
          },
          formatTelegramSocialLoginUrl(e) {
            const t = `--${encodeURIComponent(window?.location.href)}`,
              r = 'state=';
            if ('auth.magic.link' === new URL(e).host) {
              const n = 'provider_authorization_url=',
                o = e.substring(e.indexOf(n) + n.length),
                i = this.injectIntoUrl(decodeURIComponent(o), r, t);
              return e.replace(o, encodeURIComponent(i));
            }
            return this.injectIntoUrl(e, r, t);
          },
          injectIntoUrl(e, t, r) {
            const n = e.indexOf(t);
            if (-1 === n) throw new Error(`${t} parameter not found in the URL: ${e}`);
            const o = e.indexOf('&', n),
              i = t.length,
              s = -1 !== o ? o : e.length;
            return e.substring(0, n + i) + (e.substring(n + i, s) + r) + e.substring(o);
          },
        };
      async function Be(...e) {
        const t = await fetch(...e);
        if (!t.ok) throw new Error(`HTTP status code: ${t.status}`, { cause: t });
        return t;
      }
      class Le {
        constructor({ baseUrl: e, clientId: t }) {
          (this.baseUrl = e), (this.clientId = t);
        }
        async get({ headers: e, signal: t, cache: r, ...n }) {
          const o = this.createUrl(n);
          return (await Be(o, { method: 'GET', headers: e, signal: t, cache: r })).json();
        }
        async getBlob({ headers: e, signal: t, ...r }) {
          const n = this.createUrl(r);
          return (await Be(n, { method: 'GET', headers: e, signal: t })).blob();
        }
        async post({ body: e, headers: t, signal: r, ...n }) {
          const o = this.createUrl(n);
          return (
            await Be(o, {
              method: 'POST',
              headers: t,
              body: e ? JSON.stringify(e) : void 0,
              signal: r,
            })
          ).json();
        }
        async put({ body: e, headers: t, signal: r, ...n }) {
          const o = this.createUrl(n);
          return (
            await Be(o, {
              method: 'PUT',
              headers: t,
              body: e ? JSON.stringify(e) : void 0,
              signal: r,
            })
          ).json();
        }
        async delete({ body: e, headers: t, signal: r, ...n }) {
          const o = this.createUrl(n);
          return (
            await Be(o, {
              method: 'DELETE',
              headers: t,
              body: e ? JSON.stringify(e) : void 0,
              signal: r,
            })
          ).json();
        }
        createUrl({ path: e, params: t }) {
          const r = new URL(e, this.baseUrl);
          return (
            t &&
              Object.entries(t).forEach(([e, t]) => {
                t && r.searchParams.append(e, t);
              }),
            this.clientId && r.searchParams.append('clientId', this.clientId),
            r
          );
        }
      }
      const Ue = {
          handleSolanaDeeplinkRedirect(e) {
            if (pa.state.activeChain === Y.CHAIN.SOLANA) {
              const t = window.location.href,
                r = encodeURIComponent(t);
              if ('Phantom' === e && !('phantom' in window)) {
                const e = t.startsWith('https') ? 'https' : 'http',
                  n = t.split('/')[2],
                  o = encodeURIComponent(`${e}://${n}`);
                window.location.href = `https://phantom.app/ul/browse/${r}?ref=${o}`;
              }
              'Coinbase Wallet' === e &&
                !('coinbaseSolana' in window) &&
                (window.location.href = `https://go.cb-w.com/dapp?cb_url=${r}`);
            }
          },
        },
        Me = Ie({
          walletImages: {},
          networkImages: {},
          chainImages: {},
          connectorImages: {},
          tokenImages: {},
          currencyImages: {},
        }),
        ze = {
          state: Me,
          subscribeNetworkImages: (e) => Ne(Me.networkImages, () => e(Me.networkImages)),
          subscribeKey: (e, t) => Pe(Me, e, t),
          subscribe: (e) => Ne(Me, () => e(Me)),
          setWalletImage(e, t) {
            Me.walletImages[e] = t;
          },
          setNetworkImage(e, t) {
            Me.networkImages[e] = t;
          },
          setChainImage(e, t) {
            Me.chainImages[e] = t;
          },
          setConnectorImage(e, t) {
            Me.connectorImages = { ...Me.connectorImages, [e]: t };
          },
          setTokenImage(e, t) {
            Me.tokenImages[e] = t;
          },
          setCurrencyImage(e, t) {
            Me.currencyImages[e] = t;
          },
        },
        je = {
          eip155: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
          solana: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
          polkadot: '',
          bip122: '0b4838db-0161-4ffe-022d-532bf03dba00',
        },
        De = Ie({ networkImagePromises: {} }),
        We = {
          async fetchWalletImage(e) {
            if (e) return await nt._fetchWalletImage(e), this.getWalletImageById(e);
          },
          async fetchNetworkImage(e) {
            if (!e) return;
            return (
              this.getNetworkImageById(e) ||
              (De.networkImagePromises[e] ||
                (De.networkImagePromises[e] = nt._fetchNetworkImage(e)),
              await De.networkImagePromises[e],
              this.getNetworkImageById(e))
            );
          },
          getWalletImageById(e) {
            if (e) return ze.state.walletImages[e];
          },
          getWalletImage: (e) =>
            e?.image_url ? e?.image_url : e?.image_id ? ze.state.walletImages[e.image_id] : void 0,
          getNetworkImage: (e) =>
            e?.assets?.imageUrl
              ? e?.assets?.imageUrl
              : e?.assets?.imageId
                ? ze.state.networkImages[e.assets.imageId]
                : void 0,
          getNetworkImageById(e) {
            if (e) return ze.state.networkImages[e];
          },
          getConnectorImage: (e) =>
            e?.imageUrl ? e.imageUrl : e?.imageId ? ze.state.connectorImages[e.imageId] : void 0,
          getChainImage: (e) => ze.state.networkImages[je[e]],
        },
        He = {
          getFeatureValue(e, t) {
            const r = t?.[e];
            return void 0 === r ? Oe.DEFAULT_FEATURES[e] : r;
          },
          filterSocialsByPlatform(e) {
            if (!e || !e.length) return e;
            if (Re.isTelegram()) {
              if (Re.isIos()) return e.filter((e) => 'google' !== e);
              if (Re.isMac()) return e.filter((e) => 'x' !== e);
              if (Re.isAndroid()) return e.filter((e) => !['facebook', 'x'].includes(e));
            }
            return e;
          },
        },
        Fe = Ie({
          features: Oe.DEFAULT_FEATURES,
          projectId: '',
          sdkType: 'appkit',
          sdkVersion: 'html-wagmi-undefined',
          defaultAccountTypes: {
            solana: 'eoa',
            bip122: 'payment',
            polkadot: 'eoa',
            eip155: 'smartAccount',
          },
          enableNetworkSwitch: !0,
        }),
        Ve = {
          state: Fe,
          subscribeKey: (e, t) => Pe(Fe, e, t),
          setOptions(e) {
            Object.assign(Fe, e);
          },
          setFeatures(e) {
            if (!e) return;
            Fe.features || (Fe.features = Oe.DEFAULT_FEATURES);
            const t = { ...Fe.features, ...e };
            (Fe.features = t),
              Fe.features.socials &&
                (Fe.features.socials = He.filterSocialsByPlatform(Fe.features.socials));
          },
          setProjectId(e) {
            Fe.projectId = e;
          },
          setCustomRpcUrls(e) {
            Fe.customRpcUrls = e;
          },
          setAllWallets(e) {
            Fe.allWallets = e;
          },
          setIncludeWalletIds(e) {
            Fe.includeWalletIds = e;
          },
          setExcludeWalletIds(e) {
            Fe.excludeWalletIds = e;
          },
          setFeaturedWalletIds(e) {
            Fe.featuredWalletIds = e;
          },
          setTokens(e) {
            Fe.tokens = e;
          },
          setTermsConditionsUrl(e) {
            Fe.termsConditionsUrl = e;
          },
          setPrivacyPolicyUrl(e) {
            Fe.privacyPolicyUrl = e;
          },
          setCustomWallets(e) {
            Fe.customWallets = e;
          },
          setIsSiweEnabled(e) {
            Fe.isSiweEnabled = e;
          },
          setIsUniversalProvider(e) {
            Fe.isUniversalProvider = e;
          },
          setSdkVersion(e) {
            Fe.sdkVersion = e;
          },
          setMetadata(e) {
            Fe.metadata = e;
          },
          setDisableAppend(e) {
            Fe.disableAppend = e;
          },
          setEIP6963Enabled(e) {
            Fe.enableEIP6963 = e;
          },
          setDebug(e) {
            Fe.debug = e;
          },
          setEnableWalletConnect(e) {
            Fe.enableWalletConnect = e;
          },
          setEnableWalletGuide(e) {
            Fe.enableWalletGuide = e;
          },
          setEnableAuthLogger(e) {
            Fe.enableAuthLogger = e;
          },
          setEnableWallets(e) {
            Fe.enableWallets = e;
          },
          setHasMultipleAddresses(e) {
            Fe.hasMultipleAddresses = e;
          },
          setSIWX(e) {
            Fe.siwx = e;
          },
          setConnectMethodsOrder(e) {
            Fe.features = { ...Fe.features, connectMethodsOrder: e };
          },
          setWalletFeaturesOrder(e) {
            Fe.features = { ...Fe.features, walletFeaturesOrder: e };
          },
          setSocialsOrder(e) {
            Fe.features = { ...Fe.features, socials: e };
          },
          setCollapseWallets(e) {
            Fe.features = { ...Fe.features, collapseWallets: e };
          },
          setEnableEmbedded(e) {
            Fe.enableEmbedded = e;
          },
          setAllowUnsupportedChain(e) {
            Fe.allowUnsupportedChain = e;
          },
          setManualWCControl(e) {
            Fe.manualWCControl = e;
          },
          setEnableNetworkSwitch(e) {
            Fe.enableNetworkSwitch = e;
          },
          setDefaultAccountTypes(e = {}) {
            Object.entries(e).forEach(([e, t]) => {
              t && (Fe.defaultAccountTypes[e] = t);
            });
          },
          setUniversalProviderConfigOverride(e) {
            Fe.universalProviderConfigOverride = e;
          },
          getUniversalProviderConfigOverride: () => Fe.universalProviderConfigOverride,
          getSnapshot: () => Se(Fe),
        },
        qe = Ie({ message: '', variant: 'info', open: !1 }),
        Ze = {
          state: qe,
          subscribeKey: (e, t) => Pe(qe, e, t),
          open(e, t) {
            const { debug: r } = Ve.state,
              { shortMessage: n, longMessage: o } = e;
            r && ((qe.message = n), (qe.variant = t), (qe.open = !0)),
              o && console.error('function' == typeof o ? o() : o);
          },
          close() {
            (qe.open = !1), (qe.message = ''), (qe.variant = 'info');
          },
        },
        Ge = Re.getAnalyticsUrl(),
        Ke = new Le({ baseUrl: Ge, clientId: null }),
        Ye = ['MODAL_CREATED'],
        Xe = Ie({
          timestamp: Date.now(),
          reportedErrors: {},
          data: { type: 'track', event: 'MODAL_CREATED' },
        }),
        Je = {
          state: Xe,
          subscribe: (e) => Ne(Xe, () => e(Xe)),
          getSdkProperties() {
            const { projectId: e, sdkType: t, sdkVersion: r } = Ve.state;
            return { projectId: e, st: t, sv: r || 'html-wagmi-4.2.2' };
          },
          async _sendAnalyticsEvent(e) {
            try {
              const t = ba.state.address;
              if (Ye.includes(e.data.event) || typeof window > 'u') return;
              await Ke.post({
                path: '/e',
                params: Je.getSdkProperties(),
                body: {
                  eventId: Re.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: e.timestamp,
                  props: { ...e.data, address: t },
                },
              }),
                (Xe.reportedErrors.FORBIDDEN = !1);
            } catch (t) {
              t instanceof Error &&
                t.cause instanceof Response &&
                t.cause.status === Y.HTTP_STATUS_CODES.FORBIDDEN &&
                !Xe.reportedErrors.FORBIDDEN &&
                (Ze.open(
                  {
                    shortMessage: 'Invalid App Configuration',
                    longMessage: `Origin ${fe() ? window.origin : 'uknown'} not found on Allowlist - update configuration on cloud.reown.com`,
                  },
                  'error'
                ),
                (Xe.reportedErrors.FORBIDDEN = !0));
            }
          },
          sendEvent(e) {
            (Xe.timestamp = Date.now()),
              (Xe.data = e),
              Ve.state.features?.analytics && Je._sendAnalyticsEvent(Xe);
          },
        },
        Qe = [
          '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
          'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
          'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        ],
        et = Re.getApiUrl(),
        tt = new Le({ baseUrl: et, clientId: null }),
        rt = Ie({
          promises: {},
          page: 1,
          count: 0,
          featured: [],
          allFeatured: [],
          recommended: [],
          allRecommended: [],
          wallets: [],
          search: [],
          isAnalyticsEnabled: !1,
          excludedWallets: [],
          isFetchingRecommendedWallets: !1,
        }),
        nt = {
          state: rt,
          subscribeKey: (e, t) => Pe(rt, e, t),
          _getSdkProperties() {
            const { projectId: e, sdkType: t, sdkVersion: r } = Ve.state;
            return { projectId: e, st: t || 'appkit', sv: r || 'html-wagmi-4.2.2' };
          },
          _filterOutExtensions: (e) =>
            Ve.state.isUniversalProvider
              ? e.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link))
              : e,
          async _fetchWalletImage(e) {
            const t = `${tt.baseUrl}/getWalletImage/${e}`,
              r = await tt.getBlob({ path: t, params: nt._getSdkProperties() });
            ze.setWalletImage(e, URL.createObjectURL(r));
          },
          async _fetchNetworkImage(e) {
            const t = `${tt.baseUrl}/public/getAssetImage/${e}`,
              r = await tt.getBlob({ path: t, params: nt._getSdkProperties() });
            ze.setNetworkImage(e, URL.createObjectURL(r));
          },
          async _fetchConnectorImage(e) {
            const t = `${tt.baseUrl}/public/getAssetImage/${e}`,
              r = await tt.getBlob({ path: t, params: nt._getSdkProperties() });
            ze.setConnectorImage(e, URL.createObjectURL(r));
          },
          async _fetchCurrencyImage(e) {
            const t = `${tt.baseUrl}/public/getCurrencyImage/${e}`,
              r = await tt.getBlob({ path: t, params: nt._getSdkProperties() });
            ze.setCurrencyImage(e, URL.createObjectURL(r));
          },
          async _fetchTokenImage(e) {
            const t = `${tt.baseUrl}/public/getTokenImage/${e}`,
              r = await tt.getBlob({ path: t, params: nt._getSdkProperties() });
            ze.setTokenImage(e, URL.createObjectURL(r));
          },
          async fetchNetworkImages() {
            const e = pa
              .getAllRequestedCaipNetworks()
              ?.map(({ assets: e }) => e?.imageId)
              .filter(Boolean)
              .filter((e) => !We.getNetworkImageById(e));
            e && (await Promise.allSettled(e.map((e) => nt._fetchNetworkImage(e))));
          },
          async fetchConnectorImages() {
            const { connectors: e } = dt.state,
              t = e.map(({ imageId: e }) => e).filter(Boolean);
            await Promise.allSettled(t.map((e) => nt._fetchConnectorImage(e)));
          },
          async fetchCurrencyImages(e = []) {
            await Promise.allSettled(e.map((e) => nt._fetchCurrencyImage(e)));
          },
          async fetchTokenImages(e = []) {
            await Promise.allSettled(e.map((e) => nt._fetchTokenImage(e)));
          },
          async fetchWallets(e) {
            const t = e.exclude ?? [];
            return (
              nt._getSdkProperties().sv.startsWith('html-core-') && t.push(...Qe),
              await tt.get({
                path: '/getWallets',
                params: {
                  ...nt._getSdkProperties(),
                  ...e,
                  page: String(e.page),
                  entries: String(e.entries),
                  include: e.include?.join(','),
                  exclude: e.exclude?.join(','),
                },
              })
            );
          },
          async fetchFeaturedWallets() {
            const { featuredWalletIds: e } = Ve.state;
            if (e?.length) {
              const t = { ...nt._getSdkProperties(), page: 1, entries: e?.length ?? 4, include: e },
                { data: r } = await nt.fetchWallets(t);
              r.sort((t, r) => e.indexOf(t.id) - e.indexOf(r.id));
              const n = r.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(n.map((e) => nt._fetchWalletImage(e))),
                (rt.featured = r),
                (rt.allFeatured = r);
            }
          },
          async fetchRecommendedWallets() {
            try {
              rt.isFetchingRecommendedWallets = !0;
              const { includeWalletIds: e, excludeWalletIds: t, featuredWalletIds: r } = Ve.state,
                n = [...(t ?? []), ...(r ?? [])].filter(Boolean),
                o = {
                  page: 1,
                  entries: 4,
                  include: e,
                  exclude: n,
                  chains: pa.getRequestedCaipNetworkIds().join(','),
                },
                { data: i, count: s } = await nt.fetchWallets(o),
                a = $e.getRecentWallets(),
                c = i.map((e) => e.image_id).filter(Boolean),
                l = a.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled([...c, ...l].map((e) => nt._fetchWalletImage(e))),
                (rt.recommended = i),
                (rt.allRecommended = i),
                (rt.count = s ?? 0);
            } catch {
            } finally {
              rt.isFetchingRecommendedWallets = !1;
            }
          },
          async fetchWalletsByPage({ page: e }) {
            const { includeWalletIds: t, excludeWalletIds: r, featuredWalletIds: n } = Ve.state,
              o = pa.getRequestedCaipNetworkIds().join(','),
              i = {
                page: e,
                entries: 40,
                include: t,
                exclude: [
                  ...rt.recommended.map(({ id: e }) => e),
                  ...(r ?? []),
                  ...(n ?? []),
                ].filter(Boolean),
                chains: o,
              },
              { data: s, count: a } = await nt.fetchWallets(i),
              c = s
                .slice(0, 20)
                .map((e) => e.image_id)
                .filter(Boolean);
            await Promise.allSettled(c.map((e) => nt._fetchWalletImage(e))),
              (rt.wallets = Re.uniqueBy([...rt.wallets, ...nt._filterOutExtensions(s)], 'id')),
              (rt.count = a > rt.count ? a : rt.count),
              (rt.page = e);
          },
          async initializeExcludedWallets({ ids: e }) {
            const t = pa.getRequestedCaipNetworkIds().join(','),
              r = { page: 1, entries: e.length, include: e, chains: t },
              { data: n } = await nt.fetchWallets(r);
            n &&
              n.forEach((e) => {
                rt.excludedWallets.push({ rdns: e.rdns, name: e.name });
              });
          },
          async searchWallet({ search: e, badge: t }) {
            const { includeWalletIds: r, excludeWalletIds: n } = Ve.state,
              o = pa.getRequestedCaipNetworkIds().join(',');
            rt.search = [];
            const i = {
                page: 1,
                entries: 100,
                search: e?.trim(),
                badge_type: t,
                include: r,
                exclude: n,
                chains: o,
              },
              { data: s } = await nt.fetchWallets(i);
            Je.sendEvent({
              type: 'track',
              event: 'SEARCH_WALLET',
              properties: { badge: t ?? '', search: e ?? '' },
            });
            const a = s.map((e) => e.image_id).filter(Boolean);
            await Promise.allSettled([...a.map((e) => nt._fetchWalletImage(e)), Re.wait(300)]),
              (rt.search = nt._filterOutExtensions(s));
          },
          initPromise: (e, t) => rt.promises[e] || (rt.promises[e] = t()),
          prefetch({
            fetchConnectorImages: e = !0,
            fetchFeaturedWallets: t = !0,
            fetchRecommendedWallets: r = !0,
            fetchNetworkImages: n = !0,
          } = {}) {
            const o = [
              e && nt.initPromise('connectorImages', nt.fetchConnectorImages),
              t && nt.initPromise('featuredWallets', nt.fetchFeaturedWallets),
              r && nt.initPromise('recommendedWallets', nt.fetchRecommendedWallets),
              n && nt.initPromise('networkImages', nt.fetchNetworkImages),
            ].filter(Boolean);
            return Promise.allSettled(o);
          },
          prefetchAnalyticsConfig() {
            Ve.state.features?.analytics && nt.fetchAnalyticsConfig();
          },
          async fetchAnalyticsConfig() {
            try {
              const { isAnalyticsEnabled: e } = await tt.get({
                path: '/getAnalyticsConfig',
                params: nt._getSdkProperties(),
              });
              Ve.setFeatures({ analytics: e });
            } catch {
              Ve.setFeatures({ analytics: !1 });
            }
          },
          setFilterByNamespace(e) {
            if (!e)
              return (rt.featured = rt.allFeatured), void (rt.recommended = rt.allRecommended);
            const t = pa.getRequestedCaipNetworkIds().join(',');
            (rt.featured = rt.allFeatured.filter((e) => e.chains?.some((e) => t.includes(e)))),
              (rt.recommended = rt.allRecommended.filter((e) =>
                e.chains?.some((e) => t.includes(e))
              ));
          },
        },
        ot = Ie({ view: 'Connect', history: ['Connect'], transactionStack: [] }),
        it = {
          state: ot,
          subscribeKey: (e, t) => Pe(ot, e, t),
          pushTransactionStack(e) {
            ot.transactionStack.push(e);
          },
          popTransactionStack(e) {
            const t = ot.transactionStack.pop();
            if (t)
              if (e) this.goBack(), t?.onCancel?.();
              else {
                if (t.goBack) this.goBack();
                else if (t.replace) {
                  const e = ot.history.indexOf('ConnectingSiwe');
                  e > 0 ? this.goBackToIndex(e - 1) : (Ca.close(), (ot.history = []));
                } else t.view && this.reset(t.view);
                t?.onSuccess?.();
              }
          },
          push(e, t) {
            e !== ot.view && ((ot.view = e), ot.history.push(e), (ot.data = t));
          },
          reset(e, t) {
            (ot.view = e), (ot.history = [e]), (ot.data = t);
          },
          replace(e, t) {
            ot.history.at(-1) === e ||
              ((ot.view = e), (ot.history[ot.history.length - 1] = e), (ot.data = t));
          },
          goBack() {
            const e = !pa.state.activeCaipAddress && 'ConnectingFarcaster' === this.state.view;
            if (ot.history.length > 1 && !ot.history.includes('UnsupportedChain')) {
              ot.history.pop();
              const [e] = ot.history.slice(-1);
              e && (ot.view = e);
            } else Ca.close();
            ot.data?.wallet && (ot.data.wallet = void 0),
              setTimeout(() => {
                if (e) {
                  ba.setFarcasterUrl(void 0, pa.state.activeChain);
                  const e = dt.getAuthConnector();
                  e?.provider?.reload();
                  const t = Se(Ve.state);
                  e?.provider?.syncDappData?.({
                    metadata: t.metadata,
                    sdkVersion: t.sdkVersion,
                    projectId: t.projectId,
                    sdkType: t.sdkType,
                  });
                }
              }, 100);
          },
          goBackToIndex(e) {
            if (ot.history.length > 1) {
              ot.history = ot.history.slice(0, e + 1);
              const [t] = ot.history.slice(-1);
              t && (ot.view = t);
            }
          },
        },
        st = Ie({ themeMode: 'dark', themeVariables: {}, w3mThemeVariables: void 0 }),
        at = {
          state: st,
          subscribe: (e) => Ne(st, () => e(st)),
          setThemeMode(e) {
            st.themeMode = e;
            try {
              const t = dt.getAuthConnector();
              if (t) {
                const r = at.getSnapshot().themeVariables;
                t.provider.syncTheme({
                  themeMode: e,
                  themeVariables: r,
                  w3mThemeVariables: we(r, e),
                });
              }
            } catch {
              console.info('Unable to sync theme to auth connector');
            }
          },
          setThemeVariables(e) {
            st.themeVariables = { ...st.themeVariables, ...e };
            try {
              const e = dt.getAuthConnector();
              if (e) {
                const t = at.getSnapshot().themeVariables;
                e.provider.syncTheme({
                  themeVariables: t,
                  w3mThemeVariables: we(st.themeVariables, st.themeMode),
                });
              }
            } catch {
              console.info('Unable to sync theme to auth connector');
            }
          },
          getSnapshot: () => Se(st),
        },
        ct = { eip155: void 0, solana: void 0, polkadot: void 0, bip122: void 0 },
        lt = Ie({
          allConnectors: [],
          connectors: [],
          activeConnector: void 0,
          filterByNamespace: void 0,
          activeConnectorIds: { ...ct },
        }),
        dt = {
          state: lt,
          subscribe: (e) =>
            Ne(lt, () => {
              e(lt);
            }),
          subscribeKey: (e, t) => Pe(lt, e, t),
          initialize(e) {
            e.forEach((e) => {
              const t = $e.getConnectedConnectorId(e);
              t && this.setConnectorId(t, e);
            });
          },
          setActiveConnector(e) {
            e && (lt.activeConnector = _e(e));
          },
          setConnectors(e) {
            e
              .filter(
                (e) =>
                  !lt.allConnectors.some(
                    (t) =>
                      t.id === e.id &&
                      this.getConnectorName(t.name) === this.getConnectorName(e.name) &&
                      t.chain === e.chain
                  )
              )
              .forEach((e) => {
                'MULTI_CHAIN' !== e.type && lt.allConnectors.push(_e(e));
              }),
              (lt.connectors = this.mergeMultiChainConnectors(lt.allConnectors));
          },
          removeAdapter(e) {
            (lt.allConnectors = lt.allConnectors.filter((t) => t.chain !== e)),
              (lt.connectors = this.mergeMultiChainConnectors(lt.allConnectors));
          },
          mergeMultiChainConnectors(e) {
            const t = this.generateConnectorMapByName(e),
              r = [];
            return (
              t.forEach((e) => {
                const t = e[0],
                  n = t?.id === Y.CONNECTOR_ID.AUTH;
                e.length > 1 && t
                  ? r.push({
                      name: t.name,
                      imageUrl: t.imageUrl,
                      imageId: t.imageId,
                      connectors: [...e],
                      type: n ? 'AUTH' : 'MULTI_CHAIN',
                      chain: 'eip155',
                      id: t?.id || '',
                    })
                  : t && r.push(t);
              }),
              r
            );
          },
          generateConnectorMapByName(e) {
            const t = new Map();
            return (
              e.forEach((e) => {
                const { name: r } = e,
                  n = this.getConnectorName(r);
                if (!n) return;
                const o = t.get(n) || [];
                o.find((t) => t.chain === e.chain) || o.push(e), t.set(n, o);
              }),
              t
            );
          },
          getConnectorName: (e) => e && ({ 'Trust Wallet': 'Trust' }[e] || e),
          getUniqueConnectorsByName(e) {
            const t = [];
            return (
              e.forEach((e) => {
                t.find((t) => t.chain === e.chain) || t.push(e);
              }),
              t
            );
          },
          addConnector(e) {
            if (e.id === Y.CONNECTOR_ID.AUTH) {
              const t = e,
                r = Se(Ve.state),
                n = at.getSnapshot().themeMode,
                o = at.getSnapshot().themeVariables;
              t?.provider?.syncDappData?.({
                metadata: r.metadata,
                sdkVersion: r.sdkVersion,
                projectId: r.projectId,
                sdkType: r.sdkType,
              }),
                t?.provider?.syncTheme({
                  themeMode: n,
                  themeVariables: o,
                  w3mThemeVariables: we(o, n),
                }),
                this.setConnectors([e]);
            } else this.setConnectors([e]);
          },
          getAuthConnector(e) {
            const t = e || pa.state.activeChain,
              r = lt.connectors.find((e) => e.id === Y.CONNECTOR_ID.AUTH);
            if (r) return r?.connectors?.length ? r.connectors.find((e) => e.chain === t) : r;
          },
          getAnnouncedConnectorRdns: () =>
            lt.connectors.filter((e) => 'ANNOUNCED' === e.type).map((e) => e.info?.rdns),
          getConnectorById: (e) => lt.allConnectors.find((t) => t.id === e),
          getConnector: (e, t) =>
            lt.allConnectors
              .filter((e) => e.chain === pa.state.activeChain)
              .find((r) => r.explorerId === e || r.info?.rdns === t),
          syncIfAuthConnector(e) {
            if ('ID_AUTH' !== e.id) return;
            const t = e,
              r = Se(Ve.state),
              n = at.getSnapshot().themeMode,
              o = at.getSnapshot().themeVariables;
            t?.provider?.syncDappData?.({
              metadata: r.metadata,
              sdkVersion: r.sdkVersion,
              sdkType: r.sdkType,
              projectId: r.projectId,
            }),
              t.provider.syncTheme({
                themeMode: n,
                themeVariables: o,
                w3mThemeVariables: we(o, n),
              });
          },
          getConnectorsByNamespace(e) {
            const t = lt.allConnectors.filter((t) => t.chain === e);
            return this.mergeMultiChainConnectors(t);
          },
          selectWalletConnector(e) {
            const t = dt.getConnector(e.id, e.rdns);
            pa.state.activeChain === Y.CHAIN.SOLANA &&
              Ue.handleSolanaDeeplinkRedirect(t?.name || e.name || ''),
              t
                ? it.push('ConnectingExternal', { connector: t })
                : it.push('ConnectingWalletConnect', { wallet: e });
          },
          getConnectors(e) {
            return e
              ? this.getConnectorsByNamespace(e)
              : this.mergeMultiChainConnectors(lt.allConnectors);
          },
          setFilterByNamespace(e) {
            (lt.filterByNamespace = e),
              (lt.connectors = this.getConnectors(e)),
              nt.setFilterByNamespace(e);
          },
          setConnectorId(e, t) {
            e &&
              ((lt.activeConnectorIds = { ...lt.activeConnectorIds, [t]: e }),
              $e.setConnectedConnectorId(t, e));
          },
          removeConnectorId(e) {
            (lt.activeConnectorIds = { ...lt.activeConnectorIds, [e]: void 0 }),
              $e.deleteConnectedConnectorId(e);
          },
          getConnectorId(e) {
            if (e) return lt.activeConnectorIds[e];
          },
          isConnected: (e) =>
            e ? !!lt.activeConnectorIds[e] : Object.values(lt.activeConnectorIds).some((e) => !!e),
          resetConnectorIds() {
            lt.activeConnectorIds = { ...ct };
          },
        };
      function ut(e, t) {
        return dt.getConnectorId(e) === t;
      }
      typeof s < 'u' && typeof s.env < 'u' && s.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL,
        typeof s < 'u' && typeof s.env < 'u' && s.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL,
        typeof s < 'u' && typeof s.env < 'u' && s.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION;
      const ht = { EOA: 'eoa', SMART_ACCOUNT: 'smartAccount' },
        pt = Object.freeze({
          message: '',
          variant: 'success',
          svg: void 0,
          open: !1,
          autoClose: !0,
        }),
        gt = Ie({ ...pt }),
        ft = {
          state: gt,
          subscribeKey: (e, t) => Pe(gt, e, t),
          showLoading(e, t = {}) {
            this._showMessage({ message: e, variant: 'loading', ...t });
          },
          showSuccess(e) {
            this._showMessage({ message: e, variant: 'success' });
          },
          showSvg(e, t) {
            this._showMessage({ message: e, svg: t });
          },
          showError(e) {
            const t = Re.parseError(e);
            this._showMessage({ message: t, variant: 'error' });
          },
          hide() {
            (gt.message = pt.message),
              (gt.variant = pt.variant),
              (gt.svg = pt.svg),
              (gt.open = pt.open),
              (gt.autoClose = pt.autoClose);
          },
          _showMessage({
            message: e,
            svg: t,
            variant: r = 'success',
            autoClose: n = pt.autoClose,
          }) {
            gt.open
              ? ((gt.open = !1),
                setTimeout(() => {
                  (gt.message = e),
                    (gt.variant = r),
                    (gt.svg = t),
                    (gt.open = !0),
                    (gt.autoClose = n);
                }, 150))
              : ((gt.message = e),
                (gt.variant = r),
                (gt.svg = t),
                (gt.open = !0),
                (gt.autoClose = n));
          },
        },
        wt = {
          getSIWX: () => Ve.state.siwx,
          async initializeIfEnabled() {
            const e = Ve.state.siwx,
              t = pa.getActiveCaipAddress();
            if (!e || !t) return;
            const [r, n, o] = t.split(':');
            if (pa.checkIfSupportedNetwork(r))
              try {
                if ((await e.getSessions(`${r}:${n}`, o)).length) return;
                await Ca.open({ view: 'SIWXSignMessage' });
              } catch (i) {
                console.error('SIWXUtil:initializeIfEnabled', i),
                  Je.sendEvent({
                    type: 'track',
                    event: 'SIWX_AUTH_ERROR',
                    properties: this.getSIWXEventProperties(),
                  }),
                  await Ct._getClient()?.disconnect().catch(console.error),
                  it.reset('Connect'),
                  ft.showError('A problem occurred while trying initialize authentication');
              }
          },
          async requestSignMessage() {
            const e = Ve.state.siwx,
              t = Re.getPlainAddress(pa.getActiveCaipAddress()),
              r = pa.getActiveCaipNetwork(),
              n = Ct._getClient();
            if (!e) throw new Error('SIWX is not enabled');
            if (!t) throw new Error('No ActiveCaipAddress found');
            if (!r) throw new Error('No ActiveCaipNetwork or client found');
            if (!n) throw new Error('No ConnectionController client found');
            try {
              const o = await e.createMessage({ chainId: r.caipNetworkId, accountAddress: t }),
                i = o.toString();
              dt.getConnectorId(r.chainNamespace) === Y.CONNECTOR_ID.AUTH &&
                it.pushTransactionStack({ view: null, goBack: !1, replace: !0 });
              const s = await n.signMessage(i);
              await e.addSession({ data: o, message: i, signature: s }),
                Ca.close(),
                Je.sendEvent({
                  type: 'track',
                  event: 'SIWX_AUTH_SUCCESS',
                  properties: this.getSIWXEventProperties(),
                });
            } catch (o) {
              const e = this.getSIWXEventProperties();
              (!Ca.state.open || 'ApproveTransaction' === it.state.view) &&
                (await Ca.open({ view: 'SIWXSignMessage' })),
                e.isSmartAccount
                  ? ft.showError('This application might not support Smart Accounts')
                  : ft.showError('Signature declined'),
                Je.sendEvent({ type: 'track', event: 'SIWX_AUTH_ERROR', properties: e }),
                console.error('SWIXUtil:requestSignMessage', o);
            }
          },
          async cancelSignMessage() {
            try {
              this.getSIWX()?.getRequired?.() ? await Ct.disconnect() : Ca.close(),
                it.reset('Connect'),
                Je.sendEvent({
                  event: 'CLICK_CANCEL_SIWX',
                  type: 'track',
                  properties: this.getSIWXEventProperties(),
                });
            } catch (e) {
              console.error('SIWXUtil:cancelSignMessage', e);
            }
          },
          async getSessions() {
            const e = Ve.state.siwx,
              t = Re.getPlainAddress(pa.getActiveCaipAddress()),
              r = pa.getActiveCaipNetwork();
            return e && t && r ? e.getSessions(r.caipNetworkId, t) : [];
          },
          async isSIWXCloseDisabled() {
            const e = this.getSIWX();
            if (e) {
              const t = 'ApproveTransaction' === it.state.view,
                r = 'SIWXSignMessage' === it.state.view;
              if (t || r) return e.getRequired?.() && 0 === (await this.getSessions()).length;
            }
            return !1;
          },
          async universalProviderAuthenticate({ universalProvider: e, chains: t, methods: r }) {
            const n = wt.getSIWX(),
              o = new Set(t.map((e) => e.split(':')[0]));
            if (!n || 1 !== o.size || !o.has('eip155')) return !1;
            const i = await n.createMessage({
                chainId: pa.getActiveCaipNetwork()?.caipNetworkId || '',
                accountAddress: '',
              }),
              s = await e.authenticate({
                nonce: i.nonce,
                domain: i.domain,
                uri: i.uri,
                exp: i.expirationTime,
                iat: i.issuedAt,
                nbf: i.notBefore,
                requestId: i.requestId,
                version: i.version,
                resources: i.resources,
                statement: i.statement,
                chainId: i.chainId,
                methods: r,
                chains: [i.chainId, ...t.filter((e) => e !== i.chainId)],
              });
            if (
              (ft.showLoading('Authenticating...', { autoClose: !1 }),
              ba.setConnectedWalletInfo(
                {
                  ...s.session.peer.metadata,
                  name: s.session.peer.metadata.name,
                  icon: s.session.peer.metadata.icons?.[0],
                  type: 'WALLET_CONNECT',
                },
                Array.from(o)[0]
              ),
              s?.auths?.length)
            ) {
              const t = s.auths.map((t) => {
                const r = e.client.formatAuthMessage({ request: t.p, iss: t.p.iss });
                return {
                  data: {
                    ...t.p,
                    accountAddress: t.p.iss.split(':').slice(-1).join(''),
                    chainId: t.p.iss.split(':').slice(2, 4).join(':'),
                    uri: t.p.aud,
                    version: t.p.version || i.version,
                    expirationTime: t.p.exp,
                    issuedAt: t.p.iat,
                    notBefore: t.p.nbf,
                  },
                  message: r,
                  signature: t.s.s,
                  cacao: t,
                };
              });
              try {
                await n.setSessions(t),
                  Je.sendEvent({
                    type: 'track',
                    event: 'SIWX_AUTH_SUCCESS',
                    properties: wt.getSIWXEventProperties(),
                  });
              } catch (a) {
                throw (
                  (console.error('SIWX:universalProviderAuth - failed to set sessions', a),
                  Je.sendEvent({
                    type: 'track',
                    event: 'SIWX_AUTH_ERROR',
                    properties: wt.getSIWXEventProperties(),
                  }),
                  await e.disconnect().catch(console.error),
                  a)
                );
              } finally {
                ft.hide();
              }
            }
            return !0;
          },
          getSIWXEventProperties() {
            const e = pa.state.activeChain;
            return {
              network: pa.state.activeCaipNetwork?.caipNetworkId || '',
              isSmartAccount: ba.state.preferredAccountTypes?.[e] === ht.SMART_ACCOUNT,
            };
          },
          async clearSessions() {
            const e = this.getSIWX();
            e && (await e.setSessions([]));
          },
        },
        mt = Ie({
          transactions: [],
          coinbaseTransactions: {},
          transactionsByYear: {},
          lastNetworkInView: void 0,
          loading: !1,
          empty: !1,
          next: void 0,
        }),
        vt = {
          state: mt,
          subscribe: (e) => Ne(mt, () => e(mt)),
          setLastNetworkInView(e) {
            mt.lastNetworkInView = e;
          },
          async fetchTransactions(e, t) {
            if (!e) throw new Error("Transactions can't be fetched without an accountAddress");
            mt.loading = !0;
            try {
              const r = await ma.fetchTransactions({
                  account: e,
                  cursor: mt.next,
                  onramp: t,
                  cache: 'coinbase' === t ? 'no-cache' : void 0,
                  chainId: pa.state.activeCaipNetwork?.caipNetworkId,
                }),
                n = this.filterSpamTransactions(r.data),
                o = this.filterByConnectedChain(n),
                i = [...mt.transactions, ...o];
              (mt.loading = !1),
                'coinbase' === t
                  ? (mt.coinbaseTransactions = this.groupTransactionsByYearAndMonth(
                      mt.coinbaseTransactions,
                      r.data
                    ))
                  : ((mt.transactions = i),
                    (mt.transactionsByYear = this.groupTransactionsByYearAndMonth(
                      mt.transactionsByYear,
                      o
                    ))),
                (mt.empty = 0 === i.length),
                (mt.next = r.next ? r.next : void 0);
            } catch {
              const t = pa.state.activeChain;
              Je.sendEvent({
                type: 'track',
                event: 'ERROR_FETCH_TRANSACTIONS',
                properties: {
                  address: e,
                  projectId: Ve.state.projectId,
                  cursor: mt.next,
                  isSmartAccount: ba.state.preferredAccountTypes?.[t] === ht.SMART_ACCOUNT,
                },
              }),
                ft.showError('Failed to fetch transactions'),
                (mt.loading = !1),
                (mt.empty = !0),
                (mt.next = void 0);
            }
          },
          groupTransactionsByYearAndMonth(e = {}, t = []) {
            const r = e;
            return (
              t.forEach((e) => {
                const t = new Date(e.metadata.minedAt).getFullYear(),
                  n = new Date(e.metadata.minedAt).getMonth(),
                  o = r[t] ?? {},
                  i = (o[n] ?? []).filter((t) => t.id !== e.id);
                r[t] = {
                  ...o,
                  [n]: [...i, e].sort(
                    (e, t) =>
                      new Date(t.metadata.minedAt).getTime() -
                      new Date(e.metadata.minedAt).getTime()
                  ),
                };
              }),
              r
            );
          },
          filterSpamTransactions: (e) =>
            e.filter((e) => !e.transfers.every((e) => !0 === e.nft_info?.flags.is_spam)),
          filterByConnectedChain(e) {
            const t = pa.state.activeCaipNetwork?.caipNetworkId;
            return e.filter((e) => e.metadata.chain === t);
          },
          clearCursor() {
            mt.next = void 0;
          },
          resetTransactions() {
            (mt.transactions = []),
              (mt.transactionsByYear = {}),
              (mt.lastNetworkInView = void 0),
              (mt.loading = !1),
              (mt.empty = !1),
              (mt.next = void 0);
          },
        },
        bt = Ie({ wcError: !1, buffering: !1, status: 'disconnected' });
      let yt;
      const Ct = {
          state: bt,
          subscribeKey: (e, t) => Pe(bt, e, t),
          _getClient: () => bt._client,
          setClient(e) {
            bt._client = _e(e);
          },
          async connectWalletConnect() {
            if (Re.isTelegram() || (Re.isSafari() && Re.isIos())) {
              if (yt) return await yt, void (yt = void 0);
              if (!Re.isPairingExpired(bt?.wcPairingExpiry)) {
                const e = bt.wcUri;
                return void (bt.wcUri = e);
              }
              (yt = this._getClient()
                ?.connectWalletConnect?.()
                .catch(() => {})),
                (this.state.status = 'connecting'),
                await yt,
                (yt = void 0),
                (bt.wcPairingExpiry = void 0),
                (this.state.status = 'connected');
            } else await this._getClient()?.connectWalletConnect?.();
          },
          async connectExternal(e, t, r = !0) {
            await this._getClient()?.connectExternal?.(e), r && pa.setActiveNamespace(t);
          },
          async reconnectExternal(e) {
            await this._getClient()?.reconnectExternal?.(e);
            const t = e.chain || pa.state.activeChain;
            t && dt.setConnectorId(e.id, t);
          },
          async setPreferredAccountType(e, t) {
            Ca.setLoading(!0, pa.state.activeChain);
            const r = dt.getAuthConnector();
            r &&
              (ba.setPreferredAccountType(e, t),
              await r.provider.setPreferredAccount(e),
              $e.setPreferredAccountTypes(ba.state.preferredAccountTypes ?? { [t]: e }),
              await this.reconnectExternal(r),
              Ca.setLoading(!1, pa.state.activeChain),
              Je.sendEvent({
                type: 'track',
                event: 'SET_PREFERRED_ACCOUNT_TYPE',
                properties: {
                  accountType: e,
                  network: pa.state.activeCaipNetwork?.caipNetworkId || '',
                },
              }));
          },
          async signMessage(e) {
            return this._getClient()?.signMessage(e);
          },
          parseUnits(e, t) {
            return this._getClient()?.parseUnits(e, t);
          },
          formatUnits(e, t) {
            return this._getClient()?.formatUnits(e, t);
          },
          async sendTransaction(e) {
            return this._getClient()?.sendTransaction(e);
          },
          async getCapabilities(e) {
            return this._getClient()?.getCapabilities(e);
          },
          async grantPermissions(e) {
            return this._getClient()?.grantPermissions(e);
          },
          async walletGetAssets(e) {
            return this._getClient()?.walletGetAssets(e) ?? {};
          },
          async estimateGas(e) {
            return this._getClient()?.estimateGas(e);
          },
          async writeContract(e) {
            return this._getClient()?.writeContract(e);
          },
          async getEnsAddress(e) {
            return this._getClient()?.getEnsAddress(e);
          },
          async getEnsAvatar(e) {
            return this._getClient()?.getEnsAvatar(e);
          },
          checkInstalled(e) {
            return this._getClient()?.checkInstalled?.(e) || !1;
          },
          resetWcConnection() {
            (bt.wcUri = void 0),
              (bt.wcPairingExpiry = void 0),
              (bt.wcLinking = void 0),
              (bt.recentWallet = void 0),
              (bt.status = 'disconnected'),
              vt.resetTransactions(),
              $e.deleteWalletConnectDeepLink();
          },
          resetUri() {
            (bt.wcUri = void 0), (bt.wcPairingExpiry = void 0);
          },
          finalizeWcConnection() {
            const { wcLinking: e, recentWallet: t } = Ct.state;
            e && $e.setWalletConnectDeepLink(e),
              t && $e.setAppKitRecent(t),
              Je.sendEvent({
                type: 'track',
                event: 'CONNECT_SUCCESS',
                properties: {
                  method: e ? 'mobile' : 'qrcode',
                  name: it.state.data?.wallet?.name || 'Unknown',
                },
              });
          },
          setWcBasic(e) {
            bt.wcBasic = e;
          },
          setUri(e) {
            (bt.wcUri = e), (bt.wcPairingExpiry = Re.getPairingExpiry());
          },
          setWcLinking(e) {
            bt.wcLinking = e;
          },
          setWcError(e) {
            (bt.wcError = e), (bt.buffering = !1);
          },
          setRecentWallet(e) {
            bt.recentWallet = e;
          },
          setBuffering(e) {
            bt.buffering = e;
          },
          setStatus(e) {
            bt.status = e;
          },
          async disconnect(e) {
            try {
              Ca.setLoading(!0, e),
                await wt.clearSessions(),
                await pa.disconnect(e),
                Ca.setLoading(!1, e),
                dt.setFilterByNamespace(void 0);
            } catch {
              throw new Error('Failed to disconnect');
            }
          },
        },
        xt = Ie({
          loading: !1,
          open: !1,
          selectedNetworkId: void 0,
          activeChain: void 0,
          initialized: !1,
        }),
        kt = {
          state: xt,
          subscribe: (e) => Ne(xt, () => e(xt)),
          subscribeOpen: (e) => Pe(xt, 'open', e),
          set(e) {
            Object.assign(xt, { ...xt, ...e });
          },
        };
      function At(e, { strict: t = !0 } = {}) {
        return (
          !(!e || 'string' != typeof e) && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith('0x'))
        );
      }
      function Et(e) {
        return At(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      const It = '2.27.0';
      let Nt = ({ docsBaseUrl: e, docsPath: t = '', docsSlug: r }) =>
          t ? `${e ?? 'https://viem.sh'}${t}${r ? `#${r}` : ''}` : void 0,
        St = `viem@${It}`;
      class _t extends Error {
        constructor(e, t = {}) {
          const r =
              t.cause instanceof _t
                ? t.cause.details
                : t.cause?.message
                  ? t.cause.message
                  : t.details,
            n = (t.cause instanceof _t && t.cause.docsPath) || t.docsPath,
            o = Nt?.({ ...t, docsPath: n });
          super(
            [
              e || 'An error occurred.',
              '',
              ...(t.metaMessages ? [...t.metaMessages, ''] : []),
              ...(o ? [`Docs: ${o}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(St ? [`Version: ${St}`] : []),
            ].join('\n'),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, 'details', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docsPath', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'metaMessages', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'shortMessage', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'version', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'BaseError',
            }),
            (this.details = r),
            (this.docsPath = n),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = It);
        }
        walk(e) {
          return Pt(this, e);
        }
      }
      function Pt(e, t) {
        return t?.(e)
          ? e
          : e && 'object' == typeof e && 'cause' in e && void 0 !== e.cause
            ? Pt(e.cause, t)
            : t
              ? null
              : e;
      }
      class Tt extends _t {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${'start' === t ? 'starting' : 'ending'} at offset "${e}" is out-of-bounds (size: ${r}).`,
            { name: 'SliceOffsetOutOfBoundsError' }
          );
        }
      }
      class Ot extends _t {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: 'SizeExceedsPaddingSizeError' }
          );
        }
      }
      function $t(e, { dir: t, size: r = 32 } = {}) {
        return 'string' == typeof e
          ? (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              const n = e.replace('0x', '');
              if (n.length > 2 * r)
                throw new Ot({ size: Math.ceil(n.length / 2), targetSize: r, type: 'hex' });
              return `0x${n['right' === t ? 'padEnd' : 'padStart'](2 * r, '0')}`;
            })(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r) throw new Ot({ size: e.length, targetSize: r, type: 'bytes' });
              const n = new Uint8Array(r);
              for (let o = 0; o < r; o++) {
                const i = 'right' === t;
                n[i ? o : r - o - 1] = e[i ? o : e.length - o - 1];
              }
              return n;
            })(e, { dir: t, size: r });
      }
      class Rt extends _t {
        constructor({ max: e, min: t, signed: r, size: n, value: o }) {
          super(
            `Number "${o}" is not in safe ${n ? `${8 * n}-bit ${r ? 'signed' : 'unsigned'} ` : ''}integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: 'IntegerOutOfRangeError' }
          );
        }
      }
      class Bt extends _t {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: 'SizeOverflowError',
          });
        }
      }
      function Lt(e, { dir: t = 'left' } = {}) {
        let r = 'string' == typeof e ? e.replace('0x', '') : e,
          n = 0;
        for (
          let o = 0;
          o < r.length - 1 && '0' === r['left' === t ? o : r.length - o - 1].toString();
          o++
        )
          n++;
        return (
          (r = 'left' === t ? r.slice(n) : r.slice(0, r.length - n)),
          'string' == typeof e
            ? (1 === r.length && 'right' === t && (r = `${r}0`),
              `0x${r.length % 2 === 1 ? `0${r}` : r}`)
            : r
        );
      }
      function Ut(e, { size: t }) {
        if (Et(e) > t) throw new Bt({ givenSize: Et(e), maxSize: t });
      }
      function Mt(e, t = {}) {
        const { signed: r } = t;
        t.size && Ut(e, { size: t.size });
        const n = BigInt(e);
        if (!r) return n;
        const o = (e.length - 2) / 2;
        return n <= (1n << (8n * BigInt(o) - 1n)) - 1n
          ? n
          : n - BigInt(`0x${'f'.padStart(2 * o, 'f')}`) - 1n;
      }
      function zt(e, t = {}) {
        return Number(Mt(e, t));
      }
      const jt = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function Dt(e, t = {}) {
        return 'number' == typeof e || 'bigint' == typeof e
          ? Ht(e, t)
          : 'string' == typeof e
            ? Vt(e, t)
            : 'boolean' == typeof e
              ? (function (e, t = {}) {
                  const r = `0x${Number(e)}`;
                  return 'number' == typeof t.size
                    ? (Ut(r, { size: t.size }), $t(r, { size: t.size }))
                    : r;
                })(e, t)
              : Wt(e, t);
      }
      function Wt(e, t = {}) {
        let r = '';
        for (let o = 0; o < e.length; o++) r += jt[e[o]];
        const n = `0x${r}`;
        return 'number' == typeof t.size
          ? (Ut(n, { size: t.size }), $t(n, { dir: 'right', size: t.size }))
          : n;
      }
      function Ht(e, t = {}) {
        const { signed: r, size: n } = t,
          o = BigInt(e);
        let i;
        n
          ? (i = r ? (1n << (8n * BigInt(n) - 1n)) - 1n : 2n ** (8n * BigInt(n)) - 1n)
          : 'number' == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
        const s = 'bigint' == typeof i && r ? -i - 1n : 0;
        if ((i && o > i) || o < s) {
          const t = 'bigint' == typeof e ? 'n' : '';
          throw new Rt({
            max: i ? `${i}${t}` : void 0,
            min: `${s}${t}`,
            signed: r,
            size: n,
            value: `${e}${t}`,
          });
        }
        const a = `0x${(r && o < 0 ? (1n << BigInt(8 * n)) + BigInt(o) : o).toString(16)}`;
        return n ? $t(a, { size: n }) : a;
      }
      const Ft = new TextEncoder();
      function Vt(e, t = {}) {
        return Wt(Ft.encode(e), t);
      }
      const qt = new TextEncoder();
      function Zt(e, t = {}) {
        return 'number' == typeof e || 'bigint' == typeof e
          ? (function (e, t) {
              return tr(Ht(e, t));
            })(e, t)
          : 'boolean' == typeof e
            ? (function (e, t = {}) {
                const r = new Uint8Array(1);
                return (
                  (r[0] = Number(e)),
                  'number' == typeof t.size ? (Ut(r, { size: t.size }), $t(r, { size: t.size })) : r
                );
              })(e, t)
            : At(e)
              ? tr(e, t)
              : rr(e, t);
      }
      const Gt = 48,
        Kt = 57,
        Yt = 65,
        Xt = 70,
        Jt = 97,
        Qt = 102;
      function er(e) {
        return e >= Gt && e <= Kt
          ? e - Gt
          : e >= Yt && e <= Xt
            ? e - (Yt - 10)
            : e >= Jt && e <= Qt
              ? e - (Jt - 10)
              : void 0;
      }
      function tr(e, t = {}) {
        let r = e;
        t.size && (Ut(r, { size: t.size }), (r = $t(r, { dir: 'right', size: t.size })));
        let n = r.slice(2);
        n.length % 2 && (n = `0${n}`);
        const o = n.length / 2,
          i = new Uint8Array(o);
        for (let s = 0, a = 0; s < o; s++) {
          const e = er(n.charCodeAt(a++)),
            t = er(n.charCodeAt(a++));
          if (void 0 === e || void 0 === t)
            throw new _t(`Invalid byte sequence ("${n[a - 2]}${n[a - 1]}" in "${n}").`);
          i[s] = 16 * e + t;
        }
        return i;
      }
      function rr(e, t = {}) {
        const r = qt.encode(e);
        return 'number' == typeof t.size
          ? (Ut(r, { size: t.size }), $t(r, { dir: 'right', size: t.size }))
          : r;
      }
      function nr(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error('positive integer expected, got ' + e);
      }
      function or(e, ...t) {
        if (
          !(function (e) {
            return (
              e instanceof Uint8Array ||
              (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
            );
          })(e)
        )
          throw new Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw new Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function ir(e, t = !0) {
        if (e.destroyed) throw new Error('Hash instance has been destroyed');
        if (t && e.finished) throw new Error('Hash#digest() has already been called');
      }
      function sr(e, t) {
        or(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error('digestInto() expects output buffer of length at least ' + r);
      }
      const ar = BigInt(2 ** 32 - 1),
        cr = BigInt(32);
      function lr(e, t = !1) {
        return t
          ? { h: Number(e & ar), l: Number((e >> cr) & ar) }
          : { h: 0 | Number((e >> cr) & ar), l: 0 | Number(e & ar) };
      }
      const dr =
        'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function ur(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function hr(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      const pr = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function gr(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function fr(e) {
        for (let t = 0; t < e.length; t++) e[t] = gr(e[t]);
      }
      function wr(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw new Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          or(e),
          e
        );
      }
      class mr {
        clone() {
          return this._cloneInto();
        }
      }
      function vr(e) {
        const t = (t) => e().update(wr(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function br(e = 32) {
        if (dr && 'function' == typeof dr.getRandomValues)
          return dr.getRandomValues(new Uint8Array(e));
        if (dr && 'function' == typeof dr.randomBytes) return dr.randomBytes(e);
        throw new Error('crypto.getRandomValues must be defined');
      }
      const yr = [],
        Cr = [],
        xr = [],
        kr = BigInt(0),
        Ar = BigInt(1),
        Er = BigInt(2),
        Ir = BigInt(7),
        Nr = BigInt(256),
        Sr = BigInt(113);
      for (let Yv = 0, Xv = Ar, Jv = 1, Qv = 0; Yv < 24; Yv++) {
        ([Jv, Qv] = [Qv, (2 * Jv + 3 * Qv) % 5]),
          yr.push(2 * (5 * Qv + Jv)),
          Cr.push((((Yv + 1) * (Yv + 2)) / 2) % 64);
        let e = kr;
        for (let t = 0; t < 7; t++)
          (Xv = ((Xv << Ar) ^ ((Xv >> Ir) * Sr)) % Nr),
            Xv & Er && (e ^= Ar << ((Ar << BigInt(t)) - Ar));
        xr.push(e);
      }
      const [_r, Pr] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let o = 0; o < e.length; o++) {
            const { h: i, l: s } = lr(e[o], t);
            [r[o], n[o]] = [i, s];
          }
          return [r, n];
        })(xr, !0),
        Tr = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (t << (r - 32)) | (e >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (e << r) | (t >>> (32 - r)))(e, t, r),
        Or = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (e << (r - 32)) | (t >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (t << r) | (e >>> (32 - r)))(e, t, r);
      class $r extends mr {
        constructor(e, t, r, n = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = n),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            nr(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          pr || fr(this.state32),
            (function (e, t = 24) {
              const r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let n = 0; n < 10; n++)
                  r[n] = e[n] ^ e[n + 10] ^ e[n + 20] ^ e[n + 30] ^ e[n + 40];
                for (let n = 0; n < 10; n += 2) {
                  const t = (n + 8) % 10,
                    o = (n + 2) % 10,
                    i = r[o],
                    s = r[o + 1],
                    a = Tr(i, s, 1) ^ r[t],
                    c = Or(i, s, 1) ^ r[t + 1];
                  for (let r = 0; r < 50; r += 10) (e[n + r] ^= a), (e[n + r + 1] ^= c);
                }
                let t = e[2],
                  o = e[3];
                for (let r = 0; r < 24; r++) {
                  const n = Cr[r],
                    i = Tr(t, o, n),
                    s = Or(t, o, n),
                    a = yr[r];
                  (t = e[a]), (o = e[a + 1]), (e[a] = i), (e[a + 1] = s);
                }
                for (let n = 0; n < 50; n += 10) {
                  for (let t = 0; t < 10; t++) r[t] = e[n + t];
                  for (let t = 0; t < 10; t++) e[n + t] ^= ~r[(t + 2) % 10] & r[(t + 4) % 10];
                }
                (e[0] ^= _r[n]), (e[1] ^= Pr[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            pr || fr(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          ir(this);
          const { blockLen: t, state: r } = this,
            n = (e = wr(e)).length;
          for (let o = 0; o < n; ) {
            const i = Math.min(t - this.pos, n - o);
            for (let t = 0; t < i; t++) r[this.pos++] ^= e[o++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            0 !== (128 & t) && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          ir(this, !1), or(e), this.finish();
          const t = this.state,
            { blockLen: r } = this;
          for (let n = 0, o = e.length; n < o; ) {
            this.posOut >= r && this.keccak();
            const i = Math.min(r - this.posOut, o - n);
            e.set(t.subarray(this.posOut, this.posOut + i), n), (this.posOut += i), (n += i);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return nr(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((sr(e, this), this.finished)) throw new Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          const { blockLen: t, suffix: r, outputLen: n, rounds: o, enableXOF: i } = this;
          return (
            e || (e = new $r(t, r, n, i, o)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = o),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = i),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      const Rr = ((e, t, r) => vr(() => new $r(t, e, r)))(1, 136, 32);
      class Br extends _t {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              '- Address must be a hex value of 20 bytes (40 hex characters).',
              '- Address must match its checksum counterpart.',
            ],
            name: 'InvalidAddressError',
          });
        }
      }
      class Lr extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, 'maxSize', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          const t = super.get(e);
          return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            const e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      const Ur = new Lr(8192);
      function Mr(e, t) {
        if (Ur.has(`${e}.${t}`)) return Ur.get(`${e}.${t}`);
        const r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          n = (function (e, t) {
            const r = t || 'hex',
              n = Rr(At(e, { strict: !1 }) ? Zt(e) : e);
            return 'bytes' === r ? n : Dt(n);
          })(rr(r), 'bytes'),
          o = (t ? r.substring(`${t}0x`.length) : r).split('');
        for (let s = 0; s < 40; s += 2)
          n[s >> 1] >> 4 >= 8 && o[s] && (o[s] = o[s].toUpperCase()),
            (15 & n[s >> 1]) >= 8 && o[s + 1] && (o[s + 1] = o[s + 1].toUpperCase());
        const i = `0x${o.join('')}`;
        return Ur.set(`${e}.${t}`, i), i;
      }
      const zr = /^0x[a-fA-F0-9]{40}$/,
        jr = new Lr(8192);
      function Dr(e, t) {
        const { strict: r = !0 } = t ?? {},
          n = `${e}.${r}`;
        if (jr.has(n)) return jr.get(n);
        const o = !!zr.test(e) && (e.toLowerCase() === e || !r || Mr(e) === e);
        return jr.set(n, o), o;
      }
      function Wr(e) {
        return `0x${e.reduce((e, t) => e + t.replace('0x', ''), '')}`;
      }
      function Hr(e, t, r, { strict: n } = {}) {
        return At(e, { strict: !1 })
          ? (function (e, t, r, { strict: n } = {}) {
              Fr(e, t);
              const o = `0x${e.replace('0x', '').slice(2 * (t ?? 0), 2 * (r ?? e.length))}`;
              return n && Vr(o, t, r), o;
            })(e, t, r, { strict: n })
          : (function (e, t, r, { strict: n } = {}) {
              Fr(e, t);
              const o = e.slice(t, r);
              return n && Vr(o, t, r), o;
            })(e, t, r, { strict: n });
      }
      function Fr(e, t) {
        if ('number' == typeof t && t > 0 && t > Et(e) - 1)
          throw new Tt({ offset: t, position: 'start', size: Et(e) });
      }
      function Vr(e, t, r) {
        if ('number' == typeof t && 'number' == typeof r && Et(e) !== r - t)
          throw new Tt({ offset: r, position: 'end', size: Et(e) });
      }
      class qr extends _t {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, { name: 'NegativeOffsetError' });
        }
      }
      class Zr extends _t {
        constructor({ length: e, position: t }) {
          super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
            name: 'PositionOutOfBoundsError',
          });
        }
      }
      class Gr extends _t {
        constructor({ count: e, limit: t }) {
          super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`, {
            name: 'RecursiveReadLimitExceededError',
          });
        }
      }
      const Kr = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new Gr({ count: this.recursiveReadCount + 1, limit: this.recursiveReadLimit });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new Zr({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new qr({ offset: e });
          const t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new qr({ offset: e });
          const t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          const t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          const r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
        },
        inspectUint8(e) {
          const t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          const t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          const t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          const t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position), (this.bytes[this.position] = e), this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position), (this.bytes[this.position] = e), this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          const r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          const t = this.position;
          return this.assertPosition(e), (this.position = e), () => (this.position = t);
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          const e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
        },
      };
      function Yr(e, { recursiveReadLimit: t = 8192 } = {}) {
        const r = Object.create(Kr);
        return (
          (r.bytes = e),
          (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = t),
          r
        );
      }
      const Xr = (e, t, r) =>
          JSON.stringify(
            e,
            (e, r) => {
              const n = 'bigint' == typeof r ? r.toString() : r;
              return 'function' == typeof t ? t(e, n) : n;
            },
            r
          ),
        Jr = { ether: -9, wei: 9 };
      function Qr(e, t) {
        let r = e.toString();
        const n = r.startsWith('-');
        n && (r = r.slice(1)), (r = r.padStart(t, '0'));
        let [o, i] = [r.slice(0, r.length - t), r.slice(r.length - t)];
        return (i = i.replace(/(0+)$/, '')), `${n ? '-' : ''}${o || '0'}${i ? `.${i}` : ''}`;
      }
      function en(e, t = 'wei') {
        return Qr(e, Jr[t]);
      }
      function tn(e) {
        const t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join('\n');
      }
      class rn extends _t {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, { name: 'InvalidLegacyVError' });
        }
      }
      class nn extends _t {
        constructor({ transaction: e }) {
          super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
              'Provided Transaction:',
              '{',
              tn(e),
              '}',
              '',
              'To infer the type, either provide:',
              '- a `type` to the Transaction, or',
              '- an EIP-1559 Transaction with `maxFeePerGas`, or',
              '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
              '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
              '- an EIP-7702 Transaction with `authorizationList`, or',
              '- a Legacy Transaction with `gasPrice`',
            ],
            name: 'InvalidSerializableTransactionError',
          });
        }
      }
      class on extends _t {
        constructor({ storageKey: e }) {
          super(
            `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length - 2) / 2)} bytes.`,
            { name: 'InvalidStorageKeySizeError' }
          );
        }
      }
      class sn extends _t {
        constructor({ body: e, cause: t, details: r, headers: n, status: o, url: i }) {
          super('HTTP request failed.', {
            cause: t,
            details: r,
            metaMessages: [o && `Status: ${o}`, `URL: ${i}`, e && `Request body: ${Xr(e)}`].filter(
              Boolean
            ),
            name: 'HttpRequestError',
          }),
            Object.defineProperty(this, 'body', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'headers', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'status', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'url', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = n),
            (this.status = o),
            (this.url = i);
        }
      }
      class an extends _t {
        constructor({ body: e, error: t, url: r }) {
          super('RPC Request failed.', {
            cause: t,
            details: t.message,
            metaMessages: [`URL: ${r}`, `Request body: ${Xr(e)}`],
            name: 'RpcRequestError',
          }),
            Object.defineProperty(this, 'code', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'data', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code),
            (this.data = t.data);
        }
      }
      class cn extends _t {
        constructor({ body: e, url: t }) {
          super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [`URL: ${t}`, `Request body: ${Xr(e)}`],
            name: 'TimeoutError',
          });
        }
      }
      class ln extends _t {
        constructor(e, { code: t, docsPath: r, metaMessages: n, name: o, shortMessage: i }) {
          super(i, {
            cause: e,
            docsPath: r,
            metaMessages: n || e?.metaMessages,
            name: o || 'RpcError',
          }),
            Object.defineProperty(this, 'code', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = o || e.name),
            (this.code = e instanceof an ? e.code : (t ?? -1));
        }
      }
      class dn extends ln {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, 'data', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class un extends ln {
        constructor(e) {
          super(e, {
            code: un.code,
            name: 'ParseRpcError',
            shortMessage:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
          });
        }
      }
      Object.defineProperty(un, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class hn extends ln {
        constructor(e) {
          super(e, {
            code: hn.code,
            name: 'InvalidRequestRpcError',
            shortMessage: 'JSON is not a valid request object.',
          });
        }
      }
      Object.defineProperty(hn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class pn extends ln {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: pn.code,
            name: 'MethodNotFoundRpcError',
            shortMessage: `The method${t ? ` "${t}"` : ''} does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(pn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class gn extends ln {
        constructor(e) {
          super(e, {
            code: gn.code,
            name: 'InvalidParamsRpcError',
            shortMessage: [
              'Invalid parameters were provided to the RPC method.',
              'Double check you have provided the correct parameters.',
            ].join('\n'),
          });
        }
      }
      Object.defineProperty(gn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class fn extends ln {
        constructor(e) {
          super(e, {
            code: fn.code,
            name: 'InternalRpcError',
            shortMessage: 'An internal error was received.',
          });
        }
      }
      Object.defineProperty(fn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class wn extends ln {
        constructor(e) {
          super(e, {
            code: wn.code,
            name: 'InvalidInputRpcError',
            shortMessage: [
              'Missing or invalid parameters.',
              'Double check you have provided the correct parameters.',
            ].join('\n'),
          });
        }
      }
      Object.defineProperty(wn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class mn extends ln {
        constructor(e) {
          super(e, {
            code: mn.code,
            name: 'ResourceNotFoundRpcError',
            shortMessage: 'Requested resource not found.',
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ResourceNotFoundRpcError',
            });
        }
      }
      Object.defineProperty(mn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class vn extends ln {
        constructor(e) {
          super(e, {
            code: vn.code,
            name: 'ResourceUnavailableRpcError',
            shortMessage: 'Requested resource not available.',
          });
        }
      }
      Object.defineProperty(vn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class bn extends ln {
        constructor(e) {
          super(e, {
            code: bn.code,
            name: 'TransactionRejectedRpcError',
            shortMessage: 'Transaction creation failed.',
          });
        }
      }
      Object.defineProperty(bn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class yn extends ln {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: yn.code,
            name: 'MethodNotSupportedRpcError',
            shortMessage: `Method${t ? ` "${t}"` : ''} is not supported.`,
          });
        }
      }
      Object.defineProperty(yn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class Cn extends ln {
        constructor(e) {
          super(e, {
            code: Cn.code,
            name: 'LimitExceededRpcError',
            shortMessage: 'Request exceeds defined limit.',
          });
        }
      }
      Object.defineProperty(Cn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class xn extends ln {
        constructor(e) {
          super(e, {
            code: xn.code,
            name: 'JsonRpcVersionUnsupportedError',
            shortMessage: 'Version of JSON-RPC protocol is not supported.',
          });
        }
      }
      Object.defineProperty(xn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class kn extends dn {
        constructor(e) {
          super(e, {
            code: kn.code,
            name: 'UserRejectedRequestError',
            shortMessage: 'User rejected the request.',
          });
        }
      }
      Object.defineProperty(kn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class An extends dn {
        constructor(e) {
          super(e, {
            code: An.code,
            name: 'UnauthorizedProviderError',
            shortMessage:
              'The requested method and/or account has not been authorized by the user.',
          });
        }
      }
      Object.defineProperty(An, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class En extends dn {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: En.code,
            name: 'UnsupportedProviderMethodError',
            shortMessage: `The Provider does not support the requested method${t ? ` " ${t}"` : ''}.`,
          });
        }
      }
      Object.defineProperty(En, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class In extends dn {
        constructor(e) {
          super(e, {
            code: In.code,
            name: 'ProviderDisconnectedError',
            shortMessage: 'The Provider is disconnected from all chains.',
          });
        }
      }
      Object.defineProperty(In, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class Nn extends dn {
        constructor(e) {
          super(e, {
            code: Nn.code,
            name: 'ChainDisconnectedError',
            shortMessage: 'The Provider is not connected to the requested chain.',
          });
        }
      }
      Object.defineProperty(Nn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class Sn extends dn {
        constructor(e) {
          super(e, {
            code: Sn.code,
            name: 'SwitchChainError',
            shortMessage: 'An error occurred when attempting to switch chain.',
          });
        }
      }
      Object.defineProperty(Sn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class _n extends dn {
        constructor(e) {
          super(e, {
            code: _n.code,
            name: 'UnsupportedNonOptionalCapabilityError',
            shortMessage:
              'This Wallet does not support a capability that was not marked as optional.',
          });
        }
      }
      Object.defineProperty(_n, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class Pn extends dn {
        constructor(e) {
          super(e, {
            code: Pn.code,
            name: 'UnsupportedChainIdError',
            shortMessage: 'This Wallet does not support the requested chain ID.',
          });
        }
      }
      Object.defineProperty(Pn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class Tn extends dn {
        constructor(e) {
          super(e, {
            code: Tn.code,
            name: 'DuplicateIdError',
            shortMessage: 'There is already a bundle submitted with this ID.',
          });
        }
      }
      Object.defineProperty(Tn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class On extends dn {
        constructor(e) {
          super(e, {
            code: On.code,
            name: 'UnknownBundleIdError',
            shortMessage: 'This bundle id is unknown / has not been submitted',
          });
        }
      }
      Object.defineProperty(On, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class $n extends dn {
        constructor(e) {
          super(e, {
            code: $n.code,
            name: 'BundleTooLargeError',
            shortMessage: 'The call bundle is too large for the Wallet to process.',
          });
        }
      }
      Object.defineProperty($n, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class Rn extends dn {
        constructor(e) {
          super(e, {
            code: Rn.code,
            name: 'AtomicReadyWalletRejectedUpgradeError',
            shortMessage:
              'The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.',
          });
        }
      }
      Object.defineProperty(Rn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class Bn extends dn {
        constructor(e) {
          super(e, {
            code: Bn.code,
            name: 'AtomicityNotSupportedError',
            shortMessage:
              'The wallet does not support atomic execution but the request requires it.',
          });
        }
      }
      Object.defineProperty(Bn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class Ln extends ln {
        constructor(e) {
          super(e, { name: 'UnknownRpcError', shortMessage: 'An unknown RPC error occurred.' });
        }
      }
      function Un(e, t = 'hex') {
        const r = Mn(e),
          n = Yr(new Uint8Array(r.length));
        return r.encode(n), 'hex' === t ? Wt(n.bytes) : n.bytes;
      }
      function Mn(e) {
        return Array.isArray(e)
          ? (function (e) {
              const t = e.reduce((e, t) => e + t.length, 0),
                r = zn(t);
              return {
                length: t <= 55 ? 1 + t : 1 + r + t,
                encode(n) {
                  t <= 55
                    ? n.pushByte(192 + t)
                    : (n.pushByte(247 + r),
                      1 === r
                        ? n.pushUint8(t)
                        : 2 === r
                          ? n.pushUint16(t)
                          : 3 === r
                            ? n.pushUint24(t)
                            : n.pushUint32(t));
                  for (const { encode: t } of e) t(n);
                },
              };
            })(e.map((e) => Mn(e)))
          : (function (e) {
              const t = 'string' == typeof e ? tr(e) : e,
                r = zn(t.length);
              return {
                length:
                  1 === t.length && t[0] < 128
                    ? 1
                    : t.length <= 55
                      ? 1 + t.length
                      : 1 + r + t.length,
                encode(e) {
                  1 === t.length && t[0] < 128
                    ? e.pushBytes(t)
                    : t.length <= 55
                      ? (e.pushByte(128 + t.length), e.pushBytes(t))
                      : (e.pushByte(183 + r),
                        1 === r
                          ? e.pushUint8(t.length)
                          : 2 === r
                            ? e.pushUint16(t.length)
                            : 3 === r
                              ? e.pushUint24(t.length)
                              : e.pushUint32(t.length),
                        e.pushBytes(t));
                },
              };
            })(e);
      }
      function zn(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 2 ** 24) return 3;
        if (e < 2 ** 32) return 4;
        throw new _t('Length is too large.');
      }
      class jn extends _t {
        constructor({ cause: e, message: t } = {}) {
          const r = t?.replace('execution reverted: ', '')?.replace('execution reverted', '');
          super(`Execution reverted ${r ? `with reason: ${r}` : 'for an unknown reason'}.`, {
            cause: e,
            name: 'ExecutionRevertedError',
          });
        }
      }
      Object.defineProperty(jn, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(jn, 'nodeMessage', {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class Dn extends _t {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${t ? ` = ${en(t)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: 'FeeCapTooHighError' }
          );
        }
      }
      Object.defineProperty(Dn, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class Wn extends _t {
        constructor({ cause: e, maxPriorityFeePerGas: t, maxFeePerGas: r } = {}) {
          super(
            [
              `The provided tip (\`maxPriorityFeePerGas\`${t ? ` = ${en(t)} gwei` : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${en(r)} gwei` : ''}).`,
            ].join('\n'),
            { cause: e, name: 'TipAboveFeeCapError' }
          );
        }
      }
      function Hn(e, t) {
        return ({ exclude: r, format: n }) => ({
          exclude: r,
          format: (e) => {
            const o = t(e);
            if (r) for (const t of r) delete o[t];
            return { ...o, ...n(e) };
          },
          type: e,
        });
      }
      Object.defineProperty(Wn, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      const Fn = { legacy: '0x0', eip2930: '0x1', eip1559: '0x2', eip4844: '0x3', eip7702: '0x4' };
      const Vn = Hn('transactionRequest', function (e) {
        const t = {};
        return (
          typeof e.authorizationList < 'u' &&
            (t.authorizationList = (function (e) {
              return e.map((e) => ({
                address: e.address,
                r: e.r ? Ht(BigInt(e.r)) : e.r,
                s: e.s ? Ht(BigInt(e.s)) : e.s,
                chainId: Ht(e.chainId),
                nonce: Ht(e.nonce),
                ...(typeof e.yParity < 'u' ? { yParity: Ht(e.yParity) } : {}),
                ...(typeof e.v < 'u' && typeof e.yParity > 'u' ? { v: Ht(e.v) } : {}),
              }));
            })(e.authorizationList)),
          typeof e.accessList < 'u' && (t.accessList = e.accessList),
          typeof e.blobVersionedHashes < 'u' && (t.blobVersionedHashes = e.blobVersionedHashes),
          typeof e.blobs < 'u' &&
            ('string' != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => Wt(e)))
              : (t.blobs = e.blobs)),
          typeof e.data < 'u' && (t.data = e.data),
          typeof e.from < 'u' && (t.from = e.from),
          typeof e.gas < 'u' && (t.gas = Ht(e.gas)),
          typeof e.gasPrice < 'u' && (t.gasPrice = Ht(e.gasPrice)),
          typeof e.maxFeePerBlobGas < 'u' && (t.maxFeePerBlobGas = Ht(e.maxFeePerBlobGas)),
          typeof e.maxFeePerGas < 'u' && (t.maxFeePerGas = Ht(e.maxFeePerGas)),
          typeof e.maxPriorityFeePerGas < 'u' &&
            (t.maxPriorityFeePerGas = Ht(e.maxPriorityFeePerGas)),
          typeof e.nonce < 'u' && (t.nonce = Ht(e.nonce)),
          typeof e.to < 'u' && (t.to = e.to),
          typeof e.type < 'u' && (t.type = Fn[e.type]),
          typeof e.value < 'u' && (t.value = Ht(e.value)),
          t
        );
      });
      const qn = 2n ** 256n - 1n,
        Zn = {
          '0x0': 'legacy',
          '0x1': 'eip2930',
          '0x2': 'eip1559',
          '0x3': 'eip4844',
          '0x4': 'eip7702',
        };
      function Gn(e) {
        const t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? zt(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
          nonce: e.nonce ? zt(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
          type: e.type ? Zn[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = (function (e) {
              return e.map((e) => ({
                address: e.address,
                chainId: Number(e.chainId),
                nonce: Number(e.nonce),
                r: e.r,
                s: e.s,
                yParity: Number(e.yParity),
              }));
            })(e.authorizationList)),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ('bigint' == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
            }
          })()),
          'legacy' === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          'eip2930' === t.type &&
            (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas),
          'eip1559' === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
      const Kn = Hn('transaction', Gn);
      const Yn = Hn('block', function (e) {
        const t = (e.transactions ?? []).map((e) => ('string' == typeof e ? e : Gn(e)));
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      });
      function Xn(e) {
        const { kzg: t } = e,
          r = e.to ?? ('string' == typeof e.blobs[0] ? 'hex' : 'bytes'),
          n = 'string' == typeof e.blobs[0] ? e.blobs.map((e) => tr(e)) : e.blobs,
          o = [];
        for (const i of n) o.push(Uint8Array.from(t.blobToKzgCommitment(i)));
        return 'bytes' === r ? o : o.map((e) => Wt(e));
      }
      function Jn(e) {
        const { kzg: t } = e,
          r = e.to ?? ('string' == typeof e.blobs[0] ? 'hex' : 'bytes'),
          n = 'string' == typeof e.blobs[0] ? e.blobs.map((e) => tr(e)) : e.blobs,
          o = 'string' == typeof e.commitments[0] ? e.commitments.map((e) => tr(e)) : e.commitments,
          i = [];
        for (let s = 0; s < n.length; s++) {
          const e = n[s],
            r = o[s];
          i.push(Uint8Array.from(t.computeBlobKzgProof(e, r)));
        }
        return 'bytes' === r ? i : i.map((e) => Wt(e));
      }
      function Qn(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function eo(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      class to extends mr {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = ur(this.buffer));
        }
        update(e) {
          ir(this);
          const { view: t, buffer: r, blockLen: n } = this,
            o = (e = wr(e)).length;
          for (let i = 0; i < o; ) {
            const s = Math.min(n - this.pos, o - i);
            if (s !== n)
              r.set(e.subarray(i, i + s), this.pos),
                (this.pos += s),
                (i += s),
                this.pos === n && (this.process(t, 0), (this.pos = 0));
            else {
              const t = ur(e);
              for (; n <= o - i; i += n) this.process(t, i);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          ir(this), sr(e, this), (this.finished = !0);
          const { buffer: t, view: r, blockLen: n, isLE: o } = this;
          let { pos: i } = this;
          (t[i++] = 128),
            this.buffer.subarray(i).fill(0),
            this.padOffset > n - i && (this.process(r, 0), (i = 0));
          for (let d = i; d < n; d++) t[d] = 0;
          (function (e, t, r, n) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
            const o = BigInt(32),
              i = BigInt(4294967295),
              s = Number((r >> o) & i),
              a = Number(r & i),
              c = n ? 4 : 0,
              l = n ? 0 : 4;
            e.setUint32(t + c, s, n), e.setUint32(t + l, a, n);
          })(r, n - 8, BigInt(8 * this.length), o),
            this.process(r, 0);
          const s = ur(e),
            a = this.outputLen;
          if (a % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
          const c = a / 4,
            l = this.get();
          if (c > l.length) throw new Error('_sha2: outputLen bigger than state');
          for (let d = 0; d < c; d++) s.setUint32(4 * d, l[d], o);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const { blockLen: t, buffer: r, length: n, finished: o, destroyed: i, pos: s } = this;
          return (
            (e.length = n),
            (e.pos = s),
            (e.finished = o),
            (e.destroyed = i),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      const ro = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
          2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
          2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
          1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372,
          1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
          3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734,
          506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ]),
        no = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635,
          1541459225,
        ]),
        oo = new Uint32Array(64);
      class io extends to {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | no[0]),
            (this.B = 0 | no[1]),
            (this.C = 0 | no[2]),
            (this.D = 0 | no[3]),
            (this.E = 0 | no[4]),
            (this.F = 0 | no[5]),
            (this.G = 0 | no[6]),
            (this.H = 0 | no[7]);
        }
        get() {
          const { A: e, B: t, C: r, D: n, E: o, F: i, G: s, H: a } = this;
          return [e, t, r, n, o, i, s, a];
        }
        set(e, t, r, n, o, i, s, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | o),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let d = 0; d < 16; d++, t += 4) oo[d] = e.getUint32(t, !1);
          for (let d = 16; d < 64; d++) {
            const e = oo[d - 15],
              t = oo[d - 2],
              r = hr(e, 7) ^ hr(e, 18) ^ (e >>> 3),
              n = hr(t, 17) ^ hr(t, 19) ^ (t >>> 10);
            oo[d] = (n + oo[d - 7] + r + oo[d - 16]) | 0;
          }
          let { A: r, B: n, C: o, D: i, E: s, F: a, G: c, H: l } = this;
          for (let d = 0; d < 64; d++) {
            const e = (l + (hr(s, 6) ^ hr(s, 11) ^ hr(s, 25)) + Qn(s, a, c) + ro[d] + oo[d]) | 0,
              t = ((hr(r, 2) ^ hr(r, 13) ^ hr(r, 22)) + eo(r, n, o)) | 0;
            (l = c),
              (c = a),
              (a = s),
              (s = (i + e) | 0),
              (i = o),
              (o = n),
              (n = r),
              (r = (e + t) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (o = (o + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, n, o, i, s, a, c, l);
        }
        roundClean() {
          oo.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const so = vr(() => new io());
      function ao(e) {
        const { commitment: t, version: r = 1 } = e,
          n = e.to ?? ('string' == typeof t ? 'hex' : 'bytes'),
          o = (function (e, t) {
            const r = t || 'hex',
              n = so(At(e, { strict: !1 }) ? Zt(e) : e);
            return 'bytes' === r ? n : Dt(n);
          })(t, 'bytes');
        return o.set([r], 0), 'bytes' === n ? o : Wt(o);
      }
      const co = 4096,
        lo = 32 * co,
        uo = 761855;
      class ho extends _t {
        constructor({ maxSize: e, size: t }) {
          super('Blob size is too large.', {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: 'BlobSizeTooLargeError',
          });
        }
      }
      class po extends _t {
        constructor() {
          super('Blob data must not be empty.', { name: 'EmptyBlobError' });
        }
      }
      class go extends _t {
        constructor({ hash: e, size: t }) {
          super(`Versioned hash "${e}" size is invalid.`, {
            metaMessages: ['Expected: 32', `Received: ${t}`],
            name: 'InvalidVersionedHashSizeError',
          });
        }
      }
      class fo extends _t {
        constructor({ hash: e, version: t }) {
          super(`Versioned hash "${e}" version is invalid.`, {
            metaMessages: ['Expected: 1', `Received: ${t}`],
            name: 'InvalidVersionedHashVersionError',
          });
        }
      }
      function wo(e) {
        const { data: t, kzg: r, to: n } = e,
          o =
            e.blobs ??
            (function (e) {
              const t = e.to ?? ('string' == typeof e.data ? 'hex' : 'bytes'),
                r = 'string' == typeof e.data ? tr(e.data) : e.data,
                n = Et(r);
              if (!n) throw new po();
              if (n > uo) throw new ho({ maxSize: uo, size: n });
              const o = [];
              let i = !0,
                s = 0;
              for (; i; ) {
                const e = Yr(new Uint8Array(lo));
                let t = 0;
                for (; t < co; ) {
                  const n = r.slice(s, s + 31);
                  if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                    e.pushByte(128), (i = !1);
                    break;
                  }
                  t++, (s += 31);
                }
                o.push(e);
              }
              return 'bytes' === t ? o.map((e) => e.bytes) : o.map((e) => Wt(e.bytes));
            })({ data: t, to: n }),
          i = e.commitments ?? Xn({ blobs: o, kzg: r, to: n }),
          s = e.proofs ?? Jn({ blobs: o, commitments: i, kzg: r, to: n }),
          a = [];
        for (let c = 0; c < o.length; c++) a.push({ blob: o[c], commitment: i[c], proof: s[c] });
        return a;
      }
      class mo extends _t {
        constructor({ chainId: e }) {
          super('number' == typeof e ? `Chain ID "${e}" is invalid.` : 'Chain ID is invalid.', {
            name: 'InvalidChainIdError',
          });
        }
      }
      const vo = new Map();
      function bo({ fn: e, id: t, shouldSplitBatch: r, wait: n = 0, sort: o }) {
        const i = async () => {
            const t = a();
            s();
            const r = t.map(({ args: e }) => e);
            0 !== r.length &&
              e(r)
                .then((e) => {
                  o && Array.isArray(e) && e.sort(o);
                  for (let r = 0; r < t.length; r++) {
                    const { resolve: n } = t[r];
                    n?.([e[r], e]);
                  }
                })
                .catch((e) => {
                  for (let r = 0; r < t.length; r++) {
                    const { reject: n } = t[r];
                    n?.(e);
                  }
                });
          },
          s = () => vo.delete(t),
          a = () => vo.get(t) || [],
          c = (e) => vo.set(t, [...a(), e]);
        return {
          flush: s,
          async schedule(e) {
            const {
              promise: t,
              resolve: o,
              reject: s,
            } = (function () {
              let e = () => {},
                t = () => {};
              return {
                promise: new Promise((r, n) => {
                  (e = r), (t = n);
                }),
                resolve: e,
                reject: t,
              };
            })();
            return (
              r?.([...a().map(({ args: e }) => e), e]) && i(),
              a().length > 0
                ? (c({ args: e, resolve: o, reject: s }), t)
                : (c({ args: e, resolve: o, reject: s }), setTimeout(i, n), t)
            );
          },
        };
      }
      async function yo(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      new Lr(128);
      let Co,
        xo = 256;
      const ko = new Lr(8192);
      function Ao(e, { delay: t = 100, retryCount: r = 2, shouldRetry: n = () => !0 } = {}) {
        return new Promise((o, i) => {
          const s = async ({ count: a = 0 } = {}) => {
            try {
              const t = await e();
              o(t);
            } catch (c) {
              if (a < r && (await n({ count: a, error: c })))
                return (async ({ error: e }) => {
                  const r = 'function' == typeof t ? t({ count: a, error: e }) : t;
                  r && (await yo(r)), s({ count: a + 1 });
                })({ error: c });
              i(c);
            }
          };
          s();
        });
      }
      function Eo(e, t = {}) {
        return async (r, n = {}) => {
          const {
              dedupe: o = !1,
              methods: i,
              retryDelay: s = 150,
              retryCount: a = 3,
              uid: c,
            } = { ...t, ...n },
            { method: l } = r;
          if (i?.exclude?.includes(l))
            throw new yn(new Error('method not supported'), { method: l });
          if (i?.include && !i.include.includes(l))
            throw new yn(new Error('method not supported'), { method: l });
          return (function (e, { enabled: t = !0, id: r }) {
            if (!t || !r) return e();
            if (ko.get(r)) return ko.get(r);
            const n = e().finally(() => ko.delete(r));
            return ko.set(r, n), n;
          })(
            () =>
              Ao(
                async () => {
                  try {
                    return await e(r);
                  } catch (t) {
                    const e = t;
                    switch (e.code) {
                      case un.code:
                        throw new un(e);
                      case hn.code:
                        throw new hn(e);
                      case pn.code:
                        throw new pn(e, { method: r.method });
                      case gn.code:
                        throw new gn(e);
                      case fn.code:
                        throw new fn(e);
                      case wn.code:
                        throw new wn(e);
                      case mn.code:
                        throw new mn(e);
                      case vn.code:
                        throw new vn(e);
                      case bn.code:
                        throw new bn(e);
                      case yn.code:
                        throw new yn(e, { method: r.method });
                      case Cn.code:
                        throw new Cn(e);
                      case xn.code:
                        throw new xn(e);
                      case kn.code:
                        throw new kn(e);
                      case An.code:
                        throw new An(e);
                      case En.code:
                        throw new En(e);
                      case In.code:
                        throw new In(e);
                      case Nn.code:
                        throw new Nn(e);
                      case Sn.code:
                        throw new Sn(e);
                      case _n.code:
                        throw new _n(e);
                      case Pn.code:
                        throw new Pn(e);
                      case Tn.code:
                        throw new Tn(e);
                      case On.code:
                        throw new On(e);
                      case $n.code:
                        throw new $n(e);
                      case Rn.code:
                        throw new Rn(e);
                      case Bn.code:
                        throw new Bn(e);
                      case 5e3:
                        throw new kn(e);
                      default:
                        throw t instanceof _t ? t : new Ln(e);
                    }
                  }
                },
                {
                  delay: ({ count: e, error: t }) => {
                    if (t && t instanceof sn) {
                      const e = t?.headers?.get('Retry-After');
                      if (e?.match(/\d/)) return 1e3 * Number.parseInt(e);
                    }
                    return ~~(1 << e) * s;
                  },
                  retryCount: a,
                  shouldRetry: ({ error: e }) =>
                    (function (e) {
                      return 'code' in e && 'number' == typeof e.code
                        ? -1 === e.code || e.code === Cn.code || e.code === fn.code
                        : !(e instanceof sn && e.status) ||
                            403 === e.status ||
                            408 === e.status ||
                            413 === e.status ||
                            429 === e.status ||
                            500 === e.status ||
                            502 === e.status ||
                            503 === e.status ||
                            504 === e.status;
                    })(e),
                }
              ),
            { enabled: o, id: o ? Vt(`${c}.${Xr(r)}`) : void 0 }
          );
        };
      }
      function Io(
        {
          key: e,
          methods: t,
          name: r,
          request: n,
          retryCount: o = 3,
          retryDelay: i = 150,
          timeout: s,
          type: a,
        },
        c
      ) {
        const l = (function (e = 11) {
          if (!Co || xo + e > 512) {
            (Co = ''), (xo = 0);
            for (let e = 0; e < 256; e++)
              Co += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
          }
          return Co.substring(xo, xo++ + e);
        })();
        return {
          config: {
            key: e,
            methods: t,
            name: r,
            request: n,
            retryCount: o,
            retryDelay: i,
            timeout: s,
            type: a,
          },
          request: Eo(n, { methods: t, retryCount: o, retryDelay: i, uid: l }),
          value: c,
        };
      }
      function No(e, t = {}) {
        const {
          key: r = 'fallback',
          name: n = 'Fallback',
          rank: o = !1,
          shouldThrow: i = So,
          retryCount: s,
          retryDelay: a,
        } = t;
        return ({ chain: t, pollingInterval: c = 4e3, timeout: l, ...d }) => {
          let u = e,
            h = () => {};
          const p = Io(
            {
              key: r,
              name: n,
              async request({ method: e, params: r }) {
                let n;
                const o = async (s = 0) => {
                  const a = u[s]({ ...d, chain: t, retryCount: 0, timeout: l });
                  try {
                    const t = await a.request({ method: e, params: r });
                    return (
                      h({ method: e, params: r, response: t, transport: a, status: 'success' }), t
                    );
                  } catch (c) {
                    if (
                      (h({ error: c, method: e, params: r, transport: a, status: 'error' }),
                      i(c) ||
                        s === u.length - 1 ||
                        ((n ??= u.slice(s + 1).some((r) => {
                          const { include: n, exclude: o } = r({ chain: t }).config.methods || {};
                          return n ? n.includes(e) : !o || !o.includes(e);
                        })),
                        !n))
                    )
                      throw c;
                    return o(s + 1);
                  }
                };
                return o();
              },
              retryCount: s,
              retryDelay: a,
              type: 'fallback',
            },
            { onResponse: (e) => (h = e), transports: u.map((e) => e({ chain: t, retryCount: 0 })) }
          );
          if (o) {
            const e = 'object' == typeof o ? o : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: r,
              ping: n,
              sampleCount: o = 10,
              timeout: i = 1e3,
              transports: s,
              weights: a = {},
            }) {
              const { stability: c = 0.7, latency: l = 0.3 } = a,
                d = [],
                u = async () => {
                  const a = await Promise.all(
                    s.map(async (t) => {
                      const r = t({ chain: e, retryCount: 0, timeout: i }),
                        o = Date.now();
                      let s, a;
                      try {
                        await (n ? n({ transport: r }) : r.request({ method: 'net_listening' })),
                          (a = 1);
                      } catch {
                        a = 0;
                      } finally {
                        s = Date.now();
                      }
                      return { latency: s - o, success: a };
                    })
                  );
                  d.push(a), d.length > o && d.shift();
                  const h = Math.max(...d.map((e) => Math.max(...e.map(({ latency: e }) => e)))),
                    p = s
                      .map((e, t) => {
                        const r = d.map((e) => e[t].latency),
                          n = 1 - r.reduce((e, t) => e + t, 0) / r.length / h,
                          o = d.map((e) => e[t].success),
                          i = o.reduce((e, t) => e + t, 0) / o.length;
                        return 0 === i ? [0, t] : [l * n + c * i, t];
                      })
                      .sort((e, t) => t[0] - e[0]);
                  r(p.map(([, e]) => s[e])), await yo(t), u();
                };
              u();
            })({
              chain: t,
              interval: e.interval ?? c,
              onTransports: (e) => (u = e),
              ping: e.ping,
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: u,
              weights: e.weights,
            });
          }
          return p;
        };
      }
      function So(e) {
        return !(
          !('code' in e) ||
          'number' != typeof e.code ||
          (e.code !== bn.code &&
            e.code !== kn.code &&
            !jn.nodeMessage.test(e.message) &&
            5e3 !== e.code)
        );
      }
      class _o extends _t {
        constructor() {
          super(
            'No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.',
            { docsPath: '/docs/clients/intro', name: 'UrlRequiredError' }
          );
        }
      }
      const Po = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      function To(e, t = {}) {
        return {
          async request(r) {
            const {
                body: n,
                onRequest: o = t.onRequest,
                onResponse: i = t.onResponse,
                timeout: s = t.timeout ?? 1e4,
              } = r,
              a = { ...(t.fetchOptions ?? {}), ...(r.fetchOptions ?? {}) },
              { headers: c, method: l, signal: d } = a;
            try {
              const t = await (function (
                e,
                { errorInstance: t = new Error('timed out'), timeout: r, signal: n }
              ) {
                return new Promise((o, i) => {
                  (async () => {
                    let s;
                    try {
                      const a = new AbortController();
                      r > 0 &&
                        (s = setTimeout(() => {
                          n ? a.abort() : i(t);
                        }, r)),
                        o(await e({ signal: a?.signal || null }));
                    } catch (a) {
                      'AbortError' === a?.name && i(t), i(a);
                    } finally {
                      clearTimeout(s);
                    }
                  })();
                });
              })(
                async ({ signal: t }) => {
                  const r = {
                      ...a,
                      body: Array.isArray(n)
                        ? Xr(n.map((e) => ({ jsonrpc: '2.0', id: e.id ?? Po.take(), ...e })))
                        : Xr({ jsonrpc: '2.0', id: n.id ?? Po.take(), ...n }),
                      headers: { 'Content-Type': 'application/json', ...c },
                      method: l || 'POST',
                      signal: d || (s > 0 ? t : null),
                    },
                    i = new Request(e, r),
                    u = (await o?.(i, r)) ?? { ...r, url: e };
                  return await fetch(u.url ?? e, u);
                },
                { errorInstance: new cn({ body: n, url: e }), timeout: s, signal: !0 }
              );
              let r;
              if (
                (i && (await i(t)), t.headers.get('Content-Type')?.startsWith('application/json'))
              )
                r = await t.json();
              else {
                r = await t.text();
                try {
                  r = JSON.parse(r || '{}');
                } catch (u) {
                  if (t.ok) throw u;
                  r = { error: r };
                }
              }
              if (!t.ok)
                throw new sn({
                  body: n,
                  details: Xr(r.error) || t.statusText,
                  headers: t.headers,
                  status: t.status,
                  url: e,
                });
              return r;
            } catch (h) {
              throw h instanceof sn || h instanceof cn ? h : new sn({ body: n, cause: h, url: e });
            }
          },
        };
      }
      function Oo(e, t = {}) {
        const {
          batch: r,
          fetchOptions: n,
          key: o = 'http',
          methods: i,
          name: s = 'HTTP JSON-RPC',
          onFetchRequest: a,
          onFetchResponse: c,
          retryDelay: l,
          raw: d,
        } = t;
        return ({ chain: u, retryCount: h, timeout: p }) => {
          const { batchSize: g = 1e3, wait: f = 0 } = 'object' == typeof r ? r : {},
            w = t.retryCount ?? h,
            m = p ?? t.timeout ?? 1e4,
            v = e || u?.rpcUrls.default.http[0];
          if (!v) throw new _o();
          const b = To(v, { fetchOptions: n, onRequest: a, onResponse: c, timeout: m });
          return Io(
            {
              key: o,
              methods: i,
              name: s,
              async request({ method: e, params: t }) {
                const n = { method: e, params: t },
                  { schedule: o } = bo({
                    id: v,
                    wait: f,
                    shouldSplitBatch: (e) => e.length > g,
                    fn: (e) => b.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  [{ error: i, result: s }] = await (async (e) =>
                    r ? o(e) : [await b.request({ body: e })])(n);
                if (d) return { error: i, result: s };
                if (i) throw new an({ body: n, error: i, url: v });
                return s;
              },
              retryCount: w,
              retryDelay: l,
              timeout: m,
              type: 'http',
            },
            { fetchOptions: n, url: v }
          );
        };
      }
      function $o(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      function Ro(e) {
        const { chainId: t, maxPriorityFeePerGas: r, maxFeePerGas: n, to: o } = e;
        if (t <= 0) throw new mo({ chainId: t });
        if (o && !Dr(o)) throw new Br({ address: o });
        if (n && n > qn) throw new Dn({ maxFeePerGas: n });
        if (r && n && r > n) throw new Wn({ maxFeePerGas: n, maxPriorityFeePerGas: r });
      }
      function Bo(e) {
        if (!e || 0 === e.length) return [];
        const t = [];
        for (let r = 0; r < e.length; r++) {
          const { address: n, storageKeys: o } = e[r];
          for (let e = 0; e < o.length; e++)
            if (o[e].length - 2 !== 64) throw new on({ storageKey: o[e] });
          if (!Dr(n, { strict: !1 })) throw new Br({ address: n });
          t.push([n, o]);
        }
        return t;
      }
      function Lo(e, t) {
        const r = (function (e) {
          if (e.type) return e.type;
          if (typeof e.authorizationList < 'u') return 'eip7702';
          if (
            typeof e.blobs < 'u' ||
            typeof e.blobVersionedHashes < 'u' ||
            typeof e.maxFeePerBlobGas < 'u' ||
            typeof e.sidecars < 'u'
          )
            return 'eip4844';
          if (typeof e.maxFeePerGas < 'u' || typeof e.maxPriorityFeePerGas < 'u') return 'eip1559';
          if (typeof e.gasPrice < 'u') return typeof e.accessList < 'u' ? 'eip2930' : 'legacy';
          throw new nn({ transaction: e });
        })(e);
        return 'eip1559' === r
          ? (function (e, t) {
              const {
                chainId: r,
                gas: n,
                nonce: o,
                to: i,
                value: s,
                maxFeePerGas: a,
                maxPriorityFeePerGas: c,
                accessList: l,
                data: d,
              } = e;
              Ro(e);
              const u = Bo(l);
              return Wr([
                '0x02',
                Un([
                  Dt(r),
                  o ? Dt(o) : '0x',
                  c ? Dt(c) : '0x',
                  a ? Dt(a) : '0x',
                  n ? Dt(n) : '0x',
                  i ?? '0x',
                  s ? Dt(s) : '0x',
                  d ?? '0x',
                  u,
                  ...Uo(e, t),
                ]),
              ]);
            })(e, t)
          : 'eip2930' === r
            ? (function (e, t) {
                const {
                  chainId: r,
                  gas: n,
                  data: o,
                  nonce: i,
                  to: s,
                  value: a,
                  accessList: c,
                  gasPrice: l,
                } = e;
                !(function (e) {
                  const {
                    chainId: t,
                    maxPriorityFeePerGas: r,
                    gasPrice: n,
                    maxFeePerGas: o,
                    to: i,
                  } = e;
                  if (t <= 0) throw new mo({ chainId: t });
                  if (i && !Dr(i)) throw new Br({ address: i });
                  if (r || o)
                    throw new _t(
                      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.'
                    );
                  if (n && n > qn) throw new Dn({ maxFeePerGas: n });
                })(e);
                const d = Bo(c);
                return Wr([
                  '0x01',
                  Un([
                    Dt(r),
                    i ? Dt(i) : '0x',
                    l ? Dt(l) : '0x',
                    n ? Dt(n) : '0x',
                    s ?? '0x',
                    a ? Dt(a) : '0x',
                    o ?? '0x',
                    d,
                    ...Uo(e, t),
                  ]),
                ]);
              })(e, t)
            : 'eip4844' === r
              ? (function (e, t) {
                  const {
                    chainId: r,
                    gas: n,
                    nonce: o,
                    to: i,
                    value: s,
                    maxFeePerBlobGas: a,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: l,
                    accessList: d,
                    data: u,
                  } = e;
                  !(function (e) {
                    const { blobVersionedHashes: t } = e;
                    if (t) {
                      if (0 === t.length) throw new po();
                      for (const e of t) {
                        const t = Et(e),
                          r = zt(Hr(e, 0, 1));
                        if (32 !== t) throw new go({ hash: e, size: t });
                        if (1 !== r) throw new fo({ hash: e, version: r });
                      }
                    }
                    Ro(e);
                  })(e);
                  let h = e.blobVersionedHashes,
                    p = e.sidecars;
                  if (e.blobs && (typeof h > 'u' || typeof p > 'u')) {
                    const t = 'string' == typeof e.blobs[0] ? e.blobs : e.blobs.map((e) => Wt(e)),
                      r = e.kzg,
                      n = Xn({ blobs: t, kzg: r });
                    if (
                      (typeof h > 'u' &&
                        (h = (function (e) {
                          const { commitments: t, version: r } = e,
                            n = e.to ?? ('string' == typeof t[0] ? 'hex' : 'bytes'),
                            o = [];
                          for (const i of t) o.push(ao({ commitment: i, to: n, version: r }));
                          return o;
                        })({ commitments: n })),
                      typeof p > 'u')
                    ) {
                      p = wo({
                        blobs: t,
                        commitments: n,
                        proofs: Jn({ blobs: t, commitments: n, kzg: r }),
                      });
                    }
                  }
                  const g = Bo(d),
                    f = [
                      Dt(r),
                      o ? Dt(o) : '0x',
                      l ? Dt(l) : '0x',
                      c ? Dt(c) : '0x',
                      n ? Dt(n) : '0x',
                      i ?? '0x',
                      s ? Dt(s) : '0x',
                      u ?? '0x',
                      g,
                      a ? Dt(a) : '0x',
                      h ?? [],
                      ...Uo(e, t),
                    ],
                    w = [],
                    m = [],
                    v = [];
                  if (p)
                    for (let b = 0; b < p.length; b++) {
                      const { blob: e, commitment: t, proof: r } = p[b];
                      w.push(e), m.push(t), v.push(r);
                    }
                  return Wr(['0x03', Un(p ? [f, w, m, v] : f)]);
                })(e, t)
              : 'eip7702' === r
                ? (function (e, t) {
                    const {
                      authorizationList: r,
                      chainId: n,
                      gas: o,
                      nonce: i,
                      to: s,
                      value: a,
                      maxFeePerGas: c,
                      maxPriorityFeePerGas: l,
                      accessList: d,
                      data: u,
                    } = e;
                    !(function (e) {
                      const { authorizationList: t } = e;
                      if (t)
                        for (const r of t) {
                          const { chainId: e } = r,
                            t = r.address;
                          if (!Dr(t)) throw new Br({ address: t });
                          if (e < 0) throw new mo({ chainId: e });
                        }
                      Ro(e);
                    })(e);
                    const h = Bo(d),
                      p = (function (e) {
                        if (!e || 0 === e.length) return [];
                        const t = [];
                        for (const r of e) {
                          const { chainId: e, nonce: n, ...o } = r,
                            i = r.address;
                          t.push([e ? Dt(e) : '0x', i, n ? Dt(n) : '0x', ...Uo({}, o)]);
                        }
                        return t;
                      })(r);
                    return Wr([
                      '0x04',
                      Un([
                        Dt(n),
                        i ? Dt(i) : '0x',
                        l ? Dt(l) : '0x',
                        c ? Dt(c) : '0x',
                        o ? Dt(o) : '0x',
                        s ?? '0x',
                        a ? Dt(a) : '0x',
                        u ?? '0x',
                        h,
                        p,
                        ...Uo(e, t),
                      ]),
                    ]);
                  })(e, t)
                : (function (e, t) {
                    const {
                      chainId: r = 0,
                      gas: n,
                      data: o,
                      nonce: i,
                      to: s,
                      value: a,
                      gasPrice: c,
                    } = e;
                    !(function (e) {
                      const {
                        chainId: t,
                        maxPriorityFeePerGas: r,
                        gasPrice: n,
                        maxFeePerGas: o,
                        to: i,
                      } = e;
                      if (i && !Dr(i)) throw new Br({ address: i });
                      if (typeof t < 'u' && t <= 0) throw new mo({ chainId: t });
                      if (r || o)
                        throw new _t(
                          '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.'
                        );
                      if (n && n > qn) throw new Dn({ maxFeePerGas: n });
                    })(e);
                    let l = [
                      i ? Dt(i) : '0x',
                      c ? Dt(c) : '0x',
                      n ? Dt(n) : '0x',
                      s ?? '0x',
                      a ? Dt(a) : '0x',
                      o ?? '0x',
                    ];
                    if (t) {
                      const e = (() => {
                          if (t.v >= 35n)
                            return (t.v - 35n) / 2n > 0 ? t.v : 27n + (35n === t.v ? 0n : 1n);
                          if (r > 0) return BigInt(2 * r) + BigInt(35n + t.v - 27n);
                          const e = 27n + (27n === t.v ? 0n : 1n);
                          if (t.v !== e) throw new rn({ v: t.v });
                          return e;
                        })(),
                        n = Lt(t.r),
                        o = Lt(t.s);
                      l = [...l, Dt(e), '0x00' === n ? '0x' : n, '0x00' === o ? '0x' : o];
                    } else r > 0 && (l = [...l, Dt(r), '0x', '0x']);
                    return Un(l);
                  })(e, t);
      }
      function Uo(e, t) {
        const r = t ?? e,
          { v: n, yParity: o } = r;
        if (typeof r.r > 'u') return [];
        if (typeof r.s > 'u') return [];
        if (typeof n > 'u' && typeof o > 'u') return [];
        const i = Lt(r.r),
          s = Lt(r.s);
        return [
          'number' == typeof o
            ? o
              ? Dt(1)
              : '0x'
            : 0n === n
              ? '0x'
              : 1n === n
                ? Dt(1)
                : 27n === n
                  ? '0x'
                  : Dt(1),
          '0x00' === i ? '0x' : i,
          '0x00' === s ? '0x' : s,
        ];
      }
      const Mo = { '0x0': 'reverted', '0x1': 'success' };
      const zo = Hn('transactionReceipt', function (e) {
          const t = {
            ...e,
            blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
            contractAddress: e.contractAddress ? e.contractAddress : null,
            cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
            effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
            gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
            logs: e.logs
              ? e.logs.map((e) =>
                  (function (e, { args: t, eventName: r } = {}) {
                    return {
                      ...e,
                      blockHash: e.blockHash ? e.blockHash : null,
                      blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                      logIndex: e.logIndex ? Number(e.logIndex) : null,
                      transactionHash: e.transactionHash ? e.transactionHash : null,
                      transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                      ...(r ? { args: t, eventName: r } : {}),
                    };
                  })(e)
                )
              : null,
            to: e.to ? e.to : null,
            transactionIndex: e.transactionIndex ? zt(e.transactionIndex) : null,
            status: e.status ? Mo[e.status] : null,
            type: e.type ? Zn[e.type] || e.type : null,
          };
          return (
            e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
            e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
            t
          );
        }),
        jo = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
        Do = new Uint8Array(new Array(16).fill(0).map((e, t) => t)),
        Wo = Do.map((e) => (9 * e + 5) % 16);
      let Ho = [Do],
        Fo = [Wo];
      for (let Yv = 0; Yv < 4; Yv++) for (let e of [Ho, Fo]) e.push(e[Yv].map((e) => jo[e]));
      const Vo = BigInt(0),
        qo = BigInt(1),
        Zo = BigInt(2);
      function Go(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function Ko(e) {
        if (!Go(e)) throw new Error('Uint8Array expected');
      }
      function Yo(e, t) {
        if ('boolean' != typeof t) throw new Error(e + ' boolean expected, got ' + t);
      }
      const Xo = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function Jo(e) {
        Ko(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += Xo[e[r]];
        return t;
      }
      function Qo(e) {
        const t = e.toString(16);
        return 1 & t.length ? '0' + t : t;
      }
      function ei(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        return '' === e ? Vo : BigInt('0x' + e);
      }
      const ti = 48,
        ri = 57,
        ni = 65,
        oi = 70,
        ii = 97,
        si = 102;
      function ai(e) {
        return e >= ti && e <= ri
          ? e - ti
          : e >= ni && e <= oi
            ? e - (ni - 10)
            : e >= ii && e <= si
              ? e - (ii - 10)
              : void 0;
      }
      function ci(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        const t = e.length,
          r = t / 2;
        if (t % 2) throw new Error('hex string expected, got unpadded hex of length ' + t);
        const n = new Uint8Array(r);
        for (let o = 0, i = 0; o < r; o++, i += 2) {
          const t = ai(e.charCodeAt(i)),
            r = ai(e.charCodeAt(i + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[i] + e[i + 1];
            throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + i);
          }
          n[o] = 16 * t + r;
        }
        return n;
      }
      function li(e) {
        return ei(Jo(e));
      }
      function di(e) {
        return Ko(e), ei(Jo(Uint8Array.from(e).reverse()));
      }
      function ui(e, t) {
        return ci(e.toString(16).padStart(2 * t, '0'));
      }
      function hi(e, t) {
        return ui(e, t).reverse();
      }
      function pi(e, t, r) {
        let n;
        if ('string' == typeof t)
          try {
            n = ci(t);
          } catch (i) {
            throw new Error(e + ' must be hex string or Uint8Array, cause: ' + i);
          }
        else {
          if (!Go(t)) throw new Error(e + ' must be hex string or Uint8Array');
          n = Uint8Array.from(t);
        }
        const o = n.length;
        if ('number' == typeof r && o !== r)
          throw new Error(e + ' of length ' + r + ' expected, got ' + o);
        return n;
      }
      function gi(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          Ko(r), (t += r.length);
        }
        const r = new Uint8Array(t);
        for (let n = 0, o = 0; n < e.length; n++) {
          const t = e[n];
          r.set(t, o), (o += t.length);
        }
        return r;
      }
      const fi = (e) => 'bigint' == typeof e && Vo <= e;
      function wi(e, t, r) {
        return fi(e) && fi(t) && fi(r) && t <= e && e < r;
      }
      function mi(e, t, r, n) {
        if (!wi(t, r, n))
          throw new Error('expected valid ' + e + ': ' + r + ' <= n < ' + n + ', got ' + t);
      }
      function vi(e) {
        let t;
        for (t = 0; e > Vo; e >>= qo, t += 1);
        return t;
      }
      const bi = (e) => (Zo << BigInt(e - 1)) - qo,
        yi = (e) => new Uint8Array(e),
        Ci = (e) => Uint8Array.from(e);
      function xi(e, t, r) {
        if ('number' != typeof e || e < 2) throw new Error('hashLen must be a number');
        if ('number' != typeof t || t < 2) throw new Error('qByteLen must be a number');
        if ('function' != typeof r) throw new Error('hmacFn must be a function');
        let n = yi(e),
          o = yi(e),
          i = 0;
        const s = () => {
            n.fill(1), o.fill(0), (i = 0);
          },
          a = (...e) => r(o, n, ...e),
          c = (e = yi()) => {
            (o = a(Ci([0]), e)), (n = a()), 0 !== e.length && ((o = a(Ci([1]), e)), (n = a()));
          },
          l = () => {
            if (i++ >= 1e3) throw new Error('drbg: tried 1000 values');
            let e = 0;
            const r = [];
            for (; e < t; ) {
              n = a();
              const t = n.slice();
              r.push(t), (e += n.length);
            }
            return gi(...r);
          };
        return (e, t) => {
          let r;
          for (s(), c(e); !(r = t(l())); ) c();
          return s(), r;
        };
      }
      const ki = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        stringOrUint8Array: (e) => 'string' == typeof e || Go(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function Ai(e, t, r = {}) {
        const n = (t, r, n) => {
          const o = ki[r];
          if ('function' != typeof o) throw new Error('invalid validator function');
          const i = e[t];
          if ((!n || void 0 !== i) && !o(i, e))
            throw new Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + i);
        };
        for (const [o, i] of Object.entries(t)) n(o, i, !1);
        for (const [o, i] of Object.entries(r)) n(o, i, !0);
        return e;
      }
      function Ei(e) {
        const t = new WeakMap();
        return (r, ...n) => {
          const o = t.get(r);
          if (void 0 !== o) return o;
          const i = e(r, ...n);
          return t.set(r, i), i;
        };
      }
      var Ii = Object.freeze({
        __proto__: null,
        isBytes: Go,
        abytes: Ko,
        abool: Yo,
        bytesToHex: Jo,
        numberToHexUnpadded: Qo,
        hexToNumber: ei,
        hexToBytes: ci,
        bytesToNumberBE: li,
        bytesToNumberLE: di,
        numberToBytesBE: ui,
        numberToBytesLE: hi,
        numberToVarBytesBE: function (e) {
          return ci(Qo(e));
        },
        ensureBytes: pi,
        concatBytes: gi,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
          return 0 === r;
        },
        utf8ToBytes: function (e) {
          if ('string' != typeof e) throw new Error('string expected');
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: wi,
        aInRange: mi,
        bitLen: vi,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & qo;
        },
        bitSet: function (e, t, r) {
          return e | ((r ? qo : Vo) << BigInt(t));
        },
        bitMask: bi,
        createHmacDrbg: xi,
        validateObject: Ai,
        notImplemented: () => {
          throw new Error('not implemented');
        },
        memoized: Ei,
      });
      class Ni extends Error {
        constructor(e, t = {}) {
          const r = (() => {
              if (t.cause instanceof Ni) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            n = (t.cause instanceof Ni && t.cause.docsPath) || t.docsPath,
            o = `https://oxlib.sh${n ?? ''}`;
          super(
            [
              e || 'An error occurred.',
              ...(t.metaMessages ? ['', ...t.metaMessages] : []),
              ...(r || n ? ['', r ? `Details: ${r}` : void 0, n ? `See: ${o}` : void 0] : []),
            ]
              .filter((e) => 'string' == typeof e)
              .join('\n'),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, 'details', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docs', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docsPath', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'shortMessage', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'cause', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'BaseError',
            }),
            Object.defineProperty(this, 'version', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ox@0.1.1',
            }),
            (this.cause = t.cause),
            (this.details = r),
            (this.docs = o),
            (this.docsPath = n),
            (this.shortMessage = e);
        }
        walk(e) {
          return Si(this, e);
        }
      }
      function Si(e, t) {
        return t?.(e)
          ? e
          : e && 'object' == typeof e && 'cause' in e && e.cause
            ? Si(e.cause, t)
            : t
              ? null
              : e;
      }
      const _i = 48,
        Pi = 57,
        Ti = 65,
        Oi = 70,
        $i = 97,
        Ri = 102;
      function Bi(e) {
        return e >= _i && e <= Pi
          ? e - _i
          : e >= Ti && e <= Oi
            ? e - (Ti - 10)
            : e >= $i && e <= Ri
              ? e - ($i - 10)
              : void 0;
      }
      function Li(e, t) {
        if (Yi(e) > t) throw new Ji({ givenSize: Yi(e), maxSize: t });
      }
      function Ui(e, t = {}) {
        const { dir: r, size: n = 32 } = t;
        if (0 === n) return e;
        const o = e.replace('0x', '');
        if (o.length > 2 * n)
          throw new Qi({ size: Math.ceil(o.length / 2), targetSize: n, type: 'Hex' });
        return `0x${o['right' === r ? 'padEnd' : 'padStart'](2 * n, '0')}`;
      }
      const Mi = new TextEncoder();
      function zi(e) {
        return e instanceof Uint8Array
          ? e
          : 'string' == typeof e
            ? (function (e, t = {}) {
                const { size: r } = t;
                let n = e;
                r && (Li(e, r), (n = Ki(e, r)));
                let o = n.slice(2);
                o.length % 2 && (o = `0${o}`);
                const i = o.length / 2,
                  s = new Uint8Array(i);
                for (let a = 0, c = 0; a < i; a++) {
                  const e = Bi(o.charCodeAt(c++)),
                    t = Bi(o.charCodeAt(c++));
                  if (void 0 === e || void 0 === t)
                    throw new Ni(`Invalid byte sequence ("${o[c - 2]}${o[c - 1]}" in "${o}").`);
                  s[a] = 16 * e + t;
                }
                return s;
              })(e)
            : (function (e) {
                return e instanceof Uint8Array ? e : new Uint8Array(e);
              })(e);
      }
      function ji(e, t = {}) {
        const { size: r } = t,
          n = Mi.encode(e);
        return 'number' == typeof r
          ? ((function (e, t) {
              if (Di(e) > t) throw new Wi({ givenSize: Di(e), maxSize: t });
            })(n, r),
            (function (e, t) {
              return (function (e, t = {}) {
                const { dir: r, size: n = 32 } = t;
                if (0 === n) return e;
                if (e.length > n) throw new Hi({ size: e.length, targetSize: n, type: 'Bytes' });
                const o = new Uint8Array(n);
                for (let i = 0; i < n; i++) {
                  const t = 'right' === r;
                  o[t ? i : n - i - 1] = e[t ? i : e.length - i - 1];
                }
                return o;
              })(e, { dir: 'right', size: t });
            })(n, r))
          : n;
      }
      function Di(e) {
        return e.length;
      }
      class Wi extends Ni {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Bytes.SizeOverflowError',
            });
        }
      }
      class Hi extends Ni {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Bytes.SizeExceedsPaddingSizeError',
            });
        }
      }
      const Fi = new TextEncoder(),
        Vi = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function qi(...e) {
        return `0x${e.reduce((e, t) => e + t.replace('0x', ''), '')}`;
      }
      function Zi(e, t = {}) {
        let r = '';
        for (let o = 0; o < e.length; o++) r += Vi[e[o]];
        const n = `0x${r}`;
        return 'number' == typeof t.size ? (Li(n, t.size), Ki(n, t.size)) : n;
      }
      function Gi(e, t) {
        return Ui(e, { dir: 'left', size: t });
      }
      function Ki(e, t) {
        return Ui(e, { dir: 'right', size: t });
      }
      function Yi(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      class Xi extends Ni {
        constructor({ max: e, min: t, signed: r, size: n, value: o }) {
          super(
            `Number \`${o}\` is not in safe${n ? ` ${8 * n}-bit` : ''}${r ? ' signed' : ' unsigned'} integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.IntegerOutOfRangeError',
            });
        }
      }
      class Ji extends Ni {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.SizeOverflowError',
            });
        }
      }
      class Qi extends Ni {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.SizeExceedsPaddingSizeError',
            });
        }
      }
      class es extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, 'maxSize', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          const t = super.get(e);
          return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            const e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      const ts = { checksum: new es(8192) }.checksum,
        rs = /^0x[a-fA-F0-9]{40}$/;
      function ns(e, t = {}) {
        const { strict: r = !0 } = t;
        if (!rs.test(e)) throw new os({ address: e, cause: new is() });
        if (r) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (ts.has(e)) return ts.get(e);
              ns(e, { strict: !1 });
              const t = e.substring(2).toLowerCase(),
                r = (function (e, t = {}) {
                  const { as: r = 'string' == typeof e ? 'Hex' : 'Bytes' } = t,
                    n = Rr(zi(e));
                  return 'Bytes' === r ? n : Zi(n);
                })(ji(t), { as: 'Bytes' }),
                n = t.split('');
              for (let i = 0; i < 40; i += 2)
                r[i >> 1] >> 4 >= 8 && n[i] && (n[i] = n[i].toUpperCase()),
                  (15 & r[i >> 1]) >= 8 && n[i + 1] && (n[i + 1] = n[i + 1].toUpperCase());
              const o = `0x${n.join('')}`;
              return ts.set(e, o), o;
            })(e) !== e
          )
            throw new os({ address: e, cause: new ss() });
        }
      }
      class os extends Ni {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Address.InvalidAddressError',
            });
        }
      }
      class is extends Ni {
        constructor() {
          super('Address is not a 20 byte (40 hexadecimal character) value.'),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Address.InvalidInputError',
            });
        }
      }
      class ss extends Ni {
        constructor() {
          super('Address does not match its checksum counterpart.'),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Address.InvalidChecksumError',
            });
        }
      }
      const as = /^(.*)\[([0-9]*)\]$/,
        cs = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        ls =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function ds(e, t) {
        if (e.length !== t.length)
          throw new hs({ expectedLength: e.length, givenLength: t.length });
        const r = [];
        for (let n = 0; n < e.length; n++) {
          const o = e[n],
            i = t[n];
          r.push(ds.encode(o, i));
        }
        return qi(...r);
      }
      !(function (e) {
        e.encode = function e(t, r, n = !1) {
          if ('address' === t) {
            const e = r;
            return ns(e), Gi(e.toLowerCase(), n ? 32 : 0);
          }
          if ('string' === t)
            return (function (e, t = {}) {
              return Zi(Fi.encode(e), t);
            })(r);
          if ('bytes' === t) return r;
          if ('bool' === t)
            return Gi(
              (function (e, t = {}) {
                const r = `0x${Number(e)}`;
                return 'number' == typeof t.size ? (Li(r, t.size), Gi(r, t.size)) : r;
              })(r),
              n ? 32 : 1
            );
          const o = t.match(ls);
          if (o) {
            const [e, t, i = '256'] = o,
              s = Number.parseInt(i) / 8;
            return (function (e, t = {}) {
              const { signed: r, size: n } = t,
                o = BigInt(e);
              let i;
              n
                ? (i = r ? (1n << (8n * BigInt(n) - 1n)) - 1n : 2n ** (8n * BigInt(n)) - 1n)
                : 'number' == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
              const s = 'bigint' == typeof i && r ? -i - 1n : 0;
              if ((i && o > i) || o < s) {
                const t = 'bigint' == typeof e ? 'n' : '';
                throw new Xi({
                  max: i ? `${i}${t}` : void 0,
                  min: `${s}${t}`,
                  signed: r,
                  size: n,
                  value: `${e}${t}`,
                });
              }
              const a = `0x${(r && o < 0 ? (1n << BigInt(8 * n)) + BigInt(o) : o).toString(16)}`;
              return n ? Gi(a, n) : a;
            })(r, { size: n ? 32 : s, signed: 'int' === t });
          }
          const i = t.match(cs);
          if (i) {
            const [e, t] = i;
            if (Number.parseInt(t) !== (r.length - 2) / 2)
              throw new us({ expectedSize: Number.parseInt(t), value: r });
            return Ki(r, n ? 32 : 0);
          }
          const s = t.match(as);
          if (s && Array.isArray(r)) {
            const [t, n] = s,
              o = [];
            for (let i = 0; i < r.length; i++) o.push(e(n, r[i], !0));
            return 0 === o.length ? '0x' : qi(...o);
          }
          throw new ps(t);
        };
      })(ds || (ds = {}));
      class us extends Ni {
        constructor({ expectedSize: e, value: t }) {
          super(`Size of bytes "${t}" (bytes${Yi(t)}) does not match expected size (bytes${e}).`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.BytesSizeMismatchError',
            });
        }
      }
      class hs extends Ni {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            [
              'ABI encoding parameters/values length mismatch.',
              `Expected length (parameters): ${e}`,
              `Given length (values): ${t}`,
            ].join('\n')
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.LengthMismatchError',
            });
        }
      }
      class ps extends Ni {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.InvalidTypeError',
            });
        }
      }
      class gs extends mr {
        constructor(e, t) {
          super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (function (e) {
              if ('function' != typeof e || 'function' != typeof e.create)
                throw new Error('Hash should be wrapped by utils.wrapConstructor');
              nr(e.outputLen), nr(e.blockLen);
            })(e);
          const r = wr(t);
          if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
            throw new Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          const n = this.blockLen,
            o = new Uint8Array(n);
          o.set(r.length > n ? e.create().update(r).digest() : r);
          for (let i = 0; i < o.length; i++) o[i] ^= 54;
          this.iHash.update(o), (this.oHash = e.create());
          for (let i = 0; i < o.length; i++) o[i] ^= 106;
          this.oHash.update(o), o.fill(0);
        }
        update(e) {
          return ir(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          ir(this),
            or(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          const e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          const { oHash: t, iHash: r, finished: n, destroyed: o, blockLen: i, outputLen: s } = this;
          return (
            (e.finished = n),
            (e.destroyed = o),
            (e.blockLen = i),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      const fs = (e, t, r) => new gs(e, t).update(r).digest();
      fs.create = (e, t) => new gs(e, t);
      const ws = BigInt(0),
        ms = BigInt(1),
        vs = BigInt(2),
        bs = BigInt(3),
        ys = BigInt(4),
        Cs = BigInt(5),
        xs = BigInt(8);
      function ks(e, t) {
        const r = e % t;
        return r >= ws ? r : t + r;
      }
      function As(e, t, r) {
        if (t < ws) throw new Error('invalid exponent, negatives unsupported');
        if (r <= ws) throw new Error('invalid modulus');
        if (r === ms) return ws;
        let n = ms;
        for (; t > ws; ) t & ms && (n = (n * e) % r), (e = (e * e) % r), (t >>= ms);
        return n;
      }
      function Es(e, t, r) {
        let n = e;
        for (; t-- > ws; ) (n *= n), (n %= r);
        return n;
      }
      function Is(e, t) {
        if (e === ws) throw new Error('invert: expected non-zero number');
        if (t <= ws) throw new Error('invert: expected positive modulus, got ' + t);
        let r = ks(e, t),
          n = t,
          o = ws,
          i = ms;
        for (; r !== ws; ) {
          const e = n % r,
            t = o - i * (n / r);
          (n = r), (r = e), (o = i), (i = t);
        }
        if (n !== ms) throw new Error('invert: does not exist');
        return ks(o, t);
      }
      function Ns(e) {
        if (e % ys === bs) {
          const t = (e + ms) / ys;
          return function (e, r) {
            const n = e.pow(r, t);
            if (!e.eql(e.sqr(n), r)) throw new Error('Cannot find square root');
            return n;
          };
        }
        if (e % xs === Cs) {
          const t = (e - Cs) / xs;
          return function (e, r) {
            const n = e.mul(r, vs),
              o = e.pow(n, t),
              i = e.mul(r, o),
              s = e.mul(e.mul(i, vs), o),
              a = e.mul(i, e.sub(s, e.ONE));
            if (!e.eql(e.sqr(a), r)) throw new Error('Cannot find square root');
            return a;
          };
        }
        return (function (e) {
          const t = (e - ms) / vs;
          let r, n, o;
          for (r = e - ms, n = 0; r % vs === ws; r /= vs, n++);
          for (o = vs; o < e && As(o, t, e) !== e - ms; o++)
            if (o > 1e3) throw new Error('Cannot find square root: likely non-prime P');
          if (1 === n) {
            const t = (e + ms) / ys;
            return function (e, r) {
              const n = e.pow(r, t);
              if (!e.eql(e.sqr(n), r)) throw new Error('Cannot find square root');
              return n;
            };
          }
          const i = (r + ms) / vs;
          return function (e, s) {
            if (e.pow(s, t) === e.neg(e.ONE)) throw new Error('Cannot find square root');
            let a = n,
              c = e.pow(e.mul(e.ONE, o), r),
              l = e.pow(s, i),
              d = e.pow(s, r);
            for (; !e.eql(d, e.ONE); ) {
              if (e.eql(d, e.ZERO)) return e.ZERO;
              let t = 1;
              for (let n = e.sqr(d); t < a && !e.eql(n, e.ONE); t++) n = e.sqr(n);
              const r = e.pow(c, ms << BigInt(a - t - 1));
              (c = e.sqr(r)), (l = e.mul(l, r)), (d = e.mul(d, c)), (a = t);
            }
            return l;
          };
        })(e);
      }
      const Ss = [
        'create',
        'isValid',
        'is0',
        'neg',
        'inv',
        'sqrt',
        'sqr',
        'eql',
        'add',
        'sub',
        'mul',
        'pow',
        'div',
        'addN',
        'subN',
        'mulN',
        'sqrN',
      ];
      function _s(e, t) {
        const r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function Ps(e, t, r = !1, n = {}) {
        if (e <= ws) throw new Error('invalid field: expected ORDER > 0, got ' + e);
        const { nBitLength: o, nByteLength: i } = _s(e, t);
        if (i > 2048) throw new Error('invalid field: expected ORDER of <= 2048 bytes');
        let s;
        const a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: o,
          BYTES: i,
          MASK: bi(o),
          ZERO: ws,
          ONE: ms,
          create: (t) => ks(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw new Error('invalid field element: expected bigint, got ' + typeof t);
            return ws <= t && t < e;
          },
          is0: (e) => e === ws,
          isOdd: (e) => (e & ms) === ms,
          neg: (t) => ks(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => ks(t * t, e),
          add: (t, r) => ks(t + r, e),
          sub: (t, r) => ks(t - r, e),
          mul: (t, r) => ks(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < ws) throw new Error('invalid exponent, negatives unsupported');
              if (r === ws) return e.ONE;
              if (r === ms) return t;
              let n = e.ONE,
                o = t;
              for (; r > ws; ) r & ms && (n = e.mul(n, o)), (o = e.sqr(o)), (r >>= ms);
              return n;
            })(a, e, t),
          div: (t, r) => ks(t * Is(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => Is(t, e),
          sqrt: n.sqrt || ((t) => (s || (s = Ns(e)), s(a, t))),
          invertBatch: (e) =>
            (function (e, t) {
              const r = new Array(t.length),
                n = t.reduce((t, n, o) => (e.is0(n) ? t : ((r[o] = t), e.mul(t, n))), e.ONE),
                o = e.inv(n);
              return (
                t.reduceRight(
                  (t, n, o) => (e.is0(n) ? t : ((r[o] = e.mul(t, r[o])), e.mul(t, n))),
                  o
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? hi(e, i) : ui(e, i)),
          fromBytes: (e) => {
            if (e.length !== i)
              throw new Error('Field.fromBytes: expected ' + i + ' bytes, got ' + e.length);
            return r ? di(e) : li(e);
          },
        });
        return Object.freeze(a);
      }
      function Ts(e) {
        if ('bigint' != typeof e) throw new Error('field order must be bigint');
        const t = e.toString(2).length;
        return Math.ceil(t / 8);
      }
      function Os(e) {
        const t = Ts(e);
        return t + Math.ceil(t / 2);
      }
      const $s = BigInt(0),
        Rs = BigInt(1);
      function Bs(e, t) {
        const r = t.negate();
        return e ? r : t;
      }
      function Ls(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw new Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function Us(e, t) {
        Ls(e, t);
        return { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      const Ms = new WeakMap(),
        zs = new WeakMap();
      function js(e) {
        return zs.get(e) || 1;
      }
      function Ds(e, t, r, n) {
        if (
          ((function (e, t) {
            if (!Array.isArray(e)) throw new Error('array expected');
            e.forEach((e, r) => {
              if (!(e instanceof t)) throw new Error('invalid point at index ' + r);
            });
          })(r, e),
          (function (e, t) {
            if (!Array.isArray(e)) throw new Error('array of scalars expected');
            e.forEach((e, r) => {
              if (!t.isValid(e)) throw new Error('invalid scalar at index ' + r);
            });
          })(n, t),
          r.length !== n.length)
        )
          throw new Error('arrays of points and scalars must have equal length');
        const o = e.ZERO,
          i = vi(BigInt(r.length)),
          s = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1,
          a = (1 << s) - 1,
          c = new Array(a + 1).fill(o);
        let l = o;
        for (let d = Math.floor((t.BITS - 1) / s) * s; d >= 0; d -= s) {
          c.fill(o);
          for (let t = 0; t < n.length; t++) {
            const e = n[t],
              o = Number((e >> BigInt(d)) & BigInt(a));
            c[o] = c[o].add(r[t]);
          }
          let e = o;
          for (let t = c.length - 1, r = o; t > 0; t--) (r = r.add(c[t])), (e = e.add(r));
          if (((l = l.add(e)), 0 !== d)) for (let t = 0; t < s; t++) l = l.double();
        }
        return l;
      }
      function Ws(e) {
        return (
          (function (e) {
            Ai(
              e,
              Ss.reduce((e, t) => ((e[t] = 'function'), e), {
                ORDER: 'bigint',
                MASK: 'bigint',
                BYTES: 'isSafeInteger',
                BITS: 'isSafeInteger',
              })
            );
          })(e.Fp),
          Ai(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ..._s(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      function Hs(e) {
        void 0 !== e.lowS && Yo('lowS', e.lowS), void 0 !== e.prehash && Yo('prehash', e.prehash);
      }
      const { bytesToNumberBE: Fs, hexToBytes: Vs } = Ii;
      class qs extends Error {
        constructor(e = '') {
          super(e);
        }
      }
      const Zs = {
          Err: qs,
          _tlv: {
            encode: (e, t) => {
              const { Err: r } = Zs;
              if (e < 0 || e > 256) throw new r('tlv.encode: wrong tag');
              if (1 & t.length) throw new r('tlv.encode: unpadded data');
              const n = t.length / 2,
                o = Qo(n);
              if ((o.length / 2) & 128) throw new r('tlv.encode: long form length too big');
              const i = n > 127 ? Qo((o.length / 2) | 128) : '';
              return Qo(e) + i + o + t;
            },
            decode(e, t) {
              const { Err: r } = Zs;
              let n = 0;
              if (e < 0 || e > 256) throw new r('tlv.encode: wrong tag');
              if (t.length < 2 || t[n++] !== e) throw new r('tlv.decode: wrong tlv');
              const o = t[n++];
              let i = 0;
              if (!!(128 & o)) {
                const e = 127 & o;
                if (!e) throw new r('tlv.decode(long): indefinite length not supported');
                if (e > 4) throw new r('tlv.decode(long): byte length is too big');
                const s = t.subarray(n, n + e);
                if (s.length !== e) throw new r('tlv.decode: length bytes not complete');
                if (0 === s[0]) throw new r('tlv.decode(long): zero leftmost byte');
                for (const t of s) i = (i << 8) | t;
                if (((n += e), i < 128)) throw new r('tlv.decode(long): not minimal encoding');
              } else i = o;
              const s = t.subarray(n, n + i);
              if (s.length !== i) throw new r('tlv.decode: wrong value length');
              return { v: s, l: t.subarray(n + i) };
            },
          },
          _int: {
            encode(e) {
              const { Err: t } = Zs;
              if (e < Gs) throw new t('integer: negative integers are not allowed');
              let r = Qo(e);
              if ((8 & Number.parseInt(r[0], 16) && (r = '00' + r), 1 & r.length))
                throw new t('unexpected DER parsing assertion: unpadded hex');
              return r;
            },
            decode(e) {
              const { Err: t } = Zs;
              if (128 & e[0]) throw new t('invalid signature integer: negative');
              if (0 === e[0] && !(128 & e[1]))
                throw new t('invalid signature integer: unnecessary leading zero');
              return Fs(e);
            },
          },
          toSig(e) {
            const { Err: t, _int: r, _tlv: n } = Zs,
              o = 'string' == typeof e ? Vs(e) : e;
            Ko(o);
            const { v: i, l: s } = n.decode(48, o);
            if (s.length) throw new t('invalid signature: left bytes after parsing');
            const { v: a, l: c } = n.decode(2, i),
              { v: l, l: d } = n.decode(2, c);
            if (d.length) throw new t('invalid signature: left bytes after parsing');
            return { r: r.decode(a), s: r.decode(l) };
          },
          hexFromSig(e) {
            const { _tlv: t, _int: r } = Zs,
              n = t.encode(2, r.encode(e.r)) + t.encode(2, r.encode(e.s));
            return t.encode(48, n);
          },
        },
        Gs = BigInt(0),
        Ks = BigInt(1);
      BigInt(2);
      const Ys = BigInt(3);
      function Xs(e) {
        const t = (function (e) {
            const t = Ws(e);
            Ai(
              t,
              { a: 'field', b: 'field' },
              {
                allowedPrivateKeyLengths: 'array',
                wrapPrivateKey: 'boolean',
                isTorsionFree: 'function',
                clearCofactor: 'function',
                allowInfinityPoint: 'boolean',
                fromBytes: 'function',
                toBytes: 'function',
              }
            );
            const { endo: r, Fp: n, a: o } = t;
            if (r) {
              if (!n.eql(o, n.ZERO))
                throw new Error(
                  'invalid endomorphism, can only be defined for Koblitz curves that have a=0'
                );
              if (
                'object' != typeof r ||
                'bigint' != typeof r.beta ||
                'function' != typeof r.splitScalar
              )
                throw new Error(
                  'invalid endomorphism, expected beta: bigint and splitScalar: function'
                );
            }
            return Object.freeze({ ...t });
          })(e),
          { Fp: r } = t,
          n = Ps(t.n, t.nBitLength),
          o =
            t.toBytes ||
            ((e, t, n) => {
              const o = t.toAffine();
              return gi(Uint8Array.from([4]), r.toBytes(o.x), r.toBytes(o.y));
            }),
          i =
            t.fromBytes ||
            ((e) => {
              const t = e.subarray(1);
              return {
                x: r.fromBytes(t.subarray(0, r.BYTES)),
                y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
              };
            });
        function s(e) {
          const { a: n, b: o } = t,
            i = r.sqr(e),
            s = r.mul(i, e);
          return r.add(r.add(s, r.mul(e, n)), o);
        }
        if (!r.eql(r.sqr(t.Gy), s(t.Gx)))
          throw new Error('bad generator point: equation left != right');
        function a(e) {
          const { allowedPrivateKeyLengths: r, nByteLength: n, wrapPrivateKey: o, n: i } = t;
          if (r && 'bigint' != typeof e) {
            if ((Go(e) && (e = Jo(e)), 'string' != typeof e || !r.includes(e.length)))
              throw new Error('invalid private key');
            e = e.padStart(2 * n, '0');
          }
          let s;
          try {
            s = 'bigint' == typeof e ? e : li(pi('private key', e, n));
          } catch {
            throw new Error(
              'invalid private key, expected hex or ' + n + ' bytes, got ' + typeof e
            );
          }
          return o && (s = ks(s, i)), mi('private key', s, Ks, i), s;
        }
        function c(e) {
          if (!(e instanceof u)) throw new Error('ProjectivePoint expected');
        }
        const l = Ei((e, t) => {
            const { px: n, py: o, pz: i } = e;
            if (r.eql(i, r.ONE)) return { x: n, y: o };
            const s = e.is0();
            null == t && (t = s ? r.ONE : r.inv(i));
            const a = r.mul(n, t),
              c = r.mul(o, t),
              l = r.mul(i, t);
            if (s) return { x: r.ZERO, y: r.ZERO };
            if (!r.eql(l, r.ONE)) throw new Error('invZ was invalid');
            return { x: a, y: c };
          }),
          d = Ei((e) => {
            if (e.is0()) {
              if (t.allowInfinityPoint && !r.is0(e.py)) return;
              throw new Error('bad point: ZERO');
            }
            const { x: n, y: o } = e.toAffine();
            if (!r.isValid(n) || !r.isValid(o)) throw new Error('bad point: x or y not FE');
            const i = r.sqr(o),
              a = s(n);
            if (!r.eql(i, a)) throw new Error('bad point: equation left != right');
            if (!e.isTorsionFree()) throw new Error('bad point: not in prime-order subgroup');
            return !0;
          });
        class u {
          constructor(e, t, n) {
            if (((this.px = e), (this.py = t), (this.pz = n), null == e || !r.isValid(e)))
              throw new Error('x required');
            if (null == t || !r.isValid(t)) throw new Error('y required');
            if (null == n || !r.isValid(n)) throw new Error('z required');
            Object.freeze(this);
          }
          static fromAffine(e) {
            const { x: t, y: n } = e || {};
            if (!e || !r.isValid(t) || !r.isValid(n)) throw new Error('invalid affine point');
            if (e instanceof u) throw new Error('projective point not allowed');
            const o = (e) => r.eql(e, r.ZERO);
            return o(t) && o(n) ? u.ZERO : new u(t, n, r.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(e) {
            const t = r.invertBatch(e.map((e) => e.pz));
            return e.map((e, r) => e.toAffine(t[r])).map(u.fromAffine);
          }
          static fromHex(e) {
            const t = u.fromAffine(i(pi('pointHex', e)));
            return t.assertValidity(), t;
          }
          static fromPrivateKey(e) {
            return u.BASE.multiply(a(e));
          }
          static msm(e, t) {
            return Ds(u, n, e, t);
          }
          _setWindowSize(e) {
            p.setWindowSize(this, e);
          }
          assertValidity() {
            d(this);
          }
          hasEvenY() {
            const { y: e } = this.toAffine();
            if (r.isOdd) return !r.isOdd(e);
            throw new Error("Field doesn't support isOdd");
          }
          equals(e) {
            c(e);
            const { px: t, py: n, pz: o } = this,
              { px: i, py: s, pz: a } = e,
              l = r.eql(r.mul(t, a), r.mul(i, o)),
              d = r.eql(r.mul(n, a), r.mul(s, o));
            return l && d;
          }
          negate() {
            return new u(this.px, r.neg(this.py), this.pz);
          }
          double() {
            const { a: e, b: n } = t,
              o = r.mul(n, Ys),
              { px: i, py: s, pz: a } = this;
            let c = r.ZERO,
              l = r.ZERO,
              d = r.ZERO,
              h = r.mul(i, i),
              p = r.mul(s, s),
              g = r.mul(a, a),
              f = r.mul(i, s);
            return (
              (f = r.add(f, f)),
              (d = r.mul(i, a)),
              (d = r.add(d, d)),
              (c = r.mul(e, d)),
              (l = r.mul(o, g)),
              (l = r.add(c, l)),
              (c = r.sub(p, l)),
              (l = r.add(p, l)),
              (l = r.mul(c, l)),
              (c = r.mul(f, c)),
              (d = r.mul(o, d)),
              (g = r.mul(e, g)),
              (f = r.sub(h, g)),
              (f = r.mul(e, f)),
              (f = r.add(f, d)),
              (d = r.add(h, h)),
              (h = r.add(d, h)),
              (h = r.add(h, g)),
              (h = r.mul(h, f)),
              (l = r.add(l, h)),
              (g = r.mul(s, a)),
              (g = r.add(g, g)),
              (h = r.mul(g, f)),
              (c = r.sub(c, h)),
              (d = r.mul(g, p)),
              (d = r.add(d, d)),
              (d = r.add(d, d)),
              new u(c, l, d)
            );
          }
          add(e) {
            c(e);
            const { px: n, py: o, pz: i } = this,
              { px: s, py: a, pz: l } = e;
            let d = r.ZERO,
              h = r.ZERO,
              p = r.ZERO;
            const g = t.a,
              f = r.mul(t.b, Ys);
            let w = r.mul(n, s),
              m = r.mul(o, a),
              v = r.mul(i, l),
              b = r.add(n, o),
              y = r.add(s, a);
            (b = r.mul(b, y)), (y = r.add(w, m)), (b = r.sub(b, y)), (y = r.add(n, i));
            let C = r.add(s, l);
            return (
              (y = r.mul(y, C)),
              (C = r.add(w, v)),
              (y = r.sub(y, C)),
              (C = r.add(o, i)),
              (d = r.add(a, l)),
              (C = r.mul(C, d)),
              (d = r.add(m, v)),
              (C = r.sub(C, d)),
              (p = r.mul(g, y)),
              (d = r.mul(f, v)),
              (p = r.add(d, p)),
              (d = r.sub(m, p)),
              (p = r.add(m, p)),
              (h = r.mul(d, p)),
              (m = r.add(w, w)),
              (m = r.add(m, w)),
              (v = r.mul(g, v)),
              (y = r.mul(f, y)),
              (m = r.add(m, v)),
              (v = r.sub(w, v)),
              (v = r.mul(g, v)),
              (y = r.add(y, v)),
              (w = r.mul(m, y)),
              (h = r.add(h, w)),
              (w = r.mul(C, y)),
              (d = r.mul(b, d)),
              (d = r.sub(d, w)),
              (w = r.mul(b, m)),
              (p = r.mul(C, p)),
              (p = r.add(p, w)),
              new u(d, h, p)
            );
          }
          subtract(e) {
            return this.add(e.negate());
          }
          is0() {
            return this.equals(u.ZERO);
          }
          wNAF(e) {
            return p.wNAFCached(this, e, u.normalizeZ);
          }
          multiplyUnsafe(e) {
            const { endo: n, n: o } = t;
            mi('scalar', e, Gs, o);
            const i = u.ZERO;
            if (e === Gs) return i;
            if (this.is0() || e === Ks) return this;
            if (!n || p.hasPrecomputes(this)) return p.wNAFCachedUnsafe(this, e, u.normalizeZ);
            let { k1neg: s, k1: a, k2neg: c, k2: l } = n.splitScalar(e),
              d = i,
              h = i,
              g = this;
            for (; a > Gs || l > Gs; )
              a & Ks && (d = d.add(g)),
                l & Ks && (h = h.add(g)),
                (g = g.double()),
                (a >>= Ks),
                (l >>= Ks);
            return (
              s && (d = d.negate()),
              c && (h = h.negate()),
              (h = new u(r.mul(h.px, n.beta), h.py, h.pz)),
              d.add(h)
            );
          }
          multiply(e) {
            const { endo: n, n: o } = t;
            let i, s;
            if ((mi('scalar', e, Ks, o), n)) {
              const { k1neg: t, k1: o, k2neg: a, k2: c } = n.splitScalar(e);
              let { p: l, f: d } = this.wNAF(o),
                { p: h, f: g } = this.wNAF(c);
              (l = p.constTimeNegate(t, l)),
                (h = p.constTimeNegate(a, h)),
                (h = new u(r.mul(h.px, n.beta), h.py, h.pz)),
                (i = l.add(h)),
                (s = d.add(g));
            } else {
              const { p: t, f: r } = this.wNAF(e);
              (i = t), (s = r);
            }
            return u.normalizeZ([i, s])[0];
          }
          multiplyAndAddUnsafe(e, t, r) {
            const n = u.BASE,
              o = (e, t) =>
                t !== Gs && t !== Ks && e.equals(n) ? e.multiply(t) : e.multiplyUnsafe(t),
              i = o(this, t).add(o(e, r));
            return i.is0() ? void 0 : i;
          }
          toAffine(e) {
            return l(this, e);
          }
          isTorsionFree() {
            const { h: e, isTorsionFree: r } = t;
            if (e === Ks) return !0;
            if (r) return r(u, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
          }
          clearCofactor() {
            const { h: e, clearCofactor: r } = t;
            return e === Ks ? this : r ? r(u, this) : this.multiplyUnsafe(t.h);
          }
          toRawBytes(e = !0) {
            return Yo('isCompressed', e), this.assertValidity(), o(u, this, e);
          }
          toHex(e = !0) {
            return Yo('isCompressed', e), Jo(this.toRawBytes(e));
          }
        }
        (u.BASE = new u(t.Gx, t.Gy, r.ONE)), (u.ZERO = new u(r.ZERO, r.ONE, r.ZERO));
        const h = t.nBitLength,
          p = (function (e, t) {
            return {
              constTimeNegate: Bs,
              hasPrecomputes: (e) => 1 !== js(e),
              unsafeLadder(t, r, n = e.ZERO) {
                let o = t;
                for (; r > $s; ) r & Rs && (n = n.add(o)), (o = o.double()), (r >>= Rs);
                return n;
              },
              precomputeWindow(e, r) {
                const { windows: n, windowSize: o } = Us(r, t),
                  i = [];
                let s = e,
                  a = s;
                for (let t = 0; t < n; t++) {
                  (a = s), i.push(a);
                  for (let e = 1; e < o; e++) (a = a.add(s)), i.push(a);
                  s = a.double();
                }
                return i;
              },
              wNAF(r, n, o) {
                const { windows: i, windowSize: s } = Us(r, t);
                let a = e.ZERO,
                  c = e.BASE;
                const l = BigInt(2 ** r - 1),
                  d = 2 ** r,
                  u = BigInt(r);
                for (let e = 0; e < i; e++) {
                  const t = e * s;
                  let r = Number(o & l);
                  (o >>= u), r > s && ((r -= d), (o += Rs));
                  const i = t,
                    h = t + Math.abs(r) - 1,
                    p = e % 2 !== 0,
                    g = r < 0;
                  0 === r ? (c = c.add(Bs(p, n[i]))) : (a = a.add(Bs(g, n[h])));
                }
                return { p: a, f: c };
              },
              wNAFUnsafe(r, n, o, i = e.ZERO) {
                const { windows: s, windowSize: a } = Us(r, t),
                  c = BigInt(2 ** r - 1),
                  l = 2 ** r,
                  d = BigInt(r);
                for (let e = 0; e < s; e++) {
                  const t = e * a;
                  if (o === $s) break;
                  let r = Number(o & c);
                  if (((o >>= d), r > a && ((r -= l), (o += Rs)), 0 === r)) continue;
                  let s = n[t + Math.abs(r) - 1];
                  r < 0 && (s = s.negate()), (i = i.add(s));
                }
                return i;
              },
              getPrecomputes(e, t, r) {
                let n = Ms.get(t);
                return n || ((n = this.precomputeWindow(t, e)), 1 !== e && Ms.set(t, r(n))), n;
              },
              wNAFCached(e, t, r) {
                const n = js(e);
                return this.wNAF(n, this.getPrecomputes(n, e, r), t);
              },
              wNAFCachedUnsafe(e, t, r, n) {
                const o = js(e);
                return 1 === o
                  ? this.unsafeLadder(e, t, n)
                  : this.wNAFUnsafe(o, this.getPrecomputes(o, e, r), t, n);
              },
              setWindowSize(e, r) {
                Ls(r, t), zs.set(e, r), Ms.delete(e);
              },
            };
          })(u, t.endo ? Math.ceil(h / 2) : h);
        return {
          CURVE: t,
          ProjectivePoint: u,
          normPrivateKeyToScalar: a,
          weierstrassEquation: s,
          isWithinCurveOrder: function (e) {
            return wi(e, Ks, t.n);
          },
        };
      }
      function Js(e) {
        const t = (function (e) {
            const t = Ws(e);
            return (
              Ai(
                t,
                { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                { bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean' }
              ),
              Object.freeze({ lowS: !0, ...t })
            );
          })(e),
          { Fp: r, n: n } = t,
          o = r.BYTES + 1,
          i = 2 * r.BYTES + 1;
        function s(e) {
          return ks(e, n);
        }
        function a(e) {
          return Is(e, n);
        }
        const {
            ProjectivePoint: c,
            normPrivateKeyToScalar: l,
            weierstrassEquation: d,
            isWithinCurveOrder: u,
          } = Xs({
            ...t,
            toBytes(e, t, n) {
              const o = t.toAffine(),
                i = r.toBytes(o.x),
                s = gi;
              return (
                Yo('isCompressed', n),
                n
                  ? s(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i)
                  : s(Uint8Array.from([4]), i, r.toBytes(o.y))
              );
            },
            fromBytes(e) {
              const t = e.length,
                n = e[0],
                s = e.subarray(1);
              if (t !== o || (2 !== n && 3 !== n)) {
                if (t === i && 4 === n) {
                  return {
                    x: r.fromBytes(s.subarray(0, r.BYTES)),
                    y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES)),
                  };
                }
                throw new Error(
                  'invalid Point, expected length of ' + o + ', or uncompressed ' + i + ', got ' + t
                );
              }
              {
                const e = li(s);
                if (!wi(e, Ks, r.ORDER)) throw new Error('Point is not on curve');
                const t = d(e);
                let o;
                try {
                  o = r.sqrt(t);
                } catch (a) {
                  const e = a instanceof Error ? ': ' + a.message : '';
                  throw new Error('Point is not on curve' + e);
                }
                return (1 === (1 & n)) !== ((o & Ks) === Ks) && (o = r.neg(o)), { x: e, y: o };
              }
            },
          }),
          h = (e) => Jo(ui(e, t.nByteLength));
        function p(e) {
          return e > n >> Ks;
        }
        const g = (e, t, r) => li(e.slice(t, r));
        class f {
          constructor(e, t, r) {
            (this.r = e), (this.s = t), (this.recovery = r), this.assertValidity();
          }
          static fromCompact(e) {
            const r = t.nByteLength;
            return (e = pi('compactSignature', e, 2 * r)), new f(g(e, 0, r), g(e, r, 2 * r));
          }
          static fromDER(e) {
            const { r: t, s: r } = Zs.toSig(pi('DER', e));
            return new f(t, r);
          }
          assertValidity() {
            mi('r', this.r, Ks, n), mi('s', this.s, Ks, n);
          }
          addRecoveryBit(e) {
            return new f(this.r, this.s, e);
          }
          recoverPublicKey(e) {
            const { r: n, s: o, recovery: i } = this,
              l = b(pi('msgHash', e));
            if (null == i || ![0, 1, 2, 3].includes(i)) throw new Error('recovery id invalid');
            const d = 2 === i || 3 === i ? n + t.n : n;
            if (d >= r.ORDER) throw new Error('recovery id 2 or 3 invalid');
            const u = 0 === (1 & i) ? '02' : '03',
              p = c.fromHex(u + h(d)),
              g = a(d),
              f = s(-l * g),
              w = s(o * g),
              m = c.BASE.multiplyAndAddUnsafe(p, f, w);
            if (!m) throw new Error('point at infinify');
            return m.assertValidity(), m;
          }
          hasHighS() {
            return p(this.s);
          }
          normalizeS() {
            return this.hasHighS() ? new f(this.r, s(-this.s), this.recovery) : this;
          }
          toDERRawBytes() {
            return ci(this.toDERHex());
          }
          toDERHex() {
            return Zs.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return ci(this.toCompactHex());
          }
          toCompactHex() {
            return h(this.r) + h(this.s);
          }
        }
        const w = {
          isValidPrivateKey(e) {
            try {
              return l(e), !0;
            } catch {
              return !1;
            }
          },
          normPrivateKeyToScalar: l,
          randomPrivateKey: () => {
            const e = Os(t.n);
            return (function (e, t, r = !1) {
              const n = e.length,
                o = Ts(t),
                i = Os(t);
              if (n < 16 || n < i || n > 1024)
                throw new Error('expected ' + i + '-1024 bytes of input, got ' + n);
              const s = ks(r ? di(e) : li(e), t - ms) + ms;
              return r ? hi(s, o) : ui(s, o);
            })(t.randomBytes(e), t.n);
          },
          precompute: (e = 8, t = c.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
        };
        function m(e) {
          const t = Go(e),
            r = 'string' == typeof e,
            n = (t || r) && e.length;
          return t ? n === o || n === i : r ? n === 2 * o || n === 2 * i : e instanceof c;
        }
        const v =
            t.bits2int ||
            function (e) {
              if (e.length > 8192) throw new Error('input is too large');
              const r = li(e),
                n = 8 * e.length - t.nBitLength;
              return n > 0 ? r >> BigInt(n) : r;
            },
          b =
            t.bits2int_modN ||
            function (e) {
              return s(v(e));
            },
          y = bi(t.nBitLength);
        function C(e) {
          return mi('num < 2^' + t.nBitLength, e, Gs, y), ui(e, t.nByteLength);
        }
        function x(e, n, o = k) {
          if (['recovered', 'canonical'].some((e) => e in o))
            throw new Error('sign() legacy options not supported');
          const { hash: i, randomBytes: d } = t;
          let { lowS: h, prehash: g, extraEntropy: w } = o;
          null == h && (h = !0),
            (e = pi('msgHash', e)),
            Hs(o),
            g && (e = pi('prehashed msgHash', i(e)));
          const m = b(e),
            y = l(n),
            x = [C(y), C(m)];
          if (null != w && !1 !== w) {
            const e = !0 === w ? d(r.BYTES) : w;
            x.push(pi('extraEntropy', e));
          }
          const A = gi(...x),
            E = m;
          return {
            seed: A,
            k2sig: function (e) {
              const t = v(e);
              if (!u(t)) return;
              const r = a(t),
                n = c.BASE.multiply(t).toAffine(),
                o = s(n.x);
              if (o === Gs) return;
              const i = s(r * s(E + o * y));
              if (i === Gs) return;
              let l = (n.x === o ? 0 : 2) | Number(n.y & Ks),
                d = i;
              return (
                h &&
                  p(i) &&
                  ((d = (function (e) {
                    return p(e) ? s(-e) : e;
                  })(i)),
                  (l ^= 1)),
                new f(o, d, l)
              );
            },
          };
        }
        const k = { lowS: t.lowS, prehash: !1 },
          A = { lowS: t.lowS, prehash: !1 };
        return (
          c.BASE._setWindowSize(8),
          {
            CURVE: t,
            getPublicKey: function (e, t = !0) {
              return c.fromPrivateKey(e).toRawBytes(t);
            },
            getSharedSecret: function (e, t, r = !0) {
              if (m(e)) throw new Error('first arg must be private key');
              if (!m(t)) throw new Error('second arg must be public key');
              return c.fromHex(t).multiply(l(e)).toRawBytes(r);
            },
            sign: function (e, r, n = k) {
              const { seed: o, k2sig: i } = x(e, r, n),
                s = t;
              return xi(s.hash.outputLen, s.nByteLength, s.hmac)(o, i);
            },
            verify: function (e, r, n, o = A) {
              const i = e;
              (r = pi('msgHash', r)), (n = pi('publicKey', n));
              const { lowS: l, prehash: d, format: u } = o;
              if ((Hs(o), 'strict' in o)) throw new Error('options.strict was renamed to lowS');
              if (void 0 !== u && 'compact' !== u && 'der' !== u)
                throw new Error('format must be compact or der');
              const h = 'string' == typeof i || Go(i),
                p =
                  !h &&
                  !u &&
                  'object' == typeof i &&
                  null !== i &&
                  'bigint' == typeof i.r &&
                  'bigint' == typeof i.s;
              if (!h && !p)
                throw new Error(
                  'invalid signature, expected Uint8Array, hex string or Signature instance'
                );
              let g, w;
              try {
                if ((p && (g = new f(i.r, i.s)), h)) {
                  try {
                    'compact' !== u && (g = f.fromDER(i));
                  } catch (I) {
                    if (!(I instanceof Zs.Err)) throw I;
                  }
                  !g && 'der' !== u && (g = f.fromCompact(i));
                }
                w = c.fromHex(n);
              } catch {
                return !1;
              }
              if (!g || (l && g.hasHighS())) return !1;
              d && (r = t.hash(r));
              const { r: m, s: v } = g,
                y = b(r),
                C = a(v),
                x = s(y * C),
                k = s(m * C),
                E = c.BASE.multiplyAndAddUnsafe(w, x, k)?.toAffine();
              return !!E && s(E.x) === m;
            },
            ProjectivePoint: c,
            Signature: f,
            utils: w,
          }
        );
      }
      function Qs(e) {
        return {
          hash: e,
          hmac: (t, ...r) =>
            fs(
              e,
              t,
              (function (...e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                  const r = e[n];
                  or(r), (t += r.length);
                }
                const r = new Uint8Array(t);
                for (let n = 0, o = 0; n < e.length; n++) {
                  const t = e[n];
                  r.set(t, o), (o += t.length);
                }
                return r;
              })(...r)
            ),
          randomBytes: br,
        };
      }
      BigInt(4);
      const ea = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'),
        ta = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
        ra = BigInt(1),
        na = BigInt(2),
        oa = (e, t) => (e + t / na) / t;
      const ia = Ps(ea, void 0, void 0, {
        sqrt: function (e) {
          const t = ea,
            r = BigInt(3),
            n = BigInt(6),
            o = BigInt(11),
            i = BigInt(22),
            s = BigInt(23),
            a = BigInt(44),
            c = BigInt(88),
            l = (e * e * e) % t,
            d = (l * l * e) % t,
            u = (Es(d, r, t) * d) % t,
            h = (Es(u, r, t) * d) % t,
            p = (Es(h, na, t) * l) % t,
            g = (Es(p, o, t) * p) % t,
            f = (Es(g, i, t) * g) % t,
            w = (Es(f, a, t) * f) % t,
            m = (Es(w, c, t) * w) % t,
            v = (Es(m, a, t) * f) % t,
            b = (Es(v, r, t) * d) % t,
            y = (Es(b, s, t) * g) % t,
            C = (Es(y, n, t) * l) % t,
            x = Es(C, na, t);
          if (!ia.eql(ia.sqr(x), e)) throw new Error('Cannot find square root');
          return x;
        },
      });
      (function (e, t) {
        const r = (t) => Js({ ...e, ...Qs(t) });
        r(t);
      })(
        {
          a: BigInt(0),
          b: BigInt(7),
          Fp: ia,
          n: ta,
          Gx: BigInt(
            '55066263022277343669578718895168534326250603453777594175500187360389116729240'
          ),
          Gy: BigInt(
            '32670510020758816978083085130507043184471273380659243275938904335757337482424'
          ),
          h: BigInt(1),
          lowS: !0,
          endo: {
            beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
            splitScalar: (e) => {
              const t = ta,
                r = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                n = -ra * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                o = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                i = r,
                s = BigInt('0x100000000000000000000000000000000'),
                a = oa(i * e, t),
                c = oa(-n * e, t);
              let l = ks(e - a * r - c * o, t),
                d = ks(-a * n - c * i, t);
              const u = l > s,
                h = d > s;
              if ((u && (l = t - l), h && (d = t - d), l > s || d > s))
                throw new Error('splitScalar: Endomorphism failed, k=' + e);
              return { k1neg: u, k1: l, k2neg: h, k2: d };
            },
          },
        },
        so
      ),
        BigInt(0);
      const sa = {
          createBalance(e, t) {
            const r = {
              name: e.metadata.name || '',
              symbol: e.metadata.symbol || '',
              decimals: e.metadata.decimals || 0,
              value: e.metadata.value || 0,
              price: e.metadata.price || 0,
              iconUrl: e.metadata.iconUrl || '',
            };
            return {
              name: r.name,
              symbol: r.symbol,
              chainId: t,
              address:
                'native' === e.address ? void 0 : this.convertAddressToCAIP10Address(e.address, t),
              value: r.value,
              price: r.price,
              quantity: {
                decimals: r.decimals.toString(),
                numeric: this.convertHexToBalance({ hex: e.balance, decimals: r.decimals }),
              },
              iconUrl: r.iconUrl,
            };
          },
          convertHexToBalance: ({ hex: e, decimals: t }) => Qr(BigInt(e), t),
          convertAddressToCAIP10Address: (e, t) => `${t}:${e}`,
          createCAIP2ChainId: (e, t) => `${t}:${parseInt(e, 16)}`,
          getChainIdHexFromCAIP2ChainId(e) {
            const t = e.split(':');
            if (t.length < 2 || !t[1]) return '0x0';
            const r = t[1],
              n = parseInt(r, 10);
            return isNaN(n) ? '0x0' : `0x${n.toString(16)}`;
          },
          isWalletGetAssetsResponse(e) {
            return (
              'object' == typeof e &&
              null !== e &&
              Object.values(e).every(
                (e) => Array.isArray(e) && e.every((e) => this.isValidAsset(e))
              )
            );
          },
          isValidAsset: (e) =>
            'object' == typeof e &&
            null !== e &&
            'string' == typeof e.address &&
            'string' == typeof e.balance &&
            ('ERC20' === e.type || 'NATIVE' === e.type) &&
            'object' == typeof e.metadata &&
            null !== e.metadata &&
            'string' == typeof e.metadata.name &&
            'string' == typeof e.metadata.symbol &&
            'number' == typeof e.metadata.decimals &&
            'number' == typeof e.metadata.price &&
            'string' == typeof e.metadata.iconUrl,
        },
        aa = {
          async getMyTokensWithBalance(e) {
            const t = ba.state.address,
              r = pa.state.activeCaipNetwork;
            if (!t || !r) return [];
            if ('eip155' === r.chainNamespace) {
              const e = await this.getEIP155Balances(t, r);
              if (e) return this.filterLowQualityTokens(e);
            }
            const n = await ma.getBalance(t, r.caipNetworkId, e);
            return this.filterLowQualityTokens(n.balances);
          },
          async getEIP155Balances(e, t) {
            try {
              const r = sa.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);
              if (!(await Ct.getCapabilities(e))?.[r]?.assetDiscovery?.supported) return null;
              const n = await Ct.walletGetAssets({ account: e, chainFilter: [r] });
              return sa.isWalletGetAssetsResponse(n)
                ? (n[r] || []).map((e) => sa.createBalance(e, t.caipNetworkId))
                : null;
            } catch {
              return null;
            }
          },
          filterLowQualityTokens: (e) => e.filter((e) => '0' !== e.quantity.decimals),
          mapBalancesToSwapTokens: (e) =>
            e?.map((e) => ({
              ...e,
              address: e?.address ? e.address : pa.getActiveNetworkTokenAddress(),
              decimals: parseInt(e.quantity.decimals, 10),
              logoUri: e.iconUrl,
              eip2612: !1,
            })) || [],
        },
        ca = Ie({ tokenBalances: [], loading: !1 }),
        la = {
          state: ca,
          subscribe: (e) => Ne(ca, () => e(ca)),
          subscribeKey: (e, t) => Pe(ca, e, t),
          setToken(e) {
            e && (ca.token = _e(e));
          },
          setTokenAmount(e) {
            ca.sendTokenAmount = e;
          },
          setReceiverAddress(e) {
            ca.receiverAddress = e;
          },
          setReceiverProfileImageUrl(e) {
            ca.receiverProfileImageUrl = e;
          },
          setReceiverProfileName(e) {
            ca.receiverProfileName = e;
          },
          setGasPrice(e) {
            ca.gasPrice = e;
          },
          setGasPriceInUsd(e) {
            ca.gasPriceInUSD = e;
          },
          setNetworkBalanceInUsd(e) {
            ca.networkBalanceInUSD = e;
          },
          setLoading(e) {
            ca.loading = e;
          },
          sendToken() {
            switch (pa.state.activeCaipNetwork?.chainNamespace) {
              case 'eip155':
                return void this.sendEvmToken();
              case 'solana':
                return void this.sendSolanaToken();
              default:
                throw new Error('Unsupported chain');
            }
          },
          sendEvmToken() {
            const e = pa.state.activeChain,
              t = ba.state.preferredAccountTypes?.[e];
            this.state.token?.address && this.state.sendTokenAmount && this.state.receiverAddress
              ? (Je.sendEvent({
                  type: 'track',
                  event: 'SEND_INITIATED',
                  properties: {
                    isSmartAccount: t === ht.SMART_ACCOUNT,
                    token: this.state.token.address,
                    amount: this.state.sendTokenAmount,
                    network: pa.state.activeCaipNetwork?.caipNetworkId || '',
                  },
                }),
                this.sendERC20Token({
                  receiverAddress: this.state.receiverAddress,
                  tokenAddress: this.state.token.address,
                  sendTokenAmount: this.state.sendTokenAmount,
                  decimals: this.state.token.quantity.decimals,
                }))
              : this.state.receiverAddress &&
                this.state.sendTokenAmount &&
                this.state.gasPrice &&
                this.state.token?.quantity.decimals &&
                (Je.sendEvent({
                  type: 'track',
                  event: 'SEND_INITIATED',
                  properties: {
                    isSmartAccount: t === ht.SMART_ACCOUNT,
                    token: this.state.token?.symbol,
                    amount: this.state.sendTokenAmount,
                    network: pa.state.activeCaipNetwork?.caipNetworkId || '',
                  },
                }),
                this.sendNativeToken({
                  receiverAddress: this.state.receiverAddress,
                  sendTokenAmount: this.state.sendTokenAmount,
                  gasPrice: this.state.gasPrice,
                  decimals: this.state.token.quantity.decimals,
                }));
          },
          async fetchTokenBalance(e) {
            ca.loading = !0;
            const t = pa.state.activeCaipNetwork?.caipNetworkId,
              r = pa.state.activeCaipNetwork?.chainNamespace,
              n = pa.state.activeCaipAddress,
              o = n ? Re.getPlainAddress(n) : void 0;
            if (ca.lastRetry && !Re.isAllowedRetry(ca.lastRetry, 30 * Oe.ONE_SEC_MS))
              return (ca.loading = !1), [];
            try {
              if (o && t && r) {
                const e = await aa.getMyTokensWithBalance();
                return (ca.tokenBalances = e), (ca.lastRetry = void 0), e;
              }
            } catch (i) {
              (ca.lastRetry = Date.now()), e?.(i), ft.showError('Token Balance Unavailable');
            } finally {
              ca.loading = !1;
            }
            return [];
          },
          fetchNetworkBalance() {
            if (0 === ca.tokenBalances.length) return;
            const e = aa.mapBalancesToSwapTokens(ca.tokenBalances);
            if (!e) return;
            const t = e.find((e) => e.address === pa.getActiveNetworkTokenAddress());
            t &&
              (ca.networkBalanceInUSD = t
                ? Z.multiply(t.quantity.numeric, t.price).toString()
                : '0');
          },
          isInsufficientNetworkTokenForGas(e, t) {
            const r = t || '0';
            return !!Z.bigNumber(e).eq(0) || Z.bigNumber(Z.bigNumber(r)).gt(e);
          },
          hasInsufficientGasFunds() {
            const e = pa.state.activeChain;
            let t = !0;
            return (
              ba.state.preferredAccountTypes?.[e] === ht.SMART_ACCOUNT
                ? (t = !1)
                : ca.networkBalanceInUSD &&
                  (t = this.isInsufficientNetworkTokenForGas(
                    ca.networkBalanceInUSD,
                    ca.gasPriceInUSD
                  )),
              t
            );
          },
          async sendNativeToken(e) {
            const t = pa.state.activeChain;
            it.pushTransactionStack({ view: 'Account', goBack: !1 });
            const r = e.receiverAddress,
              n = ba.state.address,
              o = Ct.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals));
            try {
              await Ct.sendTransaction({
                chainNamespace: 'eip155',
                to: r,
                address: n,
                data: '0x',
                value: o ?? BigInt(0),
                gasPrice: e.gasPrice,
              }),
                ft.showSuccess('Transaction started'),
                Je.sendEvent({
                  type: 'track',
                  event: 'SEND_SUCCESS',
                  properties: {
                    isSmartAccount: ba.state.preferredAccountTypes?.[t] === ht.SMART_ACCOUNT,
                    token: this.state.token?.symbol || '',
                    amount: e.sendTokenAmount,
                    network: pa.state.activeCaipNetwork?.caipNetworkId || '',
                  },
                }),
                this.resetSend();
            } catch (i) {
              console.error('SendController:sendERC20Token - failed to send native token', i);
              const r = i instanceof Error ? i.message : 'Unknown error';
              Je.sendEvent({
                type: 'track',
                event: 'SEND_ERROR',
                properties: {
                  message: r,
                  isSmartAccount: ba.state.preferredAccountTypes?.[t] === ht.SMART_ACCOUNT,
                  token: this.state.token?.symbol || '',
                  amount: e.sendTokenAmount,
                  network: pa.state.activeCaipNetwork?.caipNetworkId || '',
                },
              }),
                ft.showError('Something went wrong');
            }
          },
          async sendERC20Token(e) {
            it.pushTransactionStack({ view: 'Account', goBack: !1 });
            const t = Ct.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals));
            try {
              if (ba.state.address && e.sendTokenAmount && e.receiverAddress && e.tokenAddress) {
                const r = Re.getPlainAddress(e.tokenAddress);
                await Ct.writeContract({
                  fromAddress: ba.state.address,
                  tokenAddress: r,
                  args: [e.receiverAddress, t ?? BigInt(0)],
                  method: 'transfer',
                  abi: X(r),
                  chainNamespace: 'eip155',
                }),
                  ft.showSuccess('Transaction started'),
                  this.resetSend();
              }
            } catch (r) {
              console.error('SendController:sendERC20Token - failed to send erc20 token', r);
              const t = r instanceof Error ? r.message : 'Unknown error';
              Je.sendEvent({
                type: 'track',
                event: 'SEND_ERROR',
                properties: {
                  message: t,
                  isSmartAccount: ba.state.preferredAccountTypes?.eip155 === ht.SMART_ACCOUNT,
                  token: this.state.token?.symbol || '',
                  amount: e.sendTokenAmount,
                  network: pa.state.activeCaipNetwork?.caipNetworkId || '',
                },
              }),
                ft.showError('Something went wrong');
            }
          },
          sendSolanaToken() {
            this.state.sendTokenAmount && this.state.receiverAddress
              ? (it.pushTransactionStack({ view: 'Account', goBack: !1 }),
                Ct.sendTransaction({
                  chainNamespace: 'solana',
                  to: this.state.receiverAddress,
                  value: this.state.sendTokenAmount,
                })
                  .then(() => {
                    this.resetSend(), ba.fetchTokenBalance();
                  })
                  .catch((e) => {
                    ft.showError('Failed to send transaction. Please try again.'),
                      console.error(
                        'SendController:sendToken - failed to send solana transaction',
                        e
                      );
                  }))
              : ft.showError('Please enter a valid amount and receiver address');
          },
          resetSend() {
            (ca.token = void 0),
              (ca.sendTokenAmount = void 0),
              (ca.receiverAddress = void 0),
              (ca.receiverProfileImageUrl = void 0),
              (ca.receiverProfileName = void 0),
              (ca.loading = !1),
              (ca.tokenBalances = []);
          },
        },
        da = {
          currentTab: 0,
          tokenBalance: [],
          smartAccountDeployed: !1,
          addressLabels: new Map(),
          allAccounts: [],
          user: void 0,
        },
        ua = { caipNetwork: void 0, supportsAllNetworks: !0, smartAccountEnabledNetworks: [] },
        ha = Ie({
          chains: (function (e) {
            const t = Ie({
              data: Array.from(e || []),
              has(e) {
                return this.data.some((t) => t[0] === e);
              },
              set(e, t) {
                const r = this.data.find((t) => t[0] === e);
                return r ? (r[1] = t) : this.data.push([e, t]), this;
              },
              get(e) {
                var t;
                return null == (t = this.data.find((t) => t[0] === e)) ? void 0 : t[1];
              },
              delete(e) {
                const t = this.data.findIndex((t) => t[0] === e);
                return -1 !== t && (this.data.splice(t, 1), !0);
              },
              clear() {
                this.data.splice(0);
              },
              get size() {
                return this.data.length;
              },
              toJSON() {
                return new Map(this.data);
              },
              forEach(e) {
                this.data.forEach((t) => {
                  e(t[1], t[0], this);
                });
              },
              keys() {
                return this.data.map((e) => e[0]).values();
              },
              values() {
                return this.data.map((e) => e[1]).values();
              },
              entries() {
                return new Map(this.data).entries();
              },
              get [Symbol.toStringTag]() {
                return 'Map';
              },
              [Symbol.iterator]() {
                return this.entries();
              },
            });
            return (
              Object.defineProperties(t, {
                data: { enumerable: !1 },
                size: { enumerable: !1 },
                toJSON: { enumerable: !1 },
              }),
              Object.seal(t),
              t
            );
          })(),
          activeCaipAddress: void 0,
          activeChain: void 0,
          activeCaipNetwork: void 0,
          noAdapters: !1,
          universalAdapter: { networkControllerClient: void 0, connectionControllerClient: void 0 },
          isSwitchingNamespace: !1,
        }),
        pa = {
          state: ha,
          subscribe: (e) =>
            Ne(ha, () => {
              e(ha);
            }),
          subscribeKey: (e, t) => Pe(ha, e, t),
          subscribeChainProp(e, t, r) {
            let n;
            return Ne(ha.chains, () => {
              const o = r || ha.activeChain;
              if (o) {
                const r = ha.chains.get(o)?.[e];
                n !== r && ((n = r), t(r));
              }
            });
          },
          initialize(e, t, r) {
            const { chainId: n, namespace: o } = $e.getActiveNetworkProps(),
              i = t?.find((e) => e.id.toString() === n?.toString()),
              s = e.find((e) => e?.namespace === o) || e?.[0],
              a = new Set([...(t?.map((e) => e.chainNamespace) ?? [])]);
            (0 === e?.length || !s) && (ha.noAdapters = !0),
              ha.noAdapters ||
                ((ha.activeChain = s?.namespace),
                (ha.activeCaipNetwork = i),
                this.setChainNetworkData(s?.namespace, { caipNetwork: i }),
                ha.activeChain && kt.set({ activeChain: s?.namespace })),
              a.forEach((e) => {
                const n = t?.filter((t) => t.chainNamespace === e);
                pa.state.chains.set(e, {
                  namespace: e,
                  networkState: Ie({ ...ua, caipNetwork: n?.[0] }),
                  accountState: Ie(da),
                  caipNetworks: n ?? [],
                  ...r,
                }),
                  this.setRequestedCaipNetworks(n ?? [], e);
              });
          },
          removeAdapter(e) {
            if (ha.activeChain === e) {
              const t = Array.from(ha.chains.entries()).find(([t]) => t !== e);
              if (t) {
                const e = t[1]?.caipNetworks?.[0];
                e && this.setActiveCaipNetwork(e);
              }
            }
            ha.chains.delete(e);
          },
          addAdapter(e, { networkControllerClient: t, connectionControllerClient: r }, n) {
            ha.chains.set(e.namespace, {
              namespace: e.namespace,
              networkState: { ...ua, caipNetwork: n[0] },
              accountState: da,
              caipNetworks: n,
              connectionControllerClient: r,
              networkControllerClient: t,
            }),
              this.setRequestedCaipNetworks(
                n?.filter((t) => t.chainNamespace === e.namespace) ?? [],
                e.namespace
              );
          },
          addNetwork(e) {
            const t = ha.chains.get(e.chainNamespace);
            if (t) {
              const r = [...(t.caipNetworks || [])];
              t.caipNetworks?.find((t) => t.id === e.id) || r.push(e),
                ha.chains.set(e.chainNamespace, { ...t, caipNetworks: r }),
                this.setRequestedCaipNetworks(r, e.chainNamespace);
            }
          },
          removeNetwork(e, t) {
            const r = ha.chains.get(e);
            if (r) {
              const n = ha.activeCaipNetwork?.id === t,
                o = [...(r.caipNetworks?.filter((e) => e.id !== t) || [])];
              n && r?.caipNetworks?.[0] && this.setActiveCaipNetwork(r.caipNetworks[0]),
                ha.chains.set(e, { ...r, caipNetworks: o }),
                this.setRequestedCaipNetworks(o || [], e);
            }
          },
          setAdapterNetworkState(e, t) {
            const r = ha.chains.get(e);
            r && ((r.networkState = { ...(r.networkState || ua), ...t }), ha.chains.set(e, r));
          },
          setChainAccountData(e, t, r = !0) {
            if (!e) throw new Error('Chain is required to update chain account data');
            const n = ha.chains.get(e);
            if (n) {
              const r = { ...(n.accountState || da), ...t };
              ha.chains.set(e, { ...n, accountState: r }),
                (1 === ha.chains.size || ha.activeChain === e) &&
                  (t.caipAddress && (ha.activeCaipAddress = t.caipAddress), ba.replaceState(r));
            }
          },
          setChainNetworkData(e, t) {
            if (!e) return;
            const r = ha.chains.get(e);
            if (r) {
              const n = { ...(r.networkState || ua), ...t };
              ha.chains.set(e, { ...r, networkState: n });
            }
          },
          setAccountProp(e, t, r, n = !0) {
            this.setChainAccountData(r, { [e]: t }, n),
              'status' === e && 'disconnected' === t && r && dt.removeConnectorId(r);
          },
          setActiveNamespace(e) {
            ha.activeChain = e;
            const t = e ? ha.chains.get(e) : void 0,
              r = t?.networkState?.caipNetwork;
            r?.id &&
              e &&
              ((ha.activeCaipAddress = t?.accountState?.caipAddress),
              (ha.activeCaipNetwork = r),
              this.setChainNetworkData(e, { caipNetwork: r }),
              $e.setActiveCaipNetworkId(r?.caipNetworkId),
              kt.set({ activeChain: e, selectedNetworkId: r?.caipNetworkId }));
          },
          setActiveCaipNetwork(e) {
            if (!e) return;
            ha.activeChain !== e.chainNamespace && this.setIsSwitchingNamespace(!0);
            const t = ha.chains.get(e.chainNamespace);
            (ha.activeChain = e.chainNamespace),
              (ha.activeCaipNetwork = e),
              this.setChainNetworkData(e.chainNamespace, { caipNetwork: e }),
              (ha.activeCaipAddress = t?.accountState?.address
                ? `${e.chainNamespace}:${e.id}:${t?.accountState?.address}`
                : void 0),
              this.setAccountProp('caipAddress', ha.activeCaipAddress, e.chainNamespace),
              t && ba.replaceState(t.accountState),
              la.resetSend(),
              kt.set({
                activeChain: ha.activeChain,
                selectedNetworkId: ha.activeCaipNetwork?.caipNetworkId,
              }),
              $e.setActiveCaipNetworkId(e.caipNetworkId),
              !this.checkIfSupportedNetwork(e.chainNamespace) &&
                Ve.state.enableNetworkSwitch &&
                !Ve.state.allowUnsupportedChain &&
                !Ct.state.wcBasic &&
                this.showUnsupportedChainUI();
          },
          addCaipNetwork(e) {
            if (!e) return;
            const t = ha.chains.get(e.chainNamespace);
            t && t?.caipNetworks?.push(e);
          },
          async switchActiveNamespace(e) {
            if (!e) return;
            const t = e !== pa.state.activeChain,
              r = pa.getNetworkData(e)?.caipNetwork,
              n = pa.getCaipNetworkByNamespace(e, r?.id);
            t && n && (await pa.switchActiveNetwork(n));
          },
          async switchActiveNetwork(e) {
            !pa.state.chains
              .get(pa.state.activeChain)
              ?.caipNetworks?.some((e) => e.id === ha.activeCaipNetwork?.id) && it.goBack();
            const t = this.getNetworkControllerClient(e.chainNamespace);
            t &&
              (await t.switchCaipNetwork(e),
              Je.sendEvent({
                type: 'track',
                event: 'SWITCH_NETWORK',
                properties: { network: e.caipNetworkId },
              }));
          },
          getNetworkControllerClient(e) {
            const t = e || ha.activeChain,
              r = ha.chains.get(t);
            if (!r) throw new Error('Chain adapter not found');
            if (!r.networkControllerClient) throw new Error('NetworkController client not set');
            return r.networkControllerClient;
          },
          getConnectionControllerClient(e) {
            const t = e || ha.activeChain;
            if (!t) throw new Error('Chain is required to get connection controller client');
            const r = ha.chains.get(t);
            if (!r?.connectionControllerClient)
              throw new Error('ConnectionController client not set');
            return r.connectionControllerClient;
          },
          getAccountProp(e, t) {
            let r = ha.activeChain;
            if ((t && (r = t), !r)) return;
            const n = ha.chains.get(r)?.accountState;
            return n ? n[e] : void 0;
          },
          getNetworkProp(e, t) {
            const r = ha.chains.get(t)?.networkState;
            if (r) return r[e];
          },
          getRequestedCaipNetworks(e) {
            const t = ha.chains.get(e),
              { approvedCaipNetworkIds: r = [], requestedCaipNetworks: n = [] } =
                t?.networkState || {};
            return Re.sortRequestedNetworks(r, n);
          },
          getAllRequestedCaipNetworks() {
            const e = [];
            return (
              ha.chains.forEach((t) => {
                const r = this.getRequestedCaipNetworks(t.namespace);
                e.push(...r);
              }),
              e
            );
          },
          setRequestedCaipNetworks(e, t) {
            this.setAdapterNetworkState(t, { requestedCaipNetworks: e });
          },
          getAllApprovedCaipNetworkIds() {
            const e = [];
            return (
              ha.chains.forEach((t) => {
                const r = this.getApprovedCaipNetworkIds(t.namespace);
                e.push(...r);
              }),
              e
            );
          },
          getActiveCaipNetwork: () => ha.activeCaipNetwork,
          getActiveCaipAddress: () => ha.activeCaipAddress,
          getApprovedCaipNetworkIds: (e) =>
            ha.chains.get(e)?.networkState?.approvedCaipNetworkIds || [],
          async setApprovedCaipNetworksData(e) {
            const t = await this.getNetworkControllerClient()?.getApprovedCaipNetworksData();
            this.setAdapterNetworkState(e, {
              approvedCaipNetworkIds: t?.approvedCaipNetworkIds,
              supportsAllNetworks: t?.supportsAllNetworks,
            });
          },
          checkIfSupportedNetwork(e, t) {
            const r = t || ha.activeCaipNetwork,
              n = this.getRequestedCaipNetworks(e);
            return !n.length || n?.some((e) => e.id === r?.id);
          },
          checkIfSupportedChainId(e) {
            return (
              !ha.activeChain ||
              this.getRequestedCaipNetworks(ha.activeChain)?.some((t) => t.id === e)
            );
          },
          setSmartAccountEnabledNetworks(e, t) {
            this.setAdapterNetworkState(t, { smartAccountEnabledNetworks: e });
          },
          checkIfSmartAccountEnabled() {
            const e = R.caipNetworkIdToNumber(ha.activeCaipNetwork?.caipNetworkId),
              t = ha.activeChain;
            return (
              !(!t || !e) &&
              !!this.getNetworkProp('smartAccountEnabledNetworks', t)?.includes(Number(e))
            );
          },
          getActiveNetworkTokenAddress() {
            const e = ha.activeCaipNetwork?.chainNamespace || 'eip155';
            return `${e}:${ha.activeCaipNetwork?.id || 1}:${Oe.NATIVE_TOKEN_ADDRESS[e]}`;
          },
          showUnsupportedChainUI() {
            Ca.open({ view: 'UnsupportedChain' });
          },
          checkIfNamesSupported() {
            const e = ha.activeCaipNetwork;
            return !(
              !e?.chainNamespace || !Oe.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace)
            );
          },
          resetNetwork(e) {
            this.setAdapterNetworkState(e, {
              approvedCaipNetworkIds: void 0,
              supportsAllNetworks: !0,
              smartAccountEnabledNetworks: [],
            });
          },
          resetAccount(e) {
            const t = e;
            if (!t) throw new Error('Chain is required to set account prop');
            (ha.activeCaipAddress = void 0),
              this.setChainAccountData(t, {
                smartAccountDeployed: !1,
                currentTab: 0,
                caipAddress: void 0,
                address: void 0,
                balance: void 0,
                balanceSymbol: void 0,
                profileName: void 0,
                profileImage: void 0,
                addressExplorerUrl: void 0,
                tokenBalance: [],
                connectedWalletInfo: void 0,
                preferredAccountTypes: void 0,
                socialProvider: void 0,
                socialWindow: void 0,
                farcasterUrl: void 0,
                allAccounts: [],
                user: void 0,
                status: 'disconnected',
              }),
              dt.removeConnectorId(t);
          },
          async disconnect(e) {
            const t = (function (e) {
              const t = Array.from(pa.state.chains.keys());
              let r = [];
              return (
                e
                  ? (r.push([e, pa.state.chains.get(e)]),
                    ut(e, Y.CONNECTOR_ID.WALLET_CONNECT)
                      ? t.forEach((t) => {
                          t !== e &&
                            ut(t, Y.CONNECTOR_ID.WALLET_CONNECT) &&
                            r.push([t, pa.state.chains.get(t)]);
                        })
                      : ut(e, Y.CONNECTOR_ID.AUTH) &&
                        t.forEach((t) => {
                          t !== e &&
                            ut(t, Y.CONNECTOR_ID.AUTH) &&
                            r.push([t, pa.state.chains.get(t)]);
                        }))
                  : (r = Array.from(pa.state.chains.entries())),
                r
              );
            })(e);
            try {
              la.resetSend();
              const r = await Promise.allSettled(
                t.map(async ([e, t]) => {
                  try {
                    const { caipAddress: r } = this.getAccountData(e) || {};
                    r &&
                      t.connectionControllerClient?.disconnect &&
                      (await t.connectionControllerClient.disconnect(e)),
                      this.resetAccount(e),
                      this.resetNetwork(e);
                  } catch (r) {
                    throw new Error(`Failed to disconnect chain ${e}: ${r.message}`);
                  }
                })
              );
              Ct.resetWcConnection();
              const n = r.filter((e) => 'rejected' === e.status);
              if (n.length > 0) throw new Error(n.map((e) => e.reason.message).join(', '));
              $e.deleteConnectedSocialProvider(),
                e ? dt.removeConnectorId(e) : dt.resetConnectorIds(),
                Je.sendEvent({
                  type: 'track',
                  event: 'DISCONNECT_SUCCESS',
                  properties: { namespace: e || 'all' },
                });
            } catch (r) {
              console.error(r.message || 'Failed to disconnect chains'),
                Je.sendEvent({
                  type: 'track',
                  event: 'DISCONNECT_ERROR',
                  properties: { message: r.message || 'Failed to disconnect chains' },
                });
            }
          },
          setIsSwitchingNamespace(e) {
            ha.isSwitchingNamespace = e;
          },
          getFirstCaipNetworkSupportsAuthConnector() {
            const e = [];
            let t;
            if (
              (ha.chains.forEach((t) => {
                Y.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e) => e === t.namespace) &&
                  t.namespace &&
                  e.push(t.namespace);
              }),
              e.length > 0)
            ) {
              const r = e[0];
              return (t = r ? ha.chains.get(r)?.caipNetworks?.[0] : void 0), t;
            }
          },
          getAccountData: (e) => (e ? pa.state.chains.get(e)?.accountState : ba.state),
          getNetworkData(e) {
            const t = e || ha.activeChain;
            if (t) return pa.state.chains.get(t)?.networkState;
          },
          getCaipNetworkByNamespace(e, t) {
            if (!e) return;
            const r = pa.state.chains.get(e),
              n = r?.caipNetworks?.find((e) => e.id === t);
            return n || r?.networkState?.caipNetwork || r?.caipNetworks?.[0];
          },
          getRequestedCaipNetworkIds() {
            const e = dt.state.filterByNamespace;
            return (e ? [ha.chains.get(e)] : Array.from(ha.chains.values()))
              .flatMap((e) => e?.caipNetworks || [])
              .map((e) => e.caipNetworkId);
          },
          getCaipNetworks: (e) =>
            e ? pa.getRequestedCaipNetworks(e) : pa.getAllRequestedCaipNetworks(),
        },
        ga = {
          purchaseCurrencies: [
            {
              id: '2b92315d-eab7-5bef-84fa-089a131333f5',
              name: 'USD Coin',
              symbol: 'USDC',
              networks: [
                {
                  name: 'ethereum-mainnet',
                  display_name: 'Ethereum',
                  chain_id: '1',
                  contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                },
                {
                  name: 'polygon-mainnet',
                  display_name: 'Polygon',
                  chain_id: '137',
                  contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
                },
              ],
            },
            {
              id: '2b92315d-eab7-5bef-84fa-089a131333f5',
              name: 'Ether',
              symbol: 'ETH',
              networks: [
                {
                  name: 'ethereum-mainnet',
                  display_name: 'Ethereum',
                  chain_id: '1',
                  contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                },
                {
                  name: 'polygon-mainnet',
                  display_name: 'Polygon',
                  chain_id: '137',
                  contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
                },
              ],
            },
          ],
          paymentCurrencies: [
            {
              id: 'USD',
              payment_method_limits: [
                { id: 'card', min: '10.00', max: '7500.00' },
                { id: 'ach_bank_account', min: '10.00', max: '25000.00' },
              ],
            },
            {
              id: 'EUR',
              payment_method_limits: [
                { id: 'card', min: '10.00', max: '7500.00' },
                { id: 'ach_bank_account', min: '10.00', max: '25000.00' },
              ],
            },
          ],
        },
        fa = Re.getBlockchainApiUrl(),
        wa = Ie({
          clientId: null,
          api: new Le({ baseUrl: fa, clientId: null }),
          supportedChains: { http: [], ws: [] },
        }),
        ma = {
          state: wa,
          async get(e) {
            const { st: t, sv: r } = ma.getSdkProperties(),
              n = Ve.state.projectId,
              o = { ...(e.params || {}), st: t, sv: r, projectId: n };
            return wa.api.get({ ...e, params: o });
          },
          getSdkProperties() {
            const { sdkType: e, sdkVersion: t } = Ve.state;
            return { st: e || 'unknown', sv: t || 'unknown' };
          },
          async isNetworkSupported(e) {
            if (!e) return !1;
            try {
              wa.supportedChains.http.length || (await ma.getSupportedNetworks());
            } catch {
              return !1;
            }
            return wa.supportedChains.http.includes(e);
          },
          async getSupportedNetworks() {
            const e = await ma.get({ path: 'v1/supported-chains' });
            return (wa.supportedChains = e), e;
          },
          async fetchIdentity({ address: e, caipNetworkId: t }) {
            if (!(await ma.isNetworkSupported(t))) return { avatar: '', name: '' };
            const r = $e.getIdentityFromCacheForAddress(e);
            if (r) return r;
            const n = await ma.get({
              path: `/v1/identity/${e}`,
              params: {
                sender: pa.state.activeCaipAddress
                  ? Re.getPlainAddress(pa.state.activeCaipAddress)
                  : void 0,
              },
            });
            return $e.updateIdentityCache({ address: e, identity: n, timestamp: Date.now() }), n;
          },
          fetchTransactions: async ({
            account: e,
            cursor: t,
            onramp: r,
            signal: n,
            cache: o,
            chainId: i,
          }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({
                  path: `/v1/account/${e}/history`,
                  params: { cursor: t, onramp: r, chainId: i },
                  signal: n,
                  cache: o,
                })
              : { data: [], next: void 0 },
          fetchSwapQuote: async ({ amount: e, userAddress: t, from: r, to: n, gasPrice: o }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({
                  path: '/v1/convert/quotes',
                  headers: { 'Content-Type': 'application/json' },
                  params: { amount: e, userAddress: t, from: r, to: n, gasPrice: o },
                })
              : { quotes: [] },
          fetchSwapTokens: async ({ chainId: e }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({ path: '/v1/convert/tokens', params: { chainId: e } })
              : { tokens: [] },
          fetchTokenPrice: async ({ addresses: e }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? wa.api.post({
                  path: '/v1/fungible/price',
                  body: { currency: 'usd', addresses: e, projectId: Ve.state.projectId },
                  headers: { 'Content-Type': 'application/json' },
                })
              : { fungibles: [] },
          fetchSwapAllowance: async ({ tokenAddress: e, userAddress: t }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({
                  path: '/v1/convert/allowance',
                  params: { tokenAddress: e, userAddress: t },
                  headers: { 'Content-Type': 'application/json' },
                })
              : { allowance: '0' },
          async fetchGasPrice({ chainId: e }) {
            const { st: t, sv: r } = ma.getSdkProperties();
            if (!(await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId)))
              throw new Error('Network not supported for Gas Price');
            return ma.get({
              path: '/v1/convert/gas-price',
              headers: { 'Content-Type': 'application/json' },
              params: { chainId: e, st: t, sv: r },
            });
          },
          async generateSwapCalldata({
            amount: e,
            from: t,
            to: r,
            userAddress: n,
            disableEstimate: o,
          }) {
            if (!(await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId)))
              throw new Error('Network not supported for Swaps');
            return wa.api.post({
              path: '/v1/convert/build-transaction',
              headers: { 'Content-Type': 'application/json' },
              body: {
                amount: e,
                eip155: { slippage: Oe.CONVERT_SLIPPAGE_TOLERANCE },
                projectId: Ve.state.projectId,
                from: t,
                to: r,
                userAddress: n,
                disableEstimate: o,
              },
            });
          },
          async generateApproveCalldata({ from: e, to: t, userAddress: r }) {
            const { st: n, sv: o } = ma.getSdkProperties();
            if (!(await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId)))
              throw new Error('Network not supported for Swaps');
            return ma.get({
              path: '/v1/convert/build-approve',
              headers: { 'Content-Type': 'application/json' },
              params: { userAddress: r, from: e, to: t, st: n, sv: o },
            });
          },
          async getBalance(e, t, r) {
            const { st: n, sv: o } = ma.getSdkProperties();
            if (!(await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId)))
              return ft.showError('Token Balance Unavailable'), { balances: [] };
            const i = `${t}:${e}`,
              s = $e.getBalanceCacheForCaipAddress(i);
            if (s) return s;
            const a = await ma.get({
              path: `/v1/account/${e}/balance`,
              params: { currency: 'usd', chainId: t, forceUpdate: r, st: n, sv: o },
            });
            return $e.updateBalanceCache({ caipAddress: i, balance: a, timestamp: Date.now() }), a;
          },
          lookupEnsName: async (e) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({ path: `/v1/profile/account/${e}`, params: { apiVersion: '2' } })
              : { addresses: {}, attributes: [] },
          reverseLookupEnsName: async ({ address: e }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({
                  path: `/v1/profile/reverse/${e}`,
                  params: { sender: ba.state.address, apiVersion: '2' },
                })
              : [],
          getEnsNameSuggestions: async (e) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({ path: `/v1/profile/suggestions/${e}`, params: { zone: 'reown.id' } })
              : { suggestions: [] },
          registerEnsName: async ({ coinType: e, address: t, message: r, signature: n }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? wa.api.post({
                  path: '/v1/profile/account',
                  body: { coin_type: e, address: t, message: r, signature: n },
                  headers: { 'Content-Type': 'application/json' },
                })
              : { success: !1 },
          generateOnRampURL: async ({
            destinationWallets: e,
            partnerUserId: t,
            defaultNetwork: r,
            purchaseAmount: n,
            paymentAmount: o,
          }) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? (
                  await wa.api.post({
                    path: '/v1/generators/onrampurl',
                    params: { projectId: Ve.state.projectId },
                    body: {
                      destinationWallets: e,
                      defaultNetwork: r,
                      partnerUserId: t,
                      defaultExperience: 'buy',
                      presetCryptoAmount: n,
                      presetFiatAmount: o,
                    },
                  })
                ).url
              : '',
          async getOnrampOptions() {
            if (!(await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId)))
              return { paymentCurrencies: [], purchaseCurrencies: [] };
            try {
              return await ma.get({ path: '/v1/onramp/options' });
            } catch {
              return ga;
            }
          },
          async getOnrampQuote({ purchaseCurrency: e, paymentCurrency: t, amount: r, network: n }) {
            try {
              return (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
                ? await wa.api.post({
                    path: '/v1/onramp/quote',
                    params: { projectId: Ve.state.projectId },
                    body: { purchaseCurrency: e, paymentCurrency: t, amount: r, network: n },
                  })
                : null;
            } catch {
              return {
                coinbaseFee: { amount: r, currency: t.id },
                networkFee: { amount: r, currency: t.id },
                paymentSubtotal: { amount: r, currency: t.id },
                paymentTotal: { amount: r, currency: t.id },
                purchaseAmount: { amount: r, currency: t.id },
                quoteId: 'mocked-quote-id',
              };
            }
          },
          getSmartSessions: async (e) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? ma.get({ path: `/v1/sessions/${e}` })
              : [],
          revokeSmartSession: async (e, t, r) =>
            (await ma.isNetworkSupported(pa.state.activeCaipNetwork?.caipNetworkId))
              ? wa.api.post({
                  path: `/v1/sessions/${e}/revoke`,
                  params: { projectId: Ve.state.projectId },
                  body: { pci: t, signature: r },
                })
              : { success: !1 },
          setClientId(e) {
            (wa.clientId = e), (wa.api = new Le({ baseUrl: fa, clientId: e }));
          },
        },
        va = Ie({
          currentTab: 0,
          tokenBalance: [],
          smartAccountDeployed: !1,
          addressLabels: new Map(),
          allAccounts: [],
        }),
        ba = {
          state: va,
          replaceState(e) {
            e && Object.assign(va, _e(e));
          },
          subscribe: (e) =>
            pa.subscribeChainProp('accountState', (t) => {
              if (t) return e(t);
            }),
          subscribeKey(e, t, r) {
            let n;
            return pa.subscribeChainProp(
              'accountState',
              (r) => {
                if (r) {
                  const o = r[e];
                  n !== o && ((n = o), t(o));
                }
              },
              r
            );
          },
          setStatus(e, t) {
            pa.setAccountProp('status', e, t);
          },
          getCaipAddress: (e) => pa.getAccountProp('caipAddress', e),
          setCaipAddress(e, t) {
            const r = e ? Re.getPlainAddress(e) : void 0;
            t === pa.state.activeChain && (pa.state.activeCaipAddress = e),
              pa.setAccountProp('caipAddress', e, t),
              pa.setAccountProp('address', r, t);
          },
          setBalance(e, t, r) {
            pa.setAccountProp('balance', e, r), pa.setAccountProp('balanceSymbol', t, r);
          },
          setProfileName(e, t) {
            pa.setAccountProp('profileName', e, t);
          },
          setProfileImage(e, t) {
            pa.setAccountProp('profileImage', e, t);
          },
          setUser(e, t) {
            pa.setAccountProp('user', e, t);
          },
          setAddressExplorerUrl(e, t) {
            pa.setAccountProp('addressExplorerUrl', e, t);
          },
          setSmartAccountDeployed(e, t) {
            pa.setAccountProp('smartAccountDeployed', e, t);
          },
          setCurrentTab(e) {
            pa.setAccountProp('currentTab', e, pa.state.activeChain);
          },
          setTokenBalance(e, t) {
            e && pa.setAccountProp('tokenBalance', e, t);
          },
          setShouldUpdateToAddress(e, t) {
            pa.setAccountProp('shouldUpdateToAddress', e, t);
          },
          setAllAccounts(e, t) {
            pa.setAccountProp('allAccounts', e, t);
          },
          addAddressLabel(e, t, r) {
            const n = pa.getAccountProp('addressLabels', r) || new Map();
            n.set(e, t), pa.setAccountProp('addressLabels', n, r);
          },
          removeAddressLabel(e, t) {
            const r = pa.getAccountProp('addressLabels', t) || new Map();
            r.delete(e), pa.setAccountProp('addressLabels', r, t);
          },
          setConnectedWalletInfo(e, t) {
            pa.setAccountProp('connectedWalletInfo', e, t, !1);
          },
          setPreferredAccountType(e, t) {
            pa.setAccountProp('preferredAccountTypes', { ...va.preferredAccountTypes, [t]: e }, t);
          },
          setPreferredAccountTypes(e) {
            va.preferredAccountTypes = e;
          },
          setSocialProvider(e, t) {
            e && pa.setAccountProp('socialProvider', e, t);
          },
          setSocialWindow(e, t) {
            pa.setAccountProp('socialWindow', e ? _e(e) : void 0, t);
          },
          setFarcasterUrl(e, t) {
            pa.setAccountProp('farcasterUrl', e, t);
          },
          async fetchTokenBalance(e) {
            va.balanceLoading = !0;
            const t = pa.state.activeCaipNetwork?.caipNetworkId,
              r = pa.state.activeCaipNetwork?.chainNamespace,
              n = pa.state.activeCaipAddress,
              o = n ? Re.getPlainAddress(n) : void 0;
            if (va.lastRetry && !Re.isAllowedRetry(va.lastRetry, 30 * Oe.ONE_SEC_MS))
              return (va.balanceLoading = !1), [];
            try {
              if (o && t && r) {
                const e = (await ma.getBalance(o, t)).balances.filter(
                  (e) => '0' !== e.quantity.decimals
                );
                return (
                  this.setTokenBalance(e, r), (va.lastRetry = void 0), (va.balanceLoading = !1), e
                );
              }
            } catch (i) {
              (va.lastRetry = Date.now()), e?.(i), ft.showError('Token Balance Unavailable');
            } finally {
              va.balanceLoading = !1;
            }
            return [];
          },
          resetAccount(e) {
            pa.resetAccount(e);
          },
        },
        ya = Ie({
          loading: !1,
          loadingNamespaceMap: new Map(),
          open: !1,
          shake: !1,
          namespace: void 0,
        }),
        Ca = {
          state: ya,
          subscribe: (e) => Ne(ya, () => e(ya)),
          subscribeKey: (e, t) => Pe(ya, e, t),
          async open(e) {
            const t = 'connected' === ba.state.status;
            Ct.state.wcBasic
              ? nt.prefetch({ fetchNetworkImages: !1, fetchConnectorImages: !1 })
              : await nt.prefetch({
                  fetchConnectorImages: !t,
                  fetchFeaturedWallets: !t,
                  fetchRecommendedWallets: !t,
                }),
              e?.namespace
                ? (await pa.switchActiveNamespace(e.namespace), Ca.setLoading(!0, e.namespace))
                : Ca.setLoading(!0),
              dt.setFilterByNamespace(e?.namespace);
            const r = pa.getAccountData(e?.namespace)?.caipAddress;
            pa.state.noAdapters && !r
              ? Re.isMobile()
                ? it.reset('AllWallets')
                : it.reset('ConnectingWalletConnectBasic')
              : e?.view
                ? it.reset(e.view, e.data)
                : r
                  ? it.reset('Account')
                  : it.reset('Connect'),
              (ya.open = !0),
              kt.set({ open: !0 }),
              Je.sendEvent({ type: 'track', event: 'MODAL_OPEN', properties: { connected: !!r } });
          },
          close() {
            const e = Ve.state.enableEmbedded,
              t = !!pa.state.activeCaipAddress;
            ya.open &&
              Je.sendEvent({ type: 'track', event: 'MODAL_CLOSE', properties: { connected: t } }),
              (ya.open = !1),
              Ca.clearLoading(),
              e ? (t ? it.replace('Account') : it.push('Connect')) : kt.set({ open: !1 }),
              Ct.resetUri();
          },
          setLoading(e, t) {
            t && ya.loadingNamespaceMap.set(t, e), (ya.loading = e), kt.set({ loading: e });
          },
          clearLoading() {
            ya.loadingNamespaceMap.clear(), (ya.loading = !1);
          },
          shake() {
            ya.shake ||
              ((ya.shake = !0),
              setTimeout(() => {
                ya.shake = !1;
              }, 500));
          },
        },
        xa = {
          id: '2b92315d-eab7-5bef-84fa-089a131333f5',
          name: 'USD Coin',
          symbol: 'USDC',
          networks: [
            {
              name: 'ethereum-mainnet',
              display_name: 'Ethereum',
              chain_id: '1',
              contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            },
            {
              name: 'polygon-mainnet',
              display_name: 'Polygon',
              chain_id: '137',
              contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
            },
          ],
        };
      Ie({
        providers: [
          {
            label: 'Coinbase',
            name: 'coinbase',
            feeRange: '1-2%',
            url: '',
            supportedChains: ['eip155'],
          },
          {
            label: 'Meld.io',
            name: 'meld',
            feeRange: '1-2%',
            url: 'https://meldcrypto.com',
            supportedChains: ['eip155', 'solana'],
          },
        ],
        selectedProvider: null,
        error: null,
        purchaseCurrency: xa,
        paymentCurrency: {
          id: 'USD',
          payment_method_limits: [
            { id: 'card', min: '10.00', max: '7500.00' },
            { id: 'ach_bank_account', min: '10.00', max: '25000.00' },
          ],
        },
        purchaseCurrencies: [xa],
        paymentCurrencies: [],
        quotesLoading: !1,
      });
      Ie({
        initializing: !1,
        initialized: !1,
        loadingPrices: !1,
        loadingQuote: !1,
        loadingApprovalTransaction: !1,
        loadingBuildTransaction: !1,
        loadingTransaction: !1,
        fetchError: !1,
        approvalTransaction: void 0,
        swapTransaction: void 0,
        transactionError: void 0,
        sourceToken: void 0,
        sourceTokenAmount: '',
        sourceTokenPriceInUSD: 0,
        toToken: void 0,
        toTokenAmount: '',
        toTokenPriceInUSD: 0,
        networkPrice: '0',
        networkBalanceInUSD: '0',
        networkTokenSymbol: '',
        inputError: void 0,
        slippage: Oe.CONVERT_SLIPPAGE_TOLERANCE,
        tokens: void 0,
        popularTokens: void 0,
        suggestedTokens: void 0,
        foundTokens: void 0,
        myTokensWithBalance: void 0,
        tokensPriceMap: {},
        gasFee: '0',
        gasPriceInUSD: 0,
        priceImpact: void 0,
        maxSlippage: void 0,
        providerFee: void 0,
      });
      const ka = Ie({
          message: '',
          open: !1,
          triggerRect: { width: 0, height: 0, top: 0, left: 0 },
          variant: 'shade',
        }),
        Aa = {
          state: ka,
          subscribe: (e) => Ne(ka, () => e(ka)),
          subscribeKey: (e, t) => Pe(ka, e, t),
          showTooltip({ message: e, triggerRect: t, variant: r }) {
            (ka.open = !0), (ka.message = e), (ka.triggerRect = t), (ka.variant = r);
          },
          hide() {
            (ka.open = !1),
              (ka.message = ''),
              (ka.triggerRect = { width: 0, height: 0, top: 0, left: 0 });
          },
        },
        Ea = 2147483648,
        Ia = {
          convertEVMChainIdToCoinType(e) {
            if (e >= Ea) throw new Error('Invalid chainId');
            return (Ea | e) >>> 0;
          },
        },
        Na = Ie({ suggestions: [], loading: !1 }),
        Sa = {
          state: Na,
          subscribe: (e) => Ne(Na, () => e(Na)),
          subscribeKey: (e, t) => Pe(Na, e, t),
          async resolveName(e) {
            try {
              return await ma.lookupEnsName(e);
            } catch (t) {
              throw new Error(t?.reasons?.[0]?.description || 'Error resolving name');
            }
          },
          async isNameRegistered(e) {
            try {
              return await ma.lookupEnsName(e), !0;
            } catch {
              return !1;
            }
          },
          async getSuggestions(e) {
            try {
              (Na.loading = !0), (Na.suggestions = []);
              const t = await ma.getEnsNameSuggestions(e);
              return (
                (Na.suggestions = t.suggestions.map((e) => ({ ...e, name: e.name })) || []),
                Na.suggestions
              );
            } catch (t) {
              const e = this.parseEnsApiError(t, 'Error fetching name suggestions');
              throw new Error(e);
            } finally {
              Na.loading = !1;
            }
          },
          async getNamesForAddress(e) {
            try {
              if (!pa.state.activeCaipNetwork) return [];
              const t = $e.getEnsFromCacheForAddress(e);
              if (t) return t;
              const r = await ma.reverseLookupEnsName({ address: e });
              return $e.updateEnsCache({ address: e, ens: r, timestamp: Date.now() }), r;
            } catch (t) {
              const e = this.parseEnsApiError(t, 'Error fetching names for address');
              throw new Error(e);
            }
          },
          async registerName(e) {
            const t = pa.state.activeCaipNetwork;
            if (!t) throw new Error('Network not found');
            const r = ba.state.address,
              n = dt.getAuthConnector();
            if (!r || !n) throw new Error('Address or auth connector not found');
            Na.loading = !0;
            try {
              const n = JSON.stringify({
                name: e,
                attributes: {},
                timestamp: Math.floor(Date.now() / 1e3),
              });
              it.pushTransactionStack({
                view: 'RegisterAccountNameSuccess',
                goBack: !1,
                replace: !0,
                onCancel() {
                  Na.loading = !1;
                },
              });
              const o = await Ct.signMessage(n),
                i = t.id;
              if (!i) throw new Error('Network not found');
              const s = Ia.convertEVMChainIdToCoinType(Number(i));
              await ma.registerEnsName({ coinType: s, address: r, signature: o, message: n }),
                ba.setProfileName(e, t.chainNamespace),
                it.replace('RegisterAccountNameSuccess');
            } catch (o) {
              const t = this.parseEnsApiError(o, `Error registering name ${e}`);
              throw (it.replace('RegisterAccountName'), new Error(t));
            } finally {
              Na.loading = !1;
            }
          },
          validateName: (e) => /^[a-zA-Z0-9-]{4,}$/u.test(e),
          parseEnsApiError: (e, t) => e?.reasons?.[0]?.description || t,
        };
      Ie({ isLegalCheckboxChecked: !1 });
      const _a = 'MetaMask',
        Pa = 'Trust Wallet',
        Ta = 'Solflare',
        Oa = 'Phantom',
        $a = 'Coin98',
        Ra = 'Magic Eden',
        Ba = 'Backpack',
        La = 'Bitget Wallet',
        Ua = 'Frontier',
        Ma = 'Xverse Wallet',
        za = 'Leather',
        ja = 'eip155',
        Da = 'WALLET_CONNECT',
        Wa = 'INJECTED',
        Ha = 'ANNOUNCED',
        Fa = {
          ConnectorExplorerIds: {
            [Y.CONNECTOR_ID.COINBASE]:
              'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
            [Y.CONNECTOR_ID.COINBASE_SDK]:
              'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
            [Y.CONNECTOR_ID.SAFE]:
              '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
            [Y.CONNECTOR_ID.LEDGER]:
              '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
            [Y.CONNECTOR_ID.OKX]:
              '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
            [_a]: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
            [Pa]: '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
            [Ta]: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
            [Oa]: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
            [$a]: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
            [Ra]: '8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6',
            [Ba]: '2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0',
            [La]: '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
            [Ua]: '85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041',
            [Ma]: '2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b',
            [za]: '483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13',
          },
          NetworkImageIds: {
            1: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
            42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
            43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
            56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
            250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
            10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
            137: '41d04d42-da3b-4453-8506-668cc0727900',
            5e3: 'e86fae9b-b770-4eea-e520-150e12c81100',
            295: '6a97d510-cac8-4e58-c7ce-e8681b044c00',
            11155111: 'e909ea0a-f92a-4512-c8fc-748044ea6800',
            84532: 'a18a7ecd-e307-4360-4746-283182228e00',
            1301: '4eeea7ef-0014-4649-5d1d-07271a80f600',
            130: '2257980a-3463-48c6-cbac-a42d2a956e00',
            10143: '0a728e83-bacb-46db-7844-948f05434900',
            100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
            9001: 'f926ff41-260d-4028-635e-91913fc28e00',
            324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
            314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
            4689: '34e68754-e536-40da-c153-6ef2e7188a00',
            1088: '3897a66d-40b9-4833-162f-a2c90531c900',
            1284: '161038da-44ae-4ec7-1208-0ea569454b00',
            1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
            7777777: '845c60df-d429-4991-e687-91ae45791600',
            42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
            8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
            1313161554: '3ff73439-a619-4894-9262-4470c773a100',
            2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
            2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
            80094: 'e329c2c9-59b0-4a02-83e4-212ff3779900',
            2741: 'fc2427d1-5af9-4a9c-8da5-6f94627cd900',
            '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
            '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
            EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
            '000000000019d6689c085ae165831e93': '0b4838db-0161-4ffe-022d-532bf03dba00',
            '000000000933ea01ad0ee984209779ba': '39354064-d79b-420b-065d-f980c4b78200',
          },
          ConnectorImageIds: {
            [Y.CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
            [Y.CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
            [Y.CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
            [Y.CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
            [Y.CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
            [Y.CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00',
          },
          ConnectorNamesMap: {
            [Y.CONNECTOR_ID.INJECTED]: 'Browser Wallet',
            [Y.CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
            [Y.CONNECTOR_ID.COINBASE]: 'Coinbase',
            [Y.CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
            [Y.CONNECTOR_ID.LEDGER]: 'Ledger',
            [Y.CONNECTOR_ID.SAFE]: 'Safe',
          },
          ConnectorTypesMap: {
            [Y.CONNECTOR_ID.INJECTED]: 'INJECTED',
            [Y.CONNECTOR_ID.WALLET_CONNECT]: 'WALLET_CONNECT',
            [Y.CONNECTOR_ID.EIP6963]: 'ANNOUNCED',
            [Y.CONNECTOR_ID.AUTH]: 'AUTH',
          },
          WalletConnectRpcChainIds: [
            1, 5, 11155111, 10, 420, 42161, 421613, 137, 80001, 42220, 1313161554, 1313161555, 56,
            97, 43114, 43113, 100, 8453, 84531, 7777777, 999, 324, 280,
          ],
        },
        Va = {
          getCaipTokens(e) {
            if (!e) return;
            const t = {};
            return (
              Object.entries(e).forEach(([e, r]) => {
                t[`${ja}:${e}`] = r;
              }),
              t
            );
          },
          isLowerCaseMatch: (e, t) => e?.toLowerCase() === t?.toLowerCase(),
        },
        qa = {
          UniversalProviderErrors: {
            UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
              message: 'Unauthorized: origin not allowed',
              alertErrorKey: 'INVALID_APP_CONFIGURATION',
            },
            JWT_VALIDATION_ERROR: {
              message: 'JWT validation error: JWT Token is not yet valid',
              alertErrorKey: 'JWT_TOKEN_NOT_VALID',
            },
            INVALID_KEY: {
              message: 'Unauthorized: invalid key',
              alertErrorKey: 'INVALID_PROJECT_ID',
            },
          },
          ALERT_ERRORS: {
            SWITCH_NETWORK_NOT_FOUND: {
              shortMessage: 'Network Not Found',
              longMessage:
                "Network not found - please make sure it is included in 'networks' array in createAppKit function",
            },
            INVALID_APP_CONFIGURATION: {
              shortMessage: 'Invalid App Configuration',
              longMessage: () =>
                `Origin ${typeof window < 'u' ? window.origin : 'unknown'} not found on Allowlist - update configuration on cloud.reown.com`,
            },
            SOCIALS_TIMEOUT: {
              shortMessage: 'Invalid App Configuration',
              longMessage: () =>
                'There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com',
            },
            JWT_TOKEN_NOT_VALID: {
              shortMessage: 'Session Expired',
              longMessage:
                'Invalid session found on UniversalProvider - please check your time settings and connect again',
            },
            INVALID_PROJECT_ID: {
              shortMessage: 'Invalid App Configuration',
              longMessage: 'Invalid Project ID - update configuration',
            },
            PROJECT_ID_NOT_CONFIGURED: {
              shortMessage: 'Project ID Not Configured',
              longMessage: 'Project ID Not Configured - update configuration on cloud.reown.com',
            },
          },
        };
      function Za(e) {
        try {
          return JSON.stringify(e);
        } catch {
          return '"[Circular]"';
        }
      }
      var Ga = function (e, t, r) {
        var n = (r && r.stringify) || Za;
        if ('object' == typeof e && null !== e) {
          var o = t.length + 1;
          if (1 === o) return e;
          var i = new Array(o);
          i[0] = n(e);
          for (var s = 1; s < o; s++) i[s] = n(t[s]);
          return i.join(' ');
        }
        if ('string' != typeof e) return e;
        var a = t.length;
        if (0 === a) return e;
        for (var c = '', l = 0, d = -1, u = (e && e.length) || 0, h = 0; h < u; ) {
          if (37 === e.charCodeAt(h) && h + 1 < u) {
            switch (((d = d > -1 ? d : 0), e.charCodeAt(h + 1))) {
              case 100:
              case 102:
                if (l >= a || null == t[l]) break;
                d < h && (c += e.slice(d, h)), (c += Number(t[l])), (d = h + 2), h++;
                break;
              case 105:
                if (l >= a || null == t[l]) break;
                d < h && (c += e.slice(d, h)), (c += Math.floor(Number(t[l]))), (d = h + 2), h++;
                break;
              case 79:
              case 111:
              case 106:
                if (l >= a || void 0 === t[l]) break;
                d < h && (c += e.slice(d, h));
                var p = typeof t[l];
                if ('string' === p) {
                  (c += "'" + t[l] + "'"), (d = h + 2), h++;
                  break;
                }
                if ('function' === p) {
                  (c += t[l].name || '<anonymous>'), (d = h + 2), h++;
                  break;
                }
                (c += n(t[l])), (d = h + 2), h++;
                break;
              case 115:
                if (l >= a) break;
                d < h && (c += e.slice(d, h)), (c += String(t[l])), (d = h + 2), h++;
                break;
              case 37:
                d < h && (c += e.slice(d, h)), (c += '%'), (d = h + 2), h++, l--;
            }
            ++l;
          }
          ++h;
        }
        return -1 === d ? e : (d < u && (c += e.slice(d)), c);
      };
      const Ka = Ga;
      var Ya = Qa;
      const Xa =
          (function () {
            function e(e) {
              return typeof e < 'u' && e;
            }
            try {
              return (
                typeof globalThis < 'u' ||
                  Object.defineProperty(Object.prototype, 'globalThis', {
                    get: function () {
                      return delete Object.prototype.globalThis, (this.globalThis = this);
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {},
        Ja = {
          mapHttpRequest: ac,
          mapHttpResponse: ac,
          wrapRequestSerializer: cc,
          wrapResponseSerializer: cc,
          wrapErrorSerializer: cc,
          req: ac,
          res: ac,
          err: function (e) {
            const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
            for (const r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        };
      function Qa(e) {
        (e = e || {}).browser = e.browser || {};
        const t = e.browser.transmit;
        if (t && 'function' != typeof t.send)
          throw Error('pino: transmit option must have a send function');
        const r = e.browser.write || Xa;
        e.browser.write && (e.browser.asObject = !0);
        const n = e.serializers || {},
          o = (function (e, t) {
            return Array.isArray(e)
              ? e.filter(function (e) {
                  return '!stdSerializers.err' !== e;
                })
              : !0 === e && Object.keys(t);
          })(e.browser.serialize, n);
        let i = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
          (i = !1);
        'function' == typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === e.enabled && (e.level = 'silent');
        const s = e.level || 'info',
          a = Object.create(r);
        a.log || (a.log = lc),
          Object.defineProperty(a, 'levelVal', {
            get: function () {
              return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(a, 'level', {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
              (this._level = e),
                ec(c, a, 'error', 'log'),
                ec(c, a, 'fatal', 'error'),
                ec(c, a, 'warn', 'error'),
                ec(c, a, 'info', 'log'),
                ec(c, a, 'debug', 'log'),
                ec(c, a, 'trace', 'log');
            },
          });
        const c = {
          transmit: t,
          serialize: o,
          asObject: e.browser.asObject,
          levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
          timestamp: sc(e),
        };
        return (
          (a.levels = Qa.levels),
          (a.level = s),
          (a.setMaxListeners =
            a.getMaxListeners =
            a.emit =
            a.addListener =
            a.on =
            a.prependListener =
            a.once =
            a.prependOnceListener =
            a.removeListener =
            a.removeAllListeners =
            a.listeners =
            a.listenerCount =
            a.eventNames =
            a.write =
            a.flush =
              lc),
          (a.serializers = n),
          (a._serialize = o),
          (a._stdErrSerialize = i),
          (a.child = function (r, i) {
            if (!r) throw new Error('missing bindings for child Pino');
            (i = i || {}), o && r.serializers && (i.serializers = r.serializers);
            const s = i.serializers;
            if (o && s) {
              var a = Object.assign({}, n, s),
                c = !0 === e.browser.serialize ? Object.keys(a) : o;
              delete r.serializers, rc([r], c, a, this._stdErrSerialize);
            }
            function l(e) {
              (this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = nc(e, r, 'error')),
                (this.fatal = nc(e, r, 'fatal')),
                (this.warn = nc(e, r, 'warn')),
                (this.info = nc(e, r, 'info')),
                (this.debug = nc(e, r, 'debug')),
                (this.trace = nc(e, r, 'trace')),
                a && ((this.serializers = a), (this._serialize = c)),
                t && (this._logEvent = ic([].concat(e._logEvent.bindings, r)));
            }
            return (l.prototype = this), new l(this);
          }),
          t && (a._logEvent = ic()),
          a
        );
      }
      function ec(e, t, r, n) {
        const o = Object.getPrototypeOf(t);
        (t[r] = t.levelVal > t.levels.values[r] ? lc : o[r] ? o[r] : Xa[r] || Xa[n] || lc),
          (function (e, t, r) {
            (!e.transmit && t[r] === lc) ||
              (t[r] = (function (n) {
                return function () {
                  const o = e.timestamp(),
                    i = new Array(arguments.length),
                    s = Object.getPrototypeOf && Object.getPrototypeOf(this) === Xa ? Xa : this;
                  for (var a = 0; a < i.length; a++) i[a] = arguments[a];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      rc(i, this._serialize, this.serializers, this._stdErrSerialize),
                    e.asObject ? n.call(s, tc(this, r, i, o)) : n.apply(s, i),
                    e.transmit)
                  ) {
                    const n = e.transmit.level || t.level,
                      s = Qa.levels.values[n],
                      a = Qa.levels.values[r];
                    if (a < s) return;
                    oc(
                      this,
                      {
                        ts: o,
                        methodLevel: r,
                        methodValue: a,
                        transmitLevel: n,
                        transmitValue: Qa.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      i
                    );
                  }
                };
              })(t[r]));
          })(e, t, r);
      }
      function tc(e, t, r, n) {
        e._serialize && rc(r, e._serialize, e.serializers, e._stdErrSerialize);
        const o = r.slice();
        let i = o[0];
        const s = {};
        n && (s.time = n), (s.level = Qa.levels.values[t]);
        let a = 1 + (0 | e._childLevel);
        if ((a < 1 && (a = 1), null !== i && 'object' == typeof i)) {
          for (; a-- && 'object' == typeof o[0]; ) Object.assign(s, o.shift());
          i = o.length ? Ka(o.shift(), o) : void 0;
        } else 'string' == typeof i && (i = Ka(o.shift(), o));
        return void 0 !== i && (s.msg = i), s;
      }
      function rc(e, t, r, n) {
        for (const o in e)
          if (n && e[o] instanceof Error) e[o] = Qa.stdSerializers.err(e[o]);
          else if ('object' == typeof e[o] && !Array.isArray(e[o]))
            for (const n in e[o]) t && t.indexOf(n) > -1 && n in r && (e[o][n] = r[n](e[o][n]));
      }
      function nc(e, t, r) {
        return function () {
          const n = new Array(1 + arguments.length);
          n[0] = t;
          for (var o = 1; o < n.length; o++) n[o] = arguments[o - 1];
          return e[r].apply(this, n);
        };
      }
      function oc(e, t, r) {
        const n = t.send,
          o = t.ts,
          i = t.methodLevel,
          s = t.methodValue,
          a = t.val,
          c = e._logEvent.bindings;
        rc(
          r,
          e._serialize || Object.keys(e.serializers),
          e.serializers,
          void 0 === e._stdErrSerialize || e._stdErrSerialize
        ),
          (e._logEvent.ts = o),
          (e._logEvent.messages = r.filter(function (e) {
            return -1 === c.indexOf(e);
          })),
          (e._logEvent.level.label = i),
          (e._logEvent.level.value = s),
          n(i, e._logEvent, a),
          (e._logEvent = ic(c));
      }
      function ic(e) {
        return { ts: 0, messages: [], bindings: e || [], level: { label: '', value: 0 } };
      }
      function sc(e) {
        return 'function' == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? dc : uc;
      }
      function ac() {
        return {};
      }
      function cc(e) {
        return e;
      }
      function lc() {}
      function dc() {
        return !1;
      }
      function uc() {
        return Date.now();
      }
      (Qa.levels = {
        values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
        labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' },
      }),
        (Qa.stdSerializers = Ja),
        (Qa.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: dc,
            epochTime: uc,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
      function hc(e) {
        return 'string' == typeof e
          ? e
          : ((e) => JSON.stringify(e, (e, t) => ('bigint' == typeof t ? t.toString() + 'n' : t)))(
              e
            ) || '';
      }
      const pc = 'info',
        gc = 1024e3;
      class fc {
        constructor(e) {
          (this.nodeValue = e),
            (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      }
      class wc {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          const t = new fc(e);
          if (t.size > this.maxSizeInBytes)
            throw new Error(
              `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
            );
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head
            ? (this.tail && (this.tail.next = t), (this.tail = t))
            : ((this.head = t), (this.tail = t)),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          const e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          const e = [];
          let t = this.head;
          for (; null !== t; ) e.push(t.value), (t = t.next);
          return e;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let e = this.head;
          return {
            next: () => {
              if (!e) return { done: !0, value: null };
              const t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class mc {
        constructor(e, t = gc) {
          (this.level = e ?? 'error'),
            (this.levelValue = Ya.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new wc(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === Ya.levels.values.error
            ? console.error(e)
            : t === Ya.levels.values.warn
              ? console.warn(e)
              : t === Ya.levels.values.debug
                ? console.debug(e)
                : t === Ya.levels.values.trace
                  ? console.trace(e)
                  : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append(hc({ timestamp: new Date().toISOString(), log: e }));
          const t = 'string' == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new wc(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          const t = this.getLogArray();
          return t.push(hc({ extraMetadata: e })), new Blob(t, { type: 'application/json' });
        }
      }
      class vc {
        constructor(e, t = gc) {
          this.baseChunkLogger = new mc(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
        downloadLogsBlobInBrowser(e) {
          const t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement('a');
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class bc {
        constructor(e, t = gc) {
          this.baseChunkLogger = new mc(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
      }
      var yc = Object.defineProperty,
        Cc = Object.defineProperties,
        xc = Object.getOwnPropertyDescriptors,
        kc = Object.getOwnPropertySymbols,
        Ac = Object.prototype.hasOwnProperty,
        Ec = Object.prototype.propertyIsEnumerable,
        Ic = (e, t, r) =>
          t in e
            ? yc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Nc = (e, t) => {
          for (var r in t || (t = {})) Ac.call(t, r) && Ic(e, r, t[r]);
          if (kc) for (var r of kc(t)) Ec.call(t, r) && Ic(e, r, t[r]);
          return e;
        },
        Sc = (e, t) => Cc(e, xc(t));
      function _c(e) {
        return typeof e.loggerOverride < 'u' && 'string' != typeof e.loggerOverride
          ? { logger: e.loggerOverride, chunkLoggerController: null }
          : typeof window < 'u'
            ? (function (e) {
                var t, r;
                const n = new vc(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: Ya(
                    Sc(Nc({}, e.opts), {
                      level: 'trace',
                      browser: Sc(Nc({}, null == (r = e.opts) ? void 0 : r.browser), {
                        write: (e) => n.write(e),
                      }),
                    })
                  ),
                  chunkLoggerController: n,
                };
              })(e)
            : (function (e) {
                var t;
                const r = new bc(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: Ya(Sc(Nc({}, e.opts), { level: 'trace' })),
                  chunkLoggerController: r,
                };
              })(e);
      }
      const Pc = {
        createLogger(e, t = 'error') {
          const r = (function (e) {
              return Sc(Nc({}, e), { level: e?.level || pc });
            })({ level: t }),
            { logger: n } = _c({ opts: r });
          return (
            (n.error = (...t) => {
              for (const r of t) if (r instanceof Error) return void e(r, ...t);
              e(void 0, ...t);
            }),
            n
          );
        },
      };
      function Tc(e, t) {
        const r = new URL('https://rpc.walletconnect.org/v1/');
        return r.searchParams.set('chainId', e), r.searchParams.set('projectId', t), r.toString();
      }
      const Oc = [
          'near:mainnet',
          'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
          'eip155:1101',
          'eip155:56',
          'eip155:42161',
          'eip155:7777777',
          'eip155:59144',
          'eip155:324',
          'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
          'eip155:5000',
          'solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz',
          'eip155:80084',
          'eip155:5003',
          'eip155:100',
          'eip155:8453',
          'eip155:42220',
          'eip155:1313161555',
          'eip155:17000',
          'eip155:1',
          'eip155:300',
          'eip155:1313161554',
          'eip155:1329',
          'eip155:84532',
          'eip155:421614',
          'eip155:11155111',
          'eip155:8217',
          'eip155:43114',
          'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
          'eip155:999999999',
          'eip155:11155420',
          'eip155:80002',
          'eip155:97',
          'eip155:43113',
          'eip155:137',
          'eip155:10',
          'eip155:1301',
          'bip122:000000000019d6689c085ae165831e93',
          'bip122:000000000933ea01ad0ee984209779ba',
        ],
        $c = {
          extendRpcUrlWithProjectId(e, t) {
            let r = !1;
            try {
              r = 'rpc.walletconnect.org' === new URL(e).host;
            } catch {
              r = !1;
            }
            if (r) {
              const r = new URL(e);
              return (
                r.searchParams.has('projectId') || r.searchParams.set('projectId', t), r.toString()
              );
            }
            return e;
          },
          isCaipNetwork: (e) => 'chainNamespace' in e && 'caipNetworkId' in e,
          getChainNamespace(e) {
            return this.isCaipNetwork(e) ? e.chainNamespace : Y.CHAIN.EVM;
          },
          getCaipNetworkId(e) {
            return this.isCaipNetwork(e) ? e.caipNetworkId : `${Y.CHAIN.EVM}:${e.id}`;
          },
          getDefaultRpcUrl(e, t, r) {
            const n = e.rpcUrls?.default?.http?.[0];
            return Oc.includes(t) ? Tc(t, r) : n || '';
          },
          extendCaipNetwork(e, { customNetworkImageUrls: t, projectId: r, customRpcUrls: n }) {
            const o = this.getChainNamespace(e),
              i = this.getCaipNetworkId(e),
              s = e.rpcUrls.default.http?.[0],
              a = this.getDefaultRpcUrl(e, i, r),
              c = e?.rpcUrls?.chainDefault?.http?.[0] || s,
              l = n?.[i]?.map((e) => e.url) || [],
              d = [...l, a],
              u = [...l];
            return (
              c && !u.includes(c) && u.push(c),
              {
                ...e,
                chainNamespace: o,
                caipNetworkId: i,
                assets: { imageId: Fa.NetworkImageIds[e.id], imageUrl: t?.[e.id] },
                rpcUrls: { ...e.rpcUrls, default: { http: d }, chainDefault: { http: u } },
              }
            );
          },
          extendCaipNetworks: (e, { customNetworkImageUrls: t, projectId: r, customRpcUrls: n }) =>
            e.map((e) =>
              $c.extendCaipNetwork(e, { customNetworkImageUrls: t, customRpcUrls: n, projectId: r })
            ),
          getViemTransport(e, t, r) {
            const n = [];
            return (
              r?.forEach((e) => {
                n.push(Oo(e.url, e.config));
              }),
              Oc.includes(e.caipNetworkId) &&
                n.push(
                  Oo(Tc(e.caipNetworkId, t), {
                    fetchOptions: { headers: { 'Content-Type': 'text/plain' } },
                  })
                ),
              e?.rpcUrls?.default?.http?.forEach((e) => {
                n.push(Oo(e));
              }),
              No(n)
            );
          },
          extendWagmiTransports(e, t, r) {
            if (Oc.includes(e.caipNetworkId)) {
              return No([r, Oo(this.getDefaultRpcUrl(e, e.caipNetworkId, t))]);
            }
            return r;
          },
          getUnsupportedNetwork: (e) => ({
            id: e.split(':')[1],
            caipNetworkId: e,
            name: Y.UNSUPPORTED_NETWORK_NAME,
            chainNamespace: e.split(':')[0],
            nativeCurrency: { name: '', decimals: 0, symbol: '' },
            rpcUrls: { default: { http: [] } },
          }),
          getCaipNetworkFromStorage(e) {
            const t = $e.getActiveCaipNetworkId(),
              r = pa.getAllRequestedCaipNetworks(),
              n = Array.from(pa.state.chains?.keys() || []),
              o = t?.split(':')[0],
              i = !!o && n.includes(o),
              s = r?.find((e) => e.caipNetworkId === t);
            return i && !s && t ? this.getUnsupportedNetwork(t) : s || e || r?.[0];
          },
        },
        Rc = { eip155: void 0, solana: void 0, polkadot: void 0, bip122: void 0 },
        Bc = Ie({ providers: { ...Rc }, providerIds: { ...Rc } }),
        Lc = {
          state: Bc,
          subscribeKey: (e, t) => Pe(Bc, e, t),
          subscribe: (e) =>
            Ne(Bc, () => {
              e(Bc);
            }),
          subscribeProviders: (e) => Ne(Bc.providers, () => e(Bc.providers)),
          setProvider(e, t) {
            t && (Bc.providers[e] = _e(t));
          },
          getProvider: (e) => Bc.providers[e],
          setProviderId(e, t) {
            t && (Bc.providerIds[e] = t);
          },
          getProviderId(e) {
            if (e) return Bc.providerIds[e];
          },
          reset() {
            (Bc.providers = { ...Rc }), (Bc.providerIds = { ...Rc });
          },
          resetChain(e) {
            (Bc.providers[e] = void 0), (Bc.providerIds[e] = void 0);
          },
        };
      var Uc;
      !(function (e) {
        (e.Google = 'google'),
          (e.Github = 'github'),
          (e.Apple = 'apple'),
          (e.Facebook = 'facebook'),
          (e.X = 'x'),
          (e.Discord = 'discord'),
          (e.Farcaster = 'farcaster');
      })(Uc || (Uc = {}));
      const Mc = {
          ACCOUNT_TABS: [{ label: 'Tokens' }, { label: 'NFTs' }, { label: 'Activity' }],
          SECURE_SITE_ORIGIN:
            (typeof s < 'u' && typeof s.env < 'u'
              ? s.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
              : void 0) || 'https://secure.walletconnect.org',
          VIEW_DIRECTION: { Next: 'next', Prev: 'prev' },
          DEFAULT_CONNECT_METHOD_ORDER: ['email', 'social', 'wallet'],
          ANIMATION_DURATIONS: { HeaderText: 120, ModalHeight: 150, ViewTransition: 150 },
        },
        zc = {
          filterOutDuplicatesByRDNS(e) {
            const t = Ve.state.enableEIP6963 ? dt.state.connectors : [],
              r = $e.getRecentWallets(),
              n = t.map((e) => e.info?.rdns).filter(Boolean),
              o = r.map((e) => e.rdns).filter(Boolean),
              i = n.concat(o);
            if (i.includes('io.metamask.mobile') && Re.isMobile()) {
              const e = i.indexOf('io.metamask.mobile');
              i[e] = 'io.metamask';
            }
            return e.filter((e) => !i.includes(String(e?.rdns)));
          },
          filterOutDuplicatesByIds(e) {
            const t = dt.state.connectors.filter(
                (e) => 'ANNOUNCED' === e.type || 'INJECTED' === e.type
              ),
              r = $e.getRecentWallets(),
              n = t.map((e) => e.explorerId),
              o = r.map((e) => e.id),
              i = n.concat(o);
            return e.filter((e) => !i.includes(e?.id));
          },
          filterOutDuplicateWallets(e) {
            const t = this.filterOutDuplicatesByRDNS(e);
            return this.filterOutDuplicatesByIds(t);
          },
          markWalletsAsInstalled(e) {
            const { connectors: t } = dt.state,
              r = t
                .filter((e) => 'ANNOUNCED' === e.type)
                .reduce((e, t) => (t.info?.rdns && (e[t.info.rdns] = !0), e), {});
            return e
              .map((e) => ({ ...e, installed: !!e.rdns && !!r[e.rdns ?? ''] }))
              .sort((e, t) => Number(t.installed) - Number(e.installed));
          },
          getConnectOrderMethod(e, t) {
            const r = e?.connectMethodsOrder || Ve.state.features?.connectMethodsOrder,
              n = t || dt.state.connectors;
            if (r) return r;
            const { injected: o, announced: i } = jc.getConnectorsByType(
                n,
                nt.state.recommended,
                nt.state.featured
              ),
              s = o.filter(jc.showConnector),
              a = i.filter(jc.showConnector);
            return s.length || a.length
              ? ['wallet', 'email', 'social']
              : Mc.DEFAULT_CONNECT_METHOD_ORDER;
          },
          isExcluded(e) {
            const t = !!e.rdns && nt.state.excludedWallets.some((t) => t.rdns === e.rdns),
              r =
                !!e.name &&
                nt.state.excludedWallets.some((t) => Va.isLowerCaseMatch(t.name, e.name));
            return t || r;
          },
        },
        jc = {
          getConnectorsByType(e, t, r) {
            const { customWallets: n } = Ve.state,
              o = $e.getRecentWallets(),
              i = zc.filterOutDuplicateWallets(t),
              s = zc.filterOutDuplicateWallets(r),
              a = e.filter((e) => 'MULTI_CHAIN' === e.type),
              c = e.filter((e) => 'ANNOUNCED' === e.type),
              l = e.filter((e) => 'INJECTED' === e.type);
            return {
              custom: n,
              recent: o,
              external: e.filter((e) => 'EXTERNAL' === e.type),
              multiChain: a,
              announced: c,
              injected: l,
              recommended: i,
              featured: s,
            };
          },
          showConnector(e) {
            const t = e.info?.rdns,
              r = !!t && nt.state.excludedWallets.some((e) => !!e.rdns && e.rdns === t),
              n =
                !!e.name &&
                nt.state.excludedWallets.some((t) => Va.isLowerCaseMatch(t.name, e.name));
            return !(
              ('INJECTED' === e.type &&
                ((!Re.isMobile() && 'Browser Wallet' === e.name) ||
                  (!t && !Ct.checkInstalled()) ||
                  r ||
                  n)) ||
              (('ANNOUNCED' === e.type || 'EXTERNAL' === e.type) && (r || n))
            );
          },
          getIsConnectedWithWC: () =>
            Array.from(pa.state.chains.values()).some(
              (e) => dt.getConnectorId(e.namespace) === Y.CONNECTOR_ID.WALLET_CONNECT
            ),
          getConnectorTypeOrder({
            recommended: e,
            featured: t,
            custom: r,
            recent: n,
            announced: o,
            injected: i,
            multiChain: s,
            external: a,
            overriddenConnectors: c = Ve.state.features?.connectorTypeOrder ?? [],
          }) {
            const l = jc.getIsConnectedWithWC(),
              d = [
                { type: 'walletConnect', isEnabled: Ve.state.enableWalletConnect && !l },
                { type: 'recent', isEnabled: n.length > 0 },
                { type: 'injected', isEnabled: [...i, ...o, ...s].length > 0 },
                { type: 'featured', isEnabled: t.length > 0 },
                { type: 'custom', isEnabled: r && r.length > 0 },
                { type: 'external', isEnabled: a.length > 0 },
                { type: 'recommended', isEnabled: e.length > 0 },
              ].filter((e) => e.isEnabled),
              u = new Set(d.map((e) => e.type)),
              h = c.filter((e) => u.has(e)).map((e) => ({ type: e, isEnabled: !0 })),
              p = d.filter(({ type: e }) => !h.some(({ type: t }) => t === e));
            return Array.from(new Set([...h, ...p].map(({ type: e }) => e)));
          },
        },
        Dc = globalThis,
        Wc =
          Dc.ShadowRoot &&
          (void 0 === Dc.ShadyCSS || Dc.ShadyCSS.nativeShadow) &&
          'adoptedStyleSheets' in Document.prototype &&
          'replace' in CSSStyleSheet.prototype,
        Hc = Symbol(),
        Fc = new WeakMap();
      class Vc {
        constructor(e, t, r) {
          if (((this._$cssResult$ = !0), r !== Hc))
            throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
          (this.cssText = e), (this.t = t);
        }
        get styleSheet() {
          let e = this.o;
          const t = this.t;
          if (Wc && void 0 === e) {
            const r = void 0 !== t && 1 === t.length;
            r && (e = Fc.get(t)),
              void 0 === e &&
                ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Fc.set(t, e));
          }
          return e;
        }
        toString() {
          return this.cssText;
        }
      }
      const qc = (e) => new Vc('string' == typeof e ? e : e + '', void 0, Hc),
        Zc = (e, ...t) => {
          const r =
            1 === e.length
              ? e[0]
              : t.reduce(
                  (t, r, n) =>
                    t +
                    ((e) => {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ('number' == typeof e) return e;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          e +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(r) +
                    e[n + 1],
                  e[0]
                );
          return new Vc(r, e, Hc);
        },
        Gc = Wc
          ? (e) => e
          : (e) =>
              e instanceof CSSStyleSheet
                ? ((e) => {
                    let t = '';
                    for (const r of e.cssRules) t += r.cssText;
                    return qc(t);
                  })(e)
                : e,
        {
          is: Kc,
          defineProperty: Yc,
          getOwnPropertyDescriptor: Xc,
          getOwnPropertyNames: Jc,
          getOwnPropertySymbols: Qc,
          getPrototypeOf: el,
        } = Object,
        tl = globalThis,
        rl = tl.trustedTypes,
        nl = rl ? rl.emptyScript : '',
        ol = tl.reactiveElementPolyfillSupport,
        il = (e, t) => e,
        sl = {
          toAttribute(e, t) {
            switch (t) {
              case Boolean:
                e = e ? nl : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute(e, t) {
            let r = e;
            switch (t) {
              case Boolean:
                r = null !== e;
                break;
              case Number:
                r = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  r = JSON.parse(e);
                } catch {
                  r = null;
                }
            }
            return r;
          },
        },
        al = (e, t) => !Kc(e, t),
        cl = {
          attribute: !0,
          type: String,
          converter: sl,
          reflect: !1,
          useDefault: !1,
          hasChanged: al,
        };
      (Symbol.metadata ??= Symbol('metadata')), (tl.litPropertyMetadata ??= new WeakMap());
      class ll extends HTMLElement {
        static addInitializer(e) {
          this._$Ei(), (this.l ??= []).push(e);
        }
        static get observedAttributes() {
          return this.finalize(), this._$Eh && [...this._$Eh.keys()];
        }
        static createProperty(e, t = cl) {
          if (
            (t.state && (t.attribute = !1),
            this._$Ei(),
            this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0),
            this.elementProperties.set(e, t),
            !t.noAccessor)
          ) {
            const r = Symbol(),
              n = this.getPropertyDescriptor(e, r, t);
            void 0 !== n && Yc(this.prototype, e, n);
          }
        }
        static getPropertyDescriptor(e, t, r) {
          const { get: n, set: o } = Xc(this.prototype, e) ?? {
            get() {
              return this[t];
            },
            set(e) {
              this[t] = e;
            },
          };
          return {
            get: n,
            set(t) {
              const i = n?.call(this);
              o?.call(this, t), this.requestUpdate(e, i, r);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(e) {
          return this.elementProperties.get(e) ?? cl;
        }
        static _$Ei() {
          if (this.hasOwnProperty(il('elementProperties'))) return;
          const e = el(this);
          e.finalize(),
            void 0 !== e.l && (this.l = [...e.l]),
            (this.elementProperties = new Map(e.elementProperties));
        }
        static finalize() {
          if (this.hasOwnProperty(il('finalized'))) return;
          if (((this.finalized = !0), this._$Ei(), this.hasOwnProperty(il('properties')))) {
            const e = this.properties,
              t = [...Jc(e), ...Qc(e)];
            for (const r of t) this.createProperty(r, e[r]);
          }
          const e = this[Symbol.metadata];
          if (null !== e) {
            const t = litPropertyMetadata.get(e);
            if (void 0 !== t) for (const [e, r] of t) this.elementProperties.set(e, r);
          }
          this._$Eh = new Map();
          for (const [t, r] of this.elementProperties) {
            const e = this._$Eu(t, r);
            void 0 !== e && this._$Eh.set(e, t);
          }
          this.elementStyles = this.finalizeStyles(this.styles);
        }
        static finalizeStyles(e) {
          const t = [];
          if (Array.isArray(e)) {
            const r = new Set(e.flat(1 / 0).reverse());
            for (const e of r) t.unshift(Gc(e));
          } else void 0 !== e && t.push(Gc(e));
          return t;
        }
        static _$Eu(e, t) {
          const r = t.attribute;
          return !1 === r
            ? void 0
            : 'string' == typeof r
              ? r
              : 'string' == typeof e
                ? e.toLowerCase()
                : void 0;
        }
        constructor() {
          super(),
            (this._$Ep = void 0),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$Em = null),
            this._$Ev();
        }
        _$Ev() {
          (this._$ES = new Promise((e) => (this.enableUpdating = e))),
            (this._$AL = new Map()),
            this._$E_(),
            this.requestUpdate(),
            this.constructor.l?.forEach((e) => e(this));
        }
        addController(e) {
          (this._$EO ??= new Set()).add(e),
            void 0 !== this.renderRoot && this.isConnected && e.hostConnected?.();
        }
        removeController(e) {
          this._$EO?.delete(e);
        }
        _$E_() {
          const e = new Map(),
            t = this.constructor.elementProperties;
          for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
          e.size > 0 && (this._$Ep = e);
        }
        createRenderRoot() {
          const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
          return (
            ((e, t) => {
              if (Wc)
                e.adoptedStyleSheets = t.map((e) =>
                  e instanceof CSSStyleSheet ? e : e.styleSheet
                );
              else
                for (const r of t) {
                  const t = document.createElement('style'),
                    n = Dc.litNonce;
                  void 0 !== n && t.setAttribute('nonce', n),
                    (t.textContent = r.cssText),
                    e.appendChild(t);
                }
            })(e, this.constructor.elementStyles),
            e
          );
        }
        connectedCallback() {
          (this.renderRoot ??= this.createRenderRoot()),
            this.enableUpdating(!0),
            this._$EO?.forEach((e) => e.hostConnected?.());
        }
        enableUpdating(e) {}
        disconnectedCallback() {
          this._$EO?.forEach((e) => e.hostDisconnected?.());
        }
        attributeChangedCallback(e, t, r) {
          this._$AK(e, r);
        }
        _$ET(e, t) {
          const r = this.constructor.elementProperties.get(e),
            n = this.constructor._$Eu(e, r);
          if (void 0 !== n && !0 === r.reflect) {
            const o = (void 0 !== r.converter?.toAttribute ? r.converter : sl).toAttribute(
              t,
              r.type
            );
            (this._$Em = e),
              null == o ? this.removeAttribute(n) : this.setAttribute(n, o),
              (this._$Em = null);
          }
        }
        _$AK(e, t) {
          const r = this.constructor,
            n = r._$Eh.get(e);
          if (void 0 !== n && this._$Em !== n) {
            const e = r.getPropertyOptions(n),
              o =
                'function' == typeof e.converter
                  ? { fromAttribute: e.converter }
                  : void 0 !== e.converter?.fromAttribute
                    ? e.converter
                    : sl;
            (this._$Em = n),
              (this[n] = o.fromAttribute(t, e.type) ?? this._$Ej?.get(n) ?? null),
              (this._$Em = null);
          }
        }
        requestUpdate(e, t, r) {
          if (void 0 !== e) {
            const n = this.constructor,
              o = this[e];
            if (
              ((r ??= n.getPropertyOptions(e)),
              !(
                (r.hasChanged ?? al)(o, t) ||
                (r.useDefault &&
                  r.reflect &&
                  o === this._$Ej?.get(e) &&
                  !this.hasAttribute(n._$Eu(e, r)))
              ))
            )
              return;
            this.C(e, t, r);
          }
          !1 === this.isUpdatePending && (this._$ES = this._$EP());
        }
        C(e, t, { useDefault: r, reflect: n, wrapped: o }, i) {
          (r &&
            !(this._$Ej ??= new Map()).has(e) &&
            (this._$Ej.set(e, i ?? t ?? this[e]), !0 !== o || void 0 !== i)) ||
            (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)),
            !0 === n && this._$Em !== e && (this._$Eq ??= new Set()).add(e));
        }
        async _$EP() {
          this.isUpdatePending = !0;
          try {
            await this._$ES;
          } catch (t) {
            Promise.reject(t);
          }
          const e = this.scheduleUpdate();
          return null != e && (await e), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          if (!this.isUpdatePending) return;
          if (!this.hasUpdated) {
            if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
              for (const [e, t] of this._$Ep) this[e] = t;
              this._$Ep = void 0;
            }
            const e = this.constructor.elementProperties;
            if (e.size > 0)
              for (const [t, r] of e) {
                const { wrapped: e } = r,
                  n = this[t];
                !0 !== e || this._$AL.has(t) || void 0 === n || this.C(t, void 0, r, n);
              }
          }
          let e = !1;
          const t = this._$AL;
          try {
            (e = this.shouldUpdate(t)),
              e
                ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t))
                : this._$EM();
          } catch (r) {
            throw ((e = !1), this._$EM(), r);
          }
          e && this._$AE(t);
        }
        willUpdate(e) {}
        _$AE(e) {
          this._$EO?.forEach((e) => e.hostUpdated?.()),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
            this.updated(e);
        }
        _$EM() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$ES;
        }
        shouldUpdate(e) {
          return !0;
        }
        update(e) {
          (this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
        }
        updated(e) {}
        firstUpdated(e) {}
      }
      (ll.elementStyles = []),
        (ll.shadowRootOptions = { mode: 'open' }),
        (ll[il('elementProperties')] = new Map()),
        (ll[il('finalized')] = new Map()),
        ol?.({ ReactiveElement: ll }),
        (tl.reactiveElementVersions ??= []).push('2.1.0');
      const dl = globalThis,
        ul = dl.trustedTypes,
        hl = ul ? ul.createPolicy('lit-html', { createHTML: (e) => e }) : void 0,
        pl = '$lit$',
        gl = `lit$${Math.random().toFixed(9).slice(2)}$`,
        fl = '?' + gl,
        wl = `<${fl}>`,
        ml = document,
        vl = () => ml.createComment(''),
        bl = (e) => null === e || ('object' != typeof e && 'function' != typeof e),
        yl = Array.isArray,
        Cl = '[ \t\n\f\r]',
        xl = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        kl = /-->/g,
        Al = />/g,
        El = RegExp(
          `>|${Cl}(?:([^\\s"'>=/]+)(${Cl}*=${Cl}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
          'g'
        ),
        Il = /'/g,
        Nl = /"/g,
        Sl = /^(?:script|style|textarea|title)$/i,
        _l =
          (e) =>
          (t, ...r) => ({ _$litType$: e, strings: t, values: r }),
        Pl = _l(1),
        Tl = _l(2),
        Ol = Symbol.for('lit-noChange'),
        $l = Symbol.for('lit-nothing'),
        Rl = new WeakMap(),
        Bl = ml.createTreeWalker(ml, 129);
      function Ll(e, t) {
        if (!yl(e) || !e.hasOwnProperty('raw')) throw Error('invalid template strings array');
        return void 0 !== hl ? hl.createHTML(t) : t;
      }
      class Ul {
        constructor({ strings: e, _$litType$: t }, r) {
          let n;
          this.parts = [];
          let o = 0,
            i = 0;
          const s = e.length - 1,
            a = this.parts,
            [c, l] = ((e, t) => {
              const r = e.length - 1,
                n = [];
              let o,
                i = 2 === t ? '<svg>' : 3 === t ? '<math>' : '',
                s = xl;
              for (let a = 0; a < r; a++) {
                const t = e[a];
                let r,
                  c,
                  l = -1,
                  d = 0;
                for (; d < t.length && ((s.lastIndex = d), (c = s.exec(t)), null !== c); )
                  (d = s.lastIndex),
                    s === xl
                      ? '!--' === c[1]
                        ? (s = kl)
                        : void 0 !== c[1]
                          ? (s = Al)
                          : void 0 !== c[2]
                            ? (Sl.test(c[2]) && (o = RegExp('</' + c[2], 'g')), (s = El))
                            : void 0 !== c[3] && (s = El)
                      : s === El
                        ? '>' === c[0]
                          ? ((s = o ?? xl), (l = -1))
                          : void 0 === c[1]
                            ? (l = -2)
                            : ((l = s.lastIndex - c[2].length),
                              (r = c[1]),
                              (s = void 0 === c[3] ? El : '"' === c[3] ? Nl : Il))
                        : s === Nl || s === Il
                          ? (s = El)
                          : s === kl || s === Al
                            ? (s = xl)
                            : ((s = El), (o = void 0));
                const u = s === El && e[a + 1].startsWith('/>') ? ' ' : '';
                i +=
                  s === xl
                    ? t + wl
                    : l >= 0
                      ? (n.push(r), t.slice(0, l) + pl + t.slice(l) + gl + u)
                      : t + gl + (-2 === l ? a : u);
              }
              return [
                Ll(e, i + (e[r] || '<?>') + (2 === t ? '</svg>' : 3 === t ? '</math>' : '')),
                n,
              ];
            })(e, t);
          if (
            ((this.el = Ul.createElement(c, r)),
            (Bl.currentNode = this.el.content),
            2 === t || 3 === t)
          ) {
            const e = this.el.content.firstChild;
            e.replaceWith(...e.childNodes);
          }
          for (; null !== (n = Bl.nextNode()) && a.length < s; ) {
            if (1 === n.nodeType) {
              if (n.hasAttributes())
                for (const e of n.getAttributeNames())
                  if (e.endsWith(pl)) {
                    const t = l[i++],
                      r = n.getAttribute(e).split(gl),
                      s = /([.?@])?(.*)/.exec(t);
                    a.push({
                      type: 1,
                      index: o,
                      name: s[2],
                      strings: r,
                      ctor: '.' === s[1] ? Wl : '?' === s[1] ? Hl : '@' === s[1] ? Fl : Dl,
                    }),
                      n.removeAttribute(e);
                  } else e.startsWith(gl) && (a.push({ type: 6, index: o }), n.removeAttribute(e));
              if (Sl.test(n.tagName)) {
                const e = n.textContent.split(gl),
                  t = e.length - 1;
                if (t > 0) {
                  n.textContent = ul ? ul.emptyScript : '';
                  for (let r = 0; r < t; r++)
                    n.append(e[r], vl()), Bl.nextNode(), a.push({ type: 2, index: ++o });
                  n.append(e[t], vl());
                }
              }
            } else if (8 === n.nodeType)
              if (n.data === fl) a.push({ type: 2, index: o });
              else {
                let e = -1;
                for (; -1 !== (e = n.data.indexOf(gl, e + 1)); )
                  a.push({ type: 7, index: o }), (e += gl.length - 1);
              }
            o++;
          }
        }
        static createElement(e, t) {
          const r = ml.createElement('template');
          return (r.innerHTML = e), r;
        }
      }
      function Ml(e, t, r = e, n) {
        if (t === Ol) return t;
        let o = void 0 !== n ? r._$Co?.[n] : r._$Cl;
        const i = bl(t) ? void 0 : t._$litDirective$;
        return (
          o?.constructor !== i &&
            (o?._$AO?.(!1),
            void 0 === i ? (o = void 0) : ((o = new i(e)), o._$AT(e, r, n)),
            void 0 !== n ? ((r._$Co ??= [])[n] = o) : (r._$Cl = o)),
          void 0 !== o && (t = Ml(e, o._$AS(e, t.values), o, n)),
          t
        );
      }
      class zl {
        constructor(e, t) {
          (this._$AV = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(e) {
          const {
              el: { content: t },
              parts: r,
            } = this._$AD,
            n = (e?.creationScope ?? ml).importNode(t, !0);
          Bl.currentNode = n;
          let o = Bl.nextNode(),
            i = 0,
            s = 0,
            a = r[0];
          for (; void 0 !== a; ) {
            if (i === a.index) {
              let t;
              2 === a.type
                ? (t = new jl(o, o.nextSibling, this, e))
                : 1 === a.type
                  ? (t = new a.ctor(o, a.name, a.strings, this, e))
                  : 6 === a.type && (t = new Vl(o, this, e)),
                this._$AV.push(t),
                (a = r[++s]);
            }
            i !== a?.index && ((o = Bl.nextNode()), i++);
          }
          return (Bl.currentNode = ml), n;
        }
        p(e) {
          let t = 0;
          for (const r of this._$AV)
            void 0 !== r &&
              (void 0 !== r.strings
                ? (r._$AI(e, r, t), (t += r.strings.length - 2))
                : r._$AI(e[t])),
              t++;
        }
      }
      class jl {
        get _$AU() {
          return this._$AM?._$AU ?? this._$Cv;
        }
        constructor(e, t, r, n) {
          (this.type = 2),
            (this._$AH = $l),
            (this._$AN = void 0),
            (this._$AA = e),
            (this._$AB = t),
            (this._$AM = r),
            (this.options = n),
            (this._$Cv = n?.isConnected ?? !0);
        }
        get parentNode() {
          let e = this._$AA.parentNode;
          const t = this._$AM;
          return void 0 !== t && 11 === e?.nodeType && (e = t.parentNode), e;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(e, t = this) {
          (e = Ml(this, e, t)),
            bl(e)
              ? e === $l || null == e || '' === e
                ? (this._$AH !== $l && this._$AR(), (this._$AH = $l))
                : e !== this._$AH && e !== Ol && this._(e)
              : void 0 !== e._$litType$
                ? this.$(e)
                : void 0 !== e.nodeType
                  ? this.T(e)
                  : ((e) => yl(e) || 'function' == typeof e?.[Symbol.iterator])(e)
                    ? this.k(e)
                    : this._(e);
        }
        O(e) {
          return this._$AA.parentNode.insertBefore(e, this._$AB);
        }
        T(e) {
          this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
        }
        _(e) {
          this._$AH !== $l && bl(this._$AH)
            ? (this._$AA.nextSibling.data = e)
            : this.T(ml.createTextNode(e)),
            (this._$AH = e);
        }
        $(e) {
          const { values: t, _$litType$: r } = e,
            n =
              'number' == typeof r
                ? this._$AC(e)
                : (void 0 === r.el && (r.el = Ul.createElement(Ll(r.h, r.h[0]), this.options)), r);
          if (this._$AH?._$AD === n) this._$AH.p(t);
          else {
            const e = new zl(n, this),
              r = e.u(this.options);
            e.p(t), this.T(r), (this._$AH = e);
          }
        }
        _$AC(e) {
          let t = Rl.get(e.strings);
          return void 0 === t && Rl.set(e.strings, (t = new Ul(e))), t;
        }
        k(e) {
          yl(this._$AH) || ((this._$AH = []), this._$AR());
          const t = this._$AH;
          let r,
            n = 0;
          for (const o of e)
            n === t.length
              ? t.push((r = new jl(this.O(vl()), this.O(vl()), this, this.options)))
              : (r = t[n]),
              r._$AI(o),
              n++;
          n < t.length && (this._$AR(r && r._$AB.nextSibling, n), (t.length = n));
        }
        _$AR(e = this._$AA.nextSibling, t) {
          for (this._$AP?.(!1, !0, t); e && e !== this._$AB; ) {
            const t = e.nextSibling;
            e.remove(), (e = t);
          }
        }
        setConnected(e) {
          void 0 === this._$AM && ((this._$Cv = e), this._$AP?.(e));
        }
      }
      class Dl {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(e, t, r, n, o) {
          (this.type = 1),
            (this._$AH = $l),
            (this._$AN = void 0),
            (this.element = e),
            (this.name = t),
            (this._$AM = n),
            (this.options = o),
            r.length > 2 || '' !== r[0] || '' !== r[1]
              ? ((this._$AH = Array(r.length - 1).fill(new String())), (this.strings = r))
              : (this._$AH = $l);
        }
        _$AI(e, t = this, r, n) {
          const o = this.strings;
          let i = !1;
          if (void 0 === o)
            (e = Ml(this, e, t, 0)),
              (i = !bl(e) || (e !== this._$AH && e !== Ol)),
              i && (this._$AH = e);
          else {
            const n = e;
            let s, a;
            for (e = o[0], s = 0; s < o.length - 1; s++)
              (a = Ml(this, n[r + s], t, s)),
                a === Ol && (a = this._$AH[s]),
                (i ||= !bl(a) || a !== this._$AH[s]),
                a === $l ? (e = $l) : e !== $l && (e += (a ?? '') + o[s + 1]),
                (this._$AH[s] = a);
          }
          i && !n && this.j(e);
        }
        j(e) {
          e === $l
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, e ?? '');
        }
      }
      class Wl extends Dl {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(e) {
          this.element[this.name] = e === $l ? void 0 : e;
        }
      }
      class Hl extends Dl {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(e) {
          this.element.toggleAttribute(this.name, !!e && e !== $l);
        }
      }
      class Fl extends Dl {
        constructor(e, t, r, n, o) {
          super(e, t, r, n, o), (this.type = 5);
        }
        _$AI(e, t = this) {
          if ((e = Ml(this, e, t, 0) ?? $l) === Ol) return;
          const r = this._$AH,
            n =
              (e === $l && r !== $l) ||
              e.capture !== r.capture ||
              e.once !== r.once ||
              e.passive !== r.passive,
            o = e !== $l && (r === $l || n);
          n && this.element.removeEventListener(this.name, this, r),
            o && this.element.addEventListener(this.name, this, e),
            (this._$AH = e);
        }
        handleEvent(e) {
          'function' == typeof this._$AH
            ? this._$AH.call(this.options?.host ?? this.element, e)
            : this._$AH.handleEvent(e);
        }
      }
      class Vl {
        constructor(e, t, r) {
          (this.element = e),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = t),
            (this.options = r);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e) {
          Ml(this, e);
        }
      }
      (0, dl.litHtmlPolyfillSupport)?.(Ul, jl), (dl.litHtmlVersions ??= []).push('3.3.0');
      const ql = globalThis;
      class Zl extends ll {
        constructor() {
          super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0);
        }
        createRenderRoot() {
          const e = super.createRenderRoot();
          return (this.renderOptions.renderBefore ??= e.firstChild), e;
        }
        update(e) {
          const t = this.render();
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
            super.update(e),
            (this._$Do = ((e, t, r) => {
              const n = r?.renderBefore ?? t;
              let o = n._$litPart$;
              if (void 0 === o) {
                const e = r?.renderBefore ?? null;
                n._$litPart$ = o = new jl(t.insertBefore(vl(), e), e, void 0, r ?? {});
              }
              return o._$AI(e), o;
            })(t, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          super.connectedCallback(), this._$Do?.setConnected(!0);
        }
        disconnectedCallback() {
          super.disconnectedCallback(), this._$Do?.setConnected(!1);
        }
        render() {
          return Ol;
        }
      }
      (Zl._$litElement$ = !0),
        (Zl.finalized = !0),
        ql.litElementHydrateSupport?.({ LitElement: Zl });
      let Gl, Kl, Yl;
      function Xl(e) {
        Kl &&
          Yl &&
          ('light' === e
            ? (Kl.removeAttribute('media'), (Yl.media = 'enabled'))
            : (Yl.removeAttribute('media'), (Kl.media = 'enabled')));
      }
      function Jl(e) {
        return {
          core: Zc`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${qc(e?.['--w3m-color-mix-strength'] ? `${e['--w3m-color-mix-strength']}%` : '0%')};
        --w3m-font-family: ${qc(e?.['--w3m-font-family'] || 'Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;')};
        --w3m-font-size-master: ${qc(e?.['--w3m-font-size-master'] || '10px')};
        --w3m-border-radius-master: ${qc(e?.['--w3m-border-radius-master'] || '4px')};
        --w3m-z-index: ${qc(e?.['--w3m-z-index'] || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
          light: Zc`
      :root {
        --w3m-color-mix: ${qc(e?.['--w3m-color-mix'] || '#fff')};
        --w3m-accent: ${qc(we(e, 'dark')['--w3m-accent'])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${qc(we(e, 'dark')['--w3m-background'])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
          dark: Zc`
      :root {
        --w3m-color-mix: ${qc(e?.['--w3m-color-mix'] || '#000')};
        --w3m-accent: ${qc(we(e, 'light')['--w3m-accent'])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${qc(we(e, 'light')['--w3m-background'])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `,
        };
      }
      (0, ql.litElementPolyfillSupport)?.({ LitElement: Zl }),
        (ql.litElementVersions ??= []).push('4.2.0');
      const Ql = Zc`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,
        ed = Zc`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,
        td = Zc`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,
        rd = {
          getSpacingStyles: (e, t) =>
            Array.isArray(e)
              ? e[t]
                ? `var(--wui-spacing-${e[t]})`
                : void 0
              : 'string' == typeof e
                ? `var(--wui-spacing-${e})`
                : void 0,
          getFormattedDate: (e) =>
            new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(e),
          getHostName(e) {
            try {
              return new URL(e).hostname;
            } catch {
              return '';
            }
          },
          getTruncateString: ({ string: e, charsStart: t, charsEnd: r, truncate: n }) =>
            e.length <= t + r
              ? e
              : 'end' === n
                ? `${e.substring(0, t)}...`
                : 'start' === n
                  ? `...${e.substring(e.length - r)}`
                  : `${e.substring(0, Math.floor(t))}...${e.substring(e.length - Math.floor(r))}`,
          generateAvatarColors(e) {
            const t = e
                .toLowerCase()
                .replace(/^0x/iu, '')
                .replace(/[^a-f0-9]/gu, '')
                .substring(0, 6)
                .padEnd(6, '0'),
              r = this.hexToRgb(t),
              n = getComputedStyle(document.documentElement).getPropertyValue(
                '--w3m-border-radius-master'
              ),
              o = 100 - 3 * Number(n?.replace('px', '')),
              i = `${o}% ${o}% at 65% 40%`,
              s = [];
            for (let a = 0; a < 5; a += 1) {
              const e = this.tintColor(r, 0.15 * a);
              s.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`);
            }
            return `\n    --local-color-1: ${s[0]};\n    --local-color-2: ${s[1]};\n    --local-color-3: ${s[2]};\n    --local-color-4: ${s[3]};\n    --local-color-5: ${s[4]};\n    --local-radial-circle: ${i}\n   `;
          },
          hexToRgb(e) {
            const t = parseInt(e, 16);
            return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
          },
          tintColor(e, t) {
            const [r, n, o] = e;
            return [
              Math.round(r + (255 - r) * t),
              Math.round(n + (255 - n) * t),
              Math.round(o + (255 - o) * t),
            ];
          },
          isNumber: (e) => /^[0-9]+$/u.test(e),
          getColorTheme: (e) =>
            e ||
            (typeof window < 'u' && window.matchMedia
              ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
                ? 'dark'
                : 'light'
              : 'dark'),
          splitBalance(e) {
            const t = e.split('.');
            return 2 === t.length ? [t[0], t[1]] : ['0', '00'];
          },
          roundNumber: (e, t, r) => (e.toString().length >= t ? Number(e).toFixed(r) : e),
          formatNumberToLocalString: (e, t = 2) =>
            void 0 === e
              ? '0.00'
              : 'number' == typeof e
                ? e.toLocaleString('en-US', { maximumFractionDigits: t, minimumFractionDigits: t })
                : parseFloat(e).toLocaleString('en-US', {
                    maximumFractionDigits: t,
                    minimumFractionDigits: t,
                  }),
        };
      function nd(e) {
        return function (t) {
          return 'function' == typeof t
            ? (function (e, t) {
                return customElements.get(e) || customElements.define(e, t), t;
              })(e, t)
            : (function (e, t) {
                const { kind: r, elements: n } = t;
                return {
                  kind: r,
                  elements: n,
                  finisher(t) {
                    customElements.get(e) || customElements.define(e, t);
                  },
                };
              })(e, t);
        };
      }
      var od = (function (e) {
        if (e.length >= 255) throw new TypeError('Alphabet too long');
        const t = new Uint8Array(256);
        for (let a = 0; a < t.length; a++) t[a] = 255;
        for (let a = 0; a < e.length; a++) {
          const r = e.charAt(a),
            n = r.charCodeAt(0);
          if (255 !== t[n]) throw new TypeError(r + ' is ambiguous');
          t[n] = a;
        }
        const r = e.length,
          n = e.charAt(0),
          o = Math.log(r) / Math.log(256),
          i = Math.log(256) / Math.log(r);
        function s(e) {
          if ('string' != typeof e) throw new TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          let i = 0,
            s = 0,
            a = 0;
          for (; e[i] === n; ) s++, i++;
          const c = ((e.length - i) * o + 1) >>> 0,
            l = new Uint8Array(c);
          for (; i < e.length; ) {
            const n = e.charCodeAt(i);
            if (n > 255) return;
            let o = t[n];
            if (255 === o) return;
            let s = 0;
            for (let e = c - 1; (0 !== o || s < a) && -1 !== e; e--, s++)
              (o += (r * l[e]) >>> 0), (l[e] = o % 256 >>> 0), (o = (o / 256) >>> 0);
            if (0 !== o) throw new Error('Non-zero carry');
            (a = s), i++;
          }
          let d = c - a;
          for (; d !== c && 0 === l[d]; ) d++;
          const u = new Uint8Array(s + (c - d));
          let h = s;
          for (; d !== c; ) u[h++] = l[d++];
          return u;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw new TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            let o = 0,
              s = 0,
              a = 0;
            const c = t.length;
            for (; a !== c && 0 === t[a]; ) a++, o++;
            const l = ((c - a) * i + 1) >>> 0,
              d = new Uint8Array(l);
            for (; a !== c; ) {
              let e = t[a],
                n = 0;
              for (let t = l - 1; (0 !== e || n < s) && -1 !== t; t--, n++)
                (e += (256 * d[t]) >>> 0), (d[t] = e % r >>> 0), (e = (e / r) >>> 0);
              if (0 !== e) throw new Error('Non-zero carry');
              (s = n), a++;
            }
            let u = l - s;
            for (; u !== l && 0 === d[u]; ) u++;
            let h = n.repeat(o);
            for (; u < l; ++u) h += e.charAt(d[u]);
            return h;
          },
          decodeUnsafe: s,
          decode: function (e) {
            const t = s(e);
            if (t) return t;
            throw new Error('Non-base' + r + ' character');
          },
        };
      })('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
      const id = 4902,
        sd = 5e3,
        ad = 32603,
        cd = {
          gasPriceOracle: { address: '0x420000000000000000000000000000000000000F' },
          l1Block: { address: '0x4200000000000000000000000000000000000015' },
          l2CrossDomainMessenger: { address: '0x4200000000000000000000000000000000000007' },
          l2Erc721Bridge: { address: '0x4200000000000000000000000000000000000014' },
          l2StandardBridge: { address: '0x4200000000000000000000000000000000000010' },
          l2ToL1MessagePasser: { address: '0x4200000000000000000000000000000000000016' },
        },
        ld = {
          block: Yn({
            format: (e) => ({
              transactions: e.transactions?.map((e) => {
                if ('string' == typeof e) return e;
                const t = Gn(e);
                return (
                  '0x7e' === t.typeHex &&
                    ((t.isSystemTx = e.isSystemTx),
                    (t.mint = e.mint ? Mt(e.mint) : void 0),
                    (t.sourceHash = e.sourceHash),
                    (t.type = 'deposit')),
                  t
                );
              }),
              stateRoot: e.stateRoot,
            }),
          }),
          transaction: Kn({
            format(e) {
              const t = {};
              return (
                '0x7e' === e.type &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? Mt(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = 'deposit')),
                t
              );
            },
          }),
          transactionReceipt: zo({
            format: (e) => ({
              l1GasPrice: e.l1GasPrice ? Mt(e.l1GasPrice) : null,
              l1GasUsed: e.l1GasUsed ? Mt(e.l1GasUsed) : null,
              l1Fee: e.l1Fee ? Mt(e.l1Fee) : null,
              l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
            }),
          }),
        };
      function dd(e, t) {
        return (function (e) {
          return 'deposit' === e.type || typeof e.sourceHash < 'u';
        })(e)
          ? (function (e) {
              !(function (e) {
                const { from: t, to: r } = e;
                if (t && !Dr(t)) throw new Br({ address: t });
                if (r && !Dr(r)) throw new Br({ address: r });
              })(e);
              const {
                sourceHash: t,
                data: r,
                from: n,
                gas: o,
                isSystemTx: i,
                mint: s,
                to: a,
                value: c,
              } = e;
              return Wr([
                '0x7e',
                Un([
                  t,
                  n,
                  a ?? '0x',
                  s ? Dt(s) : '0x',
                  c ? Dt(c) : '0x',
                  o ? Dt(o) : '0x',
                  i ? '0x1' : '0x',
                  r ?? '0x',
                ]),
              ]);
            })(e)
          : Lo(e, t);
      }
      const ud = { contracts: cd, formatters: ld, serializers: { transaction: dd } };
      $o({
        id: 53456,
        name: 'BirdLayer',
        nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
        rpcUrls: {
          default: {
            http: ['https://rpc.birdlayer.xyz', 'https://rpc1.birdlayer.xyz'],
            webSocket: ['wss://rpc.birdlayer.xyz/ws'],
          },
        },
        blockExplorers: {
          default: { name: 'BirdLayer Explorer', url: 'https://scan.birdlayer.xyz' },
        },
      });
      $o({
        ...ud,
        id: 60808,
        name: 'BOB',
        nativeCurrency: { decimals: 18, name: 'ETH', symbol: 'ETH' },
        rpcUrls: {
          default: { http: ['https://rpc.gobob.xyz'], webSocket: ['wss://rpc.gobob.xyz'] },
        },
        blockExplorers: { default: { name: 'BOB Explorer', url: 'https://explorer.gobob.xyz' } },
        contracts: {
          ...ud.contracts,
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 23131,
          },
          l2OutputOracle: {
            1: { address: '0xdDa53E23f8a32640b04D7256e651C1db98dB11C1', blockCreated: 4462615 },
          },
          portal: {
            1: { address: '0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E', blockCreated: 4462615 },
          },
        },
        sourceId: 1,
      });
      const hd = 11155111;
      $o({
        ...ud,
        id: 808813,
        name: 'BOB Sepolia',
        nativeCurrency: { decimals: 18, name: 'ETH', symbol: 'ETH' },
        rpcUrls: {
          default: {
            http: ['https://bob-sepolia.rpc.gobob.xyz'],
            webSocket: ['wss://bob-sepolia.rpc.gobob.xyz'],
          },
        },
        blockExplorers: {
          default: { name: 'BOB Sepolia Explorer', url: 'https://bob-sepolia.explorer.gobob.xyz' },
        },
        contracts: {
          ...ud.contracts,
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 35677,
          },
          l2OutputOracle: {
            [hd]: { address: '0x14D0069452b4AE2b250B395b8adAb771E4267d2f', blockCreated: 4462615 },
          },
          portal: {
            [hd]: { address: '0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4', blockCreated: 4462615 },
          },
        },
        testnet: !0,
        sourceId: hd,
      });
      function pd(e) {
        return (
          0 === e ||
          0n === e ||
          void 0 === e ||
          null === e ||
          '0' === e ||
          '' === e ||
          ('string' == typeof e && ('0x' === Lt(e).toLowerCase() || '0x00' === Lt(e).toLowerCase()))
        );
      }
      function gd(e) {
        return !pd(e);
      }
      function fd(e) {
        return (
          'cip64' === e.type ||
          ((function (e) {
            return typeof e.maxFeePerGas < 'u' && typeof e.maxPriorityFeePerGas < 'u';
          })(e) &&
            gd(e.feeCurrency))
        );
      }
      Yn({
        format: (e) => ({
          transactions: e.transactions?.map((e) =>
            'string' == typeof e
              ? e
              : {
                  ...Gn(e),
                  ...(e.gatewayFee
                    ? { gatewayFee: Mt(e.gatewayFee), gatewayFeeRecipient: e.gatewayFeeRecipient }
                    : {}),
                  feeCurrency: e.feeCurrency,
                }
          ),
          ...(e.randomness ? { randomness: e.randomness } : {}),
        }),
      }),
        Kn({
          format(e) {
            if ('0x7e' === e.type)
              return {
                isSystemTx: e.isSystemTx,
                mint: e.mint ? Mt(e.mint) : void 0,
                sourceHash: e.sourceHash,
                type: 'deposit',
              };
            const t = { feeCurrency: e.feeCurrency };
            return (
              '0x7b' === e.type
                ? (t.type = 'cip64')
                : ('0x7c' === e.type && (t.type = 'cip42'),
                  (t.gatewayFee = e.gatewayFee ? Mt(e.gatewayFee) : null),
                  (t.gatewayFeeRecipient = e.gatewayFeeRecipient)),
              t
            );
          },
        }),
        Vn({
          format(e) {
            const t = {};
            return e.feeCurrency && (t.feeCurrency = e.feeCurrency), fd(e) && (t.type = '0x7b'), t;
          },
        });
      $o({
        id: 44,
        name: 'Crab Network',
        nativeCurrency: { decimals: 18, name: 'Crab Network Native Token', symbol: 'CRAB' },
        rpcUrls: {
          default: {
            http: ['https://crab-rpc.darwinia.network'],
            webSocket: ['wss://crab-rpc.darwinia.network'],
          },
        },
        blockExplorers: {
          default: { name: 'Blockscout', url: 'https://crab-scan.darwinia.network' },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3032593,
          },
        },
      }),
        $o({
          id: 66665,
          name: 'Creator',
          nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
          rpcUrls: { default: { http: ['https://rpc.creatorchain.io'] } },
          blockExplorers: {
            default: { name: 'Explorer', url: 'https://explorer.creatorchain.io' },
          },
          contracts: { multicall3: { address: '0xcA11bde05977b3631167028862bE2a173976CA11' } },
          testnet: !0,
        }),
        $o({
          id: 53457,
          name: 'DODOchain Testnet',
          nativeCurrency: { decimals: 18, name: 'DODO', symbol: 'DODO' },
          rpcUrls: {
            default: {
              http: ['https://dodochain-testnet.alt.technology'],
              webSocket: ['wss://dodochain-testnet.alt.technology/ws'],
            },
          },
          blockExplorers: {
            default: {
              name: 'DODOchain Testnet (Sepolia) Explorer',
              url: 'https://testnet-scan.dodochain.com',
            },
          },
          testnet: !0,
        });
      $o({
        ...ud,
        id: 3397901,
        network: 'funkiSepolia',
        name: 'Funki Sepolia Sandbox',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://funki-testnet.alt.technology'] } },
        blockExplorers: {
          default: {
            name: 'Funki Sepolia Sandbox Explorer',
            url: 'https://sepolia-sandbox.funkichain.com/',
          },
        },
        testnet: !0,
        contracts: {
          ...ud.contracts,
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1620204,
          },
        },
        sourceId: 11155111,
      });
      const wd = 17e3;
      $o({
        ...ud,
        name: 'Garnet Testnet',
        testnet: !0,
        id: 17069,
        sourceId: wd,
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: {
            http: ['https://rpc.garnetchain.com'],
            webSocket: ['wss://rpc.garnetchain.com'],
          },
        },
        blockExplorers: {
          default: { name: 'Blockscout', url: 'https://explorer.garnetchain.com' },
        },
        contracts: {
          ...ud.contracts,
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11' },
          portal: {
            [wd]: { address: '0x57ee40586fbE286AfC75E67cb69511A6D9aF5909', blockCreated: 1274684 },
          },
          l2OutputOracle: {
            [wd]: { address: '0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B', blockCreated: 1274684 },
          },
          l1StandardBridge: {
            [wd]: { address: '0x09bcDd311FE398F80a78BE37E489f5D440DB95DE', blockCreated: 1274684 },
          },
        },
      });
      $o({
        id: 701,
        name: 'Koi Network',
        nativeCurrency: { decimals: 18, name: 'Koi Network Native Token', symbol: 'KRING' },
        rpcUrls: {
          default: {
            http: ['https://koi-rpc.darwinia.network'],
            webSocket: ['wss://koi-rpc.darwinia.network'],
          },
        },
        blockExplorers: {
          default: { name: 'Blockscout', url: 'https://koi-scan.darwinia.network' },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 180001,
          },
        },
        testnet: !0,
      });
      const md = 11155111;
      $o({
        ...ud,
        name: 'Pyrope Testnet',
        testnet: !0,
        id: 695569,
        sourceId: md,
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: {
            http: ['https://rpc.pyropechain.com'],
            webSocket: ['wss://rpc.pyropechain.com'],
          },
        },
        blockExplorers: { default: { name: 'Blockscout', url: 'https://pyrope.blockscout.com' } },
        contracts: {
          ...ud.contracts,
          l1StandardBridge: { [md]: { address: '0xC24932c31D9621aE9e792576152B7ef010cFC2F8' } },
        },
      });
      $o({
        ...ud,
        name: 'Redstone',
        id: 690,
        sourceId: 1,
        nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
        rpcUrls: {
          default: {
            http: ['https://rpc.redstonechain.com'],
            webSocket: ['wss://rpc.redstonechain.com'],
          },
        },
        blockExplorers: { default: { name: 'Blockscout', url: 'https://explorer.redstone.xyz' } },
        contracts: {
          ...ud.contracts,
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11' },
          portal: {
            1: { address: '0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae', blockCreated: 19578329 },
          },
          l2OutputOracle: {
            1: { address: '0xa426A052f657AEEefc298b3B5c35a470e4739d69', blockCreated: 19578337 },
          },
          l1StandardBridge: {
            1: { address: '0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69', blockCreated: 19578331 },
          },
        },
      });
      function vd(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      const bd = vd({
          id: '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
          name: 'Solana',
          network: 'solana-mainnet',
          nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
          rpcUrls: { default: { http: ['https://rpc.walletconnect.org/v1'] } },
          blockExplorers: { default: { name: 'Solscan', url: 'https://solscan.io' } },
          testnet: !1,
          chainNamespace: 'solana',
          caipNetworkId: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
          deprecatedCaipNetworkId: 'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ',
        }),
        yd = vd({
          id: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
          name: 'Solana Devnet',
          network: 'solana-devnet',
          nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
          rpcUrls: { default: { http: ['https://rpc.walletconnect.org/v1'] } },
          blockExplorers: { default: { name: 'Solscan', url: 'https://solscan.io' } },
          testnet: !0,
          chainNamespace: 'solana',
          caipNetworkId: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
          deprecatedCaipNetworkId: 'solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K',
        });
      vd({
        id: '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
        name: 'Solana Testnet',
        network: 'solana-testnet',
        nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
        rpcUrls: { default: { http: ['https://rpc.walletconnect.org/v1'] } },
        blockExplorers: { default: { name: 'Solscan', url: 'https://solscan.io' } },
        testnet: !0,
        chainNamespace: 'solana',
        caipNetworkId: 'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
      }),
        vd({
          id: '000000000019d6689c085ae165831e93',
          caipNetworkId: 'bip122:000000000019d6689c085ae165831e93',
          chainNamespace: 'bip122',
          name: 'Bitcoin',
          nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 8 },
          rpcUrls: { default: { http: ['https://rpc.walletconnect.org/v1'] } },
        }),
        vd({
          id: '000000000933ea01ad0ee984209779ba',
          caipNetworkId: 'bip122:000000000933ea01ad0ee984209779ba',
          chainNamespace: 'bip122',
          name: 'Bitcoin Testnet',
          nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 8 },
          rpcUrls: { default: { http: ['https://rpc.walletconnect.org/v1'] } },
          testnet: !0,
        });
      const Cd = {
          solana: [
            'solana_signMessage',
            'solana_signTransaction',
            'solana_requestAccounts',
            'solana_getAccounts',
            'solana_signAllTransactions',
            'solana_signAndSendTransaction',
          ],
          eip155: [
            'eth_accounts',
            'eth_requestAccounts',
            'eth_sendRawTransaction',
            'eth_sign',
            'eth_signTransaction',
            'eth_signTypedData',
            'eth_signTypedData_v3',
            'eth_signTypedData_v4',
            'eth_sendTransaction',
            'personal_sign',
            'wallet_switchEthereumChain',
            'wallet_addEthereumChain',
            'wallet_getPermissions',
            'wallet_requestPermissions',
            'wallet_registerOnboarding',
            'wallet_watchAsset',
            'wallet_scanQRCode',
            'wallet_getCallsStatus',
            'wallet_showCallsStatus',
            'wallet_sendCalls',
            'wallet_getCapabilities',
            'wallet_grantPermissions',
            'wallet_revokePermissions',
            'wallet_getAssets',
          ],
          bip122: ['sendTransfer', 'signMessage', 'signPsbt', 'getAccountAddresses'],
        },
        xd = {
          getMethodsByChainNamespace: (e) => Cd[e] || [],
          createDefaultNamespace(e) {
            return {
              methods: this.getMethodsByChainNamespace(e),
              events: ['accountsChanged', 'chainChanged'],
              chains: [],
              rpcMap: {},
            };
          },
          applyNamespaceOverrides(e, t) {
            if (!t) return { ...e };
            const r = { ...e },
              n = new Set();
            if (
              (t.methods && Object.keys(t.methods).forEach((e) => n.add(e)),
              t.chains && Object.keys(t.chains).forEach((e) => n.add(e)),
              t.events && Object.keys(t.events).forEach((e) => n.add(e)),
              t.rpcMap &&
                Object.keys(t.rpcMap).forEach((e) => {
                  const [t] = e.split(':');
                  t && n.add(t);
                }),
              n.forEach((e) => {
                r[e] || (r[e] = this.createDefaultNamespace(e));
              }),
              t.methods &&
                Object.entries(t.methods).forEach(([e, t]) => {
                  r[e] && (r[e].methods = t);
                }),
              t.chains &&
                Object.entries(t.chains).forEach(([e, t]) => {
                  r[e] && (r[e].chains = t);
                }),
              t.events &&
                Object.entries(t.events).forEach(([e, t]) => {
                  r[e] && (r[e].events = t);
                }),
              t.rpcMap)
            ) {
              const e = new Set();
              Object.entries(t.rpcMap).forEach(([t, n]) => {
                const [o, i] = t.split(':');
                !o ||
                  !i ||
                  !r[o] ||
                  (r[o].rpcMap || (r[o].rpcMap = {}),
                  e.has(o) || ((r[o].rpcMap = {}), e.add(o)),
                  (r[o].rpcMap[i] = n));
              });
            }
            return r;
          },
          createNamespaces(e, t) {
            const r = e.reduce((e, t) => {
              const { id: r, chainNamespace: n, rpcUrls: o } = t,
                i = o.default.http[0];
              e[n] || (e[n] = this.createDefaultNamespace(n));
              const s = `${n}:${r}`,
                a = e[n];
              switch ((a.chains.push(s), s)) {
                case bd.caipNetworkId:
                  a.chains.push(bd.deprecatedCaipNetworkId);
                  break;
                case yd.caipNetworkId:
                  a.chains.push(yd.deprecatedCaipNetworkId);
              }
              return a?.rpcMap && i && (a.rpcMap[r] = i), e;
            }, {});
            return this.applyNamespaceOverrides(r, t);
          },
          resolveReownName: async (e) => {
            const t = await Sa.resolveName(e);
            return (Object.values(t?.addresses) || [])[0]?.address || !1;
          },
          getChainsFromNamespaces: (e = {}) =>
            Object.values(e).flatMap((e) => {
              const t = e.chains || [],
                r = e.accounts.map((e) => {
                  const [t, r] = e.split(':');
                  return `${t}:${r}`;
                });
              return Array.from(new Set([...t, ...r]));
            }),
          isSessionEventData: (e) =>
            'object' == typeof e &&
            null !== e &&
            'id' in e &&
            'topic' in e &&
            'params' in e &&
            'object' == typeof e.params &&
            null !== e.params &&
            'chainId' in e.params &&
            'event' in e.params &&
            'object' == typeof e.params.event &&
            null !== e.params.event,
        };
      class kd {
        constructor({ provider: e, namespace: t }) {
          (this.id = Y.CONNECTOR_ID.WALLET_CONNECT),
            (this.name = Fa.ConnectorNamesMap[Y.CONNECTOR_ID.WALLET_CONNECT]),
            (this.type = 'WALLET_CONNECT'),
            (this.imageId = Fa.ConnectorImageIds[Y.CONNECTOR_ID.WALLET_CONNECT]),
            (this.getCaipNetworks = pa.getCaipNetworks.bind(pa)),
            (this.caipNetworks = this.getCaipNetworks()),
            (this.provider = e),
            (this.chain = t);
        }
        get chains() {
          return this.getCaipNetworks();
        }
        async connectWalletConnect() {
          if (!(await this.authenticate())) {
            const e = this.getCaipNetworks(),
              t = Ve.state.universalProviderConfigOverride,
              r = xd.createNamespaces(e, t);
            await this.provider.connect({ optionalNamespaces: r });
          }
          return {
            clientId: await this.provider.client.core.crypto.getClientId(),
            session: this.provider.session,
          };
        }
        async disconnect() {
          await this.provider.disconnect();
        }
        async authenticate() {
          const e = this.chains.map((e) => e.caipNetworkId);
          return wt.universalProviderAuthenticate({
            universalProvider: this.provider,
            chains: e,
            methods: Ad,
          });
        }
      }
      const Ad = [
        'eth_accounts',
        'eth_requestAccounts',
        'eth_sendRawTransaction',
        'eth_sign',
        'eth_signTransaction',
        'eth_signTypedData',
        'eth_signTypedData_v3',
        'eth_signTypedData_v4',
        'eth_sendTransaction',
        'personal_sign',
        'wallet_switchEthereumChain',
        'wallet_addEthereumChain',
        'wallet_getPermissions',
        'wallet_requestPermissions',
        'wallet_registerOnboarding',
        'wallet_watchAsset',
        'wallet_scanQRCode',
        'wallet_getCallsStatus',
        'wallet_sendCalls',
        'wallet_getCapabilities',
        'wallet_grantPermissions',
        'wallet_revokePermissions',
        'wallet_getAssets',
      ];
      class Ed extends class {
        constructor(e) {
          (this.availableConnectors = []),
            (this.eventListeners = new Map()),
            (this.getCaipNetworks = (e) => pa.getCaipNetworks(e)),
            e && this.construct(e);
        }
        construct(e) {
          (this.projectId = e.projectId),
            (this.namespace = e.namespace),
            (this.adapterType = e.adapterType);
        }
        get connectors() {
          return this.availableConnectors;
        }
        get networks() {
          return this.getCaipNetworks(this.namespace);
        }
        setAuthProvider(e) {
          this.addConnector({
            id: Y.CONNECTOR_ID.AUTH,
            type: 'AUTH',
            name: Y.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId: Fa.ConnectorImageIds[Y.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: [],
          });
        }
        addConnector(...e) {
          const t = new Set();
          (this.availableConnectors = [...e, ...this.availableConnectors].filter(
            (e) => !t.has(e.id) && (t.add(e.id), !0)
          )),
            this.emit('connectors', this.availableConnectors);
        }
        setStatus(e, t) {
          ba.setStatus(e, t);
        }
        on(e, t) {
          this.eventListeners.has(e) || this.eventListeners.set(e, new Set()),
            this.eventListeners.get(e)?.add(t);
        }
        off(e, t) {
          const r = this.eventListeners.get(e);
          r && r.delete(t);
        }
        removeAllEventListeners() {
          this.eventListeners.forEach((e) => {
            e.clear();
          });
        }
        emit(e, t) {
          const r = this.eventListeners.get(e);
          r && r.forEach((e) => e(t));
        }
        async connectWalletConnect(e) {
          return {
            clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId,
          };
        }
        async switchNetwork(e) {
          const { caipNetwork: t, providerType: r } = e;
          if (!e.provider) return;
          const n = 'provider' in e.provider ? e.provider.provider : e.provider;
          if ('WALLET_CONNECT' !== r) {
            if (n && 'AUTH' === r) {
              const e = n,
                r = ba.state.preferredAccountTypes?.[t.chainNamespace];
              await e.switchNetwork(t.caipNetworkId);
              const o = await e.getUser({ chainId: t.caipNetworkId, preferredAccountType: r });
              this.emit('switchNetwork', o);
            }
          } else n.setDefaultChain(t.caipNetworkId);
        }
        getWalletConnectConnector() {
          const e = this.connectors.find((e) => e instanceof kd);
          if (!e) throw new Error('WalletConnectConnector not found');
          return e;
        }
      } {
        setUniversalProvider(e) {
          this.addConnector(
            new kd({ provider: e, caipNetworks: this.getCaipNetworks(), namespace: this.namespace })
          );
        }
        async connect(e) {
          return Promise.resolve({
            id: 'WALLET_CONNECT',
            type: 'WALLET_CONNECT',
            chainId: Number(e.chainId),
            provider: this.provider,
            address: '',
          });
        }
        async disconnect() {
          try {
            await this.getWalletConnectConnector().disconnect();
          } catch (e) {
            console.warn('UniversalAdapter:disconnect - error', e);
          }
        }
        async getAccounts({ namespace: e }) {
          const t =
            this.provider?.session?.namespaces?.[e]?.accounts
              ?.map((e) => {
                const [, , t] = e.split(':');
                return t;
              })
              .filter((e, t, r) => r.indexOf(e) === t) || [];
          return Promise.resolve({
            accounts: t.map((t) => Re.createAccount(e, t, 'bip122' === e ? 'payment' : 'eoa')),
          });
        }
        async syncConnectors() {
          return Promise.resolve();
        }
        async getBalance(e) {
          if (
            !e.caipNetwork ||
            !Oe.BALANCE_SUPPORTED_CHAINS.includes(e.caipNetwork?.chainNamespace) ||
            e.caipNetwork?.testnet
          )
            return { balance: '0.00', symbol: e.caipNetwork?.nativeCurrency.symbol || '' };
          if (ba.state.balanceLoading && e.chainId === pa.state.activeCaipNetwork?.id)
            return { balance: ba.state.balance || '0.00', symbol: ba.state.balanceSymbol || '' };
          const t = (await ba.fetchTokenBalance()).find(
            (t) =>
              t.chainId === `${e.caipNetwork?.chainNamespace}:${e.chainId}` &&
              t.symbol === e.caipNetwork?.nativeCurrency.symbol
          );
          return {
            balance: t?.quantity.numeric || '0.00',
            symbol: t?.symbol || e.caipNetwork?.nativeCurrency.symbol || '',
          };
        }
        async signMessage(e) {
          const { provider: t, message: r, address: n } = e;
          if (!t) throw new Error('UniversalAdapter:signMessage - provider is undefined');
          let o = '';
          return (
            (o =
              pa.state.activeCaipNetwork?.chainNamespace === Y.CHAIN.SOLANA
                ? (
                    await t.request(
                      {
                        method: 'solana_signMessage',
                        params: { message: od.encode(new TextEncoder().encode(r)), pubkey: n },
                      },
                      pa.state.activeCaipNetwork?.caipNetworkId
                    )
                  ).signature
                : await t.request(
                    { method: 'personal_sign', params: [r, n] },
                    pa.state.activeCaipNetwork?.caipNetworkId
                  )),
            { signature: o }
          );
        }
        async estimateGas() {
          return Promise.resolve({ gas: BigInt(0) });
        }
        async getProfile() {
          return Promise.resolve({ profileImage: '', profileName: '' });
        }
        async sendTransaction() {
          return Promise.resolve({ hash: '' });
        }
        walletGetAssets(e) {
          return Promise.resolve({});
        }
        async writeContract() {
          return Promise.resolve({ hash: '' });
        }
        async getEnsAddress() {
          return Promise.resolve({ address: !1 });
        }
        parseUnits() {
          return 0n;
        }
        formatUnits() {
          return '0';
        }
        async getCapabilities() {
          return Promise.resolve({});
        }
        async grantPermissions() {
          return Promise.resolve({});
        }
        async revokePermissions() {
          return Promise.resolve('0x');
        }
        async syncConnection() {
          return Promise.resolve({
            id: 'WALLET_CONNECT',
            type: 'WALLET_CONNECT',
            chainId: 1,
            provider: this.provider,
            address: '',
          });
        }
        async switchNetwork(e) {
          const { caipNetwork: t } = e,
            r = this.getWalletConnectConnector();
          if (t.chainNamespace === Y.CHAIN.EVM)
            try {
              await r.provider?.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: Dt(t.id) }],
              });
            } catch (n) {
              if (
                n.code === id ||
                n.code === ad ||
                n.code === sd ||
                n?.data?.originalError?.code === id
              )
                try {
                  await r.provider?.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: Dt(t.id),
                        rpcUrls: [t?.rpcUrls.chainDefault?.http],
                        chainName: t.name,
                        nativeCurrency: t.nativeCurrency,
                        blockExplorerUrls: [t.blockExplorers?.default.url],
                      },
                    ],
                  });
                } catch {
                  throw new Error('Chain is not supported');
                }
            }
          r.provider.setDefaultChain(t.caipNetworkId);
        }
        getWalletConnectProvider() {
          return this.connectors.find((e) => 'WALLET_CONNECT' === e.type)?.provider;
        }
      }
      let Id = !1;
      class Nd extends class {
        constructor(e) {
          (this.chainNamespaces = []),
            (this.reportedAlertErrors = {}),
            (this.getCaipNetwork = (e, t) => {
              if (e) {
                const r = pa.getNetworkData(e)?.requestedCaipNetworks?.find((e) => e.id === t);
                if (r) return r;
                const n = pa.getNetworkData(e)?.caipNetwork;
                return (
                  n || pa.getRequestedCaipNetworks(e).filter((t) => t.chainNamespace === e)?.[0]
                );
              }
              return pa.state.activeCaipNetwork || this.defaultCaipNetwork;
            }),
            (this.getCaipNetworkId = () => {
              const e = this.getCaipNetwork();
              if (e) return e.id;
            }),
            (this.getCaipNetworks = (e) => pa.getCaipNetworks(e)),
            (this.getActiveChainNamespace = () => pa.state.activeChain),
            (this.setRequestedCaipNetworks = (e, t) => {
              pa.setRequestedCaipNetworks(e, t);
            }),
            (this.getApprovedCaipNetworkIds = () => pa.getAllApprovedCaipNetworkIds()),
            (this.getCaipAddress = (e) =>
              pa.state.activeChain !== e && e
                ? pa.getAccountProp('caipAddress', e)
                : pa.state.activeCaipAddress),
            (this.setClientId = (e) => {
              ma.setClientId(e);
            }),
            (this.getProvider = (e) => Lc.getProvider(e)),
            (this.getProviderType = (e) => Lc.getProviderId(e)),
            (this.getPreferredAccountType = (e) => ba.state.preferredAccountTypes?.[e]),
            (this.setCaipAddress = (e, t) => {
              ba.setCaipAddress(e, t);
            }),
            (this.setBalance = (e, t, r) => {
              ba.setBalance(e, t, r);
            }),
            (this.setProfileName = (e, t) => {
              ba.setProfileName(e, t);
            }),
            (this.setProfileImage = (e, t) => {
              ba.setProfileImage(e, t);
            }),
            (this.setUser = (e, t) => {
              ba.setUser(e, t), Ve.state.enableEmbedded && Ca.close();
            }),
            (this.resetAccount = (e) => {
              ba.resetAccount(e);
            }),
            (this.setCaipNetwork = (e) => {
              pa.setActiveCaipNetwork(e);
            }),
            (this.setCaipNetworkOfNamespace = (e, t) => {
              pa.setChainNetworkData(t, { caipNetwork: e });
            }),
            (this.setAllAccounts = (e, t) => {
              ba.setAllAccounts(e, t), Ve.setHasMultipleAddresses(e?.length > 1);
            }),
            (this.setStatus = (e, t) => {
              ba.setStatus(e, t),
                dt.isConnected()
                  ? $e.setConnectionStatus('connected')
                  : $e.setConnectionStatus('disconnected');
            }),
            (this.getAddressByChainNamespace = (e) => pa.getAccountProp('address', e)),
            (this.setConnectors = (e) => {
              const t = [...dt.state.allConnectors, ...e];
              dt.setConnectors(t);
            }),
            (this.fetchIdentity = (e) => ma.fetchIdentity(e)),
            (this.getReownName = (e) => Sa.getNamesForAddress(e)),
            (this.getConnectors = () => dt.getConnectors()),
            (this.getConnectorImage = (e) => We.getConnectorImage(e)),
            (this.setConnectedWalletInfo = (e, t) => {
              const r = Lc.getProviderId(t),
                n = e ? { ...e, type: r } : void 0;
              ba.setConnectedWalletInfo(n, t);
            }),
            (this.getIsConnectedState = () => !!pa.state.activeCaipAddress),
            (this.addAddressLabel = (e, t, r) => {
              ba.addAddressLabel(e, t, r);
            }),
            (this.removeAddressLabel = (e, t) => {
              ba.removeAddressLabel(e, t);
            }),
            (this.getAddress = (e) =>
              pa.state.activeChain !== e && e ? pa.getAccountProp('address', e) : ba.state.address),
            (this.setApprovedCaipNetworksData = (e) => pa.setApprovedCaipNetworksData(e)),
            (this.resetNetwork = (e) => {
              pa.resetNetwork(e);
            }),
            (this.addConnector = (e) => {
              dt.addConnector(e);
            }),
            (this.resetWcConnection = () => {
              Ct.resetWcConnection();
            }),
            (this.setAddressExplorerUrl = (e, t) => {
              ba.setAddressExplorerUrl(e, t);
            }),
            (this.setSmartAccountDeployed = (e, t) => {
              ba.setSmartAccountDeployed(e, t);
            }),
            (this.setSmartAccountEnabledNetworks = (e, t) => {
              pa.setSmartAccountEnabledNetworks(e, t);
            }),
            (this.setPreferredAccountType = (e, t) => {
              ba.setPreferredAccountType(e, t);
            }),
            (this.setEIP6963Enabled = (e) => {
              Ve.setEIP6963Enabled(e);
            }),
            (this.handleUnsafeRPCRequest = () => {
              if (this.isOpen()) {
                if (this.isTransactionStackEmpty()) return;
                this.redirect('ApproveTransaction');
              } else this.open({ view: 'ApproveTransaction' });
            }),
            (this.options = e),
            (this.version = e.sdkVersion),
            (this.caipNetworks = this.extendCaipNetworks(e)),
            (this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks)),
            (this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e)),
            (this.chainAdapters = this.createAdapters(e.adapters)),
            this.initialize(e);
        }
        getChainNamespacesSet(e, t) {
          const r = e?.map((e) => e.namespace).filter((e) => !!e);
          if (r?.length) return [...new Set(r)];
          const n = t?.map((e) => e.chainNamespace);
          return [...new Set(n)];
        }
        async initialize(e) {
          this.initControllers(e),
            await this.initChainAdapters(),
            await this.injectModalUi(),
            this.sendInitializeEvent(e),
            kt.set({ initialized: !0 }),
            await this.syncExistingConnection();
        }
        sendInitializeEvent(e) {
          const { ...t } = e;
          delete t.adapters,
            delete t.universalProvider,
            Je.sendEvent({
              type: 'track',
              event: 'INITIALIZE',
              properties: {
                ...t,
                networks: e.networks.map((e) => e.id),
                siweConfig: { options: e.siweConfig?.options || {} },
              },
            });
        }
        initControllers(e) {
          this.initializeOptionsController(e),
            this.initializeChainController(e),
            this.initializeThemeController(e),
            this.initializeConnectionController(e),
            this.initializeConnectorController();
        }
        initializeThemeController(e) {
          e.themeMode && at.setThemeMode(e.themeMode),
            e.themeVariables && at.setThemeVariables(e.themeVariables);
        }
        initializeChainController(e) {
          if (!this.connectionControllerClient || !this.networkControllerClient)
            throw new Error('ConnectionControllerClient and NetworkControllerClient must be set');
          pa.initialize(e.adapters ?? [], this.caipNetworks, {
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient,
          });
          const t = this.getDefaultNetwork();
          t && pa.setActiveCaipNetwork(t);
        }
        initializeConnectionController(e) {
          Ct.setWcBasic(e.basic ?? !1);
        }
        initializeConnectorController() {
          dt.initialize(this.chainNamespaces);
        }
        initializeOptionsController(e) {
          Ve.setDebug(!1 !== e.debug),
            Ve.setEnableWalletConnect(!1 !== e.enableWalletConnect),
            Ve.setEnableWalletGuide(!1 !== e.enableWalletGuide),
            Ve.setEnableWallets(!1 !== e.enableWallets),
            Ve.setEIP6963Enabled(!1 !== e.enableEIP6963),
            Ve.setEnableNetworkSwitch(!1 !== e.enableNetworkSwitch),
            Ve.setEnableAuthLogger(!1 !== e.enableAuthLogger),
            Ve.setCustomRpcUrls(e.customRpcUrls),
            Ve.setSdkVersion(e.sdkVersion),
            Ve.setProjectId(e.projectId),
            Ve.setEnableEmbedded(e.enableEmbedded),
            Ve.setAllWallets(e.allWallets),
            Ve.setIncludeWalletIds(e.includeWalletIds),
            Ve.setExcludeWalletIds(e.excludeWalletIds),
            Ve.setFeaturedWalletIds(e.featuredWalletIds),
            Ve.setTokens(e.tokens),
            Ve.setTermsConditionsUrl(e.termsConditionsUrl),
            Ve.setPrivacyPolicyUrl(e.privacyPolicyUrl),
            Ve.setCustomWallets(e.customWallets),
            Ve.setFeatures(e.features),
            Ve.setAllowUnsupportedChain(e.allowUnsupportedChain),
            Ve.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),
            Ve.setDefaultAccountTypes(e.defaultAccountTypes);
          const t = $e.getPreferredAccountTypes(),
            r = { ...Ve.state.defaultAccountTypes, ...t };
          ba.setPreferredAccountTypes(r);
          const n = this.getDefaultMetaData();
          if (
            (!e.metadata && n && (e.metadata = n),
            Ve.setMetadata(e.metadata),
            Ve.setDisableAppend(e.disableAppend),
            Ve.setEnableEmbedded(e.enableEmbedded),
            Ve.setSIWX(e.siwx),
            e.projectId)
          ) {
            if (e.adapters?.find((e) => e.namespace === Y.CHAIN.EVM) && e.siweConfig) {
              if (e.siwx) throw new Error('Cannot set both `siweConfig` and `siwx` options');
              Ve.setSIWX(e.siweConfig.mapToSIWX());
            }
          } else Ze.open(qa.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, 'error');
        }
        getDefaultMetaData() {
          return typeof window < 'u' && typeof document < 'u'
            ? {
                name: document.getElementsByTagName('title')?.[0]?.textContent || '',
                description:
                  document.querySelector('meta[property="og:description"]')?.content || '',
                url: window.location.origin,
                icons: [document.querySelector('link[rel~="icon"]')?.href || ''],
              }
            : null;
        }
        setUnsupportedNetwork(e) {
          const t = this.getActiveChainNamespace();
          if (t) {
            const r = $c.getUnsupportedNetwork(`${t}:${e}`);
            pa.setActiveCaipNetwork(r);
          }
        }
        getDefaultNetwork() {
          return $c.getCaipNetworkFromStorage(this.defaultCaipNetwork);
        }
        extendCaipNetwork(e, t) {
          return $c.extendCaipNetwork(e, {
            customNetworkImageUrls: t.chainImages,
            projectId: t.projectId,
          });
        }
        extendCaipNetworks(e) {
          return $c.extendCaipNetworks(e.networks, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId,
          });
        }
        extendDefaultCaipNetwork(e) {
          const t = e.networks.find((t) => t.id === e.defaultNetwork?.id);
          return t
            ? $c.extendCaipNetwork(t, {
                customNetworkImageUrls: e.chainImages,
                customRpcUrls: e.customRpcUrls,
                projectId: e.projectId,
              })
            : void 0;
        }
        createClients() {
          (this.connectionControllerClient = {
            connectWalletConnect: async () => {
              const e = pa.state.activeChain,
                t = this.getAdapter(e),
                r = this.getCaipNetwork(e)?.id;
              if (!t) throw new Error('Adapter not found');
              const n = await t.connectWalletConnect(r);
              this.close(),
                this.setClientId(n?.clientId || null),
                $e.setConnectedNamespaces([...pa.state.chains.keys()]),
                this.chainNamespaces.forEach((e) => {
                  dt.setConnectorId(Da, e);
                }),
                await this.syncWalletConnectAccount();
            },
            connectExternal: async ({
              id: e,
              info: t,
              type: r,
              provider: n,
              chain: o,
              caipNetwork: i,
            }) => {
              const s = pa.state.activeChain,
                a = o || s,
                c = this.getAdapter(a);
              if (o && o !== s && !i) {
                const e = this.getCaipNetworks().find((e) => e.chainNamespace === o);
                e && this.setCaipNetwork(e);
              }
              if (!c) throw new Error('Adapter not found');
              const l = this.getCaipNetwork(a),
                d = await c.connect({
                  id: e,
                  info: t,
                  type: r,
                  provider: n,
                  chainId: i?.id || l?.id,
                  rpcUrl: i?.rpcUrls?.default?.http?.[0] || l?.rpcUrls?.default?.http?.[0],
                });
              if (!d) return;
              $e.addConnectedNamespace(a), this.syncProvider({ ...d, chainNamespace: a });
              const { accounts: u } = await c.getAccounts({ namespace: a, id: e });
              this.setAllAccounts(u, a), this.setStatus('connected', a);
            },
            reconnectExternal: async ({ id: e, info: t, type: r, provider: n }) => {
              const o = pa.state.activeChain,
                i = this.getAdapter(o);
              i?.reconnect &&
                (await i?.reconnect({
                  id: e,
                  info: t,
                  type: r,
                  provider: n,
                  chainId: this.getCaipNetwork()?.id,
                }),
                $e.addConnectedNamespace(o));
            },
            disconnect: async (e) => {
              const t = e || pa.state.activeChain,
                r = this.getAdapter(t),
                n = Lc.getProvider(t),
                o = Lc.getProviderId(t);
              await r?.disconnect({ provider: n, providerType: o }),
                $e.removeConnectedNamespace(t),
                Lc.resetChain(t),
                this.setUser(void 0, t),
                this.setStatus('disconnected', t);
            },
            checkInstalled: (e) =>
              e ? e.some((e) => !!window.ethereum?.[String(e)]) : !!window.ethereum,
            signMessage: async (e) =>
              (
                await this.getAdapter(pa.state.activeChain)?.signMessage({
                  message: e,
                  address: ba.state.address,
                  provider: Lc.getProvider(pa.state.activeChain),
                })
              )?.signature || '',
            sendTransaction: async (e) => {
              if (e.chainNamespace === Y.CHAIN.EVM) {
                const t = this.getAdapter(pa.state.activeChain),
                  r = Lc.getProvider(pa.state.activeChain);
                return (
                  (
                    await t?.sendTransaction({
                      ...e,
                      caipNetwork: this.getCaipNetwork(),
                      provider: r,
                    })
                  )?.hash || ''
                );
              }
              return '';
            },
            estimateGas: async (e) => {
              if (e.chainNamespace === Y.CHAIN.EVM) {
                const t = this.getAdapter(pa.state.activeChain),
                  r = Lc.getProvider(pa.state.activeChain),
                  n = this.getCaipNetwork();
                if (!n) throw new Error('CaipNetwork is undefined');
                return (await t?.estimateGas({ ...e, provider: r, caipNetwork: n }))?.gas || 0n;
              }
              return 0n;
            },
            getEnsAvatar: async () =>
              (
                await this.getAdapter(pa.state.activeChain)?.getProfile({
                  address: ba.state.address,
                  chainId: Number(this.getCaipNetwork()?.id),
                })
              )?.profileImage || !1,
            getEnsAddress: async (e) => {
              const t = this.getAdapter(pa.state.activeChain),
                r = this.getCaipNetwork();
              return (r && (await t?.getEnsAddress({ name: e, caipNetwork: r }))?.address) || !1;
            },
            writeContract: async (e) => {
              const t = this.getAdapter(pa.state.activeChain),
                r = this.getCaipNetwork(),
                n = this.getCaipAddress(),
                o = Lc.getProvider(pa.state.activeChain);
              if (!r || !n) throw new Error('CaipNetwork or CaipAddress is undefined');
              return (await t?.writeContract({ ...e, caipNetwork: r, provider: o, caipAddress: n }))
                ?.hash;
            },
            parseUnits: (e, t) =>
              this.getAdapter(pa.state.activeChain)?.parseUnits({ value: e, decimals: t }) ?? 0n,
            formatUnits: (e, t) =>
              this.getAdapter(pa.state.activeChain)?.formatUnits({ value: e, decimals: t }) ?? '0',
            getCapabilities: async (e) =>
              await this.getAdapter(pa.state.activeChain)?.getCapabilities(e),
            grantPermissions: async (e) =>
              await this.getAdapter(pa.state.activeChain)?.grantPermissions(e),
            revokePermissions: async (e) => {
              const t = this.getAdapter(pa.state.activeChain);
              return t?.revokePermissions ? await t.revokePermissions(e) : '0x';
            },
            walletGetAssets: async (e) =>
              (await this.getAdapter(pa.state.activeChain)?.walletGetAssets(e)) ?? {},
          }),
            (this.networkControllerClient = {
              switchCaipNetwork: async (e) => await this.switchCaipNetwork(e),
              getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData(),
            }),
            Ct.setClient(this.connectionControllerClient);
        }
        getApprovedCaipNetworksData() {
          if (Lc.getProviderId(pa.state.activeChain) === Da) {
            const e = this.universalProvider?.session?.namespaces;
            return {
              supportsAllNetworks:
                'MetaMask Wallet' === this.universalProvider?.session?.peer?.metadata.name,
              approvedCaipNetworkIds: this.getChainsFromNamespaces(e),
            };
          }
          return { supportsAllNetworks: !0, approvedCaipNetworkIds: [] };
        }
        async switchCaipNetwork(e) {
          if (!e) return;
          const t = e.chainNamespace;
          if (this.getAddressByChainNamespace(e.chainNamespace)) {
            const r = Lc.getProvider(t),
              n = Lc.getProviderId(t);
            if (e.chainNamespace === pa.state.activeChain)
              await this.getAdapter(t)?.switchNetwork({
                caipNetwork: e,
                provider: r,
                providerType: n,
              });
            else if ((this.setCaipNetwork(e), n === Da)) this.syncWalletConnectAccount();
            else {
              const r = this.getAddressByChainNamespace(t);
              r && this.syncAccount({ address: r, chainId: e.id, chainNamespace: t });
            }
          } else this.setCaipNetwork(e);
        }
        getChainsFromNamespaces(e = {}) {
          return Object.values(e).flatMap((e) => {
            const t = e.chains || [],
              r = e.accounts.map((e) => {
                const { chainId: t, chainNamespace: r } = J.parseCaipAddress(e);
                return `${r}:${t}`;
              });
            return Array.from(new Set([...t, ...r]));
          });
        }
        createAdapters(e) {
          return (
            this.createClients(),
            this.chainNamespaces.reduce((t, r) => {
              const n = e?.find((e) => e.namespace === r);
              return (
                n
                  ? (n.construct({
                      namespace: r,
                      projectId: this.options?.projectId,
                      networks: this.getCaipNetworks(),
                    }),
                    (t[r] = n))
                  : (t[r] = new Ed({ namespace: r, networks: this.getCaipNetworks() })),
                t
              );
            }, {})
          );
        }
        async initChainAdapter(e) {
          this.onConnectors(e),
            this.listenAdapter(e),
            this.chainAdapters?.[e].syncConnectors(this.options, this),
            await this.createUniversalProviderForAdapter(e);
        }
        async initChainAdapters() {
          await Promise.all(
            this.chainNamespaces.map(async (e) => {
              await this.initChainAdapter(e);
            })
          );
        }
        onConnectors(e) {
          this.getAdapter(e)?.on('connectors', this.setConnectors.bind(this));
        }
        listenAdapter(e) {
          const t = this.getAdapter(e);
          if (!t) return;
          const r = $e.getConnectionStatus();
          'connected' === r
            ? this.setStatus('connecting', e)
            : 'disconnected' === r
              ? ($e.clearAddressCache(), this.setStatus(r, e))
              : this.setStatus(r, e),
            t.on('switchNetwork', ({ address: t, chainId: r }) => {
              const n = this.getCaipNetworks().find((e) => e.id === r || e.caipNetworkId === r),
                o = pa.state.activeChain === e,
                i = pa.getAccountProp('address', e);
              if (n) {
                const r = o && t ? t : i;
                r && this.syncAccount({ address: r, chainId: n.id, chainNamespace: e });
              } else this.setUnsupportedNetwork(r);
            }),
            t.on('disconnect', this.disconnect.bind(this, e)),
            t.on('pendingTransactions', () => {
              const e = ba.state.address,
                t = pa.state.activeCaipNetwork;
              !e || !t?.id || this.updateNativeBalance(e, t.id, t.chainNamespace);
            }),
            t.on('accountChanged', ({ address: t, chainId: r }) => {
              const n = pa.state.activeChain === e;
              n && r
                ? this.syncAccount({ address: t, chainId: r, chainNamespace: e })
                : n && pa.state.activeCaipNetwork?.id
                  ? this.syncAccount({
                      address: t,
                      chainId: pa.state.activeCaipNetwork?.id,
                      chainNamespace: e,
                    })
                  : this.syncAccountInfo(t, r, e);
            });
        }
        async createUniversalProviderForAdapter(e) {
          await this.getUniversalProvider(),
            this.universalProvider &&
              this.chainAdapters?.[e]?.setUniversalProvider?.(this.universalProvider);
        }
        async syncExistingConnection() {
          await Promise.allSettled(
            this.chainNamespaces.map((e) => this.syncNamespaceConnection(e))
          );
        }
        async syncNamespaceConnection(e) {
          try {
            const t = dt.getConnectorId(e);
            switch ((this.setStatus('connecting', e), t)) {
              case Y.CONNECTOR_ID.WALLET_CONNECT:
                await this.syncWalletConnectAccount();
                break;
              case Y.CONNECTOR_ID.AUTH:
                break;
              default:
                await this.syncAdapterConnection(e);
            }
          } catch (t) {
            console.warn("AppKit couldn't sync existing connection", t),
              this.setStatus('disconnected', e);
          }
        }
        async syncAdapterConnection(e) {
          const t = this.getAdapter(e),
            r = dt.getConnectorId(e),
            n = this.getCaipNetwork(e),
            o = dt.getConnectors(e).find((e) => e.id === r);
          try {
            if (!t || !o) throw new Error(`Adapter or connector not found for namespace ${e}`);
            if (!n?.id) throw new Error('CaipNetwork not found');
            const r = await t?.syncConnection({
              namespace: e,
              id: o.id,
              chainId: n.id,
              rpcUrl: n?.rpcUrls?.default?.http?.[0],
            });
            if (r) {
              const n = await t?.getAccounts({ namespace: e, id: o.id });
              n && n.accounts.length > 0
                ? this.setAllAccounts(n.accounts, e)
                : this.setAllAccounts([Re.createAccount(e, r.address, 'eoa')], e),
                this.syncProvider({ ...r, chainNamespace: e }),
                await this.syncAccount({ ...r, chainNamespace: e }),
                this.setStatus('connected', e);
            } else this.setStatus('disconnected', e);
          } catch {
            this.setStatus('disconnected', e);
          }
        }
        async syncWalletConnectAccount() {
          const e = this.chainNamespaces.map(async (e) => {
            const t = this.getAdapter(e),
              r = this.universalProvider?.session?.namespaces?.[e]?.accounts || [],
              n = pa.state.activeCaipNetwork?.id,
              o =
                r.find((e) => {
                  const { chainId: t } = J.parseCaipAddress(e);
                  return t === n?.toString();
                }) || r[0];
            if (o) {
              const r = J.validateCaipAddress(o),
                { chainId: n, address: i } = J.parseCaipAddress(r);
              if (
                (Lc.setProviderId(e, Da),
                this.caipNetworks && pa.state.activeCaipNetwork && t?.namespace !== Y.CHAIN.EVM)
              ) {
                const r = t?.getWalletConnectProvider({
                  caipNetworks: this.getCaipNetworks(),
                  provider: this.universalProvider,
                  activeCaipNetwork: pa.state.activeCaipNetwork,
                });
                Lc.setProvider(e, r);
              } else Lc.setProvider(e, this.universalProvider);
              dt.setConnectorId(Y.CONNECTOR_ID.WALLET_CONNECT, e),
                $e.addConnectedNamespace(e),
                this.syncWalletConnectAccounts(e),
                await this.syncAccount({ address: i, chainId: n, chainNamespace: e });
            } else this.setStatus('disconnected', e);
            await pa.setApprovedCaipNetworksData(e);
          });
          await Promise.all(e);
        }
        syncWalletConnectAccounts(e) {
          const t = this.universalProvider?.session?.namespaces?.[e]?.accounts
            ?.map((e) => {
              const { address: t } = J.parseCaipAddress(e);
              return t;
            })
            .filter((e, t, r) => r.indexOf(e) === t);
          t &&
            this.setAllAccounts(
              t.map((t) => Re.createAccount(e, t, 'bip122' === e ? 'payment' : 'eoa')),
              e
            );
        }
        syncProvider({ type: e, provider: t, id: r, chainNamespace: n }) {
          Lc.setProviderId(n, e), Lc.setProvider(n, t), dt.setConnectorId(r, n);
        }
        async syncAccount(e) {
          const t = e.chainNamespace === pa.state.activeChain,
            r = pa.getCaipNetworkByNamespace(e.chainNamespace, e.chainId),
            { address: n, chainId: o, chainNamespace: i } = e,
            { chainId: s } = $e.getActiveNetworkProps(),
            a = o || s,
            c = pa.state.activeCaipNetwork?.name === Y.UNSUPPORTED_NETWORK_NAME,
            l = pa.getNetworkProp('supportsAllNetworks', i);
          if ((this.setStatus('connected', i), (!c || l) && a)) {
            let e = this.getCaipNetworks().find((e) => e.id.toString() === a.toString()),
              o = this.getCaipNetworks().find((e) => e.chainNamespace === i);
            if (!l && !e && !o) {
              const t = this.getApprovedCaipNetworkIds() || [],
                r = t.find((e) => J.parseCaipNetworkId(e)?.chainId === a.toString()),
                n = t.find((e) => J.parseCaipNetworkId(e)?.chainNamespace === i);
              (e = this.getCaipNetworks().find((e) => e.caipNetworkId === r)),
                (o = this.getCaipNetworks().find(
                  (e) =>
                    e.caipNetworkId === n ||
                    ('deprecatedCaipNetworkId' in e && e.deprecatedCaipNetworkId === n)
                ));
            }
            const s = e || o;
            s?.chainNamespace === pa.state.activeChain
              ? Ve.state.enableNetworkSwitch &&
                !Ve.state.allowUnsupportedChain &&
                pa.state.activeCaipNetwork?.name === Y.UNSUPPORTED_NETWORK_NAME
                ? pa.showUnsupportedChainUI()
                : this.setCaipNetwork(s)
              : t || (r && this.setCaipNetworkOfNamespace(r, i)),
              this.syncConnectedWalletInfo(i),
              Va.isLowerCaseMatch(n, ba.state.address) || this.syncAccountInfo(n, s?.id, i),
              t
                ? await this.syncBalance({ address: n, chainId: s?.id, chainNamespace: i })
                : await this.syncBalance({ address: n, chainId: r?.id, chainNamespace: i });
          }
        }
        async syncAccountInfo(e, t, r) {
          const n = this.getCaipAddress(r),
            o = t || n?.split(':')[1];
          if (!o) return;
          const i = `${r}:${o}:${e}`;
          this.setCaipAddress(i, r),
            await this.syncIdentity({ address: e, chainId: o, chainNamespace: r });
        }
        async syncReownName(e, t) {
          try {
            const r = await this.getReownName(e);
            if (r[0]) {
              const e = r[0];
              this.setProfileName(e.name, t);
            } else this.setProfileName(null, t);
          } catch {
            this.setProfileName(null, t);
          }
        }
        syncConnectedWalletInfo(e) {
          const t = dt.getConnectorId(e),
            r = Lc.getProviderId(e);
          if (r === Ha || r === Wa) {
            if (t) {
              const r = this.getConnectors().find((e) => e.id === t);
              if (r) {
                const { info: t, name: n, imageUrl: o } = r,
                  i = o || this.getConnectorImage(r);
                this.setConnectedWalletInfo({ name: n, icon: i, ...t }, e);
              }
            }
          } else if (r === Da) {
            const t = Lc.getProvider(e);
            t?.session &&
              this.setConnectedWalletInfo(
                {
                  ...t.session.peer.metadata,
                  name: t.session.peer.metadata.name,
                  icon: t.session.peer.metadata.icons?.[0],
                },
                e
              );
          } else if (t)
            if (t === Y.CONNECTOR_ID.COINBASE) {
              const t = this.getConnectors().find((e) => e.id === Y.CONNECTOR_ID.COINBASE);
              this.setConnectedWalletInfo(
                { name: 'Coinbase Wallet', icon: this.getConnectorImage(t) },
                e
              );
            } else this.setConnectedWalletInfo({ name: t }, e);
        }
        async syncBalance(e) {
          !R.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find(
            (t) => t.id.toString() === e.chainId?.toString()
          ) ||
            !e.chainId ||
            (await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace));
        }
        async updateNativeBalance(e, t, r) {
          const n = this.getAdapter(r),
            o = pa.getCaipNetworkByNamespace(r, t);
          if (n) {
            const i = await n.getBalance({
              address: e,
              chainId: t,
              caipNetwork: o,
              tokens: this.options.tokens,
            });
            this.setBalance(i.balance, i.symbol, r);
          }
        }
        async initializeUniversalAdapter() {
          const e = Pc.createLogger((e, ...t) => {
              e && this.handleAlertError(e), console.error(...t);
            }),
            t = {
              projectId: this.options?.projectId,
              metadata: {
                name: this.options?.metadata ? this.options?.metadata.name : '',
                description: this.options?.metadata ? this.options?.metadata.description : '',
                url: this.options?.metadata ? this.options?.metadata.url : '',
                icons: this.options?.metadata ? this.options?.metadata.icons : [''],
              },
              logger: e,
            };
          Ve.setManualWCControl(!!this.options?.manualWCControl),
            (this.universalProvider = this.options.universalProvider ?? (await i.Z.init(t))),
            this.listenWalletConnect();
        }
        listenWalletConnect() {
          this.universalProvider &&
            (this.universalProvider.on('display_uri', (e) => {
              Ct.setUri(e);
            }),
            this.universalProvider.on('connect', Ct.finalizeWcConnection),
            this.universalProvider.on('disconnect', () => {
              this.chainNamespaces.forEach((e) => {
                this.resetAccount(e);
              }),
                Ct.resetWcConnection();
            }),
            this.universalProvider.on('chainChanged', (e) => {
              const t = this.getCaipNetworks().find((t) => t.id == e),
                r = this.getCaipNetwork();
              t ? r?.id !== t?.id && this.setCaipNetwork(t) : this.setUnsupportedNetwork(e);
            }),
            this.universalProvider.on('session_event', (e) => {
              if (xd.isSessionEventData(e)) {
                const { name: t, data: r } = e.params.event;
                'accountsChanged' === t &&
                  Array.isArray(r) &&
                  Re.isCaipAddress(r[0]) &&
                  this.syncAccount(J.parseCaipAddress(r[0]));
              }
            }));
        }
        createUniversalProvider() {
          return (
            !this.universalProviderInitPromise &&
              Re.isClient() &&
              this.options?.projectId &&
              (this.universalProviderInitPromise = this.initializeUniversalAdapter()),
            this.universalProviderInitPromise
          );
        }
        async getUniversalProvider() {
          if (!this.universalProvider)
            try {
              await this.createUniversalProvider();
            } catch (e) {
              Je.sendEvent({
                type: 'error',
                event: 'INTERNAL_SDK_ERROR',
                properties: {
                  errorType: 'UniversalProviderInitError',
                  errorMessage: e instanceof Error ? e.message : 'Unknown',
                  uncaught: !1,
                },
              }),
                console.error('AppKit:getUniversalProvider - Cannot create provider', e);
            }
          return this.universalProvider;
        }
        handleAlertError(e) {
          const t = Object.entries(qa.UniversalProviderErrors).find(([, { message: t }]) =>
              e.message.includes(t)
            ),
            [r, n] = t ?? [],
            { message: o, alertErrorKey: i } = n ?? {};
          if (r && o && !this.reportedAlertErrors[r]) {
            const e = qa.ALERT_ERRORS[i];
            e && (Ze.open(e, 'error'), (this.reportedAlertErrors[r] = !0));
          }
        }
        getAdapter(e) {
          if (e) return this.chainAdapters?.[e];
        }
        createAdapter(e) {
          if (!e) return;
          const t = e.namespace;
          if (!t) return;
          this.createClients();
          const r = e;
          (r.namespace = t),
            r.construct({
              namespace: t,
              projectId: this.options?.projectId,
              networks: this.getCaipNetworks(),
            }),
            this.chainNamespaces.includes(t) || this.chainNamespaces.push(t),
            this.chainAdapters && (this.chainAdapters[t] = r);
        }
        async open(e) {
          return (
            await this.injectModalUi(),
            e?.uri && Ct.setUri(e.uri),
            e?.arguments && 'Swap' === e?.view
              ? Ca.open({ ...e, data: { swap: e.arguments } })
              : Ca.open(e)
          );
        }
        async close() {
          await this.injectModalUi(), Ca.close();
        }
        setLoading(e, t) {
          Ca.setLoading(e, t);
        }
        async disconnect(e) {
          await Ct.disconnect(e);
        }
        getError() {
          return '';
        }
        getChainId() {
          return pa.state.activeCaipNetwork?.id;
        }
        async switchNetwork(e) {
          const t = this.getCaipNetworks().find((t) => t.id === e.id);
          t
            ? await pa.switchActiveNetwork(t)
            : Ze.open(qa.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, 'error');
        }
        getWalletProvider() {
          return pa.state.activeChain ? Lc.state.providers[pa.state.activeChain] : null;
        }
        getWalletProviderType() {
          return Lc.getProviderId(pa.state.activeChain);
        }
        subscribeProviders(e) {
          return Lc.subscribeProviders(e);
        }
        getThemeMode() {
          return at.state.themeMode;
        }
        getThemeVariables() {
          return at.state.themeVariables;
        }
        setThemeMode(e) {
          at.setThemeMode(e), Xl(at.state.themeMode);
        }
        setTermsConditionsUrl(e) {
          Ve.setTermsConditionsUrl(e);
        }
        setPrivacyPolicyUrl(e) {
          Ve.setPrivacyPolicyUrl(e);
        }
        setThemeVariables(e) {
          at.setThemeVariables(e),
            (function (e) {
              Gl &&
                Kl &&
                Yl &&
                ((Gl.textContent = Jl(e).core.cssText),
                (Kl.textContent = Jl(e).dark.cssText),
                (Yl.textContent = Jl(e).light.cssText));
            })(at.state.themeVariables);
        }
        subscribeTheme(e) {
          return at.subscribe(e);
        }
        getWalletInfo() {
          return ba.state.connectedWalletInfo;
        }
        getAccount(e) {
          const t = dt.getAuthConnector(e),
            r = pa.getAccountData(e),
            n = pa.state.activeChain;
          if (r)
            return {
              allAccounts: r.allAccounts,
              caipAddress: r.caipAddress,
              address: Re.getPlainAddress(r.caipAddress),
              isConnected: !!r.caipAddress,
              status: r.status,
              embeddedWalletInfo: t
                ? {
                    user: r.user
                      ? { ...r.user, username: $e.getConnectedSocialUsername() }
                      : void 0,
                    authProvider: r.socialProvider || 'email',
                    accountType: r.preferredAccountTypes?.[e || n],
                    isSmartAccountDeployed: !!r.smartAccountDeployed,
                  }
                : void 0,
            };
        }
        subscribeAccount(e, t) {
          const r = () => {
            const r = this.getAccount(t);
            r && e(r);
          };
          t ? pa.subscribeChainProp('accountState', r, t) : pa.subscribe(r), dt.subscribe(r);
        }
        subscribeNetwork(e) {
          return pa.subscribe(({ activeCaipNetwork: t }) => {
            e({ caipNetwork: t, chainId: t?.id, caipNetworkId: t?.caipNetworkId });
          });
        }
        subscribeWalletInfo(e) {
          return ba.subscribeKey('connectedWalletInfo', e);
        }
        subscribeShouldUpdateToAddress(e) {
          ba.subscribeKey('shouldUpdateToAddress', e);
        }
        subscribeCaipNetworkChange(e) {
          pa.subscribeKey('activeCaipNetwork', e);
        }
        getState() {
          return kt.state;
        }
        subscribeState(e) {
          return kt.subscribe(e);
        }
        showErrorMessage(e) {
          ft.showError(e);
        }
        showSuccessMessage(e) {
          ft.showSuccess(e);
        }
        getEvent() {
          return { ...Je.state };
        }
        subscribeEvents(e) {
          return Je.subscribe(e);
        }
        replace(e) {
          it.replace(e);
        }
        redirect(e) {
          it.push(e);
        }
        popTransactionStack(e) {
          it.popTransactionStack(e);
        }
        isOpen() {
          return Ca.state.open;
        }
        isTransactionStackEmpty() {
          return 0 === it.state.transactionStack.length;
        }
        isTransactionShouldReplaceView() {
          return it.state.transactionStack[it.state.transactionStack.length - 1]?.replace;
        }
        static getInstance() {
          return this.instance;
        }
        updateFeatures(e) {
          Ve.setFeatures(e);
        }
        updateOptions(e) {
          const t = { ...(Ve.state || {}), ...e };
          Ve.setOptions(t);
        }
        setConnectMethodsOrder(e) {
          Ve.setConnectMethodsOrder(e);
        }
        setWalletFeaturesOrder(e) {
          Ve.setWalletFeaturesOrder(e);
        }
        setCollapseWallets(e) {
          Ve.setCollapseWallets(e);
        }
        setSocialsOrder(e) {
          Ve.setSocialsOrder(e);
        }
        getConnectMethodsOrder() {
          return zc.getConnectOrderMethod(Ve.state.features, dt.getConnectors());
        }
        addNetwork(e, t) {
          if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
          const r = this.extendCaipNetwork(t, this.options);
          this.getCaipNetworks().find((e) => e.id === r.id) || pa.addNetwork(r);
        }
        removeNetwork(e, t) {
          if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
          this.getCaipNetworks().find((e) => e.id === t) && pa.removeNetwork(e, t);
        }
      } {
        async open(e) {
          dt.isConnected() || (await super.open(e));
        }
        async close() {
          await super.close(), this.options.manualWCControl && Ct.finalizeWcConnection();
        }
        async syncIdentity(e) {
          return Promise.resolve();
        }
        async syncBalance(e) {
          return Promise.resolve();
        }
        async injectModalUi() {
          if (!Id && Re.isClient()) {
            if (
              (await Promise.resolve().then(function () {
                return kf;
              }),
              await Promise.resolve().then(function () {
                return aw;
              }),
              !document.querySelector('w3m-modal'))
            ) {
              const e = document.createElement('w3m-modal');
              !Ve.state.disableAppend &&
                !Ve.state.enableEmbedded &&
                document.body.insertAdjacentElement('beforeend', e);
            }
            Id = !0;
          }
        }
      }
      var Sd = Object.freeze({
          __proto__: null,
          createAppKit: function (e) {
            return new Nd({ ...e, basic: !0, sdkVersion: 'html-core-1.7.3' });
          },
          AppKit: Nd,
        }),
        _d = Object.defineProperty,
        Pd = Object.defineProperties,
        Td = Object.getOwnPropertyDescriptors,
        Od = Object.getOwnPropertySymbols,
        $d = Object.prototype.hasOwnProperty,
        Rd = Object.prototype.propertyIsEnumerable,
        Bd = (e, t, r) =>
          t in e
            ? _d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Ld = (e, t) => {
          for (var r in t || (t = {})) $d.call(t, r) && Bd(e, r, t[r]);
          if (Od) for (var r of Od(t)) Rd.call(t, r) && Bd(e, r, t[r]);
          return e;
        },
        Ud = (e, t) => Pd(e, Td(t));
      function Md(e) {
        if (e)
          return {
            '--w3m-font-family': e['--wcm-font-family'],
            '--w3m-accent': e['--wcm-accent-color'],
            '--w3m-color-mix': e['--wcm-background-color'],
            '--w3m-z-index': e['--wcm-z-index'] ? Number(e['--wcm-z-index']) : void 0,
            '--w3m-qr-color': e['--wcm-accent-color'],
            '--w3m-font-size-master': e['--wcm-text-medium-regular-size'],
            '--w3m-border-radius-master': e['--wcm-container-border-radius'],
            '--w3m-color-mix-strength': 0,
          };
      }
      const zd = (e) => {
        const [t, r] = e.split(':');
        return vd({
          id: r,
          caipNetworkId: e,
          chainNamespace: t,
          name: '',
          nativeCurrency: { name: '', symbol: '', decimals: 8 },
          rpcUrls: { default: { http: ['https://rpc.walletconnect.org/v1'] } },
        });
      };
      var jd = Object.freeze({
        __proto__: null,
        convertWCMToAppKitOptions: function (e) {
          var t, r, n, o, i, s, a;
          const c = null == (t = e.chains) ? void 0 : t.map(zd).filter(Boolean);
          if (0 === c.length) throw new Error('At least one chain must be specified');
          const l = c.find((t) => {
              var r;
              return t.id === (null == (r = e.defaultChain) ? void 0 : r.id);
            }),
            d = {
              projectId: e.projectId,
              networks: c,
              themeMode: e.themeMode,
              themeVariables: Md(e.themeVariables),
              chainImages: e.chainImages,
              connectorImages: e.walletImages,
              defaultNetwork: l,
              metadata: Ud(Ld({}, e.metadata), {
                name: (null == (r = e.metadata) ? void 0 : r.name) || 'WalletConnect',
                description:
                  (null == (n = e.metadata) ? void 0 : n.description) ||
                  'Connect to WalletConnect-compatible wallets',
                url: (null == (o = e.metadata) ? void 0 : o.url) || 'https://walletconnect.org',
                icons: (null == (i = e.metadata) ? void 0 : i.icons) || [
                  'https://walletconnect.org/walletconnect-logo.png',
                ],
              }),
              showWallets: !0,
              featuredWalletIds:
                'NONE' === e.explorerRecommendedWalletIds
                  ? []
                  : Array.isArray(e.explorerRecommendedWalletIds)
                    ? e.explorerRecommendedWalletIds
                    : [],
              excludeWalletIds:
                'ALL' === e.explorerExcludedWalletIds
                  ? []
                  : Array.isArray(e.explorerExcludedWalletIds)
                    ? e.explorerExcludedWalletIds
                    : [],
              enableEIP6963: !1,
              enableInjected: !1,
              enableCoinbase: !0,
              enableWalletConnect: !0,
              features: { email: !1, socials: !1 },
            };
          if (
            (null != (s = e.mobileWallets) && s.length) ||
            (null != (a = e.desktopWallets) && a.length)
          ) {
            const t = [
                ...(e.mobileWallets || []).map((e) => ({ id: e.id, name: e.name, links: e.links })),
                ...(e.desktopWallets || []).map((e) => ({
                  id: e.id,
                  name: e.name,
                  links: { native: e.links.native, universal: e.links.universal },
                })),
              ],
              r = [...(d.featuredWalletIds || []), ...(d.excludeWalletIds || [])],
              n = t.filter((e) => !r.includes(e.id));
            n.length && (d.customWallets = n);
          }
          return d;
        },
      });
      const Dd = { attribute: !0, type: String, converter: sl, reflect: !1, hasChanged: al },
        Wd = (e = Dd, t, r) => {
          const { kind: n, metadata: o } = r;
          let i = globalThis.litPropertyMetadata.get(o);
          if (
            (void 0 === i && globalThis.litPropertyMetadata.set(o, (i = new Map())),
            'setter' === n && ((e = Object.create(e)).wrapped = !0),
            i.set(r.name, e),
            'accessor' === n)
          ) {
            const { name: n } = r;
            return {
              set(r) {
                const o = t.get.call(this);
                t.set.call(this, r), this.requestUpdate(n, o, e);
              },
              init(t) {
                return void 0 !== t && this.C(n, void 0, e, t), t;
              },
            };
          }
          if ('setter' === n) {
            const { name: n } = r;
            return function (r) {
              const o = this[n];
              t.call(this, r), this.requestUpdate(n, o, e);
            };
          }
          throw Error('Unsupported decorator location: ' + n);
        };
      function Hd(e) {
        return (t, r) =>
          'object' == typeof r
            ? Wd(e, t, r)
            : ((e, t, r) => {
                const n = t.hasOwnProperty(r);
                return (
                  t.constructor.createProperty(r, e),
                  n ? Object.getOwnPropertyDescriptor(t, r) : void 0
                );
              })(e, t, r);
      }
      function Fd(e) {
        return Hd({ ...e, state: !0, attribute: !1 });
      }
      var Vd = Zc`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,
        qd = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Zd = class extends Zl {
        render() {
          return (
            (this.style.cssText = `\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding && rd.getSpacingStyles(this.padding, 0)};\n      padding-right: ${this.padding && rd.getSpacingStyles(this.padding, 1)};\n      padding-bottom: ${this.padding && rd.getSpacingStyles(this.padding, 2)};\n      padding-left: ${this.padding && rd.getSpacingStyles(this.padding, 3)};\n      margin-top: ${this.margin && rd.getSpacingStyles(this.margin, 0)};\n      margin-right: ${this.margin && rd.getSpacingStyles(this.margin, 1)};\n      margin-bottom: ${this.margin && rd.getSpacingStyles(this.margin, 2)};\n      margin-left: ${this.margin && rd.getSpacingStyles(this.margin, 3)};\n    `),
            Pl`<slot></slot>`
          );
        }
      };
      (Zd.styles = [Ql, Vd]),
        qd([Hd()], Zd.prototype, 'flexDirection', void 0),
        qd([Hd()], Zd.prototype, 'flexWrap', void 0),
        qd([Hd()], Zd.prototype, 'flexBasis', void 0),
        qd([Hd()], Zd.prototype, 'flexGrow', void 0),
        qd([Hd()], Zd.prototype, 'flexShrink', void 0),
        qd([Hd()], Zd.prototype, 'alignItems', void 0),
        qd([Hd()], Zd.prototype, 'justifyContent', void 0),
        qd([Hd()], Zd.prototype, 'columnGap', void 0),
        qd([Hd()], Zd.prototype, 'rowGap', void 0),
        qd([Hd()], Zd.prototype, 'gap', void 0),
        qd([Hd()], Zd.prototype, 'padding', void 0),
        qd([Hd()], Zd.prototype, 'margin', void 0),
        (Zd = qd([nd('wui-flex')], Zd));
      const Gd = (e) => e ?? $l,
        Kd = 1,
        Yd = 2,
        Xd =
          (e) =>
          (...t) => ({ _$litDirective$: e, values: t });
      class Jd {
        constructor(e) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(e, t, r) {
          (this._$Ct = e), (this._$AM = t), (this._$Ci = r);
        }
        _$AS(e, t) {
          return this.update(e, t);
        }
        update(e, t) {
          return this.render(...t);
        }
      }
      const Qd = (e, t) => {
          const r = e._$AN;
          if (void 0 === r) return !1;
          for (const n of r) n._$AO?.(t, !1), Qd(n, t);
          return !0;
        },
        eu = (e) => {
          let t, r;
          do {
            if (void 0 === (t = e._$AM)) break;
            (r = t._$AN), r.delete(e), (e = t);
          } while (0 === r?.size);
        },
        tu = (e) => {
          for (let t; (t = e._$AM); e = t) {
            let r = t._$AN;
            if (void 0 === r) t._$AN = r = new Set();
            else if (r.has(e)) break;
            r.add(e), ou(t);
          }
        };
      function ru(e) {
        void 0 !== this._$AN ? (eu(this), (this._$AM = e), tu(this)) : (this._$AM = e);
      }
      function nu(e, t = !1, r = 0) {
        const n = this._$AH,
          o = this._$AN;
        if (void 0 !== o && 0 !== o.size)
          if (t)
            if (Array.isArray(n)) for (let i = r; i < n.length; i++) Qd(n[i], !1), eu(n[i]);
            else null != n && (Qd(n, !1), eu(n));
          else Qd(this, e);
      }
      const ou = (e) => {
        e.type == Yd && ((e._$AP ??= nu), (e._$AQ ??= ru));
      };
      class iu extends Jd {
        constructor() {
          super(...arguments), (this._$AN = void 0);
        }
        _$AT(e, t, r) {
          super._$AT(e, t, r), tu(this), (this.isConnected = e._$AU);
        }
        _$AO(e, t = !0) {
          e !== this.isConnected &&
            ((this.isConnected = e), e ? this.reconnected?.() : this.disconnected?.()),
            t && (Qd(this, e), eu(this));
        }
        setValue(e) {
          if (((e) => void 0 === e.strings)(this._$Ct)) this._$Ct._$AI(e, this);
          else {
            const t = [...this._$Ct._$AH];
            (t[this._$Ci] = e), this._$Ct._$AI(t, this, 0);
          }
        }
        disconnected() {}
        reconnected() {}
      }
      class su {
        constructor(e) {
          this.G = e;
        }
        disconnect() {
          this.G = void 0;
        }
        reconnect(e) {
          this.G = e;
        }
        deref() {
          return this.G;
        }
      }
      class au {
        constructor() {
          (this.Y = void 0), (this.Z = void 0);
        }
        get() {
          return this.Y;
        }
        pause() {
          this.Y ??= new Promise((e) => (this.Z = e));
        }
        resume() {
          this.Z?.(), (this.Y = this.Z = void 0);
        }
      }
      const cu = (e) =>
          !((e) => null === e || ('object' != typeof e && 'function' != typeof e))(e) &&
          'function' == typeof e.then,
        lu = 1073741823;
      const du = Xd(
        class extends iu {
          constructor() {
            super(...arguments),
              (this._$Cwt = lu),
              (this._$Cbt = []),
              (this._$CK = new su(this)),
              (this._$CX = new au());
          }
          render(...e) {
            return e.find((e) => !cu(e)) ?? Ol;
          }
          update(e, t) {
            const r = this._$Cbt;
            let n = r.length;
            this._$Cbt = t;
            const o = this._$CK,
              i = this._$CX;
            this.isConnected || this.disconnected();
            for (let s = 0; s < t.length && !(s > this._$Cwt); s++) {
              const e = t[s];
              if (!cu(e)) return (this._$Cwt = s), e;
              (s < n && e === r[s]) ||
                ((this._$Cwt = lu),
                (n = 0),
                Promise.resolve(e).then(async (t) => {
                  for (; i.get(); ) await i.get();
                  const r = o.deref();
                  if (void 0 !== r) {
                    const n = r._$Cbt.indexOf(e);
                    n > -1 && n < r._$Cwt && ((r._$Cwt = n), r.setValue(t));
                  }
                }));
            }
            return Ol;
          }
          disconnected() {
            this._$CK.disconnect(), this._$CX.pause();
          }
          reconnected() {
            this._$CK.reconnect(this), this._$CX.resume();
          }
        }
      );
      const uu = new (class {
        constructor() {
          this.cache = new Map();
        }
        set(e, t) {
          this.cache.set(e, t);
        }
        get(e) {
          return this.cache.get(e);
        }
        has(e) {
          return this.cache.has(e);
        }
        delete(e) {
          this.cache.delete(e);
        }
        clear() {
          this.cache.clear();
        }
      })();
      var hu = Zc`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,
        pu = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      const gu = {
        add: async () =>
          (
            await Promise.resolve().then(function () {
              return lw;
            })
          ).addSvg,
        allWallets: async () =>
          (
            await Promise.resolve().then(function () {
              return uw;
            })
          ).allWalletsSvg,
        arrowBottomCircle: async () =>
          (
            await Promise.resolve().then(function () {
              return pw;
            })
          ).arrowBottomCircleSvg,
        appStore: async () =>
          (
            await Promise.resolve().then(function () {
              return fw;
            })
          ).appStoreSvg,
        apple: async () =>
          (
            await Promise.resolve().then(function () {
              return mw;
            })
          ).appleSvg,
        arrowBottom: async () =>
          (
            await Promise.resolve().then(function () {
              return bw;
            })
          ).arrowBottomSvg,
        arrowLeft: async () =>
          (
            await Promise.resolve().then(function () {
              return Cw;
            })
          ).arrowLeftSvg,
        arrowRight: async () =>
          (
            await Promise.resolve().then(function () {
              return kw;
            })
          ).arrowRightSvg,
        arrowTop: async () =>
          (
            await Promise.resolve().then(function () {
              return Ew;
            })
          ).arrowTopSvg,
        bank: async () =>
          (
            await Promise.resolve().then(function () {
              return Nw;
            })
          ).bankSvg,
        browser: async () =>
          (
            await Promise.resolve().then(function () {
              return _w;
            })
          ).browserSvg,
        card: async () =>
          (
            await Promise.resolve().then(function () {
              return Tw;
            })
          ).cardSvg,
        checkmark: async () =>
          (
            await Promise.resolve().then(function () {
              return $w;
            })
          ).checkmarkSvg,
        checkmarkBold: async () =>
          (
            await Promise.resolve().then(function () {
              return Bw;
            })
          ).checkmarkBoldSvg,
        chevronBottom: async () =>
          (
            await Promise.resolve().then(function () {
              return Uw;
            })
          ).chevronBottomSvg,
        chevronLeft: async () =>
          (
            await Promise.resolve().then(function () {
              return zw;
            })
          ).chevronLeftSvg,
        chevronRight: async () =>
          (
            await Promise.resolve().then(function () {
              return Dw;
            })
          ).chevronRightSvg,
        chevronTop: async () =>
          (
            await Promise.resolve().then(function () {
              return Hw;
            })
          ).chevronTopSvg,
        chromeStore: async () =>
          (
            await Promise.resolve().then(function () {
              return Vw;
            })
          ).chromeStoreSvg,
        clock: async () =>
          (
            await Promise.resolve().then(function () {
              return Zw;
            })
          ).clockSvg,
        close: async () =>
          (
            await Promise.resolve().then(function () {
              return Kw;
            })
          ).closeSvg,
        compass: async () =>
          (
            await Promise.resolve().then(function () {
              return Xw;
            })
          ).compassSvg,
        coinPlaceholder: async () =>
          (
            await Promise.resolve().then(function () {
              return Qw;
            })
          ).coinPlaceholderSvg,
        copy: async () =>
          (
            await Promise.resolve().then(function () {
              return tm;
            })
          ).copySvg,
        cursor: async () =>
          (
            await Promise.resolve().then(function () {
              return nm;
            })
          ).cursorSvg,
        cursorTransparent: async () =>
          (
            await Promise.resolve().then(function () {
              return im;
            })
          ).cursorTransparentSvg,
        desktop: async () =>
          (
            await Promise.resolve().then(function () {
              return am;
            })
          ).desktopSvg,
        disconnect: async () =>
          (
            await Promise.resolve().then(function () {
              return lm;
            })
          ).disconnectSvg,
        discord: async () =>
          (
            await Promise.resolve().then(function () {
              return um;
            })
          ).discordSvg,
        etherscan: async () =>
          (
            await Promise.resolve().then(function () {
              return pm;
            })
          ).etherscanSvg,
        extension: async () =>
          (
            await Promise.resolve().then(function () {
              return fm;
            })
          ).extensionSvg,
        externalLink: async () =>
          (
            await Promise.resolve().then(function () {
              return mm;
            })
          ).externalLinkSvg,
        facebook: async () =>
          (
            await Promise.resolve().then(function () {
              return bm;
            })
          ).facebookSvg,
        farcaster: async () =>
          (
            await Promise.resolve().then(function () {
              return Cm;
            })
          ).farcasterSvg,
        filters: async () =>
          (
            await Promise.resolve().then(function () {
              return km;
            })
          ).filtersSvg,
        github: async () =>
          (
            await Promise.resolve().then(function () {
              return Em;
            })
          ).githubSvg,
        google: async () =>
          (
            await Promise.resolve().then(function () {
              return Nm;
            })
          ).googleSvg,
        helpCircle: async () =>
          (
            await Promise.resolve().then(function () {
              return _m;
            })
          ).helpCircleSvg,
        image: async () =>
          (
            await Promise.resolve().then(function () {
              return Tm;
            })
          ).imageSvg,
        id: async () =>
          (
            await Promise.resolve().then(function () {
              return $m;
            })
          ).idSvg,
        infoCircle: async () =>
          (
            await Promise.resolve().then(function () {
              return Bm;
            })
          ).infoCircleSvg,
        lightbulb: async () =>
          (
            await Promise.resolve().then(function () {
              return Um;
            })
          ).lightbulbSvg,
        mail: async () =>
          (
            await Promise.resolve().then(function () {
              return zm;
            })
          ).mailSvg,
        mobile: async () =>
          (
            await Promise.resolve().then(function () {
              return Dm;
            })
          ).mobileSvg,
        more: async () =>
          (
            await Promise.resolve().then(function () {
              return Hm;
            })
          ).moreSvg,
        networkPlaceholder: async () =>
          (
            await Promise.resolve().then(function () {
              return Vm;
            })
          ).networkPlaceholderSvg,
        nftPlaceholder: async () =>
          (
            await Promise.resolve().then(function () {
              return Zm;
            })
          ).nftPlaceholderSvg,
        off: async () =>
          (
            await Promise.resolve().then(function () {
              return Km;
            })
          ).offSvg,
        playStore: async () =>
          (
            await Promise.resolve().then(function () {
              return Xm;
            })
          ).playStoreSvg,
        plus: async () =>
          (
            await Promise.resolve().then(function () {
              return Qm;
            })
          ).plusSvg,
        qrCode: async () =>
          (
            await Promise.resolve().then(function () {
              return tv;
            })
          ).qrCodeIcon,
        recycleHorizontal: async () =>
          (
            await Promise.resolve().then(function () {
              return nv;
            })
          ).recycleHorizontalSvg,
        refresh: async () =>
          (
            await Promise.resolve().then(function () {
              return iv;
            })
          ).refreshSvg,
        search: async () =>
          (
            await Promise.resolve().then(function () {
              return av;
            })
          ).searchSvg,
        send: async () =>
          (
            await Promise.resolve().then(function () {
              return lv;
            })
          ).sendSvg,
        swapHorizontal: async () =>
          (
            await Promise.resolve().then(function () {
              return uv;
            })
          ).swapHorizontalSvg,
        swapHorizontalMedium: async () =>
          (
            await Promise.resolve().then(function () {
              return pv;
            })
          ).swapHorizontalMediumSvg,
        swapHorizontalBold: async () =>
          (
            await Promise.resolve().then(function () {
              return fv;
            })
          ).swapHorizontalBoldSvg,
        swapHorizontalRoundedBold: async () =>
          (
            await Promise.resolve().then(function () {
              return mv;
            })
          ).swapHorizontalRoundedBoldSvg,
        swapVertical: async () =>
          (
            await Promise.resolve().then(function () {
              return bv;
            })
          ).swapVerticalSvg,
        telegram: async () =>
          (
            await Promise.resolve().then(function () {
              return Cv;
            })
          ).telegramSvg,
        threeDots: async () =>
          (
            await Promise.resolve().then(function () {
              return kv;
            })
          ).threeDotsSvg,
        twitch: async () =>
          (
            await Promise.resolve().then(function () {
              return Ev;
            })
          ).twitchSvg,
        twitter: async () =>
          (
            await Promise.resolve().then(function () {
              return Nv;
            })
          ).xSvg,
        twitterIcon: async () =>
          (
            await Promise.resolve().then(function () {
              return _v;
            })
          ).twitterIconSvg,
        verify: async () =>
          (
            await Promise.resolve().then(function () {
              return Tv;
            })
          ).verifySvg,
        verifyFilled: async () =>
          (
            await Promise.resolve().then(function () {
              return $v;
            })
          ).verifyFilledSvg,
        wallet: async () =>
          (
            await Promise.resolve().then(function () {
              return Bv;
            })
          ).walletSvg,
        walletConnect: async () =>
          (
            await Promise.resolve().then(function () {
              return zv;
            })
          ).walletConnectSvg,
        walletConnectLightBrown: async () =>
          (
            await Promise.resolve().then(function () {
              return zv;
            })
          ).walletConnectLightBrownSvg,
        walletConnectBrown: async () =>
          (
            await Promise.resolve().then(function () {
              return zv;
            })
          ).walletConnectBrownSvg,
        walletPlaceholder: async () =>
          (
            await Promise.resolve().then(function () {
              return Dv;
            })
          ).walletPlaceholderSvg,
        warningCircle: async () =>
          (
            await Promise.resolve().then(function () {
              return Hv;
            })
          ).warningCircleSvg,
        x: async () =>
          (
            await Promise.resolve().then(function () {
              return Nv;
            })
          ).xSvg,
        info: async () =>
          (
            await Promise.resolve().then(function () {
              return Vv;
            })
          ).infoSvg,
        exclamationTriangle: async () =>
          (
            await Promise.resolve().then(function () {
              return Zv;
            })
          ).exclamationTriangleSvg,
        reown: async () =>
          (
            await Promise.resolve().then(function () {
              return Kv;
            })
          ).reownSvg,
      };
      let fu = class extends Zl {
        constructor() {
          super(...arguments),
            (this.size = 'md'),
            (this.name = 'copy'),
            (this.color = 'fg-300'),
            (this.aspectRatio = '1 / 1');
        }
        render() {
          return (
            (this.style.cssText = `\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `),
            Pl`${du(
              (async function (e) {
                if (uu.has(e)) return uu.get(e);
                const t = (gu[e] ?? gu.copy)();
                return uu.set(e, t), t;
              })(this.name),
              Pl`<div class="fallback"></div>`
            )}`
          );
        }
      };
      (fu.styles = [Ql, td, hu]),
        pu([Hd()], fu.prototype, 'size', void 0),
        pu([Hd()], fu.prototype, 'name', void 0),
        pu([Hd()], fu.prototype, 'color', void 0),
        pu([Hd()], fu.prototype, 'aspectRatio', void 0),
        (fu = pu([nd('wui-icon')], fu));
      const wu = Xd(
        class extends Jd {
          constructor(e) {
            if ((super(e), e.type !== Kd || 'class' !== e.name || e.strings?.length > 2))
              throw Error(
                '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
              );
          }
          render(e) {
            return (
              ' ' +
              Object.keys(e)
                .filter((t) => e[t])
                .join(' ') +
              ' '
            );
          }
          update(e, [t]) {
            if (void 0 === this.st) {
              (this.st = new Set()),
                void 0 !== e.strings &&
                  (this.nt = new Set(
                    e.strings
                      .join(' ')
                      .split(/\s/)
                      .filter((e) => '' !== e)
                  ));
              for (const e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
              return this.render(t);
            }
            const r = e.element.classList;
            for (const n of this.st) n in t || (r.remove(n), this.st.delete(n));
            for (const n in t) {
              const e = !!t[n];
              e === this.st.has(n) ||
                this.nt?.has(n) ||
                (e ? (r.add(n), this.st.add(n)) : (r.remove(n), this.st.delete(n)));
            }
            return Ol;
          }
        }
      );
      var mu = Zc`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,
        vu = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let bu = class extends Zl {
        constructor() {
          super(...arguments),
            (this.variant = 'paragraph-500'),
            (this.color = 'fg-300'),
            (this.align = 'left'),
            (this.lineClamp = void 0);
        }
        render() {
          const e = {
            [`wui-font-${this.variant}`]: !0,
            [`wui-color-${this.color}`]: !0,
            [`wui-line-clamp-${this.lineClamp}`]: !!this.lineClamp,
          };
          return (
            (this.style.cssText = `\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `),
            Pl`<slot class=${wu(e)}></slot>`
          );
        }
      };
      (bu.styles = [Ql, mu]),
        vu([Hd()], bu.prototype, 'variant', void 0),
        vu([Hd()], bu.prototype, 'color', void 0),
        vu([Hd()], bu.prototype, 'align', void 0),
        vu([Hd()], bu.prototype, 'lineClamp', void 0),
        (bu = vu([nd('wui-text')], bu));
      var yu = Zc`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,
        Cu = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let xu = class extends Zl {
        constructor() {
          super(...arguments),
            (this.size = 'md'),
            (this.backgroundColor = 'accent-100'),
            (this.iconColor = 'accent-100'),
            (this.background = 'transparent'),
            (this.border = !1),
            (this.borderColor = 'wui-color-bg-125'),
            (this.icon = 'copy');
        }
        render() {
          const e = this.iconSize || this.size,
            t = 'lg' === this.size,
            r = 'xl' === this.size,
            n = t ? '12%' : '16%',
            o = t ? 'xxs' : r ? 's' : '3xl',
            i = 'gray' === this.background,
            s = 'opaque' === this.background,
            a =
              ('accent-100' === this.backgroundColor && s) ||
              ('success-100' === this.backgroundColor && s) ||
              ('error-100' === this.backgroundColor && s) ||
              ('inverse-100' === this.backgroundColor && s);
          let c = `var(--wui-color-${this.backgroundColor})`;
          return (
            a
              ? (c = `var(--wui-icon-box-bg-${this.backgroundColor})`)
              : i && (c = `var(--wui-color-gray-${this.backgroundColor})`),
            (this.style.cssText = `\n       --local-bg-value: ${c};\n       --local-bg-mix: ${a || i ? '100%' : n};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${'wui-color-bg-125' === this.borderColor ? '2px' : '1px'} solid ${this.border ? `var(--${this.borderColor})` : 'transparent'}\n   `),
            Pl` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `
          );
        }
      };
      (xu.styles = [Ql, ed, yu]),
        Cu([Hd()], xu.prototype, 'size', void 0),
        Cu([Hd()], xu.prototype, 'backgroundColor', void 0),
        Cu([Hd()], xu.prototype, 'iconColor', void 0),
        Cu([Hd()], xu.prototype, 'iconSize', void 0),
        Cu([Hd()], xu.prototype, 'background', void 0),
        Cu([Hd({ type: Boolean })], xu.prototype, 'border', void 0),
        Cu([Hd()], xu.prototype, 'borderColor', void 0),
        Cu([Hd()], xu.prototype, 'icon', void 0),
        (xu = Cu([nd('wui-icon-box')], xu));
      var ku = Zc`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,
        Au = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Eu = class extends Zl {
        constructor() {
          super(...arguments),
            (this.src = './path/to/image.jpg'),
            (this.alt = 'Image'),
            (this.size = void 0);
        }
        render() {
          return (
            (this.style.cssText = `\n      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};\n      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};\n      `),
            Pl`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`
          );
        }
        handleImageError() {
          this.dispatchEvent(new CustomEvent('onLoadError', { bubbles: !0, composed: !0 }));
        }
      };
      (Eu.styles = [Ql, td, ku]),
        Au([Hd()], Eu.prototype, 'src', void 0),
        Au([Hd()], Eu.prototype, 'alt', void 0),
        Au([Hd()], Eu.prototype, 'size', void 0),
        (Eu = Au([nd('wui-image')], Eu));
      var Iu = Zc`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,
        Nu = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Su = class extends Zl {
        constructor() {
          super(...arguments),
            (this.size = 'md'),
            (this.name = ''),
            (this.installed = !1),
            (this.badgeSize = 'xs');
        }
        render() {
          let e = 'xxs';
          return (
            (e = 'lg' === this.size ? 'm' : 'md' === this.size ? 'xs' : 'xxs'),
            (this.style.cssText = `\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `),
            this.walletIcon && (this.dataset.walletIcon = this.walletIcon),
            Pl`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `
          );
        }
        templateVisual() {
          return this.imageSrc
            ? Pl`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
            : this.walletIcon
              ? Pl`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`
              : Pl`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
        }
      };
      (Su.styles = [ed, Ql, Iu]),
        Nu([Hd()], Su.prototype, 'size', void 0),
        Nu([Hd()], Su.prototype, 'name', void 0),
        Nu([Hd()], Su.prototype, 'imageSrc', void 0),
        Nu([Hd()], Su.prototype, 'walletIcon', void 0),
        Nu([Hd({ type: Boolean })], Su.prototype, 'installed', void 0),
        Nu([Hd()], Su.prototype, 'badgeSize', void 0),
        (Su = Nu([nd('wui-wallet-image')], Su));
      var _u = Zc`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,
        Pu = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Tu = class extends Zl {
        constructor() {
          super(...arguments), (this.walletImages = []);
        }
        render() {
          const e = this.walletImages.length < 4;
          return Pl`${this.walletImages.slice(0, 4).map(
            ({ src: e, walletName: t }) => Pl`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${Gd(t)}
            ></wui-wallet-image>
          `
          )}
      ${e ? [...Array(4 - this.walletImages.length)].map(() => Pl` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`;
        }
      };
      (Tu.styles = [Ql, _u]),
        Pu([Hd({ type: Array })], Tu.prototype, 'walletImages', void 0),
        (Tu = Pu([nd('wui-all-wallets-image')], Tu));
      var Ou = Zc`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,
        $u = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Ru = class extends Zl {
        constructor() {
          super(...arguments), (this.variant = 'main'), (this.size = 'lg');
        }
        render() {
          (this.dataset.variant = this.variant), (this.dataset.size = this.size);
          const e = 'md' === this.size ? 'mini-700' : 'micro-700';
          return Pl`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `;
        }
      };
      (Ru.styles = [Ql, Ou]),
        $u([Hd()], Ru.prototype, 'variant', void 0),
        $u([Hd()], Ru.prototype, 'size', void 0),
        (Ru = $u([nd('wui-tag')], Ru));
      var Bu = Zc`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,
        Lu = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Uu = class extends Zl {
        constructor() {
          super(...arguments),
            (this.walletImages = []),
            (this.imageSrc = ''),
            (this.name = ''),
            (this.tabIdx = void 0),
            (this.installed = !1),
            (this.disabled = !1),
            (this.showAllWallets = !1),
            (this.loading = !1),
            (this.loadingSpinnerColor = 'accent-100');
        }
        render() {
          return Pl`
      <button ?disabled=${this.disabled} tabindex=${Gd(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `;
        }
        templateAllWallets() {
          return this.showAllWallets && this.imageSrc
            ? Pl` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `
            : this.showAllWallets && this.walletIcon
              ? Pl` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `
              : null;
        }
        templateWalletImage() {
          return !this.showAllWallets && this.imageSrc
            ? Pl`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`
            : this.showAllWallets || this.imageSrc
              ? null
              : Pl`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`;
        }
        templateStatus() {
          return this.loading
            ? Pl`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`
            : this.tagLabel && this.tagVariant
              ? Pl`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`
              : this.icon
                ? Pl`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`
                : null;
        }
      };
      (Uu.styles = [Ql, ed, Bu]),
        Lu([Hd({ type: Array })], Uu.prototype, 'walletImages', void 0),
        Lu([Hd()], Uu.prototype, 'imageSrc', void 0),
        Lu([Hd()], Uu.prototype, 'name', void 0),
        Lu([Hd()], Uu.prototype, 'tagLabel', void 0),
        Lu([Hd()], Uu.prototype, 'tagVariant', void 0),
        Lu([Hd()], Uu.prototype, 'icon', void 0),
        Lu([Hd()], Uu.prototype, 'walletIcon', void 0),
        Lu([Hd()], Uu.prototype, 'tabIdx', void 0),
        Lu([Hd({ type: Boolean })], Uu.prototype, 'installed', void 0),
        Lu([Hd({ type: Boolean })], Uu.prototype, 'disabled', void 0),
        Lu([Hd({ type: Boolean })], Uu.prototype, 'showAllWallets', void 0),
        Lu([Hd({ type: Boolean })], Uu.prototype, 'loading', void 0),
        Lu([Hd({ type: String })], Uu.prototype, 'loadingSpinnerColor', void 0),
        (Uu = Lu([nd('wui-list-wallet')], Uu));
      var Mu = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let zu = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            (this.count = nt.state.count),
            (this.isFetchingRecommendedWallets = nt.state.isFetchingRecommendedWallets),
            this.unsubscribe.push(
              dt.subscribeKey('connectors', (e) => (this.connectors = e)),
              nt.subscribeKey('count', (e) => (this.count = e)),
              nt.subscribeKey(
                'isFetchingRecommendedWallets',
                (e) => (this.isFetchingRecommendedWallets = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors.find((e) => 'walletConnect' === e.id),
            { allWallets: t } = Ve.state;
          if (!e || 'HIDE' === t || ('ONLY_MOBILE' === t && !Re.isMobile())) return null;
          const r = nt.state.featured.length,
            n = this.count + r,
            o = n < 10 ? n : 10 * Math.floor(n / 10),
            i = o < n ? `${o}+` : `${o}`;
          return Pl`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${i}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${Gd(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets ? 'fg-300' : 'accent-100'}
      ></wui-list-wallet>
    `;
        }
        onAllWallets() {
          Je.sendEvent({ type: 'track', event: 'CLICK_ALL_WALLETS' }), it.push('AllWallets');
        }
      };
      Mu([Hd()], zu.prototype, 'tabIdx', void 0),
        Mu([Fd()], zu.prototype, 'connectors', void 0),
        Mu([Fd()], zu.prototype, 'count', void 0),
        Mu([Fd()], zu.prototype, 'isFetchingRecommendedWallets', void 0),
        (zu = Mu([nd('w3m-all-wallets-widget')], zu));
      var ju = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Du = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            this.unsubscribe.push(dt.subscribeKey('connectors', (e) => (this.connectors = e)));
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors.filter((e) => 'ANNOUNCED' === e.type);
          return e?.length
            ? Pl`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(jc.showConnector).map(
          (e) => Pl`
              <wui-list-wallet
                imageSrc=${Gd(We.getConnectorImage(e))}
                name=${e.name ?? 'Unknown'}
                @click=${() => this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${Gd(this.tabIdx)}
              >
              </wui-list-wallet>
            `
        )}
      </wui-flex>
    `
            : ((this.style.cssText = 'display: none'), null);
        }
        onConnector(e) {
          'walletConnect' === e.id
            ? Re.isMobile()
              ? it.push('AllWallets')
              : it.push('ConnectingWalletConnect')
            : it.push('ConnectingExternal', { connector: e });
        }
      };
      ju([Hd()], Du.prototype, 'tabIdx', void 0),
        ju([Fd()], Du.prototype, 'connectors', void 0),
        (Du = ju([nd('w3m-connect-announced-widget')], Du));
      var Wu = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Hu = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            (this.loading = !1),
            this.unsubscribe.push(dt.subscribeKey('connectors', (e) => (this.connectors = e))),
            Re.isTelegram() &&
              Re.isIos() &&
              ((this.loading = !Ct.state.wcUri),
              this.unsubscribe.push(Ct.subscribeKey('wcUri', (e) => (this.loading = !e))));
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const { customWallets: e } = Ve.state;
          if (!e?.length) return (this.style.cssText = 'display: none'), null;
          const t = this.filterOutDuplicateWallets(e);
          return Pl`<wui-flex flexDirection="column" gap="xs">
      ${t.map(
        (e) => Pl`
          <wui-list-wallet
            imageSrc=${Gd(We.getWalletImage(e))}
            name=${e.name ?? 'Unknown'}
            @click=${() => this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${Gd(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `
      )}
    </wui-flex>`;
        }
        filterOutDuplicateWallets(e) {
          const t = $e.getRecentWallets(),
            r = this.connectors.map((e) => e.info?.rdns).filter(Boolean),
            n = t.map((e) => e.rdns).filter(Boolean),
            o = r.concat(n);
          if (o.includes('io.metamask.mobile') && Re.isMobile()) {
            const e = o.indexOf('io.metamask.mobile');
            o[e] = 'io.metamask';
          }
          return e.filter((e) => !o.includes(String(e?.rdns)));
        }
        onConnectWallet(e) {
          this.loading || it.push('ConnectingWalletConnect', { wallet: e });
        }
      };
      Wu([Hd()], Hu.prototype, 'tabIdx', void 0),
        Wu([Fd()], Hu.prototype, 'connectors', void 0),
        Wu([Fd()], Hu.prototype, 'loading', void 0),
        (Hu = Wu([nd('w3m-connect-custom-widget')], Hu));
      var Fu = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Vu = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            this.unsubscribe.push(dt.subscribeKey('connectors', (e) => (this.connectors = e)));
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors
            .filter((e) => 'EXTERNAL' === e.type)
            .filter(jc.showConnector)
            .filter((e) => e.id !== Y.CONNECTOR_ID.COINBASE_SDK);
          return e?.length
            ? Pl`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(
          (e) => Pl`
            <wui-list-wallet
              imageSrc=${Gd(We.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name ?? 'Unknown'}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${() => this.onConnector(e)}
              tabIdx=${Gd(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
            : ((this.style.cssText = 'display: none'), null);
        }
        onConnector(e) {
          it.push('ConnectingExternal', { connector: e });
        }
      };
      Fu([Hd()], Vu.prototype, 'tabIdx', void 0),
        Fu([Fd()], Vu.prototype, 'connectors', void 0),
        (Vu = Fu([nd('w3m-connect-external-widget')], Vu));
      var qu = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Zu = class extends Zl {
        constructor() {
          super(...arguments), (this.tabIdx = void 0), (this.wallets = []);
        }
        render() {
          return this.wallets.length
            ? Pl`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(
          (e) => Pl`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${Gd(We.getWalletImage(e))}
              name=${e.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(e)}
              tabIdx=${Gd(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
            : ((this.style.cssText = 'display: none'), null);
        }
        onConnectWallet(e) {
          dt.selectWalletConnector(e);
        }
      };
      qu([Hd()], Zu.prototype, 'tabIdx', void 0),
        qu([Hd()], Zu.prototype, 'wallets', void 0),
        (Zu = qu([nd('w3m-connect-featured-widget')], Zu));
      var Gu = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Ku = class extends Zl {
        constructor() {
          super(...arguments), (this.tabIdx = void 0), (this.connectors = []);
        }
        render() {
          const e = this.connectors;
          return !e?.length || (1 === e.length && 'Browser Wallet' === e[0]?.name && !Re.isMobile())
            ? ((this.style.cssText = 'display: none'), null)
            : Pl`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e) => {
          const t = e.info?.rdns;
          return Re.isMobile() || 'Browser Wallet' !== e.name
            ? t || Ct.checkInstalled()
              ? jc.showConnector(e)
                ? Pl`
            <wui-list-wallet
              imageSrc=${Gd(We.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name ?? 'Unknown'}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${() => this.onConnector(e)}
              tabIdx=${Gd(this.tabIdx)}
            >
            </wui-list-wallet>
          `
                : null
              : ((this.style.cssText = 'display: none'), null)
            : null;
        })}
      </wui-flex>
    `;
        }
        onConnector(e) {
          dt.setActiveConnector(e), it.push('ConnectingExternal', { connector: e });
        }
      };
      Gu([Hd()], Ku.prototype, 'tabIdx', void 0),
        Gu([Hd()], Ku.prototype, 'connectors', void 0),
        (Ku = Gu([nd('w3m-connect-injected-widget')], Ku));
      var Yu = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Xu = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            this.unsubscribe.push(dt.subscribeKey('connectors', (e) => (this.connectors = e)));
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors.filter(
            (e) => 'MULTI_CHAIN' === e.type && 'WalletConnect' !== e.name
          );
          return e?.length
            ? Pl`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(
          (e) => Pl`
            <wui-list-wallet
              imageSrc=${Gd(We.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name ?? 'Unknown'}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${() => this.onConnector(e)}
              tabIdx=${Gd(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
            : ((this.style.cssText = 'display: none'), null);
        }
        onConnector(e) {
          dt.setActiveConnector(e), it.push('ConnectingMultiChain');
        }
      };
      Yu([Hd()], Xu.prototype, 'tabIdx', void 0),
        Yu([Fd()], Xu.prototype, 'connectors', void 0),
        (Xu = Yu([nd('w3m-connect-multi-chain-widget')], Xu));
      var Ju = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Qu = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            (this.loading = !1),
            this.unsubscribe.push(dt.subscribeKey('connectors', (e) => (this.connectors = e))),
            Re.isTelegram() &&
              Re.isIos() &&
              ((this.loading = !Ct.state.wcUri),
              this.unsubscribe.push(Ct.subscribeKey('wcUri', (e) => (this.loading = !e))));
        }
        render() {
          const e = $e
            .getRecentWallets()
            .filter((e) => !zc.isExcluded(e))
            .filter((e) => !this.hasWalletConnector(e))
            .filter((e) => this.isWalletCompatibleWithCurrentChain(e));
          return e.length
            ? Pl`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(
          (e) => Pl`
            <wui-list-wallet
              imageSrc=${Gd(We.getWalletImage(e))}
              name=${e.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${Gd(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
            : ((this.style.cssText = 'display: none'), null);
        }
        onConnectWallet(e) {
          this.loading || dt.selectWalletConnector(e);
        }
        hasWalletConnector(e) {
          return this.connectors.some((t) => t.id === e.id || t.name === e.name);
        }
        isWalletCompatibleWithCurrentChain(e) {
          const t = pa.state.activeChain;
          return (
            !t ||
            !e.chains ||
            e.chains.some((e) => {
              const r = e.split(':')[0];
              return t === r;
            })
          );
        }
      };
      Ju([Hd()], Qu.prototype, 'tabIdx', void 0),
        Ju([Fd()], Qu.prototype, 'connectors', void 0),
        Ju([Fd()], Qu.prototype, 'loading', void 0),
        (Qu = Ju([nd('w3m-connect-recent-widget')], Qu));
      var eh = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let th = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.wallets = []),
            (this.loading = !1),
            Re.isTelegram() &&
              Re.isIos() &&
              ((this.loading = !Ct.state.wcUri),
              this.unsubscribe.push(Ct.subscribeKey('wcUri', (e) => (this.loading = !e))));
        }
        render() {
          const { connectors: e } = dt.state,
            { customWallets: t, featuredWalletIds: r } = Ve.state,
            n = $e.getRecentWallets(),
            o = e.find((e) => 'walletConnect' === e.id),
            i = e
              .filter(
                (e) => 'INJECTED' === e.type || 'ANNOUNCED' === e.type || 'MULTI_CHAIN' === e.type
              )
              .filter((e) => 'Browser Wallet' !== e.name);
          if (!o) return null;
          if (r || t || !this.wallets.length) return (this.style.cssText = 'display: none'), null;
          const s = i.length + n.length,
            a = Math.max(0, 2 - s),
            c = zc.filterOutDuplicateWallets(this.wallets).slice(0, a);
          return c.length
            ? Pl`
      <wui-flex flexDirection="column" gap="xs">
        ${c.map(
          (e) => Pl`
            <wui-list-wallet
              imageSrc=${Gd(We.getWalletImage(e))}
              name=${e?.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(e)}
              tabIdx=${Gd(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
            : ((this.style.cssText = 'display: none'), null);
        }
        onConnectWallet(e) {
          if (this.loading) return;
          const t = dt.getConnector(e.id, e.rdns);
          t
            ? it.push('ConnectingExternal', { connector: t })
            : it.push('ConnectingWalletConnect', { wallet: e });
        }
      };
      eh([Hd()], th.prototype, 'tabIdx', void 0),
        eh([Hd()], th.prototype, 'wallets', void 0),
        eh([Fd()], th.prototype, 'loading', void 0),
        (th = eh([nd('w3m-connect-recommended-widget')], th));
      var rh = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let nh = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            (this.connectorImages = ze.state.connectorImages),
            this.unsubscribe.push(
              dt.subscribeKey('connectors', (e) => (this.connectors = e)),
              ze.subscribeKey('connectorImages', (e) => (this.connectorImages = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          if (Re.isMobile()) return (this.style.cssText = 'display: none'), null;
          const e = this.connectors.find((e) => 'walletConnect' === e.id);
          if (!e) return (this.style.cssText = 'display: none'), null;
          const t = e.imageUrl || this.connectorImages[e?.imageId ?? ''];
          return Pl`
      <wui-list-wallet
        imageSrc=${Gd(t)}
        name=${e.name ?? 'Unknown'}
        @click=${() => this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${Gd(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
        }
        onConnector(e) {
          dt.setActiveConnector(e), it.push('ConnectingWalletConnect');
        }
      };
      rh([Hd()], nh.prototype, 'tabIdx', void 0),
        rh([Fd()], nh.prototype, 'connectors', void 0),
        rh([Fd()], nh.prototype, 'connectorImages', void 0),
        (nh = rh([nd('w3m-connect-walletconnect-widget')], nh));
      var oh = Zc`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,
        ih = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let sh = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = dt.state.connectors),
            (this.recommended = nt.state.recommended),
            (this.featured = nt.state.featured),
            this.unsubscribe.push(
              dt.subscribeKey('connectors', (e) => (this.connectors = e)),
              nt.subscribeKey('recommended', (e) => (this.recommended = e)),
              nt.subscribeKey('featured', (e) => (this.featured = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return Pl`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `;
        }
        connectorListTemplate() {
          const {
            custom: e,
            recent: t,
            announced: r,
            injected: n,
            multiChain: o,
            recommended: i,
            featured: s,
            external: a,
          } = jc.getConnectorsByType(this.connectors, this.recommended, this.featured);
          return jc
            .getConnectorTypeOrder({
              custom: e,
              recent: t,
              announced: r,
              injected: n,
              multiChain: o,
              recommended: i,
              featured: s,
              external: a,
            })
            .map((e) => {
              switch (e) {
                case 'injected':
                  return Pl`
            ${
              o.length
                ? Pl`<w3m-connect-multi-chain-widget
                  tabIdx=${Gd(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`
                : null
            }
            ${
              r.length
                ? Pl`<w3m-connect-announced-widget
                  tabIdx=${Gd(this.tabIdx)}
                ></w3m-connect-announced-widget>`
                : null
            }
            ${
              n.length
                ? Pl`<w3m-connect-injected-widget
                  .connectors=${n}
                  tabIdx=${Gd(this.tabIdx)}
                ></w3m-connect-injected-widget>`
                : null
            }
          `;
                case 'walletConnect':
                  return Pl`<w3m-connect-walletconnect-widget
            tabIdx=${Gd(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
                case 'recent':
                  return Pl`<w3m-connect-recent-widget
            tabIdx=${Gd(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
                case 'featured':
                  return Pl`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${Gd(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
                case 'custom':
                  return Pl`<w3m-connect-custom-widget
            tabIdx=${Gd(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
                case 'external':
                  return Pl`<w3m-connect-external-widget
            tabIdx=${Gd(this.tabIdx)}
          ></w3m-connect-external-widget>`;
                case 'recommended':
                  return Pl`<w3m-connect-recommended-widget
            .wallets=${i}
            tabIdx=${Gd(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
                default:
                  return console.warn(`Unknown connector type: ${e}`), null;
              }
            });
        }
      };
      (sh.styles = oh),
        ih([Hd()], sh.prototype, 'tabIdx', void 0),
        ih([Fd()], sh.prototype, 'connectors', void 0),
        ih([Fd()], sh.prototype, 'recommended', void 0),
        ih([Fd()], sh.prototype, 'featured', void 0),
        (sh = ih([nd('w3m-connector-list')], sh));
      var ah = Zc`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,
        ch = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let lh = class extends Zl {
        constructor() {
          super(...arguments),
            (this.tabs = []),
            (this.onTabChange = () => null),
            (this.buttons = []),
            (this.disabled = !1),
            (this.localTabWidth = '100px'),
            (this.activeTab = 0),
            (this.isDense = !1);
        }
        render() {
          return (
            (this.isDense = this.tabs.length > 3),
            (this.style.cssText = `\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `),
            (this.dataset.type = this.isDense ? 'flex' : 'block'),
            this.tabs.map((e, t) => {
              const r = t === this.activeTab;
              return Pl`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `;
            })
          );
        }
        firstUpdated() {
          this.shadowRoot &&
            this.isDense &&
            ((this.buttons = [...this.shadowRoot.querySelectorAll('button')]),
            setTimeout(() => {
              this.animateTabs(0, !0);
            }, 0));
        }
        iconTemplate(e) {
          return e.icon ? Pl`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>` : null;
        }
        onTabClick(e) {
          this.buttons && this.animateTabs(e, !1), (this.activeTab = e), this.onTabChange(e);
        }
        animateTabs(e, t) {
          const r = this.buttons[this.activeTab],
            n = this.buttons[e],
            o = r?.querySelector('wui-text'),
            i = n?.querySelector('wui-text'),
            s = n?.getBoundingClientRect(),
            a = i?.getBoundingClientRect();
          r &&
            o &&
            !t &&
            e !== this.activeTab &&
            (o.animate([{ opacity: 0 }], { duration: 50, easing: 'ease', fill: 'forwards' }),
            r.animate([{ width: '34px' }], { duration: 500, easing: 'ease', fill: 'forwards' })),
            n &&
              s &&
              a &&
              i &&
              (e !== this.activeTab || t) &&
              ((this.localTabWidth = `${Math.round(s.width + a.width) + 6}px`),
              n.animate([{ width: `${s.width + a.width}px` }], {
                duration: t ? 0 : 500,
                fill: 'forwards',
                easing: 'ease',
              }),
              i.animate([{ opacity: 1 }], {
                duration: t ? 0 : 125,
                delay: t ? 0 : 200,
                fill: 'forwards',
                easing: 'ease',
              }));
        }
      };
      (lh.styles = [Ql, ed, ah]),
        ch([Hd({ type: Array })], lh.prototype, 'tabs', void 0),
        ch([Hd()], lh.prototype, 'onTabChange', void 0),
        ch([Hd({ type: Array })], lh.prototype, 'buttons', void 0),
        ch([Hd({ type: Boolean })], lh.prototype, 'disabled', void 0),
        ch([Hd()], lh.prototype, 'localTabWidth', void 0),
        ch([Fd()], lh.prototype, 'activeTab', void 0),
        ch([Fd()], lh.prototype, 'isDense', void 0),
        (lh = ch([nd('wui-tabs')], lh));
      var dh = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let uh = class extends Zl {
        constructor() {
          super(),
            (this.platformTabs = []),
            (this.unsubscribe = []),
            (this.platforms = []),
            (this.onSelectPlatfrom = void 0),
            (this.buffering = !1),
            this.unsubscribe.push(Ct.subscribeKey('buffering', (e) => (this.buffering = e)));
        }
        disconnectCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.generateTabs();
          return Pl`
      <wui-flex justifyContent="center" .padding=${['0', '0', 'l', '0']}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
        }
        generateTabs() {
          const e = this.platforms.map((e) =>
            'browser' === e
              ? { label: 'Browser', icon: 'extension', platform: 'browser' }
              : 'mobile' === e
                ? { label: 'Mobile', icon: 'mobile', platform: 'mobile' }
                : 'qrcode' === e
                  ? { label: 'Mobile', icon: 'mobile', platform: 'qrcode' }
                  : 'web' === e
                    ? { label: 'Webapp', icon: 'browser', platform: 'web' }
                    : 'desktop' === e
                      ? { label: 'Desktop', icon: 'desktop', platform: 'desktop' }
                      : { label: 'Browser', icon: 'extension', platform: 'unsupported' }
          );
          return (this.platformTabs = e.map(({ platform: e }) => e)), e;
        }
        onTabChange(e) {
          const t = this.platformTabs[e];
          t && this.onSelectPlatfrom?.(t);
        }
      };
      dh([Hd({ type: Array })], uh.prototype, 'platforms', void 0),
        dh([Hd()], uh.prototype, 'onSelectPlatfrom', void 0),
        dh([Fd()], uh.prototype, 'buffering', void 0),
        (uh = dh([nd('w3m-connecting-header')], uh));
      var hh = Zc`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,
        ph = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let gh = class extends Zl {
        constructor() {
          super(...arguments), (this.color = 'accent-100'), (this.size = 'lg');
        }
        render() {
          return (
            (this.style.cssText =
              '--local-color: ' +
              ('inherit' === this.color ? 'inherit' : `var(--wui-color-${this.color})`)),
            (this.dataset.size = this.size),
            Pl`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`
          );
        }
      };
      (gh.styles = [Ql, hh]),
        ph([Hd()], gh.prototype, 'color', void 0),
        ph([Hd()], gh.prototype, 'size', void 0),
        (gh = ph([nd('wui-loading-spinner')], gh));
      var fh = Zc`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,
        wh = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      const mh = {
          main: 'inverse-100',
          inverse: 'inverse-000',
          accent: 'accent-100',
          'accent-error': 'error-100',
          'accent-success': 'success-100',
          neutral: 'fg-100',
          disabled: 'gray-glass-020',
        },
        vh = { lg: 'paragraph-600', md: 'small-600' },
        bh = { lg: 'md', md: 'md' };
      let yh = class extends Zl {
        constructor() {
          super(...arguments),
            (this.size = 'lg'),
            (this.disabled = !1),
            (this.fullWidth = !1),
            (this.loading = !1),
            (this.variant = 'main'),
            (this.hasIconLeft = !1),
            (this.hasIconRight = !1),
            (this.borderRadius = 'm');
        }
        render() {
          this.style.cssText = `\n    --local-width: ${this.fullWidth ? '100%' : 'auto'};\n    --local-opacity-100: ${this.loading ? 0 : 1};\n    --local-opacity-000: ${this.loading ? 1 : 0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;
          const e = this.textVariant ?? vh[this.size];
          return Pl`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${() => this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${() => this.handleSlotRightChange()}></slot>
      </button>
    `;
        }
        handleSlotLeftChange() {
          this.hasIconLeft = !0;
        }
        handleSlotRightChange() {
          this.hasIconRight = !0;
        }
        loadingTemplate() {
          if (this.loading) {
            const e = bh[this.size],
              t = this.disabled ? mh.disabled : mh[this.variant];
            return Pl`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`;
          }
          return Pl``;
        }
      };
      (yh.styles = [Ql, ed, fh]),
        wh([Hd()], yh.prototype, 'size', void 0),
        wh([Hd({ type: Boolean })], yh.prototype, 'disabled', void 0),
        wh([Hd({ type: Boolean })], yh.prototype, 'fullWidth', void 0),
        wh([Hd({ type: Boolean })], yh.prototype, 'loading', void 0),
        wh([Hd()], yh.prototype, 'variant', void 0),
        wh([Hd({ type: Boolean })], yh.prototype, 'hasIconLeft', void 0),
        wh([Hd({ type: Boolean })], yh.prototype, 'hasIconRight', void 0),
        wh([Hd()], yh.prototype, 'borderRadius', void 0),
        wh([Hd()], yh.prototype, 'textVariant', void 0),
        (yh = wh([nd('wui-button')], yh));
      var Ch = Zc`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,
        xh = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let kh = class extends Zl {
        constructor() {
          super(...arguments),
            (this.tabIdx = void 0),
            (this.disabled = !1),
            (this.color = 'inherit');
        }
        render() {
          return Pl`
      <button ?disabled=${this.disabled} tabindex=${Gd(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
        }
      };
      (kh.styles = [Ql, ed, Ch]),
        xh([Hd()], kh.prototype, 'tabIdx', void 0),
        xh([Hd({ type: Boolean })], kh.prototype, 'disabled', void 0),
        xh([Hd()], kh.prototype, 'color', void 0),
        (kh = xh([nd('wui-link')], kh));
      var Ah = Zc`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,
        Eh = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Ih = class extends Zl {
        constructor() {
          super(...arguments), (this.radius = 36);
        }
        render() {
          return this.svgLoaderTemplate();
        }
        svgLoaderTemplate() {
          const e = this.radius > 50 ? 50 : this.radius,
            t = 36 - e;
          return Pl`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116 + t} ${245 + t}"
          stroke-dashoffset=${360 + 1.75 * t}
        />
      </svg>
    `;
        }
      };
      (Ih.styles = [Ql, Ah]),
        Eh([Hd({ type: Number })], Ih.prototype, 'radius', void 0),
        (Ih = Eh([nd('wui-loading-thumbnail')], Ih));
      var Nh = Zc`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,
        Sh = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let _h = class extends Zl {
        constructor() {
          super(...arguments),
            (this.variant = 'accent'),
            (this.imageSrc = ''),
            (this.disabled = !1),
            (this.icon = 'externalLink'),
            (this.size = 'md'),
            (this.text = '');
        }
        render() {
          const e = 'sm' === this.size ? 'small-600' : 'paragraph-600';
          return Pl`
      <button
        class=${this.disabled ? 'disabled' : ''}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc ? Pl`<wui-image src=${this.imageSrc}></wui-image>` : null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `;
        }
      };
      (_h.styles = [Ql, ed, Nh]),
        Sh([Hd()], _h.prototype, 'variant', void 0),
        Sh([Hd()], _h.prototype, 'imageSrc', void 0),
        Sh([Hd({ type: Boolean })], _h.prototype, 'disabled', void 0),
        Sh([Hd()], _h.prototype, 'icon', void 0),
        Sh([Hd()], _h.prototype, 'size', void 0),
        Sh([Hd()], _h.prototype, 'text', void 0),
        (_h = Sh([nd('wui-chip-button')], _h));
      var Ph = Zc`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,
        Th = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Oh = class extends Zl {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.label = ''), (this.buttonLabel = '');
        }
        render() {
          return Pl`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${['1xs', '2l', '1xs', '2l']}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `;
        }
      };
      (Oh.styles = [Ql, ed, Ph]),
        Th([Hd({ type: Boolean })], Oh.prototype, 'disabled', void 0),
        Th([Hd()], Oh.prototype, 'label', void 0),
        Th([Hd()], Oh.prototype, 'buttonLabel', void 0),
        (Oh = Th([nd('wui-cta-button')], Oh));
      var $h = Zc`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,
        Rh = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Bh = class extends Zl {
        constructor() {
          super(...arguments), (this.wallet = void 0);
        }
        render() {
          if (!this.wallet) return (this.style.display = 'none'), null;
          const {
              name: e,
              app_store: t,
              play_store: r,
              chrome_store: n,
              homepage: o,
            } = this.wallet,
            i = Re.isMobile(),
            s = Re.isIos(),
            a = Re.isAndroid(),
            c = [t, r, o, n].filter(Boolean).length > 1,
            l = rd.getTruncateString({ string: e, charsStart: 12, charsEnd: 0, truncate: 'end' });
          return c && !i
            ? Pl`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${() => it.push('Downloads', { wallet: this.wallet })}
        ></wui-cta-button>
      `
            : !c && o
              ? Pl`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `
              : t && s
                ? Pl`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `
                : r && a
                  ? Pl`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `
                  : ((this.style.display = 'none'), null);
        }
        onAppStore() {
          this.wallet?.app_store && Re.openHref(this.wallet.app_store, '_blank');
        }
        onPlayStore() {
          this.wallet?.play_store && Re.openHref(this.wallet.play_store, '_blank');
        }
        onHomePage() {
          this.wallet?.homepage && Re.openHref(this.wallet.homepage, '_blank');
        }
      };
      (Bh.styles = [$h]),
        Rh([Hd({ type: Object })], Bh.prototype, 'wallet', void 0),
        (Bh = Rh([nd('w3m-mobile-download-links')], Bh));
      var Lh = Zc`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,
        Uh = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      class Mh extends Zl {
        constructor() {
          super(),
            (this.wallet = it.state.data?.wallet),
            (this.connector = it.state.data?.connector),
            (this.timeout = void 0),
            (this.secondaryBtnIcon = 'refresh'),
            (this.onConnect = void 0),
            (this.onRender = void 0),
            (this.onAutoConnect = void 0),
            (this.isWalletConnect = !0),
            (this.unsubscribe = []),
            (this.imageSrc =
              We.getWalletImage(this.wallet) ?? We.getConnectorImage(this.connector)),
            (this.name = this.wallet?.name ?? this.connector?.name ?? 'Wallet'),
            (this.isRetrying = !1),
            (this.uri = Ct.state.wcUri),
            (this.error = Ct.state.wcError),
            (this.ready = !1),
            (this.showRetry = !1),
            (this.secondaryBtnLabel = 'Try again'),
            (this.secondaryLabel = 'Accept connection request in the wallet'),
            (this.buffering = !1),
            (this.isLoading = !1),
            (this.isMobile = !1),
            (this.onRetry = void 0),
            this.unsubscribe.push(
              Ct.subscribeKey('wcUri', (e) => {
                (this.uri = e),
                  this.isRetrying && this.onRetry && ((this.isRetrying = !1), this.onConnect?.());
              }),
              Ct.subscribeKey('wcError', (e) => (this.error = e)),
              Ct.subscribeKey('buffering', (e) => (this.buffering = e))
            ),
            (Re.isTelegram() || Re.isSafari()) &&
              Re.isIos() &&
              Ct.state.wcUri &&
              this.onConnect?.();
        }
        firstUpdated() {
          this.onAutoConnect?.(), (this.showRetry = !this.onAutoConnect);
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()), clearTimeout(this.timeout);
        }
        render() {
          this.onRender?.(), this.onShowRetry();
          const e = this.error
            ? 'Connection can be declined if a previous request is still active'
            : this.secondaryLabel;
          let t = `Continue in ${this.name}`;
          return (
            this.buffering && (t = 'Connecting...'),
            this.error && (t = 'Connection declined'),
            Pl`
      <wui-flex
        data-error=${Gd(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Gd(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? 'error-100' : 'fg-100'}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${
          this.secondaryBtnLabel
            ? Pl`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || (!this.error && this.buffering) || this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `
            : null
        }
      </wui-flex>

      ${
        this.isWalletConnect
          ? Pl`
            <wui-flex .padding=${['0', 'xl', 'xl', 'xl']} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `
          : null
      }

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
          );
        }
        onShowRetry() {
          this.error &&
            !this.showRetry &&
            ((this.showRetry = !0),
            this.shadowRoot
              ?.querySelector('wui-button')
              ?.animate([{ opacity: 0 }, { opacity: 1 }], { fill: 'forwards', easing: 'ease' }));
        }
        onTryAgain() {
          this.buffering ||
            (Ct.setWcError(!1),
            this.onRetry ? ((this.isRetrying = !0), this.onRetry?.()) : this.onConnect?.());
        }
        loaderTemplate() {
          const e = at.state.themeVariables['--w3m-border-radius-master'],
            t = e ? parseInt(e.replace('px', ''), 10) : 4;
          return Pl`<wui-loading-thumbnail radius=${9 * t}></wui-loading-thumbnail>`;
        }
        onCopyUri() {
          try {
            this.uri && (Re.copyToClopboard(this.uri), ft.showSuccess('Link copied'));
          } catch {
            ft.showError('Failed to copy');
          }
        }
      }
      (Mh.styles = Lh),
        Uh([Fd()], Mh.prototype, 'isRetrying', void 0),
        Uh([Fd()], Mh.prototype, 'uri', void 0),
        Uh([Fd()], Mh.prototype, 'error', void 0),
        Uh([Fd()], Mh.prototype, 'ready', void 0),
        Uh([Fd()], Mh.prototype, 'showRetry', void 0),
        Uh([Fd()], Mh.prototype, 'secondaryBtnLabel', void 0),
        Uh([Fd()], Mh.prototype, 'secondaryLabel', void 0),
        Uh([Fd()], Mh.prototype, 'buffering', void 0),
        Uh([Fd()], Mh.prototype, 'isLoading', void 0),
        Uh([Hd({ type: Boolean })], Mh.prototype, 'isMobile', void 0),
        Uh([Hd()], Mh.prototype, 'onRetry', void 0);
      let zh = class extends Mh {
        constructor() {
          if ((super(), !this.wallet))
            throw new Error('w3m-connecting-wc-browser: No wallet provided');
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onAutoConnect = this.onConnectProxy.bind(this)),
            Je.sendEvent({
              type: 'track',
              event: 'SELECT_WALLET',
              properties: { name: this.wallet.name, platform: 'browser' },
            });
        }
        async onConnectProxy() {
          try {
            this.error = !1;
            const { connectors: e } = dt.state,
              t = e.find(
                (e) =>
                  ('ANNOUNCED' === e.type && e.info?.rdns === this.wallet?.rdns) ||
                  'INJECTED' === e.type ||
                  e.name === this.wallet?.name
              );
            if (!t) throw new Error('w3m-connecting-wc-browser: No connector found');
            await Ct.connectExternal(t, t.chain),
              Ca.close(),
              Je.sendEvent({
                type: 'track',
                event: 'CONNECT_SUCCESS',
                properties: { method: 'browser', name: this.wallet?.name || 'Unknown' },
              });
          } catch (e) {
            Je.sendEvent({
              type: 'track',
              event: 'CONNECT_ERROR',
              properties: { message: e?.message ?? 'Unknown' },
            }),
              (this.error = !0);
          }
        }
      };
      zh = (function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      })([nd('w3m-connecting-wc-browser')], zh);
      let jh = class extends Mh {
        constructor() {
          if ((super(), !this.wallet))
            throw new Error('w3m-connecting-wc-desktop: No wallet provided');
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onRender = this.onRenderProxy.bind(this)),
            Je.sendEvent({
              type: 'track',
              event: 'SELECT_WALLET',
              properties: { name: this.wallet.name, platform: 'desktop' },
            });
        }
        onRenderProxy() {
          !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
        }
        onConnectProxy() {
          if (this.wallet?.desktop_link && this.uri)
            try {
              this.error = !1;
              const { desktop_link: e, name: t } = this.wallet,
                { redirect: r, href: n } = Re.formatNativeUrl(e, this.uri);
              Ct.setWcLinking({ name: t, href: n }),
                Ct.setRecentWallet(this.wallet),
                Re.openHref(r, '_blank');
            } catch {
              this.error = !0;
            }
        }
      };
      jh = (function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      })([nd('w3m-connecting-wc-desktop')], jh);
      let Dh = class extends Mh {
        constructor() {
          if (
            (super(),
            (this.btnLabelTimeout = void 0),
            (this.labelTimeout = void 0),
            (this.onRender = () => {
              !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
            }),
            (this.onConnect = () => {
              if (this.wallet?.mobile_link && this.uri)
                try {
                  this.error = !1;
                  const { mobile_link: e, name: t } = this.wallet,
                    { redirect: r, href: n } = Re.formatNativeUrl(e, this.uri);
                  Ct.setWcLinking({ name: t, href: n }), Ct.setRecentWallet(this.wallet);
                  const o = Re.isIframe() ? '_top' : '_self';
                  Re.openHref(r, o),
                    clearTimeout(this.labelTimeout),
                    (this.secondaryLabel = Oe.CONNECT_LABELS.MOBILE);
                } catch (e) {
                  Je.sendEvent({
                    type: 'track',
                    event: 'CONNECT_PROXY_ERROR',
                    properties: {
                      message: e instanceof Error ? e.message : 'Error parsing the deeplink',
                      uri: this.uri,
                      mobile_link: this.wallet.mobile_link,
                      name: this.wallet.name,
                    },
                  }),
                    (this.error = !0);
                }
            }),
            !this.wallet)
          )
            throw new Error('w3m-connecting-wc-mobile: No wallet provided');
          this.initializeStateAndTimers(),
            document.addEventListener('visibilitychange', this.onBuffering.bind(this)),
            Je.sendEvent({
              type: 'track',
              event: 'SELECT_WALLET',
              properties: { name: this.wallet.name, platform: 'mobile' },
            });
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            document.removeEventListener('visibilitychange', this.onBuffering.bind(this)),
            clearTimeout(this.btnLabelTimeout),
            clearTimeout(this.labelTimeout);
        }
        initializeStateAndTimers() {
          (this.secondaryBtnLabel = void 0),
            (this.secondaryLabel = Oe.CONNECT_LABELS.MOBILE),
            (this.btnLabelTimeout = setTimeout(() => {
              (this.secondaryBtnLabel = 'Try again'),
                (this.secondaryLabel = Oe.CONNECT_LABELS.MOBILE);
            }, Oe.FIVE_SEC_MS)),
            (this.labelTimeout = setTimeout(() => {
              this.secondaryLabel = "Hold tight... it's taking longer than expected";
            }, Oe.THREE_SEC_MS));
        }
        onBuffering() {
          const e = Re.isIos();
          'visible' === document?.visibilityState &&
            !this.error &&
            e &&
            (Ct.setBuffering(!0),
            setTimeout(() => {
              Ct.setBuffering(!1);
            }, 5e3));
        }
        onTryAgain() {
          this.buffering ||
            (clearTimeout(this.btnLabelTimeout),
            clearTimeout(this.labelTimeout),
            this.initializeStateAndTimers(),
            Ct.setWcError(!1),
            this.onConnect());
        }
      };
      Dh = (function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      })([nd('w3m-connecting-wc-mobile')], Dh);
      var Wh = {},
        Hh = {},
        Fh = {};
      let Vh;
      const qh = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901,
        991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611,
        2761, 2876, 3034, 3196, 3362, 3532, 3706,
      ];
      (Fh.getSymbolSize = function (e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (Fh.getSymbolTotalCodewords = function (e) {
          return qh[e];
        }),
        (Fh.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (Fh.setToSJISFunction = function (e) {
          if ('function' != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
          Vh = e;
        }),
        (Fh.isKanjiModeEnabled = function () {
          return typeof Vh < 'u';
        }),
        (Fh.toSJIS = function (e) {
          return Vh(e);
        });
      var Zh = {};
      function Gh() {
        (this.buffer = []), (this.length = 0);
      }
      !(function (e) {
        (e.L = { bit: 1 }),
          (e.M = { bit: 0 }),
          (e.Q = { bit: 3 }),
          (e.H = { bit: 2 }),
          (e.isValid = function (e) {
            return e && typeof e.bit < 'u' && e.bit >= 0 && e.bit < 4;
          }),
          (e.from = function (t, r) {
            if (e.isValid(t)) return t;
            try {
              return (function (t) {
                if ('string' != typeof t) throw new Error('Param is not a string');
                switch (t.toLowerCase()) {
                  case 'l':
                  case 'low':
                    return e.L;
                  case 'm':
                  case 'medium':
                    return e.M;
                  case 'q':
                  case 'quartile':
                    return e.Q;
                  case 'h':
                  case 'high':
                    return e.H;
                  default:
                    throw new Error('Unknown EC Level: ' + t);
                }
              })(t);
            } catch {
              return r;
            }
          });
      })(Zh),
        (Gh.prototype = {
          get: function (e) {
            const t = Math.floor(e / 8);
            return 1 === ((this.buffer[t] >>> (7 - (e % 8))) & 1);
          },
          put: function (e, t) {
            for (let r = 0; r < t; r++) this.putBit(1 === ((e >>> (t - r - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (e) {
            const t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
      var Kh = Gh;
      function Yh(e) {
        if (!e || e < 1) throw new Error('BitMatrix size must be defined and greater than 0');
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (Yh.prototype.set = function (e, t, r, n) {
        const o = e * this.size + t;
        (this.data[o] = r), n && (this.reservedBit[o] = !0);
      }),
        (Yh.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (Yh.prototype.xor = function (e, t, r) {
          this.data[e * this.size + t] ^= r;
        }),
        (Yh.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        });
      var Xh = Yh,
        Jh = {};
      !(function (e) {
        const t = Fh.getSymbolSize;
        (e.getRowColCoords = function (e) {
          if (1 === e) return [];
          const r = Math.floor(e / 7) + 2,
            n = t(e),
            o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * r - 2)),
            i = [n - 7];
          for (let t = 1; t < r - 1; t++) i[t] = i[t - 1] - o;
          return i.push(6), i.reverse();
        }),
          (e.getPositions = function (t) {
            const r = [],
              n = e.getRowColCoords(t),
              o = n.length;
            for (let e = 0; e < o; e++)
              for (let t = 0; t < o; t++)
                (0 === e && 0 === t) ||
                  (0 === e && t === o - 1) ||
                  (e === o - 1 && 0 === t) ||
                  r.push([n[e], n[t]]);
            return r;
          });
      })(Jh);
      var Qh = {};
      const ep = Fh.getSymbolSize;
      Qh.getPositions = function (e) {
        const t = ep(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
      var tp = {};
      !(function (e) {
        e.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        const t = 3,
          r = 3,
          n = 40,
          o = 10;
        function i(t, r, n) {
          switch (t) {
            case e.Patterns.PATTERN000:
              return (r + n) % 2 === 0;
            case e.Patterns.PATTERN001:
              return r % 2 === 0;
            case e.Patterns.PATTERN010:
              return n % 3 === 0;
            case e.Patterns.PATTERN011:
              return (r + n) % 3 === 0;
            case e.Patterns.PATTERN100:
              return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 === 0;
            case e.Patterns.PATTERN101:
              return ((r * n) % 2) + ((r * n) % 3) === 0;
            case e.Patterns.PATTERN110:
              return (((r * n) % 2) + ((r * n) % 3)) % 2 === 0;
            case e.Patterns.PATTERN111:
              return (((r * n) % 3) + ((r + n) % 2)) % 2 === 0;
            default:
              throw new Error('bad maskPattern:' + t);
          }
        }
        (e.isValid = function (e) {
          return null != e && '' !== e && !isNaN(e) && e >= 0 && e <= 7;
        }),
          (e.from = function (t) {
            return e.isValid(t) ? parseInt(t, 10) : void 0;
          }),
          (e.getPenaltyN1 = function (e) {
            const r = e.size;
            let n = 0,
              o = 0,
              i = 0,
              s = null,
              a = null;
            for (let c = 0; c < r; c++) {
              (o = i = 0), (s = a = null);
              for (let l = 0; l < r; l++) {
                let r = e.get(c, l);
                r === s ? o++ : (o >= 5 && (n += t + (o - 5)), (s = r), (o = 1)),
                  (r = e.get(l, c)),
                  r === a ? i++ : (i >= 5 && (n += t + (i - 5)), (a = r), (i = 1));
              }
              o >= 5 && (n += t + (o - 5)), i >= 5 && (n += t + (i - 5));
            }
            return n;
          }),
          (e.getPenaltyN2 = function (e) {
            const t = e.size;
            let n = 0;
            for (let r = 0; r < t - 1; r++)
              for (let o = 0; o < t - 1; o++) {
                const t = e.get(r, o) + e.get(r, o + 1) + e.get(r + 1, o) + e.get(r + 1, o + 1);
                (4 === t || 0 === t) && n++;
              }
            return n * r;
          }),
          (e.getPenaltyN3 = function (e) {
            const t = e.size;
            let r = 0,
              o = 0,
              i = 0;
            for (let n = 0; n < t; n++) {
              o = i = 0;
              for (let s = 0; s < t; s++)
                (o = ((o << 1) & 2047) | e.get(n, s)),
                  s >= 10 && (1488 === o || 93 === o) && r++,
                  (i = ((i << 1) & 2047) | e.get(s, n)),
                  s >= 10 && (1488 === i || 93 === i) && r++;
            }
            return r * n;
          }),
          (e.getPenaltyN4 = function (e) {
            let t = 0;
            const r = e.data.length;
            for (let n = 0; n < r; n++) t += e.data[n];
            return Math.abs(Math.ceil((100 * t) / r / 5) - 10) * o;
          }),
          (e.applyMask = function (e, t) {
            const r = t.size;
            for (let n = 0; n < r; n++)
              for (let o = 0; o < r; o++) t.isReserved(o, n) || t.xor(o, n, i(e, o, n));
          }),
          (e.getBestMask = function (t, r) {
            const n = Object.keys(e.Patterns).length;
            let o = 0,
              i = 1 / 0;
            for (let s = 0; s < n; s++) {
              r(s), e.applyMask(s, t);
              const n =
                e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
              e.applyMask(s, t), n < i && ((i = n), (o = s));
            }
            return o;
          });
      })(tp);
      var rp = {};
      const np = Zh,
        op = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4,
          6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6,
          10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8,
          17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37,
          12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33,
          45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70,
          22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
        ],
        ip = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96,
          112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150,
          224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432,
          144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416,
          600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960,
          312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420,
          784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540,
          980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630,
          1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (rp.getBlocksCount = function (e, t) {
        switch (t) {
          case np.L:
            return op[4 * (e - 1) + 0];
          case np.M:
            return op[4 * (e - 1) + 1];
          case np.Q:
            return op[4 * (e - 1) + 2];
          case np.H:
            return op[4 * (e - 1) + 3];
          default:
            return;
        }
      }),
        (rp.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case np.L:
              return ip[4 * (e - 1) + 0];
            case np.M:
              return ip[4 * (e - 1) + 1];
            case np.Q:
              return ip[4 * (e - 1) + 2];
            case np.H:
              return ip[4 * (e - 1) + 3];
            default:
              return;
          }
        });
      var sp = {},
        ap = {};
      const cp = new Uint8Array(512),
        lp = new Uint8Array(256);
      (function () {
        let e = 1;
        for (let t = 0; t < 255; t++) (cp[t] = e), (lp[e] = t), (e <<= 1), 256 & e && (e ^= 285);
        for (let t = 255; t < 512; t++) cp[t] = cp[t - 255];
      })(),
        (ap.log = function (e) {
          if (e < 1) throw new Error('log(' + e + ')');
          return lp[e];
        }),
        (ap.exp = function (e) {
          return cp[e];
        }),
        (ap.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : cp[lp[e] + lp[t]];
        }),
        (function (e) {
          const t = ap;
          (e.mul = function (e, r) {
            const n = new Uint8Array(e.length + r.length - 1);
            for (let o = 0; o < e.length; o++)
              for (let i = 0; i < r.length; i++) n[o + i] ^= t.mul(e[o], r[i]);
            return n;
          }),
            (e.mod = function (e, r) {
              let n = new Uint8Array(e);
              for (; n.length - r.length >= 0; ) {
                const e = n[0];
                for (let i = 0; i < r.length; i++) n[i] ^= t.mul(r[i], e);
                let o = 0;
                for (; o < n.length && 0 === n[o]; ) o++;
                n = n.slice(o);
              }
              return n;
            }),
            (e.generateECPolynomial = function (r) {
              let n = new Uint8Array([1]);
              for (let o = 0; o < r; o++) n = e.mul(n, new Uint8Array([1, t.exp(o)]));
              return n;
            });
        })(sp);
      const dp = sp;
      function up(e) {
        (this.genPoly = void 0), (this.degree = e), this.degree && this.initialize(this.degree);
      }
      (up.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = dp.generateECPolynomial(this.degree));
      }),
        (up.prototype.encode = function (e) {
          if (!this.genPoly) throw new Error('Encoder not initialized');
          const t = new Uint8Array(e.length + this.degree);
          t.set(e);
          const r = dp.mod(t, this.genPoly),
            n = this.degree - r.length;
          if (n > 0) {
            const e = new Uint8Array(this.degree);
            return e.set(r, n), e;
          }
          return r;
        });
      var hp = up,
        pp = {},
        gp = {},
        fp = {
          isValid: function (e) {
            return !isNaN(e) && e >= 1 && e <= 40;
          },
        },
        wp = {};
      const mp = '[0-9]+';
      let vp =
        '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
      vp = vp.replace(/u/g, '\\u');
      const bp = '(?:(?![A-Z0-9 $%*+\\-./:]|' + vp + ')(?:.|[\r\n]))+';
      (wp.KANJI = new RegExp(vp, 'g')),
        (wp.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')),
        (wp.BYTE = new RegExp(bp, 'g')),
        (wp.NUMERIC = new RegExp(mp, 'g')),
        (wp.ALPHANUMERIC = new RegExp('[A-Z $%*+\\-./:]+', 'g'));
      const yp = new RegExp('^' + vp + '$'),
        Cp = new RegExp('^[0-9]+$'),
        xp = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
      (wp.testKanji = function (e) {
        return yp.test(e);
      }),
        (wp.testNumeric = function (e) {
          return Cp.test(e);
        }),
        (wp.testAlphanumeric = function (e) {
          return xp.test(e);
        }),
        (function (e) {
          const t = fp,
            r = wp;
          (e.NUMERIC = { id: 'Numeric', bit: 1, ccBits: [10, 12, 14] }),
            (e.ALPHANUMERIC = { id: 'Alphanumeric', bit: 2, ccBits: [9, 11, 13] }),
            (e.BYTE = { id: 'Byte', bit: 4, ccBits: [8, 16, 16] }),
            (e.KANJI = { id: 'Kanji', bit: 8, ccBits: [8, 10, 12] }),
            (e.MIXED = { bit: -1 }),
            (e.getCharCountIndicator = function (e, r) {
              if (!e.ccBits) throw new Error('Invalid mode: ' + e);
              if (!t.isValid(r)) throw new Error('Invalid version: ' + r);
              return r >= 1 && r < 10 ? e.ccBits[0] : r < 27 ? e.ccBits[1] : e.ccBits[2];
            }),
            (e.getBestModeForData = function (t) {
              return r.testNumeric(t)
                ? e.NUMERIC
                : r.testAlphanumeric(t)
                  ? e.ALPHANUMERIC
                  : r.testKanji(t)
                    ? e.KANJI
                    : e.BYTE;
            }),
            (e.toString = function (e) {
              if (e && e.id) return e.id;
              throw new Error('Invalid mode');
            }),
            (e.isValid = function (e) {
              return e && e.bit && e.ccBits;
            }),
            (e.from = function (t, r) {
              if (e.isValid(t)) return t;
              try {
                return (function (t) {
                  if ('string' != typeof t) throw new Error('Param is not a string');
                  switch (t.toLowerCase()) {
                    case 'numeric':
                      return e.NUMERIC;
                    case 'alphanumeric':
                      return e.ALPHANUMERIC;
                    case 'kanji':
                      return e.KANJI;
                    case 'byte':
                      return e.BYTE;
                    default:
                      throw new Error('Unknown mode: ' + t);
                  }
                })(t);
              } catch {
                return r;
              }
            });
        })(gp),
        (function (e) {
          const t = Fh,
            r = rp,
            n = Zh,
            o = gp,
            i = fp,
            s = t.getBCHDigit(7973);
          function a(e, t) {
            return o.getCharCountIndicator(e, t) + 4;
          }
          function c(e, t) {
            let r = 0;
            return (
              e.forEach(function (e) {
                const n = a(e.mode, t);
                r += n + e.getBitsLength();
              }),
              r
            );
          }
          (e.from = function (e, t) {
            return i.isValid(e) ? parseInt(e, 10) : t;
          }),
            (e.getCapacity = function (e, n, s) {
              if (!i.isValid(e)) throw new Error('Invalid QR Code version');
              typeof s > 'u' && (s = o.BYTE);
              const c = 8 * (t.getSymbolTotalCodewords(e) - r.getTotalCodewordsCount(e, n));
              if (s === o.MIXED) return c;
              const l = c - a(s, e);
              switch (s) {
                case o.NUMERIC:
                  return Math.floor((l / 10) * 3);
                case o.ALPHANUMERIC:
                  return Math.floor((l / 11) * 2);
                case o.KANJI:
                  return Math.floor(l / 13);
                case o.BYTE:
                default:
                  return Math.floor(l / 8);
              }
            }),
            (e.getBestVersionForData = function (t, r) {
              let i;
              const s = n.from(r, n.M);
              if (Array.isArray(t)) {
                if (t.length > 1)
                  return (function (t, r) {
                    for (let n = 1; n <= 40; n++)
                      if (c(t, n) <= e.getCapacity(n, r, o.MIXED)) return n;
                  })(t, s);
                if (0 === t.length) return 1;
                i = t[0];
              } else i = t;
              return (function (t, r, n) {
                for (let o = 1; o <= 40; o++) if (r <= e.getCapacity(o, n, t)) return o;
              })(i.mode, i.getLength(), s);
            }),
            (e.getEncodedBits = function (e) {
              if (!i.isValid(e) || e < 7) throw new Error('Invalid QR Code version');
              let r = e << 12;
              for (; t.getBCHDigit(r) - s >= 0; ) r ^= 7973 << (t.getBCHDigit(r) - s);
              return (e << 12) | r;
            });
        })(pp);
      var kp = {};
      const Ap = Fh,
        Ep = Ap.getBCHDigit(1335);
      kp.getEncodedBits = function (e, t) {
        const r = (e.bit << 3) | t;
        let n = r << 10;
        for (; Ap.getBCHDigit(n) - Ep >= 0; ) n ^= 1335 << (Ap.getBCHDigit(n) - Ep);
        return 21522 ^ ((r << 10) | n);
      };
      var Ip = {};
      const Np = gp;
      function Sp(e) {
        (this.mode = Np.NUMERIC), (this.data = e.toString());
      }
      (Sp.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (Sp.prototype.getLength = function () {
          return this.data.length;
        }),
        (Sp.prototype.getBitsLength = function () {
          return Sp.getBitsLength(this.data.length);
        }),
        (Sp.prototype.write = function (e) {
          let t, r, n;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (r = this.data.substr(t, 3)), (n = parseInt(r, 10)), e.put(n, 10);
          const o = this.data.length - t;
          o > 0 && ((r = this.data.substr(t)), (n = parseInt(r, 10)), e.put(n, 3 * o + 1));
        });
      var _p = Sp;
      const Pp = gp,
        Tp = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          ' ',
          '$',
          '%',
          '*',
          '+',
          '-',
          '.',
          '/',
          ':',
        ];
      function Op(e) {
        (this.mode = Pp.ALPHANUMERIC), (this.data = e);
      }
      (Op.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (Op.prototype.getLength = function () {
          return this.data.length;
        }),
        (Op.prototype.getBitsLength = function () {
          return Op.getBitsLength(this.data.length);
        }),
        (Op.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let r = 45 * Tp.indexOf(this.data[t]);
            (r += Tp.indexOf(this.data[t + 1])), e.put(r, 11);
          }
          this.data.length % 2 && e.put(Tp.indexOf(this.data[t]), 6);
        });
      var $p = Op;
      const Rp = function (e) {
          for (var t = [], r = e.length, n = 0; n < r; n++) {
            var o = e.charCodeAt(n);
            if (o >= 55296 && o <= 56319 && r > n + 1) {
              var i = e.charCodeAt(n + 1);
              i >= 56320 && i <= 57343 && ((o = 1024 * (o - 55296) + i - 56320 + 65536), (n += 1));
            }
            o < 128
              ? t.push(o)
              : o < 2048
                ? (t.push((o >> 6) | 192), t.push((63 & o) | 128))
                : o < 55296 || (o >= 57344 && o < 65536)
                  ? (t.push((o >> 12) | 224), t.push(((o >> 6) & 63) | 128), t.push((63 & o) | 128))
                  : o >= 65536 && o <= 1114111
                    ? (t.push((o >> 18) | 240),
                      t.push(((o >> 12) & 63) | 128),
                      t.push(((o >> 6) & 63) | 128),
                      t.push((63 & o) | 128))
                    : t.push(239, 191, 189);
          }
          return new Uint8Array(t).buffer;
        },
        Bp = gp;
      function Lp(e) {
        (this.mode = Bp.BYTE), 'string' == typeof e && (e = Rp(e)), (this.data = new Uint8Array(e));
      }
      (Lp.getBitsLength = function (e) {
        return 8 * e;
      }),
        (Lp.prototype.getLength = function () {
          return this.data.length;
        }),
        (Lp.prototype.getBitsLength = function () {
          return Lp.getBitsLength(this.data.length);
        }),
        (Lp.prototype.write = function (e) {
          for (let t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8);
        });
      var Up = Lp;
      const Mp = gp,
        zp = Fh;
      function jp(e) {
        (this.mode = Mp.KANJI), (this.data = e);
      }
      (jp.getBitsLength = function (e) {
        return 13 * e;
      }),
        (jp.prototype.getLength = function () {
          return this.data.length;
        }),
        (jp.prototype.getBitsLength = function () {
          return jp.getBitsLength(this.data.length);
        }),
        (jp.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let r = zp.toSJIS(this.data[t]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else {
              if (!(r >= 57408 && r <= 60351))
                throw new Error(
                  'Invalid SJIS character: ' + this.data[t] + '\nMake sure your charset is UTF-8'
                );
              r -= 49472;
            }
            (r = 192 * ((r >>> 8) & 255) + (255 & r)), e.put(r, 13);
          }
        });
      var Dp = jp,
        Wp = { exports: {} };
      (function (e) {
        var t = {
          single_source_shortest_paths: function (e, r, n) {
            var o = {},
              i = {};
            i[r] = 0;
            var s,
              a,
              c,
              l,
              d,
              u,
              h,
              p = t.PriorityQueue.make();
            for (p.push(r, 0); !p.empty(); )
              for (c in ((a = (s = p.pop()).value), (l = s.cost), (d = e[a] || {})))
                d.hasOwnProperty(c) &&
                  ((u = l + d[c]),
                  (h = i[c]),
                  (typeof i[c] > 'u' || h > u) && ((i[c] = u), p.push(c, u), (o[c] = a)));
            if (typeof n < 'u' && typeof i[n] > 'u') {
              var g = ['Could not find a path from ', r, ' to ', n, '.'].join('');
              throw new Error(g);
            }
            return o;
          },
          extract_shortest_path_from_predecessor_list: function (e, t) {
            for (var r = [], n = t; n; ) r.push(n), e[n], (n = e[n]);
            return r.reverse(), r;
          },
          find_path: function (e, r, n) {
            var o = t.single_source_shortest_paths(e, r, n);
            return t.extract_shortest_path_from_predecessor_list(o, n);
          },
          PriorityQueue: {
            make: function (e) {
              var r,
                n = t.PriorityQueue,
                o = {};
              for (r in ((e = e || {}), n)) n.hasOwnProperty(r) && (o[r] = n[r]);
              return (o.queue = []), (o.sorter = e.sorter || n.default_sorter), o;
            },
            default_sorter: function (e, t) {
              return e.cost - t.cost;
            },
            push: function (e, t) {
              var r = { value: e, cost: t };
              this.queue.push(r), this.queue.sort(this.sorter);
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return 0 === this.queue.length;
            },
          },
        };
        e.exports = t;
      })(Wp),
        (function (e) {
          const t = gp,
            r = _p,
            n = $p,
            o = Up,
            i = Dp,
            s = wp,
            a = Fh,
            c = Wp.exports;
          function l(e) {
            return unescape(encodeURIComponent(e)).length;
          }
          function d(e, t, r) {
            const n = [];
            let o;
            for (; null !== (o = e.exec(r)); )
              n.push({ data: o[0], index: o.index, mode: t, length: o[0].length });
            return n;
          }
          function u(e) {
            const r = d(s.NUMERIC, t.NUMERIC, e),
              n = d(s.ALPHANUMERIC, t.ALPHANUMERIC, e);
            let o, i;
            return (
              a.isKanjiModeEnabled()
                ? ((o = d(s.BYTE, t.BYTE, e)), (i = d(s.KANJI, t.KANJI, e)))
                : ((o = d(s.BYTE_KANJI, t.BYTE, e)), (i = [])),
              r
                .concat(n, o, i)
                .sort(function (e, t) {
                  return e.index - t.index;
                })
                .map(function (e) {
                  return { data: e.data, mode: e.mode, length: e.length };
                })
            );
          }
          function h(e, s) {
            switch (s) {
              case t.NUMERIC:
                return r.getBitsLength(e);
              case t.ALPHANUMERIC:
                return n.getBitsLength(e);
              case t.KANJI:
                return i.getBitsLength(e);
              case t.BYTE:
                return o.getBitsLength(e);
            }
          }
          function p(e, s) {
            let c;
            const l = t.getBestModeForData(e);
            if (((c = t.from(s, l)), c !== t.BYTE && c.bit < l.bit))
              throw new Error(
                '"' +
                  e +
                  '" cannot be encoded with mode ' +
                  t.toString(c) +
                  '.\n Suggested mode is: ' +
                  t.toString(l)
              );
            switch ((c === t.KANJI && !a.isKanjiModeEnabled() && (c = t.BYTE), c)) {
              case t.NUMERIC:
                return new r(e);
              case t.ALPHANUMERIC:
                return new n(e);
              case t.KANJI:
                return new i(e);
              case t.BYTE:
                return new o(e);
            }
          }
          (e.fromArray = function (e) {
            return e.reduce(function (e, t) {
              return (
                'string' == typeof t ? e.push(p(t, null)) : t.data && e.push(p(t.data, t.mode)), e
              );
            }, []);
          }),
            (e.fromString = function (r, n) {
              const o = (function (e) {
                  const r = [];
                  for (let n = 0; n < e.length; n++) {
                    const o = e[n];
                    switch (o.mode) {
                      case t.NUMERIC:
                        r.push([
                          o,
                          { data: o.data, mode: t.ALPHANUMERIC, length: o.length },
                          { data: o.data, mode: t.BYTE, length: o.length },
                        ]);
                        break;
                      case t.ALPHANUMERIC:
                        r.push([o, { data: o.data, mode: t.BYTE, length: o.length }]);
                        break;
                      case t.KANJI:
                        r.push([o, { data: o.data, mode: t.BYTE, length: l(o.data) }]);
                        break;
                      case t.BYTE:
                        r.push([{ data: o.data, mode: t.BYTE, length: l(o.data) }]);
                    }
                  }
                  return r;
                })(u(r, a.isKanjiModeEnabled())),
                i = (function (e, r) {
                  const n = {},
                    o = { start: {} };
                  let i = ['start'];
                  for (let s = 0; s < e.length; s++) {
                    const a = e[s],
                      c = [];
                    for (let e = 0; e < a.length; e++) {
                      const l = a[e],
                        d = '' + s + e;
                      c.push(d), (n[d] = { node: l, lastCount: 0 }), (o[d] = {});
                      for (let e = 0; e < i.length; e++) {
                        const s = i[e];
                        n[s] && n[s].node.mode === l.mode
                          ? ((o[s][d] =
                              h(n[s].lastCount + l.length, l.mode) - h(n[s].lastCount, l.mode)),
                            (n[s].lastCount += l.length))
                          : (n[s] && (n[s].lastCount = l.length),
                            (o[s][d] =
                              h(l.length, l.mode) + 4 + t.getCharCountIndicator(l.mode, r)));
                      }
                    }
                    i = c;
                  }
                  for (let t = 0; t < i.length; t++) o[i[t]].end = 0;
                  return { map: o, table: n };
                })(o, n),
                s = c.find_path(i.map, 'start', 'end'),
                d = [];
              for (let e = 1; e < s.length - 1; e++) d.push(i.table[s[e]].node);
              return e.fromArray(
                d.reduce(function (e, t) {
                  const r = e.length - 1 >= 0 ? e[e.length - 1] : null;
                  return r && r.mode === t.mode
                    ? ((e[e.length - 1].data += t.data), e)
                    : (e.push(t), e);
                }, [])
              );
            }),
            (e.rawSplit = function (t) {
              return e.fromArray(u(t, a.isKanjiModeEnabled()));
            });
        })(Ip);
      const Hp = Fh,
        Fp = Zh,
        Vp = Kh,
        qp = Xh,
        Zp = Jh,
        Gp = Qh,
        Kp = tp,
        Yp = rp,
        Xp = hp,
        Jp = pp,
        Qp = kp,
        eg = gp,
        tg = Ip;
      function rg(e, t, r) {
        const n = e.size,
          o = Qp.getEncodedBits(t, r);
        let i, s;
        for (i = 0; i < 15; i++)
          (s = 1 === ((o >> i) & 1)),
            i < 6
              ? e.set(i, 8, s, !0)
              : i < 8
                ? e.set(i + 1, 8, s, !0)
                : e.set(n - 15 + i, 8, s, !0),
            i < 8
              ? e.set(8, n - i - 1, s, !0)
              : i < 9
                ? e.set(8, 15 - i - 1 + 1, s, !0)
                : e.set(8, 15 - i - 1, s, !0);
        e.set(n - 8, 8, 1, !0);
      }
      function ng(e, t, r) {
        const n = new Vp();
        r.forEach(function (t) {
          n.put(t.mode.bit, 4),
            n.put(t.getLength(), eg.getCharCountIndicator(t.mode, e)),
            t.write(n);
        });
        const o = 8 * (Hp.getSymbolTotalCodewords(e) - Yp.getTotalCodewordsCount(e, t));
        for (n.getLengthInBits() + 4 <= o && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
          n.putBit(0);
        const i = (o - n.getLengthInBits()) / 8;
        for (let s = 0; s < i; s++) n.put(s % 2 ? 17 : 236, 8);
        return (function (e, t, r) {
          const n = Hp.getSymbolTotalCodewords(t),
            o = Yp.getTotalCodewordsCount(t, r),
            i = n - o,
            s = Yp.getBlocksCount(t, r),
            a = s - (n % s),
            c = Math.floor(n / s),
            l = Math.floor(i / s),
            d = l + 1,
            u = c - l,
            h = new Xp(u);
          let p = 0;
          const g = new Array(s),
            f = new Array(s);
          let w = 0;
          const m = new Uint8Array(e.buffer);
          for (let x = 0; x < s; x++) {
            const e = x < a ? l : d;
            (g[x] = m.slice(p, p + e)), (f[x] = h.encode(g[x])), (p += e), (w = Math.max(w, e));
          }
          const v = new Uint8Array(n);
          let b,
            y,
            C = 0;
          for (b = 0; b < w; b++) for (y = 0; y < s; y++) b < g[y].length && (v[C++] = g[y][b]);
          for (b = 0; b < u; b++) for (y = 0; y < s; y++) v[C++] = f[y][b];
          return v;
        })(n, e, t);
      }
      function og(e, t, r, n) {
        let o;
        if (Array.isArray(e)) o = tg.fromArray(e);
        else {
          if ('string' != typeof e) throw new Error('Invalid data');
          {
            let n = t;
            if (!n) {
              const t = tg.rawSplit(e);
              n = Jp.getBestVersionForData(t, r);
            }
            o = tg.fromString(e, n || 40);
          }
        }
        const i = Jp.getBestVersionForData(o, r);
        if (!i) throw new Error('The amount of data is too big to be stored in a QR Code');
        if (t) {
          if (t < i)
            throw new Error(
              '\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: ' +
                i +
                '.\n'
            );
        } else t = i;
        const s = ng(t, r, o),
          a = Hp.getSymbolSize(t),
          c = new qp(a);
        return (
          (function (e, t) {
            const r = e.size,
              n = Gp.getPositions(t);
            for (let o = 0; o < n.length; o++) {
              const t = n[o][0],
                i = n[o][1];
              for (let n = -1; n <= 7; n++)
                if (!(t + n <= -1 || r <= t + n))
                  for (let o = -1; o <= 7; o++)
                    i + o <= -1 ||
                      r <= i + o ||
                      ((n >= 0 && n <= 6 && (0 === o || 6 === o)) ||
                      (o >= 0 && o <= 6 && (0 === n || 6 === n)) ||
                      (n >= 2 && n <= 4 && o >= 2 && o <= 4)
                        ? e.set(t + n, i + o, !0, !0)
                        : e.set(t + n, i + o, !1, !0));
            }
          })(c, t),
          (function (e) {
            const t = e.size;
            for (let r = 8; r < t - 8; r++) {
              const t = r % 2 === 0;
              e.set(r, 6, t, !0), e.set(6, r, t, !0);
            }
          })(c),
          (function (e, t) {
            const r = Zp.getPositions(t);
            for (let n = 0; n < r.length; n++) {
              const t = r[n][0],
                o = r[n][1];
              for (let r = -2; r <= 2; r++)
                for (let n = -2; n <= 2; n++)
                  -2 === r || 2 === r || -2 === n || 2 === n || (0 === r && 0 === n)
                    ? e.set(t + r, o + n, !0, !0)
                    : e.set(t + r, o + n, !1, !0);
            }
          })(c, t),
          rg(c, r, 0),
          t >= 7 &&
            (function (e, t) {
              const r = e.size,
                n = Jp.getEncodedBits(t);
              let o, i, s;
              for (let a = 0; a < 18; a++)
                (o = Math.floor(a / 3)),
                  (i = (a % 3) + r - 8 - 3),
                  (s = 1 === ((n >> a) & 1)),
                  e.set(o, i, s, !0),
                  e.set(i, o, s, !0);
            })(c, t),
          (function (e, t) {
            const r = e.size;
            let n = -1,
              o = r - 1,
              i = 7,
              s = 0;
            for (let a = r - 1; a > 0; a -= 2)
              for (6 === a && a--; ; ) {
                for (let r = 0; r < 2; r++)
                  if (!e.isReserved(o, a - r)) {
                    let n = !1;
                    s < t.length && (n = 1 === ((t[s] >>> i) & 1)),
                      e.set(o, a - r, n),
                      i--,
                      -1 === i && (s++, (i = 7));
                  }
                if (((o += n), o < 0 || r <= o)) {
                  (o -= n), (n = -n);
                  break;
                }
              }
          })(c, s),
          isNaN(n) && (n = Kp.getBestMask(c, rg.bind(null, c, r))),
          Kp.applyMask(n, c),
          rg(c, r, n),
          { modules: c, version: t, errorCorrectionLevel: r, maskPattern: n, segments: o }
        );
      }
      Hh.create = function (e, t) {
        if (typeof e > 'u' || '' === e) throw new Error('No input text');
        let r,
          n,
          o = Fp.M;
        return (
          typeof t < 'u' &&
            ((o = Fp.from(t.errorCorrectionLevel, Fp.M)),
            (r = Jp.from(t.version)),
            (n = Kp.from(t.maskPattern)),
            t.toSJISFunc && Hp.setToSJISFunction(t.toSJISFunc)),
          og(e, r, o, n)
        );
      };
      var ig = {},
        sg = {};
      (function (e) {
        function t(e) {
          if (('number' == typeof e && (e = e.toString()), 'string' != typeof e))
            throw new Error('Color should be defined as hex string');
          let t = e.slice().replace('#', '').split('');
          if (t.length < 3 || 5 === t.length || t.length > 8)
            throw new Error('Invalid hex color: ' + e);
          (3 === t.length || 4 === t.length) &&
            (t = Array.prototype.concat.apply(
              [],
              t.map(function (e) {
                return [e, e];
              })
            )),
            6 === t.length && t.push('F', 'F');
          const r = parseInt(t.join(''), 16);
          return {
            r: (r >> 24) & 255,
            g: (r >> 16) & 255,
            b: (r >> 8) & 255,
            a: 255 & r,
            hex: '#' + t.slice(0, 6).join(''),
          };
        }
        (e.getOptions = function (e) {
          e || (e = {}), e.color || (e.color = {});
          const r = typeof e.margin > 'u' || null === e.margin || e.margin < 0 ? 4 : e.margin,
            n = e.width && e.width >= 21 ? e.width : void 0,
            o = e.scale || 4;
          return {
            width: n,
            scale: n ? 4 : o,
            margin: r,
            color: { dark: t(e.color.dark || '#000000ff'), light: t(e.color.light || '#ffffffff') },
            type: e.type,
            rendererOpts: e.rendererOpts || {},
          };
        }),
          (e.getScale = function (e, t) {
            return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale;
          }),
          (e.getImageWidth = function (t, r) {
            const n = e.getScale(t, r);
            return Math.floor((t + 2 * r.margin) * n);
          }),
          (e.qrToImageData = function (t, r, n) {
            const o = r.modules.size,
              i = r.modules.data,
              s = e.getScale(o, n),
              a = Math.floor((o + 2 * n.margin) * s),
              c = n.margin * s,
              l = [n.color.light, n.color.dark];
            for (let e = 0; e < a; e++)
              for (let r = 0; r < a; r++) {
                let d = 4 * (e * a + r),
                  u = n.color.light;
                if (e >= c && r >= c && e < a - c && r < a - c) {
                  u = l[i[Math.floor((e - c) / s) * o + Math.floor((r - c) / s)] ? 1 : 0];
                }
                (t[d++] = u.r), (t[d++] = u.g), (t[d++] = u.b), (t[d] = u.a);
              }
          });
      })(sg),
        (function (e) {
          const t = sg;
          (e.render = function (e, r, n) {
            let o = n,
              i = r;
            typeof o > 'u' && (!r || !r.getContext) && ((o = r), (r = void 0)),
              r ||
                (i = (function () {
                  try {
                    return document.createElement('canvas');
                  } catch {
                    throw new Error('You need to specify a canvas element');
                  }
                })()),
              (o = t.getOptions(o));
            const s = t.getImageWidth(e.modules.size, o),
              a = i.getContext('2d'),
              c = a.createImageData(s, s);
            return (
              t.qrToImageData(c.data, e, o),
              (function (e, t, r) {
                e.clearRect(0, 0, t.width, t.height),
                  t.style || (t.style = {}),
                  (t.height = r),
                  (t.width = r),
                  (t.style.height = r + 'px'),
                  (t.style.width = r + 'px');
              })(a, i, s),
              a.putImageData(c, 0, 0),
              i
            );
          }),
            (e.renderToDataURL = function (t, r, n) {
              let o = n;
              typeof o > 'u' && (!r || !r.getContext) && ((o = r), (r = void 0)), o || (o = {});
              const i = e.render(t, r, o),
                s = o.type || 'image/png',
                a = o.rendererOpts || {};
              return i.toDataURL(s, a.quality);
            });
        })(ig);
      var ag = {};
      const cg = sg;
      function lg(e, t) {
        const r = e.a / 255,
          n = t + '="' + e.hex + '"';
        return r < 1 ? n + ' ' + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
      }
      function dg(e, t, r) {
        let n = e + t;
        return typeof r < 'u' && (n += ' ' + r), n;
      }
      ag.render = function (e, t, r) {
        const n = cg.getOptions(t),
          o = e.modules.size,
          i = e.modules.data,
          s = o + 2 * n.margin,
          a = n.color.light.a
            ? '<path ' + lg(n.color.light, 'fill') + ' d="M0 0h' + s + 'v' + s + 'H0z"/>'
            : '',
          c =
            '<path ' +
            lg(n.color.dark, 'stroke') +
            ' d="' +
            (function (e, t, r) {
              let n = '',
                o = 0,
                i = !1,
                s = 0;
              for (let a = 0; a < e.length; a++) {
                const c = Math.floor(a % t),
                  l = Math.floor(a / t);
                !c && !i && (i = !0),
                  e[a]
                    ? (s++,
                      (a > 0 && c > 0 && e[a - 1]) ||
                        ((n += i ? dg('M', c + r, 0.5 + l + r) : dg('m', o, 0)), (o = 0), (i = !1)),
                      (c + 1 < t && e[a + 1]) || ((n += dg('h', s)), (s = 0)))
                    : o++;
              }
              return n;
            })(i, o, n.margin) +
            '"/>',
          l = 'viewBox="0 0 ' + s + ' ' + s + '"',
          d =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : '') +
            l +
            ' shape-rendering="crispEdges">' +
            a +
            c +
            '</svg>\n';
        return 'function' == typeof r && r(null, d), d;
      };
      const ug = function () {
          return 'function' == typeof Promise && Promise.prototype && Promise.prototype.then;
        },
        hg = Hh,
        pg = ig,
        gg = ag;
      function fg(e, t, r, n, o) {
        const i = [].slice.call(arguments, 1),
          s = i.length,
          a = 'function' == typeof i[s - 1];
        if (!a && !ug()) throw new Error('Callback required as last argument');
        if (!a) {
          if (s < 1) throw new Error('Too few arguments provided');
          return (
            1 === s
              ? ((r = t), (t = n = void 0))
              : 2 === s && !t.getContext && ((n = r), (r = t), (t = void 0)),
            new Promise(function (o, i) {
              try {
                const i = hg.create(r, n);
                o(e(i, t, n));
              } catch (s) {
                i(s);
              }
            })
          );
        }
        if (s < 2) throw new Error('Too few arguments provided');
        2 === s
          ? ((o = r), (r = t), (t = n = void 0))
          : 3 === s &&
            (t.getContext && typeof o > 'u'
              ? ((o = n), (n = void 0))
              : ((o = n), (n = r), (r = t), (t = void 0)));
        try {
          const i = hg.create(r, n);
          o(null, e(i, t, n));
        } catch (c) {
          o(c);
        }
      }
      (Wh.create = hg.create),
        (Wh.toCanvas = fg.bind(null, pg.render)),
        (Wh.toDataURL = fg.bind(null, pg.renderToDataURL)),
        (Wh.toString = fg.bind(null, function (e, t, r) {
          return gg.render(e, r);
        }));
      function wg(e, t, r) {
        return e !== t && (e - t < 0 ? t - e : e - t) <= r + 0.1;
      }
      const mg = {
        generate({ uri: e, size: t, logoSize: r, dotColor: n = '#141414' }) {
          const o = [],
            i = (function (e, t) {
              const r = Array.prototype.slice.call(
                  Wh.create(e, { errorCorrectionLevel: t }).modules.data,
                  0
                ),
                n = Math.sqrt(r.length);
              return r.reduce(
                (e, t, r) => (r % n === 0 ? e.push([t]) : e[e.length - 1].push(t)) && e,
                []
              );
            })(e, 'Q'),
            s = t / i.length,
            a = [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 0, y: 1 },
            ];
          a.forEach(({ x: e, y: t }) => {
            const r = (i.length - 7) * s * e,
              c = (i.length - 7) * s * t,
              l = 0.45;
            for (let i = 0; i < a.length; i += 1) {
              const e = s * (7 - 2 * i);
              o.push(Tl`
            <rect
              fill=${2 === i ? n : 'transparent'}
              width=${0 === i ? e - 5 : e}
              rx= ${0 === i ? (e - 5) * l : e * l}
              ry= ${0 === i ? (e - 5) * l : e * l}
              stroke=${n}
              stroke-width=${0 === i ? 5 : 0}
              height=${0 === i ? e - 5 : e}
              x= ${0 === i ? c + s * i + 2.5 : c + s * i}
              y= ${0 === i ? r + s * i + 2.5 : r + s * i}
            />
          `);
            }
          });
          const c = Math.floor((r + 25) / s),
            l = i.length / 2 - c / 2,
            d = i.length / 2 + c / 2 - 1,
            u = [];
          i.forEach((e, t) => {
            e.forEach((e, r) => {
              if (
                i[t][r] &&
                !((t < 7 && r < 7) || (t > i.length - 8 && r < 7) || (t < 7 && r > i.length - 8)) &&
                !(t > l && t < d && r > l && r < d)
              ) {
                const e = t * s + s / 2,
                  n = r * s + s / 2;
                u.push([e, n]);
              }
            });
          });
          const h = {};
          return (
            u.forEach(([e, t]) => {
              h[e] ? h[e]?.push(t) : (h[e] = [t]);
            }),
            Object.entries(h)
              .map(([e, t]) => {
                const r = t.filter((e) => t.every((t) => !wg(e, t, s)));
                return [Number(e), r];
              })
              .forEach(([e, t]) => {
                t.forEach((t) => {
                  o.push(Tl`<circle cx=${e} cy=${t} fill=${n} r=${s / 2.5} />`);
                });
              }),
            Object.entries(h)
              .filter(([e, t]) => t.length > 1)
              .map(([e, t]) => {
                const r = t.filter((e) => t.some((t) => wg(e, t, s)));
                return [Number(e), r];
              })
              .map(([e, t]) => {
                t.sort((e, t) => (e < t ? -1 : 1));
                const r = [];
                for (const n of t) {
                  const e = r.find((e) => e.some((e) => wg(n, e, s)));
                  e ? e.push(n) : r.push([n]);
                }
                return [e, r.map((e) => [e[0], e[e.length - 1]])];
              })
              .forEach(([e, t]) => {
                t.forEach(([t, r]) => {
                  o.push(Tl`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${s / 1.25}
                stroke-linecap="round"
              />
            `);
                });
              }),
            o
          );
        },
      };
      var vg = Zc`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,
        bg = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let yg = class extends Zl {
        constructor() {
          super(...arguments),
            (this.uri = ''),
            (this.size = 0),
            (this.theme = 'dark'),
            (this.imageSrc = void 0),
            (this.alt = void 0),
            (this.arenaClear = void 0),
            (this.farcaster = void 0);
        }
        render() {
          return (
            (this.dataset.theme = this.theme),
            (this.dataset.clear = String(this.arenaClear)),
            (this.style.cssText = `\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color ?? '#3396ff'}\n    `),
            Pl`${this.templateVisual()} ${this.templateSvg()}`
          );
        }
        templateSvg() {
          const e = 'light' === this.theme ? this.size : this.size - 32;
          return Tl`
      <svg height=${e} width=${e}>
        ${mg.generate({ uri: this.uri, size: e, logoSize: this.arenaClear ? 0 : e / 4, dotColor: this.color })}
      </svg>
    `;
        }
        templateVisual() {
          return this.imageSrc
            ? Pl`<wui-image src=${this.imageSrc} alt=${this.alt ?? 'logo'}></wui-image>`
            : this.farcaster
              ? Pl`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`
              : Pl`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
        }
      };
      (yg.styles = [Ql, vg]),
        bg([Hd()], yg.prototype, 'uri', void 0),
        bg([Hd({ type: Number })], yg.prototype, 'size', void 0),
        bg([Hd()], yg.prototype, 'theme', void 0),
        bg([Hd()], yg.prototype, 'imageSrc', void 0),
        bg([Hd()], yg.prototype, 'alt', void 0),
        bg([Hd()], yg.prototype, 'color', void 0),
        bg([Hd({ type: Boolean })], yg.prototype, 'arenaClear', void 0),
        bg([Hd({ type: Boolean })], yg.prototype, 'farcaster', void 0),
        (yg = bg([nd('wui-qr-code')], yg));
      var Cg = Zc`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,
        xg = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let kg = class extends Zl {
        constructor() {
          super(...arguments),
            (this.width = ''),
            (this.height = ''),
            (this.borderRadius = 'm'),
            (this.variant = 'default');
        }
        render() {
          return (
            (this.style.cssText = `\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `),
            Pl`<slot></slot>`
          );
        }
      };
      (kg.styles = [Cg]),
        xg([Hd()], kg.prototype, 'width', void 0),
        xg([Hd()], kg.prototype, 'height', void 0),
        xg([Hd()], kg.prototype, 'borderRadius', void 0),
        xg([Hd()], kg.prototype, 'variant', void 0),
        (kg = xg([nd('wui-shimmer')], kg));
      var Ag = Zc`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;
      let Eg = class extends Zl {
        render() {
          return Pl`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${['0', '0', 'l', '0']}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `;
        }
      };
      (Eg.styles = [Ql, ed, Ag]),
        (Eg = (function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        })([nd('wui-ux-by-reown')], Eg));
      var Ig = Zc`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;
      let Ng = class extends Mh {
        constructor() {
          super(),
            (this.forceUpdate = () => {
              this.requestUpdate();
            }),
            window.addEventListener('resize', this.forceUpdate),
            Je.sendEvent({
              type: 'track',
              event: 'SELECT_WALLET',
              properties: { name: this.wallet?.name ?? 'WalletConnect', platform: 'qrcode' },
            });
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            this.unsubscribe?.forEach((e) => e()),
            window.removeEventListener('resize', this.forceUpdate);
        }
        render() {
          return (
            this.onRenderProxy(),
            Pl`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['0', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
          );
        }
        onRenderProxy() {
          !this.ready &&
            this.uri &&
            (this.timeout = setTimeout(() => {
              this.ready = !0;
            }, 200));
        }
        qrCodeTemplate() {
          if (!this.uri || !this.ready) return null;
          const e = this.getBoundingClientRect().width - 40,
            t = this.wallet ? this.wallet.name : void 0;
          return (
            Ct.setWcLinking(void 0),
            Ct.setRecentWallet(this.wallet),
            Pl` <wui-qr-code
      size=${e}
      theme=${at.state.themeMode}
      uri=${this.uri}
      imageSrc=${Gd(We.getWalletImage(this.wallet))}
      color=${Gd(at.state.themeVariables['--w3m-qr-color'])}
      alt=${Gd(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`
          );
        }
        copyTemplate() {
          const e = !this.uri || !this.ready;
          return Pl`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
        }
      };
      (Ng.styles = Ig),
        (Ng = (function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        })([nd('w3m-connecting-wc-qrcode')], Ng));
      let Sg = class extends Zl {
        constructor() {
          if ((super(), (this.wallet = it.state.data?.wallet), !this.wallet))
            throw new Error('w3m-connecting-wc-unsupported: No wallet provided');
          Je.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: { name: this.wallet.name, platform: 'browser' },
          });
        }
        render() {
          return Pl`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Gd(We.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
        }
      };
      Sg = (function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      })([nd('w3m-connecting-wc-unsupported')], Sg);
      var _g = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Pg = class extends Mh {
        constructor() {
          if ((super(), (this.isLoading = !0), !this.wallet))
            throw new Error('w3m-connecting-wc-web: No wallet provided');
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.secondaryBtnLabel = 'Open'),
            (this.secondaryLabel = 'Open and continue in a new browser tab'),
            (this.secondaryBtnIcon = 'externalLink'),
            this.updateLoadingState(),
            this.unsubscribe.push(
              Ct.subscribeKey('wcUri', () => {
                this.updateLoadingState();
              })
            ),
            Je.sendEvent({
              type: 'track',
              event: 'SELECT_WALLET',
              properties: { name: this.wallet.name, platform: 'web' },
            });
        }
        updateLoadingState() {
          this.isLoading = !this.uri;
        }
        onConnectProxy() {
          if (this.wallet?.webapp_link && this.uri)
            try {
              this.error = !1;
              const { webapp_link: e, name: t } = this.wallet,
                { redirect: r, href: n } = Re.formatUniversalUrl(e, this.uri);
              Ct.setWcLinking({ name: t, href: n }),
                Ct.setRecentWallet(this.wallet),
                Re.openHref(r, '_blank');
            } catch {
              this.error = !0;
            }
        }
      };
      _g([Fd()], Pg.prototype, 'isLoading', void 0), (Pg = _g([nd('w3m-connecting-wc-web')], Pg));
      var Tg = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Og = class extends Zl {
        constructor() {
          super(),
            (this.wallet = it.state.data?.wallet),
            (this.platform = void 0),
            (this.platforms = []),
            (this.isSiwxEnabled = !!Ve.state.siwx),
            this.determinePlatforms(),
            this.initializeConnection();
        }
        render() {
          return Pl`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `;
        }
        async initializeConnection(e = !1) {
          if ('browser' !== this.platform && (!Ve.state.manualWCControl || e))
            try {
              const { wcPairingExpiry: t, status: r } = Ct.state;
              (e || Ve.state.enableEmbedded || Re.isPairingExpired(t) || 'connecting' === r) &&
                (await Ct.connectWalletConnect(), this.isSiwxEnabled || Ca.close());
            } catch (t) {
              Je.sendEvent({
                type: 'track',
                event: 'CONNECT_ERROR',
                properties: { message: t?.message ?? 'Unknown' },
              }),
                Ct.setWcError(!0),
                ft.showError(t.message ?? 'Connection error'),
                Ct.resetWcConnection(),
                it.goBack();
            }
        }
        determinePlatforms() {
          if (!this.wallet) return this.platforms.push('qrcode'), void (this.platform = 'qrcode');
          if (this.platform) return;
          const {
              mobile_link: e,
              desktop_link: t,
              webapp_link: r,
              injected: n,
              rdns: o,
            } = this.wallet,
            i = n?.map(({ injected_id: e }) => e).filter(Boolean),
            s = [...(o ? [o] : (i ?? []))],
            a = !Ve.state.isUniversalProvider && s.length,
            c = e,
            l = r,
            d = Ct.checkInstalled(s),
            u = a && d,
            h = t && !Re.isMobile();
          u && !pa.state.noAdapters && this.platforms.push('browser'),
            c && this.platforms.push(Re.isMobile() ? 'mobile' : 'qrcode'),
            l && this.platforms.push('web'),
            h && this.platforms.push('desktop'),
            !u && a && !pa.state.noAdapters && this.platforms.push('unsupported'),
            (this.platform = this.platforms[0]);
        }
        platformTemplate() {
          switch (this.platform) {
            case 'browser':
              return Pl`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
            case 'web':
              return Pl`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
            case 'desktop':
              return Pl`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
            case 'mobile':
              return Pl`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
            case 'qrcode':
              return Pl`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
            default:
              return Pl`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
          }
        }
        headerTemplate() {
          return this.platforms.length > 1
            ? Pl`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `
            : null;
        }
        async onSelectPlatform(e) {
          const t = this.shadowRoot?.querySelector('div');
          t &&
            (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 200,
              fill: 'forwards',
              easing: 'ease',
            }).finished,
            (this.platform = e),
            t.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 200,
              fill: 'forwards',
              easing: 'ease',
            }));
        }
      };
      Tg([Fd()], Og.prototype, 'platform', void 0),
        Tg([Fd()], Og.prototype, 'platforms', void 0),
        Tg([Fd()], Og.prototype, 'isSiwxEnabled', void 0),
        (Og = Tg([nd('w3m-connecting-wc-view')], Og));
      var $g = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let Rg = class extends Zl {
        constructor() {
          super(...arguments), (this.isMobile = Re.isMobile());
        }
        render() {
          if (this.isMobile) {
            const { featured: e, recommended: t } = nt.state,
              { customWallets: r } = Ve.state,
              n = $e.getRecentWallets(),
              o = e.length || t.length || r?.length || n.length;
            return Pl`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${['3xs', 's', 's', 's']}
      >
        ${o ? Pl`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
          }
          return Pl`<wui-flex flexDirection="column" .padding=${['0', '0', 'l', '0']}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${['0', 'm', '0', 'm']}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`;
        }
      };
      $g([Fd()], Rg.prototype, 'isMobile', void 0),
        (Rg = $g([nd('w3m-connecting-wc-basic-view')], Rg));
      const Bg = () => new Lg();
      class Lg {}
      const Ug = new WeakMap(),
        Mg = Xd(
          class extends iu {
            render(e) {
              return $l;
            }
            update(e, [t]) {
              const r = t !== this.G;
              return (
                r && void 0 !== this.G && this.rt(void 0),
                (r || this.lt !== this.ct) &&
                  ((this.G = t), (this.ht = e.options?.host), this.rt((this.ct = e.element))),
                $l
              );
            }
            rt(e) {
              if ((this.isConnected || (e = void 0), 'function' == typeof this.G)) {
                const t = this.ht ?? globalThis;
                let r = Ug.get(t);
                void 0 === r && ((r = new WeakMap()), Ug.set(t, r)),
                  void 0 !== r.get(this.G) && this.G.call(this.ht, void 0),
                  r.set(this.G, e),
                  void 0 !== e && this.G.call(this.ht, e);
              } else this.G.value = e;
            }
            get lt() {
              return 'function' == typeof this.G
                ? Ug.get(this.ht ?? globalThis)?.get(this.G)
                : this.G?.value;
            }
            disconnected() {
              this.lt === this.ct && this.rt(void 0);
            }
            reconnected() {
              this.rt(this.ct);
            }
          }
        );
      var zg = Zc`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,
        jg = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Dg = class extends Zl {
        constructor() {
          super(...arguments), (this.inputElementRef = Bg()), (this.checked = void 0);
        }
        render() {
          return Pl`
      <label>
        <input
          ${Mg(this.inputElementRef)}
          type="checkbox"
          ?checked=${Gd(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
        }
        dispatchChangeEvent() {
          this.dispatchEvent(
            new CustomEvent('switchChange', {
              detail: this.inputElementRef.value?.checked,
              bubbles: !0,
              composed: !0,
            })
          );
        }
      };
      (Dg.styles = [Ql, ed, td, zg]),
        jg([Hd({ type: Boolean })], Dg.prototype, 'checked', void 0),
        (Dg = jg([nd('wui-switch')], Dg));
      var Wg = Zc`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,
        Hg = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Fg = class extends Zl {
        constructor() {
          super(...arguments), (this.checked = void 0);
        }
        render() {
          return Pl`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${Gd(this.checked)}></wui-switch>
      </button>
    `;
        }
      };
      (Fg.styles = [Ql, ed, Wg]),
        Hg([Hd({ type: Boolean })], Fg.prototype, 'checked', void 0),
        (Fg = Hg([nd('wui-certified-switch')], Fg));
      var Vg = Zc`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,
        qg = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Zg = class extends Zl {
        constructor() {
          super(...arguments), (this.icon = 'copy');
        }
        render() {
          return Pl`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
        }
      };
      (Zg.styles = [Ql, ed, Vg]),
        qg([Hd()], Zg.prototype, 'icon', void 0),
        (Zg = qg([nd('wui-input-element')], Zg));
      var Gg = Zc`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,
        Kg = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Yg = class extends Zl {
        constructor() {
          super(...arguments),
            (this.inputElementRef = Bg()),
            (this.size = 'md'),
            (this.disabled = !1),
            (this.placeholder = ''),
            (this.type = 'text'),
            (this.value = '');
        }
        render() {
          const e = `wui-padding-right-${this.inputRightPadding}`,
            t = { [`wui-size-${this.size}`]: !0, [e]: !!this.inputRightPadding };
          return Pl`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Mg(this.inputElementRef)}
        class=${wu(t)}
        type=${this.type}
        enterkeyhint=${Gd(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value || ''}
        tabindex=${Gd(this.tabIdx)}
      />
      <slot></slot>`;
        }
        templateIcon() {
          return this.icon
            ? Pl`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`
            : null;
        }
        dispatchInputChangeEvent() {
          this.dispatchEvent(
            new CustomEvent('inputChange', {
              detail: this.inputElementRef.value?.value,
              bubbles: !0,
              composed: !0,
            })
          );
        }
      };
      (Yg.styles = [Ql, ed, Gg]),
        Kg([Hd()], Yg.prototype, 'size', void 0),
        Kg([Hd()], Yg.prototype, 'icon', void 0),
        Kg([Hd({ type: Boolean })], Yg.prototype, 'disabled', void 0),
        Kg([Hd()], Yg.prototype, 'placeholder', void 0),
        Kg([Hd()], Yg.prototype, 'type', void 0),
        Kg([Hd()], Yg.prototype, 'keyHint', void 0),
        Kg([Hd()], Yg.prototype, 'value', void 0),
        Kg([Hd()], Yg.prototype, 'inputRightPadding', void 0),
        Kg([Hd()], Yg.prototype, 'tabIdx', void 0),
        (Yg = Kg([nd('wui-input-text')], Yg));
      var Xg = Zc`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
      let Jg = class extends Zl {
        constructor() {
          super(...arguments), (this.inputComponentRef = Bg());
        }
        render() {
          return Pl`
      <wui-input-text
        ${Mg(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `;
        }
        clearValue() {
          const e = this.inputComponentRef.value?.inputElementRef.value;
          e && ((e.value = ''), e.focus(), e.dispatchEvent(new Event('input')));
        }
      };
      (Jg.styles = [Ql, Xg]),
        (Jg = (function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        })([nd('wui-search-bar')], Jg));
      const Qg = Tl`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
      var ef = Zc`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,
        tf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let rf = class extends Zl {
        constructor() {
          super(...arguments), (this.type = 'wallet');
        }
        render() {
          return Pl`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
        }
        shimmerTemplate() {
          return 'network' === this.type
            ? Pl` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Qg}`
            : Pl`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
        }
      };
      (rf.styles = [Ql, ed, ef]),
        tf([Hd()], rf.prototype, 'type', void 0),
        (rf = tf([nd('wui-card-select-loader')], rf));
      var nf = Zc`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,
        of = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let sf = class extends Zl {
        render() {
          return (
            (this.style.cssText = `\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding && rd.getSpacingStyles(this.padding, 0)};\n      padding-right: ${this.padding && rd.getSpacingStyles(this.padding, 1)};\n      padding-bottom: ${this.padding && rd.getSpacingStyles(this.padding, 2)};\n      padding-left: ${this.padding && rd.getSpacingStyles(this.padding, 3)};\n      margin-top: ${this.margin && rd.getSpacingStyles(this.margin, 0)};\n      margin-right: ${this.margin && rd.getSpacingStyles(this.margin, 1)};\n      margin-bottom: ${this.margin && rd.getSpacingStyles(this.margin, 2)};\n      margin-left: ${this.margin && rd.getSpacingStyles(this.margin, 3)};\n    `),
            Pl`<slot></slot>`
          );
        }
      };
      (sf.styles = [Ql, nf]),
        of([Hd()], sf.prototype, 'gridTemplateRows', void 0),
        of([Hd()], sf.prototype, 'gridTemplateColumns', void 0),
        of([Hd()], sf.prototype, 'justifyItems', void 0),
        of([Hd()], sf.prototype, 'alignItems', void 0),
        of([Hd()], sf.prototype, 'justifyContent', void 0),
        of([Hd()], sf.prototype, 'alignContent', void 0),
        of([Hd()], sf.prototype, 'columnGap', void 0),
        of([Hd()], sf.prototype, 'rowGap', void 0),
        of([Hd()], sf.prototype, 'gap', void 0),
        of([Hd()], sf.prototype, 'padding', void 0),
        of([Hd()], sf.prototype, 'margin', void 0),
        (sf = of([nd('wui-grid')], sf));
      var af = Zc`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,
        cf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let lf = class extends Zl {
        constructor() {
          super(),
            (this.observer = new IntersectionObserver(() => {})),
            (this.visible = !1),
            (this.imageSrc = void 0),
            (this.imageLoading = !1),
            (this.wallet = void 0),
            (this.observer = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting
                    ? ((this.visible = !0), this.fetchImageSrc())
                    : (this.visible = !1);
                });
              },
              { threshold: 0.01 }
            ));
        }
        firstUpdated() {
          this.observer.observe(this);
        }
        disconnectedCallback() {
          this.observer.disconnect();
        }
        render() {
          const e = 'certified' === this.wallet?.badge_type;
          return Pl`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${Gd(e ? 'certified' : void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e ? Pl`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
        }
        imageTemplate() {
          return (!this.visible && !this.imageSrc) || this.imageLoading
            ? this.shimmerTemplate()
            : Pl`
      <wui-wallet-image
        size="md"
        imageSrc=${Gd(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
        }
        shimmerTemplate() {
          return Pl`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
        }
        async fetchImageSrc() {
          this.wallet &&
            ((this.imageSrc = We.getWalletImage(this.wallet)),
            !this.imageSrc &&
              ((this.imageLoading = !0),
              (this.imageSrc = await We.fetchWalletImage(this.wallet.image_id)),
              (this.imageLoading = !1)));
        }
      };
      (lf.styles = af),
        cf([Fd()], lf.prototype, 'visible', void 0),
        cf([Fd()], lf.prototype, 'imageSrc', void 0),
        cf([Fd()], lf.prototype, 'imageLoading', void 0),
        cf([Hd()], lf.prototype, 'wallet', void 0),
        (lf = cf([nd('w3m-all-wallets-list-item')], lf));
      var df = Zc`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,
        uf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      const hf = 'local-paginator';
      let pf = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.paginationObserver = void 0),
            (this.loading = !nt.state.wallets.length),
            (this.wallets = nt.state.wallets),
            (this.recommended = nt.state.recommended),
            (this.featured = nt.state.featured),
            this.unsubscribe.push(
              nt.subscribeKey('wallets', (e) => (this.wallets = e)),
              nt.subscribeKey('recommended', (e) => (this.recommended = e)),
              nt.subscribeKey('featured', (e) => (this.featured = e))
            );
        }
        firstUpdated() {
          this.initialFetch(), this.createPaginationObserver();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()), this.paginationObserver?.disconnect();
        }
        render() {
          return Pl`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${['0', 's', 's', 's']}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
        }
        async initialFetch() {
          this.loading = !0;
          const e = this.shadowRoot?.querySelector('wui-grid');
          e &&
            (await nt.fetchWalletsByPage({ page: 1 }),
            await e.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 200,
              fill: 'forwards',
              easing: 'ease',
            }).finished,
            (this.loading = !1),
            e.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 200,
              fill: 'forwards',
              easing: 'ease',
            }));
        }
        shimmerTemplate(e, t) {
          return [...Array(e)].map(
            () => Pl`
        <wui-card-select-loader type="wallet" id=${Gd(t)}></wui-card-select-loader>
      `
          );
        }
        walletsTemplate() {
          const e = Re.uniqueBy([...this.featured, ...this.recommended, ...this.wallets], 'id');
          return zc.markWalletsAsInstalled(e).map(
            (e) => Pl`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `
          );
        }
        paginationLoaderTemplate() {
          const { wallets: e, recommended: t, featured: r, count: n } = nt.state,
            o = window.innerWidth < 352 ? 3 : 4,
            i = e.length + t.length;
          let s = Math.ceil(i / o) * o - i + o;
          return (
            (s -= e.length ? r.length % o : 0),
            0 === n && r.length > 0
              ? null
              : 0 === n || [...r, ...e, ...t].length < n
                ? this.shimmerTemplate(s, hf)
                : null
          );
        }
        createPaginationObserver() {
          const e = this.shadowRoot?.querySelector(`#${hf}`);
          e &&
            ((this.paginationObserver = new IntersectionObserver(([e]) => {
              if (e?.isIntersecting && !this.loading) {
                const { page: e, count: t, wallets: r } = nt.state;
                r.length < t && nt.fetchWalletsByPage({ page: e + 1 });
              }
            })),
            this.paginationObserver.observe(e));
        }
        onConnectWallet(e) {
          dt.selectWalletConnector(e);
        }
      };
      (pf.styles = df),
        uf([Fd()], pf.prototype, 'loading', void 0),
        uf([Fd()], pf.prototype, 'wallets', void 0),
        uf([Fd()], pf.prototype, 'recommended', void 0),
        uf([Fd()], pf.prototype, 'featured', void 0),
        (pf = uf([nd('w3m-all-wallets-list')], pf));
      var gf = Zc`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,
        ff = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let wf = class extends Zl {
        constructor() {
          super(...arguments),
            (this.prevQuery = ''),
            (this.prevBadge = void 0),
            (this.loading = !0),
            (this.query = '');
        }
        render() {
          return (
            this.onSearch(),
            this.loading
              ? Pl`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`
              : this.walletsTemplate()
          );
        }
        async onSearch() {
          (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) &&
            ((this.prevQuery = this.query),
            (this.prevBadge = this.badge),
            (this.loading = !0),
            await nt.searchWallet({ search: this.query, badge: this.badge }),
            (this.loading = !1));
        }
        walletsTemplate() {
          const { search: e } = nt.state,
            t = zc.markWalletsAsInstalled(e);
          return e.length
            ? Pl`
      <wui-grid
        data-testid="wallet-list"
        .padding=${['0', 's', 's', 's']}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(
          (e) => Pl`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
            : Pl`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
        }
        onConnectWallet(e) {
          dt.selectWalletConnector(e);
        }
      };
      (wf.styles = gf),
        ff([Fd()], wf.prototype, 'loading', void 0),
        ff([Hd()], wf.prototype, 'query', void 0),
        ff([Hd()], wf.prototype, 'badge', void 0),
        (wf = ff([nd('w3m-all-wallets-search')], wf));
      var mf = function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      };
      let vf = class extends Zl {
        constructor() {
          super(...arguments),
            (this.search = ''),
            (this.onDebouncedSearch = Re.debounce((e) => {
              this.search = e;
            }));
        }
        render() {
          const e = this.search.length >= 2;
          return Pl`
      <wui-flex .padding=${['0', 's', 's', 's']} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${
        e || this.badge
          ? Pl`<w3m-all-wallets-search
            query=${this.search}
            badge=${Gd(this.badge)}
          ></w3m-all-wallets-search>`
          : Pl`<w3m-all-wallets-list badge=${Gd(this.badge)}></w3m-all-wallets-list>`
      }
    `;
        }
        onInputChange(e) {
          this.onDebouncedSearch(e.detail);
        }
        onClick() {
          'certified' !== this.badge
            ? ((this.badge = 'certified'),
              ft.showSvg('Only WalletConnect certified', {
                icon: 'walletConnectBrown',
                iconColor: 'accent-100',
              }))
            : (this.badge = void 0);
        }
        qrButtonTemplate() {
          return Re.isMobile()
            ? Pl`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `
            : null;
        }
        onWalletConnectQr() {
          it.push('ConnectingWalletConnect');
        }
      };
      mf([Fd()], vf.prototype, 'search', void 0),
        mf([Fd()], vf.prototype, 'badge', void 0),
        (vf = mf([nd('w3m-all-wallets-view')], vf));
      var bf = Zc`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,
        yf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Cf = class extends Zl {
        constructor() {
          super(...arguments),
            (this.tabIdx = void 0),
            (this.variant = 'icon'),
            (this.disabled = !1),
            (this.imageSrc = void 0),
            (this.alt = void 0),
            (this.chevron = !1),
            (this.loading = !1);
        }
        render() {
          return Pl`
      <button
        ?disabled=${!!this.loading || !!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Gd(this.iconVariant)}
        tabindex=${Gd(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `;
        }
        visualTemplate() {
          if ('image' === this.variant && this.imageSrc)
            return Pl`<wui-image src=${this.imageSrc} alt=${this.alt ?? 'list item'}></wui-image>`;
          if ('square' === this.iconVariant && this.icon && 'icon' === this.variant)
            return Pl`<wui-icon name=${this.icon}></wui-icon>`;
          if ('icon' === this.variant && this.icon && this.iconVariant) {
            const e = ['blue', 'square-blue'].includes(this.iconVariant) ? 'accent-100' : 'fg-200',
              t = 'square-blue' === this.iconVariant ? 'mdl' : 'md',
              r = this.iconSize ? this.iconSize : t;
            return Pl`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `;
          }
          return null;
        }
        loadingTemplate() {
          return this.loading
            ? Pl`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`
            : Pl``;
        }
        chevronTemplate() {
          return this.chevron
            ? Pl`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`
            : null;
        }
      };
      (Cf.styles = [Ql, ed, bf]),
        yf([Hd()], Cf.prototype, 'icon', void 0),
        yf([Hd()], Cf.prototype, 'iconSize', void 0),
        yf([Hd()], Cf.prototype, 'tabIdx', void 0),
        yf([Hd()], Cf.prototype, 'variant', void 0),
        yf([Hd()], Cf.prototype, 'iconVariant', void 0),
        yf([Hd({ type: Boolean })], Cf.prototype, 'disabled', void 0),
        yf([Hd()], Cf.prototype, 'imageSrc', void 0),
        yf([Hd()], Cf.prototype, 'alt', void 0),
        yf([Hd({ type: Boolean })], Cf.prototype, 'chevron', void 0),
        yf([Hd({ type: Boolean })], Cf.prototype, 'loading', void 0),
        (Cf = yf([nd('wui-list-item')], Cf));
      let xf = class extends Zl {
        constructor() {
          super(...arguments), (this.wallet = it.state.data?.wallet);
        }
        render() {
          if (!this.wallet) throw new Error('w3m-downloads-view');
          return Pl`
      <wui-flex gap="xs" flexDirection="column" .padding=${['s', 's', 'l', 's']}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
        }
        chromeTemplate() {
          return this.wallet?.chrome_store
            ? Pl`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`
            : null;
        }
        iosTemplate() {
          return this.wallet?.app_store
            ? Pl`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`
            : null;
        }
        androidTemplate() {
          return this.wallet?.play_store
            ? Pl`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`
            : null;
        }
        homepageTemplate() {
          return this.wallet?.homepage
            ? Pl`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `
            : null;
        }
        onChromeStore() {
          this.wallet?.chrome_store && Re.openHref(this.wallet.chrome_store, '_blank');
        }
        onAppStore() {
          this.wallet?.app_store && Re.openHref(this.wallet.app_store, '_blank');
        }
        onPlayStore() {
          this.wallet?.play_store && Re.openHref(this.wallet.play_store, '_blank');
        }
        onHomePage() {
          this.wallet?.homepage && Re.openHref(this.wallet.homepage, '_blank');
        }
      };
      xf = (function (e, t, r, n) {
        var o,
          i = arguments.length,
          s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
        return i > 3 && s && Object.defineProperty(t, r, s), s;
      })([nd('w3m-downloads-view')], xf);
      var kf = Object.freeze({
          __proto__: null,
          get W3mConnectingWcBasicView() {
            return Rg;
          },
          get W3mAllWalletsView() {
            return vf;
          },
          get W3mDownloadsView() {
            return xf;
          },
        }),
        Af = Zc`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;
      let Ef = class extends Zl {
        render() {
          return Pl`<slot></slot>`;
        }
      };
      (Ef.styles = [Ql, Af]),
        (Ef = (function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        })([nd('wui-card')], Ef));
      var If = Zc`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,
        Nf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Sf = class extends Zl {
        constructor() {
          super(...arguments),
            (this.message = ''),
            (this.backgroundColor = 'accent-100'),
            (this.iconColor = 'accent-100'),
            (this.icon = 'info');
        }
        render() {
          return (
            (this.style.cssText = `\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `),
            Pl`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `
          );
        }
        onClose() {
          Ze.close();
        }
      };
      (Sf.styles = [Ql, If]),
        Nf([Hd()], Sf.prototype, 'message', void 0),
        Nf([Hd()], Sf.prototype, 'backgroundColor', void 0),
        Nf([Hd()], Sf.prototype, 'iconColor', void 0),
        Nf([Hd()], Sf.prototype, 'icon', void 0),
        (Sf = Nf([nd('wui-alertbar')], Sf));
      var _f = Zc`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,
        Pf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      const Tf = {
        info: { backgroundColor: 'fg-350', iconColor: 'fg-325', icon: 'info' },
        success: {
          backgroundColor: 'success-glass-reown-020',
          iconColor: 'success-125',
          icon: 'checkmark',
        },
        warning: {
          backgroundColor: 'warning-glass-reown-020',
          iconColor: 'warning-100',
          icon: 'warningCircle',
        },
        error: {
          backgroundColor: 'error-glass-reown-020',
          iconColor: 'error-125',
          icon: 'exclamationTriangle',
        },
      };
      let Of = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.open = Ze.state.open),
            this.onOpen(!0),
            this.unsubscribe.push(
              Ze.subscribeKey('open', (e) => {
                (this.open = e), this.onOpen(!1);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const { message: e, variant: t } = Ze.state,
            r = Tf[t];
          return Pl`
      <wui-alertbar
        message=${e}
        backgroundColor=${r?.backgroundColor}
        iconColor=${r?.iconColor}
        icon=${r?.icon}
      ></wui-alertbar>
    `;
        }
        onOpen(e) {
          this.open
            ? (this.animate(
                [
                  { opacity: 0, transform: 'scale(0.85)' },
                  { opacity: 1, transform: 'scale(1)' },
                ],
                { duration: 150, fill: 'forwards', easing: 'ease' }
              ),
              (this.style.cssText = 'pointer-events: auto'))
            : e ||
              (this.animate(
                [
                  { opacity: 1, transform: 'scale(1)' },
                  { opacity: 0, transform: 'scale(0.85)' },
                ],
                { duration: 150, fill: 'forwards', easing: 'ease' }
              ),
              (this.style.cssText = 'pointer-events: none'));
        }
      };
      (Of.styles = _f),
        Pf([Fd()], Of.prototype, 'open', void 0),
        (Of = Pf([nd('w3m-alertbar')], Of));
      var $f = Zc`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,
        Rf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Bf = class extends Zl {
        constructor() {
          super(...arguments),
            (this.size = 'md'),
            (this.disabled = !1),
            (this.icon = 'copy'),
            (this.iconColor = 'inherit');
        }
        render() {
          const e = 'lg' === this.size ? '--wui-border-radius-xs' : '--wui-border-radius-xxs',
            t = 'lg' === this.size ? '--wui-spacing-1xs' : '--wui-spacing-2xs';
          return (
            (this.style.cssText = `\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`),
            Pl`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `
          );
        }
      };
      (Bf.styles = [Ql, ed, td, $f]),
        Rf([Hd()], Bf.prototype, 'size', void 0),
        Rf([Hd({ type: Boolean })], Bf.prototype, 'disabled', void 0),
        Rf([Hd()], Bf.prototype, 'icon', void 0),
        Rf([Hd()], Bf.prototype, 'iconColor', void 0),
        (Bf = Rf([nd('wui-icon-link')], Bf));
      var Lf = Zc`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,
        Uf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Mf = class extends Zl {
        constructor() {
          super(...arguments), (this.imageSrc = '');
        }
        render() {
          return Pl`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`;
        }
        imageTemplate() {
          return this.imageSrc
            ? Pl`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`
            : Pl`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`;
        }
      };
      (Mf.styles = [Ql, ed, td, Lf]),
        Uf([Hd()], Mf.prototype, 'imageSrc', void 0),
        (Mf = Uf([nd('wui-select')], Mf));
      var zf = Zc`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,
        jf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      const Df = ['SmartSessionList'];
      function Wf() {
        const e = it.state.data?.connector?.name,
          t = it.state.data?.wallet?.name,
          r = it.state.data?.network?.name,
          n = t ?? e,
          o = dt.getConnectors();
        return {
          Connect: `Connect ${1 === o.length && 'w3m-email' === o[0]?.id ? 'Email' : ''} Wallet`,
          Create: 'Create Wallet',
          ChooseAccountName: void 0,
          Account: void 0,
          AccountSettings: void 0,
          AllWallets: 'All Wallets',
          ApproveTransaction: 'Approve Transaction',
          BuyInProgress: 'Buy',
          ConnectingExternal: n ?? 'Connect Wallet',
          ConnectingWalletConnect: n ?? 'WalletConnect',
          ConnectingWalletConnectBasic: 'WalletConnect',
          ConnectingSiwe: 'Sign In',
          Convert: 'Convert',
          ConvertSelectToken: 'Select token',
          ConvertPreview: 'Preview convert',
          Downloads: n ? `Get ${n}` : 'Downloads',
          EmailLogin: 'Email Login',
          EmailVerifyOtp: 'Confirm Email',
          EmailVerifyDevice: 'Register Device',
          GetWallet: 'Get a wallet',
          Networks: 'Choose Network',
          OnRampProviders: 'Choose Provider',
          OnRampActivity: 'Activity',
          OnRampTokenSelect: 'Select Token',
          OnRampFiatSelect: 'Select Currency',
          Profile: void 0,
          SwitchNetwork: r ?? 'Switch Network',
          SwitchAddress: 'Switch Address',
          Transactions: 'Activity',
          UnsupportedChain: 'Switch Network',
          UpgradeEmailWallet: 'Upgrade your Wallet',
          UpdateEmailWallet: 'Edit Email',
          UpdateEmailPrimaryOtp: 'Confirm Current Email',
          UpdateEmailSecondaryOtp: 'Confirm New Email',
          WhatIsABuy: 'What is Buy?',
          RegisterAccountName: 'Choose name',
          RegisterAccountNameSuccess: '',
          WalletReceive: 'Receive',
          WalletCompatibleNetworks: 'Compatible Networks',
          Swap: 'Swap',
          SwapSelectToken: 'Select token',
          SwapPreview: 'Preview swap',
          WalletSend: 'Send',
          WalletSendPreview: 'Review send',
          WalletSendSelectToken: 'Select Token',
          WhatIsANetwork: 'What is a network?',
          WhatIsAWallet: 'What is a wallet?',
          ConnectWallets: 'Connect wallet',
          ConnectSocials: 'All socials',
          ConnectingSocial: ba.state.socialProvider ? ba.state.socialProvider : 'Connect Social',
          ConnectingMultiChain: 'Select chain',
          ConnectingFarcaster: 'Farcaster',
          SwitchActiveChain: 'Switch chain',
          SmartSessionCreated: void 0,
          SmartSessionList: 'Smart Sessions',
          SIWXSignMessage: 'Sign In',
        };
      }
      let Hf = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.heading = Wf()[it.state.view]),
            (this.network = pa.state.activeCaipNetwork),
            (this.networkImage = We.getNetworkImage(this.network)),
            (this.buffering = !1),
            (this.showBack = !1),
            (this.prevHistoryLength = 1),
            (this.view = it.state.view),
            (this.viewDirection = ''),
            (this.headerText = Wf()[it.state.view]),
            this.unsubscribe.push(
              ze.subscribeNetworkImages(() => {
                this.networkImage = We.getNetworkImage(this.network);
              }),
              it.subscribeKey('view', (e) => {
                setTimeout(() => {
                  (this.view = e), (this.headerText = Wf()[e]);
                }, Mc.ANIMATION_DURATIONS.HeaderText),
                  this.onViewChange(),
                  this.onHistoryChange();
              }),
              Ct.subscribeKey('buffering', (e) => (this.buffering = e)),
              pa.subscribeKey('activeCaipNetwork', (e) => {
                (this.network = e), (this.networkImage = We.getNetworkImage(this.network));
              })
            );
        }
        disconnectCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return Pl`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
        }
        onWalletHelp() {
          Je.sendEvent({ type: 'track', event: 'CLICK_WALLET_HELP' }), it.push('WhatIsAWallet');
        }
        async onClose() {
          'UnsupportedChain' === it.state.view || (await wt.isSIWXCloseDisabled())
            ? Ca.shake()
            : Ca.close();
        }
        rightHeaderTemplate() {
          const e = Ve?.state?.features?.smartSessions;
          return 'Account' === it.state.view && e
            ? Pl`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => it.push('SmartSessionList')}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `
            : this.closeButtonTemplate();
        }
        closeButtonTemplate() {
          return Pl`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `;
        }
        titleTemplate() {
          const e = Df.includes(this.view);
          return Pl`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e ? Pl`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
        }
        leftHeaderTemplate() {
          const { view: e } = it.state,
            t = 'Connect' === e,
            r = Ve.state.enableEmbedded,
            n = 'ApproveTransaction' === e,
            o = 'ConnectingSiwe' === e,
            i = 'Account' === e,
            s = Ve.state.enableNetworkSwitch,
            a = n || o || (t && r);
          return i && s
            ? Pl`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${Gd(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${Gd(this.networkImage)}
      ></wui-select>`
            : this.showBack && !a
              ? Pl`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`
              : Pl`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
        }
        onNetworks() {
          this.isAllowedNetworkSwitch() &&
            (Je.sendEvent({ type: 'track', event: 'CLICK_NETWORKS' }), it.push('Networks'));
        }
        isAllowedNetworkSwitch() {
          const e = pa.getAllRequestedCaipNetworks(),
            t = !!e && e.length > 1,
            r = e?.find(({ id: e }) => e === this.network?.id);
          return t || !r;
        }
        getPadding() {
          return this.heading ? ['l', '2l', 'l', '2l'] : ['0', '2l', '0', '2l'];
        }
        onViewChange() {
          const { history: e } = it.state;
          let t = Mc.VIEW_DIRECTION.Next;
          e.length < this.prevHistoryLength && (t = Mc.VIEW_DIRECTION.Prev),
            (this.prevHistoryLength = e.length),
            (this.viewDirection = t);
        }
        async onHistoryChange() {
          const { history: e } = it.state,
            t = this.shadowRoot?.querySelector('#dynamic');
          e.length > 1 && !this.showBack && t
            ? (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease',
              }).finished,
              (this.showBack = !0),
              t.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease',
              }))
            : e.length <= 1 &&
              this.showBack &&
              t &&
              (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease',
              }).finished,
              (this.showBack = !1),
              t.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease',
              }));
        }
        onGoBack() {
          it.goBack();
        }
      };
      (Hf.styles = zf),
        jf([Fd()], Hf.prototype, 'heading', void 0),
        jf([Fd()], Hf.prototype, 'network', void 0),
        jf([Fd()], Hf.prototype, 'networkImage', void 0),
        jf([Fd()], Hf.prototype, 'buffering', void 0),
        jf([Fd()], Hf.prototype, 'showBack', void 0),
        jf([Fd()], Hf.prototype, 'prevHistoryLength', void 0),
        jf([Fd()], Hf.prototype, 'view', void 0),
        jf([Fd()], Hf.prototype, 'viewDirection', void 0),
        jf([Fd()], Hf.prototype, 'headerText', void 0),
        (Hf = jf([nd('w3m-header')], Hf));
      var Ff = Zc`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,
        Vf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let qf = class extends Zl {
        constructor() {
          super(...arguments),
            (this.backgroundColor = 'accent-100'),
            (this.iconColor = 'accent-100'),
            (this.icon = 'checkmark'),
            (this.message = ''),
            (this.loading = !1),
            (this.iconType = 'default');
        }
        render() {
          return Pl`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
        }
        templateIcon() {
          return this.loading
            ? Pl`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
            : 'default' === this.iconType
              ? Pl`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`
              : Pl`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`;
        }
      };
      (qf.styles = [Ql, Ff]),
        Vf([Hd()], qf.prototype, 'backgroundColor', void 0),
        Vf([Hd()], qf.prototype, 'iconColor', void 0),
        Vf([Hd()], qf.prototype, 'icon', void 0),
        Vf([Hd()], qf.prototype, 'message', void 0),
        Vf([Hd()], qf.prototype, 'loading', void 0),
        Vf([Hd()], qf.prototype, 'iconType', void 0),
        (qf = Vf([nd('wui-snackbar')], qf));
      var Zf = Zc`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,
        Gf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      const Kf = {
        loading: void 0,
        success: { backgroundColor: 'success-100', iconColor: 'success-100', icon: 'checkmark' },
        error: { backgroundColor: 'error-100', iconColor: 'error-100', icon: 'close' },
      };
      let Yf = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.timeout = void 0),
            (this.open = ft.state.open),
            this.unsubscribe.push(
              ft.subscribeKey('open', (e) => {
                (this.open = e), this.onOpen();
              })
            );
        }
        disconnectedCallback() {
          clearTimeout(this.timeout), this.unsubscribe.forEach((e) => e());
        }
        render() {
          const { message: e, variant: t, svg: r } = ft.state,
            n = Kf[t],
            { icon: o, iconColor: i } = r ?? n ?? {};
          return Pl`
      <wui-snackbar
        message=${e}
        backgroundColor=${n?.backgroundColor}
        iconColor=${i}
        icon=${o}
        .loading=${'loading' === t}
      ></wui-snackbar>
    `;
        }
        onOpen() {
          clearTimeout(this.timeout),
            this.open
              ? (this.animate(
                  [
                    { opacity: 0, transform: 'translateX(-50%) scale(0.85)' },
                    { opacity: 1, transform: 'translateX(-50%) scale(1)' },
                  ],
                  { duration: 150, fill: 'forwards', easing: 'ease' }
                ),
                this.timeout && clearTimeout(this.timeout),
                ft.state.autoClose && (this.timeout = setTimeout(() => ft.hide(), 2500)))
              : this.animate(
                  [
                    { opacity: 1, transform: 'translateX(-50%) scale(1)' },
                    { opacity: 0, transform: 'translateX(-50%) scale(0.85)' },
                  ],
                  { duration: 150, fill: 'forwards', easing: 'ease' }
                );
        }
      };
      (Yf.styles = Zf),
        Gf([Fd()], Yf.prototype, 'open', void 0),
        (Yf = Gf([nd('w3m-snackbar')], Yf));
      var Xf = Zc`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,
        Jf = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let Qf = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.open = Aa.state.open),
            (this.message = Aa.state.message),
            (this.triggerRect = Aa.state.triggerRect),
            (this.variant = Aa.state.variant),
            this.unsubscribe.push(
              Aa.subscribe((e) => {
                (this.open = e.open),
                  (this.message = e.message),
                  (this.triggerRect = e.triggerRect),
                  (this.variant = e.variant);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          this.dataset.variant = this.variant;
          const e = this.triggerRect.top,
            t = this.triggerRect.left;
          return (
            (this.style.cssText = `\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;\n    --w3m-tooltip-display: ${this.open ? 'flex' : 'none'};\n    --w3m-tooltip-opacity: ${this.open ? 1 : 0};\n    `),
            Pl`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`
          );
        }
      };
      (Qf.styles = [Xf]),
        Jf([Fd()], Qf.prototype, 'open', void 0),
        Jf([Fd()], Qf.prototype, 'message', void 0),
        Jf([Fd()], Qf.prototype, 'triggerRect', void 0),
        Jf([Fd()], Qf.prototype, 'variant', void 0),
        (Qf = Jf([nd('w3m-tooltip'), nd('w3m-tooltip')], Qf));
      var ew = Zc`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,
        tw = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      let rw = class extends Zl {
        constructor() {
          super(),
            (this.resizeObserver = void 0),
            (this.prevHeight = '0px'),
            (this.prevHistoryLength = 1),
            (this.unsubscribe = []),
            (this.view = it.state.view),
            (this.viewDirection = ''),
            this.unsubscribe.push(it.subscribeKey('view', (e) => this.onViewChange(e)));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([e]) => {
            const t = `${e?.contentRect.height}px`;
            '0px' !== this.prevHeight &&
              (this.style.setProperty('--prev-height', this.prevHeight),
              this.style.setProperty('--new-height', t),
              (this.style.animation = 'w3m-view-height 150ms forwards ease'),
              (this.style.height = 'auto')),
              setTimeout(() => {
                (this.prevHeight = t), (this.style.animation = 'unset');
              }, Mc.ANIMATION_DURATIONS.ModalHeight);
          })),
            this.resizeObserver?.observe(this.getWrapper());
        }
        disconnectedCallback() {
          this.resizeObserver?.unobserve(this.getWrapper()), this.unsubscribe.forEach((e) => e());
        }
        render() {
          return Pl`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`;
        }
        viewTemplate() {
          switch (this.view) {
            case 'AccountSettings':
              return Pl`<w3m-account-settings-view></w3m-account-settings-view>`;
            case 'Account':
              return Pl`<w3m-account-view></w3m-account-view>`;
            case 'AllWallets':
              return Pl`<w3m-all-wallets-view></w3m-all-wallets-view>`;
            case 'ApproveTransaction':
              return Pl`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
            case 'BuyInProgress':
              return Pl`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
            case 'ChooseAccountName':
              return Pl`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
            case 'Connect':
            default:
              return Pl`<w3m-connect-view></w3m-connect-view>`;
            case 'Create':
              return Pl`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
            case 'ConnectingWalletConnect':
              return Pl`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
            case 'ConnectingWalletConnectBasic':
              return Pl`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
            case 'ConnectingExternal':
              return Pl`<w3m-connecting-external-view></w3m-connecting-external-view>`;
            case 'ConnectingSiwe':
              return Pl`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
            case 'ConnectWallets':
              return Pl`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
            case 'ConnectSocials':
              return Pl`<w3m-connect-socials-view></w3m-connect-socials-view>`;
            case 'ConnectingSocial':
              return Pl`<w3m-connecting-social-view></w3m-connecting-social-view>`;
            case 'Downloads':
              return Pl`<w3m-downloads-view></w3m-downloads-view>`;
            case 'EmailLogin':
              return Pl`<w3m-email-login-view></w3m-email-login-view>`;
            case 'EmailVerifyOtp':
              return Pl`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
            case 'EmailVerifyDevice':
              return Pl`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
            case 'GetWallet':
              return Pl`<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case 'Networks':
              return Pl`<w3m-networks-view></w3m-networks-view>`;
            case 'SwitchNetwork':
              return Pl`<w3m-network-switch-view></w3m-network-switch-view>`;
            case 'Profile':
              return Pl`<w3m-profile-view></w3m-profile-view>`;
            case 'SwitchAddress':
              return Pl`<w3m-switch-address-view></w3m-switch-address-view>`;
            case 'Transactions':
              return Pl`<w3m-transactions-view></w3m-transactions-view>`;
            case 'OnRampProviders':
              return Pl`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
            case 'OnRampActivity':
              return Pl`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
            case 'OnRampTokenSelect':
              return Pl`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
            case 'OnRampFiatSelect':
              return Pl`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
            case 'UpgradeEmailWallet':
              return Pl`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
            case 'UpdateEmailWallet':
              return Pl`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
            case 'UpdateEmailPrimaryOtp':
              return Pl`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
            case 'UpdateEmailSecondaryOtp':
              return Pl`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
            case 'UnsupportedChain':
              return Pl`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
            case 'Swap':
              return Pl`<w3m-swap-view></w3m-swap-view>`;
            case 'SwapSelectToken':
              return Pl`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
            case 'SwapPreview':
              return Pl`<w3m-swap-preview-view></w3m-swap-preview-view>`;
            case 'WalletSend':
              return Pl`<w3m-wallet-send-view></w3m-wallet-send-view>`;
            case 'WalletSendSelectToken':
              return Pl`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
            case 'WalletSendPreview':
              return Pl`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
            case 'WhatIsABuy':
              return Pl`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
            case 'WalletReceive':
              return Pl`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
            case 'WalletCompatibleNetworks':
              return Pl`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
            case 'WhatIsAWallet':
              return Pl`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
            case 'ConnectingMultiChain':
              return Pl`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
            case 'WhatIsANetwork':
              return Pl`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
            case 'ConnectingFarcaster':
              return Pl`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
            case 'SwitchActiveChain':
              return Pl`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
            case 'RegisterAccountName':
              return Pl`<w3m-register-account-name-view></w3m-register-account-name-view>`;
            case 'RegisterAccountNameSuccess':
              return Pl`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
            case 'SmartSessionCreated':
              return Pl`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
            case 'SmartSessionList':
              return Pl`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
            case 'SIWXSignMessage':
              return Pl`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
          }
        }
        onViewChange(e) {
          Aa.hide();
          let t = Mc.VIEW_DIRECTION.Next;
          const { history: r } = it.state;
          r.length < this.prevHistoryLength && (t = Mc.VIEW_DIRECTION.Prev),
            (this.prevHistoryLength = r.length),
            (this.viewDirection = t),
            setTimeout(() => {
              this.view = e;
            }, Mc.ANIMATION_DURATIONS.ViewTransition);
        }
        getWrapper() {
          return this.shadowRoot?.querySelector('div');
        }
      };
      (rw.styles = ew),
        tw([Fd()], rw.prototype, 'view', void 0),
        tw([Fd()], rw.prototype, 'viewDirection', void 0),
        (rw = tw([nd('w3m-router')], rw));
      var nw = Zc`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,
        ow = function (e, t, r, n) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
          return i > 3 && s && Object.defineProperty(t, r, s), s;
        };
      const iw = 'scroll-lock';
      let sw = class extends Zl {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.abortController = void 0),
            (this.hasPrefetched = !1),
            (this.enableEmbedded = Ve.state.enableEmbedded),
            (this.open = Ca.state.open),
            (this.caipAddress = pa.state.activeCaipAddress),
            (this.caipNetwork = pa.state.activeCaipNetwork),
            (this.shake = Ca.state.shake),
            (this.filterByNamespace = dt.state.filterByNamespace),
            this.initializeTheming(),
            nt.prefetchAnalyticsConfig(),
            this.unsubscribe.push(
              Ca.subscribeKey('open', (e) => (e ? this.onOpen() : this.onClose())),
              Ca.subscribeKey('shake', (e) => (this.shake = e)),
              pa.subscribeKey('activeCaipNetwork', (e) => this.onNewNetwork(e)),
              pa.subscribeKey('activeCaipAddress', (e) => this.onNewAddress(e)),
              Ve.subscribeKey('enableEmbedded', (e) => (this.enableEmbedded = e)),
              dt.subscribeKey('filterByNamespace', (e) => {
                this.filterByNamespace !== e &&
                  !pa.getAccountData(e)?.caipAddress &&
                  (nt.fetchRecommendedWallets(), (this.filterByNamespace = e));
              })
            );
        }
        firstUpdated() {
          if (this.caipAddress) {
            if (this.enableEmbedded) return Ca.close(), void this.prefetch();
            this.onNewAddress(this.caipAddress);
          }
          this.open && this.onOpen(), this.enableEmbedded && this.prefetch();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
        }
        render() {
          return (
            (this.style.cssText = `\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded ? 'clamp(0px, var(--wui-border-radius-l), 44px)' : '0px'};\n    `),
            this.enableEmbedded
              ? Pl`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `
              : this.open
                ? Pl`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
                : null
          );
        }
        contentTemplate() {
          return Pl` <wui-card
      shake="${this.shake}"
      data-embedded="${Gd(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
        }
        async onOverlayClick(e) {
          e.target === e.currentTarget && (await this.handleClose());
        }
        async handleClose() {
          'UnsupportedChain' === it.state.view || (await wt.isSIWXCloseDisabled())
            ? Ca.shake()
            : Ca.close();
        }
        initializeTheming() {
          const { themeVariables: e, themeMode: t } = at.state;
          !(function (e, t) {
            (Gl = document.createElement('style')),
              (Kl = document.createElement('style')),
              (Yl = document.createElement('style')),
              (Gl.textContent = Jl(e).core.cssText),
              (Kl.textContent = Jl(e).dark.cssText),
              (Yl.textContent = Jl(e).light.cssText),
              document.head.appendChild(Gl),
              document.head.appendChild(Kl),
              document.head.appendChild(Yl),
              Xl(t);
          })(e, rd.getColorTheme(t));
        }
        onClose() {
          (this.open = !1),
            this.classList.remove('open'),
            this.onScrollUnlock(),
            ft.hide(),
            this.onRemoveKeyboardListener();
        }
        onOpen() {
          (this.open = !0),
            this.classList.add('open'),
            this.onScrollLock(),
            this.onAddKeyboardListener();
        }
        onScrollLock() {
          const e = document.createElement('style');
          (e.dataset.w3m = iw),
            (e.textContent =
              '\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    '),
            document.head.appendChild(e);
        }
        onScrollUnlock() {
          const e = document.head.querySelector(`style[data-w3m="${iw}"]`);
          e && e.remove();
        }
        onAddKeyboardListener() {
          this.abortController = new AbortController();
          const e = this.shadowRoot?.querySelector('wui-card');
          e?.focus(),
            window.addEventListener(
              'keydown',
              (t) => {
                if ('Escape' === t.key) this.handleClose();
                else if ('Tab' === t.key) {
                  const { tagName: r } = t.target;
                  r && !r.includes('W3M-') && !r.includes('WUI-') && e?.focus();
                }
              },
              this.abortController
            );
        }
        onRemoveKeyboardListener() {
          this.abortController?.abort(), (this.abortController = void 0);
        }
        async onNewAddress(e) {
          const t = pa.state.isSwitchingNamespace,
            r = Re.getPlainAddress(e);
          r || t ? t && r && it.goBack() : Ca.close(),
            await wt.initializeIfEnabled(),
            (this.caipAddress = e),
            pa.setIsSwitchingNamespace(!1);
        }
        onNewNetwork(e) {
          const t = this.caipNetwork,
            r = t?.caipNetworkId?.toString(),
            n = t?.chainNamespace,
            o = e?.caipNetworkId?.toString(),
            i = e?.chainNamespace,
            s = r !== o,
            a = s && !(n !== i),
            c = t?.name === Y.UNSUPPORTED_NETWORK_NAME,
            l = 'ConnectingExternal' === it.state.view,
            d = !this.caipAddress,
            u = 'UnsupportedChain' === it.state.view;
          let h = !1;
          Ca.state.open && !l && (d ? s && (h = !0) : (u || (a && !c)) && (h = !0)),
            h && 'SIWXSignMessage' !== it.state.view && it.goBack(),
            (this.caipNetwork = e);
        }
        prefetch() {
          this.hasPrefetched ||
            (nt.prefetch(), nt.fetchWalletsByPage({ page: 1 }), (this.hasPrefetched = !0));
        }
      };
      (sw.styles = nw),
        ow([Hd({ type: Boolean })], sw.prototype, 'enableEmbedded', void 0),
        ow([Fd()], sw.prototype, 'open', void 0),
        ow([Fd()], sw.prototype, 'caipAddress', void 0),
        ow([Fd()], sw.prototype, 'caipNetwork', void 0),
        ow([Fd()], sw.prototype, 'shake', void 0),
        ow([Fd()], sw.prototype, 'filterByNamespace', void 0),
        (sw = ow([nd('w3m-modal')], sw));
      var aw = Object.freeze({
        __proto__: null,
        get W3mModal() {
          return sw;
        },
      });
      const cw = Tl`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`;
      var lw = Object.freeze({ __proto__: null, addSvg: cw });
      const dw = Tl`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;
      var uw = Object.freeze({ __proto__: null, allWalletsSvg: dw });
      const hw = Tl`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;
      var pw = Object.freeze({ __proto__: null, arrowBottomCircleSvg: hw });
      const gw = Tl`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`;
      var fw = Object.freeze({ __proto__: null, appStoreSvg: gw });
      const ww = Tl`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
      var mw = Object.freeze({ __proto__: null, appleSvg: ww });
      const vw = Tl`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var bw = Object.freeze({ __proto__: null, arrowBottomSvg: vw });
      const yw = Tl`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Cw = Object.freeze({ __proto__: null, arrowLeftSvg: yw });
      const xw = Tl`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var kw = Object.freeze({ __proto__: null, arrowRightSvg: xw });
      const Aw = Tl`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Ew = Object.freeze({ __proto__: null, arrowTopSvg: Aw });
      const Iw = Tl`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`;
      var Nw = Object.freeze({ __proto__: null, bankSvg: Iw });
      const Sw = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`;
      var _w = Object.freeze({ __proto__: null, browserSvg: Sw });
      const Pw = Tl`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`;
      var Tw = Object.freeze({ __proto__: null, cardSvg: Pw });
      const Ow = Tl`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`;
      var $w = Object.freeze({ __proto__: null, checkmarkSvg: Ow });
      const Rw = Tl`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Bw = Object.freeze({ __proto__: null, checkmarkBoldSvg: Rw });
      const Lw = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Uw = Object.freeze({ __proto__: null, chevronBottomSvg: Lw });
      const Mw = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;
      var zw = Object.freeze({ __proto__: null, chevronLeftSvg: Mw });
      const jw = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Dw = Object.freeze({ __proto__: null, chevronRightSvg: jw });
      const Ww = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Hw = Object.freeze({ __proto__: null, chevronTopSvg: Ww });
      const Fw = Tl`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`;
      var Vw = Object.freeze({ __proto__: null, chromeStoreSvg: Fw });
      const qw = Tl`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;
      var Zw = Object.freeze({ __proto__: null, clockSvg: qw });
      const Gw = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Kw = Object.freeze({ __proto__: null, closeSvg: Gw });
      const Yw = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Xw = Object.freeze({ __proto__: null, compassSvg: Yw });
      const Jw = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Qw = Object.freeze({ __proto__: null, coinPlaceholderSvg: Jw });
      const em = Tl`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`;
      var tm = Object.freeze({ __proto__: null, copySvg: em });
      const rm = Tl` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;
      var nm = Object.freeze({ __proto__: null, cursorSvg: rm });
      const om = Tl`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;
      var im = Object.freeze({ __proto__: null, cursorTransparentSvg: om });
      const sm = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;
      var am = Object.freeze({ __proto__: null, desktopSvg: sm });
      const cm = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;
      var lm = Object.freeze({ __proto__: null, disconnectSvg: cm });
      const dm = Tl`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;
      var um = Object.freeze({ __proto__: null, discordSvg: dm });
      const hm = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;
      var pm = Object.freeze({ __proto__: null, etherscanSvg: hm });
      const gm = Tl`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var fm = Object.freeze({ __proto__: null, extensionSvg: gm });
      const wm = Tl`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var mm = Object.freeze({ __proto__: null, externalLinkSvg: wm });
      const vm = Tl`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
      var bm = Object.freeze({ __proto__: null, facebookSvg: vm });
      const ym = Tl`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;
      var Cm = Object.freeze({ __proto__: null, farcasterSvg: ym });
      const xm = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var km = Object.freeze({ __proto__: null, filtersSvg: xm });
      const Am = Tl`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
      var Em = Object.freeze({ __proto__: null, githubSvg: Am });
      const Im = Tl`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;
      var Nm = Object.freeze({ __proto__: null, googleSvg: Im });
      const Sm = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`;
      var _m = Object.freeze({ __proto__: null, helpCircleSvg: Sm });
      const Pm = Tl`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;
      var Tm = Object.freeze({ __proto__: null, imageSvg: Pm });
      const Om = Tl`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`;
      var $m = Object.freeze({ __proto__: null, idSvg: Om });
      const Rm = Tl`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Bm = Object.freeze({ __proto__: null, infoCircleSvg: Rm });
      const Lm = Tl`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;
      var Um = Object.freeze({ __proto__: null, lightbulbSvg: Lm });
      const Mm = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;
      var zm = Object.freeze({ __proto__: null, mailSvg: Mm });
      const jm = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Dm = Object.freeze({ __proto__: null, mobileSvg: jm });
      const Wm = Tl`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;
      var Hm = Object.freeze({ __proto__: null, moreSvg: Wm });
      const Fm = Tl`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Vm = Object.freeze({ __proto__: null, networkPlaceholderSvg: Fm });
      const qm = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Zm = Object.freeze({ __proto__: null, nftPlaceholderSvg: qm });
      const Gm = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Km = Object.freeze({ __proto__: null, offSvg: Gm });
      const Ym = Tl` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`;
      var Xm = Object.freeze({ __proto__: null, playStoreSvg: Ym });
      const Jm = Tl`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;
      var Qm = Object.freeze({ __proto__: null, plusSvg: Jm });
      const ev = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;
      var tv = Object.freeze({ __proto__: null, qrCodeIcon: ev });
      const rv = Tl`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;
      var nv = Object.freeze({ __proto__: null, recycleHorizontalSvg: rv });
      const ov = Tl`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;
      var iv = Object.freeze({ __proto__: null, refreshSvg: ov });
      const sv = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;
      var av = Object.freeze({ __proto__: null, searchSvg: sv });
      const cv = Tl`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`;
      var lv = Object.freeze({ __proto__: null, sendSvg: cv });
      const dv = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;
      var uv = Object.freeze({ __proto__: null, swapHorizontalSvg: dv });
      const hv = Tl`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`;
      var pv = Object.freeze({ __proto__: null, swapHorizontalMediumSvg: hv });
      const gv = Tl`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;
      var fv = Object.freeze({ __proto__: null, swapHorizontalBoldSvg: gv });
      const wv = Tl`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;
      var mv = Object.freeze({ __proto__: null, swapHorizontalRoundedBoldSvg: wv });
      const vv = Tl`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
      var bv = Object.freeze({ __proto__: null, swapVerticalSvg: vv });
      const yv = Tl`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;
      var Cv = Object.freeze({ __proto__: null, telegramSvg: yv });
      const xv = Tl`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;
      var kv = Object.freeze({ __proto__: null, threeDotsSvg: xv });
      const Av = Tl`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
      var Ev = Object.freeze({ __proto__: null, twitchSvg: Av });
      const Iv = Tl`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;
      var Nv = Object.freeze({ __proto__: null, xSvg: Iv });
      const Sv = Tl`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;
      var _v = Object.freeze({ __proto__: null, twitterIconSvg: Sv });
      const Pv = Tl`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Tv = Object.freeze({ __proto__: null, verifySvg: Pv });
      const Ov = Tl`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;
      var $v = Object.freeze({ __proto__: null, verifyFilledSvg: Ov });
      const Rv = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Bv = Object.freeze({ __proto__: null, walletSvg: Rv });
      const Lv = Tl`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,
        Uv = Tl`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,
        Mv = Tl`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;
      var zv = Object.freeze({
        __proto__: null,
        walletConnectSvg: Lv,
        walletConnectLightBrownSvg: Uv,
        walletConnectBrownSvg: Mv,
      });
      const jv = Tl`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;
      var Dv = Object.freeze({ __proto__: null, walletPlaceholderSvg: jv });
      const Wv = Tl`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;
      var Hv = Object.freeze({ __proto__: null, warningCircleSvg: Wv });
      const Fv = Tl`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`;
      var Vv = Object.freeze({ __proto__: null, infoSvg: Fv });
      const qv = Tl`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;
      var Zv = Object.freeze({ __proto__: null, exclamationTriangleSvg: qv });
      const Gv = Tl`<svg width="60" height="16" viewBox="0 0 60 16" fill="none"">
  <path d="M9.3335 4.66667C9.3335 2.08934 11.4229 0 14.0002 0H20.6669C23.2442 0 25.3335 2.08934 25.3335 4.66667V11.3333C25.3335 13.9106 23.2442 16 20.6669 16H14.0002C11.4229 16 9.3335 13.9106 9.3335 11.3333V4.66667Z" fill="#363636"/>
  <path d="M15.6055 11.0003L17.9448 4.66699H18.6316L16.2923 11.0003H15.6055Z" fill="#F6F6F6"/>
  <path d="M0 4.33333C0 1.9401 1.9401 0 4.33333 0C6.72657 0 8.66669 1.9401 8.66669 4.33333V11.6667C8.66669 14.0599 6.72657 16 4.33333 16C1.9401 16 0 14.0599 0 11.6667V4.33333Z" fill="#363636"/>
  <path d="M3.9165 9.99934V9.16602H4.74983V9.99934H3.9165Z" fill="#F6F6F6"/>
  <path d="M26 8C26 3.58172 29.3517 0 33.4863 0H52.5137C56.6483 0 60 3.58172 60 8C60 12.4183 56.6483 16 52.5137 16H33.4863C29.3517 16 26 12.4183 26 8Z" fill="#363636"/>
  <path d="M49.3687 9.95834V6.26232H50.0213V6.81966C50.256 6.40899 50.7326 6.16699 51.2606 6.16699C52.0599 6.16699 52.6173 6.67299 52.6173 7.65566V9.95834H51.972V7.69234C51.972 7.04696 51.6053 6.70966 51.07 6.70966C50.4906 6.70966 50.0213 7.17168 50.0213 7.82433V9.95834H49.3687Z" fill="#F6F6F6"/>
  <path d="M45.2538 9.95773L44.5718 6.26172H45.1877L45.6717 9.31242L46.3098 7.30306H46.9184L47.5491 9.29041L48.0404 6.26172H48.6564L47.9744 9.95773H47.2411L46.6178 8.03641L45.9871 9.95773H45.2538Z" fill="#F6F6F6"/>
  <path d="M42.3709 10.0536C41.2489 10.0536 40.5889 9.21765 40.5889 8.1103C40.5889 7.01035 41.2489 6.16699 42.3709 6.16699C43.4929 6.16699 44.1529 7.01035 44.1529 8.1103C44.1529 9.21765 43.4929 10.0536 42.3709 10.0536ZM42.3709 9.51096C43.1775 9.51096 43.4856 8.82164 43.4856 8.10296C43.4856 7.39163 43.1775 6.70966 42.3709 6.70966C41.5642 6.70966 41.2562 7.39163 41.2562 8.10296C41.2562 8.82164 41.5642 9.51096 42.3709 9.51096Z" fill="#F6F6F6"/>
  <path d="M38.2805 10.0536C37.1952 10.0536 36.5132 9.22499 36.5132 8.1103C36.5132 7.00302 37.1952 6.16699 38.2805 6.16699C39.1972 6.16699 40.0038 6.68766 39.9159 8.27896H37.1805C37.2319 8.96103 37.5472 9.5183 38.2805 9.5183C38.7718 9.5183 39.0945 9.21765 39.2045 8.87299H39.8499C39.7472 9.48903 39.1679 10.0536 38.2805 10.0536ZM37.1952 7.78765H39.2852C39.2338 7.04696 38.8892 6.70232 38.2805 6.70232C37.6132 6.70232 37.2832 7.18635 37.1952 7.78765Z" fill="#F6F6F6"/>
  <path d="M33.3828 9.95773V6.26172H34.0501V6.88506C34.2848 6.47439 34.6882 6.26172 35.1061 6.26172H35.9935V6.88506H35.0548C34.4682 6.88506 34.0501 7.26638 34.0501 8.00706V9.95773H33.3828Z" fill="#F6F6F6"/>
</svg>`;
      var Kv = Object.freeze({ __proto__: null, reownSvg: Gv });
    },
  },
]);
