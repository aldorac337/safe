(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9786],
  {
    606: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          let t = this.get(e);
          if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
          let r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          let t = this.timestamps.get(e);
          if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          let t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    673: (e, t, r) => {
      'use strict';
      r.d(t, { H: () => i });
      class i {}
    },
    5505: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    7256: (e, t, r) => {
      'use strict';
      r.d(t, {
        $Q: () => I,
        GF: () => _,
        S9: () => O,
        Vx: () => w,
        ZP: () => l,
        dQ: () => p,
        lZ: () => f,
        m5: () => y,
        mF: () => v,
        pi: () => b,
        qE: () => g,
        yJ: () => A,
        zl: () => E,
      });
      var i = r(673),
        s = r(35978),
        n = r.n(s),
        o = Object.defineProperty,
        a = (e, t, r) =>
          t in e
            ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        c = (e, t, r) => a(e, 'symbol' != typeof t ? t + '' : t, r);
      class l extends i.H {
        constructor(e) {
          super(), (this.opts = e), c(this, 'protocol', 'wc'), c(this, 'version', 2);
        }
      }
      var h = Object.defineProperty,
        u = (e, t, r) =>
          t in e
            ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        d = (e, t, r) => u(e, 'symbol' != typeof t ? t + '' : t, r);
      class f extends i.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t), d(this, 'records', new Map());
        }
      }
      class p {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class g extends i.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class y extends i.H {
        constructor(e) {
          super();
        }
      }
      class b {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      var m = Object.defineProperty;
      class v extends i.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class w extends i.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class E {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.store = r);
        }
      }
      class _ {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class I {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = r);
        }
      }
      var x = Object.defineProperty,
        S = (e, t, r) =>
          t in e
            ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        D = (e, t, r) => S(e, 'symbol' != typeof t ? t + '' : t, r);
      n();
      class O {
        constructor(e) {
          (this.opts = e), D(this, 'protocol', 'wc'), D(this, 'version', 2);
        }
      }
      s.EventEmitter;
      class A {
        constructor(e) {
          this.client = e;
        }
      }
    },
    8468: (e, t, r) => {
      'use strict';
      r.d(t, { eF: () => a, mE: () => s, rI: () => o, vG: () => n });
      var i = r(83523);
      function s(e) {
        return i.jf.includes(e);
      }
      function n(e) {
        return Object.keys(i.Uf).includes(e) ? i.Uf[e] : i.Uf[i.XW];
      }
      function o(e) {
        let t = Object.values(i.Uf).find((t) => t.code === e);
        return t || i.Uf[i.XW];
      }
      function a(e, t, r) {
        return e.message.includes('getaddrinfo ENOTFOUND') ||
          e.message.includes('connect ECONNREFUSED')
          ? Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
    },
    10897: (e, t, r) => {
      'use strict';
      r.d(t, { Cq: () => tO, FA: () => tP, TZ: () => tA, UF: () => tD });
      var i = r(87561),
        s = r(41035);
      function n(e, ...t) {
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
      function o(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      let a = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0,
        c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      function l(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          n(e),
          e
        );
      }
      class h {
        clone() {
          return this._cloneInto();
        }
      }
      function u(e = 32) {
        if (a && 'function' == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && 'function' == typeof a.randomBytes) return a.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      class d extends h {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = c(this.buffer));
        }
        update(e) {
          o(this);
          let { view: t, buffer: r, blockLen: i } = this,
            s = (e = l(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = c(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          o(this),
            (function (e, t) {
              n(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error('digestInto() expects output buffer of length at least ' + r);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > i - a && (this.process(r, 0), (a = 0));
          for (let e = a; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((r >> s) & n),
              a = Number(r & n),
              c = 4 * !!i,
              l = 4 * !i;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let l = c(e),
            h = this.outputLen;
          if (h % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let u = h / 4,
            d = this.get();
          if (u > d.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < u; e++) l.setUint32(4 * e, d[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: i, finished: s, destroyed: n, pos: o } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let f = BigInt(0x100000000 - 1),
        p = BigInt(32),
        g = {
          split: function (e, t = !1) {
            let r = new Uint32Array(e.length),
              i = new Uint32Array(e.length);
            for (let s = 0; s < e.length; s++) {
              let { h: n, l: o } = (function (e, t = !1) {
                return t
                  ? { h: Number(e & f), l: Number((e >> p) & f) }
                  : { h: 0 | Number((e >> p) & f), l: 0 | Number(e & f) };
              })(e[s], t);
              [r[s], i[s]] = [n, o];
            }
            return [r, i];
          },
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          add: function (e, t, r, i) {
            let s = (t >>> 0) + (i >>> 0);
            return { h: (e + r + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, i) => (t + r + i + ((e / 0x100000000) | 0)) | 0,
          add4L: (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
          add4H: (e, t, r, i, s) => (t + r + i + s + ((e / 0x100000000) | 0)) | 0,
          add5H: (e, t, r, i, s, n) => (t + r + i + s + n + ((e / 0x100000000) | 0)) | 0,
          add5L: (e, t, r, i, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0),
        },
        [y, b] = g.split(
          [
            '0x428a2f98d728ae22',
            '0x7137449123ef65cd',
            '0xb5c0fbcfec4d3b2f',
            '0xe9b5dba58189dbbc',
            '0x3956c25bf348b538',
            '0x59f111f1b605d019',
            '0x923f82a4af194f9b',
            '0xab1c5ed5da6d8118',
            '0xd807aa98a3030242',
            '0x12835b0145706fbe',
            '0x243185be4ee4b28c',
            '0x550c7dc3d5ffb4e2',
            '0x72be5d74f27b896f',
            '0x80deb1fe3b1696b1',
            '0x9bdc06a725c71235',
            '0xc19bf174cf692694',
            '0xe49b69c19ef14ad2',
            '0xefbe4786384f25e3',
            '0x0fc19dc68b8cd5b5',
            '0x240ca1cc77ac9c65',
            '0x2de92c6f592b0275',
            '0x4a7484aa6ea6e483',
            '0x5cb0a9dcbd41fbd4',
            '0x76f988da831153b5',
            '0x983e5152ee66dfab',
            '0xa831c66d2db43210',
            '0xb00327c898fb213f',
            '0xbf597fc7beef0ee4',
            '0xc6e00bf33da88fc2',
            '0xd5a79147930aa725',
            '0x06ca6351e003826f',
            '0x142929670a0e6e70',
            '0x27b70a8546d22ffc',
            '0x2e1b21385c26c926',
            '0x4d2c6dfc5ac42aed',
            '0x53380d139d95b3df',
            '0x650a73548baf63de',
            '0x766a0abb3c77b2a8',
            '0x81c2c92e47edaee6',
            '0x92722c851482353b',
            '0xa2bfe8a14cf10364',
            '0xa81a664bbc423001',
            '0xc24b8b70d0f89791',
            '0xc76c51a30654be30',
            '0xd192e819d6ef5218',
            '0xd69906245565a910',
            '0xf40e35855771202a',
            '0x106aa07032bbd1b8',
            '0x19a4c116b8d2d0c8',
            '0x1e376c085141ab53',
            '0x2748774cdf8eeb99',
            '0x34b0bcb5e19b48a8',
            '0x391c0cb3c5c95a63',
            '0x4ed8aa4ae3418acb',
            '0x5b9cca4f7763e373',
            '0x682e6ff3d6b2b8a3',
            '0x748f82ee5defb2fc',
            '0x78a5636f43172f60',
            '0x84c87814a1f0ab72',
            '0x8cc702081a6439ec',
            '0x90befffa23631e28',
            '0xa4506cebde82bde9',
            '0xbef9a3f7b2c67915',
            '0xc67178f2e372532b',
            '0xca273eceea26619c',
            '0xd186b8c721c0c207',
            '0xeada7dd6cde0eb1e',
            '0xf57d4f7fee6ed178',
            '0x06f067aa72176fba',
            '0x0a637dc5a2c898a6',
            '0x113f9804bef90dae',
            '0x1b710b35131c471b',
            '0x28db77f523047d84',
            '0x32caab7b40c72493',
            '0x3c9ebe0a15c9bebc',
            '0x431d67c49c100d4c',
            '0x4cc5d4becb3e42b6',
            '0x597f299cfc657e2a',
            '0x5fcb6fab3ad6faec',
            '0x6c44198c4a475817',
          ].map((e) => BigInt(e))
        ),
        m = new Uint32Array(80),
        v = new Uint32Array(80);
      class w extends d {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 0x6a09e667),
            (this.Al = -0xc4336f8),
            (this.Bh = -0x4498517b),
            (this.Bl = -0x7b3558c5),
            (this.Ch = 0x3c6ef372),
            (this.Cl = -0x16b07d5),
            (this.Dh = -0x5ab00ac6),
            (this.Dl = 0x5f1d36f1),
            (this.Eh = 0x510e527f),
            (this.El = -0x52197d2f),
            (this.Fh = -0x64fa9774),
            (this.Fl = 0x2b3e6c1f),
            (this.Gh = 0x1f83d9ab),
            (this.Gl = -0x4be4295),
            (this.Hh = 0x5be0cd19),
            (this.Hl = 0x137e2179);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: i,
            Ch: s,
            Cl: n,
            Dh: o,
            Dl: a,
            Eh: c,
            El: l,
            Fh: h,
            Fl: u,
            Gh: d,
            Gl: f,
            Hh: p,
            Hl: g,
          } = this;
          return [e, t, r, i, s, n, o, a, c, l, h, u, d, f, p, g];
        }
        set(e, t, r, i, s, n, o, a, c, l, h, u, d, f, p, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | i),
            (this.Ch = 0 | s),
            (this.Cl = 0 | n),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | h),
            (this.Fl = 0 | u),
            (this.Gh = 0 | d),
            (this.Gl = 0 | f),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (m[r] = e.getUint32(t)), (v[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | m[e - 15],
              r = 0 | v[e - 15],
              i = g.rotrSH(t, r, 1) ^ g.rotrSH(t, r, 8) ^ g.shrSH(t, r, 7),
              s = g.rotrSL(t, r, 1) ^ g.rotrSL(t, r, 8) ^ g.shrSL(t, r, 7),
              n = 0 | m[e - 2],
              o = 0 | v[e - 2],
              a = g.rotrSH(n, o, 19) ^ g.rotrBH(n, o, 61) ^ g.shrSH(n, o, 6),
              c = g.rotrSL(n, o, 19) ^ g.rotrBL(n, o, 61) ^ g.shrSL(n, o, 6),
              l = g.add4L(s, c, v[e - 7], v[e - 16]),
              h = g.add4H(l, i, a, m[e - 7], m[e - 16]);
            (m[e] = 0 | h), (v[e] = 0 | l);
          }
          let {
            Ah: r,
            Al: i,
            Bh: s,
            Bl: n,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: h,
            El: u,
            Fh: d,
            Fl: f,
            Gh: p,
            Gl: w,
            Hh: E,
            Hl: _,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t = g.rotrSH(h, u, 14) ^ g.rotrSH(h, u, 18) ^ g.rotrBH(h, u, 41),
              I = g.rotrSL(h, u, 14) ^ g.rotrSL(h, u, 18) ^ g.rotrBL(h, u, 41),
              x = (h & d) ^ (~h & p),
              S = (u & f) ^ (~u & w),
              D = g.add5L(_, I, S, b[e], v[e]),
              O = g.add5H(D, E, t, x, y[e], m[e]),
              A = 0 | D,
              P = g.rotrSH(r, i, 28) ^ g.rotrBH(r, i, 34) ^ g.rotrBH(r, i, 39),
              R = g.rotrSL(r, i, 28) ^ g.rotrBL(r, i, 34) ^ g.rotrBL(r, i, 39),
              N = (r & s) ^ (r & o) ^ (s & o),
              T = (i & n) ^ (i & a) ^ (n & a);
            (E = 0 | p),
              (_ = 0 | w),
              (p = 0 | d),
              (w = 0 | f),
              (d = 0 | h),
              (f = 0 | u),
              ({ h: h, l: u } = g.add(0 | c, 0 | l, 0 | O, 0 | A)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | s),
              (a = 0 | n),
              (s = 0 | r),
              (n = 0 | i);
            let C = g.add3L(A, R, T);
            (r = g.add3H(C, O, P, N)), (i = 0 | C);
          }
          ({ h: r, l: i } = g.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
            ({ h: s, l: n } = g.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
            ({ h: o, l: a } = g.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = g.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: h, l: u } = g.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
            ({ h: d, l: f } = g.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | f)),
            ({ h: p, l: w } = g.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | w)),
            ({ h: E, l: _ } = g.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | _)),
            this.set(r, i, s, n, o, a, c, l, h, u, d, f, p, w, E, _);
        }
        roundClean() {
          m.fill(0), v.fill(0);
        }
        destroy() {
          this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let E = (function (e) {
          let t = (t) => e().update(l(t)).digest(),
            r = e();
          return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
        })(() => new w()),
        _ = BigInt(0),
        I = BigInt(1),
        x = BigInt(2);
      function S(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function D(e) {
        if (!S(e)) throw Error('Uint8Array expected');
      }
      function O(e, t) {
        if ('boolean' != typeof t) throw Error(e + ' boolean expected, got ' + t);
      }
      let A = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function P(e) {
        D(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += A[e[r]];
        return t;
      }
      function R(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        return '' === e ? _ : BigInt('0x' + e);
      }
      let N = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function T(e) {
        return e >= N._0 && e <= N._9
          ? e - N._0
          : e >= N.A && e <= N.F
            ? e - (N.A - 10)
            : e >= N.a && e <= N.f
              ? e - (N.a - 10)
              : void 0;
      }
      function C(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = T(e.charCodeAt(s)),
            n = T(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          i[t] = 16 * r + n;
        }
        return i;
      }
      function k(e) {
        return D(e), R(P(Uint8Array.from(e).reverse()));
      }
      function U(e, t) {
        return C(e.toString(16).padStart(2 * t, '0'));
      }
      function L(e, t) {
        return U(e, t).reverse();
      }
      function M(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = C(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (S(t)) i = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = i.length;
        if ('number' == typeof r && s !== r)
          throw Error(e + ' of length ' + r + ' expected, got ' + s);
        return i;
      }
      function q(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          D(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      let j = (e) => 'bigint' == typeof e && _ <= e;
      function B(e, t, r, i) {
        if (!(j(t) && j(r) && j(i)) || !(r <= t) || !(t < i))
          throw Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      let z = (e) => (x << BigInt(e - 1)) - I,
        $ = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || S(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function F(e, t, r = {}) {
        let i = (t, r, i) => {
          let s = $[r];
          if ('function' != typeof s) throw Error('invalid validator function');
          let n = e[t];
          if (!(i && void 0 === n) && !s(n, e))
            throw Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + n);
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e;
      }
      function V(e) {
        let t = new WeakMap();
        return (r, ...i) => {
          let s = t.get(r);
          if (void 0 !== s) return s;
          let n = e(r, ...i);
          return t.set(r, n), n;
        };
      }
      let K = BigInt(0),
        H = BigInt(1),
        J = BigInt(2),
        W = BigInt(3),
        G = BigInt(4),
        Y = BigInt(5),
        Q = BigInt(8);
      function Z(e, t) {
        let r = e % t;
        return r >= K ? r : t + r;
      }
      function X(e, t, r) {
        let i = e;
        for (; t-- > K; ) (i *= i), (i %= r);
        return i;
      }
      function ee(e, t) {
        if (e === K) throw Error('invert: expected non-zero number');
        if (t <= K) throw Error('invert: expected positive modulus, got ' + t);
        let r = Z(e, t),
          i = t,
          s = K,
          n = H;
        for (; r !== K; ) {
          let e = i / r,
            t = i % r,
            o = s - n * e;
          (i = r), (r = t), (s = n), (n = o);
        }
        if (i !== H) throw Error('invert: does not exist');
        return Z(s, t);
      }
      let et = (e, t) => (Z(e, t) & H) === H,
        er = [
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
      function ei(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          i = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: i };
      }
      function es(e, t, r = !1, i = {}) {
        let s;
        if (e <= K) throw Error('invalid field: expected ORDER > 0, got ' + e);
        let { nBitLength: n, nByteLength: o } = ei(e, t);
        if (o > 2048) throw Error('invalid field: expected ORDER of <= 2048 bytes');
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: o,
          MASK: z(n),
          ZERO: K,
          ONE: H,
          create: (t) => Z(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error('invalid field element: expected bigint, got ' + typeof t);
            return K <= t && t < e;
          },
          is0: (e) => e === K,
          isOdd: (e) => (e & H) === H,
          neg: (t) => Z(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => Z(t * t, e),
          add: (t, r) => Z(t + r, e),
          sub: (t, r) => Z(t - r, e),
          mul: (t, r) => Z(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < K) throw Error('invalid exponent, negatives unsupported');
              if (r === K) return e.ONE;
              if (r === H) return t;
              let i = e.ONE,
                s = t;
              for (; r > K; ) r & H && (i = e.mul(i, s)), (s = e.sqr(s)), (r >>= H);
              return i;
            })(a, e, t),
          div: (t, r) => Z(t * ee(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => ee(t, e),
          sqrt:
            i.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % G === W) {
                    let t = (e + H) / G;
                    return function (e, r) {
                      let i = e.pow(r, t);
                      if (!e.eql(e.sqr(i), r)) throw Error('Cannot find square root');
                      return i;
                    };
                  }
                  if (e % Q === Y) {
                    let t = (e - Y) / Q;
                    return function (e, r) {
                      let i = e.mul(r, J),
                        s = e.pow(i, t),
                        n = e.mul(r, s),
                        o = e.mul(e.mul(n, J), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), r)) throw Error('Cannot find square root');
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, r, i;
                    let s = (e - H) / J;
                    for (t = e - H, r = 0; t % J === K; t /= J, r++);
                    for (
                      i = J;
                      i < e &&
                      (function (e, t, r) {
                        if (t < K) throw Error('invalid exponent, negatives unsupported');
                        if (r <= K) throw Error('invalid modulus');
                        if (r === H) return K;
                        let i = H;
                        for (; t > K; ) t & H && (i = (i * e) % r), (e = (e * e) % r), (t >>= H);
                        return i;
                      })(i, s, e) !==
                        e - H;
                      i++
                    )
                      if (i > 1e3) throw Error('Cannot find square root: likely non-prime P');
                    if (1 === r) {
                      let t = (e + H) / G;
                      return function (e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r)) throw Error('Cannot find square root');
                        return i;
                      };
                    }
                    let n = (t + H) / J;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE)) throw Error('Cannot find square root');
                      let a = r,
                        c = e.pow(e.mul(e.ONE, i), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                        let r = e.pow(c, H << BigInt(a - t - 1));
                        (c = e.sqr(r)), (l = e.mul(l, r)), (h = e.mul(h, c)), (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                i = t.reduce((t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))), e.ONE),
                s = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, s) => (e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i))),
                  s
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? L(e, o) : U(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error('Field.fromBytes: expected ' + o + ' bytes, got ' + e.length);
            return r ? k(e) : R(P(e));
          },
        });
        return Object.freeze(a);
      }
      let en = BigInt(0),
        eo = BigInt(1);
      function ea(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function ec(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function el(e, t) {
        return ec(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      let eh = new WeakMap(),
        eu = new WeakMap();
      function ed(e) {
        return eu.get(e) || 1;
      }
      let ef = BigInt(0),
        ep = BigInt(1),
        eg = BigInt(2),
        ey = BigInt(8),
        eb = { zip215: !0 };
      BigInt(0), BigInt(1);
      let em = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        ),
        ev = BigInt(
          '19681161376707505956807079304988542015446066515923890162744021073123829784752'
        );
      BigInt(0);
      let ew = BigInt(1),
        eE = BigInt(2);
      BigInt(3);
      let e_ = BigInt(5),
        eI = BigInt(8),
        ex = es(em, void 0, !0),
        eS = (function (e) {
          var t;
          let r = (function (e) {
              let t =
                (F(
                  e.Fp,
                  er.reduce((e, t) => ((e[t] = 'function'), e), {
                    ORDER: 'bigint',
                    MASK: 'bigint',
                    BYTES: 'isSafeInteger',
                    BITS: 'isSafeInteger',
                  })
                ),
                F(
                  e,
                  { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
                  { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
                ),
                Object.freeze({ ...ei(e.n, e.nBitLength), ...e, p: e.Fp.ORDER }));
              return (
                F(
                  e,
                  { hash: 'function', a: 'bigint', d: 'bigint', randomBytes: 'function' },
                  {
                    adjustScalarBytes: 'function',
                    domain: 'function',
                    uvRatio: 'function',
                    mapToCurve: 'function',
                  }
                ),
                Object.freeze({ ...t })
              );
            })(e),
            { Fp: i, n: s, prehash: n, hash: o, randomBytes: a, nByteLength: c, h: l } = r,
            h = eg << (BigInt(8 * c) - ep),
            u = i.create,
            d = es(r.n, r.nBitLength),
            f =
              r.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: i.sqrt(e * i.inv(t)) };
                } catch {
                  return { isValid: !1, value: ef };
                }
              }),
            p = r.adjustScalarBytes || ((e) => e),
            g =
              r.domain ||
              ((e, t, r) => {
                if ((O('phflag', r), t.length || r))
                  throw Error('Contexts/pre-hash are not supported');
                return e;
              });
          function y(e, t) {
            B('coordinate ' + e, t, ef, h);
          }
          function b(e) {
            if (!(e instanceof w)) throw Error('ExtendedPoint expected');
          }
          let m = V((e, t) => {
              let { ex: r, ey: s, ez: n } = e,
                o = e.is0();
              null == t && (t = o ? ey : i.inv(n));
              let a = u(r * t),
                c = u(s * t),
                l = u(n * t);
              if (o) return { x: ef, y: ep };
              if (l !== ep) throw Error('invZ was invalid');
              return { x: a, y: c };
            }),
            v = V((e) => {
              let { a: t, d: i } = r;
              if (e.is0()) throw Error('bad point: ZERO');
              let { ex: s, ey: n, ez: o, et: a } = e,
                c = u(s * s),
                l = u(n * n),
                h = u(o * o),
                d = u(h * h),
                f = u(c * t);
              if (u(h * u(f + l)) !== u(d + u(i * u(c * l))))
                throw Error('bad point: equation left != right (1)');
              if (u(s * n) !== u(o * a)) throw Error('bad point: equation left != right (2)');
              return !0;
            });
          class w {
            constructor(e, t, r, i) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = r),
                (this.et = i),
                y('x', e),
                y('y', t),
                y('z', r),
                y('t', i),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof w) throw Error('extended point not allowed');
              let { x: t, y: r } = e || {};
              return y('x', t), y('y', r), new w(t, r, ep, u(t * r));
            }
            static normalizeZ(e) {
              let t = i.invertBatch(e.map((e) => e.ez));
              return e.map((e, r) => e.toAffine(t[r])).map(w.fromAffine);
            }
            static msm(e, t) {
              return (function (e, t, r, i) {
                if (
                  ((function (e, t) {
                    if (!Array.isArray(e)) throw Error('array expected');
                    e.forEach((e, r) => {
                      if (!(e instanceof t)) throw Error('invalid point at index ' + r);
                    });
                  })(r, e),
                  (function (e, t) {
                    if (!Array.isArray(e)) throw Error('array of scalars expected');
                    e.forEach((e, r) => {
                      if (!t.isValid(e)) throw Error('invalid scalar at index ' + r);
                    });
                  })(i, t),
                  r.length !== i.length)
                )
                  throw Error('arrays of points and scalars must have equal length');
                let s = e.ZERO,
                  n = (function (e) {
                    let t;
                    for (t = 0; e > _; e >>= I, t += 1);
                    return t;
                  })(BigInt(r.length)),
                  o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                  a = (1 << o) - 1,
                  c = Array(a + 1).fill(s),
                  l = Math.floor((t.BITS - 1) / o) * o,
                  h = s;
                for (let e = l; e >= 0; e -= o) {
                  c.fill(s);
                  for (let t = 0; t < i.length; t++) {
                    let s = Number((i[t] >> BigInt(e)) & BigInt(a));
                    c[s] = c[s].add(r[t]);
                  }
                  let t = s;
                  for (let e = c.length - 1, r = s; e > 0; e--) (r = r.add(c[e])), (t = t.add(r));
                  if (((h = h.add(t)), 0 !== e)) for (let e = 0; e < o; e++) h = h.double();
                }
                return h;
              })(w, d, e, t);
            }
            _setWindowSize(e) {
              S.setWindowSize(this, e);
            }
            assertValidity() {
              v(this);
            }
            equals(e) {
              b(e);
              let { ex: t, ey: r, ez: i } = this,
                { ex: s, ey: n, ez: o } = e,
                a = u(t * o),
                c = u(s * i),
                l = u(r * o),
                h = u(n * i);
              return a === c && l === h;
            }
            is0() {
              return this.equals(w.ZERO);
            }
            negate() {
              return new w(u(-this.ex), this.ey, this.ez, u(-this.et));
            }
            double() {
              let { a: e } = r,
                { ex: t, ey: i, ez: s } = this,
                n = u(t * t),
                o = u(i * i),
                a = u(eg * u(s * s)),
                c = u(e * n),
                l = t + i,
                h = u(u(l * l) - n - o),
                d = c + o,
                f = d - a,
                p = c - o,
                g = u(h * f),
                y = u(d * p),
                b = u(h * p);
              return new w(g, y, u(f * d), b);
            }
            add(e) {
              b(e);
              let { a: t, d: i } = r,
                { ex: s, ey: n, ez: o, et: a } = this,
                { ex: c, ey: l, ez: h, et: d } = e;
              if (t === BigInt(-1)) {
                let e = u((n - s) * (l + c)),
                  t = u((n + s) * (l - c)),
                  r = u(t - e);
                if (r === ef) return this.double();
                let i = u(o * eg * d),
                  f = u(a * eg * h),
                  p = f + i,
                  g = t + e,
                  y = f - i,
                  b = u(p * r),
                  m = u(g * y),
                  v = u(p * y);
                return new w(b, m, u(r * g), v);
              }
              let f = u(s * c),
                p = u(n * l),
                g = u(a * i * d),
                y = u(o * h),
                m = u((s + n) * (c + l) - f - p),
                v = y - g,
                E = y + g,
                _ = u(p - t * f),
                I = u(m * v),
                x = u(E * _),
                S = u(m * _);
              return new w(I, x, u(v * E), S);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return S.wNAFCached(this, e, w.normalizeZ);
            }
            multiply(e) {
              B('scalar', e, ep, s);
              let { p: t, f: r } = this.wNAF(e);
              return w.normalizeZ([t, r])[0];
            }
            multiplyUnsafe(e, t = w.ZERO) {
              return (
                B('scalar', e, ef, s),
                e === ef
                  ? x
                  : this.is0() || e === ep
                    ? this
                    : S.wNAFCachedUnsafe(this, e, w.normalizeZ, t)
              );
            }
            isSmallOrder() {
              return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
              return S.unsafeLadder(this, s).is0();
            }
            toAffine(e) {
              return m(this, e);
            }
            clearCofactor() {
              let { h: e } = r;
              return e === ep ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, t = !1) {
              let { d: s, a: n } = r,
                o = i.BYTES;
              (e = M('pointHex', e, o)), O('zip215', t);
              let a = e.slice(),
                c = e[o - 1];
              a[o - 1] = -129 & c;
              let l = k(a);
              B('pointHex.y', l, ef, t ? h : i.ORDER);
              let d = u(l * l),
                { isValid: p, value: g } = f(u(d - ep), u(s * d - n));
              if (!p) throw Error('Point.fromHex: invalid y coordinate');
              let y = (g & ep) === ep,
                b = (128 & c) != 0;
              if (!t && g === ef && b) throw Error('Point.fromHex: x=0 and x_0=1');
              return b !== y && (g = u(-g)), w.fromAffine({ x: g, y: l });
            }
            static fromPrivateKey(e) {
              return D(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                r = L(t, i.BYTES);
              return (r[r.length - 1] |= e & ep ? 128 : 0), r;
            }
            toHex() {
              return P(this.toRawBytes());
            }
          }
          (w.BASE = new w(r.Gx, r.Gy, ep, u(r.Gx * r.Gy))), (w.ZERO = new w(ef, ep, ep, ef));
          let { BASE: E, ZERO: x } = w,
            S =
              ((t = 8 * c),
              {
                constTimeNegate: ea,
                hasPrecomputes: (e) => 1 !== ed(e),
                unsafeLadder(e, t, r = w.ZERO) {
                  let i = e;
                  for (; t > en; ) t & eo && (r = r.add(i)), (i = i.double()), (t >>= eo);
                  return r;
                },
                precomputeWindow(e, r) {
                  let { windows: i, windowSize: s } = el(r, t),
                    n = [],
                    o = e,
                    a = o;
                  for (let e = 0; e < i; e++) {
                    (a = o), n.push(a);
                    for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                    o = a.double();
                  }
                  return n;
                },
                wNAF(e, r, i) {
                  let { windows: s, windowSize: n } = el(e, t),
                    o = w.ZERO,
                    a = w.BASE,
                    c = BigInt(2 ** e - 1),
                    l = 2 ** e,
                    h = BigInt(e);
                  for (let e = 0; e < s; e++) {
                    let t = e * n,
                      s = Number(i & c);
                    (i >>= h), s > n && ((s -= l), (i += eo));
                    let u = t + Math.abs(s) - 1,
                      d = e % 2 != 0,
                      f = s < 0;
                    0 === s ? (a = a.add(ea(d, r[t]))) : (o = o.add(ea(f, r[u])));
                  }
                  return { p: o, f: a };
                },
                wNAFUnsafe(e, r, i, s = w.ZERO) {
                  let { windows: n, windowSize: o } = el(e, t),
                    a = BigInt(2 ** e - 1),
                    c = 2 ** e,
                    l = BigInt(e);
                  for (let e = 0; e < n; e++) {
                    let t = e * o;
                    if (i === en) break;
                    let n = Number(i & a);
                    if (((i >>= l), n > o && ((n -= c), (i += eo)), 0 === n)) continue;
                    let h = r[t + Math.abs(n) - 1];
                    n < 0 && (h = h.negate()), (s = s.add(h));
                  }
                  return s;
                },
                getPrecomputes(e, t, r) {
                  let i = eh.get(t);
                  return i || ((i = this.precomputeWindow(t, e)), 1 !== e && eh.set(t, r(i))), i;
                },
                wNAFCached(e, t, r) {
                  let i = ed(e);
                  return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                },
                wNAFCachedUnsafe(e, t, r, i) {
                  let s = ed(e);
                  return 1 === s
                    ? this.unsafeLadder(e, t, i)
                    : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, i);
                },
                setWindowSize(e, r) {
                  ec(r, t), eu.set(e, r), eh.delete(e);
                },
              });
          function D(e) {
            let t = i.BYTES;
            e = M('private key', e, t);
            let r = M('hashed private key', o(e), 2 * t),
              n = p(r.slice(0, t)),
              a = r.slice(t, 2 * t),
              c = Z(k(n), s),
              l = E.multiply(c),
              h = l.toRawBytes();
            return { head: n, prefix: a, scalar: c, point: l, pointBytes: h };
          }
          function A(e = new Uint8Array(), ...t) {
            return Z(k(o(g(q(...t), M('context', e), !!n))), s);
          }
          return (
            E._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function (e) {
                return D(e).pointBytes;
              },
              sign: function (e, t, r = {}) {
                (e = M('message', e)), n && (e = n(e));
                let { prefix: o, scalar: a, pointBytes: c } = D(t),
                  l = A(r.context, o, e),
                  h = E.multiply(l).toRawBytes(),
                  u = Z(l + A(r.context, h, c, e) * a, s);
                return B('signature.s', u, ef, s), M('result', q(h, L(u, i.BYTES)), 2 * i.BYTES);
              },
              verify: function (e, t, r, s = eb) {
                let o, a, c;
                let { context: l, zip215: h } = s,
                  u = i.BYTES;
                (e = M('signature', e, 2 * u)),
                  (t = M('message', t)),
                  (r = M('publicKey', r, u)),
                  void 0 !== h && O('zip215', h),
                  n && (t = n(t));
                let d = k(e.slice(u, 2 * u));
                try {
                  (o = w.fromHex(r, h)),
                    (a = w.fromHex(e.slice(0, u), h)),
                    (c = E.multiplyUnsafe(d));
                } catch {
                  return !1;
                }
                if (!h && o.isSmallOrder()) return !1;
                let f = A(l, a.toRawBytes(), o.toRawBytes(), t);
                return a.add(o.multiplyUnsafe(f)).subtract(c).clearCofactor().equals(w.ZERO);
              },
              ExtendedPoint: w,
              utils: {
                getExtendedPublicKey: D,
                randomPrivateKey: () => a(i.BYTES),
                precompute: (e = 8, t = w.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            '37095705934669439343138083508754565189542113879843219016388785533085940283555'
          ),
          Fp: ex,
          n: BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989'),
          h: eI,
          Gx: BigInt(
            '15112221349535400772501151409588531511454012693041857206046113283949847762202'
          ),
          Gy: BigInt(
            '46316835694926478169428394003475163141307993866256225615783033603165251855960'
          ),
          hash: E,
          randomBytes: u,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let r = Z(t * t * t, em),
              i = (function (e) {
                let t = BigInt(10),
                  r = BigInt(20),
                  i = BigInt(40),
                  s = BigInt(80),
                  n = (((e * e) % em) * e) % em,
                  o = (X(n, eE, em) * n) % em,
                  a = (X(o, ew, em) * e) % em,
                  c = (X(a, e_, em) * a) % em,
                  l = (X(c, t, em) * c) % em,
                  h = (X(l, r, em) * l) % em,
                  u = (X(h, i, em) * h) % em,
                  d = (X(u, s, em) * u) % em,
                  f = (X(d, s, em) * u) % em,
                  p = (X(f, t, em) * c) % em;
                return { pow_p_5_8: (X(p, eE, em) * e) % em, b2: n };
              })(e * Z(r * r * t, em)).pow_p_5_8,
              s = Z(e * r * i, em),
              n = Z(t * s * s, em),
              o = s,
              a = Z(s * ev, em),
              c = n === e,
              l = n === Z(-e, em),
              h = n === Z(-e * ev, em);
            return (
              c && (s = o),
              (l || h) && (s = a),
              et(s, em) && (s = Z(-s, em)),
              { isValid: c || l, value: s }
            );
          },
        }),
        eD = 'base64url',
        eO = 'utf8',
        eA = 'utf8',
        eP = 'base58btc';
      function eR(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
      }
      function eN(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? eR(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function eT(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = eN(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return eR(r);
      }
      var eC = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + ' is ambiguous');
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (var u = 0, d = n - 1; (0 !== h || u < s) && -1 !== d; d--, u++)
                (h += (a * o[d]) >>> 0), (o[d] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var f = n - s; f !== n && 0 === o[f]; ) f++;
              for (var p = new Uint8Array(i + (n - f)), g = i; f !== n; ) p[g++] = o[f++];
              return p;
            }
          }
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
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, r++;
            for (var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, f = o - 1; (0 !== u || d < i) && -1 !== f; f--, d++)
                (u += (256 * l[f]) >>> 0), (l[f] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var p = o - i; p !== o && 0 === l[p]; ) p++;
            for (var g = c.repeat(r); p < o; ++p) g += e.charAt(l[p]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let ek = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        eU = (e) => new TextEncoder().encode(e),
        eL = (e) => new TextDecoder().decode(e);
      class eM {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class eq {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return eB(this, e);
        }
      }
      class ej {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return eB(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let eB = (e, t) =>
        new ej({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class ez {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new eM(e, t, r)),
            (this.decoder = new eq(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let e$ = ({ name: e, prefix: t, encode: r, decode: i }) => new ez(e, t, r, i),
        eF = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = eC(r, t);
          return e$({ prefix: e, name: t, encode: i, decode: (e) => ek(s(e)) });
        },
        eV = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n), (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        eK = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            s = (1 << r) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i)) for (; (n.length * r) & 7; ) n += '=';
          return n;
        },
        eH = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          e$({ prefix: t, name: e, encode: (e) => eK(e, i, r), decode: (t) => eV(t, i, r, e) });
      var eJ = Object.freeze({
          __proto__: null,
          identity: e$({
            prefix: '\0',
            name: 'identity',
            encode: (e) => eL(e),
            decode: (e) => eU(e),
          }),
        }),
        eW = Object.freeze({
          __proto__: null,
          base2: eH({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        eG = Object.freeze({
          __proto__: null,
          base8: eH({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        eY = Object.freeze({
          __proto__: null,
          base10: eF({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        eQ = Object.freeze({
          __proto__: null,
          base16: eH({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: eH({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let eZ = eH({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        eX = eH({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        e0 = eH({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        e1 = eH({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        e2 = eH({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        e3 = eH({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        e8 = eH({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var e5 = Object.freeze({
          __proto__: null,
          base32: eZ,
          base32upper: eX,
          base32pad: e0,
          base32padupper: e1,
          base32hex: e2,
          base32hexupper: e3,
          base32hexpad: e8,
          base32hexpadupper: eH({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: eH({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        e6 = Object.freeze({
          __proto__: null,
          base36: eF({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: eF({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        e4 = Object.freeze({
          __proto__: null,
          base58btc: eF({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: eF({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let e9 = eH({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        e7 = eH({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var te = Object.freeze({
        __proto__: null,
        base64: e9,
        base64pad: e7,
        base64url: eH({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: eH({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let tt = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        tr = tt.reduce((e, t, r) => ((e[r] = t), e), []),
        ti = tt.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var ts = Object.freeze({
        __proto__: null,
        base256emoji: e$({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += tr[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = ti[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function tn(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (tn.bytes = r - i + 1), t;
      }
      function to(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((to.bytes = 0), RangeError('Could not decode varint'));
          (r = e[n++]), (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)), (s += 7);
        } while (r >= 128);
        return (to.bytes = n - t), i;
      }
      var ta = {
        encode: tn,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
              ? 2
              : e < 2097152
                ? 3
                : e < 0x10000000
                  ? 4
                  : e < 0x800000000
                    ? 5
                    : e < 0x40000000000
                      ? 6
                      : e < 0x2000000000000
                        ? 7
                        : e < 0x100000000000000
                          ? 8
                          : e < 0x8000000000000000
                            ? 9
                            : 10;
        },
      };
      let tc = (e, t, r = 0) => (ta.encode(e, t, r), t),
        tl = (e) => ta.encodingLength(e),
        th = (e, t) => {
          let r = t.byteLength,
            i = tl(e),
            s = i + tl(r),
            n = new Uint8Array(s + r);
          return tc(e, n, 0), tc(r, n, i), n.set(t, s), new tu(e, r, t, n);
        };
      class tu {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let td = ({ name: e, code: t, encode: r }) => new tf(e, t, r);
      class tf {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? th(this.code, t) : t.then((e) => th(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let tp = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var tg = Object.freeze({
          __proto__: null,
          sha256: td({ name: 'sha2-256', code: 18, encode: tp('SHA-256') }),
          sha512: td({ name: 'sha2-512', code: 19, encode: tp('SHA-512') }),
        }),
        ty = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: ek, digest: (e) => th(0, ek(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let tb = { ...eJ, ...eW, ...eG, ...eY, ...eQ, ...e5, ...e6, ...e4, ...te, ...ts };
      function tm(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...tg, ...ty });
      let tv = tm(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tw = tm(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = eN((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        tE = { utf8: tv, 'utf-8': tv, hex: tb.base16, latin1: tw, ascii: tw, binary: tw, ...tb };
      function t_(e, t = 'utf8') {
        let r = tE[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : r.encoder.encode(e).substring(1);
      }
      function tI(e, t = 'utf8') {
        let r = tE[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? eR(globalThis.Buffer.from(e, 'utf-8'))
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function tx(e) {
        return (0, s.j)(t_(tI(e, eD), eO));
      }
      function tS(e) {
        return t_(tI((0, s.h)(e), eO), eD);
      }
      function tD(e) {
        return ['did', 'key', 'z' + t_(eT([tI('K36', eP), e]), eP)].join(':');
      }
      function tO(e) {
        let t = e.split('.'),
          r = tx(t[0]),
          i = tx(t[1]);
        return {
          header: r,
          payload: i,
          signature: tI(t[2], eD),
          data: tI(t.slice(0, 2).join('.'), eA),
        };
      }
      function tA(e = u(32)) {
        let t = eS.getPublicKey(e);
        return { secretKey: eT([e, t]), publicKey: t };
      }
      async function tP(e, t, r, s, n = (0, i.fromMiliseconds)(Date.now())) {
        var o, a;
        let c = { alg: 'EdDSA', typ: 'JWT' },
          l = { iss: tD(s.publicKey), sub: e, aud: t, iat: n, exp: n + r },
          h = tI([tS((o = { header: c, payload: l }).header), tS(o.payload)].join('.'), eA);
        return [
          tS(
            (a = { header: c, payload: l, signature: eS.sign(h, s.secretKey.slice(0, 32)) }).header
          ),
          tS(a.payload),
          t_(a.signature, eD),
        ].join('.');
      }
    },
    13596: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      let i = r(72091);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    17283: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), r(54565).__exportStar(r(45764), t);
    },
    18193: (e, t, r) => {
      'use strict';
      r.d(t, { VH: () => l, li: () => c });
      var i = r(35978),
        s = r(87561),
        n = r(673);
      class o extends n.H {
        constructor(e) {
          super();
        }
      }
      let a = s.FIVE_SECONDS,
        c = { pulse: 'heartbeat_pulse' };
      class l extends o {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.interval = a),
            (this.interval = e?.interval || a);
        }
        static async init(e) {
          let t = new l(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async initialize() {
          this.intervalRef = setInterval(() => this.pulse(), (0, s.toMiliseconds)(this.interval));
        }
        pulse() {
          this.events.emit(c.pulse);
        }
      }
    },
    19757: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => A });
      let i =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        s =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        n = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function o(e, t) {
        if (
          '__proto__' === e ||
          ('constructor' === e && t && 'object' == typeof t && 'prototype' in t)
        ) {
          var r;
          (r = e), console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
          return;
        }
        return t;
      }
      function a(e, t = {}) {
        if ('string' != typeof e) return e;
        let r = e.trim();
        if ('"' === e[0] && e.endsWith('"') && !e.includes('\\')) return r.slice(1, -1);
        if (r.length <= 9) {
          let e = r.toLowerCase();
          if ('true' === e) return !0;
          if ('false' === e) return !1;
          if ('undefined' === e) return;
          if ('null' === e) return null;
          if ('nan' === e) return Number.NaN;
          if ('infinity' === e) return Number.POSITIVE_INFINITY;
          if ('-infinity' === e) return Number.NEGATIVE_INFINITY;
        }
        if (!n.test(e)) {
          if (t.strict) throw SyntaxError('[destr] Invalid JSON');
          return e;
        }
        try {
          if (i.test(e) || s.test(e)) {
            if (t.strict) throw Error('[destr] Possible prototype pollution');
            return JSON.parse(e, o);
          }
          return JSON.parse(e);
        } catch (r) {
          if (t.strict) throw r;
          return e;
        }
      }
      var c = r(51642).Buffer;
      function l(e, ...t) {
        try {
          var r;
          return (r = e(...t)) && 'function' == typeof r.then ? r : Promise.resolve(r);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function h(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ('object' !== t && 'function' !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ('function' == typeof e.toJSON) return h(e.toJSON());
        throw Error('[unstorage] Cannot stringify value!');
      }
      function u() {
        if (void 0 === c) throw TypeError('[unstorage] Buffer is not supported!');
      }
      let d = 'base64:';
      function f(e) {
        return e
          ? e.split('?')[0].replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '')
          : '';
      }
      function p(e) {
        return (e = f(e)) ? e + ':' : '';
      }
      let g = () => {
        let e = new Map();
        return {
          name: 'memory',
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function y(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {};
      }
      async function b(e) {
        'function' == typeof e.dispose && (await l(e.dispose));
      }
      var m = r(31831),
        v = r(41035),
        w = (e = {}) => {
          let t;
          let r = e.base && e.base.length > 0 ? `${e.base}:` : '',
            i = (e) => r + e;
          return (
            e.dbName && e.storeName && (t = (0, m.y$)(e.dbName, e.storeName)),
            {
              name: 'idb-keyval',
              options: e,
              hasItem: async (e) => !(typeof (await (0, m.Jt)(i(e), t)) > 'u'),
              getItem: async (e) => (await (0, m.Jt)(i(e), t)) ?? null,
              setItem: (e, r) => (0, m.hZ)(i(e), r, t),
              removeItem: (e) => (0, m.yH)(i(e), t),
              getKeys: () => (0, m.HP)(t),
              clear: () => (0, m.IU)(t),
            }
          );
        };
      class E {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { '': e.driver || g() },
                mountpoints: [''],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              r = (e) => {
                for (let r of t.mountpoints)
                  if (e.startsWith(r))
                    return { base: r, relativeKey: e.slice(r.length), driver: t.mounts[r] };
                return { base: '', relativeKey: e, driver: t.mounts[''] };
              },
              i = (e, r) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
                  .map((r) => ({
                    relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                    mountpoint: r,
                    driver: t.mounts[r],
                  })),
              s = (e, r) => {
                if (t.watching) for (let i of ((r = f(r)), t.watchListeners)) i(e, r);
              },
              n = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await y(t.mounts[e], s, e);
              },
              o = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              m = (e, t, i) => {
                let s = new Map(),
                  n = (e) => {
                    let t = s.get(e.base);
                    return (
                      t || ((t = { driver: e.driver, base: e.base, items: [] }), s.set(e.base, t)),
                      t
                    );
                  };
                for (let i of e) {
                  let e = 'string' == typeof i,
                    s = f(e ? i : i.key),
                    o = e ? void 0 : i.value,
                    a = e || !i.options ? t : { ...t, ...i.options },
                    c = r(s);
                  n(c).items.push({ key: s, value: o, relativeKey: c.relativeKey, options: a });
                }
                return Promise.all([...s.values()].map((e) => i(e))).then((e) => e.flat());
              },
              v = {
                hasItem(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = f(e)));
                  return l(s.hasItem, i, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = f(e)));
                  return l(s.getItem, i, t).then((e) => a(e));
                },
                getItems: (e, t) =>
                  m(e, t, (e) =>
                    e.driver.getItems
                      ? l(
                          e.driver.getItems,
                          e.items.map((e) => ({ key: e.relativeKey, options: e.options })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return f(e.join(':'));
                            })(e.base, t.key),
                            value: a(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            l(e.driver.getItem, t.relativeKey, t.options).then((e) => ({
                              key: t.key,
                              value: a(e),
                            }))
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = f(e)));
                  return s.getItemRaw
                    ? l(s.getItemRaw, i, t)
                    : l(s.getItem, i, t).then((e) =>
                        'string' == typeof e && e.startsWith(d)
                          ? (u(), c.from(e.slice(d.length), 'base64'))
                          : e
                      );
                },
                async setItem(e, t, i = {}) {
                  if (void 0 === t) return v.removeItem(e);
                  let { relativeKey: n, driver: o } = r((e = f(e)));
                  o.setItem && (await l(o.setItem, n, h(t), i), o.watch || s('update', e));
                },
                async setItems(e, t) {
                  await m(e, t, async (e) => {
                    if (e.driver.setItems)
                      return l(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: h(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          l(e.driver.setItem, t.relativeKey, h(t.value), t.options)
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, i = {}) {
                  if (void 0 === t) return v.removeItem(e, i);
                  let { relativeKey: n, driver: o } = r((e = f(e)));
                  if (o.setItemRaw) await l(o.setItemRaw, n, t, i);
                  else {
                    if (!o.setItem) return;
                    await l(
                      o.setItem,
                      n,
                      'string' == typeof t ? t : (u(), d + c.from(t).toString('base64')),
                      i
                    );
                  }
                  o.watch || s('update', e);
                },
                async removeItem(e, t = {}) {
                  'boolean' == typeof t && (t = { removeMeta: t });
                  let { relativeKey: i, driver: n } = r((e = f(e)));
                  n.removeItem &&
                    (await l(n.removeItem, i, t),
                    (t.removeMeta || t.removeMata) && (await l(n.removeItem, i + '$', t)),
                    n.watch || s('remove', e));
                },
                async getMeta(e, t = {}) {
                  'boolean' == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: i, driver: s } = r((e = f(e))),
                    n = Object.create(null);
                  if ((s.getMeta && Object.assign(n, await l(s.getMeta, i, t)), !t.nativeOnly)) {
                    let e = await l(s.getItem, i + '$', t).then((e) => a(e));
                    e &&
                      'object' == typeof e &&
                      ('string' == typeof e.atime && (e.atime = new Date(e.atime)),
                      'string' == typeof e.mtime && (e.mtime = new Date(e.mtime)),
                      Object.assign(n, e));
                  }
                  return n;
                },
                setMeta(e, t, r = {}) {
                  return this.setItem(e + '$', t, r);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + '$', t);
                },
                async getKeys(e, t = {}) {
                  let r = i((e = p(e)), !0),
                    s = [],
                    n = [];
                  for (let e of r) {
                    for (let r of await l(e.driver.getKeys, e.relativeBase, t)) {
                      let t = e.mountpoint + f(r);
                      s.some((e) => t.startsWith(e)) || n.push(t);
                    }
                    s = [e.mountpoint, ...s.filter((t) => !t.startsWith(e.mountpoint))];
                  }
                  return e
                    ? n.filter((t) => t.startsWith(e) && '$' !== t[t.length - 1])
                    : n.filter((e) => '$' !== e[e.length - 1]);
                },
                async clear(e, t = {}) {
                  (e = p(e)),
                    await Promise.all(
                      i(e, !1).map(async (e) =>
                        e.driver.clear
                          ? l(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                            ? Promise.all(
                                (await e.driver.getKeys(e.relativeBase || '', t)).map((r) =>
                                  e.driver.removeItem(r, t)
                                )
                              )
                            : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => b(e)));
                },
                watch: async (e) => (
                  await n(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter((t) => t !== e)),
                      0 === t.watchListeners.length && (await o());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await o();
                },
                mount(e, r) {
                  if ((e = p(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                  return (
                    e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = r),
                    t.watching &&
                      Promise.resolve(y(r, s, e))
                        .then((r) => {
                          t.unwatch[e] = r;
                        })
                        .catch(console.error),
                    v
                  );
                },
                async unmount(e, r = !0) {
                  (e = p(e)) &&
                    t.mounts[e] &&
                    (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]),
                    r && (await b(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = '') {
                  let t = r((e = f(e) + ':'));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = '', t = {}) =>
                  i((e = f(e)), t.parents).map((e) => ({ driver: e.driver, base: e.mountpoint })),
                keys: (e, t = {}) => v.getKeys(e, t),
                get: (e, t = {}) => v.getItem(e, t),
                set: (e, t, r = {}) => v.setItem(e, t, r),
                has: (e, t = {}) => v.hasItem(e, t),
                del: (e, t = {}) => v.removeItem(e, t),
                remove: (e, t = {}) => v.removeItem(e, t),
              };
            return v;
          })({
            driver: w({ dbName: 'WALLET_CONNECT_V2_INDEXED_DB', storeName: 'keyvaluestorage' }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [
            e.key,
            e.value,
          ]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, v.h)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var _ =
          'u' > typeof globalThis
            ? globalThis
            : 'u' > typeof window
              ? window
              : 'u' > typeof r.g
                ? r.g
                : 'u' > typeof self
                  ? self
                  : {},
        I = { exports: {} };
      function x(e) {
        var t;
        return [e[0], (0, v.j)(null != (t = e[1]) ? t : '')];
      }
      !(function () {
        function e() {}
        (e.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__('length', function () {
            return Object.keys(this).length;
          }),
          'u' > typeof _ && _.localStorage
            ? (I.exports = _.localStorage)
            : 'u' > typeof window && window.localStorage
              ? (I.exports = window.localStorage)
              : (I.exports = new e());
      })();
      class S {
        constructor() {
          this.localStorage = I.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(x);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return (0, v.j)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, v.h)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let D = async (e, t, r) => {
          let i = 'wc_storage_version',
            s = await t.getItem(i);
          if (s && s >= 1) {
            r(t);
            return;
          }
          let n = await e.getKeys();
          if (!n.length) {
            r(t);
            return;
          }
          let o = [];
          for (; n.length; ) {
            let r = n.shift();
            if (!r) continue;
            let i = r.toLowerCase();
            if (
              i.includes('wc@') ||
              i.includes('walletconnect') ||
              i.includes('wc_') ||
              i.includes('wallet_connect')
            ) {
              let i = await e.getItem(r);
              await t.setItem(r, i), o.push(r);
            }
          }
          await t.setItem(i, 1), r(t), O(e, o);
        },
        O = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class A {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new S();
          this.storage = e;
          try {
            let t = new E();
            D(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
    },
    21440: (e, t, r) => {
      'use strict';
      let i = r(65696);
      e.exports = n;
      let s =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ('undefined' != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, 'globalThis', {
                get: function () {
                  return delete Object.prototype.globalThis, (this.globalThis = this);
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function n(e) {
        var t, r;
        (e = e || {}).browser = e.browser || {};
        let i = e.browser.transmit;
        if (i && 'function' != typeof i.send)
          throw Error('pino: transmit option must have a send function');
        let h = e.browser.write || s;
        e.browser.write && (e.browser.asObject = !0);
        let u = e.serializers || {},
          g = Array.isArray((t = e.browser.serialize))
            ? t.filter(function (e) {
                return '!stdSerializers.err' !== e;
              })
            : !0 === t && Object.keys(u),
          y = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
          (y = !1),
          'function' == typeof h && (h.error = h.fatal = h.warn = h.info = h.debug = h.trace = h),
          !1 === e.enabled && (e.level = 'silent');
        let b = e.level || 'info',
          m = Object.create(h);
        m.log || (m.log = d),
          Object.defineProperty(m, 'levelVal', {
            get: function () {
              return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(m, 'level', {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
              (this._level = e),
                o(v, m, 'error', 'log'),
                o(v, m, 'fatal', 'error'),
                o(v, m, 'warn', 'error'),
                o(v, m, 'info', 'log'),
                o(v, m, 'debug', 'log'),
                o(v, m, 'trace', 'log');
            },
          });
        let v = {
          transmit: i,
          serialize: g,
          asObject: e.browser.asObject,
          levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
          timestamp:
            'function' == typeof (r = e).timestamp ? r.timestamp : !1 === r.timestamp ? f : p,
        };
        return (
          (m.levels = n.levels),
          (m.level = b),
          (m.setMaxListeners =
            m.getMaxListeners =
            m.emit =
            m.addListener =
            m.on =
            m.prependListener =
            m.once =
            m.prependOnceListener =
            m.removeListener =
            m.removeAllListeners =
            m.listeners =
            m.listenerCount =
            m.eventNames =
            m.write =
            m.flush =
              d),
          (m.serializers = u),
          (m._serialize = g),
          (m._stdErrSerialize = y),
          (m.child = function (t, r) {
            if (!t) throw Error('missing bindings for child Pino');
            (r = r || {}), g && t.serializers && (r.serializers = t.serializers);
            let s = r.serializers;
            if (g && s) {
              var n = Object.assign({}, u, s),
                o = !0 === e.browser.serialize ? Object.keys(n) : g;
              delete t.serializers, a([t], o, n, this._stdErrSerialize);
            }
            function h(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = c(e, t, 'error')),
                (this.fatal = c(e, t, 'fatal')),
                (this.warn = c(e, t, 'warn')),
                (this.info = c(e, t, 'info')),
                (this.debug = c(e, t, 'debug')),
                (this.trace = c(e, t, 'trace')),
                n && ((this.serializers = n), (this._serialize = o)),
                i && (this._logEvent = l([].concat(e._logEvent.bindings, t)));
            }
            return (h.prototype = this), new h(this);
          }),
          i && (m._logEvent = l()),
          m
        );
      }
      function o(e, t, r, o) {
        let c = Object.getPrototypeOf(t);
        (t[r] = t.levelVal > t.levels.values[r] ? d : c[r] ? c[r] : s[r] || s[o] || d),
          (function (e, t, r) {
            if (e.transmit || t[r] !== d) {
              var o;
              t[r] =
                ((o = t[r]),
                function () {
                  let c = e.timestamp(),
                    h = Array(arguments.length),
                    u = Object.getPrototypeOf && Object.getPrototypeOf(this) === s ? s : this;
                  for (var d = 0; d < h.length; d++) h[d] = arguments[d];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(h, this._serialize, this.serializers, this._stdErrSerialize),
                    e.asObject
                      ? o.call(
                          u,
                          (function (e, t, r, s) {
                            e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                            let o = r.slice(),
                              c = o[0],
                              l = {};
                            s && (l.time = s), (l.level = n.levels.values[t]);
                            let h = (0 | e._childLevel) + 1;
                            if ((h < 1 && (h = 1), null !== c && 'object' == typeof c)) {
                              for (; h-- && 'object' == typeof o[0]; ) Object.assign(l, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else 'string' == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (l.msg = c), l;
                          })(this, r, h, c)
                        )
                      : o.apply(u, h),
                    e.transmit)
                  ) {
                    let i = e.transmit.level || t.level,
                      s = n.levels.values[i],
                      o = n.levels.values[r];
                    if (o < s) return;
                    (function (e, t, r) {
                      let i = t.send,
                        s = t.ts,
                        n = t.methodLevel,
                        o = t.methodValue,
                        c = t.val,
                        h = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = s),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === h.indexOf(e);
                        })),
                        (e._logEvent.level.label = n),
                        (e._logEvent.level.value = o),
                        i(n, e._logEvent, c),
                        (e._logEvent = l(h));
                    })(
                      this,
                      {
                        ts: c,
                        methodLevel: r,
                        methodValue: o,
                        transmitLevel: i,
                        transmitValue: n.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      h
                    );
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, i) {
        for (let s in e)
          if (i && e[s] instanceof Error) e[s] = n.stdSerializers.err(e[s]);
          else if ('object' == typeof e[s] && !Array.isArray(e[s]))
            for (let i in e[s]) t && t.indexOf(i) > -1 && i in r && (e[s][i] = r[i](e[s][i]));
      }
      function c(e, t, r) {
        return function () {
          let i = Array(1 + arguments.length);
          i[0] = t;
          for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
          return e[r].apply(this, i);
        };
      }
      function l(e) {
        return { ts: 0, messages: [], bindings: e || [], level: { label: '', value: 0 } };
      }
      function h() {
        return {};
      }
      function u(e) {
        return e;
      }
      function d() {}
      function f() {
        return !1;
      }
      function p() {
        return Date.now();
      }
      (n.levels = {
        values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
        labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' },
      }),
        (n.stdSerializers = {
          mapHttpRequest: h,
          mapHttpResponse: h,
          wrapRequestSerializer: u,
          wrapResponseSerializer: u,
          wrapErrorSerializer: u,
          req: h,
          res: h,
          err: function (e) {
            let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (n.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: f,
            epochTime: p,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
    22533: (e, t, r) => {
      var i,
        s = r(29143);
      !(function () {
        'use strict';
        var n = 'input is invalid type',
          o = 'object' == typeof window,
          a = o ? window : {};
        a.JS_SHA3_NO_WINDOW && (o = !1);
        var c = !o && 'object' == typeof self;
        !a.JS_SHA3_NO_NODE_JS && 'object' == typeof s && s.versions && s.versions.node
          ? (a = r.g)
          : c && (a = self);
        var l = !a.JS_SHA3_NO_COMMON_JS && e.exports,
          h = r.amdO,
          u = !a.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          d = '0123456789abcdef'.split(''),
          f = [4, 1024, 262144, 0x4000000],
          p = [0, 8, 16, 24],
          g = [
            1, 0, 32898, 0, 32906, 0x80000000, 0x80008000, 0x80000000, 32907, 0, 0x80000001, 0,
            0x80008081, 0x80000000, 32777, 0x80000000, 138, 0, 136, 0, 0x80008009, 0, 0x8000000a, 0,
            0x8000808b, 0, 139, 0x80000000, 32905, 0x80000000, 32771, 0x80000000, 32770, 0x80000000,
            128, 0x80000000, 32778, 0, 0x8000000a, 0x80000000, 0x80008081, 0x80000000, 32896,
            0x80000000, 0x80000001, 0, 0x80008008, 0x80000000,
          ],
          y = [224, 256, 384, 512],
          b = [128, 256],
          m = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
          v = { 128: 168, 256: 136 };
        (a.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          }),
          u &&
            (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (e) {
              return 'object' == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
            });
        for (
          var w = function (e, t, r) {
              return function (i) {
                return new U(e, t, e).update(i)[r]();
              };
            },
            E = function (e, t, r) {
              return function (i, s) {
                return new U(e, t, s).update(i)[r]();
              };
            },
            _ = function (e, t, r) {
              return function (t, i, s, n) {
                return O['cshake' + e].update(t, i, s, n)[r]();
              };
            },
            I = function (e, t, r) {
              return function (t, i, s, n) {
                return O['kmac' + e].update(t, i, s, n)[r]();
              };
            },
            x = function (e, t, r, i) {
              for (var s = 0; s < m.length; ++s) {
                var n = m[s];
                e[n] = t(r, i, n);
              }
              return e;
            },
            S = function (e, t) {
              var r = w(e, t, 'hex');
              return (
                (r.create = function () {
                  return new U(e, t, e);
                }),
                (r.update = function (e) {
                  return r.create().update(e);
                }),
                x(r, w, e, t)
              );
            },
            D = [
              { name: 'keccak', padding: [1, 256, 65536, 0x1000000], bits: y, createMethod: S },
              { name: 'sha3', padding: [6, 1536, 393216, 0x6000000], bits: y, createMethod: S },
              {
                name: 'shake',
                padding: [31, 7936, 2031616, 0x1f000000],
                bits: b,
                createMethod: function (e, t) {
                  var r = E(e, t, 'hex');
                  return (
                    (r.create = function (r) {
                      return new U(e, t, r);
                    }),
                    (r.update = function (e, t) {
                      return r.create(t).update(e);
                    }),
                    x(r, E, e, t)
                  );
                },
              },
              {
                name: 'cshake',
                padding: f,
                bits: b,
                createMethod: function (e, t) {
                  var r = v[e],
                    i = _(e, t, 'hex');
                  return (
                    (i.create = function (i, s, n) {
                      return s || n ? new U(e, t, i).bytepad([s, n], r) : O['shake' + e].create(i);
                    }),
                    (i.update = function (e, t, r, s) {
                      return i.create(t, r, s).update(e);
                    }),
                    x(i, _, e, t)
                  );
                },
              },
              {
                name: 'kmac',
                padding: f,
                bits: b,
                createMethod: function (e, t) {
                  var r = v[e],
                    i = I(e, t, 'hex');
                  return (
                    (i.create = function (i, s, n) {
                      return new L(e, t, s).bytepad(['KMAC', n], r).bytepad([i], r);
                    }),
                    (i.update = function (e, t, r, s) {
                      return i.create(e, r, s).update(t);
                    }),
                    x(i, I, e, t)
                  );
                },
              },
            ],
            O = {},
            A = [],
            P = 0;
          P < D.length;
          ++P
        )
          for (var R = D[P], N = R.bits, T = 0; T < N.length; ++T) {
            var C = R.name + '_' + N[T];
            if ((A.push(C), (O[C] = R.createMethod(N[T], R.padding)), 'sha3' !== R.name)) {
              var k = R.name + N[T];
              A.push(k), (O[k] = O[C]);
            }
          }
        function U(e, t, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = t),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (e << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var i = 0; i < 50; ++i) this.s[i] = 0;
        }
        function L(e, t, r) {
          U.call(this, e, t, r);
        }
        (U.prototype.update = function (e) {
          if (this.finalized) throw Error('finalize already called');
          var t,
            r = typeof e;
          if ('string' !== r) {
            if ('object' === r) {
              if (null === e) throw Error(n);
              if (u && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!Array.isArray(e) && (!u || !ArrayBuffer.isView(e))) throw Error(n);
            } else throw Error(n);
            t = !0;
          }
          for (
            var i,
              s,
              o = this.blocks,
              a = this.byteCount,
              c = e.length,
              l = this.blockCount,
              h = 0,
              d = this.s;
            h < c;

          ) {
            if (this.reset)
              for (i = 1, this.reset = !1, o[0] = this.block; i < l + 1; ++i) o[i] = 0;
            if (t) for (i = this.start; h < c && i < a; ++h) o[i >> 2] |= e[h] << p[3 & i++];
            else
              for (i = this.start; h < c && i < a; ++h)
                (s = e.charCodeAt(h)) < 128
                  ? (o[i >> 2] |= s << p[3 & i++])
                  : (s < 2048
                      ? (o[i >> 2] |= (192 | (s >> 6)) << p[3 & i++])
                      : (s < 55296 || s >= 57344
                          ? (o[i >> 2] |= (224 | (s >> 12)) << p[3 & i++])
                          : ((s = 65536 + (((1023 & s) << 10) | (1023 & e.charCodeAt(++h)))),
                            (o[i >> 2] |= (240 | (s >> 18)) << p[3 & i++]),
                            (o[i >> 2] |= (128 | ((s >> 12) & 63)) << p[3 & i++])),
                        (o[i >> 2] |= (128 | ((s >> 6) & 63)) << p[3 & i++])),
                    (o[i >> 2] |= (128 | (63 & s)) << p[3 & i++]));
            if (((this.lastByteIndex = i), i >= a)) {
              for (this.start = i - a, this.block = o[l], i = 0; i < l; ++i) d[i] ^= o[i];
              M(d), (this.reset = !0);
            } else this.start = i;
          }
          return this;
        }),
          (U.prototype.encode = function (e, t) {
            var r = 255 & e,
              i = 1,
              s = [r];
            for (e >>= 8, r = 255 & e; r > 0; ) s.unshift(r), (e >>= 8), (r = 255 & e), ++i;
            return t ? s.push(i) : s.unshift(i), this.update(s), s.length;
          }),
          (U.prototype.encodeString = function (e) {
            var t,
              r = typeof e;
            if ('string' !== r) {
              if ('object' === r) {
                if (null === e) throw Error(n);
                if (u && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!Array.isArray(e) && (!u || !ArrayBuffer.isView(e))) throw Error(n);
              } else throw Error(n);
              t = !0;
            }
            var i = 0,
              s = e.length;
            if (t) i = s;
            else
              for (var o = 0; o < e.length; ++o) {
                var a = e.charCodeAt(o);
                a < 128
                  ? (i += 1)
                  : a < 2048
                    ? (i += 2)
                    : a < 55296 || a >= 57344
                      ? (i += 3)
                      : ((a = 65536 + (((1023 & a) << 10) | (1023 & e.charCodeAt(++o)))), (i += 4));
              }
            return (i += this.encode(8 * i)), this.update(e), i;
          }),
          (U.prototype.bytepad = function (e, t) {
            for (var r = this.encode(t), i = 0; i < e.length; ++i) r += this.encodeString(e[i]);
            var s = [];
            return (s.length = t - (r % t)), this.update(s), this;
          }),
          (U.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var e = this.blocks,
                t = this.lastByteIndex,
                r = this.blockCount,
                i = this.s;
              if (((e[t >> 2] |= this.padding[3 & t]), this.lastByteIndex === this.byteCount))
                for (t = 1, e[0] = e[r]; t < r + 1; ++t) e[t] = 0;
              for (e[r - 1] |= 0x80000000, t = 0; t < r; ++t) i[t] ^= e[t];
              M(i);
            }
          }),
          (U.prototype.toString = U.prototype.hex =
            function () {
              this.finalize();
              for (
                var e,
                  t = this.blockCount,
                  r = this.s,
                  i = this.outputBlocks,
                  s = this.extraBytes,
                  n = 0,
                  o = 0,
                  a = '';
                o < i;

              ) {
                for (n = 0; n < t && o < i; ++n, ++o)
                  a +=
                    d[((e = r[n]) >> 4) & 15] +
                    d[15 & e] +
                    d[(e >> 12) & 15] +
                    d[(e >> 8) & 15] +
                    d[(e >> 20) & 15] +
                    d[(e >> 16) & 15] +
                    d[(e >> 28) & 15] +
                    d[(e >> 24) & 15];
                o % t == 0 && (M(r), (n = 0));
              }
              return (
                s &&
                  ((a += d[((e = r[n]) >> 4) & 15] + d[15 & e]),
                  s > 1 && (a += d[(e >> 12) & 15] + d[(e >> 8) & 15]),
                  s > 2 && (a += d[(e >> 20) & 15] + d[(e >> 16) & 15])),
                a
              );
            }),
          (U.prototype.arrayBuffer = function () {
            this.finalize();
            for (
              var e,
                t = this.blockCount,
                r = this.s,
                i = this.outputBlocks,
                s = this.extraBytes,
                n = 0,
                o = 0,
                a = this.outputBits >> 3,
                c = new Uint32Array((e = new ArrayBuffer(s ? (i + 1) << 2 : a)));
              o < i;

            ) {
              for (n = 0; n < t && o < i; ++n, ++o) c[o] = r[n];
              o % t == 0 && M(r);
            }
            return s && ((c[n] = r[n]), (e = e.slice(0, a))), e;
          }),
          (U.prototype.buffer = U.prototype.arrayBuffer),
          (U.prototype.digest = U.prototype.array =
            function () {
              this.finalize();
              for (
                var e,
                  t,
                  r = this.blockCount,
                  i = this.s,
                  s = this.outputBlocks,
                  n = this.extraBytes,
                  o = 0,
                  a = 0,
                  c = [];
                a < s;

              ) {
                for (o = 0; o < r && a < s; ++o, ++a)
                  (e = a << 2),
                    (t = i[o]),
                    (c[e] = 255 & t),
                    (c[e + 1] = (t >> 8) & 255),
                    (c[e + 2] = (t >> 16) & 255),
                    (c[e + 3] = (t >> 24) & 255);
                a % r == 0 && M(i);
              }
              return (
                n &&
                  ((e = a << 2),
                  (t = i[o]),
                  (c[e] = 255 & t),
                  n > 1 && (c[e + 1] = (t >> 8) & 255),
                  n > 2 && (c[e + 2] = (t >> 16) & 255)),
                c
              );
            }),
          (L.prototype = new U()),
          (L.prototype.finalize = function () {
            return this.encode(this.outputBits, !0), U.prototype.finalize.call(this);
          });
        var M = function (e) {
          var t,
            r,
            i,
            s,
            n,
            o,
            a,
            c,
            l,
            h,
            u,
            d,
            f,
            p,
            y,
            b,
            m,
            v,
            w,
            E,
            _,
            I,
            x,
            S,
            D,
            O,
            A,
            P,
            R,
            N,
            T,
            C,
            k,
            U,
            L,
            M,
            q,
            j,
            B,
            z,
            $,
            F,
            V,
            K,
            H,
            J,
            W,
            G,
            Y,
            Q,
            Z,
            X,
            ee,
            et,
            er,
            ei,
            es,
            en,
            eo,
            ea,
            ec,
            el,
            eh;
          for (i = 0; i < 48; i += 2)
            (s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
              (n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
              (o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
              (a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
              (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
              (l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
              (h = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
              (u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
              (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]),
              (f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]),
              (t = d ^ ((o << 1) | (a >>> 31))),
              (r = f ^ ((a << 1) | (o >>> 31))),
              (e[0] ^= t),
              (e[1] ^= r),
              (e[10] ^= t),
              (e[11] ^= r),
              (e[20] ^= t),
              (e[21] ^= r),
              (e[30] ^= t),
              (e[31] ^= r),
              (e[40] ^= t),
              (e[41] ^= r),
              (t = s ^ ((c << 1) | (l >>> 31))),
              (r = n ^ ((l << 1) | (c >>> 31))),
              (e[2] ^= t),
              (e[3] ^= r),
              (e[12] ^= t),
              (e[13] ^= r),
              (e[22] ^= t),
              (e[23] ^= r),
              (e[32] ^= t),
              (e[33] ^= r),
              (e[42] ^= t),
              (e[43] ^= r),
              (t = o ^ ((h << 1) | (u >>> 31))),
              (r = a ^ ((u << 1) | (h >>> 31))),
              (e[4] ^= t),
              (e[5] ^= r),
              (e[14] ^= t),
              (e[15] ^= r),
              (e[24] ^= t),
              (e[25] ^= r),
              (e[34] ^= t),
              (e[35] ^= r),
              (e[44] ^= t),
              (e[45] ^= r),
              (t = c ^ ((d << 1) | (f >>> 31))),
              (r = l ^ ((f << 1) | (d >>> 31))),
              (e[6] ^= t),
              (e[7] ^= r),
              (e[16] ^= t),
              (e[17] ^= r),
              (e[26] ^= t),
              (e[27] ^= r),
              (e[36] ^= t),
              (e[37] ^= r),
              (e[46] ^= t),
              (e[47] ^= r),
              (t = h ^ ((s << 1) | (n >>> 31))),
              (r = u ^ ((n << 1) | (s >>> 31))),
              (e[8] ^= t),
              (e[9] ^= r),
              (e[18] ^= t),
              (e[19] ^= r),
              (e[28] ^= t),
              (e[29] ^= r),
              (e[38] ^= t),
              (e[39] ^= r),
              (e[48] ^= t),
              (e[49] ^= r),
              (p = e[0]),
              (y = e[1]),
              (J = (e[11] << 4) | (e[10] >>> 28)),
              (W = (e[10] << 4) | (e[11] >>> 28)),
              (P = (e[20] << 3) | (e[21] >>> 29)),
              (R = (e[21] << 3) | (e[20] >>> 29)),
              (ea = (e[31] << 9) | (e[30] >>> 23)),
              (ec = (e[30] << 9) | (e[31] >>> 23)),
              (F = (e[40] << 18) | (e[41] >>> 14)),
              (V = (e[41] << 18) | (e[40] >>> 14)),
              (U = (e[2] << 1) | (e[3] >>> 31)),
              (L = (e[3] << 1) | (e[2] >>> 31)),
              (b = (e[13] << 12) | (e[12] >>> 20)),
              (m = (e[12] << 12) | (e[13] >>> 20)),
              (G = (e[22] << 10) | (e[23] >>> 22)),
              (Y = (e[23] << 10) | (e[22] >>> 22)),
              (N = (e[33] << 13) | (e[32] >>> 19)),
              (T = (e[32] << 13) | (e[33] >>> 19)),
              (el = (e[42] << 2) | (e[43] >>> 30)),
              (eh = (e[43] << 2) | (e[42] >>> 30)),
              (et = (e[5] << 30) | (e[4] >>> 2)),
              (er = (e[4] << 30) | (e[5] >>> 2)),
              (M = (e[14] << 6) | (e[15] >>> 26)),
              (q = (e[15] << 6) | (e[14] >>> 26)),
              (v = (e[25] << 11) | (e[24] >>> 21)),
              (w = (e[24] << 11) | (e[25] >>> 21)),
              (Q = (e[34] << 15) | (e[35] >>> 17)),
              (Z = (e[35] << 15) | (e[34] >>> 17)),
              (C = (e[45] << 29) | (e[44] >>> 3)),
              (k = (e[44] << 29) | (e[45] >>> 3)),
              (S = (e[6] << 28) | (e[7] >>> 4)),
              (D = (e[7] << 28) | (e[6] >>> 4)),
              (ei = (e[17] << 23) | (e[16] >>> 9)),
              (es = (e[16] << 23) | (e[17] >>> 9)),
              (j = (e[26] << 25) | (e[27] >>> 7)),
              (B = (e[27] << 25) | (e[26] >>> 7)),
              (E = (e[36] << 21) | (e[37] >>> 11)),
              (_ = (e[37] << 21) | (e[36] >>> 11)),
              (X = (e[47] << 24) | (e[46] >>> 8)),
              (ee = (e[46] << 24) | (e[47] >>> 8)),
              (K = (e[8] << 27) | (e[9] >>> 5)),
              (H = (e[9] << 27) | (e[8] >>> 5)),
              (O = (e[18] << 20) | (e[19] >>> 12)),
              (A = (e[19] << 20) | (e[18] >>> 12)),
              (en = (e[29] << 7) | (e[28] >>> 25)),
              (eo = (e[28] << 7) | (e[29] >>> 25)),
              (z = (e[38] << 8) | (e[39] >>> 24)),
              ($ = (e[39] << 8) | (e[38] >>> 24)),
              (I = (e[48] << 14) | (e[49] >>> 18)),
              (x = (e[49] << 14) | (e[48] >>> 18)),
              (e[0] = p ^ (~b & v)),
              (e[1] = y ^ (~m & w)),
              (e[10] = S ^ (~O & P)),
              (e[11] = D ^ (~A & R)),
              (e[20] = U ^ (~M & j)),
              (e[21] = L ^ (~q & B)),
              (e[30] = K ^ (~J & G)),
              (e[31] = H ^ (~W & Y)),
              (e[40] = et ^ (~ei & en)),
              (e[41] = er ^ (~es & eo)),
              (e[2] = b ^ (~v & E)),
              (e[3] = m ^ (~w & _)),
              (e[12] = O ^ (~P & N)),
              (e[13] = A ^ (~R & T)),
              (e[22] = M ^ (~j & z)),
              (e[23] = q ^ (~B & $)),
              (e[32] = J ^ (~G & Q)),
              (e[33] = W ^ (~Y & Z)),
              (e[42] = ei ^ (~en & ea)),
              (e[43] = es ^ (~eo & ec)),
              (e[4] = v ^ (~E & I)),
              (e[5] = w ^ (~_ & x)),
              (e[14] = P ^ (~N & C)),
              (e[15] = R ^ (~T & k)),
              (e[24] = j ^ (~z & F)),
              (e[25] = B ^ (~$ & V)),
              (e[34] = G ^ (~Q & X)),
              (e[35] = Y ^ (~Z & ee)),
              (e[44] = en ^ (~ea & el)),
              (e[45] = eo ^ (~ec & eh)),
              (e[6] = E ^ (~I & p)),
              (e[7] = _ ^ (~x & y)),
              (e[16] = N ^ (~C & S)),
              (e[17] = T ^ (~k & D)),
              (e[26] = z ^ (~F & U)),
              (e[27] = $ ^ (~V & L)),
              (e[36] = Q ^ (~X & K)),
              (e[37] = Z ^ (~ee & H)),
              (e[46] = ea ^ (~el & et)),
              (e[47] = ec ^ (~eh & er)),
              (e[8] = I ^ (~p & b)),
              (e[9] = x ^ (~y & m)),
              (e[18] = C ^ (~S & O)),
              (e[19] = k ^ (~D & A)),
              (e[28] = F ^ (~U & M)),
              (e[29] = V ^ (~L & q)),
              (e[38] = X ^ (~K & J)),
              (e[39] = ee ^ (~H & W)),
              (e[48] = el ^ (~et & ei)),
              (e[49] = eh ^ (~er & es)),
              (e[0] ^= g[i]),
              (e[1] ^= g[i + 1]);
        };
        if (l) e.exports = O;
        else {
          for (P = 0; P < A.length; ++P) a[A[P]] = O[A[P]];
          h &&
            void 0 !==
              (i = function () {
                return O;
              }.call(t, r, t, e)) &&
            (e.exports = i);
        }
      })();
    },
    23053: (e, t, r) => {
      'use strict';
      var i = r(53419);
      r.o(i, 'IJsonRpcProvider') &&
        r.d(t, {
          IJsonRpcProvider: function () {
            return i.IJsonRpcProvider;
          },
        }),
        r.o(i, 'formatJsonRpcError') &&
          r.d(t, {
            formatJsonRpcError: function () {
              return i.formatJsonRpcError;
            },
          }),
        r.o(i, 'formatJsonRpcRequest') &&
          r.d(t, {
            formatJsonRpcRequest: function () {
              return i.formatJsonRpcRequest;
            },
          }),
        r.o(i, 'formatJsonRpcResult') &&
          r.d(t, {
            formatJsonRpcResult: function () {
              return i.formatJsonRpcResult;
            },
          }),
        r.o(i, 'getBigIntRpcId') &&
          r.d(t, {
            getBigIntRpcId: function () {
              return i.getBigIntRpcId;
            },
          }),
        r.o(i, 'isHttpUrl') &&
          r.d(t, {
            isHttpUrl: function () {
              return i.isHttpUrl;
            },
          }),
        r.o(i, 'isJsonRpcError') &&
          r.d(t, {
            isJsonRpcError: function () {
              return i.isJsonRpcError;
            },
          }),
        r.o(i, 'isJsonRpcRequest') &&
          r.d(t, {
            isJsonRpcRequest: function () {
              return i.isJsonRpcRequest;
            },
          }),
        r.o(i, 'isJsonRpcResponse') &&
          r.d(t, {
            isJsonRpcResponse: function () {
              return i.isJsonRpcResponse;
            },
          }),
        r.o(i, 'isJsonRpcResult') &&
          r.d(t, {
            isJsonRpcResult: function () {
              return i.isJsonRpcResult;
            },
          }),
        r.o(i, 'isLocalhostUrl') &&
          r.d(t, {
            isLocalhostUrl: function () {
              return i.isLocalhostUrl;
            },
          }),
        r.o(i, 'isReactNative') &&
          r.d(t, {
            isReactNative: function () {
              return i.isReactNative;
            },
          }),
        r.o(i, 'isWsUrl') &&
          r.d(t, {
            isWsUrl: function () {
              return i.isWsUrl;
            },
          }),
        r.o(i, 'payloadId') &&
          r.d(t, {
            payloadId: function () {
              return i.payloadId;
            },
          });
    },
    26481: (e, t, r) => {
      'use strict';
      function i(e, t, r) {
        var i, s;
        let n;
        return (
          (r.length
            ? ((i = t.length), Array.isArray(e) ? e.length >= i : Object.keys(e).length >= i)
            : ((s = t.length), Array.isArray(e) ? e.length === s : Object.keys(e).length === s)) &&
          ((n = !0),
          t.forEach((t) => {
            t in e || (n = !1);
          }),
          n)
        );
      }
      function s(e, t, r = '_') {
        let i = e.split(r);
        return i[i.length - 1].trim().toLowerCase() === t.trim().toLowerCase();
      }
      r.d(t, { CG: () => n });
      let n = {
        waku: {
          publish: 'waku_publish',
          batchPublish: 'waku_batchPublish',
          subscribe: 'waku_subscribe',
          batchSubscribe: 'waku_batchSubscribe',
          subscription: 'waku_subscription',
          unsubscribe: 'waku_unsubscribe',
          batchUnsubscribe: 'waku_batchUnsubscribe',
          batchFetchMessages: 'waku_batchFetchMessages',
        },
        irn: {
          publish: 'irn_publish',
          batchPublish: 'irn_batchPublish',
          subscribe: 'irn_subscribe',
          batchSubscribe: 'irn_batchSubscribe',
          subscription: 'irn_subscription',
          unsubscribe: 'irn_unsubscribe',
          batchUnsubscribe: 'irn_batchUnsubscribe',
          batchFetchMessages: 'irn_batchFetchMessages',
        },
        iridium: {
          publish: 'iridium_publish',
          batchPublish: 'iridium_batchPublish',
          subscribe: 'iridium_subscribe',
          batchSubscribe: 'iridium_batchSubscribe',
          subscription: 'iridium_subscription',
          unsubscribe: 'iridium_unsubscribe',
          batchUnsubscribe: 'iridium_batchUnsubscribe',
          batchFetchMessages: 'iridium_batchFetchMessages',
        },
      };
    },
    29218: (e, t, r) => {
      'use strict';
      r.d(t, { Fo: () => eF });
      var i = {};
      r.r(i), r.d(i, { identity: () => T });
      var s = {};
      r.r(s), r.d(s, { base2: () => C });
      var n = {};
      r.r(n), r.d(n, { base8: () => k });
      var o = {};
      r.r(o), r.d(o, { base10: () => U });
      var a = {};
      r.r(a), r.d(a, { base16: () => L, base16upper: () => M });
      var c = {};
      r.r(c),
        r.d(c, {
          base32: () => q,
          base32hex: () => $,
          base32hexpad: () => V,
          base32hexpadupper: () => K,
          base32hexupper: () => F,
          base32pad: () => B,
          base32padupper: () => z,
          base32upper: () => j,
          base32z: () => H,
        });
      var l = {};
      r.r(l), r.d(l, { base36: () => J, base36upper: () => W });
      var h = {};
      r.r(h), r.d(h, { base58btc: () => G, base58flickr: () => Y });
      var u = {};
      r.r(u),
        r.d(u, { base64: () => Q, base64pad: () => Z, base64url: () => X, base64urlpad: () => ee });
      var d = {};
      r.r(d), r.d(d, { base256emoji: () => es });
      var f = {};
      r.r(f), r.d(f, { sha256: () => em, sha512: () => ev });
      var p = {};
      r.r(p), r.d(p, { identity: () => ew });
      var g = {};
      r.r(g), r.d(g, { code: () => e_, decode: () => ex, encode: () => eI, name: () => eE });
      var y = {};
      r.r(y), r.d(y, { code: () => eA, decode: () => eR, encode: () => eP, name: () => eO });
      let b = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + ' is ambiguous');
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (var u = 0, d = n - 1; (0 !== h || u < s) && -1 !== d; d--, u++)
                (h += (a * o[d]) >>> 0), (o[d] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var f = n - s; f !== n && 0 === o[f]; ) f++;
              for (var p = new Uint8Array(i + (n - f)), g = i; f !== n; ) p[g++] = o[f++];
              return p;
            }
          }
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
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, r++;
            for (var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, f = o - 1; (0 !== u || d < i) && -1 !== f; f--, d++)
                (u += (256 * l[f]) >>> 0), (l[f] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var p = o - i; p !== o && 0 === l[p]; ) p++;
            for (var g = c.repeat(r); p < o; ++p) g += e.charAt(l[p]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      new Uint8Array(0);
      let m = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        v = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        w = (e) => new TextEncoder().encode(e),
        E = (e) => new TextDecoder().decode(e);
      class _ {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class I {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return S(this, e);
        }
      }
      class x {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return S(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let S = (e, t) =>
        new x({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class D {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new _(e, t, r)),
            (this.decoder = new I(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let O = ({ name: e, prefix: t, encode: r, decode: i }) => new D(e, t, r, i),
        A = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = b(r, t);
          return O({ prefix: e, name: t, encode: i, decode: (e) => v(s(e)) });
        },
        P = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n), (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        R = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            s = (1 << r) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i)) for (; (n.length * r) & 7; ) n += '=';
          return n;
        },
        N = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          O({ prefix: t, name: e, encode: (e) => R(e, i, r), decode: (t) => P(t, i, r, e) }),
        T = O({ prefix: '\0', name: 'identity', encode: (e) => E(e), decode: (e) => w(e) }),
        C = N({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        k = N({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        U = A({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        L = N({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        M = N({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 }),
        q = N({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        j = N({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        B = N({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        z = N({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        $ = N({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        F = N({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        V = N({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        K = N({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        H = N({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        }),
        J = A({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
        W = A({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        }),
        G = A({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        Y = A({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        }),
        Q = N({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        Z = N({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        X = N({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        ee = N({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
        et = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        er = et.reduce((e, t, r) => ((e[r] = t), e), []),
        ei = et.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        es = O({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += er[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = ei[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      function en(e, t, r) {
        t = t || [];
        for (var i = (r = r || 0); e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (en.bytes = r - i + 1), t;
      }
      function eo(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((eo.bytes = 0), RangeError('Could not decode varint'));
          (r = e[n++]), (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)), (s += 7);
        } while (r >= 128);
        return (eo.bytes = n - t), i;
      }
      let ea = {
          encode: en,
          decode: eo,
          encodingLength: function (e) {
            return e < 128
              ? 1
              : e < 16384
                ? 2
                : e < 2097152
                  ? 3
                  : e < 0x10000000
                    ? 4
                    : e < 0x800000000
                      ? 5
                      : e < 0x40000000000
                        ? 6
                        : e < 0x2000000000000
                          ? 7
                          : e < 0x100000000000000
                            ? 8
                            : e < 0x8000000000000000
                              ? 9
                              : 10;
          },
        },
        ec = (e, t = 0) => [ea.decode(e, t), ea.decode.bytes],
        el = (e, t, r = 0) => (ea.encode(e, t, r), t),
        eh = (e) => ea.encodingLength(e),
        eu = (e, t) => {
          let r = t.byteLength,
            i = eh(e),
            s = i + eh(r),
            n = new Uint8Array(s + r);
          return el(e, n, 0), el(r, n, i), n.set(t, s), new ep(e, r, t, n);
        },
        ed = (e) => {
          let t = v(e),
            [r, i] = ec(t),
            [s, n] = ec(t.subarray(i)),
            o = t.subarray(i + n);
          if (o.byteLength !== s) throw Error('Incorrect length');
          return new ep(r, s, o, t);
        },
        ef = (e, t) => e === t || (e.code === t.code && e.size === t.size && m(e.bytes, t.bytes));
      class ep {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let eg = ({ name: e, code: t, encode: r }) => new ey(e, t, r);
      class ey {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? eu(this.code, t) : t.then((e) => eu(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let eb = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        em = eg({ name: 'sha2-256', code: 18, encode: eb('SHA-256') }),
        ev = eg({ name: 'sha2-512', code: 19, encode: eb('SHA-512') }),
        ew = { code: 0, name: 'identity', encode: v, digest: (e) => eu(0, v(e)) },
        eE = 'raw',
        e_ = 85,
        eI = (e) => v(e),
        ex = (e) => v(e),
        eS = new TextEncoder(),
        eD = new TextDecoder(),
        eO = 'json',
        eA = 512,
        eP = (e) => eS.encode(JSON.stringify(e)),
        eR = (e) => JSON.parse(eD.decode(e));
      class eN {
        constructor(e, t, r, i) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = i),
            (this.byteOffset = i.byteOffset),
            (this.byteLength = i.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: eB,
              byteLength: eB,
              code: ej,
              version: ej,
              multihash: ej,
              bytes: ej,
              _baseCache: eB,
              asCID: eB,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: e, multihash: t } = this;
            if (e !== eU) throw Error('Cannot convert a non dag-pb CID to CIDv0');
            if (t.code !== eL) throw Error('Cannot convert non sha2-256 multihash CID to CIDv0');
            return eN.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = eu(e, t);
              return eN.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            ef(this.multihash, e.multihash)
          );
        }
        toString(e) {
          let { bytes: t, version: r, _baseCache: i } = this;
          return 0 === r ? eC(t, i, e || G.encoder) : ek(t, i, e || q.encoder);
        }
        toJSON() {
          return { code: this.code, version: this.version, hash: this.multihash.bytes };
        }
        get [Symbol.toStringTag]() {
          return 'CID';
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
          return 'CID(' + this.toString() + ')';
        }
        static isCID(e) {
          return ez(/^0\.0/, e$), !!(e && (e[eq] || e.asCID === e));
        }
        get toBaseEncodedString() {
          throw Error('Deprecated, use .toString()');
        }
        get codec() {
          throw Error('"codec" property is deprecated, use integer "code" property instead');
        }
        get buffer() {
          throw Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof eN) return e;
          if (null != e && e.asCID === e) {
            let { version: t, code: r, multihash: i, bytes: s } = e;
            return new eN(t, r, i, s || eM(t, r, i.bytes));
          }
          if (null == e || !0 !== e[eq]) return null;
          {
            let { version: t, multihash: r, code: i } = e,
              s = ed(r);
            return eN.create(t, i, s);
          }
        }
        static create(e, t, r) {
          if ('number' != typeof t) throw Error('String codecs are no longer supported');
          switch (e) {
            case 0:
              if (t === eU) return new eN(e, t, r, r.bytes);
              throw Error(`Version 0 CID must use dag-pb (code: ${eU}) block encoding`);
            case 1: {
              let i = eM(e, t, r.bytes);
              return new eN(e, t, r, i);
            }
            default:
              throw Error('Invalid version');
          }
        }
        static createV0(e) {
          return eN.create(0, eU, e);
        }
        static createV1(e, t) {
          return eN.create(1, e, t);
        }
        static decode(e) {
          let [t, r] = eN.decodeFirst(e);
          if (r.length) throw Error('Incorrect length');
          return t;
        }
        static decodeFirst(e) {
          let t = eN.inspectBytes(e),
            r = t.size - t.multihashSize,
            i = v(e.subarray(r, r + t.multihashSize));
          if (i.byteLength !== t.multihashSize) throw Error('Incorrect length');
          let s = i.subarray(t.multihashSize - t.digestSize),
            n = new ep(t.multihashCode, t.digestSize, s, i);
          return [0 === t.version ? eN.createV0(n) : eN.createV1(t.codec, n), e.subarray(t.size)];
        }
        static inspectBytes(e) {
          let t = 0,
            r = () => {
              let [r, i] = ec(e.subarray(t));
              return (t += i), r;
            },
            i = r(),
            s = eU;
          if ((18 === i ? ((i = 0), (t = 0)) : 1 === i && (s = r()), 0 !== i && 1 !== i))
            throw RangeError(`Invalid CID version ${i}`);
          let n = t,
            o = r(),
            a = r(),
            c = t + a;
          return {
            version: i,
            codec: s,
            multihashCode: o,
            digestSize: a,
            multihashSize: c - n,
            size: c,
          };
        }
        static parse(e, t) {
          let [r, i] = eT(e, t),
            s = eN.decode(i);
          return s._baseCache.set(r, e), s;
        }
      }
      let eT = (e, t) => {
          switch (e[0]) {
            case 'Q': {
              let r = t || G;
              return [G.prefix, r.decode(`${G.prefix}${e}`)];
            }
            case G.prefix: {
              let r = t || G;
              return [G.prefix, r.decode(e)];
            }
            case q.prefix: {
              let r = t || q;
              return [q.prefix, r.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  'To parse non base32 or base58btc encoded CID multibase decoder must be provided'
                );
              return [e[0], t.decode(e)];
          }
        },
        eC = (e, t, r) => {
          let { prefix: i } = r;
          if (i !== G.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          let s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e).slice(1);
            return t.set(i, s), s;
          }
        },
        ek = (e, t, r) => {
          let { prefix: i } = r,
            s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e);
            return t.set(i, s), s;
          }
        },
        eU = 112,
        eL = 18,
        eM = (e, t, r) => {
          let i = eh(e),
            s = i + eh(t),
            n = new Uint8Array(s + r.byteLength);
          return el(e, n, 0), el(t, n, i), n.set(r, s), n;
        },
        eq = Symbol.for('@ipld/js-cid/CID'),
        ej = { writable: !1, configurable: !1, enumerable: !0 },
        eB = { writable: !1, enumerable: !1, configurable: !1 },
        ez = (e, t) => {
          if (e.test('0.0.0-dev')) console.warn(t);
          else throw Error(t);
        },
        e$ = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        eF = { ...i, ...s, ...n, ...o, ...a, ...c, ...l, ...h, ...u, ...d };
      ({ ...f, ...p });
    },
    32034: (e, t, r) => {
      'use strict';
      r.d(t, {
        IJsonRpcProvider: () => o.kF,
        formatJsonRpcError: () => n.dZ,
        formatJsonRpcRequest: () => n.e_,
        formatJsonRpcResult: () => n.Im,
        getBigIntRpcId: () => n.eX,
        isHttpUrl: () => a.q$,
        isJsonRpcError: () => c.U$,
        isJsonRpcRequest: () => c.p3,
        isJsonRpcResponse: () => c.tq,
        isJsonRpcResult: () => c.xT,
        isLocalhostUrl: () => a.z,
        isWsUrl: () => a.A1,
        parseConnectionError: () => i.eF,
        payloadId: () => n.ER,
      }),
        r(83523);
      var i = r(8468),
        s = r(23053);
      r.o(s, 'IJsonRpcProvider') &&
        r.d(t, {
          IJsonRpcProvider: function () {
            return s.IJsonRpcProvider;
          },
        }),
        r.o(s, 'formatJsonRpcError') &&
          r.d(t, {
            formatJsonRpcError: function () {
              return s.formatJsonRpcError;
            },
          }),
        r.o(s, 'formatJsonRpcRequest') &&
          r.d(t, {
            formatJsonRpcRequest: function () {
              return s.formatJsonRpcRequest;
            },
          }),
        r.o(s, 'formatJsonRpcResult') &&
          r.d(t, {
            formatJsonRpcResult: function () {
              return s.formatJsonRpcResult;
            },
          }),
        r.o(s, 'getBigIntRpcId') &&
          r.d(t, {
            getBigIntRpcId: function () {
              return s.getBigIntRpcId;
            },
          }),
        r.o(s, 'isHttpUrl') &&
          r.d(t, {
            isHttpUrl: function () {
              return s.isHttpUrl;
            },
          }),
        r.o(s, 'isJsonRpcError') &&
          r.d(t, {
            isJsonRpcError: function () {
              return s.isJsonRpcError;
            },
          }),
        r.o(s, 'isJsonRpcRequest') &&
          r.d(t, {
            isJsonRpcRequest: function () {
              return s.isJsonRpcRequest;
            },
          }),
        r.o(s, 'isJsonRpcResponse') &&
          r.d(t, {
            isJsonRpcResponse: function () {
              return s.isJsonRpcResponse;
            },
          }),
        r.o(s, 'isJsonRpcResult') &&
          r.d(t, {
            isJsonRpcResult: function () {
              return s.isJsonRpcResult;
            },
          }),
        r.o(s, 'isLocalhostUrl') &&
          r.d(t, {
            isLocalhostUrl: function () {
              return s.isLocalhostUrl;
            },
          }),
        r.o(s, 'isReactNative') &&
          r.d(t, {
            isReactNative: function () {
              return s.isReactNative;
            },
          }),
        r.o(s, 'isWsUrl') &&
          r.d(t, {
            isWsUrl: function () {
              return s.isWsUrl;
            },
          }),
        r.o(s, 'payloadId') &&
          r.d(t, {
            payloadId: function () {
              return s.payloadId;
            },
          });
      var n = r(76257),
        o = r(50540),
        a = r(40383),
        c = r(54405);
    },
    40383: (e, t, r) => {
      'use strict';
      function i(e, t) {
        let r = (function (e) {
          let t = e.match(RegExp(/^\w+:/, 'gi'));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && new RegExp(t).test(r);
      }
      function s(e) {
        return i(e, '^https?:');
      }
      function n(e) {
        return i(e, '^wss?:');
      }
      function o(e) {
        return RegExp('wss?://localhost(:d{2,5})?').test(e);
      }
      r.d(t, { A1: () => n, q$: () => s, z: () => o });
    },
    41035: (e, t, r) => {
      'use strict';
      r.d(t, { h: () => o, j: () => n });
      let i = (e) => JSON.stringify(e, (e, t) => ('bigint' == typeof t ? t.toString() + 'n' : t)),
        s = (e) =>
          JSON.parse(
            e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            ),
            (e, t) =>
              'string' == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t
          );
      function n(e) {
        if ('string' != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return s(e);
        } catch (t) {
          return e;
        }
      }
      function o(e) {
        return 'string' == typeof e ? e : i(e) || '';
      }
    },
    42983: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(54565);
      i.__exportStar(r(79792), t), i.__exportStar(r(13596), t);
    },
    45764: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IWatch = void 0);
      class r {}
      t.IWatch = r;
    },
    50540: (e, t, r) => {
      'use strict';
      r.d(t, { kF: () => n });
      class i {}
      class s extends i {
        constructor() {
          super();
        }
      }
      class n extends s {
        constructor(e) {
          super();
        }
      }
    },
    53419: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(91539);
      i.__exportStar(r(65828), t), i.__exportStar(r(80904), t);
    },
    54405: (e, t, r) => {
      'use strict';
      function i(e) {
        return 'object' == typeof e && 'id' in e && 'jsonrpc' in e && '2.0' === e.jsonrpc;
      }
      function s(e) {
        return i(e) && 'method' in e;
      }
      function n(e) {
        return i(e) && (o(e) || a(e));
      }
      function o(e) {
        return 'result' in e;
      }
      function a(e) {
        return 'error' in e;
      }
      r.d(t, { U$: () => a, p3: () => s, tq: () => n, xT: () => o });
    },
    54565: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          __assign: () => n,
          __asyncDelegator: () => w,
          __asyncGenerator: () => v,
          __asyncValues: () => E,
          __await: () => m,
          __awaiter: () => h,
          __classPrivateFieldGet: () => S,
          __classPrivateFieldSet: () => D,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => s,
          __generator: () => u,
          __importDefault: () => x,
          __importStar: () => I,
          __makeTemplateObject: () => _,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => b,
          __values: () => p,
        });
      var i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o = n < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            return (function (n) {
              if (r) throw TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (s =
                        2 & n[0]
                          ? i.return
                          : n[0]
                            ? i.throw || ((s = i.return) && s.call(i), 0)
                            : i.next) &&
                      !(s = s.call(i, n[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n;
                      break;
                    case 4:
                      return o.label++, { value: n[1], done: !1 };
                    case 5:
                      o.label++, (i = n[1]), (n = [0]);
                      continue;
                    case 7:
                      (n = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        o.label = n[1];
                        break;
                      }
                      if (6 === n[0] && o.label < s[1]) {
                        (o.label = s[1]), (s = n);
                        break;
                      }
                      if (s && o.label < s[2]) {
                        (o.label = s[2]), o.ops.push(n);
                        break;
                      }
                      s[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  n = t.call(e, o);
                } catch (e) {
                  (n = [6, e]), (i = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & n[0]) throw n[1];
              return { value: n[0] ? n[1] : void 0, done: !0 };
            })([n, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function f(e, t) {
        for (var r in e) 'default' === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function p(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function g(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e;
      }
      function b() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++) i[s] = n[o];
        return i;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o('next'),
          o('throw'),
          o('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function w(e) {
        var t, r;
        return (
          (t = {}),
          i('next'),
          i('throw', function (e) {
            throw e;
          }),
          i('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r) ? { value: m(e[i](t)), done: 'return' === i } : s ? s(t) : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = p(e)),
            (t = {}),
            i('next'),
            i('throw'),
            i('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, s, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function _(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function x(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e, t) {
        if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function D(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    56975: (e, t, r) => {
      'use strict';
      r.d(t, { D5: () => S, U5: () => x, h6: () => s.a, iP: () => _, oI: () => I });
      var i = r(21440),
        s = r.n(i),
        n = r(41035);
      let o = { level: 'info' },
        a = 'custom_context';
      class c {
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
      class l {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          let t = new c(e);
          if (t.size > this.maxSizeInBytes)
            throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head ? this.tail && (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          let e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          let e = [],
            t = this.head;
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
              let t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class h {
        constructor(e, t = 1024e3) {
          (this.level = e ?? 'error'),
            (this.levelValue = i.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new l(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === i.levels.values.error
            ? console.error(e)
            : t === i.levels.values.warn
              ? console.warn(e)
              : t === i.levels.values.debug
                ? console.debug(e)
                : t === i.levels.values.trace
                  ? console.trace(e)
                  : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append((0, n.h)({ timestamp: new Date().toISOString(), log: e }));
          let t = 'string' == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new l(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          let t = this.getLogArray();
          return t.push((0, n.h)({ extraMetadata: e })), new Blob(t, { type: 'application/json' });
        }
      }
      class u {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new h(e, t);
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
          let t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement('a');
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class d {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new h(e, t);
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
      var f = Object.defineProperty,
        p = Object.defineProperties,
        g = Object.getOwnPropertyDescriptors,
        y = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        v = (e, t, r) =>
          t in e
            ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        w = (e, t) => {
          for (var r in t || (t = {})) b.call(t, r) && v(e, r, t[r]);
          if (y) for (var r of y(t)) m.call(t, r) && v(e, r, t[r]);
          return e;
        },
        E = (e, t) => p(e, g(t));
      function _(e) {
        return E(w({}, e), { level: e?.level || o.level });
      }
      function I(e, t = a) {
        return typeof e.bindings > 'u'
          ? (function (e, t = a) {
              return e[t] || '';
            })(e, t)
          : e.bindings().context || '';
      }
      function x(e, t, r = a) {
        let i = (function (e, t, r = a) {
          let i = I(e, r);
          return i.trim() ? `${i}/${t}` : t;
        })(e, t, r);
        return (function (e, t, r = a) {
          return (e[r] = t), e;
        })(e.child({ context: i }), i, r);
      }
      function S(e) {
        return 'u' > typeof e.loggerOverride && 'string' != typeof e.loggerOverride
          ? { logger: e.loggerOverride, chunkLoggerController: null }
          : 'u' > typeof window
            ? (function (e) {
                var t, r;
                let i = new u(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: s()(
                    E(w({}, e.opts), {
                      level: 'trace',
                      browser: E(w({}, null == (r = e.opts) ? void 0 : r.browser), {
                        write: (e) => i.write(e),
                      }),
                    })
                  ),
                  chunkLoggerController: i,
                };
              })(e)
            : (function (e) {
                var t;
                let r = new d(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: s()(E(w({}, e.opts), { level: 'trace' }), r),
                  chunkLoggerController: r,
                };
              })(e);
      }
    },
    59786: (e, t, r) => {
      'use strict';
      r.d(t, { L6: () => o$, c9: () => ad, VF: () => af, Ay: () => au });
      var i,
        s = r(35978),
        n = r.n(s),
        o = r(18193),
        a = r(19757),
        c = r(56975),
        l = r(7256),
        h = r(87561),
        u = r(41035),
        d = r(10897),
        f = r(69145),
        p = r(80985),
        g = r(66890),
        y = r(47848),
        b = r(72289),
        m = r.n(b),
        v = r(34917),
        w = m().BN;
      let E = new v.Vy('bignumber/5.7.0'),
        _ = {},
        I = !1;
      class x {
        constructor(e, t) {
          e !== _ &&
            E.throwError(
              'cannot call constructor directly; use BigNumber.from',
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: 'new (BigNumber)' }
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(e) {
          return D(O(this).fromTwos(e));
        }
        toTwos(e) {
          return D(O(this).toTwos(e));
        }
        abs() {
          return '-' === this._hex[0] ? x.from(this._hex.substring(1)) : this;
        }
        add(e) {
          return D(O(this).add(O(e)));
        }
        sub(e) {
          return D(O(this).sub(O(e)));
        }
        div(e) {
          return x.from(e).isZero() && A('division-by-zero', 'div'), D(O(this).div(O(e)));
        }
        mul(e) {
          return D(O(this).mul(O(e)));
        }
        mod(e) {
          let t = O(e);
          return t.isNeg() && A('division-by-zero', 'mod'), D(O(this).umod(t));
        }
        pow(e) {
          let t = O(e);
          return t.isNeg() && A('negative-power', 'pow'), D(O(this).pow(t));
        }
        and(e) {
          let t = O(e);
          return (
            (this.isNegative() || t.isNeg()) && A('unbound-bitwise-result', 'and'),
            D(O(this).and(t))
          );
        }
        or(e) {
          let t = O(e);
          return (
            (this.isNegative() || t.isNeg()) && A('unbound-bitwise-result', 'or'), D(O(this).or(t))
          );
        }
        xor(e) {
          let t = O(e);
          return (
            (this.isNegative() || t.isNeg()) && A('unbound-bitwise-result', 'xor'),
            D(O(this).xor(t))
          );
        }
        mask(e) {
          return (this.isNegative() || e < 0) && A('negative-width', 'mask'), D(O(this).maskn(e));
        }
        shl(e) {
          return (this.isNegative() || e < 0) && A('negative-width', 'shl'), D(O(this).shln(e));
        }
        shr(e) {
          return (this.isNegative() || e < 0) && A('negative-width', 'shr'), D(O(this).shrn(e));
        }
        eq(e) {
          return O(this).eq(O(e));
        }
        lt(e) {
          return O(this).lt(O(e));
        }
        lte(e) {
          return O(this).lte(O(e));
        }
        gt(e) {
          return O(this).gt(O(e));
        }
        gte(e) {
          return O(this).gte(O(e));
        }
        isNegative() {
          return '-' === this._hex[0];
        }
        isZero() {
          return O(this).isZero();
        }
        toNumber() {
          try {
            return O(this).toNumber();
          } catch (e) {
            A('overflow', 'toNumber', this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (e) {}
          return E.throwError(
            'this platform does not support BigInt',
            Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? I ||
                  ((I = !0),
                  E.warn('BigNumber.toString does not accept any parameters; base-10 is assumed'))
                : 16 === arguments[0]
                  ? E.throwError(
                      'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                      Logger.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )
                  : E.throwError(
                      'BigNumber.toString does not accept parameters',
                      Logger.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )),
            O(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(e) {
          return { type: 'BigNumber', hex: this.toHexString() };
        }
        static from(e) {
          if (e instanceof x) return e;
          if ('string' == typeof e)
            return e.match(/^-?0x[0-9a-f]+$/i)
              ? new x(_, S(e))
              : e.match(/^-?[0-9]+$/)
                ? new x(_, S(new w(e)))
                : E.throwArgumentError('invalid BigNumber string', 'value', e);
          if ('number' == typeof e)
            return (
              e % 1 && A('underflow', 'BigNumber.from', e),
              (e >= 0x1fffffffffffff || e <= -0x1fffffffffffff) &&
                A('overflow', 'BigNumber.from', e),
              x.from(String(e))
            );
          if ('bigint' == typeof e) return x.from(e.toString());
          if (isBytes(e)) return x.from(hexlify(e));
          if (e) {
            if (e.toHexString) {
              let t = e.toHexString();
              if ('string' == typeof t) return x.from(t);
            } else {
              let t = e._hex;
              if (
                (null == t && 'BigNumber' === e.type && (t = e.hex),
                'string' == typeof t &&
                  (isHexString(t) || ('-' === t[0] && isHexString(t.substring(1)))))
              )
                return x.from(t);
            }
          }
          return E.throwArgumentError('invalid BigNumber value', 'value', e);
        }
        static isBigNumber(e) {
          return !!(e && e._isBigNumber);
        }
      }
      function S(e) {
        if ('string' != typeof e) return S(e.toString(16));
        if ('-' === e[0])
          return ('-' === (e = e.substring(1))[0] &&
            E.throwArgumentError('invalid hex', 'value', e),
          '0x00' === (e = S(e)))
            ? e
            : '-' + e;
        if (('0x' !== e.substring(0, 2) && (e = '0x' + e), '0x' === e)) return '0x00';
        for (
          e.length % 2 && (e = '0x0' + e.substring(2));
          e.length > 4 && '0x00' === e.substring(0, 4);

        )
          e = '0x' + e.substring(4);
        return e;
      }
      function D(e) {
        return x.from(S(e));
      }
      function O(e) {
        let t = x.from(e).toHexString();
        return '-' === t[0] ? new w('-' + t.substring(3), 16) : new w(t.substring(2), 16);
      }
      function A(e, t, r) {
        let i = { fault: e, operation: t };
        return null != r && (i.value = r), E.throwError(e, Logger.errors.NUMERIC_FAULT, i);
      }
      var P = r(22533),
        R = r.n(P);
      function N(e) {
        return '0x' + R().keccak_256((0, y.k9)(e));
      }
      let T = new v.Vy('address/5.7.0');
      function C(e) {
        (0, y.Lo)(e, 20) || T.throwArgumentError('invalid address', 'address', e);
        let t = (e = e.toLowerCase()).substring(2).split(''),
          r = new Uint8Array(40);
        for (let e = 0; e < 40; e++) r[e] = t[e].charCodeAt(0);
        let i = (0, y.k9)(N(r));
        for (let e = 0; e < 40; e += 2)
          i[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()),
            (15 & i[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
        return '0x' + t.join('');
      }
      let k = {};
      for (let e = 0; e < 10; e++) k[String(e)] = String(e);
      for (let e = 0; e < 26; e++) k[String.fromCharCode(65 + e)] = String(10 + e);
      let U = Math.floor(
        Math.log10 ? Math.log10(0x1fffffffffffff) : Math.log(0x1fffffffffffff) / Math.LN10
      );
      var L = r(41069),
        M = r.n(L);
      function q(e, t, r) {
        return (
          e(
            (r = {
              path: t,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
                  );
                })(e, null == t ? r.path : t);
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : void 0 !== r.g
            ? r.g
            : 'undefined' != typeof self && self;
      var j = B;
      function B(e, t) {
        if (!e) throw Error(t || 'Assertion failed');
      }
      B.equal = function (e, t, r) {
        if (e != t) throw Error(r || 'Assertion failed: ' + e + ' != ' + t);
      };
      var z = q(function (e, t) {
          function r(e) {
            return 1 === e.length ? '0' + e : e;
          }
          function i(e) {
            for (var t = '', i = 0; i < e.length; i++) t += r(e[i].toString(16));
            return t;
          }
          (t.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ('string' != typeof e) {
              for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
              return r;
            }
            if ('hex' === t) {
              (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e);
              for (var i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16));
            } else
              for (var i = 0; i < e.length; i++) {
                var s = e.charCodeAt(i),
                  n = s >> 8,
                  o = 255 & s;
                n ? r.push(n, o) : r.push(o);
              }
            return r;
          }),
            (t.zero2 = r),
            (t.toHex = i),
            (t.encode = function (e, t) {
              return 'hex' === t ? i(e) : e;
            });
        }),
        $ = q(function (e, t) {
          (t.assert = j),
            (t.toArray = z.toArray),
            (t.zero2 = z.zero2),
            (t.toHex = z.toHex),
            (t.encode = z.encode),
            (t.getNAF = function (e, t, r) {
              var i = Array(Math.max(e.bitLength(), r) + 1);
              i.fill(0);
              for (var s = 1 << (t + 1), n = e.clone(), o = 0; o < i.length; o++) {
                var a,
                  c = n.andln(s - 1);
                n.isOdd() ? ((a = c > (s >> 1) - 1 ? (s >> 1) - c : c), n.isubn(a)) : (a = 0),
                  (i[o] = a),
                  n.iushrn(1);
              }
              return i;
            }),
            (t.getJSF = function (e, t) {
              var r = [[], []];
              (e = e.clone()), (t = t.clone());
              for (var i = 0, s = 0; e.cmpn(-i) > 0 || t.cmpn(-s) > 0; ) {
                var n,
                  o,
                  a,
                  c = (e.andln(3) + i) & 3,
                  l = (t.andln(3) + s) & 3;
                3 === c && (c = -1),
                  3 === l && (l = -1),
                  (o =
                    (1 & c) == 0
                      ? 0
                      : (3 == (n = (e.andln(7) + i) & 7) || 5 === n) && 2 === l
                        ? -c
                        : c),
                  r[0].push(o),
                  (a =
                    (1 & l) == 0
                      ? 0
                      : (3 == (n = (t.andln(7) + s) & 7) || 5 === n) && 2 === c
                        ? -l
                        : l),
                  r[1].push(a),
                  2 * i === o + 1 && (i = 1 - i),
                  2 * s === a + 1 && (s = 1 - s),
                  e.iushrn(1),
                  t.iushrn(1);
              }
              return r;
            }),
            (t.cachedProperty = function (e, t, r) {
              var i = '_' + t;
              e.prototype[t] = function () {
                return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
              };
            }),
            (t.parseBytes = function (e) {
              return 'string' == typeof e ? t.toArray(e, 'hex') : e;
            }),
            (t.intFromLE = function (e) {
              return new (m())(e, 'hex', 'le');
            });
        }),
        F = $.getNAF,
        V = $.getJSF,
        K = $.assert;
      function H(e, t) {
        (this.type = e),
          (this.p = new (m())(t.p, 16)),
          (this.red = t.prime ? m().red(t.prime) : m().mont(this.p)),
          (this.zero = new (m())(0).toRed(this.red)),
          (this.one = new (m())(1).toRed(this.red)),
          (this.two = new (m())(2).toRed(this.red)),
          (this.n = t.n && new (m())(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function J(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (H.prototype.point = function () {
        throw Error('Not implemented');
      }),
        (H.prototype.validate = function () {
          throw Error('Not implemented');
        }),
        (H.prototype._fixedNafMul = function (e, t) {
          K(e.precomputed);
          var r,
            i,
            s = e._getDoubles(),
            n = F(t, 1, this._bitLength),
            o = (1 << (s.step + 1)) - (s.step % 2 == 0 ? 2 : 1);
          o /= 3;
          var a = [];
          for (r = 0; r < n.length; r += s.step) {
            i = 0;
            for (var c = r + s.step - 1; c >= r; c--) i = (i << 1) + n[c];
            a.push(i);
          }
          for (
            var l = this.jpoint(null, null, null), h = this.jpoint(null, null, null), u = o;
            u > 0;
            u--
          ) {
            for (r = 0; r < a.length; r++)
              (i = a[r]) === u
                ? (h = h.mixedAdd(s.points[r]))
                : i === -u && (h = h.mixedAdd(s.points[r].neg()));
            l = l.add(h);
          }
          return l.toP();
        }),
        (H.prototype._wnafMul = function (e, t) {
          var r = 4,
            i = e._getNAFPoints(r);
          r = i.wnd;
          for (
            var s = i.points,
              n = F(t, r, this._bitLength),
              o = this.jpoint(null, null, null),
              a = n.length - 1;
            a >= 0;
            a--
          ) {
            for (var c = 0; a >= 0 && 0 === n[a]; a--) c++;
            if ((a >= 0 && c++, (o = o.dblp(c)), a < 0)) break;
            var l = n[a];
            K(0 !== l),
              (o =
                'affine' === e.type
                  ? l > 0
                    ? o.mixedAdd(s[(l - 1) >> 1])
                    : o.mixedAdd(s[(-l - 1) >> 1].neg())
                  : l > 0
                    ? o.add(s[(l - 1) >> 1])
                    : o.add(s[(-l - 1) >> 1].neg()));
          }
          return 'affine' === e.type ? o.toP() : o;
        }),
        (H.prototype._wnafMulAdd = function (e, t, r, i, s) {
          var n,
            o,
            a,
            c = this._wnafT1,
            l = this._wnafT2,
            h = this._wnafT3,
            u = 0;
          for (n = 0; n < i; n++) {
            var d = (a = t[n])._getNAFPoints(e);
            (c[n] = d.wnd), (l[n] = d.points);
          }
          for (n = i - 1; n >= 1; n -= 2) {
            var f = n - 1,
              p = n;
            if (1 !== c[f] || 1 !== c[p]) {
              (h[f] = F(r[f], c[f], this._bitLength)),
                (h[p] = F(r[p], c[p], this._bitLength)),
                (u = Math.max(h[f].length, u)),
                (u = Math.max(h[p].length, u));
              continue;
            }
            var g = [t[f], null, null, t[p]];
            0 === t[f].y.cmp(t[p].y)
              ? ((g[1] = t[f].add(t[p])), (g[2] = t[f].toJ().mixedAdd(t[p].neg())))
              : 0 === t[f].y.cmp(t[p].y.redNeg())
                ? ((g[1] = t[f].toJ().mixedAdd(t[p])), (g[2] = t[f].add(t[p].neg())))
                : ((g[1] = t[f].toJ().mixedAdd(t[p])), (g[2] = t[f].toJ().mixedAdd(t[p].neg())));
            var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              b = V(r[f], r[p]);
            for (
              o = 0, u = Math.max(b[0].length, u), h[f] = Array(u), h[p] = Array(u);
              o < u;
              o++
            ) {
              var m = 0 | b[0][o],
                v = 0 | b[1][o];
              (h[f][o] = y[(m + 1) * 3 + (v + 1)]), (h[p][o] = 0), (l[f] = g);
            }
          }
          var w = this.jpoint(null, null, null),
            E = this._wnafT4;
          for (n = u; n >= 0; n--) {
            for (var _ = 0; n >= 0; ) {
              var I = !0;
              for (o = 0; o < i; o++) (E[o] = 0 | h[o][n]), 0 !== E[o] && (I = !1);
              if (!I) break;
              _++, n--;
            }
            if ((n >= 0 && _++, (w = w.dblp(_)), n < 0)) break;
            for (o = 0; o < i; o++) {
              var x = E[o];
              0 !== x &&
                (x > 0 ? (a = l[o][(x - 1) >> 1]) : x < 0 && (a = l[o][(-x - 1) >> 1].neg()),
                (w = 'affine' === a.type ? w.mixedAdd(a) : w.add(a)));
            }
          }
          for (n = 0; n < i; n++) l[n] = null;
          return s ? w : w.toP();
        }),
        (H.BasePoint = J),
        (J.prototype.eq = function () {
          throw Error('Not implemented');
        }),
        (J.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (H.prototype.decodePoint = function (e, t) {
          e = $.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0] ? K(e[e.length - 1] % 2 == 0) : 7 === e[0] && K(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw Error('Unknown point format');
        }),
        (J.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (J.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray('be', t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', t));
        }),
        (J.prototype.encode = function (e, t) {
          return $.encode(this._encode(t), e);
        }),
        (J.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (J.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
        }),
        (J.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
          for (var r = [this], i = this, s = 0; s < t; s += e) {
            for (var n = 0; n < e; n++) i = i.dbl();
            r.push(i);
          }
          return { step: e, points: r };
        }),
        (J.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
          for (var t = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), s = 1; s < r; s++)
            t[s] = t[s - 1].add(i);
          return { wnd: e, points: t };
        }),
        (J.prototype._getBeta = function () {
          return null;
        }),
        (J.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
      var W = q(function (e) {
          'function' == typeof Object.create
            ? (e.exports = function (e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })));
              })
            : (e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  var r = function () {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
              });
        }),
        G = $.assert;
      function Y(e) {
        H.call(this, 'short', e),
          (this.a = new (m())(e.a, 16).toRed(this.red)),
          (this.b = new (m())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function Q(e, t, r, i) {
        H.BasePoint.call(this, e, 'affine'),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (m())(t, 16)),
              (this.y = new (m())(r, 16)),
              i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function Z(e, t, r, i) {
        H.BasePoint.call(this, e, 'jacobian'),
          null === t && null === r && null === i
            ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new (m())(0)))
            : ((this.x = new (m())(t, 16)),
              (this.y = new (m())(r, 16)),
              (this.z = new (m())(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      W(Y, H),
        (Y.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new (m())(e.beta, 16).toRed(this.red);
            else {
              var t,
                r,
                i,
                s = this._getEndoRoots(this.p);
              t = (t = 0 > s[0].cmp(s[1]) ? s[0] : s[1]).toRed(this.red);
            }
            if (e.lambda) r = new (m())(e.lambda, 16);
            else {
              var n = this._getEndoRoots(this.n);
              0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))
                ? (r = n[0])
                : ((r = n[1]), G(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return (
              (i = e.basis
                ? e.basis.map(function (e) {
                    return { a: new (m())(e.a, 16), b: new (m())(e.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: t, lambda: r, basis: i }
            );
          }
        }),
        (Y.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : m().mont(e),
            r = new (m())(2).toRed(t).redInvm(),
            i = r.redNeg(),
            s = new (m())(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [i.redAdd(s).fromRed(), i.redSub(s).fromRed()];
        }),
        (Y.prototype._getEndoBasis = function (e) {
          for (
            var t,
              r,
              i,
              s,
              n,
              o,
              a,
              c,
              l,
              h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              u = e,
              d = this.n.clone(),
              f = new (m())(1),
              p = new (m())(0),
              g = new (m())(0),
              y = new (m())(1),
              b = 0;
            0 !== u.cmpn(0);

          ) {
            var v = d.div(u);
            (c = d.sub(v.mul(u))), (l = g.sub(v.mul(f)));
            var w = y.sub(v.mul(p));
            if (!i && 0 > c.cmp(h)) (t = a.neg()), (r = f), (i = c.neg()), (s = l);
            else if (i && 2 == ++b) break;
            (a = c), (d = u), (u = c), (g = f), (f = l), (y = p), (p = w);
          }
          (n = c.neg()), (o = l);
          var E = i.sqr().add(s.sqr());
          return (
            n.sqr().add(o.sqr()).cmp(E) >= 0 && ((n = t), (o = r)),
            i.negative && ((i = i.neg()), (s = s.neg())),
            n.negative && ((n = n.neg()), (o = o.neg())),
            [
              { a: i, b: s },
              { a: n, b: o },
            ]
          );
        }),
        (Y.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            i = t[1],
            s = i.b.mul(e).divRound(this.n),
            n = r.b.neg().mul(e).divRound(this.n),
            o = s.mul(r.a),
            a = n.mul(i.a),
            c = s.mul(r.b),
            l = n.mul(i.b);
          return { k1: e.sub(o).sub(a), k2: c.add(l).neg() };
        }),
        (Y.prototype.pointFromX = function (e, t) {
          (e = new (m())(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            i = r.redSqrt();
          if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error('invalid point');
          var s = i.fromRed().isOdd();
          return ((t && !s) || (!t && s)) && (i = i.redNeg()), this.point(e, i);
        }),
        (Y.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            i = this.a.redMul(t),
            s = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
          return 0 === r.redSqr().redISub(s).cmpn(0);
        }),
        (Y.prototype._endoWnafMulAdd = function (e, t, r) {
          for (var i = this._endoWnafT1, s = this._endoWnafT2, n = 0; n < e.length; n++) {
            var o = this._endoSplit(t[n]),
              a = e[n],
              c = a._getBeta();
            o.k1.negative && (o.k1.ineg(), (a = a.neg(!0))),
              o.k2.negative && (o.k2.ineg(), (c = c.neg(!0))),
              (i[2 * n] = a),
              (i[2 * n + 1] = c),
              (s[2 * n] = o.k1),
              (s[2 * n + 1] = o.k2);
          }
          for (var l = this._wnafMulAdd(1, i, s, 2 * n, r), h = 0; h < 2 * n; h++)
            (i[h] = null), (s[h] = null);
          return l;
        }),
        W(Q, H.BasePoint),
        (Y.prototype.point = function (e, t, r) {
          return new Q(this, e, t, r);
        }),
        (Y.prototype.pointFromJSON = function (e, t) {
          return Q.fromJSON(this, e, t);
        }),
        (Q.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
              var r = this.curve,
                i = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
                  doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(i) },
                });
            }
            return t;
          }
        }),
        (Q.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (Q.fromJSON = function (e, t, r) {
          'string' == typeof t && (t = JSON.parse(t));
          var i = e.point(t[0], t[1], r);
          if (!t[2]) return i;
          function s(t) {
            return e.point(t[0], t[1], r);
          }
          var n = t[2];
          return (
            (i.precomputed = {
              beta: null,
              doubles: n.doubles && {
                step: n.doubles.step,
                points: [i].concat(n.doubles.points.map(s)),
              },
              naf: n.naf && { wnd: n.naf.wnd, points: [i].concat(n.naf.points.map(s)) },
            }),
            i
          );
        }),
        (Q.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>';
        }),
        (Q.prototype.isInfinity = function () {
          return this.inf;
        }),
        (Q.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            i = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, i);
        }),
        (Q.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            i = e.redInvm(),
            s = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),
            n = s.redSqr().redISub(this.x.redAdd(this.x)),
            o = s.redMul(this.x.redSub(n)).redISub(this.y);
          return this.curve.point(n, o);
        }),
        (Q.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (Q.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (Q.prototype.mul = function (e) {
          return ((e = new (m())(e, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
                ? this.curve._endoWnafMulAdd([this], [e])
                : this.curve._wnafMul(this, e);
        }),
        (Q.prototype.mulAdd = function (e, t, r) {
          var i = [this, t],
            s = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, s)
            : this.curve._wnafMulAdd(1, i, s, 2);
        }),
        (Q.prototype.jmulAdd = function (e, t, r) {
          var i = [this, t],
            s = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, s, !0)
            : this.curve._wnafMulAdd(1, i, s, 2, !0);
        }),
        (Q.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf && (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (Q.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              i = function (e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
              doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(i) },
            };
          }
          return t;
        }),
        (Q.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        W(Z, H.BasePoint),
        (Y.prototype.jpoint = function (e, t, r) {
          return new Z(this, e, t, r);
        }),
        (Z.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            i = this.y.redMul(t).redMul(e);
          return this.curve.point(r, i);
        }),
        (Z.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (Z.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(t),
            s = e.x.redMul(r),
            n = this.y.redMul(t.redMul(e.z)),
            o = e.y.redMul(r.redMul(this.z)),
            a = i.redSub(s),
            c = n.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var l = a.redSqr(),
            h = l.redMul(a),
            u = i.redMul(l),
            d = c.redSqr().redIAdd(h).redISub(u).redISub(u),
            f = c.redMul(u.redISub(d)).redISub(n.redMul(h)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(d, f, p);
        }),
        (Z.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            i = e.x.redMul(t),
            s = this.y,
            n = e.y.redMul(t).redMul(this.z),
            o = r.redSub(i),
            a = s.redSub(n);
          if (0 === o.cmpn(0))
            return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var c = o.redSqr(),
            l = c.redMul(o),
            h = r.redMul(c),
            u = a.redSqr().redIAdd(l).redISub(h).redISub(h),
            d = a.redMul(h.redISub(u)).redISub(s.redMul(l)),
            f = this.z.redMul(o);
          return this.curve.jpoint(u, d, f);
        }),
        (Z.prototype.dblp = function (e) {
          if (0 === e || this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var t,
              r = this;
            for (t = 0; t < e; t++) r = r.dbl();
            return r;
          }
          var i = this.curve.a,
            s = this.curve.tinv,
            n = this.x,
            o = this.y,
            a = this.z,
            c = a.redSqr().redSqr(),
            l = o.redAdd(o);
          for (t = 0; t < e; t++) {
            var h = n.redSqr(),
              u = l.redSqr(),
              d = u.redSqr(),
              f = h.redAdd(h).redIAdd(h).redIAdd(i.redMul(c)),
              p = n.redMul(u),
              g = f.redSqr().redISub(p.redAdd(p)),
              y = p.redISub(g),
              b = f.redMul(y);
            b = b.redIAdd(b).redISub(d);
            var m = l.redMul(a);
            t + 1 < e && (c = c.redMul(d)), (n = g), (a = m), (l = b);
          }
          return this.curve.jpoint(n, l.redMul(s), a);
        }),
        (Z.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
              ? this._zeroDbl()
              : this.curve.threeA
                ? this._threeDbl()
                : this._dbl();
        }),
        (Z.prototype._zeroDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              i = this.x.redSqr(),
              s = this.y.redSqr(),
              n = s.redSqr(),
              o = this.x.redAdd(s).redSqr().redISub(i).redISub(n);
            o = o.redIAdd(o);
            var a = i.redAdd(i).redIAdd(i),
              c = a.redSqr().redISub(o).redISub(o),
              l = n.redIAdd(n);
            (l = (l = l.redIAdd(l)).redIAdd(l)),
              (e = c),
              (t = a.redMul(o.redISub(c)).redISub(l)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.x.redSqr(),
              u = this.y.redSqr(),
              d = u.redSqr(),
              f = this.x.redAdd(u).redSqr().redISub(h).redISub(d);
            f = f.redIAdd(f);
            var p = h.redAdd(h).redIAdd(h),
              g = p.redSqr(),
              y = d.redIAdd(d);
            (y = (y = y.redIAdd(y)).redIAdd(y)),
              (e = g.redISub(f).redISub(f)),
              (t = p.redMul(f.redISub(e)).redISub(y)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (Z.prototype._threeDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              i = this.x.redSqr(),
              s = this.y.redSqr(),
              n = s.redSqr(),
              o = this.x.redAdd(s).redSqr().redISub(i).redISub(n);
            o = o.redIAdd(o);
            var a = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
              c = a.redSqr().redISub(o).redISub(o);
            e = c;
            var l = n.redIAdd(n);
            (l = (l = l.redIAdd(l)).redIAdd(l)),
              (t = a.redMul(o.redISub(c)).redISub(l)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.z.redSqr(),
              u = this.y.redSqr(),
              d = this.x.redMul(u),
              f = this.x.redSub(h).redMul(this.x.redAdd(h));
            f = f.redAdd(f).redIAdd(f);
            var p = d.redIAdd(d),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = f.redSqr().redISub(g)), (r = this.y.redAdd(this.z).redSqr().redISub(u).redISub(h));
            var y = u.redSqr();
            (y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y)),
              (t = f.redMul(p.redISub(e)).redISub(y));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (Z.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            i = this.z,
            s = i.redSqr().redSqr(),
            n = t.redSqr(),
            o = r.redSqr(),
            a = n.redAdd(n).redIAdd(n).redIAdd(e.redMul(s)),
            c = t.redAdd(t),
            l = (c = c.redIAdd(c)).redMul(o),
            h = a.redSqr().redISub(l.redAdd(l)),
            u = l.redISub(h),
            d = o.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var f = a.redMul(u).redISub(d),
            p = r.redAdd(r).redMul(i);
          return this.curve.jpoint(h, f, p);
        }),
        (Z.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            i = t.redSqr(),
            s = e.redAdd(e).redIAdd(e),
            n = s.redSqr(),
            o = this.x.redAdd(t).redSqr().redISub(e).redISub(i),
            a = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(n)).redSqr(),
            c = i.redIAdd(i);
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var l = s.redIAdd(o).redSqr().redISub(n).redISub(a).redISub(c),
            h = t.redMul(l);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var u = this.x.redMul(a).redISub(h);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var d = this.y.redMul(l.redMul(c.redISub(l)).redISub(o.redMul(a)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var f = this.z.redAdd(o).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(u, d, f);
        }),
        (Z.prototype.mul = function (e, t) {
          return (e = new (m())(e, t)), this.curve._wnafMul(this, e);
        }),
        (Z.prototype.eq = function (e) {
          if ('affine' === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var i = t.redMul(this.z),
            s = r.redMul(e.z);
          return 0 === this.y.redMul(s).redISub(e.y.redMul(i)).cmpn(0);
        }),
        (Z.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var i = e.clone(), s = this.curve.redN.redMul(t); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(s), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (Z.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>';
        }),
        (Z.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var X = q(function (e, t) {
          (t.base = H), (t.short = Y), (t.mont = null), (t.edwards = null);
        }),
        ee = q(function (e, t) {
          var r,
            i = $.assert;
          function s(e) {
            'short' === e.type
              ? (this.curve = new X.short(e))
              : 'edwards' === e.type
                ? (this.curve = new X.edwards(e))
                : (this.curve = new X.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              i(this.g.validate(), 'Invalid curve'),
              i(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
          }
          function n(e, r) {
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var i = new s(r);
                return (
                  Object.defineProperty(t, e, { configurable: !0, enumerable: !0, value: i }), i
                );
              },
            });
          }
          (t.PresetCurve = s),
            n('p192', {
              type: 'short',
              prime: 'p192',
              p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
              a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
              b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
              n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
              hash: M().sha256,
              gRed: !1,
              g: [
                '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
                '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
              ],
            }),
            n('p224', {
              type: 'short',
              prime: 'p224',
              p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
              a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
              b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
              n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
              hash: M().sha256,
              gRed: !1,
              g: [
                'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
                'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
              ],
            }),
            n('p256', {
              type: 'short',
              prime: null,
              p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
              a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
              b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
              n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
              hash: M().sha256,
              gRed: !1,
              g: [
                '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
                '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
              ],
            }),
            n('p384', {
              type: 'short',
              prime: null,
              p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
              a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
              b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
              n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
              hash: M().sha384,
              gRed: !1,
              g: [
                'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
                '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
              ],
            }),
            n('p521', {
              type: 'short',
              prime: null,
              p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
              a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
              b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
              n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
              hash: M().sha512,
              gRed: !1,
              g: [
                '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
                '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
              ],
            }),
            n('curve25519', {
              type: 'mont',
              prime: 'p25519',
              p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '76d06',
              b: '1',
              n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: M().sha256,
              gRed: !1,
              g: ['9'],
            }),
            n('ed25519', {
              type: 'edwards',
              prime: 'p25519',
              p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '-1',
              c: '1',
              d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
              n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: M().sha256,
              gRed: !1,
              g: [
                '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
                '6666666666666666666666666666666666666666666666666666666666666658',
              ],
            });
          try {
            r = null.crash();
          } catch (e) {
            r = void 0;
          }
          n('secp256k1', {
            type: 'short',
            prime: 'k256',
            p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
            a: '0',
            b: '7',
            n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
            h: '1',
            hash: M().sha256,
            beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
            lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
            basis: [
              { a: '3086d221a7d46bcde86c90e49284eb15', b: '-e4437ed6010e88286f547fa90abfe4c3' },
              { a: '114ca50f7a8e2f3f657c1108d9d44cfd8', b: '3086d221a7d46bcde86c90e49284eb15' },
            ],
            gRed: !1,
            g: [
              '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
              '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
              r,
            ],
          });
        });
      function et(e) {
        if (!(this instanceof et)) return new et(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = z.toArray(e.entropy, e.entropyEnc || 'hex'),
          r = z.toArray(e.nonce, e.nonceEnc || 'hex'),
          i = z.toArray(e.pers, e.persEnc || 'hex');
        j(
          t.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(t, r, i);
      }
      (et.prototype._init = function (e, t, r) {
        var i = e.concat(t).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var s = 0; s < this.V.length; s++) (this.K[s] = 0), (this.V[s] = 1);
        this._update(i), (this._reseed = 1), (this.reseedInterval = 0x1000000000000);
      }),
        (et.prototype._hmac = function () {
          return new (M().hmac)(this.hash, this.K);
        }),
        (et.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (et.prototype.reseed = function (e, t, r, i) {
          'string' != typeof t && ((i = r), (r = t), (t = null)),
            (e = z.toArray(e, t)),
            (r = z.toArray(r, i)),
            j(
              e.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (et.prototype.generate = function (e, t, r, i) {
          if (this._reseed > this.reseedInterval) throw Error('Reseed is required');
          'string' != typeof t && ((i = r), (r = t), (t = null)),
            r && ((r = z.toArray(r, i || 'hex')), this._update(r));
          for (var s = []; s.length < e; )
            (this.V = this._hmac().update(this.V).digest()), (s = s.concat(this.V));
          var n = s.slice(0, e);
          return this._update(r), this._reseed++, z.encode(n, t);
        });
      var er = $.assert;
      function ei(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (ei.fromPublic = function (e, t, r) {
        return t instanceof ei ? t : new ei(e, { pub: t, pubEnc: r });
      }),
        (ei.fromPrivate = function (e, t, r) {
          return t instanceof ei ? t : new ei(e, { priv: t, privEnc: r });
        }),
        (ei.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : e.validate()
              ? e.mul(this.ec.curve.n).isInfinity()
                ? { result: !0, reason: null }
                : { result: !1, reason: 'Public key * N != O' }
              : { result: !1, reason: 'Public key is not a point' };
        }),
        (ei.prototype.getPublic = function (e, t) {
          return ('string' == typeof e && ((t = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          t)
            ? this.pub.encode(t, e)
            : this.pub;
        }),
        (ei.prototype.getPrivate = function (e) {
          return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (ei.prototype._importPrivate = function (e, t) {
          (this.priv = new (m())(e, t || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (ei.prototype._importPublic = function (e, t) {
          if (e.x || e.y) {
            'mont' === this.ec.curve.type
              ? er(e.x, 'Need x coordinate')
              : ('short' === this.ec.curve.type || 'edwards' === this.ec.curve.type) &&
                er(e.x && e.y, 'Need both x and y coordinate'),
              (this.pub = this.ec.curve.point(e.x, e.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (ei.prototype.derive = function (e) {
          return (
            e.validate() || er(e.validate(), 'public point not validated'), e.mul(this.priv).getX()
          );
        }),
        (ei.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (ei.prototype.verify = function (e, t) {
          return this.ec.verify(e, t, this);
        }),
        (ei.prototype.inspect = function () {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          );
        });
      var es = $.assert;
      function en(e, t) {
        if (e instanceof en) return e;
        this._importDER(e, t) ||
          (es(e.r && e.s, 'Signature without r or s'),
          (this.r = new (m())(e.r, 16)),
          (this.s = new (m())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function eo() {
        this.place = 0;
      }
      function ea(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var i = 15 & r;
        if (0 === i || i > 4) return !1;
        for (var s = 0, n = 0, o = t.place; n < i; n++, o++) (s <<= 8), (s |= e[o]), (s >>>= 0);
        return !(s <= 127) && ((t.place = o), s);
      }
      function ec(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; ) t++;
        return 0 === t ? e : e.slice(t);
      }
      function el(e, t) {
        if (t < 128) {
          e.push(t);
          return;
        }
        var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
        for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
        e.push(t);
      }
      (en.prototype._importDER = function (e, t) {
        e = $.toArray(e, t);
        var r = new eo();
        if (48 !== e[r.place++]) return !1;
        var i = ea(e, r);
        if (!1 === i || i + r.place !== e.length || 2 !== e[r.place++]) return !1;
        var s = ea(e, r);
        if (!1 === s) return !1;
        var n = e.slice(r.place, s + r.place);
        if (((r.place += s), 2 !== e[r.place++])) return !1;
        var o = ea(e, r);
        if (!1 === o || e.length !== o + r.place) return !1;
        var a = e.slice(r.place, o + r.place);
        if (0 === n[0]) {
          if (!(128 & n[1])) return !1;
          n = n.slice(1);
        }
        if (0 === a[0]) {
          if (!(128 & a[1])) return !1;
          a = a.slice(1);
        }
        return (this.r = new (m())(n)), (this.s = new (m())(a)), (this.recoveryParam = null), !0;
      }),
        (en.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = ec(t),
              r = ec(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var i = [2];
          el(i, t.length), (i = i.concat(t)).push(2), el(i, r.length);
          var s = i.concat(r),
            n = [48];
          return el(n, s.length), (n = n.concat(s)), $.encode(n, e);
        });
      var eh = function () {
          throw Error('unsupported');
        },
        eu = $.assert;
      function ed(e) {
        if (!(this instanceof ed)) return new ed(e);
        'string' == typeof e &&
          (eu(Object.prototype.hasOwnProperty.call(ee, e), 'Unknown curve ' + e), (e = ee[e])),
          e instanceof ee.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (ed.prototype.keyPair = function (e) {
        return new ei(this, e);
      }),
        (ed.prototype.keyFromPrivate = function (e, t) {
          return ei.fromPrivate(this, e, t);
        }),
        (ed.prototype.keyFromPublic = function (e, t) {
          return ei.fromPublic(this, e, t);
        }),
        (ed.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var t = new et({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || 'utf8',
                entropy: e.entropy || eh(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              i = this.n.sub(new (m())(2));
            ;

          ) {
            var s = new (m())(t.generate(r));
            if (!(s.cmp(i) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
          }
        }),
        (ed.prototype._truncateToN = function (e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return (r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e;
        }),
        (ed.prototype.sign = function (e, t, r, i) {
          'object' == typeof r && ((i = r), (r = null)),
            i || (i = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new (m())(e, 16)));
          for (
            var s = this.n.byteLength(),
              n = t.getPrivate().toArray('be', s),
              o = e.toArray('be', s),
              a = new et({
                hash: this.hash,
                entropy: n,
                nonce: o,
                pers: i.pers,
                persEnc: i.persEnc || 'utf8',
              }),
              c = this.n.sub(new (m())(1)),
              l = 0;
            ;
            l++
          ) {
            var h = i.k ? i.k(l) : new (m())(a.generate(this.n.byteLength()));
            if (!(0 >= (h = this._truncateToN(h, !0)).cmpn(1) || h.cmp(c) >= 0)) {
              var u = this.g.mul(h);
              if (!u.isInfinity()) {
                var d = u.getX(),
                  f = d.umod(this.n);
                if (0 !== f.cmpn(0)) {
                  var p = h.invm(this.n).mul(f.mul(t.getPrivate()).iadd(e));
                  if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                    var g = +!!u.getY().isOdd() | (2 * (0 !== d.cmp(f)));
                    return (
                      i.canonical && p.cmp(this.nh) > 0 && ((p = this.n.sub(p)), (g ^= 1)),
                      new en({ r: f, s: p, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (ed.prototype.verify = function (e, t, r, i) {
          (e = this._truncateToN(new (m())(e, 16))), (r = this.keyFromPublic(r, i));
          var s,
            n = (t = new en(t, 'hex')).r,
            o = t.s;
          if (0 > n.cmpn(1) || n.cmp(this.n) >= 0 || 0 > o.cmpn(1) || o.cmp(this.n) >= 0) return !1;
          var a = o.invm(this.n),
            c = a.mul(e).umod(this.n),
            l = a.mul(n).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(c, r.getPublic(), l)).isInfinity() && s.eqXToP(n)
            : !(s = this.g.mulAdd(c, r.getPublic(), l)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(n);
        }),
        (ed.prototype.recoverPubKey = function (e, t, r, i) {
          eu((3 & r) === r, 'The recovery param is more than two bits'), (t = new en(t, i));
          var s = this.n,
            n = new (m())(e),
            o = t.r,
            a = t.s,
            c = 1 & r,
            l = r >> 1;
          if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
            throw Error('Unable to find sencond key candinate');
          o = l ? this.curve.pointFromX(o.add(this.curve.n), c) : this.curve.pointFromX(o, c);
          var h = t.r.invm(s),
            u = s.sub(n).mul(h).umod(s),
            d = a.mul(h).umod(s);
          return this.g.mulAdd(u, o, d);
        }),
        (ed.prototype.getKeyRecoveryParam = function (e, t, r, i) {
          if (null !== (t = new en(t, i)).recoveryParam) return t.recoveryParam;
          for (var s, n = 0; n < 4; n++) {
            try {
              s = this.recoverPubKey(e, t, n);
            } catch (e) {
              continue;
            }
            if (s.eq(r)) return n;
          }
          throw Error('Unable to find valid recovery factor');
        });
      var ef = q(function (e, t) {
        (t.version = '6.5.4'),
          (t.utils = $),
          (t.rand = function () {
            throw Error('unsupported');
          }),
          (t.curve = X),
          (t.curves = ee),
          (t.ec = ed),
          (t.eddsa = null);
      }).ec;
      let ep = new v.Vy('properties/5.7.0');
      function eg(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      let ey = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 },
        eb = new v.Vy('signing-key/5.7.0'),
        em = null;
      function ev() {
        return em || (em = new ef('secp256k1')), em;
      }
      class ew {
        constructor(e) {
          eg(this, 'curve', 'secp256k1'),
            eg(this, 'privateKey', (0, y.c$)(e)),
            32 !== (0, y.cm)(this.privateKey) &&
              eb.throwArgumentError('invalid private key', 'privateKey', '[[ REDACTED ]]');
          let t = ev().keyFromPrivate((0, y.k9)(this.privateKey));
          eg(this, 'publicKey', '0x' + t.getPublic(!1, 'hex')),
            eg(this, 'compressedPublicKey', '0x' + t.getPublic(!0, 'hex')),
            eg(this, '_isSigningKey', !0);
        }
        _addPoint(e) {
          let t = ev().keyFromPublic((0, y.k9)(this.publicKey)),
            r = ev().keyFromPublic((0, y.k9)(e));
          return '0x' + t.pub.add(r.pub).encodeCompressed('hex');
        }
        signDigest(e) {
          let t = ev().keyFromPrivate((0, y.k9)(this.privateKey)),
            r = (0, y.k9)(e);
          32 !== r.length && eb.throwArgumentError('bad digest length', 'digest', e);
          let i = t.sign(r, { canonical: !0 });
          return (0, y.Pc)({
            recoveryParam: i.recoveryParam,
            r: (0, y.bj)('0x' + i.r.toString(16), 32),
            s: (0, y.bj)('0x' + i.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          let t = ev().keyFromPrivate((0, y.k9)(this.privateKey)),
            r = ev().keyFromPublic((0, y.k9)(eE(e)));
          return (0, y.bj)('0x' + t.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !!(e && e._isSigningKey);
        }
      }
      function eE(e, t) {
        let r = (0, y.k9)(e);
        if (32 === r.length) {
          let e = new ew(r);
          return t ? '0x' + ev().keyFromPrivate(r).getPublic(!0, 'hex') : e.publicKey;
        }
        return 33 === r.length
          ? t
            ? (0, y.c$)(r)
            : '0x' + ev().keyFromPublic(r).getPublic(!1, 'hex')
          : 65 === r.length
            ? t
              ? '0x' + ev().keyFromPublic(r).getPublic(!0, 'hex')
              : (0, y.c$)(r)
            : eb.throwArgumentError('invalid public or private key', 'key', '[REDACTED]');
      }
      let e_ = new v.Vy('transactions/5.7.0');
      !(function (e) {
        (e[(e.legacy = 0)] = 'legacy'),
          (e[(e.eip2930 = 1)] = 'eip2930'),
          (e[(e.eip1559 = 2)] = 'eip1559');
      })(i || (i = {}));
      function eI(e, t) {
        return (function (e) {
          let t = eE(e);
          return (function (e) {
            let t = null;
            if (
              ('string' != typeof e && T.throwArgumentError('invalid address', 'address', e),
              e.match(/^(0x)?[0-9a-fA-F]{40}$/))
            )
              '0x' !== e.substring(0, 2) && (e = '0x' + e),
                (t = C(e)),
                e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
                  t !== e &&
                  T.throwArgumentError('bad address checksum', 'address', e);
            else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
              for (
                e.substring(2, 4) !==
                  (function (e) {
                    let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + '00')
                      .split('')
                      .map((e) => k[e])
                      .join('');
                    for (; t.length >= U; ) {
                      let e = t.substring(0, U);
                      t = (parseInt(e, 10) % 97) + t.substring(e.length);
                    }
                    let r = String(98 - (parseInt(t, 10) % 97));
                    for (; r.length < 2; ) r = '0' + r;
                    return r;
                  })(e) && T.throwArgumentError('bad icap checksum', 'address', e),
                  t = new w(e.substring(4), 36).toString(16);
                t.length < 40;

              )
                t = '0' + t;
              t = C('0x' + t);
            } else T.throwArgumentError('invalid address', 'address', e);
            return t;
          })((0, y.Ab)(N((0, y.Ab)(t, 1)), 12));
        })(
          (function (e, t) {
            let r = (0, y.Pc)(t),
              i = { r: (0, y.k9)(r.r), s: (0, y.k9)(r.s) };
            return (
              '0x' +
              ev()
                .recoverPubKey((0, y.k9)(e), i, r.recoveryParam)
                .encode('hex', !1)
            );
          })((0, y.k9)(e), t)
        );
      }
      function ex(e, t) {
        let r = stripZeros(BigNumber.from(e).toHexString());
        return (
          r.length > 32 && e_.throwArgumentError('invalid length for ' + t, 'transaction:' + t, e),
          r
        );
      }
      function eS(e, t) {
        return {
          address: getAddress(e),
          storageKeys: (t || []).map(
            (t, r) => (
              32 !== hexDataLength(t) &&
                e_.throwArgumentError('invalid access list storageKey', `accessList[${e}:${r}]`, t),
              t.toLowerCase()
            )
          ),
        };
      }
      function eD(e) {
        return (function (e) {
          if (Array.isArray(e))
            return e.map((e, t) =>
              Array.isArray(e)
                ? (e.length > 2 &&
                    e_.throwArgumentError(
                      'access list expected to be [ address, storageKeys[] ]',
                      `value[${t}]`,
                      e
                    ),
                  eS(e[0], e[1]))
                : eS(e.address, e.storageKeys)
            );
          let t = Object.keys(e).map((t) => {
            let r = e[t].reduce((e, t) => ((e[t] = !0), e), {});
            return eS(t, Object.keys(r).sort());
          });
          return t.sort((e, t) => e.address.localeCompare(t.address)), t;
        })(e).map((e) => [e.address, e.storageKeys]);
      }
      function eO(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function eA(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = eO(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return r;
      }
      var eP = r(29218);
      function eR(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      let eN = eR(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        eT = eR(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = eO((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        eC = {
          utf8: eN,
          'utf-8': eN,
          hex: eP.Fo.base16,
          latin1: eT,
          ascii: eT,
          binary: eT,
          ...eP.Fo,
        };
      function ek(e, t = 'utf8') {
        let r = eC[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, 'utf8')
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function eU(e, t = 'utf8') {
        let r = eC[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : r.encoder.encode(e).substring(1);
      }
      var eL = r(34736),
        eM = r(26481),
        eq = r(29143),
        ej = r(51642).Buffer;
      function eB(e) {
        let [t, r] = e.split(':');
        return { namespace: t, reference: r };
      }
      function ez(e) {
        let [t, r, i] = e.split(':');
        return { namespace: t, reference: r, address: i };
      }
      function e$(e, t) {
        return e.includes(':') ? [e] : t.chains || [];
      }
      let eF = {
        reactNative: 'react-native',
        node: 'node',
        browser: 'browser',
        unknown: 'unknown',
      };
      function eV() {
        return 'u' > typeof eq && 'u' > typeof eq.versions && 'u' > typeof eq.versions.node;
      }
      function eK() {
        return (
          !(0, p.getDocument)() && !!(0, p.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function eH() {
        return !eV() && !!(0, p.getNavigator)() && !!(0, p.getDocument)();
      }
      function eJ() {
        return eK() ? eF.reactNative : eV() ? eF.node : eH() ? eF.browser : eF.unknown;
      }
      function eW() {
        var e;
        try {
          return eK() && 'u' > typeof r.g && 'u' > typeof (null == r.g ? void 0 : r.g.Application)
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function eG() {
        return (0, g.g)() || { name: '', description: '', url: '', icons: [''] };
      }
      function eY(e, t, i) {
        let s = (function () {
            if (
              eJ() === eF.reactNative &&
              'u' > typeof r.g &&
              'u' > typeof (null == r.g ? void 0 : r.g.Platform)
            ) {
              let { OS: e, Version: t } = r.g.Platform;
              return [e, t].join('-');
            }
            let e = (0, f.o0)();
            if (null === e) return 'unknown';
            let t = e.os ? e.os.replace(' ', '').toLowerCase() : 'unknown';
            return 'browser' === e.type
              ? [t, e.name, e.version].join('-')
              : [t, e.version].join('-');
          })(),
          n = (function () {
            var e;
            let t = eJ();
            return t === eF.browser
              ? [t, (null == (e = (0, p.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', i].join('-'), s, n].join('/');
      }
      function eQ(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function eZ(e) {
        return Object.fromEntries(e.entries());
      }
      function eX(e) {
        return new Map(Object.entries(e));
      }
      function e0(e = h.FIVE_MINUTES, t) {
        let r, i, s, n;
        let o = (0, h.toMiliseconds)(e || h.FIVE_MINUTES);
        return {
          resolve: (e) => {
            s && r && (clearTimeout(s), r(e), (n = Promise.resolve(e)));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, a) => {
              if (n) return e(n);
              (s = setTimeout(() => {
                let e = Error(t);
                (n = Promise.reject(e)), a(e);
              }, o)),
                (r = e),
                (i = a);
            }),
        };
      }
      function e1(e, t, r) {
        return new Promise(async (i, s) => {
          let n = setTimeout(() => s(Error(r)), t);
          try {
            let t = await e;
            i(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function e2(e, t) {
        if ('string' == typeof t && t.startsWith(`${e}:`)) return t;
        if ('topic' === e.toLowerCase()) {
          if ('string' != typeof t)
            throw Error('Value must be "string" for expirer target type: topic');
          return `topic:${t}`;
        }
        if ('id' === e.toLowerCase()) {
          if ('number' != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function e3(e) {
        let [t, r] = e.split(':'),
          i = { id: void 0, topic: void 0 };
        if ('topic' === t && 'string' == typeof r) i.topic = r;
        else if ('id' === t && Number.isInteger(Number(r))) i.id = Number(r);
        else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
        return i;
      }
      function e8(e, t) {
        return (0, h.fromMiliseconds)((t || Date.now()) + (0, h.toMiliseconds)(e));
      }
      function e5(e) {
        return Date.now() >= (0, h.toMiliseconds)(e);
      }
      function e6(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function e4(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function e9({ id: e, topic: t, wcDeepLink: i }) {
        var s, n;
        try {
          if (!i) return;
          let o = 'string' == typeof i ? JSON.parse(i) : i,
            a = o?.href;
          if ('string' != typeof a) return;
          let c = (function (e, t, r) {
              let i = `requestId=${t}&sessionTopic=${r}`;
              e.endsWith('/') && (e = e.slice(0, -1));
              let s = `${e}`;
              if (e.startsWith('https://t.me')) {
                let t = e.includes('?') ? '&startapp=' : '?startapp=';
                s = `${s}${t}${(function (e, t = !1) {
                  let r = ej.from(e).toString('base64');
                  return t ? r.replace(/[=]/g, '') : r;
                })(i, !0)}`;
              } else s = `${s}/wc?${i}`;
              return s;
            })(a, e, t),
            l = eJ();
          if (l === eF.browser) {
            let e;
            if (!(null != (s = (0, p.getDocument)()) && s.hasFocus())) {
              console.warn('Document does not have focus, skipping deeplink.');
              return;
            }
            (n = c),
              (e = '_self'),
              !(function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? (('u' > typeof window &&
                    (!!window.TelegramWebviewProxy ||
                      !!window.Telegram ||
                      !!window.TelegramWebviewProxyProto)) ||
                    n.startsWith('https://') ||
                    n.startsWith('http://')) &&
                  (e = '_blank')
                : (e = '_top'),
              window.open(n, e, 'noreferrer noopener');
          } else
            l === eF.reactNative &&
              'u' > typeof (null == r.g ? void 0 : r.g.Linking) &&
              (await r.g.Linking.openURL(c));
        } catch (e) {
          console.error(e);
        }
      }
      async function e7(e, t) {
        let r = '';
        try {
          if (eH() && (r = localStorage.getItem(t))) return r;
          r = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return r;
      }
      function te(e, t) {
        if (!e.includes(t)) return null;
        let r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function tt() {
        return 'u' > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function tr() {
        return 'u' > typeof eq && 'true' === eq.env.IS_VITEST;
      }
      function ti(e) {
        return ej.from(e, 'base64').toString('utf-8');
      }
      function ts(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function tn(e, ...t) {
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
      function to(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        ts(e.outputLen), ts(e.blockLen);
      }
      function ta(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function tc(e, t) {
        tn(e);
        let r = t.outputLen;
        if (e.length < r) throw Error('digestInto() expects output buffer of length at least ' + r);
      }
      let tl = BigInt(0x100000000 - 1),
        th = BigInt(32),
        tu = (e, t, r) => (e << r) | (t >>> (32 - r)),
        td = (e, t, r) => (t << r) | (e >>> (32 - r)),
        tf = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        tp = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        tg = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function ty(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function tb(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let tm = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function tv(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function tw(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          tn(e),
          e
        );
      }
      class tE {
        clone() {
          return this._cloneInto();
        }
      }
      function t_(e) {
        let t = (t) => e().update(tw(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function tI(e = 32) {
        if (tg && 'function' == typeof tg.getRandomValues)
          return tg.getRandomValues(new Uint8Array(e));
        if (tg && 'function' == typeof tg.randomBytes) return tg.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      let tx = [],
        tS = [],
        tD = [],
        tO = BigInt(0),
        tA = BigInt(1),
        tP = BigInt(2),
        tR = BigInt(7),
        tN = BigInt(256),
        tT = BigInt(113);
      for (let e = 0, t = tA, r = 1, i = 0; e < 24; e++) {
        ([r, i] = [i, (2 * r + 3 * i) % 5]),
          tx.push(2 * (5 * i + r)),
          tS.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = tO;
        for (let e = 0; e < 7; e++)
          (t = ((t << tA) ^ ((t >> tR) * tT)) % tN) & tP && (s ^= tA << ((tA << BigInt(e)) - tA));
        tD.push(s);
      }
      let [tC, tk] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & tl), l: Number((e >> th) & tl) }
                : { h: 0 | Number((e >> th) & tl), l: 0 | Number(e & tl) };
            })(e[s], t);
            [r[s], i[s]] = [n, o];
          }
          return [r, i];
        })(tD, !0),
        tU = (e, t, r) => (r > 32 ? tf(e, t, r) : tu(e, t, r)),
        tL = (e, t, r) => (r > 32 ? tp(e, t, r) : td(e, t, r));
      class tM extends tE {
        constructor(e, t, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            ts(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          tm || tv(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let i = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = r[s],
                    o = r[s + 1],
                    a = tU(n, o, 1) ^ r[i],
                    c = tL(n, o, 1) ^ r[i + 1];
                  for (let r = 0; r < 50; r += 10) (e[t + r] ^= a), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let i = tS[r],
                    n = tU(t, s, i),
                    o = tL(t, s, i),
                    a = tx[r];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let i = 0; i < 10; i++) r[i] = e[t + i];
                  for (let i = 0; i < 10; i++) e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10];
                }
                (e[0] ^= tC[i]), (e[1] ^= tk[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            tm || tv(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          ta(this);
          let { blockLen: t, state: r } = this,
            i = (e = tw(e)).length;
          for (let s = 0; s < i; ) {
            let n = Math.min(t - this.pos, i - s);
            for (let t = 0; t < n; t++) r[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          ta(this, !1), tn(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let i = 0, s = e.length; i < s; ) {
            this.posOut >= r && this.keccak();
            let n = Math.min(r - this.posOut, s - i);
            e.set(t.subarray(this.posOut, this.posOut + n), i), (this.posOut += n), (i += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return ts(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((tc(e, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let { blockLen: t, suffix: r, outputLen: i, rounds: s, enableXOF: n } = this;
          return (
            e || (e = new tM(t, r, i, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let tq = t_(() => new tM(136, 1, 32));
      function tj(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          r = new TextEncoder().encode(t + e);
        return '0x' + ej.from(tq(r)).toString('hex');
      }
      async function tB(e, t, r, i, s, n) {
        switch (r.t) {
          case 'eip191':
            var o, a, c;
            return (o = e), (a = t), (c = r.s), eI(tj(a), c).toLowerCase() === o.toLowerCase();
          case 'eip1271':
            return await tz(e, t, r.s, i, s, n);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
            );
        }
      }
      async function tz(e, t, r, i, s, n) {
        let o = eB(i);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
          );
        try {
          let o = '0x1626ba7e',
            a = r.substring(2),
            c = tj(t).substring(2),
            l =
              o +
              c +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            h = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${i}&projectId=${s}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: '2.0',
                  method: 'eth_call',
                  params: [{ to: e, data: l }, 'latest'],
                }),
              }
            ),
            { result: u } = await h.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var t$ = Object.defineProperty,
        tF = Object.defineProperties,
        tV = Object.getOwnPropertyDescriptors,
        tK = Object.getOwnPropertySymbols,
        tH = Object.prototype.hasOwnProperty,
        tJ = Object.prototype.propertyIsEnumerable,
        tW = (e, t, r) =>
          t in e
            ? t$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        tG = (e, t) => {
          for (var r in t || (t = {})) tH.call(t, r) && tW(e, r, t[r]);
          if (tK) for (var r of tK(t)) tJ.call(t, r) && tW(e, r, t[r]);
          return e;
        },
        tY = (e, t) => tF(e, tV(t));
      let tQ = (e) => e?.split(':'),
        tZ = (e) => {
          let t = e && tQ(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        tX = (e) => {
          let t = e && tQ(e);
          if (t) return t[2] + ':' + t[3];
        },
        t0 = (e) => {
          let t = e && tQ(e);
          if (t) return t.pop();
        };
      async function t1(e) {
        let { cacao: t, projectId: r } = e,
          { s: i, p: s } = t,
          n = t2(s, s.iss),
          o = t0(s.iss);
        return await tB(o, n, i, tX(s.iss), r);
      }
      let t2 = (e, t) => {
        let r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = t0(t);
        if (!e.aud && !e.uri)
          throw Error('Either `aud` or `uri` is required to construct the message');
        let s = e.statement || void 0,
          n = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${tZ(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          f = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join('')}`
            : void 0,
          p = t9(e.resources);
        return (
          p &&
            (s = (function (e = '', t) {
              t3(t);
              let r =
                'I further authorize the stated URI to perform the following actions on my behalf: ';
              if (e.includes(r)) return e;
              let i = [],
                s = 0;
              Object.keys(t.att).forEach((e) => {
                let r = Object.keys(t.att[e]).map((e) => ({
                  ability: e.split('/')[0],
                  action: e.split('/')[1],
                }));
                r.sort((e, t) => e.action.localeCompare(t.action));
                let n = {};
                r.forEach((e) => {
                  n[e.ability] || (n[e.ability] = []), n[e.ability].push(e.action);
                });
                let o = Object.keys(n).map(
                  (t) => (s++, `(${s}) '${t}': '${n[t].join("', '")}' for '${e}'.`)
                );
                i.push(o.join(', ').replace('.,', '.'));
              });
              let n = i.join(' '),
                o = `${r}${n}`;
              return `${e ? e + ' ' : ''}${o}`;
            })(s, t5(p))),
          [r, i, '', s, '', n, o, a, c, l, h, u, d, f].filter((e) => null != e).join(`
`)
        );
      };
      function t3(e) {
        if (!e) throw Error('No recap provided, value is undefined');
        if (!e.att) throw Error('No `att` property found');
        let t = Object.keys(e.att);
        if (!(null != t && t.length)) throw Error('No resources found in `att` property');
        t.forEach((t) => {
          let r = e.att[t];
          if (Array.isArray(r) || 'object' != typeof r)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(r).length) throw Error(`Resource object is empty: ${t}`);
          Object.keys(r).forEach((e) => {
            let t = r[e];
            if (!Array.isArray(t))
              throw Error(`Ability limits ${e} must be an array of objects, found: ${t}`);
            if (!t.length)
              throw Error(`Value of ${e} is empty array, must be an array with objects`);
            t.forEach((t) => {
              if ('object' != typeof t)
                throw Error(`Ability limits (${e}) must be an array of objects, found: ${t}`);
            });
          });
        });
      }
      function t8(e) {
        return (
          t3(e), `urn:recap:${ej.from(JSON.stringify(e)).toString('base64').replace(/=/g, '')}`
        );
      }
      function t5(e) {
        var t;
        let r =
          ((t = e.replace('urn:recap:', '')), JSON.parse(ej.from(t, 'base64').toString('utf-8')));
        return t3(r), r;
      }
      function t6(e) {
        var t;
        let r = t5(e);
        t3(r);
        let i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split('/')[1]) : [];
      }
      function t4(e) {
        let t = t5(e);
        t3(t);
        let r = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = e?.[0]) && t.chains && r.push(e[0].chains);
            });
          }),
          [...new Set(r.flat())]
        );
      }
      function t9(e) {
        var t;
        if (!e) return;
        let r = e?.[e.length - 1];
        return (t = r) && t.includes('urn:recap:') ? r : void 0;
      }
      function t7(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function re(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function rt(e, ...t) {
        if (!re(e)) throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function rr(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function ri(e) {
        if ('boolean' != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let rs = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        rn = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function ro(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (re(e)) e = rl(e);
        else throw Error('Uint8Array expected, got ' + typeof e);
        return e;
      }
      function ra(e, t, r = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (r && t.byteOffset % 4 != 0) throw Error('invalid output, must be aligned');
        return t;
      }
      function rc(e, t, r, i) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((r >> s) & n),
          a = Number(r & n),
          c = 4 * !!i,
          l = 4 * !i;
        e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
      }
      function rl(e) {
        return Uint8Array.from(e);
      }
      function rh(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let ru = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        rd = ru('expand 16-byte k'),
        rf = ru('expand 32-byte k'),
        rp = rs(rd),
        rg = rs(rf);
      function ry(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function rb(e) {
        return e.byteOffset % 4 == 0;
      }
      let rm = 0x100000000 - 1,
        rv = new Uint32Array(),
        rw = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class rE {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            rt((e = ro(e)), 32);
          let t = rw(e, 0),
            r = rw(e, 2),
            i = rw(e, 4),
            s = rw(e, 6),
            n = rw(e, 8),
            o = rw(e, 10),
            a = rw(e, 12),
            c = rw(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (r << 3)) & 8191),
            (this.r[2] = ((r >>> 10) | (i << 6)) & 7939),
            (this.r[3] = ((i >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
            (this.r[9] = (c >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = rw(e, 16 + 2 * t);
        }
        process(e, t, r = !1) {
          let { h: i, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            c = s[3],
            l = s[4],
            h = s[5],
            u = s[6],
            d = s[7],
            f = s[8],
            p = s[9],
            g = rw(e, t + 0),
            y = rw(e, t + 2),
            b = rw(e, t + 4),
            m = rw(e, t + 6),
            v = rw(e, t + 8),
            w = rw(e, t + 10),
            E = rw(e, t + 12),
            _ = rw(e, t + 14),
            I = i[0] + (8191 & g),
            x = i[1] + (((g >>> 13) | (y << 3)) & 8191),
            S = i[2] + (((y >>> 10) | (b << 6)) & 8191),
            D = i[3] + (((b >>> 7) | (m << 9)) & 8191),
            O = i[4] + (((m >>> 4) | (v << 12)) & 8191),
            A = i[5] + ((v >>> 1) & 8191),
            P = i[6] + (((v >>> 14) | (w << 2)) & 8191),
            R = i[7] + (((w >>> 11) | (E << 5)) & 8191),
            N = i[8] + (((E >>> 8) | (_ << 8)) & 8191),
            T = i[9] + ((_ >>> 5) | (2048 * !r)),
            C = 0,
            k = 0 + I * n + 5 * p * x + 5 * f * S + 5 * d * D + 5 * u * O;
          (C = k >>> 13),
            (k &= 8191),
            (k += 5 * h * A + 5 * l * P + 5 * c * R + 5 * a * N + 5 * o * T),
            (C += k >>> 13),
            (k &= 8191);
          let U = C + I * o + x * n + 5 * p * S + 5 * f * D + 5 * d * O;
          (C = U >>> 13),
            (U &= 8191),
            (U += 5 * u * A + 5 * h * P + 5 * l * R + 5 * c * N + 5 * a * T),
            (C += U >>> 13),
            (U &= 8191);
          let L = C + I * a + x * o + S * n + 5 * p * D + 5 * f * O;
          (C = L >>> 13),
            (L &= 8191),
            (L += 5 * d * A + 5 * u * P + 5 * h * R + 5 * l * N + 5 * c * T),
            (C += L >>> 13),
            (L &= 8191);
          let M = C + I * c + x * a + S * o + D * n + 5 * p * O;
          (C = M >>> 13),
            (M &= 8191),
            (M += 5 * f * A + 5 * d * P + 5 * u * R + 5 * h * N + 5 * l * T),
            (C += M >>> 13),
            (M &= 8191);
          let q = C + I * l + x * c + S * a + D * o + O * n;
          (C = q >>> 13),
            (q &= 8191),
            (q += 5 * p * A + 5 * f * P + 5 * d * R + 5 * u * N + 5 * h * T),
            (C += q >>> 13),
            (q &= 8191);
          let j = C + I * h + x * l + S * c + D * a + O * o;
          (C = j >>> 13),
            (j &= 8191),
            (j += A * n + 5 * p * P + 5 * f * R + 5 * d * N + 5 * u * T),
            (C += j >>> 13),
            (j &= 8191);
          let B = C + I * u + x * h + S * l + D * c + O * a;
          (C = B >>> 13),
            (B &= 8191),
            (B += A * o + P * n + 5 * p * R + 5 * f * N + 5 * d * T),
            (C += B >>> 13),
            (B &= 8191);
          let z = C + I * d + x * u + S * h + D * l + O * c;
          (C = z >>> 13),
            (z &= 8191),
            (z += A * a + P * o + R * n + 5 * p * N + 5 * f * T),
            (C += z >>> 13),
            (z &= 8191);
          let $ = C + I * f + x * d + S * u + D * h + O * l;
          (C = $ >>> 13),
            ($ &= 8191),
            ($ += A * c + P * a + R * o + N * n + 5 * p * T),
            (C += $ >>> 13),
            ($ &= 8191);
          let F = C + I * p + x * f + S * d + D * u + O * h;
          (C = F >>> 13),
            (F &= 8191),
            (F += A * l + P * c + R * a + N * o + T * n),
            (C += F >>> 13),
            (F &= 8191),
            (k = 8191 & (C = ((C = ((C << 2) + C) | 0) + k) | 0)),
            (C >>>= 13),
            (U += C),
            (i[0] = k),
            (i[1] = U),
            (i[2] = L),
            (i[3] = M),
            (i[4] = q),
            (i[5] = j),
            (i[6] = B),
            (i[7] = z),
            (i[8] = $),
            (i[9] = F);
        }
        finalize() {
          let { h: e, pad: t } = this,
            r = new Uint16Array(10),
            i = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++) (e[t] += i), (i = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * i),
            (i = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += i),
            (i = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += i),
            (r[0] = e[0] + 5),
            (i = r[0] >>> 13),
            (r[0] &= 8191);
          for (let t = 1; t < 10; t++) (r[t] = e[t] + i), (i = r[t] >>> 13), (r[t] &= 8191);
          r[9] -= 8192;
          let s = (1 ^ i) - 1;
          for (let e = 0; e < 10; e++) r[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | r[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let n = e[0] + t[0];
          e[0] = 65535 & n;
          for (let r = 1; r < 8; r++)
            (n = (((e[r] + t[r]) | 0) + (n >>> 16)) | 0), (e[r] = 65535 & n);
          rh(r);
        }
        update(e) {
          rr(this);
          let { buffer: t, blockLen: r } = this,
            i = (e = ro(e)).length;
          for (let s = 0; s < i; ) {
            let n = Math.min(r - this.pos, i - s);
            if (n === r) {
              for (; r <= i - s; s += r) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + n), this.pos),
              (this.pos += n),
              (s += n),
              this.pos === r && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          rh(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          rr(this),
            (function (e, t) {
              rt(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error('digestInto() expects output buffer of length at least ' + r);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: r } = this,
            { pos: i } = this;
          if (i) {
            for (t[i++] = 1; i < 16; i++) t[i] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++) (e[s++] = r[t] >>> 0), (e[s++] = r[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
      }
      let r_ = (function (e) {
          let t = (t, r) => e(r).update(ro(t)).digest(),
            r = e(new Uint8Array(32));
          return (
            (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t)), t
          );
        })((e) => new rE(e)),
        rI = (function (e, t) {
          let {
            allowShortKeys: r,
            extendNonceFn: i,
            counterLength: s,
            counterRight: n,
            rounds: o,
          } = (function (e, t) {
            if (null == t || 'object' != typeof t) throw Error('options must be defined');
            return Object.assign(e, t);
          })({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, t);
          if ('function' != typeof e) throw Error('core must be a function');
          return (
            t7(s),
            t7(o),
            ri(n),
            ri(r),
            (t, a, c, l, h = 0) => {
              rt(t), rt(a), rt(c);
              let u = c.length;
              if ((void 0 === l && (l = new Uint8Array(u)), rt(l), t7(h), h < 0 || h >= rm))
                throw Error('arx: counter overflow');
              if (l.length < u)
                throw Error(`arx: output (${l.length}) is shorter than data (${u})`);
              let d = [],
                f = t.length,
                p,
                g;
              if (32 === f) d.push((p = rl(t))), (g = rg);
              else if (16 === f && r)
                (p = new Uint8Array(32)).set(t), p.set(t, 16), (g = rp), d.push(p);
              else throw Error(`arx: invalid 32-byte key, got length=${f}`);
              rb(a) || d.push((a = rl(a)));
              let y = rs(p);
              if (i) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                i(g, y, rs(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let b = 16 - s;
              if (b !== a.length) throw Error(`arx: nonce must be ${b} or 16 bytes`);
              if (12 !== b) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              return (
                (function (e, t, r, i, s, n, o, a) {
                  let c = s.length,
                    l = new Uint8Array(64),
                    h = rs(l),
                    u = rb(s) && rb(n),
                    d = u ? rs(s) : rv,
                    f = u ? rs(n) : rv;
                  for (let p = 0; p < c; o++) {
                    if ((e(t, r, i, h, o, a), o >= rm)) throw Error('arx: counter overflow');
                    let g = Math.min(64, c - p);
                    if (u && 64 === g) {
                      let e = p / 4;
                      if (p % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, r; t < 16; t++) f[(r = e + t)] = d[r] ^ h[t];
                      p += 64;
                      continue;
                    }
                    for (let e = 0, t; e < g; e++) n[(t = p + e)] = s[t] ^ l[e];
                    p += g;
                  }
                })(e, g, y, rs(a), c, l, h, o),
                rh(...d),
                l
              );
            }
          );
        })(
          function (e, t, r, i, s, n = 20) {
            let o = e[0],
              a = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              u = t[1],
              d = t[2],
              f = t[3],
              p = t[4],
              g = t[5],
              y = t[6],
              b = t[7],
              m = r[0],
              v = r[1],
              w = r[2],
              E = o,
              _ = a,
              I = c,
              x = l,
              S = h,
              D = u,
              O = d,
              A = f,
              P = p,
              R = g,
              N = y,
              T = b,
              C = s,
              k = m,
              U = v,
              L = w;
            for (let e = 0; e < n; e += 2)
              (P = (P + (C = ry(C ^ (E = (E + S) | 0), 16))) | 0),
                (E = (E + (S = ry(S ^ P, 12))) | 0),
                (P = (P + (C = ry(C ^ E, 8))) | 0),
                (S = ry(S ^ P, 7)),
                (R = (R + (k = ry(k ^ (_ = (_ + D) | 0), 16))) | 0),
                (_ = (_ + (D = ry(D ^ R, 12))) | 0),
                (R = (R + (k = ry(k ^ _, 8))) | 0),
                (D = ry(D ^ R, 7)),
                (N = (N + (U = ry(U ^ (I = (I + O) | 0), 16))) | 0),
                (I = (I + (O = ry(O ^ N, 12))) | 0),
                (N = (N + (U = ry(U ^ I, 8))) | 0),
                (O = ry(O ^ N, 7)),
                (T = (T + (L = ry(L ^ (x = (x + A) | 0), 16))) | 0),
                (x = (x + (A = ry(A ^ T, 12))) | 0),
                (T = (T + (L = ry(L ^ x, 8))) | 0),
                (A = ry(A ^ T, 7)),
                (N = (N + (L = ry(L ^ (E = (E + D) | 0), 16))) | 0),
                (E = (E + (D = ry(D ^ N, 12))) | 0),
                (N = (N + (L = ry(L ^ E, 8))) | 0),
                (D = ry(D ^ N, 7)),
                (T = (T + (C = ry(C ^ (_ = (_ + O) | 0), 16))) | 0),
                (_ = (_ + (O = ry(O ^ T, 12))) | 0),
                (T = (T + (C = ry(C ^ _, 8))) | 0),
                (O = ry(O ^ T, 7)),
                (P = (P + (k = ry(k ^ (I = (I + A) | 0), 16))) | 0),
                (I = (I + (A = ry(A ^ P, 12))) | 0),
                (P = (P + (k = ry(k ^ I, 8))) | 0),
                (A = ry(A ^ P, 7)),
                (R = (R + (U = ry(U ^ (x = (x + S) | 0), 16))) | 0),
                (x = (x + (S = ry(S ^ R, 12))) | 0),
                (R = (R + (U = ry(U ^ x, 8))) | 0),
                (S = ry(S ^ R, 7));
            let M = 0;
            (i[M++] = (o + E) | 0),
              (i[M++] = (a + _) | 0),
              (i[M++] = (c + I) | 0),
              (i[M++] = (l + x) | 0),
              (i[M++] = (h + S) | 0),
              (i[M++] = (u + D) | 0),
              (i[M++] = (d + O) | 0),
              (i[M++] = (f + A) | 0),
              (i[M++] = (p + P) | 0),
              (i[M++] = (g + R) | 0),
              (i[M++] = (y + N) | 0),
              (i[M++] = (b + T) | 0),
              (i[M++] = (s + C) | 0),
              (i[M++] = (m + k) | 0),
              (i[M++] = (v + U) | 0),
              (i[M++] = (w + L) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        rx = new Uint8Array(16),
        rS = (e, t) => {
          e.update(t);
          let r = t.length % 16;
          r && e.update(rx.subarray(r));
        },
        rD = new Uint8Array(32);
      function rO(e, t, r, i, s) {
        let n = e(t, r, rD),
          o = r_.create(n);
        s && rS(o, s), rS(o, i);
        let a = new Uint8Array(16),
          c = rn(a);
        rc(c, 0, BigInt(s ? s.length : 0), !0), rc(c, 8, BigInt(i.length), !0), o.update(a);
        let l = o.digest();
        return rh(n, a), l;
      }
      let rA = ((e, t) => {
        function r(i, ...s) {
          if ((rt(i), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error('nonce / iv required');
            e.varSizeNonce ? rt(t) : rt(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && rt(s[1]);
          let o = t(i, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error('cipher output not supported');
                rt(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c) throw Error('cannot encrypt() twice with same key + nonce');
              return (c = !0), rt(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((rt(e), n && e.length < n))
                throw Error('invalid ciphertext length: smaller than tagLength=' + n);
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(r, e), r;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, r, i) => ({
          encrypt(s, n) {
            let o = s.length;
            (n = ra(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, r, a, a, 1);
            let c = rO(e, t, r, a, i);
            return n.set(c, o), rh(c), n;
          },
          decrypt(s, n) {
            n = ra(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              c = rO(e, t, r, o, i);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 0 === r;
              })(a, c)
            )
              throw Error('invalid tag');
            return n.set(s.subarray(0, -16)), e(t, r, n, n, 1), rh(c), n;
          },
        }))(rI)
      );
      class rP extends tE {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), to(e);
          let r = tw(t);
          if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let i = this.blockLen,
            s = new Uint8Array(i);
          s.set(r.length > i ? e.create().update(r).digest() : r);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return ta(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          ta(this),
            tn(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let { oHash: t, iHash: r, finished: i, destroyed: s, blockLen: n, outputLen: o } = this;
          return (
            (e.finished = i),
            (e.destroyed = s),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let rR = (e, t, r) => new rP(e, t).update(r).digest();
      rR.create = (e, t) => new rP(e, t);
      let rN = new Uint8Array([0]),
        rT = new Uint8Array(),
        rC = (e, t, r, i, s) =>
          (function (e, t, r, i = 32) {
            if ((to(e), ts(i), i > 255 * e.outputLen))
              throw Error('Length should be <= 255*HashLen');
            let s = Math.ceil(i / e.outputLen);
            void 0 === r && (r = rT);
            let n = new Uint8Array(s * e.outputLen),
              o = rR.create(e, t),
              a = o._cloneInto(),
              c = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (rN[0] = t + 1),
                a
                  .update(0 === t ? rT : c)
                  .update(r)
                  .update(rN)
                  .digestInto(c),
                n.set(c, e.outputLen * t),
                o._cloneInto(a);
            return o.destroy(), a.destroy(), c.fill(0), rN.fill(0), n.slice(0, i);
          })(
            e,
            (function (e, t, r) {
              return to(e), void 0 === r && (r = new Uint8Array(e.outputLen)), rR(e, tw(r), tw(t));
            })(e, t, r),
            i,
            s
          );
      class rk extends tE {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = ty(this.buffer));
        }
        update(e) {
          ta(this);
          let { view: t, buffer: r, blockLen: i } = this,
            s = (e = tw(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = ty(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          ta(this), tc(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > i - n && (this.process(r, 0), (n = 0));
          for (let e = n; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((r >> s) & n),
              a = Number(r & n),
              c = 4 * !!i,
              l = 4 * !i;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let o = ty(e),
            a = this.outputLen;
          if (a % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let c = a / 4,
            l = this.get();
          if (c > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: i, finished: s, destroyed: n, pos: o } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let rU = new Uint32Array([
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
        rL = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        rM = new Uint32Array(64);
      class rq extends rk {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | rL[0]),
            (this.B = 0 | rL[1]),
            (this.C = 0 | rL[2]),
            (this.D = 0 | rL[3]),
            (this.E = 0 | rL[4]),
            (this.F = 0 | rL[5]),
            (this.G = 0 | rL[6]),
            (this.H = 0 | rL[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: i, E: s, F: n, G: o, H: a } = this;
          return [e, t, r, i, s, n, o, a];
        }
        set(e, t, r, i, s, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | i),
            (this.E = 0 | s),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) rM[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = rM[e - 15],
              r = rM[e - 2],
              i = tb(t, 7) ^ tb(t, 18) ^ (t >>> 3),
              s = tb(r, 17) ^ tb(r, 19) ^ (r >>> 10);
            rM[e] = (s + rM[e - 7] + i + rM[e - 16]) | 0;
          }
          let { A: r, B: i, C: s, D: n, E: o, F: a, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var h, u, d, f;
            let t =
                (l +
                  (tb(o, 6) ^ tb(o, 11) ^ tb(o, 25)) +
                  (((h = o) & a) ^ (~h & c)) +
                  rU[e] +
                  rM[e]) |
                0,
              p =
                ((tb(r, 2) ^ tb(r, 13) ^ tb(r, 22)) +
                  (((u = r) & (d = i)) ^ (u & (f = s)) ^ (d & f))) |
                0;
            (l = c),
              (c = a),
              (a = o),
              (o = (n + t) | 0),
              (n = s),
              (s = i),
              (i = r),
              (r = (t + p) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, i, s, n, o, a, c, l);
        }
        roundClean() {
          rM.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let rj = t_(() => new rq()),
        rB = BigInt(0);
      function rz(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function r$(e) {
        if (!rz(e)) throw Error('Uint8Array expected');
      }
      let rF = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0')),
        rV = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function rK(e) {
        return e >= rV._0 && e <= rV._9
          ? e - rV._0
          : e >= rV.A && e <= rV.F
            ? e - (rV.A - 10)
            : e >= rV.a && e <= rV.f
              ? e - (rV.a - 10)
              : void 0;
      }
      function rH(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = rK(e.charCodeAt(s)),
            n = rK(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          i[t] = 16 * r + n;
        }
        return i;
      }
      function rJ(e) {
        return (
          r$(e),
          (function (e) {
            if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
            return '' === e ? rB : BigInt('0x' + e);
          })(
            (function (e) {
              r$(e);
              let t = '';
              for (let r = 0; r < e.length; r++) t += rF[e[r]];
              return t;
            })(Uint8Array.from(e).reverse())
          )
        );
      }
      function rW(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = rH(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (rz(t)) i = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = i.length;
        if ('number' == typeof r && s !== r)
          throw Error(e + ' of length ' + r + ' expected, got ' + s);
        return i;
      }
      let rG = (e) => 'bigint' == typeof e && rB <= e;
      function rY(e, t, r, i) {
        if (!(rG(t) && rG(r) && rG(i)) || !(r <= t) || !(t < i))
          throw Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      let rQ = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || rz(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        },
        rZ = BigInt(0),
        rX = BigInt(1);
      function r0(e, t) {
        let r = e % t;
        return r >= rZ ? r : t + r;
      }
      function r1(e, t, r) {
        let i = e;
        for (; t-- > rZ; ) (i *= i), (i %= r);
        return i;
      }
      BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let r2 = BigInt(0),
        r3 = BigInt(1),
        r8 = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        );
      BigInt(0);
      let r5 = BigInt(1),
        r6 = BigInt(2),
        r4 = BigInt(3),
        r9 = BigInt(5);
      BigInt(8);
      let r7 = (function (e) {
          let t =
              ((function (e, t, r = {}) {
                let i = (t, r, i) => {
                  let s = rQ[r];
                  if ('function' != typeof s) throw Error('invalid validator function');
                  let n = e[t];
                  if (!(i && void 0 === n) && !s(n, e))
                    throw Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + n);
                };
                for (let [e, r] of Object.entries(t)) i(e, r, !1);
                for (let [e, t] of Object.entries(r)) i(e, t, !0);
              })(
                e,
                { a: 'bigint' },
                {
                  montgomeryBits: 'isSafeInteger',
                  nByteLength: 'isSafeInteger',
                  adjustScalarBytes: 'function',
                  domain: 'function',
                  powPminus2: 'function',
                  Gu: 'bigint',
                }
              ),
              Object.freeze({ ...e })),
            { P: r } = t,
            i = (e) => r0(e, r),
            s = t.montgomeryBits,
            n = Math.ceil(s / 8),
            o = t.nByteLength,
            a = t.adjustScalarBytes || ((e) => e),
            c =
              t.powPminus2 ||
              ((e) =>
                (function (e, t, r) {
                  if (t < rZ) throw Error('invalid exponent, negatives unsupported');
                  if (r <= rZ) throw Error('invalid modulus');
                  if (r === rX) return rZ;
                  let i = rX;
                  for (; t > rZ; ) t & rX && (i = (i * e) % r), (e = (e * e) % r), (t >>= rX);
                  return i;
                })(e, r - BigInt(2), r));
          function l(e, t, r) {
            let s = i(e * (t - r));
            return [(t = i(t - s)), (r = i(r + s))];
          }
          let h = (t.a - BigInt(2)) / BigInt(4);
          function u(e) {
            var t;
            return rH((t = i(e)).toString(16).padStart(2 * n, '0')).reverse();
          }
          function d(e, t) {
            let d = (function (e, t) {
              rY('u', e, r2, r), rY('scalar', t, r2, r);
              let n = r3,
                o = r2,
                a = e,
                u = r3,
                d = r2,
                f;
              for (let r = BigInt(s - 1); r >= r2; r--) {
                let s = (t >> r) & r3;
                (d ^= s),
                  (n = (f = l(d, n, a))[0]),
                  (a = f[1]),
                  (o = (f = l(d, o, u))[0]),
                  (u = f[1]),
                  (d = s);
                let c = n + o,
                  p = i(c * c),
                  g = n - o,
                  y = i(g * g),
                  b = p - y,
                  m = a + u,
                  v = i((a - u) * c),
                  w = i(m * g),
                  E = v + w,
                  _ = v - w;
                (a = i(E * E)), (u = i(e * i(_ * _))), (n = i(p * y)), (o = i(b * (p + i(h * b))));
              }
              return (
                (n = (f = l(d, n, a))[0]),
                (a = f[1]),
                (o = (f = l(d, o, u))[0]),
                (u = f[1]),
                i(n * c(o))
              );
            })(
              (function (e) {
                let t = rW('u coordinate', e, n);
                return 32 === o && (t[31] &= 127), rJ(t);
              })(t),
              (function (e) {
                let t = rW('scalar', e),
                  r = t.length;
                if (r !== n && r !== o)
                  throw Error(
                    'invalid scalar, expected ' + ('' + n + ' or ') + o + ' bytes, got ' + r
                  );
                return rJ(a(t));
              })(e)
            );
            if (d === r2) throw Error('invalid private or public key received');
            return u(d);
          }
          let f = u(t.Gu);
          function p(e) {
            return d(e, f);
          }
          return {
            scalarMult: d,
            scalarMultBase: p,
            getSharedSecret: (e, t) => d(e, t),
            getPublicKey: (e) => p(e),
            utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
            GuBytes: f,
          };
        })({
          P: r8,
          a: BigInt(486662),
          montgomeryBits: 255,
          nByteLength: 32,
          Gu: BigInt(9),
          powPminus2: (e) => {
            let { pow_p_5_8: t, b2: r } = (function (e) {
              let t = BigInt(10),
                r = BigInt(20),
                i = BigInt(40),
                s = BigInt(80),
                n = (((e * e) % r8) * e) % r8,
                o = (r1(n, r6, r8) * n) % r8,
                a = (r1(o, r5, r8) * e) % r8,
                c = (r1(a, r9, r8) * a) % r8,
                l = (r1(c, t, r8) * c) % r8,
                h = (r1(l, r, r8) * l) % r8,
                u = (r1(h, i, r8) * h) % r8,
                d = (r1(u, s, r8) * u) % r8,
                f = (r1(d, s, r8) * u) % r8,
                p = (r1(f, t, r8) * c) % r8;
              return { pow_p_5_8: (r1(p, r6, r8) * e) % r8, b2: n };
            })(e);
            return r0(r1(t, r4, r8) * r, r8);
          },
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          randomBytes: tI,
        }),
        ie = 'base10',
        it = 'base16',
        ir = 'base64pad',
        ii = 'base64url',
        is = 'utf8';
      function io() {
        return eU(tI(32), it);
      }
      function ia(e) {
        return eU(rj(ek(e, it)), it);
      }
      function ic(e) {
        return eU(rj(ek(e, is)), it);
      }
      function il(e) {
        return Number(eU(e, ie));
      }
      function ih(e) {
        let { encoding: t = ir } = e;
        if (2 === il(e.type)) return eU(eA([e.type, e.sealed]), t);
        if (1 === il(e.type)) {
          if (typeof e.senderPublicKey > 'u')
            throw Error('Missing sender public key for type 1 envelope');
          return eU(eA([e.type, e.senderPublicKey, e.iv, e.sealed]), t);
        }
        return eU(eA([e.type, e.iv, e.sealed]), t);
      }
      function iu(e) {
        let { encoded: t, encoding: r = ir } = e,
          i = ek(t, r),
          s = i.slice(0, 1);
        if (1 === il(s)) {
          let e = i.slice(1, 33),
            t = i.slice(33, 45);
          return { type: s, sealed: i.slice(45), iv: t, senderPublicKey: e };
        }
        if (2 === il(s)) return { type: s, sealed: i.slice(1), iv: tI(12) };
        let n = i.slice(1, 13);
        return { type: s, sealed: i.slice(13), iv: n };
      }
      function id(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > 'u') throw Error('missing sender public key');
          if (typeof e?.receiverPublicKey > 'u') throw Error('missing receiver public key');
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function ip(e) {
        return (
          1 === e.type &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function ig(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function iy(e) {
        let t = eM.CG[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function ib(e) {
        var t;
        if (!e.includes('wc:')) {
          let t = ti(e);
          null != t && t.includes('wc:') && (e = t);
        }
        let r = (e = (e = e.includes('wc://') ? e.replace('wc://', '') : e).includes('wc:')
            ? e.replace('wc:', '')
            : e).indexOf(':'),
          i = -1 !== e.indexOf('?') ? e.indexOf('?') : void 0,
          s = e.substring(0, r),
          n = e.substring(r + 1, i).split('@'),
          o = new URLSearchParams('u' > typeof i ? e.substring(i) : ''),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        let c = 'string' == typeof a.methods ? a.methods.split(',') : void 0;
        return {
          protocol: s,
          topic: (t = n[0]).startsWith('//') ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = '-') {
            let r = {},
              i = 'relay' + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(i)) {
                  let s = t.replace(i, ''),
                    n = e[t];
                  r[s] = n;
                }
              }),
              r
            );
          })(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0,
        };
      }
      function im(e) {
        let t = new URLSearchParams(),
          r = (function (e, t = '-') {
            let r = {};
            return (
              Object.keys(e).forEach((i) => {
                e[i] && (r['relay' + t + i] = e[i]);
              }),
              r
            );
          })(e.relay);
        Object.keys(r)
          .sort()
          .forEach((e) => {
            t.set(e, r[e]);
          }),
          t.set('symKey', e.symKey),
          e.expiryTimestamp && t.set('expiryTimestamp', e.expiryTimestamp.toString()),
          e.methods && t.set('methods', e.methods.join(','));
        let i = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${i}`;
      }
      function iv(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      var iw = Object.defineProperty,
        iE = Object.defineProperties,
        i_ = Object.getOwnPropertyDescriptors,
        iI = Object.getOwnPropertySymbols,
        ix = Object.prototype.hasOwnProperty,
        iS = Object.prototype.propertyIsEnumerable,
        iD = (e, t, r) =>
          t in e
            ? iw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        iO = (e, t) => {
          for (var r in t || (t = {})) ix.call(t, r) && iD(e, r, t[r]);
          if (iI) for (var r of iI(t)) iS.call(t, r) && iD(e, r, t[r]);
          return e;
        },
        iA = (e, t) => iE(e, i_(t));
      function iP(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [r, i] = e.split(':');
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function iR(e) {
        return e.includes(':');
      }
      function iN(e, t) {
        let r = (function (e) {
          let t = {};
          return (
            e?.forEach((e) => {
              let [r, i] = e.split(':');
              t[r] || (t[r] = { accounts: [], chains: [], events: [] }),
                t[r].accounts.push(e),
                t[r].chains.push(`${r}:${i}`);
            }),
            t
          );
        })((t = t.map((e) => e.replace('did:pkh:', ''))));
        for (let [t, i] of Object.entries(r))
          i.methods ? (i.methods = e4(i.methods, e)) : (i.methods = e),
            (i.events = ['chainChanged', 'accountsChanged']);
        return r;
      }
      let iT = {
          INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
          INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
          INVALID_UPDATE_REQUEST: { message: 'Invalid update request.', code: 1003 },
          INVALID_EXTEND_REQUEST: { message: 'Invalid extend request.', code: 1004 },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: 'Invalid session settle request.',
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: 'Unauthorized method.', code: 3001 },
          UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: { message: 'Unauthorized update request.', code: 3003 },
          UNAUTHORIZED_EXTEND_REQUEST: { message: 'Unauthorized extend request.', code: 3004 },
          USER_REJECTED: { message: 'User rejected.', code: 5e3 },
          USER_REJECTED_CHAINS: { message: 'User rejected chains.', code: 5001 },
          USER_REJECTED_METHODS: { message: 'User rejected methods.', code: 5002 },
          USER_REJECTED_EVENTS: { message: 'User rejected events.', code: 5003 },
          UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
          UNSUPPORTED_METHODS: { message: 'Unsupported methods.', code: 5101 },
          UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
          UNSUPPORTED_ACCOUNTS: { message: 'Unsupported accounts.', code: 5103 },
          UNSUPPORTED_NAMESPACE_KEY: { message: 'Unsupported namespace key.', code: 5104 },
          USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
          SESSION_SETTLEMENT_FAILED: { message: 'Session settlement failed.', code: 7e3 },
          WC_METHOD_UNSUPPORTED: { message: 'Unsupported wc_ method.', code: 10001 },
        },
        iC = {
          NOT_INITIALIZED: { message: 'Not initialized.', code: 1 },
          NO_MATCHING_KEY: { message: 'No matching key.', code: 2 },
          RESTORE_WILL_OVERRIDE: { message: 'Restore will override.', code: 3 },
          RESUBSCRIBED: { message: 'Resubscribed.', code: 4 },
          MISSING_OR_INVALID: { message: 'Missing or invalid.', code: 5 },
          EXPIRED: { message: 'Expired.', code: 6 },
          UNKNOWN_TYPE: { message: 'Unknown type.', code: 7 },
          MISMATCHED_TOPIC: { message: 'Mismatched topic.', code: 8 },
          NON_CONFORMING_NAMESPACES: { message: 'Non conforming namespaces.', code: 9 },
        };
      function ik(e, t) {
        let { message: r, code: i } = iC[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function iU(e, t) {
        let { message: r, code: i } = iT[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function iL(e, t) {
        return !!Array.isArray(e) && (!('u' > typeof t) || !e.length || e.every(t));
      }
      function iM(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
      }
      function iq(e) {
        return typeof e > 'u';
      }
      function ij(e, t) {
        return !!(t && iq(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function iB(e, t) {
        return !!(t && iq(e)) || ('number' == typeof e && !isNaN(e));
      }
      function iz(e) {
        return !!(ij(e, !1) && e.includes(':')) && 2 === e.split(':').length;
      }
      function i$(e) {
        let t = !0;
        return iL(e) ? e.length && (t = e.every((e) => ij(e, !1))) : (t = !1), t;
      }
      function iF(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            var i;
            let s;
            if (r) return;
            let n =
              ((i = `${t}, namespace`),
              (s = null),
              i$(e?.methods)
                ? i$(e?.events) ||
                  (s = iU(
                    'UNSUPPORTED_EVENTS',
                    `${i}, events should be an array of strings or empty array for no events`
                  ))
                : (s = iU(
                    'UNSUPPORTED_METHODS',
                    `${i}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            n && (r = n);
          }),
          r
        );
      }
      function iV(e, t) {
        let r = null;
        if (e && iM(e)) {
          let i;
          let s = iF(e, t);
          s && (r = s);
          let n =
            ((i = null),
            Object.values(e).forEach((e) => {
              var r, s;
              let n;
              if (i) return;
              let o =
                ((r = e?.accounts),
                (s = `${t} namespace`),
                (n = null),
                iL(r)
                  ? r.forEach((e) => {
                      n ||
                        (function (e) {
                          if (ij(e, !1) && e.includes(':')) {
                            let t = e.split(':');
                            if (3 === t.length) {
                              let e = t[0] + ':' + t[1];
                              return !!t[2] && iz(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = iU(
                          'UNSUPPORTED_ACCOUNTS',
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = iU(
                      'UNSUPPORTED_ACCOUNTS',
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (i = o);
            }),
            i);
          n && (r = n);
        } else r = ik('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
        return r;
      }
      function iK(e) {
        return ij(e.protocol, !0);
      }
      function iH(e) {
        return 'u' > typeof e;
      }
      function iJ(e, t) {
        return !(
          !iz(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...iP(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function iW(e, t, r) {
        let i = null,
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(':')
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(':')) t[r] = e[r];
                else {
                  let i = iP(e[r].accounts);
                  i?.forEach((i) => {
                    t[i] = {
                      accounts: e[r].accounts.filter((e) => e.includes(`${i}:`)),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(s),
          a = Object.keys(n),
          c = iG(Object.keys(e)),
          l = iG(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (i = ik(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          eQ(o, a) ||
            (i = ik(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(':') || i) return;
            let s = iP(t[e].accounts);
            s.includes(e) ||
              (i = ik(
                'NON_CONFORMING_NAMESPACES',
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (eQ(s[e].methods, n[e].methods)
                ? eQ(s[e].events, n[e].events) ||
                  (i = ik(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = ik(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function iG(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
      function iY() {
        let e = eJ();
        return new Promise((t) => {
          switch (e) {
            case eF.browser:
              t(eH() && navigator?.onLine);
              break;
            case eF.reactNative:
              t(iQ());
              break;
            case eF.node:
            default:
              t(!0);
          }
        });
      }
      async function iQ() {
        if (eK() && 'u' > typeof r.g && null != r.g && r.g.NetInfo) {
          let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let iZ = {};
      class iX {
        static get(e) {
          return iZ[e];
        }
        static set(e, t) {
          iZ[e] = t;
        }
        static delete(e) {
          delete iZ[e];
        }
      }
      var i0 = r(84214),
        i1 = r(32034),
        i2 = r(60172),
        i3 = r(84719),
        i8 = r.n(i3);
      let i5 = 'core',
        i6 = `wc@2:${i5}:`,
        i4 = { logger: 'error' },
        i9 = { database: ':memory:' },
        i7 = 'client_ed25519_seed',
        se = h.ONE_DAY,
        st = h.SIX_HOURS,
        sr = 'wss://relay.walletconnect.org',
        si = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          publish: 'relayer_publish',
        },
        ss = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        sn = '2.18.1',
        so = { link_mode: 'link_mode', relay: 'relay' },
        sa = 'WALLETCONNECT_LINK_MODE_APPS',
        sc = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        sl = 1e3 * h.FIVE_SECONDS,
        sh = {
          wc_pairingDelete: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: h.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: h.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        su = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        sd = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        sf = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync',
        },
        sp = 'https://verify.walletconnect.org',
        sg = `${sp}/v3`,
        sy = ['https://verify.walletconnect.com', sp],
        sb = {
          pairing_started: 'pairing_started',
          pairing_uri_validation_success: 'pairing_uri_validation_success',
          pairing_uri_not_expired: 'pairing_uri_not_expired',
          store_new_pairing: 'store_new_pairing',
          subscribing_pairing_topic: 'subscribing_pairing_topic',
          subscribe_pairing_topic_success: 'subscribe_pairing_topic_success',
          existing_pairing: 'existing_pairing',
          pairing_not_expired: 'pairing_not_expired',
          emit_inactive_pairing: 'emit_inactive_pairing',
          emit_session_proposal: 'emit_session_proposal',
        },
        sm = {
          no_internet_connection: 'no_internet_connection',
          malformed_pairing_uri: 'malformed_pairing_uri',
          active_pairing_already_exists: 'active_pairing_already_exists',
          subscribe_pairing_topic_failure: 'subscribe_pairing_topic_failure',
          pairing_expired: 'pairing_expired',
          proposal_listener_not_found: 'proposal_listener_not_found',
        },
        sv = {
          session_approve_started: 'session_approve_started',
          session_namespaces_validation_success: 'session_namespaces_validation_success',
          subscribing_session_topic: 'subscribing_session_topic',
          subscribe_session_topic_success: 'subscribe_session_topic_success',
          publishing_session_approve: 'publishing_session_approve',
          session_approve_publish_success: 'session_approve_publish_success',
          store_session: 'store_session',
          publishing_session_settle: 'publishing_session_settle',
          session_settle_publish_success: 'session_settle_publish_success',
        },
        sw = {
          no_internet_connection: 'no_internet_connection',
          proposal_expired: 'proposal_expired',
          subscribe_session_topic_failure: 'subscribe_session_topic_failure',
          session_approve_publish_failure: 'session_approve_publish_failure',
          session_settle_publish_failure: 'session_settle_publish_failure',
          session_approve_namespace_validation_failure:
            'session_approve_namespace_validation_failure',
          proposal_not_found: 'proposal_not_found',
        },
        sE = {
          authenticated_session_approve_started: 'authenticated_session_approve_started',
          create_authenticated_session_topic: 'create_authenticated_session_topic',
          cacaos_verified: 'cacaos_verified',
          store_authenticated_session: 'store_authenticated_session',
          subscribing_authenticated_session_topic: 'subscribing_authenticated_session_topic',
          subscribe_authenticated_session_topic_success:
            'subscribe_authenticated_session_topic_success',
          publishing_authenticated_session_approve: 'publishing_authenticated_session_approve',
        },
        s_ = {
          no_internet_connection: 'no_internet_connection',
          invalid_cacao: 'invalid_cacao',
          subscribe_authenticated_session_topic_failure:
            'subscribe_authenticated_session_topic_failure',
          authenticated_session_approve_publish_failure:
            'authenticated_session_approve_publish_failure',
          authenticated_session_pending_request_not_found:
            'authenticated_session_pending_request_not_found',
        };
      var sI = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + ' is ambiguous');
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (var u = 0, d = n - 1; (0 !== h || u < s) && -1 !== d; d--, u++)
                (h += (a * o[d]) >>> 0), (o[d] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var f = n - s; f !== n && 0 === o[f]; ) f++;
              for (var p = new Uint8Array(i + (n - f)), g = i; f !== n; ) p[g++] = o[f++];
              return p;
            }
          }
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
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, r++;
            for (var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, f = o - 1; (0 !== u || d < i) && -1 !== f; f--, d++)
                (u += (256 * l[f]) >>> 0), (l[f] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var p = o - i; p !== o && 0 === l[p]; ) p++;
            for (var g = c.repeat(r); p < o; ++p) g += e.charAt(l[p]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let sx = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        sS = (e) => new TextEncoder().encode(e),
        sD = (e) => new TextDecoder().decode(e);
      class sO {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class sA {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return sR(this, e);
        }
      }
      class sP {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return sR(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let sR = (e, t) =>
        new sP({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class sN {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new sO(e, t, r)),
            (this.decoder = new sA(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let sT = ({ name: e, prefix: t, encode: r, decode: i }) => new sN(e, t, r, i),
        sC = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = sI(r, t);
          return sT({ prefix: e, name: t, encode: i, decode: (e) => sx(s(e)) });
        },
        sk = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n), (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        sU = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            s = (1 << r) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i)) for (; (n.length * r) & 7; ) n += '=';
          return n;
        },
        sL = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          sT({ prefix: t, name: e, encode: (e) => sU(e, i, r), decode: (t) => sk(t, i, r, e) });
      var sM = Object.freeze({
          __proto__: null,
          identity: sT({
            prefix: '\0',
            name: 'identity',
            encode: (e) => sD(e),
            decode: (e) => sS(e),
          }),
        }),
        sq = Object.freeze({
          __proto__: null,
          base2: sL({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        sj = Object.freeze({
          __proto__: null,
          base8: sL({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        sB = Object.freeze({
          __proto__: null,
          base10: sC({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        sz = Object.freeze({
          __proto__: null,
          base16: sL({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: sL({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let s$ = sL({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        sF = sL({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        sV = sL({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        sK = sL({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        sH = sL({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        sJ = sL({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        sW = sL({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var sG = Object.freeze({
          __proto__: null,
          base32: s$,
          base32upper: sF,
          base32pad: sV,
          base32padupper: sK,
          base32hex: sH,
          base32hexupper: sJ,
          base32hexpad: sW,
          base32hexpadupper: sL({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: sL({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        sY = Object.freeze({
          __proto__: null,
          base36: sC({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: sC({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        sQ = Object.freeze({
          __proto__: null,
          base58btc: sC({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: sC({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let sZ = sL({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        sX = sL({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var s0 = Object.freeze({
        __proto__: null,
        base64: sZ,
        base64pad: sX,
        base64url: sL({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: sL({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let s1 = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        s2 = s1.reduce((e, t, r) => ((e[r] = t), e), []),
        s3 = s1.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var s8 = Object.freeze({
        __proto__: null,
        base256emoji: sT({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += s2[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = s3[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function s5(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (s5.bytes = r - i + 1), t;
      }
      function s6(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((s6.bytes = 0), RangeError('Could not decode varint'));
          (r = e[n++]), (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)), (s += 7);
        } while (r >= 128);
        return (s6.bytes = n - t), i;
      }
      var s4 = {
        encode: s5,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
              ? 2
              : e < 2097152
                ? 3
                : e < 0x10000000
                  ? 4
                  : e < 0x800000000
                    ? 5
                    : e < 0x40000000000
                      ? 6
                      : e < 0x2000000000000
                        ? 7
                        : e < 0x100000000000000
                          ? 8
                          : e < 0x8000000000000000
                            ? 9
                            : 10;
        },
      };
      let s9 = (e, t, r = 0) => (s4.encode(e, t, r), t),
        s7 = (e) => s4.encodingLength(e),
        ne = (e, t) => {
          let r = t.byteLength,
            i = s7(e),
            s = i + s7(r),
            n = new Uint8Array(s + r);
          return s9(e, n, 0), s9(r, n, i), n.set(t, s), new nt(e, r, t, n);
        };
      class nt {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let nr = ({ name: e, code: t, encode: r }) => new ni(e, t, r);
      class ni {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? ne(this.code, t) : t.then((e) => ne(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let ns = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var nn = Object.freeze({
          __proto__: null,
          sha256: nr({ name: 'sha2-256', code: 18, encode: ns('SHA-256') }),
          sha512: nr({ name: 'sha2-512', code: 19, encode: ns('SHA-512') }),
        }),
        no = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: sx, digest: (e) => ne(0, sx(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let na = { ...sM, ...sq, ...sj, ...sB, ...sz, ...sG, ...sY, ...sQ, ...s0, ...s8 };
      function nc(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...nn, ...no });
      let nl = nc(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        nh = nc(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        nu = { utf8: nl, 'utf-8': nl, hex: na.base16, latin1: nh, ascii: nh, binary: nh, ...na };
      var nd = Object.defineProperty,
        nf = (e, t, r) =>
          t in e
            ? nd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        np = (e, t, r) => nf(e, 'symbol' != typeof t ? t + '' : t, r);
      class ng {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            np(this, 'keychain', new Map()),
            np(this, 'name', 'keychain'),
            np(this, 'version', '0.3'),
            np(this, 'initialized', !1),
            np(this, 'storagePrefix', i6),
            np(this, 'init', async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            np(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            np(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            np(this, 'get', (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = ik('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            np(this, 'del', async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, c.U5)(t, this.name));
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, eZ(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? eX(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var ny = Object.defineProperty,
        nb = (e, t, r) =>
          t in e
            ? ny(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nm = (e, t, r) => nb(e, 'symbol' != typeof t ? t + '' : t, r);
      class nv {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            nm(this, 'name', 'crypto'),
            nm(this, 'keychain'),
            nm(this, 'randomSessionIdentifier', io()),
            nm(this, 'initialized', !1),
            nm(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            nm(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            nm(this, 'getClientId', async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = d.TZ(e);
              return d.UF(t.publicKey);
            }),
            nm(this, 'generateKeyPair', () => {
              this.isInitialized();
              let e = (function () {
                let e = r7.utils.randomPrivateKey(),
                  t = r7.getPublicKey(e);
                return { privateKey: eU(e, it), publicKey: eU(t, it) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            nm(this, 'signJWT', async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                r = d.TZ(t),
                i = this.randomSessionIdentifier;
              return await d.FA(i, e, se, r);
            }),
            nm(this, 'generateSharedKey', (e, t, r) => {
              var i;
              this.isInitialized();
              let s =
                ((i = this.getPrivateKey(e)),
                eU(rC(rj, r7.getSharedSecret(ek(i, it), ek(t, it)), void 0, void 0, 32), it));
              return this.setSymKey(s, r);
            }),
            nm(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              let r = t || ia(e);
              return await this.keychain.set(r, e), r;
            }),
            nm(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            nm(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            nm(this, 'encode', async (e, t, r) => {
              this.isInitialized();
              let i = id(r),
                s = (0, u.h)(t);
              if (2 === i.type)
                return (function (e, t) {
                  let r = ek('2', ie),
                    i = tI(12);
                  return ih({ type: r, sealed: ek(e, is), iv: i, encoding: t });
                })(s, r?.encoding);
              if (ip(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (function (e) {
                var t;
                let r = ((t = 'u' > typeof e.type ? e.type : 0), ek(`${t}`, ie));
                if (1 === il(r) && typeof e.senderPublicKey > 'u')
                  throw Error('Missing sender public key for type 1 envelope');
                let i = 'u' > typeof e.senderPublicKey ? ek(e.senderPublicKey, it) : void 0,
                  s = 'u' > typeof e.iv ? ek(e.iv, it) : tI(12);
                return ih({
                  type: r,
                  sealed: rA(ek(e.symKey, it), s).encrypt(ek(e.message, is)),
                  iv: s,
                  senderPublicKey: i,
                  encoding: e.encoding,
                });
              })({ type: o, symKey: n, message: s, senderPublicKey: a, encoding: r?.encoding });
            }),
            nm(this, 'decode', async (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = iu({ encoded: e, encoding: t?.encoding });
                return id({
                  type: il(r.type),
                  senderPublicKey:
                    'u' > typeof r.senderPublicKey ? eU(r.senderPublicKey, it) : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (2 === i.type) {
                let e = (function (e, t) {
                  let { sealed: r } = iu({ encoded: e, encoding: t });
                  return eU(r, is);
                })(t, r?.encoding);
                return (0, u.j)(e);
              }
              if (ip(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                let i = this.getSymKey(e),
                  s = (function (e) {
                    let t = ek(e.symKey, it),
                      { sealed: r, iv: i } = iu(e),
                      s = rA(t, i).decrypt(r);
                    if (null === s) throw Error('Failed to decrypt');
                    return eU(s, is);
                  })({ symKey: i, encoded: t, encoding: r?.encoding });
                return (0, u.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            nm(this, 'getPayloadType', (e, t = ir) => il(iu({ encoded: e, encoding: t }).type)),
            nm(this, 'getPayloadSenderPublicKey', (e, t = ir) => {
              let r = iu({ encoded: e, encoding: t });
              return r.senderPublicKey ? eU(r.senderPublicKey, it) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, c.U5)(t, this.name)),
            (this.keychain = r || new ng(this.core, this.logger));
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = '';
          try {
            e = this.keychain.get(i7);
          } catch {
            (e = io()), await this.keychain.set(i7, e);
          }
          return (function (e, t = 'utf8') {
            let r = nu[t];
            if (!r) throw Error(`Unsupported encoding "${t}"`);
            return ('utf8' === t || 'utf-8' === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, 'utf8')
              : r.decoder.decode(`${r.prefix}${e}`);
          })(e, 'base16');
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nw = Object.defineProperty,
        nE = (e, t, r) =>
          t in e
            ? nw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n_ = (e, t, r) => nE(e, 'symbol' != typeof t ? t + '' : t, r);
      class nI extends l.dQ {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            n_(this, 'messages', new Map()),
            n_(this, 'name', 'messages'),
            n_(this, 'version', '0.3'),
            n_(this, 'initialized', !1),
            n_(this, 'storagePrefix', i6),
            n_(this, 'init', async () => {
              if (!this.initialized) {
                this.logger.trace('Initialized');
                try {
                  let e = await this.getRelayerMessages();
                  'u' > typeof e && (this.messages = e),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                      type: 'method',
                      method: 'restore',
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            n_(this, 'set', async (e, t) => {
              this.isInitialized();
              let r = ic(t),
                i = this.messages.get(e);
              return (
                typeof i > 'u' && (i = {}),
                'u' > typeof i[r] || ((i[r] = t), this.messages.set(e, i), await this.persist()),
                r
              );
            }),
            n_(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            n_(this, 'has', (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[ic(t)])),
            n_(this, 'del', async (e) => {
              this.isInitialized(), this.messages.delete(e), await this.persist();
            }),
            (this.logger = (0, c.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, eZ(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? eX(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nx = Object.defineProperty,
        nS = Object.defineProperties,
        nD = Object.getOwnPropertyDescriptors,
        nO = Object.getOwnPropertySymbols,
        nA = Object.prototype.hasOwnProperty,
        nP = Object.prototype.propertyIsEnumerable,
        nR = (e, t, r) =>
          t in e
            ? nx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nN = (e, t) => {
          for (var r in t || (t = {})) nA.call(t, r) && nR(e, r, t[r]);
          if (nO) for (var r of nO(t)) nP.call(t, r) && nR(e, r, t[r]);
          return e;
        },
        nT = (e, t) => nS(e, nD(t)),
        nC = (e, t, r) => nR(e, 'symbol' != typeof t ? t + '' : t, r);
      class nk extends l.qE {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            nC(this, 'events', new s.EventEmitter()),
            nC(this, 'name', 'publisher'),
            nC(this, 'queue', new Map()),
            nC(this, 'publishTimeout', (0, h.toMiliseconds)(h.ONE_MINUTE)),
            nC(this, 'initialPublishTimeout', (0, h.toMiliseconds)(15 * h.ONE_SECOND)),
            nC(this, 'needsTransportRestart', !1),
            nC(this, 'publish', async (e, t, r) => {
              var i;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: r },
                });
              let s = r?.ttl || st,
                n = ig(r),
                o = r?.prompt || !1,
                a = r?.tag || 0,
                c = r?.id || (0, i1.getBigIntRpcId)().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation: r?.attestation,
                    tvf: r?.tvf,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                let i = new Promise(async (i) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(si.publish, n),
                      i(l));
                  };
                  this.relayer.events.on(si.publish, n);
                  let h = e1(
                    new Promise((i, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation: r?.attestation,
                        tvf: r?.tvf,
                      })
                        .then(i)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await h, this.events.removeListener(si.publish, n);
                  } catch (e) {
                    this.queue.set(c, nT(nN({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: c, topic: e, message: t, opts: r },
                }),
                  await e1(i, this.publishTimeout, h);
              } catch (e) {
                if (
                  (this.logger.debug('Failed to Publish Payload'),
                  this.logger.error(e),
                  null != (i = r?.internal) && i.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(c);
              }
            }),
            nC(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            nC(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            nC(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            nC(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, c.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, r, i, s;
          let {
              topic: n,
              message: o,
              ttl: a = st,
              prompt: c,
              tag: l,
              id: h,
              attestation: u,
              tvf: d,
            } = e,
            f = {
              method: iy(ig().protocol).publish,
              params: nN({ topic: n, message: o, ttl: a, prompt: c, tag: l, attestation: u }, d),
              id: h,
            };
          iq(null == (t = f.params) ? void 0 : t.prompt) &&
            (null == (r = f.params) || delete r.prompt),
            iq(null == (i = f.params) ? void 0 : i.tag) && (null == (s = f.params) || delete s.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: f });
          let p = await this.relayer.request(f);
          return (
            this.relayer.events.emit(si.publish, e),
            this.logger.debug('Successfully Published Payload'),
            p
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let r = e.attempt + 1;
            this.queue.set(t, nT(nN({}, e), { attempt: r }));
            let { topic: i, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish(
                nT(nN({}, e), {
                  topic: i,
                  message: s,
                  ttl: n.ttl,
                  prompt: n.prompt,
                  tag: n.tag,
                  id: n.id,
                  attestation: o,
                  tvf: n.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(o.li.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1), this.relayer.events.emit(si.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(si.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var nU = Object.defineProperty,
        nL = (e, t, r) =>
          t in e
            ? nU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nM = (e, t, r) => nL(e, 'symbol' != typeof t ? t + '' : t, r);
      class nq {
        constructor() {
          nM(this, 'map', new Map()),
            nM(this, 'set', (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            nM(this, 'get', (e) => this.map.get(e) || []),
            nM(this, 'exists', (e, t) => this.get(e).includes(t)),
            nM(this, 'delete', (e, t) => {
              if (typeof t > 'u') {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let r = this.get(e);
              if (!this.exists(e, t)) return;
              let i = r.filter((e) => e !== t);
              if (!i.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, i);
            }),
            nM(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var nj = Object.defineProperty,
        nB = Object.defineProperties,
        nz = Object.getOwnPropertyDescriptors,
        n$ = Object.getOwnPropertySymbols,
        nF = Object.prototype.hasOwnProperty,
        nV = Object.prototype.propertyIsEnumerable,
        nK = (e, t, r) =>
          t in e
            ? nj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nH = (e, t) => {
          for (var r in t || (t = {})) nF.call(t, r) && nK(e, r, t[r]);
          if (n$) for (var r of n$(t)) nV.call(t, r) && nK(e, r, t[r]);
          return e;
        },
        nJ = (e, t) => nB(e, nz(t)),
        nW = (e, t, r) => nK(e, 'symbol' != typeof t ? t + '' : t, r);
      class nG extends l.mF {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            nW(this, 'subscriptions', new Map()),
            nW(this, 'topicMap', new nq()),
            nW(this, 'events', new s.EventEmitter()),
            nW(this, 'name', 'subscription'),
            nW(this, 'version', '0.3'),
            nW(this, 'pending', new Map()),
            nW(this, 'cached', []),
            nW(this, 'initialized', !1),
            nW(this, 'pendingSubscriptionWatchLabel', 'pending_sub_watch_label'),
            nW(this, 'pollingInterval', 20),
            nW(this, 'storagePrefix', i6),
            nW(this, 'subscribeTimeout', (0, h.toMiliseconds)(h.ONE_MINUTE)),
            nW(this, 'initialSubscribeTimeout', (0, h.toMiliseconds)(15 * h.ONE_SECOND)),
            nW(this, 'clientId'),
            nW(this, 'batchSubscribeTopicsLimit', 500),
            nW(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            nW(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                let r = ig(t),
                  i = { topic: e, relay: r, transportType: t?.transportType };
                this.pending.set(e, i);
                let s = await this.rpcSubscribe(e, r, t);
                return (
                  'string' == typeof s &&
                    (this.onSubscribe(s, i),
                    this.logger.debug('Successfully Subscribed Topic'),
                    this.logger.trace({
                      type: 'method',
                      method: 'subscribe',
                      params: { topic: e, opts: t },
                    })),
                  s
                );
              } catch (e) {
                throw (this.logger.debug('Failed to Subscribe Topic'), this.logger.error(e), e);
              }
            }),
            nW(this, 'unsubscribe', async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                'u' > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            nW(this, 'isSubscribed', async (e) => {
              if (this.topics.includes(e)) return !0;
              let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((r, i) => {
                let s = new h.Watch();
                s.start(t);
                let n = setInterval(() => {
                  ((!this.pending.has(e) && this.topics.includes(e)) ||
                    this.cached.some((t) => t.topic === e)) &&
                    (clearInterval(n), s.stop(t), r(!0)),
                    s.elapsed(t) >= sl &&
                      (clearInterval(n), s.stop(t), i(Error('Subscription resolution timeout')));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            nW(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            nW(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            nW(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            nW(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            nW(this, 'start', async () => {
              await this.onConnect();
            }),
            nW(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            nW(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            nW(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            nW(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(o.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(sc.created, async (e) => {
                  let t = sc.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(sc.deleted, async (e) => {
                  let t = sc.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, c.U5)(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            '//' +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let r = this.topicMap.get(e);
          await Promise.all(r.map(async (r) => await this.unsubscribeById(e, r, t)));
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug('Unsubscribing Topic'),
            this.logger.trace({
              type: 'method',
              method: 'unsubscribe',
              params: { topic: e, id: t, opts: r },
            });
          try {
            let i = ig(r);
            await this.rpcUnsubscribe(e, t, i);
            let s = iU('USER_DISCONNECTED', `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug('Successfully Unsubscribed Topic'),
              this.logger.trace({
                type: 'method',
                method: 'unsubscribe',
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(e), e);
          }
        }
        async rpcSubscribe(e, t, r) {
          var i;
          r?.transportType === so.relay && (await this.restartToComplete());
          let s = { method: iy(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
          let n = null == (i = r?.internal) ? void 0 : i.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (r?.transportType === so.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  },
                  (0, h.toMiliseconds)(h.ONE_SECOND)
                ),
                t
              );
            let i = new Promise(async (t) => {
                let r = (i) => {
                  i.topic === e && (this.events.removeListener(sc.created, r), t(i.id));
                };
                this.events.on(sc.created, r);
                try {
                  let i = await e1(
                    new Promise((e, t) => {
                      this.relayer
                        .request(s)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(sc.created, r), t(i);
                } catch {}
              }),
              o = await e1(
                i,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!o && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return o ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(si.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: iy(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: t });
          try {
            await await e1(
              new Promise((e) => {
                this.relayer
                  .request(t)
                  .catch((e) => this.logger.warn(e))
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchSubscribe failed, please try again'
            );
          } catch {
            this.relayer.events.emit(si.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let r = {
            method: iy(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          try {
            t = await await e1(
              new Promise((e, t) => {
                this.relayer
                  .request(r)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchFetchMessages failed, please try again'
            );
          } catch {
            this.relayer.events.emit(si.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, r) {
          let i = { method: iy(r.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, nJ(nH({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, nH({}, e)), this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug('Setting subscription'),
            this.logger.trace({
              type: 'method',
              method: 'setSubscription',
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, nH({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(sc.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = ik('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug('Deleting subscription'),
            this.logger.trace({ type: 'method', method: 'deleteSubscription', id: e, reason: t });
          let r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(sc.deleted, nJ(nH({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(sc.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < t; r++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(sc.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = ik('RESTORE_WILL_OVERRIDE', this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', subscriptions: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) => nJ(nH({}, e), { id: await this.getSubscriptionId(e.topic) }))
              )
            ));
        }
        async batchFetchMessages(e) {
          var t;
          if (!e.length) return;
          this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
          let r = await this.rpcBatchFetchMessages(e);
          r &&
            r.messages &&
            (await ((t = (0, h.toMiliseconds)(h.ONE_SECOND)), new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(r.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.relayer.connected || this.relayer.connecting || (await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return ic(e + (await this.getClientId()));
        }
      }
      var nY = Object.defineProperty,
        nQ = Object.getOwnPropertySymbols,
        nZ = Object.prototype.hasOwnProperty,
        nX = Object.prototype.propertyIsEnumerable,
        n0 = (e, t, r) =>
          t in e
            ? nY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n1 = (e, t) => {
          for (var r in t || (t = {})) nZ.call(t, r) && n0(e, r, t[r]);
          if (nQ) for (var r of nQ(t)) nX.call(t, r) && n0(e, r, t[r]);
          return e;
        },
        n2 = (e, t, r) => n0(e, 'symbol' != typeof t ? t + '' : t, r);
      class n3 extends l.m5 {
        constructor(e) {
          super(e),
            n2(this, 'protocol', 'wc'),
            n2(this, 'version', 2),
            n2(this, 'core'),
            n2(this, 'logger'),
            n2(this, 'events', new s.EventEmitter()),
            n2(this, 'provider'),
            n2(this, 'messages'),
            n2(this, 'subscriber'),
            n2(this, 'publisher'),
            n2(this, 'name', 'relayer'),
            n2(this, 'transportExplicitlyClosed', !1),
            n2(this, 'initialized', !1),
            n2(this, 'connectionAttemptInProgress', !1),
            n2(this, 'relayUrl'),
            n2(this, 'projectId'),
            n2(this, 'packageName'),
            n2(this, 'bundleId'),
            n2(this, 'hasExperiencedNetworkDisruption', !1),
            n2(this, 'pingTimeout'),
            n2(this, 'heartBeatTimeout', (0, h.toMiliseconds)(h.THIRTY_SECONDS + h.FIVE_SECONDS)),
            n2(this, 'reconnectTimeout'),
            n2(this, 'connectPromise'),
            n2(this, 'requestsInFlight', []),
            n2(this, 'connectTimeout', (0, h.toMiliseconds)(15 * h.ONE_SECOND)),
            n2(this, 'request', async (e) => {
              var t, r;
              this.logger.debug('Publishing Request Payload');
              let i = e.id || (0, i1.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  { id: i, method: e.method, topic: null == (t = e.params) ? void 0 : t.topic },
                  'relayer.request - publishing...'
                );
                let s = `${i}:${(null == (r = e.params) ? void 0 : r.tag) || ''}`;
                this.requestsInFlight.push(s);
                let n = await this.provider.request(e);
                return (this.requestsInFlight = this.requestsInFlight.filter((e) => e !== s)), n;
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${i}`), e);
              }
            }),
            n2(this, 'resetPingTimeout', () => {
              if (eV())
                try {
                  clearTimeout(this.pingTimeout),
                    (this.pingTimeout = setTimeout(() => {
                      var e, t, r;
                      this.logger.debug({}, 'pingTimeout: Connection stalled, terminating...'),
                        null ==
                          (r =
                            null == (t = null == (e = this.provider) ? void 0 : e.connection)
                              ? void 0
                              : t.socket) || r.terminate();
                    }, this.heartBeatTimeout));
                } catch (e) {
                  this.logger.warn(e, e?.message);
                }
            }),
            n2(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            n2(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \uD83D\uDEDC'),
                this.startPingTimeout(),
                this.events.emit(si.connect);
            }),
            n2(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            n2(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(e, `Fatal socket error: ${e?.message}`),
                this.events.emit(si.error, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            n2(this, 'registerProviderListeners', () => {
              this.provider.on(ss.payload, this.onPayloadHandler),
                this.provider.on(ss.connect, this.onConnectHandler),
                this.provider.on(ss.disconnect, this.onDisconnectHandler),
                this.provider.on(ss.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              'u' > typeof e.logger && 'string' != typeof e.logger
                ? (0, c.U5)(e.logger, this.name)
                : (0, c.h6)((0, c.iP)({ level: e.logger || 'error' }))),
            (this.messages = new nI(this.logger, e.core)),
            (this.subscriber = new nG(this, this.logger)),
            (this.publisher = new nk(this, this.logger)),
            (this.relayUrl = e?.relayUrl || sr),
            (this.projectId = e.projectId),
            eK() &&
            'u' > typeof r.g &&
            'u' > typeof (null == r.g ? void 0 : r.g.Platform) &&
            (null == r.g ? void 0 : r.g.Platform.OS) === 'android'
              ? (this.packageName = eW())
              : eK() &&
                'u' > typeof r.g &&
                'u' > typeof (null == r.g ? void 0 : r.g.Platform) &&
                (null == r.g ? void 0 : r.g.Platform.OS) === 'ios' &&
                (this.bundleId = eW()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace('Initialized'),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.cached.length > 0)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get connected() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : r.readyState) === 1
          );
        }
        get connecting() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : r.readyState) === 0
          );
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
              transportType: so.relay,
            });
        }
        async subscribe(e, t) {
          var r, i, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== 'relay') ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish) > 'u' ||
              (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish),
            o = (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) || '',
            a,
            c = (t) => {
              t.topic === e && (this.subscriber.off(sc.created, c), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(sc.created, c);
              }),
              new Promise(async (r, i) => {
                (o =
                  (await this.subscriber
                    .subscribe(e, n1({ internal: { throwOnFailedPublish: n } }, t))
                    .catch((e) => {
                      n && i(e);
                    })) || o),
                  r();
              }),
            ]),
            o
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected)
            ? await e1(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(() =>
                this.onProviderDisconnect()
              )
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (
            (this.connectPromise
              ? (this.logger.debug({}, 'Waiting for existing connection attempt to resolve...'),
                await this.connectPromise,
                this.logger.debug({}, 'Existing connection attempt resolved'))
              : ((this.connectPromise = new Promise(async (t, r) => {
                  await this.connect(e)
                    .then(t)
                    .catch(r)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, 'Restarting transport...'),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await iY()))
            throw Error(
              'No internet connection detected. Please restart your network and try again.'
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0) {
            this.logger.trace('Batch message events is empty. Ignoring...');
            return;
          }
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.debug(`Batch of ${t.length} message events sorted`), t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(e, 'Error while processing batch message event: ' + e?.message);
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: r } = e;
          if (!t.sessionExists) {
            let e = e8(h.FIVE_MINUTES);
            await this.core.pairing.pairings.set(r, {
              topic: r,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(si.message, e), await this.recordMessageEvent(e);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e && e !== this.relayUrl && ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  let r = () => {
                    t(Error('Connection interrupted while trying to subscribe'));
                  };
                  this.provider.once(ss.disconnect, r),
                    await e1(
                      new Promise((e, t) => {
                        this.provider.connect().then(e).catch(t);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((e) => {
                        t(e);
                      })
                      .finally(() => {
                        this.provider.off(ss.disconnect, r),
                          clearTimeout(this.reconnectTimeout),
                          (this.reconnectTimeout = void 0);
                      }),
                    await new Promise(async (e, t) => {
                      let r = () => {
                        t(Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(ss.disconnect, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(ss.disconnect, r);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (e) {
              await this.subscriber.stop(),
                this.logger.warn({}, e.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
              break;
            }
            await new Promise((e) => setTimeout(e, (0, h.toMiliseconds)(+t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, r, i, s;
          if (eV())
            try {
              null != (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null == (i = null == (r = this.provider) ? void 0 : r.connection)
                      ? void 0
                      : i.socket) ||
                  s.on('ping', () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new i0.F(
            new i2.A(
              (function ({
                protocol: e,
                version: t,
                relayUrl: r,
                sdkVersion: i,
                auth: s,
                projectId: n,
                useOnCloseEvent: o,
                bundleId: a,
                packageName: c,
              }) {
                let l = r.split('?'),
                  h = eY(e, t, i),
                  u = (function (e, t) {
                    let r = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let i = t[e];
                        void 0 !== i && r.set(e, i);
                      }
                    return r.toString();
                  })(l[1] || '', {
                    auth: s,
                    ua: h,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: c || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + '?' + u;
              })({
                sdkVersion: sn,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
          if (!(await this.subscriber.isSubscribed(t)))
            return this.logger.warn(`Ignoring message for non-subscribed topic ${t}`), !0;
          let i = this.messages.has(t, r);
          return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug('Incoming Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'incoming', payload: e }),
            (0, i1.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: s, attestation: n } = t.data,
              o = { topic: r, message: i, publishedAt: s, transportType: so.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(n1({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else (0, i1.isJsonRpcResponse)(e) && this.events.emit(si.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(si.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = (0, i1.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(ss.payload, this.onPayloadHandler),
            this.provider.off(ss.connect, this.onConnectHandler),
            this.provider.off(ss.disconnect, this.onDisconnectHandler),
            this.provider.off(ss.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await iY();
          !(function (e) {
            var t, i;
            switch (eJ()) {
              case eF.browser:
                (t = e),
                  !eK() &&
                    eH() &&
                    (window.addEventListener('online', () => t(!0)),
                    window.addEventListener('offline', () => t(!1)));
                break;
              case eF.reactNative:
                (i = e),
                  eK() &&
                    'u' > typeof r.g &&
                    null != r.g &&
                    r.g.NetInfo &&
                    r.g?.NetInfo.addEventListener((e) => i(e?.isConnected));
              case eF.node:
            }
          })(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.transportOpen().catch((e) => this.logger.error(e, e?.message))
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          await this.subscriber.stop(),
            clearTimeout(this.pingTimeout),
            this.events.emit(si.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                this.connectPromise ||
                (this.reconnectTimeout = setTimeout(
                  async () => {
                    clearTimeout(this.reconnectTimeout),
                      await this.transportOpen().catch((e) => this.logger.error(e, e?.message));
                  },
                  (0, h.toMiliseconds)(0.1)
                )));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(), this.connected || (await this.transportOpen());
        }
      }
      var n8 = Object.defineProperty,
        n5 = Object.getOwnPropertySymbols,
        n6 = Object.prototype.hasOwnProperty,
        n4 = Object.prototype.propertyIsEnumerable,
        n9 = (e, t, r) =>
          t in e
            ? n8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n7 = (e, t) => {
          for (var r in t || (t = {})) n6.call(t, r) && n9(e, r, t[r]);
          if (n5) for (var r of n5(t)) n4.call(t, r) && n9(e, r, t[r]);
          return e;
        },
        oe = (e, t, r) => n9(e, 'symbol' != typeof t ? t + '' : t, r);
      class ot extends l.pi {
        constructor(e, t, r, i = i6, s) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            oe(this, 'map', new Map()),
            oe(this, 'version', '0.3'),
            oe(this, 'cached', []),
            oe(this, 'initialized', !1),
            oe(this, 'getKey'),
            oe(this, 'storagePrefix', i6),
            oe(this, 'recentlyDeleted', []),
            oe(this, 'recentlyDeletedLimit', 200),
            oe(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !iq(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                          var t;
                          return null == (t = e?.proposer) ? void 0 : t.publicKey;
                        })(e)
                      ? this.map.set(e.id, e)
                      : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            oe(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            oe(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            oe(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) => Object.keys(e).every((r) => i8()(t[r], e[r])))
                  : this.values
              )
            ),
            oe(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let r = n7(n7({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            oe(this, 'delete', async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug('Deleting value'),
                  this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, c.U5)(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = s);
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = ik(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = ik('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > 'u' || !e.length) return;
            if (this.map.size) {
              let { message: e } = ik('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', value: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var or = Object.defineProperty,
        oi = (e, t, r) =>
          t in e
            ? or(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        os = (e, t, r) => oi(e, 'symbol' != typeof t ? t + '' : t, r);
      class on {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            os(this, 'name', 'pairing'),
            os(this, 'version', '0.3'),
            os(this, 'events', new (n())()),
            os(this, 'pairings'),
            os(this, 'initialized', !1),
            os(this, 'storagePrefix', i6),
            os(this, 'ignoredPayloadTypes', [1]),
            os(this, 'registeredMethods', []),
            os(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            os(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            os(this, 'create', async (e) => {
              this.isInitialized();
              let t = io(),
                r = await this.core.crypto.setSymKey(t),
                i = e8(h.FIVE_MINUTES),
                s = { protocol: 'irn' },
                n = { topic: r, expiry: i, relay: s, active: !1, methods: e?.methods },
                o = im({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: i,
                  methods: e?.methods,
                });
              return (
                this.events.emit(su.create, n),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, n),
                await this.core.relayer.subscribe(r, { transportType: e?.transportType }),
                { topic: r, uri: o }
              );
            }),
            os(this, 'pair', async (e) => {
              let t;
              this.isInitialized();
              let r = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [sb.pairing_started] },
              });
              this.isValidPair(e, r);
              let { topic: i, symKey: s, relay: n, expiryTimestamp: o, methods: a } = ib(e.uri);
              if (
                ((r.props.properties.topic = i),
                r.addTrace(sb.pairing_uri_validation_success),
                r.addTrace(sb.pairing_uri_not_expired),
                this.pairings.keys.includes(i))
              ) {
                if (((t = this.pairings.get(i)), r.addTrace(sb.existing_pairing), t.active))
                  throw (
                    (r.setError(sm.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${i}. Please try again with a new connection URI.`
                    ))
                  );
                r.addTrace(sb.pairing_not_expired);
              }
              let c = o || e8(h.FIVE_MINUTES),
                l = { topic: i, relay: n, expiry: c, active: !1, methods: a };
              this.core.expirer.set(i, c),
                await this.pairings.set(i, l),
                r.addTrace(sb.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: i })),
                this.events.emit(su.create, l),
                r.addTrace(sb.emit_inactive_pairing),
                this.core.crypto.keychain.has(i) || (await this.core.crypto.setSymKey(s, i)),
                r.addTrace(sb.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                r.setError(sm.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(i, { relay: n });
              } catch (e) {
                throw (r.setError(sm.subscribe_pairing_topic_failure), e);
              }
              return r.addTrace(sb.subscribe_pairing_topic_success), l;
            }),
            os(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = e8(h.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            os(this, 'ping', async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  'ping() is deprecated and will be removed in the next major release.'
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  { done: r, resolve: i, reject: s } = e0();
                this.events.once(e6('pairing_ping', e), ({ error: e }) => {
                  e ? s(e) : i();
                }),
                  await r();
              }
            }),
            os(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            os(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            os(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            os(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', iU('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            os(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: r, expiry: i, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return im({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: r,
                expiryTimestamp: i,
                methods: s,
              });
            }),
            os(this, 'sendRequest', async (e, t, r) => {
              let i = (0, i1.formatJsonRpcRequest)(t, r),
                s = await this.core.crypto.encode(e, i),
                n = sh[t].req;
              return this.core.history.set(e, i), this.core.relayer.publish(e, s, n), i.id;
            }),
            os(this, 'sendResult', async (e, t, r) => {
              let i = (0, i1.formatJsonRpcResult)(e, r),
                s = await this.core.crypto.encode(t, i),
                n = sh[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n), await this.core.history.resolve(i);
            }),
            os(this, 'sendError', async (e, t, r) => {
              let i = (0, i1.formatJsonRpcError)(e, r),
                s = await this.core.crypto.encode(t, i),
                n = await this.core.history.get(t, e),
                o = sh[n.request.method] ? sh[n.request.method].res : sh.unregistered_method.res;
              await this.core.relayer.publish(t, s, o), await this.core.history.resolve(i);
            }),
            os(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, iU('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            os(this, 'cleanup', async () => {
              let e = this.pairings.getAll().filter((e) => e5(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            os(this, 'onRelayEventRequest', (e) => {
              let { topic: t, payload: r } = e;
              switch (r.method) {
                case 'wc_pairingPing':
                  return this.onPairingPingRequest(t, r);
                case 'wc_pairingDelete':
                  return this.onPairingDeleteRequest(t, r);
                default:
                  return this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            os(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return 'wc_pairingPing' === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            os(this, 'onPairingPingRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(su.ping, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            os(this, 'onPairingPingResponse', (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                (0, i1.isJsonRpcResult)(t)
                  ? this.events.emit(e6('pairing_ping', r), {})
                  : (0, i1.isJsonRpcError)(t) &&
                    this.events.emit(e6('pairing_ping', r), { error: t.error });
              }, 500);
            }),
            os(this, 'onPairingDeleteRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(su.delete, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            os(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = iU('WC_METHOD_UNSUPPORTED', i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            os(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(iU('WC_METHOD_UNSUPPORTED', e));
            }),
            os(this, 'isValidPair', (e, t) => {
              var r;
              if (!iH(e)) {
                let { message: r } = ik('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(sm.malformed_pairing_uri), Error(r));
              }
              if (
                !(function (e) {
                  function t(e) {
                    try {
                      return 'u' > typeof new URL(e);
                    } catch {
                      return !1;
                    }
                  }
                  try {
                    if (ij(e, !1)) {
                      if (t(e)) return !0;
                      let r = ti(e);
                      return t(r);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: r } = ik('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(sm.malformed_pairing_uri), Error(r));
              }
              let i = ib(e?.uri);
              if (!(null != (r = i?.relay) && r.protocol)) {
                let { message: e } = ik('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
                throw (t.setError(sm.malformed_pairing_uri), Error(e));
              }
              if (!(null != i && i.symKey)) {
                let { message: e } = ik('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(sm.malformed_pairing_uri), Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, h.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                t.setError(sm.pairing_expired);
                let { message: e } = ik(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw Error(e);
              }
            }),
            os(this, 'isValidPing', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            os(this, 'isValidDisconnect', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            os(this, 'isValidPairingTopic', async (e) => {
              if (!ij(e, !1)) {
                let { message: t } = ik(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = ik('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
                throw Error(t);
              }
              if (e5(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = ik('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, c.U5)(t, this.name)),
            (this.pairings = new ot(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(si.message, async (e) => {
            let { topic: t, message: r, transportType: i } = e;
            if (
              !this.pairings.keys.includes(t) ||
              i === so.link_mode ||
              this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))
            )
              return;
            let s = await this.core.crypto.decode(t, r);
            try {
              (0, i1.isJsonRpcRequest)(s)
                ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s }))
                : (0, i1.isJsonRpcResponse)(s) &&
                  (await this.core.history.resolve(s),
                  await this.onRelayEventResponse({ topic: t, payload: s }),
                  this.core.history.delete(t, s.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(sf.expired, async (e) => {
            let { topic: t } = e3(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(su.expire, { topic: t }));
          });
        }
      }
      var oo = Object.defineProperty,
        oa = (e, t, r) =>
          t in e
            ? oo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oc = (e, t, r) => oa(e, 'symbol' != typeof t ? t + '' : t, r);
      class ol extends l.lZ {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            oc(this, 'records', new Map()),
            oc(this, 'events', new s.EventEmitter()),
            oc(this, 'name', 'history'),
            oc(this, 'version', '0.3'),
            oc(this, 'cached', []),
            oc(this, 'initialized', !1),
            oc(this, 'storagePrefix', i6),
            oc(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            oc(this, 'set', (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Setting JSON-RPC request history record'),
                this.logger.trace({
                  type: 'method',
                  method: 'set',
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              let i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: e8(h.THIRTY_DAYS),
              };
              this.records.set(i.id, i), this.persist(), this.events.emit(sd.created, i);
            }),
            oc(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = (0, i1.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(sd.updated, t));
            }),
            oc(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            oc(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((r) => {
                  r.topic !== e ||
                    ('u' > typeof t && r.id !== t) ||
                    (this.records.delete(r.id), this.events.emit(sd.deleted, r));
                }),
                this.persist();
            }),
            oc(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            oc(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            oc(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            oc(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            oc(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, c.U5)(t, this.name));
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ('u' > typeof t.response) return;
              let r = {
                topic: t.topic,
                request: (0, i1.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = ik('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(sd.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = ik('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored records for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', records: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(sd.created, (e) => {
            let t = sd.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(sd.updated, (e) => {
              let t = sd.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(sd.deleted, (e) => {
              let t = sd.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.core.heartbeat.on(o.li.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, h.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(sd.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var oh = Object.defineProperty,
        ou = (e, t, r) =>
          t in e
            ? oh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        od = (e, t, r) => ou(e, 'symbol' != typeof t ? t + '' : t, r);
      class of extends l.Vx {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            od(this, 'expirations', new Map()),
            od(this, 'events', new s.EventEmitter()),
            od(this, 'name', 'expirer'),
            od(this, 'version', '0.3'),
            od(this, 'cached', []),
            od(this, 'initialized', !1),
            od(this, 'storagePrefix', i6),
            od(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            od(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            od(this, 'set', (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(sf.created, { target: r, expiration: i });
            }),
            od(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            od(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(sf.deleted, { target: t, expiration: r });
              }
            }),
            od(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            od(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            od(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            od(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, c.U5)(t, this.name));
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ('string' == typeof e) return e2('topic', e);
          if ('number' == typeof e) return e2('id', e);
          let { message: t } = ik('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(sf.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = ik('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored expirations for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', expirations: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = ik('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, h.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(sf.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(o.li.pulse, () => this.checkExpirations()),
            this.events.on(sf.created, (e) => {
              let t = sf.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(sf.expired, (e) => {
              let t = sf.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(sf.deleted, (e) => {
              let t = sf.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var op = Object.defineProperty,
        og = (e, t, r) =>
          t in e
            ? op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oy = (e, t, r) => og(e, 'symbol' != typeof t ? t + '' : t, r);
      class ob extends l.zl {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            oy(this, 'name', 'verify-api'),
            oy(this, 'abortController'),
            oy(this, 'isDevEnv'),
            oy(this, 'verifyUrlV3', sg),
            oy(this, 'storagePrefix', i6),
            oy(this, 'version', 2),
            oy(this, 'publicKey'),
            oy(this, 'fetchPromise'),
            oy(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, h.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            oy(this, 'register', async (e) => {
              if (!eH() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: r, decryptedId: i } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                let e = (0, p.getDocument)(),
                  t = this.startAbortTimer(5 * h.ONE_SECOND),
                  i = await new Promise((i, n) => {
                    let o = () => {
                      window.removeEventListener('message', c),
                        e.body.removeChild(a),
                        n('attestation aborted');
                    };
                    this.abortController.signal.addEventListener('abort', o);
                    let a = e.createElement('iframe');
                    (a.src = s),
                      (a.style.display = 'none'),
                      a.addEventListener('error', o, { signal: this.abortController.signal });
                    let c = (s) => {
                      if (s.data && 'string' == typeof s.data)
                        try {
                          let n = JSON.parse(s.data);
                          if ('verify_attestation' === n.type) {
                            if ((0, d.Cq)(n.attestation).payload.id !== r) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener('abort', o),
                              window.removeEventListener('message', c),
                              i(null === n.attestation ? '' : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener('message', c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug('jwt attestation', i), i;
              } catch (e) {
                this.logger.warn(e);
              }
              return '';
            }),
            oy(this, 'resolve', async (e) => {
              if (this.isDevEnv) return '';
              let { attestationId: t, hash: r, encryptedId: i } = e;
              if ('' === t) {
                this.logger.debug('resolve: attestationId is empty, skipping');
                return;
              }
              if (t) {
                if ((0, d.Cq)(t).payload.id !== i) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn('resolve: jwt attestation: origin url not verified');
                    return;
                  }
                  return e;
                }
              }
              if (!r) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(r, s);
            }),
            oy(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let r = this.startAbortTimer(5 * h.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(r), 200 === i.status ? await i.json() : void 0;
            }),
            oy(this, 'getVerifyUrl', (e) => {
              let t = e || sp;
              return (
                sy.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${sp}`
                  ),
                  (t = sp)),
                t
              );
            }),
            oy(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(h.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            oy(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            oy(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            oy(this, 'isValidJwtAttestation', async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
              let r = await this.fetchAndPersistPublicKey();
              try {
                if (r) return this.validateAttestation(e, r);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
            }),
            oy(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            oy(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            oy(this, 'validateAttestation', (e, t) => {
              let r = (function (e, t) {
                  let [r, i, s] = e.split('.'),
                    n = ej.from(
                      (function (e) {
                        let t = e.replace(/-/g, '+').replace(/_/g, '/'),
                          r = t.length % 4;
                        return r > 0 && (t += '='.repeat(4 - r)), t;
                      })(s),
                      'base64'
                    );
                  if (64 !== n.length) throw Error('Invalid signature length');
                  let o = n.slice(0, 32).toString('hex'),
                    a = n.slice(32, 64).toString('hex'),
                    c = rj(`${r}.${i}`),
                    l = new eL.ec('p256').keyFromPublic(
                      {
                        x: ej.from(t.x, 'base64').toString('hex'),
                        y: ej.from(t.y, 'base64').toString('hex'),
                      },
                      'hex'
                    ),
                    h = eU(c, it);
                  if (!l.verify(h, { r: o, s: a })) throw Error('Invalid signature');
                  return (0, d.Cq)(e).payload;
                })(e, t.publicKey),
                i = { hasExpired: (0, h.toMiliseconds)(r.exp) < Date.now(), payload: r };
              if (i.hasExpired)
                throw (
                  (this.logger.warn('resolve: jwt attestation expired'),
                  Error('JWT attestation expired'))
                );
              return {
                origin: i.payload.origin,
                isScam: i.payload.isScam,
                isVerified: i.payload.isVerified,
              };
            }),
            (this.logger = (0, c.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = tr()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            '//verify:public:key'
          );
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(() => this.abortController.abort(), (0, h.toMiliseconds)(e))
          );
        }
      }
      var om = Object.defineProperty,
        ov = (e, t, r) =>
          t in e
            ? om(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ow = (e, t, r) => ov(e, 'symbol' != typeof t ? t + '' : t, r);
      class oE extends l.GF {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            ow(this, 'context', 'echo'),
            ow(this, 'registerDeviceToken', async (e) => {
              let { clientId: t, token: r, notificationType: i, enableEncrypted: s = !1 } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id: t, type: i, token: r, always_raw: s }),
              });
            }),
            (this.logger = (0, c.U5)(t, this.context));
        }
      }
      var o_ = Object.defineProperty,
        oI = Object.getOwnPropertySymbols,
        ox = Object.prototype.hasOwnProperty,
        oS = Object.prototype.propertyIsEnumerable,
        oD = (e, t, r) =>
          t in e
            ? o_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oO = (e, t) => {
          for (var r in t || (t = {})) ox.call(t, r) && oD(e, r, t[r]);
          if (oI) for (var r of oI(t)) oS.call(t, r) && oD(e, r, t[r]);
          return e;
        },
        oA = (e, t, r) => oD(e, 'symbol' != typeof t ? t + '' : t, r);
      class oP extends l.$Q {
        constructor(e, t, r = !0) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            oA(this, 'context', 'event-client'),
            oA(this, 'storagePrefix', i6),
            oA(this, 'storageVersion', 0.1),
            oA(this, 'events', new Map()),
            oA(this, 'shouldPersist', !1),
            oA(this, 'init', async () => {
              if (!tr())
                try {
                  let e = {
                    eventId: tt(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: eY(this.core.relayer.protocol, this.core.relayer.version, sn),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            oA(this, 'createEvent', (e) => {
              let {
                  event: t = 'ERROR',
                  type: r = '',
                  properties: { topic: i, trace: s },
                } = e,
                n = tt(),
                o = this.core.projectId || '',
                a = oO(
                  {
                    eventId: n,
                    timestamp: Date.now(),
                    props: { event: t, type: r, properties: { topic: i, trace: s } },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return this.telemetryEnabled && (this.events.set(n, a), (this.shouldPersist = !0)), a;
            }),
            oA(this, 'getEvent', (e) => {
              let { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              let i = Array.from(this.events.values()).find((e) => e.props.properties.topic === r);
              if (i) return oO(oO({}, i), this.setMethods(i.eventId));
            }),
            oA(this, 'deleteEvent', (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            oA(this, 'setEventListeners', () => {
              this.core.heartbeat.on(o.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, h.fromMiliseconds)(Date.now()) - (0, h.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            oA(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            oA(this, 'addTrace', (e, t) => {
              let r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            oA(this, 'setError', (e, t) => {
              let r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            oA(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            oA(this, 'restore', async () => {
              try {
                let e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, oO(oO({}, e), this.setMethods(e.eventId)));
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            oA(this, 'submit', async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, r] of this.events) r.props.type && e.push(r);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e) this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            oA(this, 'sendEvent', async (e) => {
              let t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${sn}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            oA(this, 'getAppDomain', () => eG().url),
            (this.logger = (0, c.U5)(t, this.context)),
            (this.telemetryEnabled = r),
            r
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            '//' +
            this.context
          );
        }
      }
      var oR = Object.defineProperty,
        oN = Object.getOwnPropertySymbols,
        oT = Object.prototype.hasOwnProperty,
        oC = Object.prototype.propertyIsEnumerable,
        ok = (e, t, r) =>
          t in e
            ? oR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oU = (e, t) => {
          for (var r in t || (t = {})) oT.call(t, r) && ok(e, r, t[r]);
          if (oN) for (var r of oN(t)) oC.call(t, r) && ok(e, r, t[r]);
          return e;
        },
        oL = (e, t, r) => ok(e, 'symbol' != typeof t ? t + '' : t, r);
      class oM extends l.ZP {
        constructor(e) {
          var t;
          super(e),
            oL(this, 'protocol', 'wc'),
            oL(this, 'version', 2),
            oL(this, 'name', i5),
            oL(this, 'relayUrl'),
            oL(this, 'projectId'),
            oL(this, 'customStoragePrefix'),
            oL(this, 'events', new s.EventEmitter()),
            oL(this, 'logger'),
            oL(this, 'heartbeat'),
            oL(this, 'relayer'),
            oL(this, 'crypto'),
            oL(this, 'storage'),
            oL(this, 'history'),
            oL(this, 'expirer'),
            oL(this, 'pairing'),
            oL(this, 'verify'),
            oL(this, 'echoClient'),
            oL(this, 'linkModeSupportedApps'),
            oL(this, 'eventClient'),
            oL(this, 'initialized', !1),
            oL(this, 'logChunkController'),
            oL(this, 'on', (e, t) => this.events.on(e, t)),
            oL(this, 'once', (e, t) => this.events.once(e, t)),
            oL(this, 'off', (e, t) => this.events.off(e, t)),
            oL(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            oL(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: r }) => {
              if (!e || !t) return;
              let i = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: so.link_mode,
              };
              this.relayer.onLinkMessageEvent(i, { sessionExists: r });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || sr),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          let r = (0, c.iP)({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : i4.logger,
              name: i5,
            }),
            { logger: i, chunkLoggerController: n } = (0, c.D5)({
              opts: r,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = n),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
              }),
            (this.logger = (0, c.U5)(i, this.name)),
            (this.heartbeat = new o.VH()),
            (this.crypto = new nv(this, this.logger, e?.keychain)),
            (this.history = new ol(this, this.logger)),
            (this.expirer = new of(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new a.A(oU(oU({}, i9), e?.storageOptions))),
            (this.relayer = new n3({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new on(this, this.logger)),
            (this.verify = new ob(this, this.logger, this.storage)),
            (this.echoClient = new oE(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new oP(this, this.logger, e?.telemetryEnabled));
        }
        static async init(e) {
          let t = new oM(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', r), t;
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(sa, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps = (await this.storage.getItem(sa)) || []),
              (this.initialized = !0),
              this.logger.info('Core Initialization Success');
          } catch (e) {
            throw (
              (this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      let oq = 'client',
        oj = `wc@2:${oq}:`,
        oB = { name: oq, logger: 'error' },
        oz = 'WALLETCONNECT_DEEPLINK_CHOICE',
        o$ = 'Proposal expired',
        oF = h.SEVEN_DAYS,
        oV = {
          wc_sessionPropose: {
            req: { ttl: h.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: h.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: h.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: h.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: h.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        oK = { min: h.FIVE_MINUTES, max: h.SEVEN_DAYS },
        oH = { idle: 'IDLE', active: 'ACTIVE' },
        oJ = {
          eth_sendTransaction: { key: '' },
          eth_sendRawTransaction: { key: '' },
          wallet_sendCalls: { key: '' },
          solana_signTransaction: { key: 'signature' },
          solana_signAllTransactions: { key: 'transactions' },
          solana_signAndSendTransaction: { key: 'signature' },
        },
        oW = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest', 'wc_sessionAuthenticate'],
        oG = 'wc@1.5:auth:',
        oY = `${oG}:PUB_KEY`;
      var oQ = Object.defineProperty,
        oZ = Object.defineProperties,
        oX = Object.getOwnPropertyDescriptors,
        o0 = Object.getOwnPropertySymbols,
        o1 = Object.prototype.hasOwnProperty,
        o2 = Object.prototype.propertyIsEnumerable,
        o3 = (e, t, r) =>
          t in e
            ? oQ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        o8 = (e, t) => {
          for (var r in t || (t = {})) o1.call(t, r) && o3(e, r, t[r]);
          if (o0) for (var r of o0(t)) o2.call(t, r) && o3(e, r, t[r]);
          return e;
        },
        o5 = (e, t) => oZ(e, oX(t)),
        o6 = (e, t, r) => o3(e, 'symbol' != typeof t ? t + '' : t, r);
      class o4 extends l.yJ {
        constructor(e) {
          super(e),
            o6(this, 'name', 'engine'),
            o6(this, 'events', new (n())()),
            o6(this, 'initialized', !1),
            o6(this, 'requestQueue', { state: oH.idle, queue: [] }),
            o6(this, 'sessionRequestQueue', { state: oH.idle, queue: [] }),
            o6(this, 'requestQueueDelay', h.ONE_SECOND),
            o6(this, 'expectedPairingMethodMap', new Map()),
            o6(this, 'recentlyDeletedMap', new Map()),
            o6(this, 'recentlyDeletedLimit', 200),
            o6(this, 'relayMessageCache', []),
            o6(this, 'init', async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(oV) }),
                (this.initialized = !0),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  },
                  (0, h.toMiliseconds)(this.requestQueueDelay)
                ));
            }),
            o6(this, 'connect', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = o5(o8({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: r,
                  requiredNamespaces: i,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  relays: o,
                } = t,
                a = r,
                c,
                l = !1;
              try {
                if (a) {
                  let e = this.client.core.pairing.pairings.get(a);
                  this.client.logger.warn(
                    'connect() with existing pairing topic is deprecated and will be removed in the next major release.'
                  ),
                    (l = e.active);
                }
              } catch (e) {
                throw (this.client.logger.error(`connect() -> pairing.get(${a}) failed`), e);
              }
              if (!a || !l) {
                let { topic: e, uri: t } = await this.client.core.pairing.create();
                (a = e), (c = t);
              }
              if (!a) {
                let { message: e } = ik('NO_MATCHING_KEY', `connect() pairing topic: ${a}`);
                throw Error(e);
              }
              let u = await this.client.core.crypto.generateKeyPair(),
                d = oV.wc_sessionPropose.req.ttl || h.FIVE_MINUTES,
                f = e8(d),
                p = o8(
                  {
                    requiredNamespaces: i,
                    optionalNamespaces: s,
                    relays: o ?? [{ protocol: 'irn' }],
                    proposer: { publicKey: u, metadata: this.client.metadata },
                    expiryTimestamp: f,
                    pairingTopic: a,
                  },
                  n && { sessionProperties: n }
                ),
                { reject: g, resolve: y, done: b } = e0(d, o$);
              this.events.once(e6('session_connect'), async ({ error: e, session: t }) => {
                if (e) g(e);
                else if (t) {
                  t.self.publicKey = u;
                  let e = o5(o8({}, t), {
                    pairingTopic: p.pairingTopic,
                    requiredNamespaces: p.requiredNamespaces,
                    optionalNamespaces: p.optionalNamespaces,
                    transportType: so.relay,
                  });
                  await this.client.session.set(t.topic, e),
                    await this.setExpiry(t.topic, t.expiry),
                    a &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: a,
                        metadata: t.peer.metadata,
                      })),
                    this.cleanupDuplicatePairings(e),
                    y(e);
                }
              });
              let m = await this.sendRequest({
                topic: a,
                method: 'wc_sessionPropose',
                params: p,
                throwOnFailedPublish: !0,
              });
              return await this.setProposal(m, o8({ id: m }, p)), { uri: c, approval: b };
            }),
            o6(this, 'pair', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error('pair() failed'), e);
              }
            }),
            o6(this, 'approve', async (e) => {
              var t, r, i;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [sv.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(sw.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),
                  s.setError(sw.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error('approve() -> isValidApprove() failed'),
                  s.setError(sw.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  sessionConfig: l,
                } = e,
                h = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: u,
                  proposer: d,
                  requiredNamespaces: f,
                  optionalNamespaces: p,
                } = h,
                g = null == (r = this.client.core.eventClient) ? void 0 : r.getEvent({ topic: u });
              g ||
                (g =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.createEvent({
                        type: sv.session_approve_started,
                        properties: {
                          topic: u,
                          trace: [
                            sv.session_approve_started,
                            sv.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let y = await this.client.core.crypto.generateKeyPair(),
                b = d.publicKey,
                m = await this.client.core.crypto.generateSharedKey(y, b),
                v = o8(
                  o8(
                    {
                      relay: { protocol: o ?? 'irn' },
                      namespaces: a,
                      controller: { publicKey: y, metadata: this.client.metadata },
                      expiry: e8(oF),
                    },
                    c && { sessionProperties: c }
                  ),
                  l && { sessionConfig: l }
                ),
                w = so.relay;
              g.addTrace(sv.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(m, { transportType: w });
              } catch (e) {
                throw (g.setError(sw.subscribe_session_topic_failure), e);
              }
              g.addTrace(sv.subscribe_session_topic_success);
              let E = o5(o8({}, v), {
                topic: m,
                requiredNamespaces: f,
                optionalNamespaces: p,
                pairingTopic: u,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: d.publicKey, metadata: d.metadata },
                controller: y,
                transportType: so.relay,
              });
              await this.client.session.set(m, E), g.addTrace(sv.store_session);
              try {
                g.addTrace(sv.publishing_session_settle),
                  await this.sendRequest({
                    topic: m,
                    method: 'wc_sessionSettle',
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (g?.setError(sw.session_settle_publish_failure), e);
                  }),
                  g.addTrace(sv.session_settle_publish_success),
                  g.addTrace(sv.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: u,
                    result: { relay: { protocol: o ?? 'irn' }, responderPublicKey: y },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (g?.setError(sw.session_approve_publish_failure), e);
                  }),
                  g.addTrace(sv.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(m, iU('USER_DISCONNECTED')),
                  await this.client.core.relayer.unsubscribe(m),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({ eventId: g.eventId }),
                await this.client.core.pairing.updateMetadata({ topic: u, metadata: d.metadata }),
                await this.client.proposal.delete(n, iU('USER_DISCONNECTED')),
                await this.client.core.pairing.activate({ topic: u }),
                await this.setExpiry(m, e8(oF)),
                { topic: m, acknowledged: () => Promise.resolve(this.client.session.get(m)) }
              );
            }),
            o6(this, 'reject', async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (this.client.logger.error('reject() -> isValidReject() failed'), e);
              }
              let { id: r, reason: i } = e;
              try {
                t = this.client.proposal.get(r).pairingTopic;
              } catch (e) {
                throw (this.client.logger.error(`reject() -> proposal.get(${r}) failed`), e);
              }
              t &&
                (await this.sendError({
                  id: r,
                  topic: t,
                  error: i,
                  rpcOpts: oV.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(r, iU('USER_DISCONNECTED')));
            }),
            o6(this, 'update', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (this.client.logger.error('update() -> isValidUpdate() failed'), e);
              }
              let { topic: t, namespaces: r } = e,
                { done: i, resolve: s, reject: n } = e0(),
                o = (0, i1.payloadId)(),
                a = (0, i1.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(e6('session_update', o), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionUpdate',
                  params: { namespaces: r },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: i }
              );
            }),
            o6(this, 'extend', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (this.client.logger.error('extend() -> isValidExtend() failed'), e);
              }
              let { topic: t } = e,
                r = (0, i1.payloadId)(),
                { done: i, resolve: s, reject: n } = e0();
              return (
                this.events.once(e6('session_extend', r), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.setExpiry(t, e8(oF)),
                this.sendRequest({
                  topic: t,
                  method: 'wc_sessionExtend',
                  params: {},
                  clientRpcId: r,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: i }
              );
            }),
            o6(this, 'request', async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (this.client.logger.error('request() -> isValidRequest() failed'), e);
              }
              let {
                  chainId: t,
                  request: r,
                  topic: i,
                  expiry: s = oV.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(i);
              n?.transportType === so.relay && (await this.confirmOnlineStateOrThrow());
              let o = (0, i1.payloadId)(),
                a = (0, i1.getBigIntRpcId)().toString(),
                { done: c, resolve: l, reject: h } = e0(s, 'Request expired. Please try again.');
              this.events.once(e6('session_request', o), ({ error: e, result: t }) => {
                e ? h(e) : l(t);
              });
              let u = 'wc_sessionRequest',
                d = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              if (d)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: u,
                    params: { request: o5(o8({}, r), { expiryTimestamp: e8(s) }), chainId: t },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: d,
                  }).catch((e) => h(e)),
                  this.client.events.emit('session_request_sent', {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              let f = { request: o5(o8({}, r), { expiryTimestamp: e8(s) }), chainId: t },
                p = this.shouldSetTVF(u, f);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    o8(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: u,
                        params: f,
                        expiry: s,
                        throwOnFailedPublish: !0,
                      },
                      p && { tvf: this.getTVFParams(o, f) }
                    )
                  ).catch((e) => h(e)),
                    this.client.events.emit('session_request_sent', {
                      topic: i,
                      request: r,
                      chainId: t,
                      id: o,
                    }),
                    e();
                }),
                new Promise(async (e) => {
                  var t;
                  if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                    let e = await e7(this.client.core.storage, oz);
                    await e9({ id: o, topic: i, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            o6(this, 'respond', async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r,
                s = this.client.session.get(t);
              s.transportType === so.relay && (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(s.peer.metadata, s.transportType);
              (0, i1.isJsonRpcResult)(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : (0, i1.isJsonRpcError)(r) &&
                  (await this.sendError({ id: i, topic: t, error: r.error, appLink: n })),
                this.cleanupAfterResponse(e);
            }),
            o6(this, 'ping', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (this.client.logger.error('ping() -> isValidPing() failed'), e);
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = (0, i1.payloadId)(),
                  r = (0, i1.getBigIntRpcId)().toString(),
                  { done: i, resolve: s, reject: n } = e0();
                this.events.once(e6('session_ping', e), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: 'wc_sessionPing',
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: r,
                    }),
                    i(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    'ping() on pairing topic is deprecated and will be removed in the next major release.'
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            o6(this, 'emit', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e,
                s = (0, i1.getBigIntRpcId)().toString(),
                n = (0, i1.payloadId)();
              await this.sendRequest({
                topic: t,
                method: 'wc_sessionEvent',
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: s,
                clientRpcId: n,
              });
            }),
            o6(this, 'disconnect', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionDelete',
                  params: iU('USER_DISCONNECTED'),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = ik(
                  'MISMATCHED_TOPIC',
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            o6(
              this,
              'find',
              (e) => (
                this.isInitialized(),
                this.client.session.getAll().filter((t) =>
                  (function (e, t) {
                    let { requiredNamespaces: r } = t,
                      i = Object.keys(e.namespaces),
                      s = Object.keys(r),
                      n = !0;
                    return (
                      !!eQ(s, i) &&
                      (i.forEach((t) => {
                        let { accounts: i, methods: s, events: o } = e.namespaces[t],
                          a = iP(i),
                          c = r[t];
                        (eQ(e$(t, c), a) && eQ(c.methods, s) && eQ(c.events, o)) || (n = !1);
                      }),
                      n)
                    );
                  })(t, e)
                )
              )
            ),
            o6(this, 'getPendingSessionRequests', () => this.client.pendingRequest.getAll()),
            o6(this, 'authenticate', async (e, t) => {
              var r, i, s;
              let n;
              this.isInitialized(), this.isValidAuthenticate(e);
              let o =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect) ? void 0 : r.linkMode),
                a = o ? so.link_mode : so.relay;
              a === so.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: c,
                  statement: l = '',
                  uri: h,
                  domain: u,
                  nonce: d,
                  type: f,
                  exp: p,
                  nbf: g,
                  methods: y = [],
                  expiry: b,
                } = e,
                m = [...(e.resources || [])],
                { topic: v, uri: w } = await this.client.core.pairing.create({
                  methods: ['wc_sessionAuthenticate'],
                  transportType: a,
                });
              this.client.logger.info({
                message: 'Generated new pairing',
                pairing: { topic: v, uri: w },
              });
              let E = await this.client.core.crypto.generateKeyPair(),
                _ = ia(E);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(oY, { responseTopic: _, publicKey: E }),
                  this.client.auth.pairingTopics.set(_, { topic: _, pairingTopic: v }),
                ]),
                await this.client.core.relayer.subscribe(_, { transportType: a }),
                this.client.logger.info(`sending request to new pairing topic: ${v}`),
                y.length > 0)
              ) {
                let { namespace: e } = eB(c[0]),
                  t = t8(
                    (function (e, t, r, i = {}) {
                      return (
                        r?.sort((e, t) => e.localeCompare(t)),
                        {
                          att: {
                            [e]: (function (e, t, r = {}) {
                              return Object.assign(
                                {},
                                ...(t = t?.sort((e, t) => e.localeCompare(t))).map((t) => ({
                                  [`${e}/${t}`]: [r],
                                }))
                              );
                            })(t, r, i),
                          },
                        }
                      );
                    })(e, 'request', y)
                  );
                t9(m) &&
                  ((i = t),
                  (s = m.pop()),
                  (t = t8(
                    (function (e, t) {
                      t3(e), t3(t);
                      let r = Object.keys(e.att)
                          .concat(Object.keys(t.att))
                          .sort((e, t) => e.localeCompare(t)),
                        i = { att: {} };
                      return (
                        r.forEach((r) => {
                          var s, n;
                          Object.keys((null == (s = e.att) ? void 0 : s[r]) || {})
                            .concat(Object.keys((null == (n = t.att) ? void 0 : n[r]) || {}))
                            .sort((e, t) => e.localeCompare(t))
                            .forEach((s) => {
                              var n, o;
                              i.att[r] = tY(tG({}, i.att[r]), {
                                [s]:
                                  (null == (n = e.att[r]) ? void 0 : n[s]) ||
                                  (null == (o = t.att[r]) ? void 0 : o[s]),
                              });
                            });
                        }),
                        i
                      );
                    })(t5(i), t5(s))
                  ))),
                  m.push(t);
              }
              let I =
                  b && b > oV.wc_sessionAuthenticate.req.ttl
                    ? b
                    : oV.wc_sessionAuthenticate.req.ttl,
                x = {
                  authPayload: {
                    type: f ?? 'caip122',
                    chains: c,
                    statement: l,
                    aud: h,
                    domain: u,
                    version: '1',
                    nonce: d,
                    iat: new Date().toISOString(),
                    exp: p,
                    nbf: g,
                    resources: m,
                  },
                  requester: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: e8(I),
                },
                S = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: c,
                      methods: [...new Set(['personal_sign', ...y])],
                      events: ['chainChanged', 'accountsChanged'],
                    },
                  },
                  relays: [{ protocol: 'irn' }],
                  pairingTopic: v,
                  proposer: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: e8(oV.wc_sessionPropose.req.ttl),
                },
                { done: D, resolve: O, reject: A } = e0(I, 'Request expired'),
                P = async ({ error: e, session: t }) => {
                  if ((this.events.off(e6('session_request', N), R), e)) A(e);
                  else if (t) {
                    (t.self.publicKey = E),
                      await this.client.session.set(t.topic, t),
                      await this.setExpiry(t.topic, t.expiry),
                      v &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: v,
                          metadata: t.peer.metadata,
                        }));
                    let e = this.client.session.get(t.topic);
                    await this.deleteProposal(T), O({ session: e });
                  }
                },
                R = async (e) => {
                  var r, i, s;
                  let n;
                  if (
                    (await this.deletePendingAuthRequest(N, { message: 'fulfilled', code: 0 }),
                    e.error)
                  ) {
                    let t = iU('WC_METHOD_UNSUPPORTED', 'wc_sessionAuthenticate');
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(e6('session_connect'), P), A(e.error.message));
                  }
                  await this.deleteProposal(T), this.events.off(e6('session_connect'), P);
                  let { cacaos: o, responder: c } = e.result,
                    l = [],
                    h = [];
                  for (let e of o) {
                    (await t1({ cacao: e, projectId: this.client.core.projectId })) ||
                      (this.client.logger.error(e, 'Signature verification failed'),
                      A(iU('SESSION_SETTLEMENT_FAILED', 'Signature verification failed')));
                    let { p: t } = e,
                      r = t9(t.resources),
                      i = [tX(t.iss)],
                      s = t0(t.iss);
                    if (r) {
                      let e = t6(r),
                        t = t4(r);
                      l.push(...e), i.push(...t);
                    }
                    for (let e of i) h.push(`${e}:${s}`);
                  }
                  let u = await this.client.core.crypto.generateSharedKey(E, c.publicKey);
                  l.length > 0 &&
                    ((n = {
                      topic: u,
                      acknowledged: !0,
                      self: { publicKey: E, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: e8(oF),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: 'irn' },
                      pairingTopic: v,
                      namespaces: iN([...new Set(l)], [...new Set(h)]),
                      transportType: a,
                    }),
                    await this.client.core.relayer.subscribe(u, { transportType: a }),
                    await this.client.session.set(u, n),
                    v &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: v,
                        metadata: c.metadata,
                      })),
                    (n = this.client.session.get(u))),
                    null != (r = this.client.metadata.redirect) &&
                      r.linkMode &&
                      null != (i = c.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal),
                      this.client.session.update(u, { transportType: so.link_mode })),
                    O({ auths: o, session: n });
                },
                N = (0, i1.payloadId)(),
                T = (0, i1.payloadId)();
              this.events.once(e6('session_connect'), P),
                this.events.once(e6('session_request', N), R);
              try {
                if (o) {
                  let e = (0, i1.formatJsonRpcRequest)('wc_sessionAuthenticate', x, N);
                  this.client.core.history.set(v, e);
                  let r = await this.client.core.crypto.encode('', e, { type: 2, encoding: ii });
                  n = iv(t, v, r);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: v,
                      method: 'wc_sessionAuthenticate',
                      params: x,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: N,
                    }),
                    this.sendRequest({
                      topic: v,
                      method: 'wc_sessionPropose',
                      params: S,
                      expiry: oV.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: T,
                    }),
                  ]);
              } catch (e) {
                throw (
                  (this.events.off(e6('session_connect'), P),
                  this.events.off(e6('session_request', N), R),
                  e)
                );
              }
              return (
                await this.setProposal(T, o8({ id: T }, S)),
                await this.setAuthRequest(N, {
                  request: o5(o8({}, x), { verifyContext: {} }),
                  pairingTopic: v,
                  transportType: a,
                }),
                { uri: n ?? w, response: D }
              );
            }),
            o6(this, 'approveSessionAuthenticate', async (e) => {
              let t;
              let { id: r, auths: i } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: r.toString(),
                    trace: [sE.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(s_.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(r);
              if (!n)
                throw (
                  (s.setError(s_.authenticated_session_pending_request_not_found),
                  Error(`Could not find pending auth request with id ${r}`))
                );
              let o = n.transportType || so.relay;
              o === so.relay && (await this.confirmOnlineStateOrThrow());
              let a = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = ia(a),
                h = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                u = [],
                d = [];
              for (let e of i) {
                if (!(await t1({ cacao: e, projectId: this.client.core.projectId }))) {
                  s.setError(s_.invalid_cacao);
                  let e = iU('SESSION_SETTLEMENT_FAILED', 'Signature verification failed');
                  throw (
                    (await this.sendError({ id: r, topic: l, error: e, encodeOpts: h }),
                    Error(e.message))
                  );
                }
                s.addTrace(sE.cacaos_verified);
                let { p: t } = e,
                  i = t9(t.resources),
                  n = [tX(t.iss)],
                  o = t0(t.iss);
                if (i) {
                  let e = t6(i),
                    t = t4(i);
                  u.push(...e), n.push(...t);
                }
                for (let e of n) d.push(`${e}:${o}`);
              }
              let f = await this.client.core.crypto.generateSharedKey(c, a);
              if ((s.addTrace(sE.create_authenticated_session_topic), u?.length > 0)) {
                (t = {
                  topic: f,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: a, metadata: n.requester.metadata },
                  controller: a,
                  expiry: e8(oF),
                  authentication: i,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: 'irn' },
                  pairingTopic: n.pairingTopic,
                  namespaces: iN([...new Set(u)], [...new Set(d)]),
                  transportType: o,
                }),
                  s.addTrace(sE.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(f, { transportType: o });
                } catch (e) {
                  throw (s.setError(s_.subscribe_authenticated_session_topic_failure), e);
                }
                s.addTrace(sE.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(f, t),
                  s.addTrace(sE.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(sE.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: r,
                  result: {
                    cacaos: i,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                });
              } catch (e) {
                throw (s.setError(s_.authenticated_session_approve_publish_failure), e);
              }
              return (
                await this.client.auth.requests.delete(r, { message: 'fulfilled', code: 0 }),
                await this.client.core.pairing.activate({ topic: n.pairingTopic }),
                this.client.core.eventClient.deleteEvent({ eventId: s.eventId }),
                { session: t }
              );
            }),
            o6(this, 'rejectSessionAuthenticate', async (e) => {
              this.isInitialized();
              let { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i) throw Error(`Could not find pending auth request with id ${t}`);
              i.transportType === so.relay && (await this.confirmOnlineStateOrThrow());
              let s = i.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                o = ia(s);
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: { type: 1, receiverPublicKey: s, senderPublicKey: n },
                rpcOpts: oV.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType),
              }),
                await this.client.auth.requests.delete(t, { message: 'rejected', code: 0 }),
                await this.client.proposal.delete(t, iU('USER_DISCONNECTED'));
            }),
            o6(this, 'formatAuthMessage', (e) => {
              this.isInitialized();
              let { request: t, iss: r } = e;
              return t2(t, r);
            }),
            o6(this, 'processRelayMessageCache', () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            o6(this, 'cleanupDuplicatePairings', async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings.getAll().filter((r) => {
                      var i, s;
                      return (
                        (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                        (null == (s = r.peerMetadata) ? void 0 : s.url) === e.peer.metadata.url &&
                        r.topic &&
                        r.topic !== t.topic
                      );
                    });
                  if (0 === r.length) return;
                  this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),
                    await Promise.all(
                      r.map((e) => this.client.core.pairing.disconnect({ topic: e.topic }))
                    ),
                    this.client.logger.info('Duplicate pairings clean up finished');
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            o6(this, 'deleteSession', async (e) => {
              var t;
              let { topic: r, expirerHasDeleted: i = !1, emitEvent: s = !0, id: n = 0 } = e,
                { self: o } = this.client.session.get(r);
              await this.client.core.relayer.unsubscribe(r),
                await this.client.session.delete(r, iU('USER_DISCONNECTED')),
                this.addToRecentlyDeleted(r, 'session'),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(r) &&
                  (await this.client.core.crypto.deleteSymKey(r)),
                i || this.client.core.expirer.del(r),
                this.client.core.storage.removeItem(oz).catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r && this.deletePendingSessionRequest(e.id, iU('USER_DISCONNECTED'));
                }),
                r === (null == (t = this.sessionRequestQueue.queue[0]) ? void 0 : t.topic) &&
                  (this.sessionRequestQueue.state = oH.idle),
                s && this.client.events.emit('session_delete', { id: n, topic: r });
            }),
            o6(this, 'deleteProposal', async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    r = this.client.core.eventClient.getEvent({ topic: t.pairingTopic });
                  r?.setError(sw.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, iU('USER_DISCONNECTED')),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'proposal');
            }),
            o6(this, 'deletePendingSessionRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'request'),
                (this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(
                  (t) => t.id !== e
                )),
                r &&
                  ((this.sessionRequestQueue.state = oH.idle),
                  this.client.events.emit('session_request_expire', { id: e }));
            }),
            o6(this, 'deletePendingAuthRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            o6(this, 'setExpiry', async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            o6(this, 'setProposal', async (e, t) => {
              this.client.core.expirer.set(e, e8(oV.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            o6(this, 'setAuthRequest', async (e, t) => {
              let { request: r, pairingTopic: i, transportType: s = so.relay } = t;
              this.client.core.expirer.set(e, r.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: r.authPayload,
                  requester: r.requester,
                  expiryTimestamp: r.expiryTimestamp,
                  id: e,
                  pairingTopic: i,
                  verifyContext: r.verifyContext,
                  transportType: s,
                });
            }),
            o6(this, 'setPendingSessionRequest', async (e) => {
              let { id: t, topic: r, params: i, verifyContext: s } = e,
                n = i.request.expiryTimestamp || e8(oV.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: s,
                });
            }),
            o6(this, 'sendRequest', async (e) => {
              let t, i;
              let {
                  topic: s,
                  method: n,
                  params: o,
                  expiry: a,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: h,
                  appLink: u,
                  tvf: d,
                } = e,
                f = (0, i1.formatJsonRpcRequest)(n, o, l),
                p = !!u;
              try {
                let e = p ? ii : ir;
                t = await this.client.core.crypto.encode(s, f, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                  ),
                  e)
                );
              }
              if (oW.includes(n)) {
                let e = ic(JSON.stringify(f)),
                  r = ic(t);
                i = await this.client.core.verify.register({ id: r, decryptedId: e });
              }
              let g = oV[n].req;
              if (
                ((g.attestation = i),
                a && (g.ttl = a),
                c && (g.id = c),
                this.client.core.history.set(s, f),
                p)
              ) {
                let e = iv(u, s, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = oV[n].req;
                a && (e.ttl = a),
                  c && (e.id = c),
                  (e.tvf = o5(o8({}, d), { correlationId: f.id })),
                  h
                    ? ((e.internal = o5(o8({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return f.id;
            }),
            o6(this, 'sendResult', async (e) => {
              let t, i, s;
              let {
                  id: n,
                  topic: o,
                  result: a,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: h,
                } = e,
                u = (0, i1.formatJsonRpcResult)(n, a),
                d = h && 'u' > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = d ? ii : ir;
                t = await this.client.core.crypto.encode(
                  o,
                  u,
                  o5(o8({}, l || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${o} failed`
                  ),
                  e)
                );
              }
              try {
                let e = (i = await this.client.core.history.get(o, n)).request;
                try {
                  this.shouldSetTVF(e.method, e.params) && (s = this.getTVFParams(n, e.params, a));
                } catch (e) {
                  this.client.logger.warn('sendResult() -> getTVFParams() failed', e);
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(`sendResult() -> history.get(${o}, ${n}) failed`), e)
                );
              }
              if (d) {
                let e = iv(h, o, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = oV[i.request.method].res;
                (e.tvf = o5(o8({}, s), { correlationId: n })),
                  c
                    ? ((e.internal = o5(o8({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(o, t, e))
                    : this.client.core.relayer
                        .publish(o, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(u);
            }),
            o6(this, 'sendError', async (e) => {
              let t, i;
              let { id: s, topic: n, error: o, encodeOpts: a, rpcOpts: c, appLink: l } = e,
                h = (0, i1.formatJsonRpcError)(s, o),
                u = l && 'u' > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = u ? ii : ir;
                t = await this.client.core.crypto.encode(
                  n,
                  h,
                  o5(o8({}, a || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                i = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(`sendError() -> history.get(${n}, ${s}) failed`), e)
                );
              }
              if (u) {
                let e = iv(l, n, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = c || oV[i.request.method].res;
                this.client.core.relayer.publish(n, t, e);
              }
              await this.client.core.history.resolve(h);
            }),
            o6(this, 'cleanup', async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                e5(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  e5(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            o6(this, 'onRelayEventRequest', async (e) => {
              this.requestQueue.queue.push(e), await this.processRequestsQueue();
            }),
            o6(this, 'processRequestsQueue', async () => {
              if (this.requestQueue.state === oH.active) {
                this.client.logger.info('Request queue already active, skipping...');
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = oH.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = oH.idle;
            }),
            o6(this, 'processRequest', async (e) => {
              let { topic: t, payload: r, attestation: i, transportType: s, encryptedId: n } = e,
                o = r.method;
              if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: o }))
                switch (o) {
                  case 'wc_sessionPropose':
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                    });
                  case 'wc_sessionSettle':
                    return await this.onSessionSettleRequest(t, r);
                  case 'wc_sessionUpdate':
                    return await this.onSessionUpdateRequest(t, r);
                  case 'wc_sessionExtend':
                    return await this.onSessionExtendRequest(t, r);
                  case 'wc_sessionPing':
                    return await this.onSessionPingRequest(t, r);
                  case 'wc_sessionDelete':
                    return await this.onSessionDeleteRequest(t, r);
                  case 'wc_sessionRequest':
                    return await this.onSessionRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  case 'wc_sessionEvent':
                    return await this.onSessionEventRequest(t, r);
                  case 'wc_sessionAuthenticate':
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(`Unsupported request method ${o}`);
                }
            }),
            o6(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: r, transportType: i } = e,
                s = (await this.client.core.history.get(t, r.id)).request.method;
              switch (s) {
                case 'wc_sessionPropose':
                  return this.onSessionProposeResponse(t, r, i);
                case 'wc_sessionSettle':
                  return this.onSessionSettleResponse(t, r);
                case 'wc_sessionUpdate':
                  return this.onSessionUpdateResponse(t, r);
                case 'wc_sessionExtend':
                  return this.onSessionExtendResponse(t, r);
                case 'wc_sessionPing':
                  return this.onSessionPingResponse(t, r);
                case 'wc_sessionRequest':
                  return this.onSessionRequestResponse(t, r);
                case 'wc_sessionAuthenticate':
                  return this.onSessionAuthenticateResponse(t, r);
                default:
                  return this.client.logger.info(`Unsupported response method ${s}`);
              }
            }),
            o6(this, 'onRelayEventUnknownPayload', (e) => {
              let { topic: t } = e,
                { message: r } = ik(
                  'MISSING_OR_INVALID',
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(r);
            }),
            o6(this, 'shouldIgnorePairingRequest', (e) => {
              let { topic: t, requestMethod: r } = e,
                i = this.expectedPairingMethodMap.get(t);
              return (
                !(!i || i.includes(r)) &&
                !!(
                  i.includes('wc_sessionAuthenticate') &&
                  this.client.events.listenerCount('session_authenticate') > 0
                )
              );
            }),
            o6(this, 'onSessionProposeRequest', async (e) => {
              let { topic: t, payload: r, attestation: i, encryptedId: s } = e,
                { params: n, id: o } = r;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount('session_proposal') &&
                  (console.warn('No listener for session_proposal event'),
                  e?.setError(sm.proposal_listener_not_found)),
                  this.isValidConnect(o8({}, r.params));
                let a = n.expiryTimestamp || e8(oV.wc_sessionPropose.req.ttl),
                  c = o8({ id: o, pairingTopic: t, expiryTimestamp: a }, n);
                await this.setProposal(o, c);
                let l = await this.getVerifyContext({
                  attestationId: i,
                  hash: ic(JSON.stringify(r)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(sb.emit_session_proposal),
                  this.client.events.emit('session_proposal', {
                    id: o,
                    params: c,
                    verifyContext: l,
                  });
              } catch (e) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: e,
                  rpcOpts: oV.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            o6(this, 'onSessionProposeResponse', async (e, t, r) => {
              let { id: i } = t;
              if ((0, i1.isJsonRpcResult)(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  result: s,
                });
                let n = this.client.proposal.get(i);
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  proposal: n,
                });
                let o = n.proposer.publicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  selfPublicKey: o,
                });
                let a = s.responderPublicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  peerPublicKey: a,
                });
                let c = await this.client.core.crypto.generateSharedKey(o, a);
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  sessionTopic: c,
                });
                let l = await this.client.core.relayer.subscribe(c, { transportType: r });
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, i1.isJsonRpcError)(t)) {
                await this.client.proposal.delete(i, iU('USER_DISCONNECTED'));
                let e = e6('session_connect');
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e6('session_connect'), { error: t.error });
              }
            }),
            o6(this, 'onSessionSettleRequest', async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                let {
                    relay: r,
                    controller: s,
                    expiry: n,
                    namespaces: o,
                    sessionProperties: a,
                    sessionConfig: c,
                  } = t.params,
                  l = o5(
                    o8(
                      o8(
                        {
                          topic: e,
                          relay: r,
                          expiry: n,
                          namespaces: o,
                          acknowledged: !0,
                          pairingTopic: '',
                          requiredNamespaces: {},
                          optionalNamespaces: {},
                          controller: s.publicKey,
                          self: { publicKey: '', metadata: this.client.metadata },
                          peer: { publicKey: s.publicKey, metadata: s.metadata },
                        },
                        a && { sessionProperties: a }
                      ),
                      c && { sessionConfig: c }
                    ),
                    { transportType: so.relay }
                  ),
                  h = e6('session_connect');
                if (0 === this.events.listenerCount(h))
                  throw Error(`emitting ${h} without any listeners 997`);
                this.events.emit(e6('session_connect'), { session: l }),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            o6(this, 'onSessionSettleResponse', async (e, t) => {
              let { id: r } = t;
              (0, i1.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(e6('session_approve', r), {}))
                : (0, i1.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, iU('USER_DISCONNECTED')),
                  this.events.emit(e6('session_approve', r), { error: t.error }));
            }),
            o6(this, 'onSessionUpdateRequest', async (e, t) => {
              let { params: r, id: i } = t;
              try {
                let t = `${e}_session_update`,
                  s = iX.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.warn(`Discarding out of sync request - ${i}`),
                    this.sendError({ id: i, topic: e, error: iU('INVALID_UPDATE_REQUEST') });
                  return;
                }
                this.isValidUpdate(o8({ topic: e }, r));
                try {
                  iX.set(t, i),
                    await this.client.session.update(e, { namespaces: r.namespaces }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (iX.delete(t), e);
                }
                this.client.events.emit('session_update', { id: i, topic: e, params: r });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            o6(
              this,
              'isRequestOutOfSync',
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            o6(this, 'onSessionUpdateResponse', (e, t) => {
              let { id: r } = t,
                i = e6('session_update', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, i1.isJsonRpcResult)(t)
                ? this.events.emit(e6('session_update', r), {})
                : (0, i1.isJsonRpcError)(t) &&
                  this.events.emit(e6('session_update', r), { error: t.error });
            }),
            o6(this, 'onSessionExtendRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, e8(oF)),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_extend', { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            o6(this, 'onSessionExtendResponse', (e, t) => {
              let { id: r } = t,
                i = e6('session_extend', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, i1.isJsonRpcResult)(t)
                ? this.events.emit(e6('session_extend', r), {})
                : (0, i1.isJsonRpcError)(t) &&
                  this.events.emit(e6('session_extend', r), { error: t.error });
            }),
            o6(this, 'onSessionPingRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_ping', { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            o6(this, 'onSessionPingResponse', (e, t) => {
              let { id: r } = t,
                i = e6('session_ping', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              setTimeout(() => {
                (0, i1.isJsonRpcResult)(t)
                  ? this.events.emit(e6('session_ping', r), {})
                  : (0, i1.isJsonRpcError)(t) &&
                    this.events.emit(e6('session_ping', r), { error: t.error });
              }, 500);
            }),
            o6(this, 'onSessionDeleteRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(si.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: iU('USER_DISCONNECTED'),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            o6(this, 'onSessionRequest', async (e) => {
              var t, r, i;
              let { topic: s, payload: n, attestation: o, encryptedId: a, transportType: c } = e,
                { id: l, params: h } = n;
              try {
                await this.isValidRequest(o8({ topic: s }, h));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: o,
                    hash: ic(
                      JSON.stringify((0, i1.formatJsonRpcRequest)('wc_sessionRequest', h, l))
                    ),
                    encryptedId: a,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  u = { id: l, topic: s, params: h, verifyContext: n };
                await this.setPendingSessionRequest(u),
                  c === so.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (r = e.peer.metadata.redirect) ? void 0 : r.universal
                    ),
                  null != (i = this.client.signConfig) && i.disableRequestQueue
                    ? this.emitSessionRequest(u)
                    : (this.addSessionRequestToSessionRequestQueue(u),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: s, error: e }), this.client.logger.error(e);
              }
            }),
            o6(this, 'onSessionRequestResponse', (e, t) => {
              let { id: r } = t,
                i = e6('session_request', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, i1.isJsonRpcResult)(t)
                ? this.events.emit(e6('session_request', r), { result: t.result })
                : (0, i1.isJsonRpcError)(t) &&
                  this.events.emit(e6('session_request', r), { error: t.error });
            }),
            o6(this, 'onSessionEventRequest', async (e, t) => {
              let { id: r, params: i } = t;
              try {
                let t = `${e}_session_event_${i.event.name}`,
                  s = iX.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.info(`Discarding out of sync request - ${r}`);
                  return;
                }
                this.isValidEmit(o8({ topic: e }, i)),
                  this.client.events.emit('session_event', { id: r, topic: e, params: i }),
                  iX.set(t, r);
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            o6(this, 'onSessionAuthenticateResponse', (e, t) => {
              let { id: r } = t;
              this.client.logger.trace({
                type: 'method',
                method: 'onSessionAuthenticateResponse',
                topic: e,
                payload: t,
              }),
                (0, i1.isJsonRpcResult)(t)
                  ? this.events.emit(e6('session_request', r), { result: t.result })
                  : (0, i1.isJsonRpcError)(t) &&
                    this.events.emit(e6('session_request', r), { error: t.error });
            }),
            o6(this, 'onSessionAuthenticateRequest', async (e) => {
              var t;
              let { topic: r, payload: i, attestation: s, encryptedId: n, transportType: o } = e;
              try {
                let { requester: e, authPayload: a, expiryTimestamp: c } = i.params,
                  l = await this.getVerifyContext({
                    attestationId: s,
                    hash: ic(JSON.stringify(i)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: r,
                    id: i.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(i.id, { request: h, pairingTopic: r, transportType: o }),
                  o === so.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(e.metadata.redirect.universal),
                  this.client.events.emit('session_authenticate', {
                    topic: r,
                    params: i.params,
                    id: i.id,
                    verifyContext: l,
                  });
              } catch (n) {
                this.client.logger.error(n);
                let e = i.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(i.params.requester.metadata, o);
                await this.sendError({
                  id: i.id,
                  topic: r,
                  error: n,
                  encodeOpts: { type: 1, receiverPublicKey: e, senderPublicKey: t },
                  rpcOpts: oV.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            o6(this, 'addSessionRequestToSessionRequestQueue', (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            o6(this, 'cleanupAfterResponse', (e) => {
              this.deletePendingSessionRequest(e.response.id, { message: 'fulfilled', code: 0 }),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.state = oH.idle), this.processSessionRequestQueue();
                  },
                  (0, h.toMiliseconds)(this.requestQueueDelay)
                );
            }),
            o6(this, 'cleanupPendingSentRequestsForTopic', ({ topic: e, error: t }) => {
              let r = this.client.core.history.pending;
              r.length > 0 &&
                r
                  .filter((t) => t.topic === e && 'wc_sessionRequest' === t.request.method)
                  .forEach((e) => {
                    let r = e6('session_request', e.request.id);
                    if (0 === this.events.listenerCount(r))
                      throw Error(`emitting ${r} without any listeners`);
                    this.events.emit(e6('session_request', e.request.id), { error: t });
                  });
            }),
            o6(this, 'processSessionRequestQueue', () => {
              if (this.sessionRequestQueue.state === oH.active) {
                this.client.logger.info('session request queue is already active.');
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info('session request queue is empty.');
                return;
              }
              try {
                (this.sessionRequestQueue.state = oH.active), this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            o6(this, 'emitSessionRequest', (e) => {
              this.client.events.emit('session_request', e);
            }),
            o6(this, 'onPairingCreated', (e) => {
              if ((e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active))
                return;
              let t = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, i1.formatJsonRpcRequest)(
                    'wc_sessionPropose',
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  ),
                });
            }),
            o6(this, 'isValidConnect', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik(
                  'MISSING_OR_INVALID',
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: s,
                relays: n,
              } = e;
              if (
                (iq(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    t && !e
                      ? (r = !0)
                      : e &&
                        iL(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = iK(e);
                        }),
                    r
                  );
                })(n, !0))
              ) {
                let { message: e } = ik('MISSING_OR_INVALID', `connect() relays: ${n}`);
                throw Error(e);
              }
              iq(r) || 0 === iM(r) || this.validateNamespaces(r, 'requiredNamespaces'),
                iq(i) || 0 === iM(i) || this.validateNamespaces(i, 'optionalNamespaces'),
                iq(s) || this.validateSessionProps(s, 'sessionProperties');
            }),
            o6(this, 'validateNamespaces', (e, t) => {
              let r = (function (e, t, r) {
                let i = null;
                if (e && iM(e)) {
                  let s;
                  let n = iF(e, t);
                  n && (i = n);
                  let o =
                    ((s = null),
                    Object.entries(e).forEach(([e, i]) => {
                      var n, o;
                      let a;
                      if (s) return;
                      let c =
                        ((n = e$(e, i)),
                        (o = `${t} ${r}`),
                        (a = null),
                        iL(n) && n.length
                          ? n.forEach((e) => {
                              a ||
                                iz(e) ||
                                (a = iU(
                                  'UNSUPPORTED_CHAINS',
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : iz(e) ||
                            (a = iU(
                              'UNSUPPORTED_CHAINS',
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (s = c);
                    }),
                    s);
                  o && (i = o);
                } else i = ik('MISSING_OR_INVALID', `${t}, ${r} should be an object with data`);
                return i;
              })(e, 'connect()', t);
              if (r) throw Error(r.message);
            }),
            o6(this, 'isValidApprove', async (e) => {
              if (!iH(e)) throw Error(ik('MISSING_OR_INVALID', `approve() params: ${e}`).message);
              let { id: t, namespaces: r, relayProtocol: i, sessionProperties: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let n = this.client.proposal.get(t),
                o = iV(r, 'approve()');
              if (o) throw Error(o.message);
              let a = iW(n.requiredNamespaces, r, 'approve()');
              if (a) throw Error(a.message);
              if (!ij(i, !0)) {
                let { message: e } = ik('MISSING_OR_INVALID', `approve() relayProtocol: ${i}`);
                throw Error(e);
              }
              iq(s) || this.validateSessionProps(s, 'sessionProperties');
            }),
            o6(this, 'isValidReject', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `reject() params: ${e}`);
                throw Error(t);
              }
              let { id: t, reason: r } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    'object' != typeof e ||
                    !e.code ||
                    !iB(e.code, !1) ||
                    !e.message ||
                    !ij(e.message, !1)
                  );
                })(r))
              ) {
                let { message: e } = ik(
                  'MISSING_OR_INVALID',
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            o6(this, 'isValidSessionSettleRequest', (e) => {
              if (!iH(e)) {
                let { message: t } = ik(
                  'MISSING_OR_INVALID',
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: r, namespaces: i, expiry: s } = e;
              if (!iK(t)) {
                let { message: e } = ik(
                  'MISSING_OR_INVALID',
                  'onSessionSettleRequest() relay protocol should be a string'
                );
                throw Error(e);
              }
              let n = (function (e, t) {
                let r = null;
                return (
                  ij(e?.publicKey, !1) ||
                    (r = ik('MISSING_OR_INVALID', `${t} controller public key should be a string`)),
                  r
                );
              })(r, 'onSessionSettleRequest()');
              if (n) throw Error(n.message);
              let o = iV(i, 'onSessionSettleRequest()');
              if (o) throw Error(o.message);
              if (e5(s)) {
                let { message: e } = ik('EXPIRED', 'onSessionSettleRequest()');
                throw Error(e);
              }
            }),
            o6(this, 'isValidUpdate', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `update() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                s = iV(r, 'update()');
              if (s) throw Error(s.message);
              let n = iW(i.requiredNamespaces, r, 'update()');
              if (n) throw Error(n.message);
            }),
            o6(this, 'isValidExtend', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `extend() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            o6(this, 'isValidRequest', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `request() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, request: r, chainId: i, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!iJ(n, i)) {
                let { message: e } = ik('MISSING_OR_INVALID', `request() chainId: ${i}`);
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(iq(e) || !ij(e.method, !1));
                })(r)
              ) {
                let { message: e } = ik('MISSING_OR_INVALID', `request() ${JSON.stringify(r)}`);
                throw Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!ij(r, !1) &&
                    (function (e, t) {
                      let r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          iP(e.accounts).includes(t) && r.push(...e.methods);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(n, i, r.method)
              ) {
                let { message: e } = ik('MISSING_OR_INVALID', `request() method: ${r.method}`);
                throw Error(e);
              }
              if (
                s &&
                !(function (e, t) {
                  return iB(e, !1) && e <= t.max && e >= t.min;
                })(s, oK)
              ) {
                let { message: e } = ik(
                  'MISSING_OR_INVALID',
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${oK.min} and ${oK.max}`
                );
                throw Error(e);
              }
            }),
            o6(this, 'isValidRespond', async (e) => {
              var t;
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `respond() params: ${e}`);
                throw Error(t);
              }
              let { topic: r, response: i } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (r) {
                throw (null != (t = e?.response) && t.id && this.cleanupAfterResponse(e), r);
              }
              if (
                !(function (e) {
                  return !(
                    iq(e) ||
                    (iq(e.result) && iq(e.error)) ||
                    !iB(e.id, !1) ||
                    !ij(e.jsonrpc, !1)
                  );
                })(i)
              ) {
                let { message: e } = ik(
                  'MISSING_OR_INVALID',
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            o6(this, 'isValidPing', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            o6(this, 'isValidEmit', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `emit() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!iJ(s, i)) {
                let { message: e } = ik('MISSING_OR_INVALID', `emit() chainId: ${i}`);
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(iq(e) || !ij(e.name, !1));
                })(r) ||
                !(function (e, t, r) {
                  return (
                    !!ij(r, !1) &&
                    (function (e, t) {
                      let r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          iP(e.accounts).includes(t) && r.push(...e.events);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(s, i, r.name)
              ) {
                let { message: e } = ik('MISSING_OR_INVALID', `emit() event: ${JSON.stringify(r)}`);
                throw Error(e);
              }
            }),
            o6(this, 'isValidDisconnect', async (e) => {
              if (!iH(e)) {
                let { message: t } = ik('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            o6(this, 'isValidAuthenticate', (e) => {
              let { chains: t, uri: r, domain: i, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error('chains is required and must be a non-empty array');
              if (!ij(r, !1)) throw Error('uri is required parameter');
              if (!ij(i, !1)) throw Error('domain is required parameter');
              if (!ij(s, !1)) throw Error('nonce is required parameter');
              if ([...new Set(t.map((e) => eB(e).namespace))].length > 1)
                throw Error(
                  'Multi-namespace requests are not supported. Please request single namespace only.'
                );
              let { namespace: n } = eB(t[0]);
              if ('eip155' !== n)
                throw Error(
                  'Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.'
                );
            }),
            o6(this, 'getVerifyContext', async (e) => {
              let { attestationId: t, hash: r, encryptedId: i, metadata: s, transportType: n } = e,
                o = {
                  verified: {
                    verifyUrl: s.verifyUrl || sp,
                    validation: 'UNKNOWN',
                    origin: s.url || '',
                  },
                };
              try {
                if (n === so.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, n);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin ? 'VALID' : 'INVALID'),
                    o
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(s.url).origin ? 'VALID' : 'INVALID'));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`), o;
            }),
            o6(this, 'validateSessionProps', (e, t) => {
              Object.values(e).forEach((e) => {
                if (!ij(e, !1)) {
                  let { message: r } = ik(
                    'MISSING_OR_INVALID',
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`
                  );
                  throw Error(r);
                }
              });
            }),
            o6(this, 'getPendingAuthRequest', (e) => {
              let t = this.client.auth.requests.get(e);
              return 'object' == typeof t ? t : void 0;
            }),
            o6(this, 'addToRecentlyDeleted', (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let r of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(r);
                }
              }
            }),
            o6(this, 'checkRecentlyDeleted', (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: r } = ik(
                  'MISSING_OR_INVALID',
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(r);
              }
            }),
            o6(this, 'isLinkModeEnabled', (e, t) => {
              var i, s, n, o, a, c, l, h, u;
              return (
                !!e &&
                t === so.link_mode &&
                (null == (s = null == (i = this.client.metadata) ? void 0 : i.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null == (o = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : o.universal) !== void 0 &&
                (null == (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                  ? void 0
                  : c.universal) !== '' &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== void 0 &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== '' &&
                (null == (u = e?.redirect) ? void 0 : u.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(e.redirect.universal) &&
                'u' > typeof (null == r.g ? void 0 : r.g.Linking)
              );
            }),
            o6(this, 'getAppLinkIfEnabled', (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = e?.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            o6(this, 'handleLinkModeMessage', ({ url: e }) => {
              if (!e || !e.includes('wc_ev') || !e.includes('topic')) return;
              let t = te(e, 'topic') || '',
                r = decodeURIComponent(te(e, 'wc_ev') || ''),
                i = this.client.session.keys.includes(t);
              i && this.client.session.update(t, { transportType: so.link_mode }),
                this.client.core.dispatchEnvelope({ topic: t, message: r, sessionExists: i });
            }),
            o6(this, 'registerLinkModeListeners', async () => {
              var e;
              if (tr() || (eK() && null != (e = this.client.metadata.redirect) && e.linkMode)) {
                let e = null == r.g ? void 0 : r.g.Linking;
                if ('u' > typeof e) {
                  e.addEventListener('url', this.handleLinkModeMessage, this.client.name);
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            }),
            o6(this, 'shouldSetTVF', (e, t) => {
              if (!t || 'wc_sessionRequest' !== e) return !1;
              let { request: r } = t;
              return Object.keys(oJ).includes(r.method);
            }),
            o6(this, 'getTVFParams', (e, t, r) => {
              var i, s;
              try {
                let n = t.request.method,
                  o = this.extractTxHashesFromResult(n, r);
                return o5(
                  o8(
                    { correlationId: e, rpcMethods: [n], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null == (s = null == (i = t.request.params) ? void 0 : i[0])
                          ? void 0
                          : s.to,
                      ],
                    }
                  ),
                  { txHashes: o }
                );
              } catch (e) {
                this.client.logger.warn('Error getting TVF params', e);
              }
              return {};
            }),
            o6(this, 'isValidContractData', (e) => {
              var t;
              if (!e) return !1;
              try {
                let r = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!r.startsWith('0x')) return !1;
                let i = r.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(i) && i.length % 2 == 0;
              } catch {}
              return !1;
            }),
            o6(this, 'extractTxHashesFromResult', (e, t) => {
              try {
                let r = oJ[e];
                if ('string' == typeof t) return [t];
                let i = t[r.key];
                if (iL(i)) return i;
                if ('string' == typeof i) return [i];
              } catch (e) {
                this.client.logger.warn('Error extracting tx hashes from result', e);
              }
              return [];
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ik('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(si.message, (e) => {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(e)
              : this.onRelayMessage(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: r, attestation: i, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(oY)
              ? this.client.auth.authKeys.get(oY)
              : { responseTopic: void 0, publicKey: void 0 },
            o = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: n,
              encoding: s === so.link_mode ? ii : ir,
            });
          try {
            (0, i1.isJsonRpcRequest)(o)
              ? (this.client.core.history.set(t, o),
                this.onRelayEventRequest({
                  topic: t,
                  payload: o,
                  attestation: i,
                  transportType: s,
                  encryptedId: ic(r),
                }))
              : (0, i1.isJsonRpcResponse)(o)
                ? (await this.client.core.history.resolve(o),
                  await this.onRelayEventResponse({ topic: t, payload: o, transportType: s }),
                  this.client.core.history.delete(t, o.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: o, transportType: s });
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(sf.expired, async (e) => {
            let { topic: t, id: r } = e3(e.target);
            return r && this.client.pendingRequest.keys.includes(r)
              ? await this.deletePendingSessionRequest(r, ik('EXPIRED'), !0)
              : r && this.client.auth.requests.keys.includes(r)
                ? await this.deletePendingAuthRequest(r, ik('EXPIRED'), !0)
                : void (t
                    ? this.client.session.keys.includes(t) &&
                      (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
                      this.client.events.emit('session_expire', { topic: t }))
                    : r &&
                      (await this.deleteProposal(r, !0),
                      this.client.events.emit('proposal_expire', { id: r })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(su.create, (e) => this.onPairingCreated(e)),
            this.client.core.pairing.events.on(su.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, 'pairing');
            });
        }
        isValidPairingTopic(e) {
          if (!ij(e, !1)) {
            let { message: t } = ik('MISSING_OR_INVALID', `pairing topic should be a string: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = ik('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (e5(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = ik('EXPIRED', `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!ij(e, !1)) {
            let { message: t } = ik('MISSING_OR_INVALID', `session topic should be a string: ${e}`);
            throw Error(t);
          }
          if ((this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))) {
            let { message: t } = ik('NO_MATCHING_KEY', `session topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (e5(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = ik('EXPIRED', `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = ik(
              'MISSING_OR_INVALID',
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if ((this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)))
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
          else if (ij(e, !1)) {
            let { message: t } = ik(
              'NO_MATCHING_KEY',
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = ik(
              'MISSING_OR_INVALID',
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ('number' != typeof e) {
            let { message: t } = ik('MISSING_OR_INVALID', `proposal id should be a number: ${e}`);
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = ik('NO_MATCHING_KEY', `proposal id doesn't exist: ${e}`);
            throw Error(t);
          }
          if (e5(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = ik('EXPIRED', `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class o9 extends ot {
        constructor(e, t) {
          super(e, t, 'proposal', oj), (this.core = e), (this.logger = t);
        }
      }
      class o7 extends ot {
        constructor(e, t) {
          super(e, t, 'session', oj), (this.core = e), (this.logger = t);
        }
      }
      class ae extends ot {
        constructor(e, t) {
          super(e, t, 'request', oj, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      class at extends ot {
        constructor(e, t) {
          super(e, t, 'authKeys', oG, () => oY), (this.core = e), (this.logger = t);
        }
      }
      class ar extends ot {
        constructor(e, t) {
          super(e, t, 'pairingTopics', oG), (this.core = e), (this.logger = t);
        }
      }
      class ai extends ot {
        constructor(e, t) {
          super(e, t, 'requests', oG, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      var as = Object.defineProperty,
        an = (e, t, r) =>
          t in e
            ? as(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ao = (e, t, r) => an(e, 'symbol' != typeof t ? t + '' : t, r);
      class aa {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            ao(this, 'authKeys'),
            ao(this, 'pairingTopics'),
            ao(this, 'requests'),
            (this.authKeys = new at(this.core, this.logger)),
            (this.pairingTopics = new ar(this.core, this.logger)),
            (this.requests = new ai(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
        }
      }
      var ac = Object.defineProperty,
        al = (e, t, r) =>
          t in e
            ? ac(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ah = (e, t, r) => al(e, 'symbol' != typeof t ? t + '' : t, r);
      class au extends l.S9 {
        constructor(e) {
          super(e),
            ah(this, 'protocol', 'wc'),
            ah(this, 'version', 2),
            ah(this, 'name', oB.name),
            ah(this, 'metadata'),
            ah(this, 'core'),
            ah(this, 'logger'),
            ah(this, 'events', new s.EventEmitter()),
            ah(this, 'engine'),
            ah(this, 'session'),
            ah(this, 'proposal'),
            ah(this, 'pendingRequest'),
            ah(this, 'auth'),
            ah(this, 'signConfig'),
            ah(this, 'on', (e, t) => this.events.on(e, t)),
            ah(this, 'once', (e, t) => this.events.once(e, t)),
            ah(this, 'off', (e, t) => this.events.off(e, t)),
            ah(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            ah(this, 'removeAllListeners', (e) => this.events.removeAllListeners(e)),
            ah(this, 'connect', async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'pair', async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'approve', async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'reject', async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'update', async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'extend', async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'request', async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'respond', async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'ping', async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'emit', async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'disconnect', async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'find', (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'getPendingSessionRequests', () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'authenticate', async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'formatAuthMessage', (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'approveSessionAuthenticate', async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            ah(this, 'rejectSessionAuthenticate', async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || oB.name),
            (this.metadata = e?.metadata || eG()),
            (this.signConfig = e?.signConfig);
          let t =
            'u' > typeof e?.logger && 'string' != typeof e?.logger
              ? e.logger
              : (0, c.h6)((0, c.iP)({ level: e?.logger || oB.logger }));
          (this.core = e?.core || new oM(e)),
            (this.logger = (0, c.U5)(t, this.name)),
            (this.session = new o7(this.core, this.logger)),
            (this.proposal = new o9(this.core, this.logger)),
            (this.pendingRequest = new ae(this.core, this.logger)),
            (this.engine = new o4(this)),
            (this.auth = new aa(this.core, this.logger));
        }
        static async init(e) {
          let t = new au(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, c.oI)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info('SignClient Initialization Success'),
              setTimeout(
                () => {
                  this.engine.processRelayMessageCache();
                },
                (0, h.toMiliseconds)(h.ONE_SECOND)
              );
          } catch (e) {
            throw (
              (this.logger.info('SignClient Initialization Failure'),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      let ad = o7,
        af = au;
    },
    60172: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => l });
      var i = r(35978),
        s = r(41035),
        n = r(32034);
      let o = () =>
          'u' > typeof WebSocket ||
          ('u' > typeof r.g && 'u' > typeof r.g.WebSocket) ||
          ('u' > typeof window && 'u' > typeof window.WebSocket) ||
          ('u' > typeof self && 'u' > typeof self.WebSocket),
        a = (e) => e.split('?')[0],
        c =
          'u' > typeof WebSocket
            ? WebSocket
            : 'u' > typeof r.g && 'u' > typeof r.g.WebSocket
              ? r.g.WebSocket
              : 'u' > typeof window && 'u' > typeof window.WebSocket
                ? window.WebSocket
                : 'u' > typeof self && 'u' > typeof self.WebSocket
                  ? self.WebSocket
                  : r(66593);
      class l {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new i.EventEmitter()),
            (this.registering = !1),
            !(0, n.isWsUrl)(e))
          )
            throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          this.url = e;
        }
        get connected() {
          return 'u' > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > 'u') {
              t(Error('Connection already closed'));
              return;
            }
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > 'u' && (this.socket = await this.register());
          try {
            this.socket.send((0, s.h)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!(0, n.isWsUrl)(e))
            throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount('register_error') >= e ||
                this.events.listenerCount('open') >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once('register_error', (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once('open', () => {
                    if ((this.resetMaxListeners(), typeof this.socket > 'u'))
                      return t(Error('WebSocket connection is missing or invalid'));
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, r) => {
              let i = (0, n.isReactNative)()
                  ? void 0
                  : { rejectUnauthorized: !(0, n.isLocalhostUrl)(e) },
                s = new c(e, [], i);
              o()
                ? (s.onerror = (e) => {
                    r(this.emitError(e.error));
                  })
                : s.on('error', (e) => {
                    r(this.emitError(e));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), t(s);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit('open');
        }
        onClose(e) {
          (this.socket = void 0), (this.registering = !1), this.events.emit('close', e);
        }
        onPayload(e) {
          if (typeof e.data > 'u') return;
          let t = 'string' == typeof e.data ? (0, s.j)(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = r.message || r.toString(),
            s = (0, n.formatJsonRpcError)(e, i);
          this.events.emit('payload', s);
        }
        parseError(e, t = this.url) {
          return (0, n.parseConnectionError)(e, a(t), 'WS');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(e?.message || `WebSocket connection failed for host: ${a(this.url)}`)
          );
          return this.events.emit('register_error', t), t;
        }
      }
    },
    65696: (e) => {
      'use strict';
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var s = (i && i.stringify) || t;
        if ('object' == typeof e && null !== e) {
          var n = r.length + 1;
          if (1 === n) return e;
          var o = Array(n);
          o[0] = s(e);
          for (var a = 1; a < n; a++) o[a] = s(r[a]);
          return o.join(' ');
        }
        if ('string' != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (var l = '', h = 0, u = -1, d = (e && e.length) || 0, f = 0; f < d; ) {
          if (37 === e.charCodeAt(f) && f + 1 < d) {
            switch (((u = u > -1 ? u : 0), e.charCodeAt(f + 1))) {
              case 100:
              case 102:
                if (h >= c || null == r[h]) break;
                u < f && (l += e.slice(u, f)), (l += Number(r[h])), (u = f + 2), f++;
                break;
              case 105:
                if (h >= c || null == r[h]) break;
                u < f && (l += e.slice(u, f)), (l += Math.floor(Number(r[h]))), (u = f + 2), f++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c || void 0 === r[h]) break;
                u < f && (l += e.slice(u, f));
                var p = typeof r[h];
                if ('string' === p) {
                  (l += "'" + r[h] + "'"), (u = f + 2), f++;
                  break;
                }
                if ('function' === p) {
                  (l += r[h].name || '<anonymous>'), (u = f + 2), f++;
                  break;
                }
                (l += s(r[h])), (u = f + 2), f++;
                break;
              case 115:
                if (h >= c) break;
                u < f && (l += e.slice(u, f)), (l += String(r[h])), (u = f + 2), f++;
                break;
              case 37:
                u < f && (l += e.slice(u, f)), (l += '%'), (u = f + 2), f++, h--;
            }
            ++h;
          }
          ++f;
        }
        return -1 === u ? e : (u < d && (l += e.slice(u)), l);
      };
    },
    65828: (e, t, r) => {
      'use strict';
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function s() {
        let e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = s),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!s();
        });
    },
    66593: (e) => {
      'use strict';
      e.exports = function () {
        throw Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        );
      };
    },
    66890: (e, t, r) => {
      'use strict';
      t.g = void 0;
      let i = r(80985);
      t.g = function () {
        let e, t, r;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function s(...t) {
          let r = e.getElementsByTagName('meta');
          for (let e = 0; e < r.length; e++) {
            let i = r[e],
              s = ['itemprop', 'property', 'name']
                .map((e) => i.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (s.length && s) {
              let e = i.getAttribute('content');
              if (e) return e;
            }
          }
          return '';
        }
        let n = ((r = s('name', 'og:site_name', 'og:title', 'twitter:title')) || (r = e.title), r),
          o = s('description', 'og:description', 'twitter:description', 'keywords'),
          a = t.origin;
        return {
          description: o,
          url: a,
          icons: (function () {
            let r = e.getElementsByTagName('link'),
              i = [];
            for (let e = 0; e < r.length; e++) {
              let s = r[e],
                n = s.getAttribute('rel');
              if (n && n.toLowerCase().indexOf('icon') > -1) {
                let e = s.getAttribute('href');
                if (e) {
                  if (
                    -1 === e.toLowerCase().indexOf('https:') &&
                    -1 === e.toLowerCase().indexOf('http:') &&
                    0 !== e.indexOf('//')
                  ) {
                    let r = t.protocol + '//' + t.host;
                    if (0 === e.indexOf('/')) r += e;
                    else {
                      let i = t.pathname.split('/');
                      i.pop(), (r += i.join('/') + '/' + e);
                    }
                    i.push(r);
                  } else if (0 === e.indexOf('//')) {
                    let r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
                }
              }
            }
            return i;
          })(),
          name: n,
        };
      };
    },
    69145: (e, t, r) => {
      'use strict';
      r.d(t, { o0: () => f });
      var i = r(29143),
        s = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var i, s = 0, n = t.length; s < n; s++)
              (!i && s in t) || (i || (i = Array.prototype.slice.call(t, 0, s)), (i[s] = t[s]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        n = function (e, t, r) {
          (this.name = e), (this.version = t), (this.os = r), (this.type = 'browser');
        },
        o = function (e) {
          (this.version = e), (this.type = 'node'), (this.name = 'node'), (this.os = i.platform);
        },
        a = function (e, t, r, i) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = i),
            (this.type = 'bot-device');
        },
        c = function () {
          (this.type = 'bot'),
            (this.bot = !0),
            (this.name = 'bot'),
            (this.version = null),
            (this.os = null);
        },
        l = function () {
          (this.type = 'react-native'),
            (this.name = 'react-native'),
            (this.version = null),
            (this.os = null);
        },
        h = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        u = [
          ['aol', /AOLShield\/([0-9\._]+)/],
          ['edge', /Edge\/([0-9\._]+)/],
          ['edge-ios', /EdgiOS\/([0-9\._]+)/],
          ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
          ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
          ['samsung', /SamsungBrowser\/([0-9\.]+)/],
          ['silk', /\bSilk\/([0-9._-]+)\b/],
          ['miui', /MiuiBrowser\/([0-9\.]+)$/],
          ['beaker', /BeakerBrowser\/([0-9\.]+)/],
          ['edge-chromium', /EdgA?\/([0-9\.]+)/],
          ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
          ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
          ['fxios', /FxiOS\/([0-9\.]+)/],
          ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
          ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
          ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
          ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            'pie',
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ['ie', /MSIE\s(7\.0)/],
          ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ['android', /Android\s([0-9\.]+)/],
          ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ['safari', /Version\/([0-9\._]+).*Safari/],
          ['facebook', /FB[AS]V\/([0-9\.]+)/],
          ['instagram', /Instagram\s([0-9\.]+)/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ['curl', /^curl\/([0-9\.]+)$/],
          [
            'searchbot',
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        d = [
          ['iOS', /iP(hone|od|ad)/],
          ['Android OS', /Android/],
          ['BlackBerry OS', /BlackBerry|BB10/],
          ['Windows Mobile', /IEMobile/],
          ['Amazon OS', /Kindle/],
          ['Windows 3.11', /Win16/],
          ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
          ['Windows 98', /(Windows 98)|(Win98)/],
          ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
          ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
          ['Windows Server 2003', /(Windows NT 5.2)/],
          ['Windows Vista', /(Windows NT 6.0)/],
          ['Windows 7', /(Windows NT 6.1)/],
          ['Windows 8', /(Windows NT 6.2)/],
          ['Windows 8.1', /(Windows NT 6.3)/],
          ['Windows 10', /(Windows NT 10.0)/],
          ['Windows ME', /Windows ME/],
          ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ['Open BSD', /OpenBSD/],
          ['Sun OS', /SunOS/],
          ['Chrome OS', /CrOS/],
          ['Linux', /(Linux)|(X11)/],
          ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
          ['QNX', /QNX/],
          ['BeOS', /BeOS/],
          ['OS/2', /OS\/2/],
        ];
      function f(e) {
        return e
          ? p(e)
          : 'undefined' == typeof document &&
              'undefined' != typeof navigator &&
              'ReactNative' === navigator.product
            ? new l()
            : 'undefined' != typeof navigator
              ? p(navigator.userAgent)
              : void 0 !== i && i.version
                ? new o(i.version.slice(1))
                : null;
      }
      function p(e) {
        var t,
          r =
            '' !== (t = e) &&
            u.reduce(function (e, r) {
              var i = r[0],
                s = r[1];
              if (e) return e;
              var n = s.exec(t);
              return !!n && [i, n];
            }, !1);
        if (!r) return null;
        var i = r[0],
          o = r[1];
        if ('searchbot' === i) return new c();
        var l = o[1] && o[1].split('.').join('_').split('_').slice(0, 3);
        l
          ? l.length < 3 &&
            (l = s(
              s([], l, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push('0');
                return t;
              })(3 - l.length),
              !0
            ))
          : (l = []);
        var f = l.join('.'),
          p = (function (e) {
            for (var t = 0, r = d.length; t < r; t++) {
              var i = d[t],
                s = i[0];
              if (i[1].exec(e)) return s;
            }
            return null;
          })(e),
          g = h.exec(e);
        return g && g[1] ? new a(i, f, p, g[1]) : new n(i, f, p);
      }
    },
    72091: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(54565);
      i.__exportStar(r(5505), t), i.__exportStar(r(99236), t);
    },
    76257: (e, t, r) => {
      'use strict';
      r.d(t, { ER: () => n, Im: () => c, dZ: () => l, eX: () => o, e_: () => a });
      var i = r(8468),
        s = r(83523);
      function n(e = 3) {
        return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e));
      }
      function o(e = 6) {
        return BigInt(n(e));
      }
      function a(e, t, r) {
        return { id: r || n(), jsonrpc: '2.0', method: e, params: t };
      }
      function c(e, t) {
        return { id: e, jsonrpc: '2.0', result: t };
      }
      function l(e, t, r) {
        var n, o;
        return {
          id: e,
          jsonrpc: '2.0',
          error:
            ((n = t),
            (o = r),
            void 0 === n
              ? (0, i.vG)(s.zR)
              : ('string' == typeof n &&
                  (n = Object.assign(Object.assign({}, (0, i.vG)(s.fO)), { message: n })),
                void 0 !== o && (n.data = o),
                (0, i.mE)(n.code) && (n = (0, i.rI)(n.code)),
                n)),
        };
      }
    },
    79792: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    80904: (e, t, r) => {
      'use strict';
      var i = r(29143);
      function s() {
        return (
          'undefined' == typeof document &&
          'undefined' != typeof navigator &&
          'ReactNative' === navigator.product
        );
      }
      function n() {
        return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = s),
        (t.isNode = n),
        (t.isBrowser = function () {
          return !s() && !n();
        });
    },
    80985: (e, t) => {
      'use strict';
      function r(e) {
        let t;
        return 'undefined' != typeof window && void 0 !== window[e] && (t = window[e]), t;
      }
      function i(e) {
        let t = r(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i('document');
        }),
        (t.getDocument = function () {
          return r('document');
        }),
        (t.getNavigatorOrThrow = function () {
          return i('navigator');
        }),
        (t.getNavigator = function () {
          return r('navigator');
        }),
        (t.getLocationOrThrow = function () {
          return i('location');
        }),
        (t.getLocation = function () {
          return r('location');
        }),
        (t.getCryptoOrThrow = function () {
          return i('crypto');
        }),
        (t.getCrypto = function () {
          return r('crypto');
        }),
        (t.getLocalStorageOrThrow = function () {
          return i('localStorage');
        }),
        (t.getLocalStorage = function () {
          return r('localStorage');
        });
    },
    83523: (e, t, r) => {
      'use strict';
      r.d(t, { Uf: () => o, XW: () => a, fO: () => s, jf: () => n, zR: () => i });
      let i = 'INTERNAL_ERROR',
        s = 'SERVER_ERROR',
        n = [-32700, -32600, -32601, -32602, -32603],
        o = {
          PARSE_ERROR: { code: -32700, message: 'Parse error' },
          INVALID_REQUEST: { code: -32600, message: 'Invalid Request' },
          METHOD_NOT_FOUND: { code: -32601, message: 'Method not found' },
          INVALID_PARAMS: { code: -32602, message: 'Invalid params' },
          [i]: { code: -32603, message: 'Internal error' },
          [s]: { code: -32e3, message: 'Server error' },
        },
        a = s;
    },
    84214: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => n });
      var i = r(35978),
        s = r(32034);
      class n extends s.IJsonRpcProvider {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            (0, s.formatJsonRpcRequest)(
              e.method,
              e.params || [],
              e.id || (0, s.getBigIntRpcId)().toString()
            ),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                i(e);
              }
            this.events.on(`${e.id}`, (e) => {
              (0, s.isJsonRpcError)(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              i(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit('payload', e),
            (0, s.isJsonRpcResponse)(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit('message', { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              'error',
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ''}`
              )
            ),
            this.events.emit('disconnect');
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            'string' == typeof e && (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit('connect'));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on('payload', (e) => this.onPayload(e)),
            this.connection.on('close', (e) => this.onClose(e)),
            this.connection.on('error', (e) => this.events.emit('error', e)),
            this.connection.on('register_error', (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
    },
    84719: (e, t, r) => {
      e = r.nmd(e);
      var i,
        s,
        n = '__lodash_hash_undefined__',
        o = '[object Arguments]',
        a = '[object Array]',
        c = '[object Boolean]',
        l = '[object Date]',
        h = '[object Error]',
        u = '[object Function]',
        d = '[object Map]',
        f = '[object Number]',
        p = '[object Object]',
        g = '[object Promise]',
        y = '[object RegExp]',
        b = '[object Set]',
        m = '[object String]',
        v = '[object WeakMap]',
        w = '[object ArrayBuffer]',
        E = '[object DataView]',
        _ = /^\[object .+?Constructor\]$/,
        I = /^(?:0|[1-9]\d*)$/,
        x = {};
      (x['[object Float32Array]'] =
        x['[object Float64Array]'] =
        x['[object Int8Array]'] =
        x['[object Int16Array]'] =
        x['[object Int32Array]'] =
        x['[object Uint8Array]'] =
        x['[object Uint8ClampedArray]'] =
        x['[object Uint16Array]'] =
        x['[object Uint32Array]'] =
          !0),
        (x[o] =
          x[a] =
          x[w] =
          x[c] =
          x[E] =
          x[l] =
          x[h] =
          x[u] =
          x[d] =
          x[f] =
          x[p] =
          x[y] =
          x[b] =
          x[m] =
          x[v] =
            !1);
      var S = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
        D = 'object' == typeof self && self && self.Object === Object && self,
        O = S || D || Function('return this')(),
        A = t && !t.nodeType && t,
        P = A && e && !e.nodeType && e,
        R = P && P.exports === A,
        N = R && S.process,
        T = (function () {
          try {
            return N && N.binding && N.binding('util');
          } catch (e) {}
        })(),
        C = T && T.isTypedArray;
      function k(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, i) {
            r[++t] = [i, e];
          }),
          r
        );
      }
      function U(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var L = Array.prototype,
        M = Function.prototype,
        q = Object.prototype,
        j = O['__core-js_shared__'],
        B = M.toString,
        z = q.hasOwnProperty,
        $ = (function () {
          var e = /[^.]+$/.exec((j && j.keys && j.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })(),
        F = q.toString,
        V = RegExp(
          '^' +
            B.call(z)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
        ),
        K = R ? O.Buffer : void 0,
        H = O.Symbol,
        J = O.Uint8Array,
        W = q.propertyIsEnumerable,
        G = L.splice,
        Y = H ? H.toStringTag : void 0,
        Q = Object.getOwnPropertySymbols,
        Z = K ? K.isBuffer : void 0,
        X =
          ((i = Object.keys),
          (s = Object),
          function (e) {
            return i(s(e));
          }),
        ee = ex(O, 'DataView'),
        et = ex(O, 'Map'),
        er = ex(O, 'Promise'),
        ei = ex(O, 'Set'),
        es = ex(O, 'WeakMap'),
        en = ex(Object, 'create'),
        eo = eO(ee),
        ea = eO(et),
        ec = eO(er),
        el = eO(ei),
        eh = eO(es),
        eu = H ? H.prototype : void 0,
        ed = eu ? eu.valueOf : void 0;
      function ef(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ep(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function eg(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ey(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new eg(); ++t < r; ) this.add(e[t]);
      }
      function eb(e) {
        var t = (this.__data__ = new ep(e));
        this.size = t.size;
      }
      function em(e, t) {
        for (var r = e.length; r--; ) if (eA(e[r][0], t)) return r;
        return -1;
      }
      function ev(e) {
        var t;
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Y && Y in Object(e)
            ? (function (e) {
                var t = z.call(e, Y),
                  r = e[Y];
                try {
                  e[Y] = void 0;
                  var i = !0;
                } catch (e) {}
                var s = F.call(e);
                return i && (t ? (e[Y] = r) : delete e[Y]), s;
              })(e)
            : ((t = e), F.call(t));
      }
      function ew(e) {
        return eU(e) && ev(e) == o;
      }
      function eE(e, t, r, i, s, n) {
        var o = 1 & r,
          a = e.length,
          c = t.length;
        if (a != c && !(o && c > a)) return !1;
        var l = n.get(e);
        if (l && n.get(t)) return l == t;
        var h = -1,
          u = !0,
          d = 2 & r ? new ey() : void 0;
        for (n.set(e, t), n.set(t, e); ++h < a; ) {
          var f = e[h],
            p = t[h];
          if (i) var g = o ? i(p, f, h, t, e, n) : i(f, p, h, e, t, n);
          if (void 0 !== g) {
            if (g) continue;
            u = !1;
            break;
          }
          if (d) {
            if (
              !(function (e, t) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                  if (t(e[r], r, e)) return !0;
                return !1;
              })(t, function (e, t) {
                if (!d.has(t) && (f === e || s(f, e, r, i, n))) return d.push(t);
              })
            ) {
              u = !1;
              break;
            }
          } else if (!(f === p || s(f, p, r, i, n))) {
            u = !1;
            break;
          }
        }
        return n.delete(e), n.delete(t), u;
      }
      function e_(e) {
        var t;
        return (
          (t = eM(e)),
          eR(e)
            ? t
            : (function (e, t) {
                for (var r = -1, i = t.length, s = e.length; ++r < i; ) e[s + r] = t[r];
                return e;
              })(t, eS(e))
        );
      }
      function eI(e, t) {
        var r,
          i,
          s = e.__data__;
        return (
          'string' == (i = typeof (r = t)) || 'number' == i || 'symbol' == i || 'boolean' == i
            ? '__proto__' !== r
            : null === r
        )
          ? s['string' == typeof t ? 'string' : 'hash']
          : s.map;
      }
      function ex(e, t) {
        var r,
          i = null == e ? void 0 : e[t];
        return !(!ek(i) || ((r = i), $ && $ in r)) && (eT(i) ? V : _).test(eO(i)) ? i : void 0;
      }
      (ef.prototype.clear = function () {
        (this.__data__ = en ? en(null) : {}), (this.size = 0);
      }),
        (ef.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= +!!t), t;
        }),
        (ef.prototype.get = function (e) {
          var t = this.__data__;
          if (en) {
            var r = t[e];
            return r === n ? void 0 : r;
          }
          return z.call(t, e) ? t[e] : void 0;
        }),
        (ef.prototype.has = function (e) {
          var t = this.__data__;
          return en ? void 0 !== t[e] : z.call(t, e);
        }),
        (ef.prototype.set = function (e, t) {
          var r = this.__data__;
          return (this.size += +!this.has(e)), (r[e] = en && void 0 === t ? n : t), this;
        }),
        (ep.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (ep.prototype.delete = function (e) {
          var t = this.__data__,
            r = em(t, e);
          return !(r < 0) && (r == t.length - 1 ? t.pop() : G.call(t, r, 1), --this.size, !0);
        }),
        (ep.prototype.get = function (e) {
          var t = this.__data__,
            r = em(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (ep.prototype.has = function (e) {
          return em(this.__data__, e) > -1;
        }),
        (ep.prototype.set = function (e, t) {
          var r = this.__data__,
            i = em(r, e);
          return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
        }),
        (eg.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = { hash: new ef(), map: new (et || ep)(), string: new ef() });
        }),
        (eg.prototype.delete = function (e) {
          var t = eI(this, e).delete(e);
          return (this.size -= +!!t), t;
        }),
        (eg.prototype.get = function (e) {
          return eI(this, e).get(e);
        }),
        (eg.prototype.has = function (e) {
          return eI(this, e).has(e);
        }),
        (eg.prototype.set = function (e, t) {
          var r = eI(this, e),
            i = r.size;
          return r.set(e, t), (this.size += +(r.size != i)), this;
        }),
        (ey.prototype.add = ey.prototype.push =
          function (e) {
            return this.__data__.set(e, n), this;
          }),
        (ey.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (eb.prototype.clear = function () {
          (this.__data__ = new ep()), (this.size = 0);
        }),
        (eb.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (eb.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (eb.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (eb.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof ep) {
            var i = r.__data__;
            if (!et || i.length < 199) return i.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new eg(i);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var eS = Q
          ? function (e) {
              return null == e
                ? []
                : (function (e, t) {
                    for (var r = -1, i = null == e ? 0 : e.length, s = 0, n = []; ++r < i; ) {
                      var o = e[r];
                      t(o, r, e) && (n[s++] = o);
                    }
                    return n;
                  })(Q((e = Object(e))), function (t) {
                    return W.call(e, t);
                  });
            }
          : function () {
              return [];
            },
        eD = ev;
      function eO(e) {
        if (null != e) {
          try {
            return B.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      }
      function eA(e, t) {
        return e === t || (e != e && t != t);
      }
      ((ee && eD(new ee(new ArrayBuffer(1))) != E) ||
        (et && eD(new et()) != d) ||
        (er && eD(er.resolve()) != g) ||
        (ei && eD(new ei()) != b) ||
        (es && eD(new es()) != v)) &&
        (eD = function (e) {
          var t = ev(e),
            r = t == p ? e.constructor : void 0,
            i = r ? eO(r) : '';
          if (i)
            switch (i) {
              case eo:
                return E;
              case ea:
                return d;
              case ec:
                return g;
              case el:
                return b;
              case eh:
                return v;
            }
          return t;
        });
      var eP = ew(
          (function () {
            return arguments;
          })()
        )
          ? ew
          : function (e) {
              return eU(e) && z.call(e, 'callee') && !W.call(e, 'callee');
            },
        eR = Array.isArray,
        eN =
          Z ||
          function () {
            return !1;
          };
      function eT(e) {
        if (!ek(e)) return !1;
        var t = ev(e);
        return (
          t == u ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        );
      }
      function eC(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff;
      }
      function ek(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      }
      function eU(e) {
        return null != e && 'object' == typeof e;
      }
      var eL = C
        ? function (e) {
            return C(e);
          }
        : function (e) {
            return eU(e) && eC(e.length) && !!x[ev(e)];
          };
      function eM(e) {
        return null != e && eC(e.length) && !eT(e)
          ? (function (e, t) {
              var r,
                i,
                s = eR(e),
                n = !s && eP(e),
                o = !s && !n && eN(e),
                a = !s && !n && !o && eL(e),
                c = s || n || o || a,
                l = c
                  ? (function (e, t) {
                      for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
                      return i;
                    })(e.length, String)
                  : [],
                h = l.length;
              for (var u in e) {
                z.call(e, u) &&
                  !(
                    c &&
                    ('length' == u ||
                      (o && ('offset' == u || 'parent' == u)) ||
                      (a && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                      ((r = u),
                      (i = null == (i = h) ? 0x1fffffffffffff : i) &&
                        ('number' == typeof r || I.test(r)) &&
                        r > -1 &&
                        r % 1 == 0 &&
                        r < i))
                  ) &&
                  l.push(u);
              }
              return l;
            })(e)
          : (function (e) {
              if (
                ((r = (t = e) && t.constructor),
                t !== (('function' == typeof r && r.prototype) || q))
              )
                return X(e);
              var t,
                r,
                i = [];
              for (var s in Object(e)) z.call(e, s) && 'constructor' != s && i.push(s);
              return i;
            })(e);
      }
      e.exports = function (e, t) {
        return (function e(t, r, i, s, n) {
          return (
            t === r ||
            (null != t && null != r && (eU(t) || eU(r))
              ? (function (e, t, r, i, s, n) {
                  var u = eR(e),
                    g = eR(t),
                    v = u ? a : eD(e),
                    _ = g ? a : eD(t);
                  (v = v == o ? p : v), (_ = _ == o ? p : _);
                  var I = v == p,
                    x = _ == p,
                    S = v == _;
                  if (S && eN(e)) {
                    if (!eN(t)) return !1;
                    (u = !0), (I = !1);
                  }
                  if (S && !I)
                    return (
                      n || (n = new eb()),
                      u || eL(e)
                        ? eE(e, t, r, i, s, n)
                        : (function (e, t, r, i, s, n, o) {
                            switch (r) {
                              case E:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                  break;
                                (e = e.buffer), (t = t.buffer);
                              case w:
                                if (e.byteLength != t.byteLength || !n(new J(e), new J(t))) break;
                                return !0;
                              case c:
                              case l:
                              case f:
                                return eA(+e, +t);
                              case h:
                                return e.name == t.name && e.message == t.message;
                              case y:
                              case m:
                                return e == t + '';
                              case d:
                                var a = k;
                              case b:
                                var u = 1 & i;
                                if ((a || (a = U), e.size != t.size && !u)) break;
                                var p = o.get(e);
                                if (p) return p == t;
                                (i |= 2), o.set(e, t);
                                var g = eE(a(e), a(t), i, s, n, o);
                                return o.delete(e), g;
                              case '[object Symbol]':
                                if (ed) return ed.call(e) == ed.call(t);
                            }
                            return !1;
                          })(e, t, v, r, i, s, n)
                    );
                  if (!(1 & r)) {
                    var D = I && z.call(e, '__wrapped__'),
                      O = x && z.call(t, '__wrapped__');
                    if (D || O) {
                      var A = D ? e.value() : e,
                        P = O ? t.value() : t;
                      return n || (n = new eb()), s(A, P, r, i, n);
                    }
                  }
                  return (
                    !!S &&
                    (n || (n = new eb()),
                    (function (e, t, r, i, s, n) {
                      var o = 1 & r,
                        a = e_(e),
                        c = a.length;
                      if (c != e_(t).length && !o) return !1;
                      for (var l = c; l--; ) {
                        var h = a[l];
                        if (!(o ? h in t : z.call(t, h))) return !1;
                      }
                      var u = n.get(e);
                      if (u && n.get(t)) return u == t;
                      var d = !0;
                      n.set(e, t), n.set(t, e);
                      for (var f = o; ++l < c; ) {
                        var p = e[(h = a[l])],
                          g = t[h];
                        if (i) var y = o ? i(g, p, h, t, e, n) : i(p, g, h, e, t, n);
                        if (!(void 0 === y ? p === g || s(p, g, r, i, n) : y)) {
                          d = !1;
                          break;
                        }
                        f || (f = 'constructor' == h);
                      }
                      if (d && !f) {
                        var b = e.constructor,
                          m = t.constructor;
                        b != m &&
                          'constructor' in e &&
                          'constructor' in t &&
                          !(
                            'function' == typeof b &&
                            b instanceof b &&
                            'function' == typeof m &&
                            m instanceof m
                          ) &&
                          (d = !1);
                      }
                      return n.delete(e), n.delete(t), d;
                    })(e, t, r, i, s, n))
                  );
                })(t, r, i, s, e, n)
              : t != t && r != r)
          );
        })(e, t);
      };
    },
    87561: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(54565);
      i.__exportStar(r(42983), t),
        i.__exportStar(r(606), t),
        i.__exportStar(r(17283), t),
        i.__exportStar(r(72091), t);
    },
    91539: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          __assign: () => n,
          __asyncDelegator: () => w,
          __asyncGenerator: () => v,
          __asyncValues: () => E,
          __await: () => m,
          __awaiter: () => h,
          __classPrivateFieldGet: () => S,
          __classPrivateFieldSet: () => D,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => s,
          __generator: () => u,
          __importDefault: () => x,
          __importStar: () => I,
          __makeTemplateObject: () => _,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => b,
          __values: () => p,
        });
      var i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o = n < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            return (function (n) {
              if (r) throw TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (s =
                        2 & n[0]
                          ? i.return
                          : n[0]
                            ? i.throw || ((s = i.return) && s.call(i), 0)
                            : i.next) &&
                      !(s = s.call(i, n[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n;
                      break;
                    case 4:
                      return o.label++, { value: n[1], done: !1 };
                    case 5:
                      o.label++, (i = n[1]), (n = [0]);
                      continue;
                    case 7:
                      (n = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        o.label = n[1];
                        break;
                      }
                      if (6 === n[0] && o.label < s[1]) {
                        (o.label = s[1]), (s = n);
                        break;
                      }
                      if (s && o.label < s[2]) {
                        (o.label = s[2]), o.ops.push(n);
                        break;
                      }
                      s[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  n = t.call(e, o);
                } catch (e) {
                  (n = [6, e]), (i = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & n[0]) throw n[1];
              return { value: n[0] ? n[1] : void 0, done: !0 };
            })([n, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function f(e, t) {
        for (var r in e) 'default' === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function p(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function g(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e;
      }
      function b() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++) i[s] = n[o];
        return i;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o('next'),
          o('throw'),
          o('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function w(e) {
        var t, r;
        return (
          (t = {}),
          i('next'),
          i('throw', function (e) {
            throw e;
          }),
          i('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r) ? { value: m(e[i](t)), done: 'return' === i } : s ? s(t) : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = p(e)),
            (t = {}),
            i('next'),
            i('throw'),
            i('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, s, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function _(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function x(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e, t) {
        if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function D(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    99236: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
  },
]);
//# sourceMappingURL=9786.00f2a24c95629082.js.map
