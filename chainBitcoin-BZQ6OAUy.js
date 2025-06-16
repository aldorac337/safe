import { B as A, a0 as an, a4 as Nh } from './metaplex-81r3lICz.js';
import { r as Hh } from './chainEthereum-DlaaxYpw.js';
function Lh(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in t)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(t, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
}
var Ne = {};
Object.defineProperty(Ne, '__esModule', { value: !0 });
Ne.bech32m = Fh = Ne.bech32 = void 0;
const Eo = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l',
  qu = {};
for (let t = 0; t < Eo.length; t++) {
  const e = Eo.charAt(t);
  qu[e] = t;
}
function Qn(t) {
  const e = t >> 25;
  return (
    ((t & 33554431) << 5) ^
    (-((e >> 0) & 1) & 996825010) ^
    (-((e >> 1) & 1) & 642813549) ^
    (-((e >> 2) & 1) & 513874426) ^
    (-((e >> 3) & 1) & 1027748829) ^
    (-((e >> 4) & 1) & 705979059)
  );
}
function xc(t) {
  let e = 1;
  for (let n = 0; n < t.length; ++n) {
    const r = t.charCodeAt(n);
    if (r < 33 || r > 126) return 'Invalid prefix (' + t + ')';
    e = Qn(e) ^ (r >> 5);
  }
  e = Qn(e);
  for (let n = 0; n < t.length; ++n) {
    const r = t.charCodeAt(n);
    e = Qn(e) ^ (r & 31);
  }
  return e;
}
function Us(t, e, n, r) {
  let o = 0,
    i = 0;
  const s = (1 << n) - 1,
    c = [];
  for (let u = 0; u < t.length; ++u)
    for (o = (o << e) | t[u], i += e; i >= n; ) (i -= n), c.push((o >> i) & s);
  if (r) i > 0 && c.push((o << (n - i)) & s);
  else {
    if (i >= e) return 'Excess padding';
    if ((o << (n - i)) & s) return 'Non-zero padding';
  }
  return c;
}
function Ch(t) {
  return Us(t, 8, 5, !0);
}
function $h(t) {
  const e = Us(t, 5, 8, !1);
  if (Array.isArray(e)) return e;
}
function Rh(t) {
  const e = Us(t, 5, 8, !1);
  if (Array.isArray(e)) return e;
  throw new Error(e);
}
function zu(t) {
  let e;
  t === 'bech32' ? (e = 1) : (e = 734539939);
  function n(s, c, u) {
    if (((u = u || 90), s.length + 7 + c.length > u)) throw new TypeError('Exceeds length limit');
    s = s.toLowerCase();
    let f = xc(s);
    if (typeof f == 'string') throw new Error(f);
    let h = s + '1';
    for (let a = 0; a < c.length; ++a) {
      const d = c[a];
      if (d >> 5) throw new Error('Non 5-bit word');
      (f = Qn(f) ^ d), (h += Eo.charAt(d));
    }
    for (let a = 0; a < 6; ++a) f = Qn(f);
    f ^= e;
    for (let a = 0; a < 6; ++a) {
      const d = (f >> ((5 - a) * 5)) & 31;
      h += Eo.charAt(d);
    }
    return h;
  }
  function r(s, c) {
    if (((c = c || 90), s.length < 8)) return s + ' too short';
    if (s.length > c) return 'Exceeds length limit';
    const u = s.toLowerCase(),
      f = s.toUpperCase();
    if (s !== u && s !== f) return 'Mixed-case string ' + s;
    s = u;
    const h = s.lastIndexOf('1');
    if (h === -1) return 'No separator character for ' + s;
    if (h === 0) return 'Missing prefix for ' + s;
    const a = s.slice(0, h),
      d = s.slice(h + 1);
    if (d.length < 6) return 'Data too short';
    let l = xc(a);
    if (typeof l == 'string') return l;
    const g = [];
    for (let p = 0; p < d.length; ++p) {
      const b = d.charAt(p),
        m = qu[b];
      if (m === void 0) return 'Unknown character ' + b;
      (l = Qn(l) ^ m), !(p + 6 >= d.length) && g.push(m);
    }
    return l !== e ? 'Invalid checksum for ' + s : { prefix: a, words: g };
  }
  function o(s, c) {
    const u = r(s, c);
    if (typeof u == 'object') return u;
  }
  function i(s, c) {
    const u = r(s, c);
    if (typeof u == 'object') return u;
    throw new Error(u);
  }
  return { decodeUnsafe: o, decode: i, encode: n, toWords: Ch, fromWordsUnsafe: $h, fromWords: Rh };
}
var Fh = (Ne.bech32 = zu('bech32'));
Ne.bech32m = zu('bech32m');
var rr = {},
  jo = {},
  Bt = {};
Object.defineProperty(Bt, '__esModule', { value: !0 });
Bt.output = Bt.exists = Bt.hash = Bt.bytes = Bt.bool = Bt.number = void 0;
function mo(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
Bt.number = mo;
function Xu(t) {
  if (typeof t != 'boolean') throw new Error(`Expected boolean, not ${t}`);
}
Bt.bool = Xu;
function Ns(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
Bt.bytes = Ns;
function Yu(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  mo(t.outputLen), mo(t.blockLen);
}
Bt.hash = Yu;
function Zu(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
Bt.exists = Zu;
function Qu(t, e) {
  Ns(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
Bt.output = Qu;
const Kh = { number: mo, bool: Xu, bytes: Ns, hash: Yu, exists: Zu, output: Qu };
Bt.default = Kh;
var Hs = {},
  Go = {};
Object.defineProperty(Go, '__esModule', { value: !0 });
Go.crypto = void 0;
Go.crypto = {
  node: void 0,
  web: typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0,
};
(function (t) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
    t,
    '__esModule',
    { value: !0 }
  ),
    (t.randomBytes =
      t.wrapConstructorWithOpts =
      t.wrapConstructor =
      t.checkOpts =
      t.Hash =
      t.concatBytes =
      t.toBytes =
      t.utf8ToBytes =
      t.asyncLoop =
      t.nextTick =
      t.hexToBytes =
      t.bytesToHex =
      t.isLE =
      t.rotr =
      t.createView =
      t.u32 =
      t.u8 =
        void 0);
  const e = Go,
    n = (w) => new Uint8Array(w.buffer, w.byteOffset, w.byteLength);
  t.u8 = n;
  const r = (w) => new Uint32Array(w.buffer, w.byteOffset, Math.floor(w.byteLength / 4));
  t.u32 = r;
  const o = (w) => new DataView(w.buffer, w.byteOffset, w.byteLength);
  t.createView = o;
  const i = (w, E) => (w << (32 - E)) | (w >>> E);
  if (
    ((t.rotr = i),
    (t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68),
    !t.isLE)
  )
    throw new Error('Non little-endian hardware is not supported');
  const s = Array.from({ length: 256 }, (w, E) => E.toString(16).padStart(2, '0'));
  function c(w) {
    if (!(w instanceof Uint8Array)) throw new Error('Uint8Array expected');
    let E = '';
    for (let y = 0; y < w.length; y++) E += s[w[y]];
    return E;
  }
  t.bytesToHex = c;
  function u(w) {
    if (typeof w != 'string') throw new TypeError('hexToBytes: expected string, got ' + typeof w);
    if (w.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
    const E = new Uint8Array(w.length / 2);
    for (let y = 0; y < E.length; y++) {
      const S = y * 2,
        v = w.slice(S, S + 2),
        T = Number.parseInt(v, 16);
      if (Number.isNaN(T) || T < 0) throw new Error('Invalid byte sequence');
      E[y] = T;
    }
    return E;
  }
  t.hexToBytes = u;
  const f = async () => {};
  t.nextTick = f;
  async function h(w, E, y) {
    let S = Date.now();
    for (let v = 0; v < w; v++) {
      y(v);
      const T = Date.now() - S;
      (T >= 0 && T < E) || (await (0, t.nextTick)(), (S += T));
    }
  }
  t.asyncLoop = h;
  function a(w) {
    if (typeof w != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof w}`);
    return new TextEncoder().encode(w);
  }
  t.utf8ToBytes = a;
  function d(w) {
    if ((typeof w == 'string' && (w = a(w)), !(w instanceof Uint8Array)))
      throw new TypeError(`Expected input type is Uint8Array (got ${typeof w})`);
    return w;
  }
  t.toBytes = d;
  function l(...w) {
    if (!w.every((S) => S instanceof Uint8Array)) throw new Error('Uint8Array list expected');
    if (w.length === 1) return w[0];
    const E = w.reduce((S, v) => S + v.length, 0),
      y = new Uint8Array(E);
    for (let S = 0, v = 0; S < w.length; S++) {
      const T = w[S];
      y.set(T, v), (v += T.length);
    }
    return y;
  }
  t.concatBytes = l;
  class g {
    clone() {
      return this._cloneInto();
    }
  }
  t.Hash = g;
  const p = (w) =>
    Object.prototype.toString.call(w) === '[object Object]' && w.constructor === Object;
  function b(w, E) {
    if (E !== void 0 && (typeof E != 'object' || !p(E)))
      throw new TypeError('Options should be object or undefined');
    return Object.assign(w, E);
  }
  t.checkOpts = b;
  function m(w) {
    const E = (S) => w().update(d(S)).digest(),
      y = w();
    return (E.outputLen = y.outputLen), (E.blockLen = y.blockLen), (E.create = () => w()), E;
  }
  t.wrapConstructor = m;
  function I(w) {
    const E = (S, v) => w(v).update(d(S)).digest(),
      y = w({});
    return (E.outputLen = y.outputLen), (E.blockLen = y.blockLen), (E.create = (S) => w(S)), E;
  }
  t.wrapConstructorWithOpts = I;
  function _(w = 32) {
    if (e.crypto.web) return e.crypto.web.getRandomValues(new Uint8Array(w));
    if (e.crypto.node) return new Uint8Array(e.crypto.node.randomBytes(w).buffer);
    throw new Error("The environment doesn't have randomBytes function");
  }
  t.randomBytes = _;
})(Hs);
Object.defineProperty(jo, '__esModule', { value: !0 });
jo.SHA2 = void 0;
const xi = Bt,
  gr = Hs;
function Mh(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const o = BigInt(32),
    i = BigInt(4294967295),
    s = Number((n >> o) & i),
    c = Number(n & i),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
let Wh = class extends gr.Hash {
  constructor(e, n, r, o) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = o),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = (0, gr.createView)(this.buffer));
  }
  update(e) {
    xi.default.exists(this);
    const { view: n, buffer: r, blockLen: o } = this;
    e = (0, gr.toBytes)(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const c = Math.min(o - this.pos, i - s);
      if (c === o) {
        const u = (0, gr.createView)(e);
        for (; o <= i - s; s += o) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === o && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    xi.default.exists(this), xi.default.output(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: o, isLE: i } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > o - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < o; a++) n[a] = 0;
    Mh(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const c = (0, gr.createView)(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], i);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: c } = this;
    return (
      (e.length = o), (e.pos = c), (e.finished = i), (e.destroyed = s), o % n && e.buffer.set(r), e
    );
  }
};
jo.SHA2 = Wh;
Object.defineProperty(rr, '__esModule', { value: !0 });
rr.sha224 = rr.sha256 = void 0;
const Dh = jo,
  zt = Hs,
  Vh = (t, e, n) => (t & e) ^ (~t & n),
  jh = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  Gh = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Re = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Fe = new Uint32Array(64);
let Ju = class extends Dh.SHA2 {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = Re[0] | 0),
        (this.B = Re[1] | 0),
        (this.C = Re[2] | 0),
        (this.D = Re[3] | 0),
        (this.E = Re[4] | 0),
        (this.F = Re[5] | 0),
        (this.G = Re[6] | 0),
        (this.H = Re[7] | 0);
    }
    get() {
      const { A: e, B: n, C: r, D: o, E: i, F: s, G: c, H: u } = this;
      return [e, n, r, o, i, s, c, u];
    }
    set(e, n, r, o, i, s, c, u) {
      (this.A = e | 0),
        (this.B = n | 0),
        (this.C = r | 0),
        (this.D = o | 0),
        (this.E = i | 0),
        (this.F = s | 0),
        (this.G = c | 0),
        (this.H = u | 0);
    }
    process(e, n) {
      for (let a = 0; a < 16; a++, n += 4) Fe[a] = e.getUint32(n, !1);
      for (let a = 16; a < 64; a++) {
        const d = Fe[a - 15],
          l = Fe[a - 2],
          g = (0, zt.rotr)(d, 7) ^ (0, zt.rotr)(d, 18) ^ (d >>> 3),
          p = (0, zt.rotr)(l, 17) ^ (0, zt.rotr)(l, 19) ^ (l >>> 10);
        Fe[a] = (p + Fe[a - 7] + g + Fe[a - 16]) | 0;
      }
      let { A: r, B: o, C: i, D: s, E: c, F: u, G: f, H: h } = this;
      for (let a = 0; a < 64; a++) {
        const d = (0, zt.rotr)(c, 6) ^ (0, zt.rotr)(c, 11) ^ (0, zt.rotr)(c, 25),
          l = (h + d + Vh(c, u, f) + Gh[a] + Fe[a]) | 0,
          p = (((0, zt.rotr)(r, 2) ^ (0, zt.rotr)(r, 13) ^ (0, zt.rotr)(r, 22)) + jh(r, o, i)) | 0;
        (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = i), (i = o), (o = r), (r = (l + p) | 0);
      }
      (r = (r + this.A) | 0),
        (o = (o + this.B) | 0),
        (i = (i + this.C) | 0),
        (s = (s + this.D) | 0),
        (c = (c + this.E) | 0),
        (u = (u + this.F) | 0),
        (f = (f + this.G) | 0),
        (h = (h + this.H) | 0),
        this.set(r, o, i, s, c, u, f, h);
    }
    roundClean() {
      Fe.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  },
  qh = class extends Ju {
    constructor() {
      super(),
        (this.A = -1056596264),
        (this.B = 914150663),
        (this.C = 812702999),
        (this.D = -150054599),
        (this.E = -4191439),
        (this.F = 1750603025),
        (this.G = 1694076839),
        (this.H = -1090891868),
        (this.outputLen = 28);
    }
  };
rr.sha256 = (0, zt.wrapConstructor)(() => new Ju());
rr.sha224 = (0, zt.wrapConstructor)(() => new qh());
function zh(t) {
  if (t.length >= 255) throw new TypeError('Alphabet too long');
  for (var e = new Uint8Array(256), n = 0; n < e.length; n++) e[n] = 255;
  for (var r = 0; r < t.length; r++) {
    var o = t.charAt(r),
      i = o.charCodeAt(0);
    if (e[i] !== 255) throw new TypeError(o + ' is ambiguous');
    e[i] = r;
  }
  var s = t.length,
    c = t.charAt(0),
    u = Math.log(s) / Math.log(256),
    f = Math.log(256) / Math.log(s);
  function h(l) {
    if (
      (l instanceof Uint8Array ||
        (ArrayBuffer.isView(l)
          ? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
          : Array.isArray(l) && (l = Uint8Array.from(l))),
      !(l instanceof Uint8Array))
    )
      throw new TypeError('Expected Uint8Array');
    if (l.length === 0) return '';
    for (var g = 0, p = 0, b = 0, m = l.length; b !== m && l[b] === 0; ) b++, g++;
    for (var I = ((m - b) * f + 1) >>> 0, _ = new Uint8Array(I); b !== m; ) {
      for (var w = l[b], E = 0, y = I - 1; (w !== 0 || E < p) && y !== -1; y--, E++)
        (w += (256 * _[y]) >>> 0), (_[y] = w % s >>> 0), (w = (w / s) >>> 0);
      if (w !== 0) throw new Error('Non-zero carry');
      (p = E), b++;
    }
    for (var S = I - p; S !== I && _[S] === 0; ) S++;
    for (var v = c.repeat(g); S < I; ++S) v += t.charAt(_[S]);
    return v;
  }
  function a(l) {
    if (typeof l != 'string') throw new TypeError('Expected String');
    if (l.length === 0) return new Uint8Array();
    for (var g = 0, p = 0, b = 0; l[g] === c; ) p++, g++;
    for (var m = ((l.length - g) * u + 1) >>> 0, I = new Uint8Array(m); l[g]; ) {
      var _ = e[l.charCodeAt(g)];
      if (_ === 255) return;
      for (var w = 0, E = m - 1; (_ !== 0 || w < b) && E !== -1; E--, w++)
        (_ += (s * I[E]) >>> 0), (I[E] = _ % 256 >>> 0), (_ = (_ / 256) >>> 0);
      if (_ !== 0) throw new Error('Non-zero carry');
      (b = w), g++;
    }
    for (var y = m - b; y !== m && I[y] === 0; ) y++;
    for (var S = new Uint8Array(p + (m - y)), v = p; y !== m; ) S[v++] = I[y++];
    return S;
  }
  function d(l) {
    var g = a(l);
    if (g) return g;
    throw new Error('Non-base' + s + ' character');
  }
  return { encode: h, decodeUnsafe: a, decode: d };
}
var Xh = zh;
const Yh = Xh,
  Zh = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var Qh = Yh(Zh),
  Oi = Qh,
  Jh = function (t) {
    function e(i) {
      var s = Uint8Array.from(i),
        c = t(s),
        u = s.length + 4,
        f = new Uint8Array(u);
      return f.set(s, 0), f.set(c.subarray(0, 4), s.length), Oi.encode(f, u);
    }
    function n(i) {
      var s = i.slice(0, -4),
        c = i.slice(-4),
        u = t(s);
      if (!((c[0] ^ u[0]) | (c[1] ^ u[1]) | (c[2] ^ u[2]) | (c[3] ^ u[3]))) return s;
    }
    function r(i) {
      var s = Oi.decodeUnsafe(i);
      if (s) return n(s);
    }
    function o(i) {
      var s = Oi.decode(i),
        c = n(s);
      if (!c) throw new Error('Invalid checksum');
      return c;
    }
    return { encode: e, decode: o, decodeUnsafe: r };
  },
  { sha256: Oc } = rr,
  tl = Jh;
function el(t) {
  return Oc(Oc(t));
}
var Ls = tl(el),
  et = {},
  ta = {},
  It = {};
Object.defineProperty(It, '__esModule', { value: !0 });
It.output = It.exists = It.hash = It.bytes = It.bool = It.number = void 0;
function So(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
It.number = So;
function ea(t) {
  if (typeof t != 'boolean') throw new Error(`Expected boolean, not ${t}`);
}
It.bool = ea;
function Cs(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
It.bytes = Cs;
function na(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  So(t.outputLen), So(t.blockLen);
}
It.hash = na;
function ra(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
It.exists = ra;
function oa(t, e) {
  Cs(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
It.output = oa;
const nl = { number: So, bool: ea, bytes: Cs, hash: na, exists: ra, output: oa };
It.default = nl;
var qo = {},
  zo = {};
Object.defineProperty(zo, '__esModule', { value: !0 });
zo.crypto = void 0;
zo.crypto = typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;
(function (t) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
    t,
    '__esModule',
    { value: !0 }
  ),
    (t.randomBytes =
      t.wrapXOFConstructorWithOpts =
      t.wrapConstructorWithOpts =
      t.wrapConstructor =
      t.checkOpts =
      t.Hash =
      t.concatBytes =
      t.toBytes =
      t.utf8ToBytes =
      t.asyncLoop =
      t.nextTick =
      t.hexToBytes =
      t.bytesToHex =
      t.isLE =
      t.rotr =
      t.createView =
      t.u32 =
      t.u8 =
        void 0);
  const e = zo,
    n = (y) => y instanceof Uint8Array,
    r = (y) => new Uint8Array(y.buffer, y.byteOffset, y.byteLength);
  t.u8 = r;
  const o = (y) => new Uint32Array(y.buffer, y.byteOffset, Math.floor(y.byteLength / 4));
  t.u32 = o;
  const i = (y) => new DataView(y.buffer, y.byteOffset, y.byteLength);
  t.createView = i;
  const s = (y, S) => (y << (32 - S)) | (y >>> S);
  if (
    ((t.rotr = s),
    (t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68),
    !t.isLE)
  )
    throw new Error('Non little-endian hardware is not supported');
  const c = Array.from({ length: 256 }, (y, S) => S.toString(16).padStart(2, '0'));
  function u(y) {
    if (!n(y)) throw new Error('Uint8Array expected');
    let S = '';
    for (let v = 0; v < y.length; v++) S += c[y[v]];
    return S;
  }
  t.bytesToHex = u;
  function f(y) {
    if (typeof y != 'string') throw new Error('hex string expected, got ' + typeof y);
    const S = y.length;
    if (S % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + S);
    const v = new Uint8Array(S / 2);
    for (let T = 0; T < v.length; T++) {
      const P = T * 2,
        O = y.slice(P, P + 2),
        L = Number.parseInt(O, 16);
      if (Number.isNaN(L) || L < 0) throw new Error('Invalid byte sequence');
      v[T] = L;
    }
    return v;
  }
  t.hexToBytes = f;
  const h = async () => {};
  t.nextTick = h;
  async function a(y, S, v) {
    let T = Date.now();
    for (let P = 0; P < y; P++) {
      v(P);
      const O = Date.now() - T;
      (O >= 0 && O < S) || (await (0, t.nextTick)(), (T += O));
    }
  }
  t.asyncLoop = a;
  function d(y) {
    if (typeof y != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof y}`);
    return new Uint8Array(new TextEncoder().encode(y));
  }
  t.utf8ToBytes = d;
  function l(y) {
    if ((typeof y == 'string' && (y = d(y)), !n(y)))
      throw new Error(`expected Uint8Array, got ${typeof y}`);
    return y;
  }
  t.toBytes = l;
  function g(...y) {
    const S = new Uint8Array(y.reduce((T, P) => T + P.length, 0));
    let v = 0;
    return (
      y.forEach((T) => {
        if (!n(T)) throw new Error('Uint8Array expected');
        S.set(T, v), (v += T.length);
      }),
      S
    );
  }
  t.concatBytes = g;
  class p {
    clone() {
      return this._cloneInto();
    }
  }
  t.Hash = p;
  const b = (y) =>
    Object.prototype.toString.call(y) === '[object Object]' && y.constructor === Object;
  function m(y, S) {
    if (S !== void 0 && (typeof S != 'object' || !b(S)))
      throw new Error('Options should be object or undefined');
    return Object.assign(y, S);
  }
  t.checkOpts = m;
  function I(y) {
    const S = (T) => y().update(l(T)).digest(),
      v = y();
    return (S.outputLen = v.outputLen), (S.blockLen = v.blockLen), (S.create = () => y()), S;
  }
  t.wrapConstructor = I;
  function _(y) {
    const S = (T, P) => y(P).update(l(T)).digest(),
      v = y({});
    return (S.outputLen = v.outputLen), (S.blockLen = v.blockLen), (S.create = (T) => y(T)), S;
  }
  t.wrapConstructorWithOpts = _;
  function w(y) {
    const S = (T, P) => y(P).update(l(T)).digest(),
      v = y({});
    return (S.outputLen = v.outputLen), (S.blockLen = v.blockLen), (S.create = (T) => y(T)), S;
  }
  t.wrapXOFConstructorWithOpts = w;
  function E(y = 32) {
    if (e.crypto && typeof e.crypto.getRandomValues == 'function')
      return e.crypto.getRandomValues(new Uint8Array(y));
    throw new Error('crypto.getRandomValues must be defined');
  }
  t.randomBytes = E;
})(qo);
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.hmac = t.HMAC = void 0);
  const e = It,
    n = qo;
  class r extends n.Hash {
    constructor(s, c) {
      super(), (this.finished = !1), (this.destroyed = !1), e.default.hash(s);
      const u = (0, n.toBytes)(c);
      if (((this.iHash = s.create()), typeof this.iHash.update != 'function'))
        throw new Error('Expected instance of class which extends utils.Hash');
      (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
      const f = this.blockLen,
        h = new Uint8Array(f);
      h.set(u.length > f ? s.create().update(u).digest() : u);
      for (let a = 0; a < h.length; a++) h[a] ^= 54;
      this.iHash.update(h), (this.oHash = s.create());
      for (let a = 0; a < h.length; a++) h[a] ^= 106;
      this.oHash.update(h), h.fill(0);
    }
    update(s) {
      return e.default.exists(this), this.iHash.update(s), this;
    }
    digestInto(s) {
      e.default.exists(this),
        e.default.bytes(s, this.outputLen),
        (this.finished = !0),
        this.iHash.digestInto(s),
        this.oHash.update(s),
        this.oHash.digestInto(s),
        this.destroy();
    }
    digest() {
      const s = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(s), s;
    }
    _cloneInto(s) {
      s || (s = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: c, iHash: u, finished: f, destroyed: h, blockLen: a, outputLen: d } = this;
      return (
        (s = s),
        (s.finished = f),
        (s.destroyed = h),
        (s.blockLen = a),
        (s.outputLen = d),
        (s.oHash = c._cloneInto(s.oHash)),
        (s.iHash = u._cloneInto(s.iHash)),
        s
      );
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  }
  t.HMAC = r;
  const o = (i, s, c) => new r(i, s).update(c).digest();
  (t.hmac = o), (t.hmac.create = (i, s) => new r(i, s));
})(ta);
var or = {},
  Xo = {};
Object.defineProperty(Xo, '__esModule', { value: !0 });
Xo.SHA2 = void 0;
const Bi = It,
  br = qo;
function rl(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const o = BigInt(32),
    i = BigInt(4294967295),
    s = Number((n >> o) & i),
    c = Number(n & i),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
let ol = class extends br.Hash {
  constructor(e, n, r, o) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = o),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = (0, br.createView)(this.buffer));
  }
  update(e) {
    Bi.default.exists(this);
    const { view: n, buffer: r, blockLen: o } = this;
    e = (0, br.toBytes)(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const c = Math.min(o - this.pos, i - s);
      if (c === o) {
        const u = (0, br.createView)(e);
        for (; o <= i - s; s += o) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === o && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    Bi.default.exists(this), Bi.default.output(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: o, isLE: i } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > o - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < o; a++) n[a] = 0;
    rl(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const c = (0, br.createView)(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], i);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: c } = this;
    return (
      (e.length = o), (e.pos = c), (e.finished = i), (e.destroyed = s), o % n && e.buffer.set(r), e
    );
  }
};
Xo.SHA2 = ol;
Object.defineProperty(or, '__esModule', { value: !0 });
or.sha224 = or.sha256 = void 0;
const il = Xo,
  Xt = qo,
  sl = (t, e, n) => (t & e) ^ (~t & n),
  cl = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  ul = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Ke = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Me = new Uint32Array(64);
let ia = class extends il.SHA2 {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = Ke[0] | 0),
        (this.B = Ke[1] | 0),
        (this.C = Ke[2] | 0),
        (this.D = Ke[3] | 0),
        (this.E = Ke[4] | 0),
        (this.F = Ke[5] | 0),
        (this.G = Ke[6] | 0),
        (this.H = Ke[7] | 0);
    }
    get() {
      const { A: e, B: n, C: r, D: o, E: i, F: s, G: c, H: u } = this;
      return [e, n, r, o, i, s, c, u];
    }
    set(e, n, r, o, i, s, c, u) {
      (this.A = e | 0),
        (this.B = n | 0),
        (this.C = r | 0),
        (this.D = o | 0),
        (this.E = i | 0),
        (this.F = s | 0),
        (this.G = c | 0),
        (this.H = u | 0);
    }
    process(e, n) {
      for (let a = 0; a < 16; a++, n += 4) Me[a] = e.getUint32(n, !1);
      for (let a = 16; a < 64; a++) {
        const d = Me[a - 15],
          l = Me[a - 2],
          g = (0, Xt.rotr)(d, 7) ^ (0, Xt.rotr)(d, 18) ^ (d >>> 3),
          p = (0, Xt.rotr)(l, 17) ^ (0, Xt.rotr)(l, 19) ^ (l >>> 10);
        Me[a] = (p + Me[a - 7] + g + Me[a - 16]) | 0;
      }
      let { A: r, B: o, C: i, D: s, E: c, F: u, G: f, H: h } = this;
      for (let a = 0; a < 64; a++) {
        const d = (0, Xt.rotr)(c, 6) ^ (0, Xt.rotr)(c, 11) ^ (0, Xt.rotr)(c, 25),
          l = (h + d + sl(c, u, f) + ul[a] + Me[a]) | 0,
          p = (((0, Xt.rotr)(r, 2) ^ (0, Xt.rotr)(r, 13) ^ (0, Xt.rotr)(r, 22)) + cl(r, o, i)) | 0;
        (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = i), (i = o), (o = r), (r = (l + p) | 0);
      }
      (r = (r + this.A) | 0),
        (o = (o + this.B) | 0),
        (i = (i + this.C) | 0),
        (s = (s + this.D) | 0),
        (c = (c + this.E) | 0),
        (u = (u + this.F) | 0),
        (f = (f + this.G) | 0),
        (h = (h + this.H) | 0),
        this.set(r, o, i, s, c, u, f, h);
    }
    roundClean() {
      Me.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  },
  al = class extends ia {
    constructor() {
      super(),
        (this.A = -1056596264),
        (this.B = 914150663),
        (this.C = 812702999),
        (this.D = -150054599),
        (this.E = -4191439),
        (this.F = 1750603025),
        (this.G = 1694076839),
        (this.H = -1090891868),
        (this.outputLen = 28);
    }
  };
or.sha256 = (0, Xt.wrapConstructor)(() => new ia());
or.sha224 = (0, Xt.wrapConstructor)(() => new al());
var fl = Hh,
  hl = ta,
  sa = or;
function ll(t) {
  var e = Object.create(null);
  return (
    t &&
      Object.keys(t).forEach(function (n) {
        if (n !== 'default') {
          var r = Object.getOwnPropertyDescriptor(t, n);
          Object.defineProperty(
            e,
            n,
            r.get
              ? r
              : {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }
          );
        }
      }),
    (e.default = t),
    Object.freeze(e)
  );
}
var C = ll(fl);
C.utils.hmacSha256Sync = (t, ...e) => hl.hmac(sa.sha256, t, C.utils.concatBytes(...e));
C.utils.sha256Sync = (...t) => sa.sha256(C.utils.concatBytes(...t));
const $s = C.utils._normalizePrivateKey,
  pl = 32,
  dl = 32,
  rs = new Uint8Array([
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220,
    230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65,
  ]),
  yl = 32;
function os(t, e) {
  for (let n = 0; n < 32; ++n) if (t[n] !== e[n]) return t[n] < e[n] ? -1 : 1;
  return 0;
}
function Kr(t) {
  return !(!(t instanceof Uint8Array) || t.length !== dl || os(t, rs) >= 0);
}
function ca(t) {
  return (
    t instanceof Uint8Array &&
    t.length === 64 &&
    os(t.subarray(0, 32), rs) < 0 &&
    os(t.subarray(32, 64), rs) < 0
  );
}
function Yo(t) {
  return t instanceof Uint8Array && t.length === pl;
}
function ua(t) {
  return t === void 0 || (t instanceof Uint8Array && t.length === yl);
}
function aa(t) {
  if (typeof t != 'string') throw new TypeError('hexToNumber: expected string, got ' + typeof t);
  return BigInt(`0x${t}`);
}
function wl(t) {
  return aa(C.utils.bytesToHex(t));
}
function Rs(t) {
  let e;
  if (typeof t == 'bigint') e = t;
  else if (typeof t == 'number' && Number.isSafeInteger(t) && t >= 0) e = BigInt(t);
  else if (typeof t == 'string') {
    if (t.length !== 64) throw new Error('Expected 32 bytes of private scalar');
    e = aa(t);
  } else if (t instanceof Uint8Array) {
    if (t.length !== 32) throw new Error('Expected 32 bytes of private scalar');
    e = wl(t);
  } else throw new TypeError('Expected valid private scalar');
  if (e < 0) throw new Error('Expected private scalar >= 0');
  return e;
}
const gl = (t, e) => {
    const n = $s(t),
      r = Rs(e),
      o = C.utils._bigintTo32Bytes(C.utils.mod(n + r, C.CURVE.n));
    return C.utils.isValidPrivateKey(o) ? o : null;
  },
  bl = (t, e) => {
    const n = $s(t),
      r = Rs(e),
      o = C.utils._bigintTo32Bytes(C.utils.mod(n - r, C.CURVE.n));
    return C.utils.isValidPrivateKey(o) ? o : null;
  },
  El = (t) => {
    const e = $s(t),
      n = C.utils._bigintTo32Bytes(C.CURVE.n - e);
    return C.utils.isValidPrivateKey(n) ? n : null;
  },
  fa = (t, e, n) => {
    const r = C.Point.fromHex(t),
      o = Rs(e),
      i = C.Point.BASE.multiplyAndAddUnsafe(r, o, 1n);
    if (!i) throw new Error('Tweaked point at infinity');
    return i.toRawBytes(n);
  },
  ml = (t, e, n) => {
    const r = C.Point.fromHex(t),
      o = typeof e == 'string' ? e : C.utils.bytesToHex(e),
      i = BigInt(`0x${o}`);
    return r.multiply(i).toRawBytes(n);
  };
function Mr(t, e) {
  return t === void 0 ? (e !== void 0 ? ha(e) : !0) : !!t;
}
function _n(t) {
  try {
    return t();
  } catch {
    return null;
  }
}
function Fs(t, e) {
  if ((t.length === 32) !== e) return !1;
  try {
    return !!C.Point.fromHex(t);
  } catch {
    return !1;
  }
}
function rn(t) {
  return Fs(t, !1);
}
function ha(t) {
  return Fs(t, !1) && t.length === 33;
}
function fn(t) {
  return C.utils.isValidPrivateKey(t);
}
function Ks(t) {
  return Fs(t, !0);
}
function Sl(t, e) {
  if (!Ks(t)) throw new Error('Expected Point');
  if (!Kr(e)) throw new Error('Expected Tweak');
  return _n(() => {
    const n = fa(t, e, !0);
    return { parity: n[0] % 2 === 1 ? 1 : 0, xOnlyPubkey: n.slice(1) };
  });
}
function la(t) {
  if (!rn(t)) throw new Error('Expected Point');
  return t.slice(1, 33);
}
function pa(t, e) {
  if (!fn(t)) throw new Error('Expected Private');
  return _n(() => C.getPublicKey(t, Mr(e)));
}
function Tl(t) {
  if (!fn(t)) throw new Error('Expected Private');
  return la(pa(t));
}
function _l(t, e) {
  if (!rn(t)) throw new Error('Expected Point');
  return C.Point.fromHex(t).toRawBytes(Mr(e, t));
}
function Al(t, e, n) {
  if (!rn(t)) throw new Error('Expected Point');
  if (!Kr(e)) throw new Error('Expected Tweak');
  return _n(() => ml(t, e, Mr(n, t)));
}
function Il(t, e, n) {
  if (!rn(t) || !rn(e)) throw new Error('Expected Point');
  return _n(() => {
    const r = C.Point.fromHex(t),
      o = C.Point.fromHex(e);
    return r.equals(o.negate()) ? null : r.add(o).toRawBytes(Mr(n, t));
  });
}
function vl(t, e, n) {
  if (!rn(t)) throw new Error('Expected Point');
  if (!Kr(e)) throw new Error('Expected Tweak');
  return _n(() => fa(t, e, Mr(n, t)));
}
function kl(t, e) {
  if (fn(t) === !1) throw new Error('Expected Private');
  if (Kr(e) === !1) throw new Error('Expected Tweak');
  return _n(() => gl(t, e));
}
function Pl(t, e) {
  if (fn(t) === !1) throw new Error('Expected Private');
  if (Kr(e) === !1) throw new Error('Expected Tweak');
  return _n(() => bl(t, e));
}
function xl(t) {
  if (fn(t) === !1) throw new Error('Expected Private');
  return El(t);
}
function Ol(t, e, n) {
  if (!fn(e)) throw new Error('Expected Private');
  if (!Yo(t)) throw new Error('Expected Scalar');
  if (!ua(n)) throw new Error('Expected Extra Data (32 bytes)');
  return C.signSync(t, e, { der: !1, extraEntropy: n });
}
function Bl(t, e, n = A.alloc(32, 0)) {
  if (!fn(e)) throw new Error('Expected Private');
  if (!Yo(t)) throw new Error('Expected Scalar');
  if (!ua(n)) throw new Error('Expected Extra Data (32 bytes)');
  return C.schnorr.signSync(t, e, n);
}
function Ul(t, e, n, r) {
  if (!rn(e)) throw new Error('Expected Point');
  if (!ca(n)) throw new Error('Expected Signature');
  if (!Yo(t)) throw new Error('Expected Scalar');
  return C.verify(n, t, e, { strict: r });
}
function Nl(t, e, n) {
  if (!Ks(e)) throw new Error('Expected Point');
  if (!ca(n)) throw new Error('Expected Signature');
  if (!Yo(t)) throw new Error('Expected Scalar');
  return C.schnorr.verifySync(n, t, e);
}
var Hl = (et.isPoint = rn),
  Ll = (et.isPointCompressed = ha),
  Cl = (et.isPrivate = fn),
  $l = (et.isXOnlyPoint = Ks),
  Rl = (et.pointAdd = Il),
  Fl = (et.pointAddScalar = vl),
  Kl = (et.pointCompress = _l),
  Ml = (et.pointFromScalar = pa),
  Wl = (et.pointMultiply = Al),
  Dl = (et.privateAdd = kl),
  Vl = (et.privateNegate = xl),
  jl = (et.privateSub = Pl),
  Gl = (et.sign = Ol),
  ql = (et.signSchnorr = Bl),
  zl = (et.verify = Ul),
  Xl = (et.verifySchnorr = Nl),
  Yl = (et.xOnlyPointAddTweak = Sl),
  Zl = (et.xOnlyPointFromPoint = la),
  Ql = (et.xOnlyPointFromScalar = Tl);
const v1 = Lh(
  {
    __proto__: null,
    default: et,
    isPoint: Hl,
    isPointCompressed: Ll,
    isPrivate: Cl,
    isXOnlyPoint: $l,
    pointAdd: Rl,
    pointAddScalar: Fl,
    pointCompress: Kl,
    pointFromScalar: Ml,
    pointMultiply: Wl,
    privateAdd: Dl,
    privateNegate: Vl,
    privateSub: jl,
    sign: Gl,
    signSchnorr: ql,
    verify: zl,
    verifySchnorr: Xl,
    xOnlyPointAddTweak: Yl,
    xOnlyPointFromPoint: Zl,
    xOnlyPointFromScalar: Ql,
  },
  [et]
);
var Jl = {},
  Ut = {},
  lt = {};
Object.defineProperty(lt, '__esModule', { value: !0 });
lt.testnet = lt.regtest = lt.bitcoin = void 0;
lt.bitcoin = {
  messagePrefix: `Bitcoin Signed Message:
`,
  bech32: 'bc',
  bip32: { public: 76067358, private: 76066276 },
  pubKeyHash: 0,
  scriptHash: 5,
  wif: 128,
};
lt.regtest = {
  messagePrefix: `Bitcoin Signed Message:
`,
  bech32: 'bcrt',
  bip32: { public: 70617039, private: 70615956 },
  pubKeyHash: 111,
  scriptHash: 196,
  wif: 239,
};
lt.testnet = {
  messagePrefix: `Bitcoin Signed Message:
`,
  bech32: 'tb',
  bip32: { public: 70617039, private: 70615956 },
  pubKeyHash: 111,
  scriptHash: 196,
  wif: 239,
};
var pr = {},
  Zo = {},
  Lt = {},
  Be = {};
Object.defineProperty(Be, '__esModule', { value: !0 });
Be.encode = Be.decode = Be.check = void 0;
function tp(t) {
  if (t.length < 8 || t.length > 72 || t[0] !== 48 || t[1] !== t.length - 2 || t[2] !== 2)
    return !1;
  const e = t[3];
  if (e === 0 || 5 + e >= t.length || t[4 + e] !== 2) return !1;
  const n = t[5 + e];
  return !(
    n === 0 ||
    6 + e + n !== t.length ||
    t[4] & 128 ||
    (e > 1 && t[4] === 0 && !(t[5] & 128)) ||
    t[e + 6] & 128 ||
    (n > 1 && t[e + 6] === 0 && !(t[e + 7] & 128))
  );
}
Be.check = tp;
function ep(t) {
  if (t.length < 8) throw new Error('DER sequence length is too short');
  if (t.length > 72) throw new Error('DER sequence length is too long');
  if (t[0] !== 48) throw new Error('Expected DER sequence');
  if (t[1] !== t.length - 2) throw new Error('DER sequence length is invalid');
  if (t[2] !== 2) throw new Error('Expected DER integer');
  const e = t[3];
  if (e === 0) throw new Error('R length is zero');
  if (5 + e >= t.length) throw new Error('R length is too long');
  if (t[4 + e] !== 2) throw new Error('Expected DER integer (2)');
  const n = t[5 + e];
  if (n === 0) throw new Error('S length is zero');
  if (6 + e + n !== t.length) throw new Error('S length is invalid');
  if (t[4] & 128) throw new Error('R value is negative');
  if (e > 1 && t[4] === 0 && !(t[5] & 128)) throw new Error('R value excessively padded');
  if (t[e + 6] & 128) throw new Error('S value is negative');
  if (n > 1 && t[e + 6] === 0 && !(t[e + 7] & 128)) throw new Error('S value excessively padded');
  return { r: t.slice(4, 4 + e), s: t.slice(6 + e) };
}
Be.decode = ep;
function np(t, e) {
  const n = t.length,
    r = e.length;
  if (n === 0) throw new Error('R length is zero');
  if (r === 0) throw new Error('S length is zero');
  if (n > 33) throw new Error('R length is too long');
  if (r > 33) throw new Error('S length is too long');
  if (t[0] & 128) throw new Error('R value is negative');
  if (e[0] & 128) throw new Error('S value is negative');
  if (n > 1 && t[0] === 0 && !(t[1] & 128)) throw new Error('R value excessively padded');
  if (r > 1 && e[0] === 0 && !(e[1] & 128)) throw new Error('S value excessively padded');
  const o = A.allocUnsafe(6 + n + r);
  return (
    (o[0] = 48),
    (o[1] = o.length - 2),
    (o[2] = 2),
    (o[3] = t.length),
    t.copy(o, 4),
    (o[4 + n] = 2),
    (o[5 + n] = e.length),
    e.copy(o, 6 + n),
    o
  );
}
Be.encode = np;
var on = {};
Object.defineProperty(on, '__esModule', { value: !0 });
on.REVERSE_OPS = on.OPS = void 0;
const is = {
  OP_FALSE: 0,
  OP_0: 0,
  OP_PUSHDATA1: 76,
  OP_PUSHDATA2: 77,
  OP_PUSHDATA4: 78,
  OP_1NEGATE: 79,
  OP_RESERVED: 80,
  OP_TRUE: 81,
  OP_1: 81,
  OP_2: 82,
  OP_3: 83,
  OP_4: 84,
  OP_5: 85,
  OP_6: 86,
  OP_7: 87,
  OP_8: 88,
  OP_9: 89,
  OP_10: 90,
  OP_11: 91,
  OP_12: 92,
  OP_13: 93,
  OP_14: 94,
  OP_15: 95,
  OP_16: 96,
  OP_NOP: 97,
  OP_VER: 98,
  OP_IF: 99,
  OP_NOTIF: 100,
  OP_VERIF: 101,
  OP_VERNOTIF: 102,
  OP_ELSE: 103,
  OP_ENDIF: 104,
  OP_VERIFY: 105,
  OP_RETURN: 106,
  OP_TOALTSTACK: 107,
  OP_FROMALTSTACK: 108,
  OP_2DROP: 109,
  OP_2DUP: 110,
  OP_3DUP: 111,
  OP_2OVER: 112,
  OP_2ROT: 113,
  OP_2SWAP: 114,
  OP_IFDUP: 115,
  OP_DEPTH: 116,
  OP_DROP: 117,
  OP_DUP: 118,
  OP_NIP: 119,
  OP_OVER: 120,
  OP_PICK: 121,
  OP_ROLL: 122,
  OP_ROT: 123,
  OP_SWAP: 124,
  OP_TUCK: 125,
  OP_CAT: 126,
  OP_SUBSTR: 127,
  OP_LEFT: 128,
  OP_RIGHT: 129,
  OP_SIZE: 130,
  OP_INVERT: 131,
  OP_AND: 132,
  OP_OR: 133,
  OP_XOR: 134,
  OP_EQUAL: 135,
  OP_EQUALVERIFY: 136,
  OP_RESERVED1: 137,
  OP_RESERVED2: 138,
  OP_1ADD: 139,
  OP_1SUB: 140,
  OP_2MUL: 141,
  OP_2DIV: 142,
  OP_NEGATE: 143,
  OP_ABS: 144,
  OP_NOT: 145,
  OP_0NOTEQUAL: 146,
  OP_ADD: 147,
  OP_SUB: 148,
  OP_MUL: 149,
  OP_DIV: 150,
  OP_MOD: 151,
  OP_LSHIFT: 152,
  OP_RSHIFT: 153,
  OP_BOOLAND: 154,
  OP_BOOLOR: 155,
  OP_NUMEQUAL: 156,
  OP_NUMEQUALVERIFY: 157,
  OP_NUMNOTEQUAL: 158,
  OP_LESSTHAN: 159,
  OP_GREATERTHAN: 160,
  OP_LESSTHANOREQUAL: 161,
  OP_GREATERTHANOREQUAL: 162,
  OP_MIN: 163,
  OP_MAX: 164,
  OP_WITHIN: 165,
  OP_RIPEMD160: 166,
  OP_SHA1: 167,
  OP_SHA256: 168,
  OP_HASH160: 169,
  OP_HASH256: 170,
  OP_CODESEPARATOR: 171,
  OP_CHECKSIG: 172,
  OP_CHECKSIGVERIFY: 173,
  OP_CHECKMULTISIG: 174,
  OP_CHECKMULTISIGVERIFY: 175,
  OP_NOP1: 176,
  OP_NOP2: 177,
  OP_CHECKLOCKTIMEVERIFY: 177,
  OP_NOP3: 178,
  OP_CHECKSEQUENCEVERIFY: 178,
  OP_NOP4: 179,
  OP_NOP5: 180,
  OP_NOP6: 181,
  OP_NOP7: 182,
  OP_NOP8: 183,
  OP_NOP9: 184,
  OP_NOP10: 185,
  OP_CHECKSIGADD: 186,
  OP_PUBKEYHASH: 253,
  OP_PUBKEY: 254,
  OP_INVALIDOPCODE: 255,
};
on.OPS = is;
const da = {};
on.REVERSE_OPS = da;
for (const t of Object.keys(is)) {
  const e = is[t];
  da[e] = t;
}
var tn = {};
Object.defineProperty(tn, '__esModule', { value: !0 });
tn.decode = tn.encode = tn.encodingLength = void 0;
const Je = on;
function ya(t) {
  return t < Je.OPS.OP_PUSHDATA1 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
}
tn.encodingLength = ya;
function rp(t, e, n) {
  const r = ya(e);
  return (
    r === 1
      ? t.writeUInt8(e, n)
      : r === 2
        ? (t.writeUInt8(Je.OPS.OP_PUSHDATA1, n), t.writeUInt8(e, n + 1))
        : r === 3
          ? (t.writeUInt8(Je.OPS.OP_PUSHDATA2, n), t.writeUInt16LE(e, n + 1))
          : (t.writeUInt8(Je.OPS.OP_PUSHDATA4, n), t.writeUInt32LE(e, n + 1)),
    r
  );
}
tn.encode = rp;
function op(t, e) {
  const n = t.readUInt8(e);
  let r, o;
  if (n < Je.OPS.OP_PUSHDATA1) (r = n), (o = 1);
  else if (n === Je.OPS.OP_PUSHDATA1) {
    if (e + 2 > t.length) return null;
    (r = t.readUInt8(e + 1)), (o = 2);
  } else if (n === Je.OPS.OP_PUSHDATA2) {
    if (e + 3 > t.length) return null;
    (r = t.readUInt16LE(e + 1)), (o = 3);
  } else {
    if (e + 5 > t.length) return null;
    if (n !== Je.OPS.OP_PUSHDATA4) throw new Error('Unexpected opcode');
    (r = t.readUInt32LE(e + 1)), (o = 5);
  }
  return { opcode: n, number: r, size: o };
}
tn.decode = op;
var ir = {};
Object.defineProperty(ir, '__esModule', { value: !0 });
ir.encode = ir.decode = void 0;
function ip(t, e, n) {
  (e = e || 4), (n = n === void 0 ? !0 : n);
  const r = t.length;
  if (r === 0) return 0;
  if (r > e) throw new TypeError('Script number overflow');
  if (n && !(t[r - 1] & 127) && (r <= 1 || !(t[r - 2] & 128)))
    throw new Error('Non-minimally encoded script number');
  if (r === 5) {
    const i = t.readUInt32LE(0),
      s = t.readUInt8(4);
    return s & 128 ? -((s & -129) * 4294967296 + i) : s * 4294967296 + i;
  }
  let o = 0;
  for (let i = 0; i < r; ++i) o |= t[i] << (8 * i);
  return t[r - 1] & 128 ? -(o & ~(128 << (8 * (r - 1)))) : o;
}
ir.decode = ip;
function sp(t) {
  return t > 2147483647 ? 5 : t > 8388607 ? 4 : t > 32767 ? 3 : t > 127 ? 2 : t > 0 ? 1 : 0;
}
function cp(t) {
  let e = Math.abs(t);
  const n = sp(e),
    r = A.allocUnsafe(n),
    o = t < 0;
  for (let i = 0; i < n; ++i) r.writeUInt8(e & 255, i), (e >>= 8);
  return r[n - 1] & 128 ? r.writeUInt8(o ? 128 : 0, n - 1) : o && (r[n - 1] |= 128), r;
}
ir.encode = cp;
var sr = {},
  St = {},
  Cr = {
    Array: function (t) {
      return t != null && t.constructor === Array;
    },
    Boolean: function (t) {
      return typeof t == 'boolean';
    },
    Function: function (t) {
      return typeof t == 'function';
    },
    Nil: function (t) {
      return t == null;
    },
    Number: function (t) {
      return typeof t == 'number';
    },
    Object: function (t) {
      return typeof t == 'object';
    },
    String: function (t) {
      return typeof t == 'string';
    },
    '': function () {
      return !0;
    },
  };
Cr.Null = Cr.Nil;
for (var Bc in Cr)
  Cr[Bc].toJSON = function (t) {
    return t;
  }.bind(null, Bc);
var Ms = Cr,
  mn = Ms;
function wa(t) {
  return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
}
function Ws(t) {
  return mn.Nil(t) ? '' : wa(t.constructor);
}
function up(t) {
  return mn.Function(t) ? '' : mn.String(t) ? JSON.stringify(t) : t && mn.Object(t) ? '' : t;
}
function Ds(t, e) {
  Error.captureStackTrace && Error.captureStackTrace(t, e);
}
function To(t) {
  return mn.Function(t)
    ? t.toJSON
      ? t.toJSON()
      : wa(t)
    : mn.Array(t)
      ? 'Array'
      : t && mn.Object(t)
        ? 'Object'
        : t !== void 0
          ? t
          : '';
}
function ga(t, e, n) {
  var r = up(e);
  return 'Expected ' + To(t) + ', got' + (n !== '' ? ' ' + n : '') + (r !== '' ? ' ' + r : '');
}
function He(t, e, n) {
  (n = n || Ws(e)),
    (this.message = ga(t, e, n)),
    Ds(this, He),
    (this.__type = t),
    (this.__value = e),
    (this.__valueTypeName = n);
}
He.prototype = Object.create(Error.prototype);
He.prototype.constructor = He;
function ap(t, e, n, r, o) {
  var i = '" of type ';
  return e === 'key' && (i = '" with key type '), ga('property "' + To(n) + i + To(t), r, o);
}
function Jn(t, e, n, r, o) {
  t
    ? ((o = o || Ws(r)), (this.message = ap(t, n, e, r, o)))
    : (this.message = 'Unexpected property "' + e + '"'),
    Ds(this, He),
    (this.__label = n),
    (this.__property = e),
    (this.__type = t),
    (this.__value = r),
    (this.__valueTypeName = o);
}
Jn.prototype = Object.create(Error.prototype);
Jn.prototype.constructor = He;
function fp(t, e) {
  return new He(t, {}, e);
}
function hp(t, e, n) {
  return (
    t instanceof Jn
      ? ((e = e + '.' + t.__property),
        (t = new Jn(t.__type, e, t.__label, t.__value, t.__valueTypeName)))
      : t instanceof He && (t = new Jn(t.__type, e, n, t.__value, t.__valueTypeName)),
    Ds(t),
    t
  );
}
var ba = {
    TfTypeError: He,
    TfPropertyTypeError: Jn,
    tfCustomError: fp,
    tfSubError: hp,
    tfJSON: To,
    getValueTypeName: Ws,
  },
  Ui,
  Uc;
function lp() {
  if (Uc) return Ui;
  Uc = 1;
  var t = Ms,
    e = ba;
  function n(y) {
    return A.isBuffer(y);
  }
  function r(y) {
    return typeof y == 'string' && /^([0-9a-f]{2})+$/i.test(y);
  }
  function o(y, S) {
    var v = y.toJSON();
    function T(P) {
      if (!y(P)) return !1;
      if (P.length === S) return !0;
      throw e.tfCustomError(v + '(Length: ' + S + ')', v + '(Length: ' + P.length + ')');
    }
    return (
      (T.toJSON = function () {
        return v;
      }),
      T
    );
  }
  var i = o.bind(null, t.Array),
    s = o.bind(null, n),
    c = o.bind(null, r),
    u = o.bind(null, t.String);
  function f(y, S, v) {
    v = v || t.Number;
    function T(P, O) {
      return v(P, O) && P > y && P < S;
    }
    return (
      (T.toJSON = function () {
        return `${v.toJSON()} between [${y}, ${S}]`;
      }),
      T
    );
  }
  var h = Math.pow(2, 53) - 1;
  function a(y) {
    return typeof y == 'number' && isFinite(y);
  }
  function d(y) {
    return (y << 24) >> 24 === y;
  }
  function l(y) {
    return (y << 16) >> 16 === y;
  }
  function g(y) {
    return (y | 0) === y;
  }
  function p(y) {
    return typeof y == 'number' && y >= -h && y <= h && Math.floor(y) === y;
  }
  function b(y) {
    return (y & 255) === y;
  }
  function m(y) {
    return (y & 65535) === y;
  }
  function I(y) {
    return y >>> 0 === y;
  }
  function _(y) {
    return typeof y == 'number' && y >= 0 && y <= h && Math.floor(y) === y;
  }
  var w = {
    ArrayN: i,
    Buffer: n,
    BufferN: s,
    Finite: a,
    Hex: r,
    HexN: c,
    Int8: d,
    Int16: l,
    Int32: g,
    Int53: p,
    Range: f,
    StringN: u,
    UInt8: b,
    UInt16: m,
    UInt32: I,
    UInt53: _,
  };
  for (var E in w)
    w[E].toJSON = function (y) {
      return y;
    }.bind(null, E);
  return (Ui = w), Ui;
}
var Wr = ba,
  gt = Ms,
  _e = Wr.tfJSON,
  Ea = Wr.TfTypeError,
  ma = Wr.TfPropertyTypeError,
  Er = Wr.tfSubError,
  pp = Wr.getValueTypeName,
  xe = {
    arrayOf: function (e, n) {
      (e = we(e)), (n = n || {});
      function r(o, i) {
        return !gt.Array(o) ||
          gt.Nil(o) ||
          (n.minLength !== void 0 && o.length < n.minLength) ||
          (n.maxLength !== void 0 && o.length > n.maxLength) ||
          (n.length !== void 0 && o.length !== n.length)
          ? !1
          : o.every(function (s, c) {
              try {
                return Ot(e, s, i);
              } catch (u) {
                throw Er(u, c);
              }
            });
      }
      return (
        (r.toJSON = function () {
          var o = '[' + _e(e) + ']';
          return (
            n.length !== void 0
              ? (o += '{' + n.length + '}')
              : (n.minLength !== void 0 || n.maxLength !== void 0) &&
                (o +=
                  '{' +
                  (n.minLength === void 0 ? 0 : n.minLength) +
                  ',' +
                  (n.maxLength === void 0 ? 1 / 0 : n.maxLength) +
                  '}'),
            o
          );
        }),
        r
      );
    },
    maybe: function t(e) {
      e = we(e);
      function n(r, o) {
        return gt.Nil(r) || e(r, o, t);
      }
      return (
        (n.toJSON = function () {
          return '?' + _e(e);
        }),
        n
      );
    },
    map: function (e, n) {
      (e = we(e)), n && (n = we(n));
      function r(o, i) {
        if (!gt.Object(o) || gt.Nil(o)) return !1;
        for (var s in o) {
          try {
            n && Ot(n, s, i);
          } catch (u) {
            throw Er(u, s, 'key');
          }
          try {
            var c = o[s];
            Ot(e, c, i);
          } catch (u) {
            throw Er(u, s);
          }
        }
        return !0;
      }
      return (
        n
          ? (r.toJSON = function () {
              return '{' + _e(n) + ': ' + _e(e) + '}';
            })
          : (r.toJSON = function () {
              return '{' + _e(e) + '}';
            }),
        r
      );
    },
    object: function (e) {
      var n = {};
      for (var r in e) n[r] = we(e[r]);
      function o(i, s) {
        if (!gt.Object(i) || gt.Nil(i)) return !1;
        var c;
        try {
          for (c in n) {
            var u = n[c],
              f = i[c];
            Ot(u, f, s);
          }
        } catch (h) {
          throw Er(h, c);
        }
        if (s) {
          for (c in i) if (!n[c]) throw new ma(void 0, c);
        }
        return !0;
      }
      return (
        (o.toJSON = function () {
          return _e(n);
        }),
        o
      );
    },
    anyOf: function () {
      var e = [].slice.call(arguments).map(we);
      function n(r, o) {
        return e.some(function (i) {
          try {
            return Ot(i, r, o);
          } catch {
            return !1;
          }
        });
      }
      return (
        (n.toJSON = function () {
          return e.map(_e).join('|');
        }),
        n
      );
    },
    allOf: function () {
      var e = [].slice.call(arguments).map(we);
      function n(r, o) {
        return e.every(function (i) {
          try {
            return Ot(i, r, o);
          } catch {
            return !1;
          }
        });
      }
      return (
        (n.toJSON = function () {
          return e.map(_e).join(' & ');
        }),
        n
      );
    },
    quacksLike: function (e) {
      function n(r) {
        return e === pp(r);
      }
      return (
        (n.toJSON = function () {
          return e;
        }),
        n
      );
    },
    tuple: function () {
      var e = [].slice.call(arguments).map(we);
      function n(r, o) {
        return gt.Nil(r) || gt.Nil(r.length) || (o && r.length !== e.length)
          ? !1
          : e.every(function (i, s) {
              try {
                return Ot(i, r[s], o);
              } catch (c) {
                throw Er(c, s);
              }
            });
      }
      return (
        (n.toJSON = function () {
          return '(' + e.map(_e).join(', ') + ')';
        }),
        n
      );
    },
    value: function (e) {
      function n(r) {
        return r === e;
      }
      return (
        (n.toJSON = function () {
          return e;
        }),
        n
      );
    },
  };
xe.oneOf = xe.anyOf;
function we(t) {
  if (gt.String(t)) return t[0] === '?' ? xe.maybe(t.slice(1)) : gt[t] || xe.quacksLike(t);
  if (t && gt.Object(t)) {
    if (gt.Array(t)) {
      if (t.length !== 1)
        throw new TypeError('Expected compile() parameter of type Array of length 1');
      return xe.arrayOf(t[0]);
    }
    return xe.object(t);
  } else if (gt.Function(t)) return t;
  return xe.value(t);
}
function Ot(t, e, n, r) {
  if (gt.Function(t)) {
    if (t(e, n)) return !0;
    throw new Ea(r || t, e);
  }
  return Ot(we(t), e, n);
}
for (var en in gt) Ot[en] = gt[en];
for (en in xe) Ot[en] = xe[en];
var Nc = lp();
for (en in Nc) Ot[en] = Nc[en];
Ot.compile = we;
Ot.TfTypeError = Ea;
Ot.TfPropertyTypeError = ma;
var dp = Ot;
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.oneOf =
      t.Null =
      t.BufferN =
      t.Function =
      t.UInt32 =
      t.UInt8 =
      t.tuple =
      t.maybe =
      t.Hex =
      t.Buffer =
      t.String =
      t.Boolean =
      t.Array =
      t.Number =
      t.Hash256bit =
      t.Hash160bit =
      t.Buffer256bit =
      t.isTaptree =
      t.isTapleaf =
      t.TAPLEAF_VERSION_MASK =
      t.Network =
      t.ECPoint =
      t.Satoshi =
      t.Signer =
      t.BIP32Path =
      t.UInt31 =
      t.isPoint =
      t.typeforce =
        void 0);
  const e = an;
  t.typeforce = dp;
  const n = e.Buffer.alloc(32, 0),
    r = e.Buffer.from('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f', 'hex');
  function o(l) {
    if (!e.Buffer.isBuffer(l) || l.length < 33) return !1;
    const g = l[0],
      p = l.slice(1, 33);
    if (p.compare(n) === 0 || p.compare(r) >= 0) return !1;
    if ((g === 2 || g === 3) && l.length === 33) return !0;
    const b = l.slice(33);
    return b.compare(n) === 0 || b.compare(r) >= 0 ? !1 : g === 4 && l.length === 65;
  }
  t.isPoint = o;
  const i = Math.pow(2, 31) - 1;
  function s(l) {
    return t.typeforce.UInt32(l) && l <= i;
  }
  t.UInt31 = s;
  function c(l) {
    return t.typeforce.String(l) && !!l.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
  }
  (t.BIP32Path = c), (c.toJSON = () => 'BIP32 derivation path');
  function u(l) {
    return (
      (t.typeforce.Buffer(l.publicKey) || typeof l.getPublicKey == 'function') &&
      typeof l.sign == 'function'
    );
  }
  t.Signer = u;
  const f = 21 * 1e14;
  function h(l) {
    return t.typeforce.UInt53(l) && l <= f;
  }
  (t.Satoshi = h),
    (t.ECPoint = t.typeforce.quacksLike('Point')),
    (t.Network = t.typeforce.compile({
      messagePrefix: t.typeforce.oneOf(t.typeforce.Buffer, t.typeforce.String),
      bip32: { public: t.typeforce.UInt32, private: t.typeforce.UInt32 },
      pubKeyHash: t.typeforce.UInt8,
      scriptHash: t.typeforce.UInt8,
      wif: t.typeforce.UInt8,
    })),
    (t.TAPLEAF_VERSION_MASK = 254);
  function a(l) {
    return !l || !('output' in l) || !e.Buffer.isBuffer(l.output)
      ? !1
      : l.version !== void 0
        ? (l.version & t.TAPLEAF_VERSION_MASK) === l.version
        : !0;
  }
  t.isTapleaf = a;
  function d(l) {
    return (0, t.Array)(l) ? (l.length !== 2 ? !1 : l.every((g) => d(g))) : a(l);
  }
  (t.isTaptree = d),
    (t.Buffer256bit = t.typeforce.BufferN(32)),
    (t.Hash160bit = t.typeforce.BufferN(20)),
    (t.Hash256bit = t.typeforce.BufferN(32)),
    (t.Number = t.typeforce.Number),
    (t.Array = t.typeforce.Array),
    (t.Boolean = t.typeforce.Boolean),
    (t.String = t.typeforce.String),
    (t.Buffer = t.typeforce.Buffer),
    (t.Hex = t.typeforce.Hex),
    (t.maybe = t.typeforce.maybe),
    (t.tuple = t.typeforce.tuple),
    (t.UInt8 = t.typeforce.UInt8),
    (t.UInt32 = t.typeforce.UInt32),
    (t.Function = t.typeforce.Function),
    (t.BufferN = t.typeforce.BufferN),
    (t.Null = t.typeforce.Null),
    (t.oneOf = t.typeforce.oneOf);
})(St);
Object.defineProperty(sr, '__esModule', { value: !0 });
sr.encode = sr.decode = void 0;
const { Buffer: cr } = an,
  Sa = Be,
  ss = St,
  { typeforce: yp } = ss,
  Hc = cr.alloc(1, 0);
function Lc(t) {
  let e = 0;
  for (; t[e] === 0; ) ++e;
  return e === t.length
    ? Hc
    : ((t = t.slice(e)), t[0] & 128 ? cr.concat([Hc, t], 1 + t.length) : t);
}
function Cc(t) {
  t[0] === 0 && (t = t.slice(1));
  const e = cr.alloc(32, 0),
    n = Math.max(0, 32 - t.length);
  return t.copy(e, n), e;
}
function wp(t) {
  const e = t.readUInt8(t.length - 1),
    n = e & -129;
  if (n <= 0 || n >= 4) throw new Error('Invalid hashType ' + e);
  const r = Sa.decode(t.slice(0, -1)),
    o = Cc(r.r),
    i = Cc(r.s);
  return { signature: cr.concat([o, i], 64), hashType: e };
}
sr.decode = wp;
function gp(t, e) {
  yp({ signature: ss.BufferN(64), hashType: ss.UInt8 }, { signature: t, hashType: e });
  const n = e & -129;
  if (n <= 0 || n >= 4) throw new Error('Invalid hashType ' + e);
  const r = cr.allocUnsafe(1);
  r.writeUInt8(e, 0);
  const o = Lc(t.slice(0, 32)),
    i = Lc(t.slice(32, 64));
  return cr.concat([Sa.encode(o, i), r]);
}
sr.encode = gp;
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.signature =
      t.number =
      t.isCanonicalScriptSignature =
      t.isDefinedHashType =
      t.isCanonicalPubKey =
      t.toStack =
      t.fromASM =
      t.toASM =
      t.decompile =
      t.compile =
      t.countNonPushOnlyOPs =
      t.isPushOnly =
      t.OPS =
        void 0);
  const e = Be,
    n = on;
  Object.defineProperty(t, 'OPS', {
    enumerable: !0,
    get: function () {
      return n.OPS;
    },
  });
  const r = tn,
    o = ir,
    i = sr,
    s = St,
    { typeforce: c } = s,
    u = n.OPS.OP_RESERVED;
  function f(T) {
    return (
      s.Number(T) &&
      (T === n.OPS.OP_0 || (T >= n.OPS.OP_1 && T <= n.OPS.OP_16) || T === n.OPS.OP_1NEGATE)
    );
  }
  function h(T) {
    return s.Buffer(T) || f(T);
  }
  function a(T) {
    return s.Array(T) && T.every(h);
  }
  t.isPushOnly = a;
  function d(T) {
    return T.length - T.filter(h).length;
  }
  t.countNonPushOnlyOPs = d;
  function l(T) {
    if (T.length === 0) return n.OPS.OP_0;
    if (T.length === 1) {
      if (T[0] >= 1 && T[0] <= 16) return u + T[0];
      if (T[0] === 129) return n.OPS.OP_1NEGATE;
    }
  }
  function g(T) {
    return A.isBuffer(T);
  }
  function p(T) {
    return s.Array(T);
  }
  function b(T) {
    return A.isBuffer(T);
  }
  function m(T) {
    if (g(T)) return T;
    c(s.Array, T);
    const P = T.reduce(
        ($, nt) =>
          b(nt)
            ? nt.length === 1 && l(nt) !== void 0
              ? $ + 1
              : $ + r.encodingLength(nt.length) + nt.length
            : $ + 1,
        0
      ),
      O = A.allocUnsafe(P);
    let L = 0;
    if (
      (T.forEach(($) => {
        if (b($)) {
          const nt = l($);
          if (nt !== void 0) {
            O.writeUInt8(nt, L), (L += 1);
            return;
          }
          (L += r.encode(O, $.length, L)), $.copy(O, L), (L += $.length);
        } else O.writeUInt8($, L), (L += 1);
      }),
      L !== O.length)
    )
      throw new Error('Could not decode chunks');
    return O;
  }
  t.compile = m;
  function I(T) {
    if (p(T)) return T;
    c(s.Buffer, T);
    const P = [];
    let O = 0;
    for (; O < T.length; ) {
      const L = T[O];
      if (L > n.OPS.OP_0 && L <= n.OPS.OP_PUSHDATA4) {
        const $ = r.decode(T, O);
        if ($ === null || ((O += $.size), O + $.number > T.length)) return null;
        const nt = T.slice(O, O + $.number);
        O += $.number;
        const k = l(nt);
        k !== void 0 ? P.push(k) : P.push(nt);
      } else P.push(L), (O += 1);
    }
    return P;
  }
  t.decompile = I;
  function _(T) {
    return (
      g(T) && (T = I(T)),
      T.map((P) => {
        if (b(P)) {
          const O = l(P);
          if (O === void 0) return P.toString('hex');
          P = O;
        }
        return n.REVERSE_OPS[P];
      }).join(' ')
    );
  }
  t.toASM = _;
  function w(T) {
    return (
      c(s.String, T),
      m(T.split(' ').map((P) => (n.OPS[P] !== void 0 ? n.OPS[P] : (c(s.Hex, P), A.from(P, 'hex')))))
    );
  }
  t.fromASM = w;
  function E(T) {
    return (
      (T = I(T)),
      c(a, T),
      T.map((P) => (b(P) ? P : P === n.OPS.OP_0 ? A.allocUnsafe(0) : o.encode(P - u)))
    );
  }
  t.toStack = E;
  function y(T) {
    return s.isPoint(T);
  }
  t.isCanonicalPubKey = y;
  function S(T) {
    const P = T & -129;
    return P > 0 && P < 4;
  }
  t.isDefinedHashType = S;
  function v(T) {
    return !A.isBuffer(T) || !S(T[T.length - 1]) ? !1 : e.check(T.slice(0, -1));
  }
  (t.isCanonicalScriptSignature = v), (t.number = o), (t.signature = i);
})(Lt);
var Dt = {};
Object.defineProperty(Dt, '__esModule', { value: !0 });
Dt.value = Dt.prop = void 0;
function bp(t, e, n) {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !0,
    get() {
      const r = n.call(this);
      return (this[e] = r), r;
    },
    set(r) {
      Object.defineProperty(this, e, { configurable: !0, enumerable: !0, value: r, writable: !0 });
    },
  });
}
Dt.prop = bp;
function Ep(t) {
  let e;
  return () => (e !== void 0 || (e = t()), e);
}
Dt.value = Ep;
Object.defineProperty(Zo, '__esModule', { value: !0 });
Zo.p2data = void 0;
const mp = lt,
  lo = Lt,
  Ae = St,
  $c = Dt,
  Rc = lo.OPS;
function Sp(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function Tp(t, e) {
  if (!t.data && !t.output) throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, Ae.typeforce)(
      {
        network: Ae.typeforce.maybe(Ae.typeforce.Object),
        output: Ae.typeforce.maybe(Ae.typeforce.Buffer),
        data: Ae.typeforce.maybe(Ae.typeforce.arrayOf(Ae.typeforce.Buffer)),
      },
      t
    );
  const r = { name: 'embed', network: t.network || mp.bitcoin };
  if (
    ($c.prop(r, 'output', () => {
      if (t.data) return lo.compile([Rc.OP_RETURN].concat(t.data));
    }),
    $c.prop(r, 'data', () => {
      if (t.output) return lo.decompile(t.output).slice(1);
    }),
    e.validate && t.output)
  ) {
    const o = lo.decompile(t.output);
    if (o[0] !== Rc.OP_RETURN) throw new TypeError('Output is invalid');
    if (!o.slice(1).every(Ae.typeforce.Buffer)) throw new TypeError('Output is invalid');
    if (t.data && !Sp(t.data, r.data)) throw new TypeError('Data mismatch');
  }
  return Object.assign(r, t);
}
Zo.p2data = Tp;
var Qo = {};
Object.defineProperty(Qo, '__esModule', { value: !0 });
Qo.p2ms = void 0;
const _p = lt,
  qn = Lt,
  it = St,
  We = Dt,
  zn = qn.OPS,
  Xr = zn.OP_RESERVED;
function Fc(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function Ap(t, e) {
  if (!t.input && !t.output && !(t.pubkeys && t.m !== void 0) && !t.signatures)
    throw new TypeError('Not enough data');
  e = Object.assign({ validate: !0 }, e || {});
  function n(u) {
    return qn.isCanonicalScriptSignature(u) || (e.allowIncomplete && u === zn.OP_0) !== void 0;
  }
  (0, it.typeforce)(
    {
      network: it.typeforce.maybe(it.typeforce.Object),
      m: it.typeforce.maybe(it.typeforce.Number),
      n: it.typeforce.maybe(it.typeforce.Number),
      output: it.typeforce.maybe(it.typeforce.Buffer),
      pubkeys: it.typeforce.maybe(it.typeforce.arrayOf(it.isPoint)),
      signatures: it.typeforce.maybe(it.typeforce.arrayOf(n)),
      input: it.typeforce.maybe(it.typeforce.Buffer),
    },
    t
  );
  const o = { network: t.network || _p.bitcoin };
  let i = [],
    s = !1;
  function c(u) {
    s ||
      ((s = !0),
      (i = qn.decompile(u)),
      (o.m = i[0] - Xr),
      (o.n = i[i.length - 2] - Xr),
      (o.pubkeys = i.slice(1, -2)));
  }
  if (
    (We.prop(o, 'output', () => {
      if (t.m && o.n && t.pubkeys)
        return qn.compile([].concat(Xr + t.m, t.pubkeys, Xr + o.n, zn.OP_CHECKMULTISIG));
    }),
    We.prop(o, 'm', () => {
      if (o.output) return c(o.output), o.m;
    }),
    We.prop(o, 'n', () => {
      if (o.pubkeys) return o.pubkeys.length;
    }),
    We.prop(o, 'pubkeys', () => {
      if (t.output) return c(t.output), o.pubkeys;
    }),
    We.prop(o, 'signatures', () => {
      if (t.input) return qn.decompile(t.input).slice(1);
    }),
    We.prop(o, 'input', () => {
      if (t.signatures) return qn.compile([zn.OP_0].concat(t.signatures));
    }),
    We.prop(o, 'witness', () => {
      if (o.input) return [];
    }),
    We.prop(o, 'name', () => {
      if (!(!o.m || !o.n)) return `p2ms(${o.m} of ${o.n})`;
    }),
    e.validate)
  ) {
    if (t.output) {
      if ((c(t.output), !it.typeforce.Number(i[0]))) throw new TypeError('Output is invalid');
      if (!it.typeforce.Number(i[i.length - 2])) throw new TypeError('Output is invalid');
      if (i[i.length - 1] !== zn.OP_CHECKMULTISIG) throw new TypeError('Output is invalid');
      if (o.m <= 0 || o.n > 16 || o.m > o.n || o.n !== i.length - 3)
        throw new TypeError('Output is invalid');
      if (!o.pubkeys.every((u) => (0, it.isPoint)(u))) throw new TypeError('Output is invalid');
      if (t.m !== void 0 && t.m !== o.m) throw new TypeError('m mismatch');
      if (t.n !== void 0 && t.n !== o.n) throw new TypeError('n mismatch');
      if (t.pubkeys && !Fc(t.pubkeys, o.pubkeys)) throw new TypeError('Pubkeys mismatch');
    }
    if (t.pubkeys) {
      if (t.n !== void 0 && t.n !== t.pubkeys.length) throw new TypeError('Pubkey count mismatch');
      if (((o.n = t.pubkeys.length), o.n < o.m))
        throw new TypeError('Pubkey count cannot be less than m');
    }
    if (t.signatures) {
      if (t.signatures.length < o.m) throw new TypeError('Not enough signatures provided');
      if (t.signatures.length > o.m) throw new TypeError('Too many signatures provided');
    }
    if (t.input) {
      if (t.input[0] !== zn.OP_0) throw new TypeError('Input is invalid');
      if (o.signatures.length === 0 || !o.signatures.every(n))
        throw new TypeError('Input has invalid signature(s)');
      if (t.signatures && !Fc(t.signatures, o.signatures))
        throw new TypeError('Signature mismatch');
      if (t.m !== void 0 && t.m !== t.signatures.length)
        throw new TypeError('Signature count mismatch');
    }
  }
  return Object.assign(o, t);
}
Qo.p2ms = Ap;
var Jo = {};
Object.defineProperty(Jo, '__esModule', { value: !0 });
Jo.p2pk = void 0;
const Ip = lt,
  Xn = Lt,
  re = St,
  Vn = Dt,
  Kc = Xn.OPS;
function vp(t, e) {
  if (!t.input && !t.output && !t.pubkey && !t.input && !t.signature)
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, re.typeforce)(
      {
        network: re.typeforce.maybe(re.typeforce.Object),
        output: re.typeforce.maybe(re.typeforce.Buffer),
        pubkey: re.typeforce.maybe(re.isPoint),
        signature: re.typeforce.maybe(Xn.isCanonicalScriptSignature),
        input: re.typeforce.maybe(re.typeforce.Buffer),
      },
      t
    );
  const n = Vn.value(() => Xn.decompile(t.input)),
    o = { name: 'p2pk', network: t.network || Ip.bitcoin };
  if (
    (Vn.prop(o, 'output', () => {
      if (t.pubkey) return Xn.compile([t.pubkey, Kc.OP_CHECKSIG]);
    }),
    Vn.prop(o, 'pubkey', () => {
      if (t.output) return t.output.slice(1, -1);
    }),
    Vn.prop(o, 'signature', () => {
      if (t.input) return n()[0];
    }),
    Vn.prop(o, 'input', () => {
      if (t.signature) return Xn.compile([t.signature]);
    }),
    Vn.prop(o, 'witness', () => {
      if (o.input) return [];
    }),
    e.validate)
  ) {
    if (t.output) {
      if (t.output[t.output.length - 1] !== Kc.OP_CHECKSIG)
        throw new TypeError('Output is invalid');
      if (!(0, re.isPoint)(o.pubkey)) throw new TypeError('Output pubkey is invalid');
      if (t.pubkey && !t.pubkey.equals(o.pubkey)) throw new TypeError('Pubkey mismatch');
    }
    if (t.signature && t.input && !t.input.equals(o.input))
      throw new TypeError('Signature mismatch');
    if (t.input) {
      if (n().length !== 1) throw new TypeError('Input is invalid');
      if (!Xn.isCanonicalScriptSignature(o.signature))
        throw new TypeError('Input has invalid signature');
    }
  }
  return Object.assign(o, t);
}
Jo.p2pk = vp;
var ti = {},
  Ee = {},
  ur = {},
  dr = {},
  Nt = {};
Object.defineProperty(Nt, '__esModule', { value: !0 });
Nt.output = Nt.exists = Nt.hash = Nt.bytes = Nt.bool = Nt.number = void 0;
function _o(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
Nt.number = _o;
function Ta(t) {
  if (typeof t != 'boolean') throw new Error(`Expected boolean, not ${t}`);
}
Nt.bool = Ta;
function Vs(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
Nt.bytes = Vs;
function _a(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  _o(t.outputLen), _o(t.blockLen);
}
Nt.hash = _a;
function Aa(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
Nt.exists = Aa;
function Ia(t, e) {
  Vs(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
Nt.output = Ia;
const kp = { number: _o, bool: Ta, bytes: Vs, hash: _a, exists: Aa, output: Ia };
Nt.default = kp;
var Dr = {},
  ei = {};
Object.defineProperty(ei, '__esModule', { value: !0 });
ei.crypto = void 0;
ei.crypto = {
  node: void 0,
  web: typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0,
};
(function (t) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
    t,
    '__esModule',
    { value: !0 }
  ),
    (t.randomBytes =
      t.wrapConstructorWithOpts =
      t.wrapConstructor =
      t.checkOpts =
      t.Hash =
      t.concatBytes =
      t.toBytes =
      t.utf8ToBytes =
      t.asyncLoop =
      t.nextTick =
      t.hexToBytes =
      t.bytesToHex =
      t.isLE =
      t.rotr =
      t.createView =
      t.u32 =
      t.u8 =
        void 0);
  const e = ei,
    n = (w) => new Uint8Array(w.buffer, w.byteOffset, w.byteLength);
  t.u8 = n;
  const r = (w) => new Uint32Array(w.buffer, w.byteOffset, Math.floor(w.byteLength / 4));
  t.u32 = r;
  const o = (w) => new DataView(w.buffer, w.byteOffset, w.byteLength);
  t.createView = o;
  const i = (w, E) => (w << (32 - E)) | (w >>> E);
  if (
    ((t.rotr = i),
    (t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68),
    !t.isLE)
  )
    throw new Error('Non little-endian hardware is not supported');
  const s = Array.from({ length: 256 }, (w, E) => E.toString(16).padStart(2, '0'));
  function c(w) {
    if (!(w instanceof Uint8Array)) throw new Error('Uint8Array expected');
    let E = '';
    for (let y = 0; y < w.length; y++) E += s[w[y]];
    return E;
  }
  t.bytesToHex = c;
  function u(w) {
    if (typeof w != 'string') throw new TypeError('hexToBytes: expected string, got ' + typeof w);
    if (w.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
    const E = new Uint8Array(w.length / 2);
    for (let y = 0; y < E.length; y++) {
      const S = y * 2,
        v = w.slice(S, S + 2),
        T = Number.parseInt(v, 16);
      if (Number.isNaN(T) || T < 0) throw new Error('Invalid byte sequence');
      E[y] = T;
    }
    return E;
  }
  t.hexToBytes = u;
  const f = async () => {};
  t.nextTick = f;
  async function h(w, E, y) {
    let S = Date.now();
    for (let v = 0; v < w; v++) {
      y(v);
      const T = Date.now() - S;
      (T >= 0 && T < E) || (await (0, t.nextTick)(), (S += T));
    }
  }
  t.asyncLoop = h;
  function a(w) {
    if (typeof w != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof w}`);
    return new TextEncoder().encode(w);
  }
  t.utf8ToBytes = a;
  function d(w) {
    if ((typeof w == 'string' && (w = a(w)), !(w instanceof Uint8Array)))
      throw new TypeError(`Expected input type is Uint8Array (got ${typeof w})`);
    return w;
  }
  t.toBytes = d;
  function l(...w) {
    if (!w.every((S) => S instanceof Uint8Array)) throw new Error('Uint8Array list expected');
    if (w.length === 1) return w[0];
    const E = w.reduce((S, v) => S + v.length, 0),
      y = new Uint8Array(E);
    for (let S = 0, v = 0; S < w.length; S++) {
      const T = w[S];
      y.set(T, v), (v += T.length);
    }
    return y;
  }
  t.concatBytes = l;
  class g {
    clone() {
      return this._cloneInto();
    }
  }
  t.Hash = g;
  const p = (w) =>
    Object.prototype.toString.call(w) === '[object Object]' && w.constructor === Object;
  function b(w, E) {
    if (E !== void 0 && (typeof E != 'object' || !p(E)))
      throw new TypeError('Options should be object or undefined');
    return Object.assign(w, E);
  }
  t.checkOpts = b;
  function m(w) {
    const E = (S) => w().update(d(S)).digest(),
      y = w();
    return (E.outputLen = y.outputLen), (E.blockLen = y.blockLen), (E.create = () => w()), E;
  }
  t.wrapConstructor = m;
  function I(w) {
    const E = (S, v) => w(v).update(d(S)).digest(),
      y = w({});
    return (E.outputLen = y.outputLen), (E.blockLen = y.blockLen), (E.create = (S) => w(S)), E;
  }
  t.wrapConstructorWithOpts = I;
  function _(w = 32) {
    if (e.crypto.web) return e.crypto.web.getRandomValues(new Uint8Array(w));
    if (e.crypto.node) return new Uint8Array(e.crypto.node.randomBytes(w).buffer);
    throw new Error("The environment doesn't have randomBytes function");
  }
  t.randomBytes = _;
})(Dr);
Object.defineProperty(dr, '__esModule', { value: !0 });
dr.SHA2 = void 0;
const Ni = Nt,
  mr = Dr;
function Pp(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const o = BigInt(32),
    i = BigInt(4294967295),
    s = Number((n >> o) & i),
    c = Number(n & i),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
let xp = class extends mr.Hash {
  constructor(e, n, r, o) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = o),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = (0, mr.createView)(this.buffer));
  }
  update(e) {
    Ni.default.exists(this);
    const { view: n, buffer: r, blockLen: o } = this;
    e = (0, mr.toBytes)(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const c = Math.min(o - this.pos, i - s);
      if (c === o) {
        const u = (0, mr.createView)(e);
        for (; o <= i - s; s += o) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === o && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    Ni.default.exists(this), Ni.default.output(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: o, isLE: i } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > o - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < o; a++) n[a] = 0;
    Pp(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const c = (0, mr.createView)(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], i);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: c } = this;
    return (
      (e.length = o), (e.pos = c), (e.finished = i), (e.destroyed = s), o % n && e.buffer.set(r), e
    );
  }
};
dr.SHA2 = xp;
Object.defineProperty(ur, '__esModule', { value: !0 });
ur.ripemd160 = ur.RIPEMD160 = void 0;
const Op = dr,
  Bp = Dr,
  Up = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
  va = Uint8Array.from({ length: 16 }, (t, e) => e),
  Np = va.map((t) => (9 * t + 5) % 16);
let js = [va],
  Gs = [Np];
for (let t = 0; t < 4; t++) for (let e of [js, Gs]) e.push(e[t].map((n) => Up[n]));
const ka = [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((t) => new Uint8Array(t)),
  Hp = js.map((t, e) => t.map((n) => ka[e][n])),
  Lp = Gs.map((t, e) => t.map((n) => ka[e][n])),
  Cp = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
  $p = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
  Yr = (t, e) => (t << e) | (t >>> (32 - e));
function Mc(t, e, n, r) {
  return t === 0
    ? e ^ n ^ r
    : t === 1
      ? (e & n) | (~e & r)
      : t === 2
        ? (e | ~n) ^ r
        : t === 3
          ? (e & r) | (n & ~r)
          : e ^ (n | ~r);
}
const Zr = new Uint32Array(16);
let Pa = class extends Op.SHA2 {
  constructor() {
    super(64, 20, 8, !0),
      (this.h0 = 1732584193),
      (this.h1 = -271733879),
      (this.h2 = -1732584194),
      (this.h3 = 271733878),
      (this.h4 = -1009589776);
  }
  get() {
    const { h0: e, h1: n, h2: r, h3: o, h4: i } = this;
    return [e, n, r, o, i];
  }
  set(e, n, r, o, i) {
    (this.h0 = e | 0), (this.h1 = n | 0), (this.h2 = r | 0), (this.h3 = o | 0), (this.h4 = i | 0);
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4) Zr[l] = e.getUint32(n, !0);
    let r = this.h0 | 0,
      o = r,
      i = this.h1 | 0,
      s = i,
      c = this.h2 | 0,
      u = c,
      f = this.h3 | 0,
      h = f,
      a = this.h4 | 0,
      d = a;
    for (let l = 0; l < 5; l++) {
      const g = 4 - l,
        p = Cp[l],
        b = $p[l],
        m = js[l],
        I = Gs[l],
        _ = Hp[l],
        w = Lp[l];
      for (let E = 0; E < 16; E++) {
        const y = (Yr(r + Mc(l, i, c, f) + Zr[m[E]] + p, _[E]) + a) | 0;
        (r = a), (a = f), (f = Yr(c, 10) | 0), (c = i), (i = y);
      }
      for (let E = 0; E < 16; E++) {
        const y = (Yr(o + Mc(g, s, u, h) + Zr[I[E]] + b, w[E]) + d) | 0;
        (o = d), (d = h), (h = Yr(u, 10) | 0), (u = s), (s = y);
      }
    }
    this.set(
      (this.h1 + c + h) | 0,
      (this.h2 + f + d) | 0,
      (this.h3 + a + o) | 0,
      (this.h4 + r + s) | 0,
      (this.h0 + i + u) | 0
    );
  }
  roundClean() {
    Zr.fill(0);
  }
  destroy() {
    (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
};
ur.RIPEMD160 = Pa;
ur.ripemd160 = (0, Bp.wrapConstructor)(() => new Pa());
var ni = {};
Object.defineProperty(ni, '__esModule', { value: !0 });
ni.sha1 = void 0;
const Rp = dr,
  Fp = Dr,
  Hi = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
  Kp = (t, e, n) => (t & e) ^ (~t & n),
  Mp = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  Sr = new Uint32Array([1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
  De = new Uint32Array(80);
class Wp extends Rp.SHA2 {
  constructor() {
    super(64, 20, 8, !1),
      (this.A = Sr[0] | 0),
      (this.B = Sr[1] | 0),
      (this.C = Sr[2] | 0),
      (this.D = Sr[3] | 0),
      (this.E = Sr[4] | 0);
  }
  get() {
    const { A: e, B: n, C: r, D: o, E: i } = this;
    return [e, n, r, o, i];
  }
  set(e, n, r, o, i) {
    (this.A = e | 0), (this.B = n | 0), (this.C = r | 0), (this.D = o | 0), (this.E = i | 0);
  }
  process(e, n) {
    for (let u = 0; u < 16; u++, n += 4) De[u] = e.getUint32(n, !1);
    for (let u = 16; u < 80; u++) De[u] = Hi(De[u - 3] ^ De[u - 8] ^ De[u - 14] ^ De[u - 16], 1);
    let { A: r, B: o, C: i, D: s, E: c } = this;
    for (let u = 0; u < 80; u++) {
      let f, h;
      u < 20
        ? ((f = Kp(o, i, s)), (h = 1518500249))
        : u < 40
          ? ((f = o ^ i ^ s), (h = 1859775393))
          : u < 60
            ? ((f = Mp(o, i, s)), (h = 2400959708))
            : ((f = o ^ i ^ s), (h = 3395469782));
      const a = (Hi(r, 5) + f + c + h + De[u]) | 0;
      (c = s), (s = i), (i = Hi(o, 30)), (o = r), (r = a);
    }
    (r = (r + this.A) | 0),
      (o = (o + this.B) | 0),
      (i = (i + this.C) | 0),
      (s = (s + this.D) | 0),
      (c = (c + this.E) | 0),
      this.set(r, o, i, s, c);
  }
  roundClean() {
    De.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
ni.sha1 = (0, Fp.wrapConstructor)(() => new Wp());
var ar = {};
Object.defineProperty(ar, '__esModule', { value: !0 });
ar.sha224 = ar.sha256 = void 0;
const Dp = dr,
  Yt = Dr,
  Vp = (t, e, n) => (t & e) ^ (~t & n),
  jp = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  Gp = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Ve = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  je = new Uint32Array(64);
let xa = class extends Dp.SHA2 {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Ve[0] | 0),
      (this.B = Ve[1] | 0),
      (this.C = Ve[2] | 0),
      (this.D = Ve[3] | 0),
      (this.E = Ve[4] | 0),
      (this.F = Ve[5] | 0),
      (this.G = Ve[6] | 0),
      (this.H = Ve[7] | 0);
  }
  get() {
    const { A: e, B: n, C: r, D: o, E: i, F: s, G: c, H: u } = this;
    return [e, n, r, o, i, s, c, u];
  }
  set(e, n, r, o, i, s, c, u) {
    (this.A = e | 0),
      (this.B = n | 0),
      (this.C = r | 0),
      (this.D = o | 0),
      (this.E = i | 0),
      (this.F = s | 0),
      (this.G = c | 0),
      (this.H = u | 0);
  }
  process(e, n) {
    for (let a = 0; a < 16; a++, n += 4) je[a] = e.getUint32(n, !1);
    for (let a = 16; a < 64; a++) {
      const d = je[a - 15],
        l = je[a - 2],
        g = (0, Yt.rotr)(d, 7) ^ (0, Yt.rotr)(d, 18) ^ (d >>> 3),
        p = (0, Yt.rotr)(l, 17) ^ (0, Yt.rotr)(l, 19) ^ (l >>> 10);
      je[a] = (p + je[a - 7] + g + je[a - 16]) | 0;
    }
    let { A: r, B: o, C: i, D: s, E: c, F: u, G: f, H: h } = this;
    for (let a = 0; a < 64; a++) {
      const d = (0, Yt.rotr)(c, 6) ^ (0, Yt.rotr)(c, 11) ^ (0, Yt.rotr)(c, 25),
        l = (h + d + Vp(c, u, f) + Gp[a] + je[a]) | 0,
        p = (((0, Yt.rotr)(r, 2) ^ (0, Yt.rotr)(r, 13) ^ (0, Yt.rotr)(r, 22)) + jp(r, o, i)) | 0;
      (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = i), (i = o), (o = r), (r = (l + p) | 0);
    }
    (r = (r + this.A) | 0),
      (o = (o + this.B) | 0),
      (i = (i + this.C) | 0),
      (s = (s + this.D) | 0),
      (c = (c + this.E) | 0),
      (u = (u + this.F) | 0),
      (f = (f + this.G) | 0),
      (h = (h + this.H) | 0),
      this.set(r, o, i, s, c, u, f, h);
  }
  roundClean() {
    je.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
class qp extends xa {
  constructor() {
    super(),
      (this.A = -1056596264),
      (this.B = 914150663),
      (this.C = 812702999),
      (this.D = -150054599),
      (this.E = -4191439),
      (this.F = 1750603025),
      (this.G = 1694076839),
      (this.H = -1090891868),
      (this.outputLen = 28);
  }
}
ar.sha256 = (0, Yt.wrapConstructor)(() => new xa());
ar.sha224 = (0, Yt.wrapConstructor)(() => new qp());
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.taggedHash =
      t.TAGGED_HASH_PREFIXES =
      t.TAGS =
      t.hash256 =
      t.hash160 =
      t.sha256 =
      t.sha1 =
      t.ripemd160 =
        void 0);
  const { Buffer: e } = an,
    n = ur,
    r = ni,
    o = ar;
  function i(a) {
    return e.from((0, n.ripemd160)(Uint8Array.from(a)));
  }
  t.ripemd160 = i;
  function s(a) {
    return e.from((0, r.sha1)(Uint8Array.from(a)));
  }
  t.sha1 = s;
  function c(a) {
    return e.from((0, o.sha256)(Uint8Array.from(a)));
  }
  t.sha256 = c;
  function u(a) {
    return e.from((0, n.ripemd160)((0, o.sha256)(Uint8Array.from(a))));
  }
  t.hash160 = u;
  function f(a) {
    return e.from((0, o.sha256)((0, o.sha256)(Uint8Array.from(a))));
  }
  (t.hash256 = f),
    (t.TAGS = [
      'BIP0340/challenge',
      'BIP0340/aux',
      'BIP0340/nonce',
      'TapLeaf',
      'TapBranch',
      'TapSighash',
      'TapTweak',
      'KeyAgg list',
      'KeyAgg coefficient',
    ]),
    (t.TAGGED_HASH_PREFIXES = {
      'BIP0340/challenge': e.from([
        123, 181, 45, 122, 159, 239, 88, 50, 62, 177, 191, 122, 64, 125, 179, 130, 210, 243, 242,
        216, 27, 177, 34, 79, 73, 254, 81, 143, 109, 72, 211, 124, 123, 181, 45, 122, 159, 239, 88,
        50, 62, 177, 191, 122, 64, 125, 179, 130, 210, 243, 242, 216, 27, 177, 34, 79, 73, 254, 81,
        143, 109, 72, 211, 124,
      ]),
      'BIP0340/aux': e.from([
        241, 239, 78, 94, 192, 99, 202, 218, 109, 148, 202, 250, 157, 152, 126, 160, 105, 38, 88,
        57, 236, 193, 31, 151, 45, 119, 165, 46, 216, 193, 204, 144, 241, 239, 78, 94, 192, 99, 202,
        218, 109, 148, 202, 250, 157, 152, 126, 160, 105, 38, 88, 57, 236, 193, 31, 151, 45, 119,
        165, 46, 216, 193, 204, 144,
      ]),
      'BIP0340/nonce': e.from([
        7, 73, 119, 52, 167, 155, 203, 53, 91, 155, 140, 125, 3, 79, 18, 28, 244, 52, 215, 62, 247,
        45, 218, 25, 135, 0, 97, 251, 82, 191, 235, 47, 7, 73, 119, 52, 167, 155, 203, 53, 91, 155,
        140, 125, 3, 79, 18, 28, 244, 52, 215, 62, 247, 45, 218, 25, 135, 0, 97, 251, 82, 191, 235,
        47,
      ]),
      TapLeaf: e.from([
        174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38, 56, 211, 95, 28, 181, 64,
        8, 212, 211, 87, 202, 3, 190, 120, 233, 238, 174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75,
        88, 8, 29, 30, 38, 56, 211, 95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120, 233, 238,
      ]),
      TapBranch: e.from([
        25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1, 247, 33, 111, 51, 237,
        130, 176, 145, 70, 52, 144, 208, 91, 245, 22, 160, 21, 25, 65, 161, 242, 229, 110, 185, 95,
        162, 169, 241, 148, 190, 92, 1, 247, 33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91,
        245, 22, 160, 21,
      ]),
      TapSighash: e.from([
        244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97, 237, 61, 149, 253, 102,
        163, 19, 235, 135, 35, 117, 151, 198, 40, 228, 160, 49, 244, 10, 72, 223, 75, 42, 112, 200,
        180, 146, 75, 242, 101, 70, 97, 237, 61, 149, 253, 102, 163, 19, 235, 135, 35, 117, 151,
        198, 40, 228, 160, 49,
      ]),
      TapTweak: e.from([
        232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198, 62, 66, 156, 188, 235,
        21, 217, 64, 251, 181, 197, 161, 244, 175, 87, 197, 233, 232, 15, 225, 99, 156, 156, 160,
        80, 227, 175, 27, 57, 193, 67, 198, 62, 66, 156, 188, 235, 21, 217, 64, 251, 181, 197, 161,
        244, 175, 87, 197, 233,
      ]),
      'KeyAgg list': e.from([
        72, 28, 151, 28, 60, 11, 70, 215, 240, 178, 117, 174, 89, 141, 78, 44, 126, 215, 49, 156,
        89, 74, 92, 110, 199, 158, 160, 212, 153, 2, 148, 240, 72, 28, 151, 28, 60, 11, 70, 215,
        240, 178, 117, 174, 89, 141, 78, 44, 126, 215, 49, 156, 89, 74, 92, 110, 199, 158, 160, 212,
        153, 2, 148, 240,
      ]),
      'KeyAgg coefficient': e.from([
        191, 201, 4, 3, 77, 28, 136, 232, 200, 14, 34, 229, 61, 36, 86, 109, 100, 130, 78, 214, 66,
        114, 129, 192, 145, 0, 249, 77, 205, 82, 201, 129, 191, 201, 4, 3, 77, 28, 136, 232, 200,
        14, 34, 229, 61, 36, 86, 109, 100, 130, 78, 214, 66, 114, 129, 192, 145, 0, 249, 77, 205,
        82, 201, 129,
      ]),
    });
  function h(a, d) {
    return c(e.concat([t.TAGGED_HASH_PREFIXES[a], d]));
  }
  t.taggedHash = h;
})(Ee);
Object.defineProperty(ti, '__esModule', { value: !0 });
ti.p2pkh = void 0;
const Li = Ee,
  zp = lt,
  Yn = Lt,
  kt = St,
  Ie = Dt,
  Wc = Ls,
  Ge = Yn.OPS;
function Xp(t, e) {
  if (!t.address && !t.hash && !t.output && !t.pubkey && !t.input)
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, kt.typeforce)(
      {
        network: kt.typeforce.maybe(kt.typeforce.Object),
        address: kt.typeforce.maybe(kt.typeforce.String),
        hash: kt.typeforce.maybe(kt.typeforce.BufferN(20)),
        output: kt.typeforce.maybe(kt.typeforce.BufferN(25)),
        pubkey: kt.typeforce.maybe(kt.isPoint),
        signature: kt.typeforce.maybe(Yn.isCanonicalScriptSignature),
        input: kt.typeforce.maybe(kt.typeforce.Buffer),
      },
      t
    );
  const n = Ie.value(() => {
      const s = A.from(Wc.decode(t.address)),
        c = s.readUInt8(0),
        u = s.slice(1);
      return { version: c, hash: u };
    }),
    r = Ie.value(() => Yn.decompile(t.input)),
    o = t.network || zp.bitcoin,
    i = { name: 'p2pkh', network: o };
  if (
    (Ie.prop(i, 'address', () => {
      if (!i.hash) return;
      const s = A.allocUnsafe(21);
      return s.writeUInt8(o.pubKeyHash, 0), i.hash.copy(s, 1), Wc.encode(s);
    }),
    Ie.prop(i, 'hash', () => {
      if (t.output) return t.output.slice(3, 23);
      if (t.address) return n().hash;
      if (t.pubkey || i.pubkey) return Li.hash160(t.pubkey || i.pubkey);
    }),
    Ie.prop(i, 'output', () => {
      if (i.hash)
        return Yn.compile([Ge.OP_DUP, Ge.OP_HASH160, i.hash, Ge.OP_EQUALVERIFY, Ge.OP_CHECKSIG]);
    }),
    Ie.prop(i, 'pubkey', () => {
      if (t.input) return r()[1];
    }),
    Ie.prop(i, 'signature', () => {
      if (t.input) return r()[0];
    }),
    Ie.prop(i, 'input', () => {
      if (t.pubkey && t.signature) return Yn.compile([t.signature, t.pubkey]);
    }),
    Ie.prop(i, 'witness', () => {
      if (i.input) return [];
    }),
    e.validate)
  ) {
    let s = A.from([]);
    if (t.address) {
      if (n().version !== o.pubKeyHash) throw new TypeError('Invalid version or Network mismatch');
      if (n().hash.length !== 20) throw new TypeError('Invalid address');
      s = n().hash;
    }
    if (t.hash) {
      if (s.length > 0 && !s.equals(t.hash)) throw new TypeError('Hash mismatch');
      s = t.hash;
    }
    if (t.output) {
      if (
        t.output.length !== 25 ||
        t.output[0] !== Ge.OP_DUP ||
        t.output[1] !== Ge.OP_HASH160 ||
        t.output[2] !== 20 ||
        t.output[23] !== Ge.OP_EQUALVERIFY ||
        t.output[24] !== Ge.OP_CHECKSIG
      )
        throw new TypeError('Output is invalid');
      const c = t.output.slice(3, 23);
      if (s.length > 0 && !s.equals(c)) throw new TypeError('Hash mismatch');
      s = c;
    }
    if (t.pubkey) {
      const c = Li.hash160(t.pubkey);
      if (s.length > 0 && !s.equals(c)) throw new TypeError('Hash mismatch');
      s = c;
    }
    if (t.input) {
      const c = r();
      if (c.length !== 2) throw new TypeError('Input is invalid');
      if (!Yn.isCanonicalScriptSignature(c[0])) throw new TypeError('Input has invalid signature');
      if (!(0, kt.isPoint)(c[1])) throw new TypeError('Input has invalid pubkey');
      if (t.signature && !t.signature.equals(c[0])) throw new TypeError('Signature mismatch');
      if (t.pubkey && !t.pubkey.equals(c[1])) throw new TypeError('Pubkey mismatch');
      const u = Li.hash160(c[1]);
      if (s.length > 0 && !s.equals(u)) throw new TypeError('Hash mismatch');
    }
  }
  return Object.assign(i, t);
}
ti.p2pkh = Xp;
var ri = {};
Object.defineProperty(ri, '__esModule', { value: !0 });
ri.p2sh = void 0;
const Dc = Ee,
  Yp = lt,
  de = Lt,
  j = St,
  he = Dt,
  Vc = Ls,
  Tr = de.OPS;
function Zp(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function Qp(t, e) {
  if (!t.address && !t.hash && !t.output && !t.redeem && !t.input)
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, j.typeforce)(
      {
        network: j.typeforce.maybe(j.typeforce.Object),
        address: j.typeforce.maybe(j.typeforce.String),
        hash: j.typeforce.maybe(j.typeforce.BufferN(20)),
        output: j.typeforce.maybe(j.typeforce.BufferN(23)),
        redeem: j.typeforce.maybe({
          network: j.typeforce.maybe(j.typeforce.Object),
          output: j.typeforce.maybe(j.typeforce.Buffer),
          input: j.typeforce.maybe(j.typeforce.Buffer),
          witness: j.typeforce.maybe(j.typeforce.arrayOf(j.typeforce.Buffer)),
        }),
        input: j.typeforce.maybe(j.typeforce.Buffer),
        witness: j.typeforce.maybe(j.typeforce.arrayOf(j.typeforce.Buffer)),
      },
      t
    );
  let n = t.network;
  n || (n = (t.redeem && t.redeem.network) || Yp.bitcoin);
  const r = { network: n },
    o = he.value(() => {
      const c = A.from(Vc.decode(t.address)),
        u = c.readUInt8(0),
        f = c.slice(1);
      return { version: u, hash: f };
    }),
    i = he.value(() => de.decompile(t.input)),
    s = he.value(() => {
      const c = i(),
        u = c[c.length - 1];
      return {
        network: n,
        output: u === Tr.OP_FALSE ? A.from([]) : u,
        input: de.compile(c.slice(0, -1)),
        witness: t.witness || [],
      };
    });
  if (
    (he.prop(r, 'address', () => {
      if (!r.hash) return;
      const c = A.allocUnsafe(21);
      return c.writeUInt8(r.network.scriptHash, 0), r.hash.copy(c, 1), Vc.encode(c);
    }),
    he.prop(r, 'hash', () => {
      if (t.output) return t.output.slice(2, 22);
      if (t.address) return o().hash;
      if (r.redeem && r.redeem.output) return Dc.hash160(r.redeem.output);
    }),
    he.prop(r, 'output', () => {
      if (r.hash) return de.compile([Tr.OP_HASH160, r.hash, Tr.OP_EQUAL]);
    }),
    he.prop(r, 'redeem', () => {
      if (t.input) return s();
    }),
    he.prop(r, 'input', () => {
      if (!(!t.redeem || !t.redeem.input || !t.redeem.output))
        return de.compile([].concat(de.decompile(t.redeem.input), t.redeem.output));
    }),
    he.prop(r, 'witness', () => {
      if (r.redeem && r.redeem.witness) return r.redeem.witness;
      if (r.input) return [];
    }),
    he.prop(r, 'name', () => {
      const c = ['p2sh'];
      return r.redeem !== void 0 && r.redeem.name !== void 0 && c.push(r.redeem.name), c.join('-');
    }),
    e.validate)
  ) {
    let c = A.from([]);
    if (t.address) {
      if (o().version !== n.scriptHash) throw new TypeError('Invalid version or Network mismatch');
      if (o().hash.length !== 20) throw new TypeError('Invalid address');
      c = o().hash;
    }
    if (t.hash) {
      if (c.length > 0 && !c.equals(t.hash)) throw new TypeError('Hash mismatch');
      c = t.hash;
    }
    if (t.output) {
      if (
        t.output.length !== 23 ||
        t.output[0] !== Tr.OP_HASH160 ||
        t.output[1] !== 20 ||
        t.output[22] !== Tr.OP_EQUAL
      )
        throw new TypeError('Output is invalid');
      const f = t.output.slice(2, 22);
      if (c.length > 0 && !c.equals(f)) throw new TypeError('Hash mismatch');
      c = f;
    }
    const u = (f) => {
      if (f.output) {
        const h = de.decompile(f.output);
        if (!h || h.length < 1) throw new TypeError('Redeem.output too short');
        if (f.output.byteLength > 520)
          throw new TypeError('Redeem.output unspendable if larger than 520 bytes');
        if (de.countNonPushOnlyOPs(h) > 201)
          throw new TypeError('Redeem.output unspendable with more than 201 non-push ops');
        const a = Dc.hash160(f.output);
        if (c.length > 0 && !c.equals(a)) throw new TypeError('Hash mismatch');
        c = a;
      }
      if (f.input) {
        const h = f.input.length > 0,
          a = f.witness && f.witness.length > 0;
        if (!h && !a) throw new TypeError('Empty input');
        if (h && a) throw new TypeError('Input and witness provided');
        if (h) {
          const d = de.decompile(f.input);
          if (!de.isPushOnly(d)) throw new TypeError('Non push-only scriptSig');
        }
      }
    };
    if (t.input) {
      const f = i();
      if (!f || f.length < 1) throw new TypeError('Input too short');
      if (!A.isBuffer(s().output)) throw new TypeError('Input is invalid');
      u(s());
    }
    if (t.redeem) {
      if (t.redeem.network && t.redeem.network !== n) throw new TypeError('Network mismatch');
      if (t.input) {
        const f = s();
        if (t.redeem.output && !t.redeem.output.equals(f.output))
          throw new TypeError('Redeem.output mismatch');
        if (t.redeem.input && !t.redeem.input.equals(f.input))
          throw new TypeError('Redeem.input mismatch');
      }
      u(t.redeem);
    }
    if (t.witness && t.redeem && t.redeem.witness && !Zp(t.redeem.witness, t.witness))
      throw new TypeError('Witness and redeem.witness mismatch');
  }
  return Object.assign(r, t);
}
ri.p2sh = Qp;
var oi = {};
Object.defineProperty(oi, '__esModule', { value: !0 });
oi.p2wpkh = void 0;
const { Buffer: cs } = an,
  Ci = Ee,
  Jp = lt,
  po = Lt,
  st = St,
  qe = Dt,
  Qr = Ne,
  jc = po.OPS,
  td = cs.alloc(0);
function ed(t, e) {
  if (!t.address && !t.hash && !t.output && !t.pubkey && !t.witness)
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, st.typeforce)(
      {
        address: st.typeforce.maybe(st.typeforce.String),
        hash: st.typeforce.maybe(st.typeforce.BufferN(20)),
        input: st.typeforce.maybe(st.typeforce.BufferN(0)),
        network: st.typeforce.maybe(st.typeforce.Object),
        output: st.typeforce.maybe(st.typeforce.BufferN(22)),
        pubkey: st.typeforce.maybe(st.isPoint),
        signature: st.typeforce.maybe(po.isCanonicalScriptSignature),
        witness: st.typeforce.maybe(st.typeforce.arrayOf(st.typeforce.Buffer)),
      },
      t
    );
  const n = qe.value(() => {
      const i = Qr.bech32.decode(t.address),
        s = i.words.shift(),
        c = Qr.bech32.fromWords(i.words);
      return { version: s, prefix: i.prefix, data: cs.from(c) };
    }),
    r = t.network || Jp.bitcoin,
    o = { name: 'p2wpkh', network: r };
  if (
    (qe.prop(o, 'address', () => {
      if (!o.hash) return;
      const i = Qr.bech32.toWords(o.hash);
      return i.unshift(0), Qr.bech32.encode(r.bech32, i);
    }),
    qe.prop(o, 'hash', () => {
      if (t.output) return t.output.slice(2, 22);
      if (t.address) return n().data;
      if (t.pubkey || o.pubkey) return Ci.hash160(t.pubkey || o.pubkey);
    }),
    qe.prop(o, 'output', () => {
      if (o.hash) return po.compile([jc.OP_0, o.hash]);
    }),
    qe.prop(o, 'pubkey', () => {
      if (t.pubkey) return t.pubkey;
      if (t.witness) return t.witness[1];
    }),
    qe.prop(o, 'signature', () => {
      if (t.witness) return t.witness[0];
    }),
    qe.prop(o, 'input', () => {
      if (o.witness) return td;
    }),
    qe.prop(o, 'witness', () => {
      if (t.pubkey && t.signature) return [t.signature, t.pubkey];
    }),
    e.validate)
  ) {
    let i = cs.from([]);
    if (t.address) {
      if (r && r.bech32 !== n().prefix) throw new TypeError('Invalid prefix or Network mismatch');
      if (n().version !== 0) throw new TypeError('Invalid address version');
      if (n().data.length !== 20) throw new TypeError('Invalid address data');
      i = n().data;
    }
    if (t.hash) {
      if (i.length > 0 && !i.equals(t.hash)) throw new TypeError('Hash mismatch');
      i = t.hash;
    }
    if (t.output) {
      if (t.output.length !== 22 || t.output[0] !== jc.OP_0 || t.output[1] !== 20)
        throw new TypeError('Output is invalid');
      if (i.length > 0 && !i.equals(t.output.slice(2))) throw new TypeError('Hash mismatch');
      i = t.output.slice(2);
    }
    if (t.pubkey) {
      const s = Ci.hash160(t.pubkey);
      if (i.length > 0 && !i.equals(s)) throw new TypeError('Hash mismatch');
      if (((i = s), !(0, st.isPoint)(t.pubkey) || t.pubkey.length !== 33))
        throw new TypeError('Invalid pubkey for p2wpkh');
    }
    if (t.witness) {
      if (t.witness.length !== 2) throw new TypeError('Witness is invalid');
      if (!po.isCanonicalScriptSignature(t.witness[0]))
        throw new TypeError('Witness has invalid signature');
      if (!(0, st.isPoint)(t.witness[1]) || t.witness[1].length !== 33)
        throw new TypeError('Witness has invalid pubkey');
      if (t.signature && !t.signature.equals(t.witness[0]))
        throw new TypeError('Signature mismatch');
      if (t.pubkey && !t.pubkey.equals(t.witness[1])) throw new TypeError('Pubkey mismatch');
      const s = Ci.hash160(t.witness[1]);
      if (i.length > 0 && !i.equals(s)) throw new TypeError('Hash mismatch');
    }
  }
  return Object.assign(o, t);
}
oi.p2wpkh = ed;
var ii = {};
Object.defineProperty(ii, '__esModule', { value: !0 });
ii.p2wsh = void 0;
const { Buffer: Ao } = an,
  Gc = Ee,
  nd = lt,
  Pe = Lt,
  V = St,
  ve = Dt,
  Jr = Ne,
  qc = Pe.OPS,
  $i = Ao.alloc(0);
function rd(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function to(t) {
  return !!(Ao.isBuffer(t) && t.length === 65 && t[0] === 4 && (0, V.isPoint)(t));
}
function od(t, e) {
  if (!t.address && !t.hash && !t.output && !t.redeem && !t.witness)
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, V.typeforce)(
      {
        network: V.typeforce.maybe(V.typeforce.Object),
        address: V.typeforce.maybe(V.typeforce.String),
        hash: V.typeforce.maybe(V.typeforce.BufferN(32)),
        output: V.typeforce.maybe(V.typeforce.BufferN(34)),
        redeem: V.typeforce.maybe({
          input: V.typeforce.maybe(V.typeforce.Buffer),
          network: V.typeforce.maybe(V.typeforce.Object),
          output: V.typeforce.maybe(V.typeforce.Buffer),
          witness: V.typeforce.maybe(V.typeforce.arrayOf(V.typeforce.Buffer)),
        }),
        input: V.typeforce.maybe(V.typeforce.BufferN(0)),
        witness: V.typeforce.maybe(V.typeforce.arrayOf(V.typeforce.Buffer)),
      },
      t
    );
  const n = ve.value(() => {
      const s = Jr.bech32.decode(t.address),
        c = s.words.shift(),
        u = Jr.bech32.fromWords(s.words);
      return { version: c, prefix: s.prefix, data: Ao.from(u) };
    }),
    r = ve.value(() => Pe.decompile(t.redeem.input));
  let o = t.network;
  o || (o = (t.redeem && t.redeem.network) || nd.bitcoin);
  const i = { network: o };
  if (
    (ve.prop(i, 'address', () => {
      if (!i.hash) return;
      const s = Jr.bech32.toWords(i.hash);
      return s.unshift(0), Jr.bech32.encode(o.bech32, s);
    }),
    ve.prop(i, 'hash', () => {
      if (t.output) return t.output.slice(2);
      if (t.address) return n().data;
      if (i.redeem && i.redeem.output) return Gc.sha256(i.redeem.output);
    }),
    ve.prop(i, 'output', () => {
      if (i.hash) return Pe.compile([qc.OP_0, i.hash]);
    }),
    ve.prop(i, 'redeem', () => {
      if (t.witness)
        return {
          output: t.witness[t.witness.length - 1],
          input: $i,
          witness: t.witness.slice(0, -1),
        };
    }),
    ve.prop(i, 'input', () => {
      if (i.witness) return $i;
    }),
    ve.prop(i, 'witness', () => {
      if (
        t.redeem &&
        t.redeem.input &&
        t.redeem.input.length > 0 &&
        t.redeem.output &&
        t.redeem.output.length > 0
      ) {
        const s = Pe.toStack(r());
        return (
          (i.redeem = Object.assign({ witness: s }, t.redeem)),
          (i.redeem.input = $i),
          [].concat(s, t.redeem.output)
        );
      }
      if (t.redeem && t.redeem.output && t.redeem.witness)
        return [].concat(t.redeem.witness, t.redeem.output);
    }),
    ve.prop(i, 'name', () => {
      const s = ['p2wsh'];
      return i.redeem !== void 0 && i.redeem.name !== void 0 && s.push(i.redeem.name), s.join('-');
    }),
    e.validate)
  ) {
    let s = Ao.from([]);
    if (t.address) {
      if (n().prefix !== o.bech32) throw new TypeError('Invalid prefix or Network mismatch');
      if (n().version !== 0) throw new TypeError('Invalid address version');
      if (n().data.length !== 32) throw new TypeError('Invalid address data');
      s = n().data;
    }
    if (t.hash) {
      if (s.length > 0 && !s.equals(t.hash)) throw new TypeError('Hash mismatch');
      s = t.hash;
    }
    if (t.output) {
      if (t.output.length !== 34 || t.output[0] !== qc.OP_0 || t.output[1] !== 32)
        throw new TypeError('Output is invalid');
      const c = t.output.slice(2);
      if (s.length > 0 && !s.equals(c)) throw new TypeError('Hash mismatch');
      s = c;
    }
    if (t.redeem) {
      if (t.redeem.network && t.redeem.network !== o) throw new TypeError('Network mismatch');
      if (
        t.redeem.input &&
        t.redeem.input.length > 0 &&
        t.redeem.witness &&
        t.redeem.witness.length > 0
      )
        throw new TypeError('Ambiguous witness source');
      if (t.redeem.output) {
        const c = Pe.decompile(t.redeem.output);
        if (!c || c.length < 1) throw new TypeError('Redeem.output is invalid');
        if (t.redeem.output.byteLength > 3600)
          throw new TypeError('Redeem.output unspendable if larger than 3600 bytes');
        if (Pe.countNonPushOnlyOPs(c) > 201)
          throw new TypeError('Redeem.output unspendable with more than 201 non-push ops');
        const u = Gc.sha256(t.redeem.output);
        if (s.length > 0 && !s.equals(u)) throw new TypeError('Hash mismatch');
        s = u;
      }
      if (t.redeem.input && !Pe.isPushOnly(r())) throw new TypeError('Non push-only scriptSig');
      if (t.witness && t.redeem.witness && !rd(t.witness, t.redeem.witness))
        throw new TypeError('Witness and redeem.witness mismatch');
      if (
        (t.redeem.input && r().some(to)) ||
        (t.redeem.output && (Pe.decompile(t.redeem.output) || []).some(to))
      )
        throw new TypeError('redeem.input or redeem.output contains uncompressed pubkey');
    }
    if (t.witness && t.witness.length > 0) {
      const c = t.witness[t.witness.length - 1];
      if (t.redeem && t.redeem.output && !t.redeem.output.equals(c))
        throw new TypeError('Witness and redeem.output mismatch');
      if (t.witness.some(to) || (Pe.decompile(c) || []).some(to))
        throw new TypeError('Witness contains uncompressed pubkey');
    }
  }
  return Object.assign(i, t);
}
ii.p2wsh = od;
var si = {},
  sn = {};
Object.defineProperty(sn, '__esModule', { value: !0 });
sn.getEccLib = sn.initEccLib = void 0;
const Ur = {};
function id(t) {
  t ? t !== Ur.eccLib && (cd(t), (Ur.eccLib = t)) : (Ur.eccLib = t);
}
sn.initEccLib = id;
function sd() {
  if (!Ur.eccLib)
    throw new Error(
      'No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance'
    );
  return Ur.eccLib;
}
sn.getEccLib = sd;
const ke = (t) => A.from(t, 'hex');
function cd(t) {
  jt(typeof t.isXOnlyPoint == 'function'),
    jt(t.isXOnlyPoint(ke('79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798'))),
    jt(t.isXOnlyPoint(ke('fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e'))),
    jt(t.isXOnlyPoint(ke('f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9'))),
    jt(t.isXOnlyPoint(ke('0000000000000000000000000000000000000000000000000000000000000001'))),
    jt(!t.isXOnlyPoint(ke('0000000000000000000000000000000000000000000000000000000000000000'))),
    jt(!t.isXOnlyPoint(ke('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'))),
    jt(typeof t.xOnlyPointAddTweak == 'function'),
    ud.forEach((e) => {
      const n = t.xOnlyPointAddTweak(ke(e.pubkey), ke(e.tweak));
      e.result === null
        ? jt(n === null)
        : (jt(n !== null),
          jt(n.parity === e.parity),
          jt(A.from(n.xOnlyPubkey).equals(ke(e.result))));
    });
}
function jt(t) {
  if (!t) throw new Error('ecc library invalid');
}
const ud = [
  {
    pubkey: '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
    tweak: 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140',
    parity: -1,
    result: null,
  },
  {
    pubkey: '1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b',
    tweak: 'a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac',
    parity: 1,
    result: 'e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf',
  },
  {
    pubkey: '2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991',
    tweak: '823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47',
    parity: 0,
    result: '9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c',
  },
];
var ci = {},
  at = {},
  us = Nh.Buffer,
  ad = 9007199254740991;
function qs(t) {
  if (t < 0 || t > ad || t % 1 !== 0) throw new RangeError('value out of range');
}
function kr(t, e, n) {
  if ((qs(t), e || (e = us.allocUnsafe(Oa(t))), !us.isBuffer(e)))
    throw new TypeError('buffer must be a Buffer instance');
  return (
    n || (n = 0),
    t < 253
      ? (e.writeUInt8(t, n), (kr.bytes = 1))
      : t <= 65535
        ? (e.writeUInt8(253, n), e.writeUInt16LE(t, n + 1), (kr.bytes = 3))
        : t <= 4294967295
          ? (e.writeUInt8(254, n), e.writeUInt32LE(t, n + 1), (kr.bytes = 5))
          : (e.writeUInt8(255, n),
            e.writeUInt32LE(t >>> 0, n + 1),
            e.writeUInt32LE((t / 4294967296) | 0, n + 5),
            (kr.bytes = 9)),
    e
  );
}
function Pr(t, e) {
  if (!us.isBuffer(t)) throw new TypeError('buffer must be a Buffer instance');
  e || (e = 0);
  var n = t.readUInt8(e);
  if (n < 253) return (Pr.bytes = 1), n;
  if (n === 253) return (Pr.bytes = 3), t.readUInt16LE(e + 1);
  if (n === 254) return (Pr.bytes = 5), t.readUInt32LE(e + 1);
  Pr.bytes = 9;
  var r = t.readUInt32LE(e + 1),
    o = t.readUInt32LE(e + 5),
    i = o * 4294967296 + r;
  return qs(i), i;
}
function Oa(t) {
  return qs(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9;
}
var fd = { encode: kr, decode: Pr, encodingLength: Oa };
Object.defineProperty(at, '__esModule', { value: !0 });
at.BufferReader =
  at.BufferWriter =
  at.cloneBuffer =
  at.reverseBuffer =
  at.writeUInt64LE =
  at.readUInt64LE =
  at.varuint =
    void 0;
const Sn = St,
  { typeforce: Ba } = Sn,
  $r = fd;
at.varuint = $r;
function Ua(t, e) {
  if (typeof t != 'number') throw new Error('cannot write a non-number as a number');
  if (t < 0) throw new Error('specified a negative value for writing an unsigned value');
  if (t > e) throw new Error('RangeError: value out of range');
  if (Math.floor(t) !== t) throw new Error('value has a fractional component');
}
function Na(t, e) {
  const n = t.readUInt32LE(e);
  let r = t.readUInt32LE(e + 4);
  return (r *= 4294967296), Ua(r + n, 9007199254740991), r + n;
}
at.readUInt64LE = Na;
function Ha(t, e, n) {
  return (
    Ua(e, 9007199254740991),
    t.writeInt32LE(e & -1, n),
    t.writeUInt32LE(Math.floor(e / 4294967296), n + 4),
    n + 8
  );
}
at.writeUInt64LE = Ha;
function hd(t) {
  if (t.length < 1) return t;
  let e = t.length - 1,
    n = 0;
  for (let r = 0; r < t.length / 2; r++) (n = t[r]), (t[r] = t[e]), (t[e] = n), e--;
  return t;
}
at.reverseBuffer = hd;
function ld(t) {
  const e = A.allocUnsafe(t.length);
  return t.copy(e), e;
}
at.cloneBuffer = ld;
class zs {
  static withCapacity(e) {
    return new zs(A.alloc(e));
  }
  constructor(e, n = 0) {
    (this.buffer = e), (this.offset = n), Ba(Sn.tuple(Sn.Buffer, Sn.UInt32), [e, n]);
  }
  writeUInt8(e) {
    this.offset = this.buffer.writeUInt8(e, this.offset);
  }
  writeInt32(e) {
    this.offset = this.buffer.writeInt32LE(e, this.offset);
  }
  writeUInt32(e) {
    this.offset = this.buffer.writeUInt32LE(e, this.offset);
  }
  writeUInt64(e) {
    this.offset = Ha(this.buffer, e, this.offset);
  }
  writeVarInt(e) {
    $r.encode(e, this.buffer, this.offset), (this.offset += $r.encode.bytes);
  }
  writeSlice(e) {
    if (this.buffer.length < this.offset + e.length)
      throw new Error('Cannot write slice out of bounds');
    this.offset += e.copy(this.buffer, this.offset);
  }
  writeVarSlice(e) {
    this.writeVarInt(e.length), this.writeSlice(e);
  }
  writeVector(e) {
    this.writeVarInt(e.length), e.forEach((n) => this.writeVarSlice(n));
  }
  end() {
    if (this.buffer.length === this.offset) return this.buffer;
    throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
  }
}
at.BufferWriter = zs;
class pd {
  constructor(e, n = 0) {
    (this.buffer = e), (this.offset = n), Ba(Sn.tuple(Sn.Buffer, Sn.UInt32), [e, n]);
  }
  readUInt8() {
    const e = this.buffer.readUInt8(this.offset);
    return this.offset++, e;
  }
  readInt32() {
    const e = this.buffer.readInt32LE(this.offset);
    return (this.offset += 4), e;
  }
  readUInt32() {
    const e = this.buffer.readUInt32LE(this.offset);
    return (this.offset += 4), e;
  }
  readUInt64() {
    const e = Na(this.buffer, this.offset);
    return (this.offset += 8), e;
  }
  readVarInt() {
    const e = $r.decode(this.buffer, this.offset);
    return (this.offset += $r.decode.bytes), e;
  }
  readSlice(e) {
    if (this.buffer.length < this.offset + e) throw new Error('Cannot read slice out of bounds');
    const n = this.buffer.slice(this.offset, this.offset + e);
    return (this.offset += e), n;
  }
  readVarSlice() {
    return this.readSlice(this.readVarInt());
  }
  readVector() {
    const e = this.readVarInt(),
      n = [];
    for (let r = 0; r < e; r++) n.push(this.readVarSlice());
    return n;
  }
}
at.BufferReader = pd;
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.tweakKey =
      t.tapTweakHash =
      t.tapleafHash =
      t.findScriptPath =
      t.toHashTree =
      t.rootHashFromPath =
      t.MAX_TAPTREE_DEPTH =
      t.LEAF_VERSION_TAPSCRIPT =
        void 0);
  const e = an,
    n = sn,
    r = Ee,
    o = at,
    i = St;
  (t.LEAF_VERSION_TAPSCRIPT = 192), (t.MAX_TAPTREE_DEPTH = 128);
  const s = (p) => 'left' in p && 'right' in p;
  function c(p, b) {
    if (p.length < 33)
      throw new TypeError(
        `The control-block length is too small. Got ${p.length}, expected min 33.`
      );
    const m = (p.length - 33) / 32;
    let I = b;
    for (let _ = 0; _ < m; _++) {
      const w = p.slice(33 + 32 * _, 65 + 32 * _);
      I.compare(w) < 0 ? (I = l(I, w)) : (I = l(w, I));
    }
    return I;
  }
  t.rootHashFromPath = c;
  function u(p) {
    if ((0, i.isTapleaf)(p)) return { hash: h(p) };
    const b = [u(p[0]), u(p[1])];
    b.sort((_, w) => _.hash.compare(w.hash));
    const [m, I] = b;
    return { hash: l(m.hash, I.hash), left: m, right: I };
  }
  t.toHashTree = u;
  function f(p, b) {
    if (s(p)) {
      const m = f(p.left, b);
      if (m !== void 0) return [...m, p.right.hash];
      const I = f(p.right, b);
      if (I !== void 0) return [...I, p.left.hash];
    } else if (p.hash.equals(b)) return [];
  }
  t.findScriptPath = f;
  function h(p) {
    const b = p.version || t.LEAF_VERSION_TAPSCRIPT;
    return r.taggedHash('TapLeaf', e.Buffer.concat([e.Buffer.from([b]), g(p.output)]));
  }
  t.tapleafHash = h;
  function a(p, b) {
    return r.taggedHash('TapTweak', e.Buffer.concat(b ? [p, b] : [p]));
  }
  t.tapTweakHash = a;
  function d(p, b) {
    if (!e.Buffer.isBuffer(p) || p.length !== 32 || (b && b.length !== 32)) return null;
    const m = a(p, b),
      I = (0, n.getEccLib)().xOnlyPointAddTweak(p, m);
    return !I || I.xOnlyPubkey === null
      ? null
      : { parity: I.parity, x: e.Buffer.from(I.xOnlyPubkey) };
  }
  t.tweakKey = d;
  function l(p, b) {
    return r.taggedHash('TapBranch', e.Buffer.concat([p, b]));
  }
  function g(p) {
    const b = o.varuint.encodingLength(p.length),
      m = e.Buffer.allocUnsafe(b);
    return o.varuint.encode(p.length, m), e.Buffer.concat([m, p]);
  }
})(ci);
Object.defineProperty(si, '__esModule', { value: !0 });
si.p2tr = void 0;
const eo = an,
  dd = lt,
  as = Lt,
  N = St,
  zc = sn,
  Ct = ci,
  Gt = Dt,
  no = Ne,
  Xc = as.OPS,
  Yc = 1,
  yd = 80;
function wd(t, e) {
  if (
    !t.address &&
    !t.output &&
    !t.pubkey &&
    !t.internalPubkey &&
    !(t.witness && t.witness.length > 1)
  )
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, N.typeforce)(
      {
        address: N.typeforce.maybe(N.typeforce.String),
        input: N.typeforce.maybe(N.typeforce.BufferN(0)),
        network: N.typeforce.maybe(N.typeforce.Object),
        output: N.typeforce.maybe(N.typeforce.BufferN(34)),
        internalPubkey: N.typeforce.maybe(N.typeforce.BufferN(32)),
        hash: N.typeforce.maybe(N.typeforce.BufferN(32)),
        pubkey: N.typeforce.maybe(N.typeforce.BufferN(32)),
        signature: N.typeforce.maybe(
          N.typeforce.anyOf(N.typeforce.BufferN(64), N.typeforce.BufferN(65))
        ),
        witness: N.typeforce.maybe(N.typeforce.arrayOf(N.typeforce.Buffer)),
        scriptTree: N.typeforce.maybe(N.isTaptree),
        redeem: N.typeforce.maybe({
          output: N.typeforce.maybe(N.typeforce.Buffer),
          redeemVersion: N.typeforce.maybe(N.typeforce.Number),
          witness: N.typeforce.maybe(N.typeforce.arrayOf(N.typeforce.Buffer)),
        }),
        redeemVersion: N.typeforce.maybe(N.typeforce.Number),
      },
      t
    );
  const n = Gt.value(() => {
      const c = no.bech32m.decode(t.address),
        u = c.words.shift(),
        f = no.bech32m.fromWords(c.words);
      return { version: u, prefix: c.prefix, data: eo.Buffer.from(f) };
    }),
    r = Gt.value(() => {
      if (!(!t.witness || !t.witness.length))
        return t.witness.length >= 2 && t.witness[t.witness.length - 1][0] === yd
          ? t.witness.slice(0, -1)
          : t.witness.slice();
    }),
    o = Gt.value(() => {
      if (t.scriptTree) return (0, Ct.toHashTree)(t.scriptTree);
      if (t.hash) return { hash: t.hash };
    }),
    i = t.network || dd.bitcoin,
    s = { name: 'p2tr', network: i };
  if (
    (Gt.prop(s, 'address', () => {
      if (!s.pubkey) return;
      const c = no.bech32m.toWords(s.pubkey);
      return c.unshift(Yc), no.bech32m.encode(i.bech32, c);
    }),
    Gt.prop(s, 'hash', () => {
      const c = o();
      if (c) return c.hash;
      const u = r();
      if (u && u.length > 1) {
        const f = u[u.length - 1],
          h = f[0] & N.TAPLEAF_VERSION_MASK,
          a = u[u.length - 2],
          d = (0, Ct.tapleafHash)({ output: a, version: h });
        return (0, Ct.rootHashFromPath)(f, d);
      }
      return null;
    }),
    Gt.prop(s, 'output', () => {
      if (s.pubkey) return as.compile([Xc.OP_1, s.pubkey]);
    }),
    Gt.prop(s, 'redeemVersion', () =>
      t.redeemVersion
        ? t.redeemVersion
        : t.redeem && t.redeem.redeemVersion !== void 0 && t.redeem.redeemVersion !== null
          ? t.redeem.redeemVersion
          : Ct.LEAF_VERSION_TAPSCRIPT
    ),
    Gt.prop(s, 'redeem', () => {
      const c = r();
      if (!(!c || c.length < 2))
        return {
          output: c[c.length - 2],
          witness: c.slice(0, -2),
          redeemVersion: c[c.length - 1][0] & N.TAPLEAF_VERSION_MASK,
        };
    }),
    Gt.prop(s, 'pubkey', () => {
      if (t.pubkey) return t.pubkey;
      if (t.output) return t.output.slice(2);
      if (t.address) return n().data;
      if (s.internalPubkey) {
        const c = (0, Ct.tweakKey)(s.internalPubkey, s.hash);
        if (c) return c.x;
      }
    }),
    Gt.prop(s, 'internalPubkey', () => {
      if (t.internalPubkey) return t.internalPubkey;
      const c = r();
      if (c && c.length > 1) return c[c.length - 1].slice(1, 33);
    }),
    Gt.prop(s, 'signature', () => {
      if (t.signature) return t.signature;
      const c = r();
      if (!(!c || c.length !== 1)) return c[0];
    }),
    Gt.prop(s, 'witness', () => {
      if (t.witness) return t.witness;
      const c = o();
      if (c && t.redeem && t.redeem.output && t.internalPubkey) {
        const u = (0, Ct.tapleafHash)({ output: t.redeem.output, version: s.redeemVersion }),
          f = (0, Ct.findScriptPath)(c, u);
        if (!f) return;
        const h = (0, Ct.tweakKey)(t.internalPubkey, c.hash);
        if (!h) return;
        const a = eo.Buffer.concat(
          [eo.Buffer.from([s.redeemVersion | h.parity]), t.internalPubkey].concat(f)
        );
        return [t.redeem.output, a];
      }
      if (t.signature) return [t.signature];
    }),
    e.validate)
  ) {
    let c = eo.Buffer.from([]);
    if (t.address) {
      if (i && i.bech32 !== n().prefix) throw new TypeError('Invalid prefix or Network mismatch');
      if (n().version !== Yc) throw new TypeError('Invalid address version');
      if (n().data.length !== 32) throw new TypeError('Invalid address data');
      c = n().data;
    }
    if (t.pubkey) {
      if (c.length > 0 && !c.equals(t.pubkey)) throw new TypeError('Pubkey mismatch');
      c = t.pubkey;
    }
    if (t.output) {
      if (t.output.length !== 34 || t.output[0] !== Xc.OP_1 || t.output[1] !== 32)
        throw new TypeError('Output is invalid');
      if (c.length > 0 && !c.equals(t.output.slice(2))) throw new TypeError('Pubkey mismatch');
      c = t.output.slice(2);
    }
    if (t.internalPubkey) {
      const h = (0, Ct.tweakKey)(t.internalPubkey, s.hash);
      if (c.length > 0 && !c.equals(h.x)) throw new TypeError('Pubkey mismatch');
      c = h.x;
    }
    if (c && c.length && !(0, zc.getEccLib)().isXOnlyPoint(c))
      throw new TypeError('Invalid pubkey for p2tr');
    const u = o();
    if (t.hash && u && !t.hash.equals(u.hash)) throw new TypeError('Hash mismatch');
    if (t.redeem && t.redeem.output && u) {
      const h = (0, Ct.tapleafHash)({ output: t.redeem.output, version: s.redeemVersion });
      if (!(0, Ct.findScriptPath)(u, h)) throw new TypeError('Redeem script not in tree');
    }
    const f = r();
    if (t.redeem && s.redeem) {
      if (t.redeem.redeemVersion && t.redeem.redeemVersion !== s.redeem.redeemVersion)
        throw new TypeError('Redeem.redeemVersion and witness mismatch');
      if (t.redeem.output) {
        if (as.decompile(t.redeem.output).length === 0)
          throw new TypeError('Redeem.output is invalid');
        if (s.redeem.output && !t.redeem.output.equals(s.redeem.output))
          throw new TypeError('Redeem.output and witness mismatch');
      }
      if (t.redeem.witness && s.redeem.witness && !gd(t.redeem.witness, s.redeem.witness))
        throw new TypeError('Redeem.witness and witness mismatch');
    }
    if (f && f.length)
      if (f.length === 1) {
        if (t.signature && !t.signature.equals(f[0])) throw new TypeError('Signature mismatch');
      } else {
        const h = f[f.length - 1];
        if (h.length < 33)
          throw new TypeError(
            `The control-block length is too small. Got ${h.length}, expected min 33.`
          );
        if ((h.length - 33) % 32 !== 0)
          throw new TypeError(`The control-block length of ${h.length} is incorrect!`);
        const a = (h.length - 33) / 32;
        if (a > 128)
          throw new TypeError(`The script path is too long. Got ${a}, expected max 128.`);
        const d = h.slice(1, 33);
        if (t.internalPubkey && !t.internalPubkey.equals(d))
          throw new TypeError('Internal pubkey mismatch');
        if (!(0, zc.getEccLib)().isXOnlyPoint(d))
          throw new TypeError('Invalid internalPubkey for p2tr witness');
        const l = h[0] & N.TAPLEAF_VERSION_MASK,
          g = f[f.length - 2],
          p = (0, Ct.tapleafHash)({ output: g, version: l }),
          b = (0, Ct.rootHashFromPath)(h, p),
          m = (0, Ct.tweakKey)(d, b);
        if (!m) throw new TypeError('Invalid outputKey for p2tr witness');
        if (c.length && !c.equals(m.x)) throw new TypeError('Pubkey mismatch for p2tr witness');
        if (m.parity !== (h[0] & 1)) throw new Error('Incorrect parity');
      }
  }
  return Object.assign(s, t);
}
si.p2tr = wd;
function gd(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.p2tr = t.p2wsh = t.p2wpkh = t.p2sh = t.p2pkh = t.p2pk = t.p2ms = t.embed = void 0);
  const e = Zo;
  Object.defineProperty(t, 'embed', {
    enumerable: !0,
    get: function () {
      return e.p2data;
    },
  });
  const n = Qo;
  Object.defineProperty(t, 'p2ms', {
    enumerable: !0,
    get: function () {
      return n.p2ms;
    },
  });
  const r = Jo;
  Object.defineProperty(t, 'p2pk', {
    enumerable: !0,
    get: function () {
      return r.p2pk;
    },
  });
  const o = ti;
  Object.defineProperty(t, 'p2pkh', {
    enumerable: !0,
    get: function () {
      return o.p2pkh;
    },
  });
  const i = ri;
  Object.defineProperty(t, 'p2sh', {
    enumerable: !0,
    get: function () {
      return i.p2sh;
    },
  });
  const s = oi;
  Object.defineProperty(t, 'p2wpkh', {
    enumerable: !0,
    get: function () {
      return s.p2wpkh;
    },
  });
  const c = ii;
  Object.defineProperty(t, 'p2wsh', {
    enumerable: !0,
    get: function () {
      return c.p2wsh;
    },
  });
  const u = si;
  Object.defineProperty(t, 'p2tr', {
    enumerable: !0,
    get: function () {
      return u.p2tr;
    },
  });
})(pr);
Object.defineProperty(Ut, '__esModule', { value: !0 });
Ut.toOutputScript =
  Sd =
  Ut.fromOutputScript =
  Ut.toBech32 =
  Ut.toBase58Check =
  Ut.fromBech32 =
  Ut.fromBase58Check =
    void 0;
const La = lt,
  be = pr,
  Ca = Lt,
  ro = St,
  tr = Ne,
  $a = Ls,
  Ra = 40,
  Fa = 2,
  Ka = 16,
  Ma = 2,
  Wa = 80,
  Da =
    'WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.';
function bd(t, e) {
  const n = t.slice(2);
  if (n.length < Fa || n.length > Ra)
    throw new TypeError('Invalid program length for segwit address');
  const r = t[0] - Wa;
  if (r < Ma || r > Ka) throw new TypeError('Invalid version for segwit address');
  if (t[1] !== n.length) throw new TypeError('Invalid script for segwit address');
  return console.warn(Da), Ga(n, r, e.bech32);
}
function Va(t) {
  const e = A.from($a.decode(t));
  if (e.length < 21) throw new TypeError(t + ' is too short');
  if (e.length > 21) throw new TypeError(t + ' is too long');
  const n = e.readUInt8(0),
    r = e.slice(1);
  return { version: n, hash: r };
}
Ut.fromBase58Check = Va;
function ja(t) {
  let e, n;
  try {
    e = tr.bech32.decode(t);
  } catch {}
  if (e) {
    if (((n = e.words[0]), n !== 0)) throw new TypeError(t + ' uses wrong encoding');
  } else if (((e = tr.bech32m.decode(t)), (n = e.words[0]), n === 0))
    throw new TypeError(t + ' uses wrong encoding');
  const r = tr.bech32.fromWords(e.words.slice(1));
  return { version: n, prefix: e.prefix, data: A.from(r) };
}
Ut.fromBech32 = ja;
function Ed(t, e) {
  (0, ro.typeforce)((0, ro.tuple)(ro.Hash160bit, ro.UInt8), arguments);
  const n = A.allocUnsafe(21);
  return n.writeUInt8(e, 0), t.copy(n, 1), $a.encode(n);
}
Ut.toBase58Check = Ed;
function Ga(t, e, n) {
  const r = tr.bech32.toWords(t);
  return r.unshift(e), e === 0 ? tr.bech32.encode(n, r) : tr.bech32m.encode(n, r);
}
Ut.toBech32 = Ga;
function md(t, e) {
  e = e || La.bitcoin;
  try {
    return be.p2pkh({ output: t, network: e }).address;
  } catch {}
  try {
    return be.p2sh({ output: t, network: e }).address;
  } catch {}
  try {
    return be.p2wpkh({ output: t, network: e }).address;
  } catch {}
  try {
    return be.p2wsh({ output: t, network: e }).address;
  } catch {}
  try {
    return be.p2tr({ output: t, network: e }).address;
  } catch {}
  try {
    return bd(t, e);
  } catch {}
  throw new Error(Ca.toASM(t) + ' has no matching Address');
}
var Sd = (Ut.fromOutputScript = md);
function Td(t, e) {
  e = e || La.bitcoin;
  let n, r;
  try {
    n = Va(t);
  } catch {}
  if (n) {
    if (n.version === e.pubKeyHash) return be.p2pkh({ hash: n.hash }).output;
    if (n.version === e.scriptHash) return be.p2sh({ hash: n.hash }).output;
  } else {
    try {
      r = ja(t);
    } catch {}
    if (r) {
      if (r.prefix !== e.bech32) throw new Error(t + ' has an invalid prefix');
      if (r.version === 0) {
        if (r.data.length === 20) return be.p2wpkh({ hash: r.data }).output;
        if (r.data.length === 32) return be.p2wsh({ hash: r.data }).output;
      } else if (r.version === 1) {
        if (r.data.length === 32) return be.p2tr({ pubkey: r.data }).output;
      } else if (r.version >= Ma && r.version <= Ka && r.data.length >= Fa && r.data.length <= Ra)
        return console.warn(Da), Ca.compile([r.version + Wa, r.data]);
    }
  }
  throw new Error(t + ' has no matching Script');
}
Ut.toOutputScript = Td;
var ui = {},
  ai = {};
Object.defineProperty(ai, '__esModule', { value: !0 });
ai.fastMerkleRoot = void 0;
function _d(t, e) {
  if (!Array.isArray(t)) throw TypeError('Expected values Array');
  if (typeof e != 'function') throw TypeError('Expected digest Function');
  let n = t.length;
  const r = t.concat();
  for (; n > 1; ) {
    let o = 0;
    for (let i = 0; i < n; i += 2, ++o) {
      const s = r[i],
        c = i + 1 === n ? s : r[i + 1],
        u = A.concat([s, c]);
      r[o] = e(u);
    }
    n = o;
  }
  return r[0];
}
ai.fastMerkleRoot = _d;
var hn = {};
Object.defineProperty(hn, '__esModule', { value: !0 });
hn.Transaction = void 0;
const { Buffer: _t } = an,
  rt = at,
  Pt = Ee,
  Zc = Lt,
  Ad = Lt,
  H = St,
  { typeforce: le } = H;
function ye(t) {
  const e = t.length;
  return rt.varuint.encodingLength(e) + e;
}
function Id(t) {
  const e = t.length;
  return rt.varuint.encodingLength(e) + t.reduce((n, r) => n + ye(r), 0);
}
const Ze = _t.allocUnsafe(0),
  Qc = [],
  Ri = _t.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex'),
  Jc = _t.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'),
  vd = _t.from('ffffffffffffffff', 'hex'),
  kd = { script: Ze, valueBuffer: vd };
function Pd(t) {
  return t.value !== void 0;
}
let se = class K {
  constructor() {
    (this.version = 1), (this.locktime = 0), (this.ins = []), (this.outs = []);
  }
  static fromBuffer(e, n) {
    const r = new rt.BufferReader(e),
      o = new K();
    o.version = r.readInt32();
    const i = r.readUInt8(),
      s = r.readUInt8();
    let c = !1;
    i === K.ADVANCED_TRANSACTION_MARKER && s === K.ADVANCED_TRANSACTION_FLAG
      ? (c = !0)
      : (r.offset -= 2);
    const u = r.readVarInt();
    for (let h = 0; h < u; ++h)
      o.ins.push({
        hash: r.readSlice(32),
        index: r.readUInt32(),
        script: r.readVarSlice(),
        sequence: r.readUInt32(),
        witness: Qc,
      });
    const f = r.readVarInt();
    for (let h = 0; h < f; ++h) o.outs.push({ value: r.readUInt64(), script: r.readVarSlice() });
    if (c) {
      for (let h = 0; h < u; ++h) o.ins[h].witness = r.readVector();
      if (!o.hasWitnesses()) throw new Error('Transaction has superfluous witness data');
    }
    if (((o.locktime = r.readUInt32()), n)) return o;
    if (r.offset !== e.length) throw new Error('Transaction has unexpected data');
    return o;
  }
  static fromHex(e) {
    return K.fromBuffer(_t.from(e, 'hex'), !1);
  }
  static isCoinbaseHash(e) {
    le(H.Hash256bit, e);
    for (let n = 0; n < 32; ++n) if (e[n] !== 0) return !1;
    return !0;
  }
  isCoinbase() {
    return this.ins.length === 1 && K.isCoinbaseHash(this.ins[0].hash);
  }
  addInput(e, n, r, o) {
    return (
      le(H.tuple(H.Hash256bit, H.UInt32, H.maybe(H.UInt32), H.maybe(H.Buffer)), arguments),
      H.Null(r) && (r = K.DEFAULT_SEQUENCE),
      this.ins.push({ hash: e, index: n, script: o || Ze, sequence: r, witness: Qc }) - 1
    );
  }
  addOutput(e, n) {
    return le(H.tuple(H.Buffer, H.Satoshi), arguments), this.outs.push({ script: e, value: n }) - 1;
  }
  hasWitnesses() {
    return this.ins.some((e) => e.witness.length !== 0);
  }
  weight() {
    const e = this.byteLength(!1),
      n = this.byteLength(!0);
    return e * 3 + n;
  }
  virtualSize() {
    return Math.ceil(this.weight() / 4);
  }
  byteLength(e = !0) {
    const n = e && this.hasWitnesses();
    return (
      (n ? 10 : 8) +
      rt.varuint.encodingLength(this.ins.length) +
      rt.varuint.encodingLength(this.outs.length) +
      this.ins.reduce((r, o) => r + 40 + ye(o.script), 0) +
      this.outs.reduce((r, o) => r + 8 + ye(o.script), 0) +
      (n ? this.ins.reduce((r, o) => r + Id(o.witness), 0) : 0)
    );
  }
  clone() {
    const e = new K();
    return (
      (e.version = this.version),
      (e.locktime = this.locktime),
      (e.ins = this.ins.map((n) => ({
        hash: n.hash,
        index: n.index,
        script: n.script,
        sequence: n.sequence,
        witness: n.witness,
      }))),
      (e.outs = this.outs.map((n) => ({ script: n.script, value: n.value }))),
      e
    );
  }
  hashForSignature(e, n, r) {
    if ((le(H.tuple(H.UInt32, H.Buffer, H.Number), arguments), e >= this.ins.length)) return Jc;
    const o = Zc.compile(Zc.decompile(n).filter((c) => c !== Ad.OPS.OP_CODESEPARATOR)),
      i = this.clone();
    if ((r & 31) === K.SIGHASH_NONE)
      (i.outs = []),
        i.ins.forEach((c, u) => {
          u !== e && (c.sequence = 0);
        });
    else if ((r & 31) === K.SIGHASH_SINGLE) {
      if (e >= this.outs.length) return Jc;
      i.outs.length = e + 1;
      for (let c = 0; c < e; c++) i.outs[c] = kd;
      i.ins.forEach((c, u) => {
        u !== e && (c.sequence = 0);
      });
    }
    r & K.SIGHASH_ANYONECANPAY
      ? ((i.ins = [i.ins[e]]), (i.ins[0].script = o))
      : (i.ins.forEach((c) => {
          c.script = Ze;
        }),
        (i.ins[e].script = o));
    const s = _t.allocUnsafe(i.byteLength(!1) + 4);
    return s.writeInt32LE(r, s.length - 4), i.__toBuffer(s, 0, !1), Pt.hash256(s);
  }
  hashForWitnessV1(e, n, r, o, i, s) {
    if (
      (le(H.tuple(H.UInt32, le.arrayOf(H.Buffer), le.arrayOf(H.Satoshi), H.UInt32), arguments),
      r.length !== this.ins.length || n.length !== this.ins.length)
    )
      throw new Error('Must supply prevout script and value for all inputs');
    const c = o === K.SIGHASH_DEFAULT ? K.SIGHASH_ALL : o & K.SIGHASH_OUTPUT_MASK,
      f = (o & K.SIGHASH_INPUT_MASK) === K.SIGHASH_ANYONECANPAY,
      h = c === K.SIGHASH_NONE,
      a = c === K.SIGHASH_SINGLE;
    let d = Ze,
      l = Ze,
      g = Ze,
      p = Ze,
      b = Ze;
    if (!f) {
      let w = rt.BufferWriter.withCapacity(36 * this.ins.length);
      this.ins.forEach((E) => {
        w.writeSlice(E.hash), w.writeUInt32(E.index);
      }),
        (d = Pt.sha256(w.end())),
        (w = rt.BufferWriter.withCapacity(8 * this.ins.length)),
        r.forEach((E) => w.writeUInt64(E)),
        (l = Pt.sha256(w.end())),
        (w = rt.BufferWriter.withCapacity(n.map(ye).reduce((E, y) => E + y))),
        n.forEach((E) => w.writeVarSlice(E)),
        (g = Pt.sha256(w.end())),
        (w = rt.BufferWriter.withCapacity(4 * this.ins.length)),
        this.ins.forEach((E) => w.writeUInt32(E.sequence)),
        (p = Pt.sha256(w.end()));
    }
    if (h || a) {
      if (a && e < this.outs.length) {
        const w = this.outs[e],
          E = rt.BufferWriter.withCapacity(8 + ye(w.script));
        E.writeUInt64(w.value), E.writeVarSlice(w.script), (b = Pt.sha256(E.end()));
      }
    } else {
      const w = this.outs.map((y) => 8 + ye(y.script)).reduce((y, S) => y + S),
        E = rt.BufferWriter.withCapacity(w);
      this.outs.forEach((y) => {
        E.writeUInt64(y.value), E.writeVarSlice(y.script);
      }),
        (b = Pt.sha256(E.end()));
    }
    const m = (i ? 2 : 0) + (s ? 1 : 0),
      I = 174 - (f ? 49 : 0) - (h ? 32 : 0) + (s ? 32 : 0) + (i ? 37 : 0),
      _ = rt.BufferWriter.withCapacity(I);
    if (
      (_.writeUInt8(o),
      _.writeInt32(this.version),
      _.writeUInt32(this.locktime),
      _.writeSlice(d),
      _.writeSlice(l),
      _.writeSlice(g),
      _.writeSlice(p),
      h || a || _.writeSlice(b),
      _.writeUInt8(m),
      f)
    ) {
      const w = this.ins[e];
      _.writeSlice(w.hash),
        _.writeUInt32(w.index),
        _.writeUInt64(r[e]),
        _.writeVarSlice(n[e]),
        _.writeUInt32(w.sequence);
    } else _.writeUInt32(e);
    if (s) {
      const w = rt.BufferWriter.withCapacity(ye(s));
      w.writeVarSlice(s), _.writeSlice(Pt.sha256(w.end()));
    }
    return (
      a && _.writeSlice(b),
      i && (_.writeSlice(i), _.writeUInt8(0), _.writeUInt32(4294967295)),
      Pt.taggedHash('TapSighash', _t.concat([_t.from([0]), _.end()]))
    );
  }
  hashForWitnessV0(e, n, r, o) {
    le(H.tuple(H.UInt32, H.Buffer, H.Satoshi, H.UInt32), arguments);
    let i = _t.from([]),
      s,
      c = Ri,
      u = Ri,
      f = Ri;
    if (
      (o & K.SIGHASH_ANYONECANPAY ||
        ((i = _t.allocUnsafe(36 * this.ins.length)),
        (s = new rt.BufferWriter(i, 0)),
        this.ins.forEach((a) => {
          s.writeSlice(a.hash), s.writeUInt32(a.index);
        }),
        (u = Pt.hash256(i))),
      !(o & K.SIGHASH_ANYONECANPAY) &&
        (o & 31) !== K.SIGHASH_SINGLE &&
        (o & 31) !== K.SIGHASH_NONE &&
        ((i = _t.allocUnsafe(4 * this.ins.length)),
        (s = new rt.BufferWriter(i, 0)),
        this.ins.forEach((a) => {
          s.writeUInt32(a.sequence);
        }),
        (f = Pt.hash256(i))),
      (o & 31) !== K.SIGHASH_SINGLE && (o & 31) !== K.SIGHASH_NONE)
    ) {
      const a = this.outs.reduce((d, l) => d + 8 + ye(l.script), 0);
      (i = _t.allocUnsafe(a)),
        (s = new rt.BufferWriter(i, 0)),
        this.outs.forEach((d) => {
          s.writeUInt64(d.value), s.writeVarSlice(d.script);
        }),
        (c = Pt.hash256(i));
    } else if ((o & 31) === K.SIGHASH_SINGLE && e < this.outs.length) {
      const a = this.outs[e];
      (i = _t.allocUnsafe(8 + ye(a.script))),
        (s = new rt.BufferWriter(i, 0)),
        s.writeUInt64(a.value),
        s.writeVarSlice(a.script),
        (c = Pt.hash256(i));
    }
    (i = _t.allocUnsafe(156 + ye(n))), (s = new rt.BufferWriter(i, 0));
    const h = this.ins[e];
    return (
      s.writeInt32(this.version),
      s.writeSlice(u),
      s.writeSlice(f),
      s.writeSlice(h.hash),
      s.writeUInt32(h.index),
      s.writeVarSlice(n),
      s.writeUInt64(r),
      s.writeUInt32(h.sequence),
      s.writeSlice(c),
      s.writeUInt32(this.locktime),
      s.writeUInt32(o),
      Pt.hash256(i)
    );
  }
  getHash(e) {
    return e && this.isCoinbase()
      ? _t.alloc(32, 0)
      : Pt.hash256(this.__toBuffer(void 0, void 0, e));
  }
  getId() {
    return (0, rt.reverseBuffer)(this.getHash(!1)).toString('hex');
  }
  toBuffer(e, n) {
    return this.__toBuffer(e, n, !0);
  }
  toHex() {
    return this.toBuffer(void 0, void 0).toString('hex');
  }
  setInputScript(e, n) {
    le(H.tuple(H.Number, H.Buffer), arguments), (this.ins[e].script = n);
  }
  setWitness(e, n) {
    le(H.tuple(H.Number, [H.Buffer]), arguments), (this.ins[e].witness = n);
  }
  __toBuffer(e, n, r = !1) {
    e || (e = _t.allocUnsafe(this.byteLength(r)));
    const o = new rt.BufferWriter(e, n || 0);
    o.writeInt32(this.version);
    const i = r && this.hasWitnesses();
    return (
      i && (o.writeUInt8(K.ADVANCED_TRANSACTION_MARKER), o.writeUInt8(K.ADVANCED_TRANSACTION_FLAG)),
      o.writeVarInt(this.ins.length),
      this.ins.forEach((s) => {
        o.writeSlice(s.hash),
          o.writeUInt32(s.index),
          o.writeVarSlice(s.script),
          o.writeUInt32(s.sequence);
      }),
      o.writeVarInt(this.outs.length),
      this.outs.forEach((s) => {
        Pd(s) ? o.writeUInt64(s.value) : o.writeSlice(s.valueBuffer), o.writeVarSlice(s.script);
      }),
      i &&
        this.ins.forEach((s) => {
          o.writeVector(s.witness);
        }),
      o.writeUInt32(this.locktime),
      n !== void 0 ? e.slice(n, o.offset) : e
    );
  }
};
hn.Transaction = se;
se.DEFAULT_SEQUENCE = 4294967295;
se.SIGHASH_DEFAULT = 0;
se.SIGHASH_ALL = 1;
se.SIGHASH_NONE = 2;
se.SIGHASH_SINGLE = 3;
se.SIGHASH_ANYONECANPAY = 128;
se.SIGHASH_OUTPUT_MASK = 3;
se.SIGHASH_INPUT_MASK = 128;
se.ADVANCED_TRANSACTION_MARKER = 0;
se.ADVANCED_TRANSACTION_FLAG = 1;
Object.defineProperty(ui, '__esModule', { value: !0 });
ui.Block = void 0;
const dn = at,
  Fi = Ee,
  xd = ai,
  Od = hn,
  qa = St,
  { typeforce: Bd } = qa,
  Ki = new TypeError('Cannot compute merkle root for zero transactions'),
  tu = new TypeError('Cannot compute witness commit for non-segwit block');
class wn {
  constructor() {
    (this.version = 1),
      (this.prevHash = void 0),
      (this.merkleRoot = void 0),
      (this.timestamp = 0),
      (this.witnessCommit = void 0),
      (this.bits = 0),
      (this.nonce = 0),
      (this.transactions = void 0);
  }
  static fromBuffer(e) {
    if (e.length < 80) throw new Error('Buffer too small (< 80 bytes)');
    const n = new dn.BufferReader(e),
      r = new wn();
    if (
      ((r.version = n.readInt32()),
      (r.prevHash = n.readSlice(32)),
      (r.merkleRoot = n.readSlice(32)),
      (r.timestamp = n.readUInt32()),
      (r.bits = n.readUInt32()),
      (r.nonce = n.readUInt32()),
      e.length === 80)
    )
      return r;
    const o = () => {
        const c = Od.Transaction.fromBuffer(n.buffer.slice(n.offset), !0);
        return (n.offset += c.byteLength()), c;
      },
      i = n.readVarInt();
    r.transactions = [];
    for (let c = 0; c < i; ++c) {
      const u = o();
      r.transactions.push(u);
    }
    const s = r.getWitnessCommit();
    return s && (r.witnessCommit = s), r;
  }
  static fromHex(e) {
    return wn.fromBuffer(A.from(e, 'hex'));
  }
  static calculateTarget(e) {
    const n = ((e & 4278190080) >> 24) - 3,
      r = e & 8388607,
      o = A.alloc(32, 0);
    return o.writeUIntBE(r, 29 - n, 3), o;
  }
  static calculateMerkleRoot(e, n) {
    if ((Bd([{ getHash: qa.Function }], e), e.length === 0)) throw Ki;
    if (n && !eu(e)) throw tu;
    const r = e.map((i) => i.getHash(n)),
      o = (0, xd.fastMerkleRoot)(r, Fi.hash256);
    return n ? Fi.hash256(A.concat([o, e[0].ins[0].witness[0]])) : o;
  }
  getWitnessCommit() {
    if (!eu(this.transactions)) return null;
    const e = this.transactions[0].outs
      .filter((r) => r.script.slice(0, 6).equals(A.from('6a24aa21a9ed', 'hex')))
      .map((r) => r.script.slice(6, 38));
    if (e.length === 0) return null;
    const n = e[e.length - 1];
    return n instanceof A && n.length === 32 ? n : null;
  }
  hasWitnessCommit() {
    return (
      (this.witnessCommit instanceof A && this.witnessCommit.length === 32) ||
      this.getWitnessCommit() !== null
    );
  }
  hasWitness() {
    return Ud(this.transactions);
  }
  weight() {
    const e = this.byteLength(!1, !1),
      n = this.byteLength(!1, !0);
    return e * 3 + n;
  }
  byteLength(e, n = !0) {
    return e || !this.transactions
      ? 80
      : 80 +
          dn.varuint.encodingLength(this.transactions.length) +
          this.transactions.reduce((r, o) => r + o.byteLength(n), 0);
  }
  getHash() {
    return Fi.hash256(this.toBuffer(!0));
  }
  getId() {
    return (0, dn.reverseBuffer)(this.getHash()).toString('hex');
  }
  getUTCDate() {
    const e = new Date(0);
    return e.setUTCSeconds(this.timestamp), e;
  }
  toBuffer(e) {
    const n = A.allocUnsafe(this.byteLength(e)),
      r = new dn.BufferWriter(n);
    return (
      r.writeInt32(this.version),
      r.writeSlice(this.prevHash),
      r.writeSlice(this.merkleRoot),
      r.writeUInt32(this.timestamp),
      r.writeUInt32(this.bits),
      r.writeUInt32(this.nonce),
      e ||
        !this.transactions ||
        (dn.varuint.encode(this.transactions.length, n, r.offset),
        (r.offset += dn.varuint.encode.bytes),
        this.transactions.forEach((o) => {
          const i = o.byteLength();
          o.toBuffer(n, r.offset), (r.offset += i);
        })),
      n
    );
  }
  toHex(e) {
    return this.toBuffer(e).toString('hex');
  }
  checkTxRoots() {
    const e = this.hasWitnessCommit();
    return !e && this.hasWitness()
      ? !1
      : this.__checkMerkleRoot() && (e ? this.__checkWitnessCommit() : !0);
  }
  checkProofOfWork() {
    const e = (0, dn.reverseBuffer)(this.getHash()),
      n = wn.calculateTarget(this.bits);
    return e.compare(n) <= 0;
  }
  __checkMerkleRoot() {
    if (!this.transactions) throw Ki;
    const e = wn.calculateMerkleRoot(this.transactions);
    return this.merkleRoot.compare(e) === 0;
  }
  __checkWitnessCommit() {
    if (!this.transactions) throw Ki;
    if (!this.hasWitnessCommit()) throw tu;
    const e = wn.calculateMerkleRoot(this.transactions, !0);
    return this.witnessCommit.compare(e) === 0;
  }
}
ui.Block = wn;
function eu(t) {
  return (
    t instanceof Array &&
    t[0] &&
    t[0].ins &&
    t[0].ins instanceof Array &&
    t[0].ins[0] &&
    t[0].ins[0].witness &&
    t[0].ins[0].witness instanceof Array &&
    t[0].ins[0].witness.length > 0
  );
}
function Ud(t) {
  return (
    t instanceof Array &&
    t.some(
      (e) =>
        typeof e == 'object' &&
        e.ins instanceof Array &&
        e.ins.some(
          (n) => typeof n == 'object' && n.witness instanceof Array && n.witness.length > 0
        )
    )
  );
}
var fi = {},
  Xs = {},
  Ys = {},
  Zs = {},
  Vr = {},
  An = {},
  pt = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (function (e) {
      (e[(e.UNSIGNED_TX = 0)] = 'UNSIGNED_TX'), (e[(e.GLOBAL_XPUB = 1)] = 'GLOBAL_XPUB');
    })(t.GlobalTypes || (t.GlobalTypes = {})),
    (t.GLOBAL_TYPE_NAMES = ['unsignedTx', 'globalXpub']),
    (function (e) {
      (e[(e.NON_WITNESS_UTXO = 0)] = 'NON_WITNESS_UTXO'),
        (e[(e.WITNESS_UTXO = 1)] = 'WITNESS_UTXO'),
        (e[(e.PARTIAL_SIG = 2)] = 'PARTIAL_SIG'),
        (e[(e.SIGHASH_TYPE = 3)] = 'SIGHASH_TYPE'),
        (e[(e.REDEEM_SCRIPT = 4)] = 'REDEEM_SCRIPT'),
        (e[(e.WITNESS_SCRIPT = 5)] = 'WITNESS_SCRIPT'),
        (e[(e.BIP32_DERIVATION = 6)] = 'BIP32_DERIVATION'),
        (e[(e.FINAL_SCRIPTSIG = 7)] = 'FINAL_SCRIPTSIG'),
        (e[(e.FINAL_SCRIPTWITNESS = 8)] = 'FINAL_SCRIPTWITNESS'),
        (e[(e.POR_COMMITMENT = 9)] = 'POR_COMMITMENT'),
        (e[(e.TAP_KEY_SIG = 19)] = 'TAP_KEY_SIG'),
        (e[(e.TAP_SCRIPT_SIG = 20)] = 'TAP_SCRIPT_SIG'),
        (e[(e.TAP_LEAF_SCRIPT = 21)] = 'TAP_LEAF_SCRIPT'),
        (e[(e.TAP_BIP32_DERIVATION = 22)] = 'TAP_BIP32_DERIVATION'),
        (e[(e.TAP_INTERNAL_KEY = 23)] = 'TAP_INTERNAL_KEY'),
        (e[(e.TAP_MERKLE_ROOT = 24)] = 'TAP_MERKLE_ROOT');
    })(t.InputTypes || (t.InputTypes = {})),
    (t.INPUT_TYPE_NAMES = [
      'nonWitnessUtxo',
      'witnessUtxo',
      'partialSig',
      'sighashType',
      'redeemScript',
      'witnessScript',
      'bip32Derivation',
      'finalScriptSig',
      'finalScriptWitness',
      'porCommitment',
      'tapKeySig',
      'tapScriptSig',
      'tapLeafScript',
      'tapBip32Derivation',
      'tapInternalKey',
      'tapMerkleRoot',
    ]),
    (function (e) {
      (e[(e.REDEEM_SCRIPT = 0)] = 'REDEEM_SCRIPT'),
        (e[(e.WITNESS_SCRIPT = 1)] = 'WITNESS_SCRIPT'),
        (e[(e.BIP32_DERIVATION = 2)] = 'BIP32_DERIVATION'),
        (e[(e.TAP_INTERNAL_KEY = 5)] = 'TAP_INTERNAL_KEY'),
        (e[(e.TAP_TREE = 6)] = 'TAP_TREE'),
        (e[(e.TAP_BIP32_DERIVATION = 7)] = 'TAP_BIP32_DERIVATION');
    })(t.OutputTypes || (t.OutputTypes = {})),
    (t.OUTPUT_TYPE_NAMES = [
      'redeemScript',
      'witnessScript',
      'bip32Derivation',
      'tapInternalKey',
      'tapTree',
      'tapBip32Derivation',
    ]);
})(pt);
var In = {};
Object.defineProperty(In, '__esModule', { value: !0 });
const za = pt,
  Nd = (t) => [...Array(t).keys()];
function Hd(t) {
  if (t.key[0] !== za.GlobalTypes.GLOBAL_XPUB)
    throw new Error(
      'Decode Error: could not decode globalXpub with key 0x' + t.key.toString('hex')
    );
  if (t.key.length !== 79 || ![2, 3].includes(t.key[46]))
    throw new Error(
      'Decode Error: globalXpub has invalid extended pubkey in key 0x' + t.key.toString('hex')
    );
  if ((t.value.length / 4) % 1 !== 0)
    throw new Error('Decode Error: Global GLOBAL_XPUB value length should be multiple of 4');
  const e = t.key.slice(1),
    n = { masterFingerprint: t.value.slice(0, 4), extendedPubkey: e, path: 'm' };
  for (const r of Nd(t.value.length / 4 - 1)) {
    const o = t.value.readUInt32LE(r * 4 + 4),
      i = !!(o & 2147483648),
      s = o & 2147483647;
    n.path += '/' + s.toString(10) + (i ? "'" : '');
  }
  return n;
}
In.decode = Hd;
function Ld(t) {
  const e = A.from([za.GlobalTypes.GLOBAL_XPUB]),
    n = A.concat([e, t.extendedPubkey]),
    r = t.path.split('/'),
    o = A.allocUnsafe(r.length * 4);
  t.masterFingerprint.copy(o, 0);
  let i = 4;
  return (
    r.slice(1).forEach((s) => {
      const c = s.slice(-1) === "'";
      let u = 2147483647 & parseInt(c ? s.slice(0, -1) : s, 10);
      c && (u += 2147483648), o.writeUInt32LE(u, i), (i += 4);
    }),
    { key: n, value: o }
  );
}
In.encode = Ld;
In.expected = '{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }';
function Cd(t) {
  const e = t.extendedPubkey,
    n = t.masterFingerprint,
    r = t.path;
  return (
    A.isBuffer(e) &&
    e.length === 78 &&
    [2, 3].indexOf(e[45]) > -1 &&
    A.isBuffer(n) &&
    n.length === 4 &&
    typeof r == 'string' &&
    !!r.match(/^m(\/\d+'?)*$/)
  );
}
In.check = Cd;
function $d(t, e, n) {
  const r = e.extendedPubkey.toString('hex');
  return n.has(r)
    ? !1
    : (n.add(r), t.filter((o) => o.extendedPubkey.equals(e.extendedPubkey)).length === 0);
}
In.canAddToArray = $d;
var Qs = {};
Object.defineProperty(Qs, '__esModule', { value: !0 });
const Rd = pt;
function Fd(t) {
  return { key: A.from([Rd.GlobalTypes.UNSIGNED_TX]), value: t.toBuffer() };
}
Qs.encode = Fd;
var vn = {};
Object.defineProperty(vn, '__esModule', { value: !0 });
const Xa = pt;
function Kd(t) {
  if (t.key[0] !== Xa.InputTypes.FINAL_SCRIPTSIG)
    throw new Error(
      'Decode Error: could not decode finalScriptSig with key 0x' + t.key.toString('hex')
    );
  return t.value;
}
vn.decode = Kd;
function Md(t) {
  return { key: A.from([Xa.InputTypes.FINAL_SCRIPTSIG]), value: t };
}
vn.encode = Md;
vn.expected = 'Buffer';
function Wd(t) {
  return A.isBuffer(t);
}
vn.check = Wd;
function Dd(t, e) {
  return !!t && !!e && t.finalScriptSig === void 0;
}
vn.canAdd = Dd;
var kn = {};
Object.defineProperty(kn, '__esModule', { value: !0 });
const Ya = pt;
function Vd(t) {
  if (t.key[0] !== Ya.InputTypes.FINAL_SCRIPTWITNESS)
    throw new Error(
      'Decode Error: could not decode finalScriptWitness with key 0x' + t.key.toString('hex')
    );
  return t.value;
}
kn.decode = Vd;
function jd(t) {
  return { key: A.from([Ya.InputTypes.FINAL_SCRIPTWITNESS]), value: t };
}
kn.encode = jd;
kn.expected = 'Buffer';
function Gd(t) {
  return A.isBuffer(t);
}
kn.check = Gd;
function qd(t, e) {
  return !!t && !!e && t.finalScriptWitness === void 0;
}
kn.canAdd = qd;
var Pn = {};
Object.defineProperty(Pn, '__esModule', { value: !0 });
const Za = pt;
function zd(t) {
  if (t.key[0] !== Za.InputTypes.NON_WITNESS_UTXO)
    throw new Error(
      'Decode Error: could not decode nonWitnessUtxo with key 0x' + t.key.toString('hex')
    );
  return t.value;
}
Pn.decode = zd;
function Xd(t) {
  return { key: A.from([Za.InputTypes.NON_WITNESS_UTXO]), value: t };
}
Pn.encode = Xd;
Pn.expected = 'Buffer';
function Yd(t) {
  return A.isBuffer(t);
}
Pn.check = Yd;
function Zd(t, e) {
  return !!t && !!e && t.nonWitnessUtxo === void 0;
}
Pn.canAdd = Zd;
var xn = {};
Object.defineProperty(xn, '__esModule', { value: !0 });
const Qa = pt;
function Qd(t) {
  if (t.key[0] !== Qa.InputTypes.PARTIAL_SIG)
    throw new Error(
      'Decode Error: could not decode partialSig with key 0x' + t.key.toString('hex')
    );
  if (!(t.key.length === 34 || t.key.length === 66) || ![2, 3, 4].includes(t.key[1]))
    throw new Error(
      'Decode Error: partialSig has invalid pubkey in key 0x' + t.key.toString('hex')
    );
  return { pubkey: t.key.slice(1), signature: t.value };
}
xn.decode = Qd;
function Jd(t) {
  const e = A.from([Qa.InputTypes.PARTIAL_SIG]);
  return { key: A.concat([e, t.pubkey]), value: t.signature };
}
xn.encode = Jd;
xn.expected = '{ pubkey: Buffer; signature: Buffer; }';
function t0(t) {
  return (
    A.isBuffer(t.pubkey) &&
    A.isBuffer(t.signature) &&
    [33, 65].includes(t.pubkey.length) &&
    [2, 3, 4].includes(t.pubkey[0]) &&
    e0(t.signature)
  );
}
xn.check = t0;
function e0(t) {
  if (!A.isBuffer(t) || t.length < 9 || t[0] !== 48 || t.length !== t[1] + 3 || t[2] !== 2)
    return !1;
  const e = t[3];
  if (e > 33 || e < 1 || t[3 + e + 1] !== 2) return !1;
  const n = t[3 + e + 2];
  return !(n > 33 || n < 1 || t.length !== 3 + e + 2 + n + 2);
}
function n0(t, e, n) {
  const r = e.pubkey.toString('hex');
  return n.has(r) ? !1 : (n.add(r), t.filter((o) => o.pubkey.equals(e.pubkey)).length === 0);
}
xn.canAddToArray = n0;
var On = {};
Object.defineProperty(On, '__esModule', { value: !0 });
const Ja = pt;
function r0(t) {
  if (t.key[0] !== Ja.InputTypes.POR_COMMITMENT)
    throw new Error(
      'Decode Error: could not decode porCommitment with key 0x' + t.key.toString('hex')
    );
  return t.value.toString('utf8');
}
On.decode = r0;
function o0(t) {
  return { key: A.from([Ja.InputTypes.POR_COMMITMENT]), value: A.from(t, 'utf8') };
}
On.encode = o0;
On.expected = 'string';
function i0(t) {
  return typeof t == 'string';
}
On.check = i0;
function s0(t, e) {
  return !!t && !!e && t.porCommitment === void 0;
}
On.canAdd = s0;
var Bn = {};
Object.defineProperty(Bn, '__esModule', { value: !0 });
const tf = pt;
function c0(t) {
  if (t.key[0] !== tf.InputTypes.SIGHASH_TYPE)
    throw new Error(
      'Decode Error: could not decode sighashType with key 0x' + t.key.toString('hex')
    );
  return t.value.readUInt32LE(0);
}
Bn.decode = c0;
function u0(t) {
  const e = A.from([tf.InputTypes.SIGHASH_TYPE]),
    n = A.allocUnsafe(4);
  return n.writeUInt32LE(t, 0), { key: e, value: n };
}
Bn.encode = u0;
Bn.expected = 'number';
function a0(t) {
  return typeof t == 'number';
}
Bn.check = a0;
function f0(t, e) {
  return !!t && !!e && t.sighashType === void 0;
}
Bn.canAdd = f0;
var Un = {};
Object.defineProperty(Un, '__esModule', { value: !0 });
const ef = pt;
function h0(t) {
  if (t.key[0] !== ef.InputTypes.TAP_KEY_SIG || t.key.length !== 1)
    throw new Error('Decode Error: could not decode tapKeySig with key 0x' + t.key.toString('hex'));
  if (!nf(t.value))
    throw new Error('Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature');
  return t.value;
}
Un.decode = h0;
function l0(t) {
  return { key: A.from([ef.InputTypes.TAP_KEY_SIG]), value: t };
}
Un.encode = l0;
Un.expected = 'Buffer';
function nf(t) {
  return A.isBuffer(t) && (t.length === 64 || t.length === 65);
}
Un.check = nf;
function p0(t, e) {
  return !!t && !!e && t.tapKeySig === void 0;
}
Un.canAdd = p0;
var Nn = {};
Object.defineProperty(Nn, '__esModule', { value: !0 });
const rf = pt;
function d0(t) {
  if (t.key[0] !== rf.InputTypes.TAP_LEAF_SCRIPT)
    throw new Error(
      'Decode Error: could not decode tapLeafScript with key 0x' + t.key.toString('hex')
    );
  if ((t.key.length - 2) % 32 !== 0)
    throw new Error(
      'Decode Error: tapLeafScript has invalid control block in key 0x' + t.key.toString('hex')
    );
  const e = t.value[t.value.length - 1];
  if ((t.key[1] & 254) !== e)
    throw new Error(
      'Decode Error: tapLeafScript bad leaf version in key 0x' + t.key.toString('hex')
    );
  const n = t.value.slice(0, -1);
  return { controlBlock: t.key.slice(1), script: n, leafVersion: e };
}
Nn.decode = d0;
function y0(t) {
  const e = A.from([rf.InputTypes.TAP_LEAF_SCRIPT]),
    n = A.from([t.leafVersion]);
  return { key: A.concat([e, t.controlBlock]), value: A.concat([t.script, n]) };
}
Nn.encode = y0;
Nn.expected = '{ controlBlock: Buffer; leafVersion: number, script: Buffer; }';
function w0(t) {
  return (
    A.isBuffer(t.controlBlock) &&
    (t.controlBlock.length - 1) % 32 === 0 &&
    (t.controlBlock[0] & 254) === t.leafVersion &&
    A.isBuffer(t.script)
  );
}
Nn.check = w0;
function g0(t, e, n) {
  const r = e.controlBlock.toString('hex');
  return n.has(r)
    ? !1
    : (n.add(r), t.filter((o) => o.controlBlock.equals(e.controlBlock)).length === 0);
}
Nn.canAddToArray = g0;
var Hn = {};
Object.defineProperty(Hn, '__esModule', { value: !0 });
const of = pt;
function b0(t) {
  if (t.key[0] !== of.InputTypes.TAP_MERKLE_ROOT || t.key.length !== 1)
    throw new Error(
      'Decode Error: could not decode tapMerkleRoot with key 0x' + t.key.toString('hex')
    );
  if (!sf(t.value)) throw new Error('Decode Error: tapMerkleRoot not a 32-byte hash');
  return t.value;
}
Hn.decode = b0;
function E0(t) {
  return { key: A.from([of.InputTypes.TAP_MERKLE_ROOT]), value: t };
}
Hn.encode = E0;
Hn.expected = 'Buffer';
function sf(t) {
  return A.isBuffer(t) && t.length === 32;
}
Hn.check = sf;
function m0(t, e) {
  return !!t && !!e && t.tapMerkleRoot === void 0;
}
Hn.canAdd = m0;
var Ln = {};
Object.defineProperty(Ln, '__esModule', { value: !0 });
const cf = pt;
function S0(t) {
  if (t.key[0] !== cf.InputTypes.TAP_SCRIPT_SIG)
    throw new Error(
      'Decode Error: could not decode tapScriptSig with key 0x' + t.key.toString('hex')
    );
  if (t.key.length !== 65)
    throw new Error('Decode Error: tapScriptSig has invalid key 0x' + t.key.toString('hex'));
  if (t.value.length !== 64 && t.value.length !== 65)
    throw new Error(
      'Decode Error: tapScriptSig has invalid signature in key 0x' + t.key.toString('hex')
    );
  const e = t.key.slice(1, 33),
    n = t.key.slice(33);
  return { pubkey: e, leafHash: n, signature: t.value };
}
Ln.decode = S0;
function T0(t) {
  const e = A.from([cf.InputTypes.TAP_SCRIPT_SIG]);
  return { key: A.concat([e, t.pubkey, t.leafHash]), value: t.signature };
}
Ln.encode = T0;
Ln.expected = '{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }';
function _0(t) {
  return (
    A.isBuffer(t.pubkey) &&
    A.isBuffer(t.leafHash) &&
    A.isBuffer(t.signature) &&
    t.pubkey.length === 32 &&
    t.leafHash.length === 32 &&
    (t.signature.length === 64 || t.signature.length === 65)
  );
}
Ln.check = _0;
function A0(t, e, n) {
  const r = e.pubkey.toString('hex') + e.leafHash.toString('hex');
  return n.has(r)
    ? !1
    : (n.add(r),
      t.filter((o) => o.pubkey.equals(e.pubkey) && o.leafHash.equals(e.leafHash)).length === 0);
}
Ln.canAddToArray = A0;
var Cn = {},
  me = {},
  ce = {};
Object.defineProperty(ce, '__esModule', { value: !0 });
const I0 = 9007199254740991;
function Js(t) {
  if (t < 0 || t > I0 || t % 1 !== 0) throw new RangeError('value out of range');
}
function xr(t, e, n) {
  if ((Js(t), e || (e = A.allocUnsafe(uf(t))), !A.isBuffer(e)))
    throw new TypeError('buffer must be a Buffer instance');
  return (
    n || (n = 0),
    t < 253
      ? (e.writeUInt8(t, n), Object.assign(xr, { bytes: 1 }))
      : t <= 65535
        ? (e.writeUInt8(253, n), e.writeUInt16LE(t, n + 1), Object.assign(xr, { bytes: 3 }))
        : t <= 4294967295
          ? (e.writeUInt8(254, n), e.writeUInt32LE(t, n + 1), Object.assign(xr, { bytes: 5 }))
          : (e.writeUInt8(255, n),
            e.writeUInt32LE(t >>> 0, n + 1),
            e.writeUInt32LE((t / 4294967296) | 0, n + 5),
            Object.assign(xr, { bytes: 9 })),
    e
  );
}
ce.encode = xr;
function Or(t, e) {
  if (!A.isBuffer(t)) throw new TypeError('buffer must be a Buffer instance');
  e || (e = 0);
  const n = t.readUInt8(e);
  if (n < 253) return Object.assign(Or, { bytes: 1 }), n;
  if (n === 253) return Object.assign(Or, { bytes: 3 }), t.readUInt16LE(e + 1);
  if (n === 254) return Object.assign(Or, { bytes: 5 }), t.readUInt32LE(e + 1);
  {
    Object.assign(Or, { bytes: 9 });
    const r = t.readUInt32LE(e + 1),
      i = t.readUInt32LE(e + 5) * 4294967296 + r;
    return Js(i), i;
  }
}
ce.decode = Or;
function uf(t) {
  return Js(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9;
}
ce.encodingLength = uf;
Object.defineProperty(me, '__esModule', { value: !0 });
const oo = ce;
me.range = (t) => [...Array(t).keys()];
function v0(t) {
  if (t.length < 1) return t;
  let e = t.length - 1,
    n = 0;
  for (let r = 0; r < t.length / 2; r++) (n = t[r]), (t[r] = t[e]), (t[e] = n), e--;
  return t;
}
me.reverseBuffer = v0;
function k0(t) {
  const e = t.map(af);
  return e.push(A.from([0])), A.concat(e);
}
me.keyValsToBuffer = k0;
function af(t) {
  const e = t.key.length,
    n = t.value.length,
    r = oo.encodingLength(e),
    o = oo.encodingLength(n),
    i = A.allocUnsafe(r + e + o + n);
  return (
    oo.encode(e, i, 0), t.key.copy(i, r), oo.encode(n, i, r + e), t.value.copy(i, r + e + o), i
  );
}
me.keyValToBuffer = af;
function ff(t, e) {
  if (typeof t != 'number') throw new Error('cannot write a non-number as a number');
  if (t < 0) throw new Error('specified a negative value for writing an unsigned value');
  if (t > e) throw new Error('RangeError: value out of range');
  if (Math.floor(t) !== t) throw new Error('value has a fractional component');
}
function P0(t, e) {
  const n = t.readUInt32LE(e);
  let r = t.readUInt32LE(e + 4);
  return (r *= 4294967296), ff(r + n, 9007199254740991), r + n;
}
me.readUInt64LE = P0;
function x0(t, e, n) {
  return (
    ff(e, 9007199254740991),
    t.writeInt32LE(e & -1, n),
    t.writeUInt32LE(Math.floor(e / 4294967296), n + 4),
    n + 8
  );
}
me.writeUInt64LE = x0;
Object.defineProperty(Cn, '__esModule', { value: !0 });
const hf = pt,
  lf = me,
  Io = ce;
function O0(t) {
  if (t.key[0] !== hf.InputTypes.WITNESS_UTXO)
    throw new Error(
      'Decode Error: could not decode witnessUtxo with key 0x' + t.key.toString('hex')
    );
  const e = lf.readUInt64LE(t.value, 0);
  let n = 8;
  const r = Io.decode(t.value, n);
  n += Io.encodingLength(r);
  const o = t.value.slice(n);
  if (o.length !== r) throw new Error('Decode Error: WITNESS_UTXO script is not proper length');
  return { script: o, value: e };
}
Cn.decode = O0;
function B0(t) {
  const { script: e, value: n } = t,
    r = Io.encodingLength(e.length),
    o = A.allocUnsafe(8 + r + e.length);
  return (
    lf.writeUInt64LE(o, n, 0),
    Io.encode(e.length, o, 8),
    e.copy(o, 8 + r),
    { key: A.from([hf.InputTypes.WITNESS_UTXO]), value: o }
  );
}
Cn.encode = B0;
Cn.expected = '{ script: Buffer; value: number; }';
function U0(t) {
  return A.isBuffer(t.script) && typeof t.value == 'number';
}
Cn.check = U0;
function N0(t, e) {
  return !!t && !!e && t.witnessUtxo === void 0;
}
Cn.canAdd = N0;
var $n = {};
Object.defineProperty($n, '__esModule', { value: !0 });
const pf = pt,
  fs = ce;
function H0(t) {
  if (t.key[0] !== pf.OutputTypes.TAP_TREE || t.key.length !== 1)
    throw new Error('Decode Error: could not decode tapTree with key 0x' + t.key.toString('hex'));
  let e = 0;
  const n = [];
  for (; e < t.value.length; ) {
    const r = t.value[e++],
      o = t.value[e++],
      i = fs.decode(t.value, e);
    (e += fs.encodingLength(i)),
      n.push({ depth: r, leafVersion: o, script: t.value.slice(e, e + i) }),
      (e += i);
  }
  return { leaves: n };
}
$n.decode = H0;
function L0(t) {
  const e = A.from([pf.OutputTypes.TAP_TREE]),
    n = [].concat(
      ...t.leaves.map((r) => [A.of(r.depth, r.leafVersion), fs.encode(r.script.length), r.script])
    );
  return { key: e, value: A.concat(n) };
}
$n.encode = L0;
$n.expected = '{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }';
function C0(t) {
  return (
    Array.isArray(t.leaves) &&
    t.leaves.every(
      (e) =>
        e.depth >= 0 &&
        e.depth <= 128 &&
        (e.leafVersion & 254) === e.leafVersion &&
        A.isBuffer(e.script)
    )
  );
}
$n.check = C0;
function $0(t, e) {
  return !!t && !!e && t.tapTree === void 0;
}
$n.canAdd = $0;
var hi = {};
Object.defineProperty(hi, '__esModule', { value: !0 });
const R0 = (t) => [...Array(t).keys()],
  F0 = (t) => (t.length === 33 && [2, 3].includes(t[0])) || (t.length === 65 && t[0] === 4);
function K0(t, e = F0) {
  function n(c) {
    if (c.key[0] !== t)
      throw new Error(
        'Decode Error: could not decode bip32Derivation with key 0x' + c.key.toString('hex')
      );
    const u = c.key.slice(1);
    if (!e(u))
      throw new Error(
        'Decode Error: bip32Derivation has invalid pubkey in key 0x' + c.key.toString('hex')
      );
    if ((c.value.length / 4) % 1 !== 0)
      throw new Error('Decode Error: Input BIP32_DERIVATION value length should be multiple of 4');
    const f = { masterFingerprint: c.value.slice(0, 4), pubkey: u, path: 'm' };
    for (const h of R0(c.value.length / 4 - 1)) {
      const a = c.value.readUInt32LE(h * 4 + 4),
        d = !!(a & 2147483648),
        l = a & 2147483647;
      f.path += '/' + l.toString(10) + (d ? "'" : '');
    }
    return f;
  }
  function r(c) {
    const u = A.from([t]),
      f = A.concat([u, c.pubkey]),
      h = c.path.split('/'),
      a = A.allocUnsafe(h.length * 4);
    c.masterFingerprint.copy(a, 0);
    let d = 4;
    return (
      h.slice(1).forEach((l) => {
        const g = l.slice(-1) === "'";
        let p = 2147483647 & parseInt(g ? l.slice(0, -1) : l, 10);
        g && (p += 2147483648), a.writeUInt32LE(p, d), (d += 4);
      }),
      { key: f, value: a }
    );
  }
  const o = '{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }';
  function i(c) {
    return (
      A.isBuffer(c.pubkey) &&
      A.isBuffer(c.masterFingerprint) &&
      typeof c.path == 'string' &&
      e(c.pubkey) &&
      c.masterFingerprint.length === 4
    );
  }
  function s(c, u, f) {
    const h = u.pubkey.toString('hex');
    return f.has(h) ? !1 : (f.add(h), c.filter((a) => a.pubkey.equals(u.pubkey)).length === 0);
  }
  return { decode: n, encode: r, check: i, expected: o, canAddToArray: s };
}
hi.makeConverter = K0;
var tc = {};
Object.defineProperty(tc, '__esModule', { value: !0 });
function M0(t) {
  return e;
  function e(n) {
    let r;
    if (
      t.includes(n.key[0]) &&
      ((r = n.key.slice(1)), !(r.length === 33 || r.length === 65) || ![2, 3, 4].includes(r[0]))
    )
      throw new Error('Format Error: invalid pubkey in key 0x' + n.key.toString('hex'));
    return r;
  }
}
tc.makeChecker = M0;
var ec = {};
Object.defineProperty(ec, '__esModule', { value: !0 });
function W0(t) {
  function e(s) {
    if (s.key[0] !== t)
      throw new Error(
        'Decode Error: could not decode redeemScript with key 0x' + s.key.toString('hex')
      );
    return s.value;
  }
  function n(s) {
    return { key: A.from([t]), value: s };
  }
  const r = 'Buffer';
  function o(s) {
    return A.isBuffer(s);
  }
  function i(s, c) {
    return !!s && !!c && s.redeemScript === void 0;
  }
  return { decode: e, encode: n, check: o, expected: r, canAdd: i };
}
ec.makeConverter = W0;
var nc = {};
Object.defineProperty(nc, '__esModule', { value: !0 });
const io = ce,
  D0 = hi,
  V0 = (t) => t.length === 32;
function j0(t) {
  const e = D0.makeConverter(t, V0);
  function n(s) {
    const c = io.decode(s.value),
      u = io.encodingLength(c),
      f = e.decode({ key: s.key, value: s.value.slice(u + c * 32) }),
      h = new Array(c);
    for (let a = 0, d = u; a < c; a++, d += 32) h[a] = s.value.slice(d, d + 32);
    return Object.assign({}, f, { leafHashes: h });
  }
  function r(s) {
    const c = e.encode(s),
      u = io.encodingLength(s.leafHashes.length),
      f = A.allocUnsafe(u);
    io.encode(s.leafHashes.length, f);
    const h = A.concat([f, ...s.leafHashes, c.value]);
    return Object.assign({}, c, { value: h });
  }
  const o = '{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }';
  function i(s) {
    return (
      Array.isArray(s.leafHashes) &&
      s.leafHashes.every((c) => A.isBuffer(c) && c.length === 32) &&
      e.check(s)
    );
  }
  return { decode: n, encode: r, check: i, expected: o, canAddToArray: e.canAddToArray };
}
nc.makeConverter = j0;
var rc = {};
Object.defineProperty(rc, '__esModule', { value: !0 });
function G0(t) {
  function e(s) {
    if (s.key[0] !== t || s.key.length !== 1)
      throw new Error(
        'Decode Error: could not decode tapInternalKey with key 0x' + s.key.toString('hex')
      );
    if (s.value.length !== 32)
      throw new Error('Decode Error: tapInternalKey not a 32-byte x-only pubkey');
    return s.value;
  }
  function n(s) {
    return { key: A.from([t]), value: s };
  }
  const r = 'Buffer';
  function o(s) {
    return A.isBuffer(s) && s.length === 32;
  }
  function i(s, c) {
    return !!s && !!c && s.tapInternalKey === void 0;
  }
  return { decode: e, encode: n, check: o, expected: r, canAdd: i };
}
rc.makeConverter = G0;
var oc = {};
Object.defineProperty(oc, '__esModule', { value: !0 });
function q0(t) {
  function e(s) {
    if (s.key[0] !== t)
      throw new Error(
        'Decode Error: could not decode witnessScript with key 0x' + s.key.toString('hex')
      );
    return s.value;
  }
  function n(s) {
    return { key: A.from([t]), value: s };
  }
  const r = 'Buffer';
  function o(s) {
    return A.isBuffer(s);
  }
  function i(s, c) {
    return !!s && !!c && s.witnessScript === void 0;
  }
  return { decode: e, encode: n, check: o, expected: r, canAdd: i };
}
oc.makeConverter = q0;
Object.defineProperty(An, '__esModule', { value: !0 });
const Wt = pt,
  z0 = In,
  X0 = Qs,
  Y0 = vn,
  Z0 = kn,
  Q0 = Pn,
  J0 = xn,
  ty = On,
  ey = Bn,
  ny = Un,
  ry = Nn,
  oy = Hn,
  iy = Ln,
  sy = Cn,
  cy = $n,
  df = hi,
  ic = tc,
  yf = ec,
  wf = nc,
  gf = rc,
  bf = oc,
  uy = { unsignedTx: X0, globalXpub: z0, checkPubkey: ic.makeChecker([]) };
An.globals = uy;
const ay = {
  nonWitnessUtxo: Q0,
  partialSig: J0,
  sighashType: ey,
  finalScriptSig: Y0,
  finalScriptWitness: Z0,
  porCommitment: ty,
  witnessUtxo: sy,
  bip32Derivation: df.makeConverter(Wt.InputTypes.BIP32_DERIVATION),
  redeemScript: yf.makeConverter(Wt.InputTypes.REDEEM_SCRIPT),
  witnessScript: bf.makeConverter(Wt.InputTypes.WITNESS_SCRIPT),
  checkPubkey: ic.makeChecker([Wt.InputTypes.PARTIAL_SIG, Wt.InputTypes.BIP32_DERIVATION]),
  tapKeySig: ny,
  tapScriptSig: iy,
  tapLeafScript: ry,
  tapBip32Derivation: wf.makeConverter(Wt.InputTypes.TAP_BIP32_DERIVATION),
  tapInternalKey: gf.makeConverter(Wt.InputTypes.TAP_INTERNAL_KEY),
  tapMerkleRoot: oy,
};
An.inputs = ay;
const fy = {
  bip32Derivation: df.makeConverter(Wt.OutputTypes.BIP32_DERIVATION),
  redeemScript: yf.makeConverter(Wt.OutputTypes.REDEEM_SCRIPT),
  witnessScript: bf.makeConverter(Wt.OutputTypes.WITNESS_SCRIPT),
  checkPubkey: ic.makeChecker([Wt.OutputTypes.BIP32_DERIVATION]),
  tapBip32Derivation: wf.makeConverter(Wt.OutputTypes.TAP_BIP32_DERIVATION),
  tapTree: cy,
  tapInternalKey: gf.makeConverter(Wt.OutputTypes.TAP_INTERNAL_KEY),
};
An.outputs = fy;
Object.defineProperty(Vr, '__esModule', { value: !0 });
const D = An,
  vo = me,
  nu = ce,
  B = pt;
function hy(t, e) {
  let n = 0;
  function r() {
    const b = nu.decode(t, n);
    n += nu.encodingLength(b);
    const m = t.slice(n, n + b);
    return (n += b), m;
  }
  function o() {
    const b = t.readUInt32BE(n);
    return (n += 4), b;
  }
  function i() {
    const b = t.readUInt8(n);
    return (n += 1), b;
  }
  function s() {
    const b = r(),
      m = r();
    return { key: b, value: m };
  }
  function c() {
    if (n >= t.length) throw new Error('Format Error: Unexpected End of PSBT');
    const b = t.readUInt8(n) === 0;
    return b && n++, b;
  }
  if (o() !== 1886610036) throw new Error('Format Error: Invalid Magic Number');
  if (i() !== 255) throw new Error('Format Error: Magic Number must be followed by 0xff separator');
  const u = [],
    f = {};
  for (; !c(); ) {
    const b = s(),
      m = b.key.toString('hex');
    if (f[m]) throw new Error('Format Error: Keys must be unique for global keymap: key ' + m);
    (f[m] = 1), u.push(b);
  }
  const h = u.filter((b) => b.key[0] === B.GlobalTypes.UNSIGNED_TX);
  if (h.length !== 1) throw new Error('Format Error: Only one UNSIGNED_TX allowed');
  const a = e(h[0].value),
    { inputCount: d, outputCount: l } = a.getInputOutputCounts(),
    g = [],
    p = [];
  for (const b of vo.range(d)) {
    const m = {},
      I = [];
    for (; !c(); ) {
      const _ = s(),
        w = _.key.toString('hex');
      if (m[w])
        throw new Error(
          'Format Error: Keys must be unique for each input: input index ' + b + ' key ' + w
        );
      (m[w] = 1), I.push(_);
    }
    g.push(I);
  }
  for (const b of vo.range(l)) {
    const m = {},
      I = [];
    for (; !c(); ) {
      const _ = s(),
        w = _.key.toString('hex');
      if (m[w])
        throw new Error(
          'Format Error: Keys must be unique for each output: output index ' + b + ' key ' + w
        );
      (m[w] = 1), I.push(_);
    }
    p.push(I);
  }
  return Ef(a, { globalMapKeyVals: u, inputKeyVals: g, outputKeyVals: p });
}
Vr.psbtFromBuffer = hy;
function wt(t, e, n) {
  if (!e.equals(A.from([n])))
    throw new Error(`Format Error: Invalid ${t} key: ${e.toString('hex')}`);
}
Vr.checkKeyBuffer = wt;
function Ef(t, { globalMapKeyVals: e, inputKeyVals: n, outputKeyVals: r }) {
  const o = { unsignedTx: t };
  let i = 0;
  for (const h of e)
    switch (h.key[0]) {
      case B.GlobalTypes.UNSIGNED_TX:
        if ((wt('global', h.key, B.GlobalTypes.UNSIGNED_TX), i > 0))
          throw new Error('Format Error: GlobalMap has multiple UNSIGNED_TX');
        i++;
        break;
      case B.GlobalTypes.GLOBAL_XPUB:
        o.globalXpub === void 0 && (o.globalXpub = []),
          o.globalXpub.push(D.globals.globalXpub.decode(h));
        break;
      default:
        o.unknownKeyVals || (o.unknownKeyVals = []), o.unknownKeyVals.push(h);
    }
  const s = n.length,
    c = r.length,
    u = [],
    f = [];
  for (const h of vo.range(s)) {
    const a = {};
    for (const d of n[h])
      switch ((D.inputs.checkPubkey(d), d.key[0])) {
        case B.InputTypes.NON_WITNESS_UTXO:
          if ((wt('input', d.key, B.InputTypes.NON_WITNESS_UTXO), a.nonWitnessUtxo !== void 0))
            throw new Error('Format Error: Input has multiple NON_WITNESS_UTXO');
          a.nonWitnessUtxo = D.inputs.nonWitnessUtxo.decode(d);
          break;
        case B.InputTypes.WITNESS_UTXO:
          if ((wt('input', d.key, B.InputTypes.WITNESS_UTXO), a.witnessUtxo !== void 0))
            throw new Error('Format Error: Input has multiple WITNESS_UTXO');
          a.witnessUtxo = D.inputs.witnessUtxo.decode(d);
          break;
        case B.InputTypes.PARTIAL_SIG:
          a.partialSig === void 0 && (a.partialSig = []),
            a.partialSig.push(D.inputs.partialSig.decode(d));
          break;
        case B.InputTypes.SIGHASH_TYPE:
          if ((wt('input', d.key, B.InputTypes.SIGHASH_TYPE), a.sighashType !== void 0))
            throw new Error('Format Error: Input has multiple SIGHASH_TYPE');
          a.sighashType = D.inputs.sighashType.decode(d);
          break;
        case B.InputTypes.REDEEM_SCRIPT:
          if ((wt('input', d.key, B.InputTypes.REDEEM_SCRIPT), a.redeemScript !== void 0))
            throw new Error('Format Error: Input has multiple REDEEM_SCRIPT');
          a.redeemScript = D.inputs.redeemScript.decode(d);
          break;
        case B.InputTypes.WITNESS_SCRIPT:
          if ((wt('input', d.key, B.InputTypes.WITNESS_SCRIPT), a.witnessScript !== void 0))
            throw new Error('Format Error: Input has multiple WITNESS_SCRIPT');
          a.witnessScript = D.inputs.witnessScript.decode(d);
          break;
        case B.InputTypes.BIP32_DERIVATION:
          a.bip32Derivation === void 0 && (a.bip32Derivation = []),
            a.bip32Derivation.push(D.inputs.bip32Derivation.decode(d));
          break;
        case B.InputTypes.FINAL_SCRIPTSIG:
          wt('input', d.key, B.InputTypes.FINAL_SCRIPTSIG),
            (a.finalScriptSig = D.inputs.finalScriptSig.decode(d));
          break;
        case B.InputTypes.FINAL_SCRIPTWITNESS:
          wt('input', d.key, B.InputTypes.FINAL_SCRIPTWITNESS),
            (a.finalScriptWitness = D.inputs.finalScriptWitness.decode(d));
          break;
        case B.InputTypes.POR_COMMITMENT:
          wt('input', d.key, B.InputTypes.POR_COMMITMENT),
            (a.porCommitment = D.inputs.porCommitment.decode(d));
          break;
        case B.InputTypes.TAP_KEY_SIG:
          wt('input', d.key, B.InputTypes.TAP_KEY_SIG),
            (a.tapKeySig = D.inputs.tapKeySig.decode(d));
          break;
        case B.InputTypes.TAP_SCRIPT_SIG:
          a.tapScriptSig === void 0 && (a.tapScriptSig = []),
            a.tapScriptSig.push(D.inputs.tapScriptSig.decode(d));
          break;
        case B.InputTypes.TAP_LEAF_SCRIPT:
          a.tapLeafScript === void 0 && (a.tapLeafScript = []),
            a.tapLeafScript.push(D.inputs.tapLeafScript.decode(d));
          break;
        case B.InputTypes.TAP_BIP32_DERIVATION:
          a.tapBip32Derivation === void 0 && (a.tapBip32Derivation = []),
            a.tapBip32Derivation.push(D.inputs.tapBip32Derivation.decode(d));
          break;
        case B.InputTypes.TAP_INTERNAL_KEY:
          wt('input', d.key, B.InputTypes.TAP_INTERNAL_KEY),
            (a.tapInternalKey = D.inputs.tapInternalKey.decode(d));
          break;
        case B.InputTypes.TAP_MERKLE_ROOT:
          wt('input', d.key, B.InputTypes.TAP_MERKLE_ROOT),
            (a.tapMerkleRoot = D.inputs.tapMerkleRoot.decode(d));
          break;
        default:
          a.unknownKeyVals || (a.unknownKeyVals = []), a.unknownKeyVals.push(d);
      }
    u.push(a);
  }
  for (const h of vo.range(c)) {
    const a = {};
    for (const d of r[h])
      switch ((D.outputs.checkPubkey(d), d.key[0])) {
        case B.OutputTypes.REDEEM_SCRIPT:
          if ((wt('output', d.key, B.OutputTypes.REDEEM_SCRIPT), a.redeemScript !== void 0))
            throw new Error('Format Error: Output has multiple REDEEM_SCRIPT');
          a.redeemScript = D.outputs.redeemScript.decode(d);
          break;
        case B.OutputTypes.WITNESS_SCRIPT:
          if ((wt('output', d.key, B.OutputTypes.WITNESS_SCRIPT), a.witnessScript !== void 0))
            throw new Error('Format Error: Output has multiple WITNESS_SCRIPT');
          a.witnessScript = D.outputs.witnessScript.decode(d);
          break;
        case B.OutputTypes.BIP32_DERIVATION:
          a.bip32Derivation === void 0 && (a.bip32Derivation = []),
            a.bip32Derivation.push(D.outputs.bip32Derivation.decode(d));
          break;
        case B.OutputTypes.TAP_INTERNAL_KEY:
          wt('output', d.key, B.OutputTypes.TAP_INTERNAL_KEY),
            (a.tapInternalKey = D.outputs.tapInternalKey.decode(d));
          break;
        case B.OutputTypes.TAP_TREE:
          wt('output', d.key, B.OutputTypes.TAP_TREE), (a.tapTree = D.outputs.tapTree.decode(d));
          break;
        case B.OutputTypes.TAP_BIP32_DERIVATION:
          a.tapBip32Derivation === void 0 && (a.tapBip32Derivation = []),
            a.tapBip32Derivation.push(D.outputs.tapBip32Derivation.decode(d));
          break;
        default:
          a.unknownKeyVals || (a.unknownKeyVals = []), a.unknownKeyVals.push(d);
      }
    f.push(a);
  }
  return { globalMap: o, inputs: u, outputs: f };
}
Vr.psbtFromKeyVals = Ef;
var li = {};
Object.defineProperty(li, '__esModule', { value: !0 });
const Mi = An,
  ru = me;
function ly({ globalMap: t, inputs: e, outputs: n }) {
  const {
      globalKeyVals: r,
      inputKeyVals: o,
      outputKeyVals: i,
    } = mf({ globalMap: t, inputs: e, outputs: n }),
    s = ru.keyValsToBuffer(r),
    c = (a) => (a.length === 0 ? [A.from([0])] : a.map(ru.keyValsToBuffer)),
    u = c(o),
    f = c(i),
    h = A.allocUnsafe(5);
  return h.writeUIntBE(482972169471, 0, 5), A.concat([h, s].concat(u, f));
}
li.psbtToBuffer = ly;
const py = (t, e) => t.key.compare(e.key);
function Wi(t, e) {
  const n = new Set(),
    r = Object.entries(t).reduce((i, [s, c]) => {
      if (s === 'unknownKeyVals') return i;
      const u = e[s];
      if (u === void 0) return i;
      const f = (Array.isArray(c) ? c : [c]).map(u.encode);
      return (
        f
          .map((a) => a.key.toString('hex'))
          .forEach((a) => {
            if (n.has(a)) throw new Error('Serialize Error: Duplicate key: ' + a);
            n.add(a);
          }),
        i.concat(f)
      );
    }, []),
    o = t.unknownKeyVals ? t.unknownKeyVals.filter((i) => !n.has(i.key.toString('hex'))) : [];
  return r.concat(o).sort(py);
}
function mf({ globalMap: t, inputs: e, outputs: n }) {
  return {
    globalKeyVals: Wi(t, Mi.globals),
    inputKeyVals: e.map((r) => Wi(r, Mi.inputs)),
    outputKeyVals: n.map((r) => Wi(r, Mi.outputs)),
  };
}
li.psbtToKeyVals = mf;
(function (t) {
  function e(n) {
    for (var r in n) t.hasOwnProperty(r) || (t[r] = n[r]);
  }
  Object.defineProperty(t, '__esModule', { value: !0 }), e(Vr), e(li);
})(Zs);
Object.defineProperty(Ys, '__esModule', { value: !0 });
const Di = Zs;
function dy(t) {
  const e = t[0],
    n = Di.psbtToKeyVals(e),
    r = t.slice(1);
  if (r.length === 0) throw new Error('Combine: Nothing to combine');
  const o = ou(e);
  if (o === void 0) throw new Error('Combine: Self missing transaction');
  const i = jn(n.globalKeyVals),
    s = n.inputKeyVals.map(jn),
    c = n.outputKeyVals.map(jn);
  for (const u of r) {
    const f = ou(u);
    if (f === void 0 || !f.toBuffer().equals(o.toBuffer()))
      throw new Error('Combine: One of the Psbts does not have the same transaction.');
    const h = Di.psbtToKeyVals(u);
    jn(h.globalKeyVals).forEach(Vi(i, n.globalKeyVals, h.globalKeyVals)),
      h.inputKeyVals
        .map(jn)
        .forEach((g, p) => g.forEach(Vi(s[p], n.inputKeyVals[p], h.inputKeyVals[p]))),
      h.outputKeyVals
        .map(jn)
        .forEach((g, p) => g.forEach(Vi(c[p], n.outputKeyVals[p], h.outputKeyVals[p])));
  }
  return Di.psbtFromKeyVals(o, {
    globalMapKeyVals: n.globalKeyVals,
    inputKeyVals: n.inputKeyVals,
    outputKeyVals: n.outputKeyVals,
  });
}
Ys.combine = dy;
function Vi(t, e, n) {
  return (r) => {
    if (t.has(r)) return;
    const o = n.filter((i) => i.key.toString('hex') === r)[0];
    e.push(o), t.add(r);
  };
}
function ou(t) {
  return t.globalMap.unsignedTx;
}
function jn(t) {
  const e = new Set();
  return (
    t.forEach((n) => {
      const r = n.key.toString('hex');
      if (e.has(r)) throw new Error('Combine: KeyValue Map keys should be unique');
      e.add(r);
    }),
    e
  );
}
var sc = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  const e = An;
  function n(l, g) {
    const p = l[g];
    if (p === void 0) throw new Error(`No input #${g}`);
    return p;
  }
  t.checkForInput = n;
  function r(l, g) {
    const p = l[g];
    if (p === void 0) throw new Error(`No output #${g}`);
    return p;
  }
  t.checkForOutput = r;
  function o(l, g, p) {
    if (l.key[0] < p)
      throw new Error('Use the method for your specific key instead of addUnknownKeyVal*');
    if (g && g.filter((b) => b.key.equals(l.key)).length !== 0)
      throw new Error(`Duplicate Key: ${l.key.toString('hex')}`);
  }
  t.checkHasKey = o;
  function i(l) {
    let g = 0;
    return (
      Object.keys(l).forEach((p) => {
        Number(isNaN(Number(p))) && g++;
      }),
      g
    );
  }
  t.getEnumLength = i;
  function s(l, g) {
    let p = !1;
    if (g.nonWitnessUtxo || g.witnessUtxo) {
      const b = !!g.redeemScript,
        m = !!g.witnessScript,
        I = !b || !!g.finalScriptSig,
        _ = !m || !!g.finalScriptWitness,
        w = !!g.finalScriptSig || !!g.finalScriptWitness;
      p = I && _ && w;
    }
    if (p === !1) throw new Error(`Input #${l} has too much or too little data to clean`);
  }
  t.inputCheckUncleanFinalized = s;
  function c(l, g, p, b) {
    throw new Error(
      `Data for ${l} key ${g} is incorrect: Expected ${p} and got ${JSON.stringify(b)}`
    );
  }
  function u(l) {
    return (g, p) => {
      for (const b of Object.keys(g)) {
        const m = g[b],
          { canAdd: I, canAddToArray: _, check: w, expected: E } = e[l + 's'][b] || {},
          y = !!_;
        if (w)
          if (y) {
            if (!Array.isArray(m) || (p[b] && !Array.isArray(p[b])))
              throw new Error(`Key type ${b} must be an array`);
            m.every(w) || c(l, b, E, m);
            const S = p[b] || [],
              v = new Set();
            if (!m.every((T) => _(S, T, v))) throw new Error('Can not add duplicate data to array');
            p[b] = S.concat(m);
          } else {
            if ((w(m) || c(l, b, E, m), !I(p, m)))
              throw new Error(`Can not add duplicate data to ${l}`);
            p[b] = m;
          }
      }
    };
  }
  (t.updateGlobal = u('global')), (t.updateInput = u('input')), (t.updateOutput = u('output'));
  function f(l, g) {
    const p = l.length - 1,
      b = n(l, p);
    t.updateInput(g, b);
  }
  t.addInputAttributes = f;
  function h(l, g) {
    const p = l.length - 1,
      b = r(l, p);
    t.updateOutput(g, b);
  }
  t.addOutputAttributes = h;
  function a(l, g) {
    if (!A.isBuffer(g) || g.length < 4) throw new Error('Set Version: Invalid Transaction');
    return g.writeUInt32LE(l, 0), g;
  }
  t.defaultVersionSetter = a;
  function d(l, g) {
    if (!A.isBuffer(g) || g.length < 4) throw new Error('Set Locktime: Invalid Transaction');
    return g.writeUInt32LE(l, g.length - 4), g;
  }
  t.defaultLocktimeSetter = d;
})(sc);
Object.defineProperty(Xs, '__esModule', { value: !0 });
const yy = Ys,
  iu = Zs,
  ji = pt,
  yt = sc;
let wy = class {
  constructor(e) {
    (this.inputs = []), (this.outputs = []), (this.globalMap = { unsignedTx: e });
  }
  static fromBase64(e, n) {
    const r = A.from(e, 'base64');
    return this.fromBuffer(r, n);
  }
  static fromHex(e, n) {
    const r = A.from(e, 'hex');
    return this.fromBuffer(r, n);
  }
  static fromBuffer(e, n) {
    const r = iu.psbtFromBuffer(e, n),
      o = new this(r.globalMap.unsignedTx);
    return Object.assign(o, r), o;
  }
  toBase64() {
    return this.toBuffer().toString('base64');
  }
  toHex() {
    return this.toBuffer().toString('hex');
  }
  toBuffer() {
    return iu.psbtToBuffer(this);
  }
  updateGlobal(e) {
    return yt.updateGlobal(e, this.globalMap), this;
  }
  updateInput(e, n) {
    const r = yt.checkForInput(this.inputs, e);
    return yt.updateInput(n, r), this;
  }
  updateOutput(e, n) {
    const r = yt.checkForOutput(this.outputs, e);
    return yt.updateOutput(n, r), this;
  }
  addUnknownKeyValToGlobal(e) {
    return (
      yt.checkHasKey(e, this.globalMap.unknownKeyVals, yt.getEnumLength(ji.GlobalTypes)),
      this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []),
      this.globalMap.unknownKeyVals.push(e),
      this
    );
  }
  addUnknownKeyValToInput(e, n) {
    const r = yt.checkForInput(this.inputs, e);
    return (
      yt.checkHasKey(n, r.unknownKeyVals, yt.getEnumLength(ji.InputTypes)),
      r.unknownKeyVals || (r.unknownKeyVals = []),
      r.unknownKeyVals.push(n),
      this
    );
  }
  addUnknownKeyValToOutput(e, n) {
    const r = yt.checkForOutput(this.outputs, e);
    return (
      yt.checkHasKey(n, r.unknownKeyVals, yt.getEnumLength(ji.OutputTypes)),
      r.unknownKeyVals || (r.unknownKeyVals = []),
      r.unknownKeyVals.push(n),
      this
    );
  }
  addInput(e) {
    this.globalMap.unsignedTx.addInput(e), this.inputs.push({ unknownKeyVals: [] });
    const n = e.unknownKeyVals || [],
      r = this.inputs.length - 1;
    if (!Array.isArray(n)) throw new Error('unknownKeyVals must be an Array');
    return (
      n.forEach((o) => this.addUnknownKeyValToInput(r, o)),
      yt.addInputAttributes(this.inputs, e),
      this
    );
  }
  addOutput(e) {
    this.globalMap.unsignedTx.addOutput(e), this.outputs.push({ unknownKeyVals: [] });
    const n = e.unknownKeyVals || [],
      r = this.outputs.length - 1;
    if (!Array.isArray(n)) throw new Error('unknownKeyVals must be an Array');
    return (
      n.forEach((o) => this.addUnknownKeyValToOutput(r, o)),
      yt.addOutputAttributes(this.outputs, e),
      this
    );
  }
  clearFinalizedInput(e) {
    const n = yt.checkForInput(this.inputs, e);
    yt.inputCheckUncleanFinalized(e, n);
    for (const r of Object.keys(n))
      [
        'witnessUtxo',
        'nonWitnessUtxo',
        'finalScriptSig',
        'finalScriptWitness',
        'unknownKeyVals',
      ].includes(r) || delete n[r];
    return this;
  }
  combine(...e) {
    const n = yy.combine([this].concat(e));
    return Object.assign(this, n), this;
  }
  getTransaction() {
    return this.globalMap.unsignedTx.toBuffer();
  }
};
Xs.Psbt = wy;
var q = {},
  R = {};
Object.defineProperty(R, '__esModule', { value: !0 });
R.signatureBlocksAction =
  R.checkInputForSig =
  R.pubkeyInScript =
  R.pubkeyPositionInScript =
  R.witnessStackToScriptWitness =
  R.isP2TR =
  R.isP2SHScript =
  R.isP2WSHScript =
  R.isP2WPKH =
  R.isP2PKH =
  R.isP2PK =
  R.isP2MS =
    void 0;
const su = ce,
  Nr = Lt,
  so = hn,
  gy = Ee,
  Rn = pr;
function Fn(t) {
  return (e) => {
    try {
      return t({ output: e }), !0;
    } catch {
      return !1;
    }
  };
}
R.isP2MS = Fn(Rn.p2ms);
R.isP2PK = Fn(Rn.p2pk);
R.isP2PKH = Fn(Rn.p2pkh);
R.isP2WPKH = Fn(Rn.p2wpkh);
R.isP2WSHScript = Fn(Rn.p2wsh);
R.isP2SHScript = Fn(Rn.p2sh);
R.isP2TR = Fn(Rn.p2tr);
function by(t) {
  let e = A.allocUnsafe(0);
  function n(s) {
    e = A.concat([e, A.from(s)]);
  }
  function r(s) {
    const c = e.length,
      u = su.encodingLength(s);
    (e = A.concat([e, A.allocUnsafe(u)])), su.encode(s, e, c);
  }
  function o(s) {
    r(s.length), n(s);
  }
  function i(s) {
    r(s.length), s.forEach(o);
  }
  return i(t), e;
}
R.witnessStackToScriptWitness = by;
function Sf(t, e) {
  const n = (0, gy.hash160)(t),
    r = t.slice(1, 33),
    o = Nr.decompile(e);
  if (o === null) throw new Error('Unknown script error');
  return o.findIndex((i) =>
    typeof i == 'number' ? !1 : i.equals(t) || i.equals(n) || i.equals(r)
  );
}
R.pubkeyPositionInScript = Sf;
function Ey(t, e) {
  return Sf(t, e) !== -1;
}
R.pubkeyInScript = Ey;
function my(t, e) {
  return Sy(t).some((r) => Tf(r, Nr.signature.decode, e));
}
R.checkInputForSig = my;
function Tf(t, e, n) {
  const { hashType: r } = e(t),
    o = [];
  switch ((r & so.Transaction.SIGHASH_ANYONECANPAY && o.push('addInput'), r & 31)) {
    case so.Transaction.SIGHASH_ALL:
      break;
    case so.Transaction.SIGHASH_SINGLE:
    case so.Transaction.SIGHASH_NONE:
      o.push('addOutput'), o.push('setInputSequence');
      break;
  }
  return o.indexOf(n) === -1;
}
R.signatureBlocksAction = Tf;
function Sy(t) {
  let e = [];
  if ((t.partialSig || []).length === 0) {
    if (!t.finalScriptSig && !t.finalScriptWitness) return [];
    e = Ty(t);
  } else e = t.partialSig;
  return e.map((n) => n.signature);
}
function Ty(t) {
  const e = t.finalScriptSig ? Nr.decompile(t.finalScriptSig) || [] : [],
    n = t.finalScriptWitness ? Nr.decompile(t.finalScriptWitness) || [] : [];
  return e
    .concat(n)
    .filter((r) => A.isBuffer(r) && Nr.isCanonicalScriptSignature(r))
    .map((r) => ({ signature: r }));
}
Object.defineProperty(q, '__esModule', { value: !0 });
q.checkTaprootInputForSigs =
  q.tapTreeFromList =
  q.tapTreeToList =
  q.tweakInternalPubKey =
  q.checkTaprootOutputFields =
  q.checkTaprootInputFields =
  q.isTaprootOutput =
  q.isTaprootInput =
  q.serializeTaprootSignature =
  q.tapScriptFinalizer =
  q.toXOnly =
    void 0;
const cc = St,
  _y = hn,
  pi = R,
  cn = ci,
  Ay = pr,
  Iy = R,
  vy = (t) => (t.length === 32 ? t : t.slice(1, 33));
q.toXOnly = vy;
function ky(t, e, n) {
  const r = jy(e, t, n);
  try {
    const i = Dy(e, r).concat(r.script).concat(r.controlBlock);
    return { finalScriptWitness: (0, pi.witnessStackToScriptWitness)(i) };
  } catch (o) {
    throw new Error(`Can not finalize taproot input #${t}: ${o}`);
  }
}
q.tapScriptFinalizer = ky;
function Py(t, e) {
  const n = e ? A.from([e]) : A.from([]);
  return A.concat([t, n]);
}
q.serializeTaprootSignature = Py;
function yo(t) {
  return (
    t &&
    !!(
      t.tapInternalKey ||
      t.tapMerkleRoot ||
      (t.tapLeafScript && t.tapLeafScript.length) ||
      (t.tapBip32Derivation && t.tapBip32Derivation.length) ||
      (t.witnessUtxo && (0, pi.isP2TR)(t.witnessUtxo.script))
    )
  );
}
q.isTaprootInput = yo;
function wo(t, e) {
  return (
    t &&
    !!(
      t.tapInternalKey ||
      t.tapTree ||
      (t.tapBip32Derivation && t.tapBip32Derivation.length) ||
      (e && (0, pi.isP2TR)(e))
    )
  );
}
q.isTaprootOutput = wo;
function xy(t, e, n) {
  Ky(t, e, n), Wy(t, e, n);
}
q.checkTaprootInputFields = xy;
function Oy(t, e, n) {
  My(t, e, n), By(t, e);
}
q.checkTaprootOutputFields = Oy;
function By(t, e) {
  if (!e.tapTree && !e.tapInternalKey) return;
  const n = e.tapInternalKey || t.tapInternalKey,
    r = e.tapTree || t.tapTree;
  if (n) {
    const { script: o } = t,
      i = Uy(n, r);
    if (o && !o.equals(i)) throw new Error('Error adding output. Script or address missmatch.');
  }
}
function Uy(t, e) {
  const n = e && _f(e.leaves),
    { output: r } = (0, Ay.p2tr)({ internalPubkey: t, scriptTree: n });
  return r;
}
function Ny(t, e) {
  const n = e.tapInternalKey,
    r = n && (0, cn.tweakKey)(n, e.tapMerkleRoot);
  if (!r)
    throw new Error(
      `Cannot tweak tap internal key for input #${t}. Public key: ${n && n.toString('hex')}`
    );
  return r.x;
}
q.tweakInternalPubKey = Ny;
function Hy(t) {
  if (!(0, cc.isTaptree)(t))
    throw new Error('Cannot convert taptree to tapleaf list. Expecting a tapree structure.');
  return hs(t);
}
q.tapTreeToList = Hy;
function _f(t = []) {
  return t.length === 1 && t[0].depth === 0
    ? { output: t[0].script, version: t[0].leafVersion }
    : Fy(t);
}
q.tapTreeFromList = _f;
function Ly(t, e) {
  return $y(t).some((r) => (0, Iy.signatureBlocksAction)(r, Cy, e));
}
q.checkTaprootInputForSigs = Ly;
function Cy(t) {
  return { signature: t.slice(0, 64), hashType: t.slice(64)[0] || _y.Transaction.SIGHASH_DEFAULT };
}
function $y(t) {
  const e = [];
  if (
    (t.tapKeySig && e.push(t.tapKeySig),
    t.tapScriptSig && e.push(...t.tapScriptSig.map((n) => n.signature)),
    !e.length)
  ) {
    const n = Ry(t.finalScriptWitness);
    n && e.push(n);
  }
  return e;
}
function Ry(t) {
  if (!t) return;
  const e = t.slice(2);
  if (e.length === 64 || e.length === 65) return e;
}
function hs(t, e = [], n = 0) {
  if (n > cn.MAX_TAPTREE_DEPTH) throw new Error('Max taptree depth exceeded.');
  return t
    ? (0, cc.isTapleaf)(t)
      ? (e.push({
          depth: n,
          leafVersion: t.version || cn.LEAF_VERSION_TAPSCRIPT,
          script: t.output,
        }),
        e)
      : (t[0] && hs(t[0], e, n + 1), t[1] && hs(t[1], e, n + 1), e)
    : [];
}
function Fy(t) {
  let e;
  for (const n of t)
    if (((e = ls(n, e)), !e)) throw new Error('No room left to insert tapleaf in tree');
  return e;
}
function ls(t, e, n = 0) {
  if (n > cn.MAX_TAPTREE_DEPTH) throw new Error('Max taptree depth exceeded.');
  if (t.depth === n) return e ? void 0 : { output: t.script, version: t.leafVersion };
  if ((0, cc.isTapleaf)(e)) return;
  const r = ls(t, e && e[0], n + 1);
  if (r) return [r, e && e[1]];
  const o = ls(t, e && e[1], n + 1);
  if (o) return [e && e[0], o];
}
function Ky(t, e, n) {
  const r = yo(t) && er(e),
    o = er(t) && yo(e),
    i = t === e && yo(e) && er(e);
  if (r || o || i)
    throw new Error(
      `Invalid arguments for Psbt.${n}. Cannot use both taproot and non-taproot fields.`
    );
}
function My(t, e, n) {
  const r = wo(t) && er(e),
    o = er(t) && wo(e),
    i = t === e && wo(e) && er(e);
  if (r || o || i)
    throw new Error(
      `Invalid arguments for Psbt.${n}. Cannot use both taproot and non-taproot fields.`
    );
}
function Wy(t, e, n) {
  if (e.tapMerkleRoot) {
    const r = (e.tapLeafScript || []).every((i) => Gi(i, e.tapMerkleRoot)),
      o = (t.tapLeafScript || []).every((i) => Gi(i, e.tapMerkleRoot));
    if (!r || !o) throw new Error(`Invalid arguments for Psbt.${n}. Tapleaf not part of taptree.`);
  } else if (t.tapMerkleRoot && !(e.tapLeafScript || []).every((o) => Gi(o, t.tapMerkleRoot)))
    throw new Error(`Invalid arguments for Psbt.${n}. Tapleaf not part of taptree.`);
}
function Gi(t, e) {
  if (!e) return !0;
  const n = (0, cn.tapleafHash)({ output: t.script, version: t.leafVersion });
  return (0, cn.rootHashFromPath)(t.controlBlock, n).equals(e);
}
function Dy(t, e) {
  const n = (0, cn.tapleafHash)({ output: e.script, version: e.leafVersion });
  return (t.tapScriptSig || [])
    .filter((r) => r.leafHash.equals(n))
    .map((r) => Vy(e.script, r))
    .sort((r, o) => o.positionInScript - r.positionInScript)
    .map((r) => r.signature);
}
function Vy(t, e) {
  return Object.assign({ positionInScript: (0, pi.pubkeyPositionInScript)(e.pubkey, t) }, e);
}
function jy(t, e, n) {
  if (!t.tapScriptSig || !t.tapScriptSig.length)
    throw new Error(`Can not finalize taproot input #${e}. No tapleaf script signature provided.`);
  const r = (t.tapLeafScript || [])
    .sort((o, i) => o.controlBlock.length - i.controlBlock.length)
    .find((o) => Gy(o, t.tapScriptSig, n));
  if (!r)
    throw new Error(
      `Can not finalize taproot input #${e}. Signature for tapleaf script not found.`
    );
  return r;
}
function Gy(t, e, n) {
  const r = (0, cn.tapleafHash)({ output: t.script, version: t.leafVersion });
  return (!n || n.equals(r)) && e.find((i) => i.leafHash.equals(r)) !== void 0;
}
function er(t) {
  return (
    t && !!(t.redeemScript || t.witnessScript || (t.bip32Derivation && t.bip32Derivation.length))
  );
}
Object.defineProperty(fi, '__esModule', { value: !0 });
fi.Psbt = void 0;
const cu = Xs,
  uu = ce,
  xt = sc,
  au = Ut,
  ko = at,
  qy = lt,
  Qt = pr,
  zy = ci,
  Ue = Lt,
  bt = hn,
  Y = q,
  ot = R,
  Xy = { network: qy.bitcoin, maximumFeeRate: 5e3 };
class Po {
  static fromBase64(e, n = {}) {
    const r = A.from(e, 'base64');
    return this.fromBuffer(r, n);
  }
  static fromHex(e, n = {}) {
    const r = A.from(e, 'hex');
    return this.fromBuffer(r, n);
  }
  static fromBuffer(e, n = {}) {
    const r = cu.Psbt.fromBuffer(e, Yy),
      o = new Po(n, r);
    return ew(o.__CACHE.__TX, o.__CACHE), o;
  }
  constructor(e = {}, n = new cu.Psbt(new Af())) {
    (this.data = n),
      (this.opts = Object.assign({}, Xy, e)),
      (this.__CACHE = {
        __NON_WITNESS_UTXO_TX_CACHE: [],
        __NON_WITNESS_UTXO_BUF_CACHE: [],
        __TX_IN_CACHE: {},
        __TX: this.data.globalMap.unsignedTx.tx,
        __UNSAFE_SIGN_NONSEGWIT: !1,
      }),
      this.data.inputs.length === 0 && this.setVersion(2);
    const r = (o, i, s, c) => Object.defineProperty(o, i, { enumerable: s, writable: c });
    r(this, '__CACHE', !1, !0), r(this, 'opts', !1, !0);
  }
  get inputCount() {
    return this.data.inputs.length;
  }
  get version() {
    return this.__CACHE.__TX.version;
  }
  set version(e) {
    this.setVersion(e);
  }
  get locktime() {
    return this.__CACHE.__TX.locktime;
  }
  set locktime(e) {
    this.setLocktime(e);
  }
  get txInputs() {
    return this.__CACHE.__TX.ins.map((e) => ({
      hash: (0, ko.cloneBuffer)(e.hash),
      index: e.index,
      sequence: e.sequence,
    }));
  }
  get txOutputs() {
    return this.__CACHE.__TX.outs.map((e) => {
      let n;
      try {
        n = (0, au.fromOutputScript)(e.script, this.opts.network);
      } catch {}
      return { script: (0, ko.cloneBuffer)(e.script), value: e.value, address: n };
    });
  }
  combine(...e) {
    return this.data.combine(...e.map((n) => n.data)), this;
  }
  clone() {
    const e = Po.fromBuffer(this.data.toBuffer());
    return (e.opts = JSON.parse(JSON.stringify(this.opts))), e;
  }
  setMaximumFeeRate(e) {
    co(e), (this.opts.maximumFeeRate = e);
  }
  setVersion(e) {
    co(e), _r(this.data.inputs, 'setVersion');
    const n = this.__CACHE;
    return (n.__TX.version = e), (n.__EXTRACTED_TX = void 0), this;
  }
  setLocktime(e) {
    co(e), _r(this.data.inputs, 'setLocktime');
    const n = this.__CACHE;
    return (n.__TX.locktime = e), (n.__EXTRACTED_TX = void 0), this;
  }
  setInputSequence(e, n) {
    co(n), _r(this.data.inputs, 'setInputSequence');
    const r = this.__CACHE;
    if (r.__TX.ins.length <= e) throw new Error('Input index too high');
    return (r.__TX.ins[e].sequence = n), (r.__EXTRACTED_TX = void 0), this;
  }
  addInputs(e) {
    return e.forEach((n) => this.addInput(n)), this;
  }
  addInput(e) {
    if (arguments.length > 1 || !e || e.hash === void 0 || e.index === void 0)
      throw new Error(
        'Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]'
      );
    (0, Y.checkTaprootInputFields)(e, e, 'addInput'),
      _r(this.data.inputs, 'addInput'),
      e.witnessScript && xo(e.witnessScript);
    const n = this.__CACHE;
    this.data.addInput(e);
    const r = n.__TX.ins[n.__TX.ins.length - 1];
    kf(n, r);
    const o = this.data.inputs.length - 1,
      i = this.data.inputs[o];
    return (
      i.nonWitnessUtxo && ds(this.__CACHE, i, o),
      (n.__FEE = void 0),
      (n.__FEE_RATE = void 0),
      (n.__EXTRACTED_TX = void 0),
      this
    );
  }
  addOutputs(e) {
    return e.forEach((n) => this.addOutput(n)), this;
  }
  addOutput(e) {
    if (
      arguments.length > 1 ||
      !e ||
      e.value === void 0 ||
      (e.address === void 0 && e.script === void 0)
    )
      throw new Error(
        'Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]'
      );
    _r(this.data.inputs, 'addOutput');
    const { address: n } = e;
    if (typeof n == 'string') {
      const { network: o } = this.opts,
        i = (0, au.toOutputScript)(n, o);
      e = Object.assign(e, { script: i });
    }
    (0, Y.checkTaprootOutputFields)(e, e, 'addOutput');
    const r = this.__CACHE;
    return (
      this.data.addOutput(e),
      (r.__FEE = void 0),
      (r.__FEE_RATE = void 0),
      (r.__EXTRACTED_TX = void 0),
      this
    );
  }
  extractTransaction(e) {
    if (!this.data.inputs.every(If)) throw new Error('Not finalized');
    const n = this.__CACHE;
    if ((e || Qy(this, n, this.opts), n.__EXTRACTED_TX)) return n.__EXTRACTED_TX;
    const r = n.__TX.clone();
    return Nf(this.data.inputs, r, n, !0), r;
  }
  getFeeRate() {
    return du('__FEE_RATE', 'fee rate', this.data.inputs, this.__CACHE);
  }
  getFee() {
    return du('__FEE', 'fee', this.data.inputs, this.__CACHE);
  }
  finalizeAllInputs() {
    return (
      (0, xt.checkForInput)(this.data.inputs, 0),
      Ar(this.data.inputs.length).forEach((e) => this.finalizeInput(e)),
      this
    );
  }
  finalizeInput(e, n) {
    const r = (0, xt.checkForInput)(this.data.inputs, e);
    return (0, Y.isTaprootInput)(r)
      ? this._finalizeTaprootInput(e, r, void 0, n)
      : this._finalizeInput(e, r, n);
  }
  finalizeTaprootInput(e, n, r = Y.tapScriptFinalizer) {
    const o = (0, xt.checkForInput)(this.data.inputs, e);
    if ((0, Y.isTaprootInput)(o)) return this._finalizeTaprootInput(e, o, n, r);
    throw new Error(`Cannot finalize input #${e}. Not Taproot.`);
  }
  _finalizeInput(e, n, r = nw) {
    const { script: o, isP2SH: i, isP2WSH: s, isSegwit: c } = sw(e, n, this.__CACHE);
    if (!o) throw new Error(`No script found for input #${e}`);
    Jy(n);
    const { finalScriptSig: u, finalScriptWitness: f } = r(e, n, o, c, i, s);
    if (
      (u && this.data.updateInput(e, { finalScriptSig: u }),
      f && this.data.updateInput(e, { finalScriptWitness: f }),
      !u && !f)
    )
      throw new Error(`Unknown error finalizing input #${e}`);
    return this.data.clearFinalizedInput(e), this;
  }
  _finalizeTaprootInput(e, n, r, o = Y.tapScriptFinalizer) {
    if (!n.witnessUtxo) throw new Error(`Cannot finalize input #${e}. Missing withness utxo.`);
    if (n.tapKeySig) {
      const i = Qt.p2tr({ output: n.witnessUtxo.script, signature: n.tapKeySig }),
        s = (0, ot.witnessStackToScriptWitness)(i.witness);
      this.data.updateInput(e, { finalScriptWitness: s });
    } else {
      const { finalScriptWitness: i } = o(e, n, r);
      this.data.updateInput(e, { finalScriptWitness: i });
    }
    return this.data.clearFinalizedInput(e), this;
  }
  getInputType(e) {
    const n = (0, xt.checkForInput)(this.data.inputs, e),
      r = Hf(e, n, this.__CACHE),
      o = yi(
        r,
        e,
        'input',
        n.redeemScript || hw(n.finalScriptSig),
        n.witnessScript || lw(n.finalScriptWitness)
      ),
      i = o.type === 'raw' ? '' : o.type + '-',
      s = Cf(o.meaningfulScript);
    return i + s;
  }
  inputHasPubkey(e, n) {
    const r = (0, xt.checkForInput)(this.data.inputs, e);
    return aw(n, r, e, this.__CACHE);
  }
  inputHasHDKey(e, n) {
    const r = (0, xt.checkForInput)(this.data.inputs, e),
      o = hu(n);
    return !!r.bip32Derivation && r.bip32Derivation.some(o);
  }
  outputHasPubkey(e, n) {
    const r = (0, xt.checkForOutput)(this.data.outputs, e);
    return fw(n, r, e, this.__CACHE);
  }
  outputHasHDKey(e, n) {
    const r = (0, xt.checkForOutput)(this.data.outputs, e),
      o = hu(n);
    return !!r.bip32Derivation && r.bip32Derivation.some(o);
  }
  validateSignaturesOfAllInputs(e) {
    return (
      (0, xt.checkForInput)(this.data.inputs, 0),
      Ar(this.data.inputs.length)
        .map((r) => this.validateSignaturesOfInput(r, e))
        .reduce((r, o) => o === !0 && r, !0)
    );
  }
  validateSignaturesOfInput(e, n, r) {
    const o = this.data.inputs[e];
    return (0, Y.isTaprootInput)(o)
      ? this.validateSignaturesOfTaprootInput(e, n, r)
      : this._validateSignaturesOfInput(e, n, r);
  }
  _validateSignaturesOfInput(e, n, r) {
    const o = this.data.inputs[e],
      i = (o || {}).partialSig;
    if (!o || !i || i.length < 1) throw new Error('No signatures to validate');
    if (typeof n != 'function') throw new Error('Need validator function to validate signatures');
    const s = r ? i.filter((a) => a.pubkey.equals(r)) : i;
    if (s.length < 1) throw new Error('No signatures for this pubkey');
    const c = [];
    let u, f, h;
    for (const a of s) {
      const d = Ue.signature.decode(a.signature),
        { hash: l, script: g } =
          h !== d.hashType
            ? xf(e, Object.assign({}, o, { sighashType: d.hashType }), this.__CACHE, !0)
            : { hash: u, script: f };
      (h = d.hashType),
        (u = l),
        (f = g),
        vf(a.pubkey, g, 'verify'),
        c.push(n(a.pubkey, l, d.signature));
    }
    return c.every((a) => a === !0);
  }
  validateSignaturesOfTaprootInput(e, n, r) {
    const o = this.data.inputs[e],
      i = (o || {}).tapKeySig,
      s = (o || {}).tapScriptSig;
    if (!o && !i && !(s && !s.length)) throw new Error('No signatures to validate');
    if (typeof n != 'function') throw new Error('Need validator function to validate signatures');
    r = r && (0, Y.toXOnly)(r);
    const c = r
      ? ps(e, o, this.data.inputs, r, this.__CACHE)
      : ow(e, o, this.data.inputs, this.__CACHE);
    if (!c.length) throw new Error('No signatures for this pubkey');
    const u = c.find((h) => !h.leafHash);
    let f = 0;
    if (i && u) {
      if (!n(u.pubkey, u.hash, wu(i))) return !1;
      f++;
    }
    if (s)
      for (const h of s) {
        const a = c.find((d) => h.pubkey.equals(d.pubkey));
        if (a) {
          if (!n(h.pubkey, a.hash, wu(h.signature))) return !1;
          f++;
        }
      }
    return f > 0;
  }
  signAllInputsHD(e, n = [bt.Transaction.SIGHASH_ALL]) {
    if (!e || !e.publicKey || !e.fingerprint) throw new Error('Need HDSigner to sign input');
    const r = [];
    for (const o of Ar(this.data.inputs.length))
      try {
        this.signInputHD(o, e, n), r.push(!0);
      } catch {
        r.push(!1);
      }
    if (r.every((o) => o === !1)) throw new Error('No inputs were signed');
    return this;
  }
  signAllInputsHDAsync(e, n = [bt.Transaction.SIGHASH_ALL]) {
    return new Promise((r, o) => {
      if (!e || !e.publicKey || !e.fingerprint) return o(new Error('Need HDSigner to sign input'));
      const i = [],
        s = [];
      for (const c of Ar(this.data.inputs.length))
        s.push(
          this.signInputHDAsync(c, e, n).then(
            () => {
              i.push(!0);
            },
            () => {
              i.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (i.every((c) => c === !1)) return o(new Error('No inputs were signed'));
        r();
      });
    });
  }
  signInputHD(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    if (!n || !n.publicKey || !n.fingerprint) throw new Error('Need HDSigner to sign input');
    return gu(e, this.data.inputs, n).forEach((i) => this.signInput(e, i, r)), this;
  }
  signInputHDAsync(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    return new Promise((o, i) => {
      if (!n || !n.publicKey || !n.fingerprint) return i(new Error('Need HDSigner to sign input'));
      const c = gu(e, this.data.inputs, n).map((u) => this.signInputAsync(e, u, r));
      return Promise.all(c)
        .then(() => {
          o();
        })
        .catch(i);
    });
  }
  signAllInputs(e, n) {
    if (!e || !e.publicKey) throw new Error('Need Signer to sign input');
    const r = [];
    for (const o of Ar(this.data.inputs.length))
      try {
        this.signInput(o, e, n), r.push(!0);
      } catch {
        r.push(!1);
      }
    if (r.every((o) => o === !1)) throw new Error('No inputs were signed');
    return this;
  }
  signAllInputsAsync(e, n) {
    return new Promise((r, o) => {
      if (!e || !e.publicKey) return o(new Error('Need Signer to sign input'));
      const i = [],
        s = [];
      for (const [c] of this.data.inputs.entries())
        s.push(
          this.signInputAsync(c, e, n).then(
            () => {
              i.push(!0);
            },
            () => {
              i.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (i.every((c) => c === !1)) return o(new Error('No inputs were signed'));
        r();
      });
    });
  }
  signInput(e, n, r) {
    if (!n || !n.publicKey) throw new Error('Need Signer to sign input');
    const o = (0, xt.checkForInput)(this.data.inputs, e);
    return (0, Y.isTaprootInput)(o)
      ? this._signTaprootInput(e, o, n, void 0, r)
      : this._signInput(e, n, r);
  }
  signTaprootInput(e, n, r, o) {
    if (!n || !n.publicKey) throw new Error('Need Signer to sign input');
    const i = (0, xt.checkForInput)(this.data.inputs, e);
    if ((0, Y.isTaprootInput)(i)) return this._signTaprootInput(e, i, n, r, o);
    throw new Error(`Input #${e} is not of type Taproot.`);
  }
  _signInput(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    const { hash: o, sighashType: i } = yu(this.data.inputs, e, n.publicKey, this.__CACHE, r),
      s = [{ pubkey: n.publicKey, signature: Ue.signature.encode(n.sign(o), i) }];
    return this.data.updateInput(e, { partialSig: s }), this;
  }
  _signTaprootInput(e, n, r, o, i = [bt.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(e, n, r, o, i),
      c = s
        .filter((f) => !f.leafHash)
        .map((f) => (0, Y.serializeTaprootSignature)(r.signSchnorr(f.hash), n.sighashType))[0],
      u = s
        .filter((f) => !!f.leafHash)
        .map((f) => ({
          pubkey: (0, Y.toXOnly)(r.publicKey),
          signature: (0, Y.serializeTaprootSignature)(r.signSchnorr(f.hash), n.sighashType),
          leafHash: f.leafHash,
        }));
    return (
      c && this.data.updateInput(e, { tapKeySig: c }),
      u.length && this.data.updateInput(e, { tapScriptSig: u }),
      this
    );
  }
  signInputAsync(e, n, r) {
    return Promise.resolve().then(() => {
      if (!n || !n.publicKey) throw new Error('Need Signer to sign input');
      const o = (0, xt.checkForInput)(this.data.inputs, e);
      return (0, Y.isTaprootInput)(o)
        ? this._signTaprootInputAsync(e, o, n, void 0, r)
        : this._signInputAsync(e, n, r);
    });
  }
  signTaprootInputAsync(e, n, r, o) {
    return Promise.resolve().then(() => {
      if (!n || !n.publicKey) throw new Error('Need Signer to sign input');
      const i = (0, xt.checkForInput)(this.data.inputs, e);
      if ((0, Y.isTaprootInput)(i)) return this._signTaprootInputAsync(e, i, n, r, o);
      throw new Error(`Input #${e} is not of type Taproot.`);
    });
  }
  _signInputAsync(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    const { hash: o, sighashType: i } = yu(this.data.inputs, e, n.publicKey, this.__CACHE, r);
    return Promise.resolve(n.sign(o)).then((s) => {
      const c = [{ pubkey: n.publicKey, signature: Ue.signature.encode(s, i) }];
      this.data.updateInput(e, { partialSig: c });
    });
  }
  async _signTaprootInputAsync(e, n, r, o, i = [bt.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(e, n, r, o, i),
      c = [],
      u = s.filter((h) => !h.leafHash)[0];
    if (u) {
      const h = Promise.resolve(r.signSchnorr(u.hash)).then((a) => ({
        tapKeySig: (0, Y.serializeTaprootSignature)(a, n.sighashType),
      }));
      c.push(h);
    }
    const f = s.filter((h) => !!h.leafHash);
    if (f.length) {
      const h = f.map((a) =>
        Promise.resolve(r.signSchnorr(a.hash)).then((d) => ({
          tapScriptSig: [
            {
              pubkey: (0, Y.toXOnly)(r.publicKey),
              signature: (0, Y.serializeTaprootSignature)(d, n.sighashType),
              leafHash: a.leafHash,
            },
          ],
        }))
      );
      c.push(...h);
    }
    return Promise.all(c).then((h) => {
      h.forEach((a) => this.data.updateInput(e, a));
    });
  }
  checkTaprootHashesForSig(e, n, r, o, i) {
    if (typeof r.signSchnorr != 'function')
      throw new Error(`Need Schnorr Signer to sign taproot input #${e}.`);
    const s = ps(e, n, this.data.inputs, r.publicKey, this.__CACHE, o, i);
    if (!s || !s.length)
      throw new Error(`Can not sign for input #${e} with the key ${r.publicKey.toString('hex')}`);
    return s;
  }
  toBuffer() {
    return qi(this.__CACHE), this.data.toBuffer();
  }
  toHex() {
    return qi(this.__CACHE), this.data.toHex();
  }
  toBase64() {
    return qi(this.__CACHE), this.data.toBase64();
  }
  updateGlobal(e) {
    return this.data.updateGlobal(e), this;
  }
  updateInput(e, n) {
    return (
      n.witnessScript && xo(n.witnessScript),
      (0, Y.checkTaprootInputFields)(this.data.inputs[e], n, 'updateInput'),
      this.data.updateInput(e, n),
      n.nonWitnessUtxo && ds(this.__CACHE, this.data.inputs[e], e),
      this
    );
  }
  updateOutput(e, n) {
    const r = this.data.outputs[e];
    return (
      (0, Y.checkTaprootOutputFields)(r, n, 'updateOutput'), this.data.updateOutput(e, n), this
    );
  }
  addUnknownKeyValToGlobal(e) {
    return this.data.addUnknownKeyValToGlobal(e), this;
  }
  addUnknownKeyValToInput(e, n) {
    return this.data.addUnknownKeyValToInput(e, n), this;
  }
  addUnknownKeyValToOutput(e, n) {
    return this.data.addUnknownKeyValToOutput(e, n), this;
  }
  clearFinalizedInput(e) {
    return this.data.clearFinalizedInput(e), this;
  }
}
fi.Psbt = Po;
const Yy = (t) => new Af(t);
class Af {
  constructor(e = A.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
    (this.tx = bt.Transaction.fromBuffer(e)),
      tw(this.tx),
      Object.defineProperty(this, 'tx', { enumerable: !1, writable: !0 });
  }
  getInputOutputCounts() {
    return { inputCount: this.tx.ins.length, outputCount: this.tx.outs.length };
  }
  addInput(e) {
    if (
      e.hash === void 0 ||
      e.index === void 0 ||
      (!A.isBuffer(e.hash) && typeof e.hash != 'string') ||
      typeof e.index != 'number'
    )
      throw new Error('Error adding input.');
    const n = typeof e.hash == 'string' ? (0, ko.reverseBuffer)(A.from(e.hash, 'hex')) : e.hash;
    this.tx.addInput(n, e.index, e.sequence);
  }
  addOutput(e) {
    if (
      e.script === void 0 ||
      e.value === void 0 ||
      !A.isBuffer(e.script) ||
      typeof e.value != 'number'
    )
      throw new Error('Error adding output.');
    this.tx.addOutput(e.script, e.value);
  }
  toBuffer() {
    return this.tx.toBuffer();
  }
}
function Zy(t, e, n) {
  switch (n) {
    case 'pubkey':
    case 'pubkeyhash':
    case 'witnesspubkeyhash':
      return fu(1, t.partialSig);
    case 'multisig':
      const r = Qt.p2ms({ output: e });
      return fu(r.m, t.partialSig, r.pubkeys);
    default:
      return !1;
  }
}
function qi(t) {
  if (t.__UNSAFE_SIGN_NONSEGWIT !== !1) throw new Error('Not BIP174 compliant, can not export');
}
function fu(t, e, n) {
  if (!e) return !1;
  let r;
  if (
    (n
      ? (r = n
          .map((o) => {
            const i = pw(o);
            return e.find((s) => s.pubkey.equals(i));
          })
          .filter((o) => !!o))
      : (r = e),
    r.length > t)
  )
    throw new Error('Too many signatures');
  return r.length === t;
}
function If(t) {
  return !!t.finalScriptSig || !!t.finalScriptWitness;
}
function hu(t) {
  return (e) =>
    !(
      !e.masterFingerprint.equals(t.fingerprint) || !t.derivePath(e.path).publicKey.equals(e.pubkey)
    );
}
function co(t) {
  if (typeof t != 'number' || t !== Math.floor(t) || t > 4294967295 || t < 0)
    throw new Error('Invalid 32 bit integer');
}
function Qy(t, e, n) {
  const r = e.__FEE_RATE || t.getFeeRate(),
    o = e.__EXTRACTED_TX.virtualSize(),
    i = r * o;
  if (r >= n.maximumFeeRate)
    throw new Error(
      `Warning: You are paying around ${(i / 1e8).toFixed(8)} in fees, which is ${r} satoshi per byte for a transaction with a VSize of ${o} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
    );
}
function _r(t, e) {
  t.forEach((n) => {
    if (
      (0, Y.isTaprootInput)(n)
        ? (0, Y.checkTaprootInputForSigs)(n, e)
        : (0, ot.checkInputForSig)(n, e)
    )
      throw new Error('Can not modify transaction, signatures exist.');
  });
}
function Jy(t) {
  if (!t.sighashType || !t.partialSig) return;
  const { partialSig: e, sighashType: n } = t;
  e.forEach((r) => {
    const { hashType: o } = Ue.signature.decode(r.signature);
    if (n !== o) throw new Error('Signature sighash does not match input sighash type');
  });
}
function vf(t, e, n) {
  if (!(0, ot.pubkeyInScript)(t, e))
    throw new Error(`Can not ${n} for this input with the key ${t.toString('hex')}`);
}
function tw(t) {
  if (!t.ins.every((n) => n.script && n.script.length === 0 && n.witness && n.witness.length === 0))
    throw new Error('Format Error: Transaction ScriptSigs are not empty');
}
function ew(t, e) {
  t.ins.forEach((n) => {
    kf(e, n);
  });
}
function kf(t, e) {
  const n = (0, ko.reverseBuffer)(A.from(e.hash)).toString('hex') + ':' + e.index;
  if (t.__TX_IN_CACHE[n]) throw new Error('Duplicate input detected.');
  t.__TX_IN_CACHE[n] = 1;
}
function Pf(t, e) {
  return (n, r, o, i) => {
    const s = t({ redeem: { output: o } }).output;
    if (!r.equals(s))
      throw new Error(`${e} for ${i} #${n} doesn't match the scriptPubKey in the prevout`);
  };
}
const lu = Pf(Qt.p2sh, 'Redeem script'),
  pu = Pf(Qt.p2wsh, 'Witness script');
function du(t, e, n, r) {
  if (!n.every(If)) throw new Error(`PSBT must be finalized to calculate ${e}`);
  if (t === '__FEE_RATE' && r.__FEE_RATE) return r.__FEE_RATE;
  if (t === '__FEE' && r.__FEE) return r.__FEE;
  let o,
    i = !0;
  if (
    (r.__EXTRACTED_TX ? ((o = r.__EXTRACTED_TX), (i = !1)) : (o = r.__TX.clone()),
    Nf(n, o, r, i),
    t === '__FEE_RATE')
  )
    return r.__FEE_RATE;
  if (t === '__FEE') return r.__FEE;
}
function nw(t, e, n, r, o, i) {
  const s = Cf(n);
  if (!Zy(e, n, s)) throw new Error(`Can not finalize input #${t}`);
  return rw(n, s, e.partialSig, r, o, i);
}
function rw(t, e, n, r, o, i) {
  let s, c;
  const u = iw(t, e, n),
    f = i ? Qt.p2wsh({ redeem: u }) : null,
    h = o ? Qt.p2sh({ redeem: f || u }) : null;
  return (
    r
      ? (f
          ? (c = (0, ot.witnessStackToScriptWitness)(f.witness))
          : (c = (0, ot.witnessStackToScriptWitness)(u.witness)),
        h && (s = h.input))
      : h
        ? (s = h.input)
        : (s = u.input),
    { finalScriptSig: s, finalScriptWitness: c }
  );
}
function yu(t, e, n, r, o) {
  const i = (0, xt.checkForInput)(t, e),
    { hash: s, sighashType: c, script: u } = xf(e, i, r, !1, o);
  return vf(n, u, 'sign'), { hash: s, sighashType: c };
}
function xf(t, e, n, r, o) {
  const i = n.__TX,
    s = e.sighashType || bt.Transaction.SIGHASH_ALL;
  Bf(s, o);
  let c, u;
  if (e.nonWitnessUtxo) {
    const a = di(n, e, t),
      d = i.ins[t].hash,
      l = a.getHash();
    if (!d.equals(l))
      throw new Error(
        `Non-witness UTXO hash for input #${t} doesn't match the hash specified in the prevout`
      );
    const g = i.ins[t].index;
    u = a.outs[g];
  } else if (e.witnessUtxo) u = e.witnessUtxo;
  else throw new Error('Need a Utxo input item for signing');
  const { meaningfulScript: f, type: h } = yi(
    u.script,
    t,
    'input',
    e.redeemScript,
    e.witnessScript
  );
  if (['p2sh-p2wsh', 'p2wsh'].indexOf(h) >= 0) c = i.hashForWitnessV0(t, f, u.value, s);
  else if ((0, ot.isP2WPKH)(f)) {
    const a = Qt.p2pkh({ hash: f.slice(2) }).output;
    c = i.hashForWitnessV0(t, a, u.value, s);
  } else {
    if (e.nonWitnessUtxo === void 0 && n.__UNSAFE_SIGN_NONSEGWIT === !1)
      throw new Error(`Input #${t} has witnessUtxo but non-segwit script: ${f.toString('hex')}`);
    !r &&
      n.__UNSAFE_SIGN_NONSEGWIT !== !1 &&
      console.warn(`Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecesor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`),
      (c = i.hashForSignature(t, f, s));
  }
  return { script: f, sighashType: s, hash: c };
}
function ow(t, e, n, r) {
  const o = [];
  if (e.tapInternalKey) {
    const s = Of(t, e, r);
    s && o.push(s);
  }
  if (e.tapScriptSig) {
    const s = e.tapScriptSig.map((c) => c.pubkey);
    o.push(...s);
  }
  return o.map((s) => ps(t, e, n, s, r)).flat();
}
function Of(t, e, n) {
  const { script: r } = uc(t, e, n);
  return (0, ot.isP2TR)(r) ? r.subarray(2, 34) : null;
}
function wu(t) {
  return t.length === 64 ? t : t.subarray(0, 64);
}
function ps(t, e, n, r, o, i, s) {
  const c = o.__TX,
    u = e.sighashType || bt.Transaction.SIGHASH_DEFAULT;
  Bf(u, s);
  const f = n.map((g, p) => uc(p, g, o)),
    h = f.map((g) => g.script),
    a = f.map((g) => g.value),
    d = [];
  if (e.tapInternalKey && !i) {
    const g = Of(t, e, o) || A.from([]);
    if ((0, Y.toXOnly)(r).equals(g)) {
      const p = c.hashForWitnessV1(t, h, a, u);
      d.push({ pubkey: r, hash: p });
    }
  }
  const l = (e.tapLeafScript || [])
    .filter((g) => (0, ot.pubkeyInScript)(r, g.script))
    .map((g) => {
      const p = (0, zy.tapleafHash)({ output: g.script, version: g.leafVersion });
      return Object.assign({ hash: p }, g);
    })
    .filter((g) => !i || i.equals(g.hash))
    .map((g) => {
      const p = c.hashForWitnessV1(t, h, a, bt.Transaction.SIGHASH_DEFAULT, g.hash);
      return { pubkey: r, hash: p, leafHash: g.hash };
    });
  return d.concat(l);
}
function Bf(t, e) {
  if (e && e.indexOf(t) < 0) {
    const n = uw(t);
    throw new Error(
      `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${n}`
    );
  }
}
function iw(t, e, n) {
  let r;
  switch (e) {
    case 'multisig':
      const o = cw(t, n);
      r = Qt.p2ms({ output: t, signatures: o });
      break;
    case 'pubkey':
      r = Qt.p2pk({ output: t, signature: n[0].signature });
      break;
    case 'pubkeyhash':
      r = Qt.p2pkh({ output: t, pubkey: n[0].pubkey, signature: n[0].signature });
      break;
    case 'witnesspubkeyhash':
      r = Qt.p2wpkh({ output: t, pubkey: n[0].pubkey, signature: n[0].signature });
      break;
  }
  return r;
}
function sw(t, e, n) {
  const r = n.__TX,
    o = { script: null, isSegwit: !1, isP2SH: !1, isP2WSH: !1 };
  if (((o.isP2SH = !!e.redeemScript), (o.isP2WSH = !!e.witnessScript), e.witnessScript))
    o.script = e.witnessScript;
  else if (e.redeemScript) o.script = e.redeemScript;
  else if (e.nonWitnessUtxo) {
    const i = di(n, e, t),
      s = r.ins[t].index;
    o.script = i.outs[s].script;
  } else e.witnessUtxo && (o.script = e.witnessUtxo.script);
  return (e.witnessScript || (0, ot.isP2WPKH)(o.script)) && (o.isSegwit = !0), o;
}
function gu(t, e, n) {
  const r = (0, xt.checkForInput)(e, t);
  if (!r.bip32Derivation || r.bip32Derivation.length === 0)
    throw new Error('Need bip32Derivation to sign with HD');
  const o = r.bip32Derivation
    .map((s) => {
      if (s.masterFingerprint.equals(n.fingerprint)) return s;
    })
    .filter((s) => !!s);
  if (o.length === 0)
    throw new Error('Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint');
  return o.map((s) => {
    const c = n.derivePath(s.path);
    if (!s.pubkey.equals(c.publicKey)) throw new Error('pubkey did not match bip32Derivation');
    return c;
  });
}
function cw(t, e) {
  return Qt.p2ms({ output: t })
    .pubkeys.map((r) => (e.filter((o) => o.pubkey.equals(r))[0] || {}).signature)
    .filter((r) => !!r);
}
function Uf(t) {
  let e = 0;
  function n(s) {
    return (e += s), t.slice(e - s, e);
  }
  function r() {
    const s = uu.decode(t, e);
    return (e += uu.decode.bytes), s;
  }
  function o() {
    return n(r());
  }
  function i() {
    const s = r(),
      c = [];
    for (let u = 0; u < s; u++) c.push(o());
    return c;
  }
  return i();
}
function uw(t) {
  let e = t & bt.Transaction.SIGHASH_ANYONECANPAY ? 'SIGHASH_ANYONECANPAY | ' : '';
  switch (t & 31) {
    case bt.Transaction.SIGHASH_ALL:
      e += 'SIGHASH_ALL';
      break;
    case bt.Transaction.SIGHASH_SINGLE:
      e += 'SIGHASH_SINGLE';
      break;
    case bt.Transaction.SIGHASH_NONE:
      e += 'SIGHASH_NONE';
      break;
  }
  return e;
}
function ds(t, e, n) {
  t.__NON_WITNESS_UTXO_BUF_CACHE[n] = e.nonWitnessUtxo;
  const r = bt.Transaction.fromBuffer(e.nonWitnessUtxo);
  t.__NON_WITNESS_UTXO_TX_CACHE[n] = r;
  const o = t,
    i = n;
  delete e.nonWitnessUtxo,
    Object.defineProperty(e, 'nonWitnessUtxo', {
      enumerable: !0,
      get() {
        const s = o.__NON_WITNESS_UTXO_BUF_CACHE[i],
          c = o.__NON_WITNESS_UTXO_TX_CACHE[i];
        if (s !== void 0) return s;
        {
          const u = c.toBuffer();
          return (o.__NON_WITNESS_UTXO_BUF_CACHE[i] = u), u;
        }
      },
      set(s) {
        o.__NON_WITNESS_UTXO_BUF_CACHE[i] = s;
      },
    });
}
function Nf(t, e, n, r) {
  let o = 0;
  t.forEach((u, f) => {
    if (
      (r && u.finalScriptSig && (e.ins[f].script = u.finalScriptSig),
      r && u.finalScriptWitness && (e.ins[f].witness = Uf(u.finalScriptWitness)),
      u.witnessUtxo)
    )
      o += u.witnessUtxo.value;
    else if (u.nonWitnessUtxo) {
      const h = di(n, u, f),
        a = e.ins[f].index,
        d = h.outs[a];
      o += d.value;
    }
  });
  const i = e.outs.reduce((u, f) => u + f.value, 0),
    s = o - i;
  if (s < 0) throw new Error('Outputs are spending more than Inputs');
  const c = e.virtualSize();
  (n.__FEE = s), (n.__EXTRACTED_TX = e), (n.__FEE_RATE = Math.floor(s / c));
}
function di(t, e, n) {
  const r = t.__NON_WITNESS_UTXO_TX_CACHE;
  return r[n] || ds(t, e, n), r[n];
}
function Hf(t, e, n) {
  const { script: r } = uc(t, e, n);
  return r;
}
function uc(t, e, n) {
  if (e.witnessUtxo !== void 0) return { script: e.witnessUtxo.script, value: e.witnessUtxo.value };
  if (e.nonWitnessUtxo !== void 0) {
    const o = di(n, e, t).outs[n.__TX.ins[t].index];
    return { script: o.script, value: o.value };
  } else throw new Error("Can't find pubkey in input without Utxo data");
}
function aw(t, e, n, r) {
  const o = Hf(n, e, r),
    { meaningfulScript: i } = yi(o, n, 'input', e.redeemScript, e.witnessScript);
  return (0, ot.pubkeyInScript)(t, i);
}
function fw(t, e, n, r) {
  const o = r.__TX.outs[n].script,
    { meaningfulScript: i } = yi(o, n, 'output', e.redeemScript, e.witnessScript);
  return (0, ot.pubkeyInScript)(t, i);
}
function hw(t) {
  if (!t) return;
  const e = Ue.decompile(t);
  if (!e) return;
  const n = e[e.length - 1];
  if (!(!A.isBuffer(n) || Lf(n) || dw(n) || !Ue.decompile(n))) return n;
}
function lw(t) {
  if (!t) return;
  const e = Uf(t),
    n = e[e.length - 1];
  if (!(Lf(n) || !Ue.decompile(n))) return n;
}
function pw(t) {
  if (t.length === 65) {
    const e = t[64] & 1,
      n = t.slice(0, 33);
    return (n[0] = 2 | e), n;
  }
  return t.slice();
}
function Lf(t) {
  return t.length === 33 && Ue.isCanonicalPubKey(t);
}
function dw(t) {
  return Ue.isCanonicalScriptSignature(t);
}
function yi(t, e, n, r, o) {
  const i = (0, ot.isP2SHScript)(t),
    s = i && r && (0, ot.isP2WSHScript)(r),
    c = (0, ot.isP2WSHScript)(t);
  if (i && r === void 0) throw new Error('scriptPubkey is P2SH but redeemScript missing');
  if ((c || s) && o === void 0)
    throw new Error('scriptPubkey or redeemScript is P2WSH but witnessScript missing');
  let u;
  return (
    s
      ? ((u = o), lu(e, t, r, n), pu(e, r, o, n), xo(u))
      : c
        ? ((u = o), pu(e, t, o, n), xo(u))
        : i
          ? ((u = r), lu(e, t, r, n))
          : (u = t),
    { meaningfulScript: u, type: s ? 'p2sh-p2wsh' : i ? 'p2sh' : c ? 'p2wsh' : 'raw' }
  );
}
function xo(t) {
  if ((0, ot.isP2WPKH)(t) || (0, ot.isP2SHScript)(t))
    throw new Error('P2WPKH or P2SH can not be contained within P2WSH');
}
function Cf(t) {
  return (0, ot.isP2WPKH)(t)
    ? 'witnesspubkeyhash'
    : (0, ot.isP2PKH)(t)
      ? 'pubkeyhash'
      : (0, ot.isP2MS)(t)
        ? 'multisig'
        : (0, ot.isP2PK)(t)
          ? 'pubkey'
          : 'nonstandard';
}
function Ar(t) {
  return [...Array(t).keys()];
}
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.initEccLib =
      t.Transaction =
      t.opcodes =
      t.Psbt =
      t.Block =
      t.script =
      t.payments =
      t.networks =
      t.crypto =
      t.address =
        void 0);
  const e = Ut;
  t.address = e;
  const n = Ee;
  t.crypto = n;
  const r = lt;
  t.networks = r;
  const o = pr;
  t.payments = o;
  const i = Lt;
  t.script = i;
  var s = ui;
  Object.defineProperty(t, 'Block', {
    enumerable: !0,
    get: function () {
      return s.Block;
    },
  });
  var c = fi;
  Object.defineProperty(t, 'Psbt', {
    enumerable: !0,
    get: function () {
      return c.Psbt;
    },
  });
  var u = on;
  Object.defineProperty(t, 'opcodes', {
    enumerable: !0,
    get: function () {
      return u.OPS;
    },
  });
  var f = hn;
  Object.defineProperty(t, 'Transaction', {
    enumerable: !0,
    get: function () {
      return f.Transaction;
    },
  });
  var h = sn;
  Object.defineProperty(t, 'initEccLib', {
    enumerable: !0,
    get: function () {
      return h.initEccLib;
    },
  });
})(Jl);
function bu(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
function $f(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function yw(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  bu(t.outputLen), bu(t.blockLen);
}
function Oo(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
function ww(t, e) {
  $f(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const zi = typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Rf = (t) =>
    t instanceof Uint8Array,
  Xi = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  pe = (t, e) => (t << (32 - e)) | (t >>> e),
  gw = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!gw) throw new Error('Non little-endian hardware is not supported');
function bw(t) {
  if (typeof t != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function ac(t) {
  if ((typeof t == 'string' && (t = bw(t)), !Rf(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function Ew(...t) {
  const e = new Uint8Array(t.reduce((r, o) => r + o.length, 0));
  let n = 0;
  return (
    t.forEach((r) => {
      if (!Rf(r)) throw new Error('Uint8Array expected');
      e.set(r, n), (n += r.length);
    }),
    e
  );
}
class Ff {
  clone() {
    return this._cloneInto();
  }
}
function Kf(t) {
  const e = (r) => t().update(ac(r)).digest(),
    n = t();
  return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = () => t()), e;
}
function Mf(t = 32) {
  if (zi && typeof zi.getRandomValues == 'function') return zi.getRandomValues(new Uint8Array(t));
  throw new Error('crypto.getRandomValues must be defined');
}
class Wf extends Ff {
  constructor(e, n) {
    super(), (this.finished = !1), (this.destroyed = !1), yw(e);
    const r = ac(n);
    if (((this.iHash = e.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const o = this.blockLen,
      i = new Uint8Array(o);
    i.set(r.length > o ? e.create().update(r).digest() : r);
    for (let s = 0; s < i.length; s++) i[s] ^= 54;
    this.iHash.update(i), (this.oHash = e.create());
    for (let s = 0; s < i.length; s++) i[s] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(e) {
    return Oo(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Oo(this),
      $f(e, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(e),
      this.oHash.update(e),
      this.oHash.digestInto(e),
      this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: o, destroyed: i, blockLen: s, outputLen: c } = this;
    return (
      (e = e),
      (e.finished = o),
      (e.destroyed = i),
      (e.blockLen = s),
      (e.outputLen = c),
      (e.oHash = n._cloneInto(e.oHash)),
      (e.iHash = r._cloneInto(e.iHash)),
      e
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const Df = (t, e, n) => new Wf(t, e).update(n).digest();
Df.create = (t, e) => new Wf(t, e);
function mw(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const o = BigInt(32),
    i = BigInt(4294967295),
    s = Number((n >> o) & i),
    c = Number(n & i),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
class Vf extends Ff {
  constructor(e, n, r, o) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = o),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = Xi(this.buffer));
  }
  update(e) {
    Oo(this);
    const { view: n, buffer: r, blockLen: o } = this;
    e = ac(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const c = Math.min(o - this.pos, i - s);
      if (c === o) {
        const u = Xi(e);
        for (; o <= i - s; s += o) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === o && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    Oo(this), ww(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: o, isLE: i } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > o - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < o; a++) n[a] = 0;
    mw(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const c = Xi(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], i);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: c } = this;
    return (
      (e.length = o), (e.pos = c), (e.finished = i), (e.destroyed = s), o % n && e.buffer.set(r), e
    );
  }
}
const Sw = (t, e, n) => (t & e) ^ (~t & n),
  Tw = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  _w = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  ze = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Xe = new Uint32Array(64);
class Aw extends Vf {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = ze[0] | 0),
      (this.B = ze[1] | 0),
      (this.C = ze[2] | 0),
      (this.D = ze[3] | 0),
      (this.E = ze[4] | 0),
      (this.F = ze[5] | 0),
      (this.G = ze[6] | 0),
      (this.H = ze[7] | 0);
  }
  get() {
    const { A: e, B: n, C: r, D: o, E: i, F: s, G: c, H: u } = this;
    return [e, n, r, o, i, s, c, u];
  }
  set(e, n, r, o, i, s, c, u) {
    (this.A = e | 0),
      (this.B = n | 0),
      (this.C = r | 0),
      (this.D = o | 0),
      (this.E = i | 0),
      (this.F = s | 0),
      (this.G = c | 0),
      (this.H = u | 0);
  }
  process(e, n) {
    for (let a = 0; a < 16; a++, n += 4) Xe[a] = e.getUint32(n, !1);
    for (let a = 16; a < 64; a++) {
      const d = Xe[a - 15],
        l = Xe[a - 2],
        g = pe(d, 7) ^ pe(d, 18) ^ (d >>> 3),
        p = pe(l, 17) ^ pe(l, 19) ^ (l >>> 10);
      Xe[a] = (p + Xe[a - 7] + g + Xe[a - 16]) | 0;
    }
    let { A: r, B: o, C: i, D: s, E: c, F: u, G: f, H: h } = this;
    for (let a = 0; a < 64; a++) {
      const d = pe(c, 6) ^ pe(c, 11) ^ pe(c, 25),
        l = (h + d + Sw(c, u, f) + _w[a] + Xe[a]) | 0,
        p = ((pe(r, 2) ^ pe(r, 13) ^ pe(r, 22)) + Tw(r, o, i)) | 0;
      (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = i), (i = o), (o = r), (r = (l + p) | 0);
    }
    (r = (r + this.A) | 0),
      (o = (o + this.B) | 0),
      (i = (i + this.C) | 0),
      (s = (s + this.D) | 0),
      (c = (c + this.E) | 0),
      (u = (u + this.F) | 0),
      (f = (f + this.G) | 0),
      (h = (h + this.H) | 0),
      this.set(r, o, i, s, c, u, f, h);
  }
  roundClean() {
    Xe.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const $t = Kf(() => new Aw());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const jf = BigInt(0),
  wi = BigInt(1),
  Iw = BigInt(2),
  gi = (t) => t instanceof Uint8Array,
  vw = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, '0'));
function fr(t) {
  if (!gi(t)) throw new Error('Uint8Array expected');
  let e = '';
  for (let n = 0; n < t.length; n++) e += vw[t[n]];
  return e;
}
function Gf(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function fc(t) {
  if (typeof t != 'string') throw new Error('hex string expected, got ' + typeof t);
  return BigInt(t === '' ? '0' : `0x${t}`);
}
function hr(t) {
  if (typeof t != 'string') throw new Error('hex string expected, got ' + typeof t);
  const e = t.length;
  if (e % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + e);
  const n = new Uint8Array(e / 2);
  for (let r = 0; r < n.length; r++) {
    const o = r * 2,
      i = t.slice(o, o + 2),
      s = Number.parseInt(i, 16);
    if (Number.isNaN(s) || s < 0) throw new Error('Invalid byte sequence');
    n[r] = s;
  }
  return n;
}
function Rt(t) {
  return fc(fr(t));
}
function hc(t) {
  if (!gi(t)) throw new Error('Uint8Array expected');
  return fc(fr(Uint8Array.from(t).reverse()));
}
function un(t, e) {
  return hr(t.toString(16).padStart(e * 2, '0'));
}
function lc(t, e) {
  return un(t, e).reverse();
}
function kw(t) {
  return hr(Gf(t));
}
function At(t, e, n) {
  let r;
  if (typeof e == 'string')
    try {
      r = hr(e);
    } catch (i) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${i}`);
    }
  else if (gi(e)) r = Uint8Array.from(e);
  else throw new Error(`${t} must be hex string or Uint8Array`);
  const o = r.length;
  if (typeof n == 'number' && o !== n) throw new Error(`${t} expected ${n} bytes, got ${o}`);
  return r;
}
function Tn(...t) {
  const e = new Uint8Array(t.reduce((r, o) => r + o.length, 0));
  let n = 0;
  return (
    t.forEach((r) => {
      if (!gi(r)) throw new Error('Uint8Array expected');
      e.set(r, n), (n += r.length);
    }),
    e
  );
}
function Pw(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function xw(t) {
  if (typeof t != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ow(t) {
  let e;
  for (e = 0; t > jf; t >>= wi, e += 1);
  return e;
}
function Bw(t, e) {
  return (t >> BigInt(e)) & wi;
}
const Uw = (t, e, n) => t | ((n ? wi : jf) << BigInt(e)),
  pc = (t) => (Iw << BigInt(t - 1)) - wi,
  Yi = (t) => new Uint8Array(t),
  Eu = (t) => Uint8Array.from(t);
function qf(t, e, n) {
  if (typeof t != 'number' || t < 2) throw new Error('hashLen must be a number');
  if (typeof e != 'number' || e < 2) throw new Error('qByteLen must be a number');
  if (typeof n != 'function') throw new Error('hmacFn must be a function');
  let r = Yi(t),
    o = Yi(t),
    i = 0;
  const s = () => {
      r.fill(1), o.fill(0), (i = 0);
    },
    c = (...a) => n(o, r, ...a),
    u = (a = Yi()) => {
      (o = c(Eu([0]), a)), (r = c()), a.length !== 0 && ((o = c(Eu([1]), a)), (r = c()));
    },
    f = () => {
      if (i++ >= 1e3) throw new Error('drbg: tried 1000 values');
      let a = 0;
      const d = [];
      for (; a < e; ) {
        r = c();
        const l = r.slice();
        d.push(l), (a += r.length);
      }
      return Tn(...d);
    };
  return (a, d) => {
    s(), u(a);
    let l;
    for (; !(l = d(f())); ) u();
    return s(), l;
  };
}
const Nw = {
  bigint: (t) => typeof t == 'bigint',
  function: (t) => typeof t == 'function',
  boolean: (t) => typeof t == 'boolean',
  string: (t) => typeof t == 'string',
  stringOrUint8Array: (t) => typeof t == 'string' || t instanceof Uint8Array,
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == 'function' && Number.isSafeInteger(t.outputLen),
};
function jr(t, e, n = {}) {
  const r = (o, i, s) => {
    const c = Nw[i];
    if (typeof c != 'function') throw new Error(`Invalid validator "${i}", expected function`);
    const u = t[o];
    if (!(s && u === void 0) && !c(u, t))
      throw new Error(`Invalid param ${String(o)}=${u} (${typeof u}), expected ${i}`);
  };
  for (const [o, i] of Object.entries(e)) r(o, i, !1);
  for (const [o, i] of Object.entries(n)) r(o, i, !0);
  return t;
}
const Hw = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      bitGet: Bw,
      bitLen: Ow,
      bitMask: pc,
      bitSet: Uw,
      bytesToHex: fr,
      bytesToNumberBE: Rt,
      bytesToNumberLE: hc,
      concatBytes: Tn,
      createHmacDrbg: qf,
      ensureBytes: At,
      equalBytes: Pw,
      hexToBytes: hr,
      hexToNumber: fc,
      numberToBytesBE: un,
      numberToBytesLE: lc,
      numberToHexUnpadded: Gf,
      numberToVarBytesBE: kw,
      utf8ToBytes: xw,
      validateObject: jr,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ht = BigInt(0),
  tt = BigInt(1),
  gn = BigInt(2),
  Lw = BigInt(3),
  ys = BigInt(4),
  mu = BigInt(5),
  Su = BigInt(8);
BigInt(9);
BigInt(16);
function mt(t, e) {
  const n = t % e;
  return n >= ht ? n : e + n;
}
function Cw(t, e, n) {
  if (n <= ht || e < ht) throw new Error('Expected power/modulo > 0');
  if (n === tt) return ht;
  let r = tt;
  for (; e > ht; ) e & tt && (r = (r * t) % n), (t = (t * t) % n), (e >>= tt);
  return r;
}
function qt(t, e, n) {
  let r = t;
  for (; e-- > ht; ) (r *= r), (r %= n);
  return r;
}
function ws(t, e) {
  if (t === ht || e <= ht)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = mt(t, e),
    r = e,
    o = ht,
    i = tt;
  for (; n !== ht; ) {
    const c = r / n,
      u = r % n,
      f = o - i * c;
    (r = n), (n = u), (o = i), (i = f);
  }
  if (r !== tt) throw new Error('invert: does not exist');
  return mt(o, e);
}
function $w(t) {
  const e = (t - tt) / gn;
  let n, r, o;
  for (n = t - tt, r = 0; n % gn === ht; n /= gn, r++);
  for (o = gn; o < t && Cw(o, e, t) !== t - tt; o++);
  if (r === 1) {
    const s = (t + tt) / ys;
    return function (u, f) {
      const h = u.pow(f, s);
      if (!u.eql(u.sqr(h), f)) throw new Error('Cannot find square root');
      return h;
    };
  }
  const i = (n + tt) / gn;
  return function (c, u) {
    if (c.pow(u, e) === c.neg(c.ONE)) throw new Error('Cannot find square root');
    let f = r,
      h = c.pow(c.mul(c.ONE, o), n),
      a = c.pow(u, i),
      d = c.pow(u, n);
    for (; !c.eql(d, c.ONE); ) {
      if (c.eql(d, c.ZERO)) return c.ZERO;
      let l = 1;
      for (let p = c.sqr(d); l < f && !c.eql(p, c.ONE); l++) p = c.sqr(p);
      const g = c.pow(h, tt << BigInt(f - l - 1));
      (h = c.sqr(g)), (a = c.mul(a, g)), (d = c.mul(d, h)), (f = l);
    }
    return a;
  };
}
function Rw(t) {
  if (t % ys === Lw) {
    const e = (t + tt) / ys;
    return function (r, o) {
      const i = r.pow(o, e);
      if (!r.eql(r.sqr(i), o)) throw new Error('Cannot find square root');
      return i;
    };
  }
  if (t % Su === mu) {
    const e = (t - mu) / Su;
    return function (r, o) {
      const i = r.mul(o, gn),
        s = r.pow(i, e),
        c = r.mul(o, s),
        u = r.mul(r.mul(c, gn), s),
        f = r.mul(c, r.sub(u, r.ONE));
      if (!r.eql(r.sqr(f), o)) throw new Error('Cannot find square root');
      return f;
    };
  }
  return $w(t);
}
const Fw = [
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
function Kw(t) {
  const e = { ORDER: 'bigint', MASK: 'bigint', BYTES: 'isSafeInteger', BITS: 'isSafeInteger' },
    n = Fw.reduce((r, o) => ((r[o] = 'function'), r), e);
  return jr(t, n);
}
function Mw(t, e, n) {
  if (n < ht) throw new Error('Expected power > 0');
  if (n === ht) return t.ONE;
  if (n === tt) return e;
  let r = t.ONE,
    o = e;
  for (; n > ht; ) n & tt && (r = t.mul(r, o)), (o = t.sqr(o)), (n >>= tt);
  return r;
}
function Ww(t, e) {
  const n = new Array(e.length),
    r = e.reduce((i, s, c) => (t.is0(s) ? i : ((n[c] = i), t.mul(i, s))), t.ONE),
    o = t.inv(r);
  return e.reduceRight((i, s, c) => (t.is0(s) ? i : ((n[c] = t.mul(i, n[c])), t.mul(i, s))), o), n;
}
function zf(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length,
    r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Dw(t, e, n = !1, r = {}) {
  if (t <= ht) throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: o, nByteLength: i } = zf(t, e);
  if (i > 2048) throw new Error('Field lengths over 2048 bytes are not supported');
  const s = Rw(t),
    c = Object.freeze({
      ORDER: t,
      BITS: o,
      BYTES: i,
      MASK: pc(o),
      ZERO: ht,
      ONE: tt,
      create: (u) => mt(u, t),
      isValid: (u) => {
        if (typeof u != 'bigint')
          throw new Error(`Invalid field element: expected bigint, got ${typeof u}`);
        return ht <= u && u < t;
      },
      is0: (u) => u === ht,
      isOdd: (u) => (u & tt) === tt,
      neg: (u) => mt(-u, t),
      eql: (u, f) => u === f,
      sqr: (u) => mt(u * u, t),
      add: (u, f) => mt(u + f, t),
      sub: (u, f) => mt(u - f, t),
      mul: (u, f) => mt(u * f, t),
      pow: (u, f) => Mw(c, u, f),
      div: (u, f) => mt(u * ws(f, t), t),
      sqrN: (u) => u * u,
      addN: (u, f) => u + f,
      subN: (u, f) => u - f,
      mulN: (u, f) => u * f,
      inv: (u) => ws(u, t),
      sqrt: r.sqrt || ((u) => s(c, u)),
      invertBatch: (u) => Ww(c, u),
      cmov: (u, f, h) => (h ? f : u),
      toBytes: (u) => (n ? lc(u, i) : un(u, i)),
      fromBytes: (u) => {
        if (u.length !== i) throw new Error(`Fp.fromBytes: expected ${i}, got ${u.length}`);
        return n ? hc(u) : Rt(u);
      },
    });
  return Object.freeze(c);
}
function Xf(t) {
  if (typeof t != 'bigint') throw new Error('field order must be bigint');
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Yf(t) {
  const e = Xf(t);
  return e + Math.ceil(e / 2);
}
function Vw(t, e, n = !1) {
  const r = t.length,
    o = Xf(e),
    i = Yf(e);
  if (r < 16 || r < i || r > 1024) throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);
  const s = n ? Rt(t) : hc(t),
    c = mt(s, e - tt) + tt;
  return n ? lc(c, o) : un(c, o);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const jw = BigInt(0),
  Zi = BigInt(1);
function Gw(t, e) {
  const n = (o, i) => {
      const s = i.negate();
      return o ? s : i;
    },
    r = (o) => {
      const i = Math.ceil(e / o) + 1,
        s = 2 ** (o - 1);
      return { windows: i, windowSize: s };
    };
  return {
    constTimeNegate: n,
    unsafeLadder(o, i) {
      let s = t.ZERO,
        c = o;
      for (; i > jw; ) i & Zi && (s = s.add(c)), (c = c.double()), (i >>= Zi);
      return s;
    },
    precomputeWindow(o, i) {
      const { windows: s, windowSize: c } = r(i),
        u = [];
      let f = o,
        h = f;
      for (let a = 0; a < s; a++) {
        (h = f), u.push(h);
        for (let d = 1; d < c; d++) (h = h.add(f)), u.push(h);
        f = h.double();
      }
      return u;
    },
    wNAF(o, i, s) {
      const { windows: c, windowSize: u } = r(o);
      let f = t.ZERO,
        h = t.BASE;
      const a = BigInt(2 ** o - 1),
        d = 2 ** o,
        l = BigInt(o);
      for (let g = 0; g < c; g++) {
        const p = g * u;
        let b = Number(s & a);
        (s >>= l), b > u && ((b -= d), (s += Zi));
        const m = p,
          I = p + Math.abs(b) - 1,
          _ = g % 2 !== 0,
          w = b < 0;
        b === 0 ? (h = h.add(n(_, i[m]))) : (f = f.add(n(w, i[I])));
      }
      return { p: f, f: h };
    },
    wNAFCached(o, i, s, c) {
      const u = o._WINDOW_SIZE || 1;
      let f = i.get(o);
      return (
        f || ((f = this.precomputeWindow(o, u)), u !== 1 && i.set(o, c(f))), this.wNAF(u, f, s)
      );
    },
  };
}
function Zf(t) {
  return (
    Kw(t.Fp),
    jr(
      t,
      { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
      { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
    ),
    Object.freeze({ ...zf(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function qw(t) {
  const e = Zf(t);
  jr(
    e,
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
  const { endo: n, Fp: r, a: o } = e;
  if (n) {
    if (!r.eql(o, r.ZERO))
      throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
    if (typeof n != 'object' || typeof n.beta != 'bigint' || typeof n.splitScalar != 'function')
      throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: zw, hexToBytes: Xw } = Hw,
  bn = {
    Err: class extends Error {
      constructor(e = '') {
        super(e);
      }
    },
    _parseInt(t) {
      const { Err: e } = bn;
      if (t.length < 2 || t[0] !== 2) throw new e('Invalid signature integer tag');
      const n = t[1],
        r = t.subarray(2, n + 2);
      if (!n || r.length !== n) throw new e('Invalid signature integer: wrong length');
      if (r[0] & 128) throw new e('Invalid signature integer: negative');
      if (r[0] === 0 && !(r[1] & 128))
        throw new e('Invalid signature integer: unnecessary leading zero');
      return { d: zw(r), l: t.subarray(n + 2) };
    },
    toSig(t) {
      const { Err: e } = bn,
        n = typeof t == 'string' ? Xw(t) : t;
      if (!(n instanceof Uint8Array)) throw new Error('ui8a expected');
      let r = n.length;
      if (r < 2 || n[0] != 48) throw new e('Invalid signature tag');
      if (n[1] !== r - 2) throw new e('Invalid signature: incorrect length');
      const { d: o, l: i } = bn._parseInt(n.subarray(2)),
        { d: s, l: c } = bn._parseInt(i);
      if (c.length) throw new e('Invalid signature: left bytes after parsing');
      return { r: o, s };
    },
    hexFromSig(t) {
      const e = (f) => (Number.parseInt(f[0], 16) & 8 ? '00' + f : f),
        n = (f) => {
          const h = f.toString(16);
          return h.length & 1 ? `0${h}` : h;
        },
        r = e(n(t.s)),
        o = e(n(t.r)),
        i = r.length / 2,
        s = o.length / 2,
        c = n(i),
        u = n(s);
      return `30${n(s + i + 4)}02${u}${o}02${c}${r}`;
    },
  },
  Oe = BigInt(0),
  Zt = BigInt(1);
BigInt(2);
const Tu = BigInt(3);
BigInt(4);
function Yw(t) {
  const e = qw(t),
    { Fp: n } = e,
    r =
      e.toBytes ||
      ((g, p, b) => {
        const m = p.toAffine();
        return Tn(Uint8Array.from([4]), n.toBytes(m.x), n.toBytes(m.y));
      }),
    o =
      e.fromBytes ||
      ((g) => {
        const p = g.subarray(1),
          b = n.fromBytes(p.subarray(0, n.BYTES)),
          m = n.fromBytes(p.subarray(n.BYTES, 2 * n.BYTES));
        return { x: b, y: m };
      });
  function i(g) {
    const { a: p, b } = e,
      m = n.sqr(g),
      I = n.mul(m, g);
    return n.add(n.add(I, n.mul(g, p)), b);
  }
  if (!n.eql(n.sqr(e.Gy), i(e.Gx))) throw new Error('bad generator point: equation left != right');
  function s(g) {
    return typeof g == 'bigint' && Oe < g && g < e.n;
  }
  function c(g) {
    if (!s(g)) throw new Error('Expected valid bigint: 0 < bigint < curve.n');
  }
  function u(g) {
    const { allowedPrivateKeyLengths: p, nByteLength: b, wrapPrivateKey: m, n: I } = e;
    if (p && typeof g != 'bigint') {
      if ((g instanceof Uint8Array && (g = fr(g)), typeof g != 'string' || !p.includes(g.length)))
        throw new Error('Invalid key');
      g = g.padStart(b * 2, '0');
    }
    let _;
    try {
      _ = typeof g == 'bigint' ? g : Rt(At('private key', g, b));
    } catch {
      throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof g}`);
    }
    return m && (_ = mt(_, I)), c(_), _;
  }
  const f = new Map();
  function h(g) {
    if (!(g instanceof a)) throw new Error('ProjectivePoint expected');
  }
  class a {
    constructor(p, b, m) {
      if (((this.px = p), (this.py = b), (this.pz = m), p == null || !n.isValid(p)))
        throw new Error('x required');
      if (b == null || !n.isValid(b)) throw new Error('y required');
      if (m == null || !n.isValid(m)) throw new Error('z required');
    }
    static fromAffine(p) {
      const { x: b, y: m } = p || {};
      if (!p || !n.isValid(b) || !n.isValid(m)) throw new Error('invalid affine point');
      if (p instanceof a) throw new Error('projective point not allowed');
      const I = (_) => n.eql(_, n.ZERO);
      return I(b) && I(m) ? a.ZERO : new a(b, m, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(p) {
      const b = n.invertBatch(p.map((m) => m.pz));
      return p.map((m, I) => m.toAffine(b[I])).map(a.fromAffine);
    }
    static fromHex(p) {
      const b = a.fromAffine(o(At('pointHex', p)));
      return b.assertValidity(), b;
    }
    static fromPrivateKey(p) {
      return a.BASE.multiply(u(p));
    }
    _setWindowSize(p) {
      (this._WINDOW_SIZE = p), f.delete(this);
    }
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !n.is0(this.py)) return;
        throw new Error('bad point: ZERO');
      }
      const { x: p, y: b } = this.toAffine();
      if (!n.isValid(p) || !n.isValid(b)) throw new Error('bad point: x or y not FE');
      const m = n.sqr(b),
        I = i(p);
      if (!n.eql(m, I)) throw new Error('bad point: equation left != right');
      if (!this.isTorsionFree()) throw new Error('bad point: not in prime-order subgroup');
    }
    hasEvenY() {
      const { y: p } = this.toAffine();
      if (n.isOdd) return !n.isOdd(p);
      throw new Error("Field doesn't support isOdd");
    }
    equals(p) {
      h(p);
      const { px: b, py: m, pz: I } = this,
        { px: _, py: w, pz: E } = p,
        y = n.eql(n.mul(b, E), n.mul(_, I)),
        S = n.eql(n.mul(m, E), n.mul(w, I));
      return y && S;
    }
    negate() {
      return new a(this.px, n.neg(this.py), this.pz);
    }
    double() {
      const { a: p, b } = e,
        m = n.mul(b, Tu),
        { px: I, py: _, pz: w } = this;
      let E = n.ZERO,
        y = n.ZERO,
        S = n.ZERO,
        v = n.mul(I, I),
        T = n.mul(_, _),
        P = n.mul(w, w),
        O = n.mul(I, _);
      return (
        (O = n.add(O, O)),
        (S = n.mul(I, w)),
        (S = n.add(S, S)),
        (E = n.mul(p, S)),
        (y = n.mul(m, P)),
        (y = n.add(E, y)),
        (E = n.sub(T, y)),
        (y = n.add(T, y)),
        (y = n.mul(E, y)),
        (E = n.mul(O, E)),
        (S = n.mul(m, S)),
        (P = n.mul(p, P)),
        (O = n.sub(v, P)),
        (O = n.mul(p, O)),
        (O = n.add(O, S)),
        (S = n.add(v, v)),
        (v = n.add(S, v)),
        (v = n.add(v, P)),
        (v = n.mul(v, O)),
        (y = n.add(y, v)),
        (P = n.mul(_, w)),
        (P = n.add(P, P)),
        (v = n.mul(P, O)),
        (E = n.sub(E, v)),
        (S = n.mul(P, T)),
        (S = n.add(S, S)),
        (S = n.add(S, S)),
        new a(E, y, S)
      );
    }
    add(p) {
      h(p);
      const { px: b, py: m, pz: I } = this,
        { px: _, py: w, pz: E } = p;
      let y = n.ZERO,
        S = n.ZERO,
        v = n.ZERO;
      const T = e.a,
        P = n.mul(e.b, Tu);
      let O = n.mul(b, _),
        L = n.mul(m, w),
        $ = n.mul(I, E),
        nt = n.add(b, m),
        k = n.add(_, w);
      (nt = n.mul(nt, k)), (k = n.add(O, L)), (nt = n.sub(nt, k)), (k = n.add(b, I));
      let x = n.add(_, E);
      return (
        (k = n.mul(k, x)),
        (x = n.add(O, $)),
        (k = n.sub(k, x)),
        (x = n.add(m, I)),
        (y = n.add(w, E)),
        (x = n.mul(x, y)),
        (y = n.add(L, $)),
        (x = n.sub(x, y)),
        (v = n.mul(T, k)),
        (y = n.mul(P, $)),
        (v = n.add(y, v)),
        (y = n.sub(L, v)),
        (v = n.add(L, v)),
        (S = n.mul(y, v)),
        (L = n.add(O, O)),
        (L = n.add(L, O)),
        ($ = n.mul(T, $)),
        (k = n.mul(P, k)),
        (L = n.add(L, $)),
        ($ = n.sub(O, $)),
        ($ = n.mul(T, $)),
        (k = n.add(k, $)),
        (O = n.mul(L, k)),
        (S = n.add(S, O)),
        (O = n.mul(x, k)),
        (y = n.mul(nt, y)),
        (y = n.sub(y, O)),
        (O = n.mul(nt, L)),
        (v = n.mul(x, v)),
        (v = n.add(v, O)),
        new a(y, S, v)
      );
    }
    subtract(p) {
      return this.add(p.negate());
    }
    is0() {
      return this.equals(a.ZERO);
    }
    wNAF(p) {
      return l.wNAFCached(this, f, p, (b) => {
        const m = n.invertBatch(b.map((I) => I.pz));
        return b.map((I, _) => I.toAffine(m[_])).map(a.fromAffine);
      });
    }
    multiplyUnsafe(p) {
      const b = a.ZERO;
      if (p === Oe) return b;
      if ((c(p), p === Zt)) return this;
      const { endo: m } = e;
      if (!m) return l.unsafeLadder(this, p);
      let { k1neg: I, k1: _, k2neg: w, k2: E } = m.splitScalar(p),
        y = b,
        S = b,
        v = this;
      for (; _ > Oe || E > Oe; )
        _ & Zt && (y = y.add(v)),
          E & Zt && (S = S.add(v)),
          (v = v.double()),
          (_ >>= Zt),
          (E >>= Zt);
      return (
        I && (y = y.negate()),
        w && (S = S.negate()),
        (S = new a(n.mul(S.px, m.beta), S.py, S.pz)),
        y.add(S)
      );
    }
    multiply(p) {
      c(p);
      let b = p,
        m,
        I;
      const { endo: _ } = e;
      if (_) {
        const { k1neg: w, k1: E, k2neg: y, k2: S } = _.splitScalar(b);
        let { p: v, f: T } = this.wNAF(E),
          { p: P, f: O } = this.wNAF(S);
        (v = l.constTimeNegate(w, v)),
          (P = l.constTimeNegate(y, P)),
          (P = new a(n.mul(P.px, _.beta), P.py, P.pz)),
          (m = v.add(P)),
          (I = T.add(O));
      } else {
        const { p: w, f: E } = this.wNAF(b);
        (m = w), (I = E);
      }
      return a.normalizeZ([m, I])[0];
    }
    multiplyAndAddUnsafe(p, b, m) {
      const I = a.BASE,
        _ = (E, y) => (y === Oe || y === Zt || !E.equals(I) ? E.multiplyUnsafe(y) : E.multiply(y)),
        w = _(this, b).add(_(p, m));
      return w.is0() ? void 0 : w;
    }
    toAffine(p) {
      const { px: b, py: m, pz: I } = this,
        _ = this.is0();
      p == null && (p = _ ? n.ONE : n.inv(I));
      const w = n.mul(b, p),
        E = n.mul(m, p),
        y = n.mul(I, p);
      if (_) return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(y, n.ONE)) throw new Error('invZ was invalid');
      return { x: w, y: E };
    }
    isTorsionFree() {
      const { h: p, isTorsionFree: b } = e;
      if (p === Zt) return !0;
      if (b) return b(a, this);
      throw new Error('isTorsionFree() has not been declared for the elliptic curve');
    }
    clearCofactor() {
      const { h: p, clearCofactor: b } = e;
      return p === Zt ? this : b ? b(a, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(p = !0) {
      return this.assertValidity(), r(a, this, p);
    }
    toHex(p = !0) {
      return fr(this.toRawBytes(p));
    }
  }
  (a.BASE = new a(e.Gx, e.Gy, n.ONE)), (a.ZERO = new a(n.ZERO, n.ONE, n.ZERO));
  const d = e.nBitLength,
    l = Gw(a, e.endo ? Math.ceil(d / 2) : d);
  return {
    CURVE: e,
    ProjectivePoint: a,
    normPrivateKeyToScalar: u,
    weierstrassEquation: i,
    isWithinCurveOrder: s,
  };
}
function Zw(t) {
  const e = Zf(t);
  return (
    jr(
      e,
      { hash: 'hash', hmac: 'function', randomBytes: 'function' },
      { bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean' }
    ),
    Object.freeze({ lowS: !0, ...e })
  );
}
function Qw(t) {
  const e = Zw(t),
    { Fp: n, n: r } = e,
    o = n.BYTES + 1,
    i = 2 * n.BYTES + 1;
  function s(k) {
    return Oe < k && k < n.ORDER;
  }
  function c(k) {
    return mt(k, r);
  }
  function u(k) {
    return ws(k, r);
  }
  const {
      ProjectivePoint: f,
      normPrivateKeyToScalar: h,
      weierstrassEquation: a,
      isWithinCurveOrder: d,
    } = Yw({
      ...e,
      toBytes(k, x, U) {
        const W = x.toAffine(),
          F = n.toBytes(W.x),
          ft = Tn;
        return U
          ? ft(Uint8Array.from([x.hasEvenY() ? 2 : 3]), F)
          : ft(Uint8Array.from([4]), F, n.toBytes(W.y));
      },
      fromBytes(k) {
        const x = k.length,
          U = k[0],
          W = k.subarray(1);
        if (x === o && (U === 2 || U === 3)) {
          const F = Rt(W);
          if (!s(F)) throw new Error('Point is not on curve');
          const ft = a(F);
          let Kt = n.sqrt(ft);
          const Mt = (Kt & Zt) === Zt;
          return ((U & 1) === 1) !== Mt && (Kt = n.neg(Kt)), { x: F, y: Kt };
        } else if (x === i && U === 4) {
          const F = n.fromBytes(W.subarray(0, n.BYTES)),
            ft = n.fromBytes(W.subarray(n.BYTES, 2 * n.BYTES));
          return { x: F, y: ft };
        } else
          throw new Error(
            `Point of length ${x} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`
          );
      },
    }),
    l = (k) => fr(un(k, e.nByteLength));
  function g(k) {
    const x = r >> Zt;
    return k > x;
  }
  function p(k) {
    return g(k) ? c(-k) : k;
  }
  const b = (k, x, U) => Rt(k.slice(x, U));
  class m {
    constructor(x, U, W) {
      (this.r = x), (this.s = U), (this.recovery = W), this.assertValidity();
    }
    static fromCompact(x) {
      const U = e.nByteLength;
      return (x = At('compactSignature', x, U * 2)), new m(b(x, 0, U), b(x, U, 2 * U));
    }
    static fromDER(x) {
      const { r: U, s: W } = bn.toSig(At('DER', x));
      return new m(U, W);
    }
    assertValidity() {
      if (!d(this.r)) throw new Error('r must be 0 < r < CURVE.n');
      if (!d(this.s)) throw new Error('s must be 0 < s < CURVE.n');
    }
    addRecoveryBit(x) {
      return new m(this.r, this.s, x);
    }
    recoverPublicKey(x) {
      const { r: U, s: W, recovery: F } = this,
        ft = S(At('msgHash', x));
      if (F == null || ![0, 1, 2, 3].includes(F)) throw new Error('recovery id invalid');
      const Kt = F === 2 || F === 3 ? U + e.n : U;
      if (Kt >= n.ORDER) throw new Error('recovery id 2 or 3 invalid');
      const Mt = F & 1 ? '03' : '02',
        Le = f.fromHex(Mt + l(Kt)),
        Ce = u(Kt),
        Kn = c(-ft * Ce),
        wr = c(W * Ce),
        $e = f.BASE.multiplyAndAddUnsafe(Le, Kn, wr);
      if (!$e) throw new Error('point at infinify');
      return $e.assertValidity(), $e;
    }
    hasHighS() {
      return g(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new m(this.r, c(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return hr(this.toDERHex());
    }
    toDERHex() {
      return bn.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return hr(this.toCompactHex());
    }
    toCompactHex() {
      return l(this.r) + l(this.s);
    }
  }
  const I = {
    isValidPrivateKey(k) {
      try {
        return h(k), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: h,
    randomPrivateKey: () => {
      const k = Yf(e.n);
      return Vw(e.randomBytes(k), e.n);
    },
    precompute(k = 8, x = f.BASE) {
      return x._setWindowSize(k), x.multiply(BigInt(3)), x;
    },
  };
  function _(k, x = !0) {
    return f.fromPrivateKey(k).toRawBytes(x);
  }
  function w(k) {
    const x = k instanceof Uint8Array,
      U = typeof k == 'string',
      W = (x || U) && k.length;
    return x ? W === o || W === i : U ? W === 2 * o || W === 2 * i : k instanceof f;
  }
  function E(k, x, U = !0) {
    if (w(k)) throw new Error('first arg must be private key');
    if (!w(x)) throw new Error('second arg must be public key');
    return f.fromHex(x).multiply(h(k)).toRawBytes(U);
  }
  const y =
      e.bits2int ||
      function (k) {
        const x = Rt(k),
          U = k.length * 8 - e.nBitLength;
        return U > 0 ? x >> BigInt(U) : x;
      },
    S =
      e.bits2int_modN ||
      function (k) {
        return c(y(k));
      },
    v = pc(e.nBitLength);
  function T(k) {
    if (typeof k != 'bigint') throw new Error('bigint expected');
    if (!(Oe <= k && k < v)) throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return un(k, e.nByteLength);
  }
  function P(k, x, U = O) {
    if (['recovered', 'canonical'].some((pn) => pn in U))
      throw new Error('sign() legacy options not supported');
    const { hash: W, randomBytes: F } = e;
    let { lowS: ft, prehash: Kt, extraEntropy: Mt } = U;
    ft == null && (ft = !0), (k = At('msgHash', k)), Kt && (k = At('prehashed msgHash', W(k)));
    const Le = S(k),
      Ce = h(x),
      Kn = [T(Ce), T(Le)];
    if (Mt != null) {
      const pn = Mt === !0 ? F(n.BYTES) : Mt;
      Kn.push(At('extraEntropy', pn));
    }
    const wr = Tn(...Kn),
      $e = Le;
    function Pi(pn) {
      const Mn = y(pn);
      if (!d(Mn)) return;
      const vc = u(Mn),
        Wn = f.BASE.multiply(Mn).toAffine(),
        ne = c(Wn.x);
      if (ne === Oe) return;
      const Dn = c(vc * c($e + ne * Ce));
      if (Dn === Oe) return;
      let kc = (Wn.x === ne ? 0 : 2) | Number(Wn.y & Zt),
        Pc = Dn;
      return ft && g(Dn) && ((Pc = p(Dn)), (kc ^= 1)), new m(ne, Pc, kc);
    }
    return { seed: wr, k2sig: Pi };
  }
  const O = { lowS: e.lowS, prehash: !1 },
    L = { lowS: e.lowS, prehash: !1 };
  function $(k, x, U = O) {
    const { seed: W, k2sig: F } = P(k, x, U),
      ft = e;
    return qf(ft.hash.outputLen, ft.nByteLength, ft.hmac)(W, F);
  }
  f.BASE._setWindowSize(8);
  function nt(k, x, U, W = L) {
    var Wn;
    const F = k;
    if (((x = At('msgHash', x)), (U = At('publicKey', U)), 'strict' in W))
      throw new Error('options.strict was renamed to lowS');
    const { lowS: ft, prehash: Kt } = W;
    let Mt, Le;
    try {
      if (typeof F == 'string' || F instanceof Uint8Array)
        try {
          Mt = m.fromDER(F);
        } catch (ne) {
          if (!(ne instanceof bn.Err)) throw ne;
          Mt = m.fromCompact(F);
        }
      else if (typeof F == 'object' && typeof F.r == 'bigint' && typeof F.s == 'bigint') {
        const { r: ne, s: Dn } = F;
        Mt = new m(ne, Dn);
      } else throw new Error('PARSE');
      Le = f.fromHex(U);
    } catch (ne) {
      if (ne.message === 'PARSE')
        throw new Error('signature must be Signature instance, Uint8Array or hex string');
      return !1;
    }
    if (ft && Mt.hasHighS()) return !1;
    Kt && (x = e.hash(x));
    const { r: Ce, s: Kn } = Mt,
      wr = S(x),
      $e = u(Kn),
      Pi = c(wr * $e),
      pn = c(Ce * $e),
      Mn = (Wn = f.BASE.multiplyAndAddUnsafe(Le, Pi, pn)) == null ? void 0 : Wn.toAffine();
    return Mn ? c(Mn.x) === Ce : !1;
  }
  return {
    CURVE: e,
    getPublicKey: _,
    getSharedSecret: E,
    sign: $,
    verify: nt,
    ProjectivePoint: f,
    Signature: m,
    utils: I,
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Jw(t) {
  return { hash: t, hmac: (e, ...n) => Df(t, e, Ew(...n)), randomBytes: Mf };
}
function tg(t, e) {
  const n = (r) => Qw({ ...t, ...Jw(r) });
  return Object.freeze({ ...n(e), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const bi = BigInt(
    '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'
  ),
  Bo = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
  Qf = BigInt(1),
  Uo = BigInt(2),
  _u = (t, e) => (t + e / Uo) / e;
function Jf(t) {
  const e = bi,
    n = BigInt(3),
    r = BigInt(6),
    o = BigInt(11),
    i = BigInt(22),
    s = BigInt(23),
    c = BigInt(44),
    u = BigInt(88),
    f = (t * t * t) % e,
    h = (f * f * t) % e,
    a = (qt(h, n, e) * h) % e,
    d = (qt(a, n, e) * h) % e,
    l = (qt(d, Uo, e) * f) % e,
    g = (qt(l, o, e) * l) % e,
    p = (qt(g, i, e) * g) % e,
    b = (qt(p, c, e) * p) % e,
    m = (qt(b, u, e) * b) % e,
    I = (qt(m, c, e) * p) % e,
    _ = (qt(I, n, e) * h) % e,
    w = (qt(_, s, e) * g) % e,
    E = (qt(w, r, e) * f) % e,
    y = qt(E, Uo, e);
  if (!gs.eql(gs.sqr(y), t)) throw new Error('Cannot find square root');
  return y;
}
const gs = Dw(bi, void 0, void 0, { sqrt: Jf }),
  Gr = tg(
    {
      a: BigInt(0),
      b: BigInt(7),
      Fp: gs,
      n: Bo,
      Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
      Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
      h: BigInt(1),
      lowS: !0,
      endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (t) => {
          const e = Bo,
            n = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
            r = -Qf * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
            o = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
            i = n,
            s = BigInt('0x100000000000000000000000000000000'),
            c = _u(i * t, e),
            u = _u(-r * t, e);
          let f = mt(t - c * n - u * o, e),
            h = mt(-c * r - u * i, e);
          const a = f > s,
            d = h > s;
          if ((a && (f = e - f), d && (h = e - h), f > s || h > s))
            throw new Error('splitScalar: Endomorphism failed, k=' + t);
          return { k1neg: a, k1: f, k2neg: d, k2: h };
        },
      },
    },
    $t
  ),
  Ei = BigInt(0),
  th = (t) => typeof t == 'bigint' && Ei < t && t < bi,
  eg = (t) => typeof t == 'bigint' && Ei < t && t < Bo,
  Au = {};
function No(t, ...e) {
  let n = Au[t];
  if (n === void 0) {
    const r = $t(Uint8Array.from(t, (o) => o.charCodeAt(0)));
    (n = Tn(r, r)), (Au[t] = n);
  }
  return $t(Tn(n, ...e));
}
const dc = (t) => t.toRawBytes(!0).slice(1),
  bs = (t) => un(t, 32),
  Qi = (t) => mt(t, bi),
  Rr = (t) => mt(t, Bo),
  yc = Gr.ProjectivePoint,
  ng = (t, e, n) => yc.BASE.multiplyAndAddUnsafe(t, e, n);
function Es(t) {
  let e = Gr.utils.normPrivateKeyToScalar(t),
    n = yc.fromPrivateKey(e);
  return { scalar: n.hasEvenY() ? e : Rr(-e), bytes: dc(n) };
}
function eh(t) {
  if (!th(t)) throw new Error('bad x: need 0 < x < p');
  const e = Qi(t * t),
    n = Qi(e * t + BigInt(7));
  let r = Jf(n);
  r % Uo !== Ei && (r = Qi(-r));
  const o = new yc(t, r, Qf);
  return o.assertValidity(), o;
}
function nh(...t) {
  return Rr(Rt(No('BIP0340/challenge', ...t)));
}
function rg(t) {
  return Es(t).bytes;
}
function og(t, e, n = Mf(32)) {
  const r = At('message', t),
    { bytes: o, scalar: i } = Es(e),
    s = At('auxRand', n, 32),
    c = bs(i ^ Rt(No('BIP0340/aux', s))),
    u = No('BIP0340/nonce', c, o, r),
    f = Rr(Rt(u));
  if (f === Ei) throw new Error('sign failed: k is zero');
  const { bytes: h, scalar: a } = Es(f),
    d = nh(h, o, r),
    l = new Uint8Array(64);
  if ((l.set(h, 0), l.set(bs(Rr(a + d * i)), 32), !rh(l, r, o)))
    throw new Error('sign: Invalid signature produced');
  return l;
}
function rh(t, e, n) {
  const r = At('signature', t, 64),
    o = At('message', e),
    i = At('publicKey', n, 32);
  try {
    const s = eh(Rt(i)),
      c = Rt(r.subarray(0, 32));
    if (!th(c)) return !1;
    const u = Rt(r.subarray(32, 64));
    if (!eg(u)) return !1;
    const f = nh(bs(c), dc(s), o),
      h = ng(s, u, Rr(-f));
    return !(!h || !h.hasEvenY() || h.toAffine().x !== c);
  } catch {
    return !1;
  }
}
const Jt = {
    getPublicKey: rg,
    sign: og,
    verify: rh,
    utils: {
      randomPrivateKey: Gr.utils.randomPrivateKey,
      lift_x: eh,
      pointToBytes: dc,
      numberToBytesBE: un,
      bytesToNumberBE: Rt,
      taggedHash: No,
      mod: mt,
    },
  },
  ig = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
  oh = Uint8Array.from({ length: 16 }, (t, e) => e),
  sg = oh.map((t) => (9 * t + 5) % 16);
let wc = [oh],
  gc = [sg];
for (let t = 0; t < 4; t++) for (let e of [wc, gc]) e.push(e[t].map((n) => ig[n]));
const ih = [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((t) => new Uint8Array(t)),
  cg = wc.map((t, e) => t.map((n) => ih[e][n])),
  ug = gc.map((t, e) => t.map((n) => ih[e][n])),
  ag = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
  fg = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
  uo = (t, e) => (t << e) | (t >>> (32 - e));
function Iu(t, e, n, r) {
  return t === 0
    ? e ^ n ^ r
    : t === 1
      ? (e & n) | (~e & r)
      : t === 2
        ? (e | ~n) ^ r
        : t === 3
          ? (e & r) | (n & ~r)
          : e ^ (n | ~r);
}
const ao = new Uint32Array(16);
class hg extends Vf {
  constructor() {
    super(64, 20, 8, !0),
      (this.h0 = 1732584193),
      (this.h1 = -271733879),
      (this.h2 = -1732584194),
      (this.h3 = 271733878),
      (this.h4 = -1009589776);
  }
  get() {
    const { h0: e, h1: n, h2: r, h3: o, h4: i } = this;
    return [e, n, r, o, i];
  }
  set(e, n, r, o, i) {
    (this.h0 = e | 0), (this.h1 = n | 0), (this.h2 = r | 0), (this.h3 = o | 0), (this.h4 = i | 0);
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4) ao[l] = e.getUint32(n, !0);
    let r = this.h0 | 0,
      o = r,
      i = this.h1 | 0,
      s = i,
      c = this.h2 | 0,
      u = c,
      f = this.h3 | 0,
      h = f,
      a = this.h4 | 0,
      d = a;
    for (let l = 0; l < 5; l++) {
      const g = 4 - l,
        p = ag[l],
        b = fg[l],
        m = wc[l],
        I = gc[l],
        _ = cg[l],
        w = ug[l];
      for (let E = 0; E < 16; E++) {
        const y = (uo(r + Iu(l, i, c, f) + ao[m[E]] + p, _[E]) + a) | 0;
        (r = a), (a = f), (f = uo(c, 10) | 0), (c = i), (i = y);
      }
      for (let E = 0; E < 16; E++) {
        const y = (uo(o + Iu(g, s, u, h) + ao[I[E]] + b, w[E]) + d) | 0;
        (o = d), (d = h), (h = uo(u, 10) | 0), (u = s), (s = y);
      }
    }
    this.set(
      (this.h1 + c + h) | 0,
      (this.h2 + f + d) | 0,
      (this.h3 + a + o) | 0,
      (this.h4 + r + s) | 0,
      (this.h0 + i + u) | 0
    );
  }
  roundClean() {
    ao.fill(0);
  }
  destroy() {
    (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
const lg = Kf(() => new hg());
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function pg(t) {
  if (!Number.isSafeInteger(t)) throw new Error(`Wrong integer: ${t}`);
}
function ee(...t) {
  const e = (o, i) => (s) => o(i(s)),
    n = Array.from(t)
      .reverse()
      .reduce((o, i) => (o ? e(o, i.encode) : i.encode), void 0),
    r = t.reduce((o, i) => (o ? e(o, i.decode) : i.decode), void 0);
  return { encode: n, decode: r };
}
function ue(t) {
  return {
    encode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != 'number'))
        throw new Error('alphabet.encode input should be an array of numbers');
      return e.map((n) => {
        if (n < 0 || n >= t.length)
          throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);
        return t[n];
      });
    },
    decode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != 'string'))
        throw new Error('alphabet.decode input should be array of strings');
      return e.map((n) => {
        if (typeof n != 'string') throw new Error(`alphabet.decode: not string element=${n}`);
        const r = t.indexOf(n);
        if (r === -1) throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);
        return r;
      });
    },
  };
}
function ae(t = '') {
  if (typeof t != 'string') throw new Error('join separator should be string');
  return {
    encode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != 'string'))
        throw new Error('join.encode input should be array of strings');
      for (let n of e)
        if (typeof n != 'string') throw new Error(`join.encode: non-string input=${n}`);
      return e.join(t);
    },
    decode: (e) => {
      if (typeof e != 'string') throw new Error('join.decode input should be string');
      return e.split(t);
    },
  };
}
function qr(t, e = '=') {
  if (typeof e != 'string') throw new Error('padding chr should be string');
  return {
    encode(n) {
      if (!Array.isArray(n) || (n.length && typeof n[0] != 'string'))
        throw new Error('padding.encode input should be array of strings');
      for (let r of n)
        if (typeof r != 'string') throw new Error(`padding.encode: non-string input=${r}`);
      for (; (n.length * t) % 8; ) n.push(e);
      return n;
    },
    decode(n) {
      if (!Array.isArray(n) || (n.length && typeof n[0] != 'string'))
        throw new Error('padding.encode input should be array of strings');
      for (let o of n)
        if (typeof o != 'string') throw new Error(`padding.decode: non-string input=${o}`);
      let r = n.length;
      if ((r * t) % 8) throw new Error('Invalid padding: string should have whole number of bytes');
      for (; r > 0 && n[r - 1] === e; r--)
        if (!(((r - 1) * t) % 8)) throw new Error('Invalid padding: string has too much padding');
      return n.slice(0, r);
    },
  };
}
function sh(t) {
  if (typeof t != 'function') throw new Error('normalize fn should be function');
  return { encode: (e) => e, decode: (e) => t(e) };
}
function vu(t, e, n) {
  if (e < 2) throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);
  if (n < 2) throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);
  if (!Array.isArray(t)) throw new Error('convertRadix: data should be array');
  if (!t.length) return [];
  let r = 0;
  const o = [],
    i = Array.from(t);
  for (
    i.forEach((s) => {
      if (s < 0 || s >= e) throw new Error(`Wrong integer: ${s}`);
    });
    ;

  ) {
    let s = 0,
      c = !0;
    for (let u = r; u < i.length; u++) {
      const f = i[u],
        h = e * s + f;
      if (!Number.isSafeInteger(h) || (e * s) / e !== s || h - f !== e * s)
        throw new Error('convertRadix: carry overflow');
      s = h % n;
      const a = Math.floor(h / n);
      if (((i[u] = a), !Number.isSafeInteger(a) || a * n + s !== h))
        throw new Error('convertRadix: carry overflow');
      if (c) a ? (c = !1) : (r = u);
      else continue;
    }
    if ((o.push(s), c)) break;
  }
  for (let s = 0; s < t.length - 1 && t[s] === 0; s++) o.push(0);
  return o.reverse();
}
const ch = (t, e) => (e ? ch(e, t % e) : t),
  Ho = (t, e) => t + (e - ch(t, e));
function ms(t, e, n, r) {
  if (!Array.isArray(t)) throw new Error('convertRadix2: data should be array');
  if (e <= 0 || e > 32) throw new Error(`convertRadix2: wrong from=${e}`);
  if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong to=${n}`);
  if (Ho(e, n) > 32)
    throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Ho(e, n)}`);
  let o = 0,
    i = 0;
  const s = 2 ** n - 1,
    c = [];
  for (const u of t) {
    if (u >= 2 ** e) throw new Error(`convertRadix2: invalid data word=${u} from=${e}`);
    if (((o = (o << e) | u), i + e > 32))
      throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);
    for (i += e; i >= n; i -= n) c.push(((o >> (i - n)) & s) >>> 0);
    o &= 2 ** i - 1;
  }
  if (((o = (o << (n - i)) & s), !r && i >= e)) throw new Error('Excess padding');
  if (!r && o) throw new Error(`Non-zero padding: ${o}`);
  return r && i > 0 && c.push(o >>> 0), c;
}
function uh(t) {
  return {
    encode: (e) => {
      if (!(e instanceof Uint8Array)) throw new Error('radix.encode input should be Uint8Array');
      return vu(Array.from(e), 2 ** 8, t);
    },
    decode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != 'number'))
        throw new Error('radix.decode input should be array of strings');
      return Uint8Array.from(vu(e, t, 2 ** 8));
    },
  };
}
function Se(t, e = !1) {
  if (t <= 0 || t > 32) throw new Error('radix2: bits should be in (0..32]');
  if (Ho(8, t) > 32 || Ho(t, 8) > 32) throw new Error('radix2: carry overflow');
  return {
    encode: (n) => {
      if (!(n instanceof Uint8Array)) throw new Error('radix2.encode input should be Uint8Array');
      return ms(Array.from(n), 8, t, !e);
    },
    decode: (n) => {
      if (!Array.isArray(n) || (n.length && typeof n[0] != 'number'))
        throw new Error('radix2.decode input should be array of strings');
      return Uint8Array.from(ms(n, t, 8, e));
    },
  };
}
function ku(t) {
  if (typeof t != 'function') throw new Error('unsafeWrapper fn should be function');
  return function (...e) {
    try {
      return t.apply(null, e);
    } catch {}
  };
}
function ah(t, e) {
  if (typeof e != 'function') throw new Error('checksum fn should be function');
  return {
    encode(n) {
      if (!(n instanceof Uint8Array))
        throw new Error('checksum.encode: input should be Uint8Array');
      const r = e(n).slice(0, t),
        o = new Uint8Array(n.length + t);
      return o.set(n), o.set(r, n.length), o;
    },
    decode(n) {
      if (!(n instanceof Uint8Array))
        throw new Error('checksum.decode: input should be Uint8Array');
      const r = n.slice(0, -t),
        o = e(r).slice(0, t),
        i = n.slice(-t);
      for (let s = 0; s < t; s++) if (o[s] !== i[s]) throw new Error('Invalid checksum');
      return r;
    },
  };
}
const dg = { alphabet: ue, chain: ee, checksum: ah, radix: uh, radix2: Se, join: ae, padding: qr },
  fh = ee(Se(4), ue('0123456789ABCDEF'), ae('')),
  hh = ee(Se(5), ue('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), qr(5), ae('')),
  yg = ee(Se(5), ue('0123456789ABCDEFGHIJKLMNOPQRSTUV'), qr(5), ae('')),
  wg = ee(
    Se(5),
    ue('0123456789ABCDEFGHJKMNPQRSTVWXYZ'),
    ae(''),
    sh((t) => t.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1'))
  ),
  lh = ee(
    Se(6),
    ue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
    qr(6),
    ae('')
  ),
  ph = ee(
    Se(6),
    ue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'),
    qr(6),
    ae('')
  ),
  gg = ee(Se(6), ue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), ae('')),
  bc = (t) => ee(uh(58), ue(t), ae('')),
  Fr = bc('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'),
  bg = bc('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'),
  Eg = bc('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz'),
  Pu = [0, 2, 3, 5, 6, 7, 9, 10, 11],
  dh = {
    encode(t) {
      let e = '';
      for (let n = 0; n < t.length; n += 8) {
        const r = t.subarray(n, n + 8);
        e += Fr.encode(r).padStart(Pu[r.length], '1');
      }
      return e;
    },
    decode(t) {
      let e = [];
      for (let n = 0; n < t.length; n += 11) {
        const r = t.slice(n, n + 11),
          o = Pu.indexOf(r.length),
          i = Fr.decode(r);
        for (let s = 0; s < i.length - o; s++)
          if (i[s] !== 0) throw new Error('base58xmr: wrong padding');
        e = e.concat(Array.from(i.slice(i.length - o)));
      }
      return Uint8Array.from(e);
    },
  },
  yh = (t) =>
    ee(
      ah(4, (e) => t(t(e))),
      Fr
    ),
  Ss = ee(ue('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), ae('')),
  xu = [996825010, 642813549, 513874426, 1027748829, 705979059];
function Ir(t) {
  const e = t >> 25;
  let n = (t & 33554431) << 5;
  for (let r = 0; r < xu.length; r++) ((e >> r) & 1) === 1 && (n ^= xu[r]);
  return n;
}
function Ou(t, e, n = 1) {
  const r = t.length;
  let o = 1;
  for (let i = 0; i < r; i++) {
    const s = t.charCodeAt(i);
    if (s < 33 || s > 126) throw new Error(`Invalid prefix (${t})`);
    o = Ir(o) ^ (s >> 5);
  }
  o = Ir(o);
  for (let i = 0; i < r; i++) o = Ir(o) ^ (t.charCodeAt(i) & 31);
  for (let i of e) o = Ir(o) ^ i;
  for (let i = 0; i < 6; i++) o = Ir(o);
  return (o ^= n), Ss.encode(ms([o % 2 ** 30], 30, 5, !1));
}
function wh(t) {
  const e = t === 'bech32' ? 1 : 734539939,
    n = Se(5),
    r = n.decode,
    o = n.encode,
    i = ku(r);
  function s(h, a, d = 90) {
    if (typeof h != 'string')
      throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);
    if (!Array.isArray(a) || (a.length && typeof a[0] != 'number'))
      throw new Error(`bech32.encode words should be array of numbers, not ${typeof a}`);
    const l = h.length + 7 + a.length;
    if (d !== !1 && l > d) throw new TypeError(`Length ${l} exceeds limit ${d}`);
    const g = h.toLowerCase(),
      p = Ou(g, a, e);
    return `${g}1${Ss.encode(a)}${p}`;
  }
  function c(h, a = 90) {
    if (typeof h != 'string')
      throw new Error(`bech32.decode input should be string, not ${typeof h}`);
    if (h.length < 8 || (a !== !1 && h.length > a))
      throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${a})`);
    const d = h.toLowerCase();
    if (h !== d && h !== h.toUpperCase()) throw new Error('String must be lowercase or uppercase');
    h = d;
    const l = h.lastIndexOf('1');
    if (l === 0 || l === -1)
      throw new Error('Letter "1" must be present between prefix and data only');
    const g = h.slice(0, l),
      p = h.slice(l + 1);
    if (p.length < 6) throw new Error('Data must be at least 6 characters long');
    const b = Ss.decode(p).slice(0, -6),
      m = Ou(g, b, e);
    if (!p.endsWith(m)) throw new Error(`Invalid checksum in ${h}: expected "${m}"`);
    return { prefix: g, words: b };
  }
  const u = ku(c);
  function f(h) {
    const { prefix: a, words: d } = c(h, !1);
    return { prefix: a, words: d, bytes: r(d) };
  }
  return {
    encode: s,
    decode: c,
    decodeToBytes: f,
    decodeUnsafe: u,
    fromWords: r,
    fromWordsUnsafe: i,
    toWords: o,
  };
}
const Lo = wh('bech32'),
  Ec = wh('bech32m'),
  Co = { encode: (t) => new TextDecoder().decode(t), decode: (t) => new TextEncoder().encode(t) },
  Z = ee(
    Se(4),
    ue('0123456789abcdef'),
    ae(''),
    sh((t) => {
      if (typeof t != 'string' || t.length % 2)
        throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);
      return t.toLowerCase();
    })
  ),
  $o = {
    utf8: Co,
    hex: Z,
    base16: fh,
    base32: hh,
    base64: lh,
    base64url: ph,
    base58: Fr,
    base58xmr: dh,
  },
  gh =
    'Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr',
  bh = (t, e) => {
    if (typeof t != 'string' || !$o.hasOwnProperty(t)) throw new TypeError(gh);
    if (!(e instanceof Uint8Array)) throw new TypeError('bytesToString() expects Uint8Array');
    return $o[t].encode(e);
  },
  mg = bh,
  Eh = (t, e) => {
    if (!$o.hasOwnProperty(t)) throw new TypeError(gh);
    if (typeof e != 'string') throw new TypeError('stringToBytes() expects string');
    return $o[t].decode(e);
  },
  Sg = Eh,
  U1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        assertNumber: pg,
        base16: fh,
        base32: hh,
        base32crockford: wg,
        base32hex: yg,
        base58: Fr,
        base58check: yh,
        base58flickr: bg,
        base58xmr: dh,
        base58xrp: Eg,
        base64: lh,
        base64url: ph,
        base64urlnopad: gg,
        bech32: Lo,
        bech32m: Ec,
        bytes: Sg,
        bytesToString: bh,
        hex: Z,
        str: mg,
        stringToBytes: Eh,
        utf8: Co,
        utils: dg,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  J = new Uint8Array(),
  mc = new Uint8Array([0]);
function z(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function Ts(...t) {
  if (t.length === 1) return t[0];
  const e = t.reduce((r, o) => r + o.length, 0),
    n = new Uint8Array(e);
  for (let r = 0, o = 0; r < t.length; r++) {
    const i = t[r];
    n.set(i, o), (o += i.length);
  }
  return n;
}
const te = (t) => t instanceof Uint8Array;
class mh {
  constructor(e, n = [], r = []) {
    (this.data = e),
      (this.path = n),
      (this.fieldPath = r),
      (this.pos = 0),
      (this.hasPtr = !1),
      (this.bitBuf = 0),
      (this.bitPos = 0);
  }
  err(e) {
    return new Error(`Reader(${this.fieldPath.join('/')}): ${e}`);
  }
  absBytes(e) {
    if (e > this.data.length) throw new Error('absBytes: Unexpected end of buffer');
    return this.data.subarray(e);
  }
  bytes(e, n = !1) {
    if (this.bitPos) throw this.err('readBytes: bitPos not empty');
    if (!Number.isFinite(e)) throw this.err(`readBytes: wrong length=${e}`);
    if (this.pos + e > this.data.length) throw this.err('readBytes: Unexpected end of buffer');
    const r = this.data.subarray(this.pos, this.pos + e);
    return n || (this.pos += e), r;
  }
  byte(e = !1) {
    if (this.bitPos) throw this.err('readByte: bitPos not empty');
    return this.data[e ? this.pos : this.pos++];
  }
  get leftBytes() {
    return this.data.length - this.pos;
  }
  isEnd() {
    return this.pos >= this.data.length && !this.bitPos;
  }
  length(e) {
    let n;
    if (
      (ln(e)
        ? (n = Number(e.decodeStream(this)))
        : typeof e == 'number'
          ? (n = e)
          : typeof e == 'string' && (n = Fo(this.path, e.split('/'))),
      typeof n == 'bigint' && (n = Number(n)),
      typeof n != 'number')
    )
      throw this.err(`Wrong length: ${n}`);
    return n;
  }
  bits(e) {
    if (e > 32) throw this.err('BitReader: cannot read more than 32 bits in single call');
    let n = 0;
    for (; e; ) {
      this.bitPos || ((this.bitBuf = this.data[this.pos++]), (this.bitPos = 8));
      const r = Math.min(e, this.bitPos);
      (this.bitPos -= r),
        (n = (n << r) | ((this.bitBuf >> this.bitPos) & (2 ** r - 1))),
        (this.bitBuf &= 2 ** this.bitPos - 1),
        (e -= r);
    }
    return n >>> 0;
  }
  find(e, n = this.pos) {
    if (!te(e)) throw this.err(`find: needle is not bytes! ${e}`);
    if (this.bitPos) throw this.err('findByte: bitPos not empty');
    if (!e.length) throw this.err('find: needle is empty');
    for (let r = n; (r = this.data.indexOf(e[0], r)) !== -1; r++) {
      if (r === -1 || this.data.length - r < e.length) return;
      if (z(e, this.data.subarray(r, r + e.length))) return r;
    }
  }
  finish() {
    if (!(this.isEnd() || this.hasPtr))
      throw this.err(
        `${this.leftBytes} bytes ${this.bitPos} bits left after unpack: ${Z.encode(this.data.slice(this.pos))}`
      );
  }
  fieldPathPush(e) {
    this.fieldPath.push(e);
  }
  fieldPathPop() {
    this.fieldPath.pop();
  }
}
class Sh {
  constructor(e = [], n = []) {
    (this.path = e),
      (this.fieldPath = n),
      (this.buffers = []),
      (this.pos = 0),
      (this.ptrs = []),
      (this.bitBuf = 0),
      (this.bitPos = 0);
  }
  err(e) {
    return new Error(`Writer(${this.fieldPath.join('/')}): ${e}`);
  }
  bytes(e) {
    if (this.bitPos) throw this.err('writeBytes: ends with non-empty bit buffer');
    this.buffers.push(e), (this.pos += e.length);
  }
  byte(e) {
    if (this.bitPos) throw this.err('writeByte: ends with non-empty bit buffer');
    this.buffers.push(new Uint8Array([e])), this.pos++;
  }
  get buffer() {
    if (this.bitPos) throw this.err('buffer: ends with non-empty bit buffer');
    let e = Ts(...this.buffers);
    for (let n of this.ptrs) {
      const r = e.length;
      e = Ts(e, n.buffer);
      const o = n.ptr.encode(r);
      for (let i = 0; i < o.length; i++) e[n.pos + i] = o[i];
    }
    return e;
  }
  length(e, n) {
    if (e === null) return;
    if (ln(e)) return e.encodeStream(this, n);
    let r;
    if (
      (typeof e == 'number' ? (r = e) : typeof e == 'string' && (r = Fo(this.path, e.split('/'))),
      typeof r == 'bigint' && (r = Number(r)),
      r === void 0 || r !== n)
    )
      throw this.err(`Wrong length: ${r} len=${e} exp=${n}`);
  }
  bits(e, n) {
    if (n > 32) throw this.err('writeBits: cannot write more than 32 bits in single call');
    if (e >= 2 ** n) throw this.err(`writeBits: value (${e}) >= 2**bits (${n})`);
    for (; n; ) {
      const r = Math.min(n, 8 - this.bitPos);
      (this.bitBuf = (this.bitBuf << r) | (e >> (n - r))),
        (this.bitPos += r),
        (n -= r),
        (e &= 2 ** n - 1),
        this.bitPos === 8 &&
          ((this.bitPos = 0), this.buffers.push(new Uint8Array([this.bitBuf])), this.pos++);
    }
  }
  fieldPathPush(e) {
    this.fieldPath.push(e);
  }
  fieldPathPop() {
    this.fieldPath.pop();
  }
}
const Ro = (t) => Uint8Array.from(t).reverse();
function Bu(t, e, n, r) {
  if (r) {
    const o = 2n ** (n - 1n);
    if (e < -o || e >= o) throw t.err('sInt: value out of bounds');
  } else if (0n > e || e >= 2n ** n) throw t.err('uInt: value out of bounds');
}
function dt(t) {
  return {
    ...t,
    encode: (e) => {
      const n = new Sh();
      return t.encodeStream(n, e), n.buffer;
    },
    decode: (e) => {
      const n = new mh(e),
        r = t.decodeStream(n);
      return n.finish(), r;
    },
  };
}
function Fo(t, e) {
  t = Array.from(t);
  let n = 0;
  for (; n < e.length && e[n] === '..'; n++) t.pop();
  let r = t.pop();
  for (; n < e.length; n++) {
    if (!r || r[e[n]] === void 0) return;
    r = r[e[n]];
  }
  return r;
}
function ln(t) {
  return (
    typeof t.encode == 'function' &&
    typeof t.encodeStream == 'function' &&
    typeof t.decode == 'function' &&
    typeof t.decodeStream == 'function'
  );
}
function Tg() {
  return {
    encode: (t) => {
      const e = {};
      for (const [n, r] of t) {
        if (e[n] !== void 0) throw new Error(`coders.dict: same key(${n}) appears twice in struct`);
        e[n] = r;
      }
      return e;
    },
    decode: (t) => Object.entries(t),
  };
}
const _g = {
  encode: (t) => {
    if (t > BigInt(Number.MAX_SAFE_INTEGER))
      throw new Error(`coders.number: element bigger than MAX_SAFE_INTEGER=${t}`);
    return Number(t);
  },
  decode: (t) => BigInt(t),
};
function Ag(t) {
  return { encode: (e) => t[e], decode: (e) => t[e] };
}
function Ig(t) {
  const e = 10n ** BigInt(t);
  return {
    encode: (n) => {
      let r = (n < 0n ? -n : n).toString(10),
        o = r.length - t;
      o < 0 && ((r = r.padStart(r.length - o, '0')), (o = 0));
      let i = r.length - 1;
      for (; i >= o && r[i] === '0'; i--);
      let [s, c] = [r.slice(0, o), r.slice(o, i + 1)];
      return s || (s = '0'), n < 0n && (s = '-' + s), c ? `${s}.${c}` : s;
    },
    decode: (n) => {
      let r = !1;
      n.startsWith('-') && ((r = !0), (n = n.slice(1)));
      let o = n.indexOf('.');
      o = o === -1 ? n.length : o;
      const [i, s] = [n.slice(0, o), n.slice(o + 1)],
        c = BigInt(i) * e,
        u = Math.min(s.length, t),
        f = BigInt(s.slice(0, u)) * 10n ** BigInt(t - u),
        h = c + f;
      return r ? -h : h;
    },
  };
}
function vg(t) {
  return {
    encode: (e) => {
      for (const n of t) {
        const r = n.encode(e);
        if (r !== void 0) return r;
      }
      throw new Error(`match/encode: cannot find match in ${e}`);
    },
    decode: (e) => {
      for (const n of t) {
        const r = n.decode(e);
        if (r !== void 0) return r;
      }
      throw new Error(`match/decode: cannot find match in ${e}`);
    },
  };
}
const zr = { dict: Tg, number: _g, tsEnum: Ag, decimal: Ig, match: vg },
  Vt = (t, e = !1, n = !1) =>
    dt({
      size: t,
      encodeStream: (r, o) => {
        if (typeof o != 'number' && typeof o != 'bigint')
          throw r.err(`bigint: invalid value: ${o}`);
        let i = BigInt(o);
        const s = BigInt(t);
        Bu(r, i, 8n * s, !!n);
        const c = 2n ** (8n * s - 1n);
        n && i < 0 && (i = i | c);
        let u = [];
        for (let h = 0; h < t; h++) u.push(Number(i & 255n)), (i >>= 8n);
        let f = new Uint8Array(u).reverse();
        r.bytes(e ? f.reverse() : f);
      },
      decodeStream: (r) => {
        const o = BigInt(t);
        let i = r.bytes(t);
        e && (i = Ro(i));
        const s = Ro(i),
          c = 2n ** (8n * o - 1n);
        let u = 0n;
        for (let f = 0; f < s.length; f++) u |= BigInt(s[f]) << (8n * BigInt(f));
        return n && u & c && (u = (u ^ c) - c), Bu(r, u, 8n * o, !!n), u;
      },
    });
Vt(32, !0);
const kg = Vt(32, !1);
Vt(32, !0, !0);
Vt(32, !1, !0);
Vt(16, !0);
Vt(16, !1);
Vt(16, !0, !0);
Vt(16, !1, !0);
const go = Vt(8, !0);
Vt(8, !1);
const Pg = Vt(8, !0, !0);
Vt(8, !1, !0);
const Te = (t, e = !1, n = !1) => {
    if (t > 6) throw new Error('int supports size up to 6 bytes (48 bits), for other use bigint');
    return Si(Vt(t, e, n), zr.number);
  },
  M = Te(4, !0),
  xg = Te(4, !1),
  Br = Te(4, !0, !0);
Te(4, !1, !0);
const Uu = Te(2, !0);
Te(2, !1);
Te(2, !0, !0);
Te(2, !1, !0);
const nn = Te(1, !1);
Te(1, !1, !0);
dt({
  size: 1,
  encodeStream: (t, e) => t.byte(e ? 1 : 0),
  decodeStream: (t) => {
    const e = t.byte();
    if (e !== 0 && e !== 1) throw t.err(`bool: invalid value ${e}`);
    return e === 1;
  },
});
const Q = (t, e = !1) =>
    dt({
      size: typeof t == 'number' ? t : void 0,
      encodeStream: (n, r) => {
        if (!te(r)) throw n.err(`bytes: invalid value ${r}`);
        te(t) || n.length(t, r.length), n.bytes(e ? Ro(r) : r), te(t) && n.bytes(t);
      },
      decodeStream: (n) => {
        let r;
        if (te(t)) {
          const o = n.find(t);
          if (!o) throw n.err('bytes: cannot find terminator');
          (r = n.bytes(o - n.pos)), n.bytes(t.length);
        } else r = n.bytes(t === null ? n.leftBytes : n.length(t));
        return e ? Ro(r) : r;
      },
    }),
  mi = (t, e = !1) => {
    const n = Q(t, e);
    return dt({
      size: n.size,
      encodeStream: (r, o) => n.encodeStream(r, Co.decode(o)),
      decodeStream: (r) => Co.encode(n.decodeStream(r)),
    });
  };
mi(mc);
const Og = (t, e = !1, n = !1) => {
  const r = Q(t, e);
  return dt({
    size: r.size,
    encodeStream: (o, i) => {
      if (n && !i.startsWith('0x'))
        throw new Error('hex(withZero=true).encode input should start with 0x');
      const s = Z.decode(n ? i.slice(2) : i);
      return r.encodeStream(o, s);
    },
    decodeStream: (o) => (n ? '0x' : '') + Z.encode(r.decodeStream(o)),
  });
};
function Si(t, e) {
  if (!ln(t)) throw new Error(`apply: invalid inner value ${t}`);
  return dt({
    size: t.size,
    encodeStream: (n, r) => {
      let o;
      try {
        o = e.decode(r);
      } catch (i) {
        throw n.err('' + i);
      }
      return t.encodeStream(n, o);
    },
    decodeStream: (n) => {
      const r = t.decodeStream(n);
      try {
        return e.encode(r);
      } catch (o) {
        throw n.err('' + o);
      }
    },
  });
}
function fe(t, e) {
  if (!ln(t)) throw new Error(`validate: invalid inner value ${t}`);
  return dt({
    size: t.size,
    encodeStream: (n, r) => t.encodeStream(n, e(r)),
    decodeStream: (n) => e(t.decodeStream(n)),
  });
}
const Bg = (t, e = !1) =>
  dt({
    size: t.length,
    encodeStream: (n, r) => {
      !!r !== e && n.bytes(t);
    },
    decodeStream: (n) => {
      let r = n.leftBytes >= t.length;
      return r && ((r = z(n.bytes(t.length, !0), t)), r && n.bytes(t.length)), r !== e;
    },
  });
function Ug(t, e, n) {
  if (!ln(e)) throw new Error(`flagged: invalid inner value ${e}`);
  return dt({
    encodeStream: (r, o) => {
      typeof t == 'string'
        ? Fo(r.path, t.split('/'))
          ? e.encodeStream(r, o)
          : n && e.encodeStream(r, n)
        : (t.encodeStream(r, !!o), o ? e.encodeStream(r, o) : n && e.encodeStream(r, n));
    },
    decodeStream: (r) => {
      let o = !1;
      if ((typeof t == 'string' ? (o = Fo(r.path, t.split('/'))) : (o = t.decodeStream(r)), o))
        return e.decodeStream(r);
      n && e.decodeStream(r);
    },
  });
}
function Ti(t, e, n = !0) {
  if (!ln(t)) throw new Error(`flagged: invalid inner value ${t}`);
  return dt({
    size: t.size,
    encodeStream: (r, o) => t.encodeStream(r, e),
    decodeStream: (r) => {
      const o = t.decodeStream(r);
      if ((n && typeof o != 'object' && o !== e) || (te(e) && !z(e, o)))
        throw r.err(`magic: invalid value: ${o} !== ${e}`);
    },
  });
}
function Th(t) {
  let e = 0;
  for (let n of t) {
    if (!n.size) return;
    e += n.size;
  }
  return e;
}
function Ht(t) {
  if (Array.isArray(t)) throw new Error('Packed.Struct: got array instead of object');
  return dt({
    size: Th(Object.values(t)),
    encodeStream: (e, n) => {
      if (typeof n != 'object' || n === null) throw e.err(`struct: invalid value ${n}`);
      e.path.push(n);
      for (let r in t) e.fieldPathPush(r), t[r].encodeStream(e, n[r]), e.fieldPathPop();
      e.path.pop();
    },
    decodeStream: (e) => {
      let n = {};
      e.path.push(n);
      for (let r in t) e.fieldPathPush(r), (n[r] = t[r].decodeStream(e)), e.fieldPathPop();
      return e.path.pop(), n;
    },
  });
}
function Ng(t) {
  if (!Array.isArray(t)) throw new Error(`Packed.Tuple: got ${typeof t} instead of array`);
  return dt({
    size: Th(t),
    encodeStream: (e, n) => {
      if (!Array.isArray(n)) throw e.err(`tuple: invalid value ${n}`);
      e.path.push(n);
      for (let r = 0; r < t.length; r++)
        e.fieldPathPush('' + r), t[r].encodeStream(e, n[r]), e.fieldPathPop();
      e.path.pop();
    },
    decodeStream: (e) => {
      let n = [];
      e.path.push(n);
      for (let r = 0; r < t.length; r++)
        e.fieldPathPush('' + r), n.push(t[r].decodeStream(e)), e.fieldPathPop();
      return e.path.pop(), n;
    },
  });
}
function Hg(t, e) {
  if (!ln(e)) throw new Error(`prefix: invalid inner value ${e}`);
  if (te(t)) throw new Error('prefix: len cannot be Uint8Array');
  const n = Q(t);
  return dt({
    size: typeof t == 'number' ? t : void 0,
    encodeStream: (r, o) => {
      const i = new Sh(r.path, r.fieldPath);
      e.encodeStream(i, o), n.encodeStream(r, i.buffer);
    },
    decodeStream: (r) => {
      const o = n.decodeStream(r);
      return e.decodeStream(new mh(o, r.path, r.fieldPath));
    },
  });
}
function Ft(t, e) {
  if (!ln(e)) throw new Error(`array: invalid inner value ${e}`);
  return dt({
    size: typeof t == 'number' && e.size ? t * e.size : void 0,
    encodeStream: (n, r) => {
      if (!Array.isArray(r)) throw n.err(`array: invalid value ${r}`);
      te(t) || n.length(t, r.length), n.path.push(r);
      for (let o = 0; o < r.length; o++) {
        n.fieldPathPush('' + o);
        const i = r[o],
          s = n.pos;
        if ((e.encodeStream(n, i), te(t))) {
          if (t.length > n.pos - s) continue;
          const c = n.buffer.subarray(s, n.pos);
          if (z(c.subarray(0, t.length), t))
            throw n.err(`array: inner element encoding same as separator. elm=${i} data=${c}`);
        }
        n.fieldPathPop();
      }
      n.path.pop(), te(t) && n.bytes(t);
    },
    decodeStream: (n) => {
      let r = [];
      if (t === null) {
        let o = 0;
        for (
          n.path.push(r);
          !n.isEnd() &&
          (n.fieldPathPush('' + o++),
          r.push(e.decodeStream(n)),
          n.fieldPathPop(),
          !(e.size && n.leftBytes < e.size));

        );
        n.path.pop();
      } else if (te(t)) {
        let o = 0;
        for (n.path.push(r); ; ) {
          if (z(n.bytes(t.length, !0), t)) {
            n.bytes(t.length);
            break;
          }
          n.fieldPathPush('' + o++), r.push(e.decodeStream(n)), n.fieldPathPop();
        }
        n.path.pop();
      } else {
        n.fieldPathPush('arrayLen');
        const o = n.length(t);
        n.fieldPathPop(), n.path.push(r);
        for (let i = 0; i < o; i++)
          n.fieldPathPush('' + i), r.push(e.decodeStream(n)), n.fieldPathPop();
        n.path.pop();
      }
      return r;
    },
  });
}
Ti(Q(0), J);
/*! scure-btc-signer - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const {
    ProjectivePoint: _i,
    sign: Nu,
    getPublicKey: Lg,
  } = Gr,
  Ko = Gr.CURVE.n,
  Hr = (t, e) => (t === void 0 ? e : t),
  X = te,
  Ai = (t) => lg($t(t)),
  Ye = (...t) => $t($t(Qe(...t))),
  Qe = Ts,
  _h = yh($t);
function Mo(t) {
  if (Array.isArray(t)) return t.map((e) => Mo(e));
  if (t instanceof Uint8Array) return Uint8Array.from(t);
  if (['number', 'bigint', 'boolean', 'string', 'undefined'].includes(typeof t)) return t;
  if (t === null) return t;
  if (typeof t == 'object')
    return Object.fromEntries(Object.entries(t).map(([e, n]) => [e, Mo(n)]));
  throw new Error(`cloneDeep: unknown type=${t} (${typeof t})`);
}
var vt;
(function (t) {
  (t[(t.ecdsa = 0)] = 'ecdsa'), (t[(t.schnorr = 1)] = 'schnorr');
})(vt || (vt = {}));
function lr(t, e) {
  const n = t.length;
  if (e === vt.ecdsa) {
    if (n === 32) throw new Error('Expected non-Schnorr key');
    return _i.fromHex(t), t;
  } else if (e === vt.schnorr) {
    if (n !== 32) throw new Error('Expected 32-byte Schnorr key');
    return Jt.utils.lift_x(Jt.utils.bytesToNumberBE(t)), t;
  } else throw new Error('Unknown key type');
}
function En(t, e) {
  try {
    return lr(t, e), !0;
  } catch {
    return !1;
  }
}
const Hu = (t) => t.r < Ko / 2n;
function Cg(t, e, n = !1) {
  let r = Nu(t, e);
  if (n && !Hu(r)) {
    const o = new Uint8Array(32);
    for (
      let i = 0;
      i < Number.MAX_SAFE_INTEGER &&
      (o.set(M.encode(i)), (r = Nu(t, e, { extraEntropy: o })), !Hu(r));
      i++
    );
  }
  return r.toDERRawBytes();
}
function Ah(t, e) {
  const n = Jt.utils,
    r = n.taggedHash('TapTweak', t, e),
    o = n.bytesToNumberBE(r);
  if (o >= Ko) throw new Error('tweak higher than curve order');
  return o;
}
function $g(t, e = new Uint8Array()) {
  const n = Jt.utils,
    r = n.bytesToNumberBE(t),
    o = _i.fromPrivateKey(r),
    i = o.hasEvenY() ? r : n.mod(-r, Ko),
    s = n.pointToBytes(o),
    c = Ah(s, e);
  return n.numberToBytesBE(n.mod(i + c, Ko), 32);
}
function Ih(t, e) {
  const n = Jt.utils,
    r = Ah(t, e),
    i = n.lift_x(n.bytesToNumberBE(t)).add(_i.fromPrivateKey(r)),
    s = i.hasEvenY() ? 0 : 1;
  return [n.pointToBytes(i), s];
}
const _s = fe(Q(null), (t) => lr(t, vt.ecdsa)),
  Wo = fe(Q(32), (t) => lr(t, vt.schnorr)),
  Lu = fe(Q(null), (t) => {
    if (t.length !== 64 && t.length !== 65)
      throw new Error('Schnorr signature should be 64 or 65 bytes long');
    return t;
  }),
  yr = { bech32: 'bc', pubKeyHash: 0, scriptHash: 5, wif: 128 },
  Rg = 8,
  Fg = 2,
  yn = 0,
  vh = 4294967295,
  fo = new Uint8Array(32);
zr.decimal(Rg);
function As(t, e) {
  if (!X(t) || !X(e)) throw new Error(`cmp: wrong type a=${typeof t} b=${typeof e}`);
  const n = Math.min(t.length, e.length);
  for (let r = 0; r < n; r++) if (t[r] != e[r]) return Math.sign(t[r] - e[r]);
  return Math.sign(t.length - e.length);
}
var ct;
(function (t) {
  (t[(t.OP_0 = 0)] = 'OP_0'),
    (t[(t.PUSHDATA1 = 76)] = 'PUSHDATA1'),
    (t[(t.PUSHDATA2 = 77)] = 'PUSHDATA2'),
    (t[(t.PUSHDATA4 = 78)] = 'PUSHDATA4'),
    (t[(t['1NEGATE'] = 79)] = '1NEGATE'),
    (t[(t.RESERVED = 80)] = 'RESERVED'),
    (t[(t.OP_1 = 81)] = 'OP_1'),
    (t[(t.OP_2 = 82)] = 'OP_2'),
    (t[(t.OP_3 = 83)] = 'OP_3'),
    (t[(t.OP_4 = 84)] = 'OP_4'),
    (t[(t.OP_5 = 85)] = 'OP_5'),
    (t[(t.OP_6 = 86)] = 'OP_6'),
    (t[(t.OP_7 = 87)] = 'OP_7'),
    (t[(t.OP_8 = 88)] = 'OP_8'),
    (t[(t.OP_9 = 89)] = 'OP_9'),
    (t[(t.OP_10 = 90)] = 'OP_10'),
    (t[(t.OP_11 = 91)] = 'OP_11'),
    (t[(t.OP_12 = 92)] = 'OP_12'),
    (t[(t.OP_13 = 93)] = 'OP_13'),
    (t[(t.OP_14 = 94)] = 'OP_14'),
    (t[(t.OP_15 = 95)] = 'OP_15'),
    (t[(t.OP_16 = 96)] = 'OP_16'),
    (t[(t.NOP = 97)] = 'NOP'),
    (t[(t.VER = 98)] = 'VER'),
    (t[(t.IF = 99)] = 'IF'),
    (t[(t.NOTIF = 100)] = 'NOTIF'),
    (t[(t.VERIF = 101)] = 'VERIF'),
    (t[(t.VERNOTIF = 102)] = 'VERNOTIF'),
    (t[(t.ELSE = 103)] = 'ELSE'),
    (t[(t.ENDIF = 104)] = 'ENDIF'),
    (t[(t.VERIFY = 105)] = 'VERIFY'),
    (t[(t.RETURN = 106)] = 'RETURN'),
    (t[(t.TOALTSTACK = 107)] = 'TOALTSTACK'),
    (t[(t.FROMALTSTACK = 108)] = 'FROMALTSTACK'),
    (t[(t['2DROP'] = 109)] = '2DROP'),
    (t[(t['2DUP'] = 110)] = '2DUP'),
    (t[(t['3DUP'] = 111)] = '3DUP'),
    (t[(t['2OVER'] = 112)] = '2OVER'),
    (t[(t['2ROT'] = 113)] = '2ROT'),
    (t[(t['2SWAP'] = 114)] = '2SWAP'),
    (t[(t.IFDUP = 115)] = 'IFDUP'),
    (t[(t.DEPTH = 116)] = 'DEPTH'),
    (t[(t.DROP = 117)] = 'DROP'),
    (t[(t.DUP = 118)] = 'DUP'),
    (t[(t.NIP = 119)] = 'NIP'),
    (t[(t.OVER = 120)] = 'OVER'),
    (t[(t.PICK = 121)] = 'PICK'),
    (t[(t.ROLL = 122)] = 'ROLL'),
    (t[(t.ROT = 123)] = 'ROT'),
    (t[(t.SWAP = 124)] = 'SWAP'),
    (t[(t.TUCK = 125)] = 'TUCK'),
    (t[(t.CAT = 126)] = 'CAT'),
    (t[(t.SUBSTR = 127)] = 'SUBSTR'),
    (t[(t.LEFT = 128)] = 'LEFT'),
    (t[(t.RIGHT = 129)] = 'RIGHT'),
    (t[(t.SIZE = 130)] = 'SIZE'),
    (t[(t.INVERT = 131)] = 'INVERT'),
    (t[(t.AND = 132)] = 'AND'),
    (t[(t.OR = 133)] = 'OR'),
    (t[(t.XOR = 134)] = 'XOR'),
    (t[(t.EQUAL = 135)] = 'EQUAL'),
    (t[(t.EQUALVERIFY = 136)] = 'EQUALVERIFY'),
    (t[(t.RESERVED1 = 137)] = 'RESERVED1'),
    (t[(t.RESERVED2 = 138)] = 'RESERVED2'),
    (t[(t['1ADD'] = 139)] = '1ADD'),
    (t[(t['1SUB'] = 140)] = '1SUB'),
    (t[(t['2MUL'] = 141)] = '2MUL'),
    (t[(t['2DIV'] = 142)] = '2DIV'),
    (t[(t.NEGATE = 143)] = 'NEGATE'),
    (t[(t.ABS = 144)] = 'ABS'),
    (t[(t.NOT = 145)] = 'NOT'),
    (t[(t['0NOTEQUAL'] = 146)] = '0NOTEQUAL'),
    (t[(t.ADD = 147)] = 'ADD'),
    (t[(t.SUB = 148)] = 'SUB'),
    (t[(t.MUL = 149)] = 'MUL'),
    (t[(t.DIV = 150)] = 'DIV'),
    (t[(t.MOD = 151)] = 'MOD'),
    (t[(t.LSHIFT = 152)] = 'LSHIFT'),
    (t[(t.RSHIFT = 153)] = 'RSHIFT'),
    (t[(t.BOOLAND = 154)] = 'BOOLAND'),
    (t[(t.BOOLOR = 155)] = 'BOOLOR'),
    (t[(t.NUMEQUAL = 156)] = 'NUMEQUAL'),
    (t[(t.NUMEQUALVERIFY = 157)] = 'NUMEQUALVERIFY'),
    (t[(t.NUMNOTEQUAL = 158)] = 'NUMNOTEQUAL'),
    (t[(t.LESSTHAN = 159)] = 'LESSTHAN'),
    (t[(t.GREATERTHAN = 160)] = 'GREATERTHAN'),
    (t[(t.LESSTHANOREQUAL = 161)] = 'LESSTHANOREQUAL'),
    (t[(t.GREATERTHANOREQUAL = 162)] = 'GREATERTHANOREQUAL'),
    (t[(t.MIN = 163)] = 'MIN'),
    (t[(t.MAX = 164)] = 'MAX'),
    (t[(t.WITHIN = 165)] = 'WITHIN'),
    (t[(t.RIPEMD160 = 166)] = 'RIPEMD160'),
    (t[(t.SHA1 = 167)] = 'SHA1'),
    (t[(t.SHA256 = 168)] = 'SHA256'),
    (t[(t.HASH160 = 169)] = 'HASH160'),
    (t[(t.HASH256 = 170)] = 'HASH256'),
    (t[(t.CODESEPARATOR = 171)] = 'CODESEPARATOR'),
    (t[(t.CHECKSIG = 172)] = 'CHECKSIG'),
    (t[(t.CHECKSIGVERIFY = 173)] = 'CHECKSIGVERIFY'),
    (t[(t.CHECKMULTISIG = 174)] = 'CHECKMULTISIG'),
    (t[(t.CHECKMULTISIGVERIFY = 175)] = 'CHECKMULTISIGVERIFY'),
    (t[(t.NOP1 = 176)] = 'NOP1'),
    (t[(t.CHECKLOCKTIMEVERIFY = 177)] = 'CHECKLOCKTIMEVERIFY'),
    (t[(t.CHECKSEQUENCEVERIFY = 178)] = 'CHECKSEQUENCEVERIFY'),
    (t[(t.NOP4 = 179)] = 'NOP4'),
    (t[(t.NOP5 = 180)] = 'NOP5'),
    (t[(t.NOP6 = 181)] = 'NOP6'),
    (t[(t.NOP7 = 182)] = 'NOP7'),
    (t[(t.NOP8 = 183)] = 'NOP8'),
    (t[(t.NOP9 = 184)] = 'NOP9'),
    (t[(t.NOP10 = 185)] = 'NOP10'),
    (t[(t.CHECKSIGADD = 186)] = 'CHECKSIGADD'),
    (t[(t.INVALID = 255)] = 'INVALID');
})(ct || (ct = {}));
const Tt = dt({
  encodeStream: (t, e) => {
    for (let n of e) {
      if (typeof n == 'string') {
        if (ct[n] === void 0) throw new Error(`Unknown opcode=${n}`);
        t.byte(ct[n]);
        continue;
      } else if (typeof n == 'number') {
        if (n === 0) {
          t.byte(0);
          continue;
        } else if (1 <= n && n <= 16) {
          t.byte(ct.OP_1 - 1 + n);
          continue;
        }
      }
      if ((typeof n == 'number' && (n = kh().encode(BigInt(n))), !X(n)))
        throw new Error(`Wrong Script OP=${n} (${typeof n})`);
      const r = n.length;
      r < ct.PUSHDATA1
        ? t.byte(r)
        : r <= 255
          ? (t.byte(ct.PUSHDATA1), t.byte(r))
          : r <= 65535
            ? (t.byte(ct.PUSHDATA2), t.bytes(Uu.encode(r)))
            : (t.byte(ct.PUSHDATA4), t.bytes(M.encode(r))),
        t.bytes(n);
    }
  },
  decodeStream: (t) => {
    const e = [];
    for (; !t.isEnd(); ) {
      const n = t.byte();
      if (ct.OP_0 < n && n <= ct.PUSHDATA4) {
        let r;
        if (n < ct.PUSHDATA1) r = n;
        else if (n === ct.PUSHDATA1) r = nn.decodeStream(t);
        else if (n === ct.PUSHDATA2) r = Uu.decodeStream(t);
        else if (n === ct.PUSHDATA4) r = M.decodeStream(t);
        else throw new Error('Should be not possible');
        e.push(t.bytes(r));
      } else if (n === 0) e.push(0);
      else if (ct.OP_1 <= n && n <= ct.OP_16) e.push(n - (ct.OP_1 - 1));
      else {
        const r = ct[n];
        if (r === void 0) throw new Error(`Unknown opcode=${n.toString(16)}`);
        e.push(r);
      }
    }
    return e;
  },
});
function kh(t = 6, e = !1) {
  return dt({
    encodeStream: (n, r) => {
      if (r === 0n) return;
      const o = r < 0,
        i = BigInt(r),
        s = [];
      for (let c = o ? -i : i; c; c >>= 8n) s.push(Number(c & 0xffn));
      s[s.length - 1] >= 128 ? s.push(o ? 128 : 0) : o && (s[s.length - 1] |= 128),
        n.bytes(new Uint8Array(s));
    },
    decodeStream: (n) => {
      const r = n.leftBytes;
      if (r > t) throw new Error(`ScriptNum: number (${r}) bigger than limit=${t}`);
      if (r === 0) return 0n;
      if (e && !(n.data[r - 1] & 127) && (r <= 1 || !(n.data[r - 2] & 128)))
        throw new Error('Non-minimally encoded ScriptNum');
      let o = 0,
        i = 0n;
      for (let s = 0; s < r; ++s) (o = n.byte()), (i |= BigInt(o) << (8n * BigInt(s)));
      return o >= 128 && ((i &= (2n ** BigInt(r * 8) - 1n) >> 1n), (i = -i)), i;
    },
  });
}
function Kg(t, e = 4, n = !0) {
  if (typeof t == 'number') return t;
  if (X(t))
    try {
      const r = kh(e, n).decode(t);
      return r > Number.MAX_SAFE_INTEGER ? void 0 : Number(r);
    } catch {
      return;
    }
}
const Cu = {
    253: [253, 2, 253n, 65535n],
    254: [254, 4, 65536n, 4294967295n],
    255: [255, 8, 4294967296n, 18446744073709551615n],
  },
  Ii = dt({
    encodeStream: (t, e) => {
      if ((typeof e == 'number' && (e = BigInt(e)), 0n <= e && e <= 252n)) return t.byte(Number(e));
      for (const [n, r, o, i] of Object.values(Cu))
        if (!(o > e || e > i)) {
          t.byte(n);
          for (let s = 0; s < r; s++) t.byte(Number((e >> (8n * BigInt(s))) & 0xffn));
          return;
        }
      throw t.err(`VarInt too big: ${e}`);
    },
    decodeStream: (t) => {
      const e = t.byte();
      if (e <= 252) return BigInt(e);
      const [n, r, o] = Cu[e];
      let i = 0n;
      for (let s = 0; s < r; s++) i |= BigInt(t.byte()) << (8n * BigInt(s));
      if (i < o) throw t.err(`Wrong CompactSize(${8 * r})`);
      return i;
    },
  }),
  ie = Si(Ii, zr.number),
  $u = (t) => Ft(Ii, t),
  oe = Q(Ii),
  Mg = Ht({ txid: Q(32, !0), index: M, finalScriptSig: oe, sequence: M }),
  Zn = Ht({ amount: go, script: oe }),
  Wg = { amount: 0xffffffffffffffffn, script: J },
  Sc = Ft(ie, oe),
  Dg = Ht({
    version: Br,
    segwitFlag: Bg(new Uint8Array([0, 1])),
    inputs: $u(Mg),
    outputs: $u(Zn),
    witnesses: Ug('segwitFlag', Ft('inputs/length', Sc)),
    lockTime: M,
  });
function Vg(t) {
  if (t.segwitFlag && t.witnesses && !t.witnesses.length)
    throw new Error('Segwit flag with empty witnesses array');
  return t;
}
const ge = fe(Dg, Vg);
function Is(t) {
  const [e, n, r, o, i, s] = t;
  return { type: e, kc: n, vc: r, reqInc: o, allowInc: i, silentIgnore: s };
}
const vi = Ht({ fingerprint: xg, path: Ft(null, M) }),
  jg = Ht({ version: nn, internalKey: Q(32), merklePath: Ft(null, Q(32)) }),
  nr = fe(jg, (t) => {
    if (t.merklePath.length > 128)
      throw new Error('TaprootControlBlock: merklePath should be of length 0..128 (inclusive)');
    return t;
  }),
  Ph = Ht({ hashes: Ft(ie, Q(32)), der: vi }),
  Gg = Q(78),
  qg = Ht({ pubKey: Wo, leafHash: Q(32) }),
  zg = Ft(null, Ht({ depth: nn, version: nn, script: oe })),
  ut = Q(null),
  Ru = Q(20),
  vr = Q(32),
  Tc = {
    unsignedTx: [0, !1, ge, [0], [0], !1],
    xpub: [1, Gg, vi, [], [0, 2], !1],
    txVersion: [2, !1, M, [2], [2], !1],
    fallbackLocktime: [3, !1, M, [], [2], !1],
    inputCount: [4, !1, ie, [2], [2], !1],
    outputCount: [5, !1, ie, [2], [2], !1],
    txModifiable: [6, !1, nn, [], [2], !1],
    version: [251, !1, M, [], [0, 2], !1],
    proprietary: [252, ut, ut, [], [0, 2], !1],
  },
  Do = {
    nonWitnessUtxo: [0, !1, ge, [], [0, 2], !1],
    witnessUtxo: [1, !1, Zn, [], [0, 2], !1],
    partialSig: [2, _s, ut, [], [0, 2], !1],
    sighashType: [3, !1, M, [], [0, 2], !1],
    redeemScript: [4, !1, ut, [], [0, 2], !1],
    witnessScript: [5, !1, ut, [], [0, 2], !1],
    bip32Derivation: [6, _s, vi, [], [0, 2], !1],
    finalScriptSig: [7, !1, ut, [], [0, 2], !1],
    finalScriptWitness: [8, !1, Sc, [], [0, 2], !1],
    porCommitment: [9, !1, ut, [], [0, 2], !1],
    ripemd160: [10, Ru, ut, [], [0, 2], !1],
    sha256: [11, vr, ut, [], [0, 2], !1],
    hash160: [12, Ru, ut, [], [0, 2], !1],
    hash256: [13, vr, ut, [], [0, 2], !1],
    txid: [14, !1, vr, [2], [2], !0],
    index: [15, !1, M, [2], [2], !0],
    sequence: [16, !1, M, [], [2], !0],
    requiredTimeLocktime: [17, !1, M, [], [2], !1],
    requiredHeightLocktime: [18, !1, M, [], [2], !1],
    tapKeySig: [19, !1, Lu, [], [0, 2], !1],
    tapScriptSig: [20, qg, Lu, [], [0, 2], !1],
    tapLeafScript: [21, nr, ut, [], [0, 2], !1],
    tapBip32Derivation: [22, vr, Ph, [], [0, 2], !1],
    tapInternalKey: [23, !1, Wo, [], [0, 2], !1],
    tapMerkleRoot: [24, !1, vr, [], [0, 2], !1],
    proprietary: [252, ut, ut, [], [0, 2], !1],
  },
  Xg = [
    'txid',
    'sequence',
    'index',
    'witnessUtxo',
    'nonWitnessUtxo',
    'finalScriptSig',
    'finalScriptWitness',
    'unknown',
  ],
  Yg = ['partialSig', 'finalScriptSig', 'finalScriptWitness', 'tapKeySig', 'tapScriptSig'],
  Vo = {
    redeemScript: [0, !1, ut, [], [0, 2], !1],
    witnessScript: [1, !1, ut, [], [0, 2], !1],
    bip32Derivation: [2, _s, vi, [], [0, 2], !1],
    amount: [3, !1, Pg, [2], [2], !0],
    script: [4, !1, ut, [2], [2], !0],
    tapInternalKey: [5, !1, Wo, [], [0, 2], !1],
    tapTree: [6, !1, zg, [], [0, 2], !1],
    tapBip32Derivation: [7, Wo, Ph, [], [0, 2], !1],
    proprietary: [252, ut, ut, [], [0, 2], !1],
  },
  Zg = [],
  Fu = Ft(mc, Ht({ key: Hg(ie, Ht({ type: ie, key: Q(null) })), value: Q(ie) }));
Ht({ type: ie, key: Q(null) });
function _c(t) {
  const e = {};
  for (const n in t) {
    const [r, o, i] = t[n];
    e[r] = [n, o, i];
  }
  return dt({
    encodeStream: (n, r) => {
      let o = [];
      for (const i in t) {
        const s = r[i];
        if (s === void 0) continue;
        const [c, u, f] = t[i];
        if (!u) o.push({ key: { type: c, key: J }, value: f.encode(s) });
        else {
          const h = s.map(([a, d]) => [u.encode(a), f.encode(d)]);
          h.sort((a, d) => As(a[0], d[0]));
          for (const [a, d] of h) o.push({ key: { key: a, type: c }, value: d });
        }
      }
      if (r.unknown) {
        r.unknown.sort((i, s) => As(i[0].key, s[0].key));
        for (const [i, s] of r.unknown) o.push({ key: i, value: s });
      }
      Fu.encodeStream(n, o);
    },
    decodeStream: (n) => {
      const r = Fu.decodeStream(n),
        o = {},
        i = {};
      for (const s of r) {
        let c = 'unknown',
          u = s.key.key,
          f = s.value;
        if (e[s.key.type]) {
          const [h, a, d] = e[s.key.type];
          if (((c = h), !a && u.length))
            throw new Error(
              `PSBT: Non-empty key for ${c} (key=${Z.encode(u)} value=${Z.encode(f)}`
            );
          if (((u = a ? a.decode(u) : void 0), (f = d.decode(f)), !a)) {
            if (o[c]) throw new Error(`PSBT: Same keys: ${c} (key=${u} value=${f})`);
            (o[c] = f), (i[c] = !0);
            continue;
          }
        } else u = { type: s.key.type, key: s.key.key };
        if (i[c]) throw new Error(`PSBT: Key type with empty key and no key=${c} val=${f}`);
        o[c] || (o[c] = []), o[c].push([u, f]);
      }
      return o;
    },
  });
}
function Ku(t, e) {
  if (!z(t.hash, $t(e))) throw new Error('checkScript: wsh wrong witnessScript hash');
  const n = Et.decode(e);
  if (n.type === 'tr' || n.type === 'tr_ns' || n.type === 'tr_ms')
    throw new Error(`checkScript: P2${n.type} cannot be wrapped in P2SH`);
  if (n.type === 'wpkh' || n.type === 'sh')
    throw new Error(`checkScript: P2${n.type} cannot be wrapped in P2WSH`);
}
function vs(t, e, n) {
  if (t) {
    const r = Et.decode(t);
    if (r.type === 'tr_ns' || r.type === 'tr_ms' || r.type === 'ms' || r.type == 'pk')
      throw new Error(`checkScript: non-wrapped ${r.type}`);
    if (r.type === 'sh' && e) {
      if (!z(r.hash, Ai(e))) throw new Error('checkScript: sh wrong redeemScript hash');
      const o = Et.decode(e);
      if (o.type === 'tr' || o.type === 'tr_ns' || o.type === 'tr_ms')
        throw new Error(`checkScript: P2${o.type} cannot be wrapped in P2SH`);
      if (o.type === 'sh') throw new Error('checkScript: P2SH cannot be wrapped in P2SH');
    }
    r.type === 'wsh' && n && Ku(r, n);
  }
  if (e) {
    const r = Et.decode(e);
    r.type === 'wsh' && n && Ku(r, n);
  }
}
const Ac = fe(_c(Do), (t) => {
    if (t.finalScriptWitness && !t.finalScriptWitness.length)
      throw new Error('validateInput: wmpty finalScriptWitness');
    if (t.partialSig && !t.partialSig.length) throw new Error('Empty partialSig');
    if (t.partialSig) for (const [e] of t.partialSig) lr(e, vt.ecdsa);
    if (t.bip32Derivation) for (const [e] of t.bip32Derivation) lr(e, vt.ecdsa);
    if (t.requiredTimeLocktime !== void 0 && t.requiredTimeLocktime < 5e8)
      throw new Error(`validateInput: wrong timeLocktime=${t.requiredTimeLocktime}`);
    if (
      t.requiredHeightLocktime !== void 0 &&
      (t.requiredHeightLocktime <= 0 || t.requiredHeightLocktime >= 5e8)
    )
      throw new Error(`validateInput: wrong heighLocktime=${t.requiredHeightLocktime}`);
    if (t.nonWitnessUtxo && t.index !== void 0) {
      const e = t.nonWitnessUtxo.outputs.length - 1;
      if (t.index > e) throw new Error(`validateInput: index(${t.index}) not in nonWitnessUtxo`);
      const n = t.nonWitnessUtxo.outputs[t.index];
      if (
        t.witnessUtxo &&
        (!z(t.witnessUtxo.script, n.script) || t.witnessUtxo.amount !== n.amount)
      )
        throw new Error('validateInput: witnessUtxo different from nonWitnessUtxo');
    }
    if (t.tapLeafScript)
      for (const [e, n] of t.tapLeafScript) {
        if ((e.version & 254) !== n[n.length - 1])
          throw new Error('validateInput: tapLeafScript version mimatch');
        if (n[n.length - 1] & 1)
          throw new Error('validateInput: tapLeafScript version has parity bit!');
      }
    if (t.nonWitnessUtxo && t.index && t.txid) {
      if (t.nonWitnessUtxo.outputs.length - 1 < t.index)
        throw new Error('nonWitnessUtxo: incorect output index');
      const n = Lr.fromRaw(ge.encode(t.nonWitnessUtxo)),
        r = Z.encode(t.txid);
      if (n.id !== r) throw new Error(`nonWitnessUtxo: wrong txid, exp=${r} got=${n.id}`);
    }
    return t;
  }),
  Ic = fe(_c(Vo), (t) => {
    if (t.bip32Derivation) for (const [e] of t.bip32Derivation) lr(e, vt.ecdsa);
    return t;
  }),
  xh = fe(_c(Tc), (t) => {
    if ((t.version || 0) === 0) {
      if (!t.unsignedTx) throw new Error('PSBTv0: missing unsignedTx');
      if (t.unsignedTx.segwitFlag || t.unsignedTx.witnesses)
        throw new Error('PSBTv0: witness in unsingedTx');
      for (const n of t.unsignedTx.inputs)
        if (n.finalScriptSig && n.finalScriptSig.length)
          throw new Error('PSBTv0: input scriptSig found in unsignedTx');
    }
    return t;
  }),
  Qg = Ht({
    magic: Ti(mi(new Uint8Array([255])), 'psbt'),
    global: xh,
    inputs: Ft('global/unsignedTx/inputs/length', Ac),
    outputs: Ft(null, Ic),
  }),
  Jg = Ht({
    magic: Ti(mi(new Uint8Array([255])), 'psbt'),
    global: xh,
    inputs: Ft('global/inputCount', Ac),
    outputs: Ft('global/outputCount', Ic),
  });
Ht({
  magic: Ti(mi(new Uint8Array([255])), 'psbt'),
  items: Ft(null, Si(Ft(mc, Ng([Og(ie), Q(Ii)])), zr.dict())),
});
function Ji(t, e, n) {
  for (const r in n) {
    if (r === 'unknown' || !e[r]) continue;
    const { allowInc: o } = Is(e[r]);
    if (!o.includes(t)) throw new Error(`PSBTv${t}: field ${r} is not allowed`);
  }
  for (const r in e) {
    const { reqInc: o } = Is(e[r]);
    if (o.includes(t) && n[r] === void 0) throw new Error(`PSBTv${t}: missing required field ${r}`);
  }
}
function Mu(t, e, n) {
  const r = {};
  for (const o in n) {
    const i = o;
    if (i !== 'unknown') {
      if (!e[i]) continue;
      const { allowInc: s, silentIgnore: c } = Is(e[i]);
      if (!s.includes(t)) {
        if (c) continue;
        throw new Error(
          `Failed to serialize in PSBTv${t}: ${i} but versions allows inclusion=${s}`
        );
      }
    }
    r[i] = n[i];
  }
  return r;
}
function Oh(t) {
  const e = (t && t.global && t.global.version) || 0;
  Ji(e, Tc, t.global);
  for (const s of t.inputs) Ji(e, Do, s);
  for (const s of t.outputs) Ji(e, Vo, s);
  const n = e ? t.global.inputCount : t.global.unsignedTx.inputs.length;
  if (t.inputs.length < n) throw new Error('Not enough inputs');
  const r = t.inputs.slice(n);
  if (r.length > 1 || (r.length && Object.keys(r[0]).length))
    throw new Error(`Unexpected inputs left in tx=${r}`);
  const o = e ? t.global.outputCount : t.global.unsignedTx.outputs.length;
  if (t.outputs.length < o) throw new Error('Not outputs inputs');
  const i = t.outputs.slice(o);
  if (i.length > 1 || (i.length && Object.keys(i[0]).length))
    throw new Error(`Unexpected outputs left in tx=${i}`);
  return t;
}
function ts(t, e, n, r) {
  const o = { ...n, ...e };
  for (const i in t) {
    const s = i,
      [c, u, f] = t[s],
      h = r && !r.includes(i);
    if (e[i] === void 0 && i in e) {
      if (h) throw new Error(`Cannot remove signed field=${i}`);
      delete o[i];
    } else if (u) {
      const a = n && n[i] ? n[i] : [];
      let d = e[s];
      if (d) {
        if (!Array.isArray(d)) throw new Error(`keyMap(${i}): KV pairs should be [k, v][]`);
        d = d.map((p) => {
          if (p.length !== 2) throw new Error(`keyMap(${i}): KV pairs should be [k, v][]`);
          return [
            typeof p[0] == 'string' ? u.decode(Z.decode(p[0])) : p[0],
            typeof p[1] == 'string' ? f.decode(Z.decode(p[1])) : p[1],
          ];
        });
        const l = {},
          g = (p, b, m) => {
            if (l[p] === void 0) {
              l[p] = [b, m];
              return;
            }
            const I = Z.encode(f.encode(l[p][1])),
              _ = Z.encode(f.encode(m));
            if (I !== _) throw new Error(`keyMap(${s}): same key=${p} oldVal=${I} newVal=${_}`);
          };
        for (const [p, b] of a) {
          const m = Z.encode(u.encode(p));
          g(m, p, b);
        }
        for (const [p, b] of d) {
          const m = Z.encode(u.encode(p));
          if (b === void 0) {
            if (h) throw new Error(`Cannot remove signed field=${s}/${p}`);
            delete l[m];
          } else g(m, p, b);
        }
        o[s] = Object.values(l);
      }
    } else if (typeof o[i] == 'string') o[i] = f.decode(Z.decode(o[i]));
    else if (h && i in e && n && n[i] !== void 0 && !z(f.encode(e[i]), f.encode(n[i])))
      throw new Error(`Cannot change signed field=${i}`);
  }
  for (const i in o) t[i] || delete o[i];
  return o;
}
const Wu = fe(Qg, Oh),
  Du = fe(Jg, Oh),
  es = Ht({ txid: Q(32, !0), index: M }),
  t1 = {
    encode(t) {
      if (!(t.length !== 2 || !X(t[0]) || !En(t[0], vt.ecdsa) || t[1] !== 'CHECKSIG'))
        return { type: 'pk', pubkey: t[0] };
    },
    decode: (t) => (t.type === 'pk' ? [t.pubkey, 'CHECKSIG'] : void 0),
  },
  e1 = {
    encode(t) {
      if (
        !(t.length !== 5 || t[0] !== 'DUP' || t[1] !== 'HASH160' || !X(t[2])) &&
        !(t[3] !== 'EQUALVERIFY' || t[4] !== 'CHECKSIG')
      )
        return { type: 'pkh', hash: t[2] };
    },
    decode: (t) =>
      t.type === 'pkh' ? ['DUP', 'HASH160', t.hash, 'EQUALVERIFY', 'CHECKSIG'] : void 0,
  },
  n1 = {
    encode(t) {
      if (!(t.length !== 3 || t[0] !== 'HASH160' || !X(t[1]) || t[2] !== 'EQUAL'))
        return { type: 'sh', hash: t[1] };
    },
    decode: (t) => (t.type === 'sh' ? ['HASH160', t.hash, 'EQUAL'] : void 0),
  },
  N1 = (t, e = yr) => {
    const n = t.script;
    if (!X(n)) throw new Error(`Wrong script: ${typeof t.script}, expected Uint8Array`);
    const r = Ai(n),
      o = Et.encode({ type: 'sh', hash: r });
    vs(o, n, t.witnessScript);
    const i = {
      type: 'sh',
      redeemScript: n,
      script: Et.encode({ type: 'sh', hash: r }),
      address: ki(e).encode({ type: 'sh', hash: r }),
    };
    return t.witnessScript && (i.witnessScript = t.witnessScript), i;
  },
  r1 = {
    encode(t) {
      if (!(t.length !== 2 || t[0] !== 0 || !X(t[1])) && t[1].length === 32)
        return { type: 'wsh', hash: t[1] };
    },
    decode: (t) => (t.type === 'wsh' ? [0, t.hash] : void 0),
  },
  o1 = {
    encode(t) {
      if (!(t.length !== 2 || t[0] !== 0 || !X(t[1])) && t[1].length === 20)
        return { type: 'wpkh', hash: t[1] };
    },
    decode: (t) => (t.type === 'wpkh' ? [0, t.hash] : void 0),
  },
  H1 = (t, e = yr) => {
    if (!En(t, vt.ecdsa)) throw new Error('P2WPKH: invalid publicKey');
    if (t.length === 65) throw new Error('P2WPKH: uncompressed public key');
    const n = Ai(t);
    return {
      type: 'wpkh',
      script: Et.encode({ type: 'wpkh', hash: n }),
      address: ki(e).encode({ type: 'wpkh', hash: n }),
    };
  },
  i1 = {
    encode(t) {
      const e = t.length - 1;
      if (t[e] !== 'CHECKMULTISIG') return;
      const n = t[0],
        r = t[e - 1];
      if (typeof n != 'number' || typeof r != 'number') return;
      const o = t.slice(1, -2);
      if (r === o.length) {
        for (const i of o) if (!X(i)) return;
        return { type: 'ms', m: n, pubkeys: o };
      }
    },
    decode: (t) =>
      t.type === 'ms' ? [t.m, ...t.pubkeys, t.pubkeys.length, 'CHECKMULTISIG'] : void 0,
  },
  s1 = {
    encode(t) {
      if (!(t.length !== 2 || t[0] !== 1 || !X(t[1]))) return { type: 'tr', pubkey: t[1] };
    },
    decode: (t) => (t.type === 'tr' ? [1, t.pubkey] : void 0),
  };
function c1(t) {
  const e = Array.from(t);
  for (; e.length >= 2; ) {
    e.sort((s, c) => (c.weight || 1) - (s.weight || 1));
    const r = e.pop(),
      o = e.pop(),
      i = ((o == null ? void 0 : o.weight) || 1) + ((r == null ? void 0 : r.weight) || 1);
    e.push({
      weight: i,
      childs: [(o == null ? void 0 : o.childs) || o, (r == null ? void 0 : r.childs) || r],
    });
  }
  const n = e[0];
  return (n == null ? void 0 : n.childs) || n;
}
function u1(t, e, n = !1) {
  const r = Et.decode(t);
  if (r.type === 'unknown' && n) return;
  if (!['tr_ns', 'tr_ms'].includes(r.type)) throw new Error(`P2TR: invalid leaf script=${r.type}`);
  const o = r;
  if (!n && o.pubkeys)
    for (const i of o.pubkeys) {
      if (z(i, Bh)) throw new Error('Unspendable taproot key in leaf script');
      if (z(i, e))
        throw new Error(
          'Using P2TR with leaf script with same key as internal key is not supported'
        );
    }
}
function ks(t, e, n = !1) {
  if (!t) throw new Error('taprootHashTree: empty tree');
  if ((Array.isArray(t) && t.length === 1 && (t = t[0]), !Array.isArray(t))) {
    const { leafVersion: c, script: u } = t;
    if (t.tapLeafScript || (t.tapMerkleRoot && !z(t.tapMerkleRoot, J)))
      throw new Error('P2TR: tapRoot leafScript cannot have tree');
    const f = typeof u == 'string' ? Z.decode(u) : u;
    if (!X(f)) throw new Error(`checkScript: wrong script type=${f}`);
    return u1(f, e, n), { type: 'leaf', version: c, script: f, hash: bo(f, c) };
  }
  if ((t.length !== 2 && (t = c1(t)), t.length !== 2))
    throw new Error('hashTree: non binary tree!');
  const r = ks(t[0], e, n),
    o = ks(t[1], e, n);
  let [i, s] = [r.hash, o.hash];
  return (
    As(s, i) === -1 && ([i, s] = [s, i]),
    { type: 'branch', left: r, right: o, hash: Jt.utils.taggedHash('TapBranch', i, s) }
  );
}
function Ps(t, e = []) {
  if (!t) throw new Error('taprootAddPath: empty tree');
  if (t.type === 'leaf') return { ...t, path: e };
  if (t.type !== 'branch') throw new Error(`taprootAddPath: wrong type=${t}`);
  return {
    ...t,
    path: e,
    left: Ps(t.left, [t.right.hash, ...e]),
    right: Ps(t.right, [t.left.hash, ...e]),
  };
}
function xs(t) {
  if (!t) throw new Error('taprootAddPath: empty tree');
  if (t.type === 'leaf') return [t];
  if (t.type !== 'branch') throw new Error(`taprootWalkTree: wrong type=${t}`);
  return [...xs(t.left), ...xs(t.right)];
}
const Bh = $t(_i.BASE.toRawBytes(!1));
function L1(t, e, n = yr, r = !1) {
  if (!t && !e) throw new Error('p2tr: should have pubKey or scriptTree (or both)');
  const o = typeof t == 'string' ? Z.decode(t) : t || Bh;
  if (!En(o, vt.schnorr)) throw new Error('p2tr: non-schnorr pubkey');
  let i = e ? Ps(ks(e, o, r)) : void 0;
  const s = i ? i.hash : void 0,
    [c, u] = Ih(o, s || J);
  let f;
  i &&
    (f = xs(i).map((d) => ({
      ...d,
      controlBlock: nr.encode({
        version: (d.version || Bs) + u,
        internalKey: o,
        merklePath: d.path,
      }),
    })));
  let h;
  f &&
    (h = f.map((d) => [
      nr.decode(d.controlBlock),
      Qe(d.script, new Uint8Array([d.version || Bs])),
    ]));
  const a = {
    type: 'tr',
    script: Et.encode({ type: 'tr', pubkey: c }),
    address: ki(n).encode({ type: 'tr', pubkey: c }),
    tweakedPubkey: c,
    tapInternalKey: o,
  };
  return f && (a.leaves = f), h && (a.tapLeafScript = h), s && (a.tapMerkleRoot = s), a;
}
const a1 = {
    encode(t) {
      const e = t.length - 1;
      if (t[e] !== 'CHECKSIG') return;
      const n = [];
      for (let r = 0; r < e; r++) {
        const o = t[r];
        if (r & 1) {
          if (o !== 'CHECKSIGVERIFY' || r === e - 1) return;
          continue;
        }
        if (!X(o)) return;
        n.push(o);
      }
      return { type: 'tr_ns', pubkeys: n };
    },
    decode: (t) => {
      if (t.type !== 'tr_ns') return;
      const e = [];
      for (let n = 0; n < t.pubkeys.length - 1; n++) e.push(t.pubkeys[n], 'CHECKSIGVERIFY');
      return e.push(t.pubkeys[t.pubkeys.length - 1], 'CHECKSIG'), e;
    },
  },
  f1 = {
    encode(t) {
      const e = t.length - 1;
      if (t[e] !== 'NUMEQUAL' || t[1] !== 'CHECKSIG') return;
      const n = [],
        r = Kg(t[e - 1]);
      if (typeof r == 'number') {
        for (let o = 0; o < e - 1; o++) {
          const i = t[o];
          if (o & 1) {
            if (i !== (o === 1 ? 'CHECKSIG' : 'CHECKSIGADD'))
              throw new Error('OutScript.encode/tr_ms: wrong element');
            continue;
          }
          if (!X(i)) throw new Error('OutScript.encode/tr_ms: wrong key element');
          n.push(i);
        }
        return { type: 'tr_ms', pubkeys: n, m: r };
      }
    },
    decode: (t) => {
      if (t.type !== 'tr_ms') return;
      const e = [t.pubkeys[0], 'CHECKSIG'];
      for (let n = 1; n < t.pubkeys.length; n++) e.push(t.pubkeys[n], 'CHECKSIGADD');
      return e.push(t.m, 'NUMEQUAL'), e;
    },
  },
  h1 = {
    encode(t) {
      return { type: 'unknown', script: Tt.encode(t) };
    },
    decode: (t) => (t.type === 'unknown' ? Tt.decode(t.script) : void 0),
  },
  l1 = [t1, e1, n1, r1, o1, i1, s1, a1, f1, h1],
  p1 = Si(Tt, zr.match(l1)),
  Et = fe(p1, (t) => {
    if (t.type === 'pk' && !En(t.pubkey, vt.ecdsa)) throw new Error('OutScript/pk: wrong key');
    if (
      (t.type === 'pkh' || t.type === 'sh' || t.type === 'wpkh') &&
      (!X(t.hash) || t.hash.length !== 20)
    )
      throw new Error(`OutScript/${t.type}: wrong hash`);
    if (t.type === 'wsh' && (!X(t.hash) || t.hash.length !== 32))
      throw new Error('OutScript/wsh: wrong hash');
    if (t.type === 'tr' && (!X(t.pubkey) || !En(t.pubkey, vt.schnorr)))
      throw new Error('OutScript/tr: wrong taproot public key');
    if ((t.type === 'ms' || t.type === 'tr_ns' || t.type === 'tr_ms') && !Array.isArray(t.pubkeys))
      throw new Error('OutScript/multisig: wrong pubkeys array');
    if (t.type === 'ms') {
      const e = t.pubkeys.length;
      for (const n of t.pubkeys)
        if (!En(n, vt.ecdsa)) throw new Error('OutScript/multisig: wrong pubkey');
      if (t.m <= 0 || e > 16 || t.m > e) throw new Error('OutScript/multisig: invalid params');
    }
    if (t.type === 'tr_ns' || t.type === 'tr_ms') {
      for (const e of t.pubkeys)
        if (!En(e, vt.schnorr)) throw new Error(`OutScript/${t.type}: wrong pubkey`);
    }
    if (t.type === 'tr_ms') {
      const e = t.pubkeys.length;
      if (t.m <= 0 || e > 999 || t.m > e) throw new Error('OutScript/tr_ms: invalid params');
    }
    return t;
  });
function Uh(t, e) {
  if (e.length < 2 || e.length > 40) throw new Error('Witness: invalid length');
  if (t > 16) throw new Error('Witness: invalid version');
  if (t === 0 && !(e.length === 20 || e.length === 32))
    throw new Error('Witness: invalid length for version');
}
function ns(t, e, n = yr) {
  Uh(t, e);
  const r = t === 0 ? Lo : Ec;
  return r.encode(n.bech32, [t].concat(r.toWords(e)));
}
function Vu(t, e) {
  return _h.encode(Qe(Uint8Array.from(e), t));
}
function ki(t = yr) {
  return {
    encode(e) {
      const { type: n } = e;
      if (n === 'wpkh') return ns(0, e.hash, t);
      if (n === 'wsh') return ns(0, e.hash, t);
      if (n === 'tr') return ns(1, e.pubkey, t);
      if (n === 'pkh') return Vu(e.hash, [t.pubKeyHash]);
      if (n === 'sh') return Vu(e.hash, [t.scriptHash]);
      throw new Error(`Unknown address type=${n}`);
    },
    decode(e) {
      if (e.length < 14 || e.length > 74) throw new Error('Invalid address length');
      if (t.bech32 && e.toLowerCase().startsWith(t.bech32)) {
        let r;
        try {
          if (((r = Lo.decode(e)), r.words[0] !== 0))
            throw new Error(`bech32: wrong version=${r.words[0]}`);
        } catch {
          if (((r = Ec.decode(e)), r.words[0] === 0))
            throw new Error(`bech32m: wrong version=${r.words[0]}`);
        }
        if (r.prefix !== t.bech32) throw new Error(`wrong bech32 prefix=${r.prefix}`);
        const [o, ...i] = r.words,
          s = Lo.fromWords(i);
        if ((Uh(o, s), o === 0 && s.length === 32)) return { type: 'wsh', hash: s };
        if (o === 0 && s.length === 20) return { type: 'wpkh', hash: s };
        if (o === 1 && s.length === 32) return { type: 'tr', pubkey: s };
        throw new Error('Unknown witness program');
      }
      const n = _h.decode(e);
      if (n.length !== 21) throw new Error('Invalid base58 address');
      if (n[0] === t.pubKeyHash) return { type: 'pkh', hash: n.slice(1) };
      if (n[0] === t.scriptHash) return { type: 'sh', hash: n.slice(1) };
      throw new Error(`Invalid address prefix=${n[0]}`);
    },
  };
}
var G;
(function (t) {
  (t[(t.DEFAULT = 0)] = 'DEFAULT'),
    (t[(t.ALL = 1)] = 'ALL'),
    (t[(t.NONE = 2)] = 'NONE'),
    (t[(t.SINGLE = 3)] = 'SINGLE'),
    (t[(t.ANYONECANPAY = 128)] = 'ANYONECANPAY');
})(G || (G = {}));
var Os;
(function (t) {
  (t[(t.DEFAULT = 0)] = 'DEFAULT'),
    (t[(t.ALL = 1)] = 'ALL'),
    (t[(t.NONE = 2)] = 'NONE'),
    (t[(t.SINGLE = 3)] = 'SINGLE'),
    (t[(t.DEFAULT_ANYONECANPAY = 128)] = 'DEFAULT_ANYONECANPAY'),
    (t[(t.ALL_ANYONECANPAY = 129)] = 'ALL_ANYONECANPAY'),
    (t[(t.NONE_ANYONECANPAY = 130)] = 'NONE_ANYONECANPAY'),
    (t[(t.SINGLE_ANYONECANPAY = 131)] = 'SINGLE_ANYONECANPAY');
})(Os || (Os = {}));
function d1(t) {
  if (typeof t != 'number' || typeof Os[t] != 'string') throw new Error(`Invalid SigHash=${t}`);
  return t;
}
function ju(t) {
  const e = t & 31;
  return { isAny: !!(t & G.ANYONECANPAY), isNone: e === G.NONE, isSingle: e === G.SINGLE };
}
function ho(t) {
  if (t.txid === void 0 || t.index === void 0)
    throw new Error('Transaction/input: txid and index required');
  return {
    txid: t.txid,
    index: t.index,
    sequence: Hr(t.sequence, vh),
    finalScriptSig: Hr(t.finalScriptSig, J),
  };
}
function Gu(t) {
  for (const e in t) {
    const n = e;
    Xg.includes(n) || delete t[n];
  }
}
function Gn(t) {
  if (t.script === void 0 || t.amount === void 0)
    throw new Error('Transaction/output: script and amount required');
  return { script: t.script, amount: t.amount };
}
const Bs = 192,
  bo = (t, e = Bs) => Jt.utils.taggedHash('TapLeaf', new Uint8Array([e]), oe.encode(t));
function y1(t, e, n, r = J) {
  return z(n, e) && ((t = $g(t, r)), (e = Jt.getPublicKey(t))), { privKey: t, pubKey: e };
}
const w1 = {}.toString;
function g1(t) {
  if (t !== void 0 && w1.call(t) !== '[object Object]')
    throw new Error(`Wrong object type for transaction options: ${t}`);
  const e = {
    ...t,
    version: Hr(t.version, Fg),
    lockTime: Hr(t.lockTime, 0),
    PSBTVersion: Hr(t.PSBTVersion, 0),
  };
  if (
    (typeof e.allowUnknowInput < 'u' && (t.allowUnknownInputs = e.allowUnknowInput),
    typeof e.allowUnknowOutput < 'u' && (t.allowUnknownOutputs = e.allowUnknowOutput),
    ![-1, 0, 1, 2].includes(e.version))
  )
    throw new Error(`Unknown version: ${e.version}`);
  if (typeof e.lockTime != 'number') throw new Error('Transaction lock time should be number');
  if ((M.encode(e.lockTime), e.PSBTVersion !== 0 && e.PSBTVersion !== 2))
    throw new Error(`Unknown PSBT version ${e.PSBTVersion}`);
  for (const n of [
    'allowUnknownOutputs',
    'allowUnknownInputs',
    'disableScriptCheck',
    'bip174jsCompat',
    'allowLegacyWitnessUtxo',
    'lowR',
  ]) {
    const r = e[n];
    if (r !== void 0 && typeof r != 'boolean')
      throw new Error(`Transation options wrong type: ${n}=${r} (${typeof r})`);
  }
  return Object.freeze(e);
}
class Lr {
  constructor(e = {}) {
    (this.global = {}), (this.inputs = []), (this.outputs = []);
    const n = (this.opts = g1(e));
    n.lockTime !== yn && (this.global.fallbackLocktime = n.lockTime),
      (this.global.txVersion = n.version);
  }
  static fromRaw(e, n = {}) {
    const r = ge.decode(e),
      o = new Lr({ ...n, version: r.version, lockTime: r.lockTime });
    for (const i of r.outputs) o.addOutput(i);
    if (((o.outputs = r.outputs), (o.inputs = r.inputs), r.witnesses))
      for (let i = 0; i < r.witnesses.length; i++) o.inputs[i].finalScriptWitness = r.witnesses[i];
    return o;
  }
  static fromPSBT(e, n = {}) {
    let r;
    try {
      r = Wu.decode(e);
    } catch (a) {
      try {
        r = Du.decode(e);
      } catch {
        throw a;
      }
    }
    const o = r.global.version || 0;
    if (o !== 0 && o !== 2) throw new Error(`Wrong PSBT version=${o}`);
    const i = r.global.unsignedTx,
      s = o === 0 ? (i == null ? void 0 : i.version) : r.global.txVersion,
      c = o === 0 ? (i == null ? void 0 : i.lockTime) : r.global.fallbackLocktime,
      u = new Lr({ ...n, version: s, lockTime: c, PSBTVersion: o }),
      f = o === 0 ? (i == null ? void 0 : i.inputs.length) : r.global.inputCount;
    u.inputs = r.inputs.slice(0, f).map((a, d) => {
      var l;
      return {
        finalScriptSig: J,
        ...((l = r.global.unsignedTx) == null ? void 0 : l.inputs[d]),
        ...a,
      };
    });
    const h = o === 0 ? (i == null ? void 0 : i.outputs.length) : r.global.outputCount;
    return (
      (u.outputs = r.outputs.slice(0, h).map((a, d) => {
        var l;
        return { ...a, ...((l = r.global.unsignedTx) == null ? void 0 : l.outputs[d]) };
      })),
      (u.global = { ...r.global, txVersion: s }),
      c !== yn && (u.global.fallbackLocktime = c),
      u
    );
  }
  toPSBT(e = this.opts.PSBTVersion) {
    if (e !== 0 && e !== 2) throw new Error(`Wrong PSBT version=${e}`);
    const n = this.inputs.map((i) => Mu(e, Do, i));
    for (const i of n)
      i.partialSig && !i.partialSig.length && delete i.partialSig,
        i.finalScriptSig && !i.finalScriptSig.length && delete i.finalScriptSig,
        i.finalScriptWitness && !i.finalScriptWitness.length && delete i.finalScriptWitness;
    const r = this.outputs.map((i) => Mu(e, Vo, i)),
      o = { ...this.global };
    return (
      e === 0
        ? ((o.unsignedTx = ge.decode(this.unsignedTx)),
          delete o.fallbackLocktime,
          delete o.txVersion)
        : ((o.version = e),
          (o.txVersion = this.version),
          (o.inputCount = this.inputs.length),
          (o.outputCount = this.outputs.length),
          o.fallbackLocktime && o.fallbackLocktime === yn && delete o.fallbackLocktime),
      this.opts.bip174jsCompat && (n.length || n.push({}), r.length || r.push({})),
      (e === 0 ? Wu : Du).encode({ global: o, inputs: n, outputs: r })
    );
  }
  get lockTime() {
    let e = yn,
      n = 0,
      r = yn,
      o = 0;
    for (const i of this.inputs)
      i.requiredHeightLocktime && ((e = Math.max(e, i.requiredHeightLocktime)), n++),
        i.requiredTimeLocktime && ((r = Math.max(r, i.requiredTimeLocktime)), o++);
    return n && n >= o ? e : r !== yn ? r : this.global.fallbackLocktime || yn;
  }
  get version() {
    if (this.global.txVersion === void 0) throw new Error('No global.txVersion');
    return this.global.txVersion;
  }
  inputStatus(e) {
    this.checkInputIdx(e);
    const n = this.inputs[e];
    return (n.finalScriptSig && n.finalScriptSig.length) ||
      (n.finalScriptWitness && n.finalScriptWitness.length)
      ? 'finalized'
      : n.tapKeySig ||
          (n.tapScriptSig && n.tapScriptSig.length) ||
          (n.partialSig && n.partialSig.length)
        ? 'signed'
        : 'unsigned';
  }
  inputSighash(e) {
    this.checkInputIdx(e);
    const n = this.inputType(this.inputs[e]).sighash,
      r = n === G.DEFAULT ? G.ALL : n & 3;
    return { sigInputs: n & G.ANYONECANPAY, sigOutputs: r };
  }
  signStatus() {
    let e = !0,
      n = !0,
      r = [],
      o = [];
    for (let i = 0; i < this.inputs.length; i++) {
      if (this.inputStatus(i) === 'unsigned') continue;
      const { sigInputs: c, sigOutputs: u } = this.inputSighash(i);
      if ((c === G.ANYONECANPAY ? r.push(i) : (e = !1), u === G.ALL)) n = !1;
      else if (u === G.SINGLE) o.push(i);
      else if (u !== G.NONE) throw new Error(`Wrong signature hash output type: ${u}`);
    }
    return { addInput: e, addOutput: n, inputs: r, outputs: o };
  }
  get isFinal() {
    for (let e = 0; e < this.inputs.length; e++) if (this.inputStatus(e) !== 'finalized') return !1;
    return !0;
  }
  get hasWitnesses() {
    let e = !1;
    for (const n of this.inputs) n.finalScriptWitness && n.finalScriptWitness.length && (e = !0);
    return e;
  }
  get weight() {
    if (!this.isFinal) throw new Error('Transaction is not finalized');
    let e = 32;
    const n = this.outputs.map(Gn);
    this.hasWitnesses && (e += 2),
      (e += 4 * ie.encode(this.inputs.length).length),
      (e += 4 * ie.encode(this.outputs.length).length);
    for (const r of this.inputs) e += 160 + 4 * oe.encode(r.finalScriptSig || J).length;
    for (const r of n) e += 32 + 4 * oe.encode(r.script).length;
    if (this.hasWitnesses)
      for (const r of this.inputs)
        r.finalScriptWitness && (e += Sc.encode(r.finalScriptWitness).length);
    return e;
  }
  get vsize() {
    return Math.ceil(this.weight / 4);
  }
  toBytes(e = !1, n = !1) {
    return ge.encode({
      version: this.version,
      lockTime: this.lockTime,
      inputs: this.inputs
        .map(ho)
        .map((r) => ({ ...r, finalScriptSig: (e && r.finalScriptSig) || J })),
      outputs: this.outputs.map(Gn),
      witnesses: this.inputs.map((r) => r.finalScriptWitness || []),
      segwitFlag: n && this.hasWitnesses,
    });
  }
  get unsignedTx() {
    return this.toBytes(!1, !1);
  }
  get hex() {
    return Z.encode(this.toBytes(!0, this.hasWitnesses));
  }
  get hash() {
    if (!this.isFinal) throw new Error('Transaction is not finalized');
    return Z.encode(Ye(this.toBytes(!0)));
  }
  get id() {
    if (!this.isFinal) throw new Error('Transaction is not finalized');
    return Z.encode(Ye(this.toBytes(!0)).reverse());
  }
  checkInputIdx(e) {
    if (!Number.isSafeInteger(e) || 0 > e || e >= this.inputs.length)
      throw new Error(`Wrong input index=${e}`);
  }
  getInput(e) {
    return this.checkInputIdx(e), Mo(this.inputs[e]);
  }
  get inputsLength() {
    return this.inputs.length;
  }
  normalizeInput(e, n, r) {
    let { nonWitnessUtxo: o, txid: i } = e;
    typeof o == 'string' && (o = Z.decode(o)),
      X(o) && (o = ge.decode(o)),
      o === void 0 && (o = n == null ? void 0 : n.nonWitnessUtxo),
      typeof i == 'string' && (i = Z.decode(i)),
      i === void 0 && (i = n == null ? void 0 : n.txid);
    let s = { ...n, ...e, nonWitnessUtxo: o, txid: i };
    s.nonWitnessUtxo === void 0 && delete s.nonWitnessUtxo,
      s.sequence === void 0 && (s.sequence = vh),
      s.tapMerkleRoot === null && delete s.tapMerkleRoot,
      (s = ts(Do, s, n, r)),
      Ac.encode(s);
    let c;
    return (
      s.nonWitnessUtxo && s.index !== void 0
        ? (c = s.nonWitnessUtxo.outputs[s.index])
        : s.witnessUtxo && (c = s.witnessUtxo),
      c && !this.opts.disableScriptCheck && vs(c && c.script, s.redeemScript, s.witnessScript),
      s
    );
  }
  addInput(e, n = !1) {
    if (!n && !this.signStatus().addInput)
      throw new Error('Tx has signed inputs, cannot add new one');
    return this.inputs.push(this.normalizeInput(e)), this.inputs.length - 1;
  }
  updateInput(e, n, r = !1) {
    this.checkInputIdx(e);
    let o;
    if (!r) {
      const i = this.signStatus();
      (!i.addInput || i.inputs.includes(e)) && (o = Yg);
    }
    this.inputs[e] = this.normalizeInput(n, this.inputs[e], o);
  }
  checkOutputIdx(e) {
    if (!Number.isSafeInteger(e) || 0 > e || e >= this.outputs.length)
      throw new Error(`Wrong output index=${e}`);
  }
  getOutput(e) {
    return this.checkOutputIdx(e), Mo(this.outputs[e]);
  }
  get outputsLength() {
    return this.outputs.length;
  }
  normalizeOutput(e, n, r) {
    let { amount: o, script: i } = e;
    if ((o === void 0 && (o = n == null ? void 0 : n.amount), typeof o != 'bigint'))
      throw new Error('amount must be bigint sats');
    typeof i == 'string' && (i = Z.decode(i)), i === void 0 && (i = n == null ? void 0 : n.script);
    let s = { ...n, ...e, amount: o, script: i };
    if (
      (s.amount === void 0 && delete s.amount,
      (s = ts(Vo, s, n, r)),
      Ic.encode(s),
      s.script && !this.opts.allowUnknownOutputs && Et.decode(s.script).type === 'unknown')
    )
      throw new Error(
        'Transaction/output: unknown output script type, there is a chance that input is unspendable. Pass allowUnknownScript=true, if you sure'
      );
    return this.opts.disableScriptCheck || vs(s.script, s.redeemScript, s.witnessScript), s;
  }
  addOutput(e, n = !1) {
    if (!n && !this.signStatus().addOutput)
      throw new Error('Tx has signed outputs, cannot add new one');
    return this.outputs.push(this.normalizeOutput(e)), this.outputs.length - 1;
  }
  updateOutput(e, n, r = !1) {
    this.checkOutputIdx(e);
    let o;
    if (!r) {
      const i = this.signStatus();
      (!i.addOutput || i.outputs.includes(e)) && (o = Zg);
    }
    this.outputs[e] = this.normalizeOutput(n, this.outputs[e], o);
  }
  addOutputAddress(e, n, r = yr) {
    return this.addOutput({ script: Et.encode(ki(r).decode(e)), amount: n });
  }
  get fee() {
    let e = 0n;
    for (const r of this.inputs) {
      const o = this.prevOut(r);
      if (!o) throw new Error('Empty input amount');
      e += o.amount;
    }
    const n = this.outputs.map(Gn);
    for (const r of n) e -= r.amount;
    return e;
  }
  preimageLegacy(e, n, r) {
    const { isAny: o, isNone: i, isSingle: s } = ju(r);
    if (e < 0 || !Number.isSafeInteger(e)) throw new Error(`Invalid input idx=${e}`);
    if ((s && e >= this.outputs.length) || e >= this.inputs.length) return kg.encode(1n);
    n = Tt.encode(Tt.decode(n).filter((h) => h !== 'CODESEPARATOR'));
    let c = this.inputs.map(ho).map((h, a) => ({ ...h, finalScriptSig: a === e ? n : J }));
    o
      ? (c = [c[e]])
      : (i || s) && (c = c.map((h, a) => ({ ...h, sequence: a === e ? h.sequence : 0 })));
    let u = this.outputs.map(Gn);
    i ? (u = []) : s && (u = u.slice(0, e).fill(Wg).concat([u[e]]));
    const f = ge.encode({
      lockTime: this.lockTime,
      version: this.version,
      segwitFlag: !1,
      inputs: c,
      outputs: u,
    });
    return Ye(f, Br.encode(r));
  }
  preimageWitnessV0(e, n, r, o) {
    const { isAny: i, isNone: s, isSingle: c } = ju(r);
    let u = fo,
      f = fo,
      h = fo;
    const a = this.inputs.map(ho),
      d = this.outputs.map(Gn);
    i || (u = Ye(...a.map(es.encode))),
      !i && !c && !s && (f = Ye(...a.map((g) => M.encode(g.sequence)))),
      !c && !s ? (h = Ye(...d.map(Zn.encode))) : c && e < d.length && (h = Ye(Zn.encode(d[e])));
    const l = a[e];
    return Ye(
      Br.encode(this.version),
      u,
      f,
      Q(32, !0).encode(l.txid),
      M.encode(l.index),
      oe.encode(n),
      go.encode(o),
      M.encode(l.sequence),
      h,
      M.encode(this.lockTime),
      M.encode(r)
    );
  }
  preimageWitnessV1(e, n, r, o, i = -1, s, c = 192, u) {
    if (!Array.isArray(o) || this.inputs.length !== o.length)
      throw new Error(`Invalid amounts array=${o}`);
    if (!Array.isArray(n) || this.inputs.length !== n.length)
      throw new Error(`Invalid prevOutScript array=${n}`);
    const f = [nn.encode(0), nn.encode(r), Br.encode(this.version), M.encode(this.lockTime)],
      h = r === G.DEFAULT ? G.ALL : r & 3,
      a = r & G.ANYONECANPAY,
      d = this.inputs.map(ho),
      l = this.outputs.map(Gn);
    a !== G.ANYONECANPAY &&
      f.push(
        ...[
          d.map(es.encode),
          o.map(go.encode),
          n.map(oe.encode),
          d.map((p) => M.encode(p.sequence)),
        ].map((p) => $t(Qe(...p)))
      ),
      h === G.ALL && f.push($t(Qe(...l.map(Zn.encode))));
    const g = (u ? 1 : 0) | (s ? 2 : 0);
    if ((f.push(new Uint8Array([g])), a === G.ANYONECANPAY)) {
      const p = d[e];
      f.push(es.encode(p), go.encode(o[e]), oe.encode(n[e]), M.encode(p.sequence));
    } else f.push(M.encode(e));
    return (
      g & 1 && f.push($t(oe.encode(u || J))),
      h === G.SINGLE && f.push(e < l.length ? $t(Zn.encode(l[e])) : fo),
      s && f.push(bo(s, c), nn.encode(0), Br.encode(i)),
      Jt.utils.taggedHash('TapSighash', ...f)
    );
  }
  prevOut(e) {
    if (e.nonWitnessUtxo) {
      if (e.index === void 0) throw new Error('Unknown input index');
      return e.nonWitnessUtxo.outputs[e.index];
    } else {
      if (e.witnessUtxo) return e.witnessUtxo;
      throw new Error('Cannot find previous output info');
    }
  }
  inputType(e) {
    let n = 'legacy',
      r = G.ALL;
    const o = this.prevOut(e),
      i = Et.decode(o.script);
    let s = i.type,
      c = i;
    const u = [i];
    if (i.type === 'tr')
      return (
        (r = G.DEFAULT),
        {
          txType: 'taproot',
          type: 'tr',
          last: i,
          lastScript: o.script,
          defaultSighash: r,
          sighash: e.sighashType || r,
        }
      );
    {
      if (((i.type === 'wpkh' || i.type === 'wsh') && (n = 'segwit'), i.type === 'sh')) {
        if (!e.redeemScript) throw new Error('inputType: sh without redeemScript');
        let d = Et.decode(e.redeemScript);
        (d.type === 'wpkh' || d.type === 'wsh') && (n = 'segwit'),
          u.push(d),
          (c = d),
          (s += `-${d.type}`);
      }
      if (c.type === 'wsh') {
        if (!e.witnessScript) throw new Error('inputType: wsh without witnessScript');
        let d = Et.decode(e.witnessScript);
        d.type === 'wsh' && (n = 'segwit'), u.push(d), (c = d), (s += `-${d.type}`);
      }
      const f = u[u.length - 1];
      if (f.type === 'sh' || f.type === 'wsh')
        throw new Error('inputType: sh/wsh cannot be terminal type');
      const h = Et.encode(f),
        a = {
          type: s,
          txType: n,
          last: f,
          lastScript: h,
          defaultSighash: r,
          sighash: e.sighashType || r,
        };
      if (n === 'legacy' && !this.opts.allowLegacyWitnessUtxo && !e.nonWitnessUtxo)
        throw new Error(
          'Transaction/sign: legacy input without nonWitnessUtxo, can result in attack that forces paying higher fees. Pass allowLegacyWitnessUtxo=true, if you sure'
        );
      return a;
    }
  }
  signIdx(e, n, r, o) {
    this.checkInputIdx(n);
    const i = this.inputs[n],
      s = this.inputType(i);
    if (!X(e)) {
      if (!i.bip32Derivation || !i.bip32Derivation.length)
        throw new Error('bip32Derivation: empty');
      const h = i.bip32Derivation
        .filter((d) => d[1].fingerprint == e.fingerprint)
        .map(([d, { path: l }]) => {
          let g = e;
          for (const p of l) g = g.deriveChild(p);
          if (!z(g.publicKey, d)) throw new Error('bip32Derivation: wrong pubKey');
          if (!g.privateKey) throw new Error('bip32Derivation: no privateKey');
          return g;
        });
      if (!h.length) throw new Error(`bip32Derivation: no items with fingerprint=${e.fingerprint}`);
      let a = !1;
      for (const d of h) this.signIdx(d.privateKey, n) && (a = !0);
      return a;
    }
    r ? r.forEach(d1) : (r = [s.defaultSighash]);
    const c = s.sighash;
    if (!r.includes(c))
      throw new Error(`Input with not allowed sigHash=${c}. Allowed: ${r.join(', ')}`);
    const { sigOutputs: u } = this.inputSighash(n);
    if (u === G.SINGLE && n >= this.outputs.length)
      throw new Error(
        `Input with sighash SINGLE, but there is no output with corresponding index=${n}`
      );
    const f = this.prevOut(i);
    if (s.txType === 'taproot') {
      if (i.tapBip32Derivation) throw new Error('tapBip32Derivation unsupported');
      const h = this.inputs.map(this.prevOut),
        a = h.map((b) => b.script),
        d = h.map((b) => b.amount);
      let l = !1,
        g = Jt.getPublicKey(e),
        p = i.tapMerkleRoot || J;
      if (i.tapInternalKey) {
        const { pubKey: b, privKey: m } = y1(e, g, i.tapInternalKey, p),
          [I, _] = Ih(i.tapInternalKey, p);
        if (z(I, b)) {
          const w = this.preimageWitnessV1(n, a, c, d),
            E = Qe(Jt.sign(w, m, o), c !== G.DEFAULT ? new Uint8Array([c]) : J);
          this.updateInput(n, { tapKeySig: E }, !0), (l = !0);
        }
      }
      if (i.tapLeafScript) {
        i.tapScriptSig = i.tapScriptSig || [];
        for (const [b, m] of i.tapLeafScript) {
          const I = m.subarray(0, -1),
            _ = Tt.decode(I),
            w = m[m.length - 1],
            E = bo(I, w);
          if (_.findIndex((T) => X(T) && z(T, g)) === -1) continue;
          const S = this.preimageWitnessV1(n, a, c, d, void 0, I, w),
            v = Qe(Jt.sign(S, e, o), c !== G.DEFAULT ? new Uint8Array([c]) : J);
          this.updateInput(n, { tapScriptSig: [[{ pubKey: g, leafHash: E }, v]] }, !0), (l = !0);
        }
      }
      if (!l) throw new Error('No taproot scripts signed');
      return !0;
    } else {
      const h = Lg(e);
      let a = !1;
      const d = Ai(h);
      for (const p of Tt.decode(s.lastScript)) X(p) && (z(p, h) || z(p, d)) && (a = !0);
      if (!a) throw new Error(`Input script doesn't have pubKey: ${s.lastScript}`);
      let l;
      if (s.txType === 'legacy') l = this.preimageLegacy(n, s.lastScript, c);
      else if (s.txType === 'segwit') {
        let p = s.lastScript;
        s.last.type === 'wpkh' && (p = Et.encode({ type: 'pkh', hash: s.last.hash })),
          (l = this.preimageWitnessV0(n, p, c, f.amount));
      } else throw new Error(`Transaction/sign: unknown tx type: ${s.txType}`);
      const g = Cg(l, e, this.opts.lowR);
      this.updateInput(n, { partialSig: [[h, Qe(g, new Uint8Array([c]))]] }, !0);
    }
    return !0;
  }
  sign(e, n, r) {
    let o = 0;
    for (let i = 0; i < this.inputs.length; i++)
      try {
        this.signIdx(e, i, n, r) && o++;
      } catch {}
    if (!o) throw new Error('No inputs signed');
    return o;
  }
  finalizeIdx(e) {
    if ((this.checkInputIdx(e), this.fee < 0n))
      throw new Error('Outputs spends more than inputs amount');
    const n = this.inputs[e],
      r = this.inputType(n);
    if (r.txType === 'taproot') {
      if (n.tapKeySig) n.finalScriptWitness = [n.tapKeySig];
      else if (n.tapLeafScript && n.tapScriptSig) {
        const u = n.tapLeafScript.sort((f, h) => nr.encode(f[0]).length - nr.encode(h[0]).length);
        for (const [f, h] of u) {
          const a = h.slice(0, -1),
            d = h[h.length - 1],
            l = Et.decode(a),
            g = bo(a, d),
            p = n.tapScriptSig.filter((m) => z(m[0].leafHash, g));
          let b = [];
          if (l.type === 'tr_ms') {
            const m = l.m,
              I = l.pubkeys;
            let _ = 0;
            for (const w of I) {
              const E = p.findIndex((y) => z(y[0].pubKey, w));
              if (_ === m || E === -1) {
                b.push(J);
                continue;
              }
              b.push(p[E][1]), _++;
            }
            if (_ !== m) continue;
          } else if (l.type === 'tr_ns') {
            for (const m of l.pubkeys) {
              const I = p.findIndex((_) => z(_[0].pubKey, m));
              I !== -1 && b.push(p[I][1]);
            }
            if (b.length !== l.pubkeys.length) continue;
          } else if (l.type === 'unknown' && this.opts.allowUnknownInputs) {
            const m = Tt.decode(a);
            if (
              ((b = p
                .map(([{ pubKey: I }, _]) => {
                  const w = m.findIndex((E) => X(E) && z(E, I));
                  if (w === -1)
                    throw new Error('finalize/taproot: cannot find position of pubkey in script');
                  return { signature: _, pos: w };
                })
                .sort((I, _) => I.pos - _.pos)
                .map((I) => I.signature)),
              !b.length)
            )
              continue;
          } else throw new Error('Finalize: Unknown tapLeafScript');
          n.finalScriptWitness = b.reverse().concat([a, nr.encode(f)]);
          break;
        }
        if (!n.finalScriptWitness) throw new Error('finalize/taproot: empty witness');
      } else throw new Error('finalize/taproot: unknown input');
      (n.finalScriptSig = J), Gu(n);
      return;
    }
    if (!n.partialSig || !n.partialSig.length) throw new Error('Not enough partial sign');
    let o = J,
      i = [];
    if (r.last.type === 'ms') {
      const u = r.last.m,
        f = r.last.pubkeys;
      let h = [];
      for (const a of f) {
        const d = n.partialSig.find((l) => z(a, l[0]));
        d && h.push(d[1]);
      }
      if (((h = h.slice(0, u)), h.length !== u))
        throw new Error(
          `Multisig: wrong signatures count, m=${u} n=${f.length} signatures=${h.length}`
        );
      o = Tt.encode([0, ...h]);
    } else if (r.last.type === 'pk') o = Tt.encode([n.partialSig[0][1]]);
    else if (r.last.type === 'pkh') o = Tt.encode([n.partialSig[0][1], n.partialSig[0][0]]);
    else if (r.last.type === 'wpkh') (o = J), (i = [n.partialSig[0][1], n.partialSig[0][0]]);
    else if (r.last.type === 'unknown' && !this.opts.allowUnknownInputs)
      throw new Error('Unknown inputs not allowed');
    let s, c;
    if (
      (r.type.includes('wsh-') &&
        (o.length &&
          r.lastScript.length &&
          (i = Tt.decode(o).map((u) => {
            if (u === 0) return J;
            if (X(u)) return u;
            throw new Error(`Wrong witness op=${u}`);
          })),
        (i = i.concat(r.lastScript))),
      r.txType === 'segwit' && (c = i),
      r.type.startsWith('sh-wsh-')
        ? (s = Tt.encode([Tt.encode([0, $t(r.lastScript)])]))
        : r.type.startsWith('sh-')
          ? (s = Tt.encode([...Tt.decode(o), r.lastScript]))
          : r.type.startsWith('wsh-') || (r.txType !== 'segwit' && (s = o)),
      !s && !c)
    )
      throw new Error('Unknown error finalizing input');
    s && (n.finalScriptSig = s), c && (n.finalScriptWitness = c), Gu(n);
  }
  finalize() {
    for (let e = 0; e < this.inputs.length; e++) this.finalizeIdx(e);
  }
  extract() {
    if (!this.isFinal) throw new Error('Transaction has unfinalized inputs');
    if (!this.outputs.length) throw new Error('Transaction has no outputs');
    if (this.fee < 0n) throw new Error('Outputs spends more than inputs amount');
    return this.toBytes(!0, !0);
  }
  combine(e) {
    for (const o of ['PSBTVersion', 'version', 'lockTime'])
      if (this.opts[o] !== e.opts[o])
        throw new Error(
          `Transaction/combine: different ${o} this=${this.opts[o]} other=${e.opts[o]}`
        );
    for (const o of ['inputs', 'outputs'])
      if (this[o].length !== e[o].length)
        throw new Error(
          `Transaction/combine: different ${o} length this=${this[o].length} other=${e[o].length}`
        );
    const n = this.global.unsignedTx ? ge.encode(this.global.unsignedTx) : J,
      r = e.global.unsignedTx ? ge.encode(e.global.unsignedTx) : J;
    if (!z(n, r)) throw new Error('Transaction/combine: different unsigned tx');
    this.global = ts(Tc, this.global, e.global);
    for (let o = 0; o < this.inputs.length; o++) this.updateInput(o, e.inputs[o], !0);
    for (let o = 0; o < this.outputs.length; o++) this.updateOutput(o, e.outputs[o], !0);
    return this;
  }
  clone() {
    return Lr.fromPSBT(this.toPSBT(2), this.opts);
  }
}
export {
  yr as N,
  Et as O,
  Tt as S,
  Lr as T,
  $t as a,
  Fh as b,
  N1 as c,
  L1 as d,
  v1 as e,
  Sd as f,
  U1 as g,
  Df as h,
  Ls as i,
  et as j,
  H1 as p,
  Jl as s,
  dp as t,
  fd as v,
};
