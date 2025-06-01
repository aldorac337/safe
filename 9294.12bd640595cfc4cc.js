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
        for (var a, h, l = new Uint8Array(64), c = 0; c < i.length; c += 64) {
          !(function (e, t, i) {
            for (
              var s = (i[3] << 24) | (i[2] << 16) | (i[1] << 8) | i[0],
                n = (i[7] << 24) | (i[6] << 16) | (i[5] << 8) | i[4],
                o = (i[11] << 24) | (i[10] << 16) | (i[9] << 8) | i[8],
                a = (i[15] << 24) | (i[14] << 16) | (i[13] << 8) | i[12],
                h = (i[19] << 24) | (i[18] << 16) | (i[17] << 8) | i[16],
                l = (i[23] << 24) | (i[22] << 16) | (i[21] << 8) | i[20],
                c = (i[27] << 24) | (i[26] << 16) | (i[25] << 8) | i[24],
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
                P = l,
                O = c,
                A = u,
                T = d,
                U = g,
                L = p,
                N = f,
                R = 0;
              R < 20;
              R += 2
            )
              (T ^= y = (y + E) | 0),
                (E ^= S = (S + (T = (T >>> 16) | (T << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (U ^= b = (b + x) | 0),
                (x ^= P = (P + (U = (U >>> 16) | (U << 16))) | 0),
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
                (U ^= b = (b + x) | 0),
                (x ^= P = (P + (U = (U >>> 24) | (U << 8))) | 0),
                (x = (x >>> 25) | (x << 7)),
                (T ^= y = (y + E) | 0),
                (E ^= S = (S + (T = (T >>> 24) | (T << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (N ^= y = (y + x) | 0),
                (x ^= O = (O + (N = (N >>> 16) | (N << 16))) | 0),
                (x = (x >>> 20) | (x << 12)),
                (T ^= b = (b + _) | 0),
                (_ ^= A = (A + (T = (T >>> 16) | (T << 16))) | 0),
                (_ = (_ >>> 20) | (_ << 12)),
                (U ^= m = (m + I) | 0),
                (I ^= S = (S + (U = (U >>> 16) | (U << 16))) | 0),
                (I = (I >>> 20) | (I << 12)),
                (L ^= w = (w + E) | 0),
                (E ^= P = (P + (L = (L >>> 16) | (L << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (U ^= m = (m + I) | 0),
                (I ^= S = (S + (U = (U >>> 24) | (U << 8))) | 0),
                (I = (I >>> 25) | (I << 7)),
                (L ^= w = (w + E) | 0),
                (E ^= P = (P + (L = (L >>> 24) | (L << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (T ^= b = (b + _) | 0),
                (_ ^= A = (A + (T = (T >>> 24) | (T << 8))) | 0),
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
              r.writeUint32LE((P + l) | 0, e, 36),
              r.writeUint32LE((O + c) | 0, e, 40),
              r.writeUint32LE((A + u) | 0, e, 44),
              r.writeUint32LE((T + d) | 0, e, 48),
              r.writeUint32LE((U + g) | 0, e, 52),
              r.writeUint32LE((L + p) | 0, e, 56),
              r.writeUint32LE((N + f) | 0, e, 60);
          })(l, a, e);
          for (var u = c; u < c + 64 && u < i.length; u++) n[u] = i[u] ^ l[u - c];
          !(function (e, t, i) {
            for (var r = 1; i--; ) (r = (r + (255 & e[t])) | 0), (e[t] = 255 & r), (r >>>= 8), t++;
            if (r > 0) throw Error('ChaCha: counter overflow');
          })(a, 0, h);
        }
        return s.wipe(l), 0 === o && s.wipe(a), n;
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
      var r = i(92970),
        s = i(35978),
        n = i.n(s),
        o = i(18193),
        a = i(19757),
        h = i(56975),
        l = i(7256),
        c = i(87561),
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
        T = i(51642).Buffer;
      function U(e) {
        let [t, i, r] = e.split(':');
        return { namespace: t, reference: i, address: r };
      }
      let L = { reactNative: 'react-native', node: 'node', browser: 'browser', unknown: 'unknown' };
      function N() {
        return 'u' > typeof A && 'u' > typeof A.versions && 'u' > typeof A.versions.node;
      }
      function R() {
        return (
          !(0, p.getDocument)() && !!(0, p.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function C() {
        return !N() && !!(0, p.getNavigator)() && !!(0, p.getDocument)();
      }
      function k() {
        return R() ? L.reactNative : N() ? L.node : C() ? L.browser : L.unknown;
      }
      function j() {
        var e;
        try {
          return R() && 'u' > typeof i.g && 'u' > typeof (null == i.g ? void 0 : i.g.Application)
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
              k() === L.reactNative &&
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
            let t = k();
            return t === L.browser
              ? [t, (null == (e = (0, p.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', r].join('-'), s, n].join('/');
      }
      function M(e) {
        return Object.fromEntries(e.entries());
      }
      function B(e) {
        return new Map(Object.entries(e));
      }
      function z(e, t, i) {
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
        return (0, c.fromMiliseconds)((t || Date.now()) + (0, c.toMiliseconds)(e));
      }
      function H(e) {
        return Date.now() >= (0, c.toMiliseconds)(e);
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
      function W(e) {
        return T.from(e, 'base64').toString('utf-8');
      }
      function J(e) {
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
        J(e.outputLen), J(e.blockLen);
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
      let el = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function ec(e) {
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
            J(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          el || ec(this.state32),
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
            el || ec(this.state32),
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
          return J(e), this.xofInto(new Uint8Array(e));
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
      let eT = eg(() => new eA(136, 1, 32));
      function eU(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          i = new TextEncoder().encode(t + e);
        return '0x' + T.from(eT(i)).toString('hex');
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
            h = eU(t).substring(2),
            l =
              o +
              h +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            c = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${r}&projectId=${s}`,
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
            { result: u } = await c.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var eN = Object.defineProperty,
        eR = Object.defineProperties,
        eC = Object.getOwnPropertyDescriptors,
        ek = Object.getOwnPropertySymbols,
        ej = Object.prototype.hasOwnProperty,
        eD = Object.prototype.propertyIsEnumerable,
        eM = (e, t, i) =>
          t in e
            ? eN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i);
      let eB = (e) => e?.split(':'),
        ez = (e) => {
          let t = e && eB(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        e$ = (e) => {
          let t = e && eB(e);
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
      let eW = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        eJ = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
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
          l = 4 * !r;
        e.setUint32(t + h, o, r), e.setUint32(t + l, a, r);
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
        e2 = eW(e5),
        e3 = eW(e6);
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
            l = s[4],
            c = s[5],
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
            T = r[5] + ((w >>> 1) & 8191),
            U = r[6] + (((w >>> 14) | (E << 2)) & 8191),
            L = r[7] + (((E >>> 11) | (x << 5)) & 8191),
            N = r[8] + (((x >>> 8) | (_ << 8)) & 8191),
            R = r[9] + ((_ >>> 5) | (2048 * !i)),
            C = 0,
            k = 0 + I * n + 5 * p * S + 5 * g * P + 5 * d * O + 5 * u * A;
          (C = k >>> 13),
            (k &= 8191),
            (k += 5 * c * T + 5 * l * U + 5 * h * L + 5 * a * N + 5 * o * R),
            (C += k >>> 13),
            (k &= 8191);
          let j = C + I * o + S * n + 5 * p * P + 5 * g * O + 5 * d * A;
          (C = j >>> 13),
            (j &= 8191),
            (j += 5 * u * T + 5 * c * U + 5 * l * L + 5 * h * N + 5 * a * R),
            (C += j >>> 13),
            (j &= 8191);
          let D = C + I * a + S * o + P * n + 5 * p * O + 5 * g * A;
          (C = D >>> 13),
            (D &= 8191),
            (D += 5 * d * T + 5 * u * U + 5 * c * L + 5 * l * N + 5 * h * R),
            (C += D >>> 13),
            (D &= 8191);
          let M = C + I * h + S * a + P * o + O * n + 5 * p * A;
          (C = M >>> 13),
            (M &= 8191),
            (M += 5 * g * T + 5 * d * U + 5 * u * L + 5 * c * N + 5 * l * R),
            (C += M >>> 13),
            (M &= 8191);
          let B = C + I * l + S * h + P * a + O * o + A * n;
          (C = B >>> 13),
            (B &= 8191),
            (B += 5 * p * T + 5 * g * U + 5 * d * L + 5 * u * N + 5 * c * R),
            (C += B >>> 13),
            (B &= 8191);
          let z = C + I * c + S * l + P * h + O * a + A * o;
          (C = z >>> 13),
            (z &= 8191),
            (z += T * n + 5 * p * U + 5 * g * L + 5 * d * N + 5 * u * R),
            (C += z >>> 13),
            (z &= 8191);
          let $ = C + I * u + S * c + P * l + O * h + A * a;
          (C = $ >>> 13),
            ($ &= 8191),
            ($ += T * o + U * n + 5 * p * L + 5 * g * N + 5 * d * R),
            (C += $ >>> 13),
            ($ &= 8191);
          let K = C + I * d + S * u + P * c + O * l + A * h;
          (C = K >>> 13),
            (K &= 8191),
            (K += T * a + U * o + L * n + 5 * p * N + 5 * g * R),
            (C += K >>> 13),
            (K &= 8191);
          let H = C + I * g + S * d + P * u + O * c + A * l;
          (C = H >>> 13),
            (H &= 8191),
            (H += T * h + U * a + L * o + N * n + 5 * p * R),
            (C += H >>> 13),
            (H &= 8191);
          let F = C + I * p + S * g + P * d + O * u + A * c;
          (C = F >>> 13),
            (F &= 8191),
            (F += T * l + U * h + L * a + N * o + R * n),
            (C += F >>> 13),
            (F &= 8191),
            (k = 8191 & (C = ((C = ((C << 2) + C) | 0) + k) | 0)),
            (C >>>= 13),
            (j += C),
            (r[0] = k),
            (r[1] = j),
            (r[2] = D),
            (r[3] = M),
            (r[4] = B),
            (r[5] = z),
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
            (t, a, h, l, c = 0) => {
              eq(t), eq(a), eq(h);
              let u = h.length;
              if ((void 0 === l && (l = new Uint8Array(u)), eq(l), eH(c), c < 0 || c >= e9))
                throw Error('arx: counter overflow');
              if (l.length < u)
                throw Error(`arx: output (${l.length}) is shorter than data (${u})`);
              let d = [],
                g = t.length,
                p,
                f;
              if (32 === g) d.push((p = eQ(t))), (f = e3);
              else if (16 === g && i)
                (p = new Uint8Array(32)).set(t), p.set(t, 16), (f = e2), d.push(p);
              else throw Error(`arx: invalid 32-byte key, got length=${g}`);
              e4(a) || d.push((a = eQ(a)));
              let y = eW(p);
              if (r) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                r(f, y, eW(a.subarray(0, 16)), y), (a = a.subarray(16));
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
                    l = new Uint8Array(64),
                    c = eW(l),
                    u = e4(s) && e4(n),
                    d = u ? eW(s) : e7,
                    g = u ? eW(n) : e7;
                  for (let p = 0; p < h; o++) {
                    if ((e(t, i, r, c, o, a), o >= e9)) throw Error('arx: counter overflow');
                    let f = Math.min(64, h - p);
                    if (u && 64 === f) {
                      let e = p / 4;
                      if (p % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, i; t < 16; t++) g[(i = e + t)] = d[i] ^ c[t];
                      p += 64;
                      continue;
                    }
                    for (let e = 0, t; e < f; e++) n[(t = p + e)] = s[t] ^ l[e];
                    p += f;
                  }
                })(e, f, y, eW(a), h, l, c, o),
                e0(...d),
                l
              );
            }
          );
        })(
          function (e, t, i, r, s, n = 20) {
            let o = e[0],
              a = e[1],
              h = e[2],
              l = e[3],
              c = t[0],
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
              S = l,
              P = c,
              O = u,
              A = d,
              T = g,
              U = p,
              L = f,
              N = y,
              R = b,
              C = s,
              k = m,
              j = w,
              D = E;
            for (let e = 0; e < n; e += 2)
              (U = (U + (C = e8(C ^ (x = (x + P) | 0), 16))) | 0),
                (x = (x + (P = e8(P ^ U, 12))) | 0),
                (U = (U + (C = e8(C ^ x, 8))) | 0),
                (P = e8(P ^ U, 7)),
                (L = (L + (k = e8(k ^ (_ = (_ + O) | 0), 16))) | 0),
                (_ = (_ + (O = e8(O ^ L, 12))) | 0),
                (L = (L + (k = e8(k ^ _, 8))) | 0),
                (O = e8(O ^ L, 7)),
                (N = (N + (j = e8(j ^ (I = (I + A) | 0), 16))) | 0),
                (I = (I + (A = e8(A ^ N, 12))) | 0),
                (N = (N + (j = e8(j ^ I, 8))) | 0),
                (A = e8(A ^ N, 7)),
                (R = (R + (D = e8(D ^ (S = (S + T) | 0), 16))) | 0),
                (S = (S + (T = e8(T ^ R, 12))) | 0),
                (R = (R + (D = e8(D ^ S, 8))) | 0),
                (T = e8(T ^ R, 7)),
                (N = (N + (D = e8(D ^ (x = (x + O) | 0), 16))) | 0),
                (x = (x + (O = e8(O ^ N, 12))) | 0),
                (N = (N + (D = e8(D ^ x, 8))) | 0),
                (O = e8(O ^ N, 7)),
                (R = (R + (C = e8(C ^ (_ = (_ + A) | 0), 16))) | 0),
                (_ = (_ + (A = e8(A ^ R, 12))) | 0),
                (R = (R + (C = e8(C ^ _, 8))) | 0),
                (A = e8(A ^ R, 7)),
                (U = (U + (k = e8(k ^ (I = (I + T) | 0), 16))) | 0),
                (I = (I + (T = e8(T ^ U, 12))) | 0),
                (U = (U + (k = e8(k ^ I, 8))) | 0),
                (T = e8(T ^ U, 7)),
                (L = (L + (j = e8(j ^ (S = (S + P) | 0), 16))) | 0),
                (S = (S + (P = e8(P ^ L, 12))) | 0),
                (L = (L + (j = e8(j ^ S, 8))) | 0),
                (P = e8(P ^ L, 7));
            let M = 0;
            (r[M++] = (o + x) | 0),
              (r[M++] = (a + _) | 0),
              (r[M++] = (h + I) | 0),
              (r[M++] = (l + S) | 0),
              (r[M++] = (c + P) | 0),
              (r[M++] = (u + O) | 0),
              (r[M++] = (d + A) | 0),
              (r[M++] = (g + T) | 0),
              (r[M++] = (p + U) | 0),
              (r[M++] = (f + L) | 0),
              (r[M++] = (y + N) | 0),
              (r[M++] = (b + R) | 0),
              (r[M++] = (s + C) | 0),
              (r[M++] = (m + k) | 0),
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
          h = eJ(a);
        eX(h, 0, BigInt(s ? s.length : 0), !0), eX(h, 8, BigInt(r.length), !0), o.update(a);
        let l = o.digest();
        return e0(n, a), l;
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
      class tl extends ed {
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
      let tc = (e, t, i) => new tl(e, t).update(i).digest();
      tc.create = (e, t) => new tl(e, t);
      let tu = new Uint8Array([0]),
        td = new Uint8Array(),
        tg = (e, t, i, r, s) =>
          (function (e, t, i, r = 32) {
            if ((Y(e), J(r), r > 255 * e.outputLen)) throw Error('Length should be <= 255*HashLen');
            let s = Math.ceil(r / e.outputLen);
            void 0 === i && (i = td);
            let n = new Uint8Array(s * e.outputLen),
              o = tc.create(e, t),
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
              return Y(e), void 0 === i && (i = new Uint8Array(e.outputLen)), tc(e, eu(i), eu(t));
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
              l = 4 * !r;
            e.setUint32(t + h, o, r), e.setUint32(t + l, a, r);
          })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
          let o = ea(e),
            a = this.outputLen;
          if (a % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let h = a / 4,
            l = this.get();
          if (h > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < h; e++) o.setUint32(4 * e, l[e], s);
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
          let { A: i, B: r, C: s, D: n, E: o, F: a, G: h, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var c, u, d, g;
            let t =
                (l +
                  (eh(o, 6) ^ eh(o, 11) ^ eh(o, 25)) +
                  (((c = o) & a) ^ (~c & h)) +
                  tf[e] +
                  tb[e]) |
                0,
              p =
                ((eh(i, 2) ^ eh(i, 13) ^ eh(i, 22)) +
                  (((u = i) & (d = r)) ^ (u & (g = s)) ^ (d & g))) |
                0;
            (l = h),
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
            (l = (l + this.H) | 0),
            this.set(i, r, s, n, o, a, h, l);
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
      let tT = (e) => 'bigint' == typeof e && tv <= e;
      function tU(e, t, i, r) {
        if (!(tT(t) && tT(i) && tT(r)) || !(i <= t) || !(t < r))
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
        tR = BigInt(1);
      function tC(e, t) {
        let i = e % t;
        return i >= tN ? i : t + i;
      }
      function tk(e, t, i) {
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
      let tB = BigInt(1),
        tz = BigInt(2),
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
            r = (e) => tC(e, i),
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
                  if (i === tR) return tN;
                  let r = tR;
                  for (; t > tN; ) t & tR && (r = (r * e) % i), (e = (e * e) % i), (t >>= tR);
                  return r;
                })(e, i - BigInt(2), i));
          function l(e, t, i) {
            let s = r(e * (t - i));
            return [(t = r(t - s)), (i = r(i + s))];
          }
          let c = (t.a - BigInt(2)) / BigInt(4);
          function u(e) {
            var t;
            return tP((t = r(e)).toString(16).padStart(2 * n, '0')).reverse();
          }
          function d(e, t) {
            let d = (function (e, t) {
              tU('u', e, tj, i), tU('scalar', t, tj, i);
              let n = tD,
                o = tj,
                a = e,
                u = tD,
                d = tj,
                g;
              for (let i = BigInt(s - 1); i >= tj; i--) {
                let s = (t >> i) & tD;
                (d ^= s),
                  (n = (g = l(d, n, a))[0]),
                  (a = g[1]),
                  (o = (g = l(d, o, u))[0]),
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
                (a = r(x * x)), (u = r(e * r(_ * _))), (n = r(p * y)), (o = r(b * (p + r(c * b))));
              }
              return (
                (n = (g = l(d, n, a))[0]),
                (a = g[1]),
                (o = (g = l(d, o, u))[0]),
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
                o = (tk(n, tz, tM) * n) % tM,
                a = (tk(o, tB, tM) * e) % tM,
                h = (tk(a, tK, tM) * a) % tM,
                l = (tk(h, t, tM) * h) % tM,
                c = (tk(l, i, tM) * l) % tM,
                u = (tk(c, r, tM) * c) % tM,
                d = (tk(u, s, tM) * u) % tM,
                g = (tk(d, s, tM) * u) % tM,
                p = (tk(g, t, tM) * h) % tM;
              return { pow_p_5_8: (tk(p, tz, tM) * e) % tM, b2: n };
            })(e);
            return tC(tk(t, t$, tM) * i, tM);
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
      function tW() {
        return S(ep(32), tq);
      }
      function tJ(e) {
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
          let t = W(e);
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
      function t2(e) {
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
      var t3 = Object.defineProperty,
        t8 = Object.defineProperties,
        t4 = Object.getOwnPropertyDescriptors,
        t9 = Object.getOwnPropertySymbols,
        t7 = Object.prototype.hasOwnProperty,
        ie = Object.prototype.propertyIsEnumerable,
        it = (e, t, i) =>
          t in e
            ? t3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
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
      function il(e, t) {
        let { message: i, code: r } = io[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function ic(e) {
        return typeof e > 'u';
      }
      function iu(e, t) {
        return !!(t && ic(e)) || ('string' == typeof e && !!e.trim().length);
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
        let e = k();
        return new Promise((t) => {
          switch (e) {
            case L.browser:
              t(C() && navigator?.onLine);
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
        if (R() && 'u' > typeof i.g && null != i.g && i.g.NetInfo) {
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
        iO = c.ONE_DAY,
        iA = c.SIX_HOURS,
        iT = 'wss://relay.walletconnect.org',
        iU = {
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
        iR = { link_mode: 'link_mode', relay: 'relay' },
        iC = 'WALLETCONNECT_LINK_MODE_APPS',
        ik = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        ij = 1e3 * c.FIVE_SECONDS,
        iD = {
          wc_pairingDelete: {
            req: { ttl: c.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: c.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: c.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: c.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: c.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: c.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        iM = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        iB = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        iz = {
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
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var r = 0, s = 0; e[t] === h; ) r++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var c = i[e.charCodeAt(t)];
              if (255 === c) return;
              for (var u = 0, d = n - 1; (0 !== c || u < s) && -1 !== d; d--, u++)
                (c += (a * o[d]) >>> 0), (o[d] = c % 256 >>> 0), (c = (c / 256) >>> 0);
              if (0 !== c) throw Error('Non-zero carry');
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
            for (var o = ((n - s) * c + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, g = o - 1; (0 !== u || d < r) && -1 !== g; g--, d++)
                (u += (256 * l[g]) >>> 0), (l[g] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (r = d), s++;
            }
            for (var p = o - r; p !== o && 0 === l[p]; ) p++;
            for (var f = h.repeat(i); p < o; ++p) f += e.charAt(l[p]);
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
        iW = (e) => new TextEncoder().encode(e),
        iJ = (e) => new TextDecoder().decode(e);
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
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (h = (h << i) | n), (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (h >> a)));
          }
          if (a >= i || 255 & (h << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        i2 = (e, t, i) => {
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
        i3 = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          i1({ prefix: t, name: e, encode: (e) => i2(e, r, i), decode: (t) => i6(t, r, i, e) });
      var i8 = Object.freeze({
          __proto__: null,
          identity: i1({
            prefix: '\0',
            name: 'identity',
            encode: (e) => iJ(e),
            decode: (e) => iW(e),
          }),
        }),
        i4 = Object.freeze({
          __proto__: null,
          base2: i3({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        i9 = Object.freeze({
          __proto__: null,
          base8: i3({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        i7 = Object.freeze({
          __proto__: null,
          base10: i5({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        re = Object.freeze({
          __proto__: null,
          base16: i3({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: i3({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let rt = i3({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        ri = i3({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        rr = i3({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        rs = i3({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        rn = i3({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        ro = i3({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        ra = i3({
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
          base32hexpadupper: i3({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: i3({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        rl = Object.freeze({
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
        rc = Object.freeze({
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
      let ru = i3({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        rd = i3({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var rg = Object.freeze({
        __proto__: null,
        base64: ru,
        base64pad: rd,
        base64url: i3({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: i3({
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
        rT = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: iG, digest: (e) => r_(0, iG(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let rU = { ...i8, ...i4, ...i9, ...i7, ...re, ...rh, ...rl, ...rc, ...rg, ...rb };
      function rL(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...rA, ...rT });
      let rN = rL(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        rR = rL(
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
        rC = { utf8: rN, 'utf-8': rN, hex: rU.base16, latin1: rR, ascii: rR, binary: rR, ...rU };
      var rk = Object.defineProperty,
        rj = (e, t, i) =>
          t in e
            ? rk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
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
          return 'u' > typeof e ? B(e) : void 0;
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
      var rB = Object.defineProperty,
        rz = (e, t, i) =>
          t in e
            ? rB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r$ = (e, t, i) => rz(e, 'symbol' != typeof t ? t + '' : t, i);
      class rK {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            r$(this, 'name', 'crypto'),
            r$(this, 'keychain'),
            r$(this, 'randomSessionIdentifier', tW()),
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
            (e = tW()), await this.keychain.set(iP, e);
          }
          return (function (e, t = 'utf8') {
            let i = rC[t];
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
      class rV extends l.dQ {
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
              let i = tJ(t),
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
            rq(this, 'has', (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[tJ(t)])),
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
          return 'u' > typeof e ? B(e) : void 0;
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
        rW = Object.defineProperties,
        rJ = Object.getOwnPropertyDescriptors,
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
        r1 = (e, t) => rW(e, rJ(t)),
        r5 = (e, t, i) => rQ(e, 'symbol' != typeof t ? t + '' : t, i);
      class r6 extends l.qE {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            r5(this, 'events', new s.EventEmitter()),
            r5(this, 'name', 'publisher'),
            r5(this, 'queue', new Map()),
            r5(this, 'publishTimeout', (0, c.toMiliseconds)(c.ONE_MINUTE)),
            r5(this, 'initialPublishTimeout', (0, c.toMiliseconds)(15 * c.ONE_SECOND)),
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
                l = {
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
                c = `Failed to publish payload, please try again. id:${h} tag:${a}`;
              try {
                let r = new Promise(async (r) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(iU.publish, n),
                      r(l));
                  };
                  this.relayer.events.on(iU.publish, n);
                  let c = z(
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
                    await c, this.events.removeListener(iU.publish, n);
                  } catch (e) {
                    this.queue.set(h, r1(r0({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: h, topic: e, message: t, opts: i },
                }),
                  await z(r, this.publishTimeout, c);
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
              tag: l,
              id: c,
              attestation: u,
              tvf: d,
            } = e,
            g = {
              method: t5(t1().protocol).publish,
              params: r0({ topic: n, message: o, ttl: a, prompt: h, tag: l, attestation: u }, d),
              id: c,
            };
          ic(null == (t = g.params) ? void 0 : t.prompt) &&
            (null == (i = g.params) || delete i.prompt),
            ic(null == (r = g.params) ? void 0 : r.tag) && (null == (s = g.params) || delete s.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: g });
          let p = await this.relayer.request(g);
          return (
            this.relayer.events.emit(iU.publish, e),
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
              (this.needsTransportRestart = !1), this.relayer.events.emit(iU.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(iU.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var r2 = Object.defineProperty,
        r3 = (e, t, i) =>
          t in e
            ? r2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        r8 = (e, t, i) => r3(e, 'symbol' != typeof t ? t + '' : t, i);
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
      class sh extends l.mF {
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
            sa(this, 'subscribeTimeout', (0, c.toMiliseconds)(c.ONE_MINUTE)),
            sa(this, 'initialSubscribeTimeout', (0, c.toMiliseconds)(15 * c.ONE_SECOND)),
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
                let s = new c.Watch();
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
                this.events.on(ik.created, async (e) => {
                  let t = ik.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(ik.deleted, async (e) => {
                  let t = ik.deleted;
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
            let s = il('USER_DISCONNECTED', `${this.name}, ${e}`);
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
          i?.transportType === iR.relay && (await this.restartToComplete());
          let s = { method: t5(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
          let n = null == (r = i?.internal) ? void 0 : r.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (i?.transportType === iR.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  },
                  (0, c.toMiliseconds)(c.ONE_SECOND)
                ),
                t
              );
            let r = new Promise(async (t) => {
                let i = (r) => {
                  r.topic === e && (this.events.removeListener(ik.created, i), t(r.id));
                };
                this.events.on(ik.created, i);
                try {
                  let r = await z(
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
                  this.events.removeListener(ik.created, i), t(r);
                } catch {}
              }),
              o = await z(r, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
            if (!o && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return o ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(iU.connection_stalled),
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
            await await z(
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
            this.relayer.events.emit(iU.connection_stalled);
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
            t = await await z(
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
            this.relayer.events.emit(iU.connection_stalled);
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
            this.events.emit(ik.created, t);
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
            this.events.emit(ik.deleted, so(sn({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(ik.sync);
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
          this.events.emit(ik.resubscribed);
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
            (await ((t = (0, c.toMiliseconds)(c.ONE_SECOND)), new Promise((e) => setTimeout(e, t))),
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
          return tJ(e + (await this.getClientId()));
        }
      }
      var sl = Object.defineProperty,
        sc = Object.getOwnPropertySymbols,
        su = Object.prototype.hasOwnProperty,
        sd = Object.prototype.propertyIsEnumerable,
        sg = (e, t, i) =>
          t in e
            ? sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sp = (e, t) => {
          for (var i in t || (t = {})) su.call(t, i) && sg(e, i, t[i]);
          if (sc) for (var i of sc(t)) sd.call(t, i) && sg(e, i, t[i]);
          return e;
        },
        sf = (e, t, i) => sg(e, 'symbol' != typeof t ? t + '' : t, i);
      class sy extends l.m5 {
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
            sf(this, 'heartBeatTimeout', (0, c.toMiliseconds)(c.THIRTY_SECONDS + c.FIVE_SECONDS)),
            sf(this, 'reconnectTimeout'),
            sf(this, 'connectPromise'),
            sf(this, 'requestsInFlight', []),
            sf(this, 'connectTimeout', (0, c.toMiliseconds)(15 * c.ONE_SECOND)),
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
                this.events.emit(iU.connect);
            }),
            sf(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            sf(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(e, `Fatal socket error: ${e?.message}`),
                this.events.emit(iU.error, e),
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
            (this.relayUrl = e?.relayUrl || iT),
            (this.projectId = e.projectId),
            R() &&
            'u' > typeof i.g &&
            'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
            (null == i.g ? void 0 : i.g.Platform.OS) === 'android'
              ? (this.packageName = j())
              : R() &&
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
              transportType: iR.relay,
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
              t.topic === e && (this.subscriber.off(ik.created, h), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(ik.created, h);
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
            ? await z(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(() =>
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
            let e = K(c.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(iU.message, e), await this.recordMessageEvent(e);
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
                    await z(
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
            await new Promise((e) => setTimeout(e, (0, c.toMiliseconds)(+t))), t++;
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
                let l = i.split('?'),
                  c = D(e, t, r),
                  u = (function (e, t) {
                    let i = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let r = t[e];
                        void 0 !== r && i.set(e, r);
                      }
                    return i.toString();
                  })(l[1] || '', {
                    auth: s,
                    ua: c,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: h || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + '?' + u;
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
              o = { topic: i, message: r, publishedAt: s, transportType: iR.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(sp({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else (0, im.isJsonRpcResponse)(e) && this.events.emit(iU.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(iU.message, e), await this.recordMessageEvent(e));
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
            switch (k()) {
              case L.browser:
                (t = e),
                  !R() &&
                    C() &&
                    (window.addEventListener('online', () => t(!0)),
                    window.addEventListener('offline', () => t(!1)));
                break;
              case L.reactNative:
                (r = e),
                  R() &&
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
            this.events.emit(iU.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                this.connectPromise ||
                (this.reconnectTimeout = setTimeout(
                  async () => {
                    clearTimeout(this.reconnectTimeout),
                      await this.transportOpen().catch((e) => this.logger.error(e, e?.message));
                  },
                  (0, c.toMiliseconds)(0.1)
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
      class sI extends l.pi {
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
                  this.getKey && null !== e && !ic(e)
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
              let t = tW(),
                i = await this.core.crypto.setSymKey(t),
                r = K(c.FIVE_MINUTES),
                s = { protocol: 'irn' },
                n = { topic: i, expiry: r, relay: s, active: !1, methods: e?.methods },
                o = t2({
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
              let h = o || K(c.FIVE_MINUTES),
                l = { topic: r, relay: n, expiry: h, active: !1, methods: a };
              this.core.expirer.set(r, h),
                await this.pairings.set(r, l),
                i.addTrace(iF.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(iM.create, l),
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
              return i.addTrace(iF.subscribe_pairing_topic_success), l;
            }),
            sO(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = K(c.FIVE_MINUTES);
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
                  } = (function (e = c.FIVE_MINUTES, t) {
                    let i, r, s, n;
                    let o = (0, c.toMiliseconds)(e || c.FIVE_MINUTES);
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
                (await this.sendRequest(t, 'wc_pairingDelete', il('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            sO(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: i, expiry: r, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return t2({
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
                  this.pairings.delete(e, il('USER_DISCONNECTED')),
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
                let t = il('WC_METHOD_UNSUPPORTED', r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            sO(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(il('WC_METHOD_UNSUPPORTED', e));
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
                      let i = W(e);
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
                (0, c.toMiliseconds)(r?.expiryTimestamp) < Date.now()
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
          this.core.relayer.on(iU.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              r === iR.link_mode ||
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
          this.core.expirer.on(iz.expired, async (e) => {
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
      var sT = Object.defineProperty,
        sU = (e, t, i) =>
          t in e
            ? sT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sL = (e, t, i) => sU(e, 'symbol' != typeof t ? t + '' : t, i);
      class sN extends l.lZ {
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
                expiry: K(c.THIRTY_DAYS),
              };
              this.records.set(r.id, r), this.persist(), this.events.emit(iB.created, r);
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
                this.events.emit(iB.updated, t));
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
                    (this.records.delete(i.id), this.events.emit(iB.deleted, i));
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
          await this.setJsonRpcRecords(this.values), this.events.emit(iB.sync);
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
          this.events.on(iB.created, (e) => {
            let t = iB.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(iB.updated, (e) => {
              let t = iB.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(iB.deleted, (e) => {
              let t = iB.deleted;
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
              (0, c.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(iB.deleted, t, !1),
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
      var sR = Object.defineProperty,
        sC = (e, t, i) =>
          t in e
            ? sR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sk = (e, t, i) => sC(e, 'symbol' != typeof t ? t + '' : t, i);
      class sj extends l.Vx {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            sk(this, 'expirations', new Map()),
            sk(this, 'events', new s.EventEmitter()),
            sk(this, 'name', 'expirer'),
            sk(this, 'version', '0.3'),
            sk(this, 'cached', []),
            sk(this, 'initialized', !1),
            sk(this, 'storagePrefix', i_),
            sk(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            sk(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            sk(this, 'set', (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(iz.created, { target: i, expiration: r });
            }),
            sk(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            sk(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(iz.deleted, { target: t, expiration: i });
              }
            }),
            sk(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            sk(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            sk(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            sk(this, 'removeListener', (e, t) => {
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
          await this.setExpirations(this.values), this.events.emit(iz.sync);
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
          (0, c.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(iz.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(o.li.pulse, () => this.checkExpirations()),
            this.events.on(iz.created, (e) => {
              let t = iz.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(iz.expired, (e) => {
              let t = iz.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(iz.deleted, (e) => {
              let t = iz.deleted;
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
        sB = (e, t, i) => sM(e, 'symbol' != typeof t ? t + '' : t, i);
      class sz extends l.zl {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            sB(this, 'name', 'verify-api'),
            sB(this, 'abortController'),
            sB(this, 'isDevEnv'),
            sB(this, 'verifyUrlV3', iK),
            sB(this, 'storagePrefix', i_),
            sB(this, 'version', 2),
            sB(this, 'publicKey'),
            sB(this, 'fetchPromise'),
            sB(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, c.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            sB(this, 'register', async (e) => {
              if (!C() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = (0, p.getDocument)(),
                  t = this.startAbortTimer(5 * c.ONE_SECOND),
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
            sB(this, 'resolve', async (e) => {
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
            sB(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * c.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(i), 200 === r.status ? await r.json() : void 0;
            }),
            sB(this, 'getVerifyUrl', (e) => {
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
            sB(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(c.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            sB(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            sB(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            sB(this, 'isValidJwtAttestation', async (e) => {
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
            sB(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            sB(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            sB(this, 'validateAttestation', (e, t) => {
              let i = (function (e, t) {
                  let [i, r, s] = e.split('.'),
                    n = T.from(
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
                    l = new P.ec('p256').keyFromPublic(
                      {
                        x: T.from(t.x, 'base64').toString('hex'),
                        y: T.from(t.y, 'base64').toString('hex'),
                      },
                      'hex'
                    ),
                    c = S(h, tq);
                  if (!l.verify(c, { r: o, s: a })) throw Error('Invalid signature');
                  return (0, d.Cq)(e).payload;
                })(e, t.publicKey),
                r = { hasExpired: (0, c.toMiliseconds)(i.exp) < Date.now(), payload: i };
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
            setTimeout(() => this.abortController.abort(), (0, c.toMiliseconds)(e))
          );
        }
      }
      var s$ = Object.defineProperty,
        sK = (e, t, i) =>
          t in e
            ? s$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sH = (e, t, i) => sK(e, 'symbol' != typeof t ? t + '' : t, i);
      class sF extends l.GF {
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
        sW = Object.prototype.propertyIsEnumerable,
        sJ = (e, t, i) =>
          t in e
            ? sq(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sZ = (e, t) => {
          for (var i in t || (t = {})) sG.call(t, i) && sJ(e, i, t[i]);
          if (sV) for (var i of sV(t)) sW.call(t, i) && sJ(e, i, t[i]);
          return e;
        },
        sY = (e, t, i) => sJ(e, 'symbol' != typeof t ? t + '' : t, i);
      class sX extends l.$Q {
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
                    (0, c.fromMiliseconds)(Date.now()) - (0, c.fromMiliseconds)(e.timestamp) >
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
        s2 = (e, t) => {
          for (var i in t || (t = {})) s1.call(t, i) && s6(e, i, t[i]);
          if (s0) for (var i of s0(t)) s5.call(t, i) && s6(e, i, t[i]);
          return e;
        },
        s3 = (e, t, i) => s6(e, 'symbol' != typeof t ? t + '' : t, i);
      class s8 extends l.ZP {
        constructor(e) {
          var t;
          super(e),
            s3(this, 'protocol', 'wc'),
            s3(this, 'version', 2),
            s3(this, 'name', ix),
            s3(this, 'relayUrl'),
            s3(this, 'projectId'),
            s3(this, 'customStoragePrefix'),
            s3(this, 'events', new s.EventEmitter()),
            s3(this, 'logger'),
            s3(this, 'heartbeat'),
            s3(this, 'relayer'),
            s3(this, 'crypto'),
            s3(this, 'storage'),
            s3(this, 'history'),
            s3(this, 'expirer'),
            s3(this, 'pairing'),
            s3(this, 'verify'),
            s3(this, 'echoClient'),
            s3(this, 'linkModeSupportedApps'),
            s3(this, 'eventClient'),
            s3(this, 'initialized', !1),
            s3(this, 'logChunkController'),
            s3(this, 'on', (e, t) => this.events.on(e, t)),
            s3(this, 'once', (e, t) => this.events.once(e, t)),
            s3(this, 'off', (e, t) => this.events.off(e, t)),
            s3(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            s3(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: i }) => {
              if (!e || !t) return;
              let r = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: iR.link_mode,
              };
              this.relayer.onLinkMessageEvent(r, { sessionExists: i });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || iT),
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
              null != e && e.storage ? e.storage : new a.A(s2(s2({}, iS), e?.storageOptions))),
            (this.relayer = new sy({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new sA(this, this.logger)),
            (this.verify = new sz(this, this.logger, this.storage)),
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
            await this.storage.setItem(iC, this.linkModeSupportedApps));
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
              (this.linkModeSupportedApps = (await this.storage.getItem(iC)) || []),
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
      function nl(e, t, i) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i },
          s = nh.bind(r);
        return (s.listener = i), (r.wrapFn = s), s;
      }
      function nc(e, t, i) {
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
          else for (var h = a.length, l = nd(a, h), i = 0; i < h; ++i) nt(l[i], this, t);
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
          return nn(t), this.on(e, nl(this, e, t)), this;
        }),
        (nr.prototype.prependOnceListener = function (e, t) {
          return nn(t), this.prependListener(e, nl(this, e, t)), this;
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
          return nc(this, e, !0);
        }),
        (nr.prototype.rawListeners = function (e) {
          return nc(this, e, !1);
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
      function l(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
        );
      }
      function c(e, t, i) {
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
          c((e / 0x100000000) >>> 0, t, i),
          c(e >>> 0, t, i + 4),
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
        (t.readUint32LE = l),
        (t.writeUint32BE = c),
        (t.writeInt32BE = c),
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
          var i = l(e, t);
          return 0x100000000 * l(e, t + 4) + i;
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
      var l = Object.defineProperty,
        c = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        g = (e, t, i) =>
          t in e
            ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
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
            l =
              o +
              h +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            c = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${r}&projectId=${s}`,
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
            { result: u } = await c.json();
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
        T = (e) => {
          let t = e && A(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        U = (e) => {
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
        R = 'base64pad';
      function C(e) {
        return Number(v(e, N));
      }
      var k = Object.defineProperty,
        j = Object.defineProperties,
        D = Object.getOwnPropertyDescriptors,
        M = Object.getOwnPropertySymbols,
        B = Object.prototype.hasOwnProperty,
        z = Object.prototype.propertyIsEnumerable,
        $ = (e, t, i) =>
          t in e
            ? k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        K = Object.defineProperty,
        H = Object.defineProperties,
        F = Object.getOwnPropertyDescriptors,
        q = Object.getOwnPropertySymbols,
        V = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        W = (e, t, i) =>
          t in e
            ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        J = (e, t) => {
          for (var i in t || (t = {})) V.call(t, i) && W(e, i, t[i]);
          if (q) for (var i of q(t)) G.call(t, i) && W(e, i, t[i]);
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
            l = eh(Object.keys(t)),
            c = h.filter((e) => !l.includes(e));
          return (
            c.length &&
              (r = er(
                'NON_CONFORMING_NAMESPACES',
                `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${c.toString()}
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
              var t, i, s, o, a, l;
              if (!r[e]) return;
              let c =
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
                g = c?.map((t) => r[e].accounts.filter((e) => e.includes(`${t}:`))).flat();
              h[e] = {
                chains: m(null == (s = h[e]) ? void 0 : s.chains, c),
                methods: m(null == (o = h[e]) ? void 0 : o.methods, u),
                events: m(null == (a = h[e]) ? void 0 : a.events, d),
                accounts: m(null == (l = h[e]) ? void 0 : l.accounts, g),
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
            l = Q(n) ? n.split(':')[0] : n;
          s[l] = Z(J({}, s[l]), {
            chains: m(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: m(a, null == (i = s[l]) ? void 0 : i.methods),
            events: m(h, null == (r = s[l]) ? void 0 : r.events),
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
      function l(e, t, i) {
        for (let r = 0; r < 16; r++) e[r] = t[r] - i[r];
      }
      function c(e, t, i) {
        let r,
          s,
          n = 0,
          o = 0,
          a = 0,
          h = 0,
          l = 0,
          c = 0,
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
          T = 0,
          U = 0,
          L = 0,
          N = 0,
          R = 0,
          C = 0,
          k = 0,
          j = 0,
          D = i[0],
          M = i[1],
          B = i[2],
          z = i[3],
          $ = i[4],
          K = i[5],
          H = i[6],
          F = i[7],
          q = i[8],
          V = i[9],
          G = i[10],
          W = i[11],
          J = i[12],
          Z = i[13],
          Y = i[14],
          X = i[15];
        (n += (r = t[0]) * D),
          (o += r * M),
          (a += r * B),
          (h += r * z),
          (l += r * $),
          (c += r * K),
          (u += r * H),
          (d += r * F),
          (g += r * q),
          (p += r * V),
          (f += r * G),
          (y += r * W),
          (b += r * J),
          (m += r * Z),
          (w += r * Y),
          (E += r * X),
          (o += (r = t[1]) * D),
          (a += r * M),
          (h += r * B),
          (l += r * z),
          (c += r * $),
          (u += r * K),
          (d += r * H),
          (g += r * F),
          (p += r * q),
          (f += r * V),
          (y += r * G),
          (b += r * W),
          (m += r * J),
          (w += r * Z),
          (E += r * Y),
          (x += r * X),
          (a += (r = t[2]) * D),
          (h += r * M),
          (l += r * B),
          (c += r * z),
          (u += r * $),
          (d += r * K),
          (g += r * H),
          (p += r * F),
          (f += r * q),
          (y += r * V),
          (b += r * G),
          (m += r * W),
          (w += r * J),
          (E += r * Z),
          (x += r * Y),
          (_ += r * X),
          (h += (r = t[3]) * D),
          (l += r * M),
          (c += r * B),
          (u += r * z),
          (d += r * $),
          (g += r * K),
          (p += r * H),
          (f += r * F),
          (y += r * q),
          (b += r * V),
          (m += r * G),
          (w += r * W),
          (E += r * J),
          (x += r * Z),
          (_ += r * Y),
          (I += r * X),
          (l += (r = t[4]) * D),
          (c += r * M),
          (u += r * B),
          (d += r * z),
          (g += r * $),
          (p += r * K),
          (f += r * H),
          (y += r * F),
          (b += r * q),
          (m += r * V),
          (w += r * G),
          (E += r * W),
          (x += r * J),
          (_ += r * Z),
          (I += r * Y),
          (S += r * X),
          (c += (r = t[5]) * D),
          (u += r * M),
          (d += r * B),
          (g += r * z),
          (p += r * $),
          (f += r * K),
          (y += r * H),
          (b += r * F),
          (m += r * q),
          (w += r * V),
          (E += r * G),
          (x += r * W),
          (_ += r * J),
          (I += r * Z),
          (S += r * Y),
          (P += r * X),
          (u += (r = t[6]) * D),
          (d += r * M),
          (g += r * B),
          (p += r * z),
          (f += r * $),
          (y += r * K),
          (b += r * H),
          (m += r * F),
          (w += r * q),
          (E += r * V),
          (x += r * G),
          (_ += r * W),
          (I += r * J),
          (S += r * Z),
          (P += r * Y),
          (O += r * X),
          (d += (r = t[7]) * D),
          (g += r * M),
          (p += r * B),
          (f += r * z),
          (y += r * $),
          (b += r * K),
          (m += r * H),
          (w += r * F),
          (E += r * q),
          (x += r * V),
          (_ += r * G),
          (I += r * W),
          (S += r * J),
          (P += r * Z),
          (O += r * Y),
          (A += r * X),
          (g += (r = t[8]) * D),
          (p += r * M),
          (f += r * B),
          (y += r * z),
          (b += r * $),
          (m += r * K),
          (w += r * H),
          (E += r * F),
          (x += r * q),
          (_ += r * V),
          (I += r * G),
          (S += r * W),
          (P += r * J),
          (O += r * Z),
          (A += r * Y),
          (T += r * X),
          (p += (r = t[9]) * D),
          (f += r * M),
          (y += r * B),
          (b += r * z),
          (m += r * $),
          (w += r * K),
          (E += r * H),
          (x += r * F),
          (_ += r * q),
          (I += r * V),
          (S += r * G),
          (P += r * W),
          (O += r * J),
          (A += r * Z),
          (T += r * Y),
          (U += r * X),
          (f += (r = t[10]) * D),
          (y += r * M),
          (b += r * B),
          (m += r * z),
          (w += r * $),
          (E += r * K),
          (x += r * H),
          (_ += r * F),
          (I += r * q),
          (S += r * V),
          (P += r * G),
          (O += r * W),
          (A += r * J),
          (T += r * Z),
          (U += r * Y),
          (L += r * X),
          (y += (r = t[11]) * D),
          (b += r * M),
          (m += r * B),
          (w += r * z),
          (E += r * $),
          (x += r * K),
          (_ += r * H),
          (I += r * F),
          (S += r * q),
          (P += r * V),
          (O += r * G),
          (A += r * W),
          (T += r * J),
          (U += r * Z),
          (L += r * Y),
          (N += r * X),
          (b += (r = t[12]) * D),
          (m += r * M),
          (w += r * B),
          (E += r * z),
          (x += r * $),
          (_ += r * K),
          (I += r * H),
          (S += r * F),
          (P += r * q),
          (O += r * V),
          (A += r * G),
          (T += r * W),
          (U += r * J),
          (L += r * Z),
          (N += r * Y),
          (R += r * X),
          (m += (r = t[13]) * D),
          (w += r * M),
          (E += r * B),
          (x += r * z),
          (_ += r * $),
          (I += r * K),
          (S += r * H),
          (P += r * F),
          (O += r * q),
          (A += r * V),
          (T += r * G),
          (U += r * W),
          (L += r * J),
          (N += r * Z),
          (R += r * Y),
          (C += r * X),
          (w += (r = t[14]) * D),
          (E += r * M),
          (x += r * B),
          (_ += r * z),
          (I += r * $),
          (S += r * K),
          (P += r * H),
          (O += r * F),
          (A += r * q),
          (T += r * V),
          (U += r * G),
          (L += r * W),
          (N += r * J),
          (R += r * Z),
          (C += r * Y),
          (k += r * X),
          (E += (r = t[15]) * D),
          (x += r * M),
          (_ += r * B),
          (I += r * z),
          (S += r * $),
          (P += r * K),
          (O += r * H),
          (A += r * F),
          (T += r * q),
          (U += r * V),
          (L += r * G),
          (N += r * W),
          (R += r * J),
          (C += r * Z),
          (k += r * Y),
          (j += r * X),
          (n += 38 * x),
          (o += 38 * _),
          (a += 38 * I),
          (h += 38 * S),
          (l += 38 * P),
          (c += 38 * O),
          (u += 38 * A),
          (d += 38 * T),
          (g += 38 * U),
          (p += 38 * L),
          (f += 38 * N),
          (y += 38 * R),
          (b += 38 * C),
          (m += 38 * k),
          (w += 38 * j),
          (s = Math.floor((r = n + (s = 1) + 65535) / 65536)),
          (n = r - 65536 * s),
          (s = Math.floor((r = o + s + 65535) / 65536)),
          (o = r - 65536 * s),
          (s = Math.floor((r = a + s + 65535) / 65536)),
          (a = r - 65536 * s),
          (s = Math.floor((r = h + s + 65535) / 65536)),
          (h = r - 65536 * s),
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
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
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
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
          (e[4] = l),
          (e[5] = c),
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
      function l(e) {
        if ('string' != typeof e || 1 !== e.length)
          throw TypeError('arrayFormatSeparator must be single character string');
      }
      function c(e, t) {
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
        l(
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
          l(
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
                        ? [...i, [c(t, e), '[', s, ']'].join('')]
                        : [...i, [c(t, e), '[', c(s, e), ']=', c(r, e)].join('')];
                  };
                case 'bracket':
                  return (t) => (i, r) =>
                    void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && '' === r)
                      ? i
                      : null === r
                        ? [...i, [c(t, e), '[]'].join('')]
                        : [...i, [c(t, e), '[]=', c(r, e)].join('')];
                case 'colon-list-separator':
                  return (t) => (i, r) =>
                    void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && '' === r)
                      ? i
                      : null === r
                        ? [...i, [c(t, e), ':list='].join('')]
                        : [...i, [c(t, e), ':list=', c(r, e)].join('')];
                case 'comma':
                case 'separator':
                case 'bracket-separator': {
                  let t = 'bracket-separator' === e.arrayFormat ? '[]=' : '=';
                  return (i) => (r, s) =>
                    void 0 === s || (e.skipNull && null === s) || (e.skipEmptyString && '' === s)
                      ? r
                      : ((s = null === s ? '' : s), 0 === r.length)
                        ? [[c(i, e), t, c(s, e)].join('')]
                        : [[r, c(s, e)].join(e.arrayFormatSeparator)];
                }
                default:
                  return (t) => (i, r) =>
                    void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && '' === r)
                      ? i
                      : null === r
                        ? [...i, c(t, e)]
                        : [...i, [c(t, e), '=', c(r, e)].join('')];
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
                    ? c(i, t)
                    : Array.isArray(s)
                      ? 0 === s.length && 'bracket-separator' === t.arrayFormat
                        ? c(i, t) + '[]'
                        : s.reduce(r(i), []).join('&')
                      : c(i, t) + '=' + c(s, t);
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
              (a = `#${i[h] ? c(e.fragmentIdentifier, i) : e.fragmentIdentifier}`),
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
          var l = e[14] | (e[15] << 8);
          (this._r[8] = ((h >>> 8) | (l << 8)) & 8191),
            (this._r[9] = (l >>> 5) & 127),
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
                l = this._h[5],
                c = this._h[6],
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
              var T = e[t + 6] | (e[t + 7] << 8);
              a += ((A >>> 7) | (T << 9)) & 8191;
              var U = e[t + 8] | (e[t + 9] << 8);
              (h += ((T >>> 4) | (U << 12)) & 8191), (l += (U >>> 1) & 8191);
              var L = e[t + 10] | (e[t + 11] << 8);
              c += ((U >>> 14) | (L << 2)) & 8191;
              var N = e[t + 12] | (e[t + 13] << 8);
              u += ((L >>> 11) | (N << 5)) & 8191;
              var R = e[t + 14] | (e[t + 15] << 8);
              (d += ((N >>> 8) | (R << 8)) & 8191), (g += (R >>> 5) | r);
              var C = 0;
              (C = (S = 0 + s * p + 5 * I * n + 5 * _ * o + 5 * x * a + 5 * E * h) >>> 13),
                (S &= 8191),
                (S += 5 * w * l),
                (S += 5 * m * c),
                (S += 5 * b * u),
                (S += 5 * y * d),
                (S += 5 * f * g),
                (C += S >>> 13),
                (S &= 8191);
              var k = C;
              (k += s * f),
                (k += n * p),
                (k += 5 * I * o),
                (k += 5 * _ * a),
                (k += 5 * x * h),
                (C = k >>> 13),
                (k &= 8191),
                (k += 5 * E * l),
                (k += 5 * w * c),
                (k += 5 * m * u),
                (k += 5 * b * d),
                (k += 5 * y * g),
                (C += k >>> 13),
                (k &= 8191);
              var j = C;
              (j += s * y),
                (j += n * f),
                (j += o * p),
                (j += 5 * I * a),
                (j += 5 * _ * h),
                (C = j >>> 13),
                (j &= 8191),
                (j += 5 * x * l),
                (j += 5 * E * c),
                (j += 5 * w * u),
                (j += 5 * m * d),
                (j += 5 * b * g),
                (C += j >>> 13),
                (j &= 8191);
              var D = C;
              (D += s * b),
                (D += n * y),
                (D += o * f),
                (D += a * p),
                (D += 5 * I * h),
                (C = D >>> 13),
                (D &= 8191),
                (D += 5 * _ * l),
                (D += 5 * x * c),
                (D += 5 * E * u),
                (D += 5 * w * d),
                (D += 5 * m * g),
                (C += D >>> 13),
                (D &= 8191);
              var M = C;
              (M += s * m),
                (M += n * b),
                (M += o * y),
                (M += a * f),
                (M += h * p),
                (C = M >>> 13),
                (M &= 8191),
                (M += 5 * I * l),
                (M += 5 * _ * c),
                (M += 5 * x * u),
                (M += 5 * E * d),
                (M += 5 * w * g),
                (C += M >>> 13),
                (M &= 8191);
              var B = C;
              (B += s * w),
                (B += n * m),
                (B += o * b),
                (B += a * y),
                (B += h * f),
                (C = B >>> 13),
                (B &= 8191),
                (B += l * p),
                (B += 5 * I * c),
                (B += 5 * _ * u),
                (B += 5 * x * d),
                (B += 5 * E * g),
                (C += B >>> 13),
                (B &= 8191);
              var z = C;
              (z += s * E),
                (z += n * w),
                (z += o * m),
                (z += a * b),
                (z += h * y),
                (C = z >>> 13),
                (z &= 8191),
                (z += l * f),
                (z += c * p),
                (z += 5 * I * u),
                (z += 5 * _ * d),
                (z += 5 * x * g),
                (C += z >>> 13),
                (z &= 8191);
              var $ = C;
              ($ += s * x),
                ($ += n * E),
                ($ += o * w),
                ($ += a * m),
                ($ += h * b),
                (C = $ >>> 13),
                ($ &= 8191),
                ($ += l * y),
                ($ += c * f),
                ($ += u * p),
                ($ += 5 * I * d),
                ($ += 5 * _ * g),
                (C += $ >>> 13),
                ($ &= 8191);
              var K = C;
              (K += s * _),
                (K += n * x),
                (K += o * E),
                (K += a * w),
                (K += h * m),
                (C = K >>> 13),
                (K &= 8191),
                (K += l * b),
                (K += c * y),
                (K += u * f),
                (K += d * p),
                (K += 5 * I * g),
                (C += K >>> 13),
                (K &= 8191);
              var H = C;
              (H += s * I),
                (H += n * _),
                (H += o * x),
                (H += a * E),
                (H += h * w),
                (C = H >>> 13),
                (H &= 8191),
                (H += l * m),
                (H += c * b),
                (H += u * y),
                (H += d * f),
                (H += g * p),
                (C += H >>> 13),
                (H &= 8191),
                (S = 8191 & (C = ((C = ((C << 2) + C) | 0) + S) | 0)),
                (C >>>= 13),
                (k += C),
                (s = S),
                (n = k),
                (o = j),
                (a = D),
                (h = M),
                (l = B),
                (c = z),
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
              (this._h[5] = l),
              (this._h[6] = c),
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
              l = t[2],
              c = t[3],
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
                  ((a & h) ^ (a & l) ^ (h & l))) |
                0;
            (p = g),
              (g = d),
              (d = u),
              (u = (c + m) | 0),
              (c = l),
              (l = h),
              (h = a),
              (a = (m + w) | 0);
          }
          (t[0] += a),
            (t[1] += h),
            (t[2] += l),
            (t[3] += c),
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
    65756: (e, t, i) => {
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
          var l,
            c,
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
            T = s[3],
            U = s[4],
            L = s[5],
            N = s[6],
            R = s[7];
          h >= 128;

        ) {
          for (var C = 0; C < 16; C++) {
            var k = 8 * C + a;
            (e[C] = r.readUint32BE(n, k)), (t[C] = r.readUint32BE(n, k + 4));
          }
          for (var C = 0; C < 80; C++) {
            var j = b,
              D = m,
              M = w,
              B = E,
              z = x,
              $ = _,
              K = I,
              H = S,
              F = P,
              q = O,
              V = A,
              G = T,
              W = U,
              J = L,
              Z = N,
              Y = R;
            if (
              ((l = S),
              (g = 65535 & (c = R)),
              (p = c >>> 16),
              (f = 65535 & l),
              (y = l >>> 16),
              (l = ((x >>> 14) | (U << 18)) ^ ((x >>> 18) | (U << 14)) ^ ((U >>> 9) | (x << 23))),
              (g +=
                65535 &
                (c =
                  ((U >>> 14) | (x << 18)) ^ ((U >>> 18) | (x << 14)) ^ ((x >>> 9) | (U << 23)))),
              (p += c >>> 16),
              (f += 65535 & l),
              (y += l >>> 16),
              (l = (x & _) ^ (~x & I)),
              (g += 65535 & (c = (U & L) ^ (~U & N))),
              (p += c >>> 16),
              (f += 65535 & l),
              (y += l >>> 16),
              (l = o[2 * C]),
              (g += 65535 & (c = o[2 * C + 1])),
              (p += c >>> 16),
              (f += 65535 & l),
              (y += l >>> 16),
              (l = e[C % 16]),
              (g += 65535 & (c = t[C % 16])),
              (p += c >>> 16),
              (f += 65535 & l),
              (y += l >>> 16),
              (p += g >>> 16),
              (f += p >>> 16),
              (y += f >>> 16),
              (u = (65535 & f) | (y << 16)),
              (d = (65535 & g) | (p << 16)),
              (l = u),
              (g = 65535 & (c = d)),
              (p = c >>> 16),
              (f = 65535 & l),
              (y = l >>> 16),
              (l = ((b >>> 28) | (P << 4)) ^ ((P >>> 2) | (b << 30)) ^ ((P >>> 7) | (b << 25))),
              (g +=
                65535 &
                (c = ((P >>> 28) | (b << 4)) ^ ((b >>> 2) | (P << 30)) ^ ((b >>> 7) | (P << 25)))),
              (p += c >>> 16),
              (f += 65535 & l),
              (y += l >>> 16),
              (l = (b & m) ^ (b & w) ^ (m & w)),
              (g += 65535 & (c = (P & O) ^ (P & A) ^ (O & A))),
              (p += c >>> 16),
              (f += 65535 & l),
              (y += l >>> 16),
              (p += g >>> 16),
              (f += p >>> 16),
              (y += f >>> 16),
              (H = (65535 & f) | (y << 16)),
              (Y = (65535 & g) | (p << 16)),
              (l = B),
              (g = 65535 & (c = G)),
              (p = c >>> 16),
              (f = 65535 & l),
              (y = l >>> 16),
              (l = u),
              (g += 65535 & (c = d)),
              (p += c >>> 16),
              (f += 65535 & l),
              (y += l >>> 16),
              (p += g >>> 16),
              (f += p >>> 16),
              (y += f >>> 16),
              (B = (65535 & f) | (y << 16)),
              (G = (65535 & g) | (p << 16)),
              (m = j),
              (w = D),
              (E = M),
              (x = B),
              (_ = z),
              (I = $),
              (S = K),
              (b = H),
              (O = F),
              (A = q),
              (T = V),
              (U = G),
              (L = W),
              (N = J),
              (R = Z),
              (P = Y),
              C % 16 == 15)
            )
              for (var k = 0; k < 16; k++)
                (l = e[k]),
                  (g = 65535 & (c = t[k])),
                  (p = c >>> 16),
                  (f = 65535 & l),
                  (y = l >>> 16),
                  (l = e[(k + 9) % 16]),
                  (g += 65535 & (c = t[(k + 9) % 16])),
                  (p += c >>> 16),
                  (f += 65535 & l),
                  (y += l >>> 16),
                  (l =
                    (((u = e[(k + 1) % 16]) >>> 1) | ((d = t[(k + 1) % 16]) << 31)) ^
                    ((u >>> 8) | (d << 24)) ^
                    (u >>> 7)),
                  (g +=
                    65535 &
                    (c =
                      ((d >>> 1) | (u << 31)) ^ ((d >>> 8) | (u << 24)) ^ ((d >>> 7) | (u << 25)))),
                  (p += c >>> 16),
                  (f += 65535 & l),
                  (y += l >>> 16),
                  (l =
                    (((u = e[(k + 14) % 16]) >>> 19) | ((d = t[(k + 14) % 16]) << 13)) ^
                    ((d >>> 29) | (u << 3)) ^
                    (u >>> 6)),
                  (g +=
                    65535 &
                    (c =
                      ((d >>> 19) | (u << 13)) ^
                      ((u >>> 29) | (d << 3)) ^
                      ((d >>> 6) | (u << 26)))),
                  (p += c >>> 16),
                  (f += 65535 & l),
                  (y += l >>> 16),
                  (p += g >>> 16),
                  (f += p >>> 16),
                  (y += f >>> 16),
                  (e[k] = (65535 & f) | (y << 16)),
                  (t[k] = (65535 & g) | (p << 16));
          }
          (l = b),
            (g = 65535 & (c = P)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[0]),
            (g += 65535 & (c = s[0])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[0] = b = (65535 & f) | (y << 16)),
            (s[0] = P = (65535 & g) | (p << 16)),
            (l = m),
            (g = 65535 & (c = O)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[1]),
            (g += 65535 & (c = s[1])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[1] = m = (65535 & f) | (y << 16)),
            (s[1] = O = (65535 & g) | (p << 16)),
            (l = w),
            (g = 65535 & (c = A)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[2]),
            (g += 65535 & (c = s[2])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[2] = w = (65535 & f) | (y << 16)),
            (s[2] = A = (65535 & g) | (p << 16)),
            (l = E),
            (g = 65535 & (c = T)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[3]),
            (g += 65535 & (c = s[3])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[3] = E = (65535 & f) | (y << 16)),
            (s[3] = T = (65535 & g) | (p << 16)),
            (l = x),
            (g = 65535 & (c = U)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[4]),
            (g += 65535 & (c = s[4])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[4] = x = (65535 & f) | (y << 16)),
            (s[4] = U = (65535 & g) | (p << 16)),
            (l = _),
            (g = 65535 & (c = L)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[5]),
            (g += 65535 & (c = s[5])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[5] = _ = (65535 & f) | (y << 16)),
            (s[5] = L = (65535 & g) | (p << 16)),
            (l = I),
            (g = 65535 & (c = N)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[6]),
            (g += 65535 & (c = s[6])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[6] = I = (65535 & f) | (y << 16)),
            (s[6] = N = (65535 & g) | (p << 16)),
            (l = S),
            (g = 65535 & (c = R)),
            (p = c >>> 16),
            (f = 65535 & l),
            (y = l >>> 16),
            (l = i[7]),
            (g += 65535 & (c = s[7])),
            (p += c >>> 16),
            (f += 65535 & l),
            (y += l >>> 16),
            (p += g >>> 16),
            (f += p >>> 16),
            (y += f >>> 16),
            (i[7] = S = (65535 & f) | (y << 16)),
            (s[7] = R = (65535 & g) | (p << 16)),
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
    66584: (e, t, i) => {
      i.d(t, { iJ: () => oS });
      var r = i(35978),
        s = i.n(r),
        n = i(18193),
        o = i(19757),
        a = i(56975),
        h = i(673),
        l = Object.defineProperty,
        c = (e, t, i) =>
          t in e
            ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        u = (e, t, i) => c(e, 'symbol' != typeof t ? t + '' : t, i);
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
      var T = i(87561),
        U = i(41035),
        L = i(10897),
        N = i(69145),
        R = i(80985),
        C = i(66890);
      function k(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function j(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let i = k(t),
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
      let B = M(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        z = M(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = k((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        $ = { utf8: B, 'utf-8': B, hex: D.Fo.base16, latin1: z, ascii: z, binary: z, ...D.Fo };
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
      var F = i(26481),
        q = i(29143),
        V = i(51642).Buffer;
      function G(e) {
        let [t, i, r] = e.split(':');
        return { namespace: t, reference: i, address: r };
      }
      var W = Object.defineProperty,
        J = Object.defineProperties,
        Z = Object.getOwnPropertyDescriptors,
        Y = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        ee = (e, t, i) =>
          t in e
            ? W(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i);
      let et = {
        reactNative: 'react-native',
        node: 'node',
        browser: 'browser',
        unknown: 'unknown',
      };
      function ei() {
        return 'u' > typeof q && 'u' > typeof q.versions && 'u' > typeof q.versions.node;
      }
      function er() {
        return (
          !(0, R.getDocument)() && !!(0, R.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function es() {
        return !ei() && !!(0, R.getNavigator)() && !!(0, R.getDocument)();
      }
      function en() {
        return er() ? et.reactNative : ei() ? et.node : es() ? et.browser : et.unknown;
      }
      function eo() {
        var e;
        try {
          return er() && 'u' > typeof i.g && 'u' > typeof (null == i.g ? void 0 : i.g.Application)
            ? null == (e = i.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function ea(e, t, r) {
        let s = (function () {
            if (
              en() === et.reactNative &&
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
            let t = en();
            return t === et.browser
              ? [t, (null == (e = (0, R.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', r].join('-'), s, n].join('/');
      }
      function eh(e) {
        return Object.fromEntries(e.entries());
      }
      function el(e) {
        return new Map(Object.entries(e));
      }
      function ec(e, t, i) {
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
      function eu(e, t) {
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
      function ed(e, t) {
        return (0, T.fromMiliseconds)((t || Date.now()) + (0, T.toMiliseconds)(e));
      }
      function eg(e) {
        return Date.now() >= (0, T.toMiliseconds)(e);
      }
      function ep(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function ef(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      function ey() {
        return 'u' > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function eb() {
        return 'u' > typeof q && 'true' === q.env.IS_VITEST;
      }
      function em(e) {
        return V.from(e, 'base64').toString('utf-8');
      }
      function ew(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function ev(e, ...t) {
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
      function eE(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        ew(e.outputLen), ew(e.blockLen);
      }
      function ex(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function e_(e, t) {
        ev(e);
        let i = t.outputLen;
        if (e.length < i) throw Error('digestInto() expects output buffer of length at least ' + i);
      }
      let eI = BigInt(0x100000000 - 1),
        eS = BigInt(32),
        eP = (e, t, i) => (e << i) | (t >>> (32 - i)),
        eO = (e, t, i) => (t << i) | (e >>> (32 - i)),
        eA = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        eT = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i)),
        eU = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function eL(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function eN(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let eR = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function eC(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function ek(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          ev(e),
          e
        );
      }
      class ej {
        clone() {
          return this._cloneInto();
        }
      }
      function eD(e) {
        let t = (t) => e().update(ek(t)).digest(),
          i = e();
        return (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = () => e()), t;
      }
      function eM(e = 32) {
        if (eU && 'function' == typeof eU.getRandomValues)
          return eU.getRandomValues(new Uint8Array(e));
        if (eU && 'function' == typeof eU.randomBytes) return eU.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      let eB = [],
        ez = [],
        e$ = [],
        eK = BigInt(0),
        eH = BigInt(1),
        eF = BigInt(2),
        eq = BigInt(7),
        eV = BigInt(256),
        eG = BigInt(113);
      for (let e = 0, t = eH, i = 1, r = 0; e < 24; e++) {
        ([i, r] = [r, (2 * i + 3 * r) % 5]),
          eB.push(2 * (5 * r + i)),
          ez.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = eK;
        for (let e = 0; e < 7; e++)
          (t = ((t << eH) ^ ((t >> eq) * eG)) % eV) & eF && (s ^= eH << ((eH << BigInt(e)) - eH));
        e$.push(s);
      }
      let [eW, eJ] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & eI), l: Number((e >> eS) & eI) }
                : { h: 0 | Number((e >> eS) & eI), l: 0 | Number(e & eI) };
            })(e[s], t);
            [i[s], r[s]] = [n, o];
          }
          return [i, r];
        })(e$, !0),
        eZ = (e, t, i) => (i > 32 ? eA(e, t, i) : eP(e, t, i)),
        eY = (e, t, i) => (i > 32 ? eT(e, t, i) : eO(e, t, i));
      class eX extends ej {
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
            ew(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          eR || eC(this.state32),
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
                    a = eZ(n, o, 1) ^ i[r],
                    h = eY(n, o, 1) ^ i[r + 1];
                  for (let i = 0; i < 50; i += 10) (e[t + i] ^= a), (e[t + i + 1] ^= h);
                }
                let t = e[2],
                  s = e[3];
                for (let i = 0; i < 24; i++) {
                  let r = ez[i],
                    n = eZ(t, s, r),
                    o = eY(t, s, r),
                    a = eB[i];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) i[r] = e[t + r];
                  for (let r = 0; r < 10; r++) e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                }
                (e[0] ^= eW[r]), (e[1] ^= eJ[r]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            eR || eC(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          ex(this);
          let { blockLen: t, state: i } = this,
            r = (e = ek(e)).length;
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
          ex(this, !1), ev(e), this.finish();
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
          return ew(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((e_(e, this), this.finished)) throw Error('digest() was already called');
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
            e || (e = new eX(t, i, r, n, s)),
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
      let eQ = eD(() => new eX(136, 1, 32));
      function e0(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          i = new TextEncoder().encode(t + e);
        return '0x' + V.from(eQ(i)).toString('hex');
      }
      async function e1(e, t, i) {
        return (await ko({ hash: e0(t), signature: i })).toLowerCase() === e.toLowerCase();
      }
      async function e5(e, t, i, r, s, n) {
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
            h = e0(t).substring(2),
            l =
              o +
              h +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            c = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${r}&projectId=${s}`,
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
            { result: u } = await c.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      var e6 = Object.defineProperty,
        e2 = Object.defineProperties,
        e3 = Object.getOwnPropertyDescriptors,
        e8 = Object.getOwnPropertySymbols,
        e4 = Object.prototype.hasOwnProperty,
        e9 = Object.prototype.propertyIsEnumerable,
        e7 = (e, t, i) =>
          t in e
            ? e6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i);
      let te = (e) => e?.split(':'),
        tt = (e) => {
          let t = e && te(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        ti = (e) => {
          let t = e && te(e);
          if (t) return t.pop();
        };
      function tr(e) {
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
      function ts(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function tn(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function to(e, ...t) {
        if (!tn(e)) throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function ta(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function th(e) {
        if ('boolean' != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let tl = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        tc = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function tu(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (tn(e)) e = tp(e);
        else throw Error('Uint8Array expected, got ' + typeof e);
        return e;
      }
      function td(e, t, i = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (i && t.byteOffset % 4 != 0) throw Error('invalid output, must be aligned');
        return t;
      }
      function tg(e, t, i, r) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((i >> s) & n),
          a = Number(i & n),
          h = 4 * !!r,
          l = 4 * !r;
        e.setUint32(t + h, o, r), e.setUint32(t + l, a, r);
      }
      function tp(e) {
        return Uint8Array.from(e);
      }
      function tf(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let ty = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        tb = ty('expand 16-byte k'),
        tm = ty('expand 32-byte k'),
        tw = tl(tb),
        tv = tl(tm);
      function tE(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function tx(e) {
        return e.byteOffset % 4 == 0;
      }
      let t_ = 0x100000000 - 1,
        tI = new Uint32Array(),
        tS = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class tP {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            to((e = tu(e)), 32);
          let t = tS(e, 0),
            i = tS(e, 2),
            r = tS(e, 4),
            s = tS(e, 6),
            n = tS(e, 8),
            o = tS(e, 10),
            a = tS(e, 12),
            h = tS(e, 14);
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
          for (let t = 0; t < 8; t++) this.pad[t] = tS(e, 16 + 2 * t);
        }
        process(e, t, i = !1) {
          let { h: r, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            h = s[3],
            l = s[4],
            c = s[5],
            u = s[6],
            d = s[7],
            g = s[8],
            p = s[9],
            f = tS(e, t + 0),
            y = tS(e, t + 2),
            b = tS(e, t + 4),
            m = tS(e, t + 6),
            w = tS(e, t + 8),
            E = tS(e, t + 10),
            x = tS(e, t + 12),
            _ = tS(e, t + 14),
            I = r[0] + (8191 & f),
            S = r[1] + (((f >>> 13) | (y << 3)) & 8191),
            P = r[2] + (((y >>> 10) | (b << 6)) & 8191),
            O = r[3] + (((b >>> 7) | (m << 9)) & 8191),
            A = r[4] + (((m >>> 4) | (w << 12)) & 8191),
            T = r[5] + ((w >>> 1) & 8191),
            U = r[6] + (((w >>> 14) | (E << 2)) & 8191),
            L = r[7] + (((E >>> 11) | (x << 5)) & 8191),
            N = r[8] + (((x >>> 8) | (_ << 8)) & 8191),
            R = r[9] + ((_ >>> 5) | (2048 * !i)),
            C = 0,
            k = 0 + I * n + 5 * p * S + 5 * g * P + 5 * d * O + 5 * u * A;
          (C = k >>> 13),
            (k &= 8191),
            (k += 5 * c * T + 5 * l * U + 5 * h * L + 5 * a * N + 5 * o * R),
            (C += k >>> 13),
            (k &= 8191);
          let j = C + I * o + S * n + 5 * p * P + 5 * g * O + 5 * d * A;
          (C = j >>> 13),
            (j &= 8191),
            (j += 5 * u * T + 5 * c * U + 5 * l * L + 5 * h * N + 5 * a * R),
            (C += j >>> 13),
            (j &= 8191);
          let D = C + I * a + S * o + P * n + 5 * p * O + 5 * g * A;
          (C = D >>> 13),
            (D &= 8191),
            (D += 5 * d * T + 5 * u * U + 5 * c * L + 5 * l * N + 5 * h * R),
            (C += D >>> 13),
            (D &= 8191);
          let M = C + I * h + S * a + P * o + O * n + 5 * p * A;
          (C = M >>> 13),
            (M &= 8191),
            (M += 5 * g * T + 5 * d * U + 5 * u * L + 5 * c * N + 5 * l * R),
            (C += M >>> 13),
            (M &= 8191);
          let B = C + I * l + S * h + P * a + O * o + A * n;
          (C = B >>> 13),
            (B &= 8191),
            (B += 5 * p * T + 5 * g * U + 5 * d * L + 5 * u * N + 5 * c * R),
            (C += B >>> 13),
            (B &= 8191);
          let z = C + I * c + S * l + P * h + O * a + A * o;
          (C = z >>> 13),
            (z &= 8191),
            (z += T * n + 5 * p * U + 5 * g * L + 5 * d * N + 5 * u * R),
            (C += z >>> 13),
            (z &= 8191);
          let $ = C + I * u + S * c + P * l + O * h + A * a;
          (C = $ >>> 13),
            ($ &= 8191),
            ($ += T * o + U * n + 5 * p * L + 5 * g * N + 5 * d * R),
            (C += $ >>> 13),
            ($ &= 8191);
          let K = C + I * d + S * u + P * c + O * l + A * h;
          (C = K >>> 13),
            (K &= 8191),
            (K += T * a + U * o + L * n + 5 * p * N + 5 * g * R),
            (C += K >>> 13),
            (K &= 8191);
          let H = C + I * g + S * d + P * u + O * c + A * l;
          (C = H >>> 13),
            (H &= 8191),
            (H += T * h + U * a + L * o + N * n + 5 * p * R),
            (C += H >>> 13),
            (H &= 8191);
          let F = C + I * p + S * g + P * d + O * u + A * c;
          (C = F >>> 13),
            (F &= 8191),
            (F += T * l + U * h + L * a + N * o + R * n),
            (C += F >>> 13),
            (F &= 8191),
            (k = 8191 & (C = ((C = ((C << 2) + C) | 0) + k) | 0)),
            (C >>>= 13),
            (j += C),
            (r[0] = k),
            (r[1] = j),
            (r[2] = D),
            (r[3] = M),
            (r[4] = B),
            (r[5] = z),
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
          tf(i);
        }
        update(e) {
          ta(this);
          let { buffer: t, blockLen: i } = this,
            r = (e = tu(e)).length;
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
          tf(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          ta(this),
            (function (e, t) {
              to(e);
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
      let tO = (function (e) {
          let t = (t, i) => e(i).update(tu(t)).digest(),
            i = e(new Uint8Array(32));
          return (
            (t.outputLen = i.outputLen), (t.blockLen = i.blockLen), (t.create = (t) => e(t)), t
          );
        })((e) => new tP(e)),
        tA = (function (e, t) {
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
            ts(s),
            ts(o),
            th(n),
            th(i),
            (t, a, h, l, c = 0) => {
              to(t), to(a), to(h);
              let u = h.length;
              if ((void 0 === l && (l = new Uint8Array(u)), to(l), ts(c), c < 0 || c >= t_))
                throw Error('arx: counter overflow');
              if (l.length < u)
                throw Error(`arx: output (${l.length}) is shorter than data (${u})`);
              let d = [],
                g = t.length,
                p,
                f;
              if (32 === g) d.push((p = tp(t))), (f = tv);
              else if (16 === g && i)
                (p = new Uint8Array(32)).set(t), p.set(t, 16), (f = tw), d.push(p);
              else throw Error(`arx: invalid 32-byte key, got length=${g}`);
              tx(a) || d.push((a = tp(a)));
              let y = tl(p);
              if (r) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                r(f, y, tl(a.subarray(0, 16)), y), (a = a.subarray(16));
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
                    l = new Uint8Array(64),
                    c = tl(l),
                    u = tx(s) && tx(n),
                    d = u ? tl(s) : tI,
                    g = u ? tl(n) : tI;
                  for (let p = 0; p < h; o++) {
                    if ((e(t, i, r, c, o, a), o >= t_)) throw Error('arx: counter overflow');
                    let f = Math.min(64, h - p);
                    if (u && 64 === f) {
                      let e = p / 4;
                      if (p % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, i; t < 16; t++) g[(i = e + t)] = d[i] ^ c[t];
                      p += 64;
                      continue;
                    }
                    for (let e = 0, t; e < f; e++) n[(t = p + e)] = s[t] ^ l[e];
                    p += f;
                  }
                })(e, f, y, tl(a), h, l, c, o),
                tf(...d),
                l
              );
            }
          );
        })(
          function (e, t, i, r, s, n = 20) {
            let o = e[0],
              a = e[1],
              h = e[2],
              l = e[3],
              c = t[0],
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
              S = l,
              P = c,
              O = u,
              A = d,
              T = g,
              U = p,
              L = f,
              N = y,
              R = b,
              C = s,
              k = m,
              j = w,
              D = E;
            for (let e = 0; e < n; e += 2)
              (U = (U + (C = tE(C ^ (x = (x + P) | 0), 16))) | 0),
                (x = (x + (P = tE(P ^ U, 12))) | 0),
                (U = (U + (C = tE(C ^ x, 8))) | 0),
                (P = tE(P ^ U, 7)),
                (L = (L + (k = tE(k ^ (_ = (_ + O) | 0), 16))) | 0),
                (_ = (_ + (O = tE(O ^ L, 12))) | 0),
                (L = (L + (k = tE(k ^ _, 8))) | 0),
                (O = tE(O ^ L, 7)),
                (N = (N + (j = tE(j ^ (I = (I + A) | 0), 16))) | 0),
                (I = (I + (A = tE(A ^ N, 12))) | 0),
                (N = (N + (j = tE(j ^ I, 8))) | 0),
                (A = tE(A ^ N, 7)),
                (R = (R + (D = tE(D ^ (S = (S + T) | 0), 16))) | 0),
                (S = (S + (T = tE(T ^ R, 12))) | 0),
                (R = (R + (D = tE(D ^ S, 8))) | 0),
                (T = tE(T ^ R, 7)),
                (N = (N + (D = tE(D ^ (x = (x + O) | 0), 16))) | 0),
                (x = (x + (O = tE(O ^ N, 12))) | 0),
                (N = (N + (D = tE(D ^ x, 8))) | 0),
                (O = tE(O ^ N, 7)),
                (R = (R + (C = tE(C ^ (_ = (_ + A) | 0), 16))) | 0),
                (_ = (_ + (A = tE(A ^ R, 12))) | 0),
                (R = (R + (C = tE(C ^ _, 8))) | 0),
                (A = tE(A ^ R, 7)),
                (U = (U + (k = tE(k ^ (I = (I + T) | 0), 16))) | 0),
                (I = (I + (T = tE(T ^ U, 12))) | 0),
                (U = (U + (k = tE(k ^ I, 8))) | 0),
                (T = tE(T ^ U, 7)),
                (L = (L + (j = tE(j ^ (S = (S + P) | 0), 16))) | 0),
                (S = (S + (P = tE(P ^ L, 12))) | 0),
                (L = (L + (j = tE(j ^ S, 8))) | 0),
                (P = tE(P ^ L, 7));
            let M = 0;
            (r[M++] = (o + x) | 0),
              (r[M++] = (a + _) | 0),
              (r[M++] = (h + I) | 0),
              (r[M++] = (l + S) | 0),
              (r[M++] = (c + P) | 0),
              (r[M++] = (u + O) | 0),
              (r[M++] = (d + A) | 0),
              (r[M++] = (g + T) | 0),
              (r[M++] = (p + U) | 0),
              (r[M++] = (f + L) | 0),
              (r[M++] = (y + N) | 0),
              (r[M++] = (b + R) | 0),
              (r[M++] = (s + C) | 0),
              (r[M++] = (m + k) | 0),
              (r[M++] = (w + j) | 0),
              (r[M++] = (E + D) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        tT = new Uint8Array(16),
        tU = (e, t) => {
          e.update(t);
          let i = t.length % 16;
          i && e.update(tT.subarray(i));
        },
        tL = new Uint8Array(32);
      function tN(e, t, i, r, s) {
        let n = e(t, i, tL),
          o = tO.create(n);
        s && tU(o, s), tU(o, r);
        let a = new Uint8Array(16),
          h = tc(a);
        tg(h, 0, BigInt(s ? s.length : 0), !0), tg(h, 8, BigInt(r.length), !0), o.update(a);
        let l = o.digest();
        return tf(n, a), l;
      }
      let tR = ((e, t) => {
        function i(r, ...s) {
          if ((to(r), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error('nonce / iv required');
            e.varSizeNonce ? to(t) : to(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && to(s[1]);
          let o = t(r, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error('cipher output not supported');
                to(t);
              }
            },
            h = !1;
          return {
            encrypt(e, t) {
              if (h) throw Error('cannot encrypt() twice with same key + nonce');
              return (h = !0), to(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((to(e), n && e.length < n))
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
            (n = td(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, i, a, a, 1);
            let h = tN(e, t, i, a, r);
            return n.set(h, o), tf(h), n;
          },
          decrypt(s, n) {
            n = td(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              h = tN(e, t, i, o, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let i = 0;
                for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
                return 0 === i;
              })(a, h)
            )
              throw Error('invalid tag');
            return n.set(s.subarray(0, -16)), e(t, i, n, n, 1), tf(h), n;
          },
        }))(tA)
      );
      class tC extends ej {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), eE(e);
          let i = ek(t);
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
          return ex(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          ex(this),
            ev(e, this.outputLen),
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
      let tk = (e, t, i) => new tC(e, t).update(i).digest();
      tk.create = (e, t) => new tC(e, t);
      let tj = new Uint8Array([0]),
        tD = new Uint8Array(),
        tM = (e, t, i, r, s) =>
          (function (e, t, i, r = 32) {
            if ((eE(e), ew(r), r > 255 * e.outputLen))
              throw Error('Length should be <= 255*HashLen');
            let s = Math.ceil(r / e.outputLen);
            void 0 === i && (i = tD);
            let n = new Uint8Array(s * e.outputLen),
              o = tk.create(e, t),
              a = o._cloneInto(),
              h = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (tj[0] = t + 1),
                a
                  .update(0 === t ? tD : h)
                  .update(i)
                  .update(tj)
                  .digestInto(h),
                n.set(h, e.outputLen * t),
                o._cloneInto(a);
            return o.destroy(), a.destroy(), h.fill(0), tj.fill(0), n.slice(0, r);
          })(
            e,
            (function (e, t, i) {
              return eE(e), void 0 === i && (i = new Uint8Array(e.outputLen)), tk(e, ek(i), ek(t));
            })(e, t, i),
            r,
            s
          );
      class tB extends ej {
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
            (this.view = eL(this.buffer));
        }
        update(e) {
          ex(this);
          let { view: t, buffer: i, blockLen: r } = this,
            s = (e = ek(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(r - this.pos, s - n);
            if (o === r) {
              let t = eL(e);
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
          ex(this), e_(e, this), (this.finished = !0);
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
              l = 4 * !r;
            e.setUint32(t + h, o, r), e.setUint32(t + l, a, r);
          })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
          let o = eL(e),
            a = this.outputLen;
          if (a % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let h = a / 4,
            l = this.get();
          if (h > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < h; e++) o.setUint32(4 * e, l[e], s);
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
      let tz = new Uint32Array([
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
        t$ = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        tK = new Uint32Array(64);
      class tH extends tB {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | t$[0]),
            (this.B = 0 | t$[1]),
            (this.C = 0 | t$[2]),
            (this.D = 0 | t$[3]),
            (this.E = 0 | t$[4]),
            (this.F = 0 | t$[5]),
            (this.G = 0 | t$[6]),
            (this.H = 0 | t$[7]);
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
          for (let i = 0; i < 16; i++, t += 4) tK[i] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = tK[e - 15],
              i = tK[e - 2],
              r = eN(t, 7) ^ eN(t, 18) ^ (t >>> 3),
              s = eN(i, 17) ^ eN(i, 19) ^ (i >>> 10);
            tK[e] = (s + tK[e - 7] + r + tK[e - 16]) | 0;
          }
          let { A: i, B: r, C: s, D: n, E: o, F: a, G: h, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var c, u, d, g;
            let t =
                (l +
                  (eN(o, 6) ^ eN(o, 11) ^ eN(o, 25)) +
                  (((c = o) & a) ^ (~c & h)) +
                  tz[e] +
                  tK[e]) |
                0,
              p =
                ((eN(i, 2) ^ eN(i, 13) ^ eN(i, 22)) +
                  (((u = i) & (d = r)) ^ (u & (g = s)) ^ (d & g))) |
                0;
            (l = h),
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
            (l = (l + this.H) | 0),
            this.set(i, r, s, n, o, a, h, l);
        }
        roundClean() {
          tK.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let tF = eD(() => new tH()),
        tq = BigInt(0),
        tV = BigInt(1),
        tG = BigInt(2);
      function tW(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function tJ(e) {
        if (!tW(e)) throw Error('Uint8Array expected');
      }
      function tZ(e, t) {
        if ('boolean' != typeof t) throw Error(e + ' boolean expected, got ' + t);
      }
      let tY = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function tX(e) {
        tJ(e);
        let t = '';
        for (let i = 0; i < e.length; i++) t += tY[e[i]];
        return t;
      }
      function tQ(e) {
        let t = e.toString(16);
        return 1 & t.length ? '0' + t : t;
      }
      function t0(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        return '' === e ? tq : BigInt('0x' + e);
      }
      let t1 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function t5(e) {
        return e >= t1._0 && e <= t1._9
          ? e - t1._0
          : e >= t1.A && e <= t1.F
            ? e - (t1.A - 10)
            : e >= t1.a && e <= t1.f
              ? e - (t1.a - 10)
              : void 0;
      }
      function t6(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          i = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let r = new Uint8Array(i);
        for (let t = 0, s = 0; t < i; t++, s += 2) {
          let i = t5(e.charCodeAt(s)),
            n = t5(e.charCodeAt(s + 1));
          if (void 0 === i || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          r[t] = 16 * i + n;
        }
        return r;
      }
      function t2(e) {
        return t0(tX(e));
      }
      function t3(e) {
        return tJ(e), t0(tX(Uint8Array.from(e).reverse()));
      }
      function t8(e, t) {
        return t6(e.toString(16).padStart(2 * t, '0'));
      }
      function t4(e, t) {
        return t8(e, t).reverse();
      }
      function t9(e, t, i) {
        let r;
        if ('string' == typeof t)
          try {
            r = t6(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (tW(t)) r = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = r.length;
        if ('number' == typeof i && s !== i)
          throw Error(e + ' of length ' + i + ' expected, got ' + s);
        return r;
      }
      function t7(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          tJ(r), (t += r.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          i.set(s, r), (r += s.length);
        }
        return i;
      }
      let ie = (e) => 'bigint' == typeof e && tq <= e;
      function it(e, t, i) {
        return ie(e) && ie(t) && ie(i) && t <= e && e < i;
      }
      function ii(e, t, i, r) {
        if (!it(t, i, r))
          throw Error('expected valid ' + e + ': ' + i + ' <= n < ' + r + ', got ' + t);
      }
      function ir(e) {
        let t;
        for (t = 0; e > tq; e >>= tV, t += 1);
        return t;
      }
      let is = (e) => (tG << BigInt(e - 1)) - tV,
        io = (e) => new Uint8Array(e),
        ia = (e) => Uint8Array.from(e);
      function ih(e, t, i) {
        if ('number' != typeof e || e < 2) throw Error('hashLen must be a number');
        if ('number' != typeof t || t < 2) throw Error('qByteLen must be a number');
        if ('function' != typeof i) throw Error('hmacFn must be a function');
        let r = io(e),
          s = io(e),
          n = 0,
          o = () => {
            r.fill(1), s.fill(0), (n = 0);
          },
          a = (...e) => i(s, r, ...e),
          h = (e = io()) => {
            (s = a(ia([0]), e)), (r = a()), 0 !== e.length && ((s = a(ia([1]), e)), (r = a()));
          },
          l = () => {
            if (n++ >= 1e3) throw Error('drbg: tried 1000 values');
            let e = 0,
              i = [];
            for (; e < t; ) {
              let t = (r = a()).slice();
              i.push(t), (e += r.length);
            }
            return t7(...i);
          };
        return (e, t) => {
          let i;
          for (o(), h(e); !(i = t(l())); ) h();
          return o(), i;
        };
      }
      let il = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        stringOrUint8Array: (e) => 'string' == typeof e || tW(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function ic(e, t, i = {}) {
        let r = (t, i, r) => {
          let s = il[i];
          if ('function' != typeof s) throw Error('invalid validator function');
          let n = e[t];
          if (!(r && void 0 === n) && !s(n, e))
            throw Error('param ' + String(t) + ' is invalid. Expected ' + i + ', got ' + n);
        };
        for (let [e, i] of Object.entries(t)) r(e, i, !1);
        for (let [e, t] of Object.entries(i)) r(e, t, !0);
        return e;
      }
      function iu(e) {
        let t = new WeakMap();
        return (i, ...r) => {
          let s = t.get(i);
          if (void 0 !== s) return s;
          let n = e(i, ...r);
          return t.set(i, n), n;
        };
      }
      var id = Object.freeze({
        __proto__: null,
        isBytes: tW,
        abytes: tJ,
        abool: tZ,
        bytesToHex: tX,
        numberToHexUnpadded: tQ,
        hexToNumber: t0,
        hexToBytes: t6,
        bytesToNumberBE: t2,
        bytesToNumberLE: t3,
        numberToBytesBE: t8,
        numberToBytesLE: t4,
        numberToVarBytesBE: function (e) {
          return t6(tQ(e));
        },
        ensureBytes: t9,
        concatBytes: t7,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let i = 0;
          for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
          return 0 === i;
        },
        utf8ToBytes: function (e) {
          if ('string' != typeof e) throw Error('string expected');
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: it,
        aInRange: ii,
        bitLen: ir,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & tV;
        },
        bitSet: function (e, t, i) {
          return e | ((i ? tV : tq) << BigInt(t));
        },
        bitMask: is,
        createHmacDrbg: ih,
        validateObject: ic,
        notImplemented: () => {
          throw Error('not implemented');
        },
        memoized: iu,
      });
      let ig = BigInt(0),
        ip = BigInt(1),
        iy = BigInt(2),
        ib = BigInt(3),
        im = BigInt(4),
        iw = BigInt(5),
        iv = BigInt(8);
      function iE(e, t) {
        let i = e % t;
        return i >= ig ? i : t + i;
      }
      function ix(e, t, i) {
        if (t < ig) throw Error('invalid exponent, negatives unsupported');
        if (i <= ig) throw Error('invalid modulus');
        if (i === ip) return ig;
        let r = ip;
        for (; t > ig; ) t & ip && (r = (r * e) % i), (e = (e * e) % i), (t >>= ip);
        return r;
      }
      function i_(e, t, i) {
        let r = e;
        for (; t-- > ig; ) (r *= r), (r %= i);
        return r;
      }
      function iI(e, t) {
        if (e === ig) throw Error('invert: expected non-zero number');
        if (t <= ig) throw Error('invert: expected positive modulus, got ' + t);
        let i = iE(e, t),
          r = t,
          s = ig,
          n = ip;
        for (; i !== ig; ) {
          let e = r / i,
            t = r % i,
            o = s - n * e;
          (r = i), (i = t), (s = n), (n = o);
        }
        if (r !== ip) throw Error('invert: does not exist');
        return iE(s, t);
      }
      let iS = [
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
      function iP(e, t) {
        let i = void 0 !== t ? t : e.toString(2).length,
          r = Math.ceil(i / 8);
        return { nBitLength: i, nByteLength: r };
      }
      function iO(e, t, i = !1, r = {}) {
        let s;
        if (e <= ig) throw Error('invalid field: expected ORDER > 0, got ' + e);
        let { nBitLength: n, nByteLength: o } = iP(e, t);
        if (o > 2048) throw Error('invalid field: expected ORDER of <= 2048 bytes');
        let a = Object.freeze({
          ORDER: e,
          isLE: i,
          BITS: n,
          BYTES: o,
          MASK: is(n),
          ZERO: ig,
          ONE: ip,
          create: (t) => iE(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error('invalid field element: expected bigint, got ' + typeof t);
            return ig <= t && t < e;
          },
          is0: (e) => e === ig,
          isOdd: (e) => (e & ip) === ip,
          neg: (t) => iE(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => iE(t * t, e),
          add: (t, i) => iE(t + i, e),
          sub: (t, i) => iE(t - i, e),
          mul: (t, i) => iE(t * i, e),
          pow: (e, t) =>
            (function (e, t, i) {
              if (i < ig) throw Error('invalid exponent, negatives unsupported');
              if (i === ig) return e.ONE;
              if (i === ip) return t;
              let r = e.ONE,
                s = t;
              for (; i > ig; ) i & ip && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= ip);
              return r;
            })(a, e, t),
          div: (t, i) => iE(t * iI(i, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => iI(t, e),
          sqrt:
            r.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % im === ib) {
                    let t = (e + ip) / im;
                    return function (e, i) {
                      let r = e.pow(i, t);
                      if (!e.eql(e.sqr(r), i)) throw Error('Cannot find square root');
                      return r;
                    };
                  }
                  if (e % iv === iw) {
                    let t = (e - iw) / iv;
                    return function (e, i) {
                      let r = e.mul(i, iy),
                        s = e.pow(r, t),
                        n = e.mul(i, s),
                        o = e.mul(e.mul(n, iy), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), i)) throw Error('Cannot find square root');
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, i, r;
                    let s = (e - ip) / iy;
                    for (t = e - ip, i = 0; t % iy === ig; t /= iy, i++);
                    for (r = iy; r < e && ix(r, s, e) !== e - ip; r++)
                      if (r > 1e3) throw Error('Cannot find square root: likely non-prime P');
                    if (1 === i) {
                      let t = (e + ip) / im;
                      return function (e, i) {
                        let r = e.pow(i, t);
                        if (!e.eql(e.sqr(r), i)) throw Error('Cannot find square root');
                        return r;
                      };
                    }
                    let n = (t + ip) / iy;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE)) throw Error('Cannot find square root');
                      let a = i,
                        h = e.pow(e.mul(e.ONE, r), t),
                        l = e.pow(o, n),
                        c = e.pow(o, t);
                      for (; !e.eql(c, e.ONE); ) {
                        if (e.eql(c, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let i = e.sqr(c); t < a && !e.eql(i, e.ONE); t++) i = e.sqr(i);
                        let i = e.pow(h, ip << BigInt(a - t - 1));
                        (h = e.sqr(i)), (l = e.mul(l, i)), (c = e.mul(c, h)), (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let i = Array(t.length),
                r = t.reduce((t, r, s) => (e.is0(r) ? t : ((i[s] = t), e.mul(t, r))), e.ONE),
                s = e.inv(r);
              return (
                t.reduceRight(
                  (t, r, s) => (e.is0(r) ? t : ((i[s] = e.mul(t, i[s])), e.mul(t, r))),
                  s
                ),
                i
              );
            })(a, e),
          cmov: (e, t, i) => (i ? t : e),
          toBytes: (e) => (i ? t4(e, o) : t8(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error('Field.fromBytes: expected ' + o + ' bytes, got ' + e.length);
            return i ? t3(e) : t2(e);
          },
        });
        return Object.freeze(a);
      }
      function iA(e) {
        if ('bigint' != typeof e) throw Error('field order must be bigint');
        return Math.ceil(e.toString(2).length / 8);
      }
      function iT(e) {
        let t = iA(e);
        return t + Math.ceil(t / 2);
      }
      let iU = BigInt(0),
        iL = BigInt(1);
      function iN(e, t) {
        let i = t.negate();
        return e ? i : t;
      }
      function iR(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function iC(e, t) {
        return iR(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      let ik = new WeakMap(),
        ij = new WeakMap();
      function iD(e) {
        return ij.get(e) || 1;
      }
      function iM(e) {
        return (
          ic(
            e.Fp,
            iS.reduce((e, t) => ((e[t] = 'function'), e), {
              ORDER: 'bigint',
              MASK: 'bigint',
              BYTES: 'isSafeInteger',
              BITS: 'isSafeInteger',
            })
          ),
          ic(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...iP(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let iB = BigInt(0),
        iz = BigInt(1),
        i$ = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        );
      BigInt(0);
      let iK = BigInt(1),
        iH = BigInt(2),
        iF = BigInt(3),
        iq = BigInt(5);
      BigInt(8);
      let iV = (function (e) {
        let t =
            (ic(
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
          r = (e) => iE(e, i),
          s = t.montgomeryBits,
          n = Math.ceil(s / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          h = t.powPminus2 || ((e) => ix(e, i - BigInt(2), i));
        function l(e, t, i) {
          let s = r(e * (t - i));
          return [(t = r(t - s)), (i = r(i + s))];
        }
        let c = (t.a - BigInt(2)) / BigInt(4);
        function u(e, t) {
          let u = (function (e, t) {
            ii('u', e, iB, i), ii('scalar', t, iB, i);
            let n = iz,
              o = iB,
              a = e,
              u = iz,
              d = iB,
              g;
            for (let i = BigInt(s - 1); i >= iB; i--) {
              let s = (t >> i) & iz;
              (d ^= s),
                (n = (g = l(d, n, a))[0]),
                (a = g[1]),
                (o = (g = l(d, o, u))[0]),
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
              (a = r(x * x)), (u = r(e * r(_ * _))), (n = r(p * y)), (o = r(b * (p + r(c * b))));
            }
            return (
              (n = (g = l(d, n, a))[0]),
              (a = g[1]),
              (o = (g = l(d, o, u))[0]),
              (u = g[1]),
              r(n * h(o))
            );
          })(
            (function (e) {
              let t = t9('u coordinate', e, n);
              return 32 === o && (t[31] &= 127), t3(t);
            })(t),
            (function (e) {
              let t = t9('scalar', e),
                i = t.length;
              if (i !== n && i !== o)
                throw Error(
                  'invalid scalar, expected ' + ('' + n + ' or ') + o + ' bytes, got ' + i
                );
              return t3(a(t));
            })(e)
          );
          if (u === iB) throw Error('invalid private or public key received');
          return t4(r(u), n);
        }
        let d = t4(r(t.Gu), n);
        function g(e) {
          return u(e, d);
        }
        return {
          scalarMult: u,
          scalarMultBase: g,
          getSharedSecret: (e, t) => u(e, t),
          getPublicKey: (e) => g(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: d,
        };
      })({
        P: i$,
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
              n = (((e * e) % i$) * e) % i$,
              o = (i_(n, iH, i$) * n) % i$,
              a = (i_(o, iK, i$) * e) % i$,
              h = (i_(a, iq, i$) * a) % i$,
              l = (i_(h, t, i$) * h) % i$,
              c = (i_(l, i, i$) * l) % i$,
              u = (i_(c, r, i$) * c) % i$,
              d = (i_(u, s, i$) * u) % i$,
              g = (i_(d, s, i$) * u) % i$,
              p = (i_(g, t, i$) * h) % i$;
            return { pow_p_5_8: (i_(p, iH, i$) * e) % i$, b2: n };
          })(e);
          return iE(i_(t, iF, i$) * i, i$);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: eM,
      });
      function iG(e) {
        void 0 !== e.lowS && tZ('lowS', e.lowS), void 0 !== e.prehash && tZ('prehash', e.prehash);
      }
      let { bytesToNumberBE: iW, hexToBytes: iJ } = id;
      class iZ extends Error {
        constructor(e = '') {
          super(e);
        }
      }
      let iY = {
          Err: iZ,
          _tlv: {
            encode: (e, t) => {
              let { Err: i } = iY;
              if (e < 0 || e > 256) throw new i('tlv.encode: wrong tag');
              if (1 & t.length) throw new i('tlv.encode: unpadded data');
              let r = t.length / 2,
                s = tQ(r);
              if ((s.length / 2) & 128) throw new i('tlv.encode: long form length too big');
              let n = r > 127 ? tQ((s.length / 2) | 128) : '';
              return tQ(e) + n + s + t;
            },
            decode(e, t) {
              let { Err: i } = iY,
                r = 0;
              if (e < 0 || e > 256) throw new i('tlv.encode: wrong tag');
              if (t.length < 2 || t[r++] !== e) throw new i('tlv.decode: wrong tlv');
              let s = t[r++],
                n = 0;
              if (128 & s) {
                let e = 127 & s;
                if (!e) throw new i('tlv.decode(long): indefinite length not supported');
                if (e > 4) throw new i('tlv.decode(long): byte length is too big');
                let o = t.subarray(r, r + e);
                if (o.length !== e) throw new i('tlv.decode: length bytes not complete');
                if (0 === o[0]) throw new i('tlv.decode(long): zero leftmost byte');
                for (let e of o) n = (n << 8) | e;
                if (((r += e), n < 128)) throw new i('tlv.decode(long): not minimal encoding');
              } else n = s;
              let o = t.subarray(r, r + n);
              if (o.length !== n) throw new i('tlv.decode: wrong value length');
              return { v: o, l: t.subarray(r + n) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = iY;
              if (e < iX) throw new t('integer: negative integers are not allowed');
              let i = tQ(e);
              if ((8 & Number.parseInt(i[0], 16) && (i = '00' + i), 1 & i.length))
                throw new t('unexpected DER parsing assertion: unpadded hex');
              return i;
            },
            decode(e) {
              let { Err: t } = iY;
              if (128 & e[0]) throw new t('invalid signature integer: negative');
              if (0 === e[0] && !(128 & e[1]))
                throw new t('invalid signature integer: unnecessary leading zero');
              return iW(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: i, _tlv: r } = iY,
              s = 'string' == typeof e ? iJ(e) : e;
            tJ(s);
            let { v: n, l: o } = r.decode(48, s);
            if (o.length) throw new t('invalid signature: left bytes after parsing');
            let { v: a, l: h } = r.decode(2, n),
              { v: l, l: c } = r.decode(2, h);
            if (c.length) throw new t('invalid signature: left bytes after parsing');
            return { r: i.decode(a), s: i.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: i } = iY,
              r = t.encode(2, i.encode(e.r)),
              s = t.encode(2, i.encode(e.s));
            return t.encode(48, r + s);
          },
        },
        iX = BigInt(0),
        iQ = BigInt(1);
      BigInt(2);
      let i0 = BigInt(3);
      BigInt(4);
      let i1 = iO(BigInt('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff')),
        i5 = (function (e, t) {
          let i = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = iM(e);
                  return (
                    ic(
                      t,
                      { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                      { bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean' }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: i, n: r } = t,
                s = i.BYTES + 1,
                n = 2 * i.BYTES + 1;
              function o(e) {
                return iE(e, r);
              }
              let {
                  ProjectivePoint: a,
                  normPrivateKeyToScalar: h,
                  weierstrassEquation: l,
                  isWithinCurveOrder: c,
                } = (function (e) {
                  var t;
                  let i = (function (e) {
                      let t = iM(e);
                      ic(
                        t,
                        { a: 'field', b: 'field' },
                        {
                          allowedPrivateKeyLengths: 'array',
                          wrapPrivateKey: 'boolean',
                          isTorsionFree: 'function',
                          clearCofactor: 'function',
                          allowInfinityPoint: 'boolean',
                          fromBytes: 'function',
                          toBytes: 'function',
                        }
                      );
                      let { endo: i, Fp: r, a: s } = t;
                      if (i) {
                        if (!r.eql(s, r.ZERO))
                          throw Error(
                            'invalid endomorphism, can only be defined for Koblitz curves that have a=0'
                          );
                        if (
                          'object' != typeof i ||
                          'bigint' != typeof i.beta ||
                          'function' != typeof i.splitScalar
                        )
                          throw Error(
                            'invalid endomorphism, expected beta: bigint and splitScalar: function'
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = i,
                    s = iO(i.n, i.nBitLength),
                    n =
                      i.toBytes ||
                      ((e, t, i) => {
                        let s = t.toAffine();
                        return t7(Uint8Array.from([4]), r.toBytes(s.x), r.toBytes(s.y));
                      }),
                    o =
                      i.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function a(e) {
                    let { a: t, b: s } = i,
                      n = r.sqr(e),
                      o = r.mul(n, e);
                    return r.add(r.add(o, r.mul(e, t)), s);
                  }
                  if (!r.eql(r.sqr(i.Gy), a(i.Gx)))
                    throw Error('bad generator point: equation left != right');
                  function h(e) {
                    let t;
                    let {
                      allowedPrivateKeyLengths: r,
                      nByteLength: s,
                      wrapPrivateKey: n,
                      n: o,
                    } = i;
                    if (r && 'bigint' != typeof e) {
                      if ((tW(e) && (e = tX(e)), 'string' != typeof e || !r.includes(e.length)))
                        throw Error('invalid private key');
                      e = e.padStart(2 * s, '0');
                    }
                    try {
                      t = 'bigint' == typeof e ? e : t2(t9('private key', e, s));
                    } catch {
                      throw Error(
                        'invalid private key, expected hex or ' + s + ' bytes, got ' + typeof e
                      );
                    }
                    return n && (t = iE(t, o)), ii('private key', t, iQ, o), t;
                  }
                  function l(e) {
                    if (!(e instanceof d)) throw Error('ProjectivePoint expected');
                  }
                  let c = iu((e, t) => {
                      let { px: i, py: s, pz: n } = e;
                      if (r.eql(n, r.ONE)) return { x: i, y: s };
                      let o = e.is0();
                      null == t && (t = o ? r.ONE : r.inv(n));
                      let a = r.mul(i, t),
                        h = r.mul(s, t),
                        l = r.mul(n, t);
                      if (o) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error('invZ was invalid');
                      return { x: a, y: h };
                    }),
                    u = iu((e) => {
                      if (e.is0()) {
                        if (i.allowInfinityPoint && !r.is0(e.py)) return;
                        throw Error('bad point: ZERO');
                      }
                      let { x: t, y: s } = e.toAffine();
                      if (!r.isValid(t) || !r.isValid(s)) throw Error('bad point: x or y not FE');
                      let n = r.sqr(s),
                        o = a(t);
                      if (!r.eql(n, o)) throw Error('bad point: equation left != right');
                      if (!e.isTorsionFree()) throw Error('bad point: not in prime-order subgroup');
                      return !0;
                    });
                  class d {
                    constructor(e, t, i) {
                      if (((this.px = e), (this.py = t), (this.pz = i), null == e || !r.isValid(e)))
                        throw Error('x required');
                      if (null == t || !r.isValid(t)) throw Error('y required');
                      if (null == i || !r.isValid(i)) throw Error('z required');
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: i } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(i)) throw Error('invalid affine point');
                      if (e instanceof d) throw Error('projective point not allowed');
                      let s = (e) => r.eql(e, r.ZERO);
                      return s(t) && s(i) ? d.ZERO : new d(t, i, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e.map((e, i) => e.toAffine(t[i])).map(d.fromAffine);
                    }
                    static fromHex(e) {
                      let t = d.fromAffine(o(t9('pointHex', e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return d.BASE.multiply(h(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, i, r) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e)) throw Error('array expected');
                            e.forEach((e, i) => {
                              if (!(e instanceof t)) throw Error('invalid point at index ' + i);
                            });
                          })(i, e),
                          (function (e, t) {
                            if (!Array.isArray(e)) throw Error('array of scalars expected');
                            e.forEach((e, i) => {
                              if (!t.isValid(e)) throw Error('invalid scalar at index ' + i);
                            });
                          })(r, t),
                          i.length !== r.length)
                        )
                          throw Error('arrays of points and scalars must have equal length');
                        let s = e.ZERO,
                          n = ir(BigInt(i.length)),
                          o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                          a = (1 << o) - 1,
                          h = Array(a + 1).fill(s),
                          l = Math.floor((t.BITS - 1) / o) * o,
                          c = s;
                        for (let e = l; e >= 0; e -= o) {
                          h.fill(s);
                          for (let t = 0; t < r.length; t++) {
                            let s = Number((r[t] >> BigInt(e)) & BigInt(a));
                            h[s] = h[s].add(i[t]);
                          }
                          let t = s;
                          for (let e = h.length - 1, i = s; e > 0; e--)
                            (i = i.add(h[e])), (t = t.add(i));
                          if (((c = c.add(t)), 0 !== e)) for (let e = 0; e < o; e++) c = c.double();
                        }
                        return c;
                      })(d, s, e, t);
                    }
                    _setWindowSize(e) {
                      p.setWindowSize(this, e);
                    }
                    assertValidity() {
                      u(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: i, pz: s } = this,
                        { px: n, py: o, pz: a } = e,
                        h = r.eql(r.mul(t, a), r.mul(n, s)),
                        c = r.eql(r.mul(i, a), r.mul(o, s));
                      return h && c;
                    }
                    negate() {
                      return new d(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = i,
                        s = r.mul(t, i0),
                        { px: n, py: o, pz: a } = this,
                        h = r.ZERO,
                        l = r.ZERO,
                        c = r.ZERO,
                        u = r.mul(n, n),
                        g = r.mul(o, o),
                        p = r.mul(a, a),
                        f = r.mul(n, o);
                      return (
                        (f = r.add(f, f)),
                        (c = r.mul(n, a)),
                        (c = r.add(c, c)),
                        (h = r.mul(e, c)),
                        (l = r.mul(s, p)),
                        (l = r.add(h, l)),
                        (h = r.sub(g, l)),
                        (l = r.add(g, l)),
                        (l = r.mul(h, l)),
                        (h = r.mul(f, h)),
                        (c = r.mul(s, c)),
                        (p = r.mul(e, p)),
                        (f = r.sub(u, p)),
                        (f = r.mul(e, f)),
                        (f = r.add(f, c)),
                        (c = r.add(u, u)),
                        (u = r.add(c, u)),
                        (u = r.add(u, p)),
                        (u = r.mul(u, f)),
                        (l = r.add(l, u)),
                        (p = r.mul(o, a)),
                        (p = r.add(p, p)),
                        (u = r.mul(p, f)),
                        (h = r.sub(h, u)),
                        (c = r.mul(p, g)),
                        (c = r.add(c, c)),
                        new d(h, l, (c = r.add(c, c)))
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: t, py: s, pz: n } = this,
                        { px: o, py: a, pz: h } = e,
                        c = r.ZERO,
                        u = r.ZERO,
                        g = r.ZERO,
                        p = i.a,
                        f = r.mul(i.b, i0),
                        y = r.mul(t, o),
                        b = r.mul(s, a),
                        m = r.mul(n, h),
                        w = r.add(t, s),
                        E = r.add(o, a);
                      (w = r.mul(w, E)), (E = r.add(y, b)), (w = r.sub(w, E)), (E = r.add(t, n));
                      let x = r.add(o, h);
                      return (
                        (E = r.mul(E, x)),
                        (x = r.add(y, m)),
                        (E = r.sub(E, x)),
                        (x = r.add(s, n)),
                        (c = r.add(a, h)),
                        (x = r.mul(x, c)),
                        (c = r.add(b, m)),
                        (x = r.sub(x, c)),
                        (g = r.mul(p, E)),
                        (c = r.mul(f, m)),
                        (g = r.add(c, g)),
                        (c = r.sub(b, g)),
                        (g = r.add(b, g)),
                        (u = r.mul(c, g)),
                        (b = r.add(y, y)),
                        (b = r.add(b, y)),
                        (m = r.mul(p, m)),
                        (E = r.mul(f, E)),
                        (b = r.add(b, m)),
                        (m = r.sub(y, m)),
                        (m = r.mul(p, m)),
                        (E = r.add(E, m)),
                        (y = r.mul(b, E)),
                        (u = r.add(u, y)),
                        (y = r.mul(x, E)),
                        (c = r.mul(w, c)),
                        (c = r.sub(c, y)),
                        (y = r.mul(w, b)),
                        (g = r.mul(x, g)),
                        new d(c, u, (g = r.add(g, y)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(d.ZERO);
                    }
                    wNAF(e) {
                      return p.wNAFCached(this, e, d.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: s } = i;
                      ii('scalar', e, iX, s);
                      let n = d.ZERO;
                      if (e === iX) return n;
                      if (this.is0() || e === iQ) return this;
                      if (!t || p.hasPrecomputes(this))
                        return p.wNAFCachedUnsafe(this, e, d.normalizeZ);
                      let { k1neg: o, k1: a, k2neg: h, k2: l } = t.splitScalar(e),
                        c = n,
                        u = n,
                        g = this;
                      for (; a > iX || l > iX; )
                        a & iQ && (c = c.add(g)),
                          l & iQ && (u = u.add(g)),
                          (g = g.double()),
                          (a >>= iQ),
                          (l >>= iQ);
                      return (
                        o && (c = c.negate()),
                        h && (u = u.negate()),
                        (u = new d(r.mul(u.px, t.beta), u.py, u.pz)),
                        c.add(u)
                      );
                    }
                    multiply(e) {
                      let t, s;
                      let { endo: n, n: o } = i;
                      if ((ii('scalar', e, iQ, o), n)) {
                        let { k1neg: i, k1: o, k2neg: a, k2: h } = n.splitScalar(e),
                          { p: l, f: c } = this.wNAF(o),
                          { p: u, f: g } = this.wNAF(h);
                        (l = p.constTimeNegate(i, l)),
                          (u = p.constTimeNegate(a, u)),
                          (u = new d(r.mul(u.px, n.beta), u.py, u.pz)),
                          (t = l.add(u)),
                          (s = c.add(g));
                      } else {
                        let { p: i, f: r } = this.wNAF(e);
                        (t = i), (s = r);
                      }
                      return d.normalizeZ([t, s])[0];
                    }
                    multiplyAndAddUnsafe(e, t, i) {
                      let r = d.BASE,
                        s = (e, t) =>
                          t !== iX && t !== iQ && e.equals(r) ? e.multiply(t) : e.multiplyUnsafe(t),
                        n = s(this, t).add(s(e, i));
                      return n.is0() ? void 0 : n;
                    }
                    toAffine(e) {
                      return c(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = i;
                      if (e === iQ) return !0;
                      if (t) return t(d, this);
                      throw Error('isTorsionFree() has not been declared for the elliptic curve');
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = i;
                      return e === iQ ? this : t ? t(d, this) : this.multiplyUnsafe(i.h);
                    }
                    toRawBytes(e = !0) {
                      return tZ('isCompressed', e), this.assertValidity(), n(d, this, e);
                    }
                    toHex(e = !0) {
                      return tZ('isCompressed', e), tX(this.toRawBytes(e));
                    }
                  }
                  (d.BASE = new d(i.Gx, i.Gy, r.ONE)), (d.ZERO = new d(r.ZERO, r.ONE, r.ZERO));
                  let g = i.nBitLength,
                    p =
                      ((t = i.endo ? Math.ceil(g / 2) : g),
                      {
                        constTimeNegate: iN,
                        hasPrecomputes: (e) => 1 !== iD(e),
                        unsafeLadder(e, t, i = d.ZERO) {
                          let r = e;
                          for (; t > iU; ) t & iL && (i = i.add(r)), (r = r.double()), (t >>= iL);
                          return i;
                        },
                        precomputeWindow(e, i) {
                          let { windows: r, windowSize: s } = iC(i, t),
                            n = [],
                            o = e,
                            a = o;
                          for (let e = 0; e < r; e++) {
                            (a = o), n.push(a);
                            for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                            o = a.double();
                          }
                          return n;
                        },
                        wNAF(e, i, r) {
                          let { windows: s, windowSize: n } = iC(e, t),
                            o = d.ZERO,
                            a = d.BASE,
                            h = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            c = BigInt(e);
                          for (let e = 0; e < s; e++) {
                            let t = e * n,
                              s = Number(r & h);
                            (r >>= c), s > n && ((s -= l), (r += iL));
                            let u = t + Math.abs(s) - 1,
                              d = e % 2 != 0,
                              g = s < 0;
                            0 === s ? (a = a.add(iN(d, i[t]))) : (o = o.add(iN(g, i[u])));
                          }
                          return { p: o, f: a };
                        },
                        wNAFUnsafe(e, i, r, s = d.ZERO) {
                          let { windows: n, windowSize: o } = iC(e, t),
                            a = BigInt(2 ** e - 1),
                            h = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < n; e++) {
                            let t = e * o;
                            if (r === iU) break;
                            let n = Number(r & a);
                            if (((r >>= l), n > o && ((n -= h), (r += iL)), 0 === n)) continue;
                            let c = i[t + Math.abs(n) - 1];
                            n < 0 && (c = c.negate()), (s = s.add(c));
                          }
                          return s;
                        },
                        getPrecomputes(e, t, i) {
                          let r = ik.get(t);
                          return (
                            r || ((r = this.precomputeWindow(t, e)), 1 !== e && ik.set(t, i(r))), r
                          );
                        },
                        wNAFCached(e, t, i) {
                          let r = iD(e);
                          return this.wNAF(r, this.getPrecomputes(r, e, i), t);
                        },
                        wNAFCachedUnsafe(e, t, i, r) {
                          let s = iD(e);
                          return 1 === s
                            ? this.unsafeLadder(e, t, r)
                            : this.wNAFUnsafe(s, this.getPrecomputes(s, e, i), t, r);
                        },
                        setWindowSize(e, i) {
                          iR(i, t), ij.set(e, i), ik.delete(e);
                        },
                      });
                  return {
                    CURVE: i,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: h,
                    weierstrassEquation: a,
                    isWithinCurveOrder: function (e) {
                      return it(e, iQ, i.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, r) {
                    let s = t.toAffine(),
                      n = i.toBytes(s.x);
                    return (
                      tZ('isCompressed', r),
                      r
                        ? t7(Uint8Array.from([t.hasEvenY() ? 2 : 3]), n)
                        : t7(Uint8Array.from([4]), n, i.toBytes(s.y))
                    );
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      o = e.subarray(1);
                    if (t === s && (2 === r || 3 === r)) {
                      let e;
                      let t = t2(o);
                      if (!it(t, iQ, i.ORDER)) throw Error('Point is not on curve');
                      let s = l(t);
                      try {
                        e = i.sqrt(s);
                      } catch (e) {
                        throw Error(
                          'Point is not on curve' + (e instanceof Error ? ': ' + e.message : '')
                        );
                      }
                      return ((1 & r) == 1) != ((e & iQ) === iQ) && (e = i.neg(e)), { x: t, y: e };
                    }
                    if (t === n && 4 === r)
                      return {
                        x: i.fromBytes(o.subarray(0, i.BYTES)),
                        y: i.fromBytes(o.subarray(i.BYTES, 2 * i.BYTES)),
                      };
                    throw Error(
                      'invalid Point, expected length of ' +
                        s +
                        ', or uncompressed ' +
                        n +
                        ', got ' +
                        t
                    );
                  },
                }),
                u = (e) => tX(t8(e, t.nByteLength)),
                d = (e, t, i) => t2(e.slice(t, i));
              class g {
                constructor(e, t, i) {
                  (this.r = e), (this.s = t), (this.recovery = i), this.assertValidity();
                }
                static fromCompact(e) {
                  let i = t.nByteLength;
                  return new g(d((e = t9('compactSignature', e, 2 * i)), 0, i), d(e, i, 2 * i));
                }
                static fromDER(e) {
                  let { r: t, s: i } = iY.toSig(t9('DER', e));
                  return new g(t, i);
                }
                assertValidity() {
                  ii('r', this.r, iQ, r), ii('s', this.s, iQ, r);
                }
                addRecoveryBit(e) {
                  return new g(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: s, s: n, recovery: h } = this,
                    l = y(t9('msgHash', e));
                  if (null == h || ![0, 1, 2, 3].includes(h)) throw Error('recovery id invalid');
                  let c = 2 === h || 3 === h ? s + t.n : s;
                  if (c >= i.ORDER) throw Error('recovery id 2 or 3 invalid');
                  let d = (1 & h) == 0 ? '02' : '03',
                    g = a.fromHex(d + u(c)),
                    p = iI(c, r),
                    f = o(-l * p),
                    b = o(n * p),
                    m = a.BASE.multiplyAndAddUnsafe(g, f, b);
                  if (!m) throw Error('point at infinify');
                  return m.assertValidity(), m;
                }
                hasHighS() {
                  return this.s > r >> iQ;
                }
                normalizeS() {
                  return this.hasHighS() ? new g(this.r, o(-this.s), this.recovery) : this;
                }
                toDERRawBytes() {
                  return t6(this.toDERHex());
                }
                toDERHex() {
                  return iY.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return t6(this.toCompactHex());
                }
                toCompactHex() {
                  return u(this.r) + u(this.s);
                }
              }
              function p(e) {
                let t = tW(e),
                  i = 'string' == typeof e,
                  r = (t || i) && e.length;
                return t ? r === s || r === n : i ? r === 2 * s || r === 2 * n : e instanceof a;
              }
              let f =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error('input is too large');
                    let i = t2(e),
                      r = 8 * e.length - t.nBitLength;
                    return r > 0 ? i >> BigInt(r) : i;
                  },
                y =
                  t.bits2int_modN ||
                  function (e) {
                    return o(f(e));
                  },
                b = is(t.nBitLength);
              function m(e) {
                return ii('num < 2^' + t.nBitLength, e, iX, b), t8(e, t.nByteLength);
              }
              let w = { lowS: t.lowS, prehash: !1 },
                E = { lowS: t.lowS, prehash: !1 };
              return (
                a.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return a.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, i = !0) {
                    if (p(e)) throw Error('first arg must be private key');
                    if (!p(t)) throw Error('second arg must be public key');
                    return a.fromHex(t).multiply(h(e)).toRawBytes(i);
                  },
                  sign: function (e, s, n = w) {
                    let { seed: l, k2sig: u } = (function (e, s, n = w) {
                      if (['recovered', 'canonical'].some((e) => e in n))
                        throw Error('sign() legacy options not supported');
                      let { hash: l, randomBytes: u } = t,
                        { lowS: d, prehash: p, extraEntropy: b } = n;
                      null == d && (d = !0),
                        (e = t9('msgHash', e)),
                        iG(n),
                        p && (e = t9('prehashed msgHash', l(e)));
                      let E = y(e),
                        x = h(s),
                        _ = [m(x), m(E)];
                      if (null != b && !1 !== b) {
                        let e = !0 === b ? u(i.BYTES) : b;
                        _.push(t9('extraEntropy', e));
                      }
                      return {
                        seed: t7(..._),
                        k2sig: function (e) {
                          var t;
                          let i = f(e);
                          if (!c(i)) return;
                          let s = iI(i, r),
                            n = a.BASE.multiply(i).toAffine(),
                            h = o(n.x);
                          if (h === iX) return;
                          let l = o(s * o(E + h * x));
                          if (l === iX) return;
                          let u = (2 * (n.x !== h)) | Number(n.y & iQ),
                            p = l;
                          return (
                            d && l > r >> iQ && ((p = (t = l) > r >> iQ ? o(-t) : t), (u ^= 1)),
                            new g(h, p, u)
                          );
                        },
                      };
                    })(e, s, n);
                    return ih(t.hash.outputLen, t.nByteLength, t.hmac)(l, u);
                  },
                  verify: function (e, i, s, n = E) {
                    let h, l;
                    (i = t9('msgHash', i)), (s = t9('publicKey', s));
                    let { lowS: c, prehash: u, format: d } = n;
                    if ((iG(n), 'strict' in n)) throw Error('options.strict was renamed to lowS');
                    if (void 0 !== d && 'compact' !== d && 'der' !== d)
                      throw Error('format must be compact or der');
                    let p = 'string' == typeof e || tW(e),
                      f =
                        !p &&
                        !d &&
                        'object' == typeof e &&
                        null !== e &&
                        'bigint' == typeof e.r &&
                        'bigint' == typeof e.s;
                    if (!p && !f)
                      throw Error(
                        'invalid signature, expected Uint8Array, hex string or Signature instance'
                      );
                    try {
                      if ((f && (h = new g(e.r, e.s)), p)) {
                        try {
                          'compact' !== d && (h = g.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof iY.Err)) throw e;
                        }
                        h || 'der' === d || (h = g.fromCompact(e));
                      }
                      l = a.fromHex(s);
                    } catch {
                      return !1;
                    }
                    if (!h || (c && h.hasHighS())) return !1;
                    u && (i = t.hash(i));
                    let { r: b, s: m } = h,
                      w = y(i),
                      x = iI(m, r),
                      _ = o(w * x),
                      I = o(b * x),
                      S = a.BASE.multiplyAndAddUnsafe(l, _, I)?.toAffine();
                    return !!S && o(S.x) === b;
                  },
                  ProjectivePoint: a,
                  Signature: g,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return h(e), !0;
                      } catch {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: h,
                    randomPrivateKey: () => {
                      let e = iT(t.n);
                      return (function (e, t, i = !1) {
                        let r = e.length,
                          s = iA(t),
                          n = iT(t);
                        if (r < 16 || r < n || r > 1024)
                          throw Error('expected ' + n + '-1024 bytes of input, got ' + r);
                        let o = iE(i ? t3(e) : t2(e), t - ip) + ip;
                        return i ? t4(o, s) : t8(o, s);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = a.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...i) =>
                tk(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let i = 0; i < e.length; i++) {
                      let r = e[i];
                      ev(r), (t += r.length);
                    }
                    let i = new Uint8Array(t);
                    for (let t = 0, r = 0; t < e.length; t++) {
                      let s = e[t];
                      i.set(s, r), (r += s.length);
                    }
                    return i;
                  })(...i)
                ),
              randomBytes: eM,
            });
          return { ...i(t), create: i };
        })(
          {
            a: i1.create(BigInt('-3')),
            b: BigInt('0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b'),
            Fp: i1,
            n: BigInt('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551'),
            Gx: BigInt('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296'),
            Gy: BigInt('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5'),
            h: BigInt(1),
            lowS: !1,
          },
          tF
        ),
        i6 = 'base10',
        i2 = 'base16',
        i3 = 'base64pad',
        i8 = 'base64url',
        i4 = 'utf8';
      function i9() {
        return H(eM(32), i2);
      }
      function i7(e) {
        return H(tF(K(e, i4)), i2);
      }
      function re(e) {
        return Number(H(e, i6));
      }
      function rt(e) {
        return e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }
      function ri(e) {
        let t = e.replace(/-/g, '+').replace(/_/g, '/'),
          i = (4 - (t.length % 4)) % 4;
        return t + '='.repeat(i);
      }
      function rr(e) {
        if (2 === re(e.type)) return H(j([e.type, e.sealed]), i3);
        if (1 === re(e.type)) {
          if (typeof e.senderPublicKey > 'u')
            throw Error('Missing sender public key for type 1 envelope');
          return H(j([e.type, e.senderPublicKey, e.iv, e.sealed]), i3);
        }
        return H(j([e.type, e.iv, e.sealed]), i3);
      }
      function rs(e) {
        let t = K((e.encoding || i3) === i8 ? ri(e.encoded) : e.encoded, i3),
          i = t.slice(0, 1);
        if (1 === re(i)) {
          let e = t.slice(1, 33),
            r = t.slice(33, 45);
          return { type: i, sealed: t.slice(45), iv: r, senderPublicKey: e };
        }
        if (2 === re(i)) return { type: i, sealed: t.slice(1), iv: eM(12) };
        let r = t.slice(1, 13);
        return { type: i, sealed: t.slice(13), iv: r };
      }
      function rn(e) {
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
      function ro(e) {
        return (
          1 === e.type &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function ra(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function rh(e) {
        let t = F.CG[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function rl(e) {
        var t;
        if (!e.includes('wc:')) {
          let t = em(e);
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
      function rc(e) {
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
      var ru = Object.defineProperty,
        rd = Object.defineProperties,
        rg = Object.getOwnPropertyDescriptors,
        rp = Object.getOwnPropertySymbols,
        rf = Object.prototype.hasOwnProperty,
        ry = Object.prototype.propertyIsEnumerable,
        rb = (e, t, i) =>
          t in e
            ? ru(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        rm = (e, t) => {
          for (var i in t || (t = {})) rf.call(t, i) && rb(e, i, t[i]);
          if (rp) for (var i of rp(t)) ry.call(t, i) && rb(e, i, t[i]);
          return e;
        },
        rw = (e, t) => rd(e, rg(t));
      function rv(e) {
        return e.includes(':');
      }
      let rE = {
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
        rx = {
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
      function r_(e, t) {
        let { message: i, code: r } = rx[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function rI(e, t) {
        let { message: i, code: r } = rE[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function rS(e) {
        return typeof e > 'u';
      }
      function rP(e, t) {
        return !!(t && rS(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function rO(e) {
        var t, i;
        let r = !0;
        return Array.isArray((t = e)) ? e.length && (r = e.every((e) => rP(e, !1))) : (r = !1), r;
      }
      function rA(e) {
        return 'u' > typeof e;
      }
      function rT() {
        let e = en();
        return new Promise((t) => {
          switch (e) {
            case et.browser:
              t(es() && navigator?.onLine);
              break;
            case et.reactNative:
              t(rU());
              break;
            case et.node:
            default:
              t(!0);
          }
        });
      }
      async function rU() {
        if (er() && 'u' > typeof i.g && null != i.g && i.g.NetInfo) {
          let e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      var rL = i(84214),
        rN = i(32034),
        rR = i(60172),
        rC = i(51642).Buffer,
        rk = i(29143);
      let rj = 'core',
        rD = `wc@2:${rj}:`,
        rM = { logger: 'error' },
        rB = { database: ':memory:' },
        rz = 'client_ed25519_seed',
        r$ = T.ONE_DAY,
        rK = T.SIX_HOURS,
        rH = 'wss://relay.walletconnect.org',
        rF = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          publish: 'relayer_publish',
        },
        rq = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        rV = '2.20.2',
        rG = { link_mode: 'link_mode', relay: 'relay' },
        rW = { inbound: 'inbound', outbound: 'outbound' },
        rJ = 'WALLETCONNECT_LINK_MODE_APPS',
        rZ = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        rY =
          (T.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: T.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: T.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: T.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: T.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: T.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: T.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        rX = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        rQ = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        r0 = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync',
        },
        r1 = 'https://verify.walletconnect.org',
        r5 = `${r1}/v3`,
        r6 = ['https://verify.walletconnect.com', r1],
        r2 = {
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
        r3 = {
          no_internet_connection: 'no_internet_connection',
          malformed_pairing_uri: 'malformed_pairing_uri',
          active_pairing_already_exists: 'active_pairing_already_exists',
          subscribe_pairing_topic_failure: 'subscribe_pairing_topic_failure',
          pairing_expired: 'pairing_expired',
        };
      var r8 = function (e, t) {
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
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var r = 0, s = 0; e[t] === h; ) r++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var c = i[e.charCodeAt(t)];
              if (255 === c) return;
              for (var u = 0, d = n - 1; (0 !== c || u < s) && -1 !== d; d--, u++)
                (c += (a * o[d]) >>> 0), (o[d] = c % 256 >>> 0), (c = (c / 256) >>> 0);
              if (0 !== c) throw Error('Non-zero carry');
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
            for (var o = ((n - s) * c + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, g = o - 1; (0 !== u || d < r) && -1 !== g; g--, d++)
                (u += (256 * l[g]) >>> 0), (l[g] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (r = d), s++;
            }
            for (var p = o - r; p !== o && 0 === l[p]; ) p++;
            for (var f = h.repeat(i); p < o; ++p) f += e.charAt(l[p]);
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
      let r4 = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        r9 = (e) => new TextEncoder().encode(e),
        r7 = (e) => new TextDecoder().decode(e);
      class se {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class st {
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
          return sr(this, e);
        }
      }
      class si {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return sr(this, e);
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
      let sr = (e, t) =>
        new si({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class ss {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new se(e, t, i)),
            (this.decoder = new st(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let sn = ({ name: e, prefix: t, encode: i, decode: r }) => new ss(e, t, i, r),
        so = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = r8(i, t);
          return sn({ prefix: e, name: t, encode: r, decode: (e) => r4(s(e)) });
        },
        sa = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * i) / 8) | 0),
            a = 0,
            h = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (h = (h << i) | n), (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (h >> a)));
          }
          if (a >= i || 255 & (h << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        sh = (e, t, i) => {
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
        sl = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          sn({ prefix: t, name: e, encode: (e) => sh(e, r, i), decode: (t) => sa(t, r, i, e) });
      var sc = Object.freeze({
          __proto__: null,
          identity: sn({
            prefix: '\0',
            name: 'identity',
            encode: (e) => r7(e),
            decode: (e) => r9(e),
          }),
        }),
        su = Object.freeze({
          __proto__: null,
          base2: sl({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        sd = Object.freeze({
          __proto__: null,
          base8: sl({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        sg = Object.freeze({
          __proto__: null,
          base10: so({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        sp = Object.freeze({
          __proto__: null,
          base16: sl({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: sl({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let sf = sl({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        sy = sl({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        sb = sl({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        sm = sl({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        sw = sl({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        sv = sl({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        sE = sl({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var sx = Object.freeze({
          __proto__: null,
          base32: sf,
          base32upper: sy,
          base32pad: sb,
          base32padupper: sm,
          base32hex: sw,
          base32hexupper: sv,
          base32hexpad: sE,
          base32hexpadupper: sl({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: sl({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        s_ = Object.freeze({
          __proto__: null,
          base36: so({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: so({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        sI = Object.freeze({
          __proto__: null,
          base58btc: so({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: so({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let sS = sl({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        sP = sl({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var sO = Object.freeze({
        __proto__: null,
        base64: sS,
        base64pad: sP,
        base64url: sl({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: sl({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let sA = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        sT = sA.reduce((e, t, i) => ((e[i] = t), e), []),
        sU = sA.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var sL = Object.freeze({
        __proto__: null,
        base256emoji: sn({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += sT[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = sU[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function sN(e, t, i) {
        (t = t || []), (i = i || 0);
        for (var r = i; e >= 0x80000000; ) (t[i++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
        return (t[i] = 0 | e), (sN.bytes = i - r + 1), t;
      }
      function sR(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((sR.bytes = 0), RangeError('Could not decode varint'));
          (i = e[n++]), (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)), (s += 7);
        } while (i >= 128);
        return (sR.bytes = n - t), r;
      }
      var sC = {
        encode: sN,
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
      let sk = (e, t, i = 0) => (sC.encode(e, t, i), t),
        sj = (e) => sC.encodingLength(e),
        sD = (e, t) => {
          let i = t.byteLength,
            r = sj(e),
            s = r + sj(i),
            n = new Uint8Array(s + i);
          return sk(e, n, 0), sk(i, n, r), n.set(t, s), new sM(e, i, t, n);
        };
      class sM {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let sB = ({ name: e, code: t, encode: i }) => new sz(e, t, i);
      class sz {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? sD(this.code, t) : t.then((e) => sD(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let s$ = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var sK = Object.freeze({
          __proto__: null,
          sha256: sB({ name: 'sha2-256', code: 18, encode: s$('SHA-256') }),
          sha512: sB({ name: 'sha2-512', code: 19, encode: s$('SHA-512') }),
        }),
        sH = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: r4, digest: (e) => sD(0, r4(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let sF = { ...sc, ...su, ...sd, ...sg, ...sp, ...sx, ...s_, ...sI, ...sO, ...sL };
      function sq(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...sK, ...sH });
      let sV = sq(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        sG = sq(
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
        sW = { utf8: sV, 'utf-8': sV, hex: sF.base16, latin1: sG, ascii: sG, binary: sG, ...sF };
      var sJ = Object.defineProperty,
        sZ = (e, t, i) =>
          t in e
            ? sJ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        sY = (e, t, i) => sZ(e, 'symbol' != typeof t ? t + '' : t, i);
      class sX {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            sY(this, 'keychain', new Map()),
            sY(this, 'name', 'keychain'),
            sY(this, 'version', '0.3'),
            sY(this, 'initialized', !1),
            sY(this, 'storagePrefix', rD),
            sY(this, 'init', async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            sY(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            sY(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            sY(this, 'get', (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = r_('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            sY(this, 'del', async (e) => {
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
          await this.core.storage.setItem(this.storageKey, eh(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? el(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var sQ = Object.defineProperty,
        s0 = (e, t, i) =>
          t in e
            ? sQ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        s1 = (e, t, i) => s0(e, 'symbol' != typeof t ? t + '' : t, i);
      class s5 {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            s1(this, 'name', 'crypto'),
            s1(this, 'keychain'),
            s1(this, 'randomSessionIdentifier', i9()),
            s1(this, 'initialized', !1),
            s1(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            s1(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            s1(this, 'getClientId', async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = L.TZ(e);
              return L.UF(t.publicKey);
            }),
            s1(this, 'generateKeyPair', () => {
              this.isInitialized();
              let e = (function () {
                let e = iV.utils.randomPrivateKey(),
                  t = iV.getPublicKey(e);
                return { privateKey: H(e, i2), publicKey: H(t, i2) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            s1(this, 'signJWT', async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = L.TZ(t),
                r = this.randomSessionIdentifier;
              return await L.FA(r, e, r$, i);
            }),
            s1(this, 'generateSharedKey', (e, t, i) => {
              var r;
              this.isInitialized();
              let s =
                ((r = this.getPrivateKey(e)),
                H(tM(tF, iV.getSharedSecret(K(r, i2), K(t, i2)), void 0, void 0, 32), i2));
              return this.setSymKey(s, i);
            }),
            s1(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              let i = t || H(tF(K(e, i2)), i2);
              return await this.keychain.set(i, e), i;
            }),
            s1(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            s1(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            s1(this, 'encode', async (e, t, i) => {
              this.isInitialized();
              let r = rn(i),
                s = (0, U.h)(t);
              if (2 === r.type)
                return (function (e, t) {
                  let i = K('2', i6),
                    r = eM(12),
                    s = rr({ type: i, sealed: K(e, i4), iv: r });
                  return t === i8 ? rt(s) : s;
                })(s, i?.encoding);
              if (ro(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = r;
              return (function (e) {
                var t;
                let i = ((t = 'u' > typeof e.type ? e.type : 0), K(`${t}`, i6));
                if (1 === re(i) && typeof e.senderPublicKey > 'u')
                  throw Error('Missing sender public key for type 1 envelope');
                let r = 'u' > typeof e.senderPublicKey ? K(e.senderPublicKey, i2) : void 0,
                  s = 'u' > typeof e.iv ? K(e.iv, i2) : eM(12),
                  n = rr({
                    type: i,
                    sealed: tR(K(e.symKey, i2), s).encrypt(K(e.message, i4)),
                    iv: s,
                    senderPublicKey: r,
                  });
                return e.encoding === i8 ? rt(n) : n;
              })({ type: o, symKey: n, message: s, senderPublicKey: a, encoding: i?.encoding });
            }),
            s1(this, 'decode', async (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = rs({ encoded: e, encoding: t?.encoding });
                return rn({
                  type: re(i.type),
                  senderPublicKey:
                    'u' > typeof i.senderPublicKey ? H(i.senderPublicKey, i2) : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, i);
              if (2 === r.type) {
                let e = (function (e, t) {
                  let { sealed: i } = rs({ encoded: e, encoding: t });
                  return H(i, i4);
                })(t, i?.encoding);
                return (0, U.j)(e);
              }
              if (ro(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let r = this.getSymKey(e),
                  s = (function (e) {
                    let t = K(e.symKey, i2),
                      { sealed: i, iv: r } = rs({ encoded: e.encoded, encoding: e.encoding }),
                      s = tR(t, r).decrypt(i);
                    if (null === s) throw Error('Failed to decrypt');
                    return H(s, i4);
                  })({ symKey: r, encoded: t, encoding: i?.encoding });
                return (0, U.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            s1(this, 'getPayloadType', (e, t = i3) => re(rs({ encoded: e, encoding: t }).type)),
            s1(this, 'getPayloadSenderPublicKey', (e, t = i3) => {
              let i = rs({ encoded: e, encoding: t });
              return i.senderPublicKey ? H(i.senderPublicKey, i2) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, a.U5)(t, this.name)),
            (this.keychain = i || new sX(this.core, this.logger));
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
            e = this.keychain.get(rz);
          } catch {
            (e = i9()), await this.keychain.set(rz, e);
          }
          return (function (e, t = 'utf8') {
            let i = sW[t];
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
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var s6 = Object.defineProperty,
        s2 = Object.defineProperties,
        s3 = Object.getOwnPropertyDescriptors,
        s8 = Object.getOwnPropertySymbols,
        s4 = Object.prototype.hasOwnProperty,
        s9 = Object.prototype.propertyIsEnumerable,
        s7 = (e, t, i) =>
          t in e
            ? s6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nt = (e, t) => {
          for (var i in t || (t = {})) s4.call(t, i) && s7(e, i, t[i]);
          if (s8) for (var i of s8(t)) s9.call(t, i) && s7(e, i, t[i]);
          return e;
        },
        ni = (e, t) => s2(e, s3(t)),
        nr = (e, t, i) => s7(e, 'symbol' != typeof t ? t + '' : t, i);
      class ns extends b {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            nr(this, 'messages', new Map()),
            nr(this, 'messagesWithoutClientAck', new Map()),
            nr(this, 'name', 'messages'),
            nr(this, 'version', '0.3'),
            nr(this, 'initialized', !1),
            nr(this, 'storagePrefix', rD),
            nr(this, 'init', async () => {
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
            nr(this, 'set', async (e, t, i) => {
              this.isInitialized();
              let r = i7(t),
                s = this.messages.get(e);
              if ((typeof s > 'u' && (s = {}), 'u' > typeof s[r])) return r;
              if (((s[r] = t), this.messages.set(e, s), i === rW.inbound)) {
                let i = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, ni(nt({}, i), { [r]: t }));
              }
              return await this.persist(), r;
            }),
            nr(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            nr(this, 'getWithoutAck', (e) => {
              this.isInitialized();
              let t = {};
              for (let i of e) {
                let e = this.messagesWithoutClientAck.get(i) || {};
                t[i] = Object.values(e);
              }
              return t;
            }),
            nr(this, 'has', (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[i7(t)])),
            nr(this, 'ack', async (e, t) => {
              this.isInitialized();
              let i = this.messagesWithoutClientAck.get(e);
              if (typeof i > 'u') return;
              let r = i7(t);
              delete i[r],
                0 === Object.keys(i).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, i),
                await this.persist();
            }),
            nr(this, 'del', async (e) => {
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
          await this.core.storage.setItem(this.storageKey, eh(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(this.storageKeyWithoutClientAck, eh(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? el(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
          return 'u' > typeof e ? el(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nn = Object.defineProperty,
        no = Object.defineProperties,
        na = Object.getOwnPropertyDescriptors,
        nh = Object.getOwnPropertySymbols,
        nl = Object.prototype.hasOwnProperty,
        nc = Object.prototype.propertyIsEnumerable,
        nu = (e, t, i) =>
          t in e
            ? nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nd = (e, t) => {
          for (var i in t || (t = {})) nl.call(t, i) && nu(e, i, t[i]);
          if (nh) for (var i of nh(t)) nc.call(t, i) && nu(e, i, t[i]);
          return e;
        },
        ng = (e, t) => no(e, na(t)),
        np = (e, t, i) => nu(e, 'symbol' != typeof t ? t + '' : t, i);
      class nf extends m {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            np(this, 'events', new r.EventEmitter()),
            np(this, 'name', 'publisher'),
            np(this, 'queue', new Map()),
            np(this, 'publishTimeout', (0, T.toMiliseconds)(T.ONE_MINUTE)),
            np(this, 'initialPublishTimeout', (0, T.toMiliseconds)(15 * T.ONE_SECOND)),
            np(this, 'needsTransportRestart', !1),
            np(this, 'publish', async (e, t, i) => {
              var r;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: i },
                });
              let s = i?.ttl || rK,
                n = ra(i),
                o = i?.prompt || !1,
                a = i?.tag || 0,
                h = i?.id || (0, rN.getBigIntRpcId)().toString(),
                l = {
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
                c = `Failed to publish payload, please try again. id:${h} tag:${a}`;
              try {
                let r = new Promise(async (r) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(rF.publish, n),
                      r(l));
                  };
                  this.relayer.events.on(rF.publish, n);
                  let c = ec(
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
                    await c, this.events.removeListener(rF.publish, n);
                  } catch (e) {
                    this.queue.set(h, ng(nd({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: h, topic: e, message: t, opts: i },
                }),
                  await ec(r, this.publishTimeout, c);
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
            np(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            np(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            np(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            np(this, 'removeListener', (e, t) => {
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
              ttl: a = rK,
              prompt: h,
              tag: l,
              id: c,
              attestation: u,
              tvf: d,
            } = e,
            g = {
              method: rh(ra().protocol).publish,
              params: nd({ topic: n, message: o, ttl: a, prompt: h, tag: l, attestation: u }, d),
              id: c,
            };
          rS(null == (t = g.params) ? void 0 : t.prompt) &&
            (null == (i = g.params) || delete i.prompt),
            rS(null == (r = g.params) ? void 0 : r.tag) && (null == (s = g.params) || delete s.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: g });
          let p = await this.relayer.request(g);
          return (
            this.relayer.events.emit(rF.publish, e),
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
            this.queue.set(t, ng(nd({}, e), { attempt: i }));
            let { topic: r, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`
            ),
              await this.rpcPublish(
                ng(nd({}, e), {
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
              (this.needsTransportRestart = !1), this.relayer.events.emit(rF.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(rF.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var ny = Object.defineProperty,
        nb = (e, t, i) =>
          t in e
            ? ny(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nm = (e, t, i) => nb(e, 'symbol' != typeof t ? t + '' : t, i);
      class nw {
        constructor() {
          nm(this, 'map', new Map()),
            nm(this, 'set', (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            nm(this, 'get', (e) => this.map.get(e) || []),
            nm(this, 'exists', (e, t) => this.get(e).includes(t)),
            nm(this, 'delete', (e, t) => {
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
            nm(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var nv = Object.defineProperty,
        nE = Object.defineProperties,
        nx = Object.getOwnPropertyDescriptors,
        n_ = Object.getOwnPropertySymbols,
        nI = Object.prototype.hasOwnProperty,
        nS = Object.prototype.propertyIsEnumerable,
        nP = (e, t, i) =>
          t in e
            ? nv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nO = (e, t) => {
          for (var i in t || (t = {})) nI.call(t, i) && nP(e, i, t[i]);
          if (n_) for (var i of n_(t)) nS.call(t, i) && nP(e, i, t[i]);
          return e;
        },
        nA = (e, t) => nE(e, nx(t)),
        nT = (e, t, i) => nP(e, 'symbol' != typeof t ? t + '' : t, i);
      class nU extends _ {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            nT(this, 'subscriptions', new Map()),
            nT(this, 'topicMap', new nw()),
            nT(this, 'events', new r.EventEmitter()),
            nT(this, 'name', 'subscription'),
            nT(this, 'version', '0.3'),
            nT(this, 'pending', new Map()),
            nT(this, 'cached', []),
            nT(this, 'initialized', !1),
            nT(this, 'storagePrefix', rD),
            nT(this, 'subscribeTimeout', (0, T.toMiliseconds)(T.ONE_MINUTE)),
            nT(this, 'initialSubscribeTimeout', (0, T.toMiliseconds)(15 * T.ONE_SECOND)),
            nT(this, 'clientId'),
            nT(this, 'batchSubscribeTopicsLimit', 500),
            nT(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            nT(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                let i = ra(t),
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
            nT(this, 'unsubscribe', async (e, t) => {
              this.isInitialized(),
                'u' > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            nT(
              this,
              'isSubscribed',
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            nT(
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
            nT(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            nT(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            nT(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            nT(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            nT(this, 'start', async () => {
              await this.onConnect();
            }),
            nT(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            nT(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            nT(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            nT(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(n.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(rZ.created, async (e) => {
                  let t = rZ.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(rZ.deleted, async (e) => {
                  let t = rZ.deleted;
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
          this.values.length > 0 && (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
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
            let r = ra(i);
            await this.restartToComplete({ topic: e, id: t, relay: r }),
              await this.rpcUnsubscribe(e, t, r);
            let s = rI('USER_DISCONNECTED', `${this.name}, ${e}`);
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
          (i && i?.transportType !== rG.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let s = { method: rh(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
          let n = null == (r = i?.internal) ? void 0 : r.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (i?.transportType === rG.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  },
                  (0, T.toMiliseconds)(T.ONE_SECOND)
                ),
                t
              );
            let r = new Promise(async (t) => {
                let i = (r) => {
                  r.topic === e && (this.events.removeListener(rZ.created, i), t(r.id));
                };
                this.events.on(rZ.created, i);
                try {
                  let r = await ec(
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
                  this.events.removeListener(rZ.created, i), t(r);
                } catch {}
              }),
              o = await ec(
                r,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!o && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return o ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(rF.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: rh(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: t });
          try {
            await await ec(
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
            this.relayer.events.emit(rF.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = {
            method: rh(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i });
          try {
            t = await await ec(
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
            this.relayer.events.emit(rF.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let r = { method: rh(i.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, nA(nO({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, nO({}, e)), this.pending.delete(e.topic);
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
          this.subscriptions.set(e, nO({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(rZ.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = r_('NO_MATCHING_KEY', `${this.name}: ${e}`);
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
            this.events.emit(rZ.deleted, nA(nO({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(rZ.sync);
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
          this.events.emit(rZ.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = r_('RESTORE_WILL_OVERRIDE', this.name);
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
                e.map(async (e) => nA(nO({}, e), { id: await this.getSubscriptionId(e.topic) }))
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
            (await ((t = (0, T.toMiliseconds)(T.ONE_SECOND)), new Promise((e) => setTimeout(e, t))),
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
            let { message: e } = r_('NOT_INITIALIZED', this.name);
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
          return i7(e + (await this.getClientId()));
        }
      }
      var nL = Object.defineProperty,
        nN = Object.getOwnPropertySymbols,
        nR = Object.prototype.hasOwnProperty,
        nC = Object.prototype.propertyIsEnumerable,
        nk = (e, t, i) =>
          t in e
            ? nL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nj = (e, t) => {
          for (var i in t || (t = {})) nR.call(t, i) && nk(e, i, t[i]);
          if (nN) for (var i of nN(t)) nC.call(t, i) && nk(e, i, t[i]);
          return e;
        },
        nD = (e, t, i) => nk(e, 'symbol' != typeof t ? t + '' : t, i);
      class nM extends w {
        constructor(e) {
          super(e),
            nD(this, 'protocol', 'wc'),
            nD(this, 'version', 2),
            nD(this, 'core'),
            nD(this, 'logger'),
            nD(this, 'events', new r.EventEmitter()),
            nD(this, 'provider'),
            nD(this, 'messages'),
            nD(this, 'subscriber'),
            nD(this, 'publisher'),
            nD(this, 'name', 'relayer'),
            nD(this, 'transportExplicitlyClosed', !1),
            nD(this, 'initialized', !1),
            nD(this, 'connectionAttemptInProgress', !1),
            nD(this, 'relayUrl'),
            nD(this, 'projectId'),
            nD(this, 'packageName'),
            nD(this, 'bundleId'),
            nD(this, 'hasExperiencedNetworkDisruption', !1),
            nD(this, 'pingTimeout'),
            nD(this, 'heartBeatTimeout', (0, T.toMiliseconds)(T.THIRTY_SECONDS + T.FIVE_SECONDS)),
            nD(this, 'reconnectTimeout'),
            nD(this, 'connectPromise'),
            nD(this, 'reconnectInProgress', !1),
            nD(this, 'requestsInFlight', []),
            nD(this, 'connectTimeout', (0, T.toMiliseconds)(15 * T.ONE_SECOND)),
            nD(this, 'request', async (e) => {
              var t, i;
              this.logger.debug('Publishing Request Payload');
              let r = e.id || (0, rN.getBigIntRpcId)().toString();
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
            nD(this, 'resetPingTimeout', () => {
              ei() &&
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
            nD(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            nD(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \uD83D\uDEDC'),
                this.startPingTimeout(),
                this.events.emit(rF.connect);
            }),
            nD(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            nD(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(rF.error, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            nD(this, 'registerProviderListeners', () => {
              this.provider.on(rq.payload, this.onPayloadHandler),
                this.provider.on(rq.connect, this.onConnectHandler),
                this.provider.on(rq.disconnect, this.onDisconnectHandler),
                this.provider.on(rq.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              'u' > typeof e.logger && 'string' != typeof e.logger
                ? (0, a.U5)(e.logger, this.name)
                : (0, a.h6)((0, a.iP)({ level: e.logger || 'error' }))),
            (this.messages = new ns(this.logger, e.core)),
            (this.subscriber = new nU(this, this.logger)),
            (this.publisher = new nf(this, this.logger)),
            (this.relayUrl = e?.relayUrl || rH),
            (this.projectId = e.projectId),
            er() &&
            'u' > typeof i.g &&
            'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
            (null == i.g ? void 0 : i.g.Platform.OS) === 'android'
              ? (this.packageName = eo())
              : er() &&
                'u' > typeof i.g &&
                'u' > typeof (null == i.g ? void 0 : i.g.Platform) &&
                (null == i.g ? void 0 : i.g.Platform.OS) === 'ios' &&
                (this.bundleId = eo()),
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
              { topic: e, message: t, publishedAt: Date.now(), transportType: rG.relay },
              rW.outbound
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
              t.topic === e && (this.subscriber.off(rZ.created, h), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(rZ.created, h);
              }),
              new Promise(async (i, r) => {
                (o =
                  (await this.subscriber
                    .subscribe(e, nj({ internal: { throwOnFailedPublish: n } }, t))
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
            ? await ec(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(() =>
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
          if (!(await rT()))
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
            let e = ed(T.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(rF.message, e), await this.recordMessageEvent(e, rW.inbound);
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
                  this.provider.once(rq.disconnect, i),
                    await ec(
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
                        this.provider.off(rq.disconnect, i), clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let i = () => {
                        t(Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(rq.disconnect, i),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(rq.disconnect, i);
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
            await new Promise((e) => setTimeout(e, (0, T.toMiliseconds)(+t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, i, r, s;
          if (ei())
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
          (this.provider = new rL.F(
            new rR.A(
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
                let l = i.split('?'),
                  c = ea(e, t, r),
                  u = (function (e, t) {
                    let i = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let r = t[e];
                        void 0 !== r && i.set(e, r);
                      }
                    return i.toString();
                  })(l[1] || '', {
                    auth: s,
                    ua: c,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: h || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + '?' + u;
              })({
                sdkVersion: rV,
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
            (0, rN.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s, attestation: n } = t.data,
              o = { topic: i, message: r, publishedAt: s, transportType: rG.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(nj({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else (0, rN.isJsonRpcResponse)(e) && this.events.emit(rF.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, rW.inbound), this.events.emit(rF.message, e));
        }
        async acknowledgePayload(e) {
          let t = (0, rN.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(rq.payload, this.onPayloadHandler),
            this.provider.off(rq.connect, this.onConnectHandler),
            this.provider.off(rq.disconnect, this.onDisconnectHandler),
            this.provider.off(rq.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await rT();
          !(function (e) {
            var t, r;
            switch (en()) {
              case et.browser:
                (t = e),
                  !er() &&
                    es() &&
                    (window.addEventListener('online', () => t(!0)),
                    window.addEventListener('offline', () => t(!1)));
                break;
              case et.reactNative:
                (r = e),
                  er() &&
                    'u' > typeof i.g &&
                    null != i.g &&
                    i.g.NetInfo &&
                    i.g?.NetInfo.addEventListener((e) => r(e?.isConnected));
              case et.node:
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
            this.events.emit(rF.disconnect),
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
                    (0, T.toMiliseconds)(0.1)
                  ))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectPromise) {
              await this.connectPromise;
              return;
            }
            await this.connect();
          }
        }
      }
      function nB() {}
      function nz(e) {
        if (!e || 'object' != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
          '[object Object]' === Object.prototype.toString.call(e)
        );
      }
      function n$(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function nK(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      let nH = '[object Arguments]',
        nF = '[object Object]';
      var nq = Object.defineProperty,
        nV = Object.getOwnPropertySymbols,
        nG = Object.prototype.hasOwnProperty,
        nW = Object.prototype.propertyIsEnumerable,
        nJ = (e, t, i) =>
          t in e
            ? nq(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        nZ = (e, t) => {
          for (var i in t || (t = {})) nG.call(t, i) && nJ(e, i, t[i]);
          if (nV) for (var i of nV(t)) nW.call(t, i) && nJ(e, i, t[i]);
          return e;
        },
        nY = (e, t, i) => nJ(e, 'symbol' != typeof t ? t + '' : t, i);
      class nX extends E {
        constructor(e, t, i, r = rD, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            nY(this, 'map', new Map()),
            nY(this, 'version', '0.3'),
            nY(this, 'cached', []),
            nY(this, 'initialized', !1),
            nY(this, 'getKey'),
            nY(this, 'storagePrefix', rD),
            nY(this, 'recentlyDeleted', []),
            nY(this, 'recentlyDeletedLimit', 200),
            nY(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !rS(e)
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
            nY(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            nY(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            nY(
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
                              let o = nK(i),
                                a = nK(r);
                              if ((o === nH && (o = nF), a === nH && (a = nF), o !== a)) return !1;
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
                                l = s.get(r);
                              if (null != h && null != l) return h === r;
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
                                        l = o.findIndex((t) => e(h, t, void 0, i, r, s, n));
                                      if (-1 === l) return !1;
                                      o.splice(l, 1);
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
                                      ('u' > typeof rC && rC.isBuffer(i) !== rC.isBuffer(r)) ||
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
                                  case nF: {
                                    if (
                                      !(t(i.constructor, r.constructor, s, n) || (nz(i) && nz(r)))
                                    )
                                      return !1;
                                    let o = [...Object.keys(i), ...n$(i)],
                                      a = [...Object.keys(r), ...n$(r)];
                                    if (o.length !== a.length) return !1;
                                    for (let t = 0; t < o.length; t++) {
                                      let a = o[t],
                                        h = i[a];
                                      if (!Object.hasOwn(r, a)) return !1;
                                      let l = r[a];
                                      if (!e(h, l, a, i, r, s, n)) return !1;
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
                          })(r, e[i], void 0, void 0, void 0, void 0, nB)
                        );
                      })
                    )
                  : this.values
              )
            ),
            nY(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let i = nZ(nZ({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            nY(this, 'delete', async (e, t) => {
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
              let { message: t } = r_(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = r_('NO_MATCHING_KEY', `${this.name}: ${e}`);
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
              let { message: e } = r_('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var nQ = Object.defineProperty,
        n0 = (e, t, i) =>
          t in e
            ? nQ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        n1 = (e, t, i) => n0(e, 'symbol' != typeof t ? t + '' : t, i);
      class n5 {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            n1(this, 'name', 'pairing'),
            n1(this, 'version', '0.3'),
            n1(this, 'events', new (s())()),
            n1(this, 'pairings'),
            n1(this, 'initialized', !1),
            n1(this, 'storagePrefix', rD),
            n1(this, 'ignoredPayloadTypes', [1]),
            n1(this, 'registeredMethods', []),
            n1(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            n1(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            n1(this, 'create', async (e) => {
              this.isInitialized();
              let t = i9(),
                i = await this.core.crypto.setSymKey(t),
                r = ed(T.FIVE_MINUTES),
                s = { protocol: 'irn' },
                n = { topic: i, expiry: r, relay: s, active: !1, methods: e?.methods },
                o = rc({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: r,
                  methods: e?.methods,
                });
              return (
                this.events.emit(rX.create, n),
                this.core.expirer.set(i, r),
                await this.pairings.set(i, n),
                await this.core.relayer.subscribe(i, { transportType: e?.transportType }),
                { topic: i, uri: o }
              );
            }),
            n1(this, 'pair', async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [r2.pairing_started] },
              });
              this.isValidPair(e, i);
              let { topic: r, symKey: s, relay: n, expiryTimestamp: o, methods: a } = rl(e.uri);
              if (
                ((i.props.properties.topic = r),
                i.addTrace(r2.pairing_uri_validation_success),
                i.addTrace(r2.pairing_uri_not_expired),
                this.pairings.keys.includes(r))
              ) {
                if (((t = this.pairings.get(r)), i.addTrace(r2.existing_pairing), t.active))
                  throw (
                    (i.setError(r3.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(r2.pairing_not_expired);
              }
              let h = o || ed(T.FIVE_MINUTES),
                l = { topic: r, relay: n, expiry: h, active: !1, methods: a };
              this.core.expirer.set(r, h),
                await this.pairings.set(r, l),
                i.addTrace(r2.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(rX.create, l),
                i.addTrace(r2.emit_inactive_pairing),
                this.core.crypto.keychain.has(r) || (await this.core.crypto.setSymKey(s, r)),
                i.addTrace(r2.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(r3.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (e) {
                throw (i.setError(r3.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(r2.subscribe_pairing_topic_success), l;
            }),
            n1(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = ed(T.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            n1(this, 'ping', async (e) => {
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
                  } = (function (e = T.FIVE_MINUTES, t) {
                    let i, r, s, n;
                    let o = (0, T.toMiliseconds)(e || T.FIVE_MINUTES);
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
                this.events.once(ep('pairing_ping', e), ({ error: e }) => {
                  e ? s(e) : r();
                }),
                  await i();
              }
            }),
            n1(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            n1(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            n1(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            n1(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', rI('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            n1(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: i, expiry: r, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return rc({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: i,
                expiryTimestamp: r,
                methods: s,
              });
            }),
            n1(this, 'sendRequest', async (e, t, i) => {
              let r = (0, rN.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                n = rY[t].req;
              return this.core.history.set(e, r), this.core.relayer.publish(e, s, n), r.id;
            }),
            n1(this, 'sendResult', async (e, t, i) => {
              let r = (0, rN.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = rY[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n), await this.core.history.resolve(r);
            }),
            n1(this, 'sendError', async (e, t, i) => {
              let r = (0, rN.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = (await this.core.history.get(t, e)).request.method,
                o = rY[n] ? rY[n].res : rY.unregistered_method.res;
              await this.core.relayer.publish(t, s, o), await this.core.history.resolve(r);
            }),
            n1(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, rI('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            n1(this, 'cleanup', async () => {
              let e = this.pairings.getAll().filter((e) => eg(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            n1(this, 'onRelayEventRequest', async (e) => {
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
            n1(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return 'wc_pairingPing' === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            n1(this, 'onPairingPingRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(rX.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            n1(this, 'onPairingPingResponse', (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, rN.isJsonRpcResult)(t)
                  ? this.events.emit(ep('pairing_ping', i), {})
                  : (0, rN.isJsonRpcError)(t) &&
                    this.events.emit(ep('pairing_ping', i), { error: t.error });
              }, 500);
            }),
            n1(this, 'onPairingDeleteRequest', async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(rX.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            n1(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = rI('WC_METHOD_UNSUPPORTED', r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            n1(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(rI('WC_METHOD_UNSUPPORTED', e));
            }),
            n1(this, 'isValidPair', (e, t) => {
              var i;
              if (!rA(e)) {
                let { message: i } = r_('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(r3.malformed_pairing_uri), Error(i));
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
                    if (rP(e, !1)) {
                      if (t(e)) return !0;
                      let i = em(e);
                      return t(i);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: i } = r_('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(r3.malformed_pairing_uri), Error(i));
              }
              let r = rl(e?.uri);
              if (!(null != (i = r?.relay) && i.protocol)) {
                let { message: e } = r_('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
                throw (t.setError(r3.malformed_pairing_uri), Error(e));
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = r_('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(r3.malformed_pairing_uri), Error(e));
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, T.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                t.setError(r3.pairing_expired);
                let { message: e } = r_(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw Error(e);
              }
            }),
            n1(this, 'isValidPing', async (e) => {
              if (!rA(e)) {
                let { message: t } = r_('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            n1(this, 'isValidDisconnect', async (e) => {
              if (!rA(e)) {
                let { message: t } = r_('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            n1(this, 'isValidPairingTopic', async (e) => {
              if (!rP(e, !1)) {
                let { message: t } = r_(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = r_('NO_MATCHING_KEY', `pairing topic doesn't exist: ${e}`);
                throw Error(t);
              }
              if (eg(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = r_('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, a.U5)(t, this.name)),
            (this.pairings = new nX(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return (0, a.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(rF.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              this.pairings.keys.includes(t) &&
              r !== rG.link_mode &&
              !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))
            )
              try {
                let e = await this.core.crypto.decode(t, i);
                (0, rN.isJsonRpcRequest)(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : (0, rN.isJsonRpcResponse)(e) &&
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
          this.core.expirer.on(r0.expired, async (e) => {
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
              (await this.deletePairing(t, !0), this.events.emit(rX.expire, { topic: t }));
          });
        }
      }
      var n6 = Object.defineProperty,
        n2 = (e, t, i) =>
          t in e
            ? n6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        n3 = (e, t, i) => n2(e, 'symbol' != typeof t ? t + '' : t, i);
      class n8 extends y {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            n3(this, 'records', new Map()),
            n3(this, 'events', new r.EventEmitter()),
            n3(this, 'name', 'history'),
            n3(this, 'version', '0.3'),
            n3(this, 'cached', []),
            n3(this, 'initialized', !1),
            n3(this, 'storagePrefix', rD),
            n3(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            n3(this, 'set', (e, t, i) => {
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
                expiry: ed(T.THIRTY_DAYS),
              };
              this.records.set(r.id, r), this.persist(), this.events.emit(rQ.created, r);
            }),
            n3(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = (0, rN.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(rQ.updated, t));
            }),
            n3(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            n3(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((i) => {
                  i.topic !== e ||
                    ('u' > typeof t && i.id !== t) ||
                    (this.records.delete(i.id), this.events.emit(rQ.deleted, i));
                }),
                this.persist();
            }),
            n3(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            n3(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            n3(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            n3(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            n3(this, 'removeListener', (e, t) => {
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
                request: (0, rN.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
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
            let { message: t } = r_('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(rQ.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = r_('RESTORE_WILL_OVERRIDE', this.name);
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
          this.events.on(rQ.created, (e) => {
            let t = rQ.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(rQ.updated, (e) => {
              let t = rQ.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(rQ.deleted, (e) => {
              let t = rQ.deleted;
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
              (0, T.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(rQ.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var n4 = Object.defineProperty,
        n9 = (e, t, i) =>
          t in e
            ? n4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        n7 = (e, t, i) => n9(e, 'symbol' != typeof t ? t + '' : t, i);
      class oe extends I {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            n7(this, 'expirations', new Map()),
            n7(this, 'events', new r.EventEmitter()),
            n7(this, 'name', 'expirer'),
            n7(this, 'version', '0.3'),
            n7(this, 'cached', []),
            n7(this, 'initialized', !1),
            n7(this, 'storagePrefix', rD),
            n7(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            n7(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            n7(this, 'set', (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(r0.created, { target: i, expiration: r });
            }),
            n7(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            n7(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(r0.deleted, { target: t, expiration: i });
              }
            }),
            n7(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            n7(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            n7(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            n7(this, 'removeListener', (e, t) => {
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
          if ('string' == typeof e) return eu('topic', e);
          if ('number' == typeof e) return eu('id', e);
          let { message: t } = r_('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(r0.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = r_('RESTORE_WILL_OVERRIDE', this.name);
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
            let { message: t } = r_('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, T.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(r0.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(n.li.pulse, () => this.checkExpirations()),
            this.events.on(r0.created, (e) => {
              let t = r0.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(r0.expired, (e) => {
              let t = r0.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(r0.deleted, (e) => {
              let t = r0.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = r_('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var ot = Object.defineProperty,
        oi = (e, t, i) =>
          t in e
            ? ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        or = (e, t, i) => oi(e, 'symbol' != typeof t ? t + '' : t, i);
      class os extends S {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            or(this, 'name', 'verify-api'),
            or(this, 'abortController'),
            or(this, 'isDevEnv'),
            or(this, 'verifyUrlV3', r5),
            or(this, 'storagePrefix', rD),
            or(this, 'version', 2),
            or(this, 'publicKey'),
            or(this, 'fetchPromise'),
            or(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, T.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            or(this, 'register', async (e) => {
              if (!es() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = (0, R.getDocument)(),
                  t = this.startAbortTimer(5 * T.ONE_SECOND),
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
            or(this, 'resolve', async (e) => {
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
            or(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * T.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(i), 200 === r.status ? await r.json() : void 0;
            }),
            or(this, 'getVerifyUrl', (e) => {
              let t = e || r1;
              return (
                r6.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${r1}`
                  ),
                  (t = r1)),
                t
              );
            }),
            or(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(T.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            or(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            or(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            or(this, 'isValidJwtAttestation', async (e) => {
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
            or(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            or(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            or(this, 'validateAttestation', (e, t) => {
              let i = (function (e, t) {
                  let [i, r, s] = e.split('.'),
                    n = V.from(ri(s), 'base64');
                  if (64 !== n.length) throw Error('Invalid signature length');
                  let o = n.slice(0, 32),
                    a = n.slice(32, 64),
                    h = tF(`${i}.${r}`),
                    l = (function (e) {
                      let t = V.from(e.x, 'base64'),
                        i = V.from(e.y, 'base64');
                      return j([new Uint8Array([4]), t, i]);
                    })(t);
                  if (!i5.verify(j([o, a]), h, l)) throw Error('Invalid signature');
                  return (0, L.Cq)(e).payload;
                })(e, t.publicKey),
                r = { hasExpired: (0, T.toMiliseconds)(i.exp) < Date.now(), payload: i };
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
            (this.isDevEnv = eb()),
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
            setTimeout(() => this.abortController.abort(), (0, T.toMiliseconds)(e))
          );
        }
      }
      var on = Object.defineProperty,
        oo = (e, t, i) =>
          t in e
            ? on(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        oa = (e, t, i) => oo(e, 'symbol' != typeof t ? t + '' : t, i);
      class oh extends P {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            oa(this, 'context', 'echo'),
            oa(this, 'registerDeviceToken', async (e) => {
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
      var ol = Object.defineProperty,
        oc = Object.getOwnPropertySymbols,
        ou = Object.prototype.hasOwnProperty,
        od = Object.prototype.propertyIsEnumerable,
        og = (e, t, i) =>
          t in e
            ? ol(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        op = (e, t) => {
          for (var i in t || (t = {})) ou.call(t, i) && og(e, i, t[i]);
          if (oc) for (var i of oc(t)) od.call(t, i) && og(e, i, t[i]);
          return e;
        },
        of = (e, t, i) => og(e, 'symbol' != typeof t ? t + '' : t, i);
      class oy extends O {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            of(this, 'context', 'event-client'),
            of(this, 'storagePrefix', rD),
            of(this, 'storageVersion', 0.1),
            of(this, 'events', new Map()),
            of(this, 'shouldPersist', !1),
            of(this, 'init', async () => {
              if (!eb())
                try {
                  let e = {
                    eventId: ey(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: ea(this.core.relayer.protocol, this.core.relayer.version, rV),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            of(this, 'createEvent', (e) => {
              let {
                  event: t = 'ERROR',
                  type: i = '',
                  properties: { topic: r, trace: s },
                } = e,
                n = ey(),
                o = this.core.projectId || '',
                a = op(
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
            of(this, 'getEvent', (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let r = Array.from(this.events.values()).find((e) => e.props.properties.topic === i);
              if (r) return op(op({}, r), this.setMethods(r.eventId));
            }),
            of(this, 'deleteEvent', (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            of(this, 'setEventListeners', () => {
              this.core.heartbeat.on(n.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, T.fromMiliseconds)(Date.now()) - (0, T.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            of(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            of(this, 'addTrace', (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            of(this, 'setError', (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            of(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            of(this, 'restore', async () => {
              try {
                let e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, op(op({}, e), this.setMethods(e.eventId)));
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            of(this, 'submit', async () => {
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
            of(this, 'sendEvent', async (e) => {
              let t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${rV}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            of(
              this,
              'getAppDomain',
              () => ((0, C.g)() || { name: '', description: '', url: '', icons: [''] }).url
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
      var ob = Object.defineProperty,
        om = Object.getOwnPropertySymbols,
        ow = Object.prototype.hasOwnProperty,
        ov = Object.prototype.propertyIsEnumerable,
        oE = (e, t, i) =>
          t in e
            ? ob(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
            : (e[t] = i),
        ox = (e, t) => {
          for (var i in t || (t = {})) ow.call(t, i) && oE(e, i, t[i]);
          if (om) for (var i of om(t)) ov.call(t, i) && oE(e, i, t[i]);
          return e;
        },
        o_ = (e, t, i) => oE(e, 'symbol' != typeof t ? t + '' : t, i);
      class oI extends d {
        constructor(e) {
          var t;
          super(e),
            o_(this, 'protocol', 'wc'),
            o_(this, 'version', 2),
            o_(this, 'name', rj),
            o_(this, 'relayUrl'),
            o_(this, 'projectId'),
            o_(this, 'customStoragePrefix'),
            o_(this, 'events', new r.EventEmitter()),
            o_(this, 'logger'),
            o_(this, 'heartbeat'),
            o_(this, 'relayer'),
            o_(this, 'crypto'),
            o_(this, 'storage'),
            o_(this, 'history'),
            o_(this, 'expirer'),
            o_(this, 'pairing'),
            o_(this, 'verify'),
            o_(this, 'echoClient'),
            o_(this, 'linkModeSupportedApps'),
            o_(this, 'eventClient'),
            o_(this, 'initialized', !1),
            o_(this, 'logChunkController'),
            o_(this, 'on', (e, t) => this.events.on(e, t)),
            o_(this, 'once', (e, t) => this.events.once(e, t)),
            o_(this, 'off', (e, t) => this.events.off(e, t)),
            o_(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            o_(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: i }) => {
              if (!e || !t) return;
              let r = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: rG.link_mode,
              };
              this.relayer.onLinkMessageEvent(r, { sessionExists: i });
            });
          let i = this.getGlobalCore(e?.customStoragePrefix);
          if (i)
            try {
              return (
                (this.customStoragePrefix = i.customStoragePrefix),
                (this.logger = i.logger),
                (this.heartbeat = i.heartbeat),
                (this.crypto = i.crypto),
                (this.history = i.history),
                (this.expirer = i.expirer),
                (this.storage = i.storage),
                (this.relayer = i.relayer),
                (this.pairing = i.pairing),
                (this.verify = i.verify),
                (this.echoClient = i.echoClient),
                (this.linkModeSupportedApps = i.linkModeSupportedApps),
                (this.eventClient = i.eventClient),
                (this.initialized = i.initialized),
                (this.logChunkController = i.logChunkController),
                i
              );
            } catch (e) {
              console.warn('Failed to copy global core', e);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || rH),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          let s = (0, a.iP)({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : rM.logger,
              name: rj,
            }),
            { logger: h, chunkLoggerController: l } = (0, a.D5)({
              opts: s,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = l),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
              }),
            (this.logger = (0, a.U5)(h, this.name)),
            (this.heartbeat = new n.VH()),
            (this.crypto = new s5(this, this.logger, e?.keychain)),
            (this.history = new n8(this, this.logger)),
            (this.expirer = new oe(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new o.A(ox(ox({}, rB), e?.storageOptions))),
            (this.relayer = new nM({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new n5(this, this.logger)),
            (this.verify = new os(this, this.logger, this.storage)),
            (this.echoClient = new oh(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new oy(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          let t = new oI(e);
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
            await this.storage.setItem(rJ, this.linkModeSupportedApps));
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
              (this.linkModeSupportedApps = (await this.storage.getItem(rJ)) || []),
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
        getGlobalCore(e = '') {
          try {
            if (this.isGlobalCoreDisabled()) return;
            let t = `_walletConnectCore_${e}`,
              i = `${t}_count`;
            return (
              (globalThis[i] = (globalThis[i] || 0) + 1),
              globalThis[i] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`
                ),
              globalThis[t]
            );
          } catch (e) {
            console.warn('Failed to get global WalletConnect core', e);
            return;
          }
        }
        setGlobalCore(e) {
          var t;
          try {
            if (this.isGlobalCoreDisabled()) return;
            let i = `_walletConnectCore_${(null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ''}`;
            globalThis[i] = e;
          } catch (e) {
            console.warn('Failed to set global WalletConnect core', e);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return 'u' > typeof rk && 'true' === rk.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      let oS = oI;
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
      let r = i(65756);
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
        l = s([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502,
          52590, 14035, 8553,
        ]),
        c = s([
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
          l = 0,
          c = 0,
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
          T = 0,
          U = 0,
          L = 0,
          N = 0,
          R = 0,
          C = 0,
          k = 0,
          j = 0,
          D = i[0],
          M = i[1],
          B = i[2],
          z = i[3],
          $ = i[4],
          K = i[5],
          H = i[6],
          F = i[7],
          q = i[8],
          V = i[9],
          G = i[10],
          W = i[11],
          J = i[12],
          Z = i[13],
          Y = i[14],
          X = i[15];
        (n += (r = t[0]) * D),
          (o += r * M),
          (a += r * B),
          (h += r * z),
          (l += r * $),
          (c += r * K),
          (u += r * H),
          (d += r * F),
          (g += r * q),
          (p += r * V),
          (f += r * G),
          (y += r * W),
          (b += r * J),
          (m += r * Z),
          (w += r * Y),
          (E += r * X),
          (o += (r = t[1]) * D),
          (a += r * M),
          (h += r * B),
          (l += r * z),
          (c += r * $),
          (u += r * K),
          (d += r * H),
          (g += r * F),
          (p += r * q),
          (f += r * V),
          (y += r * G),
          (b += r * W),
          (m += r * J),
          (w += r * Z),
          (E += r * Y),
          (x += r * X),
          (a += (r = t[2]) * D),
          (h += r * M),
          (l += r * B),
          (c += r * z),
          (u += r * $),
          (d += r * K),
          (g += r * H),
          (p += r * F),
          (f += r * q),
          (y += r * V),
          (b += r * G),
          (m += r * W),
          (w += r * J),
          (E += r * Z),
          (x += r * Y),
          (_ += r * X),
          (h += (r = t[3]) * D),
          (l += r * M),
          (c += r * B),
          (u += r * z),
          (d += r * $),
          (g += r * K),
          (p += r * H),
          (f += r * F),
          (y += r * q),
          (b += r * V),
          (m += r * G),
          (w += r * W),
          (E += r * J),
          (x += r * Z),
          (_ += r * Y),
          (I += r * X),
          (l += (r = t[4]) * D),
          (c += r * M),
          (u += r * B),
          (d += r * z),
          (g += r * $),
          (p += r * K),
          (f += r * H),
          (y += r * F),
          (b += r * q),
          (m += r * V),
          (w += r * G),
          (E += r * W),
          (x += r * J),
          (_ += r * Z),
          (I += r * Y),
          (S += r * X),
          (c += (r = t[5]) * D),
          (u += r * M),
          (d += r * B),
          (g += r * z),
          (p += r * $),
          (f += r * K),
          (y += r * H),
          (b += r * F),
          (m += r * q),
          (w += r * V),
          (E += r * G),
          (x += r * W),
          (_ += r * J),
          (I += r * Z),
          (S += r * Y),
          (P += r * X),
          (u += (r = t[6]) * D),
          (d += r * M),
          (g += r * B),
          (p += r * z),
          (f += r * $),
          (y += r * K),
          (b += r * H),
          (m += r * F),
          (w += r * q),
          (E += r * V),
          (x += r * G),
          (_ += r * W),
          (I += r * J),
          (S += r * Z),
          (P += r * Y),
          (O += r * X),
          (d += (r = t[7]) * D),
          (g += r * M),
          (p += r * B),
          (f += r * z),
          (y += r * $),
          (b += r * K),
          (m += r * H),
          (w += r * F),
          (E += r * q),
          (x += r * V),
          (_ += r * G),
          (I += r * W),
          (S += r * J),
          (P += r * Z),
          (O += r * Y),
          (A += r * X),
          (g += (r = t[8]) * D),
          (p += r * M),
          (f += r * B),
          (y += r * z),
          (b += r * $),
          (m += r * K),
          (w += r * H),
          (E += r * F),
          (x += r * q),
          (_ += r * V),
          (I += r * G),
          (S += r * W),
          (P += r * J),
          (O += r * Z),
          (A += r * Y),
          (T += r * X),
          (p += (r = t[9]) * D),
          (f += r * M),
          (y += r * B),
          (b += r * z),
          (m += r * $),
          (w += r * K),
          (E += r * H),
          (x += r * F),
          (_ += r * q),
          (I += r * V),
          (S += r * G),
          (P += r * W),
          (O += r * J),
          (A += r * Z),
          (T += r * Y),
          (U += r * X),
          (f += (r = t[10]) * D),
          (y += r * M),
          (b += r * B),
          (m += r * z),
          (w += r * $),
          (E += r * K),
          (x += r * H),
          (_ += r * F),
          (I += r * q),
          (S += r * V),
          (P += r * G),
          (O += r * W),
          (A += r * J),
          (T += r * Z),
          (U += r * Y),
          (L += r * X),
          (y += (r = t[11]) * D),
          (b += r * M),
          (m += r * B),
          (w += r * z),
          (E += r * $),
          (x += r * K),
          (_ += r * H),
          (I += r * F),
          (S += r * q),
          (P += r * V),
          (O += r * G),
          (A += r * W),
          (T += r * J),
          (U += r * Z),
          (L += r * Y),
          (N += r * X),
          (b += (r = t[12]) * D),
          (m += r * M),
          (w += r * B),
          (E += r * z),
          (x += r * $),
          (_ += r * K),
          (I += r * H),
          (S += r * F),
          (P += r * q),
          (O += r * V),
          (A += r * G),
          (T += r * W),
          (U += r * J),
          (L += r * Z),
          (N += r * Y),
          (R += r * X),
          (m += (r = t[13]) * D),
          (w += r * M),
          (E += r * B),
          (x += r * z),
          (_ += r * $),
          (I += r * K),
          (S += r * H),
          (P += r * F),
          (O += r * q),
          (A += r * V),
          (T += r * G),
          (U += r * W),
          (L += r * J),
          (N += r * Z),
          (R += r * Y),
          (C += r * X),
          (w += (r = t[14]) * D),
          (E += r * M),
          (x += r * B),
          (_ += r * z),
          (I += r * $),
          (S += r * K),
          (P += r * H),
          (O += r * F),
          (A += r * q),
          (T += r * V),
          (U += r * G),
          (L += r * W),
          (N += r * J),
          (R += r * Z),
          (C += r * Y),
          (k += r * X),
          (E += (r = t[15]) * D),
          (x += r * M),
          (_ += r * B),
          (I += r * z),
          (S += r * $),
          (P += r * K),
          (O += r * H),
          (A += r * F),
          (T += r * q),
          (U += r * V),
          (L += r * G),
          (N += r * W),
          (R += r * J),
          (C += r * Z),
          (k += r * Y),
          (j += r * X),
          (n += 38 * x),
          (o += 38 * _),
          (a += 38 * I),
          (h += 38 * S),
          (l += 38 * P),
          (c += 38 * O),
          (u += 38 * A),
          (d += 38 * T),
          (g += 38 * U),
          (p += 38 * L),
          (f += 38 * N),
          (y += 38 * R),
          (b += 38 * C),
          (m += 38 * k),
          (w += 38 * j),
          (s = Math.floor((r = n + (s = 1) + 65535) / 65536)),
          (n = r - 65536 * s),
          (s = Math.floor((r = o + s + 65535) / 65536)),
          (o = r - 65536 * s),
          (s = Math.floor((r = a + s + 65535) / 65536)),
          (a = r - 65536 * s),
          (s = Math.floor((r = h + s + 65535) / 65536)),
          (h = r - 65536 * s),
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
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
          (s = Math.floor((r = l + s + 65535) / 65536)),
          (l = r - 65536 * s),
          (s = Math.floor((r = c + s + 65535) / 65536)),
          (c = r - 65536 * s),
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
          (e[4] = l),
          (e[5] = c),
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
          l = s(),
          c = s(),
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
          w(l, o, n),
          m(c, o, n),
          m(u, r, i),
          E(e[0], a, l),
          E(e[1], u, c),
          E(e[2], c, l),
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
          var l = t.length + this.tagLength;
          if (s) {
            if (s.length !== l) throw Error('ChaCha20Poly1305: incorrect destination length');
            o = s;
          } else o = new Uint8Array(l);
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
            var l = new Uint8Array(32);
            r.stream(this._key, h, l, 4);
            var c = new Uint8Array(this.tagLength);
            if (
              (this._authenticate(c, l, t.subarray(0, t.length - this.tagLength), i),
              !a.equal(c, t.subarray(t.length - this.tagLength, t.length)))
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
            var l = new Uint8Array(8);
            r && o.writeUint64LE(r.length, l),
              a.update(l),
              o.writeUint64LE(i.length, l),
              a.update(l);
            for (var c = a.digest(), u = 0; u < c.length; u++) e[u] = c[u];
            a.clean(), n.wipe(c), n.wipe(l);
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
          l = i.length,
          c = 256 - (256 % l);
        for (; e > 0; ) {
          let t = o(Math.ceil((256 * e) / c), r);
          for (let r = 0; r < t.length && e > 0; r++) {
            let n = t[r];
            n < c && ((s += i.charAt(n % l)), e--);
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
//# sourceMappingURL=9294.12bd640595cfc4cc.js.map
