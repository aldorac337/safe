'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1871],
  {
    70935: function (e, t, r) {
      r.d(t, {
        y: function () {
          return i;
        },
      });
      var n = r(11238),
        a = r(60977);
      function i(e) {
        let t = (0, a.w)(`0x${e.substring(4)}`).substring(26);
        return (0, n.x)(`0x${t}`);
      }
    },
    22870: function (e, t, r) {
      r.d(t, {
        C: function () {
          return u;
        },
        X: function () {
          return c;
        },
      });
      var n = r(16707),
        a = r(72427),
        i = r(93153),
        s = r(97046),
        o = r(57843);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let { block: r, chain: c = e.chain, request: u, type: l = 'eip1559' } = t || {},
          d = await (async () =>
            'function' == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: r, client: e, request: u })
              : (c?.fees?.baseFeeMultiplier ?? 1.2))();
        if (d < 1) throw new n.Fz();
        let f = 10 ** (d.toString().split('.')[1]?.length ?? 0),
          h = (e) => (e * BigInt(Math.ceil(d * f))) / BigInt(f),
          m = r || (await (0, a.s)(e, s.Q, 'getBlock')({}));
        if ('function' == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: r,
            client: e,
            multiply: h,
            request: u,
            type: l,
          });
          if (null !== t) return t;
        }
        if ('eip1559' === l) {
          if ('bigint' != typeof m.baseFeePerGas) throw new n.e5();
          let t =
              'bigint' == typeof u?.maxPriorityFeePerGas
                ? u.maxPriorityFeePerGas
                : await (0, i.h)(e, { block: m, chain: c, request: u }),
            r = h(m.baseFeePerGas);
          return { maxFeePerGas: u?.maxFeePerGas ?? r + t, maxPriorityFeePerGas: t };
        }
        return { gasPrice: u?.gasPrice ?? h(await (0, a.s)(e, o.o, 'getGasPrice')({})) };
      }
    },
    65870: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return b;
        },
      });
      var n = r(39858),
        a = r(77854),
        i = r(15825),
        s = r(79150),
        o = r(11578),
        c = r(18838),
        u = r(59134);
      class l extends a.G {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: n,
            data: a,
            gas: i,
            gasPrice: s,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: m,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, ' '] : []),
              'Estimate Gas Arguments:',
              (0, u.xr)({
                from: t?.address,
                to: h,
                value: void 0 !== m && `${(0, o.d)(m)} ${n?.nativeCurrency?.symbol || 'ETH'}`,
                data: a,
                gas: i,
                gasPrice: void 0 !== s && `${(0, c.o)(s)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, c.o)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, c.o)(d)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
            name: 'EstimateGasExecutionError',
          }),
            Object.defineProperty(this, 'cause', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var d = r(42850),
        f = r(18626),
        h = r(40639),
        m = r(14999),
        y = r(64924),
        w = r(64233),
        g = r(6257),
        p = r(76827);
      async function b(e, t) {
        let { account: r = e.account } = t,
          o = r ? (0, n.T)(r) : void 0;
        try {
          let {
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              blockNumber: d,
              blockTag: f,
              data: b,
              gas: P,
              gasPrice: v,
              maxFeePerBlobGas: F,
              maxFeePerGas: G,
              maxPriorityFeePerGas: x,
              nonce: k,
              value: B,
              stateOverride: C,
              ...E
            } = await (0, g.ZE)(e, {
              ...t,
              parameters: o?.type === 'local' ? void 0 : ['blobVersionedHashes'],
            }),
            _ = (d ? (0, s.eC)(d) : void 0) || f,
            I = (0, y.mF)(C),
            q = await (async () =>
              E.to
                ? E.to
                : n && n.length > 0
                  ? await (0, i.z)({ authorization: n[0] }).catch(() => {
                      throw new a.G('`to` is required. Could not infer from `authorizationList`');
                    })
                  : void 0)();
          (0, w.F)(t);
          let $ = e.chain?.formatters?.transactionRequest?.format,
            M = ($ || m.tG)({
              ...(0, h.K)(E, { format: $ }),
              from: o?.address,
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              data: b,
              gas: P,
              gasPrice: v,
              maxFeePerBlobGas: F,
              maxFeePerGas: G,
              maxPriorityFeePerGas: x,
              nonce: k,
              to: q,
              value: B,
            });
          function c(t) {
            let { block: r, request: n, rpcStateOverride: a } = t;
            return e.request({
              method: 'eth_estimateGas',
              params: a ? [n, r ?? 'latest', a] : r ? [n, r] : [n],
            });
          }
          let T = BigInt(await c({ block: _, request: M, rpcStateOverride: I }));
          if (n) {
            let t = await (0, p.s)(e, { address: M.from }),
              r = await Promise.all(
                n.map(async (e) => {
                  let { contractAddress: r } = e,
                    n = await c({
                      block: _,
                      request: {
                        authorizationList: void 0,
                        data: b,
                        from: o?.address,
                        to: r,
                        value: (0, s.eC)(t),
                      },
                      rpcStateOverride: I,
                    }).catch(() => 100000n);
                  return 2n * BigInt(n);
                })
              );
            T += r.reduce((e, t) => e + t, 0n);
          }
          return T;
        } catch (r) {
          throw (function (e, { docsPath: t, ...r }) {
            return new l(
              (() => {
                let t = (0, f.k)(e, r);
                return t instanceof d.cj ? e : t;
              })(),
              { docsPath: t, ...r }
            );
          })(r, { ...t, account: o, chain: e.chain });
        }
      }
    },
    93153: function (e, t, r) {
      r.d(t, {
        _: function () {
          return c;
        },
        h: function () {
          return u;
        },
      });
      var n = r(16707),
        a = r(37968),
        i = r(72427),
        s = r(97046),
        o = r(57843);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let { block: r, chain: c = e.chain, request: u } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ('function' == typeof t) {
            let n = r || (await (0, i.s)(e, s.Q, 'getBlock')({})),
              a = await t({ block: n, client: e, request: u });
            if (null === a) throw Error();
            return a;
          }
          if (void 0 !== t) return t;
          let n = await e.request({ method: 'eth_maxPriorityFeePerGas' });
          return (0, a.y_)(n);
        } catch {
          let [t, a] = await Promise.all([
            r ? Promise.resolve(r) : (0, i.s)(e, s.Q, 'getBlock')({}),
            (0, i.s)(e, o.o, 'getGasPrice')({}),
          ]);
          if ('bigint' != typeof t.baseFeePerGas) throw new n.e5();
          let c = a - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    76827: function (e, t, r) {
      r.d(t, {
        s: function () {
          return a;
        },
      });
      var n = r(79150);
      async function a(e, { address: t, blockNumber: r, blockTag: a = 'latest' }) {
        let i = r ? (0, n.eC)(r) : void 0;
        return BigInt(await e.request({ method: 'eth_getBalance', params: [t, i || a] }));
      }
    },
    97046: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return s;
        },
      });
      var n = r(41630),
        a = r(79150),
        i = r(26573);
      async function s(
        e,
        { blockHash: t, blockNumber: r, blockTag: s, includeTransactions: o } = {}
      ) {
        let c = o ?? !1,
          u = void 0 !== r ? (0, a.eC)(r) : void 0,
          l = null;
        if (
          !(l = t
            ? await e.request({ method: 'eth_getBlockByHash', params: [t, c] }, { dedupe: !0 })
            : await e.request(
                { method: 'eth_getBlockByNumber', params: [u || (s ?? 'latest'), c] },
                { dedupe: !!u }
              ))
        )
          throw new n.f({ blockHash: t, blockNumber: r });
        return (e.chain?.formatters?.block?.format || i.Z)(l);
      }
    },
    59383: function (e, t, r) {
      r.d(t, {
        L: function () {
          return a;
        },
      });
      var n = r(37968);
      async function a(e) {
        let t = await e.request({ method: 'eth_chainId' }, { dedupe: !0 });
        return (0, n.ly)(t);
      }
    },
    57843: function (e, t, r) {
      r.d(t, {
        o: function () {
          return n;
        },
      });
      async function n(e) {
        return BigInt(await e.request({ method: 'eth_gasPrice' }));
      }
    },
    85322: function (e, t, r) {
      r.d(t, {
        K: function () {
          return i;
        },
      });
      var n = r(37968),
        a = r(79150);
      async function i(e, { address: t, blockTag: r = 'latest', blockNumber: i }) {
        let s = await e.request(
          { method: 'eth_getTransactionCount', params: [t, i ? (0, a.eC)(i) : r] },
          { dedupe: !!i }
        );
        return (0, n.ly)(s);
      }
    },
    6257: function (e, t, r) {
      r.d(t, {
        QZ: function () {
          return g;
        },
        ZE: function () {
          return b;
        },
      });
      var n = r(39858),
        a = r(22870),
        i = r(65870),
        s = r(97046),
        o = r(85322),
        c = r(16707),
        u = r(99969),
        l = r(24851),
        d = r(56899),
        f = r(29752),
        h = r(72427),
        m = r(64233),
        y = r(39128),
        w = r(59383);
      let g = ['blobVersionedHashes', 'chainId', 'fees', 'gas', 'nonce', 'type'],
        p = new Map();
      async function b(e, t) {
        let r, b;
        let {
            account: P = e.account,
            blobs: v,
            chain: F,
            gas: G,
            kzg: x,
            nonce: k,
            nonceManager: B,
            parameters: C = g,
            type: E,
          } = t,
          _ = P ? (0, n.T)(P) : P,
          I = { ...t, ...(_ ? { from: _?.address } : {}) };
        async function q() {
          return r || (r = await (0, h.s)(e, s.Q, 'getBlock')({ blockTag: 'latest' }));
        }
        async function $() {
          return (
            b ||
            (F
              ? F.id
              : void 0 !== t.chainId
                ? t.chainId
                : (b = await (0, h.s)(e, w.L, 'getChainId')({})))
          );
        }
        if (C.includes('nonce') && void 0 === k && _) {
          if (B) {
            let t = await $();
            I.nonce = await B.consume({ address: _.address, chainId: t, client: e });
          } else
            I.nonce = await (0, h.s)(
              e,
              o.K,
              'getTransactionCount'
            )({ address: _.address, blockTag: 'pending' });
        }
        if ((C.includes('blobVersionedHashes') || C.includes('sidecars')) && v && x) {
          let e = (0, u.P)({ blobs: v, kzg: x });
          if (C.includes('blobVersionedHashes')) {
            let t = (0, d.C)({ commitments: e, to: 'hex' });
            I.blobVersionedHashes = t;
          }
          if (C.includes('sidecars')) {
            let t = (0, l.y)({ blobs: v, commitments: e, kzg: x }),
              r = (0, f.j)({ blobs: v, commitments: e, proofs: t, to: 'hex' });
            I.sidecars = r;
          }
        }
        if (
          (C.includes('chainId') && (I.chainId = await $()),
          (C.includes('fees') || C.includes('type')) && void 0 === E)
        )
          try {
            I.type = (0, y.l)(I);
          } catch {
            let t = p.get(e.uid);
            if (void 0 === t) {
              let r = await q();
              (t = 'bigint' == typeof r?.baseFeePerGas), p.set(e.uid, t);
            }
            I.type = t ? 'eip1559' : 'legacy';
          }
        if (C.includes('fees')) {
          if ('legacy' !== I.type && 'eip2930' !== I.type) {
            if (void 0 === I.maxFeePerGas || void 0 === I.maxPriorityFeePerGas) {
              let r = await q(),
                { maxFeePerGas: n, maxPriorityFeePerGas: i } = await (0, a.C)(e, {
                  block: r,
                  chain: F,
                  request: I,
                });
              if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < i)
                throw new c.ld({ maxPriorityFeePerGas: i });
              (I.maxPriorityFeePerGas = i), (I.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new c.e5();
            if (void 0 === t.gasPrice) {
              let t = await q(),
                { gasPrice: r } = await (0, a.C)(e, {
                  block: t,
                  chain: F,
                  request: I,
                  type: 'legacy',
                });
              I.gasPrice = r;
            }
          }
        }
        return (
          C.includes('gas') &&
            void 0 === G &&
            (I.gas = await (0, h.s)(
              e,
              i.Q,
              'estimateGas'
            )({ ...I, account: _ ? { address: _.address, type: 'json-rpc' } : _ })),
          (0, m.F)(I),
          delete I.parameters,
          I
        );
      }
    },
    41630: function (e, t, r) {
      r.d(t, {
        f: function () {
          return a;
        },
      });
      var n = r(77854);
      class a extends n.G {
        constructor({ blockHash: e, blockNumber: t }) {
          let r = 'Block';
          e && (r = `Block at hash "${e}"`),
            t && (r = `Block at number "${t}"`),
            super(`${r} could not be found.`, { name: 'BlockNotFoundError' });
        }
      }
    },
    16707: function (e, t, r) {
      r.d(t, {
        Fz: function () {
          return i;
        },
        e5: function () {
          return s;
        },
        ld: function () {
          return o;
        },
      });
      var n = r(18838),
        a = r(77854);
      class i extends a.G {
        constructor() {
          super('`baseFeeMultiplier` must be greater than 1.', { name: 'BaseFeeScalarError' });
        }
      }
      class s extends a.G {
        constructor() {
          super('Chain does not support EIP-1559 fees.', { name: 'Eip1559FeesNotSupportedError' });
        }
      }
      class o extends a.G {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0, n.o)(e)} gwei).`,
            { name: 'MaxFeePerGasTooLowError' }
          );
        }
      }
    },
    90461: function (e, t, r) {
      r.d(t, {
        t: function () {
          return c;
        },
      });
      var n = r(1155),
        a = r(13990),
        i = r(79150),
        s = r(93511),
        o = r(60977);
      function c(e) {
        let { chainId: t, contractAddress: r, nonce: c, to: u } = e,
          l = (0, o.w)(
            (0, n.SM)(['0x05', (0, s.LV)([t ? (0, i.eC)(t) : '0x', r, c ? (0, i.eC)(c) : '0x'])])
          );
        return 'bytes' === u ? (0, a.nr)(l) : l;
      }
    },
    15825: function (e, t, r) {
      r.d(t, {
        z: function () {
          return i;
        },
      });
      var n = r(27669),
        a = r(90461);
      async function i(e) {
        let { authorization: t, signature: r } = e;
        return (0, n.R)({ hash: (0, a.t)(t), signature: r ?? t });
      }
    },
    27669: function (e, t, r) {
      r.d(t, {
        R: function () {
          return u;
        },
      });
      var n = r(70935),
        a = r(13393),
        i = r(37968),
        s = r(79150);
      async function o({ hash: e, signature: t }) {
        let n = (0, a.v)(e) ? e : (0, s.NC)(e),
          { secp256k1: o } = await r.e(4711).then(r.bind(r, 84711)),
          u = (() => {
            if ('object' == typeof t && 'r' in t && 's' in t) {
              let { r: e, s: r, v: n, yParity: a } = t,
                s = c(Number(a ?? n));
              return new o.Signature((0, i.y_)(e), (0, i.y_)(r)).addRecoveryBit(s);
            }
            let e = (0, a.v)(t) ? t : (0, s.NC)(t),
              r = c((0, i.ly)(`0x${e.slice(130)}`));
            return o.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(r);
          })()
            .recoverPublicKey(n.substring(2))
            .toHex(!1);
        return `0x${u}`;
      }
      function c(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error('Invalid yParityOrV value');
      }
      async function u({ hash: e, signature: t }) {
        return (0, n.y)(await o({ hash: e, signature: t }));
      }
    },
  },
]);
