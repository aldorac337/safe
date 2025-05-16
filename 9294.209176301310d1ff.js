'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9294],
  {
    14975: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(33329),
        s = i(83177);
      function n(e, t, i, n, o) {
        if ((void 0 === o && (o = 0), 32 !== e.length))
          throw Error('ChaCha: key size must be 32 bytes');
        if (n.length < i.length) throw Error('ChaCha: destination is shorter than source');
        if (0 === o) {
          if (8 !== t.length && 12 !== t.length) throw Error('ChaCha nonce must be 8 or 12 bytes');
          (h = (a = new Uint8Array(16)).length - t.length), a.set(t, h);
        } else {
          if (16 !== t.length) throw Error('ChaCha nonce with counter must be 16 bytes');
          (a = t), (h = o);
        }
        for (var a, h, c = new Uint8Array(64), l = 0; l < i.length; l += 64) {
          !(function (e, t, i) {
            for (
              var s = (i[3] << 24) | (i[2] << 16) | (i[1] << 8) | i[0],
                n = (i[7] << 24) | (i[6] << 16) | (i[5] << 8) | i[4],
                o = (i[11] << 24) | (i[10] << 16) | (i[9] << 8) | i[8],
                a = (i[15] << 24) | (i[14] << 16) | (i[13] << 8) | i[12],
                h = (i[19] << 24) | (i[18] << 16) | (i[17] << 8) | i[16],
                c = (i[23] << 24) | (i[22] << 16) | (i[21] << 8) | i[20],
                l = (i[27] << 24) | (i[26] << 16) | (i[25] << 8) | i[24],
                u = (i[31] << 24) | (i[30] << 16) | (i[29] << 8) | i[28],
                d = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
                g = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
                p = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
                f = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
                y = 0x61707865,
                b = 0x3320646e,
                m = 0x79622d32,
                w = 0x6b206574,
                E = s,
                x = n,
                _ = o,
                I = a,
                S = h,
                P = c,
                O = l,
                A = u,
                U = d,
                T = g,
                L = p,
                N = f,
                C = 0;
              C < 20;
              C += 2
            )
              (U ^= y = (y + E) | 0),
                (E ^= S = (S + (U = (U >>> 16) | (U << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (T ^= b = (b + x) | 0),
                (x ^= P = (P + (T = (T >>> 16) | (T << 16))) | 0),
                (x = (x >>> 20) | (x << 12)),
                (L ^= m = (m + _) | 0),
                (_ ^= O = (O + (L = (L >>> 16) | (L << 16))) | 0),
                (_ = (_ >>> 20) | (_ << 12)),
                (N ^= w = (w + I) | 0),
                (I ^= A = (A + (N = (N >>> 16) | (N << 16))) | 0),
                (I = (I >>> 20) | (I << 12)),
                (L ^= m = (m + _) | 0),
                (_ ^= O = (O + (L = (L >>> 24) | (L << 8))) | 0),
                (_ = (_ >>> 25) | (_ << 7)),
                (N ^= w = (w + I) | 0),
                (I ^= A = (A + (N = (N >>> 24) | (N << 8))) | 0),
                (I = (I >>> 25) | (I << 7)),
                (T ^= b = (b + x) | 0),
                (x ^= P = (P + (T = (T >>> 24) | (T << 8))) | 0),
                (x = (x >>> 25) | (x << 7)),
                (U ^= y = (y + E) | 0),
                (E ^= S = (S + (U = (U >>> 24) | (U << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (N ^= y = (y + x) | 0),
                (x ^= O = (O + (N = (N >>> 16) | (N << 16))) | 0),
                (x = (x >>> 20) | (x << 12)),
                (U ^= b = (b + _) | 0),
                (_ ^= A = (A + (U = (U >>> 16) | (U << 16))) | 0),
                (_ = (_ >>> 20) | (_ << 12)),
                (T ^= m = (m + I) | 0),
                (I ^= S = (S + (T = (T >>> 16) | (T << 16))) | 0),
                (I = (I >>> 20) | (I << 12)),
                (L ^= w = (w + E) | 0),
                (E ^= P = (P + (L = (L >>> 16) | (L << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (T ^= m = (m + I) | 0),
                (I ^= S = (S + (T = (T >>> 24) | (T << 8))) | 0),
                (I = (I >>> 25) | (I << 7)),
                (L ^= w = (w + E) | 0),
                (E ^= P = (P + (L = (L >>> 24) | (L << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (U ^= b = (b + _) | 0),
                (_ ^= A = (A + (U = (U >>> 24) | (U << 8))) | 0),
                (_ = (_ >>> 25) | (_ << 7)),
                (N ^= y = (y + x) | 0),
                (x ^= O = (O + (N = (N >>> 24) | (N << 8))) | 0),
                (x = (x >>> 25) | (x << 7));
            r.writeUint32LE((y + 0x61707865) | 0, e, 0),
              r.writeUint32LE((b + 0x3320646e) | 0, e, 4),
              r.writeUint32LE((m + 0x79622d32) | 0, e, 8),
              r.writeUint32LE((w + 0x6b206574) | 0, e, 12),
              r.writeUint32LE((E + s) | 0, e, 16),
              r.writeUint32LE((x + n) | 0, e, 20),
              r.writeUint32LE((_ + o) | 0, e, 24),
              r.writeUint32LE((I + a) | 0, e, 28),
              r.writeUint32LE((S + h) | 0, e, 32),
              r.writeUint32LE((P + c) | 0, e, 36),
              r.writeUint32LE((O + l) | 0, e, 40),
              r.writeUint32LE((A + u) | 0, e, 44),
              r.writeUint32LE((U + d) | 0, e, 48),
              r.writeUint32LE((T + g) | 0, e, 52),
              r.writeUint32LE((L + p) | 0, e, 56),
              r.writeUint32LE((N + f) | 0, e, 60);
          })(c, a, e);
          for (var u = l; u < l + 64 && u < i.length; u++) n[u] = i[u] ^ c[u - l];
          !(function (e, t, i) {
            for (var r = 1; i--; ) (r = (r + (255 & e[t])) | 0), (e[t] = 255 & r), (r >>>= 8), t++;
            if (r > 0) throw Error('ChaCha: counter overflow');
          })(a, 0, h);
        }
        return s.wipe(c), 0 === o && s.wipe(a), n;
      }
      (t.streamXOR = n),
        (t.stream = function (e, t, i, r) {
          return void 0 === r && (r = 0), s.wipe(i), n(e, t, i, i, r);
        });
    },
    16730: (e) => {
      e.exports = function (e, t) {
        for (var i = {}, r = Object.keys(e), s = Array.isArray(t), n = 0; n < r.length; n++) {
          var o = r[n],
            a = e[o];
          (s ? -1 !== t.indexOf(o) : t(o, a, e)) && (i[o] = a);
        }
        return i;
      };
    },
    23628: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.NodeRandomSource = void 0);
      let r = i(83177);
      class s {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          {
            let e = i(45423);
            e &&
              e.randomBytes &&
              ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
          }
        }
        randomBytes(e) {
          if (!this.isAvailable || !this._crypto)
            throw Error('Node.js random byte generator is not available.');
          let t = this._crypto.randomBytes(e);
          if (t.length !== e) throw Error('NodeRandomSource: got fewer bytes than requested');
          let i = new Uint8Array(e);
          for (let e = 0; e < i.length; e++) i[e] = t[e];
          return (0, r.wipe)(t), i;
        }
      }
      t.NodeRandomSource = s;
    },
    24128: (e, t, i) => {
      i.d(t, { _c: () => nO });
      var r = i(59786),
        s = i(35978),
        n = i.n(s),
        o = i(18193),
        a = i(19757),
        h = i(56975),
        c = i(7256),
        l = i(87561),
        u = i(41035),
        d = i(10897),
        g = i(69145),
        p = i(80985),
        f = i(66890);
      function y(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function b(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let i = y(t),
          r = 0;
        for (let t of e) i.set(t, r), (r += t.length);
        return i;
      }
      var m = i(29218);
      function w(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      let E = w(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        x = w(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = y((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        _ = { utf8: E, 'utf-8': E, hex: m.Fo.base16, latin1: x, ascii: x, binary: x, ...m.Fo };
      function I(e, t = 'utf8') {
        let i = _[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, 'utf8')
          : i.decoder.decode(`${i.prefix}${e}`);
      }
      function S(e, t = 'utf8') {
        let i = _[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : i.encoder.encode(e).substring(1);
      }
      var P = i(34736),
        O = i(26481),
        A = i(29143),
        U = i(51642).Buffer;
      function T(e) {
        let [t, i, r] = e.split(':');
        return { namespace: t, reference: i, address: r };
      }
      let L = { reactNative: 'react-native', node: 'node', browser: 'browser', unknown: 'unknown' };
      function N() {
        return 'u' > typeof A && 'u' > typeof A.versions && 'u' > typeof A.versions.node;
      }
      function C() {
        return (
          !(0, p.getDocument)() && !!(0, p.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function k() {
        return !N() && !!(0, p.getNavigator)() && !!(0, p.getDocument)();
      }
      function R() {
        return C() ? L.reactNative : N() ? L.node : k() ? L.browser : L.unknown;
      }
      function j() {
        var e;
        try {
          return C() && 'u' > typeof i.g && 'u' > typeof (null == i.g ? void 0 : i.g.Application)
            ? null == (e = i.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function D(e, t, r) {
        let s = (function () {
            if (
              R() === L.reactNative &&
              'u' > typeof i.g &&
              'u' > typeof (null == i.g ? void 0 : i.g.Platform)
            ) {
              let { OS: e, Version: t } = i.g.Platform;
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
            let t = R();
            return t === L.browser
              ? [t, (null == (e = (0, p.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', r].join('-'), s, n].join('/');
      }
      function M(e) {
        return Object.fromEntries(e.entries());
      }
      function z(e) {
        return new Map(Object.entries(e));
      }
      function B(e, t, i) {
        return new Promise(async (r, s) => {
          let n = setTimeout(() => s(Error(i)), t);
          try {
            let t = await e;
            r(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function $(e, t) {
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
      function K(e, t) {
        return (0, l.fromMiliseconds)((t || Date.now()) + (0, l.toMiliseconds)(e));
      }
      function H(e) {
        return Date.now() >= (0, l.toMiliseconds)(e);
      }
      function F(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function q(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      function V() {
        return 'u' > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function G() {
        return 'u' > typeof A && 'true' === A.env.IS_VITEST;
      }
      function J(e) {
        return U.from(e, 'base64').toString('utf-8');
      }
      function W(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function Z(e, ...t) {
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
      function Y(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        W(e.outputLen), W(e.blockLen);
      }
      function X(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function Q(e, t) {
        Z(e);
        let i = t.outputLen;
        if (e.length < i) throw Error('digestInto() expects output buffer of length at least ' + i);
      }
      let ee = BigInt(0x100000000 - 1),
        et = BigInt(32),
        ei = (e, t, i) => (e << i) | (t >>> (32 - i)),
        er = (e, t, i) => (t << i) | (e >>> (32 - i)),
        es = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        en = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i)),
        eo = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function ea(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function eh(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let ec = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function el(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function eu(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          Z(e),
          e
        );
      }
      class ed {
        clone() {
          return this._cloneInto();
        }
      }
      function eg(e) {
        let t = (t) => e().update(eu(t)).digest(),
          i = e();
        return (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = () => e()), t;
      }
      function ep(e = 32) {
        if (eo && 'function' == typeof eo.getRandomValues)
          return eo.getRandomValues(new Uint8Array(e));
        if (eo && 'function' == typeof eo.randomBytes) return eo.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      let ef = [],
        ey = [],
        eb = [],
        em = BigInt(0),
        ew = BigInt(1),
        ev = BigInt(2),
        eE = BigInt(7),
        ex = BigInt(256),
        e_ = BigInt(113);
      for (let e = 0, t = ew, i = 1, r = 0; e < 24; e++) {
        ([i, r] = [r, (2 * i + 3 * r) % 5]),
          ef.push(2 * (5 * r + i)),
          ey.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = em;
        for (let e = 0; e < 7; e++)
          (t = ((t << ew) ^ ((t >> eE) * e_)) % ex) & ev && (s ^= ew << ((ew << BigInt(e)) - ew));
        eb.push(s);
      }
      let [eI, eS] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & ee), l: Number((e >> et) & ee) }
                : { h: 0 | Number((e >> et) & ee), l: 0 | Number(e & ee) };
            })(e[s], t);
            [i[s], r[s]] = [n, o];
          }
          return [i, r];
        })(eb, !0),
        eP = (e, t, i) => (i > 32 ? es(e, t, i) : ei(e, t, i)),
        eO = (e, t, i) => (i > 32 ? en(e, t, i) : er(e, t, i));
      class eA extends ed {
        constructor(e, t, i, r = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = i),
            (this.enableXOF = r),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            W(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          ec || el(this.state32),
            (function (e, t = 24) {
              let i = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = i[s],
                    o = i[s + 1],
                    a = eP(n, o, 1) ^ i[r],
                    h = eO(n, o, 1) ^ i[r + 1];
                  for (let i = 0; i < 50; i += 10) (e[t + i] ^= a), (e[t + i + 1] ^= h);
                }
                let t = e[2],
                  s = e[3];
                for (let i = 0; i < 24; i++) {
                  let r = ey[i],
                    n = eP(t, s, r),
                    o = eO(t, s, r),
                    a = ef[i];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) i[r] = e[t + r];
                  for (let r = 0; r < 10; r++) e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                }
                (e[0] ^= eI[r]), (e[1] ^= eS[r]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            ec || el(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          X(this);
          let { blockLen: t, state: i } = this,
            r = (e = eu(e)).length;
          for (let s = 0; s < r; ) {
            let n = Math.min(t - this.pos, r - s);
            for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: i, blockLen: r } = this;
          (e[i] ^= t),
            (128 & t) != 0 && i === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          X(this, !1), Z(e), this.finish();
          let t = this.state,
            { blockLen: i } = this;
          for (let r = 0, s = e.length; r < s; ) {
            this.posOut >= i && this.keccak();
            let n = Math.min(i - this.posOut, s - r);
            e.set(t.subarray(this.posOut, this.posOut + n), r), (this.posOut += n), (r += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return W(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((Q(e, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let { blockLen: t, suffix: i, outputLen: r, rounds: s, enableXOF: n } = this;
          return (
            e || (e = new eA(t, i, r, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = i),
            (e.outputLen = r),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let eU = eg(() => new eA(136, 1, 32));
      function eT(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          i = new TextEncoder().encode(t + e);
        return '0x' + U.from(eU(i)).toString('hex');
      }
      async function eL(e, t, i, r, s, n) {
        let o = (function (e) {
          let [t, i] = e.split(':');
          return { namespace: t, reference: i };
        })(r);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
          );
        try {
          let o = '0x1626ba7e',
            a = i.substring(2),
            h = eT(t).substring(2),
            c =
              o +
              h +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            l = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${r}&projectId=${s}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: '2.0',
                  method: 'eth_call',
                  params: [{ to: e, data: c }, 'latest'],
                }),
              }
            ),
            { result: u } = await l.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var eN = Object.defineProperty,
        eC = Object.defineProperties,
        ek = Object.getOwnPropertyDescriptors,
        eR = Object.getOwnPropertySymbols,
        ej = Object.prototype.hasOwnProperty,
        eD = Object.prototype.propertyIsEnumerable,
        eM = (e, t, i) =>
          t in e
            ? eN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i);
      let ez = (e) => e?.split(':'),
        eB = (e) => {
          let t = e && ez(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        e$ = (e) => {
          let t = e && ez(e);
          if (t) return t.pop();
        };
      function eK(e) {
        if (!e) throw Error('No recap provided, value is undefined');
        if (!e.att) throw Error('No `att` property found');
        let t = Object.keys(e.att);
        if (!(null != t && t.length)) throw Error('No resources found in `att` property');
        t.forEach((t) => {
          let i = e.att[t];
          if (Array.isArray(i) || 'object' != typeof i)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(i).length) throw Error(`Resource object is empty: ${t}`);
          Object.keys(i).forEach((e) => {
            let t = i[e];
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
      function eH(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function eF(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function eq(e, ...t) {
        if (!eF(e)) throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function eV(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function eG(e) {
        if ('boolean' != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let eJ = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        eW = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function eZ(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (eF(e)) e = eQ(e);
        else throw Error('Uint8Array expected, got ' + typeof e);
        return e;
      }
      function eY(e, t, i = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (i && t.byteOffset % 4 != 0) throw Error('invalid output, must be aligned');
        return t;
      }
      function eX(e, t, i, r) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((i >> s) & n),
          a = Number(i & n),
          h = 4 * !!r,
          c = 4 * !r;
        e.setUint32(t + h, o, r), e.setUint32(t + c, a, r);
      }
      function eQ(e) {
        return Uint8Array.from(e);
      }
      function e0(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let e1 = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        e5 = e1('expand 16-byte k'),
        e6 = e1('expand 32-byte k'),
        e3 = eJ(e5),
        e2 = eJ(e6);
      function e8(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function e4(e) {
        return e.byteOffset % 4 == 0;
      }
      let e9 = 0x100000000 - 1,
        e7 = new Uint32Array(),
        te = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class tt {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            eq((e = eZ(e)), 32);
          let t = te(e, 0),
            i = te(e, 2),
            r = te(e, 4),
            s = te(e, 6),
            n = te(e, 8),
            o = te(e, 10),
            a = te(e, 12),
            h = te(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
            (this.r[2] = ((i >>> 10) | (r << 6)) & 7939),
            (this.r[3] = ((r >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (h << 8)) & 8191),
            (this.r[9] = (h >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = te(e, 16 + 2 * t);
        }
        process(e, t, i = !1) {
          let { h: r, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            h = s[3],
            c = s[4],
            l = s[5],
            u = s[6],
            d = s[7],
            g = s[8],
            p = s[9],
            f = te(e, t + 0),
            y = te(e, t + 2),
            b = te(e, t + 4),
            m = te(e, t + 6),
            w = te(e, t + 8),
            E = te(e, t + 10),
            x = te(e, t + 12),
            _ = te(e, t + 14),
            I = r[0] + (8191 & f),
            S = r[1] + (((f >>> 13) | (y << 3)) & 8191),
            P = r[2] + (((y >>> 10) | (b << 6)) & 8191),
            O = r[3] + (((b >>> 7) | (m << 9)) & 8191),
            A = r[4] + (((m >>> 4) | (w << 12)) & 8191),
            U = r[5] + ((w >>> 1) & 8191),
            T = r[6] + (((w >>> 14) | (E << 2)) & 8191),
            L = r[7] + (((E >>> 11) | (x << 5)) & 8191),
            N = r[8] + (((x >>> 8) | (_ << 8)) & 8191),
            C = r[9] + ((_ >>> 5) | (2048 * !i)),
            k = 0,
            R = 0 + I * n + 5 * p * S + 5 * g * P + 5 * d * O + 5 * u * A;
          (k = R >>> 13),
            (R &= 8191),
            (R += 5 * l * U + 5 * c * T + 5 * h * L + 5 * a * N + 5 * o * C),
            (k += R >>> 13),
            (R &= 8191);
          let j = k + I * o + S * n + 5 * p * P + 5 * g * O + 5 * d * A;
          (k = j >>> 13),
            (j &= 8191),
            (j += 5 * u * U + 5 * l * T + 5 * c * L + 5 * h * N + 5 * a * C),
            (k += j >>> 13),
            (j &= 8191);
          let D = k + I * a + S * o + P * n + 5 * p * O + 5 * g * A;
          (k = D >>> 13),
            (D &= 8191),
            (D += 5 * d * U + 5 * u * T + 5 * l * L + 5 * c * N + 5 * h * C),
            (k += D >>> 13),
            (D &= 8191);
          let M = k + I * h + S * a + P * o + O * n + 5 * p * A;
          (k = M >>> 13),
            (M &= 8191),
            (M += 5 * g * U + 5 * d * T + 5 * u * L + 5 * l * N + 5 * c * C),
            (k += M >>> 13),
            (M &= 8191);
          let z = k + I * c + S * h + P * a + O * o + A * n;
          (k = z >>> 13),
            (z &= 8191),
            (z += 5 * p * U + 5 * g * T + 5 * d * L + 5 * u * N + 5 * l * C),
            (k += z >>> 13),
            (z &= 8191);
          let B = k + I * l + S * c + P * h + O * a + A * o;
          (k = B >>> 13),
            (B &= 8191),
            (B += U * n + 5 * p * T + 5 * g * L + 5 * d * N + 5 * u * C),
            (k += B >>> 13),
            (B &= 8191);
          let $ = k + I * u + S * l + P * c + O * h + A * a;
          (k = $ >>> 13),
            ($ &= 8191),
            ($ += U * o + T * n + 5 * p * L + 5 * g * N + 5 * d * C),
            (k += $ >>> 13),
            ($ &= 8191);
          let K = k + I * d + S * u + P * l + O * c + A * h;
          (k = K >>> 13),
            (K &= 8191),
            (K += U * a + T * o + L * n + 5 * p * N + 5 * g * C),
            (k += K >>> 13),
            (K &= 8191);
          let H = k + I * g + S * d + P * u + O * l + A * c;
          (k = H >>> 13),
            (H &= 8191),
            (H += U * h + T * a + L * o + N * n + 5 * p * C),
            (k += H >>> 13),
            (H &= 8191);
          let F = k + I * p + S * g + P * d + O * u + A * l;
          (k = F >>> 13),
            (F &= 8191),
            (F += U * c + T * h + L * a + N * o + C * n),
            (k += F >>> 13),
            (F &= 8191),
            (R = 8191 & (k = ((k = ((k << 2) + k) | 0) + R) | 0)),
            (k >>>= 13),
            (j += k),
            (r[0] = R),
            (r[1] = j),
            (r[2] = D),
            (r[3] = M),
            (r[4] = z),
            (r[5] = B),
            (r[6] = $),
            (r[7] = K),
            (r[8] = H),
            (r[9] = F);
        }
        finalize() {
          let { h: e, pad: t } = this,
            i = new Uint16Array(10),
            r = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++) (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * r),
            (r = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += r),
            (r = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += r),
            (i[0] = e[0] + 5),
            (r = i[0] >>> 13),
            (i[0] &= 8191);
          for (let t = 1; t < 10; t++) (i[t] = e[t] + r), (r = i[t] >>> 13), (i[t] &= 8191);
          i[9] -= 8192;
          let s = (1 ^ r) - 1;
          for (let e = 0; e < 10; e++) i[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | i[t];
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
          for (let i = 1; i < 8; i++)
            (n = (((e[i] + t[i]) | 0) + (n >>> 16)) | 0), (e[i] = 65535 & n);
          e0(i);
        }
        update(e) {
          eV(this);
          let { buffer: t, blockLen: i } = this,
            r = (e = eZ(e)).length;
          for (let s = 0; s < r; ) {
            let n = Math.min(i - this.pos, r - s);
            if (n === i) {
              for (; i <= r - s; s += i) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + n), this.pos),
              (this.pos += n),
              (s += n),
              this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          e0(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          eV(this),
            (function (e, t) {
              eq(e);
              let i = t.outputLen;
              if (e.length < i)
                throw Error('digestInto() expects output buffer of length at least ' + i);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: i } = this,
            { pos: r } = this;
          if (r) {
            for (t[r++] = 1; r < 16; r++) t[r] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++) (e[s++] = i[t] >>> 0), (e[s++] = i[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
      }
      let ti = (function (e) {
          let t = (t, i) => e(i).update(eZ(t)).digest(),
            i = e(new Uint8Array(32));
          return (
            (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = (t) => e(t)), t
          );
        })((e) => new tt(e)),
        tr = (function (e, t) {
          let {
            allowShortKeys: i,
            extendNonceFn: r,
            counterLength: s,
            counterRight: n,
            rounds: o,
          } = (function (e, t) {
            if (null == t || 'object' != typeof t) throw Error('options must be defined');
            return Object.assign(e, t);
          })({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, t);
          if ('function' != typeof e) throw Error('core must be a function');
          return (
            eH(s),
            eH(o),
            eG(n),
            eG(i),
            (t, a, h, c, l = 0) => {
              eq(t), eq(a), eq(h);
              let u = h.length;
              if ((void 0 === c && (c = new Uint8Array(u)), eq(c), eH(l), l < 0 || l >= e9))
                throw Error('arx: counter overflow');
              if (c.length < u)
                throw Error(`arx: output (${c.length}) is shorter than data (${u})`);
              let d = [],
                g = t.length,
                p,
                f;
              if (32 === g) d.push((p = eQ(t))), (f = e2);
              else if (16 === g && i)
                (p = new Uint8Array(32)).set(t), p.set(t, 16), (f = e3), d.push(p);
              else throw Error(`arx: invalid 32-byte key, got length=${g}`);
              e4(a) || d.push((a = eQ(a)));
              let y = eJ(p);
              if (r) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                r(f, y, eJ(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let b = 16 - s;
              if (b !== a.length) throw Error(`arx: nonce must be ${b} or 16 bytes`);
              if (12 !== b) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              return (
                (function (e, t, i, r, s, n, o, a) {
                  let h = s.length,
                    c = new Uint8Array(64),
                    l = eJ(c),
                    u = e4(s) && e4(n),
                    d = u ? eJ(s) : e7,
                    g = u ? eJ(n) : e7;
                  for (let p = 0; p < h; o++) {
                    if ((e(t, i, r, l, o, a), o >= e9)) throw Error('arx: counter overflow');
                    let f = Math.min(64, h - p);
                    if (u && 64 === f) {
                      let e = p / 4;
                      if (p % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, i; t < 16; t++) g[(i = e + t)] = d[i] ^ l[t];
                      p += 64;
                      continue;
                    }
                    for (let e = 0, t; e < f; e++) n[(t = p + e)] = s[t] ^ c[e];
                    p += f;
                  }
                })(e, f, y, eJ(a), h, c, l, o),
                e0(...d),
                c
              );
            }
          );
        })(
          function (e, t, i, r, s, n = 20) {
            let o = e[0],
              a = e[1],
              h = e[2],
              c = e[3],
              l = t[0],
              u = t[1],
              d = t[2],
              g = t[3],
              p = t[4],
              f = t[5],
              y = t[6],
              b = t[7],
              m = i[0],
              w = i[1],
              E = i[2],
              x = o,
              _ = a,
              I = h,
              S = c,
              P = l,
              O = u,
              A = d,
              U = g,
              T = p,
              L = f,
              N = y,
              C = b,
              k = s,
              R = m,
              j = w,
              D = E;
            for (let e = 0; e < n; e += 2)
              (T = (T + (k = e8(k ^ (x = (x + P) | 0), 16))) | 0),
                (x = (x + (P = e8(P ^ T, 12))) | 0),
                (T = (T + (k = e8(k ^ x, 8))) | 0),
                (P = e8(P ^ T, 7)),
                (L = (L + (R = e8(R ^ (_ = (_ + O) | 0), 16))) | 0),
                (_ = (_ + (O = e8(O ^ L, 12))) | 0),
                (L = (L + (R = e8(R ^ _, 8))) | 0),
                (O = e8(O ^ L, 7)),
                (N = (N + (j = e8(j ^ (I = (I + A) | 0), 16))) | 0),
                (I = (I + (A = e8(A ^ N, 12))) | 0),
                (N = (N + (j = e8(j ^ I, 8))) | 0),
                (A = e8(A ^ N, 7)),
                (C = (C + (D = e8(D ^ (S = (S + U) | 0), 16))) | 0),
                (S = (S + (U = e8(U ^ C, 12))) | 0),
                (C = (C + (D = e8(D ^ S, 8))) | 0),
                (U = e8(U ^ C, 7)),
                (N = (N + (D = e8(D ^ (x = (x + O) | 0), 16))) | 0),
                (x = (x + (O = e8(O ^ N, 12))) | 0),
                (N = (N + (D = e8(D ^ x, 8))) | 0),
                (O = e8(O ^ N, 7)),
                (C = (C + (k = e8(k ^ (_ = (_ + A) | 0), 16))) | 0),
                (_ = (_ + (A = e8(A ^ C, 12))) | 0),
                (C = (C + (k = e8(k ^ _, 8))) | 0),
                (A = e8(A ^ C, 7)),
                (T = (T + (R = e8(R ^ (I = (I + U) | 0), 16))) | 0),
                (I = (I + (U = e8(U ^ T, 12))) | 0),
                (T = (T + (R = e8(R ^ I, 8))) | 0),
                (U = e8(U ^ T, 7)),
                (L = (L + (j = e8(j ^ (S = (S + P) | 0), 16))) | 0),
                (S = (S + (P = e8(P ^ L, 12))) | 0),
                (L = (L + (j = e8(j ^ S, 8))) | 0),
                (P = e8(P ^ L, 7));
            let M = 0;
            (r[M++] = (o + x) | 0),
              (r[M++] = (a + _) | 0),
              (r[M++] = (h + I) | 0),
              (r[M++] = (c + S) | 0),
              (r[M++] = (l + P) | 0),
              (r[M++] = (u + O) | 0),
              (r[M++] = (d + A) | 0),
              (r[M++] = (g + U) | 0),
              (r[M++] = (p + T) | 0),
              (r[M++] = (f + L) | 0),
              (r[M++] = (y + N) | 0),
              (r[M++] = (b + C) | 0),
              (r[M++] = (s + k) | 0),
              (r[M++] = (m + R) | 0),
              (r[M++] = (w + j) | 0),
              (r[M++] = (E + D) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        ts = new Uint8Array(16),
        tn = (e, t) => {
          e.update(t);
          let i = t.length % 16;
          i && e.update(ts.subarray(i));
        },
        to = new Uint8Array(32);
      function ta(e, t, i, r, s) {
        let n = e(t, i, to),
          o = ti.create(n);
        s && tn(o, s), tn(o, r);
        let a = new Uint8Array(16),
          h = eW(a);
        eX(h, 0, BigInt(s ? s.length : 0), !0), eX(h, 8, BigInt(r.length), !0), o.update(a);
        let c = o.digest();
        return e0(n, a), c;
      }
      let th = ((e, t) => {
        function i(r, ...s) {
          if ((eq(r), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error('nonce / iv required');
            e.varSizeNonce ? eq(t) : eq(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && eq(s[1]);
          let o = t(r, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error('cipher output not supported');
                eq(t);
              }
            },
            h = !1;
          return {
            encrypt(e, t) {
              if (h) throw Error('cannot encrypt() twice with same key + nonce');
              return (h = !0), eq(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((eq(e), n && e.length < n))
                throw Error('invalid ciphertext length: smaller than tagLength=' + n);
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(i, e), i;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, i, r) => ({
          encrypt(s, n) {
            let o = s.length;
            (n = eY(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, i, a, a, 1);
            let h = ta(e, t, i, a, r);
            return n.set(h, o), e0(h), n;
          },
          decrypt(s, n) {
            n = eY(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              h = ta(e, t, i, o, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let i = 0;
                for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
                return 0 === i;
              })(a, h)
            )
              throw Error('invalid tag');
            return n.set(s.subarray(0, -16)), e(t, i, n, n, 1), e0(h), n;
          },
        }))(tr)
      );
      class tc extends ed {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), Y(e);
          let i = eu(t);
          if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            s = new Uint8Array(r);
          s.set(i.length > r ? e.create().update(i).digest() : i);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return X(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          X(this),
            Z(e, this.outputLen),
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
          let { oHash: t, iHash: i, finished: r, destroyed: s, blockLen: n, outputLen: o } = this;
          return (
            (e.finished = r),
            (e.destroyed = s),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = i._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let tl = (e, t, i) => new tc(e, t).update(i).digest();
      tl.create = (e, t) => new tc(e, t);
      let tu = new Uint8Array([0]),
        td = new Uint8Array(),
        tg = (e, t, i, r, s) =>
          (function (e, t, i, r = 32) {
            if ((Y(e), W(r), r > 255 * e.outputLen)) throw Error('Length should be <= 255*HashLen');
            let s = Math.ceil(r / e.outputLen);
            void 0 === i && (i = td);
            let n = new Uint8Array(s * e.outputLen),
              o = tl.create(e, t),
              a = o._cloneInto(),
              h = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (tu[0] = t + 1),
                a
                  .update(0 === t ? td : h)
                  .update(i)
                  .update(tu)
                  .digestInto(h),
                n.set(h, e.outputLen * t),
                o._cloneInto(a);
            return o.destroy(), a.destroy(), h.fill(0), tu.fill(0), n.slice(0, r);
          })(
            e,
            (function (e, t, i) {
              return Y(e), void 0 === i && (i = new Uint8Array(e.outputLen)), tl(e, eu(i), eu(t));
            })(e, t, i),
            r,
            s
          );
      class tp extends ed {
        constructor(e, t, i, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = i),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = ea(this.buffer));
        }
        update(e) {
          X(this);
          let { view: t, buffer: i, blockLen: r } = this,
            s = (e = eu(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(r - this.pos, s - n);
            if (o === r) {
              let t = ea(e);
              for (; r <= s - n; n += r) this.process(t, n);
              continue;
            }
            i.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          X(this), Q(e, this), (this.finished = !0);
          let { buffer: t, view: i, blockLen: r, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > r - n && (this.process(i, 0), (n = 0));
          for (let e = n; e < r; e++) t[e] = 0;
          (function (e, t, i, r) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((i >> s) & n),
              a = Number(i & n),
              h = 4 * !!r,
              c = 4 * !r;
            e.setUint32(t + h, o, r), e.setUint32(t + c, a, r);
          })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
          let o = ea(e),
            a = this.outputLen;
          if (a % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let h = a / 4,
            c = this.get();
          if (h > c.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < h; e++) o.setUint32(4 * e, c[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: i, length: r, finished: s, destroyed: n, pos: o } = this;
          return (
            (e.length = r),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            r % t && e.buffer.set(i),
            e
          );
        }
      }
      let tf = new Uint32Array([
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
        ty = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        tb = new Uint32Array(64);
      class tm extends tp {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | ty[0]),
            (this.B = 0 | ty[1]),
            (this.C = 0 | ty[2]),
            (this.D = 0 | ty[3]),
            (this.E = 0 | ty[4]),
            (this.F = 0 | ty[5]),
            (this.G = 0 | ty[6]),
            (this.H = 0 | ty[7]);
        }
        get() {
          let { A: e, B: t, C: i, D: r, E: s, F: n, G: o, H: a } = this;
          return [e, t, i, r, s, n, o, a];
        }
        set(e, t, i, r, s, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | i),
            (this.D = 0 | r),
            (this.E = 0 | s),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) tb[i] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = tb[e - 15],
              i = tb[e - 2],
              r = eh(t, 7) ^ eh(t, 18) ^ (t >>> 3),
              s = eh(i, 17) ^ eh(i, 19) ^ (i >>> 10);
            tb[e] = (s + tb[e - 7] + r + tb[e - 16]) | 0;
          }
          let { A: i, B: r, C: s, D: n, E: o, F: a, G: h, H: c } = this;
          for (let e = 0; e < 64; e++) {
            var l, u, d, g;
            let t =
                (c +
                  (eh(o, 6) ^ eh(o, 11) ^ eh(o, 25)) +
                  (((l = o) & a) ^ (~l & h)) +
                  tf[e] +
                  tb[e]) |
                0,
              p =
                ((eh(i, 2) ^ eh(i, 13) ^ eh(i, 22)) +
                  (((u = i) & (d = r)) ^ (u & (g = s)) ^ (d & g))) |
                0;
            (c = h),
              (h = a),
              (a = o),
              (o = (n + t) | 0),
              (n = s),
              (s = r),
              (r = i),
              (i = (t + p) | 0);
          }
          (i = (i + this.A) | 0),
            (r = (r + this.B) | 0),
            (s = (s + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (h = (h + this.G) | 0),
            (c = (c + this.H) | 0),
            this.set(i, r, s, n, o, a, h, c);
        }
        roundClean() {
          tb.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let tw = eg(() => new tm()),
        tv = BigInt(0);
      function tE(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function tx(e) {
        if (!tE(e)) throw Error('Uint8Array expected');
      }
      let t_ = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0')),
        tI = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function tS(e) {
        return e >= tI._0 && e <= tI._9
          ? e - tI._0
          : e >= tI.A && e <= tI.F
            ? e - (tI.A - 10)
            : e >= tI.a && e <= tI.f
              ? e - (tI.a - 10)
              : void 0;
      }
      function tP(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          i = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let r = new Uint8Array(i);
        for (let t = 0, s = 0; t < i; t++, s += 2) {
          let i = tS(e.charCodeAt(s)),
            n = tS(e.charCodeAt(s + 1));
          if (void 0 === i || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          r[t] = 16 * i + n;
        }
        return r;
      }
      function tO(e) {
        return (
          tx(e),
          (function (e) {
            if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
            return '' === e ? tv : BigInt('0x' + e);
          })(
            (function (e) {
              tx(e);
              let t = '';
              for (let i = 0; i < e.length; i++) t += t_[e[i]];
              return t;
            })(Uint8Array.from(e).reverse())
          )
        );
      }
      function tA(e, t, i) {
        let r;
        if ('string' == typeof t)
          try {
            r = tP(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (tE(t)) r = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = r.length;
        if ('number' == typeof i && s !== i)
          throw Error(e + ' of length ' + i + ' expected, got ' + s);
        return r;
      }
      let tU = (e) => 'bigint' == typeof e && tv <= e;
      function tT(e, t, i, r) {
        if (!(tU(t) && tU(i) && tU(r)) || !(i <= t) || !(t < r))
          throw Error('expected valid ' + e + ': ' + i + ' <= n < ' + r + ', got ' + t);
      }
      let tL = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || tE(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        },
        tN = BigInt(0),
        tC = BigInt(1);
      function tk(e, t) {
        let i = e % t;
        return i >= tN ? i : t + i;
      }
      function tR(e, t, i) {
        let r = e;
        for (; t-- > tN; ) (r *= r), (r %= i);
        return r;
      }
      BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let tj = BigInt(0),
        tD = BigInt(1),
        tM = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        );
      BigInt(0);
      let tz = BigInt(1),
        tB = BigInt(2),
        t$ = BigInt(3),
        tK = BigInt(5);
      BigInt(8);
      let tH = (function (e) {
          let t =
              ((function (e, t, i = {}) {
                let r = (t, i, r) => {
                  let s = tL[i];
                  if ('function' != typeof s) throw Error('invalid validator function');
                  let n = e[t];
                  if (!(r && void 0 === n) && !s(n, e))
                    throw Error('param ' + String(t) + ' is invalid. Expected ' + i + ', got ' + n);
                };
                for (let [e, i] of Object.entries(t)) r(e, i, !1);
                for (let [e, t] of Object.entries(i)) r(e, t, !0);
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
            { P: i } = t,
            r = (e) => tk(e, i),
            s = t.montgomeryBits,
            n = Math.ceil(s / 8),
            o = t.nByteLength,
            a = t.adjustScalarBytes || ((e) => e),
            h =
              t.powPminus2 ||
              ((e) =>
                (function (e, t, i) {
                  if (t < tN) throw Error('invalid exponent, negatives unsupported');
                  if (i <= tN) throw Error('invalid modulus');
                  if (i === tC) return tN;
                  let r = tC;
                  for (; t > tN; ) t & tC && (r = (r * e) % i), (e = (e * e) % i), (t >>= tC);
                  return r;
                })(e, i - BigInt(2), i));
          function c(e, t, i) {
            let s = r(e * (t - i));
            return [(t = r(t - s)), (i = r(i + s))];
          }
          let l = (t.a - BigInt(2)) / BigInt(4);
          function u(e) {
            var t;
            return tP((t = r(e)).toString(16).padStart(2 * n, '0')).reverse();
          }
          function d(e, t) {
            let d = (function (e, t) {
              tT('u', e, tj, i), tT('scalar', t, tj, i);
              let n = tD,
                o = tj,
                a = e,
                u = tD,
                d = tj,
                g;
              for (let i = BigInt(s - 1); i >= tj; i--) {
                let s = (t >> i) & tD;
                (d ^= s),
                  (n = (g = c(d, n, a))[0]),
                  (a = g[1]),
                  (o = (g = c(d, o, u))[0]),
                  (u = g[1]),
                  (d = s);
                let h = n + o,
                  p = r(h * h),
                  f = n - o,
                  y = r(f * f),
                  b = p - y,
                  m = a + u,
                  w = r((a - u) * h),
                  E = r(m * f),
                  x = w + E,
                  _ = w - E;
                (a = r(x * x)), (u = r(e * r(_ * _))), (n = r(p * y)), (o = r(b * (p + r(l * b))));
              }
              return (
                (n = (g = c(d, n, a))[0]),
                (a = g[1]),
                (o = (g = c(d, o, u))[0]),
                (u = g[1]),
                r(n * h(o))
              );
            })(
              (function (e) {
                let t = tA('u coordinate', e, n);
                return 32 === o && (t[31] &= 127), tO(t);
              })(t),
              (function (e) {
                let t = tA('scalar', e),
                  i = t.length;
                if (i !== n && i !== o)
                  throw Error(
                    'invalid scalar, expected ' + ('' + n + ' or ') + o + ' bytes, got ' + i
                  );
                return tO(a(t));
              })(e)
            );
            if (d === tj) throw Error('invalid private or public key received');
            return u(d);
          }
          let g = u(t.Gu);
          function p(e) {
            return d(e, g);
          }
          return {
            scalarMult: d,
            scalarMultBase: p,
            getSharedSecret: (e, t) => d(e, t),
            getPublicKey: (e) => p(e),
            utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
            GuBytes: g,
          };
        })({
          P: tM,
          a: BigInt(486662),
          montgomeryBits: 255,
          nByteLength: 32,
          Gu: BigInt(9),
          powPminus2: (e) => {
            let { pow_p_5_8: t, b2: i } = (function (e) {
              let t = BigInt(10),
                i = BigInt(20),
                r = BigInt(40),
                s = BigInt(80),
                n = (((e * e) % tM) * e) % tM,
                o = (tR(n, tB, tM) * n) % tM,
                a = (tR(o, tz, tM) * e) % tM,
                h = (tR(a, tK, tM) * a) % tM,
                c = (tR(h, t, tM) * h) % tM,
                l = (tR(c, i, tM) * c) % tM,
                u = (tR(l, r, tM) * l) % tM,
                d = (tR(u, s, tM) * u) % tM,
                g = (tR(d, s, tM) * u) % tM,
                p = (tR(g, t, tM) * h) % tM;
              return { pow_p_5_8: (tR(p, tB, tM) * e) % tM, b2: n };
            })(e);
            return tk(tR(t, t$, tM) * i, tM);
          },
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          randomBytes: ep,
        }),
        tF = 'base10',
        tq = 'base16',
        tV = 'base64pad',
        tG = 'utf8';
      function tJ() {
        return S(ep(32), tq);
      }
      function tW(e) {
        return S(tw(I(e, tG)), tq);
      }
      function tZ(e) {
        return Number(S(e, tF));
      }
      function tY(e) {
        let { encoding: t = tV } = e;
        if (2 === tZ(e.type)) return S(b([e.type, e.sealed]), t);
        if (1 === tZ(e.type)) {
          if (typeof e.senderPublicKey > 'u')
            throw Error('Missing sender public key for type 1 envelope');
          return S(b([e.type, e.senderPublicKey, e.iv, e.sealed]), t);
        }
        return S(b([e.type, e.iv, e.sealed]), t);
      }
      function tX(e) {
        let { encoded: t, encoding: i = tV } = e,
          r = I(t, i),
          s = r.slice(0, 1);
        if (1 === tZ(s)) {
          let e = r.slice(1, 33),
            t = r.slice(33, 45);
          return { type: s, sealed: r.slice(45), iv: t, senderPublicKey: e };
        }
        if (2 === tZ(s)) return { type: s, sealed: r.slice(1), iv: ep(12) };
        let n = r.slice(1, 13);
        return { type: s, sealed: r.slice(13), iv: n };
      }
      function tQ(e) {
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
      function t0(e) {
        return (
          1 === e.type &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function t1(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function t5(e) {
        let t = O.CG[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function t6(e) {
        var t;
        if (!e.includes('wc:')) {
          let t = J(e);
          null != t && t.includes('wc:') && (e = t);
        }
        let i = (e = (e = e.includes('wc://') ? e.replace('wc://', '') : e).includes('wc:')
            ? e.replace('wc:', '')
            : e).indexOf(':'),
          r = -1 !== e.indexOf('?') ? e.indexOf('?') : void 0,
          s = e.substring(0, i),
          n = e.substring(i + 1, r).split('@'),
          o = new URLSearchParams('u' > typeof r ? e.substring(r) : ''),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        let h = 'string' == typeof a.methods ? a.methods.split(',') : void 0;
        return {
          protocol: s,
          topic: (t = n[0]).startsWith('//') ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = '-') {
            let i = {},
              r = 'relay' + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(r)) {
                  let s = t.replace(r, ''),
                    n = e[t];
                  i[s] = n;
                }
              }),
              i
            );
          })(a),
          methods: h,
          expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0,
        };
      }
      function t3(e) {
        let t = new URLSearchParams(),
          i = (function (e, t = '-') {
            let i = {};
            return (
              Object.keys(e).forEach((r) => {
                e[r] && (i['relay' + t + r] = e[r]);
              }),
              i
            );
          })(e.relay);
        Object.keys(i)
          .sort()
          .forEach((e) => {
            t.set(e, i[e]);
          }),
          t.set('symKey', e.symKey),
          e.expiryTimestamp && t.set('expiryTimestamp', e.expiryTimestamp.toString()),
          e.methods && t.set('methods', e.methods.join(','));
        let r = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${r}`;
      }
      var t2 = Object.defineProperty,
        t8 = Object.defineProperties,
        t4 = Object.getOwnPropertyDescriptors,
        t9 = Object.getOwnPropertySymbols,
        t7 = Object.prototype.hasOwnProperty,
        ie = Object.prototype.propertyIsEnumerable,
        it = (e, t, i) =>
          t in e
            ? t2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ii = (e, t) => {
          for (var i in t || (t = {})) t7.call(t, i) && it(e, i, t[i]);
          if (t9) for (var i of t9(t)) ie.call(t, i) && it(e, i, t[i]);
          return e;
        },
        ir = (e, t) => t8(e, t4(t));
      function is(e) {
        return e.includes(':');
      }
      let io = {
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
        ia = {
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
      function ih(e, t) {
        let { message: i, code: r } = ia[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function ic(e, t) {
        let { message: i, code: r } = io[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function il(e) {
        return typeof e > 'u';
      }
      function iu(e, t) {
        return !!(t && il(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function id(e) {
        var t, i;
        let r = !0;
        return Array.isArray((t = e)) ? e.length && (r = e.every((e) => iu(e, !1))) : (r = !1), r;
      }
      function ig(e) {
        return 'u' > typeof e;
      }
      function ip() {
        let e = R();
        return new Promise((t) => {
          switch (e) {
            case L.browser:
              t(k() && navigator?.onLine);
              break;
            case L.reactNative:
              t(iy());
              break;
            case L.node:
            default:
              t(!0);
          }
        });
      }
      async function iy() {
        if (C() && 'u' > typeof i.g && null != i.g && i.g.NetInfo) {
          let e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      var ib = i(84214),
        im = i(32034),
        iw = i(60172),
        iv = i(84719),
        iE = i.n(iv);
      let ix = 'core',
        i_ = `wc@2:${ix}:`,
        iI = { logger: 'error' },
        iS = { database: ':memory:' },
        iP = 'client_ed25519_seed',
        iO = l.ONE_DAY,
        iA = l.SIX_HOURS,
        iU = 'wss://relay.walletconnect.org',
        iT = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          publish: 'relayer_publish',
        },
        iL = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        iN = '2.18.1',
        iC = { link_mode: 'link_mode', relay: 'relay' },
        ik = 'WALLETCONNECT_LINK_MODE_APPS',
        iR = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        ij = 1e3 * l.FIVE_SECONDS,
        iD = {
          wc_pairingDelete: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        iM = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        iz = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        iB = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync',
        },
        i$ = 'https://verify.walletconnect.org',
        iK = `${i$}/v3`,
        iH = ['https://verify.walletconnect.com', i$],
        iF = {
          pairing_started: 'pairing_started',
          pairing_uri_validation_success: 'pairing_uri_validation_success',
          pairing_uri_not_expired: 'pairing_uri_not_expired',
          store_new_pairing: 'store_new_pairing',
          subscribing_pairing_topic: 'subscribing_pairing_topic',
          subscribe_pairing_topic_success: 'subscribe_pairing_topic_success',
          existing_pairing: 'existing_pairing',
          pairing_not_expired: 'pairing_not_expired',
          emit_inactive_pairing: 'emit_inactive_pairing',
        },
        iq = {
          no_internet_connection: 'no_internet_connection',
          malformed_pairing_uri: 'malformed_pairing_uri',
          active_pairing_already_exists: 'active_pairing_already_exists',
          subscribe_pairing_topic_failure: 'subscribe_pairing_topic_failure',
          pairing_expired: 'pairing_expired',
        };
      var iV = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== i[o]) throw TypeError(n + ' is ambiguous');
          i[o] = s;
        }
        var a = e.length,
          h = e.charAt(0),
          c = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var r = 0, s = 0; e[t] === h; ) r++, t++;
            for (var n = ((e.length - t) * c + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var l = i[e.charCodeAt(t)];
              if (255 === l) return;
              for (var u = 0, d = n - 1; (0 !== l || u < s) && -1 !== d; d--, u++)
                (l += (a * o[d]) >>> 0), (o[d] = l % 256 >>> 0), (l = (l / 256) >>> 0);
              if (0 !== l) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var g = n - s; g !== n && 0 === o[g]; ) g++;
              for (var p = new Uint8Array(r + (n - g)), f = r; g !== n; ) p[f++] = o[g++];
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
            for (var i = 0, r = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, i++;
            for (var o = ((n - s) * l + 1) >>> 0, c = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, g = o - 1; (0 !== u || d < r) && -1 !== g; g--, d++)
                (u += (256 * c[g]) >>> 0), (c[g] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (r = d), s++;
            }
            for (var p = o - r; p !== o && 0 === c[p]; ) p++;
            for (var f = h.repeat(i); p < o; ++p) f += e.charAt(c[p]);
            return f;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var i = u(e);
            if (i) return i;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let iG = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        iJ = (e) => new TextEncoder().encode(e),
        iW = (e) => new TextDecoder().decode(e);
      class iZ {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class iY {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
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
          return iQ(this, e);
        }
      }
      class iX {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return iQ(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let iQ = (e, t) =>
        new iX({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class i0 {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new iZ(e, t, i)),
            (this.decoder = new iY(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let i1 = ({ name: e, prefix: t, encode: i, decode: r }) => new i0(e, t, i, r),
        i5 = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = iV(i, t);
          return i1({ prefix: e, name: t, encode: r, decode: (e) => iG(s(e)) });
        },
        i6 = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * i) / 8) | 0),
            a = 0,
            h = 0,
            c = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (h = (h << i) | n), (a += i) >= 8 && ((a -= 8), (o[c++] = 255 & (h >> a)));
          }
          if (a >= i || 255 & (h << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        i3 = (e, t, i) => {
          let r = '=' === t[t.length - 1],
            s = (1 << i) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let r = 0; r < e.length; ++r)
            for (a = (a << 8) | e[r], o += 8; o > i; ) (o -= i), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (i - o))]), r)) for (; (n.length * i) & 7; ) n += '=';
          return n;
        },
        i2 = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          i1({ prefix: t, name: e, encode: (e) => i3(e, r, i), decode: (t) => i6(t, r, i, e) });
      var i8 = Object.freeze({
          __proto__: null,
          identity: i1({
            prefix: '\0',
            name: 'identity',
            encode: (e) => iW(e),
            decode: (e) => iJ(e),
          }),
        }),
        i4 = Object.freeze({
          __proto__: null,
          base2: i2({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        i9 = Object.freeze({
          __proto__: null,
          base8: i2({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        i7 = Object.freeze({
          __proto__: null,
          base10: i5({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        re = Object.freeze({
          __proto__: null,
          base16: i2({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: i2({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let rt = i2({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        ri = i2({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        rr = i2({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        rs = i2({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        rn = i2({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        ro = i2({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        ra = i2({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var rh = Object.freeze({
          __proto__: null,
          base32: rt,
          base32upper: ri,
          base32pad: rr,
          base32padupper: rs,
          base32hex: rn,
          base32hexupper: ro,
          base32hexpad: ra,
          base32hexpadupper: i2({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: i2({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        rc = Object.freeze({
          __proto__: null,
          base36: i5({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: i5({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        rl = Object.freeze({
          __proto__: null,
          base58btc: i5({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: i5({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let ru = i2({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        rd = i2({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var rg = Object.freeze({
        __proto__: null,
        base64: ru,
        base64pad: rd,
        base64url: i2({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: i2({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let rp = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        rf = rp.reduce((e, t, i) => ((e[i] = t), e), []),
        ry = rp.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var rb = Object.freeze({
        __proto__: null,
        base256emoji: i1({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += rf[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = ry[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function rm(e, t, i) {
        (t = t || []), (i = i || 0);
        for (var r = i; e >= 0x80000000; ) (t[i++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
        return (t[i] = 0 | e), (rm.bytes = i - r + 1), t;
      }
      function rw(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((rw.bytes = 0), RangeError('Could not decode varint'));
          (i = e[n++]), (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)), (s += 7);
        } while (i >= 128);
        return (rw.bytes = n - t), r;
      }
      var rv = {
        encode: rm,
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
      let rE = (e, t, i = 0) => (rv.encode(e, t, i), t),
        rx = (e) => rv.encodingLength(e),
        r_ = (e, t) => {
          let i = t.byteLength,
            r = rx(e),
            s = r + rx(i),
            n = new Uint8Array(s + i);
          return rE(e, n, 0), rE(i, n, r), n.set(t, s), new rI(e, i, t, n);
        };
      class rI {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let rS = ({ name: e, code: t, encode: i }) => new rP(e, t, i);
      class rP {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? r_(this.code, t) : t.then((e) => r_(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let rO = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var rA = Object.freeze({
          __proto__: null,
          sha256: rS({ name: 'sha2-256', code: 18, encode: rO('SHA-256') }),
          sha512: rS({ name: 'sha2-512', code: 19, encode: rO('SHA-512') }),
        }),
        rU = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: iG, digest: (e) => r_(0, iG(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let rT = { ...i8, ...i4, ...i9, ...i7, ...re, ...rh, ...rc, ...rl, ...rg, ...rb };
      function rL(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...rA, ...rU });
      let rN = rL(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        rC = rL(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        rk = { utf8: rN, 'utf-8': rN, hex: rT.base16, latin1: rC, ascii: rC, binary: rC, ...rT };
      var rR = Object.defineProperty,
        rj = (e, t, i) =>
          t in e
            ? rR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        rD = (e, t, i) => rj(e, 'symbol' != typeof t ? t + '' : t, i);
      class rM {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            rD(this, 'keychain', new Map()),
            rD(this, 'name', 'keychain'),
            rD(this, 'version', '0.3'),
            rD(this, 'initialized', !1),
            rD(this, 'storagePrefix', i_),
            rD(this, 'init', async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            rD(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            rD(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            rD(this, 'get', (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = ih('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            rD(this, 'del', async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, h.U5)(t, this.name));
        }
        get context() {
          return (0, h.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, M(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? z(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var rz = Object.defineProperty,
        rB = (e, t, i) =>
          t in e
            ? rz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r$ = (e, t, i) => rB(e, 'symbol' != typeof t ? t + '' : t, i);
      class rK {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            r$(this, 'name', 'crypto'),
            r$(this, 'keychain'),
            r$(this, 'randomSessionIdentifier', tJ()),
            r$(this, 'initialized', !1),
            r$(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            r$(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            r$(this, 'getClientId', async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = d.TZ(e);
              return d.UF(t.publicKey);
            }),
            r$(this, 'generateKeyPair', () => {
              this.isInitialized();
              let e = (function () {
                let e = tH.utils.randomPrivateKey(),
                  t = tH.getPublicKey(e);
                return { privateKey: S(e, tq), publicKey: S(t, tq) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            r$(this, 'signJWT', async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = d.TZ(t),
                r = this.randomSessionIdentifier;
              return await d.FA(r, e, iO, i);
            }),
            r$(this, 'generateSharedKey', (e, t, i) => {
              var r;
              this.isInitialized();
              let s =
                ((r = this.getPrivateKey(e)),
                S(tg(tw, tH.getSharedSecret(I(r, tq), I(t, tq)), void 0, void 0, 32), tq));
              return this.setSymKey(s, i);
            }),
            r$(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              let i = t || S(tw(I(e, tq)), tq);
              return await this.keychain.set(i, e), i;
            }),
            r$(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            r$(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            r$(this, 'encode', async (e, t, i) => {
              this.isInitialized();
              let r = tQ(i),
                s = (0, u.h)(t);
              if (2 === r.type)
                return (function (e, t) {
                  let i = I('2', tF),
                    r = ep(12);
                  return tY({ type: i, sealed: I(e, tG), iv: r, encoding: t });
                })(s, i?.encoding);
              if (t0(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = r;
              return (function (e) {
                var t;
                let i = ((t = 'u' > typeof e.type ? e.type : 0), I(`${t}`, tF));
                if (1 === tZ(i) && typeof e.senderPublicKey > 'u')
                  throw Error('Missing sender public key for type 1 envelope');
                let r = 'u' > typeof e.senderPublicKey ? I(e.senderPublicKey, tq) : void 0,
                  s = 'u' > typeof e.iv ? I(e.iv, tq) : ep(12);
                return tY({
                  type: i,
                  sealed: th(I(e.symKey, tq), s).encrypt(I(e.message, tG)),
                  iv: s,
                  senderPublicKey: r,
                  encoding: e.encoding,
                });
              })({ type: o, symKey: n, message: s, senderPublicKey: a, encoding: i?.encoding });
            }),
            r$(this, 'decode', async (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = tX({ encoded: e, encoding: t?.encoding });
                return tQ({
                  type: tZ(i.type),
                  senderPublicKey:
                    'u' > typeof i.senderPublicKey ? S(i.senderPublicKey, tq) : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, i);
              if (2 === r.type) {
                let e = (function (e, t) {
                  let { sealed: i } = tX({ encoded: e, encoding: t });
                  return S(i, tG);
                })(t, i?.encoding);
                return (0, u.j)(e);
              }
              if (t0(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let r = this.getSymKey(e),
                  s = (function (e) {
                    let t = I(e.symKey, tq),
                      { sealed: i, iv: r } = tX(e),
                      s = th(t, r).decrypt(i);
                    if (null === s) throw Error('Failed to decrypt');
                    return S(s, tG);
                  })({ symKey: r, encoded: t, encoding: i?.encoding });
                return (0, u.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            r$(this, 'getPayloadType', (e, t = tV) => tZ(tX({ encoded: e, encoding: t }).type)),
            r$(this, 'getPayloadSenderPublicKey', (e, t = tV) => {
              let i = tX({ encoded: e, encoding: t });
              return i.senderPublicKey ? S(i.senderPublicKey, tq) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, h.U5)(t, this.name)),
            (this.keychain = i || new rM(this.core, this.logger));
        }
        get context() {
          return (0, h.oI)(this.logger);
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
            e = this.keychain.get(iP);
          } catch {
            (e = tJ()), await this.keychain.set(iP, e);
          }
          return (function (e, t = 'utf8') {
            let i = rk[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ('utf8' === t || 'utf-8' === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, 'utf8')
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, 'base16');
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var rH = Object.defineProperty,
        rF = (e, t, i) =>
          t in e
            ? rH(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        rq = (e, t, i) => rF(e, 'symbol' != typeof t ? t + '' : t, i);
      class rV extends c.dQ {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            rq(this, 'messages', new Map()),
            rq(this, 'name', 'messages'),
            rq(this, 'version', '0.3'),
            rq(this, 'initialized', !1),
            rq(this, 'storagePrefix', i_),
            rq(this, 'init', async () => {
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
            rq(this, 'set', async (e, t) => {
              this.isInitialized();
              let i = tW(t),
                r = this.messages.get(e);
              return (
                typeof r > 'u' && (r = {}),
                'u' > typeof r[i] || ((r[i] = t), this.messages.set(e, r), await this.persist()),
                i
              );
            }),
            rq(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            rq(this, 'has', (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[tW(t)])),
            rq(this, 'del', async (e) => {
              this.isInitialized(), this.messages.delete(e), await this.persist();
            }),
            (this.logger = (0, h.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, h.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, M(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? z(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var rG = Object.defineProperty,
        rJ = Object.defineProperties,
        rW = Object.getOwnPropertyDescriptors,
        rZ = Object.getOwnPropertySymbols,
        rY = Object.prototype.hasOwnProperty,
        rX = Object.prototype.propertyIsEnumerable,
        rQ = (e, t, i) =>
          t in e
            ? rG(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r0 = (e, t) => {
          for (var i in t || (t = {})) rY.call(t, i) && rQ(e, i, t[i]);
          if (rZ) for (var i of rZ(t)) rX.call(t, i) && rQ(e, i, t[i]);
          return e;
        },
        r1 = (e, t) => rJ(e, rW(t)),
        r5 = (e, t, i) => rQ(e, 'symbol' != typeof t ? t + '' : t, i);
      class r6 extends c.qE {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            r5(this, 'events', new s.EventEmitter()),
            r5(this, 'name', 'publisher'),
            r5(this, 'queue', new Map()),
            r5(this, 'publishTimeout', (0, l.toMiliseconds)(l.ONE_MINUTE)),
            r5(this, 'initialPublishTimeout', (0, l.toMiliseconds)(15 * l.ONE_SECOND)),
            r5(this, 'needsTransportRestart', !1),
            r5(this, 'publish', async (e, t, i) => {
              var r;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: i },
                });
              let s = i?.ttl || iA,
                n = t1(i),
                o = i?.prompt || !1,
                a = i?.tag || 0,
                h = i?.id || (0, im.getBigIntRpcId)().toString(),
                c = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: h,
                    attestation: i?.attestation,
                    tvf: i?.tvf,
                  },
                },
                l = `Failed to publish payload, please try again. id:${h} tag:${a}`;
              try {
                let r = new Promise(async (r) => {
                  let n = ({ id: e }) => {
                    c.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(iT.publish, n),
                      r(c));
                  };
                  this.relayer.events.on(iT.publish, n);
                  let l = B(
                    new Promise((r, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: o,
                        tag: a,
                        id: h,
                        attestation: i?.attestation,
                        tvf: i?.tvf,
                      })
                        .then(r)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${h} tag:${a}`
                  );
                  try {
                    await l, this.events.removeListener(iT.publish, n);
                  } catch (e) {
                    this.queue.set(h, r1(r0({}, c), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: h, topic: e, message: t, opts: i },
                }),
                  await B(r, this.publishTimeout, l);
              } catch (e) {
                if (
                  (this.logger.debug('Failed to Publish Payload'),
                  this.logger.error(e),
                  null != (r = i?.internal) && r.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(h);
              }
            }),
            r5(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            r5(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            r5(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            r5(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, h.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, h.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, i, r, s;
          let {
              topic: n,
              message: o,
              ttl: a = iA,
              prompt: h,
              tag: c,
              id: l,
              attestation: u,
              tvf: d,
            } = e,
            g = {
              method: t5(t1().protocol).publish,
              params: r0({ topic: n, message: o, ttl: a, prompt: h, tag: c, attestation: u }, d),
              id: l,
            };
          il(null == (t = g.params) ? void 0 : t.prompt) &&
            (null == (i = g.params) || delete i.prompt),
            il(null == (r = g.params) ? void 0 : r.tag) && (null == (s = g.params) || delete s.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: g });
          let p = await this.relayer.request(g);
          return (
            this.relayer.events.emit(iT.publish, e),
            this.logger.debug('Successfully Published Payload'),
            p
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let i = e.attempt + 1;
            this.queue.set(t, r1(r0({}, e), { attempt: i }));
            let { topic: r, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`
            ),
              await this.rpcPublish(
                r1(r0({}, e), {
                  topic: r,
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
              (this.needsTransportRestart = !1), this.relayer.events.emit(iT.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(iT.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var r3 = Object.defineProperty,
        r2 = (e, t, i) =>
          t in e
            ? r3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r8 = (e, t, i) => r2(e, 'symbol' != typeof t ? t + '' : t, i);
      class r4 {
        constructor() {
          r8(this, 'map', new Map()),
            r8(this, 'set', (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            r8(this, 'get', (e) => this.map.get(e) || []),
            r8(this, 'exists', (e, t) => this.get(e).includes(t)),
            r8(this, 'delete', (e, t) => {
              if (typeof t > 'u') {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let r = i.filter((e) => e !== t);
              if (!r.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, r);
            }),
            r8(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var r9 = Object.defineProperty,
        r7 = Object.defineProperties,
        se = Object.getOwnPropertyDescriptors,
        st = Object.getOwnPropertySymbols,
        si = Object.prototype.hasOwnProperty,
        sr = Object.prototype.propertyIsEnumerable,
        ss = (e, t, i) =>
          t in e
            ? r9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sn = (e, t) => {
          for (var i in t || (t = {})) si.call(t, i) && ss(e, i, t[i]);
          if (st) for (var i of st(t)) sr.call(t, i) && ss(e, i, t[i]);
          return e;
        },
        so = (e, t) => r7(e, se(t)),
        sa = (e, t, i) => ss(e, 'symbol' != typeof t ? t + '' : t, i);
      class sh extends c.mF {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            sa(this, 'subscriptions', new Map()),
            sa(this, 'topicMap', new r4()),
            sa(this, 'events', new s.EventEmitter()),
            sa(this, 'name', 'subscription'),
            sa(this, 'version', '0.3'),
            sa(this, 'pending', new Map()),
            sa(this, 'cached', []),
            sa(this, 'initialized', !1),
            sa(this, 'pendingSubscriptionWatchLabel', 'pending_sub_watch_label'),
            sa(this, 'pollingInterval', 20),
            sa(this, 'storagePrefix', i_),
            sa(this, 'subscribeTimeout', (0, l.toMiliseconds)(l.ONE_MINUTE)),
            sa(this, 'initialSubscribeTimeout', (0, l.toMiliseconds)(15 * l.ONE_SECOND)),
            sa(this, 'clientId'),
            sa(this, 'batchSubscribeTopicsLimit', 500),
            sa(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            sa(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                let i = t1(t),
                  r = { topic: e, relay: i, transportType: t?.transportType };
                this.pending.set(e, r);
                let s = await this.rpcSubscribe(e, i, t);
                return (
                  'string' == typeof s &&
                    (this.onSubscribe(s, r),
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
            sa(this, 'unsubscribe', async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                'u' > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            sa(this, 'isSubscribed', async (e) => {
              if (this.topics.includes(e)) return !0;
              let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((i, r) => {
                let s = new l.Watch();
                s.start(t);
                let n = setInterval(() => {
                  ((!this.pending.has(e) && this.topics.includes(e)) ||
                    this.cached.some((t) => t.topic === e)) &&
                    (clearInterval(n), s.stop(t), i(!0)),
                    s.elapsed(t) >= ij &&
                      (clearInterval(n), s.stop(t), r(Error('Subscription resolution timeout')));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            sa(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            sa(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            sa(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            sa(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            sa(this, 'start', async () => {
              await this.onConnect();
            }),
            sa(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            sa(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            sa(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            sa(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(o.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(iR.created, async (e) => {
                  let t = iR.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(iR.deleted, async (e) => {
                  let t = iR.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, h.U5)(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return (0, h.oI)(this.logger);
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
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(i.map(async (i) => await this.unsubscribeById(e, i, t)));
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug('Unsubscribing Topic'),
            this.logger.trace({
              type: 'method',
              method: 'unsubscribe',
              params: { topic: e, id: t, opts: i },
            });
          try {
            let r = t1(i);
            await this.rpcUnsubscribe(e, t, r);
            let s = ic('USER_DISCONNECTED', `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug('Successfully Unsubscribed Topic'),
              this.logger.trace({
                type: 'method',
                method: 'unsubscribe',
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(e), e);
          }
        }
        async rpcSubscribe(e, t, i) {
          var r;
          i?.transportType === iC.relay && (await this.restartToComplete());
          let s = { method: t5(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
          let n = null == (r = i?.internal) ? void 0 : r.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (i?.transportType === iC.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  },
                  (0, l.toMiliseconds)(l.ONE_SECOND)
                ),
                t
              );
            let r = new Promise(async (t) => {
                let i = (r) => {
                  r.topic === e && (this.events.removeListener(iR.created, i), t(r.id));
                };
                this.events.on(iR.created, i);
                try {
                  let r = await B(
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
                  this.events.removeListener(iR.created, i), t(r);
                } catch {}
              }),
              o = await B(r, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
            if (!o && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return o ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(iT.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: t5(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: t });
          try {
            await await B(
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
            this.relayer.events.emit(iT.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = {
            method: t5(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i });
          try {
            t = await await B(
              new Promise((e, t) => {
                this.relayer
                  .request(i)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchFetchMessages failed, please try again'
            );
          } catch {
            this.relayer.events.emit(iT.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let r = { method: t5(i.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, so(sn({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, sn({}, e)), this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
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
          this.subscriptions.set(e, sn({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(iR.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = ih('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug('Deleting subscription'),
            this.logger.trace({ type: 'method', method: 'deleteSubscription', id: e, reason: t });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(iR.deleted, so(sn({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(iR.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let i = 0; i < t; i++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(iR.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = ih('RESTORE_WILL_OVERRIDE', this.name);
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
                e.map(async (e) => so(sn({}, e), { id: await this.getSubscriptionId(e.topic) }))
              )
            ));
        }
        async batchFetchMessages(e) {
          var t;
          if (!e.length) return;
          this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
          let i = await this.rpcBatchFetchMessages(e);
          i &&
            i.messages &&
            (await ((t = (0, l.toMiliseconds)(l.ONE_SECOND)), new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(i.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
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
          return tW(e + (await this.getClientId()));
        }
      }
      var sc = Object.defineProperty,
        sl = Object.getOwnPropertySymbols,
        su = Object.prototype.hasOwnProperty,
        sd = Object.prototype.propertyIsEnumerable,
        sg = (e, t, i) =>
          t in e
            ? sc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sp = (e, t) => {
          for (var i in t || (t = {})) su.call(t, i) && sg(e, i, t[i]);
          if (sl) for (var i of sl(t)) sd.call(t, i) && sg(e, i, t[i]);
          return e;
        },
        sf = (e, t, i) => sg(e, 'symbol' != typeof t ? t + '' : t, i);
      class sy extends c.m5 {
        constructor(e) {
          super(e),
            sf(this, 'protocol', 'wc'),
            sf(this, 'version', 2),
            sf(this, 'core'),
            sf(this, 'logger'),
            sf(this, 'events', new s.EventEmitter()),
            sf(this, 'provider'),
            sf(this, 'messages'),
            sf(this, 'subscriber'),
            sf(this, 'publisher'),
            sf(this, 'name', 'relayer'),
            sf(this, 'transportExplicitlyClosed', !1),
            sf(this, 'initialized', !1),
            sf(this, 'connectionAttemptInProgress', !1),
            sf(this, 'relayUrl'),
            sf(this, 'projectId'),
            sf(this, 'packageName'),
            sf(this, 'bundleId'),
            sf(this, 'hasExperiencedNetworkDisruption', !1),
            sf(this, 'pingTimeout'),
            sf(this, 'heartBeatTimeout', (0, l.toMiliseconds)(l.THIRTY_SECONDS + l.FIVE_SECONDS)),
            sf(this, 'reconnectTimeout'),
            sf(this, 'connectPromise'),
            sf(this, 'requestsInFlight', []),
            sf(this, 'connectTimeout', (0, l.toMiliseconds)(15 * l.ONE_SECOND)),
            sf(this, 'request', async (e) => {
              var t, i;
              this.logger.debug('Publishing Request Payload');
              let r = e.id || (0, im.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  { id: r, method: e.method, topic: null == (t = e.params) ? void 0 : t.topic },
                  'relayer.request - publishing...'
                );
                let s = `${r}:${(null == (i = e.params) ? void 0 : i.tag) || ''}`;
                this.requestsInFlight.push(s);
                let n = await this.provider.request(e);
                return (this.requestsInFlight = this.requestsInFlight.filter((e) => e !== s)), n;
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${r}`), e);
              }
            }),
            sf(this, 'resetPingTimeout', () => {
              if (N())
                try {
                  clearTimeout(this.pingTimeout),
                    (this.pingTimeout = setTimeout(() => {
                      var e, t, i;
                      this.logger.debug({}, 'pingTimeout: Connection stalled, terminating...'),
                        null ==
                          (i =
                            null == (t = null == (e = this.provider) ? void 0 : e.connection)
                              ? void 0
                              : t.socket) || i.terminate();
                    }, this.heartBeatTimeout));
                } catch (e) {
                  this.logger.warn(e, e?.message);
                }
            }),
            sf(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            sf(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \uD83D\uDEDC'),
                this.startPingTimeout(),
                this.events.emit(iT.connect);
            }),
            sf(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            sf(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(e, `Fatal socket error: ${e?.message}`),
                this.events.emit(iT.error, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            sf(this, 'registerProviderListeners', () => {
              this.provider.on(iL.payload, this.onPayloadHandler),
                this.provider.on(iL.connect, this.onConnectHandler),
                this.provider.on(iL.disconnect, this.onDisconnectHandler),
                this.provider.on(iL.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              'u' > typeof e.logger && 'string' != typeof e.logger
                ? (0, h.U5)(e.logger, this.name)
                : (0, h.h6)((0, h.iP)({ level: e.logger || 'error' }))),
            (this.messages = new rV(this.logger, e.core)),
            (this.subscriber = new sh(this, this.logger)),
            (this.publisher = new r6(this, this.logger)),
            (this.relayUrl = e?.relayUrl || iU),
            (this.projectId = e.projectId),
            C() &&
            'u' > typeof i.g &&
            'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
            (null == i.g ? void 0 : i.g.Platform.OS) === 'android'
              ? (this.packageName = j())
              : C() &&
                'u' > typeof i.g &&
                'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
                (null == i.g ? void 0 : i.g.Platform.OS) === 'ios' &&
                (this.bundleId = j()),
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
          return (0, h.oI)(this.logger);
        }
        get connected() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : i.readyState) === 1
          );
        }
        get connecting() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : i.readyState) === 0
          );
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
              transportType: iC.relay,
            });
        }
        async subscribe(e, t) {
          var i, r, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== 'relay') ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish) > 'u' ||
              (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish),
            o = (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) || '',
            a,
            h = (t) => {
              t.topic === e && (this.subscriber.off(iR.created, h), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(iR.created, h);
              }),
              new Promise(async (i, r) => {
                (o =
                  (await this.subscriber
                    .subscribe(e, sp({ internal: { throwOnFailedPublish: n } }, t))
                    .catch((e) => {
                      n && r(e);
                    })) || o),
                  i();
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
            ? await B(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(() =>
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
              : ((this.connectPromise = new Promise(async (t, i) => {
                  await this.connect(e)
                    .then(t)
                    .catch(i)
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
          if (!(await ip()))
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
          let { topic: i } = e;
          if (!t.sessionExists) {
            let e = K(l.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(iT.message, e), await this.recordMessageEvent(e);
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
                  let i = () => {
                    t(Error('Connection interrupted while trying to subscribe'));
                  };
                  this.provider.once(iL.disconnect, i),
                    await B(
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
                        this.provider.off(iL.disconnect, i),
                          clearTimeout(this.reconnectTimeout),
                          (this.reconnectTimeout = void 0);
                      }),
                    await new Promise(async (e, t) => {
                      let i = () => {
                        t(Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(iL.disconnect, i),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(iL.disconnect, i);
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
            await new Promise((e) => setTimeout(e, (0, l.toMiliseconds)(+t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, i, r, s;
          if (N())
            try {
              null != (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null == (r = null == (i = this.provider) ? void 0 : i.connection)
                      ? void 0
                      : r.socket) ||
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
          (this.provider = new ib.F(
            new iw.A(
              (function ({
                protocol: e,
                version: t,
                relayUrl: i,
                sdkVersion: r,
                auth: s,
                projectId: n,
                useOnCloseEvent: o,
                bundleId: a,
                packageName: h,
              }) {
                let c = i.split('?'),
                  l = D(e, t, r),
                  u = (function (e, t) {
                    let i = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let r = t[e];
                        void 0 !== r && i.set(e, r);
                      }
                    return i.toString();
                  })(c[1] || '', {
                    auth: s,
                    ua: l,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: h || void 0,
                    bundleId: a || void 0,
                  });
                return c[0] + '?' + u;
              })({
                sdkVersion: iN,
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
          let { topic: t, message: i } = e;
          await this.messages.set(t, i);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
          if (!(await this.subscriber.isSubscribed(t)))
            return this.logger.warn(`Ignoring message for non-subscribed topic ${t}`), !0;
          let r = this.messages.has(t, i);
          return r && this.logger.warn(`Ignoring duplicate message: ${i}`), r;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug('Incoming Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'incoming', payload: e }),
            (0, im.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s, attestation: n } = t.data,
              o = { topic: i, message: r, publishedAt: s, transportType: iC.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(sp({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else (0, im.isJsonRpcResponse)(e) && this.events.emit(iT.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(iT.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = (0, im.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(iL.payload, this.onPayloadHandler),
            this.provider.off(iL.connect, this.onConnectHandler),
            this.provider.off(iL.disconnect, this.onDisconnectHandler),
            this.provider.off(iL.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await ip();
          !(function (e) {
            var t, r;
            switch (R()) {
              case L.browser:
                (t = e),
                  !C() &&
                    k() &&
                    (window.addEventListener('online', () => t(!0)),
                    window.addEventListener('offline', () => t(!1)));
                break;
              case L.reactNative:
                (r = e),
                  C() &&
                    'u' > typeof i.g &&
                    null != i.g &&
                    i.g.NetInfo &&
                    i.g?.NetInfo.addEventListener((e) => r(e?.isConnected));
              case L.node:
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
            this.events.emit(iT.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                this.connectPromise ||
                (this.reconnectTimeout = setTimeout(
                  async () => {
                    clearTimeout(this.reconnectTimeout),
                      await this.transportOpen().catch((e) => this.logger.error(e, e?.message));
                  },
                  (0, l.toMiliseconds)(0.1)
                )));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(), this.connected || (await this.transportOpen());
        }
      }
      var sb = Object.defineProperty,
        sm = Object.getOwnPropertySymbols,
        sw = Object.prototype.hasOwnProperty,
        sv = Object.prototype.propertyIsEnumerable,
        sE = (e, t, i) =>
          t in e
            ? sb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sx = (e, t) => {
          for (var i in t || (t = {})) sw.call(t, i) && sE(e, i, t[i]);
          if (sm) for (var i of sm(t)) sv.call(t, i) && sE(e, i, t[i]);
          return e;
        },
        s_ = (e, t, i) => sE(e, 'symbol' != typeof t ? t + '' : t, i);
      class sI extends c.pi {
        constructor(e, t, i, r = i_, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            s_(this, 'map', new Map()),
            s_(this, 'version', '0.3'),
            s_(this, 'cached', []),
            s_(this, 'initialized', !1),
            s_(this, 'getKey'),
            s_(this, 'storagePrefix', i_),
            s_(this, 'recentlyDeleted', []),
            s_(this, 'recentlyDeletedLimit', 200),
            s_(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !il(e)
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
            s_(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            s_(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            s_(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) => Object.keys(e).every((i) => iE()(t[i], e[i])))
                  : this.values
              )
            ),
            s_(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let i = sx(sx({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            s_(this, 'delete', async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug('Deleting value'),
                  this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, h.U5)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = s);
        }
        get context() {
          return (0, h.oI)(this.logger);
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
              let { message: t } = ih(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = ih('NO_MATCHING_KEY', `${this.name}: ${e}`);
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
              let { message: e } = ih('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var sS = Object.defineProperty,
        sP = (e, t, i) =>
          t in e
            ? sS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sO = (e, t, i) => sP(e, 'symbol' != typeof t ? t + '' : t, i);
      class sA {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            sO(this, 'name', 'pairing'),
            sO(this, 'version', '0.3'),
            sO(this, 'events', new (n())()),
            sO(this, 'pairings'),
            sO(this, 'initialized', !1),
            sO(this, 'storagePrefix', i_),
            sO(this, 'ignoredPayloadTypes', [1]),
            sO(this, 'registeredMethods', []),
            sO(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            sO(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            sO(this, 'create', async (e) => {
              this.isInitialized();
              let t = tJ(),
                i = await this.core.crypto.setSymKey(t),
                r = K(l.FIVE_MINUTES),
                s = { protocol: 'irn' },
                n = { topic: i, expiry: r, relay: s, active: !1, methods: e?.methods },
                o = t3({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: r,
                  methods: e?.methods,
                });
              return (
                this.events.emit(iM.create, n),
                this.core.expirer.set(i, r),
                await this.pairings.set(i, n),
                await this.core.relayer.subscribe(i, { transportType: e?.transportType }),
                { topic: i, uri: o }
              );
            }),
            sO(this, 'pair', async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [iF.pairing_started] },
              });
              this.isValidPair(e, i);
              let { topic: r, symKey: s, relay: n, expiryTimestamp: o, methods: a } = t6(e.uri);
              if (
                ((i.props.properties.topic = r),
                i.addTrace(iF.pairing_uri_validation_success),
                i.addTrace(iF.pairing_uri_not_expired),
                this.pairings.keys.includes(r))
              ) {
                if (((t = this.pairings.get(r)), i.addTrace(iF.existing_pairing), t.active))
                  throw (
                    (i.setError(iq.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(iF.pairing_not_expired);
              }
              let h = o || K(l.FIVE_MINUTES),
                c = { topic: r, relay: n, expiry: h, active: !1, methods: a };
              this.core.expirer.set(r, h),
                await this.pairings.set(r, c),
                i.addTrace(iF.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(iM.create, c),
                i.addTrace(iF.emit_inactive_pairing),
                this.core.crypto.keychain.has(r) || (await this.core.crypto.setSymKey(s, r)),
                i.addTrace(iF.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(iq.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (e) {
                throw (i.setError(iq.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(iF.subscribe_pairing_topic_success), c;
            }),
            sO(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = K(l.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            sO(this, 'ping', async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  'ping() is deprecated and will be removed in the next major release.'
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  {
                    done: i,
                    resolve: r,
                    reject: s,
                  } = (function (e = l.FIVE_MINUTES, t) {
                    let i, r, s, n;
                    let o = (0, l.toMiliseconds)(e || l.FIVE_MINUTES);
                    return {
                      resolve: (e) => {
                        s && i && (clearTimeout(s), i(e), (n = Promise.resolve(e)));
                      },
                      reject: (e) => {
                        s && r && (clearTimeout(s), r(e));
                      },
                      done: () =>
                        new Promise((e, t) => {
                          if (n) return e(n);
                          (s = setTimeout(() => {
                            let e = Error(void 0);
                            (n = Promise.reject(e)), t(e);
                          }, o)),
                            (i = e),
                            (r = t);
                        }),
                    };
                  })();
                this.events.once(F('pairing_ping', e), ({ error: e }) => {
                  e ? s(e) : r();
                }),
                  await i();
              }
            }),
            sO(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            sO(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            sO(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            sO(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', ic('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            sO(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: i, expiry: r, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return t3({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: i,
                expiryTimestamp: r,
                methods: s,
              });
            }),
            sO(this, 'sendRequest', async (e, t, i) => {
              let r = (0, im.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                n = iD[t].req;
              return this.core.history.set(e, r), this.core.relayer.publish(e, s, n), r.id;
            }),
            sO(this, 'sendResult', async (e, t, i) => {
              let r = (0, im.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = iD[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n), await this.core.history.resolve(r);
            }),
            sO(this, 'sendError', async (e, t, i) => {
              let r = (0, im.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = await this.core.history.get(t, e),
                o = iD[n.request.method] ? iD[n.request.method].res : iD.unregistered_method.res;
              await this.core.relayer.publish(t, s, o), await this.core.history.resolve(r);
            }),
            sO(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, ic('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            sO(this, 'cleanup', async () => {
              let e = this.pairings.getAll().filter((e) => H(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            sO(this, 'onRelayEventRequest', (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case 'wc_pairingPing':
                  return this.onPairingPingRequest(t, i);
                case 'wc_pairingDelete':
                  return this.onPairingDeleteRequest(t, i);
                default:
                  return this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            sO(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return 'wc_pairingPing' === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            sO(this, 'onPairingPingRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(iM.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            sO(this, 'onPairingPingResponse', (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, im.isJsonRpcResult)(t)
                  ? this.events.emit(F('pairing_ping', i), {})
                  : (0, im.isJsonRpcError)(t) &&
                    this.events.emit(F('pairing_ping', i), { error: t.error });
              }, 500);
            }),
            sO(this, 'onPairingDeleteRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(iM.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            sO(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = ic('WC_METHOD_UNSUPPORTED', r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            sO(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(ic('WC_METHOD_UNSUPPORTED', e));
            }),
            sO(this, 'isValidPair', (e, t) => {
              var i;
              if (!ig(e)) {
                let { message: i } = ih('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(iq.malformed_pairing_uri), Error(i));
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
                    if (iu(e, !1)) {
                      if (t(e)) return !0;
                      let i = J(e);
                      return t(i);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: i } = ih('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(iq.malformed_pairing_uri), Error(i));
              }
              let r = t6(e?.uri);
              if (!(null != (i = r?.relay) && i.protocol)) {
                let { message: e } = ih('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
                throw (t.setError(iq.malformed_pairing_uri), Error(e));
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = ih('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(iq.malformed_pairing_uri), Error(e));
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, l.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                t.setError(iq.pairing_expired);
                let { message: e } = ih(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw Error(e);
              }
            }),
            sO(this, 'isValidPing', async (e) => {
              if (!ig(e)) {
                let { message: t } = ih('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            sO(this, 'isValidDisconnect', async (e) => {
              if (!ig(e)) {
                let { message: t } = ih('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            sO(this, 'isValidPairingTopic', async (e) => {
              if (!iu(e, !1)) {
                let { message: t } = ih(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = ih('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
                throw Error(t);
              }
              if (H(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = ih('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, h.U5)(t, this.name)),
            (this.pairings = new sI(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return (0, h.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(iT.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              r === iC.link_mode ||
              this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))
            )
              return;
            let s = await this.core.crypto.decode(t, i);
            try {
              (0, im.isJsonRpcRequest)(s)
                ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s }))
                : (0, im.isJsonRpcResponse)(s) &&
                  (await this.core.history.resolve(s),
                  await this.onRelayEventResponse({ topic: t, payload: s }),
                  this.core.history.delete(t, s.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(iB.expired, async (e) => {
            let { topic: t } = (function (e) {
              let [t, i] = e.split(':'),
                r = { id: void 0, topic: void 0 };
              if ('topic' === t && 'string' == typeof i) r.topic = i;
              else if ('id' === t && Number.isInteger(Number(i))) r.id = Number(i);
              else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${i}`);
              return r;
            })(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(iM.expire, { topic: t }));
          });
        }
      }
      var sU = Object.defineProperty,
        sT = (e, t, i) =>
          t in e
            ? sU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sL = (e, t, i) => sT(e, 'symbol' != typeof t ? t + '' : t, i);
      class sN extends c.lZ {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            sL(this, 'records', new Map()),
            sL(this, 'events', new s.EventEmitter()),
            sL(this, 'name', 'history'),
            sL(this, 'version', '0.3'),
            sL(this, 'cached', []),
            sL(this, 'initialized', !1),
            sL(this, 'storagePrefix', i_),
            sL(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            sL(this, 'set', (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Setting JSON-RPC request history record'),
                this.logger.trace({
                  type: 'method',
                  method: 'set',
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: K(l.THIRTY_DAYS),
              };
              this.records.set(r.id, r), this.persist(), this.events.emit(iz.created, r);
            }),
            sL(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = (0, im.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(iz.updated, t));
            }),
            sL(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            sL(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((i) => {
                  i.topic !== e ||
                    ('u' > typeof t && i.id !== t) ||
                    (this.records.delete(i.id), this.events.emit(iz.deleted, i));
                }),
                this.persist();
            }),
            sL(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            sL(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            sL(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            sL(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            sL(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, h.U5)(t, this.name));
        }
        get context() {
          return (0, h.oI)(this.logger);
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
              let i = {
                topic: t.topic,
                request: (0, im.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(i);
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
            let { message: t } = ih('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(iz.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = ih('RESTORE_WILL_OVERRIDE', this.name);
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
          this.events.on(iz.created, (e) => {
            let t = iz.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(iz.updated, (e) => {
              let t = iz.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(iz.deleted, (e) => {
              let t = iz.deleted;
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
              (0, l.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(iz.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var sC = Object.defineProperty,
        sk = (e, t, i) =>
          t in e
            ? sC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sR = (e, t, i) => sk(e, 'symbol' != typeof t ? t + '' : t, i);
      class sj extends c.Vx {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            sR(this, 'expirations', new Map()),
            sR(this, 'events', new s.EventEmitter()),
            sR(this, 'name', 'expirer'),
            sR(this, 'version', '0.3'),
            sR(this, 'cached', []),
            sR(this, 'initialized', !1),
            sR(this, 'storagePrefix', i_),
            sR(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            sR(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            sR(this, 'set', (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(iB.created, { target: i, expiration: r });
            }),
            sR(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            sR(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(iB.deleted, { target: t, expiration: i });
              }
            }),
            sR(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            sR(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            sR(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            sR(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, h.U5)(t, this.name));
        }
        get context() {
          return (0, h.oI)(this.logger);
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
          if ('string' == typeof e) return $('topic', e);
          if ('number' == typeof e) return $('id', e);
          let { message: t } = ih('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(iB.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = ih('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: t } = ih('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, l.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(iB.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(o.li.pulse, () => this.checkExpirations()),
            this.events.on(iB.created, (e) => {
              let t = iB.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(iB.expired, (e) => {
              let t = iB.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(iB.deleted, (e) => {
              let t = iB.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ih('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var sD = Object.defineProperty,
        sM = (e, t, i) =>
          t in e
            ? sD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sz = (e, t, i) => sM(e, 'symbol' != typeof t ? t + '' : t, i);
      class sB extends c.zl {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            sz(this, 'name', 'verify-api'),
            sz(this, 'abortController'),
            sz(this, 'isDevEnv'),
            sz(this, 'verifyUrlV3', iK),
            sz(this, 'storagePrefix', i_),
            sz(this, 'version', 2),
            sz(this, 'publicKey'),
            sz(this, 'fetchPromise'),
            sz(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, l.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            sz(this, 'register', async (e) => {
              if (!k() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = (0, p.getDocument)(),
                  t = this.startAbortTimer(5 * l.ONE_SECOND),
                  r = await new Promise((r, n) => {
                    let o = () => {
                      window.removeEventListener('message', h),
                        e.body.removeChild(a),
                        n('attestation aborted');
                    };
                    this.abortController.signal.addEventListener('abort', o);
                    let a = e.createElement('iframe');
                    (a.src = s),
                      (a.style.display = 'none'),
                      a.addEventListener('error', o, { signal: this.abortController.signal });
                    let h = (s) => {
                      if (s.data && 'string' == typeof s.data)
                        try {
                          let n = JSON.parse(s.data);
                          if ('verify_attestation' === n.type) {
                            if ((0, d.Cq)(n.attestation).payload.id !== i) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener('abort', o),
                              window.removeEventListener('message', h),
                              r(null === n.attestation ? '' : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener('message', h, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug('jwt attestation', r), r;
              } catch (e) {
                this.logger.warn(e);
              }
              return '';
            }),
            sz(this, 'resolve', async (e) => {
              if (this.isDevEnv) return '';
              let { attestationId: t, hash: i, encryptedId: r } = e;
              if ('' === t) {
                this.logger.debug('resolve: attestationId is empty, skipping');
                return;
              }
              if (t) {
                if ((0, d.Cq)(t).payload.id !== r) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn('resolve: jwt attestation: origin url not verified');
                    return;
                  }
                  return e;
                }
              }
              if (!i) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(i, s);
            }),
            sz(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * l.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(i), 200 === r.status ? await r.json() : void 0;
            }),
            sz(this, 'getVerifyUrl', (e) => {
              let t = e || i$;
              return (
                iH.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${i$}`
                  ),
                  (t = i$)),
                t
              );
            }),
            sz(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(l.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            sz(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            sz(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            sz(this, 'isValidJwtAttestation', async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
              let i = await this.fetchAndPersistPublicKey();
              try {
                if (i) return this.validateAttestation(e, i);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
            }),
            sz(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            sz(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            sz(this, 'validateAttestation', (e, t) => {
              let i = (function (e, t) {
                  let [i, r, s] = e.split('.'),
                    n = U.from(
                      (function (e) {
                        let t = e.replace(/-/g, '+').replace(/_/g, '/'),
                          i = t.length % 4;
                        return i > 0 && (t += '='.repeat(4 - i)), t;
                      })(s),
                      'base64'
                    );
                  if (64 !== n.length) throw Error('Invalid signature length');
                  let o = n.slice(0, 32).toString('hex'),
                    a = n.slice(32, 64).toString('hex'),
                    h = tw(`${i}.${r}`),
                    c = new P.ec('p256').keyFromPublic(
                      {
                        x: U.from(t.x, 'base64').toString('hex'),
                        y: U.from(t.y, 'base64').toString('hex'),
                      },
                      'hex'
                    ),
                    l = S(h, tq);
                  if (!c.verify(l, { r: o, s: a })) throw Error('Invalid signature');
                  return (0, d.Cq)(e).payload;
                })(e, t.publicKey),
                r = { hasExpired: (0, l.toMiliseconds)(i.exp) < Date.now(), payload: i };
              if (r.hasExpired)
                throw (
                  (this.logger.warn('resolve: jwt attestation expired'),
                  Error('JWT attestation expired'))
                );
              return {
                origin: r.payload.origin,
                isScam: r.payload.isScam,
                isVerified: r.payload.isVerified,
              };
            }),
            (this.logger = (0, h.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = G()),
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
          return (0, h.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(() => this.abortController.abort(), (0, l.toMiliseconds)(e))
          );
        }
      }
      var s$ = Object.defineProperty,
        sK = (e, t, i) =>
          t in e
            ? s$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sH = (e, t, i) => sK(e, 'symbol' != typeof t ? t + '' : t, i);
      class sF extends c.GF {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            sH(this, 'context', 'echo'),
            sH(this, 'registerDeviceToken', async (e) => {
              let { clientId: t, token: i, notificationType: r, enableEncrypted: s = !1 } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id: t, type: r, token: i, always_raw: s }),
              });
            }),
            (this.logger = (0, h.U5)(t, this.context));
        }
      }
      var sq = Object.defineProperty,
        sV = Object.getOwnPropertySymbols,
        sG = Object.prototype.hasOwnProperty,
        sJ = Object.prototype.propertyIsEnumerable,
        sW = (e, t, i) =>
          t in e
            ? sq(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sZ = (e, t) => {
          for (var i in t || (t = {})) sG.call(t, i) && sW(e, i, t[i]);
          if (sV) for (var i of sV(t)) sJ.call(t, i) && sW(e, i, t[i]);
          return e;
        },
        sY = (e, t, i) => sW(e, 'symbol' != typeof t ? t + '' : t, i);
      class sX extends c.$Q {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            sY(this, 'context', 'event-client'),
            sY(this, 'storagePrefix', i_),
            sY(this, 'storageVersion', 0.1),
            sY(this, 'events', new Map()),
            sY(this, 'shouldPersist', !1),
            sY(this, 'init', async () => {
              if (!G())
                try {
                  let e = {
                    eventId: V(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: D(this.core.relayer.protocol, this.core.relayer.version, iN),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            sY(this, 'createEvent', (e) => {
              let {
                  event: t = 'ERROR',
                  type: i = '',
                  properties: { topic: r, trace: s },
                } = e,
                n = V(),
                o = this.core.projectId || '',
                a = sZ(
                  {
                    eventId: n,
                    timestamp: Date.now(),
                    props: { event: t, type: i, properties: { topic: r, trace: s } },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return this.telemetryEnabled && (this.events.set(n, a), (this.shouldPersist = !0)), a;
            }),
            sY(this, 'getEvent', (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let r = Array.from(this.events.values()).find((e) => e.props.properties.topic === i);
              if (r) return sZ(sZ({}, r), this.setMethods(r.eventId));
            }),
            sY(this, 'deleteEvent', (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            sY(this, 'setEventListeners', () => {
              this.core.heartbeat.on(o.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, l.fromMiliseconds)(Date.now()) - (0, l.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            sY(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            sY(this, 'addTrace', (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            sY(this, 'setError', (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            sY(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            sY(this, 'restore', async () => {
              try {
                let e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, sZ(sZ({}, e), this.setMethods(e.eventId)));
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            sY(this, 'submit', async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e) this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            sY(this, 'sendEvent', async (e) => {
              let t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${iN}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            sY(
              this,
              'getAppDomain',
              () => ((0, f.g)() || { name: '', description: '', url: '', icons: [''] }).url
            ),
            (this.logger = (0, h.U5)(t, this.context)),
            (this.telemetryEnabled = i),
            i
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
      var sQ = Object.defineProperty,
        s0 = Object.getOwnPropertySymbols,
        s1 = Object.prototype.hasOwnProperty,
        s5 = Object.prototype.propertyIsEnumerable,
        s6 = (e, t, i) =>
          t in e
            ? sQ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        s3 = (e, t) => {
          for (var i in t || (t = {})) s1.call(t, i) && s6(e, i, t[i]);
          if (s0) for (var i of s0(t)) s5.call(t, i) && s6(e, i, t[i]);
          return e;
        },
        s2 = (e, t, i) => s6(e, 'symbol' != typeof t ? t + '' : t, i);
      class s8 extends c.ZP {
        constructor(e) {
          var t;
          super(e),
            s2(this, 'protocol', 'wc'),
            s2(this, 'version', 2),
            s2(this, 'name', ix),
            s2(this, 'relayUrl'),
            s2(this, 'projectId'),
            s2(this, 'customStoragePrefix'),
            s2(this, 'events', new s.EventEmitter()),
            s2(this, 'logger'),
            s2(this, 'heartbeat'),
            s2(this, 'relayer'),
            s2(this, 'crypto'),
            s2(this, 'storage'),
            s2(this, 'history'),
            s2(this, 'expirer'),
            s2(this, 'pairing'),
            s2(this, 'verify'),
            s2(this, 'echoClient'),
            s2(this, 'linkModeSupportedApps'),
            s2(this, 'eventClient'),
            s2(this, 'initialized', !1),
            s2(this, 'logChunkController'),
            s2(this, 'on', (e, t) => this.events.on(e, t)),
            s2(this, 'once', (e, t) => this.events.once(e, t)),
            s2(this, 'off', (e, t) => this.events.off(e, t)),
            s2(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            s2(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: i }) => {
              if (!e || !t) return;
              let r = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: iC.link_mode,
              };
              this.relayer.onLinkMessageEvent(r, { sessionExists: i });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || iU),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          let i = (0, h.iP)({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : iI.logger,
              name: ix,
            }),
            { logger: r, chunkLoggerController: n } = (0, h.D5)({
              opts: i,
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
            (this.logger = (0, h.U5)(r, this.name)),
            (this.heartbeat = new o.VH()),
            (this.crypto = new rK(this, this.logger, e?.keychain)),
            (this.history = new sN(this, this.logger)),
            (this.expirer = new sj(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new a.A(s3(s3({}, iS), e?.storageOptions))),
            (this.relayer = new sy({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new sA(this, this.logger)),
            (this.verify = new sB(this, this.logger, this.storage)),
            (this.echoClient = new sF(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new sX(this, this.logger, e?.telemetryEnabled));
        }
        static async init(e) {
          let t = new s8(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', i), t;
        }
        get context() {
          return (0, h.oI)(this.logger);
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
            await this.storage.setItem(ik, this.linkModeSupportedApps));
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
              (this.linkModeSupportedApps = (await this.storage.getItem(ik)) || []),
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
      var s4,
        s9 = { exports: {} },
        s7 = 'object' == typeof Reflect ? Reflect : null,
        nt =
          s7 && 'function' == typeof s7.apply
            ? s7.apply
            : function (e, t, i) {
                return Function.prototype.apply.call(e, t, i);
              };
      s4 =
        s7 && 'function' == typeof s7.ownKeys
          ? s7.ownKeys
          : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
      var ni =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function nr() {
        nr.init.call(this);
      }
      (s9.exports = nr),
        (s9.exports.once = function (e, t) {
          return new Promise(function (i, r) {
            var s, n, o;
            function a(i) {
              e.removeListener(t, h), r(i);
            }
            function h() {
              'function' == typeof e.removeListener && e.removeListener('error', a),
                i([].slice.call(arguments));
            }
            ng(e, t, h, { once: !0 }),
              'error' !== t &&
                ((s = e),
                (n = a),
                (o = { once: !0 }),
                'function' == typeof s.on && ng(s, 'error', n, o));
          });
        }),
        (nr.EventEmitter = nr),
        (nr.prototype._events = void 0),
        (nr.prototype._eventsCount = 0),
        (nr.prototype._maxListeners = void 0);
      var ns = 10;
      function nn(e) {
        if ('function' != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' + typeof e
          );
      }
      function no(e) {
        return void 0 === e._maxListeners ? nr.defaultMaxListeners : e._maxListeners;
      }
      function na(e, t, i, r) {
        var s, n, o;
        if (
          (nn(i),
          void 0 === (n = e._events)
            ? ((n = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== n.newListener &&
                (e.emit('newListener', t, i.listener ? i.listener : i), (n = e._events)),
              (o = n[t])),
          void 0 === o)
        )
          (o = n[t] = i), ++e._eventsCount;
        else if (
          ('function' == typeof o ? (o = n[t] = r ? [i, o] : [o, i]) : r ? o.unshift(i) : o.push(i),
          (s = no(e)) > 0 && o.length > s && !o.warned)
        ) {
          o.warned = !0;
          var a = Error(
            'Possible EventEmitter memory leak detected. ' +
              o.length +
              ' ' +
              String(t) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit'
          );
          (a.name = 'MaxListenersExceededWarning'),
            (a.emitter = e),
            (a.type = t),
            (a.count = o.length),
            console && console.warn && console.warn(a);
        }
        return e;
      }
      function nh() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 == arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function nc(e, t, i) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i },
          s = nh.bind(r);
        return (s.listener = i), (r.wrapFn = s), s;
      }
      function nl(e, t, i) {
        var r = e._events;
        if (void 0 === r) return [];
        var s = r[t];
        return void 0 === s
          ? []
          : 'function' == typeof s
            ? i
              ? [s.listener || s]
              : [s]
            : i
              ? (function (e) {
                  for (var t = Array(e.length), i = 0; i < t.length; ++i)
                    t[i] = e[i].listener || e[i];
                  return t;
                })(s)
              : nd(s, s.length);
      }
      function nu(e) {
        var t = this._events;
        if (void 0 !== t) {
          var i = t[e];
          if ('function' == typeof i) return 1;
          if (void 0 !== i) return i.length;
        }
        return 0;
      }
      function nd(e, t) {
        for (var i = Array(t), r = 0; r < t; ++r) i[r] = e[r];
        return i;
      }
      function ng(e, t, i, r) {
        if ('function' == typeof e.on) r.once ? e.once(t, i) : e.on(t, i);
        else if ('function' == typeof e.addEventListener)
          e.addEventListener(t, function s(n) {
            r.once && e.removeEventListener(t, s), i(n);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' + typeof e
          );
      }
      Object.defineProperty(nr, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return ns;
        },
        set: function (e) {
          if ('number' != typeof e || e < 0 || ni(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          ns = e;
        },
      }),
        (nr.init = function () {
          (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (nr.prototype.setMaxListeners = function (e) {
          if ('number' != typeof e || e < 0 || ni(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          return (this._maxListeners = e), this;
        }),
        (nr.prototype.getMaxListeners = function () {
          return no(this);
        }),
        (nr.prototype.emit = function (e) {
          for (var t = [], i = 1; i < arguments.length; i++) t.push(arguments[i]);
          var r = 'error' === e,
            s = this._events;
          if (void 0 !== s) r = r && void 0 === s.error;
          else if (!r) return !1;
          if (r) {
            if ((t.length > 0 && (n = t[0]), n instanceof Error)) throw n;
            var n,
              o = Error('Unhandled error.' + (n ? ' (' + n.message + ')' : ''));
            throw ((o.context = n), o);
          }
          var a = s[e];
          if (void 0 === a) return !1;
          if ('function' == typeof a) nt(a, this, t);
          else for (var h = a.length, c = nd(a, h), i = 0; i < h; ++i) nt(c[i], this, t);
          return !0;
        }),
        (nr.prototype.addListener = function (e, t) {
          return na(this, e, t, !1);
        }),
        (nr.prototype.on = nr.prototype.addListener),
        (nr.prototype.prependListener = function (e, t) {
          return na(this, e, t, !0);
        }),
        (nr.prototype.once = function (e, t) {
          return nn(t), this.on(e, nc(this, e, t)), this;
        }),
        (nr.prototype.prependOnceListener = function (e, t) {
          return nn(t), this.prependListener(e, nc(this, e, t)), this;
        }),
        (nr.prototype.removeListener = function (e, t) {
          var i, r, s, n, o;
          if ((nn(t), void 0 === (r = this._events) || void 0 === (i = r[e]))) return this;
          if (i === t || i.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[e], r.removeListener && this.emit('removeListener', e, i.listener || t));
          else if ('function' != typeof i) {
            for (s = -1, n = i.length - 1; n >= 0; n--)
              if (i[n] === t || i[n].listener === t) {
                (o = i[n].listener), (s = n);
                break;
              }
            if (s < 0) return this;
            0 === s
              ? i.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(i, s),
              1 === i.length && (r[e] = i[0]),
              void 0 !== r.removeListener && this.emit('removeListener', e, o || t);
          }
          return this;
        }),
        (nr.prototype.off = nr.prototype.removeListener),
        (nr.prototype.removeAllListeners = function (e) {
          var t, i, r;
          if (void 0 === (i = this._events)) return this;
          if (void 0 === i.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== i[e] &&
                  (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete i[e]),
              this
            );
          if (0 == arguments.length) {
            var s,
              n = Object.keys(i);
            for (r = 0; r < n.length; ++r)
              'removeListener' !== (s = n[r]) && this.removeAllListeners(s);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ('function' == typeof (t = i[e])) this.removeListener(e, t);
          else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
          return this;
        }),
        (nr.prototype.listeners = function (e) {
          return nl(this, e, !0);
        }),
        (nr.prototype.rawListeners = function (e) {
          return nl(this, e, !1);
        }),
        (nr.listenerCount = function (e, t) {
          return 'function' == typeof e.listenerCount ? e.listenerCount(t) : nu.call(e, t);
        }),
        (nr.prototype.listenerCount = nu),
        (nr.prototype.eventNames = function () {
          return this._eventsCount > 0 ? s4(this._events) : [];
        }),
        s9.exports;
      class np {
        constructor(e) {
          this.opts = e;
        }
      }
      class nf {
        constructor(e) {
          this.client = e;
        }
      }
      var ny = Object.defineProperty,
        nb = Object.defineProperties,
        nm = Object.getOwnPropertyDescriptors,
        nw = Object.getOwnPropertySymbols,
        nv = Object.prototype.hasOwnProperty,
        nE = Object.prototype.propertyIsEnumerable,
        nx = (e, t, i) =>
          t in e
            ? ny(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        n_ = (e, t) => {
          for (var i in t || (t = {})) nv.call(t, i) && nx(e, i, t[i]);
          if (nw) for (var i of nw(t)) nE.call(t, i) && nx(e, i, t[i]);
          return e;
        },
        nI = (e, t) => nb(e, nm(t));
      class nS extends nf {
        constructor(e) {
          super(e),
            (this.init = async () => {
              (this.signClient = await r.VF.init({
                core: this.client.core,
                metadata: this.client.metadata,
                signConfig: this.client.signConfig,
              })),
                this.signClient.core.eventClient.init().catch((e) => {
                  this.client.logger.warn(e);
                });
            }),
            (this.pair = async (e) => {
              await this.client.core.pairing.pair(e);
            }),
            (this.approveSession = async (e) => {
              let { topic: t, acknowledged: i } = await this.signClient.approve(
                nI(n_({}, e), {
                  id: e.id,
                  namespaces: e.namespaces,
                  sessionProperties: e.sessionProperties,
                  sessionConfig: e.sessionConfig,
                })
              );
              return await i(), this.signClient.session.get(t);
            }),
            (this.rejectSession = async (e) => await this.signClient.reject(e)),
            (this.updateSession = async (e) => await this.signClient.update(e)),
            (this.extendSession = async (e) => await this.signClient.extend(e)),
            (this.respondSessionRequest = async (e) => await this.signClient.respond(e)),
            (this.disconnectSession = async (e) => await this.signClient.disconnect(e)),
            (this.emitSessionEvent = async (e) => await this.signClient.emit(e)),
            (this.getActiveSessions = () =>
              this.signClient.session.getAll().reduce((e, t) => ((e[t.topic] = t), e), {})),
            (this.getPendingSessionProposals = () => this.signClient.proposal.getAll()),
            (this.getPendingSessionRequests = () => this.signClient.getPendingSessionRequests()),
            (this.approveSessionAuthenticate = async (e) =>
              await this.signClient.approveSessionAuthenticate(e)),
            (this.rejectSessionAuthenticate = async (e) =>
              await this.signClient.rejectSessionAuthenticate(e)),
            (this.formatAuthMessage = (e) => this.signClient.formatAuthMessage(e)),
            (this.registerDeviceToken = (e) => this.client.core.echoClient.registerDeviceToken(e)),
            (this.on = (e, t) => (
              this.setEvent(e, 'off'), this.setEvent(e, 'on'), this.client.events.on(e, t)
            )),
            (this.once = (e, t) => (
              this.setEvent(e, 'off'), this.setEvent(e, 'once'), this.client.events.once(e, t)
            )),
            (this.off = (e, t) => (this.setEvent(e, 'off'), this.client.events.off(e, t))),
            (this.removeListener = (e, t) => (
              this.setEvent(e, 'removeListener'), this.client.events.removeListener(e, t)
            )),
            (this.onSessionRequest = (e) => {
              this.client.events.emit('session_request', e);
            }),
            (this.onSessionProposal = (e) => {
              this.client.events.emit('session_proposal', e);
            }),
            (this.onSessionDelete = (e) => {
              this.client.events.emit('session_delete', e);
            }),
            (this.onProposalExpire = (e) => {
              this.client.events.emit('proposal_expire', e);
            }),
            (this.onSessionRequestExpire = (e) => {
              this.client.events.emit('session_request_expire', e);
            }),
            (this.onSessionRequestAuthenticate = (e) => {
              this.client.events.emit('session_authenticate', e);
            }),
            (this.setEvent = (e, t) => {
              switch (e) {
                case 'session_request':
                  this.signClient.events[t]('session_request', this.onSessionRequest);
                  break;
                case 'session_proposal':
                  this.signClient.events[t]('session_proposal', this.onSessionProposal);
                  break;
                case 'session_delete':
                  this.signClient.events[t]('session_delete', this.onSessionDelete);
                  break;
                case 'proposal_expire':
                  this.signClient.events[t]('proposal_expire', this.onProposalExpire);
                  break;
                case 'session_request_expire':
                  this.signClient.events[t]('session_request_expire', this.onSessionRequestExpire);
                  break;
                case 'session_authenticate':
                  this.signClient.events[t](
                    'session_authenticate',
                    this.onSessionRequestAuthenticate
                  );
              }
            }),
            (this.signClient = {});
        }
      }
      let nP = class extends np {
        constructor(e) {
          super(e),
            (this.events = new s9.exports()),
            (this.on = (e, t) => this.engine.on(e, t)),
            (this.once = (e, t) => this.engine.once(e, t)),
            (this.off = (e, t) => this.engine.off(e, t)),
            (this.removeListener = (e, t) => this.engine.removeListener(e, t)),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approveSession = async (e) => {
              try {
                return await this.engine.approveSession(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.rejectSession = async (e) => {
              try {
                return await this.engine.rejectSession(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.updateSession = async (e) => {
              try {
                return await this.engine.updateSession(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extendSession = async (e) => {
              try {
                return await this.engine.extendSession(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respondSessionRequest = async (e) => {
              try {
                return await this.engine.respondSessionRequest(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnectSession = async (e) => {
              try {
                return await this.engine.disconnectSession(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emitSessionEvent = async (e) => {
              try {
                return await this.engine.emitSessionEvent(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getActiveSessions = () => {
              try {
                return this.engine.getActiveSessions();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionProposals = () => {
              try {
                return this.engine.getPendingSessionProposals();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.registerDeviceToken = (e) => {
              try {
                return this.engine.registerDeviceToken(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approveSessionAuthenticate = (e) => {
              try {
                return this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.rejectSessionAuthenticate = (e) => {
              try {
                return this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.formatAuthMessage = (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.metadata = e.metadata),
            (this.name = e.name || 'WalletKit'),
            (this.signConfig = e.signConfig),
            (this.core = e.core),
            (this.logger = this.core.logger),
            (this.engine = new nS(this));
        }
        static async init(e) {
          let t = new nP(e);
          return await t.initialize(), t;
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.engine.init(), this.logger.info('WalletKit Initialization Success');
          } catch (e) {
            throw (
              (this.logger.info('WalletKit Initialization Failure'),
              this.logger.error(e.message),
              e)
            );
          }
        }
      };
      nP.notifications = {
        decryptMessage: async (e) => {
          let t = { core: new s8({ storageOptions: e.storageOptions, storage: e.storage }) };
          await t.core.crypto.init();
          let i = t.core.crypto.decode(e.topic, e.encryptedMessage);
          return (t.core = null), i;
        },
        getMetadata: async (e) => {
          let t = {
            core: new s8({ storageOptions: e.storageOptions, storage: e.storage }),
            sessionStore: null,
          };
          (t.sessionStore = new r.c9(t.core, t.core.logger)), await t.sessionStore.init();
          let i = t.sessionStore.get(e.topic),
            s = i?.peer.metadata;
          return (t.core = null), (t.sessionStore = null), s;
        },
      };
      let nO = nP;
    },
    33102: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(73343),
        s = i(51129),
        n = i(83177),
        o = (function () {
          function e(e, t) {
            (this._finished = !1),
              (this._inner = new e()),
              (this._outer = new e()),
              (this.blockSize = this._outer.blockSize),
              (this.digestLength = this._outer.digestLength);
            var i = new Uint8Array(this.blockSize);
            t.length > this.blockSize ? this._inner.update(t).finish(i).clean() : i.set(t);
            for (var s = 0; s < i.length; s++) i[s] ^= 54;
            this._inner.update(i);
            for (var s = 0; s < i.length; s++) i[s] ^= 106;
            this._outer.update(i),
              r.isSerializableHash(this._inner) &&
                r.isSerializableHash(this._outer) &&
                ((this._innerKeyedState = this._inner.saveState()),
                (this._outerKeyedState = this._outer.saveState())),
              n.wipe(i);
          }
          return (
            (e.prototype.reset = function () {
              if (!r.isSerializableHash(this._inner) || !r.isSerializableHash(this._outer))
                throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.clean = function () {
              r.isSerializableHash(this._inner) &&
                this._inner.cleanSavedState(this._innerKeyedState),
                r.isSerializableHash(this._outer) &&
                  this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean();
            }),
            (e.prototype.update = function (e) {
              return this._inner.update(e), this;
            }),
            (e.prototype.finish = function (e) {
              return (
                this._finished
                  ? this._outer.finish(e)
                  : (this._inner.finish(e),
                    this._outer.update(e.subarray(0, this.digestLength)).finish(e),
                    (this._finished = !0)),
                this
              );
            }),
            (e.prototype.digest = function () {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }),
            (e.prototype.saveState = function () {
              if (!r.isSerializableHash(this._inner))
                throw Error("hmac: can't saveState() because hash doesn't implement it");
              return this._inner.saveState();
            }),
            (e.prototype.restoreState = function (e) {
              if (!r.isSerializableHash(this._inner) || !r.isSerializableHash(this._outer))
                throw Error("hmac: can't restoreState() because hash doesn't implement it");
              return (
                this._inner.restoreState(e),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.cleanSavedState = function (e) {
              if (!r.isSerializableHash(this._inner))
                throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
              this._inner.cleanSavedState(e);
            }),
            e
          );
        })();
      (t.HMAC = o),
        (t.hmac = function (e, t, i) {
          var r = new o(e, t);
          r.update(i);
          var s = r.digest();
          return r.clean(), s;
        }),
        (t.equal = s.equal);
    },
    33329: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(90781);
      function s(e, t, i) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === i && (i = 0),
          (t[i + 0] = e >>> 8),
          (t[i + 1] = e >>> 0),
          t
        );
      }
      function n(e, t, i) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === i && (i = 0),
          (t[i + 0] = e >>> 0),
          (t[i + 1] = e >>> 8),
          t
        );
      }
      function o(e, t) {
        return (
          void 0 === t && (t = 0), (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
        );
      }
      function a(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        );
      }
      function h(e, t) {
        return (
          void 0 === t && (t = 0), (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
        );
      }
      function c(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
        );
      }
      function l(e, t, i) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === i && (i = 0),
          (t[i + 0] = e >>> 24),
          (t[i + 1] = e >>> 16),
          (t[i + 2] = e >>> 8),
          (t[i + 3] = e >>> 0),
          t
        );
      }
      function u(e, t, i) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === i && (i = 0),
          (t[i + 0] = e >>> 0),
          (t[i + 1] = e >>> 8),
          (t[i + 2] = e >>> 16),
          (t[i + 3] = e >>> 24),
          t
        );
      }
      function d(e, t, i) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === i && (i = 0),
          l((e / 0x100000000) >>> 0, t, i),
          l(e >>> 0, t, i + 4),
          t
        );
      }
      function g(e, t, i) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === i && (i = 0),
          u(e >>> 0, t, i),
          u((e / 0x100000000) >>> 0, t, i + 4),
          t
        );
      }
      (t.readInt16BE = function (e, t) {
        return void 0 === t && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16;
      }),
        (t.readUint16BE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0;
        }),
        (t.readInt16LE = function (e, t) {
          return void 0 === t && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16;
        }),
        (t.readUint16LE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0;
        }),
        (t.writeUint16BE = s),
        (t.writeInt16BE = s),
        (t.writeUint16LE = n),
        (t.writeInt16LE = n),
        (t.readInt32BE = o),
        (t.readUint32BE = a),
        (t.readInt32LE = h),
        (t.readUint32LE = c),
        (t.writeUint32BE = l),
        (t.writeInt32BE = l),
        (t.writeUint32LE = u),
        (t.writeInt32LE = u),
        (t.readInt64BE = function (e, t) {
          void 0 === t && (t = 0);
          var i = o(e, t),
            r = o(e, t + 4);
          return 0x100000000 * i + r - (r >> 31) * 0x100000000;
        }),
        (t.readUint64BE = function (e, t) {
          return void 0 === t && (t = 0), 0x100000000 * a(e, t) + a(e, t + 4);
        }),
        (t.readInt64LE = function (e, t) {
          void 0 === t && (t = 0);
          var i = h(e, t);
          return 0x100000000 * h(e, t + 4) + i - (i >> 31) * 0x100000000;
        }),
        (t.readUint64LE = function (e, t) {
          void 0 === t && (t = 0);
          var i = c(e, t);
          return 0x100000000 * c(e, t + 4) + i;
        }),
        (t.writeUint64BE = d),
        (t.writeInt64BE = d),
        (t.writeUint64LE = g),
        (t.writeInt64LE = g),
        (t.readUintBE = function (e, t, i) {
          if ((void 0 === i && (i = 0), e % 8 != 0))
            throw Error('readUintBE supports only bitLengths divisible by 8');
          if (e / 8 > t.length - i)
            throw Error('readUintBE: array is too short for the given bitLength');
          for (var r = 0, s = 1, n = e / 8 + i - 1; n >= i; n--) (r += t[n] * s), (s *= 256);
          return r;
        }),
        (t.readUintLE = function (e, t, i) {
          if ((void 0 === i && (i = 0), e % 8 != 0))
            throw Error('readUintLE supports only bitLengths divisible by 8');
          if (e / 8 > t.length - i)
            throw Error('readUintLE: array is too short for the given bitLength');
          for (var r = 0, s = 1, n = i; n < i + e / 8; n++) (r += t[n] * s), (s *= 256);
          return r;
        }),
        (t.writeUintBE = function (e, t, i, s) {
          if ((void 0 === i && (i = new Uint8Array(e / 8)), void 0 === s && (s = 0), e % 8 != 0))
            throw Error('writeUintBE supports only bitLengths divisible by 8');
          if (!r.isSafeInteger(t)) throw Error('writeUintBE value must be an integer');
          for (var n = 1, o = e / 8 + s - 1; o >= s; o--) (i[o] = (t / n) & 255), (n *= 256);
          return i;
        }),
        (t.writeUintLE = function (e, t, i, s) {
          if ((void 0 === i && (i = new Uint8Array(e / 8)), void 0 === s && (s = 0), e % 8 != 0))
            throw Error('writeUintLE supports only bitLengths divisible by 8');
          if (!r.isSafeInteger(t)) throw Error('writeUintLE value must be an integer');
          for (var n = 1, o = s; o < s + e / 8; o++) (i[o] = (t / n) & 255), (n *= 256);
          return i;
        }),
        (t.readFloat32BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
          );
        }),
        (t.readFloat32LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
          );
        }),
        (t.readFloat64BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
          );
        }),
        (t.readFloat64LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
          );
        }),
        (t.writeFloat32BE = function (e, t, i) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === i && (i = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(i, e),
            t
          );
        }),
        (t.writeFloat32LE = function (e, t, i) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === i && (i = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(i, e, !0),
            t
          );
        }),
        (t.writeFloat64BE = function (e, t, i) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === i && (i = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(i, e),
            t
          );
        }),
        (t.writeFloat64LE = function (e, t, i) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === i && (i = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(i, e, !0),
            t
          );
        });
    },
    33632: (e, t, i) => {
      i.d(t, { ewq: () => X, Hjj: () => es }),
        i(87561),
        i(80985),
        i(66890),
        i(48498),
        i(90705),
        i(96393),
        i(93713),
        i(65681),
        i(36567);
      var r = i(29218);
      function s(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      function n(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      s(
        'utf8',
        'u',
        (e) => 'u' + new TextDecoder('utf8').decode(e),
        (e) => new TextEncoder().encode(e.substring(1))
      ),
        s(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        { hex: r.Fo.base16, ...r.Fo },
        i(34736),
        i(78741),
        n(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        n(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              if (null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe) {
                var t;
                return (
                  (t = globalThis.Buffer.allocUnsafe(e)),
                  null != globalThis.Buffer
                    ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                    : t
                );
              }
              return new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        { hex: r.Fo.base16, ...r.Fo };
      i(26481);
      var o = i(29143),
        a = i(51642).Buffer;
      function h(e) {
        let [t, i, r] = e.split(':');
        return { namespace: t, reference: i, address: r };
      }
      var c = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        g = (e, t, i) =>
          t in e
            ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i);
      let p = { reactNative: 'react-native', node: 'node', browser: 'browser', unknown: 'unknown' };
      function f() {
        return 'u' > typeof o && 'u' > typeof o.versions && 'u' > typeof o.versions.node;
      }
      function y() {
        return !ne() && !!Pe() && 'ReactNative' === navigator.product;
      }
      function b(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function m(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function w(e, t, i, r, s, n) {
        let o = (function (e) {
          let [t, i] = e.split(':');
          return { namespace: t, reference: i };
        })(r);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
          );
        try {
          let o = '0x1626ba7e',
            a = i.substring(2),
            h = Te(t).substring(2),
            c =
              o +
              h +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            l = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${r}&projectId=${s}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: '2.0',
                  method: 'eth_call',
                  params: [{ to: e, data: c }, 'latest'],
                }),
              }
            ),
            { result: u } = await l.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var E = Object.defineProperty,
        x = Object.defineProperties,
        _ = Object.getOwnPropertyDescriptors,
        I = Object.getOwnPropertySymbols,
        S = Object.prototype.hasOwnProperty,
        P = Object.prototype.propertyIsEnumerable,
        O = (e, t, i) =>
          t in e
            ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i);
      let A = (e) => e?.split(':'),
        U = (e) => {
          let t = e && A(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        T = (e) => {
          let t = e && A(e);
          if (t) return t.pop();
        };
      function L(e) {
        if (!e) throw Error('No recap provided, value is undefined');
        if (!e.att) throw Error('No `att` property found');
        let t = Object.keys(e.att);
        if (!(null != t && t.length)) throw Error('No resources found in `att` property');
        t.forEach((t) => {
          let i = e.att[t];
          if (Array.isArray(i) || 'object' != typeof i)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(i).length) throw Error(`Resource object is empty: ${t}`);
          Object.keys(i).forEach((e) => {
            let t = i[e];
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
      let N = 'base10',
        C = 'base64pad';
      function k(e) {
        return Number(v(e, N));
      }
      var R = Object.defineProperty,
        j = Object.defineProperties,
        D = Object.getOwnPropertyDescriptors,
        M = Object.getOwnPropertySymbols,
        z = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        $ = (e, t, i) =>
          t in e
            ? R(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        K = Object.defineProperty,
        H = Object.defineProperties,
        F = Object.getOwnPropertyDescriptors,
        q = Object.getOwnPropertySymbols,
        V = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        J = (e, t, i) =>
          t in e
            ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        W = (e, t) => {
          for (var i in t || (t = {})) V.call(t, i) && J(e, i, t[i]);
          if (q) for (var i of q(t)) G.call(t, i) && J(e, i, t[i]);
          return e;
        },
        Z = (e, t) => H(e, F(t));
      function Y(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [i, r] = e.split(':');
            t.push(`${i}:${r}`);
          }),
          t
        );
      }
      function X(e) {
        let {
            proposal: { requiredNamespaces: t, optionalNamespaces: i = {} },
            supportedNamespaces: r,
          } = e,
          s = ee(t),
          n = ee(i),
          o = {};
        Object.keys(r).forEach((e) => {
          let t = r[e].chains,
            i = r[e].methods,
            s = r[e].events,
            n = r[e].accounts;
          t.forEach((t) => {
            if (!n.some((e) => e.includes(t)))
              throw Error(`No accounts provided for chain ${t} in namespace ${e}`);
          }),
            (o[e] = { chains: t, methods: i, events: s, accounts: n });
        });
        let a = (function (e, t, i) {
          let r = null,
            s = (function (e) {
              let t = {};
              return (
                Object.keys(e).forEach((i) => {
                  var r;
                  i.includes(':')
                    ? (t[i] = e[i])
                    : null == (r = e[i].chains) ||
                      r.forEach((r) => {
                        t[r] = { methods: e[i].methods, events: e[i].events };
                      });
                }),
                t
              );
            })(e),
            n = (function (e) {
              let t = {};
              return (
                Object.keys(e).forEach((i) => {
                  if (i.includes(':')) t[i] = e[i];
                  else {
                    let r = Y(e[i].accounts);
                    r?.forEach((r) => {
                      t[r] = {
                        accounts: e[i].accounts.filter((e) => e.includes(`${r}:`)),
                        methods: e[i].methods,
                        events: e[i].events,
                      };
                    });
                  }
                }),
                t
              );
            })(t),
            o = Object.keys(s),
            a = Object.keys(n),
            h = eh(Object.keys(e)),
            c = eh(Object.keys(t)),
            l = h.filter((e) => !c.includes(e));
          return (
            l.length &&
              (r = er(
                'NON_CONFORMING_NAMESPACES',
                `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`
              )),
            b(o, a) ||
              (r = er(
                'NON_CONFORMING_NAMESPACES',
                `${i} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
              )),
            Object.keys(t).forEach((e) => {
              if (!e.includes(':') || r) return;
              let s = Y(t[e].accounts);
              s.includes(e) ||
                (r = er(
                  'NON_CONFORMING_NAMESPACES',
                  `${i} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
                ));
            }),
            o.forEach((e) => {
              r ||
                (b(s[e].methods, n[e].methods)
                  ? b(s[e].events, n[e].events) ||
                    (r = er(
                      'NON_CONFORMING_NAMESPACES',
                      `${i} namespaces events don't satisfy namespace events for ${e}`
                    ))
                  : (r = er(
                      'NON_CONFORMING_NAMESPACES',
                      `${i} namespaces methods don't satisfy namespace methods for ${e}`
                    )));
            }),
            r
          );
        })(t, o, 'approve()');
        if (a) throw Error(a.message);
        let h = {};
        return Object.keys(t).length || Object.keys(i).length
          ? (Object.keys(s).forEach((e) => {
              let t = r[e].chains.filter((t) => {
                  var i, r;
                  return null == (r = null == (i = s[e]) ? void 0 : i.chains)
                    ? void 0
                    : r.includes(t);
                }),
                i = r[e].methods.filter((t) => {
                  var i, r;
                  return null == (r = null == (i = s[e]) ? void 0 : i.methods)
                    ? void 0
                    : r.includes(t);
                }),
                n = r[e].events.filter((t) => {
                  var i, r;
                  return null == (r = null == (i = s[e]) ? void 0 : i.events)
                    ? void 0
                    : r.includes(t);
                }),
                o = t.map((t) => r[e].accounts.filter((e) => e.includes(`${t}:`))).flat();
              h[e] = { chains: t, methods: i, events: n, accounts: o };
            }),
            Object.keys(n).forEach((e) => {
              var t, i, s, o, a, c;
              if (!r[e]) return;
              let l =
                  null == (i = null == (t = n[e]) ? void 0 : t.chains)
                    ? void 0
                    : i.filter((t) => r[e].chains.includes(t)),
                u = r[e].methods.filter((t) => {
                  var i, r;
                  return null == (r = null == (i = n[e]) ? void 0 : i.methods)
                    ? void 0
                    : r.includes(t);
                }),
                d = r[e].events.filter((t) => {
                  var i, r;
                  return null == (r = null == (i = n[e]) ? void 0 : i.events)
                    ? void 0
                    : r.includes(t);
                }),
                g = l?.map((t) => r[e].accounts.filter((e) => e.includes(`${t}:`))).flat();
              h[e] = {
                chains: m(null == (s = h[e]) ? void 0 : s.chains, l),
                methods: m(null == (o = h[e]) ? void 0 : o.methods, u),
                events: m(null == (a = h[e]) ? void 0 : a.events, d),
                accounts: m(null == (c = h[e]) ? void 0 : c.accounts, g),
              };
            }),
            h)
          : o;
      }
      function Q(e) {
        return e.includes(':');
      }
      function ee(e) {
        var t, i, r;
        let s = {};
        if (
          !(function (e) {
            return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
          })(e)
        )
          return s;
        for (let [n, o] of Object.entries(e)) {
          let e = Q(n) ? [n] : o.chains,
            a = o.methods || [],
            h = o.events || [],
            c = Q(n) ? n.split(':')[0] : n;
          s[c] = Z(W({}, s[c]), {
            chains: m(e, null == (t = s[c]) ? void 0 : t.chains),
            methods: m(a, null == (i = s[c]) ? void 0 : i.methods),
            events: m(h, null == (r = s[c]) ? void 0 : r.events),
          });
        }
        return s;
      }
      let et = {
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
        ei = {
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
      function er(e, t) {
        let { message: i, code: r } = ei[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function es(e, t) {
        let { message: i, code: r } = et[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function en(e) {
        return typeof e > 'u';
      }
      function eo(e, t) {
        return !!(t && en(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function ea(e) {
        var t, i;
        let r = !0;
        return Array.isArray((t = e)) ? e.length && (r = e.every((e) => eo(e, !1))) : (r = !1), r;
      }
      function eh(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
    },
    35719: (e) => {
      var t = '%[a-f0-9]{2}',
        i = RegExp('(' + t + ')|([^%]+?)', 'gi'),
        r = RegExp('(' + t + ')+', 'gi');
      e.exports = function (e) {
        if ('string' != typeof e)
          throw TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
        try {
          return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (var t = { '%FE%FF': '��', '%FF%FE': '��' }, s = r.exec(e); s; ) {
              try {
                t[s[0]] = decodeURIComponent(s[0]);
              } catch (e) {
                var n = (function (e) {
                  try {
                    return decodeURIComponent(e);
                  } catch (s) {
                    for (var t = e.match(i) || [], r = 1; r < t.length; r++)
                      t =
                        (e = (function e(t, i) {
                          try {
                            return [decodeURIComponent(t.join(''))];
                          } catch (e) {}
                          if (1 === t.length) return t;
                          i = i || 1;
                          var r = t.slice(0, i),
                            s = t.slice(i);
                          return Array.prototype.concat.call([], e(r), e(s));
                        })(t, r).join('')).match(i) || [];
                    return e;
                  }
                })(s[0]);
                n !== s[0] && (t[s[0]] = n);
              }
              s = r.exec(e);
            }
            t['%C2'] = '�';
            for (var o = Object.keys(t), a = 0; a < o.length; a++) {
              var h = o[a];
              e = e.replace(RegExp(h, 'g'), t[h]);
            }
            return e;
          })(e);
        }
      };
    },
    36567: (e, t, i) => {
      function r(e) {
        let t = new Float64Array(16);
        if (e) for (let i = 0; i < e.length; i++) t[i] = e[i];
        return t;
      }
      (t.wE = t.Xx = void 0), i(93713), i(83177), (t.Xx = 32), (t.wE = 32);
      let s = new Uint8Array(32);
      s[0] = 9;
      let n = r([56129, 1]);
      function o(e) {
        let t = 1;
        for (let i = 0; i < 16; i++) {
          let r = e[i] + t + 65535;
          (t = Math.floor(r / 65536)), (e[i] = r - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function a(e, t, i) {
        let r = ~(i - 1);
        for (let i = 0; i < 16; i++) {
          let s = r & (e[i] ^ t[i]);
          (e[i] ^= s), (t[i] ^= s);
        }
      }
      function h(e, t, i) {
        for (let r = 0; r < 16; r++) e[r] = t[r] + i[r];
      }
      function c(e, t, i) {
        for (let r = 0; r < 16; r++) e[r] = t[r] - i[r];
      }
      function l(e, t, i) {
        let r,
          s,
          n = 0,
          o = 0,
          a = 0,
          h = 0,
          c = 0,
          l = 0,
          u = 0,
          d = 0,
          g = 0,
          p = 0,
          f = 0,
          y = 0,
          b = 0,
          m = 0,
          w = 0,
          E = 0,
          x = 0,
          _ = 0,
          I = 0,
          S = 0,
          P = 0,
          O = 0,
          A = 0,
          U = 0,
          T = 0,
          L = 0,
          N = 0,
          C = 0,
          k = 0,
          R = 0,
          j = 0,
          D = i[0],
          M = i[1],
          z = i[2],
          B = i[3],
          $ = i[4],
          K = i[5],
          H = i[6],
          F = i[7],
          q = i[8],
          V = i[9],
          G = i[10],
          J = i[11],
          W = i[12],
          Z = i[13],
          Y = i[14],
          X = i[15];
        (n += (r = t[0]) * D),
          (o += r * M),
          (a += r * z),
          (h += r * B),
          (c += r * $),
          (l += r * K),
          (u += r * H),
          (d += r * F),
          (g += r * q),
          (p += r * V),
          (f += r * G),
          (y += r * J),
          (b += r * W),
          (m += r * Z),
          (w += r * Y),
          (E += r * X),
          (o += (r = t[1]) * D),
          (a += r * M),
          (h += r * z),
          (c += r * B),
          (l += r * $),
          (u += r * K),
          (d += r * H),
          (g += r * F),
          (p += r * q),
          (f += r * V),
          (y += r * G),
          (b += r * J),
          (m += r * W),
          (w += r * Z),
          (E += r * Y),
          (x += r * X),
          (a += (r = t[2]) * D),
          (h += r * M),
          (c += r * z),
          (l += r * B),
          (u += r * $),
          (d += r * K),
          (g += r * H),
          (p += r * F),
          (f += r * q),
          (y += r * V),
          (b += r * G),
          (m += r * J),
          (w += r * W),
          (E += r * Z),
          (x += r * Y),
          (_ += r * X),
          (h += (r = t[3]) * D),
          (c += r * M),
          (l += r * z),
          (u += r * B),
          (d += r * $),
          (g += r * K),
          (p += r * H),
          (f += r * F),
          (y += r * q),
          (b += r * V),
          (m += r * G),
          (w += r * J),
          (E += r * W),
          (x += r * Z),
          (_ += r * Y),
          (I += r * X),
          (c += (r = t[4]) * D),
          (l += r * M),
          (u += r * z),
          (d += r * B),
          (g += r * $),
          (p += r * K),
          (f += r * H),
          (y += r * F),
          (b += r * q),
          (m += r * V),
          (w += r * G),
          (E += r * J),
          (x += r * W),
          (_ += r * Z),
          (I += r * Y),
          (S += r * X),
          (l += (r = t[5]) * D),
          (u += r * M),
          (d += r * z),
          (g += r * B),
          (p += r * $),
          (f += r * K),
          (y += r * H),
          (b += r * F),
          (m += r * q),
          (w += r * V),
          (E += r * G),
          (x += r * J),
          (_ += r * W),
          (I += r * Z),
          (S += r * Y),
          (P += r * X),
          (u += (r = t[6]) * D),
          (d += r * M),
          (g += r * z),
          (p += r * B),
          (f += r * $),
          (y += r * K),
          (b += r * H),
          (m += r * F),
          (w += r * q),
          (E += r * V),
          (x += r * G),
          (_ += r * J),
          (I += r * W),
          (S += r * Z),
          (P += r * Y),
          (O += r * X),
          (d += (r = t[7]) * D),
          (g += r * M),
          (p += r * z),
          (f += r * B),
          (y += r * $),
          (b += r * K),
          (m += r * H),
          (w += r * F),
          (E += r * q),
          (x += r * V),
          (_ += r * G),
          (I += r * J),
          (S += r * W),
          (P += r * Z),
          (O += r * Y),
          (A += r * X),
          (g += (r = t[8]) * D),
          (p += r * M),
          (f += r * z),
          (y += r * B),
          (b += r * $),
          (m += r * K),
          (w += r * H),
          (E += r * F),
          (x += r * q),
          (_ += r * V),
          (I += r * G),
          (S += r * J),
          (P += r * W),
          (O += r * Z),
          (A += r * Y),
          (U += r * X),
          (p += (r = t[9]) * D),
          (f += r * M),
          (y += r * z),
          (b += r * B),
          (m += r * $),
          (w += r * K),
          (E += r * H),
          (x += r * F),
          (_ += r * q),
          (I += r * V),
          (S += r * G),
          (P += r * J),
          (O += r * W),
          (A += r * Z),
          (U += r * Y),
          (T += r * X),
          (f += (r = t[10]) * D),
          (y += r * M),
          (b += r * z),
          (m += r * B),
          (w += r * $),
          (E += r * K),
          (x += r * H),
          (_ += r * F),
          (I += r * q),
          (S += r * V),
          (P += r * G),
          (O += r * J),
          (A += r * W),
          (U += r * Z),
          (T += r * Y),
          (L += r * X),
          (y += (r = t[11]) * D),
          (b += r * M),
          (m += r * z),
          (w += r * B),
          (E += r * $),
          (x += r * K),
          (_ += r * H),
          (I += r * F),
          (S += r * q),
          (P += r * V),
          (O += r * G),
          (A += r * J),
          (U += r * W),
          (T += r * Z),
          (L += r * Y),
          (N += r * X),
          (b += (r = t[12]) * D),
          (m += r * M),
          (w += r * z),
          (E += r * B),
          (x += r * $),
          (_ += r * K),
          (I += r * H),
          (S += r * F),
          (P += r * q),
          (O += r * V),
          (A += r * G),
          (U += r * J),
          (T += r * W),
          (L += r * Z),
          (N += r * Y),
          (C += r * X),
          (m += (r = t[13]) * D),
          (w += r * M),
          (E += r * z),
          (x += r * B),
          (_ += r * $),
          (I += r * K),
          (S += r * H),
          (P += r * F),
          (O += r * q),
          (A += r * V),
          (U += r * G),
          (T += r * J),
          (L += r * W),
          (N += r * Z),
          (C += r * Y),
          (k += r * X),
          (w += (r = t[14]) * D),
          (E += r * M),
          (x += r * z),
          (_ += r * B),
          (I += r * $),
          (S += r * K),
          (P += r * H),
          (O += r * F),
          (A += r * q),
          (U += r * V),
          (T += r * G),
          (L += r * J),
          (N += r * W),
          (C += r * Z),
          (k += r * Y),
          (R += r * X),
          (E += (r = t[15]) * D),
          (x += r * M),
          (_ += r * z),
          (I += r * B),
          (S += r * $),
          (P += r * K),
          (O += r * H),
          (A += r * F),
          (U += r * q),
          (T += r * V),
          (L += r * G),
          (N += r * J),
          (C += r * W),
          (k += r * Z),
          (R += r * Y),
          (j += r * X),
          (n += 38 * x),
          (o += 38 * _),
          (a += 38 * I),
          (h += 38 * S),
          (c += 38 * P),
          (l += 38 * O),
          (u += 38 * A),
          (d += 38 * U),
          (g += 38 * T),
          (p += 38 * L),
          (f += 38 * N),
          (y += 38 * C),
          (b += 38 * k),
          (m += 38 * R),
          (w += 38 * j),
          (s = Math.floor((r = n + (s = 1) + 65535) / 65536)),
          (n = r - 65536 * s),
          (s = Math.floor((r = o + s + 65535) / 65536)),
          (o = r - 65536 * s),
          (s = Math.floor((r = a + s + 65535) / 65536)),
          (a = r - 65536 * s),
          (s = Math.floor((r = h + s + 65535) / 65536)),
          (h = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = u + s + 65535) / 65536)),
          (u = r - 65536 * s),
          (s = Math.floor((r = d + s + 65535) / 65536)),
          (d = r - 65536 * s),
          (s = Math.floor((r = g + s + 65535) / 65536)),
          (g = r - 65536 * s),
          (s = Math.floor((r = p + s + 65535) / 65536)),
          (p = r - 65536 * s),
          (s = Math.floor((r = f + s + 65535) / 65536)),
          (f = r - 65536 * s),
          (s = Math.floor((r = y + s + 65535) / 65536)),
          (y = r - 65536 * s),
          (s = Math.floor((r = b + s + 65535) / 65536)),
          (b = r - 65536 * s),
          (s = Math.floor((r = m + s + 65535) / 65536)),
          (m = r - 65536 * s),
          (s = Math.floor((r = w + s + 65535) / 65536)),
          (w = r - 65536 * s),
          (s = Math.floor((r = E + s + 65535) / 65536)),
          (E = r - 65536 * s),
          (n += s - 1 + 37 * (s - 1)),
          (s = Math.floor((r = n + (s = 1) + 65535) / 65536)),
          (n = r - 65536 * s),
          (s = Math.floor((r = o + s + 65535) / 65536)),
          (o = r - 65536 * s),
          (s = Math.floor((r = a + s + 65535) / 65536)),
          (a = r - 65536 * s),
          (s = Math.floor((r = h + s + 65535) / 65536)),
          (h = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = u + s + 65535) / 65536)),
          (u = r - 65536 * s),
          (s = Math.floor((r = d + s + 65535) / 65536)),
          (d = r - 65536 * s),
          (s = Math.floor((r = g + s + 65535) / 65536)),
          (g = r - 65536 * s),
          (s = Math.floor((r = p + s + 65535) / 65536)),
          (p = r - 65536 * s),
          (s = Math.floor((r = f + s + 65535) / 65536)),
          (f = r - 65536 * s),
          (s = Math.floor((r = y + s + 65535) / 65536)),
          (y = r - 65536 * s),
          (s = Math.floor((r = b + s + 65535) / 65536)),
          (b = r - 65536 * s),
          (s = Math.floor((r = m + s + 65535) / 65536)),
          (m = r - 65536 * s),
          (s = Math.floor((r = w + s + 65535) / 65536)),
          (w = r - 65536 * s),
          (s = Math.floor((r = E + s + 65535) / 65536)),
          (E = r - 65536 * s),
          (n += s - 1 + 37 * (s - 1)),
          (e[0] = n),
          (e[1] = o),
          (e[2] = a),
          (e[3] = h),
          (e[4] = c),
          (e[5] = l),
          (e[6] = u),
          (e[7] = d),
          (e[8] = g),
          (e[9] = p),
          (e[10] = f),
          (e[11] = y),
          (e[12] = b),
          (e[13] = m),
          (e[14] = w),
          (e[15] = E);
      }
    },
    42517: (e) => {
      e.exports = (e) =>
        encodeURIComponent(e).replace(
          /[!'()*]/g,
          (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
        );
    },
    43375: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(33329),
        s = i(83177);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var n = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 0x6a09e667),
              (this._stateHi[1] = 0xbb67ae85),
              (this._stateHi[2] = 0x3c6ef372),
              (this._stateHi[3] = 0xa54ff53a),
              (this._stateHi[4] = 0x510e527f),
              (this._stateHi[5] = 0x9b05688c),
              (this._stateHi[6] = 0x1f83d9ab),
              (this._stateHi[7] = 0x5be0cd19),
              (this._stateLo[0] = 0xf3bcc908),
              (this._stateLo[1] = 0x84caa73b),
              (this._stateLo[2] = 0xfe94f82b),
              (this._stateLo[3] = 0x5f1d36f1),
              (this._stateLo[4] = 0xade682d1),
              (this._stateLo[5] = 0x2b3e6c1f),
              (this._stateLo[6] = 0xfb41bd6b),
              (this._stateLo[7] = 0x137e2179);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            s.wipe(this._buffer), s.wipe(this._tempHi), s.wipe(this._tempLo), this.reset();
          }),
          (e.prototype.update = function (e, i) {
            if ((void 0 === i && (i = e.length), this._finished))
              throw Error("SHA512: can't update because hash was finished.");
            var r = 0;
            if (((this._bytesHashed += i), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && i > 0; )
                (this._buffer[this._bufferLength++] = e[r++]), i--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              i >= this.blockSize &&
              ((r = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, r, i)),
              (i %= this.blockSize));
              i > 0;

            )
              (this._buffer[this._bufferLength++] = e[r++]), i--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                i = this._bufferLength,
                s = t % 128 < 112 ? 128 : 256;
              this._buffer[i] = 128;
              for (var n = i + 1; n < s - 8; n++) this._buffer[n] = 0;
              r.writeUint32BE((t / 0x20000000) | 0, this._buffer, s - 8),
                r.writeUint32BE(t << 3, this._buffer, s - 4),
                a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, s),
                (this._finished = !0);
            }
            for (var n = 0; n < this.digestLength / 8; n++)
              r.writeUint32BE(this._stateHi[n], e, 8 * n),
                r.writeUint32BE(this._stateLo[n], e, 8 * n + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished) throw Error('SHA256: cannot save finished state');
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            s.wipe(e.stateHi),
              s.wipe(e.stateLo),
              e.buffer && s.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = n;
      var o = new Int32Array([
        0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5,
        0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b,
        0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be,
        0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
        0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786,
        0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275,
        0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152,
        0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
        0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967,
        0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed,
        0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e,
        0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
        0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624,
        0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8,
        0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3,
        0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
        0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208,
        0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915,
        0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6,
        0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6,
        0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b,
        0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6,
        0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817,
      ]);
      function a(e, t, i, s, n, a, h) {
        for (
          var c,
            l,
            u,
            d,
            g,
            p,
            f,
            y,
            b = i[0],
            m = i[1],
            w = i[2],
            E = i[3],
            x = i[4],
            _ = i[5],
            I = i[6],
            S = i[7],
            P = s[0],
            O = s[1],
            A = s[2],
            U = s[3],
            T = s[4],
            L = s[5],
            N = s[6],
            C = s[7];
          h >= 128;

        ) {
          for (var k = 0; k < 16; k++) {
            var R = 8 * k + a;
            (e[k] = r.readUint32BE(n, R)), (t[k] = r.readUint32BE(n, R + 4));
          }
          for (var k = 0; k < 80; k++) {
            var j = b,
              D = m,
              M = w,
              z = E,
              B = x,
              $ = _,
              K = I,
              H = S,
              F = P,
              q = O,
              V = A,
              G = U,
              J = T,
              W = L,
              Z = N,
              Y = C;
            if (
              ((c = S),
              (g = 65535 & (l = C)),
              (p = l >>> 16),
              (f = 65535 & c),
              (y = c >>> 16),
              (c = ((x >>> 14) | (T << 18)) ^ ((x >>> 18) | (T << 14)) ^ ((T >>> 9) | (x << 23))),
              (g +=
                65535 &
                (l =
                  ((T >>> 14) | (x << 18)) ^ ((T >>> 18) | (x << 14)) ^ ((x >>> 9) | (T << 23)))),
              (p += l >>> 16),
              (f += 65535 & c),
              (y += c >>> 16),
              (c = (x & _) ^ (~x & I)),
              (g += 65535 & (l = (T & L) ^ (~T & N))),
              (p += l >>> 16),
              (f += 65535 & c),
              (y += c >>> 16),
              (c = o[2 * k]),
              (g += 65535 & (l = o[2 * k + 1])),
              (p += l >>> 16),
              (f += 65535 & c),
              (y += c >>> 16),
              (c = e[k % 16]),
              (g += 65535 & (l = t[k % 16])),
              (p += l >>> 16),
              (f += 65535 & c),
              (y += c >>> 16),
              (p += g >>> 16),
              (f += p >>> 16),
              (y += f >>> 16),
              (u = (65535 & f) | (y << 16)),
              (d = (65535 & g) | (p << 16)),
              (c = u),
              (g = 65535 & (l = d)),
              (p = l >>> 16),
              (f = 65535 & c),
              (y = c >>> 16),
              (c = ((b >>> 28) | (P << 4)) ^ ((P >>> 2) | (b << 30)) ^ ((P >>> 7) | (b << 25))),
              (g +=
                65535 &
                (l = ((P >>> 28) | (b << 4)) ^ ((b >>> 2) | (P << 30)) ^ ((b >>> 7) | (P << 25)))),
              (p += l >>> 16),
              (f += 65535 & c),
              (y += c >>> 16),
              (c = (b & m) ^ (b & w) ^ (m & w)),
              (g += 65535 & (l = (P & O) ^ (P & A) ^ (O & A))),
              (p += l >>> 16),
              (f += 65535 & c),
              (y += c >>> 16),
              (p += g >>> 16),
              (f += p >>> 16),
              (y += f >>> 16),
              (H = (65535 & f) | (y << 16)),
              (Y = (65535 & g) | (p << 16)),
              (c = z),
              (g = 65535 & (l = G)),
              (p = l >>> 16),
              (f = 65535 & c),
              (y = c >>> 16),
              (c = u),
              (g += 65535 & (l = d)),
              (p += l >>> 16),
              (f += 65535 & c),
              (y += c >>> 16),
              (p += g >>> 16),
              (f += p >>> 16),
              (y += f >>> 16),
              (z = (65535 & f) | (y << 16)),
              (G = (65535 & g) | (p << 16)),
              (m = j),
              (w = D),
              (E = M),
              (x = z),
              (_ = B),
              (I = $),
              (S = K),
              (b = H),
              (O = F),
              (A = q),
              (U = V),
              (T = G),
              (L = J),
              (N = W),
              (C = Z),
              (P = Y),
              k % 16 == 15)
            )
              for (var R = 0; R < 16; R++)
                (c = e[R]),
                  (g = 65535 & (l = t[R])),
                  (p = l >>> 16),
                  (f = 65535 & c),
                  (y = c >>> 16),
                  (c = e[(R + 9) % 16]),
                  (g += 65535 & (l = t[(R + 9) % 16])),
                  (p += l >>> 16),
                  (f += 65535 & c),
                  (y += c >>> 16),
                  (c =
                    (((u = e[(R + 1) % 16]) >>> 1) | ((d = t[(R + 1) % 16]) << 31)) ^
                    ((u >>> 8) | (d << 24)) ^
                    (u >>> 7)),
                  (g +=
                    65535 &
                    (l =
                      ((d >>> 1) | (u << 31)) ^ ((d >>> 8) | (u << 24)) ^ ((d >>> 7) | (u << 25)))),
                  (p += l >>> 16),
                  (f += 65535 & c),
                  (y += c >>> 16),
                  (c =
                    (((u = e[(R + 14) % 16]) >>> 19) | ((d = t[(R + 14) % 16]) << 13)) ^
                    ((d >>> 29) | (u << 3)) ^
                    (u >>> 6)),
                  (g +=
                    65535 &
                    (l =
                      ((d >>> 19) | (u << 13)) ^
                      ((u >>> 29) | (d << 3)) ^
                      ((d >>> 6) | (u << 26)))),
                  (p += l >>> 16),
                  (f += 65535 & c),
                  (y += c >>> 16),
                  (p += g >>> 16),
                  (f += p >>> 16),
                  (y += f >>> 16),
                  (e[R] = (65535 & f) | (y << 16)),
                  (t[R] = (65535 & g) | (p << 16));
          }
          (c = b),
            (g = 65535 & (l = P)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[0]),
            (g += 65535 & (l = s[0])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[0] = b = (65535 & f) | (y << 16)),
            (s[0] = P = (65535 & g) | (p << 16)),
            (c = m),
            (g = 65535 & (l = O)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[1]),
            (g += 65535 & (l = s[1])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[1] = m = (65535 & f) | (y << 16)),
            (s[1] = O = (65535 & g) | (p << 16)),
            (c = w),
            (g = 65535 & (l = A)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[2]),
            (g += 65535 & (l = s[2])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[2] = w = (65535 & f) | (y << 16)),
            (s[2] = A = (65535 & g) | (p << 16)),
            (c = E),
            (g = 65535 & (l = U)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[3]),
            (g += 65535 & (l = s[3])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[3] = E = (65535 & f) | (y << 16)),
            (s[3] = U = (65535 & g) | (p << 16)),
            (c = x),
            (g = 65535 & (l = T)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[4]),
            (g += 65535 & (l = s[4])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[4] = x = (65535 & f) | (y << 16)),
            (s[4] = T = (65535 & g) | (p << 16)),
            (c = _),
            (g = 65535 & (l = L)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[5]),
            (g += 65535 & (l = s[5])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[5] = _ = (65535 & f) | (y << 16)),
            (s[5] = L = (65535 & g) | (p << 16)),
            (c = I),
            (g = 65535 & (l = N)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[6]),
            (g += 65535 & (l = s[6])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[6] = I = (65535 & f) | (y << 16)),
            (s[6] = N = (65535 & g) | (p << 16)),
            (c = S),
            (g = 65535 & (l = C)),
            (p = l >>> 16),
            (f = 65535 & c),
            (y = c >>> 16),
            (c = i[7]),
            (g += 65535 & (l = s[7])),
            (p += l >>> 16),
            (f += 65535 & c),
            (y += c >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[7] = S = (65535 & f) | (y << 16)),
            (s[7] = C = (65535 & g) | (p << 16)),
            (a += 128),
            (h -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new n();
        t.update(e);
        var i = t.digest();
        return t.clean(), i;
      };
    },
    44996: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.BrowserRandomSource = void 0);
      class i {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          let e = 'undefined' != typeof self ? self.crypto || self.msCrypto : null;
          e &&
            void 0 !== e.getRandomValues &&
            ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
        }
        randomBytes(e) {
          if (!this.isAvailable || !this._crypto)
            throw Error('Browser random byte generator is not available.');
          let t = new Uint8Array(e);
          for (let e = 0; e < t.length; e += 65536)
            this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
          return t;
        }
      }
      t.BrowserRandomSource = i;
    },
    48498: (e, t, i) => {
      let r = i(42517),
        s = i(35719),
        n = i(84893),
        o = i(16730),
        a = (e) => null == e,
        h = Symbol('encodeFragmentIdentifier');
      function c(e) {
        if ('string' != typeof e || 1 !== e.length)
          throw TypeError('arrayFormatSeparator must be single character string');
      }
      function l(e, t) {
        return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
      }
      function u(e, t) {
        return t.decode ? s(e) : e;
      }
      function d(e) {
        let t = e.indexOf('#');
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function g(e) {
        let t = (e = d(e)).indexOf('?');
        return -1 === t ? '' : e.slice(t + 1);
      }
      function p(e, t) {
        return (
          t.parseNumbers && !Number.isNaN(Number(e)) && 'string' == typeof e && '' !== e.trim()
            ? (e = Number(e))
            : t.parseBooleans &&
              null !== e &&
              ('true' === e.toLowerCase() || 'false' === e.toLowerCase()) &&
              (e = 'true' === e.toLowerCase()),
          e
        );
      }
      function f(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: 'none',
              arrayFormatSeparator: ',',
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        let i = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case 'index':
                return (e, i, r) => {
                  if (((t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, '')), !t)) {
                    r[e] = i;
                    return;
                  }
                  void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = i);
                };
              case 'bracket':
                return (e, i, r) => {
                  if (((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, '')), !t)) {
                    r[e] = i;
                    return;
                  }
                  if (void 0 === r[e]) {
                    r[e] = [i];
                    return;
                  }
                  r[e] = [].concat(r[e], i);
                };
              case 'colon-list-separator':
                return (e, i, r) => {
                  if (((t = /(:list)$/.exec(e)), (e = e.replace(/:list$/, '')), !t)) {
                    r[e] = i;
                    return;
                  }
                  if (void 0 === r[e]) {
                    r[e] = [i];
                    return;
                  }
                  r[e] = [].concat(r[e], i);
                };
              case 'comma':
              case 'separator':
                return (t, i, r) => {
                  let s = 'string' == typeof i && i.includes(e.arrayFormatSeparator),
                    n = 'string' == typeof i && !s && u(i, e).includes(e.arrayFormatSeparator);
                  i = n ? u(i, e) : i;
                  let o =
                    s || n
                      ? i.split(e.arrayFormatSeparator).map((t) => u(t, e))
                      : null === i
                        ? i
                        : u(i, e);
                  r[t] = o;
                };
              case 'bracket-separator':
                return (t, i, r) => {
                  let s = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, '')), !s)) {
                    r[t] = i ? u(i, e) : i;
                    return;
                  }
                  let n = null === i ? [] : i.split(e.arrayFormatSeparator).map((t) => u(t, e));
                  if (void 0 === r[t]) {
                    r[t] = n;
                    return;
                  }
                  r[t] = [].concat(r[t], n);
                };
              default:
                return (e, t, i) => {
                  if (void 0 === i[e]) {
                    i[e] = t;
                    return;
                  }
                  i[e] = [].concat(i[e], t);
                };
            }
          })(t),
          r = Object.create(null);
        if ('string' != typeof e || !(e = e.trim().replace(/^[?#&]/, ''))) return r;
        for (let s of e.split('&')) {
          if ('' === s) continue;
          let [e, o] = n(t.decode ? s.replace(/\+/g, ' ') : s, '=');
          (o =
            void 0 === o
              ? null
              : ['comma', 'separator', 'bracket-separator'].includes(t.arrayFormat)
                ? o
                : u(o, t)),
            i(u(e, t), o, r);
        }
        for (let e of Object.keys(r)) {
          let i = r[e];
          if ('object' == typeof i && null !== i) for (let e of Object.keys(i)) i[e] = p(i[e], t);
          else r[e] = p(i, t);
        }
        return !1 === t.sort
          ? r
          : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
              let i = r[t];
              return (
                i && 'object' == typeof i && !Array.isArray(i)
                  ? (e[t] = (function e(t) {
                      return Array.isArray(t)
                        ? t.sort()
                        : 'object' == typeof t
                          ? e(Object.keys(t))
                              .sort((e, t) => Number(e) - Number(t))
                              .map((e) => t[e])
                          : t;
                    })(i))
                  : (e[t] = i),
                e
              );
            }, Object.create(null));
      }
      (t.extract = g),
        (t.parse = f),
        (t.stringify = (e, t) => {
          if (!e) return '';
          c(
            (t = Object.assign(
              { encode: !0, strict: !0, arrayFormat: 'none', arrayFormatSeparator: ',' },
              t
            )).arrayFormatSeparator
          );
          let i = (i) => (t.skipNull && a(e[i])) || (t.skipEmptyString && '' === e[i]),
            r = (function (e) {
              switch (e.arrayFormat) {
                case 'index':
                  return (t) => (i, r) => {
                    let s = i.length;
                    return void 0 === r ||
                      (e.skipNull && null === r) ||
                      (e.skipEmptyString && '' === r)
                      ? i
                      : null === r
                        ? [...i, [l(t, e), '[', s, ']'].join('')]
                        : [...i, [l(t, e), '[', l(s, e), ']=', l(r, e)].join('')];
                  };
                case 'bracket':
                  return (t) => (i, r) =>
                    void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && '' === r)
                      ? i
                      : null === r
                        ? [...i, [l(t, e), '[]'].join('')]
                        : [...i, [l(t, e), '[]=', l(r, e)].join('')];
                case 'colon-list-separator':
                  return (t) => (i, r) =>
                    void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && '' === r)
                      ? i
                      : null === r
                        ? [...i, [l(t, e), ':list='].join('')]
                        : [...i, [l(t, e), ':list=', l(r, e)].join('')];
                case 'comma':
                case 'separator':
                case 'bracket-separator': {
                  let t = 'bracket-separator' === e.arrayFormat ? '[]=' : '=';
                  return (i) => (r, s) =>
                    void 0 === s || (e.skipNull && null === s) || (e.skipEmptyString && '' === s)
                      ? r
                      : ((s = null === s ? '' : s), 0 === r.length)
                        ? [[l(i, e), t, l(s, e)].join('')]
                        : [[r, l(s, e)].join(e.arrayFormatSeparator)];
                }
                default:
                  return (t) => (i, r) =>
                    void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && '' === r)
                      ? i
                      : null === r
                        ? [...i, l(t, e)]
                        : [...i, [l(t, e), '=', l(r, e)].join('')];
              }
            })(t),
            s = {};
          for (let t of Object.keys(e)) i(t) || (s[t] = e[t]);
          let n = Object.keys(s);
          return (
            !1 !== t.sort && n.sort(t.sort),
            n
              .map((i) => {
                let s = e[i];
                return void 0 === s
                  ? ''
                  : null === s
                    ? l(i, t)
                    : Array.isArray(s)
                      ? 0 === s.length && 'bracket-separator' === t.arrayFormat
                        ? l(i, t) + '[]'
                        : s.reduce(r(i), []).join('&')
                      : l(i, t) + '=' + l(s, t);
              })
              .filter((e) => e.length > 0)
              .join('&')
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          let [i, r] = n(e, '#');
          return Object.assign(
            { url: i.split('?')[0] || '', query: f(g(e), t) },
            t && t.parseFragmentIdentifier && r ? { fragmentIdentifier: u(r, t) } : {}
          );
        }),
        (t.stringifyUrl = (e, i) => {
          i = Object.assign({ encode: !0, strict: !0, [h]: !0 }, i);
          let r = d(e.url).split('?')[0] || '',
            s = t.extract(e.url),
            n = Object.assign(t.parse(s, { sort: !1 }), e.query),
            o = t.stringify(n, i);
          o && (o = `?${o}`);
          let a = (function (e) {
            let t = '',
              i = e.indexOf('#');
            return -1 !== i && (t = e.slice(i)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (a = `#${i[h] ? l(e.fragmentIdentifier, i) : e.fragmentIdentifier}`),
            `${r}${o}${a}`
          );
        }),
        (t.pick = (e, i, r) => {
          r = Object.assign({ parseFragmentIdentifier: !0, [h]: !1 }, r);
          let { url: s, query: n, fragmentIdentifier: a } = t.parseUrl(e, r);
          return t.stringifyUrl({ url: s, query: o(n, i), fragmentIdentifier: a }, r);
        }),
        (t.exclude = (e, i, r) => {
          let s = Array.isArray(i) ? (e) => !i.includes(e) : (e, t) => !i(e, t);
          return t.pick(e, s, r);
        });
    },
    51129: (e, t) => {
      function i(e, t) {
        if (e.length !== t.length) return 0;
        for (var i = 0, r = 0; r < e.length; r++) i |= e[r] ^ t[r];
        return 1 & ((i - 1) >>> 8);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.select = function (e, t, i) {
          return (~(e - 1) & t) | ((e - 1) & i);
        }),
        (t.lessOrEqual = function (e, t) {
          return (((0 | e) - (0 | t) - 1) >>> 31) & 1;
        }),
        (t.compare = i),
        (t.equal = function (e, t) {
          return 0 !== e.length && 0 !== t.length && 0 !== i(e, t);
        });
    },
    62333: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(51129),
        s = i(83177);
      t.DIGEST_LENGTH = 16;
      var n = (function () {
        function e(e) {
          (this.digestLength = t.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1);
          var i = e[0] | (e[1] << 8);
          this._r[0] = 8191 & i;
          var r = e[2] | (e[3] << 8);
          this._r[1] = ((i >>> 13) | (r << 3)) & 8191;
          var s = e[4] | (e[5] << 8);
          this._r[2] = ((r >>> 10) | (s << 6)) & 7939;
          var n = e[6] | (e[7] << 8);
          this._r[3] = ((s >>> 7) | (n << 9)) & 8191;
          var o = e[8] | (e[9] << 8);
          (this._r[4] = ((n >>> 4) | (o << 12)) & 255), (this._r[5] = (o >>> 1) & 8190);
          var a = e[10] | (e[11] << 8);
          this._r[6] = ((o >>> 14) | (a << 2)) & 8191;
          var h = e[12] | (e[13] << 8);
          this._r[7] = ((a >>> 11) | (h << 5)) & 8065;
          var c = e[14] | (e[15] << 8);
          (this._r[8] = ((h >>> 8) | (c << 8)) & 8191),
            (this._r[9] = (c >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8));
        }
        return (
          (e.prototype._blocks = function (e, t, i) {
            for (
              var r = 2048 * !this._fin,
                s = this._h[0],
                n = this._h[1],
                o = this._h[2],
                a = this._h[3],
                h = this._h[4],
                c = this._h[5],
                l = this._h[6],
                u = this._h[7],
                d = this._h[8],
                g = this._h[9],
                p = this._r[0],
                f = this._r[1],
                y = this._r[2],
                b = this._r[3],
                m = this._r[4],
                w = this._r[5],
                E = this._r[6],
                x = this._r[7],
                _ = this._r[8],
                I = this._r[9];
              i >= 16;

            ) {
              var S,
                P = e[t + 0] | (e[t + 1] << 8);
              s += 8191 & P;
              var O = e[t + 2] | (e[t + 3] << 8);
              n += ((P >>> 13) | (O << 3)) & 8191;
              var A = e[t + 4] | (e[t + 5] << 8);
              o += ((O >>> 10) | (A << 6)) & 8191;
              var U = e[t + 6] | (e[t + 7] << 8);
              a += ((A >>> 7) | (U << 9)) & 8191;
              var T = e[t + 8] | (e[t + 9] << 8);
              (h += ((U >>> 4) | (T << 12)) & 8191), (c += (T >>> 1) & 8191);
              var L = e[t + 10] | (e[t + 11] << 8);
              l += ((T >>> 14) | (L << 2)) & 8191;
              var N = e[t + 12] | (e[t + 13] << 8);
              u += ((L >>> 11) | (N << 5)) & 8191;
              var C = e[t + 14] | (e[t + 15] << 8);
              (d += ((N >>> 8) | (C << 8)) & 8191), (g += (C >>> 5) | r);
              var k = 0;
              (k = (S = 0 + s * p + 5 * I * n + 5 * _ * o + 5 * x * a + 5 * E * h) >>> 13),
                (S &= 8191),
                (S += 5 * w * c),
                (S += 5 * m * l),
                (S += 5 * b * u),
                (S += 5 * y * d),
                (S += 5 * f * g),
                (k += S >>> 13),
                (S &= 8191);
              var R = k;
              (R += s * f),
                (R += n * p),
                (R += 5 * I * o),
                (R += 5 * _ * a),
                (R += 5 * x * h),
                (k = R >>> 13),
                (R &= 8191),
                (R += 5 * E * c),
                (R += 5 * w * l),
                (R += 5 * m * u),
                (R += 5 * b * d),
                (R += 5 * y * g),
                (k += R >>> 13),
                (R &= 8191);
              var j = k;
              (j += s * y),
                (j += n * f),
                (j += o * p),
                (j += 5 * I * a),
                (j += 5 * _ * h),
                (k = j >>> 13),
                (j &= 8191),
                (j += 5 * x * c),
                (j += 5 * E * l),
                (j += 5 * w * u),
                (j += 5 * m * d),
                (j += 5 * b * g),
                (k += j >>> 13),
                (j &= 8191);
              var D = k;
              (D += s * b),
                (D += n * y),
                (D += o * f),
                (D += a * p),
                (D += 5 * I * h),
                (k = D >>> 13),
                (D &= 8191),
                (D += 5 * _ * c),
                (D += 5 * x * l),
                (D += 5 * E * u),
                (D += 5 * w * d),
                (D += 5 * m * g),
                (k += D >>> 13),
                (D &= 8191);
              var M = k;
              (M += s * m),
                (M += n * b),
                (M += o * y),
                (M += a * f),
                (M += h * p),
                (k = M >>> 13),
                (M &= 8191),
                (M += 5 * I * c),
                (M += 5 * _ * l),
                (M += 5 * x * u),
                (M += 5 * E * d),
                (M += 5 * w * g),
                (k += M >>> 13),
                (M &= 8191);
              var z = k;
              (z += s * w),
                (z += n * m),
                (z += o * b),
                (z += a * y),
                (z += h * f),
                (k = z >>> 13),
                (z &= 8191),
                (z += c * p),
                (z += 5 * I * l),
                (z += 5 * _ * u),
                (z += 5 * x * d),
                (z += 5 * E * g),
                (k += z >>> 13),
                (z &= 8191);
              var B = k;
              (B += s * E),
                (B += n * w),
                (B += o * m),
                (B += a * b),
                (B += h * y),
                (k = B >>> 13),
                (B &= 8191),
                (B += c * f),
                (B += l * p),
                (B += 5 * I * u),
                (B += 5 * _ * d),
                (B += 5 * x * g),
                (k += B >>> 13),
                (B &= 8191);
              var $ = k;
              ($ += s * x),
                ($ += n * E),
                ($ += o * w),
                ($ += a * m),
                ($ += h * b),
                (k = $ >>> 13),
                ($ &= 8191),
                ($ += c * y),
                ($ += l * f),
                ($ += u * p),
                ($ += 5 * I * d),
                ($ += 5 * _ * g),
                (k += $ >>> 13),
                ($ &= 8191);
              var K = k;
              (K += s * _),
                (K += n * x),
                (K += o * E),
                (K += a * w),
                (K += h * m),
                (k = K >>> 13),
                (K &= 8191),
                (K += c * b),
                (K += l * y),
                (K += u * f),
                (K += d * p),
                (K += 5 * I * g),
                (k += K >>> 13),
                (K &= 8191);
              var H = k;
              (H += s * I),
                (H += n * _),
                (H += o * x),
                (H += a * E),
                (H += h * w),
                (k = H >>> 13),
                (H &= 8191),
                (H += c * m),
                (H += l * b),
                (H += u * y),
                (H += d * f),
                (H += g * p),
                (k += H >>> 13),
                (H &= 8191),
                (S = 8191 & (k = ((k = ((k << 2) + k) | 0) + S) | 0)),
                (k >>>= 13),
                (R += k),
                (s = S),
                (n = R),
                (o = j),
                (a = D),
                (h = M),
                (c = z),
                (l = B),
                (u = $),
                (d = K),
                (g = H),
                (t += 16),
                (i -= 16);
            }
            (this._h[0] = s),
              (this._h[1] = n),
              (this._h[2] = o),
              (this._h[3] = a),
              (this._h[4] = h),
              (this._h[5] = c),
              (this._h[6] = l),
              (this._h[7] = u),
              (this._h[8] = d),
              (this._h[9] = g);
          }),
          (e.prototype.finish = function (e, t) {
            void 0 === t && (t = 0);
            var i,
              r,
              s,
              n,
              o = new Uint16Array(10);
            if (this._leftover) {
              for (n = this._leftover, this._buffer[n++] = 1; n < 16; n++) this._buffer[n] = 0;
              (this._fin = 1), this._blocks(this._buffer, 0, 16);
            }
            for (i = this._h[1] >>> 13, this._h[1] &= 8191, n = 2; n < 10; n++)
              (this._h[n] += i), (i = this._h[n] >>> 13), (this._h[n] &= 8191);
            for (
              this._h[0] += 5 * i,
                i = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += i,
                i = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += i,
                o[0] = this._h[0] + 5,
                i = o[0] >>> 13,
                o[0] &= 8191,
                n = 1;
              n < 10;
              n++
            )
              (o[n] = this._h[n] + i), (i = o[n] >>> 13), (o[n] &= 8191);
            for (o[9] -= 8192, r = (1 ^ i) - 1, n = 0; n < 10; n++) o[n] &= r;
            for (n = 0, r = ~r; n < 10; n++) this._h[n] = (this._h[n] & r) | o[n];
            for (
              n = 1,
                this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
                this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
                this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
                this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
                this._h[4] = ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) & 65535,
                this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
                this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
                this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
                s = this._h[0] + this._pad[0],
                this._h[0] = 65535 & s;
              n < 8;
              n++
            )
              (s = (((this._h[n] + this._pad[n]) | 0) + (s >>> 16)) | 0), (this._h[n] = 65535 & s);
            return (
              (e[t + 0] = this._h[0] >>> 0),
              (e[t + 1] = this._h[0] >>> 8),
              (e[t + 2] = this._h[1] >>> 0),
              (e[t + 3] = this._h[1] >>> 8),
              (e[t + 4] = this._h[2] >>> 0),
              (e[t + 5] = this._h[2] >>> 8),
              (e[t + 6] = this._h[3] >>> 0),
              (e[t + 7] = this._h[3] >>> 8),
              (e[t + 8] = this._h[4] >>> 0),
              (e[t + 9] = this._h[4] >>> 8),
              (e[t + 10] = this._h[5] >>> 0),
              (e[t + 11] = this._h[5] >>> 8),
              (e[t + 12] = this._h[6] >>> 0),
              (e[t + 13] = this._h[6] >>> 8),
              (e[t + 14] = this._h[7] >>> 0),
              (e[t + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (e.prototype.update = function (e) {
            var t,
              i = 0,
              r = e.length;
            if (this._leftover) {
              (t = 16 - this._leftover) > r && (t = r);
              for (var s = 0; s < t; s++) this._buffer[this._leftover + s] = e[i + s];
              if (((r -= t), (i += t), (this._leftover += t), this._leftover < 16)) return this;
              this._blocks(this._buffer, 0, 16), (this._leftover = 0);
            }
            if ((r >= 16 && ((t = r - (r % 16)), this._blocks(e, i, t), (i += t), (r -= t)), r)) {
              for (var s = 0; s < r; s++) this._buffer[this._leftover + s] = e[i + s];
              this._leftover += r;
            }
            return this;
          }),
          (e.prototype.digest = function () {
            if (this._finished) throw Error('Poly1305 was finished');
            var e = new Uint8Array(16);
            return this.finish(e), e;
          }),
          (e.prototype.clean = function () {
            return (
              s.wipe(this._buffer),
              s.wipe(this._r),
              s.wipe(this._h),
              s.wipe(this._pad),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !0),
              this
            );
          }),
          e
        );
      })();
      (t.Poly1305 = n),
        (t.oneTimeAuth = function (e, t) {
          var i = new n(e);
          i.update(t);
          var r = i.digest();
          return i.clean(), r;
        }),
        (t.equal = function (e, i) {
          return e.length === t.DIGEST_LENGTH && i.length === t.DIGEST_LENGTH && r.equal(e, i);
        });
    },
    65681: (e, t, i) => {
      var r = i(33329),
        s = i(83177);
      (t.On = 32),
        (t.cS = 64),
        (function () {
          function e() {
            (this.digestLength = t.On),
              (this.blockSize = t.cS),
              (this._state = new Int32Array(8)),
              (this._temp = new Int32Array(64)),
              (this._buffer = new Uint8Array(128)),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this.reset();
          }
          (e.prototype._initState = function () {
            (this._state[0] = 0x6a09e667),
              (this._state[1] = 0xbb67ae85),
              (this._state[2] = 0x3c6ef372),
              (this._state[3] = 0xa54ff53a),
              (this._state[4] = 0x510e527f),
              (this._state[5] = 0x9b05688c),
              (this._state[6] = 0x1f83d9ab),
              (this._state[7] = 0x5be0cd19);
          }),
            (e.prototype.reset = function () {
              return (
                this._initState(),
                (this._bufferLength = 0),
                (this._bytesHashed = 0),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.clean = function () {
              s.wipe(this._buffer), s.wipe(this._temp), this.reset();
            }),
            (e.prototype.update = function (e, t) {
              if ((void 0 === t && (t = e.length), this._finished))
                throw Error("SHA256: can't update because hash was finished.");
              var i = 0;
              if (((this._bytesHashed += t), this._bufferLength > 0)) {
                for (; this._bufferLength < this.blockSize && t > 0; )
                  (this._buffer[this._bufferLength++] = e[i++]), t--;
                this._bufferLength === this.blockSize &&
                  (o(this._temp, this._state, this._buffer, 0, this.blockSize),
                  (this._bufferLength = 0));
              }
              for (
                t >= this.blockSize &&
                ((i = o(this._temp, this._state, e, i, t)), (t %= this.blockSize));
                t > 0;

              )
                (this._buffer[this._bufferLength++] = e[i++]), t--;
              return this;
            }),
            (e.prototype.finish = function (e) {
              if (!this._finished) {
                var t = this._bytesHashed,
                  i = this._bufferLength,
                  s = t % 64 < 56 ? 64 : 128;
                this._buffer[i] = 128;
                for (var n = i + 1; n < s - 8; n++) this._buffer[n] = 0;
                r.writeUint32BE((t / 0x20000000) | 0, this._buffer, s - 8),
                  r.writeUint32BE(t << 3, this._buffer, s - 4),
                  o(this._temp, this._state, this._buffer, 0, s),
                  (this._finished = !0);
              }
              for (var n = 0; n < this.digestLength / 4; n++)
                r.writeUint32BE(this._state[n], e, 4 * n);
              return this;
            }),
            (e.prototype.digest = function () {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }),
            (e.prototype.saveState = function () {
              if (this._finished) throw Error('SHA256: cannot save finished state');
              return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed,
              };
            }),
            (e.prototype.restoreState = function (e) {
              return (
                this._state.set(e.state),
                (this._bufferLength = e.bufferLength),
                e.buffer && this._buffer.set(e.buffer),
                (this._bytesHashed = e.bytesHashed),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.cleanSavedState = function (e) {
              s.wipe(e.state),
                e.buffer && s.wipe(e.buffer),
                (e.bufferLength = 0),
                (e.bytesHashed = 0);
            });
        })();
      var n = new Int32Array([
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
      ]);
      function o(e, t, i, s, o) {
        for (; o >= 64; ) {
          for (
            var a = t[0],
              h = t[1],
              c = t[2],
              l = t[3],
              u = t[4],
              d = t[5],
              g = t[6],
              p = t[7],
              f = 0;
            f < 16;
            f++
          ) {
            var y = s + 4 * f;
            e[f] = r.readUint32BE(i, y);
          }
          for (var f = 16; f < 64; f++) {
            var b = e[f - 2],
              m = ((b >>> 17) | (b << 15)) ^ ((b >>> 19) | (b << 13)) ^ (b >>> 10),
              w = (((b = e[f - 15]) >>> 7) | (b << 25)) ^ ((b >>> 18) | (b << 14)) ^ (b >>> 3);
            e[f] = ((m + e[f - 7]) | 0) + ((w + e[f - 16]) | 0);
          }
          for (var f = 0; f < 64; f++) {
            var m =
                ((((((u >>> 6) | (u << 26)) ^ ((u >>> 11) | (u << 21)) ^ ((u >>> 25) | (u << 7))) +
                  ((u & d) ^ (~u & g))) |
                  0) +
                  ((p + ((n[f] + e[f]) | 0)) | 0)) |
                0,
              w =
                ((((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10))) +
                  ((a & h) ^ (a & c) ^ (h & c))) |
                0;
            (p = g),
              (g = d),
              (d = u),
              (u = (l + m) | 0),
              (l = c),
              (c = h),
              (h = a),
              (a = (m + w) | 0);
          }
          (t[0] += a),
            (t[1] += h),
            (t[2] += c),
            (t[3] += l),
            (t[4] += u),
            (t[5] += d),
            (t[6] += g),
            (t[7] += p),
            (s += 64),
            (o -= 64);
        }
        return s;
      }
    },
    66584: (e, t, i) => {
      i.d(t, { iJ: () => nU });
      var r = i(35978),
        s = i.n(r),
        n = i(18193),
        o = i(19757),
        a = i(56975),
        h = i(673),
        c = Object.defineProperty,
        l = (e, t, i) =>
          t in e
            ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        u = (e, t, i) => l(e, 'symbol' != typeof t ? t + '' : t, i);
      class d extends h.H {
        constructor(e) {
          super(), (this.opts = e), u(this, 'protocol', 'wc'), u(this, 'version', 2);
        }
      }
      var g = Object.defineProperty,
        p = (e, t, i) =>
          t in e
            ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        f = (e, t, i) => p(e, 'symbol' != typeof t ? t + '' : t, i);
      class y extends h.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t), f(this, 'records', new Map());
        }
      }
      class b {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class m extends h.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class w extends h.H {
        constructor(e) {
          super();
        }
      }
      class E {
        constructor(e, t, i, r) {
          (this.core = e), (this.logger = t), (this.name = i);
        }
      }
      var x = Object.defineProperty;
      class _ extends h.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class I extends h.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class S {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.store = i);
        }
      }
      class P {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class O {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
        }
      }
      var A = Object.defineProperty;
      s(), r.EventEmitter;
      var U = i(87561),
        T = i(41035),
        L = i(10897),
        N = i(69145),
        C = i(80985),
        k = i(66890);
      function R(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function j(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let i = R(t),
          r = 0;
        for (let t of e) i.set(t, r), (r += t.length);
        return i;
      }
      !(function (e) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let i = 0; i < e.length; i++) {
          let r = e.charAt(i),
            s = r.charCodeAt(0);
          if (255 !== t[s]) throw TypeError(r + ' is ambiguous');
          t[s] = i;
        }
        let i = e.length,
          r = e.charAt(0),
          s = Math.log(i) / Math.log(256);
      })('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
      var D = i(29218);
      function M(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      let z = M(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        B = M(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = R((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        $ = { utf8: z, 'utf-8': z, hex: D.Fo.base16, latin1: B, ascii: B, binary: B, ...D.Fo };
      function K(e, t = 'utf8') {
        let i = $[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, 'utf8')
          : i.decoder.decode(`${i.prefix}${e}`);
      }
      function H(e, t = 'utf8') {
        let i = $[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : i.encoder.encode(e).substring(1);
      }
      var F = i(34736),
        q = i(26481),
        V = i(29143),
        G = i(51642).Buffer;
      function J(e) {
        let [t, i, r] = e.split(':');
        return { namespace: t, reference: i, address: r };
      }
      let W = { reactNative: 'react-native', node: 'node', browser: 'browser', unknown: 'unknown' };
      function Z() {
        return 'u' > typeof V && 'u' > typeof V.versions && 'u' > typeof V.versions.node;
      }
      function Y() {
        return (
          !(0, C.getDocument)() && !!(0, C.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function X() {
        return !Z() && !!(0, C.getNavigator)() && !!(0, C.getDocument)();
      }
      function Q() {
        return Y() ? W.reactNative : Z() ? W.node : X() ? W.browser : W.unknown;
      }
      function ee() {
        var e;
        try {
          return Y() && 'u' > typeof i.g && 'u' > typeof (null == i.g ? void 0 : i.g.Application)
            ? null == (e = i.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function et(e, t, r) {
        let s = (function () {
            if (
              Q() === W.reactNative &&
              'u' > typeof i.g &&
              'u' > typeof (null == i.g ? void 0 : i.g.Platform)
            ) {
              let { OS: e, Version: t } = i.g.Platform;
              return [e, t].join('-');
            }
            let e = (0, N.o0)();
            if (null === e) return 'unknown';
            let t = e.os ? e.os.replace(' ', '').toLowerCase() : 'unknown';
            return 'browser' === e.type
              ? [t, e.name, e.version].join('-')
              : [t, e.version].join('-');
          })(),
          n = (function () {
            var e;
            let t = Q();
            return t === W.browser
              ? [t, (null == (e = (0, C.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', r].join('-'), s, n].join('/');
      }
      function ei(e) {
        return Object.fromEntries(e.entries());
      }
      function er(e) {
        return new Map(Object.entries(e));
      }
      function es(e, t, i) {
        return new Promise(async (r, s) => {
          let n = setTimeout(() => s(Error(i)), t);
          try {
            let t = await e;
            r(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function en(e, t) {
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
      function eo(e, t) {
        return (0, U.fromMiliseconds)((t || Date.now()) + (0, U.toMiliseconds)(e));
      }
      function ea(e) {
        return Date.now() >= (0, U.toMiliseconds)(e);
      }
      function eh(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function ec(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      function el() {
        return 'u' > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function eu() {
        return 'u' > typeof V && 'true' === V.env.IS_VITEST;
      }
      function ed(e) {
        return G.from(e, 'base64').toString('utf-8');
      }
      function eg(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function ep(e, ...t) {
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
      function ef(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        eg(e.outputLen), eg(e.blockLen);
      }
      function ey(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function eb(e, t) {
        ep(e);
        let i = t.outputLen;
        if (e.length < i) throw Error('digestInto() expects output buffer of length at least ' + i);
      }
      let em = BigInt(0x100000000 - 1),
        ew = BigInt(32),
        ev = (e, t, i) => (e << i) | (t >>> (32 - i)),
        eE = (e, t, i) => (t << i) | (e >>> (32 - i)),
        ex = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        e_ = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i)),
        eI = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function eS(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function eP(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let eO = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function eA(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function eU(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          ep(e),
          e
        );
      }
      class eT {
        clone() {
          return this._cloneInto();
        }
      }
      function eL(e) {
        let t = (t) => e().update(eU(t)).digest(),
          i = e();
        return (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = () => e()), t;
      }
      function eN(e = 32) {
        if (eI && 'function' == typeof eI.getRandomValues)
          return eI.getRandomValues(new Uint8Array(e));
        if (eI && 'function' == typeof eI.randomBytes) return eI.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      let eC = [],
        ek = [],
        eR = [],
        ej = BigInt(0),
        eD = BigInt(1),
        eM = BigInt(2),
        ez = BigInt(7),
        eB = BigInt(256),
        e$ = BigInt(113);
      for (let e = 0, t = eD, i = 1, r = 0; e < 24; e++) {
        ([i, r] = [r, (2 * i + 3 * r) % 5]),
          eC.push(2 * (5 * r + i)),
          ek.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = ej;
        for (let e = 0; e < 7; e++)
          (t = ((t << eD) ^ ((t >> ez) * e$)) % eB) & eM && (s ^= eD << ((eD << BigInt(e)) - eD));
        eR.push(s);
      }
      let [eK, eH] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & em), l: Number((e >> ew) & em) }
                : { h: 0 | Number((e >> ew) & em), l: 0 | Number(e & em) };
            })(e[s], t);
            [i[s], r[s]] = [n, o];
          }
          return [i, r];
        })(eR, !0),
        eF = (e, t, i) => (i > 32 ? ex(e, t, i) : ev(e, t, i)),
        eq = (e, t, i) => (i > 32 ? e_(e, t, i) : eE(e, t, i));
      class eV extends eT {
        constructor(e, t, i, r = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = i),
            (this.enableXOF = r),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            eg(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          eO || eA(this.state32),
            (function (e, t = 24) {
              let i = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = i[s],
                    o = i[s + 1],
                    a = eF(n, o, 1) ^ i[r],
                    h = eq(n, o, 1) ^ i[r + 1];
                  for (let i = 0; i < 50; i += 10) (e[t + i] ^= a), (e[t + i + 1] ^= h);
                }
                let t = e[2],
                  s = e[3];
                for (let i = 0; i < 24; i++) {
                  let r = ek[i],
                    n = eF(t, s, r),
                    o = eq(t, s, r),
                    a = eC[i];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) i[r] = e[t + r];
                  for (let r = 0; r < 10; r++) e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                }
                (e[0] ^= eK[r]), (e[1] ^= eH[r]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            eO || eA(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          ey(this);
          let { blockLen: t, state: i } = this,
            r = (e = eU(e)).length;
          for (let s = 0; s < r; ) {
            let n = Math.min(t - this.pos, r - s);
            for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: i, blockLen: r } = this;
          (e[i] ^= t),
            (128 & t) != 0 && i === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          ey(this, !1), ep(e), this.finish();
          let t = this.state,
            { blockLen: i } = this;
          for (let r = 0, s = e.length; r < s; ) {
            this.posOut >= i && this.keccak();
            let n = Math.min(i - this.posOut, s - r);
            e.set(t.subarray(this.posOut, this.posOut + n), r), (this.posOut += n), (r += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return eg(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((eb(e, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let { blockLen: t, suffix: i, outputLen: r, rounds: s, enableXOF: n } = this;
          return (
            e || (e = new eV(t, i, r, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = i),
            (e.outputLen = r),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let eG = eL(() => new eV(136, 1, 32));
      function eJ(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          i = new TextEncoder().encode(t + e);
        return '0x' + G.from(eG(i)).toString('hex');
      }
      async function eW(e, t, i) {
        return (await jr({ hash: eJ(t), signature: i })).toLowerCase() === e.toLowerCase();
      }
      async function eZ(e, t, i, r, s, n) {
        let o = (function (e) {
          let [t, i] = e.split(':');
          return { namespace: t, reference: i };
        })(r);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
          );
        try {
          let o = '0x1626ba7e',
            a = i.substring(2),
            h = eJ(t).substring(2),
            c =
              o +
              h +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            l = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${r}&projectId=${s}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: '2.0',
                  method: 'eth_call',
                  params: [{ to: e, data: c }, 'latest'],
                }),
              }
            ),
            { result: u } = await l.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var eY = Object.defineProperty,
        eX = Object.defineProperties,
        eQ = Object.getOwnPropertyDescriptors,
        e0 = Object.getOwnPropertySymbols,
        e1 = Object.prototype.hasOwnProperty,
        e5 = Object.prototype.propertyIsEnumerable,
        e6 = (e, t, i) =>
          t in e
            ? eY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i);
      let e3 = (e) => e?.split(':'),
        e2 = (e) => {
          let t = e && e3(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        e8 = (e) => {
          let t = e && e3(e);
          if (t) return t.pop();
        };
      function e4(e) {
        if (!e) throw Error('No recap provided, value is undefined');
        if (!e.att) throw Error('No `att` property found');
        let t = Object.keys(e.att);
        if (!(null != t && t.length)) throw Error('No resources found in `att` property');
        t.forEach((t) => {
          let i = e.att[t];
          if (Array.isArray(i) || 'object' != typeof i)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(i).length) throw Error(`Resource object is empty: ${t}`);
          Object.keys(i).forEach((e) => {
            let t = i[e];
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
      function e9(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function e7(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function te(e, ...t) {
        if (!e7(e)) throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function tt(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function ti(e) {
        if ('boolean' != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let tr = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        ts = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function tn(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (e7(e)) e = th(e);
        else throw Error('Uint8Array expected, got ' + typeof e);
        return e;
      }
      function to(e, t, i = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (i && t.byteOffset % 4 != 0) throw Error('invalid output, must be aligned');
        return t;
      }
      function ta(e, t, i, r) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((i >> s) & n),
          a = Number(i & n),
          h = 4 * !!r,
          c = 4 * !r;
        e.setUint32(t + h, o, r), e.setUint32(t + c, a, r);
      }
      function th(e) {
        return Uint8Array.from(e);
      }
      function tc(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let tl = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        tu = tl('expand 16-byte k'),
        td = tl('expand 32-byte k'),
        tg = tr(tu),
        tp = tr(td);
      function tf(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function ty(e) {
        return e.byteOffset % 4 == 0;
      }
      let tb = 0x100000000 - 1,
        tm = new Uint32Array(),
        tw = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class tv {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            te((e = tn(e)), 32);
          let t = tw(e, 0),
            i = tw(e, 2),
            r = tw(e, 4),
            s = tw(e, 6),
            n = tw(e, 8),
            o = tw(e, 10),
            a = tw(e, 12),
            h = tw(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
            (this.r[2] = ((i >>> 10) | (r << 6)) & 7939),
            (this.r[3] = ((r >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (h << 8)) & 8191),
            (this.r[9] = (h >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = tw(e, 16 + 2 * t);
        }
        process(e, t, i = !1) {
          let { h: r, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            h = s[3],
            c = s[4],
            l = s[5],
            u = s[6],
            d = s[7],
            g = s[8],
            p = s[9],
            f = tw(e, t + 0),
            y = tw(e, t + 2),
            b = tw(e, t + 4),
            m = tw(e, t + 6),
            w = tw(e, t + 8),
            E = tw(e, t + 10),
            x = tw(e, t + 12),
            _ = tw(e, t + 14),
            I = r[0] + (8191 & f),
            S = r[1] + (((f >>> 13) | (y << 3)) & 8191),
            P = r[2] + (((y >>> 10) | (b << 6)) & 8191),
            O = r[3] + (((b >>> 7) | (m << 9)) & 8191),
            A = r[4] + (((m >>> 4) | (w << 12)) & 8191),
            U = r[5] + ((w >>> 1) & 8191),
            T = r[6] + (((w >>> 14) | (E << 2)) & 8191),
            L = r[7] + (((E >>> 11) | (x << 5)) & 8191),
            N = r[8] + (((x >>> 8) | (_ << 8)) & 8191),
            C = r[9] + ((_ >>> 5) | (2048 * !i)),
            k = 0,
            R = 0 + I * n + 5 * p * S + 5 * g * P + 5 * d * O + 5 * u * A;
          (k = R >>> 13),
            (R &= 8191),
            (R += 5 * l * U + 5 * c * T + 5 * h * L + 5 * a * N + 5 * o * C),
            (k += R >>> 13),
            (R &= 8191);
          let j = k + I * o + S * n + 5 * p * P + 5 * g * O + 5 * d * A;
          (k = j >>> 13),
            (j &= 8191),
            (j += 5 * u * U + 5 * l * T + 5 * c * L + 5 * h * N + 5 * a * C),
            (k += j >>> 13),
            (j &= 8191);
          let D = k + I * a + S * o + P * n + 5 * p * O + 5 * g * A;
          (k = D >>> 13),
            (D &= 8191),
            (D += 5 * d * U + 5 * u * T + 5 * l * L + 5 * c * N + 5 * h * C),
            (k += D >>> 13),
            (D &= 8191);
          let M = k + I * h + S * a + P * o + O * n + 5 * p * A;
          (k = M >>> 13),
            (M &= 8191),
            (M += 5 * g * U + 5 * d * T + 5 * u * L + 5 * l * N + 5 * c * C),
            (k += M >>> 13),
            (M &= 8191);
          let z = k + I * c + S * h + P * a + O * o + A * n;
          (k = z >>> 13),
            (z &= 8191),
            (z += 5 * p * U + 5 * g * T + 5 * d * L + 5 * u * N + 5 * l * C),
            (k += z >>> 13),
            (z &= 8191);
          let B = k + I * l + S * c + P * h + O * a + A * o;
          (k = B >>> 13),
            (B &= 8191),
            (B += U * n + 5 * p * T + 5 * g * L + 5 * d * N + 5 * u * C),
            (k += B >>> 13),
            (B &= 8191);
          let $ = k + I * u + S * l + P * c + O * h + A * a;
          (k = $ >>> 13),
            ($ &= 8191),
            ($ += U * o + T * n + 5 * p * L + 5 * g * N + 5 * d * C),
            (k += $ >>> 13),
            ($ &= 8191);
          let K = k + I * d + S * u + P * l + O * c + A * h;
          (k = K >>> 13),
            (K &= 8191),
            (K += U * a + T * o + L * n + 5 * p * N + 5 * g * C),
            (k += K >>> 13),
            (K &= 8191);
          let H = k + I * g + S * d + P * u + O * l + A * c;
          (k = H >>> 13),
            (H &= 8191),
            (H += U * h + T * a + L * o + N * n + 5 * p * C),
            (k += H >>> 13),
            (H &= 8191);
          let F = k + I * p + S * g + P * d + O * u + A * l;
          (k = F >>> 13),
            (F &= 8191),
            (F += U * c + T * h + L * a + N * o + C * n),
            (k += F >>> 13),
            (F &= 8191),
            (R = 8191 & (k = ((k = ((k << 2) + k) | 0) + R) | 0)),
            (k >>>= 13),
            (j += k),
            (r[0] = R),
            (r[1] = j),
            (r[2] = D),
            (r[3] = M),
            (r[4] = z),
            (r[5] = B),
            (r[6] = $),
            (r[7] = K),
            (r[8] = H),
            (r[9] = F);
        }
        finalize() {
          let { h: e, pad: t } = this,
            i = new Uint16Array(10),
            r = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++) (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * r),
            (r = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += r),
            (r = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += r),
            (i[0] = e[0] + 5),
            (r = i[0] >>> 13),
            (i[0] &= 8191);
          for (let t = 1; t < 10; t++) (i[t] = e[t] + r), (r = i[t] >>> 13), (i[t] &= 8191);
          i[9] -= 8192;
          let s = (1 ^ r) - 1;
          for (let e = 0; e < 10; e++) i[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | i[t];
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
          for (let i = 1; i < 8; i++)
            (n = (((e[i] + t[i]) | 0) + (n >>> 16)) | 0), (e[i] = 65535 & n);
          tc(i);
        }
        update(e) {
          tt(this);
          let { buffer: t, blockLen: i } = this,
            r = (e = tn(e)).length;
          for (let s = 0; s < r; ) {
            let n = Math.min(i - this.pos, r - s);
            if (n === i) {
              for (; i <= r - s; s += i) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + n), this.pos),
              (this.pos += n),
              (s += n),
              this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          tc(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          tt(this),
            (function (e, t) {
              te(e);
              let i = t.outputLen;
              if (e.length < i)
                throw Error('digestInto() expects output buffer of length at least ' + i);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: i } = this,
            { pos: r } = this;
          if (r) {
            for (t[r++] = 1; r < 16; r++) t[r] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++) (e[s++] = i[t] >>> 0), (e[s++] = i[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
      }
      let tE = (function (e) {
          let t = (t, i) => e(i).update(tn(t)).digest(),
            i = e(new Uint8Array(32));
          return (
            (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = (t) => e(t)), t
          );
        })((e) => new tv(e)),
        tx = (function (e, t) {
          let {
            allowShortKeys: i,
            extendNonceFn: r,
            counterLength: s,
            counterRight: n,
            rounds: o,
          } = (function (e, t) {
            if (null == t || 'object' != typeof t) throw Error('options must be defined');
            return Object.assign(e, t);
          })({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, t);
          if ('function' != typeof e) throw Error('core must be a function');
          return (
            e9(s),
            e9(o),
            ti(n),
            ti(i),
            (t, a, h, c, l = 0) => {
              te(t), te(a), te(h);
              let u = h.length;
              if ((void 0 === c && (c = new Uint8Array(u)), te(c), e9(l), l < 0 || l >= tb))
                throw Error('arx: counter overflow');
              if (c.length < u)
                throw Error(`arx: output (${c.length}) is shorter than data (${u})`);
              let d = [],
                g = t.length,
                p,
                f;
              if (32 === g) d.push((p = th(t))), (f = tp);
              else if (16 === g && i)
                (p = new Uint8Array(32)).set(t), p.set(t, 16), (f = tg), d.push(p);
              else throw Error(`arx: invalid 32-byte key, got length=${g}`);
              ty(a) || d.push((a = th(a)));
              let y = tr(p);
              if (r) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                r(f, y, tr(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let b = 16 - s;
              if (b !== a.length) throw Error(`arx: nonce must be ${b} or 16 bytes`);
              if (12 !== b) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              return (
                (function (e, t, i, r, s, n, o, a) {
                  let h = s.length,
                    c = new Uint8Array(64),
                    l = tr(c),
                    u = ty(s) && ty(n),
                    d = u ? tr(s) : tm,
                    g = u ? tr(n) : tm;
                  for (let p = 0; p < h; o++) {
                    if ((e(t, i, r, l, o, a), o >= tb)) throw Error('arx: counter overflow');
                    let f = Math.min(64, h - p);
                    if (u && 64 === f) {
                      let e = p / 4;
                      if (p % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, i; t < 16; t++) g[(i = e + t)] = d[i] ^ l[t];
                      p += 64;
                      continue;
                    }
                    for (let e = 0, t; e < f; e++) n[(t = p + e)] = s[t] ^ c[e];
                    p += f;
                  }
                })(e, f, y, tr(a), h, c, l, o),
                tc(...d),
                c
              );
            }
          );
        })(
          function (e, t, i, r, s, n = 20) {
            let o = e[0],
              a = e[1],
              h = e[2],
              c = e[3],
              l = t[0],
              u = t[1],
              d = t[2],
              g = t[3],
              p = t[4],
              f = t[5],
              y = t[6],
              b = t[7],
              m = i[0],
              w = i[1],
              E = i[2],
              x = o,
              _ = a,
              I = h,
              S = c,
              P = l,
              O = u,
              A = d,
              U = g,
              T = p,
              L = f,
              N = y,
              C = b,
              k = s,
              R = m,
              j = w,
              D = E;
            for (let e = 0; e < n; e += 2)
              (T = (T + (k = tf(k ^ (x = (x + P) | 0), 16))) | 0),
                (x = (x + (P = tf(P ^ T, 12))) | 0),
                (T = (T + (k = tf(k ^ x, 8))) | 0),
                (P = tf(P ^ T, 7)),
                (L = (L + (R = tf(R ^ (_ = (_ + O) | 0), 16))) | 0),
                (_ = (_ + (O = tf(O ^ L, 12))) | 0),
                (L = (L + (R = tf(R ^ _, 8))) | 0),
                (O = tf(O ^ L, 7)),
                (N = (N + (j = tf(j ^ (I = (I + A) | 0), 16))) | 0),
                (I = (I + (A = tf(A ^ N, 12))) | 0),
                (N = (N + (j = tf(j ^ I, 8))) | 0),
                (A = tf(A ^ N, 7)),
                (C = (C + (D = tf(D ^ (S = (S + U) | 0), 16))) | 0),
                (S = (S + (U = tf(U ^ C, 12))) | 0),
                (C = (C + (D = tf(D ^ S, 8))) | 0),
                (U = tf(U ^ C, 7)),
                (N = (N + (D = tf(D ^ (x = (x + O) | 0), 16))) | 0),
                (x = (x + (O = tf(O ^ N, 12))) | 0),
                (N = (N + (D = tf(D ^ x, 8))) | 0),
                (O = tf(O ^ N, 7)),
                (C = (C + (k = tf(k ^ (_ = (_ + A) | 0), 16))) | 0),
                (_ = (_ + (A = tf(A ^ C, 12))) | 0),
                (C = (C + (k = tf(k ^ _, 8))) | 0),
                (A = tf(A ^ C, 7)),
                (T = (T + (R = tf(R ^ (I = (I + U) | 0), 16))) | 0),
                (I = (I + (U = tf(U ^ T, 12))) | 0),
                (T = (T + (R = tf(R ^ I, 8))) | 0),
                (U = tf(U ^ T, 7)),
                (L = (L + (j = tf(j ^ (S = (S + P) | 0), 16))) | 0),
                (S = (S + (P = tf(P ^ L, 12))) | 0),
                (L = (L + (j = tf(j ^ S, 8))) | 0),
                (P = tf(P ^ L, 7));
            let M = 0;
            (r[M++] = (o + x) | 0),
              (r[M++] = (a + _) | 0),
              (r[M++] = (h + I) | 0),
              (r[M++] = (c + S) | 0),
              (r[M++] = (l + P) | 0),
              (r[M++] = (u + O) | 0),
              (r[M++] = (d + A) | 0),
              (r[M++] = (g + U) | 0),
              (r[M++] = (p + T) | 0),
              (r[M++] = (f + L) | 0),
              (r[M++] = (y + N) | 0),
              (r[M++] = (b + C) | 0),
              (r[M++] = (s + k) | 0),
              (r[M++] = (m + R) | 0),
              (r[M++] = (w + j) | 0),
              (r[M++] = (E + D) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        t_ = new Uint8Array(16),
        tI = (e, t) => {
          e.update(t);
          let i = t.length % 16;
          i && e.update(t_.subarray(i));
        },
        tS = new Uint8Array(32);
      function tP(e, t, i, r, s) {
        let n = e(t, i, tS),
          o = tE.create(n);
        s && tI(o, s), tI(o, r);
        let a = new Uint8Array(16),
          h = ts(a);
        ta(h, 0, BigInt(s ? s.length : 0), !0), ta(h, 8, BigInt(r.length), !0), o.update(a);
        let c = o.digest();
        return tc(n, a), c;
      }
      let tO = ((e, t) => {
        function i(r, ...s) {
          if ((te(r), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error('nonce / iv required');
            e.varSizeNonce ? te(t) : te(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && te(s[1]);
          let o = t(r, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error('cipher output not supported');
                te(t);
              }
            },
            h = !1;
          return {
            encrypt(e, t) {
              if (h) throw Error('cannot encrypt() twice with same key + nonce');
              return (h = !0), te(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((te(e), n && e.length < n))
                throw Error('invalid ciphertext length: smaller than tagLength=' + n);
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(i, e), i;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, i, r) => ({
          encrypt(s, n) {
            let o = s.length;
            (n = to(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, i, a, a, 1);
            let h = tP(e, t, i, a, r);
            return n.set(h, o), tc(h), n;
          },
          decrypt(s, n) {
            n = to(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              h = tP(e, t, i, o, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let i = 0;
                for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
                return 0 === i;
              })(a, h)
            )
              throw Error('invalid tag');
            return n.set(s.subarray(0, -16)), e(t, i, n, n, 1), tc(h), n;
          },
        }))(tx)
      );
      class tA extends eT {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), ef(e);
          let i = eU(t);
          if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            s = new Uint8Array(r);
          s.set(i.length > r ? e.create().update(i).digest() : i);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return ey(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          ey(this),
            ep(e, this.outputLen),
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
          let { oHash: t, iHash: i, finished: r, destroyed: s, blockLen: n, outputLen: o } = this;
          return (
            (e.finished = r),
            (e.destroyed = s),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = i._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let tU = (e, t, i) => new tA(e, t).update(i).digest();
      tU.create = (e, t) => new tA(e, t);
      let tT = new Uint8Array([0]),
        tL = new Uint8Array(),
        tN = (e, t, i, r, s) =>
          (function (e, t, i, r = 32) {
            if ((ef(e), eg(r), r > 255 * e.outputLen))
              throw Error('Length should be <= 255*HashLen');
            let s = Math.ceil(r / e.outputLen);
            void 0 === i && (i = tL);
            let n = new Uint8Array(s * e.outputLen),
              o = tU.create(e, t),
              a = o._cloneInto(),
              h = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (tT[0] = t + 1),
                a
                  .update(0 === t ? tL : h)
                  .update(i)
                  .update(tT)
                  .digestInto(h),
                n.set(h, e.outputLen * t),
                o._cloneInto(a);
            return o.destroy(), a.destroy(), h.fill(0), tT.fill(0), n.slice(0, r);
          })(
            e,
            (function (e, t, i) {
              return ef(e), void 0 === i && (i = new Uint8Array(e.outputLen)), tU(e, eU(i), eU(t));
            })(e, t, i),
            r,
            s
          );
      class tC extends eT {
        constructor(e, t, i, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = i),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = eS(this.buffer));
        }
        update(e) {
          ey(this);
          let { view: t, buffer: i, blockLen: r } = this,
            s = (e = eU(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(r - this.pos, s - n);
            if (o === r) {
              let t = eS(e);
              for (; r <= s - n; n += r) this.process(t, n);
              continue;
            }
            i.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          ey(this), eb(e, this), (this.finished = !0);
          let { buffer: t, view: i, blockLen: r, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > r - n && (this.process(i, 0), (n = 0));
          for (let e = n; e < r; e++) t[e] = 0;
          (function (e, t, i, r) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((i >> s) & n),
              a = Number(i & n),
              h = 4 * !!r,
              c = 4 * !r;
            e.setUint32(t + h, o, r), e.setUint32(t + c, a, r);
          })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
          let o = eS(e),
            a = this.outputLen;
          if (a % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let h = a / 4,
            c = this.get();
          if (h > c.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < h; e++) o.setUint32(4 * e, c[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: i, length: r, finished: s, destroyed: n, pos: o } = this;
          return (
            (e.length = r),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            r % t && e.buffer.set(i),
            e
          );
        }
      }
      let tk = new Uint32Array([
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
        tR = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        tj = new Uint32Array(64);
      class tD extends tC {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | tR[0]),
            (this.B = 0 | tR[1]),
            (this.C = 0 | tR[2]),
            (this.D = 0 | tR[3]),
            (this.E = 0 | tR[4]),
            (this.F = 0 | tR[5]),
            (this.G = 0 | tR[6]),
            (this.H = 0 | tR[7]);
        }
        get() {
          let { A: e, B: t, C: i, D: r, E: s, F: n, G: o, H: a } = this;
          return [e, t, i, r, s, n, o, a];
        }
        set(e, t, i, r, s, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | i),
            (this.D = 0 | r),
            (this.E = 0 | s),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) tj[i] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = tj[e - 15],
              i = tj[e - 2],
              r = eP(t, 7) ^ eP(t, 18) ^ (t >>> 3),
              s = eP(i, 17) ^ eP(i, 19) ^ (i >>> 10);
            tj[e] = (s + tj[e - 7] + r + tj[e - 16]) | 0;
          }
          let { A: i, B: r, C: s, D: n, E: o, F: a, G: h, H: c } = this;
          for (let e = 0; e < 64; e++) {
            var l, u, d, g;
            let t =
                (c +
                  (eP(o, 6) ^ eP(o, 11) ^ eP(o, 25)) +
                  (((l = o) & a) ^ (~l & h)) +
                  tk[e] +
                  tj[e]) |
                0,
              p =
                ((eP(i, 2) ^ eP(i, 13) ^ eP(i, 22)) +
                  (((u = i) & (d = r)) ^ (u & (g = s)) ^ (d & g))) |
                0;
            (c = h),
              (h = a),
              (a = o),
              (o = (n + t) | 0),
              (n = s),
              (s = r),
              (r = i),
              (i = (t + p) | 0);
          }
          (i = (i + this.A) | 0),
            (r = (r + this.B) | 0),
            (s = (s + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (h = (h + this.G) | 0),
            (c = (c + this.H) | 0),
            this.set(i, r, s, n, o, a, h, c);
        }
        roundClean() {
          tj.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let tM = eL(() => new tD()),
        tz = BigInt(0);
      function tB(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function t$(e) {
        if (!tB(e)) throw Error('Uint8Array expected');
      }
      let tK = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0')),
        tH = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function tF(e) {
        return e >= tH._0 && e <= tH._9
          ? e - tH._0
          : e >= tH.A && e <= tH.F
            ? e - (tH.A - 10)
            : e >= tH.a && e <= tH.f
              ? e - (tH.a - 10)
              : void 0;
      }
      function tq(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          i = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let r = new Uint8Array(i);
        for (let t = 0, s = 0; t < i; t++, s += 2) {
          let i = tF(e.charCodeAt(s)),
            n = tF(e.charCodeAt(s + 1));
          if (void 0 === i || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          r[t] = 16 * i + n;
        }
        return r;
      }
      function tV(e) {
        return (
          t$(e),
          (function (e) {
            if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
            return '' === e ? tz : BigInt('0x' + e);
          })(
            (function (e) {
              t$(e);
              let t = '';
              for (let i = 0; i < e.length; i++) t += tK[e[i]];
              return t;
            })(Uint8Array.from(e).reverse())
          )
        );
      }
      function tG(e, t, i) {
        let r;
        if ('string' == typeof t)
          try {
            r = tq(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (tB(t)) r = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = r.length;
        if ('number' == typeof i && s !== i)
          throw Error(e + ' of length ' + i + ' expected, got ' + s);
        return r;
      }
      let tJ = (e) => 'bigint' == typeof e && tz <= e;
      function tW(e, t, i, r) {
        if (!(tJ(t) && tJ(i) && tJ(r)) || !(i <= t) || !(t < r))
          throw Error('expected valid ' + e + ': ' + i + ' <= n < ' + r + ', got ' + t);
      }
      let tZ = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || tB(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        },
        tY = BigInt(0),
        tX = BigInt(1);
      function tQ(e, t) {
        let i = e % t;
        return i >= tY ? i : t + i;
      }
      function t0(e, t, i) {
        let r = e;
        for (; t-- > tY; ) (r *= r), (r %= i);
        return r;
      }
      BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let t1 = BigInt(0),
        t5 = BigInt(1),
        t6 = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        );
      BigInt(0);
      let t3 = BigInt(1),
        t2 = BigInt(2),
        t8 = BigInt(3),
        t4 = BigInt(5);
      BigInt(8);
      let t9 = (function (e) {
          let t =
              ((function (e, t, i = {}) {
                let r = (t, i, r) => {
                  let s = tZ[i];
                  if ('function' != typeof s) throw Error('invalid validator function');
                  let n = e[t];
                  if (!(r && void 0 === n) && !s(n, e))
                    throw Error('param ' + String(t) + ' is invalid. Expected ' + i + ', got ' + n);
                };
                for (let [e, i] of Object.entries(t)) r(e, i, !1);
                for (let [e, t] of Object.entries(i)) r(e, t, !0);
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
            { P: i } = t,
            r = (e) => tQ(e, i),
            s = t.montgomeryBits,
            n = Math.ceil(s / 8),
            o = t.nByteLength,
            a = t.adjustScalarBytes || ((e) => e),
            h =
              t.powPminus2 ||
              ((e) =>
                (function (e, t, i) {
                  if (t < tY) throw Error('invalid exponent, negatives unsupported');
                  if (i <= tY) throw Error('invalid modulus');
                  if (i === tX) return tY;
                  let r = tX;
                  for (; t > tY; ) t & tX && (r = (r * e) % i), (e = (e * e) % i), (t >>= tX);
                  return r;
                })(e, i - BigInt(2), i));
          function c(e, t, i) {
            let s = r(e * (t - i));
            return [(t = r(t - s)), (i = r(i + s))];
          }
          let l = (t.a - BigInt(2)) / BigInt(4);
          function u(e) {
            var t;
            return tq((t = r(e)).toString(16).padStart(2 * n, '0')).reverse();
          }
          function d(e, t) {
            let d = (function (e, t) {
              tW('u', e, t1, i), tW('scalar', t, t1, i);
              let n = t5,
                o = t1,
                a = e,
                u = t5,
                d = t1,
                g;
              for (let i = BigInt(s - 1); i >= t1; i--) {
                let s = (t >> i) & t5;
                (d ^= s),
                  (n = (g = c(d, n, a))[0]),
                  (a = g[1]),
                  (o = (g = c(d, o, u))[0]),
                  (u = g[1]),
                  (d = s);
                let h = n + o,
                  p = r(h * h),
                  f = n - o,
                  y = r(f * f),
                  b = p - y,
                  m = a + u,
                  w = r((a - u) * h),
                  E = r(m * f),
                  x = w + E,
                  _ = w - E;
                (a = r(x * x)), (u = r(e * r(_ * _))), (n = r(p * y)), (o = r(b * (p + r(l * b))));
              }
              return (
                (n = (g = c(d, n, a))[0]),
                (a = g[1]),
                (o = (g = c(d, o, u))[0]),
                (u = g[1]),
                r(n * h(o))
              );
            })(
              (function (e) {
                let t = tG('u coordinate', e, n);
                return 32 === o && (t[31] &= 127), tV(t);
              })(t),
              (function (e) {
                let t = tG('scalar', e),
                  i = t.length;
                if (i !== n && i !== o)
                  throw Error(
                    'invalid scalar, expected ' + ('' + n + ' or ') + o + ' bytes, got ' + i
                  );
                return tV(a(t));
              })(e)
            );
            if (d === t1) throw Error('invalid private or public key received');
            return u(d);
          }
          let g = u(t.Gu);
          function p(e) {
            return d(e, g);
          }
          return {
            scalarMult: d,
            scalarMultBase: p,
            getSharedSecret: (e, t) => d(e, t),
            getPublicKey: (e) => p(e),
            utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
            GuBytes: g,
          };
        })({
          P: t6,
          a: BigInt(486662),
          montgomeryBits: 255,
          nByteLength: 32,
          Gu: BigInt(9),
          powPminus2: (e) => {
            let { pow_p_5_8: t, b2: i } = (function (e) {
              let t = BigInt(10),
                i = BigInt(20),
                r = BigInt(40),
                s = BigInt(80),
                n = (((e * e) % t6) * e) % t6,
                o = (t0(n, t2, t6) * n) % t6,
                a = (t0(o, t3, t6) * e) % t6,
                h = (t0(a, t4, t6) * a) % t6,
                c = (t0(h, t, t6) * h) % t6,
                l = (t0(c, i, t6) * c) % t6,
                u = (t0(l, r, t6) * l) % t6,
                d = (t0(u, s, t6) * u) % t6,
                g = (t0(d, s, t6) * u) % t6,
                p = (t0(g, t, t6) * h) % t6;
              return { pow_p_5_8: (t0(p, t2, t6) * e) % t6, b2: n };
            })(e);
            return tQ(t0(t, t8, t6) * i, t6);
          },
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          randomBytes: eN,
        }),
        t7 = 'base10',
        ie = 'base16',
        it = 'base64pad',
        ii = 'utf8';
      function ir() {
        return H(eN(32), ie);
      }
      function is(e) {
        return H(tM(K(e, ii)), ie);
      }
      function io(e) {
        return Number(H(e, t7));
      }
      function ia(e) {
        let { encoding: t = it } = e;
        if (2 === io(e.type)) return H(j([e.type, e.sealed]), t);
        if (1 === io(e.type)) {
          if (typeof e.senderPublicKey > 'u')
            throw Error('Missing sender public key for type 1 envelope');
          return H(j([e.type, e.senderPublicKey, e.iv, e.sealed]), t);
        }
        return H(j([e.type, e.iv, e.sealed]), t);
      }
      function ih(e) {
        let { encoded: t, encoding: i = it } = e,
          r = K(t, i),
          s = r.slice(0, 1);
        if (1 === io(s)) {
          let e = r.slice(1, 33),
            t = r.slice(33, 45);
          return { type: s, sealed: r.slice(45), iv: t, senderPublicKey: e };
        }
        if (2 === io(s)) return { type: s, sealed: r.slice(1), iv: eN(12) };
        let n = r.slice(1, 13);
        return { type: s, sealed: r.slice(13), iv: n };
      }
      function ic(e) {
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
      function il(e) {
        return (
          1 === e.type &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function iu(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function id(e) {
        let t = q.CG[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function ig(e) {
        var t;
        if (!e.includes('wc:')) {
          let t = ed(e);
          null != t && t.includes('wc:') && (e = t);
        }
        let i = (e = (e = e.includes('wc://') ? e.replace('wc://', '') : e).includes('wc:')
            ? e.replace('wc:', '')
            : e).indexOf(':'),
          r = -1 !== e.indexOf('?') ? e.indexOf('?') : void 0,
          s = e.substring(0, i),
          n = e.substring(i + 1, r).split('@'),
          o = new URLSearchParams('u' > typeof r ? e.substring(r) : ''),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        let h = 'string' == typeof a.methods ? a.methods.split(',') : void 0;
        return {
          protocol: s,
          topic: (t = n[0]).startsWith('//') ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = '-') {
            let i = {},
              r = 'relay' + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(r)) {
                  let s = t.replace(r, ''),
                    n = e[t];
                  i[s] = n;
                }
              }),
              i
            );
          })(a),
          methods: h,
          expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0,
        };
      }
      function ip(e) {
        let t = new URLSearchParams(),
          i = (function (e, t = '-') {
            let i = {};
            return (
              Object.keys(e).forEach((r) => {
                e[r] && (i['relay' + t + r] = e[r]);
              }),
              i
            );
          })(e.relay);
        Object.keys(i)
          .sort()
          .forEach((e) => {
            t.set(e, i[e]);
          }),
          t.set('symKey', e.symKey),
          e.expiryTimestamp && t.set('expiryTimestamp', e.expiryTimestamp.toString()),
          e.methods && t.set('methods', e.methods.join(','));
        let r = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${r}`;
      }
      var iy = Object.defineProperty,
        ib = Object.defineProperties,
        im = Object.getOwnPropertyDescriptors,
        iw = Object.getOwnPropertySymbols,
        iv = Object.prototype.hasOwnProperty,
        iE = Object.prototype.propertyIsEnumerable,
        ix = (e, t, i) =>
          t in e
            ? iy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        i_ = (e, t) => {
          for (var i in t || (t = {})) iv.call(t, i) && ix(e, i, t[i]);
          if (iw) for (var i of iw(t)) iE.call(t, i) && ix(e, i, t[i]);
          return e;
        },
        iI = (e, t) => ib(e, im(t));
      function iS(e) {
        return e.includes(':');
      }
      let iP = {
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
        iO = {
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
      function iA(e, t) {
        let { message: i, code: r } = iO[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function iU(e, t) {
        let { message: i, code: r } = iP[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function iT(e) {
        return typeof e > 'u';
      }
      function iL(e, t) {
        return !!(t && iT(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function iN(e) {
        var t, i;
        let r = !0;
        return Array.isArray((t = e)) ? e.length && (r = e.every((e) => iL(e, !1))) : (r = !1), r;
      }
      function iC(e) {
        return 'u' > typeof e;
      }
      function ik() {
        let e = Q();
        return new Promise((t) => {
          switch (e) {
            case W.browser:
              t(X() && navigator?.onLine);
              break;
            case W.reactNative:
              t(iR());
              break;
            case W.node:
            default:
              t(!0);
          }
        });
      }
      async function iR() {
        if (Y() && 'u' > typeof i.g && null != i.g && i.g.NetInfo) {
          let e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      var ij = i(84214),
        iD = i(32034),
        iM = i(60172),
        iz = i(51642).Buffer;
      let iB = 'core',
        i$ = `wc@2:${iB}:`,
        iK = { logger: 'error' },
        iH = { database: ':memory:' },
        iF = 'client_ed25519_seed',
        iq = U.ONE_DAY,
        iV = U.SIX_HOURS,
        iG = 'wss://relay.walletconnect.org',
        iJ = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          publish: 'relayer_publish',
        },
        iW = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        iZ = '2.19.1',
        iY = { link_mode: 'link_mode', relay: 'relay' },
        iX = { inbound: 'inbound', outbound: 'outbound' },
        iQ = 'WALLETCONNECT_LINK_MODE_APPS',
        i0 = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        i1 =
          (U.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: U.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: U.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: U.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: U.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: U.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: U.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        i5 = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        i6 = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        i3 = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync',
        },
        i2 = 'https://verify.walletconnect.org',
        i8 = `${i2}/v3`,
        i4 = ['https://verify.walletconnect.com', i2],
        i9 = {
          pairing_started: 'pairing_started',
          pairing_uri_validation_success: 'pairing_uri_validation_success',
          pairing_uri_not_expired: 'pairing_uri_not_expired',
          store_new_pairing: 'store_new_pairing',
          subscribing_pairing_topic: 'subscribing_pairing_topic',
          subscribe_pairing_topic_success: 'subscribe_pairing_topic_success',
          existing_pairing: 'existing_pairing',
          pairing_not_expired: 'pairing_not_expired',
          emit_inactive_pairing: 'emit_inactive_pairing',
        },
        i7 = {
          no_internet_connection: 'no_internet_connection',
          malformed_pairing_uri: 'malformed_pairing_uri',
          active_pairing_already_exists: 'active_pairing_already_exists',
          subscribe_pairing_topic_failure: 'subscribe_pairing_topic_failure',
          pairing_expired: 'pairing_expired',
        };
      var re = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== i[o]) throw TypeError(n + ' is ambiguous');
          i[o] = s;
        }
        var a = e.length,
          h = e.charAt(0),
          c = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var r = 0, s = 0; e[t] === h; ) r++, t++;
            for (var n = ((e.length - t) * c + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var l = i[e.charCodeAt(t)];
              if (255 === l) return;
              for (var u = 0, d = n - 1; (0 !== l || u < s) && -1 !== d; d--, u++)
                (l += (a * o[d]) >>> 0), (o[d] = l % 256 >>> 0), (l = (l / 256) >>> 0);
              if (0 !== l) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var g = n - s; g !== n && 0 === o[g]; ) g++;
              for (var p = new Uint8Array(r + (n - g)), f = r; g !== n; ) p[f++] = o[g++];
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
            for (var i = 0, r = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, i++;
            for (var o = ((n - s) * l + 1) >>> 0, c = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, g = o - 1; (0 !== u || d < r) && -1 !== g; g--, d++)
                (u += (256 * c[g]) >>> 0), (c[g] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (r = d), s++;
            }
            for (var p = o - r; p !== o && 0 === c[p]; ) p++;
            for (var f = h.repeat(i); p < o; ++p) f += e.charAt(c[p]);
            return f;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var i = u(e);
            if (i) return i;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let rt = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        ri = (e) => new TextEncoder().encode(e),
        rr = (e) => new TextDecoder().decode(e);
      class rs {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class rn {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
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
          return ra(this, e);
        }
      }
      class ro {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return ra(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let ra = (e, t) =>
        new ro({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class rh {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new rs(e, t, i)),
            (this.decoder = new rn(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let rc = ({ name: e, prefix: t, encode: i, decode: r }) => new rh(e, t, i, r),
        rl = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = re(i, t);
          return rc({ prefix: e, name: t, encode: r, decode: (e) => rt(s(e)) });
        },
        ru = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * i) / 8) | 0),
            a = 0,
            h = 0,
            c = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (h = (h << i) | n), (a += i) >= 8 && ((a -= 8), (o[c++] = 255 & (h >> a)));
          }
          if (a >= i || 255 & (h << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        rd = (e, t, i) => {
          let r = '=' === t[t.length - 1],
            s = (1 << i) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let r = 0; r < e.length; ++r)
            for (a = (a << 8) | e[r], o += 8; o > i; ) (o -= i), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (i - o))]), r)) for (; (n.length * i) & 7; ) n += '=';
          return n;
        },
        rg = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          rc({ prefix: t, name: e, encode: (e) => rd(e, r, i), decode: (t) => ru(t, r, i, e) });
      var rp = Object.freeze({
          __proto__: null,
          identity: rc({
            prefix: '\0',
            name: 'identity',
            encode: (e) => rr(e),
            decode: (e) => ri(e),
          }),
        }),
        rf = Object.freeze({
          __proto__: null,
          base2: rg({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        ry = Object.freeze({
          __proto__: null,
          base8: rg({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        rb = Object.freeze({
          __proto__: null,
          base10: rl({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        rm = Object.freeze({
          __proto__: null,
          base16: rg({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: rg({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let rw = rg({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        rv = rg({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        rE = rg({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        rx = rg({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        r_ = rg({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        rI = rg({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        rS = rg({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var rP = Object.freeze({
          __proto__: null,
          base32: rw,
          base32upper: rv,
          base32pad: rE,
          base32padupper: rx,
          base32hex: r_,
          base32hexupper: rI,
          base32hexpad: rS,
          base32hexpadupper: rg({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: rg({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        rO = Object.freeze({
          __proto__: null,
          base36: rl({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: rl({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        rA = Object.freeze({
          __proto__: null,
          base58btc: rl({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: rl({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let rU = rg({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        rT = rg({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var rL = Object.freeze({
        __proto__: null,
        base64: rU,
        base64pad: rT,
        base64url: rg({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: rg({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let rN = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        rC = rN.reduce((e, t, i) => ((e[i] = t), e), []),
        rk = rN.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var rR = Object.freeze({
        __proto__: null,
        base256emoji: rc({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += rC[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = rk[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function rj(e, t, i) {
        (t = t || []), (i = i || 0);
        for (var r = i; e >= 0x80000000; ) (t[i++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
        return (t[i] = 0 | e), (rj.bytes = i - r + 1), t;
      }
      function rD(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((rD.bytes = 0), RangeError('Could not decode varint'));
          (i = e[n++]), (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)), (s += 7);
        } while (i >= 128);
        return (rD.bytes = n - t), r;
      }
      var rM = {
        encode: rj,
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
      let rz = (e, t, i = 0) => (rM.encode(e, t, i), t),
        rB = (e) => rM.encodingLength(e),
        r$ = (e, t) => {
          let i = t.byteLength,
            r = rB(e),
            s = r + rB(i),
            n = new Uint8Array(s + i);
          return rz(e, n, 0), rz(i, n, r), n.set(t, s), new rK(e, i, t, n);
        };
      class rK {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let rH = ({ name: e, code: t, encode: i }) => new rF(e, t, i);
      class rF {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? r$(this.code, t) : t.then((e) => r$(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let rq = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var rV = Object.freeze({
          __proto__: null,
          sha256: rH({ name: 'sha2-256', code: 18, encode: rq('SHA-256') }),
          sha512: rH({ name: 'sha2-512', code: 19, encode: rq('SHA-512') }),
        }),
        rG = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: rt, digest: (e) => r$(0, rt(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let rJ = { ...rp, ...rf, ...ry, ...rb, ...rm, ...rP, ...rO, ...rA, ...rL, ...rR };
      function rW(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...rV, ...rG });
      let rZ = rW(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        rY = rW(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        rX = { utf8: rZ, 'utf-8': rZ, hex: rJ.base16, latin1: rY, ascii: rY, binary: rY, ...rJ };
      var rQ = Object.defineProperty,
        r0 = (e, t, i) =>
          t in e
            ? rQ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r1 = (e, t, i) => r0(e, 'symbol' != typeof t ? t + '' : t, i);
      class r5 {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            r1(this, 'keychain', new Map()),
            r1(this, 'name', 'keychain'),
            r1(this, 'version', '0.3'),
            r1(this, 'initialized', !1),
            r1(this, 'storagePrefix', i$),
            r1(this, 'init', async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            r1(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            r1(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            r1(this, 'get', (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = iA('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            r1(this, 'del', async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, a.U5)(t, this.name));
        }
        get context() {
          return (0, a.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, ei(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? er(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var r6 = Object.defineProperty,
        r3 = (e, t, i) =>
          t in e
            ? r6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r2 = (e, t, i) => r3(e, 'symbol' != typeof t ? t + '' : t, i);
      class r8 {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            r2(this, 'name', 'crypto'),
            r2(this, 'keychain'),
            r2(this, 'randomSessionIdentifier', ir()),
            r2(this, 'initialized', !1),
            r2(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            r2(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            r2(this, 'getClientId', async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = L.TZ(e);
              return L.UF(t.publicKey);
            }),
            r2(this, 'generateKeyPair', () => {
              this.isInitialized();
              let e = (function () {
                let e = t9.utils.randomPrivateKey(),
                  t = t9.getPublicKey(e);
                return { privateKey: H(e, ie), publicKey: H(t, ie) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            r2(this, 'signJWT', async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = L.TZ(t),
                r = this.randomSessionIdentifier;
              return await L.FA(r, e, iq, i);
            }),
            r2(this, 'generateSharedKey', (e, t, i) => {
              var r;
              this.isInitialized();
              let s =
                ((r = this.getPrivateKey(e)),
                H(tN(tM, t9.getSharedSecret(K(r, ie), K(t, ie)), void 0, void 0, 32), ie));
              return this.setSymKey(s, i);
            }),
            r2(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              let i = t || H(tM(K(e, ie)), ie);
              return await this.keychain.set(i, e), i;
            }),
            r2(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            r2(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            r2(this, 'encode', async (e, t, i) => {
              this.isInitialized();
              let r = ic(i),
                s = (0, T.h)(t);
              if (2 === r.type)
                return (function (e, t) {
                  let i = K('2', t7),
                    r = eN(12);
                  return ia({ type: i, sealed: K(e, ii), iv: r, encoding: t });
                })(s, i?.encoding);
              if (il(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = r;
              return (function (e) {
                var t;
                let i = ((t = 'u' > typeof e.type ? e.type : 0), K(`${t}`, t7));
                if (1 === io(i) && typeof e.senderPublicKey > 'u')
                  throw Error('Missing sender public key for type 1 envelope');
                let r = 'u' > typeof e.senderPublicKey ? K(e.senderPublicKey, ie) : void 0,
                  s = 'u' > typeof e.iv ? K(e.iv, ie) : eN(12);
                return ia({
                  type: i,
                  sealed: tO(K(e.symKey, ie), s).encrypt(K(e.message, ii)),
                  iv: s,
                  senderPublicKey: r,
                  encoding: e.encoding,
                });
              })({ type: o, symKey: n, message: s, senderPublicKey: a, encoding: i?.encoding });
            }),
            r2(this, 'decode', async (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = ih({ encoded: e, encoding: t?.encoding });
                return ic({
                  type: io(i.type),
                  senderPublicKey:
                    'u' > typeof i.senderPublicKey ? H(i.senderPublicKey, ie) : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, i);
              if (2 === r.type) {
                let e = (function (e, t) {
                  let { sealed: i } = ih({ encoded: e, encoding: t });
                  return H(i, ii);
                })(t, i?.encoding);
                return (0, T.j)(e);
              }
              if (il(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let r = this.getSymKey(e),
                  s = (function (e) {
                    let t = K(e.symKey, ie),
                      { sealed: i, iv: r } = ih(e),
                      s = tO(t, r).decrypt(i);
                    if (null === s) throw Error('Failed to decrypt');
                    return H(s, ii);
                  })({ symKey: r, encoded: t, encoding: i?.encoding });
                return (0, T.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            r2(this, 'getPayloadType', (e, t = it) => io(ih({ encoded: e, encoding: t }).type)),
            r2(this, 'getPayloadSenderPublicKey', (e, t = it) => {
              let i = ih({ encoded: e, encoding: t });
              return i.senderPublicKey ? H(i.senderPublicKey, ie) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, a.U5)(t, this.name)),
            (this.keychain = i || new r5(this.core, this.logger));
        }
        get context() {
          return (0, a.oI)(this.logger);
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
            e = this.keychain.get(iF);
          } catch {
            (e = ir()), await this.keychain.set(iF, e);
          }
          return (function (e, t = 'utf8') {
            let i = rX[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ('utf8' === t || 'utf-8' === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, 'utf8')
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, 'base16');
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var r4 = Object.defineProperty,
        r9 = Object.defineProperties,
        r7 = Object.getOwnPropertyDescriptors,
        se = Object.getOwnPropertySymbols,
        st = Object.prototype.hasOwnProperty,
        si = Object.prototype.propertyIsEnumerable,
        sr = (e, t, i) =>
          t in e
            ? r4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ss = (e, t) => {
          for (var i in t || (t = {})) st.call(t, i) && sr(e, i, t[i]);
          if (se) for (var i of se(t)) si.call(t, i) && sr(e, i, t[i]);
          return e;
        },
        sn = (e, t) => r9(e, r7(t)),
        so = (e, t, i) => sr(e, 'symbol' != typeof t ? t + '' : t, i);
      class sa extends b {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            so(this, 'messages', new Map()),
            so(this, 'messagesWithoutClientAck', new Map()),
            so(this, 'name', 'messages'),
            so(this, 'version', '0.3'),
            so(this, 'initialized', !1),
            so(this, 'storagePrefix', i$),
            so(this, 'init', async () => {
              if (!this.initialized) {
                this.logger.trace('Initialized');
                try {
                  let e = await this.getRelayerMessages();
                  'u' > typeof e && (this.messages = e);
                  let t = await this.getRelayerMessagesWithoutClientAck();
                  'u' > typeof t && (this.messagesWithoutClientAck = t),
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
            so(this, 'set', async (e, t, i) => {
              this.isInitialized();
              let r = is(t),
                s = this.messages.get(e);
              if ((typeof s > 'u' && (s = {}), 'u' > typeof s[r])) return r;
              if (((s[r] = t), this.messages.set(e, s), i === iX.inbound)) {
                let i = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, sn(ss({}, i), { [r]: t }));
              }
              return await this.persist(), r;
            }),
            so(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            so(this, 'getWithoutAck', (e) => {
              this.isInitialized();
              let t = {};
              for (let i of e) {
                let e = this.messagesWithoutClientAck.get(i) || {};
                t[i] = Object.values(e);
              }
              return t;
            }),
            so(this, 'has', (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[is(t)])),
            so(this, 'ack', async (e, t) => {
              this.isInitialized();
              let i = this.messagesWithoutClientAck.get(e);
              if (typeof i > 'u') return;
              let r = is(t);
              delete i[r],
                0 === Object.keys(i).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, i),
                await this.persist();
            }),
            so(this, 'del', async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = (0, a.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, a.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get storageKeyWithoutClientAck() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            '//' +
            this.name +
            '_withoutClientAck'
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, ei(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(this.storageKeyWithoutClientAck, ei(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? er(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
          return 'u' > typeof e ? er(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var sh = Object.defineProperty,
        sc = Object.defineProperties,
        sl = Object.getOwnPropertyDescriptors,
        su = Object.getOwnPropertySymbols,
        sd = Object.prototype.hasOwnProperty,
        sg = Object.prototype.propertyIsEnumerable,
        sp = (e, t, i) =>
          t in e
            ? sh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sf = (e, t) => {
          for (var i in t || (t = {})) sd.call(t, i) && sp(e, i, t[i]);
          if (su) for (var i of su(t)) sg.call(t, i) && sp(e, i, t[i]);
          return e;
        },
        sy = (e, t) => sc(e, sl(t)),
        sb = (e, t, i) => sp(e, 'symbol' != typeof t ? t + '' : t, i);
      class sm extends m {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            sb(this, 'events', new r.EventEmitter()),
            sb(this, 'name', 'publisher'),
            sb(this, 'queue', new Map()),
            sb(this, 'publishTimeout', (0, U.toMiliseconds)(U.ONE_MINUTE)),
            sb(this, 'initialPublishTimeout', (0, U.toMiliseconds)(15 * U.ONE_SECOND)),
            sb(this, 'needsTransportRestart', !1),
            sb(this, 'publish', async (e, t, i) => {
              var r;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: i },
                });
              let s = i?.ttl || iV,
                n = iu(i),
                o = i?.prompt || !1,
                a = i?.tag || 0,
                h = i?.id || (0, iD.getBigIntRpcId)().toString(),
                c = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: h,
                    attestation: i?.attestation,
                    tvf: i?.tvf,
                  },
                },
                l = `Failed to publish payload, please try again. id:${h} tag:${a}`;
              try {
                let r = new Promise(async (r) => {
                  let n = ({ id: e }) => {
                    c.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(iJ.publish, n),
                      r(c));
                  };
                  this.relayer.events.on(iJ.publish, n);
                  let l = es(
                    new Promise((r, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: o,
                        tag: a,
                        id: h,
                        attestation: i?.attestation,
                        tvf: i?.tvf,
                      })
                        .then(r)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${h} tag:${a}`
                  );
                  try {
                    await l, this.events.removeListener(iJ.publish, n);
                  } catch (e) {
                    this.queue.set(h, sy(sf({}, c), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: h, topic: e, message: t, opts: i },
                }),
                  await es(r, this.publishTimeout, l);
              } catch (e) {
                if (
                  (this.logger.debug('Failed to Publish Payload'),
                  this.logger.error(e),
                  null != (r = i?.internal) && r.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(h);
              }
            }),
            sb(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            sb(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            sb(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            sb(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, a.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, a.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, i, r, s;
          let {
              topic: n,
              message: o,
              ttl: a = iV,
              prompt: h,
              tag: c,
              id: l,
              attestation: u,
              tvf: d,
            } = e,
            g = {
              method: id(iu().protocol).publish,
              params: sf({ topic: n, message: o, ttl: a, prompt: h, tag: c, attestation: u }, d),
              id: l,
            };
          iT(null == (t = g.params) ? void 0 : t.prompt) &&
            (null == (i = g.params) || delete i.prompt),
            iT(null == (r = g.params) ? void 0 : r.tag) && (null == (s = g.params) || delete s.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: g });
          let p = await this.relayer.request(g);
          return (
            this.relayer.events.emit(iJ.publish, e),
            this.logger.debug('Successfully Published Payload'),
            p
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let i = e.attempt + 1;
            this.queue.set(t, sy(sf({}, e), { attempt: i }));
            let { topic: r, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`
            ),
              await this.rpcPublish(
                sy(sf({}, e), {
                  topic: r,
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
          this.relayer.core.heartbeat.on(n.li.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1), this.relayer.events.emit(iJ.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(iJ.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var sw = Object.defineProperty,
        sv = (e, t, i) =>
          t in e
            ? sw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sE = (e, t, i) => sv(e, 'symbol' != typeof t ? t + '' : t, i);
      class sx {
        constructor() {
          sE(this, 'map', new Map()),
            sE(this, 'set', (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            sE(this, 'get', (e) => this.map.get(e) || []),
            sE(this, 'exists', (e, t) => this.get(e).includes(t)),
            sE(this, 'delete', (e, t) => {
              if (typeof t > 'u') {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let r = i.filter((e) => e !== t);
              if (!r.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, r);
            }),
            sE(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var s_ = Object.defineProperty,
        sI = Object.defineProperties,
        sS = Object.getOwnPropertyDescriptors,
        sP = Object.getOwnPropertySymbols,
        sO = Object.prototype.hasOwnProperty,
        sA = Object.prototype.propertyIsEnumerable,
        sU = (e, t, i) =>
          t in e
            ? s_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sT = (e, t) => {
          for (var i in t || (t = {})) sO.call(t, i) && sU(e, i, t[i]);
          if (sP) for (var i of sP(t)) sA.call(t, i) && sU(e, i, t[i]);
          return e;
        },
        sL = (e, t) => sI(e, sS(t)),
        sN = (e, t, i) => sU(e, 'symbol' != typeof t ? t + '' : t, i);
      class sC extends _ {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            sN(this, 'subscriptions', new Map()),
            sN(this, 'topicMap', new sx()),
            sN(this, 'events', new r.EventEmitter()),
            sN(this, 'name', 'subscription'),
            sN(this, 'version', '0.3'),
            sN(this, 'pending', new Map()),
            sN(this, 'cached', []),
            sN(this, 'initialized', !1),
            sN(this, 'storagePrefix', i$),
            sN(this, 'subscribeTimeout', (0, U.toMiliseconds)(U.ONE_MINUTE)),
            sN(this, 'initialSubscribeTimeout', (0, U.toMiliseconds)(15 * U.ONE_SECOND)),
            sN(this, 'clientId'),
            sN(this, 'batchSubscribeTopicsLimit', 500),
            sN(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            sN(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                let i = iu(t),
                  r = { topic: e, relay: i, transportType: t?.transportType };
                this.pending.set(e, r);
                let s = await this.rpcSubscribe(e, i, t);
                return (
                  'string' == typeof s &&
                    (this.onSubscribe(s, r),
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
            sN(this, 'unsubscribe', async (e, t) => {
              this.isInitialized(),
                'u' > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            sN(
              this,
              'isSubscribed',
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            sN(
              this,
              'isKnownTopic',
              (e) =>
                new Promise((t) => {
                  t(
                    this.topicMap.topics.includes(e) ||
                      this.pending.has(e) ||
                      this.cached.some((t) => t.topic === e)
                  );
                })
            ),
            sN(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            sN(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            sN(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            sN(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            sN(this, 'start', async () => {
              await this.onConnect();
            }),
            sN(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            sN(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            sN(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            sN(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(n.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(i0.created, async (e) => {
                  let t = i0.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(i0.deleted, async (e) => {
                  let t = i0.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, a.U5)(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return (0, a.oI)(this.logger);
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
        get hasAnyTopics() {
          return (
            this.topicMap.topics.length > 0 ||
            this.pending.size > 0 ||
            this.cached.length > 0 ||
            this.subscriptions.size > 0
          );
        }
        hasSubscription(e, t) {
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(i.map(async (i) => await this.unsubscribeById(e, i, t)));
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug('Unsubscribing Topic'),
            this.logger.trace({
              type: 'method',
              method: 'unsubscribe',
              params: { topic: e, id: t, opts: i },
            });
          try {
            let r = iu(i);
            await this.restartToComplete({ topic: e, id: t, relay: r }),
              await this.rpcUnsubscribe(e, t, r);
            let s = iU('USER_DISCONNECTED', `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug('Successfully Unsubscribed Topic'),
              this.logger.trace({
                type: 'method',
                method: 'unsubscribe',
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(e), e);
          }
        }
        async rpcSubscribe(e, t, i) {
          var r;
          (i && i?.transportType !== iY.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let s = { method: id(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
          let n = null == (r = i?.internal) ? void 0 : r.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (i?.transportType === iY.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  },
                  (0, U.toMiliseconds)(U.ONE_SECOND)
                ),
                t
              );
            let r = new Promise(async (t) => {
                let i = (r) => {
                  r.topic === e && (this.events.removeListener(i0.created, i), t(r.id));
                };
                this.events.on(i0.created, i);
                try {
                  let r = await es(
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
                  this.events.removeListener(i0.created, i), t(r);
                } catch {}
              }),
              o = await es(
                r,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!o && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return o ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(iJ.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: id(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: t });
          try {
            await await es(
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
            this.relayer.events.emit(iJ.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = {
            method: id(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i });
          try {
            t = await await es(
              new Promise((e, t) => {
                this.relayer
                  .request(i)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchFetchMessages failed, please try again'
            );
          } catch {
            this.relayer.events.emit(iJ.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let r = { method: id(i.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, sL(sT({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, sT({}, e)), this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
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
          this.subscriptions.set(e, sT({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(i0.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = iA('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug('Deleting subscription'),
            this.logger.trace({ type: 'method', method: 'deleteSubscription', id: e, reason: t });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(i0.deleted, sL(sT({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(i0.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let i = 0; i < t; i++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(i0.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = iA('RESTORE_WILL_OVERRIDE', this.name);
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
                e.map(async (e) => sL(sT({}, e), { id: await this.getSubscriptionId(e.topic) }))
              )
            ));
        }
        async batchFetchMessages(e) {
          var t;
          if (!e.length) return;
          this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
          let i = await this.rpcBatchFetchMessages(e);
          i &&
            i.messages &&
            (await ((t = (0, U.toMiliseconds)(U.ONE_SECOND)), new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(i.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async restartToComplete(e) {
          this.relayer.connected ||
            this.relayer.connecting ||
            (this.cached.push(e), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return is(e + (await this.getClientId()));
        }
      }
      var sk = Object.defineProperty,
        sR = Object.getOwnPropertySymbols,
        sj = Object.prototype.hasOwnProperty,
        sD = Object.prototype.propertyIsEnumerable,
        sM = (e, t, i) =>
          t in e
            ? sk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sz = (e, t) => {
          for (var i in t || (t = {})) sj.call(t, i) && sM(e, i, t[i]);
          if (sR) for (var i of sR(t)) sD.call(t, i) && sM(e, i, t[i]);
          return e;
        },
        sB = (e, t, i) => sM(e, 'symbol' != typeof t ? t + '' : t, i);
      class s$ extends w {
        constructor(e) {
          super(e),
            sB(this, 'protocol', 'wc'),
            sB(this, 'version', 2),
            sB(this, 'core'),
            sB(this, 'logger'),
            sB(this, 'events', new r.EventEmitter()),
            sB(this, 'provider'),
            sB(this, 'messages'),
            sB(this, 'subscriber'),
            sB(this, 'publisher'),
            sB(this, 'name', 'relayer'),
            sB(this, 'transportExplicitlyClosed', !1),
            sB(this, 'initialized', !1),
            sB(this, 'connectionAttemptInProgress', !1),
            sB(this, 'relayUrl'),
            sB(this, 'projectId'),
            sB(this, 'packageName'),
            sB(this, 'bundleId'),
            sB(this, 'hasExperiencedNetworkDisruption', !1),
            sB(this, 'pingTimeout'),
            sB(this, 'heartBeatTimeout', (0, U.toMiliseconds)(U.THIRTY_SECONDS + U.FIVE_SECONDS)),
            sB(this, 'reconnectTimeout'),
            sB(this, 'connectPromise'),
            sB(this, 'reconnectInProgress', !1),
            sB(this, 'requestsInFlight', []),
            sB(this, 'connectTimeout', (0, U.toMiliseconds)(15 * U.ONE_SECOND)),
            sB(this, 'request', async (e) => {
              var t, i;
              this.logger.debug('Publishing Request Payload');
              let r = e.id || (0, iD.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  { id: r, method: e.method, topic: null == (t = e.params) ? void 0 : t.topic },
                  'relayer.request - publishing...'
                );
                let s = `${r}:${(null == (i = e.params) ? void 0 : i.tag) || ''}`;
                this.requestsInFlight.push(s);
                let n = await this.provider.request(e);
                return (this.requestsInFlight = this.requestsInFlight.filter((e) => e !== s)), n;
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${r}`), e);
              }
            }),
            sB(this, 'resetPingTimeout', () => {
              Z() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var e, t, i, r;
                  try {
                    this.logger.debug({}, 'pingTimeout: Connection stalled, terminating...'),
                      null ==
                        (r =
                          null ==
                          (i =
                            null == (t = null == (e = this.provider) ? void 0 : e.connection)
                              ? void 0
                              : t.socket)
                            ? void 0
                            : i.terminate) || r.call(i);
                  } catch (e) {
                    this.logger.warn(e, e?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            sB(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            sB(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \uD83D\uDEDC'),
                this.startPingTimeout(),
                this.events.emit(iJ.connect);
            }),
            sB(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            sB(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(iJ.error, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            sB(this, 'registerProviderListeners', () => {
              this.provider.on(iW.payload, this.onPayloadHandler),
                this.provider.on(iW.connect, this.onConnectHandler),
                this.provider.on(iW.disconnect, this.onDisconnectHandler),
                this.provider.on(iW.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              'u' > typeof e.logger && 'string' != typeof e.logger
                ? (0, a.U5)(e.logger, this.name)
                : (0, a.h6)((0, a.iP)({ level: e.logger || 'error' }))),
            (this.messages = new sa(this.logger, e.core)),
            (this.subscriber = new sC(this, this.logger)),
            (this.publisher = new sm(this, this.logger)),
            (this.relayUrl = e?.relayUrl || iG),
            (this.projectId = e.projectId),
            Y() &&
            'u' > typeof i.g &&
            'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
            (null == i.g ? void 0 : i.g.Platform.OS) === 'android'
              ? (this.packageName = ee())
              : Y() &&
                'u' > typeof i.g &&
                'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
                (null == i.g ? void 0 : i.g.Platform.OS) === 'ios' &&
                (this.bundleId = ee()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace('Initialized'),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.hasAnyTopics)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        get context() {
          return (0, a.oI)(this.logger);
        }
        get connected() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : i.readyState) === 1
          );
        }
        get connecting() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : i.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent(
              { topic: e, message: t, publishedAt: Date.now(), transportType: iY.relay },
              iX.outbound
            );
        }
        async subscribe(e, t) {
          var i, r, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== 'relay') ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish) > 'u' ||
              (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish),
            o = (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) || '',
            a,
            h = (t) => {
              t.topic === e && (this.subscriber.off(i0.created, h), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(i0.created, h);
              }),
              new Promise(async (i, r) => {
                (o =
                  (await this.subscriber
                    .subscribe(e, sz({ internal: { throwOnFailedPublish: n } }, t))
                    .catch((e) => {
                      n && r(e);
                    })) || o),
                  i();
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
            ? await es(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(() =>
                this.onProviderDisconnect()
              )
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (!this.subscriber.hasAnyTopics) {
            this.logger.warn(
              'Starting WS connection skipped because the client has no topics to work with.'
            );
            return;
          }
          if (
            (this.connectPromise
              ? (this.logger.debug({}, 'Waiting for existing connection attempt to resolve...'),
                await this.connectPromise,
                this.logger.debug({}, 'Existing connection attempt resolved'))
              : ((this.connectPromise = new Promise(async (t, i) => {
                  await this.connect(e)
                    .then(t)
                    .catch(i)
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
          if (!(await ik()))
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
          let { topic: i } = e;
          if (!t.sessionExists) {
            let e = eo(U.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(iJ.message, e), await this.recordMessageEvent(e, iX.inbound);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e && e !== this.relayUrl && ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              if (this.transportExplicitlyClosed) break;
              this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  let i = () => {
                    t(Error('Connection interrupted while trying to subscribe'));
                  };
                  this.provider.once(iW.disconnect, i),
                    await es(
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
                        this.provider.off(iW.disconnect, i), clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let i = () => {
                        t(Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(iW.disconnect, i),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(iW.disconnect, i);
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
            await new Promise((e) => setTimeout(e, (0, U.toMiliseconds)(+t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, i, r, s;
          if (Z())
            try {
              null != (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null == (r = null == (i = this.provider) ? void 0 : i.connection)
                      ? void 0
                      : r.socket) ||
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
          (this.provider = new ij.F(
            new iM.A(
              (function ({
                protocol: e,
                version: t,
                relayUrl: i,
                sdkVersion: r,
                auth: s,
                projectId: n,
                useOnCloseEvent: o,
                bundleId: a,
                packageName: h,
              }) {
                let c = i.split('?'),
                  l = et(e, t, r),
                  u = (function (e, t) {
                    let i = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let r = t[e];
                        void 0 !== r && i.set(e, r);
                      }
                    return i.toString();
                  })(c[1] || '', {
                    auth: s,
                    ua: l,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: h || void 0,
                    bundleId: a || void 0,
                  });
                return c[0] + '?' + u;
              })({
                sdkVersion: iZ,
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
        async recordMessageEvent(e, t) {
          let { topic: i, message: r } = e;
          await this.messages.set(i, r, t);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
          let r = this.messages.has(t, i);
          return r && this.logger.warn(`Ignoring duplicate message: ${i}`), r;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug('Incoming Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'incoming', payload: e }),
            (0, iD.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s, attestation: n } = t.data,
              o = { topic: i, message: r, publishedAt: s, transportType: iY.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(sz({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else (0, iD.isJsonRpcResponse)(e) && this.events.emit(iJ.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, iX.inbound), this.events.emit(iJ.message, e));
        }
        async acknowledgePayload(e) {
          let t = (0, iD.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(iW.payload, this.onPayloadHandler),
            this.provider.off(iW.connect, this.onConnectHandler),
            this.provider.off(iW.disconnect, this.onDisconnectHandler),
            this.provider.off(iW.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await ik();
          !(function (e) {
            var t, r;
            switch (Q()) {
              case W.browser:
                (t = e),
                  !Y() &&
                    X() &&
                    (window.addEventListener('online', () => t(!0)),
                    window.addEventListener('offline', () => t(!1)));
                break;
              case W.reactNative:
                (r = e),
                  Y() &&
                    'u' > typeof i.g &&
                    null != i.g &&
                    i.g.NetInfo &&
                    i.g?.NetInfo.addEventListener((e) => r(e?.isConnected));
              case W.node:
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
          clearTimeout(this.pingTimeout),
            this.events.emit(iJ.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.reconnectInProgress &&
              ((this.reconnectInProgress = !0),
              await this.subscriber.stop(),
              this.subscriber.hasAnyTopics &&
                (this.transportExplicitlyClosed ||
                  (this.reconnectTimeout = setTimeout(
                    async () => {
                      await this.transportOpen().catch((e) => this.logger.error(e, e?.message)),
                        (this.reconnectTimeout = void 0),
                        (this.reconnectInProgress = !1);
                    },
                    (0, U.toMiliseconds)(0.1)
                  ))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(), this.connected || (await this.connect());
        }
      }
      function sK() {}
      function sH(e) {
        if (!e || 'object' != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
          '[object Object]' === Object.prototype.toString.call(e)
        );
      }
      function sF(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function sq(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      let sV = '[object Arguments]',
        sG = '[object Object]';
      var sJ = Object.defineProperty,
        sW = Object.getOwnPropertySymbols,
        sZ = Object.prototype.hasOwnProperty,
        sY = Object.prototype.propertyIsEnumerable,
        sX = (e, t, i) =>
          t in e
            ? sJ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sQ = (e, t) => {
          for (var i in t || (t = {})) sZ.call(t, i) && sX(e, i, t[i]);
          if (sW) for (var i of sW(t)) sY.call(t, i) && sX(e, i, t[i]);
          return e;
        },
        s0 = (e, t, i) => sX(e, 'symbol' != typeof t ? t + '' : t, i);
      class s1 extends E {
        constructor(e, t, i, r = i$, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            s0(this, 'map', new Map()),
            s0(this, 'version', '0.3'),
            s0(this, 'cached', []),
            s0(this, 'initialized', !1),
            s0(this, 'getKey'),
            s0(this, 'storagePrefix', i$),
            s0(this, 'recentlyDeleted', []),
            s0(this, 'recentlyDeletedLimit', 200),
            s0(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !iT(e)
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
            s0(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            s0(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            s0(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) =>
                      Object.keys(e).every((i) => {
                        var r;
                        return (
                          (r = t[i]),
                          (function e(t, i, r, s, n, o, a) {
                            let h = a(t, i, r, s, n, o);
                            if (void 0 !== h) return h;
                            if (typeof t == typeof i)
                              switch (typeof t) {
                                case 'bigint':
                                case 'string':
                                case 'boolean':
                                case 'symbol':
                                case 'undefined':
                                case 'function':
                                  return t === i;
                                case 'number':
                                  return t === i || Object.is(t, i);
                              }
                            return (function t(i, r, s, n) {
                              if (Object.is(i, r)) return !0;
                              let o = sq(i),
                                a = sq(r);
                              if ((o === sV && (o = sG), a === sV && (a = sG), o !== a)) return !1;
                              switch (o) {
                                case '[object String]':
                                  return i.toString() === r.toString();
                                case '[object Number]': {
                                  let e = i.valueOf(),
                                    t = r.valueOf();
                                  return e === t || (Number.isNaN(e) && Number.isNaN(t));
                                }
                                case '[object Boolean]':
                                case '[object Date]':
                                case '[object Symbol]':
                                  return Object.is(i.valueOf(), r.valueOf());
                                case '[object RegExp]':
                                  return i.source === r.source && i.flags === r.flags;
                                case '[object Function]':
                                  return i === r;
                              }
                              let h = (s = s ?? new Map()).get(i),
                                c = s.get(r);
                              if (null != h && null != c) return h === r;
                              s.set(i, r), s.set(r, i);
                              try {
                                switch (o) {
                                  case '[object Map]':
                                    if (i.size !== r.size) return !1;
                                    for (let [t, o] of i.entries())
                                      if (!r.has(t) || !e(o, r.get(t), t, i, r, s, n)) return !1;
                                    return !0;
                                  case '[object Set]': {
                                    if (i.size !== r.size) return !1;
                                    let t = Array.from(i.values()),
                                      o = Array.from(r.values());
                                    for (let a = 0; a < t.length; a++) {
                                      let h = t[a],
                                        c = o.findIndex((t) => e(h, t, void 0, i, r, s, n));
                                      if (-1 === c) return !1;
                                      o.splice(c, 1);
                                    }
                                    return !0;
                                  }
                                  case '[object Array]':
                                  case '[object Uint8Array]':
                                  case '[object Uint8ClampedArray]':
                                  case '[object Uint16Array]':
                                  case '[object Uint32Array]':
                                  case '[object BigUint64Array]':
                                  case '[object Int8Array]':
                                  case '[object Int16Array]':
                                  case '[object Int32Array]':
                                  case '[object BigInt64Array]':
                                  case '[object Float32Array]':
                                  case '[object Float64Array]':
                                    if (
                                      ('u' > typeof iz && iz.isBuffer(i) !== iz.isBuffer(r)) ||
                                      i.length !== r.length
                                    )
                                      return !1;
                                    for (let t = 0; t < i.length; t++)
                                      if (!e(i[t], r[t], t, i, r, s, n)) return !1;
                                    return !0;
                                  case '[object ArrayBuffer]':
                                    return (
                                      i.byteLength === r.byteLength &&
                                      t(new Uint8Array(i), new Uint8Array(r), s, n)
                                    );
                                  case '[object DataView]':
                                    return (
                                      i.byteLength === r.byteLength &&
                                      i.byteOffset === r.byteOffset &&
                                      t(new Uint8Array(i), new Uint8Array(r), s, n)
                                    );
                                  case '[object Error]':
                                    return i.name === r.name && i.message === r.message;
                                  case sG: {
                                    if (
                                      !(t(i.constructor, r.constructor, s, n) || (sH(i) && sH(r)))
                                    )
                                      return !1;
                                    let o = [...Object.keys(i), ...sF(i)],
                                      a = [...Object.keys(r), ...sF(r)];
                                    if (o.length !== a.length) return !1;
                                    for (let t = 0; t < o.length; t++) {
                                      let a = o[t],
                                        h = i[a];
                                      if (!Object.hasOwn(r, a)) return !1;
                                      let c = r[a];
                                      if (!e(h, c, a, i, r, s, n)) return !1;
                                    }
                                    return !0;
                                  }
                                  default:
                                    return !1;
                                }
                              } finally {
                                s.delete(i), s.delete(r);
                              }
                            })(t, i, o, a);
                          })(r, e[i], void 0, void 0, void 0, void 0, sK)
                        );
                      })
                    )
                  : this.values
              )
            ),
            s0(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let i = sQ(sQ({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            s0(this, 'delete', async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug('Deleting value'),
                  this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, a.U5)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = s);
        }
        get context() {
          return (0, a.oI)(this.logger);
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
              let { message: t } = iA(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = iA('NO_MATCHING_KEY', `${this.name}: ${e}`);
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
              let { message: e } = iA('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var s5 = Object.defineProperty,
        s6 = (e, t, i) =>
          t in e
            ? s5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        s3 = (e, t, i) => s6(e, 'symbol' != typeof t ? t + '' : t, i);
      class s2 {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            s3(this, 'name', 'pairing'),
            s3(this, 'version', '0.3'),
            s3(this, 'events', new (s())()),
            s3(this, 'pairings'),
            s3(this, 'initialized', !1),
            s3(this, 'storagePrefix', i$),
            s3(this, 'ignoredPayloadTypes', [1]),
            s3(this, 'registeredMethods', []),
            s3(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            s3(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            s3(this, 'create', async (e) => {
              this.isInitialized();
              let t = ir(),
                i = await this.core.crypto.setSymKey(t),
                r = eo(U.FIVE_MINUTES),
                s = { protocol: 'irn' },
                n = { topic: i, expiry: r, relay: s, active: !1, methods: e?.methods },
                o = ip({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: r,
                  methods: e?.methods,
                });
              return (
                this.events.emit(i5.create, n),
                this.core.expirer.set(i, r),
                await this.pairings.set(i, n),
                await this.core.relayer.subscribe(i, { transportType: e?.transportType }),
                { topic: i, uri: o }
              );
            }),
            s3(this, 'pair', async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [i9.pairing_started] },
              });
              this.isValidPair(e, i);
              let { topic: r, symKey: s, relay: n, expiryTimestamp: o, methods: a } = ig(e.uri);
              if (
                ((i.props.properties.topic = r),
                i.addTrace(i9.pairing_uri_validation_success),
                i.addTrace(i9.pairing_uri_not_expired),
                this.pairings.keys.includes(r))
              ) {
                if (((t = this.pairings.get(r)), i.addTrace(i9.existing_pairing), t.active))
                  throw (
                    (i.setError(i7.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(i9.pairing_not_expired);
              }
              let h = o || eo(U.FIVE_MINUTES),
                c = { topic: r, relay: n, expiry: h, active: !1, methods: a };
              this.core.expirer.set(r, h),
                await this.pairings.set(r, c),
                i.addTrace(i9.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(i5.create, c),
                i.addTrace(i9.emit_inactive_pairing),
                this.core.crypto.keychain.has(r) || (await this.core.crypto.setSymKey(s, r)),
                i.addTrace(i9.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(i7.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (e) {
                throw (i.setError(i7.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(i9.subscribe_pairing_topic_success), c;
            }),
            s3(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = eo(U.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            s3(this, 'ping', async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  'ping() is deprecated and will be removed in the next major release.'
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  {
                    done: i,
                    resolve: r,
                    reject: s,
                  } = (function (e = U.FIVE_MINUTES, t) {
                    let i, r, s, n;
                    let o = (0, U.toMiliseconds)(e || U.FIVE_MINUTES);
                    return {
                      resolve: (e) => {
                        s && i && (clearTimeout(s), i(e), (n = Promise.resolve(e)));
                      },
                      reject: (e) => {
                        s && r && (clearTimeout(s), r(e));
                      },
                      done: () =>
                        new Promise((e, t) => {
                          if (n) return e(n);
                          (s = setTimeout(() => {
                            let e = Error(void 0);
                            (n = Promise.reject(e)), t(e);
                          }, o)),
                            (i = e),
                            (r = t);
                        }),
                    };
                  })();
                this.events.once(eh('pairing_ping', e), ({ error: e }) => {
                  e ? s(e) : r();
                }),
                  await i();
              }
            }),
            s3(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            s3(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            s3(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            s3(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', iU('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            s3(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: i, expiry: r, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return ip({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: i,
                expiryTimestamp: r,
                methods: s,
              });
            }),
            s3(this, 'sendRequest', async (e, t, i) => {
              let r = (0, iD.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                n = i1[t].req;
              return this.core.history.set(e, r), this.core.relayer.publish(e, s, n), r.id;
            }),
            s3(this, 'sendResult', async (e, t, i) => {
              let r = (0, iD.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = i1[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n), await this.core.history.resolve(r);
            }),
            s3(this, 'sendError', async (e, t, i) => {
              let r = (0, iD.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = (await this.core.history.get(t, e)).request.method,
                o = i1[n] ? i1[n].res : i1.unregistered_method.res;
              await this.core.relayer.publish(t, s, o), await this.core.history.resolve(r);
            }),
            s3(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, iU('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            s3(this, 'cleanup', async () => {
              let e = this.pairings.getAll().filter((e) => ea(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            s3(this, 'onRelayEventRequest', async (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case 'wc_pairingPing':
                  return await this.onPairingPingRequest(t, i);
                case 'wc_pairingDelete':
                  return await this.onPairingDeleteRequest(t, i);
                default:
                  return await this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            s3(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return 'wc_pairingPing' === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            s3(this, 'onPairingPingRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(i5.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            s3(this, 'onPairingPingResponse', (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, iD.isJsonRpcResult)(t)
                  ? this.events.emit(eh('pairing_ping', i), {})
                  : (0, iD.isJsonRpcError)(t) &&
                    this.events.emit(eh('pairing_ping', i), { error: t.error });
              }, 500);
            }),
            s3(this, 'onPairingDeleteRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(i5.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            s3(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = iU('WC_METHOD_UNSUPPORTED', r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            s3(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(iU('WC_METHOD_UNSUPPORTED', e));
            }),
            s3(this, 'isValidPair', (e, t) => {
              var i;
              if (!iC(e)) {
                let { message: i } = iA('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(i7.malformed_pairing_uri), Error(i));
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
                    if (iL(e, !1)) {
                      if (t(e)) return !0;
                      let i = ed(e);
                      return t(i);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: i } = iA('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(i7.malformed_pairing_uri), Error(i));
              }
              let r = ig(e?.uri);
              if (!(null != (i = r?.relay) && i.protocol)) {
                let { message: e } = iA('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
                throw (t.setError(i7.malformed_pairing_uri), Error(e));
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = iA('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(i7.malformed_pairing_uri), Error(e));
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, U.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                t.setError(i7.pairing_expired);
                let { message: e } = iA(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw Error(e);
              }
            }),
            s3(this, 'isValidPing', async (e) => {
              if (!iC(e)) {
                let { message: t } = iA('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            s3(this, 'isValidDisconnect', async (e) => {
              if (!iC(e)) {
                let { message: t } = iA('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            s3(this, 'isValidPairingTopic', async (e) => {
              if (!iL(e, !1)) {
                let { message: t } = iA(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = iA('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
                throw Error(t);
              }
              if (ea(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = iA('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, a.U5)(t, this.name)),
            (this.pairings = new s1(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return (0, a.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(iJ.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              this.pairings.keys.includes(t) &&
              r !== iY.link_mode &&
              !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))
            )
              try {
                let e = await this.core.crypto.decode(t, i);
                (0, iD.isJsonRpcRequest)(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : (0, iD.isJsonRpcResponse)(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, i);
              } catch (e) {
                this.logger.error(e);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(i3.expired, async (e) => {
            let { topic: t } = (function (e) {
              let [t, i] = e.split(':'),
                r = { id: void 0, topic: void 0 };
              if ('topic' === t && 'string' == typeof i) r.topic = i;
              else if ('id' === t && Number.isInteger(Number(i))) r.id = Number(i);
              else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${i}`);
              return r;
            })(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(i5.expire, { topic: t }));
          });
        }
      }
      var s8 = Object.defineProperty,
        s4 = (e, t, i) =>
          t in e
            ? s8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        s9 = (e, t, i) => s4(e, 'symbol' != typeof t ? t + '' : t, i);
      class s7 extends y {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            s9(this, 'records', new Map()),
            s9(this, 'events', new r.EventEmitter()),
            s9(this, 'name', 'history'),
            s9(this, 'version', '0.3'),
            s9(this, 'cached', []),
            s9(this, 'initialized', !1),
            s9(this, 'storagePrefix', i$),
            s9(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            s9(this, 'set', (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Setting JSON-RPC request history record'),
                this.logger.trace({
                  type: 'method',
                  method: 'set',
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: eo(U.THIRTY_DAYS),
              };
              this.records.set(r.id, r), this.persist(), this.events.emit(i6.created, r);
            }),
            s9(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = (0, iD.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(i6.updated, t));
            }),
            s9(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            s9(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((i) => {
                  i.topic !== e ||
                    ('u' > typeof t && i.id !== t) ||
                    (this.records.delete(i.id), this.events.emit(i6.deleted, i));
                }),
                this.persist();
            }),
            s9(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            s9(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            s9(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            s9(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            s9(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, a.U5)(t, this.name));
        }
        get context() {
          return (0, a.oI)(this.logger);
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
              let i = {
                topic: t.topic,
                request: (0, iD.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(i);
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
            let { message: t } = iA('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(i6.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = iA('RESTORE_WILL_OVERRIDE', this.name);
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
          this.events.on(i6.created, (e) => {
            let t = i6.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(i6.updated, (e) => {
              let t = i6.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(i6.deleted, (e) => {
              let t = i6.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.core.heartbeat.on(n.li.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, U.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(i6.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nt = Object.defineProperty,
        ni = (e, t, i) =>
          t in e
            ? nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nr = (e, t, i) => ni(e, 'symbol' != typeof t ? t + '' : t, i);
      class ns extends I {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            nr(this, 'expirations', new Map()),
            nr(this, 'events', new r.EventEmitter()),
            nr(this, 'name', 'expirer'),
            nr(this, 'version', '0.3'),
            nr(this, 'cached', []),
            nr(this, 'initialized', !1),
            nr(this, 'storagePrefix', i$),
            nr(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            nr(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            nr(this, 'set', (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(i3.created, { target: i, expiration: r });
            }),
            nr(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            nr(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(i3.deleted, { target: t, expiration: i });
              }
            }),
            nr(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            nr(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            nr(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            nr(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, a.U5)(t, this.name));
        }
        get context() {
          return (0, a.oI)(this.logger);
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
          if ('string' == typeof e) return en('topic', e);
          if ('number' == typeof e) return en('id', e);
          let { message: t } = iA('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(i3.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = iA('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: t } = iA('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, U.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(i3.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(n.li.pulse, () => this.checkExpirations()),
            this.events.on(i3.created, (e) => {
              let t = i3.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(i3.expired, (e) => {
              let t = i3.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(i3.deleted, (e) => {
              let t = i3.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = iA('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nn = Object.defineProperty,
        no = (e, t, i) =>
          t in e
            ? nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        na = (e, t, i) => no(e, 'symbol' != typeof t ? t + '' : t, i);
      class nh extends S {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            na(this, 'name', 'verify-api'),
            na(this, 'abortController'),
            na(this, 'isDevEnv'),
            na(this, 'verifyUrlV3', i8),
            na(this, 'storagePrefix', i$),
            na(this, 'version', 2),
            na(this, 'publicKey'),
            na(this, 'fetchPromise'),
            na(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, U.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            na(this, 'register', async (e) => {
              if (!X() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = (0, C.getDocument)(),
                  t = this.startAbortTimer(5 * U.ONE_SECOND),
                  r = await new Promise((r, n) => {
                    let o = () => {
                      window.removeEventListener('message', h),
                        e.body.removeChild(a),
                        n('attestation aborted');
                    };
                    this.abortController.signal.addEventListener('abort', o);
                    let a = e.createElement('iframe');
                    (a.src = s),
                      (a.style.display = 'none'),
                      a.addEventListener('error', o, { signal: this.abortController.signal });
                    let h = (s) => {
                      if (s.data && 'string' == typeof s.data)
                        try {
                          let n = JSON.parse(s.data);
                          if ('verify_attestation' === n.type) {
                            if ((0, L.Cq)(n.attestation).payload.id !== i) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener('abort', o),
                              window.removeEventListener('message', h),
                              r(null === n.attestation ? '' : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener('message', h, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug('jwt attestation', r), r;
              } catch (e) {
                this.logger.warn(e);
              }
              return '';
            }),
            na(this, 'resolve', async (e) => {
              if (this.isDevEnv) return '';
              let { attestationId: t, hash: i, encryptedId: r } = e;
              if ('' === t) {
                this.logger.debug('resolve: attestationId is empty, skipping');
                return;
              }
              if (t) {
                if ((0, L.Cq)(t).payload.id !== r) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn('resolve: jwt attestation: origin url not verified');
                    return;
                  }
                  return e;
                }
              }
              if (!i) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(i, s);
            }),
            na(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * U.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(i), 200 === r.status ? await r.json() : void 0;
            }),
            na(this, 'getVerifyUrl', (e) => {
              let t = e || i2;
              return (
                i4.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${i2}`
                  ),
                  (t = i2)),
                t
              );
            }),
            na(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(U.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            na(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            na(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            na(this, 'isValidJwtAttestation', async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
              let i = await this.fetchAndPersistPublicKey();
              try {
                if (i) return this.validateAttestation(e, i);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
            }),
            na(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            na(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            na(this, 'validateAttestation', (e, t) => {
              let i = (function (e, t) {
                  let [i, r, s] = e.split('.'),
                    n = G.from(
                      (function (e) {
                        let t = e.replace(/-/g, '+').replace(/_/g, '/'),
                          i = t.length % 4;
                        return i > 0 && (t += '='.repeat(4 - i)), t;
                      })(s),
                      'base64'
                    );
                  if (64 !== n.length) throw Error('Invalid signature length');
                  let o = n.slice(0, 32).toString('hex'),
                    a = n.slice(32, 64).toString('hex'),
                    h = tM(`${i}.${r}`),
                    c = new F.ec('p256').keyFromPublic(
                      {
                        x: G.from(t.x, 'base64').toString('hex'),
                        y: G.from(t.y, 'base64').toString('hex'),
                      },
                      'hex'
                    ),
                    l = H(h, ie);
                  if (!c.verify(l, { r: o, s: a })) throw Error('Invalid signature');
                  return (0, L.Cq)(e).payload;
                })(e, t.publicKey),
                r = { hasExpired: (0, U.toMiliseconds)(i.exp) < Date.now(), payload: i };
              if (r.hasExpired)
                throw (
                  (this.logger.warn('resolve: jwt attestation expired'),
                  Error('JWT attestation expired'))
                );
              return {
                origin: r.payload.origin,
                isScam: r.payload.isScam,
                isVerified: r.payload.isVerified,
              };
            }),
            (this.logger = (0, a.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = eu()),
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
          return (0, a.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(() => this.abortController.abort(), (0, U.toMiliseconds)(e))
          );
        }
      }
      var nc = Object.defineProperty,
        nl = (e, t, i) =>
          t in e
            ? nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nu = (e, t, i) => nl(e, 'symbol' != typeof t ? t + '' : t, i);
      class nd extends P {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            nu(this, 'context', 'echo'),
            nu(this, 'registerDeviceToken', async (e) => {
              let { clientId: t, token: i, notificationType: r, enableEncrypted: s = !1 } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id: t, type: r, token: i, always_raw: s }),
              });
            }),
            (this.logger = (0, a.U5)(t, this.context));
        }
      }
      var ng = Object.defineProperty,
        np = Object.getOwnPropertySymbols,
        nf = Object.prototype.hasOwnProperty,
        ny = Object.prototype.propertyIsEnumerable,
        nb = (e, t, i) =>
          t in e
            ? ng(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nm = (e, t) => {
          for (var i in t || (t = {})) nf.call(t, i) && nb(e, i, t[i]);
          if (np) for (var i of np(t)) ny.call(t, i) && nb(e, i, t[i]);
          return e;
        },
        nw = (e, t, i) => nb(e, 'symbol' != typeof t ? t + '' : t, i);
      class nv extends O {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            nw(this, 'context', 'event-client'),
            nw(this, 'storagePrefix', i$),
            nw(this, 'storageVersion', 0.1),
            nw(this, 'events', new Map()),
            nw(this, 'shouldPersist', !1),
            nw(this, 'init', async () => {
              if (!eu())
                try {
                  let e = {
                    eventId: el(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: et(this.core.relayer.protocol, this.core.relayer.version, iZ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            nw(this, 'createEvent', (e) => {
              let {
                  event: t = 'ERROR',
                  type: i = '',
                  properties: { topic: r, trace: s },
                } = e,
                n = el(),
                o = this.core.projectId || '',
                a = nm(
                  {
                    eventId: n,
                    timestamp: Date.now(),
                    props: { event: t, type: i, properties: { topic: r, trace: s } },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return this.telemetryEnabled && (this.events.set(n, a), (this.shouldPersist = !0)), a;
            }),
            nw(this, 'getEvent', (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let r = Array.from(this.events.values()).find((e) => e.props.properties.topic === i);
              if (r) return nm(nm({}, r), this.setMethods(r.eventId));
            }),
            nw(this, 'deleteEvent', (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            nw(this, 'setEventListeners', () => {
              this.core.heartbeat.on(n.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, U.fromMiliseconds)(Date.now()) - (0, U.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            nw(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            nw(this, 'addTrace', (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            nw(this, 'setError', (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            nw(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            nw(this, 'restore', async () => {
              try {
                let e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, nm(nm({}, e), this.setMethods(e.eventId)));
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            nw(this, 'submit', async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e) this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            nw(this, 'sendEvent', async (e) => {
              let t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${iZ}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            nw(
              this,
              'getAppDomain',
              () => ((0, k.g)() || { name: '', description: '', url: '', icons: [''] }).url
            ),
            (this.logger = (0, a.U5)(t, this.context)),
            (this.telemetryEnabled = i),
            i
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
      var nE = Object.defineProperty,
        nx = Object.getOwnPropertySymbols,
        n_ = Object.prototype.hasOwnProperty,
        nI = Object.prototype.propertyIsEnumerable,
        nS = (e, t, i) =>
          t in e
            ? nE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nP = (e, t) => {
          for (var i in t || (t = {})) n_.call(t, i) && nS(e, i, t[i]);
          if (nx) for (var i of nx(t)) nI.call(t, i) && nS(e, i, t[i]);
          return e;
        },
        nO = (e, t, i) => nS(e, 'symbol' != typeof t ? t + '' : t, i);
      class nA extends d {
        constructor(e) {
          var t;
          super(e),
            nO(this, 'protocol', 'wc'),
            nO(this, 'version', 2),
            nO(this, 'name', iB),
            nO(this, 'relayUrl'),
            nO(this, 'projectId'),
            nO(this, 'customStoragePrefix'),
            nO(this, 'events', new r.EventEmitter()),
            nO(this, 'logger'),
            nO(this, 'heartbeat'),
            nO(this, 'relayer'),
            nO(this, 'crypto'),
            nO(this, 'storage'),
            nO(this, 'history'),
            nO(this, 'expirer'),
            nO(this, 'pairing'),
            nO(this, 'verify'),
            nO(this, 'echoClient'),
            nO(this, 'linkModeSupportedApps'),
            nO(this, 'eventClient'),
            nO(this, 'initialized', !1),
            nO(this, 'logChunkController'),
            nO(this, 'on', (e, t) => this.events.on(e, t)),
            nO(this, 'once', (e, t) => this.events.once(e, t)),
            nO(this, 'off', (e, t) => this.events.off(e, t)),
            nO(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            nO(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: i }) => {
              if (!e || !t) return;
              let r = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: iY.link_mode,
              };
              this.relayer.onLinkMessageEvent(r, { sessionExists: i });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || iG),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          let i = (0, a.iP)({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : iK.logger,
              name: iB,
            }),
            { logger: s, chunkLoggerController: h } = (0, a.D5)({
              opts: i,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = h),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
              }),
            (this.logger = (0, a.U5)(s, this.name)),
            (this.heartbeat = new n.VH()),
            (this.crypto = new r8(this, this.logger, e?.keychain)),
            (this.history = new s7(this, this.logger)),
            (this.expirer = new ns(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new o.A(nP(nP({}, iH), e?.storageOptions))),
            (this.relayer = new s$({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new s2(this, this.logger)),
            (this.verify = new nh(this, this.logger, this.storage)),
            (this.echoClient = new nd(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new nv(this, this.logger, e?.telemetryEnabled));
        }
        static async init(e) {
          let t = new nA(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', i), t;
        }
        get context() {
          return (0, a.oI)(this.logger);
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
            await this.storage.setItem(iQ, this.linkModeSupportedApps));
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
              (this.linkModeSupportedApps = (await this.storage.getItem(iQ)) || []),
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
      let nU = nA;
    },
    72137: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.SystemRandomSource = void 0);
      let r = i(44996),
        s = i(23628);
      class n {
        constructor() {
          if (
            ((this.isAvailable = !1),
            (this.name = ''),
            (this._source = new r.BrowserRandomSource()),
            this._source.isAvailable)
          ) {
            (this.isAvailable = !0), (this.name = 'Browser');
            return;
          }
          if (((this._source = new s.NodeRandomSource()), this._source.isAvailable)) {
            (this.isAvailable = !0), (this.name = 'Node');
            return;
          }
        }
        randomBytes(e) {
          if (!this.isAvailable) throw Error('System random byte generator is not available.');
          return this._source.randomBytes(e);
        }
      }
      t.SystemRandomSource = n;
    },
    73343: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isSerializableHash = function (e) {
          return (
            void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
          );
        });
    },
    78741: (e, t, i) => {
      (t.TP = t.wE = t.Ee = void 0), i(93713);
      let r = i(43375);
      function s(e) {
        let t = new Float64Array(16);
        if (e) for (let i = 0; i < e.length; i++) t[i] = e[i];
        return t;
      }
      i(83177), (t.Ee = 64), (t.wE = 64), (t.TP = 32), (new Uint8Array(32)[0] = 9);
      let n = s(),
        o = s([1]),
        a = s([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139,
          11119, 27886, 20995,
        ]),
        h = s([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743,
          22239, 55772, 9222,
        ]),
        c = s([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502,
          52590, 14035, 8553,
        ]),
        l = s([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214,
        ]),
        u = s([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099,
          20417, 9344, 11139,
        ]);
      function d(e, t) {
        for (let i = 0; i < 16; i++) e[i] = 0 | t[i];
      }
      function g(e) {
        let t = 1;
        for (let i = 0; i < 16; i++) {
          let r = e[i] + t + 65535;
          (t = Math.floor(r / 65536)), (e[i] = r - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function p(e, t, i) {
        let r = ~(i - 1);
        for (let i = 0; i < 16; i++) {
          let s = r & (e[i] ^ t[i]);
          (e[i] ^= s), (t[i] ^= s);
        }
      }
      function f(e, t) {
        let i = s(),
          r = s();
        for (let e = 0; e < 16; e++) r[e] = t[e];
        g(r), g(r), g(r);
        for (let e = 0; e < 2; e++) {
          i[0] = r[0] - 65517;
          for (let e = 1; e < 15; e++)
            (i[e] = r[e] - 65535 - ((i[e - 1] >> 16) & 1)), (i[e - 1] &= 65535);
          i[15] = r[15] - 32767 - ((i[14] >> 16) & 1);
          let e = (i[15] >> 16) & 1;
          (i[14] &= 65535), p(r, i, 1 - e);
        }
        for (let t = 0; t < 16; t++) (e[2 * t] = 255 & r[t]), (e[2 * t + 1] = r[t] >> 8);
      }
      function y(e, t) {
        let i = new Uint8Array(32),
          r = new Uint8Array(32);
        return (
          f(i, e),
          f(r, t),
          (function (e, t) {
            let i = 0;
            for (let r = 0; r < 32; r++) i |= e[r] ^ t[r];
            return (1 & ((i - 1) >>> 8)) - 1;
          })(i, r)
        );
      }
      function b(e) {
        let t = new Uint8Array(32);
        return f(t, e), 1 & t[0];
      }
      function m(e, t, i) {
        for (let r = 0; r < 16; r++) e[r] = t[r] + i[r];
      }
      function w(e, t, i) {
        for (let r = 0; r < 16; r++) e[r] = t[r] - i[r];
      }
      function E(e, t, i) {
        let r,
          s,
          n = 0,
          o = 0,
          a = 0,
          h = 0,
          c = 0,
          l = 0,
          u = 0,
          d = 0,
          g = 0,
          p = 0,
          f = 0,
          y = 0,
          b = 0,
          m = 0,
          w = 0,
          E = 0,
          x = 0,
          _ = 0,
          I = 0,
          S = 0,
          P = 0,
          O = 0,
          A = 0,
          U = 0,
          T = 0,
          L = 0,
          N = 0,
          C = 0,
          k = 0,
          R = 0,
          j = 0,
          D = i[0],
          M = i[1],
          z = i[2],
          B = i[3],
          $ = i[4],
          K = i[5],
          H = i[6],
          F = i[7],
          q = i[8],
          V = i[9],
          G = i[10],
          J = i[11],
          W = i[12],
          Z = i[13],
          Y = i[14],
          X = i[15];
        (n += (r = t[0]) * D),
          (o += r * M),
          (a += r * z),
          (h += r * B),
          (c += r * $),
          (l += r * K),
          (u += r * H),
          (d += r * F),
          (g += r * q),
          (p += r * V),
          (f += r * G),
          (y += r * J),
          (b += r * W),
          (m += r * Z),
          (w += r * Y),
          (E += r * X),
          (o += (r = t[1]) * D),
          (a += r * M),
          (h += r * z),
          (c += r * B),
          (l += r * $),
          (u += r * K),
          (d += r * H),
          (g += r * F),
          (p += r * q),
          (f += r * V),
          (y += r * G),
          (b += r * J),
          (m += r * W),
          (w += r * Z),
          (E += r * Y),
          (x += r * X),
          (a += (r = t[2]) * D),
          (h += r * M),
          (c += r * z),
          (l += r * B),
          (u += r * $),
          (d += r * K),
          (g += r * H),
          (p += r * F),
          (f += r * q),
          (y += r * V),
          (b += r * G),
          (m += r * J),
          (w += r * W),
          (E += r * Z),
          (x += r * Y),
          (_ += r * X),
          (h += (r = t[3]) * D),
          (c += r * M),
          (l += r * z),
          (u += r * B),
          (d += r * $),
          (g += r * K),
          (p += r * H),
          (f += r * F),
          (y += r * q),
          (b += r * V),
          (m += r * G),
          (w += r * J),
          (E += r * W),
          (x += r * Z),
          (_ += r * Y),
          (I += r * X),
          (c += (r = t[4]) * D),
          (l += r * M),
          (u += r * z),
          (d += r * B),
          (g += r * $),
          (p += r * K),
          (f += r * H),
          (y += r * F),
          (b += r * q),
          (m += r * V),
          (w += r * G),
          (E += r * J),
          (x += r * W),
          (_ += r * Z),
          (I += r * Y),
          (S += r * X),
          (l += (r = t[5]) * D),
          (u += r * M),
          (d += r * z),
          (g += r * B),
          (p += r * $),
          (f += r * K),
          (y += r * H),
          (b += r * F),
          (m += r * q),
          (w += r * V),
          (E += r * G),
          (x += r * J),
          (_ += r * W),
          (I += r * Z),
          (S += r * Y),
          (P += r * X),
          (u += (r = t[6]) * D),
          (d += r * M),
          (g += r * z),
          (p += r * B),
          (f += r * $),
          (y += r * K),
          (b += r * H),
          (m += r * F),
          (w += r * q),
          (E += r * V),
          (x += r * G),
          (_ += r * J),
          (I += r * W),
          (S += r * Z),
          (P += r * Y),
          (O += r * X),
          (d += (r = t[7]) * D),
          (g += r * M),
          (p += r * z),
          (f += r * B),
          (y += r * $),
          (b += r * K),
          (m += r * H),
          (w += r * F),
          (E += r * q),
          (x += r * V),
          (_ += r * G),
          (I += r * J),
          (S += r * W),
          (P += r * Z),
          (O += r * Y),
          (A += r * X),
          (g += (r = t[8]) * D),
          (p += r * M),
          (f += r * z),
          (y += r * B),
          (b += r * $),
          (m += r * K),
          (w += r * H),
          (E += r * F),
          (x += r * q),
          (_ += r * V),
          (I += r * G),
          (S += r * J),
          (P += r * W),
          (O += r * Z),
          (A += r * Y),
          (U += r * X),
          (p += (r = t[9]) * D),
          (f += r * M),
          (y += r * z),
          (b += r * B),
          (m += r * $),
          (w += r * K),
          (E += r * H),
          (x += r * F),
          (_ += r * q),
          (I += r * V),
          (S += r * G),
          (P += r * J),
          (O += r * W),
          (A += r * Z),
          (U += r * Y),
          (T += r * X),
          (f += (r = t[10]) * D),
          (y += r * M),
          (b += r * z),
          (m += r * B),
          (w += r * $),
          (E += r * K),
          (x += r * H),
          (_ += r * F),
          (I += r * q),
          (S += r * V),
          (P += r * G),
          (O += r * J),
          (A += r * W),
          (U += r * Z),
          (T += r * Y),
          (L += r * X),
          (y += (r = t[11]) * D),
          (b += r * M),
          (m += r * z),
          (w += r * B),
          (E += r * $),
          (x += r * K),
          (_ += r * H),
          (I += r * F),
          (S += r * q),
          (P += r * V),
          (O += r * G),
          (A += r * J),
          (U += r * W),
          (T += r * Z),
          (L += r * Y),
          (N += r * X),
          (b += (r = t[12]) * D),
          (m += r * M),
          (w += r * z),
          (E += r * B),
          (x += r * $),
          (_ += r * K),
          (I += r * H),
          (S += r * F),
          (P += r * q),
          (O += r * V),
          (A += r * G),
          (U += r * J),
          (T += r * W),
          (L += r * Z),
          (N += r * Y),
          (C += r * X),
          (m += (r = t[13]) * D),
          (w += r * M),
          (E += r * z),
          (x += r * B),
          (_ += r * $),
          (I += r * K),
          (S += r * H),
          (P += r * F),
          (O += r * q),
          (A += r * V),
          (U += r * G),
          (T += r * J),
          (L += r * W),
          (N += r * Z),
          (C += r * Y),
          (k += r * X),
          (w += (r = t[14]) * D),
          (E += r * M),
          (x += r * z),
          (_ += r * B),
          (I += r * $),
          (S += r * K),
          (P += r * H),
          (O += r * F),
          (A += r * q),
          (U += r * V),
          (T += r * G),
          (L += r * J),
          (N += r * W),
          (C += r * Z),
          (k += r * Y),
          (R += r * X),
          (E += (r = t[15]) * D),
          (x += r * M),
          (_ += r * z),
          (I += r * B),
          (S += r * $),
          (P += r * K),
          (O += r * H),
          (A += r * F),
          (U += r * q),
          (T += r * V),
          (L += r * G),
          (N += r * J),
          (C += r * W),
          (k += r * Z),
          (R += r * Y),
          (j += r * X),
          (n += 38 * x),
          (o += 38 * _),
          (a += 38 * I),
          (h += 38 * S),
          (c += 38 * P),
          (l += 38 * O),
          (u += 38 * A),
          (d += 38 * U),
          (g += 38 * T),
          (p += 38 * L),
          (f += 38 * N),
          (y += 38 * C),
          (b += 38 * k),
          (m += 38 * R),
          (w += 38 * j),
          (s = Math.floor((r = n + (s = 1) + 65535) / 65536)),
          (n = r - 65536 * s),
          (s = Math.floor((r = o + s + 65535) / 65536)),
          (o = r - 65536 * s),
          (s = Math.floor((r = a + s + 65535) / 65536)),
          (a = r - 65536 * s),
          (s = Math.floor((r = h + s + 65535) / 65536)),
          (h = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = u + s + 65535) / 65536)),
          (u = r - 65536 * s),
          (s = Math.floor((r = d + s + 65535) / 65536)),
          (d = r - 65536 * s),
          (s = Math.floor((r = g + s + 65535) / 65536)),
          (g = r - 65536 * s),
          (s = Math.floor((r = p + s + 65535) / 65536)),
          (p = r - 65536 * s),
          (s = Math.floor((r = f + s + 65535) / 65536)),
          (f = r - 65536 * s),
          (s = Math.floor((r = y + s + 65535) / 65536)),
          (y = r - 65536 * s),
          (s = Math.floor((r = b + s + 65535) / 65536)),
          (b = r - 65536 * s),
          (s = Math.floor((r = m + s + 65535) / 65536)),
          (m = r - 65536 * s),
          (s = Math.floor((r = w + s + 65535) / 65536)),
          (w = r - 65536 * s),
          (s = Math.floor((r = E + s + 65535) / 65536)),
          (E = r - 65536 * s),
          (n += s - 1 + 37 * (s - 1)),
          (s = Math.floor((r = n + (s = 1) + 65535) / 65536)),
          (n = r - 65536 * s),
          (s = Math.floor((r = o + s + 65535) / 65536)),
          (o = r - 65536 * s),
          (s = Math.floor((r = a + s + 65535) / 65536)),
          (a = r - 65536 * s),
          (s = Math.floor((r = h + s + 65535) / 65536)),
          (h = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = u + s + 65535) / 65536)),
          (u = r - 65536 * s),
          (s = Math.floor((r = d + s + 65535) / 65536)),
          (d = r - 65536 * s),
          (s = Math.floor((r = g + s + 65535) / 65536)),
          (g = r - 65536 * s),
          (s = Math.floor((r = p + s + 65535) / 65536)),
          (p = r - 65536 * s),
          (s = Math.floor((r = f + s + 65535) / 65536)),
          (f = r - 65536 * s),
          (s = Math.floor((r = y + s + 65535) / 65536)),
          (y = r - 65536 * s),
          (s = Math.floor((r = b + s + 65535) / 65536)),
          (b = r - 65536 * s),
          (s = Math.floor((r = m + s + 65535) / 65536)),
          (m = r - 65536 * s),
          (s = Math.floor((r = w + s + 65535) / 65536)),
          (w = r - 65536 * s),
          (s = Math.floor((r = E + s + 65535) / 65536)),
          (E = r - 65536 * s),
          (n += s - 1 + 37 * (s - 1)),
          (e[0] = n),
          (e[1] = o),
          (e[2] = a),
          (e[3] = h),
          (e[4] = c),
          (e[5] = l),
          (e[6] = u),
          (e[7] = d),
          (e[8] = g),
          (e[9] = p),
          (e[10] = f),
          (e[11] = y),
          (e[12] = b),
          (e[13] = m),
          (e[14] = w),
          (e[15] = E);
      }
      function x(e, t) {
        let i = s(),
          r = s(),
          n = s(),
          o = s(),
          a = s(),
          c = s(),
          l = s(),
          u = s(),
          d = s();
        w(i, e[1], e[0]),
          w(d, t[1], t[0]),
          E(i, i, d),
          m(r, e[0], e[1]),
          m(d, t[0], t[1]),
          E(r, r, d),
          E(n, e[3], t[3]),
          E(n, n, h),
          E(o, e[2], t[2]),
          m(o, o, o),
          w(a, r, i),
          w(c, o, n),
          m(l, o, n),
          m(u, r, i),
          E(e[0], a, c),
          E(e[1], u, l),
          E(e[2], l, c),
          E(e[3], a, u);
      }
      function _(e, t, i) {
        for (let r = 0; r < 4; r++) p(e[r], t[r], i);
      }
      let I = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
    },
    83177: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.wipe = function (e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
          return e;
        });
    },
    84893: (e) => {
      e.exports = (e, t) => {
        if ('string' != typeof e || 'string' != typeof t)
          throw TypeError('Expected the arguments to be of type `string`');
        if ('' === t) return [e];
        let i = e.indexOf(t);
        return -1 === i ? [e] : [e.slice(0, i), e.slice(i + t.length)];
      };
    },
    90705: (e, t, i) => {
      var r = i(14975),
        s = i(62333),
        n = i(83177),
        o = i(33329),
        a = i(51129);
      (t.J4 = 32), (t.PX = 12), (t.iW = 16);
      var h = new Uint8Array(16);
      (function () {
        function e(e) {
          if (((this.nonceLength = t.PX), (this.tagLength = t.iW), e.length !== t.J4))
            throw Error('ChaCha20Poly1305 needs 32-byte key');
          this._key = new Uint8Array(e);
        }
        (e.prototype.seal = function (e, t, i, s) {
          if (e.length > 16) throw Error('ChaCha20Poly1305: incorrect nonce length');
          var o,
            a = new Uint8Array(16);
          a.set(e, a.length - e.length);
          var h = new Uint8Array(32);
          r.stream(this._key, a, h, 4);
          var c = t.length + this.tagLength;
          if (s) {
            if (s.length !== c) throw Error('ChaCha20Poly1305: incorrect destination length');
            o = s;
          } else o = new Uint8Array(c);
          return (
            r.streamXOR(this._key, a, t, o, 4),
            this._authenticate(
              o.subarray(o.length - this.tagLength, o.length),
              h,
              o.subarray(0, o.length - this.tagLength),
              i
            ),
            n.wipe(a),
            o
          );
        }),
          (e.prototype.open = function (e, t, i, s) {
            if (e.length > 16) throw Error('ChaCha20Poly1305: incorrect nonce length');
            if (t.length < this.tagLength) return null;
            var o,
              h = new Uint8Array(16);
            h.set(e, h.length - e.length);
            var c = new Uint8Array(32);
            r.stream(this._key, h, c, 4);
            var l = new Uint8Array(this.tagLength);
            if (
              (this._authenticate(l, c, t.subarray(0, t.length - this.tagLength), i),
              !a.equal(l, t.subarray(t.length - this.tagLength, t.length)))
            )
              return null;
            var u = t.length - this.tagLength;
            if (s) {
              if (s.length !== u) throw Error('ChaCha20Poly1305: incorrect destination length');
              o = s;
            } else o = new Uint8Array(u);
            return (
              r.streamXOR(this._key, h, t.subarray(0, t.length - this.tagLength), o, 4),
              n.wipe(h),
              o
            );
          }),
          (e.prototype.clean = function () {
            return n.wipe(this._key), this;
          }),
          (e.prototype._authenticate = function (e, t, i, r) {
            var a = new s.Poly1305(t);
            r && (a.update(r), r.length % 16 > 0 && a.update(h.subarray(r.length % 16))),
              a.update(i),
              i.length % 16 > 0 && a.update(h.subarray(i.length % 16));
            var c = new Uint8Array(8);
            r && o.writeUint64LE(r.length, c),
              a.update(c),
              o.writeUint64LE(i.length, c),
              a.update(c);
            for (var l = a.digest(), u = 0; u < l.length; u++) e[u] = l[u];
            a.clean(), n.wipe(l), n.wipe(c);
          });
      })();
    },
    90781: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.mul =
          Math.imul ||
          function (e, t) {
            var i = 65535 & e,
              r = 65535 & t;
            return (
              (i * r + (((((e >>> 16) & 65535) * r + i * ((t >>> 16) & 65535)) << 16) >>> 0)) | 0
            );
          }),
        (t.add = function (e, t) {
          return (e + t) | 0;
        }),
        (t.sub = function (e, t) {
          return (e - t) | 0;
        }),
        (t.rotl = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.isInteger =
          Number.isInteger ||
          function (e) {
            return 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (t.MAX_SAFE_INTEGER = 0x1fffffffffffff),
        (t.isSafeInteger = function (e) {
          return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER;
        });
    },
    93713: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.randomStringForEntropy =
          t.randomString =
          t.randomUint32 =
          t.randomBytes =
          t.defaultRandomSource =
            void 0);
      let r = i(72137),
        s = i(33329),
        n = i(83177);
      function o(e, i = t.defaultRandomSource) {
        return i.randomBytes(e);
      }
      (t.defaultRandomSource = new r.SystemRandomSource()),
        (t.randomBytes = o),
        (t.randomUint32 = function (e = t.defaultRandomSource) {
          let i = o(4, e),
            r = (0, s.readUint32LE)(i);
          return (0, n.wipe)(i), r;
        });
      let a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      function h(e, i = a, r = t.defaultRandomSource) {
        if (i.length < 2) throw Error('randomString charset is too short');
        if (i.length > 256) throw Error('randomString charset is too long');
        let s = '',
          c = i.length,
          l = 256 - (256 % c);
        for (; e > 0; ) {
          let t = o(Math.ceil((256 * e) / l), r);
          for (let r = 0; r < t.length && e > 0; r++) {
            let n = t[r];
            n < l && ((s += i.charAt(n % c)), e--);
          }
          (0, n.wipe)(t);
        }
        return s;
      }
      (t.randomString = h),
        (t.randomStringForEntropy = function (e, i = a, r = t.defaultRandomSource) {
          return h(Math.ceil(e / (Math.log(i.length) / Math.LN2)), i, r);
        });
    },
    96393: (e, t, i) => {
      var r = i(33102),
        s = i(83177);
      (function () {
        function e(e, t, i, s) {
          void 0 === i && (i = new Uint8Array(0)),
            (this._counter = new Uint8Array(1)),
            (this._hash = e),
            (this._info = s);
          var n = r.hmac(this._hash, i, t);
          (this._hmac = new r.HMAC(e, n)),
            (this._buffer = new Uint8Array(this._hmac.digestLength)),
            (this._bufpos = this._buffer.length);
        }
        (e.prototype._fillBuffer = function () {
          this._counter[0]++;
          var e = this._counter[0];
          if (0 === e) throw Error('hkdf: cannot expand more');
          this._hmac.reset(),
            e > 1 && this._hmac.update(this._buffer),
            this._info && this._hmac.update(this._info),
            this._hmac.update(this._counter),
            this._hmac.finish(this._buffer),
            (this._bufpos = 0);
        }),
          (e.prototype.expand = function (e) {
            for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
              this._bufpos === this._buffer.length && this._fillBuffer(),
                (t[i] = this._buffer[this._bufpos++]);
            return t;
          }),
          (e.prototype.clean = function () {
            this._hmac.clean(), s.wipe(this._buffer), s.wipe(this._counter), (this._bufpos = 0);
          });
      })();
    },
  },
]);
//# sourceMappingURL=9294.209176301310d1ff.js.map
