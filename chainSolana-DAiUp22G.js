import {
  M as Ht,
  r as ln,
  e as Xs,
  f as Js,
  B as U,
  g as on,
  h as B,
  n as ye,
  s as I,
  i as R,
  j as Be,
  u as G,
  k as be,
  o as yt,
  l as Vt,
  q as Yn,
  m,
  v as re,
  x as p,
  z as _,
  A,
  y as h,
  C as L,
  E as Ys,
  F as Ie,
  D as et,
  H as Ue,
  I as Zs,
  b as ne,
  J as fe,
  K as As,
  p as Zn,
  w as jt,
  L as Yr,
  G as S,
  P as Zr,
  t as Qr,
  a as Qs,
  N as Qn,
  R as ei,
  O as ti,
  Q as ni,
  S as si,
  T as ri,
  U as ii,
  V as es,
  W as er,
} from './metaplex-81r3lICz.js';
import { c as x, a as tr } from './lodash-aFjP5OGs.js';
function uu(s) {
  throw new Error(
    'Could not dynamically require "' +
      s +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
const oi = 'logger/5.7.0';
let _s = !1,
  Is = !1;
const tn = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Rs = tn.default,
  Pn = null;
function ai() {
  try {
    const s = [];
    if (
      (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((e) => {
        try {
          if ('test'.normalize(e) !== 'test') throw new Error('bad normalize');
        } catch {
          s.push(e);
        }
      }),
      s.length)
    )
      throw new Error('missing ' + s.join(', '));
    if ('é'.normalize('NFD') !== 'é') throw new Error('broken implementation');
  } catch (s) {
    return s.message;
  }
  return null;
}
const Es = ai();
var Mn;
(function (s) {
  (s.DEBUG = 'DEBUG'),
    (s.INFO = 'INFO'),
    (s.WARNING = 'WARNING'),
    (s.ERROR = 'ERROR'),
    (s.OFF = 'OFF');
})(Mn || (Mn = {}));
var Oe;
(function (s) {
  (s.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
    (s.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
    (s.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
    (s.NETWORK_ERROR = 'NETWORK_ERROR'),
    (s.SERVER_ERROR = 'SERVER_ERROR'),
    (s.TIMEOUT = 'TIMEOUT'),
    (s.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
    (s.NUMERIC_FAULT = 'NUMERIC_FAULT'),
    (s.MISSING_NEW = 'MISSING_NEW'),
    (s.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
    (s.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
    (s.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
    (s.CALL_EXCEPTION = 'CALL_EXCEPTION'),
    (s.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
    (s.NONCE_EXPIRED = 'NONCE_EXPIRED'),
    (s.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
    (s.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
    (s.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED'),
    (s.ACTION_REJECTED = 'ACTION_REJECTED');
})(Oe || (Oe = {}));
const Ps = '0123456789abcdef';
class te {
  constructor(e) {
    Object.defineProperty(this, 'version', { enumerable: !0, value: e, writable: !1 });
  }
  _log(e, t) {
    const n = e.toLowerCase();
    tn[n] == null && this.throwArgumentError('invalid log level name', 'logLevel', e),
      !(Rs > tn[n]) && console.log.apply(console, t);
  }
  debug(...e) {
    this._log(te.levels.DEBUG, e);
  }
  info(...e) {
    this._log(te.levels.INFO, e);
  }
  warn(...e) {
    this._log(te.levels.WARNING, e);
  }
  makeError(e, t, n) {
    if (Is) return this.makeError('censored error', t, {});
    t || (t = te.errors.UNKNOWN_ERROR), n || (n = {});
    const r = [];
    Object.keys(n).forEach((c) => {
      const d = n[c];
      try {
        if (d instanceof Uint8Array) {
          let u = '';
          for (let l = 0; l < d.length; l++) (u += Ps[d[l] >> 4]), (u += Ps[d[l] & 15]);
          r.push(c + '=Uint8Array(0x' + u + ')');
        } else r.push(c + '=' + JSON.stringify(d));
      } catch {
        r.push(c + '=' + JSON.stringify(n[c].toString()));
      }
    }),
      r.push(`code=${t}`),
      r.push(`version=${this.version}`);
    const i = e;
    let o = '';
    switch (t) {
      case Oe.NUMERIC_FAULT: {
        o = 'NUMERIC_FAULT';
        const c = e;
        switch (c) {
          case 'overflow':
          case 'underflow':
          case 'division-by-zero':
            o += '-' + c;
            break;
          case 'negative-power':
          case 'negative-width':
            o += '-unsupported';
            break;
          case 'unbound-bitwise-result':
            o += '-unbound-result';
            break;
        }
        break;
      }
      case Oe.CALL_EXCEPTION:
      case Oe.INSUFFICIENT_FUNDS:
      case Oe.MISSING_NEW:
      case Oe.NONCE_EXPIRED:
      case Oe.REPLACEMENT_UNDERPRICED:
      case Oe.TRANSACTION_REPLACED:
      case Oe.UNPREDICTABLE_GAS_LIMIT:
        o = t;
        break;
    }
    o && (e += ' [ See: https://links.ethers.org/v5-errors-' + o + ' ]'),
      r.length && (e += ' (' + r.join(', ') + ')');
    const a = new Error(e);
    return (
      (a.reason = i),
      (a.code = t),
      Object.keys(n).forEach(function (c) {
        a[c] = n[c];
      }),
      a
    );
  }
  throwError(e, t, n) {
    throw this.makeError(e, t, n);
  }
  throwArgumentError(e, t, n) {
    return this.throwError(e, te.errors.INVALID_ARGUMENT, { argument: t, value: n });
  }
  assert(e, t, n, r) {
    e || this.throwError(t, n, r);
  }
  assertArgument(e, t, n, r) {
    e || this.throwArgumentError(t, n, r);
  }
  checkNormalize(e) {
    Es &&
      this.throwError(
        'platform missing String.prototype.normalize',
        te.errors.UNSUPPORTED_OPERATION,
        { operation: 'String.prototype.normalize', form: Es }
      );
  }
  checkSafeUint53(e, t) {
    typeof e == 'number' &&
      (t == null && (t = 'value not safe'),
      (e < 0 || e >= 9007199254740991) &&
        this.throwError(t, te.errors.NUMERIC_FAULT, {
          operation: 'checkSafeInteger',
          fault: 'out-of-safe-range',
          value: e,
        }),
      e % 1 &&
        this.throwError(t, te.errors.NUMERIC_FAULT, {
          operation: 'checkSafeInteger',
          fault: 'non-integer',
          value: e,
        }));
  }
  checkArgumentCount(e, t, n) {
    n ? (n = ': ' + n) : (n = ''),
      e < t &&
        this.throwError('missing argument' + n, te.errors.MISSING_ARGUMENT, {
          count: e,
          expectedCount: t,
        }),
      e > t &&
        this.throwError('too many arguments' + n, te.errors.UNEXPECTED_ARGUMENT, {
          count: e,
          expectedCount: t,
        });
  }
  checkNew(e, t) {
    (e === Object || e == null) &&
      this.throwError('missing new', te.errors.MISSING_NEW, { name: t.name });
  }
  checkAbstract(e, t) {
    e === t
      ? this.throwError(
          'cannot instantiate abstract class ' +
            JSON.stringify(t.name) +
            ' directly; use a sub-class',
          te.errors.UNSUPPORTED_OPERATION,
          { name: e.name, operation: 'new' }
        )
      : (e === Object || e == null) &&
        this.throwError('missing new', te.errors.MISSING_NEW, { name: t.name });
  }
  static globalLogger() {
    return Pn || (Pn = new te(oi)), Pn;
  }
  static setCensorship(e, t) {
    if (
      (!e &&
        t &&
        this.globalLogger().throwError(
          'cannot permanently disable censorship',
          te.errors.UNSUPPORTED_OPERATION,
          { operation: 'setCensorship' }
        ),
      _s)
    ) {
      if (!e) return;
      this.globalLogger().throwError(
        'error censorship permanent',
        te.errors.UNSUPPORTED_OPERATION,
        { operation: 'setCensorship' }
      );
    }
    (Is = !!e), (_s = !!t);
  }
  static setLogLevel(e) {
    const t = tn[e.toLowerCase()];
    if (t == null) {
      te.globalLogger().warn('invalid log level - ' + e);
      return;
    }
    Rs = t;
  }
  static from(e) {
    return new te(e);
  }
}
te.errors = Oe;
te.levels = Mn;
const ci = 'bytes/5.7.0',
  ie = new te(ci);
function nr(s) {
  return !!s.toHexString;
}
function Rt(s) {
  return (
    s.slice ||
      (s.slice = function () {
        const e = Array.prototype.slice.call(arguments);
        return Rt(new Uint8Array(Array.prototype.slice.apply(s, e)));
      }),
    s
  );
}
function ui(s) {
  return (Ge(s) && !(s.length % 2)) || ts(s);
}
function vs(s) {
  return typeof s == 'number' && s == s && s % 1 === 0;
}
function ts(s) {
  if (s == null) return !1;
  if (s.constructor === Uint8Array) return !0;
  if (typeof s == 'string' || !vs(s.length) || s.length < 0) return !1;
  for (let e = 0; e < s.length; e++) {
    const t = s[e];
    if (!vs(t) || t < 0 || t >= 256) return !1;
  }
  return !0;
}
function Ke(s, e) {
  if ((e || (e = {}), typeof s == 'number')) {
    ie.checkSafeUint53(s, 'invalid arrayify value');
    const t = [];
    for (; s; ) t.unshift(s & 255), (s = parseInt(String(s / 256)));
    return t.length === 0 && t.push(0), Rt(new Uint8Array(t));
  }
  if (
    (e.allowMissingPrefix && typeof s == 'string' && s.substring(0, 2) !== '0x' && (s = '0x' + s),
    nr(s) && (s = s.toHexString()),
    Ge(s))
  ) {
    let t = s.substring(2);
    t.length % 2 &&
      (e.hexPad === 'left'
        ? (t = '0' + t)
        : e.hexPad === 'right'
          ? (t += '0')
          : ie.throwArgumentError('hex data is odd-length', 'value', s));
    const n = [];
    for (let r = 0; r < t.length; r += 2) n.push(parseInt(t.substring(r, r + 2), 16));
    return Rt(new Uint8Array(n));
  }
  return ts(s)
    ? Rt(new Uint8Array(s))
    : ie.throwArgumentError('invalid arrayify value', 'value', s);
}
function li(s) {
  const e = s.map((r) => Ke(r)),
    t = e.reduce((r, i) => r + i.length, 0),
    n = new Uint8Array(t);
  return e.reduce((r, i) => (n.set(i, r), r + i.length), 0), Rt(n);
}
function lu(s) {
  let e = Ke(s);
  if (e.length === 0) return e;
  let t = 0;
  for (; t < e.length && e[t] === 0; ) t++;
  return t && (e = e.slice(t)), e;
}
function di(s, e) {
  (s = Ke(s)), s.length > e && ie.throwArgumentError('value out of range', 'value', arguments[0]);
  const t = new Uint8Array(e);
  return t.set(s, e - s.length), Rt(t);
}
function Ge(s, e) {
  return !(typeof s != 'string' || !s.match(/^0x[0-9A-Fa-f]*$/) || (e && s.length !== 2 + 2 * e));
}
const vn = '0123456789abcdef';
function we(s, e) {
  if ((e || (e = {}), typeof s == 'number')) {
    ie.checkSafeUint53(s, 'invalid hexlify value');
    let t = '';
    for (; s; ) (t = vn[s & 15] + t), (s = Math.floor(s / 16));
    return t.length ? (t.length % 2 && (t = '0' + t), '0x' + t) : '0x00';
  }
  if (typeof s == 'bigint') return (s = s.toString(16)), s.length % 2 ? '0x0' + s : '0x' + s;
  if (
    (e.allowMissingPrefix && typeof s == 'string' && s.substring(0, 2) !== '0x' && (s = '0x' + s),
    nr(s))
  )
    return s.toHexString();
  if (Ge(s))
    return (
      s.length % 2 &&
        (e.hexPad === 'left'
          ? (s = '0x0' + s.substring(2))
          : e.hexPad === 'right'
            ? (s += '0')
            : ie.throwArgumentError('hex data is odd-length', 'value', s)),
      s.toLowerCase()
    );
  if (ts(s)) {
    let t = '0x';
    for (let n = 0; n < s.length; n++) {
      let r = s[n];
      t += vn[(r & 240) >> 4] + vn[r & 15];
    }
    return t;
  }
  return ie.throwArgumentError('invalid hexlify value', 'value', s);
}
function du(s) {
  if (typeof s != 'string') s = we(s);
  else if (!Ge(s) || s.length % 2) return null;
  return (s.length - 2) / 2;
}
function hu(s, e, t) {
  return (
    typeof s != 'string'
      ? (s = we(s))
      : (!Ge(s) || s.length % 2) && ie.throwArgumentError('invalid hexData', 'value', s),
    (e = 2 + 2 * e),
    t != null ? '0x' + s.substring(e, 2 + 2 * t) : '0x' + s.substring(e)
  );
}
function fu(s) {
  let e = '0x';
  return (
    s.forEach((t) => {
      e += we(t).substring(2);
    }),
    e
  );
}
function gu(s) {
  const e = hi(we(s, { hexPad: 'left' }));
  return e === '0x' ? '0x0' : e;
}
function hi(s) {
  typeof s != 'string' && (s = we(s)),
    Ge(s) || ie.throwArgumentError('invalid hex string', 'value', s),
    (s = s.substring(2));
  let e = 0;
  for (; e < s.length && s[e] === '0'; ) e++;
  return '0x' + s.substring(e);
}
function xn(s, e) {
  for (
    typeof s != 'string'
      ? (s = we(s))
      : Ge(s) || ie.throwArgumentError('invalid hex string', 'value', s),
      s.length > 2 * e + 2 && ie.throwArgumentError('value out of range', 'value', arguments[1]);
    s.length < 2 * e + 2;

  )
    s = '0x0' + s.substring(2);
  return s;
}
function fi(s) {
  const e = {
    r: '0x',
    s: '0x',
    _vs: '0x',
    recoveryParam: 0,
    v: 0,
    yParityAndS: '0x',
    compact: '0x',
  };
  if (ui(s)) {
    let t = Ke(s);
    t.length === 64
      ? ((e.v = 27 + (t[32] >> 7)),
        (t[32] &= 127),
        (e.r = we(t.slice(0, 32))),
        (e.s = we(t.slice(32, 64))))
      : t.length === 65
        ? ((e.r = we(t.slice(0, 32))), (e.s = we(t.slice(32, 64))), (e.v = t[64]))
        : ie.throwArgumentError('invalid signature string', 'signature', s),
      e.v < 27 &&
        (e.v === 0 || e.v === 1
          ? (e.v += 27)
          : ie.throwArgumentError('signature invalid v byte', 'signature', s)),
      (e.recoveryParam = 1 - (e.v % 2)),
      e.recoveryParam && (t[32] |= 128),
      (e._vs = we(t.slice(32, 64)));
  } else {
    if (
      ((e.r = s.r),
      (e.s = s.s),
      (e.v = s.v),
      (e.recoveryParam = s.recoveryParam),
      (e._vs = s._vs),
      e._vs != null)
    ) {
      const r = di(Ke(e._vs), 32);
      e._vs = we(r);
      const i = r[0] >= 128 ? 1 : 0;
      e.recoveryParam == null
        ? (e.recoveryParam = i)
        : e.recoveryParam !== i &&
          ie.throwArgumentError('signature recoveryParam mismatch _vs', 'signature', s),
        (r[0] &= 127);
      const o = we(r);
      e.s == null
        ? (e.s = o)
        : e.s !== o && ie.throwArgumentError('signature v mismatch _vs', 'signature', s);
    }
    if (e.recoveryParam == null)
      e.v == null
        ? ie.throwArgumentError('signature missing v and recoveryParam', 'signature', s)
        : e.v === 0 || e.v === 1
          ? (e.recoveryParam = e.v)
          : (e.recoveryParam = 1 - (e.v % 2));
    else if (e.v == null) e.v = 27 + e.recoveryParam;
    else {
      const r = e.v === 0 || e.v === 1 ? e.v : 1 - (e.v % 2);
      e.recoveryParam !== r &&
        ie.throwArgumentError('signature recoveryParam mismatch v', 'signature', s);
    }
    e.r == null || !Ge(e.r)
      ? ie.throwArgumentError('signature missing or invalid r', 'signature', s)
      : (e.r = xn(e.r, 32)),
      e.s == null || !Ge(e.s)
        ? ie.throwArgumentError('signature missing or invalid s', 'signature', s)
        : (e.s = xn(e.s, 32));
    const t = Ke(e.s);
    t[0] >= 128 && ie.throwArgumentError('signature s out of range', 'signature', s),
      e.recoveryParam && (t[0] |= 128);
    const n = we(t);
    e._vs &&
      (Ge(e._vs) || ie.throwArgumentError('signature invalid _vs', 'signature', s),
      (e._vs = xn(e._vs, 32))),
      e._vs == null
        ? (e._vs = n)
        : e._vs !== n && ie.throwArgumentError('signature _vs mismatch v and s', 'signature', s);
  }
  return (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e;
}
function yu(s) {
  return (s = fi(s)), we(li([s.r, s.s, s.recoveryParam ? '0x1c' : '0x1b']));
}
var an;
(function (s) {
  (s.sha256 = 'sha256'), (s.sha512 = 'sha512');
})(an || (an = {}));
const gi = 'sha2/5.7.0',
  yi = new te(gi);
function bi(s) {
  return '0x' + Ht.ripemd160().update(Ke(s)).digest('hex');
}
function pi(s) {
  return '0x' + Ht.sha256().update(Ke(s)).digest('hex');
}
function mi(s) {
  return '0x' + Ht.sha512().update(Ke(s)).digest('hex');
}
function wi(s, e, t) {
  return (
    an[s] ||
      yi.throwError('unsupported algorithm ' + s, te.errors.UNSUPPORTED_OPERATION, {
        operation: 'hmac',
        algorithm: s,
      }),
    '0x' + Ht.hmac(Ht[s], Ke(e)).update(Ke(t)).digest('hex')
  );
}
const ki = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      get SupportedAlgorithm() {
        return an;
      },
      computeHmac: wi,
      ripemd160: bi,
      sha256: pi,
      sha512: mi,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function Hn(s) {
  if (!Number.isSafeInteger(s) || s < 0) throw new Error(`Wrong positive integer: ${s}`);
}
function Si(s) {
  if (typeof s != 'boolean') throw new Error(`Expected boolean, not ${s}`);
}
function sr(s, ...e) {
  if (!(s instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (e.length > 0 && !e.includes(s.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${s.length}`);
}
function Ai(s) {
  if (typeof s != 'function' || typeof s.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Hn(s.outputLen), Hn(s.blockLen);
}
function _i(s, e = !0) {
  if (s.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && s.finished) throw new Error('Hash#digest() has already been called');
}
function Ii(s, e) {
  sr(s);
  const t = e.outputLen;
  if (s.length < t) throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const Pe = { number: Hn, bool: Si, bytes: sr, hash: Ai, exists: _i, output: Ii };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Ri = (s) =>
    new Uint32Array(s.buffer, s.byteOffset, Math.floor(s.byteLength / 4)),
  Tn = (s) => new DataView(s.buffer, s.byteOffset, s.byteLength),
  We = (s, e) => (s << (32 - e)) | (s >>> e),
  Ei = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Ei) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (s, e) => e.toString(16).padStart(2, '0'));
function Pi(s) {
  if (typeof s != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof s}`);
  return new TextEncoder().encode(s);
}
function Xt(s) {
  if ((typeof s == 'string' && (s = Pi(s)), !(s instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof s})`);
  return s;
}
class ns {
  clone() {
    return this._cloneInto();
  }
}
function mt(s) {
  const e = (n) => s().update(Xt(n)).digest(),
    t = s();
  return (e.outputLen = t.outputLen), (e.blockLen = t.blockLen), (e.create = () => s()), e;
}
function vi(s) {
  const e = (n, r) => s(r).update(Xt(n)).digest(),
    t = s({});
  return (e.outputLen = t.outputLen), (e.blockLen = t.blockLen), (e.create = (n) => s(n)), e;
}
function xi(s, e, t, n) {
  if (typeof s.setBigUint64 == 'function') return s.setBigUint64(e, t, n);
  const r = BigInt(32),
    i = BigInt(4294967295),
    o = Number((t >> r) & i),
    a = Number(t & i),
    c = n ? 4 : 0,
    d = n ? 0 : 4;
  s.setUint32(e + c, o, n), s.setUint32(e + d, a, n);
}
class rr extends ns {
  constructor(e, t, n, r) {
    super(),
      (this.blockLen = e),
      (this.outputLen = t),
      (this.padOffset = n),
      (this.isLE = r),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = Tn(this.buffer));
  }
  update(e) {
    Pe.exists(this);
    const { view: t, buffer: n, blockLen: r } = this;
    e = Xt(e);
    const i = e.length;
    for (let o = 0; o < i; ) {
      const a = Math.min(r - this.pos, i - o);
      if (a === r) {
        const c = Tn(e);
        for (; r <= i - o; o += r) this.process(c, o);
        continue;
      }
      n.set(e.subarray(o, o + a), this.pos),
        (this.pos += a),
        (o += a),
        this.pos === r && (this.process(t, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    Pe.exists(this), Pe.output(e, this), (this.finished = !0);
    const { buffer: t, view: n, blockLen: r, isLE: i } = this;
    let { pos: o } = this;
    (t[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > r - o && (this.process(n, 0), (o = 0));
    for (let l = o; l < r; l++) t[l] = 0;
    xi(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = Tn(e),
      c = this.outputLen;
    if (c % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const d = c / 4,
      u = this.get();
    if (d > u.length) throw new Error('_sha2: outputLen bigger than state');
    for (let l = 0; l < d; l++) a.setUint32(4 * l, u[l], i);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const n = e.slice(0, t);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: n, length: r, finished: i, destroyed: o, pos: a } = this;
    return (
      (e.length = r), (e.pos = a), (e.finished = i), (e.destroyed = o), r % t && e.buffer.set(n), e
    );
  }
}
const Qt = BigInt(2 ** 32 - 1),
  Fn = BigInt(32);
function ir(s, e = !1) {
  return e
    ? { h: Number(s & Qt), l: Number((s >> Fn) & Qt) }
    : { h: Number((s >> Fn) & Qt) | 0, l: Number(s & Qt) | 0 };
}
function Ti(s, e = !1) {
  let t = new Uint32Array(s.length),
    n = new Uint32Array(s.length);
  for (let r = 0; r < s.length; r++) {
    const { h: i, l: o } = ir(s[r], e);
    [t[r], n[r]] = [i, o];
  }
  return [t, n];
}
const Bi = (s, e) => (BigInt(s >>> 0) << Fn) | BigInt(e >>> 0),
  Ni = (s, e, t) => s >>> t,
  Li = (s, e, t) => (s << (32 - t)) | (e >>> t),
  Oi = (s, e, t) => (s >>> t) | (e << (32 - t)),
  Ci = (s, e, t) => (s << (32 - t)) | (e >>> t),
  Ui = (s, e, t) => (s << (64 - t)) | (e >>> (t - 32)),
  Ki = (s, e, t) => (s >>> (t - 32)) | (e << (64 - t)),
  Di = (s, e) => e,
  zi = (s, e) => s,
  Wi = (s, e, t) => (s << t) | (e >>> (32 - t)),
  Mi = (s, e, t) => (e << t) | (s >>> (32 - t)),
  Hi = (s, e, t) => (e << (t - 32)) | (s >>> (64 - t)),
  Fi = (s, e, t) => (s << (t - 32)) | (e >>> (64 - t));
function $i(s, e, t, n) {
  const r = (e >>> 0) + (n >>> 0);
  return { h: (s + t + ((r / 2 ** 32) | 0)) | 0, l: r | 0 };
}
const Gi = (s, e, t) => (s >>> 0) + (e >>> 0) + (t >>> 0),
  qi = (s, e, t, n) => (e + t + n + ((s / 2 ** 32) | 0)) | 0,
  Vi = (s, e, t, n) => (s >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0),
  ji = (s, e, t, n, r) => (e + t + n + r + ((s / 2 ** 32) | 0)) | 0,
  Xi = (s, e, t, n, r) => (s >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
  Ji = (s, e, t, n, r, i) => (e + t + n + r + i + ((s / 2 ** 32) | 0)) | 0,
  C = {
    fromBig: ir,
    split: Ti,
    toBig: Bi,
    shrSH: Ni,
    shrSL: Li,
    rotrSH: Oi,
    rotrSL: Ci,
    rotrBH: Ui,
    rotrBL: Ki,
    rotr32H: Di,
    rotr32L: zi,
    rotlSH: Wi,
    rotlSL: Mi,
    rotlBH: Hi,
    rotlBL: Fi,
    add: $i,
    add3L: Gi,
    add3H: qi,
    add4L: Vi,
    add4H: ji,
    add5H: Ji,
    add5L: Xi,
  },
  [Yi, Zi] = C.split(
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
    ].map((s) => BigInt(s))
  ),
  tt = new Uint32Array(80),
  nt = new Uint32Array(80);
class dn extends rr {
  constructor() {
    super(128, 64, 16, !1),
      (this.Ah = 1779033703),
      (this.Al = -205731576),
      (this.Bh = -1150833019),
      (this.Bl = -2067093701),
      (this.Ch = 1013904242),
      (this.Cl = -23791573),
      (this.Dh = -1521486534),
      (this.Dl = 1595750129),
      (this.Eh = 1359893119),
      (this.El = -1377402159),
      (this.Fh = -1694144372),
      (this.Fl = 725511199),
      (this.Gh = 528734635),
      (this.Gl = -79577749),
      (this.Hh = 1541459225),
      (this.Hl = 327033209);
  }
  get() {
    const {
      Ah: e,
      Al: t,
      Bh: n,
      Bl: r,
      Ch: i,
      Cl: o,
      Dh: a,
      Dl: c,
      Eh: d,
      El: u,
      Fh: l,
      Fl: g,
      Gh: f,
      Gl: b,
      Hh: y,
      Hl: k,
    } = this;
    return [e, t, n, r, i, o, a, c, d, u, l, g, f, b, y, k];
  }
  set(e, t, n, r, i, o, a, c, d, u, l, g, f, b, y, k) {
    (this.Ah = e | 0),
      (this.Al = t | 0),
      (this.Bh = n | 0),
      (this.Bl = r | 0),
      (this.Ch = i | 0),
      (this.Cl = o | 0),
      (this.Dh = a | 0),
      (this.Dl = c | 0),
      (this.Eh = d | 0),
      (this.El = u | 0),
      (this.Fh = l | 0),
      (this.Fl = g | 0),
      (this.Gh = f | 0),
      (this.Gl = b | 0),
      (this.Hh = y | 0),
      (this.Hl = k | 0);
  }
  process(e, t) {
    for (let T = 0; T < 16; T++, t += 4) (tt[T] = e.getUint32(t)), (nt[T] = e.getUint32((t += 4)));
    for (let T = 16; T < 80; T++) {
      const j = tt[T - 15] | 0,
        ze = nt[T - 15] | 0,
        St = C.rotrSH(j, ze, 1) ^ C.rotrSH(j, ze, 8) ^ C.shrSH(j, ze, 7),
        Lt = C.rotrSL(j, ze, 1) ^ C.rotrSL(j, ze, 8) ^ C.shrSL(j, ze, 7),
        Ne = tt[T - 2] | 0,
        Le = nt[T - 2] | 0,
        At = C.rotrSH(Ne, Le, 19) ^ C.rotrBH(Ne, Le, 61) ^ C.shrSH(Ne, Le, 6),
        Ot = C.rotrSL(Ne, Le, 19) ^ C.rotrBL(Ne, Le, 61) ^ C.shrSL(Ne, Le, 6),
        _t = C.add4L(Lt, Ot, nt[T - 7], nt[T - 16]),
        P = C.add4H(_t, St, At, tt[T - 7], tt[T - 16]);
      (tt[T] = P | 0), (nt[T] = _t | 0);
    }
    let {
      Ah: n,
      Al: r,
      Bh: i,
      Bl: o,
      Ch: a,
      Cl: c,
      Dh: d,
      Dl: u,
      Eh: l,
      El: g,
      Fh: f,
      Fl: b,
      Gh: y,
      Gl: k,
      Hh: v,
      Hl: W,
    } = this;
    for (let T = 0; T < 80; T++) {
      const j = C.rotrSH(l, g, 14) ^ C.rotrSH(l, g, 18) ^ C.rotrBH(l, g, 41),
        ze = C.rotrSL(l, g, 14) ^ C.rotrSL(l, g, 18) ^ C.rotrBL(l, g, 41),
        St = (l & f) ^ (~l & y),
        Lt = (g & b) ^ (~g & k),
        Ne = C.add5L(W, ze, Lt, Zi[T], nt[T]),
        Le = C.add5H(Ne, v, j, St, Yi[T], tt[T]),
        At = Ne | 0,
        Ot = C.rotrSH(n, r, 28) ^ C.rotrBH(n, r, 34) ^ C.rotrBH(n, r, 39),
        _t = C.rotrSL(n, r, 28) ^ C.rotrBL(n, r, 34) ^ C.rotrBL(n, r, 39),
        P = (n & i) ^ (n & a) ^ (i & a),
        N = (r & o) ^ (r & c) ^ (o & c);
      (v = y | 0),
        (W = k | 0),
        (y = f | 0),
        (k = b | 0),
        (f = l | 0),
        (b = g | 0),
        ({ h: l, l: g } = C.add(d | 0, u | 0, Le | 0, At | 0)),
        (d = a | 0),
        (u = c | 0),
        (a = i | 0),
        (c = o | 0),
        (i = n | 0),
        (o = r | 0);
      const K = C.add3L(At, _t, N);
      (n = C.add3H(K, Le, Ot, P)), (r = K | 0);
    }
    ({ h: n, l: r } = C.add(this.Ah | 0, this.Al | 0, n | 0, r | 0)),
      ({ h: i, l: o } = C.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0)),
      ({ h: a, l: c } = C.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0)),
      ({ h: d, l: u } = C.add(this.Dh | 0, this.Dl | 0, d | 0, u | 0)),
      ({ h: l, l: g } = C.add(this.Eh | 0, this.El | 0, l | 0, g | 0)),
      ({ h: f, l: b } = C.add(this.Fh | 0, this.Fl | 0, f | 0, b | 0)),
      ({ h: y, l: k } = C.add(this.Gh | 0, this.Gl | 0, y | 0, k | 0)),
      ({ h: v, l: W } = C.add(this.Hh | 0, this.Hl | 0, v | 0, W | 0)),
      this.set(n, r, i, o, a, c, d, u, l, g, f, b, y, k, v, W);
  }
  roundClean() {
    tt.fill(0), nt.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Qi extends dn {
  constructor() {
    super(),
      (this.Ah = -1942145080),
      (this.Al = 424955298),
      (this.Bh = 1944164710),
      (this.Bl = -1982016298),
      (this.Ch = 502970286),
      (this.Cl = 855612546),
      (this.Dh = 1738396948),
      (this.Dl = 1479516111),
      (this.Eh = 258812777),
      (this.El = 2077511080),
      (this.Fh = 2011393907),
      (this.Fl = 79989058),
      (this.Gh = 1067287976),
      (this.Gl = 1780299464),
      (this.Hh = 286451373),
      (this.Hl = -1848208735),
      (this.outputLen = 28);
  }
}
class eo extends dn {
  constructor() {
    super(),
      (this.Ah = 573645204),
      (this.Al = -64227540),
      (this.Bh = -1621794909),
      (this.Bl = -934517566),
      (this.Ch = 596883563),
      (this.Cl = 1867755857),
      (this.Dh = -1774684391),
      (this.Dl = 1497426621),
      (this.Eh = -1775747358),
      (this.El = -1467023389),
      (this.Fh = -1101128155),
      (this.Fl = 1401305490),
      (this.Gh = 721525244),
      (this.Gl = 746961066),
      (this.Hh = 246885852),
      (this.Hl = -2117784414),
      (this.outputLen = 32);
  }
}
class to extends dn {
  constructor() {
    super(),
      (this.Ah = -876896931),
      (this.Al = -1056596264),
      (this.Bh = 1654270250),
      (this.Bl = 914150663),
      (this.Ch = -1856437926),
      (this.Cl = 812702999),
      (this.Dh = 355462360),
      (this.Dl = -150054599),
      (this.Eh = 1731405415),
      (this.El = -4191439),
      (this.Fh = -1900787065),
      (this.Fl = 1750603025),
      (this.Gh = -619958771),
      (this.Gl = 1694076839),
      (this.Hh = 1203062813),
      (this.Hl = -1090891868),
      (this.outputLen = 48);
  }
}
const no = mt(() => new dn());
mt(() => new Qi());
mt(() => new eo());
mt(() => new to());
const so = (s, e, t) => (s & e) ^ (~s & t),
  ro = (s, e, t) => (s & e) ^ (s & t) ^ (e & t),
  io = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  st = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  rt = new Uint32Array(64);
class or extends rr {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = st[0] | 0),
      (this.B = st[1] | 0),
      (this.C = st[2] | 0),
      (this.D = st[3] | 0),
      (this.E = st[4] | 0),
      (this.F = st[5] | 0),
      (this.G = st[6] | 0),
      (this.H = st[7] | 0);
  }
  get() {
    const { A: e, B: t, C: n, D: r, E: i, F: o, G: a, H: c } = this;
    return [e, t, n, r, i, o, a, c];
  }
  set(e, t, n, r, i, o, a, c) {
    (this.A = e | 0),
      (this.B = t | 0),
      (this.C = n | 0),
      (this.D = r | 0),
      (this.E = i | 0),
      (this.F = o | 0),
      (this.G = a | 0),
      (this.H = c | 0);
  }
  process(e, t) {
    for (let l = 0; l < 16; l++, t += 4) rt[l] = e.getUint32(t, !1);
    for (let l = 16; l < 64; l++) {
      const g = rt[l - 15],
        f = rt[l - 2],
        b = We(g, 7) ^ We(g, 18) ^ (g >>> 3),
        y = We(f, 17) ^ We(f, 19) ^ (f >>> 10);
      rt[l] = (y + rt[l - 7] + b + rt[l - 16]) | 0;
    }
    let { A: n, B: r, C: i, D: o, E: a, F: c, G: d, H: u } = this;
    for (let l = 0; l < 64; l++) {
      const g = We(a, 6) ^ We(a, 11) ^ We(a, 25),
        f = (u + g + so(a, c, d) + io[l] + rt[l]) | 0,
        y = ((We(n, 2) ^ We(n, 13) ^ We(n, 22)) + ro(n, r, i)) | 0;
      (u = d), (d = c), (c = a), (a = (o + f) | 0), (o = i), (i = r), (r = n), (n = (f + y) | 0);
    }
    (n = (n + this.A) | 0),
      (r = (r + this.B) | 0),
      (i = (i + this.C) | 0),
      (o = (o + this.D) | 0),
      (a = (a + this.E) | 0),
      (c = (c + this.F) | 0),
      (d = (d + this.G) | 0),
      (u = (u + this.H) | 0),
      this.set(n, r, i, o, a, c, d, u);
  }
  roundClean() {
    rt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class oo extends or {
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
const $n = mt(() => new or());
mt(() => new oo());
var he = {},
  ao =
    (x && x.__createBinding) ||
    (Object.create
      ? function (s, e, t, n) {
          n === void 0 && (n = t),
            Object.defineProperty(s, n, {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            });
        }
      : function (s, e, t, n) {
          n === void 0 && (n = t), (s[n] = e[t]);
        }),
  co =
    (x && x.__setModuleDefault) ||
    (Object.create
      ? function (s, e) {
          Object.defineProperty(s, 'default', { enumerable: !0, value: e });
        }
      : function (s, e) {
          s.default = e;
        }),
  Ve =
    (x && x.__decorate) ||
    function (s, e, t, n) {
      var r = arguments.length,
        i = r < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
        o;
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        i = Reflect.decorate(s, e, t, n);
      else
        for (var a = s.length - 1; a >= 0; a--)
          (o = s[a]) && (i = (r < 3 ? o(i) : r > 3 ? o(e, t, i) : o(e, t)) || i);
      return r > 3 && i && Object.defineProperty(e, t, i), i;
    },
  uo =
    (x && x.__importStar) ||
    function (s) {
      if (s && s.__esModule) return s;
      var e = {};
      if (s != null)
        for (var t in s) t !== 'default' && Object.hasOwnProperty.call(s, t) && ao(e, s, t);
      return co(e, s), e;
    },
  ar =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
Object.defineProperty(he, '__esModule', { value: !0 });
var cr =
  (he.deserializeUnchecked =
  gr =
  he.deserialize =
  fr =
  he.serialize =
  he.BinaryReader =
  he.BinaryWriter =
  he.BorshError =
  he.baseDecode =
  he.baseEncode =
    void 0);
const ot = ar(ln()),
  ur = ar(Xs),
  lo = uo(Js),
  ho = typeof TextDecoder != 'function' ? lo.TextDecoder : TextDecoder,
  fo = new ho('utf-8', { fatal: !0 });
function go(s) {
  return typeof s == 'string' && (s = U.from(s, 'utf8')), ur.default.encode(U.from(s));
}
he.baseEncode = go;
function yo(s) {
  return U.from(ur.default.decode(s));
}
he.baseDecode = yo;
const Bn = 1024;
let ke = class extends Error {
  constructor(e) {
    super(e), (this.fieldPath = []), (this.originalMessage = e);
  }
  addToFieldPath(e) {
    this.fieldPath.splice(0, 0, e),
      (this.message = this.originalMessage + ': ' + this.fieldPath.join('.'));
  }
};
he.BorshError = ke;
let lr = class {
  constructor() {
    (this.buf = U.alloc(Bn)), (this.length = 0);
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = U.concat([this.buf, U.alloc(Bn)]));
  }
  writeU8(e) {
    this.maybeResize(), this.buf.writeUInt8(e, this.length), (this.length += 1);
  }
  writeU16(e) {
    this.maybeResize(), this.buf.writeUInt16LE(e, this.length), (this.length += 2);
  }
  writeU32(e) {
    this.maybeResize(), this.buf.writeUInt32LE(e, this.length), (this.length += 4);
  }
  writeU64(e) {
    this.maybeResize(), this.writeBuffer(U.from(new ot.default(e).toArray('le', 8)));
  }
  writeU128(e) {
    this.maybeResize(), this.writeBuffer(U.from(new ot.default(e).toArray('le', 16)));
  }
  writeU256(e) {
    this.maybeResize(), this.writeBuffer(U.from(new ot.default(e).toArray('le', 32)));
  }
  writeU512(e) {
    this.maybeResize(), this.writeBuffer(U.from(new ot.default(e).toArray('le', 64)));
  }
  writeBuffer(e) {
    (this.buf = U.concat([U.from(this.buf.subarray(0, this.length)), e, U.alloc(Bn)])),
      (this.length += e.length);
  }
  writeString(e) {
    this.maybeResize();
    const t = U.from(e, 'utf8');
    this.writeU32(t.length), this.writeBuffer(t);
  }
  writeFixedArray(e) {
    this.writeBuffer(U.from(e));
  }
  writeArray(e, t) {
    this.maybeResize(), this.writeU32(e.length);
    for (const n of e) this.maybeResize(), t(n);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
};
he.BinaryWriter = lr;
function je(s, e, t) {
  const n = t.value;
  t.value = function (...r) {
    try {
      return n.apply(this, r);
    } catch (i) {
      if (i instanceof RangeError) {
        const o = i.code;
        if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(o) >= 0)
          throw new ke('Reached the end of buffer when deserializing');
      }
      throw i;
    }
  };
}
let ve = class {
  constructor(e) {
    (this.buf = e), (this.offset = 0);
  }
  readU8() {
    const e = this.buf.readUInt8(this.offset);
    return (this.offset += 1), e;
  }
  readU16() {
    const e = this.buf.readUInt16LE(this.offset);
    return (this.offset += 2), e;
  }
  readU32() {
    const e = this.buf.readUInt32LE(this.offset);
    return (this.offset += 4), e;
  }
  readU64() {
    const e = this.readBuffer(8);
    return new ot.default(e, 'le');
  }
  readU128() {
    const e = this.readBuffer(16);
    return new ot.default(e, 'le');
  }
  readU256() {
    const e = this.readBuffer(32);
    return new ot.default(e, 'le');
  }
  readU512() {
    const e = this.readBuffer(64);
    return new ot.default(e, 'le');
  }
  readBuffer(e) {
    if (this.offset + e > this.buf.length)
      throw new ke(`Expected buffer length ${e} isn't within bounds`);
    const t = this.buf.slice(this.offset, this.offset + e);
    return (this.offset += e), t;
  }
  readString() {
    const e = this.readU32(),
      t = this.readBuffer(e);
    try {
      return fo.decode(t);
    } catch (n) {
      throw new ke(`Error decoding UTF-8 string: ${n}`);
    }
  }
  readFixedArray(e) {
    return new Uint8Array(this.readBuffer(e));
  }
  readArray(e) {
    const t = this.readU32(),
      n = Array();
    for (let r = 0; r < t; ++r) n.push(e());
    return n;
  }
};
Ve([je], ve.prototype, 'readU8', null);
Ve([je], ve.prototype, 'readU16', null);
Ve([je], ve.prototype, 'readU32', null);
Ve([je], ve.prototype, 'readU64', null);
Ve([je], ve.prototype, 'readU128', null);
Ve([je], ve.prototype, 'readU256', null);
Ve([je], ve.prototype, 'readU512', null);
Ve([je], ve.prototype, 'readString', null);
Ve([je], ve.prototype, 'readFixedArray', null);
Ve([je], ve.prototype, 'readArray', null);
he.BinaryReader = ve;
function dr(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function dt(s, e, t, n, r) {
  try {
    if (typeof n == 'string') r[`write${dr(n)}`](t);
    else if (n instanceof Array)
      if (typeof n[0] == 'number') {
        if (t.length !== n[0])
          throw new ke(`Expecting byte array of length ${n[0]}, but got ${t.length} bytes`);
        r.writeFixedArray(t);
      } else if (n.length === 2 && typeof n[1] == 'number') {
        if (t.length !== n[1])
          throw new ke(`Expecting byte array of length ${n[1]}, but got ${t.length} bytes`);
        for (let i = 0; i < n[1]; i++) dt(s, null, t[i], n[0], r);
      } else
        r.writeArray(t, (i) => {
          dt(s, e, i, n[0], r);
        });
    else if (n.kind !== void 0)
      switch (n.kind) {
        case 'option': {
          t == null ? r.writeU8(0) : (r.writeU8(1), dt(s, e, t, n.type, r));
          break;
        }
        case 'map': {
          r.writeU32(t.size),
            t.forEach((i, o) => {
              dt(s, e, o, n.key, r), dt(s, e, i, n.value, r);
            });
          break;
        }
        default:
          throw new ke(`FieldType ${n} unrecognized`);
      }
    else hr(s, t, r);
  } catch (i) {
    throw (i instanceof ke && i.addToFieldPath(e), i);
  }
}
function hr(s, e, t) {
  if (typeof e.borshSerialize == 'function') {
    e.borshSerialize(t);
    return;
  }
  const n = s.get(e.constructor);
  if (!n) throw new ke(`Class ${e.constructor.name} is missing in schema`);
  if (n.kind === 'struct')
    n.fields.map(([r, i]) => {
      dt(s, r, e[r], i, t);
    });
  else if (n.kind === 'enum') {
    const r = e[n.field];
    for (let i = 0; i < n.values.length; ++i) {
      const [o, a] = n.values[i];
      if (o === r) {
        t.writeU8(i), dt(s, o, e[o], a, t);
        break;
      }
    }
  } else throw new ke(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
}
function bo(s, e, t = lr) {
  const n = new t();
  return hr(s, e, n), n.toArray();
}
var fr = (he.serialize = bo);
function ht(s, e, t, n) {
  try {
    if (typeof t == 'string') return n[`read${dr(t)}`]();
    if (t instanceof Array) {
      if (typeof t[0] == 'number') return n.readFixedArray(t[0]);
      if (typeof t[1] == 'number') {
        const r = [];
        for (let i = 0; i < t[1]; i++) r.push(ht(s, null, t[0], n));
        return r;
      } else return n.readArray(() => ht(s, e, t[0], n));
    }
    if (t.kind === 'option') return n.readU8() ? ht(s, e, t.type, n) : void 0;
    if (t.kind === 'map') {
      let r = new Map();
      const i = n.readU32();
      for (let o = 0; o < i; o++) {
        const a = ht(s, e, t.key, n),
          c = ht(s, e, t.value, n);
        r.set(a, c);
      }
      return r;
    }
    return ss(s, t, n);
  } catch (r) {
    throw (r instanceof ke && r.addToFieldPath(e), r);
  }
}
function ss(s, e, t) {
  if (typeof e.borshDeserialize == 'function') return e.borshDeserialize(t);
  const n = s.get(e);
  if (!n) throw new ke(`Class ${e.name} is missing in schema`);
  if (n.kind === 'struct') {
    const r = {};
    for (const [i, o] of s.get(e).fields) r[i] = ht(s, i, o, t);
    return new e(r);
  }
  if (n.kind === 'enum') {
    const r = t.readU8();
    if (r >= n.values.length) throw new ke(`Enum index: ${r} is out of range`);
    const [i, o] = n.values[r],
      a = ht(s, i, o, t);
    return new e({ [i]: a });
  }
  throw new ke(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
}
function po(s, e, t, n = ve) {
  const r = new n(t),
    i = ss(s, e, r);
  if (r.offset < t.length)
    throw new ke(`Unexpected ${t.length - r.offset} bytes after deserialized data`);
  return i;
}
var gr = (he.deserialize = po);
function mo(s, e, t, n = ve) {
  const r = new n(t);
  return ss(s, e, r);
}
cr = he.deserializeUnchecked = mo;
const [yr, br, pr] = [[], [], []],
  wo = BigInt(0),
  Ct = BigInt(1),
  ko = BigInt(2),
  So = BigInt(7),
  Ao = BigInt(256),
  _o = BigInt(113);
for (let s = 0, e = Ct, t = 1, n = 0; s < 24; s++) {
  ([t, n] = [n, (2 * t + 3 * n) % 5]),
    yr.push(2 * (5 * n + t)),
    br.push((((s + 1) * (s + 2)) / 2) % 64);
  let r = wo;
  for (let i = 0; i < 7; i++)
    (e = ((e << Ct) ^ ((e >> So) * _o)) % Ao), e & ko && (r ^= Ct << ((Ct << BigInt(i)) - Ct));
  pr.push(r);
}
const [Io, Ro] = C.split(pr, !0),
  xs = (s, e, t) => (t > 32 ? C.rotlBH(s, e, t) : C.rotlSH(s, e, t)),
  Ts = (s, e, t) => (t > 32 ? C.rotlBL(s, e, t) : C.rotlSL(s, e, t));
function Eo(s, e = 24) {
  const t = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let o = 0; o < 10; o++) t[o] = s[o] ^ s[o + 10] ^ s[o + 20] ^ s[o + 30] ^ s[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10,
        c = (o + 2) % 10,
        d = t[c],
        u = t[c + 1],
        l = xs(d, u, 1) ^ t[a],
        g = Ts(d, u, 1) ^ t[a + 1];
      for (let f = 0; f < 50; f += 10) (s[o + f] ^= l), (s[o + f + 1] ^= g);
    }
    let r = s[2],
      i = s[3];
    for (let o = 0; o < 24; o++) {
      const a = br[o],
        c = xs(r, i, a),
        d = Ts(r, i, a),
        u = yr[o];
      (r = s[u]), (i = s[u + 1]), (s[u] = c), (s[u + 1] = d);
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) t[a] = s[o + a];
      for (let a = 0; a < 10; a++) s[o + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10];
    }
    (s[0] ^= Io[n]), (s[1] ^= Ro[n]);
  }
  t.fill(0);
}
class hn extends ns {
  constructor(e, t, n, r = !1, i = 24) {
    if (
      (super(),
      (this.blockLen = e),
      (this.suffix = t),
      (this.outputLen = n),
      (this.enableXOF = r),
      (this.rounds = i),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      Pe.number(n),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function');
    (this.state = new Uint8Array(200)), (this.state32 = Ri(this.state));
  }
  keccak() {
    Eo(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(e) {
    Pe.exists(this);
    const { blockLen: t, state: n } = this;
    e = Xt(e);
    const r = e.length;
    for (let i = 0; i < r; ) {
      const o = Math.min(t - this.pos, r - i);
      for (let a = 0; a < o; a++) n[this.pos++] ^= e[i++];
      this.pos === t && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: t, pos: n, blockLen: r } = this;
    (e[n] ^= t), t & 128 && n === r - 1 && this.keccak(), (e[r - 1] ^= 128), this.keccak();
  }
  writeInto(e) {
    Pe.exists(this, !1), Pe.bytes(e), this.finish();
    const t = this.state,
      { blockLen: n } = this;
    for (let r = 0, i = e.length; r < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - r);
      e.set(t.subarray(this.posOut, this.posOut + o), r), (this.posOut += o), (r += o);
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
    return this.writeInto(e);
  }
  xof(e) {
    return Pe.number(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if ((Pe.output(e, this), this.finished)) throw new Error('digest() was already called');
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: t, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
    return (
      e || (e = new hn(t, n, r, o, i)),
      e.state32.set(this.state32),
      (e.pos = this.pos),
      (e.posOut = this.posOut),
      (e.finished = this.finished),
      (e.rounds = i),
      (e.suffix = n),
      (e.outputLen = r),
      (e.enableXOF = o),
      (e.destroyed = this.destroyed),
      e
    );
  }
}
const lt = (s, e, t) => mt(() => new hn(e, s, t));
lt(6, 144, 224 / 8);
lt(6, 136, 256 / 8);
lt(6, 104, 384 / 8);
lt(6, 72, 512 / 8);
lt(1, 144, 224 / 8);
const Bs = lt(1, 136, 256 / 8);
lt(1, 104, 384 / 8);
lt(1, 72, 512 / 8);
const mr = (s, e, t) => vi((n = {}) => new hn(e, s, n.dkLen === void 0 ? t : n.dkLen, !0));
mr(31, 168, 128 / 8);
mr(31, 136, 256 / 8);
class wr extends ns {
  constructor(e, t) {
    super(), (this.finished = !1), (this.destroyed = !1), Pe.hash(e);
    const n = Xt(t);
    if (((this.iHash = e.create()), typeof this.iHash.update != 'function'))
      throw new TypeError('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const r = this.blockLen,
      i = new Uint8Array(r);
    i.set(n.length > r ? e.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++) i[o] ^= 54;
    this.iHash.update(i), (this.oHash = e.create());
    for (let o = 0; o < i.length; o++) i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(e) {
    return Pe.exists(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Pe.exists(this),
      Pe.bytes(e, this.outputLen),
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
    const { oHash: t, iHash: n, finished: r, destroyed: i, blockLen: o, outputLen: a } = this;
    return (
      (e = e),
      (e.finished = r),
      (e.destroyed = i),
      (e.blockLen = o),
      (e.outputLen = a),
      (e.oHash = t._cloneInto(e.oHash)),
      (e.iHash = n._cloneInto(e.iHash)),
      e
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const kr = (s, e, t) => new wr(s, e).update(t).digest();
kr.create = (s, e) => new wr(s, e);
on.sha512Sync = (...s) => no(on.concatBytes(...s));
const Po = on.randomPrivateKey,
  Ns = () => {
    const s = on.randomPrivateKey(),
      e = cn(s),
      t = new Uint8Array(64);
    return t.set(s), t.set(e, 32), { publicKey: e, secretKey: t };
  },
  cn = Qn.getPublicKey;
function Ls(s) {
  try {
    return Zr.fromHex(s, !0), !0;
  } catch {
    return !1;
  }
}
const rs = (s, e) => Qn.sign(s, e.slice(0, 32)),
  vo = Qn.verify,
  D = (s) =>
    B.isBuffer(s)
      ? s
      : s instanceof Uint8Array
        ? B.from(s.buffer, s.byteOffset, s.byteLength)
        : B.from(s);
class is {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return B.from(fr(zt, this));
  }
  static decode(e) {
    return gr(zt, this, e);
  }
  static decodeUnchecked(e) {
    return cr(zt, this, e);
  }
}
class xo extends is {
  constructor(e) {
    if ((super(e), (this.enum = ''), Object.keys(e).length !== 1))
      throw new Error('Enum can only take single value');
    Object.keys(e).map((t) => {
      this.enum = t;
    });
  }
}
const zt = new Map();
let Sr;
const Ar = 32,
  qe = 32;
function To(s) {
  return s._bn !== void 0;
}
let Os = 1;
Sr = Symbol.toStringTag;
class w extends is {
  constructor(e) {
    if ((super({}), (this._bn = void 0), To(e))) this._bn = e._bn;
    else {
      if (typeof e == 'string') {
        const t = fe.decode(e);
        if (t.length != qe) throw new Error('Invalid public key input');
        this._bn = new As(t);
      } else this._bn = new As(e);
      if (this._bn.byteLength() > qe) throw new Error('Invalid public key input');
    }
  }
  static unique() {
    const e = new w(Os);
    return (Os += 1), new w(e.toBuffer());
  }
  equals(e) {
    return this._bn.eq(e._bn);
  }
  toBase58() {
    return fe.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  toBytes() {
    const e = this.toBuffer();
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  toBuffer() {
    const e = this._bn.toArrayLike(B);
    if (e.length === qe) return e;
    const t = B.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  get [Sr]() {
    return `PublicKey(${this.toString()})`;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(e, t, n) {
    const r = B.concat([e.toBuffer(), B.from(t), n.toBuffer()]),
      i = $n(r);
    return new w(i);
  }
  static createProgramAddressSync(e, t) {
    let n = B.alloc(0);
    e.forEach(function (i) {
      if (i.length > Ar) throw new TypeError('Max seed length exceeded');
      n = B.concat([n, D(i)]);
    }),
      (n = B.concat([n, t.toBuffer(), B.from('ProgramDerivedAddress')]));
    const r = $n(n);
    if (Ls(r)) throw new Error('Invalid seeds, address must fall off the curve');
    return new w(r);
  }
  static async createProgramAddress(e, t) {
    return this.createProgramAddressSync(e, t);
  }
  static findProgramAddressSync(e, t) {
    let n = 255,
      r;
    for (; n != 0; ) {
      try {
        const i = e.concat(B.from([n]));
        r = this.createProgramAddressSync(i, t);
      } catch (i) {
        if (i instanceof TypeError) throw i;
        n--;
        continue;
      }
      return [r, n];
    }
    throw new Error('Unable to find a viable program address nonce');
  }
  static async findProgramAddress(e, t) {
    return this.findProgramAddressSync(e, t);
  }
  static isOnCurve(e) {
    const t = new w(e);
    return Ls(t.toBytes());
  }
}
w.default = new w('11111111111111111111111111111111');
zt.set(w, { kind: 'struct', fields: [['_bn', 'u256']] });
class Bo {
  constructor(e) {
    if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
      const t = D(e);
      if (e.length !== 64) throw new Error('bad secret key size');
      (this._publicKey = t.slice(32, 64)), (this._secretKey = t.slice(0, 32));
    } else (this._secretKey = D(Po())), (this._publicKey = D(cn(this._secretKey)));
  }
  get publicKey() {
    return new w(this._publicKey);
  }
  get secretKey() {
    return B.concat([this._secretKey, this._publicKey], 64);
  }
}
const No = new w('BPFLoader1111111111111111111111111111111111'),
  ct = 1232,
  fn = 127,
  Ft = 64;
class os extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: block height exceeded.`),
      (this.signature = void 0),
      (this.signature = e);
  }
}
Object.defineProperty(os.prototype, 'name', {
  value: 'TransactionExpiredBlockheightExceededError',
});
class as extends Error {
  constructor(e, t) {
    super(
      `Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
    ),
      (this.signature = void 0),
      (this.signature = e);
  }
}
Object.defineProperty(as.prototype, 'name', { value: 'TransactionExpiredTimeoutError' });
class It extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: the nonce is no longer valid.`),
      (this.signature = void 0),
      (this.signature = e);
  }
}
Object.defineProperty(It.prototype, 'name', { value: 'TransactionExpiredNonceInvalidError' });
class $t {
  constructor(e, t) {
    (this.staticAccountKeys = void 0),
      (this.accountKeysFromLookups = void 0),
      (this.staticAccountKeys = e),
      (this.accountKeysFromLookups = t);
  }
  keySegments() {
    const e = [this.staticAccountKeys];
    return (
      this.accountKeysFromLookups &&
        (e.push(this.accountKeysFromLookups.writable),
        e.push(this.accountKeysFromLookups.readonly)),
      e
    );
  }
  get(e) {
    for (const t of this.keySegments()) {
      if (e < t.length) return t[e];
      e -= t.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(e) {
    if (this.length > 256) throw new Error('Account index overflow encountered during compilation');
    const n = new Map();
    this.keySegments()
      .flat()
      .forEach((i, o) => {
        n.set(i.toBase58(), o);
      });
    const r = (i) => {
      const o = n.get(i.toBase58());
      if (o === void 0)
        throw new Error('Encountered an unknown instruction account key during compilation');
      return o;
    };
    return e.map((i) => ({
      programIdIndex: r(i.programId),
      accountKeyIndexes: i.keys.map((o) => r(o.pubkey)),
      data: i.data,
    }));
  }
}
const M = (s = 'publicKey') => ne(32, s),
  Lo = (s = 'signature') => ne(64, s),
  gt = (s = 'string') => {
    const e = I([R('length'), R('lengthPadding'), ne(yt(R(), -8), 'chars')], s),
      t = e.decode.bind(e),
      n = e.encode.bind(e),
      r = e;
    return (
      (r.decode = (i, o) => t(i, o).chars.toString()),
      (r.encode = (i, o, a) => {
        const c = { chars: B.from(i, 'utf8') };
        return n(c, o, a);
      }),
      (r.alloc = (i) => R().span + R().span + B.from(i, 'utf8').length),
      r
    );
  },
  Oo = (s = 'authorized') => I([M('staker'), M('withdrawer')], s),
  Co = (s = 'lockup') => I([Be('unixTimestamp'), Be('epoch'), M('custodian')], s),
  Uo = (s = 'voteInit') =>
    I([M('nodePubkey'), M('authorizedVoter'), M('authorizedWithdrawer'), G('commission')], s),
  Ko = (s = 'voteAuthorizeWithSeedArgs') =>
    I(
      [
        R('voteAuthorizationType'),
        M('currentAuthorityDerivedKeyOwnerPubkey'),
        gt('currentAuthorityDerivedKeySeed'),
        M('newAuthorized'),
      ],
      s
    );
function _r(s, e) {
  const t = (r) => {
    if (r.span >= 0) return r.span;
    if (typeof r.alloc == 'function') return r.alloc(e[r.property]);
    if ('count' in r && 'elementLayout' in r) {
      const i = e[r.property];
      if (Array.isArray(i)) return i.length * t(r.elementLayout);
    } else if ('fields' in r) return _r({ layout: r }, e[r.property]);
    return 0;
  };
  let n = 0;
  return (
    s.layout.fields.forEach((r) => {
      n += t(r);
    }),
    n
  );
}
function Ae(s) {
  let e = 0,
    t = 0;
  for (;;) {
    let n = s.shift();
    if (((e |= (n & 127) << (t * 7)), (t += 1), !(n & 128))) break;
  }
  return e;
}
function Ee(s, e) {
  let t = e;
  for (;;) {
    let n = t & 127;
    if (((t >>= 7), t == 0)) {
      s.push(n);
      break;
    } else (n |= 128), s.push(n);
  }
}
function $(s, e) {
  if (!s) throw new Error(e || 'Assertion failed');
}
class gn {
  constructor(e, t) {
    (this.payer = void 0), (this.keyMetaMap = void 0), (this.payer = e), (this.keyMetaMap = t);
  }
  static compile(e, t) {
    const n = new Map(),
      r = (o) => {
        const a = o.toBase58();
        let c = n.get(a);
        return (
          c === void 0 && ((c = { isSigner: !1, isWritable: !1, isInvoked: !1 }), n.set(a, c)), c
        );
      },
      i = r(t);
    (i.isSigner = !0), (i.isWritable = !0);
    for (const o of e) {
      r(o.programId).isInvoked = !0;
      for (const a of o.keys) {
        const c = r(a.pubkey);
        c.isSigner || (c.isSigner = a.isSigner), c.isWritable || (c.isWritable = a.isWritable);
      }
    }
    return new gn(t, n);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    $(e.length <= 256, 'Max static account keys length exceeded');
    const t = e.filter(([, c]) => c.isSigner && c.isWritable),
      n = e.filter(([, c]) => c.isSigner && !c.isWritable),
      r = e.filter(([, c]) => !c.isSigner && c.isWritable),
      i = e.filter(([, c]) => !c.isSigner && !c.isWritable),
      o = {
        numRequiredSignatures: t.length + n.length,
        numReadonlySignedAccounts: n.length,
        numReadonlyUnsignedAccounts: i.length,
      };
    {
      $(t.length > 0, 'Expected at least one writable signer key');
      const [c] = t[0];
      $(c === this.payer.toBase58(), 'Expected first writable signer key to be the fee payer');
    }
    const a = [
      ...t.map(([c]) => new w(c)),
      ...n.map(([c]) => new w(c)),
      ...r.map(([c]) => new w(c)),
      ...i.map(([c]) => new w(c)),
    ];
    return [o, a];
  }
  extractTableLookup(e) {
    const [t, n] = this.drainKeysFoundInLookupTable(
        e.state.addresses,
        (o) => !o.isSigner && !o.isInvoked && o.isWritable
      ),
      [r, i] = this.drainKeysFoundInLookupTable(
        e.state.addresses,
        (o) => !o.isSigner && !o.isInvoked && !o.isWritable
      );
    if (!(t.length === 0 && r.length === 0))
      return [
        { accountKey: e.key, writableIndexes: t, readonlyIndexes: r },
        { writable: n, readonly: i },
      ];
  }
  drainKeysFoundInLookupTable(e, t) {
    const n = new Array(),
      r = new Array();
    for (const [i, o] of this.keyMetaMap.entries())
      if (t(o)) {
        const a = new w(i),
          c = e.findIndex((d) => d.equals(a));
        c >= 0 &&
          ($(c < 256, 'Max lookup table index exceeded'),
          n.push(c),
          r.push(a),
          this.keyMetaMap.delete(i));
      }
    return [n, r];
  }
}
const Ir = 'Reached end of buffer unexpectedly';
function Fe(s) {
  if (s.length === 0) throw new Error(Ir);
  return s.shift();
}
function _e(s, ...e) {
  const [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > s.length : t >= s.length) throw new Error(Ir);
  return s.splice(...e);
}
class De {
  constructor(e) {
    (this.header = void 0),
      (this.accountKeys = void 0),
      (this.recentBlockhash = void 0),
      (this.instructions = void 0),
      (this.indexToProgramIds = new Map()),
      (this.header = e.header),
      (this.accountKeys = e.accountKeys.map((t) => new w(t))),
      (this.recentBlockhash = e.recentBlockhash),
      (this.instructions = e.instructions),
      this.instructions.forEach((t) =>
        this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex])
      );
  }
  get version() {
    return 'legacy';
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((e) => ({
      programIdIndex: e.programIdIndex,
      accountKeyIndexes: e.accounts,
      data: fe.decode(e.data),
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new $t(this.staticAccountKeys);
  }
  static compile(e) {
    const t = gn.compile(e.instructions, e.payerKey),
      [n, r] = t.getMessageComponents(),
      o = new $t(r)
        .compileInstructions(e.instructions)
        .map((a) => ({
          programIdIndex: a.programIdIndex,
          accounts: a.accountKeyIndexes,
          data: fe.encode(a.data),
        }));
    return new De({
      header: n,
      accountKeys: r,
      recentBlockhash: e.recentBlockhash,
      instructions: o,
    });
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures;
    if (e >= this.header.numRequiredSignatures) {
      const n = e - t,
        i = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
      return n < i;
    } else {
      const n = t - this.header.numReadonlySignedAccounts;
      return e < n;
    }
  }
  isProgramId(e) {
    return this.indexToProgramIds.has(e);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((e, t) => !this.isProgramId(t));
  }
  serialize() {
    const e = this.accountKeys.length;
    let t = [];
    Ee(t, e);
    const n = this.instructions.map((l) => {
      const { accounts: g, programIdIndex: f } = l,
        b = Array.from(fe.decode(l.data));
      let y = [];
      Ee(y, g.length);
      let k = [];
      return (
        Ee(k, b.length),
        {
          programIdIndex: f,
          keyIndicesCount: B.from(y),
          keyIndices: g,
          dataLength: B.from(k),
          data: b,
        }
      );
    });
    let r = [];
    Ee(r, n.length);
    let i = B.alloc(ct);
    B.from(r).copy(i);
    let o = r.length;
    n.forEach((l) => {
      const f = I([
        G('programIdIndex'),
        ne(l.keyIndicesCount.length, 'keyIndicesCount'),
        be(G('keyIndex'), l.keyIndices.length, 'keyIndices'),
        ne(l.dataLength.length, 'dataLength'),
        be(G('userdatum'), l.data.length, 'data'),
      ]).encode(l, i, o);
      o += f;
    }),
      (i = i.slice(0, o));
    const a = I([
        ne(1, 'numRequiredSignatures'),
        ne(1, 'numReadonlySignedAccounts'),
        ne(1, 'numReadonlyUnsignedAccounts'),
        ne(t.length, 'keyCount'),
        be(M('key'), e, 'keys'),
        M('recentBlockhash'),
      ]),
      c = {
        numRequiredSignatures: B.from([this.header.numRequiredSignatures]),
        numReadonlySignedAccounts: B.from([this.header.numReadonlySignedAccounts]),
        numReadonlyUnsignedAccounts: B.from([this.header.numReadonlyUnsignedAccounts]),
        keyCount: B.from(t),
        keys: this.accountKeys.map((l) => D(l.toBytes())),
        recentBlockhash: fe.decode(this.recentBlockhash),
      };
    let d = B.alloc(2048);
    const u = a.encode(c, d);
    return i.copy(d, u), d.slice(0, u + i.length);
  }
  static from(e) {
    let t = [...e];
    const n = Fe(t);
    if (n !== (n & fn))
      throw new Error(
        'Versioned messages must be deserialized with VersionedMessage.deserialize()'
      );
    const r = Fe(t),
      i = Fe(t),
      o = Ae(t);
    let a = [];
    for (let g = 0; g < o; g++) {
      const f = _e(t, 0, qe);
      a.push(new w(B.from(f)));
    }
    const c = _e(t, 0, qe),
      d = Ae(t);
    let u = [];
    for (let g = 0; g < d; g++) {
      const f = Fe(t),
        b = Ae(t),
        y = _e(t, 0, b),
        k = Ae(t),
        v = _e(t, 0, k),
        W = fe.encode(B.from(v));
      u.push({ programIdIndex: f, accounts: y, data: W });
    }
    const l = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: r,
        numReadonlyUnsignedAccounts: i,
      },
      recentBlockhash: fe.encode(B.from(c)),
      accountKeys: a,
      instructions: u,
    };
    return new De(l);
  }
}
class bt {
  constructor(e) {
    (this.header = void 0),
      (this.staticAccountKeys = void 0),
      (this.recentBlockhash = void 0),
      (this.compiledInstructions = void 0),
      (this.addressTableLookups = void 0),
      (this.header = e.header),
      (this.staticAccountKeys = e.staticAccountKeys),
      (this.recentBlockhash = e.recentBlockhash),
      (this.compiledInstructions = e.compiledInstructions),
      (this.addressTableLookups = e.addressTableLookups);
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let e = 0;
    for (const t of this.addressTableLookups)
      e += t.readonlyIndexes.length + t.writableIndexes.length;
    return e;
  }
  getAccountKeys(e) {
    let t;
    if (e && 'accountKeysFromLookups' in e && e.accountKeysFromLookups) {
      if (
        this.numAccountKeysFromLookups !=
        e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length
      )
        throw new Error(
          'Failed to get account keys because of a mismatch in the number of account keys from lookups'
        );
      t = e.accountKeysFromLookups;
    } else if (e && 'addressLookupTableAccounts' in e && e.addressLookupTableAccounts)
      t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error('Failed to get account keys because address table lookups were not resolved');
    return new $t(this.staticAccountKeys, t);
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures,
      n = this.staticAccountKeys.length;
    if (e >= n) {
      const r = e - n,
        i = this.addressTableLookups.reduce((o, a) => o + a.writableIndexes.length, 0);
      return r < i;
    } else if (e >= this.header.numRequiredSignatures) {
      const r = e - t,
        o = n - t - this.header.numReadonlyUnsignedAccounts;
      return r < o;
    } else {
      const r = t - this.header.numReadonlySignedAccounts;
      return e < r;
    }
  }
  resolveAddressTableLookups(e) {
    const t = { writable: [], readonly: [] };
    for (const n of this.addressTableLookups) {
      const r = e.find((i) => i.key.equals(n.accountKey));
      if (!r)
        throw new Error(
          `Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`
        );
      for (const i of n.writableIndexes)
        if (i < r.state.addresses.length) t.writable.push(r.state.addresses[i]);
        else
          throw new Error(
            `Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`
          );
      for (const i of n.readonlyIndexes)
        if (i < r.state.addresses.length) t.readonly.push(r.state.addresses[i]);
        else
          throw new Error(
            `Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`
          );
    }
    return t;
  }
  static compile(e) {
    const t = gn.compile(e.instructions, e.payerKey),
      n = new Array(),
      r = { writable: new Array(), readonly: new Array() },
      i = e.addressLookupTableAccounts || [];
    for (const u of i) {
      const l = t.extractTableLookup(u);
      if (l !== void 0) {
        const [g, { writable: f, readonly: b }] = l;
        n.push(g), r.writable.push(...f), r.readonly.push(...b);
      }
    }
    const [o, a] = t.getMessageComponents(),
      d = new $t(a, r).compileInstructions(e.instructions);
    return new bt({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: d,
      addressTableLookups: n,
    });
  }
  serialize() {
    const e = Array();
    Ee(e, this.staticAccountKeys.length);
    const t = this.serializeInstructions(),
      n = Array();
    Ee(n, this.compiledInstructions.length);
    const r = this.serializeAddressTableLookups(),
      i = Array();
    Ee(i, this.addressTableLookups.length);
    const o = I([
        G('prefix'),
        I(
          [
            G('numRequiredSignatures'),
            G('numReadonlySignedAccounts'),
            G('numReadonlyUnsignedAccounts'),
          ],
          'header'
        ),
        ne(e.length, 'staticAccountKeysLength'),
        be(M(), this.staticAccountKeys.length, 'staticAccountKeys'),
        M('recentBlockhash'),
        ne(n.length, 'instructionsLength'),
        ne(t.length, 'serializedInstructions'),
        ne(i.length, 'addressTableLookupsLength'),
        ne(r.length, 'serializedAddressTableLookups'),
      ]),
      a = new Uint8Array(ct),
      d = o.encode(
        {
          prefix: 128,
          header: this.header,
          staticAccountKeysLength: new Uint8Array(e),
          staticAccountKeys: this.staticAccountKeys.map((u) => u.toBytes()),
          recentBlockhash: fe.decode(this.recentBlockhash),
          instructionsLength: new Uint8Array(n),
          serializedInstructions: t,
          addressTableLookupsLength: new Uint8Array(i),
          serializedAddressTableLookups: r,
        },
        a
      );
    return a.slice(0, d);
  }
  serializeInstructions() {
    let e = 0;
    const t = new Uint8Array(ct);
    for (const n of this.compiledInstructions) {
      const r = Array();
      Ee(r, n.accountKeyIndexes.length);
      const i = Array();
      Ee(i, n.data.length);
      const o = I([
        G('programIdIndex'),
        ne(r.length, 'encodedAccountKeyIndexesLength'),
        be(G(), n.accountKeyIndexes.length, 'accountKeyIndexes'),
        ne(i.length, 'encodedDataLength'),
        ne(n.data.length, 'data'),
      ]);
      e += o.encode(
        {
          programIdIndex: n.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(r),
          accountKeyIndexes: n.accountKeyIndexes,
          encodedDataLength: new Uint8Array(i),
          data: n.data,
        },
        t,
        e
      );
    }
    return t.slice(0, e);
  }
  serializeAddressTableLookups() {
    let e = 0;
    const t = new Uint8Array(ct);
    for (const n of this.addressTableLookups) {
      const r = Array();
      Ee(r, n.writableIndexes.length);
      const i = Array();
      Ee(i, n.readonlyIndexes.length);
      const o = I([
        M('accountKey'),
        ne(r.length, 'encodedWritableIndexesLength'),
        be(G(), n.writableIndexes.length, 'writableIndexes'),
        ne(i.length, 'encodedReadonlyIndexesLength'),
        be(G(), n.readonlyIndexes.length, 'readonlyIndexes'),
      ]);
      e += o.encode(
        {
          accountKey: n.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(r),
          writableIndexes: n.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(i),
          readonlyIndexes: n.readonlyIndexes,
        },
        t,
        e
      );
    }
    return t.slice(0, e);
  }
  static deserialize(e) {
    let t = [...e];
    const n = Fe(t),
      r = n & fn;
    $(n !== r, 'Expected versioned message but received legacy message');
    const i = r;
    $(i === 0, `Expected versioned message with version 0 but found version ${i}`);
    const o = {
        numRequiredSignatures: Fe(t),
        numReadonlySignedAccounts: Fe(t),
        numReadonlyUnsignedAccounts: Fe(t),
      },
      a = [],
      c = Ae(t);
    for (let b = 0; b < c; b++) a.push(new w(_e(t, 0, qe)));
    const d = fe.encode(_e(t, 0, qe)),
      u = Ae(t),
      l = [];
    for (let b = 0; b < u; b++) {
      const y = Fe(t),
        k = Ae(t),
        v = _e(t, 0, k),
        W = Ae(t),
        T = new Uint8Array(_e(t, 0, W));
      l.push({ programIdIndex: y, accountKeyIndexes: v, data: T });
    }
    const g = Ae(t),
      f = [];
    for (let b = 0; b < g; b++) {
      const y = new w(_e(t, 0, qe)),
        k = Ae(t),
        v = _e(t, 0, k),
        W = Ae(t),
        T = _e(t, 0, W);
      f.push({ accountKey: y, writableIndexes: v, readonlyIndexes: T });
    }
    return new bt({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: d,
      compiledInstructions: l,
      addressTableLookups: f,
    });
  }
}
const cs = {
  deserializeMessageVersion(s) {
    const e = s[0],
      t = e & fn;
    return t === e ? 'legacy' : t;
  },
  deserialize: (s) => {
    const e = cs.deserializeMessageVersion(s);
    if (e === 'legacy') return De.from(s);
    if (e === 0) return bt.deserialize(s);
    throw new Error(`Transaction message version ${e} deserialization is not supported`);
  },
};
let Ce;
(function (s) {
  (s[(s.BLOCKHEIGHT_EXCEEDED = 0)] = 'BLOCKHEIGHT_EXCEEDED'),
    (s[(s.PROCESSED = 1)] = 'PROCESSED'),
    (s[(s.TIMED_OUT = 2)] = 'TIMED_OUT'),
    (s[(s.NONCE_INVALID = 3)] = 'NONCE_INVALID');
})(Ce || (Ce = {}));
const Do = B.alloc(Ft).fill(0);
class J {
  constructor(e) {
    (this.keys = void 0),
      (this.programId = void 0),
      (this.data = B.alloc(0)),
      (this.programId = e.programId),
      (this.keys = e.keys),
      e.data && (this.data = e.data);
  }
  toJSON() {
    return {
      keys: this.keys.map(({ pubkey: e, isSigner: t, isWritable: n }) => ({
        pubkey: e.toJSON(),
        isSigner: t,
        isWritable: n,
      })),
      programId: this.programId.toJSON(),
      data: [...this.data],
    };
  }
}
class V {
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  constructor(e) {
    if (
      ((this.signatures = []),
      (this.feePayer = void 0),
      (this.instructions = []),
      (this.recentBlockhash = void 0),
      (this.lastValidBlockHeight = void 0),
      (this.nonceInfo = void 0),
      (this.minNonceContextSlot = void 0),
      (this._message = void 0),
      (this._json = void 0),
      !!e)
    )
      if (
        (e.feePayer && (this.feePayer = e.feePayer),
        e.signatures && (this.signatures = e.signatures),
        Object.prototype.hasOwnProperty.call(e, 'nonceInfo'))
      ) {
        const { minContextSlot: t, nonceInfo: n } = e;
        (this.minNonceContextSlot = t), (this.nonceInfo = n);
      } else if (Object.prototype.hasOwnProperty.call(e, 'lastValidBlockHeight')) {
        const { blockhash: t, lastValidBlockHeight: n } = e;
        (this.recentBlockhash = t), (this.lastValidBlockHeight = n);
      } else {
        const { recentBlockhash: t, nonceInfo: n } = e;
        n && (this.nonceInfo = n), (this.recentBlockhash = t);
      }
  }
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo
        ? {
            nonce: this.nonceInfo.nonce,
            nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
          }
        : null,
      instructions: this.instructions.map((e) => e.toJSON()),
      signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
    };
  }
  add(...e) {
    if (e.length === 0) throw new Error('No instructions');
    return (
      e.forEach((t) => {
        'instructions' in t
          ? (this.instructions = this.instructions.concat(t.instructions))
          : 'data' in t && 'programId' in t && 'keys' in t
            ? this.instructions.push(t)
            : this.instructions.push(new J(t));
      }),
      this
    );
  }
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let e, t;
    if (
      (this.nonceInfo
        ? ((e = this.nonceInfo.nonce),
          this.instructions[0] != this.nonceInfo.nonceInstruction
            ? (t = [this.nonceInfo.nonceInstruction, ...this.instructions])
            : (t = this.instructions))
        : ((e = this.recentBlockhash), (t = this.instructions)),
      !e)
    )
      throw new Error('Transaction recentBlockhash required');
    t.length < 1 && console.warn('No instructions provided');
    let n;
    if (this.feePayer) n = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      n = this.signatures[0].publicKey;
    else throw new Error('Transaction fee payer required');
    for (let y = 0; y < t.length; y++)
      if (t[y].programId === void 0)
        throw new Error(`Transaction instruction index ${y} has undefined program id`);
    const r = [],
      i = [];
    t.forEach((y) => {
      y.keys.forEach((v) => {
        i.push({ ...v });
      });
      const k = y.programId.toString();
      r.includes(k) || r.push(k);
    }),
      r.forEach((y) => {
        i.push({ pubkey: new w(y), isSigner: !1, isWritable: !1 });
      });
    const o = [];
    i.forEach((y) => {
      const k = y.pubkey.toString(),
        v = o.findIndex((W) => W.pubkey.toString() === k);
      v > -1
        ? ((o[v].isWritable = o[v].isWritable || y.isWritable),
          (o[v].isSigner = o[v].isSigner || y.isSigner))
        : o.push(y);
    }),
      o.sort(function (y, k) {
        return y.isSigner !== k.isSigner
          ? y.isSigner
            ? -1
            : 1
          : y.isWritable !== k.isWritable
            ? y.isWritable
              ? -1
              : 1
            : y.pubkey.toBase58().localeCompare(k.pubkey.toBase58());
      });
    const a = o.findIndex((y) => y.pubkey.equals(n));
    if (a > -1) {
      const [y] = o.splice(a, 1);
      (y.isSigner = !0), (y.isWritable = !0), o.unshift(y);
    } else o.unshift({ pubkey: n, isSigner: !0, isWritable: !0 });
    for (const y of this.signatures) {
      const k = o.findIndex((v) => v.pubkey.equals(y.publicKey));
      if (k > -1)
        o[k].isSigner ||
          ((o[k].isSigner = !0),
          console.warn(
            'Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.'
          ));
      else throw new Error(`unknown signer: ${y.publicKey.toString()}`);
    }
    let c = 0,
      d = 0,
      u = 0;
    const l = [],
      g = [];
    o.forEach(({ pubkey: y, isSigner: k, isWritable: v }) => {
      k ? (l.push(y.toString()), (c += 1), v || (d += 1)) : (g.push(y.toString()), v || (u += 1));
    });
    const f = l.concat(g),
      b = t.map((y) => {
        const { data: k, programId: v } = y;
        return {
          programIdIndex: f.indexOf(v.toString()),
          accounts: y.keys.map((W) => f.indexOf(W.pubkey.toString())),
          data: fe.encode(k),
        };
      });
    return (
      b.forEach((y) => {
        $(y.programIdIndex >= 0), y.accounts.forEach((k) => $(k >= 0));
      }),
      new De({
        header: {
          numRequiredSignatures: c,
          numReadonlySignedAccounts: d,
          numReadonlyUnsignedAccounts: u,
        },
        accountKeys: f,
        recentBlockhash: e,
        instructions: b,
      })
    );
  }
  _compile() {
    const e = this.compileMessage(),
      t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
    return (
      (this.signatures.length === t.length &&
        this.signatures.every((r, i) => t[i].equals(r.publicKey))) ||
        (this.signatures = t.map((n) => ({ signature: null, publicKey: n }))),
      e
    );
  }
  serializeMessage() {
    return this._compile().serialize();
  }
  async getEstimatedFee(e) {
    return (await e.getFeeForMessage(this.compileMessage())).value;
  }
  setSigners(...e) {
    if (e.length === 0) throw new Error('No signers');
    const t = new Set();
    this.signatures = e
      .filter((n) => {
        const r = n.toString();
        return t.has(r) ? !1 : (t.add(r), !0);
      })
      .map((n) => ({ signature: null, publicKey: n }));
  }
  sign(...e) {
    if (e.length === 0) throw new Error('No signers');
    const t = new Set(),
      n = [];
    for (const i of e) {
      const o = i.publicKey.toString();
      t.has(o) || (t.add(o), n.push(i));
    }
    this.signatures = n.map((i) => ({ signature: null, publicKey: i.publicKey }));
    const r = this._compile();
    this._partialSign(r, ...n);
  }
  partialSign(...e) {
    if (e.length === 0) throw new Error('No signers');
    const t = new Set(),
      n = [];
    for (const i of e) {
      const o = i.publicKey.toString();
      t.has(o) || (t.add(o), n.push(i));
    }
    const r = this._compile();
    this._partialSign(r, ...n);
  }
  _partialSign(e, ...t) {
    const n = e.serialize();
    t.forEach((r) => {
      const i = rs(n, r.secretKey);
      this._addSignature(r.publicKey, D(i));
    });
  }
  addSignature(e, t) {
    this._compile(), this._addSignature(e, t);
  }
  _addSignature(e, t) {
    $(t.length === 64);
    const n = this.signatures.findIndex((r) => e.equals(r.publicKey));
    if (n < 0) throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[n].signature = B.from(t);
  }
  verifySignatures(e) {
    return this._verifySignatures(this.serializeMessage(), e === void 0 ? !0 : e);
  }
  _verifySignatures(e, t) {
    for (const { signature: n, publicKey: r } of this.signatures)
      if (n === null) {
        if (t) return !1;
      } else if (!vo(n, e, r.toBytes())) return !1;
    return !0;
  }
  serialize(e) {
    const { requireAllSignatures: t, verifySignatures: n } = Object.assign(
        { requireAllSignatures: !0, verifySignatures: !0 },
        e
      ),
      r = this.serializeMessage();
    if (n && !this._verifySignatures(r, t)) throw new Error('Signature verification failed');
    return this._serialize(r);
  }
  _serialize(e) {
    const { signatures: t } = this,
      n = [];
    Ee(n, t.length);
    const r = n.length + t.length * 64 + e.length,
      i = B.alloc(r);
    return (
      $(t.length < 256),
      B.from(n).copy(i, 0),
      t.forEach(({ signature: o }, a) => {
        o !== null &&
          ($(o.length === 64, 'signature has invalid length'),
          B.from(o).copy(i, n.length + a * 64));
      }),
      e.copy(i, n.length + t.length * 64),
      $(i.length <= ct, `Transaction too large: ${i.length} > ${ct}`),
      i
    );
  }
  get keys() {
    return $(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
  }
  get programId() {
    return $(this.instructions.length === 1), this.instructions[0].programId;
  }
  get data() {
    return $(this.instructions.length === 1), this.instructions[0].data;
  }
  static from(e) {
    let t = [...e];
    const n = Ae(t);
    let r = [];
    for (let i = 0; i < n; i++) {
      const o = _e(t, 0, Ft);
      r.push(fe.encode(B.from(o)));
    }
    return V.populate(De.from(t), r);
  }
  static populate(e, t = []) {
    const n = new V();
    return (
      (n.recentBlockhash = e.recentBlockhash),
      e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]),
      t.forEach((r, i) => {
        const o = {
          signature: r == fe.encode(Do) ? null : fe.decode(r),
          publicKey: e.accountKeys[i],
        };
        n.signatures.push(o);
      }),
      e.instructions.forEach((r) => {
        const i = r.accounts.map((o) => {
          const a = e.accountKeys[o];
          return {
            pubkey: a,
            isSigner:
              n.signatures.some((c) => c.publicKey.toString() === a.toString()) ||
              e.isAccountSigner(o),
            isWritable: e.isAccountWritable(o),
          };
        });
        n.instructions.push(
          new J({ keys: i, programId: e.accountKeys[r.programIdIndex], data: fe.decode(r.data) })
        );
      }),
      (n._message = e),
      (n._json = n.toJSON()),
      n
    );
  }
}
class us {
  constructor(e) {
    (this.payerKey = void 0),
      (this.instructions = void 0),
      (this.recentBlockhash = void 0),
      (this.payerKey = e.payerKey),
      (this.instructions = e.instructions),
      (this.recentBlockhash = e.recentBlockhash);
  }
  static decompile(e, t) {
    const { header: n, compiledInstructions: r, recentBlockhash: i } = e,
      {
        numRequiredSignatures: o,
        numReadonlySignedAccounts: a,
        numReadonlyUnsignedAccounts: c,
      } = n,
      d = o - a;
    $(d > 0, 'Message header is invalid');
    const u = e.staticAccountKeys.length - o - c;
    $(u >= 0, 'Message header is invalid');
    const l = e.getAccountKeys(t),
      g = l.get(0);
    if (g === void 0)
      throw new Error('Failed to decompile message because no account keys were found');
    const f = [];
    for (const b of r) {
      const y = [];
      for (const v of b.accountKeyIndexes) {
        const W = l.get(v);
        if (W === void 0) throw new Error(`Failed to find key for account key index ${v}`);
        const T = v < o;
        let j;
        T
          ? (j = v < d)
          : v < l.staticAccountKeys.length
            ? (j = v - o < u)
            : (j = v - l.staticAccountKeys.length < l.accountKeysFromLookups.writable.length),
          y.push({ pubkey: W, isSigner: v < n.numRequiredSignatures, isWritable: j });
      }
      const k = l.get(b.programIdIndex);
      if (k === void 0)
        throw new Error(`Failed to find program id for program id index ${b.programIdIndex}`);
      f.push(new J({ programId: k, data: D(b.data), keys: y }));
    }
    return new us({ payerKey: g, instructions: f, recentBlockhash: i });
  }
  compileToLegacyMessage() {
    return De.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
    });
  }
  compileToV0Message(e) {
    return bt.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
      addressLookupTableAccounts: e,
    });
  }
}
class ls {
  get version() {
    return this.message.version;
  }
  constructor(e, t) {
    if (((this.signatures = void 0), (this.message = void 0), t !== void 0))
      $(
        t.length === e.header.numRequiredSignatures,
        'Expected signatures length to be equal to the number of required signatures'
      ),
        (this.signatures = t);
    else {
      const n = [];
      for (let r = 0; r < e.header.numRequiredSignatures; r++) n.push(new Uint8Array(Ft));
      this.signatures = n;
    }
    this.message = e;
  }
  serialize() {
    const e = this.message.serialize(),
      t = Array();
    Ee(t, this.signatures.length);
    const n = I([
        ne(t.length, 'encodedSignaturesLength'),
        be(Lo(), this.signatures.length, 'signatures'),
        ne(e.length, 'serializedMessage'),
      ]),
      r = new Uint8Array(2048),
      i = n.encode(
        {
          encodedSignaturesLength: new Uint8Array(t),
          signatures: this.signatures,
          serializedMessage: e,
        },
        r
      );
    return r.slice(0, i);
  }
  static deserialize(e) {
    let t = [...e];
    const n = [],
      r = Ae(t);
    for (let o = 0; o < r; o++) n.push(new Uint8Array(_e(t, 0, Ft)));
    const i = cs.deserialize(new Uint8Array(t));
    return new ls(i, n);
  }
  sign(e) {
    const t = this.message.serialize(),
      n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    for (const r of e) {
      const i = n.findIndex((o) => o.equals(r.publicKey));
      $(i >= 0, `Cannot sign with non signer key ${r.publicKey.toBase58()}`),
        (this.signatures[i] = rs(t, r.secretKey));
    }
  }
  addSignature(e, t) {
    $(t.byteLength === 64, 'Signature must be 64 bytes long');
    const r = this.message.staticAccountKeys
      .slice(0, this.message.header.numRequiredSignatures)
      .findIndex((i) => i.equals(e));
    $(
      r >= 0,
      `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
    ),
      (this.signatures[r] = t);
  }
}
const He = new w('SysvarC1ock11111111111111111111111111111111'),
  zo = new w('SysvarEpochSchedu1e111111111111111111111111'),
  Wo = new w('Sysvar1nstructions1111111111111111111111111'),
  nn = new w('SysvarRecentB1ockHashes11111111111111111111'),
  vt = new w('SysvarRent111111111111111111111111111111111'),
  Mo = new w('SysvarRewards111111111111111111111111111111'),
  Ho = new w('SysvarS1otHashes111111111111111111111111111'),
  Fo = new w('SysvarS1otHistory11111111111111111111111111'),
  sn = new w('SysvarStakeHistory1111111111111111111111111');
async function rn(s, e, t, n) {
  const r = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
      maxRetries: n.maxRetries,
      minContextSlot: n.minContextSlot,
    },
    i = await s.sendTransaction(e, t, r);
  let o;
  if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
    o = (
      await s.confirmTransaction(
        {
          abortSignal: n == null ? void 0 : n.abortSignal,
          signature: i,
          blockhash: e.recentBlockhash,
          lastValidBlockHeight: e.lastValidBlockHeight,
        },
        n && n.commitment
      )
    ).value;
  else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
    const { nonceInstruction: a } = e.nonceInfo,
      c = a.keys[0].pubkey;
    o = (
      await s.confirmTransaction(
        {
          abortSignal: n == null ? void 0 : n.abortSignal,
          minContextSlot: e.minNonceContextSlot,
          nonceAccountPubkey: c,
          nonceValue: e.nonceInfo.nonce,
          signature: i,
        },
        n && n.commitment
      )
    ).value;
  } else
    (n == null ? void 0 : n.abortSignal) != null &&
      console.warn(
        'sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.'
      ),
      (o = (await s.confirmTransaction(i, n && n.commitment)).value);
  if (o.err) throw new Error(`Transaction ${i} failed (${JSON.stringify(o)})`);
  return i;
}
function ft(s) {
  return new Promise((e) => setTimeout(e, s));
}
function F(s, e) {
  const t = s.layout.span >= 0 ? s.layout.span : _r(s, e),
    n = B.alloc(t),
    r = Object.assign({ instruction: s.index }, e);
  return s.layout.encode(r, n), n;
}
function q(s, e) {
  let t;
  try {
    t = s.layout.decode(e);
  } catch (n) {
    throw new Error('invalid instruction; ' + n);
  }
  if (t.instruction !== s.index)
    throw new Error(
      `invalid instruction; instruction index mismatch ${t.instruction} != ${s.index}`
    );
  return t;
}
const Rr = ye('lamportsPerSignature'),
  Er = I([R('version'), R('state'), M('authorizedPubkey'), M('nonce'), I([Rr], 'feeCalculator')]),
  Gn = Er.span;
class yn {
  constructor(e) {
    (this.authorizedPubkey = void 0),
      (this.nonce = void 0),
      (this.feeCalculator = void 0),
      (this.authorizedPubkey = e.authorizedPubkey),
      (this.nonce = e.nonce),
      (this.feeCalculator = e.feeCalculator);
  }
  static fromAccountData(e) {
    const t = Er.decode(D(e), 0);
    return new yn({
      authorizedPubkey: new w(t.authorizedPubkey),
      nonce: new w(t.nonce).toString(),
      feeCalculator: t.feeCalculator,
    });
  }
}
const $o = (s) => {
    const e = s.decode.bind(s),
      t = s.encode.bind(s);
    return { decode: e, encode: t };
  },
  Go = (s) => (e) => {
    const t = ne(s, e),
      { encode: n, decode: r } = $o(t),
      i = t;
    return (
      (i.decode = (o, a) => {
        const c = r(o, a);
        return Qr(B.from(c));
      }),
      (i.encode = (o, a, c) => {
        const d = Qs(o, s);
        return n(d, a, c);
      }),
      i
    );
  },
  xt = Go(8);
class qo {
  constructor() {}
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R('instruction').decode(e.data);
    let r;
    for (const [i, o] of Object.entries(Z))
      if (o.index == n) {
        r = i;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a SystemInstruction');
    return r;
  }
  static decodeCreateAccount(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const { lamports: t, space: n, programId: r } = q(Z.Create, e.data);
    return {
      fromPubkey: e.keys[0].pubkey,
      newAccountPubkey: e.keys[1].pubkey,
      lamports: t,
      space: n,
      programId: new w(r),
    };
  }
  static decodeTransfer(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const { lamports: t } = q(Z.Transfer, e.data);
    return { fromPubkey: e.keys[0].pubkey, toPubkey: e.keys[1].pubkey, lamports: t };
  }
  static decodeTransferWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const { lamports: t, seed: n, programId: r } = q(Z.TransferWithSeed, e.data);
    return {
      fromPubkey: e.keys[0].pubkey,
      basePubkey: e.keys[1].pubkey,
      toPubkey: e.keys[2].pubkey,
      lamports: t,
      seed: n,
      programId: new w(r),
    };
  }
  static decodeAllocate(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const { space: t } = q(Z.Allocate, e.data);
    return { accountPubkey: e.keys[0].pubkey, space: t };
  }
  static decodeAllocateWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const { base: t, seed: n, space: r, programId: i } = q(Z.AllocateWithSeed, e.data);
    return {
      accountPubkey: e.keys[0].pubkey,
      basePubkey: new w(t),
      seed: n,
      space: r,
      programId: new w(i),
    };
  }
  static decodeAssign(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const { programId: t } = q(Z.Assign, e.data);
    return { accountPubkey: e.keys[0].pubkey, programId: new w(t) };
  }
  static decodeAssignWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
    const { base: t, seed: n, programId: r } = q(Z.AssignWithSeed, e.data);
    return { accountPubkey: e.keys[0].pubkey, basePubkey: new w(t), seed: n, programId: new w(r) };
  }
  static decodeCreateWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const { base: t, seed: n, lamports: r, space: i, programId: o } = q(Z.CreateWithSeed, e.data);
    return {
      fromPubkey: e.keys[0].pubkey,
      newAccountPubkey: e.keys[1].pubkey,
      basePubkey: new w(t),
      seed: n,
      lamports: r,
      space: i,
      programId: new w(o),
    };
  }
  static decodeNonceInitialize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const { authorized: t } = q(Z.InitializeNonceAccount, e.data);
    return { noncePubkey: e.keys[0].pubkey, authorizedPubkey: new w(t) };
  }
  static decodeNonceAdvance(e) {
    return (
      this.checkProgramId(e.programId),
      this.checkKeyLength(e.keys, 3),
      q(Z.AdvanceNonceAccount, e.data),
      { noncePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
    );
  }
  static decodeNonceWithdraw(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
    const { lamports: t } = q(Z.WithdrawNonceAccount, e.data);
    return {
      noncePubkey: e.keys[0].pubkey,
      toPubkey: e.keys[1].pubkey,
      authorizedPubkey: e.keys[4].pubkey,
      lamports: t,
    };
  }
  static decodeNonceAuthorize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const { authorized: t } = q(Z.AuthorizeNonceAccount, e.data);
    return {
      noncePubkey: e.keys[0].pubkey,
      authorizedPubkey: e.keys[1].pubkey,
      newAuthorizedPubkey: new w(t),
    };
  }
  static checkProgramId(e) {
    if (!e.equals(ge.programId))
      throw new Error('invalid instruction; programId is not SystemProgram');
  }
  static checkKeyLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
const Z = Object.freeze({
  Create: { index: 0, layout: I([R('instruction'), Be('lamports'), Be('space'), M('programId')]) },
  Assign: { index: 1, layout: I([R('instruction'), M('programId')]) },
  Transfer: { index: 2, layout: I([R('instruction'), xt('lamports')]) },
  CreateWithSeed: {
    index: 3,
    layout: I([
      R('instruction'),
      M('base'),
      gt('seed'),
      Be('lamports'),
      Be('space'),
      M('programId'),
    ]),
  },
  AdvanceNonceAccount: { index: 4, layout: I([R('instruction')]) },
  WithdrawNonceAccount: { index: 5, layout: I([R('instruction'), Be('lamports')]) },
  InitializeNonceAccount: { index: 6, layout: I([R('instruction'), M('authorized')]) },
  AuthorizeNonceAccount: { index: 7, layout: I([R('instruction'), M('authorized')]) },
  Allocate: { index: 8, layout: I([R('instruction'), Be('space')]) },
  AllocateWithSeed: {
    index: 9,
    layout: I([R('instruction'), M('base'), gt('seed'), Be('space'), M('programId')]),
  },
  AssignWithSeed: {
    index: 10,
    layout: I([R('instruction'), M('base'), gt('seed'), M('programId')]),
  },
  TransferWithSeed: {
    index: 11,
    layout: I([R('instruction'), xt('lamports'), gt('seed'), M('programId')]),
  },
  UpgradeNonceAccount: { index: 12, layout: I([R('instruction')]) },
});
class ge {
  constructor() {}
  static createAccount(e) {
    const t = Z.Create,
      n = F(t, { lamports: e.lamports, space: e.space, programId: D(e.programId.toBuffer()) });
    return new J({
      keys: [
        { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
        { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
      ],
      programId: this.programId,
      data: n,
    });
  }
  static transfer(e) {
    let t, n;
    if ('basePubkey' in e) {
      const r = Z.TransferWithSeed;
      (t = F(r, {
        lamports: BigInt(e.lamports),
        seed: e.seed,
        programId: D(e.programId.toBuffer()),
      })),
        (n = [
          { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
          { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
        ]);
    } else {
      const r = Z.Transfer;
      (t = F(r, { lamports: BigInt(e.lamports) })),
        (n = [
          { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
          { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
        ]);
    }
    return new J({ keys: n, programId: this.programId, data: t });
  }
  static assign(e) {
    let t, n;
    if ('basePubkey' in e) {
      const r = Z.AssignWithSeed;
      (t = F(r, {
        base: D(e.basePubkey.toBuffer()),
        seed: e.seed,
        programId: D(e.programId.toBuffer()),
      })),
        (n = [
          { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
        ]);
    } else {
      const r = Z.Assign;
      (t = F(r, { programId: D(e.programId.toBuffer()) })),
        (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
    }
    return new J({ keys: n, programId: this.programId, data: t });
  }
  static createAccountWithSeed(e) {
    const t = Z.CreateWithSeed,
      n = F(t, {
        base: D(e.basePubkey.toBuffer()),
        seed: e.seed,
        lamports: e.lamports,
        space: e.space,
        programId: D(e.programId.toBuffer()),
      });
    let r = [
      { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
      { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
    ];
    return (
      e.basePubkey != e.fromPubkey &&
        r.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
      new J({ keys: r, programId: this.programId, data: n })
    );
  }
  static createNonceAccount(e) {
    const t = new V();
    'basePubkey' in e && 'seed' in e
      ? t.add(
          ge.createAccountWithSeed({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.noncePubkey,
            basePubkey: e.basePubkey,
            seed: e.seed,
            lamports: e.lamports,
            space: Gn,
            programId: this.programId,
          })
        )
      : t.add(
          ge.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.noncePubkey,
            lamports: e.lamports,
            space: Gn,
            programId: this.programId,
          })
        );
    const n = { noncePubkey: e.noncePubkey, authorizedPubkey: e.authorizedPubkey };
    return t.add(this.nonceInitialize(n)), t;
  }
  static nonceInitialize(e) {
    const t = Z.InitializeNonceAccount,
      n = F(t, { authorized: D(e.authorizedPubkey.toBuffer()) }),
      r = {
        keys: [
          { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: nn, isSigner: !1, isWritable: !1 },
          { pubkey: vt, isSigner: !1, isWritable: !1 },
        ],
        programId: this.programId,
        data: n,
      };
    return new J(r);
  }
  static nonceAdvance(e) {
    const t = Z.AdvanceNonceAccount,
      n = F(t),
      r = {
        keys: [
          { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: nn, isSigner: !1, isWritable: !1 },
          { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: n,
      };
    return new J(r);
  }
  static nonceWithdraw(e) {
    const t = Z.WithdrawNonceAccount,
      n = F(t, { lamports: e.lamports });
    return new J({
      keys: [
        { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
        { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
        { pubkey: nn, isSigner: !1, isWritable: !1 },
        { pubkey: vt, isSigner: !1, isWritable: !1 },
        { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: n,
    });
  }
  static nonceAuthorize(e) {
    const t = Z.AuthorizeNonceAccount,
      n = F(t, { authorized: D(e.newAuthorizedPubkey.toBuffer()) });
    return new J({
      keys: [
        { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
        { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: n,
    });
  }
  static allocate(e) {
    let t, n;
    if ('basePubkey' in e) {
      const r = Z.AllocateWithSeed;
      (t = F(r, {
        base: D(e.basePubkey.toBuffer()),
        seed: e.seed,
        space: e.space,
        programId: D(e.programId.toBuffer()),
      })),
        (n = [
          { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
        ]);
    } else {
      const r = Z.Allocate;
      (t = F(r, { space: e.space })),
        (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
    }
    return new J({ keys: n, programId: this.programId, data: t });
  }
}
ge.programId = new w('11111111111111111111111111111111');
const Vo = ct - 300;
class pt {
  constructor() {}
  static getMinNumSignatures(e) {
    return 2 * (Math.ceil(e / pt.chunkSize) + 1 + 1);
  }
  static async load(e, t, n, r, i) {
    {
      const l = await e.getMinimumBalanceForRentExemption(i.length),
        g = await e.getAccountInfo(n.publicKey, 'confirmed');
      let f = null;
      if (g !== null) {
        if (g.executable)
          return console.error('Program load failed, account is already executable'), !1;
        g.data.length !== i.length &&
          ((f = f || new V()), f.add(ge.allocate({ accountPubkey: n.publicKey, space: i.length }))),
          g.owner.equals(r) ||
            ((f = f || new V()), f.add(ge.assign({ accountPubkey: n.publicKey, programId: r }))),
          g.lamports < l &&
            ((f = f || new V()),
            f.add(
              ge.transfer({
                fromPubkey: t.publicKey,
                toPubkey: n.publicKey,
                lamports: l - g.lamports,
              })
            ));
      } else
        f = new V().add(
          ge.createAccount({
            fromPubkey: t.publicKey,
            newAccountPubkey: n.publicKey,
            lamports: l > 0 ? l : 1,
            space: i.length,
            programId: r,
          })
        );
      f !== null && (await rn(e, f, [t, n], { commitment: 'confirmed' }));
    }
    const o = I([
        R('instruction'),
        R('offset'),
        R('bytesLength'),
        R('bytesLengthPadding'),
        be(G('byte'), yt(R(), -8), 'bytes'),
      ]),
      a = pt.chunkSize;
    let c = 0,
      d = i,
      u = [];
    for (; d.length > 0; ) {
      const l = d.slice(0, a),
        g = B.alloc(a + 16);
      o.encode({ instruction: 0, offset: c, bytes: l, bytesLength: 0, bytesLengthPadding: 0 }, g);
      const f = new V().add({
        keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }],
        programId: r,
        data: g,
      });
      u.push(rn(e, f, [t, n], { commitment: 'confirmed' })),
        e._rpcEndpoint.includes('solana.com') && (await ft(1e3 / 4)),
        (c += a),
        (d = d.slice(a));
    }
    await Promise.all(u);
    {
      const l = I([R('instruction')]),
        g = B.alloc(l.span);
      l.encode({ instruction: 1 }, g);
      const f = new V().add({
        keys: [
          { pubkey: n.publicKey, isSigner: !0, isWritable: !0 },
          { pubkey: vt, isSigner: !1, isWritable: !1 },
        ],
        programId: r,
        data: g,
      });
      await rn(e, f, [t, n], { commitment: 'confirmed' });
    }
    return !0;
  }
}
pt.chunkSize = Vo;
const jo = new w('BPFLoader2111111111111111111111111111111111');
class Xo {
  static getMinNumSignatures(e) {
    return pt.getMinNumSignatures(e);
  }
  static load(e, t, n, r, i) {
    return pt.load(e, t, n, i, r);
  }
}
var Jo = Object.prototype.toString,
  Yo =
    Object.keys ||
    function (s) {
      var e = [];
      for (var t in s) e.push(t);
      return e;
    };
function Dt(s, e) {
  var t, n, r, i, o, a, c;
  if (s === !0) return 'true';
  if (s === !1) return 'false';
  switch (typeof s) {
    case 'object':
      if (s === null) return null;
      if (s.toJSON && typeof s.toJSON == 'function') return Dt(s.toJSON(), e);
      if (((c = Jo.call(s)), c === '[object Array]')) {
        for (r = '[', n = s.length - 1, t = 0; t < n; t++) r += Dt(s[t], !0) + ',';
        return n > -1 && (r += Dt(s[t], !0)), r + ']';
      } else if (c === '[object Object]') {
        for (i = Yo(s).sort(), n = i.length, r = '', t = 0; t < n; )
          (o = i[t]),
            (a = Dt(s[o], !1)),
            a !== void 0 && (r && (r += ','), (r += JSON.stringify(o) + ':' + a)),
            t++;
        return '{' + r + '}';
      } else return JSON.stringify(s);
    case 'function':
    case 'undefined':
      return e ? null : void 0;
    case 'string':
      return JSON.stringify(s);
    default:
      return isFinite(s) ? s : null;
  }
}
var Zo = function (s) {
    var e = Dt(s, !1);
    if (e !== void 0) return '' + e;
  },
  Qo = Zo;
const Ut = 32;
function Nn(s) {
  let e = 0;
  for (; s > 1; ) (s /= 2), e++;
  return e;
}
function ea(s) {
  return s === 0
    ? 1
    : (s--,
      (s |= s >> 1),
      (s |= s >> 2),
      (s |= s >> 4),
      (s |= s >> 8),
      (s |= s >> 16),
      (s |= s >> 32),
      s + 1);
}
class Pr {
  constructor(e, t, n, r, i) {
    (this.slotsPerEpoch = void 0),
      (this.leaderScheduleSlotOffset = void 0),
      (this.warmup = void 0),
      (this.firstNormalEpoch = void 0),
      (this.firstNormalSlot = void 0),
      (this.slotsPerEpoch = e),
      (this.leaderScheduleSlotOffset = t),
      (this.warmup = n),
      (this.firstNormalEpoch = r),
      (this.firstNormalSlot = i);
  }
  getEpoch(e) {
    return this.getEpochAndSlotIndex(e)[0];
  }
  getEpochAndSlotIndex(e) {
    if (e < this.firstNormalSlot) {
      const t = Nn(ea(e + Ut + 1)) - Nn(Ut) - 1,
        n = this.getSlotsInEpoch(t),
        r = e - (n - Ut);
      return [t, r];
    } else {
      const t = e - this.firstNormalSlot,
        n = Math.floor(t / this.slotsPerEpoch),
        r = this.firstNormalEpoch + n,
        i = t % this.slotsPerEpoch;
      return [r, i];
    }
  }
  getFirstSlotInEpoch(e) {
    return e <= this.firstNormalEpoch
      ? (Math.pow(2, e) - 1) * Ut
      : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(e) {
    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
  }
  getSlotsInEpoch(e) {
    return e < this.firstNormalEpoch ? Math.pow(2, e + Nn(Ut)) : this.slotsPerEpoch;
  }
}
class qn extends Error {
  constructor(e, t) {
    super(e), (this.logs = void 0), (this.logs = t);
  }
}
const ta = {
  JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
  JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
  JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
  JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
  JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
  JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
  JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
  JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
  JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
  JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
  JSON_RPC_SCAN_ERROR: -32012,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
  JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
  JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
  JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
};
class E extends Error {
  constructor({ code: e, message: t, data: n }, r) {
    super(r != null ? `${r}: ${t}` : t),
      (this.code = void 0),
      (this.data = void 0),
      (this.code = e),
      (this.data = n),
      (this.name = 'SolanaJSONRPCError');
  }
}
var na = globalThis.fetch;
class sa extends ei {
  constructor(e, t, n) {
    const r = (i) => {
      const o = ii(i, {
        autoconnect: !0,
        max_reconnects: 5,
        reconnect: !0,
        reconnect_interval: 1e3,
        ...t,
      });
      return 'socket' in o ? (this.underlyingSocket = o.socket) : (this.underlyingSocket = o), o;
    };
    super(r, e, t, n), (this.underlyingSocket = void 0);
  }
  call(...e) {
    var n;
    const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return t === 1
      ? super.call(...e)
      : Promise.reject(
          new Error(
            'Tried to call a JSON-RPC method `' +
              e[0] +
              '` but the socket was not `CONNECTING` or `OPEN` (`readyState` was ' +
              t +
              ')'
          )
        );
  }
  notify(...e) {
    var n;
    const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return t === 1
      ? super.notify(...e)
      : Promise.reject(
          new Error(
            'Tried to send a JSON-RPC notification `' +
              e[0] +
              '` but the socket was not `CONNECTING` or `OPEN` (`readyState` was ' +
              t +
              ')'
          )
        );
  }
}
const ra = 160,
  ia = 64,
  oa = ra / ia,
  aa = 1e3 / oa;
function ca(s, e) {
  let t;
  try {
    t = s.layout.decode(e);
  } catch (n) {
    throw new Error('invalid instruction; ' + n);
  }
  if (t.typeIndex !== s.index)
    throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${s.index}`);
  return t;
}
const Cs = 56;
class Vn {
  constructor(e) {
    (this.key = void 0), (this.state = void 0), (this.key = e.key), (this.state = e.state);
  }
  isActive() {
    const e = BigInt('0xffffffffffffffff');
    return this.state.deactivationSlot === e;
  }
  static deserialize(e) {
    const t = ca(ua, e),
      n = e.length - Cs;
    $(n >= 0, 'lookup table is invalid'), $(n % 32 === 0, 'lookup table is invalid');
    const r = n / 32,
      { addresses: i } = I([be(M(), r, 'addresses')]).decode(e.slice(Cs));
    return {
      deactivationSlot: t.deactivationSlot,
      lastExtendedSlot: t.lastExtendedSlot,
      lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
      authority: t.authority.length !== 0 ? new w(t.authority[0]) : void 0,
      addresses: i.map((o) => new w(o)),
    };
  }
}
const ua = {
    index: 1,
    layout: I([
      R('typeIndex'),
      xt('deactivationSlot'),
      ye('lastExtendedSlot'),
      G('lastExtendedStartIndex'),
      G(),
      be(M(), yt(G(), -1), 'authority'),
    ]),
  },
  la = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function da(s) {
  const e = s.match(la);
  if (e == null) throw TypeError(`Failed to validate endpoint URL \`${s}\``);
  const [t, n, r, i] = e,
    o = s.startsWith('https:') ? 'wss:' : 'ws:',
    a = r == null ? null : parseInt(r.slice(1), 10),
    c = a == null ? '' : `:${a + 1}`;
  return `${o}//${n}${c}${i}`;
}
const ae = Vt(Zn(w), m(), (s) => new w(s)),
  vr = Yn([m(), re('base64')]),
  ds = Vt(Zn(B), vr, (s) => B.from(s[0], 'base64')),
  xr = 30 * 1e3;
function ha(s) {
  if (/^https?:/.test(s) === !1)
    throw new TypeError('Endpoint URL must start with `http:` or `https:`.');
  return s;
}
function se(s) {
  let e, t;
  if (typeof s == 'string') e = s;
  else if (s) {
    const { commitment: n, ...r } = s;
    (e = n), (t = r);
  }
  return { commitment: e, config: t };
}
function Tr(s) {
  return Ie([
    p({ jsonrpc: re('2.0'), id: m(), result: s }),
    p({ jsonrpc: re('2.0'), id: m(), error: p({ code: jt(), message: m(), data: L(Yr()) }) }),
  ]);
}
const fa = Tr(jt());
function z(s) {
  return Vt(Tr(s), fa, (e) => ('error' in e ? e : { ...e, result: S(e.result, s) }));
}
function oe(s) {
  return z(p({ context: p({ slot: h() }), value: s }));
}
function bn(s) {
  return p({ context: p({ slot: h() }), value: s });
}
function Ln(s, e) {
  return s === 0
    ? new bt({
        header: e.header,
        staticAccountKeys: e.accountKeys.map((t) => new w(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map((t) => ({
          programIdIndex: t.programIdIndex,
          accountKeyIndexes: t.accounts,
          data: fe.decode(t.data),
        })),
        addressTableLookups: e.addressTableLookups,
      })
    : new De(e);
}
const ga = p({ foundation: h(), foundationTerm: h(), initial: h(), taper: h(), terminal: h() }),
  ya = z(
    _(
      A(p({ epoch: h(), effectiveSlot: h(), amount: h(), postBalance: h(), commission: L(A(h())) }))
    )
  ),
  ba = p({ total: h(), validator: h(), foundation: h(), epoch: h() }),
  pa = p({
    epoch: h(),
    slotIndex: h(),
    slotsInEpoch: h(),
    absoluteSlot: h(),
    blockHeight: L(h()),
    transactionCount: L(h()),
  }),
  ma = p({
    slotsPerEpoch: h(),
    leaderScheduleSlotOffset: h(),
    warmup: et(),
    firstNormalEpoch: h(),
    firstNormalSlot: h(),
  }),
  wa = Ys(m(), _(h())),
  wt = A(Ie([p({}), m()])),
  ka = p({ err: wt }),
  Sa = re('receivedSignature'),
  Aa = p({ 'solana-core': m(), 'feature-set': L(h()) }),
  Us = oe(
    p({
      err: A(Ie([p({}), m()])),
      logs: A(_(m())),
      accounts: L(
        A(_(A(p({ executable: et(), owner: m(), lamports: h(), data: _(m()), rentEpoch: L(h()) }))))
      ),
      unitsConsumed: L(h()),
      returnData: L(A(p({ programId: m(), data: Yn([m(), re('base64')]) }))),
    })
  ),
  _a = oe(p({ byIdentity: Ys(m(), _(h())), range: p({ firstSlot: h(), lastSlot: h() }) }));
function Ia(s, e, t, n, r, i) {
  const o = t || na;
  let a;
  i != null &&
    console.warn(
      'You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.'
    );
  let c;
  return (
    n &&
      (c = async (u, l) => {
        const g = await new Promise((f, b) => {
          try {
            n(u, l, (y, k) => f([y, k]));
          } catch (y) {
            b(y);
          }
        });
        return await o(...g);
      }),
    new ti(async (u, l) => {
      const g = {
        method: 'POST',
        body: u,
        agent: a,
        headers: Object.assign({ 'Content-Type': 'application/json' }, e || {}, _c),
      };
      try {
        let f = 5,
          b,
          y = 500;
        for (
          ;
          c ? (b = await c(s, g)) : (b = await o(s, g)),
            !(b.status !== 429 || r === !0 || ((f -= 1), f === 0));

        )
          console.log(
            `Server responded with ${b.status} ${b.statusText}.  Retrying after ${y}ms delay...`
          ),
            await ft(y),
            (y *= 2);
        const k = await b.text();
        b.ok ? l(null, k) : l(new Error(`${b.status} ${b.statusText}: ${k}`));
      } catch (f) {
        f instanceof Error && l(f);
      }
    }, {})
  );
}
function Ra(s) {
  return (e, t) =>
    new Promise((n, r) => {
      s.request(e, t, (i, o) => {
        if (i) {
          r(i);
          return;
        }
        n(o);
      });
    });
}
function Ea(s) {
  return (e) =>
    new Promise((t, n) => {
      e.length === 0 && t([]);
      const r = e.map((i) => s.request(i.methodName, i.args));
      s.request(r, (i, o) => {
        if (i) {
          n(i);
          return;
        }
        t(o);
      });
    });
}
const Pa = z(ga),
  va = z(ba),
  xa = z(pa),
  Ta = z(ma),
  Ba = z(wa),
  Na = z(h()),
  La = oe(p({ total: h(), circulating: h(), nonCirculating: h(), nonCirculatingAccounts: _(ae) })),
  jn = p({ amount: m(), uiAmount: A(h()), decimals: h(), uiAmountString: L(m()) }),
  Oa = oe(
    _(p({ address: ae, amount: m(), uiAmount: A(h()), decimals: h(), uiAmountString: L(m()) }))
  ),
  Ca = oe(
    _(
      p({
        pubkey: ae,
        account: p({ executable: et(), owner: ae, lamports: h(), data: ds, rentEpoch: h() }),
      })
    )
  ),
  Xn = p({ program: m(), parsed: jt(), space: h() }),
  Ua = oe(
    _(
      p({
        pubkey: ae,
        account: p({ executable: et(), owner: ae, lamports: h(), data: Xn, rentEpoch: h() }),
      })
    )
  ),
  Ka = oe(_(p({ lamports: h(), address: ae }))),
  Gt = p({ executable: et(), owner: ae, lamports: h(), data: ds, rentEpoch: h() }),
  Da = p({ pubkey: ae, account: Gt }),
  za = Vt(Ie([Zn(B), Xn]), Ie([vr, Xn]), (s) => (Array.isArray(s) ? S(s, ds) : s)),
  Jn = p({ executable: et(), owner: ae, lamports: h(), data: za, rentEpoch: h() }),
  Wa = p({ pubkey: ae, account: Jn }),
  Ma = p({
    state: Ie([re('active'), re('inactive'), re('activating'), re('deactivating')]),
    active: h(),
    inactive: h(),
  }),
  Ha = z(_(p({ signature: m(), slot: h(), err: wt, memo: A(m()), blockTime: L(A(h())) }))),
  Fa = z(_(p({ signature: m(), slot: h(), err: wt, memo: A(m()), blockTime: L(A(h())) }))),
  $a = p({ subscription: h(), result: bn(Gt) }),
  Ga = p({ pubkey: ae, account: Gt }),
  qa = p({ subscription: h(), result: bn(Ga) }),
  Va = p({ parent: h(), slot: h(), root: h() }),
  ja = p({ subscription: h(), result: Va }),
  Xa = Ie([
    p({
      type: Ie([
        re('firstShredReceived'),
        re('completed'),
        re('optimisticConfirmation'),
        re('root'),
      ]),
      slot: h(),
      timestamp: h(),
    }),
    p({ type: re('createdBank'), parent: h(), slot: h(), timestamp: h() }),
    p({
      type: re('frozen'),
      slot: h(),
      timestamp: h(),
      stats: p({
        numTransactionEntries: h(),
        numSuccessfulTransactions: h(),
        numFailedTransactions: h(),
        maxTransactionsPerEntry: h(),
      }),
    }),
    p({ type: re('dead'), slot: h(), timestamp: h(), err: m() }),
  ]),
  Ja = p({ subscription: h(), result: Xa }),
  Ya = p({ subscription: h(), result: bn(Ie([ka, Sa])) }),
  Za = p({ subscription: h(), result: h() }),
  Qa = p({ pubkey: m(), gossip: A(m()), tpu: A(m()), rpc: A(m()), version: A(m()) }),
  Ks = p({
    votePubkey: m(),
    nodePubkey: m(),
    activatedStake: h(),
    epochVoteAccount: et(),
    epochCredits: _(Yn([h(), h(), h()])),
    commission: h(),
    lastVote: h(),
    rootSlot: A(h()),
  }),
  ec = z(p({ current: _(Ks), delinquent: _(Ks) })),
  tc = Ie([re('processed'), re('confirmed'), re('finalized')]),
  nc = p({ slot: h(), confirmations: A(h()), err: wt, confirmationStatus: L(tc) }),
  sc = oe(_(A(nc))),
  rc = z(h()),
  Br = p({ accountKey: ae, writableIndexes: _(h()), readonlyIndexes: _(h()) }),
  hs = p({
    signatures: _(m()),
    message: p({
      accountKeys: _(m()),
      header: p({
        numRequiredSignatures: h(),
        numReadonlySignedAccounts: h(),
        numReadonlyUnsignedAccounts: h(),
      }),
      instructions: _(p({ accounts: _(h()), data: m(), programIdIndex: h() })),
      recentBlockhash: m(),
      addressTableLookups: L(_(Br)),
    }),
  }),
  Nr = p({
    pubkey: ae,
    signer: et(),
    writable: et(),
    source: L(Ie([re('transaction'), re('lookupTable')])),
  }),
  Lr = p({ accountKeys: _(Nr), signatures: _(m()) }),
  Or = p({ parsed: jt(), program: m(), programId: ae }),
  Cr = p({ accounts: _(ae), data: m(), programId: ae }),
  ic = Ie([Cr, Or]),
  oc = Ie([
    p({ parsed: jt(), program: m(), programId: m() }),
    p({ accounts: _(m()), data: m(), programId: m() }),
  ]),
  Ur = Vt(ic, oc, (s) => ('accounts' in s ? S(s, Cr) : S(s, Or))),
  Kr = p({
    signatures: _(m()),
    message: p({
      accountKeys: _(Nr),
      instructions: _(Ur),
      recentBlockhash: m(),
      addressTableLookups: L(A(_(Br))),
    }),
  }),
  un = p({ accountIndex: h(), mint: m(), owner: L(m()), uiTokenAmount: jn }),
  Dr = p({ writable: _(ae), readonly: _(ae) }),
  pn = p({
    err: wt,
    fee: h(),
    innerInstructions: L(
      A(
        _(
          p({
            index: h(),
            instructions: _(p({ accounts: _(h()), data: m(), programIdIndex: h() })),
          })
        )
      )
    ),
    preBalances: _(h()),
    postBalances: _(h()),
    logMessages: L(A(_(m()))),
    preTokenBalances: L(A(_(un))),
    postTokenBalances: L(A(_(un))),
    loadedAddresses: L(Dr),
    computeUnitsConsumed: L(h()),
  }),
  fs = p({
    err: wt,
    fee: h(),
    innerInstructions: L(A(_(p({ index: h(), instructions: _(Ur) })))),
    preBalances: _(h()),
    postBalances: _(h()),
    logMessages: L(A(_(m()))),
    preTokenBalances: L(A(_(un))),
    postTokenBalances: L(A(_(un))),
    loadedAddresses: L(Dr),
    computeUnitsConsumed: L(h()),
  }),
  Tt = Ie([re(0), re('legacy')]),
  kt = p({
    pubkey: m(),
    lamports: h(),
    postBalance: A(h()),
    rewardType: A(m()),
    commission: L(A(h())),
  }),
  ac = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        transactions: _(p({ transaction: hs, meta: A(pn), version: L(Tt) })),
        rewards: L(_(kt)),
        blockTime: A(h()),
        blockHeight: A(h()),
      })
    )
  ),
  cc = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        rewards: L(_(kt)),
        blockTime: A(h()),
        blockHeight: A(h()),
      })
    )
  ),
  uc = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        transactions: _(p({ transaction: Lr, meta: A(pn), version: L(Tt) })),
        rewards: L(_(kt)),
        blockTime: A(h()),
        blockHeight: A(h()),
      })
    )
  ),
  lc = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        transactions: _(p({ transaction: Kr, meta: A(fs), version: L(Tt) })),
        rewards: L(_(kt)),
        blockTime: A(h()),
        blockHeight: A(h()),
      })
    )
  ),
  dc = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        transactions: _(p({ transaction: Lr, meta: A(fs), version: L(Tt) })),
        rewards: L(_(kt)),
        blockTime: A(h()),
        blockHeight: A(h()),
      })
    )
  ),
  hc = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        rewards: L(_(kt)),
        blockTime: A(h()),
        blockHeight: A(h()),
      })
    )
  ),
  fc = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        transactions: _(p({ transaction: hs, meta: A(pn) })),
        rewards: L(_(kt)),
        blockTime: A(h()),
      })
    )
  ),
  Ds = z(
    A(
      p({
        blockhash: m(),
        previousBlockhash: m(),
        parentSlot: h(),
        signatures: _(m()),
        blockTime: A(h()),
      })
    )
  ),
  On = z(A(p({ slot: h(), meta: pn, blockTime: L(A(h())), transaction: hs, version: L(Tt) }))),
  en = z(A(p({ slot: h(), transaction: Kr, meta: A(fs), blockTime: L(A(h())), version: L(Tt) }))),
  gc = oe(p({ blockhash: m(), feeCalculator: p({ lamportsPerSignature: h() }) })),
  yc = oe(p({ blockhash: m(), lastValidBlockHeight: h() })),
  bc = p({ slot: h(), numTransactions: h(), numSlots: h(), samplePeriodSecs: h() }),
  pc = z(_(bc)),
  mc = oe(A(p({ feeCalculator: p({ lamportsPerSignature: h() }) }))),
  wc = z(m()),
  kc = z(m()),
  Sc = p({ err: wt, logs: _(m()), signature: m() }),
  Ac = p({ result: bn(Sc), subscription: h() }),
  _c = { 'solana-client': 'js/1.73.5' };
class Ic {
  constructor(e, t) {
    (this._commitment = void 0),
      (this._confirmTransactionInitialTimeout = void 0),
      (this._rpcEndpoint = void 0),
      (this._rpcWsEndpoint = void 0),
      (this._rpcClient = void 0),
      (this._rpcRequest = void 0),
      (this._rpcBatchRequest = void 0),
      (this._rpcWebSocket = void 0),
      (this._rpcWebSocketConnected = !1),
      (this._rpcWebSocketHeartbeat = null),
      (this._rpcWebSocketIdleTimeout = null),
      (this._rpcWebSocketGeneration = 0),
      (this._disableBlockhashCaching = !1),
      (this._pollingBlockhash = !1),
      (this._blockhashInfo = {
        latestBlockhash: null,
        lastFetch: 0,
        transactionSignatures: [],
        simulatedSignatures: [],
      }),
      (this._nextClientSubscriptionId = 0),
      (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
      (this._subscriptionHashByClientSubscriptionId = {}),
      (this._subscriptionStateChangeCallbacksByHash = {}),
      (this._subscriptionCallbacksByServerSubscriptionId = {}),
      (this._subscriptionsByHash = {}),
      (this._subscriptionsAutoDisposedByRpc = new Set());
    let n, r, i, o, a, c;
    t && typeof t == 'string'
      ? (this._commitment = t)
      : t &&
        ((this._commitment = t.commitment),
        (this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout),
        (n = t.wsEndpoint),
        (r = t.httpHeaders),
        (i = t.fetch),
        (o = t.fetchMiddleware),
        (a = t.disableRetryOnRateLimit),
        (c = t.httpAgent)),
      (this._rpcEndpoint = ha(e)),
      (this._rpcWsEndpoint = n || da(e)),
      (this._rpcClient = Ia(e, r, i, o, a, c)),
      (this._rpcRequest = Ra(this._rpcClient)),
      (this._rpcBatchRequest = Ea(this._rpcClient)),
      (this._rpcWebSocket = new sa(this._rpcWsEndpoint, {
        autoconnect: !1,
        max_reconnects: 1 / 0,
      })),
      this._rpcWebSocket.on('open', this._wsOnOpen.bind(this)),
      this._rpcWebSocket.on('error', this._wsOnError.bind(this)),
      this._rpcWebSocket.on('close', this._wsOnClose.bind(this)),
      this._rpcWebSocket.on('accountNotification', this._wsOnAccountNotification.bind(this)),
      this._rpcWebSocket.on('programNotification', this._wsOnProgramAccountNotification.bind(this)),
      this._rpcWebSocket.on('slotNotification', this._wsOnSlotNotification.bind(this)),
      this._rpcWebSocket.on(
        'slotsUpdatesNotification',
        this._wsOnSlotUpdatesNotification.bind(this)
      ),
      this._rpcWebSocket.on('signatureNotification', this._wsOnSignatureNotification.bind(this)),
      this._rpcWebSocket.on('rootNotification', this._wsOnRootNotification.bind(this)),
      this._rpcWebSocket.on('logsNotification', this._wsOnLogsNotification.bind(this));
  }
  get commitment() {
    return this._commitment;
  }
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  async getBalanceAndContext(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgs([e.toBase58()], n, void 0, r),
      o = await this._rpcRequest('getBalance', i),
      a = S(o, oe(h()));
    if ('error' in a) throw new E(a.error, `failed to get balance for ${e.toBase58()}`);
    return a.result;
  }
  async getBalance(e, t) {
    return await this.getBalanceAndContext(e, t)
      .then((n) => n.value)
      .catch((n) => {
        throw new Error('failed to get balance of account ' + e.toBase58() + ': ' + n);
      });
  }
  async getBlockTime(e) {
    const t = await this._rpcRequest('getBlockTime', [e]),
      n = S(t, z(A(h())));
    if ('error' in n) throw new E(n.error, `failed to get block time for slot ${e}`);
    return n.result;
  }
  async getMinimumLedgerSlot() {
    const e = await this._rpcRequest('minimumLedgerSlot', []),
      t = S(e, z(h()));
    if ('error' in t) throw new E(t.error, 'failed to get minimum ledger slot');
    return t.result;
  }
  async getFirstAvailableBlock() {
    const e = await this._rpcRequest('getFirstAvailableBlock', []),
      t = S(e, Na);
    if ('error' in t) throw new E(t.error, 'failed to get first available block');
    return t.result;
  }
  async getSupply(e) {
    let t = {};
    typeof e == 'string'
      ? (t = { commitment: e })
      : e
        ? (t = { ...e, commitment: (e && e.commitment) || this.commitment })
        : (t = { commitment: this.commitment });
    const n = await this._rpcRequest('getSupply', [t]),
      r = S(n, La);
    if ('error' in r) throw new E(r.error, 'failed to get supply');
    return r.result;
  }
  async getTokenSupply(e, t) {
    const n = this._buildArgs([e.toBase58()], t),
      r = await this._rpcRequest('getTokenSupply', n),
      i = S(r, oe(jn));
    if ('error' in i) throw new E(i.error, 'failed to get token supply');
    return i.result;
  }
  async getTokenAccountBalance(e, t) {
    const n = this._buildArgs([e.toBase58()], t),
      r = await this._rpcRequest('getTokenAccountBalance', n),
      i = S(r, oe(jn));
    if ('error' in i) throw new E(i.error, 'failed to get token account balance');
    return i.result;
  }
  async getTokenAccountsByOwner(e, t, n) {
    const { commitment: r, config: i } = se(n);
    let o = [e.toBase58()];
    'mint' in t
      ? o.push({ mint: t.mint.toBase58() })
      : o.push({ programId: t.programId.toBase58() });
    const a = this._buildArgs(o, r, 'base64', i),
      c = await this._rpcRequest('getTokenAccountsByOwner', a),
      d = S(c, Ca);
    if ('error' in d)
      throw new E(d.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return d.result;
  }
  async getParsedTokenAccountsByOwner(e, t, n) {
    let r = [e.toBase58()];
    'mint' in t
      ? r.push({ mint: t.mint.toBase58() })
      : r.push({ programId: t.programId.toBase58() });
    const i = this._buildArgs(r, n, 'jsonParsed'),
      o = await this._rpcRequest('getTokenAccountsByOwner', i),
      a = S(o, Ua);
    if ('error' in a)
      throw new E(a.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return a.result;
  }
  async getLargestAccounts(e) {
    const t = { ...e, commitment: (e && e.commitment) || this.commitment },
      n = t.filter || t.commitment ? [t] : [],
      r = await this._rpcRequest('getLargestAccounts', n),
      i = S(r, Ka);
    if ('error' in i) throw new E(i.error, 'failed to get largest accounts');
    return i.result;
  }
  async getTokenLargestAccounts(e, t) {
    const n = this._buildArgs([e.toBase58()], t),
      r = await this._rpcRequest('getTokenLargestAccounts', n),
      i = S(r, Oa);
    if ('error' in i) throw new E(i.error, 'failed to get token largest accounts');
    return i.result;
  }
  async getAccountInfoAndContext(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgs([e.toBase58()], n, 'base64', r),
      o = await this._rpcRequest('getAccountInfo', i),
      a = S(o, oe(A(Gt)));
    if ('error' in a) throw new E(a.error, `failed to get info about account ${e.toBase58()}`);
    return a.result;
  }
  async getParsedAccountInfo(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgs([e.toBase58()], n, 'jsonParsed', r),
      o = await this._rpcRequest('getAccountInfo', i),
      a = S(o, oe(A(Jn)));
    if ('error' in a) throw new E(a.error, `failed to get info about account ${e.toBase58()}`);
    return a.result;
  }
  async getAccountInfo(e, t) {
    try {
      return (await this.getAccountInfoAndContext(e, t)).value;
    } catch (n) {
      throw new Error('failed to get info about account ' + e.toBase58() + ': ' + n);
    }
  }
  async getMultipleParsedAccounts(e, t) {
    const { commitment: n, config: r } = se(t),
      i = e.map((d) => d.toBase58()),
      o = this._buildArgs([i], n, 'jsonParsed', r),
      a = await this._rpcRequest('getMultipleAccounts', o),
      c = S(a, oe(_(A(Jn))));
    if ('error' in c) throw new E(c.error, `failed to get info for accounts ${i}`);
    return c.result;
  }
  async getMultipleAccountsInfoAndContext(e, t) {
    const { commitment: n, config: r } = se(t),
      i = e.map((d) => d.toBase58()),
      o = this._buildArgs([i], n, 'base64', r),
      a = await this._rpcRequest('getMultipleAccounts', o),
      c = S(a, oe(_(A(Gt))));
    if ('error' in c) throw new E(c.error, `failed to get info for accounts ${i}`);
    return c.result;
  }
  async getMultipleAccountsInfo(e, t) {
    return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
  }
  async getStakeActivation(e, t, n) {
    const { commitment: r, config: i } = se(t),
      o = this._buildArgs([e.toBase58()], r, void 0, {
        ...i,
        epoch: n ?? (i == null ? void 0 : i.epoch),
      }),
      a = await this._rpcRequest('getStakeActivation', o),
      c = S(a, z(Ma));
    if ('error' in c) throw new E(c.error, `failed to get Stake Activation ${e.toBase58()}`);
    return c.result;
  }
  async getProgramAccounts(e, t) {
    const { commitment: n, config: r } = se(t),
      { encoding: i, ...o } = r || {},
      a = this._buildArgs([e.toBase58()], n, i || 'base64', o),
      c = await this._rpcRequest('getProgramAccounts', a),
      d = S(c, z(_(Da)));
    if ('error' in d)
      throw new E(d.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return d.result;
  }
  async getParsedProgramAccounts(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgs([e.toBase58()], n, 'jsonParsed', r),
      o = await this._rpcRequest('getProgramAccounts', i),
      a = S(o, z(_(Wa)));
    if ('error' in a)
      throw new E(a.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return a.result;
  }
  async confirmTransaction(e, t) {
    var i;
    let n;
    if (typeof e == 'string') n = e;
    else {
      const o = e;
      if ((i = o.abortSignal) != null && i.aborted) return Promise.reject(o.abortSignal.reason);
      n = o.signature;
    }
    let r;
    try {
      r = fe.decode(n);
    } catch {
      throw new Error('signature must be base58 encoded: ' + n);
    }
    return (
      $(r.length === 64, 'signature has invalid length'),
      typeof e == 'string'
        ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: t || this.commitment,
            signature: n,
          })
        : 'lastValidBlockHeight' in e
          ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
              commitment: t || this.commitment,
              strategy: e,
            })
          : await this.confirmTransactionUsingDurableNonceStrategy({
              commitment: t || this.commitment,
              strategy: e,
            })
    );
  }
  getCancellationPromise(e) {
    return new Promise((t, n) => {
      e != null &&
        (e.aborted
          ? n(e.reason)
          : e.addEventListener('abort', () => {
              n(e.reason);
            }));
    });
  }
  getTransactionConfirmationPromise({ commitment: e, signature: t }) {
    let n,
      r,
      i = !1;
    const o = new Promise((c, d) => {
      try {
        n = this.onSignature(
          t,
          (l, g) => {
            n = void 0;
            const f = { context: g, value: l };
            c({ __type: Ce.PROCESSED, response: f });
          },
          e
        );
        const u = new Promise((l) => {
          n == null
            ? l()
            : (r = this._onSubscriptionStateChange(n, (g) => {
                g === 'subscribed' && l();
              }));
        });
        (async () => {
          if ((await u, i)) return;
          const l = await this.getSignatureStatus(t);
          if (i || l == null) return;
          const { context: g, value: f } = l;
          if (f != null)
            if (f != null && f.err) d(f.err);
            else {
              switch (e) {
                case 'confirmed':
                case 'single':
                case 'singleGossip': {
                  if (f.confirmationStatus === 'processed') return;
                  break;
                }
                case 'finalized':
                case 'max':
                case 'root': {
                  if (f.confirmationStatus === 'processed' || f.confirmationStatus === 'confirmed')
                    return;
                  break;
                }
                case 'processed':
                case 'recent':
              }
              (i = !0), c({ __type: Ce.PROCESSED, response: { context: g, value: f } });
            }
        })();
      } catch (u) {
        d(u);
      }
    });
    return {
      abortConfirmation: () => {
        r && (r(), (r = void 0)), n != null && (this.removeSignatureListener(n), (n = void 0));
      },
      confirmationPromise: o,
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment: e,
    strategy: { abortSignal: t, lastValidBlockHeight: n, signature: r },
  }) {
    let i = !1;
    const o = new Promise((l) => {
        const g = async () => {
          try {
            return await this.getBlockHeight(e);
          } catch {
            return -1;
          }
        };
        (async () => {
          let f = await g();
          if (!i) {
            for (; f <= n; ) if ((await ft(1e3), i || ((f = await g()), i))) return;
            l({ __type: Ce.BLOCKHEIGHT_EXCEEDED });
          }
        })();
      }),
      { abortConfirmation: a, confirmationPromise: c } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: r,
      }),
      d = this.getCancellationPromise(t);
    let u;
    try {
      const l = await Promise.race([d, c, o]);
      if (l.__type === Ce.PROCESSED) u = l.response;
      else throw new os(r);
    } finally {
      (i = !0), a();
    }
    return u;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment: e,
    strategy: {
      abortSignal: t,
      minContextSlot: n,
      nonceAccountPubkey: r,
      nonceValue: i,
      signature: o,
    },
  }) {
    let a = !1;
    const c = new Promise((f) => {
        let b = i,
          y = null;
        const k = async () => {
          try {
            const { context: v, value: W } = await this.getNonceAndContext(r, {
              commitment: e,
              minContextSlot: n,
            });
            return (y = v.slot), W == null ? void 0 : W.nonce;
          } catch {
            return b;
          }
        };
        (async () => {
          if (((b = await k()), !a))
            for (;;) {
              if (i !== b) {
                f({ __type: Ce.NONCE_INVALID, slotInWhichNonceDidAdvance: y });
                return;
              }
              if ((await ft(2e3), a || ((b = await k()), a))) return;
            }
        })();
      }),
      { abortConfirmation: d, confirmationPromise: u } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: o,
      }),
      l = this.getCancellationPromise(t);
    let g;
    try {
      const f = await Promise.race([l, u, c]);
      if (f.__type === Ce.PROCESSED) g = f.response;
      else {
        let b;
        for (;;) {
          const y = await this.getSignatureStatus(o);
          if (y == null) break;
          if (y.context.slot < (f.slotInWhichNonceDidAdvance ?? n)) {
            await ft(400);
            continue;
          }
          b = y;
          break;
        }
        if (b != null && b.value) {
          const y = e || 'finalized',
            { confirmationStatus: k } = b.value;
          switch (y) {
            case 'processed':
            case 'recent':
              if (k !== 'processed' && k !== 'confirmed' && k !== 'finalized') throw new It(o);
              break;
            case 'confirmed':
            case 'single':
            case 'singleGossip':
              if (k !== 'confirmed' && k !== 'finalized') throw new It(o);
              break;
            case 'finalized':
            case 'max':
            case 'root':
              if (k !== 'finalized') throw new It(o);
              break;
            default:
          }
          g = { context: b.context, value: { err: b.value.err } };
        } else throw new It(o);
      }
    } finally {
      (a = !0), d();
    }
    return g;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({ commitment: e, signature: t }) {
    let n;
    const r = new Promise((c) => {
        let d = this._confirmTransactionInitialTimeout || 6e4;
        switch (e) {
          case 'processed':
          case 'recent':
          case 'single':
          case 'confirmed':
          case 'singleGossip': {
            d = this._confirmTransactionInitialTimeout || 3e4;
            break;
          }
        }
        n = setTimeout(() => c({ __type: Ce.TIMED_OUT, timeoutMs: d }), d);
      }),
      { abortConfirmation: i, confirmationPromise: o } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: t,
      });
    let a;
    try {
      const c = await Promise.race([o, r]);
      if (c.__type === Ce.PROCESSED) a = c.response;
      else throw new as(t, c.timeoutMs / 1e3);
    } finally {
      clearTimeout(n), i();
    }
    return a;
  }
  async getClusterNodes() {
    const e = await this._rpcRequest('getClusterNodes', []),
      t = S(e, z(_(Qa)));
    if ('error' in t) throw new E(t.error, 'failed to get cluster nodes');
    return t.result;
  }
  async getVoteAccounts(e) {
    const t = this._buildArgs([], e),
      n = await this._rpcRequest('getVoteAccounts', t),
      r = S(n, ec);
    if ('error' in r) throw new E(r.error, 'failed to get vote accounts');
    return r.result;
  }
  async getSlot(e) {
    const { commitment: t, config: n } = se(e),
      r = this._buildArgs([], t, void 0, n),
      i = await this._rpcRequest('getSlot', r),
      o = S(i, z(h()));
    if ('error' in o) throw new E(o.error, 'failed to get slot');
    return o.result;
  }
  async getSlotLeader(e) {
    const { commitment: t, config: n } = se(e),
      r = this._buildArgs([], t, void 0, n),
      i = await this._rpcRequest('getSlotLeader', r),
      o = S(i, z(m()));
    if ('error' in o) throw new E(o.error, 'failed to get slot leader');
    return o.result;
  }
  async getSlotLeaders(e, t) {
    const n = [e, t],
      r = await this._rpcRequest('getSlotLeaders', n),
      i = S(r, z(_(ae)));
    if ('error' in i) throw new E(i.error, 'failed to get slot leaders');
    return i.result;
  }
  async getSignatureStatus(e, t) {
    const { context: n, value: r } = await this.getSignatureStatuses([e], t);
    $(r.length === 1);
    const i = r[0];
    return { context: n, value: i };
  }
  async getSignatureStatuses(e, t) {
    const n = [e];
    t && n.push(t);
    const r = await this._rpcRequest('getSignatureStatuses', n),
      i = S(r, sc);
    if ('error' in i) throw new E(i.error, 'failed to get signature status');
    return i.result;
  }
  async getTransactionCount(e) {
    const { commitment: t, config: n } = se(e),
      r = this._buildArgs([], t, void 0, n),
      i = await this._rpcRequest('getTransactionCount', r),
      o = S(i, z(h()));
    if ('error' in o) throw new E(o.error, 'failed to get transaction count');
    return o.result;
  }
  async getTotalSupply(e) {
    return (await this.getSupply({ commitment: e, excludeNonCirculatingAccountsList: !0 })).value
      .total;
  }
  async getInflationGovernor(e) {
    const t = this._buildArgs([], e),
      n = await this._rpcRequest('getInflationGovernor', t),
      r = S(n, Pa);
    if ('error' in r) throw new E(r.error, 'failed to get inflation');
    return r.result;
  }
  async getInflationReward(e, t, n) {
    const { commitment: r, config: i } = se(n),
      o = this._buildArgs([e.map((d) => d.toBase58())], r, void 0, {
        ...i,
        epoch: t ?? (i == null ? void 0 : i.epoch),
      }),
      a = await this._rpcRequest('getInflationReward', o),
      c = S(a, ya);
    if ('error' in c) throw new E(c.error, 'failed to get inflation reward');
    return c.result;
  }
  async getInflationRate() {
    const e = await this._rpcRequest('getInflationRate', []),
      t = S(e, va);
    if ('error' in t) throw new E(t.error, 'failed to get inflation rate');
    return t.result;
  }
  async getEpochInfo(e) {
    const { commitment: t, config: n } = se(e),
      r = this._buildArgs([], t, void 0, n),
      i = await this._rpcRequest('getEpochInfo', r),
      o = S(i, xa);
    if ('error' in o) throw new E(o.error, 'failed to get epoch info');
    return o.result;
  }
  async getEpochSchedule() {
    const e = await this._rpcRequest('getEpochSchedule', []),
      t = S(e, Ta);
    if ('error' in t) throw new E(t.error, 'failed to get epoch schedule');
    const n = t.result;
    return new Pr(
      n.slotsPerEpoch,
      n.leaderScheduleSlotOffset,
      n.warmup,
      n.firstNormalEpoch,
      n.firstNormalSlot
    );
  }
  async getLeaderSchedule() {
    const e = await this._rpcRequest('getLeaderSchedule', []),
      t = S(e, Ba);
    if ('error' in t) throw new E(t.error, 'failed to get leader schedule');
    return t.result;
  }
  async getMinimumBalanceForRentExemption(e, t) {
    const n = this._buildArgs([e], t),
      r = await this._rpcRequest('getMinimumBalanceForRentExemption', n),
      i = S(r, rc);
    return 'error' in i
      ? (console.warn('Unable to fetch minimum balance for rent exemption'), 0)
      : i.result;
  }
  async getRecentBlockhashAndContext(e) {
    const t = this._buildArgs([], e),
      n = await this._rpcRequest('getRecentBlockhash', t),
      r = S(n, gc);
    if ('error' in r) throw new E(r.error, 'failed to get recent blockhash');
    return r.result;
  }
  async getRecentPerformanceSamples(e) {
    const t = await this._rpcRequest('getRecentPerformanceSamples', e ? [e] : []),
      n = S(t, pc);
    if ('error' in n) throw new E(n.error, 'failed to get recent performance samples');
    return n.result;
  }
  async getFeeCalculatorForBlockhash(e, t) {
    const n = this._buildArgs([e], t),
      r = await this._rpcRequest('getFeeCalculatorForBlockhash', n),
      i = S(r, mc);
    if ('error' in i) throw new E(i.error, 'failed to get fee calculator');
    const { context: o, value: a } = i.result;
    return { context: o, value: a !== null ? a.feeCalculator : null };
  }
  async getFeeForMessage(e, t) {
    const n = D(e.serialize()).toString('base64'),
      r = this._buildArgs([n], t),
      i = await this._rpcRequest('getFeeForMessage', r),
      o = S(i, oe(A(h())));
    if ('error' in o) throw new E(o.error, 'failed to get fee for message');
    if (o.result === null) throw new Error('invalid blockhash');
    return o.result;
  }
  async getRecentBlockhash(e) {
    try {
      return (await this.getRecentBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error('failed to get recent blockhash: ' + t);
    }
  }
  async getLatestBlockhash(e) {
    try {
      return (await this.getLatestBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error('failed to get recent blockhash: ' + t);
    }
  }
  async getLatestBlockhashAndContext(e) {
    const { commitment: t, config: n } = se(e),
      r = this._buildArgs([], t, void 0, n),
      i = await this._rpcRequest('getLatestBlockhash', r),
      o = S(i, yc);
    if ('error' in o) throw new E(o.error, 'failed to get latest blockhash');
    return o.result;
  }
  async getVersion() {
    const e = await this._rpcRequest('getVersion', []),
      t = S(e, z(Aa));
    if ('error' in t) throw new E(t.error, 'failed to get version');
    return t.result;
  }
  async getGenesisHash() {
    const e = await this._rpcRequest('getGenesisHash', []),
      t = S(e, z(m()));
    if ('error' in t) throw new E(t.error, 'failed to get genesis hash');
    return t.result;
  }
  async getBlock(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgsAtLeastConfirmed([e], n, void 0, r),
      o = await this._rpcRequest('getBlock', i);
    try {
      switch (r == null ? void 0 : r.transactionDetails) {
        case 'accounts': {
          const a = S(o, uc);
          if ('error' in a) throw a.error;
          return a.result;
        }
        case 'none': {
          const a = S(o, cc);
          if ('error' in a) throw a.error;
          return a.result;
        }
        default: {
          const a = S(o, ac);
          if ('error' in a) throw a.error;
          const { result: c } = a;
          return c
            ? {
                ...c,
                transactions: c.transactions.map(({ transaction: d, meta: u, version: l }) => ({
                  meta: u,
                  transaction: { ...d, message: Ln(l, d.message) },
                  version: l,
                })),
              }
            : null;
        }
      }
    } catch (a) {
      throw new E(a, 'failed to get confirmed block');
    }
  }
  async getParsedBlock(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgsAtLeastConfirmed([e], n, 'jsonParsed', r),
      o = await this._rpcRequest('getBlock', i);
    try {
      switch (r == null ? void 0 : r.transactionDetails) {
        case 'accounts': {
          const a = S(o, dc);
          if ('error' in a) throw a.error;
          return a.result;
        }
        case 'none': {
          const a = S(o, hc);
          if ('error' in a) throw a.error;
          return a.result;
        }
        default: {
          const a = S(o, lc);
          if ('error' in a) throw a.error;
          return a.result;
        }
      }
    } catch (a) {
      throw new E(a, 'failed to get block');
    }
  }
  async getBlockHeight(e) {
    const { commitment: t, config: n } = se(e),
      r = this._buildArgs([], t, void 0, n),
      i = await this._rpcRequest('getBlockHeight', r),
      o = S(i, z(h()));
    if ('error' in o) throw new E(o.error, 'failed to get block height information');
    return o.result;
  }
  async getBlockProduction(e) {
    let t, n;
    if (typeof e == 'string') n = e;
    else if (e) {
      const { commitment: a, ...c } = e;
      (n = a), (t = c);
    }
    const r = this._buildArgs([], n, 'base64', t),
      i = await this._rpcRequest('getBlockProduction', r),
      o = S(i, _a);
    if ('error' in o) throw new E(o.error, 'failed to get block production information');
    return o.result;
  }
  async getTransaction(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgsAtLeastConfirmed([e], n, void 0, r),
      o = await this._rpcRequest('getTransaction', i),
      a = S(o, On);
    if ('error' in a) throw new E(a.error, 'failed to get transaction');
    const c = a.result;
    return (
      c && {
        ...c,
        transaction: { ...c.transaction, message: Ln(c.version, c.transaction.message) },
      }
    );
  }
  async getParsedTransaction(e, t) {
    const { commitment: n, config: r } = se(t),
      i = this._buildArgsAtLeastConfirmed([e], n, 'jsonParsed', r),
      o = await this._rpcRequest('getTransaction', i),
      a = S(o, en);
    if ('error' in a) throw new E(a.error, 'failed to get transaction');
    return a.result;
  }
  async getParsedTransactions(e, t) {
    const { commitment: n, config: r } = se(t),
      i = e.map((c) => ({
        methodName: 'getTransaction',
        args: this._buildArgsAtLeastConfirmed([c], n, 'jsonParsed', r),
      }));
    return (await this._rpcBatchRequest(i)).map((c) => {
      const d = S(c, en);
      if ('error' in d) throw new E(d.error, 'failed to get transactions');
      return d.result;
    });
  }
  async getTransactions(e, t) {
    const { commitment: n, config: r } = se(t),
      i = e.map((c) => ({
        methodName: 'getTransaction',
        args: this._buildArgsAtLeastConfirmed([c], n, void 0, r),
      }));
    return (await this._rpcBatchRequest(i)).map((c) => {
      const d = S(c, On);
      if ('error' in d) throw new E(d.error, 'failed to get transactions');
      const u = d.result;
      return (
        u && {
          ...u,
          transaction: { ...u.transaction, message: Ln(u.version, u.transaction.message) },
        }
      );
    });
  }
  async getConfirmedBlock(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t),
      r = await this._rpcRequest('getConfirmedBlock', n),
      i = S(r, fc);
    if ('error' in i) throw new E(i.error, 'failed to get confirmed block');
    const o = i.result;
    if (!o) throw new Error('Confirmed block ' + e + ' not found');
    const a = {
      ...o,
      transactions: o.transactions.map(({ transaction: c, meta: d }) => {
        const u = new De(c.message);
        return { meta: d, transaction: { ...c, message: u } };
      }),
    };
    return {
      ...a,
      transactions: a.transactions.map(({ transaction: c, meta: d }) => ({
        meta: d,
        transaction: V.populate(c.message, c.signatures),
      })),
    };
  }
  async getBlocks(e, t, n) {
    const r = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], n),
      i = await this._rpcRequest('getBlocks', r),
      o = S(i, z(_(h())));
    if ('error' in o) throw new E(o.error, 'failed to get blocks');
    return o.result;
  }
  async getBlockSignatures(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
        transactionDetails: 'signatures',
        rewards: !1,
      }),
      r = await this._rpcRequest('getBlock', n),
      i = S(r, Ds);
    if ('error' in i) throw new E(i.error, 'failed to get block');
    const o = i.result;
    if (!o) throw new Error('Block ' + e + ' not found');
    return o;
  }
  async getConfirmedBlockSignatures(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
        transactionDetails: 'signatures',
        rewards: !1,
      }),
      r = await this._rpcRequest('getConfirmedBlock', n),
      i = S(r, Ds);
    if ('error' in i) throw new E(i.error, 'failed to get confirmed block');
    const o = i.result;
    if (!o) throw new Error('Confirmed block ' + e + ' not found');
    return o;
  }
  async getConfirmedTransaction(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t),
      r = await this._rpcRequest('getConfirmedTransaction', n),
      i = S(r, On);
    if ('error' in i) throw new E(i.error, 'failed to get transaction');
    const o = i.result;
    if (!o) return o;
    const a = new De(o.transaction.message),
      c = o.transaction.signatures;
    return { ...o, transaction: V.populate(a, c) };
  }
  async getParsedConfirmedTransaction(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, 'jsonParsed'),
      r = await this._rpcRequest('getConfirmedTransaction', n),
      i = S(r, en);
    if ('error' in i) throw new E(i.error, 'failed to get confirmed transaction');
    return i.result;
  }
  async getParsedConfirmedTransactions(e, t) {
    const n = e.map((o) => ({
      methodName: 'getConfirmedTransaction',
      args: this._buildArgsAtLeastConfirmed([o], t, 'jsonParsed'),
    }));
    return (await this._rpcBatchRequest(n)).map((o) => {
      const a = S(o, en);
      if ('error' in a) throw new E(a.error, 'failed to get confirmed transactions');
      return a.result;
    });
  }
  async getConfirmedSignaturesForAddress(e, t, n) {
    let r = {},
      i = await this.getFirstAvailableBlock();
    for (; !('until' in r) && (t--, !(t <= 0 || t < i)); )
      try {
        const c = await this.getConfirmedBlockSignatures(t, 'finalized');
        c.signatures.length > 0 && (r.until = c.signatures[c.signatures.length - 1].toString());
      } catch (c) {
        if (c instanceof Error && c.message.includes('skipped')) continue;
        throw c;
      }
    let o = await this.getSlot('finalized');
    for (; !('before' in r) && (n++, !(n > o)); )
      try {
        const c = await this.getConfirmedBlockSignatures(n);
        c.signatures.length > 0 && (r.before = c.signatures[c.signatures.length - 1].toString());
      } catch (c) {
        if (c instanceof Error && c.message.includes('skipped')) continue;
        throw c;
      }
    return (await this.getConfirmedSignaturesForAddress2(e, r)).map((c) => c.signature);
  }
  async getConfirmedSignaturesForAddress2(e, t, n) {
    const r = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t),
      i = await this._rpcRequest('getConfirmedSignaturesForAddress2', r),
      o = S(i, Ha);
    if ('error' in o) throw new E(o.error, 'failed to get confirmed signatures for address');
    return o.result;
  }
  async getSignaturesForAddress(e, t, n) {
    const r = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t),
      i = await this._rpcRequest('getSignaturesForAddress', r),
      o = S(i, Fa);
    if ('error' in o) throw new E(o.error, 'failed to get signatures for address');
    return o.result;
  }
  async getAddressLookupTable(e, t) {
    const { context: n, value: r } = await this.getAccountInfoAndContext(e, t);
    let i = null;
    return (
      r !== null && (i = new Vn({ key: e, state: Vn.deserialize(r.data) })),
      { context: n, value: i }
    );
  }
  async getNonceAndContext(e, t) {
    const { context: n, value: r } = await this.getAccountInfoAndContext(e, t);
    let i = null;
    return r !== null && (i = yn.fromAccountData(r.data)), { context: n, value: i };
  }
  async getNonce(e, t) {
    return await this.getNonceAndContext(e, t)
      .then((n) => n.value)
      .catch((n) => {
        throw new Error('failed to get nonce for account ' + e.toBase58() + ': ' + n);
      });
  }
  async requestAirdrop(e, t) {
    const n = await this._rpcRequest('requestAirdrop', [e.toBase58(), t]),
      r = S(n, wc);
    if ('error' in r) throw new E(r.error, `airdrop to ${e.toBase58()} failed`);
    return r.result;
  }
  async _blockhashWithExpiryBlockHeight(e) {
    if (!e) {
      for (; this._pollingBlockhash; ) await ft(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= xr;
      if (this._blockhashInfo.latestBlockhash !== null && !n)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const e = Date.now(),
        t = this._blockhashInfo.latestBlockhash,
        n = t ? t.blockhash : null;
      for (let r = 0; r < 50; r++) {
        const i = await this.getLatestBlockhash('finalized');
        if (n !== i.blockhash)
          return (
            (this._blockhashInfo = {
              latestBlockhash: i,
              lastFetch: Date.now(),
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            i
          );
        await ft(aa / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  async getStakeMinimumDelegation(e) {
    const { commitment: t, config: n } = se(e),
      r = this._buildArgs([], t, 'base64', n),
      i = await this._rpcRequest('getStakeMinimumDelegation', r),
      o = S(i, oe(h()));
    if ('error' in o) throw new E(o.error, 'failed to get stake minimum delegation');
    return o.result;
  }
  async simulateTransaction(e, t, n) {
    if ('message' in e) {
      const y = e.serialize(),
        k = B.from(y).toString('base64');
      if (Array.isArray(t) || n !== void 0) throw new Error('Invalid arguments');
      const v = t || {};
      (v.encoding = 'base64'), 'commitment' in v || (v.commitment = this.commitment);
      const W = [k, v],
        T = await this._rpcRequest('simulateTransaction', W),
        j = S(T, Us);
      if ('error' in j) throw new Error('failed to simulate transaction: ' + j.error.message);
      return j.result;
    }
    let r;
    if (e instanceof V) {
      let b = e;
      (r = new V()),
        (r.feePayer = b.feePayer),
        (r.instructions = e.instructions),
        (r.nonceInfo = b.nonceInfo),
        (r.signatures = b.signatures);
    } else (r = V.populate(e)), (r._message = r._json = void 0);
    if (t !== void 0 && !Array.isArray(t)) throw new Error('Invalid arguments');
    const i = t;
    if (r.nonceInfo && i) r.sign(...i);
    else {
      let b = this._disableBlockhashCaching;
      for (;;) {
        const y = await this._blockhashWithExpiryBlockHeight(b);
        if (
          ((r.lastValidBlockHeight = y.lastValidBlockHeight), (r.recentBlockhash = y.blockhash), !i)
        )
          break;
        if ((r.sign(...i), !r.signature)) throw new Error('!signature');
        const k = r.signature.toString('base64');
        if (
          !this._blockhashInfo.simulatedSignatures.includes(k) &&
          !this._blockhashInfo.transactionSignatures.includes(k)
        ) {
          this._blockhashInfo.simulatedSignatures.push(k);
          break;
        } else b = !0;
      }
    }
    const o = r._compile(),
      a = o.serialize(),
      d = r._serialize(a).toString('base64'),
      u = { encoding: 'base64', commitment: this.commitment };
    if (n) {
      const b = (Array.isArray(n) ? n : o.nonProgramIds()).map((y) => y.toBase58());
      u.accounts = { encoding: 'base64', addresses: b };
    }
    i && (u.sigVerify = !0);
    const l = [d, u],
      g = await this._rpcRequest('simulateTransaction', l),
      f = S(g, Us);
    if ('error' in f) {
      let b;
      if ('data' in f.error && ((b = f.error.data.logs), b && Array.isArray(b))) {
        const y = `
    `,
          k = y + b.join(y);
        console.error(f.error.message, k);
      }
      throw new qn('failed to simulate transaction: ' + f.error.message, b);
    }
    return f.result;
  }
  async sendTransaction(e, t, n) {
    if ('version' in e) {
      if (t && Array.isArray(t)) throw new Error('Invalid arguments');
      const o = e.serialize();
      return await this.sendRawTransaction(o, t);
    }
    if (t === void 0 || !Array.isArray(t)) throw new Error('Invalid arguments');
    const r = t;
    if (e.nonceInfo) e.sign(...r);
    else {
      let o = this._disableBlockhashCaching;
      for (;;) {
        const a = await this._blockhashWithExpiryBlockHeight(o);
        if (
          ((e.lastValidBlockHeight = a.lastValidBlockHeight),
          (e.recentBlockhash = a.blockhash),
          e.sign(...r),
          !e.signature)
        )
          throw new Error('!signature');
        const c = e.signature.toString('base64');
        if (this._blockhashInfo.transactionSignatures.includes(c)) o = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(c);
          break;
        }
      }
    }
    const i = e.serialize();
    return await this.sendRawTransaction(i, n);
  }
  async sendRawTransaction(e, t) {
    const n = D(e).toString('base64');
    return await this.sendEncodedTransaction(n, t);
  }
  async sendEncodedTransaction(e, t) {
    const n = { encoding: 'base64' },
      r = t && t.skipPreflight,
      i = (t && t.preflightCommitment) || this.commitment;
    t && t.maxRetries != null && (n.maxRetries = t.maxRetries),
      t && t.minContextSlot != null && (n.minContextSlot = t.minContextSlot),
      r && (n.skipPreflight = r),
      i && (n.preflightCommitment = i);
    const o = [e, n],
      a = await this._rpcRequest('sendTransaction', o),
      c = S(a, kc);
    if ('error' in c) {
      let d;
      throw (
        ('data' in c.error && (d = c.error.data.logs),
        new qn('failed to send transaction: ' + c.error.message, d))
      );
    }
    return c.result;
  }
  _wsOnOpen() {
    (this._rpcWebSocketConnected = !0),
      (this._rpcWebSocketHeartbeat = setInterval(() => {
        (async () => {
          try {
            await this._rpcWebSocket.notify('ping');
          } catch {}
        })();
      }, 5e3)),
      this._updateSubscriptions();
  }
  _wsOnError(e) {
    (this._rpcWebSocketConnected = !1), console.error('ws error:', e.message);
  }
  _wsOnClose(e) {
    if (
      ((this._rpcWebSocketConnected = !1),
      (this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
      this._rpcWebSocketIdleTimeout &&
        (clearTimeout(this._rpcWebSocketIdleTimeout), (this._rpcWebSocketIdleTimeout = null)),
      this._rpcWebSocketHeartbeat &&
        (clearInterval(this._rpcWebSocketHeartbeat), (this._rpcWebSocketHeartbeat = null)),
      e === 1e3)
    ) {
      this._updateSubscriptions();
      return;
    }
    (this._subscriptionCallbacksByServerSubscriptionId = {}),
      Object.entries(this._subscriptionsByHash).forEach(([t, n]) => {
        this._setSubscription(t, { ...n, state: 'pending' });
      });
  }
  _setSubscription(e, t) {
    var r;
    const n = (r = this._subscriptionsByHash[e]) == null ? void 0 : r.state;
    if (((this._subscriptionsByHash[e] = t), n !== t.state)) {
      const i = this._subscriptionStateChangeCallbacksByHash[e];
      i &&
        i.forEach((o) => {
          try {
            o(t.state);
          } catch {}
        });
    }
  }
  _onSubscriptionStateChange(e, t) {
    var i;
    const n = this._subscriptionHashByClientSubscriptionId[e];
    if (n == null) return () => {};
    const r = (i = this._subscriptionStateChangeCallbacksByHash)[n] || (i[n] = new Set());
    return (
      r.add(t),
      () => {
        r.delete(t), r.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n];
      }
    );
  }
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      this._rpcWebSocketConnected &&
        ((this._rpcWebSocketConnected = !1),
        (this._rpcWebSocketIdleTimeout = setTimeout(() => {
          this._rpcWebSocketIdleTimeout = null;
          try {
            this._rpcWebSocket.close();
          } catch (n) {
            n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`);
          }
        }, 500)));
      return;
    }
    if (
      (this._rpcWebSocketIdleTimeout !== null &&
        (clearTimeout(this._rpcWebSocketIdleTimeout),
        (this._rpcWebSocketIdleTimeout = null),
        (this._rpcWebSocketConnected = !0)),
      !this._rpcWebSocketConnected)
    ) {
      this._rpcWebSocket.connect();
      return;
    }
    const e = this._rpcWebSocketGeneration,
      t = () => e === this._rpcWebSocketGeneration;
    await Promise.all(
      Object.keys(this._subscriptionsByHash).map(async (n) => {
        const r = this._subscriptionsByHash[n];
        if (r !== void 0)
          switch (r.state) {
            case 'pending':
            case 'unsubscribed':
              if (r.callbacks.size === 0) {
                delete this._subscriptionsByHash[n],
                  r.state === 'unsubscribed' &&
                    delete this._subscriptionCallbacksByServerSubscriptionId[
                      r.serverSubscriptionId
                    ],
                  await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const { args: i, method: o } = r;
                try {
                  this._setSubscription(n, { ...r, state: 'subscribing' });
                  const a = await this._rpcWebSocket.call(o, i);
                  this._setSubscription(n, { ...r, serverSubscriptionId: a, state: 'subscribed' }),
                    (this._subscriptionCallbacksByServerSubscriptionId[a] = r.callbacks),
                    await this._updateSubscriptions();
                } catch (a) {
                  if (
                    (a instanceof Error && console.error(`${o} error for argument`, i, a.message),
                    !t())
                  )
                    return;
                  this._setSubscription(n, { ...r, state: 'pending' }),
                    await this._updateSubscriptions();
                }
              })();
              break;
            case 'subscribed':
              r.callbacks.size === 0 &&
                (await (async () => {
                  const { serverSubscriptionId: i, unsubscribeMethod: o } = r;
                  if (this._subscriptionsAutoDisposedByRpc.has(i))
                    this._subscriptionsAutoDisposedByRpc.delete(i);
                  else {
                    this._setSubscription(n, { ...r, state: 'unsubscribing' }),
                      this._setSubscription(n, { ...r, state: 'unsubscribing' });
                    try {
                      await this._rpcWebSocket.call(o, [i]);
                    } catch (a) {
                      if ((a instanceof Error && console.error(`${o} error:`, a.message), !t()))
                        return;
                      this._setSubscription(n, { ...r, state: 'subscribed' }),
                        await this._updateSubscriptions();
                      return;
                    }
                  }
                  this._setSubscription(n, { ...r, state: 'unsubscribed' }),
                    await this._updateSubscriptions();
                })());
              break;
          }
      })
    );
  }
  _handleServerNotification(e, t) {
    const n = this._subscriptionCallbacksByServerSubscriptionId[e];
    n !== void 0 &&
      n.forEach((r) => {
        try {
          r(...t);
        } catch (i) {
          console.error(i);
        }
      });
  }
  _wsOnAccountNotification(e) {
    const { result: t, subscription: n } = S(e, $a);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  _makeSubscription(e, t) {
    const n = this._nextClientSubscriptionId++,
      r = Qo([e.method, t]),
      i = this._subscriptionsByHash[r];
    return (
      i === void 0
        ? (this._subscriptionsByHash[r] = {
            ...e,
            args: t,
            callbacks: new Set([e.callback]),
            state: 'pending',
          })
        : i.callbacks.add(e.callback),
      (this._subscriptionHashByClientSubscriptionId[n] = r),
      (this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n],
          delete this._subscriptionHashByClientSubscriptionId[n];
        const o = this._subscriptionsByHash[r];
        $(
          o !== void 0,
          `Could not find a \`Subscription\` when tearing down client subscription #${n}`
        ),
          o.callbacks.delete(e.callback),
          await this._updateSubscriptions();
      }),
      this._updateSubscriptions(),
      n
    );
  }
  onAccountChange(e, t, n) {
    const r = this._buildArgs([e.toBase58()], n || this._commitment || 'finalized', 'base64');
    return this._makeSubscription(
      { callback: t, method: 'accountSubscribe', unsubscribeMethod: 'accountUnsubscribe' },
      r
    );
  }
  async removeAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, 'account change');
  }
  _wsOnProgramAccountNotification(e) {
    const { result: t, subscription: n } = S(e, qa);
    this._handleServerNotification(n, [
      { accountId: t.value.pubkey, accountInfo: t.value.account },
      t.context,
    ]);
  }
  onProgramAccountChange(e, t, n, r) {
    const i = this._buildArgs(
      [e.toBase58()],
      n || this._commitment || 'finalized',
      'base64',
      r ? { filters: r } : void 0
    );
    return this._makeSubscription(
      { callback: t, method: 'programSubscribe', unsubscribeMethod: 'programUnsubscribe' },
      i
    );
  }
  async removeProgramAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, 'program account change');
  }
  onLogs(e, t, n) {
    const r = this._buildArgs(
      [typeof e == 'object' ? { mentions: [e.toString()] } : e],
      n || this._commitment || 'finalized'
    );
    return this._makeSubscription(
      { callback: t, method: 'logsSubscribe', unsubscribeMethod: 'logsUnsubscribe' },
      r
    );
  }
  async removeOnLogsListener(e) {
    await this._unsubscribeClientSubscription(e, 'logs');
  }
  _wsOnLogsNotification(e) {
    const { result: t, subscription: n } = S(e, Ac);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  _wsOnSlotNotification(e) {
    const { result: t, subscription: n } = S(e, ja);
    this._handleServerNotification(n, [t]);
  }
  onSlotChange(e) {
    return this._makeSubscription(
      { callback: e, method: 'slotSubscribe', unsubscribeMethod: 'slotUnsubscribe' },
      []
    );
  }
  async removeSlotChangeListener(e) {
    await this._unsubscribeClientSubscription(e, 'slot change');
  }
  _wsOnSlotUpdatesNotification(e) {
    const { result: t, subscription: n } = S(e, Ja);
    this._handleServerNotification(n, [t]);
  }
  onSlotUpdate(e) {
    return this._makeSubscription(
      {
        callback: e,
        method: 'slotsUpdatesSubscribe',
        unsubscribeMethod: 'slotsUpdatesUnsubscribe',
      },
      []
    );
  }
  async removeSlotUpdateListener(e) {
    await this._unsubscribeClientSubscription(e, 'slot update');
  }
  async _unsubscribeClientSubscription(e, t) {
    const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
    n
      ? await n()
      : console.warn(
          `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
        );
  }
  _buildArgs(e, t, n, r) {
    const i = t || this._commitment;
    if (i || n || r) {
      let o = {};
      n && (o.encoding = n), i && (o.commitment = i), r && (o = Object.assign(o, r)), e.push(o);
    }
    return e;
  }
  _buildArgsAtLeastConfirmed(e, t, n, r) {
    const i = t || this._commitment;
    if (i && !['confirmed', 'finalized'].includes(i))
      throw new Error(
        'Using Connection with default commitment: `' +
          this._commitment +
          '`, but method requires at least `confirmed`'
      );
    return this._buildArgs(e, t, n, r);
  }
  _wsOnSignatureNotification(e) {
    const { result: t, subscription: n } = S(e, Ya);
    t.value !== 'receivedSignature' && this._subscriptionsAutoDisposedByRpc.add(n),
      this._handleServerNotification(
        n,
        t.value === 'receivedSignature'
          ? [{ type: 'received' }, t.context]
          : [{ type: 'status', result: t.value }, t.context]
      );
  }
  onSignature(e, t, n) {
    const r = this._buildArgs([e], n || this._commitment || 'finalized'),
      i = this._makeSubscription(
        {
          callback: (o, a) => {
            if (o.type === 'status') {
              t(o.result, a);
              try {
                this.removeSignatureListener(i);
              } catch {}
            }
          },
          method: 'signatureSubscribe',
          unsubscribeMethod: 'signatureUnsubscribe',
        },
        r
      );
    return i;
  }
  onSignatureWithOptions(e, t, n) {
    const { commitment: r, ...i } = {
        ...n,
        commitment: (n && n.commitment) || this._commitment || 'finalized',
      },
      o = this._buildArgs([e], r, void 0, i),
      a = this._makeSubscription(
        {
          callback: (c, d) => {
            t(c, d);
            try {
              this.removeSignatureListener(a);
            } catch {}
          },
          method: 'signatureSubscribe',
          unsubscribeMethod: 'signatureUnsubscribe',
        },
        o
      );
    return a;
  }
  async removeSignatureListener(e) {
    await this._unsubscribeClientSubscription(e, 'signature result');
  }
  _wsOnRootNotification(e) {
    const { result: t, subscription: n } = S(e, Za);
    this._handleServerNotification(n, [t]);
  }
  onRootChange(e) {
    return this._makeSubscription(
      { callback: e, method: 'rootSubscribe', unsubscribeMethod: 'rootUnsubscribe' },
      []
    );
  }
  async removeRootChangeListener(e) {
    await this._unsubscribeClientSubscription(e, 'root change');
  }
}
class Et {
  constructor(e) {
    (this._keypair = void 0), (this._keypair = e ?? Ns());
  }
  static generate() {
    return new Et(Ns());
  }
  static fromSecretKey(e, t) {
    if (e.byteLength !== 64) throw new Error('bad secret key size');
    const n = e.slice(32, 64);
    if (!t || !t.skipValidation) {
      const r = e.slice(0, 32),
        i = cn(r);
      for (let o = 0; o < 32; o++)
        if (n[o] !== i[o]) throw new Error('provided secretKey is invalid');
    }
    return new Et({ publicKey: n, secretKey: e });
  }
  static fromSeed(e) {
    const t = cn(e),
      n = new Uint8Array(64);
    return n.set(e), n.set(t, 32), new Et({ publicKey: t, secretKey: n });
  }
  get publicKey() {
    return new w(this._keypair.publicKey);
  }
  get secretKey() {
    return new Uint8Array(this._keypair.secretKey);
  }
}
const Ze = Object.freeze({
  CreateLookupTable: { index: 0, layout: I([R('instruction'), xt('recentSlot'), G('bumpSeed')]) },
  FreezeLookupTable: { index: 1, layout: I([R('instruction')]) },
  ExtendLookupTable: {
    index: 2,
    layout: I([R('instruction'), xt(), be(M(), yt(R(), -8), 'addresses')]),
  },
  DeactivateLookupTable: { index: 3, layout: I([R('instruction')]) },
  CloseLookupTable: { index: 4, layout: I([R('instruction')]) },
});
class Rc {
  constructor() {}
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R('instruction').decode(e.data);
    let r;
    for (const [i, o] of Object.entries(Ze))
      if (o.index == n) {
        r = i;
        break;
      }
    if (!r) throw new Error('Invalid Instruction. Should be a LookupTable Instruction');
    return r;
  }
  static decodeCreateLookupTable(e) {
    this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
    const { recentSlot: t } = q(Ze.CreateLookupTable, e.data);
    return { authority: e.keys[1].pubkey, payer: e.keys[2].pubkey, recentSlot: Number(t) };
  }
  static decodeExtendLookupTable(e) {
    if ((this.checkProgramId(e.programId), e.keys.length < 2))
      throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
    const { addresses: t } = q(Ze.ExtendLookupTable, e.data);
    return {
      lookupTable: e.keys[0].pubkey,
      authority: e.keys[1].pubkey,
      payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
      addresses: t.map((n) => new w(n)),
    };
  }
  static decodeCloseLookupTable(e) {
    return (
      this.checkProgramId(e.programId),
      this.checkKeysLength(e.keys, 3),
      { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey, recipient: e.keys[2].pubkey }
    );
  }
  static decodeFreezeLookupTable(e) {
    return (
      this.checkProgramId(e.programId),
      this.checkKeysLength(e.keys, 2),
      { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
    );
  }
  static decodeDeactivateLookupTable(e) {
    return (
      this.checkProgramId(e.programId),
      this.checkKeysLength(e.keys, 2),
      { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
    );
  }
  static checkProgramId(e) {
    if (!e.equals(gs.programId))
      throw new Error('invalid instruction; programId is not AddressLookupTable Program');
  }
  static checkKeysLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
class gs {
  constructor() {}
  static createLookupTable(e) {
    const [t, n] = w.findProgramAddressSync(
        [e.authority.toBuffer(), Qs(BigInt(e.recentSlot), 8)],
        this.programId
      ),
      r = Ze.CreateLookupTable,
      i = F(r, { recentSlot: BigInt(e.recentSlot), bumpSeed: n }),
      o = [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
        { pubkey: e.payer, isSigner: !0, isWritable: !0 },
        { pubkey: ge.programId, isSigner: !1, isWritable: !1 },
      ];
    return [new J({ programId: this.programId, keys: o, data: i }), t];
  }
  static freezeLookupTable(e) {
    const t = Ze.FreezeLookupTable,
      n = F(t),
      r = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
      ];
    return new J({ programId: this.programId, keys: r, data: n });
  }
  static extendLookupTable(e) {
    const t = Ze.ExtendLookupTable,
      n = F(t, { addresses: e.addresses.map((i) => i.toBytes()) }),
      r = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
      ];
    return (
      e.payer &&
        r.push(
          { pubkey: e.payer, isSigner: !0, isWritable: !0 },
          { pubkey: ge.programId, isSigner: !1, isWritable: !1 }
        ),
      new J({ programId: this.programId, keys: r, data: n })
    );
  }
  static deactivateLookupTable(e) {
    const t = Ze.DeactivateLookupTable,
      n = F(t),
      r = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
      ];
    return new J({ programId: this.programId, keys: r, data: n });
  }
  static closeLookupTable(e) {
    const t = Ze.CloseLookupTable,
      n = F(t),
      r = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
        { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
      ];
    return new J({ programId: this.programId, keys: r, data: n });
  }
}
gs.programId = new w('AddressLookupTab1e1111111111111111111111111');
class Ec {
  constructor() {}
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = G('instruction').decode(e.data);
    let r;
    for (const [i, o] of Object.entries($e))
      if (o.index == n) {
        r = i;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a ComputeBudgetInstruction');
    return r;
  }
  static decodeRequestUnits(e) {
    this.checkProgramId(e.programId);
    const { units: t, additionalFee: n } = q($e.RequestUnits, e.data);
    return { units: t, additionalFee: n };
  }
  static decodeRequestHeapFrame(e) {
    this.checkProgramId(e.programId);
    const { bytes: t } = q($e.RequestHeapFrame, e.data);
    return { bytes: t };
  }
  static decodeSetComputeUnitLimit(e) {
    this.checkProgramId(e.programId);
    const { units: t } = q($e.SetComputeUnitLimit, e.data);
    return { units: t };
  }
  static decodeSetComputeUnitPrice(e) {
    this.checkProgramId(e.programId);
    const { microLamports: t } = q($e.SetComputeUnitPrice, e.data);
    return { microLamports: t };
  }
  static checkProgramId(e) {
    if (!e.equals(ys.programId))
      throw new Error('invalid instruction; programId is not ComputeBudgetProgram');
  }
}
const $e = Object.freeze({
  RequestUnits: { index: 0, layout: I([G('instruction'), R('units'), R('additionalFee')]) },
  RequestHeapFrame: { index: 1, layout: I([G('instruction'), R('bytes')]) },
  SetComputeUnitLimit: { index: 2, layout: I([G('instruction'), R('units')]) },
  SetComputeUnitPrice: { index: 3, layout: I([G('instruction'), xt('microLamports')]) },
});
class ys {
  constructor() {}
  static requestUnits(e) {
    const t = $e.RequestUnits,
      n = F(t, e);
    return new J({ keys: [], programId: this.programId, data: n });
  }
  static requestHeapFrame(e) {
    const t = $e.RequestHeapFrame,
      n = F(t, e);
    return new J({ keys: [], programId: this.programId, data: n });
  }
  static setComputeUnitLimit(e) {
    const t = $e.SetComputeUnitLimit,
      n = F(t, e);
    return new J({ keys: [], programId: this.programId, data: n });
  }
  static setComputeUnitPrice(e) {
    const t = $e.SetComputeUnitPrice,
      n = F(t, { microLamports: BigInt(e.microLamports) });
    return new J({ keys: [], programId: this.programId, data: n });
  }
}
ys.programId = new w('ComputeBudget111111111111111111111111111111');
const zs = 64,
  Ws = 32,
  Ms = 64,
  Hs = I([
    G('numSignatures'),
    G('padding'),
    Ue('signatureOffset'),
    Ue('signatureInstructionIndex'),
    Ue('publicKeyOffset'),
    Ue('publicKeyInstructionIndex'),
    Ue('messageDataOffset'),
    Ue('messageDataSize'),
    Ue('messageInstructionIndex'),
  ]);
class mn {
  constructor() {}
  static createInstructionWithPublicKey(e) {
    const { publicKey: t, message: n, signature: r, instructionIndex: i } = e;
    $(t.length === Ws, `Public Key must be ${Ws} bytes but received ${t.length} bytes`),
      $(r.length === Ms, `Signature must be ${Ms} bytes but received ${r.length} bytes`);
    const o = Hs.span,
      a = o + t.length,
      c = a + r.length,
      d = 1,
      u = B.alloc(c + n.length),
      l = i ?? 65535;
    return (
      Hs.encode(
        {
          numSignatures: d,
          padding: 0,
          signatureOffset: a,
          signatureInstructionIndex: l,
          publicKeyOffset: o,
          publicKeyInstructionIndex: l,
          messageDataOffset: c,
          messageDataSize: n.length,
          messageInstructionIndex: l,
        },
        u
      ),
      u.fill(t, o),
      u.fill(r, a),
      u.fill(n, c),
      new J({ keys: [], programId: mn.programId, data: u })
    );
  }
  static createInstructionWithPrivateKey(e) {
    const { privateKey: t, message: n, instructionIndex: r } = e;
    $(t.length === zs, `Private key must be ${zs} bytes but received ${t.length} bytes`);
    try {
      const i = Et.fromSecretKey(t),
        o = i.publicKey.toBytes(),
        a = rs(n, i.secretKey);
      return this.createInstructionWithPublicKey({
        publicKey: o,
        message: n,
        signature: a,
        instructionIndex: r,
      });
    } catch (i) {
      throw new Error(`Error creating instruction; ${i}`);
    }
  }
}
mn.programId = new w('Ed25519SigVerify111111111111111111111111111');
Zs.hmacSha256Sync = (s, ...e) => {
  const t = kr.create($n, s);
  return e.forEach((n) => t.update(n)), t.digest();
};
const Pc = (s, e) => ni(s, e, { der: !1, recovered: !0 });
Zs.isValidPrivateKey;
const vc = si,
  Fs = 32,
  Cn = 20,
  $s = 64,
  xc = 11,
  Un = I([
    G('numSignatures'),
    Ue('signatureOffset'),
    G('signatureInstructionIndex'),
    Ue('ethAddressOffset'),
    G('ethAddressInstructionIndex'),
    Ue('messageDataOffset'),
    Ue('messageDataSize'),
    G('messageInstructionIndex'),
    ne(20, 'ethAddress'),
    ne(64, 'signature'),
    G('recoveryId'),
  ]);
class Pt {
  constructor() {}
  static publicKeyToEthAddress(e) {
    $(e.length === $s, `Public key must be ${$s} bytes but received ${e.length} bytes`);
    try {
      return B.from(Bs(D(e))).slice(-Cn);
    } catch (t) {
      throw new Error(`Error constructing Ethereum address: ${t}`);
    }
  }
  static createInstructionWithPublicKey(e) {
    const { publicKey: t, message: n, signature: r, recoveryId: i, instructionIndex: o } = e;
    return Pt.createInstructionWithEthAddress({
      ethAddress: Pt.publicKeyToEthAddress(t),
      message: n,
      signature: r,
      recoveryId: i,
      instructionIndex: o,
    });
  }
  static createInstructionWithEthAddress(e) {
    const { ethAddress: t, message: n, signature: r, recoveryId: i, instructionIndex: o = 0 } = e;
    let a;
    typeof t == 'string'
      ? t.startsWith('0x')
        ? (a = B.from(t.substr(2), 'hex'))
        : (a = B.from(t, 'hex'))
      : (a = t),
      $(a.length === Cn, `Address must be ${Cn} bytes but received ${a.length} bytes`);
    const c = 1 + xc,
      d = c,
      u = c + a.length,
      l = u + r.length + 1,
      g = 1,
      f = B.alloc(Un.span + n.length);
    return (
      Un.encode(
        {
          numSignatures: g,
          signatureOffset: u,
          signatureInstructionIndex: o,
          ethAddressOffset: d,
          ethAddressInstructionIndex: o,
          messageDataOffset: l,
          messageDataSize: n.length,
          messageInstructionIndex: o,
          signature: D(r),
          ethAddress: D(a),
          recoveryId: i,
        },
        f
      ),
      f.fill(D(n), Un.span),
      new J({ keys: [], programId: Pt.programId, data: f })
    );
  }
  static createInstructionWithPrivateKey(e) {
    const { privateKey: t, message: n, instructionIndex: r } = e;
    $(t.length === Fs, `Private key must be ${Fs} bytes but received ${t.length} bytes`);
    try {
      const i = D(t),
        o = vc(i, !1).slice(1),
        a = B.from(Bs(D(n))),
        [c, d] = Pc(a, i);
      return this.createInstructionWithPublicKey({
        publicKey: o,
        message: n,
        signature: c,
        recoveryId: d,
        instructionIndex: r,
      });
    } catch (i) {
      throw new Error(`Error creating instruction; ${i}`);
    }
  }
}
Pt.programId = new w('KeccakSecp256k11111111111111111111111111111');
const zr = new w('StakeConfig11111111111111111111111111111111');
class Wr {
  constructor(e, t) {
    (this.staker = void 0), (this.withdrawer = void 0), (this.staker = e), (this.withdrawer = t);
  }
}
class qt {
  constructor(e, t, n) {
    (this.unixTimestamp = void 0),
      (this.epoch = void 0),
      (this.custodian = void 0),
      (this.unixTimestamp = e),
      (this.epoch = t),
      (this.custodian = n);
  }
}
qt.default = new qt(0, 0, w.default);
class Tc {
  constructor() {}
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R('instruction').decode(e.data);
    let r;
    for (const [i, o] of Object.entries(ue))
      if (o.index == n) {
        r = i;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a StakeInstruction');
    return r;
  }
  static decodeInitialize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const { authorized: t, lockup: n } = q(ue.Initialize, e.data);
    return {
      stakePubkey: e.keys[0].pubkey,
      authorized: new Wr(new w(t.staker), new w(t.withdrawer)),
      lockup: new qt(n.unixTimestamp, n.epoch, new w(n.custodian)),
    };
  }
  static decodeDelegate(e) {
    return (
      this.checkProgramId(e.programId),
      this.checkKeyLength(e.keys, 6),
      q(ue.Delegate, e.data),
      {
        stakePubkey: e.keys[0].pubkey,
        votePubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[5].pubkey,
      }
    );
  }
  static decodeAuthorize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const { newAuthorized: t, stakeAuthorizationType: n } = q(ue.Authorize, e.data),
      r = {
        stakePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        newAuthorizedPubkey: new w(t),
        stakeAuthorizationType: { index: n },
      };
    return e.keys.length > 3 && (r.custodianPubkey = e.keys[3].pubkey), r;
  }
  static decodeAuthorizeWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
    const {
        newAuthorized: t,
        stakeAuthorizationType: n,
        authoritySeed: r,
        authorityOwner: i,
      } = q(ue.AuthorizeWithSeed, e.data),
      o = {
        stakePubkey: e.keys[0].pubkey,
        authorityBase: e.keys[1].pubkey,
        authoritySeed: r,
        authorityOwner: new w(i),
        newAuthorizedPubkey: new w(t),
        stakeAuthorizationType: { index: n },
      };
    return e.keys.length > 3 && (o.custodianPubkey = e.keys[3].pubkey), o;
  }
  static decodeSplit(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const { lamports: t } = q(ue.Split, e.data);
    return {
      stakePubkey: e.keys[0].pubkey,
      splitStakePubkey: e.keys[1].pubkey,
      authorizedPubkey: e.keys[2].pubkey,
      lamports: t,
    };
  }
  static decodeMerge(e) {
    return (
      this.checkProgramId(e.programId),
      this.checkKeyLength(e.keys, 3),
      q(ue.Merge, e.data),
      {
        stakePubkey: e.keys[0].pubkey,
        sourceStakePubKey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
      }
    );
  }
  static decodeWithdraw(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
    const { lamports: t } = q(ue.Withdraw, e.data),
      n = {
        stakePubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
        lamports: t,
      };
    return e.keys.length > 5 && (n.custodianPubkey = e.keys[5].pubkey), n;
  }
  static decodeDeactivate(e) {
    return (
      this.checkProgramId(e.programId),
      this.checkKeyLength(e.keys, 3),
      q(ue.Deactivate, e.data),
      { stakePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
    );
  }
  static checkProgramId(e) {
    if (!e.equals(wn.programId))
      throw new Error('invalid instruction; programId is not StakeProgram');
  }
  static checkKeyLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
const ue = Object.freeze({
    Initialize: { index: 0, layout: I([R('instruction'), Oo(), Co()]) },
    Authorize: {
      index: 1,
      layout: I([R('instruction'), M('newAuthorized'), R('stakeAuthorizationType')]),
    },
    Delegate: { index: 2, layout: I([R('instruction')]) },
    Split: { index: 3, layout: I([R('instruction'), Be('lamports')]) },
    Withdraw: { index: 4, layout: I([R('instruction'), Be('lamports')]) },
    Deactivate: { index: 5, layout: I([R('instruction')]) },
    Merge: { index: 7, layout: I([R('instruction')]) },
    AuthorizeWithSeed: {
      index: 8,
      layout: I([
        R('instruction'),
        M('newAuthorized'),
        R('stakeAuthorizationType'),
        gt('authoritySeed'),
        M('authorityOwner'),
      ]),
    },
  }),
  Bc = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
class wn {
  constructor() {}
  static initialize(e) {
    const { stakePubkey: t, authorized: n, lockup: r } = e,
      i = r || qt.default,
      o = ue.Initialize,
      a = F(o, {
        authorized: { staker: D(n.staker.toBuffer()), withdrawer: D(n.withdrawer.toBuffer()) },
        lockup: {
          unixTimestamp: i.unixTimestamp,
          epoch: i.epoch,
          custodian: D(i.custodian.toBuffer()),
        },
      }),
      c = {
        keys: [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: vt, isSigner: !1, isWritable: !1 },
        ],
        programId: this.programId,
        data: a,
      };
    return new J(c);
  }
  static createAccountWithSeed(e) {
    const t = new V();
    t.add(
      ge.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId,
      })
    );
    const { stakePubkey: n, authorized: r, lockup: i } = e;
    return t.add(this.initialize({ stakePubkey: n, authorized: r, lockup: i }));
  }
  static createAccount(e) {
    const t = new V();
    t.add(
      ge.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId,
      })
    );
    const { stakePubkey: n, authorized: r, lockup: i } = e;
    return t.add(this.initialize({ stakePubkey: n, authorized: r, lockup: i }));
  }
  static delegate(e) {
    const { stakePubkey: t, authorizedPubkey: n, votePubkey: r } = e,
      i = ue.Delegate,
      o = F(i);
    return new V().add({
      keys: [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !1, isWritable: !1 },
        { pubkey: He, isSigner: !1, isWritable: !1 },
        { pubkey: sn, isSigner: !1, isWritable: !1 },
        { pubkey: zr, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: o,
    });
  }
  static authorize(e) {
    const {
        stakePubkey: t,
        authorizedPubkey: n,
        newAuthorizedPubkey: r,
        stakeAuthorizationType: i,
        custodianPubkey: o,
      } = e,
      a = ue.Authorize,
      c = F(a, { newAuthorized: D(r.toBuffer()), stakeAuthorizationType: i.index }),
      d = [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: He, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return (
      o && d.push({ pubkey: o, isSigner: !1, isWritable: !1 }),
      new V().add({ keys: d, programId: this.programId, data: c })
    );
  }
  static authorizeWithSeed(e) {
    const {
        stakePubkey: t,
        authorityBase: n,
        authoritySeed: r,
        authorityOwner: i,
        newAuthorizedPubkey: o,
        stakeAuthorizationType: a,
        custodianPubkey: c,
      } = e,
      d = ue.AuthorizeWithSeed,
      u = F(d, {
        newAuthorized: D(o.toBuffer()),
        stakeAuthorizationType: a.index,
        authoritySeed: r,
        authorityOwner: D(i.toBuffer()),
      }),
      l = [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
        { pubkey: He, isSigner: !1, isWritable: !1 },
      ];
    return (
      c && l.push({ pubkey: c, isSigner: !1, isWritable: !1 }),
      new V().add({ keys: l, programId: this.programId, data: u })
    );
  }
  static splitInstruction(e) {
    const { stakePubkey: t, authorizedPubkey: n, splitStakePubkey: r, lamports: i } = e,
      o = ue.Split,
      a = F(o, { lamports: i });
    return new J({
      keys: [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: a,
    });
  }
  static split(e) {
    const t = new V();
    return (
      t.add(
        ge.createAccount({
          fromPubkey: e.authorizedPubkey,
          newAccountPubkey: e.splitStakePubkey,
          lamports: 0,
          space: this.space,
          programId: this.programId,
        })
      ),
      t.add(this.splitInstruction(e))
    );
  }
  static splitWithSeed(e) {
    const {
        stakePubkey: t,
        authorizedPubkey: n,
        splitStakePubkey: r,
        basePubkey: i,
        seed: o,
        lamports: a,
      } = e,
      c = new V();
    return (
      c.add(
        ge.allocate({
          accountPubkey: r,
          basePubkey: i,
          seed: o,
          space: this.space,
          programId: this.programId,
        })
      ),
      c.add(
        this.splitInstruction({
          stakePubkey: t,
          authorizedPubkey: n,
          splitStakePubkey: r,
          lamports: a,
        })
      )
    );
  }
  static merge(e) {
    const { stakePubkey: t, sourceStakePubKey: n, authorizedPubkey: r } = e,
      i = ue.Merge,
      o = F(i);
    return new V().add({
      keys: [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !1, isWritable: !0 },
        { pubkey: He, isSigner: !1, isWritable: !1 },
        { pubkey: sn, isSigner: !1, isWritable: !1 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: o,
    });
  }
  static withdraw(e) {
    const { stakePubkey: t, authorizedPubkey: n, toPubkey: r, lamports: i, custodianPubkey: o } = e,
      a = ue.Withdraw,
      c = F(a, { lamports: i }),
      d = [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !1, isWritable: !0 },
        { pubkey: He, isSigner: !1, isWritable: !1 },
        { pubkey: sn, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return (
      o && d.push({ pubkey: o, isSigner: !1, isWritable: !1 }),
      new V().add({ keys: d, programId: this.programId, data: c })
    );
  }
  static deactivate(e) {
    const { stakePubkey: t, authorizedPubkey: n } = e,
      r = ue.Deactivate,
      i = F(r);
    return new V().add({
      keys: [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: He, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: i,
    });
  }
}
wn.programId = new w('Stake11111111111111111111111111111111111111');
wn.space = 200;
class Mr {
  constructor(e, t, n, r) {
    (this.nodePubkey = void 0),
      (this.authorizedVoter = void 0),
      (this.authorizedWithdrawer = void 0),
      (this.commission = void 0),
      (this.nodePubkey = e),
      (this.authorizedVoter = t),
      (this.authorizedWithdrawer = n),
      (this.commission = r);
  }
}
class Nc {
  constructor() {}
  static decodeInstructionType(e) {
    this.checkProgramId(e.programId);
    const n = R('instruction').decode(e.data);
    let r;
    for (const [i, o] of Object.entries(Qe))
      if (o.index == n) {
        r = i;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a VoteInstruction');
    return r;
  }
  static decodeInitializeAccount(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
    const { voteInit: t } = q(Qe.InitializeAccount, e.data);
    return {
      votePubkey: e.keys[0].pubkey,
      nodePubkey: e.keys[3].pubkey,
      voteInit: new Mr(
        new w(t.nodePubkey),
        new w(t.authorizedVoter),
        new w(t.authorizedWithdrawer),
        t.commission
      ),
    };
  }
  static decodeAuthorize(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const { newAuthorized: t, voteAuthorizationType: n } = q(Qe.Authorize, e.data);
    return {
      votePubkey: e.keys[0].pubkey,
      authorizedPubkey: e.keys[2].pubkey,
      newAuthorizedPubkey: new w(t),
      voteAuthorizationType: { index: n },
    };
  }
  static decodeAuthorizeWithSeed(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey: t,
        currentAuthorityDerivedKeySeed: n,
        newAuthorized: r,
        voteAuthorizationType: i,
      },
    } = q(Qe.AuthorizeWithSeed, e.data);
    return {
      currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
      currentAuthorityDerivedKeyOwnerPubkey: new w(t),
      currentAuthorityDerivedKeySeed: n,
      newAuthorizedPubkey: new w(r),
      voteAuthorizationType: { index: i },
      votePubkey: e.keys[0].pubkey,
    };
  }
  static decodeWithdraw(e) {
    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
    const { lamports: t } = q(Qe.Withdraw, e.data);
    return {
      votePubkey: e.keys[0].pubkey,
      authorizedWithdrawerPubkey: e.keys[2].pubkey,
      lamports: t,
      toPubkey: e.keys[1].pubkey,
    };
  }
  static checkProgramId(e) {
    if (!e.equals(Bt.programId))
      throw new Error('invalid instruction; programId is not VoteProgram');
  }
  static checkKeyLength(e, t) {
    if (e.length < t)
      throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
  }
}
const Qe = Object.freeze({
    InitializeAccount: { index: 0, layout: I([R('instruction'), Uo()]) },
    Authorize: {
      index: 1,
      layout: I([R('instruction'), M('newAuthorized'), R('voteAuthorizationType')]),
    },
    Withdraw: { index: 3, layout: I([R('instruction'), Be('lamports')]) },
    AuthorizeWithSeed: { index: 10, layout: I([R('instruction'), Ko()]) },
  }),
  Lc = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
class Bt {
  constructor() {}
  static initializeAccount(e) {
    const { votePubkey: t, nodePubkey: n, voteInit: r } = e,
      i = Qe.InitializeAccount,
      o = F(i, {
        voteInit: {
          nodePubkey: D(r.nodePubkey.toBuffer()),
          authorizedVoter: D(r.authorizedVoter.toBuffer()),
          authorizedWithdrawer: D(r.authorizedWithdrawer.toBuffer()),
          commission: r.commission,
        },
      }),
      a = {
        keys: [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: vt, isSigner: !1, isWritable: !1 },
          { pubkey: He, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: o,
      };
    return new J(a);
  }
  static createAccount(e) {
    const t = new V();
    return (
      t.add(
        ge.createAccount({
          fromPubkey: e.fromPubkey,
          newAccountPubkey: e.votePubkey,
          lamports: e.lamports,
          space: this.space,
          programId: this.programId,
        })
      ),
      t.add(
        this.initializeAccount({
          votePubkey: e.votePubkey,
          nodePubkey: e.voteInit.nodePubkey,
          voteInit: e.voteInit,
        })
      )
    );
  }
  static authorize(e) {
    const {
        votePubkey: t,
        authorizedPubkey: n,
        newAuthorizedPubkey: r,
        voteAuthorizationType: i,
      } = e,
      o = Qe.Authorize,
      a = F(o, { newAuthorized: D(r.toBuffer()), voteAuthorizationType: i.index }),
      c = [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: He, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return new V().add({ keys: c, programId: this.programId, data: a });
  }
  static authorizeWithSeed(e) {
    const {
        currentAuthorityDerivedKeyBasePubkey: t,
        currentAuthorityDerivedKeyOwnerPubkey: n,
        currentAuthorityDerivedKeySeed: r,
        newAuthorizedPubkey: i,
        voteAuthorizationType: o,
        votePubkey: a,
      } = e,
      c = Qe.AuthorizeWithSeed,
      d = F(c, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: D(n.toBuffer()),
          currentAuthorityDerivedKeySeed: r,
          newAuthorized: D(i.toBuffer()),
          voteAuthorizationType: o.index,
        },
      }),
      u = [
        { pubkey: a, isSigner: !1, isWritable: !0 },
        { pubkey: He, isSigner: !1, isWritable: !1 },
        { pubkey: t, isSigner: !0, isWritable: !1 },
      ];
    return new V().add({ keys: u, programId: this.programId, data: d });
  }
  static withdraw(e) {
    const { votePubkey: t, authorizedWithdrawerPubkey: n, lamports: r, toPubkey: i } = e,
      o = Qe.Withdraw,
      a = F(o, { lamports: r }),
      c = [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: i, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return new V().add({ keys: c, programId: this.programId, data: a });
  }
  static safeWithdraw(e, t, n) {
    if (e.lamports > t - n)
      throw new Error('Withdraw will leave vote account with insuffcient funds.');
    return Bt.withdraw(e);
  }
}
Bt.programId = new w('Vote111111111111111111111111111111111111111');
Bt.space = 3731;
const Hr = new w('Va1idator1nfo111111111111111111111111111111'),
  Oc = p({ name: m(), website: L(m()), details: L(m()), keybaseUsername: L(m()) });
class bs {
  constructor(e, t) {
    (this.key = void 0), (this.info = void 0), (this.key = e), (this.info = t);
  }
  static fromConfigData(e) {
    let t = [...e];
    if (Ae(t) !== 2) return null;
    const r = [];
    for (let i = 0; i < 2; i++) {
      const o = new w(_e(t, 0, qe)),
        a = Fe(t) === 1;
      r.push({ publicKey: o, isSigner: a });
    }
    if (r[0].publicKey.equals(Hr) && r[1].isSigner) {
      const i = gt().decode(B.from(t)),
        o = JSON.parse(i);
      return ri(o, Oc), new bs(r[1].publicKey, o);
    }
    return null;
  }
}
const Cc = new w('Vote111111111111111111111111111111111111111'),
  Uc = I([
    M('nodePubkey'),
    M('authorizedWithdrawer'),
    G('commission'),
    ye(),
    be(I([ye('slot'), R('confirmationCount')]), yt(R(), -8), 'votes'),
    G('rootSlotValid'),
    ye('rootSlot'),
    ye(),
    be(I([ye('epoch'), M('authorizedVoter')]), yt(R(), -8), 'authorizedVoters'),
    I(
      [
        be(
          I([M('authorizedPubkey'), ye('epochOfLastAuthorizedSwitch'), ye('targetEpoch')]),
          32,
          'buf'
        ),
        ye('idx'),
        G('isEmpty'),
      ],
      'priorVoters'
    ),
    ye(),
    be(I([ye('epoch'), ye('credits'), ye('prevCredits')]), yt(R(), -8), 'epochCredits'),
    I([ye('slot'), ye('timestamp')], 'lastTimestamp'),
  ]);
class ps {
  constructor(e) {
    (this.nodePubkey = void 0),
      (this.authorizedWithdrawer = void 0),
      (this.commission = void 0),
      (this.rootSlot = void 0),
      (this.votes = void 0),
      (this.authorizedVoters = void 0),
      (this.priorVoters = void 0),
      (this.epochCredits = void 0),
      (this.lastTimestamp = void 0),
      (this.nodePubkey = e.nodePubkey),
      (this.authorizedWithdrawer = e.authorizedWithdrawer),
      (this.commission = e.commission),
      (this.rootSlot = e.rootSlot),
      (this.votes = e.votes),
      (this.authorizedVoters = e.authorizedVoters),
      (this.priorVoters = e.priorVoters),
      (this.epochCredits = e.epochCredits),
      (this.lastTimestamp = e.lastTimestamp);
  }
  static fromAccountData(e) {
    const n = Uc.decode(D(e), 4);
    let r = n.rootSlot;
    return (
      n.rootSlotValid || (r = null),
      new ps({
        nodePubkey: new w(n.nodePubkey),
        authorizedWithdrawer: new w(n.authorizedWithdrawer),
        commission: n.commission,
        votes: n.votes,
        rootSlot: r,
        authorizedVoters: n.authorizedVoters.map(Kc),
        priorVoters: Dc(n.priorVoters),
        epochCredits: n.epochCredits,
        lastTimestamp: n.lastTimestamp,
      })
    );
  }
}
function Kc({ authorizedVoter: s, epoch: e }) {
  return { epoch: e, authorizedVoter: new w(s) };
}
function Gs({ authorizedPubkey: s, epochOfLastAuthorizedSwitch: e, targetEpoch: t }) {
  return { authorizedPubkey: new w(s), epochOfLastAuthorizedSwitch: e, targetEpoch: t };
}
function Dc({ buf: s, idx: e, isEmpty: t }) {
  return t ? [] : [...s.slice(e + 1).map(Gs), ...s.slice(0, e).map(Gs)];
}
const qs = {
  http: {
    devnet: 'http://api.devnet.solana.com',
    testnet: 'http://api.testnet.solana.com',
    'mainnet-beta': 'http://api.mainnet-beta.solana.com/',
  },
  https: {
    devnet: 'https://api.devnet.solana.com',
    testnet: 'https://api.testnet.solana.com',
    'mainnet-beta': 'https://api.mainnet-beta.solana.com/',
  },
};
function zc(s, e) {
  const t = e === !1 ? 'http' : 'https';
  if (!s) return qs[t].devnet;
  const n = qs[t][s];
  if (!n) throw new Error(`Unknown ${t} cluster: ${s}`);
  return n;
}
async function Wc(s, e, t, n) {
  let r, i;
  (t && Object.prototype.hasOwnProperty.call(t, 'lastValidBlockHeight')) ||
  (t && Object.prototype.hasOwnProperty.call(t, 'nonceValue'))
    ? ((r = t), (i = n))
    : (i = t);
  const o = i && {
      skipPreflight: i.skipPreflight,
      preflightCommitment: i.preflightCommitment || i.commitment,
      minContextSlot: i.minContextSlot,
    },
    a = await s.sendRawTransaction(e, o),
    c = i && i.commitment,
    u = (await (r ? s.confirmTransaction(r, c) : s.confirmTransaction(a, c))).value;
  if (u.err) throw new Error(`Raw transaction ${a} failed (${JSON.stringify(u)})`);
  return a;
}
const Mc = 1e9,
  Hc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Account: Bo,
        AddressLookupTableAccount: Vn,
        AddressLookupTableInstruction: Rc,
        AddressLookupTableProgram: gs,
        Authorized: Wr,
        BLOCKHASH_CACHE_TIMEOUT_MS: xr,
        BPF_LOADER_DEPRECATED_PROGRAM_ID: No,
        BPF_LOADER_PROGRAM_ID: jo,
        BpfLoader: Xo,
        COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: $e,
        ComputeBudgetInstruction: Ec,
        ComputeBudgetProgram: ys,
        Connection: Ic,
        Ed25519Program: mn,
        Enum: xo,
        EpochSchedule: Pr,
        FeeCalculatorLayout: Rr,
        Keypair: Et,
        LAMPORTS_PER_SOL: Mc,
        LOOKUP_TABLE_INSTRUCTION_LAYOUTS: Ze,
        Loader: pt,
        Lockup: qt,
        MAX_SEED_LENGTH: Ar,
        Message: De,
        MessageAccountKeys: $t,
        MessageV0: bt,
        NONCE_ACCOUNT_LENGTH: Gn,
        NonceAccount: yn,
        PACKET_DATA_SIZE: ct,
        PUBLIC_KEY_LENGTH: qe,
        PublicKey: w,
        SIGNATURE_LENGTH_IN_BYTES: Ft,
        SOLANA_SCHEMA: zt,
        STAKE_CONFIG_ID: zr,
        STAKE_INSTRUCTION_LAYOUTS: ue,
        SYSTEM_INSTRUCTION_LAYOUTS: Z,
        SYSVAR_CLOCK_PUBKEY: He,
        SYSVAR_EPOCH_SCHEDULE_PUBKEY: zo,
        SYSVAR_INSTRUCTIONS_PUBKEY: Wo,
        SYSVAR_RECENT_BLOCKHASHES_PUBKEY: nn,
        SYSVAR_RENT_PUBKEY: vt,
        SYSVAR_REWARDS_PUBKEY: Mo,
        SYSVAR_SLOT_HASHES_PUBKEY: Ho,
        SYSVAR_SLOT_HISTORY_PUBKEY: Fo,
        SYSVAR_STAKE_HISTORY_PUBKEY: sn,
        Secp256k1Program: Pt,
        SendTransactionError: qn,
        SolanaJSONRPCError: E,
        SolanaJSONRPCErrorCode: ta,
        StakeAuthorizationLayout: Bc,
        StakeInstruction: Tc,
        StakeProgram: wn,
        Struct: is,
        SystemInstruction: qo,
        SystemProgram: ge,
        Transaction: V,
        TransactionExpiredBlockheightExceededError: os,
        TransactionExpiredNonceInvalidError: It,
        TransactionExpiredTimeoutError: as,
        TransactionInstruction: J,
        TransactionMessage: us,
        get TransactionStatus() {
          return Ce;
        },
        VALIDATOR_INFO_KEY: Hr,
        VERSION_PREFIX_MASK: fn,
        VOTE_PROGRAM_ID: Cc,
        ValidatorInfo: bs,
        VersionedMessage: cs,
        VersionedTransaction: ls,
        VoteAccount: ps,
        VoteAuthorizationLayout: Lc,
        VoteInit: Mr,
        VoteInstruction: Nc,
        VoteProgram: Bt,
        clusterApiUrl: zc,
        sendAndConfirmRawTransaction: Wc,
        sendAndConfirmTransaction: rn,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Jt = tr(Hc);
var Fc = {},
  kn = {};
const $c = tr(ki);
var Q = {};
Object.defineProperty(Q, '__esModule', { value: !0 });
Q.MULTIPLE_ACCOUNT_INFO_MAX =
  Q.NAME_HOUSE_PREFIX =
  Q.TLD_HOUSE_PREFIX =
  Q.NFT_RECORD_PREFIX =
  Q.TOKEN_METADATA_PROGRAM_ID =
  Q.SPL_TOKEN_PROGRAM_ID =
  Q.NAME_HOUSE_PROGRAM_ID =
  Q.TLD_HOUSE_PROGRAM_ID =
  Q.ANS_PROGRAM_ID =
  Q.ORIGIN_TLD =
  Q.MAIN_DOMAIN_PREFIX =
    void 0;
const Yt = Jt;
Q.MAIN_DOMAIN_PREFIX = 'main_domain';
Q.ORIGIN_TLD = 'ANS';
Q.ANS_PROGRAM_ID = new Yt.PublicKey('ALTNSZ46uaAUU7XUV6awvdorLGqAsPwa9shm7h4uP2FK');
Q.TLD_HOUSE_PROGRAM_ID = new Yt.PublicKey('TLDHkysf5pCnKsVA4gXpNvmy7psXLPEu4LAdDJthT9S');
Q.NAME_HOUSE_PROGRAM_ID = new Yt.PublicKey('NH3uX6FtVE2fNREAioP7hm5RaozotZxeL6khU1EHx51');
Q.SPL_TOKEN_PROGRAM_ID = new Yt.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
Q.TOKEN_METADATA_PROGRAM_ID = new Yt.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
Q.NFT_RECORD_PREFIX = 'nft_record';
Q.TLD_HOUSE_PREFIX = 'tld_house';
Q.NAME_HOUSE_PREFIX = 'name_house';
Q.MULTIPLE_ACCOUNT_INFO_MAX = 100;
var Nt = {},
  le = {},
  Gc =
    (x && x.__createBinding) ||
    (Object.create
      ? function (s, e, t, n) {
          n === void 0 && (n = t),
            Object.defineProperty(s, n, {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            });
        }
      : function (s, e, t, n) {
          n === void 0 && (n = t), (s[n] = e[t]);
        }),
  qc =
    (x && x.__setModuleDefault) ||
    (Object.create
      ? function (s, e) {
          Object.defineProperty(s, 'default', { enumerable: !0, value: e });
        }
      : function (s, e) {
          s.default = e;
        }),
  Xe =
    (x && x.__decorate) ||
    function (s, e, t, n) {
      var r = arguments.length,
        i = r < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
        o;
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        i = Reflect.decorate(s, e, t, n);
      else
        for (var a = s.length - 1; a >= 0; a--)
          (o = s[a]) && (i = (r < 3 ? o(i) : r > 3 ? o(e, t, i) : o(e, t)) || i);
      return r > 3 && i && Object.defineProperty(e, t, i), i;
    },
  Vc =
    (x && x.__importStar) ||
    function (s) {
      if (s && s.__esModule) return s;
      var e = {};
      if (s != null)
        for (var t in s) t !== 'default' && Object.hasOwnProperty.call(s, t) && Gc(e, s, t);
      return qc(e, s), e;
    },
  Fr =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
Object.defineProperty(le, '__esModule', { value: !0 });
le.deserializeUnchecked =
  le.deserialize =
  le.serialize =
  le.BinaryReader =
  le.BinaryWriter =
  le.BorshError =
  le.baseDecode =
  le.baseEncode =
    void 0;
const at = Fr(ln()),
  $r = Fr(Xs),
  jc = Vc(Js),
  Xc = typeof globalThis.TextDecoder != 'function' ? jc.TextDecoder : globalThis.TextDecoder,
  Jc = new Xc('utf-8', { fatal: !0 });
function Yc(s) {
  return typeof s == 'string' && (s = U.from(s, 'utf8')), $r.default.encode(U.from(s));
}
le.baseEncode = Yc;
function Zc(s) {
  return U.from($r.default.decode(s));
}
le.baseDecode = Zc;
const Kn = 1024;
class Se extends Error {
  constructor(e) {
    super(e), (this.fieldPath = []), (this.originalMessage = e);
  }
  addToFieldPath(e) {
    this.fieldPath.splice(0, 0, e),
      (this.message = this.originalMessage + ': ' + this.fieldPath.join('.'));
  }
}
le.BorshError = Se;
class Gr {
  constructor() {
    (this.buf = U.alloc(Kn)), (this.length = 0);
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = U.concat([this.buf, U.alloc(Kn)]));
  }
  writeU8(e) {
    this.maybeResize(), this.buf.writeUInt8(e, this.length), (this.length += 1);
  }
  writeU16(e) {
    this.maybeResize(), this.buf.writeUInt16LE(e, this.length), (this.length += 2);
  }
  writeU32(e) {
    this.maybeResize(), this.buf.writeUInt32LE(e, this.length), (this.length += 4);
  }
  writeU64(e) {
    this.maybeResize(), this.writeBuffer(U.from(new at.default(e).toArray('le', 8)));
  }
  writeU128(e) {
    this.maybeResize(), this.writeBuffer(U.from(new at.default(e).toArray('le', 16)));
  }
  writeU256(e) {
    this.maybeResize(), this.writeBuffer(U.from(new at.default(e).toArray('le', 32)));
  }
  writeU512(e) {
    this.maybeResize(), this.writeBuffer(U.from(new at.default(e).toArray('le', 64)));
  }
  writeBuffer(e) {
    (this.buf = U.concat([U.from(this.buf.subarray(0, this.length)), e, U.alloc(Kn)])),
      (this.length += e.length);
  }
  writeString(e) {
    this.maybeResize();
    const t = U.from(e, 'utf8');
    this.writeU32(t.length), this.writeBuffer(t);
  }
  writeFixedArray(e) {
    this.writeBuffer(U.from(e));
  }
  writeArray(e, t) {
    this.maybeResize(), this.writeU32(e.length);
    for (const n of e) this.maybeResize(), t(n);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
}
le.BinaryWriter = Gr;
function Je(s, e, t) {
  const n = t.value;
  t.value = function (...r) {
    try {
      return n.apply(this, r);
    } catch (i) {
      if (i instanceof RangeError) {
        const o = i.code;
        if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(o) >= 0)
          throw new Se('Reached the end of buffer when deserializing');
      }
      throw i;
    }
  };
}
class xe {
  constructor(e) {
    (this.buf = e), (this.offset = 0);
  }
  readU8() {
    const e = this.buf.readUInt8(this.offset);
    return (this.offset += 1), e;
  }
  readU16() {
    const e = this.buf.readUInt16LE(this.offset);
    return (this.offset += 2), e;
  }
  readU32() {
    const e = this.buf.readUInt32LE(this.offset);
    return (this.offset += 4), e;
  }
  readU64() {
    const e = this.readBuffer(8);
    return new at.default(e, 'le');
  }
  readU128() {
    const e = this.readBuffer(16);
    return new at.default(e, 'le');
  }
  readU256() {
    const e = this.readBuffer(32);
    return new at.default(e, 'le');
  }
  readU512() {
    const e = this.readBuffer(64);
    return new at.default(e, 'le');
  }
  readBuffer(e) {
    if (this.offset + e > this.buf.length)
      throw new Se(`Expected buffer length ${e} isn't within bounds`);
    const t = this.buf.slice(this.offset, this.offset + e);
    return (this.offset += e), t;
  }
  readString() {
    const e = this.readU32(),
      t = this.readBuffer(e);
    try {
      return Jc.decode(t);
    } catch (n) {
      throw new Se(`Error decoding UTF-8 string: ${n}`);
    }
  }
  readFixedArray(e) {
    return new Uint8Array(this.readBuffer(e));
  }
  readArray(e) {
    const t = this.readU32(),
      n = Array();
    for (let r = 0; r < t; ++r) n.push(e());
    return n;
  }
}
Xe([Je], xe.prototype, 'readU8', null);
Xe([Je], xe.prototype, 'readU16', null);
Xe([Je], xe.prototype, 'readU32', null);
Xe([Je], xe.prototype, 'readU64', null);
Xe([Je], xe.prototype, 'readU128', null);
Xe([Je], xe.prototype, 'readU256', null);
Xe([Je], xe.prototype, 'readU512', null);
Xe([Je], xe.prototype, 'readString', null);
Xe([Je], xe.prototype, 'readFixedArray', null);
Xe([Je], xe.prototype, 'readArray', null);
le.BinaryReader = xe;
function qr(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function Wt(s, e, t, n, r) {
  try {
    if (typeof n == 'string') r[`write${qr(n)}`](t);
    else if (n instanceof Array)
      if (typeof n[0] == 'number') {
        if (t.length !== n[0])
          throw new Se(`Expecting byte array of length ${n[0]}, but got ${t.length} bytes`);
        r.writeFixedArray(t);
      } else if (n.length === 2 && typeof n[1] == 'number') {
        if (t.length !== n[1])
          throw new Se(`Expecting byte array of length ${n[1]}, but got ${t.length} bytes`);
        for (let i = 0; i < n[1]; i++) Wt(s, null, t[i], n[0], r);
      } else
        r.writeArray(t, (i) => {
          Wt(s, e, i, n[0], r);
        });
    else if (n.kind !== void 0)
      switch (n.kind) {
        case 'option': {
          t == null ? r.writeU8(0) : (r.writeU8(1), Wt(s, e, t, n.type, r));
          break;
        }
        default:
          throw new Se(`FieldType ${n} unrecognized`);
      }
    else Vr(s, t, r);
  } catch (i) {
    throw (i instanceof Se && i.addToFieldPath(e), i);
  }
}
function Vr(s, e, t) {
  if (typeof e.borshSerialize == 'function') {
    e.borshSerialize(t);
    return;
  }
  const n = s.get(e.constructor);
  if (!n) throw new Se(`Class ${e.constructor.name} is missing in schema`);
  if (n.kind === 'struct')
    n.fields.map(([r, i]) => {
      Wt(s, r, e[r], i, t);
    });
  else if (n.kind === 'enum') {
    const r = e[n.field];
    for (let i = 0; i < n.values.length; ++i) {
      const [o, a] = n.values[i];
      if (o === r) {
        t.writeU8(i), Wt(s, o, e[o], a, t);
        break;
      }
    }
  } else throw new Se(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
}
function Qc(s, e, t = Gr) {
  const n = new t();
  return Vr(s, e, n), n.toArray();
}
le.serialize = Qc;
function Mt(s, e, t, n) {
  try {
    if (typeof t == 'string') return n[`read${qr(t)}`]();
    if (t instanceof Array) {
      if (typeof t[0] == 'number') return n.readFixedArray(t[0]);
      if (typeof t[1] == 'number') {
        const r = [];
        for (let i = 0; i < t[1]; i++) r.push(Mt(s, null, t[0], n));
        return r;
      } else return n.readArray(() => Mt(s, e, t[0], n));
    }
    return t.kind === 'option' ? (n.readU8() ? Mt(s, e, t.type, n) : void 0) : ms(s, t, n);
  } catch (r) {
    throw (r instanceof Se && r.addToFieldPath(e), r);
  }
}
function ms(s, e, t) {
  if (typeof e.borshDeserialize == 'function') return e.borshDeserialize(t);
  const n = s.get(e);
  if (!n) throw new Se(`Class ${e.name} is missing in schema`);
  if (n.kind === 'struct') {
    const r = {};
    for (const [i, o] of s.get(e).fields) r[i] = Mt(s, i, o, t);
    return new e(r);
  }
  if (n.kind === 'enum') {
    const r = t.readU8();
    if (r >= n.values.length) throw new Se(`Enum index: ${r} is out of range`);
    const [i, o] = n.values[r],
      a = Mt(s, i, o, t);
    return new e({ [i]: a });
  }
  throw new Se(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
}
function eu(s, e, t, n = xe) {
  const r = new n(t),
    i = ms(s, e, r);
  if (r.offset < t.length)
    throw new Se(`Unexpected ${t.length - r.offset} bytes after deserialized data`);
  return i;
}
le.deserialize = eu;
function tu(s, e, t, n = xe) {
  const r = new n(t);
  return ms(s, e, r);
}
le.deserializeUnchecked = tu;
var Vs =
  (x && x.__awaiter) ||
  function (s, e, t, n) {
    function r(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          d(n.next(u));
        } catch (l) {
          o(l);
        }
      }
      function c(u) {
        try {
          d(n.throw(u));
        } catch (l) {
          o(l);
        }
      }
      function d(u) {
        u.done ? i(u.value) : r(u.value).then(a, c);
      }
      d((n = n.apply(s, e || [])).next());
    });
  };
Object.defineProperty(Nt, '__esModule', { value: !0 });
Nt.NameRecordHeader = void 0;
const Dn = Jt,
  Kt = le;
class ut {
  constructor(e) {
    (this.parentName = new Dn.PublicKey(e.parentName)),
      (this.nclass = new Dn.PublicKey(e.nclass)),
      (this.expiresAt = new Date(
        new Kt.BinaryReader(U.from(e.expiresAt)).readU64().toNumber() * 1e3
      )),
      (this.createdAt = new Date(
        new Kt.BinaryReader(U.from(e.createdAt)).readU64().toNumber() * 1e3
      )),
      (this.nonTransferable = e.nonTransferable[0] !== 0);
    const t = 45 * 24 * 60 * 60 * 1e3;
    (this.isValid =
      new Kt.BinaryReader(U.from(e.expiresAt)).readU64().toNumber() === 0
        ? !0
        : this.expiresAt.getTime() + t > new Date(Date.now()).getTime()),
      (this.owner = this.isValid ? new Dn.PublicKey(e.owner) : void 0);
  }
  static get byteSize() {
    return 200;
  }
  static fromAccountAddress(e, t) {
    var n;
    return Vs(this, void 0, void 0, function* () {
      const r = yield e.getAccountInfo(t, 'confirmed');
      if (!r) return;
      const i = (0, Kt.deserializeUnchecked)(this.schema, ut, r.data);
      return (
        (i.data = (n = r.data) === null || n === void 0 ? void 0 : n.subarray(this.byteSize)), i
      );
    });
  }
  static fromMultipileAccountAddresses(e, t) {
    return Vs(this, void 0, void 0, function* () {
      let n = yield e.getMultipleAccountsInfo(t),
        r = [];
      return (
        n.forEach((i) => {
          if (!i) {
            r.push(void 0);
            return;
          }
          let o = this.fromAccountInfo(i);
          if (!o) {
            r.push(void 0);
            return;
          }
          r.push(o);
        }),
        r
      );
    });
  }
  static fromAccountInfo(e) {
    var t;
    const n = (0, Kt.deserializeUnchecked)(this.schema, ut, e.data);
    return (n.data = (t = e.data) === null || t === void 0 ? void 0 : t.subarray(this.byteSize)), n;
  }
  pretty() {
    var e;
    const t = this.data.indexOf(0);
    return {
      parentName: this.parentName.toBase58(),
      owner: (e = this.owner) === null || e === void 0 ? void 0 : e.toBase58(),
      nclass: this.nclass.toBase58(),
      expiresAt: this.expiresAt,
      createdAt: this.createdAt,
      nonTransferable: this.nonTransferable,
      isValid: this.isValid,
      data: this.isValid ? this.data.subarray(0, t).toString() : void 0,
    };
  }
}
Nt.NameRecordHeader = ut;
ut.DISCRIMINATOR = [68, 72, 88, 44, 15, 167, 103, 243];
ut.HASH_PREFIX = 'ALT Name Service';
ut.schema = new Map([
  [
    ut,
    {
      kind: 'struct',
      fields: [
        ['discriminator', [8]],
        ['parentName', [32]],
        ['owner', [32]],
        ['nclass', [32]],
        ['expiresAt', [8]],
        ['createdAt', [8]],
        ['nonTransferable', [1]],
        ['padding', [79]],
      ],
    },
  ],
]);
var ws = {};
(function (s) {
  var e =
      (x && x.__createBinding) ||
      (Object.create
        ? function (o, a, c, d) {
            d === void 0 && (d = c);
            var u = Object.getOwnPropertyDescriptor(a, c);
            (!u || ('get' in u ? !a.__esModule : u.writable || u.configurable)) &&
              (u = {
                enumerable: !0,
                get: function () {
                  return a[c];
                },
              }),
              Object.defineProperty(o, d, u);
          }
        : function (o, a, c, d) {
            d === void 0 && (d = c), (o[d] = a[c]);
          }),
    t =
      (x && x.__setModuleDefault) ||
      (Object.create
        ? function (o, a) {
            Object.defineProperty(o, 'default', { enumerable: !0, value: a });
          }
        : function (o, a) {
            o.default = a;
          }),
    n =
      (x && x.__importStar) ||
      function (o) {
        if (o && o.__esModule) return o;
        var a = {};
        if (o != null)
          for (var c in o)
            c !== 'default' && Object.prototype.hasOwnProperty.call(o, c) && e(a, o, c);
        return t(a, o), a;
      };
  Object.defineProperty(s, '__esModule', { value: !0 }), (s.tagBeet = s.Tag = void 0);
  const r = n(es);
  var i;
  (function (o) {
    (o[(o.Uninitialized = 0)] = 'Uninitialized'),
      (o[(o.ActiveRecord = 1)] = 'ActiveRecord'),
      (o[(o.InactiveRecord = 2)] = 'InactiveRecord');
  })((i = s.Tag || (s.Tag = {}))),
    (s.tagBeet = r.fixedScalarEnum(i));
})(ws);
var ks = {};
(function (s) {
  var e =
      (x && x.__createBinding) ||
      (Object.create
        ? function (d, u, l, g) {
            g === void 0 && (g = l);
            var f = Object.getOwnPropertyDescriptor(u, l);
            (!f || ('get' in f ? !u.__esModule : f.writable || f.configurable)) &&
              (f = {
                enumerable: !0,
                get: function () {
                  return u[l];
                },
              }),
              Object.defineProperty(d, g, f);
          }
        : function (d, u, l, g) {
            g === void 0 && (g = l), (d[g] = u[l]);
          }),
    t =
      (x && x.__setModuleDefault) ||
      (Object.create
        ? function (d, u) {
            Object.defineProperty(d, 'default', { enumerable: !0, value: u });
          }
        : function (d, u) {
            d.default = u;
          }),
    n =
      (x && x.__importStar) ||
      function (d) {
        if (d && d.__esModule) return d;
        var u = {};
        if (d != null)
          for (var l in d)
            l !== 'default' && Object.prototype.hasOwnProperty.call(d, l) && e(u, d, l);
        return t(u, d), u;
      },
    r =
      (x && x.__awaiter) ||
      function (d, u, l, g) {
        function f(b) {
          return b instanceof l
            ? b
            : new l(function (y) {
                y(b);
              });
        }
        return new (l || (l = Promise))(function (b, y) {
          function k(T) {
            try {
              W(g.next(T));
            } catch (j) {
              y(j);
            }
          }
          function v(T) {
            try {
              W(g.throw(T));
            } catch (j) {
              y(j);
            }
          }
          function W(T) {
            T.done ? b(T.value) : f(T.value).then(k, v);
          }
          W((g = g.apply(d, u || [])).next());
        });
      };
  Object.defineProperty(s, '__esModule', { value: !0 }),
    (s.nftRecordBeet = s.NftRecord = s.nftRecordDiscriminator = void 0);
  const i = n(es),
    o = n(er),
    a = ws;
  s.nftRecordDiscriminator = [174, 190, 114, 100, 177, 14, 90, 254];
  class c {
    constructor(u, l, g, f, b, y) {
      (this.tag = u),
        (this.bump = l),
        (this.nameAccount = g),
        (this.owner = f),
        (this.nftMintAccount = b),
        (this.tldHouse = y);
    }
    static fromArgs(u) {
      return new c(u.tag, u.bump, u.nameAccount, u.owner, u.nftMintAccount, u.tldHouse);
    }
    static fromAccountInfo(u, l = 0) {
      return c.deserialize(u.data, l);
    }
    static fromAccountAddress(u, l) {
      return r(this, void 0, void 0, function* () {
        const g = yield u.getAccountInfo(l);
        if (g == null) throw new Error(`Unable to find NftRecord account at ${l}`);
        return c.fromAccountInfo(g, 0)[0];
      });
    }
    static deserialize(u, l = 0) {
      return s.nftRecordBeet.deserialize(u, l);
    }
    serialize() {
      return s.nftRecordBeet.serialize(
        Object.assign({ accountDiscriminator: s.nftRecordDiscriminator }, this)
      );
    }
    static get byteSize() {
      return s.nftRecordBeet.byteSize;
    }
    static getMinimumBalanceForRentExemption(u, l) {
      return r(this, void 0, void 0, function* () {
        return yield u.getMinimumBalanceForRentExemption(c.byteSize, l);
      });
    }
    static hasCorrectByteSize(u, l = 0) {
      return u.byteLength - l === c.byteSize;
    }
    pretty() {
      return {
        tag: 'Tag.' + a.Tag[this.tag],
        bump: this.bump,
        nameAccount: this.nameAccount.toBase58(),
        owner: this.owner.toBase58(),
        nftMintAccount: this.nftMintAccount.toBase58(),
        tldHouse: this.tldHouse.toBase58(),
      };
    }
  }
  (s.NftRecord = c),
    (s.nftRecordBeet = new i.BeetStruct(
      [
        ['accountDiscriminator', i.uniformFixedSizeArray(i.u8, 8)],
        ['tag', a.tagBeet],
        ['bump', i.u8],
        ['nameAccount', o.publicKey],
        ['owner', o.publicKey],
        ['nftMintAccount', o.publicKey],
        ['tldHouse', o.publicKey],
      ],
      c.fromArgs,
      'NftRecord'
    ));
})(ks);
(function (s) {
  var e =
    (x && x.__awaiter) ||
    function (P, N, K, H) {
      function Y(pe) {
        return pe instanceof K
          ? pe
          : new K(function (X) {
              X(pe);
            });
      }
      return new (K || (K = Promise))(function (pe, X) {
        function ce(de) {
          try {
            me(H.next(de));
          } catch (Te) {
            X(Te);
          }
        }
        function ee(de) {
          try {
            me(H.throw(de));
          } catch (Te) {
            X(Te);
          }
        }
        function me(de) {
          de.done ? pe(de.value) : Y(de.value).then(ce, ee);
        }
        me((H = H.apply(P, N || [])).next());
      });
    };
  Object.defineProperty(s, '__esModule', { value: !0 }),
    (s.splitDomainTld =
      s.getParsedAllDomainsNftAccountsByOwner =
      s.delay =
      s.performReverseLookupBatched =
      s.findMetadataAddress =
      s.findNameHouse =
      s.findTldHouse =
      s.findNftRecord =
      s.getMintOwner =
      s.findAllDomainsForTld =
      s.getParentAccountFromTldHouseAccountInfo =
      s.getTldFromTldHouseAccountInfo =
      s.getAllTld =
      s.findMainDomain =
      s.findOwnedNameAccountsForUser =
      s.getOriginNameAccountKey =
      s.getHashedName =
      s.getNameOwner =
      s.getNameAccountKeyWithBump =
        void 0);
  const t = Jt,
    n = ln(),
    r = $c,
    i = Q,
    o = Nt,
    a = ws,
    c = ks;
  function d(P, N, K) {
    const H = [P, N ? N.toBuffer() : U.alloc(32), K ? K.toBuffer() : U.alloc(32)];
    return t.PublicKey.findProgramAddressSync(H, i.ANS_PROGRAM_ID);
  }
  s.getNameAccountKeyWithBump = d;
  function u(P, N, K) {
    return e(this, void 0, void 0, function* () {
      const H = yield o.NameRecordHeader.fromAccountAddress(P, N),
        Y = H.owner;
      if (!H.isValid) return;
      if (!K) return Y;
      const [pe] = St(K),
        [X] = j(N, pe);
      return (Y == null ? void 0 : Y.toBase58()) !== X.toBase58() ? Y : yield T(P, X);
    });
  }
  s.getNameOwner = u;
  function l(P) {
    return e(this, void 0, void 0, function* () {
      const N = o.NameRecordHeader.HASH_PREFIX + P,
        K = (0, r.sha256)(U.from(N, 'utf8')).slice(2);
      return U.from(K, 'hex');
    });
  }
  s.getHashedName = l;
  function g(P = i.ORIGIN_TLD) {
    return e(this, void 0, void 0, function* () {
      const N = yield l(P),
        [K] = d(N, void 0, void 0);
      return K;
    });
  }
  s.getOriginNameAccountKey = g;
  function f(P, N, K) {
    return e(this, void 0, void 0, function* () {
      const H = [{ memcmp: { offset: 40, bytes: N.toBase58(), encoding: 'base58' } }];
      return (
        K && H.push({ memcmp: { offset: 8, bytes: K.toBase58(), encoding: 'base58' } }),
        (yield P.getProgramAccounts(i.ANS_PROGRAM_ID, { filters: H })).map((pe) => pe.pubkey)
      );
    });
  }
  s.findOwnedNameAccountsForUser = f;
  function b(P) {
    return t.PublicKey.findProgramAddressSync(
      [U.from(i.MAIN_DOMAIN_PREFIX), P.toBuffer()],
      i.TLD_HOUSE_PROGRAM_ID
    );
  }
  s.findMainDomain = b;
  function y(P) {
    return e(this, void 0, void 0, function* () {
      const K = [
          {
            memcmp: { offset: 0, bytes: [247, 144, 135, 1, 238, 173, 19, 249], encoding: 'binary' },
          },
        ],
        H = yield P.getProgramAccounts(i.TLD_HOUSE_PROGRAM_ID, { filters: K }),
        Y = [];
      return (
        H.map(({ account: pe }) => {
          const X = v(pe),
            ce = k(pe);
          Y.push({ tld: ce, parentAccount: X });
        }),
        Y
      );
    });
  }
  s.getAllTld = y;
  function k(P) {
    var N;
    const H = (N = P == null ? void 0 : P.data) === null || N === void 0 ? void 0 : N.subarray(104),
      Y = new n.BN(H == null ? void 0 : H.subarray(0, 4), 'le').toNumber();
    return H.subarray(4, 4 + Y)
      .toString()
      .replace(/\0.*$/g, '');
  }
  s.getTldFromTldHouseAccountInfo = k;
  function v(P) {
    var N;
    const H =
      (N = P == null ? void 0 : P.data) === null || N === void 0 ? void 0 : N.subarray(72, 104);
    return new t.PublicKey(H);
  }
  s.getParentAccountFromTldHouseAccountInfo = v;
  function W(P, N) {
    return e(this, void 0, void 0, function* () {
      const K = [{ memcmp: { offset: 8, bytes: N.toBase58(), encoding: 'base58' } }];
      return (yield P.getProgramAccounts(i.ANS_PROGRAM_ID, { filters: K })).map((Y) => Y.pubkey);
    });
  }
  s.findAllDomainsForTld = W;
  function T(P, N) {
    return e(this, void 0, void 0, function* () {
      try {
        const K = yield c.NftRecord.fromAccountAddress(P, N);
        if (K.tag !== a.Tag.ActiveRecord) return;
        const H = yield P.getTokenLargestAccounts(K.nftMintAccount),
          Y = yield P.getParsedAccountInfo(H.value[0].address);
        return Y.value.data ? new t.PublicKey(Y.value.data.parsed.info.owner) : void 0;
      } catch {
        return;
      }
    });
  }
  s.getMintOwner = T;
  function j(P, N) {
    return t.PublicKey.findProgramAddressSync(
      [U.from(i.NFT_RECORD_PREFIX), N.toBuffer(), P.toBuffer()],
      i.NAME_HOUSE_PROGRAM_ID
    );
  }
  s.findNftRecord = j;
  function ze(P) {
    return (
      (P = P.toLowerCase()),
      t.PublicKey.findProgramAddressSync(
        [U.from(i.TLD_HOUSE_PREFIX), U.from(P)],
        i.TLD_HOUSE_PROGRAM_ID
      )
    );
  }
  s.findTldHouse = ze;
  function St(P) {
    return t.PublicKey.findProgramAddressSync(
      [U.from(i.NAME_HOUSE_PREFIX), P.toBuffer()],
      i.NAME_HOUSE_PROGRAM_ID
    );
  }
  s.findNameHouse = St;
  const Lt = (P) =>
    t.PublicKey.findProgramAddressSync(
      [U.from('metadata'), i.TOKEN_METADATA_PROGRAM_ID.toBuffer(), P.toBuffer()],
      i.TOKEN_METADATA_PROGRAM_ID
    )[0];
  s.findMetadataAddress = Lt;
  function Ne(P, N, K) {
    return e(this, void 0, void 0, function* () {
      const H = N.map((X) =>
          e(this, void 0, void 0, function* () {
            const ce = yield l(X.toBase58()),
              [ee] = d(ce, K, void 0);
            return ee;
          })
        ),
        Y = yield Promise.all(H);
      return (yield P.getMultipleAccountsInfo(Y)).map((X) =>
        X == null
          ? void 0
          : X.data
              .subarray(o.NameRecordHeader.byteSize, X == null ? void 0 : X.data.length)
              .toString()
      );
    });
  }
  s.performReverseLookupBatched = Ne;
  function Le(P) {
    return new Promise((N) => setTimeout(N, P));
  }
  s.delay = Le;
  const At = (P, N, K) =>
    e(void 0, void 0, void 0, function* () {
      const { value: H } = yield N.getParsedTokenAccountsByOwner(P, {
          programId: i.SPL_TOKEN_PROGRAM_ID,
        }),
        Y = H.filter((X) => {
          var ce, ee, me, de, Te, An, _n, In, Rn, En;
          const Jr =
            (Te =
              (de =
                (me =
                  (ee = (ce = X.account) === null || ce === void 0 ? void 0 : ce.data) === null ||
                  ee === void 0
                    ? void 0
                    : ee.parsed) === null || me === void 0
                  ? void 0
                  : me.info) === null || de === void 0
                ? void 0
                : de.tokenAmount) === null || Te === void 0
              ? void 0
              : Te.uiAmount;
          return (
            ((En =
              (Rn =
                (In =
                  (_n = (An = X.account) === null || An === void 0 ? void 0 : An.data) === null ||
                  _n === void 0
                    ? void 0
                    : _n.parsed) === null || In === void 0
                  ? void 0
                  : In.info) === null || Rn === void 0
                ? void 0
                : Rn.tokenAmount) === null || En === void 0
              ? void 0
              : En.decimals) === 0 && Jr === 1
          );
        }).map((X) => {
          var ce, ee, me, de;
          return (de =
            (me =
              (ee = (ce = X.account) === null || ce === void 0 ? void 0 : ce.data) === null ||
              ee === void 0
                ? void 0
                : ee.parsed) === null || me === void 0
              ? void 0
              : me.info) === null || de === void 0
            ? void 0
            : de.mint;
        });
      return yield Ot(Y, N, K);
    });
  s.getParsedAllDomainsNftAccountsByOwner = At;
  const Ot = (P, N, K) =>
    e(void 0, void 0, void 0, function* () {
      const H = [];
      if (P.length > 100)
        for (; P.length > 0; ) {
          let X = P.splice(0, 100).map((ee) => (0, s.findMetadataAddress)(new t.PublicKey(ee)));
          const ce = yield N.getMultipleAccountsInfo(X);
          for (const ee of ce)
            if (ee) {
              const me = new t.PublicKey(ee.data.subarray(326, 358));
              if (!!ee.data.subarray(326, 327) && me.toString() === K.toString()) {
                const Te = ee.data
                  .subarray(66, 101)
                  .toString()
                  .replace(/\u0000/g, '');
                H.push(Te);
              }
            }
        }
      else {
        let X = P.map((ee) => (0, s.findMetadataAddress)(new t.PublicKey(ee)));
        const ce = yield N.getMultipleAccountsInfo(X);
        for (const ee of ce)
          if (ee) {
            const me = new t.PublicKey(ee.data.subarray(326, 358));
            if (!!ee.data.subarray(326, 327) && me.toString() === K.toString()) {
              const Te = ee.data
                .subarray(66, 101)
                .toString()
                .replace(/\u0000/g, '');
              H.push(Te);
            }
          }
      }
      return H;
    });
  function _t(P) {
    const N = P.split('.');
    let K = '',
      H = '',
      Y = '';
    return (
      N.length === 1
        ? (H = N[0])
        : ((K = '.' + N[N.length - 1]),
          (H = N[N.length - 2]),
          (Y = N.slice(0, N.length - 2).join('.'))),
      [K, H, Y]
    );
  }
  s.splitDomainTld = _t;
})(kn);
var Sn = {},
  Ss = {};
(function (s) {
  var e =
      (x && x.__createBinding) ||
      (Object.create
        ? function (d, u, l, g) {
            g === void 0 && (g = l);
            var f = Object.getOwnPropertyDescriptor(u, l);
            (!f || ('get' in f ? !u.__esModule : f.writable || f.configurable)) &&
              (f = {
                enumerable: !0,
                get: function () {
                  return u[l];
                },
              }),
              Object.defineProperty(d, g, f);
          }
        : function (d, u, l, g) {
            g === void 0 && (g = l), (d[g] = u[l]);
          }),
    t =
      (x && x.__setModuleDefault) ||
      (Object.create
        ? function (d, u) {
            Object.defineProperty(d, 'default', { enumerable: !0, value: u });
          }
        : function (d, u) {
            d.default = u;
          }),
    n =
      (x && x.__importStar) ||
      function (d) {
        if (d && d.__esModule) return d;
        var u = {};
        if (d != null)
          for (var l in d)
            l !== 'default' && Object.prototype.hasOwnProperty.call(d, l) && e(u, d, l);
        return t(u, d), u;
      },
    r =
      (x && x.__awaiter) ||
      function (d, u, l, g) {
        function f(b) {
          return b instanceof l
            ? b
            : new l(function (y) {
                y(b);
              });
        }
        return new (l || (l = Promise))(function (b, y) {
          function k(T) {
            try {
              W(g.next(T));
            } catch (j) {
              y(j);
            }
          }
          function v(T) {
            try {
              W(g.throw(T));
            } catch (j) {
              y(j);
            }
          }
          function W(T) {
            T.done ? b(T.value) : f(T.value).then(k, v);
          }
          W((g = g.apply(d, u || [])).next());
        });
      };
  Object.defineProperty(s, '__esModule', { value: !0 }),
    (s.mainDomainBeet = s.MainDomain = s.mainDomainDiscriminator = void 0);
  const i = n(Jt),
    o = n(er),
    a = n(es);
  s.mainDomainDiscriminator = [109, 239, 227, 199, 98, 226, 66, 175];
  class c {
    constructor(u, l, g) {
      (this.nameAccount = u), (this.tld = l), (this.domain = g);
    }
    static fromArgs(u) {
      return new c(u.nameAccount, u.tld, u.domain);
    }
    static fromAccountInfo(u, l = 0) {
      return c.deserialize(u.data, l);
    }
    static fromAccountAddress(u, l, g) {
      return r(this, void 0, void 0, function* () {
        const f = yield u.getAccountInfo(l, g);
        if (f == null) throw new Error(`Unable to find MainDomain account at ${l}`);
        return c.fromAccountInfo(f, 0)[0];
      });
    }
    static gpaBuilder(u = new i.PublicKey('TLDHkysf5pCnKsVA4gXpNvmy7psXLPEu4LAdDJthT9S')) {
      return o.GpaBuilder.fromStruct(u, s.mainDomainBeet);
    }
    static deserialize(u, l = 0) {
      return s.mainDomainBeet.deserialize(u, l);
    }
    serialize() {
      return s.mainDomainBeet.serialize(
        Object.assign({ accountDiscriminator: s.mainDomainDiscriminator }, this)
      );
    }
    static byteSize(u) {
      const l = c.fromArgs(u);
      return s.mainDomainBeet.toFixedFromValue(
        Object.assign({ accountDiscriminator: s.mainDomainDiscriminator }, l)
      ).byteSize;
    }
    static getMinimumBalanceForRentExemption(u, l, g) {
      return r(this, void 0, void 0, function* () {
        return yield l.getMinimumBalanceForRentExemption(c.byteSize(u), g);
      });
    }
    pretty() {
      return { nameAccount: this.nameAccount.toBase58(), tld: this.tld, domain: this.domain };
    }
  }
  (s.MainDomain = c),
    (s.mainDomainBeet = new a.FixableBeetStruct(
      [
        ['accountDiscriminator', a.uniformFixedSizeArray(a.u8, 8)],
        ['nameAccount', o.publicKey],
        ['tld', a.utf8String],
        ['domain', a.utf8String],
      ],
      c.fromArgs,
      'MainDomain'
    ));
})(Ss);
var Zt = {},
  jr =
    (x && x.__awaiter) ||
    function (s, e, t, n) {
      function r(i) {
        return i instanceof t
          ? i
          : new t(function (o) {
              o(i);
            });
      }
      return new (t || (t = Promise))(function (i, o) {
        function a(u) {
          try {
            d(n.next(u));
          } catch (l) {
            o(l);
          }
        }
        function c(u) {
          try {
            d(n.throw(u));
          } catch (l) {
            o(l);
          }
        }
        function d(u) {
          u.done ? i(u.value) : r(u.value).then(a, c);
        }
        d((n = n.apply(s, e || [])).next());
      });
    };
Object.defineProperty(Zt, '__esModule', { value: !0 });
Zt.getDomainKey = void 0;
const zn = kn,
  nu = (s, e = !1) =>
    jr(void 0, void 0, void 0, function* () {
      const t = s.split('.');
      if (t.length === 3) {
        const a = '.' + t[2],
          c = t[1],
          d = t[0],
          { pubkey: u } = yield Ye(a),
          { pubkey: l } = yield Ye(c, u),
          f = U.from([e ? 1 : 0])
            .toString()
            .concat(d),
          b = yield Ye(f, l);
        return Object.assign(Object.assign({}, b), { isSub: !0, parent: l });
      } else if (t.length === 4 && e) {
        const a = '.' + t[3],
          c = t[2],
          d = t[1],
          u = t[0],
          { pubkey: l } = yield Ye(a),
          { pubkey: g } = yield Ye(c, l),
          { pubkey: f } = yield Ye('\0'.concat(d), g),
          b = U.from([1]).toString(),
          y = yield Ye(b.concat(u), f);
        return Object.assign(Object.assign({}, y), { isSub: !0, parent: g, isSubRecord: !0 });
      } else if (t.length > 4) throw new Error('Invalid derivation input');
      const n = '.' + t[1],
        { pubkey: r } = yield Ye(n),
        i = t[0],
        o = yield Ye(i, r);
      return Object.assign(Object.assign({}, o), { isSub: !1, parent: void 0 });
    });
Zt.getDomainKey = nu;
const Ye = (s, e) =>
  jr(void 0, void 0, void 0, function* () {
    e || (e = yield (0, zn.getOriginNameAccountKey)());
    let t = yield (0, zn.getHashedName)(s),
      [n] = yield (0, zn.getNameAccountKeyWithBump)(t, void 0, e);
    return { pubkey: n, hashed: t };
  });
var Re =
  (x && x.__awaiter) ||
  function (s, e, t, n) {
    function r(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(u) {
        try {
          d(n.next(u));
        } catch (l) {
          o(l);
        }
      }
      function c(u) {
        try {
          d(n.throw(u));
        } catch (l) {
          o(l);
        }
      }
      function d(u) {
        u.done ? i(u.value) : r(u.value).then(a, c);
      }
      d((n = n.apply(s, e || [])).next());
    });
  };
Object.defineProperty(Sn, '__esModule', { value: !0 });
Sn.TldParser = void 0;
const Me = Jt,
  su = ln(),
  ru = Ss,
  Wn = Nt,
  O = kn,
  it = Q,
  js = Zt;
class iu {
  constructor(e) {
    this.connection = e;
  }
  getAllUserDomains(e) {
    return Re(this, void 0, void 0, function* () {
      return (
        typeof e == 'string' && (e = new Me.PublicKey(e)),
        yield (0, O.findOwnedNameAccountsForUser)(this.connection, e, void 0)
      );
    });
  }
  getAllUserDomainsFromTld(e, t) {
    return Re(this, void 0, void 0, function* () {
      const n = '.' + t,
        r = yield (0, O.getOriginNameAccountKey)(),
        i = yield (0, O.getHashedName)(n),
        [o] = (0, O.getNameAccountKeyWithBump)(i, void 0, r);
      return (
        typeof e == 'string' && (e = new Me.PublicKey(e)),
        yield (0, O.findOwnedNameAccountsForUser)(this.connection, e, o)
      );
    });
  }
  getOwnerFromDomainTld(e) {
    return Re(this, void 0, void 0, function* () {
      const t = e.split('.'),
        n = t[0],
        r = '.' + t[1],
        i = yield (0, O.getOriginNameAccountKey)(),
        o = yield (0, O.getHashedName)(r),
        [a] = (0, O.getNameAccountKeyWithBump)(o, void 0, i),
        c = yield (0, O.getHashedName)(n),
        [d] = (0, O.getNameAccountKeyWithBump)(c, void 0, a),
        [u] = (0, O.findTldHouse)(r);
      return yield (0, O.getNameOwner)(this.connection, d, u);
    });
  }
  getNameRecordFromDomainTld(e) {
    return Re(this, void 0, void 0, function* () {
      const t = e.split('.'),
        n = t[0],
        r = '.' + t[1],
        i = yield (0, O.getOriginNameAccountKey)(),
        o = yield (0, O.getHashedName)(r),
        [a] = (0, O.getNameAccountKeyWithBump)(o, void 0, i),
        c = yield (0, O.getHashedName)(n),
        [d] = (0, O.getNameAccountKeyWithBump)(c, void 0, a);
      return yield Wn.NameRecordHeader.fromAccountAddress(this.connection, d);
    });
  }
  getTldFromParentAccount(e) {
    var t;
    return Re(this, void 0, void 0, function* () {
      typeof e == 'string' && (e = new Me.PublicKey(e));
      const n = yield Wn.NameRecordHeader.fromAccountAddress(this.connection, e),
        r = yield this.connection.getAccountInfo(n == null ? void 0 : n.owner),
        o = (t = r == null ? void 0 : r.data) === null || t === void 0 ? void 0 : t.subarray(104),
        a = new su.BN(o == null ? void 0 : o.subarray(0, 4), 'le').toNumber();
      return o
        .subarray(4, 4 + a)
        .toString()
        .replace(/\0.*$/g, '');
    });
  }
  reverseLookupNameAccount(e, t) {
    var n;
    return Re(this, void 0, void 0, function* () {
      typeof e == 'string' && (e = new Me.PublicKey(e)),
        typeof t == 'string' && (t = new Me.PublicKey(t));
      const r = yield (0, O.getHashedName)(e.toString()),
        [i] = (0, O.getNameAccountKeyWithBump)(r, t, void 0),
        o = yield Wn.NameRecordHeader.fromAccountAddress(this.connection, i);
      return (n = o == null ? void 0 : o.data) === null || n === void 0 ? void 0 : n.toString();
    });
  }
  getMainDomain(e) {
    return Re(this, void 0, void 0, function* () {
      typeof e == 'string' && (e = new Me.PublicKey(e));
      const [t] = (0, O.findMainDomain)(e);
      return yield ru.MainDomain.fromAccountAddress(this.connection, t);
    });
  }
  getParsedAllUserDomainsFromTldUnwrapped(e, t) {
    return Re(this, void 0, void 0, function* () {
      const n = '.' + t,
        r = yield (0, O.getOriginNameAccountKey)(),
        i = yield (0, O.getHashedName)(n),
        [o] = (0, O.findTldHouse)(n),
        [a] = (0, O.getNameAccountKeyWithBump)(i, void 0, r);
      typeof e == 'string' && (e = new Me.PublicKey(e));
      const c = yield (0, O.findOwnedNameAccountsForUser)(this.connection, e, a);
      let d = [];
      for (let u = 0; u < c.length; u += it.MULTIPLE_ACCOUNT_INFO_MAX) {
        yield (0, O.delay)(100);
        const l = Math.min(u + it.MULTIPLE_ACCOUNT_INFO_MAX, c.length),
          g = c.slice(u, l),
          b = (yield (0, O.performReverseLookupBatched)(this.connection, g, o)).map((y, k) => ({
            nameAccount: g[k],
            domain: y + n,
          }));
        b.length > 0 &&
          b.sort((y, k) =>
            y.domain.localeCompare(k.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
          d.push(...b);
      }
      return d;
    });
  }
  getParsedAllUserDomainsFromTld(e, t) {
    return Re(this, void 0, void 0, function* () {
      const n = '.' + t,
        r = yield (0, O.getOriginNameAccountKey)(),
        i = yield (0, O.getHashedName)(n),
        [o] = (0, O.findTldHouse)(n),
        [a] = (0, O.getNameAccountKeyWithBump)(i, void 0, r);
      typeof e == 'string' && (e = new Me.PublicKey(e));
      const c = yield (0, O.findOwnedNameAccountsForUser)(this.connection, e, a);
      let d = [];
      const l = (yield (0, O.getParsedAllDomainsNftAccountsByOwner)(
          e,
          this.connection,
          (0, O.findNameHouse)(o)[0]
        )).map((f) => f + n),
        g = yield Promise.all(
          l.map((f) =>
            Re(this, void 0, void 0, function* () {
              return { nameAccount: (yield (0, js.getDomainKey)(f)).pubkey, domain: f };
            })
          )
        );
      d.push(...g);
      for (let f = 0; f < c.length; f += it.MULTIPLE_ACCOUNT_INFO_MAX) {
        yield (0, O.delay)(100);
        const b = Math.min(f + it.MULTIPLE_ACCOUNT_INFO_MAX, c.length),
          y = c.slice(f, b),
          v = (yield (0, O.performReverseLookupBatched)(this.connection, y, o)).map((W, T) => ({
            nameAccount: y[T],
            domain: W + n,
          }));
        d.push(...v);
      }
      return (
        d.length > 0 &&
          d.sort((f, b) =>
            f.domain.localeCompare(b.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
        d
      );
    });
  }
  getParsedAllUserDomainsUnwrapped(e) {
    return Re(this, void 0, void 0, function* () {
      const t = yield (0, O.getAllTld)(this.connection);
      let n = [];
      typeof e == 'string' && (e = new Me.PublicKey(e));
      for (let { parentAccount: r, tld: i } of t) {
        let o = i.toString();
        const [a] = (0, O.findTldHouse)(o),
          c = yield (0, O.findOwnedNameAccountsForUser)(this.connection, e, r);
        for (let d = 0; d < c.length; d += it.MULTIPLE_ACCOUNT_INFO_MAX) {
          yield (0, O.delay)(100);
          const u = Math.min(d + it.MULTIPLE_ACCOUNT_INFO_MAX, c.length),
            l = c.slice(d, u),
            f = (yield (0, O.performReverseLookupBatched)(this.connection, l, a)).map((b, y) => ({
              nameAccount: l[y],
              domain: b + o,
            }));
          n.push(...f);
        }
      }
      return (
        n.length > 0 &&
          n.sort((r, i) =>
            r.domain.localeCompare(i.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
        n
      );
    });
  }
  getParsedAllUserDomains(e) {
    return Re(this, void 0, void 0, function* () {
      const t = yield (0, O.getAllTld)(this.connection);
      let n = [];
      typeof e == 'string' && (e = new Me.PublicKey(e));
      for (let { parentAccount: r, tld: i } of t) {
        let o = i.toString();
        const [a] = (0, O.findTldHouse)(o),
          c = yield (0, O.findOwnedNameAccountsForUser)(this.connection, e, r),
          u = (yield (0, O.getParsedAllDomainsNftAccountsByOwner)(
            e,
            this.connection,
            (0, O.findNameHouse)(a)[0]
          )).map((g) => g + o),
          l = yield Promise.all(
            u.map((g) =>
              Re(this, void 0, void 0, function* () {
                return { nameAccount: (yield (0, js.getDomainKey)(g)).pubkey, domain: g };
              })
            )
          );
        n.push(...l);
        for (let g = 0; g < c.length; g += it.MULTIPLE_ACCOUNT_INFO_MAX) {
          yield (0, O.delay)(100);
          const f = Math.min(g + it.MULTIPLE_ACCOUNT_INFO_MAX, c.length),
            b = c.slice(g, f),
            k = (yield (0, O.performReverseLookupBatched)(this.connection, b, a)).map((v, W) => ({
              nameAccount: b[W],
              domain: v + o,
            }));
          n.push(...k);
        }
      }
      return (
        n.length > 0 &&
          n.sort((r, i) =>
            r.domain.localeCompare(i.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
        n
      );
    });
  }
}
Sn.TldParser = iu;
var Xr = {};
(function (s) {
  Object.defineProperty(s, '__esModule', { value: !0 }),
    (s.Record = void 0),
    (function (e) {
      (e.IPFS = 'IPFS'),
        (e.ARWV = 'ARWV'),
        (e.SOL = 'SOL'),
        (e.ETH = 'ETH'),
        (e.BTC = 'BTC'),
        (e.LTC = 'LTC'),
        (e.DOGE = 'DOGE'),
        (e.Email = 'email'),
        (e.Url = 'url'),
        (e.Discord = 'discord'),
        (e.Github = 'github'),
        (e.Reddit = 'reddit'),
        (e.Twitter = 'twitter'),
        (e.Telegram = 'telegram'),
        (e.Pic = 'pic'),
        (e.SHDW = 'SHDW'),
        (e.POINT = 'POINT');
    })(s.Record || (s.Record = {}));
})(Xr);
(function (s) {
  var e =
      (x && x.__createBinding) ||
      (Object.create
        ? function (n, r, i, o) {
            o === void 0 && (o = i);
            var a = Object.getOwnPropertyDescriptor(r, i);
            (!a || ('get' in a ? !r.__esModule : a.writable || a.configurable)) &&
              (a = {
                enumerable: !0,
                get: function () {
                  return r[i];
                },
              }),
              Object.defineProperty(n, o, a);
          }
        : function (n, r, i, o) {
            o === void 0 && (o = i), (n[o] = r[i]);
          }),
    t =
      (x && x.__exportStar) ||
      function (n, r) {
        for (var i in n)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(r, i) && e(r, n, i);
      };
  Object.defineProperty(s, '__esModule', { value: !0 }),
    t(kn, s),
    t(Q, s),
    t(Sn, s),
    t(Nt, s),
    t(Ss, s),
    t(ks, s),
    t(Zt, s),
    t(Xr, s);
})(Fc);
export {
  Bo as A,
  Ic as C,
  te as L,
  w as P,
  an as S,
  V as T,
  ls as V,
  Ge as a,
  Ke as b,
  ui as c,
  hu as d,
  li as e,
  xn as f,
  fu as g,
  we as h,
  ts as i,
  wi as j,
  du as k,
  fi as l,
  pi as m,
  uu as n,
  gu as o,
  yu as p,
  Mc as q,
  bi as r,
  lu as s,
  zc as t,
  cs as u,
  ys as v,
};
