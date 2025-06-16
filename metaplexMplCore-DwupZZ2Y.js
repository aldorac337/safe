var ed = Object.defineProperty;
var td = (e, t, r) =>
  t in e ? ed(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var K = (e, t, r) => td(e, typeof t != 'symbol' ? t + '' : t, r);
import { a as la, c as C } from './lodash-aFjP5OGs.js';
var rd = {},
  yn = {},
  hn = {},
  q = {};
const ua = (e) => ({ __option: 'Some', value: e }),
  ci = () => ({ __option: 'None' }),
  ca = (e) =>
    e &&
    typeof e == 'object' &&
    '__option' in e &&
    ((e.__option === 'Some' && 'value' in e) || e.__option === 'None'),
  Ve = (e) => e.__option === 'Some',
  id = (e) => e.__option === 'None';
function nd(e, t) {
  return Ve(e) ? e.value : t ? t() : null;
}
const ol = (e) => (e !== null ? ua(e) : ci()),
  ad = (e) => (Ve(e) ? e.value : null),
  sd = (e, t) => (Ve(e) ? e.value : t());
function ea(e, t) {
  if (!e || ArrayBuffer.isView(e)) return e;
  const r = (i) => (t ? ea(i, t) : ea(i));
  return ca(e)
    ? Ve(e)
      ? r(e.value)
      : t
        ? t()
        : null
    : Array.isArray(e)
      ? e.map(r)
      : typeof e == 'object'
        ? Object.fromEntries(Object.entries(e).map(([i, n]) => [i, r(n)]))
        : e;
}
let mi = class extends Error {
  constructor(r, i, n) {
    const a = `Expected a string of base ${i}, got [${r}].`;
    super(a);
    K(this, 'name', 'InvalidBaseStringError');
    this.cause = n;
  }
};
const Ai = (e) => {
    const t = e.length,
      r = BigInt(t);
    return {
      description: `base${t}`,
      fixedSize: null,
      maxSize: null,
      serialize(i) {
        if (!i.match(new RegExp(`^[${e}]*$`))) throw new mi(i, t);
        if (i === '') return new Uint8Array();
        const n = [...i];
        let a = n.findIndex((c) => c !== e[0]);
        a = a === -1 ? n.length : a;
        const s = Array(a).fill(0);
        if (a === n.length) return Uint8Array.from(s);
        const o = n.slice(a);
        let d = 0n,
          u = 1n;
        for (let c = o.length - 1; c >= 0; c -= 1) (d += u * BigInt(e.indexOf(o[c]))), (u *= r);
        const l = [];
        for (; d > 0n; ) l.unshift(Number(d % 256n)), (d /= 256n);
        return Uint8Array.from(s.concat(l));
      },
      deserialize(i, n = 0) {
        if (i.length === 0) return ['', 0];
        const a = i.slice(n);
        let s = a.findIndex((l) => l !== 0);
        s = s === -1 ? a.length : s;
        const o = e[0].repeat(s);
        if (s === a.length) return [o, i.length];
        let d = a.slice(s).reduce((l, c) => l * 256n + BigInt(c), 0n);
        const u = [];
        for (; d > 0n; ) u.unshift(e[Number(d % r)]), (d /= r);
        return [o + u.join(''), i.length];
      },
    };
  },
  da = Ai('0123456789'),
  ll = {
    description: 'base16',
    fixedSize: null,
    maxSize: null,
    serialize(e) {
      const t = e.toLowerCase();
      if (!t.match(/^[0123456789abcdef]*$/)) throw new mi(e, 16);
      const r = t.match(/.{1,2}/g);
      return Uint8Array.from(r ? r.map((i) => parseInt(i, 16)) : []);
    },
    deserialize(e, t = 0) {
      return [e.slice(t).reduce((i, n) => i + n.toString(16).padStart(2, '0'), ''), e.length];
    },
  },
  Ur = Ai('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'),
  j = (e) => {
    const t = e.reduce((n, a) => n + a.length, 0),
      r = new Uint8Array(t);
    let i = 0;
    return (
      e.forEach((n) => {
        r.set(n, i), (i += n.length);
      }),
      r
    );
  },
  fa = (e, t) => {
    if (e.length >= t) return e;
    const r = new Uint8Array(t).fill(0);
    return r.set(e), r;
  },
  di = (e, t) => fa(e.slice(0, t), t);
class He extends Error {
  constructor(r) {
    super(`Serializer [${r}] cannot deserialize empty buffers.`);
    K(this, 'name', 'DeserializingEmptyBufferError');
  }
}
class et extends Error {
  constructor(r, i, n) {
    super(`Serializer [${r}] expected ${i} bytes, got ${n}.`);
    K(this, 'name', 'NotEnoughBytesError');
  }
}
class $r extends Error {
  constructor(r) {
    r ?? (r = 'Expected a fixed-size serializer, got a variable-size one.');
    super(r);
    K(this, 'name', 'ExpectedFixedSizeSerializerError');
  }
}
function vi(e, t, r) {
  return {
    description: r ?? `fixed(${t}, ${e.description})`,
    fixedSize: t,
    maxSize: t,
    serialize: (i) => di(e.serialize(i), t),
    deserialize: (i, n = 0) => {
      if (((i = i.slice(n, n + t)), i.length < t)) throw new et('fixSerializer', t, i.length);
      e.fixedSize !== null && (i = di(i, e.fixedSize));
      const [a] = e.deserialize(i, 0);
      return [a, n + t];
    },
  };
}
function Lr(e, t, r) {
  return {
    description: e.description,
    fixedSize: e.fixedSize,
    maxSize: e.maxSize,
    serialize: (i) => e.serialize(t(i)),
    deserialize: (i, n = 0) => {
      const [a, s] = e.deserialize(i, n);
      return r ? [r(a, i, n), s] : [a, s];
    },
  };
}
function ul(e) {
  if (e.fixedSize === null) throw new $r('Cannot reverse a serializer of variable size.');
  return {
    ...e,
    serialize: (t) => e.serialize(t).reverse(),
    deserialize: (t, r = 0) => {
      const i = e.fixedSize,
        n = j([t.slice(0, r), t.slice(r, r + i).reverse(), t.slice(r + i)]);
      return e.deserialize(n, r);
    },
  };
}
const cl = (e, t) => {
    const r = e.length,
      i = (n, a, s, o) => {
        const d = [];
        let u = 0,
          l = 0;
        const c = (1 << s) - 1;
        for (const f of n) for (u = (u << a) | f, l += a; l >= s; ) (l -= s), d.push((u >> l) & c);
        return o && l > 0 && d.push((u << (s - l)) & c), d;
      };
    return {
      description: `base${r}`,
      fixedSize: null,
      maxSize: null,
      serialize(n) {
        if (!n.match(new RegExp(`^[${e}]*$`))) throw new mi(n, r);
        if (n === '') return new Uint8Array();
        const a = [...n].map((o) => e.indexOf(o)),
          s = i(a, t, 8, !1);
        return Uint8Array.from(s);
      },
      deserialize(n, a = 0) {
        if (n.length === 0) return ['', 0];
        const s = [...n.slice(a)];
        return [
          i(s, 8, t, !0)
            .map((d) => e[d])
            .join(''),
          n.length,
        ];
      },
    };
  },
  ga = Lr(
    cl('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', 6),
    (e) => e.replace(/=/g, ''),
    (e) => e.padEnd(Math.ceil(e.length / 4) * 4, '=')
  ),
  pa = (e) => e.replace(/\u0000/g, ''),
  dl = (e, t) => e.padEnd(t, '\0'),
  Pi = {
    description: 'utf8',
    fixedSize: null,
    maxSize: null,
    serialize(e) {
      return new TextEncoder().encode(e);
    },
    deserialize(e, t = 0) {
      const r = new TextDecoder().decode(e.slice(t));
      return [pa(r), e.length];
    },
  };
class Or extends Error {
  constructor(r, i) {
    i = i ? `. ${i}` : '';
    super(`The provided public key is invalid: ${r}${i}`);
    K(this, 'name', 'InvalidPublicKeyError');
    this.invalidPublicKey = r;
  }
}
const Tr = 32;
function Xe(e, t = !0) {
  const r =
    typeof e == 'string'
      ? e
      : typeof e == 'object' && 'publicKey' in e
        ? e.publicKey
        : typeof e == 'object' && 'toBase58' in e
          ? e.toBase58()
          : Array.isArray(e)
            ? e[0]
            : Ur.deserialize(e)[0];
  return t && ya(r), r;
}
const od = () => '11111111111111111111111111111111',
  fl = (e) => {
    try {
      return ya(e), !0;
    } catch {
      return !1;
    }
  },
  ld = (e) => Array.isArray(e) && e.length === 2 && typeof e[1] == 'number' && fl(e[0]);
function ya(e) {
  if (typeof e != 'string') throw new Or(e, 'Public keys must be strings.');
  ha(e);
}
const ud = (e) => [...new Set(e)],
  ha = (e) => {
    if (e.length < 32 || e.length > 44)
      throw new Or(e, 'Public keys must be between 32 and 44 characters.');
    let t;
    try {
      t = Ur.serialize(e);
    } catch {
      throw new Or(e, 'Public keys must be base58 encoded.');
    }
    if (t.length !== Tr) throw new Or(e, `Public keys must be ${Tr} bytes.`);
    return t;
  },
  cd = (e) => Xe(e),
  dd = (e, t) => Xe(e) === Xe(t);
let Rr;
(function (e) {
  (e.Little = 'le'), (e.Big = 'be');
})(Rr || (Rr = {}));
class gl extends RangeError {
  constructor(r, i, n, a) {
    super(`Serializer [${r}] expected number to be between ${i} and ${n}, got ${a}.`);
    K(this, 'name', 'NumberOutOfRangeError');
  }
}
function ie(e) {
  let t,
    r = e.name;
  return (
    e.size > 1 &&
      ((t = !('endian' in e.options) || e.options.endian === Rr.Little),
      (r += t ? '(le)' : '(be)')),
    {
      description: e.options.description ?? r,
      fixedSize: e.size,
      maxSize: e.size,
      serialize(i) {
        e.range && pl(e.name, e.range[0], e.range[1], i);
        const n = new ArrayBuffer(e.size);
        return e.set(new DataView(n), i, t), new Uint8Array(n);
      },
      deserialize(i, n = 0) {
        const a = i.slice(n, n + e.size);
        pd('i8', a, e.size);
        const s = gd(a);
        return [e.get(s, t), n + e.size];
      },
    }
  );
}
const fd = (e) => e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset),
  gd = (e) => new DataView(fd(e)),
  pl = (e, t, r, i) => {
    if (i < t || i > r) throw new gl(e, t, r, i);
  },
  pd = (e, t, r) => {
    if (t.length === 0) throw new He(e);
    if (t.length < r) throw new et(e, r, t.length);
  },
  yd = (e = {}) =>
    ie({
      name: 'f32',
      size: 4,
      set: (t, r, i) => t.setFloat32(0, Number(r), i),
      get: (t, r) => t.getFloat32(0, r),
      options: e,
    }),
  hd = (e = {}) =>
    ie({
      name: 'f64',
      size: 8,
      set: (t, r, i) => t.setFloat64(0, Number(r), i),
      get: (t, r) => t.getFloat64(0, r),
      options: e,
    }),
  md = (e = {}) =>
    ie({
      name: 'i8',
      size: 1,
      range: [-+'0x7f' - 1, +'0x7f'],
      set: (t, r) => t.setInt8(0, Number(r)),
      get: (t) => t.getInt8(0),
      options: e,
    }),
  Ad = (e = {}) =>
    ie({
      name: 'i16',
      size: 2,
      range: [-+'0x7fff' - 1, +'0x7fff'],
      set: (t, r, i) => t.setInt16(0, Number(r), i),
      get: (t, r) => t.getInt16(0, r),
      options: e,
    }),
  vd = (e = {}) =>
    ie({
      name: 'i32',
      size: 4,
      range: [-+'0x7fffffff' - 1, +'0x7fffffff'],
      set: (t, r, i) => t.setInt32(0, Number(r), i),
      get: (t, r) => t.getInt32(0, r),
      options: e,
    }),
  Pd = (e = {}) =>
    ie({
      name: 'i64',
      size: 8,
      range: [-BigInt('0x7fffffffffffffff') - 1n, BigInt('0x7fffffffffffffff')],
      set: (t, r, i) => t.setBigInt64(0, BigInt(r), i),
      get: (t, r) => t.getBigInt64(0, r),
      options: e,
    }),
  bd = (e = {}) =>
    ie({
      name: 'i128',
      size: 16,
      range: [
        -BigInt('0x7fffffffffffffffffffffffffffffff') - 1n,
        BigInt('0x7fffffffffffffffffffffffffffffff'),
      ],
      set: (t, r, i) => {
        const n = i ? 8 : 0,
          a = i ? 0 : 8,
          s = 0xffffffffffffffffn;
        t.setBigInt64(n, BigInt(r) >> 64n, i), t.setBigUint64(a, BigInt(r) & s, i);
      },
      get: (t, r) => {
        const i = r ? 8 : 0,
          n = r ? 0 : 8,
          a = t.getBigInt64(i, r),
          s = t.getBigUint64(n, r);
        return (a << 64n) + s;
      },
      options: e,
    }),
  qt = (e = {}) =>
    ie({
      name: 'u8',
      size: 1,
      range: [0, +'0xff'],
      set: (t, r) => t.setUint8(0, Number(r)),
      get: (t) => t.getUint8(0),
      options: e,
    }),
  Sd = (e = {}) =>
    ie({
      name: 'u16',
      size: 2,
      range: [0, +'0xffff'],
      set: (t, r, i) => t.setUint16(0, Number(r), i),
      get: (t, r) => t.getUint16(0, r),
      options: e,
    }),
  Kr = (e = {}) =>
    ie({
      name: 'u32',
      size: 4,
      range: [0, +'0xffffffff'],
      set: (t, r, i) => t.setUint32(0, Number(r), i),
      get: (t, r) => t.getUint32(0, r),
      options: e,
    }),
  _d = (e = {}) =>
    ie({
      name: 'u64',
      size: 8,
      range: [0, BigInt('0xffffffffffffffff')],
      set: (t, r, i) => t.setBigUint64(0, BigInt(r), i),
      get: (t, r) => t.getBigUint64(0, r),
      options: e,
    }),
  zd = (e = {}) =>
    ie({
      name: 'u128',
      size: 16,
      range: [0, BigInt('0xffffffffffffffffffffffffffffffff')],
      set: (t, r, i) => {
        const n = i ? 8 : 0,
          a = i ? 0 : 8,
          s = 0xffffffffffffffffn;
        t.setBigUint64(n, BigInt(r) >> 64n, i), t.setBigUint64(a, BigInt(r) & s, i);
      },
      get: (t, r) => {
        const i = r ? 8 : 0,
          n = r ? 0 : 8,
          a = t.getBigUint64(i, r),
          s = t.getBigUint64(n, r);
        return (a << 64n) + s;
      },
      options: e,
    }),
  Ed = (e = {}) => ({
    description: e.description ?? 'shortU16',
    fixedSize: null,
    maxSize: 3,
    serialize: (t) => {
      pl('shortU16', 0, 65535, t);
      const r = [0];
      for (let i = 0; ; i += 1) {
        const n = t >> (i * 7);
        if (n === 0) break;
        const a = 127 & n;
        (r[i] = a), i > 0 && (r[i - 1] |= 128);
      }
      return new Uint8Array(r);
    },
    deserialize: (t, r = 0) => {
      let i = 0,
        n = 0;
      for (; ++n; ) {
        const a = n - 1,
          s = t[r + a],
          o = 127 & s;
        if (((i |= o << (a * 7)), !(s & 128))) break;
      }
      return [i, r + n];
    },
  });
class Wr extends Error {
  constructor(r, i, n) {
    super(`Expected [${r}] to have ${i} items, got ${n}.`);
    K(this, 'name', 'InvalidNumberOfItemsError');
  }
}
class wd extends Error {
  constructor(r, i) {
    super(
      `The remainder of the buffer (${r} bytes) cannot be split into chunks of ${i} bytes. Serializers of "remainder" size must have a remainder that is a multiple of its item size. In other words, ${r} modulo ${i} should be equal to zero.`
    );
    K(this, 'name', 'InvalidArrayLikeRemainderSizeError');
  }
}
class yl extends Error {
  constructor(r) {
    super(`Unrecognized array-like serializer size: ${JSON.stringify(r)}`);
    K(this, 'name', 'UnrecognizedArrayLikeSerializerSizeError');
  }
}
class hl extends Error {
  constructor(r, i) {
    super(`Invalid data enum variant. Expected one of [${i.join(', ')}], got "${r}".`);
    K(this, 'name', 'InvalidDataEnumVariantError');
  }
}
class ml extends Error {
  constructor(r, i, n, a) {
    super(
      `Invalid scalar enum variant. Expected one of [${i.join(', ')}] or a number between ${n} and ${a}, got "${r}".`
    );
    K(this, 'name', 'InvalidScalarEnumVariantError');
  }
}
class ma extends RangeError {
  constructor(r, i, n) {
    super(`Enum discriminator out of range. Expected a number between ${i} and ${n}, got ${r}.`);
    K(this, 'name', 'EnumDiscriminatorOutOfRangeError');
  }
}
function fe(e) {
  return e.reduce((t, r) => (t === null || r === null ? null : t + r), 0);
}
function Aa(e, t, r) {
  if (typeof e == 'number') return [e, r];
  if (typeof e == 'object') return e.deserialize(t, r);
  throw new yl(e);
}
function tt(e) {
  return typeof e == 'object' ? e.description : `${e}`;
}
function gt(e, t) {
  if (typeof e != 'number') return null;
  if (e === 0) return 0;
  const r = fe(t);
  return r === null ? null : r * e;
}
function va(e, t) {
  return typeof e == 'object' ? e.serialize(t) : new Uint8Array();
}
function xd(e, t = {}) {
  const r = t.size ?? Kr();
  return {
    description: t.description ?? `array(${e.description}; ${tt(r)})`,
    fixedSize: gt(r, [e.fixedSize]),
    maxSize: gt(r, [e.maxSize]),
    serialize: (i) => {
      if (typeof r == 'number' && i.length !== r) throw new Wr('array', r, i.length);
      return j([va(r, i.length), ...i.map((n) => e.serialize(n))]);
    },
    deserialize: (i, n = 0) => {
      const a = [];
      if (typeof r == 'object' && i.slice(n).length === 0) return [a, n];
      if (r === 'remainder') {
        for (; n < i.length; ) {
          const [d, u] = e.deserialize(i, n);
          a.push(d), (n = u);
        }
        return [a, n];
      }
      const [s, o] = Aa(r, i, n);
      n = o;
      for (let d = 0; d < s; d += 1) {
        const [u, l] = e.deserialize(i, n);
        a.push(u), (n = l);
      }
      return [a, n];
    },
  };
}
const Al = (e, t = {}) => {
  const r = typeof t == 'boolean' ? { backward: t } : t,
    i = r.backward ?? !1,
    n = i ? '; backward' : '';
  return {
    description: r.description ?? `bitArray(${e}${n})`,
    fixedSize: e,
    maxSize: e,
    serialize(a) {
      const s = [];
      for (let o = 0; o < e; o += 1) {
        let d = 0;
        for (let u = 0; u < 8; u += 1) {
          const l = Number(a[o * 8 + u] ?? 0);
          d |= l << (i ? u : 7 - u);
        }
        i ? s.unshift(d) : s.push(d);
      }
      return new Uint8Array(s);
    },
    deserialize(a, s = 0) {
      const o = [];
      let d = a.slice(s, s + e);
      if (((d = i ? d.reverse() : d), d.length !== e)) throw new et('bitArray', e, d.length);
      return (
        d.forEach((u) => {
          for (let l = 0; l < 8; l += 1)
            i ? (o.push(!!(u & 1)), (u >>= 1)) : (o.push(!!(u & 128)), (u <<= 1));
        }),
        [o, s + e]
      );
    },
  };
};
function Bd(e = {}) {
  const t = e.size ?? qt();
  if (t.fixedSize === null) throw new $r('Serializer [bool] requires a fixed size.');
  return {
    description: e.description ?? `bool(${t.description})`,
    fixedSize: t.fixedSize,
    maxSize: t.fixedSize,
    serialize: (r) => t.serialize(r ? 1 : 0),
    deserialize: (r, i = 0) => {
      if (r.slice(i).length === 0) throw new He('bool');
      const [n, a] = t.deserialize(r, i);
      return [n === 1, a];
    },
  };
}
function Cd(e = {}) {
  const t = e.size ?? 'variable',
    r = e.description ?? `bytes(${tt(t)})`,
    i = {
      description: r,
      fixedSize: null,
      maxSize: null,
      serialize: (n) => new Uint8Array(n),
      deserialize: (n, a = 0) => {
        const s = n.slice(a);
        return [s, a + s.length];
      },
    };
  return t === 'variable'
    ? i
    : typeof t == 'number'
      ? vi(i, t, r)
      : {
          description: r,
          fixedSize: null,
          maxSize: null,
          serialize: (n) => {
            const a = i.serialize(n),
              s = t.serialize(a.length);
            return j([s, a]);
          },
          deserialize: (n, a = 0) => {
            if (n.slice(a).length === 0) throw new He('bytes');
            const [s, o] = t.deserialize(n, a),
              d = Number(s);
            a = o;
            const u = n.slice(a, a + d);
            if (u.length < d) throw new et('bytes', d, u.length);
            const [l, c] = i.deserialize(u);
            return (a += c), [l, a];
          },
        };
}
function vl(e) {
  return e.reduce((t, r) => (t === null || r === null ? null : Math.max(t, r)), 0);
}
function Id(e, t = {}) {
  const r = t.size ?? qt(),
    i = e.map(([o, d]) => `${String(o)}${d ? `: ${d.description}` : ''}`).join(', '),
    a = e.every((o, d, u) => o[1].fixedSize === u[0][1].fixedSize) ? e[0][1].fixedSize : null,
    s = vl(e.map(([, o]) => o.maxSize));
  return {
    description: t.description ?? `dataEnum(${i}; ${r.description})`,
    fixedSize: e.length === 0 ? r.fixedSize : fe([r.fixedSize, a]),
    maxSize: e.length === 0 ? r.maxSize : fe([r.maxSize, s]),
    serialize: (o) => {
      const d = e.findIndex(([f]) => o.__kind === f);
      if (d < 0)
        throw new hl(
          o.__kind,
          e.map(([f]) => f)
        );
      const u = r.serialize(d),
        c = e[d][1].serialize(o);
      return j([u, c]);
    },
    deserialize: (o, d = 0) => {
      if (o.slice(d).length === 0) throw new He('dataEnum');
      const [u, l] = r.deserialize(o, d);
      d = l;
      const c = e[Number(u)] ?? null;
      if (!c) throw new ma(u, 0, e.length - 1);
      const [f, g] = c[1].deserialize(o, d);
      return (d = g), [{ __kind: c[0], ...(f ?? {}) }, d];
    },
  };
}
function kd(e, t, r = {}) {
  const i = r.size ?? Kr();
  return {
    description: r.description ?? `map(${e.description}, ${t.description}; ${tt(i)})`,
    fixedSize: gt(i, [e.fixedSize, t.fixedSize]),
    maxSize: gt(i, [e.maxSize, t.maxSize]),
    serialize: (n) => {
      if (typeof i == 'number' && n.size !== i) throw new Wr('map', i, n.size);
      const a = Array.from(n, ([s, o]) => j([e.serialize(s), t.serialize(o)]));
      return j([va(i, n.size), ...a]);
    },
    deserialize: (n, a = 0) => {
      const s = new Map();
      if (typeof i == 'object' && n.slice(a).length === 0) return [s, a];
      if (i === 'remainder') {
        for (; a < n.length; ) {
          const [u, l] = e.deserialize(n, a);
          a = l;
          const [c, f] = t.deserialize(n, a);
          (a = f), s.set(u, c);
        }
        return [s, a];
      }
      const [o, d] = Aa(i, n, a);
      a = d;
      for (let u = 0; u < o; u += 1) {
        const [l, c] = e.deserialize(n, a);
        a = c;
        const [f, g] = t.deserialize(n, a);
        (a = g), s.set(l, f);
      }
      return [s, a];
    },
  };
}
function Od(e, t = {}) {
  const r = t.prefix ?? qt(),
    i = t.fixed ?? !1;
  let n = `; ${tt(r)}`,
    a = e.fixedSize === 0 ? r.fixedSize : null;
  if (i) {
    if (e.fixedSize === null || r.fixedSize === null)
      throw new $r('Fixed nullables can only be used with fixed-size serializers');
    (n += '; fixed'), (a = r.fixedSize + e.fixedSize);
  }
  return {
    description: t.description ?? `nullable(${e.description + n})`,
    fixedSize: a,
    maxSize: fe([r.maxSize, e.maxSize]),
    serialize: (s) => {
      const o = r.serialize(+(s !== null));
      if (i) {
        const u = e.fixedSize,
          l = s !== null ? e.serialize(s).slice(0, u) : new Uint8Array(u).fill(0);
        return j([o, l]);
      }
      const d = s !== null ? e.serialize(s) : new Uint8Array();
      return j([o, d]);
    },
    deserialize: (s, o = 0) => {
      if (s.slice(o).length === 0) return [null, o];
      const d = o + (r.fixedSize ?? 0) + (e.fixedSize ?? 0),
        [u, l] = r.deserialize(s, o);
      if (((o = l), u === 0)) return [null, i ? d : o];
      const [c, f] = e.deserialize(s, o);
      return (o = f), [c, i ? d : o];
    },
  };
}
function Dd(e, t = {}) {
  const r = t.prefix ?? qt(),
    i = t.fixed ?? !1;
  let n = `; ${tt(r)}`,
    a = e.fixedSize === 0 ? r.fixedSize : null;
  if (i) {
    if (e.fixedSize === null || r.fixedSize === null)
      throw new $r('Fixed options can only be used with fixed-size serializers');
    (n += '; fixed'), (a = r.fixedSize + e.fixedSize);
  }
  return {
    description: t.description ?? `option(${e.description + n})`,
    fixedSize: a,
    maxSize: fe([r.maxSize, e.maxSize]),
    serialize: (s) => {
      const o = ca(s) ? s : ol(s),
        d = r.serialize(Number(Ve(o)));
      if (i) {
        const l = e.fixedSize,
          c = Ve(o) ? e.serialize(o.value).slice(0, l) : new Uint8Array(l).fill(0);
        return j([d, c]);
      }
      const u = Ve(o) ? e.serialize(o.value) : new Uint8Array();
      return j([d, u]);
    },
    deserialize: (s, o = 0) => {
      if (s.slice(o).length === 0) return [ci(), o];
      const d = o + (r.fixedSize ?? 0) + (e.fixedSize ?? 0),
        [u, l] = r.deserialize(s, o);
      if (((o = l), u === 0)) return [ci(), i ? d : o];
      const [c, f] = e.deserialize(s, o);
      return (o = f), [ua(c), i ? d : o];
    },
  };
}
function Vd(e = {}) {
  return {
    description: e.description ?? 'publicKey',
    fixedSize: 32,
    maxSize: 32,
    serialize: (t) => ha(Xe(t)),
    deserialize: (t, r = 0) => {
      const i = t.slice(r, r + 32);
      if (i.length === 0) throw new He('publicKey');
      if (i.length < Tr) throw new et('publicKey', Tr, i.length);
      return [Xe(i), r + 32];
    },
  };
}
function Td(e, t = {}) {
  const r = t.size ?? qt(),
    i = Object.keys(e),
    n = Object.values(e),
    a = n.some((c) => typeof c == 'number'),
    s = n.filter((c) => typeof c == 'string').join(', '),
    o = 0,
    d = a ? n.length / 2 - 1 : n.length - 1,
    u = a ? [...i] : [...new Set([...i, ...n])];
  function l(c) {
    const f = typeof c == 'number' && (c < o || c > d),
      g = typeof c == 'string' && !u.includes(c);
    if (f || g) throw new ml(c, u, o, d);
  }
  return {
    description: t.description ?? `enum(${s}; ${r.description})`,
    fixedSize: r.fixedSize,
    maxSize: r.maxSize,
    serialize: (c) => {
      if ((l(c), typeof c == 'number')) return r.serialize(c);
      const f = n.indexOf(c);
      return f >= 0 ? r.serialize(f) : r.serialize(i.indexOf(c));
    },
    deserialize: (c, f = 0) => {
      if (c.slice(f).length === 0) throw new He('enum');
      const [g, m] = r.deserialize(c, f),
        P = Number(g);
      if (((f = m), P < o || P > d)) throw new ma(P, o, d);
      return [a ? P : n[P], f];
    },
  };
}
function Rd(e, t = {}) {
  const r = t.size ?? Kr();
  return {
    description: t.description ?? `set(${e.description}; ${tt(r)})`,
    fixedSize: gt(r, [e.fixedSize]),
    maxSize: gt(r, [e.maxSize]),
    serialize: (i) => {
      if (typeof r == 'number' && i.size !== r) throw new Wr('set', r, i.size);
      const n = Array.from(i, (a) => e.serialize(a));
      return j([va(r, i.size), ...n]);
    },
    deserialize: (i, n = 0) => {
      const a = new Set();
      if (typeof r == 'object' && i.slice(n).length === 0) return [a, n];
      if (r === 'remainder') {
        for (; n < i.length; ) {
          const [d, u] = e.deserialize(i, n);
          a.add(d), (n = u);
        }
        return [a, n];
      }
      const [s, o] = Aa(r, i, n);
      n = o;
      for (let d = 0; d < s; d += 1) {
        const [u, l] = e.deserialize(i, n);
        a.add(u), (n = l);
      }
      return [a, n];
    },
  };
}
function Md(e = {}) {
  const t = e.size ?? Kr(),
    r = e.encoding ?? Pi,
    i = e.description ?? `string(${r.description}; ${tt(t)})`;
  return t === 'variable'
    ? { ...r, description: i }
    : typeof t == 'number'
      ? vi(r, t, i)
      : {
          description: i,
          fixedSize: null,
          maxSize: null,
          serialize: (n) => {
            const a = r.serialize(n),
              s = t.serialize(a.length);
            return j([s, a]);
          },
          deserialize: (n, a = 0) => {
            if (n.slice(a).length === 0) throw new He('string');
            const [s, o] = t.deserialize(n, a),
              d = Number(s);
            a = o;
            const u = n.slice(a, a + d);
            if (u.length < d) throw new et('string', d, u.length);
            const [l, c] = r.deserialize(u);
            return (a += c), [l, a];
          },
        };
}
function Ud(e, t = {}) {
  const r = e.map(([i, n]) => `${String(i)}: ${n.description}`).join(', ');
  return {
    description: t.description ?? `struct(${r})`,
    fixedSize: fe(e.map(([, i]) => i.fixedSize)),
    maxSize: fe(e.map(([, i]) => i.maxSize)),
    serialize: (i) => {
      const n = e.map(([a, s]) => s.serialize(i[a]));
      return j(n);
    },
    deserialize: (i, n = 0) => {
      const a = {};
      return (
        e.forEach(([s, o]) => {
          const [d, u] = o.deserialize(i, n);
          (n = u), (a[s] = d);
        }),
        [a, n]
      );
    },
  };
}
function $d(e, t = {}) {
  const r = e.map((i) => i.description).join(', ');
  return {
    description: t.description ?? `tuple(${r})`,
    fixedSize: fe(e.map((i) => i.fixedSize)),
    maxSize: fe(e.map((i) => i.maxSize)),
    serialize: (i) => {
      if (i.length !== e.length) throw new Wr('tuple', e.length, i.length);
      return j(e.map((n, a) => n.serialize(i[a])));
    },
    deserialize: (i, n = 0) => {
      const a = [];
      return (
        e.forEach((s) => {
          const [o, d] = s.deserialize(i, n);
          a.push(o), (n = d);
        }),
        [a, n]
      );
    },
  };
}
function Ld(e = {}) {
  return {
    description: e.description ?? 'unit',
    fixedSize: 0,
    maxSize: 0,
    serialize: () => new Uint8Array(),
    deserialize: (t, r = 0) => [void 0, r],
  };
}
const Kd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        DeserializingEmptyBufferError: He,
        get Endian() {
          return Rr;
        },
        EnumDiscriminatorOutOfRangeError: ma,
        ExpectedFixedSizeSerializerError: $r,
        InvalidArrayLikeRemainderSizeError: wd,
        InvalidBaseStringError: mi,
        InvalidDataEnumVariantError: hl,
        InvalidNumberOfItemsError: Wr,
        InvalidScalarEnumVariantError: ml,
        NotEnoughBytesError: et,
        NumberOutOfRangeError: gl,
        UnrecognizedArrayLikeSerializerSizeError: yl,
        array: xd,
        base10: da,
        base16: ll,
        base58: Ur,
        base64: ga,
        baseX: Ai,
        baseXReslice: cl,
        bitArray: Al,
        bool: Bd,
        bytes: Cd,
        dataEnum: Id,
        f32: yd,
        f64: hd,
        fixBytes: di,
        fixSerializer: vi,
        i128: bd,
        i16: Ad,
        i32: vd,
        i64: Pd,
        i8: md,
        map: kd,
        mapSerializer: Lr,
        maxSerializerSizes: vl,
        mergeBytes: j,
        nullable: Od,
        option: Dd,
        padBytes: fa,
        padNullCharacters: dl,
        publicKey: Vd,
        removeNullCharacters: pa,
        reverseSerializer: ul,
        scalarEnum: Td,
        set: Rd,
        shortU16: Ed,
        string: Md,
        struct: Ud,
        sumSerializerSizes: fe,
        tuple: $d,
        u128: zd,
        u16: Sd,
        u32: Kr,
        u64: _d,
        u8: qt,
        unit: Ld,
        utf8: Pi,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Wd = Lr,
  Hd = vi,
  Nd = ul,
  Fd = j,
  jd = fa,
  qd = di,
  Zd = Pi,
  Xd = Ai,
  Gd = da,
  Yd = Ur,
  Jd = ga,
  Qd = ll,
  ef = Al,
  tf = pa,
  rf = dl,
  nf = Rr;
class Pa extends Error {
  constructor(r, i, n, a) {
    super(r);
    K(this, 'name', 'UmiError');
    (this.source = i),
      (this.sourceDetails = n),
      (this.cause = a),
      (this.message = `${this.message}

Source: ${this.getFullSource()}${
        this.cause
          ? `

Caused By: ${this.cause}`
          : ''
      }
`);
  }
  getCapitalizedSource() {
    return this.source === 'sdk' || this.source === 'rpc'
      ? this.source.toUpperCase()
      : this.source[0].toUpperCase() + this.source.slice(1);
  }
  getFullSource() {
    const r = this.getCapitalizedSource(),
      i = this.sourceDetails ? ` > ${this.sourceDetails}` : '';
    return r + i;
  }
  toString() {
    return `[${this.name}] ${this.message}`;
  }
}
class ee extends Pa {
  constructor(r, i) {
    super(r, 'sdk', void 0, i);
    K(this, 'name', 'SdkError');
  }
}
class Pl extends ee {
  constructor(r, i, n) {
    const a = `The account at the provided address [${r}] is not of the expected type [${i}].`;
    super(a, n);
    K(this, 'name', 'UnexpectedAccountError');
  }
}
class bl extends ee {
  constructor(r, i, n) {
    const a = `${i ? `The account of type [${i}] was not found` : 'No account was found'} at the provided address [${r}].${n ? ` ${n}` : ''}`;
    super(a);
    K(this, 'name', 'AccountNotFoundError');
  }
}
const af = 128;
function sf(e, t) {
  const { data: r, publicKey: i, ...n } = e;
  try {
    const [a] = t.deserialize(r);
    return { publicKey: i, header: n, ...a };
  } catch (a) {
    throw new Pl(i, t.description, a);
  }
}
function of(e, t, r) {
  if (!e.exists) throw new bl(e.publicKey, t, r);
}
const fi = (e) => ((e = typeof e == 'object' ? e.toString() : e), BigInt(e));
class Sl extends ee {
  constructor(r, i, n) {
    const a = `Expected amount of type [${i} with ${n} decimals] but got [${r.identifier} with ${r.decimals} decimals]. Ensure the provided Amount is of the expected type.`;
    super(a);
    K(this, 'name', 'UnexpectedAmountError');
    (this.amount = r), (this.expectedIdentifier = i), (this.expectedDecimals = n);
  }
}
class _l extends ee {
  constructor(r, i, n) {
    const s = `The SDK tried to execute an operation${n ? ` [${n}]` : ''} on two amounts of different types: [${r.identifier} with ${r.decimals} decimals] and [${i.identifier} with ${i.decimals} decimals]. Provide both amounts in the same type to perform this operation.`;
    super(s);
    K(this, 'name', 'AmountMismatchError');
    (this.left = r), (this.right = i), (this.operation = n);
  }
}
const Hr = (e, t, r) => ({ basisPoints: fi(e), identifier: t, decimals: r }),
  Nr = (e, t, r) => {
    const i = Hr(BigInt(10) ** BigInt(r ?? 0), t, r);
    return xl(i, e);
  },
  lf = (e, t = 2) => Nr(e, '%', t),
  uf = (e, t, r) => Nr(e, t ?? 'splToken', r ?? 0),
  cf = (e) => Hr(e, 'SOL', 9),
  df = (e) => Nr(e, 'SOL', 9),
  ff = (e) => Nr(e, 'USD', 2),
  bi = (e, t, r) => e.identifier === t && e.decimals === r,
  gf = (e) => bi(e, 'SOL', 9),
  zl = (e, t) => bi(e, t.identifier, t.decimals);
function El(e, t, r) {
  if (!bi(e, t, r)) throw new Sl(e, t, r);
}
function pf(e) {
  El(e, 'SOL', 9);
}
function pt(e, t, r) {
  if (!zl(e, t)) throw new _l(e, t, r);
}
const yf = (e, t) => (pt(e, t, 'add'), { ...e, basisPoints: e.basisPoints + t.basisPoints }),
  wl = (e, t) => (pt(e, t, 'subtract'), { ...e, basisPoints: e.basisPoints - t.basisPoints }),
  xl = (e, t) => {
    if (typeof t == 'bigint') return { ...e, basisPoints: e.basisPoints * t };
    const [r, i] = t.toString().split('.'),
      n = BigInt(r + (i ?? '')),
      a = BigInt(10) ** BigInt((i == null ? void 0 : i.length) ?? 0);
    return { ...e, basisPoints: (e.basisPoints * n) / a };
  },
  hf = (e, t) => {
    if (typeof t == 'bigint') return { ...e, basisPoints: e.basisPoints / t };
    const [r, i] = t.toString().split('.'),
      n = BigInt(r + (i ?? '')),
      a = BigInt(10) ** BigInt((i == null ? void 0 : i.length) ?? 0);
    return { ...e, basisPoints: (e.basisPoints * a) / n };
  },
  Bl = (e) => {
    const t = e.basisPoints;
    return { ...e, basisPoints: t < 0 ? -t : t };
  },
  Fr = (e, t) => (
    pt(e, t, 'compare'), e.basisPoints > t.basisPoints ? 1 : e.basisPoints < t.basisPoints ? -1 : 0
  ),
  mf = (e, t, r) => {
    (r = r ?? Hr(0, e.identifier, e.decimals)),
      pt(e, t, 'isEqualToAmount'),
      pt(e, r, 'isEqualToAmount');
    const i = Bl(wl(e, t));
    return Cl(i, r);
  },
  Af = (e, t) => Fr(e, t) < 0,
  Cl = (e, t) => Fr(e, t) <= 0,
  vf = (e, t) => Fr(e, t) > 0,
  Pf = (e, t) => Fr(e, t) >= 0,
  bf = (e) => e.basisPoints === BigInt(0),
  Sf = (e) => e.basisPoints >= BigInt(0),
  _f = (e) => e.basisPoints < BigInt(0),
  ba = (e, t) => {
    let r = e.basisPoints.toString();
    if (e.decimals === 0) return r;
    const i = r.startsWith('-') ? '-' : '';
    (r = r.replace('-', '')), (r = r.padStart(e.decimals + 1, '0'));
    const n = r.slice(0, -e.decimals);
    let a = r.slice(-e.decimals);
    return t !== void 0 && (a = a.slice(0, t)), `${i + n}.${a}`;
  },
  zf = (e) => parseFloat(ba(e)),
  Ef = (e, t) => {
    const r = ba(e, t);
    switch (e.identifier) {
      case '%':
        return `${r}%`;
      case 'splToken':
        return /^1(\.0+)?$/.test(r) ? `${r} Token` : `${r} Tokens`;
      default:
        if (e.identifier.startsWith('splToken.')) {
          const [, i] = e.identifier.split('.');
          return `${i} ${r}`;
        }
        return `${e.identifier} ${r}`;
    }
  },
  wf = (e, t, r) =>
    Lr(
      e,
      (i) => (i.basisPoints > Number.MAX_SAFE_INTEGER ? i.basisPoints : Number(i.basisPoints)),
      (i) => Hr(i, t, r)
    ),
  xf = ['api.mainnet-beta.solana.com', 'ssc-dao.genesysgo.net'],
  Bf = ['api.devnet.solana.com', 'psytrbhymqlkfrhudd.dev.genesysgo.net'],
  Cf = ['api.testnet.solana.com'],
  If = ['localhost', '127.0.0.1'],
  kf = (e) => {
    const t = new URL(e).hostname;
    return xf.includes(t)
      ? 'mainnet-beta'
      : Bf.includes(t)
        ? 'devnet'
        : Cf.includes(t)
          ? 'testnet'
          : If.includes(t)
            ? 'localnet'
            : e.includes('mainnet')
              ? 'mainnet-beta'
              : e.includes('devnet')
                ? 'devnet'
                : e.includes('testnet')
                  ? 'testnet'
                  : e.includes('local')
                    ? 'localnet'
                    : 'custom';
  };
class Be extends ee {
  constructor(r, i) {
    const n = r.replace(/Interface$/, ''),
      a = `Tried using ${r} but no implementation of that interface was found. Make sure an implementation is registered, e.g. via "context.${i} = new My${n}();".`;
    super(a);
    K(this, 'name', 'InterfaceImplementationMissingError');
  }
}
function Il() {
  const e = () => {
    throw new Be('DownloaderInterface', 'downloader');
  };
  return { download: e, downloadJson: e };
}
function kl() {
  const e = () => {
    throw new Be('EddsaInterface', 'eddsa');
  };
  return {
    generateKeypair: e,
    createKeypairFromSecretKey: e,
    createKeypairFromSeed: e,
    isOnCurve: e,
    findPda: e,
    sign: e,
    verify: e,
  };
}
function Ol() {
  return {
    send: () => {
      throw new Be('HttpInterface', 'http');
    },
  };
}
function Dl() {
  const e = () => {
    throw new Be('ProgramRepositoryInterface', 'programs');
  };
  return {
    has: e,
    get: e,
    getPublicKey: e,
    all: e,
    add: e,
    bind: e,
    unbind: e,
    clone: e,
    resolveError: e,
  };
}
function Vl() {
  const e = () => {
    throw new Be('RpcInterface', 'rpc');
  };
  return {
    getEndpoint: e,
    getCluster: e,
    getAccount: e,
    getAccounts: e,
    getProgramAccounts: e,
    getBlockTime: e,
    getBalance: e,
    getRent: e,
    getSlot: e,
    getLatestBlockhash: e,
    getTransaction: e,
    getSignatureStatuses: e,
    accountExists: e,
    airdrop: e,
    call: e,
    sendTransaction: e,
    confirmTransaction: e,
  };
}
function Tl() {
  const e = () => {
    throw new Be('SerializerInterface', 'serializer');
  };
  return {
    tuple: e,
    array: e,
    map: e,
    set: e,
    option: e,
    nullable: e,
    struct: e,
    enum: e,
    dataEnum: e,
    string: e,
    bool: e,
    unit: e,
    u8: e,
    u16: e,
    u32: e,
    u64: e,
    u128: e,
    i8: e,
    i16: e,
    i32: e,
    i64: e,
    i128: e,
    f32: e,
    f64: e,
    bytes: e,
    publicKey: e,
  };
}
const Of = (e, t) =>
    e.reduce((r, i, n) => {
      const a = Math.floor(n / t);
      return r[a] || (r[a] = []), r[a].push(i), r;
    }, []),
  Rl = (e, t, r) => e.map((i, n) => r(i, (t == null ? void 0 : t[n]) ?? null, n)),
  Ml = (e, t) => e.reduce((r, i) => (r.some((n) => t(i, n)) || r.push(i), r), []),
  Ul = async (e, t) =>
    t.reduce(async (r, i) => {
      const n = await r;
      return i.signTransaction(n);
    }, Promise.resolve(e)),
  $l = async (e) => {
    const t = e.map((i) => i.transaction);
    return e
      .reduce(
        (i, { signers: n }, a) => (
          n.forEach((s) => {
            const o = i.find((d) => d.signer.publicKey === s.publicKey);
            o ? o.indices.push(a) : i.push({ signer: s, indices: [a] });
          }),
          i
        ),
        []
      )
      .reduce(async (i, { signer: n, indices: a }) => {
        const s = await i;
        if (a.length === 1) {
          const u = s[a[0]];
          return (s[a[0]] = await n.signTransaction(u)), s;
        }
        const o = a.map((u) => s[u]),
          d = await n.signAllTransactions(o);
        return (
          a.forEach((u, l) => {
            s[u] = d[l];
          }),
          s
        );
      }, Promise.resolve(t));
  },
  Df = (e) => typeof e == 'object' && 'publicKey' in e && 'signMessage' in e,
  Ll = (e) => Ml(e, (t, r) => t.publicKey === r.publicKey),
  Vf = (e) => ({
    publicKey: e,
    async signMessage(t) {
      return t;
    },
    async signTransaction(t) {
      return t;
    },
    async signAllTransactions(t) {
      return t;
    },
  });
function ta() {
  const e = new Error(
      'Trying to use a NullSigner. Did you forget to set a Signer on your Umi instance? See the `signerIdentity` method for more information.'
    ),
    t = () => {
      throw e;
    };
  return {
    get publicKey() {
      throw e;
    },
    signMessage: t,
    signTransaction: t,
    signAllTransactions: t,
  };
}
function Kl() {
  const e = () => {
    throw new Be('TransactionFactoryInterface', 'transactions');
  };
  return { create: e, serialize: e, deserialize: e, serializeMessage: e, deserializeMessage: e };
}
function Wl() {
  const e = () => {
    throw new Be('UploaderInterface', 'uploader');
  };
  return { upload: e, uploadJson: e, getUploadPrice: e };
}
const Hl = () => ({
    downloader: Il(),
    eddsa: kl(),
    http: Ol(),
    identity: ta(),
    payer: ta(),
    programs: Dl(),
    rpc: Vl(),
    serializer: Tl(),
    transactions: Kl(),
    uploader: Wl(),
  }),
  gi = (e) => {
    if (typeof e == 'string' || Rf(e)) {
      const t = new Date(e),
        r = Math.floor(t.getTime() / 1e3);
      return fi(r);
    }
    return fi(e);
  },
  Tf = () => gi(new Date(Date.now())),
  Rf = (e) => Object.prototype.toString.call(e) === '[object Date]',
  Mf = (
    e,
    t = 'en-US',
    r = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }
  ) => new Date(Number(e * 1000n)).toLocaleDateString(t, r),
  Uf = (e) =>
    Lr(
      e,
      (t) => {
        const r = gi(t);
        return r > Number.MAX_SAFE_INTEGER ? r : Number(r);
      },
      (t) => gi(t)
    ),
  Nl = (e = 20, t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
    let r = '';
    const i = t.length;
    for (let n = 0; n < e; n += 1) r += t.charAt(Math.floor(Math.random() * i));
    return r;
  },
  Sa = (e, t, r = {}) => ({
    buffer: typeof e == 'string' ? Pi.serialize(e) : e,
    fileName: t,
    displayName: r.displayName ?? t,
    uniqueName: r.uniqueName ?? Nl(),
    contentType: r.contentType ?? null,
    extension: r.extension ?? Ff(t),
    tags: r.tags ?? [],
  }),
  $f = async (e, t = {}) => Sa(new Uint8Array(await e.arrayBuffer()), e.name, t),
  Lf = (e, t = 'inline.json', r = {}) =>
    Sa(JSON.stringify(e), t, { contentType: 'application/json', ...r }),
  Kf = (e) => new File([e.buffer], e.fileName),
  Wf = (e) => JSON.parse(new TextDecoder().decode(e.buffer)),
  Hf = (...e) => e.reduce((t, r) => t + r.buffer.byteLength, 0),
  Nf = (e) =>
    e != null &&
    typeof e == 'object' &&
    'buffer' in e &&
    'fileName' in e &&
    'displayName' in e &&
    'uniqueName' in e &&
    'contentType' in e &&
    'extension' in e &&
    'tags' in e,
  Ff = (e) => {
    const t = e.lastIndexOf('.');
    return t < 0 ? null : e.slice(t + 1);
  };
class ze {
  constructor(t, r, i = {}) {
    (this.context = t), (this.programId = r), (this.options = i);
  }
  reset() {
    return new ze(this.context, this.programId, {
      fields: this.options.fields,
      deserializeCallback: this.options.deserializeCallback,
    });
  }
  registerFields(t) {
    return new ze(this.context, this.programId, { ...this.options, fields: t });
  }
  registerFieldsFromStruct(t) {
    let r = 0;
    const i = t.reduce(
      (n, [a, s]) => (
        (n[a] = [r, s]), (r = r === null || s.fixedSize === null ? null : r + s.fixedSize), n
      ),
      {}
    );
    return this.registerFields(i);
  }
  deserializeUsing(t) {
    return new ze(this.context, this.programId, { ...this.options, deserializeCallback: t });
  }
  slice(t, r) {
    return new ze(this.context, this.programId, {
      ...this.options,
      dataSlice: { offset: t, length: r },
    });
  }
  sliceField(t, r) {
    const [i, n] = this.getField(t, r);
    if (!n.fixedSize) throw new ee(`Cannot slice field [${t}] because its size is variable.`);
    return this.slice(i, n.fixedSize);
  }
  withoutData() {
    return this.slice(0, 0);
  }
  addFilter(...t) {
    return new ze(this.context, this.programId, {
      ...this.options,
      filters: [...(this.options.filters ?? []), ...t],
    });
  }
  where(t, r) {
    let i;
    return (
      typeof r == 'string'
        ? (i = Ur.serialize(r))
        : typeof r == 'number' || typeof r == 'bigint' || typeof r == 'boolean'
          ? (i = da.serialize(BigInt(r).toString()))
          : (i = new Uint8Array(r)),
      this.addFilter({ memcmp: { offset: t, bytes: i } })
    );
  }
  whereField(t, r, i) {
    const [n, a] = this.getField(t, i);
    return this.where(n, a.serialize(r));
  }
  whereSize(t) {
    return this.addFilter({ dataSize: t });
  }
  sortUsing(t) {
    return new ze(this.context, this.programId, { ...this.options, sortCallback: t });
  }
  async get(t = {}) {
    const r = await this.context.rpc.getProgramAccounts(this.programId, {
      ...t,
      dataSlice: t.dataSlice ?? this.options.dataSlice,
      filters: [...(t.filters ?? []), ...(this.options.filters ?? [])],
    });
    return this.options.sortCallback && r.sort(this.options.sortCallback), r;
  }
  async getAndMap(t, r = {}) {
    return (await this.get(r)).map(t);
  }
  async getDeserialized(t = {}) {
    const r = await this.get(t);
    return this.options.deserializeCallback ? r.map(this.options.deserializeCallback) : r;
  }
  async getPublicKeys(t = {}) {
    return this.getAndMap((r) => r.publicKey, t);
  }
  async getDataAsPublicKeys(t = {}) {
    return this.getAndMap((r) => {
      try {
        return Xe(r.data);
      } catch {
        const n = `Following a getProgramAccount call, you are trying to use an account's data (or a slice of it) as a public key. However, we encountered an account [${r.publicKey}] whose data [base64=${ga.deserialize(r.data)}] is not a valid public key.`;
        throw new ee(n);
      }
    }, t);
  }
  getField(t, r) {
    if (!this.options.fields) throw new ee('Fields are not defined in this GpaBuilder.');
    const i = this.options.fields[t];
    if (!i) throw new ee(`Field [${t}] is not defined in this GpaBuilder.`);
    const [n, a] = i;
    if (r !== void 0) return [r, a];
    if (n === null)
      throw new ee(
        `Field [${t}] does not have a fixed offset. This is likely because it is not in the fixed part of the account's data. In other words, it is located after a field of variable length which means we cannot find a fixed offset for the filter. You may go around this by providing an offset explicitly.`
      );
    return [n, a];
  }
}
const jf = (e, t) => new ze(e, t),
  qf = () => new de({ method: 'get', data: void 0, headers: {}, url: '' });
class de {
  constructor(t) {
    this.request = t;
  }
  asJson() {
    return this.contentType('application/json');
  }
  asMultipart() {
    return this.contentType('multipart/form-data');
  }
  asForm() {
    return this.contentType('application/x-www-form-urlencoded');
  }
  accept(t) {
    return this.withHeader('accept', t);
  }
  contentType(t) {
    return this.withHeader('content-type', t);
  }
  userAgent(t) {
    return this.withHeader('user-agent', t);
  }
  withToken(t, r = 'Bearer') {
    return this.withHeader('authorization', `${r} ${t}`);
  }
  withHeader(t, r) {
    return this.withHeaders({ [t]: r });
  }
  withHeaders(t) {
    return new de({ ...this.request, headers: { ...this.request.headers, ...t } });
  }
  dontFollowRedirects() {
    return this.followRedirects(0);
  }
  followRedirects(t) {
    return new de({ ...this.request, maxRedirects: t });
  }
  withoutTimeout() {
    return this.withTimeout(0);
  }
  withTimeout(t) {
    return new de({ ...this.request, timeout: t });
  }
  withAbortSignal(t) {
    return new de({ ...this.request, signal: t });
  }
  withEndpoint(t, r) {
    return new de({ ...this.request, method: t, url: r });
  }
  withParams(t) {
    const r = new URL(this.request.url),
      i = new URLSearchParams(t),
      n = new URLSearchParams(r.searchParams);
    return (
      [...i.entries()].forEach(([a, s]) => {
        n.append(a, s);
      }),
      (r.search = n.toString()),
      new de({ ...this.request, url: r.toString() })
    );
  }
  withData(t) {
    return new de({ ...this.request, data: t });
  }
  get(t) {
    return this.withEndpoint('get', t);
  }
  post(t) {
    return this.withEndpoint('post', t);
  }
  put(t) {
    return this.withEndpoint('put', t);
  }
  patch(t) {
    return this.withEndpoint('patch', t);
  }
  delete(t) {
    return this.withEndpoint('delete', t);
  }
  get method() {
    return this.request.method;
  }
  get url() {
    return this.request.url;
  }
  get data() {
    return this.request.data;
  }
  get headers() {
    return this.request.headers;
  }
  get maxRedirects() {
    return this.request.maxRedirects;
  }
  get timeout() {
    return this.request.timeout;
  }
  get signal() {
    return this.request.signal;
  }
}
const Fl = 1232,
  jl = (e, t, r) => {
    const i = e.message.header.numRequiredSignatures,
      a = e.message.accounts.slice(0, i).findIndex((o) => o === r);
    if (a < 0) throw new Error('The provided signer is not required to sign this transaction.');
    const s = [...e.signatures];
    return (s[a] = t), { ...e, signatures: s };
  },
  _a = (e) => Si(e, e.eddsa.generateKeypair()),
  Si = (e, t) => ({
    publicKey: t.publicKey,
    secretKey: t.secretKey,
    async signMessage(r) {
      return e.eddsa.sign(r, t);
    },
    async signTransaction(r) {
      const i = r.serializedMessage,
        n = e.eddsa.sign(i, t);
      return jl(r, n, t.publicKey);
    },
    async signAllTransactions(r) {
      return Promise.all(r.map((i) => this.signTransaction(i)));
    },
  }),
  Zf = (e) => e.secretKey !== void 0,
  Xf = (e) => e instanceof Error && 'logs' in e,
  za = (e, t = !0) => ({
    install(r) {
      (r.identity = e), t && (r.payer = e);
    },
  }),
  Ea = (e) => ({
    install(t) {
      t.payer = e;
    },
  }),
  Gf = (e = !0) => ({
    install(t) {
      const r = _a(t);
      t.use(za(r, e));
    },
  }),
  Yf = () => ({
    install(e) {
      const t = _a(e);
      e.use(Ea(t));
    },
  }),
  Jf = (e, t = !0) => ({
    install(r) {
      const i = Si(r, e);
      r.use(za(i, t));
    },
  }),
  Qf = (e) => ({
    install(t) {
      const r = Si(t, e);
      t.use(Ea(r));
    },
  });
class Y {
  constructor(t = [], r = {}) {
    (this.items = t), (this.options = r);
  }
  empty() {
    return new Y([], this.options);
  }
  setItems(t) {
    return new Y(this.parseItems(t), this.options);
  }
  prepend(t) {
    return new Y([...this.parseItems(t), ...this.items], this.options);
  }
  append(t) {
    return new Y([...this.items, ...this.parseItems(t)], this.options);
  }
  add(t) {
    return this.append(t);
  }
  mapInstructions(t) {
    return new Y(this.items.map(t), this.options);
  }
  addRemainingAccounts(t, r) {
    r = r ?? this.items.length - 1;
    const i = Array.isArray(t) ? t : [t],
      n = i.map((s) =>
        'pubkey' in s ? s : { pubkey: s.signer.publicKey, isSigner: !0, isWritable: s.isWritable }
      ),
      a = i.flatMap((s) => ('pubkey' in s ? [] : [s.signer]));
    return this.mapInstructions((s, o) => {
      if (o !== r) return s;
      const d = [...s.instruction.keys, ...n];
      return { ...s, instruction: { ...s.instruction, keys: d }, signers: [...s.signers, ...a] };
    });
  }
  splitByIndex(t) {
    return [new Y(this.items.slice(0, t), this.options), new Y(this.items.slice(t), this.options)];
  }
  unsafeSplitByTransactionSize(t) {
    return this.items.reduce(
      (r, i) => {
        const n = r.pop(),
          a = n.add(i);
        return a.fitsInOneTransaction(t) ? r.push(a) : (r.push(n), r.push(n.empty().add(i))), r;
      },
      [this.empty()]
    );
  }
  setFeePayer(t) {
    return new Y(this.items, { ...this.options, feePayer: t });
  }
  getFeePayer(t) {
    return this.options.feePayer ?? t.payer;
  }
  setVersion(t) {
    return new Y(this.items, { ...this.options, version: t });
  }
  useLegacyVersion() {
    return this.setVersion('legacy');
  }
  useV0() {
    return this.setVersion(0);
  }
  setAddressLookupTables(t) {
    return new Y(this.items, { ...this.options, addressLookupTables: t });
  }
  getBlockhash() {
    return typeof this.options.blockhash == 'object'
      ? this.options.blockhash.blockhash
      : this.options.blockhash;
  }
  setBlockhash(t) {
    return new Y(this.items, { ...this.options, blockhash: t });
  }
  async setLatestBlockhash(t, r = {}) {
    return this.setBlockhash(await t.rpc.getLatestBlockhash(r));
  }
  getInstructions() {
    return this.items.map((t) => t.instruction);
  }
  getSigners(t) {
    return Ll([this.getFeePayer(t), ...this.items.flatMap((r) => r.signers)]);
  }
  getBytesCreatedOnChain() {
    return this.items.reduce((t, r) => t + r.bytesCreatedOnChain, 0);
  }
  async getRentCreatedOnChain(t) {
    return t.rpc.getRent(this.getBytesCreatedOnChain(), { includesHeaderBytes: !0 });
  }
  getTransactionSize(t) {
    return t.transactions.serialize(this.setBlockhash('11111111111111111111111111111111').build(t))
      .length;
  }
  minimumTransactionsRequired(t) {
    return Math.ceil(this.getTransactionSize(t) / Fl);
  }
  fitsInOneTransaction(t) {
    return this.minimumTransactionsRequired(t) === 1;
  }
  build(t) {
    const r = this.getBlockhash();
    if (!r)
      throw new ee(
        'Setting a blockhash is required to build a transaction. Please use the `setBlockhash` or `setLatestBlockhash` methods.'
      );
    const i = {
      version: this.options.version ?? 0,
      payer: this.getFeePayer(t).publicKey,
      instructions: this.getInstructions(),
      blockhash: r,
    };
    return (
      i.version === 0 &&
        this.options.addressLookupTables &&
        (i.addressLookupTables = this.options.addressLookupTables),
      t.transactions.create(i)
    );
  }
  async buildWithLatestBlockhash(t, r = {}) {
    let i = this;
    return this.options.blockhash || (i = await this.setLatestBlockhash(t, r)), i.build(t);
  }
  async buildAndSign(t) {
    return Ul(await this.buildWithLatestBlockhash(t), this.getSigners(t));
  }
  async send(t, r = {}) {
    const i = await this.buildAndSign(t);
    return t.rpc.sendTransaction(i, r);
  }
  async confirm(t, r, i = {}) {
    let n = this;
    this.options.blockhash || (n = await this.setLatestBlockhash(t));
    let a;
    if (i.strategy) a = i.strategy;
    else {
      const s =
        typeof n.options.blockhash == 'object'
          ? n.options.blockhash
          : await t.rpc.getLatestBlockhash();
      a = i.strategy ?? { type: 'blockhash', ...s };
    }
    return t.rpc.confirmTransaction(r, { ...i, strategy: a });
  }
  async sendAndConfirm(t, r = {}) {
    let i = this;
    this.options.blockhash || (i = await this.setLatestBlockhash(t));
    const n = await i.send(t, r.send),
      a = await i.confirm(t, n, r.confirm);
    return { signature: n, result: a };
  }
  parseItems(t) {
    return (Array.isArray(t) ? t : [t]).flatMap((r) => ('items' in r ? r.items : [r]));
  }
}
const eg = (e = []) => new Y(e);
class Ee {
  constructor(t = [], r = {}) {
    (this.builders = t), (this.options = r);
  }
  prepend(t) {
    const r = Array.isArray(t) ? t : [t];
    return new Ee([...r, ...this.builders], this.options);
  }
  append(t) {
    const r = Array.isArray(t) ? t : [t];
    return new Ee([...this.builders, ...r], this.options);
  }
  add(t) {
    return this.append(t);
  }
  sequential() {
    return new Ee(this.builders, { ...this.options, parallel: !1 });
  }
  parallel() {
    return new Ee(this.builders, { ...this.options, parallel: !0 });
  }
  isParallel() {
    return this.options.parallel ?? !1;
  }
  merge() {
    return this.builders.length === 0
      ? new Y()
      : this.builders.reduce((t, r) => t.add(r), this.builders[0].empty());
  }
  build(t) {
    return this.builders.map((r) => r.build(t));
  }
  async setLatestBlockhash(t) {
    if (!this.builders.some((n) => !n.options.blockhash)) return this;
    const i = await t.rpc.getLatestBlockhash();
    return this.map((n) => (n.options.blockhash ? n : n.setBlockhash(i)));
  }
  async buildWithLatestBlockhash(t) {
    return (await this.setLatestBlockhash(t)).build(t);
  }
  async buildAndSign(t) {
    const r = await this.buildWithLatestBlockhash(t),
      i = this.builders.map((n) => n.getSigners(t));
    return $l(Rl(r, i, (n, a) => ({ transaction: n, signers: a ?? [] })));
  }
  async send(t, r = {}) {
    return this.runAll(await this.buildAndSign(t), async (i) => t.rpc.sendTransaction(i, r));
  }
  async sendAndConfirm(t, r = {}) {
    var a, s, o;
    const i =
      (a = this.builders.find((d) => typeof d.options.blockhash == 'object')) == null
        ? void 0
        : a.options.blockhash;
    let n;
    if ((s = r.confirm) != null && s.strategy) n = r.confirm.strategy;
    else {
      const d = i ?? (await t.rpc.getLatestBlockhash());
      n = ((o = r.confirm) == null ? void 0 : o.strategy) ?? { type: 'blockhash', ...d };
    }
    return this.runAll(await this.buildAndSign(t), async (d) => {
      const u = await t.rpc.sendTransaction(d, r.send),
        l = await t.rpc.confirmTransaction(u, { ...r.confirm, strategy: n });
      return { signature: u, result: l };
    });
  }
  map(t) {
    return new Ee(this.builders.map(t));
  }
  filter(t) {
    return new Ee(this.builders.filter(t));
  }
  async runAll(t, r) {
    return this.isParallel()
      ? Promise.all(t.map(r))
      : t.reduce(async (i, ...n) => [...(await i), await r(...n)], Promise.resolve([]));
  }
}
function tg(e = []) {
  return new Ee(e);
}
const rg = () => ({
  ...Hl(),
  use(e) {
    return e.install(this), this;
  },
});
class ig extends ee {
  constructor(r, i, n) {
    const a = `Expected a string of base ${i}, got [${r}].`;
    super(a, n);
    K(this, 'name', 'InvalidBaseStringError');
  }
}
class ng extends Pa {
  constructor(r, i, n) {
    super(r, 'program', `${i.name} [${i.publicKey}]`, n);
    K(this, 'name', 'ProgramError');
    (this.program = i),
      (this.logs = n == null ? void 0 : n.logs),
      this.logs &&
        (this.message += `
Program Logs:
${this.logs.map((a) => `| ${a}`).join(`
`)}
`);
  }
}
const ag = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ACCOUNT_HEADER_SIZE: af,
        AccountNotFoundError: bl,
        AmountMismatchError: _l,
        Endian: nf,
        GpaBuilder: ze,
        HttpRequestBuilder: de,
        InterfaceImplementationMissingError: Be,
        InvalidBaseStringError: ig,
        InvalidPublicKeyError: Or,
        PUBLIC_KEY_LENGTH: Tr,
        ProgramError: ng,
        SdkError: ee,
        TRANSACTION_SIZE_LIMIT: Fl,
        TransactionBuilder: Y,
        TransactionBuilderGroup: Ee,
        UmiError: Pa,
        UnexpectedAccountError: Pl,
        UnexpectedAmountError: Sl,
        absoluteAmount: Bl,
        addAmounts: yf,
        addTransactionSignature: jl,
        amountToNumber: zf,
        amountToString: ba,
        assertAccountExists: of,
        assertAmount: El,
        assertPublicKey: ya,
        assertSameAmounts: pt,
        assertSolAmount: pf,
        base10: Gd,
        base16: Qd,
        base58: Yd,
        base58PublicKey: cd,
        base64: Jd,
        baseX: Xd,
        bitArray: ef,
        chunk: Of,
        compareAmounts: Fr,
        createAmount: Hr,
        createAmountFromDecimals: Nr,
        createBigInt: fi,
        createBrowserFileFromGenericFile: Kf,
        createGenericFile: Sa,
        createGenericFileFromBrowserFile: $f,
        createGenericFileFromJson: Lf,
        createNoopSigner: Vf,
        createNullContext: Hl,
        createNullDownloader: Il,
        createNullEddsa: kl,
        createNullHttp: Ol,
        createNullProgramRepository: Dl,
        createNullRpc: Vl,
        createNullSerializer: Tl,
        createNullSigner: ta,
        createNullTransactionFactory: Kl,
        createNullUploader: Wl,
        createSignerFromKeypair: Si,
        createUmi: rg,
        dateTime: gi,
        defaultPublicKey: od,
        deserializeAccount: sf,
        displayAmount: Ef,
        divideAmount: hf,
        fixBytes: qd,
        fixSerializer: Hd,
        formatDateTime: Mf,
        generateRandomString: Nl,
        generateSigner: _a,
        generatedSignerIdentity: Gf,
        generatedSignerPayer: Yf,
        getBytesFromGenericFiles: Hf,
        gpaBuilder: jf,
        isAmount: bi,
        isEqualToAmount: mf,
        isErrorWithLogs: Xf,
        isGenericFile: Nf,
        isGreaterThanAmount: vf,
        isGreaterThanOrEqualToAmount: Pf,
        isKeypairSigner: Zf,
        isLessThanAmount: Af,
        isLessThanOrEqualToAmount: Cl,
        isNegativeAmount: _f,
        isNone: id,
        isOption: ca,
        isPda: ld,
        isPositiveAmount: Sf,
        isPublicKey: fl,
        isSigner: Df,
        isSolAmount: gf,
        isSome: Ve,
        isZeroAmount: bf,
        keypairIdentity: Jf,
        keypairPayer: Qf,
        lamports: cf,
        mapAmountSerializer: wf,
        mapDateTimeSerializer: Uf,
        mapSerializer: Wd,
        mergeBytes: Fd,
        multiplyAmount: xl,
        none: ci,
        now: Tf,
        padBytes: jd,
        padNullCharacters: rf,
        parseJsonFromGenericFile: Wf,
        percentAmount: lf,
        publicKey: Xe,
        publicKeyBytes: ha,
        removeNullCharacters: tf,
        request: qf,
        resolveClusterFromEndpoint: kf,
        reverseSerializer: Nd,
        sameAmounts: zl,
        samePublicKey: dd,
        signAllTransactions: $l,
        signTransaction: Ul,
        signerIdentity: za,
        signerPayer: Ea,
        sol: df,
        some: ua,
        subtractAmounts: wl,
        tokenAmount: uf,
        transactionBuilder: eg,
        transactionBuilderGroup: tg,
        uniqueBy: Ml,
        uniquePublicKeys: ud,
        uniqueSigners: Ll,
        unwrapOption: nd,
        unwrapOptionRecursively: ea,
        unwrapSome: ad,
        unwrapSomeOrElse: sd,
        usd: ff,
        utf8: Zd,
        wrapNullable: ol,
        zipMap: Rl,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  E = la(ag);
var y = {};
const sg = la(Kd);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = sg;
  Object.keys(t).forEach(function (r) {
    r !== 'default' &&
      !e.hasOwnProperty(r) &&
      Object.defineProperty(e, r, {
        enumerable: !0,
        get: function () {
          return t[r];
        },
      });
  });
})(y);
var mn = {},
  er = {},
  _i = {},
  An = {},
  zi = {};
Object.defineProperty(zi, '__esModule', { value: !0 });
zi.getAddBlockerSerializer = void 0;
const og = y;
function lg() {
  return (0, og.struct)([], { description: 'AddBlocker' });
}
zi.getAddBlockerSerializer = lg;
var Ei = {};
Object.defineProperty(Ei, '__esModule', { value: !0 });
Ei.getAttributeSerializer = void 0;
const vn = y;
function ug() {
  return (0, vn.struct)(
    [
      ['key', (0, vn.string)()],
      ['value', (0, vn.string)()],
    ],
    { description: 'Attribute' }
  );
}
Ei.getAttributeSerializer = ug;
var tr = {},
  Cs;
function cg() {
  if (Cs) return tr;
  (Cs = 1),
    Object.defineProperty(tr, '__esModule', { value: !0 }),
    (tr.getAttributesSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)([['attributeList', (0, e.array)((0, t.getAttributeSerializer)())]], {
      description: 'Attributes',
    });
  }
  return (tr.getAttributesSerializer = r), tr;
}
var rr = {},
  Is;
function dg() {
  if (Is) return rr;
  (Is = 1),
    Object.defineProperty(rr, '__esModule', { value: !0 }),
    (rr.getAutographSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)([['signatures', (0, e.array)((0, t.getAutographSignatureSerializer)())]], {
      description: 'Autograph',
    });
  }
  return (rr.getAutographSerializer = r), rr;
}
var wi = {};
Object.defineProperty(wi, '__esModule', { value: !0 });
wi.getAutographSignatureSerializer = void 0;
const Pn = y;
function fg() {
  return (0, Pn.struct)(
    [
      ['address', (0, Pn.publicKey)()],
      ['message', (0, Pn.string)()],
    ],
    { description: 'AutographSignature' }
  );
}
wi.getAutographSignatureSerializer = fg;
var ir = {},
  ks;
function gg() {
  if (ks) return ir;
  (ks = 1),
    Object.defineProperty(ir, '__esModule', { value: !0 }),
    (ir.getBaseAppDataSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['dataAuthority', (0, t.getBasePluginAuthoritySerializer)()],
        ['schema', (0, t.getExternalPluginAdapterSchemaSerializer)()],
      ],
      { description: 'BaseAppData' }
    );
  }
  return (ir.getBaseAppDataSerializer = r), ir;
}
var nr = {},
  Os;
function pg() {
  if (Os) return nr;
  (Os = 1),
    Object.defineProperty(nr, '__esModule', { value: !0 }),
    (nr.getBaseAppDataInitInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['dataAuthority', (0, t.getBasePluginAuthoritySerializer)()],
        ['initPluginAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        ['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())],
      ],
      { description: 'BaseAppDataInitInfo' }
    );
  }
  return (nr.getBaseAppDataInitInfoSerializer = r), nr;
}
var ar = {},
  Ds;
function yg() {
  if (Ds) return ar;
  (Ds = 1),
    Object.defineProperty(ar, '__esModule', { value: !0 }),
    (ar.getBaseAppDataUpdateInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())]],
      { description: 'BaseAppDataUpdateInfo' }
    );
  }
  return (ar.getBaseAppDataUpdateInfoSerializer = r), ar;
}
var sr = {},
  Vs;
function hg() {
  if (Vs) return sr;
  (Vs = 1),
    Object.defineProperty(sr, '__esModule', { value: !0 }),
    (sr.getBaseDataSectionSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['parentKey', (0, t.getBaseLinkedDataKeySerializer)()],
        ['schema', (0, t.getExternalPluginAdapterSchemaSerializer)()],
      ],
      { description: 'BaseDataSection' }
    );
  }
  return (sr.getBaseDataSectionSerializer = r), sr;
}
var or = {},
  Ts;
function mg() {
  if (Ts) return or;
  (Ts = 1),
    Object.defineProperty(or, '__esModule', { value: !0 }),
    (or.getBaseDataSectionInitInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['parentKey', (0, t.getBaseLinkedDataKeySerializer)()],
        ['schema', (0, t.getExternalPluginAdapterSchemaSerializer)()],
      ],
      { description: 'BaseDataSectionInitInfo' }
    );
  }
  return (or.getBaseDataSectionInitInfoSerializer = r), or;
}
var xi = {};
Object.defineProperty(xi, '__esModule', { value: !0 });
xi.getBaseDataSectionUpdateInfoSerializer = void 0;
const Ag = y;
function vg() {
  return (0, Ag.struct)([], { description: 'BaseDataSectionUpdateInfo' });
}
xi.getBaseDataSectionUpdateInfoSerializer = vg;
var ge = {},
  Rs;
function Pg() {
  if (Rs) return ge;
  (Rs = 1),
    Object.defineProperty(ge, '__esModule', { value: !0 }),
    (ge.isBaseExternalPluginAdapterInitInfo =
      ge.baseExternalPluginAdapterInitInfo =
      ge.getBaseExternalPluginAdapterInitInfoSerializer =
        void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        [
          'LifecycleHook',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseLifecycleHookInitInfoSerializer)()])],
          ]),
        ],
        [
          'Oracle',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseOracleInitInfoSerializer)()])]]),
        ],
        [
          'AppData',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseAppDataInitInfoSerializer)()])]]),
        ],
        [
          'LinkedLifecycleHook',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseLinkedLifecycleHookInitInfoSerializer)()])],
          ]),
        ],
        [
          'LinkedAppData',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseLinkedAppDataInitInfoSerializer)()])],
          ]),
        ],
        [
          'DataSection',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseDataSectionInitInfoSerializer)()])],
          ]),
        ],
      ],
      { description: 'BaseExternalPluginAdapterInitInfo' }
    );
  }
  ge.getBaseExternalPluginAdapterInitInfoSerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  ge.baseExternalPluginAdapterInitInfo = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (ge.isBaseExternalPluginAdapterInitInfo = n), ge;
}
var pe = {},
  Ms;
function bg() {
  if (Ms) return pe;
  (Ms = 1),
    Object.defineProperty(pe, '__esModule', { value: !0 }),
    (pe.isBaseExternalPluginAdapterKey =
      pe.baseExternalPluginAdapterKey =
      pe.getBaseExternalPluginAdapterKeySerializer =
        void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        ['LifecycleHook', (0, e.struct)([['fields', (0, e.tuple)([(0, e.publicKey)()])]])],
        ['Oracle', (0, e.struct)([['fields', (0, e.tuple)([(0, e.publicKey)()])]])],
        [
          'AppData',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBasePluginAuthoritySerializer)()])]]),
        ],
        ['LinkedLifecycleHook', (0, e.struct)([['fields', (0, e.tuple)([(0, e.publicKey)()])]])],
        [
          'LinkedAppData',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBasePluginAuthoritySerializer)()])]]),
        ],
        [
          'DataSection',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseLinkedDataKeySerializer)()])]]),
        ],
      ],
      { description: 'BaseExternalPluginAdapterKey' }
    );
  }
  pe.getBaseExternalPluginAdapterKeySerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  pe.baseExternalPluginAdapterKey = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (pe.isBaseExternalPluginAdapterKey = n), pe;
}
var ye = {},
  Us;
function Sg() {
  if (Us) return ye;
  (Us = 1),
    Object.defineProperty(ye, '__esModule', { value: !0 }),
    (ye.isBaseExternalPluginAdapterUpdateInfo =
      ye.baseExternalPluginAdapterUpdateInfo =
      ye.getBaseExternalPluginAdapterUpdateInfoSerializer =
        void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        [
          'LifecycleHook',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseLifecycleHookUpdateInfoSerializer)()])],
          ]),
        ],
        [
          'Oracle',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseOracleUpdateInfoSerializer)()])]]),
        ],
        [
          'AppData',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseAppDataUpdateInfoSerializer)()])]]),
        ],
        [
          'LinkedLifecycleHook',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseLinkedLifecycleHookUpdateInfoSerializer)()])],
          ]),
        ],
        [
          'LinkedAppData',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseLinkedAppDataUpdateInfoSerializer)()])],
          ]),
        ],
      ],
      { description: 'BaseExternalPluginAdapterUpdateInfo' }
    );
  }
  ye.getBaseExternalPluginAdapterUpdateInfoSerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  ye.baseExternalPluginAdapterUpdateInfo = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (ye.isBaseExternalPluginAdapterUpdateInfo = n), ye;
}
var he = {},
  $s;
function _g() {
  if ($s) return he;
  ($s = 1),
    Object.defineProperty(he, '__esModule', { value: !0 }),
    (he.isBaseExtraAccount = he.baseExtraAccount = he.getBaseExtraAccountSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        [
          'PreconfiguredProgram',
          (0, e.struct)([
            ['isSigner', (0, e.bool)()],
            ['isWritable', (0, e.bool)()],
          ]),
        ],
        [
          'PreconfiguredCollection',
          (0, e.struct)([
            ['isSigner', (0, e.bool)()],
            ['isWritable', (0, e.bool)()],
          ]),
        ],
        [
          'PreconfiguredOwner',
          (0, e.struct)([
            ['isSigner', (0, e.bool)()],
            ['isWritable', (0, e.bool)()],
          ]),
        ],
        [
          'PreconfiguredRecipient',
          (0, e.struct)([
            ['isSigner', (0, e.bool)()],
            ['isWritable', (0, e.bool)()],
          ]),
        ],
        [
          'PreconfiguredAsset',
          (0, e.struct)([
            ['isSigner', (0, e.bool)()],
            ['isWritable', (0, e.bool)()],
          ]),
        ],
        [
          'CustomPda',
          (0, e.struct)([
            ['seeds', (0, e.array)((0, t.getBaseSeedSerializer)())],
            ['customProgramId', (0, e.option)((0, e.publicKey)())],
            ['isSigner', (0, e.bool)()],
            ['isWritable', (0, e.bool)()],
          ]),
        ],
        [
          'Address',
          (0, e.struct)([
            ['address', (0, e.publicKey)()],
            ['isSigner', (0, e.bool)()],
            ['isWritable', (0, e.bool)()],
          ]),
        ],
      ],
      { description: 'BaseExtraAccount' }
    );
  }
  he.getBaseExtraAccountSerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  he.baseExtraAccount = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (he.isBaseExtraAccount = n), he;
}
var lr = {},
  Ls;
function zg() {
  if (Ls) return lr;
  (Ls = 1),
    Object.defineProperty(lr, '__esModule', { value: !0 }),
    (lr.getBaseLifecycleHookSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['hookedProgram', (0, e.publicKey)()],
        ['extraAccounts', (0, e.option)((0, e.array)((0, t.getBaseExtraAccountSerializer)()))],
        ['dataAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        ['schema', (0, t.getExternalPluginAdapterSchemaSerializer)()],
      ],
      { description: 'BaseLifecycleHook' }
    );
  }
  return (lr.getBaseLifecycleHookSerializer = r), lr;
}
var ur = {},
  Ks;
function Eg() {
  if (Ks) return ur;
  (Ks = 1),
    Object.defineProperty(ur, '__esModule', { value: !0 }),
    (ur.getBaseLifecycleHookInitInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['hookedProgram', (0, e.publicKey)()],
        ['initPluginAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        [
          'lifecycleChecks',
          (0, e.array)(
            (0, e.tuple)([
              (0, t.getHookableLifecycleEventSerializer)(),
              (0, t.getExternalCheckResultSerializer)(),
            ])
          ),
        ],
        ['extraAccounts', (0, e.option)((0, e.array)((0, t.getBaseExtraAccountSerializer)()))],
        ['dataAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        ['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())],
      ],
      { description: 'BaseLifecycleHookInitInfo' }
    );
  }
  return (ur.getBaseLifecycleHookInitInfoSerializer = r), ur;
}
var cr = {},
  Ws;
function wg() {
  if (Ws) return cr;
  (Ws = 1),
    Object.defineProperty(cr, '__esModule', { value: !0 }),
    (cr.getBaseLifecycleHookUpdateInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        [
          'lifecycleChecks',
          (0, e.option)(
            (0, e.array)(
              (0, e.tuple)([
                (0, t.getHookableLifecycleEventSerializer)(),
                (0, t.getExternalCheckResultSerializer)(),
              ])
            )
          ),
        ],
        ['extraAccounts', (0, e.option)((0, e.array)((0, t.getBaseExtraAccountSerializer)()))],
        ['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())],
      ],
      { description: 'BaseLifecycleHookUpdateInfo' }
    );
  }
  return (cr.getBaseLifecycleHookUpdateInfoSerializer = r), cr;
}
var dr = {},
  Hs;
function xg() {
  if (Hs) return dr;
  (Hs = 1),
    Object.defineProperty(dr, '__esModule', { value: !0 }),
    (dr.getBaseLinkedAppDataSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['dataAuthority', (0, t.getBasePluginAuthoritySerializer)()],
        ['schema', (0, t.getExternalPluginAdapterSchemaSerializer)()],
      ],
      { description: 'BaseLinkedAppData' }
    );
  }
  return (dr.getBaseLinkedAppDataSerializer = r), dr;
}
var fr = {},
  Ns;
function Bg() {
  if (Ns) return fr;
  (Ns = 1),
    Object.defineProperty(fr, '__esModule', { value: !0 }),
    (fr.getBaseLinkedAppDataInitInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['dataAuthority', (0, t.getBasePluginAuthoritySerializer)()],
        ['initPluginAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        ['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())],
      ],
      { description: 'BaseLinkedAppDataInitInfo' }
    );
  }
  return (fr.getBaseLinkedAppDataInitInfoSerializer = r), fr;
}
var gr = {},
  Fs;
function Cg() {
  if (Fs) return gr;
  (Fs = 1),
    Object.defineProperty(gr, '__esModule', { value: !0 }),
    (gr.getBaseLinkedAppDataUpdateInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())]],
      { description: 'BaseLinkedAppDataUpdateInfo' }
    );
  }
  return (gr.getBaseLinkedAppDataUpdateInfoSerializer = r), gr;
}
var me = {},
  js;
function Ig() {
  if (js) return me;
  (js = 1),
    Object.defineProperty(me, '__esModule', { value: !0 }),
    (me.isBaseLinkedDataKey = me.baseLinkedDataKey = me.getBaseLinkedDataKeySerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        ['LinkedLifecycleHook', (0, e.struct)([['fields', (0, e.tuple)([(0, e.publicKey)()])]])],
        [
          'LinkedAppData',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBasePluginAuthoritySerializer)()])]]),
        ],
      ],
      { description: 'BaseLinkedDataKey' }
    );
  }
  me.getBaseLinkedDataKeySerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  me.baseLinkedDataKey = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (me.isBaseLinkedDataKey = n), me;
}
var pr = {},
  qs;
function kg() {
  if (qs) return pr;
  (qs = 1),
    Object.defineProperty(pr, '__esModule', { value: !0 }),
    (pr.getBaseLinkedLifecycleHookSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['hookedProgram', (0, e.publicKey)()],
        ['extraAccounts', (0, e.option)((0, e.array)((0, t.getBaseExtraAccountSerializer)()))],
        ['dataAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        ['schema', (0, t.getExternalPluginAdapterSchemaSerializer)()],
      ],
      { description: 'BaseLinkedLifecycleHook' }
    );
  }
  return (pr.getBaseLinkedLifecycleHookSerializer = r), pr;
}
var yr = {},
  Zs;
function Og() {
  if (Zs) return yr;
  (Zs = 1),
    Object.defineProperty(yr, '__esModule', { value: !0 }),
    (yr.getBaseLinkedLifecycleHookInitInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['hookedProgram', (0, e.publicKey)()],
        ['initPluginAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        [
          'lifecycleChecks',
          (0, e.array)(
            (0, e.tuple)([
              (0, t.getHookableLifecycleEventSerializer)(),
              (0, t.getExternalCheckResultSerializer)(),
            ])
          ),
        ],
        ['extraAccounts', (0, e.option)((0, e.array)((0, t.getBaseExtraAccountSerializer)()))],
        ['dataAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        ['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())],
      ],
      { description: 'BaseLinkedLifecycleHookInitInfo' }
    );
  }
  return (yr.getBaseLinkedLifecycleHookInitInfoSerializer = r), yr;
}
var hr = {},
  Xs;
function Dg() {
  if (Xs) return hr;
  (Xs = 1),
    Object.defineProperty(hr, '__esModule', { value: !0 }),
    (hr.getBaseLinkedLifecycleHookUpdateInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        [
          'lifecycleChecks',
          (0, e.option)(
            (0, e.array)(
              (0, e.tuple)([
                (0, t.getHookableLifecycleEventSerializer)(),
                (0, t.getExternalCheckResultSerializer)(),
              ])
            )
          ),
        ],
        ['extraAccounts', (0, e.option)((0, e.array)((0, t.getBaseExtraAccountSerializer)()))],
        ['schema', (0, e.option)((0, t.getExternalPluginAdapterSchemaSerializer)())],
      ],
      { description: 'BaseLinkedLifecycleHookUpdateInfo' }
    );
  }
  return (hr.getBaseLinkedLifecycleHookUpdateInfoSerializer = r), hr;
}
var Bi = {};
Object.defineProperty(Bi, '__esModule', { value: !0 });
Bi.getBaseMasterEditionSerializer = void 0;
const Fe = y;
function Vg() {
  return (0, Fe.struct)(
    [
      ['maxSupply', (0, Fe.option)((0, Fe.u32)())],
      ['name', (0, Fe.option)((0, Fe.string)())],
      ['uri', (0, Fe.option)((0, Fe.string)())],
    ],
    { description: 'BaseMasterEdition' }
  );
}
Bi.getBaseMasterEditionSerializer = Vg;
var mr = {},
  Gs;
function Tg() {
  if (Gs) return mr;
  (Gs = 1),
    Object.defineProperty(mr, '__esModule', { value: !0 }),
    (mr.getBaseOracleSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['baseAddress', (0, e.publicKey)()],
        ['baseAddressConfig', (0, e.option)((0, t.getBaseExtraAccountSerializer)())],
        ['resultsOffset', (0, t.getBaseValidationResultsOffsetSerializer)()],
      ],
      { description: 'BaseOracle' }
    );
  }
  return (mr.getBaseOracleSerializer = r), mr;
}
var Ar = {},
  Ys;
function Rg() {
  if (Ys) return Ar;
  (Ys = 1),
    Object.defineProperty(Ar, '__esModule', { value: !0 }),
    (Ar.getBaseOracleInitInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['baseAddress', (0, e.publicKey)()],
        ['initPluginAuthority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
        [
          'lifecycleChecks',
          (0, e.array)(
            (0, e.tuple)([
              (0, t.getHookableLifecycleEventSerializer)(),
              (0, t.getExternalCheckResultSerializer)(),
            ])
          ),
        ],
        ['baseAddressConfig', (0, e.option)((0, t.getBaseExtraAccountSerializer)())],
        ['resultsOffset', (0, e.option)((0, t.getBaseValidationResultsOffsetSerializer)())],
      ],
      { description: 'BaseOracleInitInfo' }
    );
  }
  return (Ar.getBaseOracleInitInfoSerializer = r), Ar;
}
var vr = {},
  Js;
function Mg() {
  if (Js) return vr;
  (Js = 1),
    Object.defineProperty(vr, '__esModule', { value: !0 }),
    (vr.getBaseOracleUpdateInfoSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        [
          'lifecycleChecks',
          (0, e.option)(
            (0, e.array)(
              (0, e.tuple)([
                (0, t.getHookableLifecycleEventSerializer)(),
                (0, t.getExternalCheckResultSerializer)(),
              ])
            )
          ),
        ],
        ['baseAddressConfig', (0, e.option)((0, t.getBaseExtraAccountSerializer)())],
        ['resultsOffset', (0, e.option)((0, t.getBaseValidationResultsOffsetSerializer)())],
      ],
      { description: 'BaseOracleUpdateInfo' }
    );
  }
  return (vr.getBaseOracleUpdateInfoSerializer = r), vr;
}
var Te = {};
Object.defineProperty(Te, '__esModule', { value: !0 });
Te.isBasePluginAuthority = Te.basePluginAuthority = Te.getBasePluginAuthoritySerializer = void 0;
const it = y;
function Ug() {
  return (0, it.dataEnum)(
    [
      ['None', (0, it.unit)()],
      ['Owner', (0, it.unit)()],
      ['UpdateAuthority', (0, it.unit)()],
      ['Address', (0, it.struct)([['address', (0, it.publicKey)()]])],
    ],
    { description: 'BasePluginAuthority' }
  );
}
Te.getBasePluginAuthoritySerializer = Ug;
function $g(e, t) {
  return Array.isArray(t) ? { __kind: e, fields: t } : { __kind: e, ...(t ?? {}) };
}
Te.basePluginAuthority = $g;
function Lg(e, t) {
  return t.__kind === e;
}
Te.isBasePluginAuthority = Lg;
var Pr = {},
  Qs;
function Kg() {
  if (Qs) return Pr;
  (Qs = 1),
    Object.defineProperty(Pr, '__esModule', { value: !0 }),
    (Pr.getBaseRoyaltiesSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['basisPoints', (0, e.u16)()],
        ['creators', (0, e.array)((0, t.getCreatorSerializer)())],
        ['ruleSet', (0, t.getBaseRuleSetSerializer)()],
      ],
      { description: 'BaseRoyalties' }
    );
  }
  return (Pr.getBaseRoyaltiesSerializer = r), Pr;
}
var Re = {};
Object.defineProperty(Re, '__esModule', { value: !0 });
Re.isBaseRuleSet = Re.baseRuleSet = Re.getBaseRuleSetSerializer = void 0;
const ce = y;
function Wg() {
  return (0, ce.dataEnum)(
    [
      ['None', (0, ce.unit)()],
      [
        'ProgramAllowList',
        (0, ce.struct)([['fields', (0, ce.tuple)([(0, ce.array)((0, ce.publicKey)())])]]),
      ],
      [
        'ProgramDenyList',
        (0, ce.struct)([['fields', (0, ce.tuple)([(0, ce.array)((0, ce.publicKey)())])]]),
      ],
    ],
    { description: 'BaseRuleSet' }
  );
}
Re.getBaseRuleSetSerializer = Wg;
function Hg(e, t) {
  return Array.isArray(t) ? { __kind: e, fields: t } : { __kind: e, ...(t ?? {}) };
}
Re.baseRuleSet = Hg;
function Ng(e, t) {
  return t.__kind === e;
}
Re.isBaseRuleSet = Ng;
var Me = {};
Object.defineProperty(Me, '__esModule', { value: !0 });
Me.isBaseSeed = Me.baseSeed = Me.getBaseSeedSerializer = void 0;
const te = y;
function Fg() {
  return (0, te.dataEnum)(
    [
      ['Collection', (0, te.unit)()],
      ['Owner', (0, te.unit)()],
      ['Recipient', (0, te.unit)()],
      ['Asset', (0, te.unit)()],
      ['Address', (0, te.struct)([['fields', (0, te.tuple)([(0, te.publicKey)()])]])],
      [
        'Bytes',
        (0, te.struct)([['fields', (0, te.tuple)([(0, te.bytes)({ size: (0, te.u32)() })])]]),
      ],
    ],
    { description: 'BaseSeed' }
  );
}
Me.getBaseSeedSerializer = Fg;
function jg(e, t) {
  return Array.isArray(t) ? { __kind: e, fields: t } : { __kind: e, ...(t ?? {}) };
}
Me.baseSeed = jg;
function qg(e, t) {
  return t.__kind === e;
}
Me.isBaseSeed = qg;
var Ue = {};
Object.defineProperty(Ue, '__esModule', { value: !0 });
Ue.isBaseUpdateAuthority = Ue.baseUpdateAuthority = Ue.getBaseUpdateAuthoritySerializer = void 0;
const Ie = y;
function Zg() {
  return (0, Ie.dataEnum)(
    [
      ['None', (0, Ie.unit)()],
      ['Address', (0, Ie.struct)([['fields', (0, Ie.tuple)([(0, Ie.publicKey)()])]])],
      ['Collection', (0, Ie.struct)([['fields', (0, Ie.tuple)([(0, Ie.publicKey)()])]])],
    ],
    { description: 'BaseUpdateAuthority' }
  );
}
Ue.getBaseUpdateAuthoritySerializer = Zg;
function Xg(e, t) {
  return Array.isArray(t) ? { __kind: e, fields: t } : { __kind: e, ...(t ?? {}) };
}
Ue.baseUpdateAuthority = Xg;
function Gg(e, t) {
  return t.__kind === e;
}
Ue.isBaseUpdateAuthority = Gg;
var $e = {};
Object.defineProperty($e, '__esModule', { value: !0 });
$e.isBaseValidationResultsOffset =
  $e.baseValidationResultsOffset =
  $e.getBaseValidationResultsOffsetSerializer =
    void 0;
const nt = y;
function Yg() {
  return (0, nt.dataEnum)(
    [
      ['NoOffset', (0, nt.unit)()],
      ['Anchor', (0, nt.unit)()],
      ['Custom', (0, nt.struct)([['fields', (0, nt.tuple)([(0, nt.u64)()])]])],
    ],
    { description: 'BaseValidationResultsOffset' }
  );
}
$e.getBaseValidationResultsOffsetSerializer = Yg;
function Jg(e, t) {
  return Array.isArray(t) ? { __kind: e, fields: t } : { __kind: e, ...(t ?? {}) };
}
$e.baseValidationResultsOffset = Jg;
function Qg(e, t) {
  return t.__kind === e;
}
$e.isBaseValidationResultsOffset = Qg;
var Ci = {};
Object.defineProperty(Ci, '__esModule', { value: !0 });
Ci.getBurnDelegateSerializer = void 0;
const ep = y;
function tp() {
  return (0, ep.struct)([], { description: 'BurnDelegate' });
}
Ci.getBurnDelegateSerializer = tp;
var br = {},
  eo;
function rp() {
  if (eo) return br;
  (eo = 1),
    Object.defineProperty(br, '__esModule', { value: !0 }),
    (br.getCompressionProofSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['owner', (0, e.publicKey)()],
        ['updateAuthority', (0, t.getBaseUpdateAuthoritySerializer)()],
        ['name', (0, e.string)()],
        ['uri', (0, e.string)()],
        ['seq', (0, e.u64)()],
        ['plugins', (0, e.array)((0, t.getHashablePluginSchemaSerializer)())],
      ],
      { description: 'CompressionProof' }
    );
  }
  return (br.getCompressionProofSerializer = r), br;
}
var Ii = {};
Object.defineProperty(Ii, '__esModule', { value: !0 });
Ii.getCreatorSerializer = void 0;
const bn = y;
function ip() {
  return (0, bn.struct)(
    [
      ['address', (0, bn.publicKey)()],
      ['percentage', (0, bn.u8)()],
    ],
    { description: 'Creator' }
  );
}
Ii.getCreatorSerializer = ip;
var ql = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getDataStateSerializer = e.DataState = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.AccountState = 0)] = 'AccountState'), (n[(n.LedgerState = 1)] = 'LedgerState');
  })((r = e.DataState || (e.DataState = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'DataState' });
  }
  e.getDataStateSerializer = i;
})(ql);
var ki = {};
Object.defineProperty(ki, '__esModule', { value: !0 });
ki.getEditionSerializer = void 0;
const to = y;
function np() {
  return (0, to.struct)([['number', (0, to.u32)()]], { description: 'Edition' });
}
ki.getEditionSerializer = np;
var Oi = {};
Object.defineProperty(Oi, '__esModule', { value: !0 });
Oi.getExternalCheckResultSerializer = void 0;
const ro = y;
function ap() {
  return (0, ro.struct)([['flags', (0, ro.u32)()]], { description: 'ExternalCheckResult' });
}
Oi.getExternalCheckResultSerializer = ap;
var Ae = {},
  io;
function sp() {
  if (io) return Ae;
  (io = 1),
    Object.defineProperty(Ae, '__esModule', { value: !0 }),
    (Ae.isExternalPluginAdapter =
      Ae.externalPluginAdapter =
      Ae.getExternalPluginAdapterSerializer =
        void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        [
          'LifecycleHook',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseLifecycleHookSerializer)()])]]),
        ],
        ['Oracle', (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseOracleSerializer)()])]])],
        ['AppData', (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseAppDataSerializer)()])]])],
        [
          'LinkedLifecycleHook',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getBaseLinkedLifecycleHookSerializer)()])],
          ]),
        ],
        [
          'LinkedAppData',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseLinkedAppDataSerializer)()])]]),
        ],
        [
          'DataSection',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseDataSectionSerializer)()])]]),
        ],
      ],
      { description: 'ExternalPluginAdapter' }
    );
  }
  Ae.getExternalPluginAdapterSerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  Ae.externalPluginAdapter = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (Ae.isExternalPluginAdapter = n), Ae;
}
var Zl = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getExternalPluginAdapterSchemaSerializer = e.ExternalPluginAdapterSchema = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.Binary = 0)] = 'Binary'), (n[(n.Json = 1)] = 'Json'), (n[(n.MsgPack = 2)] = 'MsgPack');
  })((r = e.ExternalPluginAdapterSchema || (e.ExternalPluginAdapterSchema = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'ExternalPluginAdapterSchema' });
  }
  e.getExternalPluginAdapterSchemaSerializer = i;
})(Zl);
var Xl = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getExternalPluginAdapterTypeSerializer = e.ExternalPluginAdapterType = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.LifecycleHook = 0)] = 'LifecycleHook'),
      (n[(n.Oracle = 1)] = 'Oracle'),
      (n[(n.AppData = 2)] = 'AppData'),
      (n[(n.LinkedLifecycleHook = 3)] = 'LinkedLifecycleHook'),
      (n[(n.LinkedAppData = 4)] = 'LinkedAppData'),
      (n[(n.DataSection = 5)] = 'DataSection');
  })((r = e.ExternalPluginAdapterType || (e.ExternalPluginAdapterType = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'ExternalPluginAdapterType' });
  }
  e.getExternalPluginAdapterTypeSerializer = i;
})(Xl);
var Sr = {},
  no;
function op() {
  if (no) return Sr;
  (no = 1),
    Object.defineProperty(Sr, '__esModule', { value: !0 }),
    (Sr.getExternalRegistryRecordSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['pluginType', (0, t.getExternalPluginAdapterTypeSerializer)()],
        ['authority', (0, t.getBasePluginAuthoritySerializer)()],
        [
          'lifecycleChecks',
          (0, e.option)(
            (0, e.array)(
              (0, e.tuple)([
                (0, t.getHookableLifecycleEventSerializer)(),
                (0, t.getExternalCheckResultSerializer)(),
              ])
            )
          ),
        ],
        ['offset', (0, e.u64)()],
        ['dataOffset', (0, e.option)((0, e.u64)())],
        ['dataLen', (0, e.option)((0, e.u64)())],
      ],
      { description: 'ExternalRegistryRecord' }
    );
  }
  return (Sr.getExternalRegistryRecordSerializer = r), Sr;
}
var Gl = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getExternalValidationResultSerializer = e.ExternalValidationResult = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.Approved = 0)] = 'Approved'),
      (n[(n.Rejected = 1)] = 'Rejected'),
      (n[(n.Pass = 2)] = 'Pass');
  })((r = e.ExternalValidationResult || (e.ExternalValidationResult = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'ExternalValidationResult' });
  }
  e.getExternalValidationResultSerializer = i;
})(Gl);
var Di = {};
Object.defineProperty(Di, '__esModule', { value: !0 });
Di.getFreezeDelegateSerializer = void 0;
const ao = y;
function lp() {
  return (0, ao.struct)([['frozen', (0, ao.bool)()]], { description: 'FreezeDelegate' });
}
Di.getFreezeDelegateSerializer = lp;
var _r = {},
  so;
function up() {
  if (so) return _r;
  (so = 1),
    Object.defineProperty(_r, '__esModule', { value: !0 }),
    (_r.getHashablePluginSchemaSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['index', (0, e.u64)()],
        ['authority', (0, t.getBasePluginAuthoritySerializer)()],
        ['plugin', (0, t.getPluginSerializer)()],
      ],
      { description: 'HashablePluginSchema' }
    );
  }
  return (_r.getHashablePluginSchemaSerializer = r), _r;
}
var Vi = {};
Object.defineProperty(Vi, '__esModule', { value: !0 });
Vi.getHashedAssetSchemaSerializer = void 0;
const Gr = y;
function cp() {
  return (0, Gr.struct)(
    [
      ['assetHash', (0, Gr.bytes)({ size: 32 })],
      ['pluginHashes', (0, Gr.array)((0, Gr.bytes)({ size: 32 }))],
    ],
    { description: 'HashedAssetSchema' }
  );
}
Vi.getHashedAssetSchemaSerializer = cp;
var Yl = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getHookableLifecycleEventSerializer = e.HookableLifecycleEvent = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.Create = 0)] = 'Create'),
      (n[(n.Transfer = 1)] = 'Transfer'),
      (n[(n.Burn = 2)] = 'Burn'),
      (n[(n.Update = 3)] = 'Update');
  })((r = e.HookableLifecycleEvent || (e.HookableLifecycleEvent = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'HookableLifecycleEvent' });
  }
  e.getHookableLifecycleEventSerializer = i;
})(Yl);
var Ti = {};
Object.defineProperty(Ti, '__esModule', { value: !0 });
Ti.getImmutableMetadataSerializer = void 0;
const dp = y;
function fp() {
  return (0, dp.struct)([], { description: 'ImmutableMetadata' });
}
Ti.getImmutableMetadataSerializer = fp;
var Jl = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.getKeySerializer = e.Key = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.Uninitialized = 0)] = 'Uninitialized'),
      (n[(n.AssetV1 = 1)] = 'AssetV1'),
      (n[(n.HashedAssetV1 = 2)] = 'HashedAssetV1'),
      (n[(n.PluginHeaderV1 = 3)] = 'PluginHeaderV1'),
      (n[(n.PluginRegistryV1 = 4)] = 'PluginRegistryV1'),
      (n[(n.CollectionV1 = 5)] = 'CollectionV1');
  })((r = e.Key || (e.Key = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'Key' });
  }
  e.getKeySerializer = i;
})(Jl);
var ve = {},
  oo;
function gp() {
  if (oo) return ve;
  (oo = 1),
    Object.defineProperty(ve, '__esModule', { value: !0 }),
    (ve.isOracleValidation = ve.oracleValidation = ve.getOracleValidationSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        ['Uninitialized', (0, e.unit)()],
        [
          'V1',
          (0, e.struct)([
            ['create', (0, t.getExternalValidationResultSerializer)()],
            ['transfer', (0, t.getExternalValidationResultSerializer)()],
            ['burn', (0, t.getExternalValidationResultSerializer)()],
            ['update', (0, t.getExternalValidationResultSerializer)()],
          ]),
        ],
      ],
      { description: 'OracleValidation' }
    );
  }
  ve.getOracleValidationSerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  ve.oracleValidation = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (ve.isOracleValidation = n), ve;
}
var Ri = {};
Object.defineProperty(Ri, '__esModule', { value: !0 });
Ri.getPermanentBurnDelegateSerializer = void 0;
const pp = y;
function yp() {
  return (0, pp.struct)([], { description: 'PermanentBurnDelegate' });
}
Ri.getPermanentBurnDelegateSerializer = yp;
var Mi = {};
Object.defineProperty(Mi, '__esModule', { value: !0 });
Mi.getPermanentFreezeDelegateSerializer = void 0;
const lo = y;
function hp() {
  return (0, lo.struct)([['frozen', (0, lo.bool)()]], { description: 'PermanentFreezeDelegate' });
}
Mi.getPermanentFreezeDelegateSerializer = hp;
var Ui = {};
Object.defineProperty(Ui, '__esModule', { value: !0 });
Ui.getPermanentTransferDelegateSerializer = void 0;
const mp = y;
function Ap() {
  return (0, mp.struct)([], { description: 'PermanentTransferDelegate' });
}
Ui.getPermanentTransferDelegateSerializer = Ap;
var Pe = {},
  uo;
function vp() {
  if (uo) return Pe;
  (uo = 1),
    Object.defineProperty(Pe, '__esModule', { value: !0 }),
    (Pe.isPlugin = Pe.plugin = Pe.getPluginSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.dataEnum)(
      [
        [
          'Royalties',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseRoyaltiesSerializer)()])]]),
        ],
        [
          'FreezeDelegate',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getFreezeDelegateSerializer)()])]]),
        ],
        [
          'BurnDelegate',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBurnDelegateSerializer)()])]]),
        ],
        [
          'TransferDelegate',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getTransferDelegateSerializer)()])]]),
        ],
        [
          'UpdateDelegate',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getUpdateDelegateSerializer)()])]]),
        ],
        [
          'PermanentFreezeDelegate',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getPermanentFreezeDelegateSerializer)()])],
          ]),
        ],
        [
          'Attributes',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getAttributesSerializer)()])]]),
        ],
        [
          'PermanentTransferDelegate',
          (0, e.struct)([
            ['fields', (0, e.tuple)([(0, t.getPermanentTransferDelegateSerializer)()])],
          ]),
        ],
        [
          'PermanentBurnDelegate',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getPermanentBurnDelegateSerializer)()])]]),
        ],
        ['Edition', (0, e.struct)([['fields', (0, e.tuple)([(0, t.getEditionSerializer)()])]])],
        [
          'MasterEdition',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getBaseMasterEditionSerializer)()])]]),
        ],
        [
          'AddBlocker',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getAddBlockerSerializer)()])]]),
        ],
        [
          'ImmutableMetadata',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getImmutableMetadataSerializer)()])]]),
        ],
        [
          'VerifiedCreators',
          (0, e.struct)([['fields', (0, e.tuple)([(0, t.getVerifiedCreatorsSerializer)()])]]),
        ],
        ['Autograph', (0, e.struct)([['fields', (0, e.tuple)([(0, t.getAutographSerializer)()])]])],
      ],
      { description: 'Plugin' }
    );
  }
  Pe.getPluginSerializer = r;
  function i(a, s) {
    return Array.isArray(s) ? { __kind: a, fields: s } : { __kind: a, ...(s ?? {}) };
  }
  Pe.plugin = i;
  function n(a, s) {
    return s.__kind === a;
  }
  return (Pe.isPlugin = n), Pe;
}
var zr = {},
  co;
function Pp() {
  if (co) return zr;
  (co = 1),
    Object.defineProperty(zr, '__esModule', { value: !0 }),
    (zr.getPluginAuthorityPairSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['plugin', (0, t.getPluginSerializer)()],
        ['authority', (0, e.option)((0, t.getBasePluginAuthoritySerializer)())],
      ],
      { description: 'PluginAuthorityPair' }
    );
  }
  return (zr.getPluginAuthorityPairSerializer = r), zr;
}
var Ql = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getPluginTypeSerializer = e.PluginType = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.Royalties = 0)] = 'Royalties'),
      (n[(n.FreezeDelegate = 1)] = 'FreezeDelegate'),
      (n[(n.BurnDelegate = 2)] = 'BurnDelegate'),
      (n[(n.TransferDelegate = 3)] = 'TransferDelegate'),
      (n[(n.UpdateDelegate = 4)] = 'UpdateDelegate'),
      (n[(n.PermanentFreezeDelegate = 5)] = 'PermanentFreezeDelegate'),
      (n[(n.Attributes = 6)] = 'Attributes'),
      (n[(n.PermanentTransferDelegate = 7)] = 'PermanentTransferDelegate'),
      (n[(n.PermanentBurnDelegate = 8)] = 'PermanentBurnDelegate'),
      (n[(n.Edition = 9)] = 'Edition'),
      (n[(n.MasterEdition = 10)] = 'MasterEdition'),
      (n[(n.AddBlocker = 11)] = 'AddBlocker'),
      (n[(n.ImmutableMetadata = 12)] = 'ImmutableMetadata'),
      (n[(n.VerifiedCreators = 13)] = 'VerifiedCreators'),
      (n[(n.Autograph = 14)] = 'Autograph');
  })((r = e.PluginType || (e.PluginType = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'PluginType' });
  }
  e.getPluginTypeSerializer = i;
})(Ql);
var Er = {},
  fo;
function bp() {
  if (fo) return Er;
  (fo = 1),
    Object.defineProperty(Er, '__esModule', { value: !0 }),
    (Er.getRegistryRecordSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [
        ['pluginType', (0, t.getPluginTypeSerializer)()],
        ['authority', (0, t.getBasePluginAuthoritySerializer)()],
        ['offset', (0, e.u64)()],
      ],
      { description: 'RegistryRecord' }
    );
  }
  return (Er.getRegistryRecordSerializer = r), Er;
}
var $i = {};
Object.defineProperty($i, '__esModule', { value: !0 });
$i.getTransferDelegateSerializer = void 0;
const Sp = y;
function _p() {
  return (0, Sp.struct)([], { description: 'TransferDelegate' });
}
$i.getTransferDelegateSerializer = _p;
var Li = {};
Object.defineProperty(Li, '__esModule', { value: !0 });
Li.getUpdateDelegateSerializer = void 0;
const Sn = y;
function zp() {
  return (0, Sn.struct)([['additionalDelegates', (0, Sn.array)((0, Sn.publicKey)())]], {
    description: 'UpdateDelegate',
  });
}
Li.getUpdateDelegateSerializer = zp;
var eu = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getValidationResultSerializer = e.ValidationResult = void 0);
  const t = y;
  var r;
  (function (n) {
    (n[(n.Approved = 0)] = 'Approved'),
      (n[(n.Rejected = 1)] = 'Rejected'),
      (n[(n.Pass = 2)] = 'Pass'),
      (n[(n.ForceApproved = 3)] = 'ForceApproved');
  })((r = e.ValidationResult || (e.ValidationResult = {})));
  function i() {
    return (0, t.scalarEnum)(r, { description: 'ValidationResult' });
  }
  e.getValidationResultSerializer = i;
})(eu);
var wr = {},
  go;
function Ep() {
  if (go) return wr;
  (go = 1),
    Object.defineProperty(wr, '__esModule', { value: !0 }),
    (wr.getVerifiedCreatorsSerializer = void 0);
  const e = y,
    t = S();
  function r() {
    return (0, e.struct)(
      [['signatures', (0, e.array)((0, t.getVerifiedCreatorsSignatureSerializer)())]],
      { description: 'VerifiedCreators' }
    );
  }
  return (wr.getVerifiedCreatorsSerializer = r), wr;
}
var Ki = {};
Object.defineProperty(Ki, '__esModule', { value: !0 });
Ki.getVerifiedCreatorsSignatureSerializer = void 0;
const _n = y;
function wp() {
  return (0, _n.struct)(
    [
      ['address', (0, _n.publicKey)()],
      ['verified', (0, _n.bool)()],
    ],
    { description: 'VerifiedCreatorsSignature' }
  );
}
Ki.getVerifiedCreatorsSignatureSerializer = wp;
var po;
function S() {
  return (
    po ||
      ((po = 1),
      (function (e) {
        var t =
            (C && C.__createBinding) ||
            (Object.create
              ? function (i, n, a, s) {
                  s === void 0 && (s = a);
                  var o = Object.getOwnPropertyDescriptor(n, a);
                  (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return n[a];
                      },
                    }),
                    Object.defineProperty(i, s, o);
                }
              : function (i, n, a, s) {
                  s === void 0 && (s = a), (i[s] = n[a]);
                }),
          r =
            (C && C.__exportStar) ||
            function (i, n) {
              for (var a in i)
                a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
            };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          r(zi, e),
          r(Ei, e),
          r(cg(), e),
          r(dg(), e),
          r(wi, e),
          r(gg(), e),
          r(pg(), e),
          r(yg(), e),
          r(hg(), e),
          r(mg(), e),
          r(xi, e),
          r(Pg(), e),
          r(bg(), e),
          r(Sg(), e),
          r(_g(), e),
          r(zg(), e),
          r(Eg(), e),
          r(wg(), e),
          r(xg(), e),
          r(Bg(), e),
          r(Cg(), e),
          r(Ig(), e),
          r(kg(), e),
          r(Og(), e),
          r(Dg(), e),
          r(Bi, e),
          r(Tg(), e),
          r(Rg(), e),
          r(Mg(), e),
          r(Te, e),
          r(Kg(), e),
          r(Re, e),
          r(Me, e),
          r(Ue, e),
          r($e, e),
          r(Ci, e),
          r(rp(), e),
          r(Ii, e),
          r(ql, e),
          r(ki, e),
          r(Oi, e),
          r(sp(), e),
          r(Zl, e),
          r(Xl, e),
          r(op(), e),
          r(Gl, e),
          r(Di, e),
          r(up(), e),
          r(Vi, e),
          r(Yl, e),
          r(Ti, e),
          r(Jl, e),
          r(gp(), e),
          r(Ri, e),
          r(Mi, e),
          r(Ui, e),
          r(vp(), e),
          r(Pp(), e),
          r(Ql, e),
          r(bp(), e),
          r($i, e),
          r(Li, e),
          r(eu, e),
          r(Ep(), e),
          r(Ki, e);
      })(An)),
    An
  );
}
Object.defineProperty(_i, '__esModule', { value: !0 });
_i.getAssetV1AccountDataSerializer = void 0;
const at = y,
  yo = S();
function xp() {
  return (0, at.struct)(
    [
      ['key', (0, yo.getKeySerializer)()],
      ['owner', (0, at.publicKey)()],
      ['updateAuthority', (0, yo.getBaseUpdateAuthoritySerializer)()],
      ['name', (0, at.string)()],
      ['uri', (0, at.string)()],
      ['seq', (0, at.option)((0, at.u64)())],
    ],
    { description: 'AssetV1AccountData' }
  );
}
_i.getAssetV1AccountDataSerializer = xp;
var zn = {},
  we = {};
Object.defineProperty(we, '__esModule', { value: !0 });
we.royaltiesFromBase = we.royaltiesToBase = we.ruleSetToBase = void 0;
function tu(e) {
  if (e.__kind) return e;
  const r = e;
  return r.type === 'ProgramAllowList' || r.type === 'ProgramDenyList'
    ? { __kind: r.type, fields: [r.addresses] }
    : { __kind: r.type };
}
we.ruleSetToBase = tu;
function Bp(e) {
  return { ...e, ruleSet: tu(e.ruleSet) };
}
we.royaltiesToBase = Bp;
function Cp(e) {
  let t;
  return (
    e.ruleSet.__kind === 'ProgramAllowList'
      ? (t = { ...e.ruleSet, type: 'ProgramAllowList', addresses: e.ruleSet.fields[0] })
      : e.ruleSet.__kind === 'ProgramDenyList'
        ? (t = { ...e.ruleSet, type: 'ProgramDenyList', addresses: e.ruleSet.fields[0] })
        : (t = { ...e.ruleSet, type: e.ruleSet.__kind }),
    { ...e, ruleSet: t }
  );
}
we.royaltiesFromBase = Cp;
var L = {};
function Ip(e) {
  for (var t = e.length, r = 0, i = 0; i < t; ) {
    var n = e.charCodeAt(i++);
    if (n & 4294967168)
      if (!(n & 4294965248)) r += 2;
      else {
        if (n >= 55296 && n <= 56319 && i < t) {
          var a = e.charCodeAt(i);
          (a & 64512) === 56320 && (++i, (n = ((n & 1023) << 10) + (a & 1023) + 65536));
        }
        n & 4294901760 ? (r += 4) : (r += 3);
      }
    else {
      r++;
      continue;
    }
  }
  return r;
}
function kp(e, t, r) {
  for (var i = e.length, n = r, a = 0; a < i; ) {
    var s = e.charCodeAt(a++);
    if (s & 4294967168)
      if (!(s & 4294965248)) t[n++] = ((s >> 6) & 31) | 192;
      else {
        if (s >= 55296 && s <= 56319 && a < i) {
          var o = e.charCodeAt(a);
          (o & 64512) === 56320 && (++a, (s = ((s & 1023) << 10) + (o & 1023) + 65536));
        }
        s & 4294901760
          ? ((t[n++] = ((s >> 18) & 7) | 240),
            (t[n++] = ((s >> 12) & 63) | 128),
            (t[n++] = ((s >> 6) & 63) | 128))
          : ((t[n++] = ((s >> 12) & 15) | 224), (t[n++] = ((s >> 6) & 63) | 128));
      }
    else {
      t[n++] = s;
      continue;
    }
    t[n++] = (s & 63) | 128;
  }
}
var Op = new TextEncoder(),
  Dp = 50;
function Vp(e, t, r) {
  Op.encodeInto(e, t.subarray(r));
}
function Tp(e, t, r) {
  e.length > Dp ? Vp(e, t, r) : kp(e, t, r);
}
var Rp = 4096;
function ru(e, t, r) {
  for (var i = t, n = i + r, a = [], s = ''; i < n; ) {
    var o = e[i++];
    if (!(o & 128)) a.push(o);
    else if ((o & 224) === 192) {
      var d = e[i++] & 63;
      a.push(((o & 31) << 6) | d);
    } else if ((o & 240) === 224) {
      var d = e[i++] & 63,
        u = e[i++] & 63;
      a.push(((o & 31) << 12) | (d << 6) | u);
    } else if ((o & 248) === 240) {
      var d = e[i++] & 63,
        u = e[i++] & 63,
        l = e[i++] & 63,
        c = ((o & 7) << 18) | (d << 12) | (u << 6) | l;
      c > 65535 && ((c -= 65536), a.push(((c >>> 10) & 1023) | 55296), (c = 56320 | (c & 1023))),
        a.push(c);
    } else a.push(o);
    a.length >= Rp && ((s += String.fromCharCode.apply(String, a)), (a.length = 0));
  }
  return a.length > 0 && (s += String.fromCharCode.apply(String, a)), s;
}
var Mp = new TextDecoder(),
  Up = 200;
function $p(e, t, r) {
  var i = e.subarray(t, t + r);
  return Mp.decode(i);
}
function Lp(e, t, r) {
  return r > Up ? $p(e, t, r) : ru(e, t, r);
}
var kr = (function () {
    function e(t, r) {
      (this.type = t), (this.data = r);
    }
    return e;
  })(),
  Kp = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (i, n) {
              i.__proto__ = n;
            }) ||
          function (i, n) {
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (i[a] = n[a]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != 'function' && r !== null)
        throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
      e(t, r);
      function i() {
        this.constructor = t;
      }
      t.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
    };
  })(),
  le = (function (e) {
    Kp(t, e);
    function t(r) {
      var i = e.call(this, r) || this,
        n = Object.create(t.prototype);
      return (
        Object.setPrototypeOf(i, n),
        Object.defineProperty(i, 'name', { configurable: !0, enumerable: !1, value: t.name }),
        i
      );
    }
    return t;
  })(Error),
  xr = 4294967295;
function Wp(e, t, r) {
  var i = r / 4294967296,
    n = r;
  e.setUint32(t, i), e.setUint32(t + 4, n);
}
function iu(e, t, r) {
  var i = Math.floor(r / 4294967296),
    n = r;
  e.setUint32(t, i), e.setUint32(t + 4, n);
}
function nu(e, t) {
  var r = e.getInt32(t),
    i = e.getUint32(t + 4);
  return r * 4294967296 + i;
}
function Hp(e, t) {
  var r = e.getUint32(t),
    i = e.getUint32(t + 4);
  return r * 4294967296 + i;
}
var au = -1,
  Np = 4294967296 - 1,
  Fp = 17179869184 - 1;
function su(e) {
  var t = e.sec,
    r = e.nsec;
  if (t >= 0 && r >= 0 && t <= Fp)
    if (r === 0 && t <= Np) {
      var i = new Uint8Array(4),
        n = new DataView(i.buffer);
      return n.setUint32(0, t), i;
    } else {
      var a = t / 4294967296,
        s = t & 4294967295,
        i = new Uint8Array(8),
        n = new DataView(i.buffer);
      return n.setUint32(0, (r << 2) | (a & 3)), n.setUint32(4, s), i;
    }
  else {
    var i = new Uint8Array(12),
      n = new DataView(i.buffer);
    return n.setUint32(0, r), iu(n, 4, t), i;
  }
}
function ou(e) {
  var t = e.getTime(),
    r = Math.floor(t / 1e3),
    i = (t - r * 1e3) * 1e6,
    n = Math.floor(i / 1e9);
  return { sec: r + n, nsec: i - n * 1e9 };
}
function lu(e) {
  if (e instanceof Date) {
    var t = ou(e);
    return su(t);
  } else return null;
}
function uu(e) {
  var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
  switch (e.byteLength) {
    case 4: {
      var r = t.getUint32(0),
        i = 0;
      return { sec: r, nsec: i };
    }
    case 8: {
      var n = t.getUint32(0),
        a = t.getUint32(4),
        r = (n & 3) * 4294967296 + a,
        i = n >>> 2;
      return { sec: r, nsec: i };
    }
    case 12: {
      var r = nu(t, 4),
        i = t.getUint32(0);
      return { sec: r, nsec: i };
    }
    default:
      throw new le(
        'Unrecognized data size for timestamp (expected 4, 8, or 12): '.concat(e.length)
      );
  }
}
function cu(e) {
  var t = uu(e);
  return new Date(t.sec * 1e3 + t.nsec / 1e6);
}
var jp = { type: au, encode: lu, decode: cu },
  wa = (function () {
    function e() {
      (this.builtInEncoders = []),
        (this.builtInDecoders = []),
        (this.encoders = []),
        (this.decoders = []),
        this.register(jp);
    }
    return (
      (e.prototype.register = function (t) {
        var r = t.type,
          i = t.encode,
          n = t.decode;
        if (r >= 0) (this.encoders[r] = i), (this.decoders[r] = n);
        else {
          var a = 1 + r;
          (this.builtInEncoders[a] = i), (this.builtInDecoders[a] = n);
        }
      }),
      (e.prototype.tryToEncode = function (t, r) {
        for (var i = 0; i < this.builtInEncoders.length; i++) {
          var n = this.builtInEncoders[i];
          if (n != null) {
            var a = n(t, r);
            if (a != null) {
              var s = -1 - i;
              return new kr(s, a);
            }
          }
        }
        for (var i = 0; i < this.encoders.length; i++) {
          var n = this.encoders[i];
          if (n != null) {
            var a = n(t, r);
            if (a != null) {
              var s = i;
              return new kr(s, a);
            }
          }
        }
        return t instanceof kr ? t : null;
      }),
      (e.prototype.decode = function (t, r, i) {
        var n = r < 0 ? this.builtInDecoders[-1 - r] : this.decoders[r];
        return n ? n(t, r, i) : new kr(r, t);
      }),
      (e.defaultCodec = new e()),
      e
    );
  })();
function pi(e) {
  return e instanceof Uint8Array
    ? e
    : ArrayBuffer.isView(e)
      ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
      : e instanceof ArrayBuffer
        ? new Uint8Array(e)
        : Uint8Array.from(e);
}
function qp(e) {
  if (e instanceof ArrayBuffer) return new DataView(e);
  var t = pi(e);
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
var Zp = 100,
  Xp = 2048,
  du = (function () {
    function e(t) {
      var r, i, n, a, s, o, d, u;
      (this.extensionCodec =
        (r = t == null ? void 0 : t.extensionCodec) !== null && r !== void 0 ? r : wa.defaultCodec),
        (this.context = t == null ? void 0 : t.context),
        (this.useBigInt64 =
          (i = t == null ? void 0 : t.useBigInt64) !== null && i !== void 0 ? i : !1),
        (this.maxDepth = (n = t == null ? void 0 : t.maxDepth) !== null && n !== void 0 ? n : Zp),
        (this.initialBufferSize =
          (a = t == null ? void 0 : t.initialBufferSize) !== null && a !== void 0 ? a : Xp),
        (this.sortKeys = (s = t == null ? void 0 : t.sortKeys) !== null && s !== void 0 ? s : !1),
        (this.forceFloat32 =
          (o = t == null ? void 0 : t.forceFloat32) !== null && o !== void 0 ? o : !1),
        (this.ignoreUndefined =
          (d = t == null ? void 0 : t.ignoreUndefined) !== null && d !== void 0 ? d : !1),
        (this.forceIntegerToFloat =
          (u = t == null ? void 0 : t.forceIntegerToFloat) !== null && u !== void 0 ? u : !1),
        (this.pos = 0),
        (this.view = new DataView(new ArrayBuffer(this.initialBufferSize))),
        (this.bytes = new Uint8Array(this.view.buffer));
    }
    return (
      (e.prototype.reinitializeState = function () {
        this.pos = 0;
      }),
      (e.prototype.encodeSharedRef = function (t) {
        return this.reinitializeState(), this.doEncode(t, 1), this.bytes.subarray(0, this.pos);
      }),
      (e.prototype.encode = function (t) {
        return this.reinitializeState(), this.doEncode(t, 1), this.bytes.slice(0, this.pos);
      }),
      (e.prototype.doEncode = function (t, r) {
        if (r > this.maxDepth) throw new Error('Too deep objects in depth '.concat(r));
        t == null
          ? this.encodeNil()
          : typeof t == 'boolean'
            ? this.encodeBoolean(t)
            : typeof t == 'number'
              ? this.forceIntegerToFloat
                ? this.encodeNumberAsFloat(t)
                : this.encodeNumber(t)
              : typeof t == 'string'
                ? this.encodeString(t)
                : this.useBigInt64 && typeof t == 'bigint'
                  ? this.encodeBigInt64(t)
                  : this.encodeObject(t, r);
      }),
      (e.prototype.ensureBufferSizeToWrite = function (t) {
        var r = this.pos + t;
        this.view.byteLength < r && this.resizeBuffer(r * 2);
      }),
      (e.prototype.resizeBuffer = function (t) {
        var r = new ArrayBuffer(t),
          i = new Uint8Array(r),
          n = new DataView(r);
        i.set(this.bytes), (this.view = n), (this.bytes = i);
      }),
      (e.prototype.encodeNil = function () {
        this.writeU8(192);
      }),
      (e.prototype.encodeBoolean = function (t) {
        t === !1 ? this.writeU8(194) : this.writeU8(195);
      }),
      (e.prototype.encodeNumber = function (t) {
        !this.forceIntegerToFloat && Number.isSafeInteger(t)
          ? t >= 0
            ? t < 128
              ? this.writeU8(t)
              : t < 256
                ? (this.writeU8(204), this.writeU8(t))
                : t < 65536
                  ? (this.writeU8(205), this.writeU16(t))
                  : t < 4294967296
                    ? (this.writeU8(206), this.writeU32(t))
                    : this.useBigInt64
                      ? this.encodeNumberAsFloat(t)
                      : (this.writeU8(207), this.writeU64(t))
            : t >= -32
              ? this.writeU8(224 | (t + 32))
              : t >= -128
                ? (this.writeU8(208), this.writeI8(t))
                : t >= -32768
                  ? (this.writeU8(209), this.writeI16(t))
                  : t >= -2147483648
                    ? (this.writeU8(210), this.writeI32(t))
                    : this.useBigInt64
                      ? this.encodeNumberAsFloat(t)
                      : (this.writeU8(211), this.writeI64(t))
          : this.encodeNumberAsFloat(t);
      }),
      (e.prototype.encodeNumberAsFloat = function (t) {
        this.forceFloat32
          ? (this.writeU8(202), this.writeF32(t))
          : (this.writeU8(203), this.writeF64(t));
      }),
      (e.prototype.encodeBigInt64 = function (t) {
        t >= BigInt(0)
          ? (this.writeU8(207), this.writeBigUint64(t))
          : (this.writeU8(211), this.writeBigInt64(t));
      }),
      (e.prototype.writeStringHeader = function (t) {
        if (t < 32) this.writeU8(160 + t);
        else if (t < 256) this.writeU8(217), this.writeU8(t);
        else if (t < 65536) this.writeU8(218), this.writeU16(t);
        else if (t < 4294967296) this.writeU8(219), this.writeU32(t);
        else throw new Error('Too long string: '.concat(t, ' bytes in UTF-8'));
      }),
      (e.prototype.encodeString = function (t) {
        var r = 5,
          i = Ip(t);
        this.ensureBufferSizeToWrite(r + i),
          this.writeStringHeader(i),
          Tp(t, this.bytes, this.pos),
          (this.pos += i);
      }),
      (e.prototype.encodeObject = function (t, r) {
        var i = this.extensionCodec.tryToEncode(t, this.context);
        if (i != null) this.encodeExtension(i);
        else if (Array.isArray(t)) this.encodeArray(t, r);
        else if (ArrayBuffer.isView(t)) this.encodeBinary(t);
        else if (typeof t == 'object') this.encodeMap(t, r);
        else throw new Error('Unrecognized object: '.concat(Object.prototype.toString.apply(t)));
      }),
      (e.prototype.encodeBinary = function (t) {
        var r = t.byteLength;
        if (r < 256) this.writeU8(196), this.writeU8(r);
        else if (r < 65536) this.writeU8(197), this.writeU16(r);
        else if (r < 4294967296) this.writeU8(198), this.writeU32(r);
        else throw new Error('Too large binary: '.concat(r));
        var i = pi(t);
        this.writeU8a(i);
      }),
      (e.prototype.encodeArray = function (t, r) {
        var i = t.length;
        if (i < 16) this.writeU8(144 + i);
        else if (i < 65536) this.writeU8(220), this.writeU16(i);
        else if (i < 4294967296) this.writeU8(221), this.writeU32(i);
        else throw new Error('Too large array: '.concat(i));
        for (var n = 0, a = t; n < a.length; n++) {
          var s = a[n];
          this.doEncode(s, r + 1);
        }
      }),
      (e.prototype.countWithoutUndefined = function (t, r) {
        for (var i = 0, n = 0, a = r; n < a.length; n++) {
          var s = a[n];
          t[s] !== void 0 && i++;
        }
        return i;
      }),
      (e.prototype.encodeMap = function (t, r) {
        var i = Object.keys(t);
        this.sortKeys && i.sort();
        var n = this.ignoreUndefined ? this.countWithoutUndefined(t, i) : i.length;
        if (n < 16) this.writeU8(128 + n);
        else if (n < 65536) this.writeU8(222), this.writeU16(n);
        else if (n < 4294967296) this.writeU8(223), this.writeU32(n);
        else throw new Error('Too large map object: '.concat(n));
        for (var a = 0, s = i; a < s.length; a++) {
          var o = s[a],
            d = t[o];
          (this.ignoreUndefined && d === void 0) || (this.encodeString(o), this.doEncode(d, r + 1));
        }
      }),
      (e.prototype.encodeExtension = function (t) {
        var r = t.data.length;
        if (r === 1) this.writeU8(212);
        else if (r === 2) this.writeU8(213);
        else if (r === 4) this.writeU8(214);
        else if (r === 8) this.writeU8(215);
        else if (r === 16) this.writeU8(216);
        else if (r < 256) this.writeU8(199), this.writeU8(r);
        else if (r < 65536) this.writeU8(200), this.writeU16(r);
        else if (r < 4294967296) this.writeU8(201), this.writeU32(r);
        else throw new Error('Too large extension object: '.concat(r));
        this.writeI8(t.type), this.writeU8a(t.data);
      }),
      (e.prototype.writeU8 = function (t) {
        this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, t), this.pos++;
      }),
      (e.prototype.writeU8a = function (t) {
        var r = t.length;
        this.ensureBufferSizeToWrite(r), this.bytes.set(t, this.pos), (this.pos += r);
      }),
      (e.prototype.writeI8 = function (t) {
        this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, t), this.pos++;
      }),
      (e.prototype.writeU16 = function (t) {
        this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, t), (this.pos += 2);
      }),
      (e.prototype.writeI16 = function (t) {
        this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, t), (this.pos += 2);
      }),
      (e.prototype.writeU32 = function (t) {
        this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, t), (this.pos += 4);
      }),
      (e.prototype.writeI32 = function (t) {
        this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, t), (this.pos += 4);
      }),
      (e.prototype.writeF32 = function (t) {
        this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, t), (this.pos += 4);
      }),
      (e.prototype.writeF64 = function (t) {
        this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, t), (this.pos += 8);
      }),
      (e.prototype.writeU64 = function (t) {
        this.ensureBufferSizeToWrite(8), Wp(this.view, this.pos, t), (this.pos += 8);
      }),
      (e.prototype.writeI64 = function (t) {
        this.ensureBufferSizeToWrite(8), iu(this.view, this.pos, t), (this.pos += 8);
      }),
      (e.prototype.writeBigUint64 = function (t) {
        this.ensureBufferSizeToWrite(8), this.view.setBigUint64(this.pos, t), (this.pos += 8);
      }),
      (e.prototype.writeBigInt64 = function (t) {
        this.ensureBufferSizeToWrite(8), this.view.setBigInt64(this.pos, t), (this.pos += 8);
      }),
      e
    );
  })();
function Gp(e, t) {
  var r = new du(t);
  return r.encodeSharedRef(e);
}
function En(e) {
  return ''.concat(e < 0 ? '-' : '', '0x').concat(Math.abs(e).toString(16).padStart(2, '0'));
}
var Yp = 16,
  Jp = 16,
  Qp = (function () {
    function e(t, r) {
      t === void 0 && (t = Yp),
        r === void 0 && (r = Jp),
        (this.maxKeyLength = t),
        (this.maxLengthPerKey = r),
        (this.hit = 0),
        (this.miss = 0),
        (this.caches = []);
      for (var i = 0; i < this.maxKeyLength; i++) this.caches.push([]);
    }
    return (
      (e.prototype.canBeCached = function (t) {
        return t > 0 && t <= this.maxKeyLength;
      }),
      (e.prototype.find = function (t, r, i) {
        var n = this.caches[i - 1];
        e: for (var a = 0, s = n; a < s.length; a++) {
          for (var o = s[a], d = o.bytes, u = 0; u < i; u++) if (d[u] !== t[r + u]) continue e;
          return o.str;
        }
        return null;
      }),
      (e.prototype.store = function (t, r) {
        var i = this.caches[t.length - 1],
          n = { bytes: t, str: r };
        i.length >= this.maxLengthPerKey ? (i[(Math.random() * i.length) | 0] = n) : i.push(n);
      }),
      (e.prototype.decode = function (t, r, i) {
        var n = this.find(t, r, i);
        if (n != null) return this.hit++, n;
        this.miss++;
        var a = ru(t, r, i),
          s = Uint8Array.prototype.slice.call(t, r, r + i);
        return this.store(s, a), a;
      }),
      e
    );
  })(),
  ey = function (e, t, r, i) {
    function n(a) {
      return a instanceof r
        ? a
        : new r(function (s) {
            s(a);
          });
    }
    return new (r || (r = Promise))(function (a, s) {
      function o(l) {
        try {
          u(i.next(l));
        } catch (c) {
          s(c);
        }
      }
      function d(l) {
        try {
          u(i.throw(l));
        } catch (c) {
          s(c);
        }
      }
      function u(l) {
        l.done ? a(l.value) : n(l.value).then(o, d);
      }
      u((i = i.apply(e, t || [])).next());
    });
  },
  wn = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      i,
      n,
      a,
      s;
    return (
      (s = { next: o(0), throw: o(1), return: o(2) }),
      typeof Symbol == 'function' &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function o(u) {
      return function (l) {
        return d([u, l]);
      };
    }
    function d(u) {
      if (i) throw new TypeError('Generator is already executing.');
      for (; s && ((s = 0), u[0] && (r = 0)), r; )
        try {
          if (
            ((i = 1),
            n &&
              (a =
                u[0] & 2
                  ? n.return
                  : u[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, u[1])).done)
          )
            return a;
          switch (((n = 0), a && (u = [u[0] & 2, a.value]), u[0])) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return r.label++, { value: u[1], done: !1 };
            case 5:
              r.label++, (n = u[1]), (u = [0]);
              continue;
            case 7:
              (u = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((a = r.trys), !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < a[1]) {
                (r.label = a[1]), (a = u);
                break;
              }
              if (a && r.label < a[2]) {
                (r.label = a[2]), r.ops.push(u);
                break;
              }
              a[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          u = t.call(e, r);
        } catch (l) {
          (u = [6, l]), (n = 0);
        } finally {
          i = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  ho = function (e) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var t = e[Symbol.asyncIterator],
      r;
    return t
      ? t.call(e)
      : ((e = typeof __values == 'function' ? __values(e) : e[Symbol.iterator]()),
        (r = {}),
        i('next'),
        i('throw'),
        i('return'),
        (r[Symbol.asyncIterator] = function () {
          return this;
        }),
        r);
    function i(a) {
      r[a] =
        e[a] &&
        function (s) {
          return new Promise(function (o, d) {
            (s = e[a](s)), n(o, d, s.done, s.value);
          });
        };
    }
    function n(a, s, o, d) {
      Promise.resolve(d).then(function (u) {
        a({ value: u, done: o });
      }, s);
    }
  },
  ct = function (e) {
    return this instanceof ct ? ((this.v = e), this) : new ct(e);
  },
  ty = function (e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var i = r.apply(e, t || []),
      n,
      a = [];
    return (
      (n = {}),
      s('next'),
      s('throw'),
      s('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n
    );
    function s(f) {
      i[f] &&
        (n[f] = function (g) {
          return new Promise(function (m, P) {
            a.push([f, g, m, P]) > 1 || o(f, g);
          });
        });
    }
    function o(f, g) {
      try {
        d(i[f](g));
      } catch (m) {
        c(a[0][3], m);
      }
    }
    function d(f) {
      f.value instanceof ct ? Promise.resolve(f.value.v).then(u, l) : c(a[0][2], f);
    }
    function u(f) {
      o('next', f);
    }
    function l(f) {
      o('throw', f);
    }
    function c(f, g) {
      f(g), a.shift(), a.length && o(a[0][0], a[0][1]);
    }
  },
  mo = 'array',
  Yr = 'map_key',
  ry = 'map_value',
  iy = function (e) {
    return typeof e == 'string' || typeof e == 'number';
  },
  Br = -1,
  xa = new DataView(new ArrayBuffer(0)),
  ny = new Uint8Array(xa.buffer);
try {
  xa.getInt8(0);
} catch (e) {
  if (!(e instanceof RangeError))
    throw new Error(
      'This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access'
    );
}
var yi = RangeError,
  Ao = new yi('Insufficient data'),
  ay = new Qp(),
  Zt = (function () {
    function e(t) {
      var r, i, n, a, s, o, d;
      (this.totalPos = 0),
        (this.pos = 0),
        (this.view = xa),
        (this.bytes = ny),
        (this.headByte = Br),
        (this.stack = []),
        (this.extensionCodec =
          (r = t == null ? void 0 : t.extensionCodec) !== null && r !== void 0
            ? r
            : wa.defaultCodec),
        (this.context = t == null ? void 0 : t.context),
        (this.useBigInt64 =
          (i = t == null ? void 0 : t.useBigInt64) !== null && i !== void 0 ? i : !1),
        (this.maxStrLength =
          (n = t == null ? void 0 : t.maxStrLength) !== null && n !== void 0 ? n : xr),
        (this.maxBinLength =
          (a = t == null ? void 0 : t.maxBinLength) !== null && a !== void 0 ? a : xr),
        (this.maxArrayLength =
          (s = t == null ? void 0 : t.maxArrayLength) !== null && s !== void 0 ? s : xr),
        (this.maxMapLength =
          (o = t == null ? void 0 : t.maxMapLength) !== null && o !== void 0 ? o : xr),
        (this.maxExtLength =
          (d = t == null ? void 0 : t.maxExtLength) !== null && d !== void 0 ? d : xr),
        (this.keyDecoder = (t == null ? void 0 : t.keyDecoder) !== void 0 ? t.keyDecoder : ay);
    }
    return (
      (e.prototype.reinitializeState = function () {
        (this.totalPos = 0), (this.headByte = Br), (this.stack.length = 0);
      }),
      (e.prototype.setBuffer = function (t) {
        (this.bytes = pi(t)), (this.view = qp(this.bytes)), (this.pos = 0);
      }),
      (e.prototype.appendBuffer = function (t) {
        if (this.headByte === Br && !this.hasRemaining(1)) this.setBuffer(t);
        else {
          var r = this.bytes.subarray(this.pos),
            i = pi(t),
            n = new Uint8Array(r.length + i.length);
          n.set(r), n.set(i, r.length), this.setBuffer(n);
        }
      }),
      (e.prototype.hasRemaining = function (t) {
        return this.view.byteLength - this.pos >= t;
      }),
      (e.prototype.createExtraByteError = function (t) {
        var r = this,
          i = r.view,
          n = r.pos;
        return new RangeError(
          'Extra '
            .concat(i.byteLength - n, ' of ')
            .concat(i.byteLength, ' byte(s) found at buffer[')
            .concat(t, ']')
        );
      }),
      (e.prototype.decode = function (t) {
        this.reinitializeState(), this.setBuffer(t);
        var r = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return r;
      }),
      (e.prototype.decodeMulti = function (t) {
        return wn(this, function (r) {
          switch (r.label) {
            case 0:
              this.reinitializeState(), this.setBuffer(t), (r.label = 1);
            case 1:
              return this.hasRemaining(1) ? [4, this.doDecodeSync()] : [3, 3];
            case 2:
              return r.sent(), [3, 1];
            case 3:
              return [2];
          }
        });
      }),
      (e.prototype.decodeAsync = function (t) {
        var r, i, n, a, s, o, d;
        return ey(this, void 0, void 0, function () {
          var u, l, c, f, g, m, P, v;
          return wn(this, function (p) {
            switch (p.label) {
              case 0:
                (u = !1), (p.label = 1);
              case 1:
                p.trys.push([1, 6, 7, 12]), (r = !0), (i = ho(t)), (p.label = 2);
              case 2:
                return [4, i.next()];
              case 3:
                if (((n = p.sent()), (a = n.done), !!a)) return [3, 5];
                (d = n.value), (r = !1);
                try {
                  if (((c = d), u)) throw this.createExtraByteError(this.totalPos);
                  this.appendBuffer(c);
                  try {
                    (l = this.doDecodeSync()), (u = !0);
                  } catch (b) {
                    if (!(b instanceof yi)) throw b;
                  }
                  this.totalPos += this.pos;
                } finally {
                  r = !0;
                }
                p.label = 4;
              case 4:
                return [3, 2];
              case 5:
                return [3, 12];
              case 6:
                return (f = p.sent()), (s = { error: f }), [3, 12];
              case 7:
                return (
                  p.trys.push([7, , 10, 11]), !r && !a && (o = i.return) ? [4, o.call(i)] : [3, 9]
                );
              case 8:
                p.sent(), (p.label = 9);
              case 9:
                return [3, 11];
              case 10:
                if (s) throw s.error;
                return [7];
              case 11:
                return [7];
              case 12:
                if (u) {
                  if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
                  return [2, l];
                }
                throw (
                  ((g = this),
                  (m = g.headByte),
                  (P = g.pos),
                  (v = g.totalPos),
                  new RangeError(
                    'Insufficient data in parsing '
                      .concat(En(m), ' at ')
                      .concat(v, ' (')
                      .concat(P, ' in the current buffer)')
                  ))
                );
            }
          });
        });
      }),
      (e.prototype.decodeArrayStream = function (t) {
        return this.decodeMultiAsync(t, !0);
      }),
      (e.prototype.decodeStream = function (t) {
        return this.decodeMultiAsync(t, !1);
      }),
      (e.prototype.decodeMultiAsync = function (t, r) {
        return ty(this, arguments, function () {
          var n, a, s, o, d, u, l, c, f, g, m, P;
          return wn(this, function (v) {
            switch (v.label) {
              case 0:
                (n = r), (a = -1), (v.label = 1);
              case 1:
                v.trys.push([1, 15, 16, 21]), (s = !0), (o = ho(t)), (v.label = 2);
              case 2:
                return [4, ct(o.next())];
              case 3:
                if (((d = v.sent()), (f = d.done), !!f)) return [3, 14];
                (P = d.value), (s = !1), (v.label = 4);
              case 4:
                if ((v.trys.push([4, , 12, 13]), (u = P), r && a === 0))
                  throw this.createExtraByteError(this.totalPos);
                this.appendBuffer(u),
                  n && ((a = this.readArraySize()), (n = !1), this.complete()),
                  (v.label = 5);
              case 5:
                v.trys.push([5, 10, , 11]), (v.label = 6);
              case 6:
                return [4, ct(this.doDecodeSync())];
              case 7:
                return [4, v.sent()];
              case 8:
                return v.sent(), --a === 0 ? [3, 9] : [3, 6];
              case 9:
                return [3, 11];
              case 10:
                if (((l = v.sent()), !(l instanceof yi))) throw l;
                return [3, 11];
              case 11:
                return (this.totalPos += this.pos), [3, 13];
              case 12:
                return (s = !0), [7];
              case 13:
                return [3, 2];
              case 14:
                return [3, 21];
              case 15:
                return (c = v.sent()), (g = { error: c }), [3, 21];
              case 16:
                return (
                  v.trys.push([16, , 19, 20]),
                  !s && !f && (m = o.return) ? [4, ct(m.call(o))] : [3, 18]
                );
              case 17:
                v.sent(), (v.label = 18);
              case 18:
                return [3, 20];
              case 19:
                if (g) throw g.error;
                return [7];
              case 20:
                return [7];
              case 21:
                return [2];
            }
          });
        });
      }),
      (e.prototype.doDecodeSync = function () {
        e: for (;;) {
          var t = this.readHeadByte(),
            r = void 0;
          if (t >= 224) r = t - 256;
          else if (t < 192)
            if (t < 128) r = t;
            else if (t < 144) {
              var i = t - 128;
              if (i !== 0) {
                this.pushMapState(i), this.complete();
                continue e;
              } else r = {};
            } else if (t < 160) {
              var i = t - 144;
              if (i !== 0) {
                this.pushArrayState(i), this.complete();
                continue e;
              } else r = [];
            } else {
              var n = t - 160;
              r = this.decodeUtf8String(n, 0);
            }
          else if (t === 192) r = null;
          else if (t === 194) r = !1;
          else if (t === 195) r = !0;
          else if (t === 202) r = this.readF32();
          else if (t === 203) r = this.readF64();
          else if (t === 204) r = this.readU8();
          else if (t === 205) r = this.readU16();
          else if (t === 206) r = this.readU32();
          else if (t === 207)
            this.useBigInt64 ? (r = this.readU64AsBigInt()) : (r = this.readU64());
          else if (t === 208) r = this.readI8();
          else if (t === 209) r = this.readI16();
          else if (t === 210) r = this.readI32();
          else if (t === 211)
            this.useBigInt64 ? (r = this.readI64AsBigInt()) : (r = this.readI64());
          else if (t === 217) {
            var n = this.lookU8();
            r = this.decodeUtf8String(n, 1);
          } else if (t === 218) {
            var n = this.lookU16();
            r = this.decodeUtf8String(n, 2);
          } else if (t === 219) {
            var n = this.lookU32();
            r = this.decodeUtf8String(n, 4);
          } else if (t === 220) {
            var i = this.readU16();
            if (i !== 0) {
              this.pushArrayState(i), this.complete();
              continue e;
            } else r = [];
          } else if (t === 221) {
            var i = this.readU32();
            if (i !== 0) {
              this.pushArrayState(i), this.complete();
              continue e;
            } else r = [];
          } else if (t === 222) {
            var i = this.readU16();
            if (i !== 0) {
              this.pushMapState(i), this.complete();
              continue e;
            } else r = {};
          } else if (t === 223) {
            var i = this.readU32();
            if (i !== 0) {
              this.pushMapState(i), this.complete();
              continue e;
            } else r = {};
          } else if (t === 196) {
            var i = this.lookU8();
            r = this.decodeBinary(i, 1);
          } else if (t === 197) {
            var i = this.lookU16();
            r = this.decodeBinary(i, 2);
          } else if (t === 198) {
            var i = this.lookU32();
            r = this.decodeBinary(i, 4);
          } else if (t === 212) r = this.decodeExtension(1, 0);
          else if (t === 213) r = this.decodeExtension(2, 0);
          else if (t === 214) r = this.decodeExtension(4, 0);
          else if (t === 215) r = this.decodeExtension(8, 0);
          else if (t === 216) r = this.decodeExtension(16, 0);
          else if (t === 199) {
            var i = this.lookU8();
            r = this.decodeExtension(i, 1);
          } else if (t === 200) {
            var i = this.lookU16();
            r = this.decodeExtension(i, 2);
          } else if (t === 201) {
            var i = this.lookU32();
            r = this.decodeExtension(i, 4);
          } else throw new le('Unrecognized type byte: '.concat(En(t)));
          this.complete();
          for (var a = this.stack; a.length > 0; ) {
            var s = a[a.length - 1];
            if (s.type === mo)
              if (((s.array[s.position] = r), s.position++, s.position === s.size))
                a.pop(), (r = s.array);
              else continue e;
            else if (s.type === Yr) {
              if (!iy(r)) throw new le('The type of key must be string or number but ' + typeof r);
              if (r === '__proto__') throw new le('The key __proto__ is not allowed');
              (s.key = r), (s.type = ry);
              continue e;
            } else if (((s.map[s.key] = r), s.readCount++, s.readCount === s.size))
              a.pop(), (r = s.map);
            else {
              (s.key = null), (s.type = Yr);
              continue e;
            }
          }
          return r;
        }
      }),
      (e.prototype.readHeadByte = function () {
        return this.headByte === Br && (this.headByte = this.readU8()), this.headByte;
      }),
      (e.prototype.complete = function () {
        this.headByte = Br;
      }),
      (e.prototype.readArraySize = function () {
        var t = this.readHeadByte();
        switch (t) {
          case 220:
            return this.readU16();
          case 221:
            return this.readU32();
          default: {
            if (t < 160) return t - 144;
            throw new le('Unrecognized array type byte: '.concat(En(t)));
          }
        }
      }),
      (e.prototype.pushMapState = function (t) {
        if (t > this.maxMapLength)
          throw new le(
            'Max length exceeded: map length ('
              .concat(t, ') > maxMapLengthLength (')
              .concat(this.maxMapLength, ')')
          );
        this.stack.push({ type: Yr, size: t, key: null, readCount: 0, map: {} });
      }),
      (e.prototype.pushArrayState = function (t) {
        if (t > this.maxArrayLength)
          throw new le(
            'Max length exceeded: array length ('
              .concat(t, ') > maxArrayLength (')
              .concat(this.maxArrayLength, ')')
          );
        this.stack.push({ type: mo, size: t, array: new Array(t), position: 0 });
      }),
      (e.prototype.decodeUtf8String = function (t, r) {
        var i;
        if (t > this.maxStrLength)
          throw new le(
            'Max length exceeded: UTF-8 byte length ('
              .concat(t, ') > maxStrLength (')
              .concat(this.maxStrLength, ')')
          );
        if (this.bytes.byteLength < this.pos + r + t) throw Ao;
        var n = this.pos + r,
          a;
        return (
          this.stateIsMapKey() &&
          !((i = this.keyDecoder) === null || i === void 0) &&
          i.canBeCached(t)
            ? (a = this.keyDecoder.decode(this.bytes, n, t))
            : (a = Lp(this.bytes, n, t)),
          (this.pos += r + t),
          a
        );
      }),
      (e.prototype.stateIsMapKey = function () {
        if (this.stack.length > 0) {
          var t = this.stack[this.stack.length - 1];
          return t.type === Yr;
        }
        return !1;
      }),
      (e.prototype.decodeBinary = function (t, r) {
        if (t > this.maxBinLength)
          throw new le(
            'Max length exceeded: bin length ('
              .concat(t, ') > maxBinLength (')
              .concat(this.maxBinLength, ')')
          );
        if (!this.hasRemaining(t + r)) throw Ao;
        var i = this.pos + r,
          n = this.bytes.subarray(i, i + t);
        return (this.pos += r + t), n;
      }),
      (e.prototype.decodeExtension = function (t, r) {
        if (t > this.maxExtLength)
          throw new le(
            'Max length exceeded: ext length ('
              .concat(t, ') > maxExtLength (')
              .concat(this.maxExtLength, ')')
          );
        var i = this.view.getInt8(this.pos + r),
          n = this.decodeBinary(t, r + 1);
        return this.extensionCodec.decode(n, i, this.context);
      }),
      (e.prototype.lookU8 = function () {
        return this.view.getUint8(this.pos);
      }),
      (e.prototype.lookU16 = function () {
        return this.view.getUint16(this.pos);
      }),
      (e.prototype.lookU32 = function () {
        return this.view.getUint32(this.pos);
      }),
      (e.prototype.readU8 = function () {
        var t = this.view.getUint8(this.pos);
        return this.pos++, t;
      }),
      (e.prototype.readI8 = function () {
        var t = this.view.getInt8(this.pos);
        return this.pos++, t;
      }),
      (e.prototype.readU16 = function () {
        var t = this.view.getUint16(this.pos);
        return (this.pos += 2), t;
      }),
      (e.prototype.readI16 = function () {
        var t = this.view.getInt16(this.pos);
        return (this.pos += 2), t;
      }),
      (e.prototype.readU32 = function () {
        var t = this.view.getUint32(this.pos);
        return (this.pos += 4), t;
      }),
      (e.prototype.readI32 = function () {
        var t = this.view.getInt32(this.pos);
        return (this.pos += 4), t;
      }),
      (e.prototype.readU64 = function () {
        var t = Hp(this.view, this.pos);
        return (this.pos += 8), t;
      }),
      (e.prototype.readI64 = function () {
        var t = nu(this.view, this.pos);
        return (this.pos += 8), t;
      }),
      (e.prototype.readU64AsBigInt = function () {
        var t = this.view.getBigUint64(this.pos);
        return (this.pos += 8), t;
      }),
      (e.prototype.readI64AsBigInt = function () {
        var t = this.view.getBigInt64(this.pos);
        return (this.pos += 8), t;
      }),
      (e.prototype.readF32 = function () {
        var t = this.view.getFloat32(this.pos);
        return (this.pos += 4), t;
      }),
      (e.prototype.readF64 = function () {
        var t = this.view.getFloat64(this.pos);
        return (this.pos += 8), t;
      }),
      e
    );
  })();
function sy(e, t) {
  var r = new Zt(t);
  return r.decode(e);
}
function oy(e, t) {
  var r = new Zt(t);
  return r.decodeMulti(e);
}
var ly = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      i,
      n,
      a,
      s;
    return (
      (s = { next: o(0), throw: o(1), return: o(2) }),
      typeof Symbol == 'function' &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function o(u) {
      return function (l) {
        return d([u, l]);
      };
    }
    function d(u) {
      if (i) throw new TypeError('Generator is already executing.');
      for (; s && ((s = 0), u[0] && (r = 0)), r; )
        try {
          if (
            ((i = 1),
            n &&
              (a =
                u[0] & 2
                  ? n.return
                  : u[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, u[1])).done)
          )
            return a;
          switch (((n = 0), a && (u = [u[0] & 2, a.value]), u[0])) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return r.label++, { value: u[1], done: !1 };
            case 5:
              r.label++, (n = u[1]), (u = [0]);
              continue;
            case 7:
              (u = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((a = r.trys), !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < a[1]) {
                (r.label = a[1]), (a = u);
                break;
              }
              if (a && r.label < a[2]) {
                (r.label = a[2]), r.ops.push(u);
                break;
              }
              a[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          u = t.call(e, r);
        } catch (l) {
          (u = [6, l]), (n = 0);
        } finally {
          i = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  dt = function (e) {
    return this instanceof dt ? ((this.v = e), this) : new dt(e);
  },
  uy = function (e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var i = r.apply(e, t || []),
      n,
      a = [];
    return (
      (n = {}),
      s('next'),
      s('throw'),
      s('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n
    );
    function s(f) {
      i[f] &&
        (n[f] = function (g) {
          return new Promise(function (m, P) {
            a.push([f, g, m, P]) > 1 || o(f, g);
          });
        });
    }
    function o(f, g) {
      try {
        d(i[f](g));
      } catch (m) {
        c(a[0][3], m);
      }
    }
    function d(f) {
      f.value instanceof dt ? Promise.resolve(f.value.v).then(u, l) : c(a[0][2], f);
    }
    function u(f) {
      o('next', f);
    }
    function l(f) {
      o('throw', f);
    }
    function c(f, g) {
      f(g), a.shift(), a.length && o(a[0][0], a[0][1]);
    }
  };
function cy(e) {
  return e[Symbol.asyncIterator] != null;
}
function dy(e) {
  if (e == null) throw new Error('Assertion Failure: value must not be null nor undefined');
}
function fy(e) {
  return uy(this, arguments, function () {
    var r, i, n, a;
    return ly(this, function (s) {
      switch (s.label) {
        case 0:
          (r = e.getReader()), (s.label = 1);
        case 1:
          s.trys.push([1, , 9, 10]), (s.label = 2);
        case 2:
          return [4, dt(r.read())];
        case 3:
          return (i = s.sent()), (n = i.done), (a = i.value), n ? [4, dt(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return dy(a), [4, dt(a)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Ba(e) {
  return cy(e) ? e : fy(e);
}
var gy = function (e, t, r, i) {
    function n(a) {
      return a instanceof r
        ? a
        : new r(function (s) {
            s(a);
          });
    }
    return new (r || (r = Promise))(function (a, s) {
      function o(l) {
        try {
          u(i.next(l));
        } catch (c) {
          s(c);
        }
      }
      function d(l) {
        try {
          u(i.throw(l));
        } catch (c) {
          s(c);
        }
      }
      function u(l) {
        l.done ? a(l.value) : n(l.value).then(o, d);
      }
      u((i = i.apply(e, t || [])).next());
    });
  },
  py = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      i,
      n,
      a,
      s;
    return (
      (s = { next: o(0), throw: o(1), return: o(2) }),
      typeof Symbol == 'function' &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function o(u) {
      return function (l) {
        return d([u, l]);
      };
    }
    function d(u) {
      if (i) throw new TypeError('Generator is already executing.');
      for (; s && ((s = 0), u[0] && (r = 0)), r; )
        try {
          if (
            ((i = 1),
            n &&
              (a =
                u[0] & 2
                  ? n.return
                  : u[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, u[1])).done)
          )
            return a;
          switch (((n = 0), a && (u = [u[0] & 2, a.value]), u[0])) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return r.label++, { value: u[1], done: !1 };
            case 5:
              r.label++, (n = u[1]), (u = [0]);
              continue;
            case 7:
              (u = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((a = r.trys), !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < a[1]) {
                (r.label = a[1]), (a = u);
                break;
              }
              if (a && r.label < a[2]) {
                (r.label = a[2]), r.ops.push(u);
                break;
              }
              a[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          u = t.call(e, r);
        } catch (l) {
          (u = [6, l]), (n = 0);
        } finally {
          i = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  };
function yy(e, t) {
  return gy(this, void 0, void 0, function () {
    var r, i;
    return py(this, function (n) {
      return (r = Ba(e)), (i = new Zt(t)), [2, i.decodeAsync(r)];
    });
  });
}
function hy(e, t) {
  var r = Ba(e),
    i = new Zt(t);
  return i.decodeArrayStream(r);
}
function my(e, t) {
  var r = Ba(e),
    i = new Zt(t);
  return i.decodeStream(r);
}
var Ay = void 0;
const vy = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        DataViewIndexOutOfBoundsError: yi,
        DecodeError: le,
        Decoder: Zt,
        EXT_TIMESTAMP: au,
        Encoder: du,
        ExtData: kr,
        ExtensionCodec: wa,
        decode: sy,
        decodeArrayStream: hy,
        decodeAsync: yy,
        decodeMulti: oy,
        decodeMultiStream: my,
        decodeStream: Ay,
        decodeTimestampExtension: cu,
        decodeTimestampToTimeSpec: uu,
        encode: Gp,
        encodeDateToTimeSpec: ou,
        encodeTimeSpecToTimestamp: su,
        encodeTimestampExtension: lu,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Py = la(vy);
var F = {};
Object.defineProperty(F, '__esModule', { value: !0 });
F.unwrapOption =
  F.someOrNone =
  F.lowercaseFirstLetter =
  F.capitalizeFirstLetter =
  F.toWords =
    void 0;
const vo = E;
function by(e) {
  const t = /([a-z0-9])([A-Z])/g;
  return e.replace(t, '$1 $2');
}
F.toWords = by;
function Sy(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
F.capitalizeFirstLetter = Sy;
function _y(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
F.lowercaseFirstLetter = _y;
function zy(e) {
  return e !== void 0 ? (0, vo.some)(e) : (0, vo.none)();
}
F.someOrNone = zy;
function Ey(e) {
  return e.__option === 'Some' ? e.value : void 0;
}
F.unwrapOption = Ey;
var N = {};
Object.defineProperty(N, '__esModule', { value: !0 });
N.comparePluginAuthorities = N.pluginAuthorityFromBase = N.pluginAuthorityToBase = void 0;
function wy(e) {
  return e.type === 'Address' ? { __kind: 'Address', address: e.address } : { __kind: e.type };
}
N.pluginAuthorityToBase = wy;
function xy(e) {
  return { type: e.__kind, address: e.address };
}
N.pluginAuthorityFromBase = xy;
function By(e, t) {
  return e.type !== t.type ? !1 : e.address === t.address;
}
N.comparePluginAuthorities = By;
var Ge = {};
Object.defineProperty(Ge, '__esModule', { value: !0 });
Ge.masterEditionFromBase = Ge.masterEditionToBase = void 0;
const ft = F;
function Cy(e) {
  return {
    maxSupply: (0, ft.someOrNone)(e.maxSupply),
    name: (0, ft.someOrNone)(e.name),
    uri: (0, ft.someOrNone)(e.uri),
  };
}
Ge.masterEditionToBase = Cy;
function Iy(e) {
  return {
    maxSupply: (0, ft.unwrapOption)(e.maxSupply),
    name: (0, ft.unwrapOption)(e.name),
    uri: (0, ft.unwrapOption)(e.uri),
  };
}
Ge.masterEditionFromBase = Iy;
var Po;
function Wi() {
  if (Po) return L;
  (Po = 1),
    Object.defineProperty(L, '__esModule', { value: !0 }),
    (L.parseExternalPluginAdapterData =
      L.pluginKeyToPluginType =
      L.registryRecordsToPluginsList =
      L.mapPlugin =
      L.mapPluginFields =
      L.pluginAuthorityPairV2 =
      L.createPluginV2 =
      L.pluginAuthorityPair =
      L.createPlugin =
      L.formPluginHeaderV1 =
        void 0);
  const e = E,
    t = Py,
    r = R(),
    i = F,
    n = N,
    a = we,
    s = Ge;
  function o(p) {
    return { key: r.Key.PluginHeaderV1, pluginRegistryOffset: p };
  }
  L.formPluginHeaderV1 = o;
  function d(p) {
    return p.type === 'UpdateDelegate'
      ? { __kind: p.type, fields: [p.data || { additionalDelegates: [] }] }
      : { __kind: p.type, fields: [p.data || {}] };
  }
  L.createPlugin = d;
  function u(p) {
    const { type: b, authority: z, data: D } = p;
    return { plugin: d({ type: b, data: D }), authority: z ? (0, e.some)(z) : (0, e.none)() };
  }
  L.pluginAuthorityPair = u;
  function l(p) {
    const { type: b } = p;
    return b === 'UpdateDelegate'
      ? { __kind: b, fields: [p || { additionalDelegates: [] }] }
      : b === 'Royalties'
        ? { __kind: b, fields: [(0, a.royaltiesToBase)(p)] }
        : b === 'MasterEdition'
          ? { __kind: b, fields: [(0, s.masterEditionToBase)(p)] }
          : { __kind: b, fields: [p || {}] };
  }
  L.createPluginV2 = l;
  function c({ type: p, authority: b, ...z }) {
    return {
      plugin: l({ type: p, ...z }),
      authority: b ? (0, e.some)((0, n.pluginAuthorityToBase)(b)) : (0, e.none)(),
    };
  }
  L.pluginAuthorityPairV2 = c;
  function f(p) {
    return p.reduce((b, z) => ({ ...b, ...z }), {});
  }
  L.mapPluginFields = f;
  function g({ plugin: p, authority: b, offset: z }) {
    const D = (0, i.toWords)(p.__kind)
      .toLowerCase()
      .split(' ')
      .reduce((M, A) => M + (A.charAt(0).toUpperCase() + A.slice(1)));
    return p.__kind === 'Royalties'
      ? { [D]: { authority: b, offset: z, ...(0, a.royaltiesFromBase)(p.fields[0]) } }
      : p.__kind === 'MasterEdition'
        ? { [D]: { authority: b, offset: z, ...(0, s.masterEditionFromBase)(p.fields[0]) } }
        : { [D]: { authority: b, offset: z, ...('fields' in p ? f(p.fields) : {}) } };
  }
  L.mapPlugin = g;
  function m(p, b) {
    return p.reduce((z, D) => {
      const M = (0, n.pluginAuthorityFromBase)(D.authority),
        A = (0, r.getPluginSerializer)().deserialize(b, Number(D.offset))[0];
      return (z = { ...z, ...g({ plugin: A, authority: M, offset: D.offset }) }), z;
    }, {});
  }
  L.registryRecordsToPluginsList = m;
  function P(p) {
    return p.charAt(0).toUpperCase() + p.slice(1);
  }
  L.pluginKeyToPluginType = P;
  function v(p, b, z) {
    let D;
    if ((0, e.isSome)(b.dataOffset) && (0, e.isSome)(b.dataLen)) {
      const M = z.slice(
        Number(b.dataOffset.value),
        Number(b.dataOffset.value) + Number(b.dataLen.value)
      );
      if (p.schema === r.ExternalPluginAdapterSchema.Binary) D = M;
      else if (p.schema === r.ExternalPluginAdapterSchema.Json) {
        if (M.length !== 0)
          try {
            D = JSON.parse(new TextDecoder().decode(M));
          } catch (A) {
            console.warn('Invalid JSON in external plugin data', A.message);
          }
      } else
        p.schema === r.ExternalPluginAdapterSchema.MsgPack &&
          (M.length === 0 ? (D = null) : (D = (0, t.decode)(M)));
      return D;
    }
    throw new Error('Invalid DataStore, missing dataOffset or dataLen');
  }
  return (L.parseExternalPluginAdapterData = v), L;
}
var ne = {},
  bo;
function fu() {
  if (bo) return ne;
  (bo = 1),
    Object.defineProperty(ne, '__esModule', { value: !0 }),
    (ne.appDataManifest =
      ne.appDataFromBase =
      ne.appDataUpdateInfoArgsToBase =
      ne.appDataInitInfoArgsToBase =
        void 0);
  const e = Wi(),
    t = N;
  function r(a) {
    return {
      dataAuthority: (0, t.pluginAuthorityToBase)(a.dataAuthority),
      initPluginAuthority: a.initPluginAuthority
        ? (0, t.pluginAuthorityToBase)(a.initPluginAuthority)
        : null,
      schema: a.schema ?? null,
    };
  }
  ne.appDataInitInfoArgsToBase = r;
  function i(a) {
    return { schema: a.schema ?? null };
  }
  ne.appDataUpdateInfoArgsToBase = i;
  function n(a, s, o) {
    return {
      ...a,
      dataAuthority: (0, t.pluginAuthorityFromBase)(a.dataAuthority),
      data: (0, e.parseExternalPluginAdapterData)(a, s, o),
    };
  }
  return (
    (ne.appDataFromBase = n),
    (ne.appDataManifest = { type: 'AppData', fromBase: n, initToBase: r, updateToBase: i }),
    ne
  );
}
var xn = {},
  So;
function jr() {
  return (
    So ||
      ((So = 1),
      (function (e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.lifecycleChecksFromBase =
            e.lifecycleChecksToBase =
            e.hookableLifecycleEventToLifecycleCheckKey =
            e.lifecycleCheckKeyToEnum =
            e.checkResultsToAdapterCheckResult =
            e.adapterCheckResultToCheckResults =
            e.CheckResult =
              void 0);
        const t = R(),
          r = F;
        var i;
        (function (l) {
          (l[(l.CAN_LISTEN = 0)] = 'CAN_LISTEN'),
            (l[(l.CAN_APPROVE = 1)] = 'CAN_APPROVE'),
            (l[(l.CAN_REJECT = 2)] = 'CAN_REJECT');
        })((i = e.CheckResult || (e.CheckResult = {})));
        const n = (l) => {
          const c = [];
          return (
            l.flags & 1 && c.push(i.CAN_LISTEN),
            l.flags & 2 && c.push(i.CAN_APPROVE),
            l.flags & 4 && c.push(i.CAN_REJECT),
            c
          );
        };
        e.adapterCheckResultToCheckResults = n;
        const a = (l) => {
          let c = 0;
          return (
            l.forEach((f) => {
              switch (f) {
                case i.CAN_LISTEN:
                  c |= 1;
                  break;
                case i.CAN_APPROVE:
                  c |= 2;
                  break;
                case i.CAN_REJECT:
                  c |= 4;
                  break;
              }
            }),
            { flags: c }
          );
        };
        e.checkResultsToAdapterCheckResult = a;
        function s(l) {
          return t.HookableLifecycleEvent[(0, r.capitalizeFirstLetter)(l)];
        }
        e.lifecycleCheckKeyToEnum = s;
        function o(l) {
          return t.HookableLifecycleEvent[l].toLowerCase();
        }
        e.hookableLifecycleEventToLifecycleCheckKey = o;
        function d(l) {
          return Object.keys(l)
            .map((c) => {
              const f = c,
                g = l[f];
              return g ? [s(f), (0, e.checkResultsToAdapterCheckResult)(g)] : null;
            })
            .filter((c) => c !== null);
        }
        e.lifecycleChecksToBase = d;
        function u(l) {
          const c = {};
          return (
            l.forEach(([f, g]) => {
              c[o(f)] = (0, e.adapterCheckResultToCheckResults)(g);
            }),
            c
          );
        }
        e.lifecycleChecksFromBase = u;
      })(xn)),
    xn
  );
}
var ae = {},
  Xt = {},
  Ye = {};
Object.defineProperty(Ye, '__esModule', { value: !0 });
Ye.seedFromBase = Ye.seedToBase = void 0;
function ky(e) {
  return e.type === 'Address'
    ? { __kind: 'Address', fields: [e.pubkey] }
    : e.type === 'Bytes'
      ? { __kind: 'Bytes', fields: [e.bytes] }
      : { __kind: e.type };
}
Ye.seedToBase = ky;
function Oy(e) {
  return e.__kind === 'Address'
    ? { type: 'Address', pubkey: e.fields[0] }
    : e.__kind === 'Bytes'
      ? { type: 'Bytes', bytes: e.fields[0] }
      : { type: e.__kind };
}
Ye.seedFromBase = Oy;
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getExtraAccountRequiredInputs =
      e.extraAccountFromBase =
      e.extraAccountToBase =
      e.extraAccountToAccountMeta =
      e.findPreconfiguredPda =
      e.PRECONFIGURED_SEED =
        void 0);
  const t = y,
    r = Ye,
    i = F;
  e.PRECONFIGURED_SEED = 'mpl-core';
  const n = (l, c, f) =>
    l.eddsa.findPda(c, [
      (0, t.string)({ size: 'variable' }).serialize(e.PRECONFIGURED_SEED),
      (0, t.publicKey)().serialize(f),
    ]);
  e.findPreconfiguredPda = n;
  function a(l, c, f) {
    const g = { isSigner: c.isSigner || !1, isWritable: c.isWritable || !1 },
      m = u(c),
      P = [];
    if (
      (m.forEach((v) => {
        f[v] || P.push(v);
      }),
      P.length)
    )
      throw new Error(`Missing required inputs to derive account address: ${P.join(', ')}`);
    switch (c.type) {
      case 'PreconfiguredProgram':
        return {
          ...g,
          pubkey: l.eddsa.findPda(f.program, [
            (0, t.string)({ size: 'variable' }).serialize(e.PRECONFIGURED_SEED),
          ])[0],
        };
      case 'PreconfiguredCollection':
        return { ...g, pubkey: (0, e.findPreconfiguredPda)(l, f.program, f.collection)[0] };
      case 'PreconfiguredOwner':
        return { ...g, pubkey: (0, e.findPreconfiguredPda)(l, f.program, f.owner)[0] };
      case 'PreconfiguredRecipient':
        return { ...g, pubkey: (0, e.findPreconfiguredPda)(l, f.program, f.recipient)[0] };
      case 'PreconfiguredAsset':
        return { ...g, pubkey: (0, e.findPreconfiguredPda)(l, f.program, f.asset)[0] };
      case 'CustomPda':
        return {
          pubkey: l.eddsa.findPda(
            c.customProgramId ? c.customProgramId : f.program,
            c.seeds.map((v) => {
              switch (v.type) {
                case 'Collection':
                  return (0, t.publicKey)().serialize(f.collection);
                case 'Owner':
                  return (0, t.publicKey)().serialize(f.owner);
                case 'Recipient':
                  return (0, t.publicKey)().serialize(f.recipient);
                case 'Asset':
                  return (0, t.publicKey)().serialize(f.asset);
                case 'Address':
                  return (0, t.publicKey)().serialize(v.pubkey);
                case 'Bytes':
                  return v.bytes;
                default:
                  throw new Error('Unknown seed type');
              }
            })
          )[0],
          ...g,
        };
      case 'Address':
        return { ...g, pubkey: c.address };
      default:
        throw new Error('Unknown extra account type');
    }
  }
  e.extraAccountToAccountMeta = a;
  function s(l) {
    const c = { isSigner: l.isSigner || !1, isWritable: l.isWritable || !1 };
    return l.type === 'CustomPda'
      ? {
          __kind: 'CustomPda',
          ...c,
          seeds: l.seeds.map(r.seedToBase),
          customProgramId: (0, i.someOrNone)(l.customProgramId),
        }
      : l.type === 'Address'
        ? { __kind: 'Address', ...c, address: l.address }
        : { __kind: l.type, ...c };
  }
  e.extraAccountToBase = s;
  function o(l) {
    return l.__kind === 'CustomPda'
      ? {
          type: 'CustomPda',
          isSigner: l.isSigner,
          isWritable: l.isWritable,
          seeds: l.seeds.map(r.seedFromBase),
          customProgramId: (0, i.unwrapOption)(l.customProgramId),
        }
      : l.__kind === 'Address'
        ? { type: 'Address', isSigner: l.isSigner, isWritable: l.isWritable, address: l.address }
        : { type: l.__kind, isSigner: l.isSigner, isWritable: l.isWritable };
  }
  e.extraAccountFromBase = o;
  const d = {
    PreconfiguredOwner: 'owner',
    PreconfiguredRecipient: 'recipient',
    PreconfiguredAsset: 'asset',
    PreconfiguredCollection: 'collection',
    PreconfiguredProgram: 'program',
  };
  function u(l) {
    const c = d[l.type];
    return c
      ? [c]
      : l.type === 'CustomPda'
        ? l.seeds
            .map((f) => {
              switch (f.type) {
                case 'Collection':
                  return 'collection';
                case 'Owner':
                  return 'owner';
                case 'Recipient':
                  return 'recipient';
                case 'Asset':
                  return 'asset';
                default:
                  return null;
              }
            })
            .filter((f) => f)
        : [];
  }
  e.getExtraAccountRequiredInputs = u;
})(Xt);
var _o;
function Dy() {
  if (_o) return ae;
  (_o = 1),
    Object.defineProperty(ae, '__esModule', { value: !0 }),
    (ae.lifecycleHookManifest =
      ae.lifecycleHookFromBase =
      ae.lifecycleHookUpdateInfoArgsToBase =
      ae.lifecycleHookInitInfoArgsToBase =
        void 0);
  const e = Xt,
    t = jr(),
    r = N,
    i = Wi();
  function n(o) {
    return {
      extraAccounts: o.extraAccounts ? o.extraAccounts.map(e.extraAccountToBase) : null,
      hookedProgram: o.hookedProgram,
      initPluginAuthority: o.initPluginAuthority
        ? (0, r.pluginAuthorityToBase)(o.initPluginAuthority)
        : null,
      lifecycleChecks: (0, t.lifecycleChecksToBase)(o.lifecycleChecks),
      schema: o.schema ?? null,
      dataAuthority: o.dataAuthority ? (0, r.pluginAuthorityToBase)(o.dataAuthority) : null,
    };
  }
  ae.lifecycleHookInitInfoArgsToBase = n;
  function a(o) {
    return {
      lifecycleChecks: o.lifecycleChecks ? (0, t.lifecycleChecksToBase)(o.lifecycleChecks) : null,
      extraAccounts: o.extraAccounts ? o.extraAccounts.map(e.extraAccountToBase) : null,
      schema: o.schema ?? null,
    };
  }
  ae.lifecycleHookUpdateInfoArgsToBase = a;
  function s(o, d, u) {
    return {
      ...o,
      extraAccounts:
        o.extraAccounts.__option === 'Some'
          ? o.extraAccounts.value.map(e.extraAccountFromBase)
          : void 0,
      data: (0, i.parseExternalPluginAdapterData)(o, d, u),
      dataAuthority:
        o.dataAuthority.__option === 'Some'
          ? (0, r.pluginAuthorityFromBase)(o.dataAuthority.value)
          : void 0,
    };
  }
  return (
    (ae.lifecycleHookFromBase = s),
    (ae.lifecycleHookManifest = {
      type: 'LifecycleHook',
      fromBase: s,
      initToBase: n,
      updateToBase: a,
    }),
    ae
  );
}
var Z = {},
  Je = {};
Object.defineProperty(Je, '__esModule', { value: !0 });
Je.validationResultsOffsetFromBase = Je.validationResultsOffsetToBase = void 0;
function Vy(e) {
  return e.type === 'Custom' ? { __kind: 'Custom', fields: [e.offset] } : { __kind: e.type };
}
Je.validationResultsOffsetToBase = Vy;
function Ty(e) {
  return e.__kind === 'Custom' ? { type: 'Custom', offset: e.fields[0] } : { type: e.__kind };
}
Je.validationResultsOffsetFromBase = Ty;
var zo;
function gu() {
  if (zo) return Z;
  (zo = 1),
    Object.defineProperty(Z, '__esModule', { value: !0 }),
    (Z.oracleManifest =
      Z.deserializeOracleValidation =
      Z.findOracleAccount =
      Z.oracleFromBase =
      Z.oracleUpdateInfoArgsToBase =
      Z.oracleInitInfoArgsToBase =
        void 0);
  const e = Xt,
    t = R(),
    r = jr(),
    i = N,
    n = Je;
  function a(l) {
    return {
      baseAddress: l.baseAddress,
      baseAddressConfig: l.baseAddressConfig
        ? (0, e.extraAccountToBase)(l.baseAddressConfig)
        : null,
      lifecycleChecks: (0, r.lifecycleChecksToBase)(l.lifecycleChecks),
      initPluginAuthority: l.initPluginAuthority
        ? (0, i.pluginAuthorityToBase)(l.initPluginAuthority)
        : null,
      resultsOffset: l.resultsOffset ? (0, n.validationResultsOffsetToBase)(l.resultsOffset) : null,
    };
  }
  Z.oracleInitInfoArgsToBase = a;
  function s(l) {
    return {
      baseAddressConfig: l.baseAddressConfig
        ? (0, e.extraAccountToBase)(l.baseAddressConfig)
        : null,
      lifecycleChecks: l.lifecycleChecks ? (0, r.lifecycleChecksToBase)(l.lifecycleChecks) : null,
      resultsOffset: l.resultsOffset ? (0, n.validationResultsOffsetToBase)(l.resultsOffset) : null,
    };
  }
  Z.oracleUpdateInfoArgsToBase = s;
  function o(l, c, f) {
    return {
      ...l,
      baseAddressConfig:
        l.baseAddressConfig.__option === 'Some'
          ? (0, e.extraAccountFromBase)(l.baseAddressConfig.value)
          : void 0,
      resultsOffset: (0, n.validationResultsOffsetFromBase)(l.resultsOffset),
    };
  }
  Z.oracleFromBase = o;
  function d(l, c, f) {
    return c.baseAddressConfig
      ? (0, e.extraAccountToAccountMeta)(l, c.baseAddressConfig, { ...f, program: c.baseAddress })
          .pubkey
      : c.baseAddress;
  }
  Z.findOracleAccount = d;
  function u(l, c) {
    let f = 0;
    return (
      c.type === 'Custom' ? (f = Number(c.offset)) : c.type === 'Anchor' && (f = 8),
      (0, t.getOracleValidationSerializer)().deserialize(l, f)[0]
    );
  }
  return (
    (Z.deserializeOracleValidation = u),
    (Z.oracleManifest = { type: 'Oracle', fromBase: o, initToBase: a, updateToBase: s }),
    Z
  );
}
var qr = {},
  Le = {};
Object.defineProperty(Le, '__esModule', { value: !0 });
Le.linkedDataKeyFromBase = Le.linkedDataKeyToBase = void 0;
const pu = N;
function Ry(e) {
  switch (e.type) {
    case 'LinkedLifecycleHook':
      return { __kind: e.type, fields: [e.hookedProgram] };
    case 'LinkedAppData':
      return { __kind: e.type, fields: [(0, pu.pluginAuthorityToBase)(e.dataAuthority)] };
    default:
      throw new Error('Unknown LinkedDataKey type');
  }
}
Le.linkedDataKeyToBase = Ry;
function My(e) {
  switch (e.__kind) {
    case 'LinkedLifecycleHook':
      return { type: e.__kind, hookedProgram: e.fields[0] };
    case 'LinkedAppData':
      return { type: e.__kind, dataAuthority: (0, pu.pluginAuthorityFromBase)(e.fields[0]) };
    default:
      throw new Error('Unknown LinkedDataKey type');
  }
}
Le.linkedDataKeyFromBase = My;
Object.defineProperty(qr, '__esModule', { value: !0 });
qr.externalPluginAdapterKeyToBase = void 0;
const Uy = N,
  $y = Le;
function Ly(e) {
  switch (e.type) {
    case 'Oracle':
      return { __kind: e.type, fields: [e.baseAddress] };
    case 'AppData':
    case 'LinkedAppData':
      return { __kind: e.type, fields: [(0, Uy.pluginAuthorityToBase)(e.dataAuthority)] };
    case 'LifecycleHook':
      return { __kind: e.type, fields: [e.hookedProgram] };
    case 'DataSection':
      return { __kind: e.type, fields: [(0, $y.linkedDataKeyToBase)(e.parentKey)] };
    default:
      throw new Error('Unknown ExternalPluginAdapterKey type');
  }
}
qr.externalPluginAdapterKeyToBase = Ly;
var yu = {};
Object.defineProperty(yu, '__esModule', { value: !0 });
var Bn = {},
  Eo;
function Ky() {
  return (
    Eo ||
      ((Eo = 1),
      (function (e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.ruleSet = e.updateAuthority = e.pluginAuthority = void 0);
        const t = R();
        Object.defineProperty(e, 'pluginAuthority', {
          enumerable: !0,
          get: function () {
            return t.basePluginAuthority;
          },
        }),
          Object.defineProperty(e, 'updateAuthority', {
            enumerable: !0,
            get: function () {
              return t.baseUpdateAuthority;
            },
          }),
          Object.defineProperty(e, 'ruleSet', {
            enumerable: !0,
            get: function () {
              return t.baseRuleSet;
            },
          });
      })(Bn)),
    Bn
  );
}
var Cn = {},
  ue = {};
Object.defineProperty(ue, '__esModule', { value: !0 });
ue.linkedAppDataManifest =
  ue.linkedAppDataFromBase =
  ue.linkedAppDataUpdateInfoArgsToBase =
  ue.linkedAppDataInitInfoArgsToBase =
    void 0;
const ra = N;
function hu(e) {
  return {
    dataAuthority: (0, ra.pluginAuthorityToBase)(e.dataAuthority),
    initPluginAuthority: e.initPluginAuthority
      ? (0, ra.pluginAuthorityToBase)(e.initPluginAuthority)
      : null,
    schema: e.schema ?? null,
  };
}
ue.linkedAppDataInitInfoArgsToBase = hu;
function mu(e) {
  return { schema: e.schema ?? null };
}
ue.linkedAppDataUpdateInfoArgsToBase = mu;
function Au(e, t, r) {
  return { ...e, dataAuthority: (0, ra.pluginAuthorityFromBase)(e.dataAuthority) };
}
ue.linkedAppDataFromBase = Au;
ue.linkedAppDataManifest = {
  type: 'LinkedAppData',
  fromBase: Au,
  initToBase: hu,
  updateToBase: mu,
};
var se = {},
  wo;
function vu() {
  if (wo) return se;
  (wo = 1),
    Object.defineProperty(se, '__esModule', { value: !0 }),
    (se.dataSectionManifest =
      se.dataSectionFromBase =
      se.dataSectionUpdateInfoArgsToBase =
      se.dataSectionInitInfoArgsToBase =
        void 0);
  const e = Wi(),
    t = Le,
    r = N;
  function i(s) {
    return { parentKey: (0, t.linkedDataKeyToBase)(s.parentKey), schema: s.schema };
  }
  se.dataSectionInitInfoArgsToBase = i;
  function n(s) {
    return {};
  }
  se.dataSectionUpdateInfoArgsToBase = n;
  function a(s, o, d) {
    return {
      ...s,
      parentKey: (0, t.linkedDataKeyFromBase)(s.parentKey),
      dataAuthority:
        s.parentKey.__kind !== 'LinkedLifecycleHook'
          ? (0, r.pluginAuthorityFromBase)(s.parentKey.fields[0])
          : void 0,
      data: (0, e.parseExternalPluginAdapterData)(s, o, d),
    };
  }
  return (
    (se.dataSectionFromBase = a),
    (se.dataSectionManifest = { type: 'DataSection', fromBase: a, initToBase: i, updateToBase: n }),
    se
  );
}
var oe = {},
  xo;
function Pu() {
  if (xo) return oe;
  (xo = 1),
    Object.defineProperty(oe, '__esModule', { value: !0 }),
    (oe.linkedLifecycleHookManifest =
      oe.linkedLifecycleHookFromBase =
      oe.linkedLifecycleHookUpdateInfoArgsToBase =
      oe.linkedLifecycleHookInitInfoArgsToBase =
        void 0);
  const e = Xt,
    t = jr(),
    r = N;
  function i(s) {
    return {
      extraAccounts: s.extraAccounts ? s.extraAccounts.map(e.extraAccountToBase) : null,
      hookedProgram: s.hookedProgram,
      initPluginAuthority: s.initPluginAuthority
        ? (0, r.pluginAuthorityToBase)(s.initPluginAuthority)
        : null,
      lifecycleChecks: (0, t.lifecycleChecksToBase)(s.lifecycleChecks),
      schema: s.schema ? s.schema : null,
      dataAuthority: s.dataAuthority ? (0, r.pluginAuthorityToBase)(s.dataAuthority) : null,
    };
  }
  oe.linkedLifecycleHookInitInfoArgsToBase = i;
  function n(s) {
    return {
      lifecycleChecks: s.lifecycleChecks ? (0, t.lifecycleChecksToBase)(s.lifecycleChecks) : null,
      extraAccounts: s.extraAccounts ? s.extraAccounts.map(e.extraAccountToBase) : null,
      schema: s.schema ?? null,
    };
  }
  oe.linkedLifecycleHookUpdateInfoArgsToBase = n;
  function a(s, o, d) {
    return {
      ...s,
      extraAccounts:
        s.extraAccounts.__option === 'Some'
          ? s.extraAccounts.value.map(e.extraAccountFromBase)
          : void 0,
      dataAuthority:
        s.dataAuthority.__option === 'Some'
          ? (0, r.pluginAuthorityFromBase)(s.dataAuthority.value)
          : void 0,
    };
  }
  return (
    (oe.linkedLifecycleHookFromBase = a),
    (oe.linkedLifecycleHookManifest = {
      type: 'LinkedLifecycleHook',
      fromBase: a,
      initToBase: i,
      updateToBase: n,
    }),
    oe
  );
}
var Bo;
function Gt() {
  return (
    Bo ||
      ((Bo = 1),
      (function (e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.findExtraAccounts =
            e.createExternalPluginAdapterUpdateInfo =
            e.createExternalPluginAdapterInitInfo =
            e.isExternalPluginAdapterType =
            e.externalRegistryRecordsToExternalPluginAdapterList =
            e.externalPluginAdapterManifests =
              void 0);
        const t = $(),
          r = R(),
          i = fu(),
          n = jr(),
          a = gu(),
          s = Xt,
          o = ue,
          d = vu(),
          u = Pu();
        e.externalPluginAdapterManifests = {
          LifecycleHook: t.lifecycleHookManifest,
          Oracle: a.oracleManifest,
          AppData: i.appDataManifest,
          LinkedLifecycleHook: u.linkedLifecycleHookManifest,
          LinkedAppData: o.linkedAppDataManifest,
          DataSection: d.dataSectionManifest,
        };
        function l(P, v) {
          const p = {};
          return (
            P.forEach((b) => {
              const z = (0, r.getExternalPluginAdapterSerializer)().deserialize(
                  v,
                  Number(b.offset)
                )[0],
                D = {
                  lifecycleChecks:
                    b.lifecycleChecks.__option === 'Some'
                      ? (0, n.lifecycleChecksFromBase)(b.lifecycleChecks.value)
                      : void 0,
                  authority: (0, t.pluginAuthorityFromBase)(b.authority),
                  offset: b.offset,
                };
              z.__kind === 'LifecycleHook'
                ? (p.lifecycleHooks || (p.lifecycleHooks = []),
                  p.lifecycleHooks.push({
                    type: 'LifecycleHook',
                    ...D,
                    ...(0, t.lifecycleHookFromBase)(z.fields[0], b, v),
                  }))
                : z.__kind === 'AppData'
                  ? (p.appDatas || (p.appDatas = []),
                    p.appDatas.push({
                      type: 'AppData',
                      ...D,
                      ...(0, i.appDataFromBase)(z.fields[0], b, v),
                    }))
                  : z.__kind === 'Oracle'
                    ? (p.oracles || (p.oracles = []),
                      p.oracles.push({
                        type: 'Oracle',
                        ...D,
                        ...(0, a.oracleFromBase)(z.fields[0], b, v),
                      }))
                    : z.__kind === 'LinkedLifecycleHook'
                      ? (p.linkedLifecycleHooks || (p.linkedLifecycleHooks = []),
                        p.linkedLifecycleHooks.push({
                          type: 'LinkedLifecycleHook',
                          ...D,
                          ...(0, u.linkedLifecycleHookFromBase)(z.fields[0], b, v),
                        }))
                      : z.__kind === 'LinkedAppData'
                        ? (p.linkedAppDatas || (p.linkedAppDatas = []),
                          p.linkedAppDatas.push({
                            type: 'LinkedAppData',
                            ...D,
                            ...(0, o.linkedAppDataFromBase)(z.fields[0], b, v),
                          }))
                        : z.__kind === 'DataSection' &&
                          (p.dataSections || (p.dataSections = []),
                          p.dataSections.push({
                            type: 'DataSection',
                            ...D,
                            ...(0, d.dataSectionFromBase)(z.fields[0], b, v),
                          }));
            }),
            p
          );
        }
        e.externalRegistryRecordsToExternalPluginAdapterList = l;
        const c = (P) =>
          P.type === 'LifecycleHook' ||
          P.type === 'Oracle' ||
          P.type === 'AppData' ||
          P.type === 'LinkedLifecycleHook' ||
          P.type === 'DataSection' ||
          P.type === 'LinkedAppData';
        e.isExternalPluginAdapterType = c;
        function f({ type: P, ...v }) {
          const p = e.externalPluginAdapterManifests[P];
          return { __kind: P, fields: [p.initToBase(v)] };
        }
        e.createExternalPluginAdapterInitInfo = f;
        function g({ type: P, ...v }) {
          const p = e.externalPluginAdapterManifests[P];
          return { __kind: P, fields: [p.updateToBase(v)] };
        }
        e.createExternalPluginAdapterUpdateInfo = g;
        const m = (P, v, p, b) => {
          var D, M, A;
          const z = [];
          return (
            (D = p.oracles) == null ||
              D.forEach((_) => {
                var V;
                (V = _.lifecycleChecks) != null &&
                  V[v] &&
                  (_.baseAddressConfig
                    ? z.push(
                        (0, s.extraAccountToAccountMeta)(P, _.baseAddressConfig, {
                          ...b,
                          program: _.baseAddress,
                        })
                      )
                    : z.push({ pubkey: _.baseAddress, isSigner: !1, isWritable: !1 }));
              }),
            (M = p.lifecycleHooks) == null ||
              M.forEach((_) => {
                var V, B;
                (V = _.lifecycleChecks) != null &&
                  V[v] &&
                  (z.push({ pubkey: _.hookedProgram, isSigner: !1, isWritable: !1 }),
                  (B = _.extraAccounts) == null ||
                    B.forEach((T) => {
                      z.push(
                        (0, s.extraAccountToAccountMeta)(P, T, { ...b, program: _.hookedProgram })
                      );
                    }));
              }),
            (A = p.linkedLifecycleHooks) == null ||
              A.forEach((_) => {
                var V, B;
                (V = _.lifecycleChecks) != null &&
                  V[v] &&
                  (z.push({ pubkey: _.hookedProgram, isSigner: !1, isWritable: !1 }),
                  (B = _.extraAccounts) == null ||
                    B.forEach((T) => {
                      z.push(
                        (0, s.extraAccountToAccountMeta)(P, T, { ...b, program: _.hookedProgram })
                      );
                    }));
              }),
            z
          );
        };
        e.findExtraAccounts = m;
      })(Cn)),
    Cn
  );
}
var Hi = {};
Object.defineProperty(Hi, '__esModule', { value: !0 });
Hi.updateAuthorityToBase = void 0;
function Wy(e) {
  return e.type === 'None' ? { __kind: 'None' } : { __kind: e.type, fields: [e.address] };
}
Hi.updateAuthorityToBase = Wy;
var Co;
function $() {
  return (
    Co ||
      ((Co = 1),
      (function (e) {
        var t =
            (C && C.__createBinding) ||
            (Object.create
              ? function (i, n, a, s) {
                  s === void 0 && (s = a);
                  var o = Object.getOwnPropertyDescriptor(n, a);
                  (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return n[a];
                      },
                    }),
                    Object.defineProperty(i, s, o);
                }
              : function (i, n, a, s) {
                  s === void 0 && (s = a), (i[s] = n[a]);
                }),
          r =
            (C && C.__exportStar) ||
            function (i, n) {
              for (var a in i)
                a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
            };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          r(we, e),
          r(Wi(), e),
          r(fu(), e),
          r(jr(), e),
          r(Dy(), e),
          r(gu(), e),
          r(qr, e),
          r(yu, e),
          r(N, e),
          r(Ky(), e),
          r(Gt(), e),
          r(Hi, e),
          r(Ye, e),
          r(Xt, e),
          r(Je, e),
          r(Pu(), e),
          r(ue, e),
          r(vu(), e),
          r(Le, e),
          r(Ge, e);
      })(zn)),
    zn
  );
}
var be = {},
  Io;
function Ca() {
  if (Io) return be;
  (Io = 1),
    Object.defineProperty(be, '__esModule', { value: !0 }),
    (be.getPluginRegistryV1AccountDataSerializer =
      be.getAdapterRegistryRecordSerializer =
      be.getRegistryRecordSerializer =
        void 0);
  const e = y,
    t = R();
  function r() {
    return {
      description: 'RegistryRecordWithUnknown',
      fixedSize: null,
      maxSize: null,
      serialize: () => {
        throw new Error('Operation not supported.');
      },
      deserialize: (a, s = 0) => {
        let [o, d, u] = [t.PluginType.Attributes, s + 1, !0];
        try {
          ([o, d] = (0, t.getPluginTypeSerializer)().deserialize(a, s)), (u = !1);
        } catch {}
        const [l, c] = (0, t.getBasePluginAuthoritySerializer)().deserialize(a, d),
          [f, g] = (0, e.u64)().deserialize(a, c);
        return [{ pluginType: o, authority: l, offset: f, isUnknown: u }, g];
      },
    };
  }
  be.getRegistryRecordSerializer = r;
  function i() {
    return {
      description: 'AdapterRegistryRecordWithUnknown',
      fixedSize: null,
      maxSize: null,
      serialize: () => {
        throw new Error('Operation not supported.');
      },
      deserialize: (a, s = 0) => {
        let [o, d, u] = [t.ExternalPluginAdapterType.AppData, s + 1, !0];
        try {
          ([o, d] = (0, t.getExternalPluginAdapterTypeSerializer)().deserialize(a, s)), (u = !1);
        } catch {}
        const [l, c] = (0, t.getBasePluginAuthoritySerializer)().deserialize(a, d),
          [f, g] = (0, e.option)(
            (0, e.array)(
              (0, e.tuple)([
                (0, t.getHookableLifecycleEventSerializer)(),
                (0, t.getExternalCheckResultSerializer)(),
              ])
            )
          ).deserialize(a, c),
          [m, P] = (0, e.u64)().deserialize(a, g),
          [v, p] = (0, e.option)((0, e.u64)()).deserialize(a, P),
          [b, z] = (0, e.option)((0, e.u64)()).deserialize(a, p);
        return [
          {
            pluginType: o,
            authority: l,
            lifecycleChecks: f,
            offset: m,
            isUnknown: u,
            dataOffset: v,
            dataLen: b,
          },
          z,
        ];
      },
    };
  }
  be.getAdapterRegistryRecordSerializer = i;
  function n() {
    return {
      description: 'PluginRegistryV1AccountData',
      fixedSize: null,
      maxSize: null,
      serialize: () => {
        throw new Error('Operation not supported.');
      },
      deserialize: (a, s = 0) => {
        const [o, d] = (0, t.getKeySerializer)().deserialize(a, s);
        if (o !== t.Key.PluginRegistryV1)
          throw new Error(`Expected a PluginRegistryV1 account, got key: ${o}`);
        const [u, l] = (0, e.array)(r()).deserialize(a, d),
          [c, f] = (0, e.array)(i()).deserialize(a, l);
        return [
          {
            key: o,
            registry: u.filter((g) => !g.isUnknown),
            externalRegistry: c.filter((g) => !g.isUnknown),
          },
          f,
        ];
      },
    };
  }
  return (be.getPluginRegistryV1AccountDataSerializer = n), be;
}
var ko;
function Hy() {
  if (ko) return er;
  (ko = 1),
    Object.defineProperty(er, '__esModule', { value: !0 }),
    (er.getAssetV1AccountDataSerializer = void 0);
  const e = R(),
    t = _i,
    r = $(),
    i = Ca(),
    n = Gt(),
    a = () => ({
      description: 'AssetAccountData',
      fixedSize: null,
      maxSize: null,
      serialize: () => {
        throw new Error('Operation not supported.');
      },
      deserialize: (s, o = 0) => {
        const [d, u] = (0, t.getAssetV1AccountDataSerializer)().deserialize(s, o);
        if (d.key !== e.Key.AssetV1)
          throw new Error(`Expected an Asset account, got key: ${d.key}`);
        let l,
          c,
          f,
          g,
          m = u;
        s.length !== u &&
          (([l] = (0, e.getPluginHeaderV1AccountDataSerializer)().deserialize(s, u)),
          ([c, m] = (0, i.getPluginRegistryV1AccountDataSerializer)().deserialize(
            s,
            Number(l.pluginRegistryOffset)
          )),
          (f = (0, r.registryRecordsToPluginsList)(c.registry, s)),
          (g = (0, n.externalRegistryRecordsToExternalPluginAdapterList)(c.externalRegistry, s)));
        const P = {
          type: d.updateAuthority.__kind,
          address: d.updateAuthority.__kind === 'None' ? void 0 : d.updateAuthority.fields[0],
        };
        return [{ pluginHeader: l, ...f, ...g, ...d, updateAuthority: P }, m];
      },
    });
  return (er.getAssetV1AccountDataSerializer = a), er;
}
var Cr = {},
  Ni = {};
Object.defineProperty(Ni, '__esModule', { value: !0 });
Ni.getCollectionV1AccountDataSerializer = void 0;
const st = y,
  Ny = S();
function Fy() {
  return (0, st.struct)(
    [
      ['key', (0, Ny.getKeySerializer)()],
      ['updateAuthority', (0, st.publicKey)()],
      ['name', (0, st.string)()],
      ['uri', (0, st.string)()],
      ['numMinted', (0, st.u32)()],
      ['currentSize', (0, st.u32)()],
    ],
    { description: 'CollectionV1AccountData' }
  );
}
Ni.getCollectionV1AccountDataSerializer = Fy;
var Oo;
function jy() {
  if (Oo) return Cr;
  (Oo = 1),
    Object.defineProperty(Cr, '__esModule', { value: !0 }),
    (Cr.getCollectionV1AccountDataSerializer = void 0);
  const e = R(),
    t = Ni,
    r = $(),
    i = Ca(),
    n = () => ({
      description: 'CollectionAccountData',
      fixedSize: null,
      maxSize: null,
      serialize: () => {
        throw new Error('Operation not supported.');
      },
      deserialize: (a, s = 0) => {
        const [o, d] = (0, t.getCollectionV1AccountDataSerializer)().deserialize(a, s);
        if (o.key !== e.Key.CollectionV1)
          throw new Error(`Expected an Collection account, got key: ${o.key}`);
        let u,
          l,
          c,
          f,
          g = d;
        return (
          a.length !== d &&
            (([u] = (0, e.getPluginHeaderV1AccountDataSerializer)().deserialize(a, d)),
            ([l, g] = (0, i.getPluginRegistryV1AccountDataSerializer)().deserialize(
              a,
              Number(u.pluginRegistryOffset)
            )),
            (c = (0, r.registryRecordsToPluginsList)(l.registry, a)),
            (f = (0, r.externalRegistryRecordsToExternalPluginAdapterList)(l.externalRegistry, a))),
          [{ pluginHeader: u, ...c, ...f, ...o }, g]
        );
      },
    });
  return (Cr.getCollectionV1AccountDataSerializer = n), Cr;
}
var Do;
function Ia() {
  return (
    Do ||
      ((Do = 1),
      (function (e) {
        var t =
            (C && C.__createBinding) ||
            (Object.create
              ? function (i, n, a, s) {
                  s === void 0 && (s = a);
                  var o = Object.getOwnPropertyDescriptor(n, a);
                  (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return n[a];
                      },
                    }),
                    Object.defineProperty(i, s, o);
                }
              : function (i, n, a, s) {
                  s === void 0 && (s = a), (i[s] = n[a]);
                }),
          r =
            (C && C.__exportStar) ||
            function (i, n) {
              for (var a in i)
                a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
            };
        Object.defineProperty(e, '__esModule', { value: !0 }), r(Hy(), e), r(jy(), e), r(Ca(), e);
      })(mn)),
    mn
  );
}
var Vo;
function qy() {
  if (Vo) return q;
  (Vo = 1),
    Object.defineProperty(q, '__esModule', { value: !0 }),
    (q.getAssetV1GpaBuilder =
      q.safeFetchAllAssetV1 =
      q.fetchAllAssetV1 =
      q.safeFetchAssetV1 =
      q.fetchAssetV1 =
      q.deserializeAssetV1 =
        void 0);
  const e = E,
    t = y,
    r = Ia(),
    i = S();
  function n(l) {
    return (0, e.deserializeAccount)(l, (0, r.getAssetV1AccountDataSerializer)());
  }
  q.deserializeAssetV1 = n;
  async function a(l, c, f) {
    const g = await l.rpc.getAccount((0, e.publicKey)(c, !1), f);
    return (0, e.assertAccountExists)(g, 'AssetV1'), n(g);
  }
  q.fetchAssetV1 = a;
  async function s(l, c, f) {
    const g = await l.rpc.getAccount((0, e.publicKey)(c, !1), f);
    return g.exists ? n(g) : null;
  }
  q.safeFetchAssetV1 = s;
  async function o(l, c, f) {
    return (
      await l.rpc.getAccounts(
        c.map((m) => (0, e.publicKey)(m, !1)),
        f
      )
    ).map((m) => ((0, e.assertAccountExists)(m, 'AssetV1'), n(m)));
  }
  q.fetchAllAssetV1 = o;
  async function d(l, c, f) {
    return (
      await l.rpc.getAccounts(
        c.map((m) => (0, e.publicKey)(m, !1)),
        f
      )
    )
      .filter((m) => m.exists)
      .map((m) => n(m));
  }
  q.safeFetchAllAssetV1 = d;
  function u(l) {
    const c = l.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d');
    return (0, e.gpaBuilder)(l, c)
      .registerFields({
        key: [0, (0, i.getKeySerializer)()],
        owner: [1, (0, t.publicKey)()],
        updateAuthority: [33, (0, i.getBaseUpdateAuthoritySerializer)()],
        name: [null, (0, t.string)()],
        uri: [null, (0, t.string)()],
        seq: [null, (0, t.option)((0, t.u64)())],
      })
      .deserializeUsing((f) => n(f));
  }
  return (q.getAssetV1GpaBuilder = u), q;
}
var X = {},
  To;
function Zy() {
  if (To) return X;
  (To = 1),
    Object.defineProperty(X, '__esModule', { value: !0 }),
    (X.getCollectionV1GpaBuilder =
      X.safeFetchAllCollectionV1 =
      X.fetchAllCollectionV1 =
      X.safeFetchCollectionV1 =
      X.fetchCollectionV1 =
      X.deserializeCollectionV1 =
        void 0);
  const e = E,
    t = y,
    r = Ia(),
    i = S();
  function n(l) {
    return (0, e.deserializeAccount)(l, (0, r.getCollectionV1AccountDataSerializer)());
  }
  X.deserializeCollectionV1 = n;
  async function a(l, c, f) {
    const g = await l.rpc.getAccount((0, e.publicKey)(c, !1), f);
    return (0, e.assertAccountExists)(g, 'CollectionV1'), n(g);
  }
  X.fetchCollectionV1 = a;
  async function s(l, c, f) {
    const g = await l.rpc.getAccount((0, e.publicKey)(c, !1), f);
    return g.exists ? n(g) : null;
  }
  X.safeFetchCollectionV1 = s;
  async function o(l, c, f) {
    return (
      await l.rpc.getAccounts(
        c.map((m) => (0, e.publicKey)(m, !1)),
        f
      )
    ).map((m) => ((0, e.assertAccountExists)(m, 'CollectionV1'), n(m)));
  }
  X.fetchAllCollectionV1 = o;
  async function d(l, c, f) {
    return (
      await l.rpc.getAccounts(
        c.map((m) => (0, e.publicKey)(m, !1)),
        f
      )
    )
      .filter((m) => m.exists)
      .map((m) => n(m));
  }
  X.safeFetchAllCollectionV1 = d;
  function u(l) {
    const c = l.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d');
    return (0, e.gpaBuilder)(l, c)
      .registerFields({
        key: [0, (0, i.getKeySerializer)()],
        updateAuthority: [1, (0, t.publicKey)()],
        name: [33, (0, t.string)()],
        uri: [null, (0, t.string)()],
        numMinted: [null, (0, t.u32)()],
        currentSize: [null, (0, t.u32)()],
      })
      .deserializeUsing((f) => n(f));
  }
  return (X.getCollectionV1GpaBuilder = u), X;
}
var W = {};
Object.defineProperty(W, '__esModule', { value: !0 });
W.getHashedAssetV1Size =
  W.getHashedAssetV1GpaBuilder =
  W.safeFetchAllHashedAssetV1 =
  W.fetchAllHashedAssetV1 =
  W.safeFetchHashedAssetV1 =
  W.fetchHashedAssetV1 =
  W.deserializeHashedAssetV1 =
  W.getHashedAssetV1AccountDataSerializer =
    void 0;
const Ke = E,
  ia = y,
  bu = S();
function Su() {
  return (0, ia.struct)(
    [
      ['key', (0, bu.getKeySerializer)()],
      ['hash', (0, ia.bytes)({ size: 32 })],
    ],
    { description: 'HashedAssetV1AccountData' }
  );
}
W.getHashedAssetV1AccountDataSerializer = Su;
function Yt(e) {
  return (0, Ke.deserializeAccount)(e, Su());
}
W.deserializeHashedAssetV1 = Yt;
async function Xy(e, t, r) {
  const i = await e.rpc.getAccount((0, Ke.publicKey)(t, !1), r);
  return (0, Ke.assertAccountExists)(i, 'HashedAssetV1'), Yt(i);
}
W.fetchHashedAssetV1 = Xy;
async function Gy(e, t, r) {
  const i = await e.rpc.getAccount((0, Ke.publicKey)(t, !1), r);
  return i.exists ? Yt(i) : null;
}
W.safeFetchHashedAssetV1 = Gy;
async function Yy(e, t, r) {
  return (
    await e.rpc.getAccounts(
      t.map((n) => (0, Ke.publicKey)(n, !1)),
      r
    )
  ).map((n) => ((0, Ke.assertAccountExists)(n, 'HashedAssetV1'), Yt(n)));
}
W.fetchAllHashedAssetV1 = Yy;
async function Jy(e, t, r) {
  return (
    await e.rpc.getAccounts(
      t.map((n) => (0, Ke.publicKey)(n, !1)),
      r
    )
  )
    .filter((n) => n.exists)
    .map((n) => Yt(n));
}
W.safeFetchAllHashedAssetV1 = Jy;
function Qy(e) {
  const t = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d');
  return (0, Ke.gpaBuilder)(e, t)
    .registerFields({
      key: [0, (0, bu.getKeySerializer)()],
      hash: [1, (0, ia.bytes)({ size: 32 })],
    })
    .deserializeUsing((r) => Yt(r));
}
W.getHashedAssetV1GpaBuilder = Qy;
function eh() {
  return 33;
}
W.getHashedAssetV1Size = eh;
var H = {};
Object.defineProperty(H, '__esModule', { value: !0 });
H.getPluginHeaderV1Size =
  H.getPluginHeaderV1GpaBuilder =
  H.safeFetchAllPluginHeaderV1 =
  H.fetchAllPluginHeaderV1 =
  H.safeFetchPluginHeaderV1 =
  H.fetchPluginHeaderV1 =
  H.deserializePluginHeaderV1 =
  H.getPluginHeaderV1AccountDataSerializer =
    void 0;
const We = E,
  na = y,
  _u = S();
function zu() {
  return (0, na.struct)(
    [
      ['key', (0, _u.getKeySerializer)()],
      ['pluginRegistryOffset', (0, na.u64)()],
    ],
    { description: 'PluginHeaderV1AccountData' }
  );
}
H.getPluginHeaderV1AccountDataSerializer = zu;
function Jt(e) {
  return (0, We.deserializeAccount)(e, zu());
}
H.deserializePluginHeaderV1 = Jt;
async function th(e, t, r) {
  const i = await e.rpc.getAccount((0, We.publicKey)(t, !1), r);
  return (0, We.assertAccountExists)(i, 'PluginHeaderV1'), Jt(i);
}
H.fetchPluginHeaderV1 = th;
async function rh(e, t, r) {
  const i = await e.rpc.getAccount((0, We.publicKey)(t, !1), r);
  return i.exists ? Jt(i) : null;
}
H.safeFetchPluginHeaderV1 = rh;
async function ih(e, t, r) {
  return (
    await e.rpc.getAccounts(
      t.map((n) => (0, We.publicKey)(n, !1)),
      r
    )
  ).map((n) => ((0, We.assertAccountExists)(n, 'PluginHeaderV1'), Jt(n)));
}
H.fetchAllPluginHeaderV1 = ih;
async function nh(e, t, r) {
  return (
    await e.rpc.getAccounts(
      t.map((n) => (0, We.publicKey)(n, !1)),
      r
    )
  )
    .filter((n) => n.exists)
    .map((n) => Jt(n));
}
H.safeFetchAllPluginHeaderV1 = nh;
function ah(e) {
  const t = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d');
  return (0, We.gpaBuilder)(e, t)
    .registerFields({
      key: [0, (0, _u.getKeySerializer)()],
      pluginRegistryOffset: [1, (0, na.u64)()],
    })
    .deserializeUsing((r) => Jt(r));
}
H.getPluginHeaderV1GpaBuilder = ah;
function sh() {
  return 9;
}
H.getPluginHeaderV1Size = sh;
var G = {},
  Ro;
function oh() {
  if (Ro) return G;
  (Ro = 1),
    Object.defineProperty(G, '__esModule', { value: !0 }),
    (G.getPluginRegistryV1GpaBuilder =
      G.safeFetchAllPluginRegistryV1 =
      G.fetchAllPluginRegistryV1 =
      G.safeFetchPluginRegistryV1 =
      G.fetchPluginRegistryV1 =
      G.deserializePluginRegistryV1 =
        void 0);
  const e = E,
    t = y,
    r = Ia(),
    i = S();
  function n(l) {
    return (0, e.deserializeAccount)(l, (0, r.getPluginRegistryV1AccountDataSerializer)());
  }
  G.deserializePluginRegistryV1 = n;
  async function a(l, c, f) {
    const g = await l.rpc.getAccount((0, e.publicKey)(c, !1), f);
    return (0, e.assertAccountExists)(g, 'PluginRegistryV1'), n(g);
  }
  G.fetchPluginRegistryV1 = a;
  async function s(l, c, f) {
    const g = await l.rpc.getAccount((0, e.publicKey)(c, !1), f);
    return g.exists ? n(g) : null;
  }
  G.safeFetchPluginRegistryV1 = s;
  async function o(l, c, f) {
    return (
      await l.rpc.getAccounts(
        c.map((m) => (0, e.publicKey)(m, !1)),
        f
      )
    ).map((m) => ((0, e.assertAccountExists)(m, 'PluginRegistryV1'), n(m)));
  }
  G.fetchAllPluginRegistryV1 = o;
  async function d(l, c, f) {
    return (
      await l.rpc.getAccounts(
        c.map((m) => (0, e.publicKey)(m, !1)),
        f
      )
    )
      .filter((m) => m.exists)
      .map((m) => n(m));
  }
  G.safeFetchAllPluginRegistryV1 = d;
  function u(l) {
    const c = l.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d');
    return (0, e.gpaBuilder)(l, c)
      .registerFields({
        key: [0, (0, i.getKeySerializer)()],
        registry: [1, (0, t.array)((0, i.getRegistryRecordSerializer)())],
        externalRegistry: [null, (0, t.array)((0, i.getExternalRegistryRecordSerializer)())],
      })
      .deserializeUsing((f) => n(f));
  }
  return (G.getPluginRegistryV1GpaBuilder = u), G;
}
var Mo;
function lh() {
  return (
    Mo ||
      ((Mo = 1),
      (function (e) {
        var t =
            (C && C.__createBinding) ||
            (Object.create
              ? function (i, n, a, s) {
                  s === void 0 && (s = a);
                  var o = Object.getOwnPropertyDescriptor(n, a);
                  (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return n[a];
                      },
                    }),
                    Object.defineProperty(i, s, o);
                }
              : function (i, n, a, s) {
                  s === void 0 && (s = a), (i[s] = n[a]);
                }),
          r =
            (C && C.__exportStar) ||
            function (i, n) {
              for (var a in i)
                a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
            };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          r(qy(), e),
          r(Zy(), e),
          r(W, e),
          r(H, e),
          r(oh(), e);
      })(hn)),
    hn
  );
}
var ka = {},
  h = {};
Object.defineProperty(h, '__esModule', { value: !0 });
h.getMplCoreErrorFromName =
  h.getMplCoreErrorFromCode =
  h.CannotAddDataSectionError =
  h.InvalidPluginAdapterTargetError =
  h.NoDataSourcesError =
  h.UnsupportedOperationError =
  h.TwoDataSourcesError =
  h.CollectionMustBeEmptyError =
  h.InvalidPluginOperationError =
  h.MissingSignerError =
  h.UninitializedOracleAccountError =
  h.InvalidOracleAccountDataError =
  h.DuplicateLifecycleChecksError =
  h.RequiresLifecycleCheckError =
  h.OracleCanRejectOnlyError =
  h.MissingExternalPluginAdapterAccountError =
  h.MissingAssetError =
  h.ExternalPluginAdapterAlreadyExistsError =
  h.ExternalPluginAdapterNotFoundError =
  h.InvalidLogWrapperProgramError =
  h.ConflictingAuthorityError =
  h.InvalidPluginSettingError =
  h.CannotRedelegateError =
  h.NoApprovalsError =
  h.MissingCollectionError =
  h.InvalidAssetError =
  h.NotAvailableError =
  h.MissingSystemProgramError =
  h.MissingNewOwnerError =
  h.MissingUpdateAuthorityError =
  h.InvalidCollectionError =
  h.AlreadyDecompressedError =
  h.AlreadyCompressedError =
  h.NumericalOverflowErrorError =
  h.PluginAlreadyExistsError =
  h.CannotBurnCollectionError =
  h.CannotMigratePrintsError =
  h.CannotMigrateMasterWithSupplyError =
  h.MissingCompressionProofError =
  h.AssetIsFrozenError =
  h.InvalidAuthorityError =
  h.InvalidPluginError =
  h.IncorrectAssetHashError =
  h.IncorrectAccountError =
  h.NumericalOverflowError =
  h.PluginNotFoundError =
  h.PluginsNotInitializedError =
  h.SerializationErrorError =
  h.DeserializationErrorError =
  h.InvalidSystemProgramError =
    void 0;
const I = E,
  w = new Map(),
  x = new Map();
class Oa extends I.ProgramError {
  constructor(t, r) {
    super('Invalid System Program', t, r), (this.name = 'InvalidSystemProgram'), (this.code = 0);
  }
}
h.InvalidSystemProgramError = Oa;
w.set(0, Oa);
x.set('InvalidSystemProgram', Oa);
class Da extends I.ProgramError {
  constructor(t, r) {
    super('Error deserializing account', t, r),
      (this.name = 'DeserializationError'),
      (this.code = 1);
  }
}
h.DeserializationErrorError = Da;
w.set(1, Da);
x.set('DeserializationError', Da);
class Va extends I.ProgramError {
  constructor(t, r) {
    super('Error serializing account', t, r), (this.name = 'SerializationError'), (this.code = 2);
  }
}
h.SerializationErrorError = Va;
w.set(2, Va);
x.set('SerializationError', Va);
class Ta extends I.ProgramError {
  constructor(t, r) {
    super('Plugins not initialized', t, r), (this.name = 'PluginsNotInitialized'), (this.code = 3);
  }
}
h.PluginsNotInitializedError = Ta;
w.set(3, Ta);
x.set('PluginsNotInitialized', Ta);
class Ra extends I.ProgramError {
  constructor(t, r) {
    super('Plugin not found', t, r), (this.name = 'PluginNotFound'), (this.code = 4);
  }
}
h.PluginNotFoundError = Ra;
w.set(4, Ra);
x.set('PluginNotFound', Ra);
class Ma extends I.ProgramError {
  constructor(t, r) {
    super('Numerical Overflow', t, r), (this.name = 'NumericalOverflow'), (this.code = 5);
  }
}
h.NumericalOverflowError = Ma;
w.set(5, Ma);
x.set('NumericalOverflow', Ma);
class Ua extends I.ProgramError {
  constructor(t, r) {
    super('Incorrect account', t, r), (this.name = 'IncorrectAccount'), (this.code = 6);
  }
}
h.IncorrectAccountError = Ua;
w.set(6, Ua);
x.set('IncorrectAccount', Ua);
class $a extends I.ProgramError {
  constructor(t, r) {
    super('Incorrect asset hash', t, r), (this.name = 'IncorrectAssetHash'), (this.code = 7);
  }
}
h.IncorrectAssetHashError = $a;
w.set(7, $a);
x.set('IncorrectAssetHash', $a);
class La extends I.ProgramError {
  constructor(t, r) {
    super('Invalid Plugin', t, r), (this.name = 'InvalidPlugin'), (this.code = 8);
  }
}
h.InvalidPluginError = La;
w.set(8, La);
x.set('InvalidPlugin', La);
class Ka extends I.ProgramError {
  constructor(t, r) {
    super('Invalid Authority', t, r), (this.name = 'InvalidAuthority'), (this.code = 9);
  }
}
h.InvalidAuthorityError = Ka;
w.set(9, Ka);
x.set('InvalidAuthority', Ka);
class Wa extends I.ProgramError {
  constructor(t, r) {
    super('Cannot transfer a frozen asset', t, r), (this.name = 'AssetIsFrozen'), (this.code = 10);
  }
}
h.AssetIsFrozenError = Wa;
w.set(10, Wa);
x.set('AssetIsFrozen', Wa);
class Ha extends I.ProgramError {
  constructor(t, r) {
    super('Missing compression proof', t, r),
      (this.name = 'MissingCompressionProof'),
      (this.code = 11);
  }
}
h.MissingCompressionProofError = Ha;
w.set(11, Ha);
x.set('MissingCompressionProof', Ha);
class Na extends I.ProgramError {
  constructor(t, r) {
    super('Cannot migrate a master edition used for prints', t, r),
      (this.name = 'CannotMigrateMasterWithSupply'),
      (this.code = 12);
  }
}
h.CannotMigrateMasterWithSupplyError = Na;
w.set(12, Na);
x.set('CannotMigrateMasterWithSupply', Na);
class Fa extends I.ProgramError {
  constructor(t, r) {
    super('Cannot migrate a print edition', t, r),
      (this.name = 'CannotMigratePrints'),
      (this.code = 13);
  }
}
h.CannotMigratePrintsError = Fa;
w.set(13, Fa);
x.set('CannotMigratePrints', Fa);
class ja extends I.ProgramError {
  constructor(t, r) {
    super('Cannot burn a collection NFT', t, r),
      (this.name = 'CannotBurnCollection'),
      (this.code = 14);
  }
}
h.CannotBurnCollectionError = ja;
w.set(14, ja);
x.set('CannotBurnCollection', ja);
class qa extends I.ProgramError {
  constructor(t, r) {
    super('Plugin already exists', t, r), (this.name = 'PluginAlreadyExists'), (this.code = 15);
  }
}
h.PluginAlreadyExistsError = qa;
w.set(15, qa);
x.set('PluginAlreadyExists', qa);
class Za extends I.ProgramError {
  constructor(t, r) {
    super('Numerical overflow', t, r), (this.name = 'NumericalOverflowError'), (this.code = 16);
  }
}
h.NumericalOverflowErrorError = Za;
w.set(16, Za);
x.set('NumericalOverflowError', Za);
class Xa extends I.ProgramError {
  constructor(t, r) {
    super('Already compressed account', t, r), (this.name = 'AlreadyCompressed'), (this.code = 17);
  }
}
h.AlreadyCompressedError = Xa;
w.set(17, Xa);
x.set('AlreadyCompressed', Xa);
class Ga extends I.ProgramError {
  constructor(t, r) {
    super('Already decompressed account', t, r),
      (this.name = 'AlreadyDecompressed'),
      (this.code = 18);
  }
}
h.AlreadyDecompressedError = Ga;
w.set(18, Ga);
x.set('AlreadyDecompressed', Ga);
class Ya extends I.ProgramError {
  constructor(t, r) {
    super('Invalid Collection passed in', t, r),
      (this.name = 'InvalidCollection'),
      (this.code = 19);
  }
}
h.InvalidCollectionError = Ya;
w.set(19, Ya);
x.set('InvalidCollection', Ya);
class Ja extends I.ProgramError {
  constructor(t, r) {
    super('Missing update authority', t, r),
      (this.name = 'MissingUpdateAuthority'),
      (this.code = 20);
  }
}
h.MissingUpdateAuthorityError = Ja;
w.set(20, Ja);
x.set('MissingUpdateAuthority', Ja);
class Qa extends I.ProgramError {
  constructor(t, r) {
    super('Missing new owner', t, r), (this.name = 'MissingNewOwner'), (this.code = 21);
  }
}
h.MissingNewOwnerError = Qa;
w.set(21, Qa);
x.set('MissingNewOwner', Qa);
class es extends I.ProgramError {
  constructor(t, r) {
    super('Missing system program', t, r), (this.name = 'MissingSystemProgram'), (this.code = 22);
  }
}
h.MissingSystemProgramError = es;
w.set(22, es);
x.set('MissingSystemProgram', es);
class ts extends I.ProgramError {
  constructor(t, r) {
    super('Feature not available', t, r), (this.name = 'NotAvailable'), (this.code = 23);
  }
}
h.NotAvailableError = ts;
w.set(23, ts);
x.set('NotAvailable', ts);
class rs extends I.ProgramError {
  constructor(t, r) {
    super('Invalid Asset passed in', t, r), (this.name = 'InvalidAsset'), (this.code = 24);
  }
}
h.InvalidAssetError = rs;
w.set(24, rs);
x.set('InvalidAsset', rs);
class is extends I.ProgramError {
  constructor(t, r) {
    super('Missing collection', t, r), (this.name = 'MissingCollection'), (this.code = 25);
  }
}
h.MissingCollectionError = is;
w.set(25, is);
x.set('MissingCollection', is);
class ns extends I.ProgramError {
  constructor(t, r) {
    super('Neither the asset or any plugins have approved this operation', t, r),
      (this.name = 'NoApprovals'),
      (this.code = 26);
  }
}
h.NoApprovalsError = ns;
w.set(26, ns);
x.set('NoApprovals', ns);
class as extends I.ProgramError {
  constructor(t, r) {
    super('Plugin Manager cannot redelegate a delegated plugin without revoking first', t, r),
      (this.name = 'CannotRedelegate'),
      (this.code = 27);
  }
}
h.CannotRedelegateError = as;
w.set(27, as);
x.set('CannotRedelegate', as);
class ss extends I.ProgramError {
  constructor(t, r) {
    super('Invalid setting for plugin', t, r),
      (this.name = 'InvalidPluginSetting'),
      (this.code = 28);
  }
}
h.InvalidPluginSettingError = ss;
w.set(28, ss);
x.set('InvalidPluginSetting', ss);
class os extends I.ProgramError {
  constructor(t, r) {
    super('Cannot specify both an update authority and collection on an asset', t, r),
      (this.name = 'ConflictingAuthority'),
      (this.code = 29);
  }
}
h.ConflictingAuthorityError = os;
w.set(29, os);
x.set('ConflictingAuthority', os);
class ls extends I.ProgramError {
  constructor(t, r) {
    super('Invalid Log Wrapper Program', t, r),
      (this.name = 'InvalidLogWrapperProgram'),
      (this.code = 30);
  }
}
h.InvalidLogWrapperProgramError = ls;
w.set(30, ls);
x.set('InvalidLogWrapperProgram', ls);
class us extends I.ProgramError {
  constructor(t, r) {
    super('External Plugin Adapter not found', t, r),
      (this.name = 'ExternalPluginAdapterNotFound'),
      (this.code = 31);
  }
}
h.ExternalPluginAdapterNotFoundError = us;
w.set(31, us);
x.set('ExternalPluginAdapterNotFound', us);
class cs extends I.ProgramError {
  constructor(t, r) {
    super('External Plugin Adapter already exists', t, r),
      (this.name = 'ExternalPluginAdapterAlreadyExists'),
      (this.code = 32);
  }
}
h.ExternalPluginAdapterAlreadyExistsError = cs;
w.set(32, cs);
x.set('ExternalPluginAdapterAlreadyExists', cs);
class ds extends I.ProgramError {
  constructor(t, r) {
    super('Missing asset needed for extra account PDA derivation', t, r),
      (this.name = 'MissingAsset'),
      (this.code = 33);
  }
}
h.MissingAssetError = ds;
w.set(33, ds);
x.set('MissingAsset', ds);
class fs extends I.ProgramError {
  constructor(t, r) {
    super('Missing account needed for external plugin adapter', t, r),
      (this.name = 'MissingExternalPluginAdapterAccount'),
      (this.code = 34);
  }
}
h.MissingExternalPluginAdapterAccountError = fs;
w.set(34, fs);
x.set('MissingExternalPluginAdapterAccount', fs);
class gs extends I.ProgramError {
  constructor(t, r) {
    super('Oracle external plugin adapter can only be configured to reject', t, r),
      (this.name = 'OracleCanRejectOnly'),
      (this.code = 35);
  }
}
h.OracleCanRejectOnlyError = gs;
w.set(35, gs);
x.set('OracleCanRejectOnly', gs);
class ps extends I.ProgramError {
  constructor(t, r) {
    super('External plugin adapter must have at least one lifecycle check', t, r),
      (this.name = 'RequiresLifecycleCheck'),
      (this.code = 36);
  }
}
h.RequiresLifecycleCheckError = ps;
w.set(36, ps);
x.set('RequiresLifecycleCheck', ps);
class ys extends I.ProgramError {
  constructor(t, r) {
    super('Duplicate lifecycle checks were provided for external plugin adapter ', t, r),
      (this.name = 'DuplicateLifecycleChecks'),
      (this.code = 37);
  }
}
h.DuplicateLifecycleChecksError = ys;
w.set(37, ys);
x.set('DuplicateLifecycleChecks', ys);
class hs extends I.ProgramError {
  constructor(t, r) {
    super('Could not read from oracle account', t, r),
      (this.name = 'InvalidOracleAccountData'),
      (this.code = 38);
  }
}
h.InvalidOracleAccountDataError = hs;
w.set(38, hs);
x.set('InvalidOracleAccountData', hs);
class ms extends I.ProgramError {
  constructor(t, r) {
    super('Oracle account is uninitialized', t, r),
      (this.name = 'UninitializedOracleAccount'),
      (this.code = 39);
  }
}
h.UninitializedOracleAccountError = ms;
w.set(39, ms);
x.set('UninitializedOracleAccount', ms);
class As extends I.ProgramError {
  constructor(t, r) {
    super('Missing required signer for operation', t, r),
      (this.name = 'MissingSigner'),
      (this.code = 40);
  }
}
h.MissingSignerError = As;
w.set(40, As);
x.set('MissingSigner', As);
class vs extends I.ProgramError {
  constructor(t, r) {
    super('Invalid plugin operation', t, r),
      (this.name = 'InvalidPluginOperation'),
      (this.code = 41);
  }
}
h.InvalidPluginOperationError = vs;
w.set(41, vs);
x.set('InvalidPluginOperation', vs);
class Ps extends I.ProgramError {
  constructor(t, r) {
    super('Collection must be empty to be burned', t, r),
      (this.name = 'CollectionMustBeEmpty'),
      (this.code = 42);
  }
}
h.CollectionMustBeEmptyError = Ps;
w.set(42, Ps);
x.set('CollectionMustBeEmpty', Ps);
class bs extends I.ProgramError {
  constructor(t, r) {
    super('Two data sources provided, only one is allowed', t, r),
      (this.name = 'TwoDataSources'),
      (this.code = 43);
  }
}
h.TwoDataSourcesError = bs;
w.set(43, bs);
x.set('TwoDataSources', bs);
class Ss extends I.ProgramError {
  constructor(t, r) {
    super('External Plugin does not support this operation', t, r),
      (this.name = 'UnsupportedOperation'),
      (this.code = 44);
  }
}
h.UnsupportedOperationError = Ss;
w.set(44, Ss);
x.set('UnsupportedOperation', Ss);
class _s extends I.ProgramError {
  constructor(t, r) {
    super('No data sources provided, one is required', t, r),
      (this.name = 'NoDataSources'),
      (this.code = 45);
  }
}
h.NoDataSourcesError = _s;
w.set(45, _s);
x.set('NoDataSources', _s);
class zs extends I.ProgramError {
  constructor(t, r) {
    super('This plugin adapter cannot be added to an Asset', t, r),
      (this.name = 'InvalidPluginAdapterTarget'),
      (this.code = 46);
  }
}
h.InvalidPluginAdapterTargetError = zs;
w.set(46, zs);
x.set('InvalidPluginAdapterTarget', zs);
class Es extends I.ProgramError {
  constructor(t, r) {
    super('Cannot add a Data Section without a linked external plugin', t, r),
      (this.name = 'CannotAddDataSection'),
      (this.code = 47);
  }
}
h.CannotAddDataSectionError = Es;
w.set(47, Es);
x.set('CannotAddDataSection', Es);
function uh(e, t, r) {
  const i = w.get(e);
  return i ? new i(t, r) : null;
}
h.getMplCoreErrorFromCode = uh;
function ch(e, t, r) {
  const i = x.get(e);
  return i ? new i(t, r) : null;
}
h.getMplCoreErrorFromName = ch;
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, n, a, s) {
            s === void 0 && (s = a);
            var o = Object.getOwnPropertyDescriptor(n, a);
            (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return n[a];
                },
              }),
              Object.defineProperty(i, s, o);
          }
        : function (i, n, a, s) {
            s === void 0 && (s = a), (i[s] = n[a]);
          }),
    r =
      (C && C.__exportStar) ||
      function (i, n) {
        for (var a in i)
          a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }), r(h, e);
})(ka);
var Eu = {},
  yt = {},
  O = {};
Object.defineProperty(O, '__esModule', { value: !0 });
O.getAccountMetasAndSigners = O.expectPda = O.expectPublicKey = O.expectSome = void 0;
const Dr = E;
function dh(e) {
  if (e == null) throw new Error('Expected a value but received null or undefined.');
  return e;
}
O.expectSome = dh;
function fh(e) {
  if (!e) throw new Error('Expected a PublicKey.');
  return (0, Dr.publicKey)(e, !1);
}
O.expectPublicKey = fh;
function gh(e) {
  if (!e || !Array.isArray(e) || !(0, Dr.isPda)(e)) throw new Error('Expected a PDA.');
  return e;
}
O.expectPda = gh;
function ph(e, t, r) {
  const i = [],
    n = [];
  return (
    e.forEach((a) => {
      if (!a.value) {
        if (t === 'omitted') return;
        i.push({ pubkey: r, isSigner: !1, isWritable: !1 });
        return;
      }
      (0, Dr.isSigner)(a.value) && n.push(a.value),
        i.push({
          pubkey: (0, Dr.publicKey)(a.value, !1),
          isSigner: (0, Dr.isSigner)(a.value),
          isWritable: a.isWritable,
        });
    }),
    [i, n]
  );
}
O.getAccountMetasAndSigners = ph;
Object.defineProperty(yt, '__esModule', { value: !0 });
yt.addCollectionExternalPluginAdapterV1 =
  yt.getAddCollectionExternalPluginAdapterV1InstructionDataSerializer = void 0;
const yh = E,
  In = y,
  hh = O,
  mh = S();
function wu() {
  return (0, In.mapSerializer)(
    (0, In.struct)(
      [
        ['discriminator', (0, In.u8)()],
        ['initInfo', (0, mh.getBaseExternalPluginAdapterInitInfoSerializer)()],
      ],
      { description: 'AddCollectionExternalPluginAdapterV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 23 })
  );
}
yt.getAddCollectionExternalPluginAdapterV1InstructionDataSerializer = wu;
function Ah(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, hh.getAccountMetasAndSigners)(a, 'programId', r),
    d = wu().serialize(n);
  return (0, yh.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
yt.addCollectionExternalPluginAdapterV1 = Ah;
var ht = {};
Object.defineProperty(ht, '__esModule', { value: !0 });
ht.addCollectionPluginV1 = ht.getAddCollectionPluginV1InstructionDataSerializer = void 0;
const xu = E,
  Jr = y,
  vh = O,
  Uo = S();
function Bu() {
  return (0, Jr.mapSerializer)(
    (0, Jr.struct)(
      [
        ['discriminator', (0, Jr.u8)()],
        ['plugin', (0, Uo.getPluginSerializer)()],
        ['initAuthority', (0, Jr.option)((0, Uo.getBasePluginAuthoritySerializer)())],
      ],
      { description: 'AddCollectionPluginV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 3, initAuthority: e.initAuthority ?? (0, xu.none)() })
  );
}
ht.getAddCollectionPluginV1InstructionDataSerializer = Bu;
function Ph(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, vh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Bu().serialize(n);
  return (0, xu.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
ht.addCollectionPluginV1 = Ph;
var mt = {};
Object.defineProperty(mt, '__esModule', { value: !0 });
mt.addExternalPluginAdapterV1 = mt.getAddExternalPluginAdapterV1InstructionDataSerializer = void 0;
const bh = E,
  kn = y,
  Sh = O,
  _h = S();
function Cu() {
  return (0, kn.mapSerializer)(
    (0, kn.struct)(
      [
        ['discriminator', (0, kn.u8)()],
        ['initInfo', (0, _h.getBaseExternalPluginAdapterInitInfoSerializer)()],
      ],
      { description: 'AddExternalPluginAdapterV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 22 })
  );
}
mt.getAddExternalPluginAdapterV1InstructionDataSerializer = Cu;
function zh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Sh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Cu().serialize(n);
  return (0, bh.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
mt.addExternalPluginAdapterV1 = zh;
var At = {};
Object.defineProperty(At, '__esModule', { value: !0 });
At.addPluginV1 = At.getAddPluginV1InstructionDataSerializer = void 0;
const Iu = E,
  Qr = y,
  Eh = O,
  $o = S();
function ku() {
  return (0, Qr.mapSerializer)(
    (0, Qr.struct)(
      [
        ['discriminator', (0, Qr.u8)()],
        ['plugin', (0, $o.getPluginSerializer)()],
        ['initAuthority', (0, Qr.option)((0, $o.getBasePluginAuthoritySerializer)())],
      ],
      { description: 'AddPluginV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 2, initAuthority: e.initAuthority ?? (0, Iu.none)() })
  );
}
At.getAddPluginV1InstructionDataSerializer = ku;
function wh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Eh.getAccountMetasAndSigners)(a, 'programId', r),
    d = ku().serialize(n);
  return (0, Iu.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
At.addPluginV1 = wh;
var vt = {};
Object.defineProperty(vt, '__esModule', { value: !0 });
vt.approveCollectionPluginAuthorityV1 =
  vt.getApproveCollectionPluginAuthorityV1InstructionDataSerializer = void 0;
const xh = E,
  On = y,
  Bh = O,
  Lo = S();
function Ou() {
  return (0, On.mapSerializer)(
    (0, On.struct)(
      [
        ['discriminator', (0, On.u8)()],
        ['pluginType', (0, Lo.getPluginTypeSerializer)()],
        ['newAuthority', (0, Lo.getBasePluginAuthoritySerializer)()],
      ],
      { description: 'ApproveCollectionPluginAuthorityV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 9 })
  );
}
vt.getApproveCollectionPluginAuthorityV1InstructionDataSerializer = Ou;
function Ch(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Bh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Ou().serialize(n);
  return (0, xh.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
vt.approveCollectionPluginAuthorityV1 = Ch;
var Pt = {};
Object.defineProperty(Pt, '__esModule', { value: !0 });
Pt.approvePluginAuthorityV1 = Pt.getApprovePluginAuthorityV1InstructionDataSerializer = void 0;
const Ih = E,
  Dn = y,
  kh = O,
  Ko = S();
function Du() {
  return (0, Dn.mapSerializer)(
    (0, Dn.struct)(
      [
        ['discriminator', (0, Dn.u8)()],
        ['pluginType', (0, Ko.getPluginTypeSerializer)()],
        ['newAuthority', (0, Ko.getBasePluginAuthoritySerializer)()],
      ],
      { description: 'ApprovePluginAuthorityV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 8 })
  );
}
Pt.getApprovePluginAuthorityV1InstructionDataSerializer = Du;
function Oh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, kh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Du().serialize(n);
  return (0, Ih.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Pt.approvePluginAuthorityV1 = Oh;
var bt = {};
Object.defineProperty(bt, '__esModule', { value: !0 });
bt.burnCollectionV1 = bt.getBurnCollectionV1InstructionDataSerializer = void 0;
const Dh = E,
  ei = y,
  Vh = O,
  Th = S();
function Vu() {
  return (0, ei.mapSerializer)(
    (0, ei.struct)(
      [
        ['discriminator', (0, ei.u8)()],
        ['compressionProof', (0, ei.option)((0, Th.getCompressionProofSerializer)())],
      ],
      { description: 'BurnCollectionV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 13 })
  );
}
bt.getBurnCollectionV1InstructionDataSerializer = Vu;
function Rh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !0, value: t.authority ?? null },
      logWrapper: { index: 3, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer);
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Vh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Vu().serialize(n);
  return (0, Dh.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
bt.burnCollectionV1 = Rh;
var St = {};
Object.defineProperty(St, '__esModule', { value: !0 });
St.burnV1 = St.getBurnV1InstructionDataSerializer = void 0;
const Tu = E,
  ti = y,
  Mh = O,
  Uh = S();
function Ru() {
  return (0, ti.mapSerializer)(
    (0, ti.struct)(
      [
        ['discriminator', (0, ti.u8)()],
        ['compressionProof', (0, ti.option)((0, Uh.getCompressionProofSerializer)())],
      ],
      { description: 'BurnV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 12, compressionProof: e.compressionProof ?? (0, Tu.none)() })
  );
}
St.getBurnV1InstructionDataSerializer = Ru;
function $h(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer);
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Mh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Ru().serialize(n);
  return (0, Tu.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
St.burnV1 = $h;
var _t = {};
Object.defineProperty(_t, '__esModule', { value: !0 });
_t.collect = _t.getCollectInstructionDataSerializer = void 0;
const Vn = E,
  Tn = y,
  Lh = O;
function Mu() {
  return (0, Tn.mapSerializer)(
    (0, Tn.struct)([['discriminator', (0, Tn.u8)()]], { description: 'CollectInstructionData' }),
    (e) => ({ ...e, discriminator: 19 })
  );
}
_t.getCollectInstructionDataSerializer = Mu;
function Kh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      recipient1: { index: 0, isWritable: !0, value: t.recipient1 ?? null },
      recipient2: { index: 1, isWritable: !0, value: t.recipient2 ?? null },
    };
  i.recipient1.value ||
    (i.recipient1.value = (0, Vn.publicKey)('8AT6o8Qk5T9QnZvPThMrF9bcCQLTGkyGvVZZzHgCw11v')),
    i.recipient2.value ||
      (i.recipient2.value = (0, Vn.publicKey)('MmHsqX4LxTfifxoH8BVRLUKrwDn1LPCac6YcCZTHhwt'));
  const n = Object.values(i).sort((u, l) => u.index - l.index),
    [a, s] = (0, Lh.getAccountMetasAndSigners)(n, 'programId', r),
    o = Mu().serialize({});
  return (0, Vn.transactionBuilder)([
    { instruction: { keys: a, programId: r, data: o }, signers: s, bytesCreatedOnChain: 0 },
  ]);
}
_t.collect = Kh;
var zt = {};
Object.defineProperty(zt, '__esModule', { value: !0 });
zt.compressV1 = zt.getCompressV1InstructionDataSerializer = void 0;
const Wh = E,
  Rn = y,
  Hh = O;
function Uu() {
  return (0, Rn.mapSerializer)(
    (0, Rn.struct)([['discriminator', (0, Rn.u8)()]], { description: 'CompressV1InstructionData' }),
    (e) => ({ ...e, discriminator: 17 })
  );
}
zt.getCompressV1InstructionDataSerializer = Uu;
function Nh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !1, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const n = Object.values(i).sort((u, l) => u.index - l.index),
    [a, s] = (0, Hh.getAccountMetasAndSigners)(n, 'programId', r),
    o = Uu().serialize({});
  return (0, Wh.transactionBuilder)([
    { instruction: { keys: a, programId: r, data: o }, signers: s, bytesCreatedOnChain: 0 },
  ]);
}
zt.compressV1 = Nh;
var Et = {};
Object.defineProperty(Et, '__esModule', { value: !0 });
Et.createCollectionV1 = Et.getCreateCollectionV1InstructionDataSerializer = void 0;
const $u = E,
  je = y,
  Fh = O,
  jh = S();
function Lu() {
  return (0, je.mapSerializer)(
    (0, je.struct)(
      [
        ['discriminator', (0, je.u8)()],
        ['name', (0, je.string)()],
        ['uri', (0, je.string)()],
        ['plugins', (0, je.option)((0, je.array)((0, jh.getPluginAuthorityPairSerializer)()))],
      ],
      { description: 'CreateCollectionV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 1, plugins: e.plugins ?? (0, $u.none)() })
  );
}
Et.getCreateCollectionV1InstructionDataSerializer = Lu;
function qh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      updateAuthority: { index: 1, isWritable: !1, value: t.updateAuthority ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Fh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Lu().serialize(n);
  return (0, $u.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Et.createCollectionV1 = qh;
var wt = {};
Object.defineProperty(wt, '__esModule', { value: !0 });
wt.createCollectionV2 = wt.getCreateCollectionV2InstructionDataSerializer = void 0;
const Ku = E,
  Se = y,
  Zh = O,
  Wo = S();
function Wu() {
  return (0, Se.mapSerializer)(
    (0, Se.struct)(
      [
        ['discriminator', (0, Se.u8)()],
        ['name', (0, Se.string)()],
        ['uri', (0, Se.string)()],
        ['plugins', (0, Se.option)((0, Se.array)((0, Wo.getPluginAuthorityPairSerializer)()))],
        [
          'externalPluginAdapters',
          (0, Se.option)((0, Se.array)((0, Wo.getBaseExternalPluginAdapterInitInfoSerializer)())),
        ],
      ],
      { description: 'CreateCollectionV2InstructionData' }
    ),
    (e) => ({
      ...e,
      discriminator: 21,
      plugins: e.plugins ?? (0, Ku.none)(),
      externalPluginAdapters: e.externalPluginAdapters ?? [],
    })
  );
}
wt.getCreateCollectionV2InstructionDataSerializer = Wu;
function Xh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      updateAuthority: { index: 1, isWritable: !1, value: t.updateAuthority ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Zh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Wu().serialize(n);
  return (0, Ku.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
wt.createCollectionV2 = Xh;
var xt = {};
Object.defineProperty(xt, '__esModule', { value: !0 });
xt.createV1 = xt.getCreateV1InstructionDataSerializer = void 0;
const Gh = E,
  qe = y,
  Yh = O,
  Mn = S();
function Hu() {
  return (0, qe.mapSerializer)(
    (0, qe.struct)(
      [
        ['discriminator', (0, qe.u8)()],
        ['dataState', (0, Mn.getDataStateSerializer)()],
        ['name', (0, qe.string)()],
        ['uri', (0, qe.string)()],
        ['plugins', (0, qe.option)((0, qe.array)((0, Mn.getPluginAuthorityPairSerializer)()))],
      ],
      { description: 'CreateV1InstructionData' }
    ),
    (e) => ({
      ...e,
      discriminator: 0,
      dataState: e.dataState ?? Mn.DataState.AccountState,
      plugins: e.plugins ?? [],
    })
  );
}
xt.getCreateV1InstructionDataSerializer = Hu;
function Jh(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      payer: { index: 3, isWritable: !0, value: t.payer ?? null },
      owner: { index: 4, isWritable: !1, value: t.owner ?? null },
      updateAuthority: { index: 5, isWritable: !1, value: t.updateAuthority ?? null },
      systemProgram: { index: 6, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 7, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, Yh.getAccountMetasAndSigners)(a, 'programId', r),
    d = Hu().serialize(n);
  return (0, Gh.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
xt.createV1 = Jh;
var Bt = {};
Object.defineProperty(Bt, '__esModule', { value: !0 });
Bt.createV2 = Bt.getCreateV2InstructionDataSerializer = void 0;
const Qh = E,
  _e = y,
  e1 = O,
  ri = S();
function Nu() {
  return (0, _e.mapSerializer)(
    (0, _e.struct)(
      [
        ['discriminator', (0, _e.u8)()],
        ['dataState', (0, ri.getDataStateSerializer)()],
        ['name', (0, _e.string)()],
        ['uri', (0, _e.string)()],
        ['plugins', (0, _e.option)((0, _e.array)((0, ri.getPluginAuthorityPairSerializer)()))],
        [
          'externalPluginAdapters',
          (0, _e.option)((0, _e.array)((0, ri.getBaseExternalPluginAdapterInitInfoSerializer)())),
        ],
      ],
      { description: 'CreateV2InstructionData' }
    ),
    (e) => ({
      ...e,
      discriminator: 20,
      dataState: e.dataState ?? ri.DataState.AccountState,
      plugins: e.plugins ?? [],
      externalPluginAdapters: e.externalPluginAdapters ?? [],
    })
  );
}
Bt.getCreateV2InstructionDataSerializer = Nu;
function t1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      payer: { index: 3, isWritable: !0, value: t.payer ?? null },
      owner: { index: 4, isWritable: !1, value: t.owner ?? null },
      updateAuthority: { index: 5, isWritable: !1, value: t.updateAuthority ?? null },
      systemProgram: { index: 6, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 7, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, e1.getAccountMetasAndSigners)(a, 'programId', r),
    d = Nu().serialize(n);
  return (0, Qh.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Bt.createV2 = t1;
var Ct = {};
Object.defineProperty(Ct, '__esModule', { value: !0 });
Ct.decompressV1 = Ct.getDecompressV1InstructionDataSerializer = void 0;
const r1 = E,
  Un = y,
  i1 = O,
  n1 = S();
function Fu() {
  return (0, Un.mapSerializer)(
    (0, Un.struct)(
      [
        ['discriminator', (0, Un.u8)()],
        ['compressionProof', (0, n1.getCompressionProofSerializer)()],
      ],
      { description: 'DecompressV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 18 })
  );
}
Ct.getDecompressV1InstructionDataSerializer = Fu;
function a1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !1, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, i1.getAccountMetasAndSigners)(a, 'programId', r),
    d = Fu().serialize(n);
  return (0, r1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Ct.decompressV1 = a1;
var It = {};
Object.defineProperty(It, '__esModule', { value: !0 });
It.removeCollectionExternalPluginAdapterV1 =
  It.getRemoveCollectionExternalPluginAdapterV1InstructionDataSerializer = void 0;
const s1 = E,
  $n = y,
  o1 = O,
  l1 = S();
function ju() {
  return (0, $n.mapSerializer)(
    (0, $n.struct)(
      [
        ['discriminator', (0, $n.u8)()],
        ['key', (0, l1.getBaseExternalPluginAdapterKeySerializer)()],
      ],
      { description: 'RemoveCollectionExternalPluginAdapterV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 25 })
  );
}
It.getRemoveCollectionExternalPluginAdapterV1InstructionDataSerializer = ju;
function u1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, o1.getAccountMetasAndSigners)(a, 'programId', r),
    d = ju().serialize(n);
  return (0, s1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
It.removeCollectionExternalPluginAdapterV1 = u1;
var kt = {};
Object.defineProperty(kt, '__esModule', { value: !0 });
kt.removeCollectionPluginV1 = kt.getRemoveCollectionPluginV1InstructionDataSerializer = void 0;
const c1 = E,
  Ln = y,
  d1 = O,
  f1 = S();
function qu() {
  return (0, Ln.mapSerializer)(
    (0, Ln.struct)(
      [
        ['discriminator', (0, Ln.u8)()],
        ['pluginType', (0, f1.getPluginTypeSerializer)()],
      ],
      { description: 'RemoveCollectionPluginV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 5 })
  );
}
kt.getRemoveCollectionPluginV1InstructionDataSerializer = qu;
function g1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, d1.getAccountMetasAndSigners)(a, 'programId', r),
    d = qu().serialize(n);
  return (0, c1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
kt.removeCollectionPluginV1 = g1;
var Ot = {};
Object.defineProperty(Ot, '__esModule', { value: !0 });
Ot.removeExternalPluginAdapterV1 = Ot.getRemoveExternalPluginAdapterV1InstructionDataSerializer =
  void 0;
const p1 = E,
  Kn = y,
  y1 = O,
  h1 = S();
function Zu() {
  return (0, Kn.mapSerializer)(
    (0, Kn.struct)(
      [
        ['discriminator', (0, Kn.u8)()],
        ['key', (0, h1.getBaseExternalPluginAdapterKeySerializer)()],
      ],
      { description: 'RemoveExternalPluginAdapterV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 24 })
  );
}
Ot.getRemoveExternalPluginAdapterV1InstructionDataSerializer = Zu;
function m1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, y1.getAccountMetasAndSigners)(a, 'programId', r),
    d = Zu().serialize(n);
  return (0, p1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Ot.removeExternalPluginAdapterV1 = m1;
var Dt = {};
Object.defineProperty(Dt, '__esModule', { value: !0 });
Dt.removePluginV1 = Dt.getRemovePluginV1InstructionDataSerializer = void 0;
const A1 = E,
  Wn = y,
  v1 = O,
  P1 = S();
function Xu() {
  return (0, Wn.mapSerializer)(
    (0, Wn.struct)(
      [
        ['discriminator', (0, Wn.u8)()],
        ['pluginType', (0, P1.getPluginTypeSerializer)()],
      ],
      { description: 'RemovePluginV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 4 })
  );
}
Dt.getRemovePluginV1InstructionDataSerializer = Xu;
function b1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, v1.getAccountMetasAndSigners)(a, 'programId', r),
    d = Xu().serialize(n);
  return (0, A1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Dt.removePluginV1 = b1;
var Vt = {};
Object.defineProperty(Vt, '__esModule', { value: !0 });
Vt.revokeCollectionPluginAuthorityV1 =
  Vt.getRevokeCollectionPluginAuthorityV1InstructionDataSerializer = void 0;
const S1 = E,
  Hn = y,
  _1 = O,
  z1 = S();
function Gu() {
  return (0, Hn.mapSerializer)(
    (0, Hn.struct)(
      [
        ['discriminator', (0, Hn.u8)()],
        ['pluginType', (0, z1.getPluginTypeSerializer)()],
      ],
      { description: 'RevokeCollectionPluginAuthorityV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 11 })
  );
}
Vt.getRevokeCollectionPluginAuthorityV1InstructionDataSerializer = Gu;
function E1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, _1.getAccountMetasAndSigners)(a, 'programId', r),
    d = Gu().serialize(n);
  return (0, S1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Vt.revokeCollectionPluginAuthorityV1 = E1;
var Tt = {};
Object.defineProperty(Tt, '__esModule', { value: !0 });
Tt.revokePluginAuthorityV1 = Tt.getRevokePluginAuthorityV1InstructionDataSerializer = void 0;
const w1 = E,
  Nn = y,
  x1 = O,
  B1 = S();
function Yu() {
  return (0, Nn.mapSerializer)(
    (0, Nn.struct)(
      [
        ['discriminator', (0, Nn.u8)()],
        ['pluginType', (0, B1.getPluginTypeSerializer)()],
      ],
      { description: 'RevokePluginAuthorityV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 10 })
  );
}
Tt.getRevokePluginAuthorityV1InstructionDataSerializer = Yu;
function C1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, x1.getAccountMetasAndSigners)(a, 'programId', r),
    d = Yu().serialize(n);
  return (0, w1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Tt.revokePluginAuthorityV1 = C1;
var Rt = {};
Object.defineProperty(Rt, '__esModule', { value: !0 });
Rt.transferV1 = Rt.getTransferV1InstructionDataSerializer = void 0;
const Ju = E,
  ii = y,
  I1 = O,
  k1 = S();
function Qu() {
  return (0, ii.mapSerializer)(
    (0, ii.struct)(
      [
        ['discriminator', (0, ii.u8)()],
        ['compressionProof', (0, ii.option)((0, k1.getCompressionProofSerializer)())],
      ],
      { description: 'TransferV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 14, compressionProof: e.compressionProof ?? (0, Ju.none)() })
  );
}
Rt.getTransferV1InstructionDataSerializer = Qu;
function O1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !1, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      newOwner: { index: 4, isWritable: !1, value: t.newOwner ?? null },
      systemProgram: { index: 5, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 6, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer);
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, I1.getAccountMetasAndSigners)(a, 'programId', r),
    d = Qu().serialize(n);
  return (0, Ju.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Rt.transferV1 = O1;
var Mt = {};
Object.defineProperty(Mt, '__esModule', { value: !0 });
Mt.updateCollectionExternalPluginAdapterV1 =
  Mt.getUpdateCollectionExternalPluginAdapterV1InstructionDataSerializer = void 0;
const D1 = E,
  Fn = y,
  V1 = O,
  Ho = S();
function ec() {
  return (0, Fn.mapSerializer)(
    (0, Fn.struct)(
      [
        ['discriminator', (0, Fn.u8)()],
        ['key', (0, Ho.getBaseExternalPluginAdapterKeySerializer)()],
        ['updateInfo', (0, Ho.getBaseExternalPluginAdapterUpdateInfoSerializer)()],
      ],
      { description: 'UpdateCollectionExternalPluginAdapterV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 27 })
  );
}
Mt.getUpdateCollectionExternalPluginAdapterV1InstructionDataSerializer = ec;
function T1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, V1.getAccountMetasAndSigners)(a, 'programId', r),
    d = ec().serialize(n);
  return (0, D1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Mt.updateCollectionExternalPluginAdapterV1 = T1;
var Ut = {};
Object.defineProperty(Ut, '__esModule', { value: !0 });
Ut.updateCollectionPluginV1 = Ut.getUpdateCollectionPluginV1InstructionDataSerializer = void 0;
const R1 = E,
  jn = y,
  M1 = O,
  U1 = S();
function tc() {
  return (0, jn.mapSerializer)(
    (0, jn.struct)(
      [
        ['discriminator', (0, jn.u8)()],
        ['plugin', (0, U1.getPluginSerializer)()],
      ],
      { description: 'UpdateCollectionPluginV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 7 })
  );
}
Ut.getUpdateCollectionPluginV1InstructionDataSerializer = tc;
function $1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 3, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 4, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, M1.getAccountMetasAndSigners)(a, 'programId', r),
    d = tc().serialize(n);
  return (0, R1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Ut.updateCollectionPluginV1 = $1;
var $t = {};
Object.defineProperty($t, '__esModule', { value: !0 });
$t.updateCollectionV1 = $t.getUpdateCollectionV1InstructionDataSerializer = void 0;
const aa = E,
  Ze = y,
  L1 = O;
function rc() {
  return (0, Ze.mapSerializer)(
    (0, Ze.struct)(
      [
        ['discriminator', (0, Ze.u8)()],
        ['newName', (0, Ze.option)((0, Ze.string)())],
        ['newUri', (0, Ze.option)((0, Ze.string)())],
      ],
      { description: 'UpdateCollectionV1InstructionData' }
    ),
    (e) => ({
      ...e,
      discriminator: 16,
      newName: e.newName ?? (0, aa.none)(),
      newUri: e.newUri ?? (0, aa.none)(),
    })
  );
}
$t.getUpdateCollectionV1InstructionDataSerializer = rc;
function K1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      newUpdateAuthority: { index: 3, isWritable: !1, value: t.newUpdateAuthority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, L1.getAccountMetasAndSigners)(a, 'programId', r),
    d = rc().serialize(n);
  return (0, aa.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
$t.updateCollectionV1 = K1;
var Lt = {};
Object.defineProperty(Lt, '__esModule', { value: !0 });
Lt.updateExternalPluginAdapterV1 = Lt.getUpdateExternalPluginAdapterV1InstructionDataSerializer =
  void 0;
const W1 = E,
  qn = y,
  H1 = O,
  No = S();
function ic() {
  return (0, qn.mapSerializer)(
    (0, qn.struct)(
      [
        ['discriminator', (0, qn.u8)()],
        ['key', (0, No.getBaseExternalPluginAdapterKeySerializer)()],
        ['updateInfo', (0, No.getBaseExternalPluginAdapterUpdateInfoSerializer)()],
      ],
      { description: 'UpdateExternalPluginAdapterV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 26 })
  );
}
Lt.getUpdateExternalPluginAdapterV1InstructionDataSerializer = ic;
function N1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, H1.getAccountMetasAndSigners)(a, 'programId', r),
    d = ic().serialize(n);
  return (0, W1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Lt.updateExternalPluginAdapterV1 = N1;
var Kt = {};
Object.defineProperty(Kt, '__esModule', { value: !0 });
Kt.updatePluginV1 = Kt.getUpdatePluginV1InstructionDataSerializer = void 0;
const F1 = E,
  Zn = y,
  j1 = O,
  q1 = S();
function nc() {
  return (0, Zn.mapSerializer)(
    (0, Zn.struct)(
      [
        ['discriminator', (0, Zn.u8)()],
        ['plugin', (0, q1.getPluginSerializer)()],
      ],
      { description: 'UpdatePluginV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 6 })
  );
}
Kt.getUpdatePluginV1InstructionDataSerializer = nc;
function Z1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, j1.getAccountMetasAndSigners)(a, 'programId', r),
    d = nc().serialize(n);
  return (0, F1.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Kt.updatePluginV1 = Z1;
var Wt = {};
Object.defineProperty(Wt, '__esModule', { value: !0 });
Wt.updateV1 = Wt.getUpdateV1InstructionDataSerializer = void 0;
const li = E,
  ke = y,
  X1 = O,
  G1 = S();
function ac() {
  return (0, ke.mapSerializer)(
    (0, ke.struct)(
      [
        ['discriminator', (0, ke.u8)()],
        ['newName', (0, ke.option)((0, ke.string)())],
        ['newUri', (0, ke.option)((0, ke.string)())],
        ['newUpdateAuthority', (0, ke.option)((0, G1.getBaseUpdateAuthoritySerializer)())],
      ],
      { description: 'UpdateV1InstructionData' }
    ),
    (e) => ({
      ...e,
      discriminator: 15,
      newName: e.newName ?? (0, li.none)(),
      newUri: e.newUri ?? (0, li.none)(),
      newUpdateAuthority: e.newUpdateAuthority ?? (0, li.none)(),
    })
  );
}
Wt.getUpdateV1InstructionDataSerializer = ac;
function Y1(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !1, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, X1.getAccountMetasAndSigners)(a, 'programId', r),
    d = ac().serialize(n);
  return (0, li.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Wt.updateV1 = Y1;
var Ht = {};
Object.defineProperty(Ht, '__esModule', { value: !0 });
Ht.updateV2 = Ht.getUpdateV2InstructionDataSerializer = void 0;
const ui = E,
  Oe = y,
  J1 = O,
  Q1 = S();
function sc() {
  return (0, Oe.mapSerializer)(
    (0, Oe.struct)(
      [
        ['discriminator', (0, Oe.u8)()],
        ['newName', (0, Oe.option)((0, Oe.string)())],
        ['newUri', (0, Oe.option)((0, Oe.string)())],
        ['newUpdateAuthority', (0, Oe.option)((0, Q1.getBaseUpdateAuthoritySerializer)())],
      ],
      { description: 'UpdateV2InstructionData' }
    ),
    (e) => ({
      ...e,
      discriminator: 30,
      newName: e.newName ?? (0, ui.none)(),
      newUri: e.newUri ?? (0, ui.none)(),
      newUpdateAuthority: e.newUpdateAuthority ?? (0, ui.none)(),
    })
  );
}
Ht.getUpdateV2InstructionDataSerializer = sc;
function e0(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      newCollection: { index: 4, isWritable: !0, value: t.newCollection ?? null },
      systemProgram: { index: 5, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 6, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, J1.getAccountMetasAndSigners)(a, 'programId', r),
    d = sc().serialize(n);
  return (0, ui.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Ht.updateV2 = e0;
var Nt = {};
Object.defineProperty(Nt, '__esModule', { value: !0 });
Nt.writeCollectionExternalPluginAdapterDataV1 =
  Nt.getWriteCollectionExternalPluginAdapterDataV1InstructionDataSerializer = void 0;
const t0 = E,
  ot = y,
  r0 = O,
  i0 = S();
function oc() {
  return (0, ot.mapSerializer)(
    (0, ot.struct)(
      [
        ['discriminator', (0, ot.u8)()],
        ['key', (0, i0.getBaseExternalPluginAdapterKeySerializer)()],
        ['data', (0, ot.option)((0, ot.bytes)({ size: (0, ot.u32)() }))],
      ],
      { description: 'WriteCollectionExternalPluginAdapterDataV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 29 })
  );
}
Nt.getWriteCollectionExternalPluginAdapterDataV1InstructionDataSerializer = oc;
function n0(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      collection: { index: 0, isWritable: !0, value: t.collection ?? null },
      payer: { index: 1, isWritable: !0, value: t.payer ?? null },
      authority: { index: 2, isWritable: !1, value: t.authority ?? null },
      buffer: { index: 3, isWritable: !1, value: t.buffer ?? null },
      systemProgram: { index: 4, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 5, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, r0.getAccountMetasAndSigners)(a, 'programId', r),
    d = oc().serialize(n);
  return (0, t0.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Nt.writeCollectionExternalPluginAdapterDataV1 = n0;
var Ft = {};
Object.defineProperty(Ft, '__esModule', { value: !0 });
Ft.writeExternalPluginAdapterDataV1 =
  Ft.getWriteExternalPluginAdapterDataV1InstructionDataSerializer = void 0;
const a0 = E,
  lt = y,
  s0 = O,
  o0 = S();
function lc() {
  return (0, lt.mapSerializer)(
    (0, lt.struct)(
      [
        ['discriminator', (0, lt.u8)()],
        ['key', (0, o0.getBaseExternalPluginAdapterKeySerializer)()],
        ['data', (0, lt.option)((0, lt.bytes)({ size: (0, lt.u32)() }))],
      ],
      { description: 'WriteExternalPluginAdapterDataV1InstructionData' }
    ),
    (e) => ({ ...e, discriminator: 28 })
  );
}
Ft.getWriteExternalPluginAdapterDataV1InstructionDataSerializer = lc;
function l0(e, t) {
  const r = e.programs.getPublicKey('mplCore', 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d'),
    i = {
      asset: { index: 0, isWritable: !0, value: t.asset ?? null },
      collection: { index: 1, isWritable: !0, value: t.collection ?? null },
      payer: { index: 2, isWritable: !0, value: t.payer ?? null },
      authority: { index: 3, isWritable: !1, value: t.authority ?? null },
      buffer: { index: 4, isWritable: !1, value: t.buffer ?? null },
      systemProgram: { index: 5, isWritable: !1, value: t.systemProgram ?? null },
      logWrapper: { index: 6, isWritable: !1, value: t.logWrapper ?? null },
    },
    n = { ...t };
  i.payer.value || (i.payer.value = e.payer),
    i.systemProgram.value ||
      ((i.systemProgram.value = e.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      )),
      (i.systemProgram.isWritable = !1));
  const a = Object.values(i).sort((l, c) => l.index - c.index),
    [s, o] = (0, s0.getAccountMetasAndSigners)(a, 'programId', r),
    d = lc().serialize(n);
  return (0, a0.transactionBuilder)([
    { instruction: { keys: s, programId: r, data: d }, signers: o, bytesCreatedOnChain: 0 },
  ]);
}
Ft.writeExternalPluginAdapterDataV1 = l0;
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, n, a, s) {
            s === void 0 && (s = a);
            var o = Object.getOwnPropertyDescriptor(n, a);
            (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return n[a];
                },
              }),
              Object.defineProperty(i, s, o);
          }
        : function (i, n, a, s) {
            s === void 0 && (s = a), (i[s] = n[a]);
          }),
    r =
      (C && C.__exportStar) ||
      function (i, n) {
        for (var a in i)
          a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    r(yt, e),
    r(ht, e),
    r(mt, e),
    r(At, e),
    r(vt, e),
    r(Pt, e),
    r(bt, e),
    r(St, e),
    r(_t, e),
    r(zt, e),
    r(Et, e),
    r(wt, e),
    r(xt, e),
    r(Bt, e),
    r(Ct, e),
    r(It, e),
    r(kt, e),
    r(Ot, e),
    r(Dt, e),
    r(Vt, e),
    r(Tt, e),
    r(Rt, e),
    r(Mt, e),
    r(Ut, e),
    r($t, e),
    r(Lt, e),
    r(Kt, e),
    r(Wt, e),
    r(Ht, e),
    r(Nt, e),
    r(Ft, e);
})(Eu);
var uc = {},
  cc = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.getMplCoreProgramId =
      e.getMplCoreProgram =
      e.createMplCoreProgram =
      e.MPL_CORE_PROGRAM_ID =
        void 0);
  const t = ka;
  e.MPL_CORE_PROGRAM_ID = 'CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d';
  function r() {
    return {
      name: 'mplCore',
      publicKey: e.MPL_CORE_PROGRAM_ID,
      getErrorFromCode(a, s) {
        return (0, t.getMplCoreErrorFromCode)(a, this, s);
      },
      getErrorFromName(a, s) {
        return (0, t.getMplCoreErrorFromName)(a, this, s);
      },
      isOnCluster() {
        return !0;
      },
    };
  }
  e.createMplCoreProgram = r;
  function i(a, s) {
    return a.programs.get('mplCore', s);
  }
  e.getMplCoreProgram = i;
  function n(a, s) {
    return a.programs.getPublicKey('mplCore', e.MPL_CORE_PROGRAM_ID, s);
  }
  e.getMplCoreProgramId = n;
})(cc);
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, n, a, s) {
            s === void 0 && (s = a);
            var o = Object.getOwnPropertyDescriptor(n, a);
            (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return n[a];
                },
              }),
              Object.defineProperty(i, s, o);
          }
        : function (i, n, a, s) {
            s === void 0 && (s = a), (i[s] = n[a]);
          }),
    r =
      (C && C.__exportStar) ||
      function (i, n) {
        for (var a in i)
          a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }), r(cc, e);
})(uc);
var Fo;
function R() {
  return (
    Fo ||
      ((Fo = 1),
      (function (e) {
        var t =
            (C && C.__createBinding) ||
            (Object.create
              ? function (i, n, a, s) {
                  s === void 0 && (s = a);
                  var o = Object.getOwnPropertyDescriptor(n, a);
                  (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return n[a];
                      },
                    }),
                    Object.defineProperty(i, s, o);
                }
              : function (i, n, a, s) {
                  s === void 0 && (s = a), (i[s] = n[a]);
                }),
          r =
            (C && C.__exportStar) ||
            function (i, n) {
              for (var a in i)
                a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
            };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          r(lh(), e),
          r(ka, e),
          r(Eu, e),
          r(uc, e),
          r(O, e),
          r(S(), e);
      })(yn)),
    yn
  );
}
var Fi = {};
Object.defineProperty(Fi, '__esModule', { value: !0 });
Fi.mplCore = void 0;
const u0 = R(),
  c0 = () => ({
    install(e) {
      e.programs.add((0, u0.createMplCoreProgram)(), !1);
    },
  });
Fi.mplCore = c0;
var ji = {},
  U = {},
  J = {};
Object.defineProperty(J, '__esModule', { value: !0 });
J.output = J.exists = J.hash = J.bytes = J.bool = J.number = void 0;
function hi(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
J.number = hi;
function dc(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
J.bool = dc;
function ws(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
J.bytes = ws;
function fc(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  hi(e.outputLen), hi(e.blockLen);
}
J.hash = fc;
function gc(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
J.exists = gc;
function pc(e, t) {
  ws(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
J.output = pc;
const d0 = { number: hi, bool: dc, bytes: ws, hash: fc, exists: gc, output: pc };
J.default = d0;
var k = {};
Object.defineProperty(k, '__esModule', { value: !0 });
k.add5L =
  k.add5H =
  k.add4H =
  k.add4L =
  k.add3H =
  k.add3L =
  k.add =
  k.rotlBL =
  k.rotlBH =
  k.rotlSL =
  k.rotlSH =
  k.rotr32L =
  k.rotr32H =
  k.rotrBL =
  k.rotrBH =
  k.rotrSL =
  k.rotrSH =
  k.shrSL =
  k.shrSH =
  k.toBig =
  k.split =
  k.fromBig =
    void 0;
const ni = BigInt(2 ** 32 - 1),
  sa = BigInt(32);
function xs(e, t = !1) {
  return t
    ? { h: Number(e & ni), l: Number((e >> sa) & ni) }
    : { h: Number((e >> sa) & ni) | 0, l: Number(e & ni) | 0 };
}
k.fromBig = xs;
function yc(e, t = !1) {
  let r = new Uint32Array(e.length),
    i = new Uint32Array(e.length);
  for (let n = 0; n < e.length; n++) {
    const { h: a, l: s } = xs(e[n], t);
    [r[n], i[n]] = [a, s];
  }
  return [r, i];
}
k.split = yc;
const hc = (e, t) => (BigInt(e >>> 0) << sa) | BigInt(t >>> 0);
k.toBig = hc;
const mc = (e, t, r) => e >>> r;
k.shrSH = mc;
const Ac = (e, t, r) => (e << (32 - r)) | (t >>> r);
k.shrSL = Ac;
const vc = (e, t, r) => (e >>> r) | (t << (32 - r));
k.rotrSH = vc;
const Pc = (e, t, r) => (e << (32 - r)) | (t >>> r);
k.rotrSL = Pc;
const bc = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32));
k.rotrBH = bc;
const Sc = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r));
k.rotrBL = Sc;
const _c = (e, t) => t;
k.rotr32H = _c;
const zc = (e, t) => e;
k.rotr32L = zc;
const Ec = (e, t, r) => (e << r) | (t >>> (32 - r));
k.rotlSH = Ec;
const wc = (e, t, r) => (t << r) | (e >>> (32 - r));
k.rotlSL = wc;
const xc = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r));
k.rotlBH = xc;
const Bc = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
k.rotlBL = Bc;
function Cc(e, t, r, i) {
  const n = (t >>> 0) + (i >>> 0);
  return { h: (e + r + ((n / 2 ** 32) | 0)) | 0, l: n | 0 };
}
k.add = Cc;
const Ic = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
k.add3L = Ic;
const kc = (e, t, r, i) => (t + r + i + ((e / 2 ** 32) | 0)) | 0;
k.add3H = kc;
const Oc = (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0);
k.add4L = Oc;
const Dc = (e, t, r, i, n) => (t + r + i + n + ((e / 2 ** 32) | 0)) | 0;
k.add4H = Dc;
const Vc = (e, t, r, i, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (n >>> 0);
k.add5L = Vc;
const Tc = (e, t, r, i, n, a) => (t + r + i + n + a + ((e / 2 ** 32) | 0)) | 0;
k.add5H = Tc;
const f0 = {
  fromBig: xs,
  split: yc,
  toBig: hc,
  shrSH: mc,
  shrSL: Ac,
  rotrSH: vc,
  rotrSL: Pc,
  rotrBH: bc,
  rotrBL: Sc,
  rotr32H: _c,
  rotr32L: zc,
  rotlSH: Ec,
  rotlSL: wc,
  rotlBH: xc,
  rotlBL: Bc,
  add: Cc,
  add3L: Ic,
  add3H: kc,
  add4L: Oc,
  add4H: Dc,
  add5H: Tc,
  add5L: Vc,
};
k.default = f0;
var Rc = {},
  qi = {};
Object.defineProperty(qi, '__esModule', { value: !0 });
qi.crypto = void 0;
qi.crypto = typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;
(function (e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
    e,
    '__esModule',
    { value: !0 }
  ),
    (e.randomBytes =
      e.wrapXOFConstructorWithOpts =
      e.wrapConstructorWithOpts =
      e.wrapConstructor =
      e.checkOpts =
      e.Hash =
      e.concatBytes =
      e.toBytes =
      e.utf8ToBytes =
      e.asyncLoop =
      e.nextTick =
      e.hexToBytes =
      e.bytesToHex =
      e.isLE =
      e.rotr =
      e.createView =
      e.u32 =
      e.u8 =
        void 0);
  const t = qi,
    r = (A) => A instanceof Uint8Array,
    i = (A) => new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
  e.u8 = i;
  const n = (A) => new Uint32Array(A.buffer, A.byteOffset, Math.floor(A.byteLength / 4));
  e.u32 = n;
  const a = (A) => new DataView(A.buffer, A.byteOffset, A.byteLength);
  e.createView = a;
  const s = (A, _) => (A << (32 - _)) | (A >>> _);
  if (
    ((e.rotr = s),
    (e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68),
    !e.isLE)
  )
    throw new Error('Non little-endian hardware is not supported');
  const o = Array.from({ length: 256 }, (A, _) => _.toString(16).padStart(2, '0'));
  function d(A) {
    if (!r(A)) throw new Error('Uint8Array expected');
    let _ = '';
    for (let V = 0; V < A.length; V++) _ += o[A[V]];
    return _;
  }
  e.bytesToHex = d;
  function u(A) {
    if (typeof A != 'string') throw new Error('hex string expected, got ' + typeof A);
    const _ = A.length;
    if (_ % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + _);
    const V = new Uint8Array(_ / 2);
    for (let B = 0; B < V.length; B++) {
      const T = B * 2,
        Ce = A.slice(T, T + 2),
        pn = Number.parseInt(Ce, 16);
      if (Number.isNaN(pn) || pn < 0) throw new Error('Invalid byte sequence');
      V[B] = pn;
    }
    return V;
  }
  e.hexToBytes = u;
  const l = async () => {};
  e.nextTick = l;
  async function c(A, _, V) {
    let B = Date.now();
    for (let T = 0; T < A; T++) {
      V(T);
      const Ce = Date.now() - B;
      (Ce >= 0 && Ce < _) || (await (0, e.nextTick)(), (B += Ce));
    }
  }
  e.asyncLoop = c;
  function f(A) {
    if (typeof A != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof A}`);
    return new Uint8Array(new TextEncoder().encode(A));
  }
  e.utf8ToBytes = f;
  function g(A) {
    if ((typeof A == 'string' && (A = f(A)), !r(A)))
      throw new Error(`expected Uint8Array, got ${typeof A}`);
    return A;
  }
  e.toBytes = g;
  function m(...A) {
    const _ = new Uint8Array(A.reduce((B, T) => B + T.length, 0));
    let V = 0;
    return (
      A.forEach((B) => {
        if (!r(B)) throw new Error('Uint8Array expected');
        _.set(B, V), (V += B.length);
      }),
      _
    );
  }
  e.concatBytes = m;
  class P {
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = P;
  const v = {}.toString;
  function p(A, _) {
    if (_ !== void 0 && v.call(_) !== '[object Object]')
      throw new Error('Options should be object or undefined');
    return Object.assign(A, _);
  }
  e.checkOpts = p;
  function b(A) {
    const _ = (B) => A().update(g(B)).digest(),
      V = A();
    return (_.outputLen = V.outputLen), (_.blockLen = V.blockLen), (_.create = () => A()), _;
  }
  e.wrapConstructor = b;
  function z(A) {
    const _ = (B, T) => A(T).update(g(B)).digest(),
      V = A({});
    return (_.outputLen = V.outputLen), (_.blockLen = V.blockLen), (_.create = (B) => A(B)), _;
  }
  e.wrapConstructorWithOpts = z;
  function D(A) {
    const _ = (B, T) => A(T).update(g(B)).digest(),
      V = A({});
    return (_.outputLen = V.outputLen), (_.blockLen = V.blockLen), (_.create = (B) => A(B)), _;
  }
  e.wrapXOFConstructorWithOpts = D;
  function M(A = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == 'function')
      return t.crypto.getRandomValues(new Uint8Array(A));
    throw new Error('crypto.getRandomValues must be defined');
  }
  e.randomBytes = M;
})(Rc);
Object.defineProperty(U, '__esModule', { value: !0 });
U.shake256 =
  U.shake128 =
  U.keccak_512 =
  U.keccak_384 =
  U.keccak_256 =
  U.keccak_224 =
  U.sha3_512 =
  U.sha3_384 =
  U.sha3_256 =
  U.sha3_224 =
  U.Keccak =
  U.keccakP =
    void 0;
const ut = J,
  Mr = k,
  Vr = Rc,
  [Mc, Uc, $c] = [[], [], []],
  g0 = BigInt(0),
  Ir = BigInt(1),
  p0 = BigInt(2),
  y0 = BigInt(7),
  h0 = BigInt(256),
  m0 = BigInt(113);
for (let e = 0, t = Ir, r = 1, i = 0; e < 24; e++) {
  ([r, i] = [i, (2 * r + 3 * i) % 5]),
    Mc.push(2 * (5 * i + r)),
    Uc.push((((e + 1) * (e + 2)) / 2) % 64);
  let n = g0;
  for (let a = 0; a < 7; a++)
    (t = ((t << Ir) ^ ((t >> y0) * m0)) % h0), t & p0 && (n ^= Ir << ((Ir << BigInt(a)) - Ir));
  $c.push(n);
}
const [A0, v0] = (0, Mr.split)($c, !0),
  jo = (e, t, r) => (r > 32 ? (0, Mr.rotlBH)(e, t, r) : (0, Mr.rotlSH)(e, t, r)),
  qo = (e, t, r) => (r > 32 ? (0, Mr.rotlBL)(e, t, r) : (0, Mr.rotlSL)(e, t, r));
function Lc(e, t = 24) {
  const r = new Uint32Array(10);
  for (let i = 24 - t; i < 24; i++) {
    for (let s = 0; s < 10; s++) r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const o = (s + 8) % 10,
        d = (s + 2) % 10,
        u = r[d],
        l = r[d + 1],
        c = jo(u, l, 1) ^ r[o],
        f = qo(u, l, 1) ^ r[o + 1];
      for (let g = 0; g < 50; g += 10) (e[s + g] ^= c), (e[s + g + 1] ^= f);
    }
    let n = e[2],
      a = e[3];
    for (let s = 0; s < 24; s++) {
      const o = Uc[s],
        d = jo(n, a, o),
        u = qo(n, a, o),
        l = Mc[s];
      (n = e[l]), (a = e[l + 1]), (e[l] = d), (e[l + 1] = u);
    }
    for (let s = 0; s < 50; s += 10) {
      for (let o = 0; o < 10; o++) r[o] = e[s + o];
      for (let o = 0; o < 10; o++) e[s + o] ^= ~r[(o + 2) % 10] & r[(o + 4) % 10];
    }
    (e[0] ^= A0[i]), (e[1] ^= v0[i]);
  }
  r.fill(0);
}
U.keccakP = Lc;
class Zr extends Vr.Hash {
  constructor(t, r, i, n = !1, a = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = r),
      (this.outputLen = i),
      (this.enableXOF = n),
      (this.rounds = a),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      (0, ut.number)(i),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function');
    (this.state = new Uint8Array(200)), (this.state32 = (0, Vr.u32)(this.state));
  }
  keccak() {
    Lc(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(t) {
    (0, ut.exists)(this);
    const { blockLen: r, state: i } = this;
    t = (0, Vr.toBytes)(t);
    const n = t.length;
    for (let a = 0; a < n; ) {
      const s = Math.min(r - this.pos, n - a);
      for (let o = 0; o < s; o++) i[this.pos++] ^= t[a++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: t, suffix: r, pos: i, blockLen: n } = this;
    (t[i] ^= r), r & 128 && i === n - 1 && this.keccak(), (t[n - 1] ^= 128), this.keccak();
  }
  writeInto(t) {
    (0, ut.exists)(this, !1), (0, ut.bytes)(t), this.finish();
    const r = this.state,
      { blockLen: i } = this;
    for (let n = 0, a = t.length; n < a; ) {
      this.posOut >= i && this.keccak();
      const s = Math.min(i - this.posOut, a - n);
      t.set(r.subarray(this.posOut, this.posOut + s), n), (this.posOut += s), (n += s);
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
    return this.writeInto(t);
  }
  xof(t) {
    return (0, ut.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (((0, ut.output)(t, this), this.finished)) throw new Error('digest() was already called');
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: i, outputLen: n, rounds: a, enableXOF: s } = this;
    return (
      t || (t = new Zr(r, i, n, s, a)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = a),
      (t.suffix = i),
      (t.outputLen = n),
      (t.enableXOF = s),
      (t.destroyed = this.destroyed),
      t
    );
  }
}
U.Keccak = Zr;
const Ne = (e, t, r) => (0, Vr.wrapConstructor)(() => new Zr(t, e, r));
U.sha3_224 = Ne(6, 144, 224 / 8);
U.sha3_256 = Ne(6, 136, 256 / 8);
U.sha3_384 = Ne(6, 104, 384 / 8);
U.sha3_512 = Ne(6, 72, 512 / 8);
U.keccak_224 = Ne(1, 144, 224 / 8);
U.keccak_256 = Ne(1, 136, 256 / 8);
U.keccak_384 = Ne(1, 104, 384 / 8);
U.keccak_512 = Ne(1, 72, 512 / 8);
const Kc = (e, t, r) =>
  (0, Vr.wrapXOFConstructorWithOpts)(
    (i = {}) => new Zr(t, e, i.dkLen === void 0 ? r : i.dkLen, !0)
  );
U.shake128 = Kc(31, 168, 128 / 8);
U.shake256 = Kc(31, 136, 256 / 8);
Object.defineProperty(ji, '__esModule', { value: !0 });
ji.hash = void 0;
const P0 = y,
  b0 = U;
function S0(e) {
  return (0, b0.keccak_256)(Array.isArray(e) ? (0, P0.mergeBytes)(e) : e);
}
ji.hash = S0;
var re = {};
Object.defineProperty(re, '__esModule', { value: !0 });
re.addressPluginAuthority =
  re.updatePluginAuthority =
  re.ownerPluginAuthority =
  re.nonePluginAuthority =
    void 0;
const Zi = $();
function _0() {
  return (0, Zi.pluginAuthority)('None');
}
re.nonePluginAuthority = _0;
function z0() {
  return (0, Zi.pluginAuthority)('Owner');
}
re.ownerPluginAuthority = z0;
function E0() {
  return (0, Zi.pluginAuthority)('UpdateAuthority');
}
re.updatePluginAuthority = E0;
function w0(e) {
  return (0, Zi.pluginAuthority)('Address', { address: e });
}
re.addressPluginAuthority = w0;
var rt = {},
  Qt = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.isAssetOwner =
      e.isFrozen =
      e.deriveAssetPlugins =
      e.deriveExternalPluginAdapters =
      e.getExternalPluginAdapterKeyAsString =
      e.collectionAddress =
        void 0);
  const t = E,
    r = $();
  function i(l) {
    if (l.updateAuthority.type === 'Collection') return l.updateAuthority.address;
  }
  e.collectionAddress = i;
  const n = ['oracles', 'appDatas', 'lifecycleHooks', 'dataSections', 'linkedAppDatas'],
    a = (l) => {
      switch (l.type) {
        case 'Oracle':
          return `${l.type}-${l.baseAddress}`;
        case 'AppData':
          return `${l.type}-${l.dataAuthority.type}${l.dataAuthority.address ? `-${l.dataAuthority.address}` : ''}`;
        case 'LifecycleHook':
          return `${l.type}-${l.hookedProgram}`;
        case 'LinkedAppData':
          return `${l.type}-${l.dataAuthority.type}${l.dataAuthority.address ? `-${l.dataAuthority.address}` : ''}`;
        case 'DataSection':
          return `${l.type}-${(0, e.getExternalPluginAdapterKeyAsString)(l.parentKey)}`;
        default:
          throw new Error('Unknown ExternalPluginAdapter type');
      }
    };
  e.getExternalPluginAdapterKeyAsString = a;
  const s = (l, c) => {
    if (!c) return l;
    const f = {};
    return (
      n.forEach((g) => {
        var P, v;
        const m = new Set();
        (l[g] || c[g]) && (f[g] = []),
          (P = l[g]) == null ||
            P.forEach((p) => {
              var b;
              m.add((0, e.getExternalPluginAdapterKeyAsString)(p)), (b = f[g]) == null || b.push(p);
            }),
          (v = c[g]) == null ||
            v.forEach((p) => {
              var b;
              m.has((0, e.getExternalPluginAdapterKeyAsString)(p)) ||
                (b = f[g]) == null ||
                b.push(p);
            });
      }),
      f
    );
  };
  e.deriveExternalPluginAdapters = s;
  function o(l, c) {
    var p;
    if (!c) return l;
    const f = (0, e.deriveExternalPluginAdapters)(l, c);
    (p = f.dataSections) == null ||
      p.forEach((b) => {
        var M;
        let z, D;
        switch (b.parentKey.type) {
          case 'LinkedAppData':
            (D = b.parentKey.dataAuthority),
              (z =
                (M = f.linkedAppDatas) == null
                  ? void 0
                  : M.find((A) => (0, r.comparePluginAuthorities)(D, A.dataAuthority))),
              z && (z.data = b.data);
            break;
          case 'LinkedLifecycleHook':
          default:
            throw new Error('LinkedLifecycleHook currently unsupported');
        }
      });
    const { numMinted: g, currentSize: m, masterEdition: P, ...v } = c;
    return { ...v, ...l, ...f };
  }
  e.deriveAssetPlugins = o;
  function d(l, c) {
    var g, m;
    const f = o(l, c);
    return (
      ((g = f.freezeDelegate) == null ? void 0 : g.frozen) ||
      ((m = f.permanentFreezeDelegate) == null ? void 0 : m.frozen) ||
      !1
    );
  }
  e.isFrozen = d;
  function u(l, c) {
    return (0, t.publicKey)(l) === c.owner;
  }
  e.isAssetOwner = u;
})(Qt);
var Wc = {},
  xe = {},
  Q = {};
Object.defineProperty(Q, '__esModule', { value: !0 });
Q.hasCollectionUpdateAuthority =
  Q.hasAssetUpdateAuthority =
  Q.hasPluginUpdateAuthority =
  Q.hasPluginOwnerAuthority =
  Q.hasPluginAddressAuthority =
    void 0;
const Bs = E,
  Hc = Qt;
function x0(e, t) {
  return t.type === 'Address' && t.address === (0, Bs.publicKey)(e);
}
Q.hasPluginAddressAuthority = x0;
function B0(e, t, r) {
  return t.type === 'Owner' && (0, Hc.isAssetOwner)(e, r);
}
Q.hasPluginOwnerAuthority = B0;
function C0(e, t, r, i) {
  return t.type === 'UpdateAuthority' && Nc(e, r, i);
}
Q.hasPluginUpdateAuthority = C0;
function Nc(e, t, r) {
  var a, s, o;
  const i = (0, Bs.publicKey)(e),
    n = (0, Hc.deriveAssetPlugins)(t, r);
  if (
    n.updateAuthority.type === 'Collection' &&
    n.updateAuthority.address !== (r == null ? void 0 : r.publicKey)
  )
    throw Error('Collection mismatch');
  return (
    (n.updateAuthority.type === 'Address' && n.updateAuthority.address === i) ||
    (((a = n.updateDelegate) == null ? void 0 : a.authority.type) === 'Address' &&
      ((s = n.updateDelegate) == null ? void 0 : s.authority.address) === i) ||
    (((o = n.updateDelegate) == null ? void 0 : o.authority.type) === 'Owner' && n.owner === i) ||
    (n.updateAuthority.type === 'Collection' && (r == null ? void 0 : r.updateAuthority) === i)
  );
}
Q.hasAssetUpdateAuthority = Nc;
function I0(e, t) {
  var i, n;
  const r = (0, Bs.publicKey)(e);
  return (
    t.updateAuthority === r ||
    (((i = t.updateDelegate) == null ? void 0 : i.authority.type) === 'Address' &&
      ((n = t.updateDelegate) == null ? void 0 : n.authority.address) === r)
  );
}
Q.hasCollectionUpdateAuthority = I0;
Object.defineProperty(xe, '__esModule', { value: !0 });
xe.checkPluginAuthorities = xe.pluginTypeFromAssetPluginKey = xe.assetPluginKeyFromType = void 0;
const k0 = E,
  Fc = F,
  jc = R(),
  Xn = Qt,
  Zo = Q;
function qc(e) {
  return (0, Fc.lowercaseFirstLetter)(jc.PluginType[e]);
}
xe.assetPluginKeyFromType = qc;
function O0(e) {
  return jc.PluginType[(0, Fc.capitalizeFirstLetter)(e)];
}
xe.pluginTypeFromAssetPluginKey = O0;
function D0({ authority: e, pluginTypes: t, asset: r, collection: i }) {
  const n = (0, Xn.collectionAddress)(r);
  if (n && n !== (i == null ? void 0 : i.publicKey)) throw new Error('Collection mismatch');
  const a = (0, Xn.deriveAssetPlugins)(r, i),
    s = (0, k0.publicKey)(e),
    o = (0, Zo.hasAssetUpdateAuthority)(s, r, i),
    d = (0, Xn.isAssetOwner)(s, r);
  return t.map((u) => {
    const l = a[qc(u)];
    return !!(
      l &&
      ((0, Zo.hasPluginAddressAuthority)(s, l.authority) ||
        (l.authority.type === 'UpdateAuthority' && o) ||
        (l.authority.type === 'Owner' && d))
    );
  });
}
xe.checkPluginAuthorities = D0;
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.validateUpdate =
      e.canUpdate =
      e.validateBurn =
      e.canBurn =
      e.validateTransfer =
      e.canTransfer =
      e.LifecycleValidationError =
        void 0);
  const t = R(),
    r = Qt,
    i = xe,
    n = Q,
    a = $();
  var s;
  (function (g) {
    (g.OracleValidationFailed = 'Oracle validation failed.'),
      (g.NoAuthority = 'No authority to perform this action.'),
      (g.AssetFrozen = 'Asset is frozen.');
  })((s = e.LifecycleValidationError || (e.LifecycleValidationError = {})));
  function o(g, m, P) {
    const v = (0, r.deriveAssetPlugins)(m, P);
    return (0, i.checkPluginAuthorities)({
      authority: g,
      pluginTypes: [t.PluginType.PermanentTransferDelegate],
      asset: v,
      collection: P,
    }).some((z) => z)
      ? !0
      : (0, r.isFrozen)(m, P)
        ? !1
        : v.owner === g
          ? !0
          : (0, i.checkPluginAuthorities)({
              authority: g,
              pluginTypes: [t.PluginType.TransferDelegate],
              asset: v,
              collection: P,
            }).some((z) => z);
  }
  e.canTransfer = o;
  async function d(g, { authority: m, asset: P, collection: v, recipient: p }) {
    var M;
    const b = (0, r.deriveAssetPlugins)(P, v);
    if (
      (0, i.checkPluginAuthorities)({
        authority: m,
        pluginTypes: [t.PluginType.PermanentTransferDelegate],
        asset: b,
        collection: v,
      }).some((A) => A)
    )
      return null;
    if ((0, r.isFrozen)(P, v)) return s.AssetFrozen;
    if ((M = b.oracles) != null && M.length) {
      const A = b.oracles
        .filter((_) => {
          var V, B;
          return (B = (V = _.lifecycleChecks) == null ? void 0 : V.transfer) == null
            ? void 0
            : B.includes(a.CheckResult.CAN_REJECT);
        })
        .filter(
          (_) =>
            !!(
              !_.baseAddressConfig ||
              p ||
              !(0, a.getExtraAccountRequiredInputs)(_.baseAddressConfig).includes('recipient')
            )
        );
      if (A.length) {
        const _ = A.map((T) => ({
          pubkey: (0, a.findOracleAccount)(g, T, {
            asset: P.publicKey,
            collection: v == null ? void 0 : v.publicKey,
            owner: P.owner,
            recipient: p,
          }),
          offset: T.resultsOffset,
        }));
        if (
          !(await g.rpc.getAccounts(_.map((T) => T.pubkey)))
            .map((T, Ce) =>
              T.exists ? (0, a.deserializeOracleValidation)(T.data, _[Ce].offset) : null
            )
            .every((T) =>
              (T == null ? void 0 : T.__kind) === 'Uninitialized'
                ? !1
                : (T == null ? void 0 : T.transfer) === t.ExternalValidationResult.Pass
            )
        )
          return s.OracleValidationFailed;
      }
    }
    return b.owner === m ||
      (0, i.checkPluginAuthorities)({
        authority: m,
        pluginTypes: [t.PluginType.TransferDelegate],
        asset: b,
        collection: v,
      }).some((A) => A)
      ? null
      : s.NoAuthority;
  }
  e.validateTransfer = d;
  function u(g, m, P) {
    const v = (0, r.deriveAssetPlugins)(m, P);
    return (0, i.checkPluginAuthorities)({
      authority: g,
      pluginTypes: [t.PluginType.PermanentBurnDelegate],
      asset: v,
      collection: P,
    }).some((z) => z)
      ? !0
      : (0, r.isFrozen)(m, P)
        ? !1
        : v.owner === g
          ? !0
          : (0, i.checkPluginAuthorities)({
              authority: g,
              pluginTypes: [t.PluginType.BurnDelegate],
              asset: m,
              collection: P,
            }).some((z) => z);
  }
  e.canBurn = u;
  async function l(g, { authority: m, asset: P, collection: v }) {
    var D;
    const p = (0, r.deriveAssetPlugins)(P, v);
    if (
      (0, i.checkPluginAuthorities)({
        authority: m,
        pluginTypes: [t.PluginType.PermanentBurnDelegate],
        asset: p,
        collection: v,
      }).some((M) => M)
    )
      return null;
    if ((0, r.isFrozen)(P, v)) return s.AssetFrozen;
    if ((D = p.oracles) != null && D.length) {
      const M = p.oracles.filter((A) => {
        var _, V;
        return (V = (_ = A.lifecycleChecks) == null ? void 0 : _.burn) == null
          ? void 0
          : V.includes(a.CheckResult.CAN_REJECT);
      });
      if (M.length) {
        const A = M.map((B) => ({
          pubkey: (0, a.findOracleAccount)(g, B, {
            asset: P.publicKey,
            collection: v == null ? void 0 : v.publicKey,
            owner: P.owner,
          }),
          offset: B.resultsOffset,
        }));
        if (
          !(await g.rpc.getAccounts(A.map((B) => B.pubkey)))
            .map((B, T) =>
              B.exists ? (0, a.deserializeOracleValidation)(B.data, A[T].offset) : null
            )
            .every((B) =>
              (B == null ? void 0 : B.__kind) === 'Uninitialized'
                ? !1
                : (B == null ? void 0 : B.burn) === t.ExternalValidationResult.Pass
            )
        )
          return s.OracleValidationFailed;
      }
    }
    return p.owner === m ||
      (0, i.checkPluginAuthorities)({
        authority: m,
        pluginTypes: [t.PluginType.BurnDelegate],
        asset: P,
        collection: v,
      }).some((M) => M)
      ? null
      : s.NoAuthority;
  }
  e.validateBurn = l;
  function c(g, m, P) {
    return (0, n.hasAssetUpdateAuthority)(g, m, P);
  }
  e.canUpdate = c;
  async function f(g, { authority: m, asset: P, collection: v }) {
    var p;
    if ((p = P.oracles) != null && p.length) {
      const b = P.oracles.filter((z) => {
        var D, M;
        return (M = (D = z.lifecycleChecks) == null ? void 0 : D.update) == null
          ? void 0
          : M.includes(a.CheckResult.CAN_REJECT);
      });
      if (b.length) {
        const z = b.map((A) => ({
          pubkey: (0, a.findOracleAccount)(g, A, {
            asset: P.publicKey,
            collection: v == null ? void 0 : v.publicKey,
            owner: P.owner,
          }),
          offset: A.resultsOffset,
        }));
        if (
          !(await g.rpc.getAccounts(z.map((A) => A.pubkey)))
            .map((A, _) =>
              A.exists ? (0, a.deserializeOracleValidation)(A.data, z[_].offset) : null
            )
            .every((A) =>
              (A == null ? void 0 : A.__kind) === 'Uninitialized'
                ? !1
                : (A == null ? void 0 : A.update) === t.ExternalValidationResult.Pass
            )
        )
          return s.OracleValidationFailed;
      }
    }
    return (0, n.hasAssetUpdateAuthority)(m, P, v) ? null : s.NoAuthority;
  }
  e.validateUpdate = f;
})(Wc);
var Zc = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.fetchCollection =
      e.fetchAsset =
      e.fetchCollectionsByUpdateAuthority =
      e.fetchAssetsByCollection =
      e.fetchAssetsByOwner =
      e.deriveAssetPluginsWithFetch =
        void 0);
  const t = E,
    r = R(),
    i = $(),
    n = Qt,
    a = async (c, f) => {
      const g = Array.from(new Set(f.map((v) => (0, n.collectionAddress)(v)))).filter((v) => !!v),
        P = (await (0, r.fetchAllCollectionV1)(c, g)).reduce(
          (v, p) => ((v[p.publicKey] = p), v),
          {}
        );
      return f.map((v) => {
        const p = (0, n.collectionAddress)(v);
        return p ? (0, n.deriveAssetPlugins)(v, P[p]) : v;
      });
    };
  e.deriveAssetPluginsWithFetch = a;
  const s = async (c, f, g = {}) => {
    const m = await (0, r.getAssetV1GpaBuilder)(c)
      .whereField('key', r.Key.AssetV1)
      .whereField('owner', (0, t.publicKey)(f))
      .getDeserialized();
    return g.skipDerivePlugins ? m : (0, e.deriveAssetPluginsWithFetch)(c, m);
  };
  e.fetchAssetsByOwner = s;
  const o = async (c, f, g = {}) => {
    const m = await (0, r.getAssetV1GpaBuilder)(c)
      .whereField('key', r.Key.AssetV1)
      .whereField('updateAuthority', (0, i.updateAuthority)('Collection', [(0, t.publicKey)(f)]))
      .getDeserialized();
    return g.skipDerivePlugins ? m : (0, e.deriveAssetPluginsWithFetch)(c, m);
  };
  e.fetchAssetsByCollection = o;
  const d = async (c, f) =>
    (0, r.getCollectionV1GpaBuilder)(c)
      .whereField('key', r.Key.CollectionV1)
      .whereField('updateAuthority', (0, t.publicKey)(f))
      .getDeserialized();
  e.fetchCollectionsByUpdateAuthority = d;
  const u = async (c, f, g = {}) => {
    const m = await (0, r.fetchAssetV1)(c, (0, t.publicKey)(f));
    if (g.skipDerivePlugins) return m;
    const P = (0, n.collectionAddress)(m);
    return P ? (0, n.deriveAssetPlugins)(m, await (0, r.fetchCollectionV1)(c, P)) : m;
  };
  e.fetchAsset = u;
  const l = async (c, f, g) => (0, r.fetchCollectionV1)(c, (0, t.publicKey)(f), g);
  e.fetchCollection = l;
})(Zc);
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, n, a, s) {
            s === void 0 && (s = a);
            var o = Object.getOwnPropertyDescriptor(n, a);
            (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return n[a];
                },
              }),
              Object.defineProperty(i, s, o);
          }
        : function (i, n, a, s) {
            s === void 0 && (s = a), (i[s] = n[a]);
          }),
    r =
      (C && C.__exportStar) ||
      function (i, n) {
        for (var a in i)
          a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    r(Qt, e),
    r(Wc, e),
    r(xe, e),
    r(Q, e),
    r(Zc, e);
})(rt);
var Xc = {},
  Xi = {},
  Qe = {};
Object.defineProperty(Qe, '__esModule', { value: !0 });
Qe.ERR_CANNOT_REVOKE = Qe.ERR_CANNOT_DELEGATE = void 0;
Qe.ERR_CANNOT_DELEGATE =
  'Cannot delegate. The target delegate is already either a plugin authority or the asset owner';
Qe.ERR_CANNOT_REVOKE =
  'Cannot revoke. Either no plugins defined or the plugin authority is already the asset owner';
var Xr = {};
Object.defineProperty(Xr, '__esModule', { value: !0 });
Xr.approvePluginAuthority = void 0;
const Xo = R(),
  V0 = $(),
  T0 = (e, { plugin: t, newAuthority: r, ...i }) =>
    (0, Xo.approvePluginAuthorityV1)(e, {
      ...i,
      pluginType: Xo.PluginType[t.type],
      newAuthority: (0, V0.pluginAuthorityToBase)(r),
    });
Xr.approvePluginAuthority = T0;
Object.defineProperty(Xi, '__esModule', { value: !0 });
Xi.legacyDelegate = void 0;
const R0 = E,
  M0 = Qe,
  U0 = R(),
  ai = $(),
  $0 = re,
  L0 = Xr;
function K0(e, t, r) {
  const i = (({ freezeDelegate: u, transferDelegate: l, burnDelegate: c }) => ({
    ...(u ? { freezeDelegate: u } : {}),
    ...(l ? { transferDelegate: l } : {}),
    ...(c ? { burnDelegate: c } : {}),
  }))(t);
  if (
    !Object.values(i).every((u) => {
      const l = t.owner,
        c = u.authority,
        f = c.address;
      return c.type === 'Owner' ? r !== l : f !== r && f !== l;
    })
  )
    throw new Error(M0.ERR_CANNOT_DELEGATE);
  let a = (0, R0.transactionBuilder)();
  const s = Object.keys(i);
  return (
    s.forEach((u) => {
      const l = (0, ai.pluginKeyToPluginType)(u);
      a = a.add(
        (0, L0.approvePluginAuthority)(e, {
          asset: t.publicKey,
          plugin: { type: l },
          newAuthority: { type: 'Address', address: r },
        })
      );
    }),
    ['freezeDelegate', 'transferDelegate', 'burnDelegate']
      .filter((u) => !s.includes(u))
      .forEach((u) => {
        const l =
          u === 'freezeDelegate'
            ? (0, ai.createPlugin)({ type: 'FreezeDelegate', data: { frozen: !1 } })
            : u === 'transferDelegate'
              ? (0, ai.createPlugin)({ type: 'TransferDelegate' })
              : (0, ai.createPlugin)({ type: 'BurnDelegate' });
        a = a.add(
          (0, U0.addPluginV1)(e, {
            asset: t.publicKey,
            plugin: l,
            initAuthority: (0, $0.addressPluginAuthority)(r),
          })
        );
      }),
    a
  );
}
Xi.legacyDelegate = K0;
var Gi = {};
Object.defineProperty(Gi, '__esModule', { value: !0 });
Gi.legacyRevoke = void 0;
const W0 = E,
  Go = R(),
  H0 = Qe,
  N0 = $();
function F0(e, t) {
  const r = (({ freezeDelegate: s, transferDelegate: o, burnDelegate: d }) => ({
      ...(s ? { freezeDelegate: s } : {}),
      ...(o ? { transferDelegate: o } : {}),
      ...(d ? { burnDelegate: d } : {}),
    }))(t),
    i = Object.values(r);
  if (
    !(
      i.length > 0 &&
      i.every((s) => {
        const o = t.owner,
          d = s.authority;
        return d.type !== 'Owner' && d.address !== o;
      })
    )
  )
    throw new Error(H0.ERR_CANNOT_REVOKE);
  let a = (0, W0.transactionBuilder)();
  return (
    Object.keys(r).forEach((s) => {
      const o = (0, N0.pluginKeyToPluginType)(s);
      a = a.add(
        (0, Go.revokePluginAuthorityV1)(e, { asset: t.publicKey, pluginType: Go.PluginType[o] })
      );
    }),
    a
  );
}
Gi.legacyRevoke = F0;
var jt = {};
Object.defineProperty(jt, '__esModule', { value: !0 });
jt.thawAsset = jt.freezeAsset = void 0;
const oa = E,
  De = R(),
  Gc = rt,
  Yc = $(),
  j0 = re;
function q0(e, { asset: t, authority: r, collection: i, delegate: n }) {
  if ((0, Gc.isFrozen)(t, i)) throw new Error('Cannot freeze: asset is already frozen');
  if (t.freezeDelegate && t.freezeDelegate.authority.type === 'None')
    throw new Error('Cannot freeze: owner has made the freeze immutable until transfer');
  let a = (0, oa.transactionBuilder)();
  return (
    t.freezeDelegate &&
      (t.freezeDelegate.authority.type !== 'Owner' &&
        (a = a.add(
          (0, De.revokePluginAuthorityV1)(e, {
            asset: t.publicKey,
            collection: i == null ? void 0 : i.publicKey,
            pluginType: De.PluginType.FreezeDelegate,
            authority: r,
          })
        )),
      (a = a.add(
        (0, De.removePluginV1)(e, {
          asset: t.publicKey,
          collection: i == null ? void 0 : i.publicKey,
          pluginType: De.PluginType.FreezeDelegate,
          authority: r,
        })
      ))),
    (a = a.add(
      (0, De.addPluginV1)(e, {
        asset: t.publicKey,
        collection: i == null ? void 0 : i.publicKey,
        plugin: (0, Yc.createPlugin)({ type: 'FreezeDelegate', data: { frozen: !0 } }),
        initAuthority: (0, j0.addressPluginAuthority)((0, oa.publicKey)(n)),
        authority: r,
      })
    )),
    a
  );
}
jt.freezeAsset = q0;
function Z0(e, { asset: t, delegate: r, collection: i }) {
  if (!(0, Gc.isFrozen)(t, i)) throw new Error('Cannot thaw: asset is not frozen');
  return (0, oa.transactionBuilder)()
    .add(
      (0, De.updatePluginV1)(e, {
        asset: t.publicKey,
        collection: i == null ? void 0 : i.publicKey,
        plugin: (0, Yc.createPlugin)({ type: 'FreezeDelegate', data: { frozen: !1 } }),
        authority: r,
      })
    )
    .add(
      (0, De.revokePluginAuthorityV1)(e, {
        asset: t.publicKey,
        collection: i == null ? void 0 : i.publicKey,
        pluginType: De.PluginType.FreezeDelegate,
        authority: r,
      })
    );
}
jt.thawAsset = Z0;
var Yi = {};
Object.defineProperty(Yi, '__esModule', { value: !0 });
Yi.create = void 0;
const X0 = E,
  Yo = R(),
  Gn = $(),
  G0 = rt,
  Y0 = Gt(),
  J0 = (e, { asset: t, plugins: r, collection: i, ...n }) => {
    const a = n.owner || n.updateAuthority || n.payer,
      s = { oracles: [], lifecycleHooks: [] },
      o = [],
      d = [];
    r == null ||
      r.forEach((c) => {
        var f, g;
        if ((0, Y0.isExternalPluginAdapterType)(c))
          switch ((o.push(c), c.type)) {
            case 'Oracle':
              (f = s.oracles) == null ||
                f.push({
                  ...c,
                  resultsOffset: c.resultsOffset || { type: 'NoOffset' },
                  baseAddress: c.baseAddress,
                  authority: c.initPluginAuthority || { type: 'UpdateAuthority' },
                  type: 'Oracle',
                });
              break;
            case 'AppData':
              break;
            case 'LifecycleHook':
              (g = s.lifecycleHooks) == null ||
                g.push({
                  ...c,
                  hookedProgram: c.hookedProgram,
                  authority: c.initPluginAuthority || { type: 'UpdateAuthority' },
                  type: 'LifecycleHook',
                  schema: c.schema || Yo.ExternalPluginAdapterSchema.Binary,
                });
              break;
          }
        else d.push(c);
      });
    const u = (0, G0.deriveExternalPluginAdapters)(s, i),
      l = (0, Gn.findExtraAccounts)(e, 'create', u, {
        asset: t.publicKey,
        collection: i ? i.publicKey : void 0,
        owner: a ? (0, X0.publicKey)(a) : e.identity.publicKey,
      });
    return (0, Yo.createV2)(e, {
      ...n,
      plugins: d.map(Gn.pluginAuthorityPairV2),
      externalPluginAdapters: o.map(Gn.createExternalPluginAdapterInitInfo),
      asset: t,
      collection: i ? i.publicKey : void 0,
    }).addRemainingAccounts(l);
  };
Yi.create = J0;
var Ji = {};
Object.defineProperty(Ji, '__esModule', { value: !0 });
Ji.update = void 0;
const Q0 = R(),
  em = $(),
  tm = rt,
  rm = (e, { asset: t, collection: r, name: i, uri: n, ...a }) => {
    const s = (0, tm.deriveExternalPluginAdapters)(t, r),
      o = (0, em.findExtraAccounts)(e, 'update', s, {
        asset: t.publicKey,
        collection: r == null ? void 0 : r.publicKey,
        owner: t.owner,
      });
    return (0, Q0.updateV2)(e, {
      ...a,
      asset: t.publicKey,
      collection: r == null ? void 0 : r.publicKey,
      newName: i,
      newUri: n,
    }).addRemainingAccounts(o);
  };
Ji.update = rm;
var Qi = {};
Object.defineProperty(Qi, '__esModule', { value: !0 });
Qi.transfer = void 0;
const im = E,
  nm = R(),
  am = $(),
  sm = rt,
  om = (e, { asset: t, collection: r, ...i }) => {
    const n = (0, sm.deriveExternalPluginAdapters)(t, r),
      a = (0, am.findExtraAccounts)(e, 'transfer', n, {
        asset: t.publicKey,
        collection: r == null ? void 0 : r.publicKey,
        owner: t.owner,
        recipient: (0, im.publicKey)(i.newOwner),
      });
    return (0, nm.transferV1)(e, {
      ...i,
      asset: t.publicKey,
      collection: r == null ? void 0 : r.publicKey,
    }).addRemainingAccounts(a);
  };
Qi.transfer = om;
var en = {};
Object.defineProperty(en, '__esModule', { value: !0 });
en.burn = void 0;
const lm = R(),
  um = $(),
  cm = rt,
  dm = (e, { asset: t, collection: r, ...i }) => {
    const n = (0, cm.deriveExternalPluginAdapters)(t, r),
      a = (0, um.findExtraAccounts)(e, 'burn', n, {
        asset: t.publicKey,
        collection: r == null ? void 0 : r.publicKey,
        owner: t.owner,
      });
    return (0, lm.burnV1)(e, {
      ...i,
      asset: t.publicKey,
      collection: r == null ? void 0 : r.publicKey,
    }).addRemainingAccounts(a);
  };
en.burn = dm;
var tn = {};
Object.defineProperty(tn, '__esModule', { value: !0 });
tn.addPlugin = void 0;
const Jo = R(),
  Yn = $(),
  fm = (e, { plugin: t, ...r }) => {
    if ((0, Yn.isExternalPluginAdapterType)(t))
      return (0, Jo.addExternalPluginAdapterV1)(e, {
        ...r,
        initInfo: (0, Yn.createExternalPluginAdapterInitInfo)(t),
      });
    const i = (0, Yn.pluginAuthorityPairV2)(t);
    return (0, Jo.addPluginV1)(e, { ...r, plugin: i.plugin, initAuthority: i.authority });
  };
tn.addPlugin = fm;
var rn = {};
Object.defineProperty(rn, '__esModule', { value: !0 });
rn.removePlugin = void 0;
const Jn = R(),
  gm = $(),
  pm = qr,
  ym = (e, { plugin: t, ...r }) =>
    (0, gm.isExternalPluginAdapterType)(t)
      ? (0, Jn.removeExternalPluginAdapterV1)(e, {
          ...r,
          key: (0, pm.externalPluginAdapterKeyToBase)(t),
        })
      : (0, Jn.removePluginV1)(e, { ...r, pluginType: Jn.PluginType[t.type] });
rn.removePlugin = ym;
var nn = {};
Object.defineProperty(nn, '__esModule', { value: !0 });
nn.updatePlugin = void 0;
const Qo = R(),
  si = $(),
  hm = (e, { plugin: t, ...r }) => {
    if ((0, si.isExternalPluginAdapterType)(t)) {
      const i = t;
      return (0, Qo.updateExternalPluginAdapterV1)(e, {
        ...r,
        updateInfo: (0, si.createExternalPluginAdapterUpdateInfo)(i),
        key: (0, si.externalPluginAdapterKeyToBase)(i.key),
      });
    }
    return (0, Qo.updatePluginV1)(e, { ...r, plugin: (0, si.createPluginV2)(t) });
  };
nn.updatePlugin = hm;
var an = {};
Object.defineProperty(an, '__esModule', { value: !0 });
an.revokePluginAuthority = void 0;
const el = R(),
  mm = (e, { plugin: t, ...r }) =>
    (0, el.revokePluginAuthorityV1)(e, { ...r, pluginType: el.PluginType[t.type] });
an.revokePluginAuthority = mm;
var Jc = {},
  sn = {};
Object.defineProperty(sn, '__esModule', { value: !0 });
sn.addCollectionPlugin = void 0;
const tl = R(),
  Am = $(),
  rl = Gt(),
  vm = (e, { plugin: t, ...r }) => {
    if ((0, rl.isExternalPluginAdapterType)(t))
      return (0, tl.addCollectionExternalPluginAdapterV1)(e, {
        ...r,
        initInfo: (0, rl.createExternalPluginAdapterInitInfo)(t),
      });
    const i = (0, Am.pluginAuthorityPairV2)(t);
    return (0, tl.addCollectionPluginV1)(e, { ...r, plugin: i.plugin, initAuthority: i.authority });
  };
sn.addCollectionPlugin = vm;
var on = {};
Object.defineProperty(on, '__esModule', { value: !0 });
on.approveCollectionPluginAuthority = void 0;
const il = R(),
  Pm = $(),
  bm = (e, { plugin: t, newAuthority: r, ...i }) =>
    (0, il.approveCollectionPluginAuthorityV1)(e, {
      ...i,
      pluginType: il.PluginType[t.type],
      newAuthority: (0, Pm.pluginAuthorityToBase)(r),
    });
on.approveCollectionPluginAuthority = bm;
var Qc = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.burnCollection = void 0);
  const t = R();
  Object.defineProperty(e, 'burnCollection', {
    enumerable: !0,
    get: function () {
      return t.burnCollectionV1;
    },
  });
})(Qc);
var ln = {};
Object.defineProperty(ln, '__esModule', { value: !0 });
ln.createCollection = void 0;
const Sm = R(),
  nl = $(),
  _m = Gt(),
  zm = (e, { plugins: t, ...r }) => {
    const i = [],
      n = [];
    return (
      t == null ||
        t.forEach((a) => {
          (0, _m.isExternalPluginAdapterType)(a) ? n.push(a) : i.push(a);
        }),
      (0, Sm.createCollectionV2)(e, {
        ...r,
        plugins: i.map(nl.pluginAuthorityPairV2),
        externalPluginAdapters: n.map(nl.createExternalPluginAdapterInitInfo),
      })
    );
  };
ln.createCollection = zm;
var un = {};
Object.defineProperty(un, '__esModule', { value: !0 });
un.removeCollectionPlugin = void 0;
const Qn = R(),
  Em = $(),
  wm = Gt(),
  xm = (e, { plugin: t, ...r }) =>
    (0, wm.isExternalPluginAdapterType)(t)
      ? (0, Qn.removeCollectionExternalPluginAdapterV1)(e, {
          ...r,
          key: (0, Em.externalPluginAdapterKeyToBase)(t),
        })
      : (0, Qn.removeCollectionPluginV1)(e, { ...r, pluginType: Qn.PluginType[t.type] });
un.removeCollectionPlugin = xm;
var cn = {};
Object.defineProperty(cn, '__esModule', { value: !0 });
cn.revokeCollectionPluginAuthority = void 0;
const al = R(),
  Bm = (e, { plugin: t, ...r }) =>
    (0, al.revokeCollectionPluginAuthorityV1)(e, { ...r, pluginType: al.PluginType[t.type] });
cn.revokeCollectionPluginAuthority = Bm;
var dn = {};
Object.defineProperty(dn, '__esModule', { value: !0 });
dn.updateCollection = void 0;
const Cm = R(),
  Im = (e, { name: t, uri: r, ...i }) =>
    (0, Cm.updateCollectionV1)(e, { ...i, newName: t, newUri: r });
dn.updateCollection = Im;
var fn = {};
Object.defineProperty(fn, '__esModule', { value: !0 });
fn.updateCollectionPlugin = void 0;
const sl = R(),
  oi = $(),
  km = (e, { plugin: t, ...r }) => {
    if ((0, oi.isExternalPluginAdapterType)(t)) {
      const i = t;
      return (0, sl.updateCollectionExternalPluginAdapterV1)(e, {
        ...r,
        updateInfo: (0, oi.createExternalPluginAdapterUpdateInfo)(i),
        key: (0, oi.externalPluginAdapterKeyToBase)(i.key),
      });
    }
    return (0, sl.updateCollectionPluginV1)(e, { ...r, plugin: (0, oi.createPluginV2)(t) });
  };
fn.updateCollectionPlugin = km;
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, n, a, s) {
            s === void 0 && (s = a);
            var o = Object.getOwnPropertyDescriptor(n, a);
            (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return n[a];
                },
              }),
              Object.defineProperty(i, s, o);
          }
        : function (i, n, a, s) {
            s === void 0 && (s = a), (i[s] = n[a]);
          }),
    r =
      (C && C.__exportStar) ||
      function (i, n) {
        for (var a in i)
          a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    r(sn, e),
    r(on, e),
    r(Qc, e),
    r(ln, e),
    r(un, e),
    r(cn, e),
    r(dn, e),
    r(fn, e);
})(Jc);
var gn = {};
Object.defineProperty(gn, '__esModule', { value: !0 });
gn.writeData = void 0;
const Om = R(),
  Dm = $(),
  Vm = (e, t) => {
    const { key: r, ...i } = t;
    return (0, Om.writeExternalPluginAdapterDataV1)(e, {
      ...i,
      key: (0, Dm.externalPluginAdapterKeyToBase)(r),
    });
  };
gn.writeData = Vm;
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, n, a, s) {
            s === void 0 && (s = a);
            var o = Object.getOwnPropertyDescriptor(n, a);
            (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return n[a];
                },
              }),
              Object.defineProperty(i, s, o);
          }
        : function (i, n, a, s) {
            s === void 0 && (s = a), (i[s] = n[a]);
          }),
    r =
      (C && C.__exportStar) ||
      function (i, n) {
        for (var a in i)
          a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    r(Xi, e),
    r(Gi, e),
    r(jt, e),
    r(Yi, e),
    r(Ji, e),
    r(Qi, e),
    r(en, e),
    r(tn, e),
    r(rn, e),
    r(nn, e),
    r(Xr, e),
    r(an, e),
    r(Jc, e),
    r(gn, e);
})(Xc);
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, n, a, s) {
            s === void 0 && (s = a);
            var o = Object.getOwnPropertyDescriptor(n, a);
            (!o || ('get' in o ? !n.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return n[a];
                },
              }),
              Object.defineProperty(i, s, o);
          }
        : function (i, n, a, s) {
            s === void 0 && (s = a), (i[s] = n[a]);
          }),
    r =
      (C && C.__exportStar) ||
      function (i, n) {
        for (var a in i)
          a !== 'default' && !Object.prototype.hasOwnProperty.call(n, a) && t(n, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    r(R(), e),
    r(Fi, e),
    r(ji, e),
    r(re, e),
    r($(), e),
    r(rt, e),
    r(Xc, e);
})(rd);
