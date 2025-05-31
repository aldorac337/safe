var nn = Object.defineProperty;
var sn = (t, e, r) =>
  e in t ? nn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r);
var Kt = (t, e, r) => sn(t, typeof e != 'symbol' ? e + '' : e, r);
function an(t) {
  if (t.length >= 255) throw new TypeError('Alphabet too long');
  const e = new Uint8Array(256);
  for (let d = 0; d < e.length; d++) e[d] = 255;
  for (let d = 0; d < t.length; d++) {
    const c = t.charAt(d),
      p = c.charCodeAt(0);
    if (e[p] !== 255) throw new TypeError(c + ' is ambiguous');
    e[p] = d;
  }
  const r = t.length,
    n = t.charAt(0),
    s = Math.log(r) / Math.log(256),
    i = Math.log(256) / Math.log(r);
  function o(d) {
    if (
      (d instanceof Uint8Array ||
        (ArrayBuffer.isView(d)
          ? (d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength))
          : Array.isArray(d) && (d = Uint8Array.from(d))),
      !(d instanceof Uint8Array))
    )
      throw new TypeError('Expected Uint8Array');
    if (d.length === 0) return '';
    let c = 0,
      p = 0,
      w = 0;
    const y = d.length;
    for (; w !== y && d[w] === 0; ) w++, c++;
    const g = ((y - w) * i + 1) >>> 0,
      k = new Uint8Array(g);
    for (; w !== y; ) {
      let P = d[w],
        Z = 0;
      for (let re = g - 1; (P !== 0 || Z < p) && re !== -1; re--, Z++)
        (P += (256 * k[re]) >>> 0), (k[re] = P % r >>> 0), (P = (P / r) >>> 0);
      if (P !== 0) throw new Error('Non-zero carry');
      (p = Z), w++;
    }
    let A = g - p;
    for (; A !== g && k[A] === 0; ) A++;
    let Ce = n.repeat(c);
    for (; A < g; ++A) Ce += t.charAt(k[A]);
    return Ce;
  }
  function l(d) {
    if (typeof d != 'string') throw new TypeError('Expected String');
    if (d.length === 0) return new Uint8Array();
    let c = 0,
      p = 0,
      w = 0;
    for (; d[c] === n; ) p++, c++;
    const y = ((d.length - c) * s + 1) >>> 0,
      g = new Uint8Array(y);
    for (; d[c]; ) {
      let P = e[d.charCodeAt(c)];
      if (P === 255) return;
      let Z = 0;
      for (let re = y - 1; (P !== 0 || Z < w) && re !== -1; re--, Z++)
        (P += (r * g[re]) >>> 0), (g[re] = P % 256 >>> 0), (P = (P / 256) >>> 0);
      if (P !== 0) throw new Error('Non-zero carry');
      (w = Z), c++;
    }
    let k = y - w;
    for (; k !== y && g[k] === 0; ) k++;
    const A = new Uint8Array(p + (y - k));
    let Ce = p;
    for (; k !== y; ) A[Ce++] = g[k++];
    return A;
  }
  function u(d) {
    const c = l(d);
    if (c) return c;
    throw new Error('Non-base' + r + ' character');
  }
  return { encode: o, decodeUnsafe: l, decode: u };
}
var on = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const ur = an(on),
  ht = (t) => ur.encode(t),
  He = (t) => ur.decode(t);
function te(t) {
  return Uint8Array.from(atob(t), (e) => e.charCodeAt(0));
}
const gt = 8192;
function N(t) {
  if (t.length < gt) return btoa(String.fromCharCode(...t));
  let e = '';
  for (var r = 0; r < t.length; r += gt) {
    const n = t.slice(r, r + gt);
    e += String.fromCharCode(...n);
  }
  return btoa(e);
}
function cr(t) {
  var s;
  const e = t.startsWith('0x') ? t.slice(2) : t,
    r = e.length % 2 === 0 ? e : `0${e}`,
    n = ((s = r.match(/[0-9a-fA-F]{2}/g)) == null ? void 0 : s.map((i) => parseInt(i, 16))) ?? [];
  if (n.length !== r.length / 2) throw new Error(`Invalid hex string ${t}`);
  return Uint8Array.from(n);
}
function Ke(t) {
  return t.reduce((e, r) => e + r.toString(16).padStart(2, '0'), '');
}
function Ut(t) {
  let e = [],
    r = 0;
  if (t === 0) return [0];
  for (; t > 0; ) (e[r] = t & 127), (t >>= 7) && (e[r] |= 128), (r += 1);
  return e;
}
function un(t) {
  let e = 0,
    r = 0,
    n = 0;
  for (;;) {
    let s = t[n];
    if (((n += 1), (e |= (s & 127) << r), !(s & 128))) break;
    r += 7;
  }
  return { value: e, length: n };
}
class cn {
  constructor(e) {
    (this.bytePosition = 0), (this.dataView = new DataView(e.buffer));
  }
  shift(e) {
    return (this.bytePosition += e), this;
  }
  read8() {
    let e = this.dataView.getUint8(this.bytePosition);
    return this.shift(1), e;
  }
  read16() {
    let e = this.dataView.getUint16(this.bytePosition, !0);
    return this.shift(2), e;
  }
  read32() {
    let e = this.dataView.getUint32(this.bytePosition, !0);
    return this.shift(4), e;
  }
  read64() {
    let e = this.read32(),
      n = this.read32().toString(16) + e.toString(16).padStart(8, '0');
    return BigInt('0x' + n).toString(10);
  }
  read128() {
    let e = BigInt(this.read64()),
      n = BigInt(this.read64()).toString(16) + e.toString(16).padStart(16, '0');
    return BigInt('0x' + n).toString(10);
  }
  read256() {
    let e = BigInt(this.read128()),
      n = BigInt(this.read128()).toString(16) + e.toString(16).padStart(32, '0');
    return BigInt('0x' + n).toString(10);
  }
  readBytes(e) {
    let r = this.bytePosition + this.dataView.byteOffset,
      n = new Uint8Array(this.dataView.buffer, r, e);
    return this.shift(e), n;
  }
  readULEB() {
    let e = this.bytePosition + this.dataView.byteOffset,
      r = new Uint8Array(this.dataView.buffer, e),
      { value: n, length: s } = un(r);
    return this.shift(s), n;
  }
  readVec(e) {
    let r = this.readULEB(),
      n = [];
    for (let s = 0; s < r; s++) n.push(e(this, s, r));
    return n;
  }
}
function ln(t, e) {
  switch (e) {
    case 'base58':
      return ht(t);
    case 'base64':
      return N(t);
    case 'hex':
      return Ke(t);
    default:
      throw new Error('Unsupported encoding, supported values are: base64, hex');
  }
}
function dn(t, e = ['<', '>']) {
  const [r, n] = e,
    s = [];
  let i = '',
    o = 0;
  for (let l = 0; l < t.length; l++) {
    const u = t[l];
    if ((u === r && o++, u === n && o--, o === 0 && u === ',')) {
      s.push(i.trim()), (i = '');
      continue;
    }
    i += u;
  }
  return s.push(i.trim()), s;
}
class hn {
  constructor({ initialSize: e = 1024, maxSize: r = 1 / 0, allocateSize: n = 1024 } = {}) {
    (this.bytePosition = 0),
      (this.size = e),
      (this.maxSize = r),
      (this.allocateSize = n),
      (this.dataView = new DataView(new ArrayBuffer(e)));
  }
  ensureSizeOrGrow(e) {
    const r = this.bytePosition + e;
    if (r > this.size) {
      const n = Math.min(this.maxSize, this.size + this.allocateSize);
      if (r > n)
        throw new Error(
          `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${r}`
        );
      this.size = n;
      const s = new ArrayBuffer(this.size);
      new Uint8Array(s).set(new Uint8Array(this.dataView.buffer)),
        (this.dataView = new DataView(s));
    }
  }
  shift(e) {
    return (this.bytePosition += e), this;
  }
  write8(e) {
    return (
      this.ensureSizeOrGrow(1), this.dataView.setUint8(this.bytePosition, Number(e)), this.shift(1)
    );
  }
  write16(e) {
    return (
      this.ensureSizeOrGrow(2),
      this.dataView.setUint16(this.bytePosition, Number(e), !0),
      this.shift(2)
    );
  }
  write32(e) {
    return (
      this.ensureSizeOrGrow(4),
      this.dataView.setUint32(this.bytePosition, Number(e), !0),
      this.shift(4)
    );
  }
  write64(e) {
    return mt(BigInt(e), 8).forEach((r) => this.write8(r)), this;
  }
  write128(e) {
    return mt(BigInt(e), 16).forEach((r) => this.write8(r)), this;
  }
  write256(e) {
    return mt(BigInt(e), 32).forEach((r) => this.write8(r)), this;
  }
  writeULEB(e) {
    return Ut(e).forEach((r) => this.write8(r)), this;
  }
  writeVec(e, r) {
    return this.writeULEB(e.length), Array.from(e).forEach((n, s) => r(this, n, s, e.length)), this;
  }
  *[Symbol.iterator]() {
    for (let e = 0; e < this.bytePosition; e++) yield this.dataView.getUint8(e);
    return this.toBytes();
  }
  toBytes() {
    return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
  }
  toString(e) {
    return ln(this.toBytes(), e);
  }
}
function mt(t, e) {
  let r = new Uint8Array(e),
    n = 0;
  for (; t > 0; ) (r[n] = Number(t % BigInt(256))), (t = t / BigInt(256)), (n += 1);
  return r;
}
var lr = (t) => {
    throw TypeError(t);
  },
  dr = (t, e, r) => e.has(t) || lr('Cannot ' + r),
  K = (t, e, r) => (dr(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  ot = (t, e, r) =>
    e.has(t)
      ? lr('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  ut = (t, e, r, n) => (dr(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  xe,
  Ne,
  st,
  me;
const fn = class hr {
  constructor(e) {
    ot(this, xe),
      ot(this, Ne),
      (this.name = e.name),
      (this.read = e.read),
      (this.serializedSize = e.serializedSize ?? (() => null)),
      ut(this, xe, e.write),
      ut(
        this,
        Ne,
        e.serialize ??
          ((r, n) => {
            const s = new hn({ initialSize: this.serializedSize(r) ?? void 0, ...n });
            return K(this, xe).call(this, r, s), s.toBytes();
          })
      ),
      (this.validate = e.validate ?? (() => {}));
  }
  write(e, r) {
    this.validate(e), K(this, xe).call(this, e, r);
  }
  serialize(e, r) {
    return this.validate(e), new pn(this, K(this, Ne).call(this, e, r));
  }
  parse(e) {
    const r = new cn(e);
    return this.read(r);
  }
  fromHex(e) {
    return this.parse(cr(e));
  }
  fromBase58(e) {
    return this.parse(He(e));
  }
  fromBase64(e) {
    return this.parse(te(e));
  }
  transform({ name: e, input: r, output: n, validate: s }) {
    return new hr({
      name: e ?? this.name,
      read: (i) => n(this.read(i)),
      write: (i, o) => K(this, xe).call(this, r(i), o),
      serializedSize: (i) => this.serializedSize(r(i)),
      serialize: (i, o) => K(this, Ne).call(this, r(i), o),
      validate: (i) => {
        s == null || s(i), this.validate(r(i));
      },
    });
  }
};
xe = new WeakMap();
Ne = new WeakMap();
let le = fn;
const fr = Symbol.for('@mysten/serialized-bcs');
function $t(t) {
  return !!t && typeof t == 'object' && t[fr] === !0;
}
class pn {
  constructor(e, r) {
    ot(this, st), ot(this, me), ut(this, st, e), ut(this, me, r);
  }
  get [fr]() {
    return !0;
  }
  toBytes() {
    return K(this, me);
  }
  toHex() {
    return Ke(K(this, me));
  }
  toBase64() {
    return N(K(this, me));
  }
  toBase58() {
    return ht(K(this, me));
  }
  parse() {
    return K(this, st).parse(K(this, me));
  }
}
st = new WeakMap();
me = new WeakMap();
function ct({ size: t, ...e }) {
  return new le({ ...e, serializedSize: () => t });
}
function yt({ readMethod: t, writeMethod: e, ...r }) {
  return ct({
    ...r,
    read: (n) => n[t](),
    write: (n, s) => s[e](n),
    validate: (n) => {
      var s;
      if (n < 0 || n > r.maxValue)
        throw new TypeError(
          `Invalid ${r.name} value: ${n}. Expected value in range 0-${r.maxValue}`
        );
      (s = r.validate) == null || s.call(r, n);
    },
  });
}
function bt({ readMethod: t, writeMethod: e, ...r }) {
  return ct({
    ...r,
    read: (n) => n[t](),
    write: (n, s) => s[e](BigInt(n)),
    validate: (n) => {
      var i;
      const s = BigInt(n);
      if (s < 0 || s > r.maxValue)
        throw new TypeError(
          `Invalid ${r.name} value: ${s}. Expected value in range 0-${r.maxValue}`
        );
      (i = r.validate) == null || i.call(r, s);
    },
  });
}
function gn({ serialize: t, ...e }) {
  const r = new le({
    ...e,
    serialize: t,
    write: (n, s) => {
      for (const i of r.serialize(n).toBytes()) s.write8(i);
    },
  });
  return r;
}
function mn({ toBytes: t, fromBytes: e, ...r }) {
  return new le({
    ...r,
    read: (n) => {
      const s = n.readULEB(),
        i = n.readBytes(s);
      return e(i);
    },
    write: (n, s) => {
      const i = t(n);
      s.writeULEB(i.length);
      for (let o = 0; o < i.length; o++) s.write8(i[o]);
    },
    serialize: (n) => {
      const s = t(n),
        i = Ut(s.length),
        o = new Uint8Array(i.length + s.length);
      return o.set(i, 0), o.set(s, i.length), o;
    },
    validate: (n) => {
      var s;
      if (typeof n != 'string')
        throw new TypeError(`Invalid ${r.name} value: ${n}. Expected string`);
      (s = r.validate) == null || s.call(r, n);
    },
  });
}
function yn(t) {
  let e = null;
  function r() {
    return e || (e = t()), e;
  }
  return new le({
    name: 'lazy',
    read: (n) => r().read(n),
    serializedSize: (n) => r().serializedSize(n),
    write: (n, s) => r().write(n, s),
    serialize: (n, s) => r().serialize(n, s).toBytes(),
  });
}
const a = {
    u8(t) {
      return yt({
        name: 'u8',
        readMethod: 'read8',
        writeMethod: 'write8',
        size: 1,
        maxValue: 2 ** 8 - 1,
        ...t,
      });
    },
    u16(t) {
      return yt({
        name: 'u16',
        readMethod: 'read16',
        writeMethod: 'write16',
        size: 2,
        maxValue: 2 ** 16 - 1,
        ...t,
      });
    },
    u32(t) {
      return yt({
        name: 'u32',
        readMethod: 'read32',
        writeMethod: 'write32',
        size: 4,
        maxValue: 2 ** 32 - 1,
        ...t,
      });
    },
    u64(t) {
      return bt({
        name: 'u64',
        readMethod: 'read64',
        writeMethod: 'write64',
        size: 8,
        maxValue: 2n ** 64n - 1n,
        ...t,
      });
    },
    u128(t) {
      return bt({
        name: 'u128',
        readMethod: 'read128',
        writeMethod: 'write128',
        size: 16,
        maxValue: 2n ** 128n - 1n,
        ...t,
      });
    },
    u256(t) {
      return bt({
        name: 'u256',
        readMethod: 'read256',
        writeMethod: 'write256',
        size: 32,
        maxValue: 2n ** 256n - 1n,
        ...t,
      });
    },
    bool(t) {
      return ct({
        name: 'bool',
        size: 1,
        read: (e) => e.read8() === 1,
        write: (e, r) => r.write8(e ? 1 : 0),
        ...t,
        validate: (e) => {
          var r;
          if (
            ((r = t == null ? void 0 : t.validate) == null || r.call(t, e), typeof e != 'boolean')
          )
            throw new TypeError(`Expected boolean, found ${typeof e}`);
        },
      });
    },
    uleb128(t) {
      return gn({
        name: 'uleb128',
        read: (e) => e.readULEB(),
        serialize: (e) => Uint8Array.from(Ut(e)),
        ...t,
      });
    },
    bytes(t, e) {
      return ct({
        name: `bytes[${t}]`,
        size: t,
        read: (r) => r.readBytes(t),
        write: (r, n) => {
          const s = new Uint8Array(r);
          for (let i = 0; i < t; i++) n.write8(s[i] ?? 0);
        },
        ...e,
        validate: (r) => {
          var n;
          if (
            ((n = e == null ? void 0 : e.validate) == null || n.call(e, r),
            !r || typeof r != 'object' || !('length' in r))
          )
            throw new TypeError(`Expected array, found ${typeof r}`);
          if (r.length !== t)
            throw new TypeError(`Expected array of length ${t}, found ${r.length}`);
        },
      });
    },
    string(t) {
      return mn({
        name: 'string',
        toBytes: (e) => new TextEncoder().encode(e),
        fromBytes: (e) => new TextDecoder().decode(e),
        ...t,
      });
    },
    fixedArray(t, e, r) {
      return new le({
        name: `${e.name}[${t}]`,
        read: (n) => {
          const s = new Array(t);
          for (let i = 0; i < t; i++) s[i] = e.read(n);
          return s;
        },
        write: (n, s) => {
          for (const i of n) e.write(i, s);
        },
        ...r,
        validate: (n) => {
          var s;
          if (
            ((s = r == null ? void 0 : r.validate) == null || s.call(r, n),
            !n || typeof n != 'object' || !('length' in n))
          )
            throw new TypeError(`Expected array, found ${typeof n}`);
          if (n.length !== t)
            throw new TypeError(`Expected array of length ${t}, found ${n.length}`);
        },
      });
    },
    option(t) {
      return a
        .enum(`Option<${t.name}>`, { None: null, Some: t })
        .transform({
          input: (e) => (e == null ? { None: !0 } : { Some: e }),
          output: (e) => (e.$kind === 'Some' ? e.Some : null),
        });
    },
    vector(t, e) {
      return new le({
        name: `vector<${t.name}>`,
        read: (r) => {
          const n = r.readULEB(),
            s = new Array(n);
          for (let i = 0; i < n; i++) s[i] = t.read(r);
          return s;
        },
        write: (r, n) => {
          n.writeULEB(r.length);
          for (const s of r) t.write(s, n);
        },
        ...e,
        validate: (r) => {
          var n;
          if (
            ((n = e == null ? void 0 : e.validate) == null || n.call(e, r),
            !r || typeof r != 'object' || !('length' in r))
          )
            throw new TypeError(`Expected array, found ${typeof r}`);
        },
      });
    },
    tuple(t, e) {
      return new le({
        name: `(${t.map((r) => r.name).join(', ')})`,
        serializedSize: (r) => {
          let n = 0;
          for (let s = 0; s < t.length; s++) {
            const i = t[s].serializedSize(r[s]);
            if (i == null) return null;
            n += i;
          }
          return n;
        },
        read: (r) => {
          const n = [];
          for (const s of t) n.push(s.read(r));
          return n;
        },
        write: (r, n) => {
          for (let s = 0; s < t.length; s++) t[s].write(r[s], n);
        },
        ...e,
        validate: (r) => {
          var n;
          if (((n = e == null ? void 0 : e.validate) == null || n.call(e, r), !Array.isArray(r)))
            throw new TypeError(`Expected array, found ${typeof r}`);
          if (r.length !== t.length)
            throw new TypeError(`Expected array of length ${t.length}, found ${r.length}`);
        },
      });
    },
    struct(t, e, r) {
      const n = Object.entries(e);
      return new le({
        name: t,
        serializedSize: (s) => {
          let i = 0;
          for (const [o, l] of n) {
            const u = l.serializedSize(s[o]);
            if (u == null) return null;
            i += u;
          }
          return i;
        },
        read: (s) => {
          const i = {};
          for (const [o, l] of n) i[o] = l.read(s);
          return i;
        },
        write: (s, i) => {
          for (const [o, l] of n) l.write(s[o], i);
        },
        ...r,
        validate: (s) => {
          var i;
          if (
            ((i = r == null ? void 0 : r.validate) == null || i.call(r, s),
            typeof s != 'object' || s == null)
          )
            throw new TypeError(`Expected object, found ${typeof s}`);
        },
      });
    },
    enum(t, e, r) {
      const n = Object.entries(e);
      return new le({
        name: t,
        read: (s) => {
          const i = s.readULEB(),
            o = n[i];
          if (!o) throw new TypeError(`Unknown value ${i} for enum ${t}`);
          const [l, u] = o;
          return { [l]: (u == null ? void 0 : u.read(s)) ?? !0, $kind: l };
        },
        write: (s, i) => {
          const [o, l] = Object.entries(s).filter(([u]) => Object.hasOwn(e, u))[0];
          for (let u = 0; u < n.length; u++) {
            const [d, c] = n[u];
            if (d === o) {
              i.writeULEB(u), c == null || c.write(l, i);
              return;
            }
          }
        },
        ...r,
        validate: (s) => {
          var l;
          if (
            ((l = r == null ? void 0 : r.validate) == null || l.call(r, s),
            typeof s != 'object' || s == null)
          )
            throw new TypeError(`Expected object, found ${typeof s}`);
          const i = Object.keys(s).filter((u) => s[u] !== void 0 && Object.hasOwn(e, u));
          if (i.length !== 1)
            throw new TypeError(
              `Expected object with one key, but found ${i.length} for type ${t}}`
            );
          const [o] = i;
          if (!Object.hasOwn(e, o)) throw new TypeError(`Invalid enum variant ${o}`);
        },
      });
    },
    map(t, e) {
      return a.vector(a.tuple([t, e])).transform({
        name: `Map<${t.name}, ${e.name}>`,
        input: (r) => [...r.entries()],
        output: (r) => {
          const n = new Map();
          for (const [s, i] of r) n.set(s, i);
          return n;
        },
      });
    },
    lazy(t) {
      return yn(t);
    },
  },
  bn = 32;
function Jt(t) {
  try {
    return He(t).length === bn;
  } catch {
    return !1;
  }
}
const Bt = 32;
function ue(t) {
  return wn(t) && vn(t) === Bt;
}
function tt(t) {
  return ue(t);
}
function T(t, e = !1) {
  let r = t.toLowerCase();
  return !e && r.startsWith('0x') && (r = r.slice(2)), `0x${r.padStart(Bt * 2, '0')}`;
}
function de(t, e = !1) {
  return T(t, e);
}
function wn(t) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(t) && t.length % 2 === 0;
}
function vn(t) {
  return /^(0x|0X)/.test(t) ? (t.length - 2) / 2 : t.length / 2;
}
const Sn = /^vector<(.+)>$/,
  kn = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
class ee {
  static parseFromStr(e, r = !1) {
    if (e === 'address') return { address: null };
    if (e === 'bool') return { bool: null };
    if (e === 'u8') return { u8: null };
    if (e === 'u16') return { u16: null };
    if (e === 'u32') return { u32: null };
    if (e === 'u64') return { u64: null };
    if (e === 'u128') return { u128: null };
    if (e === 'u256') return { u256: null };
    if (e === 'signer') return { signer: null };
    const n = e.match(Sn);
    if (n) return { vector: ee.parseFromStr(n[1], r) };
    const s = e.match(kn);
    if (s)
      return {
        struct: {
          address: r ? T(s[1]) : s[1],
          module: s[2],
          name: s[3],
          typeParams: s[5] === void 0 ? [] : ee.parseStructTypeArgs(s[5], r),
        },
      };
    throw new Error(`Encountered unexpected token when parsing type args for ${e}`);
  }
  static parseStructTypeArgs(e, r = !1) {
    return dn(e).map((n) => ee.parseFromStr(n, r));
  }
  static tagToString(e) {
    if ('bool' in e) return 'bool';
    if ('u8' in e) return 'u8';
    if ('u16' in e) return 'u16';
    if ('u32' in e) return 'u32';
    if ('u64' in e) return 'u64';
    if ('u128' in e) return 'u128';
    if ('u256' in e) return 'u256';
    if ('address' in e) return 'address';
    if ('signer' in e) return 'signer';
    if ('vector' in e) return `vector<${ee.tagToString(e.vector)}>`;
    if ('struct' in e) {
      const r = e.struct,
        n = r.typeParams.map(ee.tagToString).join(', ');
      return `${r.address}::${r.module}::${r.name}${n ? `<${n}>` : ''}`;
    }
    throw new Error('Invalid TypeTag');
  }
}
function On(t) {
  return a
    .u64({ name: 'unsafe_u64', ...t })
    .transform({ input: (e) => e, output: (e) => Number(e) });
}
function In(t) {
  return a.enum('Option', { None: null, Some: t });
}
const x = a.bytes(Bt).transform({
    validate: (t) => {
      const e = typeof t == 'string' ? t : Ke(t);
      if (!e || !ue(T(e))) throw new Error(`Invalid Sui address ${e}`);
    },
    input: (t) => (typeof t == 'string' ? cr(T(t)) : t),
    output: (t) => T(Ke(t)),
  }),
  Y = a.vector(a.u8()).transform({
    name: 'ObjectDigest',
    input: (t) => He(t),
    output: (t) => ht(new Uint8Array(t)),
    validate: (t) => {
      if (He(t).length !== 32) throw new Error('ObjectDigest must be 32 bytes');
    },
  }),
  q = a.struct('SuiObjectRef', { objectId: x, version: a.u64(), digest: Y }),
  pr = a.struct('SharedObjectRef', {
    objectId: x,
    initialSharedVersion: a.u64(),
    mutable: a.bool(),
  }),
  gr = a.enum('ObjectArg', { ImmOrOwnedObject: q, SharedObject: pr, Receiving: q }),
  mr = a.enum('CallArg', {
    Pure: a.struct('Pure', {
      bytes: a
        .vector(a.u8())
        .transform({
          input: (t) => (typeof t == 'string' ? te(t) : t),
          output: (t) => N(new Uint8Array(t)),
        }),
    }),
    Object: gr,
  }),
  Pt = a.enum('TypeTag', {
    bool: null,
    u8: null,
    u64: null,
    u128: null,
    address: null,
    signer: null,
    vector: a.lazy(() => Pt),
    struct: a.lazy(() => kr),
    u16: null,
    u32: null,
    u256: null,
  }),
  Rt = Pt.transform({
    input: (t) => (typeof t == 'string' ? ee.parseFromStr(t, !0) : t),
    output: (t) => ee.tagToString(t),
  }),
  Q = a.enum('Argument', {
    GasCoin: null,
    Input: a.u16(),
    Result: a.u16(),
    NestedResult: a.tuple([a.u16(), a.u16()]),
  }),
  yr = a.struct('ProgrammableMoveCall', {
    package: x,
    module: a.string(),
    function: a.string(),
    typeArguments: a.vector(Rt),
    arguments: a.vector(Q),
  }),
  br = a.enum('Command', {
    MoveCall: yr,
    TransferObjects: a.struct('TransferObjects', { objects: a.vector(Q), address: Q }),
    SplitCoins: a.struct('SplitCoins', { coin: Q, amounts: a.vector(Q) }),
    MergeCoins: a.struct('MergeCoins', { destination: Q, sources: a.vector(Q) }),
    Publish: a.struct('Publish', {
      modules: a.vector(
        a
          .vector(a.u8())
          .transform({
            input: (t) => (typeof t == 'string' ? te(t) : t),
            output: (t) => N(new Uint8Array(t)),
          })
      ),
      dependencies: a.vector(x),
    }),
    MakeMoveVec: a.struct('MakeMoveVec', {
      type: In(Rt).transform({
        input: (t) => (t === null ? { None: !0 } : { Some: t }),
        output: (t) => t.Some ?? null,
      }),
      elements: a.vector(Q),
    }),
    Upgrade: a.struct('Upgrade', {
      modules: a.vector(
        a
          .vector(a.u8())
          .transform({
            input: (t) => (typeof t == 'string' ? te(t) : t),
            output: (t) => N(new Uint8Array(t)),
          })
      ),
      dependencies: a.vector(x),
      package: x,
      ticket: Q,
    }),
  }),
  wr = a.struct('ProgrammableTransaction', { inputs: a.vector(mr), commands: a.vector(br) }),
  vr = a.enum('TransactionKind', {
    ProgrammableTransaction: wr,
    ChangeEpoch: null,
    Genesis: null,
    ConsensusCommitPrologue: null,
  }),
  Sr = a.enum('TransactionExpiration', { None: null, Epoch: On() }),
  kr = a.struct('StructTag', {
    address: x,
    module: a.string(),
    name: a.string(),
    typeParams: a.vector(Pt),
  }),
  Or = a.struct('GasData', { payment: a.vector(q), owner: x, price: a.u64(), budget: a.u64() }),
  Ir = a.struct('TransactionDataV1', { kind: vr, sender: x, gasData: Or, expiration: Sr }),
  Er = a.enum('TransactionData', { V1: Ir }),
  Tr = a.enum('IntentScope', {
    TransactionData: null,
    TransactionEffects: null,
    CheckpointSummary: null,
    PersonalMessage: null,
  }),
  jr = a.enum('IntentVersion', { V0: null }),
  Cr = a.enum('AppId', { Sui: null }),
  Mr = a.struct('Intent', { scope: Tr, version: jr, appId: Cr });
function xr(t) {
  return a.struct(`IntentMessage<${t.name}>`, { intent: Mr, value: t });
}
const Ar = a.enum('CompressedSignature', {
    ED25519: a.fixedArray(64, a.u8()),
    Secp256k1: a.fixedArray(64, a.u8()),
    Secp256r1: a.fixedArray(64, a.u8()),
    ZkLogin: a.vector(a.u8()),
  }),
  _r = a.enum('PublicKey', {
    ED25519: a.fixedArray(32, a.u8()),
    Secp256k1: a.fixedArray(33, a.u8()),
    Secp256r1: a.fixedArray(33, a.u8()),
    ZkLogin: a.vector(a.u8()),
  }),
  Ur = a.struct('MultiSigPkMap', { pubKey: _r, weight: a.u8() }),
  $r = a.struct('MultiSigPublicKey', { pk_map: a.vector(Ur), threshold: a.u16() }),
  En = a.struct('MultiSig', { sigs: a.vector(Ar), bitmap: a.u16(), multisig_pk: $r }),
  Tn = a
    .vector(a.u8())
    .transform({
      input: (t) => (typeof t == 'string' ? te(t) : t),
      output: (t) => N(new Uint8Array(t)),
    }),
  Br = a.struct('SenderSignedTransaction', { intentMessage: xr(Er), txSignatures: a.vector(Tn) }),
  jn = a.vector(Br, { name: 'SenderSignedData' }),
  Cn = a.struct('PasskeyAuthenticator', {
    authenticatorData: a.vector(a.u8()),
    clientDataJson: a.string(),
    userSignature: a.vector(a.u8()),
  }),
  Mn = a.enum('PackageUpgradeError', {
    UnableToFetchPackage: a.struct('UnableToFetchPackage', { packageId: x }),
    NotAPackage: a.struct('NotAPackage', { objectId: x }),
    IncompatibleUpgrade: null,
    DigestDoesNotMatch: a.struct('DigestDoesNotMatch', { digest: a.vector(a.u8()) }),
    UnknownUpgradePolicy: a.struct('UnknownUpgradePolicy', { policy: a.u8() }),
    PackageIDDoesNotMatch: a.struct('PackageIDDoesNotMatch', { packageId: x, ticketId: x }),
  }),
  xn = a.struct('ModuleId', { address: x, name: a.string() }),
  Xt = a.struct('MoveLocation', {
    module: xn,
    function: a.u16(),
    instruction: a.u16(),
    functionName: a.option(a.string()),
  }),
  An = a.enum('CommandArgumentError', {
    TypeMismatch: null,
    InvalidBCSBytes: null,
    InvalidUsageOfPureArg: null,
    InvalidArgumentToPrivateEntryFunction: null,
    IndexOutOfBounds: a.struct('IndexOutOfBounds', { idx: a.u16() }),
    SecondaryIndexOutOfBounds: a.struct('SecondaryIndexOutOfBounds', {
      resultIdx: a.u16(),
      secondaryIdx: a.u16(),
    }),
    InvalidResultArity: a.struct('InvalidResultArity', { resultIdx: a.u16() }),
    InvalidGasCoinUsage: null,
    InvalidValueUsage: null,
    InvalidObjectByValue: null,
    InvalidObjectByMutRef: null,
    SharedObjectOperationNotAllowed: null,
  }),
  _n = a.enum('TypeArgumentError', { TypeNotFound: null, ConstraintNotSatisfied: null }),
  Un = a.enum('ExecutionFailureStatus', {
    InsufficientGas: null,
    InvalidGasObject: null,
    InvariantViolation: null,
    FeatureNotYetSupported: null,
    MoveObjectTooBig: a.struct('MoveObjectTooBig', { objectSize: a.u64(), maxObjectSize: a.u64() }),
    MovePackageTooBig: a.struct('MovePackageTooBig', {
      objectSize: a.u64(),
      maxObjectSize: a.u64(),
    }),
    CircularObjectOwnership: a.struct('CircularObjectOwnership', { object: x }),
    InsufficientCoinBalance: null,
    CoinBalanceOverflow: null,
    PublishErrorNonZeroAddress: null,
    SuiMoveVerificationError: null,
    MovePrimitiveRuntimeError: a.option(Xt),
    MoveAbort: a.tuple([Xt, a.u64()]),
    VMVerificationOrDeserializationError: null,
    VMInvariantViolation: null,
    FunctionNotFound: null,
    ArityMismatch: null,
    TypeArityMismatch: null,
    NonEntryFunctionInvoked: null,
    CommandArgumentError: a.struct('CommandArgumentError', { argIdx: a.u16(), kind: An }),
    TypeArgumentError: a.struct('TypeArgumentError', { argumentIdx: a.u16(), kind: _n }),
    UnusedValueWithoutDrop: a.struct('UnusedValueWithoutDrop', {
      resultIdx: a.u16(),
      secondaryIdx: a.u16(),
    }),
    InvalidPublicFunctionReturnType: a.struct('InvalidPublicFunctionReturnType', { idx: a.u16() }),
    InvalidTransferObject: null,
    EffectsTooLarge: a.struct('EffectsTooLarge', { currentSize: a.u64(), maxSize: a.u64() }),
    PublishUpgradeMissingDependency: null,
    PublishUpgradeDependencyDowngrade: null,
    PackageUpgradeError: a.struct('PackageUpgradeError', { upgradeError: Mn }),
    WrittenObjectsTooLarge: a.struct('WrittenObjectsTooLarge', {
      currentSize: a.u64(),
      maxSize: a.u64(),
    }),
    CertificateDenied: null,
    SuiMoveVerificationTimedout: null,
    SharedObjectOperationNotAllowed: null,
    InputObjectDeleted: null,
    ExecutionCancelledDueToSharedObjectCongestion: a.struct(
      'ExecutionCancelledDueToSharedObjectCongestion',
      { congestedObjects: a.vector(x) }
    ),
    AddressDeniedForCoin: a.struct('AddressDeniedForCoin', { address: x, coinType: a.string() }),
    CoinTypeGlobalPause: a.struct('CoinTypeGlobalPause', { coinType: a.string() }),
    ExecutionCancelledDueToRandomnessUnavailable: null,
  }),
  Pr = a.enum('ExecutionStatus', {
    Success: null,
    Failed: a.struct('ExecutionFailed', { error: Un, command: a.option(a.u64()) }),
  }),
  Rr = a.struct('GasCostSummary', {
    computationCost: a.u64(),
    storageCost: a.u64(),
    storageRebate: a.u64(),
    nonRefundableStorageFee: a.u64(),
  }),
  Ae = a.enum('Owner', {
    AddressOwner: x,
    ObjectOwner: x,
    Shared: a.struct('Shared', { initialSharedVersion: a.u64() }),
    Immutable: null,
  }),
  $n = a.struct('TransactionEffectsV1', {
    status: Pr,
    executedEpoch: a.u64(),
    gasUsed: Rr,
    modifiedAtVersions: a.vector(a.tuple([x, a.u64()])),
    sharedObjects: a.vector(q),
    transactionDigest: Y,
    created: a.vector(a.tuple([q, Ae])),
    mutated: a.vector(a.tuple([q, Ae])),
    unwrapped: a.vector(a.tuple([q, Ae])),
    deleted: a.vector(q),
    unwrappedThenDeleted: a.vector(q),
    wrapped: a.vector(q),
    gasObject: a.tuple([q, Ae]),
    eventsDigest: a.option(Y),
    dependencies: a.vector(Y),
  }),
  Nt = a.tuple([a.u64(), Y]),
  Bn = a.enum('ObjectIn', { NotExist: null, Exist: a.tuple([Nt, Ae]) }),
  Pn = a.enum('ObjectOut', { NotExist: null, ObjectWrite: a.tuple([Y, Ae]), PackageWrite: Nt }),
  Rn = a.enum('IDOperation', { None: null, Created: null, Deleted: null }),
  Nn = a.struct('EffectsObjectChange', { inputState: Bn, outputState: Pn, idOperation: Rn }),
  zn = a.enum('UnchangedSharedKind', {
    ReadOnlyRoot: Nt,
    MutateDeleted: a.u64(),
    ReadDeleted: a.u64(),
    Cancelled: a.u64(),
    PerEpochConfig: null,
  }),
  Dn = a.struct('TransactionEffectsV2', {
    status: Pr,
    executedEpoch: a.u64(),
    gasUsed: Rr,
    transactionDigest: Y,
    gasObjectIndex: a.option(a.u32()),
    eventsDigest: a.option(Y),
    dependencies: a.vector(Y),
    lamportVersion: a.u64(),
    changedObjects: a.vector(a.tuple([x, Nn])),
    unchangedSharedObjects: a.vector(a.tuple([x, zn])),
    auxDataDigest: a.option(Y),
  }),
  Vn = a.enum('TransactionEffects', { V1: $n, V2: Dn }),
  v = {
    ...a,
    U8: a.u8(),
    U16: a.u16(),
    U32: a.u32(),
    U64: a.u64(),
    U128: a.u128(),
    U256: a.u256(),
    ULEB128: a.uleb128(),
    Bool: a.bool(),
    String: a.string(),
    Address: x,
    AppId: Cr,
    Argument: Q,
    CallArg: mr,
    CompressedSignature: Ar,
    GasData: Or,
    Intent: Mr,
    IntentMessage: xr,
    IntentScope: Tr,
    IntentVersion: jr,
    MultiSig: En,
    MultiSigPkMap: Ur,
    MultiSigPublicKey: $r,
    ObjectArg: gr,
    ObjectDigest: Y,
    ProgrammableMoveCall: yr,
    ProgrammableTransaction: wr,
    PublicKey: _r,
    SenderSignedData: jn,
    SenderSignedTransaction: Br,
    SharedObjectRef: pr,
    StructTag: kr,
    SuiObjectRef: q,
    Command: br,
    TransactionData: Er,
    TransactionDataV1: Ir,
    TransactionExpiration: Sr,
    TransactionKind: vr,
    TypeTag: Rt,
    TransactionEffects: Vn,
    PasskeyAuthenticator: Cn,
  },
  Ln = /^(?!.*(^(?!@)|[-.@])($|[-.@]))(?:[a-z0-9-]{0,63}(?:\.[a-z0-9-]{0,63})*)?@[a-z0-9-]{0,63}$/i,
  Gn = /^(?!.*(^|[-.])($|[-.]))(?:[a-z0-9-]{0,63}\.)+sui$/i;
function qn(t, e = 'at') {
  const r = t.toLowerCase();
  let n;
  if (r.includes('@')) {
    if (!Ln.test(r)) throw new Error(`Invalid SuiNS name ${t}`);
    const [s, i] = r.split('@');
    n = [...(s ? s.split('.') : []), i];
  } else {
    if (!Gn.test(r)) throw new Error(`Invalid SuiNS name ${t}`);
    n = r.split('.').slice(0, -1);
  }
  return e === 'dot' ? `${n.join('.')}.sui` : `${n.slice(0, -1).join('.')}@${n[n.length - 1]}`;
}
BigInt(1e9);
const Fn = '0x1',
  Nr = '0x2';
de('0x6');
const Wn = `${Nr}::sui::SUI`;
de('0x5');
function wt(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`positive integer expected, not ${t}`);
}
function Hn(t) {
  return (
    t instanceof Uint8Array ||
    (t != null && typeof t == 'object' && t.constructor.name === 'Uint8Array')
  );
}
function zr(t, ...e) {
  if (!Hn(t)) throw new Error('Uint8Array expected');
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function Yt(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
function Kn(t, e) {
  zr(t);
  const r = e.outputLen;
  if (t.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const lt = (t) =>
    new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
  Se = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
  Dr = (t) =>
    ((t << 24) & 4278190080) | ((t << 8) & 16711680) | ((t >>> 8) & 65280) | ((t >>> 24) & 255),
  ae = Se ? (t) => t : (t) => Dr(t);
function Me(t) {
  for (let e = 0; e < t.length; e++) t[e] = Dr(t[e]);
}
function Jn(t) {
  if (typeof t != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ve(t) {
  return typeof t == 'string' && (t = Jn(t)), zr(t), t;
}
class Xn {
  clone() {
    return this._cloneInto();
  }
}
function Yn(t) {
  const e = (n, s) => t(s).update(Ve(n)).digest(),
    r = t({});
  return (e.outputLen = r.outputLen), (e.blockLen = r.blockLen), (e.create = (n) => t(n)), e;
}
const Zn = new Uint8Array([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11,
  7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6,
  5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8,
  3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14,
  12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
  2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
]);
class Qn extends Xn {
  constructor(e, r, n = {}, s, i, o) {
    if (
      (super(),
      (this.blockLen = e),
      (this.outputLen = r),
      (this.length = 0),
      (this.pos = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      wt(e),
      wt(r),
      wt(s),
      r < 0 || r > s)
    )
      throw new Error('outputLen bigger than keyLen');
    if (n.key !== void 0 && (n.key.length < 1 || n.key.length > s))
      throw new Error(`key must be up 1..${s} byte long or undefined`);
    if (n.salt !== void 0 && n.salt.length !== i)
      throw new Error(`salt must be ${i} byte long or undefined`);
    if (n.personalization !== void 0 && n.personalization.length !== o)
      throw new Error(`personalization must be ${o} byte long or undefined`);
    this.buffer32 = lt((this.buffer = new Uint8Array(e)));
  }
  update(e) {
    Yt(this);
    const { blockLen: r, buffer: n, buffer32: s } = this;
    e = Ve(e);
    const i = e.length,
      o = e.byteOffset,
      l = e.buffer;
    for (let u = 0; u < i; ) {
      this.pos === r && (Se || Me(s), this.compress(s, 0, !1), Se || Me(s), (this.pos = 0));
      const d = Math.min(r - this.pos, i - u),
        c = o + u;
      if (d === r && !(c % 4) && u + d < i) {
        const p = new Uint32Array(l, c, Math.floor((i - u) / 4));
        Se || Me(p);
        for (let w = 0; u + r < i; w += s.length, u += r)
          (this.length += r), this.compress(p, w, !1);
        Se || Me(p);
        continue;
      }
      n.set(e.subarray(u, u + d), this.pos), (this.pos += d), (this.length += d), (u += d);
    }
    return this;
  }
  digestInto(e) {
    Yt(this), Kn(e, this);
    const { pos: r, buffer32: n } = this;
    (this.finished = !0),
      this.buffer.subarray(r).fill(0),
      Se || Me(n),
      this.compress(n, 0, !0),
      Se || Me(n);
    const s = lt(e);
    this.get().forEach((i, o) => (s[o] = ae(i)));
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const n = e.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    const { buffer: r, length: n, finished: s, destroyed: i, outputLen: o, pos: l } = this;
    return (
      e || (e = new this.constructor({ dkLen: o })),
      e.set(...this.get()),
      (e.length = n),
      (e.finished = s),
      (e.destroyed = i),
      (e.outputLen = o),
      e.buffer.set(r),
      (e.pos = l),
      e
    );
  }
}
const rt = BigInt(2 ** 32 - 1),
  It = BigInt(32);
function Vr(t, e = !1) {
  return e
    ? { h: Number(t & rt), l: Number((t >> It) & rt) }
    : { h: Number((t >> It) & rt) | 0, l: Number(t & rt) | 0 };
}
function es(t, e = !1) {
  let r = new Uint32Array(t.length),
    n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: i, l: o } = Vr(t[s], e);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
const ts = (t, e) => (BigInt(t >>> 0) << It) | BigInt(e >>> 0),
  rs = (t, e, r) => t >>> r,
  ns = (t, e, r) => (t << (32 - r)) | (e >>> r),
  ss = (t, e, r) => (t >>> r) | (e << (32 - r)),
  is = (t, e, r) => (t << (32 - r)) | (e >>> r),
  as = (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
  os = (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
  us = (t, e) => e,
  cs = (t, e) => t,
  ls = (t, e, r) => (t << r) | (e >>> (32 - r)),
  ds = (t, e, r) => (e << r) | (t >>> (32 - r)),
  hs = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
  fs = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
function ps(t, e, r, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: (t + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const gs = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
  ms = (t, e, r, n) => (e + r + n + ((t / 2 ** 32) | 0)) | 0,
  ys = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
  bs = (t, e, r, n, s) => (e + r + n + s + ((t / 2 ** 32) | 0)) | 0,
  ws = (t, e, r, n, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  vs = (t, e, r, n, s, i) => (e + r + n + s + i + ((t / 2 ** 32) | 0)) | 0,
  D = {
    fromBig: Vr,
    split: es,
    toBig: ts,
    shrSH: rs,
    shrSL: ns,
    rotrSH: ss,
    rotrSL: is,
    rotrBH: as,
    rotrBL: os,
    rotr32H: us,
    rotr32L: cs,
    rotlSH: ls,
    rotlSL: ds,
    rotlBH: hs,
    rotlBL: fs,
    add: ps,
    add3L: gs,
    add3H: ms,
    add4L: ys,
    add4H: bs,
    add5H: vs,
    add5L: ws,
  },
  B = new Uint32Array([
    4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762,
    2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225,
  ]),
  f = new Uint32Array(32);
function pe(t, e, r, n, s, i) {
  const o = s[i],
    l = s[i + 1];
  let u = f[2 * t],
    d = f[2 * t + 1],
    c = f[2 * e],
    p = f[2 * e + 1],
    w = f[2 * r],
    y = f[2 * r + 1],
    g = f[2 * n],
    k = f[2 * n + 1],
    A = D.add3L(u, c, o);
  (d = D.add3H(A, d, p, l)),
    (u = A | 0),
    ({ Dh: k, Dl: g } = { Dh: k ^ d, Dl: g ^ u }),
    ({ Dh: k, Dl: g } = { Dh: D.rotr32H(k, g), Dl: D.rotr32L(k, g) }),
    ({ h: y, l: w } = D.add(y, w, k, g)),
    ({ Bh: p, Bl: c } = { Bh: p ^ y, Bl: c ^ w }),
    ({ Bh: p, Bl: c } = { Bh: D.rotrSH(p, c, 24), Bl: D.rotrSL(p, c, 24) }),
    (f[2 * t] = u),
    (f[2 * t + 1] = d),
    (f[2 * e] = c),
    (f[2 * e + 1] = p),
    (f[2 * r] = w),
    (f[2 * r + 1] = y),
    (f[2 * n] = g),
    (f[2 * n + 1] = k);
}
function ge(t, e, r, n, s, i) {
  const o = s[i],
    l = s[i + 1];
  let u = f[2 * t],
    d = f[2 * t + 1],
    c = f[2 * e],
    p = f[2 * e + 1],
    w = f[2 * r],
    y = f[2 * r + 1],
    g = f[2 * n],
    k = f[2 * n + 1],
    A = D.add3L(u, c, o);
  (d = D.add3H(A, d, p, l)),
    (u = A | 0),
    ({ Dh: k, Dl: g } = { Dh: k ^ d, Dl: g ^ u }),
    ({ Dh: k, Dl: g } = { Dh: D.rotrSH(k, g, 16), Dl: D.rotrSL(k, g, 16) }),
    ({ h: y, l: w } = D.add(y, w, k, g)),
    ({ Bh: p, Bl: c } = { Bh: p ^ y, Bl: c ^ w }),
    ({ Bh: p, Bl: c } = { Bh: D.rotrBH(p, c, 63), Bl: D.rotrBL(p, c, 63) }),
    (f[2 * t] = u),
    (f[2 * t + 1] = d),
    (f[2 * e] = c),
    (f[2 * e + 1] = p),
    (f[2 * r] = w),
    (f[2 * r + 1] = y),
    (f[2 * n] = g),
    (f[2 * n + 1] = k);
}
class Ss extends Qn {
  constructor(e = {}) {
    super(128, e.dkLen === void 0 ? 64 : e.dkLen, e, 64, 16, 16),
      (this.v0l = B[0] | 0),
      (this.v0h = B[1] | 0),
      (this.v1l = B[2] | 0),
      (this.v1h = B[3] | 0),
      (this.v2l = B[4] | 0),
      (this.v2h = B[5] | 0),
      (this.v3l = B[6] | 0),
      (this.v3h = B[7] | 0),
      (this.v4l = B[8] | 0),
      (this.v4h = B[9] | 0),
      (this.v5l = B[10] | 0),
      (this.v5h = B[11] | 0),
      (this.v6l = B[12] | 0),
      (this.v6h = B[13] | 0),
      (this.v7l = B[14] | 0),
      (this.v7h = B[15] | 0);
    const r = e.key ? e.key.length : 0;
    if (((this.v0l ^= this.outputLen | (r << 8) | 65536 | (1 << 24)), e.salt)) {
      const n = lt(Ve(e.salt));
      (this.v4l ^= ae(n[0])),
        (this.v4h ^= ae(n[1])),
        (this.v5l ^= ae(n[2])),
        (this.v5h ^= ae(n[3]));
    }
    if (e.personalization) {
      const n = lt(Ve(e.personalization));
      (this.v6l ^= ae(n[0])),
        (this.v6h ^= ae(n[1])),
        (this.v7l ^= ae(n[2])),
        (this.v7h ^= ae(n[3]));
    }
    if (e.key) {
      const n = new Uint8Array(this.blockLen);
      n.set(Ve(e.key)), this.update(n);
    }
  }
  get() {
    let {
      v0l: e,
      v0h: r,
      v1l: n,
      v1h: s,
      v2l: i,
      v2h: o,
      v3l: l,
      v3h: u,
      v4l: d,
      v4h: c,
      v5l: p,
      v5h: w,
      v6l: y,
      v6h: g,
      v7l: k,
      v7h: A,
    } = this;
    return [e, r, n, s, i, o, l, u, d, c, p, w, y, g, k, A];
  }
  set(e, r, n, s, i, o, l, u, d, c, p, w, y, g, k, A) {
    (this.v0l = e | 0),
      (this.v0h = r | 0),
      (this.v1l = n | 0),
      (this.v1h = s | 0),
      (this.v2l = i | 0),
      (this.v2h = o | 0),
      (this.v3l = l | 0),
      (this.v3h = u | 0),
      (this.v4l = d | 0),
      (this.v4h = c | 0),
      (this.v5l = p | 0),
      (this.v5h = w | 0),
      (this.v6l = y | 0),
      (this.v6h = g | 0),
      (this.v7l = k | 0),
      (this.v7h = A | 0);
  }
  compress(e, r, n) {
    this.get().forEach((u, d) => (f[d] = u)), f.set(B, 16);
    let { h: s, l: i } = D.fromBig(BigInt(this.length));
    (f[24] = B[8] ^ i), (f[25] = B[9] ^ s), n && ((f[28] = ~f[28]), (f[29] = ~f[29]));
    let o = 0;
    const l = Zn;
    for (let u = 0; u < 12; u++)
      pe(0, 4, 8, 12, e, r + 2 * l[o++]),
        ge(0, 4, 8, 12, e, r + 2 * l[o++]),
        pe(1, 5, 9, 13, e, r + 2 * l[o++]),
        ge(1, 5, 9, 13, e, r + 2 * l[o++]),
        pe(2, 6, 10, 14, e, r + 2 * l[o++]),
        ge(2, 6, 10, 14, e, r + 2 * l[o++]),
        pe(3, 7, 11, 15, e, r + 2 * l[o++]),
        ge(3, 7, 11, 15, e, r + 2 * l[o++]),
        pe(0, 5, 10, 15, e, r + 2 * l[o++]),
        ge(0, 5, 10, 15, e, r + 2 * l[o++]),
        pe(1, 6, 11, 12, e, r + 2 * l[o++]),
        ge(1, 6, 11, 12, e, r + 2 * l[o++]),
        pe(2, 7, 8, 13, e, r + 2 * l[o++]),
        ge(2, 7, 8, 13, e, r + 2 * l[o++]),
        pe(3, 4, 9, 14, e, r + 2 * l[o++]),
        ge(3, 4, 9, 14, e, r + 2 * l[o++]);
    (this.v0l ^= f[0] ^ f[16]),
      (this.v0h ^= f[1] ^ f[17]),
      (this.v1l ^= f[2] ^ f[18]),
      (this.v1h ^= f[3] ^ f[19]),
      (this.v2l ^= f[4] ^ f[20]),
      (this.v2h ^= f[5] ^ f[21]),
      (this.v3l ^= f[6] ^ f[22]),
      (this.v3h ^= f[7] ^ f[23]),
      (this.v4l ^= f[8] ^ f[24]),
      (this.v4h ^= f[9] ^ f[25]),
      (this.v5l ^= f[10] ^ f[26]),
      (this.v5h ^= f[11] ^ f[27]),
      (this.v6l ^= f[12] ^ f[28]),
      (this.v6h ^= f[13] ^ f[29]),
      (this.v7l ^= f[14] ^ f[30]),
      (this.v7h ^= f[15] ^ f[31]),
      f.fill(0);
  }
  destroy() {
    (this.destroyed = !0),
      this.buffer32.fill(0),
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const ks = Yn((t) => new Ss(t)),
  Os = 'object',
  Is = 'ID',
  Es = 'ascii',
  Ts = 'String',
  js = 'string',
  Cs = 'String',
  Ms = 'option',
  xs = 'Option';
function As(t) {
  const e = typeof t.body == 'object' && 'datatype' in t.body ? t.body.datatype : null;
  return !!e && T(e.package) === T('0x2') && e.module === 'tx_context' && e.type === 'TxContext';
}
function Et(t) {
  if (typeof t == 'string')
    switch (t) {
      case 'address':
        return v.Address;
      case 'bool':
        return v.Bool;
      case 'u8':
        return v.U8;
      case 'u16':
        return v.U16;
      case 'u32':
        return v.U32;
      case 'u64':
        return v.U64;
      case 'u128':
        return v.U128;
      case 'u256':
        return v.U256;
      default:
        throw new Error(`Unknown type signature ${t}`);
    }
  if ('vector' in t) {
    if (t.vector === 'u8')
      return v
        .vector(v.U8)
        .transform({
          input: (r) => (typeof r == 'string' ? new TextEncoder().encode(r) : r),
          output: (r) => r,
        });
    const e = Et(t.vector);
    return e ? v.vector(e) : null;
  }
  if ('datatype' in t) {
    const e = T(t.datatype.package);
    if (e === T(Fn)) {
      if (
        (t.datatype.module === Es && t.datatype.type === Ts) ||
        (t.datatype.module === js && t.datatype.type === Cs)
      )
        return v.String;
      if (t.datatype.module === Ms && t.datatype.type === xs) {
        const r = Et(t.datatype.typeParameters[0]);
        return r ? v.vector(r) : null;
      }
    }
    if (e === T(Nr) && t.datatype.module === Os && t.datatype.type === Is) return v.Address;
  }
  return null;
}
function _s(t) {
  return typeof t == 'object' && 'Reference' in t
    ? { ref: '&', body: Le(t.Reference) }
    : typeof t == 'object' && 'MutableReference' in t
      ? { ref: '&mut', body: Le(t.MutableReference) }
      : { ref: null, body: Le(t) };
}
function Le(t) {
  if (typeof t == 'string')
    switch (t) {
      case 'Address':
        return 'address';
      case 'Bool':
        return 'bool';
      case 'U8':
        return 'u8';
      case 'U16':
        return 'u16';
      case 'U32':
        return 'u32';
      case 'U64':
        return 'u64';
      case 'U128':
        return 'u128';
      case 'U256':
        return 'u256';
      default:
        throw new Error(`Unexpected type ${t}`);
    }
  if ('Vector' in t) return { vector: Le(t.Vector) };
  if ('Struct' in t)
    return {
      datatype: {
        package: t.Struct.address,
        module: t.Struct.module,
        type: t.Struct.name,
        typeParameters: t.Struct.typeArguments.map(Le),
      },
    };
  if ('TypeParameter' in t) return { typeParameter: t.TypeParameter };
  throw new Error(`Unexpected type ${JSON.stringify(t)}`);
}
function Us(t) {
  return { $kind: 'Pure', Pure: { bytes: t instanceof Uint8Array ? N(t) : t.toBase64() } };
}
const he = {
  Pure: Us,
  ObjectRef({ objectId: t, digest: e, version: r }) {
    return {
      $kind: 'Object',
      Object: {
        $kind: 'ImmOrOwnedObject',
        ImmOrOwnedObject: { digest: e, version: r, objectId: T(t) },
      },
    };
  },
  SharedObjectRef({ objectId: t, mutable: e, initialSharedVersion: r }) {
    return {
      $kind: 'Object',
      Object: {
        $kind: 'SharedObject',
        SharedObject: { mutable: e, initialSharedVersion: r, objectId: T(t) },
      },
    };
  },
  ReceivingRef({ objectId: t, digest: e, version: r }) {
    return {
      $kind: 'Object',
      Object: { $kind: 'Receiving', Receiving: { digest: e, version: r, objectId: T(t) } },
    };
  },
};
var ne;
function $s(t) {
  return {
    lang: (t == null ? void 0 : t.lang) ?? (ne == null ? void 0 : ne.lang),
    message: t == null ? void 0 : t.message,
    abortEarly: (t == null ? void 0 : t.abortEarly) ?? (ne == null ? void 0 : ne.abortEarly),
    abortPipeEarly:
      (t == null ? void 0 : t.abortPipeEarly) ?? (ne == null ? void 0 : ne.abortPipeEarly),
  };
}
var vt;
function Bs(t) {
  return vt == null ? void 0 : vt.get(t);
}
var St;
function Ps(t) {
  return St == null ? void 0 : St.get(t);
}
var kt;
function Rs(t, e) {
  var r;
  return (r = kt == null ? void 0 : kt.get(t)) == null ? void 0 : r.get(e);
}
function Lr(t) {
  var r, n;
  const e = typeof t;
  return e === 'string'
    ? `"${t}"`
    : e === 'number' || e === 'bigint' || e === 'boolean'
      ? `${t}`
      : e === 'object' || e === 'function'
        ? ((t &&
            ((n = (r = Object.getPrototypeOf(t)) == null ? void 0 : r.constructor) == null
              ? void 0
              : n.name)) ??
          'null')
        : e;
}
function G(t, e, r, n, s) {
  const i = s && 'input' in s ? s.input : r.value,
    o = (s == null ? void 0 : s.expected) ?? t.expects ?? null,
    l = (s == null ? void 0 : s.received) ?? Lr(i),
    u = {
      kind: t.kind,
      type: t.type,
      input: i,
      expected: o,
      received: l,
      message: `Invalid ${e}: ${o ? `Expected ${o} but r` : 'R'}eceived ${l}`,
      requirement: t.requirement,
      path: s == null ? void 0 : s.path,
      issues: s == null ? void 0 : s.issues,
      lang: n.lang,
      abortEarly: n.abortEarly,
      abortPipeEarly: n.abortPipeEarly,
    },
    d = t.kind === 'schema',
    c =
      (s == null ? void 0 : s.message) ??
      t.message ??
      Rs(t.reference, u.lang) ??
      (d ? Ps(u.lang) : null) ??
      n.message ??
      Bs(u.lang);
  c && (u.message = typeof c == 'function' ? c(u) : c),
    d && (r.typed = !1),
    r.issues ? r.issues.push(u) : (r.issues = [u]);
}
function Ns(t, e) {
  return Object.hasOwn(t, e) && e !== '__proto__' && e !== 'prototype' && e !== 'constructor';
}
var zs = class extends Error {
  constructor(e) {
    super(e[0].message);
    Kt(this, 'issues');
    (this.name = 'ValiError'), (this.issues = e);
  }
};
function Ze(t, e) {
  return {
    kind: 'validation',
    type: 'check',
    reference: Ze,
    async: !1,
    expects: null,
    requirement: t,
    message: e,
    _run(r, n) {
      return r.typed && !this.requirement(r.value) && G(this, 'input', r, n), r;
    },
  };
}
function $(t) {
  return {
    kind: 'validation',
    type: 'integer',
    reference: $,
    async: !1,
    expects: null,
    requirement: Number.isInteger,
    message: t,
    _run(e, r) {
      return e.typed && !this.requirement(e.value) && G(this, 'integer', e, r), e;
    },
  };
}
function ft(t) {
  return {
    kind: 'transformation',
    type: 'transform',
    reference: ft,
    async: !1,
    operation: t,
    _run(e) {
      return (e.value = this.operation(e.value)), e;
    },
  };
}
function zt(t, e, r) {
  return typeof t.default == 'function' ? t.default(e, r) : t.default;
}
function Tt(t, e) {
  return !t._run({ typed: !1, value: e }, { abortEarly: !0 }).issues;
}
function m(t, e) {
  return {
    kind: 'schema',
    type: 'array',
    reference: m,
    expects: 'Array',
    async: !1,
    item: t,
    message: e,
    _run(r, n) {
      var i;
      const s = r.value;
      if (Array.isArray(s)) {
        (r.typed = !0), (r.value = []);
        for (let o = 0; o < s.length; o++) {
          const l = s[o],
            u = this.item._run({ typed: !1, value: l }, n);
          if (u.issues) {
            const d = { type: 'array', origin: 'value', input: s, key: o, value: l };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : (c.path = [d]), (i = r.issues) == null || i.push(c);
            if ((r.issues || (r.issues = u.issues), n.abortEarly)) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
      } else G(this, 'type', r, n);
      return r;
    },
  };
}
function Dt(t) {
  return {
    kind: 'schema',
    type: 'bigint',
    reference: Dt,
    expects: 'bigint',
    async: !1,
    message: t,
    _run(e, r) {
      return typeof e.value == 'bigint' ? (e.typed = !0) : G(this, 'type', e, r), e;
    },
  };
}
function pt(t) {
  return {
    kind: 'schema',
    type: 'boolean',
    reference: pt,
    expects: 'boolean',
    async: !1,
    message: t,
    _run(e, r) {
      return typeof e.value == 'boolean' ? (e.typed = !0) : G(this, 'type', e, r), e;
    },
  };
}
function Je(t) {
  return {
    kind: 'schema',
    type: 'lazy',
    reference: Je,
    expects: 'unknown',
    async: !1,
    getter: t,
    _run(e, r) {
      return this.getter(e.value)._run(e, r);
    },
  };
}
function b(t, e) {
  return {
    kind: 'schema',
    type: 'literal',
    reference: b,
    expects: Lr(t),
    async: !1,
    literal: t,
    message: e,
    _run(r, n) {
      return r.value === this.literal ? (r.typed = !0) : G(this, 'type', r, n), r;
    },
  };
}
function E(t, ...e) {
  const r = {
    kind: 'schema',
    type: 'nullable',
    reference: E,
    expects: `${t.expects} | null`,
    async: !1,
    wrapped: t,
    _run(n, s) {
      return n.value === null && ('default' in this && (n.value = zt(this, n, s)), n.value === null)
        ? ((n.typed = !0), n)
        : this.wrapped._run(n, s);
    },
  };
  return 0 in e && (r.default = e[0]), r;
}
function $e(t, ...e) {
  const r = {
    kind: 'schema',
    type: 'nullish',
    reference: $e,
    expects: `${t.expects} | null | undefined`,
    async: !1,
    wrapped: t,
    _run(n, s) {
      return (n.value === null || n.value === void 0) &&
        ('default' in this && (n.value = zt(this, n, s)), n.value === null || n.value === void 0)
        ? ((n.typed = !0), n)
        : this.wrapped._run(n, s);
    },
  };
  return 0 in e && (r.default = e[0]), r;
}
function M(t) {
  return {
    kind: 'schema',
    type: 'number',
    reference: M,
    expects: 'number',
    async: !1,
    message: t,
    _run(e, r) {
      return (
        typeof e.value == 'number' && !isNaN(e.value) ? (e.typed = !0) : G(this, 'type', e, r), e
      );
    },
  };
}
function h(t, e) {
  return {
    kind: 'schema',
    type: 'object',
    reference: h,
    expects: 'Object',
    async: !1,
    entries: t,
    message: e,
    _run(r, n) {
      var i;
      const s = r.value;
      if (s && typeof s == 'object') {
        (r.typed = !0), (r.value = {});
        for (const o in this.entries) {
          const l = s[o],
            u = this.entries[o]._run({ typed: !1, value: l }, n);
          if (u.issues) {
            const d = { type: 'object', origin: 'value', input: s, key: o, value: l };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : (c.path = [d]), (i = r.issues) == null || i.push(c);
            if ((r.issues || (r.issues = u.issues), n.abortEarly)) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), (u.value !== void 0 || o in s) && (r.value[o] = u.value);
        }
      } else G(this, 'type', r, n);
      return r;
    },
  };
}
function z(t, ...e) {
  const r = {
    kind: 'schema',
    type: 'optional',
    reference: z,
    expects: `${t.expects} | undefined`,
    async: !1,
    wrapped: t,
    _run(n, s) {
      return n.value === void 0 &&
        ('default' in this && (n.value = zt(this, n, s)), n.value === void 0)
        ? ((n.typed = !0), n)
        : this.wrapped._run(n, s);
    },
  };
  return 0 in e && (r.default = e[0]), r;
}
function Xe(t, e, r) {
  return {
    kind: 'schema',
    type: 'record',
    reference: Xe,
    expects: 'Object',
    async: !1,
    key: t,
    value: e,
    message: r,
    _run(n, s) {
      var o, l;
      const i = n.value;
      if (i && typeof i == 'object') {
        (n.typed = !0), (n.value = {});
        for (const u in i)
          if (Ns(i, u)) {
            const d = i[u],
              c = this.key._run({ typed: !1, value: u }, s);
            if (c.issues) {
              const w = { type: 'object', origin: 'key', input: i, key: u, value: d };
              for (const y of c.issues) (y.path = [w]), (o = n.issues) == null || o.push(y);
              if ((n.issues || (n.issues = c.issues), s.abortEarly)) {
                n.typed = !1;
                break;
              }
            }
            const p = this.value._run({ typed: !1, value: d }, s);
            if (p.issues) {
              const w = { type: 'object', origin: 'value', input: i, key: u, value: d };
              for (const y of p.issues)
                y.path ? y.path.unshift(w) : (y.path = [w]), (l = n.issues) == null || l.push(y);
              if ((n.issues || (n.issues = p.issues), s.abortEarly)) {
                n.typed = !1;
                break;
              }
            }
            (!c.typed || !p.typed) && (n.typed = !1), c.typed && (n.value[c.value] = p.value);
          }
      } else G(this, 'type', n, s);
      return n;
    },
  };
}
function S(t) {
  return {
    kind: 'schema',
    type: 'string',
    reference: S,
    expects: 'string',
    async: !1,
    message: t,
    _run(e, r) {
      return typeof e.value == 'string' ? (e.typed = !0) : G(this, 'type', e, r), e;
    },
  };
}
function Vt(t, e) {
  return {
    kind: 'schema',
    type: 'tuple',
    reference: Vt,
    expects: 'Array',
    async: !1,
    items: t,
    message: e,
    _run(r, n) {
      var i;
      const s = r.value;
      if (Array.isArray(s)) {
        (r.typed = !0), (r.value = []);
        for (let o = 0; o < this.items.length; o++) {
          const l = s[o],
            u = this.items[o]._run({ typed: !1, value: l }, n);
          if (u.issues) {
            const d = { type: 'array', origin: 'value', input: s, key: o, value: l };
            for (const c of u.issues)
              c.path ? c.path.unshift(d) : (c.path = [d]), (i = r.issues) == null || i.push(c);
            if ((r.issues || (r.issues = u.issues), n.abortEarly)) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
      } else G(this, 'type', r, n);
      return r;
    },
  };
}
function Zt(t) {
  let e;
  if (t) for (const r of t) e ? e.push(...r.issues) : (e = r.issues);
  return e;
}
function R(t, e) {
  return {
    kind: 'schema',
    type: 'union',
    reference: R,
    expects: [...new Set(t.map((r) => r.expects))].join(' | ') || 'never',
    async: !1,
    options: t,
    message: e,
    _run(r, n) {
      let s, i, o;
      for (const l of this.options) {
        const u = l._run({ typed: !1, value: r.value }, n);
        if (u.typed)
          if (u.issues) i ? i.push(u) : (i = [u]);
          else {
            s = u;
            break;
          }
        else o ? o.push(u) : (o = [u]);
      }
      if (s) return s;
      if (i) {
        if (i.length === 1) return i[0];
        G(this, 'type', r, n, { issues: Zt(i) }), (r.typed = !0);
      } else {
        if ((o == null ? void 0 : o.length) === 1) return o[0];
        G(this, 'type', r, n, { issues: Zt(o) });
      }
      return r;
    },
  };
}
function Ee() {
  return {
    kind: 'schema',
    type: 'unknown',
    reference: Ee,
    expects: 'unknown',
    async: !1,
    _run(t) {
      return (t.typed = !0), t;
    },
  };
}
function U(t, e, r) {
  const n = t._run({ typed: !1, value: e }, $s(r));
  if (n.issues) throw new zs(n.issues);
  return n.value;
}
function j(...t) {
  return {
    ...t[0],
    pipe: t,
    _run(e, r) {
      for (let n = 0; n < t.length; n++) {
        if (e.issues && (t[n].kind === 'schema' || t[n].kind === 'transformation')) {
          e.typed = !1;
          break;
        }
        (!e.issues || (!r.abortEarly && !r.abortPipeEarly)) && (e = t[n]._run(e, r));
      }
      return e;
    },
  };
}
function je(t) {
  const e = Object.entries(t).map(([r, n]) => h({ [r]: n }));
  return j(
    R(e),
    ft((r) => ({ ...r, $kind: Object.keys(r)[0] }))
  );
}
const Be = j(
    S(),
    ft((t) => T(t)),
    Ze(ue)
  ),
  L = Be,
  Te = S(),
  V = j(
    R([S(), j(M(), $())]),
    Ze((t) => {
      try {
        return BigInt(t), BigInt(t) >= 0 && BigInt(t) <= 18446744073709551615n;
      } catch {
        return !1;
      }
    }, 'Invalid u64')
  ),
  ye = h({ objectId: Be, version: V, digest: S() }),
  C = j(
    R([
      h({ GasCoin: b(!0) }),
      h({ Input: j(M(), $()), type: z(b('pure')) }),
      h({ Input: j(M(), $()), type: z(b('object')) }),
      h({ Result: j(M(), $()) }),
      h({ NestedResult: Vt([j(M(), $()), j(M(), $())]) }),
    ]),
    ft((t) => ({ ...t, $kind: Object.keys(t)[0] }))
  ),
  Ds = h({ budget: E(V), price: E(V), owner: E(Be), payment: E(m(ye)) }),
  jt = R([
    b('address'),
    b('bool'),
    b('u8'),
    b('u16'),
    b('u32'),
    b('u64'),
    b('u128'),
    b('u256'),
    h({ vector: Je(() => jt) }),
    h({ datatype: h({ package: S(), module: S(), type: S(), typeParameters: m(Je(() => jt)) }) }),
    h({ typeParameter: j(M(), $()) }),
  ]),
  Vs = h({ ref: E(R([b('&'), b('&mut')])), body: jt }),
  Ls = h({
    package: L,
    module: S(),
    function: S(),
    typeArguments: m(S()),
    arguments: m(C),
    _argumentTypes: z(E(m(Vs))),
  }),
  Gs = h({ name: S(), inputs: Xe(S(), R([C, m(C)])), data: Xe(S(), Ee()) }),
  qs = je({
    MoveCall: Ls,
    TransferObjects: h({ objects: m(C), address: C }),
    SplitCoins: h({ coin: C, amounts: m(C) }),
    MergeCoins: h({ destination: C, sources: m(C) }),
    Publish: h({ modules: m(Te), dependencies: m(L) }),
    MakeMoveVec: h({ type: E(S()), elements: m(C) }),
    Upgrade: h({ modules: m(Te), dependencies: m(L), package: L, ticket: C }),
    $Intent: Gs,
  }),
  Gr = je({
    ImmOrOwnedObject: ye,
    SharedObject: h({ objectId: L, initialSharedVersion: V, mutable: pt() }),
    Receiving: ye,
  }),
  Fs = je({
    Object: Gr,
    Pure: h({ bytes: Te }),
    UnresolvedPure: h({ value: Ee() }),
    UnresolvedObject: h({
      objectId: L,
      version: z(E(V)),
      digest: z(E(S())),
      initialSharedVersion: z(E(V)),
    }),
  }),
  Qt = je({ Object: Gr, Pure: h({ bytes: Te }) }),
  qr = je({ None: b(!0), Epoch: V }),
  it = h({
    version: b(2),
    sender: $e(Be),
    expiration: $e(qr),
    gasData: Ds,
    inputs: m(Fs),
    commands: m(qs),
  }),
  be = {
    MoveCall(t) {
      const [e, r = '', n = ''] =
        'target' in t ? t.target.split('::') : [t.package, t.module, t.function];
      return {
        $kind: 'MoveCall',
        MoveCall: {
          package: e,
          module: r,
          function: n,
          typeArguments: t.typeArguments ?? [],
          arguments: t.arguments ?? [],
        },
      };
    },
    TransferObjects(t, e) {
      return {
        $kind: 'TransferObjects',
        TransferObjects: { objects: t.map((r) => U(C, r)), address: U(C, e) },
      };
    },
    SplitCoins(t, e) {
      return { $kind: 'SplitCoins', SplitCoins: { coin: U(C, t), amounts: e.map((r) => U(C, r)) } };
    },
    MergeCoins(t, e) {
      return {
        $kind: 'MergeCoins',
        MergeCoins: { destination: U(C, t), sources: e.map((r) => U(C, r)) },
      };
    },
    Publish({ modules: t, dependencies: e }) {
      return {
        $kind: 'Publish',
        Publish: {
          modules: t.map((r) => (typeof r == 'string' ? r : N(new Uint8Array(r)))),
          dependencies: e.map((r) => de(r)),
        },
      };
    },
    Upgrade({ modules: t, dependencies: e, package: r, ticket: n }) {
      return {
        $kind: 'Upgrade',
        Upgrade: {
          modules: t.map((s) => (typeof s == 'string' ? s : N(new Uint8Array(s)))),
          dependencies: e.map((s) => de(s)),
          package: r,
          ticket: U(C, n),
        },
      };
    },
    MakeMoveVec({ type: t, elements: e }) {
      return {
        $kind: 'MakeMoveVec',
        MakeMoveVec: { type: t ?? null, elements: e.map((r) => U(C, r)) },
      };
    },
    Intent({ name: t, inputs: e = {}, data: r = {} }) {
      return {
        $kind: '$Intent',
        $Intent: {
          name: t,
          inputs: Object.fromEntries(
            Object.entries(e).map(([n, s]) => [
              n,
              Array.isArray(s) ? s.map((i) => U(C, i)) : U(C, s),
            ])
          ),
          data: r,
        },
      };
    },
  },
  Ct = h({ digest: S(), objectId: S(), version: R([j(M(), $()), S(), Dt()]) }),
  Ws = je({
    ImmOrOwned: Ct,
    Shared: h({ objectId: L, initialSharedVersion: V, mutable: pt() }),
    Receiving: Ct,
  }),
  er = je({ Object: Ws, Pure: m(j(M(), $())) }),
  Fr = R([
    h({ kind: b('Input'), index: j(M(), $()), value: Ee(), type: z(b('object')) }),
    h({ kind: b('Input'), index: j(M(), $()), value: Ee(), type: b('pure') }),
  ]),
  Hs = R([h({ Epoch: j(M(), $()) }), h({ None: E(b(!0)) })]),
  tr = j(
    R([M(), S(), Dt()]),
    Ze((t) => {
      if (!['string', 'number', 'bigint'].includes(typeof t)) return !1;
      try {
        return BigInt(t), !0;
      } catch {
        return !1;
      }
    })
  ),
  Lt = R([
    h({ bool: E(b(!0)) }),
    h({ u8: E(b(!0)) }),
    h({ u64: E(b(!0)) }),
    h({ u128: E(b(!0)) }),
    h({ address: E(b(!0)) }),
    h({ signer: E(b(!0)) }),
    h({ vector: Je(() => Lt) }),
    h({ struct: Je(() => Ks) }),
    h({ u16: E(b(!0)) }),
    h({ u32: E(b(!0)) }),
    h({ u256: E(b(!0)) }),
  ]),
  Ks = h({ address: S(), module: S(), name: S(), typeParams: m(Lt) }),
  Js = h({ budget: z(tr), price: z(tr), payment: z(m(Ct)), owner: z(S()) }),
  Xs = [
    Fr,
    h({ kind: b('GasCoin') }),
    h({ kind: b('Result'), index: j(M(), $()) }),
    h({ kind: b('NestedResult'), index: j(M(), $()), resultIndex: j(M(), $()) }),
  ],
  fe = R([...Xs]),
  Ys = h({
    kind: b('MoveCall'),
    target: j(
      S(),
      Ze((t) => t.split('::').length === 3)
    ),
    typeArguments: m(S()),
    arguments: m(fe),
  }),
  Zs = h({ kind: b('TransferObjects'), objects: m(fe), address: fe }),
  Qs = h({ kind: b('SplitCoins'), coin: fe, amounts: m(fe) }),
  ei = h({ kind: b('MergeCoins'), destination: fe, sources: m(fe) }),
  ti = h({
    kind: b('MakeMoveVec'),
    type: R([h({ Some: Lt }), h({ None: E(b(!0)) })]),
    objects: m(fe),
  }),
  ri = h({ kind: b('Publish'), modules: m(m(j(M(), $()))), dependencies: m(S()) }),
  ni = h({
    kind: b('Upgrade'),
    modules: m(m(j(M(), $()))),
    dependencies: m(S()),
    packageId: S(),
    ticket: fe,
  }),
  si = [Ys, Zs, Qs, ei, ri, ni, ti],
  ii = R([...si]);
h({
  version: b(1),
  sender: z(S()),
  expiration: $e(Hs),
  gasConfig: Js,
  inputs: m(Fr),
  transactions: m(ii),
});
function rr(t) {
  var r;
  const e = t.inputs.map((n, s) => {
    if (n.Object)
      return {
        kind: 'Input',
        index: s,
        value: {
          Object: n.Object.ImmOrOwnedObject
            ? { ImmOrOwned: n.Object.ImmOrOwnedObject }
            : n.Object.Receiving
              ? {
                  Receiving: {
                    digest: n.Object.Receiving.digest,
                    version: n.Object.Receiving.version,
                    objectId: n.Object.Receiving.objectId,
                  },
                }
              : {
                  Shared: {
                    mutable: n.Object.SharedObject.mutable,
                    initialSharedVersion: n.Object.SharedObject.initialSharedVersion,
                    objectId: n.Object.SharedObject.objectId,
                  },
                },
        },
        type: 'object',
      };
    if (n.Pure)
      return {
        kind: 'Input',
        index: s,
        value: { Pure: Array.from(te(n.Pure.bytes)) },
        type: 'pure',
      };
    if (n.UnresolvedPure)
      return { kind: 'Input', type: 'pure', index: s, value: n.UnresolvedPure.value };
    if (n.UnresolvedObject)
      return { kind: 'Input', type: 'object', index: s, value: n.UnresolvedObject.objectId };
    throw new Error('Invalid input');
  });
  return {
    version: 1,
    sender: t.sender ?? void 0,
    expiration:
      ((r = t.expiration) == null ? void 0 : r.$kind) === 'Epoch'
        ? { Epoch: Number(t.expiration.Epoch) }
        : t.expiration
          ? { None: !0 }
          : null,
    gasConfig: {
      owner: t.gasData.owner ?? void 0,
      budget: t.gasData.budget ?? void 0,
      price: t.gasData.price ?? void 0,
      payment: t.gasData.payment ?? void 0,
    },
    inputs: e,
    transactions: t.commands.map((n) => {
      if (n.MakeMoveVec)
        return {
          kind: 'MakeMoveVec',
          type:
            n.MakeMoveVec.type === null
              ? { None: !0 }
              : { Some: ee.parseFromStr(n.MakeMoveVec.type) },
          objects: n.MakeMoveVec.elements.map((s) => se(s, e)),
        };
      if (n.MergeCoins)
        return {
          kind: 'MergeCoins',
          destination: se(n.MergeCoins.destination, e),
          sources: n.MergeCoins.sources.map((s) => se(s, e)),
        };
      if (n.MoveCall)
        return {
          kind: 'MoveCall',
          target: `${n.MoveCall.package}::${n.MoveCall.module}::${n.MoveCall.function}`,
          typeArguments: n.MoveCall.typeArguments,
          arguments: n.MoveCall.arguments.map((s) => se(s, e)),
        };
      if (n.Publish)
        return {
          kind: 'Publish',
          modules: n.Publish.modules.map((s) => Array.from(te(s))),
          dependencies: n.Publish.dependencies,
        };
      if (n.SplitCoins)
        return {
          kind: 'SplitCoins',
          coin: se(n.SplitCoins.coin, e),
          amounts: n.SplitCoins.amounts.map((s) => se(s, e)),
        };
      if (n.TransferObjects)
        return {
          kind: 'TransferObjects',
          objects: n.TransferObjects.objects.map((s) => se(s, e)),
          address: se(n.TransferObjects.address, e),
        };
      if (n.Upgrade)
        return {
          kind: 'Upgrade',
          modules: n.Upgrade.modules.map((s) => Array.from(te(s))),
          dependencies: n.Upgrade.dependencies,
          packageId: n.Upgrade.package,
          ticket: se(n.Upgrade.ticket, e),
        };
      throw new Error(`Unknown transaction ${Object.keys(n)}`);
    }),
  };
}
function se(t, e) {
  if (t.$kind === 'GasCoin') return { kind: 'GasCoin' };
  if (t.$kind === 'Result') return { kind: 'Result', index: t.Result };
  if (t.$kind === 'NestedResult')
    return { kind: 'NestedResult', index: t.NestedResult[0], resultIndex: t.NestedResult[1] };
  if (t.$kind === 'Input') return e[t.Input];
  throw new Error(`Invalid argument ${Object.keys(t)}`);
}
function ai(t) {
  var e, r, n;
  return U(it, {
    version: 2,
    sender: t.sender ?? null,
    expiration: t.expiration
      ? 'Epoch' in t.expiration
        ? { Epoch: t.expiration.Epoch }
        : { None: !0 }
      : null,
    gasData: {
      owner: t.gasConfig.owner ?? null,
      budget: ((e = t.gasConfig.budget) == null ? void 0 : e.toString()) ?? null,
      price: ((r = t.gasConfig.price) == null ? void 0 : r.toString()) ?? null,
      payment:
        ((n = t.gasConfig.payment) == null
          ? void 0
          : n.map((s) => ({
              digest: s.digest,
              objectId: s.objectId,
              version: s.version.toString(),
            }))) ?? null,
    },
    inputs: t.inputs.map((s) => {
      if (s.kind === 'Input') {
        if (Tt(er, s.value)) {
          const i = U(er, s.value);
          if (i.Object) {
            if (i.Object.ImmOrOwned)
              return {
                Object: {
                  ImmOrOwnedObject: {
                    objectId: i.Object.ImmOrOwned.objectId,
                    version: String(i.Object.ImmOrOwned.version),
                    digest: i.Object.ImmOrOwned.digest,
                  },
                },
              };
            if (i.Object.Shared)
              return {
                Object: {
                  SharedObject: {
                    mutable: i.Object.Shared.mutable ?? null,
                    initialSharedVersion: i.Object.Shared.initialSharedVersion,
                    objectId: i.Object.Shared.objectId,
                  },
                },
              };
            if (i.Object.Receiving)
              return {
                Object: {
                  Receiving: {
                    digest: i.Object.Receiving.digest,
                    version: String(i.Object.Receiving.version),
                    objectId: i.Object.Receiving.objectId,
                  },
                },
              };
            throw new Error('Invalid object input');
          }
          return { Pure: { bytes: N(new Uint8Array(i.Pure)) } };
        }
        return s.type === 'object'
          ? { UnresolvedObject: { objectId: s.value } }
          : { UnresolvedPure: { value: s.value } };
      }
      throw new Error('Invalid input');
    }),
    commands: t.transactions.map((s) => {
      switch (s.kind) {
        case 'MakeMoveVec':
          return {
            MakeMoveVec: {
              type: 'Some' in s.type ? ee.tagToString(s.type.Some) : null,
              elements: s.objects.map((i) => ie(i)),
            },
          };
        case 'MergeCoins':
          return {
            MergeCoins: { destination: ie(s.destination), sources: s.sources.map((i) => ie(i)) },
          };
        case 'MoveCall': {
          const [i, o, l] = s.target.split('::');
          return {
            MoveCall: {
              package: i,
              module: o,
              function: l,
              typeArguments: s.typeArguments,
              arguments: s.arguments.map((u) => ie(u)),
            },
          };
        }
        case 'Publish':
          return {
            Publish: {
              modules: s.modules.map((i) => N(Uint8Array.from(i))),
              dependencies: s.dependencies,
            },
          };
        case 'SplitCoins':
          return { SplitCoins: { coin: ie(s.coin), amounts: s.amounts.map((i) => ie(i)) } };
        case 'TransferObjects':
          return {
            TransferObjects: { objects: s.objects.map((i) => ie(i)), address: ie(s.address) },
          };
        case 'Upgrade':
          return {
            Upgrade: {
              modules: s.modules.map((i) => N(Uint8Array.from(i))),
              dependencies: s.dependencies,
              package: s.packageId,
              ticket: ie(s.ticket),
            },
          };
      }
      throw new Error(`Unknown transaction ${Object.keys(s)}`);
    }),
  });
}
function ie(t) {
  switch (t.kind) {
    case 'GasCoin':
      return { GasCoin: !0 };
    case 'Result':
      return { Result: t.index };
    case 'NestedResult':
      return { NestedResult: [t.index, t.resultIndex] };
    case 'Input':
      return { Input: t.index };
  }
}
function Qe(t) {
  return R(Object.entries(t).map(([e, r]) => h({ [e]: r })));
}
const W = Qe({
    GasCoin: b(!0),
    Input: j(M(), $()),
    Result: j(M(), $()),
    NestedResult: Vt([j(M(), $()), j(M(), $())]),
  }),
  oi = h({ budget: E(V), price: E(V), owner: E(Be), payment: E(m(ye)) }),
  ui = h({ package: L, module: S(), function: S(), typeArguments: m(S()), arguments: m(W) }),
  ci = h({ name: S(), inputs: Xe(S(), R([W, m(W)])), data: Xe(S(), Ee()) }),
  li = Qe({
    MoveCall: ui,
    TransferObjects: h({ objects: m(W), address: W }),
    SplitCoins: h({ coin: W, amounts: m(W) }),
    MergeCoins: h({ destination: W, sources: m(W) }),
    Publish: h({ modules: m(Te), dependencies: m(L) }),
    MakeMoveVec: h({ type: E(S()), elements: m(W) }),
    Upgrade: h({ modules: m(Te), dependencies: m(L), package: L, ticket: W }),
    $Intent: ci,
  }),
  di = Qe({
    ImmOrOwnedObject: ye,
    SharedObject: h({ objectId: L, initialSharedVersion: V, mutable: pt() }),
    Receiving: ye,
  }),
  hi = Qe({
    Object: di,
    Pure: h({ bytes: Te }),
    UnresolvedPure: h({ value: Ee() }),
    UnresolvedObject: h({
      objectId: L,
      version: z(E(V)),
      digest: z(E(S())),
      initialSharedVersion: z(E(V)),
    }),
  }),
  fi = Qe({ None: b(!0), Epoch: V }),
  pi = h({
    version: b(2),
    sender: $e(Be),
    expiration: $e(fi),
    gasData: oi,
    inputs: m(hi),
    commands: m(li),
  }),
  gi = 50,
  mi = 1000n,
  yi = 5e10;
async function bi(t, e, r) {
  return (
    await Oi(t, e),
    await ki(t, e),
    e.onlyTransactionKind || (await wi(t, e), await vi(t, e), await Si(t, e)),
    await Ii(t),
    await r()
  );
}
async function wi(t, e) {
  t.gasConfig.price || (t.gasConfig.price = String(await et(e).getReferenceGasPrice()));
}
async function vi(t, e) {
  if (t.gasConfig.budget) return;
  const r = await et(e).dryRunTransactionBlock({
    transactionBlock: t.build({ overrides: { gasData: { budget: String(yi), payment: [] } } }),
  });
  if (r.effects.status.status !== 'success')
    throw new Error(
      `Dry run failed, could not automatically determine a budget: ${r.effects.status.error}`,
      { cause: r }
    );
  const n = mi * BigInt(t.gasConfig.price || 1n),
    s = BigInt(r.effects.gasUsed.computationCost) + n,
    i = s + BigInt(r.effects.gasUsed.storageCost) - BigInt(r.effects.gasUsed.storageRebate);
  t.gasConfig.budget = String(i > s ? i : s);
}
async function Si(t, e) {
  if (!t.gasConfig.payment) {
    const n = (await et(e).getCoins({ owner: t.gasConfig.owner || t.sender, coinType: Wn })).data
      .filter(
        (s) =>
          !t.inputs.find((o) => {
            var l;
            return (l = o.Object) != null && l.ImmOrOwnedObject
              ? s.coinObjectId === o.Object.ImmOrOwnedObject.objectId
              : !1;
          })
      )
      .map((s) => ({ objectId: s.coinObjectId, digest: s.digest, version: s.version }));
    if (!n.length) throw new Error('No valid gas coins found for the transaction.');
    t.gasConfig.payment = n.map((s) => U(ye, s));
  }
}
async function ki(t, e) {
  const r = t.inputs.filter((c) => {
      var p;
      return (
        c.UnresolvedObject &&
        !(
          c.UnresolvedObject.version ||
          ((p = c.UnresolvedObject) != null && p.initialSharedVersion)
        )
      );
    }),
    n = [...new Set(r.map((c) => de(c.UnresolvedObject.objectId)))],
    s = n.length ? Ci(n, gi) : [],
    i = (
      await Promise.all(s.map((c) => et(e).multiGetObjects({ ids: c, options: { showOwner: !0 } })))
    ).flat(),
    o = new Map(n.map((c, p) => [c, i[p]])),
    l = Array.from(o)
      .filter(([c, p]) => p.error)
      .map(([c, p]) => JSON.stringify(p.error));
  if (l.length) throw new Error(`The following input objects are invalid: ${l.join(', ')}`);
  const u = i.map((c) => {
      if (c.error || !c.data) throw new Error(`Failed to fetch object: ${c.error}`);
      const p = c.data.owner,
        w = p && typeof p == 'object' && 'Shared' in p ? p.Shared.initial_shared_version : null;
      return {
        objectId: c.data.objectId,
        digest: c.data.digest,
        version: c.data.version,
        initialSharedVersion: w,
      };
    }),
    d = new Map(n.map((c, p) => [c, u[p]]));
  for (const [c, p] of t.inputs.entries()) {
    if (!p.UnresolvedObject) continue;
    let w;
    const y = T(p.UnresolvedObject.objectId),
      g = d.get(y);
    (p.UnresolvedObject.initialSharedVersion ?? (g == null ? void 0 : g.initialSharedVersion))
      ? (w = he.SharedObjectRef({
          objectId: y,
          initialSharedVersion:
            p.UnresolvedObject.initialSharedVersion ||
            (g == null ? void 0 : g.initialSharedVersion),
          mutable: Ei(t, c),
        }))
      : Ti(t, c) &&
        (w = he.ReceivingRef({
          objectId: y,
          digest: p.UnresolvedObject.digest ?? (g == null ? void 0 : g.digest),
          version: p.UnresolvedObject.version ?? (g == null ? void 0 : g.version),
        })),
      (t.inputs[t.inputs.indexOf(p)] =
        w ??
        he.ObjectRef({
          objectId: y,
          digest: p.UnresolvedObject.digest ?? (g == null ? void 0 : g.digest),
          version: p.UnresolvedObject.version ?? (g == null ? void 0 : g.version),
        }));
  }
}
async function Oi(t, e) {
  const { inputs: r, commands: n } = t,
    s = [],
    i = new Set();
  n.forEach((l) => {
    if (l.MoveCall) {
      if (l.MoveCall._argumentTypes) return;
      if (
        l.MoveCall.arguments
          .map((c) => (c.$kind === 'Input' ? t.inputs[c.Input] : null))
          .some(
            (c) =>
              (c == null ? void 0 : c.UnresolvedPure) || (c == null ? void 0 : c.UnresolvedObject)
          )
      ) {
        const c = `${l.MoveCall.package}::${l.MoveCall.module}::${l.MoveCall.function}`;
        i.add(c), s.push(l.MoveCall);
      }
    }
    switch (l.$kind) {
      case 'SplitCoins':
        l.SplitCoins.amounts.forEach((u) => {
          nr(u, v.U64, t);
        });
        break;
      case 'TransferObjects':
        nr(l.TransferObjects.address, v.Address, t);
        break;
    }
  });
  const o = new Map();
  if (i.size > 0) {
    const l = et(e);
    await Promise.all(
      [...i].map(async (u) => {
        const [d, c, p] = u.split('::'),
          w = await l.getNormalizedMoveFunction({ package: d, module: c, function: p });
        o.set(
          u,
          w.parameters.map((y) => _s(y))
        );
      })
    );
  }
  s.length &&
    (await Promise.all(
      s.map(async (l) => {
        const u = o.get(`${l.package}::${l.module}::${l.function}`);
        if (!u) return;
        const c = u.length > 0 && As(u.at(-1)) ? u.slice(0, u.length - 1) : u;
        l._argumentTypes = c;
      })
    )),
    n.forEach((l) => {
      if (!l.MoveCall) return;
      const u = l.MoveCall,
        d = `${u.package}::${u.module}::${u.function}`,
        c = u._argumentTypes;
      if (c) {
        if (c.length !== l.MoveCall.arguments.length)
          throw new Error(`Incorrect number of arguments for ${d}`);
        c.forEach((p, w) => {
          var P, Z;
          const y = u.arguments[w];
          if (y.$kind !== 'Input') return;
          const g = r[y.Input];
          if (!g.UnresolvedPure && !g.UnresolvedObject) return;
          const k =
              ((P = g.UnresolvedPure) == null ? void 0 : P.value) ??
              ((Z = g.UnresolvedObject) == null ? void 0 : Z.objectId),
            A = Et(p.body);
          if (A) {
            (y.type = 'pure'), (r[r.indexOf(g)] = he.Pure(A.serialize(k)));
            return;
          }
          if (typeof k != 'string')
            throw new Error(
              `Expect the argument to be an object id string, got ${JSON.stringify(k, null, 2)}`
            );
          y.type = 'object';
          const Ce = g.UnresolvedPure
            ? { $kind: 'UnresolvedObject', UnresolvedObject: { objectId: k } }
            : g;
          r[y.Input] = Ce;
        });
      }
    });
}
function Ii(t) {
  t.inputs.forEach((e, r) => {
    if (e.$kind !== 'Object' && e.$kind !== 'Pure')
      throw new Error(
        `Input at index ${r} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(e)}`
      );
  });
}
function nr(t, e, r) {
  if (t.$kind !== 'Input') return;
  const n = r.inputs[t.Input];
  n.$kind === 'UnresolvedPure' &&
    (r.inputs[t.Input] = he.Pure(e.serialize(n.UnresolvedPure.value)));
}
function Ei(t, e) {
  let r = !1;
  return (
    t.getInputUses(e, (n, s) => {
      if (s.MoveCall && s.MoveCall._argumentTypes) {
        const i = s.MoveCall.arguments.indexOf(n);
        r = s.MoveCall._argumentTypes[i].ref !== '&' || r;
      }
      (s.$kind === 'MakeMoveVec' || s.$kind === 'MergeCoins' || s.$kind === 'SplitCoins') &&
        (r = !0);
    }),
    r
  );
}
function Ti(t, e) {
  let r = !1;
  return (
    t.getInputUses(e, (n, s) => {
      if (s.MoveCall && s.MoveCall._argumentTypes) {
        const i = s.MoveCall.arguments.indexOf(n);
        r = ji(s.MoveCall._argumentTypes[i]) || r;
      }
    }),
    r
  );
}
function ji(t) {
  return typeof t.body != 'object' || !('datatype' in t.body)
    ? !1
    : t.body.datatype.package === '0x2' &&
        t.body.datatype.module === 'transfer' &&
        t.body.datatype.type === 'Receiving';
}
function et(t) {
  if (!t.client)
    throw new Error(
      'No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.'
    );
  return t.client;
}
function Ci(t, e) {
  return Array.from({ length: Math.ceil(t.length / e) }, (r, n) => t.slice(n * e, n * e + e));
}
function Mi(t) {
  function e(r) {
    return t(r);
  }
  return (
    (e.system = () => e('0x5')),
    (e.clock = () => e('0x6')),
    (e.random = () => e('0x8')),
    (e.denyList = () => e('0x403')),
    (e.option =
      ({ type: r, value: n }) =>
      (s) =>
        s.moveCall({
          typeArguments: [r],
          target: `0x1::option::${n === null ? 'none' : 'some'}`,
          arguments: n === null ? [] : [s.object(n)],
        })),
    e
  );
}
function xi(t) {
  function e(r, n) {
    if (typeof r == 'string') return t(Ge(r).serialize(n));
    if (r instanceof Uint8Array || $t(r)) return t(r);
    throw new Error('tx.pure must be called either a bcs type name, or a serialized bcs value');
  }
  return (
    (e.u8 = (r) => t(v.U8.serialize(r))),
    (e.u16 = (r) => t(v.U16.serialize(r))),
    (e.u32 = (r) => t(v.U32.serialize(r))),
    (e.u64 = (r) => t(v.U64.serialize(r))),
    (e.u128 = (r) => t(v.U128.serialize(r))),
    (e.u256 = (r) => t(v.U256.serialize(r))),
    (e.bool = (r) => t(v.Bool.serialize(r))),
    (e.string = (r) => t(v.String.serialize(r))),
    (e.address = (r) => t(v.Address.serialize(r))),
    (e.id = e.address),
    (e.vector = (r, n) => t(v.vector(Ge(r)).serialize(n))),
    (e.option = (r, n) => t(v.option(Ge(r)).serialize(n))),
    e
  );
}
function Ge(t) {
  switch (t) {
    case 'u8':
      return v.u8();
    case 'u16':
      return v.u16();
    case 'u32':
      return v.u32();
    case 'u64':
      return v.u64();
    case 'u128':
      return v.u128();
    case 'u256':
      return v.u256();
    case 'bool':
      return v.bool();
    case 'string':
      return v.string();
    case 'id':
    case 'address':
      return v.Address;
  }
  const e = t.match(/^(vector|option)<(.+)>$/);
  if (e) {
    const [r, n] = e.slice(1);
    return r === 'vector' ? v.vector(Ge(n)) : v.option(Ge(n));
  }
  throw new Error(`Invalid Pure type name: ${t}`);
}
function Ai(t, e) {
  const r = Array.from(`${t}::`).map((s) => s.charCodeAt(0)),
    n = new Uint8Array(r.length + e.length);
  return n.set(r), n.set(e, r.length), ks(n, { dkLen: 32 });
}
function sr(t) {
  return T(t).replace('0x', '');
}
class X {
  constructor(e) {
    (this.version = 2),
      (this.sender = (e == null ? void 0 : e.sender) ?? null),
      (this.expiration = (e == null ? void 0 : e.expiration) ?? null),
      (this.inputs = (e == null ? void 0 : e.inputs) ?? []),
      (this.commands = (e == null ? void 0 : e.commands) ?? []),
      (this.gasData = (e == null ? void 0 : e.gasData) ?? {
        budget: null,
        price: null,
        owner: null,
        payment: null,
      });
  }
  static fromKindBytes(e) {
    const n = v.TransactionKind.parse(e).ProgrammableTransaction;
    if (!n) throw new Error('Unable to deserialize from bytes.');
    return X.restore({
      version: 2,
      sender: null,
      expiration: null,
      gasData: { budget: null, owner: null, payment: null, price: null },
      inputs: n.inputs,
      commands: n.commands,
    });
  }
  static fromBytes(e) {
    const r = v.TransactionData.parse(e),
      n = r == null ? void 0 : r.V1,
      s = n.kind.ProgrammableTransaction;
    if (!n || !s) throw new Error('Unable to deserialize from bytes.');
    return X.restore({
      version: 2,
      sender: n.sender,
      expiration: n.expiration,
      gasData: n.gasData,
      inputs: s.inputs,
      commands: s.commands,
    });
  }
  static restore(e) {
    return e.version === 2 ? new X(U(it, e)) : new X(U(it, ai(e)));
  }
  static getDigestFromBytes(e) {
    const r = Ai('TransactionData', e);
    return ht(r);
  }
  get gasConfig() {
    return this.gasData;
  }
  set gasConfig(e) {
    this.gasData = e;
  }
  build({ maxSizeBytes: e = 1 / 0, overrides: r, onlyTransactionKind: n } = {}) {
    const s = this.inputs,
      i = this.commands,
      o = { ProgrammableTransaction: { inputs: s, commands: i } };
    if (n) return v.TransactionKind.serialize(o, { maxSize: e }).toBytes();
    const l = (r == null ? void 0 : r.expiration) ?? this.expiration,
      u = (r == null ? void 0 : r.sender) ?? this.sender,
      d = {
        ...this.gasData,
        ...(r == null ? void 0 : r.gasConfig),
        ...(r == null ? void 0 : r.gasData),
      };
    if (!u) throw new Error('Missing transaction sender');
    if (!d.budget) throw new Error('Missing gas budget');
    if (!d.payment) throw new Error('Missing gas payment');
    if (!d.price) throw new Error('Missing gas price');
    const c = {
      sender: sr(u),
      expiration: l || { None: !0 },
      gasData: {
        payment: d.payment,
        owner: sr(this.gasData.owner ?? u),
        price: BigInt(d.price),
        budget: BigInt(d.budget),
      },
      kind: { ProgrammableTransaction: { inputs: s, commands: i } },
    };
    return v.TransactionData.serialize({ V1: c }, { maxSize: e }).toBytes();
  }
  addInput(e, r) {
    const n = this.inputs.length;
    return this.inputs.push(r), { Input: n, type: e, $kind: 'Input' };
  }
  getInputUses(e, r) {
    this.mapArguments((n, s) => (n.$kind === 'Input' && n.Input === e && r(n, s), n));
  }
  mapArguments(e) {
    for (const r of this.commands)
      switch (r.$kind) {
        case 'MoveCall':
          r.MoveCall.arguments = r.MoveCall.arguments.map((s) => e(s, r));
          break;
        case 'TransferObjects':
          (r.TransferObjects.objects = r.TransferObjects.objects.map((s) => e(s, r))),
            (r.TransferObjects.address = e(r.TransferObjects.address, r));
          break;
        case 'SplitCoins':
          (r.SplitCoins.coin = e(r.SplitCoins.coin, r)),
            (r.SplitCoins.amounts = r.SplitCoins.amounts.map((s) => e(s, r)));
          break;
        case 'MergeCoins':
          (r.MergeCoins.destination = e(r.MergeCoins.destination, r)),
            (r.MergeCoins.sources = r.MergeCoins.sources.map((s) => e(s, r)));
          break;
        case 'MakeMoveVec':
          r.MakeMoveVec.elements = r.MakeMoveVec.elements.map((s) => e(s, r));
          break;
        case 'Upgrade':
          r.Upgrade.ticket = e(r.Upgrade.ticket, r);
          break;
        case '$Intent':
          const n = r.$Intent.inputs;
          r.$Intent.inputs = {};
          for (const [s, i] of Object.entries(n))
            r.$Intent.inputs[s] = Array.isArray(i) ? i.map((o) => e(o, r)) : e(i, r);
          break;
        case 'Publish':
          break;
        default:
          throw new Error(`Unexpected transaction kind: ${r.$kind}`);
      }
  }
  replaceCommand(e, r) {
    if (!Array.isArray(r)) {
      this.commands[e] = r;
      return;
    }
    const n = r.length - 1;
    this.commands.splice(e, 1, ...r),
      n !== 0 &&
        this.mapArguments((s) => {
          switch (s.$kind) {
            case 'Result':
              s.Result > e && (s.Result += n);
              break;
            case 'NestedResult':
              s.NestedResult[0] > e && (s.NestedResult[0] += n);
              break;
          }
          return s;
        });
  }
  getDigest() {
    const e = this.build({ onlyTransactionKind: !1 });
    return X.getDigestFromBytes(e);
  }
  snapshot() {
    return U(it, this);
  }
}
function ir(t) {
  if (typeof t == 'string') return T(t);
  if (t.Object)
    return t.Object.ImmOrOwnedObject
      ? T(t.Object.ImmOrOwnedObject.objectId)
      : t.Object.Receiving
        ? T(t.Object.Receiving.objectId)
        : T(t.Object.SharedObject.objectId);
  if (t.UnresolvedObject) return T(t.UnresolvedObject.objectId);
}
var Wr = (t) => {
    throw TypeError(t);
  },
  Gt = (t, e, r) => e.has(t) || Wr('Cannot ' + r),
  O = (t, e, r) => (Gt(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  Pe = (t, e, r) =>
    e.has(t)
      ? Wr('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  we = (t, e, r, n) => (Gt(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  oe = (t, e, r) => (Gt(t, e, 'access private method'), r),
  ze,
  qe,
  ke,
  I,
  H,
  at,
  qt,
  Mt,
  Ft;
function ar(t, e = 1 / 0) {
  const r = { $kind: 'Result', Result: t },
    n = [],
    s = (i) => n[i] ?? (n[i] = { $kind: 'NestedResult', NestedResult: [t, i] });
  return new Proxy(r, {
    set() {
      throw new Error(
        'The transaction result is a proxy, and does not support setting properties directly'
      );
    },
    get(i, o) {
      if (o in i) return Reflect.get(i, o);
      if (o === Symbol.iterator)
        return function* () {
          let u = 0;
          for (; u < e; ) yield s(u), u++;
        };
      if (typeof o == 'symbol') return;
      const l = parseInt(o, 10);
      if (!(Number.isNaN(l) || l < 0)) return s(l);
    },
  });
}
const Hr = Symbol.for('@mysten/transaction');
function Kr(t) {
  return !!t && typeof t == 'object' && t[Hr] === !0;
}
const or = { buildPlugins: new Map(), serializationPlugins: new Map() },
  Ot = Symbol.for('@mysten/transaction/registry');
function Re() {
  try {
    const t = globalThis;
    return t[Ot] || (t[Ot] = or), t[Ot];
  } catch {
    return or;
  }
}
const _i = class xt {
  constructor() {
    Pe(this, H),
      Pe(this, ze),
      Pe(this, qe),
      Pe(this, ke, new Map()),
      Pe(this, I),
      (this.object = Mi((r) => {
        var i, o;
        if (typeof r == 'function') return this.object(r(this));
        if (typeof r == 'object' && Tt(C, r)) return r;
        const n = ir(r),
          s = O(this, I).inputs.find((l) => n === ir(l));
        return (
          (i = s == null ? void 0 : s.Object) != null &&
            i.SharedObject &&
            typeof r == 'object' &&
            (o = r.Object) != null &&
            o.SharedObject &&
            (s.Object.SharedObject.mutable =
              s.Object.SharedObject.mutable || r.Object.SharedObject.mutable),
          s
            ? { $kind: 'Input', Input: O(this, I).inputs.indexOf(s), type: 'object' }
            : O(this, I).addInput(
                'object',
                typeof r == 'string'
                  ? { $kind: 'UnresolvedObject', UnresolvedObject: { objectId: T(r) } }
                  : r
              )
        );
      }));
    const e = Re();
    we(this, I, new X()),
      we(this, qe, [...e.buildPlugins.values()]),
      we(this, ze, [...e.serializationPlugins.values()]);
  }
  static fromKind(e) {
    const r = new xt();
    return we(r, I, X.fromKindBytes(typeof e == 'string' ? te(e) : e)), r;
  }
  static from(e) {
    const r = new xt();
    return (
      Kr(e)
        ? we(r, I, new X(e.getData()))
        : typeof e != 'string' || !e.startsWith('{')
          ? we(r, I, X.fromBytes(typeof e == 'string' ? te(e) : e))
          : we(r, I, X.restore(JSON.parse(e))),
      r
    );
  }
  static registerGlobalSerializationPlugin(e, r) {
    Re().serializationPlugins.set(e, r ?? e);
  }
  static unregisterGlobalSerializationPlugin(e) {
    Re().serializationPlugins.delete(e);
  }
  static registerGlobalBuildPlugin(e, r) {
    Re().buildPlugins.set(e, r ?? e);
  }
  static unregisterGlobalBuildPlugin(e) {
    Re().buildPlugins.delete(e);
  }
  addSerializationPlugin(e) {
    O(this, ze).push(e);
  }
  addBuildPlugin(e) {
    O(this, qe).push(e);
  }
  addIntentResolver(e, r) {
    if (O(this, ke).has(e) && O(this, ke).get(e) !== r)
      throw new Error(`Intent resolver for ${e} already exists`);
    O(this, ke).set(e, r);
  }
  setSender(e) {
    O(this, I).sender = e;
  }
  setSenderIfNotSet(e) {
    O(this, I).sender || (O(this, I).sender = e);
  }
  setExpiration(e) {
    O(this, I).expiration = e ? U(qr, e) : null;
  }
  setGasPrice(e) {
    O(this, I).gasConfig.price = String(e);
  }
  setGasBudget(e) {
    O(this, I).gasConfig.budget = String(e);
  }
  setGasBudgetIfNotSet(e) {
    O(this, I).gasData.budget == null && (O(this, I).gasConfig.budget = String(e));
  }
  setGasOwner(e) {
    O(this, I).gasConfig.owner = e;
  }
  setGasPayment(e) {
    O(this, I).gasConfig.payment = e.map((r) => U(ye, r));
  }
  get blockData() {
    return rr(O(this, I).snapshot());
  }
  getData() {
    return O(this, I).snapshot();
  }
  get [Hr]() {
    return !0;
  }
  get pure() {
    return (
      Object.defineProperty(this, 'pure', {
        enumerable: !1,
        value: xi((e) =>
          $t(e)
            ? O(this, I).addInput('pure', { $kind: 'Pure', Pure: { bytes: e.toBase64() } })
            : O(this, I).addInput(
                'pure',
                Tt(Qt, e)
                  ? U(Qt, e)
                  : e instanceof Uint8Array
                    ? he.Pure(e)
                    : { $kind: 'UnresolvedPure', UnresolvedPure: { value: e } }
              )
        ),
      }),
      this.pure
    );
  }
  get gas() {
    return { $kind: 'GasCoin', GasCoin: !0 };
  }
  objectRef(...e) {
    return this.object(he.ObjectRef(...e));
  }
  receivingRef(...e) {
    return this.object(he.ReceivingRef(...e));
  }
  sharedObjectRef(...e) {
    return this.object(he.SharedObjectRef(...e));
  }
  add(e) {
    if (typeof e == 'function') return e(this);
    const r = O(this, I).commands.push(e);
    return ar(r - 1);
  }
  splitCoins(e, r) {
    const n = be.SplitCoins(
        typeof e == 'string' ? this.object(e) : oe(this, H, qt).call(this, e),
        r.map((i) =>
          typeof i == 'number' || typeof i == 'bigint' || typeof i == 'string'
            ? this.pure.u64(i)
            : oe(this, H, at).call(this, i)
        )
      ),
      s = O(this, I).commands.push(n);
    return ar(s - 1, r.length);
  }
  mergeCoins(e, r) {
    return this.add(
      be.MergeCoins(
        this.object(e),
        r.map((n) => this.object(n))
      )
    );
  }
  publish({ modules: e, dependencies: r }) {
    return this.add(be.Publish({ modules: e, dependencies: r }));
  }
  upgrade({ modules: e, dependencies: r, package: n, ticket: s }) {
    return this.add(
      be.Upgrade({ modules: e, dependencies: r, package: n, ticket: this.object(s) })
    );
  }
  moveCall({ arguments: e, ...r }) {
    return this.add(
      be.MoveCall({
        ...r,
        arguments: e == null ? void 0 : e.map((n) => oe(this, H, at).call(this, n)),
      })
    );
  }
  transferObjects(e, r) {
    return this.add(
      be.TransferObjects(
        e.map((n) => this.object(n)),
        typeof r == 'string' ? this.pure.address(r) : oe(this, H, at).call(this, r)
      )
    );
  }
  makeMoveVec({ type: e, elements: r }) {
    return this.add(be.MakeMoveVec({ type: e, elements: r.map((n) => this.object(n)) }));
  }
  serialize() {
    return JSON.stringify(rr(O(this, I).snapshot()));
  }
  async toJSON(e = {}) {
    return (
      await this.prepareForSerialization(e),
      JSON.stringify(
        U(pi, O(this, I).snapshot()),
        (r, n) => (typeof n == 'bigint' ? n.toString() : n),
        2
      )
    );
  }
  async sign(e) {
    const { signer: r, ...n } = e,
      s = await this.build(n);
    return r.signTransaction(s);
  }
  async build(e = {}) {
    return (
      await this.prepareForSerialization(e),
      await oe(this, H, Mt).call(this, e),
      O(this, I).build({ onlyTransactionKind: e.onlyTransactionKind })
    );
  }
  async getDigest(e = {}) {
    return await oe(this, H, Mt).call(this, e), O(this, I).getDigest();
  }
  async prepareForSerialization(e) {
    var s;
    const r = new Set();
    for (const i of O(this, I).commands) i.$Intent && r.add(i.$Intent.name);
    const n = [...O(this, ze)];
    for (const i of r)
      if (!((s = e.supportedIntents) != null && s.includes(i))) {
        if (!O(this, ke).has(i)) throw new Error(`Missing intent resolver for ${i}`);
        n.push(O(this, ke).get(i));
      }
    await oe(this, H, Ft).call(this, n, e);
  }
};
ze = new WeakMap();
qe = new WeakMap();
ke = new WeakMap();
I = new WeakMap();
H = new WeakSet();
at = function (t) {
  return $t(t) ? this.pure(t) : oe(this, H, qt).call(this, t);
};
qt = function (t) {
  return typeof t == 'function' ? U(C, t(this)) : U(C, t);
};
Mt = async function (t) {
  if (!t.onlyTransactionKind && !O(this, I).sender) throw new Error('Missing transaction sender');
  await oe(this, H, Ft).call(this, [...O(this, qe), bi], t);
};
Ft = async function (t, e) {
  const r = (n) => {
    if (n >= t.length) return () => {};
    const s = t[n];
    return async () => {
      const i = r(n + 1);
      let o = !1,
        l = !1;
      if (
        (await s(O(this, I), e, async () => {
          if (o) throw new Error(`next() was call multiple times in TransactionPlugin ${n}`);
          (o = !0), await i(), (l = !0);
        }),
        !o)
      )
        throw new Error(`next() was not called in TransactionPlugin ${n}`);
      if (!l) throw new Error(`next() was not awaited in TransactionPlugin ${n}`);
    };
  };
  await r(0)();
};
let Wi = _i;
const Ui = '1.18.0',
  $i = '1.40.0',
  Bi = {
    '-32700': 'ParseError',
    '-32701': 'OversizedRequest',
    '-32702': 'OversizedResponse',
    '-32600': 'InvalidRequest',
    '-32601': 'MethodNotFound',
    '-32602': 'InvalidParams',
    '-32603': 'InternalError',
    '-32604': 'ServerBusy',
    '-32000': 'CallExecutionFailed',
    '-32001': 'UnknownError',
    '-32003': 'SubscriptionClosed',
    '-32004': 'SubscriptionClosedWithError',
    '-32005': 'BatchesNotSupported',
    '-32006': 'TooManySubscriptions',
    '-32050': 'TransientError',
    '-32002': 'TransactionExecutionClientError',
  };
class Jr extends Error {}
class Xr extends Jr {
  constructor(e, r) {
    super(e), (this.code = r), (this.type = Bi[r] ?? 'ServerError');
  }
}
class Pi extends Jr {
  constructor(e, r, n) {
    super(e), (this.status = r), (this.statusText = n);
  }
}
var Yr = (t) => {
    throw TypeError(t);
  },
  Wt = (t, e, r) => e.has(t) || Yr('Cannot ' + r),
  _ = (t, e, r) => (Wt(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  ve = (t, e, r) =>
    e.has(t)
      ? Yr('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  _e = (t, e, r, n) => (Wt(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  Zr = (t, e, r) => (Wt(t, e, 'access private method'), r),
  Ri = (t, e, r, n) => ({
    set _(s) {
      _e(t, e, s, r);
    },
    get _() {
      return _(t, e, n);
    },
  }),
  Oe,
  Fe,
  ce,
  Ie,
  Ye,
  Ue,
  dt,
  Qr,
  en;
function Ni(t) {
  const e = new URL(t);
  return (e.protocol = e.protocol.replace('http', 'ws')), e.toString();
}
const zi = {
  WebSocketConstructor: typeof WebSocket < 'u' ? WebSocket : void 0,
  callTimeout: 3e4,
  reconnectTimeout: 3e3,
  maxReconnects: 5,
};
class Di {
  constructor(e, r = {}) {
    if (
      (ve(this, dt),
      ve(this, Oe, 0),
      ve(this, Fe, 0),
      ve(this, ce, null),
      ve(this, Ie, null),
      ve(this, Ye, new Set()),
      ve(this, Ue, new Map()),
      (this.endpoint = e),
      (this.options = { ...zi, ...r }),
      !this.options.WebSocketConstructor)
    )
      throw new Error('Missing WebSocket constructor');
    this.endpoint.startsWith('http') && (this.endpoint = Ni(this.endpoint));
  }
  async makeRequest(e, r) {
    const n = await Zr(this, dt, Qr).call(this);
    return new Promise((s, i) => {
      _e(this, Oe, _(this, Oe) + 1),
        _(this, Ue).set(_(this, Oe), {
          resolve: s,
          reject: i,
          timeout: setTimeout(() => {
            _(this, Ue).delete(_(this, Oe)), i(new Error(`Request timeout: ${e}`));
          }, this.options.callTimeout),
        }),
        n.send(JSON.stringify({ jsonrpc: '2.0', id: _(this, Oe), method: e, params: r }));
    }).then(({ error: s, result: i }) => {
      if (s) throw new Xr(s.message, s.code);
      return i;
    });
  }
  async subscribe(e) {
    const r = new Vi(e);
    return _(this, Ye).add(r), await r.subscribe(this), () => r.unsubscribe(this);
  }
}
Oe = new WeakMap();
Fe = new WeakMap();
ce = new WeakMap();
Ie = new WeakMap();
Ye = new WeakMap();
Ue = new WeakMap();
dt = new WeakSet();
Qr = function () {
  return _(this, Ie)
    ? _(this, Ie)
    : (_e(
        this,
        Ie,
        new Promise((t) => {
          var e;
          (e = _(this, ce)) == null || e.close(),
            _e(this, ce, new this.options.WebSocketConstructor(this.endpoint)),
            _(this, ce).addEventListener('open', () => {
              _e(this, Fe, 0), t(_(this, ce));
            }),
            _(this, ce).addEventListener('close', () => {
              Ri(this, Fe)._++,
                _(this, Fe) <= this.options.maxReconnects &&
                  setTimeout(() => {
                    Zr(this, dt, en).call(this);
                  }, this.options.reconnectTimeout);
            }),
            _(this, ce).addEventListener('message', ({ data: r }) => {
              let n;
              try {
                n = JSON.parse(r);
              } catch (s) {
                console.error(new Error(`Failed to parse RPC message: ${r}`, { cause: s }));
                return;
              }
              if ('id' in n && n.id != null && _(this, Ue).has(n.id)) {
                const { resolve: s, timeout: i } = _(this, Ue).get(n.id);
                clearTimeout(i), s(n);
              } else if ('params' in n) {
                const { params: s } = n;
                _(this, Ye).forEach((i) => {
                  i.subscriptionId === s.subscription &&
                    s.subscription === i.subscriptionId &&
                    i.onMessage(s.result);
                });
              }
            });
        })
      ),
      _(this, Ie));
};
en = async function () {
  var t;
  return (
    (t = _(this, ce)) == null || t.close(),
    _e(this, Ie, null),
    Promise.allSettled([..._(this, Ye)].map((e) => e.subscribe(this)))
  );
};
class Vi {
  constructor(e) {
    (this.subscriptionId = null), (this.subscribed = !1), (this.input = e);
  }
  onMessage(e) {
    this.subscribed && this.input.onMessage(e);
  }
  async unsubscribe(e) {
    const { subscriptionId: r } = this;
    return (
      (this.subscribed = !1),
      r == null ? !1 : ((this.subscriptionId = null), e.makeRequest(this.input.unsubscribe, [r]))
    );
  }
  async subscribe(e) {
    (this.subscriptionId = null), (this.subscribed = !0);
    const r = await e.makeRequest(this.input.method, this.input.params);
    this.subscribed && (this.subscriptionId = r);
  }
}
var tn = (t) => {
    throw TypeError(t);
  },
  Ht = (t, e, r) => e.has(t) || tn('Cannot ' + r),
  F = (t, e, r) => (Ht(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  nt = (t, e, r) =>
    e.has(t)
      ? tn('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  At = (t, e, r, n) => (Ht(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  Li = (t, e, r) => (Ht(t, e, 'access private method'), r),
  De,
  J,
  We,
  _t,
  rn;
class Gi {
  constructor(e) {
    nt(this, _t), nt(this, De, 0), nt(this, J), nt(this, We), At(this, J, e);
  }
  fetch(e, r) {
    const n = F(this, J).fetch ?? fetch;
    if (!n)
      throw new Error(
        'The current environment does not support fetch, you can provide a fetch implementation in the options for SuiHTTPTransport.'
      );
    return n(e, r);
  }
  async request(e) {
    var s, i;
    At(this, De, F(this, De) + 1);
    const r = await this.fetch(((s = F(this, J).rpc) == null ? void 0 : s.url) ?? F(this, J).url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Sdk-Type': 'typescript',
        'Client-Sdk-Version': Ui,
        'Client-Target-Api-Version': $i,
        'Client-Request-Method': e.method,
        ...((i = F(this, J).rpc) == null ? void 0 : i.headers),
      },
      body: JSON.stringify({ jsonrpc: '2.0', id: F(this, De), method: e.method, params: e.params }),
    });
    if (!r.ok) throw new Pi(`Unexpected status code: ${r.status}`, r.status, r.statusText);
    const n = await r.json();
    if ('error' in n && n.error != null) throw new Xr(n.error.message, n.error.code);
    return n.result;
  }
  async subscribe(e) {
    const r = await Li(this, _t, rn).call(this).subscribe(e);
    return async () => !!(await r());
  }
}
De = new WeakMap();
J = new WeakMap();
We = new WeakMap();
_t = new WeakSet();
rn = function () {
  var t;
  if (!F(this, We)) {
    const e = F(this, J).WebSocketConstructor ?? WebSocket;
    if (!e)
      throw new Error(
        'The current environment does not support WebSocket, you can provide a WebSocketConstructor in the options for SuiHTTPTransport.'
      );
    At(
      this,
      We,
      new Di(((t = F(this, J).websocket) == null ? void 0 : t.url) ?? F(this, J).url, {
        WebSocketConstructor: e,
        ...F(this, J).websocket,
      })
    );
  }
  return F(this, We);
};
const qi = Symbol.for('@mysten/SuiClient');
class Hi {
  get [qi]() {
    return !0;
  }
  constructor(e) {
    this.transport = e.transport ?? new Gi({ url: e.url });
  }
  async getRpcApiVersion() {
    return (await this.transport.request({ method: 'rpc.discover', params: [] })).info.version;
  }
  async getCoins(e) {
    if (!e.owner || !ue(T(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getCoins',
      params: [e.owner, e.coinType, e.cursor, e.limit],
    });
  }
  async getAllCoins(e) {
    if (!e.owner || !ue(T(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getAllCoins',
      params: [e.owner, e.cursor, e.limit],
    });
  }
  async getBalance(e) {
    if (!e.owner || !ue(T(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getBalance',
      params: [e.owner, e.coinType],
    });
  }
  async getAllBalances(e) {
    if (!e.owner || !ue(T(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({ method: 'suix_getAllBalances', params: [e.owner] });
  }
  async getCoinMetadata(e) {
    return await this.transport.request({ method: 'suix_getCoinMetadata', params: [e.coinType] });
  }
  async getTotalSupply(e) {
    return await this.transport.request({ method: 'suix_getTotalSupply', params: [e.coinType] });
  }
  async call(e, r) {
    return await this.transport.request({ method: e, params: r });
  }
  async getMoveFunctionArgTypes(e) {
    return await this.transport.request({
      method: 'sui_getMoveFunctionArgTypes',
      params: [e.package, e.module, e.function],
    });
  }
  async getNormalizedMoveModulesByPackage(e) {
    return await this.transport.request({
      method: 'sui_getNormalizedMoveModulesByPackage',
      params: [e.package],
    });
  }
  async getNormalizedMoveModule(e) {
    return await this.transport.request({
      method: 'sui_getNormalizedMoveModule',
      params: [e.package, e.module],
    });
  }
  async getNormalizedMoveFunction(e) {
    return await this.transport.request({
      method: 'sui_getNormalizedMoveFunction',
      params: [e.package, e.module, e.function],
    });
  }
  async getNormalizedMoveStruct(e) {
    return await this.transport.request({
      method: 'sui_getNormalizedMoveStruct',
      params: [e.package, e.module, e.struct],
    });
  }
  async getOwnedObjects(e) {
    if (!e.owner || !ue(T(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getOwnedObjects',
      params: [e.owner, { filter: e.filter, options: e.options }, e.cursor, e.limit],
    });
  }
  async getObject(e) {
    if (!e.id || !tt(de(e.id))) throw new Error('Invalid Sui Object id');
    return await this.transport.request({ method: 'sui_getObject', params: [e.id, e.options] });
  }
  async tryGetPastObject(e) {
    return await this.transport.request({
      method: 'sui_tryGetPastObject',
      params: [e.id, e.version, e.options],
    });
  }
  async multiGetObjects(e) {
    if (
      (e.ids.forEach((n) => {
        if (!n || !tt(de(n))) throw new Error(`Invalid Sui Object id ${n}`);
      }),
      e.ids.length !== new Set(e.ids).size)
    )
      throw new Error(`Duplicate object ids in batch call ${e.ids}`);
    return await this.transport.request({
      method: 'sui_multiGetObjects',
      params: [e.ids, e.options],
    });
  }
  async queryTransactionBlocks(e) {
    return await this.transport.request({
      method: 'suix_queryTransactionBlocks',
      params: [
        { filter: e.filter, options: e.options },
        e.cursor,
        e.limit,
        (e.order || 'descending') === 'descending',
      ],
    });
  }
  async getTransactionBlock(e) {
    if (!Jt(e.digest)) throw new Error('Invalid Transaction digest');
    return await this.transport.request({
      method: 'sui_getTransactionBlock',
      params: [e.digest, e.options],
    });
  }
  async multiGetTransactionBlocks(e) {
    if (
      (e.digests.forEach((n) => {
        if (!Jt(n)) throw new Error(`Invalid Transaction digest ${n}`);
      }),
      e.digests.length !== new Set(e.digests).size)
    )
      throw new Error(`Duplicate digests in batch call ${e.digests}`);
    return await this.transport.request({
      method: 'sui_multiGetTransactionBlocks',
      params: [e.digests, e.options],
    });
  }
  async executeTransactionBlock({ transactionBlock: e, signature: r, options: n, requestType: s }) {
    const i = await this.transport.request({
      method: 'sui_executeTransactionBlock',
      params: [typeof e == 'string' ? e : N(e), Array.isArray(r) ? r : [r], n],
    });
    if (s === 'WaitForLocalExecution')
      try {
        await this.waitForTransaction({ digest: i.digest });
      } catch {}
    return i;
  }
  async signAndExecuteTransaction({ transaction: e, signer: r, ...n }) {
    let s;
    e instanceof Uint8Array
      ? (s = e)
      : (e.setSenderIfNotSet(r.toSuiAddress()), (s = await e.build({ client: this })));
    const { signature: i, bytes: o } = await r.signTransaction(s);
    return this.executeTransactionBlock({ transactionBlock: o, signature: i, ...n });
  }
  async getTotalTransactionBlocks() {
    const e = await this.transport.request({ method: 'sui_getTotalTransactionBlocks', params: [] });
    return BigInt(e);
  }
  async getReferenceGasPrice() {
    const e = await this.transport.request({ method: 'suix_getReferenceGasPrice', params: [] });
    return BigInt(e);
  }
  async getStakes(e) {
    if (!e.owner || !ue(T(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({ method: 'suix_getStakes', params: [e.owner] });
  }
  async getStakesByIds(e) {
    return (
      e.stakedSuiIds.forEach((r) => {
        if (!r || !tt(de(r))) throw new Error(`Invalid Sui Stake id ${r}`);
      }),
      await this.transport.request({ method: 'suix_getStakesByIds', params: [e.stakedSuiIds] })
    );
  }
  async getLatestSuiSystemState() {
    return await this.transport.request({ method: 'suix_getLatestSuiSystemState', params: [] });
  }
  async queryEvents(e) {
    return await this.transport.request({
      method: 'suix_queryEvents',
      params: [e.query, e.cursor, e.limit, (e.order || 'descending') === 'descending'],
    });
  }
  async subscribeEvent(e) {
    return this.transport.subscribe({
      method: 'suix_subscribeEvent',
      unsubscribe: 'suix_unsubscribeEvent',
      params: [e.filter],
      onMessage: e.onMessage,
    });
  }
  async subscribeTransaction(e) {
    return this.transport.subscribe({
      method: 'suix_subscribeTransaction',
      unsubscribe: 'suix_unsubscribeTransaction',
      params: [e.filter],
      onMessage: e.onMessage,
    });
  }
  async devInspectTransactionBlock(e) {
    var n;
    let r;
    if (Kr(e.transactionBlock))
      e.transactionBlock.setSenderIfNotSet(e.sender),
        (r = N(await e.transactionBlock.build({ client: this, onlyTransactionKind: !0 })));
    else if (typeof e.transactionBlock == 'string') r = e.transactionBlock;
    else if (e.transactionBlock instanceof Uint8Array) r = N(e.transactionBlock);
    else throw new Error('Unknown transaction block format.');
    return await this.transport.request({
      method: 'sui_devInspectTransactionBlock',
      params: [e.sender, r, (n = e.gasPrice) == null ? void 0 : n.toString(), e.epoch],
    });
  }
  async dryRunTransactionBlock(e) {
    return await this.transport.request({
      method: 'sui_dryRunTransactionBlock',
      params: [typeof e.transactionBlock == 'string' ? e.transactionBlock : N(e.transactionBlock)],
    });
  }
  async getDynamicFields(e) {
    if (!e.parentId || !tt(de(e.parentId))) throw new Error('Invalid Sui Object id');
    return await this.transport.request({
      method: 'suix_getDynamicFields',
      params: [e.parentId, e.cursor, e.limit],
    });
  }
  async getDynamicFieldObject(e) {
    return await this.transport.request({
      method: 'suix_getDynamicFieldObject',
      params: [e.parentId, e.name],
    });
  }
  async getLatestCheckpointSequenceNumber() {
    const e = await this.transport.request({
      method: 'sui_getLatestCheckpointSequenceNumber',
      params: [],
    });
    return String(e);
  }
  async getCheckpoint(e) {
    return await this.transport.request({ method: 'sui_getCheckpoint', params: [e.id] });
  }
  async getCheckpoints(e) {
    return await this.transport.request({
      method: 'sui_getCheckpoints',
      params: [e.cursor, e == null ? void 0 : e.limit, e.descendingOrder],
    });
  }
  async getCommitteeInfo(e) {
    return await this.transport.request({
      method: 'suix_getCommitteeInfo',
      params: [e == null ? void 0 : e.epoch],
    });
  }
  async getNetworkMetrics() {
    return await this.transport.request({ method: 'suix_getNetworkMetrics', params: [] });
  }
  async getAddressMetrics() {
    return await this.transport.request({ method: 'suix_getLatestAddressMetrics', params: [] });
  }
  async getEpochMetrics(e) {
    return await this.transport.request({
      method: 'suix_getEpochMetrics',
      params: [
        e == null ? void 0 : e.cursor,
        e == null ? void 0 : e.limit,
        e == null ? void 0 : e.descendingOrder,
      ],
    });
  }
  async getAllEpochAddressMetrics(e) {
    return await this.transport.request({
      method: 'suix_getAllEpochAddressMetrics',
      params: [e == null ? void 0 : e.descendingOrder],
    });
  }
  async getEpochs(e) {
    return await this.transport.request({
      method: 'suix_getEpochs',
      params: [
        e == null ? void 0 : e.cursor,
        e == null ? void 0 : e.limit,
        e == null ? void 0 : e.descendingOrder,
      ],
    });
  }
  async getMoveCallMetrics() {
    return await this.transport.request({ method: 'suix_getMoveCallMetrics', params: [] });
  }
  async getCurrentEpoch() {
    return await this.transport.request({ method: 'suix_getCurrentEpoch', params: [] });
  }
  async getValidatorsApy() {
    return await this.transport.request({ method: 'suix_getValidatorsApy', params: [] });
  }
  async getChainIdentifier() {
    const e = await this.getCheckpoint({ id: '0' }),
      r = He(e.digest);
    return Ke(r.slice(0, 4));
  }
  async resolveNameServiceAddress(e) {
    return await this.transport.request({
      method: 'suix_resolveNameServiceAddress',
      params: [e.name],
    });
  }
  async resolveNameServiceNames({ format: e = 'dot', ...r }) {
    const {
      nextCursor: n,
      hasNextPage: s,
      data: i,
    } = await this.transport.request({
      method: 'suix_resolveNameServiceNames',
      params: [r.address, r.cursor, r.limit],
    });
    return { hasNextPage: s, nextCursor: n, data: i.map((o) => qn(o, e)) };
  }
  async getProtocolConfig(e) {
    return await this.transport.request({
      method: 'sui_getProtocolConfig',
      params: [e == null ? void 0 : e.version],
    });
  }
  async waitForTransaction({ signal: e, timeout: r = 60 * 1e3, pollInterval: n = 2 * 1e3, ...s }) {
    const i = AbortSignal.timeout(r),
      o = new Promise((l, u) => {
        i.addEventListener('abort', () => u(i.reason));
      });
    for (o.catch(() => {}); !i.aborted; ) {
      e == null || e.throwIfAborted();
      try {
        return await this.getTransactionBlock(s);
      } catch {
        await Promise.race([new Promise((u) => setTimeout(u, n)), o]);
      }
    }
    throw (i.throwIfAborted(), new Error('Unexpected error while waiting for transaction block.'));
  }
}
export { Hi as S, Wi as T };
