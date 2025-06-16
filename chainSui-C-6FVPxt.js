var hn = Object.defineProperty;
var fn = (t, e, r) =>
  e in t ? hn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r);
var Qt = (t, e, r) => fn(t, typeof e != 'symbol' ? e + '' : e, r);
function pn(t) {
  if (t.length >= 255) throw new TypeError('Alphabet too long');
  const e = new Uint8Array(256);
  for (let d = 0; d < e.length; d++) e[d] = 255;
  for (let d = 0; d < t.length; d++) {
    const u = t.charAt(d),
      h = u.charCodeAt(0);
    if (e[h] !== 255) throw new TypeError(u + ' is ambiguous');
    e[h] = d;
  }
  const r = t.length,
    n = t.charAt(0),
    s = Math.log(r) / Math.log(256),
    i = Math.log(256) / Math.log(r);
  function a(d) {
    if (
      (d instanceof Uint8Array ||
        (ArrayBuffer.isView(d)
          ? (d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength))
          : Array.isArray(d) && (d = Uint8Array.from(d))),
      !(d instanceof Uint8Array))
    )
      throw new TypeError('Expected Uint8Array');
    if (d.length === 0) return '';
    let u = 0,
      h = 0,
      b = 0;
    const m = d.length;
    for (; b !== m && d[b] === 0; ) b++, u++;
    const g = ((m - b) * i + 1) >>> 0,
      S = new Uint8Array(g);
    for (; b !== m; ) {
      let B = d[b],
        ee = 0;
      for (let ie = g - 1; (B !== 0 || ee < h) && ie !== -1; ie--, ee++)
        (B += (256 * S[ie]) >>> 0), (S[ie] = B % r >>> 0), (B = (B / r) >>> 0);
      if (B !== 0) throw new Error('Non-zero carry');
      (h = ee), b++;
    }
    let T = g - h;
    for (; T !== g && S[T] === 0; ) T++;
    let se = n.repeat(u);
    for (; T < g; ++T) se += t.charAt(S[T]);
    return se;
  }
  function l(d) {
    if (typeof d != 'string') throw new TypeError('Expected String');
    if (d.length === 0) return new Uint8Array();
    let u = 0,
      h = 0,
      b = 0;
    for (; d[u] === n; ) h++, u++;
    const m = ((d.length - u) * s + 1) >>> 0,
      g = new Uint8Array(m);
    for (; d[u]; ) {
      let B = e[d.charCodeAt(u)];
      if (B === 255) return;
      let ee = 0;
      for (let ie = m - 1; (B !== 0 || ee < b) && ie !== -1; ie--, ee++)
        (B += (r * g[ie]) >>> 0), (g[ie] = B % 256 >>> 0), (B = (B / 256) >>> 0);
      if (B !== 0) throw new Error('Non-zero carry');
      (b = ee), u++;
    }
    let S = m - b;
    for (; S !== m && g[S] === 0; ) S++;
    const T = new Uint8Array(h + (m - S));
    let se = h;
    for (; S !== m; ) T[se++] = g[S++];
    return T;
  }
  function c(d) {
    const u = l(d);
    if (u) return u;
    throw new Error('Non-base' + r + ' character');
  }
  return { encode: a, decodeUnsafe: l, decode: c };
}
var gn = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const gr = pn(gn),
  mt = (t) => gr.encode(t),
  Ye = (t) => gr.decode(t);
function ne(t) {
  return Uint8Array.from(atob(t), (e) => e.charCodeAt(0));
}
const St = 8192;
function N(t) {
  if (t.length < St) return btoa(String.fromCharCode(...t));
  let e = '';
  for (var r = 0; r < t.length; r += St) {
    const n = t.slice(r, r + St);
    e += String.fromCharCode(...n);
  }
  return btoa(e);
}
function mr(t) {
  var s;
  const e = t.startsWith('0x') ? t.slice(2) : t,
    r = e.length % 2 === 0 ? e : `0${e}`,
    n = ((s = r.match(/[0-9a-fA-F]{2}/g)) == null ? void 0 : s.map((i) => parseInt(i, 16))) ?? [];
  if (n.length !== r.length / 2) throw new Error(`Invalid hex string ${t}`);
  return Uint8Array.from(n);
}
function Ze(t) {
  return t.reduce((e, r) => e + r.toString(16).padStart(2, '0'), '');
}
function Nt(t) {
  let e = [],
    r = 0;
  if (t === 0) return [0];
  for (; t > 0; ) (e[r] = t & 127), (t >>= 7) && (e[r] |= 128), (r += 1);
  return e;
}
function mn(t) {
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
class bn {
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
      { value: n, length: s } = mn(r);
    return this.shift(s), n;
  }
  readVec(e) {
    let r = this.readULEB(),
      n = [];
    for (let s = 0; s < r; s++) n.push(e(this, s, r));
    return n;
  }
}
function yn(t, e) {
  switch (e) {
    case 'base58':
      return mt(t);
    case 'base64':
      return N(t);
    case 'hex':
      return Ze(t);
    default:
      throw new Error('Unsupported encoding, supported values are: base64, hex');
  }
}
function br(t, e = ['<', '>']) {
  const [r, n] = e,
    s = [];
  let i = '',
    a = 0;
  for (let l = 0; l < t.length; l++) {
    const c = t[l];
    if ((c === r && a++, c === n && a--, a === 0 && c === ',')) {
      s.push(i.trim()), (i = '');
      continue;
    }
    i += c;
  }
  return s.push(i.trim()), s;
}
class wn {
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
    return kt(BigInt(e), 8).forEach((r) => this.write8(r)), this;
  }
  write128(e) {
    return kt(BigInt(e), 16).forEach((r) => this.write8(r)), this;
  }
  write256(e) {
    return kt(BigInt(e), 32).forEach((r) => this.write8(r)), this;
  }
  writeULEB(e) {
    return Nt(e).forEach((r) => this.write8(r)), this;
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
    return yn(this.toBytes(), e);
  }
}
function kt(t, e) {
  let r = new Uint8Array(e),
    n = 0;
  for (; t > 0; ) (r[n] = Number(t % BigInt(256))), (t = t / BigInt(256)), (n += 1);
  return r;
}
var yr = (t) => {
    throw TypeError(t);
  },
  wr = (t, e, r) => e.has(t) || yr('Cannot ' + r),
  J = (t, e, r) => (wr(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  lt = (t, e, r) =>
    e.has(t)
      ? yr('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  dt = (t, e, r, n) => (wr(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  _e,
  Le,
  at,
  we;
const vn = class vr {
  constructor(e) {
    lt(this, _e),
      lt(this, Le),
      (this.name = e.name),
      (this.read = e.read),
      (this.serializedSize = e.serializedSize ?? (() => null)),
      dt(this, _e, e.write),
      dt(
        this,
        Le,
        e.serialize ??
          ((r, n) => {
            const s = new wn({ initialSize: this.serializedSize(r) ?? void 0, ...n });
            return J(this, _e).call(this, r, s), s.toBytes();
          })
      ),
      (this.validate = e.validate ?? (() => {}));
  }
  write(e, r) {
    this.validate(e), J(this, _e).call(this, e, r);
  }
  serialize(e, r) {
    return this.validate(e), new Sn(this, J(this, Le).call(this, e, r));
  }
  parse(e) {
    const r = new bn(e);
    return this.read(r);
  }
  fromHex(e) {
    return this.parse(mr(e));
  }
  fromBase58(e) {
    return this.parse(Ye(e));
  }
  fromBase64(e) {
    return this.parse(ne(e));
  }
  transform({ name: e, input: r, output: n, validate: s }) {
    return new vr({
      name: e ?? this.name,
      read: (i) => n(this.read(i)),
      write: (i, a) => J(this, _e).call(this, r(i), a),
      serializedSize: (i) => this.serializedSize(r(i)),
      serialize: (i, a) => J(this, Le).call(this, r(i), a),
      validate: (i) => {
        s == null || s(i), this.validate(r(i));
      },
    });
  }
};
_e = new WeakMap();
Le = new WeakMap();
let pe = vn;
const Sr = Symbol.for('@mysten/serialized-bcs');
function zt(t) {
  return !!t && typeof t == 'object' && t[Sr] === !0;
}
class Sn {
  constructor(e, r) {
    lt(this, at), lt(this, we), dt(this, at, e), dt(this, we, r);
  }
  get [Sr]() {
    return !0;
  }
  toBytes() {
    return J(this, we);
  }
  toHex() {
    return Ze(J(this, we));
  }
  toBase64() {
    return N(J(this, we));
  }
  toBase58() {
    return mt(J(this, we));
  }
  parse() {
    return J(this, at).parse(J(this, we));
  }
}
at = new WeakMap();
we = new WeakMap();
function ht({ size: t, ...e }) {
  return new pe({ ...e, serializedSize: () => t });
}
function Ot({ readMethod: t, writeMethod: e, ...r }) {
  return ht({
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
function It({ readMethod: t, writeMethod: e, ...r }) {
  return ht({
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
function kn({ serialize: t, ...e }) {
  const r = new pe({
    ...e,
    serialize: t,
    write: (n, s) => {
      for (const i of r.serialize(n).toBytes()) s.write8(i);
    },
  });
  return r;
}
function On({ toBytes: t, fromBytes: e, ...r }) {
  return new pe({
    ...r,
    read: (n) => {
      const s = n.readULEB(),
        i = n.readBytes(s);
      return e(i);
    },
    write: (n, s) => {
      const i = t(n);
      s.writeULEB(i.length);
      for (let a = 0; a < i.length; a++) s.write8(i[a]);
    },
    serialize: (n) => {
      const s = t(n),
        i = Nt(s.length),
        a = new Uint8Array(i.length + s.length);
      return a.set(i, 0), a.set(s, i.length), a;
    },
    validate: (n) => {
      var s;
      if (typeof n != 'string')
        throw new TypeError(`Invalid ${r.name} value: ${n}. Expected string`);
      (s = r.validate) == null || s.call(r, n);
    },
  });
}
function In(t) {
  let e = null;
  function r() {
    return e || (e = t()), e;
  }
  return new pe({
    name: 'lazy',
    read: (n) => r().read(n),
    serializedSize: (n) => r().serializedSize(n),
    write: (n, s) => r().write(n, s),
    serialize: (n, s) => r().serialize(n, s).toBytes(),
  });
}
const o = {
    u8(t) {
      return Ot({
        name: 'u8',
        readMethod: 'read8',
        writeMethod: 'write8',
        size: 1,
        maxValue: 2 ** 8 - 1,
        ...t,
      });
    },
    u16(t) {
      return Ot({
        name: 'u16',
        readMethod: 'read16',
        writeMethod: 'write16',
        size: 2,
        maxValue: 2 ** 16 - 1,
        ...t,
      });
    },
    u32(t) {
      return Ot({
        name: 'u32',
        readMethod: 'read32',
        writeMethod: 'write32',
        size: 4,
        maxValue: 2 ** 32 - 1,
        ...t,
      });
    },
    u64(t) {
      return It({
        name: 'u64',
        readMethod: 'read64',
        writeMethod: 'write64',
        size: 8,
        maxValue: 2n ** 64n - 1n,
        ...t,
      });
    },
    u128(t) {
      return It({
        name: 'u128',
        readMethod: 'read128',
        writeMethod: 'write128',
        size: 16,
        maxValue: 2n ** 128n - 1n,
        ...t,
      });
    },
    u256(t) {
      return It({
        name: 'u256',
        readMethod: 'read256',
        writeMethod: 'write256',
        size: 32,
        maxValue: 2n ** 256n - 1n,
        ...t,
      });
    },
    bool(t) {
      return ht({
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
      return kn({
        name: 'uleb128',
        read: (e) => e.readULEB(),
        serialize: (e) => Uint8Array.from(Nt(e)),
        ...t,
      });
    },
    bytes(t, e) {
      return ht({
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
      return On({
        name: 'string',
        toBytes: (e) => new TextEncoder().encode(e),
        fromBytes: (e) => new TextDecoder().decode(e),
        ...t,
      });
    },
    fixedArray(t, e, r) {
      return new pe({
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
      return o
        .enum(`Option<${t.name}>`, { None: null, Some: t })
        .transform({
          input: (e) => (e == null ? { None: !0 } : { Some: e }),
          output: (e) => (e.$kind === 'Some' ? e.Some : null),
        });
    },
    vector(t, e) {
      return new pe({
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
      return new pe({
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
      return new pe({
        name: t,
        serializedSize: (s) => {
          let i = 0;
          for (const [a, l] of n) {
            const c = l.serializedSize(s[a]);
            if (c == null) return null;
            i += c;
          }
          return i;
        },
        read: (s) => {
          const i = {};
          for (const [a, l] of n) i[a] = l.read(s);
          return i;
        },
        write: (s, i) => {
          for (const [a, l] of n) l.write(s[a], i);
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
      return new pe({
        name: t,
        read: (s) => {
          const i = s.readULEB(),
            a = n[i];
          if (!a) throw new TypeError(`Unknown value ${i} for enum ${t}`);
          const [l, c] = a;
          return { [l]: (c == null ? void 0 : c.read(s)) ?? !0, $kind: l };
        },
        write: (s, i) => {
          const [a, l] = Object.entries(s).filter(([c]) => Object.hasOwn(e, c))[0];
          for (let c = 0; c < n.length; c++) {
            const [d, u] = n[c];
            if (d === a) {
              i.writeULEB(c), u == null || u.write(l, i);
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
          const i = Object.keys(s).filter((c) => s[c] !== void 0 && Object.hasOwn(e, c));
          if (i.length !== 1)
            throw new TypeError(
              `Expected object with one key, but found ${i.length} for type ${t}}`
            );
          const [a] = i;
          if (!Object.hasOwn(e, a)) throw new TypeError(`Invalid enum variant ${a}`);
        },
      });
    },
    map(t, e) {
      return o.vector(o.tuple([t, e])).transform({
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
      return In(t);
    },
  },
  En = 32;
function er(t) {
  try {
    return Ye(t).length === En;
  } catch {
    return !1;
  }
}
const Vt = 32;
function he(t) {
  return jn(t) && Cn(t) === Vt;
}
function st(t) {
  return he(t);
}
function Tn(t) {
  return t.includes('::') ? kr(t) : t;
}
function kr(t) {
  const [e, r] = t.split('::'),
    n = t.slice(e.length + r.length + 4),
    s = n.includes('<') ? n.slice(0, n.indexOf('<')) : n,
    i = n.includes('<')
      ? br(n.slice(n.indexOf('<') + 1, n.lastIndexOf('>'))).map((a) => Tn(a.trim()))
      : [];
  return { address: j(e), module: r, name: s, typeParams: i };
}
function Dt(t) {
  const { address: e, module: r, name: n, typeParams: s } = typeof t == 'string' ? kr(t) : t,
    i =
      (s == null ? void 0 : s.length) > 0
        ? `<${s.map((a) => (typeof a == 'string' ? a : Dt(a))).join(',')}>`
        : '';
  return `${e}::${r}::${n}${i}`;
}
function j(t, e = !1) {
  let r = t.toLowerCase();
  return !e && r.startsWith('0x') && (r = r.slice(2)), `0x${r.padStart(Vt * 2, '0')}`;
}
function ge(t, e = !1) {
  return j(t, e);
}
function jn(t) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(t) && t.length % 2 === 0;
}
function Cn(t) {
  return /^(0x|0X)/.test(t) ? (t.length - 2) / 2 : t.length / 2;
}
const Mn = /^vector<(.+)>$/,
  xn = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
class re {
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
    const n = e.match(Mn);
    if (n) return { vector: re.parseFromStr(n[1], r) };
    const s = e.match(xn);
    if (s)
      return {
        struct: {
          address: r ? j(s[1]) : s[1],
          module: s[2],
          name: s[3],
          typeParams: s[5] === void 0 ? [] : re.parseStructTypeArgs(s[5], r),
        },
      };
    throw new Error(`Encountered unexpected token when parsing type args for ${e}`);
  }
  static parseStructTypeArgs(e, r = !1) {
    return br(e).map((n) => re.parseFromStr(n, r));
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
    if ('vector' in e) return `vector<${re.tagToString(e.vector)}>`;
    if ('struct' in e) {
      const r = e.struct,
        n = r.typeParams.map(re.tagToString).join(', ');
      return `${r.address}::${r.module}::${r.name}${n ? `<${n}>` : ''}`;
    }
    throw new Error('Invalid TypeTag');
  }
}
function An(t) {
  return o
    .u64({ name: 'unsafe_u64', ...t })
    .transform({ input: (e) => e, output: (e) => Number(e) });
}
function _n(t) {
  return o.enum('Option', { None: null, Some: t });
}
const _ = o.bytes(Vt).transform({
    validate: (t) => {
      const e = typeof t == 'string' ? t : Ze(t);
      if (!e || !he(j(e))) throw new Error(`Invalid Sui address ${e}`);
    },
    input: (t) => (typeof t == 'string' ? mr(j(t)) : t),
    output: (t) => j(Ze(t)),
  }),
  Z = o.vector(o.u8()).transform({
    name: 'ObjectDigest',
    input: (t) => Ye(t),
    output: (t) => mt(new Uint8Array(t)),
    validate: (t) => {
      if (Ye(t).length !== 32) throw new Error('ObjectDigest must be 32 bytes');
    },
  }),
  q = o.struct('SuiObjectRef', { objectId: _, version: o.u64(), digest: Z }),
  Or = o.struct('SharedObjectRef', {
    objectId: _,
    initialSharedVersion: o.u64(),
    mutable: o.bool(),
  }),
  Ir = o.enum('ObjectArg', { ImmOrOwnedObject: q, SharedObject: Or, Receiving: q }),
  Er = o.enum('CallArg', {
    Pure: o.struct('Pure', {
      bytes: o
        .vector(o.u8())
        .transform({
          input: (t) => (typeof t == 'string' ? ne(t) : t),
          output: (t) => N(new Uint8Array(t)),
        }),
    }),
    Object: Ir,
  }),
  Lt = o.enum('TypeTag', {
    bool: null,
    u8: null,
    u64: null,
    u128: null,
    address: null,
    signer: null,
    vector: o.lazy(() => Lt),
    struct: o.lazy(() => Ar),
    u16: null,
    u32: null,
    u256: null,
  }),
  Gt = Lt.transform({
    input: (t) => (typeof t == 'string' ? re.parseFromStr(t, !0) : t),
    output: (t) => re.tagToString(t),
  }),
  te = o.enum('Argument', {
    GasCoin: null,
    Input: o.u16(),
    Result: o.u16(),
    NestedResult: o.tuple([o.u16(), o.u16()]),
  }),
  Tr = o.struct('ProgrammableMoveCall', {
    package: _,
    module: o.string(),
    function: o.string(),
    typeArguments: o.vector(Gt),
    arguments: o.vector(te),
  }),
  jr = o.enum('Command', {
    MoveCall: Tr,
    TransferObjects: o.struct('TransferObjects', { objects: o.vector(te), address: te }),
    SplitCoins: o.struct('SplitCoins', { coin: te, amounts: o.vector(te) }),
    MergeCoins: o.struct('MergeCoins', { destination: te, sources: o.vector(te) }),
    Publish: o.struct('Publish', {
      modules: o.vector(
        o
          .vector(o.u8())
          .transform({
            input: (t) => (typeof t == 'string' ? ne(t) : t),
            output: (t) => N(new Uint8Array(t)),
          })
      ),
      dependencies: o.vector(_),
    }),
    MakeMoveVec: o.struct('MakeMoveVec', {
      type: _n(Gt).transform({
        input: (t) => (t === null ? { None: !0 } : { Some: t }),
        output: (t) => t.Some ?? null,
      }),
      elements: o.vector(te),
    }),
    Upgrade: o.struct('Upgrade', {
      modules: o.vector(
        o
          .vector(o.u8())
          .transform({
            input: (t) => (typeof t == 'string' ? ne(t) : t),
            output: (t) => N(new Uint8Array(t)),
          })
      ),
      dependencies: o.vector(_),
      package: _,
      ticket: te,
    }),
  }),
  Cr = o.struct('ProgrammableTransaction', { inputs: o.vector(Er), commands: o.vector(jr) }),
  Mr = o.enum('TransactionKind', {
    ProgrammableTransaction: Cr,
    ChangeEpoch: null,
    Genesis: null,
    ConsensusCommitPrologue: null,
  }),
  xr = o.enum('TransactionExpiration', { None: null, Epoch: An() }),
  Ar = o.struct('StructTag', {
    address: _,
    module: o.string(),
    name: o.string(),
    typeParams: o.vector(Lt),
  }),
  _r = o.struct('GasData', { payment: o.vector(q), owner: _, price: o.u64(), budget: o.u64() }),
  Ur = o.struct('TransactionDataV1', { kind: Mr, sender: _, gasData: _r, expiration: xr }),
  $r = o.enum('TransactionData', { V1: Ur }),
  Br = o.enum('IntentScope', {
    TransactionData: null,
    TransactionEffects: null,
    CheckpointSummary: null,
    PersonalMessage: null,
  }),
  Pr = o.enum('IntentVersion', { V0: null }),
  Rr = o.enum('AppId', { Sui: null }),
  Nr = o.struct('Intent', { scope: Br, version: Pr, appId: Rr });
function zr(t) {
  return o.struct(`IntentMessage<${t.name}>`, { intent: Nr, value: t });
}
const Vr = o.enum('CompressedSignature', {
    ED25519: o.fixedArray(64, o.u8()),
    Secp256k1: o.fixedArray(64, o.u8()),
    Secp256r1: o.fixedArray(64, o.u8()),
    ZkLogin: o.vector(o.u8()),
  }),
  Dr = o.enum('PublicKey', {
    ED25519: o.fixedArray(32, o.u8()),
    Secp256k1: o.fixedArray(33, o.u8()),
    Secp256r1: o.fixedArray(33, o.u8()),
    ZkLogin: o.vector(o.u8()),
  }),
  Lr = o.struct('MultiSigPkMap', { pubKey: Dr, weight: o.u8() }),
  Gr = o.struct('MultiSigPublicKey', { pk_map: o.vector(Lr), threshold: o.u16() }),
  Un = o.struct('MultiSig', { sigs: o.vector(Vr), bitmap: o.u16(), multisig_pk: Gr }),
  $n = o
    .vector(o.u8())
    .transform({
      input: (t) => (typeof t == 'string' ? ne(t) : t),
      output: (t) => N(new Uint8Array(t)),
    }),
  qr = o.struct('SenderSignedTransaction', { intentMessage: zr($r), txSignatures: o.vector($n) }),
  Bn = o.vector(qr, { name: 'SenderSignedData' }),
  Pn = o.struct('PasskeyAuthenticator', {
    authenticatorData: o.vector(o.u8()),
    clientDataJson: o.string(),
    userSignature: o.vector(o.u8()),
  }),
  Rn = o.enum('PackageUpgradeError', {
    UnableToFetchPackage: o.struct('UnableToFetchPackage', { packageId: _ }),
    NotAPackage: o.struct('NotAPackage', { objectId: _ }),
    IncompatibleUpgrade: null,
    DigestDoesNotMatch: o.struct('DigestDoesNotMatch', { digest: o.vector(o.u8()) }),
    UnknownUpgradePolicy: o.struct('UnknownUpgradePolicy', { policy: o.u8() }),
    PackageIDDoesNotMatch: o.struct('PackageIDDoesNotMatch', { packageId: _, ticketId: _ }),
  }),
  Nn = o.struct('ModuleId', { address: _, name: o.string() }),
  tr = o.struct('MoveLocation', {
    module: Nn,
    function: o.u16(),
    instruction: o.u16(),
    functionName: o.option(o.string()),
  }),
  zn = o.enum('CommandArgumentError', {
    TypeMismatch: null,
    InvalidBCSBytes: null,
    InvalidUsageOfPureArg: null,
    InvalidArgumentToPrivateEntryFunction: null,
    IndexOutOfBounds: o.struct('IndexOutOfBounds', { idx: o.u16() }),
    SecondaryIndexOutOfBounds: o.struct('SecondaryIndexOutOfBounds', {
      resultIdx: o.u16(),
      secondaryIdx: o.u16(),
    }),
    InvalidResultArity: o.struct('InvalidResultArity', { resultIdx: o.u16() }),
    InvalidGasCoinUsage: null,
    InvalidValueUsage: null,
    InvalidObjectByValue: null,
    InvalidObjectByMutRef: null,
    SharedObjectOperationNotAllowed: null,
  }),
  Vn = o.enum('TypeArgumentError', { TypeNotFound: null, ConstraintNotSatisfied: null }),
  Dn = o.enum('ExecutionFailureStatus', {
    InsufficientGas: null,
    InvalidGasObject: null,
    InvariantViolation: null,
    FeatureNotYetSupported: null,
    MoveObjectTooBig: o.struct('MoveObjectTooBig', { objectSize: o.u64(), maxObjectSize: o.u64() }),
    MovePackageTooBig: o.struct('MovePackageTooBig', {
      objectSize: o.u64(),
      maxObjectSize: o.u64(),
    }),
    CircularObjectOwnership: o.struct('CircularObjectOwnership', { object: _ }),
    InsufficientCoinBalance: null,
    CoinBalanceOverflow: null,
    PublishErrorNonZeroAddress: null,
    SuiMoveVerificationError: null,
    MovePrimitiveRuntimeError: o.option(tr),
    MoveAbort: o.tuple([tr, o.u64()]),
    VMVerificationOrDeserializationError: null,
    VMInvariantViolation: null,
    FunctionNotFound: null,
    ArityMismatch: null,
    TypeArityMismatch: null,
    NonEntryFunctionInvoked: null,
    CommandArgumentError: o.struct('CommandArgumentError', { argIdx: o.u16(), kind: zn }),
    TypeArgumentError: o.struct('TypeArgumentError', { argumentIdx: o.u16(), kind: Vn }),
    UnusedValueWithoutDrop: o.struct('UnusedValueWithoutDrop', {
      resultIdx: o.u16(),
      secondaryIdx: o.u16(),
    }),
    InvalidPublicFunctionReturnType: o.struct('InvalidPublicFunctionReturnType', { idx: o.u16() }),
    InvalidTransferObject: null,
    EffectsTooLarge: o.struct('EffectsTooLarge', { currentSize: o.u64(), maxSize: o.u64() }),
    PublishUpgradeMissingDependency: null,
    PublishUpgradeDependencyDowngrade: null,
    PackageUpgradeError: o.struct('PackageUpgradeError', { upgradeError: Rn }),
    WrittenObjectsTooLarge: o.struct('WrittenObjectsTooLarge', {
      currentSize: o.u64(),
      maxSize: o.u64(),
    }),
    CertificateDenied: null,
    SuiMoveVerificationTimedout: null,
    SharedObjectOperationNotAllowed: null,
    InputObjectDeleted: null,
    ExecutionCancelledDueToSharedObjectCongestion: o.struct(
      'ExecutionCancelledDueToSharedObjectCongestion',
      { congestedObjects: o.vector(_) }
    ),
    AddressDeniedForCoin: o.struct('AddressDeniedForCoin', { address: _, coinType: o.string() }),
    CoinTypeGlobalPause: o.struct('CoinTypeGlobalPause', { coinType: o.string() }),
    ExecutionCancelledDueToRandomnessUnavailable: null,
  }),
  Fr = o.enum('ExecutionStatus', {
    Success: null,
    Failed: o.struct('ExecutionFailed', { error: Dn, command: o.option(o.u64()) }),
  }),
  Wr = o.struct('GasCostSummary', {
    computationCost: o.u64(),
    storageCost: o.u64(),
    storageRebate: o.u64(),
    nonRefundableStorageFee: o.u64(),
  }),
  Ue = o.enum('Owner', {
    AddressOwner: _,
    ObjectOwner: _,
    Shared: o.struct('Shared', { initialSharedVersion: o.u64() }),
    Immutable: null,
  }),
  Ln = o.struct('TransactionEffectsV1', {
    status: Fr,
    executedEpoch: o.u64(),
    gasUsed: Wr,
    modifiedAtVersions: o.vector(o.tuple([_, o.u64()])),
    sharedObjects: o.vector(q),
    transactionDigest: Z,
    created: o.vector(o.tuple([q, Ue])),
    mutated: o.vector(o.tuple([q, Ue])),
    unwrapped: o.vector(o.tuple([q, Ue])),
    deleted: o.vector(q),
    unwrappedThenDeleted: o.vector(q),
    wrapped: o.vector(q),
    gasObject: o.tuple([q, Ue]),
    eventsDigest: o.option(Z),
    dependencies: o.vector(Z),
  }),
  qt = o.tuple([o.u64(), Z]),
  Gn = o.enum('ObjectIn', { NotExist: null, Exist: o.tuple([qt, Ue]) }),
  qn = o.enum('ObjectOut', { NotExist: null, ObjectWrite: o.tuple([Z, Ue]), PackageWrite: qt }),
  Fn = o.enum('IDOperation', { None: null, Created: null, Deleted: null }),
  Wn = o.struct('EffectsObjectChange', { inputState: Gn, outputState: qn, idOperation: Fn }),
  Hn = o.enum('UnchangedSharedKind', {
    ReadOnlyRoot: qt,
    MutateDeleted: o.u64(),
    ReadDeleted: o.u64(),
    Cancelled: o.u64(),
    PerEpochConfig: null,
  }),
  Kn = o.struct('TransactionEffectsV2', {
    status: Fr,
    executedEpoch: o.u64(),
    gasUsed: Wr,
    transactionDigest: Z,
    gasObjectIndex: o.option(o.u32()),
    eventsDigest: o.option(Z),
    dependencies: o.vector(Z),
    lamportVersion: o.u64(),
    changedObjects: o.vector(o.tuple([_, Wn])),
    unchangedSharedObjects: o.vector(o.tuple([_, Hn])),
    auxDataDigest: o.option(Z),
  }),
  Jn = o.enum('TransactionEffects', { V1: Ln, V2: Kn }),
  v = {
    ...o,
    U8: o.u8(),
    U16: o.u16(),
    U32: o.u32(),
    U64: o.u64(),
    U128: o.u128(),
    U256: o.u256(),
    ULEB128: o.uleb128(),
    Bool: o.bool(),
    String: o.string(),
    Address: _,
    AppId: Rr,
    Argument: te,
    CallArg: Er,
    CompressedSignature: Vr,
    GasData: _r,
    Intent: Nr,
    IntentMessage: zr,
    IntentScope: Br,
    IntentVersion: Pr,
    MultiSig: Un,
    MultiSigPkMap: Lr,
    MultiSigPublicKey: Gr,
    ObjectArg: Ir,
    ObjectDigest: Z,
    ProgrammableMoveCall: Tr,
    ProgrammableTransaction: Cr,
    PublicKey: Dr,
    SenderSignedData: Bn,
    SenderSignedTransaction: qr,
    SharedObjectRef: Or,
    StructTag: Ar,
    SuiObjectRef: q,
    Command: jr,
    TransactionData: $r,
    TransactionDataV1: Ur,
    TransactionExpiration: xr,
    TransactionKind: Mr,
    TypeTag: Gt,
    TransactionEffects: Jn,
    PasskeyAuthenticator: Pn,
  },
  Xn = /^(?!.*(^(?!@)|[-.@])($|[-.@]))(?:[a-z0-9-]{0,63}(?:\.[a-z0-9-]{0,63})*)?@[a-z0-9-]{0,63}$/i,
  Yn = /^(?!.*(^|[-.])($|[-.]))(?:[a-z0-9-]{0,63}\.)+sui$/i;
function Zn(t, e = 'at') {
  const r = t.toLowerCase();
  let n;
  if (r.includes('@')) {
    if (!Xn.test(r)) throw new Error(`Invalid SuiNS name ${t}`);
    const [s, i] = r.split('@');
    n = [...(s ? s.split('.') : []), i];
  } else {
    if (!Yn.test(r)) throw new Error(`Invalid SuiNS name ${t}`);
    n = r.split('.').slice(0, -1);
  }
  return e === 'dot' ? `${n.join('.')}.sui` : `${n.slice(0, -1).join('.')}@${n[n.length - 1]}`;
}
BigInt(1e9);
const Qn = '0x1',
  Hr = '0x2';
ge('0x6');
const es = `${Hr}::sui::SUI`;
ge('0x5');
function Fe(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`positive integer expected, not ${t}`);
}
function ts(t) {
  return (
    t instanceof Uint8Array ||
    (t != null && typeof t == 'object' && t.constructor.name === 'Uint8Array')
  );
}
function bt(t, ...e) {
  if (!ts(t)) throw new Error('Uint8Array expected');
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function so(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Fe(t.outputLen), Fe(t.blockLen);
}
function rr(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
function rs(t, e) {
  bt(t);
  const r = e.outputLen;
  if (t.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const xe = typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ft = (t) =>
    new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
  io = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  oo = (t, e) => (t << (32 - e)) | (t >>> e),
  Oe = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
  Kr = (t) =>
    ((t << 24) & 4278190080) | ((t << 8) & 16711680) | ((t >>> 8) & 65280) | ((t >>> 24) & 255),
  le = Oe ? (t) => t : (t) => Kr(t);
function Ae(t) {
  for (let e = 0; e < t.length; e++) t[e] = Kr(t[e]);
}
const ns = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, '0'));
function ao(t) {
  bt(t);
  let e = '';
  for (let r = 0; r < t.length; r++) e += ns[t[r]];
  return e;
}
const oe = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function nr(t) {
  if (t >= oe._0 && t <= oe._9) return t - oe._0;
  if (t >= oe._A && t <= oe._F) return t - (oe._A - 10);
  if (t >= oe._a && t <= oe._f) return t - (oe._a - 10);
}
function co(t) {
  if (typeof t != 'string') throw new Error('hex string expected, got ' + typeof t);
  const e = t.length,
    r = e / 2;
  if (e % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + e);
  const n = new Uint8Array(r);
  for (let s = 0, i = 0; s < r; s++, i += 2) {
    const a = nr(t.charCodeAt(i)),
      l = nr(t.charCodeAt(i + 1));
    if (a === void 0 || l === void 0) {
      const c = t[i] + t[i + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
    }
    n[s] = a * 16 + l;
  }
  return n;
}
function ss(t) {
  if (typeof t != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function $e(t) {
  return typeof t == 'string' && (t = ss(t)), bt(t), t;
}
function uo(...t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    bt(s), (e += s.length);
  }
  const r = new Uint8Array(e);
  for (let n = 0, s = 0; n < t.length; n++) {
    const i = t[n];
    r.set(i, s), (s += i.length);
  }
  return r;
}
class is {
  clone() {
    return this._cloneInto();
  }
}
function lo(t) {
  const e = (n) => t().update($e(n)).digest(),
    r = t();
  return (e.outputLen = r.outputLen), (e.blockLen = r.blockLen), (e.create = () => t()), e;
}
function os(t) {
  const e = (n, s) => t(s).update($e(n)).digest(),
    r = t({});
  return (e.outputLen = r.outputLen), (e.blockLen = r.blockLen), (e.create = (n) => t(n)), e;
}
function ho(t = 32) {
  if (xe && typeof xe.getRandomValues == 'function') return xe.getRandomValues(new Uint8Array(t));
  if (xe && typeof xe.randomBytes == 'function') return xe.randomBytes(t);
  throw new Error('crypto.getRandomValues must be defined');
}
const as = new Uint8Array([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11,
  7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6,
  5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8,
  3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14,
  12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
  2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
]);
class cs extends is {
  constructor(e, r, n = {}, s, i, a) {
    if (
      (super(),
      (this.blockLen = e),
      (this.outputLen = r),
      (this.length = 0),
      (this.pos = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      Fe(e),
      Fe(r),
      Fe(s),
      r < 0 || r > s)
    )
      throw new Error('outputLen bigger than keyLen');
    if (n.key !== void 0 && (n.key.length < 1 || n.key.length > s))
      throw new Error(`key must be up 1..${s} byte long or undefined`);
    if (n.salt !== void 0 && n.salt.length !== i)
      throw new Error(`salt must be ${i} byte long or undefined`);
    if (n.personalization !== void 0 && n.personalization.length !== a)
      throw new Error(`personalization must be ${a} byte long or undefined`);
    this.buffer32 = ft((this.buffer = new Uint8Array(e)));
  }
  update(e) {
    rr(this);
    const { blockLen: r, buffer: n, buffer32: s } = this;
    e = $e(e);
    const i = e.length,
      a = e.byteOffset,
      l = e.buffer;
    for (let c = 0; c < i; ) {
      this.pos === r && (Oe || Ae(s), this.compress(s, 0, !1), Oe || Ae(s), (this.pos = 0));
      const d = Math.min(r - this.pos, i - c),
        u = a + c;
      if (d === r && !(u % 4) && c + d < i) {
        const h = new Uint32Array(l, u, Math.floor((i - c) / 4));
        Oe || Ae(h);
        for (let b = 0; c + r < i; b += s.length, c += r)
          (this.length += r), this.compress(h, b, !1);
        Oe || Ae(h);
        continue;
      }
      n.set(e.subarray(c, c + d), this.pos), (this.pos += d), (this.length += d), (c += d);
    }
    return this;
  }
  digestInto(e) {
    rr(this), rs(e, this);
    const { pos: r, buffer32: n } = this;
    (this.finished = !0),
      this.buffer.subarray(r).fill(0),
      Oe || Ae(n),
      this.compress(n, 0, !0),
      Oe || Ae(n);
    const s = ft(e);
    this.get().forEach((i, a) => (s[a] = le(i)));
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const n = e.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    const { buffer: r, length: n, finished: s, destroyed: i, outputLen: a, pos: l } = this;
    return (
      e || (e = new this.constructor({ dkLen: a })),
      e.set(...this.get()),
      (e.length = n),
      (e.finished = s),
      (e.destroyed = i),
      (e.outputLen = a),
      e.buffer.set(r),
      (e.pos = l),
      e
    );
  }
}
const it = BigInt(2 ** 32 - 1),
  Mt = BigInt(32);
function Jr(t, e = !1) {
  return e
    ? { h: Number(t & it), l: Number((t >> Mt) & it) }
    : { h: Number((t >> Mt) & it) | 0, l: Number(t & it) | 0 };
}
function us(t, e = !1) {
  let r = new Uint32Array(t.length),
    n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: i, l: a } = Jr(t[s], e);
    [r[s], n[s]] = [i, a];
  }
  return [r, n];
}
const ls = (t, e) => (BigInt(t >>> 0) << Mt) | BigInt(e >>> 0),
  ds = (t, e, r) => t >>> r,
  hs = (t, e, r) => (t << (32 - r)) | (e >>> r),
  fs = (t, e, r) => (t >>> r) | (e << (32 - r)),
  ps = (t, e, r) => (t << (32 - r)) | (e >>> r),
  gs = (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
  ms = (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
  bs = (t, e) => e,
  ys = (t, e) => t,
  ws = (t, e, r) => (t << r) | (e >>> (32 - r)),
  vs = (t, e, r) => (e << r) | (t >>> (32 - r)),
  Ss = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
  ks = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
function Os(t, e, r, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: (t + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const Is = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
  Es = (t, e, r, n) => (e + r + n + ((t / 2 ** 32) | 0)) | 0,
  Ts = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
  js = (t, e, r, n, s) => (e + r + n + s + ((t / 2 ** 32) | 0)) | 0,
  Cs = (t, e, r, n, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  Ms = (t, e, r, n, s, i) => (e + r + n + s + i + ((t / 2 ** 32) | 0)) | 0,
  V = {
    fromBig: Jr,
    split: us,
    toBig: ls,
    shrSH: ds,
    shrSL: hs,
    rotrSH: fs,
    rotrSL: ps,
    rotrBH: gs,
    rotrBL: ms,
    rotr32H: bs,
    rotr32L: ys,
    rotlSH: ws,
    rotlSL: vs,
    rotlBH: Ss,
    rotlBL: ks,
    add: Os,
    add3L: Is,
    add3H: Es,
    add4L: Ts,
    add4H: js,
    add5H: Ms,
    add5L: Cs,
  },
  P = new Uint32Array([
    4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762,
    2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225,
  ]),
  p = new Uint32Array(32);
function be(t, e, r, n, s, i) {
  const a = s[i],
    l = s[i + 1];
  let c = p[2 * t],
    d = p[2 * t + 1],
    u = p[2 * e],
    h = p[2 * e + 1],
    b = p[2 * r],
    m = p[2 * r + 1],
    g = p[2 * n],
    S = p[2 * n + 1],
    T = V.add3L(c, u, a);
  (d = V.add3H(T, d, h, l)),
    (c = T | 0),
    ({ Dh: S, Dl: g } = { Dh: S ^ d, Dl: g ^ c }),
    ({ Dh: S, Dl: g } = { Dh: V.rotr32H(S, g), Dl: V.rotr32L(S, g) }),
    ({ h: m, l: b } = V.add(m, b, S, g)),
    ({ Bh: h, Bl: u } = { Bh: h ^ m, Bl: u ^ b }),
    ({ Bh: h, Bl: u } = { Bh: V.rotrSH(h, u, 24), Bl: V.rotrSL(h, u, 24) }),
    (p[2 * t] = c),
    (p[2 * t + 1] = d),
    (p[2 * e] = u),
    (p[2 * e + 1] = h),
    (p[2 * r] = b),
    (p[2 * r + 1] = m),
    (p[2 * n] = g),
    (p[2 * n + 1] = S);
}
function ye(t, e, r, n, s, i) {
  const a = s[i],
    l = s[i + 1];
  let c = p[2 * t],
    d = p[2 * t + 1],
    u = p[2 * e],
    h = p[2 * e + 1],
    b = p[2 * r],
    m = p[2 * r + 1],
    g = p[2 * n],
    S = p[2 * n + 1],
    T = V.add3L(c, u, a);
  (d = V.add3H(T, d, h, l)),
    (c = T | 0),
    ({ Dh: S, Dl: g } = { Dh: S ^ d, Dl: g ^ c }),
    ({ Dh: S, Dl: g } = { Dh: V.rotrSH(S, g, 16), Dl: V.rotrSL(S, g, 16) }),
    ({ h: m, l: b } = V.add(m, b, S, g)),
    ({ Bh: h, Bl: u } = { Bh: h ^ m, Bl: u ^ b }),
    ({ Bh: h, Bl: u } = { Bh: V.rotrBH(h, u, 63), Bl: V.rotrBL(h, u, 63) }),
    (p[2 * t] = c),
    (p[2 * t + 1] = d),
    (p[2 * e] = u),
    (p[2 * e + 1] = h),
    (p[2 * r] = b),
    (p[2 * r + 1] = m),
    (p[2 * n] = g),
    (p[2 * n + 1] = S);
}
class xs extends cs {
  constructor(e = {}) {
    super(128, e.dkLen === void 0 ? 64 : e.dkLen, e, 64, 16, 16),
      (this.v0l = P[0] | 0),
      (this.v0h = P[1] | 0),
      (this.v1l = P[2] | 0),
      (this.v1h = P[3] | 0),
      (this.v2l = P[4] | 0),
      (this.v2h = P[5] | 0),
      (this.v3l = P[6] | 0),
      (this.v3h = P[7] | 0),
      (this.v4l = P[8] | 0),
      (this.v4h = P[9] | 0),
      (this.v5l = P[10] | 0),
      (this.v5h = P[11] | 0),
      (this.v6l = P[12] | 0),
      (this.v6h = P[13] | 0),
      (this.v7l = P[14] | 0),
      (this.v7h = P[15] | 0);
    const r = e.key ? e.key.length : 0;
    if (((this.v0l ^= this.outputLen | (r << 8) | 65536 | (1 << 24)), e.salt)) {
      const n = ft($e(e.salt));
      (this.v4l ^= le(n[0])),
        (this.v4h ^= le(n[1])),
        (this.v5l ^= le(n[2])),
        (this.v5h ^= le(n[3]));
    }
    if (e.personalization) {
      const n = ft($e(e.personalization));
      (this.v6l ^= le(n[0])),
        (this.v6h ^= le(n[1])),
        (this.v7l ^= le(n[2])),
        (this.v7h ^= le(n[3]));
    }
    if (e.key) {
      const n = new Uint8Array(this.blockLen);
      n.set($e(e.key)), this.update(n);
    }
  }
  get() {
    let {
      v0l: e,
      v0h: r,
      v1l: n,
      v1h: s,
      v2l: i,
      v2h: a,
      v3l: l,
      v3h: c,
      v4l: d,
      v4h: u,
      v5l: h,
      v5h: b,
      v6l: m,
      v6h: g,
      v7l: S,
      v7h: T,
    } = this;
    return [e, r, n, s, i, a, l, c, d, u, h, b, m, g, S, T];
  }
  set(e, r, n, s, i, a, l, c, d, u, h, b, m, g, S, T) {
    (this.v0l = e | 0),
      (this.v0h = r | 0),
      (this.v1l = n | 0),
      (this.v1h = s | 0),
      (this.v2l = i | 0),
      (this.v2h = a | 0),
      (this.v3l = l | 0),
      (this.v3h = c | 0),
      (this.v4l = d | 0),
      (this.v4h = u | 0),
      (this.v5l = h | 0),
      (this.v5h = b | 0),
      (this.v6l = m | 0),
      (this.v6h = g | 0),
      (this.v7l = S | 0),
      (this.v7h = T | 0);
  }
  compress(e, r, n) {
    this.get().forEach((c, d) => (p[d] = c)), p.set(P, 16);
    let { h: s, l: i } = V.fromBig(BigInt(this.length));
    (p[24] = P[8] ^ i), (p[25] = P[9] ^ s), n && ((p[28] = ~p[28]), (p[29] = ~p[29]));
    let a = 0;
    const l = as;
    for (let c = 0; c < 12; c++)
      be(0, 4, 8, 12, e, r + 2 * l[a++]),
        ye(0, 4, 8, 12, e, r + 2 * l[a++]),
        be(1, 5, 9, 13, e, r + 2 * l[a++]),
        ye(1, 5, 9, 13, e, r + 2 * l[a++]),
        be(2, 6, 10, 14, e, r + 2 * l[a++]),
        ye(2, 6, 10, 14, e, r + 2 * l[a++]),
        be(3, 7, 11, 15, e, r + 2 * l[a++]),
        ye(3, 7, 11, 15, e, r + 2 * l[a++]),
        be(0, 5, 10, 15, e, r + 2 * l[a++]),
        ye(0, 5, 10, 15, e, r + 2 * l[a++]),
        be(1, 6, 11, 12, e, r + 2 * l[a++]),
        ye(1, 6, 11, 12, e, r + 2 * l[a++]),
        be(2, 7, 8, 13, e, r + 2 * l[a++]),
        ye(2, 7, 8, 13, e, r + 2 * l[a++]),
        be(3, 4, 9, 14, e, r + 2 * l[a++]),
        ye(3, 4, 9, 14, e, r + 2 * l[a++]);
    (this.v0l ^= p[0] ^ p[16]),
      (this.v0h ^= p[1] ^ p[17]),
      (this.v1l ^= p[2] ^ p[18]),
      (this.v1h ^= p[3] ^ p[19]),
      (this.v2l ^= p[4] ^ p[20]),
      (this.v2h ^= p[5] ^ p[21]),
      (this.v3l ^= p[6] ^ p[22]),
      (this.v3h ^= p[7] ^ p[23]),
      (this.v4l ^= p[8] ^ p[24]),
      (this.v4h ^= p[9] ^ p[25]),
      (this.v5l ^= p[10] ^ p[26]),
      (this.v5h ^= p[11] ^ p[27]),
      (this.v6l ^= p[12] ^ p[28]),
      (this.v6h ^= p[13] ^ p[29]),
      (this.v7l ^= p[14] ^ p[30]),
      (this.v7h ^= p[15] ^ p[31]),
      p.fill(0);
  }
  destroy() {
    (this.destroyed = !0),
      this.buffer32.fill(0),
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const As = os((t) => new xs(t)),
  _s = 'object',
  Us = 'ID',
  $s = 'ascii',
  Bs = 'String',
  Ps = 'string',
  Rs = 'String',
  Ns = 'option',
  zs = 'Option';
function Vs(t) {
  const e = typeof t.body == 'object' && 'datatype' in t.body ? t.body.datatype : null;
  return !!e && j(e.package) === j('0x2') && e.module === 'tx_context' && e.type === 'TxContext';
}
function xt(t) {
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
    const e = xt(t.vector);
    return e ? v.vector(e) : null;
  }
  if ('datatype' in t) {
    const e = j(t.datatype.package);
    if (e === j(Qn)) {
      if (
        (t.datatype.module === $s && t.datatype.type === Bs) ||
        (t.datatype.module === Ps && t.datatype.type === Rs)
      )
        return v.String;
      if (t.datatype.module === Ns && t.datatype.type === zs) {
        const r = xt(t.datatype.typeParameters[0]);
        return r ? v.vector(r) : null;
      }
    }
    if (e === j(Hr) && t.datatype.module === _s && t.datatype.type === Us) return v.Address;
  }
  return null;
}
function Ds(t) {
  return typeof t == 'object' && 'Reference' in t
    ? { ref: '&', body: We(t.Reference) }
    : typeof t == 'object' && 'MutableReference' in t
      ? { ref: '&mut', body: We(t.MutableReference) }
      : { ref: null, body: We(t) };
}
function We(t) {
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
  if ('Vector' in t) return { vector: We(t.Vector) };
  if ('Struct' in t)
    return {
      datatype: {
        package: t.Struct.address,
        module: t.Struct.module,
        type: t.Struct.name,
        typeParameters: t.Struct.typeArguments.map(We),
      },
    };
  if ('TypeParameter' in t) return { typeParameter: t.TypeParameter };
  throw new Error(`Unexpected type ${JSON.stringify(t)}`);
}
function Ls(t) {
  return { $kind: 'Pure', Pure: { bytes: t instanceof Uint8Array ? N(t) : t.toBase64() } };
}
const Q = {
  Pure: Ls,
  ObjectRef({ objectId: t, digest: e, version: r }) {
    return {
      $kind: 'Object',
      Object: {
        $kind: 'ImmOrOwnedObject',
        ImmOrOwnedObject: { digest: e, version: r, objectId: j(t) },
      },
    };
  },
  SharedObjectRef({ objectId: t, mutable: e, initialSharedVersion: r }) {
    return {
      $kind: 'Object',
      Object: {
        $kind: 'SharedObject',
        SharedObject: { mutable: e, initialSharedVersion: r, objectId: j(t) },
      },
    };
  },
  ReceivingRef({ objectId: t, digest: e, version: r }) {
    return {
      $kind: 'Object',
      Object: { $kind: 'Receiving', Receiving: { digest: e, version: r, objectId: j(t) } },
    };
  },
};
var ae;
function Gs(t) {
  return {
    lang: (t == null ? void 0 : t.lang) ?? (ae == null ? void 0 : ae.lang),
    message: t == null ? void 0 : t.message,
    abortEarly: (t == null ? void 0 : t.abortEarly) ?? (ae == null ? void 0 : ae.abortEarly),
    abortPipeEarly:
      (t == null ? void 0 : t.abortPipeEarly) ?? (ae == null ? void 0 : ae.abortPipeEarly),
  };
}
var Et;
function qs(t) {
  return Et == null ? void 0 : Et.get(t);
}
var Tt;
function Fs(t) {
  return Tt == null ? void 0 : Tt.get(t);
}
var jt;
function Ws(t, e) {
  var r;
  return (r = jt == null ? void 0 : jt.get(t)) == null ? void 0 : r.get(e);
}
function Xr(t) {
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
    a = (s == null ? void 0 : s.expected) ?? t.expects ?? null,
    l = (s == null ? void 0 : s.received) ?? Xr(i),
    c = {
      kind: t.kind,
      type: t.type,
      input: i,
      expected: a,
      received: l,
      message: `Invalid ${e}: ${a ? `Expected ${a} but r` : 'R'}eceived ${l}`,
      requirement: t.requirement,
      path: s == null ? void 0 : s.path,
      issues: s == null ? void 0 : s.issues,
      lang: n.lang,
      abortEarly: n.abortEarly,
      abortPipeEarly: n.abortPipeEarly,
    },
    d = t.kind === 'schema',
    u =
      (s == null ? void 0 : s.message) ??
      t.message ??
      Ws(t.reference, c.lang) ??
      (d ? Fs(c.lang) : null) ??
      n.message ??
      qs(c.lang);
  u && (c.message = typeof u == 'function' ? u(c) : u),
    d && (r.typed = !1),
    r.issues ? r.issues.push(c) : (r.issues = [c]);
}
function Hs(t, e) {
  return Object.hasOwn(t, e) && e !== '__proto__' && e !== 'prototype' && e !== 'constructor';
}
var Ks = class extends Error {
  constructor(e) {
    super(e[0].message);
    Qt(this, 'issues');
    (this.name = 'ValiError'), (this.issues = e);
  }
};
function rt(t, e) {
  return {
    kind: 'validation',
    type: 'check',
    reference: rt,
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
function yt(t) {
  return {
    kind: 'transformation',
    type: 'transform',
    reference: yt,
    async: !1,
    operation: t,
    _run(e) {
      return (e.value = this.operation(e.value)), e;
    },
  };
}
function Ft(t, e, r) {
  return typeof t.default == 'function' ? t.default(e, r) : t.default;
}
function At(t, e) {
  return !t._run({ typed: !1, value: e }, { abortEarly: !0 }).issues;
}
function y(t, e) {
  return {
    kind: 'schema',
    type: 'array',
    reference: y,
    expects: 'Array',
    async: !1,
    item: t,
    message: e,
    _run(r, n) {
      var i;
      const s = r.value;
      if (Array.isArray(s)) {
        (r.typed = !0), (r.value = []);
        for (let a = 0; a < s.length; a++) {
          const l = s[a],
            c = this.item._run({ typed: !1, value: l }, n);
          if (c.issues) {
            const d = { type: 'array', origin: 'value', input: s, key: a, value: l };
            for (const u of c.issues)
              u.path ? u.path.unshift(d) : (u.path = [d]), (i = r.issues) == null || i.push(u);
            if ((r.issues || (r.issues = c.issues), n.abortEarly)) {
              r.typed = !1;
              break;
            }
          }
          c.typed || (r.typed = !1), r.value.push(c.value);
        }
      } else G(this, 'type', r, n);
      return r;
    },
  };
}
function wt(t) {
  return {
    kind: 'schema',
    type: 'bigint',
    reference: wt,
    expects: 'bigint',
    async: !1,
    message: t,
    _run(e, r) {
      return typeof e.value == 'bigint' ? (e.typed = !0) : G(this, 'type', e, r), e;
    },
  };
}
function vt(t) {
  return {
    kind: 'schema',
    type: 'boolean',
    reference: vt,
    expects: 'boolean',
    async: !1,
    message: t,
    _run(e, r) {
      return typeof e.value == 'boolean' ? (e.typed = !0) : G(this, 'type', e, r), e;
    },
  };
}
function Qe(t) {
  return {
    kind: 'schema',
    type: 'lazy',
    reference: Qe,
    expects: 'unknown',
    async: !1,
    getter: t,
    _run(e, r) {
      return this.getter(e.value)._run(e, r);
    },
  };
}
function w(t, e) {
  return {
    kind: 'schema',
    type: 'literal',
    reference: w,
    expects: Xr(t),
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
      return n.value === null && ('default' in this && (n.value = Ft(this, n, s)), n.value === null)
        ? ((n.typed = !0), n)
        : this.wrapped._run(n, s);
    },
  };
  return 0 in e && (r.default = e[0]), r;
}
function Re(t, ...e) {
  const r = {
    kind: 'schema',
    type: 'nullish',
    reference: Re,
    expects: `${t.expects} | null | undefined`,
    async: !1,
    wrapped: t,
    _run(n, s) {
      return (n.value === null || n.value === void 0) &&
        ('default' in this && (n.value = Ft(this, n, s)), n.value === null || n.value === void 0)
        ? ((n.typed = !0), n)
        : this.wrapped._run(n, s);
    },
  };
  return 0 in e && (r.default = e[0]), r;
}
function A(t) {
  return {
    kind: 'schema',
    type: 'number',
    reference: A,
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
function f(t, e) {
  return {
    kind: 'schema',
    type: 'object',
    reference: f,
    expects: 'Object',
    async: !1,
    entries: t,
    message: e,
    _run(r, n) {
      var i;
      const s = r.value;
      if (s && typeof s == 'object') {
        (r.typed = !0), (r.value = {});
        for (const a in this.entries) {
          const l = s[a],
            c = this.entries[a]._run({ typed: !1, value: l }, n);
          if (c.issues) {
            const d = { type: 'object', origin: 'value', input: s, key: a, value: l };
            for (const u of c.issues)
              u.path ? u.path.unshift(d) : (u.path = [d]), (i = r.issues) == null || i.push(u);
            if ((r.issues || (r.issues = c.issues), n.abortEarly)) {
              r.typed = !1;
              break;
            }
          }
          c.typed || (r.typed = !1), (c.value !== void 0 || a in s) && (r.value[a] = c.value);
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
        ('default' in this && (n.value = Ft(this, n, s)), n.value === void 0)
        ? ((n.typed = !0), n)
        : this.wrapped._run(n, s);
    },
  };
  return 0 in e && (r.default = e[0]), r;
}
function et(t, e, r) {
  return {
    kind: 'schema',
    type: 'record',
    reference: et,
    expects: 'Object',
    async: !1,
    key: t,
    value: e,
    message: r,
    _run(n, s) {
      var a, l;
      const i = n.value;
      if (i && typeof i == 'object') {
        (n.typed = !0), (n.value = {});
        for (const c in i)
          if (Hs(i, c)) {
            const d = i[c],
              u = this.key._run({ typed: !1, value: c }, s);
            if (u.issues) {
              const b = { type: 'object', origin: 'key', input: i, key: c, value: d };
              for (const m of u.issues) (m.path = [b]), (a = n.issues) == null || a.push(m);
              if ((n.issues || (n.issues = u.issues), s.abortEarly)) {
                n.typed = !1;
                break;
              }
            }
            const h = this.value._run({ typed: !1, value: d }, s);
            if (h.issues) {
              const b = { type: 'object', origin: 'value', input: i, key: c, value: d };
              for (const m of h.issues)
                m.path ? m.path.unshift(b) : (m.path = [b]), (l = n.issues) == null || l.push(m);
              if ((n.issues || (n.issues = h.issues), s.abortEarly)) {
                n.typed = !1;
                break;
              }
            }
            (!u.typed || !h.typed) && (n.typed = !1), u.typed && (n.value[u.value] = h.value);
          }
      } else G(this, 'type', n, s);
      return n;
    },
  };
}
function k(t) {
  return {
    kind: 'schema',
    type: 'string',
    reference: k,
    expects: 'string',
    async: !1,
    message: t,
    _run(e, r) {
      return typeof e.value == 'string' ? (e.typed = !0) : G(this, 'type', e, r), e;
    },
  };
}
function Wt(t, e) {
  return {
    kind: 'schema',
    type: 'tuple',
    reference: Wt,
    expects: 'Array',
    async: !1,
    items: t,
    message: e,
    _run(r, n) {
      var i;
      const s = r.value;
      if (Array.isArray(s)) {
        (r.typed = !0), (r.value = []);
        for (let a = 0; a < this.items.length; a++) {
          const l = s[a],
            c = this.items[a]._run({ typed: !1, value: l }, n);
          if (c.issues) {
            const d = { type: 'array', origin: 'value', input: s, key: a, value: l };
            for (const u of c.issues)
              u.path ? u.path.unshift(d) : (u.path = [d]), (i = r.issues) == null || i.push(u);
            if ((r.issues || (r.issues = c.issues), n.abortEarly)) {
              r.typed = !1;
              break;
            }
          }
          c.typed || (r.typed = !1), r.value.push(c.value);
        }
      } else G(this, 'type', r, n);
      return r;
    },
  };
}
function sr(t) {
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
      let s, i, a;
      for (const l of this.options) {
        const c = l._run({ typed: !1, value: r.value }, n);
        if (c.typed)
          if (c.issues) i ? i.push(c) : (i = [c]);
          else {
            s = c;
            break;
          }
        else a ? a.push(c) : (a = [c]);
      }
      if (s) return s;
      if (i) {
        if (i.length === 1) return i[0];
        G(this, 'type', r, n, { issues: sr(i) }), (r.typed = !0);
      } else {
        if ((a == null ? void 0 : a.length) === 1) return a[0];
        G(this, 'type', r, n, { issues: sr(a) });
      }
      return r;
    },
  };
}
function je() {
  return {
    kind: 'schema',
    type: 'unknown',
    reference: je,
    expects: 'unknown',
    async: !1,
    _run(t) {
      return (t.typed = !0), t;
    },
  };
}
function x(t, e, r) {
  const n = t._run({ typed: !1, value: e }, Gs(r));
  if (n.issues) throw new Ks(n.issues);
  return n.value;
}
function C(...t) {
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
function Me(t) {
  const e = Object.entries(t).map(([r, n]) => f({ [r]: n }));
  return C(
    R(e),
    yt((r) => ({ ...r, $kind: Object.keys(r)[0] }))
  );
}
const Ne = C(
    k(),
    yt((t) => j(t)),
    rt(he)
  ),
  L = Ne,
  Ce = k(),
  D = C(
    R([k(), C(A(), $())]),
    rt((t) => {
      try {
        return BigInt(t), BigInt(t) >= 0 && BigInt(t) <= 18446744073709551615n;
      } catch {
        return !1;
      }
    }, 'Invalid u64')
  ),
  ve = f({ objectId: Ne, version: D, digest: k() }),
  M = C(
    R([
      f({ GasCoin: w(!0) }),
      f({ Input: C(A(), $()), type: z(w('pure')) }),
      f({ Input: C(A(), $()), type: z(w('object')) }),
      f({ Result: C(A(), $()) }),
      f({ NestedResult: Wt([C(A(), $()), C(A(), $())]) }),
    ]),
    yt((t) => ({ ...t, $kind: Object.keys(t)[0] }))
  ),
  Js = f({ budget: E(D), price: E(D), owner: E(Ne), payment: E(y(ve)) }),
  _t = R([
    w('address'),
    w('bool'),
    w('u8'),
    w('u16'),
    w('u32'),
    w('u64'),
    w('u128'),
    w('u256'),
    f({ vector: Qe(() => _t) }),
    f({ datatype: f({ package: k(), module: k(), type: k(), typeParameters: y(Qe(() => _t)) }) }),
    f({ typeParameter: C(A(), $()) }),
  ]),
  Xs = f({ ref: E(R([w('&'), w('&mut')])), body: _t }),
  Ys = f({
    package: L,
    module: k(),
    function: k(),
    typeArguments: y(k()),
    arguments: y(M),
    _argumentTypes: z(E(y(Xs))),
  }),
  Zs = f({ name: k(), inputs: et(k(), R([M, y(M)])), data: et(k(), je()) }),
  Qs = Me({
    MoveCall: Ys,
    TransferObjects: f({ objects: y(M), address: M }),
    SplitCoins: f({ coin: M, amounts: y(M) }),
    MergeCoins: f({ destination: M, sources: y(M) }),
    Publish: f({ modules: y(Ce), dependencies: y(L) }),
    MakeMoveVec: f({ type: E(k()), elements: y(M) }),
    Upgrade: f({ modules: y(Ce), dependencies: y(L), package: L, ticket: M }),
    $Intent: Zs,
  }),
  Yr = Me({
    ImmOrOwnedObject: ve,
    SharedObject: f({ objectId: L, initialSharedVersion: D, mutable: vt() }),
    Receiving: ve,
  }),
  ei = Me({
    Object: Yr,
    Pure: f({ bytes: Ce }),
    UnresolvedPure: f({ value: je() }),
    UnresolvedObject: f({
      objectId: L,
      version: z(E(D)),
      digest: z(E(k())),
      initialSharedVersion: z(E(D)),
    }),
  }),
  ir = Me({ Object: Yr, Pure: f({ bytes: Ce }) }),
  Zr = Me({ None: w(!0), Epoch: D }),
  ct = f({
    version: w(2),
    sender: Re(Ne),
    expiration: Re(Zr),
    gasData: Js,
    inputs: y(ei),
    commands: y(Qs),
  }),
  K = {
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
        TransferObjects: { objects: t.map((r) => x(M, r)), address: x(M, e) },
      };
    },
    SplitCoins(t, e) {
      return { $kind: 'SplitCoins', SplitCoins: { coin: x(M, t), amounts: e.map((r) => x(M, r)) } };
    },
    MergeCoins(t, e) {
      return {
        $kind: 'MergeCoins',
        MergeCoins: { destination: x(M, t), sources: e.map((r) => x(M, r)) },
      };
    },
    Publish({ modules: t, dependencies: e }) {
      return {
        $kind: 'Publish',
        Publish: {
          modules: t.map((r) => (typeof r == 'string' ? r : N(new Uint8Array(r)))),
          dependencies: e.map((r) => ge(r)),
        },
      };
    },
    Upgrade({ modules: t, dependencies: e, package: r, ticket: n }) {
      return {
        $kind: 'Upgrade',
        Upgrade: {
          modules: t.map((s) => (typeof s == 'string' ? s : N(new Uint8Array(s)))),
          dependencies: e.map((s) => ge(s)),
          package: r,
          ticket: x(M, n),
        },
      };
    },
    MakeMoveVec({ type: t, elements: e }) {
      return {
        $kind: 'MakeMoveVec',
        MakeMoveVec: { type: t ?? null, elements: e.map((r) => x(M, r)) },
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
              Array.isArray(s) ? s.map((i) => x(M, i)) : x(M, s),
            ])
          ),
          data: r,
        },
      };
    },
  },
  Ut = f({ digest: k(), objectId: k(), version: R([C(A(), $()), k(), wt()]) }),
  ti = Me({
    ImmOrOwned: Ut,
    Shared: f({ objectId: L, initialSharedVersion: D, mutable: vt() }),
    Receiving: Ut,
  }),
  or = Me({ Object: ti, Pure: y(C(A(), $())) }),
  Qr = R([
    f({ kind: w('Input'), index: C(A(), $()), value: je(), type: z(w('object')) }),
    f({ kind: w('Input'), index: C(A(), $()), value: je(), type: w('pure') }),
  ]),
  ri = R([f({ Epoch: C(A(), $()) }), f({ None: E(w(!0)) })]),
  ar = C(
    R([A(), k(), wt()]),
    rt((t) => {
      if (!['string', 'number', 'bigint'].includes(typeof t)) return !1;
      try {
        return BigInt(t), !0;
      } catch {
        return !1;
      }
    })
  ),
  Ht = R([
    f({ bool: E(w(!0)) }),
    f({ u8: E(w(!0)) }),
    f({ u64: E(w(!0)) }),
    f({ u128: E(w(!0)) }),
    f({ address: E(w(!0)) }),
    f({ signer: E(w(!0)) }),
    f({ vector: Qe(() => Ht) }),
    f({ struct: Qe(() => ni) }),
    f({ u16: E(w(!0)) }),
    f({ u32: E(w(!0)) }),
    f({ u256: E(w(!0)) }),
  ]),
  ni = f({ address: k(), module: k(), name: k(), typeParams: y(Ht) }),
  si = f({ budget: z(ar), price: z(ar), payment: z(y(Ut)), owner: z(k()) }),
  ii = [
    Qr,
    f({ kind: w('GasCoin') }),
    f({ kind: w('Result'), index: C(A(), $()) }),
    f({ kind: w('NestedResult'), index: C(A(), $()), resultIndex: C(A(), $()) }),
  ],
  me = R([...ii]),
  oi = f({
    kind: w('MoveCall'),
    target: C(
      k(),
      rt((t) => t.split('::').length === 3)
    ),
    typeArguments: y(k()),
    arguments: y(me),
  }),
  ai = f({ kind: w('TransferObjects'), objects: y(me), address: me }),
  ci = f({ kind: w('SplitCoins'), coin: me, amounts: y(me) }),
  ui = f({ kind: w('MergeCoins'), destination: me, sources: y(me) }),
  li = f({
    kind: w('MakeMoveVec'),
    type: R([f({ Some: Ht }), f({ None: E(w(!0)) })]),
    objects: y(me),
  }),
  di = f({ kind: w('Publish'), modules: y(y(C(A(), $()))), dependencies: y(k()) }),
  hi = f({
    kind: w('Upgrade'),
    modules: y(y(C(A(), $()))),
    dependencies: y(k()),
    packageId: k(),
    ticket: me,
  }),
  fi = [oi, ai, ci, ui, di, hi, li],
  pi = R([...fi]);
f({
  version: w(1),
  sender: z(k()),
  expiration: Re(ri),
  gasConfig: si,
  inputs: y(Qr),
  transactions: y(pi),
});
function cr(t) {
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
        value: { Pure: Array.from(ne(n.Pure.bytes)) },
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
              : { Some: re.parseFromStr(n.MakeMoveVec.type) },
          objects: n.MakeMoveVec.elements.map((s) => ce(s, e)),
        };
      if (n.MergeCoins)
        return {
          kind: 'MergeCoins',
          destination: ce(n.MergeCoins.destination, e),
          sources: n.MergeCoins.sources.map((s) => ce(s, e)),
        };
      if (n.MoveCall)
        return {
          kind: 'MoveCall',
          target: `${n.MoveCall.package}::${n.MoveCall.module}::${n.MoveCall.function}`,
          typeArguments: n.MoveCall.typeArguments,
          arguments: n.MoveCall.arguments.map((s) => ce(s, e)),
        };
      if (n.Publish)
        return {
          kind: 'Publish',
          modules: n.Publish.modules.map((s) => Array.from(ne(s))),
          dependencies: n.Publish.dependencies,
        };
      if (n.SplitCoins)
        return {
          kind: 'SplitCoins',
          coin: ce(n.SplitCoins.coin, e),
          amounts: n.SplitCoins.amounts.map((s) => ce(s, e)),
        };
      if (n.TransferObjects)
        return {
          kind: 'TransferObjects',
          objects: n.TransferObjects.objects.map((s) => ce(s, e)),
          address: ce(n.TransferObjects.address, e),
        };
      if (n.Upgrade)
        return {
          kind: 'Upgrade',
          modules: n.Upgrade.modules.map((s) => Array.from(ne(s))),
          dependencies: n.Upgrade.dependencies,
          packageId: n.Upgrade.package,
          ticket: ce(n.Upgrade.ticket, e),
        };
      throw new Error(`Unknown transaction ${Object.keys(n)}`);
    }),
  };
}
function ce(t, e) {
  if (t.$kind === 'GasCoin') return { kind: 'GasCoin' };
  if (t.$kind === 'Result') return { kind: 'Result', index: t.Result };
  if (t.$kind === 'NestedResult')
    return { kind: 'NestedResult', index: t.NestedResult[0], resultIndex: t.NestedResult[1] };
  if (t.$kind === 'Input') return e[t.Input];
  throw new Error(`Invalid argument ${Object.keys(t)}`);
}
function gi(t) {
  var e, r, n;
  return x(ct, {
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
        if (At(or, s.value)) {
          const i = x(or, s.value);
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
              type: 'Some' in s.type ? re.tagToString(s.type.Some) : null,
              elements: s.objects.map((i) => ue(i)),
            },
          };
        case 'MergeCoins':
          return {
            MergeCoins: { destination: ue(s.destination), sources: s.sources.map((i) => ue(i)) },
          };
        case 'MoveCall': {
          const [i, a, l] = s.target.split('::');
          return {
            MoveCall: {
              package: i,
              module: a,
              function: l,
              typeArguments: s.typeArguments,
              arguments: s.arguments.map((c) => ue(c)),
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
          return { SplitCoins: { coin: ue(s.coin), amounts: s.amounts.map((i) => ue(i)) } };
        case 'TransferObjects':
          return {
            TransferObjects: { objects: s.objects.map((i) => ue(i)), address: ue(s.address) },
          };
        case 'Upgrade':
          return {
            Upgrade: {
              modules: s.modules.map((i) => N(Uint8Array.from(i))),
              dependencies: s.dependencies,
              package: s.packageId,
              ticket: ue(s.ticket),
            },
          };
      }
      throw new Error(`Unknown transaction ${Object.keys(s)}`);
    }),
  });
}
function ue(t) {
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
function nt(t) {
  return R(Object.entries(t).map(([e, r]) => f({ [e]: r })));
}
const W = nt({
    GasCoin: w(!0),
    Input: C(A(), $()),
    Result: C(A(), $()),
    NestedResult: Wt([C(A(), $()), C(A(), $())]),
  }),
  mi = f({ budget: E(D), price: E(D), owner: E(Ne), payment: E(y(ve)) }),
  bi = f({ package: L, module: k(), function: k(), typeArguments: y(k()), arguments: y(W) }),
  yi = f({ name: k(), inputs: et(k(), R([W, y(W)])), data: et(k(), je()) }),
  wi = nt({
    MoveCall: bi,
    TransferObjects: f({ objects: y(W), address: W }),
    SplitCoins: f({ coin: W, amounts: y(W) }),
    MergeCoins: f({ destination: W, sources: y(W) }),
    Publish: f({ modules: y(Ce), dependencies: y(L) }),
    MakeMoveVec: f({ type: E(k()), elements: y(W) }),
    Upgrade: f({ modules: y(Ce), dependencies: y(L), package: L, ticket: W }),
    $Intent: yi,
  }),
  vi = nt({
    ImmOrOwnedObject: ve,
    SharedObject: f({ objectId: L, initialSharedVersion: D, mutable: vt() }),
    Receiving: ve,
  }),
  Si = nt({
    Object: vi,
    Pure: f({ bytes: Ce }),
    UnresolvedPure: f({ value: je() }),
    UnresolvedObject: f({
      objectId: L,
      version: z(E(D)),
      digest: z(E(k())),
      initialSharedVersion: z(E(D)),
    }),
  }),
  ki = nt({ None: w(!0), Epoch: D }),
  Oi = f({
    version: w(2),
    sender: Re(Ne),
    expiration: Re(ki),
    gasData: mi,
    inputs: y(Si),
    commands: y(wi),
  }),
  Ii = 50,
  Ei = 1000n,
  Ti = 5e10;
async function ji(t, e, r) {
  return (
    await _i(t, e),
    await Ai(t, e),
    e.onlyTransactionKind || (await Ci(t, e), await Mi(t, e), await xi(t, e)),
    await Ui(t),
    await r()
  );
}
async function Ci(t, e) {
  t.gasConfig.price || (t.gasConfig.price = String(await ze(e).getReferenceGasPrice()));
}
async function Mi(t, e) {
  if (t.gasConfig.budget) return;
  const r = await ze(e).dryRunTransactionBlock({
    transactionBlock: t.build({ overrides: { gasData: { budget: String(Ti), payment: [] } } }),
  });
  if (r.effects.status.status !== 'success')
    throw new Error(
      `Dry run failed, could not automatically determine a budget: ${r.effects.status.error}`,
      { cause: r }
    );
  const n = Ei * BigInt(t.gasConfig.price || 1n),
    s = BigInt(r.effects.gasUsed.computationCost) + n,
    i = s + BigInt(r.effects.gasUsed.storageCost) - BigInt(r.effects.gasUsed.storageRebate);
  t.gasConfig.budget = String(i > s ? i : s);
}
async function xi(t, e) {
  if (!t.gasConfig.payment) {
    const n = (await ze(e).getCoins({ owner: t.gasConfig.owner || t.sender, coinType: es })).data
      .filter(
        (s) =>
          !t.inputs.find((a) => {
            var l;
            return (l = a.Object) != null && l.ImmOrOwnedObject
              ? s.coinObjectId === a.Object.ImmOrOwnedObject.objectId
              : !1;
          })
      )
      .map((s) => ({ objectId: s.coinObjectId, digest: s.digest, version: s.version }));
    if (!n.length) throw new Error('No valid gas coins found for the transaction.');
    t.gasConfig.payment = n.map((s) => x(ve, s));
  }
}
async function Ai(t, e) {
  const r = t.inputs.filter((u) => {
      var h;
      return (
        u.UnresolvedObject &&
        !(
          u.UnresolvedObject.version ||
          ((h = u.UnresolvedObject) != null && h.initialSharedVersion)
        )
      );
    }),
    n = [...new Set(r.map((u) => ge(u.UnresolvedObject.objectId)))],
    s = n.length ? Ri(n, Ii) : [],
    i = (
      await Promise.all(s.map((u) => ze(e).multiGetObjects({ ids: u, options: { showOwner: !0 } })))
    ).flat(),
    a = new Map(n.map((u, h) => [u, i[h]])),
    l = Array.from(a)
      .filter(([u, h]) => h.error)
      .map(([u, h]) => JSON.stringify(h.error));
  if (l.length) throw new Error(`The following input objects are invalid: ${l.join(', ')}`);
  const c = i.map((u) => {
      if (u.error || !u.data) throw new Error(`Failed to fetch object: ${u.error}`);
      const h = u.data.owner,
        b = h && typeof h == 'object' && 'Shared' in h ? h.Shared.initial_shared_version : null;
      return {
        objectId: u.data.objectId,
        digest: u.data.digest,
        version: u.data.version,
        initialSharedVersion: b,
      };
    }),
    d = new Map(n.map((u, h) => [u, c[h]]));
  for (const [u, h] of t.inputs.entries()) {
    if (!h.UnresolvedObject) continue;
    let b;
    const m = j(h.UnresolvedObject.objectId),
      g = d.get(m);
    (h.UnresolvedObject.initialSharedVersion ?? (g == null ? void 0 : g.initialSharedVersion))
      ? (b = Q.SharedObjectRef({
          objectId: m,
          initialSharedVersion:
            h.UnresolvedObject.initialSharedVersion ||
            (g == null ? void 0 : g.initialSharedVersion),
          mutable: $i(t, u),
        }))
      : Bi(t, u) &&
        (b = Q.ReceivingRef({
          objectId: m,
          digest: h.UnresolvedObject.digest ?? (g == null ? void 0 : g.digest),
          version: h.UnresolvedObject.version ?? (g == null ? void 0 : g.version),
        })),
      (t.inputs[t.inputs.indexOf(h)] =
        b ??
        Q.ObjectRef({
          objectId: m,
          digest: h.UnresolvedObject.digest ?? (g == null ? void 0 : g.digest),
          version: h.UnresolvedObject.version ?? (g == null ? void 0 : g.version),
        }));
  }
}
async function _i(t, e) {
  const { inputs: r, commands: n } = t,
    s = [],
    i = new Set();
  n.forEach((l) => {
    if (l.MoveCall) {
      if (l.MoveCall._argumentTypes) return;
      if (
        l.MoveCall.arguments
          .map((u) => (u.$kind === 'Input' ? t.inputs[u.Input] : null))
          .some(
            (u) =>
              (u == null ? void 0 : u.UnresolvedPure) || (u == null ? void 0 : u.UnresolvedObject)
          )
      ) {
        const u = `${l.MoveCall.package}::${l.MoveCall.module}::${l.MoveCall.function}`;
        i.add(u), s.push(l.MoveCall);
      }
    }
    switch (l.$kind) {
      case 'SplitCoins':
        l.SplitCoins.amounts.forEach((c) => {
          ur(c, v.U64, t);
        });
        break;
      case 'TransferObjects':
        ur(l.TransferObjects.address, v.Address, t);
        break;
    }
  });
  const a = new Map();
  if (i.size > 0) {
    const l = ze(e);
    await Promise.all(
      [...i].map(async (c) => {
        const [d, u, h] = c.split('::'),
          b = await l.getNormalizedMoveFunction({ package: d, module: u, function: h });
        a.set(
          c,
          b.parameters.map((m) => Ds(m))
        );
      })
    );
  }
  s.length &&
    (await Promise.all(
      s.map(async (l) => {
        const c = a.get(`${l.package}::${l.module}::${l.function}`);
        if (!c) return;
        const u = c.length > 0 && Vs(c.at(-1)) ? c.slice(0, c.length - 1) : c;
        l._argumentTypes = u;
      })
    )),
    n.forEach((l) => {
      if (!l.MoveCall) return;
      const c = l.MoveCall,
        d = `${c.package}::${c.module}::${c.function}`,
        u = c._argumentTypes;
      if (u) {
        if (u.length !== l.MoveCall.arguments.length)
          throw new Error(`Incorrect number of arguments for ${d}`);
        u.forEach((h, b) => {
          var B, ee;
          const m = c.arguments[b];
          if (m.$kind !== 'Input') return;
          const g = r[m.Input];
          if (!g.UnresolvedPure && !g.UnresolvedObject) return;
          const S =
              ((B = g.UnresolvedPure) == null ? void 0 : B.value) ??
              ((ee = g.UnresolvedObject) == null ? void 0 : ee.objectId),
            T = xt(h.body);
          if (T) {
            (m.type = 'pure'), (r[r.indexOf(g)] = Q.Pure(T.serialize(S)));
            return;
          }
          if (typeof S != 'string')
            throw new Error(
              `Expect the argument to be an object id string, got ${JSON.stringify(S, null, 2)}`
            );
          m.type = 'object';
          const se = g.UnresolvedPure
            ? { $kind: 'UnresolvedObject', UnresolvedObject: { objectId: S } }
            : g;
          r[m.Input] = se;
        });
      }
    });
}
function Ui(t) {
  t.inputs.forEach((e, r) => {
    if (e.$kind !== 'Object' && e.$kind !== 'Pure')
      throw new Error(
        `Input at index ${r} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(e)}`
      );
  });
}
function ur(t, e, r) {
  if (t.$kind !== 'Input') return;
  const n = r.inputs[t.Input];
  n.$kind === 'UnresolvedPure' && (r.inputs[t.Input] = Q.Pure(e.serialize(n.UnresolvedPure.value)));
}
function $i(t, e) {
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
function Bi(t, e) {
  let r = !1;
  return (
    t.getInputUses(e, (n, s) => {
      if (s.MoveCall && s.MoveCall._argumentTypes) {
        const i = s.MoveCall.arguments.indexOf(n);
        r = Pi(s.MoveCall._argumentTypes[i]) || r;
      }
    }),
    r
  );
}
function Pi(t) {
  return typeof t.body != 'object' || !('datatype' in t.body)
    ? !1
    : t.body.datatype.package === '0x2' &&
        t.body.datatype.module === 'transfer' &&
        t.body.datatype.type === 'Receiving';
}
function ze(t) {
  if (!t.client)
    throw new Error(
      'No sui client passed to Transaction#build, but transaction data was not sufficient to build offline.'
    );
  return t.client;
}
function Ri(t, e) {
  return Array.from({ length: Math.ceil(t.length / e) }, (r, n) => t.slice(n * e, n * e + e));
}
function Ni(t) {
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
function zi(t) {
  function e(r, n) {
    if (typeof r == 'string') return t(He(r).serialize(n));
    if (r instanceof Uint8Array || zt(r)) return t(r);
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
    (e.vector = (r, n) => t(v.vector(He(r)).serialize(n))),
    (e.option = (r, n) => t(v.option(He(r)).serialize(n))),
    e
  );
}
function He(t) {
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
    return r === 'vector' ? v.vector(He(n)) : v.option(He(n));
  }
  throw new Error(`Invalid Pure type name: ${t}`);
}
function Vi(t, e) {
  const r = Array.from(`${t}::`).map((s) => s.charCodeAt(0)),
    n = new Uint8Array(r.length + e.length);
  return n.set(r), n.set(e, r.length), As(n, { dkLen: 32 });
}
function lr(t) {
  return j(t).replace('0x', '');
}
class Y {
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
    return Y.restore({
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
    return Y.restore({
      version: 2,
      sender: n.sender,
      expiration: n.expiration,
      gasData: n.gasData,
      inputs: s.inputs,
      commands: s.commands,
    });
  }
  static restore(e) {
    return e.version === 2 ? new Y(x(ct, e)) : new Y(x(ct, gi(e)));
  }
  static getDigestFromBytes(e) {
    const r = Vi('TransactionData', e);
    return mt(r);
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
      a = { ProgrammableTransaction: { inputs: s, commands: i } };
    if (n) return v.TransactionKind.serialize(a, { maxSize: e }).toBytes();
    const l = (r == null ? void 0 : r.expiration) ?? this.expiration,
      c = (r == null ? void 0 : r.sender) ?? this.sender,
      d = {
        ...this.gasData,
        ...(r == null ? void 0 : r.gasConfig),
        ...(r == null ? void 0 : r.gasData),
      };
    if (!c) throw new Error('Missing transaction sender');
    if (!d.budget) throw new Error('Missing gas budget');
    if (!d.payment) throw new Error('Missing gas payment');
    if (!d.price) throw new Error('Missing gas price');
    const u = {
      sender: lr(c),
      expiration: l || { None: !0 },
      gasData: {
        payment: d.payment,
        owner: lr(this.gasData.owner ?? c),
        price: BigInt(d.price),
        budget: BigInt(d.budget),
      },
      kind: { ProgrammableTransaction: { inputs: s, commands: i } },
    };
    return v.TransactionData.serialize({ V1: u }, { maxSize: e }).toBytes();
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
            r.$Intent.inputs[s] = Array.isArray(i) ? i.map((a) => e(a, r)) : e(i, r);
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
    return Y.getDigestFromBytes(e);
  }
  snapshot() {
    return x(ct, this);
  }
}
function dr(t) {
  if (typeof t == 'string') return j(t);
  if (t.Object)
    return t.Object.ImmOrOwnedObject
      ? j(t.Object.ImmOrOwnedObject.objectId)
      : t.Object.Receiving
        ? j(t.Object.Receiving.objectId)
        : j(t.Object.SharedObject.objectId);
  if (t.UnresolvedObject) return j(t.UnresolvedObject.objectId);
}
var en = (t) => {
    throw TypeError(t);
  },
  Kt = (t, e, r) => e.has(t) || en('Cannot ' + r),
  O = (t, e, r) => (Kt(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  Ve = (t, e, r) =>
    e.has(t)
      ? en('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  Se = (t, e, r, n) => (Kt(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  de = (t, e, r) => (Kt(t, e, 'access private method'), r),
  Ge,
  Ke,
  Ie,
  I,
  H,
  ut,
  Jt,
  $t,
  Xt;
function hr(t, e = 1 / 0) {
  const r = { $kind: 'Result', Result: t },
    n = [],
    s = (i) => n[i] ?? (n[i] = { $kind: 'NestedResult', NestedResult: [t, i] });
  return new Proxy(r, {
    set() {
      throw new Error(
        'The transaction result is a proxy, and does not support setting properties directly'
      );
    },
    get(i, a) {
      if (a in i) return Reflect.get(i, a);
      if (a === Symbol.iterator)
        return function* () {
          let c = 0;
          for (; c < e; ) yield s(c), c++;
        };
      if (typeof a == 'symbol') return;
      const l = parseInt(a, 10);
      if (!(Number.isNaN(l) || l < 0)) return s(l);
    },
  });
}
const tn = Symbol.for('@mysten/transaction');
function rn(t) {
  return !!t && typeof t == 'object' && t[tn] === !0;
}
const fr = { buildPlugins: new Map(), serializationPlugins: new Map() },
  Ct = Symbol.for('@mysten/transaction/registry');
function De() {
  try {
    const t = globalThis;
    return t[Ct] || (t[Ct] = fr), t[Ct];
  } catch {
    return fr;
  }
}
const Di = class Bt {
  constructor() {
    Ve(this, H),
      Ve(this, Ge),
      Ve(this, Ke),
      Ve(this, Ie, new Map()),
      Ve(this, I),
      (this.object = Ni((r) => {
        var i, a;
        if (typeof r == 'function') return this.object(r(this));
        if (typeof r == 'object' && At(M, r)) return r;
        const n = dr(r),
          s = O(this, I).inputs.find((l) => n === dr(l));
        return (
          (i = s == null ? void 0 : s.Object) != null &&
            i.SharedObject &&
            typeof r == 'object' &&
            (a = r.Object) != null &&
            a.SharedObject &&
            (s.Object.SharedObject.mutable =
              s.Object.SharedObject.mutable || r.Object.SharedObject.mutable),
          s
            ? { $kind: 'Input', Input: O(this, I).inputs.indexOf(s), type: 'object' }
            : O(this, I).addInput(
                'object',
                typeof r == 'string'
                  ? { $kind: 'UnresolvedObject', UnresolvedObject: { objectId: j(r) } }
                  : r
              )
        );
      }));
    const e = De();
    Se(this, I, new Y()),
      Se(this, Ke, [...e.buildPlugins.values()]),
      Se(this, Ge, [...e.serializationPlugins.values()]);
  }
  static fromKind(e) {
    const r = new Bt();
    return Se(r, I, Y.fromKindBytes(typeof e == 'string' ? ne(e) : e)), r;
  }
  static from(e) {
    const r = new Bt();
    return (
      rn(e)
        ? Se(r, I, new Y(e.getData()))
        : typeof e != 'string' || !e.startsWith('{')
          ? Se(r, I, Y.fromBytes(typeof e == 'string' ? ne(e) : e))
          : Se(r, I, Y.restore(JSON.parse(e))),
      r
    );
  }
  static registerGlobalSerializationPlugin(e, r) {
    De().serializationPlugins.set(e, r ?? e);
  }
  static unregisterGlobalSerializationPlugin(e) {
    De().serializationPlugins.delete(e);
  }
  static registerGlobalBuildPlugin(e, r) {
    De().buildPlugins.set(e, r ?? e);
  }
  static unregisterGlobalBuildPlugin(e) {
    De().buildPlugins.delete(e);
  }
  addSerializationPlugin(e) {
    O(this, Ge).push(e);
  }
  addBuildPlugin(e) {
    O(this, Ke).push(e);
  }
  addIntentResolver(e, r) {
    if (O(this, Ie).has(e) && O(this, Ie).get(e) !== r)
      throw new Error(`Intent resolver for ${e} already exists`);
    O(this, Ie).set(e, r);
  }
  setSender(e) {
    O(this, I).sender = e;
  }
  setSenderIfNotSet(e) {
    O(this, I).sender || (O(this, I).sender = e);
  }
  setExpiration(e) {
    O(this, I).expiration = e ? x(Zr, e) : null;
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
    O(this, I).gasConfig.payment = e.map((r) => x(ve, r));
  }
  get blockData() {
    return cr(O(this, I).snapshot());
  }
  getData() {
    return O(this, I).snapshot();
  }
  get [tn]() {
    return !0;
  }
  get pure() {
    return (
      Object.defineProperty(this, 'pure', {
        enumerable: !1,
        value: zi((e) =>
          zt(e)
            ? O(this, I).addInput('pure', { $kind: 'Pure', Pure: { bytes: e.toBase64() } })
            : O(this, I).addInput(
                'pure',
                At(ir, e)
                  ? x(ir, e)
                  : e instanceof Uint8Array
                    ? Q.Pure(e)
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
    return this.object(Q.ObjectRef(...e));
  }
  receivingRef(...e) {
    return this.object(Q.ReceivingRef(...e));
  }
  sharedObjectRef(...e) {
    return this.object(Q.SharedObjectRef(...e));
  }
  add(e) {
    if (typeof e == 'function') return e(this);
    const r = O(this, I).commands.push(e);
    return hr(r - 1);
  }
  splitCoins(e, r) {
    const n = K.SplitCoins(
        typeof e == 'string' ? this.object(e) : de(this, H, Jt).call(this, e),
        r.map((i) =>
          typeof i == 'number' || typeof i == 'bigint' || typeof i == 'string'
            ? this.pure.u64(i)
            : de(this, H, ut).call(this, i)
        )
      ),
      s = O(this, I).commands.push(n);
    return hr(s - 1, r.length);
  }
  mergeCoins(e, r) {
    return this.add(
      K.MergeCoins(
        this.object(e),
        r.map((n) => this.object(n))
      )
    );
  }
  publish({ modules: e, dependencies: r }) {
    return this.add(K.Publish({ modules: e, dependencies: r }));
  }
  upgrade({ modules: e, dependencies: r, package: n, ticket: s }) {
    return this.add(K.Upgrade({ modules: e, dependencies: r, package: n, ticket: this.object(s) }));
  }
  moveCall({ arguments: e, ...r }) {
    return this.add(
      K.MoveCall({
        ...r,
        arguments: e == null ? void 0 : e.map((n) => de(this, H, ut).call(this, n)),
      })
    );
  }
  transferObjects(e, r) {
    return this.add(
      K.TransferObjects(
        e.map((n) => this.object(n)),
        typeof r == 'string' ? this.pure.address(r) : de(this, H, ut).call(this, r)
      )
    );
  }
  makeMoveVec({ type: e, elements: r }) {
    return this.add(K.MakeMoveVec({ type: e, elements: r.map((n) => this.object(n)) }));
  }
  serialize() {
    return JSON.stringify(cr(O(this, I).snapshot()));
  }
  async toJSON(e = {}) {
    return (
      await this.prepareForSerialization(e),
      JSON.stringify(
        x(Oi, O(this, I).snapshot()),
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
      await de(this, H, $t).call(this, e),
      O(this, I).build({ onlyTransactionKind: e.onlyTransactionKind })
    );
  }
  async getDigest(e = {}) {
    return await de(this, H, $t).call(this, e), O(this, I).getDigest();
  }
  async prepareForSerialization(e) {
    var s;
    const r = new Set();
    for (const i of O(this, I).commands) i.$Intent && r.add(i.$Intent.name);
    const n = [...O(this, Ge)];
    for (const i of r)
      if (!((s = e.supportedIntents) != null && s.includes(i))) {
        if (!O(this, Ie).has(i)) throw new Error(`Missing intent resolver for ${i}`);
        n.push(O(this, Ie).get(i));
      }
    await de(this, H, Xt).call(this, n, e);
  }
};
Ge = new WeakMap();
Ke = new WeakMap();
Ie = new WeakMap();
I = new WeakMap();
H = new WeakSet();
ut = function (t) {
  return zt(t) ? this.pure(t) : de(this, H, Jt).call(this, t);
};
Jt = function (t) {
  return typeof t == 'function' ? x(M, t(this)) : x(M, t);
};
$t = async function (t) {
  if (!t.onlyTransactionKind && !O(this, I).sender) throw new Error('Missing transaction sender');
  await de(this, H, Xt).call(this, [...O(this, Ke), ji], t);
};
Xt = async function (t, e) {
  const r = (n) => {
    if (n >= t.length) return () => {};
    const s = t[n];
    return async () => {
      const i = r(n + 1);
      let a = !1,
        l = !1;
      if (
        (await s(O(this, I), e, async () => {
          if (a) throw new Error(`next() was call multiple times in TransactionPlugin ${n}`);
          (a = !0), await i(), (l = !0);
        }),
        !a)
      )
        throw new Error(`next() was not called in TransactionPlugin ${n}`);
      if (!l) throw new Error(`next() was not awaited in TransactionPlugin ${n}`);
    };
  };
  await r(0)();
};
let fo = Di;
const pt = 'CoinWithBalance',
  pr = Dt('0x2::sui::SUI');
function po({ type: t = pr, balance: e, useGasCoin: r = !0 }) {
  return (n) => {
    n.addIntentResolver(pt, Gi);
    const s = t === 'gas' ? t : Dt(t);
    return n.add(
      K.Intent({
        name: pt,
        inputs: {},
        data: { type: s === pr && r ? 'gas' : s, balance: BigInt(e) },
      })
    );
  };
}
const Li = f({ type: k(), balance: wt() });
async function Gi(t, e, r) {
  var d, u;
  const n = new Set(),
    s = new Map();
  if (!t.sender) throw new Error('Sender must be set to resolve CoinWithBalance');
  for (const h of t.commands)
    if (h.$kind === '$Intent' && h.$Intent.name === pt) {
      const { type: b, balance: m } = x(Li, h.$Intent.data);
      b !== 'gas' && m > 0n && n.add(b), s.set(b, (s.get(b) ?? 0n) + m);
    }
  const i = new Set();
  for (const h of t.inputs)
    (d = h.Object) != null && d.ImmOrOwnedObject && i.add(h.Object.ImmOrOwnedObject.objectId),
      (u = h.UnresolvedObject) != null && u.objectId && i.add(h.UnresolvedObject.objectId);
  const a = new Map(),
    l = ze(e);
  await Promise.all(
    [...n].map(async (h) => {
      a.set(
        h,
        await qi({ coinType: h, balance: s.get(h), client: l, owner: t.sender, usedIds: i })
      );
    })
  );
  const c = new Map();
  c.set('gas', { $kind: 'GasCoin', GasCoin: !0 });
  for (const [h, b] of t.commands.entries()) {
    if (b.$kind !== '$Intent' || b.$Intent.name !== pt) continue;
    const { type: m, balance: g } = b.$Intent.data;
    if (g === 0n) {
      t.replaceCommand(h, K.MoveCall({ target: '0x2::coin::zero', typeArguments: [m] }));
      continue;
    }
    const S = [];
    if (!c.has(m)) {
      const [T, ...se] = a
        .get(m)
        .map((B) =>
          t.addInput(
            'object',
            Q.ObjectRef({ objectId: B.coinObjectId, digest: B.digest, version: B.version })
          )
        );
      se.length > 0 && S.push(K.MergeCoins(T, se)), c.set(m, T);
    }
    S.push(K.SplitCoins(c.get(m), [t.addInput('pure', Q.Pure(v.u64().serialize(g)))])),
      t.replaceCommand(h, S),
      t.mapArguments((T) =>
        T.$kind === 'Result' && T.Result === h
          ? { $kind: 'NestedResult', NestedResult: [h + S.length - 1, 0] }
          : T
      );
  }
  return r();
}
async function qi({ coinType: t, balance: e, client: r, owner: n, usedIds: s }) {
  let i = e;
  const a = [];
  return l();
  async function l(c = null) {
    const {
        data: d,
        hasNextPage: u,
        nextCursor: h,
      } = await r.getCoins({ owner: n, coinType: t, cursor: c }),
      b = d.sort((m, g) => Number(BigInt(g.balance) - BigInt(m.balance)));
    for (const m of b) {
      if (s.has(m.coinObjectId)) continue;
      const g = BigInt(m.balance);
      if ((a.push(m), (i -= g), i <= 0)) return a;
    }
    if (u) return l(h);
    throw new Error(`Not enough coins of type ${t} to satisfy requested balance`);
  }
}
const Fi = '1.18.0',
  Wi = '1.40.0',
  Hi = {
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
class nn extends Error {}
class sn extends nn {
  constructor(e, r) {
    super(e), (this.code = r), (this.type = Hi[r] ?? 'ServerError');
  }
}
class Ki extends nn {
  constructor(e, r, n) {
    super(e), (this.status = r), (this.statusText = n);
  }
}
var on = (t) => {
    throw TypeError(t);
  },
  Yt = (t, e, r) => e.has(t) || on('Cannot ' + r),
  U = (t, e, r) => (Yt(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  ke = (t, e, r) =>
    e.has(t)
      ? on('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  Be = (t, e, r, n) => (Yt(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  an = (t, e, r) => (Yt(t, e, 'access private method'), r),
  Ji = (t, e, r, n) => ({
    set _(s) {
      Be(t, e, s, r);
    },
    get _() {
      return U(t, e, n);
    },
  }),
  Ee,
  Je,
  fe,
  Te,
  tt,
  Pe,
  gt,
  cn,
  un;
function Xi(t) {
  const e = new URL(t);
  return (e.protocol = e.protocol.replace('http', 'ws')), e.toString();
}
const Yi = {
  WebSocketConstructor: typeof WebSocket < 'u' ? WebSocket : void 0,
  callTimeout: 3e4,
  reconnectTimeout: 3e3,
  maxReconnects: 5,
};
class Zi {
  constructor(e, r = {}) {
    if (
      (ke(this, gt),
      ke(this, Ee, 0),
      ke(this, Je, 0),
      ke(this, fe, null),
      ke(this, Te, null),
      ke(this, tt, new Set()),
      ke(this, Pe, new Map()),
      (this.endpoint = e),
      (this.options = { ...Yi, ...r }),
      !this.options.WebSocketConstructor)
    )
      throw new Error('Missing WebSocket constructor');
    this.endpoint.startsWith('http') && (this.endpoint = Xi(this.endpoint));
  }
  async makeRequest(e, r) {
    const n = await an(this, gt, cn).call(this);
    return new Promise((s, i) => {
      Be(this, Ee, U(this, Ee) + 1),
        U(this, Pe).set(U(this, Ee), {
          resolve: s,
          reject: i,
          timeout: setTimeout(() => {
            U(this, Pe).delete(U(this, Ee)), i(new Error(`Request timeout: ${e}`));
          }, this.options.callTimeout),
        }),
        n.send(JSON.stringify({ jsonrpc: '2.0', id: U(this, Ee), method: e, params: r }));
    }).then(({ error: s, result: i }) => {
      if (s) throw new sn(s.message, s.code);
      return i;
    });
  }
  async subscribe(e) {
    const r = new Qi(e);
    return U(this, tt).add(r), await r.subscribe(this), () => r.unsubscribe(this);
  }
}
Ee = new WeakMap();
Je = new WeakMap();
fe = new WeakMap();
Te = new WeakMap();
tt = new WeakMap();
Pe = new WeakMap();
gt = new WeakSet();
cn = function () {
  return U(this, Te)
    ? U(this, Te)
    : (Be(
        this,
        Te,
        new Promise((t) => {
          var e;
          (e = U(this, fe)) == null || e.close(),
            Be(this, fe, new this.options.WebSocketConstructor(this.endpoint)),
            U(this, fe).addEventListener('open', () => {
              Be(this, Je, 0), t(U(this, fe));
            }),
            U(this, fe).addEventListener('close', () => {
              Ji(this, Je)._++,
                U(this, Je) <= this.options.maxReconnects &&
                  setTimeout(() => {
                    an(this, gt, un).call(this);
                  }, this.options.reconnectTimeout);
            }),
            U(this, fe).addEventListener('message', ({ data: r }) => {
              let n;
              try {
                n = JSON.parse(r);
              } catch (s) {
                console.error(new Error(`Failed to parse RPC message: ${r}`, { cause: s }));
                return;
              }
              if ('id' in n && n.id != null && U(this, Pe).has(n.id)) {
                const { resolve: s, timeout: i } = U(this, Pe).get(n.id);
                clearTimeout(i), s(n);
              } else if ('params' in n) {
                const { params: s } = n;
                U(this, tt).forEach((i) => {
                  i.subscriptionId === s.subscription &&
                    s.subscription === i.subscriptionId &&
                    i.onMessage(s.result);
                });
              }
            });
        })
      ),
      U(this, Te));
};
un = async function () {
  var t;
  return (
    (t = U(this, fe)) == null || t.close(),
    Be(this, Te, null),
    Promise.allSettled([...U(this, tt)].map((e) => e.subscribe(this)))
  );
};
class Qi {
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
var ln = (t) => {
    throw TypeError(t);
  },
  Zt = (t, e, r) => e.has(t) || ln('Cannot ' + r),
  F = (t, e, r) => (Zt(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  ot = (t, e, r) =>
    e.has(t)
      ? ln('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  Pt = (t, e, r, n) => (Zt(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  eo = (t, e, r) => (Zt(t, e, 'access private method'), r),
  qe,
  X,
  Xe,
  Rt,
  dn;
class to {
  constructor(e) {
    ot(this, Rt), ot(this, qe, 0), ot(this, X), ot(this, Xe), Pt(this, X, e);
  }
  fetch(e, r) {
    const n = F(this, X).fetch ?? fetch;
    if (!n)
      throw new Error(
        'The current environment does not support fetch, you can provide a fetch implementation in the options for SuiHTTPTransport.'
      );
    return n(e, r);
  }
  async request(e) {
    var s, i;
    Pt(this, qe, F(this, qe) + 1);
    const r = await this.fetch(((s = F(this, X).rpc) == null ? void 0 : s.url) ?? F(this, X).url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Sdk-Type': 'typescript',
        'Client-Sdk-Version': Fi,
        'Client-Target-Api-Version': Wi,
        'Client-Request-Method': e.method,
        ...((i = F(this, X).rpc) == null ? void 0 : i.headers),
      },
      body: JSON.stringify({ jsonrpc: '2.0', id: F(this, qe), method: e.method, params: e.params }),
    });
    if (!r.ok) throw new Ki(`Unexpected status code: ${r.status}`, r.status, r.statusText);
    const n = await r.json();
    if ('error' in n && n.error != null) throw new sn(n.error.message, n.error.code);
    return n.result;
  }
  async subscribe(e) {
    const r = await eo(this, Rt, dn).call(this).subscribe(e);
    return async () => !!(await r());
  }
}
qe = new WeakMap();
X = new WeakMap();
Xe = new WeakMap();
Rt = new WeakSet();
dn = function () {
  var t;
  if (!F(this, Xe)) {
    const e = F(this, X).WebSocketConstructor ?? WebSocket;
    if (!e)
      throw new Error(
        'The current environment does not support WebSocket, you can provide a WebSocketConstructor in the options for SuiHTTPTransport.'
      );
    Pt(
      this,
      Xe,
      new Zi(((t = F(this, X).websocket) == null ? void 0 : t.url) ?? F(this, X).url, {
        WebSocketConstructor: e,
        ...F(this, X).websocket,
      })
    );
  }
  return F(this, Xe);
};
const ro = Symbol.for('@mysten/SuiClient');
class go {
  get [ro]() {
    return !0;
  }
  constructor(e) {
    this.transport = e.transport ?? new to({ url: e.url });
  }
  async getRpcApiVersion() {
    return (await this.transport.request({ method: 'rpc.discover', params: [] })).info.version;
  }
  async getCoins(e) {
    if (!e.owner || !he(j(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getCoins',
      params: [e.owner, e.coinType, e.cursor, e.limit],
    });
  }
  async getAllCoins(e) {
    if (!e.owner || !he(j(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getAllCoins',
      params: [e.owner, e.cursor, e.limit],
    });
  }
  async getBalance(e) {
    if (!e.owner || !he(j(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getBalance',
      params: [e.owner, e.coinType],
    });
  }
  async getAllBalances(e) {
    if (!e.owner || !he(j(e.owner))) throw new Error('Invalid Sui address');
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
    if (!e.owner || !he(j(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({
      method: 'suix_getOwnedObjects',
      params: [e.owner, { filter: e.filter, options: e.options }, e.cursor, e.limit],
    });
  }
  async getObject(e) {
    if (!e.id || !st(ge(e.id))) throw new Error('Invalid Sui Object id');
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
        if (!n || !st(ge(n))) throw new Error(`Invalid Sui Object id ${n}`);
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
    if (!er(e.digest)) throw new Error('Invalid Transaction digest');
    return await this.transport.request({
      method: 'sui_getTransactionBlock',
      params: [e.digest, e.options],
    });
  }
  async multiGetTransactionBlocks(e) {
    if (
      (e.digests.forEach((n) => {
        if (!er(n)) throw new Error(`Invalid Transaction digest ${n}`);
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
    const { signature: i, bytes: a } = await r.signTransaction(s);
    return this.executeTransactionBlock({ transactionBlock: a, signature: i, ...n });
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
    if (!e.owner || !he(j(e.owner))) throw new Error('Invalid Sui address');
    return await this.transport.request({ method: 'suix_getStakes', params: [e.owner] });
  }
  async getStakesByIds(e) {
    return (
      e.stakedSuiIds.forEach((r) => {
        if (!r || !st(ge(r))) throw new Error(`Invalid Sui Stake id ${r}`);
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
    if (rn(e.transactionBlock))
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
    if (!e.parentId || !st(ge(e.parentId))) throw new Error('Invalid Sui Object id');
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
      r = Ye(e.digest);
    return Ze(r.slice(0, 4));
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
    return { hasNextPage: s, nextCursor: n, data: i.map((a) => Zn(a, e)) };
  }
  async getProtocolConfig(e) {
    return await this.transport.request({
      method: 'sui_getProtocolConfig',
      params: [e == null ? void 0 : e.version],
    });
  }
  async waitForTransaction({ signal: e, timeout: r = 60 * 1e3, pollInterval: n = 2 * 1e3, ...s }) {
    const i = AbortSignal.timeout(r),
      a = new Promise((l, c) => {
        i.addEventListener('abort', () => c(i.reason));
      });
    for (a.catch(() => {}); !i.aborted; ) {
      e == null || e.throwIfAborted();
      try {
        return await this.getTransactionBlock(s);
      } catch {
        await Promise.race([new Promise((c) => setTimeout(c, n)), a]);
      }
    }
    throw (i.throwIfAborted(), new Error('Unexpected error while waiting for transaction block.'));
  }
}
export {
  is as H,
  Pn as P,
  go as S,
  fo as T,
  io as a,
  oo as b,
  po as c,
  bt as d,
  rr as e,
  uo as f,
  N as g,
  so as h,
  As as i,
  ao as j,
  Vt as k,
  ne as l,
  o as m,
  j as n,
  rs as o,
  co as p,
  Ze as q,
  ho as r,
  v as s,
  $e as t,
  V as u,
  lo as w,
};
