'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7740],
  {
    98882: function (t, e, n) {
      n.d(e, {
        JQ: function () {
          return h;
        },
      });
      var i = n(12106),
        r = n(79318);
      class s extends r.kb {
        constructor(t, e, n, i) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = n),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, r.GL)(this.buffer));
        }
        update(t) {
          (0, i.$h)(this);
          let { view: e, buffer: n, blockLen: s } = this,
            o = (t = (0, r.O0)(t)).length;
          for (let i = 0; i < o; ) {
            let l = Math.min(s - this.pos, o - i);
            if (l === s) {
              let e = (0, r.GL)(t);
              for (; s <= o - i; i += s) this.process(e, i);
              continue;
            }
            n.set(t.subarray(i, i + l), this.pos),
              (this.pos += l),
              (i += l),
              this.pos === s && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, i.$h)(this), (0, i.eB)(t, this), (this.finished = !0);
          let { buffer: e, view: n, blockLen: s, isLE: o } = this,
            { pos: l } = this;
          (e[l++] = 128),
            this.buffer.subarray(l).fill(0),
            this.padOffset > s - l && (this.process(n, 0), (l = 0));
          for (let t = l; t < s; t++) e[t] = 0;
          !(function (t, e, n, i) {
            if ('function' == typeof t.setBigUint64) return t.setBigUint64(e, n, i);
            let r = BigInt(32),
              s = BigInt(4294967295),
              o = Number((n >> r) & s),
              l = Number(n & s),
              a = i ? 4 : 0,
              u = i ? 0 : 4;
            t.setUint32(e + a, o, i), t.setUint32(e + u, l, i);
          })(n, s - 8, BigInt(8 * this.length), o),
            this.process(n, 0);
          let a = (0, r.GL)(t),
            u = this.outputLen;
          if (u % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let h = u / 4,
            f = this.get();
          if (h > f.length) throw Error('_sha2: outputLen bigger than state');
          for (let t = 0; t < h; t++) a.setUint32(4 * t, f[t], o);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let n = t.slice(0, e);
          return this.destroy(), n;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let { blockLen: e, buffer: n, length: i, finished: r, destroyed: s, pos: o } = this;
          return (
            (t.length = i),
            (t.pos = o),
            (t.finished = r),
            (t.destroyed = s),
            i % e && t.buffer.set(n),
            t
          );
        }
      }
      let o = new Uint32Array([
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
        l = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635,
          1541459225,
        ]),
        a = new Uint32Array(64);
      class u extends s {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | l[0]),
            (this.B = 0 | l[1]),
            (this.C = 0 | l[2]),
            (this.D = 0 | l[3]),
            (this.E = 0 | l[4]),
            (this.F = 0 | l[5]),
            (this.G = 0 | l[6]),
            (this.H = 0 | l[7]);
        }
        get() {
          let { A: t, B: e, C: n, D: i, E: r, F: s, G: o, H: l } = this;
          return [t, e, n, i, r, s, o, l];
        }
        set(t, e, n, i, r, s, o, l) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | i),
            (this.E = 0 | r),
            (this.F = 0 | s),
            (this.G = 0 | o),
            (this.H = 0 | l);
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4) a[n] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = a[t - 15],
              n = a[t - 2],
              i = (0, r.np)(e, 7) ^ (0, r.np)(e, 18) ^ (e >>> 3),
              s = (0, r.np)(n, 17) ^ (0, r.np)(n, 19) ^ (n >>> 10);
            a[t] = (s + a[t - 7] + i + a[t - 16]) | 0;
          }
          let { A: n, B: i, C: s, D: l, E: u, F: h, G: f, H: c } = this;
          for (let t = 0; t < 64; t++) {
            var d, p, b, g;
            let e =
                (c +
                  ((0, r.np)(u, 6) ^ (0, r.np)(u, 11) ^ (0, r.np)(u, 25)) +
                  (((d = u) & h) ^ (~d & f)) +
                  o[t] +
                  a[t]) |
                0,
              x =
                (((0, r.np)(n, 2) ^ (0, r.np)(n, 13) ^ (0, r.np)(n, 22)) +
                  (((p = n) & (b = i)) ^ (p & (g = s)) ^ (b & g))) |
                0;
            (c = f),
              (f = h),
              (h = u),
              (u = (l + e) | 0),
              (l = s),
              (s = i),
              (i = n),
              (n = (e + x) | 0);
          }
          (n = (n + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (l = (l + this.D) | 0),
            (u = (u + this.E) | 0),
            (h = (h + this.F) | 0),
            (f = (f + this.G) | 0),
            (c = (c + this.H) | 0),
            this.set(n, i, s, l, u, h, f, c);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let h = (0, r.hE)(() => new u());
    },
    72236: function (t, e, n) {
      n.d(e, {
        l: function () {
          return i;
        },
      });
      let i = 1;
    },
    45502: function (t, e, n) {
      n.d(e, {
        RX: function () {
          return o;
        },
        cJ: function () {
          return a;
        },
        m7: function () {
          return s;
        },
        xd: function () {
          return l;
        },
      });
      var i = n(72236),
        r = n(77854);
      class s extends r.G {
        constructor({ maxSize: t, size: e }) {
          super('Blob size is too large.', {
            metaMessages: [`Max: ${t} bytes`, `Given: ${e} bytes`],
            name: 'BlobSizeTooLargeError',
          });
        }
      }
      class o extends r.G {
        constructor() {
          super('Blob data must not be empty.', { name: 'EmptyBlobError' });
        }
      }
      class l extends r.G {
        constructor({ hash: t, size: e }) {
          super(`Versioned hash "${t}" size is invalid.`, {
            metaMessages: ['Expected: 32', `Received: ${e}`],
            name: 'InvalidVersionedHashSizeError',
          });
        }
      }
      class a extends r.G {
        constructor({ hash: t, version: e }) {
          super(`Versioned hash "${t}" version is invalid.`, {
            metaMessages: [`Expected: ${i.l}`, `Received: ${e}`],
            name: 'InvalidVersionedHashVersionError',
          });
        }
      }
    },
    99969: function (t, e, n) {
      n.d(e, {
        P: function () {
          return s;
        },
      });
      var i = n(13990),
        r = n(79150);
      function s(t) {
        let { kzg: e } = t,
          n = t.to ?? ('string' == typeof t.blobs[0] ? 'hex' : 'bytes'),
          s = 'string' == typeof t.blobs[0] ? t.blobs.map((t) => (0, i.nr)(t)) : t.blobs,
          o = [];
        for (let t of s) o.push(Uint8Array.from(e.blobToKzgCommitment(t)));
        return 'bytes' === n ? o : o.map((t) => (0, r.ci)(t));
      }
    },
    24851: function (t, e, n) {
      n.d(e, {
        y: function () {
          return s;
        },
      });
      var i = n(13990),
        r = n(79150);
      function s(t) {
        let { kzg: e } = t,
          n = t.to ?? ('string' == typeof t.blobs[0] ? 'hex' : 'bytes'),
          s = 'string' == typeof t.blobs[0] ? t.blobs.map((t) => (0, i.nr)(t)) : t.blobs,
          o =
            'string' == typeof t.commitments[0]
              ? t.commitments.map((t) => (0, i.nr)(t))
              : t.commitments,
          l = [];
        for (let t = 0; t < s.length; t++) {
          let n = s[t],
            i = o[t];
          l.push(Uint8Array.from(e.computeBlobKzgProof(n, i)));
        }
        return 'bytes' === n ? l : l.map((t) => (0, r.ci)(t));
      }
    },
    56899: function (t, e, n) {
      n.d(e, {
        C: function () {
          return s;
        },
      });
      var i = n(79150),
        r = n(89226);
      function s(t) {
        let { commitments: e, version: n } = t,
          s = t.to ?? ('string' == typeof e[0] ? 'hex' : 'bytes'),
          o = [];
        for (let t of e)
          o.push(
            (function (t) {
              let { commitment: e, version: n = 1 } = t,
                s = t.to ?? ('string' == typeof e ? 'hex' : 'bytes'),
                o = (0, r.J)(e, 'bytes');
              return o.set([n], 0), 'bytes' === s ? o : (0, i.ci)(o);
            })({ commitment: t, to: s, version: n })
          );
        return o;
      }
    },
    29752: function (t, e, n) {
      n.d(e, {
        j: function () {
          return h;
        },
      });
      var i = n(99969),
        r = n(24851),
        s = n(45502),
        o = n(27572),
        l = n(99543),
        a = n(13990),
        u = n(79150);
      function h(t) {
        let { data: e, kzg: n, to: h } = t,
          f =
            t.blobs ??
            (function (t) {
              let e = t.to ?? ('string' == typeof t.data ? 'hex' : 'bytes'),
                n = 'string' == typeof t.data ? (0, a.nr)(t.data) : t.data,
                i = (0, l.d)(n);
              if (!i) throw new s.RX();
              if (i > 761855) throw new s.m7({ maxSize: 761855, size: i });
              let r = [],
                h = !0,
                f = 0;
              for (; h; ) {
                let t = (0, o.q)(new Uint8Array(131072)),
                  e = 0;
                for (; e < 4096; ) {
                  let i = n.slice(f, f + 31);
                  if ((t.pushByte(0), t.pushBytes(i), i.length < 31)) {
                    t.pushByte(128), (h = !1);
                    break;
                  }
                  e++, (f += 31);
                }
                r.push(t);
              }
              return 'bytes' === e ? r.map((t) => t.bytes) : r.map((t) => (0, u.ci)(t.bytes));
            })({ data: e, to: h }),
          c = t.commitments ?? (0, i.P)({ blobs: f, kzg: n, to: h }),
          d = t.proofs ?? (0, r.y)({ blobs: f, commitments: c, kzg: n, to: h }),
          p = [];
        for (let t = 0; t < f.length; t++) p.push({ blob: f[t], commitment: c[t], proof: d[t] });
        return p;
      }
    },
    93511: function (t, e, n) {
      n.d(e, {
        LV: function () {
          return l;
        },
      });
      var i = n(77854),
        r = n(27572),
        s = n(13990),
        o = n(79150);
      function l(t, e = 'hex') {
        let n = (function t(e) {
            return Array.isArray(e)
              ? (function (t) {
                  let e = t.reduce((t, e) => t + e.length, 0),
                    n = a(e);
                  return {
                    length: e <= 55 ? 1 + e : 1 + n + e,
                    encode(i) {
                      for (let { encode: r } of (e <= 55
                        ? i.pushByte(192 + e)
                        : (i.pushByte(247 + n),
                          1 === n
                            ? i.pushUint8(e)
                            : 2 === n
                              ? i.pushUint16(e)
                              : 3 === n
                                ? i.pushUint24(e)
                                : i.pushUint32(e)),
                      t))
                        r(i);
                    },
                  };
                })(e.map((e) => t(e)))
              : (function (t) {
                  let e = 'string' == typeof t ? (0, s.nr)(t) : t,
                    n = a(e.length);
                  return {
                    length:
                      1 === e.length && e[0] < 128
                        ? 1
                        : e.length <= 55
                          ? 1 + e.length
                          : 1 + n + e.length,
                    encode(t) {
                      (1 === e.length && e[0] < 128) ||
                        (e.length <= 55
                          ? t.pushByte(128 + e.length)
                          : (t.pushByte(183 + n),
                            1 === n
                              ? t.pushUint8(e.length)
                              : 2 === n
                                ? t.pushUint16(e.length)
                                : 3 === n
                                  ? t.pushUint24(e.length)
                                  : t.pushUint32(e.length))),
                        t.pushBytes(e);
                    },
                  };
                })(e);
          })(t),
          i = (0, r.q)(new Uint8Array(n.length));
        return (n.encode(i), 'hex' === e) ? (0, o.ci)(i.bytes) : i.bytes;
      }
      function a(t) {
        if (t < 256) return 1;
        if (t < 65536) return 2;
        if (t < 16777216) return 3;
        if (t < 4294967296) return 4;
        throw new i.G('Length is too large.');
      }
    },
    26573: function (t, e, n) {
      n.d(e, {
        G: function () {
          return o;
        },
        Z: function () {
          return s;
        },
      });
      var i = n(85182),
        r = n(85148);
      function s(t) {
        let e = (t.transactions ?? []).map((t) => ('string' == typeof t ? t : (0, r.Tr)(t)));
        return {
          ...t,
          baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
          blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0,
          difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
          excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0,
          gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
          hash: t.hash ? t.hash : null,
          logsBloom: t.logsBloom ? t.logsBloom : null,
          nonce: t.nonce ? t.nonce : null,
          number: t.number ? BigInt(t.number) : null,
          size: t.size ? BigInt(t.size) : void 0,
          timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
          transactions: e,
          totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null,
        };
      }
      let o = (0, i.$)('block', s);
    },
    85148: function (t, e, n) {
      n.d(e, {
        Tr: function () {
          return o;
        },
        c8: function () {
          return s;
        },
        y_: function () {
          return l;
        },
      });
      var i = n(37968),
        r = n(85182);
      let s = {
        '0x0': 'legacy',
        '0x1': 'eip2930',
        '0x2': 'eip1559',
        '0x3': 'eip4844',
        '0x4': 'eip7702',
      };
      function o(t) {
        let e = {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          chainId: t.chainId ? (0, i.ly)(t.chainId) : void 0,
          gas: t.gas ? BigInt(t.gas) : void 0,
          gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
          maxFeePerBlobGas: t.maxFeePerBlobGas ? BigInt(t.maxFeePerBlobGas) : void 0,
          maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: t.maxPriorityFeePerGas ? BigInt(t.maxPriorityFeePerGas) : void 0,
          nonce: t.nonce ? (0, i.ly)(t.nonce) : void 0,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
          type: t.type ? s[t.type] : void 0,
          typeHex: t.type ? t.type : void 0,
          value: t.value ? BigInt(t.value) : void 0,
          v: t.v ? BigInt(t.v) : void 0,
        };
        return (
          t.authorizationList &&
            (e.authorizationList = t.authorizationList.map((t) => ({
              contractAddress: t.address,
              chainId: Number(t.chainId),
              nonce: Number(t.nonce),
              r: t.r,
              s: t.s,
              yParity: Number(t.yParity),
            }))),
          (e.yParity = (() => {
            if (t.yParity) return Number(t.yParity);
            if ('bigint' == typeof e.v) {
              if (0n === e.v || 27n === e.v) return 0;
              if (1n === e.v || 28n === e.v) return 1;
              if (e.v >= 35n) return e.v % 2n === 0n ? 1 : 0;
            }
          })()),
          'legacy' === e.type &&
            (delete e.accessList,
            delete e.maxFeePerBlobGas,
            delete e.maxFeePerGas,
            delete e.maxPriorityFeePerGas,
            delete e.yParity),
          'eip2930' === e.type &&
            (delete e.maxFeePerBlobGas, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas),
          'eip1559' === e.type && delete e.maxFeePerBlobGas,
          e
        );
      }
      let l = (0, r.$)('transaction', o);
    },
    89226: function (t, e, n) {
      n.d(e, {
        J: function () {
          return l;
        },
      });
      var i = n(98882),
        r = n(13393),
        s = n(13990),
        o = n(79150);
      function l(t, e) {
        let n = (0, i.JQ)((0, r.v)(t, { strict: !1 }) ? (0, s.O0)(t) : t);
        return 'bytes' === (e || 'hex') ? n : (0, o.NC)(n);
      }
    },
    39128: function (t, e, n) {
      n.d(e, {
        l: function () {
          return r;
        },
      });
      var i = n(59134);
      function r(t) {
        if (t.type) return t.type;
        if (void 0 !== t.authorizationList) return 'eip7702';
        if (
          void 0 !== t.blobs ||
          void 0 !== t.blobVersionedHashes ||
          void 0 !== t.maxFeePerBlobGas ||
          void 0 !== t.sidecars
        )
          return 'eip4844';
        if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) return 'eip1559';
        if (void 0 !== t.gasPrice) return void 0 !== t.accessList ? 'eip2930' : 'legacy';
        throw new i.j3({ transaction: t });
      }
    },
    68077: function (t, e, n) {
      n.d(e, {
        g: function () {
          return o;
        },
      });
      var i = n(48141),
        r = n(59134),
        s = n(84545);
      function o(t) {
        if (!t || 0 === t.length) return [];
        let e = [];
        for (let n = 0; n < t.length; n++) {
          let { address: o, storageKeys: l } = t[n];
          for (let t = 0; t < l.length; t++)
            if (l[t].length - 2 != 64) throw new r.JC({ storageKey: l[t] });
          if (!(0, s.U)(o, { strict: !1 })) throw new i.b({ address: o });
          e.push([o, l]);
        }
        return e;
      }
    },
    97730: function (t, e, n) {
      n.d(e, {
        D: function () {
          return C;
        },
        d: function () {
          return I;
        },
      });
      var i = n(59134),
        r = n(99969),
        s = n(24851),
        o = n(56899),
        l = n(29752),
        a = n(1155),
        u = n(79712),
        h = n(79150),
        f = n(93511),
        c = n(72236),
        d = n(59171),
        p = n(48141),
        b = n(77854),
        g = n(45502),
        x = n(22268),
        y = n(42850),
        m = n(84545),
        v = n(99543),
        w = n(36571),
        B = n(37968);
      function P(t) {
        let { chainId: e, maxPriorityFeePerGas: n, maxFeePerGas: i, to: r } = t;
        if (e <= 0) throw new x.hJ({ chainId: e });
        if (r && !(0, m.U)(r)) throw new p.b({ address: r });
        if (i && i > d.zL) throw new y.Hh({ maxFeePerGas: i });
        if (n && i && n > i) throw new y.cs({ maxFeePerGas: i, maxPriorityFeePerGas: n });
      }
      var G = n(39128),
        N = n(68077);
      function C(t, e) {
        let n = (0, G.l)(t);
        return 'eip1559' === n
          ? (function (t, e) {
              let {
                chainId: n,
                gas: i,
                nonce: r,
                to: s,
                value: o,
                maxFeePerGas: l,
                maxPriorityFeePerGas: u,
                accessList: c,
                data: d,
              } = t;
              P(t);
              let p = (0, N.g)(c),
                b = [
                  (0, h.NC)(n),
                  r ? (0, h.NC)(r) : '0x',
                  u ? (0, h.NC)(u) : '0x',
                  l ? (0, h.NC)(l) : '0x',
                  i ? (0, h.NC)(i) : '0x',
                  s ?? '0x',
                  o ? (0, h.NC)(o) : '0x',
                  d ?? '0x',
                  p,
                  ...I(t, e),
                ];
              return (0, a.SM)(['0x02', (0, f.LV)(b)]);
            })(t, e)
          : 'eip2930' === n
            ? (function (t, e) {
                let {
                  chainId: n,
                  gas: i,
                  data: r,
                  nonce: s,
                  to: o,
                  value: l,
                  accessList: u,
                  gasPrice: c,
                } = t;
                !(function (t) {
                  let {
                    chainId: e,
                    maxPriorityFeePerGas: n,
                    gasPrice: i,
                    maxFeePerGas: r,
                    to: s,
                  } = t;
                  if (e <= 0) throw new x.hJ({ chainId: e });
                  if (s && !(0, m.U)(s)) throw new p.b({ address: s });
                  if (n || r)
                    throw new b.G(
                      '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.'
                    );
                  if (i && i > d.zL) throw new y.Hh({ maxFeePerGas: i });
                })(t);
                let g = (0, N.g)(u),
                  v = [
                    (0, h.NC)(n),
                    s ? (0, h.NC)(s) : '0x',
                    c ? (0, h.NC)(c) : '0x',
                    i ? (0, h.NC)(i) : '0x',
                    o ?? '0x',
                    l ? (0, h.NC)(l) : '0x',
                    r ?? '0x',
                    g,
                    ...I(t, e),
                  ];
                return (0, a.SM)(['0x01', (0, f.LV)(v)]);
              })(t, e)
            : 'eip4844' === n
              ? (function (t, e) {
                  let {
                    chainId: n,
                    gas: i,
                    nonce: u,
                    to: d,
                    value: p,
                    maxFeePerBlobGas: b,
                    maxFeePerGas: x,
                    maxPriorityFeePerGas: y,
                    accessList: m,
                    data: G,
                  } = t;
                  !(function (t) {
                    let { blobVersionedHashes: e } = t;
                    if (e) {
                      if (0 === e.length) throw new g.RX();
                      for (let t of e) {
                        let e = (0, v.d)(t),
                          n = (0, B.ly)((0, w.tP)(t, 0, 1));
                        if (32 !== e) throw new g.xd({ hash: t, size: e });
                        if (n !== c.l) throw new g.cJ({ hash: t, version: n });
                      }
                    }
                    P(t);
                  })(t);
                  let C = t.blobVersionedHashes,
                    U = t.sidecars;
                  if (t.blobs && (void 0 === C || void 0 === U)) {
                    let e =
                        'string' == typeof t.blobs[0] ? t.blobs : t.blobs.map((t) => (0, h.ci)(t)),
                      n = t.kzg,
                      i = (0, r.P)({ blobs: e, kzg: n });
                    if ((void 0 === C && (C = (0, o.C)({ commitments: i })), void 0 === U)) {
                      let t = (0, s.y)({ blobs: e, commitments: i, kzg: n });
                      U = (0, l.j)({ blobs: e, commitments: i, proofs: t });
                    }
                  }
                  let F = (0, N.g)(m),
                    L = [
                      (0, h.NC)(n),
                      u ? (0, h.NC)(u) : '0x',
                      y ? (0, h.NC)(y) : '0x',
                      x ? (0, h.NC)(x) : '0x',
                      i ? (0, h.NC)(i) : '0x',
                      d ?? '0x',
                      p ? (0, h.NC)(p) : '0x',
                      G ?? '0x',
                      F,
                      b ? (0, h.NC)(b) : '0x',
                      C ?? [],
                      ...I(t, e),
                    ],
                    z = [],
                    k = [],
                    E = [];
                  if (U)
                    for (let t = 0; t < U.length; t++) {
                      let { blob: e, commitment: n, proof: i } = U[t];
                      z.push(e), k.push(n), E.push(i);
                    }
                  return (0, a.SM)(['0x03', U ? (0, f.LV)([L, z, k, E]) : (0, f.LV)(L)]);
                })(t, e)
              : 'eip7702' === n
                ? (function (t, e) {
                    let {
                      authorizationList: n,
                      chainId: i,
                      gas: r,
                      nonce: s,
                      to: o,
                      value: l,
                      maxFeePerGas: u,
                      maxPriorityFeePerGas: c,
                      accessList: d,
                      data: b,
                    } = t;
                    !(function (t) {
                      let { authorizationList: e } = t;
                      if (e)
                        for (let t of e) {
                          let { contractAddress: e, chainId: n } = t;
                          if (!(0, m.U)(e)) throw new p.b({ address: e });
                          if (n < 0) throw new x.hJ({ chainId: n });
                        }
                      P(t);
                    })(t);
                    let g = (0, N.g)(d),
                      y = (function (t) {
                        if (!t || 0 === t.length) return [];
                        let e = [];
                        for (let n of t) {
                          let { contractAddress: t, chainId: i, nonce: r, ...s } = n;
                          e.push([
                            i ? (0, h.NC)(i) : '0x',
                            t,
                            r ? (0, h.NC)(r) : '0x',
                            ...I({}, s),
                          ]);
                        }
                        return e;
                      })(n);
                    return (0, a.SM)([
                      '0x04',
                      (0, f.LV)([
                        (0, h.NC)(i),
                        s ? (0, h.NC)(s) : '0x',
                        c ? (0, h.NC)(c) : '0x',
                        u ? (0, h.NC)(u) : '0x',
                        r ? (0, h.NC)(r) : '0x',
                        o ?? '0x',
                        l ? (0, h.NC)(l) : '0x',
                        b ?? '0x',
                        g,
                        y,
                        ...I(t, e),
                      ]),
                    ]);
                  })(t, e)
                : (function (t, e) {
                    let {
                      chainId: n = 0,
                      gas: r,
                      data: s,
                      nonce: o,
                      to: l,
                      value: a,
                      gasPrice: c,
                    } = t;
                    !(function (t) {
                      let {
                        chainId: e,
                        maxPriorityFeePerGas: n,
                        gasPrice: i,
                        maxFeePerGas: r,
                        to: s,
                      } = t;
                      if (s && !(0, m.U)(s)) throw new p.b({ address: s });
                      if (void 0 !== e && e <= 0) throw new x.hJ({ chainId: e });
                      if (n || r)
                        throw new b.G(
                          '`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.'
                        );
                      if (i && i > d.zL) throw new y.Hh({ maxFeePerGas: i });
                    })(t);
                    let g = [
                      o ? (0, h.NC)(o) : '0x',
                      c ? (0, h.NC)(c) : '0x',
                      r ? (0, h.NC)(r) : '0x',
                      l ?? '0x',
                      a ? (0, h.NC)(a) : '0x',
                      s ?? '0x',
                    ];
                    if (e) {
                      let t = (() => {
                          if (e.v >= 35n)
                            return (e.v - 35n) / 2n > 0 ? e.v : 27n + (35n === e.v ? 0n : 1n);
                          if (n > 0) return BigInt(2 * n) + BigInt(35n + e.v - 27n);
                          let t = 27n + (27n === e.v ? 0n : 1n);
                          if (e.v !== t) throw new i.vl({ v: e.v });
                          return t;
                        })(),
                        r = (0, u.f)(e.r),
                        s = (0, u.f)(e.s);
                      g = [...g, (0, h.NC)(t), '0x00' === r ? '0x' : r, '0x00' === s ? '0x' : s];
                    } else n > 0 && (g = [...g, (0, h.NC)(n), '0x', '0x']);
                    return (0, f.LV)(g);
                  })(t, e);
      }
      function I(t, e) {
        let n = e ?? t,
          { v: i, yParity: r } = n;
        if (void 0 === n.r || void 0 === n.s || (void 0 === i && void 0 === r)) return [];
        let s = (0, u.f)(n.r),
          o = (0, u.f)(n.s);
        return [
          'number' == typeof r
            ? r
              ? (0, h.NC)(1)
              : '0x'
            : 0n === i
              ? '0x'
              : 1n === i
                ? (0, h.NC)(1)
                : 27n === i
                  ? '0x'
                  : (0, h.NC)(1),
          '0x00' === s ? '0x' : s,
          '0x00' === o ? '0x' : o,
        ];
      }
    },
  },
]);
