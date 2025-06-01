'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9898],
  {
    12106: function (t, e, n) {
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0) throw Error('positive integer expected, got ' + t);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && 'Uint8Array' === t.constructor.name)
          )
        )
          throw Error('Uint8Array expected');
        if (e.length > 0 && !e.includes(t.length))
          throw Error('Uint8Array expected of length ' + e + ', got length=' + t.length);
      }
      function s(t) {
        if ('function' != typeof t || 'function' != typeof t.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        r(t.outputLen), r(t.blockLen);
      }
      function o(t, e = !0) {
        if (t.destroyed) throw Error('Hash instance has been destroyed');
        if (e && t.finished) throw Error('Hash#digest() has already been called');
      }
      function u(t, e) {
        i(t);
        let n = e.outputLen;
        if (t.length < n) throw Error('digestInto() expects output buffer of length at least ' + n);
      }
      n.d(e, {
        $h: function () {
          return o;
        },
        eB: function () {
          return u;
        },
        gk: function () {
          return i;
        },
        k8: function () {
          return r;
        },
        z3: function () {
          return s;
        },
      });
    },
    52378: function (t, e, n) {
      n.d(e, {
        fr: function () {
          return A;
        },
      });
      var r = n(12106);
      let i = BigInt(4294967296 - 1),
        s = BigInt(32),
        o = (t, e, n) => (t << n) | (e >>> (32 - n)),
        u = (t, e, n) => (e << n) | (t >>> (32 - n)),
        f = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        a = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n));
      var c = n(79318);
      let l = [],
        h = [],
        d = [],
        g = BigInt(0),
        p = BigInt(1),
        b = BigInt(2),
        y = BigInt(7),
        w = BigInt(256),
        v = BigInt(113);
      for (let t = 0, e = p, n = 1, r = 0; t < 24; t++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          l.push(2 * (5 * r + n)),
          h.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = g;
        for (let t = 0; t < 7; t++)
          (e = ((e << p) ^ ((e >> y) * v)) % w) & b && (i ^= p << ((p << BigInt(t)) - p));
        d.push(i);
      }
      let [$, m] = (function (t, e = !1) {
          let n = new Uint32Array(t.length),
            r = new Uint32Array(t.length);
          for (let o = 0; o < t.length; o++) {
            let { h: u, l: f } = (function (t, e = !1) {
              return e
                ? { h: Number(t & i), l: Number((t >> s) & i) }
                : { h: 0 | Number((t >> s) & i), l: 0 | Number(t & i) };
            })(t[o], e);
            [n[o], r[o]] = [u, f];
          }
          return [n, r];
        })(d, !0),
        x = (t, e, n) => (n > 32 ? f(t, e, n) : o(t, e, n)),
        z = (t, e, n) => (n > 32 ? a(t, e, n) : u(t, e, n));
      class k extends c.kb {
        constructor(t, e, n, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.k8)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)), (this.state32 = (0, c.Jq)(this.state));
        }
        keccak() {
          c.iA || (0, c.l1)(this.state32),
            (function (t, e = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - e; r < 24; r++) {
                for (let e = 0; e < 10; e++)
                  n[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let r = (e + 8) % 10,
                    i = (e + 2) % 10,
                    s = n[i],
                    o = n[i + 1],
                    u = x(s, o, 1) ^ n[r],
                    f = z(s, o, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10) (t[e + n] ^= u), (t[e + n + 1] ^= f);
                }
                let e = t[2],
                  i = t[3];
                for (let n = 0; n < 24; n++) {
                  let r = h[n],
                    s = x(e, i, r),
                    o = z(e, i, r),
                    u = l[n];
                  (e = t[u]), (i = t[u + 1]), (t[u] = s), (t[u + 1] = o);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let r = 0; r < 10; r++) n[r] = t[e + r];
                  for (let r = 0; r < 10; r++) t[e + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (t[0] ^= $[r]), (t[1] ^= m[r]);
              }
              n.fill(0);
            })(this.state32, this.rounds),
            c.iA || (0, c.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, r.$h)(this);
          let { blockLen: e, state: n } = this,
            i = (t = (0, c.O0)(t)).length;
          for (let r = 0; r < i; ) {
            let s = Math.min(e - this.pos, i - r);
            for (let e = 0; e < s; e++) n[this.pos++] ^= t[r++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: n, blockLen: r } = this;
          (t[n] ^= e),
            (128 & e) != 0 && n === r - 1 && this.keccak(),
            (t[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, r.$h)(this, !1), (0, r.gk)(t), this.finish();
          let e = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = t.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, i - r);
            t.set(e.subarray(this.posOut, this.posOut + s), r), (this.posOut += s), (r += s);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(t);
        }
        xof(t) {
          return (0, r.k8)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, r.eB)(t, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let { blockLen: e, suffix: n, outputLen: r, rounds: i, enableXOF: s } = this;
          return (
            t || (t = new k(e, n, r, s, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = n),
            (t.outputLen = r),
            (t.enableXOF = s),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let A = (0, c.hE)(() => new k(136, 1, 32));
    },
    79318: function (t, e, n) {
      n.d(e, {
        kb: function () {
          return h;
        },
        l1: function () {
          return a;
        },
        eV: function () {
          return l;
        },
        GL: function () {
          return o;
        },
        iA: function () {
          return f;
        },
        O6: function () {
          return g;
        },
        np: function () {
          return u;
        },
        O0: function () {
          return c;
        },
        Jq: function () {
          return s;
        },
        hE: function () {
          return d;
        },
      });
      let r = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      var i = n(12106);
      function s(t) {
        return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
      }
      function o(t) {
        return new DataView(t.buffer, t.byteOffset, t.byteLength);
      }
      function u(t, e) {
        return (t << (32 - e)) | (t >>> e);
      }
      let f = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function a(t) {
        for (let n = 0; n < t.length; n++) {
          var e;
          t[n] =
            (((e = t[n]) << 24) & 4278190080) |
            ((e << 8) & 16711680) |
            ((e >>> 8) & 65280) |
            ((e >>> 24) & 255);
        }
      }
      function c(t) {
        return (
          'string' == typeof t &&
            (t = (function (t) {
              if ('string' != typeof t) throw Error('utf8ToBytes expected string, got ' + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, i.gk)(t),
          t
        );
      }
      function l(...t) {
        let e = 0;
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          (0, i.gk)(r), (e += r.length);
        }
        let n = new Uint8Array(e);
        for (let e = 0, r = 0; e < t.length; e++) {
          let i = t[e];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      class h {
        clone() {
          return this._cloneInto();
        }
      }
      function d(t) {
        let e = (e) => t().update(c(e)).digest(),
          n = t();
        return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = () => t()), e;
      }
      function g(t = 32) {
        if (r && 'function' == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(t));
        if (r && 'function' == typeof r.randomBytes) return r.randomBytes(t);
        throw Error('crypto.getRandomValues must be defined');
      }
    },
    48141: function (t, e, n) {
      n.d(e, {
        b: function () {
          return i;
        },
      });
      var r = n(77854);
      class i extends r.G {
        constructor({ address: t }) {
          super(`Address "${t}" is invalid.`, {
            metaMessages: [
              '- Address must be a hex value of 20 bytes (40 hex characters).',
              '- Address must match its checksum counterpart.',
            ],
            name: 'InvalidAddressError',
          });
        }
      }
    },
    77854: function (t, e, n) {
      n.d(e, {
        G: function () {
          return s;
        },
      });
      let r = '2.23.5',
        i = {
          getDocsUrl: ({ docsBaseUrl: t, docsPath: e = '', docsSlug: n }) =>
            e ? `${t ?? 'https://viem.sh'}${e}${n ? `#${n}` : ''}` : void 0,
          version: `viem@${r}`,
        };
      class s extends Error {
        constructor(t, e = {}) {
          let n =
              e.cause instanceof s
                ? e.cause.details
                : e.cause?.message
                  ? e.cause.message
                  : e.details,
            o = (e.cause instanceof s && e.cause.docsPath) || e.docsPath,
            u = i.getDocsUrl?.({ ...e, docsPath: o });
          super(
            [
              t || 'An error occurred.',
              '',
              ...(e.metaMessages ? [...e.metaMessages, ''] : []),
              ...(u ? [`Docs: ${u}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              ...(i.version ? [`Version: ${i.version}`] : []),
            ].join('\n'),
            e.cause ? { cause: e.cause } : void 0
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
            (this.details = n),
            (this.docsPath = o),
            (this.metaMessages = e.metaMessages),
            (this.name = e.name ?? this.name),
            (this.shortMessage = t),
            (this.version = r);
        }
        walk(t) {
          return (function t(e, n) {
            return n?.(e)
              ? e
              : e && 'object' == typeof e && 'cause' in e && void 0 !== e.cause
                ? t(e.cause, n)
                : n
                  ? null
                  : e;
          })(this, t);
        }
      }
    },
    37014: function (t, e, n) {
      n.d(e, {
        $s: function () {
          return s;
        },
        W_: function () {
          return o;
        },
        mV: function () {
          return i;
        },
      });
      var r = n(77854);
      class i extends r.G {
        constructor({ offset: t, position: e, size: n }) {
          super(
            `Slice ${'start' === e ? 'starting' : 'ending'} at offset "${t}" is out-of-bounds (size: ${n}).`,
            { name: 'SliceOffsetOutOfBoundsError' }
          );
        }
      }
      class s extends r.G {
        constructor({ size: t, targetSize: e, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`,
            { name: 'SizeExceedsPaddingSizeError' }
          );
        }
      }
      class o extends r.G {
        constructor({ size: t, targetSize: e, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} is expected to be ${e} ${n} long, but is ${t} ${n} long.`,
            { name: 'InvalidBytesLengthError' }
          );
        }
      }
    },
    95045: function (t, e, n) {
      n.d(e, {
        Cd: function () {
          return o;
        },
        J5: function () {
          return i;
        },
        M6: function () {
          return u;
        },
        yr: function () {
          return s;
        },
      });
      var r = n(77854);
      class i extends r.G {
        constructor({ max: t, min: e, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${r ? `${8 * r}-bit ${n ? 'signed' : 'unsigned'} ` : ''}integer range ${t ? `(${e} to ${t})` : `(above ${e})`}`,
            { name: 'IntegerOutOfRangeError' }
          );
        }
      }
      class s extends r.G {
        constructor(t) {
          super(
            `Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: 'InvalidBytesBooleanError' }
          );
        }
      }
      class o extends r.G {
        constructor(t) {
          super(
            `Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: 'InvalidHexBooleanError' }
          );
        }
      }
      class u extends r.G {
        constructor({ givenSize: t, maxSize: e }) {
          super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`, {
            name: 'SizeOverflowError',
          });
        }
      }
    },
    11238: function (t, e, n) {
      n.d(e, {
        K: function () {
          return c;
        },
        x: function () {
          return a;
        },
      });
      var r = n(48141),
        i = n(13990),
        s = n(60977),
        o = n(65414),
        u = n(84545);
      let f = new o.k(8192);
      function a(t, e) {
        if (f.has(`${t}.${e}`)) return f.get(`${t}.${e}`);
        let n = e ? `${e}${t.toLowerCase()}` : t.substring(2).toLowerCase(),
          r = (0, s.w)((0, i.qX)(n), 'bytes'),
          o = (e ? n.substring(`${e}0x`.length) : n).split('');
        for (let t = 0; t < 40; t += 2)
          r[t >> 1] >> 4 >= 8 && o[t] && (o[t] = o[t].toUpperCase()),
            (15 & r[t >> 1]) >= 8 && o[t + 1] && (o[t + 1] = o[t + 1].toUpperCase());
        let u = `0x${o.join('')}`;
        return f.set(`${t}.${e}`, u), u;
      }
      function c(t, e) {
        if (!(0, u.U)(t, { strict: !1 })) throw new r.b({ address: t });
        return a(t, e);
      }
    },
    84545: function (t, e, n) {
      n.d(e, {
        U: function () {
          return u;
        },
      });
      var r = n(65414),
        i = n(11238);
      let s = /^0x[a-fA-F0-9]{40}$/,
        o = new r.k(8192);
      function u(t, e) {
        let { strict: n = !0 } = e ?? {},
          r = `${t}.${n}`;
        if (o.has(r)) return o.get(r);
        let u = !!s.test(t) && (t.toLowerCase() === t || !n || (0, i.x)(t) === t);
        return o.set(r, u), u;
      }
    },
    13393: function (t, e, n) {
      n.d(e, {
        v: function () {
          return r;
        },
      });
      function r(t, { strict: e = !0 } = {}) {
        return !!t && 'string' == typeof t && (e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith('0x'));
      }
    },
    83254: function (t, e, n) {
      n.d(e, {
        gc: function () {
          return s;
        },
        vk: function () {
          return i;
        },
      });
      var r = n(37014);
      function i(t, { dir: e, size: n = 32 } = {}) {
        return 'string' == typeof t
          ? s(t, { dir: e, size: n })
          : (function (t, { dir: e, size: n = 32 } = {}) {
              if (null === n) return t;
              if (t.length > n) throw new r.$s({ size: t.length, targetSize: n, type: 'bytes' });
              let i = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                let s = 'right' === e;
                i[s ? r : n - r - 1] = t[s ? r : t.length - r - 1];
              }
              return i;
            })(t, { dir: e, size: n });
      }
      function s(t, { dir: e, size: n = 32 } = {}) {
        if (null === n) return t;
        let i = t.replace('0x', '');
        if (i.length > 2 * n)
          throw new r.$s({ size: Math.ceil(i.length / 2), targetSize: n, type: 'hex' });
        return `0x${i['right' === e ? 'padEnd' : 'padStart'](2 * n, '0')}`;
      }
    },
    99543: function (t, e, n) {
      n.d(e, {
        d: function () {
          return i;
        },
      });
      var r = n(13393);
      function i(t) {
        return (0, r.v)(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
      }
    },
    79712: function (t, e, n) {
      n.d(e, {
        f: function () {
          return r;
        },
      });
      function r(t, { dir: e = 'left' } = {}) {
        let n = 'string' == typeof t ? t.replace('0x', '') : t,
          r = 0;
        for (
          let t = 0;
          t < n.length - 1 && '0' === n['left' === e ? t : n.length - t - 1].toString();
          t++
        )
          r++;
        return ((n = 'left' === e ? n.slice(r) : n.slice(0, n.length - r)), 'string' == typeof t)
          ? (1 === n.length && 'right' === e && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
    },
    37968: function (t, e, n) {
      n.d(e, {
        H_: function () {
          return f;
        },
        XA: function () {
          return c;
        },
        Yf: function () {
          return u;
        },
        ly: function () {
          return l;
        },
        rR: function () {
          return h;
        },
        y_: function () {
          return a;
        },
      });
      var r = n(95045),
        i = n(99543),
        s = n(79712),
        o = n(13990);
      function u(t, { size: e }) {
        if ((0, i.d)(t) > e) throw new r.M6({ givenSize: (0, i.d)(t), maxSize: e });
      }
      function f(t, e) {
        let n = 'string' == typeof e ? { to: e } : e,
          r = n.to;
        return 'number' === r
          ? l(t, n)
          : 'bigint' === r
            ? a(t, n)
            : 'string' === r
              ? h(t, n)
              : 'boolean' === r
                ? c(t, n)
                : (0, o.nr)(t, n);
      }
      function a(t, e = {}) {
        let { signed: n } = e;
        e.size && u(t, { size: e.size });
        let r = BigInt(t);
        if (!n) return r;
        let i = (t.length - 2) / 2;
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${'f'.padStart(2 * i, 'f')}`) - 1n;
      }
      function c(t, e = {}) {
        let n = t;
        if ((e.size && (u(n, { size: e.size }), (n = (0, s.f)(n))), '0x00' === (0, s.f)(n)))
          return !1;
        if ('0x01' === (0, s.f)(n)) return !0;
        throw new r.Cd(n);
      }
      function l(t, e = {}) {
        return Number(a(t, e));
      }
      function h(t, e = {}) {
        let n = (0, o.nr)(t);
        return (
          e.size && (u(n, { size: e.size }), (n = (0, s.f)(n, { dir: 'right' }))),
          new TextDecoder().decode(n)
        );
      }
    },
    13990: function (t, e, n) {
      n.d(e, {
        O0: function () {
          return a;
        },
        nr: function () {
          return h;
        },
        qX: function () {
          return d;
        },
      });
      var r = n(77854),
        i = n(13393),
        s = n(83254),
        o = n(37968),
        u = n(79150);
      let f = new TextEncoder();
      function a(t, e = {}) {
        return 'number' == typeof t || 'bigint' == typeof t
          ? h((0, u.eC)(t, e))
          : 'boolean' == typeof t
            ? (function (t, e = {}) {
                let n = new Uint8Array(1);
                return ((n[0] = Number(t)), 'number' == typeof e.size)
                  ? ((0, o.Yf)(n, { size: e.size }), (0, s.vk)(n, { size: e.size }))
                  : n;
              })(t, e)
            : (0, i.v)(t)
              ? h(t, e)
              : d(t, e);
      }
      let c = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function l(t) {
        return t >= c.zero && t <= c.nine
          ? t - c.zero
          : t >= c.A && t <= c.F
            ? t - (c.A - 10)
            : t >= c.a && t <= c.f
              ? t - (c.a - 10)
              : void 0;
      }
      function h(t, e = {}) {
        let n = t;
        e.size &&
          ((0, o.Yf)(n, { size: e.size }), (n = (0, s.vk)(n, { dir: 'right', size: e.size })));
        let i = n.slice(2);
        i.length % 2 && (i = `0${i}`);
        let u = i.length / 2,
          f = new Uint8Array(u);
        for (let t = 0, e = 0; t < u; t++) {
          let n = l(i.charCodeAt(e++)),
            s = l(i.charCodeAt(e++));
          if (void 0 === n || void 0 === s)
            throw new r.G(`Invalid byte sequence ("${i[e - 2]}${i[e - 1]}" in "${i}").`);
          f[t] = 16 * n + s;
        }
        return f;
      }
      function d(t, e = {}) {
        let n = f.encode(t);
        return 'number' == typeof e.size
          ? ((0, o.Yf)(n, { size: e.size }), (0, s.vk)(n, { dir: 'right', size: e.size }))
          : n;
      }
    },
    79150: function (t, e, n) {
      n.d(e, {
        $G: function () {
          return h;
        },
        C4: function () {
          return f;
        },
        NC: function () {
          return u;
        },
        ci: function () {
          return a;
        },
        eC: function () {
          return c;
        },
      });
      var r = n(95045),
        i = n(83254),
        s = n(37968);
      let o = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, '0'));
      function u(t, e = {}) {
        return 'number' == typeof t || 'bigint' == typeof t
          ? c(t, e)
          : 'string' == typeof t
            ? h(t, e)
            : 'boolean' == typeof t
              ? f(t, e)
              : a(t, e);
      }
      function f(t, e = {}) {
        let n = `0x${Number(t)}`;
        return 'number' == typeof e.size
          ? ((0, s.Yf)(n, { size: e.size }), (0, i.vk)(n, { size: e.size }))
          : n;
      }
      function a(t, e = {}) {
        let n = '';
        for (let e = 0; e < t.length; e++) n += o[t[e]];
        let r = `0x${n}`;
        return 'number' == typeof e.size
          ? ((0, s.Yf)(r, { size: e.size }), (0, i.vk)(r, { dir: 'right', size: e.size }))
          : r;
      }
      function c(t, e = {}) {
        let n;
        let { signed: s, size: o } = e,
          u = BigInt(t);
        o
          ? (n = s ? (1n << (8n * BigInt(o) - 1n)) - 1n : 2n ** (8n * BigInt(o)) - 1n)
          : 'number' == typeof t && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let f = 'bigint' == typeof n && s ? -n - 1n : 0;
        if ((n && u > n) || u < f) {
          let e = 'bigint' == typeof t ? 'n' : '';
          throw new r.J5({
            max: n ? `${n}${e}` : void 0,
            min: `${f}${e}`,
            signed: s,
            size: o,
            value: `${t}${e}`,
          });
        }
        let a = `0x${(s && u < 0 ? (1n << BigInt(8 * o)) + BigInt(u) : u).toString(16)}`;
        return o ? (0, i.vk)(a, { size: o }) : a;
      }
      let l = new TextEncoder();
      function h(t, e = {}) {
        return a(l.encode(t), e);
      }
    },
    60977: function (t, e, n) {
      n.d(e, {
        w: function () {
          return u;
        },
      });
      var r = n(52378),
        i = n(13393),
        s = n(13990),
        o = n(79150);
      function u(t, e) {
        let n = (0, r.fr)((0, i.v)(t, { strict: !1 }) ? (0, s.O0)(t) : t);
        return 'bytes' === (e || 'hex') ? n : (0, o.NC)(n);
      }
    },
    65414: function (t, e, n) {
      n.d(e, {
        k: function () {
          return r;
        },
      });
      class r extends Map {
        constructor(t) {
          super(),
            Object.defineProperty(this, 'maxSize', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = t);
        }
        get(t) {
          let e = super.get(t);
          return super.has(t) && void 0 !== e && (this.delete(t), super.set(t, e)), e;
        }
        set(t, e) {
          if ((super.set(t, e), this.maxSize && this.size > this.maxSize)) {
            let t = this.keys().next().value;
            t && this.delete(t);
          }
          return this;
        }
      }
    },
  },
]);
