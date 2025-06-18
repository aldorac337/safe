try {
  let n =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    e = new n.Error().stack;
  e &&
    ((n._sentryDebugIds = n._sentryDebugIds || {}),
    (n._sentryDebugIds[e] = '67e14bc2-1e5d-496b-b470-18cd30bd344b'),
    (n._sentryDebugIdIdentifier = 'sentry-dbid-67e14bc2-1e5d-496b-b470-18cd30bd344b'));
} catch (n) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5513],
  {
    78830: function (n, e, t) {
      t.d(e, {
        M: function () {
          return C;
        },
      });
      var r = t(50256),
        u = t(58258),
        i = t(31270),
        o = t(69036),
        a = t(43),
        c = t(9572);
      class s extends u.Component {
        getSnapshotBeforeUpdate(n) {
          let e = this.props.childRef.current;
          if (e && n.isPresent && !this.props.isPresent) {
            let n = this.props.sizeRef.current;
            (n.height = e.offsetHeight || 0),
              (n.width = e.offsetWidth || 0),
              (n.top = e.offsetTop),
              (n.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function l(n) {
        let { children: e, isPresent: t } = n,
          i = (0, u.useId)(),
          o = (0, u.useRef)(null),
          a = (0, u.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: l } = (0, u.useContext)(c._);
        return (
          (0, u.useInsertionEffect)(() => {
            let { width: n, height: e, top: r, left: u } = a.current;
            if (t || !o.current || !n || !e) return;
            o.current.dataset.motionPopId = i;
            let c = document.createElement('style');
            return (
              l && (c.nonce = l),
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(n, 'px !important;\n            height: ')
                    .concat(e, 'px !important;\n            top: ')
                    .concat(r, 'px !important;\n            left: ')
                    .concat(u, 'px !important;\n          }\n        ')
                ),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [t]),
          (0, r.jsx)(s, {
            isPresent: t,
            childRef: o,
            sizeRef: a,
            children: u.cloneElement(e, { ref: o }),
          })
        );
      }
      let d = (n) => {
        let {
            children: e,
            initial: t,
            isPresent: i,
            onExitComplete: c,
            custom: s,
            presenceAffectsLayout: d,
            mode: y,
          } = n,
          h = (0, o.h)(f),
          v = (0, u.useId)(),
          g = (0, u.useCallback)(
            (n) => {
              for (let e of (h.set(n, !0), h.values())) if (!e) return;
              c && c();
            },
            [h, c]
          ),
          C = (0, u.useMemo)(
            () => ({
              id: v,
              initial: t,
              isPresent: i,
              custom: s,
              onExitComplete: g,
              register: (n) => (h.set(n, !1), () => h.delete(n)),
            }),
            d ? [Math.random(), g] : [i, g]
          );
        return (
          (0, u.useMemo)(() => {
            h.forEach((n, e) => h.set(e, !1));
          }, [i]),
          u.useEffect(() => {
            i || h.size || !c || c();
          }, [i]),
          'popLayout' === y && (e = (0, r.jsx)(l, { isPresent: i, children: e })),
          (0, r.jsx)(a.O.Provider, { value: C, children: e })
        );
      };
      function f() {
        return new Map();
      }
      var y = t(6595);
      let h = (n) => n.key || '';
      function v(n) {
        let e = [];
        return (
          u.Children.forEach(n, (n) => {
            (0, u.isValidElement)(n) && e.push(n);
          }),
          e
        );
      }
      var g = t(18290);
      let C = (n) => {
        let {
            children: e,
            custom: t,
            initial: a = !0,
            onExitComplete: c,
            presenceAffectsLayout: s = !0,
            mode: l = 'sync',
            propagate: f = !1,
          } = n,
          [C, p] = (0, y.oO)(f),
          m = (0, u.useMemo)(() => v(e), [e]),
          I = f && !C ? [] : m.map(h),
          b = (0, u.useRef)(!0),
          q = (0, u.useRef)(m),
          w = (0, o.h)(() => new Map()),
          [K, E] = (0, u.useState)(m),
          [P, F] = (0, u.useState)(m);
        (0, g.L)(() => {
          (b.current = !1), (q.current = m);
          for (let n = 0; n < P.length; n++) {
            let e = h(P[n]);
            I.includes(e) ? w.delete(e) : !0 !== w.get(e) && w.set(e, !1);
          }
        }, [P, I.length, I.join('-')]);
        let M = [];
        if (m !== K) {
          let n = [...m];
          for (let e = 0; e < P.length; e++) {
            let t = P[e],
              r = h(t);
            I.includes(r) || (n.splice(e, 0, t), M.push(t));
          }
          'wait' === l && M.length && (n = M), F(v(n)), E(m);
          return;
        }
        let { forceRender: T } = (0, u.useContext)(i.p);
        return (0, r.jsx)(r.Fragment, {
          children: P.map((n) => {
            let e = h(n),
              u = (!f || !!C) && (m === P || I.includes(e));
            return (0, r.jsx)(
              d,
              {
                isPresent: u,
                initial: (!b.current || !!a) && void 0,
                custom: u ? void 0 : t,
                presenceAffectsLayout: s,
                mode: l,
                onExitComplete: u
                  ? void 0
                  : () => {
                      if (!w.has(e)) return;
                      w.set(e, !0);
                      let n = !0;
                      w.forEach((e) => {
                        e || (n = !1);
                      }),
                        n && (null == T || T(), F(q.current), f && (null == p || p()), c && c());
                    },
                children: n,
              },
              e
            );
          }),
        });
      };
    },
    29015: function (n, e, t) {
      t.d(e, {
        useAccountEffect: function () {
          return o;
        },
      });
      var r = t(5333),
        u = t(58258),
        i = t(81082);
      function o() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: e, onDisconnect: t } = n,
          o = (0, i.useConfig)(n);
        (0, u.useEffect)(
          () =>
            (0, r.u)(o, {
              onChange(n, r) {
                if (
                  ('reconnecting' === r.status ||
                    ('connecting' === r.status && void 0 === r.address)) &&
                  'connected' === n.status
                ) {
                  let { address: t, addresses: u, chain: i, chainId: o, connector: a } = n,
                    c = 'reconnecting' === r.status || void 0 === r.status;
                  null == e ||
                    e({
                      address: t,
                      addresses: u,
                      chain: i,
                      chainId: o,
                      connector: a,
                      isReconnected: c,
                    });
                } else
                  'connected' === r.status && 'disconnected' === n.status && (null == t || t());
              },
            }),
          [o, e, t]
        );
      }
    },
    16164: function (n, e, t) {
      t.d(e, {
        useBalance: function () {
          return c;
        },
      });
      var r = t(14886),
        u = t(24755),
        i = t(87967),
        o = t(65386),
        a = t(81082);
      function c() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: c, query: s = {} } = t,
          l = (0, a.useConfig)(t),
          d = (0, o.useChainId)({ config: l }),
          f = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: t, scopeKey: u, ...i } = e[1];
                if (!t) throw Error('address is required');
                return (await (0, r.s)(n, { ...i, address: t })) ?? null;
              },
              queryKey: (function (n = {}) {
                return ['balance', (0, u.OP)(n)];
              })(e),
            };
          })(l, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : d }),
          y = !!(c && (null === (e = s.enabled) || void 0 === e || e));
        return (0, i.aM)({ ...s, ...f, enabled: y });
      }
    },
    15642: function (n, e, t) {
      t.d(e, {
        useBlockNumber: function () {
          return d;
        },
      });
      var r = t(25513),
        u = t(20168),
        i = t(28180),
        o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082),
        l = t(98642);
      function d() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: d = {}, watch: f } = t,
          y = (0, s.useConfig)(t),
          h = (0, r.NL)(),
          v = (0, c.useChainId)({ config: y }),
          g = null !== (n = t.chainId) && void 0 !== n ? n : v,
          C = (function (n, e = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, ...r } = e[1];
                return (
                  (await (function (n, e = {}) {
                    let { chainId: t, ...r } = e,
                      o = n.getClient({ chainId: t });
                    return (0, i.s)(o, u.z, 'getBlockNumber')(r);
                  })(n, r)) ?? null
                );
              },
              queryKey: (function (n = {}) {
                return ['blockNumber', (0, o.OP)(n)];
              })(e),
            };
          })(y, { ...t, chainId: g });
        return (
          (0, l.useWatchBlockNumber)({
            ...{ config: t.config, chainId: t.chainId, ...('object' == typeof f ? f : {}) },
            enabled: !!(
              (null === (e = d.enabled) || void 0 === e || e) &&
              ('object' == typeof f ? f.enabled : f)
            ),
            onBlockNumber(n) {
              h.setQueryData(C.queryKey, n);
            },
          }),
          (0, a.aM)({ ...d, ...C })
        );
      }
    },
    72355: function (n, e, t) {
      t.d(e, {
        useBlockTransactionCount: function () {
          return s;
        },
      });
      var r = t(28080),
        u = t(28180),
        i = t(24755),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = e,
          s = (0, c.useConfig)(e),
          l = (0, a.useChainId)({ config: s }),
          d = null !== (n = e.chainId) && void 0 !== n ? n : l,
          f = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, ...i } = e[1];
                return (
                  (await (function (n, e = {}) {
                    let { chainId: t, ...i } = e,
                      o = n.getClient({ chainId: t });
                    return (0, u.s)(o, r.c, 'getBlockTransactionCount')(i);
                  })(n, i)) ?? null
                );
              },
              queryKey: (function (n = {}) {
                return ['blockTransactionCount', (0, i.OP)(n)];
              })(e),
            };
          })(s, { ...e, chainId: d });
        return (0, o.aM)({ ...t, ...f });
      }
    },
    16560: function (n, e, t) {
      t.d(e, {
        useCall: function () {
          return l;
        },
      });
      var r = t(69183),
        u = t(28180);
      async function i(n, e) {
        let { chainId: t, ...i } = e,
          o = n.getClient({ chainId: t });
        return (0, u.s)(o, r.R, 'call')(i);
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = e,
          r = (0, s.useConfig)(e),
          u = (0, c.useChainId)({ config: r }),
          l = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, ...r } = e[1];
                return (await i(n, { ...r })) ?? null;
              },
              queryKey: ['call', (0, o.OP)(e)],
            };
          })(r, { ...e, chainId: null !== (n = e.chainId) && void 0 !== n ? n : u });
        return (0, a.aM)({ ...t, ...l });
      }
    },
    18386: function (n, e, t) {
      t.d(e, {
        useCallsStatus: function () {
          return l;
        },
      });
      var r = t(54437),
        u = t(52171);
      async function i(n, e) {
        let { connector: t, id: i } = e,
          o = await (0, u.e)(n, { connector: t });
        return (0, r.$)(o, { id: i });
      }
      var o = t(88396),
        a = t(24755),
        c = t(87967),
        s = t(81082);
      function l(n) {
        var e;
        let { query: t = {} } = n,
          r =
            ((e = (0, s.useConfig)(n)),
            {
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...r } = n[1];
                return await i(e, r);
              },
              queryKey: ['callsStatus', (0, a.OP)(n)],
              retry: (n, e) => !(e instanceof o.aH) && n < 3,
            });
        return (0, c.aM)({ ...t, ...r });
      }
    },
    13722: function (n, e, t) {
      t.d(e, {
        useCapabilities: function () {
          return d;
        },
      });
      var r = t(26683),
        u = t(52171);
      async function i(n, e = {}) {
        let { account: t, connector: i } = e,
          o = await (0, u.e)(n, { account: t, connector: i });
        return (0, r.F)(o, { account: t });
      }
      var o = t(88396),
        a = t(24755),
        c = t(87967),
        s = t(66911),
        l = t(81082);
      function d() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { account: e, query: t = {} } = n,
          { address: r } = (0, s.useAccount)(),
          u = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, ...r } = e[1];
                return await i(n, r);
              },
              queryKey: (function (n = {}) {
                return ['capabilities', (0, a.OP)(n)];
              })(e),
              retry: (n, e) => !(e instanceof o.aH) && n < 3,
            };
          })((0, l.useConfig)(n), { ...n, account: null != e ? e : r });
        return (0, c.aM)({ ...t, ...u });
      }
    },
    58811: function (n, e, t) {
      t.d(e, {
        useClient: function () {
          return o;
        },
      });
      var r = t(67607),
        u = t(96261),
        i = t(81082);
      function o() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = (0, i.useConfig)(n);
        return (0, u.useSyncExternalStoreWithSelector)(
          (n) =>
            (function (n, e) {
              let { onChange: t } = e;
              return n.subscribe(() => (0, r.s)(n), t, { equalityFn: (n, e) => n?.uid === e?.uid });
            })(e, { onChange: n }),
          () => (0, r.s)(e, n),
          () => (0, r.s)(e, n),
          (n) => n,
          (n, e) => (null == n ? void 0 : n.uid) === (null == e ? void 0 : e.uid)
        );
      }
    },
    38254: function (n, e, t) {
      t.d(e, {
        useConnect: function () {
          return c;
        },
      });
      var r = t(97844),
        u = t(75496),
        i = t(58258),
        o = t(81082),
        a = t(1318);
      function c() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: e } = n,
          t = (0, o.useConfig)(n),
          {
            mutate: c,
            mutateAsync: s,
            ...l
          } = (0, r.D)({ ...e, mutationFn: (n) => (0, u.$)(t, n), mutationKey: ['connect'] });
        return (
          (0, i.useEffect)(
            () =>
              t.subscribe(
                (n) => {
                  let { status: e } = n;
                  return e;
                },
                (n, e) => {
                  'connected' === e && 'disconnected' === n && l.reset();
                }
              ),
            [t, l.reset]
          ),
          { ...l, connect: c, connectAsync: s, connectors: (0, a.useConnectors)({ config: t }) }
        );
      }
    },
    16937: function (n, e, t) {
      t.d(e, {
        useConnections: function () {
          return a;
        },
      });
      var r = t(18548),
        u = t(33873),
        i = t(58258),
        o = t(81082);
      function a() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = (0, o.useConfig)(n);
        return (0, i.useSyncExternalStore)(
          (n) =>
            (function (n, e) {
              let { onChange: t } = e;
              return n.subscribe(() => (0, u.E)(n), t, { equalityFn: r.v });
            })(e, { onChange: n }),
          () => (0, u.E)(e),
          () => (0, u.E)(e)
        );
      }
    },
    84480: function (n, e, t) {
      t.d(e, {
        useConnectorClient: function () {
          return d;
        },
      });
      var r = t(25513),
        u = t(52171),
        i = t(24755),
        o = t(58258),
        a = t(87967),
        c = t(66911),
        s = t(65386),
        l = t(81082);
      function d() {
        var n, e, t;
        let d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: f = {}, ...y } = d,
          h = (0, l.useConfig)(y),
          v = (0, r.NL)(),
          { address: g, connector: C, status: p } = (0, c.useAccount)({ config: h }),
          m = (0, s.useChainId)({ config: h }),
          I = null !== (n = d.connector) && void 0 !== n ? n : C,
          { queryKey: b, ...q } = (function (n, e = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: t }) {
                let { connector: r } = e,
                  { connectorUid: i, scopeKey: o, ...a } = t[1];
                return (0, u.e)(n, { ...a, connector: r });
              },
              queryKey: (function (n = {}) {
                let { connector: e, ...t } = n;
                return ['connectorClient', { ...(0, i.OP)(t), connectorUid: e?.uid }];
              })(e),
            };
          })(h, { ...d, chainId: null !== (e = d.chainId) && void 0 !== e ? e : m, connector: I }),
          w = !!(
            ('connected' === p || ('reconnecting' === p && (null == I ? void 0 : I.getProvider))) &&
            (null === (t = f.enabled) || void 0 === t || t)
          ),
          K = (0, o.useRef)(g);
        return (
          (0, o.useEffect)(() => {
            let n = K.current;
            !g && n
              ? (v.removeQueries({ queryKey: b }), (K.current = void 0))
              : g !== n && (v.invalidateQueries({ queryKey: b }), (K.current = g));
          }, [g, v]),
          (0, a.aM)({ ...f, ...q, queryKey: b, enabled: w, staleTime: Number.POSITIVE_INFINITY })
        );
      }
    },
    1318: function (n, e, t) {
      t.d(e, {
        useConnectors: function () {
          return s;
        },
      });
      var r = t(33022),
        u = t(18548);
      let i = [];
      function o(n) {
        let e = n.connectors;
        return (0, u.v)(i, e) ? i : ((i = e), e);
      }
      var a = t(58258),
        c = t(81082);
      function s() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = (0, c.useConfig)(n);
        return (0, a.useSyncExternalStore)(
          (n) => (0, r.f)(e, { onChange: n }),
          () => o(e),
          () => o(e)
        );
      }
    },
    18074: function (n, e, t) {
      t.d(e, {
        useDeployContract: function () {
          return s;
        },
      });
      var r = t(97844),
        u = t(79808),
        i = t(28180),
        o = t(52171);
      async function a(n, e) {
        let t;
        let { account: r, chainId: a, connector: c, ...s } = e;
        t =
          'object' == typeof r && r?.type === 'local'
            ? n.getClient({ chainId: a })
            : await (0, o.e)(n, { account: r ?? void 0, chainId: a, connector: c });
        let l = (0, i.s)(t, u.P, 'deployContract');
        return await l({ ...s, ...(r ? { account: r } : {}), chain: a ? { id: a } : null });
      }
      var c = t(81082);
      function s() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          u =
            ((n = (0, c.useConfig)(e)),
            { mutationFn: (e) => a(n, e), mutationKey: ['deployContract'] }),
          { mutate: i, mutateAsync: o, ...s } = (0, r.D)({ ...t, ...u });
        return { ...s, deployContract: i, deployContractAsync: o };
      }
    },
    3985: function (n, e, t) {
      t.d(e, {
        useDisconnect: function () {
          return a;
        },
      });
      var r = t(97844),
        u = t(25964),
        i = t(81082),
        o = t(16937);
      function a() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: e } = n,
          t = (0, i.useConfig)(n),
          {
            mutate: a,
            mutateAsync: c,
            ...s
          } = (0, r.D)({ ...e, mutationFn: (n) => (0, u.z)(t, n), mutationKey: ['disconnect'] });
        return {
          ...s,
          connectors: (0, o.useConnections)({ config: t }).map((n) => n.connector),
          disconnect: a,
          disconnectAsync: c,
        };
      }
    },
    63154: function (n, e, t) {
      t.d(e, {
        useEnsAddress: function () {
          return c;
        },
      });
      var r = t(9905),
        u = t(24755),
        i = t(87967),
        o = t(65386),
        a = t(81082);
      function c() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: c, query: s = {} } = t,
          l = (0, a.useConfig)(t),
          d = (0, o.useChainId)({ config: l }),
          f = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { name: t, scopeKey: u, ...i } = e[1];
                if (!t) throw Error('name is required');
                return (0, r.O)(n, { ...i, name: t });
              },
              queryKey: (function (n = {}) {
                return ['ensAddress', (0, u.OP)(n)];
              })(e),
            };
          })(l, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : d }),
          y = !!(c && (null === (e = s.enabled) || void 0 === e || e));
        return (0, i.aM)({ ...s, ...f, enabled: y });
      }
    },
    95715: function (n, e, t) {
      t.d(e, {
        useEnsResolver: function () {
          return s;
        },
      });
      var r = t(30134),
        u = t(28180),
        i = t(24755),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: s, query: l = {} } = t,
          d = (0, c.useConfig)(t),
          f = (0, a.useChainId)({ config: d }),
          y = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { name: t, scopeKey: i, ...o } = e[1];
                if (!t) throw Error('name is required');
                return (function (n, e) {
                  let { chainId: t, ...i } = e,
                    o = n.getClient({ chainId: t });
                  return (0, u.s)(o, r.S, 'getEnsResolver')(i);
                })(n, { ...o, name: t });
              },
              queryKey: (function (n = {}) {
                return ['ensResolver', (0, i.OP)(n)];
              })(e),
            };
          })(d, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : f }),
          h = !!(s && (null === (e = l.enabled) || void 0 === e || e));
        return (0, o.aM)({ ...l, ...y, enabled: h });
      }
    },
    55968: function (n, e, t) {
      t.d(e, {
        useEnsText: function () {
          return s;
        },
      });
      var r = t(66855),
        u = t(28180),
        i = t(24755),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { key: s, name: l, query: d = {} } = t,
          f = (0, c.useConfig)(t),
          y = (0, a.useChainId)({ config: f }),
          h = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { key: t, name: i, scopeKey: o, ...a } = e[1];
                if (!t || !i) throw Error('key and name are required');
                return (function (n, e) {
                  let { chainId: t, ...i } = e,
                    o = n.getClient({ chainId: t });
                  return (0, u.s)(o, r.g, 'getEnsText')(i);
                })(n, { ...a, key: t, name: i });
              },
              queryKey: (function (n = {}) {
                return ['ensText', (0, i.OP)(n)];
              })(e),
            };
          })(f, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : y }),
          v = !!(s && l && (null === (e = d.enabled) || void 0 === e || e));
        return (0, o.aM)({ ...d, ...h, enabled: v });
      }
    },
    82405: function (n, e, t) {
      t.d(e, {
        useEstimateFeesPerGas: function () {
          return f;
        },
      });
      var r = t(28213),
        u = t(59501),
        i = t(28180),
        o = t(6537);
      async function a(n, e = {}) {
        let { chainId: t, formatUnits: a = 'gwei', ...c } = e,
          s = n.getClient({ chainId: t }),
          l = (0, i.s)(s, u.X, 'estimateFeesPerGas'),
          {
            gasPrice: d,
            maxFeePerGas: f,
            maxPriorityFeePerGas: y,
          } = await l({ ...c, chain: s.chain }),
          h = (0, o.W)(a);
        return {
          formatted: {
            gasPrice: d ? (0, r.b)(d, h) : void 0,
            maxFeePerGas: f ? (0, r.b)(f, h) : void 0,
            maxPriorityFeePerGas: y ? (0, r.b)(y, h) : void 0,
          },
          gasPrice: d,
          maxFeePerGas: f,
          maxPriorityFeePerGas: y,
        };
      }
      var c = t(24755),
        s = t(87967),
        l = t(65386),
        d = t(81082);
      function f() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = e,
          r = (0, d.useConfig)(e),
          u = (0, l.useChainId)({ config: r }),
          i = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, ...r } = e[1];
                return a(n, r);
              },
              queryKey: (function (n = {}) {
                return ['estimateFeesPerGas', (0, c.OP)(n)];
              })(e),
            };
          })(r, { ...e, chainId: null !== (n = e.chainId) && void 0 !== n ? n : u });
        return (0, s.aM)({ ...t, ...i });
      }
    },
    67598: function (n, e, t) {
      t.d(e, {
        useEstimateGas: function () {
          return s;
        },
      });
      var r = t(65036),
        u = t(24755),
        i = t(87967),
        o = t(65386),
        a = t(81082),
        c = t(84480);
      function s() {
        var n, e, t;
        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { connector: l, query: d = {} } = s,
          f = (0, a.useConfig)(s),
          { data: y } = (0, c.useConnectorClient)({
            config: f,
            connector: l,
            query: { enabled: void 0 === s.account },
          }),
          h = null !== (n = s.account) && void 0 !== n ? n : null == y ? void 0 : y.account,
          v = (0, o.useChainId)({ config: f }),
          g = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { connector: u } = e,
                  { account: i, scopeKey: o, ...a } = t[1];
                if (!i && !u) throw Error('account or connector is required');
                return (0, r.Q)(n, { account: i, connector: u, ...a });
              },
              queryKey: (function (n = {}) {
                let { connector: e, ...t } = n;
                return ['estimateGas', (0, u.OP)(t)];
              })(e),
            };
          })(f, {
            ...s,
            account: h,
            chainId: null !== (e = s.chainId) && void 0 !== e ? e : v,
            connector: l,
          }),
          C = !!((h || l) && (null === (t = d.enabled) || void 0 === t || t));
        return (0, i.aM)({ ...d, ...g, enabled: C });
      }
    },
    32615: function (n, e, t) {
      t.d(e, {
        useEstimateMaxPriorityFeePerGas: function () {
          return l;
        },
      });
      var r = t(95729),
        u = t(28180);
      async function i(n, e = {}) {
        let { chainId: t } = e,
          i = n.getClient({ chainId: t });
        return (0, u.s)(i, r._, 'estimateMaxPriorityFeePerGas')({ chain: i.chain });
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = e,
          r = (0, s.useConfig)(e),
          u = (0, c.useChainId)({ config: r }),
          l = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, ...r } = e[1];
                return i(n, r);
              },
              queryKey: (function (n = {}) {
                return ['estimateMaxPriorityFeePerGas', (0, o.OP)(n)];
              })(e),
            };
          })(r, { ...e, chainId: null !== (n = e.chainId) && void 0 !== n ? n : u });
        return (0, a.aM)({ ...t, ...l });
      }
    },
    92241: function (n, e, t) {
      t.d(e, {
        useFeeHistory: function () {
          return s;
        },
      });
      var r = t(97867),
        u = t(28180),
        i = t(24755),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { blockCount: s, rewardPercentiles: l, query: d = {} } = t,
          f = (0, c.useConfig)(t),
          y = (0, a.useChainId)({ config: f }),
          h = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { blockCount: t, rewardPercentiles: i, scopeKey: o, ...a } = e[1];
                if (!t) throw Error('blockCount is required');
                if (!i) throw Error('rewardPercentiles is required');
                return (
                  (await (function (n, e) {
                    let { chainId: t, ...i } = e,
                      o = n.getClient({ chainId: t });
                    return (0, u.s)(o, r.Z, 'getFeeHistory')(i);
                  })(n, { ...a, blockCount: t, rewardPercentiles: i })) ?? null
                );
              },
              queryKey: (function (n = {}) {
                return ['feeHistory', (0, i.OP)(n)];
              })(e),
            };
          })(f, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : y }),
          v = !!(s && l && (null === (e = d.enabled) || void 0 === e || e));
        return (0, o.aM)({ ...d, ...h, enabled: v });
      }
    },
    95308: function (n, e, t) {
      t.d(e, {
        useGasPrice: function () {
          return s;
        },
      });
      var r = t(15363),
        u = t(28180),
        i = t(24755),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = e,
          s = (0, c.useConfig)(e),
          l = (0, a.useChainId)({ config: s }),
          d = null !== (n = e.chainId) && void 0 !== n ? n : l,
          f = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, ...i } = e[1];
                return (
                  (await (function (n, e = {}) {
                    let { chainId: t } = e,
                      i = n.getClient({ chainId: t });
                    return (0, u.s)(i, r.o, 'getGasPrice')({});
                  })(n, i)) ?? null
                );
              },
              queryKey: (function (n = {}) {
                return ['gasPrice', (0, i.OP)(n)];
              })(e),
            };
          })(s, { ...e, chainId: d });
        return (0, o.aM)({ ...t, ...f });
      }
    },
    33734: function (n, e, t) {
      t.d(e, {
        useInfiniteReadContracts: function () {
          return c;
        },
      });
      var r = t(6629),
        u = t(24755),
        i = t(87967),
        o = t(65386),
        a = t(81082);
      function c(n) {
        var e, t;
        let { contracts: c = [], query: s } = n,
          l = (0, a.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          f = {
            ...(t = { ...n, chainId: d, contracts: c, query: s }).query,
            async queryFn({ pageParam: n, queryKey: e }) {
              let { contracts: u } = t,
                { cacheKey: i, scopeKey: o, ...a } = e[1];
              return await (0, r.J)(l, { ...a, contracts: u(n) });
            },
            queryKey: (function (n) {
              let { contracts: e, query: t, ...r } = n;
              return ['infiniteReadContracts', (0, u.OP)(r)];
            })(t),
          };
        return (0, i.NS)({
          ...s,
          ...f,
          initialPageParam: f.initialPageParam,
          structuralSharing: null !== (e = s.structuralSharing) && void 0 !== e ? e : u.if,
        });
      }
    },
    54537: function (n, e, t) {
      t.d(e, {
        usePrepareTransactionRequest: function () {
          return c;
        },
      });
      var r = t(95705),
        u = t(24755),
        i = t(87967),
        o = t(65386),
        a = t(81082);
      function c() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { to: c, query: s = {} } = t,
          l = (0, a.useConfig)(t),
          d = (0, o.useChainId)({ config: l }),
          f = (function (n, e = {}) {
            return {
              queryFn({ queryKey: e }) {
                let { scopeKey: t, to: u, ...i } = e[1];
                if (!u) throw Error('to is required');
                return (0, r.Z)(n, { to: u, ...i });
              },
              queryKey: ['prepareTransactionRequest', (0, u.OP)(e)],
            };
          })(l, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : d }),
          y = !!(c && (null === (e = s.enabled) || void 0 === e || e));
        return (0, i.aM)({ ...s, ...f, enabled: y });
      }
    },
    40327: function (n, e, t) {
      t.d(e, {
        useProof: function () {
          return l;
        },
      });
      var r = t(80036),
        u = t(28180);
      async function i(n, e) {
        let { chainId: t, ...i } = e,
          o = n.getClient({ chainId: t });
        return (0, u.s)(o, r.S, 'getProof')(i);
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, storageKeys: u, query: l = {} } = t,
          d = (0, s.useConfig)(t),
          f = (0, c.useChainId)({ config: d }),
          y = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: t, scopeKey: r, storageKeys: u, ...o } = e[1];
                if (!t || !u) throw Error('address and storageKeys are required');
                return i(n, { ...o, address: t, storageKeys: u });
              },
              queryKey: ['getProof', (0, o.OP)(e)],
            };
          })(d, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : f }),
          h = !!(r && u && (null === (e = l.enabled) || void 0 === e || e));
        return (0, a.aM)({ ...l, ...y, enabled: h });
      }
    },
    14754: function (n, e, t) {
      t.d(e, {
        useReadContracts: function () {
          return s;
        },
      });
      var r = t(6629),
        u = t(24755),
        i = t(58258),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: t = [], query: s = {} } = e,
          l = (0, c.useConfig)(e),
          d = (0, a.useChainId)({ config: l }),
          f = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let u = [],
                  i = t[1].contracts.length;
                for (let n = 0; n < i; n++) {
                  let r = t[1].contracts[n],
                    i = (e.contracts?.[n]).abi;
                  u.push({ ...r, abi: i });
                }
                let { scopeKey: o, ...a } = t[1];
                return (0, r.J)(n, { ...a, contracts: u });
              },
              queryKey: (function (n = {}) {
                let e = [];
                for (let t of n.contracts ?? []) {
                  let { abi: r, ...u } = t;
                  e.push({ ...u, chainId: u.chainId ?? n.chainId });
                }
                return ['readContracts', (0, u.OP)({ ...n, contracts: e })];
              })(e),
            };
          })(l, { ...e, chainId: d }),
          y = (0, i.useMemo)(() => {
            var n;
            let e = !1;
            for (let n of t) {
              let { abi: t, address: r, functionName: u } = n;
              if (!t || !r || !u) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (null === (n = s.enabled) || void 0 === n || n));
          }, [t, s.enabled]);
        return (0, o.aM)({
          ...f,
          ...s,
          enabled: y,
          structuralSharing: null !== (n = s.structuralSharing) && void 0 !== n ? n : u.if,
        });
      }
    },
    45445: function (n, e, t) {
      t.d(e, {
        useReconnect: function () {
          return o;
        },
      });
      var r = t(97844),
        u = t(28297),
        i = t(81082);
      function o() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: e } = n,
          t = (0, i.useConfig)(n),
          {
            mutate: o,
            mutateAsync: a,
            ...c
          } = (0, r.D)({ ...e, mutationFn: (n) => (0, u.G)(t, n), mutationKey: ['reconnect'] });
        return { ...c, connectors: t.connectors, reconnect: o, reconnectAsync: a };
      }
    },
    76269: function (n, e, t) {
      t.d(e, {
        useSendCalls: function () {
          return c;
        },
      });
      var r = t(97844),
        u = t(80376),
        i = t(52171);
      async function o(n, e) {
        let { account: t, chainId: r, connector: o, calls: a, ...c } = e,
          s = await (0, i.e)(n, { account: t, chainId: r, connector: o });
        return (0, u.s)(s, {
          ...c,
          ...(void 0 !== t ? { account: t } : {}),
          calls: a,
          chain: r ? { id: r } : void 0,
        });
      }
      var a = t(81082);
      function c() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          u =
            ((n = (0, a.useConfig)(e)), { mutationFn: (e) => o(n, e), mutationKey: ['sendCalls'] }),
          { mutate: i, mutateAsync: c, ...s } = (0, r.D)({ ...t, ...u });
        return { ...s, sendCalls: i, sendCallsAsync: c };
      }
    },
    89013: function (n, e, t) {
      t.d(e, {
        useSendTransaction: function () {
          return o;
        },
      });
      var r = t(97844),
        u = t(87933),
        i = t(81082);
      function o() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          o =
            ((n = (0, i.useConfig)(e)),
            { mutationFn: (e) => (0, u.T)(n, e), mutationKey: ['sendTransaction'] }),
          { mutate: a, mutateAsync: c, ...s } = (0, r.D)({ ...t, ...o });
        return { ...s, sendTransaction: a, sendTransactionAsync: c };
      }
    },
    12518: function (n, e, t) {
      t.d(e, {
        useShowCallsStatus: function () {
          return c;
        },
      });
      var r = t(97844),
        u = t(44443),
        i = t(52171);
      async function o(n, e) {
        let { connector: t, id: r } = e,
          o = await (0, i.e)(n, { connector: t });
        return (0, u.Z)(o, { id: r });
      }
      var a = t(81082);
      function c() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          u =
            ((n = (0, a.useConfig)(e)),
            { mutationFn: (e) => o(n, e), mutationKey: ['showCallsStatus'] }),
          { mutate: i, mutateAsync: c, ...s } = (0, r.D)({ ...t, ...u });
        return { ...s, showCallsStatus: i, showCallsStatusAsync: c };
      }
    },
    39613: function (n, e, t) {
      t.d(e, {
        useSignTypedData: function () {
          return s;
        },
      });
      var r = t(97844),
        u = t(93800),
        i = t(28180),
        o = t(52171);
      async function a(n, e) {
        let t;
        let { account: r, connector: a, ...c } = e;
        return (
          (t =
            'object' == typeof r && 'local' === r.type
              ? n.getClient()
              : await (0, o.e)(n, { account: r, connector: a })),
          (0, i.s)(t, u.x, 'signTypedData')({ ...c, ...(r ? { account: r } : {}) })
        );
      }
      var c = t(81082);
      function s() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          u =
            ((n = (0, c.useConfig)(e)),
            { mutationFn: (e) => a(n, e), mutationKey: ['signTypedData'] }),
          { mutate: i, mutateAsync: o, ...s } = (0, r.D)({ ...t, ...u });
        return { ...s, signTypedData: i, signTypedDataAsync: o };
      }
    },
    68889: function (n, e, t) {
      t.d(e, {
        useSimulateContract: function () {
          return f;
        },
      });
      var r = t(87250),
        u = t(28180),
        i = t(52171);
      async function o(n, e) {
        let t;
        let { abi: o, chainId: a, connector: c, ...s } = e;
        t = e.account ? e.account : (await (0, i.e)(n, { chainId: a, connector: c })).account;
        let l = n.getClient({ chainId: a }),
          d = (0, u.s)(l, r.a, 'simulateContract'),
          { result: f, request: y } = await d({ ...s, abi: o, account: t });
        return { chainId: l.chain.id, result: f, request: { ...y, chainId: a } };
      }
      var a = t(24755),
        c = t(87967),
        s = t(65386),
        l = t(81082),
        d = t(84480);
      function f() {
        var n, e, t;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: u, address: i, connector: f, functionName: y, query: h = {} } = r,
          v = (0, l.useConfig)(r),
          { data: g } = (0, d.useConnectorClient)({
            config: v,
            connector: f,
            query: { enabled: void 0 === r.account },
          }),
          C = (0, s.useChainId)({ config: v }),
          p = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { abi: r, connector: u } = e;
                if (!r) throw Error('abi is required');
                let { scopeKey: i, ...a } = t[1],
                  { address: c, functionName: s } = a;
                if (!c) throw Error('address is required');
                if (!s) throw Error('functionName is required');
                return o(n, { abi: r, connector: u, ...a });
              },
              queryKey: (function (n = {}) {
                let { abi: e, connector: t, ...r } = n;
                return ['simulateContract', (0, a.OP)(r)];
              })(e),
            };
          })(v, {
            ...r,
            account: null !== (n = r.account) && void 0 !== n ? n : null == g ? void 0 : g.account,
            chainId: null !== (e = r.chainId) && void 0 !== e ? e : C,
          }),
          m = !!(u && i && y && (null === (t = h.enabled) || void 0 === t || t));
        return (0, c.aM)({ ...h, ...p, enabled: m });
      }
    },
    84408: function (n, e, t) {
      t.d(e, {
        useStorageAt: function () {
          return l;
        },
      });
      var r = t(31968),
        u = t(28180);
      async function i(n, e) {
        let { chainId: t, ...i } = e,
          o = n.getClient({ chainId: t });
        return (0, u.s)(o, r.Y, 'getStorageAt')(i);
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, slot: u, query: l = {} } = t,
          d = (0, s.useConfig)(t),
          f = (0, c.useChainId)({ config: d }),
          y = (function (n, e = {}) {
            return {
              queryFn({ queryKey: e }) {
                let { address: t, slot: r, scopeKey: u, ...o } = e[1];
                if (!t || !r) throw Error('address and slot are required');
                return i(n, { ...o, address: t, slot: r });
              },
              queryKey: ['getStorageAt', (0, o.OP)(e)],
            };
          })(d, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : f }),
          h = !!(r && u && (null === (e = l.enabled) || void 0 === e || e));
        return (0, a.aM)({ ...l, ...y, enabled: h });
      }
    },
    62726: function (n, e, t) {
      t.d(e, {
        useSwitchAccount: function () {
          return c;
        },
      });
      var r = t(97844),
        u = t(88396);
      async function i(n, e) {
        let { connector: t } = e,
          r = n.state.connections.get(t.uid);
        if (!r) throw new u.aH();
        return (
          await n.storage?.setItem('recentConnectorId', t.id),
          n.setState((n) => ({ ...n, current: t.uid })),
          { accounts: r.accounts, chainId: r.chainId }
        );
      }
      var o = t(81082),
        a = t(16937);
      function c() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: e } = n,
          t = (0, o.useConfig)(n),
          {
            mutate: u,
            mutateAsync: c,
            ...s
          } = (0, r.D)({ ...e, mutationFn: (n) => i(t, n), mutationKey: ['switchAccount'] });
        return {
          ...s,
          connectors: (0, a.useConnections)({ config: t }).map((n) => n.connector),
          switchAccount: u,
          switchAccountAsync: c,
        };
      }
    },
    7401: function (n, e, t) {
      t.d(e, {
        useToken: function () {
          return h;
        },
      });
      var r = t(54484),
        u = t(28213),
        i = t(79e3),
        o = t(97032),
        a = t(6537),
        c = t(6629);
      async function s(n, e) {
        let { address: t, chainId: s, formatUnits: l = 18 } = e;
        function d(n) {
          return [
            {
              type: 'function',
              name: 'decimals',
              stateMutability: 'view',
              inputs: [],
              outputs: [{ type: 'uint8' }],
            },
            {
              type: 'function',
              name: 'name',
              stateMutability: 'view',
              inputs: [],
              outputs: [{ type: n }],
            },
            {
              type: 'function',
              name: 'symbol',
              stateMutability: 'view',
              inputs: [],
              outputs: [{ type: n }],
            },
            {
              type: 'function',
              name: 'totalSupply',
              stateMutability: 'view',
              inputs: [],
              outputs: [{ type: 'uint256' }],
            },
          ];
        }
        try {
          let e = d('string'),
            i = { address: t, abi: e, chainId: s },
            [o, f, y, h] = await (0, c.J)(n, {
              allowFailure: !0,
              contracts: [
                { ...i, functionName: 'decimals' },
                { ...i, functionName: 'name' },
                { ...i, functionName: 'symbol' },
                { ...i, functionName: 'totalSupply' },
              ],
            });
          if (f.error instanceof r.uq) throw f.error;
          if (y.error instanceof r.uq) throw y.error;
          if (o.error) throw o.error;
          if (h.error) throw h.error;
          return {
            address: t,
            decimals: o.result,
            name: f.result,
            symbol: y.result,
            totalSupply: { formatted: (0, u.b)(h.result, (0, a.W)(l)), value: h.result },
          };
        } catch (e) {
          if (e instanceof r.uq) {
            let e = { address: t, abi: d('bytes32'), chainId: s },
              [r, f, y, h] = await (0, c.J)(n, {
                allowFailure: !1,
                contracts: [
                  { ...e, functionName: 'decimals' },
                  { ...e, functionName: 'name' },
                  { ...e, functionName: 'symbol' },
                  { ...e, functionName: 'totalSupply' },
                ],
              });
            return {
              address: t,
              decimals: r,
              name: (0, i.rR)((0, o.f)(f, { dir: 'right' })),
              symbol: (0, i.rR)((0, o.f)(y, { dir: 'right' })),
              totalSupply: { formatted: (0, u.b)(h, (0, a.W)(l)), value: h },
            };
          }
          throw e;
        }
      }
      var l = t(24755),
        d = t(87967),
        f = t(65386),
        y = t(81082);
      function h() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: u = {} } = t,
          i = (0, y.useConfig)(t),
          o = (0, f.useChainId)({ config: i }),
          a = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: t, scopeKey: r, ...u } = e[1];
                if (!t) throw Error('address is required');
                return s(n, { ...u, address: t });
              },
              queryKey: (function (n = {}) {
                return ['token', (0, l.OP)(n)];
              })(e),
            };
          })(i, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : o }),
          c = !!(r && (null === (e = u.enabled) || void 0 === e || e));
        return (0, d.aM)({ ...u, ...a, enabled: c });
      }
    },
    17293: function (n, e, t) {
      t.d(e, {
        useTransaction: function () {
          return s;
        },
      });
      var r = t(11662),
        u = t(28180),
        i = t(24755),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { blockHash: s, blockNumber: l, blockTag: d, hash: f, query: y = {} } = t,
          h = (0, c.useConfig)(t),
          v = (0, a.useChainId)({ config: h }),
          g = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { blockHash: t, blockNumber: i, blockTag: o, hash: a, index: c } = e[1];
                if (!t && !i && !o && !a)
                  throw Error('blockHash, blockNumber, blockTag, or hash is required');
                if (!a && !c)
                  throw Error('index is required for blockHash, blockNumber, or blockTag');
                let { scopeKey: s, ...l } = e[1];
                return (function (n, e) {
                  let { chainId: t, ...i } = e,
                    o = n.getClient({ chainId: t });
                  return (0, u.s)(o, r.f, 'getTransaction')(i);
                })(n, l);
              },
              queryKey: (function (n = {}) {
                return ['transaction', (0, i.OP)(n)];
              })(e),
            };
          })(h, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : v }),
          C = !!(!(s && l && d && f) && (null === (e = y.enabled) || void 0 === e || e));
        return (0, o.aM)({ ...y, ...g, enabled: C });
      }
    },
    79686: function (n, e, t) {
      t.d(e, {
        useTransactionConfirmations: function () {
          return s;
        },
      });
      var r = t(37233),
        u = t(28180),
        i = t(24755),
        o = t(87967),
        a = t(65386),
        c = t(81082);
      function s() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: s, transactionReceipt: l, query: d = {} } = t,
          f = (0, c.useConfig)(t),
          y = (0, a.useChainId)({ config: f }),
          h = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { hash: t, transactionReceipt: i, scopeKey: o, ...a } = e[1];
                if (!t && !i) throw Error('hash or transactionReceipt is required');
                return (
                  (await (function (n, e) {
                    let { chainId: t, ...i } = e,
                      o = n.getClient({ chainId: t });
                    return (0, u.s)(o, r.a, 'getTransactionConfirmations')(i);
                  })(n, { hash: t, transactionReceipt: i, ...a })) ?? null
                );
              },
              queryKey: (function (n = {}) {
                return ['transactionConfirmations', (0, i.OP)(n)];
              })(e),
            };
          })(f, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : y }),
          v = !!(!(s && l) && (s || l) && (null === (e = d.enabled) || void 0 === e || e));
        return (0, o.aM)({ ...d, ...h, enabled: v });
      }
    },
    9541: function (n, e, t) {
      t.d(e, {
        useTransactionCount: function () {
          return l;
        },
      });
      var r = t(9185),
        u = t(28180);
      async function i(n, e) {
        let { address: t, blockNumber: i, blockTag: o, chainId: a } = e,
          c = n.getClient({ chainId: a });
        return (0, u.s)(
          c,
          r.K,
          'getTransactionCount'
        )(i ? { address: t, blockNumber: i } : { address: t, blockTag: o });
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: u = {} } = t,
          l = (0, s.useConfig)(t),
          d = (0, c.useChainId)({ config: l }),
          f = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: t, scopeKey: r, ...u } = e[1];
                if (!t) throw Error('address is required');
                return (await i(n, { ...u, address: t })) ?? null;
              },
              queryKey: (function (n = {}) {
                return ['transactionCount', (0, o.OP)(n)];
              })(e),
            };
          })(l, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : d }),
          y = !!(r && (null === (e = u.enabled) || void 0 === e || e));
        return (0, a.aM)({ ...u, ...f, enabled: y });
      }
    },
    42292: function (n, e, t) {
      t.d(e, {
        useTransactionReceipt: function () {
          return l;
        },
      });
      var r = t(34940),
        u = t(28180);
      async function i(n, e) {
        let { chainId: t, ...i } = e,
          o = n.getClient({ chainId: t });
        return (0, u.s)(o, r.a, 'getTransactionReceipt')(i);
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: r, query: u = {} } = t,
          l = (0, s.useConfig)(t),
          d = (0, c.useChainId)({ config: l }),
          f = (function (n, e = {}) {
            return {
              queryFn({ queryKey: e }) {
                let { hash: t, scopeKey: r, ...u } = e[1];
                if (!t) throw Error('hash is required');
                return i(n, { ...u, hash: t });
              },
              queryKey: ['getTransactionReceipt', (0, o.OP)(e)],
            };
          })(l, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : d }),
          y = !!(r && (null === (e = u.enabled) || void 0 === e || e));
        return (0, a.aM)({ ...u, ...f, enabled: y });
      }
    },
    36511: function (n, e, t) {
      t.d(e, {
        useVerifyMessage: function () {
          return l;
        },
      });
      var r = t(64123),
        u = t(28180);
      async function i(n, e) {
        let { chainId: t, ...i } = e,
          o = n.getClient({ chainId: t });
        return (0, u.s)(o, r.n, 'verifyMessage')(i);
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, message: u, signature: l, query: d = {} } = t,
          f = (0, s.useConfig)(t),
          y = (0, c.useChainId)({ config: f }),
          h = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: t, message: r, signature: u } = e[1];
                if (!t || !r || !u) throw Error('address, message, and signature are required');
                let { scopeKey: o, ...a } = e[1];
                return (await i(n, a)) ?? null;
              },
              queryKey: ['verifyMessage', (0, o.OP)(e)],
            };
          })(f, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : y }),
          v = !!(r && u && l && (null === (e = d.enabled) || void 0 === e || e));
        return (0, a.aM)({ ...d, ...h, enabled: v });
      }
    },
    31678: function (n, e, t) {
      t.d(e, {
        useVerifyTypedData: function () {
          return l;
        },
      });
      var r = t(6303),
        u = t(28180);
      async function i(n, e) {
        let { chainId: t, ...i } = e,
          o = n.getClient({ chainId: t });
        return (0, u.s)(o, r.B, 'verifyTypedData')(i);
      }
      var o = t(24755),
        a = t(87967),
        c = t(65386),
        s = t(81082);
      function l() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, message: u, primaryType: l, signature: d, types: f, query: y = {} } = t,
          h = (0, s.useConfig)(t),
          v = (0, c.useChainId)({ config: h }),
          g = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let {
                  address: t,
                  message: r,
                  primaryType: u,
                  signature: o,
                  types: a,
                  scopeKey: c,
                  ...s
                } = e[1];
                if (!t) throw Error('address is required');
                if (!r) throw Error('message is required');
                if (!u) throw Error('primaryType is required');
                if (!o) throw Error('signature is required');
                if (!a) throw Error('types is required');
                return (
                  (await i(n, {
                    ...s,
                    address: t,
                    message: r,
                    primaryType: u,
                    signature: o,
                    types: a,
                  })) ?? null
                );
              },
              queryKey: ['verifyTypedData', (0, o.OP)(e)],
            };
          })(h, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : v }),
          C = !!(r && u && l && d && f && (null === (e = y.enabled) || void 0 === e || e));
        return (0, a.aM)({ ...y, ...g, enabled: C });
      }
    },
    53618: function (n, e, t) {
      t.d(e, {
        useWaitForCallsStatus: function () {
          return l;
        },
      });
      var r = t(57487),
        u = t(52171);
      async function i(n, e) {
        let { connector: t, id: i } = e,
          o = await (0, u.e)(n, { connector: t });
        return (0, r.l)(o, { id: i });
      }
      var o = t(88396),
        a = t(24755),
        c = t(87967),
        s = t(81082);
      function l(n) {
        var e, t;
        let { id: r, query: u = {} } = n,
          l =
            ((t = (0, s.useConfig)(n)),
            {
              async queryFn({ queryKey: n }) {
                let { scopeKey: e, id: r, ...u } = n[1];
                if (!r) throw Error('id is required');
                return await i(t, { ...u, id: r });
              },
              queryKey: ['callsStatus', (0, a.OP)(n)],
              retry: (n, e) => !(e instanceof o.aH) && n < 3,
            }),
          d = !!(r && (null === (e = u.enabled) || void 0 === e || e));
        return (0, c.aM)({ ...u, ...l, enabled: d });
      }
    },
    10758: function (n, e, t) {
      t.d(e, {
        useWaitForTransactionReceipt: function () {
          return c;
        },
      });
      var r = t(48894),
        u = t(24755),
        i = t(87967),
        o = t(65386),
        a = t(81082);
      function c() {
        var n, e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: c, query: s = {} } = t,
          l = (0, a.useConfig)(t),
          d = (0, o.useChainId)({ config: l }),
          f = (function (n, e = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { hash: u, ...i } = t[1];
                if (!u) throw Error('hash is required');
                return (0, r.e)(n, { ...i, onReplaced: e.onReplaced, hash: u });
              },
              queryKey: (function (n = {}) {
                let { onReplaced: e, ...t } = n;
                return ['waitForTransactionReceipt', (0, u.OP)(t)];
              })(e),
            };
          })(l, { ...t, chainId: null !== (n = t.chainId) && void 0 !== n ? n : d }),
          y = !!(c && (null === (e = s.enabled) || void 0 === e || e));
        return (0, i.aM)({ ...s, ...f, enabled: y });
      }
    },
    59761: function (n, e, t) {
      t.d(e, {
        useWatchAsset: function () {
          return s;
        },
      });
      var r = t(97844),
        u = t(38339),
        i = t(28180),
        o = t(52171);
      async function a(n, e) {
        let { connector: t, ...r } = e,
          a = await (0, o.e)(n, { connector: t });
        return (0, i.s)(a, u.d, 'watchAsset')(r);
      }
      var c = t(81082);
      function s() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          u =
            ((n = (0, c.useConfig)(e)),
            { mutationFn: (e) => a(n, e), mutationKey: ['watchAsset'] }),
          { mutate: i, mutateAsync: o, ...s } = (0, r.D)({ ...t, ...u });
        return { ...s, watchAsset: i, watchAssetAsync: o };
      }
    },
    98642: function (n, e, t) {
      t.d(e, {
        useWatchBlockNumber: function () {
          return c;
        },
      });
      var r = t(7566),
        u = t(28180),
        i = t(58258),
        o = t(65386),
        a = t(81082);
      function c() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: t = !0, onBlockNumber: c, config: s, ...l } = e,
          d = (0, a.useConfig)(e),
          f = (0, o.useChainId)({ config: d }),
          y = null !== (n = e.chainId) && void 0 !== n ? n : f;
        (0, i.useEffect)(() => {
          if (t && c)
            return (function (n, e) {
              let t, i;
              let { syncConnectedChain: o = n._internal.syncConnectedChain, ...a } = e,
                c = (e) => {
                  t && t();
                  let i = n.getClient({ chainId: e });
                  return (t = (0, u.s)(i, r.q, 'watchBlockNumber')(a));
                },
                s = c(e.chainId);
              return (
                o &&
                  !e.chainId &&
                  (i = n.subscribe(
                    ({ chainId: n }) => n,
                    async (n) => c(n)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: y, onBlockNumber: c });
        }, [
          y,
          d,
          t,
          c,
          l.onError,
          l.emitMissed,
          l.emitOnBegin,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    86538: function (n, e, t) {
      t.d(e, {
        useWatchContractEvent: function () {
          return c;
        },
      });
      var r = t(31753),
        u = t(28180),
        i = t(58258),
        o = t(65386),
        a = t(81082);
      function c() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: t = !0, onLogs: c, config: s, ...l } = e,
          d = (0, a.useConfig)(e),
          f = (0, o.useChainId)({ config: d }),
          y = null !== (n = e.chainId) && void 0 !== n ? n : f;
        (0, i.useEffect)(() => {
          if (t && c)
            return (function (n, e) {
              let t, i;
              let { syncConnectedChain: o = n._internal.syncConnectedChain, ...a } = e,
                c = (e) => {
                  t && t();
                  let i = n.getClient({ chainId: e });
                  return (t = (0, u.s)(i, r.Y, 'watchContractEvent')(a));
                },
                s = c(e.chainId);
              return (
                o &&
                  !e.chainId &&
                  (i = n.subscribe(
                    ({ chainId: n }) => n,
                    async (n) => c(n)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: y, onLogs: c });
        }, [
          y,
          d,
          t,
          c,
          l.abi,
          l.address,
          l.args,
          l.batch,
          l.eventName,
          l.fromBlock,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.strict,
          l.syncConnectedChain,
        ]);
      }
    },
    36468: function (n, e, t) {
      t.d(e, {
        useWatchPendingTransactions: function () {
          return a;
        },
      });
      var r = t(37737),
        u = t(58258),
        i = t(65386),
        o = t(81082);
      function a() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: t = !0, onTransactions: a, config: c, ...s } = e,
          l = (0, o.useConfig)(e),
          d = (0, i.useChainId)({ config: l }),
          f = null !== (n = e.chainId) && void 0 !== n ? n : d;
        (0, u.useEffect)(() => {
          if (t && a) return (0, r.O)(l, { ...s, chainId: f, onTransactions: a });
        }, [f, l, t, a, s.batch, s.onError, s.poll, s.pollingInterval, s.syncConnectedChain]);
      }
    },
    68083: function (n, e, t) {
      t.d(e, {
        useWriteContract: function () {
          return o;
        },
      });
      var r = t(97844),
        u = t(25342),
        i = t(81082);
      function o() {
        var n;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          o =
            ((n = (0, i.useConfig)(e)),
            { mutationFn: (e) => (0, u.n)(n, e), mutationKey: ['writeContract'] }),
          { mutate: a, mutateAsync: c, ...s } = (0, r.D)({ ...t, ...o });
        return { ...s, writeContract: a, writeContractAsync: c };
      }
    },
  },
]);
