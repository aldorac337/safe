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
    (e._sentryDebugIds[t] = '390fea36-72b4-42a8-be56-1fc39fd0fb6e'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-390fea36-72b4-42a8-be56-1fc39fd0fb6e'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3613],
  {
    2217: function (e, t, n) {
      n.d(t, {
        $p: function () {
          return f;
        },
        EP: function () {
          return d;
        },
        FL: function () {
          return l;
        },
        Fn: function () {
          return y;
        },
        IH: function () {
          return g;
        },
        Iq: function () {
          return o;
        },
        NI: function () {
          return s;
        },
        Ou: function () {
          return c;
        },
        SD: function () {
          return p;
        },
        Vl: function () {
          return a;
        },
        Xb: function () {
          return v;
        },
        ac: function () {
          return b;
        },
        gm: function () {
          return h;
        },
        m_: function () {
          return u;
        },
        mk: function () {
          return m;
        },
        pp: function () {
          return $;
        },
        u8: function () {
          return w;
        },
        zP: function () {
          return x;
        },
      });
      let r = BigInt(4294967296 - 1),
        i = BigInt(32);
      function a(e, t = !1) {
        let n = e.length,
          a = new Uint32Array(n),
          s = new Uint32Array(n);
        for (let o = 0; o < n; o++) {
          let { h: n, l: u } = (function (e, t = !1) {
            return t
              ? { h: Number(e & r), l: Number((e >> i) & r) }
              : { h: 0 | Number((e >> i) & r), l: 0 | Number(e & r) };
          })(e[o], t);
          [a[o], s[o]] = [n, u];
        }
        return [a, s];
      }
      let s = (e, t, n) => e >>> n,
        o = (e, t, n) => (e << (32 - n)) | (t >>> n),
        u = (e, t, n) => (e >>> n) | (t << (32 - n)),
        c = (e, t, n) => (e << (32 - n)) | (t >>> n),
        l = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        f = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        d = (e, t, n) => (e << n) | (t >>> (32 - n)),
        h = (e, t, n) => (t << n) | (e >>> (32 - n)),
        p = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        m = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function g(e, t, n, r) {
        let i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 4294967296) | 0)) | 0, l: 0 | i };
      }
      let b = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        y = (e, t, n, r) => (t + n + r + ((e / 4294967296) | 0)) | 0,
        v = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        w = (e, t, n, r, i) => (t + n + r + i + ((e / 4294967296) | 0)) | 0,
        x = (e, t, n, r, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        $ = (e, t, n, r, i, a) => (t + n + r + i + a + ((e / 4294967296) | 0)) | 0;
    },
    5965: function (e, t, n) {
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function i(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
          )
        )
          throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function a(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function s(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n) throw Error('digestInto() expects output buffer of length at least ' + n);
      }
      function o(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      function u(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function c(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function l(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      n.d(t, {
        $h: function () {
          return a;
        },
        GL: function () {
          return c;
        },
        Jq: function () {
          return o;
        },
        O0: function () {
          return m;
        },
        Ux: function () {
          return f;
        },
        V1: function () {
          return b;
        },
        ci: function () {
          return p;
        },
        eB: function () {
          return s;
        },
        gk: function () {
          return i;
        },
        k8: function () {
          return r;
        },
        kb: function () {
          return g;
        },
        np: function () {
          return l;
        },
        ru: function () {
          return u;
        },
      });
      let f =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]
            ? (e) => e
            : function (e) {
                for (let n = 0; n < e.length; n++) {
                  var t;
                  e[n] =
                    (((t = e[n]) << 24) & 4278190080) |
                    ((t << 8) & 16711680) |
                    ((t >>> 8) & 65280) |
                    ((t >>> 24) & 255);
                }
                return e;
              },
        d =
          'function' == typeof Uint8Array.from([]).toHex && 'function' == typeof Uint8Array.fromHex,
        h = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function p(e) {
        if ((i(e), d)) return e.toHex();
        let t = '';
        for (let n = 0; n < e.length; n++) t += h[e[n]];
        return t;
      }
      function m(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('string expected');
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          i(e),
          e
        );
      }
      class g {}
      function b(e) {
        let t = (t) => e().update(m(t)).digest(),
          n = e();
        return (t.outputLen = n.outputLen), (t.blockLen = n.blockLen), (t.create = () => e()), t;
      }
    },
    67607: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      function r(e, t = {}) {
        let n;
        try {
          n = e.getClient(t);
        } catch {}
        return n;
      }
    },
    30134: function (e, t, n) {
      n.d(t, {
        S: function () {
          return u;
        },
      });
      var r = n(53064),
        i = n(84196),
        a = n(68132),
        s = n(61896),
        o = n(86705);
      async function u(e, t) {
        let { blockNumber: n, blockTag: u, name: c } = t,
          { chain: l } = e,
          f = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!l)
              throw Error('client chain not configured. universalResolverAddress is required.');
            return (0, r.L)({ blockNumber: n, chain: l, contract: 'ensUniversalResolver' });
          })(),
          d = l?.ensTlds;
        if (d && !d.some((e) => c.endsWith(e)))
          throw Error(
            `${c} is not a valid ENS TLD (${d?.join(', ')}) for chain "${l.name}" (id: ${l.id}).`
          );
        let [h] = await (0, s.s)(
          e,
          o.L,
          'readContract'
        )({
          address: f,
          abi: [
            {
              inputs: [{ type: 'bytes' }],
              name: 'findResolver',
              outputs: [{ type: 'address' }, { type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
          ],
          functionName: 'findResolver',
          args: [(0, i.NC)((0, a.T)(c))],
          blockNumber: n,
          blockTag: u,
        });
        return h;
      }
    },
    25564: function (e, t, n) {
      n.d(t, {
        A: function () {
          return s;
        },
      });
      var r = n(14373),
        i = n(84196),
        a = n(39751);
      async function s(e, t) {
        let { address: n, abi: s, args: o, eventName: u, fromBlock: c, strict: l, toBlock: f } = t,
          d = (0, a.g)(e, { method: 'eth_newFilter' }),
          h = u ? (0, r.O)({ abi: s, args: o, eventName: u }) : void 0,
          p = await e.request({
            method: 'eth_newFilter',
            params: [
              {
                address: n,
                fromBlock: 'bigint' == typeof c ? (0, i.eC)(c) : c,
                toBlock: 'bigint' == typeof f ? (0, i.eC)(f) : f,
                topics: h,
              },
            ],
          });
        return { abi: s, args: o, eventName: u, id: p, request: d(p), strict: !!l, type: 'event' };
      }
    },
    28080: function (e, t, n) {
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var r = n(79e3),
        i = n(84196);
      async function a(e, { blockHash: t, blockNumber: n, blockTag: a = 'latest' } = {}) {
        let s;
        let o = void 0 !== n ? (0, i.eC)(n) : void 0;
        return (
          (s = t
            ? await e.request(
                { method: 'eth_getBlockTransactionCountByHash', params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: 'eth_getBlockTransactionCountByNumber', params: [o || a] },
                { dedupe: !!o }
              )),
          (0, r.ly)(s)
        );
      }
    },
    29207: function (e, t, n) {
      n.d(t, {
        m: function () {
          return s;
        },
      });
      var r = n(35417),
        i = n(61896),
        a = n(35442);
      async function s(e, t) {
        let {
            abi: n,
            address: s,
            args: o,
            blockHash: u,
            eventName: c,
            fromBlock: l,
            toBlock: f,
            strict: d,
          } = t,
          h = c ? (0, r.mE)({ abi: n, name: c }) : void 0,
          p = h ? void 0 : n.filter((e) => 'event' === e.type);
        return (0, i.s)(
          e,
          a.y,
          'getLogs'
        )({
          address: s,
          args: o,
          blockHash: u,
          event: h,
          events: p,
          fromBlock: l,
          toBlock: f,
          strict: d,
        });
      }
    },
    97867: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(84196);
      async function i(
        e,
        { blockCount: t, blockNumber: n, blockTag: i = 'latest', rewardPercentiles: a }
      ) {
        var s;
        let o = n ? (0, r.eC)(n) : void 0;
        return {
          baseFeePerGas: (s = await e.request(
            { method: 'eth_feeHistory', params: [(0, r.eC)(t), o || i, a] },
            { dedupe: !!o }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: s.gasUsedRatio,
          oldestBlock: BigInt(s.oldestBlock),
          reward: s.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
    },
    35442: function (e, t, n) {
      n.d(t, {
        y: function () {
          return o;
        },
      });
      var r = n(14373),
        i = n(49346),
        a = n(84196),
        s = n(39713);
      async function o(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: o,
          toBlock: u,
          event: c,
          events: l,
          args: f,
          strict: d,
        } = {}
      ) {
        let h = l ?? (c ? [c] : void 0),
          p = [];
        h &&
          ((p = [
            h.flatMap((e) => (0, r.O)({ abi: [e], eventName: e.name, args: l ? void 0 : f })),
          ]),
          c && (p = p[0]));
        let m = (
          n
            ? await e.request({
                method: 'eth_getLogs',
                params: [{ address: t, topics: p, blockHash: n }],
              })
            : await e.request({
                method: 'eth_getLogs',
                params: [
                  {
                    address: t,
                    topics: p,
                    fromBlock: 'bigint' == typeof o ? (0, a.eC)(o) : o,
                    toBlock: 'bigint' == typeof u ? (0, a.eC)(u) : u,
                  },
                ],
              })
        ).map((e) => (0, s.U)(e));
        return h ? (0, i.h)({ abi: h, args: f, logs: m, strict: d ?? !1 }) : m;
      }
    },
    80036: function (e, t, n) {
      n.d(t, {
        S: function () {
          return a;
        },
      });
      var r = n(84196),
        i = n(79e3);
      async function a(e, { address: t, blockNumber: n, blockTag: a, storageKeys: s }) {
        var o;
        let u = void 0 !== n ? (0, r.eC)(n) : void 0;
        return {
          ...(o = await e.request({
            method: 'eth_getProof',
            params: [t, s, u || (a ?? 'latest')],
          })),
          balance: o.balance ? BigInt(o.balance) : void 0,
          nonce: o.nonce ? (0, i.ly)(o.nonce) : void 0,
          storageProof: o.storageProof
            ? o.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
    },
    31968: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var r = n(84196);
      async function i(e, { address: t, blockNumber: n, blockTag: i = 'latest', slot: a }) {
        let s = void 0 !== n ? (0, r.eC)(n) : void 0;
        return await e.request({ method: 'eth_getStorageAt', params: [t, a, s || i] });
      }
    },
    37233: function (e, t, n) {
      n.d(t, {
        a: function () {
          return s;
        },
      });
      var r = n(61896),
        i = n(20168),
        a = n(11662);
      async function s(e, { hash: t, transactionReceipt: n }) {
        let [s, o] = await Promise.all([
            (0, r.s)(e, i.z, 'getBlockNumber')({}),
            t ? (0, r.s)(e, a.f, 'getTransaction')({ hash: t }) : void 0,
          ]),
          u = n?.blockNumber || o?.blockNumber;
        return u ? s - u + 1n : 0n;
      }
    },
    87250: function (e, t, n) {
      n.d(t, {
        a: function () {
          return c;
        },
      });
      var r = n(65099),
        i = n(29629),
        a = n(392),
        s = n(54494),
        o = n(61896),
        u = n(69183);
      async function c(e, t) {
        let { abi: n, address: c, args: l, dataSuffix: f, functionName: d, ...h } = t,
          p = h.account ? (0, r.T)(h.account) : e.account,
          m = (0, a.R)({ abi: n, args: l, functionName: d });
        try {
          let { data: r } = await (0, o.s)(
              e,
              u.R,
              'call'
            )({ batch: !1, data: `${m}${f ? f.replace('0x', '') : ''}`, to: c, ...h, account: p }),
            a = (0, i.k)({ abi: n, args: l, functionName: d, data: r || '0x' }),
            s = n.filter((e) => 'name' in e && e.name === t.functionName);
          return {
            result: a,
            request: {
              abi: s,
              address: c,
              args: l,
              dataSuffix: f,
              functionName: d,
              ...h,
              account: p,
            },
          };
        } catch (e) {
          throw (0, s.S)(e, {
            abi: n,
            address: c,
            args: l,
            docsPath: '/docs/contract/simulateContract',
            functionName: d,
            sender: p?.address,
          });
        }
      }
    },
    1951: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return $;
        },
      });
      var r = n(59370),
        i = n(67273),
        a = n(54484),
        s = n(43231),
        o = n(28346),
        u = n(8152),
        c = n(75963),
        l = n(84196),
        f = n(61896),
        d = n(392),
        h = n(79e3);
      let p = '0x6492649264926492649264926492649264926492649264926492649264926492';
      var m = n(32982),
        g = n(45793),
        b = n(9691),
        y = n(63171),
        v = n(2220),
        w = n(14516),
        x = n(69183);
      async function $(e, t) {
        let {
            address: n,
            factory: $,
            factoryData: A,
            hash: E,
            signature: I,
            universalSignatureVerifierAddress: k = e.chain?.contracts?.universalSignatureVerifier
              ?.address,
            ...B
          } = t,
          O = (0, c.v)(I)
            ? I
            : 'object' == typeof I && 'r' in I && 's' in I
              ? (function ({ r: e, s: t, to: n = 'hex', v: r, yParity: i }) {
                  let a = (() => {
                      if (0 === i || 1 === i) return i;
                      if (r && (27n === r || 28n === r || r >= 35n)) return r % 2n === 0n ? 1 : 0;
                      throw Error('Invalid `v` or `yParity` value');
                    })(),
                    s = `0x${new w.secp256k1.Signature((0, h.y_)(e), (0, h.y_)(t)).toCompactHex()}${0 === a ? '1b' : '1c'}`;
                  return 'hex' === n ? s : (0, v.nr)(s);
                })(I)
              : (0, l.ci)(I),
          S = await (async () =>
            $ || A
              ? (0, m.p5)(O, -32) === p
                ? O
                : (function (e) {
                    let { address: t, data: n, signature: r, to: i = 'hex' } = e,
                      a = (0, y.SM)([
                        (0, b.E)(
                          [{ type: 'address' }, { type: 'bytes' }, { type: 'bytes' }],
                          [t, n, r]
                        ),
                        p,
                      ]);
                    return 'hex' === i ? a : (0, v.nr)(a);
                  })({ address: $, data: A, signature: O })
              : O)();
        try {
          let t = k
              ? {
                  to: k,
                  data: (0, d.R)({ abi: r.$o, functionName: 'isValidSig', args: [n, E, S] }),
                  ...B,
                }
              : { data: (0, s.w)({ abi: r.$o, args: [n, E, S], bytecode: i.ST }), ...B },
            { data: a } = await (0, f.s)(e, x.R, 'call')(t);
          return (0, h.XA)(a ?? '0x0');
        } catch (e) {
          try {
            if ((0, u.E)((0, o.K)(n), await (0, g.R)({ hash: E, signature: I }))) return !0;
          } catch {}
          if (e instanceof a.cg) return !1;
          throw e;
        }
      }
    },
    64123: function (e, t, n) {
      n.d(t, {
        n: function () {
          return a;
        },
      });
      var r = n(1264),
        i = n(1951);
      async function a(
        e,
        { address: t, message: n, factory: a, factoryData: s, signature: o, ...u }
      ) {
        let c = (0, r.r)(n);
        return (0, i.Z)(e, { address: t, factory: a, factoryData: s, hash: c, signature: o, ...u });
      }
    },
    6303: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var r = n(78035),
        i = n(1951);
      async function a(e, t) {
        let {
            address: n,
            factory: a,
            factoryData: s,
            signature: o,
            message: u,
            primaryType: c,
            types: l,
            domain: f,
            ...d
          } = t,
          h = (0, r.Jv)({ message: u, primaryType: c, types: l, domain: f });
        return (0, i.Z)(e, { address: n, factory: a, factoryData: s, hash: h, signature: o, ...d });
      }
    },
    31753: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return b;
        },
      });
      var r = n(57585),
        i = n(18292),
        a = n(19209),
        s = n(14373),
        o = n(39713),
        u = n(61896),
        c = n(54658),
        l = n(45437),
        f = n(97352),
        d = n(25564),
        h = n(20168),
        p = n(29207),
        m = n(35395),
        g = n(41340);
      function b(e, t) {
        let {
          abi: n,
          address: b,
          args: y,
          batch: v = !0,
          eventName: w,
          fromBlock: x,
          onError: $,
          onLogs: A,
          poll: E,
          pollingInterval: I = e.pollingInterval,
          strict: k,
        } = t;
        return (
          void 0 !== E
            ? E
            : 'bigint' == typeof x ||
              ('webSocket' !== e.transport.type &&
                ('fallback' !== e.transport.type ||
                  'webSocket' !== e.transport.transports[0].config.type))
        )
          ? (() => {
              let t = k ?? !1,
                r = (0, f.P)(['watchContractEvent', b, y, v, e.uid, w, I, t, x]);
              return (0, c.N7)(r, { onLogs: A, onError: $ }, (r) => {
                let a, s;
                void 0 !== x && (a = x - 1n);
                let o = !1,
                  c = (0, l.$)(
                    async () => {
                      if (!o) {
                        try {
                          s = await (0, u.s)(
                            e,
                            d.A,
                            'createContractEventFilter'
                          )({ abi: n, address: b, args: y, eventName: w, strict: t, fromBlock: x });
                        } catch {}
                        o = !0;
                        return;
                      }
                      try {
                        let i;
                        if (s) i = await (0, u.s)(e, m.K, 'getFilterChanges')({ filter: s });
                        else {
                          let r = await (0, u.s)(e, h.z, 'getBlockNumber')({});
                          (i =
                            a && a < r
                              ? await (0, u.s)(
                                  e,
                                  p.m,
                                  'getContractEvents'
                                )({
                                  abi: n,
                                  address: b,
                                  args: y,
                                  eventName: w,
                                  fromBlock: a + 1n,
                                  toBlock: r,
                                  strict: t,
                                })
                              : []),
                            (a = r);
                        }
                        if (0 === i.length) return;
                        if (v) r.onLogs(i);
                        else for (let e of i) r.onLogs([e]);
                      } catch (e) {
                        s && e instanceof i.yR && (o = !1), r.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: I }
                  );
                return async () => {
                  s && (await (0, u.s)(e, g.W, 'uninstallFilter')({ filter: s })), c();
                };
              });
            })()
          : (() => {
              let t = (0, f.P)(['watchContractEvent', b, y, v, e.uid, w, I, k ?? !1]),
                i = !0,
                u = () => (i = !1);
              return (0, c.N7)(
                t,
                { onLogs: A, onError: $ },
                (t) => (
                  (async () => {
                    try {
                      let c = (() => {
                          if ('fallback' === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => 'webSocket' === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        l = w ? (0, s.O)({ abi: n, eventName: w, args: y }) : [],
                        { unsubscribe: f } = await c.subscribe({
                          params: ['logs', { address: b, topics: l }],
                          onData(e) {
                            if (!i) return;
                            let s = e.result;
                            try {
                              let { eventName: e, args: r } = (0, a.F)({
                                  abi: n,
                                  data: s.data,
                                  topics: s.topics,
                                  strict: k,
                                }),
                                i = (0, o.U)(s, { args: r, eventName: e });
                              t.onLogs([i]);
                            } catch (a) {
                              let e, n;
                              if (a instanceof r.SM || a instanceof r.Gy) {
                                if (k) return;
                                (e = a.abiItem.name),
                                  (n = a.abiItem.inputs?.some((e) => !('name' in e && e.name)));
                              }
                              let i = (0, o.U)(s, { args: n ? [] : {}, eventName: e });
                              t.onLogs([i]);
                            }
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (u = f), i || u();
                    } catch (e) {
                      $?.(e);
                    }
                  })(),
                  () => u()
                )
              );
            })();
      }
    },
    14373: function (e, t, n) {
      n.d(t, {
        O: function () {
          return h;
        },
      });
      var r = n(57585),
        i = n(88154);
      class a extends i.G {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, { name: 'FilterTypeNotSupportedError' });
        }
      }
      var s = n(2220),
        o = n(47824),
        u = n(35481),
        c = n(9691),
        l = n(60478),
        f = n(35417);
      let d = '/docs/contract/encodeEventTopics';
      function h(e) {
        let { abi: t, eventName: n, args: i } = e,
          a = t[0];
        if (n) {
          let e = (0, f.mE)({ abi: t, name: n });
          if (!e) throw new r.mv(n, { docsPath: d });
          a = e;
        }
        if ('event' !== a.type) throw new r.mv(void 0, { docsPath: d });
        let s = (0, l.t)(a),
          o = (0, u.n)(s),
          c = [];
        if (i && 'inputs' in a) {
          let e = a.inputs?.filter((e) => 'indexed' in e && e.indexed),
            t = Array.isArray(i)
              ? i
              : Object.values(i).length > 0
                ? (e?.map((e) => i[e.name]) ?? [])
                : [];
          t.length > 0 &&
            (c =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, i) => p({ param: e, value: t[n][i] }))
                  : void 0 !== t[n] && null !== t[n]
                    ? p({ param: e, value: t[n] })
                    : null
              ) ?? []);
        }
        return [o, ...c];
      }
      function p({ param: e, value: t }) {
        if ('string' === e.type || 'bytes' === e.type) return (0, o.w)((0, s.O0)(t));
        if ('tuple' === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new a(e.type);
        return (0, c.E)([e], [t]);
      }
    },
    23837: function (e, t, n) {
      n.d(t, {
        usePublicClient: function () {
          return tY;
        },
      });
      var r = n(13742),
        i = n(87428),
        a = n(33737),
        s = n(30134),
        o = n(66855),
        u = n(69183),
        c = n(65099),
        l = n(84196),
        f = n(91045),
        d = n(44542),
        h = n(40740),
        p = n(26677);
      async function m(e, t) {
        let {
            account: n = e.account,
            blockNumber: r,
            blockTag: i = 'latest',
            blobs: a,
            data: s,
            gas: o,
            gasPrice: u,
            maxFeePerBlobGas: m,
            maxFeePerGas: g,
            maxPriorityFeePerGas: b,
            to: y,
            value: v,
            ...w
          } = t,
          x = n ? (0, c.T)(n) : void 0;
        try {
          (0, p.F)(t);
          let n = r ? (0, l.eC)(r) : void 0,
            c = e.chain?.formatters?.transactionRequest?.format,
            f = (c || h.tG)({
              ...(0, d.K)(w, { format: c }),
              from: x?.address,
              blobs: a,
              data: s,
              gas: o,
              gasPrice: u,
              maxFeePerBlobGas: m,
              maxFeePerGas: g,
              maxPriorityFeePerGas: b,
              to: y,
              value: v,
            }),
            $ = await e.request({ method: 'eth_createAccessList', params: [f, n || i] });
          return { accessList: $.accessList, gasUsed: BigInt($.gasUsed) };
        } catch (n) {
          throw (0, f.P)(n, { ...t, account: x, chain: e.chain });
        }
      }
      var g = n(39751);
      async function b(e) {
        let t = (0, g.g)(e, { method: 'eth_newBlockFilter' }),
          n = await e.request({ method: 'eth_newBlockFilter' });
        return { id: n, request: t(n), type: 'block' };
      }
      var y = n(25564),
        v = n(14373);
      async function w(
        e,
        { address: t, args: n, event: r, events: i, fromBlock: a, strict: s, toBlock: o } = {}
      ) {
        let u = i ?? (r ? [r] : void 0),
          c = (0, g.g)(e, { method: 'eth_newFilter' }),
          f = [];
        u &&
          ((f = [u.flatMap((e) => (0, v.O)({ abi: [e], eventName: e.name, args: n }))]),
          r && (f = f[0]));
        let d = await e.request({
          method: 'eth_newFilter',
          params: [
            {
              address: t,
              fromBlock: 'bigint' == typeof a ? (0, l.eC)(a) : a,
              toBlock: 'bigint' == typeof o ? (0, l.eC)(o) : o,
              ...(f.length ? { topics: f } : {}),
            },
          ],
        });
        return {
          abi: u,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: a,
          id: d,
          request: c(d),
          strict: !!s,
          toBlock: o,
          type: 'event',
        };
      }
      var x = n(68802),
        $ = n(392),
        A = n(54494),
        E = n(61896),
        I = n(18452);
      async function k(e, t) {
        let { abi: n, address: r, args: i, functionName: a, dataSuffix: s, ...o } = t,
          u = (0, $.R)({ abi: n, args: i, functionName: a });
        try {
          return await (0, E.s)(
            e,
            I.Q,
            'estimateGas'
          )({ data: `${u}${s ? s.replace('0x', '') : ''}`, to: r, ...o });
        } catch (t) {
          let e = o.account ? (0, c.T)(o.account) : void 0;
          throw (0, A.S)(t, {
            abi: n,
            address: r,
            args: i,
            docsPath: '/docs/contract/estimateContractGas',
            functionName: a,
            sender: e?.address,
          });
        }
      }
      var B = n(59501),
        O = n(95729),
        S = n(66460);
      async function C(e) {
        return BigInt(await e.request({ method: 'eth_blobBaseFee' }));
      }
      var P = n(51541),
        z = n(20168),
        F = n(28080),
        N = n(80218),
        L = n(91326),
        R = n(29207),
        T = n(88154);
      class U extends T.G {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              'Ensure that:',
              `- The contract is deployed at the address "${e}".`,
              '- `eip712Domain()` function exists on the contract.',
              '- `eip712Domain()` function matches signature to ERC-5267 specification.',
            ],
            name: 'Eip712DomainNotFoundError',
          });
        }
      }
      var D = n(86705);
      async function _(e, t) {
        let { address: n, factory: r, factoryData: i } = t;
        try {
          let [t, a, s, o, u, c, l] = await (0, E.s)(
            e,
            D.L,
            'readContract'
          )({ abi: j, address: n, functionName: 'eip712Domain', factory: r, factoryData: i });
          return {
            domain: { name: a, version: s, chainId: Number(o), verifyingContract: u, salt: c },
            extensions: l,
            fields: t,
          };
        } catch (e) {
          if (
            'ContractFunctionExecutionError' === e.name &&
            'ContractFunctionZeroDataError' === e.cause.name
          )
            throw new U({ address: n });
          throw e;
        }
      }
      let j = [
        {
          inputs: [],
          name: 'eip712Domain',
          outputs: [
            { name: 'fields', type: 'bytes1' },
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
            { name: 'salt', type: 'bytes32' },
            { name: 'extensions', type: 'uint256[]' },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ];
      var M = n(97867),
        q = n(35395),
        G = n(49346),
        H = n(39713);
      async function V(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (await t.request({ method: 'eth_getFilterLogs', params: [t.id] })).map((e) =>
            (0, H.U)(e)
          );
        return t.abi ? (0, G.h)({ abi: t.abi, logs: r, strict: n }) : r;
      }
      var Z = n(15363),
        W = n(35442),
        K = n(80036),
        X = n(31968),
        J = n(11662),
        Q = n(37233),
        Y = n(9185),
        ee = n(34940),
        et = n(88052);
      class en extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof en) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            r = (t.cause instanceof en && t.cause.docsPath) || t.docsPath,
            i = `https://oxlib.sh${r ?? ''}`;
          super(
            [
              e || 'An error occurred.',
              ...(t.metaMessages ? ['', ...t.metaMessages] : []),
              ...(n || r ? ['', n ? `Details: ${n}` : void 0, r ? `See: ${i}` : void 0] : []),
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
            (this.details = n),
            (this.docs = i),
            (this.docsPath = r),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && 'object' == typeof t && 'cause' in t && t.cause
                ? e(t.cause, n)
                : n
                  ? null
                  : t;
          })(this, e);
        }
      }
      function er(e, t) {
        if (em(e) > t) throw new ev({ givenSize: em(e), maxSize: t });
      }
      function ei(e, t = {}) {
        let { dir: n, size: r = 32 } = t;
        if (0 === r) return e;
        let i = e.replace('0x', '');
        if (i.length > 2 * r)
          throw new ex({ size: Math.ceil(i.length / 2), targetSize: r, type: 'Hex' });
        return `0x${i['right' === n ? 'padEnd' : 'padStart'](2 * r, '0')}`;
      }
      let ea = new TextEncoder(),
        es = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function eo(...e) {
        return `0x${e.reduce((e, t) => e + t.replace('0x', ''), '')}`;
      }
      function eu(e, t = {}) {
        let n = `0x${Number(e)}`;
        return 'number' == typeof t.size ? (er(n, t.size), ed(n, t.size)) : n;
      }
      function ec(e, t = {}) {
        let n = '';
        for (let t = 0; t < e.length; t++) n += es[e[t]];
        let r = `0x${n}`;
        return 'number' == typeof t.size ? (er(r, t.size), eh(r, t.size)) : r;
      }
      function el(e, t = {}) {
        let n;
        let { signed: r, size: i } = t,
          a = BigInt(e);
        i
          ? (n = r ? (1n << (8n * BigInt(i) - 1n)) - 1n : 2n ** (8n * BigInt(i)) - 1n)
          : 'number' == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let s = 'bigint' == typeof n && r ? -n - 1n : 0;
        if ((n && a > n) || a < s) {
          let t = 'bigint' == typeof e ? 'n' : '';
          throw new eg({
            max: n ? `${n}${t}` : void 0,
            min: `${s}${t}`,
            signed: r,
            size: i,
            value: `${e}${t}`,
          });
        }
        let o = (r && a < 0 ? (1n << BigInt(8 * i)) + BigInt(a) : a).toString(16),
          u = `0x${o}`;
        return i ? ed(u, i) : u;
      }
      function ef(e, t = {}) {
        return ec(ea.encode(e), t);
      }
      function ed(e, t) {
        return ei(e, { dir: 'left', size: t });
      }
      function eh(e, t) {
        return ei(e, { dir: 'right', size: t });
      }
      function ep(e, t, n, r = {}) {
        let { strict: i } = r;
        !(function (e, t) {
          if ('number' == typeof t && t > 0 && t > em(e) - 1)
            throw new ew({ offset: t, position: 'start', size: em(e) });
        })(e, t);
        let a = `0x${e.replace('0x', '').slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return (
          i &&
            (function (e, t, n) {
              if ('number' == typeof t && 'number' == typeof n && em(e) !== n - t)
                throw new ew({ offset: n, position: 'end', size: em(e) });
            })(a, t, n),
          a
        );
      }
      function em(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      class eg extends en {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number \`${i}\` is not in safe${r ? ` ${8 * r}-bit` : ''}${n ? ' signed' : ' unsigned'} integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.IntegerOutOfRangeError',
            });
        }
      }
      class eb extends en {
        constructor(e) {
          super(
            `Value \`${'object' == typeof e ? JSON.stringify(e, (e, t) => ('bigint' == typeof t ? t.toString() + '#__bigint' : t), void 0) : e}\` of type \`${typeof e}\` is an invalid hex type.`,
            { metaMessages: ['Hex types must be represented as `"0x${string}"`.'] }
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.InvalidHexTypeError',
            });
        }
      }
      class ey extends en {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.InvalidHexValueError',
            });
        }
      }
      class ev extends en {
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
      class ew extends en {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${'start' === t ? 'starting' : 'ending'} at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.SliceOffsetOutOfBoundsError',
            });
        }
      }
      class ex extends en {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Hex.SizeExceedsPaddingSizeError',
            });
        }
      }
      function e$(e) {
        return {
          address: e.address,
          amount: el(e.amount),
          index: el(e.index),
          validatorIndex: el(e.validatorIndex),
        };
      }
      var eA = n(57585),
        eE = n(54484),
        eI = n(65264),
        ek = n(29629),
        eB = n(90988),
        eO = n(34029),
        eS = n(87335);
      async function eC(e, t) {
        let {
          blockNumber: n,
          blockTag: r = 'latest',
          blocks: i,
          returnFullTransactions: a,
          traceTransfers: s,
          validation: o,
        } = t;
        try {
          let t = [];
          for (let e of i) {
            var u;
            let n = e.blockOverrides
                ? ((u = e.blockOverrides),
                  {
                    ...('bigint' == typeof u.baseFeePerGas && {
                      baseFeePerGas: el(u.baseFeePerGas),
                    }),
                    ...('bigint' == typeof u.blobBaseFee && { blobBaseFee: el(u.blobBaseFee) }),
                    ...('string' == typeof u.feeRecipient && { feeRecipient: u.feeRecipient }),
                    ...('bigint' == typeof u.gasLimit && { gasLimit: el(u.gasLimit) }),
                    ...('bigint' == typeof u.number && { number: el(u.number) }),
                    ...('bigint' == typeof u.prevRandao && { prevRandao: el(u.prevRandao) }),
                    ...('bigint' == typeof u.time && { time: el(u.time) }),
                    ...(u.withdrawals && { withdrawals: u.withdrawals.map(e$) }),
                  })
                : void 0,
              r = e.calls.map((e) => {
                let t = e.account ? (0, c.T)(e.account) : void 0,
                  n = { ...e, data: e.abi ? (0, $.R)(e) : e.data, from: e.from ?? t?.address };
                return (0, p.F)(n), (0, h.tG)(n);
              }),
              i = e.stateOverrides ? (0, eS.mF)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: i });
          }
          let f = n ? (0, l.eC)(n) : void 0;
          return (
            await e.request({
              method: 'eth_simulateV1',
              params: [
                { blockStateCalls: t, returnFullTransactions: a, traceTransfers: s, validation: o },
                f || r,
              ],
            })
          ).map((e, t) => ({
            ...(0, eO.Z)(e),
            calls: e.calls.map((e, n) => {
              let { abi: r, args: a, functionName: s, to: o } = i[t].calls[n],
                u = e.error?.data ?? e.returnData,
                c = BigInt(e.gasUsed),
                l = e.logs?.map((e) => H.U(e)),
                f = '0x1' === e.status ? 'success' : 'failure',
                d =
                  r && 'success' === f && '0x' !== u
                    ? (0, ek.k)({ abi: r, data: u, functionName: s })
                    : null,
                h = (() => {
                  let t;
                  if (
                    'success' !== f &&
                    (e.error?.data === '0x'
                      ? (t = new eA.wb())
                      : e.error && (t = new eE.VQ(e.error)),
                    t)
                  )
                    return (0, A.S)(t, {
                      abi: r ?? [],
                      address: o,
                      args: a,
                      functionName: s ?? '<unknown>',
                    });
                })();
              return {
                data: u,
                gasUsed: c,
                logs: l,
                status: f,
                ...('success' === f ? { result: d } : { error: h }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, eB.k)(t, {});
          if (e instanceof eI.cj) throw t;
          throw e;
        }
      }
      var eP = n(68915),
        ez = n(86183),
        eF = n(24347),
        eN = n(11813),
        eL = n(56606),
        eR = n(2217),
        eT = n(5965);
      let eU = BigInt(0),
        eD = BigInt(1),
        e_ = BigInt(2),
        ej = BigInt(7),
        eM = BigInt(256),
        eq = BigInt(113),
        eG = [],
        eH = [],
        eV = [];
      for (let e = 0, t = eD, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          eG.push(2 * (5 * r + n)),
          eH.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = eU;
        for (let e = 0; e < 7; e++)
          (t = ((t << eD) ^ ((t >> ej) * eq)) % eM) & e_ && (i ^= eD << ((eD << BigInt(e)) - eD));
        eV.push(i);
      }
      let eZ = (0, eR.Vl)(eV, !0),
        eW = eZ[0],
        eK = eZ[1],
        eX = (e, t, n) => (n > 32 ? (0, eR.SD)(e, t, n) : (0, eR.EP)(e, t, n)),
        eJ = (e, t, n) => (n > 32 ? (0, eR.mk)(e, t, n) : (0, eR.gm)(e, t, n));
      class eQ extends eT.kb {
        constructor(e, t, n, r = !1, i = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = r),
            (this.rounds = i),
            (0, eT.k8)(n),
            !(0 < e && e < 200))
          )
            throw Error('only keccak-f1600 function is supported');
          (this.state = new Uint8Array(200)), (this.state32 = (0, eT.Jq)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, eT.Ux)(this.state32),
            (function (e, t = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    i = (t + 2) % 10,
                    a = n[i],
                    s = n[i + 1],
                    o = eX(a, s, 1) ^ n[r],
                    u = eJ(a, s, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10) (e[t + n] ^= o), (e[t + n + 1] ^= u);
                }
                let t = e[2],
                  i = e[3];
                for (let n = 0; n < 24; n++) {
                  let r = eH[n],
                    a = eX(t, i, r),
                    s = eJ(t, i, r),
                    o = eG[n];
                  (t = e[o]), (i = e[o + 1]), (e[o] = a), (e[o + 1] = s);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) n[r] = e[t + r];
                  for (let r = 0; r < 10; r++) e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (e[0] ^= eW[r]), (e[1] ^= eK[r]);
              }
              (0, eT.ru)(n);
            })(this.state32, this.rounds),
            (0, eT.Ux)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, eT.$h)(this), (e = (0, eT.O0)(e)), (0, eT.gk)(e);
          let { blockLen: t, state: n } = this,
            r = e.length;
          for (let i = 0; i < r; ) {
            let a = Math.min(t - this.pos, r - i);
            for (let t = 0; t < a; t++) n[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, eT.$h)(this, !1), (0, eT.gk)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let a = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + a), r), (this.posOut += a), (r += a);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return (0, eT.k8)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, eT.eB)(e, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, eT.ru)(this.state);
        }
        _cloneInto(e) {
          let { blockLen: t, suffix: n, outputLen: r, rounds: i, enableXOF: a } = this;
          return (
            e || (e = new eQ(t, n, r, a, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = a),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let eY = (0, eT.V1)(() => new eQ(136, 1, 32)),
        e0 = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function e1(e) {
        return e >= e0.zero && e <= e0.nine
          ? e - e0.zero
          : e >= e0.A && e <= e0.F
            ? e - (e0.A - 10)
            : e >= e0.a && e <= e0.f
              ? e - (e0.a - 10)
              : void 0;
      }
      let e2 = new TextEncoder();
      class e6 extends en {
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
      class e5 extends en {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'Bytes.SizeExceedsPaddingSizeError',
            });
        }
      }
      function e3(e, t = {}) {
        let { as: n = 'string' == typeof e ? 'Hex' : 'Bytes' } = t,
          r = eY(
            e instanceof Uint8Array
              ? e
              : 'string' == typeof e
                ? (function (e, t = {}) {
                    let { size: n } = t,
                      r = e;
                    n && (er(e, n), (r = eh(e, n)));
                    let i = r.slice(2);
                    i.length % 2 && (i = `0${i}`);
                    let a = i.length / 2,
                      s = new Uint8Array(a);
                    for (let e = 0, t = 0; e < a; e++) {
                      let n = e1(i.charCodeAt(t++)),
                        r = e1(i.charCodeAt(t++));
                      if (void 0 === n || void 0 === r)
                        throw new en(`Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`);
                      s[e] = 16 * n + r;
                    }
                    return s;
                  })(e)
                : e instanceof Uint8Array
                  ? e
                  : new Uint8Array(e)
          );
        return 'Bytes' === n ? r : ec(r);
      }
      class e8 extends Map {
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
          let t = super.get(e);
          return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let e4 = { checksum: new e8(8192) }.checksum,
        e9 = /^0x[a-fA-F0-9]{40}$/;
      function e7(e, t = {}) {
        let { strict: n = !0 } = t;
        if (!e9.test(e)) throw new tt({ address: e, cause: new tn() });
        if (n) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (e4.has(e)) return e4.get(e);
              e7(e, { strict: !1 });
              let t = e.substring(2).toLowerCase(),
                n = e3(
                  (function (e, t = {}) {
                    let { size: n } = t,
                      r = e2.encode(e);
                    return 'number' == typeof n
                      ? (!(function (e, t) {
                          if (e.length > t) throw new e6({ givenSize: e.length, maxSize: t });
                        })(r, n),
                        (function (e, t = {}) {
                          let { dir: n, size: r = 32 } = t;
                          if (0 === r) return e;
                          if (e.length > r)
                            throw new e5({ size: e.length, targetSize: r, type: 'Bytes' });
                          let i = new Uint8Array(r);
                          for (let t = 0; t < r; t++) {
                            let a = 'right' === n;
                            i[a ? t : r - t - 1] = e[a ? t : e.length - t - 1];
                          }
                          return i;
                        })(r, { dir: 'right', size: n }))
                      : r;
                  })(t),
                  { as: 'Bytes' }
                ),
                r = t.split('');
              for (let e = 0; e < 40; e += 2)
                n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
                  (15 & n[e >> 1]) >= 8 && r[e + 1] && (r[e + 1] = r[e + 1].toUpperCase());
              let i = `0x${r.join('')}`;
              return e4.set(e, i), i;
            })(e) !== e
          )
            throw new tt({ address: e, cause: new tr() });
        }
      }
      function te(e, t = {}) {
        let { strict: n = !0 } = t ?? {};
        try {
          return e7(e, { strict: n }), !0;
        } catch {
          return !1;
        }
      }
      class tt extends en {
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
      class tn extends en {
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
      class tr extends en {
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
      function ti(e) {
        let t = !0,
          n = '',
          r = 0,
          i = '',
          a = !1;
        for (let s = 0; s < e.length; s++) {
          let o = e[s];
          if ((['(', ')', ','].includes(o) && (t = !0), '(' === o && r++, ')' === o && r--, t)) {
            if (0 === r) {
              if (' ' === o && ['event', 'function', 'error', ''].includes(i)) i = '';
              else if (((i += o), ')' === o)) {
                a = !0;
                break;
              }
              continue;
            }
            if (' ' === o) {
              ',' !== e[s - 1] && ',' !== n && ',(' !== n && ((n = ''), (t = !1));
              continue;
            }
            (i += o), (n += o);
          }
        }
        if (!a) throw new en('Unable to normalize signature.');
        return i;
      }
      function ta(e, t = {}) {
        let { prepare: n = !0 } = t,
          r =
            Array.isArray(e) || 'string' == typeof e
              ? (function (e) {
                  let t;
                  if ('string' == typeof e) t = (0, eN.cK)(e);
                  else {
                    let n = (0, eF.D)(e),
                      r = e.length;
                    for (let i = 0; i < r; i++) {
                      let r = e[i];
                      if (!(0, ez.N0)(r)) {
                        t = (0, eN.cK)(r, n);
                        break;
                      }
                    }
                  }
                  if (!t) throw new eP.a_({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...r, ...(n ? { hash: to(r) } : {}) };
      }
      function ts(e) {
        return ep(to(e), 0, 4);
      }
      function to(e) {
        return 'string' != typeof e && 'hash' in e && e.hash
          ? e.hash
          : e3(ef(ti('string' == typeof e ? e : eL.t(e))));
      }
      class tu extends en {
        constructor(e, t) {
          super('Found ambiguous types in overloaded ABI Items.', {
            metaMessages: [
              `\`${e.type}\` in \`${ti(eL.t(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${ti(eL.t(t.abiItem))}\``,
              '',
              'These types encode differently and cannot be distinguished at runtime.',
              'Remove one of the ambiguous items in the ABI.',
            ],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiItem.AmbiguityError',
            });
        }
      }
      class tc extends en {
        constructor({ name: e, data: t, type: n = 'item' }) {
          super(`ABI ${n}${e ? ` with name "${e}"` : t ? ` with data "${t}"` : ''} not found.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiItem.NotFoundError',
            });
        }
      }
      n(24056);
      let tl = /^(.*)\[([0-9]*)\]$/,
        tf = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        td =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function th(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += em(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let a = 0; a < e.length; a++) {
          let { dynamic: s, encoded: o } = e[a];
          s ? (n.push(el(t + i, { size: 32 })), r.push(o), (i += em(o))) : n.push(o);
        }
        return eo(...n, ...r);
      }
      function tp(e, t, n) {
        let { checksumAddress: r = !1 } = n ?? {};
        if (e.length !== t.length)
          throw new ty({ expectedLength: e.length, givenLength: t.length });
        let i = th(
          (function ({ checksumAddress: e, parameters: t, values: n }) {
            let r = [];
            for (let i = 0; i < t.length; i++)
              r.push(
                (function e({ checksumAddress: t = !1, parameter: n, value: r }) {
                  let i = (function (e) {
                    let t = e.match(/^(.*)\[(\d+)?\]$/);
                    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
                  })(n.type);
                  if (i) {
                    let [a, s] = i;
                    return (function (t, n) {
                      let { checksumAddress: r, length: i, parameter: a } = n,
                        s = null === i;
                      if (!Array.isArray(t)) throw new tv(t);
                      if (!s && t.length !== i)
                        throw new tg({
                          expectedLength: i,
                          givenLength: t.length,
                          type: `${a.type}[${i}]`,
                        });
                      let o = !1,
                        u = [];
                      for (let n = 0; n < t.length; n++) {
                        let i = e({ checksumAddress: r, parameter: a, value: t[n] });
                        i.dynamic && (o = !0), u.push(i);
                      }
                      if (s || o) {
                        let e = th(u);
                        if (s) {
                          let t = el(u.length, { size: 32 });
                          return { dynamic: !0, encoded: u.length > 0 ? eo(t, e) : t };
                        }
                        if (o) return { dynamic: !0, encoded: e };
                      }
                      return { dynamic: !1, encoded: eo(...u.map(({ encoded: e }) => e)) };
                    })(r, { checksumAddress: t, length: a, parameter: { ...n, type: s } });
                  }
                  if ('tuple' === n.type)
                    return (function (t, n) {
                      let { checksumAddress: r, parameter: i } = n,
                        a = !1,
                        s = [];
                      for (let n = 0; n < i.components.length; n++) {
                        let o = i.components[n],
                          u = Array.isArray(t) ? n : o.name,
                          c = e({ checksumAddress: r, parameter: o, value: t[u] });
                        s.push(c), c.dynamic && (a = !0);
                      }
                      return {
                        dynamic: a,
                        encoded: a ? th(s) : eo(...s.map(({ encoded: e }) => e)),
                      };
                    })(r, { checksumAddress: t, parameter: n });
                  if ('address' === n.type)
                    return (function (e, t) {
                      let { checksum: n = !1 } = t;
                      return e7(e, { strict: n }), { dynamic: !1, encoded: ed(e.toLowerCase()) };
                    })(r, { checksum: t });
                  if ('bool' === n.type)
                    return (function (e) {
                      if ('boolean' != typeof e)
                        throw new en(
                          `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: ed(eu(e)) };
                    })(r);
                  if (n.type.startsWith('uint') || n.type.startsWith('int')) {
                    let e = n.type.startsWith('int'),
                      [, , t = '256'] = td.exec(n.type) ?? [];
                    return (function (e, { signed: t, size: n }) {
                      if ('number' == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          i = t ? -r - 1n : 0n;
                        if (e > r || e < i)
                          throw new eg({
                            max: r.toString(),
                            min: i.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return { dynamic: !1, encoded: el(e, { size: 32, signed: t }) };
                    })(r, { signed: e, size: Number(t) });
                  }
                  if (n.type.startsWith('bytes'))
                    return (function (e, { type: t }) {
                      let [, n] = t.split('bytes'),
                        r = em(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 && (t = eh(t, 32 * Math.ceil((e.length - 2) / 2 / 32))),
                          { dynamic: !0, encoded: eo(ed(el(r, { size: 32 })), t) }
                        );
                      }
                      if (r !== Number.parseInt(n))
                        throw new tb({ expectedSize: Number.parseInt(n), value: e });
                      return { dynamic: !1, encoded: eh(e) };
                    })(r, { type: n.type });
                  if ('string' === n.type)
                    return (function (e) {
                      let t = ef(e),
                        n = Math.ceil(em(t) / 32),
                        r = [];
                      for (let e = 0; e < n; e++) r.push(eh(ep(t, 32 * e, (e + 1) * 32)));
                      return { dynamic: !0, encoded: eo(eh(el(em(t), { size: 32 })), ...r) };
                    })(r);
                  throw new tw(n.type);
                })({ checksumAddress: e, parameter: t[i], value: n[i] })
              );
            return r;
          })({ checksumAddress: r, parameters: e, values: t })
        );
        return 0 === i.length ? '0x' : i;
      }
      function tm(e, t) {
        if (e.length !== t.length)
          throw new ty({ expectedLength: e.length, givenLength: t.length });
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let i = e[r],
            a = t[r];
          n.push(tm.encode(i, a));
        }
        return eo(...n);
      }
      (tm || (tm = {})).encode = function e(t, n, r = !1) {
        if ('address' === t) return e7(n), ed(n.toLowerCase(), r ? 32 : 0);
        if ('string' === t) return ef(n);
        if ('bytes' === t) return n;
        if ('bool' === t) return ed(eu(n), r ? 32 : 1);
        let i = t.match(td);
        if (i) {
          let [e, t, a = '256'] = i,
            s = Number.parseInt(a) / 8;
          return el(n, { size: r ? 32 : s, signed: 'int' === t });
        }
        let a = t.match(tf);
        if (a) {
          let [e, t] = a;
          if (Number.parseInt(t) !== (n.length - 2) / 2)
            throw new tb({ expectedSize: Number.parseInt(t), value: n });
          return eh(n, r ? 32 : 0);
        }
        let s = t.match(tl);
        if (s && Array.isArray(n)) {
          let [t, r] = s,
            i = [];
          for (let t = 0; t < n.length; t++) i.push(e(r, n[t], !0));
          return 0 === i.length ? '0x' : eo(...i);
        }
        throw new tw(t);
      };
      class tg extends en {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(`Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.ArrayLengthMismatchError',
            });
        }
      }
      class tb extends en {
        constructor({ expectedSize: e, value: t }) {
          super(`Size of bytes "${t}" (bytes${em(t)}) does not match expected size (bytes${e}).`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.BytesSizeMismatchError',
            });
        }
      }
      class ty extends en {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.LengthMismatchError',
            });
        }
      }
      class tv extends en {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiParameters.InvalidArrayError',
            });
        }
      }
      class tw extends en {
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
      function tx(e, t = {}) {
        return ta(e, t);
      }
      var t$ = n(45842),
        tA = n(67273),
        tE = n(79e3);
      async function tI(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            calls: i,
            stateOverrides: a,
            traceAssetChanges: s,
            traceTransfers: o,
            validation: u,
          } = t,
          l = t.account ? (0, c.T)(t.account) : void 0;
        if (s && !l) throw new T.G('`account` is required when `traceAssetChanges` is true');
        let f = l
            ? (function (e, t) {
                let { bytecode: n, args: r } = t;
                return eo(n, e.inputs?.length && r?.length ? tp(e.inputs, r) : '0x');
              })(ta('constructor(bytes, bytes)'), {
                bytecode: tA.NO,
                args: [
                  '0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033',
                  (function (e, ...t) {
                    let { overloads: n } = e,
                      r = n
                        ? (function (e, t, n) {
                            let r = (function (e, t, n) {
                              let r;
                              let { args: i = [], prepare: a = !0 } = n ?? {},
                                s = (function (e, t = {}) {
                                  let { strict: n = !1 } = t;
                                  try {
                                    return (
                                      !(function (e, t = {}) {
                                        let { strict: n = !1 } = t;
                                        if (!e || 'string' != typeof e) throw new eb(e);
                                        if (
                                          (n && !/^0x[0-9a-fA-F]*$/.test(e)) ||
                                          !e.startsWith('0x')
                                        )
                                          throw new ey(e);
                                      })(e, { strict: n }),
                                      !0
                                    );
                                  } catch {
                                    return !1;
                                  }
                                })(t, { strict: !1 }),
                                o = e.filter((e) =>
                                  s
                                    ? 'function' === e.type || 'error' === e.type
                                      ? ts(e) === ep(t, 0, 4)
                                      : 'event' === e.type && to(e) === t
                                    : 'name' in e && e.name === t
                                );
                              if (0 === o.length) throw new tc({ name: t });
                              if (1 === o.length)
                                return { ...o[0], ...(a ? { hash: to(o[0]) } : {}) };
                              for (let e of o)
                                if ('inputs' in e) {
                                  if (!i || 0 === i.length) {
                                    if (!e.inputs || 0 === e.inputs.length)
                                      return { ...e, ...(a ? { hash: to(e) } : {}) };
                                    continue;
                                  }
                                  if (
                                    e.inputs &&
                                    0 !== e.inputs.length &&
                                    e.inputs.length === i.length &&
                                    i.every((t, n) => {
                                      let r = 'inputs' in e && e.inputs[n];
                                      return (
                                        !!r &&
                                        (function e(t, n) {
                                          let r = typeof t,
                                            i = n.type;
                                          switch (i) {
                                            case 'address':
                                              return te(t, { strict: !1 });
                                            case 'bool':
                                              return 'boolean' === r;
                                            case 'function':
                                            case 'string':
                                              return 'string' === r;
                                            default:
                                              if ('tuple' === i && 'components' in n)
                                                return Object.values(n.components).every((n, r) =>
                                                  e(Object.values(t)[r], n)
                                                );
                                              if (
                                                /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                                  i
                                                )
                                              )
                                                return 'number' === r || 'bigint' === r;
                                              if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                                                return 'string' === r || t instanceof Uint8Array;
                                              if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                                                return (
                                                  Array.isArray(t) &&
                                                  t.every((t) =>
                                                    e(t, {
                                                      ...n,
                                                      type: i.replace(/(\[[0-9]{0,}\])$/, ''),
                                                    })
                                                  )
                                                );
                                              return !1;
                                          }
                                        })(t, r)
                                      );
                                    })
                                  ) {
                                    if (r && 'inputs' in r && r.inputs) {
                                      let t = (function e(t, n, r) {
                                        for (let i in t) {
                                          let a = t[i],
                                            s = n[i];
                                          if (
                                            'tuple' === a.type &&
                                            'tuple' === s.type &&
                                            'components' in a &&
                                            'components' in s
                                          )
                                            return e(a.components, s.components, r[i]);
                                          let o = [a.type, s.type];
                                          if (
                                            (o.includes('address') && o.includes('bytes20')) ||
                                            (((o.includes('address') && o.includes('string')) ||
                                              (o.includes('address') && o.includes('bytes'))) &&
                                              te(r[i], { strict: !1 }))
                                          )
                                            return o;
                                        }
                                      })(e.inputs, r.inputs, i);
                                      if (t)
                                        throw new tu(
                                          { abiItem: e, type: t[0] },
                                          { abiItem: r, type: t[1] }
                                        );
                                    }
                                    r = e;
                                  }
                                }
                              let u = (() => {
                                if (r) return r;
                                let [e, ...t] = o;
                                return { ...e, overloads: t };
                              })();
                              if (!u) throw new tc({ name: t });
                              return { ...u, ...(a ? { hash: to(u) } : {}) };
                            })(e, t, n);
                            if ('function' !== r.type) throw new tc({ name: t, type: 'function' });
                            return r;
                          })([e, ...n], e.name, { args: t[0] })
                        : e,
                      i = ts(r),
                      a = t.length > 0 ? tp(r.inputs, t[0]) : void 0;
                    return a ? eo(i, a) : i;
                  })(tx('function getBalance(address)'), [l.address]),
                ],
              })
            : void 0,
          d = s
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: n } = await m(e, {
                    account: l.address,
                    ...t,
                    data: t.abi ? (0, $.R)(t) : t.data,
                  });
                  return n.map(({ address: e, storageKeys: t }) => (t.length > 0 ? e : null));
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          h = a?.map((e) => (e.address === l?.address ? { ...e, nonce: 0 } : e)),
          p = await eC(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [
              ...(s
                ? [
                    { calls: [{ data: f }], stateOverrides: a },
                    {
                      calls: d.map((e, t) => ({
                        abi: [tx('function balanceOf(address) returns (uint256)')],
                        functionName: 'balanceOf',
                        args: [l.address],
                        to: e,
                        from: t$.DR,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t$.DR, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...i, {}].map((e, t) => ({ ...e, from: l?.address, nonce: t })),
                stateOverrides: h,
              },
              ...(s
                ? [
                    { calls: [{ data: f }] },
                    {
                      calls: d.map((e, t) => ({
                        abi: [tx('function balanceOf(address) returns (uint256)')],
                        functionName: 'balanceOf',
                        args: [l.address],
                        to: e,
                        from: t$.DR,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t$.DR, nonce: 0 }],
                    },
                    {
                      calls: d.map((e, t) => ({
                        to: e,
                        abi: [tx('function decimals() returns (uint256)')],
                        functionName: 'decimals',
                        from: t$.DR,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t$.DR, nonce: 0 }],
                    },
                    {
                      calls: d.map((e, t) => ({
                        to: e,
                        abi: [tx('function tokenURI(uint256) returns (string)')],
                        functionName: 'tokenURI',
                        args: [0n],
                        from: t$.DR,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t$.DR, nonce: 0 }],
                    },
                    {
                      calls: d.map((e, t) => ({
                        to: e,
                        abi: [tx('function symbol() returns (string)')],
                        functionName: 'symbol',
                        from: t$.DR,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: t$.DR, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: o,
            validation: u,
          }),
          g = s ? p[2] : p[0],
          [b, y, , v, w, x, A, E] = s ? p : [],
          { calls: I, ...k } = g,
          B = I.slice(0, -1) ?? [],
          O = [...(b?.calls ?? []), ...(y?.calls ?? [])].map((e) =>
            'success' === e.status ? (0, tE.y_)(e.data) : null
          ),
          S = [...(v?.calls ?? []), ...(w?.calls ?? [])].map((e) =>
            'success' === e.status ? (0, tE.y_)(e.data) : null
          ),
          C = (x?.calls ?? []).map((e) => ('success' === e.status ? e.result : null)),
          P = (E?.calls ?? []).map((e) => ('success' === e.status ? e.result : null)),
          z = (A?.calls ?? []).map((e) => ('success' === e.status ? e.result : null)),
          F = [];
        for (let [e, t] of S.entries()) {
          let n = O[e];
          if ('bigint' != typeof t || 'bigint' != typeof n) continue;
          let r = C[e - 1],
            i = P[e - 1],
            a = z[e - 1],
            s =
              0 === e
                ? { address: t$.j7, decimals: 18, symbol: 'ETH' }
                : {
                    address: d[e - 1],
                    decimals: a || r ? Number(r ?? 1) : void 0,
                    symbol: i ?? void 0,
                  };
          F.some((e) => e.token.address === s.address) ||
            F.push({ token: s, value: { pre: n, post: t, diff: t - n } });
        }
        return { assetChanges: F, block: k, results: B };
      }
      var tk = n(87250),
        tB = n(41340),
        tO = n(64123),
        tS = n(6303),
        tC = n(5712),
        tP = n(7566),
        tz = n(81767),
        tF = n(31753),
        tN = n(54658),
        tL = n(45437),
        tR = n(97352),
        tT = n(18292),
        tU = n(19209),
        tD = n(15921),
        t_ = n(1264);
      let tj =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        tM =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var tq = n(8152),
        tG = n(1951);
      async function tH(e, t) {
        let {
            address: n,
            domain: r,
            message: i,
            nonce: a,
            scheme: s,
            signature: o,
            time: u = new Date(),
            ...c
          } = t,
          l = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(tj)?.groups ?? {},
              {
                chainId: i,
                expirationTime: a,
                issuedAt: s,
                notBefore: o,
                requestId: u,
                ...c
              } = e.match(tM)?.groups ?? {},
              l = e.split('Resources:')[1]?.split('\n- ').slice(1);
            return {
              ...r,
              ...c,
              ...(i ? { chainId: Number(i) } : {}),
              ...(a ? { expirationTime: new Date(a) } : {}),
              ...(s ? { issuedAt: new Date(s) } : {}),
              ...(o ? { notBefore: new Date(o) } : {}),
              ...(u ? { requestId: u } : {}),
              ...(l ? { resources: l } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(i);
        if (
          !l.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: i,
              scheme: a,
              time: s = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (i && r.nonce !== i) ||
              (a && r.scheme !== a) ||
              (r.expirationTime && s >= r.expirationTime) ||
              (r.notBefore && s < r.notBefore)
            )
              return !1;
            try {
              if (!r.address || (t && !(0, tq.E)(r.address, t))) return !1;
            } catch {
              return !1;
            }
            return !0;
          })({ address: n, domain: r, message: l, nonce: a, scheme: s, time: u })
        )
          return !1;
        let f = (0, t_.r)(i);
        return (0, tG.Z)(e, { address: l.address, hash: f, signature: o, ...c });
      }
      var tV = n(90936),
        tZ = n(53125);
      function tW(e) {
        return {
          call: (t) => (0, u.R)(e, t),
          createAccessList: (t) => m(e, t),
          createBlockFilter: () => b(e),
          createContractEventFilter: (t) => (0, y.A)(e, t),
          createEventFilter: (t) => w(e, t),
          createPendingTransactionFilter: () => (0, x.W)(e),
          estimateContractGas: (t) => k(e, t),
          estimateGas: (t) => (0, I.Q)(e, t),
          getBalance: (t) => (0, S.s)(e, t),
          getBlobBaseFee: () => C(e),
          getBlock: (t) => (0, P.Q)(e, t),
          getBlockNumber: (t) => (0, z.z)(e, t),
          getBlockTransactionCount: (t) => (0, F.c)(e, t),
          getBytecode: (t) => (0, L.C)(e, t),
          getChainId: () => (0, N.L)(e),
          getCode: (t) => (0, L.C)(e, t),
          getContractEvents: (t) => (0, R.m)(e, t),
          getEip712Domain: (t) => _(e, t),
          getEnsAddress: (t) => (0, r.O)(e, t),
          getEnsAvatar: (t) => (0, i.r)(e, t),
          getEnsName: (t) => (0, a.w)(e, t),
          getEnsResolver: (t) => (0, s.S)(e, t),
          getEnsText: (t) => (0, o.g)(e, t),
          getFeeHistory: (t) => (0, M.Z)(e, t),
          estimateFeesPerGas: (t) => (0, B.X)(e, t),
          getFilterChanges: (t) => (0, q.K)(e, t),
          getFilterLogs: (t) => V(e, t),
          getGasPrice: () => (0, Z.o)(e),
          getLogs: (t) => (0, W.y)(e, t),
          getProof: (t) => (0, K.S)(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, O._)(e, t),
          getStorageAt: (t) => (0, X.Y)(e, t),
          getTransaction: (t) => (0, J.f)(e, t),
          getTransactionConfirmations: (t) => (0, Q.a)(e, t),
          getTransactionCount: (t) => (0, Y.K)(e, t),
          getTransactionReceipt: (t) => (0, ee.a)(e, t),
          multicall: (t) => (0, et.A)(e, t),
          prepareTransactionRequest: (t) => (0, tV.ZE)(e, t),
          readContract: (t) => (0, D.L)(e, t),
          sendRawTransaction: (t) => (0, tZ.p)(e, t),
          simulate: (t) => eC(e, t),
          simulateBlocks: (t) => eC(e, t),
          simulateCalls: (t) => tI(e, t),
          simulateContract: (t) => (0, tk.a)(e, t),
          verifyMessage: (t) => (0, tO.n)(e, t),
          verifySiweMessage: (t) => tH(e, t),
          verifyTypedData: (t) => (0, tS.B)(e, t),
          uninstallFilter: (t) => (0, tB.W)(e, t),
          waitForTransactionReceipt: (t) => (0, tC.e)(e, t),
          watchBlocks: (t) => (0, tz.p)(e, t),
          watchBlockNumber: (t) => (0, tP.q)(e, t),
          watchContractEvent: (t) => (0, tF.Y)(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: i,
                events: a,
                fromBlock: s,
                onError: o,
                onLogs: u,
                poll: c,
                pollingInterval: l = e.pollingInterval,
                strict: f,
              }
            ) {
              let d, h;
              let p =
                  void 0 !== c
                    ? c
                    : 'bigint' == typeof s ||
                      ('webSocket' !== e.transport.type &&
                        ('fallback' !== e.transport.type ||
                          'webSocket' !== e.transport.transports[0].config.type)),
                m = f ?? !1;
              return p
                ? (() => {
                    let c = (0, tR.P)(['watchEvent', t, n, r, e.uid, i, l, s]);
                    return (0, tN.N7)(c, { onLogs: u, onError: o }, (o) => {
                      let u, c;
                      void 0 !== s && (u = s - 1n);
                      let f = !1,
                        d = (0, tL.$)(
                          async () => {
                            if (!f) {
                              try {
                                c = await (0, E.s)(
                                  e,
                                  w,
                                  'createEventFilter'
                                )({
                                  address: t,
                                  args: n,
                                  event: i,
                                  events: a,
                                  strict: m,
                                  fromBlock: s,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let s;
                              if (c) s = await (0, E.s)(e, q.K, 'getFilterChanges')({ filter: c });
                              else {
                                let r = await (0, E.s)(e, z.z, 'getBlockNumber')({});
                                (s =
                                  u && u !== r
                                    ? await (0, E.s)(
                                        e,
                                        W.y,
                                        'getLogs'
                                      )({
                                        address: t,
                                        args: n,
                                        event: i,
                                        events: a,
                                        fromBlock: u + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (u = r);
                              }
                              if (0 === s.length) return;
                              if (r) o.onLogs(s);
                              else for (let e of s) o.onLogs([e]);
                            } catch (e) {
                              c && e instanceof tT.yR && (f = !1), o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: l }
                        );
                      return async () => {
                        c && (await (0, E.s)(e, tB.W, 'uninstallFilter')({ filter: c })), d();
                      };
                    });
                  })()
                : ((d = !0),
                  (h = () => (d = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ('fallback' === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => 'webSocket' === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        s = a ?? (i ? [i] : void 0),
                        c = [];
                      s &&
                        ((c = [
                          s.flatMap((e) => (0, v.O)({ abi: [e], eventName: e.name, args: n })),
                        ]),
                        i && (c = c[0]));
                      let { unsubscribe: l } = await r.subscribe({
                        params: ['logs', { address: t, topics: c }],
                        onData(e) {
                          if (!d) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = (0, tU.F)({
                                abi: s ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              r = (0, H.U)(t, { args: n, eventName: e });
                            u([r]);
                          } catch (i) {
                            let e, n;
                            if (i instanceof eA.SM || i instanceof eA.Gy) {
                              if (f) return;
                              (e = i.abiItem.name),
                                (n = i.abiItem.inputs?.some((e) => !('name' in e && e.name)));
                            }
                            let r = (0, H.U)(t, { args: n ? [] : {}, eventName: e });
                            u([r]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (h = l), d || h();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchPendingTransactions: (t) => (0, tD.O)(e, t),
        };
      }
      var tK = n(67607);
      function tX(e, t = {}) {
        let n = (0, tK.s)(e, t);
        return n?.extend(tW);
      }
      var tJ = n(96261),
        tQ = n(81082);
      function tY() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, tQ.useConfig)(e);
        return (0, tJ.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => tX(e), n, { equalityFn: (e, t) => e?.uid === t?.uid });
            })(t, { onChange: e }),
          () => tX(t, e),
          () => tX(t, e),
          (e) => e,
          (e, t) => (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    74332: function (e, t, n) {
      n.d(t, {
        useSignMessage: function () {
          return s;
        },
      });
      var r = n(97844),
        i = n(83847),
        a = n(81082);
      function s() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          s =
            ((e = (0, a.useConfig)(t)),
            { mutationFn: (t) => (0, i.l)(e, t), mutationKey: ['signMessage'] }),
          { mutate: o, mutateAsync: u, ...c } = (0, r.D)({ ...n, ...s });
        return { ...c, signMessage: o, signMessageAsync: u };
      }
    },
  },
]);
