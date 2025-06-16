'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [983],
  {
    64646: function (n, e, t) {
      function r(n) {
        return JSON.stringify(n, (n, e) =>
          !(function (n) {
            if (!c(n)) return !1;
            let e = n.constructor;
            if (void 0 === e) return !0;
            let t = e.prototype;
            return !!(c(t) && t.hasOwnProperty('isPrototypeOf'));
          })(e)
            ? 'bigint' == typeof e
              ? e.toString()
              : e
            : Object.keys(e)
                .sort()
                .reduce((n, t) => ((n[t] = e[t]), n), {})
        );
      }
      function c(n) {
        return '[object Object]' === Object.prototype.toString.call(n);
      }
      function o(n) {
        let {
          _defaulted: e,
          behavior: t,
          gcTime: r,
          initialData: c,
          initialDataUpdatedAt: o,
          maxPages: i,
          meta: u,
          networkMode: s,
          queryFn: a,
          queryHash: f,
          queryKey: l,
          queryKeyHashFn: d,
          retry: h,
          retryDelay: y,
          structuralSharing: p,
          getPreviousPageParam: g,
          getNextPageParam: m,
          initialPageParam: v,
          _optimisticResults: w,
          enabled: b,
          notifyOnChangeProps: _,
          placeholderData: I,
          refetchInterval: P,
          refetchIntervalInBackground: q,
          refetchOnMount: E,
          refetchOnReconnect: O,
          refetchOnWindowFocus: S,
          retryOnMount: C,
          select: M,
          staleTime: x,
          suspense: K,
          throwOnError: k,
          config: j,
          connector: A,
          query: F,
          ...N
        } = n;
        return N;
      }
      t.d(e, {
        OP: function () {
          return o;
        },
        kq: function () {
          return r;
        },
      });
    },
    39892: function (n, e, t) {
      t.d(e, {
        s: function () {
          return r;
        },
      });
      function r(n, e, t) {
        let r = n[e.name];
        if ('function' == typeof r) return r;
        let c = n[t];
        return 'function' == typeof c ? c : (t) => e(n, t);
      }
    },
    92921: function (n, e, t) {
      t.d(e, {
        V: function () {
          return u;
        },
        F: function () {
          return s;
        },
      });
      var r = t(58854);
      let c = !1;
      async function o(n, e = {}) {
        let t;
        if (c) return [];
        (c = !0), n.setState((n) => ({ ...n, status: n.current ? 'reconnecting' : 'connecting' }));
        let r = [];
        if (e.connectors?.length)
          for (let t of e.connectors) {
            let e;
            (e = 'function' == typeof t ? n._internal.connectors.setup(t) : t), r.push(e);
          }
        else r.push(...n.connectors);
        try {
          t = await n.storage?.getItem('recentConnectorId');
        } catch {}
        let o = {};
        for (let [, e] of n.state.connections) o[e.connector.id] = 1;
        t && (o[t] = 0);
        let i =
            Object.keys(o).length > 0
              ? [...r].sort((n, e) => (o[n.id] ?? 10) - (o[e.id] ?? 10))
              : r,
          u = !1,
          s = [],
          a = [];
        for (let e of i) {
          let t = await e.getProvider().catch(() => void 0);
          if (!t || a.some((n) => n === t) || !(await e.isAuthorized())) continue;
          let r = await e.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (e.emitter.off('connect', n._internal.events.connect),
            e.emitter.on('change', n._internal.events.change),
            e.emitter.on('disconnect', n._internal.events.disconnect),
            n.setState((n) => {
              let t = new Map(u ? n.connections : new Map()).set(e.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: e,
              });
              return { ...n, current: u ? n.current : e.uid, connections: t };
            }),
            s.push({ accounts: r.accounts, chainId: r.chainId, connector: e }),
            a.push(t),
            (u = !0));
        }
        return (
          ('reconnecting' === n.state.status || 'connecting' === n.state.status) &&
            (u
              ? n.setState((n) => ({ ...n, status: 'connected' }))
              : n.setState((n) => ({
                  ...n,
                  connections: new Map(),
                  current: null,
                  status: 'disconnected',
                }))),
          (c = !1),
          s
        );
      }
      function i(n) {
        let { children: e, config: t, initialState: c, reconnectOnMount: i = !0 } = n,
          { onMount: u } = (function (n, e) {
            let { initialState: t, reconnectOnMount: r } = e;
            return (
              t &&
                !n._internal.store.persist.hasHydrated() &&
                n.setState({
                  ...t,
                  chainId: n.chains.some((n) => n.id === t.chainId) ? t.chainId : n.chains[0].id,
                  connections: r ? t.connections : new Map(),
                  status: r ? 'reconnecting' : 'disconnected',
                }),
              {
                async onMount() {
                  n._internal.ssr &&
                    (await n._internal.store.persist.rehydrate(),
                    n._internal.mipd &&
                      n._internal.connectors.setState((e) => {
                        let t = new Set();
                        for (let n of e ?? [])
                          if (n.rdns)
                            for (let e of Array.isArray(n.rdns) ? n.rdns : [n.rdns]) t.add(e);
                        let r = [];
                        for (let e of n._internal.mipd?.getProviders() ?? []) {
                          if (t.has(e.info.rdns)) continue;
                          let c = n._internal.connectors.providerDetailToConnector(e),
                            o = n._internal.connectors.setup(c);
                          r.push(o);
                        }
                        return [...e, ...r];
                      })),
                    r ? o(n) : n.storage && n.setState((n) => ({ ...n, connections: new Map() }));
                },
              }
            );
          })(t, { initialState: c, reconnectOnMount: i });
        t._internal.ssr || u();
        let s = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (s.current && t._internal.ssr)
              return (
                u(),
                () => {
                  s.current = !1;
                }
              );
          }, []),
          e
        );
      }
      let u = (0, r.createContext)(void 0);
      function s(n) {
        let { children: e, config: t } = n;
        return (0, r.createElement)(i, n, (0, r.createElement)(u.Provider, { value: t }, e));
      }
    },
    8922: function (n, e, t) {
      function r(n) {
        return n.state.chainId;
      }
      t.d(e, {
        x: function () {
          return i;
        },
      });
      var c = t(58854),
        o = t(14006);
      function i(n = {}) {
        let e = (0, o.Z)(n);
        return (0, c.useSyncExternalStore)(
          (n) =>
            (function (n, e) {
              let { onChange: t } = e;
              return n.subscribe((n) => n.chainId, t);
            })(e, { onChange: n }),
          () => r(e),
          () => r(e)
        );
      }
    },
    14006: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = t(58854),
        c = t(92921),
        o = t(46669);
      let i = () => 'wagmi@2.14.12';
      class u extends o.G {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'WagmiError',
            });
        }
        get docsBaseUrl() {
          return 'https://wagmi.sh/react';
        }
        get version() {
          return i();
        }
      }
      class s extends u {
        constructor() {
          super('`useConfig` must be used within `WagmiProvider`.', {
            docsPath: '/api/WagmiProvider',
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'WagmiProviderNotFoundError',
            });
        }
      }
      function a(n = {}) {
        let e = n.config ?? (0, r.useContext)(c.V);
        if (!e) throw new s();
        return e;
      }
    },
    23724: function (n, e, t) {
      t.d(e, {
        S: function () {
          return a;
        },
      });
      var r = t(44385),
        c = t(39892),
        o = t(64646),
        i = t(32467),
        u = t(8922),
        s = t(14006);
      function a(n = {}) {
        let { name: e, query: t = {} } = n,
          a = (0, s.Z)(n),
          f = (0, u.x)({ config: a }),
          l = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { name: t, scopeKey: o, ...i } = e[1];
                if (!t) throw Error('name is required');
                return (function (n, e) {
                  let { chainId: t, ...o } = e,
                    i = n.getClient({ chainId: t });
                  return (0, c.s)(i, r.O, 'getEnsAddress')(o);
                })(n, { ...i, name: t });
              },
              queryKey: (function (n = {}) {
                return ['ensAddress', (0, o.OP)(n)];
              })(e),
            };
          })(a, { ...n, chainId: n.chainId ?? f }),
          d = !!(e && (t.enabled ?? !0));
        return (0, i.aM)({ ...t, ...l, enabled: d });
      }
    },
    87769: function (n, e, t) {
      t.d(e, {
        c: function () {
          return a;
        },
      });
      var r = t(79609),
        c = t(39892),
        o = t(64646),
        i = t(32467),
        u = t(8922),
        s = t(14006);
      function a(n = {}) {
        let { name: e, query: t = {} } = n,
          a = (0, s.Z)(n),
          f = (0, u.x)({ config: a }),
          l = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { name: t, scopeKey: o, ...i } = e[1];
                if (!t) throw Error('name is required');
                return (function (n, e) {
                  let { chainId: t, ...o } = e,
                    i = n.getClient({ chainId: t });
                  return (0, c.s)(i, r.r, 'getEnsAvatar')(o);
                })(n, { ...i, name: t });
              },
              queryKey: (function (n = {}) {
                return ['ensAvatar', (0, o.OP)(n)];
              })(e),
            };
          })(a, { ...n, chainId: n.chainId ?? f }),
          d = !!(e && (t.enabled ?? !0));
        return (0, i.aM)({ ...t, ...l, enabled: d });
      }
    },
    45688: function (n, e, t) {
      t.d(e, {
        F: function () {
          return a;
        },
      });
      var r = t(84770),
        c = t(39892),
        o = t(64646),
        i = t(32467),
        u = t(8922),
        s = t(14006);
      function a(n = {}) {
        let { address: e, query: t = {} } = n,
          a = (0, s.Z)(n),
          f = (0, u.x)({ config: a }),
          l = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: t, scopeKey: o, ...i } = e[1];
                if (!t) throw Error('address is required');
                return (function (n, e) {
                  let { chainId: t, ...o } = e,
                    i = n.getClient({ chainId: t });
                  return (0, c.s)(i, r.w, 'getEnsName')(o);
                })(n, { ...i, address: t });
              },
              queryKey: (function (n = {}) {
                return ['ensName', (0, o.OP)(n)];
              })(e),
            };
          })(a, { ...n, chainId: n.chainId ?? f }),
          d = !!(e && (t.enabled ?? !0));
        return (0, i.aM)({ ...t, ...l, enabled: d });
      }
    },
    32467: function (n, e, t) {
      t.d(e, {
        aM: function () {
          return o;
        },
      });
      var r = t(33867),
        c = t(64646);
      function o(n) {
        let e = (0, r.a)({ ...n, queryKeyHashFn: c.kq });
        return (e.queryKey = n.queryKey), e;
      }
    },
  },
]);
