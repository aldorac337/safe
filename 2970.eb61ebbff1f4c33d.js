(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2970],
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
        S9: () => A,
        Vx: () => w,
        ZP: () => l,
        dQ: () => p,
        lZ: () => f,
        m5: () => y,
        mF: () => v,
        pi: () => b,
        qE: () => g,
        yJ: () => O,
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
      var u = Object.defineProperty,
        h = (e, t, r) =>
          t in e
            ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        d = (e, t, r) => h(e, 'symbol' != typeof t ? t + '' : t, r);
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
      class A {
        constructor(e) {
          (this.opts = e), D(this, 'protocol', 'wc'), D(this, 'version', 2);
        }
      }
      s.EventEmitter;
      class O {
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
      r.d(t, { Cq: () => tA, FA: () => tR, TZ: () => tO, UF: () => tD });
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
      class u {
        clone() {
          return this._cloneInto();
        }
      }
      function h(e = 32) {
        if (a && 'function' == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && 'function' == typeof a.randomBytes) return a.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      class d extends u {
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
            u = this.outputLen;
          if (u % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let h = u / 4,
            d = this.get();
          if (h > d.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < h; e++) l.setUint32(4 * e, d[e], s);
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
            Fh: u,
            Fl: h,
            Gh: d,
            Gl: f,
            Hh: p,
            Hl: g,
          } = this;
          return [e, t, r, i, s, n, o, a, c, l, u, h, d, f, p, g];
        }
        set(e, t, r, i, s, n, o, a, c, l, u, h, d, f, p, g) {
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
            (this.Fh = 0 | u),
            (this.Fl = 0 | h),
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
              u = g.add4H(l, i, a, m[e - 7], m[e - 16]);
            (m[e] = 0 | u), (v[e] = 0 | l);
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
            Eh: u,
            El: h,
            Fh: d,
            Fl: f,
            Gh: p,
            Gl: w,
            Hh: E,
            Hl: _,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t = g.rotrSH(u, h, 14) ^ g.rotrSH(u, h, 18) ^ g.rotrBH(u, h, 41),
              I = g.rotrSL(u, h, 14) ^ g.rotrSL(u, h, 18) ^ g.rotrBL(u, h, 41),
              x = (u & d) ^ (~u & p),
              S = (h & f) ^ (~h & w),
              D = g.add5L(_, I, S, b[e], v[e]),
              A = g.add5H(D, E, t, x, y[e], m[e]),
              O = 0 | D,
              R = g.rotrSH(r, i, 28) ^ g.rotrBH(r, i, 34) ^ g.rotrBH(r, i, 39),
              P = g.rotrSL(r, i, 28) ^ g.rotrBL(r, i, 34) ^ g.rotrBL(r, i, 39),
              N = (r & s) ^ (r & o) ^ (s & o),
              T = (i & n) ^ (i & a) ^ (n & a);
            (E = 0 | p),
              (_ = 0 | w),
              (p = 0 | d),
              (w = 0 | f),
              (d = 0 | u),
              (f = 0 | h),
              ({ h: u, l: h } = g.add(0 | c, 0 | l, 0 | A, 0 | O)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | s),
              (a = 0 | n),
              (s = 0 | r),
              (n = 0 | i);
            let C = g.add3L(O, P, T);
            (r = g.add3H(C, A, R, N)), (i = 0 | C);
          }
          ({ h: r, l: i } = g.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
            ({ h: s, l: n } = g.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
            ({ h: o, l: a } = g.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = g.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: u, l: h } = g.add(0 | this.Eh, 0 | this.El, 0 | u, 0 | h)),
            ({ h: d, l: f } = g.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | f)),
            ({ h: p, l: w } = g.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | w)),
            ({ h: E, l: _ } = g.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | _)),
            this.set(r, i, s, n, o, a, c, l, u, h, d, f, p, w, E, _);
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
      function A(e, t) {
        if ('boolean' != typeof t) throw Error(e + ' boolean expected, got ' + t);
      }
      let O = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function R(e) {
        D(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += O[e[r]];
        return t;
      }
      function P(e) {
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
      function U(e) {
        return D(e), P(R(Uint8Array.from(e).reverse()));
      }
      function k(e, t) {
        return C(e.toString(16).padStart(2 * t, '0'));
      }
      function L(e, t) {
        return k(e, t).reverse();
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
        X = BigInt(8);
      function Q(e, t) {
        let r = e % t;
        return r >= K ? r : t + r;
      }
      function Z(e, t, r) {
        let i = e;
        for (; t-- > K; ) (i *= i), (i %= r);
        return i;
      }
      function ee(e, t) {
        if (e === K) throw Error('invert: expected non-zero number');
        if (t <= K) throw Error('invert: expected positive modulus, got ' + t);
        let r = Q(e, t),
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
        return Q(s, t);
      }
      let et = (e, t) => (Q(e, t) & H) === H,
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
          create: (t) => Q(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error('invalid field element: expected bigint, got ' + typeof t);
            return K <= t && t < e;
          },
          is0: (e) => e === K,
          isOdd: (e) => (e & H) === H,
          neg: (t) => Q(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => Q(t * t, e),
          add: (t, r) => Q(t + r, e),
          sub: (t, r) => Q(t - r, e),
          mul: (t, r) => Q(t * r, e),
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
          div: (t, r) => Q(t * ee(r, e), e),
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
                  if (e % X === Y) {
                    let t = (e - Y) / X;
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
                        u = e.pow(o, t);
                      for (; !e.eql(u, e.ONE); ) {
                        if (e.eql(u, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(u); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                        let r = e.pow(c, H << BigInt(a - t - 1));
                        (c = e.sqr(r)), (l = e.mul(l, r)), (u = e.mul(u, c)), (a = t);
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
          toBytes: (e) => (r ? L(e, o) : k(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error('Field.fromBytes: expected ' + o + ' bytes, got ' + e.length);
            return r ? U(e) : P(R(e));
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
      let eu = new WeakMap(),
        eh = new WeakMap();
      function ed(e) {
        return eh.get(e) || 1;
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
            u = eg << (BigInt(8 * c) - ep),
            h = i.create,
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
                if ((A('phflag', r), t.length || r))
                  throw Error('Contexts/pre-hash are not supported');
                return e;
              });
          function y(e, t) {
            B('coordinate ' + e, t, ef, u);
          }
          function b(e) {
            if (!(e instanceof w)) throw Error('ExtendedPoint expected');
          }
          let m = V((e, t) => {
              let { ex: r, ey: s, ez: n } = e,
                o = e.is0();
              null == t && (t = o ? ey : i.inv(n));
              let a = h(r * t),
                c = h(s * t),
                l = h(n * t);
              if (o) return { x: ef, y: ep };
              if (l !== ep) throw Error('invZ was invalid');
              return { x: a, y: c };
            }),
            v = V((e) => {
              let { a: t, d: i } = r;
              if (e.is0()) throw Error('bad point: ZERO');
              let { ex: s, ey: n, ez: o, et: a } = e,
                c = h(s * s),
                l = h(n * n),
                u = h(o * o),
                d = h(u * u),
                f = h(c * t);
              if (h(u * h(f + l)) !== h(d + h(i * h(c * l))))
                throw Error('bad point: equation left != right (1)');
              if (h(s * n) !== h(o * a)) throw Error('bad point: equation left != right (2)');
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
              return y('x', t), y('y', r), new w(t, r, ep, h(t * r));
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
                  u = s;
                for (let e = l; e >= 0; e -= o) {
                  c.fill(s);
                  for (let t = 0; t < i.length; t++) {
                    let s = Number((i[t] >> BigInt(e)) & BigInt(a));
                    c[s] = c[s].add(r[t]);
                  }
                  let t = s;
                  for (let e = c.length - 1, r = s; e > 0; e--) (r = r.add(c[e])), (t = t.add(r));
                  if (((u = u.add(t)), 0 !== e)) for (let e = 0; e < o; e++) u = u.double();
                }
                return u;
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
                a = h(t * o),
                c = h(s * i),
                l = h(r * o),
                u = h(n * i);
              return a === c && l === u;
            }
            is0() {
              return this.equals(w.ZERO);
            }
            negate() {
              return new w(h(-this.ex), this.ey, this.ez, h(-this.et));
            }
            double() {
              let { a: e } = r,
                { ex: t, ey: i, ez: s } = this,
                n = h(t * t),
                o = h(i * i),
                a = h(eg * h(s * s)),
                c = h(e * n),
                l = t + i,
                u = h(h(l * l) - n - o),
                d = c + o,
                f = d - a,
                p = c - o,
                g = h(u * f),
                y = h(d * p),
                b = h(u * p);
              return new w(g, y, h(f * d), b);
            }
            add(e) {
              b(e);
              let { a: t, d: i } = r,
                { ex: s, ey: n, ez: o, et: a } = this,
                { ex: c, ey: l, ez: u, et: d } = e;
              if (t === BigInt(-1)) {
                let e = h((n - s) * (l + c)),
                  t = h((n + s) * (l - c)),
                  r = h(t - e);
                if (r === ef) return this.double();
                let i = h(o * eg * d),
                  f = h(a * eg * u),
                  p = f + i,
                  g = t + e,
                  y = f - i,
                  b = h(p * r),
                  m = h(g * y),
                  v = h(p * y);
                return new w(b, m, h(r * g), v);
              }
              let f = h(s * c),
                p = h(n * l),
                g = h(a * i * d),
                y = h(o * u),
                m = h((s + n) * (c + l) - f - p),
                v = y - g,
                E = y + g,
                _ = h(p - t * f),
                I = h(m * v),
                x = h(E * _),
                S = h(m * _);
              return new w(I, x, h(v * E), S);
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
              (e = M('pointHex', e, o)), A('zip215', t);
              let a = e.slice(),
                c = e[o - 1];
              a[o - 1] = -129 & c;
              let l = U(a);
              B('pointHex.y', l, ef, t ? u : i.ORDER);
              let d = h(l * l),
                { isValid: p, value: g } = f(h(d - ep), h(s * d - n));
              if (!p) throw Error('Point.fromHex: invalid y coordinate');
              let y = (g & ep) === ep,
                b = (128 & c) != 0;
              if (!t && g === ef && b) throw Error('Point.fromHex: x=0 and x_0=1');
              return b !== y && (g = h(-g)), w.fromAffine({ x: g, y: l });
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
              return R(this.toRawBytes());
            }
          }
          (w.BASE = new w(r.Gx, r.Gy, ep, h(r.Gx * r.Gy))), (w.ZERO = new w(ef, ep, ep, ef));
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
                    u = BigInt(e);
                  for (let e = 0; e < s; e++) {
                    let t = e * n,
                      s = Number(i & c);
                    (i >>= u), s > n && ((s -= l), (i += eo));
                    let h = t + Math.abs(s) - 1,
                      d = e % 2 != 0,
                      f = s < 0;
                    0 === s ? (a = a.add(ea(d, r[t]))) : (o = o.add(ea(f, r[h])));
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
                    let u = r[t + Math.abs(n) - 1];
                    n < 0 && (u = u.negate()), (s = s.add(u));
                  }
                  return s;
                },
                getPrecomputes(e, t, r) {
                  let i = eu.get(t);
                  return i || ((i = this.precomputeWindow(t, e)), 1 !== e && eu.set(t, r(i))), i;
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
                  ec(r, t), eh.set(e, r), eu.delete(e);
                },
              });
          function D(e) {
            let t = i.BYTES;
            e = M('private key', e, t);
            let r = M('hashed private key', o(e), 2 * t),
              n = p(r.slice(0, t)),
              a = r.slice(t, 2 * t),
              c = Q(U(n), s),
              l = E.multiply(c),
              u = l.toRawBytes();
            return { head: n, prefix: a, scalar: c, point: l, pointBytes: u };
          }
          function O(e = new Uint8Array(), ...t) {
            return Q(U(o(g(q(...t), M('context', e), !!n))), s);
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
                  l = O(r.context, o, e),
                  u = E.multiply(l).toRawBytes(),
                  h = Q(l + O(r.context, u, c, e) * a, s);
                return B('signature.s', h, ef, s), M('result', q(u, L(h, i.BYTES)), 2 * i.BYTES);
              },
              verify: function (e, t, r, s = eb) {
                let o, a, c;
                let { context: l, zip215: u } = s,
                  h = i.BYTES;
                (e = M('signature', e, 2 * h)),
                  (t = M('message', t)),
                  (r = M('publicKey', r, h)),
                  void 0 !== u && A('zip215', u),
                  n && (t = n(t));
                let d = U(e.slice(h, 2 * h));
                try {
                  (o = w.fromHex(r, u)),
                    (a = w.fromHex(e.slice(0, h), u)),
                    (c = E.multiplyUnsafe(d));
                } catch {
                  return !1;
                }
                if (!u && o.isSmallOrder()) return !1;
                let f = O(l, a.toRawBytes(), o.toRawBytes(), t);
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
          randomBytes: h,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let r = Q(t * t * t, em),
              i = (function (e) {
                let t = BigInt(10),
                  r = BigInt(20),
                  i = BigInt(40),
                  s = BigInt(80),
                  n = (((e * e) % em) * e) % em,
                  o = (Z(n, eE, em) * n) % em,
                  a = (Z(o, ew, em) * e) % em,
                  c = (Z(a, e_, em) * a) % em,
                  l = (Z(c, t, em) * c) % em,
                  u = (Z(l, r, em) * l) % em,
                  h = (Z(u, i, em) * u) % em,
                  d = (Z(h, s, em) * h) % em,
                  f = (Z(d, s, em) * h) % em,
                  p = (Z(f, t, em) * c) % em;
                return { pow_p_5_8: (Z(p, eE, em) * e) % em, b2: n };
              })(e * Q(r * r * t, em)).pow_p_5_8,
              s = Q(e * r * i, em),
              n = Q(t * s * s, em),
              o = s,
              a = Q(s * ev, em),
              c = n === e,
              l = n === Q(-e, em),
              u = n === Q(-e * ev, em);
            return (
              c && (s = o),
              (l || u) && (s = a),
              et(s, em) && (s = Q(-s, em)),
              { isValid: c || l, value: s }
            );
          },
        }),
        eD = 'base64url',
        eA = 'utf8',
        eO = 'utf8',
        eR = 'base58btc';
      function eP(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
      }
      function eN(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? eP(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function eT(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = eN(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return eP(r);
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
          u = Math.log(256) / Math.log(a);
        function h(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var u = r[e.charCodeAt(t)];
              if (255 === u) return;
              for (var h = 0, d = n - 1; (0 !== u || h < s) && -1 !== d; d--, h++)
                (u += (a * o[d]) >>> 0), (o[d] = u % 256 >>> 0), (u = (u / 256) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (s = h), t++;
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
            for (var o = ((n - s) * u + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var h = t[s], d = 0, f = o - 1; (0 !== h || d < i) && -1 !== f; f--, d++)
                (h += (256 * l[f]) >>> 0), (l[f] = h % a >>> 0), (h = (h / a) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var p = o - i; p !== o && 0 === l[p]; ) p++;
            for (var g = c.repeat(r); p < o; ++p) g += e.charAt(l[p]);
            return g;
          },
          decodeUnsafe: h,
          decode: function (e) {
            var r = h(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let eU = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        ek = (e) => new TextEncoder().encode(e),
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
          return e$({ prefix: e, name: t, encode: i, decode: (e) => eU(s(e)) });
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
            decode: (e) => ek(e),
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
        eX = Object.freeze({
          __proto__: null,
          base16: eH({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: eH({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let eQ = eH({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        eZ = eH({
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
          base32: eQ,
          base32upper: eZ,
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
        tu = (e, t) => {
          let r = t.byteLength,
            i = tl(e),
            s = i + tl(r),
            n = new Uint8Array(s + r);
          return tc(e, n, 0), tc(r, n, i), n.set(t, s), new th(e, r, t, n);
        };
      class th {
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
            return t instanceof Uint8Array ? tu(this.code, t) : t.then((e) => tu(this.code, e));
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
          identity: { code: 0, name: 'identity', encode: eU, digest: (e) => tu(0, eU(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let tb = { ...eJ, ...eW, ...eG, ...eY, ...eX, ...e5, ...e6, ...e4, ...te, ...ts };
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
          ? eP(globalThis.Buffer.from(e, 'utf-8'))
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function tx(e) {
        return (0, s.j)(t_(tI(e, eD), eA));
      }
      function tS(e) {
        return t_(tI((0, s.h)(e), eA), eD);
      }
      function tD(e) {
        return ['did', 'key', 'z' + t_(eT([tI('K36', eR), e]), eR)].join(':');
      }
      function tA(e) {
        let t = e.split('.'),
          r = tx(t[0]),
          i = tx(t[1]);
        return {
          header: r,
          payload: i,
          signature: tI(t[2], eD),
          data: tI(t.slice(0, 2).join('.'), eO),
        };
      }
      function tO(e = h(32)) {
        let t = eS.getPublicKey(e);
        return { secretKey: eT([e, t]), publicKey: t };
      }
      async function tR(e, t, r, s, n = (0, i.fromMiliseconds)(Date.now())) {
        var o, a;
        let c = { alg: 'EdDSA', typ: 'JWT' },
          l = { iss: tD(s.publicKey), sub: e, aud: t, iat: n, exp: n + r },
          u = tI([tS((o = { header: c, payload: l }).header), tS(o.payload)].join('.'), eO);
        return [
          tS(
            (a = { header: c, payload: l, signature: eS.sign(u, s.secretKey.slice(0, 32)) }).header
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
      r.d(t, { A: () => O });
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
      function u(e) {
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
        if ('function' == typeof e.toJSON) return u(e.toJSON());
        throw Error('[unstorage] Cannot stringify value!');
      }
      function h() {
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
                          ? (h(), c.from(e.slice(d.length), 'base64'))
                          : e
                      );
                },
                async setItem(e, t, i = {}) {
                  if (void 0 === t) return v.removeItem(e);
                  let { relativeKey: n, driver: o } = r((e = f(e)));
                  o.setItem && (await l(o.setItem, n, u(t), i), o.watch || s('update', e));
                },
                async setItems(e, t) {
                  await m(e, t, async (e) => {
                    if (e.driver.setItems)
                      return l(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: u(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          l(e.driver.setItem, t.relativeKey, u(t.value), t.options)
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
                      'string' == typeof t ? t : (h(), d + c.from(t).toString('base64')),
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
          await t.setItem(i, 1), r(t), A(e, o);
        },
        A = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class O {
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
        let u = e.browser.write || s;
        e.browser.write && (e.browser.asObject = !0);
        let h = e.serializers || {},
          g = Array.isArray((t = e.browser.serialize))
            ? t.filter(function (e) {
                return '!stdSerializers.err' !== e;
              })
            : !0 === t && Object.keys(h),
          y = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
          (y = !1),
          'function' == typeof u && (u.error = u.fatal = u.warn = u.info = u.debug = u.trace = u),
          !1 === e.enabled && (e.level = 'silent');
        let b = e.level || 'info',
          m = Object.create(u);
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
          (m.serializers = h),
          (m._serialize = g),
          (m._stdErrSerialize = y),
          (m.child = function (t, r) {
            if (!t) throw Error('missing bindings for child Pino');
            (r = r || {}), g && t.serializers && (r.serializers = t.serializers);
            let s = r.serializers;
            if (g && s) {
              var n = Object.assign({}, h, s),
                o = !0 === e.browser.serialize ? Object.keys(n) : g;
              delete t.serializers, a([t], o, n, this._stdErrSerialize);
            }
            function u(e) {
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
            return (u.prototype = this), new u(this);
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
                    u = Array(arguments.length),
                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === s ? s : this;
                  for (var d = 0; d < u.length; d++) u[d] = arguments[d];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(u, this._serialize, this.serializers, this._stdErrSerialize),
                    e.asObject
                      ? o.call(
                          h,
                          (function (e, t, r, s) {
                            e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                            let o = r.slice(),
                              c = o[0],
                              l = {};
                            s && (l.time = s), (l.level = n.levels.values[t]);
                            let u = (0 | e._childLevel) + 1;
                            if ((u < 1 && (u = 1), null !== c && 'object' == typeof c)) {
                              for (; u-- && 'object' == typeof o[0]; ) Object.assign(l, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else 'string' == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (l.msg = c), l;
                          })(this, r, u, c)
                        )
                      : o.apply(h, u),
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
                        u = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = s),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === u.indexOf(e);
                        })),
                        (e._logEvent.level.label = n),
                        (e._logEvent.level.value = o),
                        i(n, e._logEvent, c),
                        (e._logEvent = l(u));
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
                      u
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
      function u() {
        return {};
      }
      function h(e) {
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
          mapHttpRequest: u,
          mapHttpResponse: u,
          wrapRequestSerializer: h,
          wrapResponseSerializer: h,
          wrapErrorSerializer: h,
          req: u,
          res: u,
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
          u = r.amdO,
          h = !a.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
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
          h &&
            (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (e) {
              return 'object' == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
            });
        for (
          var w = function (e, t, r) {
              return function (i) {
                return new k(e, t, e).update(i)[r]();
              };
            },
            E = function (e, t, r) {
              return function (i, s) {
                return new k(e, t, s).update(i)[r]();
              };
            },
            _ = function (e, t, r) {
              return function (t, i, s, n) {
                return A['cshake' + e].update(t, i, s, n)[r]();
              };
            },
            I = function (e, t, r) {
              return function (t, i, s, n) {
                return A['kmac' + e].update(t, i, s, n)[r]();
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
                  return new k(e, t, e);
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
                      return new k(e, t, r);
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
                      return s || n ? new k(e, t, i).bytepad([s, n], r) : A['shake' + e].create(i);
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
            A = {},
            O = [],
            R = 0;
          R < D.length;
          ++R
        )
          for (var P = D[R], N = P.bits, T = 0; T < N.length; ++T) {
            var C = P.name + '_' + N[T];
            if ((O.push(C), (A[C] = P.createMethod(N[T], P.padding)), 'sha3' !== P.name)) {
              var U = P.name + N[T];
              O.push(U), (A[U] = A[C]);
            }
          }
        function k(e, t, r) {
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
          k.call(this, e, t, r);
        }
        (k.prototype.update = function (e) {
          if (this.finalized) throw Error('finalize already called');
          var t,
            r = typeof e;
          if ('string' !== r) {
            if ('object' === r) {
              if (null === e) throw Error(n);
              if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw Error(n);
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
              u = 0,
              d = this.s;
            u < c;

          ) {
            if (this.reset)
              for (i = 1, this.reset = !1, o[0] = this.block; i < l + 1; ++i) o[i] = 0;
            if (t) for (i = this.start; u < c && i < a; ++u) o[i >> 2] |= e[u] << p[3 & i++];
            else
              for (i = this.start; u < c && i < a; ++u)
                (s = e.charCodeAt(u)) < 128
                  ? (o[i >> 2] |= s << p[3 & i++])
                  : (s < 2048
                      ? (o[i >> 2] |= (192 | (s >> 6)) << p[3 & i++])
                      : (s < 55296 || s >= 57344
                          ? (o[i >> 2] |= (224 | (s >> 12)) << p[3 & i++])
                          : ((s = 65536 + (((1023 & s) << 10) | (1023 & e.charCodeAt(++u)))),
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
          (k.prototype.encode = function (e, t) {
            var r = 255 & e,
              i = 1,
              s = [r];
            for (e >>= 8, r = 255 & e; r > 0; ) s.unshift(r), (e >>= 8), (r = 255 & e), ++i;
            return t ? s.push(i) : s.unshift(i), this.update(s), s.length;
          }),
          (k.prototype.encodeString = function (e) {
            var t,
              r = typeof e;
            if ('string' !== r) {
              if ('object' === r) {
                if (null === e) throw Error(n);
                if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw Error(n);
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
          (k.prototype.bytepad = function (e, t) {
            for (var r = this.encode(t), i = 0; i < e.length; ++i) r += this.encodeString(e[i]);
            var s = [];
            return (s.length = t - (r % t)), this.update(s), this;
          }),
          (k.prototype.finalize = function () {
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
          (k.prototype.toString = k.prototype.hex =
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
          (k.prototype.arrayBuffer = function () {
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
          (k.prototype.buffer = k.prototype.arrayBuffer),
          (k.prototype.digest = k.prototype.array =
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
          (L.prototype = new k()),
          (L.prototype.finalize = function () {
            return this.encode(this.outputBits, !0), k.prototype.finalize.call(this);
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
            u,
            h,
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
            A,
            O,
            R,
            P,
            N,
            T,
            C,
            U,
            k,
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
            X,
            Q,
            Z,
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
            eu;
          for (i = 0; i < 48; i += 2)
            (s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
              (n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
              (o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
              (a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
              (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
              (l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
              (u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
              (h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
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
              (t = o ^ ((u << 1) | (h >>> 31))),
              (r = a ^ ((h << 1) | (u >>> 31))),
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
              (t = u ^ ((s << 1) | (n >>> 31))),
              (r = h ^ ((n << 1) | (s >>> 31))),
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
              (R = (e[20] << 3) | (e[21] >>> 29)),
              (P = (e[21] << 3) | (e[20] >>> 29)),
              (ea = (e[31] << 9) | (e[30] >>> 23)),
              (ec = (e[30] << 9) | (e[31] >>> 23)),
              (F = (e[40] << 18) | (e[41] >>> 14)),
              (V = (e[41] << 18) | (e[40] >>> 14)),
              (k = (e[2] << 1) | (e[3] >>> 31)),
              (L = (e[3] << 1) | (e[2] >>> 31)),
              (b = (e[13] << 12) | (e[12] >>> 20)),
              (m = (e[12] << 12) | (e[13] >>> 20)),
              (G = (e[22] << 10) | (e[23] >>> 22)),
              (Y = (e[23] << 10) | (e[22] >>> 22)),
              (N = (e[33] << 13) | (e[32] >>> 19)),
              (T = (e[32] << 13) | (e[33] >>> 19)),
              (el = (e[42] << 2) | (e[43] >>> 30)),
              (eu = (e[43] << 2) | (e[42] >>> 30)),
              (et = (e[5] << 30) | (e[4] >>> 2)),
              (er = (e[4] << 30) | (e[5] >>> 2)),
              (M = (e[14] << 6) | (e[15] >>> 26)),
              (q = (e[15] << 6) | (e[14] >>> 26)),
              (v = (e[25] << 11) | (e[24] >>> 21)),
              (w = (e[24] << 11) | (e[25] >>> 21)),
              (X = (e[34] << 15) | (e[35] >>> 17)),
              (Q = (e[35] << 15) | (e[34] >>> 17)),
              (C = (e[45] << 29) | (e[44] >>> 3)),
              (U = (e[44] << 29) | (e[45] >>> 3)),
              (S = (e[6] << 28) | (e[7] >>> 4)),
              (D = (e[7] << 28) | (e[6] >>> 4)),
              (ei = (e[17] << 23) | (e[16] >>> 9)),
              (es = (e[16] << 23) | (e[17] >>> 9)),
              (j = (e[26] << 25) | (e[27] >>> 7)),
              (B = (e[27] << 25) | (e[26] >>> 7)),
              (E = (e[36] << 21) | (e[37] >>> 11)),
              (_ = (e[37] << 21) | (e[36] >>> 11)),
              (Z = (e[47] << 24) | (e[46] >>> 8)),
              (ee = (e[46] << 24) | (e[47] >>> 8)),
              (K = (e[8] << 27) | (e[9] >>> 5)),
              (H = (e[9] << 27) | (e[8] >>> 5)),
              (A = (e[18] << 20) | (e[19] >>> 12)),
              (O = (e[19] << 20) | (e[18] >>> 12)),
              (en = (e[29] << 7) | (e[28] >>> 25)),
              (eo = (e[28] << 7) | (e[29] >>> 25)),
              (z = (e[38] << 8) | (e[39] >>> 24)),
              ($ = (e[39] << 8) | (e[38] >>> 24)),
              (I = (e[48] << 14) | (e[49] >>> 18)),
              (x = (e[49] << 14) | (e[48] >>> 18)),
              (e[0] = p ^ (~b & v)),
              (e[1] = y ^ (~m & w)),
              (e[10] = S ^ (~A & R)),
              (e[11] = D ^ (~O & P)),
              (e[20] = k ^ (~M & j)),
              (e[21] = L ^ (~q & B)),
              (e[30] = K ^ (~J & G)),
              (e[31] = H ^ (~W & Y)),
              (e[40] = et ^ (~ei & en)),
              (e[41] = er ^ (~es & eo)),
              (e[2] = b ^ (~v & E)),
              (e[3] = m ^ (~w & _)),
              (e[12] = A ^ (~R & N)),
              (e[13] = O ^ (~P & T)),
              (e[22] = M ^ (~j & z)),
              (e[23] = q ^ (~B & $)),
              (e[32] = J ^ (~G & X)),
              (e[33] = W ^ (~Y & Q)),
              (e[42] = ei ^ (~en & ea)),
              (e[43] = es ^ (~eo & ec)),
              (e[4] = v ^ (~E & I)),
              (e[5] = w ^ (~_ & x)),
              (e[14] = R ^ (~N & C)),
              (e[15] = P ^ (~T & U)),
              (e[24] = j ^ (~z & F)),
              (e[25] = B ^ (~$ & V)),
              (e[34] = G ^ (~X & Z)),
              (e[35] = Y ^ (~Q & ee)),
              (e[44] = en ^ (~ea & el)),
              (e[45] = eo ^ (~ec & eu)),
              (e[6] = E ^ (~I & p)),
              (e[7] = _ ^ (~x & y)),
              (e[16] = N ^ (~C & S)),
              (e[17] = T ^ (~U & D)),
              (e[26] = z ^ (~F & k)),
              (e[27] = $ ^ (~V & L)),
              (e[36] = X ^ (~Z & K)),
              (e[37] = Q ^ (~ee & H)),
              (e[46] = ea ^ (~el & et)),
              (e[47] = ec ^ (~eu & er)),
              (e[8] = I ^ (~p & b)),
              (e[9] = x ^ (~y & m)),
              (e[18] = C ^ (~S & A)),
              (e[19] = U ^ (~D & O)),
              (e[28] = F ^ (~k & M)),
              (e[29] = V ^ (~L & q)),
              (e[38] = Z ^ (~K & J)),
              (e[39] = ee ^ (~H & W)),
              (e[48] = el ^ (~et & ei)),
              (e[49] = eu ^ (~er & es)),
              (e[0] ^= g[i]),
              (e[1] ^= g[i + 1]);
        };
        if (l) e.exports = A;
        else {
          for (R = 0; R < O.length; ++R) a[O[R]] = A[O[R]];
          u &&
            void 0 !==
              (i = function () {
                return A;
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
      r.r(n), r.d(n, { base8: () => U });
      var o = {};
      r.r(o), r.d(o, { base10: () => k });
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
      var u = {};
      r.r(u), r.d(u, { base58btc: () => G, base58flickr: () => Y });
      var h = {};
      r.r(h),
        r.d(h, { base64: () => X, base64pad: () => Q, base64url: () => Z, base64urlpad: () => ee });
      var d = {};
      r.r(d), r.d(d, { base256emoji: () => es });
      var f = {};
      r.r(f), r.d(f, { sha256: () => em, sha512: () => ev });
      var p = {};
      r.r(p), r.d(p, { identity: () => ew });
      var g = {};
      r.r(g), r.d(g, { code: () => e_, decode: () => ex, encode: () => eI, name: () => eE });
      var y = {};
      r.r(y), r.d(y, { code: () => eO, decode: () => eP, encode: () => eR, name: () => eA });
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
          u = Math.log(256) / Math.log(a);
        function h(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var u = r[e.charCodeAt(t)];
              if (255 === u) return;
              for (var h = 0, d = n - 1; (0 !== u || h < s) && -1 !== d; d--, h++)
                (u += (a * o[d]) >>> 0), (o[d] = u % 256 >>> 0), (u = (u / 256) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (s = h), t++;
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
            for (var o = ((n - s) * u + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var h = t[s], d = 0, f = o - 1; (0 !== h || d < i) && -1 !== f; f--, d++)
                (h += (256 * l[f]) >>> 0), (l[f] = h % a >>> 0), (h = (h / a) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var p = o - i; p !== o && 0 === l[p]; ) p++;
            for (var g = c.repeat(r); p < o; ++p) g += e.charAt(l[p]);
            return g;
          },
          decodeUnsafe: h,
          decode: function (e) {
            var r = h(e);
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
      let A = ({ name: e, prefix: t, encode: r, decode: i }) => new D(e, t, r, i),
        O = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = b(r, t);
          return A({ prefix: e, name: t, encode: i, decode: (e) => v(s(e)) });
        },
        R = (e, t, r, i) => {
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
        P = (e, t, r) => {
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
          A({ prefix: t, name: e, encode: (e) => P(e, i, r), decode: (t) => R(t, i, r, e) }),
        T = A({ prefix: '\0', name: 'identity', encode: (e) => E(e), decode: (e) => w(e) }),
        C = N({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        U = N({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        k = O({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
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
        J = O({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
        W = O({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        }),
        G = O({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        Y = O({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        }),
        X = N({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        Q = N({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        Z = N({
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
        es = A({
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
        eu = (e) => ea.encodingLength(e),
        eh = (e, t) => {
          let r = t.byteLength,
            i = eu(e),
            s = i + eu(r),
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
            return t instanceof Uint8Array ? eh(this.code, t) : t.then((e) => eh(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let eb = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        em = eg({ name: 'sha2-256', code: 18, encode: eb('SHA-256') }),
        ev = eg({ name: 'sha2-512', code: 19, encode: eb('SHA-512') }),
        ew = { code: 0, name: 'identity', encode: v, digest: (e) => eh(0, v(e)) },
        eE = 'raw',
        e_ = 85,
        eI = (e) => v(e),
        ex = (e) => v(e),
        eS = new TextEncoder(),
        eD = new TextDecoder(),
        eA = 'json',
        eO = 512,
        eR = (e) => eS.encode(JSON.stringify(e)),
        eP = (e) => JSON.parse(eD.decode(e));
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
            if (e !== ek) throw Error('Cannot convert a non dag-pb CID to CIDv0');
            if (t.code !== eL) throw Error('Cannot convert non sha2-256 multihash CID to CIDv0');
            return eN.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = eh(e, t);
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
          return 0 === r ? eC(t, i, e || G.encoder) : eU(t, i, e || q.encoder);
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
              if (t === ek) return new eN(e, t, r, r.bytes);
              throw Error(`Version 0 CID must use dag-pb (code: ${ek}) block encoding`);
            case 1: {
              let i = eM(e, t, r.bytes);
              return new eN(e, t, r, i);
            }
            default:
              throw Error('Invalid version');
          }
        }
        static createV0(e) {
          return eN.create(0, ek, e);
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
            s = ek;
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
        eU = (e, t, r) => {
          let { prefix: i } = r,
            s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e);
            return t.set(i, s), s;
          }
        },
        ek = 112,
        eL = 18,
        eM = (e, t, r) => {
          let i = eu(e),
            s = i + eu(t),
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
        eF = { ...i, ...s, ...n, ...o, ...a, ...c, ...l, ...u, ...h, ...d };
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
          __awaiter: () => u,
          __classPrivateFieldGet: () => S,
          __classPrivateFieldSet: () => D,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => s,
          __generator: () => h,
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
      function u(e, t, r, i) {
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
      function h(e, t) {
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
              : u(n[0][2], r);
          } catch (e) {
            u(n[0][3], e);
          }
        }
        function c(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function u(e, t) {
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
      class u {
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
      class h {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new u(e, t);
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
          this.baseChunkLogger = new u(e, t);
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
                let i = new h(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
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
        for (var l = '', u = 0, h = -1, d = (e && e.length) || 0, f = 0; f < d; ) {
          if (37 === e.charCodeAt(f) && f + 1 < d) {
            switch (((h = h > -1 ? h : 0), e.charCodeAt(f + 1))) {
              case 100:
              case 102:
                if (u >= c || null == r[u]) break;
                h < f && (l += e.slice(h, f)), (l += Number(r[u])), (h = f + 2), f++;
                break;
              case 105:
                if (u >= c || null == r[u]) break;
                h < f && (l += e.slice(h, f)), (l += Math.floor(Number(r[u]))), (h = f + 2), f++;
                break;
              case 79:
              case 111:
              case 106:
                if (u >= c || void 0 === r[u]) break;
                h < f && (l += e.slice(h, f));
                var p = typeof r[u];
                if ('string' === p) {
                  (l += "'" + r[u] + "'"), (h = f + 2), f++;
                  break;
                }
                if ('function' === p) {
                  (l += r[u].name || '<anonymous>'), (h = f + 2), f++;
                  break;
                }
                (l += s(r[u])), (h = f + 2), f++;
                break;
              case 115:
                if (u >= c) break;
                h < f && (l += e.slice(h, f)), (l += String(r[u])), (h = f + 2), f++;
                break;
              case 37:
                h < f && (l += e.slice(h, f)), (l += '%'), (h = f + 2), f++, u--;
            }
            ++u;
          }
          ++f;
        }
        return -1 === h ? e : (h < d && (l += e.slice(h)), l);
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
        u = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        h = [
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
            h.reduce(function (e, r) {
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
          g = u.exec(e);
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
        u = '[object Error]',
        h = '[object Function]',
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
          x[u] =
          x[h] =
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
        A = S || D || Function('return this')(),
        O = t && !t.nodeType && t,
        R = O && e && !e.nodeType && e,
        P = R && R.exports === O,
        N = P && S.process,
        T = (function () {
          try {
            return N && N.binding && N.binding('util');
          } catch (e) {}
        })(),
        C = T && T.isTypedArray;
      function U(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, i) {
            r[++t] = [i, e];
          }),
          r
        );
      }
      function k(e) {
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
        j = A['__core-js_shared__'],
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
        K = P ? A.Buffer : void 0,
        H = A.Symbol,
        J = A.Uint8Array,
        W = q.propertyIsEnumerable,
        G = L.splice,
        Y = H ? H.toStringTag : void 0,
        X = Object.getOwnPropertySymbols,
        Q = K ? K.isBuffer : void 0,
        Z =
          ((i = Object.keys),
          (s = Object),
          function (e) {
            return i(s(e));
          }),
        ee = ex(A, 'DataView'),
        et = ex(A, 'Map'),
        er = ex(A, 'Promise'),
        ei = ex(A, 'Set'),
        es = ex(A, 'WeakMap'),
        en = ex(Object, 'create'),
        eo = eA(ee),
        ea = eA(et),
        ec = eA(er),
        el = eA(ei),
        eu = eA(es),
        eh = H ? H.prototype : void 0,
        ed = eh ? eh.valueOf : void 0;
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
        for (var r = e.length; r--; ) if (eO(e[r][0], t)) return r;
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
        return ek(e) && ev(e) == o;
      }
      function eE(e, t, r, i, s, n) {
        var o = 1 & r,
          a = e.length,
          c = t.length;
        if (a != c && !(o && c > a)) return !1;
        var l = n.get(e);
        if (l && n.get(t)) return l == t;
        var u = -1,
          h = !0,
          d = 2 & r ? new ey() : void 0;
        for (n.set(e, t), n.set(t, e); ++u < a; ) {
          var f = e[u],
            p = t[u];
          if (i) var g = o ? i(p, f, u, t, e, n) : i(f, p, u, e, t, n);
          if (void 0 !== g) {
            if (g) continue;
            h = !1;
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
              h = !1;
              break;
            }
          } else if (!(f === p || s(f, p, r, i, n))) {
            h = !1;
            break;
          }
        }
        return n.delete(e), n.delete(t), h;
      }
      function e_(e) {
        var t;
        return (
          (t = eM(e)),
          eP(e)
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
        return !(!eU(i) || ((r = i), $ && $ in r)) && (eT(i) ? V : _).test(eA(i)) ? i : void 0;
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
      var eS = X
          ? function (e) {
              return null == e
                ? []
                : (function (e, t) {
                    for (var r = -1, i = null == e ? 0 : e.length, s = 0, n = []; ++r < i; ) {
                      var o = e[r];
                      t(o, r, e) && (n[s++] = o);
                    }
                    return n;
                  })(X((e = Object(e))), function (t) {
                    return W.call(e, t);
                  });
            }
          : function () {
              return [];
            },
        eD = ev;
      function eA(e) {
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
      function eO(e, t) {
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
            i = r ? eA(r) : '';
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
              case eu:
                return v;
            }
          return t;
        });
      var eR = ew(
          (function () {
            return arguments;
          })()
        )
          ? ew
          : function (e) {
              return ek(e) && z.call(e, 'callee') && !W.call(e, 'callee');
            },
        eP = Array.isArray,
        eN =
          Q ||
          function () {
            return !1;
          };
      function eT(e) {
        if (!eU(e)) return !1;
        var t = ev(e);
        return (
          t == h ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        );
      }
      function eC(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff;
      }
      function eU(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      }
      function ek(e) {
        return null != e && 'object' == typeof e;
      }
      var eL = C
        ? function (e) {
            return C(e);
          }
        : function (e) {
            return ek(e) && eC(e.length) && !!x[ev(e)];
          };
      function eM(e) {
        return null != e && eC(e.length) && !eT(e)
          ? (function (e, t) {
              var r,
                i,
                s = eP(e),
                n = !s && eR(e),
                o = !s && !n && eN(e),
                a = !s && !n && !o && eL(e),
                c = s || n || o || a,
                l = c
                  ? (function (e, t) {
                      for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
                      return i;
                    })(e.length, String)
                  : [],
                u = l.length;
              for (var h in e) {
                z.call(e, h) &&
                  !(
                    c &&
                    ('length' == h ||
                      (o && ('offset' == h || 'parent' == h)) ||
                      (a && ('buffer' == h || 'byteLength' == h || 'byteOffset' == h)) ||
                      ((r = h),
                      (i = null == (i = u) ? 0x1fffffffffffff : i) &&
                        ('number' == typeof r || I.test(r)) &&
                        r > -1 &&
                        r % 1 == 0 &&
                        r < i))
                  ) &&
                  l.push(h);
              }
              return l;
            })(e)
          : (function (e) {
              if (
                ((r = (t = e) && t.constructor),
                t !== (('function' == typeof r && r.prototype) || q))
              )
                return Z(e);
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
            (null != t && null != r && (ek(t) || ek(r))
              ? (function (e, t, r, i, s, n) {
                  var h = eP(e),
                    g = eP(t),
                    v = h ? a : eD(e),
                    _ = g ? a : eD(t);
                  (v = v == o ? p : v), (_ = _ == o ? p : _);
                  var I = v == p,
                    x = _ == p,
                    S = v == _;
                  if (S && eN(e)) {
                    if (!eN(t)) return !1;
                    (h = !0), (I = !1);
                  }
                  if (S && !I)
                    return (
                      n || (n = new eb()),
                      h || eL(e)
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
                                return eO(+e, +t);
                              case u:
                                return e.name == t.name && e.message == t.message;
                              case y:
                              case m:
                                return e == t + '';
                              case d:
                                var a = U;
                              case b:
                                var h = 1 & i;
                                if ((a || (a = k), e.size != t.size && !h)) break;
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
                      A = x && z.call(t, '__wrapped__');
                    if (D || A) {
                      var O = D ? e.value() : e,
                        R = A ? t.value() : t;
                      return n || (n = new eb()), s(O, R, r, i, n);
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
                        var u = a[l];
                        if (!(o ? u in t : z.call(t, u))) return !1;
                      }
                      var h = n.get(e);
                      if (h && n.get(t)) return h == t;
                      var d = !0;
                      n.set(e, t), n.set(t, e);
                      for (var f = o; ++l < c; ) {
                        var p = e[(u = a[l])],
                          g = t[u];
                        if (i) var y = o ? i(g, p, u, t, e, n) : i(p, g, u, e, t, n);
                        if (!(void 0 === y ? p === g || s(p, g, r, i, n) : y)) {
                          d = !1;
                          break;
                        }
                        f || (f = 'constructor' == u);
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
          __awaiter: () => u,
          __classPrivateFieldGet: () => S,
          __classPrivateFieldSet: () => D,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => s,
          __generator: () => h,
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
      function u(e, t, r, i) {
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
      function h(e, t) {
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
              : u(n[0][2], r);
          } catch (e) {
            u(n[0][3], e);
          }
        }
        function c(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function u(e, t) {
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
    92970: (e, t, r) => {
      'use strict';
      r.d(t, { L6: () => o9, c9: () => aT, VF: () => aC, Ay: () => aN });
      var i,
        s,
        n,
        o = r(35978),
        a = r.n(o),
        c = r(18193),
        l = r(19757),
        u = r(56975),
        h = r(7256),
        d = r(87561),
        f = r(41035),
        p = r(10897),
        g = r(69145),
        y = r(80985),
        b = r(66890);
      let m = !1,
        v = !1,
        w = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        E = w.default,
        _ = null,
        I = (function () {
          try {
            let e = [];
            if (
              (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((t) => {
                try {
                  if ('test' !== 'test'.normalize(t)) throw Error('bad normalize');
                } catch (r) {
                  e.push(t);
                }
              }),
              e.length)
            )
              throw Error('missing ' + e.join(', '));
            if (String.fromCharCode(233).normalize('NFD') !== String.fromCharCode(101, 769))
              throw Error('broken implementation');
          } catch (e) {
            return e.message;
          }
          return null;
        })();
      !(function (e) {
        (e.DEBUG = 'DEBUG'),
          (e.INFO = 'INFO'),
          (e.WARNING = 'WARNING'),
          (e.ERROR = 'ERROR'),
          (e.OFF = 'OFF');
      })(i || (i = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
            (e.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
            (e.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
            (e.NETWORK_ERROR = 'NETWORK_ERROR'),
            (e.SERVER_ERROR = 'SERVER_ERROR'),
            (e.TIMEOUT = 'TIMEOUT'),
            (e.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
            (e.NUMERIC_FAULT = 'NUMERIC_FAULT'),
            (e.MISSING_NEW = 'MISSING_NEW'),
            (e.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
            (e.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
            (e.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
            (e.CALL_EXCEPTION = 'CALL_EXCEPTION'),
            (e.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
            (e.NONCE_EXPIRED = 'NONCE_EXPIRED'),
            (e.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
            (e.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
            (e.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED'),
            (e.ACTION_REJECTED = 'ACTION_REJECTED');
        })(s || (s = {}));
      let x = '0123456789abcdef';
      class S {
        constructor(e) {
          Object.defineProperty(this, 'version', { enumerable: !0, value: e, writable: !1 });
        }
        _log(e, t) {
          let r = e.toLowerCase();
          null == w[r] && this.throwArgumentError('invalid log level name', 'logLevel', e),
            !(E > w[r]) && console.log.apply(console, t);
        }
        debug(...e) {
          this._log(S.levels.DEBUG, e);
        }
        info(...e) {
          this._log(S.levels.INFO, e);
        }
        warn(...e) {
          this._log(S.levels.WARNING, e);
        }
        makeError(e, t, r) {
          if (v) return this.makeError('censored error', t, {});
          t || (t = S.errors.UNKNOWN_ERROR), r || (r = {});
          let i = [];
          Object.keys(r).forEach((e) => {
            let t = r[e];
            try {
              if (t instanceof Uint8Array) {
                let r = '';
                for (let e = 0; e < t.length; e++) (r += x[t[e] >> 4]), (r += x[15 & t[e]]);
                i.push(e + '=Uint8Array(0x' + r + ')');
              } else i.push(e + '=' + JSON.stringify(t));
            } catch (t) {
              i.push(e + '=' + JSON.stringify(r[e].toString()));
            }
          }),
            i.push(`code=${t}`),
            i.push(`version=${this.version}`);
          let n = e,
            o = '';
          switch (t) {
            case s.NUMERIC_FAULT: {
              o = 'NUMERIC_FAULT';
              let t = e;
              switch (t) {
                case 'overflow':
                case 'underflow':
                case 'division-by-zero':
                  o += '-' + t;
                  break;
                case 'negative-power':
                case 'negative-width':
                  o += '-unsupported';
                  break;
                case 'unbound-bitwise-result':
                  o += '-unbound-result';
              }
              break;
            }
            case s.CALL_EXCEPTION:
            case s.INSUFFICIENT_FUNDS:
            case s.MISSING_NEW:
            case s.NONCE_EXPIRED:
            case s.REPLACEMENT_UNDERPRICED:
            case s.TRANSACTION_REPLACED:
            case s.UNPREDICTABLE_GAS_LIMIT:
              o = t;
          }
          o && (e += ' [ See: https://links.ethers.org/v5-errors-' + o + ' ]'),
            i.length && (e += ' (' + i.join(', ') + ')');
          let a = Error(e);
          return (
            (a.reason = n),
            (a.code = t),
            Object.keys(r).forEach(function (e) {
              a[e] = r[e];
            }),
            a
          );
        }
        throwError(e, t, r) {
          throw this.makeError(e, t, r);
        }
        throwArgumentError(e, t, r) {
          return this.throwError(e, S.errors.INVALID_ARGUMENT, { argument: t, value: r });
        }
        assert(e, t, r, i) {
          !e && this.throwError(t, r, i);
        }
        assertArgument(e, t, r, i) {
          !e && this.throwArgumentError(t, r, i);
        }
        checkNormalize(e) {
          null == e && (e = 'platform missing String.prototype.normalize'),
            I &&
              this.throwError(
                'platform missing String.prototype.normalize',
                S.errors.UNSUPPORTED_OPERATION,
                { operation: 'String.prototype.normalize', form: I }
              );
        }
        checkSafeUint53(e, t) {
          'number' == typeof e &&
            (null == t && (t = 'value not safe'),
            (e < 0 || e >= 0x1fffffffffffff) &&
              this.throwError(t, S.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'out-of-safe-range',
                value: e,
              }),
            e % 1 &&
              this.throwError(t, S.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'non-integer',
                value: e,
              }));
        }
        checkArgumentCount(e, t, r) {
          (r = r ? ': ' + r : ''),
            e < t &&
              this.throwError('missing argument' + r, S.errors.MISSING_ARGUMENT, {
                count: e,
                expectedCount: t,
              }),
            e > t &&
              this.throwError('too many arguments' + r, S.errors.UNEXPECTED_ARGUMENT, {
                count: e,
                expectedCount: t,
              });
        }
        checkNew(e, t) {
          (e === Object || null == e) &&
            this.throwError('missing new', S.errors.MISSING_NEW, { name: t.name });
        }
        checkAbstract(e, t) {
          e === t
            ? this.throwError(
                'cannot instantiate abstract class ' +
                  JSON.stringify(t.name) +
                  ' directly; use a sub-class',
                S.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: 'new' }
              )
            : (e === Object || null == e) &&
              this.throwError('missing new', S.errors.MISSING_NEW, { name: t.name });
        }
        static globalLogger() {
          return _ || (_ = new S('logger/5.7.0')), _;
        }
        static setCensorship(e, t) {
          if (
            (!e &&
              t &&
              this.globalLogger().throwError(
                'cannot permanently disable censorship',
                S.errors.UNSUPPORTED_OPERATION,
                { operation: 'setCensorship' }
              ),
            m)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              'error censorship permanent',
              S.errors.UNSUPPORTED_OPERATION,
              { operation: 'setCensorship' }
            );
          }
          (v = !!e), (m = !!t);
        }
        static setLogLevel(e) {
          let t = w[e.toLowerCase()];
          if (null == t) {
            S.globalLogger().warn('invalid log level - ' + e);
            return;
          }
          E = t;
        }
        static from(e) {
          return new S(e);
        }
      }
      (S.errors = s), (S.levels = i);
      let D = new S('bytes/5.7.0');
      function A(e) {
        return !!e.toHexString;
      }
      function O(e) {
        return (
          e.slice ||
            (e.slice = function () {
              let t = Array.prototype.slice.call(arguments);
              return O(new Uint8Array(Array.prototype.slice.apply(e, t)));
            }),
          e
        );
      }
      function R(e) {
        return 'number' == typeof e && e == e && e % 1 == 0;
      }
      function P(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ('string' == typeof e || !R(e.length) || e.length < 0) return !1;
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          if (!R(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function N(e, t) {
        if ((t || (t = {}), 'number' == typeof e)) {
          D.checkSafeUint53(e, 'invalid arrayify value');
          let t = [];
          for (; e; ) t.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === t.length && t.push(0), O(new Uint8Array(t));
        }
        if (
          (t.allowMissingPrefix &&
            'string' == typeof e &&
            '0x' !== e.substring(0, 2) &&
            (e = '0x' + e),
          A(e) && (e = e.toHexString()),
          T(e))
        ) {
          let r = e.substring(2);
          r.length % 2 &&
            ('left' === t.hexPad
              ? (r = '0' + r)
              : 'right' === t.hexPad
                ? (r += '0')
                : D.throwArgumentError('hex data is odd-length', 'value', e));
          let i = [];
          for (let e = 0; e < r.length; e += 2) i.push(parseInt(r.substring(e, e + 2), 16));
          return O(new Uint8Array(i));
        }
        return P(e)
          ? O(new Uint8Array(e))
          : D.throwArgumentError('invalid arrayify value', 'value', e);
      }
      function T(e, t) {
        return (
          'string' == typeof e && !!e.match(/^0x[0-9A-Fa-f]*$/) && (!t || e.length === 2 + 2 * t)
        );
      }
      let C = '0123456789abcdef';
      function U(e, t) {
        if ((t || (t = {}), 'number' == typeof e)) {
          D.checkSafeUint53(e, 'invalid hexlify value');
          let t = '';
          for (; e; ) (t = C[15 & e] + t), (e = Math.floor(e / 16));
          return t.length ? (t.length % 2 && (t = '0' + t), '0x' + t) : '0x00';
        }
        if ('bigint' == typeof e) return (e = e.toString(16)).length % 2 ? '0x0' + e : '0x' + e;
        if (
          (t.allowMissingPrefix &&
            'string' == typeof e &&
            '0x' !== e.substring(0, 2) &&
            (e = '0x' + e),
          A(e))
        )
          return e.toHexString();
        if (T(e))
          return (
            e.length % 2 &&
              ('left' === t.hexPad
                ? (e = '0x0' + e.substring(2))
                : 'right' === t.hexPad
                  ? (e += '0')
                  : D.throwArgumentError('hex data is odd-length', 'value', e)),
            e.toLowerCase()
          );
        if (P(e)) {
          let t = '0x';
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            t += C[(240 & i) >> 4] + C[15 & i];
          }
          return t;
        }
        return D.throwArgumentError('invalid hexlify value', 'value', e);
      }
      function k(e, t, r) {
        return ('string' != typeof e
          ? (e = U(e))
          : (!T(e) || e.length % 2) && D.throwArgumentError('invalid hexData', 'value', e),
        (t = 2 + 2 * t),
        null != r)
          ? '0x' + e.substring(t, 2 + 2 * r)
          : '0x' + e.substring(t);
      }
      function L(e, t) {
        for (
          'string' != typeof e
            ? (e = U(e))
            : T(e) || D.throwArgumentError('invalid hex string', 'value', e),
            e.length > 2 * t + 2 &&
              D.throwArgumentError('value out of range', 'value', arguments[1]);
          e.length < 2 * t + 2;

        )
          e = '0x0' + e.substring(2);
        return e;
      }
      function M(e) {
        let t = {
          r: '0x',
          s: '0x',
          _vs: '0x',
          recoveryParam: 0,
          v: 0,
          yParityAndS: '0x',
          compact: '0x',
        };
        if ((T(e) && !(e.length % 2)) || P(e)) {
          let r = N(e);
          64 === r.length
            ? ((t.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (t.r = U(r.slice(0, 32))),
              (t.s = U(r.slice(32, 64))))
            : 65 === r.length
              ? ((t.r = U(r.slice(0, 32))), (t.s = U(r.slice(32, 64))), (t.v = r[64]))
              : D.throwArgumentError('invalid signature string', 'signature', e),
            t.v < 27 &&
              (0 === t.v || 1 === t.v
                ? (t.v += 27)
                : D.throwArgumentError('signature invalid v byte', 'signature', e)),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.recoveryParam && (r[32] |= 128),
            (t._vs = U(r.slice(32, 64)));
        } else {
          if (
            ((t.r = e.r),
            (t.s = e.s),
            (t.v = e.v),
            (t.recoveryParam = e.recoveryParam),
            (t._vs = e._vs),
            null != t._vs)
          ) {
            let r = (function (e, t) {
              (e = N(e)).length > t &&
                D.throwArgumentError('value out of range', 'value', arguments[0]);
              let r = new Uint8Array(t);
              return r.set(e, t - e.length), O(r);
            })(N(t._vs), 32);
            t._vs = U(r);
            let i = +(r[0] >= 128);
            null == t.recoveryParam
              ? (t.recoveryParam = i)
              : t.recoveryParam !== i &&
                D.throwArgumentError('signature recoveryParam mismatch _vs', 'signature', e),
              (r[0] &= 127);
            let s = U(r);
            null == t.s
              ? (t.s = s)
              : t.s !== s && D.throwArgumentError('signature v mismatch _vs', 'signature', e);
          }
          if (null == t.recoveryParam)
            null == t.v
              ? D.throwArgumentError('signature missing v and recoveryParam', 'signature', e)
              : 0 === t.v || 1 === t.v
                ? (t.recoveryParam = t.v)
                : (t.recoveryParam = 1 - (t.v % 2));
          else if (null == t.v) t.v = 27 + t.recoveryParam;
          else {
            let r = 0 === t.v || 1 === t.v ? t.v : 1 - (t.v % 2);
            t.recoveryParam !== r &&
              D.throwArgumentError('signature recoveryParam mismatch v', 'signature', e);
          }
          null != t.r && T(t.r)
            ? (t.r = L(t.r, 32))
            : D.throwArgumentError('signature missing or invalid r', 'signature', e),
            null != t.s && T(t.s)
              ? (t.s = L(t.s, 32))
              : D.throwArgumentError('signature missing or invalid s', 'signature', e);
          let r = N(t.s);
          r[0] >= 128 && D.throwArgumentError('signature s out of range', 'signature', e),
            t.recoveryParam && (r[0] |= 128);
          let i = U(r);
          t._vs &&
            (T(t._vs) || D.throwArgumentError('signature invalid _vs', 'signature', e),
            (t._vs = L(t._vs, 32))),
            null == t._vs
              ? (t._vs = i)
              : t._vs !== i &&
                D.throwArgumentError('signature _vs mismatch v and s', 'signature', e);
        }
        return (t.yParityAndS = t._vs), (t.compact = t.r + t.yParityAndS.substring(2)), t;
      }
      var q = r(72289),
        j = r.n(q),
        B = j().BN;
      let z = new S('bignumber/5.7.0'),
        $ = {},
        F = !1;
      class V {
        constructor(e, t) {
          e !== $ &&
            z.throwError(
              'cannot call constructor directly; use BigNumber.from',
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: 'new (BigNumber)' }
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(e) {
          return H(J(this).fromTwos(e));
        }
        toTwos(e) {
          return H(J(this).toTwos(e));
        }
        abs() {
          return '-' === this._hex[0] ? V.from(this._hex.substring(1)) : this;
        }
        add(e) {
          return H(J(this).add(J(e)));
        }
        sub(e) {
          return H(J(this).sub(J(e)));
        }
        div(e) {
          return V.from(e).isZero() && W('division-by-zero', 'div'), H(J(this).div(J(e)));
        }
        mul(e) {
          return H(J(this).mul(J(e)));
        }
        mod(e) {
          let t = J(e);
          return t.isNeg() && W('division-by-zero', 'mod'), H(J(this).umod(t));
        }
        pow(e) {
          let t = J(e);
          return t.isNeg() && W('negative-power', 'pow'), H(J(this).pow(t));
        }
        and(e) {
          let t = J(e);
          return (
            (this.isNegative() || t.isNeg()) && W('unbound-bitwise-result', 'and'),
            H(J(this).and(t))
          );
        }
        or(e) {
          let t = J(e);
          return (
            (this.isNegative() || t.isNeg()) && W('unbound-bitwise-result', 'or'), H(J(this).or(t))
          );
        }
        xor(e) {
          let t = J(e);
          return (
            (this.isNegative() || t.isNeg()) && W('unbound-bitwise-result', 'xor'),
            H(J(this).xor(t))
          );
        }
        mask(e) {
          return (this.isNegative() || e < 0) && W('negative-width', 'mask'), H(J(this).maskn(e));
        }
        shl(e) {
          return (this.isNegative() || e < 0) && W('negative-width', 'shl'), H(J(this).shln(e));
        }
        shr(e) {
          return (this.isNegative() || e < 0) && W('negative-width', 'shr'), H(J(this).shrn(e));
        }
        eq(e) {
          return J(this).eq(J(e));
        }
        lt(e) {
          return J(this).lt(J(e));
        }
        lte(e) {
          return J(this).lte(J(e));
        }
        gt(e) {
          return J(this).gt(J(e));
        }
        gte(e) {
          return J(this).gte(J(e));
        }
        isNegative() {
          return '-' === this._hex[0];
        }
        isZero() {
          return J(this).isZero();
        }
        toNumber() {
          try {
            return J(this).toNumber();
          } catch (e) {
            W('overflow', 'toNumber', this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (e) {}
          return z.throwError(
            'this platform does not support BigInt',
            Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? F ||
                  ((F = !0),
                  z.warn('BigNumber.toString does not accept any parameters; base-10 is assumed'))
                : 16 === arguments[0]
                  ? z.throwError(
                      'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                      Logger.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )
                  : z.throwError(
                      'BigNumber.toString does not accept parameters',
                      Logger.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )),
            J(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(e) {
          return { type: 'BigNumber', hex: this.toHexString() };
        }
        static from(e) {
          if (e instanceof V) return e;
          if ('string' == typeof e)
            return e.match(/^-?0x[0-9a-f]+$/i)
              ? new V($, K(e))
              : e.match(/^-?[0-9]+$/)
                ? new V($, K(new B(e)))
                : z.throwArgumentError('invalid BigNumber string', 'value', e);
          if ('number' == typeof e)
            return (
              e % 1 && W('underflow', 'BigNumber.from', e),
              (e >= 0x1fffffffffffff || e <= -0x1fffffffffffff) &&
                W('overflow', 'BigNumber.from', e),
              V.from(String(e))
            );
          if ('bigint' == typeof e) return V.from(e.toString());
          if (isBytes(e)) return V.from(hexlify(e));
          if (e) {
            if (e.toHexString) {
              let t = e.toHexString();
              if ('string' == typeof t) return V.from(t);
            } else {
              let t = e._hex;
              if (
                (null == t && 'BigNumber' === e.type && (t = e.hex),
                'string' == typeof t &&
                  (isHexString(t) || ('-' === t[0] && isHexString(t.substring(1)))))
              )
                return V.from(t);
            }
          }
          return z.throwArgumentError('invalid BigNumber value', 'value', e);
        }
        static isBigNumber(e) {
          return !!(e && e._isBigNumber);
        }
      }
      function K(e) {
        if ('string' != typeof e) return K(e.toString(16));
        if ('-' === e[0])
          return ('-' === (e = e.substring(1))[0] &&
            z.throwArgumentError('invalid hex', 'value', e),
          '0x00' === (e = K(e)))
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
      function H(e) {
        return V.from(K(e));
      }
      function J(e) {
        let t = V.from(e).toHexString();
        return '-' === t[0] ? new B('-' + t.substring(3), 16) : new B(t.substring(2), 16);
      }
      function W(e, t, r) {
        let i = { fault: e, operation: t };
        return null != r && (i.value = r), z.throwError(e, Logger.errors.NUMERIC_FAULT, i);
      }
      var G = r(22533),
        Y = r.n(G);
      function X(e) {
        return '0x' + Y().keccak_256(N(e));
      }
      let Q = new S('address/5.7.0');
      function Z(e) {
        T(e, 20) || Q.throwArgumentError('invalid address', 'address', e);
        let t = (e = e.toLowerCase()).substring(2).split(''),
          r = new Uint8Array(40);
        for (let e = 0; e < 40; e++) r[e] = t[e].charCodeAt(0);
        let i = N(X(r));
        for (let e = 0; e < 40; e += 2)
          i[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()),
            (15 & i[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
        return '0x' + t.join('');
      }
      let ee = {};
      for (let e = 0; e < 10; e++) ee[String(e)] = String(e);
      for (let e = 0; e < 26; e++) ee[String.fromCharCode(65 + e)] = String(10 + e);
      let et = Math.floor(
        Math.log10 ? Math.log10(0x1fffffffffffff) : Math.log(0x1fffffffffffff) / Math.LN10
      );
      var er = r(41069),
        ei = r.n(er);
      function es(e, t, r) {
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
      var en = eo;
      function eo(e, t) {
        if (!e) throw Error(t || 'Assertion failed');
      }
      eo.equal = function (e, t, r) {
        if (e != t) throw Error(r || 'Assertion failed: ' + e + ' != ' + t);
      };
      var ea = es(function (e, t) {
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
        ec = es(function (e, t) {
          (t.assert = en),
            (t.toArray = ea.toArray),
            (t.zero2 = ea.zero2),
            (t.toHex = ea.toHex),
            (t.encode = ea.encode),
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
              return new (j())(e, 'hex', 'le');
            });
        }),
        el = ec.getNAF,
        eu = ec.getJSF,
        eh = ec.assert;
      function ed(e, t) {
        (this.type = e),
          (this.p = new (j())(t.p, 16)),
          (this.red = t.prime ? j().red(t.prime) : j().mont(this.p)),
          (this.zero = new (j())(0).toRed(this.red)),
          (this.one = new (j())(1).toRed(this.red)),
          (this.two = new (j())(2).toRed(this.red)),
          (this.n = t.n && new (j())(t.n, 16)),
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
      function ef(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (ed.prototype.point = function () {
        throw Error('Not implemented');
      }),
        (ed.prototype.validate = function () {
          throw Error('Not implemented');
        }),
        (ed.prototype._fixedNafMul = function (e, t) {
          eh(e.precomputed);
          var r,
            i,
            s = e._getDoubles(),
            n = el(t, 1, this._bitLength),
            o = (1 << (s.step + 1)) - (s.step % 2 == 0 ? 2 : 1);
          o /= 3;
          var a = [];
          for (r = 0; r < n.length; r += s.step) {
            i = 0;
            for (var c = r + s.step - 1; c >= r; c--) i = (i << 1) + n[c];
            a.push(i);
          }
          for (
            var l = this.jpoint(null, null, null), u = this.jpoint(null, null, null), h = o;
            h > 0;
            h--
          ) {
            for (r = 0; r < a.length; r++)
              (i = a[r]) === h
                ? (u = u.mixedAdd(s.points[r]))
                : i === -h && (u = u.mixedAdd(s.points[r].neg()));
            l = l.add(u);
          }
          return l.toP();
        }),
        (ed.prototype._wnafMul = function (e, t) {
          var r = 4,
            i = e._getNAFPoints(r);
          r = i.wnd;
          for (
            var s = i.points,
              n = el(t, r, this._bitLength),
              o = this.jpoint(null, null, null),
              a = n.length - 1;
            a >= 0;
            a--
          ) {
            for (var c = 0; a >= 0 && 0 === n[a]; a--) c++;
            if ((a >= 0 && c++, (o = o.dblp(c)), a < 0)) break;
            var l = n[a];
            eh(0 !== l),
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
        (ed.prototype._wnafMulAdd = function (e, t, r, i, s) {
          var n,
            o,
            a,
            c = this._wnafT1,
            l = this._wnafT2,
            u = this._wnafT3,
            h = 0;
          for (n = 0; n < i; n++) {
            var d = (a = t[n])._getNAFPoints(e);
            (c[n] = d.wnd), (l[n] = d.points);
          }
          for (n = i - 1; n >= 1; n -= 2) {
            var f = n - 1,
              p = n;
            if (1 !== c[f] || 1 !== c[p]) {
              (u[f] = el(r[f], c[f], this._bitLength)),
                (u[p] = el(r[p], c[p], this._bitLength)),
                (h = Math.max(u[f].length, h)),
                (h = Math.max(u[p].length, h));
              continue;
            }
            var g = [t[f], null, null, t[p]];
            0 === t[f].y.cmp(t[p].y)
              ? ((g[1] = t[f].add(t[p])), (g[2] = t[f].toJ().mixedAdd(t[p].neg())))
              : 0 === t[f].y.cmp(t[p].y.redNeg())
                ? ((g[1] = t[f].toJ().mixedAdd(t[p])), (g[2] = t[f].add(t[p].neg())))
                : ((g[1] = t[f].toJ().mixedAdd(t[p])), (g[2] = t[f].toJ().mixedAdd(t[p].neg())));
            var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              b = eu(r[f], r[p]);
            for (
              o = 0, h = Math.max(b[0].length, h), u[f] = Array(h), u[p] = Array(h);
              o < h;
              o++
            ) {
              var m = 0 | b[0][o],
                v = 0 | b[1][o];
              (u[f][o] = y[(m + 1) * 3 + (v + 1)]), (u[p][o] = 0), (l[f] = g);
            }
          }
          var w = this.jpoint(null, null, null),
            E = this._wnafT4;
          for (n = h; n >= 0; n--) {
            for (var _ = 0; n >= 0; ) {
              var I = !0;
              for (o = 0; o < i; o++) (E[o] = 0 | u[o][n]), 0 !== E[o] && (I = !1);
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
        (ed.BasePoint = ef),
        (ef.prototype.eq = function () {
          throw Error('Not implemented');
        }),
        (ef.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (ed.prototype.decodePoint = function (e, t) {
          e = ec.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0]
                ? eh(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && eh(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw Error('Unknown point format');
        }),
        (ef.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (ef.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray('be', t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', t));
        }),
        (ef.prototype.encode = function (e, t) {
          return ec.encode(this._encode(t), e);
        }),
        (ef.prototype.precompute = function (e) {
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
        (ef.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
        }),
        (ef.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
          for (var r = [this], i = this, s = 0; s < t; s += e) {
            for (var n = 0; n < e; n++) i = i.dbl();
            r.push(i);
          }
          return { step: e, points: r };
        }),
        (ef.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
          for (var t = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), s = 1; s < r; s++)
            t[s] = t[s - 1].add(i);
          return { wnd: e, points: t };
        }),
        (ef.prototype._getBeta = function () {
          return null;
        }),
        (ef.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
      var ep = es(function (e) {
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
        eg = ec.assert;
      function ey(e) {
        ed.call(this, 'short', e),
          (this.a = new (j())(e.a, 16).toRed(this.red)),
          (this.b = new (j())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function eb(e, t, r, i) {
        ed.BasePoint.call(this, e, 'affine'),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (j())(t, 16)),
              (this.y = new (j())(r, 16)),
              i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function em(e, t, r, i) {
        ed.BasePoint.call(this, e, 'jacobian'),
          null === t && null === r && null === i
            ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new (j())(0)))
            : ((this.x = new (j())(t, 16)),
              (this.y = new (j())(r, 16)),
              (this.z = new (j())(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      ep(ey, ed),
        (ey.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new (j())(e.beta, 16).toRed(this.red);
            else {
              var t,
                r,
                i,
                s = this._getEndoRoots(this.p);
              t = (t = 0 > s[0].cmp(s[1]) ? s[0] : s[1]).toRed(this.red);
            }
            if (e.lambda) r = new (j())(e.lambda, 16);
            else {
              var n = this._getEndoRoots(this.n);
              0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))
                ? (r = n[0])
                : ((r = n[1]), eg(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return (
              (i = e.basis
                ? e.basis.map(function (e) {
                    return { a: new (j())(e.a, 16), b: new (j())(e.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: t, lambda: r, basis: i }
            );
          }
        }),
        (ey.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : j().mont(e),
            r = new (j())(2).toRed(t).redInvm(),
            i = r.redNeg(),
            s = new (j())(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [i.redAdd(s).fromRed(), i.redSub(s).fromRed()];
        }),
        (ey.prototype._getEndoBasis = function (e) {
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
              u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              h = e,
              d = this.n.clone(),
              f = new (j())(1),
              p = new (j())(0),
              g = new (j())(0),
              y = new (j())(1),
              b = 0;
            0 !== h.cmpn(0);

          ) {
            var m = d.div(h);
            (c = d.sub(m.mul(h))), (l = g.sub(m.mul(f)));
            var v = y.sub(m.mul(p));
            if (!i && 0 > c.cmp(u)) (t = a.neg()), (r = f), (i = c.neg()), (s = l);
            else if (i && 2 == ++b) break;
            (a = c), (d = h), (h = c), (g = f), (f = l), (y = p), (p = v);
          }
          (n = c.neg()), (o = l);
          var w = i.sqr().add(s.sqr());
          return (
            n.sqr().add(o.sqr()).cmp(w) >= 0 && ((n = t), (o = r)),
            i.negative && ((i = i.neg()), (s = s.neg())),
            n.negative && ((n = n.neg()), (o = o.neg())),
            [
              { a: i, b: s },
              { a: n, b: o },
            ]
          );
        }),
        (ey.prototype._endoSplit = function (e) {
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
        (ey.prototype.pointFromX = function (e, t) {
          (e = new (j())(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            i = r.redSqrt();
          if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error('invalid point');
          var s = i.fromRed().isOdd();
          return ((t && !s) || (!t && s)) && (i = i.redNeg()), this.point(e, i);
        }),
        (ey.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            i = this.a.redMul(t),
            s = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
          return 0 === r.redSqr().redISub(s).cmpn(0);
        }),
        (ey.prototype._endoWnafMulAdd = function (e, t, r) {
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
          for (var l = this._wnafMulAdd(1, i, s, 2 * n, r), u = 0; u < 2 * n; u++)
            (i[u] = null), (s[u] = null);
          return l;
        }),
        ep(eb, ed.BasePoint),
        (ey.prototype.point = function (e, t, r) {
          return new eb(this, e, t, r);
        }),
        (ey.prototype.pointFromJSON = function (e, t) {
          return eb.fromJSON(this, e, t);
        }),
        (eb.prototype._getBeta = function () {
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
        (eb.prototype.toJSON = function () {
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
        (eb.fromJSON = function (e, t, r) {
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
        (eb.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>';
        }),
        (eb.prototype.isInfinity = function () {
          return this.inf;
        }),
        (eb.prototype.add = function (e) {
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
        (eb.prototype.dbl = function () {
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
        (eb.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (eb.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (eb.prototype.mul = function (e) {
          return ((e = new (j())(e, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
                ? this.curve._endoWnafMulAdd([this], [e])
                : this.curve._wnafMul(this, e);
        }),
        (eb.prototype.mulAdd = function (e, t, r) {
          var i = [this, t],
            s = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, s)
            : this.curve._wnafMulAdd(1, i, s, 2);
        }),
        (eb.prototype.jmulAdd = function (e, t, r) {
          var i = [this, t],
            s = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, s, !0)
            : this.curve._wnafMulAdd(1, i, s, 2, !0);
        }),
        (eb.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf && (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (eb.prototype.neg = function (e) {
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
        (eb.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        ep(em, ed.BasePoint),
        (ey.prototype.jpoint = function (e, t, r) {
          return new em(this, e, t, r);
        }),
        (em.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            i = this.y.redMul(t).redMul(e);
          return this.curve.point(r, i);
        }),
        (em.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (em.prototype.add = function (e) {
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
            u = l.redMul(a),
            h = i.redMul(l),
            d = c.redSqr().redIAdd(u).redISub(h).redISub(h),
            f = c.redMul(h.redISub(d)).redISub(n.redMul(u)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(d, f, p);
        }),
        (em.prototype.mixedAdd = function (e) {
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
            u = r.redMul(c),
            h = a.redSqr().redIAdd(l).redISub(u).redISub(u),
            d = a.redMul(u.redISub(h)).redISub(s.redMul(l)),
            f = this.z.redMul(o);
          return this.curve.jpoint(h, d, f);
        }),
        (em.prototype.dblp = function (e) {
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
            var u = n.redSqr(),
              h = l.redSqr(),
              d = h.redSqr(),
              f = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(c)),
              p = n.redMul(h),
              g = f.redSqr().redISub(p.redAdd(p)),
              y = p.redISub(g),
              b = f.redMul(y);
            b = b.redIAdd(b).redISub(d);
            var m = l.redMul(a);
            t + 1 < e && (c = c.redMul(d)), (n = g), (a = m), (l = b);
          }
          return this.curve.jpoint(n, l.redMul(s), a);
        }),
        (em.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
              ? this._zeroDbl()
              : this.curve.threeA
                ? this._threeDbl()
                : this._dbl();
        }),
        (em.prototype._zeroDbl = function () {
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
            var u = this.x.redSqr(),
              h = this.y.redSqr(),
              d = h.redSqr(),
              f = this.x.redAdd(h).redSqr().redISub(u).redISub(d);
            f = f.redIAdd(f);
            var p = u.redAdd(u).redIAdd(u),
              g = p.redSqr(),
              y = d.redIAdd(d);
            (y = (y = y.redIAdd(y)).redIAdd(y)),
              (e = g.redISub(f).redISub(f)),
              (t = p.redMul(f.redISub(e)).redISub(y)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (em.prototype._threeDbl = function () {
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
            var u = this.z.redSqr(),
              h = this.y.redSqr(),
              d = this.x.redMul(h),
              f = this.x.redSub(u).redMul(this.x.redAdd(u));
            f = f.redAdd(f).redIAdd(f);
            var p = d.redIAdd(d),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = f.redSqr().redISub(g)), (r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(u));
            var y = h.redSqr();
            (y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y)),
              (t = f.redMul(p.redISub(e)).redISub(y));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (em.prototype._dbl = function () {
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
            u = a.redSqr().redISub(l.redAdd(l)),
            h = l.redISub(u),
            d = o.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var f = a.redMul(h).redISub(d),
            p = r.redAdd(r).redMul(i);
          return this.curve.jpoint(u, f, p);
        }),
        (em.prototype.trpl = function () {
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
            u = t.redMul(l);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var h = this.x.redMul(a).redISub(u);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var d = this.y.redMul(l.redMul(c.redISub(l)).redISub(o.redMul(a)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var f = this.z.redAdd(o).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(h, d, f);
        }),
        (em.prototype.mul = function (e, t) {
          return (e = new (j())(e, t)), this.curve._wnafMul(this, e);
        }),
        (em.prototype.eq = function (e) {
          if ('affine' === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var i = t.redMul(this.z),
            s = r.redMul(e.z);
          return 0 === this.y.redMul(s).redISub(e.y.redMul(i)).cmpn(0);
        }),
        (em.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var i = e.clone(), s = this.curve.redN.redMul(t); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(s), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (em.prototype.inspect = function () {
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
        (em.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var ev = es(function (e, t) {
          (t.base = ed), (t.short = ey), (t.mont = null), (t.edwards = null);
        }),
        ew = es(function (e, t) {
          var r,
            i = ec.assert;
          function s(e) {
            'short' === e.type
              ? (this.curve = new ev.short(e))
              : 'edwards' === e.type
                ? (this.curve = new ev.edwards(e))
                : (this.curve = new ev.mont(e)),
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
              hash: ei().sha256,
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
              hash: ei().sha256,
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
              hash: ei().sha256,
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
              hash: ei().sha384,
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
              hash: ei().sha512,
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
              hash: ei().sha256,
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
              hash: ei().sha256,
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
            hash: ei().sha256,
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
      function eE(e) {
        if (!(this instanceof eE)) return new eE(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = ea.toArray(e.entropy, e.entropyEnc || 'hex'),
          r = ea.toArray(e.nonce, e.nonceEnc || 'hex'),
          i = ea.toArray(e.pers, e.persEnc || 'hex');
        en(
          t.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(t, r, i);
      }
      (eE.prototype._init = function (e, t, r) {
        var i = e.concat(t).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var s = 0; s < this.V.length; s++) (this.K[s] = 0), (this.V[s] = 1);
        this._update(i), (this._reseed = 1), (this.reseedInterval = 0x1000000000000);
      }),
        (eE.prototype._hmac = function () {
          return new (ei().hmac)(this.hash, this.K);
        }),
        (eE.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (eE.prototype.reseed = function (e, t, r, i) {
          'string' != typeof t && ((i = r), (r = t), (t = null)),
            (e = ea.toArray(e, t)),
            (r = ea.toArray(r, i)),
            en(
              e.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (eE.prototype.generate = function (e, t, r, i) {
          if (this._reseed > this.reseedInterval) throw Error('Reseed is required');
          'string' != typeof t && ((i = r), (r = t), (t = null)),
            r && ((r = ea.toArray(r, i || 'hex')), this._update(r));
          for (var s = []; s.length < e; )
            (this.V = this._hmac().update(this.V).digest()), (s = s.concat(this.V));
          var n = s.slice(0, e);
          return this._update(r), this._reseed++, ea.encode(n, t);
        });
      var e_ = ec.assert;
      function eI(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (eI.fromPublic = function (e, t, r) {
        return t instanceof eI ? t : new eI(e, { pub: t, pubEnc: r });
      }),
        (eI.fromPrivate = function (e, t, r) {
          return t instanceof eI ? t : new eI(e, { priv: t, privEnc: r });
        }),
        (eI.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : e.validate()
              ? e.mul(this.ec.curve.n).isInfinity()
                ? { result: !0, reason: null }
                : { result: !1, reason: 'Public key * N != O' }
              : { result: !1, reason: 'Public key is not a point' };
        }),
        (eI.prototype.getPublic = function (e, t) {
          return ('string' == typeof e && ((t = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          t)
            ? this.pub.encode(t, e)
            : this.pub;
        }),
        (eI.prototype.getPrivate = function (e) {
          return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (eI.prototype._importPrivate = function (e, t) {
          (this.priv = new (j())(e, t || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (eI.prototype._importPublic = function (e, t) {
          if (e.x || e.y) {
            'mont' === this.ec.curve.type
              ? e_(e.x, 'Need x coordinate')
              : ('short' === this.ec.curve.type || 'edwards' === this.ec.curve.type) &&
                e_(e.x && e.y, 'Need both x and y coordinate'),
              (this.pub = this.ec.curve.point(e.x, e.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (eI.prototype.derive = function (e) {
          return (
            e.validate() || e_(e.validate(), 'public point not validated'), e.mul(this.priv).getX()
          );
        }),
        (eI.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (eI.prototype.verify = function (e, t) {
          return this.ec.verify(e, t, this);
        }),
        (eI.prototype.inspect = function () {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          );
        });
      var ex = ec.assert;
      function eS(e, t) {
        if (e instanceof eS) return e;
        this._importDER(e, t) ||
          (ex(e.r && e.s, 'Signature without r or s'),
          (this.r = new (j())(e.r, 16)),
          (this.s = new (j())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function eD() {
        this.place = 0;
      }
      function eA(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var i = 15 & r;
        if (0 === i || i > 4) return !1;
        for (var s = 0, n = 0, o = t.place; n < i; n++, o++) (s <<= 8), (s |= e[o]), (s >>>= 0);
        return !(s <= 127) && ((t.place = o), s);
      }
      function eO(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; ) t++;
        return 0 === t ? e : e.slice(t);
      }
      function eR(e, t) {
        if (t < 128) {
          e.push(t);
          return;
        }
        var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
        for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
        e.push(t);
      }
      (eS.prototype._importDER = function (e, t) {
        e = ec.toArray(e, t);
        var r = new eD();
        if (48 !== e[r.place++]) return !1;
        var i = eA(e, r);
        if (!1 === i || i + r.place !== e.length || 2 !== e[r.place++]) return !1;
        var s = eA(e, r);
        if (!1 === s) return !1;
        var n = e.slice(r.place, s + r.place);
        if (((r.place += s), 2 !== e[r.place++])) return !1;
        var o = eA(e, r);
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
        return (this.r = new (j())(n)), (this.s = new (j())(a)), (this.recoveryParam = null), !0;
      }),
        (eS.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = eO(t),
              r = eO(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var i = [2];
          eR(i, t.length), (i = i.concat(t)).push(2), eR(i, r.length);
          var s = i.concat(r),
            n = [48];
          return eR(n, s.length), (n = n.concat(s)), ec.encode(n, e);
        });
      var eP = function () {
          throw Error('unsupported');
        },
        eN = ec.assert;
      function eT(e) {
        if (!(this instanceof eT)) return new eT(e);
        'string' == typeof e &&
          (eN(Object.prototype.hasOwnProperty.call(ew, e), 'Unknown curve ' + e), (e = ew[e])),
          e instanceof ew.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (eT.prototype.keyPair = function (e) {
        return new eI(this, e);
      }),
        (eT.prototype.keyFromPrivate = function (e, t) {
          return eI.fromPrivate(this, e, t);
        }),
        (eT.prototype.keyFromPublic = function (e, t) {
          return eI.fromPublic(this, e, t);
        }),
        (eT.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var t = new eE({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || 'utf8',
                entropy: e.entropy || eP(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              i = this.n.sub(new (j())(2));
            ;

          ) {
            var s = new (j())(t.generate(r));
            if (!(s.cmp(i) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
          }
        }),
        (eT.prototype._truncateToN = function (e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return (r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e;
        }),
        (eT.prototype.sign = function (e, t, r, i) {
          'object' == typeof r && ((i = r), (r = null)),
            i || (i = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new (j())(e, 16)));
          for (
            var s = this.n.byteLength(),
              n = t.getPrivate().toArray('be', s),
              o = e.toArray('be', s),
              a = new eE({
                hash: this.hash,
                entropy: n,
                nonce: o,
                pers: i.pers,
                persEnc: i.persEnc || 'utf8',
              }),
              c = this.n.sub(new (j())(1)),
              l = 0;
            ;
            l++
          ) {
            var u = i.k ? i.k(l) : new (j())(a.generate(this.n.byteLength()));
            if (!(0 >= (u = this._truncateToN(u, !0)).cmpn(1) || u.cmp(c) >= 0)) {
              var h = this.g.mul(u);
              if (!h.isInfinity()) {
                var d = h.getX(),
                  f = d.umod(this.n);
                if (0 !== f.cmpn(0)) {
                  var p = u.invm(this.n).mul(f.mul(t.getPrivate()).iadd(e));
                  if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                    var g = +!!h.getY().isOdd() | (2 * (0 !== d.cmp(f)));
                    return (
                      i.canonical && p.cmp(this.nh) > 0 && ((p = this.n.sub(p)), (g ^= 1)),
                      new eS({ r: f, s: p, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (eT.prototype.verify = function (e, t, r, i) {
          (e = this._truncateToN(new (j())(e, 16))), (r = this.keyFromPublic(r, i));
          var s,
            n = (t = new eS(t, 'hex')).r,
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
        (eT.prototype.recoverPubKey = function (e, t, r, i) {
          eN((3 & r) === r, 'The recovery param is more than two bits'), (t = new eS(t, i));
          var s = this.n,
            n = new (j())(e),
            o = t.r,
            a = t.s,
            c = 1 & r,
            l = r >> 1;
          if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
            throw Error('Unable to find sencond key candinate');
          o = l ? this.curve.pointFromX(o.add(this.curve.n), c) : this.curve.pointFromX(o, c);
          var u = t.r.invm(s),
            h = s.sub(n).mul(u).umod(s),
            d = a.mul(u).umod(s);
          return this.g.mulAdd(h, o, d);
        }),
        (eT.prototype.getKeyRecoveryParam = function (e, t, r, i) {
          if (null !== (t = new eS(t, i)).recoveryParam) return t.recoveryParam;
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
      var eC = es(function (e, t) {
        (t.version = '6.5.4'),
          (t.utils = ec),
          (t.rand = function () {
            throw Error('unsupported');
          }),
          (t.curve = ev),
          (t.curves = ew),
          (t.ec = eT),
          (t.eddsa = null);
      }).ec;
      let eU = new S('properties/5.7.0');
      function ek(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      let eL = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 },
        eM = new S('signing-key/5.7.0'),
        eq = null;
      function ej() {
        return eq || (eq = new eC('secp256k1')), eq;
      }
      class eB {
        constructor(e) {
          ek(this, 'curve', 'secp256k1'),
            ek(this, 'privateKey', U(e)),
            32 !==
              (function (e) {
                if ('string' != typeof e) e = U(e);
                else if (!T(e) || e.length % 2) return null;
                return (e.length - 2) / 2;
              })(this.privateKey) &&
              eM.throwArgumentError('invalid private key', 'privateKey', '[[ REDACTED ]]');
          let t = ej().keyFromPrivate(N(this.privateKey));
          ek(this, 'publicKey', '0x' + t.getPublic(!1, 'hex')),
            ek(this, 'compressedPublicKey', '0x' + t.getPublic(!0, 'hex')),
            ek(this, '_isSigningKey', !0);
        }
        _addPoint(e) {
          let t = ej().keyFromPublic(N(this.publicKey)),
            r = ej().keyFromPublic(N(e));
          return '0x' + t.pub.add(r.pub).encodeCompressed('hex');
        }
        signDigest(e) {
          let t = ej().keyFromPrivate(N(this.privateKey)),
            r = N(e);
          32 !== r.length && eM.throwArgumentError('bad digest length', 'digest', e);
          let i = t.sign(r, { canonical: !0 });
          return M({
            recoveryParam: i.recoveryParam,
            r: L('0x' + i.r.toString(16), 32),
            s: L('0x' + i.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          let t = ej().keyFromPrivate(N(this.privateKey)),
            r = ej().keyFromPublic(N(ez(e)));
          return L('0x' + t.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !!(e && e._isSigningKey);
        }
      }
      function ez(e, t) {
        let r = N(e);
        if (32 === r.length) {
          let e = new eB(r);
          return t ? '0x' + ej().keyFromPrivate(r).getPublic(!0, 'hex') : e.publicKey;
        }
        return 33 === r.length
          ? t
            ? U(r)
            : '0x' + ej().keyFromPublic(r).getPublic(!1, 'hex')
          : 65 === r.length
            ? t
              ? '0x' + ej().keyFromPublic(r).getPublic(!0, 'hex')
              : U(r)
            : eM.throwArgumentError('invalid public or private key', 'key', '[REDACTED]');
      }
      let e$ = new S('transactions/5.7.0');
      !(function (e) {
        (e[(e.legacy = 0)] = 'legacy'),
          (e[(e.eip2930 = 1)] = 'eip2930'),
          (e[(e.eip1559 = 2)] = 'eip1559');
      })(n || (n = {}));
      function eF(e, t) {
        return (function (e) {
          let t = null;
          if (
            ('string' != typeof e && Q.throwArgumentError('invalid address', 'address', e),
            e.match(/^(0x)?[0-9a-fA-F]{40}$/))
          )
            '0x' !== e.substring(0, 2) && (e = '0x' + e),
              (t = Z(e)),
              e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
                t !== e &&
                Q.throwArgumentError('bad address checksum', 'address', e);
          else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
            for (
              e.substring(2, 4) !==
                (function (e) {
                  let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + '00')
                    .split('')
                    .map((e) => ee[e])
                    .join('');
                  for (; t.length >= et; ) {
                    let e = t.substring(0, et);
                    t = (parseInt(e, 10) % 97) + t.substring(e.length);
                  }
                  let r = String(98 - (parseInt(t, 10) % 97));
                  for (; r.length < 2; ) r = '0' + r;
                  return r;
                })(e) && Q.throwArgumentError('bad icap checksum', 'address', e),
                t = new B(e.substring(4), 36).toString(16);
              t.length < 40;

            )
              t = '0' + t;
            t = Z('0x' + t);
          } else Q.throwArgumentError('invalid address', 'address', e);
          return t;
        })(
          k(
            X(
              k(
                ez(
                  (function (e, t) {
                    let r = M(t),
                      i = { r: N(r.r), s: N(r.s) };
                    return '0x' + ej().recoverPubKey(N(e), i, r.recoveryParam).encode('hex', !1);
                  })(N(e), t)
                ),
                1
              )
            ),
            12
          )
        );
      }
      function eV(e, t) {
        let r = stripZeros(BigNumber.from(e).toHexString());
        return (
          r.length > 32 && e$.throwArgumentError('invalid length for ' + t, 'transaction:' + t, e),
          r
        );
      }
      function eK(e, t) {
        return {
          address: getAddress(e),
          storageKeys: (t || []).map(
            (t, r) => (
              32 !== hexDataLength(t) &&
                e$.throwArgumentError('invalid access list storageKey', `accessList[${e}:${r}]`, t),
              t.toLowerCase()
            )
          ),
        };
      }
      function eH(e) {
        return (function (e) {
          if (Array.isArray(e))
            return e.map((e, t) =>
              Array.isArray(e)
                ? (e.length > 2 &&
                    e$.throwArgumentError(
                      'access list expected to be [ address, storageKeys[] ]',
                      `value[${t}]`,
                      e
                    ),
                  eK(e[0], e[1]))
                : eK(e.address, e.storageKeys)
            );
          let t = Object.keys(e).map((t) => {
            let r = e[t].reduce((e, t) => ((e[t] = !0), e), {});
            return eK(t, Object.keys(r).sort());
          });
          return t.sort((e, t) => e.address.localeCompare(t.address)), t;
        })(e).map((e) => [e.address, e.storageKeys]);
      }
      function eJ(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function eW(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = eJ(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return r;
      }
      var eG = r(29218);
      function eY(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      let eX = eY(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        eQ = eY(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = eJ((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        eZ = {
          utf8: eX,
          'utf-8': eX,
          hex: eG.Fo.base16,
          latin1: eQ,
          ascii: eQ,
          binary: eQ,
          ...eG.Fo,
        };
      function e0(e, t = 'utf8') {
        let r = eZ[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, 'utf8')
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function e1(e, t = 'utf8') {
        let r = eZ[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : r.encoder.encode(e).substring(1);
      }
      var e2 = r(34736),
        e3 = r(26481),
        e8 = r(29143),
        e5 = r(51642).Buffer;
      function e6(e) {
        let [t, r] = e.split(':');
        return { namespace: t, reference: r };
      }
      function e4(e) {
        let [t, r, i] = e.split(':');
        return { namespace: t, reference: r, address: i };
      }
      function e9(e, t) {
        return e.includes(':') ? [e] : t.chains || [];
      }
      let e7 = {
        reactNative: 'react-native',
        node: 'node',
        browser: 'browser',
        unknown: 'unknown',
      };
      function te() {
        return 'u' > typeof e8 && 'u' > typeof e8.versions && 'u' > typeof e8.versions.node;
      }
      function tt() {
        return (
          !(0, y.getDocument)() && !!(0, y.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function tr() {
        return !te() && !!(0, y.getNavigator)() && !!(0, y.getDocument)();
      }
      function ti() {
        return tt() ? e7.reactNative : te() ? e7.node : tr() ? e7.browser : e7.unknown;
      }
      function ts() {
        var e;
        try {
          return tt() && 'u' > typeof r.g && 'u' > typeof (null == r.g ? void 0 : r.g.Application)
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function tn() {
        return (0, b.g)() || { name: '', description: '', url: '', icons: [''] };
      }
      function to(e, t, i) {
        let s = (function () {
            if (
              ti() === e7.reactNative &&
              'u' > typeof r.g &&
              'u' > typeof (null == r.g ? void 0 : r.g.Platform)
            ) {
              let { OS: e, Version: t } = r.g.Platform;
              return [e, t].join('-');
            }
            let e = (0, g.o0)();
            if (null === e) return 'unknown';
            let t = e.os ? e.os.replace(' ', '').toLowerCase() : 'unknown';
            return 'browser' === e.type
              ? [t, e.name, e.version].join('-')
              : [t, e.version].join('-');
          })(),
          n = (function () {
            var e;
            let t = ti();
            return t === e7.browser
              ? [t, (null == (e = (0, y.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', i].join('-'), s, n].join('/');
      }
      function ta(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function tc(e) {
        return Object.fromEntries(e.entries());
      }
      function tl(e) {
        return new Map(Object.entries(e));
      }
      function tu(e = d.FIVE_MINUTES, t) {
        let r, i, s, n;
        let o = (0, d.toMiliseconds)(e || d.FIVE_MINUTES);
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
      function th(e, t, r) {
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
      function td(e, t) {
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
      function tf(e) {
        let [t, r] = e.split(':'),
          i = { id: void 0, topic: void 0 };
        if ('topic' === t && 'string' == typeof r) i.topic = r;
        else if ('id' === t && Number.isInteger(Number(r))) i.id = Number(r);
        else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
        return i;
      }
      function tp(e, t) {
        return (0, d.fromMiliseconds)((t || Date.now()) + (0, d.toMiliseconds)(e));
      }
      function tg(e) {
        return Date.now() >= (0, d.toMiliseconds)(e);
      }
      function ty(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function tb(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function tm({ id: e, topic: t, wcDeepLink: i }) {
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
                  let r = e5.from(e).toString('base64');
                  return t ? r.replace(/[=]/g, '') : r;
                })(i, !0)}`;
              } else s = `${s}/wc?${i}`;
              return s;
            })(a, e, t),
            l = ti();
          if (l === e7.browser) {
            let e;
            if (!(null != (s = (0, y.getDocument)()) && s.hasFocus())) {
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
            l === e7.reactNative &&
              'u' > typeof (null == r.g ? void 0 : r.g.Linking) &&
              (await r.g.Linking.openURL(c));
        } catch (e) {
          console.error(e);
        }
      }
      async function tv(e, t) {
        let r = '';
        try {
          if (tr() && (r = localStorage.getItem(t))) return r;
          r = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return r;
      }
      function tw(e, t) {
        if (!e.includes(t)) return null;
        let r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function tE() {
        return 'u' > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function t_() {
        return 'u' > typeof e8 && 'true' === e8.env.IS_VITEST;
      }
      function tI(e) {
        return e5.from(e, 'base64').toString('utf-8');
      }
      function tx(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function tS(e, ...t) {
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
      function tD(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        tx(e.outputLen), tx(e.blockLen);
      }
      function tA(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function tO(e, t) {
        tS(e);
        let r = t.outputLen;
        if (e.length < r) throw Error('digestInto() expects output buffer of length at least ' + r);
      }
      let tR = BigInt(0x100000000 - 1),
        tP = BigInt(32),
        tN = (e, t, r) => (e << r) | (t >>> (32 - r)),
        tT = (e, t, r) => (t << r) | (e >>> (32 - r)),
        tC = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        tU = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        tk = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function tL(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function tM(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let tq = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function tj(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function tB(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          tS(e),
          e
        );
      }
      class tz {
        clone() {
          return this._cloneInto();
        }
      }
      function t$(e) {
        let t = (t) => e().update(tB(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function tF(e = 32) {
        if (tk && 'function' == typeof tk.getRandomValues)
          return tk.getRandomValues(new Uint8Array(e));
        if (tk && 'function' == typeof tk.randomBytes) return tk.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      let tV = [],
        tK = [],
        tH = [],
        tJ = BigInt(0),
        tW = BigInt(1),
        tG = BigInt(2),
        tY = BigInt(7),
        tX = BigInt(256),
        tQ = BigInt(113);
      for (let e = 0, t = tW, r = 1, i = 0; e < 24; e++) {
        ([r, i] = [i, (2 * r + 3 * i) % 5]),
          tV.push(2 * (5 * i + r)),
          tK.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = tJ;
        for (let e = 0; e < 7; e++)
          (t = ((t << tW) ^ ((t >> tY) * tQ)) % tX) & tG && (s ^= tW << ((tW << BigInt(e)) - tW));
        tH.push(s);
      }
      let [tZ, t0] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & tR), l: Number((e >> tP) & tR) }
                : { h: 0 | Number((e >> tP) & tR), l: 0 | Number(e & tR) };
            })(e[s], t);
            [r[s], i[s]] = [n, o];
          }
          return [r, i];
        })(tH, !0),
        t1 = (e, t, r) => (r > 32 ? tC(e, t, r) : tN(e, t, r)),
        t2 = (e, t, r) => (r > 32 ? tU(e, t, r) : tT(e, t, r));
      class t3 extends tz {
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
            tx(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          tq || tj(this.state32),
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
                    a = t1(n, o, 1) ^ r[i],
                    c = t2(n, o, 1) ^ r[i + 1];
                  for (let r = 0; r < 50; r += 10) (e[t + r] ^= a), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let i = tK[r],
                    n = t1(t, s, i),
                    o = t2(t, s, i),
                    a = tV[r];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let i = 0; i < 10; i++) r[i] = e[t + i];
                  for (let i = 0; i < 10; i++) e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10];
                }
                (e[0] ^= tZ[i]), (e[1] ^= t0[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            tq || tj(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          tA(this);
          let { blockLen: t, state: r } = this,
            i = (e = tB(e)).length;
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
          tA(this, !1), tS(e), this.finish();
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
          return tx(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((tO(e, this), this.finished)) throw Error('digest() was already called');
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
            e || (e = new t3(t, r, i, n, s)),
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
      let t8 = t$(() => new t3(136, 1, 32));
      function t5(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          r = new TextEncoder().encode(t + e);
        return '0x' + e5.from(t8(r)).toString('hex');
      }
      async function t6(e, t, r, i, s, n) {
        switch (r.t) {
          case 'eip191':
            var o, a, c;
            return (o = e), (a = t), (c = r.s), eF(t5(a), c).toLowerCase() === o.toLowerCase();
          case 'eip1271':
            return await t4(e, t, r.s, i, s, n);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
            );
        }
      }
      async function t4(e, t, r, i, s, n) {
        let o = e6(i);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
          );
        try {
          let o = '0x1626ba7e',
            a = r.substring(2),
            c = t5(t).substring(2),
            l =
              o +
              c +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            u = await fetch(
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
            { result: h } = await u.json();
          return !!h && h.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var t9 = Object.defineProperty,
        t7 = Object.defineProperties,
        re = Object.getOwnPropertyDescriptors,
        rt = Object.getOwnPropertySymbols,
        rr = Object.prototype.hasOwnProperty,
        ri = Object.prototype.propertyIsEnumerable,
        rs = (e, t, r) =>
          t in e
            ? t9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        rn = (e, t) => {
          for (var r in t || (t = {})) rr.call(t, r) && rs(e, r, t[r]);
          if (rt) for (var r of rt(t)) ri.call(t, r) && rs(e, r, t[r]);
          return e;
        },
        ro = (e, t) => t7(e, re(t));
      let ra = (e) => e?.split(':'),
        rc = (e) => {
          let t = e && ra(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        rl = (e) => {
          let t = e && ra(e);
          if (t) return t[2] + ':' + t[3];
        },
        ru = (e) => {
          let t = e && ra(e);
          if (t) return t.pop();
        };
      async function rh(e) {
        let { cacao: t, projectId: r } = e,
          { s: i, p: s } = t,
          n = rd(s, s.iss),
          o = ru(s.iss);
        return await t6(o, n, i, rl(s.iss), r);
      }
      let rd = (e, t) => {
        let r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = ru(t);
        if (!e.aud && !e.uri)
          throw Error('Either `aud` or `uri` is required to construct the message');
        let s = e.statement || void 0,
          n = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${rc(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          u = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          h = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          f = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join('')}`
            : void 0,
          p = rm(e.resources);
        return (
          p &&
            (s = (function (e = '', t) {
              rf(t);
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
            })(s, rg(p))),
          [r, i, '', s, '', n, o, a, c, l, u, h, d, f].filter((e) => null != e).join(`
`)
        );
      };
      function rf(e) {
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
      function rp(e) {
        return (
          rf(e), `urn:recap:${e5.from(JSON.stringify(e)).toString('base64').replace(/=/g, '')}`
        );
      }
      function rg(e) {
        var t;
        let r =
          ((t = e.replace('urn:recap:', '')), JSON.parse(e5.from(t, 'base64').toString('utf-8')));
        return rf(r), r;
      }
      function ry(e) {
        var t;
        let r = rg(e);
        rf(r);
        let i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split('/')[1]) : [];
      }
      function rb(e) {
        let t = rg(e);
        rf(t);
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
      function rm(e) {
        var t;
        if (!e) return;
        let r = e?.[e.length - 1];
        return (t = r) && t.includes('urn:recap:') ? r : void 0;
      }
      function rv(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function rw(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function rE(e, ...t) {
        if (!rw(e)) throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function r_(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function rI(e) {
        if ('boolean' != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let rx = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        rS = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function rD(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (rw(e)) e = rR(e);
        else throw Error('Uint8Array expected, got ' + typeof e);
        return e;
      }
      function rA(e, t, r = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (r && t.byteOffset % 4 != 0) throw Error('invalid output, must be aligned');
        return t;
      }
      function rO(e, t, r, i) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((r >> s) & n),
          a = Number(r & n),
          c = 4 * !!i,
          l = 4 * !i;
        e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
      }
      function rR(e) {
        return Uint8Array.from(e);
      }
      function rP(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let rN = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        rT = rN('expand 16-byte k'),
        rC = rN('expand 32-byte k'),
        rU = rx(rT),
        rk = rx(rC);
      function rL(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function rM(e) {
        return e.byteOffset % 4 == 0;
      }
      let rq = 0x100000000 - 1,
        rj = new Uint32Array(),
        rB = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class rz {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            rE((e = rD(e)), 32);
          let t = rB(e, 0),
            r = rB(e, 2),
            i = rB(e, 4),
            s = rB(e, 6),
            n = rB(e, 8),
            o = rB(e, 10),
            a = rB(e, 12),
            c = rB(e, 14);
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
          for (let t = 0; t < 8; t++) this.pad[t] = rB(e, 16 + 2 * t);
        }
        process(e, t, r = !1) {
          let { h: i, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            c = s[3],
            l = s[4],
            u = s[5],
            h = s[6],
            d = s[7],
            f = s[8],
            p = s[9],
            g = rB(e, t + 0),
            y = rB(e, t + 2),
            b = rB(e, t + 4),
            m = rB(e, t + 6),
            v = rB(e, t + 8),
            w = rB(e, t + 10),
            E = rB(e, t + 12),
            _ = rB(e, t + 14),
            I = i[0] + (8191 & g),
            x = i[1] + (((g >>> 13) | (y << 3)) & 8191),
            S = i[2] + (((y >>> 10) | (b << 6)) & 8191),
            D = i[3] + (((b >>> 7) | (m << 9)) & 8191),
            A = i[4] + (((m >>> 4) | (v << 12)) & 8191),
            O = i[5] + ((v >>> 1) & 8191),
            R = i[6] + (((v >>> 14) | (w << 2)) & 8191),
            P = i[7] + (((w >>> 11) | (E << 5)) & 8191),
            N = i[8] + (((E >>> 8) | (_ << 8)) & 8191),
            T = i[9] + ((_ >>> 5) | (2048 * !r)),
            C = 0,
            U = 0 + I * n + 5 * p * x + 5 * f * S + 5 * d * D + 5 * h * A;
          (C = U >>> 13),
            (U &= 8191),
            (U += 5 * u * O + 5 * l * R + 5 * c * P + 5 * a * N + 5 * o * T),
            (C += U >>> 13),
            (U &= 8191);
          let k = C + I * o + x * n + 5 * p * S + 5 * f * D + 5 * d * A;
          (C = k >>> 13),
            (k &= 8191),
            (k += 5 * h * O + 5 * u * R + 5 * l * P + 5 * c * N + 5 * a * T),
            (C += k >>> 13),
            (k &= 8191);
          let L = C + I * a + x * o + S * n + 5 * p * D + 5 * f * A;
          (C = L >>> 13),
            (L &= 8191),
            (L += 5 * d * O + 5 * h * R + 5 * u * P + 5 * l * N + 5 * c * T),
            (C += L >>> 13),
            (L &= 8191);
          let M = C + I * c + x * a + S * o + D * n + 5 * p * A;
          (C = M >>> 13),
            (M &= 8191),
            (M += 5 * f * O + 5 * d * R + 5 * h * P + 5 * u * N + 5 * l * T),
            (C += M >>> 13),
            (M &= 8191);
          let q = C + I * l + x * c + S * a + D * o + A * n;
          (C = q >>> 13),
            (q &= 8191),
            (q += 5 * p * O + 5 * f * R + 5 * d * P + 5 * h * N + 5 * u * T),
            (C += q >>> 13),
            (q &= 8191);
          let j = C + I * u + x * l + S * c + D * a + A * o;
          (C = j >>> 13),
            (j &= 8191),
            (j += O * n + 5 * p * R + 5 * f * P + 5 * d * N + 5 * h * T),
            (C += j >>> 13),
            (j &= 8191);
          let B = C + I * h + x * u + S * l + D * c + A * a;
          (C = B >>> 13),
            (B &= 8191),
            (B += O * o + R * n + 5 * p * P + 5 * f * N + 5 * d * T),
            (C += B >>> 13),
            (B &= 8191);
          let z = C + I * d + x * h + S * u + D * l + A * c;
          (C = z >>> 13),
            (z &= 8191),
            (z += O * a + R * o + P * n + 5 * p * N + 5 * f * T),
            (C += z >>> 13),
            (z &= 8191);
          let $ = C + I * f + x * d + S * h + D * u + A * l;
          (C = $ >>> 13),
            ($ &= 8191),
            ($ += O * c + R * a + P * o + N * n + 5 * p * T),
            (C += $ >>> 13),
            ($ &= 8191);
          let F = C + I * p + x * f + S * d + D * h + A * u;
          (C = F >>> 13),
            (F &= 8191),
            (F += O * l + R * c + P * a + N * o + T * n),
            (C += F >>> 13),
            (F &= 8191),
            (U = 8191 & (C = ((C = ((C << 2) + C) | 0) + U) | 0)),
            (C >>>= 13),
            (k += C),
            (i[0] = U),
            (i[1] = k),
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
          rP(r);
        }
        update(e) {
          r_(this);
          let { buffer: t, blockLen: r } = this,
            i = (e = rD(e)).length;
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
          rP(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          r_(this),
            (function (e, t) {
              rE(e);
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
      let r$ = (function (e) {
          let t = (t, r) => e(r).update(rD(t)).digest(),
            r = e(new Uint8Array(32));
          return (
            (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t)), t
          );
        })((e) => new rz(e)),
        rF = (function (e, t) {
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
            rv(s),
            rv(o),
            rI(n),
            rI(r),
            (t, a, c, l, u = 0) => {
              rE(t), rE(a), rE(c);
              let h = c.length;
              if ((void 0 === l && (l = new Uint8Array(h)), rE(l), rv(u), u < 0 || u >= rq))
                throw Error('arx: counter overflow');
              if (l.length < h)
                throw Error(`arx: output (${l.length}) is shorter than data (${h})`);
              let d = [],
                f = t.length,
                p,
                g;
              if (32 === f) d.push((p = rR(t))), (g = rk);
              else if (16 === f && r)
                (p = new Uint8Array(32)).set(t), p.set(t, 16), (g = rU), d.push(p);
              else throw Error(`arx: invalid 32-byte key, got length=${f}`);
              rM(a) || d.push((a = rR(a)));
              let y = rx(p);
              if (i) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                i(g, y, rx(a.subarray(0, 16)), y), (a = a.subarray(16));
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
                    u = rx(l),
                    h = rM(s) && rM(n),
                    d = h ? rx(s) : rj,
                    f = h ? rx(n) : rj;
                  for (let p = 0; p < c; o++) {
                    if ((e(t, r, i, u, o, a), o >= rq)) throw Error('arx: counter overflow');
                    let g = Math.min(64, c - p);
                    if (h && 64 === g) {
                      let e = p / 4;
                      if (p % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, r; t < 16; t++) f[(r = e + t)] = d[r] ^ u[t];
                      p += 64;
                      continue;
                    }
                    for (let e = 0, t; e < g; e++) n[(t = p + e)] = s[t] ^ l[e];
                    p += g;
                  }
                })(e, g, y, rx(a), c, l, u, o),
                rP(...d),
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
              u = t[0],
              h = t[1],
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
              S = u,
              D = h,
              A = d,
              O = f,
              R = p,
              P = g,
              N = y,
              T = b,
              C = s,
              U = m,
              k = v,
              L = w;
            for (let e = 0; e < n; e += 2)
              (R = (R + (C = rL(C ^ (E = (E + S) | 0), 16))) | 0),
                (E = (E + (S = rL(S ^ R, 12))) | 0),
                (R = (R + (C = rL(C ^ E, 8))) | 0),
                (S = rL(S ^ R, 7)),
                (P = (P + (U = rL(U ^ (_ = (_ + D) | 0), 16))) | 0),
                (_ = (_ + (D = rL(D ^ P, 12))) | 0),
                (P = (P + (U = rL(U ^ _, 8))) | 0),
                (D = rL(D ^ P, 7)),
                (N = (N + (k = rL(k ^ (I = (I + A) | 0), 16))) | 0),
                (I = (I + (A = rL(A ^ N, 12))) | 0),
                (N = (N + (k = rL(k ^ I, 8))) | 0),
                (A = rL(A ^ N, 7)),
                (T = (T + (L = rL(L ^ (x = (x + O) | 0), 16))) | 0),
                (x = (x + (O = rL(O ^ T, 12))) | 0),
                (T = (T + (L = rL(L ^ x, 8))) | 0),
                (O = rL(O ^ T, 7)),
                (N = (N + (L = rL(L ^ (E = (E + D) | 0), 16))) | 0),
                (E = (E + (D = rL(D ^ N, 12))) | 0),
                (N = (N + (L = rL(L ^ E, 8))) | 0),
                (D = rL(D ^ N, 7)),
                (T = (T + (C = rL(C ^ (_ = (_ + A) | 0), 16))) | 0),
                (_ = (_ + (A = rL(A ^ T, 12))) | 0),
                (T = (T + (C = rL(C ^ _, 8))) | 0),
                (A = rL(A ^ T, 7)),
                (R = (R + (U = rL(U ^ (I = (I + O) | 0), 16))) | 0),
                (I = (I + (O = rL(O ^ R, 12))) | 0),
                (R = (R + (U = rL(U ^ I, 8))) | 0),
                (O = rL(O ^ R, 7)),
                (P = (P + (k = rL(k ^ (x = (x + S) | 0), 16))) | 0),
                (x = (x + (S = rL(S ^ P, 12))) | 0),
                (P = (P + (k = rL(k ^ x, 8))) | 0),
                (S = rL(S ^ P, 7));
            let M = 0;
            (i[M++] = (o + E) | 0),
              (i[M++] = (a + _) | 0),
              (i[M++] = (c + I) | 0),
              (i[M++] = (l + x) | 0),
              (i[M++] = (u + S) | 0),
              (i[M++] = (h + D) | 0),
              (i[M++] = (d + A) | 0),
              (i[M++] = (f + O) | 0),
              (i[M++] = (p + R) | 0),
              (i[M++] = (g + P) | 0),
              (i[M++] = (y + N) | 0),
              (i[M++] = (b + T) | 0),
              (i[M++] = (s + C) | 0),
              (i[M++] = (m + U) | 0),
              (i[M++] = (v + k) | 0),
              (i[M++] = (w + L) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        rV = new Uint8Array(16),
        rK = (e, t) => {
          e.update(t);
          let r = t.length % 16;
          r && e.update(rV.subarray(r));
        },
        rH = new Uint8Array(32);
      function rJ(e, t, r, i, s) {
        let n = e(t, r, rH),
          o = r$.create(n);
        s && rK(o, s), rK(o, i);
        let a = new Uint8Array(16),
          c = rS(a);
        rO(c, 0, BigInt(s ? s.length : 0), !0), rO(c, 8, BigInt(i.length), !0), o.update(a);
        let l = o.digest();
        return rP(n, a), l;
      }
      let rW = ((e, t) => {
        function r(i, ...s) {
          if ((rE(i), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error('nonce / iv required');
            e.varSizeNonce ? rE(t) : rE(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && rE(s[1]);
          let o = t(i, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error('cipher output not supported');
                rE(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c) throw Error('cannot encrypt() twice with same key + nonce');
              return (c = !0), rE(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((rE(e), n && e.length < n))
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
            (n = rA(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, r, a, a, 1);
            let c = rJ(e, t, r, a, i);
            return n.set(c, o), rP(c), n;
          },
          decrypt(s, n) {
            n = rA(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              c = rJ(e, t, r, o, i);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 0 === r;
              })(a, c)
            )
              throw Error('invalid tag');
            return n.set(s.subarray(0, -16)), e(t, r, n, n, 1), rP(c), n;
          },
        }))(rF)
      );
      class rG extends tz {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), tD(e);
          let r = tB(t);
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
          return tA(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          tA(this),
            tS(e, this.outputLen),
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
      let rY = (e, t, r) => new rG(e, t).update(r).digest();
      rY.create = (e, t) => new rG(e, t);
      let rX = new Uint8Array([0]),
        rQ = new Uint8Array(),
        rZ = (e, t, r, i, s) =>
          (function (e, t, r, i = 32) {
            if ((tD(e), tx(i), i > 255 * e.outputLen))
              throw Error('Length should be <= 255*HashLen');
            let s = Math.ceil(i / e.outputLen);
            void 0 === r && (r = rQ);
            let n = new Uint8Array(s * e.outputLen),
              o = rY.create(e, t),
              a = o._cloneInto(),
              c = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (rX[0] = t + 1),
                a
                  .update(0 === t ? rQ : c)
                  .update(r)
                  .update(rX)
                  .digestInto(c),
                n.set(c, e.outputLen * t),
                o._cloneInto(a);
            return o.destroy(), a.destroy(), c.fill(0), rX.fill(0), n.slice(0, i);
          })(
            e,
            (function (e, t, r) {
              return tD(e), void 0 === r && (r = new Uint8Array(e.outputLen)), rY(e, tB(r), tB(t));
            })(e, t, r),
            i,
            s
          );
      class r0 extends tz {
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
            (this.view = tL(this.buffer));
        }
        update(e) {
          tA(this);
          let { view: t, buffer: r, blockLen: i } = this,
            s = (e = tB(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = tL(e);
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
          tA(this), tO(e, this), (this.finished = !0);
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
          let o = tL(e),
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
      let r1 = new Uint32Array([
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
        r2 = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        r3 = new Uint32Array(64);
      class r8 extends r0 {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | r2[0]),
            (this.B = 0 | r2[1]),
            (this.C = 0 | r2[2]),
            (this.D = 0 | r2[3]),
            (this.E = 0 | r2[4]),
            (this.F = 0 | r2[5]),
            (this.G = 0 | r2[6]),
            (this.H = 0 | r2[7]);
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
          for (let r = 0; r < 16; r++, t += 4) r3[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = r3[e - 15],
              r = r3[e - 2],
              i = tM(t, 7) ^ tM(t, 18) ^ (t >>> 3),
              s = tM(r, 17) ^ tM(r, 19) ^ (r >>> 10);
            r3[e] = (s + r3[e - 7] + i + r3[e - 16]) | 0;
          }
          let { A: r, B: i, C: s, D: n, E: o, F: a, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var u, h, d, f;
            let t =
                (l +
                  (tM(o, 6) ^ tM(o, 11) ^ tM(o, 25)) +
                  (((u = o) & a) ^ (~u & c)) +
                  r1[e] +
                  r3[e]) |
                0,
              p =
                ((tM(r, 2) ^ tM(r, 13) ^ tM(r, 22)) +
                  (((h = r) & (d = i)) ^ (h & (f = s)) ^ (d & f))) |
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
          r3.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let r5 = t$(() => new r8()),
        r6 = BigInt(0);
      function r4(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function r9(e) {
        if (!r4(e)) throw Error('Uint8Array expected');
      }
      let r7 = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0')),
        ie = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function it(e) {
        return e >= ie._0 && e <= ie._9
          ? e - ie._0
          : e >= ie.A && e <= ie.F
            ? e - (ie.A - 10)
            : e >= ie.a && e <= ie.f
              ? e - (ie.a - 10)
              : void 0;
      }
      function ir(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = it(e.charCodeAt(s)),
            n = it(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          i[t] = 16 * r + n;
        }
        return i;
      }
      function ii(e) {
        return (
          r9(e),
          (function (e) {
            if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
            return '' === e ? r6 : BigInt('0x' + e);
          })(
            (function (e) {
              r9(e);
              let t = '';
              for (let r = 0; r < e.length; r++) t += r7[e[r]];
              return t;
            })(Uint8Array.from(e).reverse())
          )
        );
      }
      function is(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = ir(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (r4(t)) i = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = i.length;
        if ('number' == typeof r && s !== r)
          throw Error(e + ' of length ' + r + ' expected, got ' + s);
        return i;
      }
      let io = (e) => 'bigint' == typeof e && r6 <= e;
      function ia(e, t, r, i) {
        if (!(io(t) && io(r) && io(i)) || !(r <= t) || !(t < i))
          throw Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      let ic = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || r4(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        },
        il = BigInt(0),
        iu = BigInt(1);
      function ih(e, t) {
        let r = e % t;
        return r >= il ? r : t + r;
      }
      function id(e, t, r) {
        let i = e;
        for (; t-- > il; ) (i *= i), (i %= r);
        return i;
      }
      BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let ip = BigInt(0),
        ig = BigInt(1),
        iy = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        );
      BigInt(0);
      let ib = BigInt(1),
        im = BigInt(2),
        iv = BigInt(3),
        iw = BigInt(5);
      BigInt(8);
      let iE = (function (e) {
          let t =
              ((function (e, t, r = {}) {
                let i = (t, r, i) => {
                  let s = ic[r];
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
            i = (e) => ih(e, r),
            s = t.montgomeryBits,
            n = Math.ceil(s / 8),
            o = t.nByteLength,
            a = t.adjustScalarBytes || ((e) => e),
            c =
              t.powPminus2 ||
              ((e) =>
                (function (e, t, r) {
                  if (t < il) throw Error('invalid exponent, negatives unsupported');
                  if (r <= il) throw Error('invalid modulus');
                  if (r === iu) return il;
                  let i = iu;
                  for (; t > il; ) t & iu && (i = (i * e) % r), (e = (e * e) % r), (t >>= iu);
                  return i;
                })(e, r - BigInt(2), r));
          function l(e, t, r) {
            let s = i(e * (t - r));
            return [(t = i(t - s)), (r = i(r + s))];
          }
          let u = (t.a - BigInt(2)) / BigInt(4);
          function h(e) {
            var t;
            return ir((t = i(e)).toString(16).padStart(2 * n, '0')).reverse();
          }
          function d(e, t) {
            let d = (function (e, t) {
              ia('u', e, ip, r), ia('scalar', t, ip, r);
              let n = ig,
                o = ip,
                a = e,
                h = ig,
                d = ip,
                f;
              for (let r = BigInt(s - 1); r >= ip; r--) {
                let s = (t >> r) & ig;
                (d ^= s),
                  (n = (f = l(d, n, a))[0]),
                  (a = f[1]),
                  (o = (f = l(d, o, h))[0]),
                  (h = f[1]),
                  (d = s);
                let c = n + o,
                  p = i(c * c),
                  g = n - o,
                  y = i(g * g),
                  b = p - y,
                  m = a + h,
                  v = i((a - h) * c),
                  w = i(m * g),
                  E = v + w,
                  _ = v - w;
                (a = i(E * E)), (h = i(e * i(_ * _))), (n = i(p * y)), (o = i(b * (p + i(u * b))));
              }
              return (
                (n = (f = l(d, n, a))[0]),
                (a = f[1]),
                (o = (f = l(d, o, h))[0]),
                (h = f[1]),
                i(n * c(o))
              );
            })(
              (function (e) {
                let t = is('u coordinate', e, n);
                return 32 === o && (t[31] &= 127), ii(t);
              })(t),
              (function (e) {
                let t = is('scalar', e),
                  r = t.length;
                if (r !== n && r !== o)
                  throw Error(
                    'invalid scalar, expected ' + ('' + n + ' or ') + o + ' bytes, got ' + r
                  );
                return ii(a(t));
              })(e)
            );
            if (d === ip) throw Error('invalid private or public key received');
            return h(d);
          }
          let f = h(t.Gu);
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
          P: iy,
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
                n = (((e * e) % iy) * e) % iy,
                o = (id(n, im, iy) * n) % iy,
                a = (id(o, ib, iy) * e) % iy,
                c = (id(a, iw, iy) * a) % iy,
                l = (id(c, t, iy) * c) % iy,
                u = (id(l, r, iy) * l) % iy,
                h = (id(u, i, iy) * u) % iy,
                d = (id(h, s, iy) * h) % iy,
                f = (id(d, s, iy) * h) % iy,
                p = (id(f, t, iy) * c) % iy;
              return { pow_p_5_8: (id(p, im, iy) * e) % iy, b2: n };
            })(e);
            return ih(id(t, iv, iy) * r, iy);
          },
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          randomBytes: tF,
        }),
        i_ = 'base10',
        iI = 'base16',
        ix = 'base64pad',
        iS = 'base64url',
        iD = 'utf8';
      function iA() {
        return e1(tF(32), iI);
      }
      function iO(e) {
        return e1(r5(e0(e, iI)), iI);
      }
      function iR(e) {
        return e1(r5(e0(e, iD)), iI);
      }
      function iP(e) {
        return Number(e1(e, i_));
      }
      function iN(e) {
        let { encoding: t = ix } = e;
        if (2 === iP(e.type)) return e1(eW([e.type, e.sealed]), t);
        if (1 === iP(e.type)) {
          if (typeof e.senderPublicKey > 'u')
            throw Error('Missing sender public key for type 1 envelope');
          return e1(eW([e.type, e.senderPublicKey, e.iv, e.sealed]), t);
        }
        return e1(eW([e.type, e.iv, e.sealed]), t);
      }
      function iT(e) {
        let { encoded: t, encoding: r = ix } = e,
          i = e0(t, r),
          s = i.slice(0, 1);
        if (1 === iP(s)) {
          let e = i.slice(1, 33),
            t = i.slice(33, 45);
          return { type: s, sealed: i.slice(45), iv: t, senderPublicKey: e };
        }
        if (2 === iP(s)) return { type: s, sealed: i.slice(1), iv: tF(12) };
        let n = i.slice(1, 13);
        return { type: s, sealed: i.slice(13), iv: n };
      }
      function iC(e) {
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
      function iU(e) {
        return (
          1 === e.type &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function ik(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function iL(e) {
        let t = e3.CG[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function iM(e) {
        var t;
        if (!e.includes('wc:')) {
          let t = tI(e);
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
      function iq(e) {
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
      function ij(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      var iB = Object.defineProperty,
        iz = Object.defineProperties,
        i$ = Object.getOwnPropertyDescriptors,
        iF = Object.getOwnPropertySymbols,
        iV = Object.prototype.hasOwnProperty,
        iK = Object.prototype.propertyIsEnumerable,
        iH = (e, t, r) =>
          t in e
            ? iB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        iJ = (e, t) => {
          for (var r in t || (t = {})) iV.call(t, r) && iH(e, r, t[r]);
          if (iF) for (var r of iF(t)) iK.call(t, r) && iH(e, r, t[r]);
          return e;
        },
        iW = (e, t) => iz(e, i$(t));
      function iG(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [r, i] = e.split(':');
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function iY(e) {
        return e.includes(':');
      }
      function iX(e, t) {
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
          i.methods ? (i.methods = tb(i.methods, e)) : (i.methods = e),
            (i.events = ['chainChanged', 'accountsChanged']);
        return r;
      }
      let iQ = {
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
        iZ = {
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
      function i0(e, t) {
        let { message: r, code: i } = iZ[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function i1(e, t) {
        let { message: r, code: i } = iQ[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function i2(e, t) {
        return !!Array.isArray(e) && (!('u' > typeof t) || !e.length || e.every(t));
      }
      function i3(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
      }
      function i8(e) {
        return typeof e > 'u';
      }
      function i5(e, t) {
        return !!(t && i8(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function i6(e, t) {
        return !!(t && i8(e)) || ('number' == typeof e && !isNaN(e));
      }
      function i4(e) {
        return !!(i5(e, !1) && e.includes(':')) && 2 === e.split(':').length;
      }
      function i9(e) {
        let t = !0;
        return i2(e) ? e.length && (t = e.every((e) => i5(e, !1))) : (t = !1), t;
      }
      function i7(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            var i;
            let s;
            if (r) return;
            let n =
              ((i = `${t}, namespace`),
              (s = null),
              i9(e?.methods)
                ? i9(e?.events) ||
                  (s = i1(
                    'UNSUPPORTED_EVENTS',
                    `${i}, events should be an array of strings or empty array for no events`
                  ))
                : (s = i1(
                    'UNSUPPORTED_METHODS',
                    `${i}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            n && (r = n);
          }),
          r
        );
      }
      function se(e, t) {
        let r = null;
        if (e && i3(e)) {
          let i;
          let s = i7(e, t);
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
                i2(r)
                  ? r.forEach((e) => {
                      n ||
                        (function (e) {
                          if (i5(e, !1) && e.includes(':')) {
                            let t = e.split(':');
                            if (3 === t.length) {
                              let e = t[0] + ':' + t[1];
                              return !!t[2] && i4(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = i1(
                          'UNSUPPORTED_ACCOUNTS',
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = i1(
                      'UNSUPPORTED_ACCOUNTS',
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (i = o);
            }),
            i);
          n && (r = n);
        } else r = i0('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
        return r;
      }
      function st(e) {
        return i5(e.protocol, !0);
      }
      function sr(e) {
        return 'u' > typeof e;
      }
      function si(e, t) {
        return !(
          !i4(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...iG(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function ss(e, t, r) {
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
                  let i = iG(e[r].accounts);
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
          c = sn(Object.keys(e)),
          l = sn(Object.keys(t)),
          u = c.filter((e) => !l.includes(e));
        return (
          u.length &&
            (i = i0(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          ta(o, a) ||
            (i = i0(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(':') || i) return;
            let s = iG(t[e].accounts);
            s.includes(e) ||
              (i = i0(
                'NON_CONFORMING_NAMESPACES',
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (ta(s[e].methods, n[e].methods)
                ? ta(s[e].events, n[e].events) ||
                  (i = i0(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = i0(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function sn(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
      function so() {
        let e = ti();
        return new Promise((t) => {
          switch (e) {
            case e7.browser:
              t(tr() && navigator?.onLine);
              break;
            case e7.reactNative:
              t(sa());
              break;
            case e7.node:
            default:
              t(!0);
          }
        });
      }
      async function sa() {
        if (tt() && 'u' > typeof r.g && null != r.g && r.g.NetInfo) {
          let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let sc = {};
      class sl {
        static get(e) {
          return sc[e];
        }
        static set(e, t) {
          sc[e] = t;
        }
        static delete(e) {
          delete sc[e];
        }
      }
      var su = r(84214),
        sh = r(32034),
        sd = r(60172),
        sf = r(84719),
        sp = r.n(sf);
      let sg = 'core',
        sy = `wc@2:${sg}:`,
        sb = { logger: 'error' },
        sm = { database: ':memory:' },
        sv = 'client_ed25519_seed',
        sw = d.ONE_DAY,
        sE = d.SIX_HOURS,
        s_ = 'wss://relay.walletconnect.org',
        sI = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          publish: 'relayer_publish',
        },
        sx = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        sS = '2.18.1',
        sD = { link_mode: 'link_mode', relay: 'relay' },
        sA = 'WALLETCONNECT_LINK_MODE_APPS',
        sO = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        sR = 1e3 * d.FIVE_SECONDS,
        sP = {
          wc_pairingDelete: {
            req: { ttl: d.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: d.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: d.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: d.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: d.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: d.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        sN = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        sT = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        sC = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync',
        },
        sU = 'https://verify.walletconnect.org',
        sk = `${sU}/v3`,
        sL = ['https://verify.walletconnect.com', sU],
        sM = {
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
        sq = {
          no_internet_connection: 'no_internet_connection',
          malformed_pairing_uri: 'malformed_pairing_uri',
          active_pairing_already_exists: 'active_pairing_already_exists',
          subscribe_pairing_topic_failure: 'subscribe_pairing_topic_failure',
          pairing_expired: 'pairing_expired',
          proposal_listener_not_found: 'proposal_listener_not_found',
        },
        sj = {
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
        sB = {
          no_internet_connection: 'no_internet_connection',
          proposal_expired: 'proposal_expired',
          subscribe_session_topic_failure: 'subscribe_session_topic_failure',
          session_approve_publish_failure: 'session_approve_publish_failure',
          session_settle_publish_failure: 'session_settle_publish_failure',
          session_approve_namespace_validation_failure:
            'session_approve_namespace_validation_failure',
          proposal_not_found: 'proposal_not_found',
        },
        sz = {
          authenticated_session_approve_started: 'authenticated_session_approve_started',
          create_authenticated_session_topic: 'create_authenticated_session_topic',
          cacaos_verified: 'cacaos_verified',
          store_authenticated_session: 'store_authenticated_session',
          subscribing_authenticated_session_topic: 'subscribing_authenticated_session_topic',
          subscribe_authenticated_session_topic_success:
            'subscribe_authenticated_session_topic_success',
          publishing_authenticated_session_approve: 'publishing_authenticated_session_approve',
        },
        s$ = {
          no_internet_connection: 'no_internet_connection',
          invalid_cacao: 'invalid_cacao',
          subscribe_authenticated_session_topic_failure:
            'subscribe_authenticated_session_topic_failure',
          authenticated_session_approve_publish_failure:
            'authenticated_session_approve_publish_failure',
          authenticated_session_pending_request_not_found:
            'authenticated_session_pending_request_not_found',
        };
      var sF = function (e, t) {
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
          u = Math.log(256) / Math.log(a);
        function h(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var u = r[e.charCodeAt(t)];
              if (255 === u) return;
              for (var h = 0, d = n - 1; (0 !== u || h < s) && -1 !== d; d--, h++)
                (u += (a * o[d]) >>> 0), (o[d] = u % 256 >>> 0), (u = (u / 256) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (s = h), t++;
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
            for (var o = ((n - s) * u + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var h = t[s], d = 0, f = o - 1; (0 !== h || d < i) && -1 !== f; f--, d++)
                (h += (256 * l[f]) >>> 0), (l[f] = h % a >>> 0), (h = (h / a) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var p = o - i; p !== o && 0 === l[p]; ) p++;
            for (var g = c.repeat(r); p < o; ++p) g += e.charAt(l[p]);
            return g;
          },
          decodeUnsafe: h,
          decode: function (e) {
            var r = h(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let sV = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        sK = (e) => new TextEncoder().encode(e),
        sH = (e) => new TextDecoder().decode(e);
      class sJ {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class sW {
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
          return sY(this, e);
        }
      }
      class sG {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return sY(this, e);
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
      let sY = (e, t) =>
        new sG({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class sX {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new sJ(e, t, r)),
            (this.decoder = new sW(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let sQ = ({ name: e, prefix: t, encode: r, decode: i }) => new sX(e, t, r, i),
        sZ = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = sF(r, t);
          return sQ({ prefix: e, name: t, encode: i, decode: (e) => sV(s(e)) });
        },
        s0 = (e, t, r, i) => {
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
        s1 = (e, t, r) => {
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
        s2 = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          sQ({ prefix: t, name: e, encode: (e) => s1(e, i, r), decode: (t) => s0(t, i, r, e) });
      var s3 = Object.freeze({
          __proto__: null,
          identity: sQ({
            prefix: '\0',
            name: 'identity',
            encode: (e) => sH(e),
            decode: (e) => sK(e),
          }),
        }),
        s8 = Object.freeze({
          __proto__: null,
          base2: s2({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        s5 = Object.freeze({
          __proto__: null,
          base8: s2({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        s6 = Object.freeze({
          __proto__: null,
          base10: sZ({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        s4 = Object.freeze({
          __proto__: null,
          base16: s2({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: s2({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let s9 = s2({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        s7 = s2({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        ne = s2({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        nt = s2({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        nr = s2({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        ni = s2({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        ns = s2({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var nn = Object.freeze({
          __proto__: null,
          base32: s9,
          base32upper: s7,
          base32pad: ne,
          base32padupper: nt,
          base32hex: nr,
          base32hexupper: ni,
          base32hexpad: ns,
          base32hexpadupper: s2({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: s2({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        no = Object.freeze({
          __proto__: null,
          base36: sZ({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: sZ({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        na = Object.freeze({
          __proto__: null,
          base58btc: sZ({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: sZ({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let nc = s2({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        nl = s2({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var nu = Object.freeze({
        __proto__: null,
        base64: nc,
        base64pad: nl,
        base64url: s2({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: s2({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let nh = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        nd = nh.reduce((e, t, r) => ((e[r] = t), e), []),
        nf = nh.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var np = Object.freeze({
        __proto__: null,
        base256emoji: sQ({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += nd[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = nf[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function ng(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (ng.bytes = r - i + 1), t;
      }
      function ny(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((ny.bytes = 0), RangeError('Could not decode varint'));
          (r = e[n++]), (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)), (s += 7);
        } while (r >= 128);
        return (ny.bytes = n - t), i;
      }
      var nb = {
        encode: ng,
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
      let nm = (e, t, r = 0) => (nb.encode(e, t, r), t),
        nv = (e) => nb.encodingLength(e),
        nw = (e, t) => {
          let r = t.byteLength,
            i = nv(e),
            s = i + nv(r),
            n = new Uint8Array(s + r);
          return nm(e, n, 0), nm(r, n, i), n.set(t, s), new nE(e, r, t, n);
        };
      class nE {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let n_ = ({ name: e, code: t, encode: r }) => new nI(e, t, r);
      class nI {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? nw(this.code, t) : t.then((e) => nw(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let nx = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var nS = Object.freeze({
          __proto__: null,
          sha256: n_({ name: 'sha2-256', code: 18, encode: nx('SHA-256') }),
          sha512: n_({ name: 'sha2-512', code: 19, encode: nx('SHA-512') }),
        }),
        nD = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: sV, digest: (e) => nw(0, sV(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let nA = { ...s3, ...s8, ...s5, ...s6, ...s4, ...nn, ...no, ...na, ...nu, ...np };
      function nO(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...nS, ...nD });
      let nR = nO(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        nP = nO(
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
        nN = { utf8: nR, 'utf-8': nR, hex: nA.base16, latin1: nP, ascii: nP, binary: nP, ...nA };
      var nT = Object.defineProperty,
        nC = (e, t, r) =>
          t in e
            ? nT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nU = (e, t, r) => nC(e, 'symbol' != typeof t ? t + '' : t, r);
      class nk {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            nU(this, 'keychain', new Map()),
            nU(this, 'name', 'keychain'),
            nU(this, 'version', '0.3'),
            nU(this, 'initialized', !1),
            nU(this, 'storagePrefix', sy),
            nU(this, 'init', async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            nU(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            nU(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            nU(this, 'get', (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = i0('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            nU(this, 'del', async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, u.U5)(t, this.name));
        }
        get context() {
          return (0, u.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, tc(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? tl(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nL = Object.defineProperty,
        nM = (e, t, r) =>
          t in e
            ? nL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nq = (e, t, r) => nM(e, 'symbol' != typeof t ? t + '' : t, r);
      class nj {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            nq(this, 'name', 'crypto'),
            nq(this, 'keychain'),
            nq(this, 'randomSessionIdentifier', iA()),
            nq(this, 'initialized', !1),
            nq(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            nq(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            nq(this, 'getClientId', async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = p.TZ(e);
              return p.UF(t.publicKey);
            }),
            nq(this, 'generateKeyPair', () => {
              this.isInitialized();
              let e = (function () {
                let e = iE.utils.randomPrivateKey(),
                  t = iE.getPublicKey(e);
                return { privateKey: e1(e, iI), publicKey: e1(t, iI) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            nq(this, 'signJWT', async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                r = p.TZ(t),
                i = this.randomSessionIdentifier;
              return await p.FA(i, e, sw, r);
            }),
            nq(this, 'generateSharedKey', (e, t, r) => {
              var i;
              this.isInitialized();
              let s =
                ((i = this.getPrivateKey(e)),
                e1(rZ(r5, iE.getSharedSecret(e0(i, iI), e0(t, iI)), void 0, void 0, 32), iI));
              return this.setSymKey(s, r);
            }),
            nq(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              let r = t || iO(e);
              return await this.keychain.set(r, e), r;
            }),
            nq(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            nq(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            nq(this, 'encode', async (e, t, r) => {
              this.isInitialized();
              let i = iC(r),
                s = (0, f.h)(t);
              if (2 === i.type)
                return (function (e, t) {
                  let r = e0('2', i_),
                    i = tF(12);
                  return iN({ type: r, sealed: e0(e, iD), iv: i, encoding: t });
                })(s, r?.encoding);
              if (iU(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (function (e) {
                var t;
                let r = ((t = 'u' > typeof e.type ? e.type : 0), e0(`${t}`, i_));
                if (1 === iP(r) && typeof e.senderPublicKey > 'u')
                  throw Error('Missing sender public key for type 1 envelope');
                let i = 'u' > typeof e.senderPublicKey ? e0(e.senderPublicKey, iI) : void 0,
                  s = 'u' > typeof e.iv ? e0(e.iv, iI) : tF(12);
                return iN({
                  type: r,
                  sealed: rW(e0(e.symKey, iI), s).encrypt(e0(e.message, iD)),
                  iv: s,
                  senderPublicKey: i,
                  encoding: e.encoding,
                });
              })({ type: o, symKey: n, message: s, senderPublicKey: a, encoding: r?.encoding });
            }),
            nq(this, 'decode', async (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = iT({ encoded: e, encoding: t?.encoding });
                return iC({
                  type: iP(r.type),
                  senderPublicKey:
                    'u' > typeof r.senderPublicKey ? e1(r.senderPublicKey, iI) : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (2 === i.type) {
                let e = (function (e, t) {
                  let { sealed: r } = iT({ encoded: e, encoding: t });
                  return e1(r, iD);
                })(t, r?.encoding);
                return (0, f.j)(e);
              }
              if (iU(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                let i = this.getSymKey(e),
                  s = (function (e) {
                    let t = e0(e.symKey, iI),
                      { sealed: r, iv: i } = iT(e),
                      s = rW(t, i).decrypt(r);
                    if (null === s) throw Error('Failed to decrypt');
                    return e1(s, iD);
                  })({ symKey: i, encoded: t, encoding: r?.encoding });
                return (0, f.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            nq(this, 'getPayloadType', (e, t = ix) => iP(iT({ encoded: e, encoding: t }).type)),
            nq(this, 'getPayloadSenderPublicKey', (e, t = ix) => {
              let r = iT({ encoded: e, encoding: t });
              return r.senderPublicKey ? e1(r.senderPublicKey, iI) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, u.U5)(t, this.name)),
            (this.keychain = r || new nk(this.core, this.logger));
        }
        get context() {
          return (0, u.oI)(this.logger);
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
            e = this.keychain.get(sv);
          } catch {
            (e = iA()), await this.keychain.set(sv, e);
          }
          return (function (e, t = 'utf8') {
            let r = nN[t];
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
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nB = Object.defineProperty,
        nz = (e, t, r) =>
          t in e
            ? nB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n$ = (e, t, r) => nz(e, 'symbol' != typeof t ? t + '' : t, r);
      class nF extends h.dQ {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            n$(this, 'messages', new Map()),
            n$(this, 'name', 'messages'),
            n$(this, 'version', '0.3'),
            n$(this, 'initialized', !1),
            n$(this, 'storagePrefix', sy),
            n$(this, 'init', async () => {
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
            n$(this, 'set', async (e, t) => {
              this.isInitialized();
              let r = iR(t),
                i = this.messages.get(e);
              return (
                typeof i > 'u' && (i = {}),
                'u' > typeof i[r] || ((i[r] = t), this.messages.set(e, i), await this.persist()),
                r
              );
            }),
            n$(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            n$(this, 'has', (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[iR(t)])),
            n$(this, 'del', async (e) => {
              this.isInitialized(), this.messages.delete(e), await this.persist();
            }),
            (this.logger = (0, u.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, u.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, tc(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? tl(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nV = Object.defineProperty,
        nK = Object.defineProperties,
        nH = Object.getOwnPropertyDescriptors,
        nJ = Object.getOwnPropertySymbols,
        nW = Object.prototype.hasOwnProperty,
        nG = Object.prototype.propertyIsEnumerable,
        nY = (e, t, r) =>
          t in e
            ? nV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nX = (e, t) => {
          for (var r in t || (t = {})) nW.call(t, r) && nY(e, r, t[r]);
          if (nJ) for (var r of nJ(t)) nG.call(t, r) && nY(e, r, t[r]);
          return e;
        },
        nQ = (e, t) => nK(e, nH(t)),
        nZ = (e, t, r) => nY(e, 'symbol' != typeof t ? t + '' : t, r);
      class n0 extends h.qE {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            nZ(this, 'events', new o.EventEmitter()),
            nZ(this, 'name', 'publisher'),
            nZ(this, 'queue', new Map()),
            nZ(this, 'publishTimeout', (0, d.toMiliseconds)(d.ONE_MINUTE)),
            nZ(this, 'initialPublishTimeout', (0, d.toMiliseconds)(15 * d.ONE_SECOND)),
            nZ(this, 'needsTransportRestart', !1),
            nZ(this, 'publish', async (e, t, r) => {
              var i;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: r },
                });
              let s = r?.ttl || sE,
                n = ik(r),
                o = r?.prompt || !1,
                a = r?.tag || 0,
                c = r?.id || (0, sh.getBigIntRpcId)().toString(),
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
                u = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                let i = new Promise(async (i) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(sI.publish, n),
                      i(l));
                  };
                  this.relayer.events.on(sI.publish, n);
                  let u = th(
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
                    await u, this.events.removeListener(sI.publish, n);
                  } catch (e) {
                    this.queue.set(c, nQ(nX({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: c, topic: e, message: t, opts: r },
                }),
                  await th(i, this.publishTimeout, u);
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
            nZ(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            nZ(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            nZ(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            nZ(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, u.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, u.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, r, i, s;
          let {
              topic: n,
              message: o,
              ttl: a = sE,
              prompt: c,
              tag: l,
              id: u,
              attestation: h,
              tvf: d,
            } = e,
            f = {
              method: iL(ik().protocol).publish,
              params: nX({ topic: n, message: o, ttl: a, prompt: c, tag: l, attestation: h }, d),
              id: u,
            };
          i8(null == (t = f.params) ? void 0 : t.prompt) &&
            (null == (r = f.params) || delete r.prompt),
            i8(null == (i = f.params) ? void 0 : i.tag) && (null == (s = f.params) || delete s.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: f });
          let p = await this.relayer.request(f);
          return (
            this.relayer.events.emit(sI.publish, e),
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
            this.queue.set(t, nQ(nX({}, e), { attempt: r }));
            let { topic: i, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish(
                nQ(nX({}, e), {
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
          this.relayer.core.heartbeat.on(c.li.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1), this.relayer.events.emit(sI.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(sI.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var n1 = Object.defineProperty,
        n2 = (e, t, r) =>
          t in e
            ? n1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n3 = (e, t, r) => n2(e, 'symbol' != typeof t ? t + '' : t, r);
      class n8 {
        constructor() {
          n3(this, 'map', new Map()),
            n3(this, 'set', (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            n3(this, 'get', (e) => this.map.get(e) || []),
            n3(this, 'exists', (e, t) => this.get(e).includes(t)),
            n3(this, 'delete', (e, t) => {
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
            n3(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var n5 = Object.defineProperty,
        n6 = Object.defineProperties,
        n4 = Object.getOwnPropertyDescriptors,
        n9 = Object.getOwnPropertySymbols,
        n7 = Object.prototype.hasOwnProperty,
        oe = Object.prototype.propertyIsEnumerable,
        ot = (e, t, r) =>
          t in e
            ? n5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        or = (e, t) => {
          for (var r in t || (t = {})) n7.call(t, r) && ot(e, r, t[r]);
          if (n9) for (var r of n9(t)) oe.call(t, r) && ot(e, r, t[r]);
          return e;
        },
        oi = (e, t) => n6(e, n4(t)),
        os = (e, t, r) => ot(e, 'symbol' != typeof t ? t + '' : t, r);
      class on extends h.mF {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            os(this, 'subscriptions', new Map()),
            os(this, 'topicMap', new n8()),
            os(this, 'events', new o.EventEmitter()),
            os(this, 'name', 'subscription'),
            os(this, 'version', '0.3'),
            os(this, 'pending', new Map()),
            os(this, 'cached', []),
            os(this, 'initialized', !1),
            os(this, 'pendingSubscriptionWatchLabel', 'pending_sub_watch_label'),
            os(this, 'pollingInterval', 20),
            os(this, 'storagePrefix', sy),
            os(this, 'subscribeTimeout', (0, d.toMiliseconds)(d.ONE_MINUTE)),
            os(this, 'initialSubscribeTimeout', (0, d.toMiliseconds)(15 * d.ONE_SECOND)),
            os(this, 'clientId'),
            os(this, 'batchSubscribeTopicsLimit', 500),
            os(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            os(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                let r = ik(t),
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
            os(this, 'unsubscribe', async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                'u' > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            os(this, 'isSubscribed', async (e) => {
              if (this.topics.includes(e)) return !0;
              let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((r, i) => {
                let s = new d.Watch();
                s.start(t);
                let n = setInterval(() => {
                  ((!this.pending.has(e) && this.topics.includes(e)) ||
                    this.cached.some((t) => t.topic === e)) &&
                    (clearInterval(n), s.stop(t), r(!0)),
                    s.elapsed(t) >= sR &&
                      (clearInterval(n), s.stop(t), i(Error('Subscription resolution timeout')));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            os(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            os(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            os(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            os(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            os(this, 'start', async () => {
              await this.onConnect();
            }),
            os(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            os(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            os(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            os(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(c.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(sO.created, async (e) => {
                  let t = sO.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(sO.deleted, async (e) => {
                  let t = sO.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, u.U5)(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return (0, u.oI)(this.logger);
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
            let i = ik(r);
            await this.rpcUnsubscribe(e, t, i);
            let s = i1('USER_DISCONNECTED', `${this.name}, ${e}`);
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
          r?.transportType === sD.relay && (await this.restartToComplete());
          let s = { method: iL(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
          let n = null == (i = r?.internal) ? void 0 : i.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (r?.transportType === sD.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  },
                  (0, d.toMiliseconds)(d.ONE_SECOND)
                ),
                t
              );
            let i = new Promise(async (t) => {
                let r = (i) => {
                  i.topic === e && (this.events.removeListener(sO.created, r), t(i.id));
                };
                this.events.on(sO.created, r);
                try {
                  let i = await th(
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
                  this.events.removeListener(sO.created, r), t(i);
                } catch {}
              }),
              o = await th(
                i,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!o && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return o ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(sI.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: iL(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: t });
          try {
            await await th(
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
            this.relayer.events.emit(sI.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let r = {
            method: iL(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          try {
            t = await await th(
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
            this.relayer.events.emit(sI.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, r) {
          let i = { method: iL(r.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, oi(or({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, or({}, e)), this.pending.delete(e.topic);
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
          this.subscriptions.set(e, or({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(sO.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = i0('NO_MATCHING_KEY', `${this.name}: ${e}`);
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
            this.events.emit(sO.deleted, oi(or({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(sO.sync);
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
          this.events.emit(sO.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = i0('RESTORE_WILL_OVERRIDE', this.name);
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
                e.map(async (e) => oi(or({}, e), { id: await this.getSubscriptionId(e.topic) }))
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
            (await ((t = (0, d.toMiliseconds)(d.ONE_SECOND)), new Promise((e) => setTimeout(e, t))),
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
            let { message: e } = i0('NOT_INITIALIZED', this.name);
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
          return iR(e + (await this.getClientId()));
        }
      }
      var oo = Object.defineProperty,
        oa = Object.getOwnPropertySymbols,
        oc = Object.prototype.hasOwnProperty,
        ol = Object.prototype.propertyIsEnumerable,
        ou = (e, t, r) =>
          t in e
            ? oo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oh = (e, t) => {
          for (var r in t || (t = {})) oc.call(t, r) && ou(e, r, t[r]);
          if (oa) for (var r of oa(t)) ol.call(t, r) && ou(e, r, t[r]);
          return e;
        },
        od = (e, t, r) => ou(e, 'symbol' != typeof t ? t + '' : t, r);
      class of extends h.m5 {
        constructor(e) {
          super(e),
            od(this, 'protocol', 'wc'),
            od(this, 'version', 2),
            od(this, 'core'),
            od(this, 'logger'),
            od(this, 'events', new o.EventEmitter()),
            od(this, 'provider'),
            od(this, 'messages'),
            od(this, 'subscriber'),
            od(this, 'publisher'),
            od(this, 'name', 'relayer'),
            od(this, 'transportExplicitlyClosed', !1),
            od(this, 'initialized', !1),
            od(this, 'connectionAttemptInProgress', !1),
            od(this, 'relayUrl'),
            od(this, 'projectId'),
            od(this, 'packageName'),
            od(this, 'bundleId'),
            od(this, 'hasExperiencedNetworkDisruption', !1),
            od(this, 'pingTimeout'),
            od(this, 'heartBeatTimeout', (0, d.toMiliseconds)(d.THIRTY_SECONDS + d.FIVE_SECONDS)),
            od(this, 'reconnectTimeout'),
            od(this, 'connectPromise'),
            od(this, 'requestsInFlight', []),
            od(this, 'connectTimeout', (0, d.toMiliseconds)(15 * d.ONE_SECOND)),
            od(this, 'request', async (e) => {
              var t, r;
              this.logger.debug('Publishing Request Payload');
              let i = e.id || (0, sh.getBigIntRpcId)().toString();
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
            od(this, 'resetPingTimeout', () => {
              if (te())
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
            od(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            od(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \uD83D\uDEDC'),
                this.startPingTimeout(),
                this.events.emit(sI.connect);
            }),
            od(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            od(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(e, `Fatal socket error: ${e?.message}`),
                this.events.emit(sI.error, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            od(this, 'registerProviderListeners', () => {
              this.provider.on(sx.payload, this.onPayloadHandler),
                this.provider.on(sx.connect, this.onConnectHandler),
                this.provider.on(sx.disconnect, this.onDisconnectHandler),
                this.provider.on(sx.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              'u' > typeof e.logger && 'string' != typeof e.logger
                ? (0, u.U5)(e.logger, this.name)
                : (0, u.h6)((0, u.iP)({ level: e.logger || 'error' }))),
            (this.messages = new nF(this.logger, e.core)),
            (this.subscriber = new on(this, this.logger)),
            (this.publisher = new n0(this, this.logger)),
            (this.relayUrl = e?.relayUrl || s_),
            (this.projectId = e.projectId),
            tt() &&
            'u' > typeof r.g &&
            'u' > typeof (null == r.g ? void 0 : r.g.Platform) &&
            (null == r.g ? void 0 : r.g.Platform.OS) === 'android'
              ? (this.packageName = ts())
              : tt() &&
                'u' > typeof r.g &&
                'u' > typeof (null == r.g ? void 0 : r.g.Platform) &&
                (null == r.g ? void 0 : r.g.Platform.OS) === 'ios' &&
                (this.bundleId = ts()),
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
          return (0, u.oI)(this.logger);
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
              transportType: sD.relay,
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
              t.topic === e && (this.subscriber.off(sO.created, c), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(sO.created, c);
              }),
              new Promise(async (r, i) => {
                (o =
                  (await this.subscriber
                    .subscribe(e, oh({ internal: { throwOnFailedPublish: n } }, t))
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
            ? await th(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(() =>
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
          if (!(await so()))
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
            let e = tp(d.FIVE_MINUTES);
            await this.core.pairing.pairings.set(r, {
              topic: r,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(sI.message, e), await this.recordMessageEvent(e);
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
                  this.provider.once(sx.disconnect, r),
                    await th(
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
                        this.provider.off(sx.disconnect, r),
                          clearTimeout(this.reconnectTimeout),
                          (this.reconnectTimeout = void 0);
                      }),
                    await new Promise(async (e, t) => {
                      let r = () => {
                        t(Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(sx.disconnect, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(sx.disconnect, r);
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
            await new Promise((e) => setTimeout(e, (0, d.toMiliseconds)(+t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, r, i, s;
          if (te())
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
          (this.provider = new su.F(
            new sd.A(
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
                  u = to(e, t, i),
                  h = (function (e, t) {
                    let r = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let i = t[e];
                        void 0 !== i && r.set(e, i);
                      }
                    return r.toString();
                  })(l[1] || '', {
                    auth: s,
                    ua: u,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: c || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + '?' + h;
              })({
                sdkVersion: sS,
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
            (0, sh.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: s, attestation: n } = t.data,
              o = { topic: r, message: i, publishedAt: s, transportType: sD.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(oh({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else (0, sh.isJsonRpcResponse)(e) && this.events.emit(sI.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(sI.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = (0, sh.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(sx.payload, this.onPayloadHandler),
            this.provider.off(sx.connect, this.onConnectHandler),
            this.provider.off(sx.disconnect, this.onDisconnectHandler),
            this.provider.off(sx.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await so();
          !(function (e) {
            var t, i;
            switch (ti()) {
              case e7.browser:
                (t = e),
                  !tt() &&
                    tr() &&
                    (window.addEventListener('online', () => t(!0)),
                    window.addEventListener('offline', () => t(!1)));
                break;
              case e7.reactNative:
                (i = e),
                  tt() &&
                    'u' > typeof r.g &&
                    null != r.g &&
                    r.g.NetInfo &&
                    r.g?.NetInfo.addEventListener((e) => i(e?.isConnected));
              case e7.node:
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
            this.events.emit(sI.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                this.connectPromise ||
                (this.reconnectTimeout = setTimeout(
                  async () => {
                    clearTimeout(this.reconnectTimeout),
                      await this.transportOpen().catch((e) => this.logger.error(e, e?.message));
                  },
                  (0, d.toMiliseconds)(0.1)
                )));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(), this.connected || (await this.transportOpen());
        }
      }
      var op = Object.defineProperty,
        og = Object.getOwnPropertySymbols,
        oy = Object.prototype.hasOwnProperty,
        ob = Object.prototype.propertyIsEnumerable,
        om = (e, t, r) =>
          t in e
            ? op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ov = (e, t) => {
          for (var r in t || (t = {})) oy.call(t, r) && om(e, r, t[r]);
          if (og) for (var r of og(t)) ob.call(t, r) && om(e, r, t[r]);
          return e;
        },
        ow = (e, t, r) => om(e, 'symbol' != typeof t ? t + '' : t, r);
      class oE extends h.pi {
        constructor(e, t, r, i = sy, s) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            ow(this, 'map', new Map()),
            ow(this, 'version', '0.3'),
            ow(this, 'cached', []),
            ow(this, 'initialized', !1),
            ow(this, 'getKey'),
            ow(this, 'storagePrefix', sy),
            ow(this, 'recentlyDeleted', []),
            ow(this, 'recentlyDeletedLimit', 200),
            ow(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !i8(e)
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
            ow(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            ow(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            ow(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) => Object.keys(e).every((r) => sp()(t[r], e[r])))
                  : this.values
              )
            ),
            ow(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let r = ov(ov({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            ow(this, 'delete', async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug('Deleting value'),
                  this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, u.U5)(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = s);
        }
        get context() {
          return (0, u.oI)(this.logger);
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
              let { message: t } = i0(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = i0('NO_MATCHING_KEY', `${this.name}: ${e}`);
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
              let { message: e } = i0('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var o_ = Object.defineProperty,
        oI = (e, t, r) =>
          t in e
            ? o_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ox = (e, t, r) => oI(e, 'symbol' != typeof t ? t + '' : t, r);
      class oS {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            ox(this, 'name', 'pairing'),
            ox(this, 'version', '0.3'),
            ox(this, 'events', new (a())()),
            ox(this, 'pairings'),
            ox(this, 'initialized', !1),
            ox(this, 'storagePrefix', sy),
            ox(this, 'ignoredPayloadTypes', [1]),
            ox(this, 'registeredMethods', []),
            ox(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            ox(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            ox(this, 'create', async (e) => {
              this.isInitialized();
              let t = iA(),
                r = await this.core.crypto.setSymKey(t),
                i = tp(d.FIVE_MINUTES),
                s = { protocol: 'irn' },
                n = { topic: r, expiry: i, relay: s, active: !1, methods: e?.methods },
                o = iq({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: i,
                  methods: e?.methods,
                });
              return (
                this.events.emit(sN.create, n),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, n),
                await this.core.relayer.subscribe(r, { transportType: e?.transportType }),
                { topic: r, uri: o }
              );
            }),
            ox(this, 'pair', async (e) => {
              let t;
              this.isInitialized();
              let r = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [sM.pairing_started] },
              });
              this.isValidPair(e, r);
              let { topic: i, symKey: s, relay: n, expiryTimestamp: o, methods: a } = iM(e.uri);
              if (
                ((r.props.properties.topic = i),
                r.addTrace(sM.pairing_uri_validation_success),
                r.addTrace(sM.pairing_uri_not_expired),
                this.pairings.keys.includes(i))
              ) {
                if (((t = this.pairings.get(i)), r.addTrace(sM.existing_pairing), t.active))
                  throw (
                    (r.setError(sq.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${i}. Please try again with a new connection URI.`
                    ))
                  );
                r.addTrace(sM.pairing_not_expired);
              }
              let c = o || tp(d.FIVE_MINUTES),
                l = { topic: i, relay: n, expiry: c, active: !1, methods: a };
              this.core.expirer.set(i, c),
                await this.pairings.set(i, l),
                r.addTrace(sM.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: i })),
                this.events.emit(sN.create, l),
                r.addTrace(sM.emit_inactive_pairing),
                this.core.crypto.keychain.has(i) || (await this.core.crypto.setSymKey(s, i)),
                r.addTrace(sM.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                r.setError(sq.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(i, { relay: n });
              } catch (e) {
                throw (r.setError(sq.subscribe_pairing_topic_failure), e);
              }
              return r.addTrace(sM.subscribe_pairing_topic_success), l;
            }),
            ox(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = tp(d.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            ox(this, 'ping', async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  'ping() is deprecated and will be removed in the next major release.'
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  { done: r, resolve: i, reject: s } = tu();
                this.events.once(ty('pairing_ping', e), ({ error: e }) => {
                  e ? s(e) : i();
                }),
                  await r();
              }
            }),
            ox(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            ox(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            ox(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            ox(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', i1('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            ox(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: r, expiry: i, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return iq({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: r,
                expiryTimestamp: i,
                methods: s,
              });
            }),
            ox(this, 'sendRequest', async (e, t, r) => {
              let i = (0, sh.formatJsonRpcRequest)(t, r),
                s = await this.core.crypto.encode(e, i),
                n = sP[t].req;
              return this.core.history.set(e, i), this.core.relayer.publish(e, s, n), i.id;
            }),
            ox(this, 'sendResult', async (e, t, r) => {
              let i = (0, sh.formatJsonRpcResult)(e, r),
                s = await this.core.crypto.encode(t, i),
                n = sP[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n), await this.core.history.resolve(i);
            }),
            ox(this, 'sendError', async (e, t, r) => {
              let i = (0, sh.formatJsonRpcError)(e, r),
                s = await this.core.crypto.encode(t, i),
                n = await this.core.history.get(t, e),
                o = sP[n.request.method] ? sP[n.request.method].res : sP.unregistered_method.res;
              await this.core.relayer.publish(t, s, o), await this.core.history.resolve(i);
            }),
            ox(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, i1('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            ox(this, 'cleanup', async () => {
              let e = this.pairings.getAll().filter((e) => tg(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            ox(this, 'onRelayEventRequest', (e) => {
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
            ox(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return 'wc_pairingPing' === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            ox(this, 'onPairingPingRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(sN.ping, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            ox(this, 'onPairingPingResponse', (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                (0, sh.isJsonRpcResult)(t)
                  ? this.events.emit(ty('pairing_ping', r), {})
                  : (0, sh.isJsonRpcError)(t) &&
                    this.events.emit(ty('pairing_ping', r), { error: t.error });
              }, 500);
            }),
            ox(this, 'onPairingDeleteRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(sN.delete, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            ox(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = i1('WC_METHOD_UNSUPPORTED', i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            ox(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(i1('WC_METHOD_UNSUPPORTED', e));
            }),
            ox(this, 'isValidPair', (e, t) => {
              var r;
              if (!sr(e)) {
                let { message: r } = i0('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(sq.malformed_pairing_uri), Error(r));
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
                    if (i5(e, !1)) {
                      if (t(e)) return !0;
                      let r = tI(e);
                      return t(r);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: r } = i0('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(sq.malformed_pairing_uri), Error(r));
              }
              let i = iM(e?.uri);
              if (!(null != (r = i?.relay) && r.protocol)) {
                let { message: e } = i0('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
                throw (t.setError(sq.malformed_pairing_uri), Error(e));
              }
              if (!(null != i && i.symKey)) {
                let { message: e } = i0('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(sq.malformed_pairing_uri), Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, d.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                t.setError(sq.pairing_expired);
                let { message: e } = i0(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw Error(e);
              }
            }),
            ox(this, 'isValidPing', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ox(this, 'isValidDisconnect', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ox(this, 'isValidPairingTopic', async (e) => {
              if (!i5(e, !1)) {
                let { message: t } = i0(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = i0('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
                throw Error(t);
              }
              if (tg(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = i0('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, u.U5)(t, this.name)),
            (this.pairings = new oE(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return (0, u.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(sI.message, async (e) => {
            let { topic: t, message: r, transportType: i } = e;
            if (
              !this.pairings.keys.includes(t) ||
              i === sD.link_mode ||
              this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))
            )
              return;
            let s = await this.core.crypto.decode(t, r);
            try {
              (0, sh.isJsonRpcRequest)(s)
                ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s }))
                : (0, sh.isJsonRpcResponse)(s) &&
                  (await this.core.history.resolve(s),
                  await this.onRelayEventResponse({ topic: t, payload: s }),
                  this.core.history.delete(t, s.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(sC.expired, async (e) => {
            let { topic: t } = tf(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(sN.expire, { topic: t }));
          });
        }
      }
      var oD = Object.defineProperty,
        oA = (e, t, r) =>
          t in e
            ? oD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oO = (e, t, r) => oA(e, 'symbol' != typeof t ? t + '' : t, r);
      class oR extends h.lZ {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            oO(this, 'records', new Map()),
            oO(this, 'events', new o.EventEmitter()),
            oO(this, 'name', 'history'),
            oO(this, 'version', '0.3'),
            oO(this, 'cached', []),
            oO(this, 'initialized', !1),
            oO(this, 'storagePrefix', sy),
            oO(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            oO(this, 'set', (e, t, r) => {
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
                expiry: tp(d.THIRTY_DAYS),
              };
              this.records.set(i.id, i), this.persist(), this.events.emit(sT.created, i);
            }),
            oO(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = (0, sh.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(sT.updated, t));
            }),
            oO(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            oO(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((r) => {
                  r.topic !== e ||
                    ('u' > typeof t && r.id !== t) ||
                    (this.records.delete(r.id), this.events.emit(sT.deleted, r));
                }),
                this.persist();
            }),
            oO(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            oO(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            oO(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            oO(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            oO(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, u.U5)(t, this.name));
        }
        get context() {
          return (0, u.oI)(this.logger);
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
                request: (0, sh.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
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
            let { message: t } = i0('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(sT.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = i0('RESTORE_WILL_OVERRIDE', this.name);
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
          this.events.on(sT.created, (e) => {
            let t = sT.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(sT.updated, (e) => {
              let t = sT.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(sT.deleted, (e) => {
              let t = sT.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.core.heartbeat.on(c.li.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, d.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(sT.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var oP = Object.defineProperty,
        oN = (e, t, r) =>
          t in e
            ? oP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oT = (e, t, r) => oN(e, 'symbol' != typeof t ? t + '' : t, r);
      class oC extends h.Vx {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            oT(this, 'expirations', new Map()),
            oT(this, 'events', new o.EventEmitter()),
            oT(this, 'name', 'expirer'),
            oT(this, 'version', '0.3'),
            oT(this, 'cached', []),
            oT(this, 'initialized', !1),
            oT(this, 'storagePrefix', sy),
            oT(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            oT(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            oT(this, 'set', (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(sC.created, { target: r, expiration: i });
            }),
            oT(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            oT(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(sC.deleted, { target: t, expiration: r });
              }
            }),
            oT(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            oT(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            oT(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            oT(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, u.U5)(t, this.name));
        }
        get context() {
          return (0, u.oI)(this.logger);
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
          if ('string' == typeof e) return td('topic', e);
          if ('number' == typeof e) return td('id', e);
          let { message: t } = i0('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(sC.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = i0('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: t } = i0('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, d.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(sC.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(c.li.pulse, () => this.checkExpirations()),
            this.events.on(sC.created, (e) => {
              let t = sC.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(sC.expired, (e) => {
              let t = sC.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(sC.deleted, (e) => {
              let t = sC.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var oU = Object.defineProperty,
        ok = (e, t, r) =>
          t in e
            ? oU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oL = (e, t, r) => ok(e, 'symbol' != typeof t ? t + '' : t, r);
      class oM extends h.zl {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            oL(this, 'name', 'verify-api'),
            oL(this, 'abortController'),
            oL(this, 'isDevEnv'),
            oL(this, 'verifyUrlV3', sk),
            oL(this, 'storagePrefix', sy),
            oL(this, 'version', 2),
            oL(this, 'publicKey'),
            oL(this, 'fetchPromise'),
            oL(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, d.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            oL(this, 'register', async (e) => {
              if (!tr() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: r, decryptedId: i } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                let e = (0, y.getDocument)(),
                  t = this.startAbortTimer(5 * d.ONE_SECOND),
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
                            if ((0, p.Cq)(n.attestation).payload.id !== r) return;
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
            oL(this, 'resolve', async (e) => {
              if (this.isDevEnv) return '';
              let { attestationId: t, hash: r, encryptedId: i } = e;
              if ('' === t) {
                this.logger.debug('resolve: attestationId is empty, skipping');
                return;
              }
              if (t) {
                if ((0, p.Cq)(t).payload.id !== i) return;
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
            oL(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let r = this.startAbortTimer(5 * d.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(r), 200 === i.status ? await i.json() : void 0;
            }),
            oL(this, 'getVerifyUrl', (e) => {
              let t = e || sU;
              return (
                sL.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${sU}`
                  ),
                  (t = sU)),
                t
              );
            }),
            oL(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(d.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            oL(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            oL(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            oL(this, 'isValidJwtAttestation', async (e) => {
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
            oL(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            oL(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            oL(this, 'validateAttestation', (e, t) => {
              let r = (function (e, t) {
                  let [r, i, s] = e.split('.'),
                    n = e5.from(
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
                    c = r5(`${r}.${i}`),
                    l = new e2.ec('p256').keyFromPublic(
                      {
                        x: e5.from(t.x, 'base64').toString('hex'),
                        y: e5.from(t.y, 'base64').toString('hex'),
                      },
                      'hex'
                    ),
                    u = e1(c, iI);
                  if (!l.verify(u, { r: o, s: a })) throw Error('Invalid signature');
                  return (0, p.Cq)(e).payload;
                })(e, t.publicKey),
                i = { hasExpired: (0, d.toMiliseconds)(r.exp) < Date.now(), payload: r };
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
            (this.logger = (0, u.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = t_()),
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
          return (0, u.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(() => this.abortController.abort(), (0, d.toMiliseconds)(e))
          );
        }
      }
      var oq = Object.defineProperty,
        oj = (e, t, r) =>
          t in e
            ? oq(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oB = (e, t, r) => oj(e, 'symbol' != typeof t ? t + '' : t, r);
      class oz extends h.GF {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            oB(this, 'context', 'echo'),
            oB(this, 'registerDeviceToken', async (e) => {
              let { clientId: t, token: r, notificationType: i, enableEncrypted: s = !1 } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id: t, type: i, token: r, always_raw: s }),
              });
            }),
            (this.logger = (0, u.U5)(t, this.context));
        }
      }
      var o$ = Object.defineProperty,
        oF = Object.getOwnPropertySymbols,
        oV = Object.prototype.hasOwnProperty,
        oK = Object.prototype.propertyIsEnumerable,
        oH = (e, t, r) =>
          t in e
            ? o$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oJ = (e, t) => {
          for (var r in t || (t = {})) oV.call(t, r) && oH(e, r, t[r]);
          if (oF) for (var r of oF(t)) oK.call(t, r) && oH(e, r, t[r]);
          return e;
        },
        oW = (e, t, r) => oH(e, 'symbol' != typeof t ? t + '' : t, r);
      class oG extends h.$Q {
        constructor(e, t, r = !0) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            oW(this, 'context', 'event-client'),
            oW(this, 'storagePrefix', sy),
            oW(this, 'storageVersion', 0.1),
            oW(this, 'events', new Map()),
            oW(this, 'shouldPersist', !1),
            oW(this, 'init', async () => {
              if (!t_())
                try {
                  let e = {
                    eventId: tE(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: to(this.core.relayer.protocol, this.core.relayer.version, sS),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            oW(this, 'createEvent', (e) => {
              let {
                  event: t = 'ERROR',
                  type: r = '',
                  properties: { topic: i, trace: s },
                } = e,
                n = tE(),
                o = this.core.projectId || '',
                a = oJ(
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
            oW(this, 'getEvent', (e) => {
              let { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              let i = Array.from(this.events.values()).find((e) => e.props.properties.topic === r);
              if (i) return oJ(oJ({}, i), this.setMethods(i.eventId));
            }),
            oW(this, 'deleteEvent', (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            oW(this, 'setEventListeners', () => {
              this.core.heartbeat.on(c.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, d.fromMiliseconds)(Date.now()) - (0, d.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            oW(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            oW(this, 'addTrace', (e, t) => {
              let r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            oW(this, 'setError', (e, t) => {
              let r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            oW(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            oW(this, 'restore', async () => {
              try {
                let e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, oJ(oJ({}, e), this.setMethods(e.eventId)));
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            oW(this, 'submit', async () => {
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
            oW(this, 'sendEvent', async (e) => {
              let t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${sS}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            oW(this, 'getAppDomain', () => tn().url),
            (this.logger = (0, u.U5)(t, this.context)),
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
      var oY = Object.defineProperty,
        oX = Object.getOwnPropertySymbols,
        oQ = Object.prototype.hasOwnProperty,
        oZ = Object.prototype.propertyIsEnumerable,
        o0 = (e, t, r) =>
          t in e
            ? oY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        o1 = (e, t) => {
          for (var r in t || (t = {})) oQ.call(t, r) && o0(e, r, t[r]);
          if (oX) for (var r of oX(t)) oZ.call(t, r) && o0(e, r, t[r]);
          return e;
        },
        o2 = (e, t, r) => o0(e, 'symbol' != typeof t ? t + '' : t, r);
      class o3 extends h.ZP {
        constructor(e) {
          var t;
          super(e),
            o2(this, 'protocol', 'wc'),
            o2(this, 'version', 2),
            o2(this, 'name', sg),
            o2(this, 'relayUrl'),
            o2(this, 'projectId'),
            o2(this, 'customStoragePrefix'),
            o2(this, 'events', new o.EventEmitter()),
            o2(this, 'logger'),
            o2(this, 'heartbeat'),
            o2(this, 'relayer'),
            o2(this, 'crypto'),
            o2(this, 'storage'),
            o2(this, 'history'),
            o2(this, 'expirer'),
            o2(this, 'pairing'),
            o2(this, 'verify'),
            o2(this, 'echoClient'),
            o2(this, 'linkModeSupportedApps'),
            o2(this, 'eventClient'),
            o2(this, 'initialized', !1),
            o2(this, 'logChunkController'),
            o2(this, 'on', (e, t) => this.events.on(e, t)),
            o2(this, 'once', (e, t) => this.events.once(e, t)),
            o2(this, 'off', (e, t) => this.events.off(e, t)),
            o2(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            o2(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: r }) => {
              if (!e || !t) return;
              let i = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: sD.link_mode,
              };
              this.relayer.onLinkMessageEvent(i, { sessionExists: r });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || s_),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          let r = (0, u.iP)({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : sb.logger,
              name: sg,
            }),
            { logger: i, chunkLoggerController: s } = (0, u.D5)({
              opts: r,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = s),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
              }),
            (this.logger = (0, u.U5)(i, this.name)),
            (this.heartbeat = new c.VH()),
            (this.crypto = new nj(this, this.logger, e?.keychain)),
            (this.history = new oR(this, this.logger)),
            (this.expirer = new oC(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new l.A(o1(o1({}, sm), e?.storageOptions))),
            (this.relayer = new of({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new oS(this, this.logger)),
            (this.verify = new oM(this, this.logger, this.storage)),
            (this.echoClient = new oz(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new oG(this, this.logger, e?.telemetryEnabled));
        }
        static async init(e) {
          let t = new o3(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', r), t;
        }
        get context() {
          return (0, u.oI)(this.logger);
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
            await this.storage.setItem(sA, this.linkModeSupportedApps));
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
              (this.linkModeSupportedApps = (await this.storage.getItem(sA)) || []),
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
      let o8 = 'client',
        o5 = `wc@2:${o8}:`,
        o6 = { name: o8, logger: 'error' },
        o4 = 'WALLETCONNECT_DEEPLINK_CHOICE',
        o9 = 'Proposal expired',
        o7 = d.SEVEN_DAYS,
        ae = {
          wc_sessionPropose: {
            req: { ttl: d.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: d.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: d.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: d.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: d.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: d.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: d.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: d.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: d.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: d.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: d.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: d.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: d.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: d.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        at = { min: d.FIVE_MINUTES, max: d.SEVEN_DAYS },
        ar = { idle: 'IDLE', active: 'ACTIVE' },
        ai = {
          eth_sendTransaction: { key: '' },
          eth_sendRawTransaction: { key: '' },
          wallet_sendCalls: { key: '' },
          solana_signTransaction: { key: 'signature' },
          solana_signAllTransactions: { key: 'transactions' },
          solana_signAndSendTransaction: { key: 'signature' },
        },
        as = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest', 'wc_sessionAuthenticate'],
        an = 'wc@1.5:auth:',
        ao = `${an}:PUB_KEY`;
      var aa = Object.defineProperty,
        ac = Object.defineProperties,
        al = Object.getOwnPropertyDescriptors,
        au = Object.getOwnPropertySymbols,
        ah = Object.prototype.hasOwnProperty,
        ad = Object.prototype.propertyIsEnumerable,
        af = (e, t, r) =>
          t in e
            ? aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ap = (e, t) => {
          for (var r in t || (t = {})) ah.call(t, r) && af(e, r, t[r]);
          if (au) for (var r of au(t)) ad.call(t, r) && af(e, r, t[r]);
          return e;
        },
        ag = (e, t) => ac(e, al(t)),
        ay = (e, t, r) => af(e, 'symbol' != typeof t ? t + '' : t, r);
      class ab extends h.yJ {
        constructor(e) {
          super(e),
            ay(this, 'name', 'engine'),
            ay(this, 'events', new (a())()),
            ay(this, 'initialized', !1),
            ay(this, 'requestQueue', { state: ar.idle, queue: [] }),
            ay(this, 'sessionRequestQueue', { state: ar.idle, queue: [] }),
            ay(this, 'requestQueueDelay', d.ONE_SECOND),
            ay(this, 'expectedPairingMethodMap', new Map()),
            ay(this, 'recentlyDeletedMap', new Map()),
            ay(this, 'recentlyDeletedLimit', 200),
            ay(this, 'relayMessageCache', []),
            ay(this, 'init', async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(ae) }),
                (this.initialized = !0),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  },
                  (0, d.toMiliseconds)(this.requestQueueDelay)
                ));
            }),
            ay(this, 'connect', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = ag(ap({}, e), {
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
                let { message: e } = i0('NO_MATCHING_KEY', `connect() pairing topic: ${a}`);
                throw Error(e);
              }
              let u = await this.client.core.crypto.generateKeyPair(),
                h = ae.wc_sessionPropose.req.ttl || d.FIVE_MINUTES,
                f = tp(h),
                p = ap(
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
                { reject: g, resolve: y, done: b } = tu(h, o9);
              this.events.once(ty('session_connect'), async ({ error: e, session: t }) => {
                if (e) g(e);
                else if (t) {
                  t.self.publicKey = u;
                  let e = ag(ap({}, t), {
                    pairingTopic: p.pairingTopic,
                    requiredNamespaces: p.requiredNamespaces,
                    optionalNamespaces: p.optionalNamespaces,
                    transportType: sD.relay,
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
              return await this.setProposal(m, ap({ id: m }, p)), { uri: c, approval: b };
            }),
            ay(this, 'pair', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error('pair() failed'), e);
              }
            }),
            ay(this, 'approve', async (e) => {
              var t, r, i;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [sj.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(sB.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),
                  s.setError(sB.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error('approve() -> isValidApprove() failed'),
                  s.setError(sB.session_approve_namespace_validation_failure),
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
                u = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: h,
                  proposer: d,
                  requiredNamespaces: f,
                  optionalNamespaces: p,
                } = u,
                g = null == (r = this.client.core.eventClient) ? void 0 : r.getEvent({ topic: h });
              g ||
                (g =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.createEvent({
                        type: sj.session_approve_started,
                        properties: {
                          topic: h,
                          trace: [
                            sj.session_approve_started,
                            sj.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let y = await this.client.core.crypto.generateKeyPair(),
                b = d.publicKey,
                m = await this.client.core.crypto.generateSharedKey(y, b),
                v = ap(
                  ap(
                    {
                      relay: { protocol: o ?? 'irn' },
                      namespaces: a,
                      controller: { publicKey: y, metadata: this.client.metadata },
                      expiry: tp(o7),
                    },
                    c && { sessionProperties: c }
                  ),
                  l && { sessionConfig: l }
                ),
                w = sD.relay;
              g.addTrace(sj.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(m, { transportType: w });
              } catch (e) {
                throw (g.setError(sB.subscribe_session_topic_failure), e);
              }
              g.addTrace(sj.subscribe_session_topic_success);
              let E = ag(ap({}, v), {
                topic: m,
                requiredNamespaces: f,
                optionalNamespaces: p,
                pairingTopic: h,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: d.publicKey, metadata: d.metadata },
                controller: y,
                transportType: sD.relay,
              });
              await this.client.session.set(m, E), g.addTrace(sj.store_session);
              try {
                g.addTrace(sj.publishing_session_settle),
                  await this.sendRequest({
                    topic: m,
                    method: 'wc_sessionSettle',
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (g?.setError(sB.session_settle_publish_failure), e);
                  }),
                  g.addTrace(sj.session_settle_publish_success),
                  g.addTrace(sj.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: h,
                    result: { relay: { protocol: o ?? 'irn' }, responderPublicKey: y },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (g?.setError(sB.session_approve_publish_failure), e);
                  }),
                  g.addTrace(sj.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(m, i1('USER_DISCONNECTED')),
                  await this.client.core.relayer.unsubscribe(m),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({ eventId: g.eventId }),
                await this.client.core.pairing.updateMetadata({ topic: h, metadata: d.metadata }),
                await this.client.proposal.delete(n, i1('USER_DISCONNECTED')),
                await this.client.core.pairing.activate({ topic: h }),
                await this.setExpiry(m, tp(o7)),
                { topic: m, acknowledged: () => Promise.resolve(this.client.session.get(m)) }
              );
            }),
            ay(this, 'reject', async (e) => {
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
                  rpcOpts: ae.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(r, i1('USER_DISCONNECTED')));
            }),
            ay(this, 'update', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (this.client.logger.error('update() -> isValidUpdate() failed'), e);
              }
              let { topic: t, namespaces: r } = e,
                { done: i, resolve: s, reject: n } = tu(),
                o = (0, sh.payloadId)(),
                a = (0, sh.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(ty('session_update', o), ({ error: e }) => {
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
            ay(this, 'extend', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (this.client.logger.error('extend() -> isValidExtend() failed'), e);
              }
              let { topic: t } = e,
                r = (0, sh.payloadId)(),
                { done: i, resolve: s, reject: n } = tu();
              return (
                this.events.once(ty('session_extend', r), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.setExpiry(t, tp(o7)),
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
            ay(this, 'request', async (e) => {
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
                  expiry: s = ae.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(i);
              n?.transportType === sD.relay && (await this.confirmOnlineStateOrThrow());
              let o = (0, sh.payloadId)(),
                a = (0, sh.getBigIntRpcId)().toString(),
                { done: c, resolve: l, reject: u } = tu(s, 'Request expired. Please try again.');
              this.events.once(ty('session_request', o), ({ error: e, result: t }) => {
                e ? u(e) : l(t);
              });
              let h = 'wc_sessionRequest',
                d = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              if (d)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: h,
                    params: { request: ag(ap({}, r), { expiryTimestamp: tp(s) }), chainId: t },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: d,
                  }).catch((e) => u(e)),
                  this.client.events.emit('session_request_sent', {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              let f = { request: ag(ap({}, r), { expiryTimestamp: tp(s) }), chainId: t },
                p = this.shouldSetTVF(h, f);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    ap(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: h,
                        params: f,
                        expiry: s,
                        throwOnFailedPublish: !0,
                      },
                      p && { tvf: this.getTVFParams(o, f) }
                    )
                  ).catch((e) => u(e)),
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
                    let e = await tv(this.client.core.storage, o4);
                    await tm({ id: o, topic: i, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            ay(this, 'respond', async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r,
                s = this.client.session.get(t);
              s.transportType === sD.relay && (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(s.peer.metadata, s.transportType);
              (0, sh.isJsonRpcResult)(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : (0, sh.isJsonRpcError)(r) &&
                  (await this.sendError({ id: i, topic: t, error: r.error, appLink: n })),
                this.cleanupAfterResponse(e);
            }),
            ay(this, 'ping', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (this.client.logger.error('ping() -> isValidPing() failed'), e);
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = (0, sh.payloadId)(),
                  r = (0, sh.getBigIntRpcId)().toString(),
                  { done: i, resolve: s, reject: n } = tu();
                this.events.once(ty('session_ping', e), ({ error: e }) => {
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
            ay(this, 'emit', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e,
                s = (0, sh.getBigIntRpcId)().toString(),
                n = (0, sh.payloadId)();
              await this.sendRequest({
                topic: t,
                method: 'wc_sessionEvent',
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: s,
                clientRpcId: n,
              });
            }),
            ay(this, 'disconnect', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionDelete',
                  params: i1('USER_DISCONNECTED'),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = i0(
                  'MISMATCHED_TOPIC',
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            ay(
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
                      !!ta(s, i) &&
                      (i.forEach((t) => {
                        let { accounts: i, methods: s, events: o } = e.namespaces[t],
                          a = iG(i),
                          c = r[t];
                        (ta(e9(t, c), a) && ta(c.methods, s) && ta(c.events, o)) || (n = !1);
                      }),
                      n)
                    );
                  })(t, e)
                )
              )
            ),
            ay(this, 'getPendingSessionRequests', () => this.client.pendingRequest.getAll()),
            ay(this, 'authenticate', async (e, t) => {
              var r, i, s;
              let n;
              this.isInitialized(), this.isValidAuthenticate(e);
              let o =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect) ? void 0 : r.linkMode),
                a = o ? sD.link_mode : sD.relay;
              a === sD.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: c,
                  statement: l = '',
                  uri: u,
                  domain: h,
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
                _ = iO(E);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(ao, { responseTopic: _, publicKey: E }),
                  this.client.auth.pairingTopics.set(_, { topic: _, pairingTopic: v }),
                ]),
                await this.client.core.relayer.subscribe(_, { transportType: a }),
                this.client.logger.info(`sending request to new pairing topic: ${v}`),
                y.length > 0)
              ) {
                let { namespace: e } = e6(c[0]),
                  t = rp(
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
                rm(m) &&
                  ((i = t),
                  (s = m.pop()),
                  (t = rp(
                    (function (e, t) {
                      rf(e), rf(t);
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
                              i.att[r] = ro(rn({}, i.att[r]), {
                                [s]:
                                  (null == (n = e.att[r]) ? void 0 : n[s]) ||
                                  (null == (o = t.att[r]) ? void 0 : o[s]),
                              });
                            });
                        }),
                        i
                      );
                    })(rg(i), rg(s))
                  ))),
                  m.push(t);
              }
              let I =
                  b && b > ae.wc_sessionAuthenticate.req.ttl
                    ? b
                    : ae.wc_sessionAuthenticate.req.ttl,
                x = {
                  authPayload: {
                    type: f ?? 'caip122',
                    chains: c,
                    statement: l,
                    aud: u,
                    domain: h,
                    version: '1',
                    nonce: d,
                    iat: new Date().toISOString(),
                    exp: p,
                    nbf: g,
                    resources: m,
                  },
                  requester: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: tp(I),
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
                  expiryTimestamp: tp(ae.wc_sessionPropose.req.ttl),
                },
                { done: D, resolve: A, reject: O } = tu(I, 'Request expired'),
                R = async ({ error: e, session: t }) => {
                  if ((this.events.off(ty('session_request', N), P), e)) O(e);
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
                    await this.deleteProposal(T), A({ session: e });
                  }
                },
                P = async (e) => {
                  var r, i, s;
                  let n;
                  if (
                    (await this.deletePendingAuthRequest(N, { message: 'fulfilled', code: 0 }),
                    e.error)
                  ) {
                    let t = i1('WC_METHOD_UNSUPPORTED', 'wc_sessionAuthenticate');
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(ty('session_connect'), R), O(e.error.message));
                  }
                  await this.deleteProposal(T), this.events.off(ty('session_connect'), R);
                  let { cacaos: o, responder: c } = e.result,
                    l = [],
                    u = [];
                  for (let e of o) {
                    (await rh({ cacao: e, projectId: this.client.core.projectId })) ||
                      (this.client.logger.error(e, 'Signature verification failed'),
                      O(i1('SESSION_SETTLEMENT_FAILED', 'Signature verification failed')));
                    let { p: t } = e,
                      r = rm(t.resources),
                      i = [rl(t.iss)],
                      s = ru(t.iss);
                    if (r) {
                      let e = ry(r),
                        t = rb(r);
                      l.push(...e), i.push(...t);
                    }
                    for (let e of i) u.push(`${e}:${s}`);
                  }
                  let h = await this.client.core.crypto.generateSharedKey(E, c.publicKey);
                  l.length > 0 &&
                    ((n = {
                      topic: h,
                      acknowledged: !0,
                      self: { publicKey: E, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: tp(o7),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: 'irn' },
                      pairingTopic: v,
                      namespaces: iX([...new Set(l)], [...new Set(u)]),
                      transportType: a,
                    }),
                    await this.client.core.relayer.subscribe(h, { transportType: a }),
                    await this.client.session.set(h, n),
                    v &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: v,
                        metadata: c.metadata,
                      })),
                    (n = this.client.session.get(h))),
                    null != (r = this.client.metadata.redirect) &&
                      r.linkMode &&
                      null != (i = c.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal),
                      this.client.session.update(h, { transportType: sD.link_mode })),
                    A({ auths: o, session: n });
                },
                N = (0, sh.payloadId)(),
                T = (0, sh.payloadId)();
              this.events.once(ty('session_connect'), R),
                this.events.once(ty('session_request', N), P);
              try {
                if (o) {
                  let e = (0, sh.formatJsonRpcRequest)('wc_sessionAuthenticate', x, N);
                  this.client.core.history.set(v, e);
                  let r = await this.client.core.crypto.encode('', e, { type: 2, encoding: iS });
                  n = ij(t, v, r);
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
                      expiry: ae.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: T,
                    }),
                  ]);
              } catch (e) {
                throw (
                  (this.events.off(ty('session_connect'), R),
                  this.events.off(ty('session_request', N), P),
                  e)
                );
              }
              return (
                await this.setProposal(T, ap({ id: T }, S)),
                await this.setAuthRequest(N, {
                  request: ag(ap({}, x), { verifyContext: {} }),
                  pairingTopic: v,
                  transportType: a,
                }),
                { uri: n ?? w, response: D }
              );
            }),
            ay(this, 'approveSessionAuthenticate', async (e) => {
              let t;
              let { id: r, auths: i } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: r.toString(),
                    trace: [sz.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(s$.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(r);
              if (!n)
                throw (
                  (s.setError(s$.authenticated_session_pending_request_not_found),
                  Error(`Could not find pending auth request with id ${r}`))
                );
              let o = n.transportType || sD.relay;
              o === sD.relay && (await this.confirmOnlineStateOrThrow());
              let a = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = iO(a),
                u = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                h = [],
                d = [];
              for (let e of i) {
                if (!(await rh({ cacao: e, projectId: this.client.core.projectId }))) {
                  s.setError(s$.invalid_cacao);
                  let e = i1('SESSION_SETTLEMENT_FAILED', 'Signature verification failed');
                  throw (
                    (await this.sendError({ id: r, topic: l, error: e, encodeOpts: u }),
                    Error(e.message))
                  );
                }
                s.addTrace(sz.cacaos_verified);
                let { p: t } = e,
                  i = rm(t.resources),
                  n = [rl(t.iss)],
                  o = ru(t.iss);
                if (i) {
                  let e = ry(i),
                    t = rb(i);
                  h.push(...e), n.push(...t);
                }
                for (let e of n) d.push(`${e}:${o}`);
              }
              let f = await this.client.core.crypto.generateSharedKey(c, a);
              if ((s.addTrace(sz.create_authenticated_session_topic), h?.length > 0)) {
                (t = {
                  topic: f,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: a, metadata: n.requester.metadata },
                  controller: a,
                  expiry: tp(o7),
                  authentication: i,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: 'irn' },
                  pairingTopic: n.pairingTopic,
                  namespaces: iX([...new Set(h)], [...new Set(d)]),
                  transportType: o,
                }),
                  s.addTrace(sz.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(f, { transportType: o });
                } catch (e) {
                  throw (s.setError(s$.subscribe_authenticated_session_topic_failure), e);
                }
                s.addTrace(sz.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(f, t),
                  s.addTrace(sz.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(sz.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: r,
                  result: {
                    cacaos: i,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: u,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                });
              } catch (e) {
                throw (s.setError(s$.authenticated_session_approve_publish_failure), e);
              }
              return (
                await this.client.auth.requests.delete(r, { message: 'fulfilled', code: 0 }),
                await this.client.core.pairing.activate({ topic: n.pairingTopic }),
                this.client.core.eventClient.deleteEvent({ eventId: s.eventId }),
                { session: t }
              );
            }),
            ay(this, 'rejectSessionAuthenticate', async (e) => {
              this.isInitialized();
              let { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i) throw Error(`Could not find pending auth request with id ${t}`);
              i.transportType === sD.relay && (await this.confirmOnlineStateOrThrow());
              let s = i.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                o = iO(s);
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: { type: 1, receiverPublicKey: s, senderPublicKey: n },
                rpcOpts: ae.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType),
              }),
                await this.client.auth.requests.delete(t, { message: 'rejected', code: 0 }),
                await this.client.proposal.delete(t, i1('USER_DISCONNECTED'));
            }),
            ay(this, 'formatAuthMessage', (e) => {
              this.isInitialized();
              let { request: t, iss: r } = e;
              return rd(t, r);
            }),
            ay(this, 'processRelayMessageCache', () => {
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
            ay(this, 'cleanupDuplicatePairings', async (e) => {
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
            ay(this, 'deleteSession', async (e) => {
              var t;
              let { topic: r, expirerHasDeleted: i = !1, emitEvent: s = !0, id: n = 0 } = e,
                { self: o } = this.client.session.get(r);
              await this.client.core.relayer.unsubscribe(r),
                await this.client.session.delete(r, i1('USER_DISCONNECTED')),
                this.addToRecentlyDeleted(r, 'session'),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(r) &&
                  (await this.client.core.crypto.deleteSymKey(r)),
                i || this.client.core.expirer.del(r),
                this.client.core.storage.removeItem(o4).catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r && this.deletePendingSessionRequest(e.id, i1('USER_DISCONNECTED'));
                }),
                r === (null == (t = this.sessionRequestQueue.queue[0]) ? void 0 : t.topic) &&
                  (this.sessionRequestQueue.state = ar.idle),
                s && this.client.events.emit('session_delete', { id: n, topic: r });
            }),
            ay(this, 'deleteProposal', async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    r = this.client.core.eventClient.getEvent({ topic: t.pairingTopic });
                  r?.setError(sB.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, i1('USER_DISCONNECTED')),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'proposal');
            }),
            ay(this, 'deletePendingSessionRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'request'),
                (this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(
                  (t) => t.id !== e
                )),
                r &&
                  ((this.sessionRequestQueue.state = ar.idle),
                  this.client.events.emit('session_request_expire', { id: e }));
            }),
            ay(this, 'deletePendingAuthRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            ay(this, 'setExpiry', async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            ay(this, 'setProposal', async (e, t) => {
              this.client.core.expirer.set(e, tp(ae.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            ay(this, 'setAuthRequest', async (e, t) => {
              let { request: r, pairingTopic: i, transportType: s = sD.relay } = t;
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
            ay(this, 'setPendingSessionRequest', async (e) => {
              let { id: t, topic: r, params: i, verifyContext: s } = e,
                n = i.request.expiryTimestamp || tp(ae.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: s,
                });
            }),
            ay(this, 'sendRequest', async (e) => {
              let t, i;
              let {
                  topic: s,
                  method: n,
                  params: o,
                  expiry: a,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: u,
                  appLink: h,
                  tvf: d,
                } = e,
                f = (0, sh.formatJsonRpcRequest)(n, o, l),
                p = !!h;
              try {
                let e = p ? iS : ix;
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
              if (as.includes(n)) {
                let e = iR(JSON.stringify(f)),
                  r = iR(t);
                i = await this.client.core.verify.register({ id: r, decryptedId: e });
              }
              let g = ae[n].req;
              if (
                ((g.attestation = i),
                a && (g.ttl = a),
                c && (g.id = c),
                this.client.core.history.set(s, f),
                p)
              ) {
                let e = ij(h, s, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = ae[n].req;
                a && (e.ttl = a),
                  c && (e.id = c),
                  (e.tvf = ag(ap({}, d), { correlationId: f.id })),
                  u
                    ? ((e.internal = ag(ap({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return f.id;
            }),
            ay(this, 'sendResult', async (e) => {
              let t, i, s;
              let {
                  id: n,
                  topic: o,
                  result: a,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: u,
                } = e,
                h = (0, sh.formatJsonRpcResult)(n, a),
                d = u && 'u' > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = d ? iS : ix;
                t = await this.client.core.crypto.encode(
                  o,
                  h,
                  ag(ap({}, l || {}), { encoding: e })
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
                let e = ij(u, o, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = ae[i.request.method].res;
                (e.tvf = ag(ap({}, s), { correlationId: n })),
                  c
                    ? ((e.internal = ag(ap({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(o, t, e))
                    : this.client.core.relayer
                        .publish(o, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(h);
            }),
            ay(this, 'sendError', async (e) => {
              let t, i;
              let { id: s, topic: n, error: o, encodeOpts: a, rpcOpts: c, appLink: l } = e,
                u = (0, sh.formatJsonRpcError)(s, o),
                h = l && 'u' > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = h ? iS : ix;
                t = await this.client.core.crypto.encode(
                  n,
                  u,
                  ag(ap({}, a || {}), { encoding: e })
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
              if (h) {
                let e = ij(l, n, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = c || ae[i.request.method].res;
                this.client.core.relayer.publish(n, t, e);
              }
              await this.client.core.history.resolve(u);
            }),
            ay(this, 'cleanup', async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                tg(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  tg(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            ay(this, 'onRelayEventRequest', async (e) => {
              this.requestQueue.queue.push(e), await this.processRequestsQueue();
            }),
            ay(this, 'processRequestsQueue', async () => {
              if (this.requestQueue.state === ar.active) {
                this.client.logger.info('Request queue already active, skipping...');
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = ar.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = ar.idle;
            }),
            ay(this, 'processRequest', async (e) => {
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
            ay(this, 'onRelayEventResponse', async (e) => {
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
            ay(this, 'onRelayEventUnknownPayload', (e) => {
              let { topic: t } = e,
                { message: r } = i0(
                  'MISSING_OR_INVALID',
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(r);
            }),
            ay(this, 'shouldIgnorePairingRequest', (e) => {
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
            ay(this, 'onSessionProposeRequest', async (e) => {
              let { topic: t, payload: r, attestation: i, encryptedId: s } = e,
                { params: n, id: o } = r;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount('session_proposal') &&
                  (console.warn('No listener for session_proposal event'),
                  e?.setError(sq.proposal_listener_not_found)),
                  this.isValidConnect(ap({}, r.params));
                let a = n.expiryTimestamp || tp(ae.wc_sessionPropose.req.ttl),
                  c = ap({ id: o, pairingTopic: t, expiryTimestamp: a }, n);
                await this.setProposal(o, c);
                let l = await this.getVerifyContext({
                  attestationId: i,
                  hash: iR(JSON.stringify(r)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(sM.emit_session_proposal),
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
                  rpcOpts: ae.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            ay(this, 'onSessionProposeResponse', async (e, t, r) => {
              let { id: i } = t;
              if ((0, sh.isJsonRpcResult)(t)) {
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
              } else if ((0, sh.isJsonRpcError)(t)) {
                await this.client.proposal.delete(i, i1('USER_DISCONNECTED'));
                let e = ty('session_connect');
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(ty('session_connect'), { error: t.error });
              }
            }),
            ay(this, 'onSessionSettleRequest', async (e, t) => {
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
                  l = ag(
                    ap(
                      ap(
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
                    { transportType: sD.relay }
                  ),
                  u = ty('session_connect');
                if (0 === this.events.listenerCount(u))
                  throw Error(`emitting ${u} without any listeners 997`);
                this.events.emit(ty('session_connect'), { session: l }),
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
            ay(this, 'onSessionSettleResponse', async (e, t) => {
              let { id: r } = t;
              (0, sh.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(ty('session_approve', r), {}))
                : (0, sh.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, i1('USER_DISCONNECTED')),
                  this.events.emit(ty('session_approve', r), { error: t.error }));
            }),
            ay(this, 'onSessionUpdateRequest', async (e, t) => {
              let { params: r, id: i } = t;
              try {
                let t = `${e}_session_update`,
                  s = sl.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.warn(`Discarding out of sync request - ${i}`),
                    this.sendError({ id: i, topic: e, error: i1('INVALID_UPDATE_REQUEST') });
                  return;
                }
                this.isValidUpdate(ap({ topic: e }, r));
                try {
                  sl.set(t, i),
                    await this.client.session.update(e, { namespaces: r.namespaces }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (sl.delete(t), e);
                }
                this.client.events.emit('session_update', { id: i, topic: e, params: r });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ay(
              this,
              'isRequestOutOfSync',
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            ay(this, 'onSessionUpdateResponse', (e, t) => {
              let { id: r } = t,
                i = ty('session_update', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, sh.isJsonRpcResult)(t)
                ? this.events.emit(ty('session_update', r), {})
                : (0, sh.isJsonRpcError)(t) &&
                  this.events.emit(ty('session_update', r), { error: t.error });
            }),
            ay(this, 'onSessionExtendRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, tp(o7)),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_extend', { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ay(this, 'onSessionExtendResponse', (e, t) => {
              let { id: r } = t,
                i = ty('session_extend', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, sh.isJsonRpcResult)(t)
                ? this.events.emit(ty('session_extend', r), {})
                : (0, sh.isJsonRpcError)(t) &&
                  this.events.emit(ty('session_extend', r), { error: t.error });
            }),
            ay(this, 'onSessionPingRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_ping', { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ay(this, 'onSessionPingResponse', (e, t) => {
              let { id: r } = t,
                i = ty('session_ping', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              setTimeout(() => {
                (0, sh.isJsonRpcResult)(t)
                  ? this.events.emit(ty('session_ping', r), {})
                  : (0, sh.isJsonRpcError)(t) &&
                    this.events.emit(ty('session_ping', r), { error: t.error });
              }, 500);
            }),
            ay(this, 'onSessionDeleteRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(sI.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: i1('USER_DISCONNECTED'),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            ay(this, 'onSessionRequest', async (e) => {
              var t, r, i;
              let { topic: s, payload: n, attestation: o, encryptedId: a, transportType: c } = e,
                { id: l, params: u } = n;
              try {
                await this.isValidRequest(ap({ topic: s }, u));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: o,
                    hash: iR(
                      JSON.stringify((0, sh.formatJsonRpcRequest)('wc_sessionRequest', u, l))
                    ),
                    encryptedId: a,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  h = { id: l, topic: s, params: u, verifyContext: n };
                await this.setPendingSessionRequest(h),
                  c === sD.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (r = e.peer.metadata.redirect) ? void 0 : r.universal
                    ),
                  null != (i = this.client.signConfig) && i.disableRequestQueue
                    ? this.emitSessionRequest(h)
                    : (this.addSessionRequestToSessionRequestQueue(h),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: s, error: e }), this.client.logger.error(e);
              }
            }),
            ay(this, 'onSessionRequestResponse', (e, t) => {
              let { id: r } = t,
                i = ty('session_request', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, sh.isJsonRpcResult)(t)
                ? this.events.emit(ty('session_request', r), { result: t.result })
                : (0, sh.isJsonRpcError)(t) &&
                  this.events.emit(ty('session_request', r), { error: t.error });
            }),
            ay(this, 'onSessionEventRequest', async (e, t) => {
              let { id: r, params: i } = t;
              try {
                let t = `${e}_session_event_${i.event.name}`,
                  s = sl.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.info(`Discarding out of sync request - ${r}`);
                  return;
                }
                this.isValidEmit(ap({ topic: e }, i)),
                  this.client.events.emit('session_event', { id: r, topic: e, params: i }),
                  sl.set(t, r);
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            ay(this, 'onSessionAuthenticateResponse', (e, t) => {
              let { id: r } = t;
              this.client.logger.trace({
                type: 'method',
                method: 'onSessionAuthenticateResponse',
                topic: e,
                payload: t,
              }),
                (0, sh.isJsonRpcResult)(t)
                  ? this.events.emit(ty('session_request', r), { result: t.result })
                  : (0, sh.isJsonRpcError)(t) &&
                    this.events.emit(ty('session_request', r), { error: t.error });
            }),
            ay(this, 'onSessionAuthenticateRequest', async (e) => {
              var t;
              let { topic: r, payload: i, attestation: s, encryptedId: n, transportType: o } = e;
              try {
                let { requester: e, authPayload: a, expiryTimestamp: c } = i.params,
                  l = await this.getVerifyContext({
                    attestationId: s,
                    hash: iR(JSON.stringify(i)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  u = {
                    requester: e,
                    pairingTopic: r,
                    id: i.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(i.id, { request: u, pairingTopic: r, transportType: o }),
                  o === sD.link_mode &&
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
                  rpcOpts: ae.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            ay(this, 'addSessionRequestToSessionRequestQueue', (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            ay(this, 'cleanupAfterResponse', (e) => {
              this.deletePendingSessionRequest(e.response.id, { message: 'fulfilled', code: 0 }),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.state = ar.idle), this.processSessionRequestQueue();
                  },
                  (0, d.toMiliseconds)(this.requestQueueDelay)
                );
            }),
            ay(this, 'cleanupPendingSentRequestsForTopic', ({ topic: e, error: t }) => {
              let r = this.client.core.history.pending;
              r.length > 0 &&
                r
                  .filter((t) => t.topic === e && 'wc_sessionRequest' === t.request.method)
                  .forEach((e) => {
                    let r = ty('session_request', e.request.id);
                    if (0 === this.events.listenerCount(r))
                      throw Error(`emitting ${r} without any listeners`);
                    this.events.emit(ty('session_request', e.request.id), { error: t });
                  });
            }),
            ay(this, 'processSessionRequestQueue', () => {
              if (this.sessionRequestQueue.state === ar.active) {
                this.client.logger.info('session request queue is already active.');
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info('session request queue is empty.');
                return;
              }
              try {
                (this.sessionRequestQueue.state = ar.active), this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            ay(this, 'emitSessionRequest', (e) => {
              this.client.events.emit('session_request', e);
            }),
            ay(this, 'onPairingCreated', (e) => {
              if ((e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active))
                return;
              let t = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, sh.formatJsonRpcRequest)(
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
            ay(this, 'isValidConnect', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0(
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
                (i8(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    t && !e
                      ? (r = !0)
                      : e &&
                        i2(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = st(e);
                        }),
                    r
                  );
                })(n, !0))
              ) {
                let { message: e } = i0('MISSING_OR_INVALID', `connect() relays: ${n}`);
                throw Error(e);
              }
              i8(r) || 0 === i3(r) || this.validateNamespaces(r, 'requiredNamespaces'),
                i8(i) || 0 === i3(i) || this.validateNamespaces(i, 'optionalNamespaces'),
                i8(s) || this.validateSessionProps(s, 'sessionProperties');
            }),
            ay(this, 'validateNamespaces', (e, t) => {
              let r = (function (e, t, r) {
                let i = null;
                if (e && i3(e)) {
                  let s;
                  let n = i7(e, t);
                  n && (i = n);
                  let o =
                    ((s = null),
                    Object.entries(e).forEach(([e, i]) => {
                      var n, o;
                      let a;
                      if (s) return;
                      let c =
                        ((n = e9(e, i)),
                        (o = `${t} ${r}`),
                        (a = null),
                        i2(n) && n.length
                          ? n.forEach((e) => {
                              a ||
                                i4(e) ||
                                (a = i1(
                                  'UNSUPPORTED_CHAINS',
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : i4(e) ||
                            (a = i1(
                              'UNSUPPORTED_CHAINS',
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (s = c);
                    }),
                    s);
                  o && (i = o);
                } else i = i0('MISSING_OR_INVALID', `${t}, ${r} should be an object with data`);
                return i;
              })(e, 'connect()', t);
              if (r) throw Error(r.message);
            }),
            ay(this, 'isValidApprove', async (e) => {
              if (!sr(e)) throw Error(i0('MISSING_OR_INVALID', `approve() params: ${e}`).message);
              let { id: t, namespaces: r, relayProtocol: i, sessionProperties: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let n = this.client.proposal.get(t),
                o = se(r, 'approve()');
              if (o) throw Error(o.message);
              let a = ss(n.requiredNamespaces, r, 'approve()');
              if (a) throw Error(a.message);
              if (!i5(i, !0)) {
                let { message: e } = i0('MISSING_OR_INVALID', `approve() relayProtocol: ${i}`);
                throw Error(e);
              }
              i8(s) || this.validateSessionProps(s, 'sessionProperties');
            }),
            ay(this, 'isValidReject', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `reject() params: ${e}`);
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
                    !i6(e.code, !1) ||
                    !e.message ||
                    !i5(e.message, !1)
                  );
                })(r))
              ) {
                let { message: e } = i0(
                  'MISSING_OR_INVALID',
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            ay(this, 'isValidSessionSettleRequest', (e) => {
              if (!sr(e)) {
                let { message: t } = i0(
                  'MISSING_OR_INVALID',
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: r, namespaces: i, expiry: s } = e;
              if (!st(t)) {
                let { message: e } = i0(
                  'MISSING_OR_INVALID',
                  'onSessionSettleRequest() relay protocol should be a string'
                );
                throw Error(e);
              }
              let n = (function (e, t) {
                let r = null;
                return (
                  i5(e?.publicKey, !1) ||
                    (r = i0('MISSING_OR_INVALID', `${t} controller public key should be a string`)),
                  r
                );
              })(r, 'onSessionSettleRequest()');
              if (n) throw Error(n.message);
              let o = se(i, 'onSessionSettleRequest()');
              if (o) throw Error(o.message);
              if (tg(s)) {
                let { message: e } = i0('EXPIRED', 'onSessionSettleRequest()');
                throw Error(e);
              }
            }),
            ay(this, 'isValidUpdate', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `update() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                s = se(r, 'update()');
              if (s) throw Error(s.message);
              let n = ss(i.requiredNamespaces, r, 'update()');
              if (n) throw Error(n.message);
            }),
            ay(this, 'isValidExtend', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `extend() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            ay(this, 'isValidRequest', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `request() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, request: r, chainId: i, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!si(n, i)) {
                let { message: e } = i0('MISSING_OR_INVALID', `request() chainId: ${i}`);
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(i8(e) || !i5(e.method, !1));
                })(r)
              ) {
                let { message: e } = i0('MISSING_OR_INVALID', `request() ${JSON.stringify(r)}`);
                throw Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!i5(r, !1) &&
                    (function (e, t) {
                      let r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          iG(e.accounts).includes(t) && r.push(...e.methods);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(n, i, r.method)
              ) {
                let { message: e } = i0('MISSING_OR_INVALID', `request() method: ${r.method}`);
                throw Error(e);
              }
              if (
                s &&
                !(function (e, t) {
                  return i6(e, !1) && e <= t.max && e >= t.min;
                })(s, at)
              ) {
                let { message: e } = i0(
                  'MISSING_OR_INVALID',
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${at.min} and ${at.max}`
                );
                throw Error(e);
              }
            }),
            ay(this, 'isValidRespond', async (e) => {
              var t;
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `respond() params: ${e}`);
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
                    i8(e) ||
                    (i8(e.result) && i8(e.error)) ||
                    !i6(e.id, !1) ||
                    !i5(e.jsonrpc, !1)
                  );
                })(i)
              ) {
                let { message: e } = i0(
                  'MISSING_OR_INVALID',
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            ay(this, 'isValidPing', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            ay(this, 'isValidEmit', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `emit() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!si(s, i)) {
                let { message: e } = i0('MISSING_OR_INVALID', `emit() chainId: ${i}`);
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(i8(e) || !i5(e.name, !1));
                })(r) ||
                !(function (e, t, r) {
                  return (
                    !!i5(r, !1) &&
                    (function (e, t) {
                      let r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          iG(e.accounts).includes(t) && r.push(...e.events);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(s, i, r.name)
              ) {
                let { message: e } = i0('MISSING_OR_INVALID', `emit() event: ${JSON.stringify(r)}`);
                throw Error(e);
              }
            }),
            ay(this, 'isValidDisconnect', async (e) => {
              if (!sr(e)) {
                let { message: t } = i0('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            ay(this, 'isValidAuthenticate', (e) => {
              let { chains: t, uri: r, domain: i, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error('chains is required and must be a non-empty array');
              if (!i5(r, !1)) throw Error('uri is required parameter');
              if (!i5(i, !1)) throw Error('domain is required parameter');
              if (!i5(s, !1)) throw Error('nonce is required parameter');
              if ([...new Set(t.map((e) => e6(e).namespace))].length > 1)
                throw Error(
                  'Multi-namespace requests are not supported. Please request single namespace only.'
                );
              let { namespace: n } = e6(t[0]);
              if ('eip155' !== n)
                throw Error(
                  'Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.'
                );
            }),
            ay(this, 'getVerifyContext', async (e) => {
              let { attestationId: t, hash: r, encryptedId: i, metadata: s, transportType: n } = e,
                o = {
                  verified: {
                    verifyUrl: s.verifyUrl || sU,
                    validation: 'UNKNOWN',
                    origin: s.url || '',
                  },
                };
              try {
                if (n === sD.link_mode) {
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
            ay(this, 'validateSessionProps', (e, t) => {
              Object.values(e).forEach((e) => {
                if (!i5(e, !1)) {
                  let { message: r } = i0(
                    'MISSING_OR_INVALID',
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`
                  );
                  throw Error(r);
                }
              });
            }),
            ay(this, 'getPendingAuthRequest', (e) => {
              let t = this.client.auth.requests.get(e);
              return 'object' == typeof t ? t : void 0;
            }),
            ay(this, 'addToRecentlyDeleted', (e, t) => {
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
            ay(this, 'checkRecentlyDeleted', (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: r } = i0(
                  'MISSING_OR_INVALID',
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(r);
              }
            }),
            ay(this, 'isLinkModeEnabled', (e, t) => {
              var i, s, n, o, a, c, l, u, h;
              return (
                !!e &&
                t === sD.link_mode &&
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
                (null == (u = e?.redirect) ? void 0 : u.universal) !== '' &&
                (null == (h = e?.redirect) ? void 0 : h.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(e.redirect.universal) &&
                'u' > typeof (null == r.g ? void 0 : r.g.Linking)
              );
            }),
            ay(this, 'getAppLinkIfEnabled', (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = e?.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            ay(this, 'handleLinkModeMessage', ({ url: e }) => {
              if (!e || !e.includes('wc_ev') || !e.includes('topic')) return;
              let t = tw(e, 'topic') || '',
                r = decodeURIComponent(tw(e, 'wc_ev') || ''),
                i = this.client.session.keys.includes(t);
              i && this.client.session.update(t, { transportType: sD.link_mode }),
                this.client.core.dispatchEnvelope({ topic: t, message: r, sessionExists: i });
            }),
            ay(this, 'registerLinkModeListeners', async () => {
              var e;
              if (t_() || (tt() && null != (e = this.client.metadata.redirect) && e.linkMode)) {
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
            ay(this, 'shouldSetTVF', (e, t) => {
              if (!t || 'wc_sessionRequest' !== e) return !1;
              let { request: r } = t;
              return Object.keys(ai).includes(r.method);
            }),
            ay(this, 'getTVFParams', (e, t, r) => {
              var i, s;
              try {
                let n = t.request.method,
                  o = this.extractTxHashesFromResult(n, r);
                return ag(
                  ap(
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
            ay(this, 'isValidContractData', (e) => {
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
            ay(this, 'extractTxHashesFromResult', (e, t) => {
              try {
                let r = ai[e];
                if ('string' == typeof t) return [t];
                let i = t[r.key];
                if (i2(i)) return i;
                if ('string' == typeof i) return [i];
              } catch (e) {
                this.client.logger.warn('Error extracting tx hashes from result', e);
              }
              return [];
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = i0('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(sI.message, (e) => {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(e)
              : this.onRelayMessage(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: r, attestation: i, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(ao)
              ? this.client.auth.authKeys.get(ao)
              : { responseTopic: void 0, publicKey: void 0 },
            o = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: n,
              encoding: s === sD.link_mode ? iS : ix,
            });
          try {
            (0, sh.isJsonRpcRequest)(o)
              ? (this.client.core.history.set(t, o),
                this.onRelayEventRequest({
                  topic: t,
                  payload: o,
                  attestation: i,
                  transportType: s,
                  encryptedId: iR(r),
                }))
              : (0, sh.isJsonRpcResponse)(o)
                ? (await this.client.core.history.resolve(o),
                  await this.onRelayEventResponse({ topic: t, payload: o, transportType: s }),
                  this.client.core.history.delete(t, o.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: o, transportType: s });
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(sC.expired, async (e) => {
            let { topic: t, id: r } = tf(e.target);
            return r && this.client.pendingRequest.keys.includes(r)
              ? await this.deletePendingSessionRequest(r, i0('EXPIRED'), !0)
              : r && this.client.auth.requests.keys.includes(r)
                ? await this.deletePendingAuthRequest(r, i0('EXPIRED'), !0)
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
          this.client.core.pairing.events.on(sN.create, (e) => this.onPairingCreated(e)),
            this.client.core.pairing.events.on(sN.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, 'pairing');
            });
        }
        isValidPairingTopic(e) {
          if (!i5(e, !1)) {
            let { message: t } = i0('MISSING_OR_INVALID', `pairing topic should be a string: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = i0('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (tg(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = i0('EXPIRED', `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!i5(e, !1)) {
            let { message: t } = i0('MISSING_OR_INVALID', `session topic should be a string: ${e}`);
            throw Error(t);
          }
          if ((this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))) {
            let { message: t } = i0('NO_MATCHING_KEY', `session topic doesn't exist: ${e}`);
            throw Error(t);
          }
          if (tg(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = i0('EXPIRED', `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = i0(
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
          else if (i5(e, !1)) {
            let { message: t } = i0(
              'NO_MATCHING_KEY',
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = i0(
              'MISSING_OR_INVALID',
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ('number' != typeof e) {
            let { message: t } = i0('MISSING_OR_INVALID', `proposal id should be a number: ${e}`);
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = i0('NO_MATCHING_KEY', `proposal id doesn't exist: ${e}`);
            throw Error(t);
          }
          if (tg(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = i0('EXPIRED', `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class am extends oE {
        constructor(e, t) {
          super(e, t, 'proposal', o5), (this.core = e), (this.logger = t);
        }
      }
      class av extends oE {
        constructor(e, t) {
          super(e, t, 'session', o5), (this.core = e), (this.logger = t);
        }
      }
      class aw extends oE {
        constructor(e, t) {
          super(e, t, 'request', o5, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      class aE extends oE {
        constructor(e, t) {
          super(e, t, 'authKeys', an, () => ao), (this.core = e), (this.logger = t);
        }
      }
      class a_ extends oE {
        constructor(e, t) {
          super(e, t, 'pairingTopics', an), (this.core = e), (this.logger = t);
        }
      }
      class aI extends oE {
        constructor(e, t) {
          super(e, t, 'requests', an, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      var ax = Object.defineProperty,
        aS = (e, t, r) =>
          t in e
            ? ax(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        aD = (e, t, r) => aS(e, 'symbol' != typeof t ? t + '' : t, r);
      class aA {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            aD(this, 'authKeys'),
            aD(this, 'pairingTopics'),
            aD(this, 'requests'),
            (this.authKeys = new aE(this.core, this.logger)),
            (this.pairingTopics = new a_(this.core, this.logger)),
            (this.requests = new aI(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
        }
      }
      var aO = Object.defineProperty,
        aR = (e, t, r) =>
          t in e
            ? aO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        aP = (e, t, r) => aR(e, 'symbol' != typeof t ? t + '' : t, r);
      class aN extends h.S9 {
        constructor(e) {
          super(e),
            aP(this, 'protocol', 'wc'),
            aP(this, 'version', 2),
            aP(this, 'name', o6.name),
            aP(this, 'metadata'),
            aP(this, 'core'),
            aP(this, 'logger'),
            aP(this, 'events', new o.EventEmitter()),
            aP(this, 'engine'),
            aP(this, 'session'),
            aP(this, 'proposal'),
            aP(this, 'pendingRequest'),
            aP(this, 'auth'),
            aP(this, 'signConfig'),
            aP(this, 'on', (e, t) => this.events.on(e, t)),
            aP(this, 'once', (e, t) => this.events.once(e, t)),
            aP(this, 'off', (e, t) => this.events.off(e, t)),
            aP(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            aP(this, 'removeAllListeners', (e) => this.events.removeAllListeners(e)),
            aP(this, 'connect', async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'pair', async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'approve', async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'reject', async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'update', async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'extend', async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'request', async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'respond', async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'ping', async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'emit', async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'disconnect', async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'find', (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'getPendingSessionRequests', () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'authenticate', async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'formatAuthMessage', (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'approveSessionAuthenticate', async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            aP(this, 'rejectSessionAuthenticate', async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || o6.name),
            (this.metadata = e?.metadata || tn()),
            (this.signConfig = e?.signConfig);
          let t =
            'u' > typeof e?.logger && 'string' != typeof e?.logger
              ? e.logger
              : (0, u.h6)((0, u.iP)({ level: e?.logger || o6.logger }));
          (this.core = e?.core || new o3(e)),
            (this.logger = (0, u.U5)(t, this.name)),
            (this.session = new av(this.core, this.logger)),
            (this.proposal = new am(this.core, this.logger)),
            (this.pendingRequest = new aw(this.core, this.logger)),
            (this.engine = new ab(this)),
            (this.auth = new aA(this.core, this.logger));
        }
        static async init(e) {
          let t = new aN(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, u.oI)(this.logger);
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
                (0, d.toMiliseconds)(d.ONE_SECOND)
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
      let aT = av,
        aC = aN;
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
//# sourceMappingURL=2970.eb61ebbff1f4c33d.js.map
