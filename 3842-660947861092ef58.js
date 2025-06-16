(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3842],
  {
    2167: (e, t, n) => {
      'use strict';
      n.d(t, { b4: () => s, gU: () => o, uP: () => i });
      var r = n(42960),
        a = n(80413);
      let s = {
        '0x0': 'legacy',
        '0x1': 'eip2930',
        '0x2': 'eip1559',
        '0x3': 'eip4844',
        '0x4': 'eip7702',
      };
      function i(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, r.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
          nonce: e.nonce ? (0, r.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
          type: e.type ? s[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ('bigint' == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return +(t.v % 2n === 0n);
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
      let o = (0, a.q)('transaction', i);
    },
    2546: (e, t, n) => {
      'use strict';
      n.d(t, { R: () => s });
      var r = n(80413),
        a = n(2167);
      let s = (0, r.q)('block', function (e) {
        let t = (e.transactions ?? []).map((e) => ('string' == typeof e ? e : (0, a.uP)(e)));
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
    },
    3233: (e, t, n) => {
      'use strict';
      n.d(t, { r: () => r });
      let r = (0, n(55695).x)({
        id: 1,
        name: 'Ethereum',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://eth.merkle.io'] } },
        blockExplorers: {
          default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api',
          },
        },
        contracts: {
          ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
          ensUniversalResolver: {
            address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
            blockCreated: 0x125db65,
          },
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0xdb04c1,
          },
        },
      });
    },
    4693: (e, t, n) => {
      'use strict';
      n.d(t, { P: () => a });
      var r = n(11142);
      let a = (0, n(55695).x)({
        ...r.o,
        id: 57073,
        name: 'Ink',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: {
            http: ['https://rpc-gel.inkonchain.com', 'https://rpc-qnd.inkonchain.com'],
            webSocket: ['wss://rpc-gel.inkonchain.com', 'wss://rpc-qnd.inkonchain.com'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Blockscout',
            url: 'https://explorer.inkonchain.com',
            apiUrl: 'https://explorer.inkonchain.com/api/v2',
          },
        },
        contracts: {
          multicall3: { address: '0xcA11bde05977b3631167028862bE2a173976CA11', blockCreated: 0 },
          ...r.o.contracts,
          disputeGameFactory: { 1: { address: '0x10d7b35078d3baabb96dd45a9143b94be65b12cd' } },
          portal: { 1: { address: '0x5d66c1782664115999c47c9fa5cd031f495d3e4f' } },
          l1StandardBridge: { 1: { address: '0x88ff1e5b602916615391f55854588efcbb7663f0' } },
        },
        testnet: !1,
        sourceId: 1,
      });
    },
    7219: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => r });
      let r = (0, n(55695).x)({
        id: 0x4e454152,
        name: 'Aurora',
        nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
        rpcUrls: { default: { http: ['https://mainnet.aurora.dev'] } },
        blockExplorers: {
          default: {
            name: 'Aurorascan',
            url: 'https://aurorascan.dev',
            apiUrl: 'https://aurorascan.dev/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0x3bfe5a8,
          },
        },
      });
    },
    8268: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => s });
      var r = n(69879),
        a = n(54568);
      let s = (0, r.A)(
        (0, a.jsx)('path', {
          d: 'M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4',
        }),
        'HelpOutline'
      );
    },
    9720: (e, t, n) => {
      'use strict';
      n.d(t, { E: () => r });
      let r = (0, n(55695).x)({
        id: 98866,
        name: 'Plume',
        nativeCurrency: { name: 'Plume', symbol: 'PLUME', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://rpc.plume.org'], webSocket: ['wss://rpc.plume.org'] },
        },
        blockExplorers: {
          default: {
            name: 'Blockscout',
            url: 'https://explorer.plume.org',
            apiUrl: 'https://explorer.plume.org/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 39679,
          },
        },
        sourceId: 1,
      });
    },
    10304: (e, t, n) => {
      'use strict';
      n.d(t, { O: () => r });
      let r = (0, n(55695).x)({
        id: 250,
        name: 'Fantom',
        nativeCurrency: { decimals: 18, name: 'Fantom', symbol: 'FTM' },
        rpcUrls: { default: { http: ['https://250.rpc.thirdweb.com'] } },
        blockExplorers: {
          default: {
            name: 'FTMScan',
            url: 'https://ftmscan.com',
            apiUrl: 'https://api.ftmscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0x1f79203,
          },
        },
      });
    },
    11142: (e, t, n) => {
      'use strict';
      n.d(t, { o: () => u });
      var r = n(77223),
        a = n(42960),
        s = n(2546),
        i = n(2167),
        o = n(66313);
      let c = {
        block: (0, s.R)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ('string' == typeof e) return e;
              let t = i.uP(e);
              return (
                '0x7e' === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? a.uU(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = 'deposit')),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, i.gU)({
          format(e) {
            let t = {};
            return (
              '0x7e' === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, a.uU)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = 'deposit')),
              t
            );
          },
        }),
        transactionReceipt: (0, o.WB)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, a.uU)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, a.uU)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, a.uU)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var l = n(19353);
      let u = { contracts: r.M, formatters: c, serializers: l.YC };
    },
    12815: (e, t, n) => {
      'use strict';
      n.d(t, { l: () => c });
      var r = n(47298),
        a = n(42960),
        s = n(50377),
        i = n(14768),
        o = n(12052);
      function c(e, t = {}) {
        let { type: n } = e,
          { key: l = 'connector', name: u = 'Connector', retryDelay: d } = t;
        return (e) => {
          let { chain: c, connectors: p } = e,
            f = t.retryCount ?? e.retryCount,
            h = async ({ method: e, params: t }) => {
              let o = p?.getState().find((e) => e.type === n);
              if (!o)
                throw new r.RV(
                  Error(
                    `Could not find connector of type "${n}" in \`connectors\` passed to \`createConfig\`.`
                  )
                );
              let l = await o.getProvider({ chainId: c?.id });
              if (!l) throw new r.RV(Error('Provider is disconnected.'));
              let u = (0, a.ME)(
                await (0, s.b)(() =>
                  (0, i.w)(() => l.request({ method: 'eth_chainId' }), { timeout: 100 })
                )
              );
              if (c && u !== c.id)
                throw new r.xq(
                  Error(
                    `The current chain of the connector (id: ${u}) does not match the target chain for the request (id: ${c.id} – ${c.name}).`
                  )
                );
              return l.request({ method: e, params: t });
            };
          return (0, o.o)({
            key: l,
            name: u,
            request: h,
            retryCount: f,
            retryDelay: d,
            type: 'connector',
          });
        };
      }
    },
    16792: (e, t, n) => {
      'use strict';
      n.d(t, { S: () => r });
      let r = (0, n(55695).x)({
        id: 5e3,
        name: 'Mantle',
        nativeCurrency: { decimals: 18, name: 'MNT', symbol: 'MNT' },
        rpcUrls: { default: { http: ['https://rpc.mantle.xyz'] } },
        blockExplorers: {
          default: {
            name: 'Mantle Explorer',
            url: 'https://mantlescan.xyz/',
            apiUrl: 'https://api.mantlescan.xyz/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 304717,
          },
        },
      });
    },
    17709: (e, t, n) => {
      'use strict';
      n.d(t, { b: () => r });
      var r = n(92994);
    },
    19353: (e, t, n) => {
      'use strict';
      n.d(t, { YC: () => u, bQ: () => l });
      var r = n(7905),
        a = n(81734),
        s = n(97100),
        i = n(82663),
        o = n(80676),
        c = n(81599);
      function l(e, t) {
        var n;
        return 'deposit' === (n = e).type || void 0 !== n.sourceHash
          ? (function (e) {
              !(function (e) {
                let { from: t, to: n } = e;
                if (t && !(0, a.P)(t)) throw new r.M({ address: t });
                if (n && !(0, a.P)(n)) throw new r.M({ address: n });
              })(e);
              let {
                  sourceHash: t,
                  data: n,
                  from: c,
                  gas: l,
                  isSystemTx: u,
                  mint: d,
                  to: p,
                  value: f,
                } = e,
                h = [
                  t,
                  c,
                  p ?? '0x',
                  d ? (0, i.nj)(d) : '0x',
                  f ? (0, i.nj)(f) : '0x',
                  l ? (0, i.nj)(l) : '0x',
                  u ? '0x1' : '0x',
                  n ?? '0x',
                ];
              return (0, s.aP)(['0x7e', (0, o.EQ)(h)]);
            })(e)
          : (0, c.b)(e, t);
      }
      let u = { transaction: l };
    },
    20047: (e) => {
      e.exports = function (e, t, n) {
        if ('function' != typeof e) throw TypeError('Expected a function');
        return setTimeout(function () {
          e.apply(void 0, n);
        }, t);
      };
    },
    24186: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => r });
      let r = (0, n(55695).x)({
        id: 2222,
        name: 'Kava EVM',
        network: 'kava-mainnet',
        nativeCurrency: { name: 'Kava', symbol: 'KAVA', decimals: 18 },
        rpcUrls: { default: { http: ['https://evm.kava.io'] } },
        blockExplorers: {
          default: {
            name: 'Kava EVM Explorer',
            url: 'https://kavascan.com',
            apiUrl: 'https://kavascan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3661165,
          },
        },
        testnet: !1,
      });
    },
    26491: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => s });
      var r = n(69879),
        a = n(54568);
      let s = (0, r.A)(
        (0, a.jsx)('path', {
          d: 'M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2m-7 19.6-7-4.66V3h14v12.93zm-2.01-7.42-2.58-2.59L6 12l4 4 8-8-1.42-1.42z',
        }),
        'BeenhereOutlined'
      );
    },
    32819: (e, t, n) => {
      'use strict';
      n.d(t, { s: () => h });
      var r = n(43780),
        a = n(77222);
      class s extends a.Vw {
        constructor(e, t, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, a.O8)(this.buffer));
        }
        update(e) {
          (0, r.CC)(this);
          let { view: t, buffer: n, blockLen: s } = this,
            i = (e = (0, a.ZJ)(e)).length;
          for (let r = 0; r < i; ) {
            let o = Math.min(s - this.pos, i - r);
            if (o === s) {
              let t = (0, a.O8)(e);
              for (; s <= i - r; r += s) this.process(t, r);
              continue;
            }
            n.set(e.subarray(r, r + o), this.pos),
              (this.pos += o),
              (r += o),
              this.pos === s && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, r.CC)(this), (0, r.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: s, isLE: i } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > s - o && (this.process(n, 0), (o = 0));
          for (let e = o; e < s; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              s = BigInt(0xffffffff),
              i = Number((n >> a) & s),
              o = Number(n & s),
              c = 4 * !!r,
              l = 4 * !r;
            e.setUint32(t + c, i, r), e.setUint32(t + l, o, r);
          })(n, s - 8, BigInt(8 * this.length), i),
            this.process(n, 0);
          let c = (0, a.O8)(e),
            l = this.outputLen;
          if (l % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let u = l / 4,
            d = this.get();
          if (u > d.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < u; e++) c.setUint32(4 * e, d[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: n, length: r, finished: a, destroyed: s, pos: i } = this;
          return (
            (e.length = r),
            (e.pos = i),
            (e.finished = a),
            (e.destroyed = s),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let i = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4,
          0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe,
          0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
          0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
          0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116,
          0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
          0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
          0xc67178f2,
        ]),
        o = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        c = new Uint32Array(64);
      class l extends s {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: s, G: i, H: o } = this;
          return [e, t, n, r, a, s, i, o];
        }
        set(e, t, n, r, a, s, i, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | s),
            (this.G = 0 | i),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) c[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              n = c[e - 2],
              r = (0, a.Ow)(t, 7) ^ (0, a.Ow)(t, 18) ^ (t >>> 3),
              s = (0, a.Ow)(n, 17) ^ (0, a.Ow)(n, 19) ^ (n >>> 10);
            c[e] = (s + c[e - 7] + r + c[e - 16]) | 0;
          }
          let { A: n, B: r, C: s, D: o, E: l, F: u, G: d, H: p } = this;
          for (let e = 0; e < 64; e++) {
            var f, h, m, b;
            let t =
                (p +
                  ((0, a.Ow)(l, 6) ^ (0, a.Ow)(l, 11) ^ (0, a.Ow)(l, 25)) +
                  (((f = l) & u) ^ (~f & d)) +
                  i[e] +
                  c[e]) |
                0,
              y =
                (((0, a.Ow)(n, 2) ^ (0, a.Ow)(n, 13) ^ (0, a.Ow)(n, 22)) +
                  (((h = n) & (m = r)) ^ (h & (b = s)) ^ (m & b))) |
                0;
            (p = d),
              (d = u),
              (u = l),
              (l = (o + t) | 0),
              (o = s),
              (s = r),
              (r = n),
              (n = (t + y) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (s = (s + this.C) | 0),
            (o = (o + this.D) | 0),
            (l = (l + this.E) | 0),
            (u = (u + this.F) | 0),
            (d = (d + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(n, r, s, o, l, u, d, p);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let u = (0, a.ld)(() => new l());
      var d = n(79781),
        p = n(30761),
        f = n(82663);
      function h(e, t) {
        let n = u((0, d.q)(e, { strict: !1 }) ? (0, p.ZJ)(e) : e);
        return 'bytes' === (t || 'hex') ? n : (0, f.nj)(n);
      }
    },
    33533: (e, t, n) => {
      'use strict';
      n.d(t, { D: () => r });
      let r = (0, n(55695).x)({
        id: 42161,
        name: 'Arbitrum One',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://arb1.arbitrum.io/rpc'] } },
        blockExplorers: {
          default: {
            name: 'Arbiscan',
            url: 'https://arbiscan.io',
            apiUrl: 'https://api.arbiscan.io/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7654707,
          },
        },
      });
    },
    33782: (e, t, n) => {
      'use strict';
      n.d(t, { Y: () => r });
      let r = (0, n(55695).x)({
        id: 421614,
        name: 'Arbitrum Sepolia',
        nativeCurrency: { name: 'Arbitrum Sepolia Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://sepolia-rollup.arbitrum.io/rpc'] } },
        blockExplorers: {
          default: {
            name: 'Arbiscan',
            url: 'https://sepolia.arbiscan.io',
            apiUrl: 'https://api-sepolia.arbiscan.io/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 81930,
          },
        },
        testnet: !0,
      });
    },
    39259: (e, t, n) => {
      'use strict';
      n.d(t, { d: () => a });
      var r = n(11142);
      let a = (0, n(55695).x)({
        ...r.o,
        id: 252,
        name: 'Fraxtal',
        nativeCurrency: { name: 'Frax', symbol: 'FRAX', decimals: 18 },
        rpcUrls: { default: { http: ['https://rpc.frax.com'] } },
        blockExplorers: {
          default: {
            name: 'fraxscan',
            url: 'https://fraxscan.com',
            apiUrl: 'https://api.fraxscan.com/api',
          },
        },
        contracts: {
          ...r.o.contracts,
          l2OutputOracle: { 1: { address: '0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4' } },
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11' },
          portal: {
            1: { address: '0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D', blockCreated: 0x123fb5b },
          },
          l1StandardBridge: {
            1: { address: '0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2', blockCreated: 0x123fb5b },
          },
        },
        sourceId: 1,
      });
    },
    43448: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => r });
      let r = (0, n(55695).x)({
        id: 100,
        name: 'Gnosis',
        nativeCurrency: { decimals: 18, name: 'xDAI', symbol: 'XDAI' },
        rpcUrls: {
          default: {
            http: ['https://rpc.gnosischain.com'],
            webSocket: ['wss://rpc.gnosischain.com/wss'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Gnosisscan',
            url: 'https://gnosisscan.io',
            apiUrl: 'https://api.gnosisscan.io/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0x140c71b,
          },
        },
      });
    },
    46973: (e, t, n) => {
      'use strict';
      n.d(t, { h: () => r });
      let r = (0, n(55695).x)({
        id: 167e3,
        name: 'Taiko Mainnet',
        nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
        rpcUrls: {
          default: {
            http: ['https://rpc.mainnet.taiko.xyz'],
            webSocket: ['wss://ws.mainnet.taiko.xyz'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Taikoscan',
            url: 'https://taikoscan.io',
            apiUrl: 'https://api.taikoscan.io/api',
          },
        },
        contracts: { multicall3: { address: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D' } },
      });
    },
    48245: (e, t, n) => {
      'use strict';
      n.d(t, { L: () => r });
      let r = (0, n(55695).x)({
        id: 1284,
        name: 'Moonbeam',
        nativeCurrency: { decimals: 18, name: 'GLMR', symbol: 'GLMR' },
        rpcUrls: {
          default: {
            http: ['https://moonbeam.public.blastapi.io'],
            webSocket: ['wss://moonbeam.public.blastapi.io'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Moonscan',
            url: 'https://moonscan.io',
            apiUrl: 'https://api-moonbeam.moonscan.io/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 609002,
          },
        },
        testnet: !1,
      });
    },
    49879: (e, t, n) => {
      var r = n(20047),
        a = n(23830),
        s = n(5984);
      e.exports = a(function (e, t, n) {
        return r(e, s(t) || 0, n);
      });
    },
    50353: (e, t, n) => {
      'use strict';
      n.d(t, { n: () => r });
      let r = (0, n(55695).x)({
        id: 0xe9ac0d6,
        network: 'neonMainnet',
        name: 'Neon EVM MainNet',
        nativeCurrency: { name: 'NEON', symbol: 'NEON', decimals: 18 },
        rpcUrls: { default: { http: ['https://neon-proxy-mainnet.solana.p2p.org'] } },
        blockExplorers: { default: { name: 'Neonscan', url: 'https://neonscan.org' } },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0xc4fa274,
          },
        },
        testnet: !1,
      });
    },
    52213: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => U });
      var r = n(77223);
      async function a(e, t) {
        return BigInt(await e.request({ method: 'eth_gasPrice', params: [t] }));
      }
      async function s(e, t) {
        return BigInt(await e.request({ method: 'eth_maxPriorityFeePerGas', params: [t] }));
      }
      var i = n(42960),
        o = n(2546),
        c = n(2167),
        l = n(50596),
        u = n(9036);
      function d(e) {
        return (
          0 === e ||
          0n === e ||
          null == e ||
          '0' === e ||
          '' === e ||
          ('string' == typeof e &&
            ('0x' === (0, u.B)(e).toLowerCase() || '0x00' === (0, u.B)(e).toLowerCase()))
        );
      }
      function p(e) {
        return (
          'cip64' === e.type ||
          (void 0 !== e.maxFeePerGas && void 0 !== e.maxPriorityFeePerGas && !d(e.feeCurrency))
        );
      }
      let f = {
        block: (0, o.R)({
          format: (e) => ({
            transactions: e.transactions?.map((e) =>
              'string' == typeof e
                ? e
                : {
                    ...c.uP(e),
                    ...(e.gatewayFee
                      ? {
                          gatewayFee: i.uU(e.gatewayFee),
                          gatewayFeeRecipient: e.gatewayFeeRecipient,
                        }
                      : {}),
                    feeCurrency: e.feeCurrency,
                  }
            ),
          }),
        }),
        transaction: (0, c.gU)({
          format(e) {
            if ('0x7e' === e.type)
              return {
                isSystemTx: e.isSystemTx,
                mint: e.mint ? (0, i.uU)(e.mint) : void 0,
                sourceHash: e.sourceHash,
                type: 'deposit',
              };
            let t = { feeCurrency: e.feeCurrency };
            return (
              '0x7b' === e.type
                ? (t.type = 'cip64')
                : ('0x7c' === e.type && (t.type = 'cip42'),
                  (t.gatewayFee = e.gatewayFee ? (0, i.uU)(e.gatewayFee) : null),
                  (t.gatewayFeeRecipient = e.gatewayFeeRecipient)),
              t
            );
          },
        }),
        transactionRequest: (0, l.bm)({
          format(e) {
            let t = {};
            return e.feeCurrency && (t.feeCurrency = e.feeCurrency), p(e) && (t.type = '0x7b'), t;
          },
        }),
      };
      var h = n(39362),
        m = n(7905),
        b = n(6616),
        y = n(45704),
        x = n(24887),
        g = n(19353),
        v = n(81734),
        w = n(97100),
        C = n(82663),
        P = n(80676),
        I = n(92758),
        E = n(81599);
      let k = h.Ao,
        B = {
          contracts: r.M,
          formatters: f,
          serializers: {
            transaction: function (e, t) {
              return p(e)
                ? (function (e, t) {
                    !(function (e) {
                      let {
                        chainId: t,
                        maxPriorityFeePerGas: n,
                        gasPrice: r,
                        maxFeePerGas: a,
                        to: s,
                        feeCurrency: i,
                      } = e;
                      if (t <= 0) throw new y.qD({ chainId: t });
                      if (s && !(0, v.P)(s)) throw new m.M({ address: s });
                      if (r)
                        throw new b.C('`gasPrice` is not a valid CIP-64 Transaction attribute.');
                      if (!d(a) && a > k) throw new x.BG({ maxFeePerGas: a });
                      if (!d(n) && !d(a) && n > a)
                        throw new x.lN({ maxFeePerGas: a, maxPriorityFeePerGas: n });
                      if (!d(i) && !(0, v.P)(i))
                        throw new b.C(
                          '`feeCurrency` MUST be a token address for CIP-64 transactions.'
                        );
                      if (d(i))
                        throw new b.C('`feeCurrency` must be provided for CIP-64 transactions.');
                    })(e);
                    let {
                        chainId: n,
                        gas: r,
                        nonce: a,
                        to: s,
                        value: i,
                        maxFeePerGas: o,
                        maxPriorityFeePerGas: c,
                        accessList: l,
                        feeCurrency: u,
                        data: p,
                      } = e,
                      f = [
                        (0, C.nj)(n),
                        a ? (0, C.nj)(a) : '0x',
                        c ? (0, C.nj)(c) : '0x',
                        o ? (0, C.nj)(o) : '0x',
                        r ? (0, C.nj)(r) : '0x',
                        s ?? '0x',
                        i ? (0, C.nj)(i) : '0x',
                        p ?? '0x',
                        (0, I.f)(l),
                        u,
                        ...(0, E.Z)(e, t),
                      ];
                    return (0, w.aP)(['0x7b', (0, P.EQ)(f)]);
                  })(e, t)
                : (0, g.bQ)(e, t);
            },
          },
          fees: {
            estimateFeesPerGas: async (e) => {
              if (!e.request?.feeCurrency) return null;
              let [t, n] = await Promise.all([
                a(e.client, e.request.feeCurrency),
                s(e.client, e.request.feeCurrency),
              ]);
              return { maxFeePerGas: e.multiply(t - n) + n, maxPriorityFeePerGas: n };
            },
          },
        },
        U = (0, n(55695).x)({
          ...B,
          id: 42220,
          name: 'Celo',
          nativeCurrency: { decimals: 18, name: 'CELO', symbol: 'CELO' },
          rpcUrls: { default: { http: ['https://forno.celo.org'] } },
          blockExplorers: {
            default: {
              name: 'Celo Explorer',
              url: 'https://celoscan.io',
              apiUrl: 'https://api.celoscan.io/api',
            },
          },
          contracts: {
            multicall3: {
              address: '0xcA11bde05977b3631167028862bE2a173976CA11',
              blockCreated: 0xc81517,
            },
          },
          testnet: !1,
        });
    },
    53616: (e, t, n) => {
      'use strict';
      n.d(t, { N: () => c });
      var r = n(24887),
        a = n(47298),
        s = n(20434),
        i = n(12052);
      function o(e) {
        return !!(
          'code' in e &&
          'number' == typeof e.code &&
          (e.code === a.YW.code ||
            e.code === a.vx.code ||
            r.A7.nodeMessage.test(e.message) ||
            5e3 === e.code)
        );
      }
      function c(e, t) {
        return (function (e, t = {}) {
          let {
            key: n = 'fallback',
            name: r = 'Fallback',
            rank: a = !1,
            shouldThrow: c = o,
            retryCount: l,
            retryDelay: u,
          } = t;
          return ({ chain: t, pollingInterval: o = 4e3, timeout: d, ...p }) => {
            let f = e,
              h = () => {},
              m = (0, i.o)(
                {
                  key: n,
                  name: r,
                  async request({ method: e, params: n }) {
                    let r;
                    let a = async (s = 0) => {
                      let i = f[s]({ ...p, chain: t, retryCount: 0, timeout: d });
                      try {
                        let t = await i.request({ method: e, params: n });
                        return (
                          h({ method: e, params: n, response: t, transport: i, status: 'success' }),
                          t
                        );
                      } catch (o) {
                        if (
                          (h({ error: o, method: e, params: n, transport: i, status: 'error' }),
                          c(o) ||
                            s === f.length - 1 ||
                            !(r ??= f.slice(s + 1).some((n) => {
                              let { include: r, exclude: a } = n({ chain: t }).config.methods || {};
                              return r ? r.includes(e) : !a || !a.includes(e);
                            })))
                        )
                          throw o;
                        return a(s + 1);
                      }
                    };
                    return a();
                  },
                  retryCount: l,
                  retryDelay: u,
                  type: 'fallback',
                },
                {
                  onResponse: (e) => (h = e),
                  transports: f.map((e) => e({ chain: t, retryCount: 0 })),
                }
              );
            if (a) {
              let e = 'object' == typeof a ? a : {};
              !(function ({
                chain: e,
                interval: t = 4e3,
                onTransports: n,
                ping: r,
                sampleCount: a = 10,
                timeout: i = 1e3,
                transports: o,
                weights: c = {},
              }) {
                let { stability: l = 0.7, latency: u = 0.3 } = c,
                  d = [],
                  p = async () => {
                    let c = await Promise.all(
                      o.map(async (t) => {
                        let n, a;
                        let s = t({ chain: e, retryCount: 0, timeout: i }),
                          o = Date.now();
                        try {
                          await (r ? r({ transport: s }) : s.request({ method: 'net_listening' })),
                            (a = 1);
                        } catch {
                          a = 0;
                        } finally {
                          n = Date.now();
                        }
                        return { latency: n - o, success: a };
                      })
                    );
                    d.push(c), d.length > a && d.shift();
                    let f = Math.max(...d.map((e) => Math.max(...e.map(({ latency: e }) => e))));
                    n(
                      o
                        .map((e, t) => {
                          let n = d.map((e) => e[t].latency),
                            r = n.reduce((e, t) => e + t, 0) / n.length,
                            a = d.map((e) => e[t].success),
                            s = a.reduce((e, t) => e + t, 0) / a.length;
                          return 0 === s ? [0, t] : [u * (1 - r / f) + l * s, t];
                        })
                        .sort((e, t) => t[0] - e[0])
                        .map(([, e]) => o[e])
                    ),
                      await (0, s.u)(t),
                      p();
                  };
                p();
              })({
                chain: t,
                interval: e.interval ?? o,
                onTransports: (e) => (f = e),
                ping: e.ping,
                sampleCount: e.sampleCount,
                timeout: e.timeout,
                transports: f,
                weights: e.weights,
              });
            }
            return m;
          };
        })(e, t);
      }
    },
    54152: (e, t, n) => {
      'use strict';
      n.d(t, { t: () => p });
      var r = n(7620),
        a = n(68512),
        s = ['added', 'removed', 'updated'];
      function i(e) {
        return s.includes(e);
      }
      async function o({
        queryClient: e,
        persister: t,
        maxAge: n = 864e5,
        buster: r = '',
        hydrateOptions: s,
      }) {
        try {
          let i = await t.restoreClient();
          if (i) {
            if (!i.timestamp) return t.removeClient();
            {
              let o = Date.now() - i.timestamp > n,
                c = i.buster !== r;
              if (o || c) return t.removeClient();
              (0, a.Qv)(e, i.clientState, s);
            }
          }
        } catch (e) {
          throw (await t.removeClient(), e);
        }
      }
      async function c({ queryClient: e, persister: t, buster: n = '', dehydrateOptions: r }) {
        let s = { buster: n, timestamp: Date.now(), clientState: (0, a.hw)(e, r) };
        await t.persistClient(s);
      }
      var l = n(87606),
        u = n(26388),
        d = n(54568),
        p = ({ children: e, persistOptions: t, onSuccess: n, onError: a, ...s }) => {
          let [p, f] = r.useState(!0),
            h = r.useRef({ persistOptions: t, onSuccess: n, onError: a }),
            m = r.useRef(!1);
          return (
            r.useEffect(() => {
              h.current = { persistOptions: t, onSuccess: n, onError: a };
            }),
            r.useEffect(() => {
              let e = { ...h.current.persistOptions, queryClient: s.client };
              return (
                m.current ||
                  ((m.current = !0),
                  o(e)
                    .then(() => h.current.onSuccess?.())
                    .catch(() => h.current.onError?.())
                    .finally(() => {
                      f(!1);
                    })),
                p
                  ? void 0
                  : (function (e) {
                      let t = e.queryClient.getQueryCache().subscribe((t) => {
                          i(t.type) && c(e);
                        }),
                        n = e.queryClient.getMutationCache().subscribe((t) => {
                          i(t.type) && c(e);
                        });
                      return () => {
                        t(), n();
                      };
                    })(e)
              );
            }, [s.client, p]),
            (0, d.jsx)(l.QueryClientProvider, {
              ...s,
              children: (0, d.jsx)(u.IsRestoringProvider, { value: p, children: e }),
            })
          );
        };
    },
    55298: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => s }), n(7620);
      var r = n(69879),
        a = n(54568);
      let s = (0, r.A)(
        (0, a.jsx)('path', {
          d: 'M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27',
        }),
        'GitHub'
      );
    },
    55695: (e, t, n) => {
      'use strict';
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      n.d(t, { x: () => r });
    },
    55769: (e, t, n) => {
      'use strict';
      function r(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      n.d(t, { e: () => r });
    },
    56465: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => s });
      var r = n(69879),
        a = n(54568);
      let s = (0, r.A)(
        [
          (0, a.jsx)(
            'path',
            {
              d: 'M20 4H4c-1.1 0-2 .9-2 2v3h2V6h16v3h2V6c0-1.1-.9-2-2-2m0 14H4v-3H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-2z',
            },
            '0'
          ),
          (0, a.jsx)(
            'path',
            {
              d: 'M14.89 7.55c-.34-.68-1.45-.68-1.79 0L10 13.76l-1.11-2.21A.988.988 0 0 0 8 11H2v2h5.38l1.72 3.45c.18.34.52.55.9.55s.72-.21.89-.55L14 10.24l1.11 2.21c.17.34.51.55.89.55h6v-2h-5.38z',
            },
            '1'
          ),
        ],
        'MonitorHeartOutlined'
      );
    },
    66313: (e, t, n) => {
      'use strict';
      n.d(t, { WB: () => c });
      var r = n(42960),
        a = n(80413),
        s = n(55769),
        i = n(2167);
      let o = { '0x0': 'reverted', '0x1': 'success' },
        c = (0, a.q)('transactionReceipt', function (e) {
          let t = {
            ...e,
            blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
            contractAddress: e.contractAddress ? e.contractAddress : null,
            cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
            effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
            gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
            logs: e.logs ? e.logs.map((e) => (0, s.e)(e)) : null,
            to: e.to ? e.to : null,
            transactionIndex: e.transactionIndex ? (0, r.ME)(e.transactionIndex) : null,
            status: e.status ? o[e.status] : null,
            type: e.type ? i.b4[e.type] || e.type : null,
          };
          return (
            e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
            e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
            t
          );
        });
    },
    68267: (e, t, n) => {
      'use strict';
      n.d(t, { n: () => r });
      let r = (0, n(55695).x)({
        id: 137,
        name: 'Polygon',
        nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
        rpcUrls: { default: { http: ['https://polygon-rpc.com'] } },
        blockExplorers: {
          default: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
            apiUrl: 'https://api.polygonscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0x18938b0,
          },
        },
      });
    },
    68512: (e, t, n) => {
      'use strict';
      function r(e) {
        return e;
      }
      function a(e) {
        return e.state.isPaused;
      }
      function s(e) {
        return 'success' === e.state.status;
      }
      function i(e) {
        return !0;
      }
      function o(e, t = {}) {
        let n =
            t.shouldDehydrateMutation ??
            e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
            a,
          c = e
            .getMutationCache()
            .getAll()
            .flatMap((e) =>
              n(e)
                ? [
                    {
                      mutationKey: e.options.mutationKey,
                      state: e.state,
                      ...(e.options.scope && { scope: e.options.scope }),
                      ...(e.meta && { meta: e.meta }),
                    },
                  ]
                : []
            ),
          l = t.shouldDehydrateQuery ?? e.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? s,
          u = t.shouldRedactErrors ?? e.getDefaultOptions().dehydrate?.shouldRedactErrors ?? i,
          d = t.serializeData ?? e.getDefaultOptions().dehydrate?.serializeData ?? r;
        return {
          mutations: c,
          queries: e
            .getQueryCache()
            .getAll()
            .flatMap((e) =>
              l(e)
                ? [
                    {
                      state: {
                        ...e.state,
                        ...(void 0 !== e.state.data && { data: d(e.state.data) }),
                      },
                      queryKey: e.queryKey,
                      queryHash: e.queryHash,
                      ...('pending' === e.state.status && {
                        promise: e.promise
                          ?.then(d)
                          .catch((e) =>
                            u(e) ? Promise.reject(Error('redacted')) : Promise.reject(e)
                          ),
                      }),
                      ...(e.meta && { meta: e.meta }),
                    },
                  ]
                : []
            ),
        };
      }
      function c(e, t, n) {
        if ('object' != typeof t || null === t) return;
        let a = e.getMutationCache(),
          s = e.getQueryCache(),
          i =
            n?.defaultOptions?.deserializeData ??
            e.getDefaultOptions().hydrate?.deserializeData ??
            r,
          o = t.mutations || [],
          c = t.queries || [];
        o.forEach(({ state: t, ...r }) => {
          a.build(
            e,
            { ...e.getDefaultOptions().hydrate?.mutations, ...n?.defaultOptions?.mutations, ...r },
            t
          );
        }),
          c.forEach(({ queryKey: t, state: r, queryHash: a, meta: o, promise: c }) => {
            let l = s.get(a),
              u = void 0 === r.data ? r.data : i(r.data);
            if (l) {
              if (l.state.dataUpdatedAt < r.dataUpdatedAt) {
                let { fetchStatus: e, ...t } = r;
                l.setState({ ...t, data: u });
              }
            } else
              l = s.build(
                e,
                {
                  ...e.getDefaultOptions().hydrate?.queries,
                  ...n?.defaultOptions?.queries,
                  queryKey: t,
                  queryHash: a,
                  meta: o,
                },
                { ...r, data: u, fetchStatus: 'idle' }
              );
            if (c) {
              let e = Promise.resolve(c).then(i);
              l.fetch(void 0, { initialPromise: e });
            }
          });
      }
      n.d(t, { Qv: () => c, hw: () => o });
    },
    75673: (e, t, n) => {
      'use strict';
      n.d(t, { R: () => a });
      var r = n(11142);
      let a = (0, n(55695).x)({
        ...r.o,
        id: 10,
        name: 'OP Mainnet',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://mainnet.optimism.io'] } },
        blockExplorers: {
          default: {
            name: 'Optimism Explorer',
            url: 'https://optimistic.etherscan.io',
            apiUrl: 'https://api-optimistic.etherscan.io/api',
          },
        },
        contracts: {
          ...r.o.contracts,
          disputeGameFactory: { 1: { address: '0xe5965Ab5962eDc7477C8520243A95517CD252fA9' } },
          l2OutputOracle: { 1: { address: '0xdfe97868233d1aa22e815a266982f2cf17685a27' } },
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263,
          },
          portal: { 1: { address: '0xbEb5Fc579115071764c7423A4f12eDde41f106Ed' } },
          l1StandardBridge: { 1: { address: '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1' } },
        },
        sourceId: 1,
      });
    },
    76344: (e, t, n) => {
      'use strict';
      n.d(t, { d: () => S });
      var r = n(55695),
        a = n(42960),
        s = n(30761),
        i = n(82663),
        o = n(2546),
        c = n(55769),
        l = n(2167),
        u = n(66313),
        d = n(50596);
      let p = 32n * n(39362).Au,
        f = {
          block: (0, o.R)({
            format(e) {
              let t = e.transactions?.map((e) => {
                if ('string' == typeof e) return e;
                let t = f.transaction?.format(e);
                return (
                  '0x71' === t.typeHex
                    ? (t.type = 'eip712')
                    : '0xff' === t.typeHex && (t.type = 'priority'),
                  t
                );
              });
              return {
                l1BatchNumber: e.l1BatchNumber ? (0, a.uU)(e.l1BatchNumber) : null,
                l1BatchTimestamp: e.l1BatchTimestamp ? (0, a.uU)(e.l1BatchTimestamp) : null,
                transactions: t,
              };
            },
          }),
          transaction: (0, l.gU)({
            format(e) {
              let t = {};
              return (
                '0x71' === e.type
                  ? (t.type = 'eip712')
                  : '0xff' === e.type && (t.type = 'priority'),
                {
                  ...t,
                  l1BatchNumber: e.l1BatchNumber ? (0, a.uU)(e.l1BatchNumber) : null,
                  l1BatchTxIndex: e.l1BatchTxIndex ? (0, a.uU)(e.l1BatchTxIndex) : null,
                }
              );
            },
          }),
          transactionReceipt: (0, u.WB)({
            format: (e) => ({
              l1BatchNumber: e.l1BatchNumber ? (0, a.uU)(e.l1BatchNumber) : null,
              l1BatchTxIndex: e.l1BatchTxIndex ? (0, a.uU)(e.l1BatchTxIndex) : null,
              logs: e.logs.map((e) => ({
                ...(0, c.e)(e),
                l1BatchNumber: e.l1BatchNumber ? (0, a.uU)(e.l1BatchNumber) : null,
                transactionLogIndex: (0, a.ME)(e.transactionLogIndex),
                logType: e.logType,
              })),
              l2ToL1Logs: e.l2ToL1Logs.map((e) => ({
                blockNumber: (0, a.uU)(e.blockHash),
                blockHash: e.blockHash,
                l1BatchNumber: e.l1BatchNumber ? (0, a.uU)(e.l1BatchNumber) : null,
                transactionIndex: (0, a.uU)(e.transactionIndex),
                shardId: (0, a.uU)(e.shardId),
                isService: e.isService,
                sender: e.sender,
                key: e.key,
                value: e.value,
                transactionHash: e.transactionHash,
                logIndex: (0, a.uU)(e.logIndex),
              })),
            }),
          }),
          transactionRequest: (0, d.bm)({
            exclude: [
              'customSignature',
              'factoryDeps',
              'gasPerPubdata',
              'paymaster',
              'paymasterInput',
            ],
            format: (e) =>
              e.gasPerPubdata ||
              (e.paymaster && e.paymasterInput) ||
              e.factoryDeps ||
              e.customSignature
                ? {
                    eip712Meta: {
                      ...(e.gasPerPubdata
                        ? { gasPerPubdata: (0, i.nj)(e.gasPerPubdata) }
                        : { gasPerPubdata: (0, i.nj)(50000n) }),
                      ...(e.paymaster && e.paymasterInput
                        ? {
                            paymasterParams: {
                              paymaster: e.paymaster,
                              paymasterInput: Array.from((0, s.aT)(e.paymasterInput)),
                            },
                          }
                        : {}),
                      ...(e.factoryDeps
                        ? { factoryDeps: e.factoryDeps.map((e) => Array.from((0, s.aT)(e))) }
                        : {}),
                      ...(e.customSignature
                        ? { customSignature: Array.from((0, s.aT)(e.customSignature)) }
                        : {}),
                    },
                    type: '0x71',
                  }
                : {},
          }),
        };
      var h = n(97100),
        m = n(80676),
        b = n(81599),
        y = n(7905),
        x = n(6616),
        g = n(45704),
        v = n(81734);
      class w extends x.C {
        constructor() {
          super(
            'Transaction is not an EIP712 transaction.\n\nTransaction must:\n  - include `type: "eip712"`\n  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`',
            { name: 'InvalidEip712TransactionError' }
          );
        }
      }
      function C(e) {
        return (
          'eip712' === e.type ||
          ('customSignature' in e && !!e.customSignature) ||
          ('paymaster' in e && !!e.paymaster) ||
          ('paymasterInput' in e && !!e.paymasterInput) ||
          ('gasPerPubdata' in e && 'bigint' == typeof e.gasPerPubdata) ||
          ('factoryDeps' in e && !!e.factoryDeps) ||
          !1
        );
      }
      function P(e) {
        let { chainId: t, to: n, from: r, paymaster: a, paymasterInput: s } = e;
        if (!C(e)) throw new w();
        if (!t || t <= 0) throw new g.qD({ chainId: t });
        if (n && !(0, v.P)(n)) throw new y.M({ address: n });
        if (r && !(0, v.P)(r)) throw new y.M({ address: r });
        if (a && !(0, v.P)(a)) throw new y.M({ address: a });
        if (a && !s) throw new x.C('`paymasterInput` must be provided when `paymaster` is defined');
        if (!a && s) throw new x.C('`paymaster` must be provided when `paymasterInput` is defined');
      }
      var I = n(21169),
        E = n(32819);
      class k extends x.C {
        constructor({ givenLength: e, maxBytecodeSize: t }) {
          super(`Bytecode cannot be longer than ${t} bytes. Given length: ${e}`, {
            name: 'BytecodeLengthExceedsMaxSizeError',
          });
        }
      }
      class B extends x.C {
        constructor({ givenLengthInWords: e }) {
          super(`Bytecode length in 32-byte words must be odd. Given length in words: ${e}`, {
            name: 'BytecodeLengthInWordsMustBeOddError',
          });
        }
      }
      class U extends x.C {
        constructor({ givenLength: e }) {
          super(`The bytecode length in bytes must be divisible by 32. Given length: ${e}`, {
            name: 'BytecodeLengthMustBeDivisibleBy32Error',
          });
        }
      }
      let S = (0, r.x)({
        formatters: f,
        serializers: {
          transaction: function (e, t) {
            return C(e)
              ? (function (e) {
                  let {
                    chainId: t,
                    gas: n,
                    nonce: r,
                    to: a,
                    from: s,
                    value: o,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: l,
                    customSignature: u,
                    factoryDeps: d,
                    paymaster: p,
                    paymasterInput: f,
                    gasPerPubdata: b,
                    data: y,
                  } = e;
                  P(e);
                  let x = [
                    r ? (0, i.nj)(r) : '0x',
                    l ? (0, i.nj)(l) : '0x',
                    c ? (0, i.nj)(c) : '0x',
                    n ? (0, i.nj)(n) : '0x',
                    a ?? '0x',
                    o ? (0, i.nj)(o) : '0x',
                    y ?? '0x',
                    (0, i.nj)(t),
                    (0, i.nj)(''),
                    (0, i.nj)(''),
                    (0, i.nj)(t),
                    s ?? '0x',
                    b ? (0, i.nj)(b) : (0, i.nj)(50000n),
                    d ?? [],
                    u ?? '0x',
                    p && f ? [p, f] : [],
                  ];
                  return (0, h.aP)(['0x71', (0, m.EQ)(x)]);
                })(e)
              : (0, b.b)(e, t);
          },
        },
        custom: {
          getEip712Domain: (e) => {
            P(e);
            let t = (function (e) {
              let {
                gas: t,
                nonce: n,
                to: r,
                from: a,
                value: o,
                maxFeePerGas: c,
                maxPriorityFeePerGas: l,
                factoryDeps: u,
                paymaster: d,
                paymasterInput: f,
                gasPerPubdata: h,
                data: m,
              } = e;
              return {
                txType: 113n,
                from: BigInt(a),
                to: r ? BigInt(r) : 0n,
                gasLimit: t ?? 0n,
                gasPerPubdataByteLimit: h ?? 50000n,
                maxFeePerGas: c ?? 0n,
                maxPriorityFeePerGas: l ?? 0n,
                paymaster: d ? BigInt(d) : 0n,
                nonce: n ? BigInt(n) : 0n,
                value: o ?? 0n,
                data: m ?? '0x',
                factoryDeps:
                  u?.map((e) =>
                    i.nj(
                      (function (e) {
                        let t = (0, s.ZJ)(e);
                        if (t.length % 32 != 0) throw new U({ givenLength: t.length });
                        if (t.length > p)
                          throw new k({ givenLength: t.length, maxBytecodeSize: p });
                        let n = (0, E.s)(t),
                          r = (0, s.ZJ)(n),
                          a = t.length / 32;
                        if (a % 2 == 0) throw new B({ givenLengthInWords: a });
                        let i = (0, s.ZJ)(a),
                          o = (0, I.eV)(i, { size: 2 }),
                          c = new Uint8Array([1, 0]);
                        return r.set(c, 0), r.set(o, 2), r;
                      })(e)
                    )
                  ) ?? [],
                paymasterInput: f || '0x',
              };
            })(e);
            return {
              domain: { name: 'zkSync', version: '2', chainId: e.chainId },
              types: {
                Transaction: [
                  { name: 'txType', type: 'uint256' },
                  { name: 'from', type: 'uint256' },
                  { name: 'to', type: 'uint256' },
                  { name: 'gasLimit', type: 'uint256' },
                  { name: 'gasPerPubdataByteLimit', type: 'uint256' },
                  { name: 'maxFeePerGas', type: 'uint256' },
                  { name: 'maxPriorityFeePerGas', type: 'uint256' },
                  { name: 'paymaster', type: 'uint256' },
                  { name: 'nonce', type: 'uint256' },
                  { name: 'value', type: 'uint256' },
                  { name: 'data', type: 'bytes' },
                  { name: 'factoryDeps', type: 'bytes32[]' },
                  { name: 'paymasterInput', type: 'bytes' },
                ],
              },
              primaryType: 'Transaction',
              message: t,
            };
          },
        },
        id: 324,
        name: 'ZKsync Era',
        network: 'zksync-era',
        nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
        rpcUrls: {
          default: {
            http: ['https://mainnet.era.zksync.io'],
            webSocket: ['wss://mainnet.era.zksync.io/ws'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Etherscan',
            url: 'https://era.zksync.network/',
            apiUrl: 'https://api-era.zksync.network/api',
          },
          native: {
            name: 'ZKsync Explorer',
            url: 'https://explorer.zksync.io/',
            apiUrl: 'https://block-explorer-api.mainnet.zksync.io/api',
          },
        },
        contracts: {
          multicall3: { address: '0xF9cda624FBC7e059355ce98a31693d299FACd963' },
          universalSignatureVerifier: {
            address: '0xfB688330379976DA81eB64Fe4BF50d7401763B9C',
            blockCreated: 0x2b8b4fc,
          },
        },
      });
    },
    77223: (e, t, n) => {
      'use strict';
      n.d(t, { M: () => r });
      let r = {
        gasPriceOracle: { address: '0x420000000000000000000000000000000000000F' },
        l1Block: { address: '0x4200000000000000000000000000000000000015' },
        l2CrossDomainMessenger: { address: '0x4200000000000000000000000000000000000007' },
        l2Erc721Bridge: { address: '0x4200000000000000000000000000000000000014' },
        l2StandardBridge: { address: '0x4200000000000000000000000000000000000010' },
        l2ToL1MessagePasser: { address: '0x4200000000000000000000000000000000000016' },
      };
    },
    77364: (e, t, n) => {
      'use strict';
      n.d(t, { m: () => r });
      let r = (0, n(55695).x)({
        id: 43114,
        name: 'Avalanche',
        nativeCurrency: { decimals: 18, name: 'Avalanche', symbol: 'AVAX' },
        rpcUrls: { default: { http: ['https://api.avax.network/ext/bc/C/rpc'] } },
        blockExplorers: {
          default: {
            name: 'SnowTrace',
            url: 'https://snowtrace.io',
            apiUrl: 'https://api.snowtrace.io',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0xb5b35e,
          },
        },
      });
    },
    77489: (e, t, n) => {
      'use strict';
      n.d(t, { b: () => r });
      let r = (0, n(55695).x)({
        id: 21e6,
        name: 'Corn',
        nativeCurrency: { decimals: 18, name: 'Bitcorn', symbol: 'BTCN' },
        rpcUrls: { default: { http: ['https://21000000.rpc.thirdweb.com'] } },
        blockExplorers: {
          default: {
            name: 'Corn Explorer',
            url: 'https://cornscan.io',
            apiUrl: 'https://api.routescan.io/v2/network/mainnet/evm/21000000/etherscan/api',
          },
        },
        contracts: {
          multicall3: { address: '0xcA11bde05977b3631167028862bE2a173976CA11', blockCreated: 3228 },
        },
        sourceId: 1,
      });
    },
    78158: (e, t, n) => {
      'use strict';
      n.d(t, { E: () => a });
      var r = n(11142);
      let a = (0, n(55695).x)({
        ...r.o,
        id: 8453,
        name: 'Base',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://mainnet.base.org'] } },
        blockExplorers: {
          default: {
            name: 'Basescan',
            url: 'https://basescan.org',
            apiUrl: 'https://api.basescan.org/api',
          },
        },
        contracts: {
          ...r.o.contracts,
          disputeGameFactory: { 1: { address: '0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e' } },
          l2OutputOracle: { 1: { address: '0x56315b90c40730925ec5485cf004d835058518A0' } },
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11', blockCreated: 5022 },
          portal: {
            1: { address: '0x49048044D57e1C92A77f79988d21Fa8fAF74E97e', blockCreated: 0x10ac19f },
          },
          l1StandardBridge: {
            1: { address: '0x3154Cf16ccdb4C6d922629664174b904d80F2C35', blockCreated: 0x10ac19f },
          },
        },
        sourceId: 1,
      });
    },
    80572: (e, t, n) => {
      'use strict';
      let r;
      n.d(t, { Z: () => w });
      var a = n(98875);
      let s = (e) => (t, n, r) => {
          let a = r.subscribe;
          return (
            (r.subscribe = (e, t, n) => {
              let s = e;
              if (t) {
                let a = (null == n ? void 0 : n.equalityFn) || Object.is,
                  i = e(r.getState());
                (s = (n) => {
                  let r = e(n);
                  if (!a(i, r)) {
                    let e = i;
                    t((i = r), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(i, i);
              }
              return a(s);
            }),
            e(t, n, r)
          );
        },
        i = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => i(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => i(t)(e),
            };
          }
        },
        o = (e, t) => (n, r, a) => {
          let s,
            o = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let r = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      a = null != (t = n.getItem(e)) ? t : null;
                    return a instanceof Promise ? a.then(r) : r(a);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
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
            d = o.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              a
            );
          let p = () => {
              let e = o.partialize({ ...r() });
              return d.setItem(o.name, { state: e, version: o.version });
            },
            f = a.setState;
          a.setState = (e, t) => {
            f(e, t), p();
          };
          let h = e(
            (...e) => {
              n(...e), p();
            },
            r,
            a
          );
          a.getInitialState = () => h;
          let m = () => {
            var e, t;
            if (!d) return;
            (c = !1),
              l.forEach((e) => {
                var t;
                return e(null != (t = r()) ? t : h);
              });
            let a =
              (null == (t = o.onRehydrateStorage)
                ? void 0
                : t.call(o, null != (e = r()) ? e : h)) || void 0;
            return i(d.getItem.bind(d))(o.name)
              .then((e) => {
                if (e) {
                  if ('number' != typeof e.version || e.version === o.version) return [!1, e.state];
                  if (o.migrate) return [!0, o.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [a, i] = e;
                if ((n((s = o.merge(i, null != (t = r()) ? t : h)), !0), a)) return p();
              })
              .then(() => {
                null == a || a(s, void 0), (s = r()), (c = !0), u.forEach((e) => e(s));
              })
              .catch((e) => {
                null == a || a(void 0, e);
              });
          };
          return (
            (a.persist = {
              setOptions: (e) => {
                (o = { ...o, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(o.name);
              },
              getOptions: () => o,
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
            o.skipHydration || m(),
            s || h
          );
        },
        c = (e) => {
          let t;
          let n = new Set(),
            r = (e, r) => {
              let a = 'function' == typeof e ? e(t) : e;
              if (!Object.is(a, t)) {
                let e = t;
                (t = (null != r ? r : 'object' != typeof a || null === a)
                  ? a
                  : Object.assign({}, t, a)),
                  n.forEach((n) => n(t, e));
              }
            },
            a = () => t,
            s = {
              setState: r,
              getState: a,
              getInitialState: () => i,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            i = (t = e(r, a, s));
          return s;
        },
        l = (e) => (e ? c(e) : c);
      var u = n(90046),
        d = n(17709);
      class p {
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
              value: new d.b(),
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
      function f(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === 'bigint' && (r = BigInt(r.value)),
            r?.__type === 'Map' && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function h(e, t) {
        return e.slice(0, t).join('.') || '.';
      }
      function m(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function b(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = 'function' == typeof e,
              r = 'function' == typeof t,
              a = [],
              s = [];
            return function (i, o) {
              if ('object' == typeof o) {
                if (a.length) {
                  let e = m(a, this);
                  0 === e ? (a[a.length] = this) : (a.splice(e), s.splice(e)), (s[s.length] = i);
                  let n = m(a, o);
                  if (0 !== n) return r ? t.call(this, i, o, h(s, n)) : `[ref=${h(s, n)}]`;
                } else (a[0] = o), (s[0] = i);
              }
              return n ? e.call(this, i, o) : o;
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
      let y = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var x = n(54077);
      let g = 256;
      var v = n(151);
      function w(e) {
        let t;
        let {
            multiInjectedProviderDiscovery: n = !0,
            storage: i = (function (e) {
              let { deserialize: t = f, key: n = 'wagmi', serialize: r = b, storage: a = y } = e;
              function s(e) {
                return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
              }
              return {
                ...a,
                key: n,
                async getItem(e, r) {
                  let i = a.getItem(`${n}.${e}`),
                    o = await s(i);
                  return o ? (t(o) ?? null) : (r ?? null);
                },
                async setItem(e, t) {
                  let i = `${n}.${e}`;
                  null === t ? await s(a.removeItem(i)) : await s(a.setItem(i, r(t)));
                },
                async removeItem(e) {
                  await s(a.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  'undefined' != typeof window && window.localStorage ? window.localStorage : y;
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
            ssr: d = !1,
            ...h
          } = e,
          m =
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
          w = l(() => h.chains),
          C = l(() => {
            let e = [],
              t = new Set();
            for (let n of h.connectors ?? []) {
              let r = P(n);
              if ((e.push(r), !d && r.rdns))
                for (let e of 'string' == typeof r.rdns ? [r.rdns] : r.rdns) t.add(e);
            }
            if (!d && m) for (let n of m.getProviders()) t.has(n.info.rdns) || e.push(P(I(n)));
            return e;
          });
        function P(e) {
          let t = new p(
              (function (e = 11) {
                if (!r || g + e > 512) {
                  (r = ''), (g = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
                }
                return r.substring(g, g++ + e);
              })()
            ),
            n = {
              ...e({ emitter: t, chains: w.getState(), storage: i, transports: h.transports }),
              emitter: t,
              uid: t.uid,
            };
          return t.on('connect', j), n.setup?.(), n;
        }
        function I(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, u.b)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let E = new Map();
        function k() {
          return {
            chainId: w.getState()[0].id,
            connections: new Map(),
            current: null,
            status: 'disconnected',
          };
        }
        let B = '0.0.0-canary-';
        t = v.r.startsWith(B)
          ? Number.parseInt(v.r.replace(B, ''))
          : Number.parseInt(v.r.split('.')[0] ?? '0');
        let U = l(
          s(
            i
              ? o(k, {
                  migrate(e, n) {
                    if (n === t) return e;
                    let r = k(),
                      a = S(e, r.chainId);
                    return { ...r, chainId: a };
                  },
                  name: 'store',
                  partialize: (e) => ({
                    connections: {
                      __type: 'Map',
                      value: Array.from(e.connections.entries()).map(([e, t]) => {
                        let { id: n, name: r, type: a, uid: s } = t.connector;
                        return [e, { ...t, connector: { id: n, name: r, type: a, uid: s } }];
                      }),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  merge(e, t) {
                    'object' == typeof e && e && 'status' in e && delete e.status;
                    let n = S(e, t.chainId);
                    return { ...t, ...e, chainId: n };
                  },
                  skipHydration: d,
                  storage: i,
                  version: t,
                })
              : k
          )
        );
        function S(e, t) {
          return e &&
            'object' == typeof e &&
            'chainId' in e &&
            'number' == typeof e.chainId &&
            w.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function A(e) {
          U.setState((t) => {
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
        function j(e) {
          'connecting' !== U.getState().status &&
            'reconnecting' !== U.getState().status &&
            U.setState((t) => {
              let n = C.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount('connect') && n.emitter.off('connect', A),
                  n.emitter.listenerCount('change') || n.emitter.on('change', A),
                  n.emitter.listenerCount('disconnect') || n.emitter.on('disconnect', M),
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
        function M(e) {
          U.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount('change') && n.connector.emitter.off('change', A),
                e.emitter.listenerCount('disconnect') && n.connector.emitter.off('disconnect', M),
                e.emitter.listenerCount('connect') || n.connector.emitter.on('connect', j);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return { ...t, connections: new Map(), current: null, status: 'disconnected' };
            let r = t.connections.values().next().value;
            return { ...t, connections: new Map(t.connections), current: r.connector.uid };
          });
        }
        return (
          U.setState(k()),
          c &&
            U.subscribe(
              ({ connections: e, current: t }) => (t ? e.get(t)?.chainId : void 0),
              (e) => {
                if (w.getState().some((t) => t.id === e))
                  return U.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          m?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of C.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of 'string' == typeof e.rdns ? [e.rdns] : e.rdns) n.add(t);
            let r = [];
            for (let a of e) {
              if (n.has(a.info.rdns)) continue;
              let e = P(I(a));
              t.has(e.id) || r.push(e);
            }
            (!i || U.persist.hasHydrated()) && C.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return w.getState();
            },
            get connectors() {
              return C.getState();
            },
            storage: i,
            getClient: function (e = {}) {
              let t;
              let n = e.chainId ?? U.getState().chainId,
                r = w.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new x.nk();
              {
                let e = E.get(U.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new x.nk();
              }
              {
                let e = E.get(n);
                if (e) return e;
              }
              if (h.client) t = h.client({ chain: r });
              else {
                let e = r.id,
                  n = w.getState().map((e) => e.id),
                  s = {};
                for (let [t, r] of Object.entries(h))
                  if (
                    'chains' !== t &&
                    'client' !== t &&
                    'connectors' !== t &&
                    'transports' !== t
                  ) {
                    if ('object' == typeof r) {
                      if (e in r) s[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        s[t] = r;
                      }
                    } else s[t] = r;
                  }
                t = (0, a.U)({
                  ...s,
                  chain: r,
                  batch: s.batch ?? { multicall: !0 },
                  transport: (t) => h.transports[e]({ ...t, connectors: C }),
                });
              }
              return E.set(n, t), t;
            },
            get state() {
              return U.getState();
            },
            setState(e) {
              let t;
              t = 'function' == typeof e ? e(U.getState()) : e;
              let n = k();
              'object' != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                U.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              U.subscribe(e, t, n ? { ...n, fireImmediately: n.emitImmediately } : void 0),
            _internal: {
              mipd: m,
              store: U,
              ssr: !!d,
              syncConnectedChain: c,
              transports: h.transports,
              chains: {
                setState(e) {
                  let t = 'function' == typeof e ? e(w.getState()) : e;
                  if (0 !== t.length) return w.setState(t, !0);
                },
                subscribe: (e) => w.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: I,
                setup: P,
                setState: (e) => C.setState('function' == typeof e ? e(C.getState()) : e, !0),
                subscribe: (e) => C.subscribe(e),
              },
              events: { change: A, connect: j, disconnect: M },
            },
          }
        );
      }
    },
    80676: (e, t, n) => {
      'use strict';
      n.d(t, { EQ: () => o });
      var r = n(6616),
        a = n(57633),
        s = n(30761),
        i = n(82663);
      function o(e, t = 'hex') {
        let n = (function e(t) {
            return Array.isArray(t)
              ? (function (e) {
                  let t = e.reduce((e, t) => e + t.length, 0),
                    n = c(t);
                  return {
                    length: t <= 55 ? 1 + t : 1 + n + t,
                    encode(r) {
                      for (let { encode: a } of (t <= 55
                        ? r.pushByte(192 + t)
                        : (r.pushByte(247 + n),
                          1 === n
                            ? r.pushUint8(t)
                            : 2 === n
                              ? r.pushUint16(t)
                              : 3 === n
                                ? r.pushUint24(t)
                                : r.pushUint32(t)),
                      e))
                        a(r);
                    },
                  };
                })(t.map((t) => e(t)))
              : (function (e) {
                  let t = 'string' == typeof e ? (0, s.aT)(e) : e,
                    n = c(t.length);
                  return {
                    length:
                      1 === t.length && t[0] < 128
                        ? 1
                        : t.length <= 55
                          ? 1 + t.length
                          : 1 + n + t.length,
                    encode(e) {
                      (1 === t.length && t[0] < 128) ||
                        (t.length <= 55
                          ? e.pushByte(128 + t.length)
                          : (e.pushByte(183 + n),
                            1 === n
                              ? e.pushUint8(t.length)
                              : 2 === n
                                ? e.pushUint16(t.length)
                                : 3 === n
                                  ? e.pushUint24(t.length)
                                  : e.pushUint32(t.length))),
                        e.pushBytes(t);
                    },
                  };
                })(t);
          })(e),
          r = (0, a.l)(new Uint8Array(n.length));
        return (n.encode(r), 'hex' === t) ? (0, i.My)(r.bytes) : r.bytes;
      }
      function c(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new r.C('Length is too large.');
      }
    },
    81599: (e, t, n) => {
      'use strict';
      n.d(t, { b: () => U, Z: () => S });
      var r = n(26769),
        a = n(82663),
        s = n(30761);
      function i(e) {
        let { kzg: t } = e,
          n = e.to ?? ('string' == typeof e.blobs[0] ? 'hex' : 'bytes'),
          r = 'string' == typeof e.blobs[0] ? e.blobs.map((e) => (0, s.aT)(e)) : e.blobs,
          i = [];
        for (let e of r) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return 'bytes' === n ? i : i.map((e) => (0, a.My)(e));
      }
      function o(e) {
        let { kzg: t } = e,
          n = e.to ?? ('string' == typeof e.blobs[0] ? 'hex' : 'bytes'),
          r = 'string' == typeof e.blobs[0] ? e.blobs.map((e) => (0, s.aT)(e)) : e.blobs,
          i =
            'string' == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, s.aT)(e))
              : e.commitments,
          o = [];
        for (let e = 0; e < r.length; e++) {
          let n = r[e],
            a = i[e];
          o.push(Uint8Array.from(t.computeBlobKzgProof(n, a)));
        }
        return 'bytes' === n ? o : o.map((e) => (0, a.My)(e));
      }
      var c = n(32819),
        l = n(6616);
      class u extends l.C {
        constructor({ maxSize: e, size: t }) {
          super('Blob size is too large.', {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: 'BlobSizeTooLargeError',
          });
        }
      }
      class d extends l.C {
        constructor() {
          super('Blob data must not be empty.', { name: 'EmptyBlobError' });
        }
      }
      class p extends l.C {
        constructor({ hash: e, size: t }) {
          super(`Versioned hash "${e}" size is invalid.`, {
            metaMessages: ['Expected: 32', `Received: ${t}`],
            name: 'InvalidVersionedHashSizeError',
          });
        }
      }
      class f extends l.C {
        constructor({ hash: e, version: t }) {
          super(`Versioned hash "${e}" version is invalid.`, {
            metaMessages: ['Expected: 1', `Received: ${t}`],
            name: 'InvalidVersionedHashVersionError',
          });
        }
      }
      var h = n(57633),
        m = n(15465),
        b = n(97100),
        y = n(9036),
        x = n(80676),
        g = n(39362),
        v = n(7905),
        w = n(45704),
        C = n(24887),
        P = n(81734),
        I = n(60510),
        E = n(42960);
      function k(e) {
        let { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: a } = e;
        if (t <= 0) throw new w.qD({ chainId: t });
        if (a && !(0, P.P)(a)) throw new v.M({ address: a });
        if (r && r > g.Ao) throw new C.BG({ maxFeePerGas: r });
        if (n && r && n > r) throw new C.lN({ maxFeePerGas: r, maxPriorityFeePerGas: n });
      }
      var B = n(92758);
      function U(e, t) {
        let n = (function (e) {
          if (e.type) return e.type;
          if (void 0 !== e.authorizationList) return 'eip7702';
          if (
            void 0 !== e.blobs ||
            void 0 !== e.blobVersionedHashes ||
            void 0 !== e.maxFeePerBlobGas ||
            void 0 !== e.sidecars
          )
            return 'eip4844';
          if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return 'eip1559';
          if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? 'eip2930' : 'legacy';
          throw new r.Vg({ transaction: e });
        })(e);
        return 'eip1559' === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                nonce: s,
                to: i,
                value: o,
                maxFeePerGas: c,
                maxPriorityFeePerGas: l,
                accessList: u,
                data: d,
              } = e;
              k(e);
              let p = (0, B.f)(u),
                f = [
                  (0, a.nj)(n),
                  s ? (0, a.nj)(s) : '0x',
                  l ? (0, a.nj)(l) : '0x',
                  c ? (0, a.nj)(c) : '0x',
                  r ? (0, a.nj)(r) : '0x',
                  i ?? '0x',
                  o ? (0, a.nj)(o) : '0x',
                  d ?? '0x',
                  p,
                  ...S(e, t),
                ];
              return (0, b.aP)(['0x02', (0, x.EQ)(f)]);
            })(e, t)
          : 'eip2930' === n
            ? (function (e, t) {
                let {
                  chainId: n,
                  gas: r,
                  data: s,
                  nonce: i,
                  to: o,
                  value: c,
                  accessList: u,
                  gasPrice: d,
                } = e;
                !(function (e) {
                  let {
                    chainId: t,
                    maxPriorityFeePerGas: n,
                    gasPrice: r,
                    maxFeePerGas: a,
                    to: s,
                  } = e;
                  if (t <= 0) throw new w.qD({ chainId: t });
                  if (s && !(0, P.P)(s)) throw new v.M({ address: s });
                  if (n || a)
                    throw new l.C(
                      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.'
                    );
                  if (r && r > g.Ao) throw new C.BG({ maxFeePerGas: r });
                })(e);
                let p = (0, B.f)(u),
                  f = [
                    (0, a.nj)(n),
                    i ? (0, a.nj)(i) : '0x',
                    d ? (0, a.nj)(d) : '0x',
                    r ? (0, a.nj)(r) : '0x',
                    o ?? '0x',
                    c ? (0, a.nj)(c) : '0x',
                    s ?? '0x',
                    p,
                    ...S(e, t),
                  ];
                return (0, b.aP)(['0x01', (0, x.EQ)(f)]);
              })(e, t)
            : 'eip4844' === n
              ? (function (e, t) {
                  let {
                    chainId: n,
                    gas: r,
                    nonce: l,
                    to: y,
                    value: g,
                    maxFeePerBlobGas: v,
                    maxFeePerGas: w,
                    maxPriorityFeePerGas: C,
                    accessList: P,
                    data: U,
                  } = e;
                  !(function (e) {
                    let { blobVersionedHashes: t } = e;
                    if (t) {
                      if (0 === t.length) throw new d();
                      for (let e of t) {
                        let t = (0, m.E)(e),
                          n = (0, E.ME)((0, I.di)(e, 0, 1));
                        if (32 !== t) throw new p({ hash: e, size: t });
                        if (1 !== n) throw new f({ hash: e, version: n });
                      }
                    }
                    k(e);
                  })(e);
                  let A = e.blobVersionedHashes,
                    j = e.sidecars;
                  if (e.blobs && (void 0 === A || void 0 === j)) {
                    let t =
                        'string' == typeof e.blobs[0] ? e.blobs : e.blobs.map((e) => (0, a.My)(e)),
                      n = e.kzg,
                      r = i({ blobs: t, kzg: n });
                    if (
                      (void 0 === A &&
                        (A = (function (e) {
                          let { commitments: t, version: n } = e,
                            r = e.to ?? ('string' == typeof t[0] ? 'hex' : 'bytes'),
                            s = [];
                          for (let e of t)
                            s.push(
                              (function (e) {
                                let { commitment: t, version: n = 1 } = e,
                                  r = e.to ?? ('string' == typeof t ? 'hex' : 'bytes'),
                                  s = (0, c.s)(t, 'bytes');
                                return s.set([n], 0), 'bytes' === r ? s : (0, a.My)(s);
                              })({ commitment: e, to: r, version: n })
                            );
                          return s;
                        })({ commitments: r })),
                      void 0 === j)
                    ) {
                      let e = o({ blobs: t, commitments: r, kzg: n });
                      j = (function (e) {
                        let { data: t, kzg: n, to: r } = e,
                          c =
                            e.blobs ??
                            (function (e) {
                              let t = e.to ?? ('string' == typeof e.data ? 'hex' : 'bytes'),
                                n = 'string' == typeof e.data ? (0, s.aT)(e.data) : e.data,
                                r = (0, m.E)(n);
                              if (!r) throw new d();
                              if (r > 761855) throw new u({ maxSize: 761855, size: r });
                              let i = [],
                                o = !0,
                                c = 0;
                              for (; o; ) {
                                let e = (0, h.l)(new Uint8Array(131072)),
                                  t = 0;
                                for (; t < 4096; ) {
                                  let r = n.slice(c, c + 31);
                                  if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
                                    e.pushByte(128), (o = !1);
                                    break;
                                  }
                                  t++, (c += 31);
                                }
                                i.push(e);
                              }
                              return 'bytes' === t
                                ? i.map((e) => e.bytes)
                                : i.map((e) => (0, a.My)(e.bytes));
                            })({ data: t, to: r }),
                          l = e.commitments ?? i({ blobs: c, kzg: n, to: r }),
                          p = e.proofs ?? o({ blobs: c, commitments: l, kzg: n, to: r }),
                          f = [];
                        for (let e = 0; e < c.length; e++)
                          f.push({ blob: c[e], commitment: l[e], proof: p[e] });
                        return f;
                      })({ blobs: t, commitments: r, proofs: e });
                    }
                  }
                  let M = (0, B.f)(P),
                    F = [
                      (0, a.nj)(n),
                      l ? (0, a.nj)(l) : '0x',
                      C ? (0, a.nj)(C) : '0x',
                      w ? (0, a.nj)(w) : '0x',
                      r ? (0, a.nj)(r) : '0x',
                      y ?? '0x',
                      g ? (0, a.nj)(g) : '0x',
                      U ?? '0x',
                      M,
                      v ? (0, a.nj)(v) : '0x',
                      A ?? [],
                      ...S(e, t),
                    ],
                    G = [],
                    O = [],
                    T = [];
                  if (j)
                    for (let e = 0; e < j.length; e++) {
                      let { blob: t, commitment: n, proof: r } = j[e];
                      G.push(t), O.push(n), T.push(r);
                    }
                  return (0, b.aP)(['0x03', j ? (0, x.EQ)([F, G, O, T]) : (0, x.EQ)(F)]);
                })(e, t)
              : 'eip7702' === n
                ? (function (e, t) {
                    let {
                      authorizationList: n,
                      chainId: r,
                      gas: s,
                      nonce: i,
                      to: o,
                      value: c,
                      maxFeePerGas: l,
                      maxPriorityFeePerGas: u,
                      accessList: d,
                      data: p,
                    } = e;
                    !(function (e) {
                      let { authorizationList: t } = e;
                      if (t)
                        for (let e of t) {
                          let { chainId: t } = e,
                            n = e.address;
                          if (!(0, P.P)(n)) throw new v.M({ address: n });
                          if (t < 0) throw new w.qD({ chainId: t });
                        }
                      k(e);
                    })(e);
                    let f = (0, B.f)(d),
                      h = (function (e) {
                        if (!e || 0 === e.length) return [];
                        let t = [];
                        for (let n of e) {
                          let { chainId: e, nonce: r, ...s } = n,
                            i = n.address;
                          t.push([
                            e ? (0, a.nj)(e) : '0x',
                            i,
                            r ? (0, a.nj)(r) : '0x',
                            ...S({}, s),
                          ]);
                        }
                        return t;
                      })(n);
                    return (0, b.aP)([
                      '0x04',
                      (0, x.EQ)([
                        (0, a.nj)(r),
                        i ? (0, a.nj)(i) : '0x',
                        u ? (0, a.nj)(u) : '0x',
                        l ? (0, a.nj)(l) : '0x',
                        s ? (0, a.nj)(s) : '0x',
                        o ?? '0x',
                        c ? (0, a.nj)(c) : '0x',
                        p ?? '0x',
                        f,
                        h,
                        ...S(e, t),
                      ]),
                    ]);
                  })(e, t)
                : (function (e, t) {
                    let {
                      chainId: n = 0,
                      gas: s,
                      data: i,
                      nonce: o,
                      to: c,
                      value: u,
                      gasPrice: d,
                    } = e;
                    !(function (e) {
                      let {
                        chainId: t,
                        maxPriorityFeePerGas: n,
                        gasPrice: r,
                        maxFeePerGas: a,
                        to: s,
                      } = e;
                      if (s && !(0, P.P)(s)) throw new v.M({ address: s });
                      if (void 0 !== t && t <= 0) throw new w.qD({ chainId: t });
                      if (n || a)
                        throw new l.C(
                          '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.'
                        );
                      if (r && r > g.Ao) throw new C.BG({ maxFeePerGas: r });
                    })(e);
                    let p = [
                      o ? (0, a.nj)(o) : '0x',
                      d ? (0, a.nj)(d) : '0x',
                      s ? (0, a.nj)(s) : '0x',
                      c ?? '0x',
                      u ? (0, a.nj)(u) : '0x',
                      i ?? '0x',
                    ];
                    if (t) {
                      let e = (() => {
                          if (t.v >= 35n)
                            return (t.v - 35n) / 2n > 0 ? t.v : 27n + (35n === t.v ? 0n : 1n);
                          if (n > 0) return BigInt(2 * n) + BigInt(35n + t.v - 27n);
                          let e = 27n + (27n === t.v ? 0n : 1n);
                          if (t.v !== e) throw new r.zW({ v: t.v });
                          return e;
                        })(),
                        s = (0, y.B)(t.r),
                        i = (0, y.B)(t.s);
                      p = [...p, (0, a.nj)(e), '0x00' === s ? '0x' : s, '0x00' === i ? '0x' : i];
                    } else n > 0 && (p = [...p, (0, a.nj)(n), '0x', '0x']);
                    return (0, x.EQ)(p);
                  })(e, t);
      }
      function S(e, t) {
        let n = t ?? e,
          { v: r, yParity: s } = n;
        if (void 0 === n.r || void 0 === n.s || (void 0 === r && void 0 === s)) return [];
        let i = (0, y.B)(n.r),
          o = (0, y.B)(n.s);
        return [
          'number' == typeof s
            ? s
              ? (0, a.nj)(1)
              : '0x'
            : 0n === r
              ? '0x'
              : 1n === r
                ? (0, a.nj)(1)
                : 27n === r
                  ? '0x'
                  : (0, a.nj)(1),
          '0x00' === i ? '0x' : i,
          '0x00' === o ? '0x' : o,
        ];
      }
    },
    82099: (e, t, n) => {
      'use strict';
      n.d(t, { E: () => r });
      var r = function () {
        return null;
      };
    },
    84693: (e, t, n) => {
      'use strict';
      n.d(t, { T: () => r });
      let r = (0, n(55695).x)({
        id: 146,
        name: 'Sonic',
        nativeCurrency: { decimals: 18, name: 'Sonic', symbol: 'S' },
        rpcUrls: { default: { http: ['https://rpc.soniclabs.com'] } },
        blockExplorers: { default: { name: 'Sonic Explorer', url: 'https://sonicscan.org' } },
        contracts: {
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11', blockCreated: 60 },
        },
        testnet: !1,
      });
    },
    87240: (e, t, n) => {
      'use strict';
      n.d(t, { L: () => d });
      var r = n(88044),
        a = n(6616);
      class s extends a.C {
        constructor() {
          super(
            'No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.',
            { docsPath: '/docs/clients/intro', name: 'UrlRequiredError' }
          );
        }
      }
      var i = n(73282),
        o = n(14768),
        c = n(85552);
      let l = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var u = n(12052);
      function d(e, t = {}) {
        let {
          batch: n,
          fetchOptions: a,
          key: p = 'http',
          methods: f,
          name: h = 'HTTP JSON-RPC',
          onFetchRequest: m,
          onFetchResponse: b,
          retryDelay: y,
          raw: x,
        } = t;
        return ({ chain: d, retryCount: g, timeout: v }) => {
          let { batchSize: w = 1e3, wait: C = 0 } = 'object' == typeof n ? n : {},
            P = t.retryCount ?? g,
            I = v ?? t.timeout ?? 1e4,
            E = e || d?.rpcUrls.default.http[0];
          if (!E) throw new s();
          let k = (function (e, t = {}) {
            return {
              async request(n) {
                let {
                    body: a,
                    onRequest: s = t.onRequest,
                    onResponse: i = t.onResponse,
                    timeout: u = t.timeout ?? 1e4,
                  } = n,
                  d = { ...(t.fetchOptions ?? {}), ...(n.fetchOptions ?? {}) },
                  { headers: p, method: f, signal: h } = d;
                try {
                  let t;
                  let n = await (0, o.w)(
                    async ({ signal: t }) => {
                      let n = {
                          ...d,
                          body: Array.isArray(a)
                            ? (0, c.A)(
                                a.map((e) => ({ jsonrpc: '2.0', id: e.id ?? l.take(), ...e }))
                              )
                            : (0, c.A)({ jsonrpc: '2.0', id: a.id ?? l.take(), ...a }),
                          headers: { 'Content-Type': 'application/json', ...p },
                          method: f || 'POST',
                          signal: h || (u > 0 ? t : null),
                        },
                        r = new Request(e, n),
                        i = (await s?.(r, n)) ?? { ...n, url: e };
                      return await fetch(i.url ?? e, i);
                    },
                    { errorInstance: new r.MU({ body: a, url: e }), timeout: u, signal: !0 }
                  );
                  if (
                    (i && (await i(n)),
                    n.headers.get('Content-Type')?.startsWith('application/json'))
                  )
                    t = await n.json();
                  else {
                    t = await n.text();
                    try {
                      t = JSON.parse(t || '{}');
                    } catch (e) {
                      if (n.ok) throw e;
                      t = { error: t };
                    }
                  }
                  if (!n.ok)
                    throw new r.Ci({
                      body: a,
                      details: (0, c.A)(t.error) || n.statusText,
                      headers: n.headers,
                      status: n.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof r.Ci || t instanceof r.MU) throw t;
                  throw new r.Ci({ body: a, cause: t, url: e });
                }
              },
            };
          })(E, { fetchOptions: a, onRequest: m, onResponse: b, timeout: I });
          return (0, u.o)(
            {
              key: p,
              methods: f,
              name: h,
              async request({ method: e, params: t }) {
                let a = { method: e, params: t },
                  { schedule: s } = (0, i.u)({
                    id: E,
                    wait: C,
                    shouldSplitBatch: (e) => e.length > w,
                    fn: (e) => k.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  o = async (e) => (n ? s(e) : [await k.request({ body: e })]),
                  [{ error: c, result: l }] = await o(a);
                if (x) return { error: c, result: l };
                if (c) throw new r.J8({ body: a, error: c, url: E });
                return l;
              },
              retryCount: P,
              retryDelay: y,
              timeout: I,
              type: 'http',
            },
            { fetchOptions: a, url: E }
          );
        };
      }
    },
    88456: (e, t, n) => {
      'use strict';
      n.d(t, { so: () => o });
      var r = n(7620);
      n(97509);
      let a = r.createContext(null);
      function s(e) {
        let { children: t } = e,
          n = (0, r.useContext)(a),
          [s, i] = (0, r.useState)(0),
          o = (0, r.useMemo)(
            () => ({
              parent: n,
              modalCount: s,
              addModal() {
                i((e) => e + 1), n && n.addModal();
              },
              removeModal() {
                i((e) => e - 1), n && n.removeModal();
              },
            }),
            [n, s]
          );
        return r.createElement(a.Provider, { value: o }, t);
      }
      function i(e) {
        let t;
        let { modalProviderProps: n } = {
          modalProviderProps: {
            'aria-hidden': (!!(t = (0, r.useContext)(a)) && t.modalCount > 0) || void 0,
          },
        };
        return r.createElement('div', { 'data-overlay-container': !0, ...e, ...n });
      }
      function o(e) {
        return r.createElement(s, null, r.createElement(i, e));
      }
    },
    89601: (e, t, n) => {
      'use strict';
      n.d(t, { N: () => r });
      let r = (0, n(55695).x)({
        id: 56,
        name: 'BNB Smart Chain',
        nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
        rpcUrls: { default: { http: ['https://56.rpc.thirdweb.com'] } },
        blockExplorers: {
          default: {
            name: 'BscScan',
            url: 'https://bscscan.com',
            apiUrl: 'https://api.bscscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0xf2f12c,
          },
        },
      });
    },
    92041: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => s });
      var r = n(69879),
        a = n(54568);
      let s = (0, r.A)(
        (0, a.jsx)('path', {
          d: 'M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20zm-4 4v3c0 .22-.03.47-.07.7l-.1.65-.37.65c-.72 1.24-2.04 2-3.46 2s-2.74-.77-3.46-2l-.37-.64-.1-.65C8.03 15.48 8 15.23 8 15v-4c0-.23.03-.48.07-.7l.1-.65.37-.65c.3-.52.72-.97 1.21-1.31l.57-.39.74-.18c.31-.08.63-.12.94-.12.32 0 .63.04.95.12l.68.16.61.42c.5.34.91.78 1.21 1.31l.38.65.1.65c.04.22.07.47.07.69zm-6 2h4v2h-4zm0-4h4v2h-4z',
        }),
        'BugReportOutlined'
      );
    },
    92758: (e, t, n) => {
      'use strict';
      n.d(t, { f: () => i });
      var r = n(7905),
        a = n(26769),
        s = n(81734);
      function i(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let { address: i, storageKeys: o } = e[n];
          for (let e = 0; e < o.length; e++)
            if (o[e].length - 2 != 64) throw new a.fZ({ storageKey: o[e] });
          if (!(0, s.P)(i, { strict: !1 })) throw new r.M({ address: i });
          t.push([i, o]);
        }
        return t;
      }
    },
    92994: (e) => {
      'use strict';
      var t = Object.prototype.hasOwnProperty,
        n = '~';
      function r() {}
      function a(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function s(e, t, r, s, i) {
        if ('function' != typeof r) throw TypeError('The listener must be a function');
        var o = new a(r, s || e, i),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function i(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function o() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            r,
            a = [];
          if (0 === this._eventsCount) return a;
          for (r in (e = this._events)) t.call(e, r) && a.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(e)) : a;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var a = 0, s = r.length, i = Array(s); a < s; a++) i[a] = r[a].fn;
          return i;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (o.prototype.emit = function (e, t, r, a, s, i) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            l,
            u = this._events[o],
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
                return u.fn.call(u.context, t, r, a), !0;
              case 5:
                return u.fn.call(u.context, t, r, a, s), !0;
              case 6:
                return u.fn.call(u.context, t, r, a, s, i), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var p,
              f = u.length;
            for (l = 0; l < f; l++)
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
                  u[l].fn.call(u[l].context, t, r, a);
                  break;
                default:
                  if (!c) for (p = 1, c = Array(d - 1); p < d; p++) c[p - 1] = arguments[p];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, n) {
          return s(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return s(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, r, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return this;
          if (!t) return i(this, s), this;
          var o = this._events[s];
          if (o.fn) o.fn !== t || (a && !o.once) || (r && o.context !== r) || i(this, s);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t || (a && !o[c].once) || (r && o[c].context !== r)) && l.push(o[c]);
            l.length ? (this._events[s] = 1 === l.length ? l[0] : l) : i(this, s);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && i(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    94958: (e, t, n) => {
      'use strict';
      n.d(t, { _: () => r });
      let r = (0, n(55695).x)({
        id: 196,
        name: 'X Layer Mainnet',
        nativeCurrency: { decimals: 18, name: 'OKB', symbol: 'OKB' },
        rpcUrls: { default: { http: ['https://rpc.xlayer.tech'] } },
        blockExplorers: {
          default: {
            name: 'OKLink',
            url: 'https://www.oklink.com/xlayer',
            apiUrl: 'https://www.oklink.com/api/v5/explorer/xlayer/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 47416,
          },
        },
      });
    },
  },
]);
