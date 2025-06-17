import {
  Z as ps,
  r as Ds,
  e as _r,
  f as Tr,
  B as ue,
  g as Ls,
  h as de,
  n as je,
  s as te,
  i as oe,
  j as at,
  u as xe,
  k as Ge,
  o as $t,
  l as bs,
  q as In,
  m as j,
  v as Ne,
  x as $,
  z as Q,
  A as Z,
  y as B,
  C as he,
  E as Rr,
  F as et,
  D as Tt,
  H as ut,
  I as Br,
  b as Ce,
  J as We,
  K as Xn,
  p as En,
  w as ws,
  L as Lo,
  G as Y,
  P as Po,
  t as No,
  a as vr,
  _ as _n,
  $ as Oo,
  a0 as Do,
  a1 as Uo,
  a2 as Mo,
  a3 as Ho,
  a4 as Fo,
  a5 as Ko,
  a6 as Tn,
  a7 as Cr,
} from './metaplex-DKWSQMdM.js';
import { u as Lr, p as hs, b as dn } from './metaplexMplTokenMetadata-B1auuVGR.js';
import { c as le, a as Pr } from './lodash-aFjP5OGs.js';
function Es(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
const zo = 'logger/5.7.0';
let Jn = !1,
  Zn = !1;
const Rs = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Qn = Rs.default,
  Xs = null;
function $o() {
  try {
    const e = [];
    if (
      (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((t) => {
        try {
          if ('test'.normalize(t) !== 'test') throw new Error('bad normalize');
        } catch {
          e.push(t);
        }
      }),
      e.length)
    )
      throw new Error('missing ' + e.join(', '));
    if ('é'.normalize('NFD') !== 'é') throw new Error('broken implementation');
  } catch (e) {
    return e.message;
  }
  return null;
}
const er = $o();
var pn;
(function (e) {
  (e.DEBUG = 'DEBUG'),
    (e.INFO = 'INFO'),
    (e.WARNING = 'WARNING'),
    (e.ERROR = 'ERROR'),
    (e.OFF = 'OFF');
})(pn || (pn = {}));
var ct;
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
})(ct || (ct = {}));
const tr = '0123456789abcdef';
class Le {
  constructor(t) {
    Object.defineProperty(this, 'version', { enumerable: !0, value: t, writable: !1 });
  }
  _log(t, s) {
    const n = t.toLowerCase();
    Rs[n] == null && this.throwArgumentError('invalid log level name', 'logLevel', t),
      !(Qn > Rs[n]) && console.log.apply(console, s);
  }
  debug(...t) {
    this._log(Le.levels.DEBUG, t);
  }
  info(...t) {
    this._log(Le.levels.INFO, t);
  }
  warn(...t) {
    this._log(Le.levels.WARNING, t);
  }
  makeError(t, s, n) {
    if (Zn) return this.makeError('censored error', s, {});
    s || (s = Le.errors.UNKNOWN_ERROR), n || (n = {});
    const r = [];
    Object.keys(n).forEach((l) => {
      const d = n[l];
      try {
        if (d instanceof Uint8Array) {
          let h = '';
          for (let y = 0; y < d.length; y++) (h += tr[d[y] >> 4]), (h += tr[d[y] & 15]);
          r.push(l + '=Uint8Array(0x' + h + ')');
        } else r.push(l + '=' + JSON.stringify(d));
      } catch {
        r.push(l + '=' + JSON.stringify(n[l].toString()));
      }
    }),
      r.push(`code=${s}`),
      r.push(`version=${this.version}`);
    const o = t;
    let i = '';
    switch (s) {
      case ct.NUMERIC_FAULT: {
        i = 'NUMERIC_FAULT';
        const l = t;
        switch (l) {
          case 'overflow':
          case 'underflow':
          case 'division-by-zero':
            i += '-' + l;
            break;
          case 'negative-power':
          case 'negative-width':
            i += '-unsupported';
            break;
          case 'unbound-bitwise-result':
            i += '-unbound-result';
            break;
        }
        break;
      }
      case ct.CALL_EXCEPTION:
      case ct.INSUFFICIENT_FUNDS:
      case ct.MISSING_NEW:
      case ct.NONCE_EXPIRED:
      case ct.REPLACEMENT_UNDERPRICED:
      case ct.TRANSACTION_REPLACED:
      case ct.UNPREDICTABLE_GAS_LIMIT:
        i = s;
        break;
    }
    i && (t += ' [ See: https://links.ethers.org/v5-errors-' + i + ' ]'),
      r.length && (t += ' (' + r.join(', ') + ')');
    const u = new Error(t);
    return (
      (u.reason = o),
      (u.code = s),
      Object.keys(n).forEach(function (l) {
        u[l] = n[l];
      }),
      u
    );
  }
  throwError(t, s, n) {
    throw this.makeError(t, s, n);
  }
  throwArgumentError(t, s, n) {
    return this.throwError(t, Le.errors.INVALID_ARGUMENT, { argument: s, value: n });
  }
  assert(t, s, n, r) {
    t || this.throwError(s, n, r);
  }
  assertArgument(t, s, n, r) {
    t || this.throwArgumentError(s, n, r);
  }
  checkNormalize(t) {
    er &&
      this.throwError(
        'platform missing String.prototype.normalize',
        Le.errors.UNSUPPORTED_OPERATION,
        { operation: 'String.prototype.normalize', form: er }
      );
  }
  checkSafeUint53(t, s) {
    typeof t == 'number' &&
      (s == null && (s = 'value not safe'),
      (t < 0 || t >= 9007199254740991) &&
        this.throwError(s, Le.errors.NUMERIC_FAULT, {
          operation: 'checkSafeInteger',
          fault: 'out-of-safe-range',
          value: t,
        }),
      t % 1 &&
        this.throwError(s, Le.errors.NUMERIC_FAULT, {
          operation: 'checkSafeInteger',
          fault: 'non-integer',
          value: t,
        }));
  }
  checkArgumentCount(t, s, n) {
    n ? (n = ': ' + n) : (n = ''),
      t < s &&
        this.throwError('missing argument' + n, Le.errors.MISSING_ARGUMENT, {
          count: t,
          expectedCount: s,
        }),
      t > s &&
        this.throwError('too many arguments' + n, Le.errors.UNEXPECTED_ARGUMENT, {
          count: t,
          expectedCount: s,
        });
  }
  checkNew(t, s) {
    (t === Object || t == null) &&
      this.throwError('missing new', Le.errors.MISSING_NEW, { name: s.name });
  }
  checkAbstract(t, s) {
    t === s
      ? this.throwError(
          'cannot instantiate abstract class ' +
            JSON.stringify(s.name) +
            ' directly; use a sub-class',
          Le.errors.UNSUPPORTED_OPERATION,
          { name: t.name, operation: 'new' }
        )
      : (t === Object || t == null) &&
        this.throwError('missing new', Le.errors.MISSING_NEW, { name: s.name });
  }
  static globalLogger() {
    return Xs || (Xs = new Le(zo)), Xs;
  }
  static setCensorship(t, s) {
    if (
      (!t &&
        s &&
        this.globalLogger().throwError(
          'cannot permanently disable censorship',
          Le.errors.UNSUPPORTED_OPERATION,
          { operation: 'setCensorship' }
        ),
      Jn)
    ) {
      if (!t) return;
      this.globalLogger().throwError(
        'error censorship permanent',
        Le.errors.UNSUPPORTED_OPERATION,
        { operation: 'setCensorship' }
      );
    }
    (Zn = !!t), (Jn = !!s);
  }
  static setLogLevel(t) {
    const s = Rs[t.toLowerCase()];
    if (s == null) {
      Le.globalLogger().warn('invalid log level - ' + t);
      return;
    }
    Qn = s;
  }
  static from(t) {
    return new Le(t);
  }
}
Le.errors = ct;
Le.levels = pn;
const Wo = 'bytes/5.7.0',
  De = new Le(Wo);
function Nr(e) {
  return !!e.toHexString;
}
function Xt(e) {
  return (
    e.slice ||
      (e.slice = function () {
        const t = Array.prototype.slice.call(arguments);
        return Xt(new Uint8Array(Array.prototype.slice.apply(e, t)));
      }),
    e
  );
}
function Go(e) {
  return (bt(e) && !(e.length % 2)) || Rn(e);
}
function sr(e) {
  return typeof e == 'number' && e == e && e % 1 === 0;
}
function Rn(e) {
  if (e == null) return !1;
  if (e.constructor === Uint8Array) return !0;
  if (typeof e == 'string' || !sr(e.length) || e.length < 0) return !1;
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (!sr(s) || s < 0 || s >= 256) return !1;
  }
  return !0;
}
function dt(e, t) {
  if ((t || (t = {}), typeof e == 'number')) {
    De.checkSafeUint53(e, 'invalid arrayify value');
    const s = [];
    for (; e; ) s.unshift(e & 255), (e = parseInt(String(e / 256)));
    return s.length === 0 && s.push(0), Xt(new Uint8Array(s));
  }
  if (
    (t.allowMissingPrefix && typeof e == 'string' && e.substring(0, 2) !== '0x' && (e = '0x' + e),
    Nr(e) && (e = e.toHexString()),
    bt(e))
  ) {
    let s = e.substring(2);
    s.length % 2 &&
      (t.hexPad === 'left'
        ? (s = '0' + s)
        : t.hexPad === 'right'
          ? (s += '0')
          : De.throwArgumentError('hex data is odd-length', 'value', e));
    const n = [];
    for (let r = 0; r < s.length; r += 2) n.push(parseInt(s.substring(r, r + 2), 16));
    return Xt(new Uint8Array(n));
  }
  return Rn(e)
    ? Xt(new Uint8Array(e))
    : De.throwArgumentError('invalid arrayify value', 'value', e);
}
function bu(e) {
  const t = e.map((r) => dt(r)),
    s = t.reduce((r, o) => r + o.length, 0),
    n = new Uint8Array(s);
  return t.reduce((r, o) => (n.set(o, r), r + o.length), 0), Xt(n);
}
function wu(e) {
  let t = dt(e);
  if (t.length === 0) return t;
  let s = 0;
  for (; s < t.length && t[s] === 0; ) s++;
  return s && (t = t.slice(s)), t;
}
function qo(e, t) {
  (e = dt(e)), e.length > t && De.throwArgumentError('value out of range', 'value', arguments[0]);
  const s = new Uint8Array(t);
  return s.set(e, t - e.length), Xt(s);
}
function bt(e, t) {
  return !(typeof e != 'string' || !e.match(/^0x[0-9A-Fa-f]*$/) || (t && e.length !== 2 + 2 * t));
}
const Js = '0123456789abcdef';
function Xe(e, t) {
  if ((t || (t = {}), typeof e == 'number')) {
    De.checkSafeUint53(e, 'invalid hexlify value');
    let s = '';
    for (; e; ) (s = Js[e & 15] + s), (e = Math.floor(e / 16));
    return s.length ? (s.length % 2 && (s = '0' + s), '0x' + s) : '0x00';
  }
  if (typeof e == 'bigint') return (e = e.toString(16)), e.length % 2 ? '0x0' + e : '0x' + e;
  if (
    (t.allowMissingPrefix && typeof e == 'string' && e.substring(0, 2) !== '0x' && (e = '0x' + e),
    Nr(e))
  )
    return e.toHexString();
  if (bt(e))
    return (
      e.length % 2 &&
        (t.hexPad === 'left'
          ? (e = '0x0' + e.substring(2))
          : t.hexPad === 'right'
            ? (e += '0')
            : De.throwArgumentError('hex data is odd-length', 'value', e)),
      e.toLowerCase()
    );
  if (Rn(e)) {
    let s = '0x';
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      s += Js[(r & 240) >> 4] + Js[r & 15];
    }
    return s;
  }
  return De.throwArgumentError('invalid hexlify value', 'value', e);
}
function xu(e) {
  if (typeof e != 'string') e = Xe(e);
  else if (!bt(e) || e.length % 2) return null;
  return (e.length - 2) / 2;
}
function Au(e, t, s) {
  return (
    typeof e != 'string'
      ? (e = Xe(e))
      : (!bt(e) || e.length % 2) && De.throwArgumentError('invalid hexData', 'value', e),
    (t = 2 + 2 * t),
    s != null ? '0x' + e.substring(t, 2 + 2 * s) : '0x' + e.substring(t)
  );
}
function ku(e) {
  let t = '0x';
  return (
    e.forEach((s) => {
      t += Xe(s).substring(2);
    }),
    t
  );
}
function Su(e) {
  const t = jo(Xe(e, { hexPad: 'left' }));
  return t === '0x' ? '0x0' : t;
}
function jo(e) {
  typeof e != 'string' && (e = Xe(e)),
    bt(e) || De.throwArgumentError('invalid hex string', 'value', e),
    (e = e.substring(2));
  let t = 0;
  for (; t < e.length && e[t] === '0'; ) t++;
  return '0x' + e.substring(t);
}
function Zs(e, t) {
  for (
    typeof e != 'string'
      ? (e = Xe(e))
      : bt(e) || De.throwArgumentError('invalid hex string', 'value', e),
      e.length > 2 * t + 2 && De.throwArgumentError('value out of range', 'value', arguments[1]);
    e.length < 2 * t + 2;

  )
    e = '0x0' + e.substring(2);
  return e;
}
function Iu(e) {
  const t = {
    r: '0x',
    s: '0x',
    _vs: '0x',
    recoveryParam: 0,
    v: 0,
    yParityAndS: '0x',
    compact: '0x',
  };
  if (Go(e)) {
    let s = dt(e);
    s.length === 64
      ? ((t.v = 27 + (s[32] >> 7)),
        (s[32] &= 127),
        (t.r = Xe(s.slice(0, 32))),
        (t.s = Xe(s.slice(32, 64))))
      : s.length === 65
        ? ((t.r = Xe(s.slice(0, 32))), (t.s = Xe(s.slice(32, 64))), (t.v = s[64]))
        : De.throwArgumentError('invalid signature string', 'signature', e),
      t.v < 27 &&
        (t.v === 0 || t.v === 1
          ? (t.v += 27)
          : De.throwArgumentError('signature invalid v byte', 'signature', e)),
      (t.recoveryParam = 1 - (t.v % 2)),
      t.recoveryParam && (s[32] |= 128),
      (t._vs = Xe(s.slice(32, 64)));
  } else {
    if (
      ((t.r = e.r),
      (t.s = e.s),
      (t.v = e.v),
      (t.recoveryParam = e.recoveryParam),
      (t._vs = e._vs),
      t._vs != null)
    ) {
      const r = qo(dt(t._vs), 32);
      t._vs = Xe(r);
      const o = r[0] >= 128 ? 1 : 0;
      t.recoveryParam == null
        ? (t.recoveryParam = o)
        : t.recoveryParam !== o &&
          De.throwArgumentError('signature recoveryParam mismatch _vs', 'signature', e),
        (r[0] &= 127);
      const i = Xe(r);
      t.s == null
        ? (t.s = i)
        : t.s !== i && De.throwArgumentError('signature v mismatch _vs', 'signature', e);
    }
    if (t.recoveryParam == null)
      t.v == null
        ? De.throwArgumentError('signature missing v and recoveryParam', 'signature', e)
        : t.v === 0 || t.v === 1
          ? (t.recoveryParam = t.v)
          : (t.recoveryParam = 1 - (t.v % 2));
    else if (t.v == null) t.v = 27 + t.recoveryParam;
    else {
      const r = t.v === 0 || t.v === 1 ? t.v : 1 - (t.v % 2);
      t.recoveryParam !== r &&
        De.throwArgumentError('signature recoveryParam mismatch v', 'signature', e);
    }
    t.r == null || !bt(t.r)
      ? De.throwArgumentError('signature missing or invalid r', 'signature', e)
      : (t.r = Zs(t.r, 32)),
      t.s == null || !bt(t.s)
        ? De.throwArgumentError('signature missing or invalid s', 'signature', e)
        : (t.s = Zs(t.s, 32));
    const s = dt(t.s);
    s[0] >= 128 && De.throwArgumentError('signature s out of range', 'signature', e),
      t.recoveryParam && (s[0] |= 128);
    const n = Xe(s);
    t._vs &&
      (bt(t._vs) || De.throwArgumentError('signature invalid _vs', 'signature', e),
      (t._vs = Zs(t._vs, 32))),
      t._vs == null
        ? (t._vs = n)
        : t._vs !== n && De.throwArgumentError('signature _vs mismatch v and s', 'signature', e);
  }
  return (t.yParityAndS = t._vs), (t.compact = t.r + t.yParityAndS.substring(2)), t;
}
var Ps;
(function (e) {
  (e.sha256 = 'sha256'), (e.sha512 = 'sha512');
})(Ps || (Ps = {}));
const Vo = 'sha2/5.7.0',
  Yo = new Le(Vo);
function Xo(e) {
  return '0x' + ps.ripemd160().update(dt(e)).digest('hex');
}
function Jo(e) {
  return '0x' + ps.sha256().update(dt(e)).digest('hex');
}
function Zo(e) {
  return '0x' + ps.sha512().update(dt(e)).digest('hex');
}
function Qo(e, t, s) {
  return (
    Ps[e] ||
      Yo.throwError('unsupported algorithm ' + e, Le.errors.UNSUPPORTED_OPERATION, {
        operation: 'hmac',
        algorithm: e,
      }),
    '0x' + ps.hmac(ps[e], dt(t)).update(dt(s)).digest('hex')
  );
}
const ei = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      get SupportedAlgorithm() {
        return Ps;
      },
      computeHmac: Qo,
      ripemd160: Xo,
      sha256: Jo,
      sha512: Zo,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function hn(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function ti(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
function Or(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function si(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  hn(e.outputLen), hn(e.blockLen);
}
function ni(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function ri(e, t) {
  Or(e);
  const s = t.outputLen;
  if (e.length < s) throw new Error(`digestInto() expects output buffer of length at least ${s}`);
}
const nt = { number: hn, bool: ti, bytes: Or, hash: si, exists: ni, output: ri };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const oi = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  Qs = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  ht = (e, t) => (e << (32 - t)) | (e >>> t),
  ii = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ii) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function ai(e) {
  if (typeof e != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function xs(e) {
  if ((typeof e == 'string' && (e = ai(e)), !(e instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
class Bn {
  clone() {
    return this._cloneInto();
  }
}
function qt(e) {
  const t = (n) => e().update(xs(n)).digest(),
    s = e();
  return (t.outputLen = s.outputLen), (t.blockLen = s.blockLen), (t.create = () => e()), t;
}
function ci(e) {
  const t = (n, r) => e(r).update(xs(n)).digest(),
    s = e({});
  return (t.outputLen = s.outputLen), (t.blockLen = s.blockLen), (t.create = (n) => e(n)), t;
}
function li(e, t, s, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, s, n);
  const r = BigInt(32),
    o = BigInt(4294967295),
    i = Number((s >> r) & o),
    u = Number(s & o),
    l = n ? 4 : 0,
    d = n ? 0 : 4;
  e.setUint32(t + l, i, n), e.setUint32(t + d, u, n);
}
class Dr extends Bn {
  constructor(t, s, n, r) {
    super(),
      (this.blockLen = t),
      (this.outputLen = s),
      (this.padOffset = n),
      (this.isLE = r),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(t)),
      (this.view = Qs(this.buffer));
  }
  update(t) {
    nt.exists(this);
    const { view: s, buffer: n, blockLen: r } = this;
    t = xs(t);
    const o = t.length;
    for (let i = 0; i < o; ) {
      const u = Math.min(r - this.pos, o - i);
      if (u === r) {
        const l = Qs(t);
        for (; r <= o - i; i += r) this.process(l, i);
        continue;
      }
      n.set(t.subarray(i, i + u), this.pos),
        (this.pos += u),
        (i += u),
        this.pos === r && (this.process(s, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    nt.exists(this), nt.output(t, this), (this.finished = !0);
    const { buffer: s, view: n, blockLen: r, isLE: o } = this;
    let { pos: i } = this;
    (s[i++] = 128),
      this.buffer.subarray(i).fill(0),
      this.padOffset > r - i && (this.process(n, 0), (i = 0));
    for (let y = i; y < r; y++) s[y] = 0;
    li(n, r - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const u = Qs(t),
      l = this.outputLen;
    if (l % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const d = l / 4,
      h = this.get();
    if (d > h.length) throw new Error('_sha2: outputLen bigger than state');
    for (let y = 0; y < d; y++) u.setUint32(4 * y, h[y], o);
  }
  digest() {
    const { buffer: t, outputLen: s } = this;
    this.digestInto(t);
    const n = t.slice(0, s);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: s, buffer: n, length: r, finished: o, destroyed: i, pos: u } = this;
    return (
      (t.length = r), (t.pos = u), (t.finished = o), (t.destroyed = i), r % s && t.buffer.set(n), t
    );
  }
}
const _s = BigInt(2 ** 32 - 1),
  fn = BigInt(32);
function Ur(e, t = !1) {
  return t
    ? { h: Number(e & _s), l: Number((e >> fn) & _s) }
    : { h: Number((e >> fn) & _s) | 0, l: Number(e & _s) | 0 };
}
function ui(e, t = !1) {
  let s = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let r = 0; r < e.length; r++) {
    const { h: o, l: i } = Ur(e[r], t);
    [s[r], n[r]] = [o, i];
  }
  return [s, n];
}
const di = (e, t) => (BigInt(e >>> 0) << fn) | BigInt(t >>> 0),
  pi = (e, t, s) => e >>> s,
  hi = (e, t, s) => (e << (32 - s)) | (t >>> s),
  fi = (e, t, s) => (e >>> s) | (t << (32 - s)),
  yi = (e, t, s) => (e << (32 - s)) | (t >>> s),
  gi = (e, t, s) => (e << (64 - s)) | (t >>> (s - 32)),
  mi = (e, t, s) => (e >>> (s - 32)) | (t << (64 - s)),
  bi = (e, t) => t,
  wi = (e, t) => e,
  xi = (e, t, s) => (e << s) | (t >>> (32 - s)),
  Ai = (e, t, s) => (t << s) | (e >>> (32 - s)),
  ki = (e, t, s) => (t << (s - 32)) | (e >>> (64 - s)),
  Si = (e, t, s) => (e << (s - 32)) | (t >>> (64 - s));
function Ii(e, t, s, n) {
  const r = (t >>> 0) + (n >>> 0);
  return { h: (e + s + ((r / 2 ** 32) | 0)) | 0, l: r | 0 };
}
const Ei = (e, t, s) => (e >>> 0) + (t >>> 0) + (s >>> 0),
  _i = (e, t, s, n) => (t + s + n + ((e / 2 ** 32) | 0)) | 0,
  Ti = (e, t, s, n) => (e >>> 0) + (t >>> 0) + (s >>> 0) + (n >>> 0),
  Ri = (e, t, s, n, r) => (t + s + n + r + ((e / 2 ** 32) | 0)) | 0,
  Bi = (e, t, s, n, r) => (e >>> 0) + (t >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0),
  vi = (e, t, s, n, r, o) => (t + s + n + r + o + ((e / 2 ** 32) | 0)) | 0,
  ye = {
    fromBig: Ur,
    split: ui,
    toBig: di,
    shrSH: pi,
    shrSL: hi,
    rotrSH: fi,
    rotrSL: yi,
    rotrBH: gi,
    rotrBL: mi,
    rotr32H: bi,
    rotr32L: wi,
    rotlSH: xi,
    rotlSL: Ai,
    rotlBH: ki,
    rotlBL: Si,
    add: Ii,
    add3L: Ei,
    add3H: _i,
    add4L: Ti,
    add4H: Ri,
    add5H: vi,
    add5L: Bi,
  },
  [Ci, Li] = ye.split(
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
  Rt = new Uint32Array(80),
  Bt = new Uint32Array(80);
class Us extends Dr {
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
      Ah: t,
      Al: s,
      Bh: n,
      Bl: r,
      Ch: o,
      Cl: i,
      Dh: u,
      Dl: l,
      Eh: d,
      El: h,
      Fh: y,
      Fl: b,
      Gh: w,
      Gl: p,
      Hh: f,
      Hl: m,
    } = this;
    return [t, s, n, r, o, i, u, l, d, h, y, b, w, p, f, m];
  }
  set(t, s, n, r, o, i, u, l, d, h, y, b, w, p, f, m) {
    (this.Ah = t | 0),
      (this.Al = s | 0),
      (this.Bh = n | 0),
      (this.Bl = r | 0),
      (this.Ch = o | 0),
      (this.Cl = i | 0),
      (this.Dh = u | 0),
      (this.Dl = l | 0),
      (this.Eh = d | 0),
      (this.El = h | 0),
      (this.Fh = y | 0),
      (this.Fl = b | 0),
      (this.Gh = w | 0),
      (this.Gl = p | 0),
      (this.Hh = f | 0),
      (this.Hl = m | 0);
  }
  process(t, s) {
    for (let _ = 0; _ < 16; _++, s += 4) (Rt[_] = t.getUint32(s)), (Bt[_] = t.getUint32((s += 4)));
    for (let _ = 16; _ < 80; _++) {
      const E = Rt[_ - 15] | 0,
        O = Bt[_ - 15] | 0,
        U = ye.rotrSH(E, O, 1) ^ ye.rotrSH(E, O, 8) ^ ye.shrSH(E, O, 7),
        pe = ye.rotrSL(E, O, 1) ^ ye.rotrSL(E, O, 8) ^ ye.shrSL(E, O, 7),
        X = Rt[_ - 2] | 0,
        se = Bt[_ - 2] | 0,
        ge = ye.rotrSH(X, se, 19) ^ ye.rotrBH(X, se, 61) ^ ye.shrSH(X, se, 6),
        J = ye.rotrSL(X, se, 19) ^ ye.rotrBL(X, se, 61) ^ ye.shrSL(X, se, 6),
        ne = ye.add4L(pe, J, Bt[_ - 7], Bt[_ - 16]),
        R = ye.add4H(ne, U, ge, Rt[_ - 7], Rt[_ - 16]);
      (Rt[_] = R | 0), (Bt[_] = ne | 0);
    }
    let {
      Ah: n,
      Al: r,
      Bh: o,
      Bl: i,
      Ch: u,
      Cl: l,
      Dh: d,
      Dl: h,
      Eh: y,
      El: b,
      Fh: w,
      Fl: p,
      Gh: f,
      Gl: m,
      Hh: x,
      Hl: I,
    } = this;
    for (let _ = 0; _ < 80; _++) {
      const E = ye.rotrSH(y, b, 14) ^ ye.rotrSH(y, b, 18) ^ ye.rotrBH(y, b, 41),
        O = ye.rotrSL(y, b, 14) ^ ye.rotrSL(y, b, 18) ^ ye.rotrBL(y, b, 41),
        U = (y & w) ^ (~y & f),
        pe = (b & p) ^ (~b & m),
        X = ye.add5L(I, O, pe, Li[_], Bt[_]),
        se = ye.add5H(X, x, E, U, Ci[_], Rt[_]),
        ge = X | 0,
        J = ye.rotrSH(n, r, 28) ^ ye.rotrBH(n, r, 34) ^ ye.rotrBH(n, r, 39),
        ne = ye.rotrSL(n, r, 28) ^ ye.rotrBL(n, r, 34) ^ ye.rotrBL(n, r, 39),
        R = (n & o) ^ (n & u) ^ (o & u),
        L = (r & i) ^ (r & l) ^ (i & l);
      (x = f | 0),
        (I = m | 0),
        (f = w | 0),
        (m = p | 0),
        (w = y | 0),
        (p = b | 0),
        ({ h: y, l: b } = ye.add(d | 0, h | 0, se | 0, ge | 0)),
        (d = u | 0),
        (h = l | 0),
        (u = o | 0),
        (l = i | 0),
        (o = n | 0),
        (i = r | 0);
      const C = ye.add3L(ge, ne, L);
      (n = ye.add3H(C, se, J, R)), (r = C | 0);
    }
    ({ h: n, l: r } = ye.add(this.Ah | 0, this.Al | 0, n | 0, r | 0)),
      ({ h: o, l: i } = ye.add(this.Bh | 0, this.Bl | 0, o | 0, i | 0)),
      ({ h: u, l } = ye.add(this.Ch | 0, this.Cl | 0, u | 0, l | 0)),
      ({ h: d, l: h } = ye.add(this.Dh | 0, this.Dl | 0, d | 0, h | 0)),
      ({ h: y, l: b } = ye.add(this.Eh | 0, this.El | 0, y | 0, b | 0)),
      ({ h: w, l: p } = ye.add(this.Fh | 0, this.Fl | 0, w | 0, p | 0)),
      ({ h: f, l: m } = ye.add(this.Gh | 0, this.Gl | 0, f | 0, m | 0)),
      ({ h: x, l: I } = ye.add(this.Hh | 0, this.Hl | 0, x | 0, I | 0)),
      this.set(n, r, o, i, u, l, d, h, y, b, w, p, f, m, x, I);
  }
  roundClean() {
    Rt.fill(0), Bt.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Pi extends Us {
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
class Ni extends Us {
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
class Oi extends Us {
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
const Di = qt(() => new Us());
qt(() => new Pi());
qt(() => new Ni());
qt(() => new Oi());
const Ui = (e, t, s) => (e & t) ^ (~e & s),
  Mi = (e, t, s) => (e & t) ^ (e & s) ^ (t & s),
  Hi = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  vt = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Ct = new Uint32Array(64);
class Mr extends Dr {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = vt[0] | 0),
      (this.B = vt[1] | 0),
      (this.C = vt[2] | 0),
      (this.D = vt[3] | 0),
      (this.E = vt[4] | 0),
      (this.F = vt[5] | 0),
      (this.G = vt[6] | 0),
      (this.H = vt[7] | 0);
  }
  get() {
    const { A: t, B: s, C: n, D: r, E: o, F: i, G: u, H: l } = this;
    return [t, s, n, r, o, i, u, l];
  }
  set(t, s, n, r, o, i, u, l) {
    (this.A = t | 0),
      (this.B = s | 0),
      (this.C = n | 0),
      (this.D = r | 0),
      (this.E = o | 0),
      (this.F = i | 0),
      (this.G = u | 0),
      (this.H = l | 0);
  }
  process(t, s) {
    for (let y = 0; y < 16; y++, s += 4) Ct[y] = t.getUint32(s, !1);
    for (let y = 16; y < 64; y++) {
      const b = Ct[y - 15],
        w = Ct[y - 2],
        p = ht(b, 7) ^ ht(b, 18) ^ (b >>> 3),
        f = ht(w, 17) ^ ht(w, 19) ^ (w >>> 10);
      Ct[y] = (f + Ct[y - 7] + p + Ct[y - 16]) | 0;
    }
    let { A: n, B: r, C: o, D: i, E: u, F: l, G: d, H: h } = this;
    for (let y = 0; y < 64; y++) {
      const b = ht(u, 6) ^ ht(u, 11) ^ ht(u, 25),
        w = (h + b + Ui(u, l, d) + Hi[y] + Ct[y]) | 0,
        f = ((ht(n, 2) ^ ht(n, 13) ^ ht(n, 22)) + Mi(n, r, o)) | 0;
      (h = d), (d = l), (l = u), (u = (i + w) | 0), (i = o), (o = r), (r = n), (n = (w + f) | 0);
    }
    (n = (n + this.A) | 0),
      (r = (r + this.B) | 0),
      (o = (o + this.C) | 0),
      (i = (i + this.D) | 0),
      (u = (u + this.E) | 0),
      (l = (l + this.F) | 0),
      (d = (d + this.G) | 0),
      (h = (h + this.H) | 0),
      this.set(n, r, o, i, u, l, d, h);
  }
  roundClean() {
    Ct.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class Fi extends Mr {
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
const yn = qt(() => new Mr());
qt(() => new Fi());
var $e = {},
  Ki =
    (le && le.__createBinding) ||
    (Object.create
      ? function (e, t, s, n) {
          n === void 0 && (n = s),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[s];
              },
            });
        }
      : function (e, t, s, n) {
          n === void 0 && (n = s), (e[n] = t[s]);
        }),
  zi =
    (le && le.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  xt =
    (le && le.__decorate) ||
    function (e, t, s, n) {
      var r = arguments.length,
        o = r < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, s)) : n,
        i;
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(e, t, s, n);
      else
        for (var u = e.length - 1; u >= 0; u--)
          (i = e[u]) && (o = (r < 3 ? i(o) : r > 3 ? i(t, s, o) : i(t, s)) || o);
      return r > 3 && o && Object.defineProperty(t, s, o), o;
    },
  $i =
    (le && le.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var s in e) s !== 'default' && Object.hasOwnProperty.call(e, s) && Ki(t, e, s);
      return zi(t, e), t;
    },
  Hr =
    (le && le.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty($e, '__esModule', { value: !0 });
var Fr =
  ($e.deserializeUnchecked =
  qr =
  $e.deserialize =
  Gr =
  $e.serialize =
  $e.BinaryReader =
  $e.BinaryWriter =
  $e.BorshError =
  $e.baseDecode =
  $e.baseEncode =
    void 0);
const Pt = Hr(Ds()),
  Kr = Hr(_r),
  Wi = $i(Tr),
  Gi = typeof TextDecoder != 'function' ? Wi.TextDecoder : TextDecoder,
  qi = new Gi('utf-8', { fatal: !0 });
function ji(e) {
  return typeof e == 'string' && (e = ue.from(e, 'utf8')), Kr.default.encode(ue.from(e));
}
$e.baseEncode = ji;
function Vi(e) {
  return ue.from(Kr.default.decode(e));
}
$e.baseDecode = Vi;
const en = 1024;
let Ve = class extends Error {
  constructor(t) {
    super(t), (this.fieldPath = []), (this.originalMessage = t);
  }
  addToFieldPath(t) {
    this.fieldPath.splice(0, 0, t),
      (this.message = this.originalMessage + ': ' + this.fieldPath.join('.'));
  }
};
$e.BorshError = Ve;
let zr = class {
  constructor() {
    (this.buf = ue.alloc(en)), (this.length = 0);
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = ue.concat([this.buf, ue.alloc(en)]));
  }
  writeU8(t) {
    this.maybeResize(), this.buf.writeUInt8(t, this.length), (this.length += 1);
  }
  writeU16(t) {
    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), (this.length += 2);
  }
  writeU32(t) {
    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), (this.length += 4);
  }
  writeU64(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Pt.default(t).toArray('le', 8)));
  }
  writeU128(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Pt.default(t).toArray('le', 16)));
  }
  writeU256(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Pt.default(t).toArray('le', 32)));
  }
  writeU512(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Pt.default(t).toArray('le', 64)));
  }
  writeBuffer(t) {
    (this.buf = ue.concat([ue.from(this.buf.subarray(0, this.length)), t, ue.alloc(en)])),
      (this.length += t.length);
  }
  writeString(t) {
    this.maybeResize();
    const s = ue.from(t, 'utf8');
    this.writeU32(s.length), this.writeBuffer(s);
  }
  writeFixedArray(t) {
    this.writeBuffer(ue.from(t));
  }
  writeArray(t, s) {
    this.maybeResize(), this.writeU32(t.length);
    for (const n of t) this.maybeResize(), s(n);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
};
$e.BinaryWriter = zr;
function At(e, t, s) {
  const n = s.value;
  s.value = function (...r) {
    try {
      return n.apply(this, r);
    } catch (o) {
      if (o instanceof RangeError) {
        const i = o.code;
        if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(i) >= 0)
          throw new Ve('Reached the end of buffer when deserializing');
      }
      throw o;
    }
  };
}
let rt = class {
  constructor(t) {
    (this.buf = t), (this.offset = 0);
  }
  readU8() {
    const t = this.buf.readUInt8(this.offset);
    return (this.offset += 1), t;
  }
  readU16() {
    const t = this.buf.readUInt16LE(this.offset);
    return (this.offset += 2), t;
  }
  readU32() {
    const t = this.buf.readUInt32LE(this.offset);
    return (this.offset += 4), t;
  }
  readU64() {
    const t = this.readBuffer(8);
    return new Pt.default(t, 'le');
  }
  readU128() {
    const t = this.readBuffer(16);
    return new Pt.default(t, 'le');
  }
  readU256() {
    const t = this.readBuffer(32);
    return new Pt.default(t, 'le');
  }
  readU512() {
    const t = this.readBuffer(64);
    return new Pt.default(t, 'le');
  }
  readBuffer(t) {
    if (this.offset + t > this.buf.length)
      throw new Ve(`Expected buffer length ${t} isn't within bounds`);
    const s = this.buf.slice(this.offset, this.offset + t);
    return (this.offset += t), s;
  }
  readString() {
    const t = this.readU32(),
      s = this.readBuffer(t);
    try {
      return qi.decode(s);
    } catch (n) {
      throw new Ve(`Error decoding UTF-8 string: ${n}`);
    }
  }
  readFixedArray(t) {
    return new Uint8Array(this.readBuffer(t));
  }
  readArray(t) {
    const s = this.readU32(),
      n = Array();
    for (let r = 0; r < s; ++r) n.push(t());
    return n;
  }
};
xt([At], rt.prototype, 'readU8', null);
xt([At], rt.prototype, 'readU16', null);
xt([At], rt.prototype, 'readU32', null);
xt([At], rt.prototype, 'readU64', null);
xt([At], rt.prototype, 'readU128', null);
xt([At], rt.prototype, 'readU256', null);
xt([At], rt.prototype, 'readU512', null);
xt([At], rt.prototype, 'readString', null);
xt([At], rt.prototype, 'readFixedArray', null);
xt([At], rt.prototype, 'readArray', null);
$e.BinaryReader = rt;
function $r(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Mt(e, t, s, n, r) {
  try {
    if (typeof n == 'string') r[`write${$r(n)}`](s);
    else if (n instanceof Array)
      if (typeof n[0] == 'number') {
        if (s.length !== n[0])
          throw new Ve(`Expecting byte array of length ${n[0]}, but got ${s.length} bytes`);
        r.writeFixedArray(s);
      } else if (n.length === 2 && typeof n[1] == 'number') {
        if (s.length !== n[1])
          throw new Ve(`Expecting byte array of length ${n[1]}, but got ${s.length} bytes`);
        for (let o = 0; o < n[1]; o++) Mt(e, null, s[o], n[0], r);
      } else
        r.writeArray(s, (o) => {
          Mt(e, t, o, n[0], r);
        });
    else if (n.kind !== void 0)
      switch (n.kind) {
        case 'option': {
          s == null ? r.writeU8(0) : (r.writeU8(1), Mt(e, t, s, n.type, r));
          break;
        }
        case 'map': {
          r.writeU32(s.size),
            s.forEach((o, i) => {
              Mt(e, t, i, n.key, r), Mt(e, t, o, n.value, r);
            });
          break;
        }
        default:
          throw new Ve(`FieldType ${n} unrecognized`);
      }
    else Wr(e, s, r);
  } catch (o) {
    throw (o instanceof Ve && o.addToFieldPath(t), o);
  }
}
function Wr(e, t, s) {
  if (typeof t.borshSerialize == 'function') {
    t.borshSerialize(s);
    return;
  }
  const n = e.get(t.constructor);
  if (!n) throw new Ve(`Class ${t.constructor.name} is missing in schema`);
  if (n.kind === 'struct')
    n.fields.map(([r, o]) => {
      Mt(e, r, t[r], o, s);
    });
  else if (n.kind === 'enum') {
    const r = t[n.field];
    for (let o = 0; o < n.values.length; ++o) {
      const [i, u] = n.values[o];
      if (i === r) {
        s.writeU8(o), Mt(e, i, t[i], u, s);
        break;
      }
    }
  } else throw new Ve(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function Yi(e, t, s = zr) {
  const n = new s();
  return Wr(e, t, n), n.toArray();
}
var Gr = ($e.serialize = Yi);
function Ht(e, t, s, n) {
  try {
    if (typeof s == 'string') return n[`read${$r(s)}`]();
    if (s instanceof Array) {
      if (typeof s[0] == 'number') return n.readFixedArray(s[0]);
      if (typeof s[1] == 'number') {
        const r = [];
        for (let o = 0; o < s[1]; o++) r.push(Ht(e, null, s[0], n));
        return r;
      } else return n.readArray(() => Ht(e, t, s[0], n));
    }
    if (s.kind === 'option') return n.readU8() ? Ht(e, t, s.type, n) : void 0;
    if (s.kind === 'map') {
      let r = new Map();
      const o = n.readU32();
      for (let i = 0; i < o; i++) {
        const u = Ht(e, t, s.key, n),
          l = Ht(e, t, s.value, n);
        r.set(u, l);
      }
      return r;
    }
    return vn(e, s, n);
  } catch (r) {
    throw (r instanceof Ve && r.addToFieldPath(t), r);
  }
}
function vn(e, t, s) {
  if (typeof t.borshDeserialize == 'function') return t.borshDeserialize(s);
  const n = e.get(t);
  if (!n) throw new Ve(`Class ${t.name} is missing in schema`);
  if (n.kind === 'struct') {
    const r = {};
    for (const [o, i] of e.get(t).fields) r[o] = Ht(e, o, i, s);
    return new t(r);
  }
  if (n.kind === 'enum') {
    const r = s.readU8();
    if (r >= n.values.length) throw new Ve(`Enum index: ${r} is out of range`);
    const [o, i] = n.values[r],
      u = Ht(e, o, i, s);
    return new t({ [o]: u });
  }
  throw new Ve(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function Xi(e, t, s, n = rt) {
  const r = new n(s),
    o = vn(e, t, r);
  if (r.offset < s.length)
    throw new Ve(`Unexpected ${s.length - r.offset} bytes after deserialized data`);
  return o;
}
var qr = ($e.deserialize = Xi);
function Ji(e, t, s, n = rt) {
  const r = new n(s);
  return vn(e, t, r);
}
Fr = $e.deserializeUnchecked = Ji;
const [jr, Vr, Yr] = [[], [], []],
  Zi = BigInt(0),
  rs = BigInt(1),
  Qi = BigInt(2),
  ea = BigInt(7),
  ta = BigInt(256),
  sa = BigInt(113);
for (let e = 0, t = rs, s = 1, n = 0; e < 24; e++) {
  ([s, n] = [n, (2 * s + 3 * n) % 5]),
    jr.push(2 * (5 * n + s)),
    Vr.push((((e + 1) * (e + 2)) / 2) % 64);
  let r = Zi;
  for (let o = 0; o < 7; o++)
    (t = ((t << rs) ^ ((t >> ea) * sa)) % ta), t & Qi && (r ^= rs << ((rs << BigInt(o)) - rs));
  Yr.push(r);
}
const [na, ra] = ye.split(Yr, !0),
  nr = (e, t, s) => (s > 32 ? ye.rotlBH(e, t, s) : ye.rotlSH(e, t, s)),
  rr = (e, t, s) => (s > 32 ? ye.rotlBL(e, t, s) : ye.rotlSL(e, t, s));
function oa(e, t = 24) {
  const s = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let i = 0; i < 10; i++) s[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const u = (i + 8) % 10,
        l = (i + 2) % 10,
        d = s[l],
        h = s[l + 1],
        y = nr(d, h, 1) ^ s[u],
        b = rr(d, h, 1) ^ s[u + 1];
      for (let w = 0; w < 50; w += 10) (e[i + w] ^= y), (e[i + w + 1] ^= b);
    }
    let r = e[2],
      o = e[3];
    for (let i = 0; i < 24; i++) {
      const u = Vr[i],
        l = nr(r, o, u),
        d = rr(r, o, u),
        h = jr[i];
      (r = e[h]), (o = e[h + 1]), (e[h] = l), (e[h + 1] = d);
    }
    for (let i = 0; i < 50; i += 10) {
      for (let u = 0; u < 10; u++) s[u] = e[i + u];
      for (let u = 0; u < 10; u++) e[i + u] ^= ~s[(u + 2) % 10] & s[(u + 4) % 10];
    }
    (e[0] ^= na[n]), (e[1] ^= ra[n]);
  }
  s.fill(0);
}
class Ms extends Bn {
  constructor(t, s, n, r = !1, o = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = s),
      (this.outputLen = n),
      (this.enableXOF = r),
      (this.rounds = o),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      nt.number(n),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function');
    (this.state = new Uint8Array(200)), (this.state32 = oi(this.state));
  }
  keccak() {
    oa(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(t) {
    nt.exists(this);
    const { blockLen: s, state: n } = this;
    t = xs(t);
    const r = t.length;
    for (let o = 0; o < r; ) {
      const i = Math.min(s - this.pos, r - o);
      for (let u = 0; u < i; u++) n[this.pos++] ^= t[o++];
      this.pos === s && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: t, suffix: s, pos: n, blockLen: r } = this;
    (t[n] ^= s), s & 128 && n === r - 1 && this.keccak(), (t[r - 1] ^= 128), this.keccak();
  }
  writeInto(t) {
    nt.exists(this, !1), nt.bytes(t), this.finish();
    const s = this.state,
      { blockLen: n } = this;
    for (let r = 0, o = t.length; r < o; ) {
      this.posOut >= n && this.keccak();
      const i = Math.min(n - this.posOut, o - r);
      t.set(s.subarray(this.posOut, this.posOut + i), r), (this.posOut += i), (r += i);
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
    return this.writeInto(t);
  }
  xof(t) {
    return nt.number(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((nt.output(t, this), this.finished)) throw new Error('digest() was already called');
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: s, suffix: n, outputLen: r, rounds: o, enableXOF: i } = this;
    return (
      t || (t = new Ms(s, n, r, i, o)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = o),
      (t.suffix = n),
      (t.outputLen = r),
      (t.enableXOF = i),
      (t.destroyed = this.destroyed),
      t
    );
  }
}
const Ut = (e, t, s) => qt(() => new Ms(t, e, s));
Ut(6, 144, 224 / 8);
Ut(6, 136, 256 / 8);
Ut(6, 104, 384 / 8);
Ut(6, 72, 512 / 8);
Ut(1, 144, 224 / 8);
const or = Ut(1, 136, 256 / 8);
Ut(1, 104, 384 / 8);
Ut(1, 72, 512 / 8);
const Xr = (e, t, s) => ci((n = {}) => new Ms(t, e, n.dkLen === void 0 ? s : n.dkLen, !0));
Xr(31, 168, 128 / 8);
Xr(31, 136, 256 / 8);
class Jr extends Bn {
  constructor(t, s) {
    super(), (this.finished = !1), (this.destroyed = !1), nt.hash(t);
    const n = xs(s);
    if (((this.iHash = t.create()), typeof this.iHash.update != 'function'))
      throw new TypeError('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const r = this.blockLen,
      o = new Uint8Array(r);
    o.set(n.length > r ? t.create().update(n).digest() : n);
    for (let i = 0; i < o.length; i++) o[i] ^= 54;
    this.iHash.update(o), (this.oHash = t.create());
    for (let i = 0; i < o.length; i++) o[i] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(t) {
    return nt.exists(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    nt.exists(this),
      nt.bytes(t, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(t),
      this.oHash.update(t),
      this.oHash.digestInto(t),
      this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: s, iHash: n, finished: r, destroyed: o, blockLen: i, outputLen: u } = this;
    return (
      (t = t),
      (t.finished = r),
      (t.destroyed = o),
      (t.blockLen = i),
      (t.outputLen = u),
      (t.oHash = s._cloneInto(t.oHash)),
      (t.iHash = n._cloneInto(t.iHash)),
      t
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const Zr = (e, t, s) => new Jr(e, t).update(s).digest();
Zr.create = (e, t) => new Jr(e, t);
Ls.sha512Sync = (...e) => Di(Ls.concatBytes(...e));
const ia = Ls.randomPrivateKey,
  ir = () => {
    const e = Ls.randomPrivateKey(),
      t = Ns(e),
      s = new Uint8Array(64);
    return s.set(e), s.set(t, 32), { publicKey: t, secretKey: s };
  },
  Ns = _n.getPublicKey;
function ar(e) {
  try {
    return Po.fromHex(e, !0), !0;
  } catch {
    return !1;
  }
}
const Cn = (e, t) => _n.sign(e, t.slice(0, 32)),
  aa = _n.verify,
  be = (e) =>
    de.isBuffer(e)
      ? e
      : e instanceof Uint8Array
        ? de.from(e.buffer, e.byteOffset, e.byteLength)
        : de.from(e);
class Ln {
  constructor(t) {
    Object.assign(this, t);
  }
  encode() {
    return de.from(Gr(ls, this));
  }
  static decode(t) {
    return qr(ls, this, t);
  }
  static decodeUnchecked(t) {
    return Fr(ls, this, t);
  }
}
class ca extends Ln {
  constructor(t) {
    if ((super(t), (this.enum = ''), Object.keys(t).length !== 1))
      throw new Error('Enum can only take single value');
    Object.keys(t).map((s) => {
      this.enum = s;
    });
  }
}
const ls = new Map();
let Qr;
const eo = 32,
  Qe = 32;
function la(e) {
  return e._bn !== void 0;
}
let cr = 1;
Qr = Symbol.toStringTag;
class W extends Ln {
  constructor(t) {
    if ((super({}), (this._bn = void 0), la(t))) this._bn = t._bn;
    else {
      if (typeof t == 'string') {
        const s = We.decode(t);
        if (s.length != Qe) throw new Error('Invalid public key input');
        this._bn = new Xn(s);
      } else this._bn = new Xn(t);
      if (this._bn.byteLength() > Qe) throw new Error('Invalid public key input');
    }
  }
  static unique() {
    const t = new W(cr);
    return (cr += 1), new W(t.toBuffer());
  }
  equals(t) {
    return this._bn.eq(t._bn);
  }
  toBase58() {
    return We.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  toBytes() {
    const t = this.toBuffer();
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  toBuffer() {
    const t = this._bn.toArrayLike(de);
    if (t.length === Qe) return t;
    const s = de.alloc(32);
    return t.copy(s, 32 - t.length), s;
  }
  get [Qr]() {
    return `PublicKey(${this.toString()})`;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(t, s, n) {
    const r = de.concat([t.toBuffer(), de.from(s), n.toBuffer()]),
      o = yn(r);
    return new W(o);
  }
  static createProgramAddressSync(t, s) {
    let n = de.alloc(0);
    t.forEach(function (o) {
      if (o.length > eo) throw new TypeError('Max seed length exceeded');
      n = de.concat([n, be(o)]);
    }),
      (n = de.concat([n, s.toBuffer(), de.from('ProgramDerivedAddress')]));
    const r = yn(n);
    if (ar(r)) throw new Error('Invalid seeds, address must fall off the curve');
    return new W(r);
  }
  static async createProgramAddress(t, s) {
    return this.createProgramAddressSync(t, s);
  }
  static findProgramAddressSync(t, s) {
    let n = 255,
      r;
    for (; n != 0; ) {
      try {
        const o = t.concat(de.from([n]));
        r = this.createProgramAddressSync(o, s);
      } catch (o) {
        if (o instanceof TypeError) throw o;
        n--;
        continue;
      }
      return [r, n];
    }
    throw new Error('Unable to find a viable program address nonce');
  }
  static async findProgramAddress(t, s) {
    return this.findProgramAddressSync(t, s);
  }
  static isOnCurve(t) {
    const s = new W(t);
    return ar(s.toBytes());
  }
}
W.default = new W('11111111111111111111111111111111');
ls.set(W, { kind: 'struct', fields: [['_bn', 'u256']] });
class ua {
  constructor(t) {
    if (((this._publicKey = void 0), (this._secretKey = void 0), t)) {
      const s = be(t);
      if (t.length !== 64) throw new Error('bad secret key size');
      (this._publicKey = s.slice(32, 64)), (this._secretKey = s.slice(0, 32));
    } else (this._secretKey = be(ia())), (this._publicKey = be(Ns(this._secretKey)));
  }
  get publicKey() {
    return new W(this._publicKey);
  }
  get secretKey() {
    return de.concat([this._secretKey, this._publicKey], 64);
  }
}
const da = new W('BPFLoader1111111111111111111111111111111111'),
  Ot = 1232,
  Hs = 127,
  fs = 64;
class Pn extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: block height exceeded.`),
      (this.signature = void 0),
      (this.signature = t);
  }
}
Object.defineProperty(Pn.prototype, 'name', {
  value: 'TransactionExpiredBlockheightExceededError',
});
class Nn extends Error {
  constructor(t, s) {
    super(
      `Transaction was not confirmed in ${s.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`
    ),
      (this.signature = void 0),
      (this.signature = t);
  }
}
Object.defineProperty(Nn.prototype, 'name', { value: 'TransactionExpiredTimeoutError' });
class Yt extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: the nonce is no longer valid.`),
      (this.signature = void 0),
      (this.signature = t);
  }
}
Object.defineProperty(Yt.prototype, 'name', { value: 'TransactionExpiredNonceInvalidError' });
class ys {
  constructor(t, s) {
    (this.staticAccountKeys = void 0),
      (this.accountKeysFromLookups = void 0),
      (this.staticAccountKeys = t),
      (this.accountKeysFromLookups = s);
  }
  keySegments() {
    const t = [this.staticAccountKeys];
    return (
      this.accountKeysFromLookups &&
        (t.push(this.accountKeysFromLookups.writable),
        t.push(this.accountKeysFromLookups.readonly)),
      t
    );
  }
  get(t) {
    for (const s of this.keySegments()) {
      if (t < s.length) return s[t];
      t -= s.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(t) {
    if (this.length > 256) throw new Error('Account index overflow encountered during compilation');
    const n = new Map();
    this.keySegments()
      .flat()
      .forEach((o, i) => {
        n.set(o.toBase58(), i);
      });
    const r = (o) => {
      const i = n.get(o.toBase58());
      if (i === void 0)
        throw new Error('Encountered an unknown instruction account key during compilation');
      return i;
    };
    return t.map((o) => ({
      programIdIndex: r(o.programId),
      accountKeyIndexes: o.keys.map((i) => r(i.pubkey)),
      data: o.data,
    }));
  }
}
const Ae = (e = 'publicKey') => Ce(32, e),
  pa = (e = 'signature') => Ce(64, e),
  Kt = (e = 'string') => {
    const t = te([oe('length'), oe('lengthPadding'), Ce($t(oe(), -8), 'chars')], e),
      s = t.decode.bind(t),
      n = t.encode.bind(t),
      r = t;
    return (
      (r.decode = (o, i) => s(o, i).chars.toString()),
      (r.encode = (o, i, u) => {
        const l = { chars: de.from(o, 'utf8') };
        return n(l, i, u);
      }),
      (r.alloc = (o) => oe().span + oe().span + de.from(o, 'utf8').length),
      r
    );
  },
  ha = (e = 'authorized') => te([Ae('staker'), Ae('withdrawer')], e),
  fa = (e = 'lockup') => te([at('unixTimestamp'), at('epoch'), Ae('custodian')], e),
  ya = (e = 'voteInit') =>
    te([Ae('nodePubkey'), Ae('authorizedVoter'), Ae('authorizedWithdrawer'), xe('commission')], e),
  ga = (e = 'voteAuthorizeWithSeedArgs') =>
    te(
      [
        oe('voteAuthorizationType'),
        Ae('currentAuthorityDerivedKeyOwnerPubkey'),
        Kt('currentAuthorityDerivedKeySeed'),
        Ae('newAuthorized'),
      ],
      e
    );
function to(e, t) {
  const s = (r) => {
    if (r.span >= 0) return r.span;
    if (typeof r.alloc == 'function') return r.alloc(t[r.property]);
    if ('count' in r && 'elementLayout' in r) {
      const o = t[r.property];
      if (Array.isArray(o)) return o.length * s(r.elementLayout);
    } else if ('fields' in r) return to({ layout: r }, t[r.property]);
    return 0;
  };
  let n = 0;
  return (
    e.layout.fields.forEach((r) => {
      n += s(r);
    }),
    n
  );
}
function Je(e) {
  let t = 0,
    s = 0;
  for (;;) {
    let n = e.shift();
    if (((t |= (n & 127) << (s * 7)), (s += 1), !(n & 128))) break;
  }
  return t;
}
function st(e, t) {
  let s = t;
  for (;;) {
    let n = s & 127;
    if (((s >>= 7), s == 0)) {
      e.push(n);
      break;
    } else (n |= 128), e.push(n);
  }
}
function Ie(e, t) {
  if (!e) throw new Error(t || 'Assertion failed');
}
class Fs {
  constructor(t, s) {
    (this.payer = void 0), (this.keyMetaMap = void 0), (this.payer = t), (this.keyMetaMap = s);
  }
  static compile(t, s) {
    const n = new Map(),
      r = (i) => {
        const u = i.toBase58();
        let l = n.get(u);
        return (
          l === void 0 && ((l = { isSigner: !1, isWritable: !1, isInvoked: !1 }), n.set(u, l)), l
        );
      },
      o = r(s);
    (o.isSigner = !0), (o.isWritable = !0);
    for (const i of t) {
      r(i.programId).isInvoked = !0;
      for (const u of i.keys) {
        const l = r(u.pubkey);
        l.isSigner || (l.isSigner = u.isSigner), l.isWritable || (l.isWritable = u.isWritable);
      }
    }
    return new Fs(s, n);
  }
  getMessageComponents() {
    const t = [...this.keyMetaMap.entries()];
    Ie(t.length <= 256, 'Max static account keys length exceeded');
    const s = t.filter(([, l]) => l.isSigner && l.isWritable),
      n = t.filter(([, l]) => l.isSigner && !l.isWritable),
      r = t.filter(([, l]) => !l.isSigner && l.isWritable),
      o = t.filter(([, l]) => !l.isSigner && !l.isWritable),
      i = {
        numRequiredSignatures: s.length + n.length,
        numReadonlySignedAccounts: n.length,
        numReadonlyUnsignedAccounts: o.length,
      };
    {
      Ie(s.length > 0, 'Expected at least one writable signer key');
      const [l] = s[0];
      Ie(l === this.payer.toBase58(), 'Expected first writable signer key to be the fee payer');
    }
    const u = [
      ...s.map(([l]) => new W(l)),
      ...n.map(([l]) => new W(l)),
      ...r.map(([l]) => new W(l)),
      ...o.map(([l]) => new W(l)),
    ];
    return [i, u];
  }
  extractTableLookup(t) {
    const [s, n] = this.drainKeysFoundInLookupTable(
        t.state.addresses,
        (i) => !i.isSigner && !i.isInvoked && i.isWritable
      ),
      [r, o] = this.drainKeysFoundInLookupTable(
        t.state.addresses,
        (i) => !i.isSigner && !i.isInvoked && !i.isWritable
      );
    if (!(s.length === 0 && r.length === 0))
      return [
        { accountKey: t.key, writableIndexes: s, readonlyIndexes: r },
        { writable: n, readonly: o },
      ];
  }
  drainKeysFoundInLookupTable(t, s) {
    const n = new Array(),
      r = new Array();
    for (const [o, i] of this.keyMetaMap.entries())
      if (s(i)) {
        const u = new W(o),
          l = t.findIndex((d) => d.equals(u));
        l >= 0 &&
          (Ie(l < 256, 'Max lookup table index exceeded'),
          n.push(l),
          r.push(u),
          this.keyMetaMap.delete(o));
      }
    return [n, r];
  }
}
const so = 'Reached end of buffer unexpectedly';
function gt(e) {
  if (e.length === 0) throw new Error(so);
  return e.shift();
}
function Ze(e, ...t) {
  const [s] = t;
  if (t.length === 2 ? s + (t[1] ?? 0) > e.length : s >= e.length) throw new Error(so);
  return e.splice(...t);
}
class pt {
  constructor(t) {
    (this.header = void 0),
      (this.accountKeys = void 0),
      (this.recentBlockhash = void 0),
      (this.instructions = void 0),
      (this.indexToProgramIds = new Map()),
      (this.header = t.header),
      (this.accountKeys = t.accountKeys.map((s) => new W(s))),
      (this.recentBlockhash = t.recentBlockhash),
      (this.instructions = t.instructions),
      this.instructions.forEach((s) =>
        this.indexToProgramIds.set(s.programIdIndex, this.accountKeys[s.programIdIndex])
      );
  }
  get version() {
    return 'legacy';
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: We.decode(t.data),
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new ys(this.staticAccountKeys);
  }
  static compile(t) {
    const s = Fs.compile(t.instructions, t.payerKey),
      [n, r] = s.getMessageComponents(),
      i = new ys(r)
        .compileInstructions(t.instructions)
        .map((u) => ({
          programIdIndex: u.programIdIndex,
          accounts: u.accountKeyIndexes,
          data: We.encode(u.data),
        }));
    return new pt({
      header: n,
      accountKeys: r,
      recentBlockhash: t.recentBlockhash,
      instructions: i,
    });
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const s = this.header.numRequiredSignatures;
    if (t >= this.header.numRequiredSignatures) {
      const n = t - s,
        o = this.accountKeys.length - s - this.header.numReadonlyUnsignedAccounts;
      return n < o;
    } else {
      const n = s - this.header.numReadonlySignedAccounts;
      return t < n;
    }
  }
  isProgramId(t) {
    return this.indexToProgramIds.has(t);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((t, s) => !this.isProgramId(s));
  }
  serialize() {
    const t = this.accountKeys.length;
    let s = [];
    st(s, t);
    const n = this.instructions.map((y) => {
      const { accounts: b, programIdIndex: w } = y,
        p = Array.from(We.decode(y.data));
      let f = [];
      st(f, b.length);
      let m = [];
      return (
        st(m, p.length),
        {
          programIdIndex: w,
          keyIndicesCount: de.from(f),
          keyIndices: b,
          dataLength: de.from(m),
          data: p,
        }
      );
    });
    let r = [];
    st(r, n.length);
    let o = de.alloc(Ot);
    de.from(r).copy(o);
    let i = r.length;
    n.forEach((y) => {
      const w = te([
        xe('programIdIndex'),
        Ce(y.keyIndicesCount.length, 'keyIndicesCount'),
        Ge(xe('keyIndex'), y.keyIndices.length, 'keyIndices'),
        Ce(y.dataLength.length, 'dataLength'),
        Ge(xe('userdatum'), y.data.length, 'data'),
      ]).encode(y, o, i);
      i += w;
    }),
      (o = o.slice(0, i));
    const u = te([
        Ce(1, 'numRequiredSignatures'),
        Ce(1, 'numReadonlySignedAccounts'),
        Ce(1, 'numReadonlyUnsignedAccounts'),
        Ce(s.length, 'keyCount'),
        Ge(Ae('key'), t, 'keys'),
        Ae('recentBlockhash'),
      ]),
      l = {
        numRequiredSignatures: de.from([this.header.numRequiredSignatures]),
        numReadonlySignedAccounts: de.from([this.header.numReadonlySignedAccounts]),
        numReadonlyUnsignedAccounts: de.from([this.header.numReadonlyUnsignedAccounts]),
        keyCount: de.from(s),
        keys: this.accountKeys.map((y) => be(y.toBytes())),
        recentBlockhash: We.decode(this.recentBlockhash),
      };
    let d = de.alloc(2048);
    const h = u.encode(l, d);
    return o.copy(d, h), d.slice(0, h + o.length);
  }
  static from(t) {
    let s = [...t];
    const n = gt(s);
    if (n !== (n & Hs))
      throw new Error(
        'Versioned messages must be deserialized with VersionedMessage.deserialize()'
      );
    const r = gt(s),
      o = gt(s),
      i = Je(s);
    let u = [];
    for (let b = 0; b < i; b++) {
      const w = Ze(s, 0, Qe);
      u.push(new W(de.from(w)));
    }
    const l = Ze(s, 0, Qe),
      d = Je(s);
    let h = [];
    for (let b = 0; b < d; b++) {
      const w = gt(s),
        p = Je(s),
        f = Ze(s, 0, p),
        m = Je(s),
        x = Ze(s, 0, m),
        I = We.encode(de.from(x));
      h.push({ programIdIndex: w, accounts: f, data: I });
    }
    const y = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: r,
        numReadonlyUnsignedAccounts: o,
      },
      recentBlockhash: We.encode(de.from(l)),
      accountKeys: u,
      instructions: h,
    };
    return new pt(y);
  }
}
class Wt {
  constructor(t) {
    (this.header = void 0),
      (this.staticAccountKeys = void 0),
      (this.recentBlockhash = void 0),
      (this.compiledInstructions = void 0),
      (this.addressTableLookups = void 0),
      (this.header = t.header),
      (this.staticAccountKeys = t.staticAccountKeys),
      (this.recentBlockhash = t.recentBlockhash),
      (this.compiledInstructions = t.compiledInstructions),
      (this.addressTableLookups = t.addressTableLookups);
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let t = 0;
    for (const s of this.addressTableLookups)
      t += s.readonlyIndexes.length + s.writableIndexes.length;
    return t;
  }
  getAccountKeys(t) {
    let s;
    if (t && 'accountKeysFromLookups' in t && t.accountKeysFromLookups) {
      if (
        this.numAccountKeysFromLookups !=
        t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length
      )
        throw new Error(
          'Failed to get account keys because of a mismatch in the number of account keys from lookups'
        );
      s = t.accountKeysFromLookups;
    } else if (t && 'addressLookupTableAccounts' in t && t.addressLookupTableAccounts)
      s = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error('Failed to get account keys because address table lookups were not resolved');
    return new ys(this.staticAccountKeys, s);
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const s = this.header.numRequiredSignatures,
      n = this.staticAccountKeys.length;
    if (t >= n) {
      const r = t - n,
        o = this.addressTableLookups.reduce((i, u) => i + u.writableIndexes.length, 0);
      return r < o;
    } else if (t >= this.header.numRequiredSignatures) {
      const r = t - s,
        i = n - s - this.header.numReadonlyUnsignedAccounts;
      return r < i;
    } else {
      const r = s - this.header.numReadonlySignedAccounts;
      return t < r;
    }
  }
  resolveAddressTableLookups(t) {
    const s = { writable: [], readonly: [] };
    for (const n of this.addressTableLookups) {
      const r = t.find((o) => o.key.equals(n.accountKey));
      if (!r)
        throw new Error(
          `Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`
        );
      for (const o of n.writableIndexes)
        if (o < r.state.addresses.length) s.writable.push(r.state.addresses[o]);
        else
          throw new Error(
            `Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`
          );
      for (const o of n.readonlyIndexes)
        if (o < r.state.addresses.length) s.readonly.push(r.state.addresses[o]);
        else
          throw new Error(
            `Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`
          );
    }
    return s;
  }
  static compile(t) {
    const s = Fs.compile(t.instructions, t.payerKey),
      n = new Array(),
      r = { writable: new Array(), readonly: new Array() },
      o = t.addressLookupTableAccounts || [];
    for (const h of o) {
      const y = s.extractTableLookup(h);
      if (y !== void 0) {
        const [b, { writable: w, readonly: p }] = y;
        n.push(b), r.writable.push(...w), r.readonly.push(...p);
      }
    }
    const [i, u] = s.getMessageComponents(),
      d = new ys(u, r).compileInstructions(t.instructions);
    return new Wt({
      header: i,
      staticAccountKeys: u,
      recentBlockhash: t.recentBlockhash,
      compiledInstructions: d,
      addressTableLookups: n,
    });
  }
  serialize() {
    const t = Array();
    st(t, this.staticAccountKeys.length);
    const s = this.serializeInstructions(),
      n = Array();
    st(n, this.compiledInstructions.length);
    const r = this.serializeAddressTableLookups(),
      o = Array();
    st(o, this.addressTableLookups.length);
    const i = te([
        xe('prefix'),
        te(
          [
            xe('numRequiredSignatures'),
            xe('numReadonlySignedAccounts'),
            xe('numReadonlyUnsignedAccounts'),
          ],
          'header'
        ),
        Ce(t.length, 'staticAccountKeysLength'),
        Ge(Ae(), this.staticAccountKeys.length, 'staticAccountKeys'),
        Ae('recentBlockhash'),
        Ce(n.length, 'instructionsLength'),
        Ce(s.length, 'serializedInstructions'),
        Ce(o.length, 'addressTableLookupsLength'),
        Ce(r.length, 'serializedAddressTableLookups'),
      ]),
      u = new Uint8Array(Ot),
      d = i.encode(
        {
          prefix: 128,
          header: this.header,
          staticAccountKeysLength: new Uint8Array(t),
          staticAccountKeys: this.staticAccountKeys.map((h) => h.toBytes()),
          recentBlockhash: We.decode(this.recentBlockhash),
          instructionsLength: new Uint8Array(n),
          serializedInstructions: s,
          addressTableLookupsLength: new Uint8Array(o),
          serializedAddressTableLookups: r,
        },
        u
      );
    return u.slice(0, d);
  }
  serializeInstructions() {
    let t = 0;
    const s = new Uint8Array(Ot);
    for (const n of this.compiledInstructions) {
      const r = Array();
      st(r, n.accountKeyIndexes.length);
      const o = Array();
      st(o, n.data.length);
      const i = te([
        xe('programIdIndex'),
        Ce(r.length, 'encodedAccountKeyIndexesLength'),
        Ge(xe(), n.accountKeyIndexes.length, 'accountKeyIndexes'),
        Ce(o.length, 'encodedDataLength'),
        Ce(n.data.length, 'data'),
      ]);
      t += i.encode(
        {
          programIdIndex: n.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(r),
          accountKeyIndexes: n.accountKeyIndexes,
          encodedDataLength: new Uint8Array(o),
          data: n.data,
        },
        s,
        t
      );
    }
    return s.slice(0, t);
  }
  serializeAddressTableLookups() {
    let t = 0;
    const s = new Uint8Array(Ot);
    for (const n of this.addressTableLookups) {
      const r = Array();
      st(r, n.writableIndexes.length);
      const o = Array();
      st(o, n.readonlyIndexes.length);
      const i = te([
        Ae('accountKey'),
        Ce(r.length, 'encodedWritableIndexesLength'),
        Ge(xe(), n.writableIndexes.length, 'writableIndexes'),
        Ce(o.length, 'encodedReadonlyIndexesLength'),
        Ge(xe(), n.readonlyIndexes.length, 'readonlyIndexes'),
      ]);
      t += i.encode(
        {
          accountKey: n.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(r),
          writableIndexes: n.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(o),
          readonlyIndexes: n.readonlyIndexes,
        },
        s,
        t
      );
    }
    return s.slice(0, t);
  }
  static deserialize(t) {
    let s = [...t];
    const n = gt(s),
      r = n & Hs;
    Ie(n !== r, 'Expected versioned message but received legacy message');
    const o = r;
    Ie(o === 0, `Expected versioned message with version 0 but found version ${o}`);
    const i = {
        numRequiredSignatures: gt(s),
        numReadonlySignedAccounts: gt(s),
        numReadonlyUnsignedAccounts: gt(s),
      },
      u = [],
      l = Je(s);
    for (let p = 0; p < l; p++) u.push(new W(Ze(s, 0, Qe)));
    const d = We.encode(Ze(s, 0, Qe)),
      h = Je(s),
      y = [];
    for (let p = 0; p < h; p++) {
      const f = gt(s),
        m = Je(s),
        x = Ze(s, 0, m),
        I = Je(s),
        _ = new Uint8Array(Ze(s, 0, I));
      y.push({ programIdIndex: f, accountKeyIndexes: x, data: _ });
    }
    const b = Je(s),
      w = [];
    for (let p = 0; p < b; p++) {
      const f = new W(Ze(s, 0, Qe)),
        m = Je(s),
        x = Ze(s, 0, m),
        I = Je(s),
        _ = Ze(s, 0, I);
      w.push({ accountKey: f, writableIndexes: x, readonlyIndexes: _ });
    }
    return new Wt({
      header: i,
      staticAccountKeys: u,
      recentBlockhash: d,
      compiledInstructions: y,
      addressTableLookups: w,
    });
  }
}
const On = {
  deserializeMessageVersion(e) {
    const t = e[0],
      s = t & Hs;
    return s === t ? 'legacy' : s;
  },
  deserialize: (e) => {
    const t = On.deserializeMessageVersion(e);
    if (t === 'legacy') return pt.from(e);
    if (t === 0) return Wt.deserialize(e);
    throw new Error(`Transaction message version ${t} deserialization is not supported`);
  },
};
let lt;
(function (e) {
  (e[(e.BLOCKHEIGHT_EXCEEDED = 0)] = 'BLOCKHEIGHT_EXCEEDED'),
    (e[(e.PROCESSED = 1)] = 'PROCESSED'),
    (e[(e.TIMED_OUT = 2)] = 'TIMED_OUT'),
    (e[(e.NONCE_INVALID = 3)] = 'NONCE_INVALID');
})(lt || (lt = {}));
const ma = de.alloc(fs).fill(0);
class Te {
  constructor(t) {
    (this.keys = void 0),
      (this.programId = void 0),
      (this.data = de.alloc(0)),
      (this.programId = t.programId),
      (this.keys = t.keys),
      t.data && (this.data = t.data);
  }
  toJSON() {
    return {
      keys: this.keys.map(({ pubkey: t, isSigner: s, isWritable: n }) => ({
        pubkey: t.toJSON(),
        isSigner: s,
        isWritable: n,
      })),
      programId: this.programId.toJSON(),
      data: [...this.data],
    };
  }
}
class _e {
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  constructor(t) {
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
      !!t)
    )
      if (
        (t.feePayer && (this.feePayer = t.feePayer),
        t.signatures && (this.signatures = t.signatures),
        Object.prototype.hasOwnProperty.call(t, 'nonceInfo'))
      ) {
        const { minContextSlot: s, nonceInfo: n } = t;
        (this.minNonceContextSlot = s), (this.nonceInfo = n);
      } else if (Object.prototype.hasOwnProperty.call(t, 'lastValidBlockHeight')) {
        const { blockhash: s, lastValidBlockHeight: n } = t;
        (this.recentBlockhash = s), (this.lastValidBlockHeight = n);
      } else {
        const { recentBlockhash: s, nonceInfo: n } = t;
        n && (this.nonceInfo = n), (this.recentBlockhash = s);
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
      instructions: this.instructions.map((t) => t.toJSON()),
      signers: this.signatures.map(({ publicKey: t }) => t.toJSON()),
    };
  }
  add(...t) {
    if (t.length === 0) throw new Error('No instructions');
    return (
      t.forEach((s) => {
        'instructions' in s
          ? (this.instructions = this.instructions.concat(s.instructions))
          : 'data' in s && 'programId' in s && 'keys' in s
            ? this.instructions.push(s)
            : this.instructions.push(new Te(s));
      }),
      this
    );
  }
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let t, s;
    if (
      (this.nonceInfo
        ? ((t = this.nonceInfo.nonce),
          this.instructions[0] != this.nonceInfo.nonceInstruction
            ? (s = [this.nonceInfo.nonceInstruction, ...this.instructions])
            : (s = this.instructions))
        : ((t = this.recentBlockhash), (s = this.instructions)),
      !t)
    )
      throw new Error('Transaction recentBlockhash required');
    s.length < 1 && console.warn('No instructions provided');
    let n;
    if (this.feePayer) n = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      n = this.signatures[0].publicKey;
    else throw new Error('Transaction fee payer required');
    for (let f = 0; f < s.length; f++)
      if (s[f].programId === void 0)
        throw new Error(`Transaction instruction index ${f} has undefined program id`);
    const r = [],
      o = [];
    s.forEach((f) => {
      f.keys.forEach((x) => {
        o.push({ ...x });
      });
      const m = f.programId.toString();
      r.includes(m) || r.push(m);
    }),
      r.forEach((f) => {
        o.push({ pubkey: new W(f), isSigner: !1, isWritable: !1 });
      });
    const i = [];
    o.forEach((f) => {
      const m = f.pubkey.toString(),
        x = i.findIndex((I) => I.pubkey.toString() === m);
      x > -1
        ? ((i[x].isWritable = i[x].isWritable || f.isWritable),
          (i[x].isSigner = i[x].isSigner || f.isSigner))
        : i.push(f);
    }),
      i.sort(function (f, m) {
        return f.isSigner !== m.isSigner
          ? f.isSigner
            ? -1
            : 1
          : f.isWritable !== m.isWritable
            ? f.isWritable
              ? -1
              : 1
            : f.pubkey.toBase58().localeCompare(m.pubkey.toBase58());
      });
    const u = i.findIndex((f) => f.pubkey.equals(n));
    if (u > -1) {
      const [f] = i.splice(u, 1);
      (f.isSigner = !0), (f.isWritable = !0), i.unshift(f);
    } else i.unshift({ pubkey: n, isSigner: !0, isWritable: !0 });
    for (const f of this.signatures) {
      const m = i.findIndex((x) => x.pubkey.equals(f.publicKey));
      if (m > -1)
        i[m].isSigner ||
          ((i[m].isSigner = !0),
          console.warn(
            'Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.'
          ));
      else throw new Error(`unknown signer: ${f.publicKey.toString()}`);
    }
    let l = 0,
      d = 0,
      h = 0;
    const y = [],
      b = [];
    i.forEach(({ pubkey: f, isSigner: m, isWritable: x }) => {
      m ? (y.push(f.toString()), (l += 1), x || (d += 1)) : (b.push(f.toString()), x || (h += 1));
    });
    const w = y.concat(b),
      p = s.map((f) => {
        const { data: m, programId: x } = f;
        return {
          programIdIndex: w.indexOf(x.toString()),
          accounts: f.keys.map((I) => w.indexOf(I.pubkey.toString())),
          data: We.encode(m),
        };
      });
    return (
      p.forEach((f) => {
        Ie(f.programIdIndex >= 0), f.accounts.forEach((m) => Ie(m >= 0));
      }),
      new pt({
        header: {
          numRequiredSignatures: l,
          numReadonlySignedAccounts: d,
          numReadonlyUnsignedAccounts: h,
        },
        accountKeys: w,
        recentBlockhash: t,
        instructions: p,
      })
    );
  }
  _compile() {
    const t = this.compileMessage(),
      s = t.accountKeys.slice(0, t.header.numRequiredSignatures);
    return (
      (this.signatures.length === s.length &&
        this.signatures.every((r, o) => s[o].equals(r.publicKey))) ||
        (this.signatures = s.map((n) => ({ signature: null, publicKey: n }))),
      t
    );
  }
  serializeMessage() {
    return this._compile().serialize();
  }
  async getEstimatedFee(t) {
    return (await t.getFeeForMessage(this.compileMessage())).value;
  }
  setSigners(...t) {
    if (t.length === 0) throw new Error('No signers');
    const s = new Set();
    this.signatures = t
      .filter((n) => {
        const r = n.toString();
        return s.has(r) ? !1 : (s.add(r), !0);
      })
      .map((n) => ({ signature: null, publicKey: n }));
  }
  sign(...t) {
    if (t.length === 0) throw new Error('No signers');
    const s = new Set(),
      n = [];
    for (const o of t) {
      const i = o.publicKey.toString();
      s.has(i) || (s.add(i), n.push(o));
    }
    this.signatures = n.map((o) => ({ signature: null, publicKey: o.publicKey }));
    const r = this._compile();
    this._partialSign(r, ...n);
  }
  partialSign(...t) {
    if (t.length === 0) throw new Error('No signers');
    const s = new Set(),
      n = [];
    for (const o of t) {
      const i = o.publicKey.toString();
      s.has(i) || (s.add(i), n.push(o));
    }
    const r = this._compile();
    this._partialSign(r, ...n);
  }
  _partialSign(t, ...s) {
    const n = t.serialize();
    s.forEach((r) => {
      const o = Cn(n, r.secretKey);
      this._addSignature(r.publicKey, be(o));
    });
  }
  addSignature(t, s) {
    this._compile(), this._addSignature(t, s);
  }
  _addSignature(t, s) {
    Ie(s.length === 64);
    const n = this.signatures.findIndex((r) => t.equals(r.publicKey));
    if (n < 0) throw new Error(`unknown signer: ${t.toString()}`);
    this.signatures[n].signature = de.from(s);
  }
  verifySignatures(t) {
    return this._verifySignatures(this.serializeMessage(), t === void 0 ? !0 : t);
  }
  _verifySignatures(t, s) {
    for (const { signature: n, publicKey: r } of this.signatures)
      if (n === null) {
        if (s) return !1;
      } else if (!aa(n, t, r.toBytes())) return !1;
    return !0;
  }
  serialize(t) {
    const { requireAllSignatures: s, verifySignatures: n } = Object.assign(
        { requireAllSignatures: !0, verifySignatures: !0 },
        t
      ),
      r = this.serializeMessage();
    if (n && !this._verifySignatures(r, s)) throw new Error('Signature verification failed');
    return this._serialize(r);
  }
  _serialize(t) {
    const { signatures: s } = this,
      n = [];
    st(n, s.length);
    const r = n.length + s.length * 64 + t.length,
      o = de.alloc(r);
    return (
      Ie(s.length < 256),
      de.from(n).copy(o, 0),
      s.forEach(({ signature: i }, u) => {
        i !== null &&
          (Ie(i.length === 64, 'signature has invalid length'),
          de.from(i).copy(o, n.length + u * 64));
      }),
      t.copy(o, n.length + s.length * 64),
      Ie(o.length <= Ot, `Transaction too large: ${o.length} > ${Ot}`),
      o
    );
  }
  get keys() {
    return Ie(this.instructions.length === 1), this.instructions[0].keys.map((t) => t.pubkey);
  }
  get programId() {
    return Ie(this.instructions.length === 1), this.instructions[0].programId;
  }
  get data() {
    return Ie(this.instructions.length === 1), this.instructions[0].data;
  }
  static from(t) {
    let s = [...t];
    const n = Je(s);
    let r = [];
    for (let o = 0; o < n; o++) {
      const i = Ze(s, 0, fs);
      r.push(We.encode(de.from(i)));
    }
    return _e.populate(pt.from(s), r);
  }
  static populate(t, s = []) {
    const n = new _e();
    return (
      (n.recentBlockhash = t.recentBlockhash),
      t.header.numRequiredSignatures > 0 && (n.feePayer = t.accountKeys[0]),
      s.forEach((r, o) => {
        const i = {
          signature: r == We.encode(ma) ? null : We.decode(r),
          publicKey: t.accountKeys[o],
        };
        n.signatures.push(i);
      }),
      t.instructions.forEach((r) => {
        const o = r.accounts.map((i) => {
          const u = t.accountKeys[i];
          return {
            pubkey: u,
            isSigner:
              n.signatures.some((l) => l.publicKey.toString() === u.toString()) ||
              t.isAccountSigner(i),
            isWritable: t.isAccountWritable(i),
          };
        });
        n.instructions.push(
          new Te({ keys: o, programId: t.accountKeys[r.programIdIndex], data: We.decode(r.data) })
        );
      }),
      (n._message = t),
      (n._json = n.toJSON()),
      n
    );
  }
}
class Dn {
  constructor(t) {
    (this.payerKey = void 0),
      (this.instructions = void 0),
      (this.recentBlockhash = void 0),
      (this.payerKey = t.payerKey),
      (this.instructions = t.instructions),
      (this.recentBlockhash = t.recentBlockhash);
  }
  static decompile(t, s) {
    const { header: n, compiledInstructions: r, recentBlockhash: o } = t,
      {
        numRequiredSignatures: i,
        numReadonlySignedAccounts: u,
        numReadonlyUnsignedAccounts: l,
      } = n,
      d = i - u;
    Ie(d > 0, 'Message header is invalid');
    const h = t.staticAccountKeys.length - i - l;
    Ie(h >= 0, 'Message header is invalid');
    const y = t.getAccountKeys(s),
      b = y.get(0);
    if (b === void 0)
      throw new Error('Failed to decompile message because no account keys were found');
    const w = [];
    for (const p of r) {
      const f = [];
      for (const x of p.accountKeyIndexes) {
        const I = y.get(x);
        if (I === void 0) throw new Error(`Failed to find key for account key index ${x}`);
        const _ = x < i;
        let E;
        _
          ? (E = x < d)
          : x < y.staticAccountKeys.length
            ? (E = x - i < h)
            : (E = x - y.staticAccountKeys.length < y.accountKeysFromLookups.writable.length),
          f.push({ pubkey: I, isSigner: x < n.numRequiredSignatures, isWritable: E });
      }
      const m = y.get(p.programIdIndex);
      if (m === void 0)
        throw new Error(`Failed to find program id for program id index ${p.programIdIndex}`);
      w.push(new Te({ programId: m, data: be(p.data), keys: f }));
    }
    return new Dn({ payerKey: b, instructions: w, recentBlockhash: o });
  }
  compileToLegacyMessage() {
    return pt.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
    });
  }
  compileToV0Message(t) {
    return Wt.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
      addressLookupTableAccounts: t,
    });
  }
}
class Un {
  get version() {
    return this.message.version;
  }
  constructor(t, s) {
    if (((this.signatures = void 0), (this.message = void 0), s !== void 0))
      Ie(
        s.length === t.header.numRequiredSignatures,
        'Expected signatures length to be equal to the number of required signatures'
      ),
        (this.signatures = s);
    else {
      const n = [];
      for (let r = 0; r < t.header.numRequiredSignatures; r++) n.push(new Uint8Array(fs));
      this.signatures = n;
    }
    this.message = t;
  }
  serialize() {
    const t = this.message.serialize(),
      s = Array();
    st(s, this.signatures.length);
    const n = te([
        Ce(s.length, 'encodedSignaturesLength'),
        Ge(pa(), this.signatures.length, 'signatures'),
        Ce(t.length, 'serializedMessage'),
      ]),
      r = new Uint8Array(2048),
      o = n.encode(
        {
          encodedSignaturesLength: new Uint8Array(s),
          signatures: this.signatures,
          serializedMessage: t,
        },
        r
      );
    return r.slice(0, o);
  }
  static deserialize(t) {
    let s = [...t];
    const n = [],
      r = Je(s);
    for (let i = 0; i < r; i++) n.push(new Uint8Array(Ze(s, 0, fs)));
    const o = On.deserialize(new Uint8Array(s));
    return new Un(o, n);
  }
  sign(t) {
    const s = this.message.serialize(),
      n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    for (const r of t) {
      const o = n.findIndex((i) => i.equals(r.publicKey));
      Ie(o >= 0, `Cannot sign with non signer key ${r.publicKey.toBase58()}`),
        (this.signatures[o] = Cn(s, r.secretKey));
    }
  }
  addSignature(t, s) {
    Ie(s.byteLength === 64, 'Signature must be 64 bytes long');
    const r = this.message.staticAccountKeys
      .slice(0, this.message.header.numRequiredSignatures)
      .findIndex((o) => o.equals(t));
    Ie(
      r >= 0,
      `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`
    ),
      (this.signatures[r] = s);
  }
}
const yt = new W('SysvarC1ock11111111111111111111111111111111'),
  ba = new W('SysvarEpochSchedu1e111111111111111111111111'),
  wa = new W('Sysvar1nstructions1111111111111111111111111'),
  Bs = new W('SysvarRecentB1ockHashes11111111111111111111'),
  Qt = new W('SysvarRent111111111111111111111111111111111'),
  xa = new W('SysvarRewards111111111111111111111111111111'),
  Aa = new W('SysvarS1otHashes111111111111111111111111111'),
  ka = new W('SysvarS1otHistory11111111111111111111111111'),
  vs = new W('SysvarStakeHistory1111111111111111111111111');
async function Cs(e, t, s, n) {
  const r = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
      maxRetries: n.maxRetries,
      minContextSlot: n.minContextSlot,
    },
    o = await e.sendTransaction(t, s, r);
  let i;
  if (t.recentBlockhash != null && t.lastValidBlockHeight != null)
    i = (
      await e.confirmTransaction(
        {
          abortSignal: n == null ? void 0 : n.abortSignal,
          signature: o,
          blockhash: t.recentBlockhash,
          lastValidBlockHeight: t.lastValidBlockHeight,
        },
        n && n.commitment
      )
    ).value;
  else if (t.minNonceContextSlot != null && t.nonceInfo != null) {
    const { nonceInstruction: u } = t.nonceInfo,
      l = u.keys[0].pubkey;
    i = (
      await e.confirmTransaction(
        {
          abortSignal: n == null ? void 0 : n.abortSignal,
          minContextSlot: t.minNonceContextSlot,
          nonceAccountPubkey: l,
          nonceValue: t.nonceInfo.nonce,
          signature: o,
        },
        n && n.commitment
      )
    ).value;
  } else
    (n == null ? void 0 : n.abortSignal) != null &&
      console.warn(
        'sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.'
      ),
      (i = (await e.confirmTransaction(o, n && n.commitment)).value);
  if (i.err) throw new Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
  return o;
}
function Ft(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Se(e, t) {
  const s = e.layout.span >= 0 ? e.layout.span : to(e, t),
    n = de.alloc(s),
    r = Object.assign({ instruction: e.index }, t);
  return e.layout.encode(r, n), n;
}
function Ee(e, t) {
  let s;
  try {
    s = e.layout.decode(t);
  } catch (n) {
    throw new Error('invalid instruction; ' + n);
  }
  if (s.instruction !== e.index)
    throw new Error(
      `invalid instruction; instruction index mismatch ${s.instruction} != ${e.index}`
    );
  return s;
}
const no = je('lamportsPerSignature'),
  ro = te([
    oe('version'),
    oe('state'),
    Ae('authorizedPubkey'),
    Ae('nonce'),
    te([no], 'feeCalculator'),
  ]),
  gn = ro.span;
class Ks {
  constructor(t) {
    (this.authorizedPubkey = void 0),
      (this.nonce = void 0),
      (this.feeCalculator = void 0),
      (this.authorizedPubkey = t.authorizedPubkey),
      (this.nonce = t.nonce),
      (this.feeCalculator = t.feeCalculator);
  }
  static fromAccountData(t) {
    const s = ro.decode(be(t), 0);
    return new Ks({
      authorizedPubkey: new W(s.authorizedPubkey),
      nonce: new W(s.nonce).toString(),
      feeCalculator: s.feeCalculator,
    });
  }
}
const Sa = (e) => {
    const t = e.decode.bind(e),
      s = e.encode.bind(e);
    return { decode: t, encode: s };
  },
  Ia = (e) => (t) => {
    const s = Ce(e, t),
      { encode: n, decode: r } = Sa(s),
      o = s;
    return (
      (o.decode = (i, u) => {
        const l = r(i, u);
        return No(de.from(l));
      }),
      (o.encode = (i, u, l) => {
        const d = vr(i, e);
        return n(d, u, l);
      }),
      o
    );
  },
  es = Ia(8);
class Ea {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const n = oe('instruction').decode(t.data);
    let r;
    for (const [o, i] of Object.entries(Be))
      if (i.index == n) {
        r = o;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a SystemInstruction');
    return r;
  }
  static decodeCreateAccount(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { lamports: s, space: n, programId: r } = Ee(Be.Create, t.data);
    return {
      fromPubkey: t.keys[0].pubkey,
      newAccountPubkey: t.keys[1].pubkey,
      lamports: s,
      space: n,
      programId: new W(r),
    };
  }
  static decodeTransfer(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { lamports: s } = Ee(Be.Transfer, t.data);
    return { fromPubkey: t.keys[0].pubkey, toPubkey: t.keys[1].pubkey, lamports: s };
  }
  static decodeTransferWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { lamports: s, seed: n, programId: r } = Ee(Be.TransferWithSeed, t.data);
    return {
      fromPubkey: t.keys[0].pubkey,
      basePubkey: t.keys[1].pubkey,
      toPubkey: t.keys[2].pubkey,
      lamports: s,
      seed: n,
      programId: new W(r),
    };
  }
  static decodeAllocate(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const { space: s } = Ee(Be.Allocate, t.data);
    return { accountPubkey: t.keys[0].pubkey, space: s };
  }
  static decodeAllocateWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const { base: s, seed: n, space: r, programId: o } = Ee(Be.AllocateWithSeed, t.data);
    return {
      accountPubkey: t.keys[0].pubkey,
      basePubkey: new W(s),
      seed: n,
      space: r,
      programId: new W(o),
    };
  }
  static decodeAssign(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const { programId: s } = Ee(Be.Assign, t.data);
    return { accountPubkey: t.keys[0].pubkey, programId: new W(s) };
  }
  static decodeAssignWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const { base: s, seed: n, programId: r } = Ee(Be.AssignWithSeed, t.data);
    return { accountPubkey: t.keys[0].pubkey, basePubkey: new W(s), seed: n, programId: new W(r) };
  }
  static decodeCreateWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { base: s, seed: n, lamports: r, space: o, programId: i } = Ee(Be.CreateWithSeed, t.data);
    return {
      fromPubkey: t.keys[0].pubkey,
      newAccountPubkey: t.keys[1].pubkey,
      basePubkey: new W(s),
      seed: n,
      lamports: r,
      space: o,
      programId: new W(i),
    };
  }
  static decodeNonceInitialize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { authorized: s } = Ee(Be.InitializeNonceAccount, t.data);
    return { noncePubkey: t.keys[0].pubkey, authorizedPubkey: new W(s) };
  }
  static decodeNonceAdvance(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 3),
      Ee(Be.AdvanceNonceAccount, t.data),
      { noncePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey }
    );
  }
  static decodeNonceWithdraw(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
    const { lamports: s } = Ee(Be.WithdrawNonceAccount, t.data);
    return {
      noncePubkey: t.keys[0].pubkey,
      toPubkey: t.keys[1].pubkey,
      authorizedPubkey: t.keys[4].pubkey,
      lamports: s,
    };
  }
  static decodeNonceAuthorize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { authorized: s } = Ee(Be.AuthorizeNonceAccount, t.data);
    return {
      noncePubkey: t.keys[0].pubkey,
      authorizedPubkey: t.keys[1].pubkey,
      newAuthorizedPubkey: new W(s),
    };
  }
  static checkProgramId(t) {
    if (!t.equals(qe.programId))
      throw new Error('invalid instruction; programId is not SystemProgram');
  }
  static checkKeyLength(t, s) {
    if (t.length < s)
      throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${s}`);
  }
}
const Be = Object.freeze({
  Create: {
    index: 0,
    layout: te([oe('instruction'), at('lamports'), at('space'), Ae('programId')]),
  },
  Assign: { index: 1, layout: te([oe('instruction'), Ae('programId')]) },
  Transfer: { index: 2, layout: te([oe('instruction'), es('lamports')]) },
  CreateWithSeed: {
    index: 3,
    layout: te([
      oe('instruction'),
      Ae('base'),
      Kt('seed'),
      at('lamports'),
      at('space'),
      Ae('programId'),
    ]),
  },
  AdvanceNonceAccount: { index: 4, layout: te([oe('instruction')]) },
  WithdrawNonceAccount: { index: 5, layout: te([oe('instruction'), at('lamports')]) },
  InitializeNonceAccount: { index: 6, layout: te([oe('instruction'), Ae('authorized')]) },
  AuthorizeNonceAccount: { index: 7, layout: te([oe('instruction'), Ae('authorized')]) },
  Allocate: { index: 8, layout: te([oe('instruction'), at('space')]) },
  AllocateWithSeed: {
    index: 9,
    layout: te([oe('instruction'), Ae('base'), Kt('seed'), at('space'), Ae('programId')]),
  },
  AssignWithSeed: {
    index: 10,
    layout: te([oe('instruction'), Ae('base'), Kt('seed'), Ae('programId')]),
  },
  TransferWithSeed: {
    index: 11,
    layout: te([oe('instruction'), es('lamports'), Kt('seed'), Ae('programId')]),
  },
  UpgradeNonceAccount: { index: 12, layout: te([oe('instruction')]) },
});
class qe {
  constructor() {}
  static createAccount(t) {
    const s = Be.Create,
      n = Se(s, { lamports: t.lamports, space: t.space, programId: be(t.programId.toBuffer()) });
    return new Te({
      keys: [
        { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
        { pubkey: t.newAccountPubkey, isSigner: !0, isWritable: !0 },
      ],
      programId: this.programId,
      data: n,
    });
  }
  static transfer(t) {
    let s, n;
    if ('basePubkey' in t) {
      const r = Be.TransferWithSeed;
      (s = Se(r, {
        lamports: BigInt(t.lamports),
        seed: t.seed,
        programId: be(t.programId.toBuffer()),
      })),
        (n = [
          { pubkey: t.fromPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
          { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
        ]);
    } else {
      const r = Be.Transfer;
      (s = Se(r, { lamports: BigInt(t.lamports) })),
        (n = [
          { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
          { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
        ]);
    }
    return new Te({ keys: n, programId: this.programId, data: s });
  }
  static assign(t) {
    let s, n;
    if ('basePubkey' in t) {
      const r = Be.AssignWithSeed;
      (s = Se(r, {
        base: be(t.basePubkey.toBuffer()),
        seed: t.seed,
        programId: be(t.programId.toBuffer()),
      })),
        (n = [
          { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
        ]);
    } else {
      const r = Be.Assign;
      (s = Se(r, { programId: be(t.programId.toBuffer()) })),
        (n = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }]);
    }
    return new Te({ keys: n, programId: this.programId, data: s });
  }
  static createAccountWithSeed(t) {
    const s = Be.CreateWithSeed,
      n = Se(s, {
        base: be(t.basePubkey.toBuffer()),
        seed: t.seed,
        lamports: t.lamports,
        space: t.space,
        programId: be(t.programId.toBuffer()),
      });
    let r = [
      { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
      { pubkey: t.newAccountPubkey, isSigner: !1, isWritable: !0 },
    ];
    return (
      t.basePubkey != t.fromPubkey &&
        r.push({ pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }),
      new Te({ keys: r, programId: this.programId, data: n })
    );
  }
  static createNonceAccount(t) {
    const s = new _e();
    'basePubkey' in t && 'seed' in t
      ? s.add(
          qe.createAccountWithSeed({
            fromPubkey: t.fromPubkey,
            newAccountPubkey: t.noncePubkey,
            basePubkey: t.basePubkey,
            seed: t.seed,
            lamports: t.lamports,
            space: gn,
            programId: this.programId,
          })
        )
      : s.add(
          qe.createAccount({
            fromPubkey: t.fromPubkey,
            newAccountPubkey: t.noncePubkey,
            lamports: t.lamports,
            space: gn,
            programId: this.programId,
          })
        );
    const n = { noncePubkey: t.noncePubkey, authorizedPubkey: t.authorizedPubkey };
    return s.add(this.nonceInitialize(n)), s;
  }
  static nonceInitialize(t) {
    const s = Be.InitializeNonceAccount,
      n = Se(s, { authorized: be(t.authorizedPubkey.toBuffer()) }),
      r = {
        keys: [
          { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: Bs, isSigner: !1, isWritable: !1 },
          { pubkey: Qt, isSigner: !1, isWritable: !1 },
        ],
        programId: this.programId,
        data: n,
      };
    return new Te(r);
  }
  static nonceAdvance(t) {
    const s = Be.AdvanceNonceAccount,
      n = Se(s),
      r = {
        keys: [
          { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: Bs, isSigner: !1, isWritable: !1 },
          { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: n,
      };
    return new Te(r);
  }
  static nonceWithdraw(t) {
    const s = Be.WithdrawNonceAccount,
      n = Se(s, { lamports: t.lamports });
    return new Te({
      keys: [
        { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
        { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
        { pubkey: Bs, isSigner: !1, isWritable: !1 },
        { pubkey: Qt, isSigner: !1, isWritable: !1 },
        { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: n,
    });
  }
  static nonceAuthorize(t) {
    const s = Be.AuthorizeNonceAccount,
      n = Se(s, { authorized: be(t.newAuthorizedPubkey.toBuffer()) });
    return new Te({
      keys: [
        { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
        { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: n,
    });
  }
  static allocate(t) {
    let s, n;
    if ('basePubkey' in t) {
      const r = Be.AllocateWithSeed;
      (s = Se(r, {
        base: be(t.basePubkey.toBuffer()),
        seed: t.seed,
        space: t.space,
        programId: be(t.programId.toBuffer()),
      })),
        (n = [
          { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
        ]);
    } else {
      const r = Be.Allocate;
      (s = Se(r, { space: t.space })),
        (n = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }]);
    }
    return new Te({ keys: n, programId: this.programId, data: s });
  }
}
qe.programId = new W('11111111111111111111111111111111');
const _a = Ot - 300;
class Gt {
  constructor() {}
  static getMinNumSignatures(t) {
    return 2 * (Math.ceil(t / Gt.chunkSize) + 1 + 1);
  }
  static async load(t, s, n, r, o) {
    {
      const y = await t.getMinimumBalanceForRentExemption(o.length),
        b = await t.getAccountInfo(n.publicKey, 'confirmed');
      let w = null;
      if (b !== null) {
        if (b.executable)
          return console.error('Program load failed, account is already executable'), !1;
        b.data.length !== o.length &&
          ((w = w || new _e()),
          w.add(qe.allocate({ accountPubkey: n.publicKey, space: o.length }))),
          b.owner.equals(r) ||
            ((w = w || new _e()), w.add(qe.assign({ accountPubkey: n.publicKey, programId: r }))),
          b.lamports < y &&
            ((w = w || new _e()),
            w.add(
              qe.transfer({
                fromPubkey: s.publicKey,
                toPubkey: n.publicKey,
                lamports: y - b.lamports,
              })
            ));
      } else
        w = new _e().add(
          qe.createAccount({
            fromPubkey: s.publicKey,
            newAccountPubkey: n.publicKey,
            lamports: y > 0 ? y : 1,
            space: o.length,
            programId: r,
          })
        );
      w !== null && (await Cs(t, w, [s, n], { commitment: 'confirmed' }));
    }
    const i = te([
        oe('instruction'),
        oe('offset'),
        oe('bytesLength'),
        oe('bytesLengthPadding'),
        Ge(xe('byte'), $t(oe(), -8), 'bytes'),
      ]),
      u = Gt.chunkSize;
    let l = 0,
      d = o,
      h = [];
    for (; d.length > 0; ) {
      const y = d.slice(0, u),
        b = de.alloc(u + 16);
      i.encode({ instruction: 0, offset: l, bytes: y, bytesLength: 0, bytesLengthPadding: 0 }, b);
      const w = new _e().add({
        keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }],
        programId: r,
        data: b,
      });
      h.push(Cs(t, w, [s, n], { commitment: 'confirmed' })),
        t._rpcEndpoint.includes('solana.com') && (await Ft(1e3 / 4)),
        (l += u),
        (d = d.slice(u));
    }
    await Promise.all(h);
    {
      const y = te([oe('instruction')]),
        b = de.alloc(y.span);
      y.encode({ instruction: 1 }, b);
      const w = new _e().add({
        keys: [
          { pubkey: n.publicKey, isSigner: !0, isWritable: !0 },
          { pubkey: Qt, isSigner: !1, isWritable: !1 },
        ],
        programId: r,
        data: b,
      });
      await Cs(t, w, [s, n], { commitment: 'confirmed' });
    }
    return !0;
  }
}
Gt.chunkSize = _a;
const Ta = new W('BPFLoader2111111111111111111111111111111111');
class Ra {
  static getMinNumSignatures(t) {
    return Gt.getMinNumSignatures(t);
  }
  static load(t, s, n, r, o) {
    return Gt.load(t, s, n, o, r);
  }
}
var Ba = Object.prototype.toString,
  va =
    Object.keys ||
    function (e) {
      var t = [];
      for (var s in e) t.push(s);
      return t;
    };
function cs(e, t) {
  var s, n, r, o, i, u, l;
  if (e === !0) return 'true';
  if (e === !1) return 'false';
  switch (typeof e) {
    case 'object':
      if (e === null) return null;
      if (e.toJSON && typeof e.toJSON == 'function') return cs(e.toJSON(), t);
      if (((l = Ba.call(e)), l === '[object Array]')) {
        for (r = '[', n = e.length - 1, s = 0; s < n; s++) r += cs(e[s], !0) + ',';
        return n > -1 && (r += cs(e[s], !0)), r + ']';
      } else if (l === '[object Object]') {
        for (o = va(e).sort(), n = o.length, r = '', s = 0; s < n; )
          (i = o[s]),
            (u = cs(e[i], !1)),
            u !== void 0 && (r && (r += ','), (r += JSON.stringify(i) + ':' + u)),
            s++;
        return '{' + r + '}';
      } else return JSON.stringify(e);
    case 'function':
    case 'undefined':
      return t ? null : void 0;
    case 'string':
      return JSON.stringify(e);
    default:
      return isFinite(e) ? e : null;
  }
}
var Ca = function (e) {
    var t = cs(e, !1);
    if (t !== void 0) return '' + t;
  },
  La = Ca;
const os = 32;
function tn(e) {
  let t = 0;
  for (; e > 1; ) (e /= 2), t++;
  return t;
}
function Pa(e) {
  return e === 0
    ? 1
    : (e--,
      (e |= e >> 1),
      (e |= e >> 2),
      (e |= e >> 4),
      (e |= e >> 8),
      (e |= e >> 16),
      (e |= e >> 32),
      e + 1);
}
class oo {
  constructor(t, s, n, r, o) {
    (this.slotsPerEpoch = void 0),
      (this.leaderScheduleSlotOffset = void 0),
      (this.warmup = void 0),
      (this.firstNormalEpoch = void 0),
      (this.firstNormalSlot = void 0),
      (this.slotsPerEpoch = t),
      (this.leaderScheduleSlotOffset = s),
      (this.warmup = n),
      (this.firstNormalEpoch = r),
      (this.firstNormalSlot = o);
  }
  getEpoch(t) {
    return this.getEpochAndSlotIndex(t)[0];
  }
  getEpochAndSlotIndex(t) {
    if (t < this.firstNormalSlot) {
      const s = tn(Pa(t + os + 1)) - tn(os) - 1,
        n = this.getSlotsInEpoch(s),
        r = t - (n - os);
      return [s, r];
    } else {
      const s = t - this.firstNormalSlot,
        n = Math.floor(s / this.slotsPerEpoch),
        r = this.firstNormalEpoch + n,
        o = s % this.slotsPerEpoch;
      return [r, o];
    }
  }
  getFirstSlotInEpoch(t) {
    return t <= this.firstNormalEpoch
      ? (Math.pow(2, t) - 1) * os
      : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(t) {
    return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1;
  }
  getSlotsInEpoch(t) {
    return t < this.firstNormalEpoch ? Math.pow(2, t + tn(os)) : this.slotsPerEpoch;
  }
}
class mn extends Error {
  constructor(t, s) {
    super(t), (this.logs = void 0), (this.logs = s);
  }
}
const Na = {
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
class ce extends Error {
  constructor({ code: t, message: s, data: n }, r) {
    super(r != null ? `${r}: ${s}` : s),
      (this.code = void 0),
      (this.data = void 0),
      (this.code = t),
      (this.data = n),
      (this.name = 'SolanaJSONRPCError');
  }
}
var Oa = globalThis.fetch;
class Da extends Oo {
  constructor(t, s, n) {
    const r = (o) => {
      const i = Fo(o, {
        autoconnect: !0,
        max_reconnects: 5,
        reconnect: !0,
        reconnect_interval: 1e3,
        ...s,
      });
      return 'socket' in i ? (this.underlyingSocket = i.socket) : (this.underlyingSocket = i), i;
    };
    super(r, t, s, n), (this.underlyingSocket = void 0);
  }
  call(...t) {
    var n;
    const s = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return s === 1
      ? super.call(...t)
      : Promise.reject(
          new Error(
            'Tried to call a JSON-RPC method `' +
              t[0] +
              '` but the socket was not `CONNECTING` or `OPEN` (`readyState` was ' +
              s +
              ')'
          )
        );
  }
  notify(...t) {
    var n;
    const s = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return s === 1
      ? super.notify(...t)
      : Promise.reject(
          new Error(
            'Tried to send a JSON-RPC notification `' +
              t[0] +
              '` but the socket was not `CONNECTING` or `OPEN` (`readyState` was ' +
              s +
              ')'
          )
        );
  }
}
const Ua = 160,
  Ma = 64,
  Ha = Ua / Ma,
  Fa = 1e3 / Ha;
function Ka(e, t) {
  let s;
  try {
    s = e.layout.decode(t);
  } catch (n) {
    throw new Error('invalid instruction; ' + n);
  }
  if (s.typeIndex !== e.index)
    throw new Error(`invalid account data; account type mismatch ${s.typeIndex} != ${e.index}`);
  return s;
}
const lr = 56;
class bn {
  constructor(t) {
    (this.key = void 0), (this.state = void 0), (this.key = t.key), (this.state = t.state);
  }
  isActive() {
    const t = BigInt('0xffffffffffffffff');
    return this.state.deactivationSlot === t;
  }
  static deserialize(t) {
    const s = Ka(za, t),
      n = t.length - lr;
    Ie(n >= 0, 'lookup table is invalid'), Ie(n % 32 === 0, 'lookup table is invalid');
    const r = n / 32,
      { addresses: o } = te([Ge(Ae(), r, 'addresses')]).decode(t.slice(lr));
    return {
      deactivationSlot: s.deactivationSlot,
      lastExtendedSlot: s.lastExtendedSlot,
      lastExtendedSlotStartIndex: s.lastExtendedStartIndex,
      authority: s.authority.length !== 0 ? new W(s.authority[0]) : void 0,
      addresses: o.map((i) => new W(i)),
    };
  }
}
const za = {
    index: 1,
    layout: te([
      oe('typeIndex'),
      es('deactivationSlot'),
      je('lastExtendedSlot'),
      xe('lastExtendedStartIndex'),
      xe(),
      Ge(Ae(), $t(xe(), -1), 'authority'),
    ]),
  },
  $a = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function Wa(e) {
  const t = e.match($a);
  if (t == null) throw TypeError(`Failed to validate endpoint URL \`${e}\``);
  const [s, n, r, o] = t,
    i = e.startsWith('https:') ? 'wss:' : 'ws:',
    u = r == null ? null : parseInt(r.slice(1), 10),
    l = u == null ? '' : `:${u + 1}`;
  return `${i}//${n}${l}${o}`;
}
const He = bs(En(W), j(), (e) => new W(e)),
  io = In([j(), Ne('base64')]),
  Mn = bs(En(de), io, (e) => de.from(e[0], 'base64')),
  ao = 30 * 1e3;
function Ga(e) {
  if (/^https?:/.test(e) === !1)
    throw new TypeError('Endpoint URL must start with `http:` or `https:`.');
  return e;
}
function Pe(e) {
  let t, s;
  if (typeof e == 'string') t = e;
  else if (e) {
    const { commitment: n, ...r } = e;
    (t = n), (s = r);
  }
  return { commitment: t, config: s };
}
function co(e) {
  return et([
    $({ jsonrpc: Ne('2.0'), id: j(), result: e }),
    $({ jsonrpc: Ne('2.0'), id: j(), error: $({ code: ws(), message: j(), data: he(Lo()) }) }),
  ]);
}
const qa = co(ws());
function we(e) {
  return bs(co(e), qa, (t) => ('error' in t ? t : { ...t, result: Y(t.result, e) }));
}
function Me(e) {
  return we($({ context: $({ slot: B() }), value: e }));
}
function zs(e) {
  return $({ context: $({ slot: B() }), value: e });
}
function sn(e, t) {
  return e === 0
    ? new Wt({
        header: t.header,
        staticAccountKeys: t.accountKeys.map((s) => new W(s)),
        recentBlockhash: t.recentBlockhash,
        compiledInstructions: t.instructions.map((s) => ({
          programIdIndex: s.programIdIndex,
          accountKeyIndexes: s.accounts,
          data: We.decode(s.data),
        })),
        addressTableLookups: t.addressTableLookups,
      })
    : new pt(t);
}
const ja = $({ foundation: B(), foundationTerm: B(), initial: B(), taper: B(), terminal: B() }),
  Va = we(
    Q(
      Z(
        $({ epoch: B(), effectiveSlot: B(), amount: B(), postBalance: B(), commission: he(Z(B())) })
      )
    )
  ),
  Ya = $({ total: B(), validator: B(), foundation: B(), epoch: B() }),
  Xa = $({
    epoch: B(),
    slotIndex: B(),
    slotsInEpoch: B(),
    absoluteSlot: B(),
    blockHeight: he(B()),
    transactionCount: he(B()),
  }),
  Ja = $({
    slotsPerEpoch: B(),
    leaderScheduleSlotOffset: B(),
    warmup: Tt(),
    firstNormalEpoch: B(),
    firstNormalSlot: B(),
  }),
  Za = Rr(j(), Q(B())),
  jt = Z(et([$({}), j()])),
  Qa = $({ err: jt }),
  ec = Ne('receivedSignature'),
  tc = $({ 'solana-core': j(), 'feature-set': he(B()) }),
  ur = Me(
    $({
      err: Z(et([$({}), j()])),
      logs: Z(Q(j())),
      accounts: he(
        Z(
          Q(Z($({ executable: Tt(), owner: j(), lamports: B(), data: Q(j()), rentEpoch: he(B()) })))
        )
      ),
      unitsConsumed: he(B()),
      returnData: he(Z($({ programId: j(), data: In([j(), Ne('base64')]) }))),
    })
  ),
  sc = Me($({ byIdentity: Rr(j(), Q(B())), range: $({ firstSlot: B(), lastSlot: B() }) }));
function nc(e, t, s, n, r, o) {
  const i = s || Oa;
  let u;
  o != null &&
    console.warn(
      'You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.'
    );
  let l;
  return (
    n &&
      (l = async (h, y) => {
        const b = await new Promise((w, p) => {
          try {
            n(h, y, (f, m) => w([f, m]));
          } catch (f) {
            p(f);
          }
        });
        return await i(...b);
      }),
    new Do(async (h, y) => {
      const b = {
        method: 'POST',
        body: h,
        agent: u,
        headers: Object.assign({ 'Content-Type': 'application/json' }, t || {}, sl),
      };
      try {
        let w = 5,
          p,
          f = 500;
        for (
          ;
          l ? (p = await l(e, b)) : (p = await i(e, b)),
            !(p.status !== 429 || r === !0 || ((w -= 1), w === 0));

        )
          console.log(
            `Server responded with ${p.status} ${p.statusText}.  Retrying after ${f}ms delay...`
          ),
            await Ft(f),
            (f *= 2);
        const m = await p.text();
        p.ok ? y(null, m) : y(new Error(`${p.status} ${p.statusText}: ${m}`));
      } catch (w) {
        w instanceof Error && y(w);
      }
    }, {})
  );
}
function rc(e) {
  return (t, s) =>
    new Promise((n, r) => {
      e.request(t, s, (o, i) => {
        if (o) {
          r(o);
          return;
        }
        n(i);
      });
    });
}
function oc(e) {
  return (t) =>
    new Promise((s, n) => {
      t.length === 0 && s([]);
      const r = t.map((o) => e.request(o.methodName, o.args));
      e.request(r, (o, i) => {
        if (o) {
          n(o);
          return;
        }
        s(i);
      });
    });
}
const ic = we(ja),
  ac = we(Ya),
  cc = we(Xa),
  lc = we(Ja),
  uc = we(Za),
  dc = we(B()),
  pc = Me($({ total: B(), circulating: B(), nonCirculating: B(), nonCirculatingAccounts: Q(He) })),
  wn = $({ amount: j(), uiAmount: Z(B()), decimals: B(), uiAmountString: he(j()) }),
  hc = Me(
    Q($({ address: He, amount: j(), uiAmount: Z(B()), decimals: B(), uiAmountString: he(j()) }))
  ),
  fc = Me(
    Q(
      $({
        pubkey: He,
        account: $({ executable: Tt(), owner: He, lamports: B(), data: Mn, rentEpoch: B() }),
      })
    )
  ),
  xn = $({ program: j(), parsed: ws(), space: B() }),
  yc = Me(
    Q(
      $({
        pubkey: He,
        account: $({ executable: Tt(), owner: He, lamports: B(), data: xn, rentEpoch: B() }),
      })
    )
  ),
  gc = Me(Q($({ lamports: B(), address: He }))),
  gs = $({ executable: Tt(), owner: He, lamports: B(), data: Mn, rentEpoch: B() }),
  mc = $({ pubkey: He, account: gs }),
  bc = bs(et([En(de), xn]), et([io, xn]), (e) => (Array.isArray(e) ? Y(e, Mn) : e)),
  An = $({ executable: Tt(), owner: He, lamports: B(), data: bc, rentEpoch: B() }),
  wc = $({ pubkey: He, account: An }),
  xc = $({
    state: et([Ne('active'), Ne('inactive'), Ne('activating'), Ne('deactivating')]),
    active: B(),
    inactive: B(),
  }),
  Ac = we(Q($({ signature: j(), slot: B(), err: jt, memo: Z(j()), blockTime: he(Z(B())) }))),
  kc = we(Q($({ signature: j(), slot: B(), err: jt, memo: Z(j()), blockTime: he(Z(B())) }))),
  Sc = $({ subscription: B(), result: zs(gs) }),
  Ic = $({ pubkey: He, account: gs }),
  Ec = $({ subscription: B(), result: zs(Ic) }),
  _c = $({ parent: B(), slot: B(), root: B() }),
  Tc = $({ subscription: B(), result: _c }),
  Rc = et([
    $({
      type: et([
        Ne('firstShredReceived'),
        Ne('completed'),
        Ne('optimisticConfirmation'),
        Ne('root'),
      ]),
      slot: B(),
      timestamp: B(),
    }),
    $({ type: Ne('createdBank'), parent: B(), slot: B(), timestamp: B() }),
    $({
      type: Ne('frozen'),
      slot: B(),
      timestamp: B(),
      stats: $({
        numTransactionEntries: B(),
        numSuccessfulTransactions: B(),
        numFailedTransactions: B(),
        maxTransactionsPerEntry: B(),
      }),
    }),
    $({ type: Ne('dead'), slot: B(), timestamp: B(), err: j() }),
  ]),
  Bc = $({ subscription: B(), result: Rc }),
  vc = $({ subscription: B(), result: zs(et([Qa, ec])) }),
  Cc = $({ subscription: B(), result: B() }),
  Lc = $({ pubkey: j(), gossip: Z(j()), tpu: Z(j()), rpc: Z(j()), version: Z(j()) }),
  dr = $({
    votePubkey: j(),
    nodePubkey: j(),
    activatedStake: B(),
    epochVoteAccount: Tt(),
    epochCredits: Q(In([B(), B(), B()])),
    commission: B(),
    lastVote: B(),
    rootSlot: Z(B()),
  }),
  Pc = we($({ current: Q(dr), delinquent: Q(dr) })),
  Nc = et([Ne('processed'), Ne('confirmed'), Ne('finalized')]),
  Oc = $({ slot: B(), confirmations: Z(B()), err: jt, confirmationStatus: he(Nc) }),
  Dc = Me(Q(Z(Oc))),
  Uc = we(B()),
  lo = $({ accountKey: He, writableIndexes: Q(B()), readonlyIndexes: Q(B()) }),
  Hn = $({
    signatures: Q(j()),
    message: $({
      accountKeys: Q(j()),
      header: $({
        numRequiredSignatures: B(),
        numReadonlySignedAccounts: B(),
        numReadonlyUnsignedAccounts: B(),
      }),
      instructions: Q($({ accounts: Q(B()), data: j(), programIdIndex: B() })),
      recentBlockhash: j(),
      addressTableLookups: he(Q(lo)),
    }),
  }),
  uo = $({
    pubkey: He,
    signer: Tt(),
    writable: Tt(),
    source: he(et([Ne('transaction'), Ne('lookupTable')])),
  }),
  po = $({ accountKeys: Q(uo), signatures: Q(j()) }),
  ho = $({ parsed: ws(), program: j(), programId: He }),
  fo = $({ accounts: Q(He), data: j(), programId: He }),
  Mc = et([fo, ho]),
  Hc = et([
    $({ parsed: ws(), program: j(), programId: j() }),
    $({ accounts: Q(j()), data: j(), programId: j() }),
  ]),
  yo = bs(Mc, Hc, (e) => ('accounts' in e ? Y(e, fo) : Y(e, ho))),
  go = $({
    signatures: Q(j()),
    message: $({
      accountKeys: Q(uo),
      instructions: Q(yo),
      recentBlockhash: j(),
      addressTableLookups: he(Z(Q(lo))),
    }),
  }),
  Os = $({ accountIndex: B(), mint: j(), owner: he(j()), uiTokenAmount: wn }),
  mo = $({ writable: Q(He), readonly: Q(He) }),
  $s = $({
    err: jt,
    fee: B(),
    innerInstructions: he(
      Z(
        Q(
          $({
            index: B(),
            instructions: Q($({ accounts: Q(B()), data: j(), programIdIndex: B() })),
          })
        )
      )
    ),
    preBalances: Q(B()),
    postBalances: Q(B()),
    logMessages: he(Z(Q(j()))),
    preTokenBalances: he(Z(Q(Os))),
    postTokenBalances: he(Z(Q(Os))),
    loadedAddresses: he(mo),
    computeUnitsConsumed: he(B()),
  }),
  Fn = $({
    err: jt,
    fee: B(),
    innerInstructions: he(Z(Q($({ index: B(), instructions: Q(yo) })))),
    preBalances: Q(B()),
    postBalances: Q(B()),
    logMessages: he(Z(Q(j()))),
    preTokenBalances: he(Z(Q(Os))),
    postTokenBalances: he(Z(Q(Os))),
    loadedAddresses: he(mo),
    computeUnitsConsumed: he(B()),
  }),
  ts = et([Ne(0), Ne('legacy')]),
  Vt = $({
    pubkey: j(),
    lamports: B(),
    postBalance: Z(B()),
    rewardType: Z(j()),
    commission: he(Z(B())),
  }),
  Fc = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        transactions: Q($({ transaction: Hn, meta: Z($s), version: he(ts) })),
        rewards: he(Q(Vt)),
        blockTime: Z(B()),
        blockHeight: Z(B()),
      })
    )
  ),
  Kc = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        rewards: he(Q(Vt)),
        blockTime: Z(B()),
        blockHeight: Z(B()),
      })
    )
  ),
  zc = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        transactions: Q($({ transaction: po, meta: Z($s), version: he(ts) })),
        rewards: he(Q(Vt)),
        blockTime: Z(B()),
        blockHeight: Z(B()),
      })
    )
  ),
  $c = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        transactions: Q($({ transaction: go, meta: Z(Fn), version: he(ts) })),
        rewards: he(Q(Vt)),
        blockTime: Z(B()),
        blockHeight: Z(B()),
      })
    )
  ),
  Wc = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        transactions: Q($({ transaction: po, meta: Z(Fn), version: he(ts) })),
        rewards: he(Q(Vt)),
        blockTime: Z(B()),
        blockHeight: Z(B()),
      })
    )
  ),
  Gc = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        rewards: he(Q(Vt)),
        blockTime: Z(B()),
        blockHeight: Z(B()),
      })
    )
  ),
  qc = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        transactions: Q($({ transaction: Hn, meta: Z($s) })),
        rewards: he(Q(Vt)),
        blockTime: Z(B()),
      })
    )
  ),
  pr = we(
    Z(
      $({
        blockhash: j(),
        previousBlockhash: j(),
        parentSlot: B(),
        signatures: Q(j()),
        blockTime: Z(B()),
      })
    )
  ),
  nn = we(Z($({ slot: B(), meta: $s, blockTime: he(Z(B())), transaction: Hn, version: he(ts) }))),
  Ts = we(
    Z($({ slot: B(), transaction: go, meta: Z(Fn), blockTime: he(Z(B())), version: he(ts) }))
  ),
  jc = Me($({ blockhash: j(), feeCalculator: $({ lamportsPerSignature: B() }) })),
  Vc = Me($({ blockhash: j(), lastValidBlockHeight: B() })),
  Yc = $({ slot: B(), numTransactions: B(), numSlots: B(), samplePeriodSecs: B() }),
  Xc = we(Q(Yc)),
  Jc = Me(Z($({ feeCalculator: $({ lamportsPerSignature: B() }) }))),
  Zc = we(j()),
  Qc = we(j()),
  el = $({ err: jt, logs: Q(j()), signature: j() }),
  tl = $({ result: zs(el), subscription: B() }),
  sl = { 'solana-client': 'js/1.73.5' };
class nl {
  constructor(t, s) {
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
    let n, r, o, i, u, l;
    s && typeof s == 'string'
      ? (this._commitment = s)
      : s &&
        ((this._commitment = s.commitment),
        (this._confirmTransactionInitialTimeout = s.confirmTransactionInitialTimeout),
        (n = s.wsEndpoint),
        (r = s.httpHeaders),
        (o = s.fetch),
        (i = s.fetchMiddleware),
        (u = s.disableRetryOnRateLimit),
        (l = s.httpAgent)),
      (this._rpcEndpoint = Ga(t)),
      (this._rpcWsEndpoint = n || Wa(t)),
      (this._rpcClient = nc(t, r, o, i, u, l)),
      (this._rpcRequest = rc(this._rpcClient)),
      (this._rpcBatchRequest = oc(this._rpcClient)),
      (this._rpcWebSocket = new Da(this._rpcWsEndpoint, {
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
  async getBalanceAndContext(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgs([t.toBase58()], n, void 0, r),
      i = await this._rpcRequest('getBalance', o),
      u = Y(i, Me(B()));
    if ('error' in u) throw new ce(u.error, `failed to get balance for ${t.toBase58()}`);
    return u.result;
  }
  async getBalance(t, s) {
    return await this.getBalanceAndContext(t, s)
      .then((n) => n.value)
      .catch((n) => {
        throw new Error('failed to get balance of account ' + t.toBase58() + ': ' + n);
      });
  }
  async getBlockTime(t) {
    const s = await this._rpcRequest('getBlockTime', [t]),
      n = Y(s, we(Z(B())));
    if ('error' in n) throw new ce(n.error, `failed to get block time for slot ${t}`);
    return n.result;
  }
  async getMinimumLedgerSlot() {
    const t = await this._rpcRequest('minimumLedgerSlot', []),
      s = Y(t, we(B()));
    if ('error' in s) throw new ce(s.error, 'failed to get minimum ledger slot');
    return s.result;
  }
  async getFirstAvailableBlock() {
    const t = await this._rpcRequest('getFirstAvailableBlock', []),
      s = Y(t, dc);
    if ('error' in s) throw new ce(s.error, 'failed to get first available block');
    return s.result;
  }
  async getSupply(t) {
    let s = {};
    typeof t == 'string'
      ? (s = { commitment: t })
      : t
        ? (s = { ...t, commitment: (t && t.commitment) || this.commitment })
        : (s = { commitment: this.commitment });
    const n = await this._rpcRequest('getSupply', [s]),
      r = Y(n, pc);
    if ('error' in r) throw new ce(r.error, 'failed to get supply');
    return r.result;
  }
  async getTokenSupply(t, s) {
    const n = this._buildArgs([t.toBase58()], s),
      r = await this._rpcRequest('getTokenSupply', n),
      o = Y(r, Me(wn));
    if ('error' in o) throw new ce(o.error, 'failed to get token supply');
    return o.result;
  }
  async getTokenAccountBalance(t, s) {
    const n = this._buildArgs([t.toBase58()], s),
      r = await this._rpcRequest('getTokenAccountBalance', n),
      o = Y(r, Me(wn));
    if ('error' in o) throw new ce(o.error, 'failed to get token account balance');
    return o.result;
  }
  async getTokenAccountsByOwner(t, s, n) {
    const { commitment: r, config: o } = Pe(n);
    let i = [t.toBase58()];
    'mint' in s
      ? i.push({ mint: s.mint.toBase58() })
      : i.push({ programId: s.programId.toBase58() });
    const u = this._buildArgs(i, r, 'base64', o),
      l = await this._rpcRequest('getTokenAccountsByOwner', u),
      d = Y(l, fc);
    if ('error' in d)
      throw new ce(d.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return d.result;
  }
  async getParsedTokenAccountsByOwner(t, s, n) {
    let r = [t.toBase58()];
    'mint' in s
      ? r.push({ mint: s.mint.toBase58() })
      : r.push({ programId: s.programId.toBase58() });
    const o = this._buildArgs(r, n, 'jsonParsed'),
      i = await this._rpcRequest('getTokenAccountsByOwner', o),
      u = Y(i, yc);
    if ('error' in u)
      throw new ce(u.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return u.result;
  }
  async getLargestAccounts(t) {
    const s = { ...t, commitment: (t && t.commitment) || this.commitment },
      n = s.filter || s.commitment ? [s] : [],
      r = await this._rpcRequest('getLargestAccounts', n),
      o = Y(r, gc);
    if ('error' in o) throw new ce(o.error, 'failed to get largest accounts');
    return o.result;
  }
  async getTokenLargestAccounts(t, s) {
    const n = this._buildArgs([t.toBase58()], s),
      r = await this._rpcRequest('getTokenLargestAccounts', n),
      o = Y(r, hc);
    if ('error' in o) throw new ce(o.error, 'failed to get token largest accounts');
    return o.result;
  }
  async getAccountInfoAndContext(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgs([t.toBase58()], n, 'base64', r),
      i = await this._rpcRequest('getAccountInfo', o),
      u = Y(i, Me(Z(gs)));
    if ('error' in u) throw new ce(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  async getParsedAccountInfo(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgs([t.toBase58()], n, 'jsonParsed', r),
      i = await this._rpcRequest('getAccountInfo', o),
      u = Y(i, Me(Z(An)));
    if ('error' in u) throw new ce(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  async getAccountInfo(t, s) {
    try {
      return (await this.getAccountInfoAndContext(t, s)).value;
    } catch (n) {
      throw new Error('failed to get info about account ' + t.toBase58() + ': ' + n);
    }
  }
  async getMultipleParsedAccounts(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = t.map((d) => d.toBase58()),
      i = this._buildArgs([o], n, 'jsonParsed', r),
      u = await this._rpcRequest('getMultipleAccounts', i),
      l = Y(u, Me(Q(Z(An))));
    if ('error' in l) throw new ce(l.error, `failed to get info for accounts ${o}`);
    return l.result;
  }
  async getMultipleAccountsInfoAndContext(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = t.map((d) => d.toBase58()),
      i = this._buildArgs([o], n, 'base64', r),
      u = await this._rpcRequest('getMultipleAccounts', i),
      l = Y(u, Me(Q(Z(gs))));
    if ('error' in l) throw new ce(l.error, `failed to get info for accounts ${o}`);
    return l.result;
  }
  async getMultipleAccountsInfo(t, s) {
    return (await this.getMultipleAccountsInfoAndContext(t, s)).value;
  }
  async getStakeActivation(t, s, n) {
    const { commitment: r, config: o } = Pe(s),
      i = this._buildArgs([t.toBase58()], r, void 0, {
        ...o,
        epoch: n ?? (o == null ? void 0 : o.epoch),
      }),
      u = await this._rpcRequest('getStakeActivation', i),
      l = Y(u, we(xc));
    if ('error' in l) throw new ce(l.error, `failed to get Stake Activation ${t.toBase58()}`);
    return l.result;
  }
  async getProgramAccounts(t, s) {
    const { commitment: n, config: r } = Pe(s),
      { encoding: o, ...i } = r || {},
      u = this._buildArgs([t.toBase58()], n, o || 'base64', i),
      l = await this._rpcRequest('getProgramAccounts', u),
      d = Y(l, we(Q(mc)));
    if ('error' in d)
      throw new ce(d.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return d.result;
  }
  async getParsedProgramAccounts(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgs([t.toBase58()], n, 'jsonParsed', r),
      i = await this._rpcRequest('getProgramAccounts', o),
      u = Y(i, we(Q(wc)));
    if ('error' in u)
      throw new ce(u.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return u.result;
  }
  async confirmTransaction(t, s) {
    var o;
    let n;
    if (typeof t == 'string') n = t;
    else {
      const i = t;
      if ((o = i.abortSignal) != null && o.aborted) return Promise.reject(i.abortSignal.reason);
      n = i.signature;
    }
    let r;
    try {
      r = We.decode(n);
    } catch {
      throw new Error('signature must be base58 encoded: ' + n);
    }
    return (
      Ie(r.length === 64, 'signature has invalid length'),
      typeof t == 'string'
        ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: s || this.commitment,
            signature: n,
          })
        : 'lastValidBlockHeight' in t
          ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
              commitment: s || this.commitment,
              strategy: t,
            })
          : await this.confirmTransactionUsingDurableNonceStrategy({
              commitment: s || this.commitment,
              strategy: t,
            })
    );
  }
  getCancellationPromise(t) {
    return new Promise((s, n) => {
      t != null &&
        (t.aborted
          ? n(t.reason)
          : t.addEventListener('abort', () => {
              n(t.reason);
            }));
    });
  }
  getTransactionConfirmationPromise({ commitment: t, signature: s }) {
    let n,
      r,
      o = !1;
    const i = new Promise((l, d) => {
      try {
        n = this.onSignature(
          s,
          (y, b) => {
            n = void 0;
            const w = { context: b, value: y };
            l({ __type: lt.PROCESSED, response: w });
          },
          t
        );
        const h = new Promise((y) => {
          n == null
            ? y()
            : (r = this._onSubscriptionStateChange(n, (b) => {
                b === 'subscribed' && y();
              }));
        });
        (async () => {
          if ((await h, o)) return;
          const y = await this.getSignatureStatus(s);
          if (o || y == null) return;
          const { context: b, value: w } = y;
          if (w != null)
            if (w != null && w.err) d(w.err);
            else {
              switch (t) {
                case 'confirmed':
                case 'single':
                case 'singleGossip': {
                  if (w.confirmationStatus === 'processed') return;
                  break;
                }
                case 'finalized':
                case 'max':
                case 'root': {
                  if (w.confirmationStatus === 'processed' || w.confirmationStatus === 'confirmed')
                    return;
                  break;
                }
                case 'processed':
                case 'recent':
              }
              (o = !0), l({ __type: lt.PROCESSED, response: { context: b, value: w } });
            }
        })();
      } catch (h) {
        d(h);
      }
    });
    return {
      abortConfirmation: () => {
        r && (r(), (r = void 0)), n != null && (this.removeSignatureListener(n), (n = void 0));
      },
      confirmationPromise: i,
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment: t,
    strategy: { abortSignal: s, lastValidBlockHeight: n, signature: r },
  }) {
    let o = !1;
    const i = new Promise((y) => {
        const b = async () => {
          try {
            return await this.getBlockHeight(t);
          } catch {
            return -1;
          }
        };
        (async () => {
          let w = await b();
          if (!o) {
            for (; w <= n; ) if ((await Ft(1e3), o || ((w = await b()), o))) return;
            y({ __type: lt.BLOCKHEIGHT_EXCEEDED });
          }
        })();
      }),
      { abortConfirmation: u, confirmationPromise: l } = this.getTransactionConfirmationPromise({
        commitment: t,
        signature: r,
      }),
      d = this.getCancellationPromise(s);
    let h;
    try {
      const y = await Promise.race([d, l, i]);
      if (y.__type === lt.PROCESSED) h = y.response;
      else throw new Pn(r);
    } finally {
      (o = !0), u();
    }
    return h;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment: t,
    strategy: {
      abortSignal: s,
      minContextSlot: n,
      nonceAccountPubkey: r,
      nonceValue: o,
      signature: i,
    },
  }) {
    let u = !1;
    const l = new Promise((w) => {
        let p = o,
          f = null;
        const m = async () => {
          try {
            const { context: x, value: I } = await this.getNonceAndContext(r, {
              commitment: t,
              minContextSlot: n,
            });
            return (f = x.slot), I == null ? void 0 : I.nonce;
          } catch {
            return p;
          }
        };
        (async () => {
          if (((p = await m()), !u))
            for (;;) {
              if (o !== p) {
                w({ __type: lt.NONCE_INVALID, slotInWhichNonceDidAdvance: f });
                return;
              }
              if ((await Ft(2e3), u || ((p = await m()), u))) return;
            }
        })();
      }),
      { abortConfirmation: d, confirmationPromise: h } = this.getTransactionConfirmationPromise({
        commitment: t,
        signature: i,
      }),
      y = this.getCancellationPromise(s);
    let b;
    try {
      const w = await Promise.race([y, h, l]);
      if (w.__type === lt.PROCESSED) b = w.response;
      else {
        let p;
        for (;;) {
          const f = await this.getSignatureStatus(i);
          if (f == null) break;
          if (f.context.slot < (w.slotInWhichNonceDidAdvance ?? n)) {
            await Ft(400);
            continue;
          }
          p = f;
          break;
        }
        if (p != null && p.value) {
          const f = t || 'finalized',
            { confirmationStatus: m } = p.value;
          switch (f) {
            case 'processed':
            case 'recent':
              if (m !== 'processed' && m !== 'confirmed' && m !== 'finalized') throw new Yt(i);
              break;
            case 'confirmed':
            case 'single':
            case 'singleGossip':
              if (m !== 'confirmed' && m !== 'finalized') throw new Yt(i);
              break;
            case 'finalized':
            case 'max':
            case 'root':
              if (m !== 'finalized') throw new Yt(i);
              break;
            default:
          }
          b = { context: p.context, value: { err: p.value.err } };
        } else throw new Yt(i);
      }
    } finally {
      (u = !0), d();
    }
    return b;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({ commitment: t, signature: s }) {
    let n;
    const r = new Promise((l) => {
        let d = this._confirmTransactionInitialTimeout || 6e4;
        switch (t) {
          case 'processed':
          case 'recent':
          case 'single':
          case 'confirmed':
          case 'singleGossip': {
            d = this._confirmTransactionInitialTimeout || 3e4;
            break;
          }
        }
        n = setTimeout(() => l({ __type: lt.TIMED_OUT, timeoutMs: d }), d);
      }),
      { abortConfirmation: o, confirmationPromise: i } = this.getTransactionConfirmationPromise({
        commitment: t,
        signature: s,
      });
    let u;
    try {
      const l = await Promise.race([i, r]);
      if (l.__type === lt.PROCESSED) u = l.response;
      else throw new Nn(s, l.timeoutMs / 1e3);
    } finally {
      clearTimeout(n), o();
    }
    return u;
  }
  async getClusterNodes() {
    const t = await this._rpcRequest('getClusterNodes', []),
      s = Y(t, we(Q(Lc)));
    if ('error' in s) throw new ce(s.error, 'failed to get cluster nodes');
    return s.result;
  }
  async getVoteAccounts(t) {
    const s = this._buildArgs([], t),
      n = await this._rpcRequest('getVoteAccounts', s),
      r = Y(n, Pc);
    if ('error' in r) throw new ce(r.error, 'failed to get vote accounts');
    return r.result;
  }
  async getSlot(t) {
    const { commitment: s, config: n } = Pe(t),
      r = this._buildArgs([], s, void 0, n),
      o = await this._rpcRequest('getSlot', r),
      i = Y(o, we(B()));
    if ('error' in i) throw new ce(i.error, 'failed to get slot');
    return i.result;
  }
  async getSlotLeader(t) {
    const { commitment: s, config: n } = Pe(t),
      r = this._buildArgs([], s, void 0, n),
      o = await this._rpcRequest('getSlotLeader', r),
      i = Y(o, we(j()));
    if ('error' in i) throw new ce(i.error, 'failed to get slot leader');
    return i.result;
  }
  async getSlotLeaders(t, s) {
    const n = [t, s],
      r = await this._rpcRequest('getSlotLeaders', n),
      o = Y(r, we(Q(He)));
    if ('error' in o) throw new ce(o.error, 'failed to get slot leaders');
    return o.result;
  }
  async getSignatureStatus(t, s) {
    const { context: n, value: r } = await this.getSignatureStatuses([t], s);
    Ie(r.length === 1);
    const o = r[0];
    return { context: n, value: o };
  }
  async getSignatureStatuses(t, s) {
    const n = [t];
    s && n.push(s);
    const r = await this._rpcRequest('getSignatureStatuses', n),
      o = Y(r, Dc);
    if ('error' in o) throw new ce(o.error, 'failed to get signature status');
    return o.result;
  }
  async getTransactionCount(t) {
    const { commitment: s, config: n } = Pe(t),
      r = this._buildArgs([], s, void 0, n),
      o = await this._rpcRequest('getTransactionCount', r),
      i = Y(o, we(B()));
    if ('error' in i) throw new ce(i.error, 'failed to get transaction count');
    return i.result;
  }
  async getTotalSupply(t) {
    return (await this.getSupply({ commitment: t, excludeNonCirculatingAccountsList: !0 })).value
      .total;
  }
  async getInflationGovernor(t) {
    const s = this._buildArgs([], t),
      n = await this._rpcRequest('getInflationGovernor', s),
      r = Y(n, ic);
    if ('error' in r) throw new ce(r.error, 'failed to get inflation');
    return r.result;
  }
  async getInflationReward(t, s, n) {
    const { commitment: r, config: o } = Pe(n),
      i = this._buildArgs([t.map((d) => d.toBase58())], r, void 0, {
        ...o,
        epoch: s ?? (o == null ? void 0 : o.epoch),
      }),
      u = await this._rpcRequest('getInflationReward', i),
      l = Y(u, Va);
    if ('error' in l) throw new ce(l.error, 'failed to get inflation reward');
    return l.result;
  }
  async getInflationRate() {
    const t = await this._rpcRequest('getInflationRate', []),
      s = Y(t, ac);
    if ('error' in s) throw new ce(s.error, 'failed to get inflation rate');
    return s.result;
  }
  async getEpochInfo(t) {
    const { commitment: s, config: n } = Pe(t),
      r = this._buildArgs([], s, void 0, n),
      o = await this._rpcRequest('getEpochInfo', r),
      i = Y(o, cc);
    if ('error' in i) throw new ce(i.error, 'failed to get epoch info');
    return i.result;
  }
  async getEpochSchedule() {
    const t = await this._rpcRequest('getEpochSchedule', []),
      s = Y(t, lc);
    if ('error' in s) throw new ce(s.error, 'failed to get epoch schedule');
    const n = s.result;
    return new oo(
      n.slotsPerEpoch,
      n.leaderScheduleSlotOffset,
      n.warmup,
      n.firstNormalEpoch,
      n.firstNormalSlot
    );
  }
  async getLeaderSchedule() {
    const t = await this._rpcRequest('getLeaderSchedule', []),
      s = Y(t, uc);
    if ('error' in s) throw new ce(s.error, 'failed to get leader schedule');
    return s.result;
  }
  async getMinimumBalanceForRentExemption(t, s) {
    const n = this._buildArgs([t], s),
      r = await this._rpcRequest('getMinimumBalanceForRentExemption', n),
      o = Y(r, Uc);
    return 'error' in o
      ? (console.warn('Unable to fetch minimum balance for rent exemption'), 0)
      : o.result;
  }
  async getRecentBlockhashAndContext(t) {
    const s = this._buildArgs([], t),
      n = await this._rpcRequest('getRecentBlockhash', s),
      r = Y(n, jc);
    if ('error' in r) throw new ce(r.error, 'failed to get recent blockhash');
    return r.result;
  }
  async getRecentPerformanceSamples(t) {
    const s = await this._rpcRequest('getRecentPerformanceSamples', t ? [t] : []),
      n = Y(s, Xc);
    if ('error' in n) throw new ce(n.error, 'failed to get recent performance samples');
    return n.result;
  }
  async getFeeCalculatorForBlockhash(t, s) {
    const n = this._buildArgs([t], s),
      r = await this._rpcRequest('getFeeCalculatorForBlockhash', n),
      o = Y(r, Jc);
    if ('error' in o) throw new ce(o.error, 'failed to get fee calculator');
    const { context: i, value: u } = o.result;
    return { context: i, value: u !== null ? u.feeCalculator : null };
  }
  async getFeeForMessage(t, s) {
    const n = be(t.serialize()).toString('base64'),
      r = this._buildArgs([n], s),
      o = await this._rpcRequest('getFeeForMessage', r),
      i = Y(o, Me(Z(B())));
    if ('error' in i) throw new ce(i.error, 'failed to get fee for message');
    if (i.result === null) throw new Error('invalid blockhash');
    return i.result;
  }
  async getRecentBlockhash(t) {
    try {
      return (await this.getRecentBlockhashAndContext(t)).value;
    } catch (s) {
      throw new Error('failed to get recent blockhash: ' + s);
    }
  }
  async getLatestBlockhash(t) {
    try {
      return (await this.getLatestBlockhashAndContext(t)).value;
    } catch (s) {
      throw new Error('failed to get recent blockhash: ' + s);
    }
  }
  async getLatestBlockhashAndContext(t) {
    const { commitment: s, config: n } = Pe(t),
      r = this._buildArgs([], s, void 0, n),
      o = await this._rpcRequest('getLatestBlockhash', r),
      i = Y(o, Vc);
    if ('error' in i) throw new ce(i.error, 'failed to get latest blockhash');
    return i.result;
  }
  async getVersion() {
    const t = await this._rpcRequest('getVersion', []),
      s = Y(t, we(tc));
    if ('error' in s) throw new ce(s.error, 'failed to get version');
    return s.result;
  }
  async getGenesisHash() {
    const t = await this._rpcRequest('getGenesisHash', []),
      s = Y(t, we(j()));
    if ('error' in s) throw new ce(s.error, 'failed to get genesis hash');
    return s.result;
  }
  async getBlock(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgsAtLeastConfirmed([t], n, void 0, r),
      i = await this._rpcRequest('getBlock', o);
    try {
      switch (r == null ? void 0 : r.transactionDetails) {
        case 'accounts': {
          const u = Y(i, zc);
          if ('error' in u) throw u.error;
          return u.result;
        }
        case 'none': {
          const u = Y(i, Kc);
          if ('error' in u) throw u.error;
          return u.result;
        }
        default: {
          const u = Y(i, Fc);
          if ('error' in u) throw u.error;
          const { result: l } = u;
          return l
            ? {
                ...l,
                transactions: l.transactions.map(({ transaction: d, meta: h, version: y }) => ({
                  meta: h,
                  transaction: { ...d, message: sn(y, d.message) },
                  version: y,
                })),
              }
            : null;
        }
      }
    } catch (u) {
      throw new ce(u, 'failed to get confirmed block');
    }
  }
  async getParsedBlock(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgsAtLeastConfirmed([t], n, 'jsonParsed', r),
      i = await this._rpcRequest('getBlock', o);
    try {
      switch (r == null ? void 0 : r.transactionDetails) {
        case 'accounts': {
          const u = Y(i, Wc);
          if ('error' in u) throw u.error;
          return u.result;
        }
        case 'none': {
          const u = Y(i, Gc);
          if ('error' in u) throw u.error;
          return u.result;
        }
        default: {
          const u = Y(i, $c);
          if ('error' in u) throw u.error;
          return u.result;
        }
      }
    } catch (u) {
      throw new ce(u, 'failed to get block');
    }
  }
  async getBlockHeight(t) {
    const { commitment: s, config: n } = Pe(t),
      r = this._buildArgs([], s, void 0, n),
      o = await this._rpcRequest('getBlockHeight', r),
      i = Y(o, we(B()));
    if ('error' in i) throw new ce(i.error, 'failed to get block height information');
    return i.result;
  }
  async getBlockProduction(t) {
    let s, n;
    if (typeof t == 'string') n = t;
    else if (t) {
      const { commitment: u, ...l } = t;
      (n = u), (s = l);
    }
    const r = this._buildArgs([], n, 'base64', s),
      o = await this._rpcRequest('getBlockProduction', r),
      i = Y(o, sc);
    if ('error' in i) throw new ce(i.error, 'failed to get block production information');
    return i.result;
  }
  async getTransaction(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgsAtLeastConfirmed([t], n, void 0, r),
      i = await this._rpcRequest('getTransaction', o),
      u = Y(i, nn);
    if ('error' in u) throw new ce(u.error, 'failed to get transaction');
    const l = u.result;
    return (
      l && {
        ...l,
        transaction: { ...l.transaction, message: sn(l.version, l.transaction.message) },
      }
    );
  }
  async getParsedTransaction(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = this._buildArgsAtLeastConfirmed([t], n, 'jsonParsed', r),
      i = await this._rpcRequest('getTransaction', o),
      u = Y(i, Ts);
    if ('error' in u) throw new ce(u.error, 'failed to get transaction');
    return u.result;
  }
  async getParsedTransactions(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = t.map((l) => ({
        methodName: 'getTransaction',
        args: this._buildArgsAtLeastConfirmed([l], n, 'jsonParsed', r),
      }));
    return (await this._rpcBatchRequest(o)).map((l) => {
      const d = Y(l, Ts);
      if ('error' in d) throw new ce(d.error, 'failed to get transactions');
      return d.result;
    });
  }
  async getTransactions(t, s) {
    const { commitment: n, config: r } = Pe(s),
      o = t.map((l) => ({
        methodName: 'getTransaction',
        args: this._buildArgsAtLeastConfirmed([l], n, void 0, r),
      }));
    return (await this._rpcBatchRequest(o)).map((l) => {
      const d = Y(l, nn);
      if ('error' in d) throw new ce(d.error, 'failed to get transactions');
      const h = d.result;
      return (
        h && {
          ...h,
          transaction: { ...h.transaction, message: sn(h.version, h.transaction.message) },
        }
      );
    });
  }
  async getConfirmedBlock(t, s) {
    const n = this._buildArgsAtLeastConfirmed([t], s),
      r = await this._rpcRequest('getConfirmedBlock', n),
      o = Y(r, qc);
    if ('error' in o) throw new ce(o.error, 'failed to get confirmed block');
    const i = o.result;
    if (!i) throw new Error('Confirmed block ' + t + ' not found');
    const u = {
      ...i,
      transactions: i.transactions.map(({ transaction: l, meta: d }) => {
        const h = new pt(l.message);
        return { meta: d, transaction: { ...l, message: h } };
      }),
    };
    return {
      ...u,
      transactions: u.transactions.map(({ transaction: l, meta: d }) => ({
        meta: d,
        transaction: _e.populate(l.message, l.signatures),
      })),
    };
  }
  async getBlocks(t, s, n) {
    const r = this._buildArgsAtLeastConfirmed(s !== void 0 ? [t, s] : [t], n),
      o = await this._rpcRequest('getBlocks', r),
      i = Y(o, we(Q(B())));
    if ('error' in i) throw new ce(i.error, 'failed to get blocks');
    return i.result;
  }
  async getBlockSignatures(t, s) {
    const n = this._buildArgsAtLeastConfirmed([t], s, void 0, {
        transactionDetails: 'signatures',
        rewards: !1,
      }),
      r = await this._rpcRequest('getBlock', n),
      o = Y(r, pr);
    if ('error' in o) throw new ce(o.error, 'failed to get block');
    const i = o.result;
    if (!i) throw new Error('Block ' + t + ' not found');
    return i;
  }
  async getConfirmedBlockSignatures(t, s) {
    const n = this._buildArgsAtLeastConfirmed([t], s, void 0, {
        transactionDetails: 'signatures',
        rewards: !1,
      }),
      r = await this._rpcRequest('getConfirmedBlock', n),
      o = Y(r, pr);
    if ('error' in o) throw new ce(o.error, 'failed to get confirmed block');
    const i = o.result;
    if (!i) throw new Error('Confirmed block ' + t + ' not found');
    return i;
  }
  async getConfirmedTransaction(t, s) {
    const n = this._buildArgsAtLeastConfirmed([t], s),
      r = await this._rpcRequest('getConfirmedTransaction', n),
      o = Y(r, nn);
    if ('error' in o) throw new ce(o.error, 'failed to get transaction');
    const i = o.result;
    if (!i) return i;
    const u = new pt(i.transaction.message),
      l = i.transaction.signatures;
    return { ...i, transaction: _e.populate(u, l) };
  }
  async getParsedConfirmedTransaction(t, s) {
    const n = this._buildArgsAtLeastConfirmed([t], s, 'jsonParsed'),
      r = await this._rpcRequest('getConfirmedTransaction', n),
      o = Y(r, Ts);
    if ('error' in o) throw new ce(o.error, 'failed to get confirmed transaction');
    return o.result;
  }
  async getParsedConfirmedTransactions(t, s) {
    const n = t.map((i) => ({
      methodName: 'getConfirmedTransaction',
      args: this._buildArgsAtLeastConfirmed([i], s, 'jsonParsed'),
    }));
    return (await this._rpcBatchRequest(n)).map((i) => {
      const u = Y(i, Ts);
      if ('error' in u) throw new ce(u.error, 'failed to get confirmed transactions');
      return u.result;
    });
  }
  async getConfirmedSignaturesForAddress(t, s, n) {
    let r = {},
      o = await this.getFirstAvailableBlock();
    for (; !('until' in r) && (s--, !(s <= 0 || s < o)); )
      try {
        const l = await this.getConfirmedBlockSignatures(s, 'finalized');
        l.signatures.length > 0 && (r.until = l.signatures[l.signatures.length - 1].toString());
      } catch (l) {
        if (l instanceof Error && l.message.includes('skipped')) continue;
        throw l;
      }
    let i = await this.getSlot('finalized');
    for (; !('before' in r) && (n++, !(n > i)); )
      try {
        const l = await this.getConfirmedBlockSignatures(n);
        l.signatures.length > 0 && (r.before = l.signatures[l.signatures.length - 1].toString());
      } catch (l) {
        if (l instanceof Error && l.message.includes('skipped')) continue;
        throw l;
      }
    return (await this.getConfirmedSignaturesForAddress2(t, r)).map((l) => l.signature);
  }
  async getConfirmedSignaturesForAddress2(t, s, n) {
    const r = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, s),
      o = await this._rpcRequest('getConfirmedSignaturesForAddress2', r),
      i = Y(o, Ac);
    if ('error' in i) throw new ce(i.error, 'failed to get confirmed signatures for address');
    return i.result;
  }
  async getSignaturesForAddress(t, s, n) {
    const r = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, s),
      o = await this._rpcRequest('getSignaturesForAddress', r),
      i = Y(o, kc);
    if ('error' in i) throw new ce(i.error, 'failed to get signatures for address');
    return i.result;
  }
  async getAddressLookupTable(t, s) {
    const { context: n, value: r } = await this.getAccountInfoAndContext(t, s);
    let o = null;
    return (
      r !== null && (o = new bn({ key: t, state: bn.deserialize(r.data) })),
      { context: n, value: o }
    );
  }
  async getNonceAndContext(t, s) {
    const { context: n, value: r } = await this.getAccountInfoAndContext(t, s);
    let o = null;
    return r !== null && (o = Ks.fromAccountData(r.data)), { context: n, value: o };
  }
  async getNonce(t, s) {
    return await this.getNonceAndContext(t, s)
      .then((n) => n.value)
      .catch((n) => {
        throw new Error('failed to get nonce for account ' + t.toBase58() + ': ' + n);
      });
  }
  async requestAirdrop(t, s) {
    const n = await this._rpcRequest('requestAirdrop', [t.toBase58(), s]),
      r = Y(n, Zc);
    if ('error' in r) throw new ce(r.error, `airdrop to ${t.toBase58()} failed`);
    return r.result;
  }
  async _blockhashWithExpiryBlockHeight(t) {
    if (!t) {
      for (; this._pollingBlockhash; ) await Ft(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= ao;
      if (this._blockhashInfo.latestBlockhash !== null && !n)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const t = Date.now(),
        s = this._blockhashInfo.latestBlockhash,
        n = s ? s.blockhash : null;
      for (let r = 0; r < 50; r++) {
        const o = await this.getLatestBlockhash('finalized');
        if (n !== o.blockhash)
          return (
            (this._blockhashInfo = {
              latestBlockhash: o,
              lastFetch: Date.now(),
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            o
          );
        await Ft(Fa / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - t}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  async getStakeMinimumDelegation(t) {
    const { commitment: s, config: n } = Pe(t),
      r = this._buildArgs([], s, 'base64', n),
      o = await this._rpcRequest('getStakeMinimumDelegation', r),
      i = Y(o, Me(B()));
    if ('error' in i) throw new ce(i.error, 'failed to get stake minimum delegation');
    return i.result;
  }
  async simulateTransaction(t, s, n) {
    if ('message' in t) {
      const f = t.serialize(),
        m = de.from(f).toString('base64');
      if (Array.isArray(s) || n !== void 0) throw new Error('Invalid arguments');
      const x = s || {};
      (x.encoding = 'base64'), 'commitment' in x || (x.commitment = this.commitment);
      const I = [m, x],
        _ = await this._rpcRequest('simulateTransaction', I),
        E = Y(_, ur);
      if ('error' in E) throw new Error('failed to simulate transaction: ' + E.error.message);
      return E.result;
    }
    let r;
    if (t instanceof _e) {
      let p = t;
      (r = new _e()),
        (r.feePayer = p.feePayer),
        (r.instructions = t.instructions),
        (r.nonceInfo = p.nonceInfo),
        (r.signatures = p.signatures);
    } else (r = _e.populate(t)), (r._message = r._json = void 0);
    if (s !== void 0 && !Array.isArray(s)) throw new Error('Invalid arguments');
    const o = s;
    if (r.nonceInfo && o) r.sign(...o);
    else {
      let p = this._disableBlockhashCaching;
      for (;;) {
        const f = await this._blockhashWithExpiryBlockHeight(p);
        if (
          ((r.lastValidBlockHeight = f.lastValidBlockHeight), (r.recentBlockhash = f.blockhash), !o)
        )
          break;
        if ((r.sign(...o), !r.signature)) throw new Error('!signature');
        const m = r.signature.toString('base64');
        if (
          !this._blockhashInfo.simulatedSignatures.includes(m) &&
          !this._blockhashInfo.transactionSignatures.includes(m)
        ) {
          this._blockhashInfo.simulatedSignatures.push(m);
          break;
        } else p = !0;
      }
    }
    const i = r._compile(),
      u = i.serialize(),
      d = r._serialize(u).toString('base64'),
      h = { encoding: 'base64', commitment: this.commitment };
    if (n) {
      const p = (Array.isArray(n) ? n : i.nonProgramIds()).map((f) => f.toBase58());
      h.accounts = { encoding: 'base64', addresses: p };
    }
    o && (h.sigVerify = !0);
    const y = [d, h],
      b = await this._rpcRequest('simulateTransaction', y),
      w = Y(b, ur);
    if ('error' in w) {
      let p;
      if ('data' in w.error && ((p = w.error.data.logs), p && Array.isArray(p))) {
        const f = `
    `,
          m = f + p.join(f);
        console.error(w.error.message, m);
      }
      throw new mn('failed to simulate transaction: ' + w.error.message, p);
    }
    return w.result;
  }
  async sendTransaction(t, s, n) {
    if ('version' in t) {
      if (s && Array.isArray(s)) throw new Error('Invalid arguments');
      const i = t.serialize();
      return await this.sendRawTransaction(i, s);
    }
    if (s === void 0 || !Array.isArray(s)) throw new Error('Invalid arguments');
    const r = s;
    if (t.nonceInfo) t.sign(...r);
    else {
      let i = this._disableBlockhashCaching;
      for (;;) {
        const u = await this._blockhashWithExpiryBlockHeight(i);
        if (
          ((t.lastValidBlockHeight = u.lastValidBlockHeight),
          (t.recentBlockhash = u.blockhash),
          t.sign(...r),
          !t.signature)
        )
          throw new Error('!signature');
        const l = t.signature.toString('base64');
        if (this._blockhashInfo.transactionSignatures.includes(l)) i = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(l);
          break;
        }
      }
    }
    const o = t.serialize();
    return await this.sendRawTransaction(o, n);
  }
  async sendRawTransaction(t, s) {
    const n = be(t).toString('base64');
    return await this.sendEncodedTransaction(n, s);
  }
  async sendEncodedTransaction(t, s) {
    const n = { encoding: 'base64' },
      r = s && s.skipPreflight,
      o = (s && s.preflightCommitment) || this.commitment;
    s && s.maxRetries != null && (n.maxRetries = s.maxRetries),
      s && s.minContextSlot != null && (n.minContextSlot = s.minContextSlot),
      r && (n.skipPreflight = r),
      o && (n.preflightCommitment = o);
    const i = [t, n],
      u = await this._rpcRequest('sendTransaction', i),
      l = Y(u, Qc);
    if ('error' in l) {
      let d;
      throw (
        ('data' in l.error && (d = l.error.data.logs),
        new mn('failed to send transaction: ' + l.error.message, d))
      );
    }
    return l.result;
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
  _wsOnError(t) {
    (this._rpcWebSocketConnected = !1), console.error('ws error:', t.message);
  }
  _wsOnClose(t) {
    if (
      ((this._rpcWebSocketConnected = !1),
      (this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
      this._rpcWebSocketIdleTimeout &&
        (clearTimeout(this._rpcWebSocketIdleTimeout), (this._rpcWebSocketIdleTimeout = null)),
      this._rpcWebSocketHeartbeat &&
        (clearInterval(this._rpcWebSocketHeartbeat), (this._rpcWebSocketHeartbeat = null)),
      t === 1e3)
    ) {
      this._updateSubscriptions();
      return;
    }
    (this._subscriptionCallbacksByServerSubscriptionId = {}),
      Object.entries(this._subscriptionsByHash).forEach(([s, n]) => {
        this._setSubscription(s, { ...n, state: 'pending' });
      });
  }
  _setSubscription(t, s) {
    var r;
    const n = (r = this._subscriptionsByHash[t]) == null ? void 0 : r.state;
    if (((this._subscriptionsByHash[t] = s), n !== s.state)) {
      const o = this._subscriptionStateChangeCallbacksByHash[t];
      o &&
        o.forEach((i) => {
          try {
            i(s.state);
          } catch {}
        });
    }
  }
  _onSubscriptionStateChange(t, s) {
    var o;
    const n = this._subscriptionHashByClientSubscriptionId[t];
    if (n == null) return () => {};
    const r = (o = this._subscriptionStateChangeCallbacksByHash)[n] || (o[n] = new Set());
    return (
      r.add(s),
      () => {
        r.delete(s), r.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n];
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
    const t = this._rpcWebSocketGeneration,
      s = () => t === this._rpcWebSocketGeneration;
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
                const { args: o, method: i } = r;
                try {
                  this._setSubscription(n, { ...r, state: 'subscribing' });
                  const u = await this._rpcWebSocket.call(i, o);
                  this._setSubscription(n, { ...r, serverSubscriptionId: u, state: 'subscribed' }),
                    (this._subscriptionCallbacksByServerSubscriptionId[u] = r.callbacks),
                    await this._updateSubscriptions();
                } catch (u) {
                  if (
                    (u instanceof Error && console.error(`${i} error for argument`, o, u.message),
                    !s())
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
                  const { serverSubscriptionId: o, unsubscribeMethod: i } = r;
                  if (this._subscriptionsAutoDisposedByRpc.has(o))
                    this._subscriptionsAutoDisposedByRpc.delete(o);
                  else {
                    this._setSubscription(n, { ...r, state: 'unsubscribing' }),
                      this._setSubscription(n, { ...r, state: 'unsubscribing' });
                    try {
                      await this._rpcWebSocket.call(i, [o]);
                    } catch (u) {
                      if ((u instanceof Error && console.error(`${i} error:`, u.message), !s()))
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
  _handleServerNotification(t, s) {
    const n = this._subscriptionCallbacksByServerSubscriptionId[t];
    n !== void 0 &&
      n.forEach((r) => {
        try {
          r(...s);
        } catch (o) {
          console.error(o);
        }
      });
  }
  _wsOnAccountNotification(t) {
    const { result: s, subscription: n } = Y(t, Sc);
    this._handleServerNotification(n, [s.value, s.context]);
  }
  _makeSubscription(t, s) {
    const n = this._nextClientSubscriptionId++,
      r = La([t.method, s]),
      o = this._subscriptionsByHash[r];
    return (
      o === void 0
        ? (this._subscriptionsByHash[r] = {
            ...t,
            args: s,
            callbacks: new Set([t.callback]),
            state: 'pending',
          })
        : o.callbacks.add(t.callback),
      (this._subscriptionHashByClientSubscriptionId[n] = r),
      (this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n],
          delete this._subscriptionHashByClientSubscriptionId[n];
        const i = this._subscriptionsByHash[r];
        Ie(
          i !== void 0,
          `Could not find a \`Subscription\` when tearing down client subscription #${n}`
        ),
          i.callbacks.delete(t.callback),
          await this._updateSubscriptions();
      }),
      this._updateSubscriptions(),
      n
    );
  }
  onAccountChange(t, s, n) {
    const r = this._buildArgs([t.toBase58()], n || this._commitment || 'finalized', 'base64');
    return this._makeSubscription(
      { callback: s, method: 'accountSubscribe', unsubscribeMethod: 'accountUnsubscribe' },
      r
    );
  }
  async removeAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, 'account change');
  }
  _wsOnProgramAccountNotification(t) {
    const { result: s, subscription: n } = Y(t, Ec);
    this._handleServerNotification(n, [
      { accountId: s.value.pubkey, accountInfo: s.value.account },
      s.context,
    ]);
  }
  onProgramAccountChange(t, s, n, r) {
    const o = this._buildArgs(
      [t.toBase58()],
      n || this._commitment || 'finalized',
      'base64',
      r ? { filters: r } : void 0
    );
    return this._makeSubscription(
      { callback: s, method: 'programSubscribe', unsubscribeMethod: 'programUnsubscribe' },
      o
    );
  }
  async removeProgramAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, 'program account change');
  }
  onLogs(t, s, n) {
    const r = this._buildArgs(
      [typeof t == 'object' ? { mentions: [t.toString()] } : t],
      n || this._commitment || 'finalized'
    );
    return this._makeSubscription(
      { callback: s, method: 'logsSubscribe', unsubscribeMethod: 'logsUnsubscribe' },
      r
    );
  }
  async removeOnLogsListener(t) {
    await this._unsubscribeClientSubscription(t, 'logs');
  }
  _wsOnLogsNotification(t) {
    const { result: s, subscription: n } = Y(t, tl);
    this._handleServerNotification(n, [s.value, s.context]);
  }
  _wsOnSlotNotification(t) {
    const { result: s, subscription: n } = Y(t, Tc);
    this._handleServerNotification(n, [s]);
  }
  onSlotChange(t) {
    return this._makeSubscription(
      { callback: t, method: 'slotSubscribe', unsubscribeMethod: 'slotUnsubscribe' },
      []
    );
  }
  async removeSlotChangeListener(t) {
    await this._unsubscribeClientSubscription(t, 'slot change');
  }
  _wsOnSlotUpdatesNotification(t) {
    const { result: s, subscription: n } = Y(t, Bc);
    this._handleServerNotification(n, [s]);
  }
  onSlotUpdate(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: 'slotsUpdatesSubscribe',
        unsubscribeMethod: 'slotsUpdatesUnsubscribe',
      },
      []
    );
  }
  async removeSlotUpdateListener(t) {
    await this._unsubscribeClientSubscription(t, 'slot update');
  }
  async _unsubscribeClientSubscription(t, s) {
    const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
    n
      ? await n()
      : console.warn(
          `Ignored unsubscribe request because an active subscription with id \`${t}\` for '${s}' events could not be found.`
        );
  }
  _buildArgs(t, s, n, r) {
    const o = s || this._commitment;
    if (o || n || r) {
      let i = {};
      n && (i.encoding = n), o && (i.commitment = o), r && (i = Object.assign(i, r)), t.push(i);
    }
    return t;
  }
  _buildArgsAtLeastConfirmed(t, s, n, r) {
    const o = s || this._commitment;
    if (o && !['confirmed', 'finalized'].includes(o))
      throw new Error(
        'Using Connection with default commitment: `' +
          this._commitment +
          '`, but method requires at least `confirmed`'
      );
    return this._buildArgs(t, s, n, r);
  }
  _wsOnSignatureNotification(t) {
    const { result: s, subscription: n } = Y(t, vc);
    s.value !== 'receivedSignature' && this._subscriptionsAutoDisposedByRpc.add(n),
      this._handleServerNotification(
        n,
        s.value === 'receivedSignature'
          ? [{ type: 'received' }, s.context]
          : [{ type: 'status', result: s.value }, s.context]
      );
  }
  onSignature(t, s, n) {
    const r = this._buildArgs([t], n || this._commitment || 'finalized'),
      o = this._makeSubscription(
        {
          callback: (i, u) => {
            if (i.type === 'status') {
              s(i.result, u);
              try {
                this.removeSignatureListener(o);
              } catch {}
            }
          },
          method: 'signatureSubscribe',
          unsubscribeMethod: 'signatureUnsubscribe',
        },
        r
      );
    return o;
  }
  onSignatureWithOptions(t, s, n) {
    const { commitment: r, ...o } = {
        ...n,
        commitment: (n && n.commitment) || this._commitment || 'finalized',
      },
      i = this._buildArgs([t], r, void 0, o),
      u = this._makeSubscription(
        {
          callback: (l, d) => {
            s(l, d);
            try {
              this.removeSignatureListener(u);
            } catch {}
          },
          method: 'signatureSubscribe',
          unsubscribeMethod: 'signatureUnsubscribe',
        },
        i
      );
    return u;
  }
  async removeSignatureListener(t) {
    await this._unsubscribeClientSubscription(t, 'signature result');
  }
  _wsOnRootNotification(t) {
    const { result: s, subscription: n } = Y(t, Cc);
    this._handleServerNotification(n, [s]);
  }
  onRootChange(t) {
    return this._makeSubscription(
      { callback: t, method: 'rootSubscribe', unsubscribeMethod: 'rootUnsubscribe' },
      []
    );
  }
  async removeRootChangeListener(t) {
    await this._unsubscribeClientSubscription(t, 'root change');
  }
}
class Jt {
  constructor(t) {
    (this._keypair = void 0), (this._keypair = t ?? ir());
  }
  static generate() {
    return new Jt(ir());
  }
  static fromSecretKey(t, s) {
    if (t.byteLength !== 64) throw new Error('bad secret key size');
    const n = t.slice(32, 64);
    if (!s || !s.skipValidation) {
      const r = t.slice(0, 32),
        o = Ns(r);
      for (let i = 0; i < 32; i++)
        if (n[i] !== o[i]) throw new Error('provided secretKey is invalid');
    }
    return new Jt({ publicKey: n, secretKey: t });
  }
  static fromSeed(t) {
    const s = Ns(t),
      n = new Uint8Array(64);
    return n.set(t), n.set(s, 32), new Jt({ publicKey: s, secretKey: n });
  }
  get publicKey() {
    return new W(this._keypair.publicKey);
  }
  get secretKey() {
    return new Uint8Array(this._keypair.secretKey);
  }
}
const Et = Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: te([oe('instruction'), es('recentSlot'), xe('bumpSeed')]),
  },
  FreezeLookupTable: { index: 1, layout: te([oe('instruction')]) },
  ExtendLookupTable: {
    index: 2,
    layout: te([oe('instruction'), es(), Ge(Ae(), $t(oe(), -8), 'addresses')]),
  },
  DeactivateLookupTable: { index: 3, layout: te([oe('instruction')]) },
  CloseLookupTable: { index: 4, layout: te([oe('instruction')]) },
});
class rl {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const n = oe('instruction').decode(t.data);
    let r;
    for (const [o, i] of Object.entries(Et))
      if (i.index == n) {
        r = o;
        break;
      }
    if (!r) throw new Error('Invalid Instruction. Should be a LookupTable Instruction');
    return r;
  }
  static decodeCreateLookupTable(t) {
    this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 4);
    const { recentSlot: s } = Ee(Et.CreateLookupTable, t.data);
    return { authority: t.keys[1].pubkey, payer: t.keys[2].pubkey, recentSlot: Number(s) };
  }
  static decodeExtendLookupTable(t) {
    if ((this.checkProgramId(t.programId), t.keys.length < 2))
      throw new Error(`invalid instruction; found ${t.keys.length} keys, expected at least 2`);
    const { addresses: s } = Ee(Et.ExtendLookupTable, t.data);
    return {
      lookupTable: t.keys[0].pubkey,
      authority: t.keys[1].pubkey,
      payer: t.keys.length > 2 ? t.keys[2].pubkey : void 0,
      addresses: s.map((n) => new W(n)),
    };
  }
  static decodeCloseLookupTable(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeysLength(t.keys, 3),
      { lookupTable: t.keys[0].pubkey, authority: t.keys[1].pubkey, recipient: t.keys[2].pubkey }
    );
  }
  static decodeFreezeLookupTable(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeysLength(t.keys, 2),
      { lookupTable: t.keys[0].pubkey, authority: t.keys[1].pubkey }
    );
  }
  static decodeDeactivateLookupTable(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeysLength(t.keys, 2),
      { lookupTable: t.keys[0].pubkey, authority: t.keys[1].pubkey }
    );
  }
  static checkProgramId(t) {
    if (!t.equals(Kn.programId))
      throw new Error('invalid instruction; programId is not AddressLookupTable Program');
  }
  static checkKeysLength(t, s) {
    if (t.length < s)
      throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${s}`);
  }
}
class Kn {
  constructor() {}
  static createLookupTable(t) {
    const [s, n] = W.findProgramAddressSync(
        [t.authority.toBuffer(), vr(BigInt(t.recentSlot), 8)],
        this.programId
      ),
      r = Et.CreateLookupTable,
      o = Se(r, { recentSlot: BigInt(t.recentSlot), bumpSeed: n }),
      i = [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
        { pubkey: t.payer, isSigner: !0, isWritable: !0 },
        { pubkey: qe.programId, isSigner: !1, isWritable: !1 },
      ];
    return [new Te({ programId: this.programId, keys: i, data: o }), s];
  }
  static freezeLookupTable(t) {
    const s = Et.FreezeLookupTable,
      n = Se(s),
      r = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
      ];
    return new Te({ programId: this.programId, keys: r, data: n });
  }
  static extendLookupTable(t) {
    const s = Et.ExtendLookupTable,
      n = Se(s, { addresses: t.addresses.map((o) => o.toBytes()) }),
      r = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
      ];
    return (
      t.payer &&
        r.push(
          { pubkey: t.payer, isSigner: !0, isWritable: !0 },
          { pubkey: qe.programId, isSigner: !1, isWritable: !1 }
        ),
      new Te({ programId: this.programId, keys: r, data: n })
    );
  }
  static deactivateLookupTable(t) {
    const s = Et.DeactivateLookupTable,
      n = Se(s),
      r = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
      ];
    return new Te({ programId: this.programId, keys: r, data: n });
  }
  static closeLookupTable(t) {
    const s = Et.CloseLookupTable,
      n = Se(s),
      r = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
        { pubkey: t.recipient, isSigner: !1, isWritable: !0 },
      ];
    return new Te({ programId: this.programId, keys: r, data: n });
  }
}
Kn.programId = new W('AddressLookupTab1e1111111111111111111111111');
class ol {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const n = xe('instruction').decode(t.data);
    let r;
    for (const [o, i] of Object.entries(mt))
      if (i.index == n) {
        r = o;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a ComputeBudgetInstruction');
    return r;
  }
  static decodeRequestUnits(t) {
    this.checkProgramId(t.programId);
    const { units: s, additionalFee: n } = Ee(mt.RequestUnits, t.data);
    return { units: s, additionalFee: n };
  }
  static decodeRequestHeapFrame(t) {
    this.checkProgramId(t.programId);
    const { bytes: s } = Ee(mt.RequestHeapFrame, t.data);
    return { bytes: s };
  }
  static decodeSetComputeUnitLimit(t) {
    this.checkProgramId(t.programId);
    const { units: s } = Ee(mt.SetComputeUnitLimit, t.data);
    return { units: s };
  }
  static decodeSetComputeUnitPrice(t) {
    this.checkProgramId(t.programId);
    const { microLamports: s } = Ee(mt.SetComputeUnitPrice, t.data);
    return { microLamports: s };
  }
  static checkProgramId(t) {
    if (!t.equals(zn.programId))
      throw new Error('invalid instruction; programId is not ComputeBudgetProgram');
  }
}
const mt = Object.freeze({
  RequestUnits: { index: 0, layout: te([xe('instruction'), oe('units'), oe('additionalFee')]) },
  RequestHeapFrame: { index: 1, layout: te([xe('instruction'), oe('bytes')]) },
  SetComputeUnitLimit: { index: 2, layout: te([xe('instruction'), oe('units')]) },
  SetComputeUnitPrice: { index: 3, layout: te([xe('instruction'), es('microLamports')]) },
});
class zn {
  constructor() {}
  static requestUnits(t) {
    const s = mt.RequestUnits,
      n = Se(s, t);
    return new Te({ keys: [], programId: this.programId, data: n });
  }
  static requestHeapFrame(t) {
    const s = mt.RequestHeapFrame,
      n = Se(s, t);
    return new Te({ keys: [], programId: this.programId, data: n });
  }
  static setComputeUnitLimit(t) {
    const s = mt.SetComputeUnitLimit,
      n = Se(s, t);
    return new Te({ keys: [], programId: this.programId, data: n });
  }
  static setComputeUnitPrice(t) {
    const s = mt.SetComputeUnitPrice,
      n = Se(s, { microLamports: BigInt(t.microLamports) });
    return new Te({ keys: [], programId: this.programId, data: n });
  }
}
zn.programId = new W('ComputeBudget111111111111111111111111111111');
const hr = 64,
  fr = 32,
  yr = 64,
  gr = te([
    xe('numSignatures'),
    xe('padding'),
    ut('signatureOffset'),
    ut('signatureInstructionIndex'),
    ut('publicKeyOffset'),
    ut('publicKeyInstructionIndex'),
    ut('messageDataOffset'),
    ut('messageDataSize'),
    ut('messageInstructionIndex'),
  ]);
class Ws {
  constructor() {}
  static createInstructionWithPublicKey(t) {
    const { publicKey: s, message: n, signature: r, instructionIndex: o } = t;
    Ie(s.length === fr, `Public Key must be ${fr} bytes but received ${s.length} bytes`),
      Ie(r.length === yr, `Signature must be ${yr} bytes but received ${r.length} bytes`);
    const i = gr.span,
      u = i + s.length,
      l = u + r.length,
      d = 1,
      h = de.alloc(l + n.length),
      y = o ?? 65535;
    return (
      gr.encode(
        {
          numSignatures: d,
          padding: 0,
          signatureOffset: u,
          signatureInstructionIndex: y,
          publicKeyOffset: i,
          publicKeyInstructionIndex: y,
          messageDataOffset: l,
          messageDataSize: n.length,
          messageInstructionIndex: y,
        },
        h
      ),
      h.fill(s, i),
      h.fill(r, u),
      h.fill(n, l),
      new Te({ keys: [], programId: Ws.programId, data: h })
    );
  }
  static createInstructionWithPrivateKey(t) {
    const { privateKey: s, message: n, instructionIndex: r } = t;
    Ie(s.length === hr, `Private key must be ${hr} bytes but received ${s.length} bytes`);
    try {
      const o = Jt.fromSecretKey(s),
        i = o.publicKey.toBytes(),
        u = Cn(n, o.secretKey);
      return this.createInstructionWithPublicKey({
        publicKey: i,
        message: n,
        signature: u,
        instructionIndex: r,
      });
    } catch (o) {
      throw new Error(`Error creating instruction; ${o}`);
    }
  }
}
Ws.programId = new W('Ed25519SigVerify111111111111111111111111111');
Br.hmacSha256Sync = (e, ...t) => {
  const s = Zr.create(yn, e);
  return t.forEach((n) => s.update(n)), s.digest();
};
const il = (e, t) => Uo(e, t, { der: !1, recovered: !0 });
Br.isValidPrivateKey;
const al = Mo,
  mr = 32,
  rn = 20,
  br = 64,
  cl = 11,
  on = te([
    xe('numSignatures'),
    ut('signatureOffset'),
    xe('signatureInstructionIndex'),
    ut('ethAddressOffset'),
    xe('ethAddressInstructionIndex'),
    ut('messageDataOffset'),
    ut('messageDataSize'),
    xe('messageInstructionIndex'),
    Ce(20, 'ethAddress'),
    Ce(64, 'signature'),
    xe('recoveryId'),
  ]);
class Zt {
  constructor() {}
  static publicKeyToEthAddress(t) {
    Ie(t.length === br, `Public key must be ${br} bytes but received ${t.length} bytes`);
    try {
      return de.from(or(be(t))).slice(-rn);
    } catch (s) {
      throw new Error(`Error constructing Ethereum address: ${s}`);
    }
  }
  static createInstructionWithPublicKey(t) {
    const { publicKey: s, message: n, signature: r, recoveryId: o, instructionIndex: i } = t;
    return Zt.createInstructionWithEthAddress({
      ethAddress: Zt.publicKeyToEthAddress(s),
      message: n,
      signature: r,
      recoveryId: o,
      instructionIndex: i,
    });
  }
  static createInstructionWithEthAddress(t) {
    const { ethAddress: s, message: n, signature: r, recoveryId: o, instructionIndex: i = 0 } = t;
    let u;
    typeof s == 'string'
      ? s.startsWith('0x')
        ? (u = de.from(s.substr(2), 'hex'))
        : (u = de.from(s, 'hex'))
      : (u = s),
      Ie(u.length === rn, `Address must be ${rn} bytes but received ${u.length} bytes`);
    const l = 1 + cl,
      d = l,
      h = l + u.length,
      y = h + r.length + 1,
      b = 1,
      w = de.alloc(on.span + n.length);
    return (
      on.encode(
        {
          numSignatures: b,
          signatureOffset: h,
          signatureInstructionIndex: i,
          ethAddressOffset: d,
          ethAddressInstructionIndex: i,
          messageDataOffset: y,
          messageDataSize: n.length,
          messageInstructionIndex: i,
          signature: be(r),
          ethAddress: be(u),
          recoveryId: o,
        },
        w
      ),
      w.fill(be(n), on.span),
      new Te({ keys: [], programId: Zt.programId, data: w })
    );
  }
  static createInstructionWithPrivateKey(t) {
    const { privateKey: s, message: n, instructionIndex: r } = t;
    Ie(s.length === mr, `Private key must be ${mr} bytes but received ${s.length} bytes`);
    try {
      const o = be(s),
        i = al(o, !1).slice(1),
        u = de.from(or(be(n))),
        [l, d] = il(u, o);
      return this.createInstructionWithPublicKey({
        publicKey: i,
        message: n,
        signature: l,
        recoveryId: d,
        instructionIndex: r,
      });
    } catch (o) {
      throw new Error(`Error creating instruction; ${o}`);
    }
  }
}
Zt.programId = new W('KeccakSecp256k11111111111111111111111111111');
const bo = new W('StakeConfig11111111111111111111111111111111');
class wo {
  constructor(t, s) {
    (this.staker = void 0), (this.withdrawer = void 0), (this.staker = t), (this.withdrawer = s);
  }
}
class ms {
  constructor(t, s, n) {
    (this.unixTimestamp = void 0),
      (this.epoch = void 0),
      (this.custodian = void 0),
      (this.unixTimestamp = t),
      (this.epoch = s),
      (this.custodian = n);
  }
}
ms.default = new ms(0, 0, W.default);
class ll {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const n = oe('instruction').decode(t.data);
    let r;
    for (const [o, i] of Object.entries(Ke))
      if (i.index == n) {
        r = o;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a StakeInstruction');
    return r;
  }
  static decodeInitialize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { authorized: s, lockup: n } = Ee(Ke.Initialize, t.data);
    return {
      stakePubkey: t.keys[0].pubkey,
      authorized: new wo(new W(s.staker), new W(s.withdrawer)),
      lockup: new ms(n.unixTimestamp, n.epoch, new W(n.custodian)),
    };
  }
  static decodeDelegate(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 6),
      Ee(Ke.Delegate, t.data),
      {
        stakePubkey: t.keys[0].pubkey,
        votePubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[5].pubkey,
      }
    );
  }
  static decodeAuthorize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { newAuthorized: s, stakeAuthorizationType: n } = Ee(Ke.Authorize, t.data),
      r = {
        stakePubkey: t.keys[0].pubkey,
        authorizedPubkey: t.keys[2].pubkey,
        newAuthorizedPubkey: new W(s),
        stakeAuthorizationType: { index: n },
      };
    return t.keys.length > 3 && (r.custodianPubkey = t.keys[3].pubkey), r;
  }
  static decodeAuthorizeWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const {
        newAuthorized: s,
        stakeAuthorizationType: n,
        authoritySeed: r,
        authorityOwner: o,
      } = Ee(Ke.AuthorizeWithSeed, t.data),
      i = {
        stakePubkey: t.keys[0].pubkey,
        authorityBase: t.keys[1].pubkey,
        authoritySeed: r,
        authorityOwner: new W(o),
        newAuthorizedPubkey: new W(s),
        stakeAuthorizationType: { index: n },
      };
    return t.keys.length > 3 && (i.custodianPubkey = t.keys[3].pubkey), i;
  }
  static decodeSplit(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { lamports: s } = Ee(Ke.Split, t.data);
    return {
      stakePubkey: t.keys[0].pubkey,
      splitStakePubkey: t.keys[1].pubkey,
      authorizedPubkey: t.keys[2].pubkey,
      lamports: s,
    };
  }
  static decodeMerge(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 3),
      Ee(Ke.Merge, t.data),
      {
        stakePubkey: t.keys[0].pubkey,
        sourceStakePubKey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[4].pubkey,
      }
    );
  }
  static decodeWithdraw(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
    const { lamports: s } = Ee(Ke.Withdraw, t.data),
      n = {
        stakePubkey: t.keys[0].pubkey,
        toPubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[4].pubkey,
        lamports: s,
      };
    return t.keys.length > 5 && (n.custodianPubkey = t.keys[5].pubkey), n;
  }
  static decodeDeactivate(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 3),
      Ee(Ke.Deactivate, t.data),
      { stakePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey }
    );
  }
  static checkProgramId(t) {
    if (!t.equals(Gs.programId))
      throw new Error('invalid instruction; programId is not StakeProgram');
  }
  static checkKeyLength(t, s) {
    if (t.length < s)
      throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${s}`);
  }
}
const Ke = Object.freeze({
    Initialize: { index: 0, layout: te([oe('instruction'), ha(), fa()]) },
    Authorize: {
      index: 1,
      layout: te([oe('instruction'), Ae('newAuthorized'), oe('stakeAuthorizationType')]),
    },
    Delegate: { index: 2, layout: te([oe('instruction')]) },
    Split: { index: 3, layout: te([oe('instruction'), at('lamports')]) },
    Withdraw: { index: 4, layout: te([oe('instruction'), at('lamports')]) },
    Deactivate: { index: 5, layout: te([oe('instruction')]) },
    Merge: { index: 7, layout: te([oe('instruction')]) },
    AuthorizeWithSeed: {
      index: 8,
      layout: te([
        oe('instruction'),
        Ae('newAuthorized'),
        oe('stakeAuthorizationType'),
        Kt('authoritySeed'),
        Ae('authorityOwner'),
      ]),
    },
  }),
  ul = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
class Gs {
  constructor() {}
  static initialize(t) {
    const { stakePubkey: s, authorized: n, lockup: r } = t,
      o = r || ms.default,
      i = Ke.Initialize,
      u = Se(i, {
        authorized: { staker: be(n.staker.toBuffer()), withdrawer: be(n.withdrawer.toBuffer()) },
        lockup: {
          unixTimestamp: o.unixTimestamp,
          epoch: o.epoch,
          custodian: be(o.custodian.toBuffer()),
        },
      }),
      l = {
        keys: [
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: Qt, isSigner: !1, isWritable: !1 },
        ],
        programId: this.programId,
        data: u,
      };
    return new Te(l);
  }
  static createAccountWithSeed(t) {
    const s = new _e();
    s.add(
      qe.createAccountWithSeed({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.stakePubkey,
        basePubkey: t.basePubkey,
        seed: t.seed,
        lamports: t.lamports,
        space: this.space,
        programId: this.programId,
      })
    );
    const { stakePubkey: n, authorized: r, lockup: o } = t;
    return s.add(this.initialize({ stakePubkey: n, authorized: r, lockup: o }));
  }
  static createAccount(t) {
    const s = new _e();
    s.add(
      qe.createAccount({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.stakePubkey,
        lamports: t.lamports,
        space: this.space,
        programId: this.programId,
      })
    );
    const { stakePubkey: n, authorized: r, lockup: o } = t;
    return s.add(this.initialize({ stakePubkey: n, authorized: r, lockup: o }));
  }
  static delegate(t) {
    const { stakePubkey: s, authorizedPubkey: n, votePubkey: r } = t,
      o = Ke.Delegate,
      i = Se(o);
    return new _e().add({
      keys: [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !1, isWritable: !1 },
        { pubkey: yt, isSigner: !1, isWritable: !1 },
        { pubkey: vs, isSigner: !1, isWritable: !1 },
        { pubkey: bo, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: i,
    });
  }
  static authorize(t) {
    const {
        stakePubkey: s,
        authorizedPubkey: n,
        newAuthorizedPubkey: r,
        stakeAuthorizationType: o,
        custodianPubkey: i,
      } = t,
      u = Ke.Authorize,
      l = Se(u, { newAuthorized: be(r.toBuffer()), stakeAuthorizationType: o.index }),
      d = [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: yt, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return (
      i && d.push({ pubkey: i, isSigner: !1, isWritable: !1 }),
      new _e().add({ keys: d, programId: this.programId, data: l })
    );
  }
  static authorizeWithSeed(t) {
    const {
        stakePubkey: s,
        authorityBase: n,
        authoritySeed: r,
        authorityOwner: o,
        newAuthorizedPubkey: i,
        stakeAuthorizationType: u,
        custodianPubkey: l,
      } = t,
      d = Ke.AuthorizeWithSeed,
      h = Se(d, {
        newAuthorized: be(i.toBuffer()),
        stakeAuthorizationType: u.index,
        authoritySeed: r,
        authorityOwner: be(o.toBuffer()),
      }),
      y = [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
        { pubkey: yt, isSigner: !1, isWritable: !1 },
      ];
    return (
      l && y.push({ pubkey: l, isSigner: !1, isWritable: !1 }),
      new _e().add({ keys: y, programId: this.programId, data: h })
    );
  }
  static splitInstruction(t) {
    const { stakePubkey: s, authorizedPubkey: n, splitStakePubkey: r, lamports: o } = t,
      i = Ke.Split,
      u = Se(i, { lamports: o });
    return new Te({
      keys: [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: u,
    });
  }
  static split(t) {
    const s = new _e();
    return (
      s.add(
        qe.createAccount({
          fromPubkey: t.authorizedPubkey,
          newAccountPubkey: t.splitStakePubkey,
          lamports: 0,
          space: this.space,
          programId: this.programId,
        })
      ),
      s.add(this.splitInstruction(t))
    );
  }
  static splitWithSeed(t) {
    const {
        stakePubkey: s,
        authorizedPubkey: n,
        splitStakePubkey: r,
        basePubkey: o,
        seed: i,
        lamports: u,
      } = t,
      l = new _e();
    return (
      l.add(
        qe.allocate({
          accountPubkey: r,
          basePubkey: o,
          seed: i,
          space: this.space,
          programId: this.programId,
        })
      ),
      l.add(
        this.splitInstruction({
          stakePubkey: s,
          authorizedPubkey: n,
          splitStakePubkey: r,
          lamports: u,
        })
      )
    );
  }
  static merge(t) {
    const { stakePubkey: s, sourceStakePubKey: n, authorizedPubkey: r } = t,
      o = Ke.Merge,
      i = Se(o);
    return new _e().add({
      keys: [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !1, isWritable: !0 },
        { pubkey: yt, isSigner: !1, isWritable: !1 },
        { pubkey: vs, isSigner: !1, isWritable: !1 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: i,
    });
  }
  static withdraw(t) {
    const { stakePubkey: s, authorizedPubkey: n, toPubkey: r, lamports: o, custodianPubkey: i } = t,
      u = Ke.Withdraw,
      l = Se(u, { lamports: o }),
      d = [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !1, isWritable: !0 },
        { pubkey: yt, isSigner: !1, isWritable: !1 },
        { pubkey: vs, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return (
      i && d.push({ pubkey: i, isSigner: !1, isWritable: !1 }),
      new _e().add({ keys: d, programId: this.programId, data: l })
    );
  }
  static deactivate(t) {
    const { stakePubkey: s, authorizedPubkey: n } = t,
      r = Ke.Deactivate,
      o = Se(r);
    return new _e().add({
      keys: [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: yt, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: o,
    });
  }
}
Gs.programId = new W('Stake11111111111111111111111111111111111111');
Gs.space = 200;
class xo {
  constructor(t, s, n, r) {
    (this.nodePubkey = void 0),
      (this.authorizedVoter = void 0),
      (this.authorizedWithdrawer = void 0),
      (this.commission = void 0),
      (this.nodePubkey = t),
      (this.authorizedVoter = s),
      (this.authorizedWithdrawer = n),
      (this.commission = r);
  }
}
class dl {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const n = oe('instruction').decode(t.data);
    let r;
    for (const [o, i] of Object.entries(_t))
      if (i.index == n) {
        r = o;
        break;
      }
    if (!r) throw new Error('Instruction type incorrect; not a VoteInstruction');
    return r;
  }
  static decodeInitializeAccount(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 4);
    const { voteInit: s } = Ee(_t.InitializeAccount, t.data);
    return {
      votePubkey: t.keys[0].pubkey,
      nodePubkey: t.keys[3].pubkey,
      voteInit: new xo(
        new W(s.nodePubkey),
        new W(s.authorizedVoter),
        new W(s.authorizedWithdrawer),
        s.commission
      ),
    };
  }
  static decodeAuthorize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { newAuthorized: s, voteAuthorizationType: n } = Ee(_t.Authorize, t.data);
    return {
      votePubkey: t.keys[0].pubkey,
      authorizedPubkey: t.keys[2].pubkey,
      newAuthorizedPubkey: new W(s),
      voteAuthorizationType: { index: n },
    };
  }
  static decodeAuthorizeWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey: s,
        currentAuthorityDerivedKeySeed: n,
        newAuthorized: r,
        voteAuthorizationType: o,
      },
    } = Ee(_t.AuthorizeWithSeed, t.data);
    return {
      currentAuthorityDerivedKeyBasePubkey: t.keys[2].pubkey,
      currentAuthorityDerivedKeyOwnerPubkey: new W(s),
      currentAuthorityDerivedKeySeed: n,
      newAuthorizedPubkey: new W(r),
      voteAuthorizationType: { index: o },
      votePubkey: t.keys[0].pubkey,
    };
  }
  static decodeWithdraw(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { lamports: s } = Ee(_t.Withdraw, t.data);
    return {
      votePubkey: t.keys[0].pubkey,
      authorizedWithdrawerPubkey: t.keys[2].pubkey,
      lamports: s,
      toPubkey: t.keys[1].pubkey,
    };
  }
  static checkProgramId(t) {
    if (!t.equals(ss.programId))
      throw new Error('invalid instruction; programId is not VoteProgram');
  }
  static checkKeyLength(t, s) {
    if (t.length < s)
      throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${s}`);
  }
}
const _t = Object.freeze({
    InitializeAccount: { index: 0, layout: te([oe('instruction'), ya()]) },
    Authorize: {
      index: 1,
      layout: te([oe('instruction'), Ae('newAuthorized'), oe('voteAuthorizationType')]),
    },
    Withdraw: { index: 3, layout: te([oe('instruction'), at('lamports')]) },
    AuthorizeWithSeed: { index: 10, layout: te([oe('instruction'), ga()]) },
  }),
  pl = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
class ss {
  constructor() {}
  static initializeAccount(t) {
    const { votePubkey: s, nodePubkey: n, voteInit: r } = t,
      o = _t.InitializeAccount,
      i = Se(o, {
        voteInit: {
          nodePubkey: be(r.nodePubkey.toBuffer()),
          authorizedVoter: be(r.authorizedVoter.toBuffer()),
          authorizedWithdrawer: be(r.authorizedWithdrawer.toBuffer()),
          commission: r.commission,
        },
      }),
      u = {
        keys: [
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: Qt, isSigner: !1, isWritable: !1 },
          { pubkey: yt, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: i,
      };
    return new Te(u);
  }
  static createAccount(t) {
    const s = new _e();
    return (
      s.add(
        qe.createAccount({
          fromPubkey: t.fromPubkey,
          newAccountPubkey: t.votePubkey,
          lamports: t.lamports,
          space: this.space,
          programId: this.programId,
        })
      ),
      s.add(
        this.initializeAccount({
          votePubkey: t.votePubkey,
          nodePubkey: t.voteInit.nodePubkey,
          voteInit: t.voteInit,
        })
      )
    );
  }
  static authorize(t) {
    const {
        votePubkey: s,
        authorizedPubkey: n,
        newAuthorizedPubkey: r,
        voteAuthorizationType: o,
      } = t,
      i = _t.Authorize,
      u = Se(i, { newAuthorized: be(r.toBuffer()), voteAuthorizationType: o.index }),
      l = [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: yt, isSigner: !1, isWritable: !1 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return new _e().add({ keys: l, programId: this.programId, data: u });
  }
  static authorizeWithSeed(t) {
    const {
        currentAuthorityDerivedKeyBasePubkey: s,
        currentAuthorityDerivedKeyOwnerPubkey: n,
        currentAuthorityDerivedKeySeed: r,
        newAuthorizedPubkey: o,
        voteAuthorizationType: i,
        votePubkey: u,
      } = t,
      l = _t.AuthorizeWithSeed,
      d = Se(l, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: be(n.toBuffer()),
          currentAuthorityDerivedKeySeed: r,
          newAuthorized: be(o.toBuffer()),
          voteAuthorizationType: i.index,
        },
      }),
      h = [
        { pubkey: u, isSigner: !1, isWritable: !0 },
        { pubkey: yt, isSigner: !1, isWritable: !1 },
        { pubkey: s, isSigner: !0, isWritable: !1 },
      ];
    return new _e().add({ keys: h, programId: this.programId, data: d });
  }
  static withdraw(t) {
    const { votePubkey: s, authorizedWithdrawerPubkey: n, lamports: r, toPubkey: o } = t,
      i = _t.Withdraw,
      u = Se(i, { lamports: r }),
      l = [
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: o, isSigner: !1, isWritable: !0 },
        { pubkey: n, isSigner: !0, isWritable: !1 },
      ];
    return new _e().add({ keys: l, programId: this.programId, data: u });
  }
  static safeWithdraw(t, s, n) {
    if (t.lamports > s - n)
      throw new Error('Withdraw will leave vote account with insuffcient funds.');
    return ss.withdraw(t);
  }
}
ss.programId = new W('Vote111111111111111111111111111111111111111');
ss.space = 3731;
const Ao = new W('Va1idator1nfo111111111111111111111111111111'),
  hl = $({ name: j(), website: he(j()), details: he(j()), keybaseUsername: he(j()) });
class $n {
  constructor(t, s) {
    (this.key = void 0), (this.info = void 0), (this.key = t), (this.info = s);
  }
  static fromConfigData(t) {
    let s = [...t];
    if (Je(s) !== 2) return null;
    const r = [];
    for (let o = 0; o < 2; o++) {
      const i = new W(Ze(s, 0, Qe)),
        u = gt(s) === 1;
      r.push({ publicKey: i, isSigner: u });
    }
    if (r[0].publicKey.equals(Ao) && r[1].isSigner) {
      const o = Kt().decode(de.from(s)),
        i = JSON.parse(o);
      return Ho(i, hl), new $n(r[1].publicKey, i);
    }
    return null;
  }
}
const fl = new W('Vote111111111111111111111111111111111111111'),
  yl = te([
    Ae('nodePubkey'),
    Ae('authorizedWithdrawer'),
    xe('commission'),
    je(),
    Ge(te([je('slot'), oe('confirmationCount')]), $t(oe(), -8), 'votes'),
    xe('rootSlotValid'),
    je('rootSlot'),
    je(),
    Ge(te([je('epoch'), Ae('authorizedVoter')]), $t(oe(), -8), 'authorizedVoters'),
    te(
      [
        Ge(
          te([Ae('authorizedPubkey'), je('epochOfLastAuthorizedSwitch'), je('targetEpoch')]),
          32,
          'buf'
        ),
        je('idx'),
        xe('isEmpty'),
      ],
      'priorVoters'
    ),
    je(),
    Ge(te([je('epoch'), je('credits'), je('prevCredits')]), $t(oe(), -8), 'epochCredits'),
    te([je('slot'), je('timestamp')], 'lastTimestamp'),
  ]);
class Wn {
  constructor(t) {
    (this.nodePubkey = void 0),
      (this.authorizedWithdrawer = void 0),
      (this.commission = void 0),
      (this.rootSlot = void 0),
      (this.votes = void 0),
      (this.authorizedVoters = void 0),
      (this.priorVoters = void 0),
      (this.epochCredits = void 0),
      (this.lastTimestamp = void 0),
      (this.nodePubkey = t.nodePubkey),
      (this.authorizedWithdrawer = t.authorizedWithdrawer),
      (this.commission = t.commission),
      (this.rootSlot = t.rootSlot),
      (this.votes = t.votes),
      (this.authorizedVoters = t.authorizedVoters),
      (this.priorVoters = t.priorVoters),
      (this.epochCredits = t.epochCredits),
      (this.lastTimestamp = t.lastTimestamp);
  }
  static fromAccountData(t) {
    const n = yl.decode(be(t), 4);
    let r = n.rootSlot;
    return (
      n.rootSlotValid || (r = null),
      new Wn({
        nodePubkey: new W(n.nodePubkey),
        authorizedWithdrawer: new W(n.authorizedWithdrawer),
        commission: n.commission,
        votes: n.votes,
        rootSlot: r,
        authorizedVoters: n.authorizedVoters.map(gl),
        priorVoters: ml(n.priorVoters),
        epochCredits: n.epochCredits,
        lastTimestamp: n.lastTimestamp,
      })
    );
  }
}
function gl({ authorizedVoter: e, epoch: t }) {
  return { epoch: t, authorizedVoter: new W(e) };
}
function wr({ authorizedPubkey: e, epochOfLastAuthorizedSwitch: t, targetEpoch: s }) {
  return { authorizedPubkey: new W(e), epochOfLastAuthorizedSwitch: t, targetEpoch: s };
}
function ml({ buf: e, idx: t, isEmpty: s }) {
  return s ? [] : [...e.slice(t + 1).map(wr), ...e.slice(0, t).map(wr)];
}
const xr = {
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
function bl(e, t) {
  const s = t === !1 ? 'http' : 'https';
  if (!e) return xr[s].devnet;
  const n = xr[s][e];
  if (!n) throw new Error(`Unknown ${s} cluster: ${e}`);
  return n;
}
async function wl(e, t, s, n) {
  let r, o;
  (s && Object.prototype.hasOwnProperty.call(s, 'lastValidBlockHeight')) ||
  (s && Object.prototype.hasOwnProperty.call(s, 'nonceValue'))
    ? ((r = s), (o = n))
    : (o = s);
  const i = o && {
      skipPreflight: o.skipPreflight,
      preflightCommitment: o.preflightCommitment || o.commitment,
      minContextSlot: o.minContextSlot,
    },
    u = await e.sendRawTransaction(t, i),
    l = o && o.commitment,
    h = (await (r ? e.confirmTransaction(r, l) : e.confirmTransaction(u, l))).value;
  if (h.err) throw new Error(`Raw transaction ${u} failed (${JSON.stringify(h)})`);
  return u;
}
const xl = 1e9,
  Al = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Account: ua,
        AddressLookupTableAccount: bn,
        AddressLookupTableInstruction: rl,
        AddressLookupTableProgram: Kn,
        Authorized: wo,
        BLOCKHASH_CACHE_TIMEOUT_MS: ao,
        BPF_LOADER_DEPRECATED_PROGRAM_ID: da,
        BPF_LOADER_PROGRAM_ID: Ta,
        BpfLoader: Ra,
        COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: mt,
        ComputeBudgetInstruction: ol,
        ComputeBudgetProgram: zn,
        Connection: nl,
        Ed25519Program: Ws,
        Enum: ca,
        EpochSchedule: oo,
        FeeCalculatorLayout: no,
        Keypair: Jt,
        LAMPORTS_PER_SOL: xl,
        LOOKUP_TABLE_INSTRUCTION_LAYOUTS: Et,
        Loader: Gt,
        Lockup: ms,
        MAX_SEED_LENGTH: eo,
        Message: pt,
        MessageAccountKeys: ys,
        MessageV0: Wt,
        NONCE_ACCOUNT_LENGTH: gn,
        NonceAccount: Ks,
        PACKET_DATA_SIZE: Ot,
        PUBLIC_KEY_LENGTH: Qe,
        PublicKey: W,
        SIGNATURE_LENGTH_IN_BYTES: fs,
        SOLANA_SCHEMA: ls,
        STAKE_CONFIG_ID: bo,
        STAKE_INSTRUCTION_LAYOUTS: Ke,
        SYSTEM_INSTRUCTION_LAYOUTS: Be,
        SYSVAR_CLOCK_PUBKEY: yt,
        SYSVAR_EPOCH_SCHEDULE_PUBKEY: ba,
        SYSVAR_INSTRUCTIONS_PUBKEY: wa,
        SYSVAR_RECENT_BLOCKHASHES_PUBKEY: Bs,
        SYSVAR_RENT_PUBKEY: Qt,
        SYSVAR_REWARDS_PUBKEY: xa,
        SYSVAR_SLOT_HASHES_PUBKEY: Aa,
        SYSVAR_SLOT_HISTORY_PUBKEY: ka,
        SYSVAR_STAKE_HISTORY_PUBKEY: vs,
        Secp256k1Program: Zt,
        SendTransactionError: mn,
        SolanaJSONRPCError: ce,
        SolanaJSONRPCErrorCode: Na,
        StakeAuthorizationLayout: ul,
        StakeInstruction: ll,
        StakeProgram: Gs,
        Struct: Ln,
        SystemInstruction: Ea,
        SystemProgram: qe,
        Transaction: _e,
        TransactionExpiredBlockheightExceededError: Pn,
        TransactionExpiredNonceInvalidError: Yt,
        TransactionExpiredTimeoutError: Nn,
        TransactionInstruction: Te,
        TransactionMessage: Dn,
        get TransactionStatus() {
          return lt;
        },
        VALIDATOR_INFO_KEY: Ao,
        VERSION_PREFIX_MASK: Hs,
        VOTE_PROGRAM_ID: fl,
        ValidatorInfo: $n,
        VersionedMessage: On,
        VersionedTransaction: Un,
        VoteAccount: Wn,
        VoteAuthorizationLayout: pl,
        VoteInit: xo,
        VoteInstruction: dl,
        VoteProgram: ss,
        clusterApiUrl: bl,
        sendAndConfirmRawTransaction: wl,
        sendAndConfirmTransaction: Cs,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  kl = new W('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
  Ru = new W('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb');
new W('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
new W('So11111111111111111111111111111111111111112');
new W('9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP');
class As extends Error {
  constructor(t) {
    super(t);
  }
}
class ko extends As {
  constructor() {
    super(...arguments), (this.name = 'TokenTransferHookAccountNotFound');
  }
}
class wt extends As {
  constructor() {
    super(...arguments), (this.name = 'TokenTransferHookInvalidSeed');
  }
}
class So extends As {
  constructor() {
    super(...arguments), (this.name = 'TokenTransferHookAccountDataNotFound');
  }
}
class Gn extends As {
  constructor() {
    super(...arguments), (this.name = 'TokenTransferHookInvalidPubkeyData');
  }
}
class Io extends As {
  constructor() {
    super(...arguments), (this.name = 'TokenTransferHookPubkeyDataTooSmall');
  }
}
var kn;
(function (e) {
  (e[(e.InitializeMint = 0)] = 'InitializeMint'),
    (e[(e.InitializeAccount = 1)] = 'InitializeAccount'),
    (e[(e.InitializeMultisig = 2)] = 'InitializeMultisig'),
    (e[(e.Transfer = 3)] = 'Transfer'),
    (e[(e.Approve = 4)] = 'Approve'),
    (e[(e.Revoke = 5)] = 'Revoke'),
    (e[(e.SetAuthority = 6)] = 'SetAuthority'),
    (e[(e.MintTo = 7)] = 'MintTo'),
    (e[(e.Burn = 8)] = 'Burn'),
    (e[(e.CloseAccount = 9)] = 'CloseAccount'),
    (e[(e.FreezeAccount = 10)] = 'FreezeAccount'),
    (e[(e.ThawAccount = 11)] = 'ThawAccount'),
    (e[(e.TransferChecked = 12)] = 'TransferChecked'),
    (e[(e.ApproveChecked = 13)] = 'ApproveChecked'),
    (e[(e.MintToChecked = 14)] = 'MintToChecked'),
    (e[(e.BurnChecked = 15)] = 'BurnChecked'),
    (e[(e.InitializeAccount2 = 16)] = 'InitializeAccount2'),
    (e[(e.SyncNative = 17)] = 'SyncNative'),
    (e[(e.InitializeAccount3 = 18)] = 'InitializeAccount3'),
    (e[(e.InitializeMultisig2 = 19)] = 'InitializeMultisig2'),
    (e[(e.InitializeMint2 = 20)] = 'InitializeMint2'),
    (e[(e.GetAccountDataSize = 21)] = 'GetAccountDataSize'),
    (e[(e.InitializeImmutableOwner = 22)] = 'InitializeImmutableOwner'),
    (e[(e.AmountToUiAmount = 23)] = 'AmountToUiAmount'),
    (e[(e.UiAmountToAmount = 24)] = 'UiAmountToAmount'),
    (e[(e.InitializeMintCloseAuthority = 25)] = 'InitializeMintCloseAuthority'),
    (e[(e.TransferFeeExtension = 26)] = 'TransferFeeExtension'),
    (e[(e.ConfidentialTransferExtension = 27)] = 'ConfidentialTransferExtension'),
    (e[(e.DefaultAccountStateExtension = 28)] = 'DefaultAccountStateExtension'),
    (e[(e.Reallocate = 29)] = 'Reallocate'),
    (e[(e.MemoTransferExtension = 30)] = 'MemoTransferExtension'),
    (e[(e.CreateNativeMint = 31)] = 'CreateNativeMint'),
    (e[(e.InitializeNonTransferableMint = 32)] = 'InitializeNonTransferableMint'),
    (e[(e.InterestBearingMintExtension = 33)] = 'InterestBearingMintExtension'),
    (e[(e.CpiGuardExtension = 34)] = 'CpiGuardExtension'),
    (e[(e.InitializePermanentDelegate = 35)] = 'InitializePermanentDelegate'),
    (e[(e.TransferHookExtension = 36)] = 'TransferHookExtension'),
    (e[(e.MetadataPointerExtension = 39)] = 'MetadataPointerExtension'),
    (e[(e.GroupPointerExtension = 40)] = 'GroupPointerExtension'),
    (e[(e.GroupMemberPointerExtension = 41)] = 'GroupMemberPointerExtension'),
    (e[(e.ScaledUiAmountExtension = 43)] = 'ScaledUiAmountExtension'),
    (e[(e.PausableExtension = 44)] = 'PausableExtension');
})(kn || (kn = {}));
function Sl(e, t, s) {
  if (s.length) {
    e.push({ pubkey: t, isSigner: !1, isWritable: !1 });
    for (const n of s)
      e.push({ pubkey: n instanceof W ? n : n.publicKey, isSigner: !0, isWritable: !1 });
  } else e.push({ pubkey: t, isSigner: !0, isWritable: !1 });
  return e;
}
const Ar = te([xe('instruction'), Lr('amount'), xe('decimals')]);
function Bu(e, t, s, n, r, o, i = [], u = kl) {
  const l = Sl(
      [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: t, isSigner: !1, isWritable: !1 },
        { pubkey: s, isSigner: !1, isWritable: !0 },
      ],
      n,
      i
    ),
    d = ue.alloc(Ar.span);
  return (
    Ar.encode({ instruction: kn.TransferChecked, amount: BigInt(r), decimals: o }, d),
    new Te({ keys: l, programId: u, data: d })
  );
}
const qs = 1,
  Il = 1,
  El = 1,
  _l = 1,
  Tl = 1,
  Rl = 1,
  Bl = 1,
  vl = 1;
function Cl(e) {
  if (e.length < 1) throw new wt();
  const [t, ...s] = e;
  if (s.length < t) throw new wt();
  return { data: ue.from(s.slice(0, t)), packedLength: qs + Il + t };
}
function Ll(e, t) {
  if (e.length < 2) throw new wt();
  const [s, n] = e;
  if (t.length < n + s) throw new wt();
  return { data: t.subarray(s, s + n), packedLength: qs + El + _l };
}
function Pl(e, t) {
  if (e.length < 1) throw new wt();
  const [s] = e;
  if (t.length <= s) throw new wt();
  return { data: t[s].pubkey.toBuffer(), packedLength: qs + Tl };
}
async function Nl(e, t, s) {
  if (e.length < 3) throw new wt();
  const [n, r, o] = e;
  if (t.length <= n) throw new wt();
  const i = await s.getAccountInfo(t[n].pubkey);
  if (i == null) throw new So();
  if (i.data.length < r + o) throw new wt();
  return { data: i.data.subarray(r, r + o), packedLength: qs + Rl + Bl + vl };
}
async function Ol(e, t, s, n) {
  const [r, ...o] = e,
    i = new Uint8Array(o);
  switch (r) {
    case 0:
      return null;
    case 1:
      return Cl(i);
    case 2:
      return Ll(i, s);
    case 3:
      return Pl(i, t);
    case 4:
      return Nl(i, t, n);
    default:
      throw new wt();
  }
}
async function Dl(e, t, s, n) {
  const r = [];
  let o = 0;
  for (; o < 32; ) {
    const i = await Ol(e.slice(o), t, s, n);
    if (i == null) break;
    r.push(i.data), (o += i.packedLength);
  }
  return r;
}
async function Ul(e, t, s, n) {
  const [r, ...o] = e,
    i = new Uint8Array(o);
  switch (r) {
    case 1:
      return Ml(i, s);
    case 2:
      return Hl(i, t, n);
    default:
      throw new Gn();
  }
}
function Ml(e, t) {
  if (e.length < 1) throw new Gn();
  const s = e[0];
  if (t.length < s + Qe) throw new Io();
  return new W(t.subarray(s, s + Qe));
}
async function Hl(e, t, s) {
  if (e.length < 2) throw new Gn();
  const [n, r] = e;
  if (t.length <= n) throw new So();
  const o = await s.getAccountInfo(t[n].pubkey);
  if (o == null) throw new ko();
  if (o.data.length < r + Qe) throw new Io();
  return new W(o.data.subarray(r, r + Qe));
}
const Fl = te([hs('authority'), hs('programId')]);
Fl.span;
const Kl = te([dn('transferring')]);
Kl.span;
function zl(e, t) {
  const s = [ue.from('extra-account-metas'), e.toBuffer()];
  return W.findProgramAddressSync(s, t)[0];
}
const kr = te([xe('discriminator'), Ce(32, 'addressConfig'), dn('isSigner'), dn('isWritable')]),
  $l = te([oe('count'), Ge(kr, Ko(kr.span), 'extraAccounts')]),
  Wl = te([Lr('instructionDiscriminator'), oe('length'), $l.replicate('extraAccountsList')]);
function Gl(e) {
  const t = Wl.decode(e.data).extraAccountsList;
  return t.extraAccounts.slice(0, t.count);
}
async function ql(e, t, s, n, r) {
  if (t.discriminator === 0)
    return { pubkey: new W(t.addressConfig), isSigner: t.isSigner, isWritable: t.isWritable };
  if (t.discriminator === 2)
    return {
      pubkey: await Ul(t.addressConfig, s, n, e),
      isSigner: t.isSigner,
      isWritable: t.isWritable,
    };
  let o = W.default;
  if (t.discriminator === 1) o = r;
  else {
    const l = t.discriminator - 128;
    if (s.length <= l) throw new ko();
    o = s[l].pubkey;
  }
  const i = await Dl(t.addressConfig, s, n, e);
  return {
    pubkey: W.findProgramAddressSync(i, o)[0],
    isSigner: t.isSigner,
    isWritable: t.isWritable,
  };
}
var Sr;
(function (e) {
  (e[(e.Initialize = 0)] = 'Initialize'), (e[(e.Update = 1)] = 'Update');
})(Sr || (Sr = {}));
te([
  xe('instruction'),
  xe('transferHookInstruction'),
  hs('authority'),
  hs('transferHookProgramId'),
]);
te([xe('instruction'), xe('transferHookInstruction'), hs('transferHookProgramId')]);
function jl(e, t) {
  const s = t
    .filter((n) => n.pubkey.equals(e.pubkey))
    .reduce(
      (n, r) =>
        n
          ? { isSigner: n.isSigner || r.isSigner, isWritable: n.isWritable || r.isWritable }
          : { isSigner: r.isSigner, isWritable: r.isWritable },
      void 0
    );
  if (s) {
    const { isSigner: n, isWritable: r } = s;
    !n && n !== e.isSigner && (e.isSigner = !1), !r && r !== e.isWritable && (e.isWritable = !1);
  }
  return e;
}
function Vl(e, t, s, n, r, o, i) {
  const u = [t, s, n, r, o].map((d) => ({ pubkey: d, isSigner: !1, isWritable: !1 })),
    l = ue.alloc(16);
  return (
    l.set(ue.from([105, 37, 101, 197, 75, 251, 102, 26]), 0),
    l.writeBigUInt64LE(BigInt(i), 8),
    new Te({ keys: u, programId: e, data: l })
  );
}
async function vu(e, t, s, n, r, o, i, u, l) {
  const d = zl(r, s),
    h = await e.getAccountInfo(d, l);
  if (h == null) return t;
  const y = Gl(h);
  if (![n, r, o, i].every((w) => t.keys.some((p) => p.pubkey.equals(w))))
    throw new Error('Missing required account in instruction');
  const b = Vl(s, n, r, o, i, d, BigInt(u));
  for (const w of y) b.keys.push(jl(await ql(e, w, b.keys, b.data, b.programId), b.keys));
  t.keys.push(...b.keys.slice(5)),
    t.keys.push({ pubkey: s, isSigner: !1, isWritable: !1 }),
    t.keys.push({ pubkey: d, isSigner: !1, isWritable: !1 });
}
const ks = Pr(Al);
var Sn = ((e) => (
    (e[(e.ALT = 1)] = 'ALT'),
    (e[(e.CAT = 2)] = 'CAT'),
    (e[(e.REP = 3)] = 'REP'),
    (e[(e.RNM = 4)] = 'RNM'),
    (e[(e.TRG = 5)] = 'TRG'),
    (e[(e.TBS = 6)] = 'TBS'),
    (e[(e.TLS = 7)] = 'TLS'),
    (e[(e.UDT = 11)] = 'UDT'),
    (e[(e.AND = 12)] = 'AND'),
    (e[(e.NOT = 13)] = 'NOT'),
    (e[(e.BKR = 14)] = 'BKR'),
    (e[(e.BKA = 15)] = 'BKA'),
    (e[(e.BKN = 16)] = 'BKN'),
    (e[(e.ABG = 17)] = 'ABG'),
    (e[(e.AEN = 18)] = 'AEN'),
    (e[(e.ACTIVE = 100)] = 'ACTIVE'),
    (e[(e.MATCH = 101)] = 'MATCH'),
    (e[(e.EMPTY = 102)] = 'EMPTY'),
    (e[(e.NOMATCH = 103)] = 'NOMATCH'),
    (e[(e.SEM_PRE = 200)] = 'SEM_PRE'),
    (e[(e.SEM_POST = 201)] = 'SEM_POST'),
    (e[(e.SEM_OK = 300)] = 'SEM_OK'),
    (e[(e.SEM_SKIP = 301)] = 'SEM_SKIP'),
    (e[(e.ATTR_N = 400)] = 'ATTR_N'),
    (e[(e.ATTR_R = 401)] = 'ATTR_R'),
    (e[(e.ATTR_MR = 402)] = 'ATTR_MR'),
    (e[(e.LOOKAROUND_NONE = 500)] = 'LOOKAROUND_NONE'),
    (e[(e.LOOKAROUND_AHEAD = 501)] = 'LOOKAROUND_AHEAD'),
    (e[(e.LOOKAROUND_BEHIND = 502)] = 'LOOKAROUND_BEHIND'),
    (e[(e.BKR_MODE_UM = 601)] = 'BKR_MODE_UM'),
    (e[(e.BKR_MODE_PM = 602)] = 'BKR_MODE_PM'),
    (e[(e.BKR_MODE_CS = 603)] = 'BKR_MODE_CS'),
    (e[(e.BKR_MODE_CI = 604)] = 'BKR_MODE_CI'),
    e
  ))(Sn || {}),
  zt = ((e) => (
    (e.Ethereum = 'sign-in-with-ethereum'),
    (e.Solana = 'sign-in-with-solana'),
    (e.X = 'sign-in-with-x'),
    e
  ))(zt || {}),
  Fe = ((e) => (
    (e.ADDRESS_MISMATCH = 'ADDRESS_MISMATCH'),
    (e.DOMAIN_MISMATCH = 'DOMAIN_MISMATCH'),
    (e.URI_MISMATCH = 'URI_MISMATCH'),
    (e.CHAIN_ID_MISMATCH = 'CHAIN_ID_MISMATCH'),
    (e.ISSUED_TOO_FAR_IN_THE_PAST = 'ISSUED_TOO_FAR_IN_THE_PAST'),
    (e.ISSUED_TOO_FAR_IN_THE_FUTURE = 'ISSUED_TOO_FAR_IN_THE_FUTURE'),
    (e.EXPIRED = 'EXPIRED'),
    (e.EXPIRES_BEFORE_ISSUANCE = 'EXPIRES_BEFORE_ISSUANCE'),
    (e.VALID_AFTER_EXPIRATION = 'VALID_AFTER_EXPIRATION'),
    e
  ))(Fe || {});
function Cu(e, t) {
  const { expectedAddress: s, expectedURL: n, expectedChainId: r, issuedAtThreshold: o } = t,
    i = [],
    u = Date.now();
  if (
    (e.address !== s && i.push(Fe.ADDRESS_MISMATCH),
    e.domain !== n.host && i.push(Fe.DOMAIN_MISMATCH),
    e.uri && e.uri.origin !== n.origin && i.push(Fe.URI_MISMATCH),
    e.chainId &&
      ((e.type !== zt.Solana && e.chainId !== r) ||
        (e.type === zt.Solana && e.chainId.replace(/solana:/g, '') !== r)) &&
      i.push(Fe.CHAIN_ID_MISMATCH),
    e.issuedAt)
  ) {
    const l = e.issuedAt.getTime();
    Math.abs(l - u) > o &&
      (l < u ? i.push(Fe.ISSUED_TOO_FAR_IN_THE_PAST) : i.push(Fe.ISSUED_TOO_FAR_IN_THE_FUTURE));
  }
  if (e.expirationTime) {
    const l = e.expirationTime.getTime();
    l <= u && i.push(Fe.EXPIRED),
      e.issuedAt && l < e.issuedAt.getTime() && i.push(Fe.EXPIRES_BEFORE_ISSUANCE),
      e.notBefore && e.notBefore.getTime() > l && i.push(Fe.VALID_AFTER_EXPIRATION);
  }
  return i;
}
(function e(t, s, n) {
  function r(u, l) {
    if (!s[u]) {
      if (!t[u]) {
        var d = typeof Es == 'function' && Es;
        if (!l && d) return d(u, !0);
        if (o) return o(u, !0);
        var h = new Error("Cannot find module '" + u + "'");
        throw ((h.code = 'MODULE_NOT_FOUND'), h);
      }
      var y = (s[u] = { exports: {} });
      t[u][0].call(
        y.exports,
        function (b) {
          return r(t[u][1][b] || b);
        },
        y,
        y.exports,
        e,
        t,
        s,
        n
      );
    }
    return s[u].exports;
  }
  for (var o = typeof Es == 'function' && Es, i = 0; i < n.length; i++) r(n[i]);
  return r;
})(
  {
    1: [
      function (e, t, s) {
        (s.byteLength = function (y) {
          var b = d(y),
            w = b[0],
            p = b[1];
          return (3 * (w + p)) / 4 - p;
        }),
          (s.toByteArray = function (y) {
            var b,
              w,
              p = d(y),
              f = p[0],
              m = p[1],
              x = new o(
                (function (E, O, U) {
                  return (3 * (O + U)) / 4 - U;
                })(0, f, m)
              ),
              I = 0,
              _ = m > 0 ? f - 4 : f;
            for (w = 0; w < _; w += 4)
              (b =
                (r[y.charCodeAt(w)] << 18) |
                (r[y.charCodeAt(w + 1)] << 12) |
                (r[y.charCodeAt(w + 2)] << 6) |
                r[y.charCodeAt(w + 3)]),
                (x[I++] = (b >> 16) & 255),
                (x[I++] = (b >> 8) & 255),
                (x[I++] = 255 & b);
            return (
              m === 2 &&
                ((b = (r[y.charCodeAt(w)] << 2) | (r[y.charCodeAt(w + 1)] >> 4)),
                (x[I++] = 255 & b)),
              m === 1 &&
                ((b =
                  (r[y.charCodeAt(w)] << 10) |
                  (r[y.charCodeAt(w + 1)] << 4) |
                  (r[y.charCodeAt(w + 2)] >> 2)),
                (x[I++] = (b >> 8) & 255),
                (x[I++] = 255 & b)),
              x
            );
          }),
          (s.fromByteArray = function (y) {
            for (var b, w = y.length, p = w % 3, f = [], m = 16383, x = 0, I = w - p; x < I; x += m)
              f.push(h(y, x, x + m > I ? I : x + m));
            return (
              p === 1
                ? ((b = y[w - 1]), f.push(n[b >> 2] + n[(b << 4) & 63] + '=='))
                : p === 2 &&
                  ((b = (y[w - 2] << 8) + y[w - 1]),
                  f.push(n[b >> 10] + n[(b >> 4) & 63] + n[(b << 2) & 63] + '=')),
              f.join('')
            );
          });
        for (
          var n = [],
            r = [],
            o = typeof Uint8Array < 'u' ? Uint8Array : Array,
            i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            u = 0,
            l = i.length;
          u < l;
          ++u
        )
          (n[u] = i[u]), (r[i.charCodeAt(u)] = u);
        function d(y) {
          var b = y.length;
          if (b % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
          var w = y.indexOf('=');
          return w === -1 && (w = b), [w, w === b ? 0 : 4 - (w % 4)];
        }
        function h(y, b, w) {
          for (var p, f, m = [], x = b; x < w; x += 3)
            (p = ((y[x] << 16) & 16711680) + ((y[x + 1] << 8) & 65280) + (255 & y[x + 2])),
              m.push(n[((f = p) >> 18) & 63] + n[(f >> 12) & 63] + n[(f >> 6) & 63] + n[63 & f]);
          return m.join('');
        }
        (r[45] = 62), (r[95] = 63);
      },
      {},
    ],
    2: [
      function (e, t, s) {
        (function (n) {
          (function () {
            var r = e('base64-js'),
              o = e('ieee754');
            (s.Buffer = l),
              (s.SlowBuffer = function (a) {
                return +a != a && (a = 0), l.alloc(+a);
              }),
              (s.INSPECT_MAX_BYTES = 50);
            var i = 2147483647;
            function u(a) {
              if (a > i) throw new RangeError('The value "' + a + '" is invalid for option "size"');
              var c = new Uint8Array(a);
              return (c.__proto__ = l.prototype), c;
            }
            function l(a, c, g) {
              if (typeof a == 'number') {
                if (typeof c == 'string')
                  throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                  );
                return y(a);
              }
              return d(a, c, g);
            }
            function d(a, c, g) {
              if (typeof a == 'string')
                return (function (k, A) {
                  if (((typeof A == 'string' && A !== '') || (A = 'utf8'), !l.isEncoding(A)))
                    throw new TypeError('Unknown encoding: ' + A);
                  var v = 0 | p(k, A),
                    M = u(v),
                    N = M.write(k, A);
                  return N !== v && (M = M.slice(0, N)), M;
                })(a, c);
              if (ArrayBuffer.isView(a)) return b(a);
              if (a == null)
                throw TypeError(
                  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                    typeof a
                );
              if (ae(a, ArrayBuffer) || (a && ae(a.buffer, ArrayBuffer)))
                return (function (k, A, v) {
                  if (A < 0 || k.byteLength < A)
                    throw new RangeError('"offset" is outside of buffer bounds');
                  if (k.byteLength < A + (v || 0))
                    throw new RangeError('"length" is outside of buffer bounds');
                  var M;
                  return (
                    (M =
                      A === void 0 && v === void 0
                        ? new Uint8Array(k)
                        : v === void 0
                          ? new Uint8Array(k, A)
                          : new Uint8Array(k, A, v)),
                    (M.__proto__ = l.prototype),
                    M
                  );
                })(a, c, g);
              if (typeof a == 'number')
                throw new TypeError(
                  'The "value" argument must not be of type number. Received type number'
                );
              var S = a.valueOf && a.valueOf();
              if (S != null && S !== a) return l.from(S, c, g);
              var T = (function (k) {
                if (l.isBuffer(k)) {
                  var A = 0 | w(k.length),
                    v = u(A);
                  return v.length === 0 || k.copy(v, 0, 0, A), v;
                }
                if (k.length !== void 0)
                  return typeof k.length != 'number' || P(k.length) ? u(0) : b(k);
                if (k.type === 'Buffer' && Array.isArray(k.data)) return b(k.data);
              })(a);
              if (T) return T;
              if (
                typeof Symbol < 'u' &&
                Symbol.toPrimitive != null &&
                typeof a[Symbol.toPrimitive] == 'function'
              )
                return l.from(a[Symbol.toPrimitive]('string'), c, g);
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                  typeof a
              );
            }
            function h(a) {
              if (typeof a != 'number')
                throw new TypeError('"size" argument must be of type number');
              if (a < 0) throw new RangeError('The value "' + a + '" is invalid for option "size"');
            }
            function y(a) {
              return h(a), u(a < 0 ? 0 : 0 | w(a));
            }
            function b(a) {
              for (var c = a.length < 0 ? 0 : 0 | w(a.length), g = u(c), S = 0; S < c; S += 1)
                g[S] = 255 & a[S];
              return g;
            }
            function w(a) {
              if (a >= i)
                throw new RangeError(
                  'Attempt to allocate Buffer larger than maximum size: 0x' +
                    i.toString(16) +
                    ' bytes'
                );
              return 0 | a;
            }
            function p(a, c) {
              if (l.isBuffer(a)) return a.length;
              if (ArrayBuffer.isView(a) || ae(a, ArrayBuffer)) return a.byteLength;
              if (typeof a != 'string')
                throw new TypeError(
                  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                    typeof a
                );
              var g = a.length,
                S = arguments.length > 2 && arguments[2] === !0;
              if (!S && g === 0) return 0;
              for (var T = !1; ; )
                switch (c) {
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return g;
                  case 'utf8':
                  case 'utf-8':
                    return re(a).length;
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 2 * g;
                  case 'hex':
                    return g >>> 1;
                  case 'base64':
                    return V(a).length;
                  default:
                    if (T) return S ? -1 : re(a).length;
                    (c = ('' + c).toLowerCase()), (T = !0);
                }
            }
            function f(a, c, g) {
              var S = !1;
              if (
                ((c === void 0 || c < 0) && (c = 0),
                c > this.length ||
                  ((g === void 0 || g > this.length) && (g = this.length), g <= 0) ||
                  (g >>>= 0) <= (c >>>= 0))
              )
                return '';
              for (a || (a = 'utf8'); ; )
                switch (a) {
                  case 'hex':
                    return L(this, c, g);
                  case 'utf8':
                  case 'utf-8':
                    return ge(this, c, g);
                  case 'ascii':
                    return ne(this, c, g);
                  case 'latin1':
                  case 'binary':
                    return R(this, c, g);
                  case 'base64':
                    return se(this, c, g);
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return C(this, c, g);
                  default:
                    if (S) throw new TypeError('Unknown encoding: ' + a);
                    (a = (a + '').toLowerCase()), (S = !0);
                }
            }
            function m(a, c, g) {
              var S = a[c];
              (a[c] = a[g]), (a[g] = S);
            }
            function x(a, c, g, S, T) {
              if (a.length === 0) return -1;
              if (
                (typeof g == 'string'
                  ? ((S = g), (g = 0))
                  : g > 2147483647
                    ? (g = 2147483647)
                    : g < -2147483648 && (g = -2147483648),
                P((g = +g)) && (g = T ? 0 : a.length - 1),
                g < 0 && (g = a.length + g),
                g >= a.length)
              ) {
                if (T) return -1;
                g = a.length - 1;
              } else if (g < 0) {
                if (!T) return -1;
                g = 0;
              }
              if ((typeof c == 'string' && (c = l.from(c, S)), l.isBuffer(c)))
                return c.length === 0 ? -1 : I(a, c, g, S, T);
              if (typeof c == 'number')
                return (
                  (c &= 255),
                  typeof Uint8Array.prototype.indexOf == 'function'
                    ? T
                      ? Uint8Array.prototype.indexOf.call(a, c, g)
                      : Uint8Array.prototype.lastIndexOf.call(a, c, g)
                    : I(a, [c], g, S, T)
                );
              throw new TypeError('val must be string, number or Buffer');
            }
            function I(a, c, g, S, T) {
              var k,
                A = 1,
                v = a.length,
                M = c.length;
              if (
                S !== void 0 &&
                ((S = String(S).toLowerCase()) === 'ucs2' ||
                  S === 'ucs-2' ||
                  S === 'utf16le' ||
                  S === 'utf-16le')
              ) {
                if (a.length < 2 || c.length < 2) return -1;
                (A = 2), (v /= 2), (M /= 2), (g /= 2);
              }
              function N(Re, Oe) {
                return A === 1 ? Re[Oe] : Re.readUInt16BE(Oe * A);
              }
              if (T) {
                var z = -1;
                for (k = g; k < v; k++)
                  if (N(a, k) === N(c, z === -1 ? 0 : k - z)) {
                    if ((z === -1 && (z = k), k - z + 1 === M)) return z * A;
                  } else z !== -1 && (k -= k - z), (z = -1);
              } else
                for (g + M > v && (g = v - M), k = g; k >= 0; k--) {
                  for (var me = !0, ke = 0; ke < M; ke++)
                    if (N(a, k + ke) !== N(c, ke)) {
                      me = !1;
                      break;
                    }
                  if (me) return k;
                }
              return -1;
            }
            function _(a, c, g, S) {
              g = Number(g) || 0;
              var T = a.length - g;
              S ? (S = Number(S)) > T && (S = T) : (S = T);
              var k = c.length;
              S > k / 2 && (S = k / 2);
              for (var A = 0; A < S; ++A) {
                var v = parseInt(c.substr(2 * A, 2), 16);
                if (P(v)) return A;
                a[g + A] = v;
              }
              return A;
            }
            function E(a, c, g, S) {
              return ee(re(c, a.length - g), a, g, S);
            }
            function O(a, c, g, S) {
              return ee(
                (function (T) {
                  for (var k = [], A = 0; A < T.length; ++A) k.push(255 & T.charCodeAt(A));
                  return k;
                })(c),
                a,
                g,
                S
              );
            }
            function U(a, c, g, S) {
              return O(a, c, g, S);
            }
            function pe(a, c, g, S) {
              return ee(V(c), a, g, S);
            }
            function X(a, c, g, S) {
              return ee(
                (function (T, k) {
                  for (var A, v, M, N = [], z = 0; z < T.length && !((k -= 2) < 0); ++z)
                    (v = (A = T.charCodeAt(z)) >> 8), (M = A % 256), N.push(M), N.push(v);
                  return N;
                })(c, a.length - g),
                a,
                g,
                S
              );
            }
            function se(a, c, g) {
              return c === 0 && g === a.length
                ? r.fromByteArray(a)
                : r.fromByteArray(a.slice(c, g));
            }
            function ge(a, c, g) {
              g = Math.min(a.length, g);
              for (var S = [], T = c; T < g; ) {
                var k,
                  A,
                  v,
                  M,
                  N = a[T],
                  z = null,
                  me = N > 239 ? 4 : N > 223 ? 3 : N > 191 ? 2 : 1;
                if (T + me <= g)
                  switch (me) {
                    case 1:
                      N < 128 && (z = N);
                      break;
                    case 2:
                      (192 & (k = a[T + 1])) == 128 &&
                        (M = ((31 & N) << 6) | (63 & k)) > 127 &&
                        (z = M);
                      break;
                    case 3:
                      (k = a[T + 1]),
                        (A = a[T + 2]),
                        (192 & k) == 128 &&
                          (192 & A) == 128 &&
                          (M = ((15 & N) << 12) | ((63 & k) << 6) | (63 & A)) > 2047 &&
                          (M < 55296 || M > 57343) &&
                          (z = M);
                      break;
                    case 4:
                      (k = a[T + 1]),
                        (A = a[T + 2]),
                        (v = a[T + 3]),
                        (192 & k) == 128 &&
                          (192 & A) == 128 &&
                          (192 & v) == 128 &&
                          (M = ((15 & N) << 18) | ((63 & k) << 12) | ((63 & A) << 6) | (63 & v)) >
                            65535 &&
                          M < 1114112 &&
                          (z = M);
                  }
                z === null
                  ? ((z = 65533), (me = 1))
                  : z > 65535 &&
                    ((z -= 65536), S.push(((z >>> 10) & 1023) | 55296), (z = 56320 | (1023 & z))),
                  S.push(z),
                  (T += me);
              }
              return (function (ke) {
                var Re = ke.length;
                if (Re <= J) return String.fromCharCode.apply(String, ke);
                for (var Oe = '', Ue = 0; Ue < Re; )
                  Oe += String.fromCharCode.apply(String, ke.slice(Ue, (Ue += J)));
                return Oe;
              })(S);
            }
            (s.kMaxLength = i),
              (l.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var a = new Uint8Array(1);
                  return (
                    (a.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    a.foo() === 42
                  );
                } catch {
                  return !1;
                }
              })()),
              l.TYPED_ARRAY_SUPPORT ||
                typeof console > 'u' ||
                typeof console.error != 'function' ||
                console.error(
                  'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                ),
              Object.defineProperty(l.prototype, 'parent', {
                enumerable: !0,
                get: function () {
                  if (l.isBuffer(this)) return this.buffer;
                },
              }),
              Object.defineProperty(l.prototype, 'offset', {
                enumerable: !0,
                get: function () {
                  if (l.isBuffer(this)) return this.byteOffset;
                },
              }),
              typeof Symbol < 'u' &&
                Symbol.species != null &&
                l[Symbol.species] === l &&
                Object.defineProperty(l, Symbol.species, {
                  value: null,
                  configurable: !0,
                  enumerable: !1,
                  writable: !1,
                }),
              (l.poolSize = 8192),
              (l.from = function (a, c, g) {
                return d(a, c, g);
              }),
              (l.prototype.__proto__ = Uint8Array.prototype),
              (l.__proto__ = Uint8Array),
              (l.alloc = function (a, c, g) {
                return (function (S, T, k) {
                  return (
                    h(S),
                    S <= 0
                      ? u(S)
                      : T !== void 0
                        ? typeof k == 'string'
                          ? u(S).fill(T, k)
                          : u(S).fill(T)
                        : u(S)
                  );
                })(a, c, g);
              }),
              (l.allocUnsafe = function (a) {
                return y(a);
              }),
              (l.allocUnsafeSlow = function (a) {
                return y(a);
              }),
              (l.isBuffer = function (a) {
                return a != null && a._isBuffer === !0 && a !== l.prototype;
              }),
              (l.compare = function (a, c) {
                if (
                  (ae(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)),
                  ae(c, Uint8Array) && (c = l.from(c, c.offset, c.byteLength)),
                  !l.isBuffer(a) || !l.isBuffer(c))
                )
                  throw new TypeError(
                    'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                  );
                if (a === c) return 0;
                for (var g = a.length, S = c.length, T = 0, k = Math.min(g, S); T < k; ++T)
                  if (a[T] !== c[T]) {
                    (g = a[T]), (S = c[T]);
                    break;
                  }
                return g < S ? -1 : S < g ? 1 : 0;
              }),
              (l.isEncoding = function (a) {
                switch (String(a).toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return !0;
                  default:
                    return !1;
                }
              }),
              (l.concat = function (a, c) {
                if (!Array.isArray(a))
                  throw new TypeError('"list" argument must be an Array of Buffers');
                if (a.length === 0) return l.alloc(0);
                var g;
                if (c === void 0) for (c = 0, g = 0; g < a.length; ++g) c += a[g].length;
                var S = l.allocUnsafe(c),
                  T = 0;
                for (g = 0; g < a.length; ++g) {
                  var k = a[g];
                  if ((ae(k, Uint8Array) && (k = l.from(k)), !l.isBuffer(k)))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  k.copy(S, T), (T += k.length);
                }
                return S;
              }),
              (l.byteLength = p),
              (l.prototype._isBuffer = !0),
              (l.prototype.swap16 = function () {
                var a = this.length;
                if (a % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
                for (var c = 0; c < a; c += 2) m(this, c, c + 1);
                return this;
              }),
              (l.prototype.swap32 = function () {
                var a = this.length;
                if (a % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
                for (var c = 0; c < a; c += 4) m(this, c, c + 3), m(this, c + 1, c + 2);
                return this;
              }),
              (l.prototype.swap64 = function () {
                var a = this.length;
                if (a % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
                for (var c = 0; c < a; c += 8)
                  m(this, c, c + 7),
                    m(this, c + 1, c + 6),
                    m(this, c + 2, c + 5),
                    m(this, c + 3, c + 4);
                return this;
              }),
              (l.prototype.toString = function () {
                var a = this.length;
                return a === 0
                  ? ''
                  : arguments.length === 0
                    ? ge(this, 0, a)
                    : f.apply(this, arguments);
              }),
              (l.prototype.toLocaleString = l.prototype.toString),
              (l.prototype.equals = function (a) {
                if (!l.isBuffer(a)) throw new TypeError('Argument must be a Buffer');
                return this === a || l.compare(this, a) === 0;
              }),
              (l.prototype.inspect = function () {
                var a = '',
                  c = s.INSPECT_MAX_BYTES;
                return (
                  (a = this.toString('hex', 0, c)
                    .replace(/(.{2})/g, '$1 ')
                    .trim()),
                  this.length > c && (a += ' ... '),
                  '<Buffer ' + a + '>'
                );
              }),
              (l.prototype.compare = function (a, c, g, S, T) {
                if ((ae(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), !l.isBuffer(a)))
                  throw new TypeError(
                    'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                      typeof a
                  );
                if (
                  (c === void 0 && (c = 0),
                  g === void 0 && (g = a ? a.length : 0),
                  S === void 0 && (S = 0),
                  T === void 0 && (T = this.length),
                  c < 0 || g > a.length || S < 0 || T > this.length)
                )
                  throw new RangeError('out of range index');
                if (S >= T && c >= g) return 0;
                if (S >= T) return -1;
                if (c >= g) return 1;
                if (this === a) return 0;
                for (
                  var k = (T >>>= 0) - (S >>>= 0),
                    A = (g >>>= 0) - (c >>>= 0),
                    v = Math.min(k, A),
                    M = this.slice(S, T),
                    N = a.slice(c, g),
                    z = 0;
                  z < v;
                  ++z
                )
                  if (M[z] !== N[z]) {
                    (k = M[z]), (A = N[z]);
                    break;
                  }
                return k < A ? -1 : A < k ? 1 : 0;
              }),
              (l.prototype.includes = function (a, c, g) {
                return this.indexOf(a, c, g) !== -1;
              }),
              (l.prototype.indexOf = function (a, c, g) {
                return x(this, a, c, g, !0);
              }),
              (l.prototype.lastIndexOf = function (a, c, g) {
                return x(this, a, c, g, !1);
              }),
              (l.prototype.write = function (a, c, g, S) {
                if (c === void 0) (S = 'utf8'), (g = this.length), (c = 0);
                else if (g === void 0 && typeof c == 'string') (S = c), (g = this.length), (c = 0);
                else {
                  if (!isFinite(c))
                    throw new Error(
                      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                    );
                  (c >>>= 0),
                    isFinite(g)
                      ? ((g >>>= 0), S === void 0 && (S = 'utf8'))
                      : ((S = g), (g = void 0));
                }
                var T = this.length - c;
                if (
                  ((g === void 0 || g > T) && (g = T),
                  (a.length > 0 && (g < 0 || c < 0)) || c > this.length)
                )
                  throw new RangeError('Attempt to write outside buffer bounds');
                S || (S = 'utf8');
                for (var k = !1; ; )
                  switch (S) {
                    case 'hex':
                      return _(this, a, c, g);
                    case 'utf8':
                    case 'utf-8':
                      return E(this, a, c, g);
                    case 'ascii':
                      return O(this, a, c, g);
                    case 'latin1':
                    case 'binary':
                      return U(this, a, c, g);
                    case 'base64':
                      return pe(this, a, c, g);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return X(this, a, c, g);
                    default:
                      if (k) throw new TypeError('Unknown encoding: ' + S);
                      (S = ('' + S).toLowerCase()), (k = !0);
                  }
              }),
              (l.prototype.toJSON = function () {
                return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
              });
            var J = 4096;
            function ne(a, c, g) {
              var S = '';
              g = Math.min(a.length, g);
              for (var T = c; T < g; ++T) S += String.fromCharCode(127 & a[T]);
              return S;
            }
            function R(a, c, g) {
              var S = '';
              g = Math.min(a.length, g);
              for (var T = c; T < g; ++T) S += String.fromCharCode(a[T]);
              return S;
            }
            function L(a, c, g) {
              var S = a.length;
              (!c || c < 0) && (c = 0), (!g || g < 0 || g > S) && (g = S);
              for (var T = '', k = c; k < g; ++k) T += G(a[k]);
              return T;
            }
            function C(a, c, g) {
              for (var S = a.slice(c, g), T = '', k = 0; k < S.length; k += 2)
                T += String.fromCharCode(S[k] + 256 * S[k + 1]);
              return T;
            }
            function H(a, c, g) {
              if (a % 1 != 0 || a < 0) throw new RangeError('offset is not uint');
              if (a + c > g) throw new RangeError('Trying to access beyond buffer length');
            }
            function D(a, c, g, S, T, k) {
              if (!l.isBuffer(a))
                throw new TypeError('"buffer" argument must be a Buffer instance');
              if (c > T || c < k) throw new RangeError('"value" argument is out of bounds');
              if (g + S > a.length) throw new RangeError('Index out of range');
            }
            function K(a, c, g, S, T, k) {
              if (g + S > a.length) throw new RangeError('Index out of range');
              if (g < 0) throw new RangeError('Index out of range');
            }
            function q(a, c, g, S, T) {
              return (c = +c), (g >>>= 0), T || K(a, 0, g, 4), o.write(a, c, g, S, 23, 4), g + 4;
            }
            function F(a, c, g, S, T) {
              return (c = +c), (g >>>= 0), T || K(a, 0, g, 8), o.write(a, c, g, S, 52, 8), g + 8;
            }
            (l.prototype.slice = function (a, c) {
              var g = this.length;
              (a = ~~a) < 0 ? (a += g) < 0 && (a = 0) : a > g && (a = g),
                (c = c === void 0 ? g : ~~c) < 0 ? (c += g) < 0 && (c = 0) : c > g && (c = g),
                c < a && (c = a);
              var S = this.subarray(a, c);
              return (S.__proto__ = l.prototype), S;
            }),
              (l.prototype.readUIntLE = function (a, c, g) {
                (a >>>= 0), (c >>>= 0), g || H(a, c, this.length);
                for (var S = this[a], T = 1, k = 0; ++k < c && (T *= 256); ) S += this[a + k] * T;
                return S;
              }),
              (l.prototype.readUIntBE = function (a, c, g) {
                (a >>>= 0), (c >>>= 0), g || H(a, c, this.length);
                for (var S = this[a + --c], T = 1; c > 0 && (T *= 256); ) S += this[a + --c] * T;
                return S;
              }),
              (l.prototype.readUInt8 = function (a, c) {
                return (a >>>= 0), c || H(a, 1, this.length), this[a];
              }),
              (l.prototype.readUInt16LE = function (a, c) {
                return (a >>>= 0), c || H(a, 2, this.length), this[a] | (this[a + 1] << 8);
              }),
              (l.prototype.readUInt16BE = function (a, c) {
                return (a >>>= 0), c || H(a, 2, this.length), (this[a] << 8) | this[a + 1];
              }),
              (l.prototype.readUInt32LE = function (a, c) {
                return (
                  (a >>>= 0),
                  c || H(a, 4, this.length),
                  (this[a] | (this[a + 1] << 8) | (this[a + 2] << 16)) + 16777216 * this[a + 3]
                );
              }),
              (l.prototype.readUInt32BE = function (a, c) {
                return (
                  (a >>>= 0),
                  c || H(a, 4, this.length),
                  16777216 * this[a] + ((this[a + 1] << 16) | (this[a + 2] << 8) | this[a + 3])
                );
              }),
              (l.prototype.readIntLE = function (a, c, g) {
                (a >>>= 0), (c >>>= 0), g || H(a, c, this.length);
                for (var S = this[a], T = 1, k = 0; ++k < c && (T *= 256); ) S += this[a + k] * T;
                return S >= (T *= 128) && (S -= Math.pow(2, 8 * c)), S;
              }),
              (l.prototype.readIntBE = function (a, c, g) {
                (a >>>= 0), (c >>>= 0), g || H(a, c, this.length);
                for (var S = c, T = 1, k = this[a + --S]; S > 0 && (T *= 256); )
                  k += this[a + --S] * T;
                return k >= (T *= 128) && (k -= Math.pow(2, 8 * c)), k;
              }),
              (l.prototype.readInt8 = function (a, c) {
                return (
                  (a >>>= 0),
                  c || H(a, 1, this.length),
                  128 & this[a] ? -1 * (255 - this[a] + 1) : this[a]
                );
              }),
              (l.prototype.readInt16LE = function (a, c) {
                (a >>>= 0), c || H(a, 2, this.length);
                var g = this[a] | (this[a + 1] << 8);
                return 32768 & g ? 4294901760 | g : g;
              }),
              (l.prototype.readInt16BE = function (a, c) {
                (a >>>= 0), c || H(a, 2, this.length);
                var g = this[a + 1] | (this[a] << 8);
                return 32768 & g ? 4294901760 | g : g;
              }),
              (l.prototype.readInt32LE = function (a, c) {
                return (
                  (a >>>= 0),
                  c || H(a, 4, this.length),
                  this[a] | (this[a + 1] << 8) | (this[a + 2] << 16) | (this[a + 3] << 24)
                );
              }),
              (l.prototype.readInt32BE = function (a, c) {
                return (
                  (a >>>= 0),
                  c || H(a, 4, this.length),
                  (this[a] << 24) | (this[a + 1] << 16) | (this[a + 2] << 8) | this[a + 3]
                );
              }),
              (l.prototype.readFloatLE = function (a, c) {
                return (a >>>= 0), c || H(a, 4, this.length), o.read(this, a, !0, 23, 4);
              }),
              (l.prototype.readFloatBE = function (a, c) {
                return (a >>>= 0), c || H(a, 4, this.length), o.read(this, a, !1, 23, 4);
              }),
              (l.prototype.readDoubleLE = function (a, c) {
                return (a >>>= 0), c || H(a, 8, this.length), o.read(this, a, !0, 52, 8);
              }),
              (l.prototype.readDoubleBE = function (a, c) {
                return (a >>>= 0), c || H(a, 8, this.length), o.read(this, a, !1, 52, 8);
              }),
              (l.prototype.writeUIntLE = function (a, c, g, S) {
                (a = +a), (c >>>= 0), (g >>>= 0), S || D(this, a, c, g, Math.pow(2, 8 * g) - 1, 0);
                var T = 1,
                  k = 0;
                for (this[c] = 255 & a; ++k < g && (T *= 256); ) this[c + k] = (a / T) & 255;
                return c + g;
              }),
              (l.prototype.writeUIntBE = function (a, c, g, S) {
                (a = +a), (c >>>= 0), (g >>>= 0), S || D(this, a, c, g, Math.pow(2, 8 * g) - 1, 0);
                var T = g - 1,
                  k = 1;
                for (this[c + T] = 255 & a; --T >= 0 && (k *= 256); ) this[c + T] = (a / k) & 255;
                return c + g;
              }),
              (l.prototype.writeUInt8 = function (a, c, g) {
                return (
                  (a = +a), (c >>>= 0), g || D(this, a, c, 1, 255, 0), (this[c] = 255 & a), c + 1
                );
              }),
              (l.prototype.writeUInt16LE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 2, 65535, 0),
                  (this[c] = 255 & a),
                  (this[c + 1] = a >>> 8),
                  c + 2
                );
              }),
              (l.prototype.writeUInt16BE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 2, 65535, 0),
                  (this[c] = a >>> 8),
                  (this[c + 1] = 255 & a),
                  c + 2
                );
              }),
              (l.prototype.writeUInt32LE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 4, 4294967295, 0),
                  (this[c + 3] = a >>> 24),
                  (this[c + 2] = a >>> 16),
                  (this[c + 1] = a >>> 8),
                  (this[c] = 255 & a),
                  c + 4
                );
              }),
              (l.prototype.writeUInt32BE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 4, 4294967295, 0),
                  (this[c] = a >>> 24),
                  (this[c + 1] = a >>> 16),
                  (this[c + 2] = a >>> 8),
                  (this[c + 3] = 255 & a),
                  c + 4
                );
              }),
              (l.prototype.writeIntLE = function (a, c, g, S) {
                if (((a = +a), (c >>>= 0), !S)) {
                  var T = Math.pow(2, 8 * g - 1);
                  D(this, a, c, g, T - 1, -T);
                }
                var k = 0,
                  A = 1,
                  v = 0;
                for (this[c] = 255 & a; ++k < g && (A *= 256); )
                  a < 0 && v === 0 && this[c + k - 1] !== 0 && (v = 1),
                    (this[c + k] = (((a / A) >> 0) - v) & 255);
                return c + g;
              }),
              (l.prototype.writeIntBE = function (a, c, g, S) {
                if (((a = +a), (c >>>= 0), !S)) {
                  var T = Math.pow(2, 8 * g - 1);
                  D(this, a, c, g, T - 1, -T);
                }
                var k = g - 1,
                  A = 1,
                  v = 0;
                for (this[c + k] = 255 & a; --k >= 0 && (A *= 256); )
                  a < 0 && v === 0 && this[c + k + 1] !== 0 && (v = 1),
                    (this[c + k] = (((a / A) >> 0) - v) & 255);
                return c + g;
              }),
              (l.prototype.writeInt8 = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 1, 127, -128),
                  a < 0 && (a = 255 + a + 1),
                  (this[c] = 255 & a),
                  c + 1
                );
              }),
              (l.prototype.writeInt16LE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 2, 32767, -32768),
                  (this[c] = 255 & a),
                  (this[c + 1] = a >>> 8),
                  c + 2
                );
              }),
              (l.prototype.writeInt16BE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 2, 32767, -32768),
                  (this[c] = a >>> 8),
                  (this[c + 1] = 255 & a),
                  c + 2
                );
              }),
              (l.prototype.writeInt32LE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 4, 2147483647, -2147483648),
                  (this[c] = 255 & a),
                  (this[c + 1] = a >>> 8),
                  (this[c + 2] = a >>> 16),
                  (this[c + 3] = a >>> 24),
                  c + 4
                );
              }),
              (l.prototype.writeInt32BE = function (a, c, g) {
                return (
                  (a = +a),
                  (c >>>= 0),
                  g || D(this, a, c, 4, 2147483647, -2147483648),
                  a < 0 && (a = 4294967295 + a + 1),
                  (this[c] = a >>> 24),
                  (this[c + 1] = a >>> 16),
                  (this[c + 2] = a >>> 8),
                  (this[c + 3] = 255 & a),
                  c + 4
                );
              }),
              (l.prototype.writeFloatLE = function (a, c, g) {
                return q(this, a, c, !0, g);
              }),
              (l.prototype.writeFloatBE = function (a, c, g) {
                return q(this, a, c, !1, g);
              }),
              (l.prototype.writeDoubleLE = function (a, c, g) {
                return F(this, a, c, !0, g);
              }),
              (l.prototype.writeDoubleBE = function (a, c, g) {
                return F(this, a, c, !1, g);
              }),
              (l.prototype.copy = function (a, c, g, S) {
                if (!l.isBuffer(a)) throw new TypeError('argument should be a Buffer');
                if (
                  (g || (g = 0),
                  S || S === 0 || (S = this.length),
                  c >= a.length && (c = a.length),
                  c || (c = 0),
                  S > 0 && S < g && (S = g),
                  S === g || a.length === 0 || this.length === 0)
                )
                  return 0;
                if (c < 0) throw new RangeError('targetStart out of bounds');
                if (g < 0 || g >= this.length) throw new RangeError('Index out of range');
                if (S < 0) throw new RangeError('sourceEnd out of bounds');
                S > this.length && (S = this.length),
                  a.length - c < S - g && (S = a.length - c + g);
                var T = S - g;
                if (this === a && typeof Uint8Array.prototype.copyWithin == 'function')
                  this.copyWithin(c, g, S);
                else if (this === a && g < c && c < S)
                  for (var k = T - 1; k >= 0; --k) a[k + c] = this[k + g];
                else Uint8Array.prototype.set.call(a, this.subarray(g, S), c);
                return T;
              }),
              (l.prototype.fill = function (a, c, g, S) {
                if (typeof a == 'string') {
                  if (
                    (typeof c == 'string'
                      ? ((S = c), (c = 0), (g = this.length))
                      : typeof g == 'string' && ((S = g), (g = this.length)),
                    S !== void 0 && typeof S != 'string')
                  )
                    throw new TypeError('encoding must be a string');
                  if (typeof S == 'string' && !l.isEncoding(S))
                    throw new TypeError('Unknown encoding: ' + S);
                  if (a.length === 1) {
                    var T = a.charCodeAt(0);
                    ((S === 'utf8' && T < 128) || S === 'latin1') && (a = T);
                  }
                } else typeof a == 'number' && (a &= 255);
                if (c < 0 || this.length < c || this.length < g)
                  throw new RangeError('Out of range index');
                if (g <= c) return this;
                var k;
                if (
                  ((c >>>= 0),
                  (g = g === void 0 ? this.length : g >>> 0),
                  a || (a = 0),
                  typeof a == 'number')
                )
                  for (k = c; k < g; ++k) this[k] = a;
                else {
                  var A = l.isBuffer(a) ? a : l.from(a, S),
                    v = A.length;
                  if (v === 0)
                    throw new TypeError('The value "' + a + '" is invalid for argument "value"');
                  for (k = 0; k < g - c; ++k) this[k + c] = A[k % v];
                }
                return this;
              });
            var ie = /[^+/0-9A-Za-z-_]/g;
            function G(a) {
              return a < 16 ? '0' + a.toString(16) : a.toString(16);
            }
            function re(a, c) {
              var g;
              c = c || 1 / 0;
              for (var S = a.length, T = null, k = [], A = 0; A < S; ++A) {
                if ((g = a.charCodeAt(A)) > 55295 && g < 57344) {
                  if (!T) {
                    if (g > 56319) {
                      (c -= 3) > -1 && k.push(239, 191, 189);
                      continue;
                    }
                    if (A + 1 === S) {
                      (c -= 3) > -1 && k.push(239, 191, 189);
                      continue;
                    }
                    T = g;
                    continue;
                  }
                  if (g < 56320) {
                    (c -= 3) > -1 && k.push(239, 191, 189), (T = g);
                    continue;
                  }
                  g = 65536 + (((T - 55296) << 10) | (g - 56320));
                } else T && (c -= 3) > -1 && k.push(239, 191, 189);
                if (((T = null), g < 128)) {
                  if ((c -= 1) < 0) break;
                  k.push(g);
                } else if (g < 2048) {
                  if ((c -= 2) < 0) break;
                  k.push((g >> 6) | 192, (63 & g) | 128);
                } else if (g < 65536) {
                  if ((c -= 3) < 0) break;
                  k.push((g >> 12) | 224, ((g >> 6) & 63) | 128, (63 & g) | 128);
                } else {
                  if (!(g < 1114112)) throw new Error('Invalid code point');
                  if ((c -= 4) < 0) break;
                  k.push(
                    (g >> 18) | 240,
                    ((g >> 12) & 63) | 128,
                    ((g >> 6) & 63) | 128,
                    (63 & g) | 128
                  );
                }
              }
              return k;
            }
            function V(a) {
              return r.toByteArray(
                (function (c) {
                  if ((c = (c = c.split('=')[0]).trim().replace(ie, '')).length < 2) return '';
                  for (; c.length % 4 != 0; ) c += '=';
                  return c;
                })(a)
              );
            }
            function ee(a, c, g, S) {
              for (var T = 0; T < S && !(T + g >= c.length || T >= a.length); ++T) c[T + g] = a[T];
              return T;
            }
            function ae(a, c) {
              return (
                a instanceof c ||
                (a != null &&
                  a.constructor != null &&
                  a.constructor.name != null &&
                  a.constructor.name === c.name)
              );
            }
            function P(a) {
              return a != a;
            }
          }).call(this);
        }).call(this, e('buffer').Buffer);
      },
      { 'base64-js': 1, buffer: 2, ieee754: 3 },
    ],
    3: [
      function (e, t, s) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (s.read =
          function (n, r, o, i, u) {
            var l,
              d,
              h = 8 * u - i - 1,
              y = (1 << h) - 1,
              b = y >> 1,
              w = -7,
              p = o ? u - 1 : 0,
              f = o ? -1 : 1,
              m = n[r + p];
            for (
              p += f, l = m & ((1 << -w) - 1), m >>= -w, w += h;
              w > 0;
              l = 256 * l + n[r + p], p += f, w -= 8
            );
            for (
              d = l & ((1 << -w) - 1), l >>= -w, w += i;
              w > 0;
              d = 256 * d + n[r + p], p += f, w -= 8
            );
            if (l === 0) l = 1 - b;
            else {
              if (l === y) return d ? NaN : (1 / 0) * (m ? -1 : 1);
              (d += Math.pow(2, i)), (l -= b);
            }
            return (m ? -1 : 1) * d * Math.pow(2, l - i);
          }),
          (s.write = function (n, r, o, i, u, l) {
            var d,
              h,
              y,
              b = 8 * l - u - 1,
              w = (1 << b) - 1,
              p = w >> 1,
              f = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              m = i ? 0 : l - 1,
              x = i ? 1 : -1,
              I = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
            for (
              r = Math.abs(r),
                isNaN(r) || r === 1 / 0
                  ? ((h = isNaN(r) ? 1 : 0), (d = w))
                  : ((d = Math.floor(Math.log(r) / Math.LN2)),
                    r * (y = Math.pow(2, -d)) < 1 && (d--, (y *= 2)),
                    (r += d + p >= 1 ? f / y : f * Math.pow(2, 1 - p)) * y >= 2 && (d++, (y /= 2)),
                    d + p >= w
                      ? ((h = 0), (d = w))
                      : d + p >= 1
                        ? ((h = (r * y - 1) * Math.pow(2, u)), (d += p))
                        : ((h = r * Math.pow(2, p - 1) * Math.pow(2, u)), (d = 0)));
              u >= 8;
              n[o + m] = 255 & h, m += x, h /= 256, u -= 8
            );
            for (d = (d << u) | h, b += u; b > 0; n[o + m] = 255 & d, m += x, d /= 256, b -= 8);
            n[o + m - x] |= 128 * I;
          });
      },
      {},
    ],
    4: [
      function (e, t, s) {
        (function (n) {
          (function () {
            const r = this,
              o = e('./transformers'),
              i = 'UTF8',
              u = 'UTF16',
              l = 'UTF16BE',
              d = 'UTF16LE',
              h = 'UTF32',
              y = 'UTF32BE',
              b = 'UTF32LE',
              w = 'UINT7',
              p = 'ASCII',
              f = 'BINARY',
              m = 'UINT8',
              x = 'UINT16',
              I = 'UINT16LE',
              _ = 'UINT16BE',
              E = 'UINT32',
              O = 'UINT32LE',
              U = 'UINT32BE',
              pe = 'ESCAPED',
              X = 'STRING',
              se = function (J, ne) {
                if (typeof J != 'string' || J === '')
                  throw new TypeError(`type: "${J}" not recognized`);
                const R = (function (L) {
                  const C = { type: '', base64: !1 },
                    H = /^(base64:)?([a-zA-Z0-9]+)$/i.exec(L);
                  return H && (H[2] && (C.type = H[2].toUpperCase()), H[1] && (C.base64 = !0)), C;
                })(J.toUpperCase());
                if (R.base64) {
                  if (R.type === X)
                    throw new TypeError(
                      `type: "${J} "BASE64:" prefix not allowed with type STRING`
                    );
                  if (n.isBuffer(ne)) R.data = o.base64.decode(ne);
                  else {
                    if (typeof ne != 'string')
                      throw new TypeError(
                        `type: "${J} unrecognized data type: typeof(data): ${typeof ne}`
                      );
                    {
                      const L = n.from(ne, 'ascii');
                      R.data = o.base64.decode(L);
                    }
                  }
                } else R.data = ne;
                switch (R.type) {
                  case i:
                    (function (L) {
                      L.type = i;
                      const C = L.data;
                      (L.bom = 0),
                        C.length >= 3 &&
                          C[0] === 239 &&
                          C[1] === 187 &&
                          C[2] === 191 &&
                          (L.bom = 3);
                    })(R);
                    break;
                  case u:
                  case l:
                  case d:
                    (function (L) {
                      const C = L.data;
                      switch (((L.bom = 0), L.type)) {
                        case u:
                          (L.type = l),
                            C.length >= 2 &&
                              (C[0] === 254 && C[1] === 255
                                ? (L.bom = 2)
                                : C[0] === 255 && C[1] === 254 && ((L.type = d), (L.bom = 2)));
                          break;
                        case l:
                          if (((L.type = l), C.length >= 2)) {
                            if (C[0] === 254 && C[1] === 255) L.bom = 2;
                            else if (C[0] === 255 && C[1] === 254)
                              throw new TypeError(
                                'src type: "UTF16BE" specified but BOM is for "UTF16LE"'
                              );
                          }
                          break;
                        case d:
                          if (((L.type = d), C.length >= 0)) {
                            if (C[0] === 254 && C[1] === 255)
                              throw new TypeError(
                                'src type: "UTF16LE" specified but BOM is for "UTF16BE"'
                              );
                            C[0] === 255 && C[1] === 254 && (L.bom = 2);
                          }
                          break;
                        default:
                          throw new TypeError(`UTF16 BOM: src type "${L.type}" unrecognized`);
                      }
                    })(R);
                    break;
                  case h:
                  case y:
                  case b:
                    (function (L) {
                      const C = L.data;
                      switch (((L.bom = 0), L.type)) {
                        case h:
                          (L.type = y),
                            C.length >= 4 &&
                              (C[0] === 0 &&
                                C[1] === 0 &&
                                C[2] === 254 &&
                                C[3] === 255 &&
                                (L.bom = 4),
                              C[0] === 255 &&
                                C[1] === 254 &&
                                C[2] === 0 &&
                                C[3] === 0 &&
                                ((L.type = b), (L.bom = 4)));
                          break;
                        case y:
                          if (
                            ((L.type = y),
                            C.length >= 4 &&
                              (C[0] === 0 &&
                                C[1] === 0 &&
                                C[2] === 254 &&
                                C[3] === 255 &&
                                (L.bom = 4),
                              C[0] === 255 && C[1] === 254 && C[2] === 0 && C[3] === 0))
                          )
                            throw new TypeError(
                              'src type: UTF32BE specified but BOM is for UTF32LE"'
                            );
                          break;
                        case b:
                          if (((L.type = b), C.length >= 4)) {
                            if (C[0] === 0 && C[1] === 0 && C[2] === 254 && C[3] === 255)
                              throw new TypeError(
                                'src type: "UTF32LE" specified but BOM is for "UTF32BE"'
                              );
                            C[0] === 255 && C[1] === 254 && C[2] === 0 && C[3] === 0 && (L.bom = 4);
                          }
                          break;
                        default:
                          throw new TypeError(`UTF32 BOM: src type "${L.type}" unrecognized`);
                      }
                    })(R);
                    break;
                  case x:
                    R.type = _;
                    break;
                  case E:
                    R.type = U;
                    break;
                  case p:
                    R.type = w;
                    break;
                  case f:
                    R.type = m;
                    break;
                  case w:
                  case m:
                  case I:
                  case _:
                  case O:
                  case U:
                  case X:
                  case pe:
                    break;
                  default:
                    throw new TypeError(`type: "${J}" not recognized`);
                }
                if (R.type === X) {
                  if (typeof R.data != 'string')
                    throw new TypeError(`type: "${J}" but data is not a string`);
                } else if (!n.isBuffer(R.data))
                  throw new TypeError(`type: "${J}" but data is not a Buffer`);
                return R;
              },
              ge = function (J, ne) {
                switch (J) {
                  case i:
                    return o.utf8.encode(ne);
                  case l:
                    return o.utf16be.encode(ne);
                  case d:
                    return o.utf16le.encode(ne);
                  case y:
                    return o.utf32be.encode(ne);
                  case b:
                    return o.utf32le.encode(ne);
                  case w:
                    return o.uint7.encode(ne);
                  case m:
                    return o.uint8.encode(ne);
                  case _:
                    return o.uint16be.encode(ne);
                  case I:
                    return o.uint16le.encode(ne);
                  case U:
                    return o.uint32be.encode(ne);
                  case O:
                    return o.uint32le.encode(ne);
                  case X:
                    return o.string.encode(ne);
                  case pe:
                    return o.escaped.encode(ne);
                  default:
                    throw new TypeError(`encode type "${J}" not recognized`);
                }
              };
            (s.decode = function (J, ne) {
              return (function (R) {
                switch (R.type) {
                  case i:
                    return o.utf8.decode(R.data, R.bom);
                  case d:
                    return o.utf16le.decode(R.data, R.bom);
                  case l:
                    return o.utf16be.decode(R.data, R.bom);
                  case y:
                    return o.utf32be.decode(R.data, R.bom);
                  case b:
                    return o.utf32le.decode(R.data, R.bom);
                  case w:
                    return o.uint7.decode(R.data);
                  case m:
                    return o.uint8.decode(R.data);
                  case _:
                    return o.uint16be.decode(R.data);
                  case I:
                    return o.uint16le.decode(R.data);
                  case U:
                    return o.uint32be.decode(R.data);
                  case O:
                    return o.uint32le.decode(R.data);
                  case X:
                    return o.string.decode(R.data);
                  case pe:
                    return o.escaped.decode(R.data);
                  default:
                    throw new TypeError(`decode type "${R.type}" not recognized`);
                }
              })(se(J, ne));
            }),
              (s.encode = function (J, ne) {
                let R, L;
                const C = (function (H, D) {
                  if (!Array.isArray(D)) throw new TypeError('dst chars: not array: "' + typeof D);
                  if (typeof H != 'string')
                    throw new TypeError('dst type: not string: "' + typeof H);
                  const K = (function (q) {
                    let F, ie;
                    const G = { crlf: !1, lf: !1, base64: !1, type: '' };
                    for (;;) {
                      if (((ie = q), (F = q.slice(0, 5)), F === 'CRLF:')) {
                        (G.crlf = !0), (ie = q.slice(5));
                        break;
                      }
                      if (((F = q.slice(0, 3)), F === 'LF:')) {
                        (G.lf = !0), (ie = q.slice(3));
                        break;
                      }
                      break;
                    }
                    return (
                      (F = ie.split(':')),
                      F.length === 1
                        ? (G.type = F[0])
                        : F.length === 2 && F[1] === 'BASE64' && ((G.base64 = !0), (G.type = F[0])),
                      G
                    );
                  })(H.toUpperCase());
                  switch (K.type) {
                    case i:
                    case l:
                    case d:
                    case y:
                    case b:
                    case w:
                    case m:
                    case I:
                    case _:
                    case O:
                    case U:
                    case pe:
                      break;
                    case X:
                      if (K.base64)
                        throw new TypeError('":BASE64" suffix not allowed with type STRING');
                      break;
                    case p:
                      K.type = w;
                      break;
                    case f:
                      K.type = m;
                      break;
                    case u:
                      K.type = l;
                      break;
                    case h:
                      K.type = y;
                      break;
                    case x:
                      K.type = _;
                      break;
                    case E:
                      K.type = U;
                      break;
                    default:
                      throw new TypeError(
                        `dst type unrecognized: "${H}" : must have form [crlf:|lf:]type[:base64]`
                      );
                  }
                  return K;
                })(J, ne);
                return (
                  C.crlf
                    ? ((R = o.lineEnds.crlf(ne)), (L = ge(C.type, R)))
                    : C.lf
                      ? ((R = o.lineEnds.lf(ne)), (L = ge(C.type, R)))
                      : (L = ge(C.type, ne)),
                  C.base64 && (L = o.base64.encode(L)),
                  L
                );
              }),
              (s.convert = function (J, ne, R) {
                return r.encode(R, r.decode(J, ne));
              });
          }).call(this);
        }).call(this, e('buffer').Buffer);
      },
      { './transformers': 6, buffer: 2 },
    ],
    5: [
      function (e, t, s) {
        t.exports = { converter: e('./converter'), transformers: e('./transformers') };
      },
      { './converter': 4, './transformers': 6 },
    ],
    6: [
      function (e, t, s) {
        (function (n) {
          (function () {
            const r = this,
              o = 4294967292,
              i = 4294967293,
              u = 4294967294,
              l = 4294967295,
              d = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023],
              h = [
                '00',
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '0A',
                '0B',
                '0C',
                '0D',
                '0E',
                '0F',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '1A',
                '1B',
                '1C',
                '1D',
                '1E',
                '1F',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '2A',
                '2B',
                '2C',
                '2D',
                '2E',
                '2F',
                '30',
                '31',
                '32',
                '33',
                '34',
                '35',
                '36',
                '37',
                '38',
                '39',
                '3A',
                '3B',
                '3C',
                '3D',
                '3E',
                '3F',
                '40',
                '41',
                '42',
                '43',
                '44',
                '45',
                '46',
                '47',
                '48',
                '49',
                '4A',
                '4B',
                '4C',
                '4D',
                '4E',
                '4F',
                '50',
                '51',
                '52',
                '53',
                '54',
                '55',
                '56',
                '57',
                '58',
                '59',
                '5A',
                '5B',
                '5C',
                '5D',
                '5E',
                '5F',
                '60',
                '61',
                '62',
                '63',
                '64',
                '65',
                '66',
                '67',
                '68',
                '69',
                '6A',
                '6B',
                '6C',
                '6D',
                '6E',
                '6F',
                '70',
                '71',
                '72',
                '73',
                '74',
                '75',
                '76',
                '77',
                '78',
                '79',
                '7A',
                '7B',
                '7C',
                '7D',
                '7E',
                '7F',
                '80',
                '81',
                '82',
                '83',
                '84',
                '85',
                '86',
                '87',
                '88',
                '89',
                '8A',
                '8B',
                '8C',
                '8D',
                '8E',
                '8F',
                '90',
                '91',
                '92',
                '93',
                '94',
                '95',
                '96',
                '97',
                '98',
                '99',
                '9A',
                '9B',
                '9C',
                '9D',
                '9E',
                '9F',
                'A0',
                'A1',
                'A2',
                'A3',
                'A4',
                'A5',
                'A6',
                'A7',
                'A8',
                'A9',
                'AA',
                'AB',
                'AC',
                'AD',
                'AE',
                'AF',
                'B0',
                'B1',
                'B2',
                'B3',
                'B4',
                'B5',
                'B6',
                'B7',
                'B8',
                'B9',
                'BA',
                'BB',
                'BC',
                'BD',
                'BE',
                'BF',
                'C0',
                'C1',
                'C2',
                'C3',
                'C4',
                'C5',
                'C6',
                'C7',
                'C8',
                'C9',
                'CA',
                'CB',
                'CC',
                'CD',
                'CE',
                'CF',
                'D0',
                'D1',
                'D2',
                'D3',
                'D4',
                'D5',
                'D6',
                'D7',
                'D8',
                'D9',
                'DA',
                'DB',
                'DC',
                'DD',
                'DE',
                'DF',
                'E0',
                'E1',
                'E2',
                'E3',
                'E4',
                'E5',
                'E6',
                'E7',
                'E8',
                'E9',
                'EA',
                'EB',
                'EC',
                'ED',
                'EE',
                'EF',
                'F0',
                'F1',
                'F2',
                'F3',
                'F4',
                'F5',
                'F6',
                'F7',
                'F8',
                'F9',
                'FA',
                'FB',
                'FC',
                'FD',
                'FE',
                'FF',
              ],
              y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split(''),
              b = [];
            y.forEach((p) => {
              b.push(p.charCodeAt(0));
            }),
              (s.utf8 = {
                encode(p) {
                  const f = [];
                  return (
                    p.forEach((m) => {
                      if (m >= 0 && m <= 127) f.push(m);
                      else if (m <= 2047) f.push(192 + ((m >> 6) & d[5])), f.push(128 + (m & d[6]));
                      else if (m < 55296 || (m > 57343 && m <= 65535))
                        f.push(224 + ((m >> 12) & d[4])),
                          f.push(128 + ((m >> 6) & d[6])),
                          f.push(128 + (m & d[6]));
                      else {
                        if (!(m >= 65536 && m <= 1114111))
                          throw new RangeError(`utf8.encode: character out of range: char: ${m}`);
                        {
                          const x = (m >> 16) & d[5];
                          f.push(240 + (x >> 2)),
                            f.push(128 + ((x & d[2]) << 4) + ((m >> 12) & d[4])),
                            f.push(128 + ((m >> 6) & d[6])),
                            f.push(128 + (m & d[6]));
                        }
                      }
                    }),
                    n.from(f)
                  );
                },
                decode(p, f) {
                  function m(ne, R) {
                    if ((192 & R) != 128) return i;
                    const L = ((ne & d[5]) << 6) + (R & d[6]);
                    return L < 128 ? o : L;
                  }
                  function x(ne, R, L) {
                    if ((192 & L) != 128 || (192 & R) != 128) return i;
                    const C = ((ne & d[4]) << 12) + ((R & d[6]) << 6) + (L & d[6]);
                    return C < 2048 ? o : C >= 55296 && C <= 57343 ? u : C;
                  }
                  function I(ne, R, L, C) {
                    if ((192 & C) != 128 || (192 & L) != 128 || (192 & R) != 128) return i;
                    const H =
                      ((((ne & d[3]) << 2) + ((R >> 4) & d[2])) << 16) +
                      ((R & d[4]) << 12) +
                      ((L & d[6]) << 6) +
                      (C & d[6]);
                    return H < 65536 ? o : H > 1114111 ? u : H;
                  }
                  let _, E, O, U, pe, X;
                  const se = p.length;
                  let ge = f ? 3 : 0;
                  const J = [];
                  for (; ge < se; ) {
                    (E = p[ge]), (_ = l);
                    const ne = !0;
                    for (; ne; ) {
                      if (E >= 0 && E <= 127) {
                        (_ = E), (X = 1);
                        break;
                      }
                      if (((O = ge + 1), O < se && E >= 194 && E <= 223)) {
                        (_ = m(E, p[O])), (X = 2);
                        break;
                      }
                      if (((U = ge + 2), U < se && E >= 224 && E <= 239)) {
                        (_ = x(E, p[O], p[U])), (X = 3);
                        break;
                      }
                      if (((pe = ge + 3), pe < se && E >= 240 && E <= 244)) {
                        (_ = I(E, p[O], p[U], p[pe])), (X = 4);
                        break;
                      }
                      break;
                    }
                    if (_ > 1114111) {
                      const R = `byte[${ge}]`;
                      throw _ === l
                        ? new RangeError(
                            `utf8.decode: ill-formed UTF8 byte sequence found at: ${R}`
                          )
                        : _ === i
                          ? new RangeError(`utf8.decode: illegal trailing byte found at: ${R}`)
                          : _ === u
                            ? new RangeError(`utf8.decode: code point out of range found at: ${R}`)
                            : _ === o
                              ? new RangeError(`utf8.decode: non-shortest form found at: ${R}`)
                              : new RangeError(`utf8.decode: unrecognized error found at: ${R}`);
                    }
                    J.push(_), (ge += X);
                  }
                  return J;
                },
              }),
              (s.utf16be = {
                encode(p) {
                  const f = [];
                  let m, x, I;
                  for (let _ = 0; _ < p.length; _ += 1)
                    if (((m = p[_]), (m >= 0 && m <= 55295) || (m >= 57344 && m <= 65535)))
                      f.push((m >> 8) & d[8]), f.push(m & d[8]);
                    else {
                      if (!(m >= 65536 && m <= 1114111))
                        throw new RangeError(
                          `utf16be.encode: UTF16BE value out of range: char[${_}]: ${m}`
                        );
                      (I = m - 65536),
                        (x = 55296 + (I >> 10)),
                        (I = 56320 + (I & d[10])),
                        f.push((x >> 8) & d[8]),
                        f.push(x & d[8]),
                        f.push((I >> 8) & d[8]),
                        f.push(I & d[8]);
                    }
                  return n.from(f);
                },
                decode(p, f) {
                  if (p.length % 2 > 0)
                    throw new RangeError(
                      `utf16be.decode: data length must be even multiple of 2: length: ${p.length}`
                    );
                  const m = [],
                    x = p.length;
                  let I,
                    _,
                    E,
                    O,
                    U,
                    pe,
                    X = f ? 2 : 0,
                    se = 0;
                  for (; X < x; ) {
                    for (;;) {
                      if (((E = X + 1), E < x)) {
                        if (((U = (p[X] << 8) + p[E]), U < 55296 || U > 57343)) {
                          (I = U), (_ = 2);
                          break;
                        }
                        if (
                          ((O = X + 3),
                          O < x &&
                            ((pe = (p[X + 2] << 8) + p[O]),
                            U <= 56319 && pe >= 56320 && pe <= 57343))
                        ) {
                          (I = 65536 + ((U - 55296) << 10) + (pe - 56320)), (_ = 4);
                          break;
                        }
                      }
                      throw new RangeError(
                        `utf16be.decode: ill-formed UTF16BE byte sequence found: byte[${X}]`
                      );
                    }
                    (m[se++] = I), (X += _);
                  }
                  return m;
                },
              }),
              (s.utf16le = {
                encode(p) {
                  const f = [];
                  let m, x, I;
                  for (let _ = 0; _ < p.length; _ += 1)
                    if (((m = p[_]), (m >= 0 && m <= 55295) || (m >= 57344 && m <= 65535)))
                      f.push(m & d[8]), f.push((m >> 8) & d[8]);
                    else {
                      if (!(m >= 65536 && m <= 1114111))
                        throw new RangeError(
                          `utf16le.encode: UTF16LE value out of range: char[${_}]: ${m}`
                        );
                      (I = m - 65536),
                        (x = 55296 + (I >> 10)),
                        (I = 56320 + (I & d[10])),
                        f.push(x & d[8]),
                        f.push((x >> 8) & d[8]),
                        f.push(I & d[8]),
                        f.push((I >> 8) & d[8]);
                    }
                  return n.from(f);
                },
                decode(p, f) {
                  if (p.length % 2 > 0)
                    throw new RangeError(
                      `utf16le.decode: data length must be even multiple of 2: length: ${p.length}`
                    );
                  const m = [],
                    x = p.length;
                  let I,
                    _,
                    E,
                    O,
                    U,
                    pe,
                    X = f ? 2 : 0,
                    se = 0;
                  for (; X < x; ) {
                    for (;;) {
                      if (((E = X + 1), E < x)) {
                        if (((U = (p[E] << 8) + p[X]), U < 55296 || U > 57343)) {
                          (I = U), (_ = 2);
                          break;
                        }
                        if (
                          ((O = X + 3),
                          O < x &&
                            ((pe = (p[O] << 8) + p[X + 2]),
                            U <= 56319 && pe >= 56320 && pe <= 57343))
                        ) {
                          (I = 65536 + ((U - 55296) << 10) + (pe - 56320)), (_ = 4);
                          break;
                        }
                      }
                      throw new RangeError(
                        `utf16le.decode: ill-formed UTF16LE byte sequence found: byte[${X}]`
                      );
                    }
                    (m[se++] = I), (X += _);
                  }
                  return m;
                },
              }),
              (s.utf32be = {
                encode(p) {
                  const f = n.alloc(4 * p.length);
                  let m = 0;
                  return (
                    p.forEach((x) => {
                      if ((x >= 55296 && x <= 57343) || x > 1114111)
                        throw new RangeError(
                          `utf32be.encode: UTF32BE character code out of range: char[${m / 4}]: ${x}`
                        );
                      (f[m++] = (x >> 24) & d[8]),
                        (f[m++] = (x >> 16) & d[8]),
                        (f[m++] = (x >> 8) & d[8]),
                        (f[m++] = x & d[8]);
                    }),
                    f
                  );
                },
                decode(p, f) {
                  if (p.length % 4 > 0)
                    throw new RangeError(
                      `utf32be.decode: UTF32BE byte length must be even multiple of 4: length: ${p.length}`
                    );
                  const m = [];
                  let x = f ? 4 : 0;
                  for (; x < p.length; x += 4) {
                    const I = (p[x] << 24) + (p[x + 1] << 16) + (p[x + 2] << 8) + p[x + 3];
                    if ((I >= 55296 && I <= 57343) || I > 1114111)
                      throw new RangeError(
                        `utf32be.decode: UTF32BE character code out of range: char[${x / 4}]: ${I}`
                      );
                    m.push(I);
                  }
                  return m;
                },
              }),
              (s.utf32le = {
                encode(p) {
                  const f = n.alloc(4 * p.length);
                  let m = 0;
                  return (
                    p.forEach((x) => {
                      if ((x >= 55296 && x <= 57343) || x > 1114111)
                        throw new RangeError(
                          `utf32le.encode: UTF32LE character code out of range: char[${m / 4}]: ${x}`
                        );
                      (f[m++] = x & d[8]),
                        (f[m++] = (x >> 8) & d[8]),
                        (f[m++] = (x >> 16) & d[8]),
                        (f[m++] = (x >> 24) & d[8]);
                    }),
                    f
                  );
                },
                decode(p, f) {
                  if (p.length % 4 > 0)
                    throw new RangeError(
                      `utf32be.decode: UTF32LE byte length must be even multiple of 4: length: ${p.length}`
                    );
                  const m = [];
                  let x = f ? 4 : 0;
                  for (; x < p.length; x += 4) {
                    const I = (p[x + 3] << 24) + (p[x + 2] << 16) + (p[x + 1] << 8) + p[x];
                    if ((I >= 55296 && I <= 57343) || I > 1114111)
                      throw new RangeError(
                        `utf32le.encode: UTF32LE character code out of range: char[${x / 4}]: ${I}`
                      );
                    m.push(I);
                  }
                  return m;
                },
              }),
              (s.uint7 = {
                encode(p) {
                  const f = n.alloc(p.length);
                  for (let m = 0; m < p.length; m += 1) {
                    if (p[m] > 127)
                      throw new RangeError(
                        `uint7.encode: UINT7 character code out of range: char[${m}]: ${p[m]}`
                      );
                    f[m] = p[m];
                  }
                  return f;
                },
                decode(p) {
                  const f = [];
                  for (let m = 0; m < p.length; m += 1) {
                    if (p[m] > 127)
                      throw new RangeError(
                        `uint7.decode: UINT7 character code out of range: byte[${m}]: ${p[m]}`
                      );
                    f[m] = p[m];
                  }
                  return f;
                },
              }),
              (s.uint8 = {
                encode(p) {
                  const f = n.alloc(p.length);
                  for (let m = 0; m < p.length; m += 1) {
                    if (p[m] > 255)
                      throw new RangeError(
                        `uint8.encode: UINT8 character code out of range: char[${m}]: ${p[m]}`
                      );
                    f[m] = p[m];
                  }
                  return f;
                },
                decode(p) {
                  const f = [];
                  for (let m = 0; m < p.length; m += 1) f[m] = p[m];
                  return f;
                },
              }),
              (s.uint16be = {
                encode(p) {
                  const f = n.alloc(2 * p.length);
                  let m = 0;
                  return (
                    p.forEach((x) => {
                      if (x > 65535)
                        throw new RangeError(
                          `uint16be.encode: UINT16BE character code out of range: char[${m / 2}]: ${x}`
                        );
                      (f[m++] = (x >> 8) & d[8]), (f[m++] = x & d[8]);
                    }),
                    f
                  );
                },
                decode(p) {
                  if (p.length % 2 > 0)
                    throw new RangeError(
                      `uint16be.decode: UINT16BE byte length must be even multiple of 2: length: ${p.length}`
                    );
                  const f = [];
                  for (let m = 0; m < p.length; m += 2) f.push((p[m] << 8) + p[m + 1]);
                  return f;
                },
              }),
              (s.uint16le = {
                encode(p) {
                  const f = n.alloc(2 * p.length);
                  let m = 0;
                  return (
                    p.forEach((x) => {
                      if (x > 65535)
                        throw new RangeError(
                          `uint16le.encode: UINT16LE character code out of range: char[${m / 2}]: ${x}`
                        );
                      (f[m++] = x & d[8]), (f[m++] = (x >> 8) & d[8]);
                    }),
                    f
                  );
                },
                decode(p) {
                  if (p.length % 2 > 0)
                    throw new RangeError(
                      `uint16le.decode: UINT16LE byte length must be even multiple of 2: length: ${p.length}`
                    );
                  const f = [];
                  for (let m = 0; m < p.length; m += 2) f.push((p[m + 1] << 8) + p[m]);
                  return f;
                },
              }),
              (s.uint32be = {
                encode(p) {
                  const f = n.alloc(4 * p.length);
                  let m = 0;
                  return (
                    p.forEach((x) => {
                      (f[m++] = (x >> 24) & d[8]),
                        (f[m++] = (x >> 16) & d[8]),
                        (f[m++] = (x >> 8) & d[8]),
                        (f[m++] = x & d[8]);
                    }),
                    f
                  );
                },
                decode(p) {
                  if (p.length % 4 > 0)
                    throw new RangeError(
                      `uint32be.decode: UINT32BE byte length must be even multiple of 4: length: ${p.length}`
                    );
                  const f = [];
                  for (let m = 0; m < p.length; m += 4)
                    f.push((p[m] << 24) + (p[m + 1] << 16) + (p[m + 2] << 8) + p[m + 3]);
                  return f;
                },
              }),
              (s.uint32le = {
                encode(p) {
                  const f = n.alloc(4 * p.length);
                  let m = 0;
                  return (
                    p.forEach((x) => {
                      (f[m++] = x & d[8]),
                        (f[m++] = (x >> 8) & d[8]),
                        (f[m++] = (x >> 16) & d[8]),
                        (f[m++] = (x >> 24) & d[8]);
                    }),
                    f
                  );
                },
                decode(p) {
                  if (p.length % 4 > 0)
                    throw new RangeError(
                      `uint32le.decode: UINT32LE byte length must be even multiple of 4: length: ${p.length}`
                    );
                  const f = [];
                  for (let m = 0; m < p.length; m += 4)
                    f.push((p[m + 3] << 24) + (p[m + 2] << 16) + (p[m + 1] << 8) + p[m]);
                  return f;
                },
              }),
              (s.string = {
                encode: (p) => r.utf16le.encode(p).toString('utf16le'),
                decode: (p) => r.utf16le.decode(n.from(p, 'utf16le'), 0),
              }),
              (s.escaped = {
                encode(p) {
                  const f = [];
                  for (let m = 0; m < p.length; m += 1) {
                    const x = p[m];
                    if (x === 96) f.push(x), f.push(x);
                    else if (x === 10) f.push(x);
                    else if (x >= 32 && x <= 126) f.push(x);
                    else {
                      let I = '';
                      if (x >= 0 && x <= 31) I += `\`x${h[x]}`;
                      else if (x >= 127 && x <= 255) I += `\`x${h[x]}`;
                      else if (x >= 256 && x <= 65535)
                        I += `\`u${h[(x >> 8) & d[8]]}${h[x & d[8]]}`;
                      else {
                        if (!(x >= 65536 && x <= 4294967295))
                          throw new Error('escape.encode(char): char > 0xffffffff not allowed');
                        {
                          I += '`u{';
                          const _ = (x >> 24) & d[8];
                          _ > 0 && (I += h[_]),
                            (I += `${h[(x >> 16) & d[8]] + h[(x >> 8) & d[8]] + h[x & d[8]]}}`);
                        }
                      }
                      n.from(I).forEach((_) => {
                        f.push(_);
                      });
                    }
                  }
                  return n.from(f);
                },
                decode(p) {
                  function f(se) {
                    return (
                      (se >= 48 && se <= 57) || (se >= 65 && se <= 70) || (se >= 97 && se <= 102)
                    );
                  }
                  function m(se, ge, J) {
                    const ne = { char: null, nexti: se + 2, error: !0 };
                    if (se + 1 < ge && f(J[se]) && f(J[se + 1])) {
                      const R = String.fromCodePoint(J[se], J[se + 1]);
                      (ne.char = parseInt(R, 16)), Number.isNaN(ne.char) || (ne.error = !1);
                    }
                    return ne;
                  }
                  function x(se, ge, J) {
                    const ne = { char: null, nexti: se + 4, error: !0 };
                    if (se + 3 < ge && f(J[se]) && f(J[se + 1]) && f(J[se + 2]) && f(J[se + 3])) {
                      const R = String.fromCodePoint(J[se], J[se + 1], J[se + 2], J[se + 3]);
                      (ne.char = parseInt(R, 16)), Number.isNaN(ne.char) || (ne.error = !1);
                    }
                    return ne;
                  }
                  function I(se, ge, J) {
                    const ne = { char: null, nexti: se + 4, error: !0 };
                    let R = '';
                    for (; se < ge && f(J[se]); ) (R += String.fromCodePoint(J[se])), (se += 1);
                    return (
                      (ne.char = parseInt(R, 16)),
                      J[se] !== 125 || Number.isNaN(ne.char) || (ne.error = !1),
                      (ne.nexti = se + 1),
                      ne
                    );
                  }
                  const _ = [],
                    E = p.length;
                  let O,
                    U,
                    pe,
                    X = 0;
                  for (; X < E; ) {
                    for (;;) {
                      if (((pe = !0), p[X] !== 96)) {
                        _.push(p[X]), (X += 1), (pe = !1);
                        break;
                      }
                      if (((O = X + 1), O >= E)) break;
                      if (p[O] === 96) {
                        _.push(96), (X += 2), (pe = !1);
                        break;
                      }
                      if (p[O] === 120) {
                        if (((U = m(O + 1, E, p)), U.error)) break;
                        _.push(U.char), (X = U.nexti), (pe = !1);
                        break;
                      }
                      if (p[O] === 117) {
                        if (p[O + 1] === 123) {
                          if (((U = I(O + 2, E, p)), U.error)) break;
                          _.push(U.char), (X = U.nexti), (pe = !1);
                          break;
                        }
                        if (((U = x(O + 1, E, p)), U.error)) break;
                        _.push(U.char), (X = U.nexti), (pe = !1);
                        break;
                      }
                      break;
                    }
                    if (pe)
                      throw new Error(`escaped.decode: ill-formed escape sequence at buf[${X}]`);
                  }
                  return _;
                },
              });
            const w = 10;
            (s.lineEnds = {
              crlf(p) {
                const f = [];
                let m = 0;
                for (; m < p.length; )
                  switch (p[m]) {
                    case 13:
                      m + 1 < p.length && p[m + 1] === w ? (m += 2) : (m += 1),
                        f.push(13),
                        f.push(w);
                      break;
                    case w:
                      f.push(13), f.push(w), (m += 1);
                      break;
                    default:
                      f.push(p[m]), (m += 1);
                  }
                return f.length > 0 && f[f.length - 1] !== w && (f.push(13), f.push(w)), f;
              },
              lf(p) {
                const f = [];
                let m = 0;
                for (; m < p.length; )
                  switch (p[m]) {
                    case 13:
                      m + 1 < p.length && p[m + 1] === w ? (m += 2) : (m += 1), f.push(w);
                      break;
                    case w:
                      f.push(w), (m += 1);
                      break;
                    default:
                      f.push(p[m]), (m += 1);
                  }
                return f.length > 0 && f[f.length - 1] !== w && f.push(w), f;
              },
            }),
              (s.base64 = {
                encode(p) {
                  if (p.length === 0) return n.alloc(0);
                  let f,
                    m,
                    x,
                    I = p.length % 3;
                  I = I > 0 ? 3 - I : 0;
                  let _ = (p.length + I) / 3;
                  const E = n.alloc(4 * _);
                  I > 0 && (_ -= 1), (f = 0), (m = 0);
                  for (let O = 0; O < _; O += 1)
                    (x = p[f++] << 16),
                      (x += p[f++] << 8),
                      (x += p[f++]),
                      (E[m++] = b[(x >> 18) & d[6]]),
                      (E[m++] = b[(x >> 12) & d[6]]),
                      (E[m++] = b[(x >> 6) & d[6]]),
                      (E[m++] = b[x & d[6]]);
                  return I === 0
                    ? E
                    : I === 1
                      ? ((x = p[f++] << 16),
                        (x += p[f] << 8),
                        (E[m++] = b[(x >> 18) & d[6]]),
                        (E[m++] = b[(x >> 12) & d[6]]),
                        (E[m++] = b[(x >> 6) & d[6]]),
                        (E[m] = b[64]),
                        E)
                      : I === 2
                        ? ((x = p[f] << 16),
                          (E[m++] = b[(x >> 18) & d[6]]),
                          (E[m++] = b[(x >> 12) & d[6]]),
                          (E[m++] = b[64]),
                          (E[m] = b[64]),
                          E)
                        : void 0;
                },
                decode(p) {
                  if (p.length === 0) return n.alloc(0);
                  const f = (function (pe) {
                      const X = [];
                      let se = 0;
                      for (let ge = 0; ge < pe.length; ge += 1) {
                        const J = pe[ge];
                        for (; J !== 32 && J !== 9 && J !== 10 && J !== 13; ) {
                          if (J >= 65 && J <= 90) {
                            X.push(J - 65);
                            break;
                          }
                          if (J >= 97 && J <= 122) {
                            X.push(J - 71);
                            break;
                          }
                          if (J >= 48 && J <= 57) {
                            X.push(J + 4);
                            break;
                          }
                          if (J === 43) {
                            X.push(62);
                            break;
                          }
                          if (J === 47) {
                            X.push(63);
                            break;
                          }
                          if (J === 61) {
                            X.push(64), (se += 1);
                            break;
                          }
                          throw new RangeError(`base64.decode: invalid character buf[${ge}]: ${J}`);
                        }
                      }
                      if (X.length % 4 > 0)
                        throw new RangeError(
                          `base64.decode: string length not integral multiple of 4: ${X.length}`
                        );
                      switch (se) {
                        case 0:
                          break;
                        case 1:
                          if (X[X.length - 1] !== 64)
                            throw new RangeError(
                              'base64.decode: one tail character found: not last character'
                            );
                          break;
                        case 2:
                          if (X[X.length - 1] !== 64 || X[X.length - 2] !== 64)
                            throw new RangeError(
                              'base64.decode: two tail characters found: not last characters'
                            );
                          break;
                        default:
                          throw new RangeError(
                            `base64.decode: more than two tail characters found: ${se}`
                          );
                      }
                      return { tail: se, buf: n.from(X) };
                    })(p),
                    { tail: m } = f,
                    x = f.buf;
                  let I,
                    _,
                    E,
                    O = x.length / 4;
                  const U = n.alloc(3 * O - m);
                  m > 0 && (O -= 1), (_ = 0), (I = 0);
                  for (let pe = 0; pe < O; pe += 1)
                    (E = x[I++] << 18),
                      (E += x[I++] << 12),
                      (E += x[I++] << 6),
                      (E += x[I++]),
                      (U[_++] = (E >> 16) & d[8]),
                      (U[_++] = (E >> 8) & d[8]),
                      (U[_++] = E & d[8]);
                  return (
                    m === 1 &&
                      ((E = x[I++] << 18),
                      (E += x[I++] << 12),
                      (E += x[I] << 6),
                      (U[_++] = (E >> 16) & d[8]),
                      (U[_] = (E >> 8) & d[8])),
                    m === 2 && ((E = x[I++] << 18), (E += x[I++] << 12), (U[_] = (E >> 16) & d[8])),
                    U
                  );
                },
                toString(p) {
                  if (p.length % 4 > 0)
                    throw new RangeError(
                      `base64.toString: input buffer length not multiple of 4: ${p.length}`
                    );
                  let f = '',
                    m = 0;
                  function x(_, E, O, U) {
                    switch (m) {
                      case 76:
                        (f += `\r
${_}${E}${O}${U}`),
                          (m = 4);
                        break;
                      case 75:
                        (f += `${_}\r
${E}${O}${U}`),
                          (m = 3);
                        break;
                      case 74:
                        (f += `${_ + E}\r
${O}${U}`),
                          (m = 2);
                        break;
                      case 73:
                        (f += `${_ + E + O}\r
${U}`),
                          (m = 1);
                        break;
                      default:
                        (f += _ + E + O + U), (m += 4);
                    }
                  }
                  for (let _ = 0; _ < p.length; _ += 4) {
                    for (let E = _; E < _ + 4; E += 1)
                      if (
                        !(
                          ((I = p[E]) >= 65 && I <= 90) ||
                          (I >= 97 && I <= 122) ||
                          (I >= 48 && I <= 57) ||
                          I === 43 ||
                          I === 47 ||
                          I === 61
                        )
                      )
                        throw new RangeError(
                          `base64.toString: buf[${E}]: ${p[E]} : not valid base64 character code`
                        );
                    x(
                      String.fromCharCode(p[_]),
                      String.fromCharCode(p[_ + 1]),
                      String.fromCharCode(p[_ + 2]),
                      String.fromCharCode(p[_ + 3])
                    );
                  }
                  var I;
                  return f;
                },
              });
          }).call(this);
        }).call(this, e('buffer').Buffer);
      },
      { buffer: 2 },
    ],
    7: [
      function (e, t, s) {
        t.exports = function () {
          const n = e('./identifiers'),
            r = e('./utilities'),
            o = this;
          let i = null,
            u = null,
            l = null,
            d = 0;
          const h = [],
            y = [],
            b = [],
            w = [];
          function p(f) {
            let m = '';
            for (let x = 0; x < f; x += 1) m += ' ';
            return m;
          }
          (this.callbacks = []),
            (this.astObject = 'astObject'),
            (this.init = function (f, m, x) {
              let I;
              (b.length = 0), (w.length = 0), (h.length = 0), (d = 0), (i = f), (u = m), (l = x);
              const _ = [];
              for (I = 0; I < i.length; I += 1) _.push(i[I].lower);
              for (I = 0; I < u.length; I += 1) _.push(u[I].lower);
              for (d = i.length + u.length, I = 0; I < d; I += 1) (h[I] = !1), (y[I] = null);
              for (const E in o.callbacks) {
                const O = E.toLowerCase();
                if (((I = _.indexOf(O)), I < 0))
                  throw new Error(`ast.js: init: node '${E}' not a rule or udt name`);
                typeof o.callbacks[E] == 'function' && ((h[I] = !0), (y[I] = o.callbacks[E])),
                  o.callbacks[E] === !0 && (h[I] = !0);
              }
            }),
            (this.ruleDefined = function (f) {
              return h[f] !== !1;
            }),
            (this.udtDefined = function (f) {
              return h[i.length + f] !== !1;
            }),
            (this.down = function (f, m) {
              const x = w.length;
              return (
                b.push(x),
                w.push({
                  name: m,
                  thisIndex: x,
                  thatIndex: null,
                  state: n.SEM_PRE,
                  callbackIndex: f,
                  phraseIndex: null,
                  phraseLength: null,
                  stack: b.length,
                }),
                x
              );
            }),
            (this.up = function (f, m, x, I) {
              const _ = w.length,
                E = b.pop();
              return (
                w.push({
                  name: m,
                  thisIndex: _,
                  thatIndex: E,
                  state: n.SEM_POST,
                  callbackIndex: f,
                  phraseIndex: x,
                  phraseLength: I,
                  stack: b.length,
                }),
                (w[E].thatIndex = _),
                (w[E].phraseIndex = x),
                (w[E].phraseLength = I),
                _
              );
            }),
            (this.translate = function (f) {
              let m, x, I;
              for (let _ = 0; _ < w.length; _ += 1)
                (I = w[_]),
                  (x = y[I.callbackIndex]),
                  I.state === n.SEM_PRE
                    ? x !== null &&
                      ((m = x(n.SEM_PRE, l, I.phraseIndex, I.phraseLength, f)),
                      m === n.SEM_SKIP && (_ = I.thatIndex))
                    : x !== null && x(n.SEM_POST, l, I.phraseIndex, I.phraseLength, f);
            }),
            (this.setLength = function (f) {
              (w.length = f), (b.length = f > 0 ? w[f - 1].stack : 0);
            }),
            (this.getLength = function () {
              return w.length;
            }),
            (this.toXml = function (f) {
              let m = r.charsToDec,
                x = 'decimal integer character codes';
              if (typeof f == 'string' && f.length >= 3) {
                const E = f.slice(0, 3).toLowerCase();
                E === 'asc'
                  ? ((m = r.charsToAscii),
                    (x = 'ASCII for printing characters, hex for non-printing'))
                  : E === 'hex'
                    ? ((m = r.charsToHex), (x = 'hexadecimal integer character codes'))
                    : E === 'uni' &&
                      ((m = r.charsToUnicode), (x = 'Unicode UTF-32 integer character codes'));
              }
              let I = '',
                _ = 0;
              return (
                (I += `<?xml version="1.0" encoding="utf-8"?>
`),
                (I += `<root nodes="${w.length / 2}" characters="${l.length}">
`),
                (I += `<!-- input string, ${x} -->
`),
                (I += p(_ + 2)),
                (I += m(l)),
                (I += `
`),
                w.forEach((E) => {
                  E.state === n.SEM_PRE
                    ? ((_ += 1),
                      (I += p(_)),
                      (I += `<node name="${E.name}" index="${E.phraseIndex}" length="${E.phraseLength}">
`),
                      (I += p(_ + 2)),
                      (I += m(l, E.phraseIndex, E.phraseLength)),
                      (I += `
`))
                    : ((I += p(_)),
                      (I += `</node><!-- name="${E.name}" -->
`),
                      (_ -= 1));
                }),
                (I += `</root>
`),
                I
              );
            }),
            (this.phrases = function () {
              const f = {};
              let m, x;
              for (m = 0; m < w.length; m += 1)
                (x = w[m]),
                  x.state === n.SEM_PRE &&
                    (Array.isArray(f[x.name]) || (f[x.name] = []),
                    f[x.name].push({ index: x.phraseIndex, length: x.phraseLength }));
              return f;
            });
        };
      },
      { './identifiers': 10, './utilities': 16 },
    ],
    8: [
      function (e, t, s) {
        t.exports = function () {
          let n = -1,
            r = 0;
          (this.init = function (o) {
            if (typeof o != 'number' || o <= 0)
              throw new Error('circular-buffer.js: init: circular buffer size must an integer > 0');
            (r = Math.ceil(o)), (n = -1);
          }),
            (this.increment = function () {
              return (n += 1), (n + r) % r;
            }),
            (this.maxSize = function () {
              return r;
            }),
            (this.items = function () {
              return n + 1;
            }),
            (this.getListIndex = function (o) {
              return n === -1 || o < 0 || o > n || n - o >= r ? -1 : (o + r) % r;
            }),
            (this.forEach = function (o) {
              if (n !== -1)
                if (n < r) for (let i = 0; i <= n; i += 1) o(i, i);
                else for (let i = n - r + 1; i <= n; i += 1) o((i + r) % r, i);
            });
        };
      },
      {},
    ],
    9: [
      function (e, t, s) {
        t.exports = function () {
          return `/* This file automatically generated by jsonToless() and LESS. */
.apg-mono {
  font-family: monospace;
}
.apg-active {
  font-weight: bold;
  color: #000000;
}
.apg-match {
  font-weight: bold;
  color: #264BFF;
}
.apg-empty {
  font-weight: bold;
  color: #0fbd0f;
}
.apg-nomatch {
  font-weight: bold;
  color: #FF4000;
}
.apg-lh-match {
  font-weight: bold;
  color: #1A97BA;
}
.apg-lb-match {
  font-weight: bold;
  color: #5F1687;
}
.apg-remainder {
  font-weight: bold;
  color: #999999;
}
.apg-ctrl-char {
  font-weight: bolder;
  font-style: italic;
  font-size: 0.6em;
}
.apg-line-end {
  font-weight: bold;
  color: #000000;
}
.apg-error {
  font-weight: bold;
  color: #FF4000;
}
.apg-phrase {
  color: #000000;
  background-color: #8caae6;
}
.apg-empty-phrase {
  color: #0fbd0f;
}
table.apg-state {
  font-family: monospace;
  margin-top: 5px;
  font-size: 11px;
  line-height: 130%;
  text-align: left;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-state th,
table.apg-state td {
  text-align: left;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-state th:nth-last-child(2),
table.apg-state td:nth-last-child(2) {
  text-align: right;
}
table.apg-state caption {
  font-size: 125%;
  line-height: 130%;
  font-weight: bold;
  text-align: left;
}
table.apg-stats {
  font-family: monospace;
  margin-top: 5px;
  font-size: 11px;
  line-height: 130%;
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-stats th,
table.apg-stats td {
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-stats caption {
  font-size: 125%;
  line-height: 130%;
  font-weight: bold;
  text-align: left;
}
table.apg-trace {
  font-family: monospace;
  margin-top: 5px;
  font-size: 11px;
  line-height: 130%;
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-trace caption {
  font-size: 125%;
  line-height: 130%;
  font-weight: bold;
  text-align: left;
}
table.apg-trace th,
table.apg-trace td {
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-trace th:last-child,
table.apg-trace th:nth-last-child(2),
table.apg-trace td:last-child,
table.apg-trace td:nth-last-child(2) {
  text-align: left;
}
table.apg-grammar {
  font-family: monospace;
  margin-top: 5px;
  font-size: 11px;
  line-height: 130%;
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-grammar caption {
  font-size: 125%;
  line-height: 130%;
  font-weight: bold;
  text-align: left;
}
table.apg-grammar th,
table.apg-grammar td {
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-grammar th:last-child,
table.apg-grammar td:last-child {
  text-align: left;
}
table.apg-rules {
  font-family: monospace;
  margin-top: 5px;
  font-size: 11px;
  line-height: 130%;
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-rules caption {
  font-size: 125%;
  line-height: 130%;
  font-weight: bold;
  text-align: left;
}
table.apg-rules th,
table.apg-rules td {
  text-align: right;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-rules a {
  color: #003399 !important;
}
table.apg-rules a:hover {
  color: #8caae6 !important;
}
table.apg-attrs {
  font-family: monospace;
  margin-top: 5px;
  font-size: 11px;
  line-height: 130%;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-attrs caption {
  font-size: 125%;
  line-height: 130%;
  font-weight: bold;
  text-align: left;
}
table.apg-attrs th,
table.apg-attrs td {
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
}
table.apg-attrs th:nth-child(1),
table.apg-attrs th:nth-child(2),
table.apg-attrs th:nth-child(3) {
  text-align: right;
}
table.apg-attrs td:nth-child(1),
table.apg-attrs td:nth-child(2),
table.apg-attrs td:nth-child(3) {
  text-align: right;
}
table.apg-attrs a {
  color: #003399 !important;
}
table.apg-attrs a:hover {
  color: #8caae6 !important;
}
`;
        };
      },
      {},
    ],
    10: [
      function (e, t, s) {
        t.exports = {
          ALT: 1,
          CAT: 2,
          REP: 3,
          RNM: 4,
          TRG: 5,
          TBS: 6,
          TLS: 7,
          UDT: 11,
          AND: 12,
          NOT: 13,
          BKR: 14,
          BKA: 15,
          BKN: 16,
          ABG: 17,
          AEN: 18,
          ACTIVE: 100,
          MATCH: 101,
          EMPTY: 102,
          NOMATCH: 103,
          SEM_PRE: 200,
          SEM_POST: 201,
          SEM_OK: 300,
          SEM_SKIP: 301,
          ATTR_N: 400,
          ATTR_R: 401,
          ATTR_MR: 402,
          LOOKAROUND_NONE: 500,
          LOOKAROUND_AHEAD: 501,
          LOOKAROUND_BEHIND: 502,
          BKR_MODE_UM: 601,
          BKR_MODE_PM: 602,
          BKR_MODE_CS: 603,
          BKR_MODE_CI: 604,
        };
      },
      {},
    ],
    11: [
      function (e, t, s) {
        t.exports = {
          ast: e('./ast'),
          circular: e('./circular-buffer'),
          ids: e('./identifiers'),
          parser: e('./parser'),
          stats: e('./stats'),
          trace: e('./trace'),
          utils: e('./utilities'),
          emitcss: e('./emitcss'),
          style: e('./style'),
        };
      },
      {
        './ast': 7,
        './circular-buffer': 8,
        './emitcss': 9,
        './identifiers': 10,
        './parser': 12,
        './stats': 13,
        './style': 14,
        './trace': 15,
        './utilities': 16,
      },
    ],
    12: [
      function (e, t, s) {
        t.exports = function () {
          const n = e('./identifiers'),
            r = e('./utilities'),
            o = this;
          let i;
          (this.ast = null), (this.stats = null), (this.trace = null), (this.callbacks = []);
          let u,
            l,
            d,
            h,
            y = null,
            b = null,
            w = 0,
            p = 0,
            f = 0,
            m = null,
            x = null,
            I = null,
            _ = null,
            E = null,
            O = 0,
            U = 1 / 0,
            pe = 1 / 0;
          const X = function (P, a, c) {
              const g = 'parser.js: evaluateRule(): ';
              if (P >= I.length) throw new Error(`${g}rule index: ${P} out of range`);
              if (a >= d) throw new Error(`${g}phrase index: ${a} out of range`);
              const { length: S } = y;
              y.push({ type: n.RNM, index: P }), i(S, a, c), y.pop();
            },
            se = function (P, a, c) {
              const g = 'parser.js: evaluateUdt(): ';
              if (P >= _.length) throw new Error(`${g}udt index: ${P} out of range`);
              if (a >= d) throw new Error(`${g}phrase index: ${a} out of range`);
              const { length: S } = y;
              y.push({ type: n.UDT, empty: _[P].empty, index: P }), i(S, a, c), y.pop();
            },
            ge = function () {
              (w = 0),
                (p = 0),
                (f = 0),
                (O = 0),
                (h = [{ lookAround: n.LOOKAROUND_NONE, anchor: 0, charsEnd: 0, charsLength: 0 }]),
                (I = null),
                (_ = null),
                (b = null),
                (u = 0),
                (l = 0),
                (d = 0),
                (m = null),
                (x = null),
                (E = null),
                (y = null);
            },
            J = function () {
              const P = [];
              (this.push = function () {
                P.push(
                  (function () {
                    const a = P[P.length - 1],
                      c = {};
                    for (const g in a) c[g] = a[g];
                    return c;
                  })()
                );
              }),
                (this.pop = function (a) {
                  let c = a;
                  if ((c || (c = P.length - 1), c < 1 || c > P.length))
                    throw new Error(`parser.js: backRef.pop(): bad length: ${c}`);
                  return (P.length = c), P[P.length - 1];
                }),
                (this.length = function () {
                  return P.length;
                }),
                (this.savePhrase = function (a, c, g) {
                  P[P.length - 1][a] = { phraseIndex: c, phraseLength: g };
                }),
                (this.getPhrase = function (a) {
                  return P[P.length - 1][a];
                }),
                (function () {
                  const a = {};
                  I.forEach((c) => {
                    c.isBkr && (a[c.lower] = null);
                  }),
                    _.length > 0 &&
                      _.forEach((c) => {
                        c.isBkr && (a[c.lower] = null);
                      }),
                    P.push(a);
                })();
            },
            ne = function () {
              const P = this;
              (this.state = n.ACTIVE),
                (this.phraseLength = 0),
                (this.ruleIndex = 0),
                (this.udtIndex = 0),
                (this.lookAround = h[h.length - 1]),
                (this.uFrame = new J()),
                (this.pFrame = new J()),
                (this.evaluateRule = X),
                (this.evaluateUdt = se),
                (this.refresh = function () {
                  (P.state = n.ACTIVE), (P.phraseLength = 0), (P.lookAround = h[h.length - 1]);
                });
            },
            R = function () {
              return h[h.length - 1];
            },
            L = function () {
              return h.length > 1;
            },
            C = function (P, a, c) {
              const g = 'parser.js: initializeInputChars(): ';
              let S = P,
                T = a,
                k = c;
              if (S === void 0) throw new Error(`${g}input string is undefined`);
              if (S === null) throw new Error(`${g}input string is null`);
              if (typeof S == 'string') S = r.stringToChars(S);
              else if (!Array.isArray(S))
                throw new Error(`${g}input string is not a string or array`);
              if (S.length > 0 && typeof S[0] != 'number')
                throw new Error(`${g}input string not an array of integers`);
              if (typeof T != 'number') T = 0;
              else if (((T = Math.floor(T)), T < 0 || T > S.length))
                throw new Error(`${g}input beginning index out of range: ${T}`);
              if (typeof k != 'number') k = S.length - T;
              else if (((k = Math.floor(k)), k < 0 || k > S.length - T))
                throw new Error(`${g}input length out of range: ${k}`);
              (b = S), (u = T), (l = k), (d = u + l);
            };
          (this.setMaxTreeDepth = function (P) {
            if (typeof P != 'number')
              throw new Error(`parser: max tree depth must be integer > 0: ${P}`);
            if (((U = Math.floor(P)), U <= 0))
              throw new Error(`parser: max tree depth must be integer > 0: ${P}`);
          }),
            (this.setMaxNodeHits = function (P) {
              if (typeof P != 'number')
                throw new Error(`parser: max node hits must be integer > 0: ${P}`);
              if (((pe = Math.floor(P)), pe <= 0))
                throw new Error(`parser: max node hits must be integer > 0: ${P}`);
            });
          const H = function (P, a, c) {
            let g;
            (function (k) {
              const A = 'parser.js: initializeGrammar(): ';
              if (!k) throw new Error(`${A}grammar object undefined`);
              if (k.grammarObject !== 'grammarObject') throw new Error(`${A}bad grammar object`);
              (I = k.rules), (_ = k.udts);
            })(P);
            const S = (function (k) {
              const A = 'parser.js: initializeStartRule(): ';
              let v = null;
              if (typeof k == 'number') {
                if (k >= I.length)
                  throw new Error(`${A}start rule index too large: max: ${I.length}: index: ${k}`);
                v = k;
              } else {
                if (typeof k != 'string')
                  throw new Error(`${A}type of start rule '${typeof k}' not recognized`);
                {
                  const M = k.toLowerCase();
                  for (let N = 0; N < I.length; N += 1)
                    if (M === I[N].lower) {
                      v = I[N].index;
                      break;
                    }
                  if (v === null) throw new Error(`${A}start rule name '${k}' not recognized`);
                }
              }
              return v;
            })(a);
            (function () {
              const k = 'parser.js: initializeCallbacks(): ';
              let A, v;
              for (m = [], x = [], A = 0; A < I.length; A += 1) m[A] = null;
              for (A = 0; A < _.length; A += 1) x[A] = null;
              const M = [];
              for (A = 0; A < I.length; A += 1) M.push(I[A].lower);
              for (A = 0; A < _.length; A += 1) M.push(_[A].lower);
              for (const N in o.callbacks) {
                if (((A = M.indexOf(N.toLowerCase())), A < 0))
                  throw new Error(`${k}syntax callback '${N}' not a rule or udt name`);
                if (((v = o.callbacks[N]), v || (v = null), typeof v != 'function' && v !== null))
                  throw new Error(
                    `${k}syntax callback[${N}] must be function reference or 'false' (false/null/undefined/etc.)`
                  );
                A < I.length ? (m[A] = v) : (x[A - I.length] = v);
              }
              for (A = 0; A < _.length; A += 1)
                if (x[A] === null)
                  throw new Error(
                    `${k}all UDT callbacks must be defined. UDT callback[${_[A].lower}] not a function reference`
                  );
            })(),
              (function () {
                for (;;) {
                  if (o.trace === void 0) {
                    o.trace = null;
                    break;
                  }
                  if (o.trace === null) break;
                  if (o.trace.traceObject !== 'traceObject')
                    throw new Error('parser.js: initializeTrace(): trace object not recognized');
                  break;
                }
                o.trace !== null && o.trace.init(I, _, b);
              })(),
              (function () {
                for (;;) {
                  if (o.stats === void 0) {
                    o.stats = null;
                    break;
                  }
                  if (o.stats === null) break;
                  if (o.stats.statsObject !== 'statsObject')
                    throw new Error('parser.js: initializeStats(): stats object not recognized');
                  break;
                }
                o.stats !== null && o.stats.init(I, _);
              })(),
              (function () {
                for (;;) {
                  if (o.ast === void 0) {
                    o.ast = null;
                    break;
                  }
                  if (o.ast === null) break;
                  if (o.ast.astObject !== 'astObject')
                    throw new Error('parser.js: initializeAst(): ast object not recognized');
                  break;
                }
                o.ast !== null && o.ast.init(I, _, b);
              })();
            const T = new ne();
            switch (
              (c != null && (E = c),
              (y = [{ type: n.RNM, index: S }]),
              i(0, u, T),
              (y = null),
              T.state)
            ) {
              case n.ACTIVE:
                throw new Error("parser.js: parse(): final state should never be 'ACTIVE'");
              case n.NOMATCH:
                g = !1;
                break;
              case n.EMPTY:
              case n.MATCH:
                g = T.phraseLength === l;
                break;
              default:
                throw new Error('unrecognized state');
            }
            return {
              success: g,
              state: T.state,
              length: l,
              matched: T.phraseLength,
              maxMatched: O,
              maxTreeDepth: p,
              nodeHits: f,
              inputLength: b.length,
              subBegin: u,
              subEnd: d,
              subLength: l,
            };
          };
          (this.parseSubstring = function (P, a, c, g, S, T) {
            return ge(), C(c, g, S), H(P, a, T);
          }),
            (this.parse = function (P, a, c, g) {
              return ge(), C(c, 0, c.length), H(P, a, g);
            });
          const D = function (P, a, c) {
              const g = y[P];
              for (
                let S = 0;
                S < g.children.length && (i(g.children[S], a, c), c.state === n.NOMATCH);
                S += 1
              );
            },
            K = function (P, a, c, g) {
              if (a.phraseLength > c) {
                let S = `parser.js: opRNM(${P.name}): callback function error: `;
                throw (
                  ((S += `sysData.phraseLength: ${a.phraseLength}`),
                  (S += ` must be <= remaining chars: ${c}`),
                  new Error(S))
                );
              }
              switch (a.state) {
                case n.ACTIVE:
                  if (g !== !0)
                    throw new Error(
                      `parser.js: opRNM(${P.name}): callback function return error. ACTIVE state not allowed.`
                    );
                  break;
                case n.EMPTY:
                  a.phraseLength = 0;
                  break;
                case n.MATCH:
                  a.phraseLength === 0 && (a.state = n.EMPTY);
                  break;
                case n.NOMATCH:
                  a.phraseLength = 0;
                  break;
                default:
                  throw new Error(
                    `parser.js: opRNM(${P.name}): callback function return error. Unrecognized return state: ${a.state}`
                  );
              }
            },
            q = function (P, a, c) {
              let g, S, T, k, A, v;
              const M = y[P],
                N = I[M.index],
                z = m[N.index],
                me = !L();
              if (
                (me &&
                  ((S = o.ast && o.ast.ruleDefined(M.index)),
                  S && ((g = o.ast.getLength()), o.ast.down(M.index, I[M.index].name)),
                  (k = c.uFrame.length()),
                  (A = c.pFrame.length()),
                  c.uFrame.push(),
                  c.pFrame.push(),
                  (v = c.pFrame),
                  (c.pFrame = new J())),
                z === null)
              )
                (T = y), (y = N.opcodes), i(0, a, c), (y = T);
              else {
                const ke = d - a;
                (c.ruleIndex = N.index),
                  z(c, b, a, E),
                  K(N, c, ke, !0),
                  c.state === n.ACTIVE &&
                    ((T = y),
                    (y = N.opcodes),
                    i(0, a, c),
                    (y = T),
                    (c.ruleIndex = N.index),
                    z(c, b, a, E),
                    K(N, c, ke, !1));
              }
              me &&
                (S &&
                  (c.state === n.NOMATCH
                    ? o.ast.setLength(g)
                    : o.ast.up(M.index, N.name, a, c.phraseLength)),
                (c.pFrame = v),
                c.state === n.NOMATCH
                  ? (c.uFrame.pop(k), c.pFrame.pop(A))
                  : N.isBkr &&
                    (c.pFrame.savePhrase(N.lower, a, c.phraseLength),
                    c.uFrame.savePhrase(N.lower, a, c.phraseLength)));
            },
            F = function (P, a, c) {
              let g, S, T, k, A, v;
              const M = y[P],
                N = _[M.index];
              c.UdtIndex = N.index;
              const z = !L();
              z &&
                ((T = o.ast && o.ast.udtDefined(M.index)),
                T && ((S = I.length + M.index), (g = o.ast.getLength()), o.ast.down(S, N.name)),
                (k = c.uFrame.length()),
                (A = c.pFrame.length()),
                c.uFrame.push(),
                c.pFrame.push(),
                (v = c.pFrame),
                (c.pFrame = new J()));
              const me = d - a;
              x[M.index](c, b, a, E),
                (function (ke, Re, Oe) {
                  if (Re.phraseLength > Oe) {
                    let Ue = `parser.js: opUDT(${ke.name}): callback function error: `;
                    throw (
                      ((Ue += `sysData.phraseLength: ${Re.phraseLength}`),
                      (Ue += ` must be <= remaining chars: ${Oe}`),
                      new Error(Ue))
                    );
                  }
                  switch (Re.state) {
                    case n.ACTIVE:
                      throw new Error(
                        `parser.js: opUDT(${ke.name}): callback function return error. ACTIVE state not allowed.`
                      );
                    case n.EMPTY:
                      if (ke.empty === !1)
                        throw new Error(
                          `parser.js: opUDT(${ke.name}): callback function return error. May not return EMPTY.`
                        );
                      Re.phraseLength = 0;
                      break;
                    case n.MATCH:
                      if (Re.phraseLength === 0) {
                        if (ke.empty === !1)
                          throw new Error(
                            `parser.js: opUDT(${ke.name}): callback function return error. May not return EMPTY.`
                          );
                        Re.state = n.EMPTY;
                      }
                      break;
                    case n.NOMATCH:
                      Re.phraseLength = 0;
                      break;
                    default:
                      throw new Error(
                        `parser.js: opUDT(${ke.name}): callback function return error. Unrecognized return state: ${Re.state}`
                      );
                  }
                })(N, c, me),
                z &&
                  (T &&
                    (c.state === n.NOMATCH
                      ? o.ast.setLength(g)
                      : o.ast.up(S, N.name, a, c.phraseLength)),
                  (c.pFrame = v),
                  c.state === n.NOMATCH
                    ? (c.uFrame.pop(k), c.pFrame.pop(A))
                    : N.isBkr &&
                      (c.pFrame.savePhrase(N.lower, a, c.phraseLength),
                      c.uFrame.savePhrase(N.lower, a, c.phraseLength)));
            },
            ie = function (P, a, c) {
              h.push({ lookAround: n.LOOKAROUND_AHEAD, anchor: a, charsEnd: d, charsLength: l }),
                (d = b.length),
                (l = b.length - u),
                i(P + 1, a, c);
              const g = h.pop();
              switch (((d = g.charsEnd), (l = g.charsLength), (c.phraseLength = 0), c.state)) {
                case n.EMPTY:
                case n.MATCH:
                  c.state = n.EMPTY;
                  break;
                case n.NOMATCH:
                  c.state = n.NOMATCH;
                  break;
                default:
                  throw new Error(`opAND: invalid state ${c.state}`);
              }
            },
            G = function (P, a, c) {
              h.push({ lookAround: n.LOOKAROUND_AHEAD, anchor: a, charsEnd: d, charsLength: l }),
                (d = b.length),
                (l = b.length - u),
                i(P + 1, a, c);
              const g = h.pop();
              switch (((d = g.charsEnd), (l = g.charsLength), (c.phraseLength = 0), c.state)) {
                case n.EMPTY:
                case n.MATCH:
                  c.state = n.NOMATCH;
                  break;
                case n.NOMATCH:
                  c.state = n.EMPTY;
                  break;
                default:
                  throw new Error(`opNOT: invalid state ${c.state}`);
              }
            },
            re = function (P, a, c) {
              (c.state = n.NOMATCH),
                (c.phraseLength = 0),
                (c.state = a === 0 ? n.EMPTY : n.NOMATCH);
            },
            V = function (P, a, c) {
              (c.state = n.NOMATCH),
                (c.phraseLength = 0),
                (c.state = a === b.length ? n.EMPTY : n.NOMATCH);
            },
            ee = function (P, a, c) {
              switch (
                (h.push({ lookAround: n.LOOKAROUND_BEHIND, anchor: a }),
                i(P + 1, a, c),
                h.pop(),
                (c.phraseLength = 0),
                c.state)
              ) {
                case n.EMPTY:
                case n.MATCH:
                  c.state = n.EMPTY;
                  break;
                case n.NOMATCH:
                  c.state = n.NOMATCH;
                  break;
                default:
                  throw new Error(`opBKA: invalid state ${c.state}`);
              }
            },
            ae = function (P, a, c) {
              switch (
                (h.push({ lookAround: n.LOOKAROUND_BEHIND, anchor: a }),
                i(P + 1, a, c),
                h.pop(),
                (c.phraseLength = 0),
                c.state)
              ) {
                case n.EMPTY:
                case n.MATCH:
                  c.state = n.NOMATCH;
                  break;
                case n.NOMATCH:
                  c.state = n.EMPTY;
                  break;
                default:
                  throw new Error(`opBKN: invalid state ${c.state}`);
              }
            };
          i = function (P, a, c) {
            let g = !0;
            const S = y[P];
            if (((f += 1), f > pe))
              throw new Error(`parser: maximum number of node hits exceeded: ${pe}`);
            if (((w += 1), w > p && ((p = w), p > U)))
              throw new Error(`parser: maximum parse tree depth exceeded: ${U}`);
            if ((c.refresh(), o.trace !== null)) {
              const T = R();
              o.trace.down(S, c.state, a, c.phraseLength, T.anchor, T.lookAround);
            }
            if (h[h.length - 1].lookAround === n.LOOKAROUND_BEHIND)
              switch (S.type) {
                case n.ALT:
                  D(P, a, c);
                  break;
                case n.CAT:
                  (function (T, k, A) {
                    let v, M, N, z;
                    const me = y[T],
                      ke = A.uFrame.length(),
                      Re = A.pFrame.length();
                    o.ast && (M = o.ast.getLength()), (v = !0), (N = k), (z = 0);
                    for (let Oe = me.children.length - 1; Oe >= 0; Oe -= 1)
                      if (
                        (i(me.children[Oe], N, A),
                        (N -= A.phraseLength),
                        (z += A.phraseLength),
                        A.state === n.NOMATCH)
                      ) {
                        v = !1;
                        break;
                      }
                    v
                      ? ((A.state = z === 0 ? n.EMPTY : n.MATCH), (A.phraseLength = z))
                      : ((A.state = n.NOMATCH),
                        (A.phraseLength = 0),
                        A.uFrame.pop(ke),
                        A.pFrame.pop(Re),
                        o.ast && o.ast.setLength(M));
                  })(P, a, c);
                  break;
                case n.REP:
                  (function (T, k, A) {
                    let v, M, N, z;
                    const me = y[T];
                    (M = k), (N = 0), (z = 0);
                    const ke = A.uFrame.length(),
                      Re = A.pFrame.length();
                    for (
                      o.ast && (v = o.ast.getLength());
                      !(M <= 0) &&
                      (i(T + 1, M, A), A.state !== n.NOMATCH) &&
                      A.state !== n.EMPTY &&
                      ((z += 1), (N += A.phraseLength), (M -= A.phraseLength), z !== me.max);

                    );
                    A.state === n.EMPTY || z >= me.min
                      ? ((A.state = N === 0 ? n.EMPTY : n.MATCH), (A.phraseLength = N))
                      : ((A.state = n.NOMATCH),
                        (A.phraseLength = 0),
                        A.uFrame.pop(ke),
                        A.pFrame.pop(Re),
                        o.ast && o.ast.setLength(v));
                  })(P, a, c);
                  break;
                case n.RNM:
                  q(P, a, c);
                  break;
                case n.UDT:
                  F(P, a, c);
                  break;
                case n.AND:
                  ie(P, a, c);
                  break;
                case n.NOT:
                  G(P, a, c);
                  break;
                case n.TRG:
                  (function (T, k, A) {
                    const v = y[T];
                    if (((A.state = n.NOMATCH), (A.phraseLength = 0), k > 0)) {
                      const M = b[k - 1];
                      v.min <= M && M <= v.max && ((A.state = n.MATCH), (A.phraseLength = 1));
                    }
                  })(P, a, c);
                  break;
                case n.TBS:
                  (function (T, k, A) {
                    let v;
                    const M = y[T];
                    A.state = n.NOMATCH;
                    const N = M.string.length,
                      z = k - N;
                    if (z >= 0) {
                      for (v = 0; v < N; v += 1) if (b[z + v] !== M.string[v]) return;
                      (A.state = n.MATCH), (A.phraseLength = N);
                    }
                  })(P, a, c);
                  break;
                case n.TLS:
                  (function (T, k, A) {
                    let v;
                    const M = y[T];
                    A.state = n.NOMATCH;
                    const N = M.string.length;
                    if (N === 0) return void (A.state = n.EMPTY);
                    const z = k - N;
                    if (z >= 0) {
                      for (let me = 0; me < N; me += 1)
                        if (((v = b[z + me]), v >= 65 && v <= 90 && (v += 32), v !== M.string[me]))
                          return;
                      (A.state = n.MATCH), (A.phraseLength = N);
                    }
                  })(P, a, c);
                  break;
                case n.BKR:
                  (function (T, k, A) {
                    let v, M, N, z;
                    const me = y[T];
                    (A.state = n.NOMATCH),
                      (A.phraseLength = 0),
                      (z = me.index < I.length ? I[me.index].lower : _[me.index - I.length].lower);
                    const ke =
                        me.bkrMode === n.BKR_MODE_PM
                          ? A.pFrame.getPhrase(z)
                          : A.uFrame.getPhrase(z),
                      Re = me.bkrCase === n.BKR_MODE_CI;
                    if (ke === null) return;
                    const Oe = ke.phraseIndex,
                      Ue = ke.phraseLength;
                    if (Ue === 0) return (A.state = n.EMPTY), void (A.phraseLength = 0);
                    const Ys = k - Ue;
                    if (Ys >= 0) {
                      if (Re) {
                        for (v = 0; v < Ue; v += 1)
                          if (
                            ((M = b[Ys + v]),
                            (N = b[Oe + v]),
                            M >= 65 && M <= 90 && (M += 32),
                            N >= 65 && N <= 90 && (N += 32),
                            M !== N)
                          )
                            return;
                        (A.state = n.MATCH), (A.phraseLength = Ue);
                      } else
                        for (v = 0; v < Ue; v += 1)
                          if (((M = b[Ys + v]), (N = b[Oe + v]), M !== N)) return;
                      (A.state = n.MATCH), (A.phraseLength = Ue);
                    }
                  })(P, a, c);
                  break;
                case n.BKA:
                  ee(P, a, c);
                  break;
                case n.BKN:
                  ae(P, a, c);
                  break;
                case n.ABG:
                  re(0, a, c);
                  break;
                case n.AEN:
                  V(0, a, c);
                  break;
                default:
                  g = !1;
              }
            else
              switch (S.type) {
                case n.ALT:
                  D(P, a, c);
                  break;
                case n.CAT:
                  (function (T, k, A) {
                    let v, M, N, z;
                    const me = y[T],
                      ke = A.uFrame.length(),
                      Re = A.pFrame.length();
                    o.ast && (M = o.ast.getLength()), (v = !0), (N = k), (z = 0);
                    for (let Oe = 0; Oe < me.children.length; Oe += 1) {
                      if ((i(me.children[Oe], N, A), A.state === n.NOMATCH)) {
                        v = !1;
                        break;
                      }
                      (N += A.phraseLength), (z += A.phraseLength);
                    }
                    v
                      ? ((A.state = z === 0 ? n.EMPTY : n.MATCH), (A.phraseLength = z))
                      : ((A.state = n.NOMATCH),
                        (A.phraseLength = 0),
                        A.uFrame.pop(ke),
                        A.pFrame.pop(Re),
                        o.ast && o.ast.setLength(M));
                  })(P, a, c);
                  break;
                case n.REP:
                  (function (T, k, A) {
                    let v, M, N, z;
                    const me = y[T];
                    (M = k), (N = 0), (z = 0);
                    const ke = A.uFrame.length(),
                      Re = A.pFrame.length();
                    for (
                      o.ast && (v = o.ast.getLength());
                      !(M >= d) &&
                      (i(T + 1, M, A), A.state !== n.NOMATCH) &&
                      A.state !== n.EMPTY &&
                      ((z += 1), (N += A.phraseLength), (M += A.phraseLength), z !== me.max);

                    );
                    A.state === n.EMPTY || z >= me.min
                      ? ((A.state = N === 0 ? n.EMPTY : n.MATCH), (A.phraseLength = N))
                      : ((A.state = n.NOMATCH),
                        (A.phraseLength = 0),
                        A.uFrame.pop(ke),
                        A.pFrame.pop(Re),
                        o.ast && o.ast.setLength(v));
                  })(P, a, c);
                  break;
                case n.RNM:
                  q(P, a, c);
                  break;
                case n.UDT:
                  F(P, a, c);
                  break;
                case n.AND:
                  ie(P, a, c);
                  break;
                case n.NOT:
                  G(P, a, c);
                  break;
                case n.TRG:
                  (function (T, k, A) {
                    const v = y[T];
                    (A.state = n.NOMATCH),
                      k < d &&
                        v.min <= b[k] &&
                        b[k] <= v.max &&
                        ((A.state = n.MATCH), (A.phraseLength = 1));
                  })(P, a, c);
                  break;
                case n.TBS:
                  (function (T, k, A) {
                    let v;
                    const M = y[T],
                      N = M.string.length;
                    if (((A.state = n.NOMATCH), k + N <= d)) {
                      for (v = 0; v < N; v += 1) if (b[k + v] !== M.string[v]) return;
                      (A.state = n.MATCH), (A.phraseLength = N);
                    }
                  })(P, a, c);
                  break;
                case n.TLS:
                  (function (T, k, A) {
                    let v, M;
                    const N = y[T];
                    A.state = n.NOMATCH;
                    const z = N.string.length;
                    if (z !== 0) {
                      if (k + z <= d) {
                        for (v = 0; v < z; v += 1)
                          if (((M = b[k + v]), M >= 65 && M <= 90 && (M += 32), M !== N.string[v]))
                            return;
                        (A.state = n.MATCH), (A.phraseLength = z);
                      }
                    } else A.state = n.EMPTY;
                  })(P, a, c);
                  break;
                case n.BKR:
                  (function (T, k, A) {
                    let v, M, N, z;
                    const me = y[T];
                    (A.state = n.NOMATCH),
                      (z = me.index < I.length ? I[me.index].lower : _[me.index - I.length].lower);
                    const ke =
                        me.bkrMode === n.BKR_MODE_PM
                          ? A.pFrame.getPhrase(z)
                          : A.uFrame.getPhrase(z),
                      Re = me.bkrCase === n.BKR_MODE_CI;
                    if (ke === null) return;
                    const Oe = ke.phraseIndex,
                      Ue = ke.phraseLength;
                    if (Ue !== 0) {
                      if (k + Ue <= d) {
                        if (Re) {
                          for (v = 0; v < Ue; v += 1)
                            if (
                              ((M = b[k + v]),
                              (N = b[Oe + v]),
                              M >= 65 && M <= 90 && (M += 32),
                              N >= 65 && N <= 90 && (N += 32),
                              M !== N)
                            )
                              return;
                          (A.state = n.MATCH), (A.phraseLength = Ue);
                        } else
                          for (v = 0; v < Ue; v += 1)
                            if (((M = b[k + v]), (N = b[Oe + v]), M !== N)) return;
                        (A.state = n.MATCH), (A.phraseLength = Ue);
                      }
                    } else A.state = n.EMPTY;
                  })(P, a, c);
                  break;
                case n.BKA:
                  ee(P, a, c);
                  break;
                case n.BKN:
                  ae(P, a, c);
                  break;
                case n.ABG:
                  re(0, a, c);
                  break;
                case n.AEN:
                  V(0, a, c);
                  break;
                default:
                  g = !1;
              }
            if (
              (!L() && a + c.phraseLength > O && (O = a + c.phraseLength),
              o.stats !== null && o.stats.collect(S, c),
              o.trace !== null)
            ) {
              const T = R();
              o.trace.up(S, c.state, a, c.phraseLength, T.anchor, T.lookAround);
            }
            return (w -= 1), g;
          };
        };
      },
      { './identifiers': 10, './utilities': 16 },
    ],
    13: [
      function (e, t, s) {
        t.exports = function () {
          const n = e('./identifiers'),
            r = e('./utilities'),
            o = e('./style');
          let i = [],
            u = [];
          const l = [];
          let d;
          const h = [],
            y = [];
          this.statsObject = 'statsObject';
          const b = function (E, O) {
              return E.lower < O.lower ? -1 : E.lower > O.lower ? 1 : 0;
            },
            w = function (E, O) {
              return E.total < O.total ? 1 : E.total > O.total ? -1 : b(E, O);
            },
            p = function (E, O) {
              return E.index < O.index ? -1 : E.index > O.index ? 1 : 0;
            },
            f = function () {
              (this.empty = 0), (this.match = 0), (this.nomatch = 0), (this.total = 0);
            },
            m = function (E, O) {
              switch (((E.total += 1), O)) {
                case n.EMPTY:
                  E.empty += 1;
                  break;
                case n.MATCH:
                  E.match += 1;
                  break;
                case n.NOMATCH:
                  E.nomatch += 1;
                  break;
                default:
                  throw new Error(`stats.js: collect(): incStat(): unrecognized state: ${O}`);
              }
            },
            x = function (E, O) {
              let U = '';
              return (
                (U += '<tr>'),
                (U += `<td class="${o.CLASS_ACTIVE}">${E}</td>`),
                (U += `<td class="${o.CLASS_EMPTY}">${O.empty}</td>`),
                (U += `<td class="${o.CLASS_MATCH}">${O.match}</td>`),
                (U += `<td class="${o.CLASS_NOMATCH}">${O.nomatch}</td>`),
                (U += `<td class="${o.CLASS_ACTIVE}">${O.total}</td>`),
                (U += `</tr>
`),
                U
              );
            },
            I = function () {
              let E = '';
              return (
                (E += x('ALT', l[n.ALT])),
                (E += x('CAT', l[n.CAT])),
                (E += x('REP', l[n.REP])),
                (E += x('RNM', l[n.RNM])),
                (E += x('TRG', l[n.TRG])),
                (E += x('TBS', l[n.TBS])),
                (E += x('TLS', l[n.TLS])),
                (E += x('UDT', l[n.UDT])),
                (E += x('AND', l[n.AND])),
                (E += x('NOT', l[n.NOT])),
                (E += x('BKR', l[n.BKR])),
                (E += x('BKA', l[n.BKA])),
                (E += x('BKN', l[n.BKN])),
                (E += x('ABG', l[n.ABG])),
                (E += x('AEN', l[n.AEN])),
                (E += x('totals', d)),
                E
              );
            },
            _ = function () {
              let E = '';
              (E += `<tr><th></th><th></th><th></th><th></th><th></th></tr>
`),
                (E += `<tr><th>rules</th><th></th><th></th><th></th><th></th></tr>
`);
              for (let O = 0; O < i.length; O += 1)
                h[O].total > 0 &&
                  ((E += '<tr>'),
                  (E += `<td class="${o.CLASS_ACTIVE}">${h[O].name}</td>`),
                  (E += `<td class="${o.CLASS_EMPTY}">${h[O].empty}</td>`),
                  (E += `<td class="${o.CLASS_MATCH}">${h[O].match}</td>`),
                  (E += `<td class="${o.CLASS_NOMATCH}">${h[O].nomatch}</td>`),
                  (E += `<td class="${o.CLASS_ACTIVE}">${h[O].total}</td>`),
                  (E += `</tr>
`));
              if (u.length > 0) {
                (E += `<tr><th></th><th></th><th></th><th></th><th></th></tr>
`),
                  (E += `<tr><th>udts</th><th></th><th></th><th></th><th></th></tr>
`);
                for (let O = 0; O < u.length; O += 1)
                  y[O].total > 0 &&
                    ((E += '<tr>'),
                    (E += `<td class="${o.CLASS_ACTIVE}">${y[O].name}</td>`),
                    (E += `<td class="${o.CLASS_EMPTY}">${y[O].empty}</td>`),
                    (E += `<td class="${o.CLASS_MATCH}">${y[O].match}</td>`),
                    (E += `<td class="${o.CLASS_NOMATCH}">${y[O].nomatch}</td>`),
                    (E += `<td class="${o.CLASS_ACTIVE}">${y[O].total}</td>`),
                    (E += `</tr>
`));
              }
              return E;
            };
          (this.validate = function (E) {
            let O = !1;
            return typeof E == 'string' && E === 'stats' && (O = !0), O;
          }),
            (this.init = function (E, O) {
              (i = E),
                (u = O),
                (function () {
                  (l.length = 0),
                    (d = new f()),
                    (l[n.ALT] = new f()),
                    (l[n.CAT] = new f()),
                    (l[n.REP] = new f()),
                    (l[n.RNM] = new f()),
                    (l[n.TRG] = new f()),
                    (l[n.TBS] = new f()),
                    (l[n.TLS] = new f()),
                    (l[n.UDT] = new f()),
                    (l[n.AND] = new f()),
                    (l[n.NOT] = new f()),
                    (l[n.BKR] = new f()),
                    (l[n.BKA] = new f()),
                    (l[n.BKN] = new f()),
                    (l[n.ABG] = new f()),
                    (l[n.AEN] = new f()),
                    (h.length = 0);
                  for (let U = 0; U < i.length; U += 1)
                    h.push({
                      empty: 0,
                      match: 0,
                      nomatch: 0,
                      total: 0,
                      name: i[U].name,
                      lower: i[U].lower,
                      index: i[U].index,
                    });
                  if (u.length > 0) {
                    y.length = 0;
                    for (let U = 0; U < u.length; U += 1)
                      y.push({
                        empty: 0,
                        match: 0,
                        nomatch: 0,
                        total: 0,
                        name: u[U].name,
                        lower: u[U].lower,
                        index: u[U].index,
                      });
                  }
                })();
            }),
            (this.collect = function (E, O) {
              m(d, O.state, O.phraseLength),
                m(l[E.type], O.state, O.phraseLength),
                E.type === n.RNM && m(h[E.index], O.state, O.phraseLength),
                E.type === n.UDT && m(y[E.index], O.state, O.phraseLength);
            }),
            (this.toHtml = function (E, O) {
              let U = '';
              for (
                U += `<table class="${o.CLASS_STATS}">
`,
                  typeof O == 'string' &&
                    (U += `<caption>${O}</caption>
`),
                  U += `<tr><th class="${o.CLASS_ACTIVE}">ops</th>
`,
                  U += `<th class="${o.CLASS_EMPTY}">EMPTY</th>
`,
                  U += `<th class="${o.CLASS_MATCH}">MATCH</th>
`,
                  U += `<th class="${o.CLASS_NOMATCH}">NOMATCH</th>
`,
                  U += `<th class="${o.CLASS_ACTIVE}">totals</th></tr>
`;
                ;

              ) {
                if (E === void 0) {
                  U += I();
                  break;
                }
                if (E === null) {
                  U += I();
                  break;
                }
                if (E === 'ops') {
                  U += I();
                  break;
                }
                if (E === 'index') {
                  h.sort(p), y.length > 0 && y.sort(p), (U += I()), (U += _());
                  break;
                }
                if (E === 'hits') {
                  h.sort(w), y.length > 0 && y.sort(p), (U += I()), (U += _());
                  break;
                }
                if (E === 'alpha') {
                  h.sort(b), y.length > 0 && y.sort(b), (U += I()), (U += _());
                  break;
                }
                break;
              }
              return (
                (U += `</table>
`),
                U
              );
            }),
            (this.toHtmlPage = function (E, O, U) {
              return r.htmlToPage(this.toHtml(E, O), U);
            });
        };
      },
      { './identifiers': 10, './style': 14, './utilities': 16 },
    ],
    14: [
      function (e, t, s) {
        t.exports = {
          CLASS_MONOSPACE: 'apg-mono',
          CLASS_ACTIVE: 'apg-active',
          CLASS_EMPTY: 'apg-empty',
          CLASS_MATCH: 'apg-match',
          CLASS_NOMATCH: 'apg-nomatch',
          CLASS_LOOKAHEAD: 'apg-lh-match',
          CLASS_LOOKBEHIND: 'apg-lb-match',
          CLASS_REMAINDER: 'apg-remainder',
          CLASS_CTRLCHAR: 'apg-ctrl-char',
          CLASS_LINEEND: 'apg-line-end',
          CLASS_ERROR: 'apg-error',
          CLASS_PHRASE: 'apg-phrase',
          CLASS_EMPTYPHRASE: 'apg-empty-phrase',
          CLASS_STATE: 'apg-state',
          CLASS_STATS: 'apg-stats',
          CLASS_TRACE: 'apg-trace',
          CLASS_GRAMMAR: 'apg-grammar',
          CLASS_RULES: 'apg-rules',
          CLASS_RULESLINK: 'apg-rules-link',
          CLASS_ATTRIBUTES: 'apg-attrs',
        };
      },
      {},
    ],
    15: [
      function (e, t, s) {
        t.exports = function () {
          const n = e('./utilities'),
            r = e('./style'),
            o = new (e('./circular-buffer'))(),
            i = e('./identifiers'),
            u = this,
            l = 16,
            d = 80,
            h = [];
          let y = 5e3,
            b = -1,
            w = 0,
            p = 0;
          const f = [];
          let m = null,
            x = null,
            I = null;
          const _ = [],
            E = [],
            O = `<span class="${r.CLASS_LINEEND}">&bull;</span>`,
            U = `<span class="${r.CLASS_LINEEND}">&hellip;</span>`,
            pe = `<span class="${r.CLASS_EMPTY}">&#120634;</span>`;
          (this.traceObject = 'traceObject'),
            (this.filter = { operators: [], rules: [] }),
            (this.setMaxRecords = function (R, L) {
              (b = -1),
                typeof R == 'number' && R > 0
                  ? ((y = Math.ceil(R)),
                    typeof L == 'number' && ((b = Math.floor(L)), b < 0 && (b = -1)))
                  : (y = 0);
            }),
            (this.getMaxRecords = function () {
              return y;
            }),
            (this.getLastRecord = function () {
              return b;
            }),
            (this.init = function (R, L, C) {
              (h.length = 0),
                (f.length = 0),
                (w = 0),
                (p = 0),
                (m = C),
                (x = R),
                (I = L),
                (function () {
                  const H = function (K) {
                    (_[i.ALT] = K),
                      (_[i.CAT] = K),
                      (_[i.REP] = K),
                      (_[i.TLS] = K),
                      (_[i.TBS] = K),
                      (_[i.TRG] = K),
                      (_[i.AND] = K),
                      (_[i.NOT] = K),
                      (_[i.BKR] = K),
                      (_[i.BKA] = K),
                      (_[i.BKN] = K),
                      (_[i.ABG] = K),
                      (_[i.AEN] = K);
                  };
                  let D = 0;
                  for (const K in u.filter.operators) D += 1;
                  if (D !== 0) {
                    for (const K in u.filter.operators) {
                      const q = K.toUpperCase();
                      if (q === '<ALL>') return void H(!0);
                      if (q === '<NONE>') return void H(!1);
                    }
                    H(!1);
                    for (const K in u.filter.operators) {
                      const q = K.toUpperCase();
                      if (q === 'ALT') _[i.ALT] = u.filter.operators[K] === !0;
                      else if (q === 'CAT') _[i.CAT] = u.filter.operators[K] === !0;
                      else if (q === 'REP') _[i.REP] = u.filter.operators[K] === !0;
                      else if (q === 'AND') _[i.AND] = u.filter.operators[K] === !0;
                      else if (q === 'NOT') _[i.NOT] = u.filter.operators[K] === !0;
                      else if (q === 'TLS') _[i.TLS] = u.filter.operators[K] === !0;
                      else if (q === 'TBS') _[i.TBS] = u.filter.operators[K] === !0;
                      else if (q === 'TRG') _[i.TRG] = u.filter.operators[K] === !0;
                      else if (q === 'BKR') _[i.BKR] = u.filter.operators[K] === !0;
                      else if (q === 'BKA') _[i.BKA] = u.filter.operators[K] === !0;
                      else if (q === 'BKN') _[i.BKN] = u.filter.operators[K] === !0;
                      else if (q === 'ABG') _[i.ABG] = u.filter.operators[K] === !0;
                      else {
                        if (q !== 'AEN')
                          throw new Error(
                            `trace.js: initOpratorFilter: '${K}' not a valid operator name. Must be <all>, <none>, alt, cat, rep, tls, tbs, trg, and, not, bkr, bka or bkn`
                          );
                        _[i.AEN] = u.filter.operators[K] === !0;
                      }
                    }
                  } else H(!1);
                })(),
                (function () {
                  const H = function (F) {
                    (_[i.RNM] = F), (_[i.UDT] = F);
                    const ie = x.length + I.length;
                    E.length = 0;
                    for (let G = 0; G < ie; G += 1) E.push(F);
                  };
                  let D, K;
                  const q = [];
                  for (K = 0; K < x.length; K += 1) q.push(x[K].lower);
                  for (K = 0; K < I.length; K += 1) q.push(I[K].lower);
                  (E.length = 0), (D = 0);
                  for (const F in u.filter.rules) D += 1;
                  if (D !== 0) {
                    for (const F in u.filter.rules) {
                      const ie = F.toLowerCase();
                      if (ie === '<all>') return void H(!0);
                      if (ie === '<none>') return void H(!1);
                    }
                    H(!1), (_[i.RNM] = !0), (_[i.UDT] = !0);
                    for (const F in u.filter.rules) {
                      const ie = F.toLowerCase();
                      if (((K = q.indexOf(ie)), K < 0))
                        throw new Error(
                          `trace.js: initRuleFilter: '${F}' not a valid rule or udt name`
                        );
                      E[K] = u.filter.rules[F] === !0;
                    }
                  } else H(!0);
                })(),
                o.init(y);
            });
          const X = function (R) {
              let L = !1;
              return (
                (L =
                  R.type === i.RNM
                    ? !(!_[R.type] || !E[R.index])
                    : R.type === i.UDT
                      ? !(!_[R.type] || !E[x.length + R.index])
                      : _[R.type]),
                L
              );
            },
            se = function (R) {
              return b === -1 || R <= b;
            };
          (this.down = function (R, L, C, H, D, K) {
            se(w) &&
              X(R) &&
              (f.push(w),
              (h[o.increment()] = {
                dirUp: !1,
                depth: p,
                thisLine: w,
                thatLine: void 0,
                opcode: R,
                state: L,
                phraseIndex: C,
                phraseLength: H,
                lookAnchor: D,
                lookAround: K,
              }),
              (w += 1),
              (p += 1));
          }),
            (this.up = function (R, L, C, H, D, K) {
              if (se(w) && X(R)) {
                const q = w,
                  F = f.pop(),
                  ie = o.getListIndex(F);
                ie !== -1 && (h[ie].thatLine = q),
                  (p -= 1),
                  (h[o.increment()] = {
                    dirUp: !0,
                    depth: p,
                    thisLine: q,
                    thatLine: F,
                    opcode: R,
                    state: L,
                    phraseIndex: C,
                    phraseLength: H,
                    lookAnchor: D,
                    lookAround: K,
                  }),
                  (w += 1);
              }
            }),
            (this.toTree = function (R) {
              const L = (function () {
                function C(k, A) {
                  let v, M, N;
                  if (A)
                    switch (
                      ((k.op = { id: A.type, name: n.opcodeToString(A.type) }),
                      (k.opData = void 0),
                      A.type)
                    ) {
                      case i.RNM:
                        k.opData = x[A.index].name;
                        break;
                      case i.UDT:
                        k.opData = I[A.index].name;
                        break;
                      case i.BKR:
                        (v = A.index < x.length ? x[A.index].name : I[A.index - x.length].name),
                          (M = A.bkrCase === i.BKR_MODE_CI ? '%i' : '%s'),
                          (N = A.bkrMode === i.BKR_MODE_UM ? '%u' : '%p'),
                          (k.opData = `\\\\${M}${N}${v}`);
                        break;
                      case i.TLS:
                        k.opData = [];
                        for (let z = 0; z < A.string.length; z += 1) k.opData.push(A.string[z]);
                        break;
                      case i.TBS:
                        k.opData = [];
                        for (let z = 0; z < A.string.length; z += 1) k.opData.push(A.string[z]);
                        break;
                      case i.TRG:
                      case i.REP:
                        k.opData = [A.min, A.max];
                        break;
                      default:
                        throw new Error('unrecognized opcode');
                    }
                  else (k.op = { id: void 0, name: void 0 }), (k.opData = void 0);
                }
                function H(k, A, v) {
                  return k === i.MATCH
                    ? { index: A, length: v }
                    : k === i.NOMATCH || k === i.EMPTY
                      ? { index: A, length: 0 }
                      : null;
                }
                let D = -1;
                function K(k, A, v) {
                  const M = {
                    id: D++,
                    branch: -1,
                    parent: k,
                    up: !1,
                    down: !1,
                    depth: v,
                    children: [],
                  };
                  return (
                    A
                      ? ((M.down = !0),
                        (M.state = { id: A.state, name: n.stateToString(A.state) }),
                        (M.phrase = null),
                        C(M, A.opcode))
                      : ((M.state = { id: void 0, name: void 0 }), (M.phrase = H()), C(M, void 0)),
                    M
                  );
                }
                function q(k, A) {
                  A &&
                    ((k.up = !0),
                    (k.state = { id: A.state, name: n.stateToString(A.state) }),
                    (k.phrase = H(A.state, A.phraseIndex, A.phraseLength)),
                    k.down || C(k, A.opcode));
                }
                let F = 0,
                  ie = -1,
                  G = 1;
                const re = [];
                let V,
                  ee,
                  ae,
                  P,
                  a = !0;
                const c = K(null, null, -1);
                for (
                  re.push(c),
                    ee = c,
                    o.forEach((k) => {
                      if (((P = h[k]), a && ((a = !1), P.depth > 0))) {
                        const A = P.dirUp ? P.depth + 1 : P.depth;
                        for (let v = 0; v < A; v += 1)
                          (ae = ee), (ee = K(ee, null, v)), re.push(ee), ae.children.push(ee);
                      }
                      P.dirUp
                        ? ((ee = re.pop()), q(ee, P), (ee = re[re.length - 1]))
                        : ((ae = ee), (ee = K(ee, P, P.depth)), re.push(ee), ae.children.push(ee));
                    });
                  re.length > 1;

                )
                  (ee = re.pop()), q(ee, null);
                if (c.children.length === 0)
                  throw new Error('trace.toTree(): parse tree has no nodes');
                if (re.length === 0)
                  throw new Error('trace.toTree(): integrity check: dummy root node disappeared?');
                V = c.children[0];
                let g = V;
                for (; V && !V.down && !V.up; ) (g = V), (V = V.children[0]);
                (V = g),
                  (V.leftMost = !0),
                  (V.rightMost = !0),
                  (function k(A) {
                    if (((ie += 1), (A.branch = G), ie > p && (p = ie), A.children.length === 0))
                      F += 1;
                    else
                      for (let v = 0; v < A.children.length; v += 1)
                        v > 0 && (G += 1),
                          (A.children[v].leftMost = !1),
                          (A.children[v].rightMost = !1),
                          A.leftMost && (A.children[v].leftMost = v === 0),
                          A.rightMost && (A.children[v].rightMost = v === A.children.length - 1),
                          k(A.children[v]);
                    ie -= 1;
                  })(V),
                  (V.branch = 0);
                const S = { string: [] };
                for (let k = 0; k < m.length; k += 1) S.string[k] = m[k];
                S.rules = [];
                for (let k = 0; k < x.length; k += 1) S.rules[k] = x[k].name;
                S.udts = [];
                for (let k = 0; k < I.length; k += 1) S.udts[k] = I[k].name;
                let T;
                return (
                  (S.id = {}),
                  (S.id.ALT = { id: i.ALT, name: 'ALT' }),
                  (S.id.CAT = { id: i.CAT, name: 'CAT' }),
                  (S.id.REP = { id: i.REP, name: 'REP' }),
                  (S.id.RNM = { id: i.RNM, name: 'RNM' }),
                  (S.id.TLS = { id: i.TLS, name: 'TLS' }),
                  (S.id.TBS = { id: i.TBS, name: 'TBS' }),
                  (S.id.TRG = { id: i.TRG, name: 'TRG' }),
                  (S.id.UDT = { id: i.UDT, name: 'UDT' }),
                  (S.id.AND = { id: i.AND, name: 'AND' }),
                  (S.id.NOT = { id: i.NOT, name: 'NOT' }),
                  (S.id.BKR = { id: i.BKR, name: 'BKR' }),
                  (S.id.BKA = { id: i.BKA, name: 'BKA' }),
                  (S.id.BKN = { id: i.BKN, name: 'BKN' }),
                  (S.id.ABG = { id: i.ABG, name: 'ABG' }),
                  (S.id.AEN = { id: i.AEN, name: 'AEN' }),
                  (S.id.ACTIVE = { id: i.ACTIVE, name: 'ACTIVE' }),
                  (S.id.MATCH = { id: i.MATCH, name: 'MATCH' }),
                  (S.id.EMPTY = { id: i.EMPTY, name: 'EMPTY' }),
                  (S.id.NOMATCH = { id: i.NOMATCH, name: 'NOMATCH' }),
                  (S.treeDepth = p),
                  (S.leafNodes = F),
                  (T = V.down ? (V.up ? 'none' : 'right') : V.up ? 'left' : 'both'),
                  (S.branchesIncomplete = T),
                  (S.tree = (function k(A, v) {
                    let M;
                    const N = {};
                    if (
                      ((N.id = A.id),
                      (N.branch = A.branch),
                      (N.leftMost = A.leftMost),
                      (N.rightMost = A.rightMost),
                      (M = A.state.name ? A.state.name : 'ACTIVE'),
                      (N.state = { id: A.state.id, name: M }),
                      (M = A.op.name ? A.op.name : '?'),
                      (N.op = { id: A.op.id, name: M }),
                      typeof A.opData == 'string')
                    )
                      N.opData = A.opData;
                    else if (Array.isArray(A.opData)) {
                      N.opData = [];
                      for (let z = 0; z < A.opData.length; z += 1) N.opData[z] = A.opData[z];
                    } else N.opData = void 0;
                    A.phrase
                      ? (N.phrase = { index: A.phrase.index, length: A.phrase.length })
                      : (N.phrase = null),
                      (N.depth = A.depth),
                      (N.children = []);
                    for (let z = 0; z < A.children.length; z += 1)
                      A.children.length, (N.children[z] = k(A.children[z]));
                    return N;
                  })(V, V.depth)),
                  S
                );
              })();
              return R ? JSON.stringify(L) : L;
            }),
            (this.toHtmlPage = function (R, L, C) {
              return n.htmlToPage(this.toHtml(R, L), C);
            }),
            (this.indent = function (R) {
              let L = '';
              for (let C = 0; C < R; C += 1) L += '.';
              return L;
            });
          const ge = function (R, L, C, H, D) {
              if (H === 0) return '';
              let K = '';
              const q = D ? ',' : '';
              switch (R) {
                case l:
                  K = q + n.charsToHex(L, C, H);
                  break;
                case 10:
                  if (D) return `,${n.charsToDec(L, C, H)}`;
                  K = q + n.charsToDec(L, C, H);
                  break;
                case 32:
                  K = n.charsToUnicode(L, C, H);
                  break;
                case 8:
                default:
                  K = n.charsToAsciiHtml(L, C, H);
              }
              return K;
            },
            J = function (R, L, C, H, D, K) {
              let q,
                F,
                ie,
                G,
                re = '',
                V = O;
              const ee = `<span class="${r.CLASS_REMAINDER}">`,
                ae = '</span>';
              let P = !1;
              switch (C) {
                case i.EMPTY:
                  re += pe;
                case i.NOMATCH:
                case i.ACTIVE:
                  (q = H), (F = 0), (ie = H), (G = L.length - ie);
                  break;
                case i.MATCH:
                  (q = H), (F = D), (ie = H + F), (G = L.length - ie);
                  break;
                default:
                  throw new Error('unrecognized state');
              }
              return (
                (V = O),
                F > d ? ((F = d), (V = U), (G = 0)) : F + G > d && ((V = U), (G = d - F)),
                F > 0 && ((re += K), (re += ge(R, L, q, F, P)), (re += ae), (P = !0)),
                G > 0 && ((re += ee), (re += ge(R, L, ie, G, P)), (re += ae)),
                re + V
              );
            },
            ne = function (R) {
              if (x === null) return '';
              let L,
                C,
                H,
                D,
                K,
                q,
                F = '';
              return (
                (F +=
                  '<tr><th>(a)</th><th>(b)</th><th>(c)</th><th>(d)</th><th>(e)</th><th>(f)</th>'),
                (F += `<th>operator</th><th>phrase</th></tr>
`),
                o.forEach((ie) => {
                  const G = h[ie];
                  switch (
                    ((L = G.thisLine),
                    (C = G.thatLine !== void 0 ? G.thatLine : '--'),
                    (H = !1),
                    (D = !1),
                    (K = !1),
                    G.lookAround === i.LOOKAROUND_AHEAD && ((H = !0), (K = !0), (q = G.lookAnchor)),
                    (G.opcode.type !== i.AND && G.opcode.type !== i.NOT) ||
                      ((H = !0), (K = !0), (q = G.phraseIndex)),
                    G.lookAround === i.LOOKAROUND_BEHIND &&
                      ((D = !0), (K = !0), (q = G.lookAnchor)),
                    (G.opcode.type !== i.BKA && G.opcode.type !== i.BKN) ||
                      ((D = !0), (K = !0), (q = G.phraseIndex)),
                    (F += '<tr>'),
                    (F += `<td>${L}</td><td>${C}</td>`),
                    (F += `<td>${G.phraseIndex}</td>`),
                    (F += `<td>${G.phraseLength}</td>`),
                    (F += `<td>${G.depth}</td>`),
                    (F += '<td>'),
                    G.state)
                  ) {
                    case i.ACTIVE:
                      F += `<span class="${r.CLASS_ACTIVE}">&darr;&nbsp;</span>`;
                      break;
                    case i.MATCH:
                      F += `<span class="${r.CLASS_MATCH}">&uarr;M</span>`;
                      break;
                    case i.NOMATCH:
                      F += `<span class="${r.CLASS_NOMATCH}">&uarr;N</span>`;
                      break;
                    case i.EMPTY:
                      F += `<span class="${r.CLASS_EMPTY}">&uarr;E</span>`;
                      break;
                    default:
                      F += `<span class="${r.CLASS_ACTIVE}">--</span>`;
                  }
                  if (
                    ((F += '</td>'),
                    (F += '<td>'),
                    (F += u.indent(G.depth)),
                    H
                      ? (F += `<span class="${r.CLASS_LOOKAHEAD}">`)
                      : D && (F += `<span class="${r.CLASS_LOOKBEHIND}">`),
                    (F += n.opcodeToString(G.opcode.type)),
                    G.opcode.type === i.RNM && (F += `(${x[G.opcode.index].name}) `),
                    G.opcode.type === i.BKR)
                  ) {
                    const re = G.opcode.bkrCase === i.BKR_MODE_CI ? '%i' : '%s',
                      V = G.opcode.bkrMode === i.BKR_MODE_UM ? '%u' : '%p';
                    F += `(\\${re}${V}${x[G.opcode.index].name}) `;
                  }
                  G.opcode.type === i.UDT && (F += `(${I[G.opcode.index].name}) `),
                    G.opcode.type === i.TRG &&
                      (F += `(${(function (re, V) {
                        let ee = '';
                        if (V.type === i.TRG)
                          if (re === l || re === 32) {
                            let ae = V.min.toString(16).toUpperCase();
                            ae.length % 2 != 0 && (ae = `0${ae}`),
                              (ee += re === l ? '%x' : 'U+'),
                              (ee += ae),
                              (ae = V.max.toString(16).toUpperCase()),
                              ae.length % 2 != 0 && (ae = `0${ae}`),
                              (ee += `&ndash;${ae}`);
                          } else ee = `%d${V.min.toString(10)}&ndash;${V.max.toString(10)}`;
                        return ee;
                      })(R, G.opcode)}) `),
                    G.opcode.type === i.TBS &&
                      (F += `(${(function (re, V) {
                        let ee = '';
                        if (V.type === i.TBS) {
                          const ae = Math.min(V.string.length, 10);
                          if (re === l || re === 32) {
                            ee += re === l ? '%x' : 'U+';
                            for (let P = 0; P < ae; P += 1) {
                              let a;
                              P > 0 && (ee += '.'),
                                (a = V.string[P].toString(16).toUpperCase()),
                                a.length % 2 != 0 && (a = `0${a}`),
                                (ee += a);
                            }
                          } else {
                            ee = '%d';
                            for (let P = 0; P < ae; P += 1)
                              P > 0 && (ee += '.'), (ee += V.string[P].toString(10));
                          }
                          ae < V.string.length && (ee += U);
                        }
                        return ee;
                      })(R, G.opcode)}) `),
                    G.opcode.type === i.TLS &&
                      (F += `(${(function (re, V) {
                        let ee = '';
                        if (V.type === i.TLS) {
                          const ae = Math.min(V.string.length, 5);
                          if (re === l || re === 10) {
                            let P, a, c;
                            re === l ? ((ee = '%x'), (c = 16)) : ((ee = '%d'), (c = 10));
                            for (let g = 0; g < ae; g += 1)
                              g > 0 && (ee += '.'),
                                (a = V.string[g]),
                                a >= 97 && a <= 122
                                  ? ((P = a - 32),
                                    (ee += `${P.toString(c)}/${a.toString(c)}`.toUpperCase()))
                                  : a >= 65 && a <= 90
                                    ? ((P = a),
                                      (a += 32),
                                      (ee += `${P.toString(c)}/${a.toString(c)}`.toUpperCase()))
                                    : (ee += a.toString(c).toUpperCase());
                            ae < V.string.length && (ee += U);
                          } else {
                            ee = '"';
                            for (let P = 0; P < ae; P += 1) ee += n.asciiChars[V.string[P]];
                            ae < V.string.length && (ee += U), (ee += '"');
                          }
                        }
                        return ee;
                      })(R, G.opcode)}) `),
                    G.opcode.type === i.REP &&
                      (F += `(${(function (re, V) {
                        let ee = '';
                        if (V.type === i.REP)
                          if (re === l) {
                            let ae = V.min.toString(16).toUpperCase();
                            ae.length % 2 != 0 && (ae = `0${ae}`),
                              (ee = `x${ae}`),
                              V.max < 1 / 0
                                ? ((ae = V.max.toString(16).toUpperCase()),
                                  ae.length % 2 != 0 && (ae = `0${ae}`))
                                : (ae = 'inf'),
                              (ee += `&ndash;${ae}`);
                          } else
                            ee =
                              V.max < 1 / 0
                                ? `${V.min.toString(10)}&ndash;${V.max.toString(10)}`
                                : `${V.min.toString(10)}&ndash;inf`;
                        return ee;
                      })(R, G.opcode)}) `),
                    K && (F += '</span>'),
                    (F += '</td>'),
                    (F += '<td>'),
                    (F += D
                      ? (function (re, V, ee, ae, P, a) {
                          let c,
                            g,
                            S,
                            T,
                            k = '',
                            A = O;
                          const v = `<span class="${r.CLASS_LOOKBEHIND}">`,
                            M = `<span class="${r.CLASS_REMAINDER}">`,
                            N = '</span>';
                          let z = !1;
                          switch (ee) {
                            case i.EMPTY:
                              k += pe;
                            case i.NOMATCH:
                            case i.MATCH:
                            case i.ACTIVE:
                              (c = ae - P), (g = a - c), (S = a), (T = V.length - S);
                              break;
                            default:
                              throw new Error('unrecognized state');
                          }
                          return (
                            (A = O),
                            g > d
                              ? ((g = d), (A = U), (T = 0))
                              : g + T > d && ((A = U), (T = d - g)),
                            g > 0 && ((k += v), (k += ge(re, V, c, g, z)), (k += N), (z = !0)),
                            T > 0 && ((k += M), (k += ge(re, V, S, T, z)), (k += N)),
                            k + A
                          );
                        })(R, m, G.state, G.phraseIndex, G.phraseLength, q)
                      : H
                        ? (function (re, V, ee, ae, P) {
                            const a = `<span class="${r.CLASS_LOOKAHEAD}">`;
                            return J(re, V, ee, ae, P, a);
                          })(R, m, G.state, G.phraseIndex, G.phraseLength)
                        : (function (re, V, ee, ae, P) {
                            const a = `<span class="${r.CLASS_MATCH}">`;
                            return J(re, V, ee, ae, P, a);
                          })(R, m, G.state, G.phraseIndex, G.phraseLength)),
                    (F += `</td></tr>
`);
                }),
                (F +=
                  '<tr><th>(a)</th><th>(b)</th><th>(c)</th><th>(d)</th><th>(e)</th><th>(f)</th>'),
                (F += `<th>operator</th><th>phrase</th></tr>
`),
                (F += `</table>
`),
                F
              );
            };
          this.toHtml = function (R, L) {
            let C = 8;
            if (typeof R == 'string' && R.length >= 3) {
              const D = R.toLowerCase().slice(0, 3);
              D === 'hex' ? (C = l) : D === 'dec' ? (C = 10) : D === 'uni' && (C = 32);
            }
            let H = '';
            return (
              (H += (function (D, K) {
                let q;
                switch (D) {
                  case l:
                    q = 'hexadecimal';
                    break;
                  case 10:
                    q = 'decimal';
                    break;
                  case 8:
                    q = 'ASCII';
                    break;
                  case 32:
                    q = 'UNICODE';
                    break;
                  default:
                    throw new Error(`trace.js: htmlHeader: unrecognized mode: ${D}`);
                }
                let F = '';
                return (
                  (F += `<p>display mode: ${q}</p>
`),
                  (F += `<table class="${r.CLASS_TRACE}">
`),
                  typeof K == 'string' && (F += `<caption>${K}</caption>`),
                  F
                );
              })(C, L)),
              (H += ne(C)),
              (H += (function () {
                let D = '';
                return (
                  (D += `</table>
`),
                  (D += `<p class="${r.CLASS_MONOSPACE}">legend:<br>
`),
                  (D += `(a)&nbsp;-&nbsp;line number<br>
`),
                  (D += `(b)&nbsp;-&nbsp;matching line number<br>
`),
                  (D += `(c)&nbsp;-&nbsp;phrase offset<br>
`),
                  (D += `(d)&nbsp;-&nbsp;phrase length<br>
`),
                  (D += `(e)&nbsp;-&nbsp;tree depth<br>
`),
                  (D += `(f)&nbsp;-&nbsp;operator state<br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_ACTIVE}">&darr;</span>&nbsp;&nbsp;phrase opened<br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_MATCH}">&uarr;M</span> phrase matched<br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_EMPTY}">&uarr;E</span> empty phrase matched<br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_NOMATCH}">&uarr;N</span> phrase not matched<br>
`),
                  (D += `operator&nbsp;-&nbsp;ALT, CAT, REP, RNM, TRG, TLS, TBS<sup>&dagger;</sup>, UDT, AND, NOT, BKA, BKN, BKR, ABG, AEN<sup>&Dagger;</sup><br>
`),
                  (D += `phrase&nbsp;&nbsp;&nbsp;-&nbsp;up to 80 characters of the phrase being matched<br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_MATCH}">matched characters</span><br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_LOOKAHEAD}">matched characters in look ahead mode</span><br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_LOOKBEHIND}">matched characters in look behind mode</span><br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_REMAINDER}">remainder characters(not yet examined by parser)</span><br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<span class="${r.CLASS_CTRLCHAR}">control characters, TAB, LF, CR, etc. (ASCII mode only)</span><br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;${pe} empty string<br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;${O} end of input string<br>
`),
                  (D += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;${U} input string display truncated<br>
`),
                  (D += `</p>
`),
                  (D += `<p class="${r.CLASS_MONOSPACE}">
`),
                  (D += `<sup>&dagger;</sup>original ABNF operators:<br>
`),
                  (D += `ALT - alternation<br>
`),
                  (D += `CAT - concatenation<br>
`),
                  (D += `REP - repetition<br>
`),
                  (D += `RNM - rule name<br>
`),
                  (D += `TRG - terminal range<br>
`),
                  (D += `TLS - terminal literal string (case insensitive)<br>
`),
                  (D += `TBS - terminal binary string (case sensitive)<br>
`),
                  (D += `<br>
`),
                  (D += `<sup>&Dagger;</sup>super set SABNF operators:<br>
`),
                  (D += `UDT - user-defined terminal<br>
`),
                  (D += `AND - positive look ahead<br>
`),
                  (D += `NOT - negative look ahead<br>
`),
                  (D += `BKA - positive look behind<br>
`),
                  (D += `BKN - negative look behind<br>
`),
                  (D += `BKR - back reference<br>
`),
                  (D += `ABG - anchor - begin of input string<br>
`),
                  (D += `AEN - anchor - end of input string<br>
`),
                  (D += `</p>
`),
                  D
                );
              })()),
              H
            );
          };
        };
      },
      { './circular-buffer': 8, './identifiers': 10, './style': 14, './utilities': 16 },
    ],
    16: [
      function (e, t, s) {
        const n = e('./style'),
          r = e('../apg-conv-api/converter'),
          o = e('./emitcss'),
          i = e('./identifiers'),
          u = this,
          l = function (d, h, y) {
            let b,
              w = h;
            for (;;) {
              if (d <= 0) {
                (w = 0), (b = 0);
                break;
              }
              if (typeof w != 'number') {
                (w = 0), (b = d);
                break;
              }
              if (w >= d) {
                (w = d), (b = d);
                break;
              }
              if (typeof y != 'number') {
                b = d;
                break;
              }
              if (((b = w + y), b > d)) {
                b = d;
                break;
              }
              break;
            }
            return { beg: w, end: b };
          };
        (s.htmlToPage = function (d, h) {
          let y;
          if (typeof d != 'string')
            throw new Error('utilities.js: htmlToPage: input HTML is not a string');
          y = typeof h != 'string' ? 'htmlToPage' : h;
          let b = '';
          return (
            (b += `<!DOCTYPE html>
`),
            (b += `<html lang="en">
`),
            (b += `<head>
`),
            (b += `<meta charset="utf-8">
`),
            (b += `<title>${y}</title>
`),
            (b += `<style>
`),
            (b += o()),
            (b += `</style>
`),
            (b += `</head>
<body>
`),
            (b += `<p>${new Date()}</p>
`),
            (b += d),
            (b += `</body>
</html>
`),
            b
          );
        }),
          (s.parserResultToHtml = function (d, h) {
            let y,
              b,
              w = null;
            typeof h == 'string' && h !== '' && (w = h),
              (y =
                d.success === !0
                  ? `<span class="${n.CLASS_MATCH}">true</span>`
                  : `<span class="${n.CLASS_NOMATCH}">false</span>`),
              (b =
                d.state === i.EMPTY
                  ? `<span class="${n.CLASS_EMPTY}">EMPTY</span>`
                  : d.state === i.MATCH
                    ? `<span class="${n.CLASS_MATCH}">MATCH</span>`
                    : d.state === i.NOMATCH
                      ? `<span class="${n.CLASS_NOMATCH}">NOMATCH</span>`
                      : `<span class="${n.CLASS_NOMATCH}">unrecognized</span>`);
            let p = '';
            return (
              (p += `<table class="${n.CLASS_STATE}">
`),
              w &&
                (p += `<caption>${w}</caption>
`),
              (p += `<tr><th>state item</th><th>value</th><th>description</th></tr>
`),
              (p += `<tr><td>parser success</td><td>${y}</td>
`),
              (p += `<td><span class="${n.CLASS_MATCH}">true</span> if the parse succeeded,
`),
              (p += ` <span class="${n.CLASS_NOMATCH}">false</span> otherwise`),
              (p += `<br><i>NOTE: for success, entire string must be matched</i></td></tr>
`),
              (p += `<tr><td>parser state</td><td>${b}</td>
`),
              (p += `<td><span class="${n.CLASS_EMPTY}">EMPTY</span>, `),
              (p += `<span class="${n.CLASS_MATCH}">MATCH</span> or 
`),
              (p += `<span class="${n.CLASS_NOMATCH}">NOMATCH</span></td></tr>
`),
              (p += `<tr><td>string length</td><td>${d.length}</td><td>length of the input (sub)string</td></tr>
`),
              (p += `<tr><td>matched length</td><td>${d.matched}</td><td>number of input string characters matched</td></tr>
`),
              (p += `<tr><td>max matched</td><td>${d.maxMatched}</td><td>maximum number of input string characters matched</td></tr>
`),
              (p += `<tr><td>max tree depth</td><td>${d.maxTreeDepth}</td><td>maximum depth of the parse tree reached</td></tr>
`),
              (p += `<tr><td>node hits</td><td>${d.nodeHits}</td><td>number of parse tree node hits (opcode function calls)</td></tr>
`),
              (p += `<tr><td>input length</td><td>${d.inputLength}</td><td>length of full input string</td></tr>
`),
              (p += `<tr><td>sub-string begin</td><td>${d.subBegin}</td><td>sub-string first character index</td></tr>
`),
              (p += `<tr><td>sub-string end</td><td>${d.subEnd}</td><td>sub-string end-of-string index</td></tr>
`),
              (p += `<tr><td>sub-string length</td><td>${d.subLength}</td><td>sub-string length</td></tr>
`),
              (p += `</table>
`),
              p
            );
          }),
          (s.charsToString = function (d, h, y) {
            let b, w;
            if (typeof h == 'number') {
              if (h >= d.length) return '';
              b = h < 0 ? 0 : h;
            } else b = 0;
            if (typeof y == 'number') {
              if (y <= 0) return '';
              w = y > d.length - b ? d.length : b + y;
            } else w = d.length;
            return b < w ? r.encode('UTF16LE', d.slice(b, w)).toString('utf16le') : '';
          }),
          (s.stringToChars = function (d) {
            return r.decode('STRING', d);
          }),
          (s.opcodeToString = function (d) {
            let h = 'unknown';
            switch (d) {
              case i.ALT:
                h = 'ALT';
                break;
              case i.CAT:
                h = 'CAT';
                break;
              case i.RNM:
                h = 'RNM';
                break;
              case i.UDT:
                h = 'UDT';
                break;
              case i.AND:
                h = 'AND';
                break;
              case i.NOT:
                h = 'NOT';
                break;
              case i.REP:
                h = 'REP';
                break;
              case i.TRG:
                h = 'TRG';
                break;
              case i.TBS:
                h = 'TBS';
                break;
              case i.TLS:
                h = 'TLS';
                break;
              case i.BKR:
                h = 'BKR';
                break;
              case i.BKA:
                h = 'BKA';
                break;
              case i.BKN:
                h = 'BKN';
                break;
              case i.ABG:
                h = 'ABG';
                break;
              case i.AEN:
                h = 'AEN';
                break;
              default:
                throw new Error('unrecognized opcode');
            }
            return h;
          }),
          (s.stateToString = function (d) {
            let h = 'unknown';
            switch (d) {
              case i.ACTIVE:
                h = 'ACTIVE';
                break;
              case i.MATCH:
                h = 'MATCH';
                break;
              case i.EMPTY:
                h = 'EMPTY';
                break;
              case i.NOMATCH:
                h = 'NOMATCH';
                break;
              default:
                throw new Error('unrecognized state');
            }
            return h;
          }),
          (s.asciiChars = [
            'NUL',
            'SOH',
            'STX',
            'ETX',
            'EOT',
            'ENQ',
            'ACK',
            'BEL',
            'BS',
            'TAB',
            'LF',
            'VT',
            'FF',
            'CR',
            'SO',
            'SI',
            'DLE',
            'DC1',
            'DC2',
            'DC3',
            'DC4',
            'NAK',
            'SYN',
            'ETB',
            'CAN',
            'EM',
            'SUB',
            'ESC',
            'FS',
            'GS',
            'RS',
            'US',
            '&nbsp;',
            '!',
            '&#34;',
            '#',
            '$',
            '%',
            '&#38;',
            '&#39;',
            '(',
            ')',
            '*',
            '+',
            ',',
            '-',
            '.',
            '/',
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            ':',
            ';',
            '&#60;',
            '=',
            '&#62;',
            '?',
            '@',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            '[',
            '&#92;',
            ']',
            '^',
            '_',
            '`',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
            '{',
            '|',
            '}',
            '~',
            'DEL',
          ]),
          (s.charToHex = function (d) {
            let h = d.toString(16).toUpperCase();
            switch (h.length) {
              case 1:
              case 3:
              case 7:
                h = `0${h}`;
                break;
              case 2:
              case 6:
                h = `00${h}`;
                break;
              case 4:
                break;
              case 5:
                h = `000${h}`;
                break;
              default:
                throw new Error('unrecognized option');
            }
            return h;
          }),
          (s.charsToDec = function (d, h, y) {
            let b = '';
            if (!Array.isArray(d))
              throw new Error('utilities.js: charsToDec: input must be an array of integers');
            const w = l(d.length, h, y);
            if (w.end > w.beg) {
              b += d[w.beg];
              for (let p = w.beg + 1; p < w.end; p += 1) b += `,${d[p]}`;
            }
            return b;
          }),
          (s.charsToHex = function (d, h, y) {
            let b = '';
            if (!Array.isArray(d))
              throw new Error('utilities.js: charsToHex: input must be an array of integers');
            const w = l(d.length, h, y);
            if (w.end > w.beg) {
              b += `\\x${u.charToHex(d[w.beg])}`;
              for (let p = w.beg + 1; p < w.end; p += 1) b += `,\\x${u.charToHex(d[p])}`;
            }
            return b;
          }),
          (s.charsToHtmlEntities = function (d, h, y) {
            let b = '';
            if (!Array.isArray(d))
              throw new Error('utilities.js: charsToHex: input must be an array of integers');
            const w = l(d.length, h, y);
            if (w.end > w.beg)
              for (let p = w.beg; p < w.end; p += 1) b += `&#x${d[p].toString(16)};`;
            return b;
          }),
          (s.charsToUnicode = function (d, h, y) {
            let b = '';
            if (!Array.isArray(d))
              throw new Error('utilities.js: charsToUnicode: input must be an array of integers');
            const w = l(d.length, h, y);
            if (w.end > w.beg)
              for (let f = w.beg; f < w.end; f += 1)
                b +=
                  ((p = d[f]) >= 55296 && p <= 57343) || p > 1114111
                    ? ` U+${u.charToHex(d[f])}`
                    : `&#${d[f]};`;
            var p;
            return b;
          }),
          (s.charsToJsUnicode = function (d, h, y) {
            let b = '';
            if (!Array.isArray(d))
              throw new Error('utilities.js: charsToJsUnicode: input must be an array of integers');
            const w = l(d.length, h, y);
            if (w.end > w.beg) {
              b += `\\u${u.charToHex(d[w.beg])}`;
              for (let p = w.beg + 1; p < w.end; p += 1) b += `,\\u${u.charToHex(d[p])}`;
            }
            return b;
          }),
          (s.charsToAscii = function (d, h, y) {
            let b = '';
            if (!Array.isArray(d))
              throw new Error('utilities.js: charsToAscii: input must be an array of integers');
            const w = l(d.length, h, y);
            for (let p = w.beg; p < w.end; p += 1) {
              const f = d[p];
              b += f >= 32 && f <= 126 ? String.fromCharCode(f) : `\\x${u.charToHex(f)}`;
            }
            return b;
          }),
          (s.charsToAsciiHtml = function (d, h, y) {
            if (!Array.isArray(d))
              throw new Error('utilities.js: charsToAsciiHtml: input must be an array of integers');
            let b,
              w = '';
            const p = l(d.length, h, y);
            for (let f = p.beg; f < p.end; f += 1)
              (b = d[f]),
                (w +=
                  b < 32 || b === 127
                    ? `<span class="${n.CLASS_CTRLCHAR}">${u.asciiChars[b]}</span>`
                    : b > 127
                      ? `<span class="${n.CLASS_CTRLCHAR}">U+${u.charToHex(b)}</span>`
                      : u.asciiChars[b]);
            return w;
          }),
          (s.stringToAsciiHtml = function (d) {
            const h = r.decode('STRING', d);
            return this.charsToAsciiHtml(h);
          });
      },
      { '../apg-conv-api/converter': 4, './emitcss': 9, './identifiers': 10, './style': 14 },
    ],
    17: [
      function (e, t, s) {
        (globalThis.apgLib = e('./node-exports')),
          (globalThis.apgConvApi = e('../apg-conv-api/node-exports'));
      },
      { '../apg-conv-api/node-exports': 5, './node-exports': 11 },
    ],
  },
  {},
  [17]
);
function Yl() {
  const e = {};
  return (
    (e.grammarObject = 'grammarObject'),
    (e.rules = []),
    (e.rules[0] = { name: 'ALPHA', lower: 'alpha', index: 0, isBkr: !1 }),
    (e.rules[1] = { name: 'BIT', lower: 'bit', index: 1, isBkr: !1 }),
    (e.rules[2] = { name: 'CHAR', lower: 'char', index: 2, isBkr: !1 }),
    (e.rules[3] = { name: 'CR', lower: 'cr', index: 3, isBkr: !1 }),
    (e.rules[4] = { name: 'CRLF', lower: 'crlf', index: 4, isBkr: !1 }),
    (e.rules[5] = { name: 'CTL', lower: 'ctl', index: 5, isBkr: !1 }),
    (e.rules[6] = { name: 'DIGIT', lower: 'digit', index: 6, isBkr: !1 }),
    (e.rules[7] = { name: 'DQUOTE', lower: 'dquote', index: 7, isBkr: !1 }),
    (e.rules[8] = { name: 'HEXDIG', lower: 'hexdig', index: 8, isBkr: !1 }),
    (e.rules[9] = { name: 'HTAB', lower: 'htab', index: 9, isBkr: !1 }),
    (e.rules[10] = { name: 'LF', lower: 'lf', index: 10, isBkr: !1 }),
    (e.rules[11] = { name: 'LWSP', lower: 'lwsp', index: 11, isBkr: !1 }),
    (e.rules[12] = { name: 'OCTET', lower: 'octet', index: 12, isBkr: !1 }),
    (e.rules[13] = { name: 'SP', lower: 'sp', index: 13, isBkr: !1 }),
    (e.rules[14] = { name: 'VCHAR', lower: 'vchar', index: 14, isBkr: !1 }),
    (e.rules[15] = { name: 'WSP', lower: 'wsp', index: 15, isBkr: !1 }),
    (e.rules[16] = { name: 'date-fullyear', lower: 'date-fullyear', index: 16, isBkr: !1 }),
    (e.rules[17] = { name: 'date-month', lower: 'date-month', index: 17, isBkr: !1 }),
    (e.rules[18] = { name: 'date-mday', lower: 'date-mday', index: 18, isBkr: !1 }),
    (e.rules[19] = { name: 'time-hour', lower: 'time-hour', index: 19, isBkr: !1 }),
    (e.rules[20] = { name: 'time-minute', lower: 'time-minute', index: 20, isBkr: !1 }),
    (e.rules[21] = { name: 'time-second', lower: 'time-second', index: 21, isBkr: !1 }),
    (e.rules[22] = { name: 'time-secfrac', lower: 'time-secfrac', index: 22, isBkr: !1 }),
    (e.rules[23] = { name: 'time-numoffset', lower: 'time-numoffset', index: 23, isBkr: !1 }),
    (e.rules[24] = { name: 'time-offset', lower: 'time-offset', index: 24, isBkr: !1 }),
    (e.rules[25] = { name: 'partial-time', lower: 'partial-time', index: 25, isBkr: !1 }),
    (e.rules[26] = { name: 'full-date', lower: 'full-date', index: 26, isBkr: !1 }),
    (e.rules[27] = { name: 'full-time', lower: 'full-time', index: 27, isBkr: !1 }),
    (e.rules[28] = { name: 'date-time', lower: 'date-time', index: 28, isBkr: !1 }),
    (e.rules[29] = { name: 'URI', lower: 'uri', index: 29, isBkr: !1 }),
    (e.rules[30] = { name: 'hier-part', lower: 'hier-part', index: 30, isBkr: !1 }),
    (e.rules[31] = { name: 'URI-reference', lower: 'uri-reference', index: 31, isBkr: !1 }),
    (e.rules[32] = { name: 'absolute-URI', lower: 'absolute-uri', index: 32, isBkr: !1 }),
    (e.rules[33] = { name: 'relative-ref', lower: 'relative-ref', index: 33, isBkr: !1 }),
    (e.rules[34] = { name: 'relative-part', lower: 'relative-part', index: 34, isBkr: !1 }),
    (e.rules[35] = { name: 'scheme', lower: 'scheme', index: 35, isBkr: !1 }),
    (e.rules[36] = { name: 'authority', lower: 'authority', index: 36, isBkr: !1 }),
    (e.rules[37] = { name: 'userinfo', lower: 'userinfo', index: 37, isBkr: !1 }),
    (e.rules[38] = { name: 'host', lower: 'host', index: 38, isBkr: !1 }),
    (e.rules[39] = { name: 'port', lower: 'port', index: 39, isBkr: !1 }),
    (e.rules[40] = { name: 'IP-literal', lower: 'ip-literal', index: 40, isBkr: !1 }),
    (e.rules[41] = { name: 'IPvFuture', lower: 'ipvfuture', index: 41, isBkr: !1 }),
    (e.rules[42] = { name: 'IPv6address', lower: 'ipv6address', index: 42, isBkr: !1 }),
    (e.rules[43] = { name: 'h16', lower: 'h16', index: 43, isBkr: !1 }),
    (e.rules[44] = { name: 'ls32', lower: 'ls32', index: 44, isBkr: !1 }),
    (e.rules[45] = { name: 'IPv4address', lower: 'ipv4address', index: 45, isBkr: !1 }),
    (e.rules[46] = { name: 'dec-octet', lower: 'dec-octet', index: 46, isBkr: !1 }),
    (e.rules[47] = { name: 'reg-name', lower: 'reg-name', index: 47, isBkr: !1 }),
    (e.rules[48] = { name: 'path', lower: 'path', index: 48, isBkr: !1 }),
    (e.rules[49] = { name: 'path-abempty', lower: 'path-abempty', index: 49, isBkr: !1 }),
    (e.rules[50] = { name: 'path-absolute', lower: 'path-absolute', index: 50, isBkr: !1 }),
    (e.rules[51] = { name: 'path-noscheme', lower: 'path-noscheme', index: 51, isBkr: !1 }),
    (e.rules[52] = { name: 'path-rootless', lower: 'path-rootless', index: 52, isBkr: !1 }),
    (e.rules[53] = { name: 'path-empty', lower: 'path-empty', index: 53, isBkr: !1 }),
    (e.rules[54] = { name: 'segment', lower: 'segment', index: 54, isBkr: !1 }),
    (e.rules[55] = { name: 'segment-nz', lower: 'segment-nz', index: 55, isBkr: !1 }),
    (e.rules[56] = { name: 'segment-nz-nc', lower: 'segment-nz-nc', index: 56, isBkr: !1 }),
    (e.rules[57] = { name: 'pchar', lower: 'pchar', index: 57, isBkr: !1 }),
    (e.rules[58] = { name: 'query', lower: 'query', index: 58, isBkr: !1 }),
    (e.rules[59] = { name: 'fragment', lower: 'fragment', index: 59, isBkr: !1 }),
    (e.rules[60] = { name: 'pct-encoded', lower: 'pct-encoded', index: 60, isBkr: !1 }),
    (e.rules[61] = { name: 'unreserved', lower: 'unreserved', index: 61, isBkr: !1 }),
    (e.rules[62] = { name: 'reserved', lower: 'reserved', index: 62, isBkr: !1 }),
    (e.rules[63] = { name: 'gen-delims', lower: 'gen-delims', index: 63, isBkr: !1 }),
    (e.rules[64] = { name: 'sub-delims', lower: 'sub-delims', index: 64, isBkr: !1 }),
    (e.rules[65] = {
      name: 'sign-in-with-ethereum',
      lower: 'sign-in-with-ethereum',
      index: 65,
      isBkr: !1,
    }),
    (e.rules[66] = { name: 'message-domain', lower: 'message-domain', index: 66, isBkr: !1 }),
    (e.rules[67] = { name: 'message-address', lower: 'message-address', index: 67, isBkr: !1 }),
    (e.rules[68] = { name: 'message-statement', lower: 'message-statement', index: 68, isBkr: !1 }),
    (e.rules[69] = { name: 'message-uri', lower: 'message-uri', index: 69, isBkr: !1 }),
    (e.rules[70] = { name: 'message-version', lower: 'message-version', index: 70, isBkr: !1 }),
    (e.rules[71] = { name: 'message-chain-id', lower: 'message-chain-id', index: 71, isBkr: !1 }),
    (e.rules[72] = { name: 'message-nonce', lower: 'message-nonce', index: 72, isBkr: !1 }),
    (e.rules[73] = { name: 'message-issued-at', lower: 'message-issued-at', index: 73, isBkr: !1 }),
    (e.rules[74] = {
      name: 'message-expiration-time',
      lower: 'message-expiration-time',
      index: 74,
      isBkr: !1,
    }),
    (e.rules[75] = {
      name: 'message-not-before',
      lower: 'message-not-before',
      index: 75,
      isBkr: !1,
    }),
    (e.rules[76] = {
      name: 'message-request-id',
      lower: 'message-request-id',
      index: 76,
      isBkr: !1,
    }),
    (e.rules[77] = { name: 'message-resources', lower: 'message-resources', index: 77, isBkr: !1 }),
    (e.udts = []),
    (e.rules[0].opcodes = []),
    (e.rules[0].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[0].opcodes[1] = { type: 5, min: 65, max: 90 }),
    (e.rules[0].opcodes[2] = { type: 5, min: 97, max: 122 }),
    (e.rules[1].opcodes = []),
    (e.rules[1].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[1].opcodes[1] = { type: 7, string: [48] }),
    (e.rules[1].opcodes[2] = { type: 7, string: [49] }),
    (e.rules[2].opcodes = []),
    (e.rules[2].opcodes[0] = { type: 5, min: 1, max: 127 }),
    (e.rules[3].opcodes = []),
    (e.rules[3].opcodes[0] = { type: 6, string: [13] }),
    (e.rules[4].opcodes = []),
    (e.rules[4].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[4].opcodes[1] = { type: 4, index: 3 }),
    (e.rules[4].opcodes[2] = { type: 4, index: 10 }),
    (e.rules[5].opcodes = []),
    (e.rules[5].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[5].opcodes[1] = { type: 5, min: 0, max: 31 }),
    (e.rules[5].opcodes[2] = { type: 6, string: [127] }),
    (e.rules[6].opcodes = []),
    (e.rules[6].opcodes[0] = { type: 5, min: 48, max: 57 }),
    (e.rules[7].opcodes = []),
    (e.rules[7].opcodes[0] = { type: 6, string: [34] }),
    (e.rules[8].opcodes = []),
    (e.rules[8].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[8].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[8].opcodes[2] = { type: 7, string: [97] }),
    (e.rules[8].opcodes[3] = { type: 7, string: [98] }),
    (e.rules[8].opcodes[4] = { type: 7, string: [99] }),
    (e.rules[8].opcodes[5] = { type: 7, string: [100] }),
    (e.rules[8].opcodes[6] = { type: 7, string: [101] }),
    (e.rules[8].opcodes[7] = { type: 7, string: [102] }),
    (e.rules[9].opcodes = []),
    (e.rules[9].opcodes[0] = { type: 6, string: [9] }),
    (e.rules[10].opcodes = []),
    (e.rules[10].opcodes[0] = { type: 6, string: [10] }),
    (e.rules[11].opcodes = []),
    (e.rules[11].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[11].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[11].opcodes[2] = { type: 4, index: 15 }),
    (e.rules[11].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[11].opcodes[4] = { type: 4, index: 4 }),
    (e.rules[11].opcodes[5] = { type: 4, index: 15 }),
    (e.rules[12].opcodes = []),
    (e.rules[12].opcodes[0] = { type: 5, min: 0, max: 255 }),
    (e.rules[13].opcodes = []),
    (e.rules[13].opcodes[0] = { type: 6, string: [32] }),
    (e.rules[14].opcodes = []),
    (e.rules[14].opcodes[0] = { type: 5, min: 33, max: 126 }),
    (e.rules[15].opcodes = []),
    (e.rules[15].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[15].opcodes[1] = { type: 4, index: 13 }),
    (e.rules[15].opcodes[2] = { type: 4, index: 9 }),
    (e.rules[16].opcodes = []),
    (e.rules[16].opcodes[0] = { type: 3, min: 4, max: 4 }),
    (e.rules[16].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[17].opcodes = []),
    (e.rules[17].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[17].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[18].opcodes = []),
    (e.rules[18].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[18].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[19].opcodes = []),
    (e.rules[19].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[19].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[20].opcodes = []),
    (e.rules[20].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[20].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[21].opcodes = []),
    (e.rules[21].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[21].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[22].opcodes = []),
    (e.rules[22].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[22].opcodes[1] = { type: 7, string: [46] }),
    (e.rules[22].opcodes[2] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[22].opcodes[3] = { type: 4, index: 6 }),
    (e.rules[23].opcodes = []),
    (e.rules[23].opcodes[0] = { type: 2, children: [1, 4, 5, 6] }),
    (e.rules[23].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[23].opcodes[2] = { type: 7, string: [43] }),
    (e.rules[23].opcodes[3] = { type: 7, string: [45] }),
    (e.rules[23].opcodes[4] = { type: 4, index: 19 }),
    (e.rules[23].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[23].opcodes[6] = { type: 4, index: 20 }),
    (e.rules[24].opcodes = []),
    (e.rules[24].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[24].opcodes[1] = { type: 7, string: [122] }),
    (e.rules[24].opcodes[2] = { type: 4, index: 23 }),
    (e.rules[25].opcodes = []),
    (e.rules[25].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5, 6] }),
    (e.rules[25].opcodes[1] = { type: 4, index: 19 }),
    (e.rules[25].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[25].opcodes[3] = { type: 4, index: 20 }),
    (e.rules[25].opcodes[4] = { type: 7, string: [58] }),
    (e.rules[25].opcodes[5] = { type: 4, index: 21 }),
    (e.rules[25].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[25].opcodes[7] = { type: 4, index: 22 }),
    (e.rules[26].opcodes = []),
    (e.rules[26].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5] }),
    (e.rules[26].opcodes[1] = { type: 4, index: 16 }),
    (e.rules[26].opcodes[2] = { type: 7, string: [45] }),
    (e.rules[26].opcodes[3] = { type: 4, index: 17 }),
    (e.rules[26].opcodes[4] = { type: 7, string: [45] }),
    (e.rules[26].opcodes[5] = { type: 4, index: 18 }),
    (e.rules[27].opcodes = []),
    (e.rules[27].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[27].opcodes[1] = { type: 4, index: 25 }),
    (e.rules[27].opcodes[2] = { type: 4, index: 24 }),
    (e.rules[28].opcodes = []),
    (e.rules[28].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[28].opcodes[1] = { type: 4, index: 26 }),
    (e.rules[28].opcodes[2] = { type: 7, string: [116] }),
    (e.rules[28].opcodes[3] = { type: 4, index: 27 }),
    (e.rules[29].opcodes = []),
    (e.rules[29].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 8] }),
    (e.rules[29].opcodes[1] = { type: 4, index: 35 }),
    (e.rules[29].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[29].opcodes[3] = { type: 4, index: 30 }),
    (e.rules[29].opcodes[4] = { type: 3, min: 0, max: 1 }),
    (e.rules[29].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[29].opcodes[6] = { type: 7, string: [63] }),
    (e.rules[29].opcodes[7] = { type: 4, index: 58 }),
    (e.rules[29].opcodes[8] = { type: 3, min: 0, max: 1 }),
    (e.rules[29].opcodes[9] = { type: 2, children: [10, 11] }),
    (e.rules[29].opcodes[10] = { type: 7, string: [35] }),
    (e.rules[29].opcodes[11] = { type: 4, index: 59 }),
    (e.rules[30].opcodes = []),
    (e.rules[30].opcodes[0] = { type: 1, children: [1, 5, 6, 7] }),
    (e.rules[30].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[30].opcodes[2] = { type: 7, string: [47, 47] }),
    (e.rules[30].opcodes[3] = { type: 4, index: 36 }),
    (e.rules[30].opcodes[4] = { type: 4, index: 49 }),
    (e.rules[30].opcodes[5] = { type: 4, index: 50 }),
    (e.rules[30].opcodes[6] = { type: 4, index: 52 }),
    (e.rules[30].opcodes[7] = { type: 4, index: 53 }),
    (e.rules[31].opcodes = []),
    (e.rules[31].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[31].opcodes[1] = { type: 4, index: 29 }),
    (e.rules[31].opcodes[2] = { type: 4, index: 33 }),
    (e.rules[32].opcodes = []),
    (e.rules[32].opcodes[0] = { type: 2, children: [1, 2, 3, 4] }),
    (e.rules[32].opcodes[1] = { type: 4, index: 35 }),
    (e.rules[32].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[32].opcodes[3] = { type: 4, index: 30 }),
    (e.rules[32].opcodes[4] = { type: 3, min: 0, max: 1 }),
    (e.rules[32].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[32].opcodes[6] = { type: 7, string: [63] }),
    (e.rules[32].opcodes[7] = { type: 4, index: 58 }),
    (e.rules[33].opcodes = []),
    (e.rules[33].opcodes[0] = { type: 2, children: [1, 2, 6] }),
    (e.rules[33].opcodes[1] = { type: 4, index: 34 }),
    (e.rules[33].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[33].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[33].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[33].opcodes[5] = { type: 4, index: 58 }),
    (e.rules[33].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[33].opcodes[7] = { type: 2, children: [8, 9] }),
    (e.rules[33].opcodes[8] = { type: 7, string: [35] }),
    (e.rules[33].opcodes[9] = { type: 4, index: 59 }),
    (e.rules[34].opcodes = []),
    (e.rules[34].opcodes[0] = { type: 1, children: [1, 5, 6, 7] }),
    (e.rules[34].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[34].opcodes[2] = { type: 7, string: [47, 47] }),
    (e.rules[34].opcodes[3] = { type: 4, index: 36 }),
    (e.rules[34].opcodes[4] = { type: 4, index: 49 }),
    (e.rules[34].opcodes[5] = { type: 4, index: 50 }),
    (e.rules[34].opcodes[6] = { type: 4, index: 51 }),
    (e.rules[34].opcodes[7] = { type: 4, index: 53 }),
    (e.rules[35].opcodes = []),
    (e.rules[35].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[35].opcodes[1] = { type: 4, index: 0 }),
    (e.rules[35].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[35].opcodes[3] = { type: 1, children: [4, 5, 6, 7, 8] }),
    (e.rules[35].opcodes[4] = { type: 4, index: 0 }),
    (e.rules[35].opcodes[5] = { type: 4, index: 6 }),
    (e.rules[35].opcodes[6] = { type: 7, string: [43] }),
    (e.rules[35].opcodes[7] = { type: 7, string: [45] }),
    (e.rules[35].opcodes[8] = { type: 7, string: [46] }),
    (e.rules[36].opcodes = []),
    (e.rules[36].opcodes[0] = { type: 2, children: [1, 5, 6] }),
    (e.rules[36].opcodes[1] = { type: 3, min: 0, max: 1 }),
    (e.rules[36].opcodes[2] = { type: 2, children: [3, 4] }),
    (e.rules[36].opcodes[3] = { type: 4, index: 37 }),
    (e.rules[36].opcodes[4] = { type: 7, string: [64] }),
    (e.rules[36].opcodes[5] = { type: 4, index: 38 }),
    (e.rules[36].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[36].opcodes[7] = { type: 2, children: [8, 9] }),
    (e.rules[36].opcodes[8] = { type: 7, string: [58] }),
    (e.rules[36].opcodes[9] = { type: 4, index: 39 }),
    (e.rules[37].opcodes = []),
    (e.rules[37].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[37].opcodes[1] = { type: 1, children: [2, 3, 4, 5] }),
    (e.rules[37].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[37].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[37].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[37].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[38].opcodes = []),
    (e.rules[38].opcodes[0] = { type: 1, children: [1, 2, 3] }),
    (e.rules[38].opcodes[1] = { type: 4, index: 40 }),
    (e.rules[38].opcodes[2] = { type: 4, index: 45 }),
    (e.rules[38].opcodes[3] = { type: 4, index: 47 }),
    (e.rules[39].opcodes = []),
    (e.rules[39].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[39].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[40].opcodes = []),
    (e.rules[40].opcodes[0] = { type: 2, children: [1, 2, 5] }),
    (e.rules[40].opcodes[1] = { type: 7, string: [91] }),
    (e.rules[40].opcodes[2] = { type: 1, children: [3, 4] }),
    (e.rules[40].opcodes[3] = { type: 4, index: 42 }),
    (e.rules[40].opcodes[4] = { type: 4, index: 41 }),
    (e.rules[40].opcodes[5] = { type: 7, string: [93] }),
    (e.rules[41].opcodes = []),
    (e.rules[41].opcodes[0] = { type: 2, children: [1, 2, 4, 5] }),
    (e.rules[41].opcodes[1] = { type: 7, string: [118] }),
    (e.rules[41].opcodes[2] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[41].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[41].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[41].opcodes[5] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[41].opcodes[6] = { type: 1, children: [7, 8, 9] }),
    (e.rules[41].opcodes[7] = { type: 4, index: 61 }),
    (e.rules[41].opcodes[8] = { type: 4, index: 64 }),
    (e.rules[41].opcodes[9] = { type: 7, string: [58] }),
    (e.rules[42].opcodes = []),
    (e.rules[42].opcodes[0] = { type: 1, children: [1, 7, 14, 23, 37, 51, 63, 73, 83] }),
    (e.rules[42].opcodes[1] = { type: 2, children: [2, 6] }),
    (e.rules[42].opcodes[2] = { type: 3, min: 6, max: 6 }),
    (e.rules[42].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[42].opcodes[4] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[6] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[7] = { type: 2, children: [8, 9, 13] }),
    (e.rules[42].opcodes[8] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[9] = { type: 3, min: 5, max: 5 }),
    (e.rules[42].opcodes[10] = { type: 2, children: [11, 12] }),
    (e.rules[42].opcodes[11] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[12] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[13] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[14] = { type: 2, children: [15, 17, 18, 22] }),
    (e.rules[42].opcodes[15] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[16] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[17] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[18] = { type: 3, min: 4, max: 4 }),
    (e.rules[42].opcodes[19] = { type: 2, children: [20, 21] }),
    (e.rules[42].opcodes[20] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[21] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[22] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[23] = { type: 2, children: [24, 31, 32, 36] }),
    (e.rules[42].opcodes[24] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[25] = { type: 2, children: [26, 30] }),
    (e.rules[42].opcodes[26] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[27] = { type: 2, children: [28, 29] }),
    (e.rules[42].opcodes[28] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[29] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[30] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[31] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[32] = { type: 3, min: 3, max: 3 }),
    (e.rules[42].opcodes[33] = { type: 2, children: [34, 35] }),
    (e.rules[42].opcodes[34] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[35] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[36] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[37] = { type: 2, children: [38, 45, 46, 50] }),
    (e.rules[42].opcodes[38] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[39] = { type: 2, children: [40, 44] }),
    (e.rules[42].opcodes[40] = { type: 3, min: 0, max: 2 }),
    (e.rules[42].opcodes[41] = { type: 2, children: [42, 43] }),
    (e.rules[42].opcodes[42] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[43] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[44] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[45] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[46] = { type: 3, min: 2, max: 2 }),
    (e.rules[42].opcodes[47] = { type: 2, children: [48, 49] }),
    (e.rules[42].opcodes[48] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[49] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[50] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[51] = { type: 2, children: [52, 59, 60, 61, 62] }),
    (e.rules[42].opcodes[52] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[53] = { type: 2, children: [54, 58] }),
    (e.rules[42].opcodes[54] = { type: 3, min: 0, max: 3 }),
    (e.rules[42].opcodes[55] = { type: 2, children: [56, 57] }),
    (e.rules[42].opcodes[56] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[57] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[58] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[59] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[60] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[61] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[62] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[63] = { type: 2, children: [64, 71, 72] }),
    (e.rules[42].opcodes[64] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[65] = { type: 2, children: [66, 70] }),
    (e.rules[42].opcodes[66] = { type: 3, min: 0, max: 4 }),
    (e.rules[42].opcodes[67] = { type: 2, children: [68, 69] }),
    (e.rules[42].opcodes[68] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[69] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[70] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[71] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[72] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[73] = { type: 2, children: [74, 81, 82] }),
    (e.rules[42].opcodes[74] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[75] = { type: 2, children: [76, 80] }),
    (e.rules[42].opcodes[76] = { type: 3, min: 0, max: 5 }),
    (e.rules[42].opcodes[77] = { type: 2, children: [78, 79] }),
    (e.rules[42].opcodes[78] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[79] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[80] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[81] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[82] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[83] = { type: 2, children: [84, 91] }),
    (e.rules[42].opcodes[84] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[85] = { type: 2, children: [86, 90] }),
    (e.rules[42].opcodes[86] = { type: 3, min: 0, max: 6 }),
    (e.rules[42].opcodes[87] = { type: 2, children: [88, 89] }),
    (e.rules[42].opcodes[88] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[89] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[90] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[91] = { type: 7, string: [58, 58] }),
    (e.rules[43].opcodes = []),
    (e.rules[43].opcodes[0] = { type: 3, min: 1, max: 4 }),
    (e.rules[43].opcodes[1] = { type: 4, index: 8 }),
    (e.rules[44].opcodes = []),
    (e.rules[44].opcodes[0] = { type: 1, children: [1, 5] }),
    (e.rules[44].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[44].opcodes[2] = { type: 4, index: 43 }),
    (e.rules[44].opcodes[3] = { type: 7, string: [58] }),
    (e.rules[44].opcodes[4] = { type: 4, index: 43 }),
    (e.rules[44].opcodes[5] = { type: 4, index: 45 }),
    (e.rules[45].opcodes = []),
    (e.rules[45].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[45].opcodes[1] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[2] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[3] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[5] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[6] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[7] = { type: 4, index: 46 }),
    (e.rules[46].opcodes = []),
    (e.rules[46].opcodes[0] = { type: 1, children: [1, 2, 5, 9, 13] }),
    (e.rules[46].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[2] = { type: 2, children: [3, 4] }),
    (e.rules[46].opcodes[3] = { type: 5, min: 49, max: 57 }),
    (e.rules[46].opcodes[4] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[46].opcodes[6] = { type: 7, string: [49] }),
    (e.rules[46].opcodes[7] = { type: 3, min: 2, max: 2 }),
    (e.rules[46].opcodes[8] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[9] = { type: 2, children: [10, 11, 12] }),
    (e.rules[46].opcodes[10] = { type: 7, string: [50] }),
    (e.rules[46].opcodes[11] = { type: 5, min: 48, max: 52 }),
    (e.rules[46].opcodes[12] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[13] = { type: 2, children: [14, 15] }),
    (e.rules[46].opcodes[14] = { type: 7, string: [50, 53] }),
    (e.rules[46].opcodes[15] = { type: 5, min: 48, max: 53 }),
    (e.rules[47].opcodes = []),
    (e.rules[47].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[47].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[47].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[47].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[47].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[48].opcodes = []),
    (e.rules[48].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5] }),
    (e.rules[48].opcodes[1] = { type: 4, index: 49 }),
    (e.rules[48].opcodes[2] = { type: 4, index: 50 }),
    (e.rules[48].opcodes[3] = { type: 4, index: 51 }),
    (e.rules[48].opcodes[4] = { type: 4, index: 52 }),
    (e.rules[48].opcodes[5] = { type: 4, index: 53 }),
    (e.rules[49].opcodes = []),
    (e.rules[49].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[49].opcodes[1] = { type: 2, children: [2, 3] }),
    (e.rules[49].opcodes[2] = { type: 7, string: [47] }),
    (e.rules[49].opcodes[3] = { type: 4, index: 54 }),
    (e.rules[50].opcodes = []),
    (e.rules[50].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[50].opcodes[1] = { type: 7, string: [47] }),
    (e.rules[50].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[50].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[50].opcodes[4] = { type: 4, index: 55 }),
    (e.rules[50].opcodes[5] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[50].opcodes[6] = { type: 2, children: [7, 8] }),
    (e.rules[50].opcodes[7] = { type: 7, string: [47] }),
    (e.rules[50].opcodes[8] = { type: 4, index: 54 }),
    (e.rules[51].opcodes = []),
    (e.rules[51].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[51].opcodes[1] = { type: 4, index: 56 }),
    (e.rules[51].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[51].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[51].opcodes[4] = { type: 7, string: [47] }),
    (e.rules[51].opcodes[5] = { type: 4, index: 54 }),
    (e.rules[52].opcodes = []),
    (e.rules[52].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[52].opcodes[1] = { type: 4, index: 55 }),
    (e.rules[52].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[52].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[52].opcodes[4] = { type: 7, string: [47] }),
    (e.rules[52].opcodes[5] = { type: 4, index: 54 }),
    (e.rules[53].opcodes = []),
    (e.rules[53].opcodes[0] = { type: 3, min: 0, max: 0 }),
    (e.rules[53].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[54].opcodes = []),
    (e.rules[54].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[54].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[55].opcodes = []),
    (e.rules[55].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[55].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[56].opcodes = []),
    (e.rules[56].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[56].opcodes[1] = { type: 1, children: [2, 3, 4, 5] }),
    (e.rules[56].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[56].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[56].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[56].opcodes[5] = { type: 7, string: [64] }),
    (e.rules[57].opcodes = []),
    (e.rules[57].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5] }),
    (e.rules[57].opcodes[1] = { type: 4, index: 61 }),
    (e.rules[57].opcodes[2] = { type: 4, index: 60 }),
    (e.rules[57].opcodes[3] = { type: 4, index: 64 }),
    (e.rules[57].opcodes[4] = { type: 7, string: [58] }),
    (e.rules[57].opcodes[5] = { type: 7, string: [64] }),
    (e.rules[58].opcodes = []),
    (e.rules[58].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[58].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[58].opcodes[2] = { type: 4, index: 57 }),
    (e.rules[58].opcodes[3] = { type: 7, string: [47] }),
    (e.rules[58].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[59].opcodes = []),
    (e.rules[59].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[59].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[59].opcodes[2] = { type: 4, index: 57 }),
    (e.rules[59].opcodes[3] = { type: 7, string: [47] }),
    (e.rules[59].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[60].opcodes = []),
    (e.rules[60].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[60].opcodes[1] = { type: 7, string: [37] }),
    (e.rules[60].opcodes[2] = { type: 4, index: 8 }),
    (e.rules[60].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[61].opcodes = []),
    (e.rules[61].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6] }),
    (e.rules[61].opcodes[1] = { type: 4, index: 0 }),
    (e.rules[61].opcodes[2] = { type: 4, index: 6 }),
    (e.rules[61].opcodes[3] = { type: 7, string: [45] }),
    (e.rules[61].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[61].opcodes[5] = { type: 7, string: [95] }),
    (e.rules[61].opcodes[6] = { type: 7, string: [126] }),
    (e.rules[62].opcodes = []),
    (e.rules[62].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[62].opcodes[1] = { type: 4, index: 63 }),
    (e.rules[62].opcodes[2] = { type: 4, index: 64 }),
    (e.rules[63].opcodes = []),
    (e.rules[63].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[63].opcodes[1] = { type: 7, string: [58] }),
    (e.rules[63].opcodes[2] = { type: 7, string: [47] }),
    (e.rules[63].opcodes[3] = { type: 7, string: [63] }),
    (e.rules[63].opcodes[4] = { type: 7, string: [35] }),
    (e.rules[63].opcodes[5] = { type: 7, string: [91] }),
    (e.rules[63].opcodes[6] = { type: 7, string: [93] }),
    (e.rules[63].opcodes[7] = { type: 7, string: [64] }),
    (e.rules[64].opcodes = []),
    (e.rules[64].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }),
    (e.rules[64].opcodes[1] = { type: 7, string: [33] }),
    (e.rules[64].opcodes[2] = { type: 7, string: [36] }),
    (e.rules[64].opcodes[3] = { type: 7, string: [38] }),
    (e.rules[64].opcodes[4] = { type: 7, string: [39] }),
    (e.rules[64].opcodes[5] = { type: 7, string: [40] }),
    (e.rules[64].opcodes[6] = { type: 7, string: [41] }),
    (e.rules[64].opcodes[7] = { type: 7, string: [42] }),
    (e.rules[64].opcodes[8] = { type: 7, string: [43] }),
    (e.rules[64].opcodes[9] = { type: 7, string: [44] }),
    (e.rules[64].opcodes[10] = { type: 7, string: [59] }),
    (e.rules[64].opcodes[11] = { type: 7, string: [61] }),
    (e.rules[65].opcodes = []),
    (e.rules[65].opcodes[0] = {
      type: 2,
      children: [
        1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 31, 36,
        41,
      ],
    }),
    (e.rules[65].opcodes[1] = { type: 4, index: 66 }),
    (e.rules[65].opcodes[2] = {
      type: 6,
      string: [
        32, 119, 97, 110, 116, 115, 32, 121, 111, 117, 32, 116, 111, 32, 115, 105, 103, 110, 32,
        105, 110, 32, 119, 105, 116, 104, 32, 121, 111, 117, 114, 32, 69, 116, 104, 101, 114, 101,
        117, 109, 32, 97, 99, 99, 111, 117, 110, 116, 58,
      ],
    }),
    (e.rules[65].opcodes[3] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[4] = { type: 4, index: 67 }),
    (e.rules[65].opcodes[5] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[6] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[7] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[8] = { type: 2, children: [9, 10] }),
    (e.rules[65].opcodes[9] = { type: 4, index: 68 }),
    (e.rules[65].opcodes[10] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[11] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[12] = { type: 6, string: [85, 82, 73, 58, 32] }),
    (e.rules[65].opcodes[13] = { type: 4, index: 69 }),
    (e.rules[65].opcodes[14] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[15] = { type: 6, string: [86, 101, 114, 115, 105, 111, 110, 58, 32] }),
    (e.rules[65].opcodes[16] = { type: 4, index: 70 }),
    (e.rules[65].opcodes[17] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[18] = { type: 6, string: [67, 104, 97, 105, 110, 32, 73, 68, 58, 32] }),
    (e.rules[65].opcodes[19] = { type: 4, index: 71 }),
    (e.rules[65].opcodes[20] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[21] = { type: 6, string: [78, 111, 110, 99, 101, 58, 32] }),
    (e.rules[65].opcodes[22] = { type: 4, index: 72 }),
    (e.rules[65].opcodes[23] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[24] = {
      type: 6,
      string: [73, 115, 115, 117, 101, 100, 32, 65, 116, 58, 32],
    }),
    (e.rules[65].opcodes[25] = { type: 4, index: 73 }),
    (e.rules[65].opcodes[26] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[27] = { type: 2, children: [28, 29, 30] }),
    (e.rules[65].opcodes[28] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[29] = {
      type: 6,
      string: [69, 120, 112, 105, 114, 97, 116, 105, 111, 110, 32, 84, 105, 109, 101, 58, 32],
    }),
    (e.rules[65].opcodes[30] = { type: 4, index: 74 }),
    (e.rules[65].opcodes[31] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[32] = { type: 2, children: [33, 34, 35] }),
    (e.rules[65].opcodes[33] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[34] = {
      type: 6,
      string: [78, 111, 116, 32, 66, 101, 102, 111, 114, 101, 58, 32],
    }),
    (e.rules[65].opcodes[35] = { type: 4, index: 75 }),
    (e.rules[65].opcodes[36] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[37] = { type: 2, children: [38, 39, 40] }),
    (e.rules[65].opcodes[38] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[39] = {
      type: 6,
      string: [82, 101, 113, 117, 101, 115, 116, 32, 73, 68, 58, 32],
    }),
    (e.rules[65].opcodes[40] = { type: 4, index: 76 }),
    (e.rules[65].opcodes[41] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[42] = { type: 2, children: [43, 44, 45] }),
    (e.rules[65].opcodes[43] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[44] = {
      type: 6,
      string: [82, 101, 115, 111, 117, 114, 99, 101, 115, 58],
    }),
    (e.rules[65].opcodes[45] = { type: 4, index: 77 }),
    (e.rules[66].opcodes = []),
    (e.rules[66].opcodes[0] = { type: 4, index: 36 }),
    (e.rules[67].opcodes = []),
    (e.rules[67].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[67].opcodes[1] = { type: 7, string: [48, 120] }),
    (e.rules[67].opcodes[2] = { type: 3, min: 40, max: 40 }),
    (e.rules[67].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[68].opcodes = []),
    (e.rules[68].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[68].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[68].opcodes[2] = { type: 4, index: 62 }),
    (e.rules[68].opcodes[3] = { type: 4, index: 61 }),
    (e.rules[68].opcodes[4] = { type: 7, string: [32] }),
    (e.rules[69].opcodes = []),
    (e.rules[69].opcodes[0] = { type: 4, index: 29 }),
    (e.rules[70].opcodes = []),
    (e.rules[70].opcodes[0] = { type: 7, string: [49] }),
    (e.rules[71].opcodes = []),
    (e.rules[71].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[71].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[72].opcodes = []),
    (e.rules[72].opcodes[0] = { type: 3, min: 8, max: 1 / 0 }),
    (e.rules[72].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[72].opcodes[2] = { type: 4, index: 0 }),
    (e.rules[72].opcodes[3] = { type: 4, index: 6 }),
    (e.rules[73].opcodes = []),
    (e.rules[73].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[74].opcodes = []),
    (e.rules[74].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[75].opcodes = []),
    (e.rules[75].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[76].opcodes = []),
    (e.rules[76].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[76].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[77].opcodes = []),
    (e.rules[77].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[77].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[77].opcodes[2] = { type: 4, index: 10 }),
    (e.rules[77].opcodes[3] = { type: 7, string: [45, 32] }),
    (e.rules[77].opcodes[4] = { type: 4, index: 29 }),
    (e.toString = function () {
      let s = '';
      return (
        (s += `; ==============================================================================
`),
        (s += `; Core rules for ABNF (RFC 5234)
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://www.rfc-editor.org/rfc/rfc5234#appendix-B.1
`),
        (s += `
`),
        (s += `ALPHA          =  %x41-5A / %x61-7A
`),
        (s += `               ; A-Z / a-z
`),
        (s += `
`),
        (s += `BIT            =  "0" / "1"
`),
        (s += `
`),
        (s += `CHAR           =  %x01-7F
`),
        (s += `               ; any 7-bit US-ASCII character,
`),
        (s += `               ;  excluding NUL
`),
        (s += `
`),
        (s += `CR             =  %x0D
`),
        (s += `               ; carriage return
`),
        (s += `
`),
        (s += `CRLF           =  CR LF
`),
        (s += `               ; Internet standard newline
`),
        (s += `
`),
        (s += `CTL            =  %x00-1F / %x7F
`),
        (s += `               ; controls
`),
        (s += `
`),
        (s += `DIGIT          =  %x30-39
`),
        (s += `               ; 0-9
`),
        (s += `
`),
        (s += `DQUOTE         =  %x22
`),
        (s += `               ; " (Double Quote)
`),
        (s += `
`),
        (s += `HEXDIG         =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`),
        (s += `
`),
        (s += `HTAB           =  %x09
`),
        (s += `               ; horizontal tab
`),
        (s += `
`),
        (s += `LF             =  %x0A
`),
        (s += `               ; linefeed
`),
        (s += `
`),
        (s += `LWSP           =  *(WSP / CRLF WSP)
`),
        (s += `               ; Use of this linear-white-space rule
`),
        (s += `               ;  permits lines containing only white
`),
        (s += `               ;  space that are no longer legal in
`),
        (s += `               ;  mail headers and have caused
`),
        (s += `               ;  interoperability problems in other
`),
        (s += `               ;  contexts.
`),
        (s += `               ; Do not use when defining mail
`),
        (s += `               ;  headers and use with caution in
`),
        (s += `               ;  other contexts.
`),
        (s += `
`),
        (s += `OCTET          =  %x00-FF
`),
        (s += `               ; 8 bits of data
`),
        (s += `
`),
        (s += `SP             =  %x20
`),
        (s += `
`),
        (s += `VCHAR          =  %x21-7E
`),
        (s += `               ; visible (printing) characters
`),
        (s += `
`),
        (s += `WSP            =  SP / HTAB
`),
        (s += `               ; white space
`),
        (s += `; ==============================================================================
`),
        (s += `; Internet Date/Time Format (RFC 3339)
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; Requires:
`),
        (s += `; - core.bnf
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://www.rfc-editor.org/rfc/rfc3339#section-5.6
`),
        (s += `
`),
        (s += `date-fullyear   = 4DIGIT
`),
        (s += `
`),
        (s += `date-month      = 2DIGIT  ; 01-12
`),
        (s += `
`),
        (s += `date-mday       = 2DIGIT  ; 01-28, 01-29, 01-30, 01-31 based on
`),
        (s += `                          ; month/year
`),
        (s += `
`),
        (s += `time-hour       = 2DIGIT  ; 00-23
`),
        (s += `
`),
        (s += `time-minute     = 2DIGIT  ; 00-59
`),
        (s += `
`),
        (s += `time-second     = 2DIGIT  ; 00-58, 00-59, 00-60 based on leap second
`),
        (s += `                          ; rules
`),
        (s += `
`),
        (s += `time-secfrac    = "." 1*DIGIT
`),
        (s += `
`),
        (s += `time-numoffset  = ("+" / "-") time-hour ":" time-minute
`),
        (s += `
`),
        (s += `time-offset     = "Z" / time-numoffset
`),
        (s += `
`),
        (s += `partial-time    = time-hour ":" time-minute ":" time-second
`),
        (s += `                  [time-secfrac]
`),
        (s += `
`),
        (s += `full-date       = date-fullyear "-" date-month "-" date-mday
`),
        (s += `
`),
        (s += `full-time       = partial-time time-offset
`),
        (s += `
`),
        (s += `date-time       = full-date "T" full-time
`),
        (s += `; ==============================================================================
`),
        (s += `; Uniform Resource Identifier (RFC 3986)
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; Requires:
`),
        (s += `; - core.bnf
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://www.rfc-editor.org/rfc/rfc3986#appendix-A
`),
        (s += `
`),
        (s += `URI           = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
`),
        (s += `
`),
        (s += `hier-part     = "//" authority path-abempty
`),
        (s += `              / path-absolute
`),
        (s += `              / path-rootless
`),
        (s += `              / path-empty
`),
        (s += `
`),
        (s += `URI-reference = URI / relative-ref
`),
        (s += `
`),
        (s += `absolute-URI  = scheme ":" hier-part [ "?" query ]
`),
        (s += `
`),
        (s += `relative-ref  = relative-part [ "?" query ] [ "#" fragment ]
`),
        (s += `
`),
        (s += `relative-part = "//" authority path-abempty
`),
        (s += `              / path-absolute
`),
        (s += `              / path-noscheme
`),
        (s += `              / path-empty
`),
        (s += `
`),
        (s += `scheme        = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
`),
        (s += `
`),
        (s += `authority     = [ userinfo "@" ] host [ ":" port ]
`),
        (s += `userinfo      = *( unreserved / pct-encoded / sub-delims / ":" )
`),
        (s += `host          = IP-literal / IPv4address / reg-name
`),
        (s += `port          = *DIGIT
`),
        (s += `
`),
        (s += `IP-literal    = "[" ( IPv6address / IPvFuture  ) "]"
`),
        (s += `
`),
        (s += `IPvFuture     = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
`),
        (s += `
`),
        (s += `IPv6address   =                            6( h16 ":" ) ls32
`),
        (s += `              /                       "::" 5( h16 ":" ) ls32
`),
        (s += `              / [               h16 ] "::" 4( h16 ":" ) ls32
`),
        (s += `              / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
`),
        (s += `              / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
`),
        (s += `              / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
`),
        (s += `              / [ *4( h16 ":" ) h16 ] "::"              ls32
`),
        (s += `              / [ *5( h16 ":" ) h16 ] "::"              h16
`),
        (s += `              / [ *6( h16 ":" ) h16 ] "::"
`),
        (s += `
`),
        (s += `h16           = 1*4HEXDIG
`),
        (s += `ls32          = ( h16 ":" h16 ) / IPv4address
`),
        (s += `IPv4address   = dec-octet "." dec-octet "." dec-octet "." dec-octet
`),
        (s += `dec-octet     = DIGIT                 ; 0-9
`),
        (s += `              / %x31-39 DIGIT         ; 10-99
`),
        (s += `              / "1" 2DIGIT            ; 100-199
`),
        (s += `              / "2" %x30-34 DIGIT     ; 200-249
`),
        (s += `              / "25" %x30-35          ; 250-255
`),
        (s += `
`),
        (s += `reg-name      = *( unreserved / pct-encoded / sub-delims )
`),
        (s += `
`),
        (s += `path          = path-abempty    ; begins with "/" or is empty
`),
        (s += `              / path-absolute   ; begins with "/" but not "//"
`),
        (s += `              / path-noscheme   ; begins with a non-colon segment
`),
        (s += `              / path-rootless   ; begins with a segment
`),
        (s += `              / path-empty      ; zero characters
`),
        (s += `
`),
        (s += `path-abempty  = *( "/" segment )
`),
        (s += `path-absolute = "/" [ segment-nz *( "/" segment ) ]
`),
        (s += `path-noscheme = segment-nz-nc *( "/" segment )
`),
        (s += `path-rootless = segment-nz *( "/" segment )
`),
        (s += `path-empty    = 0pchar
`),
        (s += `
`),
        (s += `segment       = *pchar
`),
        (s += `segment-nz    = 1*pchar
`),
        (s += `segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
`),
        (s += `; non-zero-length segment without any colon ":"
`),
        (s += `
`),
        (s += `pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
`),
        (s += `
`),
        (s += `query         = *( pchar / "/" / "?" )
`),
        (s += `
`),
        (s += `fragment      = *( pchar / "/" / "?" )
`),
        (s += `
`),
        (s += `pct-encoded   = "%" HEXDIG HEXDIG
`),
        (s += `
`),
        (s += `unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
`),
        (s += `reserved      = gen-delims / sub-delims
`),
        (s += `gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
`),
        (s += `sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
`),
        (s += `              / "*" / "+" / "," / ";" / "="
`),
        (s += `; ==============================================================================
`),
        (s += `; Sign in with Ethereum (EIP-4361)
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; Requires:
`),
        (s += `; - core.bnf
`),
        (s += `; - datetime.bnf
`),
        (s += `; - uri.bnf
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://eips.ethereum.org/EIPS/eip-4361
`),
        (s += `
`),
        (s += `sign-in-with-ethereum =
`),
        (s += `  message-domain %s" wants you to sign in with your Ethereum account:" LF
`),
        (s += `  message-address LF
`),
        (s += `  LF
`),
        (s += `  [ message-statement LF ]
`),
        (s += `  LF
`),
        (s += `  %s"URI: " message-uri LF
`),
        (s += `  %s"Version: " message-version LF
`),
        (s += `  %s"Chain ID: " message-chain-id LF
`),
        (s += `  %s"Nonce: " message-nonce LF
`),
        (s += `  %s"Issued At: " message-issued-at
`),
        (s += `  [ LF %s"Expiration Time: " message-expiration-time ]
`),
        (s += `  [ LF %s"Not Before: " message-not-before ]
`),
        (s += `  [ LF %s"Request ID: " message-request-id ]
`),
        (s += `  [ LF %s"Resources:" message-resources ]
`),
        (s += `
`),
        (s += `message-domain          = authority
`),
        (s += `message-address         = "0x" 40*40HEXDIG
`),
        (s += `message-statement       = 1*( reserved / unreserved / " " )
`),
        (s += `message-uri             = URI
`),
        (s += `message-version         = "1"
`),
        (s += `message-chain-id        = 1*DIGIT
`),
        (s += `message-nonce           = 8*( ALPHA / DIGIT )
`),
        (s += `message-issued-at       = date-time
`),
        (s += `message-expiration-time = date-time
`),
        (s += `message-not-before      = date-time
`),
        (s += `message-request-id      = *pchar
`),
        (s += `message-resources       = *( LF "- " URI )
`),
        s
      );
    }),
    e
  );
}
function Xl() {
  const e = {};
  return (
    (e.grammarObject = 'grammarObject'),
    (e.rules = []),
    (e.rules[0] = { name: 'ALPHA', lower: 'alpha', index: 0, isBkr: !1 }),
    (e.rules[1] = { name: 'BIT', lower: 'bit', index: 1, isBkr: !1 }),
    (e.rules[2] = { name: 'CHAR', lower: 'char', index: 2, isBkr: !1 }),
    (e.rules[3] = { name: 'CR', lower: 'cr', index: 3, isBkr: !1 }),
    (e.rules[4] = { name: 'CRLF', lower: 'crlf', index: 4, isBkr: !1 }),
    (e.rules[5] = { name: 'CTL', lower: 'ctl', index: 5, isBkr: !1 }),
    (e.rules[6] = { name: 'DIGIT', lower: 'digit', index: 6, isBkr: !1 }),
    (e.rules[7] = { name: 'DQUOTE', lower: 'dquote', index: 7, isBkr: !1 }),
    (e.rules[8] = { name: 'HEXDIG', lower: 'hexdig', index: 8, isBkr: !1 }),
    (e.rules[9] = { name: 'HTAB', lower: 'htab', index: 9, isBkr: !1 }),
    (e.rules[10] = { name: 'LF', lower: 'lf', index: 10, isBkr: !1 }),
    (e.rules[11] = { name: 'LWSP', lower: 'lwsp', index: 11, isBkr: !1 }),
    (e.rules[12] = { name: 'OCTET', lower: 'octet', index: 12, isBkr: !1 }),
    (e.rules[13] = { name: 'SP', lower: 'sp', index: 13, isBkr: !1 }),
    (e.rules[14] = { name: 'VCHAR', lower: 'vchar', index: 14, isBkr: !1 }),
    (e.rules[15] = { name: 'WSP', lower: 'wsp', index: 15, isBkr: !1 }),
    (e.rules[16] = { name: 'date-fullyear', lower: 'date-fullyear', index: 16, isBkr: !1 }),
    (e.rules[17] = { name: 'date-month', lower: 'date-month', index: 17, isBkr: !1 }),
    (e.rules[18] = { name: 'date-mday', lower: 'date-mday', index: 18, isBkr: !1 }),
    (e.rules[19] = { name: 'time-hour', lower: 'time-hour', index: 19, isBkr: !1 }),
    (e.rules[20] = { name: 'time-minute', lower: 'time-minute', index: 20, isBkr: !1 }),
    (e.rules[21] = { name: 'time-second', lower: 'time-second', index: 21, isBkr: !1 }),
    (e.rules[22] = { name: 'time-secfrac', lower: 'time-secfrac', index: 22, isBkr: !1 }),
    (e.rules[23] = { name: 'time-numoffset', lower: 'time-numoffset', index: 23, isBkr: !1 }),
    (e.rules[24] = { name: 'time-offset', lower: 'time-offset', index: 24, isBkr: !1 }),
    (e.rules[25] = { name: 'partial-time', lower: 'partial-time', index: 25, isBkr: !1 }),
    (e.rules[26] = { name: 'full-date', lower: 'full-date', index: 26, isBkr: !1 }),
    (e.rules[27] = { name: 'full-time', lower: 'full-time', index: 27, isBkr: !1 }),
    (e.rules[28] = { name: 'date-time', lower: 'date-time', index: 28, isBkr: !1 }),
    (e.rules[29] = { name: 'URI', lower: 'uri', index: 29, isBkr: !1 }),
    (e.rules[30] = { name: 'hier-part', lower: 'hier-part', index: 30, isBkr: !1 }),
    (e.rules[31] = { name: 'URI-reference', lower: 'uri-reference', index: 31, isBkr: !1 }),
    (e.rules[32] = { name: 'absolute-URI', lower: 'absolute-uri', index: 32, isBkr: !1 }),
    (e.rules[33] = { name: 'relative-ref', lower: 'relative-ref', index: 33, isBkr: !1 }),
    (e.rules[34] = { name: 'relative-part', lower: 'relative-part', index: 34, isBkr: !1 }),
    (e.rules[35] = { name: 'scheme', lower: 'scheme', index: 35, isBkr: !1 }),
    (e.rules[36] = { name: 'authority', lower: 'authority', index: 36, isBkr: !1 }),
    (e.rules[37] = { name: 'userinfo', lower: 'userinfo', index: 37, isBkr: !1 }),
    (e.rules[38] = { name: 'host', lower: 'host', index: 38, isBkr: !1 }),
    (e.rules[39] = { name: 'port', lower: 'port', index: 39, isBkr: !1 }),
    (e.rules[40] = { name: 'IP-literal', lower: 'ip-literal', index: 40, isBkr: !1 }),
    (e.rules[41] = { name: 'IPvFuture', lower: 'ipvfuture', index: 41, isBkr: !1 }),
    (e.rules[42] = { name: 'IPv6address', lower: 'ipv6address', index: 42, isBkr: !1 }),
    (e.rules[43] = { name: 'h16', lower: 'h16', index: 43, isBkr: !1 }),
    (e.rules[44] = { name: 'ls32', lower: 'ls32', index: 44, isBkr: !1 }),
    (e.rules[45] = { name: 'IPv4address', lower: 'ipv4address', index: 45, isBkr: !1 }),
    (e.rules[46] = { name: 'dec-octet', lower: 'dec-octet', index: 46, isBkr: !1 }),
    (e.rules[47] = { name: 'reg-name', lower: 'reg-name', index: 47, isBkr: !1 }),
    (e.rules[48] = { name: 'path', lower: 'path', index: 48, isBkr: !1 }),
    (e.rules[49] = { name: 'path-abempty', lower: 'path-abempty', index: 49, isBkr: !1 }),
    (e.rules[50] = { name: 'path-absolute', lower: 'path-absolute', index: 50, isBkr: !1 }),
    (e.rules[51] = { name: 'path-noscheme', lower: 'path-noscheme', index: 51, isBkr: !1 }),
    (e.rules[52] = { name: 'path-rootless', lower: 'path-rootless', index: 52, isBkr: !1 }),
    (e.rules[53] = { name: 'path-empty', lower: 'path-empty', index: 53, isBkr: !1 }),
    (e.rules[54] = { name: 'segment', lower: 'segment', index: 54, isBkr: !1 }),
    (e.rules[55] = { name: 'segment-nz', lower: 'segment-nz', index: 55, isBkr: !1 }),
    (e.rules[56] = { name: 'segment-nz-nc', lower: 'segment-nz-nc', index: 56, isBkr: !1 }),
    (e.rules[57] = { name: 'pchar', lower: 'pchar', index: 57, isBkr: !1 }),
    (e.rules[58] = { name: 'query', lower: 'query', index: 58, isBkr: !1 }),
    (e.rules[59] = { name: 'fragment', lower: 'fragment', index: 59, isBkr: !1 }),
    (e.rules[60] = { name: 'pct-encoded', lower: 'pct-encoded', index: 60, isBkr: !1 }),
    (e.rules[61] = { name: 'unreserved', lower: 'unreserved', index: 61, isBkr: !1 }),
    (e.rules[62] = { name: 'reserved', lower: 'reserved', index: 62, isBkr: !1 }),
    (e.rules[63] = { name: 'gen-delims', lower: 'gen-delims', index: 63, isBkr: !1 }),
    (e.rules[64] = { name: 'sub-delims', lower: 'sub-delims', index: 64, isBkr: !1 }),
    (e.rules[65] = {
      name: 'sign-in-with-solana',
      lower: 'sign-in-with-solana',
      index: 65,
      isBkr: !1,
    }),
    (e.rules[66] = { name: 'advanced-fields', lower: 'advanced-fields', index: 66, isBkr: !1 }),
    (e.rules[67] = { name: 'message-domain', lower: 'message-domain', index: 67, isBkr: !1 }),
    (e.rules[68] = { name: 'message-address', lower: 'message-address', index: 68, isBkr: !1 }),
    (e.rules[69] = { name: 'message-statement', lower: 'message-statement', index: 69, isBkr: !1 }),
    (e.rules[70] = { name: 'message-uri', lower: 'message-uri', index: 70, isBkr: !1 }),
    (e.rules[71] = { name: 'message-version', lower: 'message-version', index: 71, isBkr: !1 }),
    (e.rules[72] = { name: 'message-chain-id', lower: 'message-chain-id', index: 72, isBkr: !1 }),
    (e.rules[73] = { name: 'message-nonce', lower: 'message-nonce', index: 73, isBkr: !1 }),
    (e.rules[74] = { name: 'message-issued-at', lower: 'message-issued-at', index: 74, isBkr: !1 }),
    (e.rules[75] = {
      name: 'message-expiration-time',
      lower: 'message-expiration-time',
      index: 75,
      isBkr: !1,
    }),
    (e.rules[76] = {
      name: 'message-not-before',
      lower: 'message-not-before',
      index: 76,
      isBkr: !1,
    }),
    (e.rules[77] = {
      name: 'message-request-id',
      lower: 'message-request-id',
      index: 77,
      isBkr: !1,
    }),
    (e.rules[78] = { name: 'message-resources', lower: 'message-resources', index: 78, isBkr: !1 }),
    (e.udts = []),
    (e.rules[0].opcodes = []),
    (e.rules[0].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[0].opcodes[1] = { type: 5, min: 65, max: 90 }),
    (e.rules[0].opcodes[2] = { type: 5, min: 97, max: 122 }),
    (e.rules[1].opcodes = []),
    (e.rules[1].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[1].opcodes[1] = { type: 7, string: [48] }),
    (e.rules[1].opcodes[2] = { type: 7, string: [49] }),
    (e.rules[2].opcodes = []),
    (e.rules[2].opcodes[0] = { type: 5, min: 1, max: 127 }),
    (e.rules[3].opcodes = []),
    (e.rules[3].opcodes[0] = { type: 6, string: [13] }),
    (e.rules[4].opcodes = []),
    (e.rules[4].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[4].opcodes[1] = { type: 4, index: 3 }),
    (e.rules[4].opcodes[2] = { type: 4, index: 10 }),
    (e.rules[5].opcodes = []),
    (e.rules[5].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[5].opcodes[1] = { type: 5, min: 0, max: 31 }),
    (e.rules[5].opcodes[2] = { type: 6, string: [127] }),
    (e.rules[6].opcodes = []),
    (e.rules[6].opcodes[0] = { type: 5, min: 48, max: 57 }),
    (e.rules[7].opcodes = []),
    (e.rules[7].opcodes[0] = { type: 6, string: [34] }),
    (e.rules[8].opcodes = []),
    (e.rules[8].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[8].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[8].opcodes[2] = { type: 7, string: [97] }),
    (e.rules[8].opcodes[3] = { type: 7, string: [98] }),
    (e.rules[8].opcodes[4] = { type: 7, string: [99] }),
    (e.rules[8].opcodes[5] = { type: 7, string: [100] }),
    (e.rules[8].opcodes[6] = { type: 7, string: [101] }),
    (e.rules[8].opcodes[7] = { type: 7, string: [102] }),
    (e.rules[9].opcodes = []),
    (e.rules[9].opcodes[0] = { type: 6, string: [9] }),
    (e.rules[10].opcodes = []),
    (e.rules[10].opcodes[0] = { type: 6, string: [10] }),
    (e.rules[11].opcodes = []),
    (e.rules[11].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[11].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[11].opcodes[2] = { type: 4, index: 15 }),
    (e.rules[11].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[11].opcodes[4] = { type: 4, index: 4 }),
    (e.rules[11].opcodes[5] = { type: 4, index: 15 }),
    (e.rules[12].opcodes = []),
    (e.rules[12].opcodes[0] = { type: 5, min: 0, max: 255 }),
    (e.rules[13].opcodes = []),
    (e.rules[13].opcodes[0] = { type: 6, string: [32] }),
    (e.rules[14].opcodes = []),
    (e.rules[14].opcodes[0] = { type: 5, min: 33, max: 126 }),
    (e.rules[15].opcodes = []),
    (e.rules[15].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[15].opcodes[1] = { type: 4, index: 13 }),
    (e.rules[15].opcodes[2] = { type: 4, index: 9 }),
    (e.rules[16].opcodes = []),
    (e.rules[16].opcodes[0] = { type: 3, min: 4, max: 4 }),
    (e.rules[16].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[17].opcodes = []),
    (e.rules[17].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[17].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[18].opcodes = []),
    (e.rules[18].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[18].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[19].opcodes = []),
    (e.rules[19].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[19].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[20].opcodes = []),
    (e.rules[20].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[20].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[21].opcodes = []),
    (e.rules[21].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[21].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[22].opcodes = []),
    (e.rules[22].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[22].opcodes[1] = { type: 7, string: [46] }),
    (e.rules[22].opcodes[2] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[22].opcodes[3] = { type: 4, index: 6 }),
    (e.rules[23].opcodes = []),
    (e.rules[23].opcodes[0] = { type: 2, children: [1, 4, 5, 6] }),
    (e.rules[23].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[23].opcodes[2] = { type: 7, string: [43] }),
    (e.rules[23].opcodes[3] = { type: 7, string: [45] }),
    (e.rules[23].opcodes[4] = { type: 4, index: 19 }),
    (e.rules[23].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[23].opcodes[6] = { type: 4, index: 20 }),
    (e.rules[24].opcodes = []),
    (e.rules[24].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[24].opcodes[1] = { type: 7, string: [122] }),
    (e.rules[24].opcodes[2] = { type: 4, index: 23 }),
    (e.rules[25].opcodes = []),
    (e.rules[25].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5, 6] }),
    (e.rules[25].opcodes[1] = { type: 4, index: 19 }),
    (e.rules[25].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[25].opcodes[3] = { type: 4, index: 20 }),
    (e.rules[25].opcodes[4] = { type: 7, string: [58] }),
    (e.rules[25].opcodes[5] = { type: 4, index: 21 }),
    (e.rules[25].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[25].opcodes[7] = { type: 4, index: 22 }),
    (e.rules[26].opcodes = []),
    (e.rules[26].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5] }),
    (e.rules[26].opcodes[1] = { type: 4, index: 16 }),
    (e.rules[26].opcodes[2] = { type: 7, string: [45] }),
    (e.rules[26].opcodes[3] = { type: 4, index: 17 }),
    (e.rules[26].opcodes[4] = { type: 7, string: [45] }),
    (e.rules[26].opcodes[5] = { type: 4, index: 18 }),
    (e.rules[27].opcodes = []),
    (e.rules[27].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[27].opcodes[1] = { type: 4, index: 25 }),
    (e.rules[27].opcodes[2] = { type: 4, index: 24 }),
    (e.rules[28].opcodes = []),
    (e.rules[28].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[28].opcodes[1] = { type: 4, index: 26 }),
    (e.rules[28].opcodes[2] = { type: 7, string: [116] }),
    (e.rules[28].opcodes[3] = { type: 4, index: 27 }),
    (e.rules[29].opcodes = []),
    (e.rules[29].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 8] }),
    (e.rules[29].opcodes[1] = { type: 4, index: 35 }),
    (e.rules[29].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[29].opcodes[3] = { type: 4, index: 30 }),
    (e.rules[29].opcodes[4] = { type: 3, min: 0, max: 1 }),
    (e.rules[29].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[29].opcodes[6] = { type: 7, string: [63] }),
    (e.rules[29].opcodes[7] = { type: 4, index: 58 }),
    (e.rules[29].opcodes[8] = { type: 3, min: 0, max: 1 }),
    (e.rules[29].opcodes[9] = { type: 2, children: [10, 11] }),
    (e.rules[29].opcodes[10] = { type: 7, string: [35] }),
    (e.rules[29].opcodes[11] = { type: 4, index: 59 }),
    (e.rules[30].opcodes = []),
    (e.rules[30].opcodes[0] = { type: 1, children: [1, 5, 6, 7] }),
    (e.rules[30].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[30].opcodes[2] = { type: 7, string: [47, 47] }),
    (e.rules[30].opcodes[3] = { type: 4, index: 36 }),
    (e.rules[30].opcodes[4] = { type: 4, index: 49 }),
    (e.rules[30].opcodes[5] = { type: 4, index: 50 }),
    (e.rules[30].opcodes[6] = { type: 4, index: 52 }),
    (e.rules[30].opcodes[7] = { type: 4, index: 53 }),
    (e.rules[31].opcodes = []),
    (e.rules[31].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[31].opcodes[1] = { type: 4, index: 29 }),
    (e.rules[31].opcodes[2] = { type: 4, index: 33 }),
    (e.rules[32].opcodes = []),
    (e.rules[32].opcodes[0] = { type: 2, children: [1, 2, 3, 4] }),
    (e.rules[32].opcodes[1] = { type: 4, index: 35 }),
    (e.rules[32].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[32].opcodes[3] = { type: 4, index: 30 }),
    (e.rules[32].opcodes[4] = { type: 3, min: 0, max: 1 }),
    (e.rules[32].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[32].opcodes[6] = { type: 7, string: [63] }),
    (e.rules[32].opcodes[7] = { type: 4, index: 58 }),
    (e.rules[33].opcodes = []),
    (e.rules[33].opcodes[0] = { type: 2, children: [1, 2, 6] }),
    (e.rules[33].opcodes[1] = { type: 4, index: 34 }),
    (e.rules[33].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[33].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[33].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[33].opcodes[5] = { type: 4, index: 58 }),
    (e.rules[33].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[33].opcodes[7] = { type: 2, children: [8, 9] }),
    (e.rules[33].opcodes[8] = { type: 7, string: [35] }),
    (e.rules[33].opcodes[9] = { type: 4, index: 59 }),
    (e.rules[34].opcodes = []),
    (e.rules[34].opcodes[0] = { type: 1, children: [1, 5, 6, 7] }),
    (e.rules[34].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[34].opcodes[2] = { type: 7, string: [47, 47] }),
    (e.rules[34].opcodes[3] = { type: 4, index: 36 }),
    (e.rules[34].opcodes[4] = { type: 4, index: 49 }),
    (e.rules[34].opcodes[5] = { type: 4, index: 50 }),
    (e.rules[34].opcodes[6] = { type: 4, index: 51 }),
    (e.rules[34].opcodes[7] = { type: 4, index: 53 }),
    (e.rules[35].opcodes = []),
    (e.rules[35].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[35].opcodes[1] = { type: 4, index: 0 }),
    (e.rules[35].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[35].opcodes[3] = { type: 1, children: [4, 5, 6, 7, 8] }),
    (e.rules[35].opcodes[4] = { type: 4, index: 0 }),
    (e.rules[35].opcodes[5] = { type: 4, index: 6 }),
    (e.rules[35].opcodes[6] = { type: 7, string: [43] }),
    (e.rules[35].opcodes[7] = { type: 7, string: [45] }),
    (e.rules[35].opcodes[8] = { type: 7, string: [46] }),
    (e.rules[36].opcodes = []),
    (e.rules[36].opcodes[0] = { type: 2, children: [1, 5, 6] }),
    (e.rules[36].opcodes[1] = { type: 3, min: 0, max: 1 }),
    (e.rules[36].opcodes[2] = { type: 2, children: [3, 4] }),
    (e.rules[36].opcodes[3] = { type: 4, index: 37 }),
    (e.rules[36].opcodes[4] = { type: 7, string: [64] }),
    (e.rules[36].opcodes[5] = { type: 4, index: 38 }),
    (e.rules[36].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[36].opcodes[7] = { type: 2, children: [8, 9] }),
    (e.rules[36].opcodes[8] = { type: 7, string: [58] }),
    (e.rules[36].opcodes[9] = { type: 4, index: 39 }),
    (e.rules[37].opcodes = []),
    (e.rules[37].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[37].opcodes[1] = { type: 1, children: [2, 3, 4, 5] }),
    (e.rules[37].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[37].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[37].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[37].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[38].opcodes = []),
    (e.rules[38].opcodes[0] = { type: 1, children: [1, 2, 3] }),
    (e.rules[38].opcodes[1] = { type: 4, index: 40 }),
    (e.rules[38].opcodes[2] = { type: 4, index: 45 }),
    (e.rules[38].opcodes[3] = { type: 4, index: 47 }),
    (e.rules[39].opcodes = []),
    (e.rules[39].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[39].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[40].opcodes = []),
    (e.rules[40].opcodes[0] = { type: 2, children: [1, 2, 5] }),
    (e.rules[40].opcodes[1] = { type: 7, string: [91] }),
    (e.rules[40].opcodes[2] = { type: 1, children: [3, 4] }),
    (e.rules[40].opcodes[3] = { type: 4, index: 42 }),
    (e.rules[40].opcodes[4] = { type: 4, index: 41 }),
    (e.rules[40].opcodes[5] = { type: 7, string: [93] }),
    (e.rules[41].opcodes = []),
    (e.rules[41].opcodes[0] = { type: 2, children: [1, 2, 4, 5] }),
    (e.rules[41].opcodes[1] = { type: 7, string: [118] }),
    (e.rules[41].opcodes[2] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[41].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[41].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[41].opcodes[5] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[41].opcodes[6] = { type: 1, children: [7, 8, 9] }),
    (e.rules[41].opcodes[7] = { type: 4, index: 61 }),
    (e.rules[41].opcodes[8] = { type: 4, index: 64 }),
    (e.rules[41].opcodes[9] = { type: 7, string: [58] }),
    (e.rules[42].opcodes = []),
    (e.rules[42].opcodes[0] = { type: 1, children: [1, 7, 14, 23, 37, 51, 63, 73, 83] }),
    (e.rules[42].opcodes[1] = { type: 2, children: [2, 6] }),
    (e.rules[42].opcodes[2] = { type: 3, min: 6, max: 6 }),
    (e.rules[42].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[42].opcodes[4] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[6] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[7] = { type: 2, children: [8, 9, 13] }),
    (e.rules[42].opcodes[8] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[9] = { type: 3, min: 5, max: 5 }),
    (e.rules[42].opcodes[10] = { type: 2, children: [11, 12] }),
    (e.rules[42].opcodes[11] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[12] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[13] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[14] = { type: 2, children: [15, 17, 18, 22] }),
    (e.rules[42].opcodes[15] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[16] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[17] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[18] = { type: 3, min: 4, max: 4 }),
    (e.rules[42].opcodes[19] = { type: 2, children: [20, 21] }),
    (e.rules[42].opcodes[20] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[21] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[22] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[23] = { type: 2, children: [24, 31, 32, 36] }),
    (e.rules[42].opcodes[24] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[25] = { type: 2, children: [26, 30] }),
    (e.rules[42].opcodes[26] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[27] = { type: 2, children: [28, 29] }),
    (e.rules[42].opcodes[28] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[29] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[30] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[31] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[32] = { type: 3, min: 3, max: 3 }),
    (e.rules[42].opcodes[33] = { type: 2, children: [34, 35] }),
    (e.rules[42].opcodes[34] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[35] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[36] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[37] = { type: 2, children: [38, 45, 46, 50] }),
    (e.rules[42].opcodes[38] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[39] = { type: 2, children: [40, 44] }),
    (e.rules[42].opcodes[40] = { type: 3, min: 0, max: 2 }),
    (e.rules[42].opcodes[41] = { type: 2, children: [42, 43] }),
    (e.rules[42].opcodes[42] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[43] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[44] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[45] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[46] = { type: 3, min: 2, max: 2 }),
    (e.rules[42].opcodes[47] = { type: 2, children: [48, 49] }),
    (e.rules[42].opcodes[48] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[49] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[50] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[51] = { type: 2, children: [52, 59, 60, 61, 62] }),
    (e.rules[42].opcodes[52] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[53] = { type: 2, children: [54, 58] }),
    (e.rules[42].opcodes[54] = { type: 3, min: 0, max: 3 }),
    (e.rules[42].opcodes[55] = { type: 2, children: [56, 57] }),
    (e.rules[42].opcodes[56] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[57] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[58] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[59] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[60] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[61] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[62] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[63] = { type: 2, children: [64, 71, 72] }),
    (e.rules[42].opcodes[64] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[65] = { type: 2, children: [66, 70] }),
    (e.rules[42].opcodes[66] = { type: 3, min: 0, max: 4 }),
    (e.rules[42].opcodes[67] = { type: 2, children: [68, 69] }),
    (e.rules[42].opcodes[68] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[69] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[70] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[71] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[72] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[73] = { type: 2, children: [74, 81, 82] }),
    (e.rules[42].opcodes[74] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[75] = { type: 2, children: [76, 80] }),
    (e.rules[42].opcodes[76] = { type: 3, min: 0, max: 5 }),
    (e.rules[42].opcodes[77] = { type: 2, children: [78, 79] }),
    (e.rules[42].opcodes[78] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[79] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[80] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[81] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[82] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[83] = { type: 2, children: [84, 91] }),
    (e.rules[42].opcodes[84] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[85] = { type: 2, children: [86, 90] }),
    (e.rules[42].opcodes[86] = { type: 3, min: 0, max: 6 }),
    (e.rules[42].opcodes[87] = { type: 2, children: [88, 89] }),
    (e.rules[42].opcodes[88] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[89] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[90] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[91] = { type: 7, string: [58, 58] }),
    (e.rules[43].opcodes = []),
    (e.rules[43].opcodes[0] = { type: 3, min: 1, max: 4 }),
    (e.rules[43].opcodes[1] = { type: 4, index: 8 }),
    (e.rules[44].opcodes = []),
    (e.rules[44].opcodes[0] = { type: 1, children: [1, 5] }),
    (e.rules[44].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[44].opcodes[2] = { type: 4, index: 43 }),
    (e.rules[44].opcodes[3] = { type: 7, string: [58] }),
    (e.rules[44].opcodes[4] = { type: 4, index: 43 }),
    (e.rules[44].opcodes[5] = { type: 4, index: 45 }),
    (e.rules[45].opcodes = []),
    (e.rules[45].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[45].opcodes[1] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[2] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[3] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[5] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[6] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[7] = { type: 4, index: 46 }),
    (e.rules[46].opcodes = []),
    (e.rules[46].opcodes[0] = { type: 1, children: [1, 2, 5, 9, 13] }),
    (e.rules[46].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[2] = { type: 2, children: [3, 4] }),
    (e.rules[46].opcodes[3] = { type: 5, min: 49, max: 57 }),
    (e.rules[46].opcodes[4] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[46].opcodes[6] = { type: 7, string: [49] }),
    (e.rules[46].opcodes[7] = { type: 3, min: 2, max: 2 }),
    (e.rules[46].opcodes[8] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[9] = { type: 2, children: [10, 11, 12] }),
    (e.rules[46].opcodes[10] = { type: 7, string: [50] }),
    (e.rules[46].opcodes[11] = { type: 5, min: 48, max: 52 }),
    (e.rules[46].opcodes[12] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[13] = { type: 2, children: [14, 15] }),
    (e.rules[46].opcodes[14] = { type: 7, string: [50, 53] }),
    (e.rules[46].opcodes[15] = { type: 5, min: 48, max: 53 }),
    (e.rules[47].opcodes = []),
    (e.rules[47].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[47].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[47].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[47].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[47].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[48].opcodes = []),
    (e.rules[48].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5] }),
    (e.rules[48].opcodes[1] = { type: 4, index: 49 }),
    (e.rules[48].opcodes[2] = { type: 4, index: 50 }),
    (e.rules[48].opcodes[3] = { type: 4, index: 51 }),
    (e.rules[48].opcodes[4] = { type: 4, index: 52 }),
    (e.rules[48].opcodes[5] = { type: 4, index: 53 }),
    (e.rules[49].opcodes = []),
    (e.rules[49].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[49].opcodes[1] = { type: 2, children: [2, 3] }),
    (e.rules[49].opcodes[2] = { type: 7, string: [47] }),
    (e.rules[49].opcodes[3] = { type: 4, index: 54 }),
    (e.rules[50].opcodes = []),
    (e.rules[50].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[50].opcodes[1] = { type: 7, string: [47] }),
    (e.rules[50].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[50].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[50].opcodes[4] = { type: 4, index: 55 }),
    (e.rules[50].opcodes[5] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[50].opcodes[6] = { type: 2, children: [7, 8] }),
    (e.rules[50].opcodes[7] = { type: 7, string: [47] }),
    (e.rules[50].opcodes[8] = { type: 4, index: 54 }),
    (e.rules[51].opcodes = []),
    (e.rules[51].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[51].opcodes[1] = { type: 4, index: 56 }),
    (e.rules[51].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[51].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[51].opcodes[4] = { type: 7, string: [47] }),
    (e.rules[51].opcodes[5] = { type: 4, index: 54 }),
    (e.rules[52].opcodes = []),
    (e.rules[52].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[52].opcodes[1] = { type: 4, index: 55 }),
    (e.rules[52].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[52].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[52].opcodes[4] = { type: 7, string: [47] }),
    (e.rules[52].opcodes[5] = { type: 4, index: 54 }),
    (e.rules[53].opcodes = []),
    (e.rules[53].opcodes[0] = { type: 3, min: 0, max: 0 }),
    (e.rules[53].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[54].opcodes = []),
    (e.rules[54].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[54].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[55].opcodes = []),
    (e.rules[55].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[55].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[56].opcodes = []),
    (e.rules[56].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[56].opcodes[1] = { type: 1, children: [2, 3, 4, 5] }),
    (e.rules[56].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[56].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[56].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[56].opcodes[5] = { type: 7, string: [64] }),
    (e.rules[57].opcodes = []),
    (e.rules[57].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5] }),
    (e.rules[57].opcodes[1] = { type: 4, index: 61 }),
    (e.rules[57].opcodes[2] = { type: 4, index: 60 }),
    (e.rules[57].opcodes[3] = { type: 4, index: 64 }),
    (e.rules[57].opcodes[4] = { type: 7, string: [58] }),
    (e.rules[57].opcodes[5] = { type: 7, string: [64] }),
    (e.rules[58].opcodes = []),
    (e.rules[58].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[58].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[58].opcodes[2] = { type: 4, index: 57 }),
    (e.rules[58].opcodes[3] = { type: 7, string: [47] }),
    (e.rules[58].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[59].opcodes = []),
    (e.rules[59].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[59].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[59].opcodes[2] = { type: 4, index: 57 }),
    (e.rules[59].opcodes[3] = { type: 7, string: [47] }),
    (e.rules[59].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[60].opcodes = []),
    (e.rules[60].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[60].opcodes[1] = { type: 7, string: [37] }),
    (e.rules[60].opcodes[2] = { type: 4, index: 8 }),
    (e.rules[60].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[61].opcodes = []),
    (e.rules[61].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6] }),
    (e.rules[61].opcodes[1] = { type: 4, index: 0 }),
    (e.rules[61].opcodes[2] = { type: 4, index: 6 }),
    (e.rules[61].opcodes[3] = { type: 7, string: [45] }),
    (e.rules[61].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[61].opcodes[5] = { type: 7, string: [95] }),
    (e.rules[61].opcodes[6] = { type: 7, string: [126] }),
    (e.rules[62].opcodes = []),
    (e.rules[62].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[62].opcodes[1] = { type: 4, index: 63 }),
    (e.rules[62].opcodes[2] = { type: 4, index: 64 }),
    (e.rules[63].opcodes = []),
    (e.rules[63].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[63].opcodes[1] = { type: 7, string: [58] }),
    (e.rules[63].opcodes[2] = { type: 7, string: [47] }),
    (e.rules[63].opcodes[3] = { type: 7, string: [63] }),
    (e.rules[63].opcodes[4] = { type: 7, string: [35] }),
    (e.rules[63].opcodes[5] = { type: 7, string: [91] }),
    (e.rules[63].opcodes[6] = { type: 7, string: [93] }),
    (e.rules[63].opcodes[7] = { type: 7, string: [64] }),
    (e.rules[64].opcodes = []),
    (e.rules[64].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }),
    (e.rules[64].opcodes[1] = { type: 7, string: [33] }),
    (e.rules[64].opcodes[2] = { type: 7, string: [36] }),
    (e.rules[64].opcodes[3] = { type: 7, string: [38] }),
    (e.rules[64].opcodes[4] = { type: 7, string: [39] }),
    (e.rules[64].opcodes[5] = { type: 7, string: [40] }),
    (e.rules[64].opcodes[6] = { type: 7, string: [41] }),
    (e.rules[64].opcodes[7] = { type: 7, string: [42] }),
    (e.rules[64].opcodes[8] = { type: 7, string: [43] }),
    (e.rules[64].opcodes[9] = { type: 7, string: [44] }),
    (e.rules[64].opcodes[10] = { type: 7, string: [59] }),
    (e.rules[64].opcodes[11] = { type: 7, string: [61] }),
    (e.rules[65].opcodes = []),
    (e.rules[65].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5, 10] }),
    (e.rules[65].opcodes[1] = { type: 4, index: 67 }),
    (e.rules[65].opcodes[2] = {
      type: 6,
      string: [
        32, 119, 97, 110, 116, 115, 32, 121, 111, 117, 32, 116, 111, 32, 115, 105, 103, 110, 32,
        105, 110, 32, 119, 105, 116, 104, 32, 121, 111, 117, 114, 32, 83, 111, 108, 97, 110, 97, 32,
        97, 99, 99, 111, 117, 110, 116, 58,
      ],
    }),
    (e.rules[65].opcodes[3] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[4] = { type: 4, index: 68 }),
    (e.rules[65].opcodes[5] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[6] = { type: 2, children: [7, 8, 9] }),
    (e.rules[65].opcodes[7] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[8] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[9] = { type: 4, index: 69 }),
    (e.rules[65].opcodes[10] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[11] = { type: 2, children: [12, 13] }),
    (e.rules[65].opcodes[12] = { type: 4, index: 10 }),
    (e.rules[65].opcodes[13] = { type: 4, index: 66 }),
    (e.rules[66].opcodes = []),
    (e.rules[66].opcodes[0] = { type: 2, children: [1, 6, 11, 16, 21, 26, 31, 36, 41] }),
    (e.rules[66].opcodes[1] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[2] = { type: 2, children: [3, 4, 5] }),
    (e.rules[66].opcodes[3] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[4] = { type: 6, string: [85, 82, 73, 58, 32] }),
    (e.rules[66].opcodes[5] = { type: 4, index: 70 }),
    (e.rules[66].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[7] = { type: 2, children: [8, 9, 10] }),
    (e.rules[66].opcodes[8] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[9] = { type: 6, string: [86, 101, 114, 115, 105, 111, 110, 58, 32] }),
    (e.rules[66].opcodes[10] = { type: 4, index: 71 }),
    (e.rules[66].opcodes[11] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[12] = { type: 2, children: [13, 14, 15] }),
    (e.rules[66].opcodes[13] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[14] = { type: 6, string: [67, 104, 97, 105, 110, 32, 73, 68, 58, 32] }),
    (e.rules[66].opcodes[15] = { type: 4, index: 72 }),
    (e.rules[66].opcodes[16] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[17] = { type: 2, children: [18, 19, 20] }),
    (e.rules[66].opcodes[18] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[19] = { type: 6, string: [78, 111, 110, 99, 101, 58, 32] }),
    (e.rules[66].opcodes[20] = { type: 4, index: 73 }),
    (e.rules[66].opcodes[21] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[22] = { type: 2, children: [23, 24, 25] }),
    (e.rules[66].opcodes[23] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[24] = {
      type: 6,
      string: [73, 115, 115, 117, 101, 100, 32, 65, 116, 58, 32],
    }),
    (e.rules[66].opcodes[25] = { type: 4, index: 74 }),
    (e.rules[66].opcodes[26] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[27] = { type: 2, children: [28, 29, 30] }),
    (e.rules[66].opcodes[28] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[29] = {
      type: 6,
      string: [69, 120, 112, 105, 114, 97, 116, 105, 111, 110, 32, 84, 105, 109, 101, 58, 32],
    }),
    (e.rules[66].opcodes[30] = { type: 4, index: 75 }),
    (e.rules[66].opcodes[31] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[32] = { type: 2, children: [33, 34, 35] }),
    (e.rules[66].opcodes[33] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[34] = {
      type: 6,
      string: [78, 111, 116, 32, 66, 101, 102, 111, 114, 101, 58, 32],
    }),
    (e.rules[66].opcodes[35] = { type: 4, index: 76 }),
    (e.rules[66].opcodes[36] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[37] = { type: 2, children: [38, 39, 40] }),
    (e.rules[66].opcodes[38] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[39] = {
      type: 6,
      string: [82, 101, 113, 117, 101, 115, 116, 32, 73, 68, 58, 32],
    }),
    (e.rules[66].opcodes[40] = { type: 4, index: 77 }),
    (e.rules[66].opcodes[41] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[42] = { type: 2, children: [43, 44, 45] }),
    (e.rules[66].opcodes[43] = { type: 4, index: 10 }),
    (e.rules[66].opcodes[44] = {
      type: 6,
      string: [82, 101, 115, 111, 117, 114, 99, 101, 115, 58],
    }),
    (e.rules[66].opcodes[45] = { type: 4, index: 78 }),
    (e.rules[67].opcodes = []),
    (e.rules[67].opcodes[0] = { type: 4, index: 36 }),
    (e.rules[68].opcodes = []),
    (e.rules[68].opcodes[0] = { type: 3, min: 32, max: 44 }),
    (e.rules[68].opcodes[1] = { type: 1, children: [2, 3, 4, 5, 6, 7] }),
    (e.rules[68].opcodes[2] = { type: 5, min: 49, max: 57 }),
    (e.rules[68].opcodes[3] = { type: 5, min: 65, max: 72 }),
    (e.rules[68].opcodes[4] = { type: 5, min: 74, max: 78 }),
    (e.rules[68].opcodes[5] = { type: 5, min: 80, max: 90 }),
    (e.rules[68].opcodes[6] = { type: 5, min: 97, max: 107 }),
    (e.rules[68].opcodes[7] = { type: 5, min: 109, max: 122 }),
    (e.rules[69].opcodes = []),
    (e.rules[69].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[69].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[69].opcodes[2] = { type: 4, index: 62 }),
    (e.rules[69].opcodes[3] = { type: 4, index: 61 }),
    (e.rules[69].opcodes[4] = { type: 7, string: [32] }),
    (e.rules[70].opcodes = []),
    (e.rules[70].opcodes[0] = { type: 4, index: 29 }),
    (e.rules[71].opcodes = []),
    (e.rules[71].opcodes[0] = { type: 7, string: [49] }),
    (e.rules[72].opcodes = []),
    (e.rules[72].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[72].opcodes[1] = { type: 6, string: [109, 97, 105, 110, 110, 101, 116] }),
    (e.rules[72].opcodes[2] = { type: 6, string: [116, 101, 115, 116, 110, 101, 116] }),
    (e.rules[72].opcodes[3] = { type: 6, string: [100, 101, 118, 110, 101, 116] }),
    (e.rules[72].opcodes[4] = { type: 6, string: [108, 111, 99, 97, 108, 110, 101, 116] }),
    (e.rules[72].opcodes[5] = {
      type: 6,
      string: [115, 111, 108, 97, 110, 97, 58, 109, 97, 105, 110, 110, 101, 116],
    }),
    (e.rules[72].opcodes[6] = {
      type: 6,
      string: [115, 111, 108, 97, 110, 97, 58, 116, 101, 115, 116, 110, 101, 116],
    }),
    (e.rules[72].opcodes[7] = {
      type: 6,
      string: [115, 111, 108, 97, 110, 97, 58, 100, 101, 118, 110, 101, 116],
    }),
    (e.rules[73].opcodes = []),
    (e.rules[73].opcodes[0] = { type: 3, min: 8, max: 1 / 0 }),
    (e.rules[73].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[73].opcodes[2] = { type: 4, index: 0 }),
    (e.rules[73].opcodes[3] = { type: 4, index: 6 }),
    (e.rules[74].opcodes = []),
    (e.rules[74].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[75].opcodes = []),
    (e.rules[75].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[76].opcodes = []),
    (e.rules[76].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[77].opcodes = []),
    (e.rules[77].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[77].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[78].opcodes = []),
    (e.rules[78].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[78].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[78].opcodes[2] = { type: 4, index: 10 }),
    (e.rules[78].opcodes[3] = { type: 7, string: [45, 32] }),
    (e.rules[78].opcodes[4] = { type: 4, index: 29 }),
    (e.toString = function () {
      let s = '';
      return (
        (s += `; ==============================================================================
`),
        (s += `; Core rules for ABNF (RFC 5234)
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://www.rfc-editor.org/rfc/rfc5234#appendix-B.1
`),
        (s += `
`),
        (s += `ALPHA          =  %x41-5A / %x61-7A
`),
        (s += `               ; A-Z / a-z
`),
        (s += `
`),
        (s += `BIT            =  "0" / "1"
`),
        (s += `
`),
        (s += `CHAR           =  %x01-7F
`),
        (s += `               ; any 7-bit US-ASCII character,
`),
        (s += `               ;  excluding NUL
`),
        (s += `
`),
        (s += `CR             =  %x0D
`),
        (s += `               ; carriage return
`),
        (s += `
`),
        (s += `CRLF           =  CR LF
`),
        (s += `               ; Internet standard newline
`),
        (s += `
`),
        (s += `CTL            =  %x00-1F / %x7F
`),
        (s += `               ; controls
`),
        (s += `
`),
        (s += `DIGIT          =  %x30-39
`),
        (s += `               ; 0-9
`),
        (s += `
`),
        (s += `DQUOTE         =  %x22
`),
        (s += `               ; " (Double Quote)
`),
        (s += `
`),
        (s += `HEXDIG         =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`),
        (s += `
`),
        (s += `HTAB           =  %x09
`),
        (s += `               ; horizontal tab
`),
        (s += `
`),
        (s += `LF             =  %x0A
`),
        (s += `               ; linefeed
`),
        (s += `
`),
        (s += `LWSP           =  *(WSP / CRLF WSP)
`),
        (s += `               ; Use of this linear-white-space rule
`),
        (s += `               ;  permits lines containing only white
`),
        (s += `               ;  space that are no longer legal in
`),
        (s += `               ;  mail headers and have caused
`),
        (s += `               ;  interoperability problems in other
`),
        (s += `               ;  contexts.
`),
        (s += `               ; Do not use when defining mail
`),
        (s += `               ;  headers and use with caution in
`),
        (s += `               ;  other contexts.
`),
        (s += `
`),
        (s += `OCTET          =  %x00-FF
`),
        (s += `               ; 8 bits of data
`),
        (s += `
`),
        (s += `SP             =  %x20
`),
        (s += `
`),
        (s += `VCHAR          =  %x21-7E
`),
        (s += `               ; visible (printing) characters
`),
        (s += `
`),
        (s += `WSP            =  SP / HTAB
`),
        (s += `               ; white space
`),
        (s += `; ==============================================================================
`),
        (s += `; Internet Date/Time Format (RFC 3339)
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; Requires:
`),
        (s += `; - core.bnf
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://www.rfc-editor.org/rfc/rfc3339#section-5.6
`),
        (s += `
`),
        (s += `date-fullyear   = 4DIGIT
`),
        (s += `
`),
        (s += `date-month      = 2DIGIT  ; 01-12
`),
        (s += `
`),
        (s += `date-mday       = 2DIGIT  ; 01-28, 01-29, 01-30, 01-31 based on
`),
        (s += `                          ; month/year
`),
        (s += `
`),
        (s += `time-hour       = 2DIGIT  ; 00-23
`),
        (s += `
`),
        (s += `time-minute     = 2DIGIT  ; 00-59
`),
        (s += `
`),
        (s += `time-second     = 2DIGIT  ; 00-58, 00-59, 00-60 based on leap second
`),
        (s += `                          ; rules
`),
        (s += `
`),
        (s += `time-secfrac    = "." 1*DIGIT
`),
        (s += `
`),
        (s += `time-numoffset  = ("+" / "-") time-hour ":" time-minute
`),
        (s += `
`),
        (s += `time-offset     = "Z" / time-numoffset
`),
        (s += `
`),
        (s += `partial-time    = time-hour ":" time-minute ":" time-second
`),
        (s += `                  [time-secfrac]
`),
        (s += `
`),
        (s += `full-date       = date-fullyear "-" date-month "-" date-mday
`),
        (s += `
`),
        (s += `full-time       = partial-time time-offset
`),
        (s += `
`),
        (s += `date-time       = full-date "T" full-time
`),
        (s += `; ==============================================================================
`),
        (s += `; Uniform Resource Identifier (RFC 3986)
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; Requires:
`),
        (s += `; - core.bnf
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://www.rfc-editor.org/rfc/rfc3986#appendix-A
`),
        (s += `
`),
        (s += `URI           = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
`),
        (s += `
`),
        (s += `hier-part     = "//" authority path-abempty
`),
        (s += `              / path-absolute
`),
        (s += `              / path-rootless
`),
        (s += `              / path-empty
`),
        (s += `
`),
        (s += `URI-reference = URI / relative-ref
`),
        (s += `
`),
        (s += `absolute-URI  = scheme ":" hier-part [ "?" query ]
`),
        (s += `
`),
        (s += `relative-ref  = relative-part [ "?" query ] [ "#" fragment ]
`),
        (s += `
`),
        (s += `relative-part = "//" authority path-abempty
`),
        (s += `              / path-absolute
`),
        (s += `              / path-noscheme
`),
        (s += `              / path-empty
`),
        (s += `
`),
        (s += `scheme        = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
`),
        (s += `
`),
        (s += `authority     = [ userinfo "@" ] host [ ":" port ]
`),
        (s += `userinfo      = *( unreserved / pct-encoded / sub-delims / ":" )
`),
        (s += `host          = IP-literal / IPv4address / reg-name
`),
        (s += `port          = *DIGIT
`),
        (s += `
`),
        (s += `IP-literal    = "[" ( IPv6address / IPvFuture  ) "]"
`),
        (s += `
`),
        (s += `IPvFuture     = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
`),
        (s += `
`),
        (s += `IPv6address   =                            6( h16 ":" ) ls32
`),
        (s += `              /                       "::" 5( h16 ":" ) ls32
`),
        (s += `              / [               h16 ] "::" 4( h16 ":" ) ls32
`),
        (s += `              / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
`),
        (s += `              / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
`),
        (s += `              / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
`),
        (s += `              / [ *4( h16 ":" ) h16 ] "::"              ls32
`),
        (s += `              / [ *5( h16 ":" ) h16 ] "::"              h16
`),
        (s += `              / [ *6( h16 ":" ) h16 ] "::"
`),
        (s += `
`),
        (s += `h16           = 1*4HEXDIG
`),
        (s += `ls32          = ( h16 ":" h16 ) / IPv4address
`),
        (s += `IPv4address   = dec-octet "." dec-octet "." dec-octet "." dec-octet
`),
        (s += `dec-octet     = DIGIT                 ; 0-9
`),
        (s += `              / %x31-39 DIGIT         ; 10-99
`),
        (s += `              / "1" 2DIGIT            ; 100-199
`),
        (s += `              / "2" %x30-34 DIGIT     ; 200-249
`),
        (s += `              / "25" %x30-35          ; 250-255
`),
        (s += `
`),
        (s += `reg-name      = *( unreserved / pct-encoded / sub-delims )
`),
        (s += `
`),
        (s += `path          = path-abempty    ; begins with "/" or is empty
`),
        (s += `              / path-absolute   ; begins with "/" but not "//"
`),
        (s += `              / path-noscheme   ; begins with a non-colon segment
`),
        (s += `              / path-rootless   ; begins with a segment
`),
        (s += `              / path-empty      ; zero characters
`),
        (s += `
`),
        (s += `path-abempty  = *( "/" segment )
`),
        (s += `path-absolute = "/" [ segment-nz *( "/" segment ) ]
`),
        (s += `path-noscheme = segment-nz-nc *( "/" segment )
`),
        (s += `path-rootless = segment-nz *( "/" segment )
`),
        (s += `path-empty    = 0pchar
`),
        (s += `
`),
        (s += `segment       = *pchar
`),
        (s += `segment-nz    = 1*pchar
`),
        (s += `segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
`),
        (s += `; non-zero-length segment without any colon ":"
`),
        (s += `
`),
        (s += `pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
`),
        (s += `
`),
        (s += `query         = *( pchar / "/" / "?" )
`),
        (s += `
`),
        (s += `fragment      = *( pchar / "/" / "?" )
`),
        (s += `
`),
        (s += `pct-encoded   = "%" HEXDIG HEXDIG
`),
        (s += `
`),
        (s += `unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
`),
        (s += `reserved      = gen-delims / sub-delims
`),
        (s += `gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
`),
        (s += `sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
`),
        (s += `              / "*" / "+" / "," / ";" / "="
`),
        (s += `; ==============================================================================
`),
        (s += `; Sign in with Solana
`),
        (s += `; ==============================================================================
`),
        (s += `;
`),
        (s += `; Requires:
`),
        (s += `; - core.bnf
`),
        (s += `; - datetime.bnf
`),
        (s += `; - uri.bnf
`),
        (s += `; - dns.bnf
`),
        (s += `;
`),
        (s += `; References:
`),
        (s += `; - https://eips.ethereum.org/EIPS/eip-4361
`),
        (s += ` 
`),
        (s += `sign-in-with-solana =
`),
        (s += `  message-domain %s" wants you to sign in with your Solana account:" LF
`),
        (s += `  message-address
`),
        (s += `  [ LF LF message-statement ]
`),
        (s += `  [ LF advanced-fields ]
`),
        (s += `
`),
        (s += `advanced-fields =
`),
        (s += `  [ LF %s"URI: " message-uri ]
`),
        (s += `  [ LF %s"Version: " message-version ]
`),
        (s += `  [ LF %s"Chain ID: " message-chain-id ]
`),
        (s += `  [ LF %s"Nonce: " message-nonce ]
`),
        (s += `  [ LF %s"Issued At: " message-issued-at ]
`),
        (s += `  [ LF %s"Expiration Time: " message-expiration-time ]
`),
        (s += `  [ LF %s"Not Before: " message-not-before ]
`),
        (s += `  [ LF %s"Request ID: " message-request-id ]
`),
        (s += `  [ LF %s"Resources:" message-resources ]
`),
        (s += `
`),
        (s += `message-domain          = authority
`),
        (s += `message-address         = 32*44( %x31-39 / %x41-48 / %x4A-4E / %x50-5A / %x61-6B / %x6D-7A )
`),
        (s += `message-statement       = 1*( reserved / unreserved / " " )
`),
        (s += `message-uri             = URI
`),
        (s += `message-version         = "1"
`),
        (s += `message-chain-id        = %s"mainnet" / %s"testnet" / %s"devnet" / %s"localnet" / %s"solana:mainnet" / %s"solana:testnet" / %s"solana:devnet"
`),
        (s += `message-nonce           = 8*( ALPHA / DIGIT )
`),
        (s += `message-issued-at       = date-time
`),
        (s += `message-expiration-time = date-time
`),
        (s += `message-not-before      = date-time
`),
        (s += `message-request-id      = *pchar
`),
        (s += `message-resources       = *( LF "- " URI )
`),
        s
      );
    }),
    e
  );
}
function Jl() {
  const e = {};
  return (
    (e.grammarObject = 'grammarObject'),
    (e.rules = []),
    (e.rules[0] = { name: 'ALPHA', lower: 'alpha', index: 0, isBkr: !1 }),
    (e.rules[1] = { name: 'BIT', lower: 'bit', index: 1, isBkr: !1 }),
    (e.rules[2] = { name: 'CHAR', lower: 'char', index: 2, isBkr: !1 }),
    (e.rules[3] = { name: 'CR', lower: 'cr', index: 3, isBkr: !1 }),
    (e.rules[4] = { name: 'CRLF', lower: 'crlf', index: 4, isBkr: !1 }),
    (e.rules[5] = { name: 'CTL', lower: 'ctl', index: 5, isBkr: !1 }),
    (e.rules[6] = { name: 'DIGIT', lower: 'digit', index: 6, isBkr: !1 }),
    (e.rules[7] = { name: 'DQUOTE', lower: 'dquote', index: 7, isBkr: !1 }),
    (e.rules[8] = { name: 'HEXDIG', lower: 'hexdig', index: 8, isBkr: !1 }),
    (e.rules[9] = { name: 'HTAB', lower: 'htab', index: 9, isBkr: !1 }),
    (e.rules[10] = { name: 'LF', lower: 'lf', index: 10, isBkr: !1 }),
    (e.rules[11] = { name: 'LWSP', lower: 'lwsp', index: 11, isBkr: !1 }),
    (e.rules[12] = { name: 'OCTET', lower: 'octet', index: 12, isBkr: !1 }),
    (e.rules[13] = { name: 'SP', lower: 'sp', index: 13, isBkr: !1 }),
    (e.rules[14] = { name: 'VCHAR', lower: 'vchar', index: 14, isBkr: !1 }),
    (e.rules[15] = { name: 'WSP', lower: 'wsp', index: 15, isBkr: !1 }),
    (e.rules[16] = { name: 'date-fullyear', lower: 'date-fullyear', index: 16, isBkr: !1 }),
    (e.rules[17] = { name: 'date-month', lower: 'date-month', index: 17, isBkr: !1 }),
    (e.rules[18] = { name: 'date-mday', lower: 'date-mday', index: 18, isBkr: !1 }),
    (e.rules[19] = { name: 'time-hour', lower: 'time-hour', index: 19, isBkr: !1 }),
    (e.rules[20] = { name: 'time-minute', lower: 'time-minute', index: 20, isBkr: !1 }),
    (e.rules[21] = { name: 'time-second', lower: 'time-second', index: 21, isBkr: !1 }),
    (e.rules[22] = { name: 'time-secfrac', lower: 'time-secfrac', index: 22, isBkr: !1 }),
    (e.rules[23] = { name: 'time-numoffset', lower: 'time-numoffset', index: 23, isBkr: !1 }),
    (e.rules[24] = { name: 'time-offset', lower: 'time-offset', index: 24, isBkr: !1 }),
    (e.rules[25] = { name: 'partial-time', lower: 'partial-time', index: 25, isBkr: !1 }),
    (e.rules[26] = { name: 'full-date', lower: 'full-date', index: 26, isBkr: !1 }),
    (e.rules[27] = { name: 'full-time', lower: 'full-time', index: 27, isBkr: !1 }),
    (e.rules[28] = { name: 'date-time', lower: 'date-time', index: 28, isBkr: !1 }),
    (e.rules[29] = { name: 'URI', lower: 'uri', index: 29, isBkr: !1 }),
    (e.rules[30] = { name: 'hier-part', lower: 'hier-part', index: 30, isBkr: !1 }),
    (e.rules[31] = { name: 'URI-reference', lower: 'uri-reference', index: 31, isBkr: !1 }),
    (e.rules[32] = { name: 'absolute-URI', lower: 'absolute-uri', index: 32, isBkr: !1 }),
    (e.rules[33] = { name: 'relative-ref', lower: 'relative-ref', index: 33, isBkr: !1 }),
    (e.rules[34] = { name: 'relative-part', lower: 'relative-part', index: 34, isBkr: !1 }),
    (e.rules[35] = { name: 'scheme', lower: 'scheme', index: 35, isBkr: !1 }),
    (e.rules[36] = { name: 'authority', lower: 'authority', index: 36, isBkr: !1 }),
    (e.rules[37] = { name: 'userinfo', lower: 'userinfo', index: 37, isBkr: !1 }),
    (e.rules[38] = { name: 'host', lower: 'host', index: 38, isBkr: !1 }),
    (e.rules[39] = { name: 'port', lower: 'port', index: 39, isBkr: !1 }),
    (e.rules[40] = { name: 'IP-literal', lower: 'ip-literal', index: 40, isBkr: !1 }),
    (e.rules[41] = { name: 'IPvFuture', lower: 'ipvfuture', index: 41, isBkr: !1 }),
    (e.rules[42] = { name: 'IPv6address', lower: 'ipv6address', index: 42, isBkr: !1 }),
    (e.rules[43] = { name: 'h16', lower: 'h16', index: 43, isBkr: !1 }),
    (e.rules[44] = { name: 'ls32', lower: 'ls32', index: 44, isBkr: !1 }),
    (e.rules[45] = { name: 'IPv4address', lower: 'ipv4address', index: 45, isBkr: !1 }),
    (e.rules[46] = { name: 'dec-octet', lower: 'dec-octet', index: 46, isBkr: !1 }),
    (e.rules[47] = { name: 'reg-name', lower: 'reg-name', index: 47, isBkr: !1 }),
    (e.rules[48] = { name: 'path', lower: 'path', index: 48, isBkr: !1 }),
    (e.rules[49] = { name: 'path-abempty', lower: 'path-abempty', index: 49, isBkr: !1 }),
    (e.rules[50] = { name: 'path-absolute', lower: 'path-absolute', index: 50, isBkr: !1 }),
    (e.rules[51] = { name: 'path-noscheme', lower: 'path-noscheme', index: 51, isBkr: !1 }),
    (e.rules[52] = { name: 'path-rootless', lower: 'path-rootless', index: 52, isBkr: !1 }),
    (e.rules[53] = { name: 'path-empty', lower: 'path-empty', index: 53, isBkr: !1 }),
    (e.rules[54] = { name: 'segment', lower: 'segment', index: 54, isBkr: !1 }),
    (e.rules[55] = { name: 'segment-nz', lower: 'segment-nz', index: 55, isBkr: !1 }),
    (e.rules[56] = { name: 'segment-nz-nc', lower: 'segment-nz-nc', index: 56, isBkr: !1 }),
    (e.rules[57] = { name: 'pchar', lower: 'pchar', index: 57, isBkr: !1 }),
    (e.rules[58] = { name: 'query', lower: 'query', index: 58, isBkr: !1 }),
    (e.rules[59] = { name: 'fragment', lower: 'fragment', index: 59, isBkr: !1 }),
    (e.rules[60] = { name: 'pct-encoded', lower: 'pct-encoded', index: 60, isBkr: !1 }),
    (e.rules[61] = { name: 'unreserved', lower: 'unreserved', index: 61, isBkr: !1 }),
    (e.rules[62] = { name: 'reserved', lower: 'reserved', index: 62, isBkr: !1 }),
    (e.rules[63] = { name: 'gen-delims', lower: 'gen-delims', index: 63, isBkr: !1 }),
    (e.rules[64] = { name: 'sub-delims', lower: 'sub-delims', index: 64, isBkr: !1 }),
    (e.rules[65] = { name: 'dnsurl', lower: 'dnsurl', index: 65, isBkr: !1 }),
    (e.rules[66] = { name: 'dnsauthority', lower: 'dnsauthority', index: 66, isBkr: !1 }),
    (e.rules[67] = { name: 'dnsname', lower: 'dnsname', index: 67, isBkr: !1 }),
    (e.rules[68] = { name: 'dnsquery', lower: 'dnsquery', index: 68, isBkr: !1 }),
    (e.rules[69] = { name: 'dnsqueryelement', lower: 'dnsqueryelement', index: 69, isBkr: !1 }),
    (e.rules[70] = { name: 'dnsclassval', lower: 'dnsclassval', index: 70, isBkr: !1 }),
    (e.rules[71] = { name: 'dnstypeval', lower: 'dnstypeval', index: 71, isBkr: !1 }),
    (e.rules[72] = { name: 'chain-id', lower: 'chain-id', index: 72, isBkr: !1 }),
    (e.rules[73] = { name: 'eth-namespace', lower: 'eth-namespace', index: 73, isBkr: !1 }),
    (e.rules[74] = { name: 'eth-network-id', lower: 'eth-network-id', index: 74, isBkr: !1 }),
    (e.rules[75] = { name: 'eth-chain-id', lower: 'eth-chain-id', index: 75, isBkr: !1 }),
    (e.rules[76] = { name: 'sol-namespace', lower: 'sol-namespace', index: 76, isBkr: !1 }),
    (e.rules[77] = { name: 'sol-network-id', lower: 'sol-network-id', index: 77, isBkr: !1 }),
    (e.rules[78] = { name: 'sol-chain-id', lower: 'sol-chain-id', index: 78, isBkr: !1 }),
    (e.rules[79] = { name: 'account-id', lower: 'account-id', index: 79, isBkr: !1 }),
    (e.rules[80] = { name: 'eth-address', lower: 'eth-address', index: 80, isBkr: !1 }),
    (e.rules[81] = { name: 'eth-account-id', lower: 'eth-account-id', index: 81, isBkr: !1 }),
    (e.rules[82] = { name: 'sol-address', lower: 'sol-address', index: 82, isBkr: !1 }),
    (e.rules[83] = { name: 'sol-account-id', lower: 'sol-account-id', index: 83, isBkr: !1 }),
    (e.rules[84] = { name: 'sign-in-with-x', lower: 'sign-in-with-x', index: 84, isBkr: !1 }),
    (e.rules[85] = { name: 'sign-in-with-eth', lower: 'sign-in-with-eth', index: 85, isBkr: !1 }),
    (e.rules[86] = { name: 'sign-in-with-sol', lower: 'sign-in-with-sol', index: 86, isBkr: !1 }),
    (e.rules[87] = { name: 'message-domain', lower: 'message-domain', index: 87, isBkr: !1 }),
    (e.rules[88] = { name: 'message-address', lower: 'message-address', index: 88, isBkr: !1 }),
    (e.rules[89] = { name: 'message-statement', lower: 'message-statement', index: 89, isBkr: !1 }),
    (e.rules[90] = { name: 'message-uri', lower: 'message-uri', index: 90, isBkr: !1 }),
    (e.rules[91] = { name: 'message-version', lower: 'message-version', index: 91, isBkr: !1 }),
    (e.rules[92] = { name: 'message-chain-id', lower: 'message-chain-id', index: 92, isBkr: !1 }),
    (e.rules[93] = { name: 'message-nonce', lower: 'message-nonce', index: 93, isBkr: !1 }),
    (e.rules[94] = { name: 'message-issued-at', lower: 'message-issued-at', index: 94, isBkr: !1 }),
    (e.rules[95] = {
      name: 'message-expiration-time',
      lower: 'message-expiration-time',
      index: 95,
      isBkr: !1,
    }),
    (e.rules[96] = {
      name: 'message-not-before',
      lower: 'message-not-before',
      index: 96,
      isBkr: !1,
    }),
    (e.rules[97] = {
      name: 'message-request-id',
      lower: 'message-request-id',
      index: 97,
      isBkr: !1,
    }),
    (e.rules[98] = { name: 'message-resources', lower: 'message-resources', index: 98, isBkr: !1 }),
    (e.udts = []),
    (e.rules[0].opcodes = []),
    (e.rules[0].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[0].opcodes[1] = { type: 5, min: 65, max: 90 }),
    (e.rules[0].opcodes[2] = { type: 5, min: 97, max: 122 }),
    (e.rules[1].opcodes = []),
    (e.rules[1].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[1].opcodes[1] = { type: 7, string: [48] }),
    (e.rules[1].opcodes[2] = { type: 7, string: [49] }),
    (e.rules[2].opcodes = []),
    (e.rules[2].opcodes[0] = { type: 5, min: 1, max: 127 }),
    (e.rules[3].opcodes = []),
    (e.rules[3].opcodes[0] = { type: 6, string: [13] }),
    (e.rules[4].opcodes = []),
    (e.rules[4].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[4].opcodes[1] = { type: 4, index: 3 }),
    (e.rules[4].opcodes[2] = { type: 4, index: 10 }),
    (e.rules[5].opcodes = []),
    (e.rules[5].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[5].opcodes[1] = { type: 5, min: 0, max: 31 }),
    (e.rules[5].opcodes[2] = { type: 6, string: [127] }),
    (e.rules[6].opcodes = []),
    (e.rules[6].opcodes[0] = { type: 5, min: 48, max: 57 }),
    (e.rules[7].opcodes = []),
    (e.rules[7].opcodes[0] = { type: 6, string: [34] }),
    (e.rules[8].opcodes = []),
    (e.rules[8].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[8].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[8].opcodes[2] = { type: 7, string: [97] }),
    (e.rules[8].opcodes[3] = { type: 7, string: [98] }),
    (e.rules[8].opcodes[4] = { type: 7, string: [99] }),
    (e.rules[8].opcodes[5] = { type: 7, string: [100] }),
    (e.rules[8].opcodes[6] = { type: 7, string: [101] }),
    (e.rules[8].opcodes[7] = { type: 7, string: [102] }),
    (e.rules[9].opcodes = []),
    (e.rules[9].opcodes[0] = { type: 6, string: [9] }),
    (e.rules[10].opcodes = []),
    (e.rules[10].opcodes[0] = { type: 6, string: [10] }),
    (e.rules[11].opcodes = []),
    (e.rules[11].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[11].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[11].opcodes[2] = { type: 4, index: 15 }),
    (e.rules[11].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[11].opcodes[4] = { type: 4, index: 4 }),
    (e.rules[11].opcodes[5] = { type: 4, index: 15 }),
    (e.rules[12].opcodes = []),
    (e.rules[12].opcodes[0] = { type: 5, min: 0, max: 255 }),
    (e.rules[13].opcodes = []),
    (e.rules[13].opcodes[0] = { type: 6, string: [32] }),
    (e.rules[14].opcodes = []),
    (e.rules[14].opcodes[0] = { type: 5, min: 33, max: 126 }),
    (e.rules[15].opcodes = []),
    (e.rules[15].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[15].opcodes[1] = { type: 4, index: 13 }),
    (e.rules[15].opcodes[2] = { type: 4, index: 9 }),
    (e.rules[16].opcodes = []),
    (e.rules[16].opcodes[0] = { type: 3, min: 4, max: 4 }),
    (e.rules[16].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[17].opcodes = []),
    (e.rules[17].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[17].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[18].opcodes = []),
    (e.rules[18].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[18].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[19].opcodes = []),
    (e.rules[19].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[19].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[20].opcodes = []),
    (e.rules[20].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[20].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[21].opcodes = []),
    (e.rules[21].opcodes[0] = { type: 3, min: 2, max: 2 }),
    (e.rules[21].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[22].opcodes = []),
    (e.rules[22].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[22].opcodes[1] = { type: 7, string: [46] }),
    (e.rules[22].opcodes[2] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[22].opcodes[3] = { type: 4, index: 6 }),
    (e.rules[23].opcodes = []),
    (e.rules[23].opcodes[0] = { type: 2, children: [1, 4, 5, 6] }),
    (e.rules[23].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[23].opcodes[2] = { type: 7, string: [43] }),
    (e.rules[23].opcodes[3] = { type: 7, string: [45] }),
    (e.rules[23].opcodes[4] = { type: 4, index: 19 }),
    (e.rules[23].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[23].opcodes[6] = { type: 4, index: 20 }),
    (e.rules[24].opcodes = []),
    (e.rules[24].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[24].opcodes[1] = { type: 7, string: [122] }),
    (e.rules[24].opcodes[2] = { type: 4, index: 23 }),
    (e.rules[25].opcodes = []),
    (e.rules[25].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5, 6] }),
    (e.rules[25].opcodes[1] = { type: 4, index: 19 }),
    (e.rules[25].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[25].opcodes[3] = { type: 4, index: 20 }),
    (e.rules[25].opcodes[4] = { type: 7, string: [58] }),
    (e.rules[25].opcodes[5] = { type: 4, index: 21 }),
    (e.rules[25].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[25].opcodes[7] = { type: 4, index: 22 }),
    (e.rules[26].opcodes = []),
    (e.rules[26].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5] }),
    (e.rules[26].opcodes[1] = { type: 4, index: 16 }),
    (e.rules[26].opcodes[2] = { type: 7, string: [45] }),
    (e.rules[26].opcodes[3] = { type: 4, index: 17 }),
    (e.rules[26].opcodes[4] = { type: 7, string: [45] }),
    (e.rules[26].opcodes[5] = { type: 4, index: 18 }),
    (e.rules[27].opcodes = []),
    (e.rules[27].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[27].opcodes[1] = { type: 4, index: 25 }),
    (e.rules[27].opcodes[2] = { type: 4, index: 24 }),
    (e.rules[28].opcodes = []),
    (e.rules[28].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[28].opcodes[1] = { type: 4, index: 26 }),
    (e.rules[28].opcodes[2] = { type: 7, string: [116] }),
    (e.rules[28].opcodes[3] = { type: 4, index: 27 }),
    (e.rules[29].opcodes = []),
    (e.rules[29].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 8] }),
    (e.rules[29].opcodes[1] = { type: 4, index: 35 }),
    (e.rules[29].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[29].opcodes[3] = { type: 4, index: 30 }),
    (e.rules[29].opcodes[4] = { type: 3, min: 0, max: 1 }),
    (e.rules[29].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[29].opcodes[6] = { type: 7, string: [63] }),
    (e.rules[29].opcodes[7] = { type: 4, index: 58 }),
    (e.rules[29].opcodes[8] = { type: 3, min: 0, max: 1 }),
    (e.rules[29].opcodes[9] = { type: 2, children: [10, 11] }),
    (e.rules[29].opcodes[10] = { type: 7, string: [35] }),
    (e.rules[29].opcodes[11] = { type: 4, index: 59 }),
    (e.rules[30].opcodes = []),
    (e.rules[30].opcodes[0] = { type: 1, children: [1, 5, 6, 7] }),
    (e.rules[30].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[30].opcodes[2] = { type: 7, string: [47, 47] }),
    (e.rules[30].opcodes[3] = { type: 4, index: 36 }),
    (e.rules[30].opcodes[4] = { type: 4, index: 49 }),
    (e.rules[30].opcodes[5] = { type: 4, index: 50 }),
    (e.rules[30].opcodes[6] = { type: 4, index: 52 }),
    (e.rules[30].opcodes[7] = { type: 4, index: 53 }),
    (e.rules[31].opcodes = []),
    (e.rules[31].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[31].opcodes[1] = { type: 4, index: 29 }),
    (e.rules[31].opcodes[2] = { type: 4, index: 33 }),
    (e.rules[32].opcodes = []),
    (e.rules[32].opcodes[0] = { type: 2, children: [1, 2, 3, 4] }),
    (e.rules[32].opcodes[1] = { type: 4, index: 35 }),
    (e.rules[32].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[32].opcodes[3] = { type: 4, index: 30 }),
    (e.rules[32].opcodes[4] = { type: 3, min: 0, max: 1 }),
    (e.rules[32].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[32].opcodes[6] = { type: 7, string: [63] }),
    (e.rules[32].opcodes[7] = { type: 4, index: 58 }),
    (e.rules[33].opcodes = []),
    (e.rules[33].opcodes[0] = { type: 2, children: [1, 2, 6] }),
    (e.rules[33].opcodes[1] = { type: 4, index: 34 }),
    (e.rules[33].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[33].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[33].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[33].opcodes[5] = { type: 4, index: 58 }),
    (e.rules[33].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[33].opcodes[7] = { type: 2, children: [8, 9] }),
    (e.rules[33].opcodes[8] = { type: 7, string: [35] }),
    (e.rules[33].opcodes[9] = { type: 4, index: 59 }),
    (e.rules[34].opcodes = []),
    (e.rules[34].opcodes[0] = { type: 1, children: [1, 5, 6, 7] }),
    (e.rules[34].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[34].opcodes[2] = { type: 7, string: [47, 47] }),
    (e.rules[34].opcodes[3] = { type: 4, index: 36 }),
    (e.rules[34].opcodes[4] = { type: 4, index: 49 }),
    (e.rules[34].opcodes[5] = { type: 4, index: 50 }),
    (e.rules[34].opcodes[6] = { type: 4, index: 51 }),
    (e.rules[34].opcodes[7] = { type: 4, index: 53 }),
    (e.rules[35].opcodes = []),
    (e.rules[35].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[35].opcodes[1] = { type: 4, index: 0 }),
    (e.rules[35].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[35].opcodes[3] = { type: 1, children: [4, 5, 6, 7, 8] }),
    (e.rules[35].opcodes[4] = { type: 4, index: 0 }),
    (e.rules[35].opcodes[5] = { type: 4, index: 6 }),
    (e.rules[35].opcodes[6] = { type: 7, string: [43] }),
    (e.rules[35].opcodes[7] = { type: 7, string: [45] }),
    (e.rules[35].opcodes[8] = { type: 7, string: [46] }),
    (e.rules[36].opcodes = []),
    (e.rules[36].opcodes[0] = { type: 2, children: [1, 5, 6] }),
    (e.rules[36].opcodes[1] = { type: 3, min: 0, max: 1 }),
    (e.rules[36].opcodes[2] = { type: 2, children: [3, 4] }),
    (e.rules[36].opcodes[3] = { type: 4, index: 37 }),
    (e.rules[36].opcodes[4] = { type: 7, string: [64] }),
    (e.rules[36].opcodes[5] = { type: 4, index: 38 }),
    (e.rules[36].opcodes[6] = { type: 3, min: 0, max: 1 }),
    (e.rules[36].opcodes[7] = { type: 2, children: [8, 9] }),
    (e.rules[36].opcodes[8] = { type: 7, string: [58] }),
    (e.rules[36].opcodes[9] = { type: 4, index: 39 }),
    (e.rules[37].opcodes = []),
    (e.rules[37].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[37].opcodes[1] = { type: 1, children: [2, 3, 4, 5] }),
    (e.rules[37].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[37].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[37].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[37].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[38].opcodes = []),
    (e.rules[38].opcodes[0] = { type: 1, children: [1, 2, 3] }),
    (e.rules[38].opcodes[1] = { type: 4, index: 40 }),
    (e.rules[38].opcodes[2] = { type: 4, index: 45 }),
    (e.rules[38].opcodes[3] = { type: 4, index: 47 }),
    (e.rules[39].opcodes = []),
    (e.rules[39].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[39].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[40].opcodes = []),
    (e.rules[40].opcodes[0] = { type: 2, children: [1, 2, 5] }),
    (e.rules[40].opcodes[1] = { type: 7, string: [91] }),
    (e.rules[40].opcodes[2] = { type: 1, children: [3, 4] }),
    (e.rules[40].opcodes[3] = { type: 4, index: 42 }),
    (e.rules[40].opcodes[4] = { type: 4, index: 41 }),
    (e.rules[40].opcodes[5] = { type: 7, string: [93] }),
    (e.rules[41].opcodes = []),
    (e.rules[41].opcodes[0] = { type: 2, children: [1, 2, 4, 5] }),
    (e.rules[41].opcodes[1] = { type: 7, string: [118] }),
    (e.rules[41].opcodes[2] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[41].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[41].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[41].opcodes[5] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[41].opcodes[6] = { type: 1, children: [7, 8, 9] }),
    (e.rules[41].opcodes[7] = { type: 4, index: 61 }),
    (e.rules[41].opcodes[8] = { type: 4, index: 64 }),
    (e.rules[41].opcodes[9] = { type: 7, string: [58] }),
    (e.rules[42].opcodes = []),
    (e.rules[42].opcodes[0] = { type: 1, children: [1, 7, 14, 23, 37, 51, 63, 73, 83] }),
    (e.rules[42].opcodes[1] = { type: 2, children: [2, 6] }),
    (e.rules[42].opcodes[2] = { type: 3, min: 6, max: 6 }),
    (e.rules[42].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[42].opcodes[4] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[5] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[6] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[7] = { type: 2, children: [8, 9, 13] }),
    (e.rules[42].opcodes[8] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[9] = { type: 3, min: 5, max: 5 }),
    (e.rules[42].opcodes[10] = { type: 2, children: [11, 12] }),
    (e.rules[42].opcodes[11] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[12] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[13] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[14] = { type: 2, children: [15, 17, 18, 22] }),
    (e.rules[42].opcodes[15] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[16] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[17] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[18] = { type: 3, min: 4, max: 4 }),
    (e.rules[42].opcodes[19] = { type: 2, children: [20, 21] }),
    (e.rules[42].opcodes[20] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[21] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[22] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[23] = { type: 2, children: [24, 31, 32, 36] }),
    (e.rules[42].opcodes[24] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[25] = { type: 2, children: [26, 30] }),
    (e.rules[42].opcodes[26] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[27] = { type: 2, children: [28, 29] }),
    (e.rules[42].opcodes[28] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[29] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[30] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[31] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[32] = { type: 3, min: 3, max: 3 }),
    (e.rules[42].opcodes[33] = { type: 2, children: [34, 35] }),
    (e.rules[42].opcodes[34] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[35] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[36] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[37] = { type: 2, children: [38, 45, 46, 50] }),
    (e.rules[42].opcodes[38] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[39] = { type: 2, children: [40, 44] }),
    (e.rules[42].opcodes[40] = { type: 3, min: 0, max: 2 }),
    (e.rules[42].opcodes[41] = { type: 2, children: [42, 43] }),
    (e.rules[42].opcodes[42] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[43] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[44] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[45] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[46] = { type: 3, min: 2, max: 2 }),
    (e.rules[42].opcodes[47] = { type: 2, children: [48, 49] }),
    (e.rules[42].opcodes[48] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[49] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[50] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[51] = { type: 2, children: [52, 59, 60, 61, 62] }),
    (e.rules[42].opcodes[52] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[53] = { type: 2, children: [54, 58] }),
    (e.rules[42].opcodes[54] = { type: 3, min: 0, max: 3 }),
    (e.rules[42].opcodes[55] = { type: 2, children: [56, 57] }),
    (e.rules[42].opcodes[56] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[57] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[58] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[59] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[60] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[61] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[62] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[63] = { type: 2, children: [64, 71, 72] }),
    (e.rules[42].opcodes[64] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[65] = { type: 2, children: [66, 70] }),
    (e.rules[42].opcodes[66] = { type: 3, min: 0, max: 4 }),
    (e.rules[42].opcodes[67] = { type: 2, children: [68, 69] }),
    (e.rules[42].opcodes[68] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[69] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[70] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[71] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[72] = { type: 4, index: 44 }),
    (e.rules[42].opcodes[73] = { type: 2, children: [74, 81, 82] }),
    (e.rules[42].opcodes[74] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[75] = { type: 2, children: [76, 80] }),
    (e.rules[42].opcodes[76] = { type: 3, min: 0, max: 5 }),
    (e.rules[42].opcodes[77] = { type: 2, children: [78, 79] }),
    (e.rules[42].opcodes[78] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[79] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[80] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[81] = { type: 7, string: [58, 58] }),
    (e.rules[42].opcodes[82] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[83] = { type: 2, children: [84, 91] }),
    (e.rules[42].opcodes[84] = { type: 3, min: 0, max: 1 }),
    (e.rules[42].opcodes[85] = { type: 2, children: [86, 90] }),
    (e.rules[42].opcodes[86] = { type: 3, min: 0, max: 6 }),
    (e.rules[42].opcodes[87] = { type: 2, children: [88, 89] }),
    (e.rules[42].opcodes[88] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[89] = { type: 7, string: [58] }),
    (e.rules[42].opcodes[90] = { type: 4, index: 43 }),
    (e.rules[42].opcodes[91] = { type: 7, string: [58, 58] }),
    (e.rules[43].opcodes = []),
    (e.rules[43].opcodes[0] = { type: 3, min: 1, max: 4 }),
    (e.rules[43].opcodes[1] = { type: 4, index: 8 }),
    (e.rules[44].opcodes = []),
    (e.rules[44].opcodes[0] = { type: 1, children: [1, 5] }),
    (e.rules[44].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[44].opcodes[2] = { type: 4, index: 43 }),
    (e.rules[44].opcodes[3] = { type: 7, string: [58] }),
    (e.rules[44].opcodes[4] = { type: 4, index: 43 }),
    (e.rules[44].opcodes[5] = { type: 4, index: 45 }),
    (e.rules[45].opcodes = []),
    (e.rules[45].opcodes[0] = { type: 2, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[45].opcodes[1] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[2] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[3] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[5] = { type: 4, index: 46 }),
    (e.rules[45].opcodes[6] = { type: 7, string: [46] }),
    (e.rules[45].opcodes[7] = { type: 4, index: 46 }),
    (e.rules[46].opcodes = []),
    (e.rules[46].opcodes[0] = { type: 1, children: [1, 2, 5, 9, 13] }),
    (e.rules[46].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[2] = { type: 2, children: [3, 4] }),
    (e.rules[46].opcodes[3] = { type: 5, min: 49, max: 57 }),
    (e.rules[46].opcodes[4] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[5] = { type: 2, children: [6, 7] }),
    (e.rules[46].opcodes[6] = { type: 7, string: [49] }),
    (e.rules[46].opcodes[7] = { type: 3, min: 2, max: 2 }),
    (e.rules[46].opcodes[8] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[9] = { type: 2, children: [10, 11, 12] }),
    (e.rules[46].opcodes[10] = { type: 7, string: [50] }),
    (e.rules[46].opcodes[11] = { type: 5, min: 48, max: 52 }),
    (e.rules[46].opcodes[12] = { type: 4, index: 6 }),
    (e.rules[46].opcodes[13] = { type: 2, children: [14, 15] }),
    (e.rules[46].opcodes[14] = { type: 7, string: [50, 53] }),
    (e.rules[46].opcodes[15] = { type: 5, min: 48, max: 53 }),
    (e.rules[47].opcodes = []),
    (e.rules[47].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[47].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[47].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[47].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[47].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[48].opcodes = []),
    (e.rules[48].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5] }),
    (e.rules[48].opcodes[1] = { type: 4, index: 49 }),
    (e.rules[48].opcodes[2] = { type: 4, index: 50 }),
    (e.rules[48].opcodes[3] = { type: 4, index: 51 }),
    (e.rules[48].opcodes[4] = { type: 4, index: 52 }),
    (e.rules[48].opcodes[5] = { type: 4, index: 53 }),
    (e.rules[49].opcodes = []),
    (e.rules[49].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[49].opcodes[1] = { type: 2, children: [2, 3] }),
    (e.rules[49].opcodes[2] = { type: 7, string: [47] }),
    (e.rules[49].opcodes[3] = { type: 4, index: 54 }),
    (e.rules[50].opcodes = []),
    (e.rules[50].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[50].opcodes[1] = { type: 7, string: [47] }),
    (e.rules[50].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[50].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[50].opcodes[4] = { type: 4, index: 55 }),
    (e.rules[50].opcodes[5] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[50].opcodes[6] = { type: 2, children: [7, 8] }),
    (e.rules[50].opcodes[7] = { type: 7, string: [47] }),
    (e.rules[50].opcodes[8] = { type: 4, index: 54 }),
    (e.rules[51].opcodes = []),
    (e.rules[51].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[51].opcodes[1] = { type: 4, index: 56 }),
    (e.rules[51].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[51].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[51].opcodes[4] = { type: 7, string: [47] }),
    (e.rules[51].opcodes[5] = { type: 4, index: 54 }),
    (e.rules[52].opcodes = []),
    (e.rules[52].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[52].opcodes[1] = { type: 4, index: 55 }),
    (e.rules[52].opcodes[2] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[52].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[52].opcodes[4] = { type: 7, string: [47] }),
    (e.rules[52].opcodes[5] = { type: 4, index: 54 }),
    (e.rules[53].opcodes = []),
    (e.rules[53].opcodes[0] = { type: 3, min: 0, max: 0 }),
    (e.rules[53].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[54].opcodes = []),
    (e.rules[54].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[54].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[55].opcodes = []),
    (e.rules[55].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[55].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[56].opcodes = []),
    (e.rules[56].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[56].opcodes[1] = { type: 1, children: [2, 3, 4, 5] }),
    (e.rules[56].opcodes[2] = { type: 4, index: 61 }),
    (e.rules[56].opcodes[3] = { type: 4, index: 60 }),
    (e.rules[56].opcodes[4] = { type: 4, index: 64 }),
    (e.rules[56].opcodes[5] = { type: 7, string: [64] }),
    (e.rules[57].opcodes = []),
    (e.rules[57].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5] }),
    (e.rules[57].opcodes[1] = { type: 4, index: 61 }),
    (e.rules[57].opcodes[2] = { type: 4, index: 60 }),
    (e.rules[57].opcodes[3] = { type: 4, index: 64 }),
    (e.rules[57].opcodes[4] = { type: 7, string: [58] }),
    (e.rules[57].opcodes[5] = { type: 7, string: [64] }),
    (e.rules[58].opcodes = []),
    (e.rules[58].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[58].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[58].opcodes[2] = { type: 4, index: 57 }),
    (e.rules[58].opcodes[3] = { type: 7, string: [47] }),
    (e.rules[58].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[59].opcodes = []),
    (e.rules[59].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[59].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[59].opcodes[2] = { type: 4, index: 57 }),
    (e.rules[59].opcodes[3] = { type: 7, string: [47] }),
    (e.rules[59].opcodes[4] = { type: 7, string: [63] }),
    (e.rules[60].opcodes = []),
    (e.rules[60].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[60].opcodes[1] = { type: 7, string: [37] }),
    (e.rules[60].opcodes[2] = { type: 4, index: 8 }),
    (e.rules[60].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[61].opcodes = []),
    (e.rules[61].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6] }),
    (e.rules[61].opcodes[1] = { type: 4, index: 0 }),
    (e.rules[61].opcodes[2] = { type: 4, index: 6 }),
    (e.rules[61].opcodes[3] = { type: 7, string: [45] }),
    (e.rules[61].opcodes[4] = { type: 7, string: [46] }),
    (e.rules[61].opcodes[5] = { type: 7, string: [95] }),
    (e.rules[61].opcodes[6] = { type: 7, string: [126] }),
    (e.rules[62].opcodes = []),
    (e.rules[62].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[62].opcodes[1] = { type: 4, index: 63 }),
    (e.rules[62].opcodes[2] = { type: 4, index: 64 }),
    (e.rules[63].opcodes = []),
    (e.rules[63].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7] }),
    (e.rules[63].opcodes[1] = { type: 7, string: [58] }),
    (e.rules[63].opcodes[2] = { type: 7, string: [47] }),
    (e.rules[63].opcodes[3] = { type: 7, string: [63] }),
    (e.rules[63].opcodes[4] = { type: 7, string: [35] }),
    (e.rules[63].opcodes[5] = { type: 7, string: [91] }),
    (e.rules[63].opcodes[6] = { type: 7, string: [93] }),
    (e.rules[63].opcodes[7] = { type: 7, string: [64] }),
    (e.rules[64].opcodes = []),
    (e.rules[64].opcodes[0] = { type: 1, children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }),
    (e.rules[64].opcodes[1] = { type: 7, string: [33] }),
    (e.rules[64].opcodes[2] = { type: 7, string: [36] }),
    (e.rules[64].opcodes[3] = { type: 7, string: [38] }),
    (e.rules[64].opcodes[4] = { type: 7, string: [39] }),
    (e.rules[64].opcodes[5] = { type: 7, string: [40] }),
    (e.rules[64].opcodes[6] = { type: 7, string: [41] }),
    (e.rules[64].opcodes[7] = { type: 7, string: [42] }),
    (e.rules[64].opcodes[8] = { type: 7, string: [43] }),
    (e.rules[64].opcodes[9] = { type: 7, string: [44] }),
    (e.rules[64].opcodes[10] = { type: 7, string: [59] }),
    (e.rules[64].opcodes[11] = { type: 7, string: [61] }),
    (e.rules[65].opcodes = []),
    (e.rules[65].opcodes[0] = { type: 2, children: [1, 2, 7, 8] }),
    (e.rules[65].opcodes[1] = { type: 7, string: [100, 110, 115, 58] }),
    (e.rules[65].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[3] = { type: 2, children: [4, 5, 6] }),
    (e.rules[65].opcodes[4] = { type: 7, string: [47, 47] }),
    (e.rules[65].opcodes[5] = { type: 4, index: 66 }),
    (e.rules[65].opcodes[6] = { type: 7, string: [47] }),
    (e.rules[65].opcodes[7] = { type: 4, index: 67 }),
    (e.rules[65].opcodes[8] = { type: 3, min: 0, max: 1 }),
    (e.rules[65].opcodes[9] = { type: 2, children: [10, 11] }),
    (e.rules[65].opcodes[10] = { type: 7, string: [63] }),
    (e.rules[65].opcodes[11] = { type: 4, index: 68 }),
    (e.rules[66].opcodes = []),
    (e.rules[66].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[66].opcodes[1] = { type: 4, index: 38 }),
    (e.rules[66].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[66].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[66].opcodes[4] = { type: 7, string: [58] }),
    (e.rules[66].opcodes[5] = { type: 4, index: 39 }),
    (e.rules[67].opcodes = []),
    (e.rules[67].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[67].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[68].opcodes = []),
    (e.rules[68].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[68].opcodes[1] = { type: 4, index: 69 }),
    (e.rules[68].opcodes[2] = { type: 3, min: 0, max: 1 }),
    (e.rules[68].opcodes[3] = { type: 2, children: [4, 5] }),
    (e.rules[68].opcodes[4] = { type: 7, string: [59] }),
    (e.rules[68].opcodes[5] = { type: 4, index: 68 }),
    (e.rules[69].opcodes = []),
    (e.rules[69].opcodes[0] = { type: 1, children: [1, 4] }),
    (e.rules[69].opcodes[1] = { type: 2, children: [2, 3] }),
    (e.rules[69].opcodes[2] = { type: 7, string: [99, 108, 97, 115, 115, 61] }),
    (e.rules[69].opcodes[3] = { type: 4, index: 70 }),
    (e.rules[69].opcodes[4] = { type: 2, children: [5, 6] }),
    (e.rules[69].opcodes[5] = { type: 7, string: [116, 121, 112, 101, 61] }),
    (e.rules[69].opcodes[6] = { type: 4, index: 71 }),
    (e.rules[70].opcodes = []),
    (e.rules[70].opcodes[0] = { type: 1, children: [1, 3, 4] }),
    (e.rules[70].opcodes[1] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[70].opcodes[2] = { type: 4, index: 6 }),
    (e.rules[70].opcodes[3] = { type: 7, string: [105, 110] }),
    (e.rules[70].opcodes[4] = { type: 7, string: [99, 104] }),
    (e.rules[71].opcodes = []),
    (e.rules[71].opcodes[0] = { type: 1, children: [1, 3, 4, 5] }),
    (e.rules[71].opcodes[1] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[71].opcodes[2] = { type: 4, index: 6 }),
    (e.rules[71].opcodes[3] = { type: 7, string: [97] }),
    (e.rules[71].opcodes[4] = { type: 7, string: [110, 115] }),
    (e.rules[71].opcodes[5] = { type: 7, string: [109, 100] }),
    (e.rules[72].opcodes = []),
    (e.rules[72].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[72].opcodes[1] = { type: 4, index: 75 }),
    (e.rules[72].opcodes[2] = { type: 4, index: 78 }),
    (e.rules[73].opcodes = []),
    (e.rules[73].opcodes[0] = { type: 6, string: [101, 105, 112, 49, 53, 53] }),
    (e.rules[74].opcodes = []),
    (e.rules[74].opcodes[0] = { type: 3, min: 1, max: 32 }),
    (e.rules[74].opcodes[1] = { type: 4, index: 6 }),
    (e.rules[75].opcodes = []),
    (e.rules[75].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[75].opcodes[1] = { type: 4, index: 73 }),
    (e.rules[75].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[75].opcodes[3] = { type: 4, index: 74 }),
    (e.rules[76].opcodes = []),
    (e.rules[76].opcodes[0] = { type: 6, string: [115, 111, 108, 97, 110, 97] }),
    (e.rules[77].opcodes = []),
    (e.rules[77].opcodes[0] = { type: 1, children: [1, 2, 3, 4] }),
    (e.rules[77].opcodes[1] = { type: 6, string: [109, 97, 105, 110, 110, 101, 116] }),
    (e.rules[77].opcodes[2] = { type: 6, string: [116, 101, 115, 116, 110, 101, 116] }),
    (e.rules[77].opcodes[3] = { type: 6, string: [100, 101, 118, 110, 101, 116] }),
    (e.rules[77].opcodes[4] = { type: 6, string: [108, 111, 99, 97, 108, 110, 101, 116] }),
    (e.rules[78].opcodes = []),
    (e.rules[78].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[78].opcodes[1] = { type: 4, index: 76 }),
    (e.rules[78].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[78].opcodes[3] = { type: 4, index: 77 }),
    (e.rules[79].opcodes = []),
    (e.rules[79].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[79].opcodes[1] = { type: 4, index: 81 }),
    (e.rules[79].opcodes[2] = { type: 4, index: 83 }),
    (e.rules[80].opcodes = []),
    (e.rules[80].opcodes[0] = { type: 2, children: [1, 2] }),
    (e.rules[80].opcodes[1] = { type: 7, string: [48, 120] }),
    (e.rules[80].opcodes[2] = { type: 3, min: 40, max: 40 }),
    (e.rules[80].opcodes[3] = { type: 4, index: 8 }),
    (e.rules[81].opcodes = []),
    (e.rules[81].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[81].opcodes[1] = { type: 4, index: 75 }),
    (e.rules[81].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[81].opcodes[3] = { type: 4, index: 80 }),
    (e.rules[82].opcodes = []),
    (e.rules[82].opcodes[0] = { type: 3, min: 32, max: 44 }),
    (e.rules[82].opcodes[1] = { type: 1, children: [2, 3, 4, 5, 6, 7] }),
    (e.rules[82].opcodes[2] = { type: 5, min: 49, max: 57 }),
    (e.rules[82].opcodes[3] = { type: 5, min: 65, max: 72 }),
    (e.rules[82].opcodes[4] = { type: 5, min: 74, max: 78 }),
    (e.rules[82].opcodes[5] = { type: 5, min: 80, max: 90 }),
    (e.rules[82].opcodes[6] = { type: 5, min: 97, max: 107 }),
    (e.rules[82].opcodes[7] = { type: 5, min: 109, max: 122 }),
    (e.rules[83].opcodes = []),
    (e.rules[83].opcodes[0] = { type: 2, children: [1, 2, 3] }),
    (e.rules[83].opcodes[1] = { type: 4, index: 78 }),
    (e.rules[83].opcodes[2] = { type: 7, string: [58] }),
    (e.rules[83].opcodes[3] = { type: 4, index: 82 }),
    (e.rules[84].opcodes = []),
    (e.rules[84].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[84].opcodes[1] = { type: 4, index: 85 }),
    (e.rules[84].opcodes[2] = { type: 4, index: 86 }),
    (e.rules[85].opcodes = []),
    (e.rules[85].opcodes[0] = {
      type: 2,
      children: [
        1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 31, 36,
        41,
      ],
    }),
    (e.rules[85].opcodes[1] = { type: 4, index: 87 }),
    (e.rules[85].opcodes[2] = {
      type: 6,
      string: [
        32, 119, 97, 110, 116, 115, 32, 121, 111, 117, 32, 116, 111, 32, 115, 105, 103, 110, 32,
        105, 110, 32, 119, 105, 116, 104, 32, 121, 111, 117, 114, 32, 69, 116, 104, 101, 114, 101,
        117, 109, 32, 97, 99, 99, 111, 117, 110, 116, 58,
      ],
    }),
    (e.rules[85].opcodes[3] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[4] = { type: 4, index: 81 }),
    (e.rules[85].opcodes[5] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[6] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[7] = { type: 3, min: 0, max: 1 }),
    (e.rules[85].opcodes[8] = { type: 2, children: [9, 10] }),
    (e.rules[85].opcodes[9] = { type: 4, index: 89 }),
    (e.rules[85].opcodes[10] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[11] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[12] = { type: 6, string: [85, 82, 73, 58, 32] }),
    (e.rules[85].opcodes[13] = { type: 4, index: 90 }),
    (e.rules[85].opcodes[14] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[15] = { type: 6, string: [86, 101, 114, 115, 105, 111, 110, 58, 32] }),
    (e.rules[85].opcodes[16] = { type: 4, index: 91 }),
    (e.rules[85].opcodes[17] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[18] = { type: 6, string: [67, 104, 97, 105, 110, 32, 73, 68, 58, 32] }),
    (e.rules[85].opcodes[19] = { type: 4, index: 75 }),
    (e.rules[85].opcodes[20] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[21] = { type: 6, string: [78, 111, 110, 99, 101, 58, 32] }),
    (e.rules[85].opcodes[22] = { type: 4, index: 93 }),
    (e.rules[85].opcodes[23] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[24] = {
      type: 6,
      string: [73, 115, 115, 117, 101, 100, 32, 65, 116, 58, 32],
    }),
    (e.rules[85].opcodes[25] = { type: 4, index: 94 }),
    (e.rules[85].opcodes[26] = { type: 3, min: 0, max: 1 }),
    (e.rules[85].opcodes[27] = { type: 2, children: [28, 29, 30] }),
    (e.rules[85].opcodes[28] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[29] = {
      type: 6,
      string: [69, 120, 112, 105, 114, 97, 116, 105, 111, 110, 32, 84, 105, 109, 101, 58, 32],
    }),
    (e.rules[85].opcodes[30] = { type: 4, index: 95 }),
    (e.rules[85].opcodes[31] = { type: 3, min: 0, max: 1 }),
    (e.rules[85].opcodes[32] = { type: 2, children: [33, 34, 35] }),
    (e.rules[85].opcodes[33] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[34] = {
      type: 6,
      string: [78, 111, 116, 32, 66, 101, 102, 111, 114, 101, 58, 32],
    }),
    (e.rules[85].opcodes[35] = { type: 4, index: 96 }),
    (e.rules[85].opcodes[36] = { type: 3, min: 0, max: 1 }),
    (e.rules[85].opcodes[37] = { type: 2, children: [38, 39, 40] }),
    (e.rules[85].opcodes[38] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[39] = {
      type: 6,
      string: [82, 101, 113, 117, 101, 115, 116, 32, 73, 68, 58, 32],
    }),
    (e.rules[85].opcodes[40] = { type: 4, index: 97 }),
    (e.rules[85].opcodes[41] = { type: 3, min: 0, max: 1 }),
    (e.rules[85].opcodes[42] = { type: 2, children: [43, 44, 45] }),
    (e.rules[85].opcodes[43] = { type: 4, index: 10 }),
    (e.rules[85].opcodes[44] = {
      type: 6,
      string: [82, 101, 115, 111, 117, 114, 99, 101, 115, 58],
    }),
    (e.rules[85].opcodes[45] = { type: 4, index: 98 }),
    (e.rules[86].opcodes = []),
    (e.rules[86].opcodes[0] = {
      type: 2,
      children: [
        1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 31, 36,
        41,
      ],
    }),
    (e.rules[86].opcodes[1] = { type: 4, index: 87 }),
    (e.rules[86].opcodes[2] = {
      type: 6,
      string: [
        32, 119, 97, 110, 116, 115, 32, 121, 111, 117, 32, 116, 111, 32, 115, 105, 103, 110, 32,
        105, 110, 32, 119, 105, 116, 104, 32, 121, 111, 117, 114, 32, 83, 111, 108, 97, 110, 97, 32,
        97, 99, 99, 111, 117, 110, 116, 58,
      ],
    }),
    (e.rules[86].opcodes[3] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[4] = { type: 4, index: 83 }),
    (e.rules[86].opcodes[5] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[6] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[7] = { type: 3, min: 0, max: 1 }),
    (e.rules[86].opcodes[8] = { type: 2, children: [9, 10] }),
    (e.rules[86].opcodes[9] = { type: 4, index: 89 }),
    (e.rules[86].opcodes[10] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[11] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[12] = { type: 6, string: [85, 82, 73, 58, 32] }),
    (e.rules[86].opcodes[13] = { type: 4, index: 90 }),
    (e.rules[86].opcodes[14] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[15] = { type: 6, string: [86, 101, 114, 115, 105, 111, 110, 58, 32] }),
    (e.rules[86].opcodes[16] = { type: 4, index: 91 }),
    (e.rules[86].opcodes[17] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[18] = { type: 6, string: [67, 104, 97, 105, 110, 32, 73, 68, 58, 32] }),
    (e.rules[86].opcodes[19] = { type: 4, index: 78 }),
    (e.rules[86].opcodes[20] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[21] = { type: 6, string: [78, 111, 110, 99, 101, 58, 32] }),
    (e.rules[86].opcodes[22] = { type: 4, index: 93 }),
    (e.rules[86].opcodes[23] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[24] = {
      type: 6,
      string: [73, 115, 115, 117, 101, 100, 32, 65, 116, 58, 32],
    }),
    (e.rules[86].opcodes[25] = { type: 4, index: 94 }),
    (e.rules[86].opcodes[26] = { type: 3, min: 0, max: 1 }),
    (e.rules[86].opcodes[27] = { type: 2, children: [28, 29, 30] }),
    (e.rules[86].opcodes[28] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[29] = {
      type: 6,
      string: [69, 120, 112, 105, 114, 97, 116, 105, 111, 110, 32, 84, 105, 109, 101, 58, 32],
    }),
    (e.rules[86].opcodes[30] = { type: 4, index: 95 }),
    (e.rules[86].opcodes[31] = { type: 3, min: 0, max: 1 }),
    (e.rules[86].opcodes[32] = { type: 2, children: [33, 34, 35] }),
    (e.rules[86].opcodes[33] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[34] = {
      type: 6,
      string: [78, 111, 116, 32, 66, 101, 102, 111, 114, 101, 58, 32],
    }),
    (e.rules[86].opcodes[35] = { type: 4, index: 96 }),
    (e.rules[86].opcodes[36] = { type: 3, min: 0, max: 1 }),
    (e.rules[86].opcodes[37] = { type: 2, children: [38, 39, 40] }),
    (e.rules[86].opcodes[38] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[39] = {
      type: 6,
      string: [82, 101, 113, 117, 101, 115, 116, 32, 73, 68, 58, 32],
    }),
    (e.rules[86].opcodes[40] = { type: 4, index: 97 }),
    (e.rules[86].opcodes[41] = { type: 3, min: 0, max: 1 }),
    (e.rules[86].opcodes[42] = { type: 2, children: [43, 44, 45] }),
    (e.rules[86].opcodes[43] = { type: 4, index: 10 }),
    (e.rules[86].opcodes[44] = {
      type: 6,
      string: [82, 101, 115, 111, 117, 114, 99, 101, 115, 58],
    }),
    (e.rules[86].opcodes[45] = { type: 4, index: 98 }),
    (e.rules[87].opcodes = []),
    (e.rules[87].opcodes[0] = { type: 4, index: 66 }),
    (e.rules[88].opcodes = []),
    (e.rules[88].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[88].opcodes[1] = { type: 4, index: 81 }),
    (e.rules[88].opcodes[2] = { type: 4, index: 83 }),
    (e.rules[89].opcodes = []),
    (e.rules[89].opcodes[0] = { type: 3, min: 1, max: 1 / 0 }),
    (e.rules[89].opcodes[1] = { type: 1, children: [2, 3, 4] }),
    (e.rules[89].opcodes[2] = { type: 4, index: 62 }),
    (e.rules[89].opcodes[3] = { type: 4, index: 61 }),
    (e.rules[89].opcodes[4] = { type: 7, string: [32] }),
    (e.rules[90].opcodes = []),
    (e.rules[90].opcodes[0] = { type: 4, index: 29 }),
    (e.rules[91].opcodes = []),
    (e.rules[91].opcodes[0] = { type: 7, string: [49] }),
    (e.rules[92].opcodes = []),
    (e.rules[92].opcodes[0] = { type: 1, children: [1, 2] }),
    (e.rules[92].opcodes[1] = { type: 4, index: 75 }),
    (e.rules[92].opcodes[2] = { type: 4, index: 78 }),
    (e.rules[93].opcodes = []),
    (e.rules[93].opcodes[0] = { type: 3, min: 8, max: 1 / 0 }),
    (e.rules[93].opcodes[1] = { type: 1, children: [2, 3] }),
    (e.rules[93].opcodes[2] = { type: 4, index: 0 }),
    (e.rules[93].opcodes[3] = { type: 4, index: 6 }),
    (e.rules[94].opcodes = []),
    (e.rules[94].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[95].opcodes = []),
    (e.rules[95].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[96].opcodes = []),
    (e.rules[96].opcodes[0] = { type: 4, index: 28 }),
    (e.rules[97].opcodes = []),
    (e.rules[97].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[97].opcodes[1] = { type: 4, index: 57 }),
    (e.rules[98].opcodes = []),
    (e.rules[98].opcodes[0] = { type: 3, min: 0, max: 1 / 0 }),
    (e.rules[98].opcodes[1] = { type: 2, children: [2, 3, 4] }),
    (e.rules[98].opcodes[2] = { type: 4, index: 10 }),
    (e.rules[98].opcodes[3] = { type: 7, string: [45, 32] }),
    (e.rules[98].opcodes[4] = { type: 4, index: 29 }),
    (e.toString = () => {
      let t = '';
      return (
        (t += `; ==============================================================================
`),
        (t += `; Core rules for ABNF (RFC 5234)
`),
        (t += `; ==============================================================================
`),
        (t += `;
`),
        (t += `; References:
`),
        (t += `; - https://www.rfc-editor.org/rfc/rfc5234#appendix-B.1
`),
        (t += `
`),
        (t += `ALPHA          =  %x41-5A / %x61-7A
`),
        (t += `               ; A-Z / a-z
`),
        (t += `
`),
        (t += `BIT            =  "0" / "1"
`),
        (t += `
`),
        (t += `CHAR           =  %x01-7F
`),
        (t += `               ; any 7-bit US-ASCII character,
`),
        (t += `               ;  excluding NUL
`),
        (t += `
`),
        (t += `CR             =  %x0D
`),
        (t += `               ; carriage return
`),
        (t += `
`),
        (t += `CRLF           =  CR LF
`),
        (t += `               ; Internet standard newline
`),
        (t += `
`),
        (t += `CTL            =  %x00-1F / %x7F
`),
        (t += `               ; controls
`),
        (t += `
`),
        (t += `DIGIT          =  %x30-39
`),
        (t += `               ; 0-9
`),
        (t += `
`),
        (t += `DQUOTE         =  %x22
`),
        (t += `               ; " (Double Quote)
`),
        (t += `
`),
        (t += `HEXDIG         =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`),
        (t += `
`),
        (t += `HTAB           =  %x09
`),
        (t += `               ; horizontal tab
`),
        (t += `
`),
        (t += `LF             =  %x0A
`),
        (t += `               ; linefeed
`),
        (t += `
`),
        (t += `LWSP           =  *(WSP / CRLF WSP)
`),
        (t += `               ; Use of this linear-white-space rule
`),
        (t += `               ;  permits lines containing only white
`),
        (t += `               ;  space that are no longer legal in
`),
        (t += `               ;  mail headers and have caused
`),
        (t += `               ;  interoperability problems in other
`),
        (t += `               ;  contexts.
`),
        (t += `               ; Do not use when defining mail
`),
        (t += `               ;  headers and use with caution in
`),
        (t += `               ;  other contexts.
`),
        (t += `
`),
        (t += `OCTET          =  %x00-FF
`),
        (t += `               ; 8 bits of data
`),
        (t += `
`),
        (t += `SP             =  %x20
`),
        (t += `
`),
        (t += `VCHAR          =  %x21-7E
`),
        (t += `               ; visible (printing) characters
`),
        (t += `
`),
        (t += `WSP            =  SP / HTAB
`),
        (t += `               ; white space
`),
        (t += `; ==============================================================================
`),
        (t += `; Internet Date/Time Format (RFC 3339)
`),
        (t += `; ==============================================================================
`),
        (t += `;
`),
        (t += `; Requires:
`),
        (t += `; - core.bnf
`),
        (t += `;
`),
        (t += `; References:
`),
        (t += `; - https://www.rfc-editor.org/rfc/rfc3339#section-5.6
`),
        (t += `
`),
        (t += `date-fullyear   = 4DIGIT
`),
        (t += `
`),
        (t += `date-month      = 2DIGIT  ; 01-12
`),
        (t += `
`),
        (t += `date-mday       = 2DIGIT  ; 01-28, 01-29, 01-30, 01-31 based on
`),
        (t += `                          ; month/year
`),
        (t += `
`),
        (t += `time-hour       = 2DIGIT  ; 00-23
`),
        (t += `
`),
        (t += `time-minute     = 2DIGIT  ; 00-59
`),
        (t += `
`),
        (t += `time-second     = 2DIGIT  ; 00-58, 00-59, 00-60 based on leap second
`),
        (t += `                          ; rules
`),
        (t += `
`),
        (t += `time-secfrac    = "." 1*DIGIT
`),
        (t += `
`),
        (t += `time-numoffset  = ("+" / "-") time-hour ":" time-minute
`),
        (t += `
`),
        (t += `time-offset     = "Z" / time-numoffset
`),
        (t += `
`),
        (t += `partial-time    = time-hour ":" time-minute ":" time-second
`),
        (t += `                  [time-secfrac]
`),
        (t += `
`),
        (t += `full-date       = date-fullyear "-" date-month "-" date-mday
`),
        (t += `
`),
        (t += `full-time       = partial-time time-offset
`),
        (t += `
`),
        (t += `date-time       = full-date "T" full-time
`),
        (t += `; ==============================================================================
`),
        (t += `; Uniform Resource Identifier (RFC 3986)
`),
        (t += `; ==============================================================================
`),
        (t += `;
`),
        (t += `; Requires:
`),
        (t += `; - core.bnf
`),
        (t += `;
`),
        (t += `; References:
`),
        (t += `; - https://www.rfc-editor.org/rfc/rfc3986#appendix-A
`),
        (t += `
`),
        (t += `URI           = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
`),
        (t += `
`),
        (t += `hier-part     = "//" authority path-abempty
`),
        (t += `              / path-absolute
`),
        (t += `              / path-rootless
`),
        (t += `              / path-empty
`),
        (t += `
`),
        (t += `URI-reference = URI / relative-ref
`),
        (t += `
`),
        (t += `absolute-URI  = scheme ":" hier-part [ "?" query ]
`),
        (t += `
`),
        (t += `relative-ref  = relative-part [ "?" query ] [ "#" fragment ]
`),
        (t += `
`),
        (t += `relative-part = "//" authority path-abempty
`),
        (t += `              / path-absolute
`),
        (t += `              / path-noscheme
`),
        (t += `              / path-empty
`),
        (t += `
`),
        (t += `scheme        = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
`),
        (t += `
`),
        (t += `authority     = [ userinfo "@" ] host [ ":" port ]
`),
        (t += `userinfo      = *( unreserved / pct-encoded / sub-delims / ":" )
`),
        (t += `host          = IP-literal / IPv4address / reg-name
`),
        (t += `port          = *DIGIT
`),
        (t += `
`),
        (t += `IP-literal    = "[" ( IPv6address / IPvFuture  ) "]"
`),
        (t += `
`),
        (t += `IPvFuture     = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
`),
        (t += `
`),
        (t += `IPv6address   =                            6( h16 ":" ) ls32
`),
        (t += `              /                       "::" 5( h16 ":" ) ls32
`),
        (t += `              / [               h16 ] "::" 4( h16 ":" ) ls32
`),
        (t += `              / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
`),
        (t += `              / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
`),
        (t += `              / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
`),
        (t += `              / [ *4( h16 ":" ) h16 ] "::"              ls32
`),
        (t += `              / [ *5( h16 ":" ) h16 ] "::"              h16
`),
        (t += `              / [ *6( h16 ":" ) h16 ] "::"
`),
        (t += `
`),
        (t += `h16           = 1*4HEXDIG
`),
        (t += `ls32          = ( h16 ":" h16 ) / IPv4address
`),
        (t += `IPv4address   = dec-octet "." dec-octet "." dec-octet "." dec-octet
`),
        (t += `dec-octet     = DIGIT                 ; 0-9
`),
        (t += `              / %x31-39 DIGIT         ; 10-99
`),
        (t += `              / "1" 2DIGIT            ; 100-199
`),
        (t += `              / "2" %x30-34 DIGIT     ; 200-249
`),
        (t += `              / "25" %x30-35          ; 250-255
`),
        (t += `
`),
        (t += `reg-name      = *( unreserved / pct-encoded / sub-delims )
`),
        (t += `
`),
        (t += `path          = path-abempty    ; begins with "/" or is empty
`),
        (t += `              / path-absolute   ; begins with "/" but not "//"
`),
        (t += `              / path-noscheme   ; begins with a non-colon segment
`),
        (t += `              / path-rootless   ; begins with a segment
`),
        (t += `              / path-empty      ; zero characters
`),
        (t += `
`),
        (t += `path-abempty  = *( "/" segment )
`),
        (t += `path-absolute = "/" [ segment-nz *( "/" segment ) ]
`),
        (t += `path-noscheme = segment-nz-nc *( "/" segment )
`),
        (t += `path-rootless = segment-nz *( "/" segment )
`),
        (t += `path-empty    = 0pchar
`),
        (t += `
`),
        (t += `segment       = *pchar
`),
        (t += `segment-nz    = 1*pchar
`),
        (t += `segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
`),
        (t += `; non-zero-length segment without any colon ":"
`),
        (t += `
`),
        (t += `pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
`),
        (t += `
`),
        (t += `query         = *( pchar / "/" / "?" )
`),
        (t += `
`),
        (t += `fragment      = *( pchar / "/" / "?" )
`),
        (t += `
`),
        (t += `pct-encoded   = "%" HEXDIG HEXDIG
`),
        (t += `
`),
        (t += `unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
`),
        (t += `reserved      = gen-delims / sub-delims
`),
        (t += `gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
`),
        (t += `sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
`),
        (t += `              / "*" / "+" / "," / ";" / "="
`),
        (t += `; ==============================================================================
`),
        (t += `; DNS URI (RFC 4501)
`),
        (t += `; ==============================================================================
`),
        (t += `;
`),
        (t += `; Requires:
`),
        (t += `; - core.bnf
`),
        (t += `; - uri.bnf
`),
        (t += `;
`),
        (t += `; References:
`),
        (t += `; - https://www.rfc-editor.org/rfc/rfc4501.html#section-3
`),
        (t += `;
`),
        (t += `; Note:
`),
        (t += `; dnsclassval and dnstypeval are not defined exhaustively
`),
        (t += `; but their definitions are unused in SIW grammars.
`),
        (t += `
`),
        (t += `
`),
        (t += `dnsurl          = "dns:" [ "//" dnsauthority "/" ]
`),
        (t += `                  dnsname ["?" dnsquery]
`),
        (t += `
`),
        (t += `dnsauthority    = host [ ":" port ]
`),
        (t += `                ; See RFC 3986 for the
`),
        (t += `                ; definition of "host" and "port".
`),
        (t += `
`),
        (t += `dnsname         = *pchar
`),
        (t += `                ; See RFC 3986 for the
`),
        (t += `                ; definition of "pchar".
`),
        (t += `
`),
        (t += `                ; The "dnsname" field may be a
`),
        (t += `                ; "relative" or "absolute" name,
`),
        (t += `                ; as per RFC 1034, section 3.1.
`),
        (t += `
`),
        (t += `                ; Note further that an empty
`),
        (t += `                ; "dnsname" value is to be
`),
        (t += `                ; interpreted as the root itself.
`),
        (t += `                ; See below on relative dnsnames.
`),
        (t += `
`),
        (t += `dnsquery        = dnsqueryelement [";" dnsquery]
`),
        (t += `
`),
        (t += `dnsqueryelement = ( "CLASS=" dnsclassval ) / ( "TYPE=" dnstypeval )
`),
        (t += `                ; Each clause MUST NOT be used more
`),
        (t += `                ; than once.
`),
        (t += `
`),
        (t += `dnsclassval     = 1*digit / "IN" / "CH"
`),
        (t += `                ; omitted:
`),
        (t += `                ; / <Any IANA registered DNS class mnemonic>
`),
        (t += `
`),
        (t += `dnstypeval      = 1*digit / "A" / "NS" / "MD"
`),
        (t += `                ; omitted:
`),
        (t += `                ; / <Any IANA registered DNS type mnemonic>
`),
        (t += `; ==============================================================================
`),
        (t += `; Chain-agnostic IDs (CAIP-2)
`),
        (t += `; ==============================================================================
`),
        (t += `;
`),
        (t += `; Requires:
`),
        (t += `; - core.bnf
`),
        (t += `;
`),
        (t += `; References:
`),
        (t += `; - https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md#syntax
`),
        (t += `; - https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md#syntax
`),
        (t += `
`),
        (t += `chain-id        = eth-chain-id
`),
        (t += `                / sol-chain-id
`),
        (t += `                ; NOTE: Only Ethereum and Solana are supported at the moment
`),
        (t += `
`),
        (t += `
`),
        (t += `; Ethereum
`),
        (t += `; ------------------------------------------------------------------------------
`),
        (t += `
`),
        (t += `eth-namespace   = %s"eip155"
`),
        (t += `                ; The chain-id namespace for evm chains
`),
        (t += `
`),
        (t += `eth-network-id  = 1*32DIGIT
`),
        (t += `                ; Accept up to 32 digits. Could probably be lowered
`),
        (t += `
`),
        (t += `eth-chain-id    = eth-namespace ":" eth-network-id
`),
        (t += `                ; Examples:
`),
        (t += `                ; - eip155:1   (eth mainnet)
`),
        (t += `                ; - eip155:137 (polygon mainnet)
`),
        (t += `
`),
        (t += `; Solana
`),
        (t += `; ------------------------------------------------------------------------------
`),
        (t += `
`),
        (t += `sol-namespace   = %s"solana"
`),
        (t += `                ; The chain-id namespace for solana
`),
        (t += `
`),
        (t += `sol-network-id  = %s"mainnet" / %s"testnet" / %s"devnet" / %s"localnet"
`),
        (t += `                ; This enumeration comes from https://github.com/solana-labs/wallet-standard/blob/master/packages/core/chains/src/index.ts
`),
        (t += `
`),
        (t += `sol-chain-id    = sol-namespace ":" sol-network-id
`),
        (t += `                ; Examples:
`),
        (t += `                ; - solana:mainnet (solana mainnet)
`),
        (t += `                ; - solana:testnet (solana testnet)
`),
        (t += `; ==============================================================================
`),
        (t += `; Chain-agnostic account identifiers (CAIP-10)
`),
        (t += `; ==============================================================================
`),
        (t += `;
`),
        (t += `; Requires:
`),
        (t += `; - core.bnf
`),
        (t += `; - chain-id.bnf
`),
        (t += `;
`),
        (t += `; References:
`),
        (t += `; - https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md#syntax
`),
        (t += `; - https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md#syntax
`),
        (t += `
`),
        (t += `account-id      = eth-account-id
`),
        (t += `                / sol-account-id
`),
        (t += `                ; NOTE: Only Ethereum and Solana are supported at the moment
`),
        (t += `
`),
        (t += `; Ethereum
`),
        (t += `; ------------------------------------------------------------------------------
`),
        (t += `
`),
        (t += `eth-address     = "0x" 40HEXDIG
`),
        (t += `                ; Must also conform to captilization
`),
        (t += `                ; checksum encoding specified in EIP-55
`),
        (t += `                ; where applicable (EOAs).
`),
        (t += `
`),
        (t += `eth-account-id  = eth-chain-id ":" eth-address
`),
        (t += `                ; See CAIP-2 for definition of "eth-chain-id"
`),
        (t += `                ; Examples:
`),
        (t += `                ; - eip155:1:0xb9c5714089478a327f09197987f16f9e5d936e8a   (eth mainnet)
`),
        (t += `                ; - eip155:137:0xb9c5714089478a327f09197987f16f9e5d936e8a (polygon mainnet)
`),
        (t += `
`),
        (t += `; Solana
`),
        (t += `; ------------------------------------------------------------------------------
`),
        (t += `
`),
        (t += `sol-address     = 32*44( %x31-39 / %x41-48 / %x4A-4E / %x50-5A / %x61-6B / %x6D-7A )
`),
        (t += `                ; Valid Solana addresses are 32-44 base58-encoded chars: 1-9 / A-H / J-N / P-Z / a-k / m-z
`),
        (t += `                ; Note: this doesn't validate whether the address is "on the curve"
`),
        (t += `
`),
        (t += `sol-account-id  = sol-chain-id ":" sol-address
`),
        (t += `                ; See CAIP-2 for definition of "sol-chain-id"
`),
        (t += `                ; Examples:
`),
        (t += `                ; - solana:mainnet:FYpB58cLw5cwiN763ayB2sFT8HLF2MRUBbbyRgHYiRpK (solana mainnet)
`),
        (t += `                ; - solana:testnet:QhnBSSbjScn9VHBBqwosy99icpeJrW4iuEwkJ3d9Fn9  (solana testnet)
`),
        (t += `; ==============================================================================
`),
        (t += `; Sign in with X (CAIP-122)
`),
        (t += `; ==============================================================================
`),
        (t += `;
`),
        (t += `; Requires:
`),
        (t += `; - core.bnf
`),
        (t += `; - datetime.bnf
`),
        (t += `; - uri.bnf
`),
        (t += `; - dns.bnf
`),
        (t += `; - chain-id.bnf
`),
        (t += `; - account-id.bnf
`),
        (t += `;
`),
        (t += `; References:
`),
        (t += `; - https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md#syntax
`),
        (t += `; - https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md#syntax
`),
        (t += `; - https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-122.md
`),
        (t += `;
`),
        (t += `; Note:
`),
        (t += `; Currently, this grammar file only supports the Ethereum and Solana blockchains
`),
        (t += `
`),
        (t += `sign-in-with-x = sign-in-with-eth
`),
        (t += `               / sign-in-with-sol
`),
        (t += `
`),
        (t += `; Ethereum
`),
        (t += `;-----------------------------------------------------------------------------
`),
        (t += `
`),
        (t += `sign-in-with-eth =
`),
        (t += `  message-domain %s" wants you to sign in with your Ethereum account:" LF
`),
        (t += `  eth-account-id LF
`),
        (t += `  LF
`),
        (t += `  [ message-statement LF ]
`),
        (t += `  LF
`),
        (t += `  %s"URI: " message-uri LF
`),
        (t += `  %s"Version: " message-version LF
`),
        (t += `  %s"Chain ID: " eth-chain-id LF
`),
        (t += `  %s"Nonce: " message-nonce LF
`),
        (t += `  %s"Issued At: " message-issued-at
`),
        (t += `  [ LF %s"Expiration Time: " message-expiration-time ]
`),
        (t += `  [ LF %s"Not Before: " message-not-before ]
`),
        (t += `  [ LF %s"Request ID: " message-request-id ]
`),
        (t += `  [ LF %s"Resources:" message-resources ]
`),
        (t += `
`),
        (t += `; Solana
`),
        (t += `;-----------------------------------------------------------------------------
`),
        (t += `
`),
        (t += `sign-in-with-sol =
`),
        (t += `  message-domain %s" wants you to sign in with your Solana account:" LF
`),
        (t += `  sol-account-id LF
`),
        (t += `  LF
`),
        (t += `  [ message-statement LF ]
`),
        (t += `  LF
`),
        (t += `  %s"URI: " message-uri LF
`),
        (t += `  %s"Version: " message-version LF
`),
        (t += `  %s"Chain ID: " sol-chain-id LF
`),
        (t += `  %s"Nonce: " message-nonce LF
`),
        (t += `  %s"Issued At: " message-issued-at
`),
        (t += `  [ LF %s"Expiration Time: " message-expiration-time ]
`),
        (t += `  [ LF %s"Not Before: " message-not-before ]
`),
        (t += `  [ LF %s"Request ID: " message-request-id ]
`),
        (t += `  [ LF %s"Resources:" message-resources ]
`),
        (t += `
`),
        (t += `; Common
`),
        (t += `;-----------------------------------------------------------------------------
`),
        (t += `
`),
        (t += `message-domain          = dnsauthority ; CAIP-10 spec defines domain as dnsauthority unlike EIP-4361, which uses authority
`),
        (t += `message-address         = eth-account-id / sol-account-id ; See CAIP-10 for address identifier definition
`),
        (t += `message-statement       = 1*( reserved / unreserved / " " )
`),
        (t += `message-uri             = URI
`),
        (t += `message-version         = "1"
`),
        (t += `message-chain-id        = eth-chain-id / sol-chain-id
`),
        (t += `message-nonce           = 8*( ALPHA / DIGIT )
`),
        (t += `message-issued-at       = date-time
`),
        (t += `message-expiration-time = date-time
`),
        (t += `message-not-before      = date-time
`),
        (t += `message-request-id      = *pchar
`),
        (t += `message-resources       = *( LF "- " URI )
`),
        t
      );
    }),
    e
  );
}
const it = (e, t) => (s, n, r, o, i) => (s === Sn.SEM_PRE && (i[e] = t(n, r, o, i)), Sn.SEM_OK),
  { apgLib: is } = globalThis;
function Lu(e, t) {
  const s = new is.parser();
  (s.stats = new is.stats()), (s.trace = new is.trace()), (s.ast = new is.ast());
  const n = is.utils.charsToString,
    r = (h, y, b) => new Date(n(h, y, b)),
    o = (h, y, b) => new URL(n(h, y, b));
  (s.ast.callbacks['message-domain'] = it('domain', n)),
    (s.ast.callbacks['message-address'] = it('address', n)),
    (s.ast.callbacks['message-statement'] = it('statement', n)),
    (s.ast.callbacks['message-uri'] = it('uri', o)),
    (s.ast.callbacks['message-version'] = it('version', n)),
    (s.ast.callbacks['message-chain-id'] = it('chainId', n)),
    (s.ast.callbacks['message-nonce'] = it('nonce', n)),
    (s.ast.callbacks['message-issued-at'] = it('issuedAt', r)),
    (s.ast.callbacks['message-expiration-time'] = it('expirationTime', r)),
    (s.ast.callbacks['message-not-before'] = it('notBefore', r)),
    (s.ast.callbacks['message-request-id'] = it('requestId', n)),
    (s.ast.callbacks['message-resources'] = it('resources', (h, y, b) =>
      b
        ? n(h, y, b)
            .slice(3)
            .split(
              `
- `
            )
            .map((w) => new URL(w))
        : [])),
    e === zt.X &&
      ((s.ast.callbacks['eth-account-id'] = s.ast.callbacks['message-address']),
      (s.ast.callbacks['eth-chain-id'] = s.ast.callbacks['message-chain-id']),
      (s.ast.callbacks['sol-account-id'] = s.ast.callbacks['message-address']),
      (s.ast.callbacks['sol-chain-id'] = s.ast.callbacks['message-chain-id']));
  let i = null;
  switch (e) {
    case zt.Ethereum:
      i = Yl;
      break;
    case zt.Solana:
      i = Xl;
      break;
    case zt.X:
      i = Jl;
      break;
  }
  if (!i) throw new Error(`Could not find grammar for ${e}`);
  const u = i(),
    l = s.parse(u, e, t);
  if (!l.success) {
    const y = l.maxMatched + 1,
      b = t.slice(0, y),
      w = b.split(`
`),
      p = w[w.length - 1].length - 1,
      f = [b, p > -1 ? ' '.repeat(p) + '^' : '^'].join(`
`);
    return { success: !1, error: new Error(f) };
  }
  const d = { type: e };
  return s.ast.translate(d), { success: !0, data: d };
}
const Pu = {
  [Fe.ADDRESS_MISMATCH]: 'address',
  [Fe.DOMAIN_MISMATCH]: 'domain',
  [Fe.URI_MISMATCH]: 'uri',
  [Fe.CHAIN_ID_MISMATCH]: 'chainId',
  [Fe.ISSUED_TOO_FAR_IN_THE_PAST]: 'issuedAt',
  [Fe.ISSUED_TOO_FAR_IN_THE_FUTURE]: 'issuedAt',
  [Fe.EXPIRED]: 'expirationTime',
  [Fe.EXPIRES_BEFORE_ISSUANCE]: 'expirationTime',
  [Fe.VALID_AFTER_EXPIRATION]: 'notBefore',
};
var Zl = {},
  js = {};
const Ql = Pr(ei);
var ve = {};
Object.defineProperty(ve, '__esModule', { value: !0 });
ve.MULTIPLE_ACCOUNT_INFO_MAX =
  ve.NAME_HOUSE_PREFIX =
  ve.TLD_HOUSE_PREFIX =
  ve.NFT_RECORD_PREFIX =
  ve.TOKEN_METADATA_PROGRAM_ID =
  ve.SPL_TOKEN_PROGRAM_ID =
  ve.NAME_HOUSE_PROGRAM_ID =
  ve.TLD_HOUSE_PROGRAM_ID =
  ve.ANS_PROGRAM_ID =
  ve.ORIGIN_TLD =
  ve.MAIN_DOMAIN_PREFIX =
    void 0;
const Ss = ks;
ve.MAIN_DOMAIN_PREFIX = 'main_domain';
ve.ORIGIN_TLD = 'ANS';
ve.ANS_PROGRAM_ID = new Ss.PublicKey('ALTNSZ46uaAUU7XUV6awvdorLGqAsPwa9shm7h4uP2FK');
ve.TLD_HOUSE_PROGRAM_ID = new Ss.PublicKey('TLDHkysf5pCnKsVA4gXpNvmy7psXLPEu4LAdDJthT9S');
ve.NAME_HOUSE_PROGRAM_ID = new Ss.PublicKey('NH3uX6FtVE2fNREAioP7hm5RaozotZxeL6khU1EHx51');
ve.SPL_TOKEN_PROGRAM_ID = new Ss.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
ve.TOKEN_METADATA_PROGRAM_ID = new Ss.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
ve.NFT_RECORD_PREFIX = 'nft_record';
ve.TLD_HOUSE_PREFIX = 'tld_house';
ve.NAME_HOUSE_PREFIX = 'name_house';
ve.MULTIPLE_ACCOUNT_INFO_MAX = 100;
var ns = {},
  ze = {},
  eu =
    (le && le.__createBinding) ||
    (Object.create
      ? function (e, t, s, n) {
          n === void 0 && (n = s),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[s];
              },
            });
        }
      : function (e, t, s, n) {
          n === void 0 && (n = s), (e[n] = t[s]);
        }),
  tu =
    (le && le.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  kt =
    (le && le.__decorate) ||
    function (e, t, s, n) {
      var r = arguments.length,
        o = r < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, s)) : n,
        i;
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(e, t, s, n);
      else
        for (var u = e.length - 1; u >= 0; u--)
          (i = e[u]) && (o = (r < 3 ? i(o) : r > 3 ? i(t, s, o) : i(t, s)) || o);
      return r > 3 && o && Object.defineProperty(t, s, o), o;
    },
  su =
    (le && le.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var s in e) s !== 'default' && Object.hasOwnProperty.call(e, s) && eu(t, e, s);
      return tu(t, e), t;
    },
  Eo =
    (le && le.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(ze, '__esModule', { value: !0 });
ze.deserializeUnchecked =
  ze.deserialize =
  ze.serialize =
  ze.BinaryReader =
  ze.BinaryWriter =
  ze.BorshError =
  ze.baseDecode =
  ze.baseEncode =
    void 0;
const Nt = Eo(Ds()),
  _o = Eo(_r),
  nu = su(Tr),
  ru = typeof globalThis.TextDecoder != 'function' ? nu.TextDecoder : globalThis.TextDecoder,
  ou = new ru('utf-8', { fatal: !0 });
function iu(e) {
  return typeof e == 'string' && (e = ue.from(e, 'utf8')), _o.default.encode(ue.from(e));
}
ze.baseEncode = iu;
function au(e) {
  return ue.from(_o.default.decode(e));
}
ze.baseDecode = au;
const an = 1024;
class Ye extends Error {
  constructor(t) {
    super(t), (this.fieldPath = []), (this.originalMessage = t);
  }
  addToFieldPath(t) {
    this.fieldPath.splice(0, 0, t),
      (this.message = this.originalMessage + ': ' + this.fieldPath.join('.'));
  }
}
ze.BorshError = Ye;
class To {
  constructor() {
    (this.buf = ue.alloc(an)), (this.length = 0);
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = ue.concat([this.buf, ue.alloc(an)]));
  }
  writeU8(t) {
    this.maybeResize(), this.buf.writeUInt8(t, this.length), (this.length += 1);
  }
  writeU16(t) {
    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), (this.length += 2);
  }
  writeU32(t) {
    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), (this.length += 4);
  }
  writeU64(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Nt.default(t).toArray('le', 8)));
  }
  writeU128(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Nt.default(t).toArray('le', 16)));
  }
  writeU256(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Nt.default(t).toArray('le', 32)));
  }
  writeU512(t) {
    this.maybeResize(), this.writeBuffer(ue.from(new Nt.default(t).toArray('le', 64)));
  }
  writeBuffer(t) {
    (this.buf = ue.concat([ue.from(this.buf.subarray(0, this.length)), t, ue.alloc(an)])),
      (this.length += t.length);
  }
  writeString(t) {
    this.maybeResize();
    const s = ue.from(t, 'utf8');
    this.writeU32(s.length), this.writeBuffer(s);
  }
  writeFixedArray(t) {
    this.writeBuffer(ue.from(t));
  }
  writeArray(t, s) {
    this.maybeResize(), this.writeU32(t.length);
    for (const n of t) this.maybeResize(), s(n);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
}
ze.BinaryWriter = To;
function St(e, t, s) {
  const n = s.value;
  s.value = function (...r) {
    try {
      return n.apply(this, r);
    } catch (o) {
      if (o instanceof RangeError) {
        const i = o.code;
        if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(i) >= 0)
          throw new Ye('Reached the end of buffer when deserializing');
      }
      throw o;
    }
  };
}
class ot {
  constructor(t) {
    (this.buf = t), (this.offset = 0);
  }
  readU8() {
    const t = this.buf.readUInt8(this.offset);
    return (this.offset += 1), t;
  }
  readU16() {
    const t = this.buf.readUInt16LE(this.offset);
    return (this.offset += 2), t;
  }
  readU32() {
    const t = this.buf.readUInt32LE(this.offset);
    return (this.offset += 4), t;
  }
  readU64() {
    const t = this.readBuffer(8);
    return new Nt.default(t, 'le');
  }
  readU128() {
    const t = this.readBuffer(16);
    return new Nt.default(t, 'le');
  }
  readU256() {
    const t = this.readBuffer(32);
    return new Nt.default(t, 'le');
  }
  readU512() {
    const t = this.readBuffer(64);
    return new Nt.default(t, 'le');
  }
  readBuffer(t) {
    if (this.offset + t > this.buf.length)
      throw new Ye(`Expected buffer length ${t} isn't within bounds`);
    const s = this.buf.slice(this.offset, this.offset + t);
    return (this.offset += t), s;
  }
  readString() {
    const t = this.readU32(),
      s = this.readBuffer(t);
    try {
      return ou.decode(s);
    } catch (n) {
      throw new Ye(`Error decoding UTF-8 string: ${n}`);
    }
  }
  readFixedArray(t) {
    return new Uint8Array(this.readBuffer(t));
  }
  readArray(t) {
    const s = this.readU32(),
      n = Array();
    for (let r = 0; r < s; ++r) n.push(t());
    return n;
  }
}
kt([St], ot.prototype, 'readU8', null);
kt([St], ot.prototype, 'readU16', null);
kt([St], ot.prototype, 'readU32', null);
kt([St], ot.prototype, 'readU64', null);
kt([St], ot.prototype, 'readU128', null);
kt([St], ot.prototype, 'readU256', null);
kt([St], ot.prototype, 'readU512', null);
kt([St], ot.prototype, 'readString', null);
kt([St], ot.prototype, 'readFixedArray', null);
kt([St], ot.prototype, 'readArray', null);
ze.BinaryReader = ot;
function Ro(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function us(e, t, s, n, r) {
  try {
    if (typeof n == 'string') r[`write${Ro(n)}`](s);
    else if (n instanceof Array)
      if (typeof n[0] == 'number') {
        if (s.length !== n[0])
          throw new Ye(`Expecting byte array of length ${n[0]}, but got ${s.length} bytes`);
        r.writeFixedArray(s);
      } else if (n.length === 2 && typeof n[1] == 'number') {
        if (s.length !== n[1])
          throw new Ye(`Expecting byte array of length ${n[1]}, but got ${s.length} bytes`);
        for (let o = 0; o < n[1]; o++) us(e, null, s[o], n[0], r);
      } else
        r.writeArray(s, (o) => {
          us(e, t, o, n[0], r);
        });
    else if (n.kind !== void 0)
      switch (n.kind) {
        case 'option': {
          s == null ? r.writeU8(0) : (r.writeU8(1), us(e, t, s, n.type, r));
          break;
        }
        default:
          throw new Ye(`FieldType ${n} unrecognized`);
      }
    else Bo(e, s, r);
  } catch (o) {
    throw (o instanceof Ye && o.addToFieldPath(t), o);
  }
}
function Bo(e, t, s) {
  if (typeof t.borshSerialize == 'function') {
    t.borshSerialize(s);
    return;
  }
  const n = e.get(t.constructor);
  if (!n) throw new Ye(`Class ${t.constructor.name} is missing in schema`);
  if (n.kind === 'struct')
    n.fields.map(([r, o]) => {
      us(e, r, t[r], o, s);
    });
  else if (n.kind === 'enum') {
    const r = t[n.field];
    for (let o = 0; o < n.values.length; ++o) {
      const [i, u] = n.values[o];
      if (i === r) {
        s.writeU8(o), us(e, i, t[i], u, s);
        break;
      }
    }
  } else throw new Ye(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function cu(e, t, s = To) {
  const n = new s();
  return Bo(e, t, n), n.toArray();
}
ze.serialize = cu;
function ds(e, t, s, n) {
  try {
    if (typeof s == 'string') return n[`read${Ro(s)}`]();
    if (s instanceof Array) {
      if (typeof s[0] == 'number') return n.readFixedArray(s[0]);
      if (typeof s[1] == 'number') {
        const r = [];
        for (let o = 0; o < s[1]; o++) r.push(ds(e, null, s[0], n));
        return r;
      } else return n.readArray(() => ds(e, t, s[0], n));
    }
    return s.kind === 'option' ? (n.readU8() ? ds(e, t, s.type, n) : void 0) : qn(e, s, n);
  } catch (r) {
    throw (r instanceof Ye && r.addToFieldPath(t), r);
  }
}
function qn(e, t, s) {
  if (typeof t.borshDeserialize == 'function') return t.borshDeserialize(s);
  const n = e.get(t);
  if (!n) throw new Ye(`Class ${t.name} is missing in schema`);
  if (n.kind === 'struct') {
    const r = {};
    for (const [o, i] of e.get(t).fields) r[o] = ds(e, o, i, s);
    return new t(r);
  }
  if (n.kind === 'enum') {
    const r = s.readU8();
    if (r >= n.values.length) throw new Ye(`Enum index: ${r} is out of range`);
    const [o, i] = n.values[r],
      u = ds(e, o, i, s);
    return new t({ [o]: u });
  }
  throw new Ye(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`);
}
function lu(e, t, s, n = ot) {
  const r = new n(s),
    o = qn(e, t, r);
  if (r.offset < s.length)
    throw new Ye(`Unexpected ${s.length - r.offset} bytes after deserialized data`);
  return o;
}
ze.deserialize = lu;
function uu(e, t, s, n = ot) {
  const r = new n(s);
  return qn(e, t, r);
}
ze.deserializeUnchecked = uu;
var Ir =
  (le && le.__awaiter) ||
  function (e, t, s, n) {
    function r(o) {
      return o instanceof s
        ? o
        : new s(function (i) {
            i(o);
          });
    }
    return new (s || (s = Promise))(function (o, i) {
      function u(h) {
        try {
          d(n.next(h));
        } catch (y) {
          i(y);
        }
      }
      function l(h) {
        try {
          d(n.throw(h));
        } catch (y) {
          i(y);
        }
      }
      function d(h) {
        h.done ? o(h.value) : r(h.value).then(u, l);
      }
      d((n = n.apply(e, t || [])).next());
    });
  };
Object.defineProperty(ns, '__esModule', { value: !0 });
ns.NameRecordHeader = void 0;
const cn = ks,
  as = ze;
class Dt {
  constructor(t) {
    (this.parentName = new cn.PublicKey(t.parentName)),
      (this.nclass = new cn.PublicKey(t.nclass)),
      (this.expiresAt = new Date(
        new as.BinaryReader(ue.from(t.expiresAt)).readU64().toNumber() * 1e3
      )),
      (this.createdAt = new Date(
        new as.BinaryReader(ue.from(t.createdAt)).readU64().toNumber() * 1e3
      )),
      (this.nonTransferable = t.nonTransferable[0] !== 0);
    const s = 45 * 24 * 60 * 60 * 1e3;
    (this.isValid =
      new as.BinaryReader(ue.from(t.expiresAt)).readU64().toNumber() === 0
        ? !0
        : this.expiresAt.getTime() + s > new Date(Date.now()).getTime()),
      (this.owner = this.isValid ? new cn.PublicKey(t.owner) : void 0);
  }
  static get byteSize() {
    return 200;
  }
  static fromAccountAddress(t, s) {
    var n;
    return Ir(this, void 0, void 0, function* () {
      const r = yield t.getAccountInfo(s, 'confirmed');
      if (!r) return;
      const o = (0, as.deserializeUnchecked)(this.schema, Dt, r.data);
      return (
        (o.data = (n = r.data) === null || n === void 0 ? void 0 : n.subarray(this.byteSize)), o
      );
    });
  }
  static fromMultipileAccountAddresses(t, s) {
    return Ir(this, void 0, void 0, function* () {
      let n = yield t.getMultipleAccountsInfo(s),
        r = [];
      return (
        n.forEach((o) => {
          if (!o) {
            r.push(void 0);
            return;
          }
          let i = this.fromAccountInfo(o);
          if (!i) {
            r.push(void 0);
            return;
          }
          r.push(i);
        }),
        r
      );
    });
  }
  static fromAccountInfo(t) {
    var s;
    const n = (0, as.deserializeUnchecked)(this.schema, Dt, t.data);
    return (n.data = (s = t.data) === null || s === void 0 ? void 0 : s.subarray(this.byteSize)), n;
  }
  pretty() {
    var t;
    const s = this.data.indexOf(0);
    return {
      parentName: this.parentName.toBase58(),
      owner: (t = this.owner) === null || t === void 0 ? void 0 : t.toBase58(),
      nclass: this.nclass.toBase58(),
      expiresAt: this.expiresAt,
      createdAt: this.createdAt,
      nonTransferable: this.nonTransferable,
      isValid: this.isValid,
      data: this.isValid ? this.data.subarray(0, s).toString() : void 0,
    };
  }
}
ns.NameRecordHeader = Dt;
Dt.DISCRIMINATOR = [68, 72, 88, 44, 15, 167, 103, 243];
Dt.HASH_PREFIX = 'ALT Name Service';
Dt.schema = new Map([
  [
    Dt,
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
var jn = {};
(function (e) {
  var t =
      (le && le.__createBinding) ||
      (Object.create
        ? function (i, u, l, d) {
            d === void 0 && (d = l);
            var h = Object.getOwnPropertyDescriptor(u, l);
            (!h || ('get' in h ? !u.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return u[l];
                },
              }),
              Object.defineProperty(i, d, h);
          }
        : function (i, u, l, d) {
            d === void 0 && (d = l), (i[d] = u[l]);
          }),
    s =
      (le && le.__setModuleDefault) ||
      (Object.create
        ? function (i, u) {
            Object.defineProperty(i, 'default', { enumerable: !0, value: u });
          }
        : function (i, u) {
            i.default = u;
          }),
    n =
      (le && le.__importStar) ||
      function (i) {
        if (i && i.__esModule) return i;
        var u = {};
        if (i != null)
          for (var l in i)
            l !== 'default' && Object.prototype.hasOwnProperty.call(i, l) && t(u, i, l);
        return s(u, i), u;
      };
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.tagBeet = e.Tag = void 0);
  const r = n(Tn);
  var o;
  (function (i) {
    (i[(i.Uninitialized = 0)] = 'Uninitialized'),
      (i[(i.ActiveRecord = 1)] = 'ActiveRecord'),
      (i[(i.InactiveRecord = 2)] = 'InactiveRecord');
  })((o = e.Tag || (e.Tag = {}))),
    (e.tagBeet = r.fixedScalarEnum(o));
})(jn);
var Vn = {};
(function (e) {
  var t =
      (le && le.__createBinding) ||
      (Object.create
        ? function (d, h, y, b) {
            b === void 0 && (b = y);
            var w = Object.getOwnPropertyDescriptor(h, y);
            (!w || ('get' in w ? !h.__esModule : w.writable || w.configurable)) &&
              (w = {
                enumerable: !0,
                get: function () {
                  return h[y];
                },
              }),
              Object.defineProperty(d, b, w);
          }
        : function (d, h, y, b) {
            b === void 0 && (b = y), (d[b] = h[y]);
          }),
    s =
      (le && le.__setModuleDefault) ||
      (Object.create
        ? function (d, h) {
            Object.defineProperty(d, 'default', { enumerable: !0, value: h });
          }
        : function (d, h) {
            d.default = h;
          }),
    n =
      (le && le.__importStar) ||
      function (d) {
        if (d && d.__esModule) return d;
        var h = {};
        if (d != null)
          for (var y in d)
            y !== 'default' && Object.prototype.hasOwnProperty.call(d, y) && t(h, d, y);
        return s(h, d), h;
      },
    r =
      (le && le.__awaiter) ||
      function (d, h, y, b) {
        function w(p) {
          return p instanceof y
            ? p
            : new y(function (f) {
                f(p);
              });
        }
        return new (y || (y = Promise))(function (p, f) {
          function m(_) {
            try {
              I(b.next(_));
            } catch (E) {
              f(E);
            }
          }
          function x(_) {
            try {
              I(b.throw(_));
            } catch (E) {
              f(E);
            }
          }
          function I(_) {
            _.done ? p(_.value) : w(_.value).then(m, x);
          }
          I((b = b.apply(d, h || [])).next());
        });
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.nftRecordBeet = e.NftRecord = e.nftRecordDiscriminator = void 0);
  const o = n(Tn),
    i = n(Cr),
    u = jn;
  e.nftRecordDiscriminator = [174, 190, 114, 100, 177, 14, 90, 254];
  class l {
    constructor(h, y, b, w, p, f) {
      (this.tag = h),
        (this.bump = y),
        (this.nameAccount = b),
        (this.owner = w),
        (this.nftMintAccount = p),
        (this.tldHouse = f);
    }
    static fromArgs(h) {
      return new l(h.tag, h.bump, h.nameAccount, h.owner, h.nftMintAccount, h.tldHouse);
    }
    static fromAccountInfo(h, y = 0) {
      return l.deserialize(h.data, y);
    }
    static fromAccountAddress(h, y) {
      return r(this, void 0, void 0, function* () {
        const b = yield h.getAccountInfo(y);
        if (b == null) throw new Error(`Unable to find NftRecord account at ${y}`);
        return l.fromAccountInfo(b, 0)[0];
      });
    }
    static deserialize(h, y = 0) {
      return e.nftRecordBeet.deserialize(h, y);
    }
    serialize() {
      return e.nftRecordBeet.serialize(
        Object.assign({ accountDiscriminator: e.nftRecordDiscriminator }, this)
      );
    }
    static get byteSize() {
      return e.nftRecordBeet.byteSize;
    }
    static getMinimumBalanceForRentExemption(h, y) {
      return r(this, void 0, void 0, function* () {
        return yield h.getMinimumBalanceForRentExemption(l.byteSize, y);
      });
    }
    static hasCorrectByteSize(h, y = 0) {
      return h.byteLength - y === l.byteSize;
    }
    pretty() {
      return {
        tag: 'Tag.' + u.Tag[this.tag],
        bump: this.bump,
        nameAccount: this.nameAccount.toBase58(),
        owner: this.owner.toBase58(),
        nftMintAccount: this.nftMintAccount.toBase58(),
        tldHouse: this.tldHouse.toBase58(),
      };
    }
  }
  (e.NftRecord = l),
    (e.nftRecordBeet = new o.BeetStruct(
      [
        ['accountDiscriminator', o.uniformFixedSizeArray(o.u8, 8)],
        ['tag', u.tagBeet],
        ['bump', o.u8],
        ['nameAccount', i.publicKey],
        ['owner', i.publicKey],
        ['nftMintAccount', i.publicKey],
        ['tldHouse', i.publicKey],
      ],
      l.fromArgs,
      'NftRecord'
    ));
})(Vn);
(function (e) {
  var t =
    (le && le.__awaiter) ||
    function (R, L, C, H) {
      function D(K) {
        return K instanceof C
          ? K
          : new C(function (q) {
              q(K);
            });
      }
      return new (C || (C = Promise))(function (K, q) {
        function F(re) {
          try {
            G(H.next(re));
          } catch (V) {
            q(V);
          }
        }
        function ie(re) {
          try {
            G(H.throw(re));
          } catch (V) {
            q(V);
          }
        }
        function G(re) {
          re.done ? K(re.value) : D(re.value).then(F, ie);
        }
        G((H = H.apply(R, L || [])).next());
      });
    };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.splitDomainTld =
      e.getParsedAllDomainsNftAccountsByOwner =
      e.delay =
      e.performReverseLookupBatched =
      e.findMetadataAddress =
      e.findNameHouse =
      e.findTldHouse =
      e.findNftRecord =
      e.getMintOwner =
      e.findAllDomainsForTld =
      e.getParentAccountFromTldHouseAccountInfo =
      e.getTldFromTldHouseAccountInfo =
      e.getAllTld =
      e.findMainDomain =
      e.findOwnedNameAccountsForUser =
      e.getOriginNameAccountKey =
      e.getHashedName =
      e.getNameOwner =
      e.getNameAccountKeyWithBump =
        void 0);
  const s = ks,
    n = Ds(),
    r = Ql,
    o = ve,
    i = ns,
    u = jn,
    l = Vn;
  function d(R, L, C) {
    const H = [R, L ? L.toBuffer() : ue.alloc(32), C ? C.toBuffer() : ue.alloc(32)];
    return s.PublicKey.findProgramAddressSync(H, o.ANS_PROGRAM_ID);
  }
  e.getNameAccountKeyWithBump = d;
  function h(R, L, C) {
    return t(this, void 0, void 0, function* () {
      const H = yield i.NameRecordHeader.fromAccountAddress(R, L),
        D = H.owner;
      if (!H.isValid) return;
      if (!C) return D;
      const [K] = U(C),
        [q] = E(L, K);
      return (D == null ? void 0 : D.toBase58()) !== q.toBase58() ? D : yield _(R, q);
    });
  }
  e.getNameOwner = h;
  function y(R) {
    return t(this, void 0, void 0, function* () {
      const L = i.NameRecordHeader.HASH_PREFIX + R,
        C = (0, r.sha256)(ue.from(L, 'utf8')).slice(2);
      return ue.from(C, 'hex');
    });
  }
  e.getHashedName = y;
  function b(R = o.ORIGIN_TLD) {
    return t(this, void 0, void 0, function* () {
      const L = yield y(R),
        [C] = d(L, void 0, void 0);
      return C;
    });
  }
  e.getOriginNameAccountKey = b;
  function w(R, L, C) {
    return t(this, void 0, void 0, function* () {
      const H = [{ memcmp: { offset: 40, bytes: L.toBase58(), encoding: 'base58' } }];
      return (
        C && H.push({ memcmp: { offset: 8, bytes: C.toBase58(), encoding: 'base58' } }),
        (yield R.getProgramAccounts(o.ANS_PROGRAM_ID, { filters: H })).map((K) => K.pubkey)
      );
    });
  }
  e.findOwnedNameAccountsForUser = w;
  function p(R) {
    return s.PublicKey.findProgramAddressSync(
      [ue.from(o.MAIN_DOMAIN_PREFIX), R.toBuffer()],
      o.TLD_HOUSE_PROGRAM_ID
    );
  }
  e.findMainDomain = p;
  function f(R) {
    return t(this, void 0, void 0, function* () {
      const C = [
          {
            memcmp: { offset: 0, bytes: [247, 144, 135, 1, 238, 173, 19, 249], encoding: 'binary' },
          },
        ],
        H = yield R.getProgramAccounts(o.TLD_HOUSE_PROGRAM_ID, { filters: C }),
        D = [];
      return (
        H.map(({ account: K }) => {
          const q = x(K),
            F = m(K);
          D.push({ tld: F, parentAccount: q });
        }),
        D
      );
    });
  }
  e.getAllTld = f;
  function m(R) {
    var L;
    const H = (L = R == null ? void 0 : R.data) === null || L === void 0 ? void 0 : L.subarray(104),
      D = new n.BN(H == null ? void 0 : H.subarray(0, 4), 'le').toNumber();
    return H.subarray(4, 4 + D)
      .toString()
      .replace(/\0.*$/g, '');
  }
  e.getTldFromTldHouseAccountInfo = m;
  function x(R) {
    var L;
    const H =
      (L = R == null ? void 0 : R.data) === null || L === void 0 ? void 0 : L.subarray(72, 104);
    return new s.PublicKey(H);
  }
  e.getParentAccountFromTldHouseAccountInfo = x;
  function I(R, L) {
    return t(this, void 0, void 0, function* () {
      const C = [{ memcmp: { offset: 8, bytes: L.toBase58(), encoding: 'base58' } }];
      return (yield R.getProgramAccounts(o.ANS_PROGRAM_ID, { filters: C })).map((D) => D.pubkey);
    });
  }
  e.findAllDomainsForTld = I;
  function _(R, L) {
    return t(this, void 0, void 0, function* () {
      try {
        const C = yield l.NftRecord.fromAccountAddress(R, L);
        if (C.tag !== u.Tag.ActiveRecord) return;
        const H = yield R.getTokenLargestAccounts(C.nftMintAccount),
          D = yield R.getParsedAccountInfo(H.value[0].address);
        return D.value.data ? new s.PublicKey(D.value.data.parsed.info.owner) : void 0;
      } catch {
        return;
      }
    });
  }
  e.getMintOwner = _;
  function E(R, L) {
    return s.PublicKey.findProgramAddressSync(
      [ue.from(o.NFT_RECORD_PREFIX), L.toBuffer(), R.toBuffer()],
      o.NAME_HOUSE_PROGRAM_ID
    );
  }
  e.findNftRecord = E;
  function O(R) {
    return (
      (R = R.toLowerCase()),
      s.PublicKey.findProgramAddressSync(
        [ue.from(o.TLD_HOUSE_PREFIX), ue.from(R)],
        o.TLD_HOUSE_PROGRAM_ID
      )
    );
  }
  e.findTldHouse = O;
  function U(R) {
    return s.PublicKey.findProgramAddressSync(
      [ue.from(o.NAME_HOUSE_PREFIX), R.toBuffer()],
      o.NAME_HOUSE_PROGRAM_ID
    );
  }
  e.findNameHouse = U;
  const pe = (R) =>
    s.PublicKey.findProgramAddressSync(
      [ue.from('metadata'), o.TOKEN_METADATA_PROGRAM_ID.toBuffer(), R.toBuffer()],
      o.TOKEN_METADATA_PROGRAM_ID
    )[0];
  e.findMetadataAddress = pe;
  function X(R, L, C) {
    return t(this, void 0, void 0, function* () {
      const H = L.map((q) =>
          t(this, void 0, void 0, function* () {
            const F = yield y(q.toBase58()),
              [ie] = d(F, C, void 0);
            return ie;
          })
        ),
        D = yield Promise.all(H);
      return (yield R.getMultipleAccountsInfo(D)).map((q) =>
        q == null
          ? void 0
          : q.data
              .subarray(i.NameRecordHeader.byteSize, q == null ? void 0 : q.data.length)
              .toString()
      );
    });
  }
  e.performReverseLookupBatched = X;
  function se(R) {
    return new Promise((L) => setTimeout(L, R));
  }
  e.delay = se;
  const ge = (R, L, C) =>
    t(void 0, void 0, void 0, function* () {
      const { value: H } = yield L.getParsedTokenAccountsByOwner(R, {
          programId: o.SPL_TOKEN_PROGRAM_ID,
        }),
        D = H.filter((q) => {
          var F, ie, G, re, V, ee, ae, P, a, c;
          const g =
            (V =
              (re =
                (G =
                  (ie = (F = q.account) === null || F === void 0 ? void 0 : F.data) === null ||
                  ie === void 0
                    ? void 0
                    : ie.parsed) === null || G === void 0
                  ? void 0
                  : G.info) === null || re === void 0
                ? void 0
                : re.tokenAmount) === null || V === void 0
              ? void 0
              : V.uiAmount;
          return (
            ((c =
              (a =
                (P =
                  (ae = (ee = q.account) === null || ee === void 0 ? void 0 : ee.data) === null ||
                  ae === void 0
                    ? void 0
                    : ae.parsed) === null || P === void 0
                  ? void 0
                  : P.info) === null || a === void 0
                ? void 0
                : a.tokenAmount) === null || c === void 0
              ? void 0
              : c.decimals) === 0 && g === 1
          );
        }).map((q) => {
          var F, ie, G, re;
          return (re =
            (G =
              (ie = (F = q.account) === null || F === void 0 ? void 0 : F.data) === null ||
              ie === void 0
                ? void 0
                : ie.parsed) === null || G === void 0
              ? void 0
              : G.info) === null || re === void 0
            ? void 0
            : re.mint;
        });
      return yield J(D, L, C);
    });
  e.getParsedAllDomainsNftAccountsByOwner = ge;
  const J = (R, L, C) =>
    t(void 0, void 0, void 0, function* () {
      const H = [];
      if (R.length > 100)
        for (; R.length > 0; ) {
          let q = R.splice(0, 100).map((ie) => (0, e.findMetadataAddress)(new s.PublicKey(ie)));
          const F = yield L.getMultipleAccountsInfo(q);
          for (const ie of F)
            if (ie) {
              const G = new s.PublicKey(ie.data.subarray(326, 358));
              if (!!ie.data.subarray(326, 327) && G.toString() === C.toString()) {
                const V = ie.data
                  .subarray(66, 101)
                  .toString()
                  .replace(/\u0000/g, '');
                H.push(V);
              }
            }
        }
      else {
        let q = R.map((ie) => (0, e.findMetadataAddress)(new s.PublicKey(ie)));
        const F = yield L.getMultipleAccountsInfo(q);
        for (const ie of F)
          if (ie) {
            const G = new s.PublicKey(ie.data.subarray(326, 358));
            if (!!ie.data.subarray(326, 327) && G.toString() === C.toString()) {
              const V = ie.data
                .subarray(66, 101)
                .toString()
                .replace(/\u0000/g, '');
              H.push(V);
            }
          }
      }
      return H;
    });
  function ne(R) {
    const L = R.split('.');
    let C = '',
      H = '',
      D = '';
    return (
      L.length === 1
        ? (H = L[0])
        : ((C = '.' + L[L.length - 1]),
          (H = L[L.length - 2]),
          (D = L.slice(0, L.length - 2).join('.'))),
      [C, H, D]
    );
  }
  e.splitDomainTld = ne;
})(js);
var Vs = {},
  Yn = {};
(function (e) {
  var t =
      (le && le.__createBinding) ||
      (Object.create
        ? function (d, h, y, b) {
            b === void 0 && (b = y);
            var w = Object.getOwnPropertyDescriptor(h, y);
            (!w || ('get' in w ? !h.__esModule : w.writable || w.configurable)) &&
              (w = {
                enumerable: !0,
                get: function () {
                  return h[y];
                },
              }),
              Object.defineProperty(d, b, w);
          }
        : function (d, h, y, b) {
            b === void 0 && (b = y), (d[b] = h[y]);
          }),
    s =
      (le && le.__setModuleDefault) ||
      (Object.create
        ? function (d, h) {
            Object.defineProperty(d, 'default', { enumerable: !0, value: h });
          }
        : function (d, h) {
            d.default = h;
          }),
    n =
      (le && le.__importStar) ||
      function (d) {
        if (d && d.__esModule) return d;
        var h = {};
        if (d != null)
          for (var y in d)
            y !== 'default' && Object.prototype.hasOwnProperty.call(d, y) && t(h, d, y);
        return s(h, d), h;
      },
    r =
      (le && le.__awaiter) ||
      function (d, h, y, b) {
        function w(p) {
          return p instanceof y
            ? p
            : new y(function (f) {
                f(p);
              });
        }
        return new (y || (y = Promise))(function (p, f) {
          function m(_) {
            try {
              I(b.next(_));
            } catch (E) {
              f(E);
            }
          }
          function x(_) {
            try {
              I(b.throw(_));
            } catch (E) {
              f(E);
            }
          }
          function I(_) {
            _.done ? p(_.value) : w(_.value).then(m, x);
          }
          I((b = b.apply(d, h || [])).next());
        });
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.mainDomainBeet = e.MainDomain = e.mainDomainDiscriminator = void 0);
  const o = n(ks),
    i = n(Cr),
    u = n(Tn);
  e.mainDomainDiscriminator = [109, 239, 227, 199, 98, 226, 66, 175];
  class l {
    constructor(h, y, b) {
      (this.nameAccount = h), (this.tld = y), (this.domain = b);
    }
    static fromArgs(h) {
      return new l(h.nameAccount, h.tld, h.domain);
    }
    static fromAccountInfo(h, y = 0) {
      return l.deserialize(h.data, y);
    }
    static fromAccountAddress(h, y, b) {
      return r(this, void 0, void 0, function* () {
        const w = yield h.getAccountInfo(y, b);
        if (w == null) throw new Error(`Unable to find MainDomain account at ${y}`);
        return l.fromAccountInfo(w, 0)[0];
      });
    }
    static gpaBuilder(h = new o.PublicKey('TLDHkysf5pCnKsVA4gXpNvmy7psXLPEu4LAdDJthT9S')) {
      return i.GpaBuilder.fromStruct(h, e.mainDomainBeet);
    }
    static deserialize(h, y = 0) {
      return e.mainDomainBeet.deserialize(h, y);
    }
    serialize() {
      return e.mainDomainBeet.serialize(
        Object.assign({ accountDiscriminator: e.mainDomainDiscriminator }, this)
      );
    }
    static byteSize(h) {
      const y = l.fromArgs(h);
      return e.mainDomainBeet.toFixedFromValue(
        Object.assign({ accountDiscriminator: e.mainDomainDiscriminator }, y)
      ).byteSize;
    }
    static getMinimumBalanceForRentExemption(h, y, b) {
      return r(this, void 0, void 0, function* () {
        return yield y.getMinimumBalanceForRentExemption(l.byteSize(h), b);
      });
    }
    pretty() {
      return { nameAccount: this.nameAccount.toBase58(), tld: this.tld, domain: this.domain };
    }
  }
  (e.MainDomain = l),
    (e.mainDomainBeet = new u.FixableBeetStruct(
      [
        ['accountDiscriminator', u.uniformFixedSizeArray(u.u8, 8)],
        ['nameAccount', i.publicKey],
        ['tld', u.utf8String],
        ['domain', u.utf8String],
      ],
      l.fromArgs,
      'MainDomain'
    ));
})(Yn);
var Is = {},
  vo =
    (le && le.__awaiter) ||
    function (e, t, s, n) {
      function r(o) {
        return o instanceof s
          ? o
          : new s(function (i) {
              i(o);
            });
      }
      return new (s || (s = Promise))(function (o, i) {
        function u(h) {
          try {
            d(n.next(h));
          } catch (y) {
            i(y);
          }
        }
        function l(h) {
          try {
            d(n.throw(h));
          } catch (y) {
            i(y);
          }
        }
        function d(h) {
          h.done ? o(h.value) : r(h.value).then(u, l);
        }
        d((n = n.apply(e, t || [])).next());
      });
    };
Object.defineProperty(Is, '__esModule', { value: !0 });
Is.getDomainKey = void 0;
const ln = js,
  du = (e, t = !1) =>
    vo(void 0, void 0, void 0, function* () {
      const s = e.split('.');
      if (s.length === 3) {
        const u = '.' + s[2],
          l = s[1],
          d = s[0],
          { pubkey: h } = yield It(u),
          { pubkey: y } = yield It(l, h),
          w = ue
            .from([t ? 1 : 0])
            .toString()
            .concat(d),
          p = yield It(w, y);
        return Object.assign(Object.assign({}, p), { isSub: !0, parent: y });
      } else if (s.length === 4 && t) {
        const u = '.' + s[3],
          l = s[2],
          d = s[1],
          h = s[0],
          { pubkey: y } = yield It(u),
          { pubkey: b } = yield It(l, y),
          { pubkey: w } = yield It('\0'.concat(d), b),
          p = ue.from([1]).toString(),
          f = yield It(p.concat(h), w);
        return Object.assign(Object.assign({}, f), { isSub: !0, parent: b, isSubRecord: !0 });
      } else if (s.length > 4) throw new Error('Invalid derivation input');
      const n = '.' + s[1],
        { pubkey: r } = yield It(n),
        o = s[0],
        i = yield It(o, r);
      return Object.assign(Object.assign({}, i), { isSub: !1, parent: void 0 });
    });
Is.getDomainKey = du;
const It = (e, t) =>
  vo(void 0, void 0, void 0, function* () {
    t || (t = yield (0, ln.getOriginNameAccountKey)());
    let s = yield (0, ln.getHashedName)(e),
      [n] = yield (0, ln.getNameAccountKeyWithBump)(s, void 0, t);
    return { pubkey: n, hashed: s };
  });
var tt =
  (le && le.__awaiter) ||
  function (e, t, s, n) {
    function r(o) {
      return o instanceof s
        ? o
        : new s(function (i) {
            i(o);
          });
    }
    return new (s || (s = Promise))(function (o, i) {
      function u(h) {
        try {
          d(n.next(h));
        } catch (y) {
          i(y);
        }
      }
      function l(h) {
        try {
          d(n.throw(h));
        } catch (y) {
          i(y);
        }
      }
      function d(h) {
        h.done ? o(h.value) : r(h.value).then(u, l);
      }
      d((n = n.apply(e, t || [])).next());
    });
  };
Object.defineProperty(Vs, '__esModule', { value: !0 });
Vs.TldParser = void 0;
const ft = ks,
  pu = Ds(),
  hu = Yn,
  un = ns,
  fe = js,
  Lt = ve,
  Er = Is;
class fu {
  constructor(t) {
    this.connection = t;
  }
  getAllUserDomains(t) {
    return tt(this, void 0, void 0, function* () {
      return (
        typeof t == 'string' && (t = new ft.PublicKey(t)),
        yield (0, fe.findOwnedNameAccountsForUser)(this.connection, t, void 0)
      );
    });
  }
  getAllUserDomainsFromTld(t, s) {
    return tt(this, void 0, void 0, function* () {
      const n = '.' + s,
        r = yield (0, fe.getOriginNameAccountKey)(),
        o = yield (0, fe.getHashedName)(n),
        [i] = (0, fe.getNameAccountKeyWithBump)(o, void 0, r);
      return (
        typeof t == 'string' && (t = new ft.PublicKey(t)),
        yield (0, fe.findOwnedNameAccountsForUser)(this.connection, t, i)
      );
    });
  }
  getOwnerFromDomainTld(t) {
    return tt(this, void 0, void 0, function* () {
      const s = t.split('.'),
        n = s[0],
        r = '.' + s[1],
        o = yield (0, fe.getOriginNameAccountKey)(),
        i = yield (0, fe.getHashedName)(r),
        [u] = (0, fe.getNameAccountKeyWithBump)(i, void 0, o),
        l = yield (0, fe.getHashedName)(n),
        [d] = (0, fe.getNameAccountKeyWithBump)(l, void 0, u),
        [h] = (0, fe.findTldHouse)(r);
      return yield (0, fe.getNameOwner)(this.connection, d, h);
    });
  }
  getNameRecordFromDomainTld(t) {
    return tt(this, void 0, void 0, function* () {
      const s = t.split('.'),
        n = s[0],
        r = '.' + s[1],
        o = yield (0, fe.getOriginNameAccountKey)(),
        i = yield (0, fe.getHashedName)(r),
        [u] = (0, fe.getNameAccountKeyWithBump)(i, void 0, o),
        l = yield (0, fe.getHashedName)(n),
        [d] = (0, fe.getNameAccountKeyWithBump)(l, void 0, u);
      return yield un.NameRecordHeader.fromAccountAddress(this.connection, d);
    });
  }
  getTldFromParentAccount(t) {
    var s;
    return tt(this, void 0, void 0, function* () {
      typeof t == 'string' && (t = new ft.PublicKey(t));
      const n = yield un.NameRecordHeader.fromAccountAddress(this.connection, t),
        r = yield this.connection.getAccountInfo(n == null ? void 0 : n.owner),
        i = (s = r == null ? void 0 : r.data) === null || s === void 0 ? void 0 : s.subarray(104),
        u = new pu.BN(i == null ? void 0 : i.subarray(0, 4), 'le').toNumber();
      return i
        .subarray(4, 4 + u)
        .toString()
        .replace(/\0.*$/g, '');
    });
  }
  reverseLookupNameAccount(t, s) {
    var n;
    return tt(this, void 0, void 0, function* () {
      typeof t == 'string' && (t = new ft.PublicKey(t)),
        typeof s == 'string' && (s = new ft.PublicKey(s));
      const r = yield (0, fe.getHashedName)(t.toString()),
        [o] = (0, fe.getNameAccountKeyWithBump)(r, s, void 0),
        i = yield un.NameRecordHeader.fromAccountAddress(this.connection, o);
      return (n = i == null ? void 0 : i.data) === null || n === void 0 ? void 0 : n.toString();
    });
  }
  getMainDomain(t) {
    return tt(this, void 0, void 0, function* () {
      typeof t == 'string' && (t = new ft.PublicKey(t));
      const [s] = (0, fe.findMainDomain)(t);
      return yield hu.MainDomain.fromAccountAddress(this.connection, s);
    });
  }
  getParsedAllUserDomainsFromTldUnwrapped(t, s) {
    return tt(this, void 0, void 0, function* () {
      const n = '.' + s,
        r = yield (0, fe.getOriginNameAccountKey)(),
        o = yield (0, fe.getHashedName)(n),
        [i] = (0, fe.findTldHouse)(n),
        [u] = (0, fe.getNameAccountKeyWithBump)(o, void 0, r);
      typeof t == 'string' && (t = new ft.PublicKey(t));
      const l = yield (0, fe.findOwnedNameAccountsForUser)(this.connection, t, u);
      let d = [];
      for (let h = 0; h < l.length; h += Lt.MULTIPLE_ACCOUNT_INFO_MAX) {
        yield (0, fe.delay)(100);
        const y = Math.min(h + Lt.MULTIPLE_ACCOUNT_INFO_MAX, l.length),
          b = l.slice(h, y),
          p = (yield (0, fe.performReverseLookupBatched)(this.connection, b, i)).map((f, m) => ({
            nameAccount: b[m],
            domain: f + n,
          }));
        p.length > 0 &&
          p.sort((f, m) =>
            f.domain.localeCompare(m.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
          d.push(...p);
      }
      return d;
    });
  }
  getParsedAllUserDomainsFromTld(t, s) {
    return tt(this, void 0, void 0, function* () {
      const n = '.' + s,
        r = yield (0, fe.getOriginNameAccountKey)(),
        o = yield (0, fe.getHashedName)(n),
        [i] = (0, fe.findTldHouse)(n),
        [u] = (0, fe.getNameAccountKeyWithBump)(o, void 0, r);
      typeof t == 'string' && (t = new ft.PublicKey(t));
      const l = yield (0, fe.findOwnedNameAccountsForUser)(this.connection, t, u);
      let d = [];
      const y = (yield (0, fe.getParsedAllDomainsNftAccountsByOwner)(
          t,
          this.connection,
          (0, fe.findNameHouse)(i)[0]
        )).map((w) => w + n),
        b = yield Promise.all(
          y.map((w) =>
            tt(this, void 0, void 0, function* () {
              return { nameAccount: (yield (0, Er.getDomainKey)(w)).pubkey, domain: w };
            })
          )
        );
      d.push(...b);
      for (let w = 0; w < l.length; w += Lt.MULTIPLE_ACCOUNT_INFO_MAX) {
        yield (0, fe.delay)(100);
        const p = Math.min(w + Lt.MULTIPLE_ACCOUNT_INFO_MAX, l.length),
          f = l.slice(w, p),
          x = (yield (0, fe.performReverseLookupBatched)(this.connection, f, i)).map((I, _) => ({
            nameAccount: f[_],
            domain: I + n,
          }));
        d.push(...x);
      }
      return (
        d.length > 0 &&
          d.sort((w, p) =>
            w.domain.localeCompare(p.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
        d
      );
    });
  }
  getParsedAllUserDomainsUnwrapped(t) {
    return tt(this, void 0, void 0, function* () {
      const s = yield (0, fe.getAllTld)(this.connection);
      let n = [];
      typeof t == 'string' && (t = new ft.PublicKey(t));
      for (let { parentAccount: r, tld: o } of s) {
        let i = o.toString();
        const [u] = (0, fe.findTldHouse)(i),
          l = yield (0, fe.findOwnedNameAccountsForUser)(this.connection, t, r);
        for (let d = 0; d < l.length; d += Lt.MULTIPLE_ACCOUNT_INFO_MAX) {
          yield (0, fe.delay)(100);
          const h = Math.min(d + Lt.MULTIPLE_ACCOUNT_INFO_MAX, l.length),
            y = l.slice(d, h),
            w = (yield (0, fe.performReverseLookupBatched)(this.connection, y, u)).map((p, f) => ({
              nameAccount: y[f],
              domain: p + i,
            }));
          n.push(...w);
        }
      }
      return (
        n.length > 0 &&
          n.sort((r, o) =>
            r.domain.localeCompare(o.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
        n
      );
    });
  }
  getParsedAllUserDomains(t) {
    return tt(this, void 0, void 0, function* () {
      const s = yield (0, fe.getAllTld)(this.connection);
      let n = [];
      typeof t == 'string' && (t = new ft.PublicKey(t));
      for (let { parentAccount: r, tld: o } of s) {
        let i = o.toString();
        const [u] = (0, fe.findTldHouse)(i),
          l = yield (0, fe.findOwnedNameAccountsForUser)(this.connection, t, r),
          h = (yield (0, fe.getParsedAllDomainsNftAccountsByOwner)(
            t,
            this.connection,
            (0, fe.findNameHouse)(u)[0]
          )).map((b) => b + i),
          y = yield Promise.all(
            h.map((b) =>
              tt(this, void 0, void 0, function* () {
                return { nameAccount: (yield (0, Er.getDomainKey)(b)).pubkey, domain: b };
              })
            )
          );
        n.push(...y);
        for (let b = 0; b < l.length; b += Lt.MULTIPLE_ACCOUNT_INFO_MAX) {
          yield (0, fe.delay)(100);
          const w = Math.min(b + Lt.MULTIPLE_ACCOUNT_INFO_MAX, l.length),
            p = l.slice(b, w),
            m = (yield (0, fe.performReverseLookupBatched)(this.connection, p, u)).map((x, I) => ({
              nameAccount: p[I],
              domain: x + i,
            }));
          n.push(...m);
        }
      }
      return (
        n.length > 0 &&
          n.sort((r, o) =>
            r.domain.localeCompare(o.domain, void 0, { numeric: !0, sensitivity: 'base' })
          ),
        n
      );
    });
  }
}
Vs.TldParser = fu;
var Co = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.Record = void 0),
    (function (t) {
      (t.IPFS = 'IPFS'),
        (t.ARWV = 'ARWV'),
        (t.SOL = 'SOL'),
        (t.ETH = 'ETH'),
        (t.BTC = 'BTC'),
        (t.LTC = 'LTC'),
        (t.DOGE = 'DOGE'),
        (t.Email = 'email'),
        (t.Url = 'url'),
        (t.Discord = 'discord'),
        (t.Github = 'github'),
        (t.Reddit = 'reddit'),
        (t.Twitter = 'twitter'),
        (t.Telegram = 'telegram'),
        (t.Pic = 'pic'),
        (t.SHDW = 'SHDW'),
        (t.POINT = 'POINT');
    })(e.Record || (e.Record = {}));
})(Co);
(function (e) {
  var t =
      (le && le.__createBinding) ||
      (Object.create
        ? function (n, r, o, i) {
            i === void 0 && (i = o);
            var u = Object.getOwnPropertyDescriptor(r, o);
            (!u || ('get' in u ? !r.__esModule : u.writable || u.configurable)) &&
              (u = {
                enumerable: !0,
                get: function () {
                  return r[o];
                },
              }),
              Object.defineProperty(n, i, u);
          }
        : function (n, r, o, i) {
            i === void 0 && (i = o), (n[i] = r[o]);
          }),
    s =
      (le && le.__exportStar) ||
      function (n, r) {
        for (var o in n)
          o !== 'default' && !Object.prototype.hasOwnProperty.call(r, o) && t(r, n, o);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    s(js, e),
    s(ve, e),
    s(Vs, e),
    s(ns, e),
    s(Yn, e),
    s(Vn, e),
    s(Is, e),
    s(Co, e);
})(Zl);
export {
  bn as A,
  Pn as B,
  nl as C,
  Lu as D,
  zt as E,
  Cu as F,
  Pu as G,
  Zl as H,
  kl as I,
  Ru as J,
  Jt as K,
  Le as L,
  pt as M,
  Ks as N,
  W as P,
  Qt as S,
  Te as T,
  Un as V,
  Wt as a,
  bt as b,
  dt as c,
  Go as d,
  Au as e,
  bu as f,
  Zs as g,
  Xe as h,
  Rn as i,
  ku as j,
  Iu as k,
  xu as l,
  Es as m,
  Su as n,
  Jo as o,
  xl as p,
  On as q,
  bl as r,
  wu as s,
  Dn as t,
  zn as u,
  ol as v,
  _e as w,
  Bu as x,
  vu as y,
  qe as z,
};
