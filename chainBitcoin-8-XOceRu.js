import { B as A, V as un, ae as vh } from './metaplex-DKWSQMdM.js';
import { r as kh } from './chainEthereum-DCLFWD03.js';
function Ph(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in t)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(t, i, o.get ? o : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
}
var Ne = {};
Object.defineProperty(Ne, '__esModule', { value: !0 });
Ne.bech32m = Ne.bech32 = void 0;
const wi = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l',
  Mu = {};
for (let t = 0; t < wi.length; t++) {
  const e = wi.charAt(t);
  Mu[e] = t;
}
function Zn(t) {
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
function Sc(t) {
  let e = 1;
  for (let n = 0; n < t.length; ++n) {
    const r = t.charCodeAt(n);
    if (r < 33 || r > 126) return 'Invalid prefix (' + t + ')';
    e = Zn(e) ^ (r >> 5);
  }
  e = Zn(e);
  for (let n = 0; n < t.length; ++n) {
    const r = t.charCodeAt(n);
    e = Zn(e) ^ (r & 31);
  }
  return e;
}
function _s(t, e, n, r) {
  let i = 0,
    o = 0;
  const s = (1 << n) - 1,
    c = [];
  for (let u = 0; u < t.length; ++u)
    for (i = (i << e) | t[u], o += e; o >= n; ) (o -= n), c.push((i >> o) & s);
  if (r) o > 0 && c.push((i << (n - o)) & s);
  else {
    if (o >= e) return 'Excess padding';
    if ((i << (n - o)) & s) return 'Non-zero padding';
  }
  return c;
}
function xh(t) {
  return _s(t, 8, 5, !0);
}
function Oh(t) {
  const e = _s(t, 5, 8, !1);
  if (Array.isArray(e)) return e;
}
function Bh(t) {
  const e = _s(t, 5, 8, !1);
  if (Array.isArray(e)) return e;
  throw new Error(e);
}
function Wu(t) {
  let e;
  t === 'bech32' ? (e = 1) : (e = 734539939);
  function n(s, c, u) {
    if (((u = u || 90), s.length + 7 + c.length > u)) throw new TypeError('Exceeds length limit');
    s = s.toLowerCase();
    let f = Sc(s);
    if (typeof f == 'string') throw new Error(f);
    let h = s + '1';
    for (let a = 0; a < c.length; ++a) {
      const d = c[a];
      if (d >> 5) throw new Error('Non 5-bit word');
      (f = Zn(f) ^ d), (h += wi.charAt(d));
    }
    for (let a = 0; a < 6; ++a) f = Zn(f);
    f ^= e;
    for (let a = 0; a < 6; ++a) {
      const d = (f >> ((5 - a) * 5)) & 31;
      h += wi.charAt(d);
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
    let l = Sc(a);
    if (typeof l == 'string') return l;
    const g = [];
    for (let p = 0; p < d.length; ++p) {
      const b = d.charAt(p),
        m = Mu[b];
      if (m === void 0) return 'Unknown character ' + b;
      (l = Zn(l) ^ m), !(p + 6 >= d.length) && g.push(m);
    }
    return l !== e ? 'Invalid checksum for ' + s : { prefix: a, words: g };
  }
  function i(s, c) {
    const u = r(s, c);
    if (typeof u == 'object') return u;
  }
  function o(s, c) {
    const u = r(s, c);
    if (typeof u == 'object') return u;
    throw new Error(u);
  }
  return { decodeUnsafe: i, decode: o, encode: n, toWords: xh, fromWordsUnsafe: Oh, fromWords: Bh };
}
Ne.bech32 = Wu('bech32');
Ne.bech32m = Wu('bech32m');
var er = {},
  Wi = {},
  xt = {};
Object.defineProperty(xt, '__esModule', { value: !0 });
xt.output = xt.exists = xt.hash = xt.bytes = xt.bool = xt.number = void 0;
function gi(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
xt.number = gi;
function Du(t) {
  if (typeof t != 'boolean') throw new Error(`Expected boolean, not ${t}`);
}
xt.bool = Du;
function As(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
xt.bytes = As;
function Vu(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  gi(t.outputLen), gi(t.blockLen);
}
xt.hash = Vu;
function ju(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
xt.exists = ju;
function Gu(t, e) {
  As(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
xt.output = Gu;
const Uh = { number: gi, bool: Du, bytes: As, hash: Vu, exists: ju, output: Gu };
xt.default = Uh;
var Is = {},
  Di = {};
Object.defineProperty(Di, '__esModule', { value: !0 });
Di.crypto = void 0;
Di.crypto = {
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
  const e = Di,
    n = (w) => new Uint8Array(w.buffer, w.byteOffset, w.byteLength);
  t.u8 = n;
  const r = (w) => new Uint32Array(w.buffer, w.byteOffset, Math.floor(w.byteLength / 4));
  t.u32 = r;
  const i = (w) => new DataView(w.buffer, w.byteOffset, w.byteLength);
  t.createView = i;
  const o = (w, E) => (w << (32 - E)) | (w >>> E);
  if (
    ((t.rotr = o),
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
})(Is);
Object.defineProperty(Wi, '__esModule', { value: !0 });
Wi.SHA2 = void 0;
const Io = xt,
  dr = Is;
function Nh(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const i = BigInt(32),
    o = BigInt(4294967295),
    s = Number((n >> i) & o),
    c = Number(n & o),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
let Hh = class extends dr.Hash {
  constructor(e, n, r, i) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = i),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = (0, dr.createView)(this.buffer));
  }
  update(e) {
    Io.default.exists(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = (0, dr.toBytes)(e);
    const o = e.length;
    for (let s = 0; s < o; ) {
      const c = Math.min(i - this.pos, o - s);
      if (c === i) {
        const u = (0, dr.createView)(e);
        for (; i <= o - s; s += i) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === i && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    Io.default.exists(this), Io.default.output(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: i, isLE: o } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > i - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < i; a++) n[a] = 0;
    Nh(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = (0, dr.createView)(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], o);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: o, destroyed: s, pos: c } = this;
    return (
      (e.length = i), (e.pos = c), (e.finished = o), (e.destroyed = s), i % n && e.buffer.set(r), e
    );
  }
};
Wi.SHA2 = Hh;
Object.defineProperty(er, '__esModule', { value: !0 });
er.sha224 = er.sha256 = void 0;
const Lh = Wi,
  qt = Is,
  Ch = (t, e, n) => (t & e) ^ (~t & n),
  $h = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  Rh = new Uint32Array([
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
let qu = class extends Lh.SHA2 {
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
      const { A: e, B: n, C: r, D: i, E: o, F: s, G: c, H: u } = this;
      return [e, n, r, i, o, s, c, u];
    }
    set(e, n, r, i, o, s, c, u) {
      (this.A = e | 0),
        (this.B = n | 0),
        (this.C = r | 0),
        (this.D = i | 0),
        (this.E = o | 0),
        (this.F = s | 0),
        (this.G = c | 0),
        (this.H = u | 0);
    }
    process(e, n) {
      for (let a = 0; a < 16; a++, n += 4) Fe[a] = e.getUint32(n, !1);
      for (let a = 16; a < 64; a++) {
        const d = Fe[a - 15],
          l = Fe[a - 2],
          g = (0, qt.rotr)(d, 7) ^ (0, qt.rotr)(d, 18) ^ (d >>> 3),
          p = (0, qt.rotr)(l, 17) ^ (0, qt.rotr)(l, 19) ^ (l >>> 10);
        Fe[a] = (p + Fe[a - 7] + g + Fe[a - 16]) | 0;
      }
      let { A: r, B: i, C: o, D: s, E: c, F: u, G: f, H: h } = this;
      for (let a = 0; a < 64; a++) {
        const d = (0, qt.rotr)(c, 6) ^ (0, qt.rotr)(c, 11) ^ (0, qt.rotr)(c, 25),
          l = (h + d + Ch(c, u, f) + Rh[a] + Fe[a]) | 0,
          p = (((0, qt.rotr)(r, 2) ^ (0, qt.rotr)(r, 13) ^ (0, qt.rotr)(r, 22)) + $h(r, i, o)) | 0;
        (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = o), (o = i), (i = r), (r = (l + p) | 0);
      }
      (r = (r + this.A) | 0),
        (i = (i + this.B) | 0),
        (o = (o + this.C) | 0),
        (s = (s + this.D) | 0),
        (c = (c + this.E) | 0),
        (u = (u + this.F) | 0),
        (f = (f + this.G) | 0),
        (h = (h + this.H) | 0),
        this.set(r, i, o, s, c, u, f, h);
    }
    roundClean() {
      Fe.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  },
  Fh = class extends qu {
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
er.sha256 = (0, qt.wrapConstructor)(() => new qu());
er.sha224 = (0, qt.wrapConstructor)(() => new Fh());
function Kh(t) {
  if (t.length >= 255) throw new TypeError('Alphabet too long');
  for (var e = new Uint8Array(256), n = 0; n < e.length; n++) e[n] = 255;
  for (var r = 0; r < t.length; r++) {
    var i = t.charAt(r),
      o = i.charCodeAt(0);
    if (e[o] !== 255) throw new TypeError(i + ' is ambiguous');
    e[o] = r;
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
var Mh = Kh;
const Wh = Mh,
  Dh = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var Vh = Wh(Dh),
  vo = Vh,
  jh = function (t) {
    function e(o) {
      var s = Uint8Array.from(o),
        c = t(s),
        u = s.length + 4,
        f = new Uint8Array(u);
      return f.set(s, 0), f.set(c.subarray(0, 4), s.length), vo.encode(f, u);
    }
    function n(o) {
      var s = o.slice(0, -4),
        c = o.slice(-4),
        u = t(s);
      if (!((c[0] ^ u[0]) | (c[1] ^ u[1]) | (c[2] ^ u[2]) | (c[3] ^ u[3]))) return s;
    }
    function r(o) {
      var s = vo.decodeUnsafe(o);
      if (s) return n(s);
    }
    function i(o) {
      var s = vo.decode(o),
        c = n(s);
      if (!c) throw new Error('Invalid checksum');
      return c;
    }
    return { encode: e, decode: i, decodeUnsafe: r };
  },
  { sha256: Tc } = er,
  Gh = jh;
function qh(t) {
  return Tc(Tc(t));
}
var vs = Gh(qh),
  tt = {},
  zu = {},
  At = {};
Object.defineProperty(At, '__esModule', { value: !0 });
At.output = At.exists = At.hash = At.bytes = At.bool = At.number = void 0;
function bi(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
At.number = bi;
function Xu(t) {
  if (typeof t != 'boolean') throw new Error(`Expected boolean, not ${t}`);
}
At.bool = Xu;
function ks(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
At.bytes = ks;
function Yu(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  bi(t.outputLen), bi(t.blockLen);
}
At.hash = Yu;
function Zu(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
At.exists = Zu;
function Qu(t, e) {
  ks(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
At.output = Qu;
const zh = { number: bi, bool: Xu, bytes: ks, hash: Yu, exists: Zu, output: Qu };
At.default = zh;
var Vi = {},
  ji = {};
Object.defineProperty(ji, '__esModule', { value: !0 });
ji.crypto = void 0;
ji.crypto = typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;
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
  const e = ji,
    n = (y) => y instanceof Uint8Array,
    r = (y) => new Uint8Array(y.buffer, y.byteOffset, y.byteLength);
  t.u8 = r;
  const i = (y) => new Uint32Array(y.buffer, y.byteOffset, Math.floor(y.byteLength / 4));
  t.u32 = i;
  const o = (y) => new DataView(y.buffer, y.byteOffset, y.byteLength);
  t.createView = o;
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
})(Vi);
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.hmac = t.HMAC = void 0);
  const e = At,
    n = Vi;
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
  const i = (o, s, c) => new r(o, s).update(c).digest();
  (t.hmac = i), (t.hmac.create = (o, s) => new r(o, s));
})(zu);
var nr = {},
  Gi = {};
Object.defineProperty(Gi, '__esModule', { value: !0 });
Gi.SHA2 = void 0;
const ko = At,
  yr = Vi;
function Xh(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const i = BigInt(32),
    o = BigInt(4294967295),
    s = Number((n >> i) & o),
    c = Number(n & o),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
let Yh = class extends yr.Hash {
  constructor(e, n, r, i) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = i),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = (0, yr.createView)(this.buffer));
  }
  update(e) {
    ko.default.exists(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = (0, yr.toBytes)(e);
    const o = e.length;
    for (let s = 0; s < o; ) {
      const c = Math.min(i - this.pos, o - s);
      if (c === i) {
        const u = (0, yr.createView)(e);
        for (; i <= o - s; s += i) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === i && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    ko.default.exists(this), ko.default.output(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: i, isLE: o } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > i - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < i; a++) n[a] = 0;
    Xh(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = (0, yr.createView)(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], o);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: o, destroyed: s, pos: c } = this;
    return (
      (e.length = i), (e.pos = c), (e.finished = o), (e.destroyed = s), i % n && e.buffer.set(r), e
    );
  }
};
Gi.SHA2 = Yh;
Object.defineProperty(nr, '__esModule', { value: !0 });
nr.sha224 = nr.sha256 = void 0;
const Zh = Gi,
  zt = Vi,
  Qh = (t, e, n) => (t & e) ^ (~t & n),
  Jh = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  tl = new Uint32Array([
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
let Ju = class extends Zh.SHA2 {
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
      const { A: e, B: n, C: r, D: i, E: o, F: s, G: c, H: u } = this;
      return [e, n, r, i, o, s, c, u];
    }
    set(e, n, r, i, o, s, c, u) {
      (this.A = e | 0),
        (this.B = n | 0),
        (this.C = r | 0),
        (this.D = i | 0),
        (this.E = o | 0),
        (this.F = s | 0),
        (this.G = c | 0),
        (this.H = u | 0);
    }
    process(e, n) {
      for (let a = 0; a < 16; a++, n += 4) Me[a] = e.getUint32(n, !1);
      for (let a = 16; a < 64; a++) {
        const d = Me[a - 15],
          l = Me[a - 2],
          g = (0, zt.rotr)(d, 7) ^ (0, zt.rotr)(d, 18) ^ (d >>> 3),
          p = (0, zt.rotr)(l, 17) ^ (0, zt.rotr)(l, 19) ^ (l >>> 10);
        Me[a] = (p + Me[a - 7] + g + Me[a - 16]) | 0;
      }
      let { A: r, B: i, C: o, D: s, E: c, F: u, G: f, H: h } = this;
      for (let a = 0; a < 64; a++) {
        const d = (0, zt.rotr)(c, 6) ^ (0, zt.rotr)(c, 11) ^ (0, zt.rotr)(c, 25),
          l = (h + d + Qh(c, u, f) + tl[a] + Me[a]) | 0,
          p = (((0, zt.rotr)(r, 2) ^ (0, zt.rotr)(r, 13) ^ (0, zt.rotr)(r, 22)) + Jh(r, i, o)) | 0;
        (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = o), (o = i), (i = r), (r = (l + p) | 0);
      }
      (r = (r + this.A) | 0),
        (i = (i + this.B) | 0),
        (o = (o + this.C) | 0),
        (s = (s + this.D) | 0),
        (c = (c + this.E) | 0),
        (u = (u + this.F) | 0),
        (f = (f + this.G) | 0),
        (h = (h + this.H) | 0),
        this.set(r, i, o, s, c, u, f, h);
    }
    roundClean() {
      Me.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  },
  el = class extends Ju {
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
nr.sha256 = (0, zt.wrapConstructor)(() => new Ju());
nr.sha224 = (0, zt.wrapConstructor)(() => new el());
var nl = kh,
  rl = zu,
  ta = nr;
function il(t) {
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
var C = il(nl);
C.utils.hmacSha256Sync = (t, ...e) => rl.hmac(ta.sha256, t, C.utils.concatBytes(...e));
C.utils.sha256Sync = (...t) => ta.sha256(C.utils.concatBytes(...t));
const Ps = C.utils._normalizePrivateKey,
  ol = 32,
  sl = 32,
  ts = new Uint8Array([
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220,
    230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65,
  ]),
  cl = 32;
function es(t, e) {
  for (let n = 0; n < 32; ++n) if (t[n] !== e[n]) return t[n] < e[n] ? -1 : 1;
  return 0;
}
function Rr(t) {
  return !(!(t instanceof Uint8Array) || t.length !== sl || es(t, ts) >= 0);
}
function ea(t) {
  return (
    t instanceof Uint8Array &&
    t.length === 64 &&
    es(t.subarray(0, 32), ts) < 0 &&
    es(t.subarray(32, 64), ts) < 0
  );
}
function qi(t) {
  return t instanceof Uint8Array && t.length === ol;
}
function na(t) {
  return t === void 0 || (t instanceof Uint8Array && t.length === cl);
}
function ra(t) {
  if (typeof t != 'string') throw new TypeError('hexToNumber: expected string, got ' + typeof t);
  return BigInt(`0x${t}`);
}
function ul(t) {
  return ra(C.utils.bytesToHex(t));
}
function xs(t) {
  let e;
  if (typeof t == 'bigint') e = t;
  else if (typeof t == 'number' && Number.isSafeInteger(t) && t >= 0) e = BigInt(t);
  else if (typeof t == 'string') {
    if (t.length !== 64) throw new Error('Expected 32 bytes of private scalar');
    e = ra(t);
  } else if (t instanceof Uint8Array) {
    if (t.length !== 32) throw new Error('Expected 32 bytes of private scalar');
    e = ul(t);
  } else throw new TypeError('Expected valid private scalar');
  if (e < 0) throw new Error('Expected private scalar >= 0');
  return e;
}
const al = (t, e) => {
    const n = Ps(t),
      r = xs(e),
      i = C.utils._bigintTo32Bytes(C.utils.mod(n + r, C.CURVE.n));
    return C.utils.isValidPrivateKey(i) ? i : null;
  },
  fl = (t, e) => {
    const n = Ps(t),
      r = xs(e),
      i = C.utils._bigintTo32Bytes(C.utils.mod(n - r, C.CURVE.n));
    return C.utils.isValidPrivateKey(i) ? i : null;
  },
  hl = (t) => {
    const e = Ps(t),
      n = C.utils._bigintTo32Bytes(C.CURVE.n - e);
    return C.utils.isValidPrivateKey(n) ? n : null;
  },
  ia = (t, e, n) => {
    const r = C.Point.fromHex(t),
      i = xs(e),
      o = C.Point.BASE.multiplyAndAddUnsafe(r, i, 1n);
    if (!o) throw new Error('Tweaked point at infinity');
    return o.toRawBytes(n);
  },
  ll = (t, e, n) => {
    const r = C.Point.fromHex(t),
      i = typeof e == 'string' ? e : C.utils.bytesToHex(e),
      o = BigInt(`0x${i}`);
    return r.multiply(o).toRawBytes(n);
  };
function Fr(t, e) {
  return t === void 0 ? (e !== void 0 ? oa(e) : !0) : !!t;
}
function Tn(t) {
  try {
    return t();
  } catch {
    return null;
  }
}
function Os(t, e) {
  if ((t.length === 32) !== e) return !1;
  try {
    return !!C.Point.fromHex(t);
  } catch {
    return !1;
  }
}
function nn(t) {
  return Os(t, !1);
}
function oa(t) {
  return Os(t, !1) && t.length === 33;
}
function an(t) {
  return C.utils.isValidPrivateKey(t);
}
function Bs(t) {
  return Os(t, !0);
}
function pl(t, e) {
  if (!Bs(t)) throw new Error('Expected Point');
  if (!Rr(e)) throw new Error('Expected Tweak');
  return Tn(() => {
    const n = ia(t, e, !0);
    return { parity: n[0] % 2 === 1 ? 1 : 0, xOnlyPubkey: n.slice(1) };
  });
}
function sa(t) {
  if (!nn(t)) throw new Error('Expected Point');
  return t.slice(1, 33);
}
function ca(t, e) {
  if (!an(t)) throw new Error('Expected Private');
  return Tn(() => C.getPublicKey(t, Fr(e)));
}
function dl(t) {
  if (!an(t)) throw new Error('Expected Private');
  return sa(ca(t));
}
function yl(t, e) {
  if (!nn(t)) throw new Error('Expected Point');
  return C.Point.fromHex(t).toRawBytes(Fr(e, t));
}
function wl(t, e, n) {
  if (!nn(t)) throw new Error('Expected Point');
  if (!Rr(e)) throw new Error('Expected Tweak');
  return Tn(() => ll(t, e, Fr(n, t)));
}
function gl(t, e, n) {
  if (!nn(t) || !nn(e)) throw new Error('Expected Point');
  return Tn(() => {
    const r = C.Point.fromHex(t),
      i = C.Point.fromHex(e);
    return r.equals(i.negate()) ? null : r.add(i).toRawBytes(Fr(n, t));
  });
}
function bl(t, e, n) {
  if (!nn(t)) throw new Error('Expected Point');
  if (!Rr(e)) throw new Error('Expected Tweak');
  return Tn(() => ia(t, e, Fr(n, t)));
}
function El(t, e) {
  if (an(t) === !1) throw new Error('Expected Private');
  if (Rr(e) === !1) throw new Error('Expected Tweak');
  return Tn(() => al(t, e));
}
function ml(t, e) {
  if (an(t) === !1) throw new Error('Expected Private');
  if (Rr(e) === !1) throw new Error('Expected Tweak');
  return Tn(() => fl(t, e));
}
function Sl(t) {
  if (an(t) === !1) throw new Error('Expected Private');
  return hl(t);
}
function Tl(t, e, n) {
  if (!an(e)) throw new Error('Expected Private');
  if (!qi(t)) throw new Error('Expected Scalar');
  if (!na(n)) throw new Error('Expected Extra Data (32 bytes)');
  return C.signSync(t, e, { der: !1, extraEntropy: n });
}
function _l(t, e, n = A.alloc(32, 0)) {
  if (!an(e)) throw new Error('Expected Private');
  if (!qi(t)) throw new Error('Expected Scalar');
  if (!na(n)) throw new Error('Expected Extra Data (32 bytes)');
  return C.schnorr.signSync(t, e, n);
}
function Al(t, e, n, r) {
  if (!nn(e)) throw new Error('Expected Point');
  if (!ea(n)) throw new Error('Expected Signature');
  if (!qi(t)) throw new Error('Expected Scalar');
  return C.verify(n, t, e, { strict: r });
}
function Il(t, e, n) {
  if (!Bs(e)) throw new Error('Expected Point');
  if (!ea(n)) throw new Error('Expected Signature');
  if (!qi(t)) throw new Error('Expected Scalar');
  return C.schnorr.verifySync(n, t, e);
}
var vl = (tt.isPoint = nn),
  kl = (tt.isPointCompressed = oa),
  Pl = (tt.isPrivate = an),
  xl = (tt.isXOnlyPoint = Bs),
  Ol = (tt.pointAdd = gl),
  Bl = (tt.pointAddScalar = bl),
  Ul = (tt.pointCompress = yl),
  Nl = (tt.pointFromScalar = ca),
  Hl = (tt.pointMultiply = wl),
  Ll = (tt.privateAdd = El),
  Cl = (tt.privateNegate = Sl),
  $l = (tt.privateSub = ml),
  Rl = (tt.sign = Tl),
  Fl = (tt.signSchnorr = _l),
  Kl = (tt.verify = Al),
  Ml = (tt.verifySchnorr = Il),
  Wl = (tt.xOnlyPointAddTweak = pl),
  Dl = (tt.xOnlyPointFromPoint = sa),
  Vl = (tt.xOnlyPointFromScalar = dl);
const T1 = Ph(
  {
    __proto__: null,
    default: tt,
    isPoint: vl,
    isPointCompressed: kl,
    isPrivate: Pl,
    isXOnlyPoint: xl,
    pointAdd: Ol,
    pointAddScalar: Bl,
    pointCompress: Ul,
    pointFromScalar: Nl,
    pointMultiply: Hl,
    privateAdd: Ll,
    privateNegate: Cl,
    privateSub: $l,
    sign: Rl,
    signSchnorr: Fl,
    verify: Kl,
    verifySchnorr: Ml,
    xOnlyPointAddTweak: Wl,
    xOnlyPointFromPoint: Dl,
    xOnlyPointFromScalar: Vl,
  },
  [tt]
);
var jl = {},
  Ot = {},
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
var hr = {},
  zi = {},
  Nt = {},
  Be = {};
Object.defineProperty(Be, '__esModule', { value: !0 });
Be.encode = Be.decode = Be.check = void 0;
function Gl(t) {
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
Be.check = Gl;
function ql(t) {
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
Be.decode = ql;
function zl(t, e) {
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
  const i = A.allocUnsafe(6 + n + r);
  return (
    (i[0] = 48),
    (i[1] = i.length - 2),
    (i[2] = 2),
    (i[3] = t.length),
    t.copy(i, 4),
    (i[4 + n] = 2),
    (i[5 + n] = e.length),
    e.copy(i, 6 + n),
    i
  );
}
Be.encode = zl;
var rn = {};
Object.defineProperty(rn, '__esModule', { value: !0 });
rn.REVERSE_OPS = rn.OPS = void 0;
const ns = {
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
rn.OPS = ns;
const ua = {};
rn.REVERSE_OPS = ua;
for (const t of Object.keys(ns)) {
  const e = ns[t];
  ua[e] = t;
}
var Je = {};
Object.defineProperty(Je, '__esModule', { value: !0 });
Je.decode = Je.encode = Je.encodingLength = void 0;
const Qe = rn;
function aa(t) {
  return t < Qe.OPS.OP_PUSHDATA1 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
}
Je.encodingLength = aa;
function Xl(t, e, n) {
  const r = aa(e);
  return (
    r === 1
      ? t.writeUInt8(e, n)
      : r === 2
        ? (t.writeUInt8(Qe.OPS.OP_PUSHDATA1, n), t.writeUInt8(e, n + 1))
        : r === 3
          ? (t.writeUInt8(Qe.OPS.OP_PUSHDATA2, n), t.writeUInt16LE(e, n + 1))
          : (t.writeUInt8(Qe.OPS.OP_PUSHDATA4, n), t.writeUInt32LE(e, n + 1)),
    r
  );
}
Je.encode = Xl;
function Yl(t, e) {
  const n = t.readUInt8(e);
  let r, i;
  if (n < Qe.OPS.OP_PUSHDATA1) (r = n), (i = 1);
  else if (n === Qe.OPS.OP_PUSHDATA1) {
    if (e + 2 > t.length) return null;
    (r = t.readUInt8(e + 1)), (i = 2);
  } else if (n === Qe.OPS.OP_PUSHDATA2) {
    if (e + 3 > t.length) return null;
    (r = t.readUInt16LE(e + 1)), (i = 3);
  } else {
    if (e + 5 > t.length) return null;
    if (n !== Qe.OPS.OP_PUSHDATA4) throw new Error('Unexpected opcode');
    (r = t.readUInt32LE(e + 1)), (i = 5);
  }
  return { opcode: n, number: r, size: i };
}
Je.decode = Yl;
var rr = {};
Object.defineProperty(rr, '__esModule', { value: !0 });
rr.encode = rr.decode = void 0;
function Zl(t, e, n) {
  (e = e || 4), (n = n === void 0 ? !0 : n);
  const r = t.length;
  if (r === 0) return 0;
  if (r > e) throw new TypeError('Script number overflow');
  if (n && !(t[r - 1] & 127) && (r <= 1 || !(t[r - 2] & 128)))
    throw new Error('Non-minimally encoded script number');
  if (r === 5) {
    const o = t.readUInt32LE(0),
      s = t.readUInt8(4);
    return s & 128 ? -((s & -129) * 4294967296 + o) : s * 4294967296 + o;
  }
  let i = 0;
  for (let o = 0; o < r; ++o) i |= t[o] << (8 * o);
  return t[r - 1] & 128 ? -(i & ~(128 << (8 * (r - 1)))) : i;
}
rr.decode = Zl;
function Ql(t) {
  return t > 2147483647 ? 5 : t > 8388607 ? 4 : t > 32767 ? 3 : t > 127 ? 2 : t > 0 ? 1 : 0;
}
function Jl(t) {
  let e = Math.abs(t);
  const n = Ql(e),
    r = A.allocUnsafe(n),
    i = t < 0;
  for (let o = 0; o < n; ++o) r.writeUInt8(e & 255, o), (e >>= 8);
  return r[n - 1] & 128 ? r.writeUInt8(i ? 128 : 0, n - 1) : i && (r[n - 1] |= 128), r;
}
rr.encode = Jl;
var ir = {},
  mt = {},
  Hr = {
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
Hr.Null = Hr.Nil;
for (var _c in Hr)
  Hr[_c].toJSON = function (t) {
    return t;
  }.bind(null, _c);
var Us = Hr,
  En = Us;
function fa(t) {
  return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
}
function Ns(t) {
  return En.Nil(t) ? '' : fa(t.constructor);
}
function tp(t) {
  return En.Function(t) ? '' : En.String(t) ? JSON.stringify(t) : t && En.Object(t) ? '' : t;
}
function Hs(t, e) {
  Error.captureStackTrace && Error.captureStackTrace(t, e);
}
function Ei(t) {
  return En.Function(t)
    ? t.toJSON
      ? t.toJSON()
      : fa(t)
    : En.Array(t)
      ? 'Array'
      : t && En.Object(t)
        ? 'Object'
        : t !== void 0
          ? t
          : '';
}
function ha(t, e, n) {
  var r = tp(e);
  return 'Expected ' + Ei(t) + ', got' + (n !== '' ? ' ' + n : '') + (r !== '' ? ' ' + r : '');
}
function He(t, e, n) {
  (n = n || Ns(e)),
    (this.message = ha(t, e, n)),
    Hs(this, He),
    (this.__type = t),
    (this.__value = e),
    (this.__valueTypeName = n);
}
He.prototype = Object.create(Error.prototype);
He.prototype.constructor = He;
function ep(t, e, n, r, i) {
  var o = '" of type ';
  return e === 'key' && (o = '" with key type '), ha('property "' + Ei(n) + o + Ei(t), r, i);
}
function Qn(t, e, n, r, i) {
  t
    ? ((i = i || Ns(r)), (this.message = ep(t, n, e, r, i)))
    : (this.message = 'Unexpected property "' + e + '"'),
    Hs(this, He),
    (this.__label = n),
    (this.__property = e),
    (this.__type = t),
    (this.__value = r),
    (this.__valueTypeName = i);
}
Qn.prototype = Object.create(Error.prototype);
Qn.prototype.constructor = He;
function np(t, e) {
  return new He(t, {}, e);
}
function rp(t, e, n) {
  return (
    t instanceof Qn
      ? ((e = e + '.' + t.__property),
        (t = new Qn(t.__type, e, t.__label, t.__value, t.__valueTypeName)))
      : t instanceof He && (t = new Qn(t.__type, e, n, t.__value, t.__valueTypeName)),
    Hs(t),
    t
  );
}
var la = {
    TfTypeError: He,
    TfPropertyTypeError: Qn,
    tfCustomError: np,
    tfSubError: rp,
    tfJSON: Ei,
    getValueTypeName: Ns,
  },
  Po,
  Ac;
function ip() {
  if (Ac) return Po;
  Ac = 1;
  var t = Us,
    e = la;
  function n(y) {
    return A.isBuffer(y);
  }
  function r(y) {
    return typeof y == 'string' && /^([0-9a-f]{2})+$/i.test(y);
  }
  function i(y, S) {
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
  var o = i.bind(null, t.Array),
    s = i.bind(null, n),
    c = i.bind(null, r),
    u = i.bind(null, t.String);
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
    ArrayN: o,
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
  return (Po = w), Po;
}
var Kr = la,
  gt = Us,
  _e = Kr.tfJSON,
  pa = Kr.TfTypeError,
  da = Kr.TfPropertyTypeError,
  wr = Kr.tfSubError,
  op = Kr.getValueTypeName,
  xe = {
    arrayOf: function (e, n) {
      (e = we(e)), (n = n || {});
      function r(i, o) {
        return !gt.Array(i) ||
          gt.Nil(i) ||
          (n.minLength !== void 0 && i.length < n.minLength) ||
          (n.maxLength !== void 0 && i.length > n.maxLength) ||
          (n.length !== void 0 && i.length !== n.length)
          ? !1
          : i.every(function (s, c) {
              try {
                return Pt(e, s, o);
              } catch (u) {
                throw wr(u, c);
              }
            });
      }
      return (
        (r.toJSON = function () {
          var i = '[' + _e(e) + ']';
          return (
            n.length !== void 0
              ? (i += '{' + n.length + '}')
              : (n.minLength !== void 0 || n.maxLength !== void 0) &&
                (i +=
                  '{' +
                  (n.minLength === void 0 ? 0 : n.minLength) +
                  ',' +
                  (n.maxLength === void 0 ? 1 / 0 : n.maxLength) +
                  '}'),
            i
          );
        }),
        r
      );
    },
    maybe: function t(e) {
      e = we(e);
      function n(r, i) {
        return gt.Nil(r) || e(r, i, t);
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
      function r(i, o) {
        if (!gt.Object(i) || gt.Nil(i)) return !1;
        for (var s in i) {
          try {
            n && Pt(n, s, o);
          } catch (u) {
            throw wr(u, s, 'key');
          }
          try {
            var c = i[s];
            Pt(e, c, o);
          } catch (u) {
            throw wr(u, s);
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
      function i(o, s) {
        if (!gt.Object(o) || gt.Nil(o)) return !1;
        var c;
        try {
          for (c in n) {
            var u = n[c],
              f = o[c];
            Pt(u, f, s);
          }
        } catch (h) {
          throw wr(h, c);
        }
        if (s) {
          for (c in o) if (!n[c]) throw new da(void 0, c);
        }
        return !0;
      }
      return (
        (i.toJSON = function () {
          return _e(n);
        }),
        i
      );
    },
    anyOf: function () {
      var e = [].slice.call(arguments).map(we);
      function n(r, i) {
        return e.some(function (o) {
          try {
            return Pt(o, r, i);
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
      function n(r, i) {
        return e.every(function (o) {
          try {
            return Pt(o, r, i);
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
        return e === op(r);
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
      function n(r, i) {
        return gt.Nil(r) || gt.Nil(r.length) || (i && r.length !== e.length)
          ? !1
          : e.every(function (o, s) {
              try {
                return Pt(o, r[s], i);
              } catch (c) {
                throw wr(c, s);
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
function Pt(t, e, n, r) {
  if (gt.Function(t)) {
    if (t(e, n)) return !0;
    throw new pa(r || t, e);
  }
  return Pt(we(t), e, n);
}
for (var tn in gt) Pt[tn] = gt[tn];
for (tn in xe) Pt[tn] = xe[tn];
var Ic = ip();
for (tn in Ic) Pt[tn] = Ic[tn];
Pt.compile = we;
Pt.TfTypeError = pa;
Pt.TfPropertyTypeError = da;
var sp = Pt;
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
  const e = un;
  t.typeforce = sp;
  const n = e.Buffer.alloc(32, 0),
    r = e.Buffer.from('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f', 'hex');
  function i(l) {
    if (!e.Buffer.isBuffer(l) || l.length < 33) return !1;
    const g = l[0],
      p = l.slice(1, 33);
    if (p.compare(n) === 0 || p.compare(r) >= 0) return !1;
    if ((g === 2 || g === 3) && l.length === 33) return !0;
    const b = l.slice(33);
    return b.compare(n) === 0 || b.compare(r) >= 0 ? !1 : g === 4 && l.length === 65;
  }
  t.isPoint = i;
  const o = Math.pow(2, 31) - 1;
  function s(l) {
    return t.typeforce.UInt32(l) && l <= o;
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
})(mt);
Object.defineProperty(ir, '__esModule', { value: !0 });
ir.encode = ir.decode = void 0;
const { Buffer: or } = un,
  ya = Be,
  rs = mt,
  { typeforce: cp } = rs,
  vc = or.alloc(1, 0);
function kc(t) {
  let e = 0;
  for (; t[e] === 0; ) ++e;
  return e === t.length
    ? vc
    : ((t = t.slice(e)), t[0] & 128 ? or.concat([vc, t], 1 + t.length) : t);
}
function Pc(t) {
  t[0] === 0 && (t = t.slice(1));
  const e = or.alloc(32, 0),
    n = Math.max(0, 32 - t.length);
  return t.copy(e, n), e;
}
function up(t) {
  const e = t.readUInt8(t.length - 1),
    n = e & -129;
  if (n <= 0 || n >= 4) throw new Error('Invalid hashType ' + e);
  const r = ya.decode(t.slice(0, -1)),
    i = Pc(r.r),
    o = Pc(r.s);
  return { signature: or.concat([i, o], 64), hashType: e };
}
ir.decode = up;
function ap(t, e) {
  cp({ signature: rs.BufferN(64), hashType: rs.UInt8 }, { signature: t, hashType: e });
  const n = e & -129;
  if (n <= 0 || n >= 4) throw new Error('Invalid hashType ' + e);
  const r = or.allocUnsafe(1);
  r.writeUInt8(e, 0);
  const i = kc(t.slice(0, 32)),
    o = kc(t.slice(32, 64));
  return or.concat([ya.encode(i, o), r]);
}
ir.encode = ap;
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
    n = rn;
  Object.defineProperty(t, 'OPS', {
    enumerable: !0,
    get: function () {
      return n.OPS;
    },
  });
  const r = Je,
    i = rr,
    o = ir,
    s = mt,
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
        ($, et) =>
          b(et)
            ? et.length === 1 && l(et) !== void 0
              ? $ + 1
              : $ + r.encodingLength(et.length) + et.length
            : $ + 1,
        0
      ),
      O = A.allocUnsafe(P);
    let L = 0;
    if (
      (T.forEach(($) => {
        if (b($)) {
          const et = l($);
          if (et !== void 0) {
            O.writeUInt8(et, L), (L += 1);
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
        const et = T.slice(O, O + $.number);
        O += $.number;
        const k = l(et);
        k !== void 0 ? P.push(k) : P.push(et);
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
      T.map((P) => (b(P) ? P : P === n.OPS.OP_0 ? A.allocUnsafe(0) : i.encode(P - u)))
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
  (t.isCanonicalScriptSignature = v), (t.number = i), (t.signature = o);
})(Nt);
var Wt = {};
Object.defineProperty(Wt, '__esModule', { value: !0 });
Wt.value = Wt.prop = void 0;
function fp(t, e, n) {
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
Wt.prop = fp;
function hp(t) {
  let e;
  return () => (e !== void 0 || (e = t()), e);
}
Wt.value = hp;
Object.defineProperty(zi, '__esModule', { value: !0 });
zi.p2data = void 0;
const lp = lt,
  fi = Nt,
  Ae = mt,
  xc = Wt,
  Oc = fi.OPS;
function pp(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function dp(t, e) {
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
  const r = { name: 'embed', network: t.network || lp.bitcoin };
  if (
    (xc.prop(r, 'output', () => {
      if (t.data) return fi.compile([Oc.OP_RETURN].concat(t.data));
    }),
    xc.prop(r, 'data', () => {
      if (t.output) return fi.decompile(t.output).slice(1);
    }),
    e.validate && t.output)
  ) {
    const i = fi.decompile(t.output);
    if (i[0] !== Oc.OP_RETURN) throw new TypeError('Output is invalid');
    if (!i.slice(1).every(Ae.typeforce.Buffer)) throw new TypeError('Output is invalid');
    if (t.data && !pp(t.data, r.data)) throw new TypeError('Data mismatch');
  }
  return Object.assign(r, t);
}
zi.p2data = dp;
var Xi = {};
Object.defineProperty(Xi, '__esModule', { value: !0 });
Xi.p2ms = void 0;
const yp = lt,
  Gn = Nt,
  ot = mt,
  We = Wt,
  qn = Gn.OPS,
  qr = qn.OP_RESERVED;
function Bc(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function wp(t, e) {
  if (!t.input && !t.output && !(t.pubkeys && t.m !== void 0) && !t.signatures)
    throw new TypeError('Not enough data');
  e = Object.assign({ validate: !0 }, e || {});
  function n(u) {
    return Gn.isCanonicalScriptSignature(u) || (e.allowIncomplete && u === qn.OP_0) !== void 0;
  }
  (0, ot.typeforce)(
    {
      network: ot.typeforce.maybe(ot.typeforce.Object),
      m: ot.typeforce.maybe(ot.typeforce.Number),
      n: ot.typeforce.maybe(ot.typeforce.Number),
      output: ot.typeforce.maybe(ot.typeforce.Buffer),
      pubkeys: ot.typeforce.maybe(ot.typeforce.arrayOf(ot.isPoint)),
      signatures: ot.typeforce.maybe(ot.typeforce.arrayOf(n)),
      input: ot.typeforce.maybe(ot.typeforce.Buffer),
    },
    t
  );
  const i = { network: t.network || yp.bitcoin };
  let o = [],
    s = !1;
  function c(u) {
    s ||
      ((s = !0),
      (o = Gn.decompile(u)),
      (i.m = o[0] - qr),
      (i.n = o[o.length - 2] - qr),
      (i.pubkeys = o.slice(1, -2)));
  }
  if (
    (We.prop(i, 'output', () => {
      if (t.m && i.n && t.pubkeys)
        return Gn.compile([].concat(qr + t.m, t.pubkeys, qr + i.n, qn.OP_CHECKMULTISIG));
    }),
    We.prop(i, 'm', () => {
      if (i.output) return c(i.output), i.m;
    }),
    We.prop(i, 'n', () => {
      if (i.pubkeys) return i.pubkeys.length;
    }),
    We.prop(i, 'pubkeys', () => {
      if (t.output) return c(t.output), i.pubkeys;
    }),
    We.prop(i, 'signatures', () => {
      if (t.input) return Gn.decompile(t.input).slice(1);
    }),
    We.prop(i, 'input', () => {
      if (t.signatures) return Gn.compile([qn.OP_0].concat(t.signatures));
    }),
    We.prop(i, 'witness', () => {
      if (i.input) return [];
    }),
    We.prop(i, 'name', () => {
      if (!(!i.m || !i.n)) return `p2ms(${i.m} of ${i.n})`;
    }),
    e.validate)
  ) {
    if (t.output) {
      if ((c(t.output), !ot.typeforce.Number(o[0]))) throw new TypeError('Output is invalid');
      if (!ot.typeforce.Number(o[o.length - 2])) throw new TypeError('Output is invalid');
      if (o[o.length - 1] !== qn.OP_CHECKMULTISIG) throw new TypeError('Output is invalid');
      if (i.m <= 0 || i.n > 16 || i.m > i.n || i.n !== o.length - 3)
        throw new TypeError('Output is invalid');
      if (!i.pubkeys.every((u) => (0, ot.isPoint)(u))) throw new TypeError('Output is invalid');
      if (t.m !== void 0 && t.m !== i.m) throw new TypeError('m mismatch');
      if (t.n !== void 0 && t.n !== i.n) throw new TypeError('n mismatch');
      if (t.pubkeys && !Bc(t.pubkeys, i.pubkeys)) throw new TypeError('Pubkeys mismatch');
    }
    if (t.pubkeys) {
      if (t.n !== void 0 && t.n !== t.pubkeys.length) throw new TypeError('Pubkey count mismatch');
      if (((i.n = t.pubkeys.length), i.n < i.m))
        throw new TypeError('Pubkey count cannot be less than m');
    }
    if (t.signatures) {
      if (t.signatures.length < i.m) throw new TypeError('Not enough signatures provided');
      if (t.signatures.length > i.m) throw new TypeError('Too many signatures provided');
    }
    if (t.input) {
      if (t.input[0] !== qn.OP_0) throw new TypeError('Input is invalid');
      if (i.signatures.length === 0 || !i.signatures.every(n))
        throw new TypeError('Input has invalid signature(s)');
      if (t.signatures && !Bc(t.signatures, i.signatures))
        throw new TypeError('Signature mismatch');
      if (t.m !== void 0 && t.m !== t.signatures.length)
        throw new TypeError('Signature count mismatch');
    }
  }
  return Object.assign(i, t);
}
Xi.p2ms = wp;
var Yi = {};
Object.defineProperty(Yi, '__esModule', { value: !0 });
Yi.p2pk = void 0;
const gp = lt,
  zn = Nt,
  ne = mt,
  Dn = Wt,
  Uc = zn.OPS;
function bp(t, e) {
  if (!t.input && !t.output && !t.pubkey && !t.input && !t.signature)
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, ne.typeforce)(
      {
        network: ne.typeforce.maybe(ne.typeforce.Object),
        output: ne.typeforce.maybe(ne.typeforce.Buffer),
        pubkey: ne.typeforce.maybe(ne.isPoint),
        signature: ne.typeforce.maybe(zn.isCanonicalScriptSignature),
        input: ne.typeforce.maybe(ne.typeforce.Buffer),
      },
      t
    );
  const n = Dn.value(() => zn.decompile(t.input)),
    i = { name: 'p2pk', network: t.network || gp.bitcoin };
  if (
    (Dn.prop(i, 'output', () => {
      if (t.pubkey) return zn.compile([t.pubkey, Uc.OP_CHECKSIG]);
    }),
    Dn.prop(i, 'pubkey', () => {
      if (t.output) return t.output.slice(1, -1);
    }),
    Dn.prop(i, 'signature', () => {
      if (t.input) return n()[0];
    }),
    Dn.prop(i, 'input', () => {
      if (t.signature) return zn.compile([t.signature]);
    }),
    Dn.prop(i, 'witness', () => {
      if (i.input) return [];
    }),
    e.validate)
  ) {
    if (t.output) {
      if (t.output[t.output.length - 1] !== Uc.OP_CHECKSIG)
        throw new TypeError('Output is invalid');
      if (!(0, ne.isPoint)(i.pubkey)) throw new TypeError('Output pubkey is invalid');
      if (t.pubkey && !t.pubkey.equals(i.pubkey)) throw new TypeError('Pubkey mismatch');
    }
    if (t.signature && t.input && !t.input.equals(i.input))
      throw new TypeError('Signature mismatch');
    if (t.input) {
      if (n().length !== 1) throw new TypeError('Input is invalid');
      if (!zn.isCanonicalScriptSignature(i.signature))
        throw new TypeError('Input has invalid signature');
    }
  }
  return Object.assign(i, t);
}
Yi.p2pk = bp;
var Zi = {},
  Ee = {},
  sr = {},
  lr = {},
  Bt = {};
Object.defineProperty(Bt, '__esModule', { value: !0 });
Bt.output = Bt.exists = Bt.hash = Bt.bytes = Bt.bool = Bt.number = void 0;
function mi(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
Bt.number = mi;
function wa(t) {
  if (typeof t != 'boolean') throw new Error(`Expected boolean, not ${t}`);
}
Bt.bool = wa;
function Ls(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
Bt.bytes = Ls;
function ga(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  mi(t.outputLen), mi(t.blockLen);
}
Bt.hash = ga;
function ba(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
Bt.exists = ba;
function Ea(t, e) {
  Ls(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
Bt.output = Ea;
const Ep = { number: mi, bool: wa, bytes: Ls, hash: ga, exists: ba, output: Ea };
Bt.default = Ep;
var Mr = {},
  Qi = {};
Object.defineProperty(Qi, '__esModule', { value: !0 });
Qi.crypto = void 0;
Qi.crypto = {
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
  const e = Qi,
    n = (w) => new Uint8Array(w.buffer, w.byteOffset, w.byteLength);
  t.u8 = n;
  const r = (w) => new Uint32Array(w.buffer, w.byteOffset, Math.floor(w.byteLength / 4));
  t.u32 = r;
  const i = (w) => new DataView(w.buffer, w.byteOffset, w.byteLength);
  t.createView = i;
  const o = (w, E) => (w << (32 - E)) | (w >>> E);
  if (
    ((t.rotr = o),
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
})(Mr);
Object.defineProperty(lr, '__esModule', { value: !0 });
lr.SHA2 = void 0;
const xo = Bt,
  gr = Mr;
function mp(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const i = BigInt(32),
    o = BigInt(4294967295),
    s = Number((n >> i) & o),
    c = Number(n & o),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
let Sp = class extends gr.Hash {
  constructor(e, n, r, i) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = i),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = (0, gr.createView)(this.buffer));
  }
  update(e) {
    xo.default.exists(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = (0, gr.toBytes)(e);
    const o = e.length;
    for (let s = 0; s < o; ) {
      const c = Math.min(i - this.pos, o - s);
      if (c === i) {
        const u = (0, gr.createView)(e);
        for (; i <= o - s; s += i) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === i && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    xo.default.exists(this), xo.default.output(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: i, isLE: o } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > i - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < i; a++) n[a] = 0;
    mp(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = (0, gr.createView)(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], o);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: o, destroyed: s, pos: c } = this;
    return (
      (e.length = i), (e.pos = c), (e.finished = o), (e.destroyed = s), i % n && e.buffer.set(r), e
    );
  }
};
lr.SHA2 = Sp;
Object.defineProperty(sr, '__esModule', { value: !0 });
sr.ripemd160 = sr.RIPEMD160 = void 0;
const Tp = lr,
  _p = Mr,
  Ap = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
  ma = Uint8Array.from({ length: 16 }, (t, e) => e),
  Ip = ma.map((t) => (9 * t + 5) % 16);
let Cs = [ma],
  $s = [Ip];
for (let t = 0; t < 4; t++) for (let e of [Cs, $s]) e.push(e[t].map((n) => Ap[n]));
const Sa = [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((t) => new Uint8Array(t)),
  vp = Cs.map((t, e) => t.map((n) => Sa[e][n])),
  kp = $s.map((t, e) => t.map((n) => Sa[e][n])),
  Pp = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
  xp = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
  zr = (t, e) => (t << e) | (t >>> (32 - e));
function Nc(t, e, n, r) {
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
const Xr = new Uint32Array(16);
let Ta = class extends Tp.SHA2 {
  constructor() {
    super(64, 20, 8, !0),
      (this.h0 = 1732584193),
      (this.h1 = -271733879),
      (this.h2 = -1732584194),
      (this.h3 = 271733878),
      (this.h4 = -1009589776);
  }
  get() {
    const { h0: e, h1: n, h2: r, h3: i, h4: o } = this;
    return [e, n, r, i, o];
  }
  set(e, n, r, i, o) {
    (this.h0 = e | 0), (this.h1 = n | 0), (this.h2 = r | 0), (this.h3 = i | 0), (this.h4 = o | 0);
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4) Xr[l] = e.getUint32(n, !0);
    let r = this.h0 | 0,
      i = r,
      o = this.h1 | 0,
      s = o,
      c = this.h2 | 0,
      u = c,
      f = this.h3 | 0,
      h = f,
      a = this.h4 | 0,
      d = a;
    for (let l = 0; l < 5; l++) {
      const g = 4 - l,
        p = Pp[l],
        b = xp[l],
        m = Cs[l],
        I = $s[l],
        _ = vp[l],
        w = kp[l];
      for (let E = 0; E < 16; E++) {
        const y = (zr(r + Nc(l, o, c, f) + Xr[m[E]] + p, _[E]) + a) | 0;
        (r = a), (a = f), (f = zr(c, 10) | 0), (c = o), (o = y);
      }
      for (let E = 0; E < 16; E++) {
        const y = (zr(i + Nc(g, s, u, h) + Xr[I[E]] + b, w[E]) + d) | 0;
        (i = d), (d = h), (h = zr(u, 10) | 0), (u = s), (s = y);
      }
    }
    this.set(
      (this.h1 + c + h) | 0,
      (this.h2 + f + d) | 0,
      (this.h3 + a + i) | 0,
      (this.h4 + r + s) | 0,
      (this.h0 + o + u) | 0
    );
  }
  roundClean() {
    Xr.fill(0);
  }
  destroy() {
    (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
};
sr.RIPEMD160 = Ta;
sr.ripemd160 = (0, _p.wrapConstructor)(() => new Ta());
var Ji = {};
Object.defineProperty(Ji, '__esModule', { value: !0 });
Ji.sha1 = void 0;
const Op = lr,
  Bp = Mr,
  Oo = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
  Up = (t, e, n) => (t & e) ^ (~t & n),
  Np = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  br = new Uint32Array([1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
  De = new Uint32Array(80);
class Hp extends Op.SHA2 {
  constructor() {
    super(64, 20, 8, !1),
      (this.A = br[0] | 0),
      (this.B = br[1] | 0),
      (this.C = br[2] | 0),
      (this.D = br[3] | 0),
      (this.E = br[4] | 0);
  }
  get() {
    const { A: e, B: n, C: r, D: i, E: o } = this;
    return [e, n, r, i, o];
  }
  set(e, n, r, i, o) {
    (this.A = e | 0), (this.B = n | 0), (this.C = r | 0), (this.D = i | 0), (this.E = o | 0);
  }
  process(e, n) {
    for (let u = 0; u < 16; u++, n += 4) De[u] = e.getUint32(n, !1);
    for (let u = 16; u < 80; u++) De[u] = Oo(De[u - 3] ^ De[u - 8] ^ De[u - 14] ^ De[u - 16], 1);
    let { A: r, B: i, C: o, D: s, E: c } = this;
    for (let u = 0; u < 80; u++) {
      let f, h;
      u < 20
        ? ((f = Up(i, o, s)), (h = 1518500249))
        : u < 40
          ? ((f = i ^ o ^ s), (h = 1859775393))
          : u < 60
            ? ((f = Np(i, o, s)), (h = 2400959708))
            : ((f = i ^ o ^ s), (h = 3395469782));
      const a = (Oo(r, 5) + f + c + h + De[u]) | 0;
      (c = s), (s = o), (o = Oo(i, 30)), (i = r), (r = a);
    }
    (r = (r + this.A) | 0),
      (i = (i + this.B) | 0),
      (o = (o + this.C) | 0),
      (s = (s + this.D) | 0),
      (c = (c + this.E) | 0),
      this.set(r, i, o, s, c);
  }
  roundClean() {
    De.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
Ji.sha1 = (0, Bp.wrapConstructor)(() => new Hp());
var cr = {};
Object.defineProperty(cr, '__esModule', { value: !0 });
cr.sha224 = cr.sha256 = void 0;
const Lp = lr,
  Xt = Mr,
  Cp = (t, e, n) => (t & e) ^ (~t & n),
  $p = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  Rp = new Uint32Array([
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
let _a = class extends Lp.SHA2 {
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
    const { A: e, B: n, C: r, D: i, E: o, F: s, G: c, H: u } = this;
    return [e, n, r, i, o, s, c, u];
  }
  set(e, n, r, i, o, s, c, u) {
    (this.A = e | 0),
      (this.B = n | 0),
      (this.C = r | 0),
      (this.D = i | 0),
      (this.E = o | 0),
      (this.F = s | 0),
      (this.G = c | 0),
      (this.H = u | 0);
  }
  process(e, n) {
    for (let a = 0; a < 16; a++, n += 4) je[a] = e.getUint32(n, !1);
    for (let a = 16; a < 64; a++) {
      const d = je[a - 15],
        l = je[a - 2],
        g = (0, Xt.rotr)(d, 7) ^ (0, Xt.rotr)(d, 18) ^ (d >>> 3),
        p = (0, Xt.rotr)(l, 17) ^ (0, Xt.rotr)(l, 19) ^ (l >>> 10);
      je[a] = (p + je[a - 7] + g + je[a - 16]) | 0;
    }
    let { A: r, B: i, C: o, D: s, E: c, F: u, G: f, H: h } = this;
    for (let a = 0; a < 64; a++) {
      const d = (0, Xt.rotr)(c, 6) ^ (0, Xt.rotr)(c, 11) ^ (0, Xt.rotr)(c, 25),
        l = (h + d + Cp(c, u, f) + Rp[a] + je[a]) | 0,
        p = (((0, Xt.rotr)(r, 2) ^ (0, Xt.rotr)(r, 13) ^ (0, Xt.rotr)(r, 22)) + $p(r, i, o)) | 0;
      (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = o), (o = i), (i = r), (r = (l + p) | 0);
    }
    (r = (r + this.A) | 0),
      (i = (i + this.B) | 0),
      (o = (o + this.C) | 0),
      (s = (s + this.D) | 0),
      (c = (c + this.E) | 0),
      (u = (u + this.F) | 0),
      (f = (f + this.G) | 0),
      (h = (h + this.H) | 0),
      this.set(r, i, o, s, c, u, f, h);
  }
  roundClean() {
    je.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
class Fp extends _a {
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
cr.sha256 = (0, Xt.wrapConstructor)(() => new _a());
cr.sha224 = (0, Xt.wrapConstructor)(() => new Fp());
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
  const { Buffer: e } = un,
    n = sr,
    r = Ji,
    i = cr;
  function o(a) {
    return e.from((0, n.ripemd160)(Uint8Array.from(a)));
  }
  t.ripemd160 = o;
  function s(a) {
    return e.from((0, r.sha1)(Uint8Array.from(a)));
  }
  t.sha1 = s;
  function c(a) {
    return e.from((0, i.sha256)(Uint8Array.from(a)));
  }
  t.sha256 = c;
  function u(a) {
    return e.from((0, n.ripemd160)((0, i.sha256)(Uint8Array.from(a))));
  }
  t.hash160 = u;
  function f(a) {
    return e.from((0, i.sha256)((0, i.sha256)(Uint8Array.from(a))));
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
Object.defineProperty(Zi, '__esModule', { value: !0 });
Zi.p2pkh = void 0;
const Bo = Ee,
  Kp = lt,
  Xn = Nt,
  It = mt,
  Ie = Wt,
  Hc = vs,
  Ge = Xn.OPS;
function Mp(t, e) {
  if (!t.address && !t.hash && !t.output && !t.pubkey && !t.input)
    throw new TypeError('Not enough data');
  (e = Object.assign({ validate: !0 }, e || {})),
    (0, It.typeforce)(
      {
        network: It.typeforce.maybe(It.typeforce.Object),
        address: It.typeforce.maybe(It.typeforce.String),
        hash: It.typeforce.maybe(It.typeforce.BufferN(20)),
        output: It.typeforce.maybe(It.typeforce.BufferN(25)),
        pubkey: It.typeforce.maybe(It.isPoint),
        signature: It.typeforce.maybe(Xn.isCanonicalScriptSignature),
        input: It.typeforce.maybe(It.typeforce.Buffer),
      },
      t
    );
  const n = Ie.value(() => {
      const s = A.from(Hc.decode(t.address)),
        c = s.readUInt8(0),
        u = s.slice(1);
      return { version: c, hash: u };
    }),
    r = Ie.value(() => Xn.decompile(t.input)),
    i = t.network || Kp.bitcoin,
    o = { name: 'p2pkh', network: i };
  if (
    (Ie.prop(o, 'address', () => {
      if (!o.hash) return;
      const s = A.allocUnsafe(21);
      return s.writeUInt8(i.pubKeyHash, 0), o.hash.copy(s, 1), Hc.encode(s);
    }),
    Ie.prop(o, 'hash', () => {
      if (t.output) return t.output.slice(3, 23);
      if (t.address) return n().hash;
      if (t.pubkey || o.pubkey) return Bo.hash160(t.pubkey || o.pubkey);
    }),
    Ie.prop(o, 'output', () => {
      if (o.hash)
        return Xn.compile([Ge.OP_DUP, Ge.OP_HASH160, o.hash, Ge.OP_EQUALVERIFY, Ge.OP_CHECKSIG]);
    }),
    Ie.prop(o, 'pubkey', () => {
      if (t.input) return r()[1];
    }),
    Ie.prop(o, 'signature', () => {
      if (t.input) return r()[0];
    }),
    Ie.prop(o, 'input', () => {
      if (t.pubkey && t.signature) return Xn.compile([t.signature, t.pubkey]);
    }),
    Ie.prop(o, 'witness', () => {
      if (o.input) return [];
    }),
    e.validate)
  ) {
    let s = A.from([]);
    if (t.address) {
      if (n().version !== i.pubKeyHash) throw new TypeError('Invalid version or Network mismatch');
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
      const c = Bo.hash160(t.pubkey);
      if (s.length > 0 && !s.equals(c)) throw new TypeError('Hash mismatch');
      s = c;
    }
    if (t.input) {
      const c = r();
      if (c.length !== 2) throw new TypeError('Input is invalid');
      if (!Xn.isCanonicalScriptSignature(c[0])) throw new TypeError('Input has invalid signature');
      if (!(0, It.isPoint)(c[1])) throw new TypeError('Input has invalid pubkey');
      if (t.signature && !t.signature.equals(c[0])) throw new TypeError('Signature mismatch');
      if (t.pubkey && !t.pubkey.equals(c[1])) throw new TypeError('Pubkey mismatch');
      const u = Bo.hash160(c[1]);
      if (s.length > 0 && !s.equals(u)) throw new TypeError('Hash mismatch');
    }
  }
  return Object.assign(o, t);
}
Zi.p2pkh = Mp;
var to = {};
Object.defineProperty(to, '__esModule', { value: !0 });
to.p2sh = void 0;
const Lc = Ee,
  Wp = lt,
  de = Nt,
  j = mt,
  he = Wt,
  Cc = vs,
  Er = de.OPS;
function Dp(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function Vp(t, e) {
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
  n || (n = (t.redeem && t.redeem.network) || Wp.bitcoin);
  const r = { network: n },
    i = he.value(() => {
      const c = A.from(Cc.decode(t.address)),
        u = c.readUInt8(0),
        f = c.slice(1);
      return { version: u, hash: f };
    }),
    o = he.value(() => de.decompile(t.input)),
    s = he.value(() => {
      const c = o(),
        u = c[c.length - 1];
      return {
        network: n,
        output: u === Er.OP_FALSE ? A.from([]) : u,
        input: de.compile(c.slice(0, -1)),
        witness: t.witness || [],
      };
    });
  if (
    (he.prop(r, 'address', () => {
      if (!r.hash) return;
      const c = A.allocUnsafe(21);
      return c.writeUInt8(r.network.scriptHash, 0), r.hash.copy(c, 1), Cc.encode(c);
    }),
    he.prop(r, 'hash', () => {
      if (t.output) return t.output.slice(2, 22);
      if (t.address) return i().hash;
      if (r.redeem && r.redeem.output) return Lc.hash160(r.redeem.output);
    }),
    he.prop(r, 'output', () => {
      if (r.hash) return de.compile([Er.OP_HASH160, r.hash, Er.OP_EQUAL]);
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
      if (i().version !== n.scriptHash) throw new TypeError('Invalid version or Network mismatch');
      if (i().hash.length !== 20) throw new TypeError('Invalid address');
      c = i().hash;
    }
    if (t.hash) {
      if (c.length > 0 && !c.equals(t.hash)) throw new TypeError('Hash mismatch');
      c = t.hash;
    }
    if (t.output) {
      if (
        t.output.length !== 23 ||
        t.output[0] !== Er.OP_HASH160 ||
        t.output[1] !== 20 ||
        t.output[22] !== Er.OP_EQUAL
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
        const a = Lc.hash160(f.output);
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
      const f = o();
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
    if (t.witness && t.redeem && t.redeem.witness && !Dp(t.redeem.witness, t.witness))
      throw new TypeError('Witness and redeem.witness mismatch');
  }
  return Object.assign(r, t);
}
to.p2sh = Vp;
var eo = {};
Object.defineProperty(eo, '__esModule', { value: !0 });
eo.p2wpkh = void 0;
const { Buffer: is } = un,
  Uo = Ee,
  jp = lt,
  hi = Nt,
  st = mt,
  qe = Wt,
  Yr = Ne,
  $c = hi.OPS,
  Gp = is.alloc(0);
function qp(t, e) {
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
        signature: st.typeforce.maybe(hi.isCanonicalScriptSignature),
        witness: st.typeforce.maybe(st.typeforce.arrayOf(st.typeforce.Buffer)),
      },
      t
    );
  const n = qe.value(() => {
      const o = Yr.bech32.decode(t.address),
        s = o.words.shift(),
        c = Yr.bech32.fromWords(o.words);
      return { version: s, prefix: o.prefix, data: is.from(c) };
    }),
    r = t.network || jp.bitcoin,
    i = { name: 'p2wpkh', network: r };
  if (
    (qe.prop(i, 'address', () => {
      if (!i.hash) return;
      const o = Yr.bech32.toWords(i.hash);
      return o.unshift(0), Yr.bech32.encode(r.bech32, o);
    }),
    qe.prop(i, 'hash', () => {
      if (t.output) return t.output.slice(2, 22);
      if (t.address) return n().data;
      if (t.pubkey || i.pubkey) return Uo.hash160(t.pubkey || i.pubkey);
    }),
    qe.prop(i, 'output', () => {
      if (i.hash) return hi.compile([$c.OP_0, i.hash]);
    }),
    qe.prop(i, 'pubkey', () => {
      if (t.pubkey) return t.pubkey;
      if (t.witness) return t.witness[1];
    }),
    qe.prop(i, 'signature', () => {
      if (t.witness) return t.witness[0];
    }),
    qe.prop(i, 'input', () => {
      if (i.witness) return Gp;
    }),
    qe.prop(i, 'witness', () => {
      if (t.pubkey && t.signature) return [t.signature, t.pubkey];
    }),
    e.validate)
  ) {
    let o = is.from([]);
    if (t.address) {
      if (r && r.bech32 !== n().prefix) throw new TypeError('Invalid prefix or Network mismatch');
      if (n().version !== 0) throw new TypeError('Invalid address version');
      if (n().data.length !== 20) throw new TypeError('Invalid address data');
      o = n().data;
    }
    if (t.hash) {
      if (o.length > 0 && !o.equals(t.hash)) throw new TypeError('Hash mismatch');
      o = t.hash;
    }
    if (t.output) {
      if (t.output.length !== 22 || t.output[0] !== $c.OP_0 || t.output[1] !== 20)
        throw new TypeError('Output is invalid');
      if (o.length > 0 && !o.equals(t.output.slice(2))) throw new TypeError('Hash mismatch');
      o = t.output.slice(2);
    }
    if (t.pubkey) {
      const s = Uo.hash160(t.pubkey);
      if (o.length > 0 && !o.equals(s)) throw new TypeError('Hash mismatch');
      if (((o = s), !(0, st.isPoint)(t.pubkey) || t.pubkey.length !== 33))
        throw new TypeError('Invalid pubkey for p2wpkh');
    }
    if (t.witness) {
      if (t.witness.length !== 2) throw new TypeError('Witness is invalid');
      if (!hi.isCanonicalScriptSignature(t.witness[0]))
        throw new TypeError('Witness has invalid signature');
      if (!(0, st.isPoint)(t.witness[1]) || t.witness[1].length !== 33)
        throw new TypeError('Witness has invalid pubkey');
      if (t.signature && !t.signature.equals(t.witness[0]))
        throw new TypeError('Signature mismatch');
      if (t.pubkey && !t.pubkey.equals(t.witness[1])) throw new TypeError('Pubkey mismatch');
      const s = Uo.hash160(t.witness[1]);
      if (o.length > 0 && !o.equals(s)) throw new TypeError('Hash mismatch');
    }
  }
  return Object.assign(i, t);
}
eo.p2wpkh = qp;
var no = {};
Object.defineProperty(no, '__esModule', { value: !0 });
no.p2wsh = void 0;
const { Buffer: Si } = un,
  Rc = Ee,
  zp = lt,
  Pe = Nt,
  V = mt,
  ve = Wt,
  Zr = Ne,
  Fc = Pe.OPS,
  No = Si.alloc(0);
function Xp(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
function Qr(t) {
  return !!(Si.isBuffer(t) && t.length === 65 && t[0] === 4 && (0, V.isPoint)(t));
}
function Yp(t, e) {
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
      const s = Zr.bech32.decode(t.address),
        c = s.words.shift(),
        u = Zr.bech32.fromWords(s.words);
      return { version: c, prefix: s.prefix, data: Si.from(u) };
    }),
    r = ve.value(() => Pe.decompile(t.redeem.input));
  let i = t.network;
  i || (i = (t.redeem && t.redeem.network) || zp.bitcoin);
  const o = { network: i };
  if (
    (ve.prop(o, 'address', () => {
      if (!o.hash) return;
      const s = Zr.bech32.toWords(o.hash);
      return s.unshift(0), Zr.bech32.encode(i.bech32, s);
    }),
    ve.prop(o, 'hash', () => {
      if (t.output) return t.output.slice(2);
      if (t.address) return n().data;
      if (o.redeem && o.redeem.output) return Rc.sha256(o.redeem.output);
    }),
    ve.prop(o, 'output', () => {
      if (o.hash) return Pe.compile([Fc.OP_0, o.hash]);
    }),
    ve.prop(o, 'redeem', () => {
      if (t.witness)
        return {
          output: t.witness[t.witness.length - 1],
          input: No,
          witness: t.witness.slice(0, -1),
        };
    }),
    ve.prop(o, 'input', () => {
      if (o.witness) return No;
    }),
    ve.prop(o, 'witness', () => {
      if (
        t.redeem &&
        t.redeem.input &&
        t.redeem.input.length > 0 &&
        t.redeem.output &&
        t.redeem.output.length > 0
      ) {
        const s = Pe.toStack(r());
        return (
          (o.redeem = Object.assign({ witness: s }, t.redeem)),
          (o.redeem.input = No),
          [].concat(s, t.redeem.output)
        );
      }
      if (t.redeem && t.redeem.output && t.redeem.witness)
        return [].concat(t.redeem.witness, t.redeem.output);
    }),
    ve.prop(o, 'name', () => {
      const s = ['p2wsh'];
      return o.redeem !== void 0 && o.redeem.name !== void 0 && s.push(o.redeem.name), s.join('-');
    }),
    e.validate)
  ) {
    let s = Si.from([]);
    if (t.address) {
      if (n().prefix !== i.bech32) throw new TypeError('Invalid prefix or Network mismatch');
      if (n().version !== 0) throw new TypeError('Invalid address version');
      if (n().data.length !== 32) throw new TypeError('Invalid address data');
      s = n().data;
    }
    if (t.hash) {
      if (s.length > 0 && !s.equals(t.hash)) throw new TypeError('Hash mismatch');
      s = t.hash;
    }
    if (t.output) {
      if (t.output.length !== 34 || t.output[0] !== Fc.OP_0 || t.output[1] !== 32)
        throw new TypeError('Output is invalid');
      const c = t.output.slice(2);
      if (s.length > 0 && !s.equals(c)) throw new TypeError('Hash mismatch');
      s = c;
    }
    if (t.redeem) {
      if (t.redeem.network && t.redeem.network !== i) throw new TypeError('Network mismatch');
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
        const u = Rc.sha256(t.redeem.output);
        if (s.length > 0 && !s.equals(u)) throw new TypeError('Hash mismatch');
        s = u;
      }
      if (t.redeem.input && !Pe.isPushOnly(r())) throw new TypeError('Non push-only scriptSig');
      if (t.witness && t.redeem.witness && !Xp(t.witness, t.redeem.witness))
        throw new TypeError('Witness and redeem.witness mismatch');
      if (
        (t.redeem.input && r().some(Qr)) ||
        (t.redeem.output && (Pe.decompile(t.redeem.output) || []).some(Qr))
      )
        throw new TypeError('redeem.input or redeem.output contains uncompressed pubkey');
    }
    if (t.witness && t.witness.length > 0) {
      const c = t.witness[t.witness.length - 1];
      if (t.redeem && t.redeem.output && !t.redeem.output.equals(c))
        throw new TypeError('Witness and redeem.output mismatch');
      if (t.witness.some(Qr) || (Pe.decompile(c) || []).some(Qr))
        throw new TypeError('Witness contains uncompressed pubkey');
    }
  }
  return Object.assign(o, t);
}
no.p2wsh = Yp;
var ro = {},
  on = {};
Object.defineProperty(on, '__esModule', { value: !0 });
on.getEccLib = on.initEccLib = void 0;
const Or = {};
function Zp(t) {
  t ? t !== Or.eccLib && (Jp(t), (Or.eccLib = t)) : (Or.eccLib = t);
}
on.initEccLib = Zp;
function Qp() {
  if (!Or.eccLib)
    throw new Error(
      'No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance'
    );
  return Or.eccLib;
}
on.getEccLib = Qp;
const ke = (t) => A.from(t, 'hex');
function Jp(t) {
  Vt(typeof t.isXOnlyPoint == 'function'),
    Vt(t.isXOnlyPoint(ke('79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798'))),
    Vt(t.isXOnlyPoint(ke('fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e'))),
    Vt(t.isXOnlyPoint(ke('f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9'))),
    Vt(t.isXOnlyPoint(ke('0000000000000000000000000000000000000000000000000000000000000001'))),
    Vt(!t.isXOnlyPoint(ke('0000000000000000000000000000000000000000000000000000000000000000'))),
    Vt(!t.isXOnlyPoint(ke('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'))),
    Vt(typeof t.xOnlyPointAddTweak == 'function'),
    td.forEach((e) => {
      const n = t.xOnlyPointAddTweak(ke(e.pubkey), ke(e.tweak));
      e.result === null
        ? Vt(n === null)
        : (Vt(n !== null),
          Vt(n.parity === e.parity),
          Vt(A.from(n.xOnlyPubkey).equals(ke(e.result))));
    });
}
function Vt(t) {
  if (!t) throw new Error('ecc library invalid');
}
const td = [
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
var io = {},
  at = {},
  os = vh.Buffer,
  ed = 9007199254740991;
function Rs(t) {
  if (t < 0 || t > ed || t % 1 !== 0) throw new RangeError('value out of range');
}
function Ar(t, e, n) {
  if ((Rs(t), e || (e = os.allocUnsafe(Aa(t))), !os.isBuffer(e)))
    throw new TypeError('buffer must be a Buffer instance');
  return (
    n || (n = 0),
    t < 253
      ? (e.writeUInt8(t, n), (Ar.bytes = 1))
      : t <= 65535
        ? (e.writeUInt8(253, n), e.writeUInt16LE(t, n + 1), (Ar.bytes = 3))
        : t <= 4294967295
          ? (e.writeUInt8(254, n), e.writeUInt32LE(t, n + 1), (Ar.bytes = 5))
          : (e.writeUInt8(255, n),
            e.writeUInt32LE(t >>> 0, n + 1),
            e.writeUInt32LE((t / 4294967296) | 0, n + 5),
            (Ar.bytes = 9)),
    e
  );
}
function Ir(t, e) {
  if (!os.isBuffer(t)) throw new TypeError('buffer must be a Buffer instance');
  e || (e = 0);
  var n = t.readUInt8(e);
  if (n < 253) return (Ir.bytes = 1), n;
  if (n === 253) return (Ir.bytes = 3), t.readUInt16LE(e + 1);
  if (n === 254) return (Ir.bytes = 5), t.readUInt32LE(e + 1);
  Ir.bytes = 9;
  var r = t.readUInt32LE(e + 1),
    i = t.readUInt32LE(e + 5),
    o = i * 4294967296 + r;
  return Rs(o), o;
}
function Aa(t) {
  return Rs(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9;
}
var nd = { encode: Ar, decode: Ir, encodingLength: Aa };
Object.defineProperty(at, '__esModule', { value: !0 });
at.BufferReader =
  at.BufferWriter =
  at.cloneBuffer =
  at.reverseBuffer =
  at.writeUInt64LE =
  at.readUInt64LE =
  at.varuint =
    void 0;
const mn = mt,
  { typeforce: Ia } = mn,
  Lr = nd;
at.varuint = Lr;
function va(t, e) {
  if (typeof t != 'number') throw new Error('cannot write a non-number as a number');
  if (t < 0) throw new Error('specified a negative value for writing an unsigned value');
  if (t > e) throw new Error('RangeError: value out of range');
  if (Math.floor(t) !== t) throw new Error('value has a fractional component');
}
function ka(t, e) {
  const n = t.readUInt32LE(e);
  let r = t.readUInt32LE(e + 4);
  return (r *= 4294967296), va(r + n, 9007199254740991), r + n;
}
at.readUInt64LE = ka;
function Pa(t, e, n) {
  return (
    va(e, 9007199254740991),
    t.writeInt32LE(e & -1, n),
    t.writeUInt32LE(Math.floor(e / 4294967296), n + 4),
    n + 8
  );
}
at.writeUInt64LE = Pa;
function rd(t) {
  if (t.length < 1) return t;
  let e = t.length - 1,
    n = 0;
  for (let r = 0; r < t.length / 2; r++) (n = t[r]), (t[r] = t[e]), (t[e] = n), e--;
  return t;
}
at.reverseBuffer = rd;
function id(t) {
  const e = A.allocUnsafe(t.length);
  return t.copy(e), e;
}
at.cloneBuffer = id;
class Fs {
  static withCapacity(e) {
    return new Fs(A.alloc(e));
  }
  constructor(e, n = 0) {
    (this.buffer = e), (this.offset = n), Ia(mn.tuple(mn.Buffer, mn.UInt32), [e, n]);
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
    this.offset = Pa(this.buffer, e, this.offset);
  }
  writeVarInt(e) {
    Lr.encode(e, this.buffer, this.offset), (this.offset += Lr.encode.bytes);
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
at.BufferWriter = Fs;
class od {
  constructor(e, n = 0) {
    (this.buffer = e), (this.offset = n), Ia(mn.tuple(mn.Buffer, mn.UInt32), [e, n]);
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
    const e = ka(this.buffer, this.offset);
    return (this.offset += 8), e;
  }
  readVarInt() {
    const e = Lr.decode(this.buffer, this.offset);
    return (this.offset += Lr.decode.bytes), e;
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
at.BufferReader = od;
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
  const e = un,
    n = on,
    r = Ee,
    i = at,
    o = mt;
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
    if ((0, o.isTapleaf)(p)) return { hash: h(p) };
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
    const b = i.varuint.encodingLength(p.length),
      m = e.Buffer.allocUnsafe(b);
    return i.varuint.encode(p.length, m), e.Buffer.concat([m, p]);
  }
})(io);
Object.defineProperty(ro, '__esModule', { value: !0 });
ro.p2tr = void 0;
const Jr = un,
  sd = lt,
  ss = Nt,
  N = mt,
  Kc = on,
  Ht = io,
  jt = Wt,
  ti = Ne,
  Mc = ss.OPS,
  Wc = 1,
  cd = 80;
function ud(t, e) {
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
  const n = jt.value(() => {
      const c = ti.bech32m.decode(t.address),
        u = c.words.shift(),
        f = ti.bech32m.fromWords(c.words);
      return { version: u, prefix: c.prefix, data: Jr.Buffer.from(f) };
    }),
    r = jt.value(() => {
      if (!(!t.witness || !t.witness.length))
        return t.witness.length >= 2 && t.witness[t.witness.length - 1][0] === cd
          ? t.witness.slice(0, -1)
          : t.witness.slice();
    }),
    i = jt.value(() => {
      if (t.scriptTree) return (0, Ht.toHashTree)(t.scriptTree);
      if (t.hash) return { hash: t.hash };
    }),
    o = t.network || sd.bitcoin,
    s = { name: 'p2tr', network: o };
  if (
    (jt.prop(s, 'address', () => {
      if (!s.pubkey) return;
      const c = ti.bech32m.toWords(s.pubkey);
      return c.unshift(Wc), ti.bech32m.encode(o.bech32, c);
    }),
    jt.prop(s, 'hash', () => {
      const c = i();
      if (c) return c.hash;
      const u = r();
      if (u && u.length > 1) {
        const f = u[u.length - 1],
          h = f[0] & N.TAPLEAF_VERSION_MASK,
          a = u[u.length - 2],
          d = (0, Ht.tapleafHash)({ output: a, version: h });
        return (0, Ht.rootHashFromPath)(f, d);
      }
      return null;
    }),
    jt.prop(s, 'output', () => {
      if (s.pubkey) return ss.compile([Mc.OP_1, s.pubkey]);
    }),
    jt.prop(s, 'redeemVersion', () =>
      t.redeemVersion
        ? t.redeemVersion
        : t.redeem && t.redeem.redeemVersion !== void 0 && t.redeem.redeemVersion !== null
          ? t.redeem.redeemVersion
          : Ht.LEAF_VERSION_TAPSCRIPT
    ),
    jt.prop(s, 'redeem', () => {
      const c = r();
      if (!(!c || c.length < 2))
        return {
          output: c[c.length - 2],
          witness: c.slice(0, -2),
          redeemVersion: c[c.length - 1][0] & N.TAPLEAF_VERSION_MASK,
        };
    }),
    jt.prop(s, 'pubkey', () => {
      if (t.pubkey) return t.pubkey;
      if (t.output) return t.output.slice(2);
      if (t.address) return n().data;
      if (s.internalPubkey) {
        const c = (0, Ht.tweakKey)(s.internalPubkey, s.hash);
        if (c) return c.x;
      }
    }),
    jt.prop(s, 'internalPubkey', () => {
      if (t.internalPubkey) return t.internalPubkey;
      const c = r();
      if (c && c.length > 1) return c[c.length - 1].slice(1, 33);
    }),
    jt.prop(s, 'signature', () => {
      if (t.signature) return t.signature;
      const c = r();
      if (!(!c || c.length !== 1)) return c[0];
    }),
    jt.prop(s, 'witness', () => {
      if (t.witness) return t.witness;
      const c = i();
      if (c && t.redeem && t.redeem.output && t.internalPubkey) {
        const u = (0, Ht.tapleafHash)({ output: t.redeem.output, version: s.redeemVersion }),
          f = (0, Ht.findScriptPath)(c, u);
        if (!f) return;
        const h = (0, Ht.tweakKey)(t.internalPubkey, c.hash);
        if (!h) return;
        const a = Jr.Buffer.concat(
          [Jr.Buffer.from([s.redeemVersion | h.parity]), t.internalPubkey].concat(f)
        );
        return [t.redeem.output, a];
      }
      if (t.signature) return [t.signature];
    }),
    e.validate)
  ) {
    let c = Jr.Buffer.from([]);
    if (t.address) {
      if (o && o.bech32 !== n().prefix) throw new TypeError('Invalid prefix or Network mismatch');
      if (n().version !== Wc) throw new TypeError('Invalid address version');
      if (n().data.length !== 32) throw new TypeError('Invalid address data');
      c = n().data;
    }
    if (t.pubkey) {
      if (c.length > 0 && !c.equals(t.pubkey)) throw new TypeError('Pubkey mismatch');
      c = t.pubkey;
    }
    if (t.output) {
      if (t.output.length !== 34 || t.output[0] !== Mc.OP_1 || t.output[1] !== 32)
        throw new TypeError('Output is invalid');
      if (c.length > 0 && !c.equals(t.output.slice(2))) throw new TypeError('Pubkey mismatch');
      c = t.output.slice(2);
    }
    if (t.internalPubkey) {
      const h = (0, Ht.tweakKey)(t.internalPubkey, s.hash);
      if (c.length > 0 && !c.equals(h.x)) throw new TypeError('Pubkey mismatch');
      c = h.x;
    }
    if (c && c.length && !(0, Kc.getEccLib)().isXOnlyPoint(c))
      throw new TypeError('Invalid pubkey for p2tr');
    const u = i();
    if (t.hash && u && !t.hash.equals(u.hash)) throw new TypeError('Hash mismatch');
    if (t.redeem && t.redeem.output && u) {
      const h = (0, Ht.tapleafHash)({ output: t.redeem.output, version: s.redeemVersion });
      if (!(0, Ht.findScriptPath)(u, h)) throw new TypeError('Redeem script not in tree');
    }
    const f = r();
    if (t.redeem && s.redeem) {
      if (t.redeem.redeemVersion && t.redeem.redeemVersion !== s.redeem.redeemVersion)
        throw new TypeError('Redeem.redeemVersion and witness mismatch');
      if (t.redeem.output) {
        if (ss.decompile(t.redeem.output).length === 0)
          throw new TypeError('Redeem.output is invalid');
        if (s.redeem.output && !t.redeem.output.equals(s.redeem.output))
          throw new TypeError('Redeem.output and witness mismatch');
      }
      if (t.redeem.witness && s.redeem.witness && !ad(t.redeem.witness, s.redeem.witness))
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
        if (!(0, Kc.getEccLib)().isXOnlyPoint(d))
          throw new TypeError('Invalid internalPubkey for p2tr witness');
        const l = h[0] & N.TAPLEAF_VERSION_MASK,
          g = f[f.length - 2],
          p = (0, Ht.tapleafHash)({ output: g, version: l }),
          b = (0, Ht.rootHashFromPath)(h, p),
          m = (0, Ht.tweakKey)(d, b);
        if (!m) throw new TypeError('Invalid outputKey for p2tr witness');
        if (c.length && !c.equals(m.x)) throw new TypeError('Pubkey mismatch for p2tr witness');
        if (m.parity !== (h[0] & 1)) throw new Error('Incorrect parity');
      }
  }
  return Object.assign(s, t);
}
ro.p2tr = ud;
function ad(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => n.equals(e[r]));
}
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.p2tr = t.p2wsh = t.p2wpkh = t.p2sh = t.p2pkh = t.p2pk = t.p2ms = t.embed = void 0);
  const e = zi;
  Object.defineProperty(t, 'embed', {
    enumerable: !0,
    get: function () {
      return e.p2data;
    },
  });
  const n = Xi;
  Object.defineProperty(t, 'p2ms', {
    enumerable: !0,
    get: function () {
      return n.p2ms;
    },
  });
  const r = Yi;
  Object.defineProperty(t, 'p2pk', {
    enumerable: !0,
    get: function () {
      return r.p2pk;
    },
  });
  const i = Zi;
  Object.defineProperty(t, 'p2pkh', {
    enumerable: !0,
    get: function () {
      return i.p2pkh;
    },
  });
  const o = to;
  Object.defineProperty(t, 'p2sh', {
    enumerable: !0,
    get: function () {
      return o.p2sh;
    },
  });
  const s = eo;
  Object.defineProperty(t, 'p2wpkh', {
    enumerable: !0,
    get: function () {
      return s.p2wpkh;
    },
  });
  const c = no;
  Object.defineProperty(t, 'p2wsh', {
    enumerable: !0,
    get: function () {
      return c.p2wsh;
    },
  });
  const u = ro;
  Object.defineProperty(t, 'p2tr', {
    enumerable: !0,
    get: function () {
      return u.p2tr;
    },
  });
})(hr);
Object.defineProperty(Ot, '__esModule', { value: !0 });
var fd =
  (Ot.toOutputScript =
  dd =
  Ot.fromOutputScript =
  Ot.toBech32 =
  Ot.toBase58Check =
  Ot.fromBech32 =
  Ot.fromBase58Check =
    void 0);
const xa = lt,
  be = hr,
  Oa = Nt,
  ei = mt,
  Jn = Ne,
  Ba = vs,
  Ua = 40,
  Na = 2,
  Ha = 16,
  La = 2,
  Ca = 80,
  $a =
    'WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.';
function hd(t, e) {
  const n = t.slice(2);
  if (n.length < Na || n.length > Ua)
    throw new TypeError('Invalid program length for segwit address');
  const r = t[0] - Ca;
  if (r < La || r > Ha) throw new TypeError('Invalid version for segwit address');
  if (t[1] !== n.length) throw new TypeError('Invalid script for segwit address');
  return console.warn($a), Ka(n, r, e.bech32);
}
function Ra(t) {
  const e = A.from(Ba.decode(t));
  if (e.length < 21) throw new TypeError(t + ' is too short');
  if (e.length > 21) throw new TypeError(t + ' is too long');
  const n = e.readUInt8(0),
    r = e.slice(1);
  return { version: n, hash: r };
}
Ot.fromBase58Check = Ra;
function Fa(t) {
  let e, n;
  try {
    e = Jn.bech32.decode(t);
  } catch {}
  if (e) {
    if (((n = e.words[0]), n !== 0)) throw new TypeError(t + ' uses wrong encoding');
  } else if (((e = Jn.bech32m.decode(t)), (n = e.words[0]), n === 0))
    throw new TypeError(t + ' uses wrong encoding');
  const r = Jn.bech32.fromWords(e.words.slice(1));
  return { version: n, prefix: e.prefix, data: A.from(r) };
}
Ot.fromBech32 = Fa;
function ld(t, e) {
  (0, ei.typeforce)((0, ei.tuple)(ei.Hash160bit, ei.UInt8), arguments);
  const n = A.allocUnsafe(21);
  return n.writeUInt8(e, 0), t.copy(n, 1), Ba.encode(n);
}
Ot.toBase58Check = ld;
function Ka(t, e, n) {
  const r = Jn.bech32.toWords(t);
  return r.unshift(e), e === 0 ? Jn.bech32.encode(n, r) : Jn.bech32m.encode(n, r);
}
Ot.toBech32 = Ka;
function pd(t, e) {
  e = e || xa.bitcoin;
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
    return hd(t, e);
  } catch {}
  throw new Error(Oa.toASM(t) + ' has no matching Address');
}
var dd = (Ot.fromOutputScript = pd);
function yd(t, e) {
  e = e || xa.bitcoin;
  let n, r;
  try {
    n = Ra(t);
  } catch {}
  if (n) {
    if (n.version === e.pubKeyHash) return be.p2pkh({ hash: n.hash }).output;
    if (n.version === e.scriptHash) return be.p2sh({ hash: n.hash }).output;
  } else {
    try {
      r = Fa(t);
    } catch {}
    if (r) {
      if (r.prefix !== e.bech32) throw new Error(t + ' has an invalid prefix');
      if (r.version === 0) {
        if (r.data.length === 20) return be.p2wpkh({ hash: r.data }).output;
        if (r.data.length === 32) return be.p2wsh({ hash: r.data }).output;
      } else if (r.version === 1) {
        if (r.data.length === 32) return be.p2tr({ pubkey: r.data }).output;
      } else if (r.version >= La && r.version <= Ha && r.data.length >= Na && r.data.length <= Ua)
        return console.warn($a), Oa.compile([r.version + Ca, r.data]);
    }
  }
  throw new Error(t + ' has no matching Script');
}
fd = Ot.toOutputScript = yd;
var oo = {},
  so = {};
Object.defineProperty(so, '__esModule', { value: !0 });
so.fastMerkleRoot = void 0;
function wd(t, e) {
  if (!Array.isArray(t)) throw TypeError('Expected values Array');
  if (typeof e != 'function') throw TypeError('Expected digest Function');
  let n = t.length;
  const r = t.concat();
  for (; n > 1; ) {
    let i = 0;
    for (let o = 0; o < n; o += 2, ++i) {
      const s = r[o],
        c = o + 1 === n ? s : r[o + 1],
        u = A.concat([s, c]);
      r[i] = e(u);
    }
    n = i;
  }
  return r[0];
}
so.fastMerkleRoot = wd;
var fn = {};
Object.defineProperty(fn, '__esModule', { value: !0 });
fn.Transaction = void 0;
const { Buffer: Tt } = un,
  nt = at,
  vt = Ee,
  Dc = Nt,
  gd = Nt,
  H = mt,
  { typeforce: le } = H;
function ye(t) {
  const e = t.length;
  return nt.varuint.encodingLength(e) + e;
}
function bd(t) {
  const e = t.length;
  return nt.varuint.encodingLength(e) + t.reduce((n, r) => n + ye(r), 0);
}
const Ze = Tt.allocUnsafe(0),
  Vc = [],
  Ho = Tt.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex'),
  jc = Tt.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex'),
  Ed = Tt.from('ffffffffffffffff', 'hex'),
  md = { script: Ze, valueBuffer: Ed };
function Sd(t) {
  return t.value !== void 0;
}
let se = class K {
  constructor() {
    (this.version = 1), (this.locktime = 0), (this.ins = []), (this.outs = []);
  }
  static fromBuffer(e, n) {
    const r = new nt.BufferReader(e),
      i = new K();
    i.version = r.readInt32();
    const o = r.readUInt8(),
      s = r.readUInt8();
    let c = !1;
    o === K.ADVANCED_TRANSACTION_MARKER && s === K.ADVANCED_TRANSACTION_FLAG
      ? (c = !0)
      : (r.offset -= 2);
    const u = r.readVarInt();
    for (let h = 0; h < u; ++h)
      i.ins.push({
        hash: r.readSlice(32),
        index: r.readUInt32(),
        script: r.readVarSlice(),
        sequence: r.readUInt32(),
        witness: Vc,
      });
    const f = r.readVarInt();
    for (let h = 0; h < f; ++h) i.outs.push({ value: r.readUInt64(), script: r.readVarSlice() });
    if (c) {
      for (let h = 0; h < u; ++h) i.ins[h].witness = r.readVector();
      if (!i.hasWitnesses()) throw new Error('Transaction has superfluous witness data');
    }
    if (((i.locktime = r.readUInt32()), n)) return i;
    if (r.offset !== e.length) throw new Error('Transaction has unexpected data');
    return i;
  }
  static fromHex(e) {
    return K.fromBuffer(Tt.from(e, 'hex'), !1);
  }
  static isCoinbaseHash(e) {
    le(H.Hash256bit, e);
    for (let n = 0; n < 32; ++n) if (e[n] !== 0) return !1;
    return !0;
  }
  isCoinbase() {
    return this.ins.length === 1 && K.isCoinbaseHash(this.ins[0].hash);
  }
  addInput(e, n, r, i) {
    return (
      le(H.tuple(H.Hash256bit, H.UInt32, H.maybe(H.UInt32), H.maybe(H.Buffer)), arguments),
      H.Null(r) && (r = K.DEFAULT_SEQUENCE),
      this.ins.push({ hash: e, index: n, script: i || Ze, sequence: r, witness: Vc }) - 1
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
      nt.varuint.encodingLength(this.ins.length) +
      nt.varuint.encodingLength(this.outs.length) +
      this.ins.reduce((r, i) => r + 40 + ye(i.script), 0) +
      this.outs.reduce((r, i) => r + 8 + ye(i.script), 0) +
      (n ? this.ins.reduce((r, i) => r + bd(i.witness), 0) : 0)
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
    if ((le(H.tuple(H.UInt32, H.Buffer, H.Number), arguments), e >= this.ins.length)) return jc;
    const i = Dc.compile(Dc.decompile(n).filter((c) => c !== gd.OPS.OP_CODESEPARATOR)),
      o = this.clone();
    if ((r & 31) === K.SIGHASH_NONE)
      (o.outs = []),
        o.ins.forEach((c, u) => {
          u !== e && (c.sequence = 0);
        });
    else if ((r & 31) === K.SIGHASH_SINGLE) {
      if (e >= this.outs.length) return jc;
      o.outs.length = e + 1;
      for (let c = 0; c < e; c++) o.outs[c] = md;
      o.ins.forEach((c, u) => {
        u !== e && (c.sequence = 0);
      });
    }
    r & K.SIGHASH_ANYONECANPAY
      ? ((o.ins = [o.ins[e]]), (o.ins[0].script = i))
      : (o.ins.forEach((c) => {
          c.script = Ze;
        }),
        (o.ins[e].script = i));
    const s = Tt.allocUnsafe(o.byteLength(!1) + 4);
    return s.writeInt32LE(r, s.length - 4), o.__toBuffer(s, 0, !1), vt.hash256(s);
  }
  hashForWitnessV1(e, n, r, i, o, s) {
    if (
      (le(H.tuple(H.UInt32, le.arrayOf(H.Buffer), le.arrayOf(H.Satoshi), H.UInt32), arguments),
      r.length !== this.ins.length || n.length !== this.ins.length)
    )
      throw new Error('Must supply prevout script and value for all inputs');
    const c = i === K.SIGHASH_DEFAULT ? K.SIGHASH_ALL : i & K.SIGHASH_OUTPUT_MASK,
      f = (i & K.SIGHASH_INPUT_MASK) === K.SIGHASH_ANYONECANPAY,
      h = c === K.SIGHASH_NONE,
      a = c === K.SIGHASH_SINGLE;
    let d = Ze,
      l = Ze,
      g = Ze,
      p = Ze,
      b = Ze;
    if (!f) {
      let w = nt.BufferWriter.withCapacity(36 * this.ins.length);
      this.ins.forEach((E) => {
        w.writeSlice(E.hash), w.writeUInt32(E.index);
      }),
        (d = vt.sha256(w.end())),
        (w = nt.BufferWriter.withCapacity(8 * this.ins.length)),
        r.forEach((E) => w.writeUInt64(E)),
        (l = vt.sha256(w.end())),
        (w = nt.BufferWriter.withCapacity(n.map(ye).reduce((E, y) => E + y))),
        n.forEach((E) => w.writeVarSlice(E)),
        (g = vt.sha256(w.end())),
        (w = nt.BufferWriter.withCapacity(4 * this.ins.length)),
        this.ins.forEach((E) => w.writeUInt32(E.sequence)),
        (p = vt.sha256(w.end()));
    }
    if (h || a) {
      if (a && e < this.outs.length) {
        const w = this.outs[e],
          E = nt.BufferWriter.withCapacity(8 + ye(w.script));
        E.writeUInt64(w.value), E.writeVarSlice(w.script), (b = vt.sha256(E.end()));
      }
    } else {
      const w = this.outs.map((y) => 8 + ye(y.script)).reduce((y, S) => y + S),
        E = nt.BufferWriter.withCapacity(w);
      this.outs.forEach((y) => {
        E.writeUInt64(y.value), E.writeVarSlice(y.script);
      }),
        (b = vt.sha256(E.end()));
    }
    const m = (o ? 2 : 0) + (s ? 1 : 0),
      I = 174 - (f ? 49 : 0) - (h ? 32 : 0) + (s ? 32 : 0) + (o ? 37 : 0),
      _ = nt.BufferWriter.withCapacity(I);
    if (
      (_.writeUInt8(i),
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
      const w = nt.BufferWriter.withCapacity(ye(s));
      w.writeVarSlice(s), _.writeSlice(vt.sha256(w.end()));
    }
    return (
      a && _.writeSlice(b),
      o && (_.writeSlice(o), _.writeUInt8(0), _.writeUInt32(4294967295)),
      vt.taggedHash('TapSighash', Tt.concat([Tt.from([0]), _.end()]))
    );
  }
  hashForWitnessV0(e, n, r, i) {
    le(H.tuple(H.UInt32, H.Buffer, H.Satoshi, H.UInt32), arguments);
    let o = Tt.from([]),
      s,
      c = Ho,
      u = Ho,
      f = Ho;
    if (
      (i & K.SIGHASH_ANYONECANPAY ||
        ((o = Tt.allocUnsafe(36 * this.ins.length)),
        (s = new nt.BufferWriter(o, 0)),
        this.ins.forEach((a) => {
          s.writeSlice(a.hash), s.writeUInt32(a.index);
        }),
        (u = vt.hash256(o))),
      !(i & K.SIGHASH_ANYONECANPAY) &&
        (i & 31) !== K.SIGHASH_SINGLE &&
        (i & 31) !== K.SIGHASH_NONE &&
        ((o = Tt.allocUnsafe(4 * this.ins.length)),
        (s = new nt.BufferWriter(o, 0)),
        this.ins.forEach((a) => {
          s.writeUInt32(a.sequence);
        }),
        (f = vt.hash256(o))),
      (i & 31) !== K.SIGHASH_SINGLE && (i & 31) !== K.SIGHASH_NONE)
    ) {
      const a = this.outs.reduce((d, l) => d + 8 + ye(l.script), 0);
      (o = Tt.allocUnsafe(a)),
        (s = new nt.BufferWriter(o, 0)),
        this.outs.forEach((d) => {
          s.writeUInt64(d.value), s.writeVarSlice(d.script);
        }),
        (c = vt.hash256(o));
    } else if ((i & 31) === K.SIGHASH_SINGLE && e < this.outs.length) {
      const a = this.outs[e];
      (o = Tt.allocUnsafe(8 + ye(a.script))),
        (s = new nt.BufferWriter(o, 0)),
        s.writeUInt64(a.value),
        s.writeVarSlice(a.script),
        (c = vt.hash256(o));
    }
    (o = Tt.allocUnsafe(156 + ye(n))), (s = new nt.BufferWriter(o, 0));
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
      s.writeUInt32(i),
      vt.hash256(o)
    );
  }
  getHash(e) {
    return e && this.isCoinbase()
      ? Tt.alloc(32, 0)
      : vt.hash256(this.__toBuffer(void 0, void 0, e));
  }
  getId() {
    return (0, nt.reverseBuffer)(this.getHash(!1)).toString('hex');
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
    e || (e = Tt.allocUnsafe(this.byteLength(r)));
    const i = new nt.BufferWriter(e, n || 0);
    i.writeInt32(this.version);
    const o = r && this.hasWitnesses();
    return (
      o && (i.writeUInt8(K.ADVANCED_TRANSACTION_MARKER), i.writeUInt8(K.ADVANCED_TRANSACTION_FLAG)),
      i.writeVarInt(this.ins.length),
      this.ins.forEach((s) => {
        i.writeSlice(s.hash),
          i.writeUInt32(s.index),
          i.writeVarSlice(s.script),
          i.writeUInt32(s.sequence);
      }),
      i.writeVarInt(this.outs.length),
      this.outs.forEach((s) => {
        Sd(s) ? i.writeUInt64(s.value) : i.writeSlice(s.valueBuffer), i.writeVarSlice(s.script);
      }),
      o &&
        this.ins.forEach((s) => {
          i.writeVector(s.witness);
        }),
      i.writeUInt32(this.locktime),
      n !== void 0 ? e.slice(n, i.offset) : e
    );
  }
};
fn.Transaction = se;
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
Object.defineProperty(oo, '__esModule', { value: !0 });
oo.Block = void 0;
const pn = at,
  Lo = Ee,
  Td = so,
  _d = fn,
  Ma = mt,
  { typeforce: Ad } = Ma,
  Co = new TypeError('Cannot compute merkle root for zero transactions'),
  Gc = new TypeError('Cannot compute witness commit for non-segwit block');
class yn {
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
    const n = new pn.BufferReader(e),
      r = new yn();
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
    const i = () => {
        const c = _d.Transaction.fromBuffer(n.buffer.slice(n.offset), !0);
        return (n.offset += c.byteLength()), c;
      },
      o = n.readVarInt();
    r.transactions = [];
    for (let c = 0; c < o; ++c) {
      const u = i();
      r.transactions.push(u);
    }
    const s = r.getWitnessCommit();
    return s && (r.witnessCommit = s), r;
  }
  static fromHex(e) {
    return yn.fromBuffer(A.from(e, 'hex'));
  }
  static calculateTarget(e) {
    const n = ((e & 4278190080) >> 24) - 3,
      r = e & 8388607,
      i = A.alloc(32, 0);
    return i.writeUIntBE(r, 29 - n, 3), i;
  }
  static calculateMerkleRoot(e, n) {
    if ((Ad([{ getHash: Ma.Function }], e), e.length === 0)) throw Co;
    if (n && !qc(e)) throw Gc;
    const r = e.map((o) => o.getHash(n)),
      i = (0, Td.fastMerkleRoot)(r, Lo.hash256);
    return n ? Lo.hash256(A.concat([i, e[0].ins[0].witness[0]])) : i;
  }
  getWitnessCommit() {
    if (!qc(this.transactions)) return null;
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
    return Id(this.transactions);
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
          pn.varuint.encodingLength(this.transactions.length) +
          this.transactions.reduce((r, i) => r + i.byteLength(n), 0);
  }
  getHash() {
    return Lo.hash256(this.toBuffer(!0));
  }
  getId() {
    return (0, pn.reverseBuffer)(this.getHash()).toString('hex');
  }
  getUTCDate() {
    const e = new Date(0);
    return e.setUTCSeconds(this.timestamp), e;
  }
  toBuffer(e) {
    const n = A.allocUnsafe(this.byteLength(e)),
      r = new pn.BufferWriter(n);
    return (
      r.writeInt32(this.version),
      r.writeSlice(this.prevHash),
      r.writeSlice(this.merkleRoot),
      r.writeUInt32(this.timestamp),
      r.writeUInt32(this.bits),
      r.writeUInt32(this.nonce),
      e ||
        !this.transactions ||
        (pn.varuint.encode(this.transactions.length, n, r.offset),
        (r.offset += pn.varuint.encode.bytes),
        this.transactions.forEach((i) => {
          const o = i.byteLength();
          i.toBuffer(n, r.offset), (r.offset += o);
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
    const e = (0, pn.reverseBuffer)(this.getHash()),
      n = yn.calculateTarget(this.bits);
    return e.compare(n) <= 0;
  }
  __checkMerkleRoot() {
    if (!this.transactions) throw Co;
    const e = yn.calculateMerkleRoot(this.transactions);
    return this.merkleRoot.compare(e) === 0;
  }
  __checkWitnessCommit() {
    if (!this.transactions) throw Co;
    if (!this.hasWitnessCommit()) throw Gc;
    const e = yn.calculateMerkleRoot(this.transactions, !0);
    return this.witnessCommit.compare(e) === 0;
  }
}
oo.Block = yn;
function qc(t) {
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
function Id(t) {
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
var co = {},
  Ks = {},
  Ms = {},
  Ws = {},
  Wr = {},
  _n = {},
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
var An = {};
Object.defineProperty(An, '__esModule', { value: !0 });
const Wa = pt,
  vd = (t) => [...Array(t).keys()];
function kd(t) {
  if (t.key[0] !== Wa.GlobalTypes.GLOBAL_XPUB)
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
  for (const r of vd(t.value.length / 4 - 1)) {
    const i = t.value.readUInt32LE(r * 4 + 4),
      o = !!(i & 2147483648),
      s = i & 2147483647;
    n.path += '/' + s.toString(10) + (o ? "'" : '');
  }
  return n;
}
An.decode = kd;
function Pd(t) {
  const e = A.from([Wa.GlobalTypes.GLOBAL_XPUB]),
    n = A.concat([e, t.extendedPubkey]),
    r = t.path.split('/'),
    i = A.allocUnsafe(r.length * 4);
  t.masterFingerprint.copy(i, 0);
  let o = 4;
  return (
    r.slice(1).forEach((s) => {
      const c = s.slice(-1) === "'";
      let u = 2147483647 & parseInt(c ? s.slice(0, -1) : s, 10);
      c && (u += 2147483648), i.writeUInt32LE(u, o), (o += 4);
    }),
    { key: n, value: i }
  );
}
An.encode = Pd;
An.expected = '{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }';
function xd(t) {
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
An.check = xd;
function Od(t, e, n) {
  const r = e.extendedPubkey.toString('hex');
  return n.has(r)
    ? !1
    : (n.add(r), t.filter((i) => i.extendedPubkey.equals(e.extendedPubkey)).length === 0);
}
An.canAddToArray = Od;
var Ds = {};
Object.defineProperty(Ds, '__esModule', { value: !0 });
const Bd = pt;
function Ud(t) {
  return { key: A.from([Bd.GlobalTypes.UNSIGNED_TX]), value: t.toBuffer() };
}
Ds.encode = Ud;
var In = {};
Object.defineProperty(In, '__esModule', { value: !0 });
const Da = pt;
function Nd(t) {
  if (t.key[0] !== Da.InputTypes.FINAL_SCRIPTSIG)
    throw new Error(
      'Decode Error: could not decode finalScriptSig with key 0x' + t.key.toString('hex')
    );
  return t.value;
}
In.decode = Nd;
function Hd(t) {
  return { key: A.from([Da.InputTypes.FINAL_SCRIPTSIG]), value: t };
}
In.encode = Hd;
In.expected = 'Buffer';
function Ld(t) {
  return A.isBuffer(t);
}
In.check = Ld;
function Cd(t, e) {
  return !!t && !!e && t.finalScriptSig === void 0;
}
In.canAdd = Cd;
var vn = {};
Object.defineProperty(vn, '__esModule', { value: !0 });
const Va = pt;
function $d(t) {
  if (t.key[0] !== Va.InputTypes.FINAL_SCRIPTWITNESS)
    throw new Error(
      'Decode Error: could not decode finalScriptWitness with key 0x' + t.key.toString('hex')
    );
  return t.value;
}
vn.decode = $d;
function Rd(t) {
  return { key: A.from([Va.InputTypes.FINAL_SCRIPTWITNESS]), value: t };
}
vn.encode = Rd;
vn.expected = 'Buffer';
function Fd(t) {
  return A.isBuffer(t);
}
vn.check = Fd;
function Kd(t, e) {
  return !!t && !!e && t.finalScriptWitness === void 0;
}
vn.canAdd = Kd;
var kn = {};
Object.defineProperty(kn, '__esModule', { value: !0 });
const ja = pt;
function Md(t) {
  if (t.key[0] !== ja.InputTypes.NON_WITNESS_UTXO)
    throw new Error(
      'Decode Error: could not decode nonWitnessUtxo with key 0x' + t.key.toString('hex')
    );
  return t.value;
}
kn.decode = Md;
function Wd(t) {
  return { key: A.from([ja.InputTypes.NON_WITNESS_UTXO]), value: t };
}
kn.encode = Wd;
kn.expected = 'Buffer';
function Dd(t) {
  return A.isBuffer(t);
}
kn.check = Dd;
function Vd(t, e) {
  return !!t && !!e && t.nonWitnessUtxo === void 0;
}
kn.canAdd = Vd;
var Pn = {};
Object.defineProperty(Pn, '__esModule', { value: !0 });
const Ga = pt;
function jd(t) {
  if (t.key[0] !== Ga.InputTypes.PARTIAL_SIG)
    throw new Error(
      'Decode Error: could not decode partialSig with key 0x' + t.key.toString('hex')
    );
  if (!(t.key.length === 34 || t.key.length === 66) || ![2, 3, 4].includes(t.key[1]))
    throw new Error(
      'Decode Error: partialSig has invalid pubkey in key 0x' + t.key.toString('hex')
    );
  return { pubkey: t.key.slice(1), signature: t.value };
}
Pn.decode = jd;
function Gd(t) {
  const e = A.from([Ga.InputTypes.PARTIAL_SIG]);
  return { key: A.concat([e, t.pubkey]), value: t.signature };
}
Pn.encode = Gd;
Pn.expected = '{ pubkey: Buffer; signature: Buffer; }';
function qd(t) {
  return (
    A.isBuffer(t.pubkey) &&
    A.isBuffer(t.signature) &&
    [33, 65].includes(t.pubkey.length) &&
    [2, 3, 4].includes(t.pubkey[0]) &&
    zd(t.signature)
  );
}
Pn.check = qd;
function zd(t) {
  if (!A.isBuffer(t) || t.length < 9 || t[0] !== 48 || t.length !== t[1] + 3 || t[2] !== 2)
    return !1;
  const e = t[3];
  if (e > 33 || e < 1 || t[3 + e + 1] !== 2) return !1;
  const n = t[3 + e + 2];
  return !(n > 33 || n < 1 || t.length !== 3 + e + 2 + n + 2);
}
function Xd(t, e, n) {
  const r = e.pubkey.toString('hex');
  return n.has(r) ? !1 : (n.add(r), t.filter((i) => i.pubkey.equals(e.pubkey)).length === 0);
}
Pn.canAddToArray = Xd;
var xn = {};
Object.defineProperty(xn, '__esModule', { value: !0 });
const qa = pt;
function Yd(t) {
  if (t.key[0] !== qa.InputTypes.POR_COMMITMENT)
    throw new Error(
      'Decode Error: could not decode porCommitment with key 0x' + t.key.toString('hex')
    );
  return t.value.toString('utf8');
}
xn.decode = Yd;
function Zd(t) {
  return { key: A.from([qa.InputTypes.POR_COMMITMENT]), value: A.from(t, 'utf8') };
}
xn.encode = Zd;
xn.expected = 'string';
function Qd(t) {
  return typeof t == 'string';
}
xn.check = Qd;
function Jd(t, e) {
  return !!t && !!e && t.porCommitment === void 0;
}
xn.canAdd = Jd;
var On = {};
Object.defineProperty(On, '__esModule', { value: !0 });
const za = pt;
function t0(t) {
  if (t.key[0] !== za.InputTypes.SIGHASH_TYPE)
    throw new Error(
      'Decode Error: could not decode sighashType with key 0x' + t.key.toString('hex')
    );
  return t.value.readUInt32LE(0);
}
On.decode = t0;
function e0(t) {
  const e = A.from([za.InputTypes.SIGHASH_TYPE]),
    n = A.allocUnsafe(4);
  return n.writeUInt32LE(t, 0), { key: e, value: n };
}
On.encode = e0;
On.expected = 'number';
function n0(t) {
  return typeof t == 'number';
}
On.check = n0;
function r0(t, e) {
  return !!t && !!e && t.sighashType === void 0;
}
On.canAdd = r0;
var Bn = {};
Object.defineProperty(Bn, '__esModule', { value: !0 });
const Xa = pt;
function i0(t) {
  if (t.key[0] !== Xa.InputTypes.TAP_KEY_SIG || t.key.length !== 1)
    throw new Error('Decode Error: could not decode tapKeySig with key 0x' + t.key.toString('hex'));
  if (!Ya(t.value))
    throw new Error('Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature');
  return t.value;
}
Bn.decode = i0;
function o0(t) {
  return { key: A.from([Xa.InputTypes.TAP_KEY_SIG]), value: t };
}
Bn.encode = o0;
Bn.expected = 'Buffer';
function Ya(t) {
  return A.isBuffer(t) && (t.length === 64 || t.length === 65);
}
Bn.check = Ya;
function s0(t, e) {
  return !!t && !!e && t.tapKeySig === void 0;
}
Bn.canAdd = s0;
var Un = {};
Object.defineProperty(Un, '__esModule', { value: !0 });
const Za = pt;
function c0(t) {
  if (t.key[0] !== Za.InputTypes.TAP_LEAF_SCRIPT)
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
Un.decode = c0;
function u0(t) {
  const e = A.from([Za.InputTypes.TAP_LEAF_SCRIPT]),
    n = A.from([t.leafVersion]);
  return { key: A.concat([e, t.controlBlock]), value: A.concat([t.script, n]) };
}
Un.encode = u0;
Un.expected = '{ controlBlock: Buffer; leafVersion: number, script: Buffer; }';
function a0(t) {
  return (
    A.isBuffer(t.controlBlock) &&
    (t.controlBlock.length - 1) % 32 === 0 &&
    (t.controlBlock[0] & 254) === t.leafVersion &&
    A.isBuffer(t.script)
  );
}
Un.check = a0;
function f0(t, e, n) {
  const r = e.controlBlock.toString('hex');
  return n.has(r)
    ? !1
    : (n.add(r), t.filter((i) => i.controlBlock.equals(e.controlBlock)).length === 0);
}
Un.canAddToArray = f0;
var Nn = {};
Object.defineProperty(Nn, '__esModule', { value: !0 });
const Qa = pt;
function h0(t) {
  if (t.key[0] !== Qa.InputTypes.TAP_MERKLE_ROOT || t.key.length !== 1)
    throw new Error(
      'Decode Error: could not decode tapMerkleRoot with key 0x' + t.key.toString('hex')
    );
  if (!Ja(t.value)) throw new Error('Decode Error: tapMerkleRoot not a 32-byte hash');
  return t.value;
}
Nn.decode = h0;
function l0(t) {
  return { key: A.from([Qa.InputTypes.TAP_MERKLE_ROOT]), value: t };
}
Nn.encode = l0;
Nn.expected = 'Buffer';
function Ja(t) {
  return A.isBuffer(t) && t.length === 32;
}
Nn.check = Ja;
function p0(t, e) {
  return !!t && !!e && t.tapMerkleRoot === void 0;
}
Nn.canAdd = p0;
var Hn = {};
Object.defineProperty(Hn, '__esModule', { value: !0 });
const tf = pt;
function d0(t) {
  if (t.key[0] !== tf.InputTypes.TAP_SCRIPT_SIG)
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
Hn.decode = d0;
function y0(t) {
  const e = A.from([tf.InputTypes.TAP_SCRIPT_SIG]);
  return { key: A.concat([e, t.pubkey, t.leafHash]), value: t.signature };
}
Hn.encode = y0;
Hn.expected = '{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }';
function w0(t) {
  return (
    A.isBuffer(t.pubkey) &&
    A.isBuffer(t.leafHash) &&
    A.isBuffer(t.signature) &&
    t.pubkey.length === 32 &&
    t.leafHash.length === 32 &&
    (t.signature.length === 64 || t.signature.length === 65)
  );
}
Hn.check = w0;
function g0(t, e, n) {
  const r = e.pubkey.toString('hex') + e.leafHash.toString('hex');
  return n.has(r)
    ? !1
    : (n.add(r),
      t.filter((i) => i.pubkey.equals(e.pubkey) && i.leafHash.equals(e.leafHash)).length === 0);
}
Hn.canAddToArray = g0;
var Ln = {},
  me = {},
  ce = {};
Object.defineProperty(ce, '__esModule', { value: !0 });
const b0 = 9007199254740991;
function Vs(t) {
  if (t < 0 || t > b0 || t % 1 !== 0) throw new RangeError('value out of range');
}
function vr(t, e, n) {
  if ((Vs(t), e || (e = A.allocUnsafe(ef(t))), !A.isBuffer(e)))
    throw new TypeError('buffer must be a Buffer instance');
  return (
    n || (n = 0),
    t < 253
      ? (e.writeUInt8(t, n), Object.assign(vr, { bytes: 1 }))
      : t <= 65535
        ? (e.writeUInt8(253, n), e.writeUInt16LE(t, n + 1), Object.assign(vr, { bytes: 3 }))
        : t <= 4294967295
          ? (e.writeUInt8(254, n), e.writeUInt32LE(t, n + 1), Object.assign(vr, { bytes: 5 }))
          : (e.writeUInt8(255, n),
            e.writeUInt32LE(t >>> 0, n + 1),
            e.writeUInt32LE((t / 4294967296) | 0, n + 5),
            Object.assign(vr, { bytes: 9 })),
    e
  );
}
ce.encode = vr;
function kr(t, e) {
  if (!A.isBuffer(t)) throw new TypeError('buffer must be a Buffer instance');
  e || (e = 0);
  const n = t.readUInt8(e);
  if (n < 253) return Object.assign(kr, { bytes: 1 }), n;
  if (n === 253) return Object.assign(kr, { bytes: 3 }), t.readUInt16LE(e + 1);
  if (n === 254) return Object.assign(kr, { bytes: 5 }), t.readUInt32LE(e + 1);
  {
    Object.assign(kr, { bytes: 9 });
    const r = t.readUInt32LE(e + 1),
      o = t.readUInt32LE(e + 5) * 4294967296 + r;
    return Vs(o), o;
  }
}
ce.decode = kr;
function ef(t) {
  return Vs(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9;
}
ce.encodingLength = ef;
Object.defineProperty(me, '__esModule', { value: !0 });
const ni = ce;
me.range = (t) => [...Array(t).keys()];
function E0(t) {
  if (t.length < 1) return t;
  let e = t.length - 1,
    n = 0;
  for (let r = 0; r < t.length / 2; r++) (n = t[r]), (t[r] = t[e]), (t[e] = n), e--;
  return t;
}
me.reverseBuffer = E0;
function m0(t) {
  const e = t.map(nf);
  return e.push(A.from([0])), A.concat(e);
}
me.keyValsToBuffer = m0;
function nf(t) {
  const e = t.key.length,
    n = t.value.length,
    r = ni.encodingLength(e),
    i = ni.encodingLength(n),
    o = A.allocUnsafe(r + e + i + n);
  return (
    ni.encode(e, o, 0), t.key.copy(o, r), ni.encode(n, o, r + e), t.value.copy(o, r + e + i), o
  );
}
me.keyValToBuffer = nf;
function rf(t, e) {
  if (typeof t != 'number') throw new Error('cannot write a non-number as a number');
  if (t < 0) throw new Error('specified a negative value for writing an unsigned value');
  if (t > e) throw new Error('RangeError: value out of range');
  if (Math.floor(t) !== t) throw new Error('value has a fractional component');
}
function S0(t, e) {
  const n = t.readUInt32LE(e);
  let r = t.readUInt32LE(e + 4);
  return (r *= 4294967296), rf(r + n, 9007199254740991), r + n;
}
me.readUInt64LE = S0;
function T0(t, e, n) {
  return (
    rf(e, 9007199254740991),
    t.writeInt32LE(e & -1, n),
    t.writeUInt32LE(Math.floor(e / 4294967296), n + 4),
    n + 8
  );
}
me.writeUInt64LE = T0;
Object.defineProperty(Ln, '__esModule', { value: !0 });
const of = pt,
  sf = me,
  Ti = ce;
function _0(t) {
  if (t.key[0] !== of.InputTypes.WITNESS_UTXO)
    throw new Error(
      'Decode Error: could not decode witnessUtxo with key 0x' + t.key.toString('hex')
    );
  const e = sf.readUInt64LE(t.value, 0);
  let n = 8;
  const r = Ti.decode(t.value, n);
  n += Ti.encodingLength(r);
  const i = t.value.slice(n);
  if (i.length !== r) throw new Error('Decode Error: WITNESS_UTXO script is not proper length');
  return { script: i, value: e };
}
Ln.decode = _0;
function A0(t) {
  const { script: e, value: n } = t,
    r = Ti.encodingLength(e.length),
    i = A.allocUnsafe(8 + r + e.length);
  return (
    sf.writeUInt64LE(i, n, 0),
    Ti.encode(e.length, i, 8),
    e.copy(i, 8 + r),
    { key: A.from([of.InputTypes.WITNESS_UTXO]), value: i }
  );
}
Ln.encode = A0;
Ln.expected = '{ script: Buffer; value: number; }';
function I0(t) {
  return A.isBuffer(t.script) && typeof t.value == 'number';
}
Ln.check = I0;
function v0(t, e) {
  return !!t && !!e && t.witnessUtxo === void 0;
}
Ln.canAdd = v0;
var Cn = {};
Object.defineProperty(Cn, '__esModule', { value: !0 });
const cf = pt,
  cs = ce;
function k0(t) {
  if (t.key[0] !== cf.OutputTypes.TAP_TREE || t.key.length !== 1)
    throw new Error('Decode Error: could not decode tapTree with key 0x' + t.key.toString('hex'));
  let e = 0;
  const n = [];
  for (; e < t.value.length; ) {
    const r = t.value[e++],
      i = t.value[e++],
      o = cs.decode(t.value, e);
    (e += cs.encodingLength(o)),
      n.push({ depth: r, leafVersion: i, script: t.value.slice(e, e + o) }),
      (e += o);
  }
  return { leaves: n };
}
Cn.decode = k0;
function P0(t) {
  const e = A.from([cf.OutputTypes.TAP_TREE]),
    n = [].concat(
      ...t.leaves.map((r) => [A.of(r.depth, r.leafVersion), cs.encode(r.script.length), r.script])
    );
  return { key: e, value: A.concat(n) };
}
Cn.encode = P0;
Cn.expected = '{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }';
function x0(t) {
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
Cn.check = x0;
function O0(t, e) {
  return !!t && !!e && t.tapTree === void 0;
}
Cn.canAdd = O0;
var uo = {};
Object.defineProperty(uo, '__esModule', { value: !0 });
const B0 = (t) => [...Array(t).keys()],
  U0 = (t) => (t.length === 33 && [2, 3].includes(t[0])) || (t.length === 65 && t[0] === 4);
function N0(t, e = U0) {
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
    for (const h of B0(c.value.length / 4 - 1)) {
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
  const i = '{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }';
  function o(c) {
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
  return { decode: n, encode: r, check: o, expected: i, canAddToArray: s };
}
uo.makeConverter = N0;
var js = {};
Object.defineProperty(js, '__esModule', { value: !0 });
function H0(t) {
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
js.makeChecker = H0;
var Gs = {};
Object.defineProperty(Gs, '__esModule', { value: !0 });
function L0(t) {
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
  function i(s) {
    return A.isBuffer(s);
  }
  function o(s, c) {
    return !!s && !!c && s.redeemScript === void 0;
  }
  return { decode: e, encode: n, check: i, expected: r, canAdd: o };
}
Gs.makeConverter = L0;
var qs = {};
Object.defineProperty(qs, '__esModule', { value: !0 });
const ri = ce,
  C0 = uo,
  $0 = (t) => t.length === 32;
function R0(t) {
  const e = C0.makeConverter(t, $0);
  function n(s) {
    const c = ri.decode(s.value),
      u = ri.encodingLength(c),
      f = e.decode({ key: s.key, value: s.value.slice(u + c * 32) }),
      h = new Array(c);
    for (let a = 0, d = u; a < c; a++, d += 32) h[a] = s.value.slice(d, d + 32);
    return Object.assign({}, f, { leafHashes: h });
  }
  function r(s) {
    const c = e.encode(s),
      u = ri.encodingLength(s.leafHashes.length),
      f = A.allocUnsafe(u);
    ri.encode(s.leafHashes.length, f);
    const h = A.concat([f, ...s.leafHashes, c.value]);
    return Object.assign({}, c, { value: h });
  }
  const i = '{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }';
  function o(s) {
    return (
      Array.isArray(s.leafHashes) &&
      s.leafHashes.every((c) => A.isBuffer(c) && c.length === 32) &&
      e.check(s)
    );
  }
  return { decode: n, encode: r, check: o, expected: i, canAddToArray: e.canAddToArray };
}
qs.makeConverter = R0;
var zs = {};
Object.defineProperty(zs, '__esModule', { value: !0 });
function F0(t) {
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
  function i(s) {
    return A.isBuffer(s) && s.length === 32;
  }
  function o(s, c) {
    return !!s && !!c && s.tapInternalKey === void 0;
  }
  return { decode: e, encode: n, check: i, expected: r, canAdd: o };
}
zs.makeConverter = F0;
var Xs = {};
Object.defineProperty(Xs, '__esModule', { value: !0 });
function K0(t) {
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
  function i(s) {
    return A.isBuffer(s);
  }
  function o(s, c) {
    return !!s && !!c && s.witnessScript === void 0;
  }
  return { decode: e, encode: n, check: i, expected: r, canAdd: o };
}
Xs.makeConverter = K0;
Object.defineProperty(_n, '__esModule', { value: !0 });
const Mt = pt,
  M0 = An,
  W0 = Ds,
  D0 = In,
  V0 = vn,
  j0 = kn,
  G0 = Pn,
  q0 = xn,
  z0 = On,
  X0 = Bn,
  Y0 = Un,
  Z0 = Nn,
  Q0 = Hn,
  J0 = Ln,
  ty = Cn,
  uf = uo,
  Ys = js,
  af = Gs,
  ff = qs,
  hf = zs,
  lf = Xs,
  ey = { unsignedTx: W0, globalXpub: M0, checkPubkey: Ys.makeChecker([]) };
_n.globals = ey;
const ny = {
  nonWitnessUtxo: j0,
  partialSig: G0,
  sighashType: z0,
  finalScriptSig: D0,
  finalScriptWitness: V0,
  porCommitment: q0,
  witnessUtxo: J0,
  bip32Derivation: uf.makeConverter(Mt.InputTypes.BIP32_DERIVATION),
  redeemScript: af.makeConverter(Mt.InputTypes.REDEEM_SCRIPT),
  witnessScript: lf.makeConverter(Mt.InputTypes.WITNESS_SCRIPT),
  checkPubkey: Ys.makeChecker([Mt.InputTypes.PARTIAL_SIG, Mt.InputTypes.BIP32_DERIVATION]),
  tapKeySig: X0,
  tapScriptSig: Q0,
  tapLeafScript: Y0,
  tapBip32Derivation: ff.makeConverter(Mt.InputTypes.TAP_BIP32_DERIVATION),
  tapInternalKey: hf.makeConverter(Mt.InputTypes.TAP_INTERNAL_KEY),
  tapMerkleRoot: Z0,
};
_n.inputs = ny;
const ry = {
  bip32Derivation: uf.makeConverter(Mt.OutputTypes.BIP32_DERIVATION),
  redeemScript: af.makeConverter(Mt.OutputTypes.REDEEM_SCRIPT),
  witnessScript: lf.makeConverter(Mt.OutputTypes.WITNESS_SCRIPT),
  checkPubkey: Ys.makeChecker([Mt.OutputTypes.BIP32_DERIVATION]),
  tapBip32Derivation: ff.makeConverter(Mt.OutputTypes.TAP_BIP32_DERIVATION),
  tapTree: ty,
  tapInternalKey: hf.makeConverter(Mt.OutputTypes.TAP_INTERNAL_KEY),
};
_n.outputs = ry;
Object.defineProperty(Wr, '__esModule', { value: !0 });
const D = _n,
  _i = me,
  zc = ce,
  B = pt;
function iy(t, e) {
  let n = 0;
  function r() {
    const b = zc.decode(t, n);
    n += zc.encodingLength(b);
    const m = t.slice(n, n + b);
    return (n += b), m;
  }
  function i() {
    const b = t.readUInt32BE(n);
    return (n += 4), b;
  }
  function o() {
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
  if (i() !== 1886610036) throw new Error('Format Error: Invalid Magic Number');
  if (o() !== 255) throw new Error('Format Error: Magic Number must be followed by 0xff separator');
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
  for (const b of _i.range(d)) {
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
  for (const b of _i.range(l)) {
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
  return pf(a, { globalMapKeyVals: u, inputKeyVals: g, outputKeyVals: p });
}
Wr.psbtFromBuffer = iy;
function wt(t, e, n) {
  if (!e.equals(A.from([n])))
    throw new Error(`Format Error: Invalid ${t} key: ${e.toString('hex')}`);
}
Wr.checkKeyBuffer = wt;
function pf(t, { globalMapKeyVals: e, inputKeyVals: n, outputKeyVals: r }) {
  const i = { unsignedTx: t };
  let o = 0;
  for (const h of e)
    switch (h.key[0]) {
      case B.GlobalTypes.UNSIGNED_TX:
        if ((wt('global', h.key, B.GlobalTypes.UNSIGNED_TX), o > 0))
          throw new Error('Format Error: GlobalMap has multiple UNSIGNED_TX');
        o++;
        break;
      case B.GlobalTypes.GLOBAL_XPUB:
        i.globalXpub === void 0 && (i.globalXpub = []),
          i.globalXpub.push(D.globals.globalXpub.decode(h));
        break;
      default:
        i.unknownKeyVals || (i.unknownKeyVals = []), i.unknownKeyVals.push(h);
    }
  const s = n.length,
    c = r.length,
    u = [],
    f = [];
  for (const h of _i.range(s)) {
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
  for (const h of _i.range(c)) {
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
  return { globalMap: i, inputs: u, outputs: f };
}
Wr.psbtFromKeyVals = pf;
var ao = {};
Object.defineProperty(ao, '__esModule', { value: !0 });
const $o = _n,
  Xc = me;
function oy({ globalMap: t, inputs: e, outputs: n }) {
  const {
      globalKeyVals: r,
      inputKeyVals: i,
      outputKeyVals: o,
    } = df({ globalMap: t, inputs: e, outputs: n }),
    s = Xc.keyValsToBuffer(r),
    c = (a) => (a.length === 0 ? [A.from([0])] : a.map(Xc.keyValsToBuffer)),
    u = c(i),
    f = c(o),
    h = A.allocUnsafe(5);
  return h.writeUIntBE(482972169471, 0, 5), A.concat([h, s].concat(u, f));
}
ao.psbtToBuffer = oy;
const sy = (t, e) => t.key.compare(e.key);
function Ro(t, e) {
  const n = new Set(),
    r = Object.entries(t).reduce((o, [s, c]) => {
      if (s === 'unknownKeyVals') return o;
      const u = e[s];
      if (u === void 0) return o;
      const f = (Array.isArray(c) ? c : [c]).map(u.encode);
      return (
        f
          .map((a) => a.key.toString('hex'))
          .forEach((a) => {
            if (n.has(a)) throw new Error('Serialize Error: Duplicate key: ' + a);
            n.add(a);
          }),
        o.concat(f)
      );
    }, []),
    i = t.unknownKeyVals ? t.unknownKeyVals.filter((o) => !n.has(o.key.toString('hex'))) : [];
  return r.concat(i).sort(sy);
}
function df({ globalMap: t, inputs: e, outputs: n }) {
  return {
    globalKeyVals: Ro(t, $o.globals),
    inputKeyVals: e.map((r) => Ro(r, $o.inputs)),
    outputKeyVals: n.map((r) => Ro(r, $o.outputs)),
  };
}
ao.psbtToKeyVals = df;
(function (t) {
  function e(n) {
    for (var r in n) t.hasOwnProperty(r) || (t[r] = n[r]);
  }
  Object.defineProperty(t, '__esModule', { value: !0 }), e(Wr), e(ao);
})(Ws);
Object.defineProperty(Ms, '__esModule', { value: !0 });
const Fo = Ws;
function cy(t) {
  const e = t[0],
    n = Fo.psbtToKeyVals(e),
    r = t.slice(1);
  if (r.length === 0) throw new Error('Combine: Nothing to combine');
  const i = Yc(e);
  if (i === void 0) throw new Error('Combine: Self missing transaction');
  const o = Vn(n.globalKeyVals),
    s = n.inputKeyVals.map(Vn),
    c = n.outputKeyVals.map(Vn);
  for (const u of r) {
    const f = Yc(u);
    if (f === void 0 || !f.toBuffer().equals(i.toBuffer()))
      throw new Error('Combine: One of the Psbts does not have the same transaction.');
    const h = Fo.psbtToKeyVals(u);
    Vn(h.globalKeyVals).forEach(Ko(o, n.globalKeyVals, h.globalKeyVals)),
      h.inputKeyVals
        .map(Vn)
        .forEach((g, p) => g.forEach(Ko(s[p], n.inputKeyVals[p], h.inputKeyVals[p]))),
      h.outputKeyVals
        .map(Vn)
        .forEach((g, p) => g.forEach(Ko(c[p], n.outputKeyVals[p], h.outputKeyVals[p])));
  }
  return Fo.psbtFromKeyVals(i, {
    globalMapKeyVals: n.globalKeyVals,
    inputKeyVals: n.inputKeyVals,
    outputKeyVals: n.outputKeyVals,
  });
}
Ms.combine = cy;
function Ko(t, e, n) {
  return (r) => {
    if (t.has(r)) return;
    const i = n.filter((o) => o.key.toString('hex') === r)[0];
    e.push(i), t.add(r);
  };
}
function Yc(t) {
  return t.globalMap.unsignedTx;
}
function Vn(t) {
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
var Zs = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  const e = _n;
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
  function i(l, g, p) {
    if (l.key[0] < p)
      throw new Error('Use the method for your specific key instead of addUnknownKeyVal*');
    if (g && g.filter((b) => b.key.equals(l.key)).length !== 0)
      throw new Error(`Duplicate Key: ${l.key.toString('hex')}`);
  }
  t.checkHasKey = i;
  function o(l) {
    let g = 0;
    return (
      Object.keys(l).forEach((p) => {
        Number(isNaN(Number(p))) && g++;
      }),
      g
    );
  }
  t.getEnumLength = o;
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
})(Zs);
Object.defineProperty(Ks, '__esModule', { value: !0 });
const uy = Ms,
  Zc = Ws,
  Mo = pt,
  yt = Zs;
let ay = class {
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
    const r = Zc.psbtFromBuffer(e, n),
      i = new this(r.globalMap.unsignedTx);
    return Object.assign(i, r), i;
  }
  toBase64() {
    return this.toBuffer().toString('base64');
  }
  toHex() {
    return this.toBuffer().toString('hex');
  }
  toBuffer() {
    return Zc.psbtToBuffer(this);
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
      yt.checkHasKey(e, this.globalMap.unknownKeyVals, yt.getEnumLength(Mo.GlobalTypes)),
      this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []),
      this.globalMap.unknownKeyVals.push(e),
      this
    );
  }
  addUnknownKeyValToInput(e, n) {
    const r = yt.checkForInput(this.inputs, e);
    return (
      yt.checkHasKey(n, r.unknownKeyVals, yt.getEnumLength(Mo.InputTypes)),
      r.unknownKeyVals || (r.unknownKeyVals = []),
      r.unknownKeyVals.push(n),
      this
    );
  }
  addUnknownKeyValToOutput(e, n) {
    const r = yt.checkForOutput(this.outputs, e);
    return (
      yt.checkHasKey(n, r.unknownKeyVals, yt.getEnumLength(Mo.OutputTypes)),
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
      n.forEach((i) => this.addUnknownKeyValToInput(r, i)),
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
      n.forEach((i) => this.addUnknownKeyValToOutput(r, i)),
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
    const n = uy.combine([this].concat(e));
    return Object.assign(this, n), this;
  }
  getTransaction() {
    return this.globalMap.unsignedTx.toBuffer();
  }
};
Ks.Psbt = ay;
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
const Qc = ce,
  Br = Nt,
  ii = fn,
  fy = Ee,
  $n = hr;
function Rn(t) {
  return (e) => {
    try {
      return t({ output: e }), !0;
    } catch {
      return !1;
    }
  };
}
R.isP2MS = Rn($n.p2ms);
R.isP2PK = Rn($n.p2pk);
R.isP2PKH = Rn($n.p2pkh);
R.isP2WPKH = Rn($n.p2wpkh);
R.isP2WSHScript = Rn($n.p2wsh);
R.isP2SHScript = Rn($n.p2sh);
R.isP2TR = Rn($n.p2tr);
function hy(t) {
  let e = A.allocUnsafe(0);
  function n(s) {
    e = A.concat([e, A.from(s)]);
  }
  function r(s) {
    const c = e.length,
      u = Qc.encodingLength(s);
    (e = A.concat([e, A.allocUnsafe(u)])), Qc.encode(s, e, c);
  }
  function i(s) {
    r(s.length), n(s);
  }
  function o(s) {
    r(s.length), s.forEach(i);
  }
  return o(t), e;
}
R.witnessStackToScriptWitness = hy;
function yf(t, e) {
  const n = (0, fy.hash160)(t),
    r = t.slice(1, 33),
    i = Br.decompile(e);
  if (i === null) throw new Error('Unknown script error');
  return i.findIndex((o) =>
    typeof o == 'number' ? !1 : o.equals(t) || o.equals(n) || o.equals(r)
  );
}
R.pubkeyPositionInScript = yf;
function ly(t, e) {
  return yf(t, e) !== -1;
}
R.pubkeyInScript = ly;
function py(t, e) {
  return dy(t).some((r) => wf(r, Br.signature.decode, e));
}
R.checkInputForSig = py;
function wf(t, e, n) {
  const { hashType: r } = e(t),
    i = [];
  switch ((r & ii.Transaction.SIGHASH_ANYONECANPAY && i.push('addInput'), r & 31)) {
    case ii.Transaction.SIGHASH_ALL:
      break;
    case ii.Transaction.SIGHASH_SINGLE:
    case ii.Transaction.SIGHASH_NONE:
      i.push('addOutput'), i.push('setInputSequence');
      break;
  }
  return i.indexOf(n) === -1;
}
R.signatureBlocksAction = wf;
function dy(t) {
  let e = [];
  if ((t.partialSig || []).length === 0) {
    if (!t.finalScriptSig && !t.finalScriptWitness) return [];
    e = yy(t);
  } else e = t.partialSig;
  return e.map((n) => n.signature);
}
function yy(t) {
  const e = t.finalScriptSig ? Br.decompile(t.finalScriptSig) || [] : [],
    n = t.finalScriptWitness ? Br.decompile(t.finalScriptWitness) || [] : [];
  return e
    .concat(n)
    .filter((r) => A.isBuffer(r) && Br.isCanonicalScriptSignature(r))
    .map((r) => ({ signature: r }));
}
Object.defineProperty(q, '__esModule', { value: !0 });
q.checkTaprootInputForSigs =
  q.tapTreeFromList =
  xy =
  q.tapTreeToList =
  q.tweakInternalPubKey =
  q.checkTaprootOutputFields =
  q.checkTaprootInputFields =
  q.isTaprootOutput =
  q.isTaprootInput =
  q.serializeTaprootSignature =
  q.tapScriptFinalizer =
  my =
  q.toXOnly =
    void 0;
const Qs = mt,
  wy = fn,
  fo = R,
  sn = io,
  gy = hr,
  by = R,
  Ey = (t) => (t.length === 32 ? t : t.slice(1, 33));
var my = (q.toXOnly = Ey);
function Sy(t, e, n) {
  const r = Ky(e, t, n);
  try {
    const o = Ry(e, r).concat(r.script).concat(r.controlBlock);
    return { finalScriptWitness: (0, fo.witnessStackToScriptWitness)(o) };
  } catch (i) {
    throw new Error(`Can not finalize taproot input #${t}: ${i}`);
  }
}
q.tapScriptFinalizer = Sy;
function Ty(t, e) {
  const n = e ? A.from([e]) : A.from([]);
  return A.concat([t, n]);
}
q.serializeTaprootSignature = Ty;
function li(t) {
  return (
    t &&
    !!(
      t.tapInternalKey ||
      t.tapMerkleRoot ||
      (t.tapLeafScript && t.tapLeafScript.length) ||
      (t.tapBip32Derivation && t.tapBip32Derivation.length) ||
      (t.witnessUtxo && (0, fo.isP2TR)(t.witnessUtxo.script))
    )
  );
}
q.isTaprootInput = li;
function pi(t, e) {
  return (
    t &&
    !!(
      t.tapInternalKey ||
      t.tapTree ||
      (t.tapBip32Derivation && t.tapBip32Derivation.length) ||
      (e && (0, fo.isP2TR)(e))
    )
  );
}
q.isTaprootOutput = pi;
function _y(t, e, n) {
  Ly(t, e, n), $y(t, e, n);
}
q.checkTaprootInputFields = _y;
function Ay(t, e, n) {
  Cy(t, e, n), Iy(t, e);
}
q.checkTaprootOutputFields = Ay;
function Iy(t, e) {
  if (!e.tapTree && !e.tapInternalKey) return;
  const n = e.tapInternalKey || t.tapInternalKey,
    r = e.tapTree || t.tapTree;
  if (n) {
    const { script: i } = t,
      o = vy(n, r);
    if (i && !i.equals(o)) throw new Error('Error adding output. Script or address missmatch.');
  }
}
function vy(t, e) {
  const n = e && gf(e.leaves),
    { output: r } = (0, gy.p2tr)({ internalPubkey: t, scriptTree: n });
  return r;
}
function ky(t, e) {
  const n = e.tapInternalKey,
    r = n && (0, sn.tweakKey)(n, e.tapMerkleRoot);
  if (!r)
    throw new Error(
      `Cannot tweak tap internal key for input #${t}. Public key: ${n && n.toString('hex')}`
    );
  return r.x;
}
q.tweakInternalPubKey = ky;
function Py(t) {
  if (!(0, Qs.isTaptree)(t))
    throw new Error('Cannot convert taptree to tapleaf list. Expecting a tapree structure.');
  return us(t);
}
var xy = (q.tapTreeToList = Py);
function gf(t = []) {
  return t.length === 1 && t[0].depth === 0
    ? { output: t[0].script, version: t[0].leafVersion }
    : Hy(t);
}
q.tapTreeFromList = gf;
function Oy(t, e) {
  return Uy(t).some((r) => (0, by.signatureBlocksAction)(r, By, e));
}
q.checkTaprootInputForSigs = Oy;
function By(t) {
  return { signature: t.slice(0, 64), hashType: t.slice(64)[0] || wy.Transaction.SIGHASH_DEFAULT };
}
function Uy(t) {
  const e = [];
  if (
    (t.tapKeySig && e.push(t.tapKeySig),
    t.tapScriptSig && e.push(...t.tapScriptSig.map((n) => n.signature)),
    !e.length)
  ) {
    const n = Ny(t.finalScriptWitness);
    n && e.push(n);
  }
  return e;
}
function Ny(t) {
  if (!t) return;
  const e = t.slice(2);
  if (e.length === 64 || e.length === 65) return e;
}
function us(t, e = [], n = 0) {
  if (n > sn.MAX_TAPTREE_DEPTH) throw new Error('Max taptree depth exceeded.');
  return t
    ? (0, Qs.isTapleaf)(t)
      ? (e.push({
          depth: n,
          leafVersion: t.version || sn.LEAF_VERSION_TAPSCRIPT,
          script: t.output,
        }),
        e)
      : (t[0] && us(t[0], e, n + 1), t[1] && us(t[1], e, n + 1), e)
    : [];
}
function Hy(t) {
  let e;
  for (const n of t)
    if (((e = as(n, e)), !e)) throw new Error('No room left to insert tapleaf in tree');
  return e;
}
function as(t, e, n = 0) {
  if (n > sn.MAX_TAPTREE_DEPTH) throw new Error('Max taptree depth exceeded.');
  if (t.depth === n) return e ? void 0 : { output: t.script, version: t.leafVersion };
  if ((0, Qs.isTapleaf)(e)) return;
  const r = as(t, e && e[0], n + 1);
  if (r) return [r, e && e[1]];
  const i = as(t, e && e[1], n + 1);
  if (i) return [e && e[0], i];
}
function Ly(t, e, n) {
  const r = li(t) && tr(e),
    i = tr(t) && li(e),
    o = t === e && li(e) && tr(e);
  if (r || i || o)
    throw new Error(
      `Invalid arguments for Psbt.${n}. Cannot use both taproot and non-taproot fields.`
    );
}
function Cy(t, e, n) {
  const r = pi(t) && tr(e),
    i = tr(t) && pi(e),
    o = t === e && pi(e) && tr(e);
  if (r || i || o)
    throw new Error(
      `Invalid arguments for Psbt.${n}. Cannot use both taproot and non-taproot fields.`
    );
}
function $y(t, e, n) {
  if (e.tapMerkleRoot) {
    const r = (e.tapLeafScript || []).every((o) => Wo(o, e.tapMerkleRoot)),
      i = (t.tapLeafScript || []).every((o) => Wo(o, e.tapMerkleRoot));
    if (!r || !i) throw new Error(`Invalid arguments for Psbt.${n}. Tapleaf not part of taptree.`);
  } else if (t.tapMerkleRoot && !(e.tapLeafScript || []).every((i) => Wo(i, t.tapMerkleRoot)))
    throw new Error(`Invalid arguments for Psbt.${n}. Tapleaf not part of taptree.`);
}
function Wo(t, e) {
  if (!e) return !0;
  const n = (0, sn.tapleafHash)({ output: t.script, version: t.leafVersion });
  return (0, sn.rootHashFromPath)(t.controlBlock, n).equals(e);
}
function Ry(t, e) {
  const n = (0, sn.tapleafHash)({ output: e.script, version: e.leafVersion });
  return (t.tapScriptSig || [])
    .filter((r) => r.leafHash.equals(n))
    .map((r) => Fy(e.script, r))
    .sort((r, i) => i.positionInScript - r.positionInScript)
    .map((r) => r.signature);
}
function Fy(t, e) {
  return Object.assign({ positionInScript: (0, fo.pubkeyPositionInScript)(e.pubkey, t) }, e);
}
function Ky(t, e, n) {
  if (!t.tapScriptSig || !t.tapScriptSig.length)
    throw new Error(`Can not finalize taproot input #${e}. No tapleaf script signature provided.`);
  const r = (t.tapLeafScript || [])
    .sort((i, o) => i.controlBlock.length - o.controlBlock.length)
    .find((i) => My(i, t.tapScriptSig, n));
  if (!r)
    throw new Error(
      `Can not finalize taproot input #${e}. Signature for tapleaf script not found.`
    );
  return r;
}
function My(t, e, n) {
  const r = (0, sn.tapleafHash)({ output: t.script, version: t.leafVersion });
  return (!n || n.equals(r)) && e.find((o) => o.leafHash.equals(r)) !== void 0;
}
function tr(t) {
  return (
    t && !!(t.redeemScript || t.witnessScript || (t.bip32Derivation && t.bip32Derivation.length))
  );
}
Object.defineProperty(co, '__esModule', { value: !0 });
co.Psbt = void 0;
const Jc = Ks,
  tu = ce,
  kt = Zs,
  eu = Ot,
  Ai = at,
  Wy = lt,
  Qt = hr,
  Dy = io,
  Ue = Nt,
  bt = fn,
  z = q,
  it = R,
  Vy = { network: Wy.bitcoin, maximumFeeRate: 5e3 };
class Ii {
  static fromBase64(e, n = {}) {
    const r = A.from(e, 'base64');
    return this.fromBuffer(r, n);
  }
  static fromHex(e, n = {}) {
    const r = A.from(e, 'hex');
    return this.fromBuffer(r, n);
  }
  static fromBuffer(e, n = {}) {
    const r = Jc.Psbt.fromBuffer(e, jy),
      i = new Ii(n, r);
    return Yy(i.__CACHE.__TX, i.__CACHE), i;
  }
  constructor(e = {}, n = new Jc.Psbt(new bf())) {
    (this.data = n),
      (this.opts = Object.assign({}, Vy, e)),
      (this.__CACHE = {
        __NON_WITNESS_UTXO_TX_CACHE: [],
        __NON_WITNESS_UTXO_BUF_CACHE: [],
        __TX_IN_CACHE: {},
        __TX: this.data.globalMap.unsignedTx.tx,
        __UNSAFE_SIGN_NONSEGWIT: !1,
      }),
      this.data.inputs.length === 0 && this.setVersion(2);
    const r = (i, o, s, c) => Object.defineProperty(i, o, { enumerable: s, writable: c });
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
      hash: (0, Ai.cloneBuffer)(e.hash),
      index: e.index,
      sequence: e.sequence,
    }));
  }
  get txOutputs() {
    return this.__CACHE.__TX.outs.map((e) => {
      let n;
      try {
        n = (0, eu.fromOutputScript)(e.script, this.opts.network);
      } catch {}
      return { script: (0, Ai.cloneBuffer)(e.script), value: e.value, address: n };
    });
  }
  combine(...e) {
    return this.data.combine(...e.map((n) => n.data)), this;
  }
  clone() {
    const e = Ii.fromBuffer(this.data.toBuffer());
    return (e.opts = JSON.parse(JSON.stringify(this.opts))), e;
  }
  setMaximumFeeRate(e) {
    oi(e), (this.opts.maximumFeeRate = e);
  }
  setVersion(e) {
    oi(e), mr(this.data.inputs, 'setVersion');
    const n = this.__CACHE;
    return (n.__TX.version = e), (n.__EXTRACTED_TX = void 0), this;
  }
  setLocktime(e) {
    oi(e), mr(this.data.inputs, 'setLocktime');
    const n = this.__CACHE;
    return (n.__TX.locktime = e), (n.__EXTRACTED_TX = void 0), this;
  }
  setInputSequence(e, n) {
    oi(n), mr(this.data.inputs, 'setInputSequence');
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
    (0, z.checkTaprootInputFields)(e, e, 'addInput'),
      mr(this.data.inputs, 'addInput'),
      e.witnessScript && vi(e.witnessScript);
    const n = this.__CACHE;
    this.data.addInput(e);
    const r = n.__TX.ins[n.__TX.ins.length - 1];
    Sf(n, r);
    const i = this.data.inputs.length - 1,
      o = this.data.inputs[i];
    return (
      o.nonWitnessUtxo && hs(this.__CACHE, o, i),
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
    mr(this.data.inputs, 'addOutput');
    const { address: n } = e;
    if (typeof n == 'string') {
      const { network: i } = this.opts,
        o = (0, eu.toOutputScript)(n, i);
      e = Object.assign(e, { script: o });
    }
    (0, z.checkTaprootOutputFields)(e, e, 'addOutput');
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
    if (!this.data.inputs.every(Ef)) throw new Error('Not finalized');
    const n = this.__CACHE;
    if ((e || qy(this, n, this.opts), n.__EXTRACTED_TX)) return n.__EXTRACTED_TX;
    const r = n.__TX.clone();
    return kf(this.data.inputs, r, n, !0), r;
  }
  getFeeRate() {
    return su('__FEE_RATE', 'fee rate', this.data.inputs, this.__CACHE);
  }
  getFee() {
    return su('__FEE', 'fee', this.data.inputs, this.__CACHE);
  }
  finalizeAllInputs() {
    return (
      (0, kt.checkForInput)(this.data.inputs, 0),
      Sr(this.data.inputs.length).forEach((e) => this.finalizeInput(e)),
      this
    );
  }
  finalizeInput(e, n) {
    const r = (0, kt.checkForInput)(this.data.inputs, e);
    return (0, z.isTaprootInput)(r)
      ? this._finalizeTaprootInput(e, r, void 0, n)
      : this._finalizeInput(e, r, n);
  }
  finalizeTaprootInput(e, n, r = z.tapScriptFinalizer) {
    const i = (0, kt.checkForInput)(this.data.inputs, e);
    if ((0, z.isTaprootInput)(i)) return this._finalizeTaprootInput(e, i, n, r);
    throw new Error(`Cannot finalize input #${e}. Not Taproot.`);
  }
  _finalizeInput(e, n, r = Zy) {
    const { script: i, isP2SH: o, isP2WSH: s, isSegwit: c } = ew(e, n, this.__CACHE);
    if (!i) throw new Error(`No script found for input #${e}`);
    zy(n);
    const { finalScriptSig: u, finalScriptWitness: f } = r(e, n, i, c, o, s);
    if (
      (u && this.data.updateInput(e, { finalScriptSig: u }),
      f && this.data.updateInput(e, { finalScriptWitness: f }),
      !u && !f)
    )
      throw new Error(`Unknown error finalizing input #${e}`);
    return this.data.clearFinalizedInput(e), this;
  }
  _finalizeTaprootInput(e, n, r, i = z.tapScriptFinalizer) {
    if (!n.witnessUtxo) throw new Error(`Cannot finalize input #${e}. Missing withness utxo.`);
    if (n.tapKeySig) {
      const o = Qt.p2tr({ output: n.witnessUtxo.script, signature: n.tapKeySig }),
        s = (0, it.witnessStackToScriptWitness)(o.witness);
      this.data.updateInput(e, { finalScriptWitness: s });
    } else {
      const { finalScriptWitness: o } = i(e, n, r);
      this.data.updateInput(e, { finalScriptWitness: o });
    }
    return this.data.clearFinalizedInput(e), this;
  }
  getInputType(e) {
    const n = (0, kt.checkForInput)(this.data.inputs, e),
      r = Pf(e, n, this.__CACHE),
      i = lo(
        r,
        e,
        'input',
        n.redeemScript || sw(n.finalScriptSig),
        n.witnessScript || cw(n.finalScriptWitness)
      ),
      o = i.type === 'raw' ? '' : i.type + '-',
      s = Of(i.meaningfulScript);
    return o + s;
  }
  inputHasPubkey(e, n) {
    const r = (0, kt.checkForInput)(this.data.inputs, e);
    return iw(n, r, e, this.__CACHE);
  }
  inputHasHDKey(e, n) {
    const r = (0, kt.checkForInput)(this.data.inputs, e),
      i = ru(n);
    return !!r.bip32Derivation && r.bip32Derivation.some(i);
  }
  outputHasPubkey(e, n) {
    const r = (0, kt.checkForOutput)(this.data.outputs, e);
    return ow(n, r, e, this.__CACHE);
  }
  outputHasHDKey(e, n) {
    const r = (0, kt.checkForOutput)(this.data.outputs, e),
      i = ru(n);
    return !!r.bip32Derivation && r.bip32Derivation.some(i);
  }
  validateSignaturesOfAllInputs(e) {
    return (
      (0, kt.checkForInput)(this.data.inputs, 0),
      Sr(this.data.inputs.length)
        .map((r) => this.validateSignaturesOfInput(r, e))
        .reduce((r, i) => i === !0 && r, !0)
    );
  }
  validateSignaturesOfInput(e, n, r) {
    const i = this.data.inputs[e];
    return (0, z.isTaprootInput)(i)
      ? this.validateSignaturesOfTaprootInput(e, n, r)
      : this._validateSignaturesOfInput(e, n, r);
  }
  _validateSignaturesOfInput(e, n, r) {
    const i = this.data.inputs[e],
      o = (i || {}).partialSig;
    if (!i || !o || o.length < 1) throw new Error('No signatures to validate');
    if (typeof n != 'function') throw new Error('Need validator function to validate signatures');
    const s = r ? o.filter((a) => a.pubkey.equals(r)) : o;
    if (s.length < 1) throw new Error('No signatures for this pubkey');
    const c = [];
    let u, f, h;
    for (const a of s) {
      const d = Ue.signature.decode(a.signature),
        { hash: l, script: g } =
          h !== d.hashType
            ? _f(e, Object.assign({}, i, { sighashType: d.hashType }), this.__CACHE, !0)
            : { hash: u, script: f };
      (h = d.hashType),
        (u = l),
        (f = g),
        mf(a.pubkey, g, 'verify'),
        c.push(n(a.pubkey, l, d.signature));
    }
    return c.every((a) => a === !0);
  }
  validateSignaturesOfTaprootInput(e, n, r) {
    const i = this.data.inputs[e],
      o = (i || {}).tapKeySig,
      s = (i || {}).tapScriptSig;
    if (!i && !o && !(s && !s.length)) throw new Error('No signatures to validate');
    if (typeof n != 'function') throw new Error('Need validator function to validate signatures');
    r = r && (0, z.toXOnly)(r);
    const c = r
      ? fs(e, i, this.data.inputs, r, this.__CACHE)
      : Jy(e, i, this.data.inputs, this.__CACHE);
    if (!c.length) throw new Error('No signatures for this pubkey');
    const u = c.find((h) => !h.leafHash);
    let f = 0;
    if (o && u) {
      if (!n(u.pubkey, u.hash, uu(o))) return !1;
      f++;
    }
    if (s)
      for (const h of s) {
        const a = c.find((d) => h.pubkey.equals(d.pubkey));
        if (a) {
          if (!n(h.pubkey, a.hash, uu(h.signature))) return !1;
          f++;
        }
      }
    return f > 0;
  }
  signAllInputsHD(e, n = [bt.Transaction.SIGHASH_ALL]) {
    if (!e || !e.publicKey || !e.fingerprint) throw new Error('Need HDSigner to sign input');
    const r = [];
    for (const i of Sr(this.data.inputs.length))
      try {
        this.signInputHD(i, e, n), r.push(!0);
      } catch {
        r.push(!1);
      }
    if (r.every((i) => i === !1)) throw new Error('No inputs were signed');
    return this;
  }
  signAllInputsHDAsync(e, n = [bt.Transaction.SIGHASH_ALL]) {
    return new Promise((r, i) => {
      if (!e || !e.publicKey || !e.fingerprint) return i(new Error('Need HDSigner to sign input'));
      const o = [],
        s = [];
      for (const c of Sr(this.data.inputs.length))
        s.push(
          this.signInputHDAsync(c, e, n).then(
            () => {
              o.push(!0);
            },
            () => {
              o.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (o.every((c) => c === !1)) return i(new Error('No inputs were signed'));
        r();
      });
    });
  }
  signInputHD(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    if (!n || !n.publicKey || !n.fingerprint) throw new Error('Need HDSigner to sign input');
    return au(e, this.data.inputs, n).forEach((o) => this.signInput(e, o, r)), this;
  }
  signInputHDAsync(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    return new Promise((i, o) => {
      if (!n || !n.publicKey || !n.fingerprint) return o(new Error('Need HDSigner to sign input'));
      const c = au(e, this.data.inputs, n).map((u) => this.signInputAsync(e, u, r));
      return Promise.all(c)
        .then(() => {
          i();
        })
        .catch(o);
    });
  }
  signAllInputs(e, n) {
    if (!e || !e.publicKey) throw new Error('Need Signer to sign input');
    const r = [];
    for (const i of Sr(this.data.inputs.length))
      try {
        this.signInput(i, e, n), r.push(!0);
      } catch {
        r.push(!1);
      }
    if (r.every((i) => i === !1)) throw new Error('No inputs were signed');
    return this;
  }
  signAllInputsAsync(e, n) {
    return new Promise((r, i) => {
      if (!e || !e.publicKey) return i(new Error('Need Signer to sign input'));
      const o = [],
        s = [];
      for (const [c] of this.data.inputs.entries())
        s.push(
          this.signInputAsync(c, e, n).then(
            () => {
              o.push(!0);
            },
            () => {
              o.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (o.every((c) => c === !1)) return i(new Error('No inputs were signed'));
        r();
      });
    });
  }
  signInput(e, n, r) {
    if (!n || !n.publicKey) throw new Error('Need Signer to sign input');
    const i = (0, kt.checkForInput)(this.data.inputs, e);
    return (0, z.isTaprootInput)(i)
      ? this._signTaprootInput(e, i, n, void 0, r)
      : this._signInput(e, n, r);
  }
  signTaprootInput(e, n, r, i) {
    if (!n || !n.publicKey) throw new Error('Need Signer to sign input');
    const o = (0, kt.checkForInput)(this.data.inputs, e);
    if ((0, z.isTaprootInput)(o)) return this._signTaprootInput(e, o, n, r, i);
    throw new Error(`Input #${e} is not of type Taproot.`);
  }
  _signInput(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: o } = cu(this.data.inputs, e, n.publicKey, this.__CACHE, r),
      s = [{ pubkey: n.publicKey, signature: Ue.signature.encode(n.sign(i), o) }];
    return this.data.updateInput(e, { partialSig: s }), this;
  }
  _signTaprootInput(e, n, r, i, o = [bt.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(e, n, r, i, o),
      c = s
        .filter((f) => !f.leafHash)
        .map((f) => (0, z.serializeTaprootSignature)(r.signSchnorr(f.hash), n.sighashType))[0],
      u = s
        .filter((f) => !!f.leafHash)
        .map((f) => ({
          pubkey: (0, z.toXOnly)(r.publicKey),
          signature: (0, z.serializeTaprootSignature)(r.signSchnorr(f.hash), n.sighashType),
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
      const i = (0, kt.checkForInput)(this.data.inputs, e);
      return (0, z.isTaprootInput)(i)
        ? this._signTaprootInputAsync(e, i, n, void 0, r)
        : this._signInputAsync(e, n, r);
    });
  }
  signTaprootInputAsync(e, n, r, i) {
    return Promise.resolve().then(() => {
      if (!n || !n.publicKey) throw new Error('Need Signer to sign input');
      const o = (0, kt.checkForInput)(this.data.inputs, e);
      if ((0, z.isTaprootInput)(o)) return this._signTaprootInputAsync(e, o, n, r, i);
      throw new Error(`Input #${e} is not of type Taproot.`);
    });
  }
  _signInputAsync(e, n, r = [bt.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: o } = cu(this.data.inputs, e, n.publicKey, this.__CACHE, r);
    return Promise.resolve(n.sign(i)).then((s) => {
      const c = [{ pubkey: n.publicKey, signature: Ue.signature.encode(s, o) }];
      this.data.updateInput(e, { partialSig: c });
    });
  }
  async _signTaprootInputAsync(e, n, r, i, o = [bt.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(e, n, r, i, o),
      c = [],
      u = s.filter((h) => !h.leafHash)[0];
    if (u) {
      const h = Promise.resolve(r.signSchnorr(u.hash)).then((a) => ({
        tapKeySig: (0, z.serializeTaprootSignature)(a, n.sighashType),
      }));
      c.push(h);
    }
    const f = s.filter((h) => !!h.leafHash);
    if (f.length) {
      const h = f.map((a) =>
        Promise.resolve(r.signSchnorr(a.hash)).then((d) => ({
          tapScriptSig: [
            {
              pubkey: (0, z.toXOnly)(r.publicKey),
              signature: (0, z.serializeTaprootSignature)(d, n.sighashType),
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
  checkTaprootHashesForSig(e, n, r, i, o) {
    if (typeof r.signSchnorr != 'function')
      throw new Error(`Need Schnorr Signer to sign taproot input #${e}.`);
    const s = fs(e, n, this.data.inputs, r.publicKey, this.__CACHE, i, o);
    if (!s || !s.length)
      throw new Error(`Can not sign for input #${e} with the key ${r.publicKey.toString('hex')}`);
    return s;
  }
  toBuffer() {
    return Do(this.__CACHE), this.data.toBuffer();
  }
  toHex() {
    return Do(this.__CACHE), this.data.toHex();
  }
  toBase64() {
    return Do(this.__CACHE), this.data.toBase64();
  }
  updateGlobal(e) {
    return this.data.updateGlobal(e), this;
  }
  updateInput(e, n) {
    return (
      n.witnessScript && vi(n.witnessScript),
      (0, z.checkTaprootInputFields)(this.data.inputs[e], n, 'updateInput'),
      this.data.updateInput(e, n),
      n.nonWitnessUtxo && hs(this.__CACHE, this.data.inputs[e], e),
      this
    );
  }
  updateOutput(e, n) {
    const r = this.data.outputs[e];
    return (
      (0, z.checkTaprootOutputFields)(r, n, 'updateOutput'), this.data.updateOutput(e, n), this
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
co.Psbt = Ii;
const jy = (t) => new bf(t);
class bf {
  constructor(e = A.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
    (this.tx = bt.Transaction.fromBuffer(e)),
      Xy(this.tx),
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
    const n = typeof e.hash == 'string' ? (0, Ai.reverseBuffer)(A.from(e.hash, 'hex')) : e.hash;
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
function Gy(t, e, n) {
  switch (n) {
    case 'pubkey':
    case 'pubkeyhash':
    case 'witnesspubkeyhash':
      return nu(1, t.partialSig);
    case 'multisig':
      const r = Qt.p2ms({ output: e });
      return nu(r.m, t.partialSig, r.pubkeys);
    default:
      return !1;
  }
}
function Do(t) {
  if (t.__UNSAFE_SIGN_NONSEGWIT !== !1) throw new Error('Not BIP174 compliant, can not export');
}
function nu(t, e, n) {
  if (!e) return !1;
  let r;
  if (
    (n
      ? (r = n
          .map((i) => {
            const o = uw(i);
            return e.find((s) => s.pubkey.equals(o));
          })
          .filter((i) => !!i))
      : (r = e),
    r.length > t)
  )
    throw new Error('Too many signatures');
  return r.length === t;
}
function Ef(t) {
  return !!t.finalScriptSig || !!t.finalScriptWitness;
}
function ru(t) {
  return (e) =>
    !(
      !e.masterFingerprint.equals(t.fingerprint) || !t.derivePath(e.path).publicKey.equals(e.pubkey)
    );
}
function oi(t) {
  if (typeof t != 'number' || t !== Math.floor(t) || t > 4294967295 || t < 0)
    throw new Error('Invalid 32 bit integer');
}
function qy(t, e, n) {
  const r = e.__FEE_RATE || t.getFeeRate(),
    i = e.__EXTRACTED_TX.virtualSize(),
    o = r * i;
  if (r >= n.maximumFeeRate)
    throw new Error(
      `Warning: You are paying around ${(o / 1e8).toFixed(8)} in fees, which is ${r} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
    );
}
function mr(t, e) {
  t.forEach((n) => {
    if (
      (0, z.isTaprootInput)(n)
        ? (0, z.checkTaprootInputForSigs)(n, e)
        : (0, it.checkInputForSig)(n, e)
    )
      throw new Error('Can not modify transaction, signatures exist.');
  });
}
function zy(t) {
  if (!t.sighashType || !t.partialSig) return;
  const { partialSig: e, sighashType: n } = t;
  e.forEach((r) => {
    const { hashType: i } = Ue.signature.decode(r.signature);
    if (n !== i) throw new Error('Signature sighash does not match input sighash type');
  });
}
function mf(t, e, n) {
  if (!(0, it.pubkeyInScript)(t, e))
    throw new Error(`Can not ${n} for this input with the key ${t.toString('hex')}`);
}
function Xy(t) {
  if (!t.ins.every((n) => n.script && n.script.length === 0 && n.witness && n.witness.length === 0))
    throw new Error('Format Error: Transaction ScriptSigs are not empty');
}
function Yy(t, e) {
  t.ins.forEach((n) => {
    Sf(e, n);
  });
}
function Sf(t, e) {
  const n = (0, Ai.reverseBuffer)(A.from(e.hash)).toString('hex') + ':' + e.index;
  if (t.__TX_IN_CACHE[n]) throw new Error('Duplicate input detected.');
  t.__TX_IN_CACHE[n] = 1;
}
function Tf(t, e) {
  return (n, r, i, o) => {
    const s = t({ redeem: { output: i } }).output;
    if (!r.equals(s))
      throw new Error(`${e} for ${o} #${n} doesn't match the scriptPubKey in the prevout`);
  };
}
const iu = Tf(Qt.p2sh, 'Redeem script'),
  ou = Tf(Qt.p2wsh, 'Witness script');
function su(t, e, n, r) {
  if (!n.every(Ef)) throw new Error(`PSBT must be finalized to calculate ${e}`);
  if (t === '__FEE_RATE' && r.__FEE_RATE) return r.__FEE_RATE;
  if (t === '__FEE' && r.__FEE) return r.__FEE;
  let i,
    o = !0;
  if (
    (r.__EXTRACTED_TX ? ((i = r.__EXTRACTED_TX), (o = !1)) : (i = r.__TX.clone()),
    kf(n, i, r, o),
    t === '__FEE_RATE')
  )
    return r.__FEE_RATE;
  if (t === '__FEE') return r.__FEE;
}
function Zy(t, e, n, r, i, o) {
  const s = Of(n);
  if (!Gy(e, n, s)) throw new Error(`Can not finalize input #${t}`);
  return Qy(n, s, e.partialSig, r, i, o);
}
function Qy(t, e, n, r, i, o) {
  let s, c;
  const u = tw(t, e, n),
    f = o ? Qt.p2wsh({ redeem: u }) : null,
    h = i ? Qt.p2sh({ redeem: f || u }) : null;
  return (
    r
      ? (f
          ? (c = (0, it.witnessStackToScriptWitness)(f.witness))
          : (c = (0, it.witnessStackToScriptWitness)(u.witness)),
        h && (s = h.input))
      : h
        ? (s = h.input)
        : (s = u.input),
    { finalScriptSig: s, finalScriptWitness: c }
  );
}
function cu(t, e, n, r, i) {
  const o = (0, kt.checkForInput)(t, e),
    { hash: s, sighashType: c, script: u } = _f(e, o, r, !1, i);
  return mf(n, u, 'sign'), { hash: s, sighashType: c };
}
function _f(t, e, n, r, i) {
  const o = n.__TX,
    s = e.sighashType || bt.Transaction.SIGHASH_ALL;
  If(s, i);
  let c, u;
  if (e.nonWitnessUtxo) {
    const a = ho(n, e, t),
      d = o.ins[t].hash,
      l = a.getHash();
    if (!d.equals(l))
      throw new Error(
        `Non-witness UTXO hash for input #${t} doesn't match the hash specified in the prevout`
      );
    const g = o.ins[t].index;
    u = a.outs[g];
  } else if (e.witnessUtxo) u = e.witnessUtxo;
  else throw new Error('Need a Utxo input item for signing');
  const { meaningfulScript: f, type: h } = lo(
    u.script,
    t,
    'input',
    e.redeemScript,
    e.witnessScript
  );
  if (['p2sh-p2wsh', 'p2wsh'].indexOf(h) >= 0) c = o.hashForWitnessV0(t, f, u.value, s);
  else if ((0, it.isP2WPKH)(f)) {
    const a = Qt.p2pkh({ hash: f.slice(2) }).output;
    c = o.hashForWitnessV0(t, a, u.value, s);
  } else {
    if (e.nonWitnessUtxo === void 0 && n.__UNSAFE_SIGN_NONSEGWIT === !1)
      throw new Error(`Input #${t} has witnessUtxo but non-segwit script: ${f.toString('hex')}`);
    !r &&
      n.__UNSAFE_SIGN_NONSEGWIT !== !1 &&
      console.warn(`Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecesor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`),
      (c = o.hashForSignature(t, f, s));
  }
  return { script: f, sighashType: s, hash: c };
}
function Jy(t, e, n, r) {
  const i = [];
  if (e.tapInternalKey) {
    const s = Af(t, e, r);
    s && i.push(s);
  }
  if (e.tapScriptSig) {
    const s = e.tapScriptSig.map((c) => c.pubkey);
    i.push(...s);
  }
  return i.map((s) => fs(t, e, n, s, r)).flat();
}
function Af(t, e, n) {
  const { script: r } = Js(t, e, n);
  return (0, it.isP2TR)(r) ? r.subarray(2, 34) : null;
}
function uu(t) {
  return t.length === 64 ? t : t.subarray(0, 64);
}
function fs(t, e, n, r, i, o, s) {
  const c = i.__TX,
    u = e.sighashType || bt.Transaction.SIGHASH_DEFAULT;
  If(u, s);
  const f = n.map((g, p) => Js(p, g, i)),
    h = f.map((g) => g.script),
    a = f.map((g) => g.value),
    d = [];
  if (e.tapInternalKey && !o) {
    const g = Af(t, e, i) || A.from([]);
    if ((0, z.toXOnly)(r).equals(g)) {
      const p = c.hashForWitnessV1(t, h, a, u);
      d.push({ pubkey: r, hash: p });
    }
  }
  const l = (e.tapLeafScript || [])
    .filter((g) => (0, it.pubkeyInScript)(r, g.script))
    .map((g) => {
      const p = (0, Dy.tapleafHash)({ output: g.script, version: g.leafVersion });
      return Object.assign({ hash: p }, g);
    })
    .filter((g) => !o || o.equals(g.hash))
    .map((g) => {
      const p = c.hashForWitnessV1(t, h, a, bt.Transaction.SIGHASH_DEFAULT, g.hash);
      return { pubkey: r, hash: p, leafHash: g.hash };
    });
  return d.concat(l);
}
function If(t, e) {
  if (e && e.indexOf(t) < 0) {
    const n = rw(t);
    throw new Error(
      `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${n}`
    );
  }
}
function tw(t, e, n) {
  let r;
  switch (e) {
    case 'multisig':
      const i = nw(t, n);
      r = Qt.p2ms({ output: t, signatures: i });
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
function ew(t, e, n) {
  const r = n.__TX,
    i = { script: null, isSegwit: !1, isP2SH: !1, isP2WSH: !1 };
  if (((i.isP2SH = !!e.redeemScript), (i.isP2WSH = !!e.witnessScript), e.witnessScript))
    i.script = e.witnessScript;
  else if (e.redeemScript) i.script = e.redeemScript;
  else if (e.nonWitnessUtxo) {
    const o = ho(n, e, t),
      s = r.ins[t].index;
    i.script = o.outs[s].script;
  } else e.witnessUtxo && (i.script = e.witnessUtxo.script);
  return (e.witnessScript || (0, it.isP2WPKH)(i.script)) && (i.isSegwit = !0), i;
}
function au(t, e, n) {
  const r = (0, kt.checkForInput)(e, t);
  if (!r.bip32Derivation || r.bip32Derivation.length === 0)
    throw new Error('Need bip32Derivation to sign with HD');
  const i = r.bip32Derivation
    .map((s) => {
      if (s.masterFingerprint.equals(n.fingerprint)) return s;
    })
    .filter((s) => !!s);
  if (i.length === 0)
    throw new Error('Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint');
  return i.map((s) => {
    const c = n.derivePath(s.path);
    if (!s.pubkey.equals(c.publicKey)) throw new Error('pubkey did not match bip32Derivation');
    return c;
  });
}
function nw(t, e) {
  return Qt.p2ms({ output: t })
    .pubkeys.map((r) => (e.filter((i) => i.pubkey.equals(r))[0] || {}).signature)
    .filter((r) => !!r);
}
function vf(t) {
  let e = 0;
  function n(s) {
    return (e += s), t.slice(e - s, e);
  }
  function r() {
    const s = tu.decode(t, e);
    return (e += tu.decode.bytes), s;
  }
  function i() {
    return n(r());
  }
  function o() {
    const s = r(),
      c = [];
    for (let u = 0; u < s; u++) c.push(i());
    return c;
  }
  return o();
}
function rw(t) {
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
function hs(t, e, n) {
  t.__NON_WITNESS_UTXO_BUF_CACHE[n] = e.nonWitnessUtxo;
  const r = bt.Transaction.fromBuffer(e.nonWitnessUtxo);
  t.__NON_WITNESS_UTXO_TX_CACHE[n] = r;
  const i = t,
    o = n;
  delete e.nonWitnessUtxo,
    Object.defineProperty(e, 'nonWitnessUtxo', {
      enumerable: !0,
      get() {
        const s = i.__NON_WITNESS_UTXO_BUF_CACHE[o],
          c = i.__NON_WITNESS_UTXO_TX_CACHE[o];
        if (s !== void 0) return s;
        {
          const u = c.toBuffer();
          return (i.__NON_WITNESS_UTXO_BUF_CACHE[o] = u), u;
        }
      },
      set(s) {
        i.__NON_WITNESS_UTXO_BUF_CACHE[o] = s;
      },
    });
}
function kf(t, e, n, r) {
  let i = 0;
  t.forEach((u, f) => {
    if (
      (r && u.finalScriptSig && (e.ins[f].script = u.finalScriptSig),
      r && u.finalScriptWitness && (e.ins[f].witness = vf(u.finalScriptWitness)),
      u.witnessUtxo)
    )
      i += u.witnessUtxo.value;
    else if (u.nonWitnessUtxo) {
      const h = ho(n, u, f),
        a = e.ins[f].index,
        d = h.outs[a];
      i += d.value;
    }
  });
  const o = e.outs.reduce((u, f) => u + f.value, 0),
    s = i - o;
  if (s < 0) throw new Error('Outputs are spending more than Inputs');
  const c = e.virtualSize();
  (n.__FEE = s), (n.__EXTRACTED_TX = e), (n.__FEE_RATE = Math.floor(s / c));
}
function ho(t, e, n) {
  const r = t.__NON_WITNESS_UTXO_TX_CACHE;
  return r[n] || hs(t, e, n), r[n];
}
function Pf(t, e, n) {
  const { script: r } = Js(t, e, n);
  return r;
}
function Js(t, e, n) {
  if (e.witnessUtxo !== void 0) return { script: e.witnessUtxo.script, value: e.witnessUtxo.value };
  if (e.nonWitnessUtxo !== void 0) {
    const i = ho(n, e, t).outs[n.__TX.ins[t].index];
    return { script: i.script, value: i.value };
  } else throw new Error("Can't find pubkey in input without Utxo data");
}
function iw(t, e, n, r) {
  const i = Pf(n, e, r),
    { meaningfulScript: o } = lo(i, n, 'input', e.redeemScript, e.witnessScript);
  return (0, it.pubkeyInScript)(t, o);
}
function ow(t, e, n, r) {
  const i = r.__TX.outs[n].script,
    { meaningfulScript: o } = lo(i, n, 'output', e.redeemScript, e.witnessScript);
  return (0, it.pubkeyInScript)(t, o);
}
function sw(t) {
  if (!t) return;
  const e = Ue.decompile(t);
  if (!e) return;
  const n = e[e.length - 1];
  if (!(!A.isBuffer(n) || xf(n) || aw(n) || !Ue.decompile(n))) return n;
}
function cw(t) {
  if (!t) return;
  const e = vf(t),
    n = e[e.length - 1];
  if (!(xf(n) || !Ue.decompile(n))) return n;
}
function uw(t) {
  if (t.length === 65) {
    const e = t[64] & 1,
      n = t.slice(0, 33);
    return (n[0] = 2 | e), n;
  }
  return t.slice();
}
function xf(t) {
  return t.length === 33 && Ue.isCanonicalPubKey(t);
}
function aw(t) {
  return Ue.isCanonicalScriptSignature(t);
}
function lo(t, e, n, r, i) {
  const o = (0, it.isP2SHScript)(t),
    s = o && r && (0, it.isP2WSHScript)(r),
    c = (0, it.isP2WSHScript)(t);
  if (o && r === void 0) throw new Error('scriptPubkey is P2SH but redeemScript missing');
  if ((c || s) && i === void 0)
    throw new Error('scriptPubkey or redeemScript is P2WSH but witnessScript missing');
  let u;
  return (
    s
      ? ((u = i), iu(e, t, r, n), ou(e, r, i, n), vi(u))
      : c
        ? ((u = i), ou(e, t, i, n), vi(u))
        : o
          ? ((u = r), iu(e, t, r, n))
          : (u = t),
    { meaningfulScript: u, type: s ? 'p2sh-p2wsh' : o ? 'p2sh' : c ? 'p2wsh' : 'raw' }
  );
}
function vi(t) {
  if ((0, it.isP2WPKH)(t) || (0, it.isP2SHScript)(t))
    throw new Error('P2WPKH or P2SH can not be contained within P2WSH');
}
function Of(t) {
  return (0, it.isP2WPKH)(t)
    ? 'witnesspubkeyhash'
    : (0, it.isP2PKH)(t)
      ? 'pubkeyhash'
      : (0, it.isP2MS)(t)
        ? 'multisig'
        : (0, it.isP2PK)(t)
          ? 'pubkey'
          : 'nonstandard';
}
function Sr(t) {
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
  const e = Ot;
  t.address = e;
  const n = Ee;
  t.crypto = n;
  const r = lt;
  t.networks = r;
  const i = hr;
  t.payments = i;
  const o = Nt;
  t.script = o;
  var s = oo;
  Object.defineProperty(t, 'Block', {
    enumerable: !0,
    get: function () {
      return s.Block;
    },
  });
  var c = co;
  Object.defineProperty(t, 'Psbt', {
    enumerable: !0,
    get: function () {
      return c.Psbt;
    },
  });
  var u = rn;
  Object.defineProperty(t, 'opcodes', {
    enumerable: !0,
    get: function () {
      return u.OPS;
    },
  });
  var f = fn;
  Object.defineProperty(t, 'Transaction', {
    enumerable: !0,
    get: function () {
      return f.Transaction;
    },
  });
  var h = on;
  Object.defineProperty(t, 'initEccLib', {
    enumerable: !0,
    get: function () {
      return h.initEccLib;
    },
  });
})(jl);
function fu(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
function Bf(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function fw(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  fu(t.outputLen), fu(t.blockLen);
}
function ki(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
function hw(t, e) {
  Bf(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Vo = typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Uf = (t) =>
    t instanceof Uint8Array,
  jo = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  pe = (t, e) => (t << (32 - e)) | (t >>> e),
  lw = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!lw) throw new Error('Non little-endian hardware is not supported');
function pw(t) {
  if (typeof t != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function tc(t) {
  if ((typeof t == 'string' && (t = pw(t)), !Uf(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function dw(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return (
    t.forEach((r) => {
      if (!Uf(r)) throw new Error('Uint8Array expected');
      e.set(r, n), (n += r.length);
    }),
    e
  );
}
class Nf {
  clone() {
    return this._cloneInto();
  }
}
function Hf(t) {
  const e = (r) => t().update(tc(r)).digest(),
    n = t();
  return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = () => t()), e;
}
function Lf(t = 32) {
  if (Vo && typeof Vo.getRandomValues == 'function') return Vo.getRandomValues(new Uint8Array(t));
  throw new Error('crypto.getRandomValues must be defined');
}
class Cf extends Nf {
  constructor(e, n) {
    super(), (this.finished = !1), (this.destroyed = !1), fw(e);
    const r = tc(n);
    if (((this.iHash = e.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const i = this.blockLen,
      o = new Uint8Array(i);
    o.set(r.length > i ? e.create().update(r).digest() : r);
    for (let s = 0; s < o.length; s++) o[s] ^= 54;
    this.iHash.update(o), (this.oHash = e.create());
    for (let s = 0; s < o.length; s++) o[s] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(e) {
    return ki(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    ki(this),
      Bf(e, this.outputLen),
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
    const { oHash: n, iHash: r, finished: i, destroyed: o, blockLen: s, outputLen: c } = this;
    return (
      (e = e),
      (e.finished = i),
      (e.destroyed = o),
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
const $f = (t, e, n) => new Cf(t, e).update(n).digest();
$f.create = (t, e) => new Cf(t, e);
function yw(t, e, n, r) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, n, r);
  const i = BigInt(32),
    o = BigInt(4294967295),
    s = Number((n >> i) & o),
    c = Number(n & o),
    u = r ? 4 : 0,
    f = r ? 0 : 4;
  t.setUint32(e + u, s, r), t.setUint32(e + f, c, r);
}
class Rf extends Nf {
  constructor(e, n, r, i) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = i),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = jo(this.buffer));
  }
  update(e) {
    ki(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = tc(e);
    const o = e.length;
    for (let s = 0; s < o; ) {
      const c = Math.min(i - this.pos, o - s);
      if (c === i) {
        const u = jo(e);
        for (; i <= o - s; s += i) this.process(u, s);
        continue;
      }
      r.set(e.subarray(s, s + c), this.pos),
        (this.pos += c),
        (s += c),
        this.pos === i && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    ki(this), hw(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: i, isLE: o } = this;
    let { pos: s } = this;
    (n[s++] = 128),
      this.buffer.subarray(s).fill(0),
      this.padOffset > i - s && (this.process(r, 0), (s = 0));
    for (let a = s; a < i; a++) n[a] = 0;
    yw(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = jo(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const f = u / 4,
      h = this.get();
    if (f > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let a = 0; a < f; a++) c.setUint32(4 * a, h[a], o);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: o, destroyed: s, pos: c } = this;
    return (
      (e.length = i), (e.pos = c), (e.finished = o), (e.destroyed = s), i % n && e.buffer.set(r), e
    );
  }
}
const ww = (t, e, n) => (t & e) ^ (~t & n),
  gw = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
  bw = new Uint32Array([
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
class Ew extends Rf {
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
    const { A: e, B: n, C: r, D: i, E: o, F: s, G: c, H: u } = this;
    return [e, n, r, i, o, s, c, u];
  }
  set(e, n, r, i, o, s, c, u) {
    (this.A = e | 0),
      (this.B = n | 0),
      (this.C = r | 0),
      (this.D = i | 0),
      (this.E = o | 0),
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
    let { A: r, B: i, C: o, D: s, E: c, F: u, G: f, H: h } = this;
    for (let a = 0; a < 64; a++) {
      const d = pe(c, 6) ^ pe(c, 11) ^ pe(c, 25),
        l = (h + d + ww(c, u, f) + bw[a] + Xe[a]) | 0,
        p = ((pe(r, 2) ^ pe(r, 13) ^ pe(r, 22)) + gw(r, i, o)) | 0;
      (h = f), (f = u), (u = c), (c = (s + l) | 0), (s = o), (o = i), (i = r), (r = (l + p) | 0);
    }
    (r = (r + this.A) | 0),
      (i = (i + this.B) | 0),
      (o = (o + this.C) | 0),
      (s = (s + this.D) | 0),
      (c = (c + this.E) | 0),
      (u = (u + this.F) | 0),
      (f = (f + this.G) | 0),
      (h = (h + this.H) | 0),
      this.set(r, i, o, s, c, u, f, h);
  }
  roundClean() {
    Xe.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Lt = Hf(() => new Ew());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Ff = BigInt(0),
  po = BigInt(1),
  mw = BigInt(2),
  yo = (t) => t instanceof Uint8Array,
  Sw = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, '0'));
function ur(t) {
  if (!yo(t)) throw new Error('Uint8Array expected');
  let e = '';
  for (let n = 0; n < t.length; n++) e += Sw[t[n]];
  return e;
}
function Kf(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function ec(t) {
  if (typeof t != 'string') throw new Error('hex string expected, got ' + typeof t);
  return BigInt(t === '' ? '0' : `0x${t}`);
}
function ar(t) {
  if (typeof t != 'string') throw new Error('hex string expected, got ' + typeof t);
  const e = t.length;
  if (e % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + e);
  const n = new Uint8Array(e / 2);
  for (let r = 0; r < n.length; r++) {
    const i = r * 2,
      o = t.slice(i, i + 2),
      s = Number.parseInt(o, 16);
    if (Number.isNaN(s) || s < 0) throw new Error('Invalid byte sequence');
    n[r] = s;
  }
  return n;
}
function $t(t) {
  return ec(ur(t));
}
function nc(t) {
  if (!yo(t)) throw new Error('Uint8Array expected');
  return ec(ur(Uint8Array.from(t).reverse()));
}
function cn(t, e) {
  return ar(t.toString(16).padStart(e * 2, '0'));
}
function rc(t, e) {
  return cn(t, e).reverse();
}
function Tw(t) {
  return ar(Kf(t));
}
function _t(t, e, n) {
  let r;
  if (typeof e == 'string')
    try {
      r = ar(e);
    } catch (o) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${o}`);
    }
  else if (yo(e)) r = Uint8Array.from(e);
  else throw new Error(`${t} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof n == 'number' && i !== n) throw new Error(`${t} expected ${n} bytes, got ${i}`);
  return r;
}
function Sn(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return (
    t.forEach((r) => {
      if (!yo(r)) throw new Error('Uint8Array expected');
      e.set(r, n), (n += r.length);
    }),
    e
  );
}
function _w(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function Aw(t) {
  if (typeof t != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Iw(t) {
  let e;
  for (e = 0; t > Ff; t >>= po, e += 1);
  return e;
}
function vw(t, e) {
  return (t >> BigInt(e)) & po;
}
const kw = (t, e, n) => t | ((n ? po : Ff) << BigInt(e)),
  ic = (t) => (mw << BigInt(t - 1)) - po,
  Go = (t) => new Uint8Array(t),
  hu = (t) => Uint8Array.from(t);
function Mf(t, e, n) {
  if (typeof t != 'number' || t < 2) throw new Error('hashLen must be a number');
  if (typeof e != 'number' || e < 2) throw new Error('qByteLen must be a number');
  if (typeof n != 'function') throw new Error('hmacFn must be a function');
  let r = Go(t),
    i = Go(t),
    o = 0;
  const s = () => {
      r.fill(1), i.fill(0), (o = 0);
    },
    c = (...a) => n(i, r, ...a),
    u = (a = Go()) => {
      (i = c(hu([0]), a)), (r = c()), a.length !== 0 && ((i = c(hu([1]), a)), (r = c()));
    },
    f = () => {
      if (o++ >= 1e3) throw new Error('drbg: tried 1000 values');
      let a = 0;
      const d = [];
      for (; a < e; ) {
        r = c();
        const l = r.slice();
        d.push(l), (a += r.length);
      }
      return Sn(...d);
    };
  return (a, d) => {
    s(), u(a);
    let l;
    for (; !(l = d(f())); ) u();
    return s(), l;
  };
}
const Pw = {
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
function Dr(t, e, n = {}) {
  const r = (i, o, s) => {
    const c = Pw[o];
    if (typeof c != 'function') throw new Error(`Invalid validator "${o}", expected function`);
    const u = t[i];
    if (!(s && u === void 0) && !c(u, t))
      throw new Error(`Invalid param ${String(i)}=${u} (${typeof u}), expected ${o}`);
  };
  for (const [i, o] of Object.entries(e)) r(i, o, !1);
  for (const [i, o] of Object.entries(n)) r(i, o, !0);
  return t;
}
const xw = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      bitGet: vw,
      bitLen: Iw,
      bitMask: ic,
      bitSet: kw,
      bytesToHex: ur,
      bytesToNumberBE: $t,
      bytesToNumberLE: nc,
      concatBytes: Sn,
      createHmacDrbg: Mf,
      ensureBytes: _t,
      equalBytes: _w,
      hexToBytes: ar,
      hexToNumber: ec,
      numberToBytesBE: cn,
      numberToBytesLE: rc,
      numberToHexUnpadded: Kf,
      numberToVarBytesBE: Tw,
      utf8ToBytes: Aw,
      validateObject: Dr,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ht = BigInt(0),
  J = BigInt(1),
  wn = BigInt(2),
  Ow = BigInt(3),
  ls = BigInt(4),
  lu = BigInt(5),
  pu = BigInt(8);
BigInt(9);
BigInt(16);
function Et(t, e) {
  const n = t % e;
  return n >= ht ? n : e + n;
}
function Bw(t, e, n) {
  if (n <= ht || e < ht) throw new Error('Expected power/modulo > 0');
  if (n === J) return ht;
  let r = J;
  for (; e > ht; ) e & J && (r = (r * t) % n), (t = (t * t) % n), (e >>= J);
  return r;
}
function Gt(t, e, n) {
  let r = t;
  for (; e-- > ht; ) (r *= r), (r %= n);
  return r;
}
function ps(t, e) {
  if (t === ht || e <= ht)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = Et(t, e),
    r = e,
    i = ht,
    o = J;
  for (; n !== ht; ) {
    const c = r / n,
      u = r % n,
      f = i - o * c;
    (r = n), (n = u), (i = o), (o = f);
  }
  if (r !== J) throw new Error('invert: does not exist');
  return Et(i, e);
}
function Uw(t) {
  const e = (t - J) / wn;
  let n, r, i;
  for (n = t - J, r = 0; n % wn === ht; n /= wn, r++);
  for (i = wn; i < t && Bw(i, e, t) !== t - J; i++);
  if (r === 1) {
    const s = (t + J) / ls;
    return function (u, f) {
      const h = u.pow(f, s);
      if (!u.eql(u.sqr(h), f)) throw new Error('Cannot find square root');
      return h;
    };
  }
  const o = (n + J) / wn;
  return function (c, u) {
    if (c.pow(u, e) === c.neg(c.ONE)) throw new Error('Cannot find square root');
    let f = r,
      h = c.pow(c.mul(c.ONE, i), n),
      a = c.pow(u, o),
      d = c.pow(u, n);
    for (; !c.eql(d, c.ONE); ) {
      if (c.eql(d, c.ZERO)) return c.ZERO;
      let l = 1;
      for (let p = c.sqr(d); l < f && !c.eql(p, c.ONE); l++) p = c.sqr(p);
      const g = c.pow(h, J << BigInt(f - l - 1));
      (h = c.sqr(g)), (a = c.mul(a, g)), (d = c.mul(d, h)), (f = l);
    }
    return a;
  };
}
function Nw(t) {
  if (t % ls === Ow) {
    const e = (t + J) / ls;
    return function (r, i) {
      const o = r.pow(i, e);
      if (!r.eql(r.sqr(o), i)) throw new Error('Cannot find square root');
      return o;
    };
  }
  if (t % pu === lu) {
    const e = (t - lu) / pu;
    return function (r, i) {
      const o = r.mul(i, wn),
        s = r.pow(o, e),
        c = r.mul(i, s),
        u = r.mul(r.mul(c, wn), s),
        f = r.mul(c, r.sub(u, r.ONE));
      if (!r.eql(r.sqr(f), i)) throw new Error('Cannot find square root');
      return f;
    };
  }
  return Uw(t);
}
const Hw = [
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
function Lw(t) {
  const e = { ORDER: 'bigint', MASK: 'bigint', BYTES: 'isSafeInteger', BITS: 'isSafeInteger' },
    n = Hw.reduce((r, i) => ((r[i] = 'function'), r), e);
  return Dr(t, n);
}
function Cw(t, e, n) {
  if (n < ht) throw new Error('Expected power > 0');
  if (n === ht) return t.ONE;
  if (n === J) return e;
  let r = t.ONE,
    i = e;
  for (; n > ht; ) n & J && (r = t.mul(r, i)), (i = t.sqr(i)), (n >>= J);
  return r;
}
function $w(t, e) {
  const n = new Array(e.length),
    r = e.reduce((o, s, c) => (t.is0(s) ? o : ((n[c] = o), t.mul(o, s))), t.ONE),
    i = t.inv(r);
  return e.reduceRight((o, s, c) => (t.is0(s) ? o : ((n[c] = t.mul(o, n[c])), t.mul(o, s))), i), n;
}
function Wf(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length,
    r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Rw(t, e, n = !1, r = {}) {
  if (t <= ht) throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: o } = Wf(t, e);
  if (o > 2048) throw new Error('Field lengths over 2048 bytes are not supported');
  const s = Nw(t),
    c = Object.freeze({
      ORDER: t,
      BITS: i,
      BYTES: o,
      MASK: ic(i),
      ZERO: ht,
      ONE: J,
      create: (u) => Et(u, t),
      isValid: (u) => {
        if (typeof u != 'bigint')
          throw new Error(`Invalid field element: expected bigint, got ${typeof u}`);
        return ht <= u && u < t;
      },
      is0: (u) => u === ht,
      isOdd: (u) => (u & J) === J,
      neg: (u) => Et(-u, t),
      eql: (u, f) => u === f,
      sqr: (u) => Et(u * u, t),
      add: (u, f) => Et(u + f, t),
      sub: (u, f) => Et(u - f, t),
      mul: (u, f) => Et(u * f, t),
      pow: (u, f) => Cw(c, u, f),
      div: (u, f) => Et(u * ps(f, t), t),
      sqrN: (u) => u * u,
      addN: (u, f) => u + f,
      subN: (u, f) => u - f,
      mulN: (u, f) => u * f,
      inv: (u) => ps(u, t),
      sqrt: r.sqrt || ((u) => s(c, u)),
      invertBatch: (u) => $w(c, u),
      cmov: (u, f, h) => (h ? f : u),
      toBytes: (u) => (n ? rc(u, o) : cn(u, o)),
      fromBytes: (u) => {
        if (u.length !== o) throw new Error(`Fp.fromBytes: expected ${o}, got ${u.length}`);
        return n ? nc(u) : $t(u);
      },
    });
  return Object.freeze(c);
}
function Df(t) {
  if (typeof t != 'bigint') throw new Error('field order must be bigint');
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Vf(t) {
  const e = Df(t);
  return e + Math.ceil(e / 2);
}
function Fw(t, e, n = !1) {
  const r = t.length,
    i = Df(e),
    o = Vf(e);
  if (r < 16 || r < o || r > 1024) throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
  const s = n ? $t(t) : nc(t),
    c = Et(s, e - J) + J;
  return n ? rc(c, i) : cn(c, i);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Kw = BigInt(0),
  qo = BigInt(1);
function Mw(t, e) {
  const n = (i, o) => {
      const s = o.negate();
      return i ? s : o;
    },
    r = (i) => {
      const o = Math.ceil(e / i) + 1,
        s = 2 ** (i - 1);
      return { windows: o, windowSize: s };
    };
  return {
    constTimeNegate: n,
    unsafeLadder(i, o) {
      let s = t.ZERO,
        c = i;
      for (; o > Kw; ) o & qo && (s = s.add(c)), (c = c.double()), (o >>= qo);
      return s;
    },
    precomputeWindow(i, o) {
      const { windows: s, windowSize: c } = r(o),
        u = [];
      let f = i,
        h = f;
      for (let a = 0; a < s; a++) {
        (h = f), u.push(h);
        for (let d = 1; d < c; d++) (h = h.add(f)), u.push(h);
        f = h.double();
      }
      return u;
    },
    wNAF(i, o, s) {
      const { windows: c, windowSize: u } = r(i);
      let f = t.ZERO,
        h = t.BASE;
      const a = BigInt(2 ** i - 1),
        d = 2 ** i,
        l = BigInt(i);
      for (let g = 0; g < c; g++) {
        const p = g * u;
        let b = Number(s & a);
        (s >>= l), b > u && ((b -= d), (s += qo));
        const m = p,
          I = p + Math.abs(b) - 1,
          _ = g % 2 !== 0,
          w = b < 0;
        b === 0 ? (h = h.add(n(_, o[m]))) : (f = f.add(n(w, o[I])));
      }
      return { p: f, f: h };
    },
    wNAFCached(i, o, s, c) {
      const u = i._WINDOW_SIZE || 1;
      let f = o.get(i);
      return (
        f || ((f = this.precomputeWindow(i, u)), u !== 1 && o.set(i, c(f))), this.wNAF(u, f, s)
      );
    },
  };
}
function jf(t) {
  return (
    Lw(t.Fp),
    Dr(
      t,
      { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
      { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
    ),
    Object.freeze({ ...Wf(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Ww(t) {
  const e = jf(t);
  Dr(
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
  const { endo: n, Fp: r, a: i } = e;
  if (n) {
    if (!r.eql(i, r.ZERO))
      throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
    if (typeof n != 'object' || typeof n.beta != 'bigint' || typeof n.splitScalar != 'function')
      throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: Dw, hexToBytes: Vw } = xw,
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
      return { d: Dw(r), l: t.subarray(n + 2) };
    },
    toSig(t) {
      const { Err: e } = bn,
        n = typeof t == 'string' ? Vw(t) : t;
      if (!(n instanceof Uint8Array)) throw new Error('ui8a expected');
      let r = n.length;
      if (r < 2 || n[0] != 48) throw new e('Invalid signature tag');
      if (n[1] !== r - 2) throw new e('Invalid signature: incorrect length');
      const { d: i, l: o } = bn._parseInt(n.subarray(2)),
        { d: s, l: c } = bn._parseInt(o);
      if (c.length) throw new e('Invalid signature: left bytes after parsing');
      return { r: i, s };
    },
    hexFromSig(t) {
      const e = (f) => (Number.parseInt(f[0], 16) & 8 ? '00' + f : f),
        n = (f) => {
          const h = f.toString(16);
          return h.length & 1 ? `0${h}` : h;
        },
        r = e(n(t.s)),
        i = e(n(t.r)),
        o = r.length / 2,
        s = i.length / 2,
        c = n(o),
        u = n(s);
      return `30${n(s + o + 4)}02${u}${i}02${c}${r}`;
    },
  },
  Oe = BigInt(0),
  Yt = BigInt(1);
BigInt(2);
const du = BigInt(3);
BigInt(4);
function jw(t) {
  const e = Ww(t),
    { Fp: n } = e,
    r =
      e.toBytes ||
      ((g, p, b) => {
        const m = p.toAffine();
        return Sn(Uint8Array.from([4]), n.toBytes(m.x), n.toBytes(m.y));
      }),
    i =
      e.fromBytes ||
      ((g) => {
        const p = g.subarray(1),
          b = n.fromBytes(p.subarray(0, n.BYTES)),
          m = n.fromBytes(p.subarray(n.BYTES, 2 * n.BYTES));
        return { x: b, y: m };
      });
  function o(g) {
    const { a: p, b } = e,
      m = n.sqr(g),
      I = n.mul(m, g);
    return n.add(n.add(I, n.mul(g, p)), b);
  }
  if (!n.eql(n.sqr(e.Gy), o(e.Gx))) throw new Error('bad generator point: equation left != right');
  function s(g) {
    return typeof g == 'bigint' && Oe < g && g < e.n;
  }
  function c(g) {
    if (!s(g)) throw new Error('Expected valid bigint: 0 < bigint < curve.n');
  }
  function u(g) {
    const { allowedPrivateKeyLengths: p, nByteLength: b, wrapPrivateKey: m, n: I } = e;
    if (p && typeof g != 'bigint') {
      if ((g instanceof Uint8Array && (g = ur(g)), typeof g != 'string' || !p.includes(g.length)))
        throw new Error('Invalid key');
      g = g.padStart(b * 2, '0');
    }
    let _;
    try {
      _ = typeof g == 'bigint' ? g : $t(_t('private key', g, b));
    } catch {
      throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof g}`);
    }
    return m && (_ = Et(_, I)), c(_), _;
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
      const b = a.fromAffine(i(_t('pointHex', p)));
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
        I = o(p);
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
        m = n.mul(b, du),
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
        P = n.mul(e.b, du);
      let O = n.mul(b, _),
        L = n.mul(m, w),
        $ = n.mul(I, E),
        et = n.add(b, m),
        k = n.add(_, w);
      (et = n.mul(et, k)), (k = n.add(O, L)), (et = n.sub(et, k)), (k = n.add(b, I));
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
        (y = n.mul(et, y)),
        (y = n.sub(y, O)),
        (O = n.mul(et, L)),
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
      if ((c(p), p === Yt)) return this;
      const { endo: m } = e;
      if (!m) return l.unsafeLadder(this, p);
      let { k1neg: I, k1: _, k2neg: w, k2: E } = m.splitScalar(p),
        y = b,
        S = b,
        v = this;
      for (; _ > Oe || E > Oe; )
        _ & Yt && (y = y.add(v)),
          E & Yt && (S = S.add(v)),
          (v = v.double()),
          (_ >>= Yt),
          (E >>= Yt);
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
        _ = (E, y) => (y === Oe || y === Yt || !E.equals(I) ? E.multiplyUnsafe(y) : E.multiply(y)),
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
      if (p === Yt) return !0;
      if (b) return b(a, this);
      throw new Error('isTorsionFree() has not been declared for the elliptic curve');
    }
    clearCofactor() {
      const { h: p, clearCofactor: b } = e;
      return p === Yt ? this : b ? b(a, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(p = !0) {
      return this.assertValidity(), r(a, this, p);
    }
    toHex(p = !0) {
      return ur(this.toRawBytes(p));
    }
  }
  (a.BASE = new a(e.Gx, e.Gy, n.ONE)), (a.ZERO = new a(n.ZERO, n.ONE, n.ZERO));
  const d = e.nBitLength,
    l = Mw(a, e.endo ? Math.ceil(d / 2) : d);
  return {
    CURVE: e,
    ProjectivePoint: a,
    normPrivateKeyToScalar: u,
    weierstrassEquation: o,
    isWithinCurveOrder: s,
  };
}
function Gw(t) {
  const e = jf(t);
  return (
    Dr(
      e,
      { hash: 'hash', hmac: 'function', randomBytes: 'function' },
      { bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean' }
    ),
    Object.freeze({ lowS: !0, ...e })
  );
}
function qw(t) {
  const e = Gw(t),
    { Fp: n, n: r } = e,
    i = n.BYTES + 1,
    o = 2 * n.BYTES + 1;
  function s(k) {
    return Oe < k && k < n.ORDER;
  }
  function c(k) {
    return Et(k, r);
  }
  function u(k) {
    return ps(k, r);
  }
  const {
      ProjectivePoint: f,
      normPrivateKeyToScalar: h,
      weierstrassEquation: a,
      isWithinCurveOrder: d,
    } = jw({
      ...e,
      toBytes(k, x, U) {
        const W = x.toAffine(),
          F = n.toBytes(W.x),
          ft = Sn;
        return U
          ? ft(Uint8Array.from([x.hasEvenY() ? 2 : 3]), F)
          : ft(Uint8Array.from([4]), F, n.toBytes(W.y));
      },
      fromBytes(k) {
        const x = k.length,
          U = k[0],
          W = k.subarray(1);
        if (x === i && (U === 2 || U === 3)) {
          const F = $t(W);
          if (!s(F)) throw new Error('Point is not on curve');
          const ft = a(F);
          let Ft = n.sqrt(ft);
          const Kt = (Ft & Yt) === Yt;
          return ((U & 1) === 1) !== Kt && (Ft = n.neg(Ft)), { x: F, y: Ft };
        } else if (x === o && U === 4) {
          const F = n.fromBytes(W.subarray(0, n.BYTES)),
            ft = n.fromBytes(W.subarray(n.BYTES, 2 * n.BYTES));
          return { x: F, y: ft };
        } else
          throw new Error(
            `Point of length ${x} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`
          );
      },
    }),
    l = (k) => ur(cn(k, e.nByteLength));
  function g(k) {
    const x = r >> Yt;
    return k > x;
  }
  function p(k) {
    return g(k) ? c(-k) : k;
  }
  const b = (k, x, U) => $t(k.slice(x, U));
  class m {
    constructor(x, U, W) {
      (this.r = x), (this.s = U), (this.recovery = W), this.assertValidity();
    }
    static fromCompact(x) {
      const U = e.nByteLength;
      return (x = _t('compactSignature', x, U * 2)), new m(b(x, 0, U), b(x, U, 2 * U));
    }
    static fromDER(x) {
      const { r: U, s: W } = bn.toSig(_t('DER', x));
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
        ft = S(_t('msgHash', x));
      if (F == null || ![0, 1, 2, 3].includes(F)) throw new Error('recovery id invalid');
      const Ft = F === 2 || F === 3 ? U + e.n : U;
      if (Ft >= n.ORDER) throw new Error('recovery id 2 or 3 invalid');
      const Kt = F & 1 ? '03' : '02',
        Le = f.fromHex(Kt + l(Ft)),
        Ce = u(Ft),
        Fn = c(-ft * Ce),
        pr = c(W * Ce),
        $e = f.BASE.multiplyAndAddUnsafe(Le, Fn, pr);
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
      return ar(this.toDERHex());
    }
    toDERHex() {
      return bn.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return ar(this.toCompactHex());
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
      const k = Vf(e.n);
      return Fw(e.randomBytes(k), e.n);
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
    return x ? W === i || W === o : U ? W === 2 * i || W === 2 * o : k instanceof f;
  }
  function E(k, x, U = !0) {
    if (w(k)) throw new Error('first arg must be private key');
    if (!w(x)) throw new Error('second arg must be public key');
    return f.fromHex(x).multiply(h(k)).toRawBytes(U);
  }
  const y =
      e.bits2int ||
      function (k) {
        const x = $t(k),
          U = k.length * 8 - e.nBitLength;
        return U > 0 ? x >> BigInt(U) : x;
      },
    S =
      e.bits2int_modN ||
      function (k) {
        return c(y(k));
      },
    v = ic(e.nBitLength);
  function T(k) {
    if (typeof k != 'bigint') throw new Error('bigint expected');
    if (!(Oe <= k && k < v)) throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return cn(k, e.nByteLength);
  }
  function P(k, x, U = O) {
    if (['recovered', 'canonical'].some((ln) => ln in U))
      throw new Error('sign() legacy options not supported');
    const { hash: W, randomBytes: F } = e;
    let { lowS: ft, prehash: Ft, extraEntropy: Kt } = U;
    ft == null && (ft = !0), (k = _t('msgHash', k)), Ft && (k = _t('prehashed msgHash', W(k)));
    const Le = S(k),
      Ce = h(x),
      Fn = [T(Ce), T(Le)];
    if (Kt != null) {
      const ln = Kt === !0 ? F(n.BYTES) : Kt;
      Fn.push(_t('extraEntropy', ln));
    }
    const pr = Sn(...Fn),
      $e = Le;
    function Ao(ln) {
      const Kn = y(ln);
      if (!d(Kn)) return;
      const bc = u(Kn),
        Mn = f.BASE.multiply(Kn).toAffine(),
        ee = c(Mn.x);
      if (ee === Oe) return;
      const Wn = c(bc * c($e + ee * Ce));
      if (Wn === Oe) return;
      let Ec = (Mn.x === ee ? 0 : 2) | Number(Mn.y & Yt),
        mc = Wn;
      return ft && g(Wn) && ((mc = p(Wn)), (Ec ^= 1)), new m(ee, mc, Ec);
    }
    return { seed: pr, k2sig: Ao };
  }
  const O = { lowS: e.lowS, prehash: !1 },
    L = { lowS: e.lowS, prehash: !1 };
  function $(k, x, U = O) {
    const { seed: W, k2sig: F } = P(k, x, U),
      ft = e;
    return Mf(ft.hash.outputLen, ft.nByteLength, ft.hmac)(W, F);
  }
  f.BASE._setWindowSize(8);
  function et(k, x, U, W = L) {
    var Mn;
    const F = k;
    if (((x = _t('msgHash', x)), (U = _t('publicKey', U)), 'strict' in W))
      throw new Error('options.strict was renamed to lowS');
    const { lowS: ft, prehash: Ft } = W;
    let Kt, Le;
    try {
      if (typeof F == 'string' || F instanceof Uint8Array)
        try {
          Kt = m.fromDER(F);
        } catch (ee) {
          if (!(ee instanceof bn.Err)) throw ee;
          Kt = m.fromCompact(F);
        }
      else if (typeof F == 'object' && typeof F.r == 'bigint' && typeof F.s == 'bigint') {
        const { r: ee, s: Wn } = F;
        Kt = new m(ee, Wn);
      } else throw new Error('PARSE');
      Le = f.fromHex(U);
    } catch (ee) {
      if (ee.message === 'PARSE')
        throw new Error('signature must be Signature instance, Uint8Array or hex string');
      return !1;
    }
    if (ft && Kt.hasHighS()) return !1;
    Ft && (x = e.hash(x));
    const { r: Ce, s: Fn } = Kt,
      pr = S(x),
      $e = u(Fn),
      Ao = c(pr * $e),
      ln = c(Ce * $e),
      Kn = (Mn = f.BASE.multiplyAndAddUnsafe(Le, Ao, ln)) == null ? void 0 : Mn.toAffine();
    return Kn ? c(Kn.x) === Ce : !1;
  }
  return {
    CURVE: e,
    getPublicKey: _,
    getSharedSecret: E,
    sign: $,
    verify: et,
    ProjectivePoint: f,
    Signature: m,
    utils: I,
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function zw(t) {
  return { hash: t, hmac: (e, ...n) => $f(t, e, dw(...n)), randomBytes: Lf };
}
function Xw(t, e) {
  const n = (r) => qw({ ...t, ...zw(r) });
  return Object.freeze({ ...n(e), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const wo = BigInt(
    '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'
  ),
  Pi = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
  Gf = BigInt(1),
  xi = BigInt(2),
  yu = (t, e) => (t + e / xi) / e;
function qf(t) {
  const e = wo,
    n = BigInt(3),
    r = BigInt(6),
    i = BigInt(11),
    o = BigInt(22),
    s = BigInt(23),
    c = BigInt(44),
    u = BigInt(88),
    f = (t * t * t) % e,
    h = (f * f * t) % e,
    a = (Gt(h, n, e) * h) % e,
    d = (Gt(a, n, e) * h) % e,
    l = (Gt(d, xi, e) * f) % e,
    g = (Gt(l, i, e) * l) % e,
    p = (Gt(g, o, e) * g) % e,
    b = (Gt(p, c, e) * p) % e,
    m = (Gt(b, u, e) * b) % e,
    I = (Gt(m, c, e) * p) % e,
    _ = (Gt(I, n, e) * h) % e,
    w = (Gt(_, s, e) * g) % e,
    E = (Gt(w, r, e) * f) % e,
    y = Gt(E, xi, e);
  if (!ds.eql(ds.sqr(y), t)) throw new Error('Cannot find square root');
  return y;
}
const ds = Rw(wo, void 0, void 0, { sqrt: qf }),
  Vr = Xw(
    {
      a: BigInt(0),
      b: BigInt(7),
      Fp: ds,
      n: Pi,
      Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
      Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
      h: BigInt(1),
      lowS: !0,
      endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (t) => {
          const e = Pi,
            n = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
            r = -Gf * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
            i = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
            o = n,
            s = BigInt('0x100000000000000000000000000000000'),
            c = yu(o * t, e),
            u = yu(-r * t, e);
          let f = Et(t - c * n - u * i, e),
            h = Et(-c * r - u * o, e);
          const a = f > s,
            d = h > s;
          if ((a && (f = e - f), d && (h = e - h), f > s || h > s))
            throw new Error('splitScalar: Endomorphism failed, k=' + t);
          return { k1neg: a, k1: f, k2neg: d, k2: h };
        },
      },
    },
    Lt
  ),
  go = BigInt(0),
  zf = (t) => typeof t == 'bigint' && go < t && t < wo,
  Yw = (t) => typeof t == 'bigint' && go < t && t < Pi,
  wu = {};
function Oi(t, ...e) {
  let n = wu[t];
  if (n === void 0) {
    const r = Lt(Uint8Array.from(t, (i) => i.charCodeAt(0)));
    (n = Sn(r, r)), (wu[t] = n);
  }
  return Lt(Sn(n, ...e));
}
const oc = (t) => t.toRawBytes(!0).slice(1),
  ys = (t) => cn(t, 32),
  zo = (t) => Et(t, wo),
  Cr = (t) => Et(t, Pi),
  sc = Vr.ProjectivePoint,
  Zw = (t, e, n) => sc.BASE.multiplyAndAddUnsafe(t, e, n);
function ws(t) {
  let e = Vr.utils.normPrivateKeyToScalar(t),
    n = sc.fromPrivateKey(e);
  return { scalar: n.hasEvenY() ? e : Cr(-e), bytes: oc(n) };
}
function Xf(t) {
  if (!zf(t)) throw new Error('bad x: need 0 < x < p');
  const e = zo(t * t),
    n = zo(e * t + BigInt(7));
  let r = qf(n);
  r % xi !== go && (r = zo(-r));
  const i = new sc(t, r, Gf);
  return i.assertValidity(), i;
}
function Yf(...t) {
  return Cr($t(Oi('BIP0340/challenge', ...t)));
}
function Qw(t) {
  return ws(t).bytes;
}
function Jw(t, e, n = Lf(32)) {
  const r = _t('message', t),
    { bytes: i, scalar: o } = ws(e),
    s = _t('auxRand', n, 32),
    c = ys(o ^ $t(Oi('BIP0340/aux', s))),
    u = Oi('BIP0340/nonce', c, i, r),
    f = Cr($t(u));
  if (f === go) throw new Error('sign failed: k is zero');
  const { bytes: h, scalar: a } = ws(f),
    d = Yf(h, i, r),
    l = new Uint8Array(64);
  if ((l.set(h, 0), l.set(ys(Cr(a + d * o)), 32), !Zf(l, r, i)))
    throw new Error('sign: Invalid signature produced');
  return l;
}
function Zf(t, e, n) {
  const r = _t('signature', t, 64),
    i = _t('message', e),
    o = _t('publicKey', n, 32);
  try {
    const s = Xf($t(o)),
      c = $t(r.subarray(0, 32));
    if (!zf(c)) return !1;
    const u = $t(r.subarray(32, 64));
    if (!Yw(u)) return !1;
    const f = Yf(ys(c), oc(s), i),
      h = Zw(s, u, Cr(-f));
    return !(!h || !h.hasEvenY() || h.toAffine().x !== c);
  } catch {
    return !1;
  }
}
const ie = {
    getPublicKey: Qw,
    sign: Jw,
    verify: Zf,
    utils: {
      randomPrivateKey: Vr.utils.randomPrivateKey,
      lift_x: Xf,
      pointToBytes: oc,
      numberToBytesBE: cn,
      bytesToNumberBE: $t,
      taggedHash: Oi,
      mod: Et,
    },
  },
  tg = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
  Qf = Uint8Array.from({ length: 16 }, (t, e) => e),
  eg = Qf.map((t) => (9 * t + 5) % 16);
let cc = [Qf],
  uc = [eg];
for (let t = 0; t < 4; t++) for (let e of [cc, uc]) e.push(e[t].map((n) => tg[n]));
const Jf = [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((t) => new Uint8Array(t)),
  ng = cc.map((t, e) => t.map((n) => Jf[e][n])),
  rg = uc.map((t, e) => t.map((n) => Jf[e][n])),
  ig = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
  og = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
  si = (t, e) => (t << e) | (t >>> (32 - e));
function gu(t, e, n, r) {
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
const ci = new Uint32Array(16);
class sg extends Rf {
  constructor() {
    super(64, 20, 8, !0),
      (this.h0 = 1732584193),
      (this.h1 = -271733879),
      (this.h2 = -1732584194),
      (this.h3 = 271733878),
      (this.h4 = -1009589776);
  }
  get() {
    const { h0: e, h1: n, h2: r, h3: i, h4: o } = this;
    return [e, n, r, i, o];
  }
  set(e, n, r, i, o) {
    (this.h0 = e | 0), (this.h1 = n | 0), (this.h2 = r | 0), (this.h3 = i | 0), (this.h4 = o | 0);
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4) ci[l] = e.getUint32(n, !0);
    let r = this.h0 | 0,
      i = r,
      o = this.h1 | 0,
      s = o,
      c = this.h2 | 0,
      u = c,
      f = this.h3 | 0,
      h = f,
      a = this.h4 | 0,
      d = a;
    for (let l = 0; l < 5; l++) {
      const g = 4 - l,
        p = ig[l],
        b = og[l],
        m = cc[l],
        I = uc[l],
        _ = ng[l],
        w = rg[l];
      for (let E = 0; E < 16; E++) {
        const y = (si(r + gu(l, o, c, f) + ci[m[E]] + p, _[E]) + a) | 0;
        (r = a), (a = f), (f = si(c, 10) | 0), (c = o), (o = y);
      }
      for (let E = 0; E < 16; E++) {
        const y = (si(i + gu(g, s, u, h) + ci[I[E]] + b, w[E]) + d) | 0;
        (i = d), (d = h), (h = si(u, 10) | 0), (u = s), (s = y);
      }
    }
    this.set(
      (this.h1 + c + h) | 0,
      (this.h2 + f + d) | 0,
      (this.h3 + a + i) | 0,
      (this.h4 + r + s) | 0,
      (this.h0 + o + u) | 0
    );
  }
  roundClean() {
    ci.fill(0);
  }
  destroy() {
    (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
const cg = Hf(() => new sg());
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function ug(t) {
  if (!Number.isSafeInteger(t)) throw new Error(`Wrong integer: ${t}`);
}
function te(...t) {
  const e = (i, o) => (s) => i(o(s)),
    n = Array.from(t)
      .reverse()
      .reduce((i, o) => (i ? e(i, o.encode) : o.encode), void 0),
    r = t.reduce((i, o) => (i ? e(i, o.decode) : o.decode), void 0);
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
function jr(t, e = '=') {
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
      for (let i of n)
        if (typeof i != 'string') throw new Error(`padding.decode: non-string input=${i}`);
      let r = n.length;
      if ((r * t) % 8) throw new Error('Invalid padding: string should have whole number of bytes');
      for (; r > 0 && n[r - 1] === e; r--)
        if (!(((r - 1) * t) % 8)) throw new Error('Invalid padding: string has too much padding');
      return n.slice(0, r);
    },
  };
}
function th(t) {
  if (typeof t != 'function') throw new Error('normalize fn should be function');
  return { encode: (e) => e, decode: (e) => t(e) };
}
function bu(t, e, n) {
  if (e < 2) throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);
  if (n < 2) throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);
  if (!Array.isArray(t)) throw new Error('convertRadix: data should be array');
  if (!t.length) return [];
  let r = 0;
  const i = [],
    o = Array.from(t);
  for (
    o.forEach((s) => {
      if (s < 0 || s >= e) throw new Error(`Wrong integer: ${s}`);
    });
    ;

  ) {
    let s = 0,
      c = !0;
    for (let u = r; u < o.length; u++) {
      const f = o[u],
        h = e * s + f;
      if (!Number.isSafeInteger(h) || (e * s) / e !== s || h - f !== e * s)
        throw new Error('convertRadix: carry overflow');
      s = h % n;
      const a = Math.floor(h / n);
      if (((o[u] = a), !Number.isSafeInteger(a) || a * n + s !== h))
        throw new Error('convertRadix: carry overflow');
      if (c) a ? (c = !1) : (r = u);
      else continue;
    }
    if ((i.push(s), c)) break;
  }
  for (let s = 0; s < t.length - 1 && t[s] === 0; s++) i.push(0);
  return i.reverse();
}
const eh = (t, e) => (e ? eh(e, t % e) : t),
  Bi = (t, e) => t + (e - eh(t, e));
function gs(t, e, n, r) {
  if (!Array.isArray(t)) throw new Error('convertRadix2: data should be array');
  if (e <= 0 || e > 32) throw new Error(`convertRadix2: wrong from=${e}`);
  if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong to=${n}`);
  if (Bi(e, n) > 32)
    throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Bi(e, n)}`);
  let i = 0,
    o = 0;
  const s = 2 ** n - 1,
    c = [];
  for (const u of t) {
    if (u >= 2 ** e) throw new Error(`convertRadix2: invalid data word=${u} from=${e}`);
    if (((i = (i << e) | u), o + e > 32))
      throw new Error(`convertRadix2: carry overflow pos=${o} from=${e}`);
    for (o += e; o >= n; o -= n) c.push(((i >> (o - n)) & s) >>> 0);
    i &= 2 ** o - 1;
  }
  if (((i = (i << (n - o)) & s), !r && o >= e)) throw new Error('Excess padding');
  if (!r && i) throw new Error(`Non-zero padding: ${i}`);
  return r && o > 0 && c.push(i >>> 0), c;
}
function nh(t) {
  return {
    encode: (e) => {
      if (!(e instanceof Uint8Array)) throw new Error('radix.encode input should be Uint8Array');
      return bu(Array.from(e), 2 ** 8, t);
    },
    decode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != 'number'))
        throw new Error('radix.decode input should be array of strings');
      return Uint8Array.from(bu(e, t, 2 ** 8));
    },
  };
}
function Se(t, e = !1) {
  if (t <= 0 || t > 32) throw new Error('radix2: bits should be in (0..32]');
  if (Bi(8, t) > 32 || Bi(t, 8) > 32) throw new Error('radix2: carry overflow');
  return {
    encode: (n) => {
      if (!(n instanceof Uint8Array)) throw new Error('radix2.encode input should be Uint8Array');
      return gs(Array.from(n), 8, t, !e);
    },
    decode: (n) => {
      if (!Array.isArray(n) || (n.length && typeof n[0] != 'number'))
        throw new Error('radix2.decode input should be array of strings');
      return Uint8Array.from(gs(n, t, 8, e));
    },
  };
}
function Eu(t) {
  if (typeof t != 'function') throw new Error('unsafeWrapper fn should be function');
  return function (...e) {
    try {
      return t.apply(null, e);
    } catch {}
  };
}
function rh(t, e) {
  if (typeof e != 'function') throw new Error('checksum fn should be function');
  return {
    encode(n) {
      if (!(n instanceof Uint8Array))
        throw new Error('checksum.encode: input should be Uint8Array');
      const r = e(n).slice(0, t),
        i = new Uint8Array(n.length + t);
      return i.set(n), i.set(r, n.length), i;
    },
    decode(n) {
      if (!(n instanceof Uint8Array))
        throw new Error('checksum.decode: input should be Uint8Array');
      const r = n.slice(0, -t),
        i = e(r).slice(0, t),
        o = n.slice(-t);
      for (let s = 0; s < t; s++) if (i[s] !== o[s]) throw new Error('Invalid checksum');
      return r;
    },
  };
}
const ag = { alphabet: ue, chain: te, checksum: rh, radix: nh, radix2: Se, join: ae, padding: jr },
  ih = te(Se(4), ue('0123456789ABCDEF'), ae('')),
  oh = te(Se(5), ue('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), jr(5), ae('')),
  fg = te(Se(5), ue('0123456789ABCDEFGHIJKLMNOPQRSTUV'), jr(5), ae('')),
  hg = te(
    Se(5),
    ue('0123456789ABCDEFGHJKMNPQRSTVWXYZ'),
    ae(''),
    th((t) => t.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1'))
  ),
  sh = te(
    Se(6),
    ue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
    jr(6),
    ae('')
  ),
  ch = te(
    Se(6),
    ue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'),
    jr(6),
    ae('')
  ),
  lg = te(Se(6), ue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), ae('')),
  ac = (t) => te(nh(58), ue(t), ae('')),
  $r = ac('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'),
  pg = ac('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'),
  dg = ac('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz'),
  mu = [0, 2, 3, 5, 6, 7, 9, 10, 11],
  uh = {
    encode(t) {
      let e = '';
      for (let n = 0; n < t.length; n += 8) {
        const r = t.subarray(n, n + 8);
        e += $r.encode(r).padStart(mu[r.length], '1');
      }
      return e;
    },
    decode(t) {
      let e = [];
      for (let n = 0; n < t.length; n += 11) {
        const r = t.slice(n, n + 11),
          i = mu.indexOf(r.length),
          o = $r.decode(r);
        for (let s = 0; s < o.length - i; s++)
          if (o[s] !== 0) throw new Error('base58xmr: wrong padding');
        e = e.concat(Array.from(o.slice(o.length - i)));
      }
      return Uint8Array.from(e);
    },
  },
  ah = (t) =>
    te(
      rh(4, (e) => t(t(e))),
      $r
    ),
  bs = te(ue('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), ae('')),
  Su = [996825010, 642813549, 513874426, 1027748829, 705979059];
function Tr(t) {
  const e = t >> 25;
  let n = (t & 33554431) << 5;
  for (let r = 0; r < Su.length; r++) ((e >> r) & 1) === 1 && (n ^= Su[r]);
  return n;
}
function Tu(t, e, n = 1) {
  const r = t.length;
  let i = 1;
  for (let o = 0; o < r; o++) {
    const s = t.charCodeAt(o);
    if (s < 33 || s > 126) throw new Error(`Invalid prefix (${t})`);
    i = Tr(i) ^ (s >> 5);
  }
  i = Tr(i);
  for (let o = 0; o < r; o++) i = Tr(i) ^ (t.charCodeAt(o) & 31);
  for (let o of e) i = Tr(i) ^ o;
  for (let o = 0; o < 6; o++) i = Tr(i);
  return (i ^= n), bs.encode(gs([i % 2 ** 30], 30, 5, !1));
}
function fh(t) {
  const e = t === 'bech32' ? 1 : 734539939,
    n = Se(5),
    r = n.decode,
    i = n.encode,
    o = Eu(r);
  function s(h, a, d = 90) {
    if (typeof h != 'string')
      throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);
    if (!Array.isArray(a) || (a.length && typeof a[0] != 'number'))
      throw new Error(`bech32.encode words should be array of numbers, not ${typeof a}`);
    const l = h.length + 7 + a.length;
    if (d !== !1 && l > d) throw new TypeError(`Length ${l} exceeds limit ${d}`);
    const g = h.toLowerCase(),
      p = Tu(g, a, e);
    return `${g}1${bs.encode(a)}${p}`;
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
    const b = bs.decode(p).slice(0, -6),
      m = Tu(g, b, e);
    if (!p.endsWith(m)) throw new Error(`Invalid checksum in ${h}: expected "${m}"`);
    return { prefix: g, words: b };
  }
  const u = Eu(c);
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
    fromWordsUnsafe: o,
    toWords: i,
  };
}
const Ui = fh('bech32'),
  fc = fh('bech32m'),
  Ni = { encode: (t) => new TextDecoder().decode(t), decode: (t) => new TextEncoder().encode(t) },
  Q = te(
    Se(4),
    ue('0123456789abcdef'),
    ae(''),
    th((t) => {
      if (typeof t != 'string' || t.length % 2)
        throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);
      return t.toLowerCase();
    })
  ),
  Hi = {
    utf8: Ni,
    hex: Q,
    base16: ih,
    base32: oh,
    base64: sh,
    base64url: ch,
    base58: $r,
    base58xmr: uh,
  },
  hh =
    'Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr',
  lh = (t, e) => {
    if (typeof t != 'string' || !Hi.hasOwnProperty(t)) throw new TypeError(hh);
    if (!(e instanceof Uint8Array)) throw new TypeError('bytesToString() expects Uint8Array');
    return Hi[t].encode(e);
  },
  yg = lh,
  ph = (t, e) => {
    if (!Hi.hasOwnProperty(t)) throw new TypeError(hh);
    if (typeof e != 'string') throw new TypeError('stringToBytes() expects string');
    return Hi[t].decode(e);
  },
  wg = ph,
  P1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        assertNumber: ug,
        base16: ih,
        base32: oh,
        base32crockford: hg,
        base32hex: fg,
        base58: $r,
        base58check: ah,
        base58flickr: pg,
        base58xmr: uh,
        base58xrp: dg,
        base64: sh,
        base64url: ch,
        base64urlnopad: lg,
        bech32: Ui,
        bech32m: fc,
        bytes: wg,
        bytesToString: lh,
        hex: Q,
        str: yg,
        stringToBytes: ph,
        utf8: Ni,
        utils: ag,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  rt = new Uint8Array(),
  hc = new Uint8Array([0]);
function Z(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function Es(...t) {
  if (t.length === 1) return t[0];
  const e = t.reduce((r, i) => r + i.length, 0),
    n = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const o = t[r];
    n.set(o, i), (i += o.length);
  }
  return n;
}
const Jt = (t) => t instanceof Uint8Array;
class dh {
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
      (hn(e)
        ? (n = Number(e.decodeStream(this)))
        : typeof e == 'number'
          ? (n = e)
          : typeof e == 'string' && (n = Ci(this.path, e.split('/'))),
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
    if (!Jt(e)) throw this.err(`find: needle is not bytes! ${e}`);
    if (this.bitPos) throw this.err('findByte: bitPos not empty');
    if (!e.length) throw this.err('find: needle is empty');
    for (let r = n; (r = this.data.indexOf(e[0], r)) !== -1; r++) {
      if (r === -1 || this.data.length - r < e.length) return;
      if (Z(e, this.data.subarray(r, r + e.length))) return r;
    }
  }
  finish() {
    if (!(this.isEnd() || this.hasPtr))
      throw this.err(
        `${this.leftBytes} bytes ${this.bitPos} bits left after unpack: ${Q.encode(this.data.slice(this.pos))}`
      );
  }
  fieldPathPush(e) {
    this.fieldPath.push(e);
  }
  fieldPathPop() {
    this.fieldPath.pop();
  }
}
class yh {
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
    let e = Es(...this.buffers);
    for (let n of this.ptrs) {
      const r = e.length;
      e = Es(e, n.buffer);
      const i = n.ptr.encode(r);
      for (let o = 0; o < i.length; o++) e[n.pos + o] = i[o];
    }
    return e;
  }
  length(e, n) {
    if (e === null) return;
    if (hn(e)) return e.encodeStream(this, n);
    let r;
    if (
      (typeof e == 'number' ? (r = e) : typeof e == 'string' && (r = Ci(this.path, e.split('/'))),
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
const Li = (t) => Uint8Array.from(t).reverse();
function _u(t, e, n, r) {
  if (r) {
    const i = 2n ** (n - 1n);
    if (e < -i || e >= i) throw t.err('sInt: value out of bounds');
  } else if (0n > e || e >= 2n ** n) throw t.err('uInt: value out of bounds');
}
function dt(t) {
  return {
    ...t,
    encode: (e) => {
      const n = new yh();
      return t.encodeStream(n, e), n.buffer;
    },
    decode: (e) => {
      const n = new dh(e),
        r = t.decodeStream(n);
      return n.finish(), r;
    },
  };
}
function Ci(t, e) {
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
function hn(t) {
  return (
    typeof t.encode == 'function' &&
    typeof t.encodeStream == 'function' &&
    typeof t.decode == 'function' &&
    typeof t.decodeStream == 'function'
  );
}
function gg() {
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
const bg = {
  encode: (t) => {
    if (t > BigInt(Number.MAX_SAFE_INTEGER))
      throw new Error(`coders.number: element bigger than MAX_SAFE_INTEGER=${t}`);
    return Number(t);
  },
  decode: (t) => BigInt(t),
};
function Eg(t) {
  return { encode: (e) => t[e], decode: (e) => t[e] };
}
function mg(t) {
  const e = 10n ** BigInt(t);
  return {
    encode: (n) => {
      let r = (n < 0n ? -n : n).toString(10),
        i = r.length - t;
      i < 0 && ((r = r.padStart(r.length - i, '0')), (i = 0));
      let o = r.length - 1;
      for (; o >= i && r[o] === '0'; o--);
      let [s, c] = [r.slice(0, i), r.slice(i, o + 1)];
      return s || (s = '0'), n < 0n && (s = '-' + s), c ? `${s}.${c}` : s;
    },
    decode: (n) => {
      let r = !1;
      n.startsWith('-') && ((r = !0), (n = n.slice(1)));
      let i = n.indexOf('.');
      i = i === -1 ? n.length : i;
      const [o, s] = [n.slice(0, i), n.slice(i + 1)],
        c = BigInt(o) * e,
        u = Math.min(s.length, t),
        f = BigInt(s.slice(0, u)) * 10n ** BigInt(t - u),
        h = c + f;
      return r ? -h : h;
    },
  };
}
function Sg(t) {
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
const Gr = { dict: gg, number: bg, tsEnum: Eg, decimal: mg, match: Sg },
  Dt = (t, e = !1, n = !1) =>
    dt({
      size: t,
      encodeStream: (r, i) => {
        if (typeof i != 'number' && typeof i != 'bigint')
          throw r.err(`bigint: invalid value: ${i}`);
        let o = BigInt(i);
        const s = BigInt(t);
        _u(r, o, 8n * s, !!n);
        const c = 2n ** (8n * s - 1n);
        n && o < 0 && (o = o | c);
        let u = [];
        for (let h = 0; h < t; h++) u.push(Number(o & 255n)), (o >>= 8n);
        let f = new Uint8Array(u).reverse();
        r.bytes(e ? f.reverse() : f);
      },
      decodeStream: (r) => {
        const i = BigInt(t);
        let o = r.bytes(t);
        e && (o = Li(o));
        const s = Li(o),
          c = 2n ** (8n * i - 1n);
        let u = 0n;
        for (let f = 0; f < s.length; f++) u |= BigInt(s[f]) << (8n * BigInt(f));
        return n && u & c && (u = (u ^ c) - c), _u(r, u, 8n * i, !!n), u;
      },
    });
Dt(32, !0);
const Tg = Dt(32, !1);
Dt(32, !0, !0);
Dt(32, !1, !0);
Dt(16, !0);
Dt(16, !1);
Dt(16, !0, !0);
Dt(16, !1, !0);
const di = Dt(8, !0);
Dt(8, !1);
const _g = Dt(8, !0, !0);
Dt(8, !1, !0);
const Te = (t, e = !1, n = !1) => {
    if (t > 6) throw new Error('int supports size up to 6 bytes (48 bits), for other use bigint');
    return Eo(Dt(t, e, n), Gr.number);
  },
  M = Te(4, !0),
  Ag = Te(4, !1),
  Pr = Te(4, !0, !0);
Te(4, !1, !0);
const Au = Te(2, !0);
Te(2, !1);
Te(2, !0, !0);
Te(2, !1, !0);
const en = Te(1, !1);
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
const X = (t, e = !1) =>
    dt({
      size: typeof t == 'number' ? t : void 0,
      encodeStream: (n, r) => {
        if (!Jt(r)) throw n.err(`bytes: invalid value ${r}`);
        Jt(t) || n.length(t, r.length), n.bytes(e ? Li(r) : r), Jt(t) && n.bytes(t);
      },
      decodeStream: (n) => {
        let r;
        if (Jt(t)) {
          const i = n.find(t);
          if (!i) throw n.err('bytes: cannot find terminator');
          (r = n.bytes(i - n.pos)), n.bytes(t.length);
        } else r = n.bytes(t === null ? n.leftBytes : n.length(t));
        return e ? Li(r) : r;
      },
    }),
  bo = (t, e = !1) => {
    const n = X(t, e);
    return dt({
      size: n.size,
      encodeStream: (r, i) => n.encodeStream(r, Ni.decode(i)),
      decodeStream: (r) => Ni.encode(n.decodeStream(r)),
    });
  };
bo(hc);
const Ig = (t, e = !1, n = !1) => {
  const r = X(t, e);
  return dt({
    size: r.size,
    encodeStream: (i, o) => {
      if (n && !o.startsWith('0x'))
        throw new Error('hex(withZero=true).encode input should start with 0x');
      const s = Q.decode(n ? o.slice(2) : o);
      return r.encodeStream(i, s);
    },
    decodeStream: (i) => (n ? '0x' : '') + Q.encode(r.decodeStream(i)),
  });
};
function Eo(t, e) {
  if (!hn(t)) throw new Error(`apply: invalid inner value ${t}`);
  return dt({
    size: t.size,
    encodeStream: (n, r) => {
      let i;
      try {
        i = e.decode(r);
      } catch (o) {
        throw n.err('' + o);
      }
      return t.encodeStream(n, i);
    },
    decodeStream: (n) => {
      const r = t.decodeStream(n);
      try {
        return e.encode(r);
      } catch (i) {
        throw n.err('' + i);
      }
    },
  });
}
function fe(t, e) {
  if (!hn(t)) throw new Error(`validate: invalid inner value ${t}`);
  return dt({
    size: t.size,
    encodeStream: (n, r) => t.encodeStream(n, e(r)),
    decodeStream: (n) => e(t.decodeStream(n)),
  });
}
const vg = (t, e = !1) =>
  dt({
    size: t.length,
    encodeStream: (n, r) => {
      !!r !== e && n.bytes(t);
    },
    decodeStream: (n) => {
      let r = n.leftBytes >= t.length;
      return r && ((r = Z(n.bytes(t.length, !0), t)), r && n.bytes(t.length)), r !== e;
    },
  });
function kg(t, e, n) {
  if (!hn(e)) throw new Error(`flagged: invalid inner value ${e}`);
  return dt({
    encodeStream: (r, i) => {
      typeof t == 'string'
        ? Ci(r.path, t.split('/'))
          ? e.encodeStream(r, i)
          : n && e.encodeStream(r, n)
        : (t.encodeStream(r, !!i), i ? e.encodeStream(r, i) : n && e.encodeStream(r, n));
    },
    decodeStream: (r) => {
      let i = !1;
      if ((typeof t == 'string' ? (i = Ci(r.path, t.split('/'))) : (i = t.decodeStream(r)), i))
        return e.decodeStream(r);
      n && e.decodeStream(r);
    },
  });
}
function mo(t, e, n = !0) {
  if (!hn(t)) throw new Error(`flagged: invalid inner value ${t}`);
  return dt({
    size: t.size,
    encodeStream: (r, i) => t.encodeStream(r, e),
    decodeStream: (r) => {
      const i = t.decodeStream(r);
      if ((n && typeof i != 'object' && i !== e) || (Jt(e) && !Z(e, i)))
        throw r.err(`magic: invalid value: ${i} !== ${e}`);
    },
  });
}
function wh(t) {
  let e = 0;
  for (let n of t) {
    if (!n.size) return;
    e += n.size;
  }
  return e;
}
function Ut(t) {
  if (Array.isArray(t)) throw new Error('Packed.Struct: got array instead of object');
  return dt({
    size: wh(Object.values(t)),
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
function Pg(t) {
  if (!Array.isArray(t)) throw new Error(`Packed.Tuple: got ${typeof t} instead of array`);
  return dt({
    size: wh(t),
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
function xg(t, e) {
  if (!hn(e)) throw new Error(`prefix: invalid inner value ${e}`);
  if (Jt(t)) throw new Error('prefix: len cannot be Uint8Array');
  const n = X(t);
  return dt({
    size: typeof t == 'number' ? t : void 0,
    encodeStream: (r, i) => {
      const o = new yh(r.path, r.fieldPath);
      e.encodeStream(o, i), n.encodeStream(r, o.buffer);
    },
    decodeStream: (r) => {
      const i = n.decodeStream(r);
      return e.decodeStream(new dh(i, r.path, r.fieldPath));
    },
  });
}
function Rt(t, e) {
  if (!hn(e)) throw new Error(`array: invalid inner value ${e}`);
  return dt({
    size: typeof t == 'number' && e.size ? t * e.size : void 0,
    encodeStream: (n, r) => {
      if (!Array.isArray(r)) throw n.err(`array: invalid value ${r}`);
      Jt(t) || n.length(t, r.length), n.path.push(r);
      for (let i = 0; i < r.length; i++) {
        n.fieldPathPush('' + i);
        const o = r[i],
          s = n.pos;
        if ((e.encodeStream(n, o), Jt(t))) {
          if (t.length > n.pos - s) continue;
          const c = n.buffer.subarray(s, n.pos);
          if (Z(c.subarray(0, t.length), t))
            throw n.err(`array: inner element encoding same as separator. elm=${o} data=${c}`);
        }
        n.fieldPathPop();
      }
      n.path.pop(), Jt(t) && n.bytes(t);
    },
    decodeStream: (n) => {
      let r = [];
      if (t === null) {
        let i = 0;
        for (
          n.path.push(r);
          !n.isEnd() &&
          (n.fieldPathPush('' + i++),
          r.push(e.decodeStream(n)),
          n.fieldPathPop(),
          !(e.size && n.leftBytes < e.size));

        );
        n.path.pop();
      } else if (Jt(t)) {
        let i = 0;
        for (n.path.push(r); ; ) {
          if (Z(n.bytes(t.length, !0), t)) {
            n.bytes(t.length);
            break;
          }
          n.fieldPathPush('' + i++), r.push(e.decodeStream(n)), n.fieldPathPop();
        }
        n.path.pop();
      } else {
        n.fieldPathPush('arrayLen');
        const i = n.length(t);
        n.fieldPathPop(), n.path.push(r);
        for (let o = 0; o < i; o++)
          n.fieldPathPush('' + o), r.push(e.decodeStream(n)), n.fieldPathPop();
        n.path.pop();
      }
      return r;
    },
  });
}
mo(X(0), rt);
/*! scure-btc-signer - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const {
    ProjectivePoint: So,
    sign: Iu,
    getPublicKey: Og,
  } = Vr,
  $i = Vr.CURVE.n,
  Ur = (t, e) => (t === void 0 ? e : t),
  Y = Jt,
  gh = (t) => cg(Lt(t)),
  Ye = (...t) => Lt(Lt(gn(...t))),
  gn = Es,
  bh = ah(Lt);
function Ri(t) {
  if (Array.isArray(t)) return t.map((e) => Ri(e));
  if (t instanceof Uint8Array) return Uint8Array.from(t);
  if (['number', 'bigint', 'boolean', 'string', 'undefined'].includes(typeof t)) return t;
  if (t === null) return t;
  if (typeof t == 'object')
    return Object.fromEntries(Object.entries(t).map(([e, n]) => [e, Ri(n)]));
  throw new Error(`cloneDeep: unknown type=${t} (${typeof t})`);
}
var Ct;
(function (t) {
  (t[(t.ecdsa = 0)] = 'ecdsa'), (t[(t.schnorr = 1)] = 'schnorr');
})(Ct || (Ct = {}));
function fr(t, e) {
  const n = t.length;
  if (e === Ct.ecdsa) {
    if (n === 32) throw new Error('Expected non-Schnorr key');
    return So.fromHex(t), t;
  } else if (e === Ct.schnorr) {
    if (n !== 32) throw new Error('Expected 32-byte Schnorr key');
    return ie.utils.lift_x(ie.utils.bytesToNumberBE(t)), t;
  } else throw new Error('Unknown key type');
}
function xr(t, e) {
  try {
    return fr(t, e), !0;
  } catch {
    return !1;
  }
}
const vu = (t) => t.r < $i / 2n;
function Bg(t, e, n = !1) {
  let r = Iu(t, e);
  if (n && !vu(r)) {
    const i = new Uint8Array(32);
    for (
      let o = 0;
      o < Number.MAX_SAFE_INTEGER &&
      (i.set(M.encode(o)), (r = Iu(t, e, { extraEntropy: i })), !vu(r));
      o++
    );
  }
  return r.toDERRawBytes();
}
function Eh(t, e) {
  const n = ie.utils,
    r = n.taggedHash('TapTweak', t, e),
    i = n.bytesToNumberBE(r);
  if (i >= $i) throw new Error('tweak higher than curve order');
  return i;
}
function Ug(t, e = new Uint8Array()) {
  const n = ie.utils,
    r = n.bytesToNumberBE(t),
    i = So.fromPrivateKey(r),
    o = i.hasEvenY() ? r : n.mod(-r, $i),
    s = n.pointToBytes(i),
    c = Eh(s, e);
  return n.numberToBytesBE(n.mod(o + c, $i), 32);
}
function Ng(t, e) {
  const n = ie.utils,
    r = Eh(t, e),
    o = n.lift_x(n.bytesToNumberBE(t)).add(So.fromPrivateKey(r)),
    s = o.hasEvenY() ? 0 : 1;
  return [n.pointToBytes(o), s];
}
const ms = fe(X(null), (t) => fr(t, Ct.ecdsa)),
  Fi = fe(X(32), (t) => fr(t, Ct.schnorr)),
  ku = fe(X(null), (t) => {
    if (t.length !== 64 && t.length !== 65)
      throw new Error('Schnorr signature should be 64 or 65 bytes long');
    return t;
  }),
  lc = { bech32: 'bc', pubKeyHash: 0, scriptHash: 5, wif: 128 },
  Hg = 8,
  Lg = 2,
  dn = 0,
  mh = 4294967295,
  ui = new Uint8Array(32);
Gr.decimal(Hg);
function Pu(t, e) {
  if (!Y(t) || !Y(e)) throw new Error(`cmp: wrong type a=${typeof t} b=${typeof e}`);
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
const St = dt({
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
      if ((typeof n == 'number' && (n = Sh().encode(BigInt(n))), !Y(n)))
        throw new Error(`Wrong Script OP=${n} (${typeof n})`);
      const r = n.length;
      r < ct.PUSHDATA1
        ? t.byte(r)
        : r <= 255
          ? (t.byte(ct.PUSHDATA1), t.byte(r))
          : r <= 65535
            ? (t.byte(ct.PUSHDATA2), t.bytes(Au.encode(r)))
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
        else if (n === ct.PUSHDATA1) r = en.decodeStream(t);
        else if (n === ct.PUSHDATA2) r = Au.decodeStream(t);
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
function Sh(t = 6, e = !1) {
  return dt({
    encodeStream: (n, r) => {
      if (r === 0n) return;
      const i = r < 0,
        o = BigInt(r),
        s = [];
      for (let c = i ? -o : o; c; c >>= 8n) s.push(Number(c & 0xffn));
      s[s.length - 1] >= 128 ? s.push(i ? 128 : 0) : i && (s[s.length - 1] |= 128),
        n.bytes(new Uint8Array(s));
    },
    decodeStream: (n) => {
      const r = n.leftBytes;
      if (r > t) throw new Error(`ScriptNum: number (${r}) bigger than limit=${t}`);
      if (r === 0) return 0n;
      if (e && !(n.data[r - 1] & 127) && (r <= 1 || !(n.data[r - 2] & 128)))
        throw new Error('Non-minimally encoded ScriptNum');
      let i = 0,
        o = 0n;
      for (let s = 0; s < r; ++s) (i = n.byte()), (o |= BigInt(i) << (8n * BigInt(s)));
      return i >= 128 && ((o &= (2n ** BigInt(r * 8) - 1n) >> 1n), (o = -o)), o;
    },
  });
}
function Cg(t, e = 4, n = !0) {
  if (typeof t == 'number') return t;
  if (Y(t))
    try {
      const r = Sh(e, n).decode(t);
      return r > Number.MAX_SAFE_INTEGER ? void 0 : Number(r);
    } catch {
      return;
    }
}
const xu = {
    253: [253, 2, 253n, 65535n],
    254: [254, 4, 65536n, 4294967295n],
    255: [255, 8, 4294967296n, 18446744073709551615n],
  },
  To = dt({
    encodeStream: (t, e) => {
      if ((typeof e == 'number' && (e = BigInt(e)), 0n <= e && e <= 252n)) return t.byte(Number(e));
      for (const [n, r, i, o] of Object.values(xu))
        if (!(i > e || e > o)) {
          t.byte(n);
          for (let s = 0; s < r; s++) t.byte(Number((e >> (8n * BigInt(s))) & 0xffn));
          return;
        }
      throw t.err(`VarInt too big: ${e}`);
    },
    decodeStream: (t) => {
      const e = t.byte();
      if (e <= 252) return BigInt(e);
      const [n, r, i] = xu[e];
      let o = 0n;
      for (let s = 0; s < r; s++) o |= BigInt(t.byte()) << (8n * BigInt(s));
      if (o < i) throw t.err(`Wrong CompactSize(${8 * r})`);
      return o;
    },
  }),
  oe = Eo(To, Gr.number),
  Ou = (t) => Rt(To, t),
  re = X(To),
  $g = Ut({ txid: X(32, !0), index: M, finalScriptSig: re, sequence: M }),
  Yn = Ut({ amount: di, script: re }),
  Rg = { amount: 0xffffffffffffffffn, script: rt },
  pc = Rt(oe, re),
  Fg = Ut({
    version: Pr,
    segwitFlag: vg(new Uint8Array([0, 1])),
    inputs: Ou($g),
    outputs: Ou(Yn),
    witnesses: kg('segwitFlag', Rt('inputs/length', pc)),
    lockTime: M,
  });
function Kg(t) {
  if (t.segwitFlag && t.witnesses && !t.witnesses.length)
    throw new Error('Segwit flag with empty witnesses array');
  return t;
}
const ge = fe(Fg, Kg);
function Ss(t) {
  const [e, n, r, i, o, s] = t;
  return { type: e, kc: n, vc: r, reqInc: i, allowInc: o, silentIgnore: s };
}
const _o = Ut({ fingerprint: Ag, path: Rt(null, M) }),
  Mg = Ut({ version: en, internalKey: X(32), merklePath: Rt(null, X(32)) }),
  yi = fe(Mg, (t) => {
    if (t.merklePath.length > 128)
      throw new Error('TaprootControlBlock: merklePath should be of length 0..128 (inclusive)');
    return t;
  }),
  Th = Ut({ hashes: Rt(oe, X(32)), der: _o }),
  Wg = X(78),
  Dg = Ut({ pubKey: Fi, leafHash: X(32) }),
  Vg = Rt(null, Ut({ depth: en, version: en, script: re })),
  ut = X(null),
  Bu = X(20),
  _r = X(32),
  dc = {
    unsignedTx: [0, !1, ge, [0], [0], !1],
    xpub: [1, Wg, _o, [], [0, 2], !1],
    txVersion: [2, !1, M, [2], [2], !1],
    fallbackLocktime: [3, !1, M, [], [2], !1],
    inputCount: [4, !1, oe, [2], [2], !1],
    outputCount: [5, !1, oe, [2], [2], !1],
    txModifiable: [6, !1, en, [], [2], !1],
    version: [251, !1, M, [], [0, 2], !1],
    proprietary: [252, ut, ut, [], [0, 2], !1],
  },
  Ki = {
    nonWitnessUtxo: [0, !1, ge, [], [0, 2], !1],
    witnessUtxo: [1, !1, Yn, [], [0, 2], !1],
    partialSig: [2, ms, ut, [], [0, 2], !1],
    sighashType: [3, !1, M, [], [0, 2], !1],
    redeemScript: [4, !1, ut, [], [0, 2], !1],
    witnessScript: [5, !1, ut, [], [0, 2], !1],
    bip32Derivation: [6, ms, _o, [], [0, 2], !1],
    finalScriptSig: [7, !1, ut, [], [0, 2], !1],
    finalScriptWitness: [8, !1, pc, [], [0, 2], !1],
    porCommitment: [9, !1, ut, [], [0, 2], !1],
    ripemd160: [10, Bu, ut, [], [0, 2], !1],
    sha256: [11, _r, ut, [], [0, 2], !1],
    hash160: [12, Bu, ut, [], [0, 2], !1],
    hash256: [13, _r, ut, [], [0, 2], !1],
    txid: [14, !1, _r, [2], [2], !0],
    index: [15, !1, M, [2], [2], !0],
    sequence: [16, !1, M, [], [2], !0],
    requiredTimeLocktime: [17, !1, M, [], [2], !1],
    requiredHeightLocktime: [18, !1, M, [], [2], !1],
    tapKeySig: [19, !1, ku, [], [0, 2], !1],
    tapScriptSig: [20, Dg, ku, [], [0, 2], !1],
    tapLeafScript: [21, yi, ut, [], [0, 2], !1],
    tapBip32Derivation: [22, _r, Th, [], [0, 2], !1],
    tapInternalKey: [23, !1, Fi, [], [0, 2], !1],
    tapMerkleRoot: [24, !1, _r, [], [0, 2], !1],
    proprietary: [252, ut, ut, [], [0, 2], !1],
  },
  jg = [
    'txid',
    'sequence',
    'index',
    'witnessUtxo',
    'nonWitnessUtxo',
    'finalScriptSig',
    'finalScriptWitness',
    'unknown',
  ],
  Gg = ['partialSig', 'finalScriptSig', 'finalScriptWitness', 'tapKeySig', 'tapScriptSig'],
  Mi = {
    redeemScript: [0, !1, ut, [], [0, 2], !1],
    witnessScript: [1, !1, ut, [], [0, 2], !1],
    bip32Derivation: [2, ms, _o, [], [0, 2], !1],
    amount: [3, !1, _g, [2], [2], !0],
    script: [4, !1, ut, [2], [2], !0],
    tapInternalKey: [5, !1, Fi, [], [0, 2], !1],
    tapTree: [6, !1, Vg, [], [0, 2], !1],
    tapBip32Derivation: [7, Fi, Th, [], [0, 2], !1],
    proprietary: [252, ut, ut, [], [0, 2], !1],
  },
  qg = [],
  Uu = Rt(hc, Ut({ key: xg(oe, Ut({ type: oe, key: X(null) })), value: X(oe) }));
Ut({ type: oe, key: X(null) });
function yc(t) {
  const e = {};
  for (const n in t) {
    const [r, i, o] = t[n];
    e[r] = [n, i, o];
  }
  return dt({
    encodeStream: (n, r) => {
      let i = [];
      for (const o in t) {
        const s = r[o];
        if (s === void 0) continue;
        const [c, u, f] = t[o];
        if (!u) i.push({ key: { type: c, key: rt }, value: f.encode(s) });
        else {
          const h = s.map(([a, d]) => [u.encode(a), f.encode(d)]);
          h.sort((a, d) => Pu(a[0], d[0]));
          for (const [a, d] of h) i.push({ key: { key: a, type: c }, value: d });
        }
      }
      if (r.unknown) {
        r.unknown.sort((o, s) => Pu(o[0].key, s[0].key));
        for (const [o, s] of r.unknown) i.push({ key: o, value: s });
      }
      Uu.encodeStream(n, i);
    },
    decodeStream: (n) => {
      const r = Uu.decodeStream(n),
        i = {},
        o = {};
      for (const s of r) {
        let c = 'unknown',
          u = s.key.key,
          f = s.value;
        if (e[s.key.type]) {
          const [h, a, d] = e[s.key.type];
          if (((c = h), !a && u.length))
            throw new Error(
              `PSBT: Non-empty key for ${c} (key=${Q.encode(u)} value=${Q.encode(f)}`
            );
          if (((u = a ? a.decode(u) : void 0), (f = d.decode(f)), !a)) {
            if (i[c]) throw new Error(`PSBT: Same keys: ${c} (key=${u} value=${f})`);
            (i[c] = f), (o[c] = !0);
            continue;
          }
        } else u = { type: s.key.type, key: s.key.key };
        if (o[c]) throw new Error(`PSBT: Key type with empty key and no key=${c} val=${f}`);
        i[c] || (i[c] = []), i[c].push([u, f]);
      }
      return i;
    },
  });
}
function Nu(t, e) {
  if (!Z(t.hash, Lt(e))) throw new Error('checkScript: wsh wrong witnessScript hash');
  const n = Zt.decode(e);
  if (n.type === 'tr' || n.type === 'tr_ns' || n.type === 'tr_ms')
    throw new Error(`checkScript: P2${n.type} cannot be wrapped in P2SH`);
  if (n.type === 'wpkh' || n.type === 'sh')
    throw new Error(`checkScript: P2${n.type} cannot be wrapped in P2WSH`);
}
function Hu(t, e, n) {
  if (t) {
    const r = Zt.decode(t);
    if (r.type === 'tr_ns' || r.type === 'tr_ms' || r.type === 'ms' || r.type == 'pk')
      throw new Error(`checkScript: non-wrapped ${r.type}`);
    if (r.type === 'sh' && e) {
      if (!Z(r.hash, gh(e))) throw new Error('checkScript: sh wrong redeemScript hash');
      const i = Zt.decode(e);
      if (i.type === 'tr' || i.type === 'tr_ns' || i.type === 'tr_ms')
        throw new Error(`checkScript: P2${i.type} cannot be wrapped in P2SH`);
      if (i.type === 'sh') throw new Error('checkScript: P2SH cannot be wrapped in P2SH');
    }
    r.type === 'wsh' && n && Nu(r, n);
  }
  if (e) {
    const r = Zt.decode(e);
    r.type === 'wsh' && n && Nu(r, n);
  }
}
const wc = fe(yc(Ki), (t) => {
    if (t.finalScriptWitness && !t.finalScriptWitness.length)
      throw new Error('validateInput: wmpty finalScriptWitness');
    if (t.partialSig && !t.partialSig.length) throw new Error('Empty partialSig');
    if (t.partialSig) for (const [e] of t.partialSig) fr(e, Ct.ecdsa);
    if (t.bip32Derivation) for (const [e] of t.bip32Derivation) fr(e, Ct.ecdsa);
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
        (!Z(t.witnessUtxo.script, n.script) || t.witnessUtxo.amount !== n.amount)
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
      const n = Nr.fromRaw(ge.encode(t.nonWitnessUtxo)),
        r = Q.encode(t.txid);
      if (n.id !== r) throw new Error(`nonWitnessUtxo: wrong txid, exp=${r} got=${n.id}`);
    }
    return t;
  }),
  gc = fe(yc(Mi), (t) => {
    if (t.bip32Derivation) for (const [e] of t.bip32Derivation) fr(e, Ct.ecdsa);
    return t;
  }),
  _h = fe(yc(dc), (t) => {
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
  zg = Ut({
    magic: mo(bo(new Uint8Array([255])), 'psbt'),
    global: _h,
    inputs: Rt('global/unsignedTx/inputs/length', wc),
    outputs: Rt(null, gc),
  }),
  Xg = Ut({
    magic: mo(bo(new Uint8Array([255])), 'psbt'),
    global: _h,
    inputs: Rt('global/inputCount', wc),
    outputs: Rt('global/outputCount', gc),
  });
Ut({
  magic: mo(bo(new Uint8Array([255])), 'psbt'),
  items: Rt(null, Eo(Rt(hc, Pg([Ig(oe), X(To)])), Gr.dict())),
});
function Xo(t, e, n) {
  for (const r in n) {
    if (r === 'unknown' || !e[r]) continue;
    const { allowInc: i } = Ss(e[r]);
    if (!i.includes(t)) throw new Error(`PSBTv${t}: field ${r} is not allowed`);
  }
  for (const r in e) {
    const { reqInc: i } = Ss(e[r]);
    if (i.includes(t) && n[r] === void 0) throw new Error(`PSBTv${t}: missing required field ${r}`);
  }
}
function Lu(t, e, n) {
  const r = {};
  for (const i in n) {
    const o = i;
    if (o !== 'unknown') {
      if (!e[o]) continue;
      const { allowInc: s, silentIgnore: c } = Ss(e[o]);
      if (!s.includes(t)) {
        if (c) continue;
        throw new Error(
          `Failed to serialize in PSBTv${t}: ${o} but versions allows inclusion=${s}`
        );
      }
    }
    r[o] = n[o];
  }
  return r;
}
function Ah(t) {
  const e = (t && t.global && t.global.version) || 0;
  Xo(e, dc, t.global);
  for (const s of t.inputs) Xo(e, Ki, s);
  for (const s of t.outputs) Xo(e, Mi, s);
  const n = e ? t.global.inputCount : t.global.unsignedTx.inputs.length;
  if (t.inputs.length < n) throw new Error('Not enough inputs');
  const r = t.inputs.slice(n);
  if (r.length > 1 || (r.length && Object.keys(r[0]).length))
    throw new Error(`Unexpected inputs left in tx=${r}`);
  const i = e ? t.global.outputCount : t.global.unsignedTx.outputs.length;
  if (t.outputs.length < i) throw new Error('Not outputs inputs');
  const o = t.outputs.slice(i);
  if (o.length > 1 || (o.length && Object.keys(o[0]).length))
    throw new Error(`Unexpected outputs left in tx=${o}`);
  return t;
}
function Yo(t, e, n, r) {
  const i = { ...n, ...e };
  for (const o in t) {
    const s = o,
      [c, u, f] = t[s],
      h = r && !r.includes(o);
    if (e[o] === void 0 && o in e) {
      if (h) throw new Error(`Cannot remove signed field=${o}`);
      delete i[o];
    } else if (u) {
      const a = n && n[o] ? n[o] : [];
      let d = e[s];
      if (d) {
        if (!Array.isArray(d)) throw new Error(`keyMap(${o}): KV pairs should be [k, v][]`);
        d = d.map((p) => {
          if (p.length !== 2) throw new Error(`keyMap(${o}): KV pairs should be [k, v][]`);
          return [
            typeof p[0] == 'string' ? u.decode(Q.decode(p[0])) : p[0],
            typeof p[1] == 'string' ? f.decode(Q.decode(p[1])) : p[1],
          ];
        });
        const l = {},
          g = (p, b, m) => {
            if (l[p] === void 0) {
              l[p] = [b, m];
              return;
            }
            const I = Q.encode(f.encode(l[p][1])),
              _ = Q.encode(f.encode(m));
            if (I !== _) throw new Error(`keyMap(${s}): same key=${p} oldVal=${I} newVal=${_}`);
          };
        for (const [p, b] of a) {
          const m = Q.encode(u.encode(p));
          g(m, p, b);
        }
        for (const [p, b] of d) {
          const m = Q.encode(u.encode(p));
          if (b === void 0) {
            if (h) throw new Error(`Cannot remove signed field=${s}/${p}`);
            delete l[m];
          } else g(m, p, b);
        }
        i[s] = Object.values(l);
      }
    } else if (typeof i[o] == 'string') i[o] = f.decode(Q.decode(i[o]));
    else if (h && o in e && n && n[o] !== void 0 && !Z(f.encode(e[o]), f.encode(n[o])))
      throw new Error(`Cannot change signed field=${o}`);
  }
  for (const o in i) t[o] || delete i[o];
  return i;
}
const Cu = fe(zg, Ah),
  $u = fe(Xg, Ah),
  Zo = Ut({ txid: X(32, !0), index: M }),
  Yg = {
    encode(t) {
      if (!(t.length !== 2 || !Y(t[0]) || !xr(t[0], Ct.ecdsa) || t[1] !== 'CHECKSIG'))
        return { type: 'pk', pubkey: t[0] };
    },
    decode: (t) => (t.type === 'pk' ? [t.pubkey, 'CHECKSIG'] : void 0),
  },
  Zg = {
    encode(t) {
      if (
        !(t.length !== 5 || t[0] !== 'DUP' || t[1] !== 'HASH160' || !Y(t[2])) &&
        !(t[3] !== 'EQUALVERIFY' || t[4] !== 'CHECKSIG')
      )
        return { type: 'pkh', hash: t[2] };
    },
    decode: (t) =>
      t.type === 'pkh' ? ['DUP', 'HASH160', t.hash, 'EQUALVERIFY', 'CHECKSIG'] : void 0,
  },
  Qg = {
    encode(t) {
      if (!(t.length !== 3 || t[0] !== 'HASH160' || !Y(t[1]) || t[2] !== 'EQUAL'))
        return { type: 'sh', hash: t[1] };
    },
    decode: (t) => (t.type === 'sh' ? ['HASH160', t.hash, 'EQUAL'] : void 0),
  },
  Jg = {
    encode(t) {
      if (!(t.length !== 2 || t[0] !== 0 || !Y(t[1])) && t[1].length === 32)
        return { type: 'wsh', hash: t[1] };
    },
    decode: (t) => (t.type === 'wsh' ? [0, t.hash] : void 0),
  },
  t1 = {
    encode(t) {
      if (!(t.length !== 2 || t[0] !== 0 || !Y(t[1])) && t[1].length === 20)
        return { type: 'wpkh', hash: t[1] };
    },
    decode: (t) => (t.type === 'wpkh' ? [0, t.hash] : void 0),
  },
  e1 = {
    encode(t) {
      const e = t.length - 1;
      if (t[e] !== 'CHECKMULTISIG') return;
      const n = t[0],
        r = t[e - 1];
      if (typeof n != 'number' || typeof r != 'number') return;
      const i = t.slice(1, -2);
      if (r === i.length) {
        for (const o of i) if (!Y(o)) return;
        return { type: 'ms', m: n, pubkeys: i };
      }
    },
    decode: (t) =>
      t.type === 'ms' ? [t.m, ...t.pubkeys, t.pubkeys.length, 'CHECKMULTISIG'] : void 0,
  },
  n1 = {
    encode(t) {
      if (!(t.length !== 2 || t[0] !== 1 || !Y(t[1]))) return { type: 'tr', pubkey: t[1] };
    },
    decode: (t) => (t.type === 'tr' ? [1, t.pubkey] : void 0),
  };
Lt(So.BASE.toRawBytes(!1));
const r1 = {
    encode(t) {
      const e = t.length - 1;
      if (t[e] !== 'CHECKSIG') return;
      const n = [];
      for (let r = 0; r < e; r++) {
        const i = t[r];
        if (r & 1) {
          if (i !== 'CHECKSIGVERIFY' || r === e - 1) return;
          continue;
        }
        if (!Y(i)) return;
        n.push(i);
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
  i1 = {
    encode(t) {
      const e = t.length - 1;
      if (t[e] !== 'NUMEQUAL' || t[1] !== 'CHECKSIG') return;
      const n = [],
        r = Cg(t[e - 1]);
      if (typeof r == 'number') {
        for (let i = 0; i < e - 1; i++) {
          const o = t[i];
          if (i & 1) {
            if (o !== (i === 1 ? 'CHECKSIG' : 'CHECKSIGADD'))
              throw new Error('OutScript.encode/tr_ms: wrong element');
            continue;
          }
          if (!Y(o)) throw new Error('OutScript.encode/tr_ms: wrong key element');
          n.push(o);
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
  o1 = {
    encode(t) {
      return { type: 'unknown', script: St.encode(t) };
    },
    decode: (t) => (t.type === 'unknown' ? St.decode(t.script) : void 0),
  },
  s1 = [Yg, Zg, Qg, Jg, t1, e1, n1, r1, i1, o1],
  c1 = Eo(St, Gr.match(s1)),
  Zt = fe(c1, (t) => {
    if (t.type === 'pk' && !xr(t.pubkey, Ct.ecdsa)) throw new Error('OutScript/pk: wrong key');
    if (
      (t.type === 'pkh' || t.type === 'sh' || t.type === 'wpkh') &&
      (!Y(t.hash) || t.hash.length !== 20)
    )
      throw new Error(`OutScript/${t.type}: wrong hash`);
    if (t.type === 'wsh' && (!Y(t.hash) || t.hash.length !== 32))
      throw new Error('OutScript/wsh: wrong hash');
    if (t.type === 'tr' && (!Y(t.pubkey) || !xr(t.pubkey, Ct.schnorr)))
      throw new Error('OutScript/tr: wrong taproot public key');
    if ((t.type === 'ms' || t.type === 'tr_ns' || t.type === 'tr_ms') && !Array.isArray(t.pubkeys))
      throw new Error('OutScript/multisig: wrong pubkeys array');
    if (t.type === 'ms') {
      const e = t.pubkeys.length;
      for (const n of t.pubkeys)
        if (!xr(n, Ct.ecdsa)) throw new Error('OutScript/multisig: wrong pubkey');
      if (t.m <= 0 || e > 16 || t.m > e) throw new Error('OutScript/multisig: invalid params');
    }
    if (t.type === 'tr_ns' || t.type === 'tr_ms') {
      for (const e of t.pubkeys)
        if (!xr(e, Ct.schnorr)) throw new Error(`OutScript/${t.type}: wrong pubkey`);
    }
    if (t.type === 'tr_ms') {
      const e = t.pubkeys.length;
      if (t.m <= 0 || e > 999 || t.m > e) throw new Error('OutScript/tr_ms: invalid params');
    }
    return t;
  });
function Ih(t, e) {
  if (e.length < 2 || e.length > 40) throw new Error('Witness: invalid length');
  if (t > 16) throw new Error('Witness: invalid version');
  if (t === 0 && !(e.length === 20 || e.length === 32))
    throw new Error('Witness: invalid length for version');
}
function Qo(t, e, n = lc) {
  Ih(t, e);
  const r = t === 0 ? Ui : fc;
  return r.encode(n.bech32, [t].concat(r.toWords(e)));
}
function Ru(t, e) {
  return bh.encode(gn(Uint8Array.from(e), t));
}
function u1(t = lc) {
  return {
    encode(e) {
      const { type: n } = e;
      if (n === 'wpkh') return Qo(0, e.hash, t);
      if (n === 'wsh') return Qo(0, e.hash, t);
      if (n === 'tr') return Qo(1, e.pubkey, t);
      if (n === 'pkh') return Ru(e.hash, [t.pubKeyHash]);
      if (n === 'sh') return Ru(e.hash, [t.scriptHash]);
      throw new Error(`Unknown address type=${n}`);
    },
    decode(e) {
      if (e.length < 14 || e.length > 74) throw new Error('Invalid address length');
      if (t.bech32 && e.toLowerCase().startsWith(t.bech32)) {
        let r;
        try {
          if (((r = Ui.decode(e)), r.words[0] !== 0))
            throw new Error(`bech32: wrong version=${r.words[0]}`);
        } catch {
          if (((r = fc.decode(e)), r.words[0] === 0))
            throw new Error(`bech32m: wrong version=${r.words[0]}`);
        }
        if (r.prefix !== t.bech32) throw new Error(`wrong bech32 prefix=${r.prefix}`);
        const [i, ...o] = r.words,
          s = Ui.fromWords(o);
        if ((Ih(i, s), i === 0 && s.length === 32)) return { type: 'wsh', hash: s };
        if (i === 0 && s.length === 20) return { type: 'wpkh', hash: s };
        if (i === 1 && s.length === 32) return { type: 'tr', pubkey: s };
        throw new Error('Unknown witness program');
      }
      const n = bh.decode(e);
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
var Ts;
(function (t) {
  (t[(t.DEFAULT = 0)] = 'DEFAULT'),
    (t[(t.ALL = 1)] = 'ALL'),
    (t[(t.NONE = 2)] = 'NONE'),
    (t[(t.SINGLE = 3)] = 'SINGLE'),
    (t[(t.DEFAULT_ANYONECANPAY = 128)] = 'DEFAULT_ANYONECANPAY'),
    (t[(t.ALL_ANYONECANPAY = 129)] = 'ALL_ANYONECANPAY'),
    (t[(t.NONE_ANYONECANPAY = 130)] = 'NONE_ANYONECANPAY'),
    (t[(t.SINGLE_ANYONECANPAY = 131)] = 'SINGLE_ANYONECANPAY');
})(Ts || (Ts = {}));
function a1(t) {
  if (typeof t != 'number' || typeof Ts[t] != 'string') throw new Error(`Invalid SigHash=${t}`);
  return t;
}
function Fu(t) {
  const e = t & 31;
  return { isAny: !!(t & G.ANYONECANPAY), isNone: e === G.NONE, isSingle: e === G.SINGLE };
}
function ai(t) {
  if (t.txid === void 0 || t.index === void 0)
    throw new Error('Transaction/input: txid and index required');
  return {
    txid: t.txid,
    index: t.index,
    sequence: Ur(t.sequence, mh),
    finalScriptSig: Ur(t.finalScriptSig, rt),
  };
}
function Ku(t) {
  for (const e in t) {
    const n = e;
    jg.includes(n) || delete t[n];
  }
}
function jn(t) {
  if (t.script === void 0 || t.amount === void 0)
    throw new Error('Transaction/output: script and amount required');
  return { script: t.script, amount: t.amount };
}
const f1 = 192,
  Jo = (t, e = f1) => ie.utils.taggedHash('TapLeaf', new Uint8Array([e]), re.encode(t));
function h1(t, e, n, r = rt) {
  return Z(n, e) && ((t = Ug(t, r)), (e = ie.getPublicKey(t))), { privKey: t, pubKey: e };
}
const l1 = {}.toString;
function p1(t) {
  if (t !== void 0 && l1.call(t) !== '[object Object]')
    throw new Error(`Wrong object type for transaction options: ${t}`);
  const e = {
    ...t,
    version: Ur(t.version, Lg),
    lockTime: Ur(t.lockTime, 0),
    PSBTVersion: Ur(t.PSBTVersion, 0),
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
class Nr {
  constructor(e = {}) {
    (this.global = {}), (this.inputs = []), (this.outputs = []);
    const n = (this.opts = p1(e));
    n.lockTime !== dn && (this.global.fallbackLocktime = n.lockTime),
      (this.global.txVersion = n.version);
  }
  static fromRaw(e, n = {}) {
    const r = ge.decode(e),
      i = new Nr({ ...n, version: r.version, lockTime: r.lockTime });
    for (const o of r.outputs) i.addOutput(o);
    if (((i.outputs = r.outputs), (i.inputs = r.inputs), r.witnesses))
      for (let o = 0; o < r.witnesses.length; o++) i.inputs[o].finalScriptWitness = r.witnesses[o];
    return i;
  }
  static fromPSBT(e, n = {}) {
    let r;
    try {
      r = Cu.decode(e);
    } catch (a) {
      try {
        r = $u.decode(e);
      } catch {
        throw a;
      }
    }
    const i = r.global.version || 0;
    if (i !== 0 && i !== 2) throw new Error(`Wrong PSBT version=${i}`);
    const o = r.global.unsignedTx,
      s = i === 0 ? (o == null ? void 0 : o.version) : r.global.txVersion,
      c = i === 0 ? (o == null ? void 0 : o.lockTime) : r.global.fallbackLocktime,
      u = new Nr({ ...n, version: s, lockTime: c, PSBTVersion: i }),
      f = i === 0 ? (o == null ? void 0 : o.inputs.length) : r.global.inputCount;
    u.inputs = r.inputs.slice(0, f).map((a, d) => {
      var l;
      return {
        finalScriptSig: rt,
        ...((l = r.global.unsignedTx) == null ? void 0 : l.inputs[d]),
        ...a,
      };
    });
    const h = i === 0 ? (o == null ? void 0 : o.outputs.length) : r.global.outputCount;
    return (
      (u.outputs = r.outputs.slice(0, h).map((a, d) => {
        var l;
        return { ...a, ...((l = r.global.unsignedTx) == null ? void 0 : l.outputs[d]) };
      })),
      (u.global = { ...r.global, txVersion: s }),
      c !== dn && (u.global.fallbackLocktime = c),
      u
    );
  }
  toPSBT(e = this.opts.PSBTVersion) {
    if (e !== 0 && e !== 2) throw new Error(`Wrong PSBT version=${e}`);
    const n = this.inputs.map((o) => Lu(e, Ki, o));
    for (const o of n)
      o.partialSig && !o.partialSig.length && delete o.partialSig,
        o.finalScriptSig && !o.finalScriptSig.length && delete o.finalScriptSig,
        o.finalScriptWitness && !o.finalScriptWitness.length && delete o.finalScriptWitness;
    const r = this.outputs.map((o) => Lu(e, Mi, o)),
      i = { ...this.global };
    return (
      e === 0
        ? ((i.unsignedTx = ge.decode(this.unsignedTx)),
          delete i.fallbackLocktime,
          delete i.txVersion)
        : ((i.version = e),
          (i.txVersion = this.version),
          (i.inputCount = this.inputs.length),
          (i.outputCount = this.outputs.length),
          i.fallbackLocktime && i.fallbackLocktime === dn && delete i.fallbackLocktime),
      this.opts.bip174jsCompat && (n.length || n.push({}), r.length || r.push({})),
      (e === 0 ? Cu : $u).encode({ global: i, inputs: n, outputs: r })
    );
  }
  get lockTime() {
    let e = dn,
      n = 0,
      r = dn,
      i = 0;
    for (const o of this.inputs)
      o.requiredHeightLocktime && ((e = Math.max(e, o.requiredHeightLocktime)), n++),
        o.requiredTimeLocktime && ((r = Math.max(r, o.requiredTimeLocktime)), i++);
    return n && n >= i ? e : r !== dn ? r : this.global.fallbackLocktime || dn;
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
      i = [];
    for (let o = 0; o < this.inputs.length; o++) {
      if (this.inputStatus(o) === 'unsigned') continue;
      const { sigInputs: c, sigOutputs: u } = this.inputSighash(o);
      if ((c === G.ANYONECANPAY ? r.push(o) : (e = !1), u === G.ALL)) n = !1;
      else if (u === G.SINGLE) i.push(o);
      else if (u !== G.NONE) throw new Error(`Wrong signature hash output type: ${u}`);
    }
    return { addInput: e, addOutput: n, inputs: r, outputs: i };
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
    const n = this.outputs.map(jn);
    this.hasWitnesses && (e += 2),
      (e += 4 * oe.encode(this.inputs.length).length),
      (e += 4 * oe.encode(this.outputs.length).length);
    for (const r of this.inputs) e += 160 + 4 * re.encode(r.finalScriptSig || rt).length;
    for (const r of n) e += 32 + 4 * re.encode(r.script).length;
    if (this.hasWitnesses)
      for (const r of this.inputs)
        r.finalScriptWitness && (e += pc.encode(r.finalScriptWitness).length);
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
        .map(ai)
        .map((r) => ({ ...r, finalScriptSig: (e && r.finalScriptSig) || rt })),
      outputs: this.outputs.map(jn),
      witnesses: this.inputs.map((r) => r.finalScriptWitness || []),
      segwitFlag: n && this.hasWitnesses,
    });
  }
  get unsignedTx() {
    return this.toBytes(!1, !1);
  }
  get hex() {
    return Q.encode(this.toBytes(!0, this.hasWitnesses));
  }
  get hash() {
    if (!this.isFinal) throw new Error('Transaction is not finalized');
    return Q.encode(Ye(this.toBytes(!0)));
  }
  get id() {
    if (!this.isFinal) throw new Error('Transaction is not finalized');
    return Q.encode(Ye(this.toBytes(!0)).reverse());
  }
  checkInputIdx(e) {
    if (!Number.isSafeInteger(e) || 0 > e || e >= this.inputs.length)
      throw new Error(`Wrong input index=${e}`);
  }
  getInput(e) {
    return this.checkInputIdx(e), Ri(this.inputs[e]);
  }
  get inputsLength() {
    return this.inputs.length;
  }
  normalizeInput(e, n, r) {
    let { nonWitnessUtxo: i, txid: o } = e;
    typeof i == 'string' && (i = Q.decode(i)),
      Y(i) && (i = ge.decode(i)),
      i === void 0 && (i = n == null ? void 0 : n.nonWitnessUtxo),
      typeof o == 'string' && (o = Q.decode(o)),
      o === void 0 && (o = n == null ? void 0 : n.txid);
    let s = { ...n, ...e, nonWitnessUtxo: i, txid: o };
    s.nonWitnessUtxo === void 0 && delete s.nonWitnessUtxo,
      s.sequence === void 0 && (s.sequence = mh),
      s.tapMerkleRoot === null && delete s.tapMerkleRoot,
      (s = Yo(Ki, s, n, r)),
      wc.encode(s);
    let c;
    return (
      s.nonWitnessUtxo && s.index !== void 0
        ? (c = s.nonWitnessUtxo.outputs[s.index])
        : s.witnessUtxo && (c = s.witnessUtxo),
      c && !this.opts.disableScriptCheck && Hu(c && c.script, s.redeemScript, s.witnessScript),
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
    let i;
    if (!r) {
      const o = this.signStatus();
      (!o.addInput || o.inputs.includes(e)) && (i = Gg);
    }
    this.inputs[e] = this.normalizeInput(n, this.inputs[e], i);
  }
  checkOutputIdx(e) {
    if (!Number.isSafeInteger(e) || 0 > e || e >= this.outputs.length)
      throw new Error(`Wrong output index=${e}`);
  }
  getOutput(e) {
    return this.checkOutputIdx(e), Ri(this.outputs[e]);
  }
  get outputsLength() {
    return this.outputs.length;
  }
  normalizeOutput(e, n, r) {
    let { amount: i, script: o } = e;
    if ((i === void 0 && (i = n == null ? void 0 : n.amount), typeof i != 'bigint'))
      throw new Error('amount must be bigint sats');
    typeof o == 'string' && (o = Q.decode(o)), o === void 0 && (o = n == null ? void 0 : n.script);
    let s = { ...n, ...e, amount: i, script: o };
    if (
      (s.amount === void 0 && delete s.amount,
      (s = Yo(Mi, s, n, r)),
      gc.encode(s),
      s.script && !this.opts.allowUnknownOutputs && Zt.decode(s.script).type === 'unknown')
    )
      throw new Error(
        'Transaction/output: unknown output script type, there is a chance that input is unspendable. Pass allowUnknownScript=true, if you sure'
      );
    return this.opts.disableScriptCheck || Hu(s.script, s.redeemScript, s.witnessScript), s;
  }
  addOutput(e, n = !1) {
    if (!n && !this.signStatus().addOutput)
      throw new Error('Tx has signed outputs, cannot add new one');
    return this.outputs.push(this.normalizeOutput(e)), this.outputs.length - 1;
  }
  updateOutput(e, n, r = !1) {
    this.checkOutputIdx(e);
    let i;
    if (!r) {
      const o = this.signStatus();
      (!o.addOutput || o.outputs.includes(e)) && (i = qg);
    }
    this.outputs[e] = this.normalizeOutput(n, this.outputs[e], i);
  }
  addOutputAddress(e, n, r = lc) {
    return this.addOutput({ script: Zt.encode(u1(r).decode(e)), amount: n });
  }
  get fee() {
    let e = 0n;
    for (const r of this.inputs) {
      const i = this.prevOut(r);
      if (!i) throw new Error('Empty input amount');
      e += i.amount;
    }
    const n = this.outputs.map(jn);
    for (const r of n) e -= r.amount;
    return e;
  }
  preimageLegacy(e, n, r) {
    const { isAny: i, isNone: o, isSingle: s } = Fu(r);
    if (e < 0 || !Number.isSafeInteger(e)) throw new Error(`Invalid input idx=${e}`);
    if ((s && e >= this.outputs.length) || e >= this.inputs.length) return Tg.encode(1n);
    n = St.encode(St.decode(n).filter((h) => h !== 'CODESEPARATOR'));
    let c = this.inputs.map(ai).map((h, a) => ({ ...h, finalScriptSig: a === e ? n : rt }));
    i
      ? (c = [c[e]])
      : (o || s) && (c = c.map((h, a) => ({ ...h, sequence: a === e ? h.sequence : 0 })));
    let u = this.outputs.map(jn);
    o ? (u = []) : s && (u = u.slice(0, e).fill(Rg).concat([u[e]]));
    const f = ge.encode({
      lockTime: this.lockTime,
      version: this.version,
      segwitFlag: !1,
      inputs: c,
      outputs: u,
    });
    return Ye(f, Pr.encode(r));
  }
  preimageWitnessV0(e, n, r, i) {
    const { isAny: o, isNone: s, isSingle: c } = Fu(r);
    let u = ui,
      f = ui,
      h = ui;
    const a = this.inputs.map(ai),
      d = this.outputs.map(jn);
    o || (u = Ye(...a.map(Zo.encode))),
      !o && !c && !s && (f = Ye(...a.map((g) => M.encode(g.sequence)))),
      !c && !s ? (h = Ye(...d.map(Yn.encode))) : c && e < d.length && (h = Ye(Yn.encode(d[e])));
    const l = a[e];
    return Ye(
      Pr.encode(this.version),
      u,
      f,
      X(32, !0).encode(l.txid),
      M.encode(l.index),
      re.encode(n),
      di.encode(i),
      M.encode(l.sequence),
      h,
      M.encode(this.lockTime),
      M.encode(r)
    );
  }
  preimageWitnessV1(e, n, r, i, o = -1, s, c = 192, u) {
    if (!Array.isArray(i) || this.inputs.length !== i.length)
      throw new Error(`Invalid amounts array=${i}`);
    if (!Array.isArray(n) || this.inputs.length !== n.length)
      throw new Error(`Invalid prevOutScript array=${n}`);
    const f = [en.encode(0), en.encode(r), Pr.encode(this.version), M.encode(this.lockTime)],
      h = r === G.DEFAULT ? G.ALL : r & 3,
      a = r & G.ANYONECANPAY,
      d = this.inputs.map(ai),
      l = this.outputs.map(jn);
    a !== G.ANYONECANPAY &&
      f.push(
        ...[
          d.map(Zo.encode),
          i.map(di.encode),
          n.map(re.encode),
          d.map((p) => M.encode(p.sequence)),
        ].map((p) => Lt(gn(...p)))
      ),
      h === G.ALL && f.push(Lt(gn(...l.map(Yn.encode))));
    const g = (u ? 1 : 0) | (s ? 2 : 0);
    if ((f.push(new Uint8Array([g])), a === G.ANYONECANPAY)) {
      const p = d[e];
      f.push(Zo.encode(p), di.encode(i[e]), re.encode(n[e]), M.encode(p.sequence));
    } else f.push(M.encode(e));
    return (
      g & 1 && f.push(Lt(re.encode(u || rt))),
      h === G.SINGLE && f.push(e < l.length ? Lt(Yn.encode(l[e])) : ui),
      s && f.push(Jo(s, c), en.encode(0), Pr.encode(o)),
      ie.utils.taggedHash('TapSighash', ...f)
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
    const i = this.prevOut(e),
      o = Zt.decode(i.script);
    let s = o.type,
      c = o;
    const u = [o];
    if (o.type === 'tr')
      return (
        (r = G.DEFAULT),
        {
          txType: 'taproot',
          type: 'tr',
          last: o,
          lastScript: i.script,
          defaultSighash: r,
          sighash: e.sighashType || r,
        }
      );
    {
      if (((o.type === 'wpkh' || o.type === 'wsh') && (n = 'segwit'), o.type === 'sh')) {
        if (!e.redeemScript) throw new Error('inputType: sh without redeemScript');
        let d = Zt.decode(e.redeemScript);
        (d.type === 'wpkh' || d.type === 'wsh') && (n = 'segwit'),
          u.push(d),
          (c = d),
          (s += `-${d.type}`);
      }
      if (c.type === 'wsh') {
        if (!e.witnessScript) throw new Error('inputType: wsh without witnessScript');
        let d = Zt.decode(e.witnessScript);
        d.type === 'wsh' && (n = 'segwit'), u.push(d), (c = d), (s += `-${d.type}`);
      }
      const f = u[u.length - 1];
      if (f.type === 'sh' || f.type === 'wsh')
        throw new Error('inputType: sh/wsh cannot be terminal type');
      const h = Zt.encode(f),
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
  signIdx(e, n, r, i) {
    this.checkInputIdx(n);
    const o = this.inputs[n],
      s = this.inputType(o);
    if (!Y(e)) {
      if (!o.bip32Derivation || !o.bip32Derivation.length)
        throw new Error('bip32Derivation: empty');
      const h = o.bip32Derivation
        .filter((d) => d[1].fingerprint == e.fingerprint)
        .map(([d, { path: l }]) => {
          let g = e;
          for (const p of l) g = g.deriveChild(p);
          if (!Z(g.publicKey, d)) throw new Error('bip32Derivation: wrong pubKey');
          if (!g.privateKey) throw new Error('bip32Derivation: no privateKey');
          return g;
        });
      if (!h.length) throw new Error(`bip32Derivation: no items with fingerprint=${e.fingerprint}`);
      let a = !1;
      for (const d of h) this.signIdx(d.privateKey, n) && (a = !0);
      return a;
    }
    r ? r.forEach(a1) : (r = [s.defaultSighash]);
    const c = s.sighash;
    if (!r.includes(c))
      throw new Error(`Input with not allowed sigHash=${c}. Allowed: ${r.join(', ')}`);
    const { sigOutputs: u } = this.inputSighash(n);
    if (u === G.SINGLE && n >= this.outputs.length)
      throw new Error(
        `Input with sighash SINGLE, but there is no output with corresponding index=${n}`
      );
    const f = this.prevOut(o);
    if (s.txType === 'taproot') {
      if (o.tapBip32Derivation) throw new Error('tapBip32Derivation unsupported');
      const h = this.inputs.map(this.prevOut),
        a = h.map((b) => b.script),
        d = h.map((b) => b.amount);
      let l = !1,
        g = ie.getPublicKey(e),
        p = o.tapMerkleRoot || rt;
      if (o.tapInternalKey) {
        const { pubKey: b, privKey: m } = h1(e, g, o.tapInternalKey, p),
          [I, _] = Ng(o.tapInternalKey, p);
        if (Z(I, b)) {
          const w = this.preimageWitnessV1(n, a, c, d),
            E = gn(ie.sign(w, m, i), c !== G.DEFAULT ? new Uint8Array([c]) : rt);
          this.updateInput(n, { tapKeySig: E }, !0), (l = !0);
        }
      }
      if (o.tapLeafScript) {
        o.tapScriptSig = o.tapScriptSig || [];
        for (const [b, m] of o.tapLeafScript) {
          const I = m.subarray(0, -1),
            _ = St.decode(I),
            w = m[m.length - 1],
            E = Jo(I, w);
          if (_.findIndex((T) => Y(T) && Z(T, g)) === -1) continue;
          const S = this.preimageWitnessV1(n, a, c, d, void 0, I, w),
            v = gn(ie.sign(S, e, i), c !== G.DEFAULT ? new Uint8Array([c]) : rt);
          this.updateInput(n, { tapScriptSig: [[{ pubKey: g, leafHash: E }, v]] }, !0), (l = !0);
        }
      }
      if (!l) throw new Error('No taproot scripts signed');
      return !0;
    } else {
      const h = Og(e);
      let a = !1;
      const d = gh(h);
      for (const p of St.decode(s.lastScript)) Y(p) && (Z(p, h) || Z(p, d)) && (a = !0);
      if (!a) throw new Error(`Input script doesn't have pubKey: ${s.lastScript}`);
      let l;
      if (s.txType === 'legacy') l = this.preimageLegacy(n, s.lastScript, c);
      else if (s.txType === 'segwit') {
        let p = s.lastScript;
        s.last.type === 'wpkh' && (p = Zt.encode({ type: 'pkh', hash: s.last.hash })),
          (l = this.preimageWitnessV0(n, p, c, f.amount));
      } else throw new Error(`Transaction/sign: unknown tx type: ${s.txType}`);
      const g = Bg(l, e, this.opts.lowR);
      this.updateInput(n, { partialSig: [[h, gn(g, new Uint8Array([c]))]] }, !0);
    }
    return !0;
  }
  sign(e, n, r) {
    let i = 0;
    for (let o = 0; o < this.inputs.length; o++)
      try {
        this.signIdx(e, o, n, r) && i++;
      } catch {}
    if (!i) throw new Error('No inputs signed');
    return i;
  }
  finalizeIdx(e) {
    if ((this.checkInputIdx(e), this.fee < 0n))
      throw new Error('Outputs spends more than inputs amount');
    const n = this.inputs[e],
      r = this.inputType(n);
    if (r.txType === 'taproot') {
      if (n.tapKeySig) n.finalScriptWitness = [n.tapKeySig];
      else if (n.tapLeafScript && n.tapScriptSig) {
        const u = n.tapLeafScript.sort((f, h) => yi.encode(f[0]).length - yi.encode(h[0]).length);
        for (const [f, h] of u) {
          const a = h.slice(0, -1),
            d = h[h.length - 1],
            l = Zt.decode(a),
            g = Jo(a, d),
            p = n.tapScriptSig.filter((m) => Z(m[0].leafHash, g));
          let b = [];
          if (l.type === 'tr_ms') {
            const m = l.m,
              I = l.pubkeys;
            let _ = 0;
            for (const w of I) {
              const E = p.findIndex((y) => Z(y[0].pubKey, w));
              if (_ === m || E === -1) {
                b.push(rt);
                continue;
              }
              b.push(p[E][1]), _++;
            }
            if (_ !== m) continue;
          } else if (l.type === 'tr_ns') {
            for (const m of l.pubkeys) {
              const I = p.findIndex((_) => Z(_[0].pubKey, m));
              I !== -1 && b.push(p[I][1]);
            }
            if (b.length !== l.pubkeys.length) continue;
          } else if (l.type === 'unknown' && this.opts.allowUnknownInputs) {
            const m = St.decode(a);
            if (
              ((b = p
                .map(([{ pubKey: I }, _]) => {
                  const w = m.findIndex((E) => Y(E) && Z(E, I));
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
          n.finalScriptWitness = b.reverse().concat([a, yi.encode(f)]);
          break;
        }
        if (!n.finalScriptWitness) throw new Error('finalize/taproot: empty witness');
      } else throw new Error('finalize/taproot: unknown input');
      (n.finalScriptSig = rt), Ku(n);
      return;
    }
    if (!n.partialSig || !n.partialSig.length) throw new Error('Not enough partial sign');
    let i = rt,
      o = [];
    if (r.last.type === 'ms') {
      const u = r.last.m,
        f = r.last.pubkeys;
      let h = [];
      for (const a of f) {
        const d = n.partialSig.find((l) => Z(a, l[0]));
        d && h.push(d[1]);
      }
      if (((h = h.slice(0, u)), h.length !== u))
        throw new Error(
          `Multisig: wrong signatures count, m=${u} n=${f.length} signatures=${h.length}`
        );
      i = St.encode([0, ...h]);
    } else if (r.last.type === 'pk') i = St.encode([n.partialSig[0][1]]);
    else if (r.last.type === 'pkh') i = St.encode([n.partialSig[0][1], n.partialSig[0][0]]);
    else if (r.last.type === 'wpkh') (i = rt), (o = [n.partialSig[0][1], n.partialSig[0][0]]);
    else if (r.last.type === 'unknown' && !this.opts.allowUnknownInputs)
      throw new Error('Unknown inputs not allowed');
    let s, c;
    if (
      (r.type.includes('wsh-') &&
        (i.length &&
          r.lastScript.length &&
          (o = St.decode(i).map((u) => {
            if (u === 0) return rt;
            if (Y(u)) return u;
            throw new Error(`Wrong witness op=${u}`);
          })),
        (o = o.concat(r.lastScript))),
      r.txType === 'segwit' && (c = o),
      r.type.startsWith('sh-wsh-')
        ? (s = St.encode([St.encode([0, Lt(r.lastScript)])]))
        : r.type.startsWith('sh-')
          ? (s = St.encode([...St.decode(i), r.lastScript]))
          : r.type.startsWith('wsh-') || (r.txType !== 'segwit' && (s = i)),
      !s && !c)
    )
      throw new Error('Unknown error finalizing input');
    s && (n.finalScriptSig = s), c && (n.finalScriptWitness = c), Ku(n);
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
    for (const i of ['PSBTVersion', 'version', 'lockTime'])
      if (this.opts[i] !== e.opts[i])
        throw new Error(
          `Transaction/combine: different ${i} this=${this.opts[i]} other=${e.opts[i]}`
        );
    for (const i of ['inputs', 'outputs'])
      if (this[i].length !== e[i].length)
        throw new Error(
          `Transaction/combine: different ${i} length this=${this[i].length} other=${e[i].length}`
        );
    const n = this.global.unsignedTx ? ge.encode(this.global.unsignedTx) : rt,
      r = e.global.unsignedTx ? ge.encode(e.global.unsignedTx) : rt;
    if (!Z(n, r)) throw new Error('Transaction/combine: different unsigned tx');
    this.global = Yo(dc, this.global, e.global);
    for (let i = 0; i < this.inputs.length; i++) this.updateInput(i, e.inputs[i], !0);
    for (let i = 0; i < this.outputs.length; i++) this.updateOutput(i, e.outputs[i], !0);
    return this;
  }
  clone() {
    return Nr.fromPSBT(this.toPSBT(2), this.opts);
  }
}
export {
  Nr as T,
  Lt as a,
  fd as b,
  xy as c,
  my as d,
  T1 as e,
  dd as f,
  P1 as g,
  $f as h,
  vs as i,
  tt as j,
  jl as s,
  sp as t,
  nd as v,
};
